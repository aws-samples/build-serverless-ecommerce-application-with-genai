(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-147d7dd3"],{"0625":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:e.transitionName}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:e.customStyle,on:{click:e.backToTop}},[a("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[a("title",[e._v(e._s(e.$t("app.button.back_to_top")))]),a("g",[a("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},i=[],n=(a("a9e3"),{name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var e=this;if(!this.isMoving){var t=window.pageYOffset,a=0;this.isMoving=!0,this.interval=setInterval((function(){var l=Math.floor(e.easeInOutQuad(10*a,t,-t,500));l<=e.backPosition?(window.scrollTo(0,e.backPosition),clearInterval(e.interval),e.isMoving=!1):window.scrollTo(0,l),a++}),16.7)}},easeInOutQuad:function(e,t,a,l){return(e/=l/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t}}}),s=n,r=(a("9087"),a("2877")),o=Object(r["a"])(s,l,i,!1,null,"4e4e0fe0",null);t["a"]=o.exports},"23db":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:e.$t("mall_aftersale.placeholder.filter_aftersale_sn")},model:{value:e.listQuery.aftersaleSn,callback:function(t){e.$set(e.listQuery,"aftersaleSn",t)},expression:"listQuery.aftersaleSn"}}),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:e.$t("mall_aftersale.placeholder.filter_order_id")},model:{value:e.listQuery.orderId,callback:function(t){e.$set(e.listQuery,"orderId",t)},expression:"listQuery.orderId"}}),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/aftersale/list"],expression:"['GET /admin/aftersale/list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("app.button.search"))+" ")]),a("el-button",{staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(e._s(e.$t("app.button.download"))+" ")])],1),a("div",{staticClass:"operator-container"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/aftersale/batch-recept"],expression:"['GET /admin/aftersale/batch-recept']"}],staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-info"},on:{click:e.handleBatchRecept}},[e._v(e._s(e.$t("mall_aftersale.button.batch_recept"))+" ")]),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/aftersale/batch-reject"],expression:"['GET /admin/aftersale/batch-reject']"}],staticClass:"filter-item",attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.handleBatchReject}},[e._v(e._s(e.$t("mall_aftersale.button.batch_reject"))+" ")])],1),a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("el-tab-pane",{attrs:{label:e.$t("mall_aftersale.section.all"),name:"all"}}),a("el-tab-pane",{attrs:{label:e.$t("mall_aftersale.section.uncheck"),name:"uncheck"}}),a("el-tab-pane",{attrs:{label:e.$t("mall_aftersale.section.unrefund"),name:"unrefund"}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.$t("app.message.list_loading"),fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{align:"center",label:e.$t("mall_aftersale.table.aftersale_sn"),prop:"aftersaleSn"}}),a("el-table-column",{attrs:{align:"center",label:e.$t("mall_aftersale.table.order_id"),prop:"orderId"}}),a("el-table-column",{attrs:{align:"center",label:e.$t("mall_aftersale.table.user_id"),prop:"userId"}}),a("el-table-column",{attrs:{align:"center",label:e.$t("mall_aftersale.table.type"),prop:"type"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.typeTag[t.row.type]}},[e._v(e._s(e.typeDesc[t.row.type]))])]}}])}),a("el-table-column",{attrs:{align:"center",label:e.$t("mall_aftersale.table.reason"),prop:"reason"}}),a("el-table-column",{attrs:{align:"center",label:e.$t("mall_aftersale.table.amount"),prop:"amount"}}),a("el-table-column",{attrs:{align:"center",label:e.$t("mall_aftersale.table.add_time"),prop:"addTime"}}),a("el-table-column",{attrs:{align:"center",label:e.$t("mall_aftersale.table.actions"),"min-width":"120","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/aftersale/detail"],expression:"['POST /admin/aftersale/detail']"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleRead(t.row)}}},[e._v(e._s(e.$t("app.button.detail"))+" ")]),1===t.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/aftersale/recept"],expression:"['POST /admin/aftersale/recept']"}],attrs:{type:"success",size:"mini"},on:{click:function(a){return e.handleRecept(t.row)}}},[e._v(e._s(e.$t("mall_aftersale.button.recept"))+" ")]):e._e(),1===t.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/aftersale/reject"],expression:"['POST /admin/aftersale/reject']"}],attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleReject(t.row)}}},[e._v(e._s(e.$t("mall_aftersale.button.reject"))+" ")]):e._e(),2===t.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/aftersale/refund"],expression:"['POST /admin/aftersale/refund']"}],attrs:{type:"warning",size:"mini"},on:{click:function(a){return e.handleRefund(t.row)}}},[e._v(e._s(e.$t("mall_aftersale.button.refund"))+" ")]):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),a("el-tooltip",{attrs:{placement:"top",content:e.$t("app.tooltip.back_to_top")}},[a("back-to-top",{attrs:{"visibility-height":100}})],1),a("el-dialog",{attrs:{visible:e.aftersaleDialogVisible,title:e.$t("mall_aftersale.dialog.detail"),width:"800"},on:{"update:visible":function(t){e.aftersaleDialogVisible=t}}},[a("section",{ref:"print"},[a("el-form",{attrs:{data:e.aftersaleDetail,"label-position":"left"}},[a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.id")}},[a("el-tag",[e._v(e._s(e.aftersaleDetail.id))])],1),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.aftersale_sn")}},[a("el-tag",[e._v(e._s(e.aftersaleDetail.aftersaleSn))])],1),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.order_id")}},[a("el-tag",[e._v(e._s(e.aftersaleDetail.orderId))])],1),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.amount")}},[a("el-tag",[e._v(e._s(e.aftersaleDetail.amount))])],1),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.status")}},[1===e.aftersaleDetail.status?a("el-tag",[e._v(e._s(e.$t("mall_aftersale.value.status_1")))]):e._e(),2===e.aftersaleDetail.status?a("el-tag",[e._v(e._s(e.$t("mall_aftersale.value.status_2")))]):e._e(),3===e.aftersaleDetail.status?a("el-tag",[e._v(e._s(e.$t("mall_aftersale.value.status_3")))]):e._e(),4===e.aftersaleDetail.status?a("el-tag",[e._v(e._s(e.$t("mall_aftersale.value.status_4")))]):e._e()],1),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.user_id")}},[a("el-tag",[e._v(e._s(e.aftersaleDetail.userId))])],1),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.type")}},[0===e.aftersaleDetail.type?a("el-tag",[e._v(e._s(e.$t("mall_aftersale.value.type_0")))]):e._e(),1===e.aftersaleDetail.type?a("el-tag",[e._v(e._s(e.$t("mall_aftersale.value.type_1")))]):e._e(),2===e.aftersaleDetail.type?a("el-tag",[e._v(e._s(e.$t("mall_aftersale.value.type_2")))]):e._e()],1),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.reason")}},[a("span",[e._v(e._s(e.aftersaleDetail.reason))])]),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.add_time")}},[a("span",[e._v(e._s(e.aftersaleDetail.addTime))])]),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.update_time")}},[a("span",[e._v(e._s(e.aftersaleDetail.updateTime))])]),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.handle_time")}},[a("span",[e._v(e._s(e.aftersaleDetail.handleTime))])]),a("el-form-item",{attrs:{label:e.$t("mall_aftersale.form.pictures")}},[a("el-table",{attrs:{data:e.aftersaleDetail.pictures,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:e.$t("mall_aftersale.table.detail_pictures")},scopedSlots:e._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row,target:"_blank"}},[a("img",{attrs:{src:e.row,width:"40"}})])]}}])})],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.aftersaleDialogVisible=!1}}},[e._v(e._s(e.$t("mall_aftersale.button.cancel")))])],1)])],1)},i=[],n=(a("14d9"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("b775"));function s(e){return Object(n["a"])({url:"/aftersale/list",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/aftersale/recept",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/aftersale/batch-recept",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/aftersale/reject",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/aftersale/batch-reject",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/aftersale/refund",method:"post",data:e})}var f=a("0625"),m=a("333d"),p=a("2ef0"),h=a.n(p),g={name:"Aftersale",components:{BackToTop:f["a"],Pagination:m["a"]},data:function(){return{list:[],total:0,listLoading:!0,tab:"all",listQuery:{page:1,limit:20,aftersaleSn:void 0,orderId:void 0,status:"",sort:"add_time",order:"desc"},typeTag:["","success","warning"],typeDesc:["未收货退款","不退货退款","退货退款"],multipleSelection:[],contentDetail:"",contentDialogVisible:!1,downloadLoading:!1,aftersaleDialogVisible:!1,aftersaleDetail:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,s(this.listQuery).then((function(t){e.list=t.data.data.list,e.total=t.data.data.total,e.listLoading=!1})).catch((function(){e.list=[],e.total=0,e.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSelectionChange:function(e){this.multipleSelection=e},handleClick:function(){"all"===this.tab?this.listQuery.status="":"uncheck"===this.tab?this.listQuery.status="1":"unrefund"===this.tab&&(this.listQuery.status="2"),this.getList()},handleRecept:function(e){var t=this;r(e).then((function(e){t.$notify.success({title:"成功",message:"审核通过操作成功"}),t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))},handleBatchRecept:function(){var e=this;if(0!==this.multipleSelection.length){var t=[];h.a.forEach(this.multipleSelection,(function(e){t.push(e.id)})),o({ids:t}).then((function(t){e.$notify.success({title:"成功",message:"批量通过操作成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))}else this.$message.error("请选择至少一条记录")},handleReject:function(e){var t=this;c(e).then((function(e){t.$notify.success({title:"成功",message:"审核拒绝操作成功"}),t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))},handleBatchReject:function(){var e=this;if(0!==this.multipleSelection.length){var t=[];h.a.forEach(this.multipleSelection,(function(e){t.push(e.id)})),u({ids:t}).then((function(t){e.$notify.success({title:"成功",message:"批量拒绝操作成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))}else this.$message.error("请选择至少一条记录")},handleRefund:function(e){var t=this;d(e).then((function(e){t.$notify.success({title:"成功",message:"退款操作成功"}),t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-ded9d522"),a.e("chunk-2d0cc0b6")]).then(a.bind(null,"4bf8")).then((function(t){var a=["售后编号","订单ID","用户ID","售后类型","退款原因","退款价格","申请时间"],l=["aftersaleSn","orderId","userId","type","reason","amount","addTime"];t.export_json_to_excel2(a,e.list,l,"售后信息"),e.downloadLoading=!1}))},handleRead:function(e){this.aftersaleDetail=e,console.log(this.aftersaleDetail),this.aftersaleDialogVisible=!0}}},b=g,_=a("2877"),v=Object(_["a"])(b,l,i,!1,null,null,null);t["default"]=v.exports},"333d":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,l){return e/=l/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,a){var l=r(),i=e-l,o=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=o;var r=Math.easeInOutQuad(c,l,i,t);s(r),c<t?n(e):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&o(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&o(0,800)}}},u=c,d=(a("c9a9"),a("2877")),f=Object(d["a"])(u,l,i,!1,null,"5f570286",null);t["a"]=f.exports},9087:function(e,t,a){"use strict";a("b3ae")},b3ae:function(e,t,a){},c9a9:function(e,t,a){"use strict";a("e7c4")},e7c4:function(e,t,a){}}]);