"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5458],{18575:(e,t,a)=>{t.w$=t.uv=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=s(a(96540)),r=s(a(5556)),l=a(11447);function s(e){return e&&e.__esModule?e:{default:e}}t.uv=function(e){var t=e.itemTypeToComponent,a=e.WrapperComponent,s=void 0===a?"div":a,o=function(e){var a=e.currentPage,r=e.totalPages,o=e.boundaryPagesRange,d=e.siblingPagesRange,c=e.hideEllipsis,u=e.hidePreviousAndNextPageLinks,g=e.hideFirstAndLastPageLinks,p=e.onChange,m=e.disabled,h=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),P=(0,l.getPaginationModel)({currentPage:a,totalPages:r,boundaryPagesRange:o,siblingPagesRange:d,hideEllipsis:c,hidePreviousAndNextPageLinks:u,hideFirstAndLastPageLinks:g}),E=function(e,t,a){return function(r){var l,s,o,d=e[r.type],c=(s=(l=r).value,o=l.isDisabled,function(){!o&&a&&t!==s&&a(s)});return i.default.createElement(d,n({onClick:c},r))}}(t,a,p);return i.default.createElement(s,h,P.map((function(e){return E(n({},e,{isDisabled:!!m}))})))};return o.propTypes={currentPage:r.default.number.isRequired,totalPages:r.default.number.isRequired,boundaryPagesRange:r.default.number,siblingPagesRange:r.default.number,hideEllipsis:r.default.bool,hidePreviousAndNextPageLinks:r.default.bool,hideFirstAndLastPageLinks:r.default.bool,onChange:r.default.func,disabled:r.default.bool},o},t.w$=l.ITEM_TYPES},12397:(e,t,a)=>{a.d(t,{U:()=>s});var n=a(19129),i=a(25106),r=a(95579),l=a(2445);const s=({user:e,date:t})=>{const a=(0,l.Y)("span",{className:"no-wrap",children:t});if(e){const t=(0,i.A)(e),s=(0,r.t)("Modified by: %s",t);return(0,l.Y)(n.m,{title:s,placement:"bottom",children:a})}return a}},83691:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(96453),i=a(19129),r=a(12249),l=a(2445);const s=n.I4.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:e})=>e.colors.primary.base};
      }
    }
  }
`,o=n.I4.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,l.Y)(s,{className:"actions",children:e.map(((e,t)=>{const a=r.A[e.icon];return e.tooltip?(0,l.Y)(i.m,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,children:(0,l.Y)(o,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,l.Y)(a,{})})},t):(0,l.Y)(o,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,l.Y)(a,{})},t)}))})}},90864:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var n=a(96540),i=a(95579),r=a(35742),l=a(58561),s=a.n(l),o=a(50500),d=a(30703),c=a(5261),u=a(51713),g=a(37020),p=a(63358),m=a(83691),h=a(39854),P=a(96453),E=a(12249),b=a(85861),_=a(24976),f=a(2445);const S=P.I4.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,v=(0,P.I4)(_.rN)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`,I=P.I4.div`
  margin-bottom: ${({theme:e})=>10*e.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }

  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    width: 50%;
  }
`,A=(0,c.Ay)((({addDangerToast:e,onCssTemplateAdd:t,onHide:a,show:r,cssTemplate:l=null})=>{const[s,c]=(0,n.useState)(!0),[u,g]=(0,n.useState)(null),[p,m]=(0,n.useState)(!0),h=null!==l,{state:{loading:P,resource:_},fetchResource:A,createResource:y,updateResource:L}=(0,o.fn)("css_template",(0,i.t)("css_template"),e),T=()=>{m(!0),a()};return(0,n.useEffect)((()=>{if(h&&(null==u||!u.id||l&&(null==l?void 0:l.id)!==u.id||p&&r)){if(null!==(null==l?void 0:l.id)&&!P){const e=l.id||0;A(e)}}else!h&&(!u||u.id||p&&r)&&g({template_name:"",css:""})}),[l]),(0,n.useEffect)((()=>{_&&g(_)}),[_]),(0,n.useEffect)((()=>{var e;null!=u&&u.template_name.length&&null!=u&&null!=(e=u.css)&&e.length?c(!1):c(!0)}),[u?u.template_name:"",u?u.css:""]),p&&r&&m(!1),(0,f.FD)(b.A,{disablePrimaryButton:s,onHandledPrimaryAction:()=>{if(h){if(null!=u&&u.id){const e=u.id;delete u.id,delete u.created_by,delete u.changed_by,delete u.changed_on_delta_humanized,L(e,u).then((e=>{e&&(t&&t(),T())}))}}else u&&y(u).then((e=>{e&&(t&&t(),T())}))},onHide:T,primaryButtonName:h?(0,i.t)("Save"):(0,i.t)("Add"),show:r,width:"55%",title:(0,f.FD)("h4",{children:[h?(0,f.Y)(E.A.EditAlt,{css:d.vE}):(0,f.Y)(E.A.PlusLarge,{css:d.vE}),h?(0,i.t)("Edit CSS template properties"):(0,i.t)("Add CSS template")]}),children:[(0,f.Y)(S,{children:(0,f.Y)("h4",{children:(0,i.t)("Basic information")})}),(0,f.FD)(I,{children:[(0,f.FD)("div",{className:"control-label",children:[(0,i.t)("Name"),(0,f.Y)("span",{className:"required",children:"*"})]}),(0,f.Y)("input",{name:"template_name",onChange:e=>{const{target:t}=e,a={...u,template_name:u?u.template_name:"",css:u?u.css:""};a[t.name]=t.value,g(a)},type:"text",value:null==u?void 0:u.template_name})]}),(0,f.FD)(I,{children:[(0,f.FD)("div",{className:"control-label",children:[(0,i.t)("css"),(0,f.Y)("span",{className:"required",children:"*"})]}),(0,f.Y)(v,{onChange:e=>{const t={...u,template_name:u?u.template_name:"",css:e};g(t)},value:null==u?void 0:u.css,width:"100%"})]})]})}));var y=a(12397),L=a(23193);const T=(0,c.Ay)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:l,resourceCount:c,resourceCollection:P,bulkSelectEnabled:E},hasPerm:b,fetchData:_,refreshData:S,toggleBulkSelect:v}=(0,o.RU)("css_template",(0,i.t)("CSS templates"),e),[I,T]=(0,n.useState)(!1),[N,k]=(0,n.useState)(null),w=b("can_write"),Y=b("can_write"),M=b("can_write"),[R,C]=(0,n.useState)(null),F=[{id:"template_name",desc:!0}],K=(0,n.useMemo)((()=>[{accessor:"template_name",Header:(0,i.t)("Name")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,f.Y)(y.U,{date:e,user:t}),Header:(0,i.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=[Y?{label:"edit-action",tooltip:(0,i.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>(k(e),void T(!0))}:null,M?{label:"delete-action",tooltip:(0,i.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>C(e)}:null].filter((e=>!!e));return(0,f.Y)(m.A,{actions:t})},Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!Y&&!M,size:"xl"},{accessor:L.H.ChangedBy,hidden:!0}]),[M,w]),x={name:(0,i.t)("CSS templates")},D=[];w&&D.push({name:(0,f.FD)(f.FK,{children:[(0,f.Y)("i",{className:"fa fa-plus"})," ",(0,i.t)("CSS template")]}),buttonStyle:"primary",onClick:()=>{k(null),T(!0)}}),M&&D.push({name:(0,i.t)("Bulk select"),onClick:v,buttonStyle:"secondary"}),x.buttons=D;const G=(0,n.useMemo)((()=>[{Header:(0,i.t)("Name"),key:"search",id:"template_name",input:"search",operator:h.t.Contains},{Header:(0,i.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:h.t.RelationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,d.u1)("css_template","changed_by",(0,d.JF)((e=>(0,i.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[]);return(0,f.FD)(f.FK,{children:[(0,f.Y)(u.A,{...x}),(0,f.Y)(A,{addDangerToast:e,cssTemplate:N,onCssTemplateAdd:()=>S(),onHide:()=>T(!1),show:I}),R&&(0,f.Y)(g.A,{description:(0,i.t)("This action will permanently delete the template."),onConfirm:()=>{R&&(({id:a,template_name:n})=>{r.A.delete({endpoint:`/api/v1/css_template/${a}`}).then((()=>{S(),C(null),t((0,i.t)("Deleted: %s",n))}),(0,d.JF)((t=>e((0,i.t)("There was an issue deleting %s: %s",n,t)))))})(R)},onHide:()=>C(null),open:!0,title:(0,i.t)("Delete Template?")}),(0,f.Y)(p.A,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected templates?"),onConfirm:a=>{r.A.delete({endpoint:`/api/v1/css_template/?q=${s().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{S(),t(e.message)}),(0,d.JF)((t=>e((0,i.t)("There was an issue deleting the selected templates: %s",t)))))},children:a=>{const n=M?[{key:"delete",name:(0,i.t)("Delete"),onSelect:a,type:"danger"}]:[];return(0,f.Y)(h.A,{className:"css-templates-list-view",columns:K,count:c,data:P,fetchData:_,filters:G,initialSort:F,loading:l,pageSize:25,bulkActions:n,bulkSelectEnabled:E,disableBulkSelect:v,addDangerToast:e,addSuccessToast:t,refreshData:S})}})]})}))},25106:(e,t,a)=>{function n(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{A:()=>n})},52708:(e,t)=>{t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},8960:(e,t,a)=>{var n=a(52708);t.createFirstEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:n.ITEM_TYPES.FIRST_PAGE_LINK,key:n.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:n.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:n.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:n.ITEM_TYPES.NEXT_PAGE_LINK,key:n.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(a,t+1),isActive:t===a}},t.createLastPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:n.ITEM_TYPES.LAST_PAGE_LINK,key:n.ITEM_KEYS.LAST_PAGE_LINK,value:a,isActive:t===a}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:n.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},17991:(e,t)=>{t.createRange=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a}},11447:(e,t,a)=>{var n=a(17991),i=a(8960);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var a=Number(e.currentPage);if(isNaN(a))throw new Error("getPaginationModel(): currentPage should be a number");if(a<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(a>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var r=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var l=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(l))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(l<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var s=Boolean(e.hidePreviousAndNextPageLinks),o=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),c=d?0:1,u=[],g=i.createPageFunctionFactory(e);if(o||u.push(i.createFirstPageLink(e)),s||u.push(i.createPreviousPageLink(e)),1+2*c+2*l+2*r>=t){var p=n.createRange(1,t).map(g);u.push.apply(u,p)}else{var m=r,h=n.createRange(1,m).map(g),P=t+1-r,E=t,b=n.createRange(P,E).map(g),_=Math.min(Math.max(a-l,m+c+1),P-c-2*l-1),f=_+2*l,S=n.createRange(_,f).map(g);if(u.push.apply(u,h),!d){var v=_-1,I=(v===m+1?g:i.createFirstEllipsis)(v);u.push(I)}if(u.push.apply(u,S),!d){var A=f+1,y=(A===P-1?g:i.createSecondEllipsis)(A);u.push(y)}u.push.apply(u,b)}return s||u.push(i.createNextPageLink(e)),o||u.push(i.createLastPageLink(e)),u};var r=a(52708);t.ITEM_TYPES=r.ITEM_TYPES,t.ITEM_KEYS=r.ITEM_KEYS}}]);
//# sourceMappingURL=cc59b6cc5fdc5ee98ba6.chunk.js.map