(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43062db4"],{"27b7":function(e,a,t){"use strict";var r=t("7d58"),s=t.n(r);s.a},4652:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"about-your-dapp w-50 mb-5 mt-5"},[t("b-form",{attrs:{onsubmit:"return false;"}},[t("b-form-group",[t("label",{staticClass:"dapp-label"},[e._v("Dapp name")]),t("div",{staticClass:"dapp-input"},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"dappName",name:"name",type:"text"},on:{update:e.updateName},model:{value:e.form.dappName,callback:function(a){e.$set(e.form,"dappName",a)},expression:"form.dappName"}}),t("span",[e._v("*")])],1),e.errors.has("name")?t("p",{staticClass:"error"},[e._v("\n        "+e._s(e.errors.first("name"))+"\n      ")]):e._e()]),t("b-form-group",[t("label",{staticClass:"dapp-label"},[e._v("Category")]),t("div",{staticClass:"dapp-input"},[t("label",{staticClass:"dapp-select-label"},[t("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"dappCategory",options:e.dappCategories,name:"category"},on:{change:e.updateCategory},model:{value:e.form.category,callback:function(a){e.$set(e.form,"category",a)},expression:"form.category"}})],1),t("span",[e._v("*")])]),e.errors.has("category")?t("p",{staticClass:"error"},[e._v("\n        "+e._s(e.errors.first("category"))+"\n      ")]):e._e()]),t("b-form-group",{staticClass:"input-tags-group tags-form-group"},[t("label",{staticClass:"dapp-label"},[e._v("Tags\n        "),t("popover",{staticClass:"dapp-popover",attrs:{popcontent:e.$t("dappsSubmission.tags")}})],1),t("div",{staticClass:"input-tags-container"},[t("div",{staticClass:"tag-wrapper"},[t("div",{ref:"tagHolder",staticClass:"tag-holder"},e._l(e.displayTags,(function(a,r){return t("tag-component",{key:a+r,ref:"tagContainer",refInFor:!0,attrs:{name:a,"delete-func":e.deleteTag,idx:r}})})),1),t("div",{staticClass:"dapp-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.tagInput,expression:"tagInput"}],ref:"dappTagsInput",staticClass:"dapp-tags-input",attrs:{id:"dappTags",type:"text"},domProps:{value:e.tagInput},on:{keyup:e.onKeyDown,input:function(a){a.target.composing||(e.tagInput=a.target.value)}}})])]),t("span",[e._v("*")])]),e.dappTagsError?t("p",{staticClass:"error"},[e._v("\n        The tags field is required\n      ")]):e._e()]),t("div",{staticClass:"suggested-tags-container mb-3"},[t("p",{staticClass:"title"},[e._v("Suggested Tags")]),t("p",{staticClass:"tags"},[t("span",[e._v("Games")]),t("span",[e._v("Defi Lending")]),t("span",[e._v("Social")]),t("span",[e._v("Finance")]),t("span",[e._v("Wallet")])])]),t("b-form-group",{attrs:{id:"form-group-description"}},[t("label",{staticClass:"dapp-label"},[e._v("Description")]),t("b-form-invalid-feedback",{attrs:{id:"form-group-description"}},[e._v("\n        This is a required field.\n      ")]),t("div",{staticClass:"dapp-input"},[t("b-form-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"max:800|required",expression:"'max:800|required'"}],attrs:{name:"description",placeholder:"800 characters",rows:"7",size:"lg"},on:{update:e.updateDescription,change:function(a){return e.updateDisableBtn(e.errors)}},model:{value:e.form.description,callback:function(a){e.$set(e.form,"description",a)},expression:"form.description"}}),t("span",[e._v("*")])],1),e.errors.has("description")?t("p",{staticClass:"error"},[e._v("\n        "+e._s(e.errors.first("description"))+"\n      ")]):e._e()],1),t("b-form-group",[t("label",{staticClass:"dapp-label"},[e._v("Is your Dapp available for use in the United States?")]),t("div",{staticClass:"dapp-input"},[t("label",{staticClass:"dapp-select-label"},[t("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"dappUsMarket",options:e.dappUsMarketOptions,name:"field"},on:{change:e.updateUsMarket},model:{value:e.form.usMarket,callback:function(a){e.$set(e.form,"usMarket",a)},expression:"form.usMarket"}})],1),t("span",[e._v("*")])]),e.errors.has("field")?t("p",{staticClass:"error"},[e._v("\n        "+e._s(e.errors.first("field"))+"\n      ")]):e._e()]),t("b-form-group",[t("label",{staticClass:"dapp-label"},[e._v("Dapp status")]),t("div",{staticClass:"dapp-input"},[t("label",{staticClass:"dapp-select-label"},[t("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"dappStatus",options:e.dappStatusOptions,name:"status"},on:{change:e.updateDappStatus},model:{value:e.form.dappStatus,callback:function(a){e.$set(e.form,"dappStatus",a)},expression:"form.dappStatus"}})],1),t("span",[e._v("*")])]),e.errors.has("status")?t("p",{staticClass:"error"},[e._v("\n        "+e._s(e.errors.first("status"))+"\n      ")]):e._e()]),t("b-form-group",[t("label",{staticClass:"dapp-label"},[e._v("Mock user flow\n        "),t("popover",{staticClass:"dapp-popover",attrs:{popcontent:e.$t("dappsSubmission.mockUserFlow")}})],1),t("p",{staticClass:"dapp-text-info mb-3"},[e._v("\n        Dimensions must be 1200px width by 630px height; JPEG or PDF file\n        only; Image size no large than 5MB\n      ")]),t("div",{staticClass:"dapp-input"},[t("label",{staticClass:"upload-btn-wrapper",attrs:{for:"customUpload"}},[t("div",{staticClass:"fake-input"},[t("p",{staticClass:"file-name"},[e._v(e._s(e.form.mockFlowFile.name))])]),t("button",{staticClass:"upload-btn"},[e._v("Upload")])]),t("input",{ref:"mockUserFlow",attrs:{id:"customUpload",type:"file"},on:{change:e.onMockFileChange}}),t("span",[e._v("*")])]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.mockFileError,expression:"mockFileError"}],staticClass:"error"},[e._v("\n        "+e._s(e.mockFileError)+"\n      ")])]),t("b-form-group",[t("label",{staticClass:"dapp-label"},[e._v("Contract address\n        "),t("popover",{staticClass:"dapp-popover",attrs:{popcontent:e.$t("dappsSubmission.contractAddress")}})],1),t("div",{staticClass:"dapp-input"},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"contractAddress",name:"address",type:"text"},on:{update:e.updateContractAddress},model:{value:e.form.contractAddress,callback:function(a){e.$set(e.form,"contractAddress",a)},expression:"form.contractAddress"}}),t("span",[e._v("*")])],1),e.errors.has("address")?t("p",{staticClass:"error"},[e._v("\n        "+e._s(e.errors.first("address"))+"\n      ")]):e._e()]),t("b-form-group",[t("label",{staticClass:"dapp-label"},[t("span",{staticClass:"dapp-icon-label"},[e._v(" Dapp icon ")]),t("popover",{staticClass:"dapp-popover",attrs:{popcontent:e.$t("dappsSubmission.dappIcon")}}),e.form.dappIconUrl?t("label",{staticClass:"replace-label",attrs:{for:"dappIcon"}},[e._v("Replace")]):e._e()],1),t("div",{staticClass:"image-wrapper"},[t("div",{staticClass:"image-container",class:e.form.dappIconUrl?"dapp-icon-uploaded ":""},[t("label",{staticClass:"image-label",attrs:{for:"dappIcon"}},[t("div",{staticClass:"image-placeholder"},[e.form.dappIconUrl?e._e():t("i",{staticClass:"fa fa-cloud-upload"}),t("h4",{staticClass:"image-text"},[e._v("\n                Drop your icon here, or select a file from your computer.\n              ")]),t("p",{staticClass:"image-requirements"},[e._v("\n                JPEG or PNG, at least 192px * 192px\n              ")])]),e.form.dappIconUrl?t("img",{staticClass:"dapp-icon-img",attrs:{src:e.form.dappIconUrl}}):e._e(),t("b-form-file",{attrs:{id:"dappIcon","drop-placeholder":"Drop your icon here",type:"file"},on:{change:e.onDappIconChange}})],1)]),t("span",{staticClass:"requiredIcon",class:e.form.dappIconUrl?"uploaded-required-icon":""},[e._v("*")])]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.dappIconError,expression:"dappIconError"}],staticClass:"error"},[e._v("\n        "+e._s(e.dappIconError)+"\n      ")])]),t("b-form-group",[t("label",{staticClass:"dapp-label"},[e._v("Banner\n        "),t("popover",{staticClass:"dapp-popover",attrs:{popcontent:e.$t("dappsSubmission.banner")}}),e.form.bannerUrl?t("label",{staticClass:"replace-label",attrs:{for:"bannerImage"}},[e._v("Replace")]):e._e()],1),t("div",{staticClass:"image-wrapper"},[t("div",{staticClass:"image-container",class:e.form.bannerUrl?"banner-uploaded ":""},[t("label",{staticClass:"image-label",attrs:{for:"bannerImage"}},[t("div",{staticClass:"image-placeholder"},[e.form.bannerUrl?e._e():t("i",{staticClass:"fa fa-cloud-upload"}),t("h4",{staticClass:"image-text"},[e._v("\n                Drop your image here, or select a file from your computer.\n              ")]),t("p",{staticClass:"image-requirements"},[e._v("\n                JPEG or PNG, at least 1200px * 206px\n              ")])]),e.form.bannerUrl?t("img",{staticClass:"banner-img",attrs:{src:e.form.bannerUrl}}):e._e(),t("b-form-file",{attrs:{id:"bannerImage",accept:"image/*","drop-placeholder":"Drop your banner here",type:"file"},on:{change:e.onBannerChange}})],1)]),t("span",{staticClass:"requiredIcon",class:e.form.bannerUrl?"uploaded-required-icon":""},[e._v("*")])]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.bannerError,expression:"bannerError"}],staticClass:"error"},[e._v("\n        "+e._s(e.bannerError)+"\n      ")])]),t("b-form-group",[t("label",{staticClass:"dapp-label"},[e._v("Dapp website")]),t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],attrs:{id:"dappWebsite",name:"website",placeholder:"URL link",type:"text"},on:{change:function(a){return e.updateDisableBtn(e.errors)}},model:{value:e.form.dappWebsite,callback:function(a){e.$set(e.form,"dappWebsite",a)},expression:"form.dappWebsite"}}),e.errors.has("website")?t("p",{staticClass:"error"},[e._v("\n        "+e._s(e.errors.first("website"))+"\n      ")]):e._e()],1),t("b-form-group",[t("label",{staticClass:"dapp-label"},[e._v("Dapp contract audit\n        "),t("popover",{staticClass:"dapp-popover",attrs:{popcontent:e.$t("dappsSubmission.contractAudit")}})],1),t("label",{staticClass:"dapp-select-label"},[t("b-form-select",{attrs:{id:"dappContract",options:e.dappContractOptions},model:{value:e.form.contractAudit,callback:function(a){e.$set(e.form,"contractAudit",a)},expression:"form.contractAudit"}})],1)])],1)],1)},s=[],o=(t("6b54"),function(e,a){var t=a._c;return t("div",{ref:"tagContainer",staticClass:"tag-container"},[a._v("\n  "+a._s(a.props.name)+"\n  "),t("span",{on:{click:function(e){return a.props.deleteFunc(a.props.idx)}}},[t("i",{staticClass:"fa fa-times"})])])}),n=[],i=(t("c5f6"),{props:{deleteFunc:{type:Function,default:function(){}},name:{type:String,default:""},idx:{type:Number,default:0}}}),p=i,l=(t("27b7"),t("2877")),c=Object(l["a"])(p,o,n,!0,null,"0943ce32",null),d=c.exports,u=t("19b5"),f={components:{"tag-component":d,popover:u["a"]},props:{updateName:{type:Function,default:function(){}},updateCategory:{type:Function,default:function(){}},updateTags:{type:Function,default:function(){}},updateDescription:{type:Function,default:function(){}},updateDisableBtn:{type:Function,default:function(){}},updateUsMarket:{type:Function,default:function(){}},updateDappStatus:{type:Function,default:function(){}},updateMockFlow:{type:Function,default:function(){}},updateContractAddress:{type:Function,default:function(){}},updateDappIcon:{type:Function,default:function(){}},updateBanner:{type:Function,default:function(){}},form:{type:Object,default:function(){return{}}}},data:function(){return{tag:"",tags:[],dappCategories:[{value:null,text:"Please select"},{value:"Games",text:"Games"},{value:"Social",text:"Social"},{value:"Finance",text:"Finance"},{value:"Infrastructure",text:"Infrastructure"},{value:"Exchanges",text:"Exchanges"},{value:"Development",text:"Development"},{value:"Media",text:"Media"},{value:"Wallet",text:"Wallet"},{value:"Security",text:"Security"},{value:"Property",text:"Property"},{value:"Marketplaces",text:"Marketplaces"},{value:"Governance",text:"Governance"},{value:"Storage",text:"Storage"},{value:"Identity",text:"Identity"},{value:"Energy",text:"Energy"},{value:"Insurance",text:"Insurance"},{value:"Health",text:"Health"},{value:"Other",text:"Other"}],dappUsMarketOptions:[{value:null,text:"Please select"},{value:"Yes",text:"Yes"},{value:"No",text:"No"}],dappStatusOptions:[{value:null,text:"Please select"},{value:"Live",text:"Live"},{value:"Beta",text:"Beta"},{value:"Prototype",text:"Prototype"},{value:"Work in progress",text:"Work in progress"},{value:"Concept",text:"Concept"},{value:"Stealth",text:"Stealth"}],dappContractOptions:[{value:null,text:"Please select"},{value:"None in Process",text:"None in Process"},{value:"In Process",text:"In Process"},{value:"Completed",text:"Completed"}],tagInput:"",displayTags:this.form.tags,mockFileError:null,dappIconError:null,bannerError:null,mockFlowImgName:"",dappTagsError:!1}},methods:{onKeyDown:function(e){var a=this;if(13===e.keyCode&&this.$refs.tagHolder.offsetWidth<=this.$refs.dappTagsInput.offsetWidth-10)this.tagInput.length>0&&(this.displayTags.push(this.tagInput),this.tagInput="",setTimeout((function(){return a.updateWidth()})));else if(8===e.keyCode&&this.tagInput.length<=0){var t=this.displayTags.splice(this.displayTags.length-1,1);setTimeout((function(){a.updateWidth(),a.tagInput=t.toString()}))}this.dappTagsError=0===this.displayTags.length,this.updateTags(this.displayTags)},deleteTag:function(e){var a=this;this.displayTags.splice(e,1),this.updateTags(this.displayTags),this.dappTagsError=0===this.displayTags.length,setTimeout((function(){return a.updateWidth()}))},updateWidth:function(){this.$refs.dappTagsInput.style.paddingLeft=this.$refs.tagHolder.offsetWidth>0?"".concat(this.$refs.tagHolder.offsetWidth+8,"px"):"10.5px"},onMockFileChange:function(e){var a=e.target.files[0],t=new Image,r=URL.createObjectURL(a),s=this;this.form.mockFlowFile="",this.form.mockFlowUrl="",r||this.onMockFileChangeError("uploadError"),"application/pdf"===a.type?a.size>5e6?this.onMockFileChangeError("exceededSize"):this.onMockFileChangeSuccess(a,r):(t.src=r,t.onload=function(){t.width>1200||t.height>630?s.onMockFileChangeError("exceededSize"):s.onMockFileChangeSuccess(a,r)},t.onerror=function(){s.onMockFileChangeError("uploadError")})},onMockFileChangeSuccess:function(e,a){this.mockFileError=null,this.form.mockFlowFile=e,this.form.mockFlowUrl=a,this.updateMockFlow(!1)},onMockFileChangeError:function(e){this.mockFileError="exceededSize"===e?"The image dimensions are too big. Dimensions must be 1200px width by 630px height and less than 5MB.":"Upload error. Please try a different file.",this.updateMockFlow(!0)},onDappIconChange:function(e){var a="drop"===e.type?e.dataTransfer.files[0]:e.target.files[0],t=new Image,r=URL.createObjectURL(a),s=this;t.src=r,s.form.dappIconFile="",s.form.dappIconUrl="",t.onload=function(){t.height>192||t.width>192?(s.dappIconError="The image dimensions are too big. Dimensions must be 192px by 192px.",s.updateDappIcon(!0)):(s.dappIconError=null,s.form.dappIconFile=a,s.form.dappIconUrl=r,s.updateDappIcon(!1))},t.onerror=function(){s.dappIconError="Upload error. Please try a different file.",s.updateDappIcon(!0)}},onBannerChange:function(e){var a="drop"===e.type?e.dataTransfer.files[0]:e.target.files[0],t=new Image,r=URL.createObjectURL(a),s=this;s.form.bannerFile="",s.form.bannerUrl="",t.src=r,t.onload=function(){t.width<1200||t.height<206?(s.bannerError="The image dimensions are too small. Dimensions must be at least 1200px* 206px.",s.updateBanner(!0)):(s.bannerError=null,s.form.bannerFile=a,s.form.bannerUrl=r,s.updateBanner(!1))},t.onerror=function(){s.bannerError="Upload error. Please try a different file.",s.updateBanner(!0)}}}},m=f,v=(t("ff3e"),t("bcd2"),Object(l["a"])(m,r,s,!1,null,"1acbe822",null)),g=v.exports;t.d(a,"default",(function(){return g}))},"5bdf":function(e,a,t){},"7d58":function(e,a,t){},a58d:function(e,a,t){},bcd2:function(e,a,t){"use strict";var r=t("5bdf"),s=t.n(r);s.a},ff3e:function(e,a,t){"use strict";var r=t("a58d"),s=t.n(r);s.a}}]);
//# sourceMappingURL=chunk-43062db4.2dba0deb.js.map