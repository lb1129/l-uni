import{m as t,$ as e,a0 as a,a1 as s,o as i,c as n,w as r,a as o,b as l,t as p,d as m,e as c,k as u}from"./index-ead5aebd.js";import{_ as h}from"./app-avatar.971f2185.js";import{r as f}from"./uni-app.es.08f34ee1.js";import{_ as d}from"./uni-list-item.87fb3cc2.js";import{_ as g}from"./uni-list.cfe4ba79.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.dcd12d55.js";const _=x({data:()=>({}),computed:{phone(){return this.$userInfo.phone?`${this.$userInfo.phone}`:this.$t("none")}},methods:{...t(["setUserInfo"]),changeAvatarHandler(){e({count:1,sourceType:["camera","album"],sizeType:["compressed","original"],success:async t=>{if(t.tempFilePaths.length>0){let i=t.tempFilePaths[0],n="";n=Date.now()+t.tempFiles[0].name.substring(t.tempFiles[0].name.lastIndexOf("."));try{const t=await a.uploadFile({filePath:i,cloudPath:n});await s({avatar:t.fileID}),this.setUserInfo({...this.$userInfo,avatar:t.fileID})}catch(e){}}}})}}},[["render",function(t,e,a,s,x,_){const v=m,w=c,I=f(u("app-avatar"),h),$=f(u("uni-list-item"),d),j=f(u("uni-list"),g);return i(),n(j,null,{default:r((()=>[o($,{showArrow:"",clickable:"",onClick:_.changeAvatarHandler},{header:r((()=>[o(w,{class:"info-avatart-text"},{default:r((()=>[o(v,{style:{"font-size":"14px"}},{default:r((()=>[l(p(t.$t("avatar")),1)])),_:1})])),_:1})])),footer:r((()=>[o(I,{src:t.$userInfo.avatar,width:"40px",height:"40px"},null,8,["src"])])),_:1},8,["onClick"]),o($,{title:t.$t("nickname"),to:"/pages/personal-center/edit-nickname/edit-nickname",showArrow:"","right-text":t.$userInfo.nickname},null,8,["title","right-text"]),o($,{title:t.$t("mobileNumber"),to:"/pages/personal-center/edit-phone/edit-phone",showArrow:"","right-text":_.phone},null,8,["title","right-text"])])),_:1})}],["__scopeId","data-v-003fe09d"]]);export{_ as default};