(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc59705e"],{"277b":function(a,t,e){a.exports=e.p+"img/linkedin.9b3b56b5.svg"},3017:function(a,t,e){"use strict";var s=e("36c9"),i=e.n(s);i.a},"36c9":function(a,t,e){},"6f91":function(a,t,e){"use strict";var s=e("da1d"),i=e.n(s);i.a},"8bd1":function(a,t,e){},"920e":function(a,t,e){"use strict";var s=e("8bd1"),i=e.n(s);i.a},d1a7:function(a,t,e){"use strict";var s=e("ebf7"),i=e.n(s);i.a},da1d:function(a,t,e){},e574:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAYAAAAFQMh/AAAAAXNSR0IArs4c6QAAAuhJREFUSA3tV0trFEEQruoZklUw4AtBAwkiPhCPgmddXBkfBE02+QNJdiERBYOeFPQiCB4MbIi5edosiAfDZuNdBRUFD77AQw4i+LjEgMTMTPv1zPZk07ZDSBYvpmGpqq8ePf1NdU8v0wpGqVy9QMQjRHKnLZyZAvifs+MMF7qPv7DFmBibgGmPVWpDMgxHTdxm4wF+ELceKOaPfbL5GzG30TD1SkU63+X0lQhnnsdT1qQkacYxy63Aj+K3iWnhPPyXzRjTTl3x+ORMVyCDByoJq7lR7PWumgWULaVkMPMByh4U/NbRRu2e5y3YYjUmtGKTgQyLClfvsLXVmbDFxH6WTBz5Qce22Tnq/lusxrk0OX0L5HVoQEvQh4fis2o1kHPAZ7TPKpk2Y8XZum8WOc9sceyIe8We3JSL4Eu2ALwvDP06ZRuMHltcgunQGMBCJH5/DhkGP4FOKarxdP9ugL5oPsh4jE3W+qUM7ypLuO7hle7HerpV4DXeAaPDytnZRpnGhkttLmu1JoH/38SpJ9fE/Wq779N7dHhGMHUVer2Himmc3R8hdgtB1wp573odK0P2ommmin3eaYUxtuLyZldoPFKp9iVtx6QbESqwm9t1Eg6UaKuEkjqXMI63T92ncInDQPtNmTqxGdxMe33iZrKZWmud6lR6mulcp7qZbKbWSqXaIfFLZ+NOleg4ByO9EcNlZTGO5bqMz2qdb8rUj0T/udyb8UrtJAnKbJGZRzrZFU7WD8JdLRnnscaEKwYCPzxEUrzVWJpMnZjjQ75qFhjoyT0xscHu3Dtg6peM6CMRX94STCtWqoUfJFciHbgaieJJ/fn5jmVfqsRBgj/r4iHTPq2vReJPx94on/lrPn8w6RGFLVEt3VfEoY/LmYuEm6Xy9Jm1TArKWpCfVVdk6E/NWssoHStXR8HHkBm0FhudvyiIjwz2nXjZWGeJaqD7d2y4iE1wG031pTFoNXrcmPxaOPKUOamq9xsUg9gxJCeL2wAAAABJRU5ErkJggg=="},ebf7:function(a,t,e){},f538:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"about-your-dapp w-50 mb-5 mt-5"},[s("social-acct-modal",{ref:"socialacct",on:{addSocialAccount:a.addSocialAccount}}),s("b-form",{attrs:{onsubmit:"return false;"}},[s("b-form-group",[s("label",{staticClass:"dapp-label"},[a._v("Authors\n        "),s("popover",{staticClass:"dapp-popover",attrs:{popcontent:a.$t("dappsSubmission.authors")}})],1),s("div",{staticClass:"dapp-input"},[s("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"authors",name:"authors",placeholder:"e.g. James Lee; Emilie Roy; Edward McCormick",type:"text"},on:{update:a.updateAuthors},model:{value:a.form.authors,callback:function(t){a.$set(a.form,"authors",t)},expression:"form.authors"}}),s("span",[a._v("*")])],1),a.errors.has("authors")?s("p",{staticClass:"error"},[a._v("\n        "+a._s(a.errors.first("authors"))+"\n      ")]):a._e()]),s("b-form-group",[s("label",{staticClass:"dapp-label"},[a._v("My full name ")]),s("div",{staticClass:"dapp-input"},[s("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"fullName",name:"name",type:"text"},on:{update:a.updateFullName},model:{value:a.form.fullName,callback:function(t){a.$set(a.form,"fullName",t)},expression:"form.fullName"}}),s("span",[a._v("*")])],1),a.errors.has("name")?s("p",{staticClass:"error"},[a._v("\n        "+a._s(a.errors.first("name"))+"\n      ")]):a._e()]),s("b-form-group",[s("label",{staticClass:"dapp-label"},[a._v("My email ")]),s("div",{staticClass:"dapp-input"},[s("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"email|required",expression:"'email|required'"}],attrs:{id:"emailAddress",name:"email",type:"text"},on:{update:a.updateEmail,change:function(t){return a.updateDisableBtn(a.errors)}},model:{value:a.form.email,callback:function(t){a.$set(a.form,"email",t)},expression:"form.email"}}),s("span",[a._v("*")])],1),a.errors.has("email")?s("p",{staticClass:"error"},[a._v("\n        "+a._s(a.errors.first("email"))+"\n      ")]):a._e()]),s("b-form-group",[s("div",{staticClass:"social-links-container"},[s("div",{staticClass:"social-links-header-wrapper"},[s("div",{staticClass:"social-links-header"},[s("label",{staticClass:"dapp-social-label"},[a._v(" Company social links")]),s("button",{staticClass:"add-btn pull-right",on:{click:a.openSocialAcctModal}},[a._v("\n              Add +\n            ")])]),s("span",{staticClass:"requiredIcon"},[a._v("*")])]),a.socialAccts.length>0?s("div",{staticClass:"social-links-content"},a._l(a.socialAccts,(function(t,i){return s("div",{key:t+i,staticClass:"social-account",attrs:{idx:i}},[s("div",{staticClass:"fake-input mt-2"},[s("img",{staticClass:"social-img",attrs:{src:t.src}}),s("span",{staticClass:"social-url ml-1"},[a._v(a._s(t.url))])]),s("img",{staticClass:"social-remove",attrs:{src:e("e574")},on:{click:function(t){return a.removeSocialLink(i)}}})])})),0):a._e()]),a.socialLinksError?s("p",{staticClass:"error"},[a._v("\n        The company social links field is required\n      ")]):a._e()]),s("b-form-group",[s("label",{staticClass:"dapp-label"},[a._v("Company website ")]),s("div",{staticClass:"dapp-input"},[s("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],attrs:{id:"companyWebsite",type:"text",name:"website",placeholder:"URL link"},on:{change:function(t){return a.updateDisableBtn(a.errors)}},model:{value:a.form.companyWebsite,callback:function(t){a.$set(a.form,"companyWebsite",t)},expression:"form.companyWebsite"}})],1),a.errors.has("website")?s("p",{staticClass:"error"},[a._v("\n        "+a._s(a.errors.first("website"))+"\n      ")]):a._e()]),s("b-form-group",[s("label",{staticClass:"dapp-label"},[a._v("Software license\n        "),s("popover",{staticClass:"dapp-popover",attrs:{popcontent:a.$t("dappsSubmission.softwareLicense")}})],1),s("div",{staticClass:"dapp-input"},[s("b-form-input",{attrs:{id:"softwareLicense",type:"text",placeholder:"(e.g. MIT, GPL, Proprietary)"},model:{value:a.form.license,callback:function(t){a.$set(a.form,"license",t)},expression:"form.license"}})],1)]),s("b-form-group",[s("label",{staticClass:"dapp-label"},[a._v("Additional notes")]),s("div",{staticClass:"dapp-input"},[s("b-form-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"max:300",expression:"'max:300'"}],attrs:{size:"lg",rows:"5",name:"notes",placeholder:"300 characters"},on:{change:function(t){return a.updateDisableBtn(a.errors)}},model:{value:a.form.additionalNotes,callback:function(t){a.$set(a.form,"additionalNotes",t)},expression:"form.additionalNotes"}})],1),a.errors.has("notes")?s("p",{staticClass:"error"},[a._v("\n        "+a._s(a.errors.first("notes"))+"\n      ")]):a._e()])],1)],1)},i=[],o=e("19b5"),l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"modal-container"},[e("b-modal",{ref:"socialAcctModal",staticClass:"bootstrap-modal social-acct-modal",attrs:{centered:"","hide-footer":"",title:"Add a social account",static:"",lazy:""}},[e("div",{staticClass:"modal-contents"},[e("b-form",[e("b-form-group",[e("label",{staticClass:"select-label",attrs:{for:"dappSocialAccount"}},[e("b-form-select",{attrs:{id:"dappSocialAccount",options:a.dappSocialAccounts},model:{value:a.dappSocialAccount,callback:function(t){a.dappSocialAccount=t},expression:"dappSocialAccount"}})],1)]),e("b-form-group",[e("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"url:require_protocol",expression:"'url:require_protocol'"}],attrs:{name:"url",placeholder:"URL link",type:"url"},model:{value:a.dappSocialLink,callback:function(t){a.dappSocialLink=t},expression:"dappSocialLink"}}),a.errors.has("url")?e("p",{staticClass:"error"},[a._v("\n            "+a._s(a.errors.first("url"))+"\n          ")]):a._e()],1)],1),e("button",{class:[a.errors.has("url")||""===a.dappSocialLink?"disabled":"submit-btn"],on:{click:a.onSubmit}},[a._v("\n        Submit\n      ")])],1)])],1)},r=[],n=e("98b7"),c=e.n(n),u=e("d627"),p=e.n(u),d=e("785a"),m=e.n(d),f=e("b53c"),b=e.n(f),v=e("0aa7"),h=e.n(v),A=e("277b"),k=e.n(A),C={name:"SocialAcctModal",data:function(){return{dappSocialAccounts:[{value:null,text:"Please select"},{value:c.a,text:"Github"},{value:m.a,text:"Facebook"},{value:p.a,text:"Twitter"},{value:b.a,text:"Reddit"},{value:h.a,text:"Medium"},{value:k.a,text:"LinkedIn"}],dappSocialAccount:null,dappSocialLink:""}},methods:{onSubmit:function(){this.$emit("addSocialAccount",{src:this.dappSocialAccount,url:this.dappSocialLink}),this.dappSocialAccount=null,this.dappSocialLink="",this.$refs.socialAcctModal.hide()}}},x=C,L=(e("6f91"),e("920e"),e("2877")),g=Object(L["a"])(x,l,r,!1,null,"55b71404",null),y=g.exports,S={components:{popover:o["a"],"social-acct-modal":y},props:{updateAuthors:{type:Function,default:function(){}},updateFullName:{type:Function,default:function(){}},updateEmail:{type:Function,default:function(){}},updateSocialLinks:{type:Function,default:function(){}},form:{type:Object,default:function(){return{}}},socialAccts:{type:Array,default:function(){return[]}},updateDisableBtn:{type:Function,default:function(){}}},data:function(){return{socialLinks:[],socialLinksError:!1}},methods:{openSocialAcctModal:function(){this.$refs.socialacct.$refs.socialAcctModal.show(),this.socialLinksError=0===this.socialLinks.length},addSocialAccount:function(a){this.socialAccts.push(a),this.socialLinks.push(a.url),this.socialLinksError=0===this.socialLinks.length,this.updateSocialLinks(this.socialLinks,this.socialAccts)},removeSocialLink:function(a){this.socialAccts.splice(a,1),this.socialLinks.splice(a,1),this.socialLinksError=0===this.socialLinks.length,this.updateSocialLinks(this.socialLinks,this.socialAccts)}}},_=S,w=(e("3017"),e("d1a7"),Object(L["a"])(_,s,i,!1,null,"7bad7d0a",null)),E=w.exports;e.d(t,"default",(function(){return E}))}}]);
//# sourceMappingURL=chunk-bc59705e.287f3c63.js.map