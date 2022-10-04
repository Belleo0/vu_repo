import{d as x,u as h,r as l,a as e,j as r,n as t}from"./index.fa23706f.js";import{S as g}from"./ServiceCenterLayout.2827985f.js";import{B as C,a as m}from"./Button.2ebe35cd.js";import{a as y,c as d}from"./Header.8f74d7dd.js";import{u as w,P as B}from"./Pagination.0e52c0b1.js";const v="QUESTIONS_DATA";var S=(o,s)=>y([v,o,s],()=>x.get("/questions",{params:{page:o,limit:s}})),R=()=>{const o=h(),[s,p]=l.exports.useState([]),f=n=>{o(`/service-center/inquiry/${n}`,{state:{questionId:n}})},{data:a=[]}=S(0,9),i=w(s);return l.exports.useEffect(()=>{a?.data&&p(a.data)},[a]),e(g,{children:r(L,{children:[r(T,{children:[e(b,{children:"1:1\uBB38\uC758"}),e(C,{type:m.OUTLINE,containerStyle:q,onClick:()=>o("/service-center/inquiry/new"),children:"\uAE00\uC4F0\uAE30"})]}),r(E,{children:[e(F,{children:"\uBC88\uD638"}),e(N,{children:"\uC81C\uBAA9"}),e(u,{children:"\uB4F1\uB85D\uC77C"}),e(u,{children:"\uB2F5\uBCC0\uC5EC\uBD80"})]}),i.items&&i.items.map((n,c)=>r(j,{onClick:()=>f(n.id),children:[e(k,{children:(i.totalCount-c).toString().padStart(2,"0")}),e(A,{children:n.title}),e(D,{children:n.createDate}),e(z,{status:!n.reply,children:n.reply?"\uB2F5\uBCC0\uC644\uB8CC":"\uBBF8\uB2F5\uBCC0"})]},c)),e(B,{limit:i.limit,skip:i.skip,totalCount:i.totalCount,onChangeSkip:i.setSkip,onChangeLimit:i.setLimit})]})})};const L=t.div`
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`,T=t.div`
  display: flex;
  justify-content: space-between;
`,b=t.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`,j=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;

  text-align: center;
`,k=t.div`
  width: 166px;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #777;
`,A=t.div`
  margin-right: auto;
  display: flex;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #222;
`,D=t.div`
  width: 174px;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #777;
`,z=t.div`
  width: 174px;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;

  ${({status:o})=>o?d`
          color: #ef0000;
        `:d`
          color: #258fff;
        `}
`,E=t.div`
  margin-top: 31px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  width: 100%;
  height: 54px;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #f2f2f2;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #222;
`,F=t.div`
  width: 166px;
`,N=t.div`
  margin: auto;
  display: flex;
  justify-content: center;
`,u=t.div`
  width: 174px;
`;t.div`
  width: 174px;
`;const q={width:96,height:42,fontSize:"14px",fontWeight:"500"};export{R as default};
