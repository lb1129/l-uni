import{m as t,G as e,H as s,J as a,g as i,K as l,L as n,o,D as r,a as u,w as p,F as c,e as m,b as f,t as g,q as d,d as h}from"./index-25209b9b.js";import{_ as y}from"./app-avatar.b290b37d.js";import{r as $}from"./uni-app.es.99390497.js";import{_}from"./uni-list-item.f0143b0a.js";import{_ as k}from"./uni-list.7f5121ec.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.2a753de2.js";const v=x({data:()=>({}),methods:{...t(["resetMenuData","resetUserInfo"]),logOutHandler(){e({title:this.$t("tip"),content:this.$t("areYouSureToLogOut"),cancelText:this.$t("cancel"),confirmText:this.$t("confirm"),success:async t=>{if(t.confirm){s({icon:"none",title:this.$t("signingOutPleaseWait"),mask:!0,duration:6e4});try{await a(),i.clear(),this.resetUserInfo(),this.resetMenuData(),l(),n({url:"/pages/login/login"})}catch(e){l()}}}})}}},[["render",function(t,e,s,a,i,l){const n=$(d("app-avatar"),y),x=h,v=m,j=$(d("uni-list-item"),_),I=$(d("uni-list"),k);return o(),r(c,null,[u(v,{class:"me-header"},{default:p((()=>[u(n,{src:t.$userInfo.avatar,width:"75px",height:"75px","custom-style":{margin:"45px 0 10px 0"}},null,8,["src"]),u(v,null,{default:p((()=>[u(x,null,{default:p((()=>[f(g(t.$userInfo.userName),1)])),_:1})])),_:1})])),_:1}),u(I,null,{default:p((()=>[u(j,{title:t.$t("personalInfo"),link:"",to:"/pages/personal-center/personal-info/personal-info"},null,8,["title"]),u(j,{title:t.$t("systemSetting"),link:"",to:"/pages/personal-center/system-setting/system-setting"},null,8,["title"]),u(j,{title:t.$t("privacyPolicy"),link:"",to:"/pages/personal-center/privacy-policy/privacy-policy"},null,8,["title"]),u(j,{title:t.$t("aboutUs"),link:"",to:"/pages/personal-center/about-us/about-us"},null,8,["title"]),u(j,{title:t.$t("logOut"),clickable:"",onClick:l.logOutHandler,"show-arrow":""},null,8,["title","onClick"])])),_:1})],64)}],["__scopeId","data-v-af659af0"]]);export{v as default};
