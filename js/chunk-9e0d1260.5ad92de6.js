(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e0d1260"],{"2db4":function(t,e,n){"use strict";var a=n("ade3"),r=(n("a9e3"),n("caad"),n("ca71"),n("8dd9")),s=n("a9ad"),i=n("7560"),o=n("f2e7"),l=n("fe6c"),c=n("58df"),u=n("80d2"),d=n("d9bd");e["a"]=Object(c["a"])(r["a"],s["a"],o["a"],Object(l["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:i["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,a=t.footer,r=t.insetFooter,s=t.left,i=t.right,o=t.top;return{paddingBottom:Object(u["g"])(n+a+r),paddingLeft:this.app?Object(u["g"])(s):void 0,paddingRight:this.app?Object(u["g"])(i):void 0,paddingTop:Object(u["g"])(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(d["e"])("auto-height",this),0==this.timeout&&Object(d["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(u["o"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(a["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(u["o"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,n=e(this.color,{staticClass:"v-snack__wrapper",class:r["a"].options.computed.classes.call(this),style:r["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",n,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"347b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"font-weight-bold text-h6 pb-0"},[t._v("회원가입")])],1),n("v-row",{staticClass:"pa-3 mt-0"},[n("v-col",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{label:"아이디",counter:20,rules:t.idRules},model:{value:t.member.id,callback:function(e){t.$set(t.member,"id",e)},expression:"member.id"}}),n("v-text-field",{attrs:{label:"비밀번호",type:"password",rules:t.passwordRules},model:{value:t.member.password,callback:function(e){t.$set(t.member,"password",e)},expression:"member.password"}}),n("v-text-field",{attrs:{label:"비밀번호 확인",type:"password",rules:t.samePassowrd},model:{value:t.member.checkpassword,callback:function(e){t.$set(t.member,"checkpassword",e)},expression:"member.checkpassword"}}),n("v-text-field",{attrs:{label:"이름",rules:t.nameRule},model:{value:t.member.name,callback:function(e){t.$set(t.member,"name",e)},expression:"member.name"}}),n("v-text-field",{attrs:{label:"생년월일",type:"date",rules:t.birthRule},model:{value:t.member.birth,callback:function(e){t.$set(t.member,"birth",e)},expression:"member.birth"}}),n("v-text-field",{attrs:{label:"전화번호",rules:t.phoneRule},model:{value:t.member.phone,callback:function(e){t.$set(t.member,"phone",e)},expression:"member.phone"}}),n("v-text-field",{attrs:{label:"이메일",rules:t.emailRule},model:{value:t.member.email,callback:function(e){t.$set(t.member,"email",e)},expression:"member.email"}}),n("div",[n("Address",{attrs:{toname:t.member.name,tophone:t.member.phone},on:{inform:t.getAddr}})],1),n("v-container",{staticClass:"mt-5"},[n("v-row",[n("v-col",{attrs:{align:"left"}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"primary",medium:""},on:{click:t.validJoin}},[t._v(" 가입하기 ")])],1),n("v-col",{attrs:{align:"right"}},[n("v-btn",{staticClass:"red white--text",on:{click:t.clear}},[t._v(" 초기화 ")])],1)],1)],1)],1)],1)],1),n("div",{staticClass:"text-center ma-2"},[n("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[n("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",a,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.resultInfo)+" ")])],1)],1)},r=[],s=n("1da1"),i=(n("96cf"),n("ac1f"),n("00b4"),n("a15b"),n("5319"),n("d3b7"),n("ddb0"),n("7f01")),o=n("7859"),l={components:{Address:o["a"]},name:"JoinForm",data:function(){return{snackbar:!1,resultInfo:"",member:{id:"",password:"",checkpassword:"",name:"",birth:"",phone:"",email:""},address:{aname:"",addr1:"",addr2:"",addr3:"",toname:"",tophone:"",isdefault:"Y"},idRules:[function(t){return String(t).length>1||"필수 요소입니다."},function(t){return String(t).length>5||"너무 짧은 아이디입니다."},function(t){var e=/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;return!e.test(t)||"아이디는 영문과 숫자만 가능합니다."},function(t){var e=/^[a-zA-Z]/;return e.test(t)||"아이디는 영문으로 시작해야합니다."},function(t){return String(t).length<=20||"너무 긴 아이디입니다."}],passwordRules:[function(t){return String(t).length>0||"필수 요소입니다."},function(t){return String(t).length>7||"너무 짧은 비밀번호입니다."}],phoneRule:[function(t){var e=/^(01)[0-9]{1}-[0-9]{3,4}-[0-9]{4}$/;return e.test(t)||"핸드폰 번호 형식이 아닙니다."}],emailRule:[function(t){return String(t).length>0||"필수 요소입니다."},function(t){return/.+@.+\..+/.test(t)||"이메일 형식이 아닙니다."}],birthRule:[function(t){return String(t).length>9||"필수 요소입니다."}],nameRule:[function(t){return String(t).length>0||"필수 요소입니다."}]}},methods:{clear:function(){for(var t in this.member)this.member[t]=""},validJoin:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=32;break}return e.prev=1,e.next=4,i["a"].join(t.member);case 4:if(n=e.sent,"success"!=n.data.result){e.next=26;break}a=!1,e.t0=regeneratorRuntime.keys(t.address);case 8:if((e.t1=e.t0()).done){e.next=15;break}if(r=e.t1.value,"arr3"==r||""!=t.address[r]){e.next=13;break}return a=!0,e.abrupt("break",15);case 13:e.next=8;break;case 15:if(!a){e.next=19;break}console.log("미입력값 존재"),e.next=23;break;case 19:return e.next=21,i["a"].addAddress(t.address,t.member.id);case 21:s=e.sent,console.log(s);case 23:t.$router.replace("/home/main"),e.next=27;break;case 26:"duplicated"==n.data.result?(t.resultInfo="이미 존재하는 아이디입니다.",t.snackbar=!0):(t.resultInfo="오류가 발생하였습니다.",t.snackbar=!0);case 27:e.next=32;break;case 29:e.prev=29,e.t2=e["catch"](1),console.log("error");case 32:case"end":return e.stop()}}),e,null,[[1,29]])})))()},getAddr:function(t,e,n,a,r,s){this.address.aname=t,this.address.addr1=e,this.address.addr2=n,this.address.addr3=a,this.address.toname=r,this.address.tophone=s}},computed:{samePassowrd:function(){var t=this,e=[function(t){return String(t).length>0||"필수 요소입니다."},function(){return t.member.password===t.member.checkpassword||"비밀번호가 일치하지 않습니다."}];return e}}},c=l,u=n("2877"),d=n("6544"),h=n.n(d),m=n("8336"),f=n("62ad"),v=n("a523"),p=n("4bd4"),b=n("0fd9"),w=n("2db4"),g=n("8654"),k=Object(u["a"])(c,a,r,!1,null,null,null);e["default"]=k.exports;h()(k,{VBtn:m["a"],VCol:f["a"],VContainer:v["a"],VForm:p["a"],VRow:b["a"],VSnackbar:w["a"],VTextField:g["a"]})},"4bd4":function(t,e,n){"use strict";var a=n("5530"),r=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("d3b7"),n("159b"),n("7db0"),n("58df")),s=n("7e2b"),i=n("3206");e["a"]=Object(r["a"])(s["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=n(t)))})):a.valid=n(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},7859:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{"input-value":a,color:t.btncolor?t.btncolor:"primary",small:""}},"v-btn",r,!1),a),[t.title?n("span",{staticClass:"font-weight-bold white--text"},[t._v(t._s(t.title))]):n("span",[t._v("기본 배송지 등록")])])]}}]),model:{value:t.flag,callback:function(e){t.flag=e},expression:"flag"}},[n("v-card",[n("v-card-title",[t.content?n("span",{staticClass:"font-weight-bold text-h5"},[t._v(t._s(t.content))]):n("span",{staticClass:"font-weight-bold text-h5"},[t._v("배송지 등록")])]),n("v-card-text",{staticClass:"caption"},[t.title?t._e():n("span",{staticClass:"main-txt"},[t._v("배송지 등록은 선택사항입니다.")])]),n("v-card-text",{staticClass:"caption pb-0"},[n("span",{staticClass:"main-txt"},[t._v("*")]),t._v(" 표시는 필수 사항입니다.")]),n("v-card-text",[n("v-container",[n("v-form",{ref:"addform"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"배송지명 *",rules:t.nameRule},model:{value:t.nowarrname,callback:function(e){t.nowarrname=e},expression:"nowarrname"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"수신자명 *",rules:t.nameRule},model:{value:t.nowtoname,callback:function(e){t.nowtoname=e},expression:"nowtoname"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"휴대폰번호 *",rules:t.phoneRule},model:{value:t.nowtophone,callback:function(e){t.nowtophone=e},expression:"nowtophone"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"우편번호 *",rules:t.arr1Rule,readonly:""},model:{value:t.nowarr1,callback:function(e){t.nowarr1=e},expression:"nowarr1"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"배송지 주소 *",rules:t.arr2Rule,readonly:""},model:{value:t.nowarr2,callback:function(e){t.nowarr2=e},expression:"nowarr2"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{label:"상세 주소"},model:{value:t.nowarr3,callback:function(e){t.nowarr3=e},expression:"nowarr3"}})],1),t.addDefault?n("v-col",[n("v-select",{attrs:{items:t.items,label:"기본 배송지 지정"},model:{value:t.isDefault,callback:function(e){t.isDefault=e},expression:"isDefault"}})],1):t._e(),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{staticClass:"primary",on:{click:t.openDaumPostcode}},[t._v("주소 검색")])],1)],1),n("v-row",[n("div",{ref:"wrap",staticStyle:{display:"none",border:"1px solid",width:"320px",height:"300px",margin:"5px 0",position:"relative"}},[n("v-img",{staticStyle:{cursor:"pointer",position:"absolute",right:"0px",top:"-1px","z-index":"1"},attrs:{src:"//t1.daumcdn.net/postcode/resource/images/close.png",alt:"접기 버튼"},on:{click:t.foldDaumPostcode}})],1)])],1)],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.clear}},[t._v(" 초기화 ")]),n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.close}},[t._v(" 취소 ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.inform}},[t._v(" 확인 ")])],1)],1)],1)},r=[],s=(n("498a"),n("ac1f"),n("00b4"),{name:"Address",components:{},data:function(){return{items:["YES","NO"],cnt:0,flag:!1,addrflag:!1,nowarrname:"",nowarr1:"",nowarr2:"",nowarr3:"",nowtoname:"",nowtophone:"",isDefault:"",phoneRule:[function(t){return t?t.trim().length>0||"필수 입력 사항입니다.":t||"필수 입력 사항입니다."},function(t){var e=/^(01)[0-9]{1}-[0-9]{3,4}-[0-9]{4}$/;return e.test(t)||"핸드폰 번호 형식이 아닙니다."}],nameRule:[function(t){return t?t.trim().length>0||"필수 입력 사항입니다.":t||"필수 입력 사항입니다."}],arr1Rule:[function(t){return t?t.trim().length>0||"필수 입력 사항입니다.":t||"필수 입력 사항입니다."},function(t){var e=/[0-9]*/;return e.test(t)||"숫자만 입력 가능합니다."}],arr2Rule:[function(t){return t?t.trim().length>0||"필수 입력 사항입니다.":t||"필수 입력 사항입니다."}]}},methods:{close:function(){this.flag=!1},inform:function(){this.$refs.addform.validate()&&(this.isDefault||(this.isDefault="NO"),this.$emit("inform",this.nowarrname,this.nowarr1,this.nowarr2,this.nowarr3,this.nowtoname,this.nowtophone,this.isDefault.substring(0,1),this.ano),this.flag=!1)},clear:function(){this.nowarrname="",this.nowarr1="",this.nowarr2="",this.nowarr3="",this.nowtoname="",this.nowtophone=""},openDaumPostcode:function(){var t=this,e=this.$refs.wrap,n=Math.max(document.body.scrollTop,document.documentElement.scrollTop);new window.daum.Postcode({oncomplete:function(a){var r="";r="R"===a.userSelectedType?a.roadAddress:a.jibunAddress,t.nowarr1=a.zonecode,t.nowarr2=r,e.style.display="none",document.body.scrollTop=n},onresize:function(t){e.style.height=t.height+"px"},width:"100%",height:"100%"}).embed(e),e.style.display="block"},foldDaumPostcode:function(){var t=this.$refs.wrap;t.style.display="none"}},props:["toname","tophone","title","btncolor","content","setcnt","addr1","addr2","addr3","aname","addDefault","ano"],watch:{flag:function(){var t=null==this.setcnt?0:this.setcnt;this.cnt<=t&&(this.nowtoname=this.toname,this.nowtophone=this.tophone,this.nowarrname=this.aname,this.nowarr1=this.addr1,this.nowarr2=this.addr2,this.nowarr3=this.addr3,this.isDefault=this.addDefault,this.cnt+=1)}}}),i=s,o=n("2877"),l=n("6544"),c=n.n(l),u=n("8336"),d=n("b0af"),h=n("99d9"),m=n("62ad"),f=n("a523"),v=n("169a"),p=n("4bd4"),b=n("adda"),w=n("0fd9"),g=n("b974"),k=n("2fa4"),x=n("8654"),_=Object(o["a"])(i,a,r,!1,null,"939533d8",null);e["a"]=_.exports;c()(_,{VBtn:u["a"],VCard:d["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCol:m["a"],VContainer:f["a"],VDialog:v["a"],VForm:p["a"],VImg:b["a"],VRow:w["a"],VSelect:g["a"],VSpacer:k["a"],VTextField:x["a"]})},ca71:function(t,e,n){}}]);
//# sourceMappingURL=chunk-9e0d1260.5ad92de6.js.map