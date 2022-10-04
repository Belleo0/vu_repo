import{j as i,a as e,n as t,u as y,b as _,r as l,c as j}from"./index.fa23706f.js";import{A as R}from"./AuthLayout.b7197391.js";import{g as n,c as D}from"./Header.8f74d7dd.js";import{B as w,a as b}from"./Button.2ebe35cd.js";import{u as M}from"./useLocalStorage.e35586a4.js";import{u as P}from"./useSpaces.40cf6e61.js";var L=({search:o,setSearch:s,handleSearch:u})=>i(G,{children:[e(O,{children:"\uAC74\uC124\uC0B0\uC5C5\uC758 \uC0C8\uB85C\uC6B4 \uD50C\uB7AB\uD3FC\uC744 \uC81C\uC2DC\uD569\uB2C8\uB2E4"}),e(Z,{children:"\uB808\uBBF8\uCF58\uC774 \uD544\uC694\uD558\uC2E0\uAC00\uC694?"}),e(H,{children:i(N,{children:[e(Y,{placeholder:"\uAC74\uC124\uD604\uC7A5 \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694",value:o,onChange:c=>{s(c.target.value)},onKeyPress:c=>{c.key==="Enter"&&u()}}),e(q,{src:n("../assets/ic-search.svg"),onClick:u})]})})]});const G=t.div`
  justify-content: center;
  display: flex;
  width: 100%;
  height: 852px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: multiply;
  background-image: url(${n("../assets/img/main.png")});
  background-size: cover;
`,N=t.div`
  display: flex;
  width: 680px;
  border-radius: 6px;
  background-color: #fafafa;
`,Y=t.input`
  width: 100%;
  height: 70px;
  font-size: 22px;
  padding: 24px 19px;
  background: none;
  border: 0;
  outline: 0;
  &::placeholder {
    color: #c7c7c7;
    font-size: 22px;
    letter-spacing: -0.28px;
  }
`,q=t.img`
  width: 32px;
  height: 32px;
  margin: 19px 24px 19px auto;
  cursor: pointer;
`,H=t.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 56px;
`,O=t.div`
  margin-right: auto;
  margin-left: auto;
  font-weight: 200;
  font-size: 24px;
  color: #fff;
`,Z=t.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  line-height: 1.48;
`;var K=()=>{const o=y();return i(U,{children:[e(W,{children:"\uAC74\uC124\uD604\uC7A5"}),e(X,{children:"\uAC74\uC124\uD604\uC7A5\uC744 \uB4F1\uB85D\uD558\uACE0 \uB808\uBBF8\uCF58 \uACF5\uC7A5\uC744 \uB9CC\uB098\uBCF4\uC138\uC694"}),e(J,{children:i(Q,{onClick:()=>o("/my-space"),children:[e(V,{src:n("../assets/ic-plus-blue.svg")}),"\uAC74\uC124\uD604\uC7A5\uB4F1\uB85D"]})})]})};const U=t.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: #fff;
`,J=t.div`
  margin-top: 50px;
  margin: 0 auto;
`,Q=t.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23c7c7c7' stroke-width='3' stroke-dasharray='2%2c7' stroke-dashoffset='57' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 6px;
  width: 380px;
  height: 160px;
  background-color: #fff;
  font-size: 18px;
  margin-top: 50px;
  line-height: 1.2;
  color: #258fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`,V=t.img`
  width: 32px;
  height: 32px;
  margin: 0 auto 12px auto;
`,W=t.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`,X=t.div`
  font-size: 16px;
  color: #777;
  margin-top: 10px;
  line-height: 1.56;
`;var tt=()=>i(nt,{children:[e(et,{children:"\uB808\uBBF8\uCF58 \uACF5\uC7A5 \uACC4\uC57D\uD558\uBA74 \uD2B9\uBCC4\uD55C \uD61C\uD0DD\uC774 \uAC00\uB2A5!"}),e(it,{children:"\uAC74\uC124\uD604\uC7A5\uC744 \uB4F1\uB85D\uD558\uACE0 \uB808\uBBF8\uCF58 \uACF5\uC7A5\uC744 \uB9CC\uB098\uBCF4\uC138\uC694"}),i(ot,{children:[i(x,{children:[e(m,{src:n("../assets/img/delivery_img.png")}),i(B,{children:[e(h,{children:" \uCD5C\uC801\uC758 \uAC74\uC124\uC0AC/\uB808\uBBF8\uCF58\uC0AC \uB4F1\uB85D"}),e(f,{children:"\uAC74\uC124\uD604\uC7A5 \uC704\uCE58\uB97C \uAE30\uBC18\uC73C\uB85C \uD604\uC7A5\uC5D0 \uC801\uD569\uD55C \uB808\uBBF8\uCF58\uC0AC\uC758 \uACAC\uC801\uC744 \uC81C\uC548\uBC1B\uACE0 \uC9C1\uC811 \uAC70\uB798\uCC98 \uB4F1\uB85D\uC5D0\uC11C \uC8FC\uBB38\uAE4C\uC9C0"})]})]}),e(F,{}),i(x,{children:[e(m,{src:n("../assets/img/calender_img.png")}),i(B,{children:[e(h,{children:"\uB808\uBBF8\uCF58 \uBB3C\uB7C9\uBC30\uC815 \uC2DC\uC2A4\uD15C \uC77C\uC815 \uAD00\uB9AC"}),e(f,{children:"\uAC74\uC124\uC0AC \uB808\uBBF8\uCF58\uC0AC \uB2F4\uB2F9\uC790\uC758 \uCC44\uD305\uC744 \uD1B5\uD574 \uB808\uBBF8\uCF58 \uBB3C\uB7C9\uBC30\uC815 \uD6C4 \uD604\uC7A5\uBCC4 \uB4F1\uB85D\uB41C \uC77C\uC815\uAD00\uB9AC\uB97C \uCE98\uB9B0\uB354\uC5D0\uC11C"})]})]}),e(F,{}),i(x,{children:[e(m,{src:n("../assets/img/list_img.png")}),i(B,{children:[e(h,{children:" \uAC04\uD3B8\uD55C \uBB3C\uB7C9 \uB4F1\uB85D/\uC218\uC815"}),e(f,{children:"\uAC01 \uD604\uC7A5\uC758 \uB0A0\uC528\uC815\uBCF4 \uC81C\uACF5\uC73C\uB85C \uBC30\uC815\uB41C \uB808\uBBF8\uCF58\uBB3C\uB7C9\uC758 \uC5F0\uAE30\uC640 \uC218\uC815\uAE4C\uC9C0 \uD55C\uBC88\uC5D0 \uAC00\uB2A5!"})]})]})]})]});const et=t.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`,it=t.div`
  font-size: 16px;
  color: #777;
  margin-top: 14px;
  line-height: 1.56;
`,h=t.div`
  font-size: 22px;
  margin-top: 10px;
  text-align: left;
  color: #258fff;
  line-height: 1.56;
  font-weight: bold;
`,f=t.div`
  font-size: 18px;
  color: #222;
  margin-top: 12px;
  text-align: left;
  line-height: 1.56;
`;t.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`;const nt=t.div`
  padding-top: 100px;
  background-color: #fafafa;
  text-align: center;
  display: flex;
  flex-direction: column;
`,ot=t.div`
  margin: 100px auto;
  padding: 0 40px;
`,x=t.div`
  display: flex;
`,B=t.div`
  width: 426px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,m=t.img`
  width: 140px;
  height: 140px;
  margin: 0 50px;
`,F=t.span`
  display: block;
  width: 720px;
  height: 1px;
  margin: 50px 0px;
  background-color: #c7c7c7;
`;var ut=()=>i(at,{children:[e(rt,{children:"CONAZ\uC640 \uD568\uAED8\uD558\uB294"}),e(ct,{children:"\uAC74\uC124\uD604\uC7A5\uC744 \uB4F1\uB85D\uD558\uACE0 \uB808\uBBF8\uCF58 \uACF5\uC7A5\uC744 \uB9CC\uB098\uBCF4\uC138\uC694"}),i(st,{children:[i(S,{children:[e(a,{src:n("../assets/img/img_Daewoo.png")}),e(a,{src:n("../assets/img/img_Hyundai.png")}),e(a,{src:n("../assets/img/img_Tongyang.png")}),e(a,{src:n("../assets/img/img_GS.png")})]}),i(S,{children:[e(a,{src:n("../assets/img/img_Tongyang.png")}),e(a,{src:n("../assets/img/img_GS.png")}),e(a,{src:n("../assets/img/img_Daewoo.png")}),e(a,{src:n("../assets/img/img_Hyundai.png")})]})]})]});const rt=t.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`,ct=t.div`
  font-size: 16px;
  color: #777;
  margin-top: 14px;
  line-height: 1.56;
`;t.div`
  font-size: 22px;
  margin-top: 10px;
  text-align: left;
  color: #258fff;
  line-height: 1.56;
  font-weight: bold;
`;t.div`
  font-size: 18px;
  color: #222;
  margin-top: 12px;
  text-align: left;
  line-height: 1.56;
`;t.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`;const at=t.div`
  padding: 100px 0;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
`,st=t.div`
  margin: 100px auto 0px;
`,S=t.div`
  display: flex;
  margin: 30px auto;
`,a=t.img`
  width: 300px;
  height: 120px;
`;var Ct=()=>i(gt,{children:[e(lt,{children:"\uC774\uC6A9\uAC00\uC774\uB4DC"}),e(pt,{children:"\uC774\uC6A9 \uAC00\uC774\uB4DC\uB97C \uD655\uC778\uD558\uACE0 \uC0AC\uC774\uD2B8\uB97C \uC774\uC6A9\uD574 \uBCF4\uC138\uC694!"}),e(dt,{src:n("../assets/img/img_guide.png")})]});const lt=t.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`,pt=t.div`
  font-size: 16px;
  color: #777;
  margin-top: 14px;
  line-height: 1.56;
`;t.div`
  font-size: 22px;
  margin-top: 10px;
  text-align: left;
  color: #258fff;
  line-height: 1.56;
  font-weight: bold;
`;t.div`
  font-size: 18px;
  color: #222;
  margin-top: 12px;
  text-align: left;
  line-height: 1.56;
`;t.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`;const gt=t.div`
  padding: 100px 0;
  background-color: #fafafa;
  text-align: center;
  display: flex;
  flex-direction: column;
`,dt=t.img`
  width: 1078px;
  height: 678px;
  margin: 80px auto 0px auto;
`;var ht=()=>e(ft,{children:i(xt,{children:[e(z,{children:"CONAZ \uC11C\uBE44\uC2A4\uB97C"}),e(z,{children:"\uC571\uC5D0\uC11C\uB3C4 \uC0AC\uC6A9\uD558\uC138\uC694!"}),i(Bt,{children:[e(w,{type:b.PRIMARY,containerStyle:{width:170,height:50,borderRadius:"25px",marginRight:"20px"},icon:"ic-apple",children:"App Store"}),e(w,{type:b.PRIMARY,containerStyle:{width:170,height:50,borderRadius:"25px"},icon:"ic-google-play",children:"Play Store"})]})]})});t.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`;t.div`
  font-size: 16px;
  color: #777;
  margin-top: 10px;
  line-height: 1.56;
`;t.div`
  font-size: 22px;
  margin-top: 10px;
  text-align: left;
  color: #258fff;
  line-height: 1.56;
  font-weight: bold;
`;t.div`
  font-size: 18px;
  color: #222;
  margin-top: 12px;
  text-align: left;
  line-height: 1.56;
`;const z=t.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`,ft=t.div`
  width: 100%;
  height: 360px;
  display: flex;
  background-image: url(${n("../assets/img/img_appbg.png")});
  background-size: cover;
  background-position: center center;
  color: #fff;
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0.2);
`,xt=t.div`
  margin: 110px auto 106px 360px;
`,Bt=t.div`
  display: flex;
  margin-top: 30px;
`;var mt=({myspaces:o})=>{const s=y(),u=o?.length;return e(At,{children:i(Dt,{children:[i(yt,{children:[e(A,{style:{paddingRight:"137px"},children:""}),i(A,{children:[e(zt,{children:"\uAC74\uC124\uD604\uC7A5"}),e(kt,{children:"\uAC74\uC124\uD604\uC7A5\uC744 \uB4F1\uB85D\uD558\uACE0 \uB808\uBBF8\uCF58 \uACF5\uC7A5\uC744 \uB9CC\uB098\uBCF4\uC138\uC694"})]}),e(A,{children:i(Ft,{onClick:()=>s("/my-space"),children:["MY \uAC74\uC124\uD604\uC7A5",e(It,{src:n("../assets/ic-arrow-right.svg")})]})})]}),i(vt,{layout:u===0,children:[o&&o.map((c,p)=>e(bt,{onClick:()=>s("/my-space"),children:c.name},`space-${c.id}-${p}`)),i(wt,{onClick:()=>s("/add-construction-field/step-1"),children:[e(St,{src:n("../assets/ic-plus-blue.svg")}),"\uAC74\uC124\uD604\uC7A5 \uB4F1\uB85D\uD558\uAE30"]})]})]})})};const At=t.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: #fff;
`,yt=t.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-content: center;
`,A=t.div`
  align-content: center;
  margin: auto 0;
`,vt=t.div`
  ${({layout:o})=>o?D`
          margin: 50px auto 0 auto;
          display: flex;
          justify-content: center;
          text-align: center;
        `:D`
          margin: 50px auto 0 auto;
          height: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-content: center;
        `}
`,Dt=t.div`
  width: 1230px;
  margin: auto;
`,wt=t.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23c7c7c7' stroke-width='3' stroke-dasharray='2%2c7' stroke-dashoffset='57' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 6px;
  width: 380px;
  height: 100px;
  background-color: #fff;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
  color: #258fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 10px 15px;
`,bt=t.div`
  width: 380px;
  height: 100px;
  padding: 30px;
  border: 2px solid #e6e6e6;
  border-radius: 6px;
  background-color: #fff;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
  color: #000;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin: 10px 15px;
`,Ft=t.div`
  width: auto;
  height: 36px;
  padding: 30px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 18px;
  border: 1px solid #c7c7c7;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  padding: 8px 8px 8px 15px;
  margin-right: 15px;
`,St=t.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`,zt=t.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`,kt=t.div`
  font-size: 16px;
  color: #777;
  margin-top: 8px;
  line-height: 1.56;
`,It=t.img`
  width: 14px;
  height: 14px;
  margin-left: 10px;
`;var Lt=()=>{const o=y(),s=_(),[u,c]=l.exports.useState(""),[p,k]=l.exports.useState(),{data:g=[]}=P("false"),[Et,I]=M("@add-construction-field",{searchItem:u}),$=l.exports.useMemo(()=>{if(g){const r=g.map((C,d)=>[C,d]);return r.sort((C,d)=>d[1]-C[1]),r.map(C=>C[0])}},[g]),E=()=>{if(u.length===0)return window.alert("\uAC74\uC124\uD604\uC7A5 \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");o("/remicon-map",{state:{searchText:u}})};l.exports.useEffect(()=>{I(r=>({...r,searchItem:u}))},[u]);const T=async()=>{try{const{data:r}=await j.get("http://13.125.245.83:8090/api/banners");console.log(r);const v=r.files.banners_files;k(v)}catch(r){console.log(r)}};return l.exports.useEffect(()=>{console.log(T()),console.log(p)},[]),e(R,{children:i($t,{children:[e(L,{search:u,setSearch:c,handleSearch:E}),s?e(mt,{myspaces:$||[]}):e(K,{}),e(tt,{}),e(ut,{}),e(Ct,{}),e(ht,{})]})})};const $t=t.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;t.div`
  font-size: 28px;
  color: #000;
  line-height: 1.56;
`;t.div`
  font-size: 16px;
  color: #777;
  margin-top: 10px;
  line-height: 1.56;
`;t.div`
  font-size: 22px;
  margin-top: 10px;
  text-align: left;
  color: #258fff;
  line-height: 1.56;
  font-weight: bold;
`;t.div`
  font-size: 18px;
  color: #222;
  margin-top: 12px;
  text-align: left;
  line-height: 1.56;
`;t.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`;export{Lt as default};
