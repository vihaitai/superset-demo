"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5423],{69945:(e,a,t)=>{t.d(a,{A:()=>r});var n=t(96453),l=t(49666),o=t(2445);const r=(0,n.I4)((e=>(0,o.Y)(l.A,{...e})))`
  ${({theme:e,color:a,count:t})=>`\n    & > sup,\n    & > sup.antd5-badge-count {\n      ${void 0!==t?`background: ${a||e.colors.primary.base};`:""}\n    }\n  `}
`},69732:(e,a,t)=>{t.d(a,{A:()=>w});var n=t(96540),l=t(96453),o=t(35742),r=t(95579),s=t(58561),i=t.n(s),d=t(15595),c=t(79427),u=t(2738),h=t(40563),p=t(83329),b=t(5261),m=t(71478),v=t(2445);const g=l.I4.div`
  ${({theme:e})=>`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${e.gridUnit}px;\n      margin-top: ${5*e.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .select {\n      width: calc(100% - 30px - ${e.gridUnit}px);\n      flex: 1;\n    }\n\n    & > div {\n      margin-bottom: ${4*e.gridUnit}px;\n    }\n  `}
`,f=l.I4.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${({theme:e})=>e.gridUnit-2}px;

  .backend {
    overflow: visible;
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,y=({backend:e,databaseName:a})=>(0,v.FD)(f,{children:[(0,v.Y)(u.A,{className:"backend",children:e||""}),(0,v.Y)("span",{className:"name",title:a,children:a})]}),S=[],C=[];function w({db:e,formMode:a=!1,emptyState:t,getDbList:l,handleError:s,isDatabaseSelectEnabled:u=!0,onDbChange:f,onEmptyResults:w,onCatalogChange:Y,catalog:_,onSchemaChange:x,schema:k,readOnly:$=!1,sqlLabMode:I=!1}){const E=!(null==e||!e.allow_multi_catalog),[A,L]=(0,n.useState)(),[D,R]=(0,n.useState)(),[q,F]=(0,n.useState)(_?{label:_,value:_,title:_}:void 0),N=(0,n.useRef)(_);N.current=_;const[T,M]=(0,n.useState)(k?{label:k,value:k,title:k}:void 0),j=(0,n.useRef)(k);j.current=k;const{addSuccessToast:z}=(0,b.Yf)(),O=(0,n.useCallback)(((e,a)=>e.order-a.order),[]),U=(0,n.useMemo)((()=>async(e,t,n)=>{const r=`/api/v1/database/?q=${i().encode({order_column:"database_name",order_direction:"asc",page:t,page_size:n,...a||!I?{filters:[{col:"database_name",opr:"ct",value:e}]}:{filters:[{col:"database_name",opr:"ct",value:e},{col:"expose_in_sqllab",opr:"eq",value:!0}]}})}`;return o.A.get({endpoint:r}).then((({json:a})=>{const{result:t,count:n}=a;l&&l(t),0===t.length&&w&&w(e);const o=t.map(((e,a)=>({label:(0,v.Y)(y,{backend:e.backend,databaseName:e.database_name}),value:e.id,id:e.id,database_name:e.database_name,backend:e.backend,allow_multi_catalog:e.allow_multi_catalog,order:a})));return{data:o,totalCount:null!=n?n:o.length}}))}),[a,l,I,w]);function V(e){M(e),x&&(null==e?void 0:e.value)!==j.current&&x(null==e?void 0:e.value)}(0,n.useEffect)((()=>{L((a=>(null==a?void 0:a.id)!==(null==e?void 0:e.id)?e?{label:(0,v.Y)(y,{backend:e.backend,databaseName:e.database_name}),value:e.id,...e}:void 0:a))}),[e]);const{currentData:Q,isFetching:P,refetch:J}=(0,m.Ip)({dbId:null==A?void 0:A.value,catalog:null==q?void 0:q.value,onSuccess:(e,a)=>{R(null),1===e.length?V(e[0]):e.find((e=>j.current===e.value))||V(void 0),a&&z("List refreshed")},onError:e=>{var a;null!=e&&e.errors?R(null==e||null==(a=e.errors)?void 0:a[0]):s((0,r.t)("There was an error loading the schemas"))}}),G=Q||C;function X(e){F(e),M(void 0),Y&&(null==e?void 0:e.value)!==N.current&&Y(null==e?void 0:e.value)}const{data:B,isFetching:K,refetch:W}=(0,m.oh)({dbId:E?null==A?void 0:A.value:void 0,onSuccess:(e,a)=>{R(null),E?1===e.length?X(e[0]):e.find((e=>N.current===e.value))||X(void 0):X(null),E&&a&&z("List refreshed")},onError:e=>{var a;E&&(null!=e&&e.errors?R(null==e||null==(a=e.errors)?void 0:a[0]):s((0,r.t)("There was an error loading the catalogs")))}}),Z=B||S;function H(e,a){return(0,v.FD)("div",{className:"section",children:[(0,v.Y)("span",{className:"select",children:e}),(0,v.Y)("span",{className:"refresh",children:a})]})}return(0,v.FD)(g,{children:[H((0,v.Y)(d.DW,{ariaLabel:(0,r.t)("Select database or type to search databases"),optionFilterProps:["database_name","value"],header:(0,v.Y)(h.lR,{children:(0,r.t)("Database")}),lazyLoading:!1,notFoundContent:t,onChange:function(e,a){L(a),F(void 0),M(void 0),f&&f(a),Y&&Y(void 0),x&&x(void 0)},value:A,placeholder:(0,r.t)("Select database or type to search databases"),disabled:!u||$,options:U,sortComparator:O}),null),D?(0,v.Y)(c.A,{error:D,source:"crud"}):null,E&&function(){const e=!$&&(0,v.Y)(p.A,{onClick:W,tooltipContent:(0,r.t)("Force refresh catalog list")});return H((0,v.Y)(d.l6,{ariaLabel:(0,r.t)("Select catalog or type to search catalogs"),disabled:!A||$,header:(0,v.Y)(h.lR,{children:(0,r.t)("Catalog")}),labelInValue:!0,loading:K,name:"select-catalog",notFoundContent:(0,r.t)("No compatible catalog found"),placeholder:(0,r.t)("Select catalog or type to search catalogs"),onChange:e=>X(e),options:Z,showSearch:!0,value:q||void 0}),e)}(),function(){const e=!$&&(0,v.Y)(p.A,{onClick:J,tooltipContent:(0,r.t)("Force refresh schema list")});return H((0,v.Y)(d.l6,{ariaLabel:(0,r.t)("Select schema or type to search schemas"),disabled:!A||$,header:(0,v.Y)(h.lR,{children:(0,r.t)("Schema")}),labelInValue:!0,loading:P,name:"select-schema",notFoundContent:(0,r.t)("No compatible schema found"),placeholder:(0,r.t)("Select schema or type to search schemas"),onChange:e=>V(e),options:G,showSearch:!0,value:T}),e)}()]})}},83329:(e,a,t)=>{t.d(a,{A:()=>s});var n=t(96540),l=t(19129),o=t(12249),r=t(2445);const s=({onClick:e,tooltipContent:a})=>{const t=(0,n.forwardRef)(((e,a)=>(0,r.Y)(o.A.Refresh,{...e})));return(0,r.Y)(l.m,{title:a,children:(0,r.Y)(t,{role:"button",onClick:e,css:e=>({cursor:"pointer",color:e.colors.grayscale.base,"&:hover":{color:e.colors.primary.base}})})})}},8791:(e,a,t)=>{t.d(a,{Ay:()=>w,Kt:()=>C,cs:()=>y});var n=t(96540),l=t(96453),o=t(95579),r=t(51436),s=t(15595),i=t(40563),d=t(12249),c=t(69732),u=t(83329),h=t(58132),p=t(78704),b=t(5261),m=t(71478),v=t(2445);const g=l.I4.div`
  ${({theme:e})=>`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${e.gridUnit}px;\n      margin-top: ${5*e.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .divider {\n      border-bottom: 1px solid ${e.colors.secondary.light5};\n      margin: 15px 0;\n    }\n\n    .table-length {\n      color: ${e.colors.grayscale.light1};\n    }\n\n    .select {\n      flex: 1;\n      max-width: calc(100% - ${e.gridUnit+30}px)\n    }\n  `}
`,f=l.I4.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,y=({table:e})=>{const{value:a,type:t,extra:n}=e;return(0,v.FD)(f,{title:a,children:["view"===t?(0,v.Y)(d.A.Eye,{iconSize:"m"}):(0,v.Y)(d.A.Table,{iconSize:"m"}),(null==n?void 0:n.certification)&&(0,v.Y)(h.A,{certifiedBy:n.certification.certified_by,details:n.certification.details,size:"l"}),(null==n?void 0:n.warning_markdown)&&(0,v.Y)(p.A,{warningMarkdown:n.warning_markdown,size:"l",marginRight:4}),a]})},S=({database:e,emptyState:a,formMode:t=!1,getDbList:l,handleError:d,isDatabaseSelectEnabled:h=!0,onDbChange:p,onCatalogChange:f,onSchemaChange:S,readOnly:C=!1,onEmptyResults:w,catalog:Y,schema:_,sqlLabMode:x=!0,tableSelectMode:k="single",tableValue:$,onTableSelectChange:I,customTableOptionLabelRenderer:E})=>{const{addSuccessToast:A}=(0,b.Yf)(),[L,D]=(0,n.useState)(Y),[R,q]=(0,n.useState)(_),[F,N]=(0,n.useState)(void 0),{currentData:T,isFetching:M,refetch:j}=(0,m.ty)({dbId:null==e?void 0:e.id,catalog:L,schema:R,onSuccess:(e,a)=>{a&&A((0,o.t)("List updated"))},onError:e=>{(0,r.h4)(e).then((e=>{d((0,r.hi)((0,o.t)("There was an error loading the tables"),e))}))}}),z=(0,n.useMemo)((()=>T?T.options.map((e=>({value:e.value,label:(0,v.Y)(y,{table:e}),text:e.value,...E&&{customLabel:E(e)}}))):[]),[T,E]);(0,n.useEffect)((()=>{void 0===e&&(D(void 0),q(void 0),N(void 0))}),[e,k]),(0,n.useEffect)((()=>{N("single"===k?z.find((e=>e.value===$)):(null==z?void 0:z.filter((e=>e&&(null==$?void 0:$.includes(e.value)))))||[])}),[z,$,k]);const O=(0,n.useMemo)((()=>(e,a)=>{const t=e.trim().toLowerCase(),{value:n}=a;return n.toLowerCase().includes(t)}),[]);return(0,v.FD)(g,{children:[(0,v.Y)(c.A,{db:e,emptyState:a,formMode:t,getDbList:l,handleError:d,onDbChange:C?void 0:e=>{p&&p(e),D(void 0),q(void 0),N("single"===k?void 0:[])},onEmptyResults:w,onCatalogChange:C?void 0:e=>{D(e),f&&f(e),q(void 0),N("single"===k?void 0:[])},catalog:L,onSchemaChange:C?void 0:e=>{q(e),S&&S(e),N("single"===k?void 0:[])},schema:R,sqlLabMode:x,isDatabaseSelectEnabled:h&&!C,readOnly:C}),x&&!t&&(0,v.Y)("div",{className:"divider"}),function(){const e=R&&!t&&C||!R,a=x?(0,v.Y)(i.lR,{children:(0,o.t)("See table schema")}):(0,v.Y)(i.lR,{children:(0,o.t)("Table")});return n=(0,v.Y)(s.l6,{ariaLabel:(0,o.t)("Select table or type to search tables"),disabled:e,filterOption:O,header:a,labelInValue:!0,loading:M,name:"select-table",onChange:e=>{return a=e,void(R?null==I||I(Array.isArray(a)?a.map((e=>null==e?void 0:e.value)):null==a?void 0:a.value,L,R):N(a));var a},options:z,placeholder:(0,o.t)("Select table or type to search tables"),showSearch:!0,mode:k,value:F,allowClear:"multiple"===k,allowSelectAll:!1}),l=!C&&(0,v.Y)(u.A,{onClick:()=>j(),tooltipContent:(0,o.t)("Force refresh table list")}),(0,v.FD)("div",{className:"section",children:[(0,v.Y)("span",{className:"select",children:n}),(0,v.Y)("span",{className:"refresh",children:l})]});var n,l}()]})},C=e=>(0,v.Y)(S,{tableSelectMode:"multiple",...e}),w=S},71478:(e,a,t)=>{t.d(a,{IX:()=>Y.IX,hT:()=>n.hT,z7:()=>w.z7,PG:()=>w.PG,oh:()=>b,RG:()=>f,MZ:()=>y,DT:()=>S,RO:()=>C,IV:()=>x,Ip:()=>Y.Ip,ii:()=>w.ii,rq:()=>w.rq,ty:()=>w.ty});var n=t(51066),l=t(86274),o=t(96540),r=t(86963),s=t(43031);const i=s.F.injectEndpoints({endpoints:e=>({catalogs:e.query({providesTags:[{type:"Catalogs",id:"LIST"}],query:({dbId:e,forceRefresh:a})=>({endpoint:`/api/v1/database/${e}/catalogs/`,urlParams:{force:a},transformResponse:({json:e})=>e.result.sort().map((e=>({value:e,label:e,title:e})))}),serializeQueryArgs:({queryArgs:{dbId:e}})=>({dbId:e})})})}),{useLazyCatalogsQuery:d,useCatalogsQuery:c,endpoints:u,util:h}=i,p=[];function b(e){const{dbId:a,onSuccess:t,onError:n}=e||{},[l]=d(),s=c({dbId:a,forceRefresh:!1},{skip:!a});(0,o.useEffect)((()=>{s.isError&&(null==n||n(s.error))}),[s.isError,s.error,n]);const i=(0,r.A)(((e,a=!1)=>{!e||s.currentData&&!a||l({dbId:e,forceRefresh:a}).then((({isSuccess:e,isError:l,data:o})=>{e&&(null==t||t(o||p,a)),l&&(null==n||n(s.error))}))})),u=(0,o.useCallback)((()=>{i(a,!0)}),[a,i]);return(0,o.useEffect)((()=>{i(a,!1)}),[a,i]),{...s,refetch:u}}var m=t(58561);function v({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const g=t.n(m)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function f(e){return(0,l.vL)((0,l.b5)(`/api/v1/chart/${e}?q=${g}`),v)}const y=e=>(0,l.vL)((0,l.b5)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json),owners:e.owners||[]}))),S=e=>(0,l.b5)(`/api/v1/dashboard/${e}/charts`),C=e=>(0,l.b5)(`/api/v1/dashboard/${e}/datasets`);var w=t(42242),Y=t(3247);const _=s.F.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:({dbId:e,catalog:a,schema:t,sql:n,templateParams:l})=>{let o=l;try{o=JSON.parse(l||"")}catch(e){o=void 0}const r={catalog:a,schema:t,sql:n,...o&&{template_params:o}};return{method:"post",endpoint:`/api/v1/database/${e}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(r),transformResponse:({json:e})=>e.result}}})})}),{useQueryValidationsQuery:x}=_}}]);
//# sourceMappingURL=362016d0a8fe9d7f3532.chunk.js.map