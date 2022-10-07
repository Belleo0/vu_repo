import{l as v,r as D,a as t,j as n,B as A,d as g,n as e}from"./index.fa23706f.js";import{u as B}from"./useFriends.38f9623d.js";import{a as m}from"./common.0c17b2bd.js";import{g as s}from"./Header.8f74d7dd.js";import{B as x,b as u,a as l}from"./Button.2ebe35cd.js";import{M as I}from"./Modal.5ea91f83.js";var _=({open:f,data:i,onClose:o,companyName:C})=>{const y=v(),{data:{friends:a,error:N,refetch:h}}=B(),w=async()=>{if(!!i.id)try{await g.post(`/frineds/${i?.id}`),o(),h()}catch(r){console.log(r),window.alert("\uC5D0\uB7EC \uBC1C\uC0DD..")}},b=async()=>{if(!!i.id)try{await g.delete(`/frineds/${i?.id}`),o(),h()}catch(r){console.log(r),window.alert("\uC5D0\uB7EC \uBC1C\uC0DD..")}},c=D.exports.useMemo(()=>a?.filter(r=>r.id===i?.id),[a,i]);return t(I,{open:f,onClose:o,children:t(R,{children:i&&n(k,{children:[t(Y,{children:t(F,{src:s("../assets/ic-del.svg"),onClick:o})}),n(M,{children:[t(S,{src:s("../assets/default-profile.jpeg")}),t(z,{children:C}),n(P,{children:[i.name,t(j,{children:i.position})]})]}),t(E,{}),n(U,{children:[n(p,{children:[t(d,{src:s("../assets/ic-cellphone-bk.svg")}),m(i.phone)]}),n(p,{children:[t(d,{src:s("../assets/ic-phone-bk.svg")}),m(i.tel)]}),n(p,{children:[t(d,{src:s("../assets/ic-email-bk.svg")}),i.signname]})]}),n(L,{children:[t(x,{size:u.PRIMARY,type:c.length>0?l.GRAY_BLACK:l.PRIMARY,icon:c.length>0?"ic-minus-people-bk":"ic-add-person-white",iconStyle:{width:"19px",height:"19px"},containerStyle:{height:"50px",marginRight:20},onClick:c.length>0?b:w,children:c.length>0?"\uCE5C\uAD6C\uC0AD\uC81C":"\uCE5C\uAD6C\uCD94\uAC00"}),t(x,{size:u.PRIMARY,type:l.PRIMARY,icon:"ic-chat-white",containerStyle:{height:"50px"},iconStyle:{width:"19px",height:"19px"},onClick:()=>{y(A(i)),o()},children:"\uCC44\uD305\uD558\uAE30"})]})]})})})};const R=e.div`
  width: 360px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
`,k=e.div``,M=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,S=e.img`
  width: 120px;
  height: 120px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;

  margin-bottom: 25px;
`,z=e.div`
  font-size: 15px;
  font-weight: normal;
  letter-spacing: -0.3px;
  color: #999;

  margin-bottom: 7px;
`,P=e.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #000;

  margin-bottom: 24px;
`,j=e.span`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.32px;
  color: #222;

  margin-left: 4px;
`,E=e.div`
  display: block;
  height: 1px;
  background-color: #e3e3e3;

  margin-bottom: 20px;
`;e.div``;const Y=e.div`
  display: flex;
  flex-direction: column;
`,F=e.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`,U=e.div`
  display: flex;
  flex-direction: column;
`,p=e.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: normal;
  color: #000;

  margin-bottom: 14px;
`,d=e.img`
  width: 24px;
  height: 24px;

  margin-right: 14px;
`,L=e.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;export{_ as U};
