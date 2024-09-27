"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6672],{37648:(e,t,o)=>{o.d(t,{A:()=>u});var n=o(96540),i=o(5556),l=o.n(i),s=o(96453),r=o(17437),a=o(50317),h=o(50068),c=o(2445);const d={value:l().bool,label:l().string,onChange:l().func},p=s.I4.div`
  ${({theme:e})=>r.AH`
    .ControlHeader label {
      color: ${e.colors.grayscale.dark1};
    }
    span[role='checkbox'] {
      padding-right: ${2*e.gridUnit}px;
    }
  `}
`;class u extends n.Component{onChange(){this.props.onChange(!this.props.value)}renderCheckbox(){return(0,c.Y)(h.Ay,{onChange:this.onChange.bind(this),checked:!!this.props.value})}render(){return this.props.label?(0,c.Y)(p,{children:(0,c.Y)(a.A,{...this.props,leftNode:this.renderCheckbox(),onClick:this.onChange.bind(this)})}):this.renderCheckbox()}}u.propTypes=d,u.defaultProps={value:!1,onChange:()=>{}}},57701:(e,t,o)=>{o.d(t,{A:()=>u});var n=o(96540),i=o(5556),l=o.n(i),s=o(65482),r=o(95579),a=o(17437),h=o(28990),c=o(50317),d=o(2445);const p={ariaLabel:l().string,autoFocus:l().bool,choices:l().array,clearable:l().bool,description:l().oneOfType([l().string,l().node]),disabled:l().bool,freeForm:l().bool,isLoading:l().bool,mode:l().string,multi:l().bool,isMulti:l().bool,name:l().string.isRequired,onChange:l().func,onFocus:l().func,onSelect:l().func,onDeselect:l().func,value:l().oneOfType([l().string,l().number,l().array]),default:l().oneOfType([l().string,l().number,l().array]),showHeader:l().bool,optionRenderer:l().func,valueKey:l().string,options:l().array,placeholder:l().string,filterOption:l().func,tokenSeparators:l().arrayOf(l().string),notFoundContent:l().object,label:l().string,renderTrigger:l().bool,validationErrors:l().array,rightNode:l().node,leftNode:l().node,onClick:l().func,hovered:l().bool,tooltipOnClick:l().func,warning:l().string,danger:l().string};class u extends n.PureComponent{constructor(e){super(e),this.state={options:this.getOptions(e)},this.onChange=this.onChange.bind(this),this.handleFilterOptions=this.handleFilterOptions.bind(this)}UNSAFE_componentWillReceiveProps(e){if(!(0,s.A)(e.choices,this.props.choices)||!(0,s.A)(e.options,this.props.options)){const t=this.getOptions(e);this.setState({options:t})}}onChange(e){const{valueKey:t}=this.props;let o=e;Array.isArray(e)&&(o=e.map((e=>void 0!==(null==e?void 0:e[t])?e[t]:e))),"object"==typeof e&&void 0!==(null==e?void 0:e[t])&&(o=e[t]),this.props.onChange(o,[])}getOptions(e){const{choices:t,optionRenderer:o,valueKey:n}=e;let i=[];return e.options?i=e.options.map((e=>({...e,value:e[n],label:e.label||e[n],customLabel:o?o(e):void 0}))):t&&(i=t.map((e=>{if(Array.isArray(e)){const[t,o]=e.length>1?e:[e[0],e[0]];return{value:t,label:o}}return Object.is(e)?{...e,value:e[n],label:e.label||e[n]}:{value:e,label:e}}))),i}handleFilterOptions(e,t){const{filterOption:o}=this.props;return o({data:t},e)}render(){const{ariaLabel:e,autoFocus:t,clearable:o,disabled:n,filterOption:i,freeForm:l,isLoading:s,isMulti:p,label:u,multi:g,name:C,notFoundContent:b,onFocus:v,onSelect:m,onDeselect:f,placeholder:y,showHeader:x,tokenSeparators:k,value:A,description:F,renderTrigger:S,rightNode:Y,leftNode:O,validationErrors:D,onClick:w,hovered:L,tooltipOnClick:T,warning:P,danger:$}=this.props,H={name:C,label:u,description:F,renderTrigger:S,rightNode:Y,leftNode:O,validationErrors:D,onClick:w,hovered:L,tooltipOnClick:T,warning:P,danger:$},N={allowNewOptions:l,autoFocus:t,ariaLabel:e||("string"==typeof u?u:(0,r.t)("Select ...")),allowClear:o,disabled:n,filterOption:!i||"function"!=typeof i||this.handleFilterOptions,header:x&&(0,d.Y)(c.A,{...H}),loading:s,mode:this.props.mode||(p||g?"multiple":"single"),name:`select-${C}`,onChange:this.onChange,onFocus:v,onSelect:m,onDeselect:f,options:this.state.options,placeholder:y,sortComparator:this.props.sortComparator,value:(()=>{const e=null!=A?A:void 0!==this.props.default?this.props.default:void 0;if(null!==e||this.state.options.find((e=>null===e.value)))return e})(),tokenSeparators:k,notFoundContent:b};return(0,d.Y)("div",{css:e=>a.AH`
          .type-label {
            margin-right: ${2*e.gridUnit}px;
          }
          .Select__multi-value__label > span,
          .Select__option > span,
          .Select__single-value > span {
            display: flex;
            align-items: center;
          }
        `,children:(0,d.Y)(h.A,{...N})})}}u.propTypes=p,u.defaultProps={autoFocus:!1,choices:[],clearable:!0,description:null,disabled:!1,freeForm:!1,isLoading:!1,label:null,multi:!1,onChange:()=>{},onFocus:()=>{},showHeader:!0,valueKey:"value"}},9379:(e,t,o)=>{o.d(t,{A:()=>f});var n=o(96540),i=o(5556),l=o.n(i),s=o(15595),r=o(95579),a=o(2738),h=o(10044),c=o(83780),d=o(50068),p=o(50317),u=o(57701),g=o(2445);const C="latlong",b="delimited",v="geohash",m={onChange:l().func,value:l().object,animation:l().bool,choices:l().array};class f extends n.Component{constructor(e){super(e);const t=e.value||{};let o;e.choices.length>0&&(o=e.choices[0][0]),this.state={type:t.type||C,delimiter:t.delimiter||",",latCol:t.latCol||o,lonCol:t.lonCol||o,lonlatCol:t.lonlatCol||o,reverseCheckbox:t.reverseCheckbox||!1,geohashCol:t.geohashCol||o,value:null,errors:[]},this.toggleCheckbox=this.toggleCheckbox.bind(this),this.onChange=this.onChange.bind(this),this.renderReverseCheckbox=this.renderReverseCheckbox.bind(this)}componentDidMount(){this.onChange()}onChange(){const{type:e}=this.state,t={type:e},o=[],n=(0,r.t)("Invalid lat/long configuration.");e===C?(t.latCol=this.state.latCol,t.lonCol=this.state.lonCol,t.lonCol&&t.latCol||o.push(n)):e===b?(t.lonlatCol=this.state.lonlatCol,t.delimiter=this.state.delimiter,t.reverseCheckbox=this.state.reverseCheckbox,t.lonlatCol&&t.delimiter||o.push(n)):e===v&&(t.geohashCol=this.state.geohashCol,t.reverseCheckbox=this.state.reverseCheckbox,t.geohashCol||o.push(n)),this.setState({value:t,errors:o}),this.props.onChange(t,o)}setType(e){this.setState({type:e},this.onChange)}toggleCheckbox(){this.setState((e=>({reverseCheckbox:!e.reverseCheckbox})),this.onChange)}renderLabelContent(){return this.state.errors.length>0?"N/A":this.state.type===C?`${this.state.lonCol} | ${this.state.latCol}`:this.state.type===b?`${this.state.lonlatCol}`:this.state.type===v?`${this.state.geohashCol}`:null}renderSelect(e,t){return(0,g.Y)(u.A,{ariaLabel:e,name:e,choices:this.props.choices,value:this.state[e],clearable:!1,onFocus:()=>{this.setType(t)},onChange:t=>{this.setState({[e]:t},this.onChange)}})}renderReverseCheckbox(){return(0,g.FD)("span",{children:[(0,r.t)("Reverse lat/long "),(0,g.Y)(d.Ay,{checked:this.state.reverseCheckbox,onChange:this.toggleCheckbox})]})}renderPopoverContent(){return(0,g.FD)("div",{style:{width:"300px"},children:[(0,g.Y)(c.A,{title:(0,r.t)("Longitude & Latitude columns"),isSelected:this.state.type===C,onSelect:this.setType.bind(this,C),children:(0,g.FD)(s.fI,{gutter:16,children:[(0,g.FD)(s.fv,{xs:24,md:12,children:[(0,r.t)("Longitude"),this.renderSelect("lonCol",C)]}),(0,g.FD)(s.fv,{xs:24,md:12,children:[(0,r.t)("Latitude"),this.renderSelect("latCol",C)]})]})}),(0,g.Y)(c.A,{title:(0,r.t)("Delimited long & lat single column"),info:(0,r.t)("Multiple formats accepted, look the geopy.points Python library for more details"),isSelected:this.state.type===b,onSelect:this.setType.bind(this,b),children:(0,g.FD)(s.fI,{gutter:16,children:[(0,g.FD)(s.fv,{xs:24,md:12,children:[(0,r.t)("Column"),this.renderSelect("lonlatCol",b)]}),(0,g.Y)(s.fv,{xs:24,md:12,children:this.renderReverseCheckbox()})]})}),(0,g.Y)(c.A,{title:(0,r.t)("Geohash"),isSelected:this.state.type===v,onSelect:this.setType.bind(this,v),children:(0,g.FD)(s.fI,{gutter:16,children:[(0,g.FD)(s.fv,{xs:24,md:12,children:[(0,r.t)("Column"),this.renderSelect("geohashCol",v)]}),(0,g.Y)(s.fv,{xs:24,md:12,children:this.renderReverseCheckbox()})]})})]})}render(){return(0,g.FD)("div",{children:[(0,g.Y)(p.A,{...this.props}),(0,g.Y)(h.A,{content:this.renderPopoverContent(),placement:"topLeft",trigger:"click",children:(0,g.Y)(a.A,{className:"pointer",children:this.renderLabelContent()})})]})}}f.propTypes=m,f.defaultProps={onChange:()=>{},animation:!0,choices:[]}},83780:(e,t,o)=>{o.d(t,{A:()=>a});var n=o(17437),i=o(96453),l=o(19129),s=o(12249),r=o(2445);function a({title:e,isSelected:t,children:o,onSelect:a,info:h}){const c=(0,i.DP)();return(0,r.FD)("div",{css:(0,n.AH)({paddingBottom:2*c.gridUnit,opacity:t?1:c.opacity.mediumHeavy},"",""),children:[(0,r.FD)("div",{role:"button",tabIndex:0,onClick:a,css:(0,n.AH)({display:"flex",alignItems:"center",cursor:a?"pointer":"default"},"",""),children:[(0,r.Y)("strong",{children:e}),h&&(0,r.Y)(l.m,{title:h,css:(0,n.AH)({marginLeft:c.gridUnit},"",""),children:(0,r.Y)(s.A.InfoSolidSmall,{role:"img",width:14,height:14,iconColor:c.colors.grayscale.light1})}),(0,r.Y)(s.A.Check,{role:"img",iconColor:t?c.colors.primary.base:c.colors.grayscale.base})]}),(0,r.Y)("div",{css:(0,n.AH)({marginLeft:c.gridUnit,marginTop:c.gridUnit},"",""),children:o})]})}},3173:(e,t,o)=>{o.d(t,{A:()=>C});var n=o(96540),i=o(61225),l=o(96453),s=o(17437),r=o(95579),a=o(62952),h=o(57940),c=o(15595),d=o(50317),p=o(2445);const u=l.I4.div`
  ${({theme:e})=>s.AH`
    display: flex;
    align-items: center;

    & > :first-child {
      margin-right: ${4*e.gridUnit}px;
      min-width: 0;
      flex: 1;
    }

    & > :nth-child(2) {
      min-width: 0;
      flex: 1;
    }
  `}
`,g=[{value:"prefix",label:(0,r.t)("Prefix")},{value:"suffix",label:(0,r.t)("Suffix")}],C=({onChange:e,value:t={},symbolSelectOverrideProps:o={},currencySelectOverrideProps:l={},symbolSelectAdditionalStyles:C,currencySelectAdditionalStyles:b,...v})=>{const m=(0,i.d4)((e=>{var t;return null==(t=e.common)?void 0:t.currencies})),f=(0,n.useMemo)((()=>(0,a.A)(m).map((e=>({value:e,label:`${(0,h.Q)({symbol:e})} (${e})`})))),[m]);return(0,p.FD)(p.FK,{children:[(0,p.Y)(d.A,{...v}),(0,p.FD)(u,{css:s.AH`
          & > :first-child {
            ${C};
          }
          & > :nth-child(2) {
            ${b};
          }
        `,className:"currency-control-container",children:[(0,p.Y)(c.l6,{ariaLabel:(0,r.t)("Currency prefix or suffix"),options:g,placeholder:(0,r.t)("Prefix or suffix"),onChange:o=>{e({...t,symbolPosition:o})},onClear:()=>e({...t,symbolPosition:void 0}),value:null==t?void 0:t.symbolPosition,allowClear:!0,...o}),(0,p.Y)(c.l6,{ariaLabel:(0,r.t)("Currency symbol"),options:f,placeholder:(0,r.t)("Currency"),onChange:o=>{e({...t,symbol:o})},onClear:()=>e({...t,symbol:void 0}),value:null==t?void 0:t.symbol,allowClear:!0,allowNewOptions:!0,...l})]})]})}},4783:(e,t,o)=>{o.d(t,{A:()=>u});var n=o(38221),i=o.n(n),l=o(96540),s=o(53674),r=o(49953),a=o(27023),h=o(50317),c=o(90868),d=o(2445);const p=e=>null==e?"":String(e);class u extends l.Component{constructor(e){super(e),this.initialValue=void 0,this.onChange=e=>{var t,o;let n=e;const i=[];if(""!==e&&this.props.isFloat){const t=(0,s.A)(e);t?i.push(t):n=e.match(/.*([.0])$/g)?e:parseFloat(e)}if(""!==e&&this.props.isInt){const t=(0,r.A)(e);t?i.push(t):n=parseInt(e,10)}null==(t=(o=this.props).onChange)||t.call(o,n,i)},this.debouncedOnChange=i()((e=>{this.onChange(e)}),a.jW),this.onChangeWrapper=e=>{const{value:t}=e.target;this.setState({value:t},(()=>{this.debouncedOnChange(t)}))},this.initialValue=e.value,this.state={value:p(this.initialValue)}}render(){let{value:e}=this.state;return this.initialValue!==this.props.value&&(this.initialValue=this.props.value,e=p(this.props.value)),(0,d.FD)("div",{children:[(0,d.Y)(h.A,{...this.props}),(0,d.Y)(c.pd,{type:"text",placeholder:this.props.placeholder,onChange:this.onChangeWrapper,onFocus:this.props.onFocus,value:e,disabled:this.props.disabled,"aria-label":this.props.label})]})}}}}]);
//# sourceMappingURL=fcc0f836cd2fd6bd4992.chunk.js.map