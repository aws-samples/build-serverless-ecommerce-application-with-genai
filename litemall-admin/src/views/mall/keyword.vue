<template>
  <div class="app-container">

    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <el-input v-model="listQuery.keyword" clearable class="filter-item" style="width: 200px;"
                :placeholder="$t('mall_keyword.placeholder.filter_keyword')"/>
      <el-input v-model="listQuery.url" clearable class="filter-item" style="width: 200px;"
                :placeholder="$t('mall_keyword.placeholder.filter_url')"/>
      <el-button v-permission="['GET /admin/keyword/list']" class="filter-item" type="primary" icon="el-icon-search"
                 @click="handleFilter">{{ $t('app.button.search') }}
      </el-button>
      <el-button v-permission="['POST /admin/keyword/create']" class="filter-item" type="primary" icon="el-icon-edit"
                 @click="handleCreate">{{ $t('app.button.create') }}
      </el-button>
      <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download"
                 @click="handleDownload">{{ $t('app.button.download') }}
      </el-button>
    </div>

    <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" :element-loading-text="$t('app.message.list_loading')" border fit
              highlight-current-row>

      <el-table-column align="center" width="150px" :label="$t('mall_keyword.table.id')" prop="id" sortable/>

      <el-table-column align="center" min-width="100px" :label="$t('mall_keyword.table.keyword')" prop="keyword"/>

      <el-table-column align="center" min-width="300px" :label="$t('mall_keyword.table.url')" prop="url"/>

      <el-table-column align="center" min-width="100px" :label="$t('mall_keyword.table.is_hot')" prop="isHot">
        <template slot-scope="scope">
          <el-tag :type="scope.row.isHot ? 'success' : 'error' ">{{ $t(scope.row.isHot ? 'mall_keyword.text.yes' :
            'mall_keyword.text.no') }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" min-width="100px" :label="$t('mall_keyword.table.is_default')" prop="isDefault">
        <template slot-scope="scope">
          <el-tag :type="scope.row.isDefault ? 'success' : 'error' ">{{ $t(scope.row.isDefault ? 'mall_keyword.text.yes'
            : 'mall_keyword.text.no') }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" :label="$t('mall_keyword.table.actions')" width="250"
                       class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-permission="['POST /admin/keyword/update']" type="primary" size="mini"
                     @click="handleUpdate(scope.row)">{{ $t('app.button.edit') }}
          </el-button>
          <el-button v-permission="['POST /admin/keyword/delete']" type="danger" size="mini"
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
        <el-form-item :label="$t('mall_keyword.form.keyword')" prop="keyword">
          <el-input v-model="dataForm.keyword"/>
        </el-form-item>
        <el-form-item :label="$t('mall_keyword.form.url')" prop="url">
          <el-input v-model="dataForm.url"/>
        </el-form-item>
        <el-form-item :label="$t('mall_keyword.form.is_hot')" prop="isHot">
          <el-select v-model="dataForm.isHot" :placeholder="$t('mall_keyword.form.is_hot.placeholder')">
            <el-option :value="true" :label="$t('mall_keyword.value.is_hot_true')"/>
            <el-option :value="false" :label="$t('mall_keyword.value.is_hot_false')"/>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('mall_keyword.form.is_default')" prop="isDefault">
          <el-select v-model="dataForm.isDefault" :placeholder="$t('mall_keyword.form.is_default.placeholder')">
            <el-option :value="true" :label="$t('mall_keyword.value.is_default_true')"/>
            <el-option :value="false" :label="$t('mall_keyword.value.is_default_false')"/>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('app.button.cancel') }}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{ $t('app.button.confirm') }}
        </el-button>
        <el-button v-else type="primary" @click="updateData">{{ $t('app.button.confirm') }}</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import {listKeyword, createKeyword, updateKeyword, deleteKeyword} from '@/api/keyword'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'Keyword',
  components: {Pagination},
  data() {
    return {
      list: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        keyword: undefined,
        url: undefined,
        sort: 'add_time',
        order: 'desc'
      },
      dataForm: {
        id: undefined,
        keyword: undefined,
        url: undefined,
        isHot: undefined,
        isDefault: undefined
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      rules: {
        keyword: [{required: true, message: '关键词不能为空', trigger: 'blur'}]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      listKeyword(this.listQuery).then(response => {
        this.list = response.data.data.list
        this.total = response.data.data.total
        this.listLoading = false
      }).catch(() => {
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
        keyword: undefined,
        url: undefined,
        isHot: undefined,
        isDefault: undefined
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
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          createKeyword(this.dataForm).then(response => {
            this.list.unshift(response.data.data)
            this.dialogFormVisible = false
            this.$notify.success({
              title: '成功',
              message: '创建成功'
            })
          }).catch(response => {
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
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          updateKeyword(this.dataForm).then(() => {
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
              message: '更新成功'
            })
          }).catch(response => {
            this.$notify.error({
              title: '失败',
              message: response.data.errmsg
            })
          })
        }
      })
    },
    handleDelete(row) {
      deleteKeyword(row).then(response => {
        this.$notify.success({
          title: '成功',
          message: '删除成功'
        })
        this.getList()
      }).catch(response => {
        this.$notify.error({
          title: '失败',
          message: response.data.errmsg
        })
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['关键词ID', '关键词', '跳转链接', '是否推荐', '是否默认']
        const filterVal = ['id', 'keyword', 'url', 'isHot', 'isDefault']
        excel.export_json_to_excel2(tHeader, this.list, filterVal, '关键词设置')
        this.downloadLoading = false
      })
    }
  }
}
</script>
