(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-250fa10d"],{"90e9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"already-owned-container"},[n("h3",[t._v(t._s(t.fullDomainName)+" "+t._s(t.$t("dapps.alreadyOwned"))+".")]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.labelHash"))+"("+t._s(t.hostName)+"):")]),n("p",{staticClass:"content"},[t._v(t._s(t.labelHash))])]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.nameHash"))+"("+t._s(t.fullDomainName)+"):")]),n("p",{staticClass:"content"},[t._v(t._s(t.nameHash))])]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("dapps.owner"))+":")]),n("p",{staticClass:"content"},[t._v(t._s(t.owner))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.resolverMultiCoinSupport,expression:"resolverMultiCoinSupport"}],staticClass:"content-container"},[n("h4",[t._v(t._s(t.$t("dapps.multiCoin"))+":")]),t._l(t.supportedCoins,(function(e,a){return e.value?n("div",{key:a.id},[n("span",{staticClass:"currency"},[t._v(t._s(e.symbol)+" address: ")]),n("span",{staticClass:"content"},[t._v(t._s(e.value))])]):t._e()}))],2),n("div",{staticClass:"owner-options"},[t.owner.toLowerCase()===t.account.address.toLowerCase()?n("button",{staticClass:"manage-button",on:{click:t.manageEns}},[t._v("\n      "+t._s(t.$t("dapps.manage"))+"\n    ")]):t._e()]),n("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},s=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),r=n("539d"),i=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={components:{"interface-bottom-text":r["a"]},props:{labelHash:{type:String,default:""},nameHash:{type:String,default:""},owner:{type:String,default:""},hostName:{type:String,default:""},tld:{type:String,default:""},supportedCoins:{type:Object,default:function(){}},resolverMultiCoinSupport:{type:Boolean,default:!1}},data:function(){return{}},computed:l({},Object(i["b"])(["account"]),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)}}),mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")},methods:{manageEns:function(){this.$router.push("manage")}}},u=p,d=(n("d1af"),n("2877")),f=Object(d["a"])(u,a,s,!1,null,"72fb22d4",null),m=f.exports;n.d(e,"default",(function(){return m}))},a98a:function(t,e,n){},d1af:function(t,e,n){"use strict";var a=n("a98a"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-250fa10d.22b8a30b.js.map