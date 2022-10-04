import{H as l,F as r}from"./Header.8f74d7dd.js";import{k as c,j as i,a as t,n as e}from"./index.fa23706f.js";const d=[{label:"\uD604\uC7A5\uC815\uBCF4"},{label:"\uACF5\uC0AC\uAE30\uAC04"},{label:"\uB808\uBBF8\uCF58 \uC18C\uC694\uB7C9 (\uC120\uD0DD)"},{label:"\uACB0\uC81C\uC870\uAC74"},{label:"\uD2B9\uAE30\uC0AC\uD56D (\uC120\uD0DD)"}];var s=()=>{const{pathname:n}=c();return i(u,{children:[t(p,{children:"\uAC74\uC124\uD604\uC7A5 \uB4F1\uB85D"}),d.map((a,o)=>i(x,{className:n===`/add-construction-field/step-${o+1}`?"active":"",children:[t(f,{children:o+1}),t(h,{children:a?.label})]}))]})};const u=e.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
  padding: 30px;
`,p=e.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 24px;
`,x=e.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 22px 20px;
  border-radius: 12px;
  background-color: #fff;

  border: solid 1px #e3e3e3;

  margin-bottom: 16px;

  &.active {
    border: solid 1px #4490f7;
  }
`,f=e.span`
  display: flex;
  min-width: 25px;
  min-height: 25px;
  margin: 0 10px 0 0;
  margin-right: 10px;
  border-radius: 17px;

  justify-content: center;
  align-items: center;

  background-color: #e3e3e3;

  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #fff;

  .active > & {
    background-color: #258fff;
  }
`,h=e.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;

  color: #999;

  .active > & {
    color: #258fff;
  }
`;var A=({children:n})=>i(C,{children:[t(l,{}),i(g,{children:[t(s,{}),i(m,{children:[t(b,{children:n}),t(r,{})]})]})]});const C=e.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`,g=e.div`
  display: flex;
  height: calc(100vh - 80px);
`,m=e.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  overflow-y: scroll;
`,b=e.div`
  flex: 1;
`;export{A as F};
