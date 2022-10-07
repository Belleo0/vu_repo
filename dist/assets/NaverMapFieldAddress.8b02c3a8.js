import{H as E,g as m,c}from"./Header.8f74d7dd.js";import{j as l,a as o,n as t,r as s,D as y,F as I}from"./index.fa23706f.js";import{M as w,R as N}from"./server.browser.f77a115a.js";import{a as A,c as F}from"./convertDuration.9811f74f.js";import{N as R}from"./NaverMapImageMarker.9d634226.js";var ue=({children:e})=>l(O,{children:[o(E,{}),o(Z,{children:e})]});const O=t.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`,Z=t.div`
  display: flex;
  height: calc(100vh - 80px);
`,{naver:M}=window;var xe=({paths:e})=>{const r=s.exports.useContext(w);return s.exports.useEffect(()=>{const n=new M.maps.Polyline({map:r,path:e.map(i=>new M.maps.LatLng(i[1],i[0])),strokeWeight:5,strokeColor:"#ef0000"});return()=>{n.setMap(null)}},[r,e]),o("div",{})};const{naver:f}=window;var ge=({lat:e,lng:r,content:n})=>{const{current:i}=s.exports.useRef(Math.random().toString(36).slice(2)),[a,u]=s.exports.useState(null),[C,v]=s.exports.useState(!1),x=s.exports.useMemo(()=>`<div id="${i}">${N.renderToString(n)}</div>`,[n]),p=s.exports.useContext(w);return s.exports.useEffect(()=>{const g=new f.maps.Marker({map:p,position:new f.maps.LatLng(e,r),icon:{content:x,size:new f.maps.Size(91.5,42),anchor:new f.maps.Point(45.75,42)}});return u(g),y.hydrateRoot(document.getElementById(i),n),v(!0),()=>{g.setMap(null)}},[p,e,r]),s.exports.useEffect(()=>{C&&(a.setIcon({content:x,size:new f.maps.Size(22,35),anchor:new f.maps.Point(11,35)}),y.hydrateRoot(document.getElementById(i),n))},[x]),o("div",{})},he=({distance:e,duration:r})=>l(G,{children:[l(P,{children:[l(T,{children:[A(r),"\uBD84"]}),o(j,{}),l(W,{children:[F(e),"km"]})]}),o(H,{})]});const G=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,P=t.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 12px;
  background-color: black;
  border-radius: 8px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
`,T=t.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: left;
  color: #fff;
`,W=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #e3e3e3;
`,j=t.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 8px;
  background-color: #999;
`,H=t.span`
  width: 6px;
  border-top: 6px solid black;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
`,U=()=>{const[e,r]=s.exports.useState({loaded:!1,coordinates:{lat:0,lng:0}}),n=a=>{r({loaded:!0,coordinates:{lat:a.coords.latitude,lng:a.coords.longitude}})},i=a=>{r({loaded:!0,error:a})};return s.exports.useEffect(()=>{"geolocation"in navigator||i({code:0,message:"Geolocation not supported"}),navigator.geolocation.getCurrentPosition(n,i)},[]),e};var V=U;const{naver:q}=window;var fe=()=>{const e=s.exports.useContext(w),{loaded:r,coordinates:n,error:i}=V(),a=()=>{e.setZoom(e.getZoom()+1,!0)},u=()=>{e.setZoom(e.getZoom()-1,!0)},C=()=>{if(i)return window.alert("\uC704\uCE58\uC815\uBCF4\uB97C \uC77D\uC5B4\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");const v=new q.maps.LatLng(n?.lat,n?.lng);e.setCenter(v)};return l(J,{children:[r===!0&&i===void 0&&o(R,{disableCenter:!0,lat:n.lat,lng:n.lng,content:o(I,{})}),l(K,{children:[o(Q,{src:m(`../assets/ic-local-${r&&i===void 0?"on":"off"}@3x.png`),draggable:!1,onClick:C}),o(B,{src:m("../assets/ic-plus-03@3x.png"),draggable:!1,onClick:a}),o(B,{src:m("../assets/ic-minus-03@3x.png"),draggable:!1,onClick:u})]})]})};const J=t.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  right: 40px;
  bottom: 50px;
`,K=t.div`
  display: flex;
  flex-direction: column;
`,Q=t.img`
  width: 67px;
  height: 67px;
  margin-bottom: -10px;
  cursor: pointer;
  user-select: none;
`,B=t.img`
  width: 67px;
  height: 58px;
  cursor: pointer;
  user-select: none;
`;var X=({width:e,height:r,options:n,placeholder:i,value:a,onChange:u,containerStyle:C={},absoluteStyle:v={}})=>{const x=s.exports.useRef(null),[p,g]=s.exports.useState(!1),[z,b]=s.exports.useState(100),h=s.exports.useMemo(()=>a===null?null:n?.filter?.(d=>d.value===a)?.[0]?.label,[n,a]),k=({target:d})=>{p&&x.current&&!x.current.contains(d)&&(b(200),g(!1),setTimeout(()=>{b(100)},150))};s.exports.useEffect(()=>{if(p)return window.addEventListener("click",k),()=>{window.removeEventListener("click",k)}},[p]);const L=()=>{p?(b(200),g(!1),setTimeout(()=>{b(100)},150)):(b(300),g(!0))};return l(Y,{style:{width:e||"auto",height:r||"auto",...C},ref:x,onClick:L,children:[o(S,{style:{color:h===null?"#c7c7c7":"#000"},children:h===null?i:h}),o(D,{src:m("../assets/ic-arrow-bottom.svg")}),l(_,{isOpen:p,value:a,optionLength:n.length,maxHeight:r,style:{zIndex:z,...v},children:[l(ee,{maxHeight:r,children:[o(S,{style:{color:h===null?"#c7c7c7":"#000"},children:h===null?i:h}),o(D,{src:m("../assets/ic-arrow-bottom.svg")})]}),o(oe,{children:n.map(d=>o(te,{active:a===d.value,onClick:()=>u(d.value),children:d.label},d.value))})]})]})};const Y=t.div`
  display: flex;
  align-items: center;
  padding: 14px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
`,D=t.img`
  width: 18px;
  height: 18px;
  margin-left: 7px;
`,S=t.span`
  font-size: 14px;
  letter-spacing: -0.84px;
  text-align: left;
  color: #000;
`,_=t.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  padding: 14px;
  border-radius: 6px;
  border: solid 1px #e3e3e3;
  background-color: #fff;
  z-index: 500;
  overflow: hidden;

  ${({isOpen:e,optionLength:r,maxHeight:n})=>e?c`
          max-height: ${55+28*r}px;
        `:c`
          max-height: 0px;
        `?c`
          max-height: ${n}px;
        `:c`
          max-height: 37px;
        `}

  ${({value:e})=>e!==null&&c`
      border-color: #777;
    `}

  transition: max-height 0.15s ease-in-out;
`,ee=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${({maxHeight:e})=>e?c`
          /* margin-top: 7px; */
        `:c`
          margin-top: 0px;
        `}
`,te=t.span`
  display: block;
  cursor: pointer;
  font-size: 14px;
  text-align: left;

  ${({active:e})=>e?c`
          color: #258fff;
        `:c`
          color: #000;
        `}

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`,oe=t.div`
  width: 100%;
  height: 200px;

  margin-top: 20px;
`;var me=({currentAddrDetail:e,searchedAddr:r,setCurrentAddrDetail:n})=>{s.exports.useContext(w);const[i,a]=s.exports.useState("\uC77C\uBC18\uC9C0\uB3C4");return l(ne,{children:[l(re,{children:[o($,{children:e.sido}),o(ie,{src:m("../assets/ic-arrow-right.svg")}),o($,{children:e.sigugun})]}),o(se,{children:o(X,{options:[{label:"\uC77C\uBC18\uC9C0\uB3C4",value:"\uC77C\uBC18\uC9C0\uB3C4"},{label:"\uD56D\uACF5\uC9C0\uB3C4",value:"\uD56D\uACF5\uC9C0\uB3C4"}],value:i,onChange:u=>a(u),width:120,height:46,absoluteStyle:{border:0}})})]})};const ne=t.div`
  display: flex;
  /* flex-direction: row; */
  position: absolute;
  z-index: 100;

  right: 40px;
  top: 54px;
`,re=t.div`
  display: flex;
  align-items: center;

  padding: 11px 20px;
  border-radius: 6px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);

  background-color: #fff;
`,se=t.div`
  margin-left: 24px;
`,$=t.div`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #000;
`,ie=t.img`
  width: 18px;
  height: 18px;
  margin: 2px;
`;export{he as D,xe as N,ue as S,ge as a,me as b,fe as c,V as u};
