import{q as t,o as e,c as i,w as o,a as s,r as n,y as r,e as l,n as d,z as a,A as c,b as u,t as h,d as p,B as g,f as m,m as f,j as y,C as _,D as b,F as k,E as C}from"./index-25209b9b.js";import{_ as x}from"./uni-icons.2a753de2.js";import{r as S}from"./uni-app.es.99390497.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as v}from"./app-gap.d2cdb436.js";const z=w({name:"app-icon-text",emits:["click"],props:{iconType:String,iconSize:{type:Number,default:30},iconColor:String,customPrefix:String,text:String,customStyle:Object},options:{virtualHost:!0},methods:{clickHandler(t){this.$emit("click",t)}}},[["render",function(d,a,c,u,h,p){const g=S(t("uni-icons"),x),m=l;return e(),i(m,{class:"app-icon-text",style:r(c.customStyle),onClick:p.clickHandler},{default:o((()=>[s(g,{type:c.iconType,color:c.iconColor,"custom-prefix":c.customPrefix,size:c.iconSize},null,8,["type","color","custom-prefix","size"]),s(m,{class:"app-icon-text-text"},{default:o((()=>[n(d.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style","onClick"])}],["__scopeId","data-v-1edef1de"]]);const $=w({name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:()=>({column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}),created(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy(){this.grid.children.forEach(((t,e)=>{t===this&&this.grid.children.splice(e,1)}))},methods:{_onClick(){this.grid.change({detail:{index:this.index}})}}},[["render",function(t,c,u,h,p,g){const m=l;return p.width?(e(),i(m,{key:0,style:r("width:"+p.width+";"+(p.square?"height:"+p.width:"")),class:"uni-grid-item"},{default:o((()=>[s(m,{class:d([{"uni-grid-item--border":p.showBorder,"uni-grid-item--border-top":p.showBorder&&u.index<p.column,"uni-highlight":p.highlight},"uni-grid-item__box"]),style:r({"border-right-color":p.borderColor,"border-bottom-color":p.borderColor,"border-top-color":p.borderColor}),onClick:g._onClick},{default:o((()=>[n(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])])),_:3},8,["style"])):a("",!0)}],["__scopeId","data-v-2c119250"]]);const D=w({name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide(){return{grid:this}},data:()=>({elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,width:0}),created(){this.children=[]},mounted(){this.$nextTick((()=>{this.init()}))},methods:{init(){setTimeout((()=>{this._getSize((t=>{this.children.forEach(((e,i)=>{e.width=t}))}))}),50)},change(t){this.$emit("change",t)},_getSize(t){c().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.width=parseInt((e[0].width-1)/this.column)+"px",t(this.width)}))}}},[["render",function(t,a,c,u,h,p){const g=l;return e(),i(g,{class:"uni-grid-wrap"},{default:o((()=>[s(g,{id:h.elId,ref:"uni-grid",class:d(["uni-grid",{"uni-grid--border":c.showBorder}]),style:r({"border-left-color":c.borderColor})},{default:o((()=>[n(t.$slots,"default",{},void 0,!0)])),_:3},8,["id","class","style"])])),_:3})}],["__scopeId","data-v-26adf091"]]);const B=w({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick(){this.$emit("click")}}},[["render",function(t,c,g,m,f,y){const _=l,b=p;return e(),i(_,{class:"uni-section"},{default:o((()=>[s(_,{class:"uni-section-header",onClick:y.onClick},{default:o((()=>[g.type?(e(),i(_,{key:0,class:d(["uni-section-header__decoration",g.type])},null,8,["class"])):n(t.$slots,"decoration",{key:1},void 0,!0),s(_,{class:"uni-section-header__content"},{default:o((()=>[s(b,{style:r({"font-size":g.titleFontSize,color:g.titleColor}),class:d(["uni-section__content-title",{distraction:!g.subTitle}])},{default:o((()=>[u(h(g.title),1)])),_:1},8,["style","class"]),g.subTitle?(e(),i(b,{key:0,style:r({"font-size":g.subTitleFontSize,color:g.subTitleColor}),class:"uni-section-header__content-sub"},{default:o((()=>[u(h(g.subTitle),1)])),_:1},8,["style"])):a("",!0)])),_:1}),s(_,{class:"uni-section-header__slot-right"},{default:o((()=>[n(t.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),s(_,{class:"uni-section-content",style:r({padding:y._padding})},{default:o((()=>[n(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-0a8818d5"]]);const T=w({name:"app-empty"},[["render",function(n,r,d,a,c,g){const m=S(t("uni-icons"),x),f=p,y=l;return e(),i(y,{class:"app-empty"},{default:o((()=>[s(m,{"custom-prefix":"iconfont",type:"icon-empty",size:"40",color:"#dddddd"}),s(y,{class:"app-empty-text"},{default:o((()=>[s(f,null,{default:o((()=>[u(h(this.$t("noData")),1)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-50ea92ca"]]);const I=w({data:()=>({}),computed:{...g(["menuData"])},methods:{clickHandler(t){m({url:t})},...f(["setMenuData"])},onPullDownRefresh(){y().then((t=>{this.setMenuData(menuRes.data),_()})).catch((t=>{_()}))}},[["render",function(n,d,c,p,g,m){const f=l,y=S(t("app-icon-text"),z),_=S(t("uni-grid-item"),$),x=S(t("uni-grid"),D),w=S(t("uni-section"),B),I=S(t("app-gap"),v),j=S(t("app-empty"),T);return e(),b(k,null,[(e(!0),b(k,null,C(n.menuData,(t=>(e(),b(k,{key:t.name},[s(w,{title:t.name,padding:""},{decoration:o((()=>[s(f,{class:"home-decoration",style:r({backgroundColor:n.$theme})},null,8,["style"])])),default:o((()=>[s(x,{column:4},{default:o((()=>[(e(!0),b(k,null,C(t.children,(t=>(e(),i(_,{key:t.name},{default:o((()=>[s(y,{"icon-type":t.icon,onClick:e=>m.clickHandler(t.path)},{default:o((()=>[u(h(t.name),1)])),_:2},1032,["icon-type","onClick"])])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["title"]),s(I)],64)))),128)),n.menuData&&n.menuData.length?a("",!0):(e(),b(k,{key:0},[s(I,{gap:"32px"}),s(j)],64))],64)}],["__scopeId","data-v-75023971"]]);export{I as default};
