import{c as a,H as c,F as d}from"./Header.8f74d7dd.js";import{u as h,k as u,a as e,n,j as i}from"./index.fa23706f.js";import{P as p}from"./ProfileBox.54d21f9f.js";var C=({sidemenus:t})=>{const r=h(),{pathname:l}=u();return e(f,{children:e(x,{children:t.map((o,s)=>e(m,{children:e(g,{isActive:o.path===l,onClick:()=>o?.onClick?o.onClick():r(o.path),children:o.label},o.path)},s))})})};const f=n.div`
  display: block;
  padding: 30px;
`,x=n.div`
  display: flex;
  flex-direction: column;
`,m=n.div`
  border-bottom: 1px solid #e3e3e3;
  padding: 14px 10px;
`,g=n.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: left;
  cursor: pointer;

  ${({isActive:t})=>t?a`
          color: #258fff;
        `:a`
          color: #999;
        `}
`;var v=()=>i(b,{children:[e(p,{}),e(C,{sidemenus:[{label:"\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815",path:"/mypage"},{label:"\uC870\uC9C1\uAD00\uB9AC",path:"/member"},{label:"\uCE5C\uAD6C\uAD00\uB9AC",path:"/friend"},{label:"\uC54C\uB9BC \uC124\uC815",path:"/notification"}]})]});const b=n.div`
  width: 100%;
  max-width: 380px;
  height: 100%;
`;var S=({children:t})=>i(y,{children:[e(c,{}),i(B,{children:[e(v,{}),i(w,{children:[e(M,{children:t}),e(d,{})]})]})]});const y=n.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`,B=n.div`
  display: flex;
  height: calc(100vh - 80px);
`,w=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  overflow-y: scroll;
`,M=n.div`
  flex: 1;
`;export{S as M};
