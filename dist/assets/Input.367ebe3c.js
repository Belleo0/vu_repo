import{g as k,c as d}from"./Header.8f74d7dd.js";import{r as x,j as s,a as o,n as e}from"./index.fa23706f.js";var A=({label:t,redStar:n,containerStyle:u,inputStyle:g,value:r="",onChange:c,errorMessageStyle:f,errorMessage:m,withoutErrorMessage:h=!1,disabled:i=!1,onClick:b=()=>null,...y})=>{const[I,a]=x.exports.useState(!1),[v,w]=x.exports.useState(r),l=p=>{w(p.target.value),c&&c(p)};return s(z,{style:u,onClick:b,children:[t&&s(B,{children:[t&&o(L,{children:t}),n&&o(S,{children:n})]}),s(F,{isFocus:I,style:g,children:[o(j,{onFocus:()=>a(!0),onBlur:()=>a(!1),value:r,onChange:l,disabled:i,...y}),v!==""&&!i&&o(C,{src:k("../assets/ic-circle-x.svg"),onClick:()=>{l({target:{value:""}})}})]}),!h&&o(R,{style:f,children:m||"\u3164"})]})};const z=e.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,F=e.div`
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: white;

  ${({isFocus:t})=>t?d`
          border: solid 1px #777;
        `:d`
          border: solid 1px #c7c7c7;
        `}

  margin-bottom: 8px;
`,j=e.input`
  width: 100%;
  padding: 11px 14px;
  background: none;
  border: 0;
  outline: 0;
  &::placeholder {
    color: #999999;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
  &:focus {
    /* border-color:  */
  }
`,C=e.img`
  margin-right: 12px;
`,L=e.span`
  font-size: 13px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  margin-bottom: 10px;
`,R=e.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #ef0000;
`,S=e.span`
  font-size: 14px;
  color: #ef0000;
  margin-left: 2px;
`,B=e.div`
  display: block;
  margin-bottom: 10px;
`;export{A as I};
