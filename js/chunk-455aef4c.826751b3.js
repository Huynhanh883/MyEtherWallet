(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-455aef4c"],{"1f06":function(n,e,t){"use strict";var a=t("f874"),s=t.n(a);s.a},7439:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"dns-process-error"},["0x0000000000000000000000000000000000000000"===n.owner?t("div",{staticClass:"dns-process-content"},[t("h3",[n._v("No TXT setup found for "+n._s(n.domainName)+"!")]),t("p",[n._v('\n      On your DNS management console, please add a TXT type DNS entry "'+n._s("_ens."+n.domainName)+'" with a value containing your Ethereum address in the format of\n      "a=YOURETHREUMADDRESS"\n    ')])]):t("div",{staticClass:"dns-process-content"},[t("h3",[n._v("\n      This name is currently owned in ENS by "+n._s(n.owner)+" but TXT record is no\n      longer available for "+n._s(n.domainName)+"!\n    ")]),t("p",[n._v("\n      You can unclaim this "+n._s(n.domainName)+" from ENS by clicking the following\n      button\n    ")]),t("div",{staticClass:"claim-dns-button"},[t("button",{class:["large-round-button-green-filled",n.loading?"disabled":""],on:{click:n.claimFunc}},[t("span",{directives:[{name:"show",rawName:"v-show",value:!n.loading,expression:"!loading"}]},[n._v("\n          Unclaim\n        ")]),t("i",{directives:[{name:"show",rawName:"v-show",value:n.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),t("interface-bottom-text",{attrs:{"link-text":n.$t("interface.helpCenter"),question:n.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},s=[],o=t("539d"),i={components:{"interface-bottom-text":o["a"]},props:{domainName:{type:String,default:""},owner:{type:String,default:""},claimFunc:{type:Function,default:function(){}},dnsClaim:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1}},mounted:function(){"."===this.domainName&&this.$router.push("/interface/dapps/manage-ens")}},r=i,c=(t("1f06"),t("2877")),l=Object(c["a"])(r,a,s,!1,null,"6635a702",null),u=l.exports;t.d(e,"default",(function(){return u}))},f874:function(n,e,t){}}]);
//# sourceMappingURL=chunk-455aef4c.826751b3.js.map