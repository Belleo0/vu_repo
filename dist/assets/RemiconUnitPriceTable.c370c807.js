import{d as T,j as t,F as u,a as n,n as r}from"./index.fa23706f.js";import{a as A}from"./Header.8f74d7dd.js";const e=d=>d?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")||"",E="UNIT_PRICE_KEY";var z=(d,s)=>{const{data:p,error:i,refetch:_}=A([E,d,s],()=>T.get("/prices",{params:{division:d,percent:s}}));return{data:p,isLoading:!i,unitPricesMutate:_}};const j=[16,18,21,24,37,30,35,40,45,50];var V=({print:d,percent:s,location:p})=>{const{data:i,isLoading:_,unitPricesMutate:N}=z(p,s);return console.log("print",d),t(u,{children:[d?t(u,{children:[t(H,{children:["\uB2E8\uAC00\uD45C (",p," ",s,"% \uC801\uC6A9)"]}),n(K,{})]}):t(u,{children:[n(P,{children:n(k,{children:"\uB808\uBBF8\uCF58 \uB2E8\uAC00\uD45C"})}),t(M,{children:[n(m,{children:"\uBD80\uC0B0\uC9C0\uC5ED"}),n(F,{}),n(m,{children:"2022.03.01 \uAE30\uC900"})]}),n(R,{children:t(I,{children:[n(x,{style:{marginRight:20},children:"\uB2E8\uAC00\uC728"}),n(W,{children:"100"}),n(L,{children:"%"}),n(x,{style:{marginLeft:20},children:"\uC801\uC6A9 \uC2DC"})]})})]}),t(S,{children:[t(f,{children:[n(g,{children:"\uAD75\uC740 \uACE8\uC7AC \uCD5C\uB300\uCE58\uC218 : 25mm (#57)"}),n(m,{children:"(\uB2E8\uC704 : \uC6D0/\u33A1, \uBD80\uAC00\uC138 \uBCC4\uB3C4)"})]}),t(C,{children:[t(o,{children:[n(c,{children:t(b,{children:[n(B,{children:"\uC2AC\uB7FC\uD504(mm)"}),n(y,{children:"\uD638\uCE6D\uAC15\uB3C4"}),n(v,{})]})}),j.map((w,D)=>n(a,{children:w},D))]}),t(o,{children:[n(c,{children:"80"}),n(l,{children:e(i?.slump_80_nominal_16)}),n(l,{children:e(i?.slump_80_nominal_18)}),n(l,{children:e(i?.slump_80_nominal_21)}),n(l,{children:e(i?.slump_80_nominal_24)}),n(l,{children:e(i?.slump_80_nominal_27)}),n(l,{children:e(i?.slump_80_nominal_30)}),n(l,{children:e(i?.slump_80_nominal_35)}),n(l,{children:e(i?.slump_80_nominal_40)}),n(l,{children:e(i?.slump_80_nominal_45)}),n(l,{children:e(i?.slump_80_nominal_50)})]}),t(o,{children:[n(c,{children:"120"}),n(l,{children:e(i?.slump_120_nominal_16)}),n(l,{children:e(i?.slump_120_nominal_18)}),n(l,{children:e(i?.slump_120_nominal_21)}),n(l,{children:e(i?.slump_120_nominal_24)}),n(l,{children:e(i?.slump_120_nominal_27)}),n(l,{children:e(i?.slump_120_nominal_30)}),n(l,{children:e(i?.slump_120_nominal_35)}),n(l,{children:e(i?.slump_120_nominal_40)}),n(l,{children:e(i?.slump_120_nominal_45)}),n(l,{children:e(i?.slump_120_nominal_50)})]}),t(o,{children:[n(c,{children:"150"}),n(l,{children:e(i?.slump_150_nominal_16)}),n(l,{children:e(i?.slump_150_nominal_18)}),n(l,{children:e(i?.slump_150_nominal_21)}),n(l,{children:e(i?.slump_150_nominal_24)}),n(l,{children:e(i?.slump_150_nominal_27)}),n(l,{children:e(i?.slump_150_nominal_30)}),n(l,{children:e(i?.slump_150_nominal_35)}),n(l,{children:e(i?.slump_150_nominal_40)}),n(l,{children:e(i?.slump_150_nominal_45)}),n(l,{children:e(i?.slump_150_nominal_50)})]}),t(o,{children:[n(c,{children:"180"}),n(l,{children:e(i?.slump_180_nominal_16)}),n(l,{children:e(i?.slump_180_nominal_18)}),n(l,{children:e(i?.slump_180_nominal_21)}),n(l,{children:e(i?.slump_180_nominal_24)}),n(l,{children:e(i?.slump_180_nominal_27)}),n(l,{children:e(i?.slump_180_nominal_30)}),n(l,{children:e(i?.slump_180_nominal_35)}),n(l,{children:e(i?.slump_180_nominal_40)}),n(l,{children:e(i?.slump_180_nominal_45)}),n(l,{children:e(i?.slump_180_nominal_50)})]}),t(o,{children:[n(c,{children:"210"}),n(l,{children:e(i?.slump_210_nominal_16)}),n(l,{children:e(i?.slump_210_nominal_18)}),n(l,{children:e(i?.slump_210_nominal_21)}),n(l,{children:e(i?.slump_210_nominal_24)}),n(l,{children:e(i?.slump_210_nominal_27)}),n(l,{children:e(i?.slump_210_nominal_30)}),n(l,{children:e(i?.slump_210_nominal_35)}),n(l,{children:e(i?.slump_210_nominal_40)}),n(l,{children:e(i?.slump_210_nominal_45)}),n(l,{children:e(i?.slump_210_nominal_50)})]})]}),t(U,{children:[t(f,{children:[n(g,{children:"\uBAA8\uB974\uD0C0\uB974(Mortar)"}),n(m,{children:"(\uB2E8\uC704 : \uC6D0/\u33A1, \uBD80\uAC00\uC138 \uBCC4\uB3C4)"})]}),t(C,{children:[t(o,{children:[n(c,{children:t(b,{children:[n(B,{children:"\uC2AC\uB7FC\uD504(mm)"}),n(y,{children:"\uC2DC\uBA58\uD2B8\uB7C9 \uBC30\uD569\uBE44"}),n(v,{})]})}),t(a,{children:["350 ",n(h,{children:"(1:5)"})]}),t(a,{children:["450 ",n(h,{children:"(1:4)"})]}),t(a,{children:["550 ",n(h,{children:"(1:3)"})]}),t(a,{children:["700 ",n(h,{children:"(1:2)"})]}),t(a,{style:{borderRight:"none"},children:["1000 ",n(h,{children:"(1:1)"})]})]}),t(o,{children:[n(c,{children:"10 \xB1 2.5"}),n(l,{children:e(i?.mortar_350)}),n(l,{children:e(i?.mortar_450)}),n(l,{children:e(i?.mortar_550)}),n(l,{children:e(i?.mortar_700)}),n(l,{style:{borderRight:"none"},children:e(i?.mortar_1000)})]})]})]})]})]})};r.div`
  display: flex;
  flex-direction: column;
`;const P=r.div`
  margin: 20px auto 24px auto;
`,k=r.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`,R=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  background-color: #f2f2f2;

  margin-bottom: 40px;
`,S=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,F=r.span`
  display: block;
  width: 1px;
  height: 8px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`,I=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,x=r.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #222;
`,W=r.div`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.56px;
  text-align: center;
  color: #258fff;

  margin-right: 6px;
`,L=r.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,M=r.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 6px;
`,m=r.span`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  text-align: right;
  color: #999;
`,f=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,g=r.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,o=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`,a=r.div`
  height: 50px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;

  font-size: 14px;

  font-weight: 500;
  color: #444;

  &:last-child {
    border-right: none;
  }
`,c=r.div`
  width: 100px;
  height: 50px;
  border-right: 1px solid #e3e3e3;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`,l=r.div`
  height: 50px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border-bottom: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;

  &:last-child {
    border-right: none;
  }
`,C=r.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`,U=r.div`
  width: 490px;
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`,h=r.span`
  font-size: 12px;
  font-weight: normal;
  color: #777;
`,b=r.div`
  width: 74px;
  height: 30px;
`,B=r.span`
  position: absolute;
  bottom: 4px;
  left: 6px;

  font-size: 12px;
`,y=r.span`
  width: 50px;

  position: absolute;
  top: 4px;
  right: 6px;

  font-size: 12px;
  text-align: right;
`,v=r.div`
  position: absolute;
  height: 30px; // adjust height td
  top: 40px;
  bottom: 14px;
  margin: auto;
  right: 5px;
  width: 100%;
  border-top: 1px solid #000;
  // adjust height td
  -webkit-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  transform: rotate(25deg);
`,H=r.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;

  margin-top: 20px;
`,K=r.div`
  border-bottom: 1px solid #e3e3e3;
  margin: 6px 0 10px;
`;export{V as R,e as m,z as u};
