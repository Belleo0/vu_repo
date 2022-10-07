import{u as w,k as x,y,r as o,a as s,j as d,d as f,n}from"./index.fa23706f.js";import{A as D}from"./AuthLayout.b7197391.js";import{I as l}from"./Input.367ebe3c.js";import{B as A,a as p}from"./Button.2ebe35cd.js";import{u as E}from"./useWindowSize.c6259e85.js";import{m as v}from"./Header.8f74d7dd.js";var I=()=>{const B=w();x();let{key:c}=y();const[e,m]=o.exports.useState(""),[u,g]=o.exports.useState(""),{width:C}=E(),t=o.exports.useMemo(()=>/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/.test(e),[e]),r=o.exports.useMemo(()=>!!(e===u&&t),[e,u]),i=o.exports.useMemo(()=>t&&r,[t,r]),h=async()=>{if(u!==""&&u)try{await f.post(`/auth/find-password/${c}`,{password:u}),window.alert("\uC800\uC7A5\uC644\uB8CC"),B("/auth/login")}catch{window.alert("\uC800\uC7A5 \uC2E4\uD328")}else window.alert("\uC800\uC7A5 \uC2E4\uD328")};return s(D,{children:d(P,{children:[s(S,{style:C>360?{}:{display:"none"},children:"\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"}),d(M,{children:[s(l,{label:"\uC0C8 \uBE44\uBC00\uBC88\uD638",type:"password",placeholder:"\uC601\uBB38\uACFC \uC22B\uC790, \uD2B9\uC218\uBB38\uC790 \uD3EC\uD568 8\uC790 \uC774\uC0C1 \uC785\uB825\uD574 \uC8FC\uC138\uC694",value:e,onChange:a=>m(a.target.value),containerStyle:C>360?{marginBottom:34}:{marginBottom:16},errorMessage:e===""||t?"":"\uC601\uBB38, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790 \uD3EC\uD568 8\uC790 \uC774\uC0C1 \uC785\uB825\uD574 \uC8FC\uC138\uC694",errorMessageStyle:e===""?{display:"none"}:t?{display:"none"}:{height:17}}),s(l,{label:"\uC0C8 \uBE44\uBC00\uBC88\uD638 \uD655\uC778",placeholder:"\uC0C8 \uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD574 \uC8FC\uC138\uC694",type:"password",value:u,onChange:a=>g(a.target.value),containerStyle:C>360?{marginBottom:14}:{marginBottom:24},errorMessage:u===""||r?"":"\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4",errorMessageStyle:u===""?{display:"none"}:r?{display:"none"}:{height:17}}),s(A,{type:i?p.PRIMARY:p.GRAY,onClick:()=>i?h():null,containerStyle:{marginTop:30},children:"\uC7AC\uC124\uC815 \uC644\uB8CC"})]})]})})};const P=n.div`
  width: 100%;
  height: 100%;

  min-height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,S=n.span`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  text-align: left;
  color: #000;
  margin-bottom: 30px;
`,M=n.div`
  width: 100%;
  max-width: 440px;
  padding: 50px 30px;
  border-radius: 20px;
  background-color: #fff;
   /* emotion styled의 경우 */
   ${v({maxWidth:"360px",height:"100%",padding:"40px 20px"})}
`;export{I as default};
