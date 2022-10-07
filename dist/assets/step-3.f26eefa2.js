import{r as i,u as d,k as x,a as e,j as r,n as t}from"./index.fa23706f.js";import{F as h}from"./FieldCreateLayout.e3ef4e23.js";import{u as g}from"./useLocalStorage.e35586a4.js";import"./Header.8f74d7dd.js";var I=()=>{const[o,l]=i.exports.useState(),a=d(),s=x(),[p,c]=g("@add-construction-field",{requirement:o}),f=()=>{a("/add-construction-field/step-4",{state:{...s.state,requirement:o}})};i.exports.useEffect(()=>{window.addEventListener("beforeunload",function(n){n.preventDefault(),n.returnValue=""})},[]),i.exports.useEffect(()=>{l(p.requirement)},[]),i.exports.useEffect(()=>{c(n=>({...n,requirement:o}))},[o]);const u=()=>{a("/add-construction-field/step-2")};return e(h,{children:r(m,{children:[r(C,{children:[e(B,{children:e(w,{children:"3"})}),e(y,{children:"\uB808\uBBF8\uCF58 \uC18C\uC694\uB7C9"})]}),r(v,{children:[e(b,{children:"\uB808\uBBF8\uCF58 \uC18C\uC694\uB7C9 \uC785\uB825 (\uC120\uD0DD)"}),r(S,{children:[e(j,{children:"\uB808\uBBF8\uCF58 \uC18C\uC694\uB7C9"}),e(D,{type:"number",onChange:n=>{l(n.target.value)},placeholder:"000",value:o}),e(A,{children:"m\xB3"})]})]}),e(E,{children:"\u2022 \uB808\uBBF8\uCF58\uC0AC\uAC00 \uACAC\uC801\uC744 \uC81C\uCD9C\uD558\uB294\uB370 \uCC38\uACE0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}),r(F,{children:[e(k,{style:{color:"#222222",cursor:"pointer"},onClick:()=>u(),children:"\uC774\uC804"}),e(z,{onClick:()=>f(),children:"\uB2E4\uC74C"})]})]})})};const m=t.div`
  width: 100%;
  height: 100%;
  padding: 60px 0 60px 60px;

  user-select: none;
`,C=t.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 45px;
`,B=t.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`,w=t.div`
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #258fff;
  line-height: 1.5;
`,y=t.div`
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
`,b=t.div`
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
`,v=t.div`
  width: 540px;
  height: 134px;
`,F=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
  margin-top: 441px;
`,k=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 6px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  color: #999;
`,z=t.div`
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
`,S=t.div`
  width: 540px;
  height: 100px;
  margin: 10px 0 14px;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`,j=t.div`
  height: 26px;
  margin: 37px 30px 37px 140px;

  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
`,A=t.div`
  width: 24px;
  height: 26px;
  margin: 37px 0 37px 8px;

  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
`,D=t.input`
  width: 98px;
  height: 50px;
  padding: 5px 0;
  border-radius: 6px;
  border: solid 2px #4490f7;
  background-color: #fff;

  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.56px;
  text-align: center;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.56px;
    color: #c7c7c7;
    text-align: center;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus::placeholder {
    color: transparent;
  }
`,E=t.div`
  height: 19px;
  margin-top: 14px;

  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #999;
  text-align: left;
`;export{I as default};
