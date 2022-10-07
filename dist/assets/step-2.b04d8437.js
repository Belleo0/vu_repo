import{r as Z,k as ge,u as pe,a as S,j as q,F as me,n as E}from"./index.fa23706f.js";import{h as L,g as ve}from"./Header.8f74d7dd.js";import{F as be}from"./FieldCreateLayout.e3ef4e23.js";import{c as U}from"./_commonjsHelpers.b8add541.js";import{u as xe}from"./useLocalStorage.e35586a4.js";var le={},ne={},re={},te={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.Direction=void 0,function(u){u.Right="to right",u.Left="to left",u.Down="to bottom",u.Up="to top"}(n.Direction||(n.Direction={}))})(te);(function(n){var u=U&&U.__spreadArrays||function(){for(var r=0,a=0,c=arguments.length;a<c;a++)r+=arguments[a].length;for(var M=Array(r),p=0,a=0;a<c;a++)for(var v=arguments[a],x=0,b=v.length;x<b;x++,p++)M[p]=v[x];return M};Object.defineProperty(n,"__esModule",{value:!0}),n.useThumbOverlap=n.assertUnreachable=n.voidFn=n.getTrackBackground=n.replaceAt=n.schd=n.translate=n.getClosestThumbIndex=n.translateThumbs=n.getPaddingAndBorder=n.getMargin=n.checkInitialOverlap=n.checkValuesAgainstBoundaries=n.checkBoundaries=n.isVertical=n.relativeValue=n.normalizeValue=n.isStepDivisible=n.isTouchEvent=n.getStepDecimals=void 0;var s=Z.exports,e=te,T=function(r){var a=r.toString().split(".")[1];return a?a.length:0};n.getStepDecimals=T;function t(r){return r.touches&&r.touches.length||r.changedTouches&&r.changedTouches.length}n.isTouchEvent=t;function i(r,a,c){var M=(a-r)/c,p=8,v=Number(M.toFixed(p));return parseInt(v.toString(),10)===v}n.isStepDivisible=i;function o(r,a,c,M,p,v,x){var b=1e11;if(r=Math.round(r*b)/b,!v){var z=x[a-1],R=x[a+1];if(z&&z>r)return z;if(R&&R<r)return R}if(r>M)return M;if(r<c)return c;var V=Math.floor(r*b-c*b)%Math.floor(p*b),j=Math.floor(r*b-Math.abs(V)),W=V===0?r:j/b,B=Math.abs(V/b)<p/2?W:W+p,X=n.getStepDecimals(p);return parseFloat(B.toFixed(X))}n.normalizeValue=o;function l(r,a,c){return(r-a)/(c-a)}n.relativeValue=l;function h(r){return r===e.Direction.Up||r===e.Direction.Down}n.isVertical=h;function D(r,a,c){if(a>=c)throw new RangeError("min ("+a+") is equal/bigger than max ("+c+")");if(r<a)throw new RangeError("value ("+r+") is smaller than min ("+a+")");if(r>c)throw new RangeError("value ("+r+") is bigger than max ("+c+")")}n.checkBoundaries=D;function g(r,a,c){return r<a?a:r>c?c:r}n.checkValuesAgainstBoundaries=g;function d(r){if(!(r.length<2)&&!r.slice(1).every(function(a,c){return r[c]<=a}))throw new RangeError("values={["+r+"]} needs to be sorted when allowOverlap={false}")}n.checkInitialOverlap=d;function m(r){var a=window.getComputedStyle(r);return{top:parseInt(a["margin-top"],10),bottom:parseInt(a["margin-bottom"],10),left:parseInt(a["margin-left"],10),right:parseInt(a["margin-right"],10)}}n.getMargin=m;function A(r){var a=window.getComputedStyle(r);return{top:parseInt(a["padding-top"],10)+parseInt(a["border-top-width"],10),bottom:parseInt(a["padding-bottom"],10)+parseInt(a["border-bottom-width"],10),left:parseInt(a["padding-left"],10)+parseInt(a["border-left-width"],10),right:parseInt(a["padding-right"],10)+parseInt(a["border-right-width"],10)}}n.getPaddingAndBorder=A;function y(r,a,c){var M=c?-1:1;r.forEach(function(p,v){return _(p,M*a[v].x,a[v].y)})}n.translateThumbs=y;function P(r,a,c,M){for(var p=0,v=$(r[0],a,c,M),x=1;x<r.length;x++){var b=$(r[x],a,c,M);b<v&&(v=b,p=x)}return p}n.getClosestThumbIndex=P;function _(r,a,c){r.style.transform="translate("+a+"px, "+c+"px)"}n.translate=_;var I=function(r){var a=[],c=null,M=function(){for(var p=[],v=0;v<arguments.length;v++)p[v]=arguments[v];a=p,!c&&(c=requestAnimationFrame(function(){c=null,r.apply(void 0,a)}))};return M};n.schd=I;function F(r,a,c){var M=r.slice(0);return M[a]=c,M}n.replaceAt=F;function N(r){var a=r.values,c=r.colors,M=r.min,p=r.max,v=r.direction,x=v===void 0?e.Direction.Right:v,b=r.rtl,z=b===void 0?!1:b;z&&x===e.Direction.Right?x=e.Direction.Left:z&&e.Direction.Left&&(x=e.Direction.Right);var R=a.slice(0).sort(function(j,W){return j-W}).map(function(j){return(j-M)/(p-M)*100}),V=R.reduce(function(j,W,B){return j+", "+c[B]+" "+W+"%, "+c[B+1]+" "+W+"%"},"");return"linear-gradient("+x+", "+c[0]+" 0%"+V+", "+c[c.length-1]+" 100%)"}n.getTrackBackground=N;function f(){}n.voidFn=f;function k(r){throw new Error("Didn't expect to get here")}n.assertUnreachable=k;var O=function(r,a,c,M,p){p===void 0&&(p=function(x){return x});var v=Math.ceil(u([r],Array.from(r.children)).reduce(function(x,b){var z=Math.ceil(b.getBoundingClientRect().width);if(b.innerText&&b.innerText.includes(c)&&b.childElementCount===0){var R=b.cloneNode(!0);R.innerHTML=p(a.toFixed(M)),R.style.visibility="hidden",document.body.appendChild(R),z=Math.ceil(R.getBoundingClientRect().width),document.body.removeChild(R)}return z>x?z:x},r.getBoundingClientRect().width));return v},C=function(r,a,c,M,p,v,x){x===void 0&&(x=function(R){return R});var b=[],z=function(R){var V=O(c[R],M[R],p,v,x),j=a[R].x;a.forEach(function(W,B){var X=W.x,G=O(c[B],M[B],p,v,x);R!==B&&(j>=X&&j<=X+G||j+V>=X&&j+V<=X+G)&&(b.includes(B)||(b.push(R),b.push(B),b=u(b,[R,B]),z(B)))})};return z(r),Array.from(new Set(b.sort()))},K=function(r,a,c,M,p,v){M===void 0&&(M=.1),p===void 0&&(p=" - "),v===void 0&&(v=function(B){return B});var x=n.getStepDecimals(M),b=s.useState({}),z=b[0],R=b[1],V=s.useState(v(a[c].toFixed(x))),j=V[0],W=V[1];return s.useEffect(function(){if(r){var B=r.getThumbs();if(B.length<1)return;var X={},G=r.getOffsets(),Q=C(c,G,B,a,p,x,v),ae=v(a[c].toFixed(x));if(Q.length){var ee=Q.reduce(function(H,se,ce,ue){return H.length?u(H,[G[ue[ce]].x]):[G[ue[ce]].x]},[]);if(Math.min.apply(Math,ee)===G[c].x){var ie=[];Q.forEach(function(H){ie.push(a[H].toFixed(x))}),ae=Array.from(new Set(ie.sort(function(H,se){return parseFloat(H)-parseFloat(se)}))).map(v).join(p);var fe=Math.min.apply(Math,ee),oe=Math.max.apply(Math,ee),he=B[Q[ee.indexOf(oe)]].getBoundingClientRect().width;X.left=Math.abs(fe-(oe+he))/2+"px",X.transform="translate(-50%, 0)"}else X.visibility="hidden"}W(ae),R(X)}},[r,a]),[j,z]};n.useThumbOverlap=K;function $(r,a,c,M){var p=r.getBoundingClientRect(),v=p.left,x=p.top,b=p.width,z=p.height;return h(M)?Math.abs(c-(x+z/2)):Math.abs(a-(v+b/2))}})(re);var we=U&&U.__extends||function(){var n=function(u,s){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,T){e.__proto__=T}||function(e,T){for(var t in T)Object.prototype.hasOwnProperty.call(T,t)&&(e[t]=T[t])},n(u,s)};return function(u,s){n(u,s);function e(){this.constructor=u}u.prototype=s===null?Object.create(s):(e.prototype=s.prototype,new e)}}(),ye=U&&U.__createBinding||(Object.create?function(n,u,s,e){e===void 0&&(e=s),Object.defineProperty(n,e,{enumerable:!0,get:function(){return u[s]}})}:function(n,u,s,e){e===void 0&&(e=s),n[e]=u[s]}),Me=U&&U.__setModuleDefault||(Object.create?function(n,u){Object.defineProperty(n,"default",{enumerable:!0,value:u})}:function(n,u){n.default=u}),De=U&&U.__importStar||function(n){if(n&&n.__esModule)return n;var u={};if(n!=null)for(var s in n)s!=="default"&&Object.prototype.hasOwnProperty.call(n,s)&&ye(u,n,s);return Me(u,n),u},Te=U&&U.__spreadArrays||function(){for(var n=0,u=0,s=arguments.length;u<s;u++)n+=arguments[u].length;for(var e=Array(n),T=0,u=0;u<s;u++)for(var t=arguments[u],i=0,o=t.length;i<o;i++,T++)e[T]=t[i];return e};Object.defineProperty(ne,"__esModule",{value:!0});var J=De(Z.exports),w=re,Y=te,ke=["ArrowRight","ArrowUp","k","PageUp"],Oe=["ArrowLeft","ArrowDown","j","PageDown"],Re=function(n){we(u,n);function u(s){var e=n.call(this,s)||this;if(e.trackRef=J.createRef(),e.thumbRefs=[],e.markRefs=[],e.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(e.props.values.length).fill(0).map(function(t,i){return i}),isChanged:!1,markOffsets:[]},e.getOffsets=function(){var t=e.props,i=t.direction,o=t.values,l=t.min,h=t.max,D=e.trackRef.current,g=D.getBoundingClientRect(),d=w.getPaddingAndBorder(D);return e.getThumbs().map(function(m,A){var y={x:0,y:0},P=m.getBoundingClientRect(),_=w.getMargin(m);switch(i){case Y.Direction.Right:return y.x=(_.left+d.left)*-1,y.y=((P.height-g.height)/2+d.top)*-1,y.x+=g.width*w.relativeValue(o[A],l,h)-P.width/2,y;case Y.Direction.Left:return y.x=(_.right+d.right)*-1,y.y=((P.height-g.height)/2+d.top)*-1,y.x+=g.width-g.width*w.relativeValue(o[A],l,h)-P.width/2,y;case Y.Direction.Up:return y.x=((P.width-g.width)/2+_.left+d.left)*-1,y.y=-d.left,y.y+=g.height-g.height*w.relativeValue(o[A],l,h)-P.height/2,y;case Y.Direction.Down:return y.x=((P.width-g.width)/2+_.left+d.left)*-1,y.y=-d.left,y.y+=g.height*w.relativeValue(o[A],l,h)-P.height/2,y;default:return w.assertUnreachable(i)}})},e.getThumbs=function(){return e.trackRef&&e.trackRef.current?Array.from(e.trackRef.current.children).filter(function(t){return t.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},e.getTargetIndex=function(t){return e.getThumbs().findIndex(function(i){return i===t.target||i.contains(t.target)})},e.addTouchEvents=function(t){document.addEventListener("touchmove",e.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",e.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",e.schdOnEnd,{passive:!1})},e.addMouseEvents=function(t){document.addEventListener("mousemove",e.schdOnMouseMove),document.addEventListener("mouseup",e.schdOnEnd)},e.onMouseDownTrack=function(t){var i;if(t.button===0)if(t.persist(),t.preventDefault(),e.addMouseEvents(t.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(l){var h;return(h=l.current)===null||h===void 0?void 0:h.contains(t.target)}))return;e.setState({draggedTrackPos:[t.clientX,t.clientY]},function(){return e.onMove(t.clientX,t.clientY)})}else{var o=w.getClosestThumbIndex(e.thumbRefs.map(function(l){return l.current}),t.clientX,t.clientY,e.props.direction);(i=e.thumbRefs[o].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:o},function(){return e.onMove(t.clientX,t.clientY)})}},e.onResize=function(){w.translateThumbs(e.getThumbs(),e.getOffsets(),e.props.rtl),e.calculateMarkOffsets()},e.onTouchStartTrack=function(t){var i;if(t.persist(),e.addTouchEvents(t.nativeEvent),e.props.values.length>1&&e.props.draggableTrack){if(e.thumbRefs.some(function(l){var h;return(h=l.current)===null||h===void 0?void 0:h.contains(t.target)}))return;e.setState({draggedTrackPos:[t.touches[0].clientX,t.touches[0].clientY]},function(){return e.onMove(t.touches[0].clientX,t.touches[0].clientY)})}else{var o=w.getClosestThumbIndex(e.thumbRefs.map(function(l){return l.current}),t.touches[0].clientX,t.touches[0].clientY,e.props.direction);(i=e.thumbRefs[o].current)===null||i===void 0||i.focus(),e.setState({draggedThumbIndex:o},function(){return e.onMove(t.touches[0].clientX,t.touches[0].clientY)})}},e.onMouseOrTouchStart=function(t){if(!e.props.disabled){var i=w.isTouchEvent(t);if(!(!i&&t.button!==0)){var o=e.getTargetIndex(t);o!==-1&&(i?e.addTouchEvents(t):e.addMouseEvents(t),e.setState({draggedThumbIndex:o,thumbZIndexes:e.state.thumbZIndexes.map(function(l,h){return h===o?Math.max.apply(Math,e.state.thumbZIndexes):l<=e.state.thumbZIndexes[o]?l:l-1})}))}}},e.onMouseMove=function(t){t.preventDefault(),e.onMove(t.clientX,t.clientY)},e.onTouchMove=function(t){t.preventDefault(),e.onMove(t.touches[0].clientX,t.touches[0].clientY)},e.onKeyDown=function(t){var i=e.props,o=i.values,l=i.onChange,h=i.step,D=i.rtl,g=i.direction,d=e.state.isChanged,m=e.getTargetIndex(t.nativeEvent),A=D||g===Y.Direction.Left||g===Y.Direction.Down?-1:1;m!==-1&&(ke.includes(t.key)?(t.preventDefault(),e.setState({draggedThumbIndex:m,isChanged:!0}),l(w.replaceAt(o,m,e.normalizeValue(o[m]+A*(t.key==="PageUp"?h*10:h),m)))):Oe.includes(t.key)?(t.preventDefault(),e.setState({draggedThumbIndex:m,isChanged:!0}),l(w.replaceAt(o,m,e.normalizeValue(o[m]-A*(t.key==="PageDown"?h*10:h),m)))):t.key==="Tab"?e.setState({draggedThumbIndex:-1},function(){d&&e.fireOnFinalChange()}):d&&e.fireOnFinalChange())},e.onKeyUp=function(t){var i=e.state.isChanged;e.setState({draggedThumbIndex:-1},function(){i&&e.fireOnFinalChange()})},e.onMove=function(t,i){var o=e.state,l=o.draggedThumbIndex,h=o.draggedTrackPos,D=e.props,g=D.direction,d=D.min,m=D.max,A=D.onChange,y=D.values,P=D.step,_=D.rtl;if(l===-1&&h[0]===-1&&h[1]===-1)return null;var I=e.trackRef.current;if(!I)return null;var F=I.getBoundingClientRect(),N=w.isVertical(g)?F.height:F.width;if(h[0]!==-1&&h[1]!==-1){var f=t-h[0],k=i-h[1],O=0;switch(g){case Y.Direction.Right:case Y.Direction.Left:O=f/N*(m-d);break;case Y.Direction.Down:case Y.Direction.Up:O=k/N*(m-d);break;default:w.assertUnreachable(g)}if(_&&(O*=-1),Math.abs(O)>=P/2){for(var C=0;C<e.thumbRefs.length;C++){if(y[C]===m&&Math.sign(O)===1||y[C]===d&&Math.sign(O)===-1)return;var K=y[C]+O;K>m?O=m-y[C]:K<d&&(O=d-y[C])}for(var $=y.slice(0),C=0;C<e.thumbRefs.length;C++)$=w.replaceAt($,C,e.normalizeValue(y[C]+O,C));e.setState({draggedTrackPos:[t,i]}),A($)}}else{var r=0;switch(g){case Y.Direction.Right:r=(t-F.left)/N*(m-d)+d;break;case Y.Direction.Left:r=(N-(t-F.left))/N*(m-d)+d;break;case Y.Direction.Down:r=(i-F.top)/N*(m-d)+d;break;case Y.Direction.Up:r=(N-(i-F.top))/N*(m-d)+d;break;default:w.assertUnreachable(g)}_&&(r=m+d-r),Math.abs(y[l]-r)>=P/2&&A(w.replaceAt(y,l,e.normalizeValue(r,l)))}},e.normalizeValue=function(t,i){var o=e.props,l=o.min,h=o.max,D=o.step,g=o.allowOverlap,d=o.values;return w.normalizeValue(t,i,l,h,D,g,d)},e.onEnd=function(t){if(t.preventDefault(),document.removeEventListener("mousemove",e.schdOnMouseMove),document.removeEventListener("touchmove",e.schdOnTouchMove),document.removeEventListener("mouseup",e.schdOnEnd),document.removeEventListener("touchend",e.schdOnEnd),document.removeEventListener("touchcancel",e.schdOnEnd),e.state.draggedThumbIndex===-1&&e.state.draggedTrackPos[0]===-1&&e.state.draggedTrackPos[1]===-1)return null;e.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){e.fireOnFinalChange()})},e.fireOnFinalChange=function(){e.setState({isChanged:!1});var t=e.props,i=t.onFinalChange,o=t.values;i&&i(o)},e.calculateMarkOffsets=function(){if(!(!e.props.renderMark||!e.trackRef||e.trackRef.current===null)){for(var t=window.getComputedStyle(e.trackRef.current),i=parseInt(t.width,10),o=parseInt(t.height,10),l=parseInt(t.paddingLeft,10),h=parseInt(t.paddingTop,10),D=[],g=0;g<e.numOfMarks+1;g++){var d=9999,m=9999;if(e.markRefs[g].current){var A=e.markRefs[g].current.getBoundingClientRect();d=A.height,m=A.width}e.props.direction===Y.Direction.Left||e.props.direction===Y.Direction.Right?D.push([Math.round(i/e.numOfMarks*g+l-m/2),-Math.round((d-o)/2)]):D.push([Math.round(o/e.numOfMarks*g+h-d/2),-Math.round((m-i)/2)])}e.setState({markOffsets:D})}},s.step===0)throw new Error('"step" property should be a positive number');e.numOfMarks=(s.max-s.min)/e.props.step,e.schdOnMouseMove=w.schd(e.onMouseMove),e.schdOnTouchMove=w.schd(e.onTouchMove),e.schdOnEnd=w.schd(e.onEnd),e.thumbRefs=s.values.map(function(){return J.createRef()});for(var T=0;T<e.numOfMarks+1;T++)e.markRefs[T]=J.createRef();return e}return u.prototype.componentDidMount=function(){var s=this,e=this.props,T=e.values,t=e.min,i=e.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",s.onResize)},unobserve:function(){return window.removeEventListener("resize",s.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&w.checkInitialOverlap(this.props.values),this.props.values.forEach(function(o){return w.checkBoundaries(o,s.props.min,s.props.max)}),this.resizeObserver.observe(this.trackRef.current),w.translateThumbs(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),T.forEach(function(o){w.isStepDivisible(t,o,i)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},u.prototype.componentDidUpdate=function(s,e){var T=this.props,t=T.max,i=T.min,o=T.step,l=T.values,h=T.rtl;if(s.max!==t||s.min!==i||s.step!==o){this.markRefs=[],this.numOfMarks=(t-i)/o;for(var D=0;D<this.numOfMarks+1;D++)this.markRefs[D]=J.createRef()}w.translateThumbs(this.getThumbs(),this.getOffsets(),h),(s.max!==t||s.min!==i||s.step!==o||e.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),l.forEach(function(g){w.isStepDivisible(i,g,o)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},u.prototype.componentWillUnmount=function(){var s={passive:!1};document.removeEventListener("mousedown",this.onMouseOrTouchStart,s),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},u.prototype.render=function(){var s=this,e=this.props,T=e.renderTrack,t=e.renderThumb,i=e.renderMark,o=i===void 0?function(){return null}:i,l=e.values,h=e.min,D=e.max,g=e.allowOverlap,d=e.disabled,m=this.state,A=m.draggedThumbIndex,y=m.thumbZIndexes,P=m.markOffsets;return T({props:{style:{transform:"scale(1)",cursor:A>-1?"grabbing":this.props.draggableTrack?w.isVertical(this.props.direction)?"ns-resize":"ew-resize":l.length===1&&!d?"pointer":"inherit"},onMouseDown:d?w.voidFn:this.onMouseDownTrack,onTouchStart:d?w.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:d,children:Te(P.map(function(_,I,F){return o({props:{style:s.props.direction===Y.Direction.Left||s.props.direction===Y.Direction.Right?{position:"absolute",left:_[0]+"px",marginTop:_[1]+"px"}:{position:"absolute",top:_[0]+"px",marginLeft:_[1]+"px"},key:"mark"+I,ref:s.markRefs[I]},index:I})}),l.map(function(_,I){var F=s.state.draggedThumbIndex===I;return t({index:I,value:_,isDragged:F,props:{style:{position:"absolute",zIndex:y[I],cursor:d?"inherit":F?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:I,tabIndex:d?void 0:0,"aria-valuemax":g?D:l[I+1]||D,"aria-valuemin":g?h:l[I-1]||h,"aria-valuenow":_,draggable:!1,ref:s.thumbRefs[I],role:"slider",onKeyDown:d?w.voidFn:s.onKeyDown,onKeyUp:d?w.voidFn:s.onKeyUp}})}))})},u.defaultProps={step:1,direction:Y.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},u}(J.Component);ne.default=Re;(function(n){var u=U&&U.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.checkValuesAgainstBoundaries=n.relativeValue=n.useThumbOverlap=n.Direction=n.getTrackBackground=n.Range=void 0;var s=u(ne);n.Range=s.default;var e=re;Object.defineProperty(n,"getTrackBackground",{enumerable:!0,get:function(){return e.getTrackBackground}}),Object.defineProperty(n,"useThumbOverlap",{enumerable:!0,get:function(){return e.useThumbOverlap}}),Object.defineProperty(n,"relativeValue",{enumerable:!0,get:function(){return e.relativeValue}}),Object.defineProperty(n,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return e.checkValuesAgainstBoundaries}});var T=te;Object.defineProperty(n,"Direction",{enumerable:!0,get:function(){return T.Direction}})})(le);var Qe=()=>{let n=new Date;const u=ge(),s=pe(),[e,T]=Z.exports.useState(n.toLocaleDateString("en-CA")),[t,i]=Z.exports.useState(),[o,l]=Z.exports.useState([12]),[h,D]=Z.exports.useState(""),[g,d]=xe("@add-construction-field",{xPosition:o});Z.exports.useEffect(()=>{g.xPosition!==void 0&&l(new Array(g.xPosition))},[]),Z.exports.useEffect(()=>{d(f=>({...f,xPosition:o.map(Number)}))},[o]);const m=!!(e&&t),A=()=>{s("/add-construction-field/step-3",{state:{...u.state,constructionStartDate:`${L(e).format("YYYY-MM-DD")}T00:00:00.000Z`,constructionEndDate:`${L(t).format("YYYY-MM-DD")}T00:00:00.000Z`,constructionRangeDate:o}})};Z.exports.useEffect(()=>{window.addEventListener("beforeunload",function(f){f.preventDefault(),f.returnValue=""})},[]),Z.exports.useEffect(()=>{D(L(e).add(120,"M").format("YYYY-MM-DD"))},[e]);const y=()=>{s("/add-construction-field/step-1")},P=f=>{const k=new Array;if(parseInt(f)<=120&&parseInt(f)>=1){k.push(parseInt(f)),l(k);let O=L(n);O=L(O.add(parseInt(f),"M")).format("YYYY-MM-DD"),i(O)}},_=f=>{l(f);const k=L(e).add(f,"M").format("YYYY-MM-DD");i(k)};function I(f,k){const O=Number(L(f).format("YYYY")),C=Number(L(k).format("YYYY")),K=Number(L(f).format("MM")),$=Number(L(k).format("MM")),r=C-O,a=$-K;return r*12+a}const F=f=>{i(f);const k=L(e).format("YYYY-MM-DD"),O=L(f).format("YYYY-MM-DD"),C=I(k,O),K=new Array;K.push(C),l(K)},N=f=>{T(f),n=L(e).format("YYYY-MM-DD");const k=L(f).add(o.map(Number),"M").format("YYYY-MM-DD");console.log(k),i(k)};return Z.exports.useEffect(()=>{let f=n.getFullYear()+1,k=n.getMonth()+1,O=n.getDate();k<10&&(k="0"+k);const C=f+k+O,K=L(C).format("YYYY-MM-DD");i(K)},[]),S(be,{children:q(Ce,{children:[q(Se,{children:[S(Ee,{children:S(_e,{children:"2"})}),S(Ae,{children:"\uACF5\uC0AC\uAE30\uAC04"})]}),q(Ie,{style:{width:"346px",height:"76px"},children:[S(Ye,{children:"\uACF5\uC0AC\uAE30\uAC04"}),q(Be,{children:[S("input",{type:"date",defaultValue:n.toLocaleDateString("en-CA"),onChange:f=>{N(f.target.value)},value:e||"",style:{width:"156px",height:"42px"}}),S(Le,{src:ve("../assets/ic-tilde.svg")}),S("input",{type:"date",defaultValue:t,onChange:f=>{F(f.target.value)},value:t||"",style:{width:"156px",height:"42px"},min:e,max:h})]})]}),q(Fe,{children:[q(je,{children:[S(le.Range,{step:1,min:1,max:120,values:o,onChange:f=>{_(f)},renderTrack:({props:f,children:k})=>S("div",{...f,ref:f.ref,style:{...f.style,height:"10px",width:"500px",backgroundColor:"#fff",borderRadius:"50px",border:"1px solid #e3e3e3",marginBottom:"7px"},children:k}),renderThumb:({props:f})=>S(me,{children:S("div",{...f,style:{outline:"none",width:"22px",height:"22px",border:"3px solid #258fff",boxShadow:"0 0 10px 0 rgba(30, 117, 209, 0.42)",borderRadius:"50%",backgroundColor:"#fff"},children:S(Ue,{children:o})})})}),S(Ne,{children:"1\uAC1C\uC6D4"}),S(Ke,{children:"120\uAC1C\uC6D4"})]}),q(Ve,{children:[S(Xe,{children:"\uCD1D"}),S(We,{value:o,onChange:f=>{P(f.target.value)},min:1,max:120}),S(Ze,{children:"\uAC1C\uC6D4"})]})]}),q(Pe,{children:[S(de,{style:{color:"#222222",cursor:"pointer"},onClick:()=>y(),children:"\uC774\uC804"}),m?S(ze,{onClick:()=>A(),children:"\uB2E4\uC74C"}):S(de,{children:"\uB2E4\uC74C"})]})]})})};const Ce=E.div`
  width: 100%;
  height: 100%;
  padding: 60px 0 60px 60px;

  user-select: none;
`,Se=E.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`,Ee=E.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`,_e=E.div`
  width: 9px;
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #258fff;
  line-height: 1.5;
`,Ae=E.div`
  width: 80px;
  height: 29px;
  margin: 0 0 0 6px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #222;
  line-height: 1.6;
`,Ye=E.div`
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000000;
  line-height: 1.4;
  margin-bottom: 10px;
`,Ie=E.div`
  width: 540px;
  height: 97px;
  margin: 45px 0 0 0;
`,Be=E.div`
  width: 346px;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,Pe=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
  margin-top: 322px;
`,de=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #f2f2f2;
  padding: 15px 0;
  border-radius: 6px;

  text-align: center;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #999;
`,ze=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #258fff;
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
`,Le=E.img`
  width: 14px;
  height: 14px;
  margin: 0 10px;
`,Fe=E.div`
  width: 540px;
  height: 180px;
  margin: 30px 0 0;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  border-radius: 6px;
`,je=E.div`
  width: 500px;
  height: 68px;
  margin: 18px 20px 24px 20px;
  padding-top: 23px;
`,Ue=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 24px;
  width: 22px;
  top: -28px;
  left: -3px;

  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #258fff;
`,Ne=E.span`
  margin-right: 428px;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;
`,Ke=E.span`
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: right;
  color: #444;
`,Ve=E.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,We=E.input`
  width: 98px;
  height: 50px;
  border: 2px solid #4490f7;
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: none;

  font-size: 28px;
  font-weight: normal;
  text-align: center;
  color: #258fff;
`,Xe=E.span`
  margin: 12px 24px 12px 0;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #000;
  line-height: 1.4;
`,Ze=E.span`
  margin: 12px 0 12px 8px;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #000;
  line-height: 1.4;
`;export{Qe as default};
