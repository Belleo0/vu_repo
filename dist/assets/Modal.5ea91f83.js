import{r as l,v as c,a as o,j as p,n as t}from"./index.fa23706f.js";var x=(e=!0)=>(l.exports.useEffect(()=>(e&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow="unset"}),[e]),null),b=({open:e,onClose:i,children:a,modalStyle:r={},containerStyle:d={},wrapperStyle:s={}})=>(x(e),e?c.createPortal(o(f,{style:r,children:p(u,{style:d,children:[o(h,{onClick:i}),o(g,{style:s,children:a})]})}),document.getElementById("root")):null);const f=t.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 10000;
  top: 0;
  left: 0;
`,h=t.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
`,g=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  border-radius: 6px;
  box-sizing: border-box;
  z-index: 200;
`,u=t.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
`,w=t.div`
  min-width: 400px;
  padding: 30px 40px;
  border-radius: 20px;
  background-color: #fff;

  overflow: hidden;
`,y=t.span`
  display: block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  white-space: pre;
`,n=t.div`
  display: flex;
  width: 100%;
`,v=t.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
  margin-bottom: 30px;
`,C=t(n)`
  width: calc(100% + 80px);
  margin-left: -40px;
  margin-bottom: -20px;
  box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.06);
  padding: 20px 40px;
`,M=t(n)`
  width: 100%;
  box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.06);
  padding: 30px 40px;
`;export{M as C,b as M,C as S,n as a,w as b,y as c,v as d};
