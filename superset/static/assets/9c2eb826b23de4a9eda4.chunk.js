"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5936],{18575:(e,a,t)=>{a.w$=a.uv=void 0;var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l=s(t(96540)),o=s(t(5556)),r=t(11447);function s(e){return e&&e.__esModule?e:{default:e}}a.uv=function(e){var a=e.itemTypeToComponent,t=e.WrapperComponent,s=void 0===t?"div":t,i=function(e){var t=e.currentPage,o=e.totalPages,i=e.boundaryPagesRange,d=e.siblingPagesRange,u=e.hideEllipsis,c=e.hidePreviousAndNextPageLinks,g=e.hideFirstAndLastPageLinks,b=e.onChange,h=e.disabled,p=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),_=(0,r.getPaginationModel)({currentPage:t,totalPages:o,boundaryPagesRange:i,siblingPagesRange:d,hideEllipsis:u,hidePreviousAndNextPageLinks:c,hideFirstAndLastPageLinks:g}),E=function(e,a,t){return function(o){var r,s,i,d=e[o.type],u=(s=(r=o).value,i=r.isDisabled,function(){!i&&t&&a!==s&&t(s)});return l.default.createElement(d,n({onClick:u},o))}}(a,t,b);return l.default.createElement(s,p,_.map((function(e){return E(n({},e,{isDisabled:!!h}))})))};return i.propTypes={currentPage:o.default.number.isRequired,totalPages:o.default.number.isRequired,boundaryPagesRange:o.default.number,siblingPagesRange:o.default.number,hideEllipsis:o.default.bool,hidePreviousAndNextPageLinks:o.default.bool,hideFirstAndLastPageLinks:o.default.bool,onChange:o.default.func,disabled:o.default.bool},i},a.w$=r.ITEM_TYPES},12397:(e,a,t)=>{t.d(a,{U:()=>s});var n=t(19129),l=t(25106),o=t(95579),r=t(2445);const s=({user:e,date:a})=>{const t=(0,r.Y)("span",{className:"no-wrap",children:a});if(e){const a=(0,l.A)(e),s=(0,o.t)("Modified by: %s",a);return(0,r.Y)(n.m,{title:s,placement:"bottom",children:t})}return t}},84177:(e,a,t)=>{t.r(a),t.d(a,{default:()=>F});var n=t(72391),l=t(96453),o=t(95579),r=t(35742),s=t(96540),i=t(58561),d=t.n(i),u=t(61225),c=t(33231),g=t(62221),b=t(17444),h=t(50500),p=t(30703),_=t(5261),E=t(51713),P=t(37020),m=t(32132),f=t(27023),S=t(19129),v=t(12249),A=t(65256),L=t(39854),I=t(4780),y=t(76617),T=t(19980),N=t(12397),w=t(23193),Y=t(2445);const k=(0,n.a)(),M=k.get("database.delete.related"),C=k.get("databaseconnection.extraOption"),R=(0,l.I4)(v.A.Check)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
`,x=(0,l.I4)(v.A.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,D=l.I4.div`
  color: ${({theme:e})=>e.colors.grayscale.base};

  .action-button {
    display: inline-block;
    height: 100%;
  }
`;function K({value:e}){return e?(0,Y.Y)(R,{}):(0,Y.Y)(x,{})}const F=(0,_.Ay)((function({addDangerToast:e,addSuccessToast:a,user:t}){const{state:{loading:n,resourceCount:l,resourceCollection:i},hasPerm:_,fetchData:k,refreshData:R}=(0,h.RU)("database",(0,o.t)("database"),e),x=(0,u.d4)((e=>e.user)),F=(0,m.P3)(f.vX.showDatabaseModal),[O,G]=(0,c.sq)({databaseAdded:c.sJ}),[H,U]=(0,s.useState)(F||!1),[q,X]=(0,s.useState)(null),[z,$]=(0,s.useState)(null),[V,j]=(0,s.useState)(!1),[B,Q]=(0,s.useState)(!1),[J,W]=(0,s.useState)(!1),[Z,ee]=(0,s.useState)(!1),ae=(0,A.N6)(x),te=Z||ae,[ne,le]=(0,s.useState)(!1),{roles:oe}=x,{CSV_EXTENSIONS:re,COLUMNAR_EXTENSIONS:se,EXCEL_EXTENSIONS:ie,ALLOWED_EXTENSIONS:de}=(0,u.d4)((e=>e.common.conf));function ue({database:e=null,modalOpen:a=!1}={}){$(e),U(a)}(0,s.useEffect)((()=>{null!=O&&O.databaseAdded&&(G({databaseAdded:void 0}),R())}),[O,G,R]);const ce=_("can_write"),ge=_("can_write"),be=_("can_write"),he=_("can_export"),{canUploadCSV:pe,canUploadColumnar:_e,canUploadExcel:Ee}=(0,p.c8)(oe,re,se,ie,de),Pe=ae&&!Z,me=[{label:(0,o.t)("Upload file to database"),childs:[{label:(0,o.t)("Upload CSV"),name:"Upload CSV file",url:"#",onClick:()=>{j(!0)},perm:pe&&te,disable:Pe},{label:(0,o.t)("Upload Excel"),name:"Upload Excel file",url:"#",onClick:()=>{Q(!0)},perm:Ee&&te,disable:Pe},{label:(0,o.t)("Upload Columnar"),name:"Upload columnar file",url:"#",onClick:()=>{W(!0)},perm:_e&&te,disable:Pe}]}];(0,s.useEffect)((()=>{r.A.get({endpoint:`/api/v1/database/?q=${d().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((({json:e})=>{var a;const t=(null==e||null==(a=e.result)?void 0:a.filter((e=>{var a;return null==e||null==(a=e.engine_information)?void 0:a.supports_file_upload})))||[];ee((null==t?void 0:t.length)>=1)}))}),[H]);const fe={activeChild:"Databases",dropDownLinks:me.reduce(((e,a)=>(a.childs=a.childs.filter((e=>e.perm)),a.childs.length?(e.push(a),e):e)),[]),name:(0,o.t)("Databases")};ce&&(fe.buttons=[{name:(0,Y.FD)(Y.FK,{children:[(0,Y.Y)("i",{className:"fa fa-plus"})," ",(0,o.t)("Database")," "]}),buttonStyle:"primary",onClick:()=>{ue({modalOpen:!0})}}]);const Se=(0,s.useMemo)((()=>[{accessor:"database_name",Header:(0,o.t)("Name")},{accessor:"backend",Header:(0,o.t)("Backend"),size:"lg",disableSortBy:!0},{accessor:"allow_run_async",Header:(0,Y.Y)(S.m,{id:"allow-run-async-header-tooltip",title:(0,o.t)("Asynchronous query execution"),placement:"top",children:(0,Y.Y)("span",{children:(0,o.t)("AQE")})}),Cell:({row:{original:{allow_run_async:e}}})=>(0,Y.Y)(K,{value:e}),size:"sm"},{accessor:"allow_dml",Header:(0,Y.Y)(S.m,{id:"allow-dml-header-tooltip",title:(0,o.t)("Allow data manipulation language"),placement:"top",children:(0,Y.Y)("span",{children:(0,o.t)("DML")})}),Cell:({row:{original:{allow_dml:e}}})=>(0,Y.Y)(K,{value:e}),size:"sm"},{accessor:"allow_file_upload",Header:(0,o.t)("File upload"),Cell:({row:{original:{allow_file_upload:e}}})=>(0,Y.Y)(K,{value:e}),size:"md"},{accessor:"expose_in_sqllab",Header:(0,o.t)("Expose in SQL Lab"),Cell:({row:{original:{expose_in_sqllab:e}}})=>(0,Y.Y)(K,{value:e}),size:"md"},{Cell:({row:{original:{changed_by:e,changed_on_delta_humanized:a}}})=>(0,Y.Y)(N.U,{date:a,user:e}),Header:(0,o.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>ge||be||he?(0,Y.FD)(D,{className:"actions",children:[be&&(0,Y.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return a=e,r.A.get({endpoint:`/api/v1/database/${a.id}/related_objects/`}).then((({json:e={}})=>{X({...a,chart_count:e.charts.count,dashboard_count:e.dashboards.count,sqllab_tab_count:e.sqllab_tab_states.count})})).catch((0,p.JF)((e=>(0,o.t)("An error occurred while fetching database related data: %s",e))));var a},children:(0,Y.Y)(S.m,{id:"delete-action-tooltip",title:(0,o.t)("Delete database"),placement:"bottom",children:(0,Y.Y)(v.A.Trash,{})})}),he&&(0,Y.Y)(S.m,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom",children:(0,Y.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{var a;void 0!==(a=e).id&&((0,I.A)("database",[a.id],(()=>{le(!1)})),le(!0))},children:(0,Y.Y)(v.A.Share,{})})}),ge&&(0,Y.Y)(S.m,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom",children:(0,Y.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ue({database:e,modalOpen:!0}),children:(0,Y.Y)(v.A.EditAlt,{})})})]}):null,Header:(0,o.t)("Actions"),id:"actions",hidden:!ge&&!be,disableSortBy:!0},{accessor:w.H.ChangedBy,hidden:!0}]),[be,ge,he]),ve=(0,s.useMemo)((()=>[{Header:(0,o.t)("Name"),key:"search",id:"database_name",input:"search",operator:L.t.Contains},{Header:(0,o.t)("Expose in SQL Lab"),key:"expose_in_sql_lab",id:"expose_in_sqllab",input:"select",operator:L.t.Equals,unfilteredLabel:(0,o.t)("All"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,Y.Y)(S.m,{id:"allow-run-async-filter-header-tooltip",title:(0,o.t)("Asynchronous query execution"),placement:"top",children:(0,Y.Y)("span",{children:(0,o.t)("AQE")})}),key:"allow_run_async",id:"allow_run_async",input:"select",operator:L.t.Equals,unfilteredLabel:(0,o.t)("All"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,o.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:L.t.RelationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,p.u1)("database","changed_by",(0,p.JF)((e=>(0,o.t)("An error occurred while fetching dataset datasource values: %s",e))),t),paginate:!0}]),[]);return(0,Y.FD)(Y.FK,{children:[(0,Y.Y)(E.A,{...fe}),(0,Y.Y)(y.Ay,{databaseId:null==z?void 0:z.id,show:H,onHide:ue,onDatabaseAdd:()=>{R()}}),(0,Y.Y)(T.A,{addDangerToast:e,addSuccessToast:a,onHide:()=>{j(!1)},show:V,allowedExtensions:re,type:"csv"}),(0,Y.Y)(T.A,{addDangerToast:e,addSuccessToast:a,onHide:()=>{Q(!1)},show:B,allowedExtensions:ie,type:"excel"}),(0,Y.Y)(T.A,{addDangerToast:e,addSuccessToast:a,onHide:()=>{W(!1)},show:J,allowedExtensions:se,type:"columnar"}),q&&(0,Y.Y)(P.A,{description:(0,Y.FD)(Y.FK,{children:[(0,Y.Y)("p",{children:(0,o.t)("The database %s is linked to %s charts that appear on %s dashboards and users have %s SQL Lab tabs using this database open. Are you sure you want to continue? Deleting the database will break those objects.",q.database_name,q.chart_count,q.dashboard_count,q.sqllab_tab_count)}),M&&(0,Y.Y)(M,{database:q})]}),onConfirm:()=>{q&&function(t){const{id:n,database_name:l}=t;r.A.delete({endpoint:`/api/v1/database/${n}`}).then((()=>{R(),a((0,o.t)("Deleted: %s",l)),null!=C&&C.onDelete&&C.onDelete(t),(0,g.SO)(g.Hh.Database,null),X(null)}),(0,p.JF)((a=>e((0,o.t)("There was an issue deleting %s: %s",l,a)))))}(q)},onHide:()=>X(null),open:!0,title:(0,o.t)("Delete Database?")}),(0,Y.Y)(L.A,{className:"database-list-view",columns:Se,count:l,data:i,fetchData:k,filters:ve,initialSort:[{id:"changed_on_delta_humanized",desc:!0}],loading:n,addDangerToast:e,addSuccessToast:a,refreshData:()=>{},pageSize:25}),ne&&(0,Y.Y)(b.A,{})]})}))},25106:(e,a,t)=>{function n(e){return e?`${e.first_name} ${e.last_name}`:""}t.d(a,{A:()=>n})},52708:(e,a)=>{a.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},a.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},8960:(e,a,t)=>{var n=t(52708);a.createFirstEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},a.createSecondEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},a.createFirstPageLink=function(e){var a=e.currentPage;return{type:n.ITEM_TYPES.FIRST_PAGE_LINK,key:n.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===a}},a.createPreviousPageLink=function(e){var a=e.currentPage;return{type:n.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:n.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,a-1),isActive:1===a}},a.createNextPageLink=function(e){var a=e.currentPage,t=e.totalPages;return{type:n.ITEM_TYPES.NEXT_PAGE_LINK,key:n.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(t,a+1),isActive:a===t}},a.createLastPageLink=function(e){var a=e.currentPage,t=e.totalPages;return{type:n.ITEM_TYPES.LAST_PAGE_LINK,key:n.ITEM_KEYS.LAST_PAGE_LINK,value:t,isActive:a===t}},a.createPageFunctionFactory=function(e){var a=e.currentPage;return function(e){return{type:n.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===a}}}},17991:(e,a)=>{a.createRange=function(e,a){for(var t=[],n=e;n<=a;n++)t.push(n);return t}},11447:(e,a,t)=>{var n=t(17991),l=t(8960);a.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var a=Number(e.totalPages);if(isNaN(a))throw new Error("getPaginationModel(): totalPages should be a number");if(a<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var t=Number(e.currentPage);if(isNaN(t))throw new Error("getPaginationModel(): currentPage should be a number");if(t<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(t>a)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var o=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(o))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(o<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var r=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var s=Boolean(e.hidePreviousAndNextPageLinks),i=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),u=d?0:1,c=[],g=l.createPageFunctionFactory(e);if(i||c.push(l.createFirstPageLink(e)),s||c.push(l.createPreviousPageLink(e)),1+2*u+2*r+2*o>=a){var b=n.createRange(1,a).map(g);c.push.apply(c,b)}else{var h=o,p=n.createRange(1,h).map(g),_=a+1-o,E=a,P=n.createRange(_,E).map(g),m=Math.min(Math.max(t-r,h+u+1),_-u-2*r-1),f=m+2*r,S=n.createRange(m,f).map(g);if(c.push.apply(c,p),!d){var v=m-1,A=(v===h+1?g:l.createFirstEllipsis)(v);c.push(A)}if(c.push.apply(c,S),!d){var L=f+1,I=(L===_-1?g:l.createSecondEllipsis)(L);c.push(I)}c.push.apply(c,P)}return s||c.push(l.createNextPageLink(e)),i||c.push(l.createLastPageLink(e)),c};var o=t(52708);a.ITEM_TYPES=o.ITEM_TYPES,a.ITEM_KEYS=o.ITEM_KEYS}}]);
//# sourceMappingURL=9c2eb826b23de4a9eda4.chunk.js.map