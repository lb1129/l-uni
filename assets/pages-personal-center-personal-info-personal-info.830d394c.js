import{p as a,a0 as e,a1 as t,o as s,c as r,w as o,a as i,b as n,t as l,d as u,e as p,u as m}from"./index-ed28424c.js";import{_ as d}from"./app-avatar.24909087.js";import{r as c}from"./uni-app.es.94d34bd5.js";import{_ as f}from"./uni-list-item.0a110f33.js";import{_ as h}from"./uni-list.dbb501b2.js";import{_}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.beefc4e4.js";const v=_({data:()=>({}),methods:{...a(["setUserInfo"]),changeAvatarHandler(){e({count:1,sourceType:["camera","album"],sizeType:["compressed","original"],success:a=>{const e=new FileReader;e.readAsDataURL(a.tempFiles[0]),e.onload=a=>{t({avatar:a.target.result}).then((a=>{this.setUserInfo(a.data)}))}}})}}},[["render",function(a,e,t,_,v,g){const x=u,j=p,w=c(m("app-avatar"),d),A=c(m("uni-list-item"),f),I=c(m("uni-list"),h);return s(),r(I,null,{default:o((()=>[i(A,{showArrow:"",clickable:"",onClick:g.changeAvatarHandler},{header:o((()=>[i(j,{class:"info-avatart-text"},{default:o((()=>[i(x,{style:{"font-size":"14px"}},{default:o((()=>[n(l(a.$t("avatar")),1)])),_:1})])),_:1})])),footer:o((()=>[i(w,{src:a.$userInfo.avatar,width:"40px",height:"40px"},null,8,["src"])])),_:1},8,["onClick"]),i(A,{title:a.$t("userName"),to:"/pages/personal-center/edit-user-name/edit-user-name",showArrow:"","right-text":a.$userInfo.userName},null,8,["title","right-text"])])),_:1})}],["__scopeId","data-v-d2e74d50"]]);export{v as default};
