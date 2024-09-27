"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1245],{87454:(t,e,r)=>{r.d(e,{A:()=>g});var s=r(64467),i=r(97418),o=r(43508),n=r(77292),a=r(92717);function u(t,e){const r={};for(const s in t)e.includes(s)||(r[s]=t[s]);return r}class g extends i.A{constructor(...t){super(...t),(0,s.A)(this,"state",void 0)}initializeAggregationLayer(t){super.initializeState(this.context),this.setState({ignoreProps:u(this.constructor._propTypes,t.data.props),dimensions:t})}updateState(t){super.updateState(t);const{changeFlags:e}=t;if(e.extensionsChanged){const t=this.getShaders({});t&&t.defines&&(t.defines.NON_INSTANCED_MODEL=1),this.updateShaders(t)}this._updateAttributes()}updateAttributes(t){this.setState({changedAttributes:t})}getAttributes(){return this.getAttributeManager().getShaderAttributes()}getModuleSettings(){const{viewport:t,mousePosition:e,gl:r}=this.context;return Object.assign(Object.create(this.props),{viewport:t,mousePosition:e,pickingActive:0,devicePixelRatio:(0,a.o0)(r)})}updateShaders(t){}isAggregationDirty(t,e={}){const{props:r,oldProps:s,changeFlags:i}=t,{compareAll:n=!1,dimension:a}=e,{ignoreProps:u}=this.state,{props:g,accessors:c=[]}=a,{updateTriggersChanged:d}=i;if(i.dataChanged)return!0;if(d){if(d.all)return!0;for(const t of c)if(d[t])return!0}if(n)return!!i.extensionsChanged||(0,o.Me)({oldProps:s,newProps:r,ignoreProps:u,propTypes:this.constructor._propTypes});for(const t of g)if(r[t]!==s[t])return!0;return!1}isAttributeChanged(t){const{changedAttributes:e}=this.state;return t?e&&void 0!==e[t]:!function(t){let e=!0;for(const r in t){e=!1;break}return e}(e)}_getAttributeManager(){return new n.A(this.context.gl,{id:this.props.id,stats:this.context.stats})}}(0,s.A)(g,"layerName","AggregationLayer")},61816:(t,e,r)=>{r.d(e,{Q:()=>s,Y:()=>i});const s=[[255,255,178],[254,217,118],[254,178,76],[253,141,60],[240,59,32],[189,0,38]];function i(t,e=!1,r=Float32Array){let s;if(Number.isFinite(t[0]))s=new r(t);else{s=new r(4*t.length);let e=0;for(let r=0;r<t.length;r++){const i=t[r];s[e++]=i[0],s[e++]=i[1],s[e++]=i[2],s[e++]=Number.isFinite(i[3])?i[3]:255}}if(e)for(let t=0;t<s.length;t++)s[t]/=255;return s}},97418:(t,e,r)=>{r.d(e,{A:()=>u});var s=r(64467),i=r(4679),o=r(63621),n=r(40129),a=r(13379);class u extends i.A{get isComposite(){return!0}get isLoaded(){return super.isLoaded&&this.getSubLayers().every((t=>t.isLoaded))}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(t){}setState(t){super.setState(t),this.setNeedsUpdate()}getPickingInfo({info:t}){const{object:e}=t;return e&&e.__source&&e.__source.parent&&e.__source.parent.id===this.id?(t.object=e.__source.object,t.index=e.__source.index,t):t}filterSubLayer(t){return!0}shouldRenderSubLayer(t,e){return e&&e.length}getSubLayerClass(t,e){const{_subLayerProps:r}=this.props;return r&&r[t]&&r[t].type||e}getSubLayerRow(t,e,r){return t.__source={parent:this,object:e,index:r},t}getSubLayerAccessor(t){if("function"==typeof t){const e={index:-1,data:this.props.data,target:[]};return(r,s)=>r&&r.__source?(e.index=r.__source.index,t(r.__source.object,e)):t(r,s)}return t}getSubLayerProps(t={}){var e;const{opacity:r,pickable:s,visible:i,parameters:o,getPolygonOffset:n,highlightedObjectIndex:u,autoHighlight:g,highlightColor:c,coordinateSystem:d,coordinateOrigin:p,wrapLongitude:l,positionFormat:h,modelMatrix:b,extensions:f,fetch:y,operation:_,_subLayerProps:A}=this.props,S={id:"",updateTriggers:{},opacity:r,pickable:s,visible:i,parameters:o,getPolygonOffset:n,highlightedObjectIndex:u,autoHighlight:g,highlightColor:c,coordinateSystem:d,coordinateOrigin:p,wrapLongitude:l,positionFormat:h,modelMatrix:b,extensions:f,fetch:y,operation:_},L=A&&t.id&&A[t.id],m=L&&L.updateTriggers,x=t.id||"sublayer";if(L){const e=this.props[a.fW],r=t.type?t.type._propTypes:{};for(const t in L){const s=r[t]||e[t];s&&"accessor"===s.type&&(L[t]=this.getSubLayerAccessor(L[t]))}}Object.assign(S,t,L),S.id="".concat(this.props.id,"-").concat(x),S.updateTriggers={all:null===(e=this.props.updateTriggers)||void 0===e?void 0:e.all,...t.updateTriggers,...m};for(const t of f){const e=t.getSubLayerProps.call(this,t);e&&Object.assign(S,e,{updateTriggers:Object.assign(S.updateTriggers,e.updateTriggers)})}return S}_updateAutoHighlight(t){for(const e of this.getSubLayers())e.updateAutoHighlight(t)}_getAttributeManager(){return null}_postUpdate(t,e){let r=this.internalState.subLayers;const s=!r||this.needsUpdate();if(s){const t=this.renderLayers();r=(0,n.B)(t,Boolean),this.internalState.subLayers=r}(0,o.A)("compositeLayer.renderLayers",this,s,r);for(const t of r)t.parent=this}}(0,s.A)(u,"layerName","CompositeLayer")},20901:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h,getLayer:()=>l});var s=r(74993),i=r(95579),o=r(69161),n=r(41857),a=r(25564),u=r(49443),g=r(47823),c=r(32548),d=r(2445);function p(t){return(0,d.Y)("div",{className:"deckgl-tooltip",children:(0,d.Y)(c.A,{label:(0,i.t)("Centroid (Longitude and Latitude): "),value:`(${null==t?void 0:t.coordinate[0]}, ${null==t?void 0:t.coordinate[1]})`})})}const l=(t,e,r,i)=>{var g,c,d,l;const h=t,{intensity:b=1,radius_pixels:f=30,aggregation:y="SUM",js_data_mutator:_,linear_color_scheme:A}=h;let S=e.data.features;_&&(S=(0,a.A)(h.js_data_mutator)(S));const L=null==(g=(0,o.A)())||null==(c=g.get(A))?void 0:c.createLinearScale([0,6]),m=null==L||null==(d=L.range())||null==(l=d.map((t=>(0,u.hexToRGB)(t))))?void 0:l.reverse();return new s.A({id:`heatmp-layer-${h.slice_id}`,data:S,intensity:b,radiusPixels:f,colorRange:m,aggregation:y.toUpperCase(),getPosition:t=>t.position,getWeight:t=>t.weight?t.weight:1,...(0,n.T)(h,i,p)})},h=(0,g.y)(l,(function(t){return t.map((t=>t.position))}))}}]);
//# sourceMappingURL=2801856827a436b7d07e.chunk.js.map