import{k as P,r as s,a as n,j as o,n as i}from"./index.fa23706f.js";import{R as S}from"./ReferenceRoomLayout.162a7ced.js";import{g as T}from"./Header.8f74d7dd.js";import{o as I}from"./onPrint.f762b6e4.js";import{u as F,R as U}from"./RemiconUnitPriceTable.c370c807.js";const W={[0]:"#258fff",[1]:"#fff"},$={[0]:"1px solid #258fff",[1]:"1px solid #e3e3e3"},G={[0]:"#fff",[1]:"#999999"},M=["\uC11C\uC6B8","\uC778\uCC9C","\uACBD\uAE30","\uAC15\uC6D0","\uBD80\uC0B0","\uC6B8\uC0B0","\uACBD\uB0A8","\uB300\uAD6C","\uACBD\uBD81","\uB300\uC804","\uC138\uC885","\uCDA9\uB0A8","\uCDA9\uBD81","\uAD11\uC8FC","\uC804\uB0A8","\uC804\uBD81","\uC81C\uC8FC"," "],O=[16,18,21,24,37,30,35,40,45,50];var Cn=()=>{P();const[l,A]=s.exports.useState("\uC11C\uC6B8"),[f,C]=s.exports.useState("100"),[j,k]=s.exports.useState("100"),{data:e,isLoading:pn,unitPricesMutate:an}=F(l,j),{divRef:z,handleOnPrint:L}=I(),E=r=>{A(r)},R=r=>{k(r)};return s.exports.useEffect(()=>{console.log(l)},[l]),s.exports.useMemo(()=>{!e||Object.values(e)},[e]),n(S,{children:o(N,{children:[o(m,{children:[n(V,{children:"\uB808\uBBF8\uCF58 \uB2E8\uAC00\uD45C"}),o(q,{children:[o(J,{style:{marginRight:"20px"},onClick:L,children:[n(K,{src:T("../assets/print_ic.svg")}),"\uB9AC\uD3EC\uD2B8 \uCD9C\uB825"]}),n(H,{children:"\uC815\uBCF4\uC218\uC815 \uBB38\uC758\uD558\uAE30"})]})]}),n(X,{}),n(Q,{children:M.map((r,x)=>n(Y,{type:l===r?0:1,onClick:()=>{E(r)},children:r},x))}),o(Z,{children:[o(d,{children:[l,"\uC9C0\uC5ED"]}),n(d,{style:{fontSize:"10px"},children:"\u3000|\u3000"}),n(d,{children:"2020.03.01 \uAE30\uC900"})]}),o(nn,{children:[o(un,{children:[n(en,{children:"\uB2E8\uAC00\uC728"}),n(tn,{value:f,onChange:r=>{!!Number(r.target.value)&&parseInt(r.target.value,10)<=100?C(r.target.value):r.target.value===""&&C("")}}),n(on,{children:"%"})]}),n(rn,{onClick:()=>R(f),children:"\uC801\uC6A9"})]}),o(m,{style:{marginTop:"44px",marginBottom:"14px"},children:[n(_,{children:"\uAD75\uC740 \uACE8\uC7AC \uCD5C\uB300\uCE58\uC218 : 25mm (#57)"}),n(d,{children:"(\uB2E8\uC704 : \uC6D0/\u33A1, \uBD80\uAC00\uC138 \uBCC4\uB3C4)"})]}),o(B,{children:[o(g,{children:[n(b,{children:o(y,{children:[n(w,{children:"\uC2AC\uB7FC\uD504(mm)"}),n(v,{children:"\uD638\uCE6D\uAC15\uB3C4"}),n(D,{})]})}),O.map((r,x)=>n(c,{children:r},x))]}),o(u,{children:[n(c,{style:{width:"110px",height:"42px"},children:"80"}),n(t,{children:e?.slump_80_nominal_16}),n(t,{children:e?.slump_80_nominal_18}),n(t,{children:e?.slump_80_nominal_21}),n(t,{children:e?.slump_80_nominal_24}),n(t,{children:e?.slump_80_nominal_27}),n(t,{children:e?.slump_80_nominal_30}),n(t,{children:e?.slump_80_nominal_35}),n(t,{children:e?.slump_80_nominal_40}),n(t,{children:e?.slump_80_nominal_45}),n(t,{style:{borderRight:"none"},children:e?.slump_80_nominal_50})]}),o(u,{children:[n(c,{style:{width:"110px",height:"42px"},children:"120"}),n(t,{children:e?.slump_120_nominal_16}),n(t,{children:e?.slump_120_nominal_18}),n(t,{children:e?.slump_120_nominal_21}),n(t,{children:e?.slump_120_nominal_24}),n(t,{children:e?.slump_120_nominal_27}),n(t,{children:e?.slump_120_nominal_30}),n(t,{children:e?.slump_120_nominal_35}),n(t,{children:e?.slump_120_nominal_40}),n(t,{children:e?.slump_120_nominal_45}),n(t,{style:{borderRight:"none"},children:e?.slump_120_nominal_50})]}),o(u,{children:[n(c,{style:{width:"110px",height:"42px"},children:"150"}),n(t,{children:e?.slump_150_nominal_16}),n(t,{children:e?.slump_150_nominal_18}),n(t,{children:e?.slump_150_nominal_21}),n(t,{children:e?.slump_150_nominal_24}),n(t,{children:e?.slump_150_nominal_27}),n(t,{children:e?.slump_150_nominal_30}),n(t,{children:e?.slump_150_nominal_35}),n(t,{children:e?.slump_150_nominal_40}),n(t,{children:e?.slump_150_nominal_45}),n(t,{style:{borderRight:"none"},children:e?.slump_150_nominal_50})]}),o(u,{children:[n(c,{style:{width:"110px",height:"42px"},children:"180"}),n(t,{children:e?.slump_180_nominal_16}),n(t,{children:e?.slump_180_nominal_18}),n(t,{children:e?.slump_180_nominal_21}),n(t,{children:e?.slump_180_nominal_24}),n(t,{children:e?.slump_180_nominal_27}),n(t,{children:e?.slump_180_nominal_30}),n(t,{children:e?.slump_180_nominal_35}),n(t,{children:e?.slump_180_nominal_40}),n(t,{children:e?.slump_180_nominal_45}),n(t,{style:{borderRight:"none"},children:e?.slump_180_nominal_50})]}),o(u,{children:[n(c,{style:{width:"110px",height:"42px",borderBottom:"none"},children:"210"}),n(t,{children:e?.slump_210_nominal_16}),n(t,{children:e?.slump_210_nominal_18}),n(t,{children:e?.slump_210_nominal_21}),n(t,{children:e?.slump_210_nominal_24}),n(t,{children:e?.slump_210_nominal_27}),n(t,{children:e?.slump_210_nominal_30}),n(t,{children:e?.slump_210_nominal_35}),n(t,{children:e?.slump_210_nominal_40}),n(t,{children:e?.slump_210_nominal_45}),n(t,{style:{borderRight:"none"},children:e?.slump_210_nominal_50})]})]}),o(ln,{children:[o(cn,{children:[o(m,{children:[n(_,{children:"\uBAA8\uB974\uD0C0\uB974(Mortar)"}),n(d,{children:"(\uB2E8\uC704 : \uC6D0/\u33A1, \uBD80\uAC00\uC138 \uBCC4\uB3C4)"})]}),o(B,{children:[o(g,{children:[n(b,{children:o(y,{children:[n(w,{children:"\uC2AC\uB7FC\uD504(mm)"}),n(v,{children:"\uC2DC\uBA58\uD2B8\uB7C9 \uBC30\uD569\uBE44"}),n(D,{})]})}),o(h,{children:["350 ",n(a,{children:"(1:5)"})]}),o(h,{children:["450 ",n(a,{children:"(1:4)"})]}),o(h,{children:["550 ",n(a,{children:"(1:3)"})]}),o(h,{children:["700 ",n(a,{children:"(1:2)"})]}),o(h,{style:{borderRight:"none"},children:["1000 ",n(a,{children:"(1:1)"})]})]}),o(g,{style:{height:"42px"},children:[n(c,{style:{width:"110px",height:"42px",borderBottom:"none"},children:"10 \xB1 2.5"}),n(p,{children:e?.mortar_350}),n(p,{children:e?.mortar_450}),n(p,{children:e?.mortar_550}),n(p,{children:e?.mortar_700}),n(p,{style:{borderRight:"none"},children:e?.mortar_100})]})]})]}),o(dn,{children:[o(m,{children:[n(_,{children:"\uD574\uB2F9\uC9C0\uC5ED"}),n(d,{children:"\uB2E8\uAC00\uC728\uC774 \uD3EC\uD568\uB41C \uC9C0\uC5ED\uC785\uB2C8\uB2E4."})]}),n(sn,{children:e?.division})]})]}),n(hn,{ref:z,children:n(U,{print:!0,percent:f,location:l})})]})})};const N=i.div`
  /* width: 1420px; */
  width: 100%;
  height: 100%;
  padding: 52px 60px 97px 60px;

  user-select: none;
`,m=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
`,V=i.div`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #222;
`,_=i.div`
  font-size: 16px;
  font-weight: 500;
  color: #222;
`,q=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,H=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 42px;
  border-radius: 6px;
  border: solid 1px #258fff;
  background-color: #fff;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #258fff;
`,J=i.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 126px;
  height: 42px;
  border-radius: 6px;
  border: solid 1px #258fff;
  background-color: #fff;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #258fff;
`,K=i.img`
  width: 20px;
  height: 20px;
`,Q=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #e3e3e3;
`,X=i.div`
  width: 100%;
  height: 1px;
  margin: 20px 0 30px;
  background-color: #c7c7c7;
`,Y=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${1/9*100}%;
  height: 44px;
  background-color: #fff;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  ${({type:l})=>`
    background-color: ${W[l]};
    border: ${$[l]};
    color: ${G[l]}

  `}
`,Z=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 67px;
  margin-bottom: 8px;
`,d=i.span`
  font-size: 13px;
  font-weight: normal;
  color: #999;
`,nn=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 80px;
  padding: 15px 30px 15px 0;
  background-color: #f2f2f2;

  font-size: 20px;
  font-weight: 500;
  color: #222;
`,en=i.div`
  margin-right: 30px;
`,tn=i.input`
  border: 2px solid #4490f7;
  border-radius: 6px;
  width: 100px;
  height: 50px;
  outline: none;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #258fff;
`,on=i.div`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin-left: 8px;
`,rn=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 30px;
  padding: 5px 20px;
  border-radius: 6px;
  background-color: #258fff;
  cursor: pointer;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #fff;

  margin-left: 30px;
`,g=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 49px;
  width: 100%;
  background-color: #fff;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`,u=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 100%;
  background-color: #fff;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`,c=i.div`
  width: 131px;
  border-right: 1px solid #e3e3e3;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`,h=i.div`
  width: 131px;
  border-right: 1px solid #e3e3e3;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`,t=i.div`
  width: 131px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`,p=i.div`
  width: 131px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`,B=i.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`,ln=i.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  margin-top: 44px;
  margin-bottom: 14px;
`,cn=i.div`
  width: 100%;
  height: 131px;
  flex: 1;
`,dn=i.div`
  width: 100%;
  height: 131px;
  flex: 1;

  margin-left: 100px;
`,a=i.span`
  font-size: 12px;
  font-weight: normal;
  color: #777;
`;i.img``;const sn=i.div`
  width: auto;
  height: 94px;
  margin: 14px 0 0;
  padding: 20px;

  background-color: #f2f2f2;

  font-size: 14px;
  font-weight: normal;
  color: #222;
`,un=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,b=i.div`
  width: 110px;
  height: 49px;
  border-right: 1px solid #e3e3e3;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;

  font-size: 12px;
  font-weight: normal;
  color: #444;
`,y=i.div`
  width: 84px;
  height: 30px;
`,w=i.span`
  position: absolute;
  bottom: 4px;
  left: 6px;
`,v=i.span`
  width: 50px;

  position: absolute;
  top: 4px;
  right: 6px;

  text-align: right;
`,D=i.div`
  position: absolute;
  height: 36px; // adjust height td
  top: 40px;
  bottom: 14px;
  margin: auto;
  right: 5px;
  width: 100%;
  border-top: 1px solid #000;
  // adjust height td
  -webkit-transform: rotate(22deg);
  -ms-transform: rotate(22deg);
  transform: rotate(22deg);
`,hn=i.div`
  display: none;
`;export{Cn as default};
