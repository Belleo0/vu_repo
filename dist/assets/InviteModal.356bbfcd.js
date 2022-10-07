import{a as e,j as r,n as t,r as c,F as y}from"./index.fa23706f.js";import{g as a,S as k,c as v}from"./Header.8f74d7dd.js";import{B as A}from"./Button.2ebe35cd.js";import{I}from"./Input.367ebe3c.js";import{M as B,b as E,c as S,a as T}from"./Modal.5ea91f83.js";import{u as M}from"./useFriends.38f9623d.js";var z=i=>e(B,{...i,children:r(E,{children:[e(j,{onClick:i.onClose,children:e(W,{src:a("../assets/ic-del.svg")})}),e(F,{children:i?.title}),e(S,{children:i?.content}),e(I,{label:i.label,value:i.value,onChange:i.setValue}),e(T,{children:e(A,{onClick:i?.onSubmit?i.onSubmit:i.onClose,children:i?.submitText||"\uD655\uC778"})})]})});const j=t.div`
  text-align: right;
`,W=t.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`,F=t.div`
  display: block;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #444;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  white-space: pre;
`;var U=({open:i,onClose:u,setChkCompany:o,companyType:h})=>{const[s,p]=c.exports.useState(""),[d,C]=c.exports.useState();c.exports.useState([]);const{data:{friends:l,error:D,refetch:g}}=M();c.exports.useMemo(()=>l.filter(n=>n?.name?.includes(s)),[s]);const f=n=>{o(l.find(x=>x.id===n)),u()};function m(n){n.code}return e(B,{open:i,onClose:u,children:r(_,{children:[e(V,{children:e(N,{src:a("../assets/ic-del.svg"),onClick:u})}),e(O,{children:"\uCD08\uB300\uD558\uAE30"}),e(K,{children:e(k,{placeholder:"\uC774\uB984 \uAC80\uC0C9",value:s,onChange:n=>p(n.target.value),onKeyUp:n=>m(n)})}),r(L,{children:["\uCE5C\uAD6C/\uD68C\uC6D0(",l?.length,")"]}),l?.length>0&&e(P,{}),e(G,{children:l.map((n,x)=>e($,{setCheckedCompanyId:C,checkedCompanyId:d,data:n,companyType:h},x))}),r(J,{children:[e(Y,{onClick:()=>{u()},children:"\uCDE8\uC18C"}),e(Q,{onClick:()=>{f(d)},children:"\uCD08\uB300\uD558\uAE30"})]})]})})};const $=({setCheckedCompanyId:i,checkedCompanyId:u,data:o,companyType:h})=>c.exports.useMemo(()=>r(y,{children:[r(X,{selected:u===o.id,onClick:()=>{i(o.id)},children:[o?r(b,{children:[e(ee,{src:a("../assets/default-profile.jpeg")}),r(te,{children:[e(R,{children:o?.company.name}),r(ie,{children:[e(H,{children:o?.name}),e(ne,{children:o?.position})]})]})]}):e(b,{children:e("div",{children:"\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694"})}),e(q,{children:u===o.id?e(w,{src:a("../assets/blue_check_ic_on.svg")}):e(w,{src:a("../assets/blue_check_ic_off.svg")})})]}),e(Z,{})]}),[u===o.id,o]),_=t.div`
  width: 440px;
  height: 733px;
  align-self: center;
  background-color: white;
  border-radius: 20px;
`,V=t.div`
  display: flex;
  padding: 30px 30px 6px 30px;
  justify-content: flex-end;
`,N=t.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`,O=t.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
  margin-bottom: 30px;
`,K=t.div`
  width: 100%;
  padding: 0px 40px 30px 40px;
`,L=t.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-left: 40px;
  margin-bottom: 14px;
`,P=t.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #c7c7c7;
`,G=t.div`
  height: 419px;
  width: 100%;

  overflow: hidden;
  overflow-y: overlay;
`,b=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  cursor: pointer;
`,H=t.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;
`,R=t.span`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #777;
  margin-bottom: 4px;
`,w=t.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-left: auto;
`,X=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 40px;

  ${({selected:i})=>i?v`
          background-color: #258fff1a;
        `:v`
          background-color: white;
        `}
  &:hover {
    background-color: #258fff1a;
  }

  transition: background-color 0.1s linear;
`,q=t.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
`,J=t.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;

  box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
`,Q=t.div`
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
`,Y=t.div`
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
`,Z=t.div`
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
  height: 1px;
  background-color: #f2f2f2;
`,ee=t.img`
  width: 44px;
  height: 44px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;

  margin-right: 14px;
`,te=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,ne=t.span`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #222;
`,ie=t.div`
  display: flex;
  align-items: center;
  margin-top: 2px;

  &:last-child {
    margin-left: 2px;
  }
`,oe=[{type:"kakao",icon:"../assets/ic-member-talk.png",title:"\uCE74\uCE74\uC624\uD1A1\uC73C\uB85C \uD604\uC7A5\uBA64\uBC84 \uCD08\uB300 \uB9C1\uD06C \uC804\uC1A1\uD558\uAE30",helperText:"\uBC88\uD638 \uC785\uB825\uC2DC \uCE74\uCE74\uC624\uD1A1\uC73C\uB85C \uCD08\uB300\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{type:"email",icon:"../assets/ic-member-email.png",title:"\uC774\uBA54\uC77C\uB85C \uD604\uC7A5\uBA64\uBC84 \uCD08\uB300 \uB9C1\uD06C \uC804\uC1A1\uD558\uAE30",helperText:"\uBA54\uC77C \uC8FC\uC18C \uC785\uB825\uC2DC \uC774\uBA54\uC77C\uB85C \uCD08\uB300\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{type:"friend",icon:"../assets/ic-member-list.png",title:"\uB0B4 \uCE5C\uAD6C\uBAA9\uB85D \uC911\uC5D0\uC11C \uCD08\uB300\uD558\uAE30",helperText:"\uB0B4 \uCE5C\uAD6C\uB97C \uCD08\uB300\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{type:"memeber",icon:"../assets/ic-member-search.png",title:"\uD68C\uC6D0 \uC9C1\uC811 \uAC80\uC0C9\uD558\uC5EC \uCD08\uB300\uD558\uAE30",helperText:"\uD68C\uC6D0\uC744 \uC9C1\uC811 \uAC80\uC0C9\uD558\uC5EC \uCD08\uB300\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}];var we=({open:i,onClose:u,fieldId:o,fieldName:h})=>{const[s,p]=c.exports.useState(!1),[d,C]=c.exports.useState(!1),[l,D]=c.exports.useState(""),[g,f]=c.exports.useState(""),m=n=>{switch(n){case"kakao":return p(!0);case"email":return p(!0);case"friend":return C(!0);case"member":return C(!0)}};return console.log(o,g,l),r(B,{open:i,onClose:u,modalStyle:s||d?{display:"none"}:{},children:[e(re,{children:r(ue,{children:[e(ce,{children:e(ae,{src:a("../assets/ic-del.svg"),onClick:u})}),e(le,{children:e(se,{children:"\uCD08\uB300\uD558\uAE30"})}),e(pe,{children:oe.map((n,x)=>r(de,{onClick:()=>{m(n.type),f(n.type)},children:[e(ge,{src:a(`${n.icon}`)}),r(Ce,{children:[e(he,{children:n.title}),e(xe,{children:n.helperText})]})]}))})]})}),e(z,{open:s,onClose:()=>{p(!1)},onSubmit:()=>{},title:"\uCD08\uB300\uD558\uAE30",content:`${h} \uAC74\uC124\uD604\uC7A5\uC5D0\uC11C
\uB808\uBBF8\uCF58\uC744 \uC8FC\uBB38\uD560 \uC218 \uC788\uB294 \uBA64\uBC84\uB97C \uCD08\uB300\uD569\uB2C8\uB2E4.`,submitText:"\uCD08\uB300\uD558\uAE30",label:g==="kakao"?"\uD734\uB300\uD3F0\uBC88\uD638":"\uC774\uBA54\uC77C",value:l,setValue:n=>D(n.target.value)}),e(U,{open:d,onClose:()=>{C(!1)}})]})};const re=t.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
  padding: 40px;
`,ue=t.div``,ce=t.div`
  display: flex;
  flex-direction: column;
`,le=t.div`
  margin: 0 auto 30px auto;
`,se=t.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`,ae=t.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`,pe=t.div`
  display: flex;
  flex-direction: column;
`,de=t.div`
  width: 360px;
  padding: 22px 20px;
  display: flex;
  align-items: center;

  border-radius: 12px;
  border: solid 1px #e3e3e3;

  margin-bottom: 16px;

  cursor: pointer;
`,Ce=t.div``,he=t.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.3px;
  color: #000;

  margin-bottom: 2px;
`,xe=t.div`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #999;
`,ge=t.img`
  width: 45px;
  height: 45px;

  margin-right: 14px;
`;export{we as I};
