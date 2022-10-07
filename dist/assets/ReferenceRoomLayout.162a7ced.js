import{H as c,F as l}from"./Header.8f74d7dd.js";import{k as f,u as s,j as n,a as e,n as t}from"./index.fa23706f.js";var d=()=>{const{pathname:o}=f(),i=s();return n(p,{children:[e(x,{children:"\uC790\uB8CC\uC2E4"}),e(r,{className:o==="/reference-room"||o==="/reference-room/info"?"active":"",onClick:()=>{i("/reference-room")},children:e(a,{children:"\uC5C5\uCCB4\uB9AC\uC2A4\uD2B8"})}),e(r,{className:o==="/reference-room/info/price"?"active":"",onClick:()=>{i("/reference-room/info/price")},children:e(a,{children:"\uB808\uBBF8\uCF58 \uB2E8\uAC00\uD45C"})})]})};const p=t.div`
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
`,r=t.div`
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
`;const a=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;

  color: #999;

  .active > & {
    color: #258fff;
  }
`;var b=({children:o})=>n(h,{children:[e(c,{}),n(g,{children:[e(d,{}),n(u,{children:[e(m,{children:o}),e(l,{})]})]})]});const h=t.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`,g=t.div`
  display: flex;
  height: calc(100vh - 80px);
`,u=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  overflow-y: scroll;
`,m=t.div`
  flex: 1;
`;export{b as R};
