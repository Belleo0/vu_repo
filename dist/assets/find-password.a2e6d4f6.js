import{l as g,u as f,r as t,j as a,a as C,d as y,n}from"./index.fa23706f.js";import{A as E}from"./AuthLayout.b7197391.js";import{I as F}from"./Input.367ebe3c.js";import{B as M,a as d}from"./Button.2ebe35cd.js";import{H as p}from"./HelperTxt.e1964c07.js";import{I as c}from"./ImgModal.aa482c68.js";import{u as S}from"./useWindowSize.c6259e85.js";import{m as w}from"./Header.8f74d7dd.js";import"./Modal.5ea91f83.js";var H=()=>{g(),f();const[u,m]=t.exports.useState(""),{width:s}=S(),o=t.exports.useMemo(()=>/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,10}$/.test(u),[u]),D=t.exports.useMemo(()=>o,[o]),[r,B]=t.exports.useState(!1),[i,l]=t.exports.useState(!1),A=()=>{B(!r)},h=()=>{l(!i)},x=async()=>{try{const{data:e}=await y.post("/auth/find-password",{email:u});e?.result===!0&&(console.log("true"),B(!0))}catch{l(!0)}};return a(E,{children:[a(b,{children:[C(v,{style:s>360?{}:{display:"none"},children:"\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"}),a(z,{children:[C(p,{helperTxt:`\uAC00\uC785 \uC2DC \uB4F1\uB85D\uD558\uC2E0 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694. 
 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.`,containerStyle:s>360?{display:"none"}:{marginBottom:20}}),C(F,{label:"\uC774\uBA54\uC77C",type:"email",placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",value:u,onChange:e=>m(e.target.value),containerStyle:{marginBottom:30},errorMessage:u===""||o?"":"\uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",errorMessageStyle:u===""?{display:"none"}:o?{display:"none"}:{height:17}}),C(p,{helperTxt:`\uAC00\uC785 \uC2DC \uB4F1\uB85D\uD558\uC2E0 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694. 
 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.`,containerStyle:s>360?{marginBottom:30}:{display:"none"}}),C(M,{type:D?d.PRIMARY:d.GRAY,onClick:x,children:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD URL \uC804\uC1A1"})]})]}),C(c,{open:r,onClose:A,email:u,content:` \uC73C\uB85C 
 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uAC00 \uBC1C\uC1A1\uB418\uC5C8\uC5B4\uC694.`,redContent:"\uBA54\uC77C\uC744 \uBC1B\uC9C0 \uBABB\uD558\uC168\uB2E4\uBA74 \uC2A4\uD338 \uD3F4\uB354\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.",imgUrl:"../assets/img-email.png"}),C(c,{open:i,onClose:h,title:"\uD68C\uC6D0 \uC815\uBCF4 \uC5C6\uC74C",redContent:"\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC2DC\uBA74 \uC774\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",imgUrl:"../assets/img-check.png",submitText:"\uB2E4\uC2DC \uC785\uB825\uD558\uAE30"})]})};const b=n.div`
  width: 100%;
  height: 100%;

  min-height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,v=n.span`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  text-align: left;
  color: #000;
  margin-bottom: 30px;
`,z=n.div`
  width: 100%;
  max-width: 440px;
  padding: 50px 30px;
  border-radius: 20px;
  background-color: #fff;
  /* emotion styled의 경우 */
  ${w({maxWidth:"360px",height:"100%",padding:"40px 20px"})}
`;export{H as default};
