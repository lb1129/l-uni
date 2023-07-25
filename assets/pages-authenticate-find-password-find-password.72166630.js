import{K as e,M as o,E as a,f as r,o as t,c as l,w as s,a as d,b as i,t as n,x as p,k as m,e as u}from"./index-ead5aebd.js";import{_ as c,a as h}from"./app-button.8038587f.js";import{r as f}from"./uni-app.es.08f34ee1.js";import{_ as w,b as C,a as $}from"./app-text.d1b75722.js";import{i as _,a as y,s as g,_ as V,b}from"./validate.0a5295bf.js";import{_ as v}from"./app-gap.e8eb55be.js";import{_ as k}from"./app-authenticate-layout.ae1625c3.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.dcd12d55.js";import"./app-avatar.971f2185.js";const j=x({data(){return{codeTime:0,phoneCode:null,model:{password:"",confirmPassword:"",phone:null,code:""},rules:{password:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterPassword")},{validateFunction:(e,o,a,r)=>{o&&!_(o)?r(this.$t("passwordRule")):r()}}]},confirmPassword:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterPassword")},{validateFunction:(e,o,a,r)=>{o&&a.password!==o?r(this.$t("twoPasswordsDoNotMatch")):r()}}]},phone:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterMobileNumber")},{validateFunction:(e,o,a,r)=>{o&&!y(o)?r(this.$t("phoneRule")):r()}}]},code:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterVerificationCode")}]}}}},computed:{codeText(){return this.codeTime>0?`${this.$t("retrieve")} ${this.codeTime}s`:this.$t("getVerificationCode")}},methods:{clickHandler(){e()},async getCodeHandler(){try{const e=await this.$refs.form.validateField("phone"),o=await g(e.phone);this.phoneCode=o.data,this.codeTime=60,this.timer=setInterval((()=>{this.codeTime<=0?(this.phoneCode=null,clearInterval(this.timer)):this.codeTime--}),1e3)}catch(e){}},async confirmHandler(){try{const e=await this.$refs.form.validate();await o(e),a({icon:"none",title:this.$t("findPasswordSuccess"),duration:800}),setTimeout((()=>{r({url:"/pages/login/login"})}),800)}catch(e){}}}},[["render",function(e,o,a,r,_,y){const g=f(m("uni-easyinput"),c),x=f(m("uni-forms-item"),w),j=f(m("uni-col"),V),P=f(m("app-button"),h),T=f(m("uni-row"),b),M=f(m("app-text"),C),H=f(m("app-gap"),v),q=u,E=f(m("uni-forms"),$),B=f(m("app-authenticate-layout"),k);return t(),l(B,null,{default:s((()=>[d(E,{ref:"form",rules:_.rules,model:_.model,"label-width":0},{default:s((()=>[d(x,{name:"password"},{default:s((()=>[d(g,{primaryColor:e.$theme,modelValue:_.model.password,"onUpdate:modelValue":o[0]||(o[0]=e=>_.model.password=e),type:"password",inputBorder:!1,placeholder:e.$t("newPassword")},null,8,["primaryColor","modelValue","placeholder"])])),_:1}),d(x,{name:"confirmPassword"},{default:s((()=>[d(g,{primaryColor:e.$theme,modelValue:_.model.confirmPassword,"onUpdate:modelValue":o[1]||(o[1]=e=>_.model.confirmPassword=e),type:"password",inputBorder:!1,placeholder:e.$t("confirmPassword")},null,8,["primaryColor","modelValue","placeholder"])])),_:1}),d(x,{name:"phone"},{default:s((()=>[d(g,{primaryColor:e.$theme,type:"number",maxlength:"11",modelValue:_.model.phone,"onUpdate:modelValue":o[2]||(o[2]=e=>_.model.phone=e),inputBorder:!1,placeholder:e.$t("mobileNumber")},null,8,["primaryColor","modelValue","placeholder"])])),_:1}),d(T,{gutter:16},{default:s((()=>[d(j,{span:13},{default:s((()=>[d(x,{name:"code"},{default:s((()=>[d(g,{primaryColor:e.$theme,modelValue:_.model.code,"onUpdate:modelValue":o[3]||(o[3]=e=>_.model.code=e),inputBorder:!1,placeholder:e.$t("verificationCode")},null,8,["primaryColor","modelValue","placeholder"])])),_:1})])),_:1}),d(j,{span:11},{default:s((()=>[d(P,{disabled:_.codeTime>0,"custom-style":{fontSize:"14px"},onClick:y.getCodeHandler},{default:s((()=>[i(n(y.codeText),1)])),_:1},8,["disabled","onClick"])])),_:1})])),_:1}),_.phoneCode?(t(),l(q,{key:0},{default:s((()=>[d(M,null,{default:s((()=>[i(n(_.phoneCode),1)])),_:1}),d(H,{gap:"20px"})])),_:1})):p("",!0),d(M,{"like-link":"",onClick:y.clickHandler},{default:s((()=>[i(n(e.$t("haveAnAccount")),1)])),_:1},8,["onClick"]),d(H,{gap:"20px"}),d(P,{onClick:y.confirmHandler},{default:s((()=>[i(n(e.$t("confirm")),1)])),_:1},8,["onClick"])])),_:1},8,["rules","model"]),d(H)])),_:1})}]]);export{j as default};