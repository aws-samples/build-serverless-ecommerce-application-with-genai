(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e17d0"],{"7b3b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.list,"element-loading-text":t.$t("app.message.list_loading"),"row-key":"id",border:""}},[a("el-table-column",{attrs:{label:t.$t("mall_region.table.name"),prop:"name"}}),a("el-table-column",{attrs:{label:t.$t("mall_region.table.type"),prop:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("typeFilter")(e.row.type))+" ")]}}])}),a("el-table-column",{attrs:{label:t.$t("mall_region.table.code"),prop:"code"}})],1)],1)},l=[],i=a("b775");function o(){return Object(i["a"])({url:"/region/list",method:"get"})}var r={name:"Region",filters:{typeFilter:function(t){var e={1:"省",2:"市",3:"区"};return e[t]}},data:function(){return{list:[],listLoading:!0,downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,o().then((function(e){t.list=e.data.data.list,t.listLoading=!1})).catch((function(){t.list=[],t.listLoading=!1}))}}},s=r,d=a("2877"),c=Object(d["a"])(s,n,l,!1,null,null,null);e["default"]=c.exports}}]);