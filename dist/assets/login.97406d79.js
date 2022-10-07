import{l as D,u as w,k as E,r as a,o as v,j as r,a as t,d as S,w as b,x as k,n}from"./index.fa23706f.js";import{A as z}from"./AuthLayout.b7197391.js";import{I as m}from"./Input.367ebe3c.js";import{B as F,a as B}from"./Button.2ebe35cd.js";import{T as M}from"./TextModal.458f5750.js";import{m as T}from"./Header.8f74d7dd.js";import{u as j}from"./useWindowSize.c6259e85.js";import"./Modal.5ea91f83.js";var N=()=>{const c=D(),s=w(),g=E(),{width:o}=j(),[u,x]=a.exports.useState(""),[i,f]=a.exports.useState(""),l=a.exports.useMemo(()=>/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,10}$/.test(u),[u]),p=a.exports.useMemo(()=>!0,[l,i]),[y,d]=a.exports.useState(!1),A=async()=>{try{const{data:e}=await S.post("/auth/login",{username:u,password:i});b(e),await c(k()),await s(g?.state?.redirect_to||"/my-space")}catch(e){console.log(e),d(!0)}};return console.log(o),a.exports.useEffect(()=>{c(v())},[]),r(z,{children:[r(Z,{children:[t(I,{style:o>360?{}:{display:"none"},children:"\uB85C\uADF8\uC778"}),r(L,{children:[t(m,{label:"\uC774\uBA54\uC77C",type:"email",placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",value:u,onChange:e=>x(e.target.value),containerStyle:o>360?{marginBottom:34}:{marginBottom:16},errorMessage:u===""||l?"":"\uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",errorMessageStyle:u===""?{display:"none"}:l?{display:"none"}:{height:17}}),t(m,{label:"\uBE44\uBC00\uBC88\uD638",placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694",type:"password",value:i,onChange:e=>f(e.target.value),inputStyle:o>360?{marginBottom:8}:{marginBottom:0},containerStyle:o>360?{marginBottom:50}:{marginBottom:22}}),t(F,{type:p?B.PRIMARY:B.GRAY,onClick:()=>p?A():null,containerStyle:o>360?{marginBottom:28}:{marginBottom:12},children:"\uB85C\uADF8\uC778"}),r(P,{children:[t(C,{onClick:()=>s("/auth/find-email"),children:"\uC774\uBA54\uC77C \uCC3E\uAE30"}),t(h,{}),t(C,{onClick:()=>s("/auth/find-password"),children:"\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"}),t(h,{}),t(C,{onClick:()=>s("/auth/register/step-0"),children:"\uD68C\uC6D0\uAC00\uC785"})]})]})]}),t(M,{open:y,onClose:()=>d(!1),content:`\uB85C\uADF8\uC778\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.
\uACC4\uC815 \uC815\uBCF4\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.`})]})};const Z=n.div`
  width: 100%;
  height: 100%;

  min-height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,I=n.span`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  text-align: left;
  color: #000;
  margin-bottom: 30px;
`,L=n.div`
  width: 100%;
  max-width: 440px;
  padding: 50px 30px;
  border-radius: 20px;
  background-color: #fff;

  /* emotion styled의 경우 */
  ${T({maxWidth:"360px",height:"100%",padding:"100px 20px"})}
`,P=n.div`
  display: flex;
  justify-content: center;
  width: 100%;
  user-select: none;
`,C=n.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  color: #444;
  cursor: pointer;
  user-select: none;
`,h=n.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 10px;
  background-color: #e3e3e3;
`;export{N as default};
