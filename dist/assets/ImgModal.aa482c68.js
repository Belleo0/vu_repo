import{a as e,j as i,n}from"./index.fa23706f.js";import{g as l}from"./Header.8f74d7dd.js";import{B as o,a}from"./Button.2ebe35cd.js";import{M as r,b as c,a as s}from"./Modal.5ea91f83.js";var w=t=>e(r,{...t,children:i(c,{children:[t.imgUrl?e(d,{onClick:t.onClose,children:e(x,{src:l("../assets/ic-del.svg")})}):null,t.imgUrl?e(f,{children:e(u,{src:l(`${t.imgUrl}`)})}):null,e(m,{children:t?.title}),t.content&&i(g,{children:[e("span",{style:{color:"#258fff"},children:t?.email}),t?.content]}),e(h,{children:t?.redContent}),i(s,{children:[t.onSubmit?e(o,{type:a.GRAY_BLACK,onClick:t.onClose,containerStyle:{marginRight:20},children:"\uCDE8\uC18C"}):null,t.submitText&&e(o,{onClick:t?.onSubmit?t.onSubmit:t.onClose,children:t?.submitText||"\uD655\uC778"})]})]})});const g=n.div`
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
  white-space: pre;
`,m=n.div`
  display: block;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
  text-align: center;
  margin-top: 20px;
  white-space: pre;
`,h=n.div`
  display: block;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  color: #ef0000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  white-space: pre;
`;n.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  color: #258fff;
  text-align: center;
  margin-top: 20px;
  white-space: pre;
`;const d=n.div`
  text-align: right;
`,x=n.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`,f=n.div`
  text-align: center;
`,u=n.img``;export{w as I};
