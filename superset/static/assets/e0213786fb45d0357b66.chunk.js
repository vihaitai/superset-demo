"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9148],{72947:(e,t,n)=>{n.d(t,{A:()=>me});var o=n(89379),r=n(5544),i=n(80045),a=n(96540),u=n.t(a,2),l=n(28290),c=n(20998),s=(n(68210),n(8719));const f=a.createContext(null);var d=n(60436),v=n(30981),h=[],p=n(85089),m=n(82987),g="rc-util-locker-".concat(Date.now()),y=0;var A=!1,b=function(e){return!1!==e&&((0,c.A)()&&e?"string"==typeof e?document.querySelector(e):"function"==typeof e?e():e:null)};const w=a.forwardRef((function(e,t){var n=e.open,o=e.autoLock,i=e.getContainer,u=(e.debug,e.autoDestroy),w=void 0===u||u,x=e.children,E=a.useState(n),C=(0,r.A)(E,2),M=C[0],P=C[1],k=M||n;a.useEffect((function(){(w||n)&&P(n)}),[n,w]);var R=a.useState((function(){return b(i)})),S=(0,r.A)(R,2),N=S[0],L=S[1];a.useEffect((function(){var e=b(i);L(null!=e?e:null)}));var D=function(e,t){var n=a.useState((function(){return(0,c.A)()?document.createElement("div"):null})),o=(0,r.A)(n,1)[0],i=a.useRef(!1),u=a.useContext(f),l=a.useState(h),s=(0,r.A)(l,2),p=s[0],m=s[1],g=u||(i.current?void 0:function(e){m((function(t){return[e].concat((0,d.A)(t))}))});function y(){o.parentElement||document.body.appendChild(o),i.current=!0}function A(){var e;null===(e=o.parentElement)||void 0===e||e.removeChild(o),i.current=!1}return(0,v.A)((function(){return e?u?u(y):y():A(),A}),[e]),(0,v.A)((function(){p.length&&(p.forEach((function(e){return e()})),m(h))}),[p]),[o,g]}(k&&!N),H=(0,r.A)(D,2),W=H[0],T=H[1],$=null!=N?N:W;!function(e){var t=!!e,n=a.useState((function(){return y+=1,"".concat(g,"_").concat(y)})),o=(0,r.A)(n,1)[0];(0,v.A)((function(){if(t){var e=(0,m.V)(document.body).width,n=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;(0,p.BD)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(n?"width: calc(100% - ".concat(e,"px);"):"","\n}"),o)}else(0,p.m6)(o);return function(){(0,p.m6)(o)}}),[t,o])}(o&&n&&(0,c.A)()&&($===W||$===document.body));var z=null;x&&(0,s.f3)(x)&&t&&(z=x.ref);var B=(0,s.xK)(z,t);if(!k||!(0,c.A)()||void 0===N)return null;var O=!1===$||A,X=x;return t&&(X=a.cloneElement(x,{ref:B})),a.createElement(f.Provider,{value:T},O?X:(0,l.createPortal)(X,$))}));var x=n(46942),E=n.n(x),C=n(58168),M=n(82546),P=n(82284),k=n(66588),R=a.createContext(null),S=n(43591),N=new Map,L=new S.A((function(e){e.forEach((function(e){var t,n=e.target;null===(t=N.get(n))||void 0===t||t.forEach((function(e){return e(n)}))}))})),D=n(23029),H=n(92901),W=n(85501),T=n(29426),$=function(e){(0,W.A)(n,e);var t=(0,T.A)(n);function n(){return(0,D.A)(this,n),t.apply(this,arguments)}return(0,H.A)(n,[{key:"render",value:function(){return this.props.children}}]),n}(a.Component);function z(e,t){var n=e.children,r=e.disabled,i=a.useRef(null),u=a.useRef(null),l=a.useContext(R),c="function"==typeof n,f=c?n(i):n,d=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),v=!c&&a.isValidElement(f)&&(0,s.f3)(f),h=v?f.ref:null,p=(0,s.xK)(h,i),m=function(){var e;return(0,k.Ay)(i.current)||(i.current&&"object"===(0,P.A)(i.current)?(0,k.Ay)(null===(e=i.current)||void 0===e?void 0:e.nativeElement):null)||(0,k.Ay)(u.current)};a.useImperativeHandle(t,(function(){return m()}));var g=a.useRef(e);g.current=e;var y=a.useCallback((function(e){var t=g.current,n=t.onResize,r=t.data,i=e.getBoundingClientRect(),a=i.width,u=i.height,c=e.offsetWidth,s=e.offsetHeight,f=Math.floor(a),v=Math.floor(u);if(d.current.width!==f||d.current.height!==v||d.current.offsetWidth!==c||d.current.offsetHeight!==s){var h={width:f,height:v,offsetWidth:c,offsetHeight:s};d.current=h;var p=c===Math.round(a)?a:c,m=s===Math.round(u)?u:s,y=(0,o.A)((0,o.A)({},h),{},{offsetWidth:p,offsetHeight:m});null==l||l(y,e,r),n&&Promise.resolve().then((function(){n(y,e)}))}}),[]);return a.useEffect((function(){var e,t,n=m();return n&&!r&&(e=n,t=y,N.has(e)||(N.set(e,new Set),L.observe(e)),N.get(e).add(t)),function(){return function(e,t){N.has(e)&&(N.get(e).delete(t),N.get(e).size||(L.unobserve(e),N.delete(e)))}(n,y)}}),[i.current,r]),a.createElement($,{ref:u},v?a.cloneElement(f,{ref:p}):f)}const B=a.forwardRef(z);function O(e,t){var n=e.children;return("function"==typeof n?[n]:(0,M.A)(n)).map((function(n,o){var r=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(o);return a.createElement(B,(0,C.A)({},e,{key:r,ref:0===o?t:void 0}),n)}))}var X=a.forwardRef(O);X.Collection=function(e){var t=e.children,n=e.onBatchResize,o=a.useRef(0),r=a.useRef([]),i=a.useContext(R),u=a.useCallback((function(e,t,a){o.current+=1;var u=o.current;r.current.push({size:e,element:t,data:a}),Promise.resolve().then((function(){u===o.current&&(null==n||n(r.current),r.current=[])})),null==i||i(e,t,a)}),[n,i]);return a.createElement(R.Provider,{value:u},t)};const V=X;var Y=n(72633),j=n(26956),F=0,I=(0,o.A)({},u).useId;const K=I?function(e){var t=I();return e||t}:function(e){var t=a.useState("ssr-id"),n=(0,r.A)(t,2),o=n[0],i=n[1];return a.useEffect((function(){var e=F;F+=1,i("rc_unique_".concat(e))}),[]),e||o};var _=n(68430),q=n(90754);function J(e){var t=e.prefixCls,n=e.align,o=e.arrow,r=e.arrowPos,i=o||{},u=i.className,l=i.content,c=r.x,s=void 0===c?0:c,f=r.y,d=void 0===f?0:f,v=a.useRef();if(!n||!n.points)return null;var h={position:"absolute"};if(!1!==n.autoArrow){var p=n.points[0],m=n.points[1],g=p[0],y=p[1],A=m[0],b=m[1];g!==A&&["t","b"].includes(g)?"t"===g?h.top=0:h.bottom=0:h.top=d,y!==b&&["l","r"].includes(y)?"l"===y?h.left=0:h.right=0:h.left=s}return a.createElement("div",{ref:v,className:E()("".concat(t,"-arrow"),u),style:h},l)}function G(e){var t=e.prefixCls,n=e.open,o=e.zIndex,r=e.mask,i=e.motion;return r?a.createElement(q.default,(0,C.A)({},i,{motionAppear:!0,visible:n,removeOnLeave:!0}),(function(e){var n=e.className;return a.createElement("div",{style:{zIndex:o},className:E()("".concat(t,"-mask"),n)})})):null}const Q=a.memo((function(e){return e.children}),(function(e,t){return t.cache}));const U=a.forwardRef((function(e,t){var n=e.popup,i=e.className,u=e.prefixCls,l=e.style,c=e.target,f=e.onVisibleChanged,d=e.open,h=e.keepDom,p=e.fresh,m=e.onClick,g=e.mask,y=e.arrow,A=e.arrowPos,b=e.align,w=e.motion,x=e.maskMotion,M=e.forceRender,P=e.getPopupContainer,k=e.autoDestroy,R=e.portal,S=e.zIndex,N=e.onMouseEnter,L=e.onMouseLeave,D=e.onPointerEnter,H=e.ready,W=e.offsetX,T=e.offsetY,$=e.offsetR,z=e.offsetB,B=e.onAlign,O=e.onPrepare,X=e.stretch,Y=e.targetWidth,j=e.targetHeight,F="function"==typeof n?n():n,I=d||h,K=(null==P?void 0:P.length)>0,_=a.useState(!P||!K),U=(0,r.A)(_,2),Z=U[0],ee=U[1];if((0,v.A)((function(){!Z&&K&&c&&ee(!0)}),[Z,K,c]),!Z)return null;var te="auto",ne={left:"-1000vw",top:"-1000vh",right:te,bottom:te};if(H||!d){var oe,re=b.points,ie=b.dynamicInset||(null===(oe=b._experimental)||void 0===oe?void 0:oe.dynamicInset),ae=ie&&"r"===re[0][1],ue=ie&&"b"===re[0][0];ae?(ne.right=$,ne.left=te):(ne.left=W,ne.right=te),ue?(ne.bottom=z,ne.top=te):(ne.top=T,ne.bottom=te)}var le={};return X&&(X.includes("height")&&j?le.height=j:X.includes("minHeight")&&j&&(le.minHeight=j),X.includes("width")&&Y?le.width=Y:X.includes("minWidth")&&Y&&(le.minWidth=Y)),d||(le.pointerEvents="none"),a.createElement(R,{open:M||I,getContainer:P&&function(){return P(c)},autoDestroy:k},a.createElement(G,{prefixCls:u,open:d,zIndex:S,mask:g,motion:x}),a.createElement(V,{onResize:B,disabled:!d},(function(e){return a.createElement(q.default,(0,C.A)({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:M,leavedClassName:"".concat(u,"-hidden")},w,{onAppearPrepare:O,onEnterPrepare:O,visible:d,onVisibleChanged:function(e){var t;null==w||null===(t=w.onVisibleChanged)||void 0===t||t.call(w,e),f(e)}}),(function(n,r){var c=n.className,f=n.style,v=E()(u,c,i);return a.createElement("div",{ref:(0,s.K4)(e,t,r),className:v,style:(0,o.A)((0,o.A)((0,o.A)((0,o.A)({"--arrow-x":"".concat(A.x||0,"px"),"--arrow-y":"".concat(A.y||0,"px")},ne),le),f),{},{boxSizing:"border-box",zIndex:S},l),onMouseEnter:N,onMouseLeave:L,onPointerEnter:D,onClick:m},y&&a.createElement(J,{prefixCls:u,arrow:y,arrowPos:A,align:b}),a.createElement(Q,{cache:!d&&!p},F))}))})))})),Z=a.forwardRef((function(e,t){var n=e.children,o=e.getTriggerDOMNode,r=(0,s.f3)(n),i=a.useCallback((function(e){(0,s.Xf)(t,o?o(e):e)}),[o]),u=(0,s.xK)(i,n.ref);return r?a.cloneElement(n,{ref:u}):n})),ee=a.createContext(null);function te(e){return e?Array.isArray(e)?e:[e]:[]}var ne=n(42467);function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(arguments.length>2?arguments[2]:void 0)?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function re(e,t,n,o){return t||(n?{motionName:"".concat(e,"-").concat(n)}:o?{motionName:o}:null)}function ie(e){return e.ownerDocument.defaultView}function ae(e){for(var t=[],n=null==e?void 0:e.parentElement,o=["hidden","scroll","clip","auto"];n;){var r=ie(n).getComputedStyle(n);[r.overflowX,r.overflowY,r.overflow].some((function(e){return o.includes(e)}))&&t.push(n),n=n.parentElement}return t}function ue(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Number.isNaN(e)?t:e}function le(e){return ue(parseFloat(e),0)}function ce(e,t){var n=(0,o.A)({},e);return(t||[]).forEach((function(e){if(!(e instanceof HTMLBodyElement||e instanceof HTMLHtmlElement)){var t=ie(e).getComputedStyle(e),o=t.overflow,r=t.overflowClipMargin,i=t.borderTopWidth,a=t.borderBottomWidth,u=t.borderLeftWidth,l=t.borderRightWidth,c=e.getBoundingClientRect(),s=e.offsetHeight,f=e.clientHeight,d=e.offsetWidth,v=e.clientWidth,h=le(i),p=le(a),m=le(u),g=le(l),y=ue(Math.round(c.width/d*1e3)/1e3),A=ue(Math.round(c.height/s*1e3)/1e3),b=(d-v-m-g)*y,w=(s-f-h-p)*A,x=h*A,E=p*A,C=m*y,M=g*y,P=0,k=0;if("clip"===o){var R=le(r);P=R*y,k=R*A}var S=c.x+C-P,N=c.y+x-k,L=S+c.width+2*P-C-M-b,D=N+c.height+2*k-x-E-w;n.left=Math.max(n.left,S),n.top=Math.max(n.top,N),n.right=Math.min(n.right,L),n.bottom=Math.min(n.bottom,D)}})),n}function se(e){var t="".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0),n=t.match(/^(.*)\%$/);return n?e*(parseFloat(n[1])/100):parseFloat(t)}function fe(e,t){var n=t||[],o=(0,r.A)(n,2),i=o[0],a=o[1];return[se(e.width,i),se(e.height,a)]}function de(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[e[0],e[1]]}function ve(e,t){var n,o=t[0],r=t[1];return n="t"===o?e.y:"b"===o?e.y+e.height:e.y+e.height/2,{x:"l"===r?e.x:"r"===r?e.x+e.width:e.x+e.width/2,y:n}}function he(e,t){var n={t:"b",b:"t",l:"r",r:"l"};return e.map((function(e,o){return o===t?n[e]||"c":e})).join("")}var pe=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];const me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return a.forwardRef((function(t,n){var u=t.prefixCls,l=void 0===u?"rc-trigger-popup":u,c=t.children,s=t.action,f=void 0===s?"hover":s,h=t.showAction,p=t.hideAction,m=t.popupVisible,g=t.defaultPopupVisible,y=t.onPopupVisibleChange,A=t.afterPopupVisibleChange,b=t.mouseEnterDelay,w=t.mouseLeaveDelay,x=void 0===w?.1:w,C=t.focusDelay,M=t.blurDelay,P=t.mask,R=t.maskClosable,S=void 0===R||R,N=t.getPopupContainer,L=t.forceRender,D=t.autoDestroy,H=t.destroyPopupOnHide,W=t.popup,T=t.popupClassName,$=t.popupStyle,z=t.popupPlacement,B=t.builtinPlacements,O=void 0===B?{}:B,X=t.popupAlign,F=t.zIndex,I=t.stretch,q=t.getPopupClassNameFromAlign,J=t.fresh,G=t.alignPoint,Q=t.onPopupClick,le=t.onPopupAlign,se=t.arrow,me=t.popupMotion,ge=t.maskMotion,ye=t.popupTransitionName,Ae=t.popupAnimation,be=t.maskTransitionName,we=t.maskAnimation,xe=t.className,Ee=t.getTriggerDOMNode,Ce=(0,i.A)(t,pe),Me=D||H||!1,Pe=a.useState(!1),ke=(0,r.A)(Pe,2),Re=ke[0],Se=ke[1];(0,v.A)((function(){Se((0,_.A)())}),[]);var Ne=a.useRef({}),Le=a.useContext(ee),De=a.useMemo((function(){return{registerSubPopup:function(e,t){Ne.current[e]=t,null==Le||Le.registerSubPopup(e,t)}}}),[Le]),He=K(),We=a.useState(null),Te=(0,r.A)(We,2),$e=Te[0],ze=Te[1],Be=a.useRef(null),Oe=(0,j.A)((function(e){Be.current=e,(0,k.fk)(e)&&$e!==e&&ze(e),null==Le||Le.registerSubPopup(He,e)})),Xe=a.useState(null),Ve=(0,r.A)(Xe,2),Ye=Ve[0],je=Ve[1],Fe=a.useRef(null),Ie=(0,j.A)((function(e){(0,k.fk)(e)&&Ye!==e&&(je(e),Fe.current=e)})),Ke=a.Children.only(c),_e=(null==Ke?void 0:Ke.props)||{},qe={},Je=(0,j.A)((function(e){var t,n,o=Ye;return(null==o?void 0:o.contains(e))||(null===(t=(0,Y.j)(o))||void 0===t?void 0:t.host)===e||e===o||(null==$e?void 0:$e.contains(e))||(null===(n=(0,Y.j)($e))||void 0===n?void 0:n.host)===e||e===$e||Object.values(Ne.current).some((function(t){return(null==t?void 0:t.contains(e))||e===t}))})),Ge=re(l,me,Ae,ye),Qe=re(l,ge,we,be),Ue=a.useState(g||!1),Ze=(0,r.A)(Ue,2),et=Ze[0],tt=Ze[1],nt=null!=m?m:et,ot=(0,j.A)((function(e){void 0===m&&tt(e)}));(0,v.A)((function(){tt(m||!1)}),[m]);var rt=a.useRef(nt);rt.current=nt;var it=a.useRef([]);it.current=[];var at=(0,j.A)((function(e){var t;ot(e),(null!==(t=it.current[it.current.length-1])&&void 0!==t?t:nt)!==e&&(it.current.push(e),null==y||y(e))})),ut=a.useRef(),lt=function(){clearTimeout(ut.current)},ct=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;lt(),0===t?at(e):ut.current=setTimeout((function(){at(e)}),1e3*t)};a.useEffect((function(){return lt}),[]);var st=a.useState(!1),ft=(0,r.A)(st,2),dt=ft[0],vt=ft[1];(0,v.A)((function(e){e&&!nt||vt(!0)}),[nt]);var ht=a.useState(null),pt=(0,r.A)(ht,2),mt=pt[0],gt=pt[1],yt=a.useState([0,0]),At=(0,r.A)(yt,2),bt=At[0],wt=At[1],xt=function(e){wt([e.clientX,e.clientY])},Et=function(e,t,n,i,u,l,c){var s=a.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:u[i]||{}}),f=(0,r.A)(s,2),d=f[0],h=f[1],p=a.useRef(0),m=a.useMemo((function(){return t?ae(t):[]}),[t]),g=a.useRef({});e||(g.current={});var y=(0,j.A)((function(){if(t&&n&&e){var a,s,f,d=t,v=d.ownerDocument,p=ie(d).getComputedStyle(d),y=p.width,A=p.height,b=p.position,w=d.style.left,x=d.style.top,E=d.style.right,C=d.style.bottom,M=d.style.overflow,P=(0,o.A)((0,o.A)({},u[i]),l),R=v.createElement("div");if(null===(a=d.parentElement)||void 0===a||a.appendChild(R),R.style.left="".concat(d.offsetLeft,"px"),R.style.top="".concat(d.offsetTop,"px"),R.style.position=b,R.style.height="".concat(d.offsetHeight,"px"),R.style.width="".concat(d.offsetWidth,"px"),d.style.left="0",d.style.top="0",d.style.right="auto",d.style.bottom="auto",d.style.overflow="hidden",Array.isArray(n))f={x:n[0],y:n[1],width:0,height:0};else{var S=n.getBoundingClientRect();f={x:S.x,y:S.y,width:S.width,height:S.height}}var N=d.getBoundingClientRect(),L=v.documentElement,D=L.clientWidth,H=L.clientHeight,W=L.scrollWidth,T=L.scrollHeight,$=L.scrollTop,z=L.scrollLeft,B=N.height,O=N.width,X=f.height,V=f.width,Y={left:0,top:0,right:D,bottom:H},j={left:-z,top:-$,right:W-z,bottom:T-$},F=P.htmlRegion,I="visible",K="visibleFirst";"scroll"!==F&&F!==K&&(F=I);var _=F===K,q=ce(j,m),J=ce(Y,m),G=F===I?J:q,Q=_?J:G;d.style.left="auto",d.style.top="auto",d.style.right="0",d.style.bottom="0";var U=d.getBoundingClientRect();d.style.left=w,d.style.top=x,d.style.right=E,d.style.bottom=C,d.style.overflow=M,null===(s=d.parentElement)||void 0===s||s.removeChild(R);var Z=ue(Math.round(O/parseFloat(y)*1e3)/1e3),ee=ue(Math.round(B/parseFloat(A)*1e3)/1e3);if(0===Z||0===ee||(0,k.fk)(n)&&!(0,ne.A)(n))return;var te=P.offset,oe=P.targetOffset,re=fe(N,te),ae=(0,r.A)(re,2),le=ae[0],se=ae[1],pe=fe(f,oe),me=(0,r.A)(pe,2),ge=me[0],ye=me[1];f.x-=ge,f.y-=ye;var Ae=P.points||[],be=(0,r.A)(Ae,2),we=be[0],xe=de(be[1]),Ee=de(we),Ce=ve(f,xe),Me=ve(N,Ee),Pe=(0,o.A)({},P),ke=Ce.x-Me.x+le,Re=Ce.y-Me.y+se;function wt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:G,o=N.x+e,r=N.y+t,i=o+O,a=r+B,u=Math.max(o,n.left),l=Math.max(r,n.top),c=Math.min(i,n.right),s=Math.min(a,n.bottom);return Math.max(0,(c-u)*(s-l))}var Se,Ne,Le,De,He=wt(ke,Re),We=wt(ke,Re,J),Te=ve(f,["t","l"]),$e=ve(N,["t","l"]),ze=ve(f,["b","r"]),Be=ve(N,["b","r"]),Oe=P.overflow||{},Xe=Oe.adjustX,Ve=Oe.adjustY,Ye=Oe.shiftX,je=Oe.shiftY,Fe=function(e){return"boolean"==typeof e?e:e>=0};function xt(){Se=N.y+Re,Ne=Se+B,Le=N.x+ke,De=Le+O}xt();var Ie=Fe(Ve),Ke=Ee[0]===xe[0];if(Ie&&"t"===Ee[0]&&(Ne>Q.bottom||g.current.bt)){var _e=Re;Ke?_e-=B-X:_e=Te.y-Be.y-se;var qe=wt(ke,_e),Je=wt(ke,_e,J);qe>He||qe===He&&(!_||Je>=We)?(g.current.bt=!0,Re=_e,se=-se,Pe.points=[he(Ee,0),he(xe,0)]):g.current.bt=!1}if(Ie&&"b"===Ee[0]&&(Se<Q.top||g.current.tb)){var Ge=Re;Ke?Ge+=B-X:Ge=ze.y-$e.y-se;var Qe=wt(ke,Ge),Ue=wt(ke,Ge,J);Qe>He||Qe===He&&(!_||Ue>=We)?(g.current.tb=!0,Re=Ge,se=-se,Pe.points=[he(Ee,0),he(xe,0)]):g.current.tb=!1}var Ze=Fe(Xe),et=Ee[1]===xe[1];if(Ze&&"l"===Ee[1]&&(De>Q.right||g.current.rl)){var tt=ke;et?tt-=O-V:tt=Te.x-Be.x-le;var nt=wt(tt,Re),ot=wt(tt,Re,J);nt>He||nt===He&&(!_||ot>=We)?(g.current.rl=!0,ke=tt,le=-le,Pe.points=[he(Ee,1),he(xe,1)]):g.current.rl=!1}if(Ze&&"r"===Ee[1]&&(Le<Q.left||g.current.lr)){var rt=ke;et?rt+=O-V:rt=ze.x-$e.x-le;var it=wt(rt,Re),at=wt(rt,Re,J);it>He||it===He&&(!_||at>=We)?(g.current.lr=!0,ke=rt,le=-le,Pe.points=[he(Ee,1),he(xe,1)]):g.current.lr=!1}xt();var ut=!0===Ye?0:Ye;"number"==typeof ut&&(Le<J.left&&(ke-=Le-J.left-le,f.x+V<J.left+ut&&(ke+=f.x-J.left+V-ut)),De>J.right&&(ke-=De-J.right-le,f.x>J.right-ut&&(ke+=f.x-J.right+ut)));var lt=!0===je?0:je;"number"==typeof lt&&(Se<J.top&&(Re-=Se-J.top-se,f.y+X<J.top+lt&&(Re+=f.y-J.top+X-lt)),Ne>J.bottom&&(Re-=Ne-J.bottom-se,f.y>J.bottom-lt&&(Re+=f.y-J.bottom+lt)));var ct=N.x+ke,st=ct+O,ft=N.y+Re,dt=ft+B,vt=f.x,ht=vt+V,pt=f.y,mt=pt+X,gt=(Math.max(ct,vt)+Math.min(st,ht))/2-ct,yt=(Math.max(ft,pt)+Math.min(dt,mt))/2-ft;null==c||c(t,Pe);var At=U.right-N.x-(ke+N.width),bt=U.bottom-N.y-(Re+N.height);1===Z&&(ke=Math.round(ke),At=Math.round(At)),1===ee&&(Re=Math.round(Re),bt=Math.round(bt)),h({ready:!0,offsetX:ke/Z,offsetY:Re/ee,offsetR:At/Z,offsetB:bt/ee,arrowX:gt/Z,arrowY:yt/ee,scaleX:Z,scaleY:ee,align:Pe})}})),A=function(){h((function(e){return(0,o.A)((0,o.A)({},e),{},{ready:!1})}))};return(0,v.A)(A,[i]),(0,v.A)((function(){e||A()}),[e]),[d.ready,d.offsetX,d.offsetY,d.offsetR,d.offsetB,d.arrowX,d.arrowY,d.scaleX,d.scaleY,d.align,function(){p.current+=1;var e=p.current;Promise.resolve().then((function(){p.current===e&&y()}))}]}(nt,$e,G?bt:Ye,z,O,X,le),Ct=(0,r.A)(Et,11),Mt=Ct[0],Pt=Ct[1],kt=Ct[2],Rt=Ct[3],St=Ct[4],Nt=Ct[5],Lt=Ct[6],Dt=Ct[7],Ht=Ct[8],Wt=Ct[9],Tt=Ct[10],$t=function(e,t,n,o){return a.useMemo((function(){var r=te(null!=n?n:t),i=te(null!=o?o:t),a=new Set(r),u=new Set(i);return e&&(a.has("hover")&&(a.delete("hover"),a.add("click")),u.has("hover")&&(u.delete("hover"),u.add("click"))),[a,u]}),[e,t,n,o])}(Re,f,h,p),zt=(0,r.A)($t,2),Bt=zt[0],Ot=zt[1],Xt=Bt.has("click"),Vt=Ot.has("click")||Ot.has("contextMenu"),Yt=(0,j.A)((function(){dt||Tt()}));!function(e,t,n,o,r){(0,v.A)((function(){if(e&&t&&n){var r=n,i=ae(t),a=ae(r),u=ie(r),l=new Set([u].concat((0,d.A)(i),(0,d.A)(a)));function c(){o(),rt.current&&G&&Vt&&ct(!1)}return l.forEach((function(e){e.addEventListener("scroll",c,{passive:!0})})),u.addEventListener("resize",c,{passive:!0}),o(),function(){l.forEach((function(e){e.removeEventListener("scroll",c),u.removeEventListener("resize",c)}))}}}),[e,t,n])}(nt,Ye,$e,Yt),(0,v.A)((function(){Yt()}),[bt,z]),(0,v.A)((function(){!nt||null!=O&&O[z]||Yt()}),[JSON.stringify(X)]);var jt=a.useMemo((function(){var e=function(e,t,n,o){for(var r=n.points,i=Object.keys(e),a=0;a<i.length;a+=1){var u,l=i[a];if(oe(null===(u=e[l])||void 0===u?void 0:u.points,r,o))return"".concat(t,"-placement-").concat(l)}return""}(O,l,Wt,G);return E()(e,null==q?void 0:q(Wt))}),[Wt,q,O,l,G]);a.useImperativeHandle(n,(function(){return{nativeElement:Fe.current,popupElement:Be.current,forceAlign:Yt}}));var Ft=a.useState(0),It=(0,r.A)(Ft,2),Kt=It[0],_t=It[1],qt=a.useState(0),Jt=(0,r.A)(qt,2),Gt=Jt[0],Qt=Jt[1],Ut=function(){if(I&&Ye){var e=Ye.getBoundingClientRect();_t(e.width),Qt(e.height)}};function Zt(e,t,n,o){qe[e]=function(r){var i;null==o||o(r),ct(t,n);for(var a=arguments.length,u=new Array(a>1?a-1:0),l=1;l<a;l++)u[l-1]=arguments[l];null===(i=_e[e])||void 0===i||i.call.apply(i,[_e,r].concat(u))}}(0,v.A)((function(){mt&&(Tt(),mt(),gt(null))}),[mt]),(Xt||Vt)&&(qe.onClick=function(e){var t;rt.current&&Vt?ct(!1):!rt.current&&Xt&&(xt(e),ct(!0));for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=_e.onClick)||void 0===t||t.call.apply(t,[_e,e].concat(o))}),function(e,t,n,o,r,i,u,l){var c=a.useRef(e);c.current=e,a.useEffect((function(){if(t&&o&&(!r||i)){var e=function(e){var t=e.target;c.current&&!u(t)&&l(!1)},a=ie(o);a.addEventListener("mousedown",e,!0),a.addEventListener("contextmenu",e,!0);var s=(0,Y.j)(n);return s&&(s.addEventListener("mousedown",e,!0),s.addEventListener("contextmenu",e,!0)),function(){a.removeEventListener("mousedown",e,!0),a.removeEventListener("contextmenu",e,!0),s&&(s.removeEventListener("mousedown",e,!0),s.removeEventListener("contextmenu",e,!0))}}}),[t,n,o,r,i])}(nt,Vt,Ye,$e,P,S,Je,ct);var en,tn,nn=Bt.has("hover"),on=Ot.has("hover");nn&&(Zt("onMouseEnter",!0,b,(function(e){xt(e)})),Zt("onPointerEnter",!0,b,(function(e){xt(e)})),en=function(e){(nt||dt)&&null!=$e&&$e.contains(e.target)&&ct(!0,b)},G&&(qe.onMouseMove=function(e){var t;null===(t=_e.onMouseMove)||void 0===t||t.call(_e,e)})),on&&(Zt("onMouseLeave",!1,x),Zt("onPointerLeave",!1,x),tn=function(){ct(!1,x)}),Bt.has("focus")&&Zt("onFocus",!0,C),Ot.has("focus")&&Zt("onBlur",!1,M),Bt.has("contextMenu")&&(qe.onContextMenu=function(e){var t;rt.current&&Ot.has("contextMenu")?ct(!1):(xt(e),ct(!0)),e.preventDefault();for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=_e.onContextMenu)||void 0===t||t.call.apply(t,[_e,e].concat(o))}),xe&&(qe.className=E()(_e.className,xe));var rn=(0,o.A)((0,o.A)({},_e),qe),an={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach((function(e){Ce[e]&&(an[e]=function(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];null===(t=rn[e])||void 0===t||t.call.apply(t,[rn].concat(o)),Ce[e].apply(Ce,o)})}));var un=a.cloneElement(Ke,(0,o.A)((0,o.A)({},rn),an)),ln={x:Nt,y:Lt},cn=se?(0,o.A)({},!0!==se?se:{}):null;return a.createElement(a.Fragment,null,a.createElement(V,{disabled:!nt,ref:Ie,onResize:function(){Ut(),Yt()}},a.createElement(Z,{getTriggerDOMNode:Ee},un)),a.createElement(ee.Provider,{value:De},a.createElement(U,{portal:e,ref:Oe,prefixCls:l,popup:W,className:E()(T,jt),style:$,target:Ye,onMouseEnter:en,onMouseLeave:tn,onPointerEnter:en,zIndex:F,open:nt,keepDom:dt,fresh:J,onClick:Q,mask:P,motion:Ge,maskMotion:Qe,onVisibleChanged:function(e){vt(!1),Tt(),null==A||A(e)},onPrepare:function(){return new Promise((function(e){Ut(),gt((function(){return e}))}))},forceRender:L,autoDestroy:Me,getPopupContainer:N,align:Wt,arrow:cn,arrowPos:ln,ready:Mt,offsetX:Pt,offsetY:kt,offsetR:Rt,offsetB:St,onAlign:Yt,stretch:I,targetWidth:Kt/Dt,targetHeight:Gt/Ht})))}))}(w)},8889:(e,t,n)=>{n.d(t,{b:()=>o});const o=(e,t,n)=>void 0!==n?n:`${e}-${t}`},34598:(e,t,n)=>{n.d(t,{b:()=>i});const o=e=>({animationDuration:e,animationFillMode:"both"}),r=e=>({animationDuration:e,animationFillMode:"both"}),i=function(e,t,n,i){const a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]?"&":"";return{[`\n      ${a}${e}-enter,\n      ${a}${e}-appear\n    `]:Object.assign(Object.assign({},o(i)),{animationPlayState:"paused"}),[`${a}${e}-leave`]:Object.assign(Object.assign({},r(i)),{animationPlayState:"paused"}),[`\n      ${a}${e}-enter${e}-enter-active,\n      ${a}${e}-appear${e}-appear-active\n    `]:{animationName:t,animationPlayState:"running"},[`${a}${e}-leave${e}-leave-active`]:{animationName:n,animationPlayState:"running",pointerEvents:"none"}}}}}]);
//# sourceMappingURL=e0213786fb45d0357b66.chunk.js.map