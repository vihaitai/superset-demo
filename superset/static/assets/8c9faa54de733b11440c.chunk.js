"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8968],{12397:(e,t,a)=>{a.d(t,{U:()=>l});var s=a(19129),r=a(25106),n=a(95579),i=a(2445);const l=({user:e,date:t})=>{const a=(0,i.Y)("span",{className:"no-wrap",children:t});if(e){const t=(0,r.A)(e),l=(0,n.t)("Modified by: %s",t);return(0,i.Y)(s.m,{title:l,placement:"bottom",children:a})}return a}},74354:(e,t,a)=>{a.d(t,{A:()=>m});var s=a(96540),r=a(96453),n=a(95579),i=a(46920),l=a(85861),o=a(15595),d=a(50500),c=a(31383),u=a(2445);const h=r.I4.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,p=r.I4.div`
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
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,onModelImport:m,show:g,onHide:y,passwordFields:b=[],setPasswordFields:v=(()=>{}),sshTunnelPasswordFields:f=[],setSSHTunnelPasswordFields:S=(()=>{}),sshTunnelPrivateKeyFields:w=[],setSSHTunnelPrivateKeyFields:x=(()=>{}),sshTunnelPrivateKeyPasswordFields:A=[],setSSHTunnelPrivateKeyPasswordFields:_=(()=>{})})=>{const[T,Y]=(0,s.useState)(!0),[k,q]=(0,s.useState)({}),[D,F]=(0,s.useState)(!1),[C,$]=(0,s.useState)(!1),[N,P]=(0,s.useState)([]),[I,H]=(0,s.useState)(!1),[E,L]=(0,s.useState)(),[K,O]=(0,s.useState)({}),[R,U]=(0,s.useState)({}),[z,Q]=(0,s.useState)({}),B=()=>{P([]),v([]),q({}),F(!1),$(!1),H(!1),L(""),S([]),x([]),_([]),O({}),U({}),Q({})},{state:{alreadyExists:M,passwordsNeeded:j,sshPasswordNeeded:J,sshPrivateKeyNeeded:W,sshPrivateKeyPasswordNeeded:V},importResource:G}=(0,d.bN)(e,t,(e=>{L(e)}));(0,s.useEffect)((()=>{v(j),j.length>0&&H(!1)}),[j,v]),(0,s.useEffect)((()=>{F(M.length>0),M.length>0&&H(!1)}),[M,F]),(0,s.useEffect)((()=>{S(J),J.length>0&&H(!1)}),[J,S]),(0,s.useEffect)((()=>{x(W),W.length>0&&H(!1)}),[W,x]),(0,s.useEffect)((()=>{_(V),V.length>0&&H(!1)}),[V,_]);return T&&g&&Y(!1),(0,u.FD)(l.A,{name:"model",className:"import-model-modal",disablePrimaryButton:0===N.length||D&&!C||I,onHandledPrimaryAction:()=>{var e;(null==(e=N[0])?void 0:e.originFileObj)instanceof File&&(H(!0),G(N[0].originFileObj,k,K,R,z,C).then((e=>{e&&(B(),m())})))},onHide:()=>{Y(!0),y(),B()},primaryButtonName:D?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:D?"danger":"primary",width:"750px",show:g,title:(0,u.Y)("h4",{children:(0,n.t)("Import %s",t)}),children:[(0,u.Y)(p,{children:(0,u.Y)(o._O,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:N,onChange:e=>{P([{...e.file,status:"done"}])},onRemove:e=>(P(N.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:I,children:(0,u.Y)(i.A,{loading:I,children:(0,n.t)("Select file")})})}),E&&(0,u.Y)(c.A,{errorMessage:E,showDbInstallInstructions:b.length>0||f.length>0||w.length>0||A.length>0}),(()=>{if(0===b.length&&0===f.length&&0===w.length&&0===A.length)return null;const e=[...new Set([...b,...f,...w,...A])];return(0,u.FD)(u.FK,{children:[(0,u.Y)("h5",{children:(0,n.t)("Database passwords")}),(0,u.Y)(h,{children:a}),e.map((e=>(0,u.FD)(u.FK,{children:[(null==b?void 0:b.indexOf(e))>=0&&(0,u.FD)(p,{children:[(0,u.FD)("div",{className:"control-label",children:[(0,n.t)("%s PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required",children:"*"})]}),(0,u.Y)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:k[e],onChange:t=>q({...k,[e]:t.target.value})})]},`password-for-${e}`),(null==f?void 0:f.indexOf(e))>=0&&(0,u.FD)(p,{children:[(0,u.FD)("div",{className:"control-label",children:[(0,n.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required",children:"*"})]}),(0,u.Y)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:K[e],onChange:t=>O({...K,[e]:t.target.value})})]},`ssh_tunnel_password-for-${e}`),(null==w?void 0:w.indexOf(e))>=0&&(0,u.FD)(p,{children:[(0,u.FD)("div",{className:"control-label",children:[(0,n.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,u.Y)("span",{className:"required",children:"*"})]}),(0,u.Y)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:R[e],onChange:t=>U({...R,[e]:t.target.value})})]},`ssh_tunnel_private_key-for-${e}`),(null==A?void 0:A.indexOf(e))>=0&&(0,u.FD)(p,{children:[(0,u.FD)("div",{className:"control-label",children:[(0,n.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,u.Y)("span",{className:"required",children:"*"})]}),(0,u.Y)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:z[e],onChange:t=>Q({...z,[e]:t.target.value})})]},`ssh_tunnel_private_key_password-for-${e}`)]})))]})})(),D?(0,u.Y)(u.FK,{children:(0,u.FD)(p,{children:[(0,u.Y)("div",{className:"confirm-overwrite",children:r}),(0,u.Y)("div",{className:"control-label",children:(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))}),(0,u.Y)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const s=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";$(s.toUpperCase()===(0,n.t)("OVERWRITE"))}})]})}):null]})}},83691:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(96453),r=a(19129),n=a(12249),i=a(2445);const l=s.I4.span`
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
`,o=s.I4.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,i.Y)(l,{className:"actions",children:e.map(((e,t)=>{const a=n.A[e.icon];return e.tooltip?(0,i.Y)(r.m,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,children:(0,i.Y)(o,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,i.Y)(a,{})})},t):(0,i.Y)(o,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,i.Y)(a,{})},t)}))})}},10044:(e,t,a)=>{a.d(t,{A:()=>n});var s=a(16146),r=a(2445);const n=e=>(0,r.Y)(s.A,{...e})},25143:(e,t,a)=>{a.d(t,{S:()=>s.A});var s=a(46740);a(16707)},93514:(e,t,a)=>{a.d(t,{F:()=>r});var s=a(95579);const r={name:(0,s.t)("SQL"),tabs:[{name:"Saved queries",label:(0,s.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,s.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]}},11188:(e,t,a)=>{a.d(t,{A:()=>g});var s=a(96453),r=a(95579),n=a(78360),i=a(69633),l=a(8143),o=a(69172),d=a(10286),c=a(45738),u=a(12249),h=a(73135),p=a(2445);c.A.registerLanguage("sql",n.A),c.A.registerLanguage("markdown",l.A),c.A.registerLanguage("html",i.A),c.A.registerLanguage("json",o.A);const m=s.I4.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`;function g({addDangerToast:e,addSuccessToast:t,children:a,...s}){return(0,p.FD)(m,{children:[(0,p.Y)(u.A.Copy,{tabIndex:0,role:"button",onClick:s=>{var n;s.preventDefault(),s.currentTarget.blur(),n=a,(0,h.A)((()=>Promise.resolve(n))).then((()=>{t&&t((0,r.t)("SQL Copied!"))})).catch((()=>{e&&e((0,r.t)("Sorry, your browser does not support copying."))}))}}),(0,p.Y)(c.A,{style:d.A,...s,children:a})]})}},14318:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(96540);function r({queries:e,fetchData:t,currentQueryId:a}){const r=e.findIndex((e=>e.id===a)),[n,i]=(0,s.useState)(r),[l,o]=(0,s.useState)(!1),[d,c]=(0,s.useState)(!1);function u(){o(0===n),c(n===e.length-1)}function h(a){const s=n+(a?-1:1);s>=0&&s<e.length&&(t(e[s].id),i(s),u())}return(0,s.useEffect)((()=>{u()})),{handleKeyPress:function(t){n>=0&&n<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),h(!1)):"ArrowUp"!==t.key&&"j"!==t.key||(t.preventDefault(),h(!0)))},handleDataChange:h,disablePrevious:l,disableNext:d}}},67733:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var s=a(95579),r=a(96453),n=a(35742),i=a(27366),l=a(96540),o=a(61574),d=a(71519),c=a(58561),u=a.n(c),h=a(30703),p=a(61225),m=a(10044),g=a(5261),y=a(50500),b=a(63358),v=a(4780),f=a(51713),S=a(39854),w=a(17444),x=a(37020),A=a(83691),_=a(25143),T=a(19129),Y=a(93514),k=a(23193),q=a(73135),D=a(74354),F=a(12397),C=a(3932),$=a(12249),N=a(85861),P=a(46920),I=a(11188),H=a(14318),E=a(2445);const L=r.I4.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
`,K=r.I4.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 16px 0;
`,O=(0,r.I4)(N.A)`
  .ant-modal-content {
  }

  .ant-modal-body {
    padding: 24px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`,R=(0,g.Ay)((({fetchData:e,onHide:t,openInSqlLab:a,queries:r,savedQuery:n,show:i,addDangerToast:l,addSuccessToast:o})=>{const{handleKeyPress:d,handleDataChange:c,disablePrevious:u,disableNext:h}=(0,H.A)({queries:r,currentQueryId:n.id,fetchData:e});return(0,E.Y)("div",{role:"none",onKeyUp:d,children:(0,E.FD)(O,{onHide:t,show:i,title:(0,s.t)("Query preview"),footer:(0,E.FD)(E.FK,{children:[(0,E.Y)(P.A,{disabled:u,onClick:()=>c(!0),children:(0,s.t)("Previous")},"previous-saved-query"),(0,E.Y)(P.A,{disabled:h,onClick:()=>c(!1),children:(0,s.t)("Next")},"next-saved-query"),(0,E.Y)(P.A,{buttonStyle:"primary",onClick:({metaKey:e})=>a(n.id,Boolean(e)),children:(0,s.t)("Open in SQL Lab")},"open-in-sql-lab")]}),children:[(0,E.Y)(L,{children:(0,s.t)("Query name")}),(0,E.Y)(K,{children:n.label}),(0,E.Y)(I.A,{language:"sql",addDangerToast:l,addSuccessToast:o,children:n.sql||""})]})})}));var U=a(84666);const z=(0,s.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),Q=(0,s.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),B=r.I4.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,M=r.I4.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,j=(0,g.Ay)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:r,resourceCount:c,resourceCollection:g,bulkSelectEnabled:N},hasPerm:P,fetchData:I,toggleBulkSelect:H,refreshData:L}=(0,y.RU)("saved_query",(0,s.t)("Saved queries"),e),{roles:K}=(0,p.d4)((e=>e.user)),O=(0,U.L)("can_read","Tag",K),[j,J]=(0,l.useState)(null),[W,V]=(0,l.useState)(null),[G,X]=(0,l.useState)(!1),[Z,ee]=(0,l.useState)([]),[te,ae]=(0,l.useState)(!1),[se,re]=(0,l.useState)([]),[ne,ie]=(0,l.useState)([]),[le,oe]=(0,l.useState)([]),de=(0,o.W6)(),ce=P("can_write"),ue=P("can_write"),he=P("can_write"),pe=P("can_export"),me=(0,l.useCallback)((t=>{n.A.get({endpoint:`/api/v1/saved_query/${t}`}).then((({json:e={}})=>{V({...e.result})}),(0,h.JF)((t=>e((0,s.t)("There was an issue previewing the selected query %s",t)))))}),[e]),ge={activeChild:"Saved queries",...Y.F},ye=[];he&&ye.push({name:(0,s.t)("Bulk select"),onClick:H,buttonStyle:"secondary"}),ye.push({name:(0,E.FD)(d.N_,{to:"/sqllab?new=true",children:[(0,E.Y)("i",{className:"fa fa-plus"})," ",(0,s.t)("Query")]}),buttonStyle:"primary"}),ce&&ye.push({name:(0,E.Y)(T.m,{id:"import-tooltip",title:(0,s.t)("Import queries"),placement:"bottomRight",children:(0,E.Y)($.A.Import,{})}),buttonStyle:"link",onClick:()=>{X(!0)}}),ge.buttons=ye;const be=(e,t)=>{t?window.open(`/sqllab?savedQueryId=${e}`):de.push(`/sqllab?savedQueryId=${e}`)},ve=(0,l.useCallback)((a=>{(0,q.A)((()=>Promise.resolve(`${window.location.origin}/sqllab?savedQueryId=${a}`))).then((()=>{t((0,s.t)("Link Copied!"))})).catch((()=>{e((0,s.t)("Sorry, your browser does not support copying."))}))}),[e,t]),fe=e=>{const t=e.map((({id:e})=>e));(0,v.A)("saved_query",t,(()=>{ae(!1)})),ae(!0)},Se=[{id:"changed_on_delta_humanized",desc:!0}],we=(0,l.useMemo)((()=>[{accessor:"label",Header:(0,s.t)("Name")},{accessor:"description",Header:(0,s.t)("Description")},{accessor:"database.database_name",Header:(0,s.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,s.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=(null==t?void 0:t.shift())||"";return t.length?(0,E.FD)(B,{children:[(0,E.Y)("span",{children:a}),(0,E.Y)(m.A,{placement:"right",title:(0,s.t)("TABLES"),trigger:"click",content:(0,E.Y)(E.FK,{children:t.map((e=>(0,E.Y)(M,{children:e},e)))}),children:(0,E.FD)("span",{className:"count",children:["(+",t.length,")"]})})]}):a},accessor:"sql_tables",Header:(0,s.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:({row:{original:{tags:e=[]}}})=>(0,E.Y)(_.S,{tags:e.filter((e=>1===e.type))}),Header:(0,s.t)("Tags"),accessor:"tags",disableSortBy:!0,hidden:!(0,i.G7)(i.TO.TaggingSystem)},{Cell:({row:{original:{changed_by:e,changed_on_delta_humanized:t}}})=>(0,E.Y)(F.U,{user:e,date:t}),Header:(0,s.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>{const t=[{label:"preview-action",tooltip:(0,s.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{me(e.id)}},ue&&{label:"edit-action",tooltip:(0,s.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:({metaKey:t})=>be(e.id,Boolean(t))},{label:"copy-action",tooltip:(0,s.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>ve(e.id)},pe&&{label:"export-action",tooltip:(0,s.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>fe([e])},he&&{label:"delete-action",tooltip:(0,s.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>J(e)}].filter((e=>!!e));return(0,E.Y)(A.A,{actions:t})},Header:(0,s.t)("Actions"),id:"actions",disableSortBy:!0},{accessor:k.H.ChangedBy,hidden:!0}]),[he,ue,pe,ve,me]),xe=(0,l.useMemo)((()=>[{Header:(0,s.t)("Search"),id:"label",key:"search",input:"search",operator:S.t.AllText,toolTipDescription:(0,s.t)("Searches all text fields: Name, Description, Database & Schema")},{Header:(0,s.t)("Database"),key:"database",id:"database",input:"select",operator:S.t.RelationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,h.u1)("saved_query","database",(0,h.JF)((t=>e((0,s.t)("An error occurred while fetching dataset datasource values: %s",t))))),paginate:!0},{Header:(0,s.t)("Schema"),id:"schema",key:"schema",input:"select",operator:S.t.Equals,unfilteredLabel:"All",fetchSelects:(0,h.$C)("saved_query","schema",(0,h.JF)((t=>e((0,s.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},...(0,i.G7)(i.TO.TaggingSystem)&&O?[{Header:(0,s.t)("Tag"),id:"tags",key:"tags",input:"select",operator:S.t.SavedQueryTagById,fetchSelects:C.m}]:[],{Header:(0,s.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:S.t.RelationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,h.u1)("saved_query","changed_by",(0,h.JF)((e=>(0,s.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[e]);return(0,E.FD)(E.FK,{children:[(0,E.Y)(f.A,{...ge}),j&&(0,E.Y)(x.A,{description:(0,s.t)("This action will permanently delete the saved query."),onConfirm:()=>{j&&(({id:a,label:r})=>{n.A.delete({endpoint:`/api/v1/saved_query/${a}`}).then((()=>{L(),J(null),t((0,s.t)("Deleted: %s",r))}),(0,h.JF)((t=>e((0,s.t)("There was an issue deleting %s: %s",r,t)))))})(j)},onHide:()=>J(null),open:!0,title:(0,s.t)("Delete Query?")}),W&&(0,E.Y)(R,{fetchData:me,onHide:()=>V(null),savedQuery:W,queries:g,openInSqlLab:be,show:!0}),(0,E.Y)(b.A,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected queries?"),onConfirm:a=>{n.A.delete({endpoint:`/api/v1/saved_query/?q=${u().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{L(),t(e.message)}),(0,h.JF)((t=>e((0,s.t)("There was an issue deleting the selected queries: %s",t)))))},children:a=>{const n=[];return he&&n.push({key:"delete",name:(0,s.t)("Delete"),onSelect:a,type:"danger"}),pe&&n.push({key:"export",name:(0,s.t)("Export"),type:"primary",onSelect:fe}),(0,E.Y)(S.A,{className:"saved_query-list-view",columns:we,count:c,data:g,fetchData:I,filters:xe,initialSort:Se,loading:r,pageSize:25,bulkActions:n,addSuccessToast:t,addDangerToast:e,bulkSelectEnabled:N,disableBulkSelect:H,highlightRowId:null==W?void 0:W.id,enableBulkTag:!0,bulkTagResourceName:"query",refreshData:L})}}),(0,E.Y)(D.A,{resourceName:"saved_query",resourceLabel:(0,s.t)("queries"),passwordsNeededMessage:z,confirmOverwriteMessage:Q,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{X(!1),L(),t((0,s.t)("Query imported"))},show:G,onHide:()=>{X(!1)},passwordFields:Z,setPasswordFields:ee,sshTunnelPasswordFields:se,setSSHTunnelPasswordFields:re,sshTunnelPrivateKeyFields:ne,setSSHTunnelPrivateKeyFields:ie,sshTunnelPrivateKeyPasswordFields:le,setSSHTunnelPrivateKeyPasswordFields:oe}),te&&(0,E.Y)(w.A,{})]})}))},25106:(e,t,a)=>{function s(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{A:()=>s})}}]);
//# sourceMappingURL=8c9faa54de733b11440c.chunk.js.map