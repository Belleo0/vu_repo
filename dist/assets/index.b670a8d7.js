import{r as u,j as s,a as e,n as a,u as Ge,F as _e,d as x}from"./index.fa23706f.js";import{g as Ce,c as oe,d as He,k as Ke}from"./Header.8f74d7dd.js";import{M as Ne}from"./MypageLayout.8a840471.js";import{I as d}from"./Input.367ebe3c.js";import{B as g,a as C}from"./Button.2ebe35cd.js";import{I as je}from"./ImgModal.aa482c68.js";import{T as L}from"./TextModal.458f5750.js";import"./ProfileBox.54d21f9f.js";import"./Modal.5ea91f83.js";var I=({label:o,redStar:S,containerStyle:D,inputStyle:v,value:P="",name:n,onChange:M,xIcon:k=!0,errorMessage:R,helperMessage:r,...W})=>{const[h,y]=u.exports.useState(!1),[l,Y]=u.exports.useState(P),i=z=>{Y(z.target.value),M&&M(z)};return s(Ue,{style:D,children:[o&&s(ut,{children:[o&&e(Je,{children:o}),S&&e(tt,{children:S})]}),s(Oe,{isFocus:h,children:[e(qe,{onFocus:()=>y(!0),onBlur:()=>y(!1),value:P,name:n,onChange:i,style:v,...W}),r&&e(et,{children:r||"\u3164"}),l!==""&&k?e(Xe,{src:Ce("../assets/ic-circle-x.svg"),onClick:()=>{i({target:{name:n,value:""}})}}):null]}),e(Qe,{children:R||"\u3164"})]})};const Ue=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Oe=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: inherit;

  ${({isFocus:o})=>o?oe`
          border-bottom: solid 1px #777;
        `:oe`
          border-bottom: solid 1px #e3e3e3;
        `}

  margin-bottom: 8px;
`,qe=a.input`
  width: 100%;
  padding: 0 0 28px 0;
  font-size: 16px;
  font-weight: 500;
  background: none;
  border: 0;
  outline: 0;
  &::placeholder {
    color: #999999;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
  &:focus {
    /* border-color */
  }
`,Xe=a.img`
  margin-right: 12px;
  margin-bottom: 20px;
`,Je=a.span`
  font-size: 13px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  margin-bottom: 10px;
`,Qe=a.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #ef0000;
  margin-bottom: 8px;
`,et=a.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #ef0000;
  margin-bottom: 28px;
`,tt=a.span`
  font-size: 14px;
  color: #ef0000;
  margin-left: 2px;
`,ut=a.div`
  display: block;
  margin-bottom: 10px;
`;var At=()=>{const o=He(),S=Ge();let D={name:o?o?.name:"",email:o?o?.signname:"",companyName:o?o?.company.name:"",position:o?o?.position:"",department:o?o?.department:"",tel:o?o?.tel:"",password:o?o?.password:"",phone:o?o?.phone:""};const[v,P]=u.exports.useState(D),[n,M]=u.exports.useState(D.email),[k,R]=u.exports.useState(D.password),[r,W]=u.exports.useState(D.phone),[h,y]=u.exports.useState(""),[l,Y]=u.exports.useState(""),[i,z]=u.exports.useState(""),[T,N]=u.exports.useState(""),[re,ie]=u.exports.useState([]),{name:le,companyName:ce,position:pe,department:de,tel:Be}=v,[A,me]=u.exports.useState(!1),[E,j]=u.exports.useState(!1),[B,Z]=u.exports.useState(!1),[fe,xe]=u.exports.useState(!1),[ge,U]=u.exports.useState(!1),[De,O]=u.exports.useState(!1),[m,he]=u.exports.useState(!1),[w,ye]=u.exports.useState(!1),[b,Ae]=u.exports.useState(!1),[f,q]=u.exports.useState(!1),[Ee,we]=u.exports.useState(!1),[X,G]=u.exports.useState(!1),[J,Q]=u.exports.useState(!1),[ee,_]=u.exports.useState(!1),[te,p]=u.exports.useState(!1),H=u.exports.useMemo(()=>/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,10}$/.test(n),[n]),be=u.exports.useMemo(()=>/^[0-9]/.test(h),[h]),Se=u.exports.useMemo(()=>/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/.test(l),[l]),ue=u.exports.useMemo(()=>/^[0-9]{10,11}$/.test(r),[r]),ve=u.exports.useMemo(()=>/^[0-9]/.test(T),[T]),Ie=u.exports.useMemo(()=>{const t=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;if(l.length>0&&t.test(i)&&l===i)return p(!1),!0},[l,i]),$=t=>{const{name:c,value:Ye}=t.target;P(Ze=>({...Ze,[c]:Ye}))},Fe=()=>{me(!0)},Pe=()=>{ye(!0)},Me=()=>{he(!m)},ke=()=>{G(!X)},Re=()=>{Q(!J)},ze=()=>{_(!ee),S(0)},Te=async()=>{try{const{data:t}=await x.get("/users/check-duplicated-email",{params:{email:n}});if(t?.result===!1){const{data:c}=await x.post("/verifications/email",{email:n});c?.result===!0?(U(!0),j(!0),y(""),Z(!1),p(!0)):window.alert("\uC624\uB958\uBC1C\uC0DD")}else t?.result===!0&&(O(!0),j(!1),y(""),Z(!1),p(!0))}catch{window.alert("\uC624\uB958\uBC1C\uC0DD")}},$e=async()=>{try{const{data:t}=await x.post("/verifications/email/verify",{email:n,key:h});t?.result===!0&&(Z(!0),p(!1),window.alert("\uC778\uC99D\uC131\uACF5!"))}catch{xe(!0),window.alert("\uC778\uC99D\uC2E4\uD328!")}},Le=async()=>{const t=r.replace(/-/g,"");try{const{data:c}=await x.post("/verifications/phone",{phone:t});c?.result===!0&&(Ae(!0),N(""),q(!1),p(!0))}catch(c){console.log(c)}},Ve=async()=>{try{const t=r.replace(/-/g,""),{data:c}=await x.post("/verifications/phone/verify",{phone:t,key:T});c?.result&&(q(!0),p(!1),window.alert("\uC778\uC99D\uC131\uACF5!"))}catch(t){console.log(t),we(!0),window.alert("\uC778\uC99D\uC2E4\uD328!")}},We=async()=>{if(n&&r)try{i!==""&&i?(await x.put("/auth/login",{...v,signname:n,phone:r,password:i}),_(!0)):(await x.put("/auth/login",{...v,signname:n,phone:r}),_(!0))}catch{window.alert("\uC800\uC7A5 \uC2E4\uD328")}else return window.alert("\uC774\uBA54\uC77C, \uBE44\uBC00\uBC88\uD638, \uD578\uB4DC\uD3F0\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694")};return u.exports.useEffect(()=>{(E&&b&&m||E||b||m)&&p(!0)},[E,b,m]),s(Ne,{children:[s(ot,{children:[e(rt,{children:"\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815"}),s(st,{children:[s(at,{children:[s(Ct,{children:[e(it,{src:Ce("../assets/default-profile.jpeg")}),e(Ke,{label:"\uC774\uBBF8\uC9C0\uC218\uC815",images:re,setImages:ie,limit:1,disabledPreview:!0,buttonStyle:pt})]}),s(nt,{children:[e(I,{label:"\uC774\uB984",type:"text",name:"name",value:le,onChange:$,xIcon:!1}),s(F,{children:[e(d,{label:"\uC774\uBA54\uC77C",redStar:"*",type:"email",name:"email",value:n,onChange:t=>M(t.target.value),inputStyle:A?se:ae,errorMessage:n===""||H?"":"\uC774\uBA54\uC77C \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",disabled:!A}),e(g,{type:H&&!E||B&&A?C.BLACK_WHITE:H&&E?C.GRAY:C.GRAY,onClick:A?Te:Fe,containerStyle:K,children:A&&!B?"\uC774\uBA54\uC77C \uC778\uC99D":A&&B?"\uC7AC\uC778\uC99D\uBC1B\uAE30":"\uC774\uBA54\uC77C \uBCC0\uACBD"})]}),E&&s(F,{style:{marginTop:"8px"},children:[e(d,{type:"email",name:"verifyEmailCode",value:h,placeholder:"\uC778\uC99D\uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.",onChange:t=>y(t.target.value),inputStyle:{backgroundColor:"#fff",borderRadius:"6px"},errorMessage:B?"\uC778\uC99D\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4.":fe?"\uC778\uC99D\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"",errorMessageStyle:B?{color:"#00b448"}:{color:"#ef0000"}}),e(g,{type:be&&!B?C.BLACK_WHITE:C.GRAY,onClick:$e,containerStyle:ne,children:B?"\uD655\uC778\uC644\uB8CC":"\uD655\uC778"})]}),e(V,{style:{marginTop:"8px"}}),e(I,{label:"\uD68C\uC0AC\uBA85",type:"text",name:"companyName",value:ce,helperMessage:"\uD68C\uC0AC\uBCC0\uACBD\uC740 \uD0C8\uD1F4 \uD6C4 \uC7AC\uAC00\uC785 \uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",xIcon:!1}),e(I,{label:"\uC9C1\uC704/\uC9C1\uAE09",type:"text",name:"position",value:pe,onChange:$,xIcon:!1}),e(I,{label:"\uBD80\uC11C(\uC120\uD0DD)",type:"text",name:"department",value:de,onChange:$,xIcon:!1}),e(I,{label:"\uC0AC\uB0B4\uBC88\uD638",type:"text",name:"tel",value:Be,onChange:$,xIcon:!1}),!m&&s(F,{children:[e(d,{label:"\uBE44\uBC00\uBC88\uD638",type:"password",name:"password",value:k,onChange:t=>R(t.target.value),inputStyle:{backgroundColor:"#f2f2f2",borderRadius:"6px"},disabled:!m,errorMessage:""}),e(g,{type:C.BLACK_WHITE,containerStyle:K,onClick:Me,children:"\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"})]}),m&&s(_e,{children:[e(d,{label:"\uD604\uC7AC \uBE44\uBC00\uBC88\uD638",redStar:"*",type:"password",placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694",name:"password",value:k,onChange:t=>R(t.target.value),containerStyle:{marginBottom:8}}),e(V,{}),e(d,{label:"\uC0C8 \uBE44\uBC00\uBC88\uD638",redStar:"*",type:"password",name:"newPassword",placeholder:"\uC601\uBB38\uACFC \uC22B\uC790, \uD2B9\uC218\uBB38\uC790 \uD3EC\uD568 8\uC790 \uC774\uC0C1 \uC785\uB825\uD574 \uC8FC\uC138\uC694",value:l,onChange:t=>Y(t.target.value),containerStyle:{marginBottom:8},errorMessage:l===""||Se?"":"\uC601\uBB38, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790 \uD3EC\uD568 8\uC790 \uC774\uC0C1 \uC785\uB825\uD574 \uC8FC\uC138\uC694"}),e(V,{}),e(d,{label:"\uC0C8 \uBE44\uBC00\uBC88\uD638 \uD655\uC778",redStar:"*",type:"password",name:"passwordConfirm",placeholder:"\uC0C8 \uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD574 \uC8FC\uC138\uC694",value:i,onChange:t=>z(t.target.value),containerStyle:{marginBottom:8},errorMessage:i===""||Ie?"":"\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4"})]}),e(V,{style:{marginTop:"8px"}}),s(F,{children:[e(d,{label:"\uD734\uB300\uD3F0\uBC88\uD638",redStar:"*",type:"text",name:"phone",placeholder:"'-' \uC785\uB825 \uC81C\uC678(\uBC88\uD638\uB9CC \uC785\uB825\uD574 \uC8FC\uC138\uC694)",value:r,onChange:t=>W(t.target.value),inputStyle:w?se:ae,maxLength:11,disabled:!w}),e(g,{type:ue&&!b||f&&w?C.BLACK_WHITE:ue&&b?C.GRAY:C.GRAY,onClick:w?Le:Pe,containerStyle:K,children:w&&!f?"\uC778\uC99D\uBC88\uD638 \uC804\uC1A1":w&&f?"\uC7AC\uC778\uC99D\uBC1B\uAE30":"\uD734\uB300\uD3F0\uBC88\uD638 \uBCC0\uACBD"})]}),b&&s(F,{style:{marginTop:"8px"},children:[e(d,{type:"text",name:"verificationNumber",placeholder:"\uC778\uC99D\uBC88\uD638 6\uC790\uB9AC \uC785\uB825",value:T,onChange:t=>N(t.target.value),inputStyle:{backgroundColor:"#fff",borderRadius:"6px"},errorMessage:f?"\uC778\uC99D\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4.":Ee?"\uC778\uC99D\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"",errorMessageStyle:f?{color:"#00b448"}:{color:"#ef0000"}}),e(g,{type:ve&&!f?C.BLACK_WHITE:C.GRAY,containerStyle:ne,onClick:Ve,children:f?"\uD655\uC778\uC644\uB8CC":"\uD655\uC778"})]})]})]}),s(lt,{children:[e(g,{type:C.GRAY_BLACK,containerStyle:{marginRight:"20px"},onClick:Re,children:"\uCDE8\uC18C"}),e(g,{type:te?C.GRAY:C.PRIMARY,onClick:()=>te?null:We(),children:"\uC800\uC7A5"})]}),e(ct,{onClick:ke,children:"\uD68C\uC6D0\uD0C8\uD1F4"})]})]}),e(je,{open:ge,onClose:()=>U(!1),email:n,content:` \uC73C\uB85C 
 \uC774\uBA54\uC77C \uC778\uC99D \uC8FC\uC18C\uAC00 \uBC1C\uC1A1\uB418\uC5C8\uC5B4\uC694.`,redContent:"\uBA54\uC77C\uC744 \uBC1B\uC9C0 \uBABB\uD558\uC168\uB2E4\uBA74 \uC2A4\uD338 \uD3F4\uB354\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.",imgUrl:"../assets/img-email.png"}),e(L,{open:De,onClose:()=>O(!1),submitText:"\uD655\uC778",content:"\uC774\uBBF8 \uAC00\uC785\uD55C \uD68C\uC6D0\uC785\uB2C8\uB2E4."}),e(L,{open:ee,onClose:()=>ze(),submitText:"\uD655\uC778",content:"\uC800\uC7A5\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),e(L,{open:X,onClose:()=>G(!1),submitText:"\uD0C8\uD1F4\uD558\uAE30",content:`\uC815\uB9D0 \uD0C8\uD1F4\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? 
 \uD0C8\uD1F4 \uD6C4 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`,onSubmit:()=>G(!1)}),e(L,{open:J,onClose:()=>Q(!1),submitText:"\uB098\uAC00\uAE30",content:`\uD398\uC774\uC9C0\uB97C \uB098\uAC00\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? 
 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`,onSubmit:()=>S(0)})]})};const ot=a.div`
  width: 650px;
  height: 100%;
  padding: 60px;
`,at=a.div`
  display: flex;
  flex-direction: row;
`,st=a.div`
  display: flex;
  flex-direction: column;
`,nt=a.div`
  width: 370px;
`,Ct=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`,rt=a.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 40px;
`,it=a.img`
  width: 120px;
  height: 120px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;
`,V=a.span`
  display: block;
  width: 100%;
  border-bottom: solid 1px #e3e3e3;
  margin-bottom: 28px;
`,F=a.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`,lt=a.div`
  display: flex;
  margin-top: 60px;
  margin-bottom: 50px;
`,ct=a.span`
  width: 51px;
  height: 20px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;
  border-bottom: 1px solid #999;
  cursor: pointer;
`,ae={backgroundColor:"#f2f2f2",borderRadius:"6px","&: focus":{backgroundColor:"#ffffff"}},se={backgroundColor:"#ffffff"},K={width:"45%",height:"40px",fontSize:"14px",fontWeight:"500",padding:"11px 0",marginLeft:"10px",marginTop:"5px"},ne={width:"45%",height:"40px",fontSize:"14px",fontWeight:"500",padding:"11px 0",marginLeft:"10px",marginBottom:"20px"},pt={backgroundColor:"#ffffff",padding:"8px 11px",marginTop:"14px"};export{At as default};
