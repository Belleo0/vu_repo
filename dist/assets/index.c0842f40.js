import{r as a,a as e,n as t,j as n,d as ce,u as ae}from"./index.fa23706f.js";import{S as de}from"./SpaceLayout.78f58f87.js";import{S as pe}from"./SpaceBar.f79fac69.js";import{u as ue}from"./useSelectedSpaceId.e98fa8e8.js";import{u as fe}from"./useMySpaceInfo.ce66ec42.js";import{c as xe,a as Ce}from"./convertDuration.9811f74f.js";import{c as I,g as $,h as W}from"./Header.8f74d7dd.js";import{T as he}from"./TextModal.458f5750.js";import{n as me,s as ge}from"./SpecOptions.8ecc5a87.js";import{B as J,R as be,E as Be}from"./EstimationInfoModal.064f35c0.js";import{m as Ae}from"./RemiconUnitPriceTable.c370c807.js";import{B as De}from"./BlackInput.304293be.js";import{B as G}from"./BlackSelect.c26abd5f.js";import{B as H,a as V,b as K}from"./Button.2ebe35cd.js";import{M as le}from"./Modal.5ea91f83.js";import{U as ye}from"./UserInfoModal.f3969620.js";import"./ProfileBox.54d21f9f.js";import"./lodash.4b3a1baf.js";import"./_commonjsHelpers.b8add541.js";import"./useSpaces.40cf6e61.js";import"./onPrint.f762b6e4.js";import"./common.0c17b2bd.js";import"./useFriends.38f9623d.js";var we=({containerStyle:r,value:s="",onChange:x,...d})=>{const[g,B]=a.exports.useState(!1),[u,A]=a.exports.useState(s),D=E=>{A(E.target.value),x&&x(E)};return a.exports.useEffect(()=>{s!==u&&A(s)},[s]),e(Se,{style:r,children:e(_e,{isFocus:g||u!=="",children:e(Ee,{onFocus:()=>B(!0),onBlur:()=>B(!1),value:s,onChange:D,...d})})})};const Se=t.div`
  display: flex;
  flex-direction: column;
`,_e=t.div`
  display: flex;
  width: 100%;
  border-radius: 12px;
  background-color: white;

  ${({isFocus:r})=>r?I`
          border: solid 1px #777;
        `:I`
          border: solid 1px #e3e3e3;
        `}
`,Ee=t.textarea`
  width: 100%;
  padding: 14px 20px;
  background: none;
  border: 0;
  outline: 0;
  resize: none;
  &::placeholder {
    color: #c7c7c7;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
  &:focus {
    /* border-color: #777; */
  }
`,q={value:25,slump:0,norminal_strength:0,price:0};var se=(r=>(r.CASH="\uD604\uAE08",r.NOTE="\uC5B4\uC74C",r.BOND="\uC804\uC790\uCC44\uAD8C",r.CARD="\uAD6C\uB9E4\uCE74\uB4DC",r))(se||{}),ke=({open:r,onClose:s,revalidate:x,data:d})=>{const[g,B]=a.exports.useState(!1),[u,A]=a.exports.useState(""),[D,E]=a.exports.useState(""),[b,k]=a.exports.useState([q,q,q]),[z,Y]=a.exports.useState(!1),v=a.exports.useMemo(()=>!(u===""||b.map(c=>!(c.value===0||c.slump===0||c.norminal_strength===0)).filter(c=>!!c).length!==3),[u,b]),T=(o,c,l)=>{(/\d/.test(l)||l==="")&&k(m=>{const f=Array.from(m).map((p,y)=>y!==o?p:{...p,[c]:parseInt(l===""?"0":l,10)}),O=J.filter(p=>p?p.slump===f[o].slump&&p.mPa===f[o].norminal_strength:f[o].price),Q=typeof O?.[0]?.price=="number"?M(O?.[0]?.price,u):0;return f.map((p,y)=>({...p,price:y===o?Q:p.price}))})},M=(o,c)=>c!==""&&c!=="100"?Math.floor(o*(c/100)/100)*100:o,j=async()=>{if(!!v&&!g)try{B(!0);const o={percent:u,remarks:D};b.forEach((c,l)=>{Object.entries(c).forEach(([m,f])=>{o[`${m}_${l+1}`]=f})}),await ce.post(`/estimations/${d?.id}/submit`,o),await x(),s()}catch(o){console.log(o)}finally{B(!1)}};return a.exports.useEffect(()=>{const c=b.map(l=>J.find(f=>f.slump===l.slump&&f.mPa===l.norminal_strength)?.price||0).map(l=>M(l,u));k(l=>[...l].map((m,f)=>({...m,price:c[f]})))},[u]),e(le,{open:r,onClose:s,children:n(ze,{children:[n(Te,{children:[e(Me,{src:$("../assets/ic-del.svg"),onClick:s}),e(Fe,{children:"\uACAC\uC801 \uC81C\uC548\uD558\uAE30"})]}),n(Ie,{children:[n(Re,{children:[e(We,{children:d?.factory_space?.name}),n(w,{children:[e(S,{children:"\uAC74\uC124\uC0AC"}),e(_,{children:d?.field_space?.company?.name})]}),n(w,{children:[e(S,{children:"\uC8FC\uC18C"}),e(_,{children:d?.field_space?.basic_address})]}),n(w,{children:[e(S,{children:"\uACF5\uC0AC\uAE30\uAC04"}),n(_,{children:[W(d?.field_space?.field_info?.start_at).format("YYYY.MM")," ","~"," ",W(d?.field_space?.field_info?.end_at).format("YYYY.MM")]})]}),n(w,{children:[e(S,{children:"\uC608\uC0C1\uBB3C\uB7C9"}),n(_,{children:[d?.field_space?.field_info?.need_amount?.toLocaleString?.("ko"),"m\xB3"]})]}),n(w,{children:[e(S,{children:"\uB2F4\uB2F9\uC790"}),n(_,{children:[d?.field_space?.site_user?.name," ",d?.field_space?.site_user?.position]})]}),n(w,{children:[e(S,{children:"\uACB0\uC81C\uC870\uAC74"}),n(_,{children:[d?.field_space?.field_info?.payment_due_date,"\uC77C"," ",se?.[d?.field_space?.field_info?.payment_method]]})]}),n(w,{children:[e(S,{children:"\uD2B9\uAE30\uC0AC\uD56D"}),e(_,{children:d?.field_space?.field_info?.remarks})]})]}),n(Ye,{children:[n(ve,{children:[n(Oe,{children:[e(Pe,{children:"\uB2E8\uAC00\uC728"}),e(Ue,{value:u,onChange:o=>{!!Number(o.target.value)&&parseInt(o.target.value,10)<=100?A(o.target.value):o.target.value===""&&A("")}}),e(Ne,{children:"%"})]}),b.map((o,c)=>n(Le,{children:[e(De,{maxLength:2,placeholder:"00",containerStyle:{width:40},value:o.value===0?"":o.value,onChange:l=>T(c,"value",l.target.value)}),e(X,{}),e(G,{placeholder:"00",width:60,value:o.norminal_strength===0?null:o.norminal_strength,onChange:l=>T(c,"norminal_strength",l),options:me}),e(X,{}),e(G,{placeholder:"000",width:68,value:o.slump===0?null:o.slump,onChange:l=>T(c,"slump",l),options:ge}),n($e,{children:[Ae(o.price),"\uC6D0"]})]},c)),e(Ve,{onClick:()=>{Y(!0)},children:"+\uBD80\uC0B0\uC9C0\uC5ED \uB2E8\uAC00\uD45C"})]}),e(je,{children:"\uD2B9\uAE30\uC0AC\uD56D"}),e(we,{containerStyle:{marginBottom:20},value:D,onChange:o=>E(o.target.value)}),e(H,{type:V.OUTLINE,size:K.PRIMARY,icon:"ic-upload-on",iconStyle:{width:24,height:24},containerStyle:{paddingTop:9,paddingBottom:9},onClick:()=>window.alert("TODO : 2\uCC28 \uBC94\uC704\uC785\uB2C8\uB2E4."),children:"\uCCA8\uBD80\uD30C\uC77C \uC5C5\uB85C\uB4DC"})]})]}),e(Qe,{children:e(H,{type:v?V.PRIMARY:V.GRAY,size:K.PRIMARY,onClick:j,children:"\uACAC\uC801 \uC81C\uCD9C\uD558\uAE30"})}),e(be,{open:z,onClose:()=>Y(!1)})]})})};const ze=t.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  max-height: 825px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
`,Ie=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow-y: scroll;
`,Te=t.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 24px 30px;
`,Me=t.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`,Fe=t.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`,Re=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 40px;
  background-color: #f2f2f2;
`,We=t.span`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;
  margin-bottom: 14px;
`,w=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`,S=t.span`
  min-width: 43px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-right: 18px;
`,_=t.span`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,Ye=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 40px;
`,ve=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 30px;
  border-radius: 20px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  margin-bottom: 20px;
`,Oe=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 14px;
`,Pe=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-right: 24px;
`,Ue=t.input`
  width: 86px;
  height: 50px;
  padding: 5px 0;
  border-radius: 6px;
  border: solid 2px #4490f7;

  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.56px;
  text-align: center;
  color: #258fff;

  margin-right: 6px;

  outline: 0;
`,Ne=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,X=t.span`
  display: block;
  width: 4px;
  height: 1px;
  background-color: #000;
  margin: 0px 4px;
`,Le=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`,$e=t.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: normal;
  text-align: right;
  color: #1f1d1d;
  margin-left: auto;
`,Ve=t.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: right;
  color: #c7c7c7;
  text-decoration: underline;
  margin-top: 5px;
  cursor: pointer;
`,je=t.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;
`,Qe=t.div`
  width: 100%;
  padding: 20px 40px 24px;
  box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
`;t.span`
  padding: 6px 14px;
  border-radius: 20px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #000;
  margin-left: 10px;
  cursor: pointer;
`;var qe=({open:r,data:s,onClose:x})=>e(le,{open:r,onClose:x,children:e(He,{children:s&&n(Je,{children:[e(Ge,{children:e(Ke,{children:"\uAC74\uC124\uC0AC \uC815\uBCF4"})}),n(Xe,{children:[e(Ze,{children:s.name}),n(P,{children:[e(U,{children:"\uC8FC\uC18C"}),e(N,{children:s.address})]}),n(P,{children:[e(U,{children:"\uB300\uD45C\uC790"}),e(N,{children:s.ceo_name})]}),n(P,{children:[e(U,{children:"\uC804\uD654\uBC88\uD638"}),e(N,{children:"02-123-4567"})]}),n(P,{children:[e(U,{children:"\uC0AC\uC5C5\uC790\uBC88\uD638"}),e(N,{children:"622-81-24055"})]})]}),n(et,{children:[e(tt,{children:"\uAE30\uBCF8 \uC815\uBCF4"}),n(nt,{children:[e(F,{style:{width:130,height:98},children:"\uC2DC\uACF5\uB2A5\uB825(\uCD5C\uC2E0)"}),e(R,{children:`\uD1A0\uBAA9\uAC74\uCD95\uACF5\uC0AC\uC5C5 : 31,403\uBC31\uB9CC\uC6D0 
 \uD1A0\uBAA9\uACF5\uC0AC\uC5C5 : 14,543\uBC31\uB9CC\uC6D0 
 \uAC74\uCD95\uACF5\uC0AC\uC5C5 : 29,294\uBC31\uB9CC\uC6D0`})]}),n(L,{children:[e(F,{style:{width:130,height:55},children:"\uC8FC\uB825\uC5C5\uC885"}),e(R,{children:"\uD1A0\uBAA9\uAC74\uCD95\uACF5\uC0AC\uC5C5"})]}),n(L,{children:[e(F,{style:{width:130,height:55},children:"\uC8FC\uC694\uACF5\uC0AC\uC9C0\uC5ED"}),e(R,{children:"\uBD80\uC0B0 - \uCDA9\uBD81"})]}),n(L,{children:[e(F,{style:{width:130,height:55},children:`\uACF5\uC0AC\uB300\uC7A5\uD1B5\uBCF4\uC2E4\uC801 
(\uACF5\uACF5, \uBBFC\uAC04, \uD569\uACC4)`}),e(R,{children:"1,143\uC5B5"})]}),n(L,{children:[e(F,{style:{width:130,height:55},children:"\uBD80\uB3C4\uC5EC\uBD80"}),e(R,{children:"\uC815\uC0C1"})]}),e(H,{type:V.PRIMARY,containerStyle:{marginTop:30},onClick:x,children:"\uD655\uC778"})]})]})})});const He=t.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
`,Je=t.div``,Ge=t.div`
  margin: 50px auto 24px auto;
`,Ke=t.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`,Xe=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 40px;
  background-color: #f2f2f2;
`,P=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 11px;
`,Ze=t.div`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  color: #000;

  margin: 14px auto;
`,U=t.div`
  width: 62px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #999;
`,N=t.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #222;
`,et=t.div`
  padding: 24px 40px;
`,tt=t.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;

  margin-bottom: 9px;
`,nt=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`,L=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 1px solid #e3e3e3;
`,F=t.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;

  padding-left: 14px;
`,R=t.div`
  display: flex;
  align-items: center;

  background-color: #ffffff;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  line-height: 1.38;
  text-align: left;
  color: #222;

  padding: 10px 14px 10px 16px;

  white-space: pre-line;
`;t.span`
  font-size: 11px;
  font-weight: normal;
  letter-spacing: -0.22px;
  text-align: left;
  color: #999;
  margin-left: 6px;
`;t.div`
  font-size: 11px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;var it=({data:r=[],revalidate:s})=>{const x=ae(),[d,g]=a.exports.useState(null),[B,u]=a.exports.useState(!1),[A,D]=a.exports.useState(!1),[E,b]=a.exports.useState(null),[k,z]=a.exports.useState(null),[Y,v]=a.exports.useState(null),[T,M]=a.exports.useState(!1),[j,o]=a.exports.useState(!1),[c,l]=a.exports.useState(!1),m=i=>{if(i&&r)return r.find(y=>y.id===i)},f=(i,p)=>{Boolean(p)?x("/order",{state:{id:i}}):u(!0)},O=i=>{b(i),D(!0)},Q=a.exports.useMemo(()=>{if(r)return r.sort((p,y)=>y.id-p.id)},[r]);return n(ot,{children:[n(Z,{children:[e(h,{style:{maxWidth:120},children:"\uC77C\uC790"}),e(h,{style:{maxWidth:180},children:"\uAC74\uC124\uC0AC"}),e(h,{children:"\uAC74\uC124\uD604\uC7A5"}),e(h,{style:{maxWidth:180},children:"\uAC70\uB9AC/\uC2DC\uAC04"}),e(h,{style:{maxWidth:120},children:"\uAC74\uC124\uC0AC \uB2F4\uB2F9\uC790"}),e(h,{style:{maxWidth:180},children:"\uACAC\uC801"}),e(h,{style:{maxWidth:130},children:"\uC0C1\uD0DC"}),e(h,{style:{maxWidth:120},children:"\uC608\uC0C1\uBB3C\uB7C9"}),e(h,{style:{maxWidth:120},children:"\uB808\uBBF8\uCF58\uC0AC \uB2F4\uB2F9\uC790"}),e(h,{style:{maxWidth:120}})]}),Q?.map(i=>n(Z,{children:[e(C,{style:{maxWidth:120},children:e(ut,{children:W(i?.created_at).format("YYYY.MM.DD")})}),e(C,{style:{flexDirection:"column",maxWidth:180},children:e(ee,{onClick:()=>{z(i?.field_space?.company),setTimeout(()=>{M(!0)},250)},children:i?.field_space?.company.name})}),n(C,{style:{flexDirection:"column"},children:[e(ee,{children:i?.field_space?.name}),e(rt,{children:i?.field_space?.basic_address})]}),n(C,{style:{maxWidth:180},children:[n(lt,{children:[xe(i?.direction?.distance),"km"]}),e(st,{}),n(ct,{children:[Ce(i?.direction?.duration),"\uBD84"]})]}),e(C,{style:{maxWidth:120},children:n(at,{onClick:()=>{v(i?.field_space?.company?.name),z(i?.field_space?.site_user),setTimeout(()=>{o(!0)},250)},children:[i?.field_space?.site_user?.name," ",i?.field_space?.site_user?.position]})}),e(C,{style:{maxWidth:180},children:i.status==="REQUESTED"?e(pt,{disabled:!1,onClick:()=>O(i),children:"\uACAC\uC801\uC81C\uCD9C"}):n(dt,{children:[i?.percent,"%"]})}),e(C,{style:{maxWidth:130},children:["REQUESTED","RESPONDED"].includes(i.status)?n(te,{children:[i.status==="REQUESTED"?null:e(oe,{src:$("../assets/ic-price-rate.svg"),onClick:()=>{z(i),g(m(i.id)),l(!0)}}),n(ne,{children:["\uACAC\uC801",i.status==="REQUESTED"?"\uC694\uCCAD \uC811\uC218":"\uC81C\uCD9C"]}),e(ie,{children:W(i.created_at).format("YYYY.MM.DD")})]}):n(te,{children:[e(oe,{src:$("../assets/ic-price-rate.svg"),onClick:()=>{z(i),g(m(i.id)),l(!0)}}),e(ne,{style:{color:"#ff5517",fontSize:15},children:"\uB0A9\uD488\uC0AC \uB4F1\uB85D\uC644\uB8CC"}),e(ie,{children:W(i.created_at).format("YYYY.MM.DD")})]})}),e(C,{style:{maxWidth:120},children:n(ft,{children:[i?.field_space?.field_info?.need_amount?.toLocaleString?.("ko"),"m\xB3"]})}),i.status!=="REQUESTED"?n(C,{style:{flexDirection:"column",maxWidth:120},children:[n(xt,{children:[i?.manager_user?.name," ",i?.manager_user?.position]}),e(Ct,{children:"\uBCC0\uACBD"})]}):e(C,{style:{maxWidth:120}}),e(C,{style:{maxWidth:120},children:n(ht,{active:i?.chat_room_id,onClick:()=>f(i?.id,i?.chat_room_id),children:[e(mt,{src:$(`../assets/ic-chat${i?.chat_room_id?"":"-grey"}.svg`)}),"\uCC44\uD305"]})})]},i?.id)),e(he,{open:B,onClose:()=>u(!1),content:"\uCC44\uD305\uBC29\uC5D0 \uC785\uC7A5\uD558\uB824\uBA74 \uBA3C\uC800 \uCD08\uB300\uB97C \uBC1B\uC544\uC57C \uD569\uB2C8\uB2E4."}),e(ke,{open:A,onClose:()=>{D(!1),b(null)},data:E,revalidate:s}),e(qe,{open:T,onClose:()=>M(!1),data:k}),e(Be,{open:c,onClose:()=>l(!1),data:k,estimation:d}),e(ye,{open:j,onClose:()=>o(!1),data:k,companyName:Y})]})};const ot=t.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
  margin-bottom: 15px;
`,Z=t.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
`,h=t.div`
  flex: 1;
  padding: 17px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #444;
`,C=t.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  padding: 18px;

  font-size: 15px;
  font-weight: 600;

  letter-spacing: -0.5px;
  text-align: left;
  color: #222;
`,ee=t.span`
  display: block;
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: center;
  color: #222;
  margin-bottom: 6px;

  cursor: pointer;
`,rt=t.span`
  display: block;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #777;
`,lt=t.span`
  font-size: 15px;
  font-weight: 600;

  letter-spacing: -0.5px;
  text-align: left;
  color: #000;
`,st=t.span`
  display: block;
  width: 1px;
  height: 10px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`,ct=t.span`
  font-size: 15px;
  letter-spacing: -0.5px;
  text-align: left;
  color: #000;
`,at=t.span`
  display: block;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: center;
  color: #258fff;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
`,dt=t.span`
  display: block;
  font-size: 18px;
  font-weight: 600;

  letter-spacing: -0.36px;
  text-align: left;
  color: #1084ff;
`,pt=t.div`
  width: 80px;
  padding: 12px 15px;
  border-radius: 20px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;

  cursor: pointer;

  ${({disabled:r})=>r?I`
          background-color: #f2f2f2;
          color: #222;
        `:I`
          background-color: #258fff;
          color: #fff;
        `}
`,te=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ne=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #9d9d9d;
  margin-bottom: 8px;
`,ie=t.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,ut=t.span`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #222;
`,ft=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,xt=t.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-align: center;
  color: #222;
  margin-bottom: 6px;
`,Ct=t.span`
  padding: 6px 14px 6px;
  border-radius: 20px;
  border: solid 1px #c7c7c7;
  background-color: #fff;

  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  text-align: center;
  color: #000;
`,ht=t.span`
  display: flex;
  align-items: center;

  padding: 8px 15px;
  border-radius: 20px;
  background-color: #fff;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;

  cursor: pointer;
  user-select: none;

  ${({active:r})=>r?I`
          border: solid 1px #222;
          color: #222;
        `:I`
          border: solid 1px #c7c7c7;
          color: #c7c7c7;
        `}
`,mt=t.img`
  width: 20px;
  height: 20px;
  margin: 0 4px 0 0;
`,oe=t.img`
  width: 24px;
  height: 24px;
  margin-right: 7px;
  cursor: pointer;
`;var Vt=()=>{const r=ue(),{data:{info:s,estimations:x},isLoading:d,estimationMutate:g}=fe(r);return e(de,{children:n(gt,{children:[n(bt,{children:[e(re,{children:"\uACF5\uC7A5\uBA85"}),e(pe,{id:s?.id,name:s?.name,adminUserName:s?.admin_user?.name,siteUserName:s?.site_user?.name,address:s?.basic_address})]}),n(Bt,{children:[e(re,{children:"\uACAC\uC801 \uD604\uD669"}),e(it,{data:x,revalidate:()=>g()})]})]})})};const gt=t.div`
  width: 100%;
  height: 100%;
  padding: 60px;
`,re=t.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 14px;
`,bt=t.div`
  width: 100%;
  margin-bottom: 60px;
`,Bt=t.div`
  width: 100%;
`;export{Vt as default};
