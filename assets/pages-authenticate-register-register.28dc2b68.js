import{M as e,o as r,c as o,w as a,a as l,b as t,t as s,u as d}from"./index-cbd86172.js";import{_ as i,a as m}from"./app-button.6e2ea152.js";import{r as n}from"./uni-app.es.4de01d85.js";import{_ as p,b as u,a as c,c as h}from"./app-authenticate-layout.bf1a71f9.js";import{_ as f,a as w}from"./uni-row.cbf0ef64.js";import{_ as $}from"./app-gap.d4aea593.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.a38478f3.js";import"./app-avatar.b9691294.js";const C=y({data(){return{codeTime:0,model:{username:"",password:"",confirmPassword:"",phone:null,code:""},rules:{username:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterUserName")}]},password:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterPassword")}]},confirmPassword:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterPassword")},{validateFunction:(e,r,o,a)=>{r&&o.password!==r?a(this.$t("twoPasswordsDoNotMatch")):a()}}]},phone:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterMobileNumber")}]},code:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterVerificationCode")}]}}}},computed:{codeText(){return this.codeTime>0?`${this.$t("retrieve")} ${this.codeTime}s`:this.$t("getVerificationCode")}},methods:{clickHandler(){e()},async getCodeHandler(){try{await this.$refs.form.validateField("phone");this.codeTime=60,this.timer=setInterval((()=>{this.codeTime<=0?clearInterval(this.timer):this.codeTime--}),1e3)}catch(e){}},async registerHandler(){try{await this.$refs.form.validate()}catch(e){}}}},[["render",function(e,y,C,_,g,V){const b=n(d("uni-easyinput"),i),k=n(d("uni-forms-item"),p),v=n(d("uni-col"),f),j=n(d("app-button"),m),x=n(d("uni-row"),w),P=n(d("app-text"),u),T=n(d("app-gap"),$),M=n(d("uni-forms"),c),H=n(d("app-authenticate-layout"),h);return r(),o(H,null,{default:a((()=>[l(M,{ref:"form",rules:g.rules,model:g.model,"label-width":0},{default:a((()=>[l(k,{name:"username"},{default:a((()=>[l(b,{primaryColor:e.$theme,inputBorder:!1,modelValue:g.model.username,"onUpdate:modelValue":y[0]||(y[0]=e=>g.model.username=e),placeholder:e.$t("userName")},null,8,["primaryColor","modelValue","placeholder"])])),_:1}),l(k,{name:"password"},{default:a((()=>[l(b,{primaryColor:e.$theme,modelValue:g.model.password,"onUpdate:modelValue":y[1]||(y[1]=e=>g.model.password=e),type:"password",inputBorder:!1,placeholder:e.$t("password")},null,8,["primaryColor","modelValue","placeholder"])])),_:1}),l(k,{name:"confirmPassword"},{default:a((()=>[l(b,{primaryColor:e.$theme,modelValue:g.model.confirmPassword,"onUpdate:modelValue":y[2]||(y[2]=e=>g.model.confirmPassword=e),type:"password",inputBorder:!1,placeholder:e.$t("confirmPassword")},null,8,["primaryColor","modelValue","placeholder"])])),_:1}),l(k,{name:"phone"},{default:a((()=>[l(b,{primaryColor:e.$theme,type:"number",maxlength:"11",modelValue:g.model.phone,"onUpdate:modelValue":y[3]||(y[3]=e=>g.model.phone=e),inputBorder:!1,placeholder:e.$t("mobileNumber")},null,8,["primaryColor","modelValue","placeholder"])])),_:1}),l(x,{gutter:16},{default:a((()=>[l(v,{span:13},{default:a((()=>[l(k,{name:"code"},{default:a((()=>[l(b,{primaryColor:e.$theme,modelValue:g.model.code,"onUpdate:modelValue":y[4]||(y[4]=e=>g.model.code=e),inputBorder:!1,placeholder:e.$t("verificationCode")},null,8,["primaryColor","modelValue","placeholder"])])),_:1})])),_:1}),l(v,{span:11},{default:a((()=>[l(j,{disabled:g.codeTime>0,"custom-style":{fontSize:"14px"},onClick:V.getCodeHandler},{default:a((()=>[t(s(V.codeText),1)])),_:1},8,["disabled","onClick"])])),_:1})])),_:1}),l(P,{"like-link":"",onClick:V.clickHandler},{default:a((()=>[t(s(e.$t("haveAnAccount")),1)])),_:1},8,["onClick"]),l(T,{gap:"20px"}),l(j,{onClick:V.registerHandler},{default:a((()=>[t(s(e.$t("register")),1)])),_:1},8,["onClick"])])),_:1},8,["rules","model"]),l(T)])),_:1})}]]);export{C as default};