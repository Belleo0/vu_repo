import{j as i,a as e,F as W,n as t,u as M,r as u,d as v}from"./index.fa23706f.js";import{S as G}from"./SpaceLayout.78f58f87.js";import{S as K}from"./SpaceBar.f79fac69.js";import{h as _,b as O,d as Q,g as k,c as h,u as X}from"./Header.8f74d7dd.js";import{c as ee,a as te}from"./convertDuration.9811f74f.js";import{T as ne}from"./TextModal.458f5750.js";import{U as ie}from"./UserInfoModal.f3969620.js";import{u as oe}from"./useSelectedSpaceId.e98fa8e8.js";import{u as le}from"./useMySpaceInfo.ce66ec42.js";import{B as I,b as $,a as N}from"./Button.2ebe35cd.js";import{I as re}from"./InviteModal.356bbfcd.js";import"./ProfileBox.54d21f9f.js";import"./Modal.5ea91f83.js";import"./lodash.4b3a1baf.js";import"./_commonjsHelpers.b8add541.js";import"./useSpaces.40cf6e61.js";import"./useFriends.38f9623d.js";import"./common.0c17b2bd.js";import"./Input.367ebe3c.js";var ce=({companyName:l,address:a,startAt:o,endAt:c,needAmount:d})=>i(ae,{children:[i(T,{children:[e(S,{children:"\uAC74\uC124\uC0AC\uBA85"}),e(z,{children:l||"\uC815\uBCF4\uC5C6\uC74C"}),e(S,{children:"\uD604\uC7A5\uC8FC\uC18C"}),e(z,{children:a||"\uC815\uBCF4\uC5C6\uC74C"})]}),i(T,{children:[e(S,{children:"\uACF5\uC0AC\uAE30\uAC04"}),e(z,{children:o||c?i(W,{children:[_(o).format("YYYY. MM")," ~"," ",_(c).format("YYYY. MM")]}):"\uC815\uBCF4\uC5C6\uC74C"}),e(S,{children:"\uD604\uC7A5 \uB808\uBBF8\uCF58 \uC18C\uBAA8\uB7C9 (m\xB3)"}),i(z,{children:[d?.toLocaleString?.("ko")||"\uC815\uBCF4\uC5C6\uC74C ","m\xB3"]})]})]});const ae=t.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`,T=t.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`,S=t.div`
  flex: 1;
  min-width: 180px;
  padding: 17px 20px;
  background-color: #f2f2f2;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #444;
`,z=t.div`
  flex: 2;
  padding: 17px 20px;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;var se=({data:l})=>e(de,{children:l.map((a,o)=>i(pe,{children:[e(ue,{style:o===0?{backgroundColor:"#ff7d00",color:"white"}:{},children:a.type}),e(fe,{children:a.value}),e(xe,{children:_(a.created_at).format("MM.DD HH:mm")})]},o))});const de=t(O)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  max-height: 360px;
  overflow-y: scroll;
  overflow-y: overlay;
`,pe=t.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  background-color: white;
  border-bottom: 1px solid #f2f2f2;
`,ue=t.span`
  padding: 5px 16px;
  border-radius: 15px;

  background-color: #e3e3e3;

  margin-right: 14px;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
`,fe=t.span`
  font-size: 16px;
  letter-spacing: -0.64px;
  text-align: left;
  color: #000;
`,xe=t.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  color: #999;
  margin-left: auto;
`;var Ce=({data:l=[]})=>{const a=Q();return e(he,{children:l.map((o,c)=>i(ge,{children:[e(me,{src:k("../assets/default-profile.jpeg")}),i(ye,{children:[e(be,{children:o?.company?.name}),i(Be,{children:[e(Ae,{children:o?.name}),e(we,{children:o?.position}),a.id===o.id?e(ze,{children:"\uB098"}):null]})]}),a.id!==o.id?i(ke,{onClick:()=>null,children:[e(_e,{src:k("../assets/ic-chat.svg")}),e(Se,{children:"1:1 \uCC44\uD305"})]}):null]},o.id))})};const he=t(O)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  max-height: 360px;
  overflow-y: scroll;
  overflow-y: overlay;
`,ge=t.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid #f2f2f2;
`,me=t.img`
  width: 48px;
  height: 48px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;
  margin-right: 14px;
`,ye=t.div`
  display: flex;
  flex-direction: column;
`,be=t.span`
  display: block;
  font-size: 12px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #222;
  margin-bottom: 6px;
`,Be=t.div`
  display: flex;
  align-items: flex-end;
`,Ae=t.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
`,we=t.span`
  display: block;
  font-size: 14px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #444;
  margin-left: 4px;
`,ke=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`,_e=t.img`
  width: 20px;
  height: 20px;
  margin-bottom: 4px;
`,Se=t.span`
  font-size: 12px;
  letter-spacing: -0.24px;
  text-align: center;
  color: #444;
`,ze=t.div`
  width: 18px;
  height: 18px;
  padding: 4px 4px;

  color: #ffffff;

  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.22px;

  border-radius: 9px;
  background-color: #000;

  margin-left: 6px;
`;var De=({data:l=[]})=>{const a=M(),[o,c]=u.exports.useState(!1),[d,f]=u.exports.useState(!1),[g,m]=u.exports.useState(null),[s,p]=u.exports.useState(null),y=(r,D)=>{Boolean(D)?a("/order",{state:{id:r}}):c(!0)};return i(Fe,{children:[i(Y,{children:[e(B,{children:"\uB808\uBBF8\uCF58 \uACF5\uC7A5"}),e(B,{children:"\uAC70\uB9AC/\uC2DC\uAC04"}),e(B,{children:"\uC601\uC5C5\uC0AC\uC6D0"}),e(B,{children:"\uB204\uC801\uC8FC\uBB38\uB7C9"}),e(B,{})]}),l.map(r=>i(Y,{children:[i(A,{style:{flexDirection:"column"},children:[e(Me,{children:r?.factory_space?.name}),e(ve,{children:r?.factory_space?.address})]}),i(A,{children:[i(Ie,{children:[ee(r?.direction?.distance),"km"]}),e($e,{}),i(Ne,{children:[te(r?.direction?.duration),"\uBD84"]})]}),e(A,{children:e(Te,{onClick:()=>{p(r?.factory_space?.site_user),m(r?.factory_space?.company?.name),setTimeout(()=>{f(!0)},250)},children:r?.factory_space?.site_user?.name})}),e(A,{children:e(Ye,{children:"2\uCC28 \uBC94\uC704"})}),e(A,{children:e(Le,{onClick:()=>y(r?.id,r?.is_chat_room_joined),children:"\uC8FC\uBB38"})})]},r.id)),e(ne,{open:o,onClose:()=>c(!1),content:"\uCC44\uD305\uBC29\uC5D0 \uC785\uC7A5\uD558\uB824\uBA74 \uBA3C\uC800 \uCD08\uB300\uB97C \uBC1B\uC544\uC57C \uD569\uB2C8\uB2E4."}),e(ie,{open:d,onClose:()=>f(!1),data:s,companyName:g})]})};const Fe=t.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`,Y=t.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
`,B=t.div`
  flex: 1;
  min-width: 180px;
  padding: 17px;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #444;
`,A=t.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  padding: 18px;

  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,Me=t.span`
  display: block;
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: center;
  color: #222;
  margin-bottom: 6px;
`,ve=t.span`
  display: block;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #777;
`,Ie=t.span`
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,$e=t.span`
  display: block;
  width: 1px;
  height: 10px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`,Ne=t.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,Te=t.span`
  display: block;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #258fff;
  text-decoration: underline;
  cursor: pointer;
`,Ye=t.span`
  display: block;
  font-size: 18px;
  font-weight: 600;

  letter-spacing: -0.36px;
  text-align: left;
  color: #1084ff;
`,Le=t.span`
  padding: 8px 27px;
  border-radius: 18px;
  border: solid 1px #258fff;
  background-color: #fff;

  font-size: 14px;
  font-weight: 600;

  letter-spacing: -0.28px;
  text-align: center;
  color: #258fff;

  cursor: pointer;
`;var Re=({data:l=[],revalidate:a})=>{const o=M(),[c,d]=u.exports.useState(!1),f=u.exports.useMemo(()=>l.filter(n=>n?.is_hide===c),[l,c]),g=u.exports.useMemo(()=>l.filter(n=>n?.is_hide).length,[l]),m=u.exports.useMemo(()=>l.filter(n=>!n?.is_hide).length,[l]),[s,p]=u.exports.useState([]),[y,r]=u.exports.useState(!1),D=async()=>{if(!y)try{r(!0),s.length===f.length?p([]):p(f.map(n=>n.id))}catch(n){console.log(n)}finally{r(!1)}},V=async()=>{if(!y)try{r(!0),await Promise.all(s.map(async n=>await v[c?"delete":"post"](`/estimations/${n}/hide`))),await a(),p([])}catch(n){console.log(n)}finally{r(!1)}},H=async()=>{if(!y)try{r(!0),await Promise.all(s.map(async n=>await v.delete(`/estimations/${n}`))),await a(),p([])}catch(n){console.log(n)}finally{r(!1)}},J=n=>{s.includes(n)?p(b=>b.filter(q=>q!==n)):p(b=>b.concat(n))},Z=(n,b)=>{Boolean(b)&&o("/order",{state:{id:n}})};return i(W,{children:[i(qe,{children:[i(U,{active:c===!1,onClick:()=>d(!1),children:["\uAC70\uB798 \uD604\uC7A5 (",m,")"]}),i(U,{active:c===!0,onClick:()=>d(!0),children:["\uC228\uAE40 \uAC70\uB798 \uD604\uC7A5 (",g,")"]})]}),i(Ue,{children:[i(L,{children:[e(x,{style:{maxWidth:130,minWidth:130},children:e(F,{disabled:s.length!==f.length||f.length===0,onClick:D,children:"\uC804\uCCB4"})}),e(x,{children:"\uAC74\uC124\uD604\uC7A5"}),e(x,{children:"\uBC1C\uC8FC\uCC98(\uAC74\uC124\uC0AC)"}),e(x,{children:"\uACF5\uC0AC\uAE30\uAC04"}),e(x,{children:"\uACC4\uC57D \uB2F4\uB2F9\uC790"}),e(x,{children:"\uC601\uC5C5 \uB2F4\uB2F9\uC790"}),e(x,{children:"\uB2E8\uAC00\uC728"}),e(x,{children:"\uB204\uC801\uC8FC\uBB38\uB7C9"}),e(x,{})]}),f.map(n=>i(L,{children:[e(C,{style:{maxWidth:130},children:e(Ve,{active:s.includes(n?.id),onClick:()=>J(n?.id),children:e(He,{src:s.includes(n?.id)?k("../assets/ic-check-only-ic-white.svg"):k("../assets/ic-check-only-ic-grey.svg")})})}),i(C,{style:{flexDirection:"column"},children:[e(Ee,{children:n?.field_space?.name}),e(je,{children:n?.field_space?.basic_address})]}),e(C,{children:n?.field_space?.company?.name}),e(C,{children:i(P,{children:[_(n?.field_space?.start_at).format("YYYY.MM")," ~"," ",_(n?.field_space?.end_at).format("YYYY.MM")]})}),e(C,{children:e(R,{children:n?.manager_user?.name})}),e(C,{children:e(R,{children:n?.field_space?.site_user?.name})}),e(C,{children:i(Je,{children:[n?.percent,"%"]})}),e(C,{children:e(We,{children:"2\uCC28 \uBC94\uC704"})}),e(C,{children:i(Oe,{active:n?.is_chat_room_joined,onClick:()=>Z(n?.chat_room_id,n?.is_chat_room_joined),children:[e(Pe,{src:k(`../assets/ic-chat${n?.is_chat_room_joined?"":"-grey"}.svg`)}),"\uCC44\uD305"]})})]},n.id))]}),i(Ze,{children:[e(F,{style:{marginRight:10},disabled:s.length===0,onClick:s.length===0?()=>null:H,children:"\uC0AD\uC81C"}),e(F,{style:c?{padding:"8px 5px"}:{},disabled:s.length===0,onClick:s.length===0?()=>null:V,children:c?"\uC228\uAE40\uD574\uC81C":"\uC228\uAE40"})]})]})};const Ue=t.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
  margin-bottom: 10px;
`,L=t.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
`,x=t.div`
  flex: 1;
  padding: 17px;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #444;
`,C=t.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  padding: 18px;

  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,Ee=t.span`
  display: block;
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: center;
  color: #222;
  margin-bottom: 6px;
`,je=t.span`
  display: block;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #777;
`;t.span`
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;t.span`
  display: block;
  width: 1px;
  height: 10px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`;t.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;const R=t.span`
  display: block;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #258fff;
  text-decoration: underline;
  cursor: pointer;
`,We=t.span`
  display: block;
  font-size: 18px;
  font-weight: 600;

  letter-spacing: -0.36px;
  text-align: left;
  color: #1084ff;
`,Oe=t.span`
  display: flex;
  align-items: center;

  padding: 8px 15px;
  border-radius: 20px;
  background-color: #fff;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;

  cursor: pointer;
  user-select: none;

  ${({active:l})=>l?h`
          border: solid 1px #222;
          color: #222;
        `:h`
          border: solid 1px #c7c7c7;
          color: #c7c7c7;
        `}
`,Pe=t.img`
  width: 20px;
  height: 20px;
  margin: 0 4px 0 0;
`,F=t.span`
  padding: 8px 20px;
  border-radius: 6px;
  background-color: #000;

  ${({disabled:l})=>l?h`
          background-color: #f2f2f2;
          color: #999;
        `:h`
          background-color: #000;
          color: #fff;
        `}

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;

  transition: background-color 0.2s ease-in-out;

  cursor: pointer;
  user-select: none;
`,Ve=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #fff;

  ${({active:l})=>l?h`
          background-color: #222;
          border: solid 1px #222;
        `:h`
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}

  transition: background-color 0.2s ease-in-out;
`,He=t.img`
  width: 12px;
`,P=t.span`
  font-size: 15px;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;
  font-weight: normal;
`,Je=t(P)``,Ze=t.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
`,qe=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,U=t.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: right;

  ${({active:l})=>l?h`
          color: #222;
        `:h`
          color: #999;
        `}

  &:not(:last-child) {
    margin-right: 40px;
  }

  cursor: pointer;
  user-select: none;
`;var bt=()=>{const l=X(),a=oe(),{data:{info:o,members:c,suppliers:d},isLoading:f,supplierMutate:g}=le(a),m=M(),[s,p]=u.exports.useState(!1);return e(G,{children:i(Ge,{children:[i(Ke,{children:[l?e(w,{children:"\uAC74\uC124\uD604\uC7A5"}):i(et,{children:[d?.length,"\uAC1C \uD604\uC7A5\uACFC \uAC70\uB798\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."]}),l?null:e(w,{children:"\uACF5\uC7A5\uBA85"}),e(K,{id:o?.id,name:o?.name,adminUserName:o?.admin_user?.name,siteUserName:o?.site_user?.name,address:o?.basic_address}),l&&e(ce,{companyName:o?.company?.name,address:o?.basic_address,startAt:o?.start_at,endAt:o?.end_at,needAmount:o?.field_info?.need_amount})]}),i(Qe,{children:[i(E,{style:{marginTop:14},children:[e(w,{children:"\uC54C\uB9BC\uB0B4\uC5ED (999) - 2\uCC28 \uBC94\uC704"}),e(se,{data:new Array(15).fill({type:"\uACAC\uC801\uC811\uC218",value:"(\uC8FC)\uB3D9\uC11C\uC0B0\uC5C5\uC758 \uACAC\uC801\uC774 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",created_at:"2022-05-05T12:18:53.795Z"})})]}),i(E,{children:[i(j,{children:[i(w,{children:["\uD604\uC7A5\uBA64\uBC84 (",c?.length,")"]}),e(I,{size:$.SMALL,type:N.OUTLINE,icon:"ic-circle-more",iconStyle:{width:12},containerStyle:{width:106,height:36},onClick:()=>p(!0),children:"\uCD08\uB300\uD558\uAE30"})]}),e(Ce,{data:c})]})]}),l?i(Xe,{children:[i(j,{children:[i(w,{children:["\uB0A9\uD488\uC0AC (",d?.length,")"]}),e(I,{size:$.SMALL,type:N.PRIMARY,icon:"ic-more-white",iconStyle:{width:10},containerStyle:{width:106,height:36},onClick:()=>m("/supplier-choice"),children:"\uC5C5\uCCB4\uCD94\uAC00"})]}),e(De,{data:d})]}):e(Re,{data:d,revalidate:()=>g()}),e(re,{open:s,onClose:()=>p(!1),fieldId:o?.id,fieldName:o?.name})]})})};const Ge=t.div`
  width: 100%;
  height: 100%;
  padding: 60px;
`,w=t.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 14px;
`,Ke=t.div`
  width: 100%;
  margin-bottom: 16px;
`,Qe=t.div`
  display: flex;
  width: 100%;
  margin-top: 66px;
  margin-bottom: 60px;
`,E=t.div`
  flex: 1;

  &:first-of-type {
    flex: 2.5;
    margin-right: 60px;
  }
`,Xe=t.div`
  width: 100%;
`,et=t.span`
  display: block;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.56px;
  text-align: left;
  color: #222;
  margin-bottom: 40px;
`,j=t.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;export{bt as default};
