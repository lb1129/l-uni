import{o as t,c as e,w as s,a as i,n as a,v as l,b as n,t as r,d as o,e as p}from"./index-ead5aebd.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const u=h({name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:()=>({}),computed:{textAlign(){let t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end"}return t}},watch:{title(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat(){""===this.stat&&(this.isStat=!1);let t="boolean"==typeof this.stat&&this.stat||"string"==typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}},[["render",function(h,u,c,f,d,y){const S=o,g=p;return t(),e(g,{class:"uni-title__box",style:l({"align-items":y.textAlign})},{default:s((()=>[i(S,{class:a(["uni-title__base",["uni-"+c.type]]),style:l({color:c.color})},{default:s((()=>[n(r(c.title),1)])),_:1},8,["class","style"])])),_:1},8,["style"])}],["__scopeId","data-v-7e58812f"]]);export{u as _};
