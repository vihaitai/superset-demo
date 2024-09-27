"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6281],{56324:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(5556),o=r.n(n),i=r(38221),a=r.n(i),l=r(96540),u=r(43591);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return p(s(t=e.call.apply(e,[this].concat(n))||this),"animationFrameID",0),p(s(t),"resizeObserver",void 0),p(s(t),"target",null),p(s(t),"state",{width:0,height:0,top:0,left:0}),p(s(t),"resize",a()((function(e){var r=e.width,n=e.height,o=e.top,i=e.left;t.setState((function(){return{width:r,height:n,top:o,left:i}}))}),t.props.debounceTime,{leading:t.props.enableDebounceLeadingCall})),p(s(t),"setTarget",(function(e){t.target=e})),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){var e=this;this.resizeObserver=new u.A((function(t){void 0===t&&(t=[]),t.forEach((function(t){var r=t.contentRect,n=r.left,o=r.top,i=r.width,a=r.height;e.animationFrameID=window.requestAnimationFrame((function(){e.resize({width:i,height:a,top:o,left:n})}))}))})),this.target&&this.resizeObserver.observe(this.target)},o.componentWillUnmount=function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver&&this.resizeObserver.disconnect(),this.resize.cancel()},o.render=function(){var e=this.props,t=e.className,r=e.children,n=(e.debounceTime,e.parentSizeStyles),o=(e.enableDebounceLeadingCall,function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["className","children","debounceTime","parentSizeStyles","enableDebounceLeadingCall"]));return l.createElement("div",c({style:n,ref:this.setTarget,className:t},o),r(c({},this.state,{ref:this.target,resize:this.resize})))},n}(l.Component);p(f,"propTypes",{className:o().string,debounceTime:o().number,enableDebounceLeadingCall:o().bool,children:o().func.isRequired}),p(f,"defaultProps",{debounceTime:300,enableDebounceLeadingCall:!0,parentSizeStyles:{width:"100%",height:"100%"}})},68872:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.withErrorBoundary=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(96540),i=l(o),a=l(r(30899));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=r(96540).babelPluginFlowReactPropTypes_proptype_ComponentType||r(5556).any,s=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={error:null,info:null},u(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidCatch",value:function(e,t){var r=this.props.onError;if("function"==typeof r)try{r.call(this,e,t?t.componentStack:"")}catch(e){}this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.FallbackComponent,n=this.state,o=n.error,a=n.info;return null!==o?i.default.createElement(r,{componentStack:a?a.componentStack:"",error:o}):t||null}}]),t}(o.Component);s.defaultProps={FallbackComponent:a.default},s.propTypes={error:"function"==typeof Error?r(5556).instanceOf(Error):r(5556).any,info:r(5556).shape({componentStack:r(5556).string.isRequired})},(t.withErrorBoundary=function(e,t,r){var n=function(n){return i.default.createElement(s,{FallbackComponent:t,onError:r},i.default.createElement(e,n))},o=e.displayName||e.name;return n.displayName=o?"WithErrorBoundary("+o+")":"WithErrorBoundary",n}).propTypes=c===r(5556).any?{}:c,t.default=s},30899:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(96540))&&n.__esModule?n:{default:n},i=function(e,t){return e.toString()+"\n\nThis is located at:"+t},a=function(e){var t=e.componentStack,r=e.error;return o.default.createElement("div",{style:l,title:i(r,t)},o.default.createElement("svg",{style:u,viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid"},o.default.createElement("path",{d:"M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,\n        12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,\n        12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,\n        9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,\n        8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,\n        15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,\n        17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z"})))};a.propTypes={componentStack:r(5556).string.isRequired,error:"function"==typeof Error?r(5556).instanceOf(Error).isRequired:r(5556).any.isRequired};var l={height:"100%",maxHeight:"100vh",width:"100%",maxWidth:"100vw",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",backgroundColor:"#C00",color:"#FFF",boxSizing:"border-box",cursor:"help"},u={fill:"currentColor",flex:"1 1 auto"};t.default=a},45160:(e,t,r)=>{var n=a(r(30899)),o=r(68872),i=a(o);function a(e){return e&&e.__esModule?e:{default:e}}t.Ay=i.default,i.default,o.withErrorBoundary,n.default},53259:(e,t,r)=>{var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=r(96540),u=r(5556),c=[],s=[];function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function f(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=p(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(e){t.error=e}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function d(e,t){return l.createElement((r=e)&&r.__esModule?r.default:r,t);var r}function h(e,t){var p,f;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var h=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:d,webpack:null,modules:null},t),y=null;function m(){return y||(y=e(h.loader)),y.promise}return c.push(m),"function"==typeof h.webpack&&s.push((function(){if(e=h.webpack,"object"===n(r.m)&&e().every((function(e){return void 0!==e&&void 0!==r.m[e]})))return m();var e})),f=p=function(t){function r(n){o(this,r);var a=i(this,t.call(this,n));return a.retry=function(){a.setState({error:null,loading:!0,timedOut:!1}),y=e(h.loader),a._loadModule()},m(),a.state={error:y.error,pastDelay:!1,timedOut:!1,loading:y.loading,loaded:y.loaded},a}return a(r,t),r.preload=function(){return m()},r.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},r.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(h.modules)&&h.modules.forEach((function(t){e.context.loadable.report(t)})),y.loading){"number"==typeof h.delay&&(0===h.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),h.delay)),"number"==typeof h.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),h.timeout));var t=function(){e._mounted&&(e.setState({error:y.error,loaded:y.loaded,loading:y.loading}),e._clearTimeouts())};y.promise.then((function(){t()})).catch((function(e){t()}))}},r.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},r.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},r.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(h.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?h.render(this.state.loaded,this.props):null},r}(l.Component),p.contextTypes={loadable:u.shape({report:u.func.isRequired})},f}function y(e){return h(p,e)}y.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return h(f,e)};var m=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return l.Children.only(this.props.children)},t}(l.Component);function b(e){for(var t=[];e.length;){var r=e.pop();t.push(r())}return Promise.all(t).then((function(){if(e.length)return b(e)}))}m.propTypes={report:u.func.isRequired},m.childContextTypes={loadable:u.shape({report:u.func.isRequired}).isRequired},y.Capture=m,y.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},y.preloadReady=function(){return new Promise((function(e,t){b(s).then(e,e)}))},e.exports=y}}]);
//# sourceMappingURL=3d4dba052dd0ef9a9515.chunk.js.map