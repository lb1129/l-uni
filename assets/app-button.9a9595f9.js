import{_ as e}from"./uni-icons.2a753de2.js";import{q as t,o,c as s,w as a,a as i,n,y as r,z as l,D as d,F as c,r as u,a5 as h,I as p,e as m,a6 as g}from"./index-25209b9b.js";import{r as f}from"./uni-app.es.99390497.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";function S(e){let t="";for(let o in e){t+=`${o}:${e[o]};`}return t}const b=y({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change","keyboardheightchange"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:24},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!1},cursorSpacing:{type:Number,default:0},passwordIcon:{type:Boolean,default:!0},primaryColor:{type:String,default:"#2979ff"},styles:{type:Object,default:()=>({color:"#333",backgroundColor:"#fff",disableColor:"#F7F6F6",borderColor:"#e5e5e5"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:"",isEnter:!1}),computed:{isVal(){const e=this.val;return!(!e&&0!==e)},msg(){return this.localMsg||this.errorMessage},inputMaxlength(){return Number(this.maxlength)},boxStyle(){return`color:${this.inputBorder&&this.msg?"#e43d33":this.styles.color};`},inputContentClass(){return function(e){let t="";for(let o in e)e[o]&&(t+=`${o} `);return t}({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled,"is-focused":this.focusShow})},inputContentStyle(){const e=this.focusShow?this.primaryColor:this.styles.borderColor;return S({"border-color":(this.inputBorder&&this.msg?"#dd524d":e)||"#e5e5e5","background-color":this.disabled?this.styles.disableColor:this.styles.backgroundColor})},inputStyle(){return S({"padding-right":"password"===this.type||this.clearable||this.prefixIcon?"":"10px","padding-left":this.prefixIcon?"":"10px"})}},watch:{value(e){this.val=e},modelValue(e){this.val=e},focus(e){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))}},created(){this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(e=>{this.localMsg=e}))},mounted(){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))},methods:{init(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue||""===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon(e){this.$emit("iconClick",e)},onEyes(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput(e){let t=e.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(t=this.trimStr(t)),"string"==typeof this.trim&&(t=this.trimStr(t,this.trim))),this.errMsg&&(this.errMsg=""),this.val=t,this.$emit("input",t),this.$emit("update:modelValue",t)},onFocus(){this.$nextTick((()=>{this.focused=!0})),this.$emit("focus",null)},_Focus(e){this.focusShow=!0,this.$emit("focus",e)},onBlur(){this.focused=!1,this.$emit("focus",null)},_Blur(e){if(e.detail.value,this.focusShow=!1,this.$emit("blur",e),!1===this.isEnter&&this.$emit("change",this.val),this.form&&this.formItem){const{validateTrigger:e}=this.form;"blur"===e&&this.formItem.onFieldChange()}},onConfirm(e){this.$emit("confirm",this.val),this.isEnter=!0,this.$emit("change",this.val),this.$nextTick((()=>{this.isEnter=!1}))},onClear(e){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},onkeyboardheightchange(e){this.$emit("keyboardheightchange",e)},trimStr:(e,t="both")=>"both"===t?e.trim():"left"===t?e.trimLeft():"right"===t?e.trimRight():"start"===t?e.trimStart():"end"===t?e.trimEnd():"all"===t?e.replace(/\s+/g,""):e}},[["render",function(g,y,S,b,I,v){const C=f(t("uni-icons"),e),x=h,k=p,$=m;return o(),s($,{class:n(["uni-easyinput",{"uni-easyinput-error":v.msg}]),style:r(v.boxStyle)},{default:a((()=>[i($,{class:n(["uni-easyinput__content",v.inputContentClass]),style:r(v.inputContentStyle)},{default:a((()=>[S.prefixIcon?(o(),s(C,{key:0,class:"content-clear-icon",type:S.prefixIcon,color:"#c0c4cc",onClick:y[0]||(y[0]=e=>v.onClickIcon("prefix")),size:"22"},null,8,["type"])):l("",!0),"textarea"===S.type?(o(),s(x,{key:1,class:n(["uni-easyinput__content-textarea",{"input-padding":S.inputBorder}]),name:S.name,value:I.val,placeholder:S.placeholder,placeholderStyle:S.placeholderStyle,disabled:S.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:v.inputMaxlength,focus:I.focused,autoHeight:S.autoHeight,"cursor-spacing":S.cursorSpacing,onInput:v.onInput,onBlur:v._Blur,onFocus:v._Focus,onConfirm:v.onConfirm,onKeyboardheightchange:v.onkeyboardheightchange},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","cursor-spacing","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange"])):(o(),s(k,{key:2,type:"password"===S.type?"text":S.type,class:"uni-easyinput__content-input",style:r(v.inputStyle),name:S.name,value:I.val,password:!I.showPassword&&"password"===S.type,placeholder:S.placeholder,placeholderStyle:S.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:S.disabled,maxlength:v.inputMaxlength,focus:I.focused,confirmType:S.confirmType,"cursor-spacing":S.cursorSpacing,onFocus:v._Focus,onBlur:v._Blur,onInput:v.onInput,onConfirm:v.onConfirm,onKeyboardheightchange:v.onkeyboardheightchange},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","cursor-spacing","onFocus","onBlur","onInput","onConfirm","onKeyboardheightchange"])),"password"===S.type&&S.passwordIcon?(o(),d(c,{key:3},[v.isVal?(o(),s(C,{key:0,class:n(["content-clear-icon",{"is-textarea-icon":"textarea"===S.type}]),type:I.showPassword?"eye-slash-filled":"eye-filled",size:22,color:I.focusShow?S.primaryColor:"#c0c4cc",onClick:v.onEyes},null,8,["class","type","color","onClick"])):l("",!0)],64)):S.suffixIcon?(o(),d(c,{key:4},[S.suffixIcon?(o(),s(C,{key:0,class:"content-clear-icon",type:S.suffixIcon,color:"#c0c4cc",onClick:y[1]||(y[1]=e=>v.onClickIcon("suffix")),size:"22"},null,8,["type"])):l("",!0)],64)):(o(),d(c,{key:5},[S.clearable&&v.isVal&&!S.disabled&&"textarea"!==S.type?(o(),s(C,{key:0,class:n(["content-clear-icon",{"is-textarea-icon":"textarea"===S.type}]),type:"clear",size:S.clearSize,color:v.msg?"#dd524d":I.focusShow?S.primaryColor:"#c0c4cc",onClick:v.onClear},null,8,["class","size","color","onClick"])):l("",!0)],64)),u(g.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-a08716d2"]]);const I=y({name:"app-button",emits:["getphonenumber","getuserinfo","error","opensetting","launchapp","contact","chooseavatar","addgroupapp","chooseaddress","chooseinvoicetitle","subscribe","login","im","click"],props:{size:{type:String,default:"default"},type:{type:String,default:"default"},plain:Boolean,disabled:Boolean,loading:Boolean,formType:String,openType:String,hoverClass:{type:String,default:"button-hover"},hoverStartTime:{type:Number,default:20},hoverStayTime:{type:Number,default:70},appParameter:String,hoverStopPropagation:Boolean,lang:{type:String,default:"en"},sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,groupId:String,guildId:String,publicId:String,dataImId:String,dataImType:String,dataGoodsId:String,dataOrderId:String,dataBizLine:String,customStyle:{type:Object,default:{}}},options:{virtualHost:!0},computed:{innerStyle(){return this.disabled?this.customStyle:{backgroundColor:this.$theme,color:"#ffffff",...this.customStyle}}},methods:{getphonenumberHandler(e){this.$emit("getphonenumber",e)},getuserinfoHandler(e){this.$emit("getuserinfo",e)},errorHandler(e){this.$emit("error",e)},opensettingHandler(e){this.$emit("opensetting",e)},launchappHandler(e){this.$emit("launchapp",e)},contactHandler(e){this.$emit("contact",e)},chooseavatarHandler(e){this.$emit("chooseavatar",e)},addgroupappHandler(e){this.$emit("addgroupapp",e)},chooseaddressHandler(e){this.$emit("chooseaddress",e)},chooseinvoicetitleHandler(e){this.$emit("chooseinvoicetitle",e)},subscribeHandler(e){this.$emit("subscribe",e)},loginHandler(e){this.$emit("login",e)},imHandler(e){this.$emit("im",e)},clickHandler(e){this.$emit("click",e)}}},[["render",function(e,t,i,n,l,d){const c=g;return o(),s(c,{style:r(d.innerStyle),size:i.size,type:i.type,plain:i.plain,disabled:i.disabled,loading:i.loading,formType:i.formType,openType:i.openType,hoverClass:i.hoverClass,hoverStartTime:i.hoverStartTime,hoverStayTime:i.hoverStayTime,appParameter:i.appParameter,hoverStopPropagation:i.hoverStopPropagation,lang:i.lang,sessionFrom:i.sessionFrom,sendMessageTitle:i.sendMessageTitle,sendMessagePath:i.sendMessagePath,sendMessageImg:i.sendMessageImg,showMessageCard:i.showMessageCard,groupId:i.groupId,guildId:i.guildId,publicId:i.publicId,dataImId:i.dataImId,dataImType:i.dataImType,dataGoodsId:i.dataGoodsId,dataOrderId:i.dataOrderId,dataBizLine:i.dataBizLine,onGetphonenumber:d.getphonenumberHandler,onGetuserinfo:d.getuserinfoHandler,onError:d.errorHandler,onOpensetting:d.opensettingHandler,onLaunchapp:d.launchappHandler,onContact:d.contactHandler,onChooseavatar:d.chooseavatarHandler,onAddgroupapp:d.addgroupappHandler,onChooseaddress:d.chooseaddressHandler,onChooseinvoicetitle:d.chooseinvoicetitleHandler,onSubscribe:d.subscribeHandler,onLogin:d.loginHandler,onIm:d.imHandler,onClick:d.clickHandler},{default:a((()=>[u(e.$slots,"default")])),_:3},8,["style","size","type","plain","disabled","loading","formType","openType","hoverClass","hoverStartTime","hoverStayTime","appParameter","hoverStopPropagation","lang","sessionFrom","sendMessageTitle","sendMessagePath","sendMessageImg","showMessageCard","groupId","guildId","publicId","dataImId","dataImType","dataGoodsId","dataOrderId","dataBizLine","onGetphonenumber","onGetuserinfo","onError","onOpensetting","onLaunchapp","onContact","onChooseavatar","onAddgroupapp","onChooseaddress","onChooseinvoicetitle","onSubscribe","onLogin","onIm","onClick"])}]]);export{b as _,I as a};
