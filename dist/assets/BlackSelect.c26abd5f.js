import{g as f,c as d}from"./Header.8f74d7dd.js";import{r as a,j as b,a as i,n as o}from"./index.fa23706f.js";var B=({width:t,options:r,placeholder:p,value:l,onChange:w,containerStyle:k={},absoluteStyle:v={},initalMaxHeight:y})=>{const x=a.exports.useRef(null),[n,u]=a.exports.useState(!1),[C,c]=a.exports.useState(100),s=a.exports.useMemo(()=>l===null?null:r?.filter?.(e=>e.value===l)?.[0]?.label,[r,l]),g=({target:e})=>{n&&x.current&&!x.current.contains(e)&&(c(200),u(!1),setTimeout(()=>{c(100)},150))};a.exports.useEffect(()=>{if(n)return window.addEventListener("click",g),()=>{window.removeEventListener("click",g)}},[n]);const O=()=>{n?(c(200),u(!1),setTimeout(()=>{c(100)},150)):(c(300),u(!0))};return b(L,{style:{width:t||"auto",...k},ref:x,onClick:O,children:[i(m,{style:{color:s===null?"#c7c7c7":"#000"},children:s===null?p:s}),i(h,{src:f("../assets/ic-arrow-bottom.svg")}),b($,{isOpen:n,value:l,optionLength:r.length,initalMaxHeight:y,style:{zIndex:C,...v},children:[b(j,{children:[i(m,{style:{color:s===null?"#c7c7c7":"#000"},children:s===null?p:s}),i(h,{src:n?f("../assets/ic-arrow-up.svg"):f("../assets/ic-arrow-bottom.svg")})]}),i(I,{children:r.map(e=>i(z,{active:l===e.value,onClick:()=>w(e.value),children:e.label},e.value))})]})]})};const L=o.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  user-select: none;
`,h=o.img`
  width: 18px;
  height: 18px;
  margin-left: 7px;
`,m=o.span`
  font-size: 14px;
  letter-spacing: -0.84px;
  text-align: left;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$=o.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  padding: 8px;
  border-radius: 6px;
  border: solid 1px #e3e3e3;
  background-color: #fff;
  z-index: 500;
  overflow: hidden;

  ${({isOpen:t,optionLength:r,initalMaxHeight:p})=>t?d`
          max-height: ${42+28*r}px;
        `:d`
          max-height: ${p||37}px;
        `}

  ${({value:t})=>t!==null&&d`
      border-color: #777;
    `}

  transition: max-height 0.15s ease-in-out;
`,j=o.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */
`,z=o.span`
  display: block;
  cursor: pointer;
  font-size: 14px;
  text-align: left;

  ${({active:t})=>t?d`
          color: #258fff;
        `:d`
          color: #000;
        `}

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`,I=o.div`
  width: 100%;
  height: 200px;

  margin-top: 14px;
  overflow-y: scroll;

  /* 스크롤바 설정*/
  &::-webkit-scrollbar {
    width: 17px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c7c7c7;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
    margin: 0;
  }
`;export{B};
