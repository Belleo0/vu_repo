import{u as f,r as a,a as e,j as s,n as t}from"./index.fa23706f.js";import{S as u}from"./ServiceCenterLayout.2827985f.js";import{u as x}from"./usePosts.cedb0db1.js";import{u as h,P as g}from"./Pagination.0e52c0b1.js";import"./Header.8f74d7dd.js";var N=()=>{const c=f(),[d,l]=a.exports.useState([]),{data:n=[],refetch:D}=x("NOTICE"),i=h(d),p=o=>{c(`/service-center/notice/${o}`,{state:{postId:o}})};return a.exports.useEffect(()=>{n?.data&&l(n.data)},[n]),e(u,{children:s(m,{children:[e(C,{children:"\uACF5\uC9C0\uC0AC\uD56D"}),s(w,{children:[e(v,{children:"\uBC88\uD638"}),e(L,{children:"\uC81C\uBAA9"}),e(b,{children:"\uB4F1\uB85D\uC77C"})]}),i.items&&i.items.map((o,r)=>s(k,{onClick:()=>p(o.id),children:[e(y,{children:(i.totalCount-r).toString().padStart(2,"0")}),e(S,{children:o.title}),e(j,{children:"2022.09.08"})]},r)),e(g,{limit:i.limit,skip:i.skip,totalCount:i.totalCount,onChangeSkip:i.setSkip,onChangeLimit:i.setLimit})]})})};const m=t.div`
  width: 100%;
  height: 100%;
  padding: 60px 60px 97px 60px;
  user-select: none;
`,C=t.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 31px;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`,w=t.div`
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
`,v=t.div`
  width: 116px;
`,L=t.div`
  width: 986px;
`,b=t.div`
  width: 268px;
`,k=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
`,y=t.div`
  width: 116px;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #777;
`,S=t.div`
  width: 986px;
  padding-left: 40px;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #222;
`,j=t.div`
  width: 268px;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #777;
`;export{N as default};
