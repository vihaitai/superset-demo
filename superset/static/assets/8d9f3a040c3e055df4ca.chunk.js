"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9392],{27707:(t,e,r)=>{r.d(e,{A:()=>nt});var o=r(96540),n=r(46942),a=r.n(n);function i(t){var e=t.children,r=t.prefixCls,n=t.id,i=t.overlayInnerStyle,s=t.className,l=t.style;return o.createElement("div",{className:a()("".concat(r,"-content"),s),style:l},o.createElement("div",{className:"".concat(r,"-inner"),id:n,role:"tooltip",style:i},"function"==typeof e?e():e))}var s=r(58168),l=r(89379),c=r(80045),p=r(72947),u={shiftX:64,adjustY:1},f={adjustX:1,shiftY:!0},m=[0,0],d={left:{points:["cr","cl"],overflow:f,offset:[-4,0],targetOffset:m},right:{points:["cl","cr"],overflow:f,offset:[4,0],targetOffset:m},top:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:m},bottom:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:m},topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:m},leftTop:{points:["tr","tl"],overflow:f,offset:[-4,0],targetOffset:m},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:m},rightTop:{points:["tl","tr"],overflow:f,offset:[4,0],targetOffset:m},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:m},rightBottom:{points:["bl","br"],overflow:f,offset:[4,0],targetOffset:m},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:m},leftBottom:{points:["br","bl"],overflow:f,offset:[-4,0],targetOffset:m}},g=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],h=function(t,e){var r=t.overlayClassName,n=t.trigger,a=void 0===n?["hover"]:n,u=t.mouseEnterDelay,f=void 0===u?0:u,m=t.mouseLeaveDelay,h=void 0===m?.1:m,v=t.overlayStyle,b=t.prefixCls,y=void 0===b?"rc-tooltip":b,w=t.children,O=t.onVisibleChange,S=t.afterVisibleChange,z=t.transitionName,C=t.animation,$=t.motion,x=t.placement,A=void 0===x?"right":x,k=t.align,j=void 0===k?{}:k,E=t.destroyTooltipOnHide,T=void 0!==E&&E,P=t.defaultVisible,_=t.getTooltipContainer,M=t.overlayInnerStyle,R=(t.arrowContent,t.overlay),D=t.id,I=t.showArrow,N=void 0===I||I,B=(0,c.A)(t,g),L=(0,o.useRef)(null);(0,o.useImperativeHandle)(e,(function(){return L.current}));var V=(0,l.A)({},B);return"visible"in t&&(V.popupVisible=t.visible),o.createElement(p.A,(0,s.A)({popupClassName:r,prefixCls:y,popup:function(){return o.createElement(i,{key:"content",prefixCls:y,id:D,overlayInnerStyle:M},R)},action:a,builtinPlacements:d,popupPlacement:A,ref:L,popupAlign:j,getPopupContainer:_,onPopupVisibleChange:O,afterPopupVisibleChange:S,popupTransitionName:z,popupAnimation:C,popupMotion:$,defaultPopupVisible:P,autoDestroy:T,mouseLeaveDelay:h,popupStyle:v,mouseEnterDelay:f,arrow:N},V),w)};const v=(0,o.forwardRef)(h);var b=r(12533),y=r(79734);const w=o.createContext(void 0),O=100,S={Modal:O,Drawer:O,Popover:O,Popconfirm:O,Tooltip:O,Tour:O},z={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};var C=r(8889),$=r(87785);const x=(t,e,r)=>{const{sizePopupArrow:o,arrowPolygon:n,arrowPath:a,arrowShadowWidth:i,borderRadiusXS:s,calc:l}=t;return{pointerEvents:"none",width:o,height:o,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:o,height:l(o).div(2).equal(),background:e,clipPath:{_multi_value_:!0,value:[n,a]},content:'""'},"&::after":{content:'""',position:"absolute",width:i,height:i,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${(0,$.zA)(s)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:r,zIndex:0,background:"transparent"}}},A=8;function k(t){const{contentRadius:e,limitVerticalRadius:r}=t,o=e>12?e+2:12;return{arrowOffsetHorizontal:o,arrowOffsetVertical:r?A:o}}function j(t,e){return t?e:{}}function E(t,e,r){const{componentCls:o,boxShadowPopoverArrow:n,arrowOffsetVertical:a,arrowOffsetHorizontal:i}=t,{arrowDistance:s=0,arrowPlacement:l={left:!0,right:!0,top:!0,bottom:!0}}=r||{};return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({[`${o}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},x(t,e,n)),{"&:before":{background:e}})]},j(!!l.top,{[[`&-placement-top > ${o}-arrow`,`&-placement-topLeft > ${o}-arrow`,`&-placement-topRight > ${o}-arrow`].join(",")]:{bottom:s,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${o}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft > ${o}-arrow`]:{left:{_skip_check_:!0,value:i}},[`&-placement-topRight > ${o}-arrow`]:{right:{_skip_check_:!0,value:i}}})),j(!!l.bottom,{[[`&-placement-bottom > ${o}-arrow`,`&-placement-bottomLeft > ${o}-arrow`,`&-placement-bottomRight > ${o}-arrow`].join(",")]:{top:s,transform:"translateY(-100%)"},[`&-placement-bottom > ${o}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft > ${o}-arrow`]:{left:{_skip_check_:!0,value:i}},[`&-placement-bottomRight > ${o}-arrow`]:{right:{_skip_check_:!0,value:i}}})),j(!!l.left,{[[`&-placement-left > ${o}-arrow`,`&-placement-leftTop > ${o}-arrow`,`&-placement-leftBottom > ${o}-arrow`].join(",")]:{right:{_skip_check_:!0,value:s},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${o}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${o}-arrow`]:{top:a},[`&-placement-leftBottom > ${o}-arrow`]:{bottom:a}})),j(!!l.right,{[[`&-placement-right > ${o}-arrow`,`&-placement-rightTop > ${o}-arrow`,`&-placement-rightBottom > ${o}-arrow`].join(",")]:{left:{_skip_check_:!0,value:s},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${o}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${o}-arrow`]:{top:a},[`&-placement-rightBottom > ${o}-arrow`]:{bottom:a}}))}}const T={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},P={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},_=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);var M=r(4320),R=r(19127),D=r(22553);r(82546);const I=o.createContext(null),N=t=>{let{children:e}=t;return o.createElement(I.Provider,{value:null},e)};var B=r(1051),L=r(34598);const V=new $.Mo("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),X=new $.Mo("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),Y=new $.Mo("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),H=new $.Mo("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),K=new $.Mo("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),F=new $.Mo("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),U={zoom:{inKeyframes:V,outKeyframes:X},"zoom-big":{inKeyframes:Y,outKeyframes:H},"zoom-big-fast":{inKeyframes:Y,outKeyframes:H},"zoom-left":{inKeyframes:new $.Mo("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),outKeyframes:new $.Mo("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}})},"zoom-right":{inKeyframes:new $.Mo("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),outKeyframes:new $.Mo("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}})},"zoom-up":{inKeyframes:K,outKeyframes:F},"zoom-down":{inKeyframes:new $.Mo("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),outKeyframes:new $.Mo("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}})}},W=(t,e)=>{const{antCls:r}=t,o=`${r}-${e}`,{inKeyframes:n,outKeyframes:a}=U[e];return[(0,L.b)(o,n,a,"zoom-big-fast"===e?t.motionDurationFast:t.motionDurationMid),{[`\n        ${o}-enter,\n        ${o}-appear\n      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:t.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${o}-leave`]:{animationTimingFunction:t.motionEaseInOutCirc}}]};var Z=r(9906),q=r(18750),G=r(55302);const Q=t=>{const{componentCls:e,tooltipMaxWidth:r,tooltipColor:o,tooltipBg:n,tooltipBorderRadius:a,zIndexPopup:i,controlHeight:s,boxShadowSecondary:l,paddingSM:c,paddingXS:p}=t;return[{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,B.dF)(t)),{position:"absolute",zIndex:i,display:"block",width:"max-content",maxWidth:r,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":n,[`${e}-inner`]:{minWidth:"1em",minHeight:s,padding:`${(0,$.zA)(t.calc(c).div(2).equal())} ${(0,$.zA)(p)}`,color:o,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:n,borderRadius:a,boxShadow:l,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${e}-inner`]:{borderRadius:t.min(a,A)}},[`${e}-content`]:{position:"relative"}}),(0,Z.A)(t,((t,r)=>{let{darkColor:o}=r;return{[`&${e}-${t}`]:{[`${e}-inner`]:{backgroundColor:o},[`${e}-arrow`]:{"--antd-arrow-background-color":o}}}}))),{"&-rtl":{direction:"rtl"}})},E(t,"var(--antd-arrow-background-color)"),{[`${e}-pure`]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow}}]},J=t=>Object.assign(Object.assign({zIndexPopup:t.zIndexPopupBase+70},k({contentRadius:t.borderRadius,limitVerticalRadius:!0})),function(t){const{sizePopupArrow:e,borderRadiusXS:r,borderRadiusOuter:o}=t,n=e/2,a=n,i=1*o/Math.sqrt(2),s=n-o*(1-1/Math.sqrt(2)),l=n-r*(1/Math.sqrt(2)),c=o*(Math.sqrt(2)-1)+r*(1/Math.sqrt(2)),p=2*n-l,u=c,f=2*n-i,m=s,d=2*n-0,g=a,h=n*Math.sqrt(2)+o*(Math.sqrt(2)-2),v=o*(Math.sqrt(2)-1);return{arrowShadowWidth:h,arrowPath:`path('M 0 ${a} A ${o} ${o} 0 0 0 ${i} ${s} L ${l} ${c} A ${r} ${r} 0 0 1 ${p} ${u} L ${f} ${m} A ${o} ${o} 0 0 0 ${d} ${g} Z')`,arrowPolygon:`polygon(${v}px 100%, 50% ${v}px, ${2*n-v}px 100%, ${v}px 100%)`}}((0,q.h1)(t,{borderRadiusOuter:Math.min(t.borderRadiusOuter,4)}))),tt=function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(0,G.OF)("Tooltip",(t=>{const{borderRadius:e,colorTextLightSolid:r,colorBgSpotlight:o}=t,n=(0,q.h1)(t,{tooltipMaxWidth:250,tooltipColor:r,tooltipBorderRadius:e,tooltipBg:o});return[Q(n),W(t,"zoom-big-fast")]}),J,{resetStyle:!1,injectStyle:e})(t)};var et=r(60455);function rt(t,e){const r=(0,et.nP)(e),o=a()({[`${t}-${e}`]:e&&r}),n={},i={};return e&&!r&&(n.background=e,i["--antd-arrow-background-color"]=e),{className:o,overlayStyle:n,arrowStyle:i}}const ot=o.forwardRef(((t,e)=>{var r,n;const{prefixCls:i,openClassName:s,getTooltipContainer:l,overlayClassName:c,color:p,overlayInnerStyle:u,children:f,afterOpenChange:m,afterVisibleChange:d,destroyTooltipOnHide:g,arrow:h=!0,title:O,overlay:$,builtinPlacements:x,arrowPointAtCenter:A=!1,autoAdjustOverflow:j=!0}=t,E=!!h,[,I]=(0,y.Ay)(),{getPopupContainer:B,getPrefixCls:L,direction:V}=o.useContext(D.QO),X=(0,R.rJ)("Tooltip"),Y=o.useRef(null),H=()=>{var t;null===(t=Y.current)||void 0===t||t.forceAlign()};o.useImperativeHandle(e,(()=>{var t;return{forceAlign:H,forcePopupAlign:()=>{X.deprecated(!1,"forcePopupAlign","forceAlign"),H()},nativeElement:null===(t=Y.current)||void 0===t?void 0:t.nativeElement}}));const[K,F]=(0,b.A)(!1,{value:null!==(r=t.open)&&void 0!==r?r:t.visible,defaultValue:null!==(n=t.defaultOpen)&&void 0!==n?n:t.defaultVisible}),U=!O&&!$&&0!==O,W=o.useMemo((()=>{var t,e;let r=A;return"object"==typeof h&&(r=null!==(e=null!==(t=h.pointAtCenter)&&void 0!==t?t:h.arrowPointAtCenter)&&void 0!==e?e:A),x||function(t){const{arrowWidth:e,autoAdjustOverflow:r,arrowPointAtCenter:o,offset:n,borderRadius:a,visibleFirst:i}=t,s=e/2,l={};return Object.keys(T).forEach((t=>{const c=o&&P[t]||T[t],p=Object.assign(Object.assign({},c),{offset:[0,0],dynamicInset:!0});switch(l[t]=p,_.has(t)&&(p.autoArrow=!1),t){case"top":case"topLeft":case"topRight":p.offset[1]=-s-n;break;case"bottom":case"bottomLeft":case"bottomRight":p.offset[1]=s+n;break;case"left":case"leftTop":case"leftBottom":p.offset[0]=-s-n;break;case"right":case"rightTop":case"rightBottom":p.offset[0]=s+n}const u=k({contentRadius:a,limitVerticalRadius:!0});if(o)switch(t){case"topLeft":case"bottomLeft":p.offset[0]=-u.arrowOffsetHorizontal-s;break;case"topRight":case"bottomRight":p.offset[0]=u.arrowOffsetHorizontal+s;break;case"leftTop":case"rightTop":p.offset[1]=-u.arrowOffsetHorizontal-s;break;case"leftBottom":case"rightBottom":p.offset[1]=u.arrowOffsetHorizontal+s}p.overflow=function(t,e,r,o){if(!1===o)return{adjustX:!1,adjustY:!1};const n=o&&"object"==typeof o?o:{},a={};switch(t){case"top":case"bottom":a.shiftX=2*e.arrowOffsetHorizontal+r,a.shiftY=!0,a.adjustY=!0;break;case"left":case"right":a.shiftY=2*e.arrowOffsetVertical+r,a.shiftX=!0,a.adjustX=!0}const i=Object.assign(Object.assign({},a),n);return i.shiftX||(i.adjustX=!0),i.shiftY||(i.adjustY=!0),i}(t,u,e,r),i&&(p.htmlRegion="visibleFirst")})),l}({arrowPointAtCenter:r,autoAdjustOverflow:j,arrowWidth:E?I.sizePopupArrow:0,borderRadius:I.borderRadius,offset:I.marginXXS,visibleFirst:!0})}),[A,h,x,I]),Z=o.useMemo((()=>0===O?O:$||O||""),[$,O]),q=o.createElement(N,null,"function"==typeof Z?Z():Z),{getPopupContainer:G,placement:Q="top",mouseEnterDelay:J=.1,mouseLeaveDelay:et=.1,overlayStyle:ot,rootClassName:nt}=t,at=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(r[o[n]]=t[o[n]])}return r}(t,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),it=L("tooltip",i),st=L(),lt=t["data-popover-inject"];let ct=K;"open"in t||"visible"in t||!U||(ct=!1);const pt=o.isValidElement(f)&&!(0,M.zv)(f)?f:o.createElement("span",null,f),ut=pt.props,ft=ut.className&&"string"!=typeof ut.className?ut.className:a()(ut.className,s||`${it}-open`),[mt,dt,gt]=tt(it,!lt),ht=rt(it,p),vt=ht.arrowStyle,bt=Object.assign(Object.assign({},u),ht.overlayStyle),yt=a()(c,{[`${it}-rtl`]:"rtl"===V},ht.className,nt,dt,gt),[wt,Ot]=function(t,e){const[,r]=(0,y.Ay)(),n=o.useContext(w);if(void 0!==e)return[e,e];let a=null!=n?n:0;return t in S?(a+=(n?0:r.zIndexPopupBase)+S[t],a=Math.min(a,r.zIndexPopupBase+1e3)):a+=z[t],[void 0===n?e:a,a]}("Tooltip",at.zIndex),St=o.createElement(v,Object.assign({},at,{zIndex:wt,showArrow:E,placement:Q,mouseEnterDelay:J,mouseLeaveDelay:et,prefixCls:it,overlayClassName:yt,overlayStyle:Object.assign(Object.assign({},vt),ot),getTooltipContainer:G||l||B,ref:Y,builtinPlacements:W,overlay:q,visible:ct,onVisibleChange:e=>{var r,o;F(!U&&e),U||(null===(r=t.onOpenChange)||void 0===r||r.call(t,e),null===(o=t.onVisibleChange)||void 0===o||o.call(t,e))},afterVisibleChange:null!=m?m:d,overlayInnerStyle:bt,arrowContent:o.createElement("span",{className:`${it}-arrow-content`}),motion:{motionName:(0,C.b)(st,"zoom-big-fast",t.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!g}),ct?(0,M.Ob)(pt,{className:ft}):pt);return mt(o.createElement(w.Provider,{value:Ot},St))}));ot._InternalPanelDoNotUseOrYouWillBeFired=t=>{const{prefixCls:e,className:r,placement:n="top",title:s,color:l,overlayInnerStyle:c}=t,{getPrefixCls:p}=o.useContext(D.QO),u=p("tooltip",e),[f,m,d]=tt(u),g=rt(u,l),h=g.arrowStyle,v=Object.assign(Object.assign({},c),g.overlayStyle),b=a()(m,d,u,`${u}-pure`,`${u}-placement-${n}`,r,g.className);return f(o.createElement("div",{className:b,style:h},o.createElement("div",{className:`${u}-arrow`}),o.createElement(i,Object.assign({},t,{className:m,prefixCls:u,overlayInnerStyle:v}),s)))};const nt=ot},114:(t,e,r)=>{r.d(e,{A:()=>k});var o=r(96540),n=r(5556),a=r.n(n),i="undefined"!=typeof window?window:null,s=null===i,l=s?void 0:i.document,c="addEventListener",p="removeEventListener",u="getBoundingClientRect",f="_a",m="_b",d="_c",g="horizontal",h=function(){return!1},v=s?"calc":["","-webkit-","-moz-","-o-"].filter((function(t){var e=l.createElement("div");return e.style.cssText="width:"+t+"calc(9px)",!!e.style.length})).shift()+"calc",b=function(t){return"string"==typeof t||t instanceof String},y=function(t){if(b(t)){var e=l.querySelector(t);if(!e)throw new Error("Selector "+t+" did not match a DOM element");return e}return t},w=function(t,e,r){var o=t[e];return void 0!==o?o:r},O=function(t,e,r,o){if(e){if("end"===o)return 0;if("center"===o)return t/2}else if(r){if("start"===o)return 0;if("center"===o)return t/2}return t},S=function(t,e){var r=l.createElement("div");return r.className="gutter gutter-"+e,r},z=function(t,e,r){var o={};return b(e)?o[t]=e:o[t]=v+"("+e+"% - "+r+"px)",o},C=function(t,e){var r;return(r={})[t]=e+"px",r};const $=function(t,e){if(void 0===e&&(e={}),s)return{};var r,o,n,a,v,b,$=t;Array.from&&($=Array.from($));var x=y($[0]).parentNode,A=getComputedStyle?getComputedStyle(x):null,k=A?A.flexDirection:null,j=w(e,"sizes")||$.map((function(){return 100/$.length})),E=w(e,"minSize",100),T=Array.isArray(E)?E:$.map((function(){return E})),P=w(e,"expandToMin",!1),_=w(e,"gutterSize",10),M=w(e,"gutterAlign","center"),R=w(e,"snapOffset",30),D=w(e,"dragInterval",1),I=w(e,"direction",g),N=w(e,"cursor",I===g?"col-resize":"row-resize"),B=w(e,"gutter",S),L=w(e,"elementStyle",z),V=w(e,"gutterStyle",C);function X(t,e,o,n){var a=L(r,e,o,n);Object.keys(a).forEach((function(e){t.style[e]=a[e]}))}function Y(){return b.map((function(t){return t.size}))}function H(t){return"touches"in t?t.touches[0][o]:t[o]}function K(t){var e=b[this.a],r=b[this.b],o=e.size+r.size;e.size=t/this.size*o,r.size=o-t/this.size*o,X(e.element,e.size,this[m],e.i),X(r.element,r.size,this[d],r.i)}function F(t){var r,o=b[this.a],n=b[this.b];this.dragging&&(r=H(t)-this.start+(this[m]-this.dragOffset),D>1&&(r=Math.round(r/D)*D),r<=o.minSize+R+this[m]?r=o.minSize+this[m]:r>=this.size-(n.minSize+R+this[d])&&(r=this.size-(n.minSize+this[d])),K.call(this,r),w(e,"onDrag",h)(Y()))}function U(){var t=b[this.a].element,e=b[this.b].element,o=t[u](),i=e[u]();this.size=o[r]+i[r]+this[m]+this[d],this.start=o[n],this.end=o[a]}function W(t){var e=function(t){if(!getComputedStyle)return null;var e=getComputedStyle(t);if(!e)return null;var r=t[v];return 0===r?null:r-=I===g?parseFloat(e.paddingLeft)+parseFloat(e.paddingRight):parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)}(x);if(null===e)return t;if(T.reduce((function(t,e){return t+e}),0)>e)return t;var r=0,o=[],n=t.map((function(n,a){var i=e*n/100,s=O(_,0===a,a===t.length-1,M),l=T[a]+s;return i<l?(r+=l-i,o.push(0),l):(o.push(i-l),i)}));return 0===r?t:n.map((function(t,n){var a=t;if(r>0&&o[n]-r>0){var i=Math.min(r,o[n]-r);r-=i,a=t-i}return a/e*100}))}function Z(){var t=this,r=b[t.a].element,o=b[t.b].element;t.dragging&&w(e,"onDragEnd",h)(Y()),t.dragging=!1,i[p]("mouseup",t.stop),i[p]("touchend",t.stop),i[p]("touchcancel",t.stop),i[p]("mousemove",t.move),i[p]("touchmove",t.move),t.stop=null,t.move=null,r[p]("selectstart",h),r[p]("dragstart",h),o[p]("selectstart",h),o[p]("dragstart",h),r.style.userSelect="",r.style.webkitUserSelect="",r.style.MozUserSelect="",r.style.pointerEvents="",o.style.userSelect="",o.style.webkitUserSelect="",o.style.MozUserSelect="",o.style.pointerEvents="",t.gutter.style.cursor="",t.parent.style.cursor="",l.body.style.cursor=""}function q(t){if(!("button"in t)||0===t.button){var r=this,o=b[r.a].element,n=b[r.b].element;r.dragging||w(e,"onDragStart",h)(Y()),t.preventDefault(),r.dragging=!0,r.move=F.bind(r),r.stop=Z.bind(r),i[c]("mouseup",r.stop),i[c]("touchend",r.stop),i[c]("touchcancel",r.stop),i[c]("mousemove",r.move),i[c]("touchmove",r.move),o[c]("selectstart",h),o[c]("dragstart",h),n[c]("selectstart",h),n[c]("dragstart",h),o.style.userSelect="none",o.style.webkitUserSelect="none",o.style.MozUserSelect="none",o.style.pointerEvents="none",n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.MozUserSelect="none",n.style.pointerEvents="none",r.gutter.style.cursor=N,r.parent.style.cursor=N,l.body.style.cursor=N,U.call(r),r.dragOffset=H(t)-r.end}}I===g?(r="width",o="clientX",n="left",a="right",v="clientWidth"):"vertical"===I&&(r="height",o="clientY",n="top",a="bottom",v="clientHeight"),j=W(j);var G=[];function Q(t){var e=t.i===G.length,r=e?G[t.i-1]:G[t.i];U.call(r);var o=e?r.size-t.minSize-r[d]:t.minSize+r[m];K.call(r,o)}return(b=$.map((function(t,e){var o,n={element:y(t),size:j[e],minSize:T[e],i:e};if(e>0&&((o={a:e-1,b:e,dragging:!1,direction:I,parent:x})[m]=O(_,e-1==0,!1,M),o[d]=O(_,!1,e===$.length-1,M),"row-reverse"===k||"column-reverse"===k)){var a=o.a;o.a=o.b,o.b=a}if(e>0){var i=B(e,I,n.element);!function(t,e,o){var n=V(r,e,o);Object.keys(n).forEach((function(e){t.style[e]=n[e]}))}(i,_,e),o[f]=q.bind(o),i[c]("mousedown",o[f]),i[c]("touchstart",o[f]),x.insertBefore(i,n.element),o.gutter=i}return X(n.element,n.size,O(_,0===e,e===$.length-1,M),e),e>0&&G.push(o),n}))).forEach((function(t){var e=t.element[u]()[r];e<t.minSize&&(P?Q(t):t.minSize=e)})),{setSizes:function(t){var e=W(t);e.forEach((function(t,r){if(r>0){var o=G[r-1],n=b[o.a],a=b[o.b];n.size=e[r-1],a.size=t,X(n.element,n.size,o[m],n.i),X(a.element,a.size,o[d],a.i)}}))},getSizes:Y,collapse:function(t){Q(b[t])},destroy:function(t,e){G.forEach((function(o){if(!0!==e?o.parent.removeChild(o.gutter):(o.gutter[p]("mousedown",o[f]),o.gutter[p]("touchstart",o[f])),!0!==t){var n=L(r,o.a.size,o[m]);Object.keys(n).forEach((function(t){b[o.a].element.style[t]="",b[o.b].element.style[t]=""}))}}))},parent:x,pairs:G}};function x(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(r[o]=t[o]);return r}var A=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.componentDidMount=function(){var t=this.props;t.children;var e=t.gutter,r=x(t,["children","gutter"]);r.gutter=function(t,r){var o;return e?o=e(t,r):(o=document.createElement("div")).className="gutter gutter-"+r,o.__isSplitGutter=!0,o},this.split=$(this.parent.children,r)},e.prototype.componentDidUpdate=function(t){var e=this,r=this.props;r.children;var o=r.minSize,n=r.sizes,a=r.collapsed,i=x(r,["children","minSize","sizes","collapsed"]),s=t.minSize,l=t.sizes,c=t.collapsed,p=["maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor"].map((function(r){return e.props[r]!==t[r]})).reduce((function(t,e){return t||e}),!1);if(Array.isArray(o)&&Array.isArray(s)){var u=!1;o.forEach((function(t,e){u=u||t!==s[e]})),p=p||u}else p=!(!Array.isArray(o)&&!Array.isArray(s))||p||o!==s;if(p)i.minSize=o,i.sizes=n||this.split.getSizes(),this.split.destroy(!0,!0),i.gutter=function(t,e,r){return r.previousSibling},this.split=$(Array.from(this.parent.children).filter((function(t){return!t.__isSplitGutter})),i);else if(n){var f=!1;n.forEach((function(t,e){f=f||t!==l[e]})),f&&this.split.setSizes(this.props.sizes)}Number.isInteger(a)&&(a!==c||p)&&this.split.collapse(a)},e.prototype.componentWillUnmount=function(){this.split.destroy(),delete this.split},e.prototype.render=function(){var t=this,e=this.props;e.sizes,e.minSize,e.maxSize,e.expandToMin,e.gutterSize,e.gutterAlign,e.snapOffset,e.dragInterval,e.direction,e.cursor,e.gutter,e.elementStyle,e.gutterStyle,e.onDrag,e.onDragStart,e.onDragEnd,e.collapsed;var r=e.children,n=x(e,["sizes","minSize","maxSize","expandToMin","gutterSize","gutterAlign","snapOffset","dragInterval","direction","cursor","gutter","elementStyle","gutterStyle","onDrag","onDragStart","onDragEnd","collapsed","children"]);return o.createElement("div",Object.assign({},{ref:function(e){t.parent=e}},n),r)},e}(o.Component);A.propTypes={sizes:a().arrayOf(a().number),minSize:a().oneOfType([a().number,a().arrayOf(a().number)]),maxSize:a().oneOfType([a().number,a().arrayOf(a().number)]),expandToMin:a().bool,gutterSize:a().number,gutterAlign:a().string,snapOffset:a().oneOfType([a().number,a().arrayOf(a().number)]),dragInterval:a().number,direction:a().string,cursor:a().string,gutter:a().func,elementStyle:a().func,gutterStyle:a().func,onDrag:a().func,onDragStart:a().func,onDragEnd:a().func,collapsed:a().number,children:a().arrayOf(a().element)},A.defaultProps={sizes:void 0,minSize:void 0,maxSize:void 0,expandToMin:void 0,gutterSize:void 0,gutterAlign:void 0,snapOffset:void 0,dragInterval:void 0,direction:void 0,cursor:void 0,gutter:void 0,elementStyle:void 0,gutterStyle:void 0,onDrag:void 0,onDragStart:void 0,onDragEnd:void 0,collapsed:void 0,children:void 0};const k=A}}]);
//# sourceMappingURL=8d9f3a040c3e055df4ca.chunk.js.map