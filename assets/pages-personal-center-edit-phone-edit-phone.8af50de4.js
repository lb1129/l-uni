import{a5 as e,K as o,m as a,o as t,c as r,w as s,e as l,a as i,b as d,t as n,x as p,k as m}from"./index-ead5aebd.js";import{_ as u,a as c}from"./app-button.8038587f.js";import{r as h}from"./uni-app.es.08f34ee1.js";import{_ as f,b as _,a as C}from"./app-text.d1b75722.js";import{a as $,s as b,_ as g,b as y}from"./validate.0a5295bf.js";import{_ as x}from"./app-gap.e8eb55be.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.dcd12d55.js";const j=v({data(){return{codeTime:0,phoneCode:null,model:{phone:null,code:""},rules:{phone:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterMobileNumber")},{validateFunction:(e,o,a,t)=>{o&&!$(o)?t(this.$t("phoneRule")):t()}}]},code:{rules:[{required:!0,errorMessage:this.$t("pleaseEnterVerificationCode")}]}}}},computed:{codeText(){return this.codeTime>0?`${this.$t("retrieve")} ${this.codeTime}s`:this.$t("getVerificationCode")}},methods:{async getCodeHandler(){try{const e=await this.$refs.form.validateField("phone"),o=await b(e.phone);this.phoneCode=o.data,this.codeTime=60,this.timer=setInterval((()=>{this.codeTime<=0?(this.phoneCode=null,clearInterval(this.timer)):this.codeTime--}),1e3)}catch(e){}},async confirmHandler(){try{const a=await this.$refs.form.validate();await e(a),this.setUserInfo({...this.$userInfo,phone:a.phone}),o()}catch(a){}},...a(["setUserInfo"])}},[["render",function(e,o,a,$,b,v){const j=h(m("uni-easyinput"),u),T=h(m("uni-forms-item"),f),V=h(m("uni-col"),g),w=h(m("app-button"),c),k=h(m("uni-row"),y),I=h(m("app-text"),_),H=h(m("app-gap"),x),U=l,q=h(m("uni-forms"),C);return t(),r(U,{class:"edit-phone"},{default:s((()=>[i(q,{ref:"form",rules:b.rules,model:b.model,"label-width":0},{default:s((()=>[i(T,{name:"phone"},{default:s((()=>[i(j,{primaryColor:e.$theme,type:"number",maxlength:"11",modelValue:b.model.phone,"onUpdate:modelValue":o[0]||(o[0]=e=>b.model.phone=e),inputBorder:!1,placeholder:e.$t("mobileNumber")},null,8,["primaryColor","modelValue","placeholder"])])),_:1}),i(k,{gutter:16},{default:s((()=>[i(V,{span:13},{default:s((()=>[i(T,{name:"code"},{default:s((()=>[i(j,{primaryColor:e.$theme,modelValue:b.model.code,"onUpdate:modelValue":o[1]||(o[1]=e=>b.model.code=e),inputBorder:!1,placeholder:e.$t("verificationCode")},null,8,["primaryColor","modelValue","placeholder"])])),_:1})])),_:1}),i(V,{span:11},{default:s((()=>[i(w,{disabled:b.codeTime>0,"custom-style":{fontSize:"14px"},onClick:v.getCodeHandler},{default:s((()=>[d(n(v.codeText),1)])),_:1},8,["disabled","onClick"])])),_:1})])),_:1}),b.phoneCode?(t(),r(U,{key:0},{default:s((()=>[i(I,null,{default:s((()=>[d(n(b.phoneCode),1)])),_:1}),i(H,{gap:"20px"})])),_:1})):p("",!0),i(w,{onClick:v.confirmHandler},{default:s((()=>[d(n(e.$t("confirm")),1)])),_:1},8,["onClick"])])),_:1},8,["rules","model"])])),_:1})}],["__scopeId","data-v-dc942f31"]]);export{j as default};
