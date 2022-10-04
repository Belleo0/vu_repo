import{d,u as g,k as x,r as a,a as e,j as o,n as t}from"./index.fa23706f.js";import{S as f}from"./ServiceCenterLayout.2827985f.js";import{B as h,a as u}from"./Button.2ebe35cd.js";import{a as m,h as y}from"./Header.8f74d7dd.js";const v="QUESTIONS_INFO_DATA";var w=i=>m([v,i],()=>d.get(`questions/${i}`),{enabled:!!i}),W=()=>{const i=g(),s=x(),[l,c]=a.exports.useState(1);console.log(l);const p=s.state,{questionId:r}=p,{data:n=[]}=w(r);return console.log(n),a.exports.useEffect(()=>{c(r)},[]),e(f,{children:o(b,{children:[e(S,{children:"1:1\uBB38\uC758"}),o(B,{children:[e(C,{children:n?.title}),o(T,{children:[e(k,{children:y(n.created_at).format("YYYY.MM.DD")}),e(h,{type:u.OUTLINE,containerStyle:A,onClick:()=>i("/service-center/inquiry"),children:"\uBAA9\uB85D\uC73C\uB85C"})]})]}),o(D,{children:[e(I,{children:n?.content}),e(_,{}),n?.reply?e(j,{children:n?.reply}):null]})]})})};const b=t.div`
  width: 100%;
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`,S=t.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 31px;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`,B=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #c7c7c7;
`,C=t.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: center;
  color: #222;

  padding-left: 40px;
`,T=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`,k=t.div`
  font-size: 14px;
  font-weight: normal;
  color: #777;
  letter-spacing: -0.28px;
  margin-right: 30px;
`,A={width:96,height:42,fontSize:"14px",fontWeight:"500"},D=t.div`
  width: 100%;
  min-height: 420px;

  display: flex;
  flex-direction: column;

  background-color: #fff;
  padding: 40px;
  line-height: 1.73;
`,I=t.div`
  font-size: 15px;
  font-weight: normal;
  line-height: 1.73;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;
`,_=t.div`
  display: flex;

  margin: 30px 0 50px 0;
`;t.img`
  width: 120px;
  height: 120px;

  margin-right: 20px;

  border-radius: 12px;
  background-color: #eff7ff;
`;const j=t.div`
  padding: 30px 180px 30px 30px;
  background-color: #f2f2f2;

  width: 100%;

  font-size: 15px;
  font-weight: normal;
  line-height: 1.73;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;

  margin-top: auto;
  margin-bottom: 40px;
`;export{W as default};
