(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-280173cc"],{"333d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},o=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,i){return t/=i/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var i=n(),o=t-i,s=20,d=0;e="undefined"===typeof e?500:e;var u=function t(){d+=s;var n=Math.easeInOutQuad(d,i,o,e);r(n),d<e?l(t):a&&"function"===typeof a&&a()};u()}var d={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},u=d,c=(a("c9a9"),a("2877")),m=Object(c["a"])(u,i,o,!1,null,"5f570286",null);e["a"]=m.exports},"5c46":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:t.$t("mall_keyword.placeholder.filter_keyword")},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}}),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:t.$t("mall_keyword.placeholder.filter_url")},model:{value:t.listQuery.url,callback:function(e){t.$set(t.listQuery,"url",e)},expression:"listQuery.url"}}),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/keyword/list"],expression:"['GET /admin/keyword/list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("app.button.search"))+" ")]),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/keyword/create"],expression:"['POST /admin/keyword/create']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v(t._s(t.$t("app.button.create"))+" ")]),a("el-button",{staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v(t._s(t.$t("app.button.download"))+" ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":t.$t("app.message.list_loading"),border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",width:"150px",label:t.$t("mall_keyword.table.id"),prop:"id",sortable:""}}),a("el-table-column",{attrs:{align:"center","min-width":"100px",label:t.$t("mall_keyword.table.keyword"),prop:"keyword"}}),a("el-table-column",{attrs:{align:"center","min-width":"300px",label:t.$t("mall_keyword.table.url"),prop:"url"}}),a("el-table-column",{attrs:{align:"center","min-width":"100px",label:t.$t("mall_keyword.table.is_hot"),prop:"isHot"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:e.row.isHot?"success":"error"}},[t._v(t._s(t.$t(e.row.isHot?"mall_keyword.text.yes":"mall_keyword.text.no"))+" ")])]}}])}),a("el-table-column",{attrs:{align:"center","min-width":"100px",label:t.$t("mall_keyword.table.is_default"),prop:"isDefault"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:e.row.isDefault?"success":"error"}},[t._v(t._s(t.$t(e.row.isDefault?"mall_keyword.text.yes":"mall_keyword.text.no"))+" ")])]}}])}),a("el-table-column",{attrs:{align:"center",label:t.$t("mall_keyword.table.actions"),width:"250","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/keyword/update"],expression:"['POST /admin/keyword/update']"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleUpdate(e.row)}}},[t._v(t._s(t.$t("app.button.edit"))+" ")]),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/keyword/delete"],expression:"['POST /admin/keyword/delete']"}],attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v(t._s(t.$t("app.button.delete"))+" ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:t.$t("mall_keyword.form.keyword"),prop:"keyword"}},[a("el-input",{model:{value:t.dataForm.keyword,callback:function(e){t.$set(t.dataForm,"keyword",e)},expression:"dataForm.keyword"}})],1),a("el-form-item",{attrs:{label:t.$t("mall_keyword.form.url"),prop:"url"}},[a("el-input",{model:{value:t.dataForm.url,callback:function(e){t.$set(t.dataForm,"url",e)},expression:"dataForm.url"}})],1),a("el-form-item",{attrs:{label:t.$t("mall_keyword.form.is_hot"),prop:"isHot"}},[a("el-select",{attrs:{placeholder:t.$t("mall_keyword.form.is_hot.placeholder")},model:{value:t.dataForm.isHot,callback:function(e){t.$set(t.dataForm,"isHot",e)},expression:"dataForm.isHot"}},[a("el-option",{attrs:{value:!0,label:t.$t("mall_keyword.value.is_hot_true")}}),a("el-option",{attrs:{value:!1,label:t.$t("mall_keyword.value.is_hot_false")}})],1)],1),a("el-form-item",{attrs:{label:t.$t("mall_keyword.form.is_default"),prop:"isDefault"}},[a("el-select",{attrs:{placeholder:t.$t("mall_keyword.form.is_default.placeholder")},model:{value:t.dataForm.isDefault,callback:function(e){t.$set(t.dataForm,"isDefault",e)},expression:"dataForm.isDefault"}},[a("el-option",{attrs:{value:!0,label:t.$t("mall_keyword.value.is_default_true")}}),a("el-option",{attrs:{value:!1,label:t.$t("mall_keyword.value.is_default_false")}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("app.button.cancel")))]),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v(t._s(t.$t("app.button.confirm"))+" ")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v(t._s(t.$t("app.button.confirm")))])],1)],1)],1)},o=[],l=a("b85c"),r=(a("a434"),a("d3b7"),a("3ca3"),a("ddb0"),a("b775"));function n(t){return Object(r["a"])({url:"/keyword/list",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/keyword/create",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/keyword/update",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/keyword/delete",method:"post",data:t})}var c=a("333d"),m={name:"Keyword",components:{Pagination:c["a"]},data:function(){return{list:[],total:0,listLoading:!0,listQuery:{page:1,limit:20,keyword:void 0,url:void 0,sort:"add_time",order:"desc"},dataForm:{id:void 0,keyword:void 0,url:void 0,isHot:void 0,isDefault:void 0},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{keyword:[{required:!0,message:"关键词不能为空",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,n(this.listQuery).then((function(e){t.list=e.data.data.list,t.total=e.data.data.total,t.listLoading=!1})).catch((function(){t.list=[],t.total=0,t.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},resetForm:function(){this.dataForm={id:void 0,keyword:void 0,url:void 0,isHot:void 0,isDefault:void 0}},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&s(t.dataForm).then((function(e){t.list.unshift(e.data.data),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"创建成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleUpdate:function(t){var e=this;this.dataForm=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&d(t.dataForm).then((function(){var e,a=Object(l["a"])(t.list);try{for(a.s();!(e=a.n()).done;){var i=e.value;if(i.id===t.dataForm.id){var o=t.list.indexOf(i);t.list.splice(o,1,t.dataForm);break}}}catch(r){a.e(r)}finally{a.f()}t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}))},handleDelete:function(t){var e=this;u(t).then((function(t){e.$notify.success({title:"成功",message:"删除成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-ded9d522"),a.e("chunk-2d0cc0b6")]).then(a.bind(null,"4bf8")).then((function(e){var a=["关键词ID","关键词","跳转链接","是否推荐","是否默认"],i=["id","keyword","url","isHot","isDefault"];e.export_json_to_excel2(a,t.list,i,"关键词设置"),t.downloadLoading=!1}))}}},p=m,f=a("2877"),h=Object(f["a"])(p,i,o,!1,null,null,null);e["default"]=h.exports},c9a9:function(t,e,a){"use strict";a("e7c4")},e7c4:function(t,e,a){}}]);