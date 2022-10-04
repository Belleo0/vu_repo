import{a as i,j as t,n as e,r as W}from"./index.fa23706f.js";import{B as v,a as D,b as Y}from"./Button.2ebe35cd.js";import{M as L}from"./Modal.5ea91f83.js";import{c as $,a as H}from"./convertDuration.9811f74f.js";import{R as O,m as h}from"./RemiconUnitPriceTable.c370c807.js";import{o as V}from"./onPrint.f762b6e4.js";import{h as z}from"./Header.8f74d7dd.js";import{a as j}from"./common.0c17b2bd.js";const g=[{slump:80,mPa:16,price:74080},{slump:80,mPa:18,price:76720},{slump:80,mPa:21,price:80810},{slump:80,mPa:24,price:84950},{slump:80,mPa:27,price:88500},{slump:80,mPa:30,price:94500},{slump:80,mPa:35,price:98400},{slump:80,mPa:40,price:""},{slump:120,mPa:16,price:74860},{slump:120,mPa:18,price:78280},{slump:120,mPa:21,price:82570},{slump:120,mPa:24,price:86860},{slump:120,mPa:27,price:89740},{slump:120,mPa:30,price:95930},{slump:120,mPa:35,price:101780},{slump:120,mPa:40,price:""},{slump:150,mPa:16,price:75450},{slump:150,mPa:18,price:78970},{slump:150,mPa:21,price:83370},{slump:150,mPa:24,price:87820},{slump:150,mPa:27,price:90720},{slump:150,mPa:30,price:98640},{slump:150,mPa:35,price:104580},{slump:150,mPa:40,price:124290},{slump:180,mPa:16,price:76060},{slump:180,mPa:18,price:79580},{slump:180,mPa:21,price:84120},{slump:180,mPa:24,price:88770},{slump:180,mPa:27,price:92580},{slump:180,mPa:30,price:100720},{slump:180,mPa:35,price:107100},{slump:180,mPa:40,price:127800},{slump:210,mPa:16,price:76600},{slump:210,mPa:18,price:80280},{slump:210,mPa:21,price:84950},{slump:210,mPa:24,price:90280},{slump:210,mPa:27,price:94570},{slump:210,mPa:30,price:102820},{slump:210,mPa:35,price:109290},{slump:210,mPa:40,price:130280}];var q=({open:l,estimation:x,onClose:n})=>(g.filter(r=>r.slump===80),g.filter(r=>r.slump===120),g.filter(r=>r.slump===150),g.filter(r=>r.slump===180),g.filter(r=>r.slump===210),i(L,{open:l,onClose:n,children:i(G,{children:t(J,{children:[i(O,{print:!1,percent:"100",location:"\uBD80\uC0B0"}),i(v,{type:D.PRIMARY,containerStyle:{width:360,margin:"auto",marginTop:"30px"},onClick:n,children:"\uD655\uC778"})]})})}));const G=e.div`
  width: 960px;
  height: auto;
  background-color: white;
  border-radius: 20px;

  padding: 30px 40px;
`,J=e.div`
  display: flex;
  flex-direction: column;
`;e.div`
  margin: 20px auto 24px auto;
`;e.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`;e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  background-color: #f2f2f2;
`;e.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;
`;e.span`
  display: block;
  width: 1px;
  height: 8px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`;e.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;e.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #222;
`;e.div`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.56px;
  text-align: center;
  color: #258fff;

  margin-right: 6px;
`;e.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;e.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 6px;
`;e.span`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  text-align: right;
  color: #999;
`;e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;e.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`;e.div`
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
`;e.div`
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
`;e.div`
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
`;e.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`;e.div`
  width: 490px;
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;e.span`
  font-size: 12px;
  font-weight: normal;
  color: #777;
`;e.div`
  width: 74px;
  height: 30px;
`;e.span`
  position: absolute;
  bottom: 4px;
  left: 6px;

  font-size: 12px;
`;e.span`
  width: 50px;

  position: absolute;
  top: 4px;
  right: 6px;

  font-size: 12px;
  text-align: right;
`;e.div`
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
`;var F=(l=>(l.CASH="\uD604\uAE08",l.NOTE="\uC5B4\uC74C",l.BOND="\uC804\uC790\uCC44\uAD8C",l.CARD="\uAD6C\uB9E4\uCE74\uB4DC",l))(F||{}),K=({divRef:l,fieldName:x,fieldCompany:n,paymentMethod:r,fieldStartDate:y,fieldEndDate:B,factoryName:u,factoryAddr:a,salesUserName:P,salesUserPhone:A,salesUserTel:N,estimation:o})=>t(Q,{ref:l,children:[i(X,{children:"\uACAC\uC801\uC11C"}),t(Z,{children:[t(w,{children:[t(_,{children:[n," \uADC0\uC911"]}),i(k,{}),i(M,{children:"\uC544\uB798\uC640 \uAC19\uC774 \uACAC\uC801\uD569\uB2C8\uB2E4."}),t(c,{children:[i(p,{children:"\u25A1 \uD488\uBA85:"}),i(d,{children:"\uB808\uBBF8\uCF58"})]}),t(c,{children:[i(p,{children:"\u25A1 \uACF5\uAE09\uC7A5\uC18C:"}),i(d,{children:x})]}),t(c,{children:[i(p,{children:"\u25A1 \uACF5\uAE09\uAE30\uAC04:"}),t(d,{children:[z(y).format("YYYY.MM")," ~"," ",z(B).format("YYYY.MM")]})]}),t(c,{children:[i(p,{children:"\u25A1 \uC9C0\uBD88\uC870\uAC74:"}),i(d,{children:F?.[r]})]}),t(c,{children:[i(p,{children:"\u25A1 \uC720\uD6A8\uAE30\uAC04:"}),i(d,{children:"\uACAC\uC801\uC81C\uCD9C\uC77C\uB85C\uBD80\uD130 30\uC77C"})]})]}),t(w,{children:[t(_,{children:["\uACF5\uAE09\uC790 \uACAC\uC801\uC77C\uC790:"," ",z(o.updated_at).format("YYYY.MM.DD")]}),i(k,{}),t(c,{children:[i(p,{children:"\u25A1 \uD68C\uC0AC\uC774\uB984:"}),i(d,{children:u})]}),t(c,{children:[i(p,{children:"\u25A1 \uC8FC\uC18C:"}),i(d,{children:a})]}),t(c,{children:[i(p,{children:"\u25A1 \uB300\uD45C\uC790:"}),i(d,{children:P})]}),t(c,{children:[i(p,{children:"\u25A1 \uC804\uD654\uBC88\uD638:"}),i(d,{children:j(A)})]}),t(c,{children:[i(p,{children:"\u25A1 \uD329\uC2A4\uBC88\uD638:"}),i(d,{children:j(N)})]})]})]}),i(_,{children:"\uACAC\uC801\uB2E8\uAC00"}),i(k,{}),t(ee,{children:[t(w,{children:[t(m,{style:{marginBottom:"10px",borderBottom:"1px solid #000"},children:[i(C,{style:{backgroundColor:"#e3e3e3"},children:"\uACAC\uC801\uB2E8\uAC00\uC728"}),t(b,{style:{backgroundColor:"#e3e3e3"},children:[o.percent,"%"]})]}),t(m,{children:[i(C,{children:"\uADDC\uACA9"}),i(b,{children:"\uB2E8\uAC00\uC6D0"})]}),t(m,{children:[t(C,{children:["25-",o?.norminal_strength_1,"-",o?.slump_1]}),t(b,{children:[h(o?.price_1),"\uC6D0"]})]}),t(m,{children:[t(C,{children:["25-",o?.norminal_strength_2,"-",o?.slump_2]}),t(b,{children:[h(o?.price_2),"\uC6D0"]})]}),t(m,{children:[t(C,{children:["25-",o?.norminal_strength_3,"-",o?.slump_3]}),t(b,{children:[h(o?.price_3),"\uC6D0"]})]})]}),t(w,{children:[i(M,{children:"\uBE44\uACE0(\uD2B9\uAE30\uC0AC\uD56D)"}),i(ie,{children:o?.remarks})]})]}),i(ne,{children:"*\uC218\uB7C9\uC744 \uD2B9\uC815\uD558\uC9C0 \uC54A\uC740 \uB2E8\uAC00\uACC4\uC57D\uC774\uBA70, \uD0C0\uADDC\uACA9 \uB3D9\uC77C\uB960 \uC801\uC6A9"}),i(te,{children:i(O,{print:!0,percent:o.percent,location:"\uBD80\uC0B0"})})]});const Q=e.div`
  width: 600px;
  background-color: white;

  padding: 30px;
  display: none;

  /* position: absolute; */
`,X=e.div`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #000;

  padding: 20px;
  border: 1px solid #444;
`,Z=e.div`
  display: flex;
  flex-direction: row;
`,w=e.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`,_=e.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;

  margin-top: 10px;
`,M=e.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.36px;
  color: #000;
`,c=e.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.36px;
  color: #000;

  margin: 6px 0;
`,p=e.div`
  width: 30%;
`,d=e.div`
  width: 80%;
`,k=e.div`
  border-bottom: 1px solid #e3e3e3;
  margin: 6px 0 10px;
`,ee=e.div`
  display: flex;
  flex-direction: row;
`,m=e.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.36px;
  color: #000;

  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-top: 1px solid #000;

  &:last-child {
    border-bottom: 1px solid #000;
  }
`,C=e.div`
  width: 30%;

  padding: 6px;

  border-right: 1px solid #000;
`,b=e.div`
  width: 80%;

  padding: 6px;
`,ie=e.div`
  border-radius: 10px;
  border: 1px solid #000;
  height: 100%;

  padding: 14px 20px 6px;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.36px;
  color: #000;

  margin-top: 10px;
`,te=e.div``,ne=e.div`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;

  margin-top: 10px;
`;var Te=({open:l,data:x,estimation:n,onClose:r})=>{const{divRef:y,handleOnPrint:B}=V(),u=n?.field_space,a=n?.factory_space,[P,A]=W.exports.useState(!1);return console.log(n),i(L,{open:l,onClose:r,children:t(re,{children:[x&&t(oe,{children:[i(le,{children:i(ce,{children:"\uACAC\uC801\uB2E8\uAC00\uC728"})}),t(pe,{children:[i(de,{children:u?.name}),t(T,{children:[i(E,{children:"\uB0A9\uD488\uC0AC"}),i(S,{children:a?.name})]}),t(T,{children:[i(E,{children:"\uC8FC\uC18C"}),i(S,{children:a?.basic_address})]}),t(T,{children:[i(E,{children:"\uAC70\uB9AC\uC2DC\uAC04"}),t(S,{children:[t(se,{children:[$(x?.direction?.distance),"km"]}),i(ue,{}),t(xe,{children:[H(x?.direction?.duration),"\uBD84"]})]})]})]}),t(ae,{children:[t(fe,{children:[t(he,{children:[i(U,{children:"\uB2E8\uAC00\uC728"}),i(ge,{children:n?.percent}),i(me,{children:"%"}),i(U,{children:" \uC801\uC6A9 \uC2DC"})]}),t(R,{children:[i(s,{children:"25"}),i(f,{}),i(s,{children:n?.norminal_strength_1}),i(f,{}),i(s,{children:n?.slump_1}),t(I,{children:[h(n?.price_1),"\uC6D0"]})]}),t(R,{children:[i(s,{children:"25"}),i(f,{}),i(s,{children:n?.norminal_strength_2}),i(f,{}),i(s,{children:n?.slump_2}),t(I,{children:[h(n?.price_2),"\uC6D0"]})]}),t(R,{children:[i(s,{children:"25"}),i(f,{}),i(s,{children:n?.norminal_strength_3}),i(f,{}),i(s,{children:n?.slump_3}),t(I,{children:[h(n?.price_3),"\uC6D0"]})]}),i(Ce,{onClick:()=>{A(!0)},children:"+\uBD80\uC0B0\uC9C0\uC5ED \uB2E8\uAC00\uD45C"})]}),i(be,{children:"\uD2B9\uAE30\uC0AC\uD56D"}),i(Ae,{children:n?.remarks}),t(we,{children:[i(v,{type:D.OUTLINE,size:Y.PRIMARY,icon:"ic-upload-on",iconStyle:{width:24,height:24},containerStyle:{paddingTop:9,paddingBottom:9,marginRight:20,fontSize:14},onClick:()=>window.alert("TODO : 2\uCC28 \uBC94\uC704\uC785\uB2C8\uB2E4."),children:"\uCCA8\uBD80\uD30C\uC77C \uC5C5\uB85C\uB4DC"}),i(v,{type:D.OUTLINE,size:Y.PRIMARY,icon:"ic-print",iconStyle:{width:24,height:24},containerStyle:{paddingTop:9,paddingBottom:9,fontSize:14},onClick:B,children:"\uACAC\uC801\uC11C\uCD9C\uB825"})]}),i(v,{type:D.PRIMARY,containerStyle:{marginTop:30},onClick:r,children:"\uD655\uC778"})]})]}),i(q,{open:P,onClose:()=>A(!1)}),i(K,{divRef:y,fieldName:u?.name,fieldCompany:u?.company.name,paymentMethod:u?.field_info.payment_method,fieldStartDate:u?.field_info.start_at,fieldEndDate:u?.field_info.end_at,factoryName:a?.name,factoryAddr:a?.basic_address,salesUserName:a?.factory_info.ceo,salesUserPhone:a?.factory_info.tel,salesUserTel:a?.factory_info.fax,estimation:n})]})})};const re=e.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
`,oe=e.div``,le=e.div`
  margin: 50px auto 24px auto;
`,ce=e.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`,pe=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 40px;
  background-color: #f2f2f2;
`,T=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 11px;
`,de=e.div`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  color: #000;

  margin: 14px auto;
`,E=e.div`
  width: 62px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #999;
`,S=e.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #222;
`,ae=e.div`
  padding: 24px 40px;
`;e.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;

  margin-bottom: 9px;
`;e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`;e.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 1px solid #e3e3e3;
`;e.div`
  background-color: #f2f2f2;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;

  padding: 10px 14px;
`;e.div`
  display: flex;
  align-items: center;

  background-color: #ffffff;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #222;

  padding: 10px 14px 10px 16px;
`;e.span`
  font-size: 11px;
  font-weight: normal;
  letter-spacing: -0.22px;
  text-align: left;
  color: #999;
  margin-left: 6px;
`;e.div`
  font-size: 11px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;const se=e.span`
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,ue=e.span`
  display: block;
  width: 1px;
  height: 10px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`,xe=e.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,fe=e.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 30px;
  border-radius: 20px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  margin-bottom: 20px;
`,he=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 14px;
`,U=e.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-right: 24px;
`,ge=e.div`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.56px;
  text-align: center;
  color: #258fff;

  margin-right: 6px;
`,me=e.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;

  margin-right: 6px;
`,f=e.span`
  display: block;
  width: 4px;
  height: 1px;
  background-color: #000;
  margin: 0px 4px;
`,R=e.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`,s=e.div`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #999;
`,I=e.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: normal;
  text-align: right;
  color: #1f1d1d;
  margin-left: auto;
`,Ce=e.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: right;
  color: #c7c7c7;
  text-decoration: underline;
  margin-top: 5px;
  cursor: pointer;
`,be=e.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;
`,Ae=e.div`
  height: 68px;
  padding: 14px 20px 6px;
  border-radius: 12px;
  border: solid 1px #f2f2f2;
  background-color: #fff;

  font-size: 13px;
  font-weight: normal;
  line-height: 1.54;
  letter-spacing: normal;
  color: #000;

  margin-top: 8px;
`,we=e.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 14px;
`;export{g as B,Te as E,q as R};
