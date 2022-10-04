import{d as g,u as C,r as s,a as r,j as a,n}from"./index.fa23706f.js";import{S as h}from"./ServiceCenterLayout.2827985f.js";import{a as m,g as f,c as p}from"./Header.8f74d7dd.js";const y="FAQ_DATA";var w=o=>m([y,o],()=>g.get("/faqs",{params:{type:o==="\uC804\uCCB4"?"":o}}));const A=["\uC804\uCCB4","\uC774\uC6A9\uBC29\uBC95","\uAC00\uC785/\uC778\uC99D","\uC8FC\uBB38/\uACB0\uC81C","\uAE30\uD0C0"];var Q=()=>{C();const[o,d]=s.exports.useState("\uC804\uCCB4"),[c,u]=s.exports.useState({}),{data:i=[]}=w("\uC804\uCCB4"),l=s.exports.useMemo(()=>i.data?o==="\uC804\uCCB4"?i.data:i.data.filter(e=>e.type===o):void 0,[o,i]),x=t=>{u(e=>({...e,[t]:!e[t]}))};return r(h,{children:a(b,{children:[r(v,{children:"FAQ"}),r(B,{children:A.map((t,e)=>r(j,{active:o===t,onClick:()=>{d(t)},children:t},e))}),r(k,{children:l&&l?.map((t,e)=>a(D,{children:[a(L,{onClick:()=>x(e),children:[r(S,{children:t.type}),r(z,{children:t.title}),r(F,{src:c[e]?f("../assets/ic-arrow-up.svg"):f("../assets/ic-arrow.svg")})]}),c[e]&&t.content&&r(T,{children:t.content})]},e))})]})})};const b=n.div`
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`,v=n.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`,B=n.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 60px;
`,j=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background-color: #fff;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  ${({active:o})=>o?p`
          background-color: #258fff;
          color: #ffffff;
          border: 1px solid #258fff;
        `:p`
          background-color: #ffffff;
          color: #999999;
          border: 1px solid #e3e3e3;
        `}
`,k=n.div`
  border-top: 1px solid #c7c7c7;
`,L=n.div`
  display: flex;
  align-items: center;

  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
`,S=n.div`
  width: 180px;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #777;
`,z=n.div`
  display: flex;
  padding-left: 40px;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #222;
`,D=n.div``,F=n.img`
  width: 24px;
  height: 24px;
  margin-left: 24px;

  display: flex;
  justify-content: flex-end;

  margin-left: auto;
  margin-right: 38px;
`,T=n.div`
  padding: 30px 180px 30px 217px;
  background-color: #f2f2f2;

  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;

  white-space: pre-line;
`;export{Q as default};
