"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5736],{97418:(t,e,n)=>{n.d(e,{A:()=>l});var i=n(64467),o=n(4679),r=n(63621),s=n(40129),a=n(13379);class l extends o.A{get isComposite(){return!0}get isLoaded(){return super.isLoaded&&this.getSubLayers().every((t=>t.isLoaded))}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(t){}setState(t){super.setState(t),this.setNeedsUpdate()}getPickingInfo({info:t}){const{object:e}=t;return e&&e.__source&&e.__source.parent&&e.__source.parent.id===this.id?(t.object=e.__source.object,t.index=e.__source.index,t):t}filterSubLayer(t){return!0}shouldRenderSubLayer(t,e){return e&&e.length}getSubLayerClass(t,e){const{_subLayerProps:n}=this.props;return n&&n[t]&&n[t].type||e}getSubLayerRow(t,e,n){return t.__source={parent:this,object:e,index:n},t}getSubLayerAccessor(t){if("function"==typeof t){const e={index:-1,data:this.props.data,target:[]};return(n,i)=>n&&n.__source?(e.index=n.__source.index,t(n.__source.object,e)):t(n,i)}return t}getSubLayerProps(t={}){var e;const{opacity:n,pickable:i,visible:o,parameters:r,getPolygonOffset:s,highlightedObjectIndex:l,autoHighlight:c,highlightColor:d,coordinateSystem:p,coordinateOrigin:u,wrapLongitude:g,positionFormat:h,modelMatrix:f,extensions:m,fetch:y,operation:v,_subLayerProps:P}=this.props,x={id:"",updateTriggers:{},opacity:n,pickable:i,visible:o,parameters:r,getPolygonOffset:s,highlightedObjectIndex:l,autoHighlight:c,highlightColor:d,coordinateSystem:p,coordinateOrigin:u,wrapLongitude:g,positionFormat:h,modelMatrix:f,extensions:m,fetch:y,operation:v},b=P&&t.id&&P[t.id],_=b&&b.updateTriggers,S=t.id||"sublayer";if(b){const e=this.props[a.fW],n=t.type?t.type._propTypes:{};for(const t in b){const i=n[t]||e[t];i&&"accessor"===i.type&&(b[t]=this.getSubLayerAccessor(b[t]))}}Object.assign(x,t,b),x.id="".concat(this.props.id,"-").concat(S),x.updateTriggers={all:null===(e=this.props.updateTriggers)||void 0===e?void 0:e.all,...t.updateTriggers,..._};for(const t of m){const e=t.getSubLayerProps.call(this,t);e&&Object.assign(x,e,{updateTriggers:Object.assign(x.updateTriggers,e.updateTriggers)})}return x}_updateAutoHighlight(t){for(const e of this.getSubLayers())e.updateAutoHighlight(t)}_getAttributeManager(){return null}_postUpdate(t,e){let n=this.internalState.subLayers;const i=!n||this.needsUpdate();if(i){const t=this.renderLayers();n=(0,s.B)(t,Boolean),this.internalState.subLayers=n}(0,r.A)("compositeLayer.renderLayers",this,i,n);for(const t of n)t.parent=this}}(0,i.A)(l,"layerName","CompositeLayer")},36976:(t,e,n)=>{n.d(e,{A:()=>y});var i=n(64467),o=n(4679),r=n(34685),s=n(88514),a=n(31320),l=n(33023),c=n(82170),d=n(51923),p=n(5267);class u extends d.A{constructor(t){super({...t,attributes:{positions:{size:3,padding:18,initialize:!0,type:t.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(t){return this.attributes[t]}getGeometryFromBuffer(t){return this.normalize?super.getGeometryFromBuffer(t):null}normalizeGeometry(t){return this.normalize?function(t,e,n,i){let o;if(Array.isArray(t[0])){const n=t.length*e;o=new Array(n);for(let n=0;n<t.length;n++)for(let i=0;i<e;i++)o[n*e+i]=t[n][i]||0}else o=t;return n?(0,p.Mk)(o,{size:e,gridResolution:n}):i?(0,p.Iy)(o,{size:e}):o}(t,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):t}getGeometrySize(t){if(g(t)){let e=0;for(const n of t)e+=this.getGeometrySize(n);return e}const e=this.getPathLength(t);return e<2?0:this.isClosed(t)?e<3?0:e+2:e}updateGeometryAttributes(t,e){if(0!==e.geometrySize)if(t&&g(t))for(const n of t){const t=this.getGeometrySize(n);e.geometrySize=t,this.updateGeometryAttributes(n,e),e.vertexStart+=t}else this._updateSegmentTypes(t,e),this._updatePositions(t,e)}_updateSegmentTypes(t,e){const n=this.attributes.segmentTypes,i=!!t&&this.isClosed(t),{vertexStart:o,geometrySize:r}=e;n.fill(0,o,o+r),i?(n[o]=4,n[o+r-2]=4):(n[o]+=1,n[o+r-2]+=2),n[o+r-1]=4}_updatePositions(t,e){const{positions:n}=this.attributes;if(!n||!t)return;const{vertexStart:i,geometrySize:o}=e,r=new Array(3);for(let e=i,s=0;s<o;e++,s++)this.getPointOnPath(t,s,r),n[3*e]=r[0],n[3*e+1]=r[1],n[3*e+2]=r[2]}getPathLength(t){return t.length/this.positionSize}getPointOnPath(t,e,n=[]){const{positionSize:i}=this;e*i>=t.length&&(e+=1-t.length/i);const o=e*i;return n[0]=t[o],n[1]=t[o+1],n[2]=3===i&&t[o+2]||0,n}isClosed(t){if(!this.normalize)return Boolean(this.opts.loop);const{positionSize:e}=this,n=t.length-e;return t[0]===t[n]&&t[1]===t[n+1]&&(2===e||t[2]===t[n+2])}}function g(t){return Array.isArray(t[0])}const h=[0,0,0,255],f={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:t=>t.path},getColor:{type:"accessor",value:h},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},m={enter:(t,e)=>e.length?e.subarray(e.length-t.length):t};class y extends o.A{constructor(...t){super(...t),(0,i.A)(this,"state",void 0)}getShaders(){return super.getShaders({vs:"#define SHADER_NAME path-layer-vertex-shader\n\nattribute vec2 positions;\n\nattribute float instanceTypes;\nattribute vec3 instanceStartPositions;\nattribute vec3 instanceEndPositions;\nattribute vec3 instanceLeftPositions;\nattribute vec3 instanceRightPositions;\nattribute vec3 instanceLeftPositions64Low;\nattribute vec3 instanceStartPositions64Low;\nattribute vec3 instanceEndPositions64Low;\nattribute vec3 instanceRightPositions64Low;\nattribute float instanceStrokeWidths;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\n\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nuniform float jointType;\nuniform float capType;\nuniform float miterLimit;\nuniform bool billboard;\nuniform int widthUnits;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\nvarying float vJointType;\n\nconst float EPSILON = 0.001;\nconst vec3 ZERO_OFFSET = vec3(0.0);\n\nfloat flipIfTrue(bool flag) {\n  return -(float(flag) * 2. - 1.);\n}\nvec3 getLineJoinOffset(\n  vec3 prevPoint, vec3 currPoint, vec3 nextPoint,\n  vec2 width\n) {\n  bool isEnd = positions.x > 0.0;\n  float sideOfPath = positions.y;\n  float isJoint = float(sideOfPath == 0.0);\n\n  vec3 deltaA3 = (currPoint - prevPoint);\n  vec3 deltaB3 = (nextPoint - currPoint);\n\n  mat3 rotationMatrix;\n  bool needsRotation = !billboard && project_needs_rotation(currPoint, rotationMatrix);\n  if (needsRotation) {\n    deltaA3 = deltaA3 * rotationMatrix;\n    deltaB3 = deltaB3 * rotationMatrix;\n  }\n  vec2 deltaA = deltaA3.xy / width;\n  vec2 deltaB = deltaB3.xy / width;\n\n  float lenA = length(deltaA);\n  float lenB = length(deltaB);\n\n  vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);\n  vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);\n\n  vec2 perpA = vec2(-dirA.y, dirA.x);\n  vec2 perpB = vec2(-dirB.y, dirB.x);\n  vec2 tangent = dirA + dirB;\n  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;\n  vec2 miterVec = vec2(-tangent.y, tangent.x);\n  vec2 dir = isEnd ? dirA : dirB;\n  vec2 perp = isEnd ? perpA : perpB;\n  float L = isEnd ? lenA : lenB;\n  float sinHalfA = abs(dot(miterVec, perp));\n  float cosHalfA = abs(dot(dirA, miterVec));\n  float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);\n  float cornerPosition = sideOfPath * turnDirection;\n\n  float miterSize = 1.0 / max(sinHalfA, EPSILON);\n  miterSize = mix(\n    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),\n    miterSize,\n    step(0.0, cornerPosition)\n  );\n\n  vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))\n    * (sideOfPath + isJoint * turnDirection);\n  bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));\n  bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));\n  bool isCap = isStartCap || isEndCap;\n  if (isCap) {\n    offsetVec = mix(perp * sideOfPath, dir * capType * 4.0 * flipIfTrue(isStartCap), isJoint);\n    vJointType = capType;\n  } else {\n    vJointType = jointType;\n  }\n  vPathLength = L;\n  vCornerOffset = offsetVec;\n  vMiterLength = dot(vCornerOffset, miterVec * turnDirection);\n  vMiterLength = isCap ? isJoint : vMiterLength;\n\n  vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);\n  vPathPosition = vec2(\n    dot(offsetFromStartOfPath, perp),\n    dot(offsetFromStartOfPath, dir)\n  );\n  geometry.uv = vPathPosition;\n\n  float isValid = step(instanceTypes, 3.5);\n  vec3 offset = vec3(offsetVec * width * isValid, 0.0);\n\n  if (needsRotation) {\n    offset = rotationMatrix * offset;\n  }\n  return offset;\n}\nvoid clipLine(inout vec4 position, vec4 refPosition) {\n  if (position.w < EPSILON) {\n    float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);\n    position = refPosition + (position - refPosition) * r;\n  }\n}\n\nvoid main() {\n  geometry.pickingColor = instancePickingColors;\n\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);\n\n  float isEnd = positions.x;\n\n  vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);\n  vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);\n\n  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);\n  vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);\n\n  vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);\n  vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);\n\n  geometry.worldPosition = currPosition;\n  vec2 widthPixels = vec2(clamp(\n    project_size_to_pixel(instanceStrokeWidths * widthScale, widthUnits),\n    widthMinPixels, widthMaxPixels) / 2.0);\n  vec3 width;\n\n  if (billboard) {\n    vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);\n    vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);\n    vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);\n\n    clipLine(prevPositionScreen, currPositionScreen);\n    clipLine(nextPositionScreen, currPositionScreen);\n    clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));\n\n    width = vec3(widthPixels, 0.0);\n    DECKGL_FILTER_SIZE(width, geometry);\n\n    vec3 offset = getLineJoinOffset(\n      prevPositionScreen.xyz / prevPositionScreen.w,\n      currPositionScreen.xyz / currPositionScreen.w,\n      nextPositionScreen.xyz / nextPositionScreen.w,\n      project_pixel_size_to_clipspace(width.xy)\n    );\n\n    DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);\n    gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);\n  } else {\n    prevPosition = project_position(prevPosition, prevPosition64Low);\n    currPosition = project_position(currPosition, currPosition64Low);\n    nextPosition = project_position(nextPosition, nextPosition64Low);\n\n    width = vec3(project_pixel_size(widthPixels), 0.0);\n    DECKGL_FILTER_SIZE(width, geometry);\n\n    vec3 offset = getLineJoinOffset(prevPosition, currPosition, nextPosition, width.xy);\n    geometry.position = vec4(currPosition + offset, 1.0);\n    gl_Position = project_common_position_to_clipspace(geometry.position);\n    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  }\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n",fs:"#define SHADER_NAME path-layer-fragment-shader\n\nprecision highp float;\n\nuniform float miterLimit;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\nvarying float vJointType;\n\nvoid main(void) {\n  geometry.uv = vPathPosition;\n\n  if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {\n    if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {\n      discard;\n    }\n    if (vJointType < 0.5 && vMiterLength > miterLimit + 1.0) {\n      discard;\n    }\n  }\n  gl_FragColor = vColor;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:[r.A,s.A]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({positions:{size:3,vertexOffset:1,type:5130,fp64:this.use64bitPositions(),transition:m,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:5121,update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:m,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,accessor:"getColor",transition:m,defaultValue:h},instancePickingColors:{size:3,type:5121,accessor:(t,{index:e,target:n})=>this.encodePickingColor(t&&t.__source?t.__source.index:e,n)}}),this.setState({pathTesselator:new u({fp64:this.use64bitPositions()})})}updateState(t){super.updateState(t);const{props:e,changeFlags:n}=t,i=this.getAttributeManager();if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPath)){const{pathTesselator:t}=this.state,o=e.data.attributes||{};t.updateGeometry({data:e.data,geometryBuffer:o.getPath,buffers:o,normalize:!e._pathType,loop:"loop"===e._pathType,getGeometry:e.getPath,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:n.dataChanged}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),n.dataChanged||i.invalidateAll()}if(n.extensionsChanged){var o;const{gl:t}=this.context;null===(o=this.state.model)||void 0===o||o.delete(),this.state.model=this._getModel(t),i.invalidateAll()}}getPickingInfo(t){const e=super.getPickingInfo(t),{index:n}=e,{data:i}=this.props;return i[0]&&i[0].__source&&(e.object=i.find((t=>t.__source.index===n))),e}disablePickingIndex(t){const{data:e}=this.props;if(e[0]&&e[0].__source)for(let n=0;n<e.length;n++)e[n].__source.index===t&&this._disablePickingIndex(n);else super.disablePickingIndex(t)}draw({uniforms:t}){const{jointRounded:e,capRounded:n,billboard:i,miterLimit:o,widthUnits:r,widthScale:s,widthMinPixels:l,widthMaxPixels:c}=this.props;this.state.model.setUniforms(t).setUniforms({jointType:Number(e),capType:Number(n),billboard:i,widthUnits:a.p5[r],widthScale:s,miterLimit:o,widthMinPixels:l,widthMaxPixels:c}).draw()}_getModel(t){return new l.A(t,{...this.getShaders(),id:this.props.id,geometry:new c.A({drawMode:4,attributes:{indices:new Uint16Array([0,1,2,1,4,2,1,3,4,3,5,4]),positions:{value:new Float32Array([0,0,0,-1,0,1,1,-1,1,1,1,0]),size:2}}}),isInstanced:!0})}calculatePositions(t){const{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("positions")}calculateSegmentTypes(t){const{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("segmentTypes")}}(0,i.A)(y,"defaultProps",f),(0,i.A)(y,"layerName","PathLayer")},67823:(t,e,n)=>{function i({data:t,getIndex:e,dataRange:n,replace:i}){const{startRow:o=0,endRow:r=1/0}=n,s=t.length;let a=s,l=s;for(let n=0;n<s;n++){const i=e(t[n]);if(a>n&&i>=o&&(a=n),i>=r){l=n;break}}let c=a;const d=l-a!==i.length?t.slice(l):void 0;for(let e=0;e<i.length;e++)t[c++]=i[e];if(d){for(let e=0;e<d.length;e++)t[c++]=d[e];t.length=c}return{startRow:a,endRow:a+i.length}}n.d(e,{J:()=>i})},70957:(t,e,n)=>{n.d(e,{S:()=>f});var i=n(2404),o=n.n(i),r=n(96540),s=n(92094),a=n(45722),l=n(83505),c=n(96453),d=n(58642),p=n(2445);const u=c.I4.div`
  ${({theme:t,top:e,left:n})=>`\n    position: absolute;\n    top: ${e}px;\n    left: ${n}px;\n    padding: ${2*t.gridUnit}px;\n    margin: ${2*t.gridUnit}px;\n    background: ${t.colors.grayscale.dark2};\n    color: ${t.colors.grayscale.light5};\n    maxWidth: 300px;\n    fontSize: ${t.typography.sizes.s}px;\n    zIndex: 9;\n    pointerEvents: none;\n  `}
`;function g(t){const{tooltip:e}=t;if(null==e)return null;const{x:n,y:i,content:o}=e,r="string"==typeof o?(0,d.nn)(o):o;return(0,p.Y)(u,{top:i,left:n,children:r})}const h=(0,r.memo)((0,r.forwardRef)(((t,e)=>{const[n,i]=(0,r.useState)(null),[c,d]=(0,r.useState)(null),[u,h]=(0,r.useState)(t.viewport),f=(0,l.Z)(t.viewport);(0,r.useImperativeHandle)(e,(()=>({setTooltip:i})),[]);const m=(0,r.useCallback)((()=>{if(c&&Date.now()-c>250){const e=t.setControlValue;e&&e("viewport",u),d(null)}}),[c,t.setControlValue,u]);(0,r.useEffect)((()=>{const t=setInterval(m,250);return clearInterval(t)}),[m]),(0,r.useEffect)((()=>{o()(t.viewport,f)||h(t.viewport)}),[f,t.viewport]);const y=(0,r.useCallback)((({viewState:t})=>{h(t),d(Date.now())}),[]),v=(0,r.useCallback)((()=>t.layers.some((t=>"function"==typeof t))?t.layers.map((t=>"function"==typeof t?t():t)):t.layers),[t.layers]),{children:P=null,height:x,width:b}=t;return(0,p.FD)(p.FK,{children:[(0,p.FD)("div",{style:{position:"relative",width:b,height:x},children:[(0,p.Y)(a.A,{controller:!0,width:b,height:x,layers:v(),viewState:u,glOptions:{preserveDrawingBuffer:!0},onViewStateChange:y,children:(0,p.Y)(s.b,{preserveDrawingBuffer:!0,mapStyle:t.mapStyle||"light",mapboxApiAccessToken:t.mapboxApiAccessToken})}),P]}),(0,p.Y)(g,{tooltip:n})]})}))),f=(0,c.I4)(h)`
  .deckgl-tooltip > div {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`},32548:(t,e,n)=>{n.d(e,{A:()=>o});var i=n(2445);const o=({label:t,value:e})=>(0,i.FD)("div",{children:[t,(0,i.Y)("strong",{children:e})]})},66671:(t,e,n)=>{n.d(e,{A:()=>d});var i=n(96540),o=n(96453),r=n(32142),s=n(2445);const a=o.I4.div`
  ${({theme:t})=>`\n    font-size: ${t.typography.sizes.s}px;\n    position: absolute;\n    background: ${t.colors.grayscale.light5};\n    box-shadow: 0 0 ${t.gridUnit}px ${t.colors.grayscale.light2};\n    margin: ${6*t.gridUnit}px;\n    padding: ${3*t.gridUnit}px ${5*t.gridUnit}px;\n    outline: none;\n    overflow-y: scroll;\n    max-height: 200px;\n\n    & ul {\n      list-style: none;\n      padding-left: 0;\n      margin: 0;\n\n      & li a {\n        display: flex;\n        color: ${t.colors.grayscale.base};\n        text-decoration: none;\n        padding: ${t.gridUnit}px 0;\n\n        & span {\n          margin-right: ${t.gridUnit}px;\n        }\n      }\n    }\n  `}
`,l=" - ",c=({format:t=null,forceCategorical:e=!1,position:n="tr",categories:i={},toggleCategory:o=(()=>{}),showSingleCategory:c=(()=>{})})=>{const d=n=>{if(!t||e)return n;const i=parseFloat(n);return(0,r.ZV)(t,i)},p=e=>{if(!t)return e;if(e.includes(l)){const t=e.split(l);return d(t[0])+l+d(t[1])}return d(e)};if(0===Object.keys(i).length||null===n)return null;const u=Object.entries(i).map((([t,e])=>{const n={color:`rgba(${e.color.join(", ")})`},i=e.enabled?"◼":"◻";return(0,s.Y)("li",{children:(0,s.FD)("a",{href:"#",role:"button",onClick:()=>o(t),onDoubleClick:()=>c(t),children:[(0,s.Y)("span",{style:n,children:i})," ",p(t)]})},t)})),g={position:"absolute",["t"===(null==n?void 0:n.charAt(0))?"top":"bottom"]:"0px",["r"===(null==n?void 0:n.charAt(1))?"right":"left"]:"10px"};return(0,s.Y)(a,{className:"dupa",style:g,children:(0,s.Y)("ul",{children:u})})},d=(0,i.memo)(c)},95736:(t,e,n)=>{n.r(e),n.d(e,{default:()=>M,getLayer:()=>R});var i=n(96540),o=n(95579),r=n(64467),s=n(97418),a=n(93261),l=n(98537),c=n(46101),d=n(36976),p=n(41595),u=n(67823);const g=[0,0,0,255],h={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:"CW",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,lineJointRounded:!1,lineMiterLimit:4,getPolygon:{type:"accessor",value:t=>t.polygon},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:g},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0};class f extends s.A{initializeState(){this.state={paths:[]},this.props.getLineDashArray&&a.A.removed("getLineDashArray","PathStyleExtension")()}updateState({changeFlags:t}){const e=t.dataChanged||t.updateTriggersChanged&&(t.updateTriggersChanged.all||t.updateTriggersChanged.getPolygon);if(e&&Array.isArray(t.dataChanged)){const e=this.state.paths.slice(),n=t.dataChanged.map((t=>(0,u.J)({data:e,getIndex:t=>t.__source.index,dataRange:t,replace:this._getPaths(t)})));this.setState({paths:e,pathsDiff:n})}else e&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(t={}){const{data:e,getPolygon:n,positionFormat:i,_normalize:o}=this.props,r=[],s="XY"===i?2:3,{startRow:a,endRow:c}=t,{iterable:d,objectInfo:u}=(0,l.X)(e,a,c);for(const t of d){u.index++;let e=n(t,u);o&&(e=p.S8(e,s));const{holeIndices:i}=e,a=e.positions||e;if(i)for(let e=0;e<=i.length;e++){const n=a.slice(i[e-1]||0,i[e]||a.length);r.push(this.getSubLayerRow({path:n},t,u.index))}else r.push(this.getSubLayerRow({path:a},t,u.index))}return r}renderLayers(){const{data:t,_dataDiff:e,stroked:n,filled:i,extruded:o,wireframe:r,_normalize:s,_windingOrder:a,elevationScale:l,transitions:p,positionFormat:u}=this.props,{lineWidthUnits:h,lineWidthScale:f,lineWidthMinPixels:m,lineWidthMaxPixels:y,lineJointRounded:v,lineMiterLimit:P,lineDashJustified:x}=this.props,{getFillColor:b,getLineColor:_,getLineWidth:S,getLineDashArray:w,getElevation:L,getPolygon:A,updateTriggers:C,material:T}=this.props,{paths:E,pathsDiff:F}=this.state,k=this.getSubLayerClass("fill",c.A),O=this.getSubLayerClass("stroke",d.A),z=this.shouldRenderSubLayer("fill",E)&&new k({_dataDiff:e,extruded:o,elevationScale:l,filled:i,wireframe:r,_normalize:s,_windingOrder:a,getElevation:L,getFillColor:b,getLineColor:o&&r?_:g,material:T,transitions:p},this.getSubLayerProps({id:"fill",updateTriggers:C&&{getPolygon:C.getPolygon,getElevation:C.getElevation,getFillColor:C.getFillColor,lineColors:o&&r,getLineColor:C.getLineColor}}),{data:t,positionFormat:u,getPolygon:A});return[!o&&z,!o&&n&&this.shouldRenderSubLayer("stroke",E)&&new O({_dataDiff:F&&(()=>F),widthUnits:h,widthScale:f,widthMinPixels:m,widthMaxPixels:y,jointRounded:v,miterLimit:P,dashJustified:x,_pathType:"loop",transitions:p&&{getWidth:p.getLineWidth,getColor:p.getLineColor,getPath:p.getPolygon},getColor:this.getSubLayerAccessor(_),getWidth:this.getSubLayerAccessor(S),getDashArray:this.getSubLayerAccessor(w)},this.getSubLayerProps({id:"stroke",updateTriggers:C&&{getWidth:C.getLineWidth,getColor:C.getLineColor,getDashArray:C.getLineDashArray}}),{data:E,positionFormat:u,getPath:t=>t.path}),o&&z]}}(0,r.A)(f,"layerName","PolygonLayer"),(0,r.A)(f,"defaultProps",h);var m=n(66671),y=n(32548),v=n(98023),P=n.n(v),x=n(86914),b=n(84700),_=n(30885),S=n(69161),w=n(49443);const L=10;function A({break_points:t,num_buckets:e},n,i){if(!n)return[];if(void 0===t||0===t.length){const t=e?parseInt(e,10):L,[o,r]=(0,x.extent)(n,i).map((t=>"string"==typeof t?parseFloat(t):t));if(void 0===o||void 0===r)return[];const s=(r-o)/t,a=0===s?0:Math.max(0,Math.ceil(Math.log10(1/s))),l=r>parseFloat(r.toFixed(a))?1:0,c=o<parseFloat(o.toFixed(a))?o-1:o;return new Array(t+1+l).fill(0).map(((t,e)=>(c+e*s).toFixed(a)))}return t.sort(((t,e)=>parseFloat(t)-parseFloat(e)))}function C({break_points:t,num_buckets:e,linear_color_scheme:n,opacity:i},o,r){const s=t||e?A({break_points:t,num_buckets:e},o,r):null,a=Array.isArray(n)?new _.A({colors:n,id:"custom"}):(0,S.A)().get(n);if(!a)return null;let l,c;if(null!==s){const t=s.length-1,e=t>1?a.getColors(t):[a.colors[a.colors.length-1]],n=e[0],i=e[e.length-1];e.unshift(n),e.push(i);const o=s.map(parseFloat);l=(0,b.A)().domain(o).range(e),c=e=>!!e&&(e>o[t]||e<o[0])}else{const t=(0,x.extent)(o,r);l=t.some(P())?a.createLinearScale((0,x.extent)(o,r)):a.createLinearScale(),c=()=>!1}return t=>{const e=r(t);if(!e)return[0,0,0,0];const n=(0,w.hexToRGB)(l(e));return c(e)?n[3]=0:n[3]=i/100*255,n}}var T=n(41857),E=n(25564);function F(t){return"geometry"in t.polygon?t.polygon.geometry.coordinates[0]:t.polygon}var k=n(95490),O=n(70957),z=n(2445);function R(t,e,n,i,r,s){const a=t,l=a.fill_color_picker,c=a.stroke_color_picker;let d=[...e.data.features];a.js_data_mutator&&(d=(0,E.A)(a.js_data_mutator)(d));const p=a.metric?a.metric.label||a.metric:null,u=null===a.metric?()=>[l.r,l.g,l.b,255*l.a]:C(a,d,(t=>t[p])),g=t=>{const e=(null==u?void 0:u(t))||[0,0,0,0];return r.length>0&&!r.includes(t[a.line_column])&&(e[3]/=2),e},h=a.line_column&&a.metric&&["json","geohash","zipcode"].includes(a.line_type)?function(t){return e=>{var n,i,r,s;const a=(null==t||null==(n=t.metric)?void 0:n.label)||(null==t?void 0:t.metric);return(0,z.FD)("div",{className:"deckgl-tooltip",children:[(null==(i=e.object)?void 0:i.name)&&(0,z.Y)(y.A,{label:(0,o.t)("name")+": ",value:`${e.object.name}`}),(null==(r=e.object)?void 0:r[null==t?void 0:t.line_column])&&(0,z.Y)(y.A,{label:`${t.line_column}: `,value:`${e.object[t.line_column]}`}),(null==t?void 0:t.metric)&&(0,z.Y)(y.A,{label:`${a}: `,value:`${null==(s=e.object)?void 0:s[a]}`})]})}}(a):()=>null;return new f({id:`path-layer-${a.slice_id}`,data:d,filled:a.filled,stroked:a.stroked,getPolygon:F,getFillColor:g,getLineColor:[c.r,c.g,c.b,255*c.a],getLineWidth:a.line_width,extruded:a.extruded,lineWidthUnits:a.line_width_unit,getElevation:t=>function(t,e){return 0===e(t)[3]?0:t.elevation}(t,g),elevationScale:a.multiplier,fp64:!0,...(0,T.T)(a,i,h,s)})}const I=t=>{const e=(0,i.useRef)(),n=(0,i.useCallback)((()=>{let e={...t.viewport};if(t.formData.autozoom){const n=t.payload.data.features||[];e=(0,k.A)(e,{width:t.width,height:t.height,points:n.flatMap(F)})}return e.zoom<0&&(e.zoom=0),e}),[t]),[o,r]=(0,i.useState)(0),[s,a]=(0,i.useState)(n()),[l,c]=(0,i.useState)(t.payload.form_data),[d,p]=(0,i.useState)([]);(0,i.useEffect)((()=>{const{payload:e}=t;e.form_data!==l&&(a(n()),p([]),r(0),c(e.form_data))}),[n,t,l,s]);const u=(0,i.useCallback)((t=>{const{current:n}=e;n&&n.setTooltip(t)}),[]),g=(0,i.useCallback)((e=>{const{formData:n,onAddFilter:i}=t,s=(new Date).getDate(),a=s-o<=250,l=[...d];if(a)l.splice(0,l.length,e);else if(n.toggle_polygons){const t=l.indexOf(e);-1===t?l.push(e):l.splice(t,1)}else l.splice(0,1,e);p(l),r(s),n.table_filter&&i(n.line_column,d,!1,!0)}),[o,t,d]),h=(0,i.useCallback)((()=>void 0===t.payload.data.features?[]:[R(t.formData,t.payload,t.onAddFilter,u,d,g)]),[g,t.formData,t.onAddFilter,t.payload,d,u]),{payload:f,formData:y,setControlValue:v}=t,P=y.metric?y.metric.label||y.metric:null,x=function(t,e,n){const i=A(t,e,n),o=C(t,e,n),r={};return i.slice(1).forEach(((e,n)=>{const s=`${i[n]} - ${i[n+1]}`,a=.5*(parseFloat(i[n])+parseFloat(i[n+1])),l=t.metric?t.metric.label||t.metric:null;r[s]={color:null==o?void 0:o({[l||t.metric]:a}),enabled:!0}})),r}(y,f.data.features,(t=>t[P]));return(0,z.FD)("div",{style:{position:"relative"},children:[(0,z.Y)(O.S,{ref:e,viewport:s,layers:h(),setControlValue:v,mapStyle:y.mapbox_style,mapboxApiAccessToken:f.data.mapboxApiKey,width:t.width,height:t.height}),null!==y.metric&&(0,z.Y)(m.A,{categories:x,position:y.legend_position,format:y.legend_format})]})},M=(0,i.memo)(I)},41857:(t,e,n)=>{n.d(e,{T:()=>r,g:()=>a});var i=n(86914),o=n(25564);function r(t,e,n,i){const r=t;let s,a,l=n;return r.js_tooltip&&(l=(0,o.A)(r.js_tooltip)),l&&(s=t=>(t.picked?e({content:l(t),x:t.x,y:t.y}):e(null),!0)),r.js_onclick_href?a=t=>{const e=(0,o.A)(r.js_onclick_href)(t);return window.open(e),!0}:r.table_filter&&void 0!==i&&(a=t=>(i(t.object[r.line_column]),!0)),{onClick:a,onHover:s,pickable:Boolean(s)}}const s={p1:.01,p5:.05,p95:.95,p99:.99};function a(t="sum",e=null){if("count"===t)return t=>t.length;let n;return n=t in s?(n,o)=>{let r;return r=e?n.sort(((t,n)=>i.ascending(e(t),e(n)))):n.sort(i.ascending),i.quantile(r,s[t],o)}:i[t],e?t=>n(t.map((t=>e(t)))):t=>n(t)}},49443:(t,e,n)=>{n.r(e),n.d(e,{hexToRGB:()=>o});var i=n(2117);function o(t,e=255){if(!t)return[0,0,0,e];const{r:n,g:o,b:r}=(0,i.Qh)(t);return[n,o,r,e]}},95490:(t,e,n)=>{n.d(e,{A:()=>l});var i=n(54982),o=n(86914);const r=[-90,90],s=[-180,180];function a([t,e],[n,i],o=.25){return t<e?[t,e]:[Math.max(n,t-o),Math.min(i,e+o)]}function l(t,{points:e,width:n,height:l,minExtent:c,maxZoom:d,offset:p,padding:u=20}){const{bearing:g,pitch:h}=t,f=function(t){const e=a((0,o.extent)(t,(t=>t[1])),r),n=a((0,o.extent)(t,(t=>t[0])),s);return[[n[0],e[0]],[n[1],e[1]]]}(e);try{return{...(0,i.Fe)({bounds:f,width:n,height:l,minExtent:c,maxZoom:d,offset:p,padding:u}),bearing:g,pitch:h}}catch(t){console.error("Could not fit viewport",t)}return t}},25564:(t,e,n)=>{n.d(e,{A:()=>c});var i=n(68961),o=n.n(i),r=n(4523),s=n(86914),a=n(49443);const l={console,_:r.Ay,colors:a,d3array:s};function c(t,e,n){const i={},r=`SAFE_EVAL_${Math.floor(1e6*Math.random())}`;i[r]={};const s=`${r}=${t}`,a={...l,...e};Object.keys(a).forEach((t=>{i[t]=a[t]}));try{return o().runInNewContext(s,i,n),i[r]}catch(t){return()=>t}}}}]);
//# sourceMappingURL=d2d2907630c61cc4c30e.chunk.js.map