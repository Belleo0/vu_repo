import{r as C,u as h,a as e,j as t,n as r}from"./index.fa23706f.js";import{R as x}from"./ReferenceRoomLayout.162a7ced.js";import"./Header.8f74d7dd.js";var g="/assets/01_img.c71d5e6d.png",f="/assets/02_img.e0d1416b.png",m="/assets/03_img.e29c262b.png",v="/assets/04_img.d03009cf.png",w="/assets/05_img.78ccd81d.png",E=()=>{const[l,u]=C.exports.useState(""),p=h(),i=n=>{switch(n){case"\uB808\uBBF8\uCF58":return u("remicon");case"\uC544\uC2A4\uCF58":return u("ASPHALT");case"\uD30C\uC77C":return u("FILE");case"\uD38C\uD504\uCE74":return u("PUMPCAR")}};return C.exports.useEffect(()=>{l?.length>0&&p("/reference-room/info",{state:{type:l}})},[l]),e(x,{children:t(b,{children:[e(A,{children:"\uC5C5\uCCB4\uB9AC\uC2A4\uD2B8"}),e(B,{children:"\uC5C5\uCCB4\uC120\uD0DD"}),t(D,{children:[t(c,{onClick:n=>{i("\uB808\uBBF8\uCF58")},children:[t(o,{children:[e(s,{children:"\uB808\uBBF8\uCF58"}),t(a,{children:["Ready - mix",e("br",{}),"Concrete"]})]}),e(d,{src:g})]}),t(c,{onClick:n=>{i("\uC544\uC2A4\uCF58")},children:[t(o,{children:[e(s,{children:"\uC544\uC2A4\uCF58"}),e(a,{children:"Asphalt Concrete"})]}),e(d,{src:f})]}),t(c,{onClick:n=>{i("\uD30C\uC77C")},children:[t(o,{children:[e(s,{children:"\uD30C\uC77C"}),e(a,{children:"PHC Piles"})]}),e(d,{src:m})]}),t(c,{onClick:n=>{i("\uACE8\uC7AC")},children:[t(o,{children:[e(s,{children:"\uACE8\uC7AC"}),t(a,{children:["Aggregate",e("br",{}),"and Stone"]})]}),e(d,{src:v})]}),t(c,{onClick:n=>{i("\uD38C\uD504\uCE74")},children:[t(o,{children:[e(s,{children:"\uD38C\uD504\uCE74"}),e(a,{children:"Concrete pump cars"})]}),e(d,{src:w})]})]})]})})};const b=r.div`
  width: 100%;
  height: 100%;
  padding: 60px 60px 255px 60px;

  user-select: none;
`,A=r.div`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #222;
`,B=r.div`
  margin-top: 40px;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #444;
`,D=r.div`
  display: flex;
  margin-top: 24px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`,c=r.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 460px;
  height: 200px;

  margin-right: 20px;
  margin-bottom: 20px;
  border: 2px solid #fff;
  border-radius: 12px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  cursor: pointer;

  &:hover {
    border: 2px solid #258fff;
  }
`,o=r.div``,s=r.div`
  width: 54px;
  height: 29px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  color: #000;
`,a=r.div`
  width: 83px;
  height: 46px;
  font-size: 16px;
  font-weight: normal;
  text-align: left;
`,d=r.img`
  width: 226px;
  height: 140px;
  object-fit: contain;
`;export{E as default};
