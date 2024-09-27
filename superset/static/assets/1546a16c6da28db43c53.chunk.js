"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4229],{39093:(e,t,a)=>{a.d(t,{Au:()=>o,I8:()=>d,J:()=>l,l6:()=>i});var s=a(35742),r=a(5362);const n=(e,t,a)=>{let s=`api/v1/dashboard/${e}/filter_state`;return t&&(s=s.concat(`/${t}`)),a&&(s=s.concat(`?tab_id=${a}`)),s},i=(e,t,a,i)=>s.A.put({endpoint:n(e,a,i),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(r.A.error(e),null))),o=(e,t,a)=>s.A.post({endpoint:n(e,void 0,a),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(r.A.error(e),null))),d=(e,t)=>s.A.get({endpoint:n(e,t)}).then((({json:e})=>JSON.parse(e.value))).catch((e=>(r.A.error(e),null))),l=e=>s.A.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((({json:e})=>e)).catch((e=>(r.A.error(e),null)))},94229:(e,t,a)=>{a.r(t),a.d(t,{DashboardPage:()=>ne,DashboardPageIdContext:()=>ae,default:()=>ie});var s=a(96540),r=a(17437),n=a(61574),i=a(96453),o=a(95579),d=a(61225),l=a(5261),c=a(17444),u=a(71478),p=a(52123),h=a(34975),b=a(5007),g=a(62221),f=a(27023),m=a(32132),v=a(72173),y=a(39093),w=a(82960),x=a(5556),E=a.n(x),S=a(27366),C=a(36053),I=a(38708),$=a(49588);function D(e){return Object.values(e).reduce(((e,t)=>(t&&t.type===$.oT&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e)),[])}var _=a(4881),j=a(35700),O=a(35839),T=a(37725);const R=[$.oT,$.xY,$.rG];function F(e){return!Object.values(e).some((({type:e})=>e&&R.includes(e)))}var U=a(2445);const k={actions:E().shape({addSliceToDashboard:E().func.isRequired,removeSliceFromDashboard:E().func.isRequired,triggerQuery:E().func.isRequired,logEvent:E().func.isRequired,clearDataMaskState:E().func.isRequired}).isRequired,dashboardInfo:_.lJ.isRequired,dashboardState:_.U_.isRequired,slices:E().objectOf(_.VE).isRequired,activeFilters:E().object.isRequired,chartConfiguration:E().object,datasources:E().object.isRequired,ownDataCharts:E().object.isRequired,layout:E().object.isRequired,impressionId:E().string.isRequired,timeout:E().number,userId:E().string};class q extends s.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",q.unload):window.removeEventListener("beforeunload",q.unload)}static unload(){const e=(0,o.t)("You have unsaved changes.");return window.event.returnValue=e,e}constructor(e){var t,a;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(a=e.ownDataCharts)?a:{},this.onVisibilityChange=this.onVisibilityChange.bind(this)}componentDidMount(){const e=(0,I.A)(),{dashboardState:t,layout:a}=this.props,s={is_soft_navigation:j.Vy.timeOriginOffset>0,is_edit_mode:t.editMode,mount_duration:j.Vy.getTimestamp(),is_empty:F(a),is_published:t.isPublished,bootstrap_data_length:e.length},r=(0,T.A)();r&&(s.target_id=r),this.props.actions.logEvent(j.es,s),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:j.Vy.getTimestamp(),ts:(new Date).getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(){this.applyCharts()}UNSAFE_componentWillReceiveProps(e){const t=D(this.props.layout),a=D(e.layout);this.props.dashboardInfo.id===e.dashboardInfo.id&&(t.length<a.length?a.filter((e=>-1===t.indexOf(e))).forEach((t=>{return this.props.actions.addSliceToDashboard(t,(a=e.layout,s=t,Object.values(a).find((e=>e&&e.type===$.oT&&e.meta&&e.meta.chartId===s))));var a,s})):t.length>a.length&&t.filter((e=>-1===a.indexOf(e))).forEach((e=>this.props.actions.removeSliceFromDashboard(e))))}applyCharts(){const{hasUnsavedChanges:e,editMode:t}=this.props.dashboardState,{appliedFilters:a,appliedOwnDataCharts:s}=this,{activeFilters:r,ownDataCharts:n,chartConfiguration:i}=this.props;(0,S.G7)(S.TO.DashboardCrossFilters)&&!i||(t||(0,O.r$)(s,n,{ignoreUndefined:!0})&&(0,O.r$)(a,r,{ignoreUndefined:!0})||this.applyFilters(),e?q.onBeforeUnload(!0):q.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:j.Vy.getTimestamp(),ts:(new Date).getTime()};else if("visible"===document.visibilityState){const e=this.visibilityEventData.start_offset;this.props.actions.logEvent(j.Xj,{...this.visibilityEventData,duration:j.Vy.getTimestamp()-e})}}applyFilters(){const{appliedFilters:e}=this,{activeFilters:t,ownDataCharts:a}=this.props,s=Object.keys(t),r=Object.keys(e),n=new Set(s.concat(r)),i=((e,t)=>{const a=Object.keys(e),s=Object.keys(t),r=(n=a,i=s,[...n.filter((e=>!i.includes(e))),...i.filter((e=>!n.includes(e)))]).filter((a=>e[a]||t[a]));var n,i;return new Set([...a,...s]).forEach((a=>{(0,O.r$)(e[a],t[a])||r.push(a)})),[...new Set(r)]})(a,this.appliedOwnDataCharts);[...n].forEach((a=>{if(!s.includes(a)&&r.includes(a))i.push(...e[a].scope);else if(r.includes(a)){if((0,O.r$)(e[a].values,t[a].values,{ignoreUndefined:!0})||i.push(...t[a].scope),!(0,O.r$)(e[a].scope,t[a].scope)){const s=(t[a].scope||[]).concat(e[a].scope||[]);i.push(...s)}}else i.push(...t[a].scope)})),this.refreshCharts([...new Set(i)]),this.appliedFilters=t,this.appliedOwnDataCharts=a}refreshCharts(e){e.forEach((e=>{this.props.actions.triggerQuery(!0,e)}))}render(){return this.context.loading?(0,U.Y)(c.A,{}):this.props.children}}q.contextType=C.bf,q.propTypes=k,q.defaultProps={timeout:60,userId:""};const A=q;var P=a(2514),M=a(7735),V=a(68921),L=a(92008),z=a(95004);const H=(0,d.Ng)((function(e){var t,a,s,r;const{datasources:n,sliceEntities:i,dataMask:o,dashboardInfo:d,dashboardState:l,dashboardLayout:c,impressionId:u,nativeFilters:p}=e;return{timeout:null==(t=d.common)||null==(a=t.conf)?void 0:a.SUPERSET_WEBSERVER_TIMEOUT,userId:d.userId,dashboardInfo:d,dashboardState:l,datasources:n,activeFilters:{...(0,V.ug)(),...(0,L.R)({chartConfiguration:null==(s=d.metadata)?void 0:s.chart_configuration,nativeFilters:p.filters,dataMask:o,allSliceIds:l.sliceIds})},chartConfiguration:null==(r=d.metadata)?void 0:r.chart_configuration,ownDataCharts:(0,L.W)(o,"ownState"),slices:i.slices,layout:c.present,impressionId:u}}),(function(e){return{actions:(0,w.zH)({setDatasources:h.nC,clearDataMaskState:z.V9,addSliceToDashboard:v.ft,removeSliceFromDashboard:v.Hg,triggerQuery:P.triggerQuery,logEvent:M.logEvent},e)}}))(A);var N=a(43561);const Q=e=>r.AH`
  body {
    h1 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xxl}px;
      letter-spacing: -0.2px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${3*e.gridUnit}px;
    }

    h2 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xl}px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.l}px;
      letter-spacing: 0.2px;
      margin-top: ${2*e.gridUnit}px;
      margin-bottom: ${e.gridUnit}px;
    }
  }
`,Y=e=>r.AH`
  .header-title a {
    margin: ${e.gridUnit/2}px;
    padding: ${e.gridUnit/2}px;
  }
  .header-controls {
    &,
    &:hover {
      margin-top: ${e.gridUnit}px;
    }
  }
`,J=e=>r.AH`
  .filter-card-popover {
    width: 240px;
    padding: 0;
    border-radius: 4px;

    &.ant-popover-placement-bottom {
      padding-top: ${e.gridUnit}px;
    }

    &.ant-popover-placement-left {
      padding-right: ${3*e.gridUnit}px;
    }

    .ant-popover-inner {
      box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    }

    .ant-popover-inner-content {
      padding: ${4*e.gridUnit}px;
    }

    .ant-popover-arrow {
      display: none;
    }
  }

  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,B=e=>r.AH`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.gridUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.gridUnit}px;
    min-width: ${40*e.gridUnit}px;
  }
`,G=e=>r.AH`
  a,
  .ant-tabs-tabpane,
  .ant-tabs-tab-btn,
  .superset-button,
  .superset-button.ant-dropdown-trigger,
  .header-controls span {
    &:focus-visible {
      box-shadow: 0 0 0 2px ${e.colors.primary.dark1};
      border-radius: ${e.gridUnit/2}px;
      outline: none;
      text-decoration: none;
    }
    &:not(
        .superset-button,
        .ant-menu-item,
        a,
        .fave-unfave-icon,
        .ant-tabs-tabpane,
        .header-controls span
      ) {
      &:focus-visible {
        padding: ${e.gridUnit/2}px;
      }
    }
  }
`;var W=a(44383),X=a.n(W);const K={},Z=()=>{const e=(0,g.Gq)(g.Hh.DashboardExploreContext,{});return Object.fromEntries(Object.entries(e).filter((([,e])=>!e.isRedundant)))},ee=(e,t)=>{const a=Z();(0,g.SO)(g.Hh.DashboardExploreContext,{...a,[e]:t})},te=({dashboardPageId:e})=>{const t=(0,d.d4)((({dashboardInfo:t,dashboardState:a,nativeFilters:s,dataMask:r})=>{var n,i,o;return{labelsColor:(null==(n=t.metadata)?void 0:n.label_colors)||K,labelsColorMap:(null==(i=t.metadata)?void 0:i.shared_label_colors)||K,colorScheme:null==a?void 0:a.colorScheme,chartConfiguration:(null==(o=t.metadata)?void 0:o.chart_configuration)||K,nativeFilters:Object.entries(s.filters).reduce(((e,[t,a])=>({...e,[t]:X()(a,["chartsInScope"])})),{}),dataMask:r,dashboardId:t.id,filterBoxFilters:(0,V.ug)(),dashboardPageId:e}}),d.bN);return(0,s.useEffect)((()=>(ee(e,t),()=>{ee(e,{...t,isRedundant:!0})})),[t,e]),null},ae=(0,s.createContext)(""),se=(0,s.lazy)((()=>Promise.all([a.e(8096),a.e(4e3),a.e(749),a.e(1301),a.e(9666),a.e(8348),a.e(6281),a.e(2720),a.e(7005),a.e(5783),a.e(1757),a.e(1003),a.e(9968),a.e(9154),a.e(9074),a.e(9428),a.e(8604),a.e(4233),a.e(4994),a.e(5026)]).then(a.bind(a,45366)))),re=document.title,ne=({idOrSlug:e})=>{const t=(0,i.DP)(),a=(0,d.wA)(),w=(0,n.W6)(),x=(0,s.useMemo)((()=>(0,N.Ak)()),[]),E=(0,d.d4)((({dashboardInfo:e})=>e&&Object.keys(e).length>0)),{addDangerToast:S}=(0,l.Yf)(),{result:C,error:I}=(0,u.MZ)(e),{result:$,error:D}=(0,u.DT)(e),{result:_,error:j,status:O}=(0,u.RO)(e),T=(0,s.useRef)(!1),R=I||D,F=Boolean(C&&$),{dashboard_title:k,css:q,id:A=0}=C||{};if((0,s.useEffect)((()=>{const e=()=>{const e=Z();(0,g.SO)(g.Hh.DashboardExploreContext,{...e,[x]:{...e[x],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[x]),(0,s.useEffect)((()=>{a((0,v.wh)(O))}),[a,O]),(0,s.useEffect)((()=>{A&&async function(){const e=(0,m.P3)(f.vX.permalinkKey),t=(0,m.P3)(f.vX.nativeFiltersKey),s=(0,m.P3)(f.vX.nativeFilters);let r,n=t||{};if(e){const t=await(0,y.J)(e);t&&({dataMask:n,activeTabs:r}=t.state)}else t&&(n=await(0,y.I8)(A,t));s&&(n=s),F&&(T.current||(T.current=!0),a((0,p.M)({history:w,dashboard:C,charts:$,activeTabs:r,dataMask:n})))}()}),[F]),(0,s.useEffect)((()=>(k&&(document.title=k),()=>{document.title=re})),[k]),(0,s.useEffect)((()=>"string"==typeof q?(0,b.A)(q):()=>{}),[q]),(0,s.useEffect)((()=>{j?S((0,o.t)("Error loading chart datasources. Filters may not work correctly.")):a((0,h.nC)(_))}),[S,_,j,a]),R)throw R;return F&&E?(0,U.FD)(U.FK,{children:[(0,U.Y)(r.mL,{styles:[J(t),Q(t),B(t),G(t),Y(t),"",""]}),(0,U.Y)(te,{dashboardPageId:x}),(0,U.Y)(ae.Provider,{value:x,children:(0,U.Y)(H,{children:(0,U.Y)(se,{})})})]}):(0,U.Y)(c.A,{})},ie=ne},92008:(e,t,a)=>{a.d(t,{R:()=>r,W:()=>s});const s=(e,t)=>Object.values(e).filter((e=>e[t])).reduce(((e,a)=>({...e,[a.id]:t?a[t]:a})),{}),r=({chartConfiguration:e,nativeFilters:t,dataMask:a,allSliceIds:s})=>{const r={};return Object.values(a).forEach((({id:a,extraFormData:n})=>{var i,o,d,l,c,u;const p=null!=(i=null!=(o=null!=(d=null==t||null==(l=t[a])?void 0:l.chartsInScope)?d:null==e||null==(c=e[a])||null==(u=c.crossFilters)?void 0:u.chartsInScope)?o:s)?i:[];r[a]={scope:p,values:n}})),r}},5007:(e,t,a)=>{function s(e){const t="CssEditor-css",a=document.head||document.getElementsByTagName("head")[0],s=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className=e,t.type="text/css",t}(t);return"styleSheet"in s?s.styleSheet.cssText=e:s.innerHTML=e,a.appendChild(s),function(){s.remove()}}a.d(t,{A:()=>s})},71478:(e,t,a)=>{a.d(t,{IX:()=>S.IX,hT:()=>s.hT,z7:()=>E.z7,PG:()=>E.PG,oh:()=>b,RG:()=>v,MZ:()=>y,DT:()=>w,RO:()=>x,IV:()=>I,Ip:()=>S.Ip,ii:()=>E.ii,rq:()=>E.rq,ty:()=>E.ty});var s=a(51066),r=a(86274),n=a(96540),i=a(86963),o=a(43031);const d=o.F.injectEndpoints({endpoints:e=>({catalogs:e.query({providesTags:[{type:"Catalogs",id:"LIST"}],query:({dbId:e,forceRefresh:t})=>({endpoint:`/api/v1/database/${e}/catalogs/`,urlParams:{force:t},transformResponse:({json:e})=>e.result.sort().map((e=>({value:e,label:e,title:e})))}),serializeQueryArgs:({queryArgs:{dbId:e}})=>({dbId:e})})})}),{useLazyCatalogsQuery:l,useCatalogsQuery:c,endpoints:u,util:p}=d,h=[];function b(e){const{dbId:t,onSuccess:a,onError:s}=e||{},[r]=l(),o=c({dbId:t,forceRefresh:!1},{skip:!t});(0,n.useEffect)((()=>{o.isError&&(null==s||s(o.error))}),[o.isError,o.error,s]);const d=(0,i.A)(((e,t=!1)=>{!e||o.currentData&&!t||r({dbId:e,forceRefresh:t}).then((({isSuccess:e,isError:r,data:n})=>{e&&(null==a||a(n||h,t)),r&&(null==s||s(o.error))}))})),u=(0,n.useCallback)((()=>{d(t,!0)}),[t,d]);return(0,n.useEffect)((()=>{d(t,!1)}),[t,d]),{...o,refetch:u}}var g=a(58561);function f({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const m=a.n(g)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function v(e){return(0,r.vL)((0,r.b5)(`/api/v1/chart/${e}?q=${m}`),f)}const y=e=>(0,r.vL)((0,r.b5)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json),owners:e.owners||[]}))),w=e=>(0,r.b5)(`/api/v1/dashboard/${e}/charts`),x=e=>(0,r.b5)(`/api/v1/dashboard/${e}/datasets`);var E=a(42242),S=a(3247);const C=o.F.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:({dbId:e,catalog:t,schema:a,sql:s,templateParams:r})=>{let n=r;try{n=JSON.parse(r||"")}catch(e){n=void 0}const i={catalog:t,schema:a,sql:s,...n&&{template_params:n}};return{method:"post",endpoint:`/api/v1/database/${e}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(i),transformResponse:({json:e})=>e.result}}})})}),{useQueryValidationsQuery:I}=C}}]);
//# sourceMappingURL=1546a16c6da28db43c53.chunk.js.map