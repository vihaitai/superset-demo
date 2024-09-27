"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2416],{32416:(e,i,t)=>{t.d(i,{Ay:()=>q,rE:()=>$});var n,r=t(96540),a=t(25929),l=t(46942),o=t.n(l),s=t(95579),d=t(96453),c=t(17437),g=t(58863),p=t(15595),m=t(19129),h=t(90868),u=t(2738),x=t(36053),b=t(12249),v=t(25062),y=t(13130),f=t(2445);!function(e){e.AllCharts="ALL_CHARTS",e.Featured="FEATURED",e.Category="CATEGORY",e.Tags="TAGS"}(n||(n={}));const $=1090,U=(0,s.t)("Other"),C=(0,s.t)("All charts"),Y=(0,s.t)("Featured"),k=[Y,(0,s.t)("ECharts"),(0,s.t)("Advanced-Analytics")],w=d.I4.div`
  ${({isSelectedVizMetadata:e})=>`\n    display: grid;\n    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};\n    // em is used here because the sidebar should be sized to fit the longest standard tag\n    grid-template-columns: minmax(14em, auto) 5fr;\n    grid-template-areas:\n      'sidebar search'\n      'sidebar main'\n      'details details';\n    height: 70vh;\n    overflow: auto;\n  `}
`,z=d.I4.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  line-height: ${({theme:e})=>6*e.gridUnit}px;
`,A=d.I4.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  overflow: auto;

  .ant-collapse .ant-collapse-item {
    .ant-collapse-header {
      font-size: ${({theme:e})=>e.typography.sizes.s}px;
      color: ${({theme:e})=>e.colors.grayscale.base};
      padding-left: ${({theme:e})=>2*e.gridUnit}px;
      padding-bottom: ${({theme:e})=>e.gridUnit}px;
    }
    .ant-collapse-content .ant-collapse-content-box {
      display: flex;
      flex-direction: column;
      padding: 0 ${({theme:e})=>2*e.gridUnit}px;
    }
  }
`,S=d.I4.div`
  grid-area: main;
  overflow-y: auto;
`,I=d.I4.div`
  ${({theme:e})=>`\n    grid-area: search;\n    margin-top: ${3*e.gridUnit}px;\n    margin-bottom: ${e.gridUnit}px;\n    margin-left: ${3*e.gridUnit}px;\n    margin-right: ${3*e.gridUnit}px;\n    .ant-input-affix-wrapper {\n      padding-left: ${2*e.gridUnit}px;\n    }\n  `}
`,F=d.I4.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,E=d.I4.button`
  ${({theme:e})=>`\n    all: unset; // remove default button styles\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    margin: ${e.gridUnit}px 0;\n    padding: 0 ${e.gridUnit}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 2em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n\n    &:focus {\n      outline: initial;\n    }\n\n    &.selected {\n      background-color: ${e.colors.primary.base};\n      color: ${e.colors.primary.light5};\n\n      svg {\n        color: ${e.colors.primary.light5};\n      }\n\n      &:hover {\n        .cancel {\n          visibility: visible;\n        }\n      }\n    }\n\n    & > span[role="img"] {\n      margin-right: ${2*e.gridUnit}px;\n    }\n\n    .cancel {\n      visibility: hidden;\n    }\n  `}
`,M=d.I4.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({theme:e})=>24*e.gridUnit}px
  );
  grid-auto-rows: max-content;
  justify-content: space-evenly;
  grid-gap: ${({theme:e})=>2*e.gridUnit}px;
  justify-items: center;
  // for some reason this padding doesn't seem to apply at the bottom of the container. Why is a mystery.
  padding: ${({theme:e})=>2*e.gridUnit}px;
`,D=e=>c.AH`
  grid-area: details;
  border-top: 1px solid ${e.colors.grayscale.light2};
`,T=e=>c.AH`
  padding: ${4*e.gridUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`,H=d.I4.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.gridUnit}px;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,N=d.I4.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  margin: 0;
`,O=d.I4.div`
  grid-area: examples;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: ${({theme:e})=>4*e.gridUnit}px;

  img {
    height: 100%;
    border-radius: ${({theme:e})=>e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  }
`,j=e=>c.AH`
  cursor: pointer;
  width: ${24*e.gridUnit}px;
  position: relative;

  img {
    min-width: ${24*e.gridUnit}px;
    min-height: ${24*e.gridUnit}px;
    border: 1px solid ${e.colors.grayscale.light2};
    border-radius: ${e.gridUnit}px;
    transition: border-color ${e.transitionTiming};
  }

  &.selected img {
    border: 2px solid ${e.colors.primary.light2};
  }

  &:hover:not(.selected) img {
    border: 1px solid ${e.colors.grayscale.light1};
  }

  .viztype-label {
    margin-top: ${2*e.gridUnit}px;
    text-align: center;
  }
`,V=d.I4.div`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.primary.dark1};\n    box-sizing: border-box;\n    border-radius: ${e.gridUnit}px;\n    background: ${e.colors.grayscale.light5};\n    line-height: ${2.5*e.gridUnit}px;\n    color: ${e.colors.primary.dark1};\n    font-size: ${e.typography.sizes.s}px;\n    font-weight: ${e.typography.weights.bold};\n    text-align: center;\n    padding: ${.5*e.gridUnit}px ${e.gridUnit}px;\n    cursor: pointer;\n\n    div {\n      transform: scale(0.83,0.83);\n    }\n  `}
`,R=d.I4.div`
  position: absolute;
  right: ${({theme:e})=>e.gridUnit}px;
  top: ${({theme:e})=>19*e.gridUnit}px;
`,L=d.I4.div`
  display: inline-block !important;
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`,G=({entry:e,selectedViz:i,setSelectedViz:t,onDoubleClick:n})=>{const r=(0,d.DP)(),{key:a,value:l}=e,o=i===e.key;return(0,f.FD)("div",{role:"button",css:j(r),tabIndex:0,className:o?"selected":"",onClick:()=>t(a),onDoubleClick:n,children:[(0,f.Y)("img",{alt:l.name,width:"100%",className:"viztype-selector "+(o?"selected":""),src:l.thumbnail}),(0,f.Y)("div",{className:"viztype-label",children:l.name}),l.label&&(0,f.Y)(R,{children:(0,f.Y)(V,{children:(0,f.Y)("div",{children:(0,s.t)(l.label)})})})]})},P=({vizEntries:e,...i})=>(0,f.Y)(M,{children:e.map((e=>(0,f.Y)(G,{...i,entry:e},e.key)))}),B=({selector:e,sectionId:i,icon:t,isSelected:n,onClick:a,className:l})=>{const s=(0,r.useRef)(null);return(0,r.useEffect)((()=>{n&&queueMicrotask((()=>(0,y.A)(s.current,{behavior:"smooth",scrollMode:"if-needed"})))}),[]),(0,f.FD)(E,{ref:s,name:e,className:o()(l,n&&"selected"),onClick:()=>a(e,i),children:[t,e]},e)},K=(e,i)=>i===e.category||i===U&&null==e.category||(e.tags||[]).indexOf(i)>-1;function q(e){var i,t;const{selectedViz:l,onChange:o,onDoubleClick:d,className:y,denyList:$}=e,{mountedPluginMetadata:E}=(0,x.Q)(),M=(0,r.useRef)(),[j,R]=(0,r.useState)(""),[G,q]=(0,r.useState)(!0),Q=G&&!!j,W=l?E[l]:null,X=(0,r.useMemo)((()=>Object.entries(E).map((([e,i])=>({key:e,value:i}))).filter((({key:e})=>!$.includes(e))).filter((({value:e})=>(0,v.px)(e.behaviors||[])&&!e.deprecated)).sort(((e,i)=>e.value.name.localeCompare(i.value.name)))),[E,$]),_=(0,r.useMemo)((()=>{const e={};return X.forEach((i=>{const t=i.value.category||U;e[t]||(e[t]=[]),e[t].push(i)})),e}),[X]),J=(0,r.useMemo)((()=>Object.keys(_).sort(((e,i)=>e===U?1:i===U?-1:e.localeCompare(i)))),[_]),Z=(0,r.useMemo)((()=>{const e={};return X.forEach((i=>{(i.value.tags||[]).forEach((t=>{e[t]||(e[t]=[]),e[t].push(i)}))})),e}),[X]),ee=(0,r.useMemo)((()=>Object.keys(Z).sort(((e,i)=>e.localeCompare(i))).filter((e=>-1===k.indexOf(e)))),[Z]),ie=(0,r.useMemo)((()=>X.sort(((e,i)=>e.value.name.localeCompare(i.value.name)))),[X]),[te,ne]=(0,r.useState)((()=>(null==W?void 0:W.category)||Y)),[re,ae]=(0,r.useState)((()=>null!=W&&W.category?n.Category:n.Featured)),le=(0,r.useMemo)((()=>new a.A(X,{ignoreLocation:!0,threshold:.3,keys:[{name:"value.name",weight:4},{name:"value.tags",weight:2},"value.description"]})),[X]),oe=(0,r.useMemo)((()=>""===j.trim()?[]:le.search(j).map((e=>e.item)).sort(((e,i)=>{var t,n;const r=null==(t=e.value)?void 0:t.label,a=null==(n=i.value)?void 0:n.label,l=r&&g.l7[r]?g.l7[r].weight:0;return(a&&g.l7[a]?g.l7[a].weight:0)-l}))),[j,le]),se=(0,r.useCallback)((()=>{q(!0)}),[]),de=(0,r.useCallback)((e=>R(e.target.value)),[]),ce=(0,r.useCallback)((()=>{q(!1),R(""),M.current.blur()}),[]),ge=(0,r.useCallback)(((e,i)=>{G&&ce(),ne(e),ae(i);const t=W&&K(W,e);e===te||t||o(null)}),[ce,G,te,W,o]),pe=(0,r.useMemo)((()=>({[n.Category]:{title:(0,s.t)("Category"),icon:(0,f.Y)(b.A.Category,{iconSize:"m"}),selectors:J},[n.Tags]:{title:(0,s.t)("Tags"),icon:(0,f.Y)(b.A.Tags,{iconSize:"m"}),selectors:ee}})),[J,ee]);return(0,f.FD)(w,{className:y,isSelectedVizMetadata:Boolean(W),children:[(0,f.FD)(A,{children:[(0,f.Y)(B,{css:({gridUnit:e})=>c.AH`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:n.AllCharts,selector:C,icon:(0,f.Y)(b.A.Ballot,{iconSize:"m"}),isSelected:!Q&&C===te&&n.AllCharts===re,onClick:ge}),(0,f.Y)(B,{css:({gridUnit:e})=>c.AH`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:n.Featured,selector:Y,icon:(0,f.Y)(b.A.FireOutlined,{iconSize:"m"}),isSelected:!Q&&Y===te&&n.Featured===re,onClick:ge}),(0,f.Y)(p.f5,{expandIconPosition:"right",ghost:!0,defaultActiveKey:n.Category,children:Object.keys(pe).map((e=>{const i=pe[e];return(0,f.Y)(p.f5.Panel,{header:(0,f.Y)("span",{className:"header",children:i.title}),children:i.selectors.map((t=>(0,f.Y)(B,{selector:t,sectionId:e,icon:i.icon,isSelected:!Q&&t===te&&e===re,onClick:ge},t)))},e)}))})]}),(0,f.Y)(I,{children:(0,f.Y)(h.pd,{type:"text",ref:M,value:j,placeholder:(0,s.t)("Search all charts"),onChange:de,onFocus:se,prefix:(0,f.Y)(F,{children:(0,f.Y)(b.A.Search,{iconSize:"m"})}),suffix:(0,f.Y)(F,{children:j&&(0,f.Y)(b.A.XLarge,{iconSize:"m",onClick:ce})})})}),(0,f.Y)(S,{children:(0,f.Y)(P,{vizEntries:Q?oe:te===C&&re===n.AllCharts?ie:te===Y&&re===n.Featured&&Z[Y]?Z[Y]:re===n.Category&&_[te]?_[te]:re===n.Tags&&Z[te]?Z[te]:[],selectedViz:l,setSelectedViz:o,onDoubleClick:d})}),W?(0,f.Y)("div",{css:e=>[D(e),T(e)],children:(0,f.FD)(f.FK,{children:[(0,f.FD)(z,{css:c.AH`
                grid-area: viz-name;
                position: relative;
              `,children:[null==W?void 0:W.name,(null==W?void 0:W.label)&&(0,f.Y)(m.m,{id:"viz-badge-tooltip",placement:"top",title:null!=(i=W.labelExplanation)?i:g.HE[W.label],children:(0,f.Y)(L,{children:(0,f.Y)(V,{children:(0,f.Y)("div",{children:(0,s.t)(W.label)})})})})]}),(0,f.Y)(H,{children:null==W?void 0:W.tags.map((e=>(0,f.Y)(u.A,{children:e},e)))}),(0,f.Y)(N,{children:(null==W?void 0:W.description)||(0,s.t)("No description available.")}),(0,f.Y)(z,{css:c.AH`
                grid-area: examples-header;
              `,children:(0,s.t)("Examples")}),(0,f.Y)(O,{children:(null!=W&&null!=(t=W.exampleGallery)&&t.length?W.exampleGallery:[{url:null==W?void 0:W.thumbnail,caption:null==W?void 0:W.name}]).map((e=>(0,f.Y)("img",{src:e.url,alt:e.caption,title:e.caption},e.url)))})]})}):null]})}}}]);
//# sourceMappingURL=bb0a274b4578f08eca39.chunk.js.map