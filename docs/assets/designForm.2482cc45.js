var de=Object.defineProperty,ue=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var oe=(c,i,p)=>i in c?de(c,i,{enumerable:!0,configurable:!0,writable:!0,value:p}):c[i]=p,J=(c,i)=>{for(var p in i||(i={}))fe.call(i,p)&&oe(c,p,i[p]);if(ae)for(var p of ae(i))pe.call(i,p)&&oe(c,p,i[p]);return c},M=(c,i)=>ue(c,me(i));import{h as he,v as be,a as ge}from"./vueFile.28a3c312.js";import{G as ve,n as $,j as W,p as ee,r as v,o as s,x as g,F as L,A,h as S,v as X,a as t,w as o,K as te,c as y,s as x,z as O,H as se,S as ce,l as ye,q as _e,i as ne,Q as De,U as Ve,I as ke,C as K,P as Ce}from"./vendor.f9fdd043.js";import{_ as le,a as we,d as Se,b as Ue,s as Ne}from"./index.472ba73a.js";import{o as B,l as Y,s as re}from"./index.6c162138.js";const Z=[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],G={type:"fixed",source:0,request:"get",sourceFun:""};var ie=[{title:"\u57FA\u7840\u5B57\u6BB5",children:[{type:"input",label:"\u5355\u884C\u6587\u672C",icon:"input",control:{modelValue:""},config:{}},{type:"textarea",label:"\u591A\u884C\u6587\u672C",icon:"textarea",control:{modelValue:""},config:{}},{type:"radio",label:"\u5355\u9009\u6846\u7EC4",icon:"radio",control:{modelValue:""},options:Z,config:G},{type:"checkbox",label:"\u591A\u9009\u6846\u7EC4",icon:"checkbox",control:{modelValue:[]},options:Z,config:G},{type:"select",label:"\u4E0B\u62C9\u9009\u62E9\u6846",icon:"select",control:{modelValue:[],appendToBody:!0},options:Z,config:G},{type:"datePicker",label:"\u65E5\u671F\u9009\u62E9\u5668",icon:"date",control:{modelValue:"",type:"date"},config:{}},{type:"timePicker",label:"\u65F6\u95F4\u9009\u62E9\u5668",icon:"time",control:{modelValue:""},config:{}},{type:"colorPicker",label:"\u53D6\u8272\u5668",icon:"color",control:{modelValue:""},config:{}},{type:"switch",label:"\u5F00\u5173",icon:"switch",control:{modelValue:!1},config:{}},{type:"number",label:"\u8BA1\u6570\u5668",icon:"number",control:{modelValue:""},config:{}},{type:"cascader",label:"\u7EA7\u8054\u9009\u62E9\u5668",icon:"cascader",control:{modelValue:[]},options:[],config:G},{type:"rate",label:"\u8BC4\u5206",icon:"rate",control:{modelValue:""},config:{}},{type:"slider",label:"\u6ED1\u5757",icon:"slider",control:{modelValue:""},config:{}},{type:"txt",label:"\u6587\u5B57",icon:"text",control:{modelValue:""},config:{}},{type:"title",label:"\u6807\u9898",icon:"title",control:{modelValue:"\u6807\u9898"},config:{}}]},{title:"\u9AD8\u7EA7\u5B57\u6BB5",children:[{type:"table",label:"\u5B50\u8868",icon:"table",list:[],tableData:[],control:{border:!0},config:{}},{type:"component",label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",icon:"component",control:{modelValue:""},config:{}},{type:"upload",label:"\u56FE\u7247/\u6587\u4EF6",icon:"image",control:{modelValue:[]},config:{}},{type:"tinymce",label:"tinymce\u5BCC\u6587\u672C",icon:"tinymce",control:{modelValue:""},config:{}}]},{title:"\u5E03\u5C40\u5B57\u6BB5",children:[{type:"grid",label:"\u683C\u6805\u5E03\u5C40",icon:"grid",columns:[{attr:{span:12},list:[]},{attr:{span:12},list:[]}],control:{},config:{}},{type:"tabs",label:"\u6807\u7B7E\u9875",icon:"tabs",columns:[{label:"Tab1",list:[]}],control:{},config:{}},{type:"card",label:"\u5361\u7247\u5E03\u5C40",icon:"card",list:[],control:{},config:{},item:{}},{type:"divider",label:"\u5206\u5272\u7EBF",icon:"divider",control:{},config:{}}]}];const xe={name:"formControl",props:{formData:Object,searchData:Object,searchDesign:Boolean},components:{Draggable:ve},setup(c){const i=$({selectValue:[]}),p=W(()=>c.searchDesign?ie.slice(0,1):ie),l=(b,f)=>{if(f){const u=JSON.parse(JSON.stringify(b));u.rules=[],u.customRules=[],c.searchData.list.push(u)}else c.searchData.list.forEach((u,_)=>{u.name===b.name&&c.searchData.list.splice(_,1)})},n=b=>{let f=!1;return c.searchData.list.forEach(u=>{u.name===b&&(f=!0)}),f},V=W(()=>{const b=[];return k(c.formData,b),b}),r=["txt","title","table","component","upload"],k=(b,f)=>{b.forEach(u=>{u.type==="grid"||u.type==="tabs"?u.columns.forEach(_=>{k(_.list,f)}):u.type==="card"?k(u.list,f):r.indexOf(u.type)===-1&&f.push(u)})};return M(J({controlList:p,selectChange:l,getCheckbox:n},ee(i)),{formDataList:V})}},Oe={class:"components-list"},Le={class:"title"},Fe=["title"],Pe={key:0},Re=S("div",{class:"title"},"\u5DF2\u6709\u8868\u5355\u5B57\u6BB5",-1),Te={class:"content"};function Ae(c,i,p,l,n,V){const r=v("draggable"),k=v("el-checkbox");return s(),g("div",Oe,[(s(!0),g(L,null,A(l.controlList,(b,f)=>(s(),g("div",{key:f},[S("div",Le,X(b.title),1),t(r,{itemKey:"key123",tag:"ul",modelValue:b.children,"onUpdate:modelValue":u=>b.children=u,group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1},{item:o(({element:u})=>[S("li",{class:te([u.type])},[S("i",{class:te(`icon-${u.icon}`)},null,2),S("span",{title:u.label},X(u.label),9,Fe)],2)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128)),p.searchDesign?(s(),g("div",Pe,[Re,S("div",Te,[(s(!0),g(L,null,A(l.formDataList,b=>(s(),y(k,{key:b.name,checked:l.getCheckbox(b.name),onChange:f=>l.selectChange(b,f)},{default:o(()=>[x(X(b.item.label),1)]),_:2},1032,["checked","onChange"]))),128))])])):O("",!0)])}var qe=le(xe,[["render",Ae]]);const Ee={name:"formControlAttr",components:{},props:{formConfig:Object,linkageValue:Object,formStyle:String},emits:["openDialog","update:formStyle"],setup(c,{emit:i}){const p=se(),l=ce(),n=l.query.formName,V=$({formAttr:[{label:"\u8868\u5355\u540D\u79F0",value:"name"},{label:"\u8868\u5355\u6807\u7B7E\u5BBD\u5EA6",value:"labelWidth"},{label:"\u8868\u5355\u6837\u5F0F\u540D\u79F0",value:"class"},{label:"\u7EC4\u4EF6\u5C3A\u5BF8",value:"size",type:"select",options:[{label:"large",value:"large"},{label:"default",value:"default"},{label:"small",value:"small"}]}],dataSourceList:{},customRulesList:[{type:"required",label:"\u5FC5\u586B"},{type:"mobile",label:"\u624B\u673A\u53F7\u7801"},{type:"tel",label:"\u56FA\u8BDD"},{type:"phone",label:"\u56FA\u8BDD\u6216\u624B\u673A"},{type:"email",label:"\u90AE\u7BB1"},{type:"int",label:"\u6B63\u6574\u6570"},{type:"number",label:"\u6570\u5B57"},{type:"card",label:"\u8EAB\u4EFD\u8BC1"},{type:"rules",label:"\u81EA\u5B9A\u4E49\u6B63\u5219"},{type:"methods",label:"\u81EA\u5B9A\u4E49\u65B9\u6CD5"}],searchDesign:l.query.type==="search",attrList:[]});n&&we(n).then(a=>{a.data.code===200&&a.data.data.forEach(h=>{V.dataSourceList[h.label||h.value]=h.value}),V.loading=!1}).catch(a=>{console.log(a)});const r=W(()=>p.state.form.controlAttr);ye(()=>r.value,a=>{Object.keys(a).length>0?k():V.attrList=[]});const k=()=>{const{control:a={},className:h="",type:w,name:H,config:C={},item:E={},attr:j={}}=r.value;let I=!1,z=!1;if(w==="table"){const R=r.value&&r.value.list;R&&R.length>0&&(I=R[0].typeColumn==="index"),R&&R.length>0&&(z=R[R.length-1].typeColumn==="operate")}V.attrList=[{label:"\u81EA\u5B9A\u4E49Class",value:h,placeholder:"\u6837\u5F0F\u7C7B\u540D",path:"className"},{label:"\u5B57\u6BB5\u6807\u8BC6",value:H,type:Object.keys(V.dataSourceList).length>0?"select":"text",placeholder:"\u5B57\u6BB5\u552F\u4E00\u6807\u8BC6\uFF0C\u5BF9\u5E94\u6570\u636E\u5E93",dict:V.dataSourceList,path:"name",vHide:["grid","tabs","card","title","gridChild","tableColumn","divider"],eventName:"filedNameKey"},{label:"\u5360\u4F4D\u5185\u5BB9",value:a.placeholder,placeholder:"placeholder",path:"control.placeholder",vShow:["input","textarea","select","date","number","datePicker","tinymce","timePicker"]},{label:"label\u503C",value:E.label,path:"item.label",vHide:["table","grid","tabs","title","gridChild"]},{label:"\u9690\u85CFlabel",value:E.showLabel,path:"item.showLabel",type:"switch",vHide:["table","grid","tabs","title","gridChild","divider","card"]},{label:"\u5E2E\u52A9\u4FE1\u606F",value:C.help,path:"config.help",vHide:["table","grid","tabs","title","gridChild","divider"]},{label:"\u8868\u5355\u6805\u683C",value:C.span,placeholder:"\u8868\u5355\u533A\u57DF\u6805\u683C\u5BBD",path:"config.span",vHide:["table","grid","gridChild","divider"]},{label:"\u6587\u672C\u503C",value:a.modelValue,placeholder:"\u652F\u6301html",path:"control.modelValue",vShow:["txt"],inputStyle:"textarea"},{label:"\u8BBE\u4E3A\u5BC6\u7801",value:w,type:"select",dict:{\u6587\u672C:"input",\u5BC6\u7801:"password"},path:"type",vShow:["input","password"]},{label:"\u6587\u672C\u57DF\u9AD8\u5EA6",value:a.rows,placeholder:"\u8F93\u5165\u6846\u884C\u6570",path:"control.rows",vShow:["textarea"]},{label:"\u524D\u7F00",value:C.prepend,placeholder:"\u6587\u672C\u524D\u7F00",path:"config.prepend",vShow:["input"]},{label:"\u540E\u7F00",value:C.append,placeholder:"\u6587\u672C\u540E\u7F00",path:"config.append",vShow:["input"]},{label:"\u662F\u5426\u591A\u9009",value:a.multiple,path:"control.multiple",type:"switch",vShow:["select"],eventName:"selectMultiple"},{label:"\u662F\u5426\u7981\u7528",value:a.disabled,path:"control.disabled",type:"switch",vShow:["input","textarea","radio","checkbox","select","date","switch","number","cascader","upload","rate","tinymce"]},{label:"\u662F\u5426\u7981\u7528\u7F16\u8F91",value:C.editDisabled,path:"config.editDisabled",type:"switch",vShow:["input","textarea","radio","checkbox","select","date","switch","number","cascader","upload"]},{label:"\u6DFB\u52A0\u9875\u9690\u85CF",value:C.disabledAdd,path:"config.disabledAdd",type:"switch"},{label:"\u7F16\u8F91\u9875\u9690\u85CF",value:C.disabledEdit,path:"config.disabledEdit",type:"switch"},{label:"\u8BE6\u60C5\u9875\u9690\u85CF",value:C.disabledDetail,path:"config.disabledDetail",type:"switch"},{label:"\u6807\u9898",value:a.modelValue,path:"control.modelValue",vShow:["title"]},{label:"\u5360\u636E\u7684\u5217\u6570span",value:j.span,path:"attr.span",vShow:["gridChild"],eventName:"formatNumber"},{label:"\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570offset",value:j.offset,path:"attr.offset",vShow:["gridChild"],eventName:"formatNumber"},{label:"\u5411\u53F3\u79FB\u52A8\u683C\u6570push",value:j.push,path:"attr.push",vShow:["gridChild"],eventName:"formatNumber"},{label:"\u5411\u5DE6\u79FB\u52A8\u683C\u6570pull",value:j.pull,path:"attr.pull",vShow:["gridChild"],eventName:"formatNumber"},{label:"\u5E8F\u53F7\u5217",value:I,type:"switch",vShow:["table"],eventName:"tableColumn1"},{label:"\u64CD\u4F5C\u5217",value:z,type:"switch",vShow:["table"],eventName:"tableColumn2"},{label:"\u7EC4\u4EF6\u540D",value:C.template,placeholder:"import\u8FDB\u6765\u7684\u7EC4\u4EF6\u540D\u79F0",path:"config.template",vShow:["component"]},{label:"\u4E0A\u4F20\u5730\u5740",value:a.action,placeholder:"\u56FE\u7247/\u6587\u4EF6\u4E0A\u4F20\u5730\u5740",path:"control.action",vShow:["upload"]},{label:"\u6587\u4EF6\u5B57\u6BB5\u540D",value:a.name,placeholder:"\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D",path:"control.name",vShow:["upload"]},{label:"\u5217\u8868\u7C7B\u578B",value:a.listType,type:"select",dict:{text:"text",picture:"picture","picture-card":"picture-card"},path:"control.listType",vShow:["upload"]},{label:"\u63D0\u793A\u6587\u5B57",value:C.tip,placeholder:"\u63D0\u793A\u8BF4\u660E\u6587\u5B57",path:"config.tip",vShow:["upload"]},{label:"\u6309\u94AE\u6587\u672C",value:C.btnText,placeholder:"\u4E0A\u4F20\u6309\u94AE\u6587\u672C",path:"config.btnText",vShow:["upload"]},{label:"direction",type:"select",dict:{horizontal:"horizontal",vertical:"vertical"},value:a.direction,path:"control.direction",vShow:["divider"]},{label:"border-style",value:a.borderStyle,path:"control.borderStyle",vShow:["divider"]},{label:"content-position",type:"select",dict:{left:"left",right:"right",center:"center"},value:a.contentPosition,path:"control.contentPosition",vShow:["divider"]},{label:"\u6700\u5C0F\u503C",value:a.min,path:"control.min",vShow:["slider"],eventName:"formatNumber"},{label:"\u6700\u5927\u503C",value:a.max,path:"control.max",vShow:["rate","slider"],eventName:"formatNumber"},{label:"\u6B65\u957F",value:a.step,path:"control.step",vShow:["slider"],eventName:"formatNumber"},{label:"type",value:a.type,path:"control.type",vShow:["datePicker"],type:"select",placeholder:"\u663E\u793A\u7C7B\u578B",dict:{year:"year",month:"month",date:"date",dates:"dates",datetime:"datetime",week:"week",datetimerange:"datetimerange",daterange:"daterange",monthrange:"monthrange"}},{label:"format",value:a.format,path:"control.format",vShow:["datePicker","timePicker"],placeholder:"\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F"},{label:"color-format",value:a.colorFormat,path:"control.colorFormat",type:"select",placeholder:"\u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F",dict:{hsl:"hsl",hsv:"hsv",hex:"hex",rgb:"rgb"},vShow:["colorPicker"]},{label:"\u6587\u672C\u9AD8\u5EA6",value:a.height,path:"control.height",placeholder:"\u6587\u672C\u9AD8\u5EA6(\u9884\u89C8\u67E5\u770B\u6548\u679C)",vShow:["tinymce"]},{label:"\u6587\u672C\u5BBD\u5EA6",value:a.width,path:"control.width",placeholder:"\u6587\u672C\u5BBD\u5EA6(\u9884\u89C8\u67E5\u770B\u6548\u679C)",vShow:["tinymce"]},{label:"\u663E\u793A\u6A21\u5F0F",value:C.style,path:"config.style",placeholder:"\u663E\u793A\u98CE\u683C(\u9884\u89C8\u67E5\u770B\u6548\u679C)",type:"select",dict:{default:"default",simple:"simple"},vShow:["tinymce"]}],V.attrList=V.attrList.filter(R=>{let Q=!0;return R.vShow&&(Q=R.vShow.indexOf(w)!==-1),R.vHide&&(Q=R.vHide.indexOf(w)===-1),Q})},b=(a,h)=>{switch(a.eventName){case"selectMultiple":h?r.value.control.modelValue=[]:r.value.control.modelValue="";break;case"tableColumn1":m(h);break;case"tableColumn2":m(h,1);break;case"formatNumber":h=parseInt(h);break;case"filedNameKey":for(const w in V.dataSourceList)if(V.dataSourceList[w]===h){r.value.item.label=w;return}break}a.path&&f(r.value,a.path,h)},f=(a,h,w)=>{let H=a;const C=h.split(".");let E=0;for(E;E<C.length-1;E++){const z=C[E];if(z in H)H=H[z];else throw new Error(`${z} is undefined`)}const j=C[E],I=H[C[E]];return w!==void 0&&(H[j]=w),{obj:H,key:j,value:I}},u=(a,h)=>{h==="tabs"?r.value.columns.splice(a,1):r.value.options.splice(a,1)},_=a=>{r.value.type==="cascader"?U():a==="tabs"?r.value.columns.push({label:"\u6807\u7B7E\u540D\u79F0",list:[]}):r.value.options.push({label:"",value:""})},U=()=>{let a=r.value.control;r.value.type==="cascader"&&(a=r.value.options),i("openDialog",a,h=>{r.value.type==="cascader"?r.value.options=h:(r.value.control={},Object.assign(r.value.control,h))})},T=a=>{a?r.value.rules.push({required:!0,message:"\u5FC5\u586B\u9879",trigger:"change"}):r.value.rules.splice(0,1)},q=()=>{i("openDialog",r.value.rules,a=>{Object.assign(r.value.rules,a)})},F=(a,h)=>{if(a&&a.length===0||Object.keys(r.value).length===0)return!1;const w=a.indexOf(r.value.type);return h?w!==-1:w===-1},m=(a,h)=>{const w={name:"",type:"tableColumn",typeColumn:h?"operate":"index",item:{label:h?"\u64CD\u4F5C":"\u5E8F\u53F7"},control:{type:h?"":"index"},config:{}};a?h?r.value.list.push(w):r.value.list.unshift(w):h?r.value.list.splice(r.value.list.length-1,1):r.value.list.splice(0,1)},D=W(()=>{const a=r.value&&r.value.rules;return a&&a.length>0}),N=()=>{r.value.customRules&&r.value.customRules.push({type:"required",message:"",trigger:"blur"})},e=a=>{r.value.customRules&&r.value.customRules.splice(a,1)},P=()=>{i("openDialog",c.formConfig.rulesComm,a=>{Object.assign(c.formConfig.rulesComm,a)})},d=()=>{i("openDialog",c.formStyle||"",a=>{i("update:formStyle",a)},"css")};return M(J({},ee(V)),{controlData:r,delSelectOption:u,addSelectOption:_,openAttrDialog:U,requiredChange:T,addRules:q,showHide:F,tableColumnAdd:m,checkboxRequired:D,addRulesFast:N,delAddRules:e,rulesCommClick:P,editFormStyle:d,controlChange:b})}},He={class:"sidebar-tools"},je=S("h3",null,"\u901A\u7528\u5C5E\u6027",-1),ze=x("="),Be=S("h3",null,"\u6807\u7B7E\u914D\u7F6E\u9879",-1),Ke=["onClick"],Ie=x("\u589E\u52A0\u6807\u7B7E"),Je={key:2},Me=S("h3",null,"\u9009\u9879\u914D\u7F6E",-1),Ge={key:0},We=["onClick"],Qe=x("\u65B0\u589E"),Xe=x("\u6570\u636E\u6E90"),Ye=x("\u65B9\u6CD5\u51FD\u6570"),Ze=S("h3",null,"\u6821\u9A8C\u8BBE\u7F6E",-1),$e={key:0},el=x("\u5FEB\u901F\u6DFB\u52A0"),ll=x("\u7F16\u8F91\u6821\u9A8C\u89C4\u5219"),al=x("\u5FC5\u586B "),ol={key:4},tl=S("h3",null,"\u5176\u4ED6\u5C5E\u6027",-1),nl=x("\u6DFB\u52A0\u5C5E\u6027"),rl=x("\u7F16\u8F91\u5168\u5C40\u6821\u9A8C\u89C4\u5219"),il=x("\u7F16\u8F91\u8868\u5355\u6837\u5F0F");function sl(c,i,p,l,n,V){const r=v("el-option"),k=v("el-select"),b=v("el-switch"),f=v("el-input"),u=v("el-form-item"),_=v("el-col"),U=v("el-button"),T=v("el-tab-pane"),q=v("el-radio"),F=v("el-radio-group"),m=v("el-tabs"),D=v("el-checkbox"),N=v("el-form");return s(),g("div",He,[t(m,{modelValue:"first"},{default:o(()=>[t(T,{label:"\u5B57\u6BB5\u5C5E\u6027",name:"first"},{default:o(()=>[t(N,{size:"small",class:"form"},{default:o(()=>[je,(s(!0),g(L,null,A(c.attrList,(e,P)=>(s(),y(u,{key:P,label:e.label},{default:o(()=>[e.type==="select"?(s(),y(k,{key:0,placeholder:e.placeholder,modelValue:e.value,"onUpdate:modelValue":d=>e.value=d,onChange:d=>l.controlChange(e,d)},{default:o(()=>[(s(!0),g(L,null,A(e.dict,(d,a)=>(s(),y(r,{key:d,value:d,label:a},null,8,["value","label"]))),128))]),_:2},1032,["placeholder","modelValue","onUpdate:modelValue","onChange"])):e.type==="switch"?(s(),y(b,{key:1,modelValue:e.value,"onUpdate:modelValue":d=>e.value=d,onChange:d=>l.controlChange(e,d)},null,8,["modelValue","onUpdate:modelValue","onChange"])):(s(),y(f,{key:2,type:e.inputStyle,modelValue:e.value,"onUpdate:modelValue":d=>e.value=d,placeholder:e.placeholder,onChange:d=>l.controlChange(e,d)},null,8,["type","modelValue","onUpdate:modelValue","placeholder","onChange"]))]),_:2},1032,["label"]))),128)),l.showHide(["input","textarea","radio","checkbox","select","date","switch","number","cascader"],!0)?(s(),y(u,{key:0,label:"\u8054\u52A8\u6761\u4EF6"},{default:o(()=>[t(_,{span:9},{default:o(()=>[t(f,{placeholder:"\u6807\u8BC6\u540D\u79F0",modelValue:l.controlData.config.linkKey,"onUpdate:modelValue":i[0]||(i[0]=e=>l.controlData.config.linkKey=e)},null,8,["modelValue"])]),_:1}),t(_,{span:2,offset:1},{default:o(()=>[ze]),_:1}),t(_,{span:9,offset:1},{default:o(()=>[t(f,{placeholder:"\u5173\u8054\u503C",modelValue:l.controlData.config.linkValue,"onUpdate:modelValue":i[1]||(i[1]=e=>l.controlData.config.linkValue=e)},null,8,["modelValue"])]),_:1})]),_:1})):O("",!0),l.showHide(["tabs"],!0)?(s(),g(L,{key:1},[Be,(s(!0),g(L,null,A(l.controlData.columns,(e,P)=>(s(),y(u,{key:e.label},{default:o(()=>[t(_,{span:12},{default:o(()=>[t(f,{placeholder:"\u6807\u7B7E\u914D\u7F6E\u9879",modelValue:e.label,"onUpdate:modelValue":d=>e.label=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(_,{span:2,offset:1},{default:o(()=>[S("i",{class:"icon-del",onClick:d=>l.delSelectOption(P,"tabs")},null,8,Ke)]),_:2},1024)]),_:2},1024))),128)),t(u,null,{default:o(()=>[t(U,{onClick:i[2]||(i[2]=e=>l.addSelectOption("tabs"))},{default:o(()=>[Ie]),_:1})]),_:1})],64)):O("",!0),l.showHide(["radio","select","checkbox","cascader"],!0)?(s(),g("div",Je,[Me,t(m,{modelValue:l.controlData.config.type,"onUpdate:modelValue":i[6]||(i[6]=e=>l.controlData.config.type=e)},{default:o(()=>[t(T,{label:"\u56FA\u5B9A\u9009\u9879",name:"fixed"},{default:o(()=>[l.controlData.type!=="cascader"?(s(),g("div",Ge,[(s(!0),g(L,null,A(l.controlData.options,(e,P)=>(s(),y(u,{key:P},{default:o(()=>[t(_,{span:10},{default:o(()=>[t(f,{placeholder:"\u9009\u9879\u6807\u7B7E",modelValue:e.label,"onUpdate:modelValue":d=>e.label=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(_,{span:10,offset:1},{default:o(()=>[t(f,{placeholder:"\u9009\u9879\u503C",modelValue:e.value,"onUpdate:modelValue":d=>e.value=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(_,{span:2,offset:1},{default:o(()=>[S("i",{class:"icon-del",onClick:d=>l.delSelectOption(P)},null,8,We)]),_:2},1024)]),_:2},1024))),128))])):O("",!0),t(u,null,{default:o(()=>[t(U,{onClick:l.addSelectOption},{default:o(()=>[Qe]),_:1},8,["onClick"])]),_:1})]),_:1}),t(T,{label:"\u52A8\u6001\u9009\u9879",name:"async"},{default:o(()=>[t(F,{modelValue:l.controlData.config.source,"onUpdate:modelValue":i[3]||(i[3]=e=>l.controlData.config.source=e)},{default:o(()=>[t(q,{label:0},{default:o(()=>[Xe]),_:1}),t(q,{label:1},{default:o(()=>[Ye]),_:1})]),_:1},8,["modelValue"]),t(u,null,{default:o(()=>[t(f,{modelValue:l.controlData.config.sourceFun,"onUpdate:modelValue":i[5]||(i[5]=e=>l.controlData.config.sourceFun=e),placeholder:l.controlData.config.source?"\u65B9\u6CD5\u51FD\u6570\u540D":"\u6570\u636E\u6E90\u63A5\u53E3URL"},_e({_:2},[l.controlData.config.source?void 0:{name:"prepend",fn:o(()=>[t(k,{modelValue:l.controlData.config.request,"onUpdate:modelValue":i[4]||(i[4]=e=>l.controlData.config.request=e),style:{width:"80px"}},{default:o(()=>[t(r,{label:"get",value:"get"}),t(r,{label:"post",value:"post"})]),_:1},8,["modelValue"])])}]),1032,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])):O("",!0),l.showHide(["txt","title","table","grid","tabs","card","switch","gridChild","tableColumn","divider"])&&!c.searchDesign?(s(),g(L,{key:3},[Ze,l.showHide(["input","password","component"],!0)?(s(),g("div",$e,[p.formConfig.rulesComm&&p.formConfig.rulesComm.length>0?(s(),y(u,{key:0},{default:o(()=>[t(k,{placeholder:"\u5FEB\u901F\u9009\u62E9",multiple:!0,modelValue:l.controlData.rulesComm,"onUpdate:modelValue":i[7]||(i[7]=e=>l.controlData.rulesComm=e)},{default:o(()=>[(s(!0),g(L,null,A(p.formConfig.rulesComm,e=>(s(),y(r,{label:e.message,value:e.key,key:e.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):O("",!0),(s(!0),g(L,null,A(l.controlData.customRules,(e,P)=>(s(),y(u,{key:e.type},{default:o(()=>[t(f,{modelValue:e.message,"onUpdate:modelValue":d=>e.message=d,placeholder:"\u6821\u9A8C\u63D0\u793A\u4FE1\u606F"},{prepend:o(()=>[t(k,{modelValue:e.type,"onUpdate:modelValue":d=>e.type=d,style:{width:"80px"}},{default:o(()=>[(s(!0),g(L,null,A(c.customRulesList,d=>(s(),y(r,{key:d.type,label:d.label,value:d.type},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),append:o(()=>[t(U,{icon:"icon-del",onClick:d=>l.delAddRules(P)},null,8,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e.type==="rules"?(s(),y(f,{key:0,placeholder:"\u6B63\u5219\u8868\u8FBE\u5F0F",modelValue:e.rules,"onUpdate:modelValue":d=>e.rules=d},null,8,["modelValue","onUpdate:modelValue"])):O("",!0),e.type==="methods"?(s(),y(f,{key:1,placeholder:"\u65B9\u6CD5\u540D\u79F0",modelValue:e.methods,"onUpdate:modelValue":d=>e.methods=d},null,8,["modelValue","onUpdate:modelValue"])):O("",!0)]),_:2},1024))),128)),t(u,null,{default:o(()=>[t(U,{onClick:l.addRulesFast},{default:o(()=>[el]),_:1},8,["onClick"]),t(U,{onClick:l.addRules},{default:o(()=>[ll]),_:1},8,["onClick"])]),_:1})])):(s(),y(u,{key:1},{default:o(()=>[t(D,{modelValue:l.checkboxRequired,onChange:l.requiredChange},{default:o(()=>[al]),_:1},8,["modelValue","onChange"]),l.controlData.rules&&l.controlData.rules[0]?(s(),y(f,{key:0,placeholder:"\u81EA\u5B9A\u4E49\u5FC5\u586B\u9519\u8BEF\u63D0\u793A",modelValue:l.controlData.rules[0].message,"onUpdate:modelValue":i[8]||(i[8]=e=>l.controlData.rules[0].message=e)},null,8,["modelValue"])):O("",!0)]),_:1}))],64)):O("",!0),l.showHide(["grid","card","gridChild","divider"])?(s(),g("div",ol,[tl,t(U,{size:"small",onClick:l.openAttrDialog},{default:o(()=>[nl]),_:1},8,["onClick"])])):O("",!0)]),_:1})]),_:1}),t(T,{label:"\u8868\u5355\u5C5E\u6027",name:"second"},{default:o(()=>[t(N,{size:"small",class:"form"},{default:o(()=>[(s(!0),g(L,null,A(c.formAttr,(e,P)=>(s(),y(u,{label:e.label,key:P},{default:o(()=>[e.type==="select"?(s(),y(k,{key:0,modelValue:p.formConfig[e.value],"onUpdate:modelValue":d=>p.formConfig[e.value]=d},{default:o(()=>[(s(!0),g(L,null,A(e.options,d=>(s(),y(r,{label:d.label,key:d.label,value:d.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):(s(),y(f,{key:1,modelValue:p.formConfig[e.value],"onUpdate:modelValue":d=>p.formConfig[e.value]=d,placeholder:e.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"]))]),_:2},1032,["label"]))),128)),t(u,null,{default:o(()=>[t(U,{onClick:l.rulesCommClick},{default:o(()=>[rl]),_:1},8,["onClick"]),t(U,{onClick:l.editFormStyle},{default:o(()=>[il]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})])}var cl=le(Ee,[["render",sl]]);const dl={name:"designIndex",components:{headTools:he,formControl:qe,formDesign:Se,formControlAttr:cl,vueFile:be},setup(c,{emit:i}){const p=se(),l=ce().query,n=$({formData:{list:[],config:{labelWidth:"",class:"",size:"default",name:"form"+new Date().getTime(),rulesComm:[]}},visibleDialog:!1,sourceDialog:"",editor:{},loading:!1,drawerDirection:"rtl",formDataPreview:{},previewVisible:!1,searchDesign:l.type==="search",formDataList:[],editCodeType:""}),V=ne(),r=l.id,k=l.formName;if(r&&(n.loading=!0,Ue(r).then(m=>{if(m.data.code===200)if(n.searchDesign){const D=m.data.data[0].searchData;n.formData=D?B(D):[],n.formDataList=B(m.data.data[0].formData).list}else n.formData=B(m.data.data[0].formData);n.loading=!1}).catch(m=>{console.log(m),n.loading=!1})),!r&&!k){const m=Y();m&&(n.searchDesign?(m.searchData&&(n.formData=m.searchData),m.formData&&(n.formDataList=m.formData.list)):m.formData&&(n.formData=m.formData))}const b=m=>{switch(n.sourceDialog="",m){case"del":n.formData.list=[],n.formData.config.rulesComm=[],p.commit("setActiveKey",""),p.commit("setControlAttr",{});break;case"eye":n.previewVisible=!0;let D=B(n.formData);const N=n.formData.config.name,e=new RegExp(`get${N}ControlByName`,"g");D=D.replace(e,`getPreview${N}ControlByName`),n.formDataPreview=re(D),n.formDataPreview.config.name=`Preview${N}`;break;case"json":_(n.formData);break;case"save":u();break;case"vue":V.value.open(n.formData);break;case"import":_({});break}},f=()=>{try{const m=n.editor.getValue();let D=m;n.editCodeType!=="css"&&(D=re(m)),n.sourceDialog?n.sourceDialog(D):n.formData=D,n.visibleDialog=!1}catch(m){K.error(m.message)}},u=()=>{const m=B(n.formData),D=n.searchDesign?"searchData":"formData";if(!k)Y(D,n.formData),K.info("\u6570\u636E\u5DF2\u6682\u5B58\u5728localStorage");else{let N={formData:m,id:l.id,formName:n.formData.config.name,dataTableName:k};n.searchDesign&&(N={searchData:m,id:l.id}),n.loading=!0,Ne(N).then(e=>{e.data.code===200?K({message:"\u4FDD\u5B58\u6210\u529F\uFF01",type:"success"}):K.error(e.data.message),n.loading=!1}).catch(e=>{Y(D,n.formData),K.info("\u8BF7\u6C42\u5F02\u5E38\uFF0C\u6570\u636E\u5DF2\u6682\u5B58\u5728localStorage"),n.loading=!1})}p.commit("setActiveKey",""),p.commit("setControlAttr",{})},_=(m,D,N)=>{n.drawerDirection=D?"ltr":"rtl",n.sourceDialog=D,n.visibleDialog=!0,n.editCodeType=N;let e=B(m,!0);N==="css"&&(e=m),Ce(()=>{n.editor=ge(e,"",N)})},U=m=>{T(),m()},T=()=>{n.visibleDialog=!1,n.sourceDialog=""},q=ne(),F=()=>{q.value.validate(m=>{if(m)alert("\u6821\u9A8C\u901A\u8FC7");else return alert("\u6821\u9A8C\u4E0D\u901A\u8FC7"),!1})};return De(()=>{Object.keys(n.editor).length!==0&&(n.editor.destroy(),n.editor.container.remove())}),M(J({},ee(n)),{headToolClick:b,dialogConfirm:f,dialogOpen:_,drawerBeforeClose:U,dialogCancel:T,vueFileEl:V,previewForm:q,previewSubmit:F})}},ul={class:"container"},ml={class:"main-body"},fl={key:0,class:"empty-tips"},pl={class:"main-form"},hl={key:0,id:"editJson"},bl={class:"dialog-footer"},gl=x(" \u786E\u5B9A "),vl={class:"dialog-footer"},yl=x(" \u63D0\u4EA4 "),_l=x(" \u53D6\u6D88 ");function Dl(c,i,p,l,n,V){const r=v("formControl"),k=v("headTools"),b=v("form-design"),f=v("form-control-attr"),u=v("el-button"),_=v("el-drawer"),U=v("vue-File"),T=v("el-dialog"),q=Ve("loading");return s(),g("div",ul,[t(r,{formData:c.formDataList,searchData:c.formData,searchDesign:c.searchDesign},null,8,["formData","searchData","searchDesign"]),S("div",ml,[t(k,{onClick:l.headToolClick},null,8,["onClick"]),c.formData.list.length===0?(s(),g("div",fl," \u4ECE\u5DE6\u4FA7\u62D6\u62FD\u6765\u6DFB\u52A0\u5B57\u6BB5 ")):O("",!0),ke((s(),g("div",pl,[t(b,{"form-data":c.formData,type:4},null,8,["form-data"])])),[[q,c.loading]])]),t(f,{formStyle:c.formData.style,"onUpdate:formStyle":i[0]||(i[0]=F=>c.formData.style=F),formConfig:c.formData.config,onOpenDialog:l.dialogOpen},null,8,["formStyle","formConfig","onOpenDialog"]),t(_,{modelValue:c.visibleDialog,"onUpdate:modelValue":i[1]||(i[1]=F=>c.visibleDialog=F),size:"60%",direction:c.drawerDirection,"custom-class":"json-dialog","append-to-body":!0,"before-close":l.drawerBeforeClose},{default:o(()=>[c.visibleDialog?(s(),g("div",hl)):O("",!0),S("div",bl,[t(u,{type:"primary",size:"small",onClick:l.dialogConfirm},{default:o(()=>[gl]),_:1},8,["onClick"])])]),_:1},8,["modelValue","direction","before-close"]),c.searchDesign?O("",!0):(s(),y(U,{key:0,ref:"vueFileEl"},null,512)),t(T,{modelValue:c.previewVisible,"onUpdate:modelValue":i[3]||(i[3]=F=>c.previewVisible=F),title:"\u9884\u89C8",fullscreen:!0},{footer:o(()=>[S("div",vl,[t(u,{size:"small",type:"primary",onClick:l.previewSubmit},{default:o(()=>[yl]),_:1},8,["onClick"]),t(u,{size:"small",onClick:i[2]||(i[2]=F=>c.previewVisible=!1)},{default:o(()=>[_l]),_:1})])]),default:o(()=>[t(b,{"form-data":c.formDataPreview,type:1,ref:"previewForm"},null,8,["form-data"])]),_:1},8,["modelValue"])])}var Ul=le(dl,[["render",Dl]]);export{Ul as default};