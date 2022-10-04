import{c as l}from"./Header.8f74d7dd.js";import{r,a as s,n as e}from"./index.fa23706f.js";var w=({containerStyle:o,value:t="",onChange:n,...d})=>{const[x,i]=r.exports.useState(!1),[c,a]=r.exports.useState(t),u=p=>{a(p.target.value),n&&n(p)};return r.exports.useEffect(()=>{t!==c&&a(t)},[t]),s(f,{style:o,children:s(g,{isFocus:x||c!=="",children:s(m,{onFocus:()=>i(!0),onBlur:()=>i(!1),value:t,onChange:u,...d})})})};const f=e.div`
  display: flex;
  flex-direction: column;
`,g=e.div`
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: white;

  ${({isFocus:o})=>o?l`
          border: solid 1px #777;
        `:l`
          border: solid 1px #e3e3e3;
        `}
`,m=e.input`
  width: 100%;
  padding: 8px 10px;
  background: none;
  border: 0;
  outline: 0;
  &::placeholder {
    color: #c7c7c7;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
  &:focus {
    /* border-color:  */
  }
`;e.img`
  margin-right: 12px;
`;e.span`
  font-size: 13px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  margin-bottom: 10px;
`;e.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  color: #ef0000;
`;export{w as B};
