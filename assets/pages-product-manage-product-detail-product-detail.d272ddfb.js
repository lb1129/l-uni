import{at as t,G as e,o as a,C as l,a as i,w as s,F as d,e as c,au as n,D as o,c as r,b as u,t as m,a1 as f,av as _,d as p}from"./index-8d1cb780.js";import{a as h}from"./product.0706bc84.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const b=v({data:()=>({record:{}}),inheritAttrs:!1,async onLoad(t){if(this.id=t.id,this.id)try{const t=await h(this.id);this.record=t.data}catch(e){}},onShareAppMessage(t){return{title:this.record.name,path:`/pages/product-manage/product-detail/product-detail?id=${this.id}`}},onShareTimeline(){return{title:this.record.name}},onNavigationBarButtonTap(a){0===a.index&&uni.shareWithSystem({summary:"",href:`${t.h5_website}/#/pages/product-manage/product-detail/product-detail?id=${this.id}`,success:()=>{},fail:()=>{e({icon:"none",title:this.$t("shareFail")})}})}},[["render",function(t,e,h,v,b,g){const y=f,w=c,$=_,x=n,j=p;return a(),l(d,null,[i(x,{class:"detail-swiper",circular:"","indicator-dots":"","indicator-color":t.$theme},{default:s((()=>[(a(!0),l(d,null,o(b.record.images,(t=>(a(),r($,{key:t},{default:s((()=>[i(w,{class:"detail-swiper-item"},{default:s((()=>[i(y,{mode:"aspectFill",class:"detail-swiper-item-image",src:t},null,8,["src"])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["indicator-color"]),i(w,{class:"detail-content"},{default:s((()=>[i(w,{class:"detail-content-item"},{default:s((()=>[i(j,{class:"detail-content-item-label"},{default:s((()=>[u("名称")])),_:1}),i(j,{class:"detail-content-item-value"},{default:s((()=>[u(m(b.record.name),1)])),_:1})])),_:1}),i(w,{class:"detail-content-item"},{default:s((()=>[i(j,{class:"detail-content-item-label"},{default:s((()=>[u("品牌")])),_:1}),i(j,{class:"detail-content-item-value"},{default:s((()=>[u(m(b.record.brand),1)])),_:1})])),_:1}),i(w,{class:"detail-content-item"},{default:s((()=>[i(j,{class:"detail-content-item-label"},{default:s((()=>[u("类别")])),_:1}),i(j,{class:"detail-content-item-value"},{default:s((()=>[u(m(b.record.category),1)])),_:1})])),_:1}),i(w,{class:"detail-content-item"},{default:s((()=>[i(j,{class:"detail-content-item-label"},{default:s((()=>[u("价格")])),_:1}),i(j,{class:"detail-content-item-value"},{default:s((()=>[u(m(b.record.price),1)])),_:1})])),_:1}),i(w,{class:"detail-content-item"},{default:s((()=>[i(j,{class:"detail-content-item-label"},{default:s((()=>[u("颜色")])),_:1}),i(j,{class:"detail-content-item-value"},{default:s((()=>[u(m(b.record.color),1)])),_:1})])),_:1}),i(w,{class:"detail-content-item"},{default:s((()=>[i(j,{class:"detail-content-item-label"},{default:s((()=>[u("款式")])),_:1}),i(j,{class:"detail-content-item-value"},{default:s((()=>[u(m(b.record.style),1)])),_:1})])),_:1}),i(w,{class:"detail-content-item"},{default:s((()=>[i(j,{class:"detail-content-item-label"},{default:s((()=>[u("库存")])),_:1}),i(j,{class:"detail-content-item-value"},{default:s((()=>[u(m(b.record.inventory),1)])),_:1})])),_:1}),i(w,{class:"detail-content-item"},{default:s((()=>[i(j,{class:"detail-content-item-label"},{default:s((()=>[u("描述")])),_:1}),i(j,{class:"detail-content-item-value"},{default:s((()=>[u(m(b.record.describe),1)])),_:1})])),_:1})])),_:1})],64)}],["__scopeId","data-v-d1980ff3"]]);export{b as default};
