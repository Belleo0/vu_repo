import{r as n,a as e,j as o,n as t,b as qe,k as Ke,u as Qe,d as Le,F as Ue,l as Xe,e as Ze,f as Je,C as et}from"./index.fa23706f.js";import{u as Ne,S as tt,N as ot,a as nt,D as it,b as rt,c as st}from"./NaverMapFieldAddress.8b02c3a8.js";import{M as Pe,N as lt}from"./server.browser.f77a115a.js";import{N as at}from"./NaverMapSpaceMarker.c76b18fc.js";import{g as c,h as v,c as x,b as ct,a as dt,e as ut,F as pt}from"./Header.8f74d7dd.js";import{N as Ct}from"./NaverMapImageMarker.9d634226.js";import{F as xt,l as ft}from"./lodash.4b3a1baf.js";import{B as _e,a as Be}from"./Button.2ebe35cd.js";import{M as Te,d as ht,S as gt}from"./Modal.5ea91f83.js";import{T as De}from"./TextModal.458f5750.js";import{D as mt}from"./index.6328693c.js";import{B as le}from"./BlackSelect.c26abd5f.js";import{B as ae}from"./BlackInput.304293be.js";import{u as bt}from"./useSpaces.40cf6e61.js";import"./convertDuration.9811f74f.js";import"./_commonjsHelpers.b8add541.js";var yt=({data:i,selected:a,onClick:r})=>{const g=n.exports.useMemo(()=>{if(i?.use_apr_day&&new Date(i?.use_apr_day)<new Date)return{date:i?.use_apr_day,label:"\uC2B9\uC778",color:"#253bff"};if(i?.real_stcns_day&&new Date(i?.real_stcns_day)<new Date)return{date:i?.real_stcns_day,label:"\uCC29\uACF5",color:"#9241e4"};if(i?.arch_pms_day&&new Date(i?.arch_pms_day)<new Date)return{date:i?.arch_pms_day,label:"\uD5C8\uAC00",color:"#00b448"}},[i]);return e(vt,{selected:a,onClick:r,children:e(Dt,{children:o(At,{children:[o(wt,{children:[e(_t,{children:i?.plat_plc}),e($t,{src:a?c("../assets/ic-bookmark-on.svg"):c("../assets/ic-bookmark-off.svg")})]}),o(Bt,{children:[e(Ft,{children:i?.main_purps_cd_nm===""?"\uC54C\uC218\uC5C6\uC74C":i?.main_purps_cd_nm}),e(zt,{}),o(kt,{children:[i?.plat_area,"\u33A1 (",(parseFloat(i?.plat_area)/3.3058).toFixed(2),"\uD3C9)"]})]}),o(St,{children:[e(It,{children:"\uBC1C\uC8FC\uCC98"}),e(Ie,{children:i?.bld_nm})]}),o(Mt,{children:[e(Et,{style:{color:g?.color},children:g?.label}),e(Ie,{children:v(g?.date).format("YYYY.MM")})]})]})})})};t.div`
  display: flex;
  align-items: center;
  padding: 26px 30px;
  border-bottom: 1px solid #f2f2f2;
  &:hover {
    .search-icon-circle {
      opacity: 1;
    }
  }
`;const vt=t.div`
  /* width: 100%auto
  display: flex;
  justify-content: space-between;
  align-items: center; */
  padding: 20px 20px 20px 40px;
  border-bottom: 1px solid #f2f2f2;

  ${({selected:i})=>i?x`
          background-color: #258fff1a;
        `:x`
          background-color: white;
        `}

  &:hover {
    background-color: #258fff1a;
  }

  transition: background-color 0.1s linear;

  cursor: pointer;
`,Dt=t.div``,wt=t.div`
  display: flex;
  justify-content: space-between;
`,At=t.div`
  display: flex;
  flex-direction: column;
`,_t=t.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #000;
`,Bt=t.div`
  display: flex;
  align-items: center;

  margin-top: 2px;
  margin-bottom: 14px;
`,Ft=t.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;
`,kt=t.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #222;
`,St=t.div`
  height: 17px;

  display: flex;
  align-items: center;

  margin-bottom: 5px;
`,Mt=t.div`
  height: 17px;

  display: flex;
  align-items: center;
`,It=t.div`
  width: 43px;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #999;
`,Et=t.div`
  width: 43px;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #253bff;
`,zt=t.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 8px;
  background-color: #c7c7c7;
`;t.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;const Ie=t.div`
  width: 100%;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$t=t.img`
  width: 28px;
  height: 28px;
`,Yt=[{label:"\uC2E0\uCD95\uD5C8\uAC00",value:2}];var Wt=({open:i,onClose:a,handleSubmit:r,revalidate:g,data:u})=>{n.exports.useState(!1);const[M,I]=n.exports.useState(""),[P,w]=n.exports.useState(""),[p,E]=n.exports.useState("6\uAC1C\uC6D4"),[f,m]=n.exports.useState(0),[B,F]=n.exports.useState(0),b=d=>{E(d)};return e(Te,{open:i,onClose:a,children:o(jt,{children:[e(Vt,{children:e(Gt,{src:c("../assets/ic-del.svg"),onClick:a})}),e(ht,{children:"\uD544\uD130"}),e(Ot,{children:o(Lt,{children:[o(de,{children:[e(ce,{children:"\uAC74\uCD95\uB2E8\uACC4"}),o(Nt,{children:[o(K,{children:[e(Q,{src:c("../assets/ic-filter-permission.svg")}),"\uD5C8\uAC00"]}),o(K,{children:[e(Q,{src:c("../assets/ic-filter-schedule.svg")}),"\uCC29\uACF5\uC608\uC815"]}),o(K,{children:[e(Q,{src:c("../assets/ic-filter-delay.svg")}),"\uCC29\uACF5\uC5F0\uAE30"]}),o(K,{children:[e(Q,{src:c("../assets/ic-filter-ing.svg")}),"\uCC29\uACF5\uC9C4\uD589"]}),o(K,{children:[e(Q,{src:c("../assets/ic-filter-approval.svg")}),"\uC0AC\uC6A9\uC2B9\uC778"]})]})]}),o(de,{children:[e(ce,{children:"\uC778\uD5C8\uAC00\uC2DC\uAE30"}),o(Pt,{children:[e(ue,{active:p==="1\uC8FC\uC77C",onClick:()=>b("1\uC8FC\uC77C"),children:"1\uC8FC\uC77C"}),e(ue,{active:p==="1\uAC1C\uC6D4",onClick:()=>b("1\uAC1C\uC6D4"),children:"1\uAC1C\uC6D4"}),e(ue,{active:p==="3\uAC1C\uC6D4",onClick:()=>b("3\uAC1C\uC6D4"),children:"3\uAC1C\uC6D4"}),e(ue,{active:p==="6\uAC1C\uC6D4",onClick:()=>b("6\uAC1C\uC6D4"),children:"6\uAC1C\uC6D4"})]}),o(Ee,{children:[e(ae,{type:"date",placeholder:"yyyy.mm.dd",containerStyle:{minWidth:160},value:M,onChange:d=>I(d.target.value)}),"~",e(ae,{type:"date",placeholder:"yyyy.mm.dd",containerStyle:{maxWidth:160},value:P,onChange:d=>w(d.target.value)})]})]}),o(de,{children:[e(ce,{children:"\uC5F0\uBA74\uC801"}),o(Ee,{children:[e(ae,{placeholder:"000m\xB3",containerStyle:{width:164,marginRight:4,color:"#258fff"},onChange:()=>{}}),"~",e(ae,{placeholder:"000m\xB3",containerStyle:{width:164,marginRight:4,color:"#258fff"},onChange:()=>{}})]})]}),o(de,{children:[o(ce,{children:["\uD5C8\uAC00\uAD6C\uBD84",o(Ht,{children:[e(Tt,{active:!1,onClick:()=>{},children:e(Rt,{src:c("../assets/ic-check-only-ic-grey.svg")})}),"\uC804\uCCB4"]})]}),o(ze,{children:["\uAC74\uCD95\uD5C8\uAC00",e(Ye,{src:c("../assets/ic-arrow.svg")})]}),o($e,{children:[e(we,{active:f===1,onClick:()=>{m(1)},children:"\uC804\uCCB4"}),Yt.map(d=>e(we,{active:f===d.value,onClick:()=>{m(d.value)},children:d.label},d.value))]}),o(ze,{children:["\uC0AC\uC5C5\uC2B9\uC778",e(Ye,{src:c("../assets/ic-arrow.svg")})]}),e($e,{children:e(we,{active:B===1,onClick:()=>{F(1)},children:"\uC804\uCCB4"})})]})]})}),o(gt,{children:[e(_e,{type:Be.GRAY_BLACK,onClick:a,containerStyle:{marginRight:20},children:"\uCD08\uAE30\uD654"}),e(_e,{onClick:r,children:"\uC801\uC6A9"})]})]})})};const jt=t.div`
  min-width: 440;
  max-height: 760;
  border-radius: 20px;
  padding: 30px 14px;
  background-color: #fff;

  overflow: hidden;
`,Ot=t.div`
  width: 440px;
  height: 550px;

  overflow-y: scroll;

  /* 스크롤바 설정*/
  &::-webkit-scrollbar {
    width: 17px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #e3e3e3;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`,Lt=t.div`
  width: 440;
  height: 550px;
  padding: 0px 36px;
`,ce=t.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;

  margin-bottom: 14px;
`,de=t.div`
  padding: 24px 0;
  border-bottom: 1px solid #e3e3e3;
`,Nt=t.div`
  display: flex;
  justify-content: space-between;
`,K=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #222;
`,Q=t.img`
  width: 48px;
  height: 48px;

  margin-bottom: 8px;
`,Pt=t.div`
  display: flex;
  justify-content: space-between;
`,ue=t.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 84px;
  height: 36px;
  border-radius: 20px;
  background-color: #000;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  cursor: pointer;

  ${({active:i})=>i?x`
          color: #ffff;
        `:x`
          color: #c7c7c7;
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}
`,Ee=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`,ze=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;

  color: #222;

  margin-top: 30px;
  margin-bottom: 14px;
`,$e=t.div`
  display: flex;
  margin: left;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
`,we=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 36px;
  padding: 8px 0;
  border-radius: 6px;
  background-color: #000;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  cursor: pointer;

  margin-bottom: 8px;

  ${({active:i})=>i?x`
          color: #ffff;
        `:x`
          color: #c7c7c7;
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}
`,Tt=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #fff;

  margin-right: 8px;

  ${({active:i})=>i?x`
          background-color: #222;
          border: solid 1px #222;
        `:x`
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}

  transition: background-color 0.2s ease-in-out;
`,Rt=t.img`
  width: 10px;
`,Ht=t.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #1f1d1d;
`,Vt=t.div`
  display: flex;
  flex-direction: column;
`,Gt=t.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`,Ye=t.img`
  width: 18px;
  height: 18px;

  margin-left: 4px;
`;var qt=({area:i,onClick:a})=>o(Kt,{onClick:a,children:[e(Qt,{children:`${i.state.label} ${i.city.label} ${i.dong.label}`}),e(Ut,{src:c("../assets/ic-circle-x.svg")})]});const Kt=t.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 8px 14px 9px;
  border-radius: 20px;
  border: solid 1px #258fff;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`,Qt=t.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #258fff;
  margin-right: 10px;
`,Ut=t.img`
  width: 16px;
  height: 16px;
`;var Xt=({spaces:i,fields:a,duration:r,setDuration:g,order:u,setOrder:M,selectedFactoryId:I,setSelectedFactoryId:P,selectedFieldInfo:w,setSelectedFieldInfo:p,selectedFactoryIds:E,selectedFieldId:f,setSelectedSpaceInfo:m,setIsInfoModalOpen:B,handleClickFactoryCard:F,address:b,setAddress:d,setRealAddress:ee,orderByFactories:k,areas:z,setAreas:A})=>{qe();const C=Ke(),V=Qe(),xe=n.exports.useMemo(()=>i?i.map(s=>({label:s.name,value:s.id})):[],[i]),[fe,Fe]=n.exports.useState(null),[W,ke]=n.exports.useState(!1),[he,$]=n.exports.useState(!1),[j,te]=n.exports.useState(!1),[O,oe]=n.exports.useState(!1),[ge,me]=n.exports.useState(!1),[be,Se]=n.exports.useState([]),[T,G]=n.exports.useState(!1),[L,ye]=n.exports.useState([]),[q,ne]=n.exports.useState([]),[l,h]=n.exports.useState([]),[y,_]=n.exports.useState(null),[S,ie]=n.exports.useState(null),[re,Me]=n.exports.useState(null);n.exports.useEffect(()=>{if(C?.state?.searchText){const s=C?.state?.searchText;d(s),ee(s),V(C.pathname,{})}},[C]);const Re=()=>{te(!1)},He=()=>{p(fe),ke(!1)},ve=async s=>{const{data:Y}=await Le.get("/codes/addresses",{params:{parent_id:s}});return Y?.result.map(D=>({code:D.code,label:D.name,value:D.id}))};n.exports.useEffect(()=>{(async()=>{const s=await ve(void 0);ye(s)})()},[]),n.exports.useEffect(()=>{(async()=>{if(!y)return;const s=await ve(y);ne(s)})()},[y]),n.exports.useEffect(()=>{(async()=>{if(!S)return;const s=await ve(S);h(s)})()},[S]);const Ve=()=>{if(y===null&&S===null&&re===null)return;const s=L.find(D=>D.value===y),Y=q.find(D=>D.value===S),se=l.find(D=>D.value===re);z!==null&&A([]),A(D=>D.concat({state:s,city:Y,dong:se})),_(null),ie(null),Me(null),ne([]),h([])},Ge=s=>{A(Y=>Y.filter(se=>s!==se))};return o(Zt,{children:[o(Jt,{children:[e(le,{placeholder:"\uB808\uBBF8\uCF58 \uACF5\uC7A5\uC744 \uC120\uD0DD\uD558\uC138\uC694",width:320,value:I,onChange:s=>{P(s)},options:xe,initalMaxHeight:45,absoluteStyle:{border:"solid 1px #c7c7c7",padding:"12px 14px 10px"},containerStyle:{marginBottom:40,padding:"12px 14px"}}),e(eo,{children:"\uC9C0\uC5ED\uC744 \uB4F1\uB85D\uD558\uC138\uC694. (\uCD5C\uB300 00\uAC1C)"}),o(to,{children:[e(le,{placeholder:"\uAD11\uC5ED\uC2DC\uB3C4",width:108,value:y,onChange:s=>_(s),options:L,absoluteStyle:{border:"solid 1px #c7c7c7"}}),e(le,{placeholder:"\uC2DC\uAD70\uAD6C",width:98,value:S,onChange:s=>ie(s),options:q,absoluteStyle:{border:"solid 1px #c7c7c7"}}),e(le,{placeholder:"\uC74D\uBA74\uB3D9",width:98,value:re,onChange:s=>Me(s),options:l,absoluteStyle:{border:"solid 1px #c7c7c7"}})]}),e(_e,{type:y!==null&&S!==null&&re!==null?Be.PRIMARY:Be.GRAY,containerStyle:{marginBottom:z.length>0?20:30,height:40},onClick:Ve,children:"\uC9C0\uC5ED \uB4F1\uB85D\uD558\uAE30"}),z.length>0&&e(lo,{children:z.map(s=>e(qt,{area:s,onClick:()=>Ge(s)}))})]}),o(oo,{children:[e(xt,{options:[{label:"\uCD5C\uC2E0\uC21C",value:"\uCD5C\uC2E0\uC21C"},{label:"\uC2DC\uAC04\uC21C",value:"\uC2DC\uAC04\uC21C"},{label:"\uAC70\uB9AC\uC21C",value:"\uAC70\uB9AC\uC21C"},{label:"\uC990\uACA8\uCC3E\uAE30",value:"\uC990\uACA8\uCC3E\uAE30"}],value:u,onChange:s=>M(s)}),o(ro,{onClick:()=>te(!0),children:["\uD544\uD130 ",e(so,{src:c("../assets/ic-sort-bk.svg")})]})]}),e(io,{children:a&&a.data?.map((s,Y)=>e(yt,{data:s,selected:E.includes(s.id),onClick:a?.field_position?()=>F(s.id):()=>{B(!1),m({...s,disableCenter:!1}),setTimeout(()=>{B(!0)},250)}},s.id))}),e(Wt,{open:j,onClose:Re,handleSubmit:He}),e(De,{open:he,content:`\uB4F1\uB85D\uB41C \uAC74\uC124\uD604\uC7A5 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
\uAC74\uC124\uD604\uC7A5\uC744 \uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,onSubmit:()=>V("/add-construction-field/step-1"),onClose:()=>$(!1)}),e(De,{open:O,content:`\uACAC\uC801 \uC694\uCCAD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.
\uB0A9\uD488\uC0AC \uC120\uC815 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,onSubmit:()=>V("/supplier-choice"),onClose:()=>oe(!1)}),e(De,{open:ge,content:`\uC774\uBBF8 \uACAC\uC801\uC694\uCCAD\uD55C \uACF5\uC7A5\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.
${be.map(s=>(a?.data||[]).filter(Y=>Y.id===s)[0].name).join(", ")}`,onClose:()=>me(!1)}),e(Te,{open:T,onClose:()=>G(!1),children:e(no,{style:{width:400,height:600},children:e(mt,{onComplete:s=>{p(null),d(s?.roadAddress||s?.autoJibunAddress),G(!1)}})})})]})};const Zt=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
  position: relative;
`,Jt=t.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 0px 30px;
  border-bottom: 1px solid #c7c7c7;
`,eo=t.div`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.28px;
  color: #000;
`;t.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
  margin-bottom: 14px;
`;t.div`
  display: flex;
  margin-bottom: 30px;
`;t.span`
  flex: 1;
  padding: 8px 0px;
  margin-right: 8px;
  border-radius: 18px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  text-align: center;
  cursor: pointer;

  ${({active:i})=>i?x`
          background-color: #000;
          color: #ffffff;
          border: solid 1px black;
        `:x`
          background-color: #fff;
          color: #c7c7c7;
          border: solid 1px #c7c7c7;
        `}

  &:last-child {
    margin-right: 0;
  }

  transition: all 0.1s linear;

  &:hover {
    border: solid 1px black;
    color: black;
  }
`;const to=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 14px 0px;
`,oo=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 17px 30px;
  border-bottom: 1px solid #f2f2f2;
`;t.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #777;
  & > b {
    font-weight: 700;
    letter-spacing: -0.28px;
    text-align: left;
    color: #222;
  }
`;t.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 16px 30px;
  box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
`;t.div`
  max-height: 402px;
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
`;const no=t.div``,io=t(ct)`
  flex: 1;

  /* max-height: calc(100% - 123px); */
  overflow-y: scroll;
`,ro=t.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #222;

  cursor: pointer;
`,so=t.img`
  width: 18px;
  height: 18px;

  margin-left: 4px;
`,lo=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;var ao=()=>(n.exports.useContext(Pe),Ne(),o(co,{children:[e(We,{children:"\uD604\uC7A5"}),o(uo,{children:[o(pe,{children:[e(Ce,{color:"#00b448"})," \uD5C8\uAC00\uB41C \uD604\uC7A5"]}),o(pe,{children:[e(Ce,{color:"#9241e4"})," \uCC29\uACF5\uC911\uC778 \uD604\uC7A5"]}),o(pe,{children:[e(Ce,{color:"#253bff"})," \uC2B9\uC778\uB41C \uD604\uC7A5"]})]}),e(We,{children:"\uACF5\uC7A5"}),o(pe,{children:[e(Ce,{color:"#ff7d00"})," \uB808\uBBF8\uCF58 \uACF5\uC7A5"]})]}));const co=t.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;

  padding: 10px 14px;
  background-color: #fff;
  border-radius: 12px;

  right: 112px;
  bottom: 24px;
`,We=t.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #000;
`,uo=t.div`
  margin-bottom: 14px;
`,pe=t.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #000;
`,Ce=t.div`
  width: 16px;
  height: 16px;
  margin: 10px 8px 7px 0;

  border-radius: 16px;

  background-color: ${i=>i.color};
`,po="FIELD_MAPS";var Co=(i,a,r)=>dt([po,i,a],()=>Le.get("/field-crawlings/maps",{params:{areas:i,...a||{}}}),{active:r>=16}),xo=({index:i,data:a,name:r,address:g,distance:u,duration:M,selected:I,onClick:P,onInfo:w,onChangePath:p,hideWithoutName:E})=>{const f=n.exports.useMemo(()=>{if(a?.use_apr_day&&new Date(a?.use_apr_day)<new Date)return{date:a?.use_apr_day,label:"\uC2B9\uC778",color:"#253bff"};if(a?.real_stcns_day&&new Date(a?.real_stcns_day)<new Date)return{date:a?.real_stcns_day,label:"\uCC29\uACF5",color:"#9241e4"};if(a?.arch_pms_day&&new Date(a?.arch_pms_day)<new Date)return{date:a?.arch_pms_day,label:"\uD5C8\uAC00",color:"#00b448"}},[a]),[m,B]=n.exports.useState(!1),[F,b]=n.exports.useState(!1),[d,ee]=n.exports.useState(["\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uB9C8\uD3EC\uAD6C \uB3D9\uAD50\uB3D9 201-9\uBC88\uC9C0","\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uB9C8\uD3EC\uAD6C \uC11C\uAD50\uB3D9 331-13\uBC88\uC9C0"]);console.log(a);const k=n.exports.useRef(null),z=n.exports.useMemo(()=>!!(I||F||m),[I,F,m]),A=({target:C})=>{m&&k.current&&!k.current.contains(C)&&B(!1)};return n.exports.useEffect(()=>{if(m)return window.addEventListener("click",A),()=>{window.removeEventListener("click",A)}},[m]),e(ho,{ref:k,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),onClick:w,style:d.find(C=>C===a?.plat_plc)?{}:{backgroundColor:f?.color},children:d.find(C=>C===a?.plat_plc)&&o(fo,{ref:k,children:[e(go,{src:z?c("../assets/img-map-bubble-on.png"):c("../assets/img-map-bubble.png")}),o(mo,{onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),onClick:w,children:[E&&e(bo,{selected:z,children:e("img",{src:c("../assets/bookmark-ic-off.svg")})}),E?o(yo,{children:[e(vo,{children:r===""?"\uC54C\uC218\uC5C6\uC74C":r}),o(Do,{children:[e(wo,{style:{color:f?.color},children:f?.label}),e(Ao,{}),e(_o,{children:v(f?.date).format("YYYY.MM")})]})]}):e(Bo,{children:e(Fo,{children:r})})]})]})})};const fo=t.div`
  display: block;
  position: relative;
  width: 175px;
  height: 64px;
  border-radius: 17px;
  &:hover {
    z-index: 20000;
  }
`,ho=t.div`
  display: block;
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 20px;

  &:hover {
    z-index: 2000;
  }
`,go=t.img`
  width: 100%;
  height: 100%;
`,mo=t.div`
  top: 0;
  left: 0;
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px 10px 20px 10px;
`,bo=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;

  border-radius: 17px;

  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.28px;
  text-align: center;
  color: #fff;
  margin-right: 10px;

  ${({selected:i})=>i?x`
          background-color: #258fff;
        `:x`
          background-color: #c7c7c7;
        `}
`,yo=t.div`
  display: flex;
  flex-direction: column;
`,vo=t.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000;
  margin-bottom: 6px;

  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Do=t.div`
  display: flex;
  align-items: center;
`,wo=t.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  text-align: left;
`,Ao=t.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 8px;
  background-color: #c7c7c7;
`,_o=t.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
`;t.div`
  position: absolute;
  top: -15px;
  right: -9px;
  width: 34px;
  height: 34px;
  padding: 7px;
  border-radius: 17px;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;t.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -156px;
  right: -108px;
`;t.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.1);
  cursor: default;
  z-index: 9999999;
`;t.span`
  width: 12px;
  border-top: 12px solid white;
  border-right: 12px solid transparent;
  border-left: 12px solid transparent;
`;t.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: left;
  color: #258fff;
  margin-bottom: 4px;
`;t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;
`;t.div`
  display: flex;
`;t.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 7px 0px;
  border-radius: 6px;
  border: solid 1px #4490f7;
  background-color: #fff;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #258fff;

  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;t.img`
  width: 20px;
  height: 20px;
  margin: 0 2px 0 0;
`;const Bo=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Fo=t.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000;
`;var ko=({open:i,onClose:a,data:r})=>{const g=n.exports.useMemo(()=>{if(r?.use_apr_day&&new Date(r?.use_apr_day)<new Date)return{date:r?.use_apr_day,label:"\uC2B9\uC778",color:"#253bff"};if(r?.real_stcns_day&&new Date(r?.real_stcns_day)<new Date)return{date:r?.real_stcns_day,label:"\uCC29\uACF5",color:"#9241e4"};if(r?.arch_pms_day&&new Date(r?.arch_pms_day)<new Date)return{date:r?.arch_pms_day,label:"\uD5C8\uAC00",color:"#00b448"}},[r]);return e(So,{isOpen:i,children:r&&o(Ue,{children:[e(Mo,{src:c("../assets/ic-del.svg"),onClick:a}),e(Io,{children:r?.plat_plc}),o(Yo,{children:[e(Wo,{children:r?.main_purps_cd_nm===""?"\uC54C\uC218\uC5C6\uC74C":r?.main_purps_cd_nm}),e(Oo,{}),o(jo,{children:[r?.plat_area,"\u33A1 (",(parseFloat(r?.plat_area)/3.3058).toFixed(2),"\uD3C9)"]})]}),e(Eo,{}),e(je,{children:"\uC778\uD5C8\uAC00 \uC0C1\uD0DC"}),o(Lo,{children:[o(U,{children:[e(X,{src:c("../assets/permission-2-ic.svg")}),e(Z,{children:"\uAC74\uCD95\uD5C8\uAC00\uC77C"}),e(J,{children:v(r?.arch_pms_day).isValid()?v(r?.arch_pms_day).format("YYYY.MM.DD"):"-"})]}),o(U,{children:[e(X,{src:c("../assets/schedule-2-ic.svg")}),e(Z,{children:"\uCC29\uACF5\uC608\uC815\uC77C"}),e(J,{children:v(r?.stcns_sched_day).isValid()?v(r?.stcns_sched_day).format("YYYY.MM.DD"):"-"})]}),o(U,{children:[e(X,{src:c("../assets/permission-2-ic.svg")}),e(Z,{children:"\uCC29\uACF5\uC5F0\uAE30\uC77C"}),e(J,{children:v(r?.stcns_delay_day).isValid()?v(r?.stcns_delay_day).format("YYYY.MM.DD"):"-"})]}),o(U,{children:[e(X,{src:c("../assets/ing-2-ic.svg")}),e(Z,{children:"\uC2E4\uC81C\uCC29\uACF5\uC77C"}),e(J,{children:v(r?.real_stcns_day).isValid()?v(r?.real_stcns_day).format("YYYY.MM.DD"):"-"})]}),o(U,{children:[e(X,{src:c("../assets/approval2_ic.svg")}),e(Z,{children:"\uC0AC\uC6A9\uC2B9\uC778\uC77C"}),e(J,{children:v(r?.use_apr_day).isValid()?v(r?.use_apr_day).format("YYYY.MM.DD"):"-"})]})]}),e(je,{children:"\uAE30\uBCF8\uAC1C\uC694"}),o(zo,{style:{marginBottom:24},children:[o(R,{children:[e(H,{children:"\uAC74\uBB3C\uBA85"}),e(N,{children:r?.bld_nm})]}),o(R,{children:[e(H,{children:"\uD5C8\uAC00\uAD6C\uBD84"}),e(N,{children:r?.arch_gb_cd_nm}),e(N,{style:{padding:0},children:e($o,{children:o(R,{style:{height:"100%"},children:[e(H,{style:{minWidth:108},children:"\uCC29\uACF5\uAD6C\uBD84"}),e(N,{children:g?.label})]})})})]}),o(R,{children:[e(H,{children:"\uAC74\uBB3C \uC8FC\uC6A9\uB3C4"}),e(N,{children:r?.main_purps_cd_nm})]}),o(R,{children:[e(H,{children:"\uC5F0\uBA74\uC801"}),o(N,{children:[r?.tot_area,"\u33A1 (",(parseFloat(r?.tot_area)/3.3058).toFixed(2),"\uD3C9)"]})]}),o(R,{children:[e(H,{children:"\uAC74\uCD95\uBA74\uC801"}),o(N,{children:[r?.arch_area,"\u33A1 (",(parseFloat(r?.arch_area)/3.3058).toFixed(2),"\uD3C9)"]})]})]})]})})};const So=t.div`
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

  ${({isOpen:i})=>i?x`
          transform: translateX(0%);
        `:x`
          transform: translateX(100%);
        `}

  transition: transform 0.25s ease-in-out;
`,Mo=t.img`
  display: block;
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
  object-fit: contain;
  margin-left: auto;
  cursor: pointer;
`,Io=t.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
  margin-bottom: 8px;
`,Eo=t.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 20px 0px;
  background-color: #e3e3e3;
`,je=t.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  color: #000;
  margin-bottom: 10px;
`,zo=t.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`,R=t.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`,H=t.div`
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
`,N=t.div`
  display: flex;
  align-items: center;

  flex: 2;
  padding: 17px 15px;

  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;t.span`
  display: block;
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;const $o=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;t.div`
  display: flex;
  align-items: center;

  min-width: 257px;
  height: 100%;
  padding: 8px 24px;
  background-color: #f2f2f2;

  font-size: 13px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;
`;t.div`
  display: flex;
  align-items: center;
  height: 100%;

  flex: 1;
  padding: 8px 21px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;t.span`
  font-size: 11px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;const Yo=t.div`
  display: flex;
  align-items: center;
`,Wo=t.div`
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.32px;
  text-align: left;
  color: #777;
`,jo=t.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.32px;
  text-align: left;
  color: #777;
`,Oo=t.div`
  width: 2px;
  height: 10px;
  margin: 0px 10px;
  background-color: #e3e3e3;
`,Lo=t.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`,U=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  &:not(:last-child) {
    margin-right: 30px;
  }
`,X=t.img`
  margin-bottom: 10px;
`,Z=t.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #777;
  margin-bottom: 6px;
`,J=t.span`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  text-align: center;
  color: #222;
`,{naver:No}=window;var Oe=({lat:i,lng:a,disableCenter:r=!1})=>{const g=n.exports.useContext(Pe);return n.exports.useEffect(()=>{if(a!==void 0&&i!==void 0&&!r){const u=new No.maps.LatLng(i,a);g.setCenter(u)}return()=>{}},[g,i,a,r]),e("div",{})};const{naver:Ae}=window;var sn=()=>{const i=Xe(),{error:a,coordinates:r,loaded:g}=Ne(),{polylineInfo:u}=Ze(l=>l.map,Je),M=n.exports.useMemo(()=>u?u?.path[Math.floor(u?.path.length/2)]:null,[u]),[I,P]=n.exports.useState("60"),{data:w}=bt("N"),[p,E]=n.exports.useState(null),[f,m]=n.exports.useState(null),B=n.exports.useMemo(()=>!w||f===null?null:w.find(l=>l.id===f),[w,f]),F=n.exports.useMemo(()=>p?p.id:null,[p]),[b,d]=n.exports.useState(null),[ee,k]=n.exports.useState(""),[z,A]=n.exports.useState(""),[C,V]=n.exports.useState([]),xe=n.exports.useMemo(()=>C.length===0?"":C.map(l=>`${l.state.code}_${l.city.code}_${l.dong.code}`).join(","),[C]),[fe,Fe]=n.exports.useState(18),{data:W,isLoading:ke}=Co(xe,b,fe),he=ut(W),$=n.exports.useMemo(()=>W||he,[W]),[j,te]=n.exports.useState([]),[O,oe]=n.exports.useState(null),[ge,me]=n.exports.useState("\uCD5C\uC2E0\uC21C"),be=n.exports.useRef(ft.exports.debounce(l=>d(l),1e3)).current,[Se,T]=n.exports.useState(!1),G=n.exports.useCallback(l=>{te(h=>h.includes(l)?h.filter(_=>_!==l):h.concat(l))},[j]),[L,ye]=n.exports.useState(""),[q,ne]=n.exports.useState({sido:"",sigugun:""});return n.exports.useEffect(()=>{r?.lat!==0&&r?.lng!==0&&(console.log("coordinates",r),Ae.maps.Service.reverseGeocode({location:new Ae.maps.LatLng(r?.lat,r?.lng)},function(l,h){if(l!==Ae.maps.Service.Status.OK)return alert("\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");let _=h.result.items;console.log("\uC8FC\uC18C \uACB0\uACFC",_),console.log("\uC8FC\uC18C \uACB0\uACFC \uBC30\uC5F4::::",_?.[0].address),ye(_?.[0].address);const S=_?.[0].addrdetail.sido,ie=_?.[0].addrdetail.sigugun;ne({sido:S,sigugun:ie}),console.log("currentAddrDetail",q)}),console.log("\uD604\uC7AC\uC8FC\uC18C currentAddress",L),A(L),k(L))},[r,L]),n.exports.useEffect(()=>{console.log("changed selectedFactoryIds",j)},[j]),n.exports.useEffect(()=>{O&&k(p?.basic_address)},[p]),n.exports.useEffect(()=>{W?.message==="\uC8FC\uC18C \uC704\uCE58\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."&&(window.alert("\uC8FC\uC18C \uC704\uCE58\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),A(""))},[W]),o(tt,{children:[e(Xt,{spaces:w,fields:$,order:ge,setOrder:me,duration:I,setDuration:P,selectedFactoryId:f,setSelectedFactoryId:m,selectedFieldInfo:p,setSelectedFieldInfo:E,selectedFactoryIds:j,selectedFieldId:F,setSelectedSpaceInfo:oe,setIsInfoModalOpen:T,handleClickFactoryCard:G,address:ee,setAddress:k,setRealAddress:A,areas:C,setAreas:V}),o(Po,{children:[o(To,{children:[o(lt,{lat:37.557733,lng:126.9253985,zoom:17,style:{width:"100%",height:"calc(100vh - 80px)"},boundChange:({_min:l,_max:h})=>{const y={min_lat:l._lat,min_lng:l._lng,max_lat:h._lat,max_lng:h._lng};be(y)},zoomChange:l=>{Fe(l)},children:[e(Oe,{lat:B?.latitude,lng:B?.longitude,disableCenter:!1}),e(Oe,{lat:O?.latitude,lng:O?.longitude,disableCenter:O?.disableCenter}),u?.path&&e(ot,{paths:u?.path}),M&&e(nt,{lat:M[1],lng:M[0],content:e(it,{distance:u.distance,duration:u.duration})}),!!$?.field_position&&e(Ct,{lat:$?.field_position.latitude,lng:$?.field_position.longitude,content:e("img",{src:c("../assets/ic-field-marker.png"),style:{width:119,height:72}})}),$&&$.data?.map((l,h)=>e(at,{lat:l.latitude,lng:l.longitude,content:e(xo,{index:h,name:l?.main_purps_cd_nm,data:l,address:l?.basic_address,distance:l?.direction?.distance,duration:l?.direction?.duration,onClick:()=>{F!==null&&G(l.id)},onInfo:()=>{T(!1),oe({...l,disableCenter:!0}),setTimeout(()=>{T(!0)},250)},onChangePath:()=>{i(et(l?.direction))},selected:!!l.direction&&l.direction===u||j.includes(l.id),hideWithoutName:!0})},l.id)),e(rt,{currentAddrDetail:q}),e(st,{}),e(ao,{})]}),e(ko,{open:Se,onClose:()=>T(!1),data:O})]}),e(pt,{})]})]})};const Po=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  overflow-y: scroll;
`,To=t.div`
  flex: 1;
  position: relative;
`;export{sn as default};
