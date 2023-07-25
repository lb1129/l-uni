import{i as e,o as t,c as a,w as o,a as l,n as i,b as s,t as n,r as p,d as r,e as u,I as d,f as c,g as f,h,j as m,s as g,k as y,l as _,m as k,p as $,q as v,u as x,v as C}from"./index-f4a39db8.js";import{_ as b,a as T}from"./app-button.a7ca26f0.js";import{r as w}from"./uni-app.es.6368d139.js";import{_ as S,a as j,b as H,c as P}from"./app-authenticate-layout.3ce2ed6b.js";import{_ as N}from"./app-gap.4e41aa5a.js";import{_ as V}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as U}from"./uni-popup.6c088a32.js";import"./uni-icons.1bd07a5b.js";import"./app-avatar.7ce86c39.js";const A={data:()=>({}),created(){this.popup=this.getParent()},methods:{getParent(e="uniPopup"){let t=this.$parent,a=t.$options.name;for(;a!==e;){if(t=t.$parent,!t)return!1;a=t.$options.name}return t}}},D={en:{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"},"zh-Hans":{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"},"zh-Hant":{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}},{t:M}=e(D);const z=V({name:"uniPopupDialog",mixins:[A],emits:["confirm","close"],props:{inputType:{type:String,default:"text"},value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:()=>({dialogType:"error",focus:!1,val:""}),computed:{okText(){return this.confirmText||M("uni-popup.ok")},closeText(){return this.cancelText||M("uni-popup.cancel")},placeholderText(){return this.placeholder||M("uni-popup.placeholder")},titleText(){return this.title||M("uni-popup.title")}},watch:{type(e){this.dialogType=e},mode(e){"input"===e&&(this.dialogType="info")},value(e){this.val=e}},created(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted(){this.focus=!0},methods:{onOk(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog(){this.$emit("close"),this.beforeClose||this.popup.close()},close(){this.popup.close()}}},[["render",function(e,c,f,h,m,g){const y=r,_=u,k=d;return t(),a(_,{class:"uni-popup-dialog"},{default:o((()=>[l(_,{class:"uni-dialog-title"},{default:o((()=>[l(y,{class:i(["uni-dialog-title-text",["uni-popup__"+m.dialogType]])},{default:o((()=>[s(n(g.titleText),1)])),_:1},8,["class"])])),_:1}),"base"===f.mode?(t(),a(_,{key:0,class:"uni-dialog-content"},{default:o((()=>[p(e.$slots,"default",{},(()=>[l(y,{class:"uni-dialog-content-text"},{default:o((()=>[s(n(f.content),1)])),_:1})]),!0)])),_:3})):(t(),a(_,{key:1,class:"uni-dialog-content"},{default:o((()=>[p(e.$slots,"default",{},(()=>[l(k,{class:"uni-dialog-input",modelValue:m.val,"onUpdate:modelValue":c[0]||(c[0]=e=>m.val=e),type:f.inputType,placeholder:g.placeholderText,focus:m.focus},null,8,["modelValue","type","placeholder","focus"])]),!0)])),_:3})),l(_,{class:"uni-dialog-button-group"},{default:o((()=>[l(_,{class:"uni-dialog-button",onClick:g.closeDialog},{default:o((()=>[l(y,{class:"uni-dialog-button-text"},{default:o((()=>[s(n(g.closeText),1)])),_:1})])),_:1},8,["onClick"]),l(_,{class:"uni-dialog-button uni-border-left",onClick:g.onOk},{default:o((()=>[l(y,{class:"uni-dialog-button-text uni-button-color"},{default:o((()=>[s(n(g.okText),1)])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:3})}],["__scopeId","data-v-b888b3dc"]]);const I=V({data(){return{agree:!1,model:{userName:"",password:""},rules:{userName:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterPhoneOrUserName")}]},password:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterPassword")}]}}}},methods:{navigato(e){c({url:e})},agreeChangeHandler(e){this.agree=!this.agree},confirmHandler(){this.agree=!0,this.login()},async loginHandler(){try{if(await this.$refs.form.validate(),!this.agree)return void this.$refs.dialog.open();this.login()}catch(e){}},loginSuccessAfterHandler(e){f.set(e),h().then((e=>{this.setUserInfo(e.data)})),m().then((e=>{this.setMenuData(e.data)})),g({url:"/pages/home/home"}).then((()=>{y({frontColor:"#ffffff",backgroundColor:this.$theme})}))},login(){_(this.model).then((e=>{this.loginSuccessAfterHandler(e.data)}))},...k(["setUserInfo","setMenuData"])}},[["render",function(e,i,p,d,c,f){const h=w($("uni-easyinput"),b),m=w($("uni-forms-item"),S),g=w($("uni-forms"),j),y=w($("app-text"),H),_=u,k=w($("app-gap"),N),V=w($("app-button"),T),A=v,D=r,M=x,I=C,O=w($("uni-popup-dialog"),z),q=w($("uni-popup"),U),B=w($("app-authenticate-layout"),P);return t(),a(B,null,{default:o((()=>[l(g,{ref:"form",rules:c.rules,model:c.model,"label-width":0},{default:o((()=>[l(m,{name:"userName"},{default:o((()=>[l(h,{primaryColor:e.$theme,inputBorder:!1,modelValue:c.model.userName,"onUpdate:modelValue":i[0]||(i[0]=e=>c.model.userName=e),placeholder:`${e.$t("PhoneOrUserName")} viho/user`},null,8,["primaryColor","modelValue","placeholder"])])),_:1}),l(m,{name:"password"},{default:o((()=>[l(h,{primaryColor:e.$theme,modelValue:c.model.password,"onUpdate:modelValue":i[1]||(i[1]=e=>c.model.password=e),type:"password",inputBorder:!1,placeholder:`${e.$t("password")} a123456`},null,8,["primaryColor","modelValue","placeholder"])])),_:1})])),_:1},8,["rules","model"]),l(_,null,{default:o((()=>[l(y,{"like-link":"",onClick:i[2]||(i[2]=e=>f.navigato("/pages/authenticate/register/register"))},{default:o((()=>[s(n(e.$t("signUp")),1)])),_:1}),l(_,{style:{float:"right"}},{default:o((()=>[l(y,{"like-link":"",onClick:i[3]||(i[3]=e=>f.navigato("/pages/authenticate/find-password/find-password"))},{default:o((()=>[s(n(e.$t("forgotPassword")),1)])),_:1})])),_:1})])),_:1}),l(k,{gap:"20px"}),l(V,{onClick:f.loginHandler},{default:o((()=>[s(n(e.$t("login")),1)])),_:1},8,["onClick"]),l(k),l(_,null,{default:o((()=>[l(I,{style:{display:"inline-block","margin-right":"2px"},onChange:f.agreeChangeHandler},{default:o((()=>[l(M,null,{default:o((()=>[l(A,{color:e.$theme,checked:c.agree,style:{transform:"scale(0.7)"}},null,8,["color","checked"]),l(D,{style:{"font-size":"14px"}},{default:o((()=>[s(n(e.$t("pleaseReadAndAgree")),1)])),_:1})])),_:1})])),_:1},8,["onChange"]),l(y,{"like-link":"",onClick:i[4]||(i[4]=e=>f.navigato("/pages/personal-center/privacy-policy/privacy-policy"))},{default:o((()=>[s(n(e.$t("privacyPolicy")),1)])),_:1})])),_:1}),l(k),l(q,{ref:"dialog",type:"center"},{default:o((()=>[l(O,{onConfirm:f.confirmHandler},{default:o((()=>[l(_,{style:{"font-size":"14px"}},{default:o((()=>[l(D,{style:{"margin-right":"2px"}},{default:o((()=>[s(n(e.$t("pleaseReadAndAgree")),1)])),_:1}),l(y,{"like-link":"",onClick:i[5]||(i[5]=e=>f.navigato("/pages/personal-center/privacy-policy/privacy-policy"))},{default:o((()=>[s(n(e.$t("privacyPolicy")),1)])),_:1})])),_:1})])),_:1},8,["onConfirm"])])),_:1},512)])),_:1})}]]);export{I as default};