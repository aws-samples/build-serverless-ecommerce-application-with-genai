<template>
  <div class="app-container">

    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <el-input v-model="listQuery.name" clearable class="filter-item" style="width: 200px;"
                :placeholder="$t('promotion_ad.placeholder.filter_name')"/>
      <el-input v-model="listQuery.content" clearable class="filter-item" style="width: 200px;"
                :placeholder="$t('promotion_ad.placeholder.filter_content')"/>
      <el-button v-permission="['GET /admin/ad/list']" class="filter-item" type="primary" icon="el-icon-search"
                 @click="handleFilter">{{ $t('app.button.search') }}
      </el-button>
      <el-button v-permission="['POST /admin/ad/create']" class="filter-item" type="primary" icon="el-icon-edit"
                 @click="handleCreate">{{ $t('app.button.create') }}
      </el-button>
      <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download"
                 @click="handleDownload">{{ $t('app.button.download') }}
      </el-button>
    </div>

    <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" :element-loading-text="$t('app.message.list_loading')" border fit
              highlight-current-row>

      <el-table-column align="center" :label="$t('promotion_ad.table.id')" prop="id" sortable/>

      <el-table-column align="center" :label="$t('promotion_ad.table.name')" prop="name"/>

      <el-table-column align="center" :label="$t('promotion_ad.table.content')" prop="content"/>

      <el-table-column align="center" :label="$t('promotion_ad.table.url')" prop="url">
        <template slot-scope="scope">
          <el-image :src="thumbnail(scope.row.url)" :preview-src-list="toPreview(scope.row, scope.row.url)"
                    style="width: 80px; height: 40px"/>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('promotion_ad.table.position')" prop="position"/>

      <el-table-column align="center" :label="$t('promotion_ad.table.link')" prop="link"/>

      <el-table-column align="center" :label="$t('promotion_ad.table.enabled')" prop="enabled">
        <template slot-scope="scope">
          <el-tag :type="scope.row.enabled ? 'success' : 'error' ">
            {{ $t(scope.row.enabled ? 'promotion_ad.value.enabled_true' : 'promotion_ad.value.enabled_false') }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('promotion_ad.table.actions')" width="200"
                       class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-permission="['POST /admin/ad/update']" type="primary" size="mini"
                     @click="handleUpdate(scope.row)">{{ $t('app.button.edit') }}
          </el-button>
          <el-button v-permission="['POST /admin/ad/delete']" type="danger" size="mini"
                     @click="handleDelete(scope.row)">{{ $t('app.button.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
                @pagination="getList"/>

    <!-- 添加或修改对话框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="dataForm" status-icon label-position="left" label-width="100px"
               style="width: 400px; margin-left:50px;">
        <el-form-item :label="$t('promotion_ad.form.name')" prop="name">
          <el-input v-model="dataForm.name"/>
        </el-form-item>
        <el-form-item :label="$t('promotion_ad.form.content')" prop="content">
          <el-input v-model="dataForm.content"/>
        </el-form-item>
        <el-form-item :label="$t('promotion_ad.form.url')" prop="url">
          <el-upload
            :headers="headers"
            :action="uploadPath"
            :show-file-list="false"
            :on-success="uploadUrl"
            :before-upload="checkFileSize"
            class="avatar-uploader"
            accept=".jpg,.jpeg,.png,.gif"
          >
            <img v-if="dataForm.url" :src="dataForm.url" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"/>
            <div slot="tip" class="el-upload__tip">{{ $t('promotion_ad.help.url') }}</div>
          </el-upload>
        </el-form-item>
        <el-form-item :label="$t('promotion_ad.form.position')" prop="position">
          <el-select v-model="dataForm.position" :placeholder="$t('promotion_ad.placeholder.position')">
            <el-option :value="1" :label="$t('promotion_ad.value.position_1')"/>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('promotion_ad.form.link')" prop="link">
          <el-input v-model="dataForm.link"/>
        </el-form-item>
        <el-form-item :label="$t('promotion_ad.form.enabled')" prop="enabled">
          <el-select v-model="dataForm.enabled" :placeholder="$t('promotion_ad.placeholder.enabled')">
            <el-option :value="true" :label="$t('promotion_ad.value.enabled_true')"/>
            <el-option :value="false" :label="$t('promotion_ad.value.enabled_false')"/>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('app.button.cancel') }}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{
            $t('app.button.confirm')
          }}
        </el-button>
        <el-button v-else type="primary" @click="updateData">{{ $t('app.button.confirm') }}</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}

.avatar {
  width: 145px;
  height: 145px;
  display: block;
}
</style>

<script>
import {listAd, createAd, updateAd, deleteAd} from '@/api/ad'
import {uploadPath} from '@/api/storage'
import {getToken} from '@/utils/auth'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import {thumbnail, toPreview} from '@/utils/index'

export default {
  name: 'Ad',
  components: {Pagination},
  data() {
    return {
      thumbnail,
      toPreview,
      uploadPath,
      list: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: undefined,
        content: undefined,
        sort: 'add_time',
        order: 'desc'
      },
      dataForm: {
        id: undefined,
        name: undefined,
        content: undefined,
        url: undefined,
        link: undefined,
        position: 1,
        enabled: true
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      rules: {
        name: [
          {required: true, message: '广告标题不能为空', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '广告内容不能为空', trigger: 'blur'}
        ],
        url: [{required: true, message: '广告链接不能为空', trigger: 'blur'}]
      },
      downloadLoading: false
    }
  },
  computed: {
    headers() {
      return {
        'X-Litemall-Admin-Token': getToken()
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      listAd(this.listQuery)
        .then(response => {
          this.list = response.data.data.list
          this.total = response.data.data.total
          this.listLoading = false
        })
        .catch(() => {
          this.list = []
          this.total = 0
          this.listLoading = false
        })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    resetForm() {
      this.dataForm = {
        id: undefined,
        name: undefined,
        content: undefined,
        url: undefined,
        link: undefined,
        position: 1,
        enabled: true
      }
    },
    handleCreate() {
      this.resetForm()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    uploadUrl: function (response) {
      this.dataForm.url = response.data.url
    },
    checkFileSize: function (file) {
      if (file.size > 1048576) {
        this.$message.error(`${file.name}文件大于1024KB，请选择小于1024KB大小的图片`)
        return false
      }
      return true
    },
    createData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          createAd(this.dataForm)
            .then(response => {
              this.list.unshift(response.data.data)
              this.dialogFormVisible = false
              this.$notify.success({
                title: '成功',
                message: '创建成功'
              })
            })
            .catch(response => {
              this.$notify.error({
                title: '失败',
                message: response.data.errmsg
              })
            })
        }
      })
    },
    handleUpdate(row) {
      this.dataForm = Object.assign({}, row)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          updateAd(this.dataForm)
            .then(() => {
              for (const v of this.list) {
                if (v.id === this.dataForm.id) {
                  const index = this.list.indexOf(v)
                  this.list.splice(index, 1, this.dataForm)
                  break
                }
              }
              this.dialogFormVisible = false
              this.$notify.success({
                title: '成功',
                message: '更新广告成功'
              })
            })
            .catch(response => {
              this.$notify.error({
                title: '失败',
                message: response.data.errmsg
              })
            })
        }
      })
    },
    handleDelete(row) {
      deleteAd(row)
        .then(response => {
          this.$notify.success({
            title: '成功',
            message: '删除成功'
          })
          this.getList()
        })
        .catch(response => {
          this.$notify.error({
            title: '失败',
            message: response.data.errmsg
          })
        })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = [
          '广告ID',
          '广告标题',
          '广告内容',
          '广告图片',
          '广告位置',
          '活动链接',
          '是否启用'
        ]
        const filterVal = [
          'id',
          'name',
          'content',
          'url',
          'postion',
          'link',
          'enabled'
        ]
        excel.export_json_to_excel2(tHeader, this.list, filterVal, '广告信息')
        this.downloadLoading = false
      })
    }
  }
}
</script>
