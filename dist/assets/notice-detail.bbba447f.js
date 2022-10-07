import{u as c,k as l,r as p,a as e,j as i,n as t}from"./index.fa23706f.js";import{S as d}from"./ServiceCenterLayout.2827985f.js";import{B as f,a as h}from"./Button.2ebe35cd.js";import{u as g}from"./usePostsInfo.5d295eda.js";import{h as x}from"./Header.8f74d7dd.js";var A=()=>{const o=c(),s=l();p.exports.useState(1);const r=s.state,{postId:a}=r,{data:n=[]}=g(a);return console.log(n),e(d,{children:i(u,{children:[e(m,{children:"\uACF5\uC9C0\uC0AC\uD56D"}),i(v,{children:[e(y,{children:n.title}),i(C,{children:[e(w,{children:x(n.created_at).format("YYYY.MM.DD")}),e(f,{type:h.OUTLINE,containerStyle:b,onClick:()=>o("/service-center/notice"),children:"\uBAA9\uB85D\uC73C\uB85C"})]})]}),e(B,{children:e(D,{children:n.content})})]})})};const u=t.div`
  width: 100%;
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`,m=t.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 31px;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`,v=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #c7c7c7;
`,y=t.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: center;
  color: #222;

  padding-left: 40px;
`,C=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`,w=t.div`
  font-size: 14px;
  font-weight: normal;
  color: #777;
  letter-spacing: -0.28px;
  margin-right: 30px;
`,b={width:96,height:42,fontSize:"14px",fontWeight:"500"},B=t.div`
  min-height: 420px;

  display: flex;
  flex-direction: column;

  background-color: #fff;
  padding: 40px;
  line-height: 1.73;
`,D=t.div`
  font-size: 15px;
  font-weight: normal;
  line-height: 1.73;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;

  padding-bottom: 105px;
  white-space: pre-line;
`;export{A as default};
