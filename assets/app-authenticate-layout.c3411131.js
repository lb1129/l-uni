import{s as e,H as t,o as r,c as a,w as i,r as l,a as s,n,z as o,b as u,A as m,t as h,d,e as f,N as c,O as g,u as p,E as b,G as y}from"./index-918ec893.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";import{_}from"./app-avatar.739a2587.js";import{r as x}from"./uni-app.es.8d9ae33d.js";const S=v({name:"uniFormsItem",options:{virtualHost:!0},provide(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:()=>null},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:()=>({errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}),computed:{msg(){return this.errorMessage||this.errMsg}},watch:{"form.formRules"(e){this.init()},"form.labelWidth"(e){this.localLabelWidth=this._labelWidthUnit(e)},"form.labelPosition"(e){this.localLabelPos=this._labelPosition()},"form.labelAlign"(e){}},created(){this.init(!0),this.name&&this.form&&this.$watch((()=>this.form._getDataValue(this.name,this.form.localData)),((e,t)=>{if(!this.form._isEqual(e,t)){const t=this.itemSetValue(e);this.onFieldChange(t,!1)}}),{immediate:!1})},unmounted(){this.__isUnmounted=!0,this.unInit()},methods:{setRules(e=null){this.userRules=e,this.init(!1)},setValue(){},async onFieldChange(r,a=!0){const{formData:i,localData:l,errShowType:s,validateCheck:n,validateTrigger:o,_isRequiredField:u,_realName:m}=this.form,h=m(this.name);r||(r=this.form.formData[h]);const d=this.itemRules.rules&&this.itemRules.rules.length;if(!this.validator||!d||0===d)return;const f=u(this.itemRules.rules||[]);let c=null;return"bind"===o||a?(c=await this.validator.validateUpdate({[h]:r},i),f||void 0!==r&&""!==r||(c=null),c&&c.errorMessage?("undertext"===s&&(this.errMsg=c?c.errorMessage:""),"toast"===s&&e({title:c.errorMessage||"校验错误",icon:"none"}),"modal"===s&&t({title:"提示",content:c.errorMessage||"校验错误"})):this.errMsg="",n(c||null)):this.errMsg="",c||null},init(e=!1){const{validator:t,formRules:r,childrens:a,formData:i,localData:l,_realName:s,labelWidth:n,_getDataValue:o,_setDataValue:u}=this.form||{};if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(n),this.localLabelPos=this._labelPosition(),this.form&&e&&a.push(this),!t||!r)return;this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;const m=s(this.name),h=this.userRules||this.rules;"object"==typeof r&&h&&(r[m]={rules:h},t.updateSchema(r));const d=r[m]||{};this.itemRules=d,this.validator=t,this.itemSetValue(o(this.name,l))},unInit(){if(this.form){const{childrens:e,formData:t,_realName:r}=this.form;e.forEach(((e,a)=>{e===this&&(this.form.childrens.splice(a,1),delete t[r(e.name)])}))}},itemSetValue(e){const t=this.form._realName(this.name),r=this.itemRules.rules||[],a=this.form._getValue(t,e,r);return this.form._setDataValue(t,this.form.formData,a),a},clearValidate(){this.errMsg=""},_isRequired(){return this.required},_justifyContent(){if(this.form){const{labelAlign:e}=this.form;let t=this.labelAlign?this.labelAlign:e;if("left"===t)return"flex-start";if("center"===t)return"center";if("right"===t)return"flex-end"}return"flex-start"},_labelWidthUnit(e){return this.num2px(this.labelWidth?this.labelWidth:e||(this.label?65:"auto"))},_labelPosition(){return this.form&&this.form.labelPosition||"left"},isTrigger:(e,t,r)=>"submit"!==e&&e?"bind":void 0===e?"bind"!==t?t?"submit":""===r?"bind":"submit":"bind":"submit",num2px:e=>"number"==typeof e?`${e}px`:e}},[["render",function(e,t,c,g,p,b){const y=d,v=f;return r(),a(v,{class:n(["uni-forms-item",["is-direction-"+p.localLabelPos,p.border?"uni-forms-item--border":"",p.border&&p.isFirstBorder?"is-first-border":""]])},{default:i((()=>[l(e.$slots,"label",{},(()=>[s(v,{class:n(["uni-forms-item__label",{"no-label":!c.label&&!c.required}]),style:o({width:p.localLabelWidth,justifyContent:p.localLabelAlign})},{default:i((()=>[c.required?(r(),a(y,{key:0,class:"is-required"},{default:i((()=>[u("*")])),_:1})):m("",!0),s(y,null,{default:i((()=>[u(h(c.label),1)])),_:1})])),_:1},8,["class","style"])]),!0),s(v,{class:"uni-forms-item__content"},{default:i((()=>[l(e.$slots,"default",{},void 0,!0),s(v,{class:n(["uni-forms-item__error",{"msg--active":b.msg}])},{default:i((()=>[s(y,null,{default:i((()=>[u(h(b.msg),1)])),_:1})])),_:1},8,["class"])])),_:3})])),_:3},8,["class"])}],["__scopeId","data-v-540b8126"]]);var M={email:/^\S+?@\S+?\.\S+?$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i")};const k={int:"integer",bool:"boolean",double:"number",long:"number",password:"string"};function A(e,t=""){["label"].forEach((t=>{void 0===e[t]&&(e[t]="")}));let r=t;for(let a in e){let t=new RegExp("{"+a+"}");r=r.replace(t,e[a])}return r}const j={integer:e=>j.number(e)&&parseInt(e,10)===e,string:e=>"string"==typeof e,number:e=>!isNaN(e)&&"number"==typeof e,boolean:function(e){return"boolean"==typeof e},float:function(e){return j.number(e)&&!j.integer(e)},array:e=>Array.isArray(e),object:e=>"object"==typeof e&&!j.array(e),date:e=>e instanceof Date,timestamp(e){return!(!this.integer(e)||Math.abs(e).toString().length>16)},file:e=>"string"==typeof e.url,email:e=>"string"==typeof e&&!!e.match(M.email)&&e.length<255,url:e=>"string"==typeof e&&!!e.match(M.url),pattern(e,t){try{return new RegExp(e).test(t)}catch(r){return!1}},method:e=>"function"==typeof e,idcard:e=>"string"==typeof e&&!!e.match(M.idcard),"url-https"(e){return this.url(e)&&e.startsWith("https://")},"url-scheme":e=>e.startsWith("://"),"url-web":e=>!1};const w={required:(e,t,r)=>e.required&&function(e,t){return null==e||"string"==typeof e&&!e||!(!Array.isArray(e)||e.length)||"object"===t&&!Object.keys(e).length}(t,e.format||typeof t)?A(e,e.errorMessage||r.required):null,range(e,t,r){const{range:a,errorMessage:i}=e;let l=new Array(a.length);for(let n=0;n<a.length;n++){const e=a[n];j.object(e)&&void 0!==e.value?l[n]=e.value:l[n]=e}let s=!1;return Array.isArray(t)?s=new Set(t.concat(l)).size===l.length:l.indexOf(t)>-1&&(s=!0),s?null:A(e,i||r.enum)},rangeNumber(e,t,r){if(!j.number(t))return A(e,e.errorMessage||r.pattern.mismatch);let{minimum:a,maximum:i,exclusiveMinimum:l,exclusiveMaximum:s}=e,n=l?t<=a:t<a,o=s?t>=i:t>i;return void 0!==a&&n?A(e,e.errorMessage||r.number[l?"exclusiveMinimum":"minimum"]):void 0!==i&&o?A(e,e.errorMessage||r.number[s?"exclusiveMaximum":"maximum"]):void 0!==a&&void 0!==i&&(n||o)?A(e,e.errorMessage||r.number.range):null},rangeLength(e,t,r){if(!j.string(t)&&!j.array(t))return A(e,e.errorMessage||r.pattern.mismatch);let a=e.minLength,i=e.maxLength,l=t.length;return void 0!==a&&l<a?A(e,e.errorMessage||r.length.minLength):void 0!==i&&l>i?A(e,e.errorMessage||r.length.maxLength):void 0!==a&&void 0!==i&&(l<a||l>i)?A(e,e.errorMessage||r.length.range):null},pattern:(e,t,r)=>j.pattern(e.pattern,t)?null:A(e,e.errorMessage||r.pattern.mismatch),format(e,t,r){var a=Object.keys(j),i=k[e.format]?k[e.format]:e.format||e.arrayType;return a.indexOf(i)>-1&&!j[i](t)?A(e,e.errorMessage||r.typeError):null},arrayTypeFormat(e,t,r){if(!Array.isArray(t))return A(e,e.errorMessage||r.typeError);for(let a=0;a<t.length;a++){const i=t[a];let l=this.format(e,i,r);if(null!==l)return l}return null}};class F extends class{constructor(e){this._message=e}async validateRule(e,t,r,a,i){var l=null;let s=t.rules;if(s.findIndex((e=>e.required))<0){if(null==r)return l;if("string"==typeof r&&!r.length)return l}var n=this._message;if(void 0===s)return n.default;for(var o=0;o<s.length;o++){let u=s[o],m=this._getValidateType(u);if(Object.assign(u,{label:t.label||`["${e}"]`}),w[m]&&null!=(l=w[m](u,r,n)))break;if(u.validateExpr){let e=Date.now();if(!1===u.validateExpr(r,i,e)){l=this._getMessage(u,u.errorMessage||this._message.default);break}}if(u.validateFunction&&null!==(l=await this.validateFunction(u,r,a,i,m)))break}return null!==l&&(l=n.TAG+l),l}async validateFunction(e,t,r,a,i){let l=null;try{let s=null;const n=await e.validateFunction(e,t,a||r,(e=>{s=e}));(s||"string"==typeof n&&n||!1===n)&&(l=this._getMessage(e,s||n,i))}catch(s){l=this._getMessage(e,s.message,i)}return l}_getMessage(e,t,r){return A(e,t||e.errorMessage||this._message[r]||t.default)}_getValidateType(e){var t="";return e.required?t="required":e.format?t="format":e.arrayType?t="arrayTypeFormat":e.range?t="range":void 0!==e.maximum||void 0!==e.minimum?t="rangeNumber":void 0!==e.maxLength||void 0!==e.minLength?t="rangeLength":e.pattern?t="pattern":e.validateFunction&&(t="validateFunction"),t}}{constructor(e,t){super(F.message),this._schema=e,this._options=t||null}updateSchema(e){this._schema=e}async validate(e,t){let r=this._checkFieldInSchema(e);return r||(r=await this.invokeValidate(e,!1,t)),r.length?r[0]:null}async validateAll(e,t){let r=this._checkFieldInSchema(e);return r||(r=await this.invokeValidate(e,!0,t)),r}async validateUpdate(e,t){let r=this._checkFieldInSchema(e);return r||(r=await this.invokeValidateUpdate(e,!1,t)),r.length?r[0]:null}async invokeValidate(e,t,r){let a=[],i=this._schema;for(let l in i){let s=i[l],n=await this.validateRule(l,s,e[l],e,r);if(null!=n&&(a.push({key:l,errorMessage:n}),!t))break}return a}async invokeValidateUpdate(e,t,r){let a=[];for(let i in e){let l=await this.validateRule(i,this._schema[i],e[i],e,r);if(null!=l&&(a.push({key:i,errorMessage:l}),!t))break}return a}_checkFieldInSchema(e){var t=Object.keys(e),r=Object.keys(this._schema);if(new Set(t.concat(r)).size===r.length)return"";var a=t.filter((e=>r.indexOf(e)<0));return[{key:"invalid",errorMessage:A({field:JSON.stringify(a)},F.message.TAG+F.message.defaultInvalid)}]}}F.message=new function(){return{TAG:"",default:"验证错误",defaultInvalid:"提交的字段{field}在数据库中并不存在",validateFunction:"验证无效",required:"{label}必填",enum:"{label}超出范围",timestamp:"{label}格式无效",whitespace:"{label}不能为空",typeError:"{label}类型无效",date:{format:"{label}日期{value}格式无效",parse:"{label}日期无法解析,{value}无效",invalid:"{label}日期{value}无效"},length:{minLength:"{label}长度不能少于{minLength}",maxLength:"{label}长度不能超过{maxLength}",range:"{label}必须介于{minLength}和{maxLength}之间"},number:{minimum:"{label}不能小于{minimum}",maximum:"{label}不能大于{maximum}",exclusiveMinimum:"{label}不能小于等于{minimum}",exclusiveMaximum:"{label}不能大于等于{maximum}",range:"{label}必须介于{minimum}and{maximum}之间"},pattern:{mismatch:"{label}格式不匹配"}}};const R=(e,t,r)=>{const a=r.find((e=>{return e.format&&("int"===(t=e.format)||"double"===t||"number"===t||"timestamp"===t);var t})),i=r.find((e=>e.format&&"boolean"===e.format||"bool"===e.format));return a&&(t=t||0===t?q(Number(t))?Number(t):t:null),i&&(t=!!E(t)&&t),t},N=(e,t)=>$(t,e),O=(e,t={})=>{const r=L(e);if("object"==typeof r&&Array.isArray(r)&&r.length>1){return r.reduce(((e,t)=>e+`#${t}`),"_formdata_")}return r[0]||e},V=e=>{let t=e.replace("_formdata_#","");return t=t.split("#").map((e=>q(e)?Number(e):e)),t},D=(e,t,r)=>("object"!=typeof e||L(t).reduce(((e,t,a,i)=>a===i.length-1?(e[t]=r,null):(t in e||(e[t]=/^[0-9]{1,}$/.test(i[a+1])?[]:{}),e[t])),e),e);function L(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")}const $=(e,t,r="undefined")=>{let a=L(t).reduce(((e,t)=>(e||{})[t]),e);return a&&void 0===a?r:a},q=e=>!isNaN(Number(e)),E=e=>"boolean"==typeof e;const I=v({name:"uniForms",emits:["validate","submit"],options:{virtualHost:!0},props:{value:{type:Object,default:()=>null},modelValue:{type:Object,default:()=>null},model:{type:Object,default:()=>null},rules:{type:Object,default:()=>({})},errShowType:{type:String,default:"undertext"},validateTrigger:{type:String,default:"submit"},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:"left"},border:{type:Boolean,default:!1}},provide(){return{uniForm:this}},data:()=>({formData:{},formRules:{}}),computed:{localData(){const e=this.model||this.modelValue||this.value;return e?(t=e,JSON.parse(JSON.stringify(t))):{};var t}},watch:{rules:{handler:function(e,t){this.setRules(e)},deep:!0,immediate:!0}},created(){c().$vm.$.appContext.config.globalProperties.binddata||(c().$vm.$.appContext.config.globalProperties.binddata=function(e,t,r){if(r)this.$refs[r].setValue(e,t);else{let r;for(let e in this.$refs){const t=this.$refs[e];if(t&&t.$options&&"uniForms"===t.$options.name){r=t;break}}if(!r)return console.error("当前 uni-froms 组件缺少 ref 属性");r.setValue(e,t)}}),this.childrens=[],this.inputChildrens=[],this.setRules(this.rules)},methods:{setRules(e){this.formRules=Object.assign({},this.formRules,e),this.validator=new F(e)},setValue(e,t){let r=this.childrens.find((t=>t.name===e));return r?(this.formData[e]=R(0,t,this.formRules[e]&&this.formRules[e].rules||[]),r.onFieldChange(this.formData[e])):null},validate(e,t){return this.checkAll(this.formData,e,t)},validateField(e=[],t){e=[].concat(e);let r={};return this.childrens.forEach((t=>{const a=O(t.name);-1!==e.indexOf(a)&&(r=Object.assign({},r,{[a]:this.formData[a]}))})),this.checkAll(r,[],t)},clearValidate(e=[]){e=[].concat(e),this.childrens.forEach((t=>{if(0===e.length)t.errMsg="";else{const r=O(t.name);-1!==e.indexOf(r)&&(t.errMsg="")}}))},submit(e,t,r){for(let a in this.dataValue){this.childrens.find((e=>e.name===a))&&void 0===this.formData[a]&&(this.formData[a]=this._getValue(a,this.dataValue[a]))}return r||console.warn("submit 方法即将废弃，请使用validate方法代替！"),this.checkAll(this.formData,e,t,"submit")},async checkAll(e,t,r,a){if(!this.validator)return;let i,l=[];for(let u in e){const e=this.childrens.find((e=>O(e.name)===u));e&&l.push(e)}r||"function"!=typeof t||(r=t),!r&&"function"!=typeof r&&Promise&&(i=new Promise(((e,t)=>{r=function(r,a){r?t(r):e(a)}})));let s=[],n=JSON.parse(JSON.stringify(e));for(let u in l){const e=l[u];let t=O(e.name);const r=await e.onFieldChange(n[t]);if(r&&(s.push(r),"toast"===this.errShowType||"modal"===this.errShowType))break}Array.isArray(s)&&0===s.length&&(s=null),Array.isArray(t)&&t.forEach((e=>{let t=O(e),r=N(e,this.localData);void 0!==r&&(n[t]=r)})),"submit"===a?this.$emit("submit",{detail:{value:n,errors:s}}):this.$emit("validate",s);let o={};return o=((e={},t)=>{let r=JSON.parse(JSON.stringify(e)),a={};for(let i in r){let e=V(i);D(a,e,r[i])}return a})(n,this.name),r&&"function"==typeof r&&r(s,o),i&&r?i:null},validateCheck(e){this.$emit("validate",e)},_getValue:R,_isRequiredField:e=>{let t=!1;for(let r=0;r<e.length;r++){if(e[r].required){t=!0;break}}return t},_setDataValue:(e,t,r)=>(t[e]=r,r||""),_getDataValue:N,_realName:O,_isRealName:e=>/^_formdata_#*/.test(e),_isEqual:(e,t)=>{if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;var r=toString.call(e);if(r!==toString.call(t))return!1;switch(r){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t}if("[object Object]"==r){var a=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);if(a.length!=i.length)return!1;for(var l=0;l<a.length;l++){var s=a[l];if(e[s]!==t[s])return!1}return!0}return"[object Array]"==r?e.toString()==t.toString():void 0}}},[["render",function(e,t,n,o,u,m){const h=g,d=f;return r(),a(d,{class:"uni-forms"},{default:i((()=>[s(h,null,{default:i((()=>[l(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3})}],["__scopeId","data-v-7b66846a"]]);const P=v({name:"app-text",emits:["click"],props:{fontSize:{type:String,default:"14px"},likeLink:Boolean},options:{virtualHost:!0},computed:{extraStyle(){let e={};return this.likeLink&&(e.color=this.$theme,e.cursor="pointer"),e}},methods:{clickHandler(e){this.$emit("click",e)}}},[["render",function(e,t,s,n,u,m){const h=d;return r(),a(h,{style:o({fontSize:s.fontSize,...m.extraStyle}),onClick:m.clickHandler},{default:i((()=>[l(e.$slots,"default")])),_:3},8,["style","onClick"])}]]);const T=v({name:"app-authenticate-layout",options:{virtualHost:!0}},[["render",function(e,t,a,n,o,u){const m=x(p("app-avatar"),_),h=f;return r(),b(y,null,[s(h,{class:"app-authenticate-layout-header"},{default:i((()=>[s(m,{src:"/static/image/logo.png",width:"75px",height:"75px","custom-style":{margin:"45px 0 10px 0"}})])),_:1}),s(h,{class:"app-authenticate-layout-content"},{default:i((()=>[l(e.$slots,"default",{},void 0,!0)])),_:3})],64)}],["__scopeId","data-v-aca5cd74"]]);export{S as _,I as a,P as b,T as c};
