(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e02ed56"],{a160:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container"},[l("el-form",{ref:"dataForm",attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-width":"300px"}},[l("el-tabs",{attrs:{"tab-position":"left"}},[l("el-tab-pane",{attrs:{label:t.$t("config_wx.section.home")}},[l("el-form-item",{attrs:{label:t.$t("config_wx.form.index_new"),prop:"litemall_wx_index_new"}},[l("el-input",{model:{value:t.dataForm.litemall_wx_index_new,callback:function(e){t.$set(t.dataForm,"litemall_wx_index_new",e)},expression:"dataForm.litemall_wx_index_new"}})],1),l("el-form-item",{attrs:{label:t.$t("config_wx.form.index_hot"),prop:"litemall_wx_index_hot"}},[l("el-input",{model:{value:t.dataForm.litemall_wx_index_hot,callback:function(e){t.$set(t.dataForm,"litemall_wx_index_hot",e)},expression:"dataForm.litemall_wx_index_hot"}})],1),l("el-form-item",{attrs:{label:t.$t("config_wx.form.index_brand"),prop:"litemall_wx_index_brand"}},[l("el-input",{model:{value:t.dataForm.litemall_wx_index_brand,callback:function(e){t.$set(t.dataForm,"litemall_wx_index_brand",e)},expression:"dataForm.litemall_wx_index_brand"}})],1),l("el-form-item",{attrs:{label:t.$t("config_wx.form.index_topic"),prop:"litemall_wx_index_topic"}},[l("el-input",{model:{value:t.dataForm.litemall_wx_index_topic,callback:function(e){t.$set(t.dataForm,"litemall_wx_index_topic",e)},expression:"dataForm.litemall_wx_index_topic"}})],1),l("el-form-item",{attrs:{label:t.$t("config_wx.form.catlog_list"),prop:"litemall_wx_catlog_list"}},[l("el-input",{model:{value:t.dataForm.litemall_wx_catlog_list,callback:function(e){t.$set(t.dataForm,"litemall_wx_catlog_list",e)},expression:"dataForm.litemall_wx_catlog_list"}})],1),l("el-form-item",{attrs:{label:t.$t("config_wx.form.catlog_goods"),prop:"litemall_wx_catlog_goods"}},[l("el-input",{model:{value:t.dataForm.litemall_wx_catlog_goods,callback:function(e){t.$set(t.dataForm,"litemall_wx_catlog_goods",e)},expression:"dataForm.litemall_wx_catlog_goods"}})],1)],1),l("el-tab-pane",{attrs:{label:t.$t("config_wx.section.other")}},[l("el-form-item",{attrs:{label:t.$t("config_wx.form.share"),prop:"litemall_wx_share"}},[l("el-switch",{model:{value:t.dataForm.litemall_wx_share,callback:function(e){t.$set(t.dataForm,"litemall_wx_share",e)},expression:"dataForm.litemall_wx_share"}})],1)],1)],1),l("el-form-item",[l("el-button",{on:{click:t.cancel}},[t._v(t._s(t.$t("app.button.cancel")))]),l("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v(t._s(t.$t("app.button.confirm")))])],1)],1)],1)},i=[],o=l("da71"),n={name:"ConfigWx",data:function(){return{dataForm:{litemall_wx_index_new:0,litemall_wx_index_hot:0,litemall_wx_index_brand:0,litemall_wx_index_topic:0,litemall_wx_catlog_list:0,litemall_wx_catlog_goods:0,litemall_wx_share:!1},rules:{litemall_wx_index_new:[{required:!0,message:"不能为空",trigger:"blur"}],litemall_wx_index_hot:[{required:!0,message:"不能为空",trigger:"blur"}],litemall_wx_index_brand:[{required:!0,message:"不能为空",trigger:"blur"}],litemall_wx_index_topic:[{required:!0,message:"不能为空",trigger:"blur"}],litemall_wx_catlog_list:[{required:!0,message:"不能为空",trigger:"blur"}],litemall_wx_catlog_goods:[{required:!0,message:"不能为空",trigger:"blur"}]}}},created:function(){this.init()},methods:{init:function(){var t=this;Object(o["d"])().then((function(e){t.dataForm=e.data.data,t.dataForm.litemall_wx_share="true"===t.dataForm.litemall_wx_share}))},cancel:function(){this.init()},update:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(!e)return!1;t.doUpdate()}))},doUpdate:function(){var t=this;Object(o["h"])(this.dataForm).then((function(e){t.$notify.success({title:"成功",message:"小程序配置成功"})})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))}}},r=n,_=l("2877"),d=Object(_["a"])(r,a,i,!1,null,null,null);e["default"]=d.exports},da71:function(t,e,l){"use strict";l.d(e,"b",(function(){return i})),l.d(e,"f",(function(){return o})),l.d(e,"a",(function(){return n})),l.d(e,"e",(function(){return r})),l.d(e,"c",(function(){return _})),l.d(e,"g",(function(){return d})),l.d(e,"d",(function(){return c})),l.d(e,"h",(function(){return m}));var a=l("b775");function i(){return Object(a["a"])({url:"/config/mall",method:"get"})}function o(t){return Object(a["a"])({url:"/config/mall",method:"post",data:t})}function n(){return Object(a["a"])({url:"/config/express",method:"get"})}function r(t){return Object(a["a"])({url:"/config/express",method:"post",data:t})}function _(){return Object(a["a"])({url:"/config/order",method:"get"})}function d(t){return Object(a["a"])({url:"/config/order",method:"post",data:t})}function c(){return Object(a["a"])({url:"/config/wx",method:"get"})}function m(t){return Object(a["a"])({url:"/config/wx",method:"post",data:t})}}}]);