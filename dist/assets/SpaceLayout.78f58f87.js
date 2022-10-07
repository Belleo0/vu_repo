import{u as ut,g as De,c as j,a as Dn,S as Ot,b as Sn,H as Rn,F as En}from"./Header.8f74d7dd.js";import{l as Xt,r as i,j as A,z as Kt,a as h,d as Se,n as w,A as ke,F as An,h as Bn,u as Mn}from"./index.fa23706f.js";import{B as Oe,a as Ie}from"./Button.2ebe35cd.js";import{P as Tn}from"./ProfileBox.54d21f9f.js";import{u as Gt}from"./useSelectedSpaceId.e98fa8e8.js";import{T as Ve}from"./TextModal.458f5750.js";import{M as It,b as kt,d as Ft,C as On,S as In}from"./Modal.5ea91f83.js";import{l as kn,F as Fn}from"./lodash.4b3a1baf.js";import{u as $n}from"./useSpaces.40cf6e61.js";var Ln=({info:e,id:t,name:n,address:r,revalidate:o,isHide:s,setSelectedIdWithFirstId:c})=>{const u=ut(),l=Xt(),a=Gt(),[d,g]=i.exports.useState(!1),[b,C]=i.exports.useState(!1),[x,v]=i.exports.useState(!1),[y,p]=i.exports.useState(!1),B=i.exports.useMemo(()=>a===t,[a]),[m,S]=i.exports.useState(!1),E=async()=>{if(!x){v(!0);try{await Se[s?"delete":"post"](`/field-spaces/${t}/hide`)}catch(T){console.log(T)}finally{o(),c(),g(!1)}}},R=async()=>{if(!y){p(!0);try{await Se.delete(`${u?"/field-spaces":"/factory-spaces"}/${t}`)}catch(T){console.log(T)}finally{o(),c(),C(!1)}}};return A(Nn,{isFieldUser:u,isActive:B,isOpen:m,children:[A(_n,{onClick:()=>l(Kt(e)),children:[A(jn,{children:[h(zn,{children:n}),u&&h(Pn,{children:r})]}),u&&h(Wn,{src:De("../assets/ic-arrow-gray.svg"),isOpen:m,onClick:()=>S(T=>!T)})]}),u&&m&&A(Yn,{children:[h($t,{onClick:()=>g(!0),children:s?"\uC228\uAE40 \uD574\uC81C":"\uC228\uAE40"}),h($t,{style:{color:"#ef0000"},onClick:()=>C(!0),children:"\uC0AD\uC81C"})]}),h(Ve,{open:d,onClose:()=>g(!1),onSubmit:E,content:s?`\uAC74\uC124\uD604\uC7A5\uC744 \uC228\uAE40\uD574\uC81C \uD558\uC2E4 \uACBD\uC6B0
\uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC2DC \uC228\uAE40\uCC98\uB9AC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`:`\uAC74\uC124\uD604\uC7A5\uC744 \uC228\uAE40 \uCC98\uB9AC\uD560 \uACBD\uC6B0
\uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC2DC \uC228\uAE40\uD574\uC81C \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`}),h(Ve,{open:b,onClose:()=>C(!1),onSubmit:R,content:`\uAC74\uC124\uD604\uC7A5\uC744 \uC0AD\uC81C\uD560 \uACBD\uC6B0 \uD574\uB2F9 \uAC74\uC124\uD604\uC7A5\uC758
\uC8FC\uBB38\uB0B4\uC5ED \uB4F1 \uAC70\uB798\uC815\uBCF4\uB3C4 \uD568\uAED8 \uC0AD\uC81C\uB429\uB2C8\uB2E4.`})]})};const Nn=w.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: white;

  user-select: none;

  border: solid 1px #258fff;

  margin-bottom: 16px;

  ${({isOpen:e,isFieldUser:t})=>e?j`
          min-height: ${t?118:64}px;
        `:j`
          min-height: ${t?78:64}px;
        `}

  ${({isFieldUser:e})=>e?j``:j`
          justify-content: center;
        `}

  ${({isActive:e})=>e?j`
          border-color: #258fff;
        `:j`
          border-color: white;
        `}

  &:hover {
    border-color: #258fff;
  }

  transition: border 0.1s linear, min-height 0.05s linear;

  overflow: hidden;
`,_n=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`,zn=w.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:last-child {
    margin-bottom: 0;
  }
`,Pn=w.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 16px;
`,jn=w.div`
  display: flex;
  flex-direction: column;
`,Wn=w.img`
  width: 20px;
  height: 20px;
  margin-left: 24px;

  ${({isOpen:e})=>e?j`
          transform: rotate(180deg);
        `:j`
          transform: rotate(0deg);
        `}
`,Yn=w.div`
  display: flex;
  border-top: 1px solid #f2f2f2;
`,$t=w.span`
  flex: 1;
  padding: 12px;

  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #000;

  &:first-of-type {
    border-right: 1px solid #f2f2f2;
  }
`;function Un(...e){return i.exports.useMemo(()=>t=>{e.forEach(n=>n(t))},e)}const Ze=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Re(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function dt(e){return"nodeType"in e}function Q(e){var t,n;return e?Re(e)?e:dt(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function ft(e){const{Document:t}=Q(e);return e instanceof t}function Ee(e){return Re(e)?!1:e instanceof Q(e).HTMLElement}function Hn(e){return e instanceof Q(e).SVGElement}function Ae(e){return e?Re(e)?e.document:dt(e)?ft(e)?e:Ee(e)?e.ownerDocument:document:document:document}const Be=Ze?i.exports.useLayoutEffect:i.exports.useEffect;function Xn(){const e=i.exports.useRef(null),t=i.exports.useCallback((r,o)=>{e.current=setInterval(r,o)},[]),n=i.exports.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Ne(e,t=[e]){const n=i.exports.useRef(e);return Be(()=>{n.current!==e&&(n.current=e)},t),n}function je(e,t){const n=i.exports.useRef();return i.exports.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function pt(e){const t=Ne(e),n=i.exports.useRef(null),r=i.exports.useCallback(o=>{o!==n.current&&(t.current==null||t.current(o,n.current)),n.current=o},[]);return[n,r]}let nt={};function We(e,t){return i.exports.useMemo(()=>{if(t)return t;const n=nt[e]==null?0:nt[e]+1;return nt[e]=n,`${e}-${n}`},[e,t])}function qt(e){return(t,...n)=>n.reduce((r,o)=>{const s=Object.entries(o);for(const[c,u]of s){const l=r[c];l!=null&&(r[c]=l+e*u)}return r},{...t})}const _e=qt(1),Vt=qt(-1);function Kn(e){return"clientX"in e&&"clientY"in e}function Jt(e){if(!e)return!1;const{KeyboardEvent:t}=Q(e.target);return t&&e instanceof t}function Gn(e){if(!e)return!1;const{TouchEvent:t}=Q(e.target);return t&&e instanceof t}function it(e){if(Gn(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return Kn(e)?{x:e.clientX,y:e.clientY}:null}const ze=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return`translate3d(${t?Math.round(t):0}px, ${n?Math.round(n):0}px, 0)`}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return`scaleX(${t}) scaleY(${n})`}},Transform:{toString(e){if(!!e)return[ze.Translate.toString(e),ze.Scale.toString(e)].join(" ")}},Transition:{toString({property:e,duration:t,easing:n}){return`${e} ${t}ms ${n}`}}}),qn={display:"none"};function Vn({id:e,value:t}){return h("div",{id:e,style:qn,children:t})}const Jn={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};function Qn({id:e,announcement:t}){return h("div",{id:e,style:Jn,role:"status","aria-live":"assertive","aria-atomic":!0,children:t})}function Zn(){const[e,t]=i.exports.useState("");return{announce:i.exports.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const er={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},tr={onDragStart(e){return`Picked up draggable item ${e}.`},onDragOver(e,t){return t?`Draggable item ${e} was moved over droppable area ${t}.`:`Draggable item ${e} is no longer over a droppable area.`},onDragEnd(e,t){return t?`Draggable item ${e} was dropped over droppable area ${t}`:`Draggable item ${e} was dropped.`},onDragCancel(e){return`Dragging was cancelled. Draggable item ${e} was dropped.`}};var M;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(M||(M={}));function Je(...e){}class Fe extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(({disabled:t})=>!t)}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const nr={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:{},droppableRects:new Map,droppableContainers:new Fe,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Je},scrollableAncestors:[],scrollableAncestorRects:[],measureDroppableContainers:Je,windowRect:null,measuringScheduled:!1},rr={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Je,draggableNodes:{},over:null,measureDroppableContainers:Je},ht=i.exports.createContext(rr),Qt=i.exports.createContext(nr);function or(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:{},translate:{x:0,y:0}},droppable:{containers:new Fe}}}function sr(e,t){switch(t.type){case M.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case M.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case M.DragEnd:case M.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case M.RegisterDroppable:{const{element:n}=t,{id:r}=n,o=new Fe(e.droppable.containers);return o.set(r,n),{...e,droppable:{...e.droppable,containers:o}}}case M.SetDroppableDisabled:{const{id:n,key:r,disabled:o}=t,s=e.droppable.containers.get(n);if(!s||r!==s.key)return e;const c=new Fe(e.droppable.containers);return c.set(n,{...s,disabled:o}),{...e,droppable:{...e.droppable,containers:c}}}case M.UnregisterDroppable:{const{id:n,key:r}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const s=new Fe(e.droppable.containers);return s.delete(n),{...e,droppable:{...e.droppable,containers:s}}}default:return e}}const Zt=i.exports.createContext({type:null,event:null});function ir({onDragStart:e,onDragMove:t,onDragOver:n,onDragEnd:r,onDragCancel:o}){const s=i.exports.useContext(Zt),c=i.exports.useRef(s);i.exports.useEffect(()=>{if(s!==c.current){const{type:u,event:l}=s;switch(u){case M.DragStart:e?.(l);break;case M.DragMove:t?.(l);break;case M.DragOver:n?.(l);break;case M.DragCancel:o?.(l);break;case M.DragEnd:r?.(l);break}c.current=s}},[s,e,t,n,r,o])}function cr({announcements:e=tr,hiddenTextDescribedById:t,screenReaderInstructions:n}){const{announce:r,announcement:o}=Zn(),s=We("DndLiveRegion"),[c,u]=i.exports.useState(!1);return i.exports.useEffect(()=>{u(!0)},[]),ir(i.exports.useMemo(()=>({onDragStart({active:l}){r(e.onDragStart(l.id))},onDragMove({active:l,over:a}){e.onDragMove&&r(e.onDragMove(l.id,a?.id))},onDragOver({active:l,over:a}){r(e.onDragOver(l.id,a?.id))},onDragEnd({active:l,over:a}){r(e.onDragEnd(l.id,a?.id))},onDragCancel({active:l}){r(e.onDragCancel(l.id))}}),[r,e])),c?ke.exports.createPortal(A(An,{children:[h(Vn,{id:t,value:n.draggable}),h(Qn,{id:s,announcement:o})]}),document.body):null}const se=Object.freeze({x:0,y:0});function en(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function tn({data:{value:e}},{data:{value:t}}){return e-t}function ar({data:{value:e}},{data:{value:t}}){return t-e}function Lt({left:e,top:t,height:n,width:r}){return[{x:e,y:t},{x:e+r,y:t},{x:e,y:t+n},{x:e+r,y:t+n}]}function nn(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function Nt(e,t=e.left,n=e.top){return{x:t+e.width*.5,y:n+e.height*.5}}const lr=({collisionRect:e,droppableContainers:t})=>{const n=Nt(e,e.left,e.top),r=[];for(const o of t){const{id:s,rect:{current:c}}=o;if(c){const u=en(Nt(c),n);r.push({id:s,data:{droppableContainer:o,value:u}})}}return r.sort(tn)},ur=({collisionRect:e,droppableContainers:t})=>{const n=Lt(e),r=[];for(const o of t){const{id:s,rect:{current:c}}=o;if(c){const u=Lt(c),l=n.reduce((d,g,b)=>d+en(u[b],g),0),a=Number((l/4).toFixed(4));r.push({id:s,data:{droppableContainer:o,value:a}})}}return r.sort(tn)};function dr(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),s=Math.min(t.top+t.height,e.top+e.height),c=o-r,u=s-n;if(r<o&&n<s){const l=t.width*t.height,a=e.width*e.height,d=c*u,g=d/(l+a-d);return Number(g.toFixed(4))}return 0}const fr=({collisionRect:e,droppableContainers:t})=>{const n=[];for(const r of t){const{id:o,rect:{current:s}}=r;if(s){const c=dr(s,e);c>0&&n.push({id:o,data:{droppableContainer:r,value:c}})}}return n.sort(ar)};function pr(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function hr(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:se}function gr(e){return function(n,...r){return r.reduce((o,s)=>({...o,top:o.top+e*s.y,bottom:o.bottom+e*s.y,left:o.left+e*s.x,right:o.right+e*s.x}),{...n})}}const Cr=gr(1);function xr(e,t,n){let r,o,s,c,u;if(t.startsWith("matrix3d("))r=t.slice(9,-1).split(/, /),o=+r[0],s=+r[5],c=+r[12],u=+r[13];else if(t.startsWith("matrix("))r=t.slice(7,-1).split(/, /),o=+r[0],s=+r[3],c=+r[4],u=+r[5];else return e;const l=e.left-c-(1-o)*parseFloat(n),a=e.top-u-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),d=o?e.width/o:e.width,g=s?e.height/s:e.height;return{width:d,height:g,top:a,right:l+d,bottom:a+g,left:l}}const vr={ignoreTransform:!1};function gt(e,t=vr){let n=e.getBoundingClientRect();if(t.ignoreTransform){const{getComputedStyle:a}=Q(e),{transform:d,transformOrigin:g}=a(e);d&&(n=xr(n,d,g))}const{top:r,left:o,width:s,height:c,bottom:u,right:l}=n;return{top:r,left:o,width:s,height:c,bottom:u,right:l}}function Ye(e){return gt(e,{ignoreTransform:!0})}function br(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function mr(e,t=Q(e).getComputedStyle(e)){return t.position==="fixed"}function wr(e,t=Q(e).getComputedStyle(e)){const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].find(o=>{const s=t[o];return typeof s=="string"?n.test(s):!1})!=null}function Ct(e){const t=[];function n(r){if(!r)return t;if(ft(r)&&r.scrollingElement!=null&&!t.includes(r.scrollingElement))return t.push(r.scrollingElement),t;if(!Ee(r)||Hn(r)||t.includes(r))return t;const{getComputedStyle:o}=Q(r),s=o(r);return r!==e&&wr(r,s)&&t.push(r),mr(r,s)?t:n(r.parentNode)}return e?n(e):t}function rt(e){return!Ze||!e?null:Re(e)?e:dt(e)?ft(e)||e===Ae(e).scrollingElement?window:Ee(e)?e:null:null}function rn(e){return Re(e)?e.scrollX:e.scrollLeft}function on(e){return Re(e)?e.scrollY:e.scrollTop}function ct(e){return{x:rn(e),y:on(e)}}var ye;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(ye||(ye={}));function sn(e){const t={x:0,y:0},n={x:e.scrollWidth-e.clientWidth,y:e.scrollHeight-e.clientHeight},r=e.scrollTop<=t.y,o=e.scrollLeft<=t.x,s=e.scrollTop>=n.y,c=e.scrollLeft>=n.x;return{isTop:r,isLeft:o,isBottom:s,isRight:c,maxScroll:n,minScroll:t}}function yr(e){return!Ze||!e?!1:e===document.scrollingElement}const Dr={x:.2,y:.2};function Sr(e,t,{top:n,left:r,right:o,bottom:s},c=10,u=Dr){const{clientHeight:l,clientWidth:a}=e,d=yr(e)?{top:0,left:0,right:a,bottom:l,width:a,height:l}:t,{isTop:g,isBottom:b,isLeft:C,isRight:x}=sn(e),v={x:0,y:0},y={x:0,y:0},p={height:d.height*u.y,width:d.width*u.x};return!g&&n<=d.top+p.height?(v.y=ye.Backward,y.y=c*Math.abs((d.top+p.height-n)/p.height)):!b&&s>=d.bottom-p.height&&(v.y=ye.Forward,y.y=c*Math.abs((d.bottom-p.height-s)/p.height)),!x&&o>=d.right-p.width?(v.x=ye.Forward,y.x=c*Math.abs((d.right-p.width-o)/p.width)):!C&&r<=d.left+p.width&&(v.x=ye.Backward,y.x=c*Math.abs((d.left+p.width-r)/p.width)),{direction:v,speed:y}}function Rr(e){if(e===document.scrollingElement){const{innerWidth:s,innerHeight:c}=window;return{top:0,left:0,right:s,bottom:c,width:s,height:c}}const{top:t,left:n,right:r,bottom:o}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:o,width:e.clientWidth,height:e.clientHeight}}function cn(e){return e.reduce((t,n)=>_e(t,ct(n)),se)}function Er(e){return e.reduce((t,n)=>t+rn(n),0)}function Ar(e){return e.reduce((t,n)=>t+on(n),0)}const Br=[["x",["left","right"],Er],["y",["top","bottom"],Ar]];class xt{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Ct(n),o=cn(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[s,c,u]of Br)for(const l of c)Object.defineProperty(this,l,{get:()=>{const a=u(r),d=o[s]-a;return this.rect[l]+d},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}var $e;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})($e||($e={}));var Qe;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Qe||(Qe={}));function Mr({acceleration:e,activator:t=$e.Pointer,canScroll:n,draggingRect:r,enabled:o,interval:s=5,order:c=Qe.TreeOrder,pointerCoordinates:u,scrollableAncestors:l,scrollableAncestorRects:a,threshold:d}){const[g,b]=Xn(),C=i.exports.useRef({x:1,y:1}),x=i.exports.useMemo(()=>{switch(t){case $e.Pointer:return u?{top:u.y,bottom:u.y,left:u.x,right:u.x}:null;case $e.DraggableRect:return r}return null},[t,r,u]),v=i.exports.useRef(se),y=i.exports.useRef(null),p=i.exports.useCallback(()=>{const m=y.current;if(!m)return;const S=C.current.x*v.current.x,E=C.current.y*v.current.y;m.scrollBy(S,E)},[]),B=i.exports.useMemo(()=>c===Qe.TreeOrder?[...l].reverse():l,[c,l]);i.exports.useEffect(()=>{if(!o||!l.length||!x){b();return}for(const m of B){if(n?.(m)===!1)continue;const S=l.indexOf(m),E=a[S];if(!E)continue;const{direction:R,speed:T}=Sr(m,E,x,e,d);if(T.x>0||T.y>0){b(),y.current=m,g(p,s),C.current=T,v.current=R;return}}C.current={x:0,y:0},v.current={x:0,y:0},b()},[e,p,n,b,o,s,JSON.stringify(x),g,l,B,a,JSON.stringify(d)])}function Tr(e,t){const n=t!==null?e[t]:void 0,r=n?n.node.current:null;return je(o=>{var s;return t===null?null:(s=r??o)!=null?s:null},[r,t])}function Or(e,t){return i.exports.useMemo(()=>e.reduce((n,r)=>{const{sensor:o}=r,s=o.activators.map(c=>({eventName:c.eventName,handler:t(c.handler,r)}));return[...n,...s]},[]),[e,t])}var Pe;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Pe||(Pe={}));var at;(function(e){e.Optimized="optimized"})(at||(at={}));const _t=new Map,Ir={measure:Ye,strategy:Pe.WhileDragging,frequency:at.Optimized};function kr(e,{dragging:t,dependencies:n,config:r}){const[o,s]=i.exports.useState(null),c=o!=null,{frequency:u,measure:l,strategy:a}={...Ir,...r},d=i.exports.useRef(e),g=i.exports.useCallback((y=[])=>s(p=>p?p.concat(y):y),[]),b=i.exports.useRef(null),C=v(),x=je(y=>{if(C&&!t)return _t;const p=o;if(!y||y===_t||d.current!==e||p!=null){const B=new Map;for(let m of e){if(!m)continue;if(p&&p.length>0&&!p.includes(m.id)&&m.rect.current){B.set(m.id,m.rect.current);continue}const S=m.node.current,E=S?new xt(l(S),S):null;m.rect.current=E,E&&B.set(m.id,E)}return B}return y},[e,o,t,C,l]);return i.exports.useEffect(()=>{d.current=e},[e]),i.exports.useEffect(()=>{C||requestAnimationFrame(()=>g())},[t,C]),i.exports.useEffect(()=>{c&&s(null)},[c]),i.exports.useEffect(()=>{C||typeof u!="number"||b.current!==null||(b.current=setTimeout(()=>{g(),b.current=null},u))},[u,C,g,...n]),{droppableRects:x,measureDroppableContainers:g,measuringScheduled:c};function v(){switch(a){case Pe.Always:return!1;case Pe.BeforeDragging:return t;default:return!t}}}function an({onResize:e,disabled:t}){const n=i.exports.useMemo(()=>{if(t||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:r}=window;return new r(e)},[t,e]);return i.exports.useEffect(()=>()=>n?.disconnect(),[n]),n}function Fr(e){const[t,n]=i.exports.useState(null),r=i.exports.useRef(e),o=i.exports.useCallback(s=>{const c=rt(s.target);!c||n(u=>u?(u.set(c,ct(c)),new Map(u)):null)},[]);return i.exports.useEffect(()=>{const s=r.current;if(e!==s){c(s);const u=e.map(l=>{const a=rt(l);return a?(a.addEventListener("scroll",o,{passive:!0}),[a,ct(a)]):null}).filter(l=>l!=null);n(u.length?new Map(u):null),r.current=e}return()=>{c(e),c(s)};function c(u){u.forEach(l=>{const a=rt(l);a?.removeEventListener("scroll",o)})}},[o,e]),i.exports.useMemo(()=>e.length?t?Array.from(t.values()).reduce((s,c)=>_e(s,c),se):cn(e):se,[e,t])}const $r=[];function Lr(e){const t=i.exports.useRef(e),n=je(r=>e?r&&e&&t.current&&e.parentNode===t.current.parentNode?r:Ct(e):$r,[e]);return i.exports.useEffect(()=>{t.current=e},[e]),n}function Nr(e){i.exports.useEffect(()=>{if(!Ze)return;const t=e.map(({sensor:n})=>n.setup==null?void 0:n.setup());return()=>{for(const n of t)n?.()}},e.map(({sensor:t})=>t))}function _r(e,t){return i.exports.useMemo(()=>e.reduce((n,{eventName:r,handler:o})=>(n[r]=s=>{o(s,t)},n),{}),[e,t])}const zr=jr(Ye),Pr=Wr(Ye);function ln(e,t,n){const r=i.exports.useRef(e);return je(o=>e?n||!o&&e||e!==r.current?Ee(e)&&e.parentNode==null?null:new xt(t(e),e):o??null:null,[e,n,t])}function jr(e){return(t,n)=>ln(t,e,n)}function Wr(e){const t=[];return function(r,o){const s=i.exports.useRef(r);return je(c=>r.length?o||!c&&r.length||r!==s.current?r.map(u=>new xt(e(u),u)):c??t:t,[r,o])}}function Yr(e){return i.exports.useMemo(()=>e?br(e):null,[e])}function Ur(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Ee(t)?t:e}function Hr({measure:e=gt}){const[t,n]=i.exports.useState(null),r=i.exports.useCallback(l=>{for(const{target:a}of l)if(Ee(a)){n(d=>{const g=e(a);return d?{...d,width:g.width,height:g.height}:g});break}},[e]),o=an({onResize:r}),s=i.exports.useCallback(l=>{const a=Ur(l);o?.disconnect(),a&&o?.observe(a),n(a?e(a):null)},[e,o]),[c,u]=pt(s);return i.exports.useMemo(()=>({nodeRef:c,rect:t,setRef:u}),[t,c,u])}function zt(e,t){return i.exports.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function Xr(...e){return i.exports.useMemo(()=>[...e].filter(t=>t!=null),[...e])}class Le{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var o;(o=this.target)==null||o.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function Kr(e){const{EventTarget:t}=Q(e);return e instanceof t?e:Ae(e)}function ot(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var J;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(J||(J={}));function Pt(e){e.preventDefault()}function Gr(e){e.stopPropagation()}var D;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(D||(D={}));const un={start:[D.Space,D.Enter],cancel:[D.Esc],end:[D.Space,D.Enter]},qr=(e,{currentCoordinates:t})=>{switch(e.code){case D.Right:return{...t,x:t.x+25};case D.Left:return{...t,x:t.x-25};case D.Down:return{...t,y:t.y+25};case D.Up:return{...t,y:t.y-25}}};class vt{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.coordinates=se,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Le(Ae(n)),this.windowListeners=new Le(Q(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(J.Resize,this.handleCancel),this.windowListeners.add(J.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(J.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props;if(!t.node.current)throw new Error("Active draggable node is undefined");const r=Ye(t.node.current),o={x:r.left,y:r.top};this.coordinates=o,n(o)}handleKeyDown(t){if(Jt(t)){const{coordinates:n}=this,{active:r,context:o,options:s}=this.props,{keyboardCodes:c=un,coordinateGetter:u=qr,scrollBehavior:l="smooth"}=s,{code:a}=t;if(c.end.includes(a)){this.handleEnd(t);return}if(c.cancel.includes(a)){this.handleCancel(t);return}const d=u(t,{active:r,context:o.current,currentCoordinates:n});if(d){const g={x:0,y:0},{scrollableAncestors:b}=o.current;for(const C of b){const x=t.code,v=Vt(d,n),{isTop:y,isRight:p,isLeft:B,isBottom:m,maxScroll:S,minScroll:E}=sn(C),R=Rr(C),T={x:Math.min(x===D.Right?R.right-R.width/2:R.right,Math.max(x===D.Right?R.left:R.left+R.width/2,d.x)),y:Math.min(x===D.Down?R.bottom-R.height/2:R.bottom,Math.max(x===D.Down?R.top:R.top+R.height/2,d.y))},U=x===D.Right&&!p||x===D.Left&&!B,$=x===D.Down&&!m||x===D.Up&&!y;if(U&&T.x!==d.x){if(x===D.Right&&C.scrollLeft+v.x<=S.x||x===D.Left&&C.scrollLeft+v.x>=E.x){C.scrollBy({left:v.x,behavior:l});return}g.x=x===D.Right?C.scrollLeft-S.x:C.scrollLeft-E.x,C.scrollBy({left:-g.x,behavior:l});break}else if($&&T.y!==d.y){if(x===D.Down&&C.scrollTop+v.y<=S.y||x===D.Up&&C.scrollTop+v.y>=E.y){C.scrollBy({top:v.y,behavior:l});return}g.y=x===D.Down?C.scrollTop-S.y:C.scrollTop-E.y,C.scrollBy({top:-g.y,behavior:l});break}}this.handleMove(t,_e(d,g))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n),this.coordinates=n}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}vt.activators=[{eventName:"onKeyDown",handler:(e,{keyboardCodes:t=un,onActivation:n})=>{const{code:r}=e.nativeEvent;return t.start.includes(r)?(e.preventDefault(),n?.({event:e.nativeEvent}),!0):!1}}];function jt(e){return Boolean(e&&"distance"in e)}function Wt(e){return Boolean(e&&"delay"in e)}class bt{constructor(t,n,r=Kr(t.event.target)){var o;this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:s}=t,{target:c}=s;this.props=t,this.events=n,this.document=Ae(c),this.documentListeners=new Le(this.document),this.listeners=new Le(r),this.windowListeners=new Le(Q(c)),this.initialCoordinates=(o=it(s))!=null?o:se,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(J.Resize,this.handleCancel),this.windowListeners.add(J.DragStart,Pt),this.windowListeners.add(J.VisibilityChange,this.handleCancel),this.windowListeners.add(J.ContextMenu,Pt),this.documentListeners.add(J.Keydown,this.handleKeydown),n){if(jt(n))return;if(Wt(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(J.Click,Gr,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(J.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:o,props:s}=this,{onMove:c,options:{activationConstraint:u}}=s;if(!o)return;const l=(n=it(t))!=null?n:se,a=Vt(o,l);if(!r&&u){if(Wt(u))return ot(a,u.tolerance)?this.handleCancel():void 0;if(jt(u))return u.tolerance!=null&&ot(a,u.tolerance)?this.handleCancel():ot(a,u.distance)?this.handleStart():void 0}t.cancelable&&t.preventDefault(),c(l)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===D.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const Vr={move:{name:"pointermove"},end:{name:"pointerup"}};class mt extends bt{constructor(t){const{event:n}=t,r=Ae(n.target);super(t,Vr,r)}}mt.activators=[{eventName:"onPointerDown",handler:({nativeEvent:e},{onActivation:t})=>!e.isPrimary||e.button!==0?!1:(t?.({event:e}),!0)}];const Jr={move:{name:"mousemove"},end:{name:"mouseup"}};var lt;(function(e){e[e.RightClick=2]="RightClick"})(lt||(lt={}));class Qr extends bt{constructor(t){super(t,Jr,Ae(t.event.target))}}Qr.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e},{onActivation:t})=>e.button===lt.RightClick?!1:(t?.({event:e}),!0)}];const st={move:{name:"touchmove"},end:{name:"touchend"}};class Zr extends bt{constructor(t){super(t,st)}static setup(){return window.addEventListener(st.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(st.move.name,t)};function t(){}}}Zr.activators=[{eventName:"onTouchStart",handler:({nativeEvent:e},{onActivation:t})=>{const{touches:n}=e;return n.length>1?!1:(t?.({event:e}),!0)}}];function eo(e,{transform:t,...n}){return e?.length?e.reduce((r,o)=>o({transform:r,...n}),t):t}const to=[{sensor:mt,options:{}},{sensor:vt,options:{}}],no={current:{}},dn=i.exports.createContext({...se,scaleX:1,scaleY:1}),ro=i.exports.memo(function({id:t,autoScroll:n=!0,announcements:r,children:o,sensors:s=to,collisionDetection:c=fr,measuring:u,modifiers:l,screenReaderInstructions:a=er,...d}){var g,b,C,x,v,y,p;const B=i.exports.useReducer(sr,void 0,or),[m,S]=B,[E,R]=i.exports.useState(()=>({type:null,event:null})),[T,U]=i.exports.useState(!1),{draggable:{active:$,nodes:k,translate:re},droppable:{containers:_}}=m,Z=$?k[$]:null,ee=i.exports.useRef({initial:null,translated:null}),N=i.exports.useMemo(()=>{var L;return $!=null?{id:$,data:(L=Z?.data)!=null?L:no,rect:ee}:null},[$,Z]),W=i.exports.useRef(null),[xe,H]=i.exports.useState(null),[X,fe]=i.exports.useState(null),te=Ne(d,Object.values(d)),ve=We("DndDescribedBy",t),pe=i.exports.useMemo(()=>_.getEnabled(),[_]),{droppableRects:z,measureDroppableContainers:Y,measuringScheduled:F}=kr(pe,{dragging:T,dependencies:[re.x,re.y],config:u?.droppable}),P=Tr(k,$),he=X?it(X):null,f=ln(P,(g=u==null||(b=u.draggable)==null?void 0:b.measure)!=null?g:Ye),I=zr(P?P.parentElement:null),O=i.exports.useRef({active:null,activeNode:P,collisionRect:null,collisions:null,droppableRects:z,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:_,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),K=_.getNodeFor((C=O.current.over)==null?void 0:C.id),ge=Hr({measure:u==null||(x=u.dragOverlay)==null?void 0:x.measure}),Ce=(v=ge.nodeRef.current)!=null?v:P,ce=(y=ge.rect)!=null?y:f,ae=i.exports.useRef(null),Cn=ae.current,yt=ce===f?hr(f,Cn):se,et=Yr(Ce?Ce.ownerDocument.defaultView:null),le=Lr($?K??Ce:null),Ue=Pr(le),tt=eo(l,{transform:{x:re.x-yt.x,y:re.y-yt.y,scaleX:1,scaleY:1},activatorEvent:X,active:N,activeNodeRect:f,containerNodeRect:I,draggingNodeRect:ce,over:O.current.over,overlayNodeRect:ge.rect,scrollableAncestors:le,scrollableAncestorRects:Ue,windowRect:et}),Dt=he?_e(he,re):null,xn=Fr(le),be=_e(tt,xn),me=ce?Cr(ce,tt):null,Me=N&&me?c({active:N,collisionRect:me,droppableContainers:pe,pointerCoordinates:Dt}):null,St=nn(Me,"id"),[ue,Rt]=i.exports.useState(null),vn=pr(tt,(p=ue?.rect)!=null?p:null,f),Et=i.exports.useCallback((L,{sensor:G,options:q})=>{if(!W.current)return;const oe=k[W.current];if(!oe)return;const ne=new G({active:W.current,activeNode:oe,event:L.nativeEvent,options:q,context:O,onStart(V){const de=W.current;if(!de)return;const Te=k[de];if(!Te)return;const{onDragStart:He}=te.current,Xe={active:{id:de,data:Te.data,rect:ee}};ke.exports.unstable_batchedUpdates(()=>{S({type:M.DragStart,initialCoordinates:V,active:de}),R({type:M.DragStart,event:Xe})}),He?.(Xe)},onMove(V){S({type:M.DragMove,coordinates:V})},onEnd:ie(M.DragEnd),onCancel:ie(M.DragCancel)});ke.exports.unstable_batchedUpdates(()=>{H(ne),fe(L.nativeEvent)});function ie(V){return async function(){const{active:Te,collisions:He,over:Xe,scrollAdjustedTranslate:Bt}=O.current;let we=null;if(Te&&Bt){const{cancelDrop:Ke}=te.current;we={active:Te,collisions:He,delta:Bt,over:Xe},V===M.DragEnd&&typeof Ke=="function"&&await Promise.resolve(Ke(we))&&(V=M.DragCancel)}W.current=null,ke.exports.unstable_batchedUpdates(()=>{if(S({type:V}),Rt(null),U(!1),H(null),fe(null),we&&R({type:V,event:we}),we){const{onDragCancel:Ke,onDragEnd:Mt}=te.current,Tt=V===M.DragEnd?Mt:Ke;Tt?.(we)}})}}},[k]),bn=i.exports.useCallback((L,G)=>(q,oe)=>{const ne=q.nativeEvent;W.current!==null||ne.dndKit||ne.defaultPrevented||L(q,G.options)===!0&&(ne.dndKit={capturedBy:G.sensor},W.current=oe,Et(q,G))},[Et]),At=Or(s,bn);Nr(s),i.exports.useEffect(()=>{$!=null&&U(!0)},[$]),i.exports.useEffect(()=>{N||(ae.current=null),N&&f&&!ae.current&&(ae.current=f)},[f,N]),i.exports.useEffect(()=>{const{onDragMove:L}=te.current,{active:G,collisions:q,over:oe}=O.current;if(!G)return;const ne={active:G,collisions:q,delta:{x:be.x,y:be.y},over:oe};R({type:M.DragMove,event:ne}),L?.(ne)},[be.x,be.y]),i.exports.useEffect(()=>{const{active:L,collisions:G,droppableContainers:q,scrollAdjustedTranslate:oe}=O.current;if(!L||!W.current||!oe)return;const{onDragOver:ne}=te.current,ie=q.get(St),V=ie&&ie.rect.current?{id:ie.id,rect:ie.rect.current,data:ie.data,disabled:ie.disabled}:null,de={active:L,collisions:G,delta:{x:oe.x,y:oe.y},over:V};ke.exports.unstable_batchedUpdates(()=>{Rt(V),R({type:M.DragOver,event:de}),ne?.(de)})},[St]),Be(()=>{O.current={active:N,activeNode:P,collisionRect:me,collisions:Me,droppableRects:z,draggableNodes:k,draggingNode:Ce,draggingNodeRect:ce,droppableContainers:_,over:ue,scrollableAncestors:le,scrollAdjustedTranslate:be},ee.current={initial:ce,translated:me}},[N,P,Me,me,k,Ce,ce,z,_,ue,le,be]),Mr({...yn(),draggingRect:me,pointerCoordinates:Dt,scrollableAncestors:le,scrollableAncestorRects:Ue});const mn=i.exports.useMemo(()=>({active:N,activeNode:P,activeNodeRect:f,activatorEvent:X,collisions:Me,containerNodeRect:I,dragOverlay:ge,draggableNodes:k,droppableContainers:_,droppableRects:z,over:ue,measureDroppableContainers:Y,scrollableAncestors:le,scrollableAncestorRects:Ue,measuringScheduled:F,windowRect:et}),[N,P,f,X,Me,I,ge,k,_,z,ue,Y,le,Ue,F,et]),wn=i.exports.useMemo(()=>({activatorEvent:X,activators:At,active:N,activeNodeRect:f,ariaDescribedById:{draggable:ve},dispatch:S,draggableNodes:k,over:ue,measureDroppableContainers:Y}),[X,At,N,f,S,ve,k,ue,Y]);return A(Zt.Provider,{value:E,children:[h(ht.Provider,{value:wn,children:h(Qt.Provider,{value:mn,children:h(dn.Provider,{value:vn,children:o})})}),h(cr,{announcements:r,hiddenTextDescribedById:ve,screenReaderInstructions:a})]});function yn(){const L=xe?.autoScrollEnabled===!1,G=typeof n=="object"?n.enabled===!1:n===!1,q=!L&&!G;return typeof n=="object"?{...n,enabled:q}:{enabled:q}}}),oo=i.exports.createContext(null),Yt="button",so="Droppable";function io({id:e,data:t,disabled:n=!1,attributes:r}){const o=We(so),{activators:s,activatorEvent:c,active:u,activeNodeRect:l,ariaDescribedById:a,draggableNodes:d,over:g}=i.exports.useContext(ht),{role:b=Yt,roleDescription:C="draggable",tabIndex:x=0}=r??{},v=u?.id===e,y=i.exports.useContext(v?dn:oo),[p,B]=pt(),m=_r(s,e),S=Ne(t);Be(()=>(d[e]={id:e,key:o,node:p,data:S},()=>{const R=d[e];R&&R.key===o&&delete d[e]}),[d,e]);const E=i.exports.useMemo(()=>({role:b,tabIndex:x,"aria-pressed":v&&b===Yt?!0:void 0,"aria-roledescription":C,"aria-describedby":a.draggable}),[b,x,v,C,a.draggable]);return{active:u,activatorEvent:c,activeNodeRect:l,attributes:E,isDragging:v,listeners:n?void 0:m,node:p,over:g,setNodeRef:B,transform:y}}function co(){return i.exports.useContext(Qt)}const ao="Droppable",lo={timeout:25};function uo({data:e,disabled:t=!1,id:n,resizeObserverConfig:r}){const o=We(ao),{active:s,dispatch:c,over:u,measureDroppableContainers:l}=i.exports.useContext(ht),a=i.exports.useRef(!1),d=i.exports.useRef(null),g=i.exports.useRef(null),{disabled:b,updateMeasurementsFor:C,timeout:x}={...lo,...r},v=Ne(C??n),y=i.exports.useCallback(()=>{if(!a.current){a.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{l(typeof v.current=="string"?[v.current]:v.current),g.current=null},x)},[x]),p=an({onResize:y,disabled:b||!s}),B=i.exports.useCallback((R,T)=>{!p||(T&&(p.unobserve(T),a.current=!1),R&&p.observe(R))},[p]),[m,S]=pt(B),E=Ne(e);return i.exports.useEffect(()=>{!p||!m.current||(p.disconnect(),a.current=!1,p.observe(m.current))},[m,p]),Be(()=>(c({type:M.RegisterDroppable,element:{id:n,key:o,disabled:t,node:m,rect:d,data:E}}),()=>c({type:M.UnregisterDroppable,key:o,id:n})),[n]),i.exports.useEffect(()=>{c({type:M.SetDroppableDisabled,id:n,key:o,disabled:t})},[t]),{active:s,rect:d,isOver:u?.id===n,node:m,over:u,setNodeRef:S}}function wt(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function fo(e,t){return e.reduce((n,r,o)=>{const s=t.get(r);return s&&(n[o]=s),n},Array(e.length))}function Ge(e){return e!==null&&e>=0}const fn=({rects:e,activeIndex:t,overIndex:n,index:r})=>{const o=wt(e,n,t),s=e[r],c=o[r];return!c||!s?null:{x:c.left-s.left,y:c.top-s.top,scaleX:c.width/s.width,scaleY:c.height/s.height}},qe={scaleX:1,scaleY:1},po=({activeIndex:e,activeNodeRect:t,index:n,rects:r,overIndex:o})=>{var s;const c=(s=r[e])!=null?s:t;if(!c)return null;if(n===e){const l=r[o];return l?{x:0,y:e<o?l.top+l.height-(c.top+c.height):l.top-c.top,...qe}:null}const u=ho(r,n,e);return n>e&&n<=o?{x:0,y:-c.height-u,...qe}:n<e&&n>=o?{x:0,y:c.height+u,...qe}:{x:0,y:0,...qe}};function ho(e,t,n){const r=e[t],o=e[t-1],s=e[t+1];return r?n<t?o?r.top-(o.top+o.height):s?s.top-(r.top+r.height):0:s?s.top-(r.top+r.height):o?r.top-(o.top+o.height):0:0}const pn="Sortable",hn=Bn.createContext({activeIndex:-1,containerId:pn,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:fn});function go({children:e,id:t,items:n,strategy:r=fn}){const{active:o,dragOverlay:s,droppableRects:c,over:u,measureDroppableContainers:l,measuringScheduled:a}=co(),d=We(pn,t),g=Boolean(s.rect!==null),b=i.exports.useMemo(()=>n.map(S=>typeof S=="string"?S:S.id),[n]),C=o!=null,x=o?b.indexOf(o.id):-1,v=u?b.indexOf(u.id):-1,y=i.exports.useRef(b),p=!Co(b,y.current),B=v!==-1&&x===-1||p;Be(()=>{p&&C&&!a&&l(b)},[p,b,C,l,a]),i.exports.useEffect(()=>{y.current=b},[b]);const m=i.exports.useMemo(()=>({activeIndex:x,containerId:d,disableTransforms:B,items:b,overIndex:v,useDragOverlay:g,sortedRects:fo(b,c),strategy:r}),[x,d,B,b,v,c,g,r]);return h(hn.Provider,{value:m,children:e})}function Co(e,t){return e.join()===t.join()}const xo=({id:e,items:t,activeIndex:n,overIndex:r})=>wt(t,n,r).indexOf(e),vo=({containerId:e,isSorting:t,wasDragging:n,index:r,items:o,newIndex:s,previousItems:c,previousContainerId:u,transition:l})=>!l||!n||c!==o&&r===s?!1:t?!0:s!==r&&e===u,bo={duration:200,easing:"ease"},gn="transform",mo=ze.Transition.toString({property:gn,duration:0,easing:"linear"}),wo={roleDescription:"sortable"};function yo({disabled:e,index:t,node:n,rect:r}){const[o,s]=i.exports.useState(null),c=i.exports.useRef(t);return Be(()=>{if(!e&&t!==c.current&&n.current){const u=r.current;if(u){const l=gt(n.current,{ignoreTransform:!0}),a={x:u.left-l.left,y:u.top-l.top,scaleX:u.width/l.width,scaleY:u.height/l.height};(a.x||a.y)&&s(a)}}t!==c.current&&(c.current=t)},[e,t,n,r]),i.exports.useEffect(()=>{o&&requestAnimationFrame(()=>{s(null)})},[o]),o}function Do({animateLayoutChanges:e=vo,attributes:t,disabled:n,data:r,getNewIndex:o=xo,id:s,strategy:c,resizeObserverConfig:u,transition:l=bo}){const{items:a,containerId:d,activeIndex:g,disableTransforms:b,sortedRects:C,overIndex:x,useDragOverlay:v,strategy:y}=i.exports.useContext(hn),p=a.indexOf(s),B=i.exports.useMemo(()=>({sortable:{containerId:d,index:p,items:a},...r}),[d,r,p,a]),m=i.exports.useMemo(()=>a.slice(a.indexOf(s)),[a,s]),{rect:S,node:E,isOver:R,setNodeRef:T}=uo({id:s,data:B,resizeObserverConfig:{updateMeasurementsFor:m,...u}}),{active:U,activatorEvent:$,activeNodeRect:k,attributes:re,setNodeRef:_,listeners:Z,isDragging:ee,over:N,transform:W}=io({id:s,data:B,attributes:{...wo,...t},disabled:n}),xe=Un(T,_),H=Boolean(U),X=H&&!b&&Ge(g)&&Ge(x),fe=!v&&ee,te=fe&&X?W:null,pe=X?te??(c??y)({rects:C,activeNodeRect:k,activeIndex:g,overIndex:x,index:p}):null,z=Ge(g)&&Ge(x)?o({id:s,items:a,activeIndex:g,overIndex:x}):p,Y=U?.id,F=i.exports.useRef({activeId:Y,items:a,newIndex:z,containerId:d}),P=a!==F.current.items,he=e({active:U,containerId:d,isDragging:ee,isSorting:H,id:s,index:p,items:a,newIndex:F.current.newIndex,previousItems:F.current.items,previousContainerId:F.current.containerId,transition:l,wasDragging:F.current.activeId!=null}),f=yo({disabled:!he,index:p,node:E,rect:S});return i.exports.useEffect(()=>{H&&F.current.newIndex!==z&&(F.current.newIndex=z),d!==F.current.containerId&&(F.current.containerId=d),a!==F.current.items&&(F.current.items=a),Y!==F.current.activeId&&(F.current.activeId=Y)},[Y,H,z,d,a]),{active:U,activeIndex:g,attributes:re,rect:S,index:p,newIndex:z,items:a,isOver:R,isSorting:H,isDragging:ee,listeners:Z,node:E,overIndex:x,over:N,setNodeRef:xe,setDroppableNodeRef:T,setDraggableNodeRef:_,transform:f??pe,transition:I()};function I(){if(f||P&&F.current.newIndex===p)return mo;if(!(fe&&!Jt($)||!l)&&(H||he))return ze.Transition.toString({...l,property:gn})}}const So=[D.Down,D.Right,D.Up,D.Left],Ro=(e,{context:{active:t,droppableContainers:n,collisionRect:r,scrollableAncestors:o}})=>{if(So.includes(e.code)){if(e.preventDefault(),!t||!r)return;const s=[];n.getEnabled().forEach(l=>{if(!l||l?.disabled)return;const a=l?.rect.current;if(!!a)switch(e.code){case D.Down:r.top+r.height<=a.top&&s.push(l);break;case D.Up:r.top>=a.top+a.height&&s.push(l);break;case D.Left:r.left>=a.left+a.width&&s.push(l);break;case D.Right:r.left+r.width<=a.left&&s.push(l);break}});const c=ur({active:t,collisionRect:r,droppableContainers:s,pointerCoordinates:null}),u=nn(c,"id");if(u!=null){const l=n.get(u),a=l?.node.current,d=l?.rect.current;if(a&&d){const C=Ct(a).some((v,y)=>o[y]!==v)?{x:0,y:0}:{x:r.width-d.width,y:r.height-d.height};return{x:d.left-C.x,y:d.top-C.y}}}}};var Eo=({draggable:e,id:t,name:n,address:r,mutate:o,setIsOrderChangeModalOpen:s})=>{const c=ut(),[u,l]=i.exports.useState(!1),[a,d]=i.exports.useState(!1),{attributes:g,listeners:b,setNodeRef:C,transform:x,transition:v}=Do({id:t}),y={transform:ze.Transform.toString(x),transition:v},p=async()=>{if(!u&&!!t)try{l(!0),await Se.delete(`/factory-spaces/${t}`),await o(),d(!1),s(!1)}catch(B){console.log(B)}finally{l(!1)}};return A(Ao,{ref:C,style:y,...g,...b,children:[A(Bo,{children:[A(Oo,{children:[h(Mo,{children:n}),h(To,{children:r})]}),A(Io,{children:[c?null:h(Ut,{onClick:()=>d(!0),src:De("../assets/ic-trash.svg")}),h(Ut,{src:De("../assets/ic-move.svg")})]})]}),h(Ve,{open:a,onSubmit:p,onClose:()=>d(!1),content:`\uD574\uB2F9 \uACF5\uC7A5\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
\uC0AD\uC81C \uC2DC \uAD00\uB828\uB41C \uD604\uC7A5, \uAC70\uB798, \uBA64\uBC84 \uBC0F \uBAA8\uB4E0 \uC815\uBCF4\uAC00
\uC0AD\uC81C\uB429\uB2C8\uB2E4.`,submitText:"\uC0AD\uC81C"})]})};const Ao=w.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  border-radius: 12px;
  background-color: white;

  user-select: none;

  /* border: solid 1px #258fff; */
  border: solid 1px #e3e3e3;

  margin-bottom: 16px;

  &:hover {
    border-color: #258fff;
  }

  transition: border 0.1s linear, max-height 0.05s linear;

  overflow: hidden;
`,Bo=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`,Mo=w.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,To=w.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Oo=w.div`
  display: flex;
  flex-direction: column;
`,Io=w.div`
  display: flex;
`,Ut=w.img`
  width: 24px;
  height: 24px;
  margin-left: 14px;
`;var ko=({name:e,address:t,ceoName:n,active:r,onClick:o})=>A(Fo,{active:r,onClick:o,children:[A($o,{children:[h(Lo,{children:e}),h(No,{children:t}),A(_o,{children:[h(zo,{children:"\uB300\uD45C\uC790"}),h(Po,{}),h(jo,{children:n})]})]}),h(Wo,{src:r?De("../assets/ic-check-on.svg"):De("../assets/ic-check.svg")})]});const Fo=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  padding: 12px 40px;
  cursor: pointer;

  transition: background-color 0.1s linear;

  &:hover {
    background-color: rgba(37, 143, 255, 0.1);
  }

  ${({active:e})=>e?j`
          background-color: rgba(37, 143, 255, 0.1);
        `:j`
          background-color: #ffffff;
        `}
`,$o=w.div`
  display: flex;
  flex-direction: column;
`,Lo=w.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  margin-bottom: 8px;
`,No=w.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #777;
  margin-bottom: 8px;
`,_o=w.div`
  display: flex;
  align-items: center;
`,zo=w.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
`,Po=w.span`
  display: block;
  width: 1px;
  height: 6px;
  background-color: #e3e3e3;
  margin: 0px 6px;
`,jo=w.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #000;
`,Wo=w.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`,Yo="FACTORY_SPACES_UNREGISTERED";var Uo=e=>Dn([Yo,e],()=>Se.get("/factory-spaces/un-registers",{params:{name:e,page:0,limit:200}})),Ho=()=>{const e=ut(),t=Xt(),n=Mn(),r=Gt(),[o,s]=i.exports.useState(0),[c,u]=i.exports.useState("\uCD5C\uC2E0\uC21C"),l=i.exports.useMemo(()=>o===0?"N":"Y",[o]),{data:a,refetch:d}=$n(l),[g,b]=i.exports.useState(""),[C,x]=i.exports.useState(""),{data:v,refetch:y}=Uo(C),[p,B]=i.exports.useState(!1),[m,S]=i.exports.useState(""),E=i.exports.useMemo(()=>{if(a)if(c==="\uCD5C\uC2E0\uC21C"){const f=a.map((O,K)=>[O,K]);return f.sort((O,K)=>K[1]-O[1]),f.map(O=>O[0]).filter(O=>O?.name?.includes(m))}else return c==="\uC624\uB798\uB41C\uC21C"?a.sort((I,O)=>I.id-O.id).filter(I=>I?.name?.includes(m)):c==="\uC774\uB984\uC21C"?a.sort((I,O)=>I.name<O.name?-1:I.name==O.name?0:1).filter(I=>I?.name?.includes(m)):c==="\uC0AC\uC6A9\uC790\uD654"?a.filter(f=>f?.name?.includes(m)):[];else return[]},[a,c,m]),[R,T]=i.exports.useState(!1),U=Xr(zt(mt,{activationConstraint:{distance:8}}),zt(vt,{coordinateGetter:Ro})),[$,k]=i.exports.useState([]),[re,_]=i.exports.useState(!1),[Z,ee]=i.exports.useState(null),[N,W]=i.exports.useState(!1),[xe,H]=i.exports.useState(!1),X=async()=>{const f=$.map(I=>I.id);await Se.put("/field-spaces/change-order",f),await d(),T(!1)},fe=()=>{k(a||[]),T(!0)},te=()=>{T(!1)},ve=f=>{const{active:I,over:O}=f;console.log("active, over: ",I,O),I.id!==O.id&&k(K=>{const ge=K.indexOf(K.filter(ae=>ae.id===I.id)?.[0]),Ce=K.indexOf(K.filter(ae=>ae.id===O.id)?.[0]);return wt(K,ge,Ce)})},pe=()=>{a&&a?.length>0&&(t(Kt(E?.[0])),B(!0))};i.exports.useEffect(()=>{!r&&p===!1&&a&&a.length>0&&E&&pe()},[o,a,p,E]);const z=f=>{s(f),B(!1)};i.exports.useEffect(()=>()=>{},[]);const Y=()=>{_(!1),ee(null),P(""),b("")},F=async()=>{if(Z!==null&&!N){if(E.find(f=>f.name===Z?.visible_name)){H(!0);return}W(!0);try{await Se.post(`/factory-spaces/${Z?.id}`),d(),Y(),y()}catch(f){console.log(f),window.alert("\uC5D0\uB7EC \uBC1C\uC0DD..")}finally{W(!1)}}},P=i.exports.useRef(kn.exports.debounce(f=>x(f),500)).current,he=f=>{P(f),b(f)};return A(Xo,{children:[h(Tn,{}),A(Ko,{children:[h(Go,{children:e?"\uAC74\uC124\uD604\uC7A5":"\uACF5\uC7A5\uBA85"}),h(Ot,{placeholder:`${e?"\uD604\uC7A5\uBA85":"\uACF5\uC7A5\uBA85"}\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.`,containerStyle:{marginBottom:20},value:m,onChange:f=>S(f.target.value)}),h(Oe,{type:Ie.PRIMARY,containerStyle:{marginBottom:30},icon:"ic-plus-white",onClick:e?()=>n("/add-construction-field/step-1"):()=>_(!0),children:e?"\uAC74\uC124\uD604\uC7A5 \uCD94\uAC00":"\uACF5\uC7A5 \uB4F1\uB85D\uD558\uAE30"}),e&&A(qo,{children:[h(Ht,{active:o===0,onClick:()=>z(0),children:"\uB4F1\uB85D \uD604\uC7A5 \uBCF4\uAE30"}),h(Ht,{active:o===1,onClick:()=>z(1),children:"\uC228\uAE34 \uD604\uC7A5 \uBCF4\uAE30"})]})]}),A(Vo,{children:[A(Jo,{children:[h(Fn,{options:[{label:"\uCD5C\uC2E0\uC21C",value:"\uCD5C\uC2E0\uC21C"},{label:"\uC624\uB798\uB41C\uC21C",value:"\uC624\uB798\uB41C\uC21C"},{label:"\uC774\uB984\uC21C",value:"\uC774\uB984\uC21C"},{label:"\uC0AC\uC6A9\uC790\uD654",value:"\uC0AC\uC6A9\uC790\uD654"}],value:c,onChange:f=>u(f)}),A(Qo,{onClick:fe,children:[h(Zo,{children:e?"\uC21C\uC11C\uBCC0\uACBD":"\uD3B8\uC9D1"}),h(es,{src:De(`../assets/ic-${e?"sort":"edit"}.svg`)})]})]}),h(ns,{children:E.map((f,I)=>h(Ln,{info:f,id:f.id,name:f?.name,address:f?.basic_address,revalidate:d,isHide:o===1,setSelectedIdWithFirstId:pe},`space-${f.id}-${I}`))})]}),re&&h(It,{open:re,onClose:Y,children:A(kt,{style:{minWidth:440,maxHeight:733,padding:0,paddingTop:50},children:[h(Ft,{children:"\uACF5\uC7A5 \uB4F1\uB85D\uD558\uAE30"}),A(ss,{children:[h(Ot,{placeholder:"\uACF5\uC7A5\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",containerStyle:{marginBottom:30},value:g,onChange:f=>he(f.target.value)}),A(os,{children:["\uBAA9\uB85D(",v?.total_elements||0,")"]})]}),h(rs,{children:v?.data&&v?.data.map(f=>h(ko,{name:f?.name,address:f?.basic_address,ceoName:f?.company?.ceo_name,active:Z?.id===f?.id,onClick:()=>ee(f)},f.id))}),A(On,{children:[h(Oe,{type:Ie.GRAY_BLACK,onClick:Y,containerStyle:{marginRight:20},children:"\uCDE8\uC18C"}),h(Oe,{type:Z===null?Ie.GRAY:Ie.PRIMARY,onClick:F,children:"\uC120\uD0DD\uD558\uAE30"})]})]})}),h(It,{open:R,onClose:te,children:A(kt,{children:[h(Ft,{children:"\uC21C\uC11C\uBCC0\uACBD"}),h(ts,{children:h(ro,{sensors:U,collisionDetection:lr,onDragEnd:ve,children:h(go,{items:$,strategy:po,children:$.map(f=>h(Eo,{draggable:!0,id:f.id,name:f?.name,address:f?.basic_address,mutate:d,setIsOrderChangeModalOpen:T},f.id))})})}),A(In,{children:[h(Oe,{type:Ie.GRAY_BLACK,onClick:te,containerStyle:{marginRight:20},children:"\uCDE8\uC18C"}),h(Oe,{onClick:X,children:"\uD655\uC778"})]})]})}),h(Ve,{open:xe,content:`\uC774\uBBF8 \uB4F1\uB85D\uD55C \uACF5\uC7A5\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.
\uC911\uBCF5 \uB4F1\uB85D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`,onClose:()=>{H(!1),ee("")}})]})};const Xo=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
`,Ko=w.div`
  display: block;
  padding: 30px 30px 0px 30px;
  border-bottom: 1px solid #e3e3e3;
`,Go=w.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 14px;
`,qo=w.div`
  display: flex;
  width: 100%;
`,Ht=w.div`
  flex: 1;
  padding: 13px 0px 10px 0px;
  text-align: center;
  margin-bottom: -1px;
  cursor: pointer;

  ${({active:e})=>e?j`
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.3px;
          color: #222;

          border-bottom: 2px solid black;
        `:j`
          font-size: 15px;
          letter-spacing: -0.3px;
          color: #999;
        `}
`,Vo=w.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  flex: 1;
  max-height: 100%;
  overflow: hidden;
`,Jo=w.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
`,Qo=w.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
`,Zo=w.div`
  font-size: 13px;
  letter-spacing: -0.26px;
  color: #222;
  margin-right: 4px;
`,es=w.img`
  width: 18px;
  height: 18px;
  margin-bottom: 1px;

  ${({isOpen:e})=>e?j`
          transform: rotate(180deg);
        `:j`
          transform: rotate(0deg);
        `}
`,ts=w(Sn)`
  margin-bottom: 20px;
  max-height: 480px;
  overflow-y: scroll;
  overflow-y: overlay;
`,ns=w.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`,rs=w.div`
  height: 414px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 17px;
  }

  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c7c7c7;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`,os=w.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,ss=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 40px 14px 40px;
  border-bottom: 1px solid #c7c7c7;
`;var bs=({children:e})=>A(is,{children:[h(Rn,{}),A(cs,{children:[h(Ho,{}),A(as,{id:"content-container",children:[h(ls,{children:e}),h(En,{})]})]})]});const is=w.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`,cs=w.div`
  display: flex;
  height: calc(100vh - 80px);
`,as=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  overflow-y: scroll;
`,ls=w.div`
  flex: 1;
`;export{bs as S};
