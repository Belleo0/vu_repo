import{r as n,j as i,a as e,n as t,u as F,d as w}from"./index.fa23706f.js";import{S as E}from"./ServiceCenterLayout.2827985f.js";import{B as I}from"./BlackSelect.c26abd5f.js";import{c as v,k as T}from"./Header.8f74d7dd.js";import{B as A,a as S}from"./Button.2ebe35cd.js";import{T as k}from"./TextModal.458f5750.js";import{I as z}from"./ImgModal.aa482c68.js";import"./Modal.5ea91f83.js";var D=({label:u,redStar:r,containerStyle:g,inputStyle:l,value:C="",onChange:s,errorMessageStyle:B,errorMessage:c,withoutErrorMessage:h=!1,disabled:p=!1,...d})=>{const[m,a]=n.exports.useState(!1),[y,f]=n.exports.useState(C);return i(R,{style:g,children:[u&&i(P,{children:[u&&e(M,{children:u}),r&&e(H,{children:r})]}),e(j,{isFocus:m,style:l,children:e(q,{onFocus:()=>a(!0),onBlur:()=>a(!1),value:C,onChange:b=>{f(b.target.value),s&&s(b)},disabled:p,...d})}),!h&&e(L,{style:B,children:c||"\u3164"})]})};const R=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,j=t.div`
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: white;

  ${({isFocus:u})=>u?v`
          border: solid 1px #777;
        `:v`
          border: solid 1px #c7c7c7;
        `}

  margin-bottom: 8px;
`,q=t.textarea`
  width: 100%;
  padding: 11px 14px;
  background: none;
  border: 0;
  outline: 0;
  resize: none;

  &::placeholder {
    color: #999999;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
  &:focus {
    /* border-color:  */
  }
`;t.img`
  margin-right: 12px;
`;const M=t.span`
  font-size: 13px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  margin-bottom: 10px;
`,L=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #ef0000;
`,H=t.span`
  font-size: 14px;
  color: #ef0000;
  margin-left: 2px;
`,P=t.div`
  display: block;
  margin-bottom: 10px;
`,U=[{label:"\uD68C\uC6D0\uC815\uBCF4",value:"1"},{label:"\uC8FC\uBB38",value:"2"},{label:"\uCC44\uD305",value:"3"},{label:"\uC54C\uB9BC",value:"4"}];var ue=()=>{const u=F(),[r,g]=n.exports.useState(null),[l,C]=n.exports.useState(""),[s,B]=n.exports.useState(""),[c,h]=n.exports.useState([]),[p,d]=n.exports.useState(!1),[m,a]=n.exports.useState(!1),y=()=>{d(!p)},f=async()=>{try{await w.post("/questions",{type:r,title:l,content:s,attachments:c}),a(!1),u("/service-center/inquiry")}catch(o){console.log(o)}};return i(E,{children:[i(V,{children:[e(W,{children:"1:1\uBB38\uC758"}),i(Y,{children:[e(x,{children:"\uC0C1\uB2F4\uC720\uD615"}),e(I,{absoluteStyle:{border:"solid 1px #c7c7c7"},placeholder:"- - - - - - - - -",options:U,value:r,onChange:o=>g(o)}),e(x,{children:"\uC81C\uBAA9"}),e(D,{placeholder:"\uC81C\uBAA9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",inputStyle:{height:42},withoutErrorMessage:!0,value:l,onChange:o=>C(o.target.value)}),e(x,{children:"\uB0B4\uC6A9"}),e(D,{placeholder:"\uB0B4\uC6A9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",withoutErrorMessage:!0,inputStyle:{height:200},value:s,onChange:o=>B(o.target.value)}),i(x,{children:["\uCCA8\uBD80\uD30C\uC77C",e($,{children:"(\uCD5C\uB300 5\uC7A5\uAE4C\uC9C0 \uB4F1\uB85D \uAC00\uB2A5\uD569\uB2C8\uB2E4.)"})]}),e(G,{children:e(T,{images:c,setImages:h,buttonStyle:K,icon:"ic-plus",limit:5,disabledPreview:!1})}),i(N,{children:[e(A,{type:S.GRAY_BLACK,containerStyle:{marginRight:"20px"},onClick:y,children:"\uCDE8\uC18C"}),e(A,{type:S.PRIMARY,onClick:()=>a(!0),children:"\uC800\uC7A5"})]})]})]}),e(z,{open:p,onClose:()=>d(!1),content:"\uD398\uC774\uC9C0\uB97C \uB098\uAC00\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",redContent:`\uC9C0\uAE08\uAE4C\uC9C0 \uC785\uB825\uD55C \uC815\uBCF4\uB294 \uC784\uC2DC\uC800\uC7A5\uB418\uC5B4 
\uB2E4\uC74C\uC5D0 \uC774\uC5B4\uC11C \uC785\uB825\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`,submitText:"\uB098\uAC00\uAE30",onSubmit:()=>u(-1)}),e(k,{open:m,onClose:f,submitText:"\uD655\uC778",content:"1:1\uBB38\uC758 \uB4F1\uB85D\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."})]})};const V=t.div`
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`,W=t.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`,Y=t.div`
  width: 540px;
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`,x=t.div`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #222;

  margin-top: 30px;
  margin-bottom: 10px;
`,$=t.span`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #999;

  margin-left: 4px;
`,G=t.div`
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
`,K={width:"120px",height:"120px",display:"flex",justifyContent:"center",alignItems:"center",margin:"20 0",borderRadius:"12px",border:"solid 1px #000",backgroundColor:"#fff",marginRight:"20px"};t.img`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: flex-end;

  margin-left: auto;
  margin-right: 38px;
`;const N=t.div`
  display: flex;
  margin-top: 60px;
`;export{ue as default};
