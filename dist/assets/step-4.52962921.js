import{k as K,r as u,u as L,a as e,j as l,F as k,n}from"./index.fa23706f.js";import{F as V}from"./FieldCreateLayout.e3ef4e23.js";import{c as j}from"./Header.8f74d7dd.js";import{B as M}from"./BlackSelect.c26abd5f.js";import{u as q}from"./useLocalStorage.e35586a4.js";const G={[0]:"#000",[1]:"#fff"},J={[0]:"#fff",[1]:"#000000"},Q={[0]:"transparent",[1]:"#c7c7c7"},U={[0]:"#258fff",[1]:"#c7c7c7"},X={[0]:"#258fff",[1]:"#c7c7c7"};var dt=()=>{const s=K(),[C,y]=u.exports.useState(0),[o,A]=u.exports.useState(""),[c,B]=u.exports.useState(""),[r,b]=u.exports.useState(""),[p,E]=u.exports.useState(""),[i,w]=u.exports.useState(null),[d,f]=q("@add-construction-field",{maturity:o,maturityInput:c,paymentDate:r,paymentDateInput:p,paymentType:i}),[F,h]=u.exports.useState(!1),v=L();u.exports.useEffect(()=>{A(d.maturity),B(d.maturityInput),b(d.paymentDate),E(d.paymentDateInput),w(d.paymentType),y(d.step)},[]),u.exports.useEffect(()=>{f(t=>({...t,maturity:o}))},[o]),u.exports.useEffect(()=>{f(t=>({...t,maturityInput:c}))},[c]),u.exports.useEffect(()=>{f(t=>({...t,paymentDate:r}))},[r]),u.exports.useEffect(()=>{f(t=>({...t,step:C}))},[C]),u.exports.useEffect(()=>{f(t=>({...t,paymentDateInput:p}))},[p]),u.exports.useEffect(()=>{f(t=>({...t,paymentType:i}))},[i]);const O=()=>{v("/add-construction-field/step-5",{state:{...s.state,maturity:i==="CASH"?"":o,maturityInput:o?null:c,paymentDate:r,paymentDateInput:r?null:p,paymentType:i}})},R=()=>{v("/add-construction-field/step-3")},S=t=>{t==1?(h(!0),y(1)):(h(!1),y(2))},x=t=>{A(t)},W=t=>{B(t)},g=t=>{b(t)},$=t=>{E(t)},P=[{label:"\uD604\uAE08",value:"CASH"},{label:"\uC5B4\uC74C",value:"NOTE"},{label:"\uC804\uC790\uCC44\uAD8C",value:"BOND"},{label:"\uAD6C\uB9E4\uCE74\uB4DC",value:"CARD"}];return u.exports.useEffect(()=>{window.addEventListener("beforeunload",function(t){t.preventDefault(),t.returnValue=""})},[]),u.exports.useEffect(()=>{C===2&&(i==="CASH"?r!==""&&h(!0):r!==""&&o!==""&&h(!0))},[o,r]),u.exports.useEffect(()=>{C===2&&i!=="CASH"&&p!==""&&c!==""&&h(!0)},[c,p]),e(V,{children:l(Y,{children:[l(Z,{children:[e(_,{children:e(tt,{children:"4"})}),e(et,{children:"\uACB0\uC81C\uC870\uAC74"})]}),l(D,{children:[e(m,{children:"\uACB0\uC81C\uC870\uAC74 \uC120\uD0DD"}),l(ut,{children:[e(H,{type:C==1?0:1,onClick:()=>S(1),children:"\uCD94\uD6C4\uD611\uC758"}),e(H,{type:C>=2?0:1,onClick:()=>S(2),children:"\uACB0\uC81C\uC870\uAC74 \uBCC0\uACBD"})]})]}),e(ot,{children:C==2?l(k,{children:[e(m,{children:"\uACB0\uC81C\uC218\uB2E8"}),e(M,{absoluteStyle:{border:"solid 1px #c7c7c7"},placeholder:"\uC120\uD0DD\uD574 \uC8FC\uC138\uC694.",width:260,options:P,value:i,onChange:t=>w(t)}),i!=="CASH"&&i!==null?l(D,{style:{marginTop:"40px",width:"530px",height:"116px"},children:[e(m,{children:"\uB9CC\uAE30"}),l(T,{children:[e(a,{type:o=="30"?0:1,onClick:()=>x("30"),children:"30\uC77C"}),e(a,{type:o=="60"?0:1,onClick:()=>x("60"),children:"60\uC77C"}),e(a,{type:o=="90"?0:1,onClick:()=>x("90"),children:"90\uC77C"}),e(a,{type:o=="120"?0:1,onClick:()=>x("120"),children:"120\uC77C"}),e(a,{type:o=="150"?0:1,onClick:()=>x("150"),children:"150\uC77C"}),e(a,{type:o=="\uAE30\uD0C0"?0:1,onClick:()=>x("\uAE30\uD0C0"),children:"\uAE30\uD0C0"})]}),e(N,{placeholder:o==="\uAE30\uD0C0"?"\uC22B\uC790\uB9CC \uC785\uB825\uD574 \uC8FC\uC138\uC694":"",value:o==="\uAE30\uD0C0"?c:"",disabled:o!=="\uAE30\uD0C0",type:"number",onChange:t=>W(t.target.value)})]}):null,l(D,{style:{marginTop:"40px",width:"350px",height:"116px"},children:[l(m,{children:["\uC9C0\uAE09\uC2DC\uAE30",e(it,{children:"\uCCAD\uAD6C\uC77C(\uC138\uAE08\uACC4\uC0B0\uC11C \uBC1C\uD589\uC77C)\uB85C\uBD80\uD130"})]}),l(T,{style:{width:"350px"},children:[e(a,{type:r=="30"?0:1,onClick:()=>g("30"),children:"30\uC77C"}),e(a,{type:r=="60"?0:1,onClick:()=>g("60"),children:"60\uC77C"}),e(a,{type:r=="90"?0:1,onClick:()=>g("90"),children:"90\uC77C"}),e(a,{type:r=="\uAE30\uD0C0"?0:1,onClick:()=>g("\uAE30\uD0C0"),children:"\uAE30\uD0C0"})]}),e(N,{placeholder:r==="\uAE30\uD0C0"?"\uC22B\uC790\uB9CC \uC785\uB825\uD574 \uC8FC\uC138\uC694":"",type:"number",value:r==="\uAE30\uD0C0"?p:"",disabled:r!=="\uAE30\uD0C0",onChange:t=>$(t.target.value)})]}),i!=="CASH"?l(lt,{children:["\u2022 \uAC70\uB798\uCC98\uAC00 \uC138\uAE08\uACC4\uC0B0\uC11C\uB97C \uBC1C\uD589 \uD6C4"," ",r!=="\uAE30\uD0C0"?r:p||"\uCCAD\uAD6C","\uC77C \uB4A4,"," ",(()=>{switch(i){case"NOTE":return"\uC5B4\uC74C";case"BOND":return"\uC804\uC790\uCC44\uAD8C";case"CARD":return"\uAD6C\uB9E4\uCE74\uB4DC"}})(),"(",o!=="\uAE30\uD0C0"?o:c||"\uB9CC\uAE30","\uC77C)",i!=="CARD"?"\uC744":"\uB97C"," \uC9C0\uAE09\uD569\uB2C8\uB2E4."]}):null,i==="CASH"?r===""?e(z,{children:"\uACB0\uC81C\uC870\uAC74\uC744 \uBAA8\uB450 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."}):null:r===""||o===""?e(z,{children:"\uACB0\uC81C\uC870\uAC74\uC744 \uBAA8\uB450 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."}):null]}):e(k,{})}),l(nt,{children:[e(I,{style:{color:"#222222",cursor:"pointer"},onClick:()=>R(),children:"\uC774\uC804"}),F?e(rt,{onClick:()=>O(),children:"\uB2E4\uC74C"}):e(I,{children:"\uB2E4\uC74C"})]})]})})};const H=n.div`
  width: 120px;
  height: 42px;
  background-color: #fff;
  padding: 13px 0;
  border-radius: 6px;
  cursor: pointer;

  font-family: Noto Sans KR;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  ${({type:s})=>j`
    color: ${X[s]};
    border: 1px solid ${U[s]};
  `}
`,Y=n.div`
  width: 100%;
  height: 100%;
  padding: 60px 0 60px 60px;

  user-select: none;
`,Z=n.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 45px;
`,_=n.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`,tt=n.div`
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #258fff;
  line-height: 1.5;
`,et=n.div`
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
`,m=n.div`
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
`,D=n.div`
  width: 260px;
  height: 76px;
`,nt=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
  // margin-top: 71px;
`,ot=n.div`
  height: 421px;
  margin-top: 40px;
  margin-bottom: 71px;
`,I=n.div`
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
`,rt=n.div`
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
`,ut=n.div`
  width: 260px;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,N=n.input`
  width: 260px;
  height: 36px;
  margin: 10px 0 0 0;
  padding: 8px 14px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.28px;
    text-align: left;
    color: #c7c7c7;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus::placeholder {
    color: transparent;
  }
`;n.select`
  width: 260px;
  height: 42px;
  padding: 11px 14px 11px 20px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;

  :placeholder {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }

  :focus {
    outline: none;
  }
`;const T=n.div`
  width: 530px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,a=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 36px;
  cursor: pointer;
  border-radius: 18px;

  font-size: 14px;
  font-weight: 500;

  ${({type:s})=>j`
    background-color: ${G[s]};
    border: 1px solid ${Q[s]};
    color: ${J[s]};
  `};
`,it=n.span`
  height: 19px;
  margin: 3px 0 12px 14px;

  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #999;
`,lt=n.div`
  height: 19px;
  margin-top: 14px;

  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #ff4d4d;
`,z=n.div`
  height: 19px;
  margin-top: 10px;

  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #ef0000;
`;export{dt as default};
