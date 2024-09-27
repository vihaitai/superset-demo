"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[270],{20270:(t,e,n)=>{n.r(e),n.d(e,{default:()=>O});var r=n(7240),i=n(96453),a=n(24143),o=n.n(a),s=n(5556),l=n.n(s);function c(t){var e=0,n=t.children,r=n&&n.length;if(r)for(;--r>=0;)e+=n[r].value;else e=1;t.value=e}function p(t,e){t instanceof Map?(t=[void 0,t],void 0===e&&(e=d)):void 0===e&&(e=h);for(var n,r,i,a,o,s=new g(t),l=[s];n=l.pop();)if((i=e(n.data))&&(o=(i=Array.from(i)).length))for(n.children=i,a=o-1;a>=0;--a)l.push(r=i[a]=new g(i[a])),r.parent=n,r.depth=n.depth+1;return s.eachBefore(f)}function h(t){return t.children}function d(t){return Array.isArray(t)?t[1]:null}function u(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function f(t){var e=0;do{t.height=e}while((t=t.parent)&&t.height<++e)}function g(t){this.data=t,this.depth=this.height=0,this.parent=null}g.prototype=p.prototype={constructor:g,count:function(){return this.eachAfter(c)},each:function(t,e){let n=-1;for(const r of this)t.call(e,r,++n,this);return this},eachAfter:function(t,e){for(var n,r,i,a=this,o=[a],s=[],l=-1;a=o.pop();)if(s.push(a),n=a.children)for(r=0,i=n.length;r<i;++r)o.push(n[r]);for(;a=s.pop();)t.call(e,a,++l,this);return this},eachBefore:function(t,e){for(var n,r,i=this,a=[i],o=-1;i=a.pop();)if(t.call(e,i,++o,this),n=i.children)for(r=n.length-1;r>=0;--r)a.push(n[r]);return this},find:function(t,e){let n=-1;for(const r of this)if(t.call(e,r,++n,this))return r},sum:function(t){return this.eachAfter((function(e){for(var n=+t(e.data)||0,r=e.children,i=r&&r.length;--i>=0;)n+=r[i].value;e.value=n}))},sort:function(t){return this.eachBefore((function(e){e.children&&e.children.sort(t)}))},path:function(t){for(var e=this,n=function(t,e){if(t===e)return t;var n=t.ancestors(),r=e.ancestors(),i=null;for(t=n.pop(),e=r.pop();t===e;)i=t,t=n.pop(),e=r.pop();return i}(e,t),r=[e];e!==n;)e=e.parent,r.push(e);for(var i=r.length;t!==n;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e},descendants:function(){return Array.from(this)},leaves:function(){var t=[];return this.eachBefore((function(e){e.children||t.push(e)})),t},links:function(){var t=this,e=[];return t.each((function(n){n!==t&&e.push({source:n.parent,target:n})})),e},copy:function(){return p(this).eachBefore(u)},[Symbol.iterator]:function*(){var t,e,n,r,i=this,a=[i];do{for(t=a.reverse(),a=[];i=t.pop();)if(yield i,e=i.children)for(n=0,r=e.length;n<r;++n)a.push(e[n])}while(a.length)}};var m=n(32142),y=n(7349),v=n(94963);const x=l().shape({name:l().string,val:l().number.isRequired}),b={name:l().string,val:l().number.isRequired,children:l().arrayOf(l().oneOfType([l().shape(($=()=>b,()=>$().apply(void 0,arguments))),x]))};var $;const w=l().oneOfType([l().shape(b),x]),T={data:l().arrayOf(w),width:l().number,height:l().number,colorScheme:l().string,dateTimeFormat:l().string,equalDateSize:l().bool,levels:l().arrayOf(l().string),metrics:l().arrayOf(l().oneOfType([l().string,l().object])),numberFormat:l().string,partitionLimit:l().number,partitionThreshold:l().number,timeSeriesOption:l().string,useLogScale:l().bool,useRichTooltip:l().bool};function k(t,e){const{width:n,height:r,data:i,colorScheme:a,dateTimeFormat:s,equalDateSize:l,levels:c,useLogScale:h=!1,metrics:d=[],numberFormat:u,partitionLimit:f,partitionThreshold:g,useRichTooltip:x,timeSeriesOption:b="not_time",sliceId:$}=e,w=o().select(t);w.classed("superset-legacy-chart-partition",!0);const T=["adv_anal","time_series"].includes(b),k=(0,m.gV)(u),A=(0,y.mo)(s),N=v.getScale(a);w.selectAll("*").remove();const S=w.append("div").classed("partition-tooltip",!0);function O(t){return d.includes(t.data.name)&&T}function R(t){return t?T&&1===t?"Date":c[t-(T?2:1)]:"Metric"}function C(e,s){const c=s[e],d=n,u=r/i.length,m=o().scale.linear().range([0,d]),y=o().scale.linear().range([0,u]),v=w.append("div").attr("class","chart").style("width",`${d}px`).style("height",`${u}px`).append("svg:svg").attr("width",d).attr("height",u);e!==i.length-1&&i.length>1&&v.style("padding-bottom","3px"),0!==e&&i.length>1&&v.style("padding-top","3px");const b=p(c);function T(e,n){let r="<table>";if(x){const t=function(t){const e=[t];let n=t;for(;n.parent;)e.push(n.parent),n=n.parent;return e}(n);t.reverse().forEach((t=>{r+="<tbody>",r+=`<tr><td><div style='border: 2px solid transparent;background-color: ${t.color};'></div></td><td>${R(t.depth)}</td><td>${t.name}</td><td>${t.disp}</td></tr>`}))}else r+=`<thead><tr><td colspan="3"><strong>${R(n.depth)}</strong></td></tr></thead><tbody>`,r+=`<tr><td><div style='border: thin solid grey; background-color: ${n.color};'></div></td><td>${n.name}</td><td>${n.disp}</td></tr>`;r+="</tbody></table>";const[i,a]=o().mouse(t);e.html(r).style("left",`${i+15}px`).style("top",`${a}px`)}b.eachAfter((t=>{t.disp=t.data.val,t.value=t.disp<0?-t.disp:t.disp,t.weight=t.value,t.name=t.data.name,t.parent&&O(t.parent)&&(t.weight=l?1:t.value,t.value=t.name,t.name=A(t.name)),h&&(t.weight=Math.log(t.weight+1)),t.disp=t.disp&&!Number.isNaN(t.disp)&&Number.isFinite(t.disp)?k(t.disp):""})),b.sort(((t,e)=>{const n=e.value-t.value;return 0===n?e.name>t.name?1:-1:n})),g&&g>=0&&b.each((t=>{if(t.sum=t.children&&t.children.reduce(((t,e)=>t+e.weight),0)||1,t.children)if(O(t)){if(l)return;const e=[];for(let n=1;n<t.children.length;n+=1)t.children[n].weight/t.sum<g&&e.push(n);for(let n=e.length-1;n>=0;n-=1)t.children.splice(e[n],1)}else{let e;for(e=1;e<t.children.length&&!(t.children[e].weight/t.sum<g);e+=1);t.children=t.children.slice(0,e)}})),f&&f>=0&&b.each((t=>{t.children&&t.children.length>f&&(O(t)||(t.children=t.children.slice(0,f)))})),b.eachAfter((t=>{t.sum=t.children&&t.children.reduce(((t,e)=>t+e.weight),0)||1}));const C=function(t){const e=[],n=1/(t.height+1);let r=null;return t.each((t=>{t.y=n*t.depth,t.dy=n,t.parent?(t.x=r.depth===t.parent.depth?0:r.x+r.dx,t.dx=t.weight/t.parent.sum*t.parent.dx):(t.x=0,t.dx=1),r=t,e.push(t)})),e}(b);let U=d/b.dx,z=u/1;function B(t){return`translate(8,${t.dx*z/2})`}const D=v.selectAll("g").data(C).enter().append("svg:g").attr("transform",(t=>`translate(${m(t.y)},${y(t.x)})`)).on("mouseover",(t=>{S.interrupt().transition().duration(100).style("opacity",.9),T(S,t)})).on("mousemove",(t=>{T(S,t)})).on("mouseout",(()=>{S.interrupt().transition().duration(250).style("opacity",0)}));D.on("click",(function t(e){if(!e.children)return!!e.parent&&t(e.parent);U=(e.y?d-40:d)/(1-e.y),z=u/e.dx,m.domain([e.y,1]).range([e.y?40:0,d]),y.domain([e.x,e.x+e.dx]);const n=D.transition().duration(o().event.altKey?7500:750).attr("transform",(t=>`translate(${m(t.y)},${y(t.x)})`));return n.select("rect").attr("width",e.dy*U).attr("height",(t=>t.dx*z)),n.select("text").attr("transform",B).style("opacity",(t=>t.dx*z>12?1:0)),o().event.stopPropagation(),!0})),D.append("svg:rect").attr("width",b.dy*U).attr("height",(t=>t.dx*z)),D.append("svg:text").attr("transform",B).attr("dy","0.35em").style("opacity",(t=>t.dx*z>12?1:0)).text((t=>t.disp?`${t.name}: ${t.disp}`:t.name)),D.selectAll("rect").style("fill",(t=>(t.color=N(t.name,$,a),t.color)))}for(let t=0;t<i.length;t+=1)C(t,i)}k.displayName="Icicle",k.propTypes=T;const A=k;var N=n(2445);const S=(0,r.A)(A),O=(0,i.I4)((({className:t,...e})=>(0,N.Y)("div",{className:t,children:(0,N.Y)(S,{...e})})))`
  ${({theme:t})=>`\n    .superset-legacy-chart-partition {\n      position: relative;\n    }\n\n    .superset-legacy-chart-partition .chart {\n      display: block;\n      margin: auto;\n      font-size: ${t.typography.sizes.s}px;\n    }\n\n    .superset-legacy-chart-partition rect {\n      stroke: ${t.colors.grayscale.light2};\n      fill: ${t.colors.grayscale.light1};\n      fill-opacity: ${t.opacity.heavy};\n      transition: fill-opacity 180ms linear;\n      cursor: pointer;\n    }\n\n    .superset-legacy-chart-partition rect:hover {\n      fill-opacity: 1;\n    }\n\n    .superset-legacy-chart-partition g text {\n      font-weight: ${t.typography.weights.bold};\n      fill: ${t.colors.grayscale.dark1};\n    }\n\n    .superset-legacy-chart-partition g:hover text {\n      fill: ${t.colors.grayscale.dark2};\n    }\n\n    .superset-legacy-chart-partition .partition-tooltip {\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      padding: ${t.gridUnit}px;\n      pointer-events: none;\n      background-color: ${t.colors.grayscale.dark2};\n      border-radius: ${t.gridUnit}px;\n    }\n\n    .partition-tooltip td {\n      padding-left: ${t.gridUnit}px;\n      font-size: ${t.typography.sizes.s}px;\n      color: ${t.colors.grayscale.light5};\n    }\n  `}
`},7240:(t,e,n)=>{n.d(e,{A:()=>a});var r=n(96540),i=n(2445);function a(t,e){class n extends r.Component{constructor(t){super(t),this.container=void 0,this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=e&&e.componentWillUnmount&&e.componentWillUnmount.bind(this)()}setContainerRef(t){this.container=t}execute(){this.container&&t(this.container,this.props)}render(){const{id:t,className:e}=this.props;return(0,i.Y)("div",{ref:this.setContainerRef,id:t,className:e})}}const a=n;return t.displayName&&(a.displayName=t.displayName),t.propTypes&&(a.propTypes={...a.propTypes,...t.propTypes}),t.defaultProps&&(a.defaultProps=t.defaultProps),n}}}]);
//# sourceMappingURL=4937241862880548d0ba.chunk.js.map