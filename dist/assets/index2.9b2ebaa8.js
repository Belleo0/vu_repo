import{d as A,a as e,j as i,F as $,n,k as W,r as c}from"./index.fa23706f.js";import{R as O}from"./ReferenceRoomLayout.162a7ced.js";import{a as V,g as D,c as b,j as G,S as H}from"./Header.8f74d7dd.js";import{N as k}from"./server.browser.f77a115a.js";import{N as v}from"./NaverMapSpaceMarker.c76b18fc.js";import{S,M as P}from"./MapSpaceInfoModal.e33a938c.js";import"./convertDuration.9811f74f.js";const X="ARCHIVES";var K=r=>V([X,r],()=>A.get("/archives",{params:{type:r}})),Q=({open:r,data:o,onClose:f})=>e(U,{isOpen:r,children:o&&i($,{children:[e(Y,{src:D("../assets/ic-del.svg"),onClick:f}),e(q,{children:o?.company_name}),e(J,{}),e(Z,{children:"\uD68C\uC0AC\uC815\uBCF4"}),i(w,{style:{marginBottom:24},children:[i(a,{children:[i(d,{children:["\uD68C\uC0AC\uBA85",e(p,{children:"Trade name."})]}),e(u,{children:o?.company_name})]}),i(a,{children:[i(d,{children:["\uC8FC\uC18C ",e(p,{children:"Address."})]}),e(u,{children:o?.address})]}),i(a,{children:[i(d,{children:["\uB300\uD45C\uC790 ",e(p,{children:"Arep."})]}),e(u,{children:o?.company_ceo_name})]}),i(a,{children:[i(d,{children:["\uC804\uD654\uBC88\uD638 ",e(p,{children:"Tel."})]}),e(u,{children:o?.tel})]}),i(a,{children:[i(d,{children:["\uD329\uC2A4\uBC88\uD638 ",e(p,{children:"Fax."})]}),e(u,{children:o?.fax})]})]}),e(w,{children:e(k,{lat:o.latitude,lng:o.longitude,zoom:12,style:{width:"auto",height:"300px",marginTop:"40px"},children:e(v,{lat:o.latitude,lng:o.longitude,content:e(S,{index:o.id,name:o?.company_name,address:"",distance:0,duration:0,onClick:()=>{},onInfo:()=>{},onChangePath:()=>{},selected:!1,hideWithoutName:!1,totalDuration:""})})})})]})});const U=n.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: 690px;
  height: 100%;
  padding: 30px 50px;
  background-color: white;
  z-index: 99999999;

  ${({isOpen:r})=>r?b`
          transform: translateX(0%);
        `:b`
          transform: translateX(100%);
          display: none;
        `}

  transition: transform 0.25s ease-in-out;
`,Y=n.img`
  display: block;
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
  object-fit: contain;
  margin-left: auto;
  cursor: pointer;
`,q=n.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
`,J=n.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 20px 0px;
  background-color: #e3e3e3;
`,Z=n.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  color: #000;
  margin-bottom: 10px;
`,w=n.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`,a=n.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`,d=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1;
  min-width: 180px;
  max-width: 164px;
  padding: 17px 20px;
  background-color: #f2f2f2;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;
`,u=n.div`
  display: flex;
  align-items: center;

  flex: 2;
  padding: 17px 15px;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,p=n.span`
  display: block;
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;n.div`
  display: flex;
  align-items: center;

  min-width: 257px;
  padding: 8px 24px;
  background-color: #f2f2f2;

  font-size: 13px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;
`;n.div`
  display: flex;
  align-items: center;

  flex: 1;
  padding: 8px 21px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;n.span`
  font-size: 11px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;const ee={[0]:"#258fff",[1]:"#fff"},te={[0]:"1px solid #258fff",[1]:"1px solid #e3e3e3"},ne={[0]:"#fff",[1]:"#999999"},oe=["\uC11C\uC6B8","\uC778\uCC9C","\uACBD\uAE30","\uAC15\uC6D0","\uBD80\uC0B0","\uC6B8\uC0B0","\uACBD\uB0A8","\uB300\uAD6C","\uACBD\uBD81","\uB300\uC804","\uC138\uC885","\uCDA9\uB0A8","\uCDA9\uBD81","\uAD11\uC8FC","\uC804\uB0A8","\uC804\uBD81","\uC81C\uC8FC","\uC804\uCCB4"];var ke=()=>{const r=W(),o=r?.state?.type,{data:f}=K(o),[B,F]=c.exports.useState([]),[L,I]=c.exports.useState("\uD68C\uC0AC\uBA85"),[z,_]=c.exports.useState(""),[x,j]=c.exports.useState("\uC11C\uC6B8"),[y,C]=c.exports.useState(),[M,h]=c.exports.useState(!1),[T,g]=c.exports.useState(!1);c.exports.useState(0),c.exports.useState(0);const R=[{label:"\uD68C\uC0AC\uBA85",value:"\uD68C\uC0AC\uBA85"},{label:"\uC8FC\uC18C",value:"\uC8FC\uC18C"}],m=c.exports.useMemo(()=>{if(o==="remicon"){const t=B?.filter(s=>s?.basic_address?.includes(x));return console.log(t),t}return f?.filter(t=>t.region===x)},[x,B,f]),E=t=>{j(t)},N=async()=>{try{const{data:t}=await A.get("/factories"),s=t?.result;F(s)}catch(t){console.log(t)}};return c.exports.useEffect(()=>{if(!r?.state?.type)return;r?.state?.type==="remicon"&&N()},[]),e(O,{children:i(ie,{children:[i(re,{children:[e(le,{children:"\uC5C5\uCCB4\uB9AC\uC2A4\uD2B8"}),e(ce,{children:"\uC815\uBCF4\uC218\uC815 \uBB38\uC758\uD558\uAE30"})]}),i(ae,{children:[e(G,{width:140,options:R,value:L,onChange:t=>I(t)}),e(H,{containerStyle:{width:"300px",borderRadius:"6px",border:"solid 1px #c7c7c7",backgroundColor:"#fff",marginLeft:"14px"},style:{padding:"12px 0 12px 14px"},placeholder:"\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694",value:z,onChange:t=>_(t.target.value)})]}),e(de,{}),e(se,{children:oe.map((t,s)=>e(ue,{type:x===t?0:1,onClick:()=>{E(t)},children:t},s))}),e(k,{lat:37.5642135,lng:127.0016985,zoom:12,style:{width:"auto",height:"520px",marginTop:"40px"},children:m?.map((t,s)=>e(v,{lat:t.latitude,lng:t.longitude,content:e(S,{index:s,name:o==="remicon"?t?.name:t?.company_name,address:"",distance:0,duration:0,onClick:()=>{},onInfo:()=>{h(!1),g(!1),C(t),setTimeout(()=>{o==="remicon"?g(!0):h(!0)},250)},onChangePath:()=>{},selected:!1,hideWithoutName:!1,totalDuration:"1"})},t.id))}),e(Q,{open:M,onClose:()=>{h(!1),C(null)},data:y}),e(P,{open:T,onClose:()=>{g(!1),C(null)},data:y}),e(pe,{children:"\uB9AC\uC2A4\uD2B8"}),i(Ce,{children:[i(fe,{children:[e(l,{children:"\uD68C\uC0AC\uBA85"}),e(l,{children:"\uC8FC\uC18C"}),e(l,{children:"\uC804\uD654\uBC88\uD638"}),i(l,{children:["\uB808\uBBF8\uCF58 \uC0DD\uC0B0\uB2A5\uB825",e("span",{children:"(m\xB3/hr)"})]}),e(l,{children:"\uBBF9\uC11C\uD2B8\uB7ED \uBCF4\uC720\uB300\uC218"}),e(l,{style:{width:"10%"},children:"\uC0C1\uC138\uBCF4\uAE30"})]}),m?.length<=0&&e(ge,{children:"\uB4F1\uB85D\uB41C \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."}),m?.map((t,s)=>i(xe,{children:[e(l,{children:o==="remicon"?t.name:t.company_name}),e(l,{children:o==="remicon"?t.basic_address:t.address}),e(l,{children:o==="remicon"?t.factory_info.tel:t.tel}),e(l,{children:o==="remicon"?t.factory_info.capa:t?.rem}),e(l,{children:o==="remicon"?t.factory_info.truck_count:t?.have}),e(l,{style:{width:"10%"},children:e(he,{src:D("../assets/search_bg_line_ic.svg"),onClick:()=>{C(t),o==="remicon"?g(!0):h(!0)}})})]},s))]})]})})};const ie=n.div`
  /* width: 1420px; */
  width: 100%;
  height: 100%;
  padding: 52px 60px 97px 60px;

  user-select: none;
`,re=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 1420px; */
`,le=n.div`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #222;
`,ce=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 42px;
  border-radius: 6px;
  border: solid 1px #258fff;
  background-color: #fff;

  font-size: 14px;
  font-weight: 500;
  color: #258fff;
`,se=n.div`
  /* width: 1420px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #e3e3e3;
`,ae=n.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: 45px;
  margin-top: 30px;
`,de=n.div`
  /* width: 1420px; */
  height: 1px;
  margin: 20px 0 30px;
  background-color: #c7c7c7;
`,ue=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${1/9*100}%;
  height: 44px;
  background-color: #fff;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  ${({type:r})=>`
    background-color: ${ee[r]};
    border: ${te[r]};
    color: ${ne[r]}

  `}
`,pe=n.div`
  margin-top: 40px;
  margin-bottom: 14px;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #444;
`,fe=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  /* width: 1420px; */
  height: 54px;
  background-color: #fff;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #f2f2f2;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`,xe=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  /* width: 1420px; */
  height: 54px;
  border-bottom: 1px solid #f2f2f2;

  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #222;
`,Ce=n.div``,l=n.div`
  width: 18%;
`,he=n.img`
  width: 34px;
  height: 34px;
  cursor: pointer;
`,ge=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  height: 54px;
  border-bottom: 1px solid #f2f2f2;

  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #222;
`;export{ke as default};
