var pe=Object.defineProperty,ye=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var le=(e,l,t)=>l in e?pe(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,J=(e,l)=>{for(var t in l||(l={}))he.call(l,t)&&le(e,t,l[t]);if(ne)for(var t of ne(l))ve.call(l,t)&&le(e,t,l[t]);return e},Y=(e,l)=>ye(e,be(l));import{r as f,o as i,c as g,w as y,a as w,b as se,T as ke,d as Ve,e as De,f as Ce,g as Ee,h as N,i as j,t as $,j as G,k as W,l as U,u as oe,E as Se,m as I,n as ee,p as te,q,s as A,v as O,x as h,y as V,z as b,F as R,A as x,B as Te,C as Fe,D as we,G as Le,H as Oe,I as re,J as Ae,K as ae,L as M,M as de,N as Pe,O as H,P as Ie,Q as Re,R as K,S as Ne,U as ze,V as Ue,W as je}from"./vendor.f9fdd043.js";const xe=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))n(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const _ of m.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&n(_)}).observe(document,{childList:!0,subtree:!0});function t(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerpolicy&&(m.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?m.credentials="include":d.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function n(d){if(d.ep)return;d.ep=!0;const m=t(d);fetch(d.href,m)}};xe();var B=(e,l)=>{const t=e.__vccOpts||e;for(const[n,d]of l)t[n]=d;return t};const Be={};function Me(e,l){const t=f("router-view");return i(),g(t,null,{default:y(({Component:n})=>[w(ke,{name:"left-fade",mode:"out-in"},{default:y(()=>[(i(),g(se(n)))]),_:2},1024)]),_:1})}var qe=B(Be,[["render",Me]]);const He="modulepreload",ie={},Ke="./",F=function(l,t){return!t||t.length===0?l():Promise.all(t.map(n=>{if(n=`${Ke}${n}`,n in ie)return;ie[n]=!0;const d=n.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${m}`))return;const _=document.createElement("link");if(_.rel=d?"stylesheet":He,d||(_.as="script",_.crossOrigin=""),_.href=n,document.head.appendChild(_),d)return new Promise((E,S)=>{_.addEventListener("load",E),_.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>l())},ce=[{name:"docs-useVerify",path:"/docs/useverify",component:()=>F(()=>import("./useVerify.22e58051.js"),["assets/useVerify.22e58051.js","assets/vendor.f9fdd043.js"]),props:!0},{name:"docs-useInfo",path:"/docs/useinfo",component:()=>F(()=>import("./useInfo.221e65fd.js"),["assets/useInfo.221e65fd.js","assets/vendor.f9fdd043.js"]),props:!0},{name:"docs-useBind",path:"/docs/usebind",component:()=>F(()=>import("./useBind.2eeb3880.js"),["assets/useBind.2eeb3880.js","assets/vendor.f9fdd043.js"]),props:!0},{name:"docs-tableListDemo",path:"/docs/tablelistdemo",component:()=>F(()=>import("./tableListDemo.f768f07c.js"),["assets/tableListDemo.f768f07c.js","assets/vendor.f9fdd043.js"]),props:!0},{name:"docs-tableList",path:"/docs/tablelist",component:()=>F(()=>import("./tableList.f063662f.js"),["assets/tableList.f063662f.js","assets/vendor.f9fdd043.js"]),props:!0},{name:"docs-search",path:"/docs/search",component:()=>F(()=>import("./search.556ce523.js"),["assets/search.556ce523.js","assets/vendor.f9fdd043.js"]),props:!0},{name:"docs-designFormDemo",path:"/docs/designformdemo",component:()=>F(()=>import("./designFormDemo.32851f7a.js"),["assets/designFormDemo.32851f7a.js","assets/vendor.f9fdd043.js"]),props:!0},{name:"docs-designForm",path:"/docs/designform",component:()=>F(()=>import("./designForm.a09a2477.js"),["assets/designForm.a09a2477.js","assets/vendor.f9fdd043.js"]),props:!0},{name:"docs",path:"/docs",component:()=>F(()=>import("./index.3ed09663.js"),["assets/index.3ed09663.js","assets/vendor.f9fdd043.js"]),props:!0}];console.log(ce);const Je=Ve({scrollBehavior(e,l,t){return t||{top:0}},history:De(),routes:[{path:"/",name:"index",component:()=>F(()=>import("./index.387cc76f.js"),["assets/index.387cc76f.js","assets/vendor.f9fdd043.js"])},{path:"/design",name:"design",component:()=>F(()=>import("./designForm.2482cc45.js"),["assets/designForm.2482cc45.js","assets/vueFile.28a3c312.js","assets/vendor.f9fdd043.js","assets/index.6c162138.js"])},{path:"/designTable",name:"designTable",component:()=>F(()=>import("./designTable.eb154bd7.js"),["assets/designTable.eb154bd7.js","assets/vueFile.28a3c312.js","assets/vendor.f9fdd043.js","assets/index.6c162138.js"])},{path:"/form",name:"form",component:()=>F(()=>import("./form.22b4093d.js"),["assets/form.22b4093d.js","assets/vendor.f9fdd043.js","assets/index.6c162138.js"])},{path:"/list",name:"list",component:()=>F(()=>import("./list.e3c387a9.js"),["assets/list.e3c387a9.js","assets/vendor.f9fdd043.js","assets/index.6c162138.js"])},{path:"/formList",name:"formList",component:()=>F(()=>import("./index.551a5f2e.js"),["assets/index.551a5f2e.js","assets/vendor.f9fdd043.js"])},{path:"/export/form",name:"exportForm",component:()=>F(()=>import("./form.df17c75a.js"),["assets/form.df17c75a.js","assets/vendor.f9fdd043.js"])},{path:"/export/list",name:"exportList",component:()=>F(()=>import("./list.23d131b5.js"),["assets/list.23d131b5.js","assets/vendor.f9fdd043.js"])},{path:"/test",name:"test",component:()=>F(()=>import("./test.90def9f4.js"),["assets/test.90def9f4.js","assets/vendor.f9fdd043.js"])},{name:"docs",path:"/docs",component:()=>F(()=>import("./layout.ba5a4bcb.js"),["assets/layout.ba5a4bcb.js","assets/layout.1615162b.css","assets/vendor.f9fdd043.js"]),children:[...ce]}]});var Ge={state:{controlAttr:{},activeKey:""},mutations:{setControlAttr(e,l){e.controlAttr=l},setActiveKey(e,l){e.activeKey=l}},actions:{}},We=Ce({modules:{form:Ge}});const P=Ee.create({baseURL:"http://localhost:3001",timeout:6e3,headers:{}});P.interceptors.request.use(e=>e,e=>{Promise.reject(e)});P.interceptors.response.use(e=>e,e=>Promise.reject(e));const Ze={name:"tooltip",data(){return{}},props:{content:String},components:{},methods:{},computed:{},mounted(){}},Qe=["innerHTML"],Xe=N("i",{class:"icon-help"},null,-1);function Ye(e,l,t,n,d,m){const _=f("el-tooltip");return i(),g(_,{placement:"top"},{content:y(()=>[N("span",{innerHTML:t.content},null,8,Qe)]),default:y(()=>[Xe]),_:1})}var Z=B(Ze,[["render",Ye]]);function Xt(e){return P({url:"/saveDesignForm",method:"POST",data:e})}function Yt(e){return P({url:"/getDesignFormRow?id="+e,method:"get"})}function $t(e){return P({url:"/list?name="+e,method:"get"})}function en(e,l){return P({url:"/list?name="+e,method:"get",data:l})}function tn(e){return P({url:"/getFiled?formId="+e,method:"get"})}function nn(e,l){return P({url:"/saveFormList?name="+l,method:"post",data:e})}function ln(e,l,t){return P({url:`/editFormList?name=${l}&id=${t}`,method:"post",data:e})}function on(e,l){return P({url:`/getRowById?id=${e}&name=${l}`,method:"get"})}function an(e,l){return P({url:`/delById?id=${l}&name=${e}`,method:"get"})}function $e(e){return P({url:"/upload/single",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}const et={props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"\u8BF7\u8F93\u5165\u5185\u5BB9"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},config:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,n=j(t.modelValue);let d=null;const m="preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern autosave ",_="fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor  table image | alignleft aligncenter alignright alignjustify outdent indent |  styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | media charmap emoticons hr pagebreak insertdatetime print preview | code selectall searchreplace visualblocks | indent2em lineheight formatpainter axupimgs",E="undo cut copy paste pastetext |forecolor backcolor bold italic underline strikethrough|alignleft aligncenter alignright alignjustify|",S={cleanup:!0,language_url:"./static/tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"./static/tinymce/skins/ui/oxide",plugins:m,toolbar:_,menubar:!0,fontsize_formats:"12px 14px 16px 18px 20px 22px 24px 28px 32px 36px",font_formats:"\u5FAE\u8F6F\u96C5\u9ED1=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;\u5B8B\u4F53=simsun,serif;\u4EFF\u5B8B\u4F53=FangSong,serif;\u9ED1\u4F53=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;",lineheight_formats:"0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5",branding:!1,resize:!1,elementpath:!1,content_css:!1,paste_data_images:!0,height:t.height,width:t.width,placeholder:t.placeholder,urlconverter_callback:(s,a,o,u)=>(a==="img"&&s.startsWith("blob:")&&$.activeEditor&&$.activeEditor.uploadImages(),s),images_upload_handler:(s,a,o)=>{L(s,a,o)}},k={cleanup:!0,language_url:"./static/tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"./static/tinymce/skins/ui/oxide",plugins:"",toolbar:E,menubar:!1,fontsize_formats:"12px 14px 16px 18px 20px 22px 24px 28px 32px 36px",font_formats:"",lineheight_formats:"0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5",branding:!1,resize:!1,elementpath:!1,paste_data_images:!1,height:t.height,width:t.width,placeholder:t.placeholder},C=G(()=>t.config.style==="simple"?k:S);W(()=>{$.init({})}),U(()=>n.value,s=>{v(()=>{l("update:modelValue",n.value)})}),U(()=>t.modelValue,s=>{s&&s!==n.value&&(n.value=s)});function v(s,a=400){d!==null&&clearTimeout(d),d=setTimeout(s,a)}const L=(s,a,o)=>{const u=new FormData;u.append("file",s.blob()),$e(u).then(c=>{c.data.code===1?a(c.data.path):o("\u4E0A\u4F20\u5931\u8D25")}).catch(()=>{o("\u4E0A\u4F20\u51FA\u9519\uFF0C\u793A\u4F8B\u6682\u4E0D\u63D0\u4F9B\u4E0A\u4F20\u63A5\u53E3")})};return(s,a)=>(i(),g(oe(Se),{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=o=>n.value=o),init:oe(C)},null,8,["modelValue","init"]))}};var tt="./assets/img.34899e2f.png";const nt={name:"item",components:{Tooltip:Z,TinymceEdit:et},props:{element:Object,modelValue:null,tProps:String},emits:["update:modelValue"],setup(e,{emit:l}){const t=I("DFStatusType",{}),n=ee({type:t.type,config:e.element.config,value:e.tProps?e.modelValue:e.element.control.modelValue});U(()=>e.element.control.modelValue,a=>{n.value=a});const d=n.config;if(d.type==="async"&&d.source===1&&n.type!==4&&d.sourceFun&&(e.element.options=I(d.sourceFun,[])),e.element.customRules&&n.type===1){const a={mobile:/^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,tel:/^0\d{2,3}-\d{7,8}$/,phone:/^((0\d{2,3}(-?)\d{7,8})|(1[3456789]\d{9}))$/,email:/^[a-z0-9A-Z._%-]+@([a-z0-9A-Z-]+\.)+[a-zA-Z]{2,4}$/,int:/^[0-9]*[1-9][0-9]*$/,number:/^\d+(\.\d+)?$/,card:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/};e.element.customRules.forEach(o=>{if(!o.message&&o.type!=="methods")return;let u=!1;if(e.element.rules.forEach(c=>{o.message===c.message&&o.trigger===c.trigger&&(u=!0)}),!u){let c={};o.type==="required"?c={required:!0}:o.type==="rules"?c={pattern:o.rules}:o.type==="methods"?c={validator:I(o.methods,{})}:o.type&&a[o.type]&&(c={pattern:a[o.type]});let r={message:o.message};o.message||(r={}),e.element.rules.push(Object.assign({trigger:o.trigger||"blur"},c,r))}})}if(e.element.rulesComm&&n.type===1){const a=I("DFFormRulesComm",[]);a&&a.value.length>0&&a.value.forEach(o=>{if(e.element.rulesComm.indexOf(o.key)!==-1){let u=!1;e.element.rules.forEach(c=>{o.key===c.key&&(u=!0)}),u||e.element.rules.push(o)}})}const m=()=>{if(d.type==="async"&&d.source===0&&n.type!==4){const a="option_fun_"+Te(d.sourceFun),o=window.sessionStorage.getItem(a);o?e.element.options=JSON.parse(o):P[d.request](d.sourceFun,"").then(u=>{u.data.code===200&&(e.element.options=u.data.data,window.sessionStorage.setItem(a,JSON.stringify(u.data.data)))}).catch(u=>{console.log(u)})}};e.element.type==="component"&&e.element.config.template&&(e.element.config.component=I(e.element.config.template,""));const _=a=>a.item?a.item.showLabel?"":a.item.label:"",E=G(()=>t.type===2||t.type===1&&t.isEdit&&e.element.config&&e.element.config.editDisabled?!0:e.element.control.disabled),S=I("DFControlChange","");U(()=>n.value,a=>{e.tProps?l("update:modelValue",a):e.element.control.modelValue=a,S&&S({key:e.element.name,value:a})});const k=I("DFSetFormValue","");U(()=>k.value,()=>{k&&k.value&&!e.tProps&&(n.value=k.value[e.element.name],e.element.type==="upload"&&(e.element.control.fileList=JSON.parse(JSON.stringify(n.value))))});const C=I("DFSetFormOptions","");U(()=>C.value,()=>{C&&C.value&&!e.tProps&&(e.element.options=C.value[e.element.name])});const v=(a,o,u)=>{console.log(o),e.element.control.modelValue.push({name:o.fileName,url:o.path}),e.element.control.onSuccess&&e.element.control.onSuccess(a,o,u)},L=(a,o)=>{e.element.control.modelValue.forEach((u,c)=>{u.url===a.url&&e.element.control.modelValue.splice(c,1)}),e.element.control.onRemove&&e.element.control.onRemove(a,o)},s=(a,o,u)=>{console.log("uploadError"),Fe.error(o.name+"\u4E0A\u4F20\u5931\u8D25"),e.element.control.onError&&e.element.control.onError(a,o,u)};return W(()=>{m()}),J({getLabel:_,editDisabled:E,uploadSuccess:v,uploadRemove:L,uploadError:s},te(n))}},lt=["innerHTML"],ot={key:1,class:"icon-plus"},at={class:"el-upload__tip"},it={key:15,class:"gray"},st={key:1,src:tt,style:{"max-width":"100%"}},rt=["innerHTML"];function dt(e,l,t,n,d,m){const _=f("Tooltip"),E=f("el-input"),S=f("el-radio"),k=f("el-radio-group"),C=f("el-checkbox"),v=f("el-checkbox-group"),L=f("el-option"),s=f("el-select"),a=f("el-date-picker"),o=f("el-time-picker"),u=f("el-color-picker"),c=f("el-switch"),r=f("el-input-number"),T=f("el-cascader"),D=f("el-button"),z=f("el-upload"),Q=f("el-slider"),fe=f("el-rate"),_e=f("tinymce-edit"),ge=f("el-form-item");return i(),g(ge,V(t.element.item,{prop:t.tProps||t.element.name,class:t.element.className,rules:t.element.rules&&t.element.rules.length>0?t.element.rules:void 0,label:n.getLabel(t.element)}),q({default:y(()=>[e.type===3?(i(),h("div",{key:0,class:"form-value",innerHTML:e.value},null,8,lt)):(i(),h(R,{key:1},[t.element.type==="input"||t.element.type==="password"?(i(),g(E,V({key:0},t.element.control,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=p=>e.value=p),disabled:n.editDisabled,type:t.element.type==="password"?"password":""}),q({_:2},[t.element.config.prepend?{name:"prepend",fn:y(()=>[A(O(t.element.config.prepend),1)])}:void 0,t.element.config.append?{name:"append",fn:y(()=>[A(O(t.element.config.append),1)])}:void 0]),1040,["modelValue","disabled","type"])):b("",!0),t.element.type==="textarea"?(i(),g(E,V({key:1},t.element.control,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=p=>e.value=p),disabled:n.editDisabled,type:"textarea"}),null,16,["modelValue","disabled"])):b("",!0),t.element.type==="radio"?(i(),g(k,V({key:2},t.element.control,{disabled:n.editDisabled,modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=p=>e.value=p)}),{default:y(()=>[(i(!0),h(R,null,x(t.element.options,(p,X)=>(i(),g(S,{key:X,label:p.value},{default:y(()=>[A(O(p.label),1)]),_:2},1032,["label"]))),128))]),_:1},16,["disabled","modelValue"])):b("",!0),t.element.type==="checkbox"?(i(),g(v,V({key:3},t.element.control,{disabled:n.editDisabled,modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=p=>e.value=p)}),{default:y(()=>[(i(!0),h(R,null,x(t.element.options,(p,X)=>(i(),g(C,{key:X,value:p.value,label:p.label},null,8,["value","label"]))),128))]),_:1},16,["disabled","modelValue"])):b("",!0),t.element.type==="select"?(i(),g(s,V({key:4},t.element.control,{disabled:n.editDisabled,modelValue:e.value,"onUpdate:modelValue":l[4]||(l[4]=p=>e.value=p)}),{default:y(()=>[(i(!0),h(R,null,x(t.element.options,p=>(i(),g(L,{key:p.value,label:p.label,value:p.value},null,8,["label","value"]))),128))]),_:1},16,["disabled","modelValue"])):b("",!0),t.element.type==="datePicker"?(i(),g(a,V({key:5},t.element.control,{disabled:n.editDisabled,modelValue:e.value,"onUpdate:modelValue":l[5]||(l[5]=p=>e.value=p)}),null,16,["disabled","modelValue"])):b("",!0),t.element.type==="timePicker"?(i(),g(o,V({key:6},t.element.control,{disabled:n.editDisabled,modelValue:e.value,"onUpdate:modelValue":l[6]||(l[6]=p=>e.value=p)}),null,16,["disabled","modelValue"])):b("",!0),t.element.type==="colorPicker"?(i(),g(u,V({key:7},t.element.control,{disabled:n.editDisabled,modelValue:e.value,"onUpdate:modelValue":l[7]||(l[7]=p=>e.value=p)}),null,16,["disabled","modelValue"])):b("",!0),t.element.type==="switch"?(i(),g(c,V({key:8},t.element.control,{disabled:n.editDisabled,modelValue:e.value,"onUpdate:modelValue":l[8]||(l[8]=p=>e.value=p)}),null,16,["disabled","modelValue"])):b("",!0),t.element.type==="number"?(i(),g(r,V({key:9},t.element.control,{modelValue:e.value,"onUpdate:modelValue":l[9]||(l[9]=p=>e.value=p),disabled:n.editDisabled}),null,16,["modelValue","disabled"])):b("",!0),t.element.type==="cascader"?(i(),g(T,V({key:10},t.element.control,{modelValue:e.value,"onUpdate:modelValue":l[10]||(l[10]=p=>e.value=p),disabled:n.editDisabled,options:t.element.options}),null,16,["modelValue","disabled","options"])):b("",!0),t.element.type==="upload"?(i(),g(z,V({key:11,class:"upload-style"},t.element.control,{disabled:n.editDisabled,class:{limit:t.element.control.limit<=t.element.control.modelValue.length},"on-success":n.uploadSuccess,"on-remove":n.uploadRemove,"on-error":n.uploadError}),q({default:y(()=>[t.element.config.btnText?(i(),g(D,{key:0,type:"primary"},{default:y(()=>[A(O(t.element.config.btnText),1)]),_:1})):(i(),h("i",ot))]),_:2},[t.element.config.tip?{name:"tip",fn:y(()=>[N("div",at,O(t.element.config.tip),1)])}:void 0]),1040,["disabled","class","on-success","on-remove","on-error"])):b("",!0),t.element.type==="slider"?(i(),g(Q,V({key:12},t.element.control,{disabled:n.editDisabled,modelValue:e.value,"onUpdate:modelValue":l[11]||(l[11]=p=>e.value=p)}),null,16,["disabled","modelValue"])):b("",!0),t.element.type==="rate"?(i(),g(fe,V({key:13},t.element.control,{disabled:n.editDisabled,modelValue:e.value,"onUpdate:modelValue":l[12]||(l[12]=p=>e.value=p)}),null,16,["disabled","modelValue"])):b("",!0),t.element.type==="component"&&e.type!==4?(i(),g(se(t.element.config.component),V({key:14},t.element.control,{modelValue:e.value,"onUpdate:modelValue":l[13]||(l[13]=p=>e.value=p),disabled:n.editDisabled}),null,16,["modelValue","disabled"])):b("",!0),t.element.type==="component"&&e.type===4?(i(),h("div",it," \u8BF7\u4F7F\u7528provide\u6CE8\u5165\u7EC4\u4EF6\u5982\uFF1Aprovide('"+O(t.element.config.template)+"', import\u8FDB\u6765\u7684\u7EC4\u4EF6) ",1)):b("",!0),t.element.type==="tinymce"?(i(),h(R,{key:16},[e.type===1||e.type===2?(i(),g(_e,V({key:0},t.element.control,{config:t.element.config,disabled:n.editDisabled,modelValue:e.value,"onUpdate:modelValue":l[14]||(l[14]=p=>e.value=p)}),null,16,["config","disabled","modelValue"])):b("",!0),e.type===4?(i(),h("img",st)):b("",!0)],64)):b("",!0),t.element.type==="txt"?(i(),h("div",V({key:17},t.element.control,{innerHTML:e.value}),null,16,rt)):b("",!0)],64))]),_:2},[t.element.config.help?{name:"label",fn:y(()=>[A(O(n.getLabel(t.element))+" ",1),w(_,{content:t.element.config.help},null,8,["content"])])}:void 0]),1040,["prop","class","rules","label"])}var ue=B(nt,[["render",dt]]);const ct={name:"childTable",components:{FormItem:ue,Tooltip:Z},props:{data:Object,type:Number},setup(e){const l=()=>{const m={};e.data.list.forEach(_=>{_.name&&(_.type==="checkbox"?m[_.name]=[]:m[_.name]="")}),e.data.tableData.push(JSON.parse(JSON.stringify(m)))},t=m=>typeof m=="string"?m:m&&m.toString(),n=m=>{e.data.tableData.splice(m,1)},d=I("DFSetFormValue","");return we(()=>{d&&d.value&&(e.data.tableData=d.value[e.data.name])}),{addColumn:l,delColumn:n,getText:t}}},ut={class:"form-table form-table-add"},mt={key:0},ft={key:1},_t={key:2},gt=A("\u5220\u9664 "),pt={key:0,class:"table-btn"},yt=A("\u589E\u52A0");function bt(e,l,t,n,d,m){const _=f("el-button"),E=f("form-item"),S=f("Tooltip"),k=f("el-table-column"),C=f("el-table");return i(),h("div",ut,[w(C,V(t.data.control,{class:[t.data.className],data:t.data.tableData}),{default:y(()=>[(i(!0),h(R,null,x(t.data.list,(v,L)=>(i(),g(k,{key:L,prop:v.name,label:v.item.label,width:v.item.span},q({default:y(s=>[v.typeColumn==="index"?(i(),h("span",mt,O(s.$index+1),1)):b("",!0),t.type===3?(i(),h("div",ft,O(n.getText(s.row[v.name])),1)):(i(),h("div",_t,[v.typeColumn==="operate"&&t.type===1?(i(),g(_,{key:0,type:"text",onClick:a=>n.delColumn(s.$index)},{default:y(()=>[gt]),_:2},1032,["onClick"])):(i(),g(E,{key:1,tProps:`${t.data.name}.${s.$index}.${v.name}`,modelValue:s.row[v.name],"onUpdate:modelValue":a=>s.row[v.name]=a,element:v},null,8,["tProps","modelValue","onUpdate:modelValue","element"]))]))]),_:2},[v.help?{name:"header",fn:y(s=>[A(O(s.column.label)+" ",1),w(S,{content:v.help},null,8,["content"])])}:void 0]),1032,["prop","label","width"]))),128))]),_:1},16,["class","data"]),t.type===1?(i(),h("div",pt,[w(_,{size:"small",onClick:n.addColumn},{default:y(()=>[yt]),_:1},8,["onClick"])])):b("",!0)])}var ht=B(ct,[["render",bt]]);const vt={name:"formGroup",components:{Draggable:Le,FormItem:ue,ChildTable:ht,Tooltips:Z},props:{data:{type:Object,default:()=>({})}},setup(e){const l=I("DFStatusType",{}),t=Oe(),n=ee({clone:!0,gridAdd:!1,type:l.type}),d=G(()=>t.state.form.activeKey),m=s=>["grid","table","tabs"].indexOf(s)===-1,_=(s,a,o)=>{if(n.type===4)if(s==="clone"){console.log(o);const u=o.type+new Date().getTime().toString(),c=JSON.parse(JSON.stringify(o));e.data.list.splice(a,0,Object.assign(c,{name:u}))}else s==="del"?(e.data.list.splice(a,1),t.commit("setActiveKey",""),t.commit("setControlAttr",{})):s==="gridAdd"?o.columns.push({list:[],attr:{span:12}}):s==="delGridChild"&&o.splice(a,1)},E=s=>{if(n.type!==4)return;const a=s.newIndex,o=new Date().getTime().toString(),u=e.data.list,c=JSON.parse(JSON.stringify(u[a]));if((s.target&&s.target.getAttribute("data-type"))==="not-nested"&&!m(c.type)){u.splice(a,1);return}if(!c)return;const T=c.label;delete c.label,delete c.icon;let D={},z={};m(c.type)?(D={item:{label:T,showLabel:!1},rules:[]},(c.type==="input"||c.type==="textarea"||c.type==="component")&&(z={customRules:[]})):D={},u[a]=Object.assign({name:c.type+o},c,D,z),t.commit("setActiveKey",c.type+o),t.commit("setControlAttr",u[a]),n.gridAdd=c.type==="grid",n.clone=m(c.type)},S=(s,a)=>{n.type===4&&(a==="gridChild"&&(s.name||(s.name="gridChild"+new Date().getTime().toString()),s.type=a),t.commit("setActiveKey",s.name),t.commit("setControlAttr",s),n.gridAdd=s.type==="grid",n.clone=m(s.type))},k=s=>{if(s.config&&s.config.span)return{width:s.config.span/24*100+"%"}},C=I("DFFormModel",""),v=s=>{if(!s.config||!C)return!0;const a=s.config.linkKey,o=s.config.linkValue;if(a&&o&&n.type!==4){const u=a.split(/,|&/),c=o.split(/,|&/),r=a.indexOf("&")!==-1||o.indexOf("&")!==-1;let T=!1;for(let D=0;D<u.length;D++)if(r){if(T=!0,C.value[u[D]]!==c[D]){T=!1;break}}else if(C.value[u[D]]===c[D]){T=!0;break}return T}return!0},L=s=>{const{type:a,isEdit:o}=l,{config:{disabledAdd:u,disabledEdit:c,disabledDetail:r}={}}=s;if(a===1){if(o&&c||!o&&u)return!1}else if((a===2||a===3)&&r)return!1;const T=e.data.config&&e.data.config.vIf;return T&&T.length>0?T.indexOf(s.name)===-1:!0};return Y(J({click:_,draggableAdd:E},te(n)),{groupClick:S,activeKey:d,getFormItemStyle:k,linksShow:v,linksIf:L})}},kt=["onClick"],Vt={key:0,class:"form-tabs"},Dt=["innerHTML"],Ct={key:0,class:"form-table"},Et={key:0,class:"drag-control"},St={class:"item-control"},Tt=["onClick"],Ft={key:7,class:"drag-control"},wt={class:"item-control"},Lt=["onClick"],Ot=["onClick"],At=["onClick"],Pt=N("div",{class:"drag-move icon-move"},null,-1),It={key:8,class:"tooltip"};function Rt(e,l,t,n,d,m){const _=f("form-group",!0),E=f("el-tab-pane"),S=f("el-tabs"),k=f("Tooltips"),C=f("child-table"),v=f("el-col"),L=f("el-row"),s=f("el-collapse-item"),a=f("el-collapse"),o=f("el-divider"),u=f("form-item"),c=f("draggable");return i(),g(c,V({itemKey:"key-form",modelValue:t.data.list,"onUpdate:modelValue":l[0]||(l[0]=r=>t.data.list=r),name:"fade",class:"drag"},{group:"form",ghostClass:"ghost",animation:200,handle:".drag-move"},{onAdd:n.draggableAdd}),{item:y(({element:r,index:T})=>[n.linksIf(r)?re((i(),h("div",{key:0,class:ae(["group",{["group-"+r.type]:!0,active:n.activeKey===r.name}]),style:Pe(n.getFormItemStyle(r)),onClick:M(D=>n.groupClick(r),["stop"])},[r.type==="tabs"?(i(),h("div",Vt,[w(S,V(r.control,{class:[r.className]}),{default:y(()=>[(i(!0),h(R,null,x(r.columns,(D,z)=>(i(),g(E,{label:D.label,key:z},{default:y(()=>[w(_,{data:D,"data-type":"not-nested"},null,8,["data"])]),_:2},1032,["label"]))),128))]),_:2},1040,["class"])])):r.type==="title"?(i(),h("div",V({key:1,class:["title",[r.className]]},r.control),[N("span",{innerHTML:r.control.modelValue},null,8,Dt),r.help?(i(),g(k,{key:0,content:r.help},null,8,["content"])):b("",!0)],16)):r.type==="table"?(i(),h(R,{key:2},[e.type===4?(i(),h("div",Ct,[w(_,{data:r,"data-type":"not-nested"},null,8,["data"])])):(i(),g(C,{key:1,data:r,type:e.type},null,8,["data","type"]))],64)):r.type==="grid"?(i(),g(L,{key:3,class:ae(["form-row",[r.className]])},{default:y(()=>[(i(!0),h(R,null,x(r.columns,(D,z)=>(i(),g(v,V({class:["form-col",{"active-col":n.activeKey===D.name,[D.className]:D.className}]},D.attr,{key:z,onClick:M(Q=>n.groupClick(D,"gridChild"),["stop"])}),{default:y(()=>[w(_,{data:D,"data-type":"not-nested"},null,8,["data"]),e.type===4?(i(),h("div",Et,[N("div",St,[N("i",{class:"icon-del",onClick:M(Q=>n.click("delGridChild",z,r.columns),["stop"])},null,8,Tt)])])):b("",!0)]),_:2},1040,["class","onClick"]))),128))]),_:2},1032,["class"])):r.type==="card"?(i(),g(a,{key:4,"model-value":"1"},{default:y(()=>[w(s,{title:r.item.label,name:"1"},q({default:y(()=>[w(_,{data:r},null,8,["data"])]),_:2},[r.help?{name:"title",fn:y(()=>[A(O(r.item.label)+" ",1),w(k,{content:r.help},null,8,["content"])])}:void 0]),1032,["title"])]),_:2},1024)):r.type==="divider"?(i(),g(o,de(V({key:5},r.control)),{default:y(()=>[A(O(r.item&&r.item.label),1)]),_:2},1040)):(i(),g(u,{key:6,element:r},null,8,["element"])),e.type===4?(i(),h("div",Ft,[N("div",wt,[e.gridAdd?(i(),h("i",{key:0,class:"icon-plus",onClick:M(D=>n.click("gridAdd",T,r),["stop"]),title:"\u6DFB\u52A0\u5217"},null,8,Lt)):b("",!0),e.clone?(i(),h("i",{key:1,class:"icon-clone",onClick:M(D=>n.click("clone",T,r),["stop"]),title:"\u514B\u9686"},null,8,Ot)):b("",!0),N("i",{class:"icon-del",onClick:M(D=>n.click("del",T),["stop"])},null,8,At)]),Pt])):b("",!0),e.type===4?(i(),h("div",It,O(r.name),1)):b("",!0)],14,kt)),[[Ae,n.linksShow(r)]]):b("",!0)]),_:1},16,["modelValue","onAdd"])}var Nt=B(vt,[["render",Rt]]);const zt={name:"formIndex",components:{formGroup:Nt},props:{formData:Object,type:{type:Number,default:1},isEdit:{type:Boolean,default:!1},disabled:Boolean},setup(e){let l=0,t="";const n=o=>{if(e.formData&&e.formData.list){const u=e.formData.config.name;t=`get${u}ControlByName`,u&&(!window[t]||!o)&&(window[t]=c=>{for(let r=0;r<e.formData.list.length;r++)if(e.formData.list[r].name===c)return e.formData.list[r]})}};U(()=>e.formData,()=>{l<2&&n(),l++,a(!0)},{deep:!0}),n();const d=G(()=>{const o={};return e.formData&&e.formData.list&&m(e.formData.list,o),o}),m=(o,u)=>{o.forEach(c=>{c.type==="table"?u[c.name]=c.tableData:c.type==="grid"||c.type==="tabs"?c.columns.forEach(r=>{m(r.list,u)}):c.type==="card"?m(c.list,u):["title"].indexOf(c.type)===-1&&(u[c.name]=c.control.modelValue)})};H("DFStatusType",{type:e.type,isEdit:e.isEdit}),H("DFFormModel",d);const _=j([]);U(()=>e.formData,o=>{_.value=o.config.rulesComm}),H("DFFormRulesComm",_);const E=j(),S=o=>{E.value.validate(u=>{o(u)})},k=o=>{if(o){const u={};for(const c in d.value)if(d.value.hasOwnProperty(c)){const r=d.value[c];r!==""&&r&&r.length>0&&(u[c]=r)}return u}else return d.value},C=j();H("DFSetFormValue",C);const v=o=>{C.value=o},L=j();H("DFSetFormOptions",L);const s=o=>{L.value=o},a=o=>{const{config:u={},style:c}=e.formData,r=document.getElementById(u.name+"Style");if(r&&o){r.innerText=c;return}if(c&&o){const T=document.createElement("style");T.id=u&&u.name+"Style",T.appendChild(document.createTextNode(c)),document.head.appendChild(T)}o||r&&r.parentNode.removeChild(r)};return W(()=>{Ie(()=>{a(!0)})}),Re(()=>{t&&(window[t]=""),a()}),{model:d,validate:S,ruleForm:E,getValue:k,setValue:v,setOptions:s,setWindowEvent:n}}};function Ut(e,l,t,n,d,m){const _=f("form-group"),E=f("el-form");return i(),g(E,V(t.formData.config,{ref:"ruleForm",model:n.model,disabled:t.disabled||t.type===2,class:["add-form",{"design-form":t.type===4,"detail-form":t.type===3||t.type===2}]}),{default:y(()=>[w(_,{data:t.formData},null,8,["data"]),K(e.$slots,"default")]),_:3},16,["model","disabled","class"])}var me=B(zt,[["render",Ut]]);const jt={name:"tableList",props:{searchData:Object,tableData:Object,beforeRequest:Function,afterResponse:Function,showPage:{type:Boolean,default:!0},autoLoad:{type:Boolean,default:!0},requestUrl:Function,tableList:Array},components:{designForm:me,Tooltip:Z},setup(e){const l=Ne(),t=j(),n=j(),d=ee({loading:!1,tableDataList:e.tableList,currentPage:1,pageSize:20,total:0}),m=()=>{if(d.loading)return;d.loading=!0;let k=t.value&&t.value.getValue(!0);e.beforeRequest&&(k=e.beforeRequest(k||{})),e.requestUrl&&e.requestUrl(l.query.formName,k).then(C=>{let v=C.data.data;e.afterResponse&&(v=e.afterResponse(v)),d.tableDataList=v,d.loading=!1}).catch(C=>{d.loading=!1}),d.loading=!1},_=()=>{t.value.ruleForm.resetFields(),t.value.setValue(t.value.getValue())},E=k=>{d.pageSize=k,m()},S=k=>{d.currentPage=k,m()};return W(()=>{e.autoLoad&&m()}),Y(J({},te(d)),{handleSizeChange:E,handleCurrentChange:S,getListData:m,searchClear:_,designForm:t,tableEl:n})}},xt={class:"table-list-comm"},Bt={key:0,class:"table-search"},Mt=A("\u67E5\u8BE2 "),qt=A("\u6E05\u7A7A"),Ht={class:"table-main"},Kt={key:1,class:"table-page"};function Jt(e,l,t,n,d,m){const _=f("el-button"),E=f("design-form"),S=f("Tooltip"),k=f("el-table-column"),C=f("el-table"),v=f("el-pagination"),L=ze("loading");return re((i(),h("div",xt,[Object.keys(t.searchData).length>0?(i(),h("div",Bt,[w(E,{disabled:e.loading,"form-data":t.searchData,ref:"designForm"},{default:y(()=>[K(e.$slots,"DFSearchForm"),e.$slots.DFSearchForm?b("",!0):(i(),h(R,{key:0},[w(_,{type:"primary",onClick:n.getListData,loading:e.loading},{default:y(()=>[Mt]),_:1},8,["onClick","loading"]),w(_,{onClick:n.searchClear},{default:y(()=>[qt]),_:1},8,["onClick"])],64))]),_:3},8,["disabled","form-data"])])):b("",!0),K(e.$slots,"default"),N("div",Ht,[K(e.$slots,"DFTable"),e.$slots.DFTable?b("",!0):(i(),g(C,V({key:0,data:e.tableDataList},t.tableData.config,{ref:"tableEl"}),{default:y(()=>[(i(!0),h(R,null,x(t.tableData.columns,s=>(i(),g(k,de(V({key:s.prop||s.label},s)),q({_:2},[s.help?{name:"header",fn:y(a=>[A(O(a.column.label)+" ",1),w(S,{content:s.help},null,8,["content"])])}:void 0,e.$slots[s.prop]?{name:"default",fn:y(a=>[K(e.$slots,s.prop,{row:a.row,$index:a.$index})])}:void 0]),1040))),128))]),_:3},16,["data"]))]),t.showPage?(i(),h("div",Kt,[w(v,{currentPage:e.currentPage,"onUpdate:currentPage":l[0]||(l[0]=s=>e.currentPage=s),"page-sizes":[20,30,40,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:n.handleSizeChange,onCurrentChange:n.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])])):b("",!0)])),[[L,e.loading]])}var Gt=B(jt,[["render",Jt]]),Wt=e=>{e.component("akFormDesign",me),e.component("akTableList",Gt)};Ue(qe).use(je).use(Je).use(We).use(Wt).mount("#app");export{B as _,tn as a,Yt as b,on as c,me as d,nn as e,ln as f,$t as g,en as h,an as i,Xt as s,Gt as t};