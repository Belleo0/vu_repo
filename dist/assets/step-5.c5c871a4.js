import{u as S,k,l as A,r as s,a as n,j as a,n as o,d as f,z as T}from"./index.fa23706f.js";import{F as _}from"./FieldCreateLayout.e3ef4e23.js";import{T as z}from"./TextModal.458f5750.js";import{u as E}from"./useLocalStorage.e35586a4.js";import"./Header.8f74d7dd.js";import"./Button.2ebe35cd.js";import"./Modal.5ea91f83.js";var Y=()=>{const d=S(),t=k(),h=A(),[x,g]=s.exports.useState(0),[i,p]=s.exports.useState(""),[m,u]=s.exports.useState(!1);let r=!1;const[l,C]=E("@add-construction-field",{remarks:i});s.exports.useEffect(()=>{window.addEventListener("beforeunload",function(e){e.preventDefault(),e.returnValue=""})},[]),s.exports.useEffect(()=>{C(e=>({...e,remarks:i}))},[i]),s.exports.useEffect(()=>{l?.remarks&&p(l.remarks)},[l]),s.exports.useEffect(()=>{console.log(t.state)},[]);const y=()=>{r=!0,f.post("/field-spaces",{name:t.state?.fieldNm,basic_address:t.state?.fieldAddr,detail_address:t.state?.secFieldAddr,latitude:t.state?.position?.latitude,longitude:t.state?.position?.longitude,field_info:{start_at:t.state?.constructionStartDate,end_at:t.state?.constructionEndDate,payment_method:t.state?.paymentType,payment_expire_date:t.state?.maturity,payment_due_date:t.state?.paymentDate,need_amount:t.state?.requirement,remarks:i}}).then(()=>{B()}).catch(()=>r=!1)},v=()=>{d("/add-construction-field/step-4")},b=e=>{const c=e.target.value.length,D=e.target.value;p(D),g(c)},w=()=>{r||y(),u(!1)};async function B(){r=!0;const{data:{result:e}}=await f.get("field-spaces");if(e){const c=e.at(-1);h(T(c)),localStorage.removeItem("@add-construction-field"),d("/supplier-choice")}}return n(_,{children:a(N,{children:[n(z,{open:m,onClose:()=>w(),submitText:"\uD655\uC778",content:"\uAC74\uC124\uD604\uC7A5 \uB4F1\uB85D\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),a(j,{children:[n(L,{children:n(F,{children:"5"})}),n(I,{children:"\uD2B9\uAE30\uC0AC\uD56D"})]}),a(R,{children:[n(M,{children:"\uD2B9\uAE30\uC0AC\uD56D \uC785\uB825 (\uC120\uD0DD)"}),n(O,{value:i,onChange:e=>b(e),maxLength:500}),a(H,{children:[x,"/500"]})]}),a(W,{children:[n(q,{style:{color:"#222222",cursor:"pointer"},onClick:()=>v(),children:"\uC774\uC804"}),n(K,{onClick:()=>{u(!0)},children:"\uC644\uB8CC"})]})]})})};const N=o.div`
  width: 100%;
  height: 100%;
  padding: 60px 0 60px 60px;

  user-select: none;
`,j=o.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 45px;
`,L=o.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`,F=o.div`
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #258fff;
  line-height: 1.5;
`,I=o.div`
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
`,M=o.div`
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
`,R=o.div`
  width: 540px;
  height: 259px;
`,W=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
  margin-top: 349px;
`,K=o.div`
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
`,q=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 500;
  color: #999;
`,O=o.textarea`
  width: 540px;
  height: 200px;
  margin-bottom: 6px;
  padding: 20px;
  border-radius: 6px;
  border: solid 1px #e3e3e3;
  background-color: #fff;
  resize: none;

  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;

  :focus {
    outline: none;
  }
`,H=o.div`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: right;
  color: #999;
`;export{Y as default};
