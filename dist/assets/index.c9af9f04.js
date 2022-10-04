import{r as s,a as t,j as o,n as e,u as k,l as T,B as z,d as L}from"./index.fa23706f.js";import{M as E}from"./MypageLayout.8a840471.js";import{g as f,c as h,S as W,b as v,u as j}from"./Header.8f74d7dd.js";import{u as R}from"./useFriends.38f9623d.js";import{a as S}from"./common.0c17b2bd.js";import{B as g,b,a as y}from"./Button.2ebe35cd.js";import{T as D}from"./TextModal.458f5750.js";import{I as O}from"./ImgModal.aa482c68.js";import"./ProfileBox.54d21f9f.js";import"./Modal.5ea91f83.js";var $=({info:i,id:a,name:l,active:u,position:n,revalidate:c,isHide:C,onClick:x})=>{const[d,p]=s.exports.useState(!1);return t(P,{isActive:u,isOpen:d,children:o(U,{onClick:x,children:[t(Y,{children:t(_,{src:f("../assets/default-profile.jpeg")})}),o(K,{children:[t(N,{children:l}),t(H,{children:n})]})]})})};const P=e.div`
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

  ${({isActive:i})=>i?h`
          border-color: #258fff;
        `:h`
          border-color: white;
        `}

  &:hover {
    border-color: #258fff;
  }

  transition: border 0.1s linear, min-height 0.05s linear;

  overflow: hidden;
`,U=e.div`
  display: flex;
  align-items: center;

  padding: 20px;
`,N=e.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;

  margin-right: 4px;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:last-child {
    margin-bottom: 0;
  }
`,H=e.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #444;
`,Y=e.div`
  display: flex;
  flex-direction: column;
`;e.img`
  width: 22px;
  height: 22px;

  ${({isOpen:i})=>i?h`
          transform: rotate(180deg);
        `:h`
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
`;const K=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;e.div`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #000;
`;const _=e.img`
  width: 48px;
  height: 48px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;

  margin-right: 14px;
`;var q=({data:i,selectedFriendInfo:a,setSelectedFriendInfo:l,mutate:u})=>{const[n,c]=s.exports.useState(0),[C,x]=s.exports.useState(!1),[d,p]=s.exports.useState("");s.exports.useMemo(()=>n===0?"N":"Y",[n]);const w=s.exports.useMemo(()=>i?i.filter(r=>r?.name?.includes(d)):[],[i,d]),m=r=>{c(r),x(!1)};return o(G,{children:[o(J,{children:[t(W,{placeholder:"\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.",containerStyle:{marginBottom:26},value:d,onChange:r=>p(r.target.value)}),o(Q,{children:[o(M,{active:n===0,onClick:()=>m(0),children:["\uCE5C\uAD6C\uBAA9\uB85D (",i?.length,")"]}),t(M,{active:n===1,onClick:()=>m(1),children:"\uBC1B\uC740\uC694\uCCAD (03)"})]})]}),t(V,{children:w?.map((r,fe)=>t($,{info:r,id:r?.id,name:r?.name,position:r?.position,revalidate:u,isHide:n===1,active:r.id===a?.id,onClick:()=>l(r)},r?.id))})]})};const G=e.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 720px;
  max-height: 720px;
  max-width: 360px;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`,J=e.div`
  display: block;

  height: 136px;

  padding: 30px 30px 0px 30px;
  border-bottom: 1px solid #e3e3e3;
`,Q=e.div`
  display: flex;
  width: 100%;
`,M=e.div`
  flex: 1;
  padding: 13px 0px 10px 0px;
  text-align: center;
  margin-bottom: -1px;
  cursor: pointer;

  ${({active:i})=>i?h`
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.3px;
          color: #222;

          border-bottom: 2px solid black;
        `:h`
          font-size: 15px;
          letter-spacing: -0.3px;
          color: #999;
        `}
`,V=e(v)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 30px 6px 20px 20px;

  width: 100%;
  overflow-y: scroll;
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;e(v)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  max-height: 360px;
  overflow-y: scroll;
`;var X=({data:i,mutate:a})=>{k();const l=T(),u=j(),[n,c]=s.exports.useState(!1),[C,x]=s.exports.useState(!1),[d,p]=s.exports.useState(!1);s.exports.useState(!1);const w=()=>{c(!n),x(!C)},m=async()=>{try{await L.delete(`/frineds/${i?.id}`),p(!1),await a()}catch(r){console.log(r),window.alert("\uC5D0\uB7EC \uBC1C\uC0DD..")}};return o(Z,{children:[i&&o(ee,{children:[o(re,{children:[t(ie,{src:f("../assets/default-profile.jpeg")}),o(I,{children:[o(te,{children:[t(ne,{children:i?.company.name}),t(se,{children:i?.name}),t(le,{children:i?.position}),i?.authority&&u?t(F,{children:"\uC8FC\uBB38\uB2F4\uB2F9\uC790"}):i?.authority?t(F,{children:"\uACF5\uC7A5\uAD00\uB9AC\uC790"}):null]}),o(oe,{children:[t(g,{size:b.SMALL,type:y.GRAY_BLACK,icon:"ic-minus-people-bk",containerStyle:{width:"auto",height:"42px",marginRight:10},onClick:()=>p(!0),children:"\uCE5C\uAD6C\uC0AD\uC81C"}),t(g,{size:b.SMALL,type:y.PRIMARY,icon:"ic-chat-white",containerStyle:{width:"auto",height:"42px"},onClick:()=>{l(z(i))},children:"\uCC44\uD305\uD558\uAE30"})]})]}),t(I,{children:o(ce,{children:[o(B,{children:[t(A,{src:f("../assets/ic-cellphone-bk.svg")}),S(i?.phone)]}),o(B,{children:[t(A,{src:f("../assets/ic-phone-bk.svg")}),S(i?.tel)]}),o(B,{children:[t(A,{src:f("../assets/ic-email-bk.svg")}),i?.signname]})]})})]}),i?.request?o(ae,{children:[t(g,{type:y.OUTLINE,size:b.SMALL,containerStyle:{width:86,height:36,borderRadius:40,marginBottom:14},onClick:()=>c(!0),children:"\uC218\uB77D"}),t(g,{type:y.BLACK_OUTLINE,size:b.SMALL,containerStyle:{width:86,height:36,borderRadius:40},onClick:()=>p(!0),children:"\uAC70\uC808"})]}):null]}),t(D,{open:n,onClose:()=>c(!1),onSubmit:w,content:"\uC8FC\uBB38\uB2F4\uB2F9\uC790 \uAD8C\uD55C\uC744 \uC704\uC784\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",submitText:"\uAD8C\uD55C\uC704\uC784"}),t(D,{open:d,onClose:()=>p(!1),onSubmit:m,content:"\uCE5C\uAD6C\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",submitText:"\uC0AD\uC81C"}),t(O,{open:C,onClose:()=>x(!1),content:"\uC8FC\uBB38\uB2F4\uB2F9\uC790 \uBCC0\uACBD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",submitText:"\uD655\uC778"})]})};const Z=e(v)`
  width: 100%;
  overflow-y: scroll;
`,ee=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* height: 148px; */
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  padding: 35px 40px;
`,I=e.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`,te=e.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,ie=e.img`
  width: 80px;
  height: 80px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;
`,oe=e.div`
  display: flex;
`,re=e.div`
  display: flex;
  align-items: center;
`,ne=e.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #777;
  margin-right: 6px;
`,se=e.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;
  margin-right: 2px;
`,le=e.div`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #222;
`,F=e.span`
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
`,ce=e.div`
  display: flex;
  flex-direction: column;
`,B=e.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: normal;
  color: #000;

  margin-bottom: 8px;
`,A=e.img`
  width: 24px;
  height: 24px;

  margin-right: 14px;
`,ae=e.div`
  display: flex;
  flex-direction: column;
`;var De=()=>{const[i,a]=s.exports.useState(null),{data:{friends:l,error:u,refetch:n}}=R(),c=()=>{l&&l?.length>0&&a(l?.[0])};return s.exports.useEffect(()=>{c()},[l]),t(E,{children:o(de,{children:[t(pe,{children:"\uCE5C\uAD6C\uAD00\uB9AC"}),o(ue,{children:[t(xe,{children:t(q,{data:l,selectedFriendInfo:i,setSelectedFriendInfo:a,mutate:n})}),t(he,{children:t(X,{data:i,mutate:n})})]})]})})};const de=e.div`
  width: 100%;
  height: 100%;
  padding: 60px;
`,pe=e.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 40px;
`,ue=e.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #e3e3e3;
`,xe=e.div`
  width: 360px;
`,he=e.div`
  width: 100%;
  height: 720px;
  max-height: 720px;
  display: flex;
  flex-direction: column;
  border-top: solid 1px #c7c7c7;
  border-left: 1px solid #e3e3e3;
`;export{De as default};
