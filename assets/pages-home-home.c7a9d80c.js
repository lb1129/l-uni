import{u as t,o as e,c as i,w as o,a as s,r,z as n,e as l,n as d,A as a,B as c,b as u,t as h,d as p,C as g,f,p as m,j as _,D as y,E as b,F as k,G as C}from"./index-ed28424c.js";import{_ as S}from"./uni-icons.beefc4e4.js";import{r as x}from"./uni-app.es.94d34bd5.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as v}from"./app-gap.318479cf.js";const z=w({name:"app-icon-text",emits:["click"],props:{iconType:String,iconSize:{type:Number,default:30},iconColor:String,customPrefix:String,text:String,customStyle:Object},options:{virtualHost:!0},methods:{clickHandler(t){this.$emit("click",t)}}},[["render",function(d,a,c,u,h,p){const g=x(t("uni-icons"),S),f=l;return e(),i(f,{class:"app-icon-text",style:n(c.customStyle),onClick:p.clickHandler},{default:o((()=>[s(g,{type:c.iconType,color:c.iconColor,"custom-prefix":c.customPrefix,size:c.iconSize},null,8,["type","color","custom-prefix","size"]),s(f,{class:"app-icon-text-text"},{default:o((()=>[r(d.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style","onClick"])}],["__scopeId","data-v-1edef1de"]]);const $=w({name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:()=>({column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}),created(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy(){this.grid.children.forEach(((t,e)=>{t===this&&this.grid.children.splice(e,1)}))},methods:{_onClick(){this.grid.change({detail:{index:this.index}})}}},[["render",function(t,c,u,h,p,g){const f=l;return p.width?(e(),i(f,{key:0,style:n("width:"+p.width+";"+(p.square?"height:"+p.width:"")),class:"uni-grid-item"},{default:o((()=>[s(f,{class:d([{"uni-grid-item--border":p.showBorder,"uni-grid-item--border-top":p.showBorder&&u.index<p.column,"uni-highlight":p.highlight},"uni-grid-item__box"]),style:n({"border-right-color":p.borderColor,"border-bottom-color":p.borderColor,"border-top-color":p.borderColor}),onClick:g._onClick},{default:o((()=>[r(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])])),_:3},8,["style"])):a("",!0)}],["__scopeId","data-v-2c119250"]]);const B=w({name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide(){return{grid:this}},data:()=>({elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,width:0}),created(){this.children=[]},mounted(){this.$nextTick((()=>{this.init()}))},methods:{init(){setTimeout((()=>{this._getSize((t=>{this.children.forEach(((e,i)=>{e.width=t}))}))}),50)},change(t){this.$emit("change",t)},_getSize(t){c().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.width=parseInt((e[0].width-1)/this.column)+"px",t(this.width)}))}}},[["render",function(t,a,c,u,h,p){const g=l;return e(),i(g,{class:"uni-grid-wrap"},{default:o((()=>[s(g,{id:h.elId,ref:"uni-grid",class:d(["uni-grid",{"uni-grid--border":c.showBorder}]),style:n({"border-left-color":c.borderColor})},{default:o((()=>[r(t.$slots,"default",{},void 0,!0)])),_:3},8,["id","class","style"])])),_:3})}],["__scopeId","data-v-26adf091"]]);const T=w({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return"string"==typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick(){this.$emit("click")}}},[["render",function(t,c,g,f,m,_){const y=l,b=p;return e(),i(y,{class:"uni-section"},{default:o((()=>[s(y,{class:"uni-section-header",onClick:_.onClick},{default:o((()=>[g.type?(e(),i(y,{key:0,class:d(["uni-section-header__decoration",g.type])},null,8,["class"])):r(t.$slots,"decoration",{key:1},void 0,!0),s(y,{class:"uni-section-header__content"},{default:o((()=>[s(b,{style:n({"font-size":g.titleFontSize,color:g.titleColor}),class:d(["uni-section__content-title",{distraction:!g.subTitle}])},{default:o((()=>[u(h(g.title),1)])),_:1},8,["style","class"]),g.subTitle?(e(),i(b,{key:0,style:n({"font-size":g.subTitleFontSize,color:g.subTitleColor}),class:"uni-section-header__content-sub"},{default:o((()=>[u(h(g.subTitle),1)])),_:1},8,["style"])):a("",!0)])),_:1}),s(y,{class:"uni-section-header__slot-right"},{default:o((()=>[r(t.$slots,"right",{},void 0,!0)])),_:3})])),_:3},8,["onClick"]),s(y,{class:"uni-section-content",style:n({padding:_._padding})},{default:o((()=>[r(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-0a8818d5"]]);const D=w({data:()=>({}),computed:{...g(["menuData"])},methods:{clickHandler(t){f({url:t})},...m(["setMenuData"])},onPullDownRefresh(){_().then((t=>{this.setMenuData(menuRes.data),y()})).catch((t=>{y()}))}},[["render",function(r,d,a,c,p,g){const f=l,m=x(t("app-icon-text"),z),_=x(t("uni-grid-item"),$),y=x(t("uni-grid"),B),S=x(t("uni-section"),T),w=x(t("app-gap"),v);return e(!0),b(C,null,k(r.menuData,(t=>(e(),b(C,{key:t.name},[s(S,{title:t.name,padding:""},{decoration:o((()=>[s(f,{class:"home-decoration",style:n({backgroundColor:r.$theme})},null,8,["style"])])),default:o((()=>[s(y,{column:4},{default:o((()=>[(e(!0),b(C,null,k(t.children,(t=>(e(),i(_,{key:t.name},{default:o((()=>[s(m,{"icon-type":t.icon,onClick:e=>g.clickHandler(t.path)},{default:o((()=>[u(h(t.name),1)])),_:2},1032,["icon-type","onClick"])])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["title"]),s(w)],64)))),128)}],["__scopeId","data-v-5ba0eca0"]]);export{D as default};