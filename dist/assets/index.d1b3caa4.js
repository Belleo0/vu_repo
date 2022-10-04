import{d as xe,i as Ee,c as Me,C as Te,a as K,W as _e,u as ze,b as ge,e as Ce,g as Le,f as Oe,h as Ie,j as V,k as Fe,l as X,O as $e,m as Ue}from"./CalendarBarColors.cbc556f8.js";import{u as _,h as D,g as b,c as T,a as Ne,S as he,d as Re,i as We,e as Ye,f as je}from"./Header.8f74d7dd.js";import{r,j as n,a as e,n as t,d as L,u as Pe,k as He,g as qe,F as Ve}from"./index.fa23706f.js";import{u as Xe}from"./useSelectedSpaceId.e98fa8e8.js";import{B as v,a as k,b as E}from"./Button.2ebe35cd.js";import{T as Q}from"./TextModal.458f5750.js";import{M as Ge}from"./Modal.5ea91f83.js";import{U as Ke}from"./UserInfoModal.f3969620.js";import{S as Qe}from"./SpaceLayout.78f58f87.js";import"./SpecOptions.8ecc5a87.js";import"./BlackInput.304293be.js";import"./BlackSelect.c26abd5f.js";import"./useFriends.38f9623d.js";import"./common.0c17b2bd.js";import"./ProfileBox.54d21f9f.js";import"./lodash.4b3a1baf.js";import"./_commonjsHelpers.b8add541.js";import"./useSpaces.40cf6e61.js";var Je=({v:i,assignments:c,weatherInfo:u,setSelectedBarInfo:f,setIsModalOpened:d,setModalPosition:s})=>{const l=_(),[p,g]=r.exports.useState(!1),C=D(i).format("YYYY-MM-DD"),a=c?.[C]||[],x=u?.[C],w=`../assets/${u?.[C]?.weather?.[0]?.icon?.slice?.(0,2)}.svg`;return n(Ze,{children:[e(et,{className:"day-text",children:xe[i.getDay()]}),n(tt,{children:[n(nt,{style:x?{}:{justifyContent:"center"},children:[x?e(ie,{style:{opacity:0}}):null,e(ot,{active:Ee(i),children:Me(i.getDate())}),x?e(ie,{src:b(w),onClick:()=>g(!0),style:{cursor:"pointer"}}):null]}),e(it,{children:a?.map((m,h)=>n(rt,{fieldSpaceId:m?.estimation?.field_space?.id,style:m?.status==="REQUESTED"?dt:{backgroundColor:Te?.[h]},onClick:M=>{s({x:M.clientX,y:M.clientY}),f(m),d(!0)},children:[e(at,{children:K(m?.start_time,!0)}),e(lt,{children:m?.estimation?.[l?"factory_space":"field_space"]?.name}),n(ct,{children:[m?.total?.toLocaleString?.("ko"),"m\xB3"]})]}))})]}),x&&e(_e,{open:p,onClose:()=>g(!1),data:x})]},i.toISOString())};const Ze=t.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid #f2f2f2;

  max-width: calc(100% / 7);

  &:first-of-type {
    .day-text {
      color: #ff5517;
    }
  }
`,et=t.div`
  display: flex;
  justify-content: center;
  padding: 12px 0px;
  border-bottom: 1px solid #f2f2f2;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;

  color: #000;
`,tt=t.div`
  min-height: 128px;
  border-bottom: 1px solid #f2f2f2;
`,nt=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  padding: 10px 14px;
`,ie=t.img`
  width: 30px;
  height: 30px;
`,ot=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;

  border-radius: 15px;

  ${({active:i})=>i?T`
          background-color: #258fff;
          color: #fff;
        `:T`
          background-color: #fff;
          color: #1f1d1d;
        `}
`,it=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 6px;
`,rt=({fieldSpaceId:i,...c})=>(ze(i),ge(i),e(st,{fieldSpaceId:i,...c})),st=t.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 10px;
  border-radius: 6px;
  background-color: #ffd6cc;
  margin-bottom: 2px;
  cursor: pointer;
`,at=t.span`
  display: block;
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #777;
  margin-right: 4px;
  word-break: keep-all;
`,lt=t.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  margin-right: 8px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* max-width: calc(100% - 150px); */

  /* max-width: 56px; */
`,ct=t.span`
  display: block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  text-align: left;
  color: #000;
  margin-left: auto;
`,dt={backgroundColor:"#ffffff",backgroundImage:`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23c7c7c7' stroke-width='3' stroke-dasharray='2%2c7' stroke-dashoffset='57' stroke-linecap='square'/%3e%3c/svg%3e")`,borderRadius:" 6px",display:"flex",alignItems:"center",width:"100%",padding:"8px 10px",marginBottom:"2px",cursor:"pointer"};var pt=({dates:i,setDates:c,assignments:u,mutate:f,mutateMessages:d})=>{_();const s=Ce(),{data:l}=ge(),[p,g]=r.exports.useState(!1),[C,a]=r.exports.useState({x:0,y:0}),[x,y]=r.exports.useState(null),w=r.exports.useMemo(()=>Le(Oe.WEEK,i),[i]),m=()=>{const A=i[0],O=new Date(A.valueOf()-6048e5);c(V(O))},h=()=>{const A=i[0],O=new Date(A.valueOf()+6048e5);c(V(O))},M=()=>{c(V(new Date))};r.exports.useEffect(()=>{M()},[]);const F=()=>{g(!1),y(null),a({x:0,y:0})};return n(ut,{children:[n(ft,{children:[e(xt,{children:s?.name}),n(gt,{children:[n(Ct,{children:[e(re,{src:b("../assets/ic-arrow-left.svg"),onClick:m}),e(ht,{children:w}),e(re,{src:b("../assets/ic-arrow-right.svg"),onClick:h})]}),e(mt,{onClick:M,children:"\uC624\uB298"})]})]}),e(yt,{children:i.map(A=>e(Je,{v:A,assignments:u,weatherInfo:l,setSelectedBarInfo:y,setIsModalOpened:g,setModalPosition:a},A.toString()))}),e(Ie,{open:p,onClose:F,info:x,position:C,revalidate:()=>{f(),d()},weatherInfo:l,setIsModalOpened:g,setModalPosition:a})]})};const ut=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 22px;
`,ft=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,xt=t.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
`,gt=t.div`
  display: flex;
`,Ct=t.div`
  display: flex;
  align-items: center;
`,ht=t.span`
  font-size: 18px;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
`,re=t.img`
  width: 14px;
  height: 14px;
  margin: 0px 10px 2px 10px;
  cursor: pointer;
  user-select: none;
`,mt=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 24px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  margin: 0px 10px;
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  cursor: pointer;
  user-select: none;
`,yt=t.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`,Bt="ORDER_SUPPLIERS";var bt=i=>{const c=_();return Ne([Bt,i],()=>L.get(`/${c?"field":"factory"}-spaces/${i}/order-${c?"suppliers":"clients"}`),{enabled:!!i})},Dt=({active:i,name:c,saleUserName:u,saleUserPosition:f,totalAmount:d,companyName:s,onClick:l})=>{const p=_();return n(wt,{active:i,onClick:l,children:[e(At,{children:e(St,{children:c})}),n(se,{children:[e(ae,{children:p?"\uC601\uC5C5\uC0AC\uC6D0":"\uAC70\uB798\uCC98"}),e(le,{children:p?`${u} ${f}`:s})]}),n(se,{children:[e(ae,{children:"\uB204\uC801 \uC8FC\uBB38\uB7C9"}),e(le,{children:"2\uCC28 \uBC94\uC704"})]})]})};const wt=t.div`
  width: 100%;
  padding: 17px 24px;
  border-bottom: 1px solid #f2f2f2;

  background-color: white;

  &:hover {
    background-color: #eaf4fe;
  }

  transition: background-color 0.1s linear;

  cursor: pointer;

  ${({active:i})=>i&&T`
      background-color: #eaf4fe;
    `})}
`,At=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`,St=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,se=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`,ae=t.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-right: 8px;
`,le=t.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;
`;var vt=({companyName:i,userName:c,userPosition:u,content:f,sendAt:d,isMyChat:s})=>s?e(ce,{style:{marginLeft:"auto"},children:n(de,{children:[n(ue,{style:{textAlign:"right"},children:[D(d).format("YY.MM.DD"),e("br",{}),D(d).format("HH:mm")]}),e(pe,{style:{backgroundColor:"#f2f8ff"},children:f})]})}):n(ce,{children:[n(kt,{children:[e(Et,{src:b("../assets/default-profile.jpeg")}),n(Mt,{children:[e(Tt,{children:i}),n(_t,{children:[c," ",u]})]})]}),n(de,{children:[e(pe,{children:f}),n(ue,{children:[D(d).format("YY.MM.DD"),e("br",{}),D(d).format("HH:mm")]})]})]});const ce=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`,kt=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`,Et=t.img`
  width: 34px;
  height: 34px;
  margin: 0 10px 0 0;
  border: solid 1px #e3e3e3;
  border-radius: 17px;
`,Mt=t.div`
  display: flex;
  flex-direction: column;
`,Tt=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #777;
  margin-bottom: 6px;
`,_t=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #000;
`,de=t.div`
  display: flex;
  align-items: flex-end;
`,pe=t.span`
  padding: 10px 20px;
  border-radius: 20px;
  border-top-left-radius: 0;
  background-color: #f2f2f2;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  margin-right: 6px;
`,ue=t.span`
  font-size: 11px;
  line-height: 1.27;
  text-align: left;
  color: #777;
  margin-right: 10px;
`;var zt=({id:i,type:c,mutate:u})=>{Pe();const f=_(),{data:d,refetch:s}=Fe(i),[l,p]=r.exports.useState(!1),[g,C]=r.exports.useState(!1),[a,x]=r.exports.useState(!1),y=async()=>{if(l===!1){p(!0);try{await L.post(`/assignments/${i}/confirm`)}catch(m){console.log(m),window.alert("\uC5D0\uB7EC \uBC1C\uC0DD..")}finally{await s(),await u(),p(!1)}}},w=async()=>{if(a===!1){x(!0);try{await L.delete(`/assignments/${i}`),C(!1),await u()}catch(m){console.log(m)}finally{x(!1)}}};return c==="FIELD_TO_FACTORY"&&f===!0||c==="FACTORY_TO_FIELD"&&f===!1?d?.status==="REQUESTED"?e(N,{children:e(v,{type:k.OUTLINE,size:E.SMALL,children:"\uD655\uC778 \uC911"})}):d?.status==="CONFIRMED"?e(N,{children:e(v,{type:k.GRAY,size:E.SMALL,children:"\uD655\uC778\uC644\uB8CC"})}):(d?.status==="REMOVED",null):d?.status==="REQUESTED"?n(N,{children:[e(v,{type:k.OUTLINE,size:E.SMALL,containerStyle:{marginRight:14},onClick:()=>C(!0),children:"\uCDE8\uC18C\uD558\uAE30"}),e(v,{type:k.PRIMARY,size:E.SMALL,onClick:y,children:"\uD655\uC778\uD558\uAE30"}),e(Q,{open:g,onClose:()=>C(!1),onSubmit:w,content:"\uC8FC\uBB38\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"})]}):d?.status==="CONFIRMED"?e(N,{children:e(v,{type:k.GRAY,size:E.SMALL,children:"\uD655\uC778\uC644\uB8CC"})}):(d?.status==="REMOVED",null)};const N=t.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;var Lt=({type:i,chatRoomData:c,companyName:u,userName:f,userPosition:d,data:s,sendAt:l,isMyChat:p,mutate:g})=>{const C=_(),a=Ce();return n(Ot,{style:p?{marginLeft:"auto"}:{},children:[!p&&n(It,{children:[e(Ft,{src:b("../assets/default-profile.jpeg")}),n($t,{children:[e(Ut,{children:u}),n(Nt,{children:[f," ",d]})]})]}),n(Rt,{children:[p&&n(fe,{style:{textAlign:"right"},children:[D(l).format("YY.MM.DD"),e("br",{}),D(l).format("HH:mm")]}),n(Wt,{isMyChat:p,children:[i==="ASSIGNMENT_DELETE"?e(Qt,{children:"\uBC30\uC1A1\uC77C\uC815\uC774 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}):i==="ASSIGNMENT_UPDATE"?e(me,{children:"\uBC30\uC1A1\uC77C\uC815\uC774 \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}):null,n(Yt,{children:[e(jt,{children:"\uB808\uBBF8\uCF58 \uC8FC\uBB38"}),n(Pt,{children:[e(Ht,{children:"\uCD1D \uC8FC\uBB38\uD569\uACC4"}),n(qt,{children:[s?.total?.toLocaleString?.("ko"),"m\xB3"]})]})]}),n(Vt,{children:[n(R,{children:[e(W,{children:"\uACF5\uAE09\uCC98"}),e(Y,{children:C?c?.factory_space?.name:a?.name})]}),n(R,{children:[e(W,{children:"\uBC30\uC1A1\uC77C\uC815"}),n(Y,{children:[D(s?.start_time).format("YYYY\uB144 M\uC6D4 D\uC77C"),"(",xe[D(s?.start_time).day()],")"," ",K(s?.start_time)," - ",K(s?.end_time)]})]}),(s?.specs||[]).map((x,y)=>n(R,{style:{marginBottom:(s?.specs||[]).length-1===y?14:8},children:[e(W,{children:y===0?"\uBC1C\uC8FC\uB0B4\uC5ED":""}),n(Xt,{children:[n(Y,{children:[x.value,"-",x.norminal_strength,"-",x.slump]}),n(Gt,{children:[x.quantity?.toLocaleString?.("ko"),"m\xB3"]})]})]},y)),n(Kt,{children:[e(X,{value:s.mulcha,onChange:()=>null,label:"\uBB3C\uCC28",containerStyle:{marginRight:24}}),e(X,{value:s.multal,onChange:()=>null,label:"\uBB3C\uD0C8",containerStyle:{marginRight:24}}),e(X,{value:s.inducer,onChange:()=>null,label:"\uC720\uB3C4\uC81C",containerStyle:{marginRight:24}})]}),n(R,{children:[e(W,{children:"\uD2B9\uAE30\uC0AC\uD56D"}),e(Y,{children:s?.remark})]}),e(zt,{id:s?.id,type:s?.type,mutate:g})]})]}),!p&&n(fe,{style:{textAlign:"right"},children:[D(l).format("YY.MM.DD"),e("br",{}),D(l).format("HH:mm")]})]})]})};const Ot=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`,It=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`,Ft=t.img`
  width: 34px;
  height: 34px;
  margin: 0 10px 0 0;
  border: solid 1px #e3e3e3;
  border-radius: 17px;
`,$t=t.div`
  display: flex;
  flex-direction: column;
`,Ut=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #777;
  margin-bottom: 6px;
`,Nt=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #000;
`,Rt=t.div`
  display: flex;
  align-items: flex-end;
`,Wt=t.div`
  display: flex;
  flex-direction: column;
  min-width: 404px;
  padding: 20px;
  border-radius: 20px;

  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  margin-right: 6px;

  ${({isMyChat:i})=>i?T`
          border-top-right-radius: 0;
          background-color: rgba(37, 143, 255, 0.04); ;
        `:T`
          border-top-left-radius: 0;
          background-color: #f2f2f2;
        `}
`,fe=t.span`
  font-size: 11px;
  line-height: 1.27;
  text-align: left;
  color: #777;
  margin-right: 10px;
`,Yt=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,jt=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,Pt=t.div`
  display: flex;
  align-items: center;
`,Ht=t.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: right;
  color: #000;
  margin-right: 6px;
`,qt=t.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: right;
  color: #258fff;
`,Vt=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 14px;
  border-radius: 6px;
  background-color: #fff;
`,R=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,W=t.span`
  min-width: 47px;
  margin-right: 14px;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #999;
`,Y=t.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #1f1d1d;
`,Xt=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,Gt=t.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: right;
  color: #1f1d1d;
`,Kt=t.div`
  display: flex;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 16px;
`,me=t.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.36px;
  text-align: left;
  color: #258fff;
  margin-bottom: 6px;
`,Qt=t(me)`
  color: #ef0000;
`;var Jt=({open:i,onClose:c,data:u})=>{const[f,d]=r.exports.useState(""),[s,l]=r.exports.useState(!1),[p,g]=r.exports.useState(),C=r.exports.useMemo(()=>u?u.filter(a=>a?.name?.includes(f)):[],[u,f]);return n(Ge,{open:i,onClose:c,children:[e(Ke,{open:s,onClose:()=>l(!1),data:p,companyName:u?.company?.name}),n(Zt,{children:[e(en,{children:e(tn,{src:b("../assets/ic-del.svg"),onClick:c})}),e(nn,{children:"\uD604\uC7A5 \uBA64\uBC84"}),e(on,{children:e(he,{placeholder:"\uC774\uB984 \uAC80\uC0C9",value:f,onChange:a=>d(a.target.value)})}),n(rn,{children:["\uD604\uC7A5 \uBA64\uBC84(",u?.length,")"]}),C.length>0&&e(sn,{}),e(an,{children:C?.map(a=>n(ln,{onClick:()=>{l(!0),g(a)},children:[e(cn,{src:b("../assets/default-profile.jpeg")}),n(dn,{children:[e(pn,{children:a?.company?.name}),n(un,{children:[a?.name," ",e("b",{children:a?.position})]})]})]}))})]})]})};const Zt=t.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
`,en=t.div`
  display: flex;
  padding: 30px 30px 6px 30px;
  justify-content: flex-end;
`,tn=t.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`,nn=t.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
  margin-bottom: 30px;
`,on=t.div`
  width: 100%;
  padding: 0px 40px 30px 40px;
`,rn=t.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-left: 40px;
  margin-bottom: 14px;
`,sn=t.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #c7c7c7;
`,an=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ln=t.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  &:not(:last-child) {
    border-bottom: 1px solid #f2f2f2;
  }
  cursor: pointer;
`,cn=t.img`
  width: 44px;
  height: 44px;
  margin: 0 14px 0 0;
  border: solid 1px #e3e3e3;
  border-radius: 22px;
`,dn=t.div`
  display: flex;
  flex-direction: column;
`,pn=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #777;
  margin-bottom: 8px;
`,un=t.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;

  & > b {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
    text-align: left;
    color: #000;
    margin-left: 2px;
  }
`;var fn=({messages:i,members:c,isChatLoading:u,mutate:f,mutateMessages:d,chatRoomId:s,selectedChatRoomInfo:l,setSelectedChatRoomInfo:p,previousChatRoomId:g})=>{const C=He(),a=_(),[x,y]=r.exports.useState(!1),w=Re(),m=Xe(),{data:h=[],isLoading:M,refetch:F}=bt(m),[A,O]=r.exports.useState("");r.exports.useEffect(()=>{h.sort((o,B)=>B.id-o.id)},[h]);const Be=r.exports.useMemo(()=>h?h.filter(o=>o?.[a?"factory_space":"field_space"]?.name?.includes(A)):[],[h,A]),[z,be]=r.exports.useState(null),I=r.exports.useRef(null),[$,j]=r.exports.useState(""),[J,Z]=r.exports.useState(!1),[De,ee]=r.exports.useState(!1),[we,P]=r.exports.useState(!1),[Ae,H]=r.exports.useState(!1),[te,U]=r.exports.useState(!1),S=r.exports.useMemo(()=>l?.is_closed,[l]);r.exports.useEffect(()=>{const o=h?.filter?.(B=>B?.id===l?.id);if(x===!1||o?.length===0)if(h.length>0)if(C.state?.id!==void 0){const B=h?.filter(oe=>oe.id===C.state?.id)?.[0]||h?.[0];p(B)}else{const B=h?.[0];p(B)}else p(null);else p(o?.[0])},[h]),r.exports.useEffect(()=>{j(""),y(!1)},[s]);const q=o=>{I.current&&(o||!o&&I.current.scrollTop>=0)&&(I.current.scrollTop=I.current.scrollHeight)};r.exports.useEffect(()=>{q(x),x||y(!0)},[i,x]);const ne=async()=>{if($.length>0){const o=$;j(""),d(B=>[{content:o,created_at:new Date,data:null,send_user:w,type:"TEXT"},...B],!1),await L.post(`/chats/${s}`,{type:"TEXT",content:o,data:null}),d(),q(!0),f()}};r.exports.useEffect(()=>{const o=We(qe(),{query:"",transports:["websocket"],autoConnect:!0});return o.on("connect",()=>{o.on("success",function(){}),o.on("state",function(B){}),o.on("chat_message",function(B){JSON.stringify(B)?.id&&(d(ke=>[{content:$,created_at:new Date,data:null,send_user:w,type:"TEXT"},...ke],!1),q(!1),f())})}),be(o),()=>{z?.disconnect?.()}},[]),r.exports.useEffect(()=>{z!==null&&z.emit("/chats/join",{id:s}),z!==null&&g!==null&&z.emit("/chats/leave",{id:g})},[z,s]),r.exports.useEffect(()=>{},[i]);const Se=async()=>{if(!te)try{U(!0),await L.post(`/estimations/${l?.id}/close`),await F()}catch(o){console.log(o)}finally{P(!1),U(!1)}},ve=async()=>{if(!te)try{U(!0),await L.delete(`/estimations/${l?.id}/close`),await F()}catch(o){console.log(o)}finally{H(!1),U(!1)}};return M?null:n(xn,{children:[n(gn,{children:[n(hn,{children:[n(mn,{children:[a?"\uAC70\uB798\uC5C5\uCCB4":"\uAC70\uB798\uD604\uC7A5","(",h.length,")"]}),e(he,{placeholder:a?"\uC5C5\uCCB4\uBA85\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694":"\uD604\uC7A5\uBA85\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",value:A,onChange:o=>O(o.target.value)})]}),e(yn,{children:Be.map(o=>e(Dt,{active:o.id===l?.id,name:o?.[a?"factory_space":"field_space"]?.name,saleUserName:o?.[a?"factory_space":"field_space"]?.site_user?.name,saleUserPosition:o?.[a?"factory_space":"field_space"]?.site_user?.position,companyName:o?.[a?"factory_space":"field_space"]?.company?.name,totalAmount:1200,onClick:()=>p(o)},o.id))})]}),e(Cn,{children:!u&&s!==null&&n(Ve,{children:[n(Bn,{children:[e(bn,{children:l?.[a?"factory_space":"field_space"]?.name}),n(ye,{style:S?{borderColor:"#e3e3e3",color:"#e3e3e3"}:{},onClick:S?()=>null:()=>Z(!0),children:["\uBB3C\uB7C9\uBC30\uC815 ",a?"":"\uC694\uCCAD"]}),a&&e(wn,{active:!S,onClick:S?()=>H(!0):()=>P(!0),children:S?"\uD604\uC7A5\uBCF5\uC6D0":"\uD604\uC7A5\uB9C8\uAC10"}),n(Dn,{children:[n(v,{size:E.SMALL,type:k.GRAY_BLACK,icon:"ic-people",containerStyle:{width:"auto",marginRight:20},onClick:()=>ee(!0),children:["\uBA64\uBC84\uBCF4\uAE30(",c.length,")"]}),e(v,{size:E.SMALL,type:k.OUTLINE,icon:"ic-add-person",containerStyle:{width:"auto",marginRight:10},children:"\uCD08\uB300\uD558\uAE30"}),e(v,{size:E.SMALL,type:k.BLACK,containerStyle:{width:"auto",height:44,marginRight:24},children:"\uACF5\uC7A5\uC815\uBCF4"}),e(G,{src:b("../assets/ic-search-small.svg")}),e(G,{src:b("../assets/ic-setting.svg")}),e(G,{src:b("../assets/ic-out.svg")})]})]}),S&&e(Tn,{children:e(_n,{children:"\uD604\uC7A5\uC774 \uB9C8\uAC10\uB418\uC5C8\uC2B5\uB2C8\uB2E4."})}),e(An,{ref:I,children:i.map(o=>o.type==="TEXT"?e(vt,{companyName:o?.send_user?.company?.name,userName:o?.send_user?.name,userPosition:o?.send_user?.company?.position,content:o?.content,sendAt:o?.created_at,isMyChat:o?.send_user?.id===w?.id}):e(Lt,{type:o?.type,chatRoomData:l,companyName:o?.send_user?.company?.name,userName:o?.send_user?.name,userPosition:o?.send_user?.company?.position,data:o?.data,sendAt:o?.created_at,isMyChat:o?.send_user?.id===w?.id,mutate:()=>{f(),d()}}))}),n(Sn,{children:[e(vn,{src:b("../assets/ic-plus-rounded-square.svg")}),n(kn,{style:S?{backgroundColor:"#e3e3e3"}:{},children:[e(En,{disabled:S,value:$,onChange:o=>j(o.target.value),onKeyPress:o=>o.key==="Enter"?ne():null,placeholder:S?"\uD604\uC7A5\uC774 \uB9C8\uAC10\uB418\uC5B4 \uCC44\uD305\uC774 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.":""}),e(Mn,{src:b(`../assets/ic-send${S?"-disabled":""}.svg`),onClick:ne})]})]})]})}),J&&e($e,{open:J,onClose:()=>Z(!1),id:l?.id||0,name:l?.[a?"factory_space":"field_space"]?.name||"",address:l?.[a?"factory_space":"field_space"]?.basic_address||"",percent:l?.percent||0,revalidate:()=>{d(),f()}}),c?.length>0&&e(Jt,{open:De,onClose:()=>ee(!1),data:c}),e(Q,{content:`\uD604\uC7A5 \uB9C8\uAC10\uCC98\uB9AC\uB97C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
\uD604\uC7A5\uC744 \uB9C8\uAC10\uD558\uBA74 \uB354\uC774\uC0C1 \uC8FC\uBB38 \uCC44\uD305\uC740 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.`,submitText:"\uD604\uC7A5\uB9C8\uAC10",open:we,onSubmit:Se,onClose:()=>P(!1)}),e(Q,{content:`\uD604\uC7A5 \uBCF5\uC6D0\uCC98\uB9AC\uB97C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
\uD604\uC7A5\uC744 \uBCF5\uC6D0\uD558\uBA74 \uC6D0 \uC0C1\uD0DC\uB85C \uBCF5\uC6D0 \uD6C4 \uC774\uC6A9\uAC00\uB2A5\uD569\uB2C8\uB2E4.`,submitText:"\uD604\uC7A5\uBCF5\uC6D0",open:Ae,onSubmit:ve,onClose:()=>H(!1)})]})};const xn=t.div`
  display: flex;
  background-color: white;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
  height: 686px;
  max-height: 686px;
`,gn=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border-right: 1px solid #e3e3e3;
`,Cn=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,hn=t.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`,mn=t.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
  margin-bottom: 14px;
`,yn=t.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`,Bn=t.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 30px;
  border-bottom: 1px solid #e3e3e3;
`,bn=t.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-right: 20px;
`,Dn=t.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`,ye=t.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 14px 8px 15px;
  border-radius: 18px;
  border: solid 1px #4490f7;
  background-color: #fff;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #258fff;

  margin-right: 10px;

  cursor: pointer;
  user-select: none;
`,wn=t(ye)`
  margin-right: 0;

  ${({active:i})=>i?T`
          border-color: #ef0000;
          color: #ef0000;
        `:T`
          border-color: #000;
          color: #000;
        `}
`,G=t.img`
  width: 20px;
  height: 20px;
  object-fit: contain;

  cursor: pointer;
  user-select: none;

  &:not(:last-child) {
    margin-right: 14px;
  }
`,An=t.div`
  display: flex;
  position: relative;
  flex-direction: column-reverse;
  width: 100%;
  flex: 1;
  padding: 20px 30px;
  overflow-y: auto;
  overscroll-behavior-y: contain;
`,Sn=t.div`
  display: flex;
  align-items: center;
  padding: 12px 30px;
  border-top: 1px solid #e3e3e3;
`,vn=t.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-right: 14px;
  cursor: pointer;
`,kn=t.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 25px;
  border: solid 1px #777;
  background-color: #fff;
`,En=t.input`
  padding: 14px 30px;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`,Mn=t.img`
  width: 26px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
  user-select: none;
`,Tn=t.div`
  display: block;
  width: 100%;
  padding: 19px 0;
  background-color: #999;
  top: 0;
  left: 0;
`,_n=t.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: center;
  color: #fff;
`;var Qn=()=>{const[i,c]=r.exports.useState(null),u=r.exports.useMemo(()=>i?i?.chat_room_id:null,[i]),f=Ye(u),{data:{messages:d,members:s},isLoading:l,mutateMessages:p}=je(u),[g,C]=r.exports.useState([]),{data:a,refetch:x}=Ue(g?.[0],g?.[g.length-1]);return e(Qe,{children:n(zn,{children:[e(pt,{assignments:a,mutate:x,dates:g,setDates:C,mutateMessages:p}),e(fn,{messages:d,members:s,isChatLoading:l,mutate:x,mutateMessages:p,chatRoomId:u,selectedChatRoomInfo:i,setSelectedChatRoomInfo:c,previousChatRoomId:f})]})})};const zn=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 63px 60px;
`;export{Qn as default};
