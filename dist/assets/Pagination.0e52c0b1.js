import{r as c,a as g,j as y,n as f}from"./index.fa23706f.js";import{g as p,c as d}from"./Header.8f74d7dd.js";var A=(e,u)=>{const[n,x]=c.exports.useState(!1),[i,h]=c.exports.useState(0),[t,o]=c.exports.useState(10),[r,a]=c.exports.useState([]),[l,s]=c.exports.useState(),P=(i/t+1)*t,v=P-t,b=m=>m?(console.log(m),m.slice(v,P)):void 0,w={data:e,setLoading:x,setSkip:h,setLimit:o,setTotalCount:s,setItems:a,loading:n,skip:i,limit:t,totalCount:l,items:r};return c.exports.useEffect(()=>{!e||(console.log(e),a(b(e)),s(e.length))},[i,t,e]),w},E=({onChangeLimit:e,onChangeSkip:u,limit:n,skip:x,totalCount:i})=>{const t=x/n+1,o=Math.ceil(i/n),r=Math.floor((t-1)/7)*7+1,a=r+(7-1)<o?7-1:(o-r)%7,l=[];console.log(t,o,r,a);for(let s=r;s<=r+a;s++)l.push(g(C,{active:t===s,onClick:()=>{t!==s&&u((s-1)*n)},children:s},s));return g(j,{children:y(S,{children:[g(L,{src:t===1?p("../assets/ic-arrow-gray-left.svg"):p("../assets/ic-arrow-left.svg"),onClick:()=>t===1?null:u((t-2)*n)}),l,g(L,{src:t===o||o<=1?p("../assets/ic-arrow-gray-right.svg"):p("../assets/ic-arrow-right.svg"),onClick:()=>t===o||o<=1?null:u(t*n)})]})})};const j=f.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
`,S=f.div`
  width: 320px;

  display: flex;

  justify-content: space-around;
  align-items: center;
`,C=f.span`
  color: #c7c7c7;
  cursor: pointer;

  ${({active:e})=>e?d`
          color: #258fff;
        `:d`
          color: #c7c7c7;
        `}
`,L=f.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;export{E as P,A as u};
