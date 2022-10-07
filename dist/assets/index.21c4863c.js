import{j as n,F as Me,a as e,n as t,u as Ee,r as i,d as ge}from"./index.fa23706f.js";import{S as ve}from"./SpaceLayout.78f58f87.js";import{u as Te}from"./useSelectedSpaceId.e98fa8e8.js";import{u as ze}from"./useMySpaceInfo.ce66ec42.js";import{c as ke,a as Re}from"./convertDuration.9811f74f.js";import{h as L,g,c as m,u as Oe,S as _e,e as Ne}from"./Header.8f74d7dd.js";import{T as N}from"./TextModal.458f5750.js";import{B as Y,a as I}from"./Button.2ebe35cd.js";import{M as me,b as De,a as Ye,C as $e}from"./Modal.5ea91f83.js";import{U as Pe}from"./UserInfoModal.f3969620.js";import{E as We,R as Ue}from"./EstimationInfoModal.064f35c0.js";import{T as je}from"./Tooltip.7e861596.js";import{l as Le,F as Ge}from"./lodash.4b3a1baf.js";import{u as qe}from"./useSpaces.40cf6e61.js";import{u as Qe}from"./useFactoryMaps.6dedbd40.js";import"./ProfileBox.54d21f9f.js";import"./useFriends.38f9623d.js";import"./common.0c17b2bd.js";import"./RemiconUnitPriceTable.c370c807.js";import"./onPrint.f762b6e4.js";import"./_commonjsHelpers.b8add541.js";var Ie=(r=>(r.REQUESTED="\uACAC\uC801 \uC694\uCCAD",r.RESPONDED="\uACAC\uC801 \uC811\uC218",r.REGISTERED="\uB0A9\uD488\uC0AC \uB4F1\uB85D",r))(Ie||{}),Ve=({status:r})=>n(Me,{children:[e(Ke,{children:Ie[r]}),n(He,{children:[e(Je,{}),n(Xe,{children:[r==="REQUESTED"?e(pe,{children:"1"}):e(de,{children:"1"}),r==="RESPONDED"?e(pe,{children:"2"}):e(de,{children:"2"}),r==="REGISTERED"?e(pe,{children:"3"}):e(de,{children:"3"})]})]})]});const Ke=t.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-align: center;
  color: #222;
  margin-bottom: 10px;
`,He=t.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 83px;
  height: 16px;
`,Je=t.div`
  width: 100%;
  height: 3px;
  border-radius: 1.5px;
  background-color: #e3e3e3;
`,Xe=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`,de=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #e3e3e3;

  font-size: 10px;
  font-weight: 600;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fff;
`,pe=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  box-shadow: 1px 1px 6px 0 rgba(37, 143, 255, 0.16);
  background-color: #ff7d00;

  font-size: 10px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: #fff;
`;var Ze=({open:r,data:a,onClose:d})=>{const p=a?.factory_space,l=p?.factory_info,u=l?.tel.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3"),c=l?.fax.replace(/^(\d{3,4})(\d{4})$/gm,"$1-$2");return e(me,{open:r,onClose:d,children:e(et,{children:a&&a?.factory_space&&n(tt,{children:[e(nt,{children:e(ot,{children:"\uB808\uBBF8\uCF58 \uACF5\uC7A5"})}),n(it,{children:[e(rt,{children:p.name}),n(J,{children:[e(X,{children:"\uC8FC\uC18C"}),e(Z,{children:p.basic_address})]}),n(J,{children:[e(X,{children:"\uB300\uD45C\uC790"}),e(Z,{children:p.company.ceo_name})]}),n(J,{children:[e(X,{children:"\uC804\uD654\uBC88\uD638"}),e(Z,{children:u})]}),n(J,{children:[e(X,{children:"\uD329\uC2A4\uBC88\uD638"}),e(Z,{children:c})]})]}),n(st,{children:[e(lt,{children:"\uB808\uBBF8\uCF58 \uC815\uBCF4"}),e(at,{children:n(R,{style:{width:360},children:["\uB808\uBBF8\uCF58\uBC30\uCCD0\uD50C\uB79C\uD2B8",e(be,{children:"Remicon Batcher Plant"})]})}),n(O,{children:[e(R,{style:{width:224},children:"\uAE30\uC218 NO."}),e(_,{children:l.no})]}),n(O,{children:[n(R,{style:{width:224},children:["\uB808\uBBF8\uCF58\uC0DD\uC0B0\uB2A5\uB825",e(be,{children:"Productive Capa(\u33A1/hr)"})]}),e(_,{children:l.capa})]}),n(O,{children:[e(R,{style:{width:224},children:"\uACC4 Total"}),e(_,{children:l.total})]}),n(O,{children:[n(R,{style:{width:164},children:["\uBBF9\uC11C\uD2B8",e(ee,{children:"Remicon Mixer Truck"})]}),e(_,{children:l.truck_count})]}),n(O,{children:[n(R,{style:{width:164},children:["\uC2DC\uBA58\uD2B8\uC0AC\uC77C\uB85C",e(ee,{children:"Cement Silo"})]}),e(_,{children:l.cement_silo})]}),n(O,{children:[n(R,{style:{width:164},children:["\uCD5C\uCD08\uAC00\uB3D9\uC77C",e(ee,{children:"The day of initial operation"})]}),e(_,{children:L(l.start_at).format("YYYY.MM.DD")})]}),n(O,{children:[n(R,{style:{width:164},children:["KS\uCDE8\uB4DD\uC77C\uC790",e(ee,{children:"The day of KS acquired"})]}),e(_,{children:L(l.ks_acquired_at).format("YYYY.MM.DD")})]}),e(Y,{type:I.PRIMARY,containerStyle:{marginTop:30},onClick:d,children:"\uD655\uC778"})]})]})})})};const et=t.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
`,tt=t.div``,nt=t.div`
  margin: 50px auto 24px auto;
`,ot=t.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`,it=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 40px;
  background-color: #f2f2f2;
`,J=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 11px;
`,rt=t.div`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.44px;
  color: #000;

  margin: 14px auto;
`,X=t.div`
  width: 62px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #999;
`,Z=t.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: #222;
`,st=t.div`
  padding: 24px 40px;
`,lt=t.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;

  margin-bottom: 9px;
`,at=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`,O=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 1px solid #e3e3e3;
`,R=t.div`
  background-color: #f2f2f2;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;

  border-right: 1px solid #e3e3e3;

  padding: 10px 14px;
`,_=t.div`
  display: flex;
  align-items: center;

  background-color: #ffffff;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #222;

  padding: 10px 14px 10px 16px;
`,be=t.span`
  font-size: 11px;
  font-weight: normal;
  letter-spacing: -0.22px;
  text-align: left;
  color: #999;
  margin-left: 6px;
`,ee=t.div`
  font-size: 11px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-top: 4px;
`;var ct=({data:r=[],estimations:a=[],revalidate:d})=>{const p=Ee(),[l,u]=i.exports.useState([]),[c,C]=i.exports.useState(null),[M,f]=i.exports.useState({x:0,y:0}),[x,v]=i.exports.useState(!1),[G,A]=i.exports.useState(!1),[w,S]=i.exports.useState(!1),[F,W]=i.exports.useState(null),[E,$]=i.exports.useState(!1),[k,P]=i.exports.useState(!1),[T,B]=i.exports.useState(!1),[te,q]=i.exports.useState(!1),[U,j]=i.exports.useState(null),[Q,Be]=i.exports.useState(null),[ne,oe]=i.exports.useState(!1),[ie,re]=i.exports.useState(!1),[se,V]=i.exports.useState(!1),[le,K]=i.exports.useState(!1),H=o=>{if(o&&a)return a.find(z=>z.id===o)},ae=o=>{l.includes(o)?u(h=>h.filter(z=>z!==o)):u(h=>h.concat(o))},ce=(o,h)=>{Boolean(h)?p("/order",{state:{id:o}}):P(!0)},ue=async()=>{await ge.post(`/estimations/${F?.id}/register`),d(),A(!1)},s=async()=>{await Promise.all(l.map(async o=>await ge.delete(`/estimations/${o}`))),await d(),u([]),S(!1)},D=i.exports.useMemo(()=>{if(r)return console.log(r),r.sort((h,z)=>L(h.created_at).format("YYYY.MM.DD")===L(z.created_at).format("YYYY.MM.DD")?h.direction.duration-z.direction.duration:z.id-h.id)},[r]);return n(ut,{children:[n(ye,{children:[e(b,{style:{maxWidth:120},children:e(Bt,{disabled:l.length===0,onClick:l.length===0?()=>null:()=>S(!0),children:"\uC0AD\uC81C"})}),e(b,{children:"\uB808\uBBF8\uCF58 \uACF5\uC7A5"}),e(b,{children:"\uC0C1\uD0DC"}),e(b,{style:{minWidth:150},children:"\uAC70\uB9AC/\uC2DC\uAC04"}),e(b,{style:{minWidth:140},children:"\uC0DD\uC0B0\uC124\uBE44"}),e(b,{children:"\uC601\uC5C5\uC0AC\uC6D0"}),n(b,{children:["\uB2E8\uAC00\uC728",e(Ae,{src:g("../assets/ic-question.svg"),onClick:()=>v(!x),onMouseOver:o=>{f({x:o.clientX,y:o.clientY})}}),x&&e(je,{containerStyle:{top:M.y,left:M.x},children:n(Rt,{children:[e(It,{children:"\uB2E8\uAC00\uC728"}),n(Y,{type:I.OUTLINE,containerStyle:{width:130,height:36,borderRadius:33,margin:"auto"},onClick:()=>{K(!0),v(!1)},children:["\uC9C0\uC5ED\uB2E8\uAC00\uD45C",e(Ae,{src:g("../assets/ic-arrow-blue-right.svg")})]})]})})]}),e(b,{children:"\uB0A9\uD488\uC0AC \uB4F1\uB85D"}),e(b,{children:"\uC8FC\uBB38"})]}),D?.map(o=>n(ye,{children:[e(y,{style:{maxWidth:120},children:e(Dt,{active:l.includes(o?.id),onClick:()=>ae(o?.id),children:e(bt,{src:l.includes(o?.id)?g("../assets/ic-check-only-ic-white.svg"):g("../assets/ic-check-only-ic-grey.svg")})})}),n(y,{style:{flexDirection:"column"},children:[e(dt,{onClick:()=>{j(o),setTimeout(()=>{q(!0)},250)},children:o?.factory_space?.name}),e(pt,{children:o?.factory_space?.basic_address})]}),e(y,{style:{flexDirection:"column"},children:e(Ve,{status:o?.status})}),n(y,{style:{minWidth:150},children:[n(Ct,{children:[ke(o?.direction?.distance),"km"]}),e(ft,{}),n(xt,{children:[Re(o?.direction?.duration),"\uBD84"]})]}),e(y,{style:{minWidth:140},children:"B/P 210m\xB3/h x 2"}),e(y,{children:o?.sales_user?.name&&n(ht,{onClick:()=>{j(o?.sales_user),Be(o?.factory_space?.company?.name),setTimeout(()=>{re(!0)},250)},children:[o?.sales_user?.name," ",o?.sales_user?.position]})}),e(y,{children:o.status==="REQUESTED"?n(Ft,{children:[e(Et,{children:"\uACAC\uC801\uC694\uCCAD \uC77C\uC2DC"}),e(kt,{children:L(o.created_at).format("YYYY.MM.DD")})]}):n(yt,{children:[e(At,{src:g("../assets/ic-price-rate.svg"),onClick:()=>{j(o),C(H(o.id)),V(!0)}}),n(wt,{children:[o?.percent,"%"]})]})}),e(y,{style:{minWidth:140},children:e(gt,{children:e(St,{disabled:o.status==="REGISTERED"||o.status==="REQUESTED",onClick:o.status==="REGISTERED"?()=>$(!0):o.status==="REQUESTED"?()=>oe(!0):()=>{A(!0),W(o)},children:o.status==="REGISTERED"?"\uB4F1\uB85D\uC644\uB8CC":o.status==="REQUESTED"?"\uACAC\uC801 \uBBF8\uB4F1\uB85D":"\uB4F1\uB85D\uD558\uAE30"})})}),e(y,{children:e(mt,{disabled:o.status!=="REGISTERED",onClick:o.status!=="REGISTERED"?()=>B(!0):()=>ce(o.id,o?.chat_room_id),children:"\uC8FC\uBB38"})})]},o?.id)),e(N,{open:k,onClose:()=>P(!1),content:"\uCC44\uD305\uBC29\uC5D0 \uC785\uC7A5\uD558\uB824\uBA74 \uBA3C\uC800 \uCD08\uB300\uB97C \uBC1B\uC544\uC57C \uD569\uB2C8\uB2E4."}),e(N,{open:T,onClose:()=>B(!1),content:`\uC8FC\uBB38\uC744 \uC9C4\uD589\uD558\uB824\uBA74
\uBA3C\uC800 \uAC70\uB798\uC5C5\uCCB4\uB85C \uB4F1\uB85D\uD574\uC57C \uD569\uB2C8\uB2E4.`}),e(N,{open:E,onClose:()=>$(!1),content:"\uC774\uBBF8 \uB4F1\uB85D\uC774 \uC644\uB8CC\uB41C \uAC70\uB798\uC5C5\uCCB4\uC785\uB2C8\uB2E4."}),e(N,{open:ne,onClose:()=>oe(!1),content:`\uB808\uBBF8\uCF58\uC0AC\uC5D0\uC11C \uACAC\uC801\uC774 \uB4F1\uB85D\uB418\uC5B4\uC57C
\uB808\uBBF8\uCF58 \uACF5\uC7A5 \uB4F1\uB85D\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.`}),e(N,{open:G,onSubmit:ue,onClose:()=>A(!1),content:"\uB808\uBBF8\uCF58 \uACF5\uC7A5\uC744 \uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",submitText:"\uACF5\uC7A5 \uB4F1\uB85D\uD558\uAE30"}),e(N,{open:w,onSubmit:s,onClose:()=>S(!1),content:"\uB0A9\uD488\uC0AC\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",submitText:"\uC0AD\uC81C"}),e(Ze,{open:te,onClose:()=>q(!1),data:U}),e(Pe,{open:ie,onClose:()=>re(!1),data:U,companyName:Q}),e(We,{open:se,onClose:()=>V(!1),data:U,estimation:c}),e(Ue,{open:le,onClose:()=>K(!1),estimation:c})]})};const ut=t.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
  margin-bottom: 15px;
`,ye=t.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
`,b=t.div`
  flex: 1;
  padding: 17px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #444;
`,y=t.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  padding: 18px;

  font-size: 15px;
  font-weight: 600;

  letter-spacing: -0.5px;
  text-align: left;
  color: #222;
`,dt=t.span`
  display: block;
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: center;
  color: #222;
  margin-bottom: 6px;

  cursor: pointer;
`,pt=t.span`
  display: block;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #777;
`,Ct=t.span`
  font-size: 15px;
  font-weight: 600;

  letter-spacing: -0.5px;
  text-align: left;
  color: #000;
`,ft=t.span`
  display: block;
  width: 1px;
  height: 10px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`,xt=t.span`
  font-size: 15px;
  letter-spacing: -0.5px;
  text-align: left;
  color: #000;
`,ht=t.span`
  display: block;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #258fff;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
`,gt=t.span`
  display: block;
  font-size: 18px;
  font-weight: 600;

  letter-spacing: -0.36px;
  text-align: left;
  color: #1084ff;
`,mt=t.span`
  padding: 8px 27px;
  border-radius: 18px;

  background-color: #fff;

  ${({disabled:r})=>r?m`
          border: solid 1px #c7c7c7;
          color: #c7c7c7;
        `:m`
          border: solid 1px #258fff;
          color: #258fff;
        `}

  font-size: 14px;
  font-weight: 600;

  letter-spacing: -0.28px;
  text-align: center;

  cursor: pointer;
  user-select: none;
`,Bt=t.span`
  padding: 5px 20px;
  border-radius: 6px;
  background-color: #000;

  ${({disabled:r})=>r?m`
          background-color: #f2f2f2;
          color: #999;
        `:m`
          background-color: #000;
          color: #fff;
        `}

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;

  transition: background-color 0.2s ease-in-out;

  cursor: pointer;
  user-select: none;
`,Dt=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #fff;

  ${({active:r})=>r?m`
          background-color: #222;
          border: solid 1px #222;
        `:m`
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}

  transition: background-color 0.2s ease-in-out;
`,bt=t.img`
  width: 12px;
`,yt=t.div`
  display: flex;
  align-items: center;
`,At=t.img`
  width: 24px;
  height: 24px;
  margin-right: 7px;
  cursor: pointer;
`,wt=t.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,St=t.div`
  width: 100%;
  padding: 8px 15px;
  border-radius: 18px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;

  cursor: pointer;

  ${({disabled:r})=>r?m`
          background-color: #f2f2f2;
          color: #222;
        `:m`
          background-color: #258fff;
          color: #fff;
        `}
`,Ft=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Et=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: left;
  color: #9d9d9d;
  margin-bottom: 8px;
`,kt=t.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,Ae=t.img`
  width: 16px;
  margin-left: 6px;

  cursor: pointer;
`,Rt=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  text-align: center;

  width: 170px;

  padding: 14px 0px;
  color: #000;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`,It=t.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;

  margin-bottom: 20px;
`;t.div`
  font-size: 13px;
  font-weight: normal;
  line-height: 1.62;
  letter-spacing: -0.26px;
  color: #000;
`;var Mt=({id:r,index:a,name:d,distance:p,duration:l,selected:u,onClick:c,factories:C,selectedFieldId:M})=>C?.field_position?n(Tt,{selected:u,onClick:C?.field_position?c:()=>null,children:[e(zt,{children:n(Ot,{children:[e(we,{children:d}),n(_t,{children:[e(Yt,{src:g("../assets/ic-car.svg")}),n(Nt,{children:[ke(p),"km"]}),e($t,{}),n(Pt,{children:[Re(l),"\uBD84"]})]})]})}),!!C?.field_position&&e(Wt,{src:u?g("../assets/ic-check-on.svg"):g("../assets/ic-check.svg")})]}):n(vt,{children:[e(we,{children:d}),e(Ut,{className:"search-icon-circle",onClick:c,children:e(jt,{src:g("../assets/ic-search-on.svg")})})]});const vt=t.div`
  display: flex;
  align-items: center;
  padding: 26px 30px;
  border-bottom: 1px solid #f2f2f2;
  &:hover {
    .search-icon-circle {
      opacity: 1;
    }
  }
`,Tt=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #f2f2f2;

  ${({selected:r})=>r?m`
          background-color: #258fff1a;
        `:m`
          background-color: white;
        `}

  &:hover {
    background-color: #258fff1a;
  }

  transition: background-color 0.1s linear;

  cursor: pointer;
`,zt=t.div`
  display: flex;
  align-items: center;
`;t.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
  margin-right: 18px;
`;const Ot=t.div`
  display: flex;
  flex-direction: column;
`,we=t.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  margin-bottom: 6px;
`,_t=t.div`
  display: flex;
  align-items: center;
`,Nt=t.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
`,Yt=t.img`
  width: 21px;
  height: 21px;
  margin-right: 4px;
`,$t=t.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 8px;
  background-color: #c7c7c7;
`,Pt=t.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
`,Wt=t.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`,Ut=t.div`
  width: 34px;
  height: 34px;
  padding: 7px;
  border-radius: 17px;
  box-shadow: 1px 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-left: 10px;
  opacity: 0;
  transition: opacity 0.05s linear;
  cursor: pointer;
`,jt=t.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;var Lt=({id:r,name:a,adminUserName:d,siteUserName:p,address:l,selectedFieldInfo:u,selectedSpaceId:c,selectedFactoryIds:C,setSelectedFactoryIds:M,orderByFactories:f,factories:x,order:v,setOrder:G,revalidate:A})=>{const w=Oe(),{data:S}=qe("N"),F=Ee(),[W,E]=i.exports.useState(!1),[$,k]=i.exports.useState(!1),[P,T]=i.exports.useState(""),[B,te]=i.exports.useState(""),[q,U]=i.exports.useState([]),[j,Q]=i.exports.useState(!1),[Be,ne]=i.exports.useState(!1),[oe,ie]=i.exports.useState(!1),[re,se]=i.exports.useState(!1),V=i.exports.useMemo(()=>f?f.filter(s=>s?.name?.includes(B)):[],[f,B,v]),le=i.exports.useRef(Le.exports.debounce(s=>te(s),300)).current,K=s=>{le(s),T(s)},H=()=>{k(!1)},ae=async()=>{const{data:s}=await ge.post("/estimations",{field_id:c,factory_ids:C});await A(),M([]),k(!1),s?.result?.duplicated_factory_ids.length>0?(U(s?.result?.duplicated_factory_ids),Q(!0)):ne(!0)},ce=i.exports.useCallback(s=>{M(D=>D.includes(s)?D.filter(h=>h!==s):D.concat(s))},[C]),ue=()=>{S&&S.length>0?ie(!0):se(!0)};return n(Gt,{children:[n(qt,{children:[e(Qt,{src:g("../assets/ic-field.svg")}),n(Vt,{children:[e(Ce,{style:{marginBottom:12},children:e(Kt,{children:c?a:"\uB4F1\uB85D\uB41C \uAC74\uC124\uD604\uC7A5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."})}),w?n(Ce,{children:[n(fe,{children:[e(xe,{children:"\uAD6C\uB9E4\uACC4\uC57D \uB2F4\uB2F9\uC790"}),e(he,{children:d})]}),n(fe,{style:{marginRight:0},children:[e(xe,{children:"\uC8FC\uBB38\uB2F4\uB2F9\uC790(\uD604\uC7A5)"}),e(he,{children:p})]}),e(Ht,{onClick:()=>window.alert("TODO : 2\uCC28 \uBC94\uC704\uC785\uB2C8\uB2E4."),children:"\uD3B8\uC9D1"})]}):e(Ce,{children:n(fe,{children:[e(xe,{children:"\uACF5\uC7A5 \uC8FC\uC18C"}),e(he,{children:l})]})})]})]}),c?e(Y,{type:I.OUTLINE_THICK,containerStyle:{width:160,height:50},onClick:()=>E(!0),children:"+ \uB808\uBBF8\uCF58 \uACF5\uC7A5 \uCD94\uAC00"}):null,e(me,{open:W,onClose:()=>E(!1),children:n(De,{children:[e(Jt,{onClick:()=>E(!1),children:e(Xt,{src:g("../assets/ic-del.svg")})}),e(Se,{children:"\uB808\uBBF8\uCF58 \uACF5\uC7A5 \uCD94\uAC00\uD558\uAE30"}),e(Zt,{children:"\uB808\uBBF8\uCF58 \uACF5\uC7A5\uC5D0 \uACAC\uC801\uC744 \uC694\uCCAD\uD569\uB2C8\uB2E4."}),n(Ye,{children:[e(Y,{type:I.ORANGE,onClick:()=>{console.log("selectedFieldInfo",u),F("/remicon-map",{state:{searchText:l,selectedSpaceInfo:u}})},containerStyle:{marginRight:20},icon:"ic-local-white",children:"\uC9C0\uB3C4\uC120\uD0DD"}),e(Y,{type:I.PRIMARY,icon:"ic-plus-line-white",onClick:()=>{E(!1),k(!0)},children:"\uC9C1\uC811\uB4F1\uB85D"})]})]})}),e(me,{open:$,onClose:H,children:n(De,{style:{minWidth:440,maxHeight:733,padding:0,paddingTop:50},children:[e(Se,{children:"\uB808\uBBF8\uCF58 \uACF5\uC7A5 \uCD94\uAC00\uD558\uAE30"}),n(en,{children:[e(_e,{placeholder:"\uACF5\uC7A5\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",containerStyle:{marginBottom:30},value:P,onChange:s=>K(s.target.value)}),n(on,{children:[n(nn,{children:["\uBAA9\uB85D(",(x?.data||[]).length,")"]}),!!x?.field_position&&e(Ge,{options:[{label:"\uAC70\uB9AC\uC21C",value:"\uAC70\uB9AC\uC21C"},{label:"\uC2DC\uAC04\uC21C",value:"\uC2DC\uAC04\uC21C"}],value:v,onChange:s=>G(s)})]})]}),e(tn,{children:x&&V?.map((s,D)=>e(Mt,{id:s.id,index:D,name:s?.name,distance:s?.direction?.distance,duration:s?.direction?.duration,selected:C.includes(s.id),selectedFieldId:c,factories:x,onClick:x?.field_position?()=>ce(s.id):()=>{}},s.id))}),n($e,{children:[e(Y,{type:I.GRAY_BLACK,onClick:H,containerStyle:{marginRight:20},children:"\uCDE8\uC18C"}),e(Y,{type:C.length>0===null?I.GRAY:I.PRIMARY,onClick:c!==null?ae:ue,children:"\uCD94\uAC00\uD558\uAE30"})]})]})}),e(N,{open:j,content:`\uC774\uBBF8 \uACAC\uC801\uC694\uCCAD\uD55C \uACF5\uC7A5\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.
${q.map(s=>(x?.data||[]).filter(D=>D.id===s)[0].name).join(", ")}`,onClose:()=>Q(!1)})]})};const Gt=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 11px;
`,qt=t.div`
  display: flex;
  align-items: center;

  flex-direction: row;
`,Qt=t.img`
  width: 90px;
  height: 90px;
  margin-right: 30px;
`,Vt=t.div`
  display: flex;
  flex-direction: column;
`,Ce=t.div`
  display: flex;
  align-items: center;
`,Kt=t.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
`,fe=t.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`,xe=t.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;
  margin-right: 10px;
`,he=t.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
`,Ht=t.span`
  padding: 10px 27px;
  border-radius: 18px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  cursor: pointer;
  margin-left: 20px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;
  color: #000;
`,Jt=t.div`
  text-align: right;
`,Xt=t.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`,Zt=t.div`
  display: block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  white-space: pre;
`,Se=t.div`
  display: block;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
  text-align: center;
  white-space: pre;
`,en=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 40px 14px 40px;
  border-bottom: 1px solid #c7c7c7;
`;t.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;const tn=t.div`
  height: 414px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 17px;
  }

  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c7c7c7;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`,nn=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,on=t.div`
  display: flex;
  justify-content: space-between;
`;var Mn=()=>{const r=Te(),[a,d]=i.exports.useState("\uAC70\uB9AC\uC21C"),[p,l]=i.exports.useState("null"),[u,c]=i.exports.useState(null),[C,M]=i.exports.useState("");i.exports.useState("");const{data:{info:f,suppliers:x,estimations:v},isLoading:G,supplierMutate:A}=ze(r),{data:w}=Qe(r,p,u,C),S=Ne(w),F=i.exports.useMemo(()=>w||S,[w]),[W,E]=i.exports.useState([]),$=i.exports.useMemo(()=>{if(F){const k=F?.data;if(a==="\uAC70\uB9AC\uC21C")return k.sort((T,B)=>T.direction?.distance-B.direction?.distance);if(a==="\uC2DC\uAC04\uC21C")return k.sort((T,B)=>T.direction?.duration-B.direction?.duration)}else return},[F,a]);return e(ve,{children:n(rn,{children:[n(sn,{children:[e(Fe,{children:"\uAC74\uC124\uD604\uC7A5"}),e(Lt,{id:f?.id,name:f?.name,adminUserName:f?.admin_user?.name,siteUserName:f?.site_user?.name,address:f?.basic_address,selectedFieldInfo:f,setSelectedFactoryIds:E,selectedSpaceId:r,selectedFactoryIds:W,orderByFactories:$,factories:F,order:a,setOrder:d,revalidate:A})]}),n(ln,{children:[n(Fe,{children:["\uB0A9\uD488\uC0AC (",x?.length,")"]}),e(ct,{data:x,estimations:v,revalidate:A}),e(an,{children:"\u2022 \uAC70\uB798\uC5C5\uCCB4\uB85C \uB4F1\uB85D\uD558\uBA74 \uC8FC\uBB38 \uAE30\uB2A5\uC774 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4."})]})]})})};const rn=t.div`
  width: 100%;
  height: 100%;
  padding: 60px;
`,Fe=t.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 14px;
`,sn=t.div`
  width: 100%;
  margin-bottom: 60px;
`;t.div`
  display: flex;
  width: 100%;
  margin-top: 66px;
  margin-bottom: 60px;
`;t.div`
  flex: 1;

  &:first-of-type {
    flex: 2.5;
    margin-right: 60px;
  }
`;const ln=t.div`
  width: 100%;
`,an=t.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #999;
`;export{Mn as default};
