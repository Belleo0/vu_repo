import{H as a,F as l}from"./Header.8f74d7dd.js";import{k as s,u as d,j as r,a as e,n as t}from"./index.fa23706f.js";var f=()=>{const{pathname:i}=s(),n=d();return r(p,{children:[e(x,{children:"\uACE0\uAC1D\uC13C\uD130"}),e(o,{className:i.includes("notice")?"active":"",onClick:()=>{n("/service-center/notice")},children:e(c,{children:"\uACF5\uC9C0\uC0AC\uD56D"})}),e(o,{className:i.includes("faq")?"active":"",onClick:()=>{n("/service-center/faq")},children:e(c,{children:"FAQ"})}),e(o,{className:i.includes("inquiry")?"active":"",onClick:()=>{n("/service-center/inquiry")},children:e(c,{children:"1:1\uBB38\uC758"})}),e(o,{className:i.includes("event")?"active":"",onClick:()=>{n("/service-center/event")},children:e(c,{children:"\uC774\uBCA4\uD2B8"})})]})};const p=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
  padding: 40px 30px 0 30px;
`,x=t.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 30px;
`,o=t.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: #fff;

  border-bottom: solid 1px #e3e3e3;

  margin-bottom: 16px;
  cursor: pointer;

  &.active {
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: #258fff;
    cursor: default;
  }
`;t.span`
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
`;const c=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;

  color: #999;

  .active > & {
    color: #258fff;
  }
`;var b=({children:i})=>r(h,{children:[e(a,{}),r(u,{children:[e(f,{}),r(g,{children:[e(v,{children:i}),e(l,{})]})]})]});const h=t.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`,u=t.div`
  display: flex;
  height: calc(100vh - 80px);
`,g=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  overflow-y: scroll;
`,v=t.div`
  flex: 1;
`;export{b as S};
