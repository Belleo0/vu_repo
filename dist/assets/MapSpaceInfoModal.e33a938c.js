import{r as p,j as n,a as e,n as t,F as E}from"./index.fa23706f.js";import{g as x,c as h,h as k}from"./Header.8f74d7dd.js";import{c as O,a as Y}from"./convertDuration.9811f74f.js";var he=({index:s,name:i,address:u,distance:_,duration:F,selected:w,onClick:S,onInfo:T,onChangePath:I,hideWithoutName:f,totalDuration:j})=>{const[a,d]=p.exports.useState(!1),[v,B]=p.exports.useState(!1),g=p.exports.useRef(null),C=p.exports.useMemo(()=>!!(w||v||a),[w,v,a]),D=({target:m})=>{a&&g.current&&!g.current.contains(m)&&d(!1)};return p.exports.useEffect(()=>{if(a)return window.addEventListener("click",D),()=>{window.removeEventListener("click",D)}},[a]),n(L,{ref:g,children:[e(W,{src:C?x("../assets/img-map-bubble-on.png"):x("../assets/img-map-bubble.png")}),n(P,{onMouseEnter:()=>B(!0),onMouseLeave:()=>B(!1),onClick:f===!1?()=>d(!0):S,children:[f&&e(H,{selected:C,children:(s+1).toString().padStart(2,"0")}),f?n(N,{children:[e(R,{children:i}),j!=="null"&&n($,{children:[n(q,{children:[O(_),"km"]}),e(K,{}),n(V,{children:[Y(F),"\uBD84"]})]})]}):e(ie,{children:e(oe,{children:i})}),C&&e(X,{onClick:m=>{m.stopPropagation(),d(!0)},children:e(U,{src:x("../assets/ic-search-on.svg")})})]}),a&&n(G,{children:[n(J,{children:[e(Z,{children:i}),e(ee,{children:u}),n(ne,{children:[e(M,{onClick:()=>{T(),d(!1)},children:"\uACF5\uC7A5\uC815\uBCF4"}),f&&n(M,{onClick:()=>{I(),d(!1)},children:[e(te,{src:x("../assets/ic-car-on.svg")}),"\uACBD\uB85C"]})]})]}),e(Q,{})]})]})};const L=t.div`
  display: block;
  position: relative;
  width: 175px;
  height: 64px;
  &:hover {
    z-index: 9999;
  }
`,W=t.img`
  width: 100%;
  height: 100%;
`,P=t.div`
  top: 0;
  left: 0;
  display: flex;
  position: absolute;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 10px 20px 10px;
`,H=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;

  border-radius: 17px;

  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.28px;
  text-align: center;
  color: #fff;
  margin-right: 10px;

  ${({selected:s})=>s?h`
          background-color: #258fff;
        `:h`
          background-color: #c7c7c7;
        `}
`,N=t.div`
  display: flex;
  flex-direction: column;
`,R=t.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000;

  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$=t.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`,q=t.span`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.26px;
  text-align: left;
  color: #000;
`,K=t.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 8px;
  background-color: #c7c7c7;
`,V=t.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #000;
`,X=t.div`
  position: absolute;
  top: -15px;
  right: -9px;
  width: 34px;
  height: 34px;
  padding: 7px;
  border-radius: 17px;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`,U=t.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`,G=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -156px;
  right: -108px;
`,J=t.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.1);
  cursor: default;
  z-index: 9999999;
`,Q=t.span`
  width: 12px;
  border-top: 12px solid white;
  border-right: 12px solid transparent;
  border-left: 12px solid transparent;
`,Z=t.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: left;
  color: #258fff;
  margin-bottom: 4px;
`,ee=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;
`,ne=t.div`
  display: flex;
`,M=t.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 7px 0px;
  border-radius: 6px;
  border: solid 1px #4490f7;
  background-color: #fff;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #258fff;

  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`,te=t.img`
  width: 20px;
  height: 20px;
  margin: 0 2px 0 0;
`,ie=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,oe=t.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000;
`;var ue=({open:s,data:i,onClose:u})=>e(re,{isOpen:s,children:i&&n(E,{children:[e(le,{src:x("../assets/ic-del.svg"),onClick:u}),e(ce,{children:i?.name}),e(se,{}),e(z,{children:"\uD68C\uC0AC\uC815\uBCF4"}),n(A,{style:{marginBottom:24},children:[n(o,{children:[n(r,{children:["\uD68C\uC0AC\uBA85",e(c,{children:"Trade name."})]}),e(l,{children:i?.name})]}),n(o,{children:[n(r,{children:["\uC8FC\uC18C ",e(c,{children:"Address."})]}),e(l,{children:i?.basic_address})]}),n(o,{children:[n(r,{children:["\uB300\uD45C\uC790 ",e(c,{children:"Arep."})]}),e(l,{children:i?.company?.ceo_name})]}),n(o,{children:[n(r,{children:["\uC804\uD654\uBC88\uD638 ",e(c,{children:"Tel."})]}),e(l,{children:i?.factory_info?.tel})]}),n(o,{children:[n(r,{children:["\uD329\uC2A4\uBC88\uD638 ",e(c,{children:"Fax."})]}),e(l,{children:i?.factory_info?.fax})]})]}),e(z,{children:"\uB808\uBBF8\uCF58 \uC815\uBCF4"}),n(A,{style:{marginBottom:24},children:[n(o,{children:[n(r,{children:["\uB808\uBBF8\uCF58\uBC30\uCCD0\uD50C\uB79C\uD2B8",e(c,{children:"Remicon Batcher Plant"})]}),e(l,{style:{padding:0},children:n(ae,{children:[n(o,{children:[e(b,{children:"\uAE30\uC218 NO."}),e(y,{children:i?.factory_info?.no})]}),n(o,{children:[n(b,{children:["\uB808\uBBF8\uCF58\uC0DD\uC0B0\uB2A5\uB825",e(de,{children:"Productive Capa(\u33A1/hr)"})]}),e(y,{children:i?.factory_info?.capa})]}),n(o,{style:{border:0},children:[e(b,{children:"\uACC4 Total"}),e(y,{children:i?.factory_info?.total})]})]})})]}),n(o,{children:[n(r,{children:["\uBBF9\uC11C\uD2B8\uB7ED(\uB300) ",e(c,{children:"Remicon Mixer Truck"})]}),e(l,{children:i?.factory_info?.truck_count})]}),n(o,{children:[n(r,{children:["\uC2DC\uBA58\uD2B8\uC0AC\uC77C\uB85C(TON) ",e(c,{children:"Cement Silo"})]}),e(l,{children:i?.factory_info?.cement_silo})]}),n(o,{children:[n(r,{children:["\uCD5C\uCD08\uAC00\uB3D9\uC77C ",e(c,{children:"The day of initial operation"})]}),e(l,{children:k(i?.factory_info?.start_at).format("YYYY.MM.DD")})]}),n(o,{children:[n(r,{children:["KS\uCDE8\uB4DD\uC77C\uC790 ",e(c,{children:"The day of KS acquired"})]}),e(l,{children:k(i?.factory_info?.ks_acquired_at).format("YYYY.MM.DD")})]})]})]})});const re=t.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: 690px;
  height: 100%;
  padding: 30px 50px;
  background-color: white;
  z-index: 99999999;

  ${({isOpen:s})=>s?h`
          transform: translateX(0%);
        `:h`
          transform: translateX(100%);
          display: none;
        `}

  transition: transform 0.25s ease-in-out;
  overflow-y: scroll;
`,le=t.img`
  display: block;
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
  object-fit: contain;
  margin-left: auto;
  cursor: pointer;
`,ce=t.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
`,se=t.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 20px 0px;
  background-color: #e3e3e3;
`,z=t.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  color: #000;
  margin-bottom: 10px;
`,A=t.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`,o=t.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`,r=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1;
  min-width: 180px;
  max-width: 164px;
  padding: 17px 20px;
  background-color: #f2f2f2;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;
`,l=t.div`
  display: flex;
  align-items: center;

  flex: 2;
  padding: 17px 15px;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,c=t.span`
  display: block;
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`,ae=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,b=t.div`
  display: flex;
  align-items: center;

  min-width: 257px;
  padding: 8px 24px;
  background-color: #f2f2f2;

  font-size: 13px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;
`,y=t.div`
  display: flex;
  align-items: center;

  flex: 1;
  padding: 8px 21px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,de=t.span`
  font-size: 11px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;export{ue as M,he as S};
