import{u as Be,k as ye,r as o,a as t,j as s,d as y,n as r}from"./index.fa23706f.js";import{A as we}from"./AuthLayout.b7197391.js";import{I as x}from"./Input.367ebe3c.js";import{g as J,m as i,c as V}from"./Header.8f74d7dd.js";import{M as De}from"./RegisterTextModal.03ab7a6d.js";import{u as be}from"./useWindowSize.c6259e85.js";import"./Button.2ebe35cd.js";import"./Modal.5ea91f83.js";const X={[0]:"#258fff",[1]:"#f2f2f2"},Se={[0]:"#000000",[1]:"#f2f2f2"},Y={[0]:"#258fff",[1]:"#f2f2f2"},T={[0]:"#fff",[1]:"#999999"},W={[0]:"pointer",[1]:"default"};var Oe=()=>{const n=Be(),_=ye(),{width:l}=be(),ee=()=>{n("/auth/register/step-3",{state:{..._.state,signname:a,password:p,name:g,phone:d}})},te=()=>{n("/auth/register/step-1")},$={chkEmail:/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,chkPhone:/^[0-9\b -]{0,13}$/,chkPw:/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/},[a,oe]=o.exports.useState(""),[P,re]=o.exports.useState(""),[B,z]=o.exports.useState(!1),[F,I]=o.exports.useState(!1),[c,H]=o.exports.useState(!1),[p,ne]=o.exports.useState(""),[C,ae]=o.exports.useState(""),[j,se]=o.exports.useState(!1),[w,A]=o.exports.useState(!1),[g,ie]=o.exports.useState(""),[d,M]=o.exports.useState(""),[D,ue]=o.exports.useState(""),[L,R]=o.exports.useState(!1),[le,pe]=o.exports.useState(!1),[de,q]=o.exports.useState(!1),[b,N]=o.exports.useState(!1),[S,O]=o.exports.useState("1"),[k,Z]=o.exports.useState("1"),[ze,ce]=o.exports.useState(!1),[G,U]=o.exports.useState(!1),h=(e,u)=>{switch(u){case"email":oe(e),a.length>0&&$.chkEmail.test(a)&&z(!0);break;case"emailCode":re(e);break;case"name":ie(e);break;case"password":ne(e),$.chkPw.test(e)&&se(!0);break;case"password2":ae(e),j&&p===e&&A(!0);break;case"phone":M(e),$.chkPhone.test(e)&&(e.length<11?R(!1):(M(e.replace(/-/g,"").replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3")),R(!0)));break;case"phoneCode":ue(e);break}},Ce=async()=>{const e=d.replace(/-/g,"");N(!0),q(!0),await y.post("/verifications/phone",{phone:e}).then(u=>{u.data.result&&(pe(!0),q(!0))})},he=async()=>{const e=d.replace(/-/g,"");await y.post("/verifications/phone/verify",{phone:e,key:D}).then(u=>{u.data.result&&(N(!0),Z("3"))}).catch(()=>{Z("2")})},xe=async()=>{await me()?U(!0):(I(!0),await y.post("/verifications/email",{email:a}).then(u=>{u.data.result&&I(!0)}))},ge=async()=>{await y.post("/verifications/email/verify",{email:a,key:P}).then(e=>{e.data.result&&(H(!0),O("3"))}).catch(()=>{O("2")})};o.exports.useEffect(()=>{(a.length<=0||!a.includes("@")||!a.includes("."))&&(H(!1),z(!1))},[a,c]),o.exports.useEffect(()=>{M(d.replace(/-/g,"").replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3"))},[d,D]),o.exports.useEffect(()=>{p.length>=1&&p===C?A(!0):A(!1)},[p,C]),o.exports.useEffect(()=>{b&&c&&w&&g&&ce(!0)},[b,c,j,w,g]);const fe=()=>{U(!1)},me=async()=>{let e=!1;return await y.get("/users/check-duplicated-email",{params:{email:a}}).then(u=>{e=u?.data.result}),e};return t(we,{children:s(ke,{children:[G?t(De,{open:G,onClose:()=>{fe()},submitText:"\uD655\uC778",content:"\uC774\uBBF8 \uAC00\uC785\uB41C \uC774\uBA54\uC77C\uC785\uB2C8\uB2E4.",wrapperStyle:{height:"240px"}}):null,t(ve,{children:"CONAZ\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4"}),s($e,{children:[s(Pe,{children:[t(K,{children:"1"}),t(Q,{src:J("../assets/ic-dashed.svg")}),t(K,{children:"2"}),t(Q,{src:J("../assets/ic-dashed.svg")}),t(Me,{children:"3"})]}),t(Ee,{children:"CONAZ\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4"}),s(Ae,{children:[s(f,{style:F?{}:{marginBottom:"13px"}&&l>360?{marginBottom:13}:{marginBottom:4},children:[t(E,{children:"\uC774\uBA54\uC77C"}),s(m,{children:[t(x,{containerStyle:{width:"250px",margin:0},style:{padding:"11px 20px"},type:"text",onChange:e=>{h(e.target.value,"email")},value:a,placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",errorMessage:!B&&a.length>0?"\uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4":"",errorMessageStyle:!B&&a.length>0?{marginBottom:16}:{}}),t(v,{type:c||!B?1:0,onClick:()=>{B&&xe()},style:!B&&a.length>0?{marginBottom:33}:{},children:c?"\uC778\uC99D\uC644\uB8CC":"\uC774\uBA54\uC77C \uC778\uC99D"})]})]}),F?t(f,{children:s(m,{style:l>360?{margin:"0 0 14px"}:{marginTop:"-10px",marginBottom:"4px"},children:[t(x,{containerStyle:{width:"250px",margin:0},style:{padding:"11px 20px"},type:"text",onChange:e=>{h(e.target.value,"emailCode")},value:P,errorMessageStyle:S=="2"?{color:"#ef0000"}:S=="3"?{color:"#00b448"}:{},placeholder:"\uC778\uC99D\uBC88\uD638 6\uC790\uB9AC \uC785\uB825",errorMessage:S==="2"?"\uC778\uC99D\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":S==="3"?"\uC778\uC99D\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":""}),t(v,{type:P.length>=1&&!c?0:1,onClick:()=>c?null:ge(),children:"\uD655\uC778"})]})}):null,s(f,{children:[t(E,{children:"\uC774\uB984"}),t(m,{children:t(x,{containerStyle:{width:"380px",margin:0,marginBottom:4},style:{padding:"11px 20px"},type:"text",onChange:e=>{h(e.target.value,"name")},value:g,placeholder:"\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694"})})]}),s(f,{style:{marginBottom:13},children:[t(E,{children:"\uBE44\uBC00\uBC88\uD638"}),s(m,{style:{flexDirection:"column"},children:[t(x,{containerStyle:l>360?{width:"380px",margin:0,height:"42px"}:{width:"320px",marginBottom:2},errorMessageStyle:{display:"none"},style:{padding:"11px 20px"},type:"password",onChange:e=>{h(e.target.value,"password")},value:p,placeholder:"\uC601\uBB38\uACFC \uC22B\uC790, \uD2B9\uC218\uBB38\uC790 \uD3EC\uD568 8\uC790 \uC774\uC0C1 \uC785\uB825\uD574 \uC8FC\uC138\uC694"}),t(x,{containerStyle:l>360?{width:"380px",marginTop:"13px"}:{width:"320px",marginBottom:"4px"},style:{padding:"11px 20px"},type:"password",onChange:e=>{h(e.target.value,"password2")},value:C,placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uD55C\uBC88 \uB354 \uC785\uB825\uD574 \uC8FC\uC138\uC694",errorMessage:!w&&C.length>0?"\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4":"",errorMessageStyle:!w&&C.length>0?{height:17}:{display:"none"}})]})]}),s(f,{style:l>360?{marginBottom:0}:{height:72.5},children:[t(E,{children:"\uD734\uB300\uD3F0 \uBC88\uD638"}),s(m,{children:[t(x,{containerStyle:{width:"250px",margin:0},style:{padding:"11px 20px"},type:"text",onChange:e=>{h(e.target.value,"phone")},value:d,placeholder:l>360?" '-' \uC785\uB825 \uC81C\uC678(\uBC88\uD638\uB9CC \uC785\uB825\uD574 \uC8FC\uC138\uC694)":" '-' \uC785\uB825 \uC81C\uC678(\uC22B\uC790\uB9CC \uC785\uB825)"}),t(v,{type:L?0:1,onClick:()=>L?Ce():null,children:le?"\uC7AC\uC778\uC99D\uBC1B\uAE30":"\uC778\uC99D\uBC88\uD638 \uC804\uC1A1"})]})]}),de?t(f,{children:s(m,{style:{margin:0},children:[t(x,{containerStyle:{width:"250px",margin:0},style:l>360?{padding:"11px 20px"}:{padding:"11px 20px"},type:"text",onChange:e=>{h(e.target.value,"phoneCode")},value:D,placeholder:"\uC778\uC99D\uBC88\uD638 6\uC790\uB9AC \uC785\uB825",errorMessageStyle:k==="2"?{color:"#ef0000"}:k==="3"?{color:"#00b448"}:{},errorMessage:k==="2"?"\uC778\uC99D\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":k==="3"?"\uC778\uC99D\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.":""}),t(v,{type:D?.length>=1&&!b?0:1,onClick:()=>b?null:he(),children:"\uD655\uC778"})]})}):null]}),s(Ve,{children:[t(Te,{type:1,onClick:()=>te(),style:l>360?{display:"none"}:{display:"inline-block"},children:"\uC774\uC804"}),t(We,{type:g&&a&&p&&C&&d?0:1,onClick:()=>g&&a&&p&&C&&d?ee():null,children:"\uB2E4\uC74C"})]})]})]})})};const ke=r.div`
  width: 100%;
  height: 100%;

  margin-top: 150px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${i({maxWidth:"360px",height:"640px",marginBottom:"0",marginTop:"0px"})}
`,Ee=r.div`
  display: none;
  ${i({display:"block",width:"260px",height:"29px",float:"left",fontSize:"20px",fontWeight:"bold",fontStretch:"normal",fontStyle:"normal",letterSpacing:"-0.44px",color:"#000",margin:"12px 70px 46px 20px"})}
`,ve=r.div`
  height: 32px;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;

  ${i({display:"none"})}
`,$e=r.div`
  width: 440px;
  margin-top: 30px;
  padding: 30px 30px 50px 30px;
  border-radius: 20px;
  background-color: #fff;
  ${i({maxWidth:"360px",height:"100%",marginTop:"0px",padding:"1px"})}
`,Pe=r.span`
  height: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${i({float:"left",margin:"22px 200px 0px 20px"})}
`,K=r.div`
  width: 24px;
  height: 24px;
  padding: 5px 0;
  background-color: #000;
  border-radius: 50%;

  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #fff;

  ${i({width:"18px",height:"18px",padding:"4px 6px 1px 6px",fontSize:"10px"})}
`,Q=r.img`
  width: 14px;
  height: 1px;
  margin: 0 6px;
`,Ae=r.div`
  width: 380px;
  margin-bottom: 50px;
  border-radius: 6px;
  background-color: #fff;

  ${i({maxWidth:"320px",margin:"22px 20px 52px 20px"})}
`,E=r.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #444;
  ${i({display:"block",float:"left",marginBottom:"10px"})}
`,f=r.div`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;r.div`
  width: 380px;
  height: 50px;
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;

  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  ${({type:n})=>V`
    background-color: ${X[n]};
    color: ${T[n]};
    border: 1px solid ${Y[n]};
    cursor: ${W[n]};
  `}
`;const m=r.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 4px;
`,v=r.div`
  width: 120px;
  height: 42px;
  margin-top: -5px;
  margin-left: 10px;
  margin-bottom: 16px;
  padding: 11px 0;
  border-radius: 6px;
  background-color: #f2f2f2;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;
  line-height: 1.5;

  ${({type:n})=>V`
    background-color: ${Se[n]};
    color: ${T[n]};
    cursor: ${W[n]};
  `}
`,Me=r.div`
  width: 24px;
  height: 24px;
  padding: 4px 0;
  background-color: #fff;
  border-radius: 50%;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #999999;
  border: 1px solid #999;

  ${i({width:"18px",height:"18px",fontSize:"10px",padding:"3px 5px 3px 5px"})}
`,Ve=r.div`
  ${i({width:"100%",height:"66px",display:"flex",borderTop:"1px solid #e3e3e3"})}
`,Te=r.div`
  width:150px;
  height: 46px;
  margin: 10px 20px 10px 20px;
  border-radius: 6px;
  color: #222222;
  padding-top:14px;
  background-color: #f2f2f2;
  border-color: #f2f2f2;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
`,We=r.div`
  width: 380px;
  height: 50px;
  padding: 15px 0;
  border-radius: 6px;

  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  ${({type:n})=>V`
    background-color: ${X[n]};
    color: ${T[n]};
    border: 1px solid ${Y[n]};
    cursor: ${W[n]};
  `}

  ${i({width:"150px",height:"46px",margin:"10px 0px 10px 0px"})}
`;export{Oe as default};
