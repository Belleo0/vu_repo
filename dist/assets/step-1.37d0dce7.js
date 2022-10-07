import{u as S,k as z,r as C,a as e,j as n,n as i}from"./index.fa23706f.js";import{A as T}from"./AuthLayout.b7197391.js";import{g as o,m as r,c as L}from"./Header.8f74d7dd.js";import{u as W}from"./useWindowSize.c6259e85.js";const F={[0]:"#258fff",[1]:"#f2f2f2"},j={[0]:"#258fff",[1]:"#f2f2f2"},M={[0]:"#fff",[1]:"#999999"},R={[0]:"pointer",[1]:"default"};var ie=()=>{const c=S(),A=z(),{width:u}=W(),y=()=>{B&&c("/auth/register/step-2",{state:{...A.state}})},q=()=>{c("/auth/register/step-0")},[l,a]=C.exports.useState(!1),[t,f]=C.exports.useState([]),[B,D]=C.exports.useState(!1),$=p=>{a(!l),p&&f([...t,"require1","require2","other1","other2"]),(t.includes("require1")||t.includes("require2")||t.includes("other1")||t.includes("other2"))&&(f([]),a(!1))},g=(p,m)=>{l&&!m&&a(!1),!l&&t.includes("require1")&&t.includes("require2")&&t.includes("other1")&&t.includes("other2")&&a(!0),m?f([...t,p]):!m&&t.includes(p)&&f(t.filter(E=>E!==p))};return C.exports.useEffect(()=>{t.includes("require1")&&t.includes("require2")?D(!0):D(!1),!l&&t.includes("require1")&&t.includes("require2")&&t.includes("other1")&&t.includes("other2")&&a(!0)},[t]),e(T,{children:n(P,{children:[e(N,{children:"CONAZ\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4"}),n(I,{children:[n(O,{children:[e(G,{children:"1"}),e(b,{src:o("../assets/ic-dashed.svg")}),e(k,{children:"2"}),e(b,{src:o("../assets/ic-dashed.svg")}),e(k,{children:"3"})]}),e(H,{children:"CONAZ\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4"}),e(V,{children:"\uC57D\uAD00\uB3D9\uC758"}),n(Z,{children:[e(x,{children:n(h,{onClick:()=>{$(!l)},children:[e(s,{src:l?o("../assets/check_01_ic_on.svg"):o("../assets/check_01_ic_off.svg")}),e(d,{children:"\uC57D\uAD00 \uC804\uCCB4\uB3D9\uC758"})]})}),e(U,{}),n(x,{children:[n(h,{onClick:()=>g("require1",!t.includes("require1")),children:[t.includes("require1")?e(s,{src:o("../assets/check_01_ic_on.svg")}):e(s,{src:o("../assets/check_01_ic_off.svg")}),e(d,{children:u>360?"\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.":"\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00 \uB3D9\uC758"}),e(w,{children:"(\uD544\uC218)"})]}),e(v,{children:"\uB0B4\uC6A9\uBCF4\uAE30"})]}),n(x,{children:[n(h,{onClick:()=>g("require2",!t.includes("require2")),children:[t.includes("require2")?e(s,{src:o("../assets/check_01_ic_on.svg")}):e(s,{src:o("../assets/check_01_ic_off.svg")}),e(d,{children:u>360?"\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.":"\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758"}),e(w,{style:{marginRight:"27px"},children:"(\uD544\uC218)"})]}),e(v,{children:"\uB0B4\uC6A9\uBCF4\uAE30"})]}),e(x,{children:n(h,{onClick:()=>g("other1",!t.includes("other1")),children:[t.includes("other1")?e(s,{src:o("../assets/check_01_ic_on.svg")}):e(s,{src:o("../assets/check_01_ic_off.svg")}),e(d,{children:u>360?"\uC774\uBCA4\uD2B8/\uB9C8\uCF00\uD305 \uC218\uC2E0\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.":"\uC774\uBCA4\uD2B8/\uB9C8\uCF00\uD305 \uC218\uC2E0 \uB3D9\uC758"}),e(_,{children:"(\uC120\uD0DD)"})]})}),e(x,{children:n(h,{onClick:()=>g("other2",!t.includes("other2")),children:[t.includes("other2")?e(s,{src:o("../assets/check_01_ic_on.svg")}):e(s,{src:o("../assets/check_01_ic_off.svg")}),e(d,{children:u>360?"\uB0B4\uC6A9\uC774 \uB4E4\uC5B4\uAC11\uB2C8\uB2E4.":"\uB0B4\uC6A9"}),e(_,{children:"(\uC120\uD0DD)"})]})})]}),n(J,{children:[e(K,{type:1,onClick:()=>q(),style:u>360?{display:"none"}:{display:"inline-block"},children:"\uC774\uC804"}),e(Q,{type:B?0:1,onClick:()=>y(),children:"\uB2E4\uC74C"})]})]})]})})};i.input`
  label {
    cursor: pointer;
    padding-left: 23px;
    background-repeat: no-repeat;
    background-image: url('../assets/check_01_ic_off.svg');
  }
`;const P=i.div`
  width: 100%;

  min-height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${r({maxWidth:"360px",marginTop:"0px"})}
`,H=i.div`
  display: none;
  ${r({display:"block",height:"29px",float:"left",fontSize:"20px",fontWeight:"bold",fontStretch:"normal",fontStyle:"normal",letterSpacing:"-0.44px",color:"#000",margin:"12px 80px 46px 20px"})}
`,N=i.div`
  height: 32px;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;

  ${r({display:"none"})}
`,I=i.div`
  width: 440px;
  height: 482px;
  margin-top: 30px;
  padding: 30px 30px 50px 30px;
  border-radius: 20px;
  background-color: #fff;

  ${r({maxWidth:"360px",height:"100%",marginTop:"0",padding:"0px"})}
`,O=i.span`
  height: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${r({float:"left",margin:"22px 200px 0px 20px"})}
`,G=i.div`
  width: 24px;
  height: 24px;
  padding: 5px 0;
  background-color: #000;
  border-radius: 50%;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #fff;

  ${r({width:"18px",height:"18px",padding:"4px 6px 1px 6px",fontSize:"10px"})}
`,k=i.div`
  width: 24px;
  height: 24px;
  padding: 4px 0;
  background-color: #fff;
  border-radius: 50%;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #999999;
  border: 1px solid #999;

  ${r({width:"18px",height:"18px",fontSize:"10px",padding:"3px 5px 3px 5px"})}
`,b=i.img`
  width: 14px;
  height: 1px;
  margin: 0 6px;
`,V=i.div`
  margin: 40px 0 8px 0;
  display: 'block';
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;

  ${r({fontSize:"14px",marginBottom:"10px",marginLeft:"20px"})}
`,Z=i.div`
  width: 380px;
  height: 211px;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;

  ${r({maxWidth:"320px",margin:"0px 20px 223px 20px"})}
`,s=i.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
`,d=i.span`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;

  ${r({display:"block",float:"left"})}
`,x=i.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 14px;
`,U=i.div`
  width: 340px;
  height: 1px;
  border-top: 1px solid #f2f2f2;
  margin: 14px 0;

  ${r({width:"280px"})}
`,w=i.span`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #ef0000;
  margin-left: 4px;
`,_=i.span`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
  margin-left: 4px;
`,v=i.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  text-decoration: underline;
  cursor: pointer;
  word-break: keep-all;
`,J=i.div`
  ${r({width:"100%",height:"66px",display:"flex",borderTop:"1px solid #e3e3e3"})}
`,K=i.div`
  width:150px;
  height: 46px;
  margin: 10px 20px 10px 20px;
  border-radius: 6px;
  color: #999999;
  padding-top:14px;
  background-color: #f2f2f2;
  border-color: #f2f2f2;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
`,Q=i.div`
  width: 380px;
  height: 50px;
  padding: 15px 0;
  border-radius: 6px;

  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  ${({type:c})=>L`
    background-color: ${F[c]};
    color: ${M[c]};
    border: 1px solid ${j[c]};
    cursor: ${R[c]};
  `}

  ${r({width:"150px",height:"46px",margin:"10px 0px 10px 0px"})}
`,h=i.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;export{ie as default};
