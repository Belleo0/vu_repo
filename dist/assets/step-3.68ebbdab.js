import{r as i,a as e,j as o,F as N,n as t,d as I,k as ae,u as ue,l as se,c as pe,w as ce,x as le}from"./index.fa23706f.js";import{A as Ce}from"./AuthLayout.b7197391.js";import{I as C}from"./Input.367ebe3c.js";import{g as S,S as L,m as p,c as R}from"./Header.8f74d7dd.js";import{M as de}from"./RegisterTextModal.03ab7a6d.js";import{M as H}from"./Modal.5ea91f83.js";import{D as he}from"./index.6328693c.js";import{u as xe}from"./useWindowSize.c6259e85.js";import"./Button.2ebe35cd.js";import"./_commonjsHelpers.b8add541.js";var ge=({open:a,onClose:c,setChkCompany:u,companyType:g})=>{const[D,d]=i.exports.useState(""),[m,A]=i.exports.useState(),[y,w]=i.exports.useState([]),F=g==="con"?"CONSTRUCTION":"REMICON",v=async()=>{F==="CONSTRUCTION"?await I.get("/companies",{params:{company_type:"CONSTRUCTION",name:D,limit:1e3}}).then(r=>{console.log(r.data.result.data),w(r.data.result.data)}):await I.get("/companies",{params:{company_type:"REMICON",name:D,limit:1e3}}).then(r=>{w(r.data.result.data)})},T=r=>{u(y.find(f=>f.id===r)),c()};function z(r){r.code==="Enter"&&v()}return e(H,{open:a,onClose:c,children:o(fe,{children:[e(ye,{children:e(Be,{src:S("../assets/ic-del.svg"),onClick:c})}),e(De,{children:"\uD68C\uC0AC\uBA85 \uAC80\uC0C9"}),e(Ae,{children:e(L,{placeholder:"\uD68C\uC0AC\uBA85 \uAC80\uC0C9",value:D,onChange:r=>d(r.target.value),onKeyUp:r=>z(r)})}),o(we,{children:["\uBAA9\uB85D(",y?.length,")"]}),y?.length>0&&e(ve,{}),e(be,{children:y.map((r,f)=>e(me,{setCheckedCompanyId:A,checkedCompanyId:m,data:r,companyType:g},f))}),o(Me,{children:[e(Ne,{onClick:()=>{c()},children:"\uCDE8\uC18C"}),e(Oe,{onClick:()=>{T(m)},children:"\uB4F1\uB85D\uD558\uAE30"})]})]})})};const me=({setCheckedCompanyId:a,checkedCompanyId:c,data:u,companyType:g})=>i.exports.useMemo(()=>o(N,{children:[o($e,{onClick:()=>{a(u.id)},children:[u?o(P,{children:[e(Se,{children:u.name}),e(ke,{children:u.address}),o(ze,{children:[e(Fe,{children:"\uB300\uD45C\uC790"}),e(Ie,{}),e(Te,{children:u.ceo_name})]})]}):e(P,{children:e("div",{children:"\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694"})}),e(Ee,{children:c===u.id?e(U,{src:S("../assets/blue_check_ic_on.svg")}):e(U,{src:S("../assets/blue_check_ic_off.svg")})})]}),e(We,{})]}),[c===u.id,u]),fe=t.div`
  width: 440px;
  height: 733px;
  align-self: center;
  background-color: white;
  border-radius: 20px;
`,ye=t.div`
  display: flex;
  padding: 30px 30px 6px 30px;
  justify-content: flex-end;
`,Be=t.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`,De=t.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
  margin-bottom: 30px;
`,Ae=t.div`
  width: 100%;
  padding: 0px 40px 30px 40px;
`,we=t.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-left: 40px;
  margin-bottom: 14px;
`,ve=t.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #c7c7c7;
`,be=t.div`
  height: 419px;
  width: 100%;
  overflow-y: scroll;
`,P=t.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  width: 100%;
  height: 84px;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 40px;
`,ke=t.div`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #777;
`,Se=t.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  color: #000;
`,Fe=t.div`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  color: #999;
`,Te=t.div`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  color: #000;
`,ze=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ie=t.div`
  width: 1px;
  height: 6px;
  margin: 0 6px;
  background-color: #e3e3e3;
`,U=t.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`,$e=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ee=t.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-top: 8px;
  margin-right: 40px;
`,Me=t.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;
`,Oe=t.div`
  width: 170px;
  height: 50px;
  border-radius: 6px;
  background-color: #2580ec;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #fff;
`,Ne=t.div`
  width: 170px;
  height: 50px;
  border-radius: 6px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #222;
`,We=t.div`
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  height: 1px;
  background-color: #f2f2f2;
`,Pe={[1]:"631px",[0]:"797px"},Ue={[1]:"30px 30px 50px",[0]:"40px 30px 50px 30px"},_e={[0]:"#258fff",[1]:"#f2f2f2"},je={[0]:"#258fff",[1]:"#f2f2f2"},Le={[0]:"#fff",[1]:"#999999"},Re={[0]:"pointer",[1]:"default"};var dt=()=>{const a=ae(),c=ue(),u=se(),{width:g}=xe(),D=()=>{c("/auth/register/step-2")},[d,m]=i.exports.useState(),[A,y]=i.exports.useState(""),[w,F]=i.exports.useState(""),[v,T]=i.exports.useState(""),[z,r]=i.exports.useState(""),[f,$]=i.exports.useState(""),[V,W]=i.exports.useState(""),[Z,b]=i.exports.useState(!1),[k,G]=i.exports.useState(!0),[K,E]=i.exports.useState(!1),[q,X]=i.exports.useState(!1),[J,M]=i.exports.useState(!1),[Q,Y]=i.exports.useState(),ee="\uB3D9\uC591\uAC74\uC124",s=a.state?.userType===1?"con":"rem",te=async()=>{s==="con"&&await pe.post("http://52.78.198.181:9998/company_reg.php",{company_type:"CONSTRUCTION",name:ee,address:f}).then(n=>Y(n?.data?.rsult?.id)),await I.post("/auth/register",{company_id:s==="con"?Q:d?.id,signname:a.state?.signname,password:a.state?.password,name:"11",phone:"01000000001",position:A||"",tel:v||""}).then(async()=>{X(!0)}).catch(n=>{console.log(n)})},l=(n,re)=>{switch(re){case"company":!k&&d!==void 0?(m(n),b(()=>!0)):m(n);break;case"zoneCode":r(n);break;case"companyAdress":$(n);break;case"companyAdress2":W(n);break;case"rank":y(n);break;case"department":F(n);break;case"inPhone":T(n);break}};i.exports.useEffect(()=>{k&&m("")},[]);const ne=()=>{G(!0),b(!1),m(""),y(""),F(""),T(""),r(""),$(""),W("")};i.exports.useEffect(()=>{k&&(d?.length>=1&&f?.length>=1?(b(!0),console.log()):b(!1))},[z,f]);const oe=async()=>{await I.post("/auth/login",{username:a?.state?.signname,password:a?.state?.password}).then(async n=>{ce(n.data),await u(le()),c("/my-space")})},ie=()=>{M(!1)};return i.exports.useEffect(()=>{d?.name&&b(!0)},[d]),o(Ce,{children:[e(ge,{open:J,onClose:()=>{ie()},setChkCompany:m,companyType:s}),e(de,{open:q,onClose:()=>oe(),submitText:"\uD655\uC778",content:"\uD68C\uC6D0\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),o(He,{children:[e(Ze,{children:"CONAZ\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4"}),o(Ge,{type:k?0:1,children:[o(Ke,{children:[e(O,{children:"1"}),e(_,{src:S("../assets/ic-dashed.svg")}),e(O,{children:"2"}),e(_,{src:S("../assets/ic-dashed.svg")}),e(O,{children:"3"})]}),e(Ve,{children:"CONAZ\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4"}),e(qe,{children:k&&s==="con"?o(N,{children:[e(H,{open:K,onClose:()=>E(!1),children:e(nt,{style:{width:400,height:600},children:e(he,{onComplete:n=>{console.log(n),r(n.zonecode),$(n.autoRoadAddress||n.roadAddress),E(!1)}})})}),o(x,{style:{margin:0},children:[e(h,{children:s=="con"?"\uD68C\uC0AC\uBA85":"\uB808\uBBF8\uCF58 \uACF5\uC7A5 \uC0C1\uD638\uBA85"}),e(C,{style:{padding:"11px 20px",height:"42px"},onChange:n=>{l(n.target.value,"company")},value:d,containerStyle:{marginTop:"8px"},placeholder:s=="con"?"\uD68C\uC0AC\uBA85\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694":"\uB808\uBBF8\uCF58 \uACF5\uC7A5\uBA85\uC744 \uAC80\uC0C9\uD574 \uC8FC\uC138\uC694"})]}),o(x,{children:[e(h,{children:s=="con"?"\uD68C\uC0AC \uC8FC\uC18C":"\uACF5\uC7A5 \uC8FC\uC18C"}),o(B,{children:[e(C,{style:{padding:"11px 20px",height:"42px"},containerStyle:{width:"250px",height:"42px",margin:0},type:"text",value:z,disabled:!0,placeholder:"\uC6B0\uD3B8\uBC88\uD638 \uAC80\uC0C9"}),e(Qe,{onClick:()=>{E(!0)},children:"\uC6B0\uD3B8\uBC88\uD638 \uC870\uD68C"})]}),e(C,{style:{padding:"11px 20px",height:"42px"},containerStyle:{height:"42px",marginTop:"12px"},type:"text",onChange:n=>{l(n.target.value,"companyAdress")},value:f,placeholder:s=="con"?"\uD68C\uC0AC \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694":"\uACF5\uC7A5 \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694"}),e(C,{style:{padding:"11px 20px",height:"42px"},containerStyle:{height:"42px",marginTop:"12px"},type:"text",onChange:n=>{l(n.target.value,"companyAdress2")},value:V,placeholder:"\uC0C1\uC138 \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694"})]}),o(x,{children:[e(h,{children:"\uC9C1\uC704/\uC9C1\uAE09 (\uC120\uD0DD)"}),e(B,{children:e(C,{style:{padding:"11px 20px",height:"42px"},containerStyle:{width:"380px",height:"42px",margin:0},onChange:n=>{l(n.target.value,"rank")},value:A||"",placeholder:"\uC9C1\uC704/\uC9C1\uAE09\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694"})})]}),o(x,{children:[e(h,{children:"\uBD80\uC11C (\uC120\uD0DD)"}),e(B,{children:e(C,{style:{padding:"11px 20px",height:"42px"},containerStyle:{width:"380px",height:"42px",margin:0},onChange:n=>{l(n.target.value,"department")},value:w||"",placeholder:"\uBD80\uC11C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694"})})]}),o(x,{style:{marginBottom:0},children:[e(h,{children:"\uC0AC\uB0B4 \uC804\uD654\uBC88\uD638 (\uC120\uD0DD)"}),e(B,{children:e(C,{style:{padding:"11px 20px",height:"42px"},containerStyle:{height:"42px",margin:0},onChange:n=>{l(n.target.value,"inPhone")},value:v||"",placeholder:"\uC0AC\uB0B4 \uC804\uD654\uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694 (\uC22B\uC790\uB9CC \uC785\uB825)"})})]})]}):o(N,{children:[o(x,{style:g>360?{marginBottom:"31px"}:{marginBottom:"25px"},children:[e(h,{children:s=="con"?"\uD68C\uC0AC\uBA85":"\uB808\uBBF8\uCF58 \uACF5\uC7A5 \uC0C1\uD638\uBA85"}),e("div",{onClick:()=>{M(!0)},children:e(L,{containerStyle:{border:"1px solid #c7c7c7",backgroundColor:"#fff",marginTop:"8px"},disabled:!0,style:{padding:"11px 20px",height:"42px"},onChange:n=>{l(n.target.value,"company")},value:d?.name,placeholder:s=="con"?"\uD68C\uC0AC\uBA85\uC744 \uAC80\uC0C9\uD574 \uC8FC\uC138\uC694":"\uB808\uBBF8\uCF58 \uACF5\uC7A5\uC744 \uAC80\uC0C9\uD574 \uC8FC\uC138\uC694",onClick:()=>{M(!0)}})}),o(Ye,{children:[e(et,{children:s=="con"?"\uB4F1\uB85D\uB41C \uD68C\uC0AC\uAC00 \uC5C6\uB2E4\uBA74 \uC9C1\uC811 \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694.":"\uACF5\uC7A5\uC774 \uC544\uB2CC \uBCF8\uC0AC(\uC0AC\uBB34\uC18C) \uC18C\uC18D\uC778 \uACBD\uC6B0 \uC9C1\uC811 \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694."}),e(tt,{onClick:()=>ne(),children:g>360?"\uC9C1\uC811 \uB4F1\uB85D\uD558\uAE30":"\uC9C1\uC811 \uB4F1\uB85D"})]})]}),o(x,{style:g>360?{marginTop:"31px"}:{marginTop:"0px"},children:[e(h,{children:"\uC9C1\uC704/\uC9C1\uAE09 (\uC120\uD0DD)"}),e(B,{children:e(C,{style:{padding:"11px 20px",height:"42px"},containerStyle:{width:"380px",height:"42px",margin:0},onChange:n=>{l(n.target.value,"rank")},value:A||"",placeholder:"\uC9C1\uC704/\uC9C1\uAE09\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694"})})]}),o(x,{children:[e(h,{children:"\uBD80\uC11C (\uC120\uD0DD)"}),e(B,{children:e(C,{style:{padding:"11px 20px",height:"42px"},containerStyle:{width:"380px",height:"42px",margin:0},onChange:n=>{l(n.target.value,"department")},value:w||"",placeholder:"\uBD80\uC11C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694"})})]}),o(x,{style:{marginBottom:0},children:[e(h,{children:"\uC0AC\uB0B4 \uC804\uD654\uBC88\uD638 (\uC120\uD0DD)"}),e(B,{children:e(C,{style:{padding:"11px 20px",height:"42px"},containerStyle:{height:"42px",margin:0},onChange:n=>{l(n.target.value,"inPhone")},value:v||"",placeholder:"\uC0AC\uB0B4 \uC804\uD654\uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694 (\uC22B\uC790\uB9CC \uC785\uB825)"})})]})]})}),o(Xe,{children:[e(Je,{type:1,onClick:()=>D(),style:g>360?{display:"none"}:{display:"inline-block"},children:"\uC774\uC804"}),Z?e(j,{type:0,onClick:()=>{te()},children:"\uD68C\uC6D0\uAC00\uC785"}):e(j,{type:1,children:"\uD68C\uC6D0\uAC00\uC785"})]})]})]})]})};const He=t.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${p({maxWidth:"360px",marginTop:"0px"})}
`,Ve=t.div`
  display: none;
  ${p({display:"block",height:"29px",float:"left",fontSize:"20px",fontWeight:"bold",fontStretch:"normal",fontStyle:"normal",letterSpacing:"-0.44px",color:"#000",margin:"12px 70px 46px 20px"})}
`,Ze=t.div`
  height: 32px;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;

  ${p({display:"none"})}
`,Ge=t.div`
  width: 440px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: #fff;
  margin-bottom: 80px;

  ${({type:a})=>R`
    height: ${Pe[a]};
    padding: ${Ue[a]};
  `}

  ${p({maxWidth:"360px",height:"100%",marginTop:"0",marginBottom:"0",padding:"0px"})}
`,Ke=t.span`
  height: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${p({float:"left",margin:"22px 200px 0px 20px"})}
`,O=t.div`
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

  ${p({width:"18px",height:"18px",padding:"4px 6px 1px 6px",fontSize:"10px"})}
`,_=t.img`
  width: 14px;
  height: 1px;
  margin: 0 6px;
`;t.div`
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

  ${p({width:"18px",height:"18px",fontSize:"10px",padding:"3px 5px 3px 5px"})}
`;const qe=t.div`
  width: 380px;
  margin-bottom: 50px;
  border-radius: 6px;
  background-color: #fff;

  ${p({maxWidth:"320px",margin:"22px 20px 76px 20px"})}
`,h=t.span`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #444;

  ${p({display:"block",float:"left",marginBottom:"10px"})}
`,x=t.div`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;
`,Xe=t.div`
  ${p({width:"100%",height:"66px",display:"flex",borderTop:"1px solid #e3e3e3"})}
`,Je=t.div`
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
`,j=t.div`
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
  ${({type:a})=>R`
    background-color: ${_e[a]};
    color: ${Le[a]};
    border: 1px solid ${je[a]};
    cursor: ${Re[a]};
  `}

  ${p({width:"150px",height:"46px",margin:"10px 0px 10px 0px"})}
`,B=t.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 8px;
`,Qe=t.div`
  width: 120px;
  height: 39.5px;
  margin-left: 10px;
  padding: 11px 0;
  border-radius: 6px;
  background-color: #f2f2f2;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;
  line-height: 1.5;
  cursor: pointer;
  background-color: black;
  color: #fff;
`,Ye=t.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`,et=t.div`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
`,tt=t.div`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: right;
  color: #222;
  text-decoration: underline;
  cursor: pointer;
`,nt=t.div``;export{dt as default};
