"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5373],{87754:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var a=n(96540),o=n(58561),i=n.n(o),l=n(5556),s=n.n(l),r=n(77986),h=n(46920),u=n(96453),d=n(95579),c=n(35742),p=n(80145),m=n(86444),y=n(36673),v=n(82920),A=n(76968),b=n(33228),g=n(57701),f=n(15595),C=n(4783),T=n(37648),S=n(83780),w=n(50317),E=n(87196);function _(e){return Object.keys(e).reduce(((e,t)=>{const n=e;return n[t]=t,n}),{})}const L={FORMULA:{value:"FORMULA",label:(0,d.t)("Formula")},EVENT:{value:"EVENT",label:(0,d.t)("Event"),supportNativeSource:!0},INTERVAL:{value:"INTERVAL",label:(0,d.t)("Interval"),supportNativeSource:!0},TIME_SERIES:{value:"TIME_SERIES",label:(0,d.t)("Time series")}},F=_(L),N=F.FORMULA,V={NATIVE:{value:"NATIVE",label:"Superset annotation"}},Y=_(V);function D(e){return!!e}var I=n(2445);const k="",M={name:s().string,annotationType:s().string,sourceType:s().string,color:s().string,opacity:s().string,style:s().string,width:s().number,showMarkers:s().bool,hideLine:s().bool,value:s().oneOfType([s().string,s().number]),overrides:s().object,show:s().bool,showLabel:s().bool,titleColumn:s().string,descriptionColumns:s().arrayOf(s().string),timeColumn:s().string,intervalEndColumn:s().string,vizType:s().string,error:s().string,colorScheme:s().string,addAnnotationLayer:s().func,removeAnnotationLayer:s().func,close:s().func},x={name:"",annotationType:N,sourceType:"",color:k,opacity:"",style:"solid",width:1,showMarkers:!1,hideLine:!1,overrides:{},colorScheme:"d3Category10",show:!0,showLabel:!1,titleColumn:"",descriptionColumns:[],timeColumn:"",intervalEndColumn:"",addAnnotationLayer:()=>{},removeAnnotationLayer:()=>{},close:()=>{}},R=u.I4.div`
  && > div:first-child {
    padding-left: 0;
    padding-right: 0;
  }
`,O=()=>(0,I.Y)(R,{children:(0,I.Y)(E.u7,{title:(0,d.t)("No annotation layers"),description:(0,I.FD)("span",{children:[(0,d.t)("Add an annotation layer")," ",(0,I.Y)("a",{href:"/annotationlayer/list",target:"_blank",rel:"noopener noreferrer",children:(0,d.t)("here")}),"."]}),image:"empty.svg"})});class z extends a.PureComponent{constructor(e){super(e),this.fetchNativeAnnotations=async(e,t,n)=>{const a=i().encode({filters:[{col:"name",opr:"ct",value:e}],columns:["id","name"],page:t,page_size:n}),{json:o}=await c.A.get({endpoint:`/api/v1/annotation_layer/?q=${a}`}),{result:l,count:s}=o;return{data:l.map((e=>({value:e.id,label:e.name}))),totalCount:s}},this.fetchCharts=async(e,t,n)=>{const{annotationType:a}=this.state,o=i().encode({filters:[{col:"slice_name",opr:"chart_all_text",value:e},{col:"id",opr:"chart_owned_created_favored_by_me",value:!0}],columns:["id","slice_name","viz_type"],order_column:"slice_name",order_direction:"asc",page:t,page_size:n}),{json:l}=await c.A.get({endpoint:`/api/v1/chart/?q=${o}`}),{result:s,count:r}=l,h=(0,p.A)();return{data:s.filter((e=>{const t=h.get(e.viz_type);return t&&t.canBeAnnotationType(a)})).map((e=>({value:e.id,label:e.slice_name,viz_type:e.viz_type}))),totalCount:r}},this.fetchOptions=(e,t,n)=>{const{sourceType:a}=this.state;return a===Y.NATIVE?this.fetchNativeAnnotations(e,t,n):this.fetchCharts(e,t,n)},this.fetchSliceData=e=>{const t=i().encode({columns:["query_context"]});c.A.get({endpoint:`/api/v1/chart/${e}?q=${t}`}).then((({json:e})=>{var t;const{result:n}=e,a=n.query_context,o=JSON.parse(a).form_data,i={data:{...o,groupby:null==(t=o.groupby)?void 0:t.map((e=>(0,m.A)(e)))}};this.setState({slice:i})}))};const{name:t,annotationType:n,sourceType:a,color:o,opacity:l,style:s,width:r,showMarkers:h,hideLine:u,value:d,overrides:y,show:v,showLabel:A,titleColumn:b,descriptionColumns:g,timeColumn:f,intervalEndColumn:C,vizType:T}=e;("since"in y||"until"in y)&&(y.time_range=null,delete y.since,delete y.until);const S=(0,p.A)().get(T),w=(null==S?void 0:S.supportedAnnotationTypes)||[],E=w.includes(n)?n:w[0];this.state={name:t,annotationType:E,sourceType:a,value:d,overrides:y,show:v,showLabel:A,titleColumn:b,descriptionColumns:g,timeColumn:f,intervalEndColumn:C,color:o||k,opacity:l,style:s,width:r,showMarkers:h,hideLine:u,isNew:!t,slice:null},this.submitAnnotation=this.submitAnnotation.bind(this),this.deleteAnnotation=this.deleteAnnotation.bind(this),this.applyAnnotation=this.applyAnnotation.bind(this),this.isValidForm=this.isValidForm.bind(this),this.handleAnnotationType=this.handleAnnotationType.bind(this),this.handleAnnotationSourceType=this.handleAnnotationSourceType.bind(this),this.handleSelectValue=this.handleSelectValue.bind(this),this.handleTextValue=this.handleTextValue.bind(this),this.fetchOptions=this.fetchOptions.bind(this),this.fetchCharts=this.fetchCharts.bind(this),this.fetchNativeAnnotations=this.fetchNativeAnnotations.bind(this),this.fetchAppliedAnnotation=this.fetchAppliedAnnotation.bind(this),this.fetchSliceData=this.fetchSliceData.bind(this),this.shouldFetchSliceData=this.shouldFetchSliceData.bind(this),this.fetchAppliedChart=this.fetchAppliedChart.bind(this),this.fetchAppliedNativeAnnotation=this.fetchAppliedNativeAnnotation.bind(this),this.shouldFetchAppliedAnnotation=this.shouldFetchAppliedAnnotation.bind(this)}componentDidMount(){if(this.shouldFetchAppliedAnnotation()){const{value:e}=this.state;this.fetchAppliedAnnotation(e)}}componentDidUpdate(e,t){if(this.shouldFetchSliceData(t)){const{value:e}=this.state;this.fetchSliceData(e.value)}}getSupportedSourceTypes(e){var t;const n=(0,p.A)().entries().filter((({value:t})=>t.canBeAnnotationType(e))).map((({key:e,value:t})=>({value:e,label:t.name})));return null!=(t=L[e])&&t.supportNativeSource&&n.unshift(V.NATIVE),n}shouldFetchAppliedAnnotation(){const{value:e,sourceType:t}=this.state;return e&&D(t)}shouldFetchSliceData(e){const{value:t,sourceType:n}=this.state,a=n!==Y.NATIVE&&D(n);return t&&e.value!==t&&a}isValidFormulaAnnotation(e,t){return t!==F.FORMULA||(0,y.$)(e)}isValidForm(){const{name:e,annotationType:t,sourceType:n,value:a,timeColumn:o,intervalEndColumn:i}=this.state,l=[(0,v.A)(e),(0,v.A)(t),(0,v.A)(a)];return n!==Y.NATIVE&&(t===F.EVENT&&l.push((0,v.A)(o)),t===F.INTERVAL&&(l.push((0,v.A)(o)),l.push((0,v.A)(i)))),l.push(!this.isValidFormulaAnnotation(a,t)),!l.filter((e=>e)).length}handleAnnotationType(e){this.setState({annotationType:e,sourceType:null,value:null,slice:null})}handleAnnotationSourceType(e){const{sourceType:t}=this.state;t!==e&&this.setState({sourceType:e,value:null,slice:null})}handleSelectValue(e){this.setState({value:e,descriptionColumns:[],intervalEndColumn:null,timeColumn:null,titleColumn:null,overrides:{time_range:null}})}handleTextValue(e){this.setState({value:e})}fetchAppliedChart(e){const{annotationType:t}=this.state,n=(0,p.A)(),a=i().encode({columns:["slice_name","query_context","viz_type"]});c.A.get({endpoint:`/api/v1/chart/${e}?q=${a}`}).then((({json:a})=>{const{result:o}=a,i=o.slice_name,l=o.query_context,s=o.viz_type,r=JSON.parse(l).form_data,h=n.get(s);var u;h&&h.canBeAnnotationType(t)&&this.setState({value:{value:e,label:i},slice:{data:{...r,groupby:null==(u=r.groupby)?void 0:u.map((e=>(0,m.A)(e)))}}})}))}fetchAppliedNativeAnnotation(e){c.A.get({endpoint:`/api/v1/annotation_layer/${e}`}).then((({json:e})=>{const{result:t}=e,n=t;this.setState({value:{value:n.id,label:n.name}})}))}fetchAppliedAnnotation(e){const{sourceType:t}=this.state;return t===Y.NATIVE?this.fetchAppliedNativeAnnotation(e):this.fetchAppliedChart(e)}deleteAnnotation(){this.props.removeAnnotationLayer(),this.props.close()}applyAnnotation(){const{value:e,sourceType:t}=this.state;if(this.isValidForm()){const n={};["name","annotationType","sourceType","color","opacity","style","width","showMarkers","hideLine","overrides","show","showLabel","titleColumn","descriptionColumns","timeColumn","intervalEndColumn"].forEach((e=>{null!==this.state[e]&&(n[e]=this.state[e])}));const a=D(t)?e.value:e;n.value=a,n.color===k&&(n.color=null),this.props.addAnnotationLayer(n),this.setState({isNew:!1})}}submitAnnotation(){this.applyAnnotation(),this.props.close()}renderChartHeader(e,t,n){return(0,I.Y)(w.A,{hovered:!0,label:e,description:t,validationErrors:n?[]:["Mandatory"]})}renderValueConfiguration(){const{annotationType:e,sourceType:t,value:n}=this.state;let a="",o="";return D(t)?t===Y.NATIVE?(a=(0,d.t)("Annotation layer"),o=(0,d.t)("Select the Annotation Layer you would like to use.")):(a=(0,d.t)("Chart"),o=(0,d.t)("Use another existing chart as a source for annotations and overlays.\n          Your chart must be one of these visualization types: [%s]",this.getSupportedSourceTypes(e).map((e=>e.label)).join(", "))):e===F.FORMULA&&(a=(0,d.t)("Formula"),o=(0,d.t)("Expects a formula with depending time parameter 'x'\n        in milliseconds since epoch. mathjs is used to evaluate the formulas.\n        Example: '2x+5'")),D(t)?(0,I.Y)(f.DW,{ariaLabel:(0,d.t)("Annotation layer value"),name:"annotation-layer-value",header:this.renderChartHeader(a,o,n),options:this.fetchOptions,value:n||null,onChange:this.handleSelectValue,notFoundContent:(0,I.Y)(O,{})},t):e===F.FORMULA?(0,I.Y)(C.A,{name:"annotation-layer-value",hovered:!0,showHeader:!0,description:o,label:a,placeholder:"",value:n,onChange:this.handleTextValue,validationErrors:this.isValidFormulaAnnotation(n,e)?[]:[(0,d.t)("Bad formula.")]}):""}renderSliceConfiguration(){const{annotationType:e,sourceType:t,value:n,slice:a,overrides:o,titleColumn:i,timeColumn:l,intervalEndColumn:s,descriptionColumns:r}=this.state;if(!a||!n)return"";if(t!==Y.NATIVE&&a){const t=(a.data.groupby||[]).concat(a.data.all_columns||[]).map((e=>({value:e,label:e}))),n=a.data.include_time?[{value:"__timestamp",label:"__timestamp"}].concat(t):t;return(0,I.Y)("div",{style:{marginRight:"2rem"},children:(0,I.FD)(S.A,{isSelected:!0,title:(0,d.t)("Annotation Slice Configuration"),info:(0,d.t)("This section allows you to configure how to use the slice\n              to generate annotations."),children:[(e===F.EVENT||e===F.INTERVAL)&&(0,I.Y)(g.A,{ariaLabel:(0,d.t)("Annotation layer time column"),hovered:!0,name:"annotation-layer-time-column",label:e===F.INTERVAL?(0,d.t)("Interval start column"):(0,d.t)("Event time column"),description:(0,d.t)("This column must contain date/time information."),validationErrors:l?[]:["Mandatory"],clearable:!1,options:n,value:l,onChange:e=>this.setState({timeColumn:e})}),e===F.INTERVAL&&(0,I.Y)(g.A,{ariaLabel:(0,d.t)("Annotation layer interval end"),hovered:!0,name:"annotation-layer-intervalEnd",label:(0,d.t)("Interval End column"),description:(0,d.t)("This column must contain date/time information."),validationErrors:s?[]:["Mandatory"],options:t,value:s,onChange:e=>this.setState({intervalEndColumn:e})}),(0,I.Y)(g.A,{ariaLabel:(0,d.t)("Annotation layer title column"),hovered:!0,name:"annotation-layer-title",label:(0,d.t)("Title Column"),description:(0,d.t)("Pick a title for you annotation."),options:[{value:"",label:(0,d.t)("None")}].concat(t),value:i,onChange:e=>this.setState({titleColumn:e})}),e!==F.TIME_SERIES&&(0,I.Y)(g.A,{ariaLabel:(0,d.t)("Annotation layer description columns"),hovered:!0,name:"annotation-layer-title",label:(0,d.t)("Description Columns"),description:(0,d.t)("Pick one or more columns that should be shown in the annotation. If you don't select a column all of them will be shown."),multi:!0,options:t,value:r,onChange:e=>this.setState({descriptionColumns:e})}),(0,I.FD)("div",{style:{marginTop:"1rem"},children:[(0,I.Y)(T.A,{hovered:!0,name:"annotation-override-time_range",label:(0,d.t)("Override time range"),description:(0,d.t)('This controls whether the "time_range" field from the current\n                  view should be passed down to the chart containing the annotation data.'),value:"time_range"in o,onChange:e=>{delete o.time_range,e?this.setState({overrides:{...o,time_range:null}}):this.setState({overrides:{...o}})}}),(0,I.Y)(T.A,{hovered:!0,name:"annotation-override-timegrain",label:(0,d.t)("Override time grain"),description:(0,d.t)("This controls whether the time grain field from the current\n                  view should be passed down to the chart containing the annotation data."),value:"time_grain_sqla"in o,onChange:e=>{delete o.time_grain_sqla,delete o.granularity,e?this.setState({overrides:{...o,time_grain_sqla:null,granularity:null}}):this.setState({overrides:{...o}})}}),(0,I.Y)(C.A,{hovered:!0,name:"annotation-layer-timeshift",label:(0,d.t)("Time Shift"),description:(0,d.t)("Time delta in natural language\n                  (example:  24 hours, 7 days, 56 weeks, 365 days)"),placeholder:"",value:o.time_shift,onChange:e=>this.setState({overrides:{...o,time_shift:e}})})]})]})})}return""}renderDisplayConfiguration(){const{color:e,opacity:t,style:n,width:a,showMarkers:o,hideLine:i,annotationType:l}=this.state,s=(0,A.A)().get(this.props.colorScheme).colors.concat();return e&&e!==k&&!s.find((t=>t.toLowerCase()===e.toLowerCase()))&&s.push(e),(0,I.FD)(S.A,{isSelected:!0,title:(0,d.t)("Display configuration"),info:(0,d.t)("Configure your how you overlay is displayed here."),children:[(0,I.Y)(g.A,{ariaLabel:(0,d.t)("Annotation layer stroke"),name:"annotation-layer-stroke",label:(0,d.t)("Style"),options:[{value:"solid",label:(0,d.t)("Solid")},{value:"dashed",label:(0,d.t)("Dashed")},{value:"longDashed",label:(0,d.t)("Long dashed")},{value:"dotted",label:(0,d.t)("Dotted")}],value:n,clearable:!1,onChange:e=>this.setState({style:e})}),(0,I.Y)(g.A,{ariaLabel:(0,d.t)("Annotation layer opacity"),name:"annotation-layer-opacity",label:(0,d.t)("Opacity"),options:[{value:"",label:(0,d.t)("Solid")},{value:"opacityLow",label:"0.2"},{value:"opacityMedium",label:"0.5"},{value:"opacityHigh",label:"0.8"}],value:t,onChange:e=>this.setState({opacity:e})}),(0,I.FD)("div",{children:[(0,I.Y)(w.A,{label:(0,d.t)("Color")}),(0,I.FD)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,I.Y)(r.WU,{color:e,colors:s,onChangeComplete:e=>this.setState({color:e.hex})}),(0,I.Y)(h.A,{style:{marginTop:"0.5rem",marginBottom:"0.5rem"},buttonStyle:e===k?"success":"default",buttonSize:"xsmall",onClick:()=>this.setState({color:k}),children:(0,d.t)("Automatic Color")})]})]}),(0,I.Y)(C.A,{name:"annotation-layer-stroke-width",label:(0,d.t)("Line width"),isInt:!0,value:a,onChange:e=>this.setState({width:e})}),l===F.TIME_SERIES&&(0,I.Y)(T.A,{hovered:!0,name:"annotation-layer-show-markers",label:(0,d.t)("Show Markers"),description:(0,d.t)("Shows or hides markers for the time series"),value:o,onChange:e=>this.setState({showMarkers:e})}),l===F.TIME_SERIES&&(0,I.Y)(T.A,{hovered:!0,name:"annotation-layer-hide-line",label:(0,d.t)("Hide Line"),description:(0,d.t)("Hides the Line for the time series"),value:i,onChange:e=>this.setState({hideLine:e})})]})}render(){const{isNew:e,name:t,annotationType:n,sourceType:a,show:o,showLabel:i}=this.state,l=this.isValidForm(),s=(0,p.A)().get(this.props.vizType),r=s?s.supportedAnnotationTypes.map((e=>L[e])):[],u=this.getSupportedSourceTypes(n);return(0,I.FD)(I.FK,{children:[this.props.error&&(0,I.FD)("span",{style:{color:this.props.theme.colors.error.base},children:["ERROR: ",this.props.error]}),(0,I.FD)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,I.Y)("div",{style:{marginRight:"2rem"},children:(0,I.FD)(S.A,{isSelected:!0,title:(0,d.t)("Layer configuration"),info:(0,d.t)("Configure the basics of your Annotation Layer."),children:[(0,I.Y)(C.A,{name:"annotation-layer-name",label:(0,d.t)("Name"),placeholder:"",value:t,onChange:e=>this.setState({name:e}),validationErrors:t?[]:[(0,d.t)("Mandatory")]}),(0,I.Y)(T.A,{name:"annotation-layer-hide",label:(0,d.t)("Hide layer"),value:!o,onChange:e=>this.setState({show:!e})}),(0,I.Y)(T.A,{name:"annotation-label-show",label:(0,d.t)("Show label"),value:i,hovered:!0,description:(0,d.t)("Whether to always show the annotation label"),onChange:e=>this.setState({showLabel:e})}),(0,I.Y)(g.A,{ariaLabel:(0,d.t)("Annotation layer type"),hovered:!0,description:(0,d.t)("Choose the annotation layer type"),label:(0,d.t)("Annotation layer type"),name:"annotation-layer-type",clearable:!1,options:r,value:n,onChange:this.handleAnnotationType}),u.length>0&&(0,I.Y)(g.A,{ariaLabel:(0,d.t)("Annotation source type"),hovered:!0,description:(0,d.t)("Choose the source of your annotations"),label:(0,d.t)("Annotation source"),name:"annotation-source-type",options:u,notFoundContent:(0,I.Y)(O,{}),value:a,onChange:this.handleAnnotationSourceType,validationErrors:a?[]:[(0,d.t)("Mandatory")]}),this.renderValueConfiguration()]})}),this.renderSliceConfiguration(),this.renderDisplayConfiguration()]}),(0,I.FD)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e?(0,I.Y)(h.A,{buttonSize:"small",onClick:()=>this.props.close(),children:(0,d.t)("Cancel")}):(0,I.Y)(h.A,{buttonSize:"small",onClick:this.deleteAnnotation,children:(0,d.t)("Remove")}),(0,I.FD)("div",{children:[(0,I.Y)(h.A,{buttonSize:"small",disabled:!l,onClick:this.applyAnnotation,children:(0,d.t)("Apply")}),(0,I.Y)(h.A,{buttonSize:"small",buttonStyle:"primary",disabled:!l,onClick:this.submitAnnotation,children:(0,d.t)("OK")})]})]})]})}}z.propTypes=M,z.defaultProps=x;const q=(0,b.b)(z)}}]);
//# sourceMappingURL=79a278764a127e9a7dbc.chunk.js.map