import{l as y,u as F,r as t,j as a,a as u,n as s}from"./index.fa23706f.js";import{A as E}from"./AuthLayout.b7197391.js";import{I as m}from"./Input.367ebe3c.js";import{B as M,a as d}from"./Button.2ebe35cd.js";import{I as c}from"./ImgModal.aa482c68.js";import{H as g}from"./HelperTxt.e1964c07.js";import{u as b}from"./useWindowSize.c6259e85.js";import{m as v}from"./Header.8f74d7dd.js";import"./Modal.5ea91f83.js";var W=()=>{y();const h=F(),{width:C}=b(),[e,x]=t.exports.useState(""),[o,D]=t.exports.useState(""),i=t.exports.useMemo(()=>e&&o,[e,o]),[r,S]=t.exports.useState(!1),[B,A]=t.exports.useState(!1),l=()=>{S(!r)},p=()=>{A(!B)},f=()=>{h("/auth/login")};return a(E,{children:[a(w,{children:[u(I,{style:C>360?{}:{display:"none"},children:"\uC774\uBA54\uC77C \uCC3E\uAE30"}),a(T,{children:[u(g,{helperTxt:`\uBCF8\uC778\uC778\uC99D \uBC1B\uC73C\uC2E0 \uC815\uBCF4\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694. 
 SMS\uB85C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.`,containerStyle:C>360?{display:"none"}:{marginBottom:20}}),u(m,{label:"\uC774\uB984",type:"text",placeholder:"\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",value:e,onChange:n=>x(n.target.value),containerStyle:C>360?{marginBottom:34}:{marginBottom:24},inputStyle:C>360?{marginBottom:8}:{marginBottom:0},errorMessageStyle:{display:"none"}}),u(m,{label:"\uD734\uB300\uD3F0 \uBC88\uD638",placeholder:"\uD734\uB300\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694 (\uBC88\uD638\uB9CC \uC785\uB825)",type:"text",value:o,onChange:n=>D(n.target.value),containerStyle:{marginBottom:14}}),u(g,{helperTxt:`\uBCF8\uC778\uC778\uC99D \uBC1B\uC73C\uC2E0 \uC815\uBCF4\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694. 
 SMS\uB85C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.`,containerStyle:C>360?{marginBottom:30}:{display:"none"}}),u(M,{type:i?d.PRIMARY:d.GRAY,onClick:i?l:p,children:"SMS\uB85C \uC774\uBA54\uC77C \uC8FC\uC18C \uC804\uC1A1"})]})]}),u(c,{open:r,onClose:l,title:"\uC804\uC1A1\uC644\uB8CC",redContent:"SMS\uB85C \uAC00\uC785\uD558\uC2E0 \uC774\uBA54\uC77C\uC8FC\uC18C\uB97C \uBC1C\uC1A1\uD558\uC600\uC2B5\uB2C8\uB2E4.",imgUrl:"../assets/img-check.png",submitText:"\uB85C\uADF8\uC778\uD558\uAE30",onSubmit:f}),u(c,{open:B,onClose:p,title:"\uD68C\uC6D0 \uC815\uBCF4 \uC5C6\uC74C",redContent:"\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC2DC\uBA74 \uC774\uC6A9\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",imgUrl:"../assets/img-warning.png",submitText:"\uB2E4\uC2DC \uC785\uB825\uD558\uAE30"})]})};const w=s.div`
  width: 100%;
  height: 100%;

  min-height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,I=s.span`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  text-align: left;
  color: #000;
  margin-bottom: 30px;
`,T=s.div`
  width: 100%;
  max-width: 440px;
  padding: 50px 30px;
  border-radius: 20px;
  background-color: #fff;
   /* emotion styled의 경우 */
   ${v({maxWidth:"360px",height:"100%",padding:"40px 20px"})}
`;export{W as default};
