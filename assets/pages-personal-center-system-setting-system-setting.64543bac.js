import{O as e,p as a,o as t,C as n,c as l,w as s,r as i,y as r,a as o,b as c,t as d,x as p,F as u,D as h,e as m,d as f,P as g,Q as k,R as v,S as C,k as _,T as x,U as y,m as $}from"./index-8d1cb780.js";import{_ as I}from"./uni-list-item.e6be247a.js";import{r as b}from"./uni-app.es.fa363ff4.js";import{_ as H}from"./uni-popup.4582a9b2.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as w}from"./uni-list.0ebcb5bb.js";import"./uni-icons.a842bb4b.js";const V=j({name:"app-picker",emits:["change","cancel"],props:{value:Number,rangeKey:String,range:{type:Array,default:()=>[]}},options:{virtualHost:!0},data:()=>({innerValue:[]}),computed:{itemIsObject(){return this.range[0]&&e(this.range[0])}},methods:{open(){this.$refs.popup.open()},close(){this.$refs.popup.close()},pickerChangeHandler(e){this.innerValue=e.detail.value},cancelHandler(){this.$emit("cancel"),this.close()},confirmHandler(){this.$emit("change",{detail:{value:this.innerValue[0]}}),this.close()}},watch:{value:{handler(e){this.innerValue=[e]},immediate:!0}}},[["render",function(e,v,C,_,x,y){const $=m,I=f,j=g,w=k,V=b(a("uni-popup"),H);return t(),n(u,null,[e.$slots.default?(t(),l($,{key:0,onClick:y.open},{default:s((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["onClick"])):r("",!0),o(V,{ref:"popup",type:"bottom","background-color":"#fff"},{default:s((()=>[o($,{class:"app-picker-header"},{default:s((()=>[o(I,{class:"app-picker-header-item app-picker-header-cancel",onClick:y.cancelHandler},{default:s((()=>[c(d(e.$t("cancel")),1)])),_:1},8,["onClick"]),o(I,{class:"app-picker-header-item app-picker-header-confirm",style:p({color:e.$theme}),onClick:y.confirmHandler},{default:s((()=>[c(d(e.$t("confirm")),1)])),_:1},8,["style","onClick"])])),_:1}),o(w,{"immediate-change":"",value:x.innerValue,onChange:y.pickerChangeHandler,class:"app-picker-view","indicator-style":"height: 50px"},{default:s((()=>[o(j,{class:"app-picker-view-item"},{default:s((()=>[(t(!0),n(u,null,h(C.range,(a=>(t(),l($,{key:y.itemIsObject?a[C.rangeKey]:a},{default:s((()=>[e.$slots.render?i(e.$slots,"render",{key:0,record:a},void 0,!0):(t(),l(I,{key:1},{default:s((()=>[c(d(y.itemIsObject?a[C.rangeKey]:a),1)])),_:2},1024))])),_:2},1024)))),128))])),_:3})])),_:3},8,["value","onChange"])])),_:3},512)],64)}],["__scopeId","data-v-1359832f"]]);const O=j({data:()=>({localeIndex:0,locales:[{value:"en",text:"English"},{value:"zh-Hans",text:"简体中文"}],themes:["#007aff","#f5222d","#faad14","#13c2c2","#52c41a","#2f54eb","#722ed1","#f29cb1"]}),computed:{themeIndex(){return this.themes.findIndex((e=>e===this.$theme))}},created(){const e=v();this.isAndroid="android"===e.platform.toLowerCase();const a=C();this.localeIndex=this.locales.findIndex((e=>e.value===a))},methods:{themeChangeHandler(e){const a=this.themes[e.detail.value];this.$theme!==a&&(this.setTheme(a),_({frontColor:"#ffffff",backgroundColor:a}),x.set(a))},localeChangeHandler(e){const a=e.detail.value;if(a===this.localeIndex)return;const t=this.locales[a].value;y(t),this.$i18n.locale=t,this.localeIndex=a},...$(["setTheme"])}},[["render",function(e,n,i,r,c,d){const u=b(a("uni-list-item"),I),h=b(a("app-picker"),V),f=m,g=b(a("uni-list"),w);return t(),l(g,null,{default:s((()=>[o(h,{range:c.locales,"range-key":"text",value:c.localeIndex,onChange:d.localeChangeHandler},{default:s((()=>[o(u,{title:e.$t("language"),"show-arrow":""},null,8,["title"])])),_:1},8,["range","value","onChange"]),o(h,{range:c.themes,value:d.themeIndex,onChange:d.themeChangeHandler},{default:s((()=>[o(u,{title:e.$t("theme"),"show-arrow":""},null,8,["title"])])),render:s((({record:e})=>[o(f,{style:{padding:"10px 0"}},{default:s((()=>[o(f,{style:p({display:"inline-block",width:"30px",height:"30px",backgroundColor:e})},null,8,["style"])])),_:2},1024)])),_:1},8,["range","value","onChange"])])),_:1})}]]);export{O as default};
