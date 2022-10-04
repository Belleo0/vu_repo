import{r as o,u as J,d as L,j as r,a as t,n as i}from"./index.fa23706f.js";import{I as m}from"./Input.367ebe3c.js";import{F as P}from"./FieldCreateLayout.e3ef4e23.js";import{M as O}from"./Modal.5ea91f83.js";import{N as Y}from"./server.browser.f77a115a.js";import{N as q}from"./NaverMapImageMarker.9d634226.js";import{g as S,b as G}from"./Header.8f74d7dd.js";import{u as H}from"./useLocalStorage.e35586a4.js";import{B as U,a as F}from"./Button.2ebe35cd.js";const{naver:D}=window;var ve=()=>{const[d,B]=o.exports.useState(""),[s,g]=o.exports.useState(""),[c,M]=o.exports.useState(""),[I,u]=o.exports.useState(!1),[l,v]=o.exports.useState(),[j,T]=o.exports.useState(),[a,p]=o.exports.useState(""),[C,f]=o.exports.useState([]),[y,w]=o.exports.useState(""),[n,h]=H("@add-construction-field",{fieldNm:d,fieldAddr:s,secFieldAddr:c,position:l,searchItem:j}),z=J(),R=()=>{z("/add-construction-field/step-2",{state:{fieldNm:d,fieldAddr:s,secFieldAddr:c||"",position:l}})},W=!!(d&&s),K=()=>{!a||a&&D.maps.Service.geocode({query:a},(e,x)=>{if(e!==D.maps.Service.Status.OK)return alert("\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");x.v2.addresses[0]||(w("\uC8FC\uC18C\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),p(""));const b=x.v2.addresses;console.log("result",b),f(b)})},A=()=>{f([]),p(""),w(""),u(!1)};return o.exports.useEffect(()=>{window.addEventListener("beforeunload",function(e){e.preventDefault(),e.returnValue=""})},[]),o.exports.useEffect(()=>{h(e=>({...e,fieldAddr:s}))},[s]),o.exports.useEffect(()=>{h(e=>({...e,position:l}))},[l]),o.exports.useEffect(()=>{h(e=>({...e,fieldNm:d}))},[d]),o.exports.useEffect(()=>{h(e=>({...e,secFieldAddr:c}))},[c]),o.exports.useEffect(()=>{n?.fieldAddr&&g(n.fieldAddr),n?.position&&v(n.position),n?.fieldNm&&B(n.fieldNm),n?.secFieldAddr&&M(n.secFieldAddr),n?.searchItem&&T(n.searchItem)},[n]),o.exports.useEffect(()=>{(async()=>{const{data:e}=await L.get("/geocodes/addresses",{params:{address:s}});v(e?.result)})()},[s]),o.exports.useEffect(()=>{a===""&&f([])},[a]),r(P,{children:[r(V,{children:[r(X,{children:[t(Q,{children:t(Z,{children:"1"})}),t(_,{children:"\uD604\uC7A5\uC815\uBCF4"})]}),r(N,{children:[t(E,{children:"\uD604\uC7A5\uBA85"}),t(m,{type:"text",placeholder:"\uD604\uC7A5\uBA85\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",value:d,onChange:e=>{B(e.target.value)},containerStyle:{width:"540px",height:"42px"},style:{height:"42px",padding:"11px 20px"},errorMessage:d==""?"\uD604\uC7A5\uBA85 \uC785\uB825\uC740 \uD544\uC218\uD56D\uBAA9\uC785\uB2C8\uB2E4.":""})]}),r(N,{style:{height:"132px",marginTop:"19px"},children:[t(E,{children:"\uD604\uC7A5\uC8FC\uC18C"}),r(ee,{children:[t(m,{type:"text",placeholder:"\uD604\uC7A5\uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694",disabled:!0,value:s,onChange:e=>{g(e.target.value)},containerStyle:{width:"430px",height:"42px",cursor:"pointer"},style:{height:"42px",padding:"11px 20px",cursor:"pointer"},onClick:()=>u(!0)}),t($,{onClick:()=>u(!0),children:"\uCC3E\uAE30"})]})]}),t(te,{children:t(Y,{lat:37.557733,lng:126.9253985,style:{width:540,height:260},zoom:12,children:l&&t(q,{lat:l?.latitude,lng:l?.longitude,content:t("img",{src:S("../assets/ic-field-marker.png"),style:{width:119,height:72}})})})}),r(ie,{children:[t(k,{children:"\uC774\uC804"}),W?t(oe,{onClick:()=>R(),children:"\uB2E4\uC74C"}):t(k,{children:"\uB2E4\uC74C"})]})]}),t(O,{open:I,onClose:A,children:r(ne,{children:[t(ae,{src:S("../assets/ic-del-02.svg"),onClick:A}),t(re,{children:t(se,{children:"\uC9C0\uBC88\uAC80\uC0C9"})}),t(m,{placeholder:"\uC74D\uBA74\uB3D9 \uC9C0\uBC88\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.",value:a,onChange:e=>{p(e.target.value)},style:{height:37}}),t(U,{type:a?F.PRIMARY:F.GRAY,containerStyle:{marginBottom:30,height:40},onClick:a?K:()=>{},children:"\uAC80\uC0C9"}),r(de,{children:[C.length>0&&C?.map((e,x)=>t(le,{onClick:()=>{g(e.jibunAddress),p(""),f([]),u(!1)},children:e.jibunAddress},x)),y&&!C?.length&&t(ce,{children:y})]})]})})]})};const V=i.div`
  width: 100%;
  height: 100%;
  padding: 60px 0 60px 60px;

  user-select: none;
`,X=i.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`,Q=i.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`,Z=i.div`
  width: 9px;
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #258fff;
  line-height: 1.5;
`,_=i.div`
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
`,E=i.div`
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
`,N=i.div`
  width: 540px;
  height: 97px;
  margin: 45px 0 0 0;
`,$=i.div`
  width: 100px;
  height: 42px;
  margin: 0 0 0 10px;
  border-radius: 6px;
  background-color: #000;
  padding: 13px 0 13px 0;
  cursor: pointer;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  color: #fff;
`,ee=i.div`
  display: flex;
  height: 42px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,te=i.div`
  width: 540px;
  height: 260px;
  margin: 30px 0 70px 0;
  background-color: black;

  color: white;
  text-align: center;
  line-height: 14.5;
`,ie=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
`,k=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 500;
  color: #999;
`,oe=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #258fff;
  border-radius: 6px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;i.div``;const ne=i.div`
  width: 370px;
  height: 520px;

  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  background-color: #fff;
`,re=i.div`
  display: flex;
  align-items: center;

  padding: 20px 0;
`,se=i.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #444;
`,ae=i.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
`;i.div`
  display: flex;

  margin: 14px 0px;
`;const de=i(G)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
`,le=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:hover {
    color: #258fff;
  }
`,ce=i.div`
  color: #999;
  font-size: 14px;
  font-weight: 500;
`;export{ve as default};
