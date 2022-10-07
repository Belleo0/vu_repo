import{l as W,r as c,a as t,j as i,z as Y,n as e,u as U,B as K}from"./index.fa23706f.js";import{M as G}from"./MypageLayout.8a840471.js";import{u as v,g as b,c as g,S as q,b as $,d as J}from"./Header.8f74d7dd.js";import{u as Q}from"./useSpaces.40cf6e61.js";import{u as R}from"./useSelectedSpaceId.e98fa8e8.js";import{u as V}from"./useMySpaceInfo.ce66ec42.js";import{B as D,b as S,a as A}from"./Button.2ebe35cd.js";import{T as j}from"./TextModal.458f5750.js";import{I as X}from"./ImgModal.aa482c68.js";import{u as Z}from"./useFriends.38f9623d.js";import{I as ee}from"./InviteModal.356bbfcd.js";import"./ProfileBox.54d21f9f.js";import"./Modal.5ea91f83.js";import"./Input.367ebe3c.js";var te=({info:r,id:C,name:o,address:d,revalidate:m,isHide:a,setSelectedIdWithFirstId:x})=>{const u=v(),p=W(),h=R(),B=c.exports.useMemo(()=>h===C,[h]),[f,s]=c.exports.useState(!1);return t(ie,{isActive:B,isOpen:f,children:i(oe,{onClick:()=>p(Y(r)),children:[i(se,{children:[t(ne,{children:o}),u&&t(re,{children:d})]}),i(ce,{children:[t(le,{src:b("../assets/ic-people-black.svg"),isOpen:f,onClick:()=>s(y=>!y)}),t(ae,{children:"999\uBA85"})]})]})})};const ie=e.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  width: 100%;
  min-height: 88px;
  border-radius: 12px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: white;

  user-select: none;

  border: solid 1px #258fff;

  margin-bottom: 16px;
  justify-content: center;

  ${({isActive:r})=>r?g`
          border-color: #258fff;
        `:g`
          border-color: white;
        `}

  &:hover {
    border-color: #258fff;
  }

  transition: border 0.1s linear, min-height 0.05s linear;

  overflow: hidden;
`,oe=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
`,ne=e.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
  margin-bottom: 8px;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:last-child {
    margin-bottom: 0;
  }
`,re=e.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 16px;
`,se=e.div`
  display: flex;
  flex-direction: column;
`,le=e.img`
  width: 22px;
  height: 22px;

  ${({isOpen:r})=>r?g`
          transform: rotate(180deg);
        `:g`
          transform: rotate(0deg);
        `}
`;e.div`
  display: flex;
  border-top: 1px solid #f2f2f2;
`;e.span`
  flex: 1;
  padding: 12px;

  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #000;

  &:first-of-type {
    border-right: 1px solid #f2f2f2;
  }
`;const ce=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ae=e.div`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #000;
`;var de=()=>{U();const r=W(),C=v(),o=R(),[d,m]=c.exports.useState(0),[a,x]=c.exports.useState(0),[u,p]=c.exports.useState(!1),[h,B]=c.exports.useState(""),f=c.exports.useMemo(()=>{switch(a){case 0:return" ";case 1:return"N";case 2:return"Y"}},[a]),{data:s,refetch:y}=Q(f),n=c.exports.useMemo(()=>s?s.filter(l=>l?.name?.includes(h)):[],[s,h]),w=l=>{m(l),p(!1)},I=l=>{console.log(l),x(l),p(!1)},N=()=>{s&&s?.length>0&&(r(Y(s?.[0])),p(!0))};return c.exports.useEffect(()=>{!o&&u===!1&&s&&s.length>0&&n&&N()},[d,a,s,u,n]),console.log(f),i(pe,{children:[i(ue,{children:[t(q,{placeholder:"\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.",containerStyle:{marginBottom:26},value:h,onChange:l=>B(l.target.value)}),i(xe,{children:[i(O,{active:d===0,onClick:()=>w(0),children:["\uAC74\uC124\uD604\uC7A5 (",s?.length,")"]}),t(O,{active:d===1,onClick:()=>w(1),children:"\uAD6C\uC131\uC6D0 (99)"})]})]}),C&&i(he,{children:[t(M,{active:a===0,onClick:()=>I(0),children:"\uC804\uCCB4"}),t(M,{active:a===1,onClick:()=>I(1),children:"\uB4F1\uB85D \uAC74\uC124\uD604\uC7A5"}),t(M,{active:a===2,onClick:()=>I(2),children:"\uC228\uAE40 \uAC74\uC124\uD604\uC7A5"})]}),t(fe,{children:n.map((l,H)=>t(te,{info:l,id:l.id,name:l?.name,address:l?.basic_address,revalidate:y,isHide:a===2,setSelectedIdWithFirstId:N},`space-${l.id}-${H}`))})]})};const pe=e.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 720px;
  max-height: 720px;
  max-width: 360px;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`,ue=e.div`
  display: block;

  height: 136px;

  padding: 30px 30px 0px 30px;
  border-bottom: 1px solid #e3e3e3;
`,xe=e.div`
  display: flex;
  width: 100%;
`,O=e.div`
  flex: 1;
  padding: 13px 0px 10px 0px;
  text-align: center;
  margin-bottom: -1px;
  cursor: pointer;

  ${({active:r})=>r?g`
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.3px;
          color: #222;

          border-bottom: 2px solid black;
        `:g`
          font-size: 15px;
          letter-spacing: -0.3px;
          color: #999;
        `}
`,he=e.div`
  display: flex;
  margin: 14px 20px 0px 20px;
`,M=e.div`
  padding: 6px 12px 7px;
  border-radius: 20px;
  background-color: #000;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  cursor: pointer;

  margin-right: 8px;

  ${({active:r})=>r?g`
          color: #ffff;
        `:g`
          color: #c7c7c7;
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}
`,fe=e($)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 6px 20px 20px;

  width: 100%;
  overflow-y: scroll;
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;e($)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  max-height: 360px;
  overflow-y: scroll;
`;var Ce=({id:r,name:C,adminUserName:o,siteUserName:d,address:m,setInviteModalOpen:a})=>{const x=v();return i(ge,{children:[t(me,{src:b("../assets/ic-field.svg")}),i(be,{children:[t(F,{style:{marginBottom:12},children:t(Be,{children:C})}),x?i(F,{children:[i(k,{children:[t(z,{children:"\uAD6C\uB9E4\uACC4\uC57D \uB2F4\uB2F9\uC790"}),t(T,{children:o})]}),i(k,{children:[t(z,{children:"\uC8FC\uBB38\uB2F4\uB2F9\uC790(\uD604\uC7A5)"}),t(T,{children:d})]})]}):t(F,{children:i(k,{children:[t(z,{children:"\uACF5\uC7A5\uC8FC\uC18C"}),t(T,{children:m})]})})]}),t(Ae,{children:i(ye,{onClick:()=>a(!0),children:[t(we,{src:b("../assets/ic-more.svg")})," \uC774"," ",x?"\uD604\uC7A5":"\uACF5\uC7A5","\uC5D0 \uBA64\uBC84 \uCD08\uB300\uD558\uAE30"]})})]})};const ge=e.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 137px;

  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`,me=e.img`
  width: 90px;
  height: 90px;
  margin-right: 30px;
`,be=e.div`
  display: flex;
  flex-direction: column;

  margin-right: auto;
`,F=e.div`
  display: flex;
  align-items: center;
`,Be=e.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
`,k=e.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`,z=e.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;
  margin-right: 10px;
`,T=e.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
`,Ae=e.div``,ye=e.span`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 11px 18px;
  border-radius: 6px;
  border: solid 2px #4490f7;
  background-color: #fff;
  color: #4490f7;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
`,we=e.img`
  width: 10px;
  height: 10px;
  margin-right: 6px;
`;var De=({data:r=[],revalidate:C,me:o,siteUserId:d})=>{U();const m=W(),a=v();Z();const[x,u]=c.exports.useState(!1),[p,h]=c.exports.useState(!1),[B,f]=c.exports.useState(!1);c.exports.useState(!1);const s=()=>{u(!x),h(!p)},y=()=>{f(!B)};return i(Se,{children:[r?.map((n,w)=>i(ve,{children:[i(ke,{children:[t(Me,{src:b("../assets/default-profile.jpeg")}),i(P,{children:[i(Ie,{children:[t(ze,{children:n?.company.name}),t(Te,{children:n?.name}),t(Le,{children:n.position}),n?.authority&&a?t(_,{children:"\uC8FC\uBB38\uB2F4\uB2F9\uC790"}):n?.authority?t(_,{children:"\uACF5\uC7A5\uAD00\uB9AC\uC790"}):null]}),i(Fe,{children:[t(D,{size:S.SMALL,type:o?A.DISABLED:n.status===1?A.GRAY_BLACK:A.PRIMARY,icon:o?"ic-add-person-gray":n.status===1?"ic-minus-people-bk":"ic-add-person-white",containerStyle:{width:"auto",height:"42px",marginRight:10},children:n.status===1?"\uCE5C\uAD6C\uC0AD\uC81C ":"\uCE5C\uAD6C\uCD94\uAC00"}),t(D,{size:S.SMALL,type:A.PRIMARY,icon:"ic-chat-white",containerStyle:{width:"auto",height:"42px"},onClick:()=>{o||m(K(n))},children:"\uCC44\uD305\uD558\uAE30"})]})]}),t(P,{children:i(Ee,{children:[i(L,{children:[t(E,{src:b("../assets/ic-cellphone-bk.svg")}),n?.phone]}),i(L,{children:[t(E,{src:b("../assets/ic-phone-bk.svg")}),n?.tel]}),i(L,{children:[t(E,{src:b("../assets/ic-email-bk.svg")}),n?.signname]})]})})]}),d===n.id?null:i(We,{children:[t(D,{type:A.BLACK_OUTLINE,size:S.SMALL,containerStyle:{width:86,height:36,borderRadius:40,marginBottom:14},onClick:()=>u(!0),children:"\uAD8C\uD55C\uC704\uC784"}),t(D,{type:A.BLACK_OUTLINE,size:S.SMALL,containerStyle:{width:86,height:36,borderRadius:40},onClick:()=>f(!0),children:"\uC0AD\uC81C"})]})]},w)),t(j,{open:x,onClose:()=>u(!1),onSubmit:s,content:"\uC8FC\uBB38\uB2F4\uB2F9\uC790 \uAD8C\uD55C\uC744 \uC704\uC784\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",submitText:"\uAD8C\uD55C\uC704\uC784"}),t(j,{open:B,onClose:()=>f(!1),onSubmit:y,content:`\uAD6C\uC131\uC6D0\uC744 \uC911\uC559\uB3D9 \uC77C\uB3D9\uBBF8\uB77C\uC8FC\uB354\uB9C8\uB9B0\uC5D0\uC11C
\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
\uC0AD\uC81C \uC2DC \uAC70\uB798 \uBC0F \uBAA8\uB4E0 \uCC44\uD305\uBC29\uC5D0\uC11C \uC0AD\uC81C\uB429\uB2C8\uB2E4.`,submitText:"\uC0AD\uC81C"}),t(X,{open:p,onClose:()=>h(!1),content:"\uC8FC\uBB38\uB2F4\uB2F9\uC790 \uBCC0\uACBD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",submitText:"\uD655\uC778"})]})};const Se=e($)`
  width: 100%;
  overflow-y: scroll;
`,ve=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* height: 148px; */
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  padding: 35px 40px;
`,P=e.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`,Ie=e.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,Me=e.img`
  width: 80px;
  height: 80px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;
`,Fe=e.div`
  display: flex;
`,ke=e.div`
  display: flex;
  align-items: center;
`,ze=e.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #777;
  margin-right: 6px;
`,Te=e.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;
  margin-right: 2px;
`,Le=e.div`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #222;
`,_=e.span`
  margin-left: 10px;
  padding: 4px 8px 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 26px;
  border-radius: 15px;
  border: solid 1px #ffb631;

  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  color: #ffb631;
`,Ee=e.div`
  display: flex;
  flex-direction: column;
`,L=e.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: normal;
  color: #000;

  margin-bottom: 8px;
`,E=e.img`
  width: 24px;
  height: 24px;

  margin-right: 14px;
`,We=e.div`
  display: flex;
  flex-direction: column;
`;var tt=()=>{const r=J();U();const C=R(),{data:{info:o,members:d,suppliers:m},isLoading:a,supplierMutate:x}=V(C),[u,p]=c.exports.useState(!1);return console.log(o),t(G,{children:i(Ue,{children:[t($e,{children:"\uC870\uC9C1\uAD00\uB9AC"}),i(Re,{children:[t(Ne,{children:t(de,{})}),i(je,{children:[t(Ce,{id:o?.id,name:o?.name,adminUserName:o?.admin_user?.name,siteUserName:o?.site_user?.name,address:o?.basic_address,setInviteModalOpen:p}),t(De,{data:d,me:r,siteUserId:o?.site_user?.id})]})]}),t(ee,{open:u,onClose:()=>p(!1),fieldId:o?.id,fieldName:o?.name})]})})};const Ue=e.div`
  width: 100%;
  height: 100%;
  padding: 60px;
`,$e=e.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 40px;
`,Re=e.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #e3e3e3;
`,Ne=e.div`
  width: 360px;
`,je=e.div`
  width: 100%;
  height: 720px;
  max-height: 720px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e3e3e3;
`;export{tt as default};
