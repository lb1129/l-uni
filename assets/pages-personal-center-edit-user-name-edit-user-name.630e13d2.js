import{H as e,a1 as a,M as t,m as s,o as r,D as n,a as o,w as i,F as l,e as u,b as m,t as p,q as c,d}from"./index-25209b9b.js";import{_ as f,a as h}from"./app-button.9a9595f9.js";import{r as _}from"./uni-app.es.99390497.js";import{_ as V}from"./app-gap.d2cdb436.js";import{_ as $}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.2a753de2.js";const g=$({data:()=>({innerValue:""}),methods:{async confirmHandler(){const s=this.innerValue.length;let r="";if(s<4||s>10?r=this.$t("incorrectUsernameLength"):/^[\u4e00-\u9fa5A-Za-z0-9_-]+$/.test(this.innerValue)||(r=this.$t("incorrectUsernameFormat")),r)e({icon:"none",title:r});else try{const e=await a({userName:this.innerValue});this.setUserInfo(e.data),t()}catch(n){}},...s(["setUserInfo"])},watch:{"$userInfo.userName":{handler(e){this.innerValue=e},immediate:!0}}},[["render",function(e,a,t,s,$,g){const j=_(c("uni-easyinput"),f),U=d,x=_(c("app-gap"),V),y=_(c("app-button"),h),b=u;return r(),n(l,null,[o(j,{"primary-color":e.$theme,focus:"","input-border":!1,modelValue:$.innerValue,"onUpdate:modelValue":a[0]||(a[0]=e=>$.innerValue=e),placeholder:e.$t("pleaseEnterUserName")},null,8,["primary-color","modelValue","placeholder"]),o(b,{class:"edit-user-name"},{default:i((()=>[o(U,{class:"edit-user-name-text"},{default:i((()=>[m(p(e.$t("userNameRule")),1)])),_:1}),o(x,{gap:"50px"}),o(y,{onClick:g.confirmHandler},{default:i((()=>[m(p(e.$t("confirm")),1)])),_:1},8,["onClick"])])),_:1})],64)}],["__scopeId","data-v-e1765c0a"]]);export{g as default};