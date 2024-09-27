(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3017],{50014:(e,t,a)=>{var r=a(15389),n=a(55765);e.exports=function(e,t){return e&&e.length?n(e,r(t,2)):[]}},18575:(e,t,a)=>{"use strict";t.w$=t.uv=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=l(a(96540)),i=l(a(5556)),s=a(11447);function l(e){return e&&e.__esModule?e:{default:e}}t.uv=function(e){var t=e.itemTypeToComponent,a=e.WrapperComponent,l=void 0===a?"div":a,o=function(e){var a=e.currentPage,i=e.totalPages,o=e.boundaryPagesRange,d=e.siblingPagesRange,c=e.hideEllipsis,u=e.hidePreviousAndNextPageLinks,h=e.hideFirstAndLastPageLinks,p=e.onChange,g=e.disabled,m=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),v=(0,s.getPaginationModel)({currentPage:a,totalPages:i,boundaryPagesRange:o,siblingPagesRange:d,hideEllipsis:c,hidePreviousAndNextPageLinks:u,hideFirstAndLastPageLinks:h}),b=function(e,t,a){return function(i){var s,l,o,d=e[i.type],c=(l=(s=i).value,o=s.isDisabled,function(){!o&&a&&t!==l&&a(l)});return n.default.createElement(d,r({onClick:c},i))}}(t,a,p);return n.default.createElement(l,m,v.map((function(e){return b(r({},e,{isDisabled:!!g}))})))};return o.propTypes={currentPage:i.default.number.isRequired,totalPages:i.default.number.isRequired,boundaryPagesRange:i.default.number,siblingPagesRange:i.default.number,hideEllipsis:i.default.bool,hidePreviousAndNextPageLinks:i.default.bool,hideFirstAndLastPageLinks:i.default.bool,onChange:i.default.func,disabled:i.default.bool},o},t.w$=s.ITEM_TYPES},47163:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var r=a(96540);const n=()=>{const[e,t]=(0,r.useState)(0),[a,n]=(0,r.useState)(!1),i=(0,r.useRef)(null),s=(0,r.useRef)(null);return(0,r.useLayoutEffect)((()=>{var e;const a=()=>{const e=i.current;if(!e)return;const a=s.current,{scrollWidth:r,clientWidth:l,childNodes:o}=e;if(r>l){const e=6,r=(null==a?void 0:a.offsetWidth)||0,i=l-e,s=o.length;let d=0,c=0;for(let e=0;e<s;e+=1)i-d-r<=0&&(c+=1),d+=o[e].offsetWidth;s>1&&c?(n(!0),t(c)):(n(!1),t(1))}else n(!1),t(0)},r=new ResizeObserver(a),l=null==(e=i.current)?void 0:e.parentElement;return l&&r.observe(l),a(),()=>{r.disconnect()}}),[s.current]),[i,s,e,a]}},12397:(e,t,a)=>{"use strict";a.d(t,{U:()=>l});var r=a(19129),n=a(25106),i=a(95579),s=a(2445);const l=({user:e,date:t})=>{const a=(0,s.Y)("span",{className:"no-wrap",children:t});if(e){const t=(0,n.A)(e),l=(0,i.t)("Modified by: %s",t);return(0,s.Y)(r.m,{title:l,placement:"bottom",children:a})}return a}},74354:(e,t,a)=>{"use strict";a.d(t,{A:()=>g});var r=a(96540),n=a(96453),i=a(95579),s=a(46920),l=a(85861),o=a(15595),d=a(50500),c=a(31383),u=a(2445);const h=n.I4.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,p=n.I4.div`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit}px;

  & > div {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({theme:e})=>3*e.gridUnit}px;
    }
  }
`,g=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:n,onModelImport:g,show:m,onHide:v,passwordFields:b=[],setPasswordFields:f=(()=>{}),sshTunnelPasswordFields:y=[],setSSHTunnelPasswordFields:_=(()=>{}),sshTunnelPrivateKeyFields:P=[],setSSHTunnelPrivateKeyFields:S=(()=>{}),sshTunnelPrivateKeyPasswordFields:E=[],setSSHTunnelPrivateKeyPasswordFields:w=(()=>{})})=>{const[T,A]=(0,r.useState)(!0),[I,N]=(0,r.useState)({}),[L,k]=(0,r.useState)(!1),[Y,F]=(0,r.useState)(!1),[x,M]=(0,r.useState)([]),[C,R]=(0,r.useState)(!1),[D,K]=(0,r.useState)(),[O,$]=(0,r.useState)({}),[H,G]=(0,r.useState)({}),[U,z]=(0,r.useState)({}),B=()=>{M([]),f([]),N({}),k(!1),F(!1),R(!1),K(""),_([]),S([]),w([]),$({}),G({}),z({})},{state:{alreadyExists:q,passwordsNeeded:V,sshPasswordNeeded:j,sshPrivateKeyNeeded:W,sshPrivateKeyPasswordNeeded:X},importResource:J}=(0,d.bN)(e,t,(e=>{K(e)}));(0,r.useEffect)((()=>{f(V),V.length>0&&R(!1)}),[V,f]),(0,r.useEffect)((()=>{k(q.length>0),q.length>0&&R(!1)}),[q,k]),(0,r.useEffect)((()=>{_(j),j.length>0&&R(!1)}),[j,_]),(0,r.useEffect)((()=>{S(W),W.length>0&&R(!1)}),[W,S]),(0,r.useEffect)((()=>{w(X),X.length>0&&R(!1)}),[X,w]);return T&&m&&A(!1),(0,u.FD)(l.A,{name:"model",className:"import-model-modal",disablePrimaryButton:0===x.length||L&&!Y||C,onHandledPrimaryAction:()=>{var e;(null==(e=x[0])?void 0:e.originFileObj)instanceof File&&(R(!0),J(x[0].originFileObj,I,O,H,U,Y).then((e=>{e&&(B(),g())})))},onHide:()=>{A(!0),v(),B()},primaryButtonName:L?(0,i.t)("Overwrite"):(0,i.t)("Import"),primaryButtonType:L?"danger":"primary",width:"750px",show:m,title:(0,u.Y)("h4",{children:(0,i.t)("Import %s",t)}),children:[(0,u.Y)(p,{children:(0,u.Y)(o._O,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:x,onChange:e=>{M([{...e.file,status:"done"}])},onRemove:e=>(M(x.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:C,children:(0,u.Y)(s.A,{loading:C,children:(0,i.t)("Select file")})})}),D&&(0,u.Y)(c.A,{errorMessage:D,showDbInstallInstructions:b.length>0||y.length>0||P.length>0||E.length>0}),(()=>{if(0===b.length&&0===y.length&&0===P.length&&0===E.length)return null;const e=[...new Set([...b,...y,...P,...E])];return(0,u.FD)(u.FK,{children:[(0,u.Y)("h5",{children:(0,i.t)("Database passwords")}),(0,u.Y)(h,{children:a}),e.map((e=>(0,u.FD)(u.FK,{children:[(null==b?void 0:b.indexOf(e))>=0&&(0,u.FD)(p,{children:[(0,u.FD)("div",{className:"control-label",children:[(0,i.t)("%s PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required",children:"*"})]}),(0,u.Y)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:I[e],onChange:t=>N({...I,[e]:t.target.value})})]},`password-for-${e}`),(null==y?void 0:y.indexOf(e))>=0&&(0,u.FD)(p,{children:[(0,u.FD)("div",{className:"control-label",children:[(0,i.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required",children:"*"})]}),(0,u.Y)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:O[e],onChange:t=>$({...O,[e]:t.target.value})})]},`ssh_tunnel_password-for-${e}`),(null==P?void 0:P.indexOf(e))>=0&&(0,u.FD)(p,{children:[(0,u.FD)("div",{className:"control-label",children:[(0,i.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,u.Y)("span",{className:"required",children:"*"})]}),(0,u.Y)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:H[e],onChange:t=>G({...H,[e]:t.target.value})})]},`ssh_tunnel_private_key-for-${e}`),(null==E?void 0:E.indexOf(e))>=0&&(0,u.FD)(p,{children:[(0,u.FD)("div",{className:"control-label",children:[(0,i.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required",children:"*"})]}),(0,u.Y)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:U[e],onChange:t=>z({...U,[e]:t.target.value})})]},`ssh_tunnel_private_key_password-for-${e}`)]})))]})})(),L?(0,u.Y)(u.FK,{children:(0,u.FD)(p,{children:[(0,u.Y)("div",{className:"confirm-overwrite",children:n}),(0,u.Y)("div",{className:"control-label",children:(0,i.t)('Type "%s" to confirm',(0,i.t)("OVERWRITE"))}),(0,u.Y)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const r=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";F(r.toUpperCase()===(0,i.t)("OVERWRITE"))}})]})}):null]})}},25143:(e,t,a)=>{"use strict";a.d(t,{S:()=>r.A});var r=a(46740);a(16707)},25062:(e,t,a)=>{"use strict";a.d(t,{J8:()=>g,Kg:()=>f,Pz:()=>y,pY:()=>p,px:()=>m,tg:()=>h});var r=a(96627),n=a(58863),i=a(27366),s=a(95579),l=a(88488),o=a(49588),d=a(81151),c=a(38708);const u=()=>{var e,t;const a=(0,c.A)();return(null==a||null==(e=a.common)||null==(t=e.conf)?void 0:t.NATIVE_FILTER_DEFAULT_ROW_LIMIT)||1e3},h=({datasetId:e,dependencies:t={},groupby:a,defaultDataMask:r,controlValues:n,filterType:i,sortMetric:s,adhoc_filters:o,time_range:d,granularity_sqla:c,type:h,dashboardId:p,id:g})=>{var m;const v={};return e&&(v.datasource=`${e}__table`),a&&(v.groupby=[a]),s&&(v.sortMetric=s),{...n,...v,adhoc_filters:null!=o?o:[],extra_filters:[],extra_form_data:t,granularity_sqla:c,metrics:["count"],row_limit:u(),showSearch:!0,defaultValue:null==r||null==(m=r.filterState)?void 0:m.value,time_range:d,url_params:(0,l.A)("regular"),inView:!0,viz_type:i,type:h,dashboardId:p,native_filter_id:g}};function p(e={},t={}){const a={};return r.t1.forEach((r=>{const n=[...e[r]||[],...t[r]||[]];n.length&&(a[r]=n)})),r.zk.forEach((r=>{const n=e[r];void 0!==n&&(a[r]=n);const i=t[r];void 0!==i&&(a[r]=i)})),a}function g(e,t){let a={};return t.forEach((t=>{var r,n;a=p(a,null!=(r=null==(n=e[t])?void 0:n.extraFormData)?r:{})})),a}function m(e){return!e.includes(n.nS.NativeFilter)||(0,i.G7)(i.TO.DashboardCrossFilters)&&e.includes(n.nS.InteractiveChart)}const v=(e,t)=>{var a;return(null==e||null==(a=e[t])?void 0:a.type)===o.B8},b=(e,t,a,r,n,i)=>{var s,l,d,c,u,h;i.has(a)||(i.add(a),(null==e||null==(s=e[a])?void 0:s.type)===o.oT&&t.includes(null==(l=e[a])||null==(d=l.meta)?void 0:d.chartId)&&r.forEach(n.add,n),0===(null==e||null==(c=e[a])||null==(u=c.children)?void 0:u.length)||v(e,a)&&n.has(a)||null==(h=e[a])||h.children.forEach((a=>b(e,t,a,v(e,a)?[...r,a]:r,n,i))))},f=(e,t)=>{const a=e[d.wv].children[0],r=a!==d.mK,n=new Set,i=new Set;var s,l;return r?null==(s=e[a])||null==(l=s.children)||l.forEach((a=>b(e,t,a,[a],n,i))):Object.values(e).filter((e=>(null==e?void 0:e.type)===o.B8)).forEach((a=>b(e,t,a.id,[a.id],n,i))),n},y=e=>null==e?"":"string"==typeof e||"number"==typeof e?`${e}`:Array.isArray(e)?e.join(", "):"object"==typeof e?JSON.stringify(e):(0,s.t)("Unknown value")},29646:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ae});var r=a(50014),n=a.n(r),i=a(96453),s=a(95579),l=a(80145),o=a(35742),d=a(27366),c=a(96540),u=a(58561),h=a.n(u),p=a(61225),g=a(30703),m=a(50500),v=a(4780),b=a(63358),f=a(25143),y=a(51713),_=a(94704),P=a(61574),S=a(71519),E=a(39854),w=a(17444),T=a(62221),A=a(5261),I=a(36446),N=a(74354),L=a(19129),k=a(12249),Y=a(25062),F=a(31641),x=a(58132),M=a(78532),C=a(3932),R=a(99748),D=a(46662),K=a(84666),O=a(62952),$=a(47163),H=a(2445);const G=i.I4.div`
  .link {
    color: ${({theme:e})=>e.colors.grayscale.light5};
    display: block;
    text-decoration: underline;
  }
`;function U({children:e,crossLinks:t=[],moreItems:a,show:r=!1}){return(0,H.Y)(L.m,{placement:"top",title:r&&(0,H.FD)(G,{children:[t.map((e=>(0,H.Y)(S.N_,{className:"link",to:e.to,target:"_blank",rel:"noreferer noopener",children:e.title},e.to))),a&&(0,H.Y)("span",{children:(0,s.t)("+ %s more",a)})]}),children:e})}const z=i.I4.div`
  ${({theme:e})=>`\n    & > span {\n      width: 100%;\n      display: flex;\n\n      .ant-tooltip-open {\n        display: inline;\n      }\n\n      .truncated {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        display: inline-block;\n        width: 100%;\n        vertical-align: bottom;\n      }\n\n      .count {\n        cursor: pointer;\n        color: ${e.colors.grayscale.base};\n        font-weight: ${e.typography.weights.bold};\n      }\n    }\n  `}
`;function B({crossLinks:e,maxLinks:t=20,linkPrefix:a="/superset/dashboard/"}){const[r,n,i,s]=(0,$.A)(),l=(0,c.useMemo)((()=>e.length>t?e.length-t:void 0),[e,t]),o=(0,c.useMemo)((()=>(0,H.Y)("span",{className:"truncated",ref:r,children:e.map(((e,t)=>(0,H.Y)(S.N_,{to:a+e.id,children:0===t?e.title:`, ${e.title}`},e.id)))})),[e,r,a]),d=(0,c.useMemo)((()=>e.slice(0,t).map((e=>({title:e.title,to:a+e.id})))),[e,a,t]);return(0,H.Y)(z,{children:(0,H.FD)(U,{moreItems:l,crossLinks:d,show:!!i,children:[o,s&&(0,H.FD)("span",{ref:n,className:"count",children:["+",i]})]})})}const q=(0,c.memo)(B),V=(0,c.memo)((({dashboards:e})=>{const t=(0,c.useMemo)((()=>(0,O.A)(e).map((e=>({title:e.dashboard_title,id:e.id})))),[e]);return(0,H.Y)(q,{crossLinks:t})}));var j=a(12397),W=a(23193);const X=i.I4.div`
  align-items: center;
  display: flex;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2;
  }

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,J=(0,s.t)('The passwords for the databases below are needed in order to import them together with the charts. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),Q=(0,s.t)("You are importing one or more charts that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),Z=(0,l.A)(),ee=async(e="",t,a)=>{var r;const i=e?{filters:[{col:"table_name",opr:"sw",value:e}]}:{},s=h().encode({columns:["datasource_name","datasource_id"],keys:["none"],order_column:"table_name",order_direction:"asc",page:t,page_size:a,...i}),{json:l={}}=await o.A.get({endpoint:`/api/v1/dataset/?q=${s}`}),d=null==l||null==(r=l.result)?void 0:r.map((({table_name:e,id:t})=>({label:e,value:t})));return{data:n()(d,"value"),totalCount:null==l?void 0:l.count}},te=i.I4.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,ae=(0,A.Ay)((function(e){const{addDangerToast:t,addSuccessToast:a,user:{userId:r}}=e,i=(0,P.W6)(),{state:{loading:l,resourceCount:u,resourceCollection:A,bulkSelectEnabled:O},setResourceCollection:$,hasPerm:G,fetchData:U,toggleBulkSelect:z,refreshData:B}=(0,m.RU)("chart",(0,s.t)("chart"),t),q=(0,c.useMemo)((()=>A.map((e=>e.id))),[A]),{roles:ae}=(0,p.d4)((e=>e.user)),re=(0,K.L)("can_read","Tag",ae),[ne,ie]=(0,m.oG)("chart",q,t),{sliceCurrentlyEditing:se,handleChartUpdated:le,openChartEditModal:oe,closeChartEditModal:de}=(0,m.bR)($,A),[ce,ue]=(0,c.useState)(!1),[he,pe]=(0,c.useState)([]),[ge,me]=(0,c.useState)(!1),[ve,be]=(0,c.useState)([]),[fe,ye]=(0,c.useState)([]),[_e,Pe]=(0,c.useState)([]),Se=(0,T.SX)(null==r?void 0:r.toString(),null),Ee=G("can_write"),we=G("can_write"),Te=G("can_write"),Ae=G("can_export"),Ie=[{id:"changed_on_delta_humanized",desc:!0}],Ne=e=>{const t=e.map((({id:e})=>e));(0,v.A)("chart",t,(()=>{me(!1)})),me(!0)},Le=async(e="",a,r)=>{var i,l,d;const c=e?{filters:[{col:"dashboard_title",opr:E.t.StartsWith,value:e}]}:{},u=h().encode({columns:["dashboard_title","id"],keys:["none"],order_column:"dashboard_title",order_direction:"asc",page:a,page_size:r,...c}),p=await o.A.get({endpoint:`/api/v1/dashboard/?q=${u}`}).catch((()=>t((0,s.t)("An error occurred while fetching dashboards")))),g=null==p||null==(i=p.json)||null==(l=i.result)?void 0:l.map((({dashboard_title:e,id:t})=>({label:e,value:t})));return{data:n()(g,"value"),totalCount:null==p||null==(d=p.json)?void 0:d.count}},ke=(0,c.useMemo)((()=>[{Cell:({row:{original:{id:e}}})=>r&&(0,H.Y)(_.A,{itemId:e,saveFaveStar:ne,isStarred:ie[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs",hidden:!r},{Cell:({row:{original:{url:e,slice_name:t,certified_by:a,certification_details:r,description:n}}})=>(0,H.FD)(X,{children:[(0,H.FD)(S.N_,{to:e,children:[a&&(0,H.FD)(H.FK,{children:[(0,H.Y)(x.A,{certifiedBy:a,details:r})," "]}),t]}),n&&(0,H.Y)(F.A,{tooltip:n})]}),Header:(0,s.t)("Name"),accessor:"slice_name"},{Cell:({row:{original:{viz_type:e}}})=>{var t;return(null==(t=Z.get(e))?void 0:t.name)||e},Header:(0,s.t)("Type"),accessor:"viz_type",size:"xxl"},{Cell:({row:{original:{datasource_name_text:e,datasource_url:t}}})=>(0,H.Y)(L.m,{title:e,placement:"top",children:(0,H.Y)(M.K,{to:t,children:null==e?void 0:e.split(".")[1]})}),Header:(0,s.t)("Dataset"),accessor:"datasource_id",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{dashboards:e}}})=>(0,H.Y)(V,{dashboards:e}),Header:(0,s.t)("On dashboards"),accessor:"dashboards",disableSortBy:!0,size:"xxl"},{Cell:({row:{original:{tags:e=[]}}})=>(0,H.Y)(f.S,{tags:e.filter((e=>!e.type||1===e.type||"TagTypes.custom"===e.type)),maxTags:3}),Header:(0,s.t)("Tags"),accessor:"tags",disableSortBy:!0,hidden:!(0,d.G7)(d.TO.TaggingSystem)},{Cell:({row:{original:{owners:e=[]}}})=>(0,H.Y)(R.A,{users:e}),Header:(0,s.t)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,H.Y)(j.U,{date:e,user:t}),Header:(0,s.t)("Last modified"),accessor:"last_saved_at",size:"xl"},{Cell:({row:{original:e}})=>we||Te||Ae?(0,H.FD)(te,{className:"actions",children:[Te&&(0,H.Y)(b.A,{title:(0,s.t)("Please confirm"),description:(0,H.FD)(H.FK,{children:[(0,s.t)("Are you sure you want to delete")," ",(0,H.Y)("b",{children:e.slice_name}),"?"]}),onConfirm:()=>(0,g.GP)(e,a,t,B),children:e=>(0,H.Y)(L.m,{id:"delete-action-tooltip",title:(0,s.t)("Delete"),placement:"bottom",children:(0,H.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e,children:(0,H.Y)(k.A.Trash,{})})})}),Ae&&(0,H.Y)(L.m,{id:"export-action-tooltip",title:(0,s.t)("Export"),placement:"bottom",children:(0,H.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Ne([e]),children:(0,H.Y)(k.A.Share,{})})}),we&&(0,H.Y)(L.m,{id:"edit-action-tooltip",title:(0,s.t)("Edit"),placement:"bottom",children:(0,H.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>oe(e),children:(0,H.Y)(k.A.EditAlt,{})})})]}):null,Header:(0,s.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!we&&!Te},{accessor:W.H.ChangedBy,hidden:!0}]),[r,we,Te,Ae,ne,ie,B,a,t]),Ye=(0,c.useMemo)((()=>({Header:(0,s.t)("Favorite"),key:"favorite",id:"id",urlDisplay:"favorite",input:"select",operator:E.t.ChartIsFav,unfilteredLabel:(0,s.t)("Any"),selects:[{label:(0,s.t)("Yes"),value:!0},{label:(0,s.t)("No"),value:!1}]})),[]),Fe=(0,c.useMemo)((()=>[{Header:(0,s.t)("Name"),key:"search",id:"slice_name",input:"search",operator:E.t.ChartAllText},{Header:(0,s.t)("Type"),key:"viz_type",id:"viz_type",input:"select",operator:E.t.Equals,unfilteredLabel:(0,s.t)("All"),selects:Z.keys().filter((e=>{var t;return(0,Y.px)((null==(t=Z.get(e))?void 0:t.behaviors)||[])})).map((e=>{var t;return{label:(null==(t=Z.get(e))?void 0:t.name)||e,value:e}})).sort(((e,t)=>e.label&&t.label?e.label>t.label?1:e.label<t.label?-1:0:0))},{Header:(0,s.t)("Dataset"),key:"dataset",id:"datasource_id",input:"select",operator:E.t.Equals,unfilteredLabel:(0,s.t)("All"),fetchSelects:ee,paginate:!0},...(0,d.G7)(d.TO.TaggingSystem)&&re?[{Header:(0,s.t)("Tag"),key:"tags",id:"tags",input:"select",operator:E.t.ChartTagById,unfilteredLabel:(0,s.t)("All"),fetchSelects:C.m}]:[],{Header:(0,s.t)("Owner"),key:"owner",id:"owners",input:"select",operator:E.t.RelationManyMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,g.u1)("chart","owners",(0,g.JF)((e=>t((0,s.t)("An error occurred while fetching chart owners values: %s",e)))),e.user),paginate:!0},{Header:(0,s.t)("Dashboard"),key:"dashboards",id:"dashboards",input:"select",operator:E.t.RelationManyMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:Le,paginate:!0},...r?[Ye]:[],{Header:(0,s.t)("Certified"),key:"certified",id:"id",urlDisplay:"certified",input:"select",operator:E.t.ChartIsCertified,unfilteredLabel:(0,s.t)("Any"),selects:[{label:(0,s.t)("Yes"),value:!0},{label:(0,s.t)("No"),value:!1}]},{Header:(0,s.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:E.t.RelationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,g.u1)("chart","changed_by",(0,g.JF)((e=>(0,s.t)("An error occurred while fetching dataset datasource values: %s",e))),e.user),paginate:!0}]),[t,Ye,e.user]),xe=[{desc:!1,id:"slice_name",label:(0,s.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,s.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,s.t)("Least recently modified"),value:"least_recently_modified"}],Me=(0,c.useCallback)((e=>(0,H.Y)(D.A,{chart:e,showThumbnails:Se?Se.thumbnails:(0,d.G7)(d.TO.Thumbnails),hasPerm:G,openChartEditModal:oe,bulkSelectEnabled:O,addDangerToast:t,addSuccessToast:a,refreshData:B,userId:r,loading:l,favoriteStatus:ie[e.id],saveFavoriteStatus:ne,handleBulkChartExport:Ne})),[t,a,O,ie,G,l]),Ce=[];return(Te||Ae)&&Ce.push({name:(0,s.t)("Bulk select"),buttonStyle:"secondary",onClick:z}),Ee&&(Ce.push({name:(0,H.FD)(H.FK,{children:[(0,H.Y)("i",{className:"fa fa-plus"})," ",(0,s.t)("Chart")]}),buttonStyle:"primary",onClick:()=>{i.push("/chart/add")}}),Ce.push({name:(0,H.Y)(L.m,{id:"import-tooltip",title:(0,s.t)("Import charts"),placement:"bottomRight",children:(0,H.Y)(k.A.Import,{})}),buttonStyle:"link",onClick:()=>{ue(!0)}})),(0,H.FD)(H.FK,{children:[(0,H.Y)(y.A,{name:(0,s.t)("Charts"),buttons:Ce}),se&&(0,H.Y)(I.A,{onHide:de,onSave:le,show:!0,slice:se}),(0,H.Y)(b.A,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected charts?"),onConfirm:function(e){o.A.delete({endpoint:`/api/v1/chart/?q=${h().encode(e.map((({id:e})=>e)))}`}).then((({json:e={}})=>{B(),a(e.message)}),(0,g.JF)((e=>t((0,s.t)("There was an issue deleting the selected charts: %s",e)))))},children:e=>{const r=[];return Te&&r.push({key:"delete",name:(0,s.t)("Delete"),type:"danger",onSelect:e}),Ae&&r.push({key:"export",name:(0,s.t)("Export"),type:"primary",onSelect:Ne}),(0,H.Y)(E.A,{bulkActions:r,bulkSelectEnabled:O,cardSortSelectOptions:xe,className:"chart-list-view",columns:ke,count:u,data:A,disableBulkSelect:z,refreshData:B,fetchData:U,filters:Fe,initialSort:Ie,loading:l,pageSize:25,renderCard:Me,enableBulkTag:!0,bulkTagResourceName:"chart",addSuccessToast:a,addDangerToast:t,showThumbnails:Se?Se.thumbnails:(0,d.G7)(d.TO.Thumbnails),defaultViewMode:(0,d.G7)(d.TO.ListviewsDefaultCardView)?"card":"table"})}}),(0,H.Y)(N.A,{resourceName:"chart",resourceLabel:(0,s.t)("chart"),passwordsNeededMessage:J,confirmOverwriteMessage:Q,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{ue(!1),B(),a((0,s.t)("Chart imported"))},show:ce,onHide:()=>{ue(!1)},passwordFields:he,setPasswordFields:pe,sshTunnelPasswordFields:ve,setSSHTunnelPasswordFields:be,sshTunnelPrivateKeyFields:fe,setSSHTunnelPrivateKeyFields:ye,sshTunnelPrivateKeyPasswordFields:_e,setSSHTunnelPrivateKeyPasswordFields:Pe}),ge&&(0,H.Y)(w.A,{})]})}))},25106:(e,t,a)=>{"use strict";function r(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{A:()=>r})},52708:(e,t)=>{"use strict";t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},8960:(e,t,a)=>{"use strict";var r=a(52708);t.createFirstEllipsis=function(e){return{type:r.ITEM_TYPES.ELLIPSIS,key:r.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:r.ITEM_TYPES.ELLIPSIS,key:r.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:r.ITEM_TYPES.FIRST_PAGE_LINK,key:r.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:r.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:r.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:r.ITEM_TYPES.NEXT_PAGE_LINK,key:r.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(a,t+1),isActive:t===a}},t.createLastPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:r.ITEM_TYPES.LAST_PAGE_LINK,key:r.ITEM_KEYS.LAST_PAGE_LINK,value:a,isActive:t===a}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:r.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},17991:(e,t)=>{"use strict";t.createRange=function(e,t){for(var a=[],r=e;r<=t;r++)a.push(r);return a}},11447:(e,t,a)=>{"use strict";var r=a(17991),n=a(8960);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var a=Number(e.currentPage);if(isNaN(a))throw new Error("getPaginationModel(): currentPage should be a number");if(a<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(a>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var i=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(i))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(i<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var s=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(s))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(s<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var l=Boolean(e.hidePreviousAndNextPageLinks),o=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),c=d?0:1,u=[],h=n.createPageFunctionFactory(e);if(o||u.push(n.createFirstPageLink(e)),l||u.push(n.createPreviousPageLink(e)),1+2*c+2*s+2*i>=t){var p=r.createRange(1,t).map(h);u.push.apply(u,p)}else{var g=i,m=r.createRange(1,g).map(h),v=t+1-i,b=t,f=r.createRange(v,b).map(h),y=Math.min(Math.max(a-s,g+c+1),v-c-2*s-1),_=y+2*s,P=r.createRange(y,_).map(h);if(u.push.apply(u,m),!d){var S=y-1,E=(S===g+1?h:n.createFirstEllipsis)(S);u.push(E)}if(u.push.apply(u,P),!d){var w=_+1,T=(w===v-1?h:n.createSecondEllipsis)(w);u.push(T)}u.push.apply(u,f)}return l||u.push(n.createNextPageLink(e)),o||u.push(n.createLastPageLink(e)),u};var i=a(52708);t.ITEM_TYPES=i.ITEM_TYPES,t.ITEM_KEYS=i.ITEM_KEYS}}]);
//# sourceMappingURL=193a9648d908ea71acf2.chunk.js.map