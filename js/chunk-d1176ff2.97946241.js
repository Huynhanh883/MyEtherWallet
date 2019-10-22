(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1176ff2"],{"124d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"deploy-contract-container"},[n("interface-container-title",{attrs:{title:t.$t("common.depContract")}}),n("div",{staticClass:"content-container"},[n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("interface.byteCode")))]),n("div",{staticClass:"copy-buttons"},[n("button",{staticClass:"title-button",on:{click:function(e){return t.deleteInput("bytecode")}}},[t._v("\n              "+t._s(t.$t("common.clear"))+"\n            ")]),n("button",{staticClass:"title-button",on:{click:function(e){return t.copyToClipboard("bytecode")}}},[t._v("\n              "+t._s(t.$t("common.copy"))+"\n            ")])])])]),n("div",{staticClass:"the-form byte-code"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bytecode,expression:"bytecode"}],ref:"bytecode",staticClass:"custom-textarea-1",domProps:{value:t.bytecode},on:{input:function(e){e.target.composing||(t.bytecode=e.target.value)}}}),n("i",{class:[t.isValidByte?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("interface.abiJsonInt")))]),n("div",{staticClass:"copy-buttons"},[n("button",{staticClass:"title-button",on:{click:function(e){return t.deleteInput("abi")}}},[t._v("\n              "+t._s(t.$t("common.clear"))+"\n            ")]),n("button",{staticClass:"title-button",on:{click:function(e){return t.copyToClipboard("abi")}}},[t._v("\n              "+t._s(t.$t("common.copy"))+"\n            ")])])])]),n("div",{staticClass:"the-form"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.abi,expression:"abi"}],ref:"abi",staticClass:"custom-textarea-1",domProps:{value:t.abi},on:{input:function(e){e.target.composing||(t.abi=e.target.value)}}}),n("i",{class:[t.isValidAbi&&""!==t.abi?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),t.abiConstructor?n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v("\n            "+t._s(t.$t("interface.constructor"))+"\n            "+t._s(t.abiConstructor?"Inputs":"Input")+":\n          ")])])]),t._l(t.abiConstructor.inputs,(function(e,a){return n("div",{key:e.name+a},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h5",[t._v(t._s(t._f("capitalize")(e.name))+" ("+t._s(e.type)+"):")])])]),n("div",{staticClass:"the-form contract-name"},["checkbox"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inputs[e.name])?t._i(t.inputs[e.name],null)>-1:t.inputs[e.name]},on:{change:function(n){var a=t.inputs[e.name],i=n.target,s=!!i.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);i.checked?o<0&&t.$set(t.inputs,e.name,a.concat([r])):o>-1&&t.$set(t.inputs,e.name,a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.inputs,e.name,s)}}}):"radio"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{type:"radio"},domProps:{checked:t._q(t.inputs[e.name],null)},on:{change:function(n){return t.$set(t.inputs,e.name,null)}}}):"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{type:t.getType(e.type).type},domProps:{value:t.inputs[e.name]},on:{input:function(n){n.target.composing||t.$set(t.inputs,e.name,n.target.value)}}}):t._e(),"radio"===t.getType(e.type).type?n("div",{staticClass:"bool-input-container"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio"},domProps:{value:!0,checked:t._q(t.inputs[e.name],!0)},on:{change:function(n){return t.$set(t.inputs,e.name,!0)}}}),n("label",{attrs:{for:e.name}},[t._v("True")])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio",checked:""},domProps:{value:!1,checked:t._q(t.inputs[e.name],!1)},on:{change:function(n){return t.$set(t.inputs,e.name,!1)}}}),n("label",{attrs:{for:e.name}},[t._v("False")])])]):t._e(),n("i",{class:[t.isValidInput(t.inputs[e.name],t.getType(e.type).solidityType)?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])}))],2):t._e(),null!==t.abiConstructor&&t.abiConstructor.payable?n("div",{staticClass:"send-form"},[t._m(0),n("div",{staticClass:"the-form contract-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"value",attrs:{step:"any",placeholder:"Value in ETH"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])]):t._e(),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("interface.contractName")))])])]),n("div",{staticClass:"the-form contract-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contractName,expression:"contractName"}],ref:"contractName",attrs:{placeholder:"Name for the contract"},domProps:{value:t.contractName},on:{input:function(e){e.target.composing||(t.contractName=e.target.value)}}})])]),n("div",{staticClass:"submit-button-container"},[n("div",{staticClass:"buttons"},[n("div",{class:[t.allValid?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:t.confirmationModalOpen}},[t._v("\n          "+t._s(t.$t("common.signTx"))+"\n        ")])]),n("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v("Value in ETH:")])])])}],s=(n("8e6e"),n("456d"),n("20d6"),n("96cf"),n("3b8d")),r=(n("28a5"),n("a481"),n("6762"),n("2fdb"),n("7f7f"),n("ac6a"),n("6b54"),n("bd86")),o=n("539d"),c=n("55c1"),u=n("ce96"),l=n("70c1"),d=n.n(l),p=n("8d23"),m=n("901e"),v=n.n(m),b=n("8ded"),f=n.n(b),h=n("b671"),y=n("2f62");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w={name:"DeployContract",components:{"interface-bottom-text":o["a"],"interface-container-title":c["a"]},data:function(){return{bytecode:"",abi:"",inputs:{},contractName:"",gasLimit:21e3,data:"",value:0}},computed:C({},Object(y["b"])(["gasPrice","web3","network"]),{isValidAbi:function(){return u["c"].isJson(this.abi)&&Array.isArray(JSON.parse(this.abi))},txValue:function(){return u["c"].sanitizeHex(d.a.toWei(this.value,"ether").toString(16))},abiConstructor:function(){var t=this,e=null;return this.isValidAbi&&JSON.parse(this.abi).forEach((function(t){"constructor"===t.type&&(e=t)})),e&&e.hasOwnProperty("inputs")&&e.inputs.forEach((function(e){"bool"===e.type&&(t.inputs[e.name]=!1)})),e},rawByteCode:function(){try{var t=JSON.parse(this.bytecode);if(t.object&&u["c"].validateHexString(t.object))return"0x"+t.object}catch(e){return this.bytecode}},isValidByte:function(){return this.rawByteCode&&"0x"===this.rawByteCode.substr(0,2)&&u["c"].validateHexString(this.rawByteCode)},txByteCode:function(){return u["c"].sanitizeHex(this.rawByteCode)},deployArgs:function(){var t=this,e=[];return this.abiConstructor&&this.abiConstructor.inputs.forEach((function(n){if(n.type.includes("[")&&n.type.includes("]")){var a=t.inputs.hasOwnProperty(n.name)?t.inputs[n.name].replace(/\s/g,""):"",i=a.split(",");e.push(i)}else e.push(t.inputs[n.name])})),e},txData:function(){return""!==this.abi?new this.web3.eth.Contract(JSON.parse(this.abi)).deploy({data:this.txByteCode,arguments:this.deployArgs}).encodeABI():"0x"},allValid:function(){var t=this,e=!0;return this.abiConstructor&&this.abiConstructor.inputs.forEach((function(n,a){t.isValidInput(t.deployArgs[a],t.getType(n.type).solidityType)||(e=!1)})),e&&this.isValidAbi&&this.isValidByte}}),methods:{isValidInput:u["c"].isContractArgValid,getType:u["c"].solidityType,sendTransaction:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.estimateGas();case 3:return e=this.web3,t.next=6,e.eth.getCoinbase();case 6:return n=t.sent,t.next=9,e.eth.getTransactionCount(n);case 9:a=t.sent,i=new p["Transaction"]({nonce:a,value:this.txValue,gasPrice:u["c"].sanitizeHex(d.a.toWei(this.gasPrice,"gwei").toString(16)),gasLimit:u["c"].sanitizeHex(new v.a(this.gasLimit).toString(16)),data:this.txData}),s=i.toJSON(!0),delete s.to,s.from=n,this.web3.eth.sendTransaction(s).catch((function(t){u["d"].responseHandler(t,u["d"].WARN)})),r=Object(h["bufferToHex"])(Object(h["generateAddress"])(n,a)),this.pushContractToStore(r),t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](0),u["d"].responseHandler(t.t0,!1);case 22:case"end":return t.stop()}}),t,this,[[0,19]])})));function e(){return t.apply(this,arguments)}return e}(),pushContractToStore:function(t){var e=this,n=f.a.get("customContracts")||[],a=n.findIndex((function(t){return t.name.toLowerCase()===e.contractName.toLowerCase()}));if(-1===a){var i={abi:JSON.parse(this.abi),address:t,comment:"",name:this.contractName};n.push(i)}else n[a]={abi:JSON.parse(this.abi),address:t,comment:"",name:this.contractName};f.a.set("customContracts",n)},confirmationModalOpen:function(){this.sendTransaction(),window.scrollTo(0,0)},estimateGas:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.web3.eth.getCoinbase();case 2:return e=t.sent,n={from:e,data:this.txData,value:this.txValue},t.next=6,this.web3.eth.estimateGas(n).catch((function(t){u["d"].responseHandler(t,u["d"].WARN)}));case 6:this.gasLimit=t.sent;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),copyToClipboard:function(t){this.$refs[t].select(),document.execCommand("copy")},deleteInput:function(t){this[t]=""}}},x=w,_=(n("5911"),n("2877")),O=Object(_["a"])(x,a,i,!1,null,"c87bbac4",null),k=O.exports;n.d(e,"default",(function(){return k}))},"232d":function(t,e,n){},5911:function(t,e,n){"use strict";var a=n("232d"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-d1176ff2.97946241.js.map