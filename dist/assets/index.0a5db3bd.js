import{r as f,j as n,a as t,n as e}from"./index.fa23706f.js";import{M as L}from"./MypageLayout.8a840471.js";import{c as u,g as S,u as $}from"./Header.8f74d7dd.js";import{T as E}from"./Tooltip.7e861596.js";import"./ProfileBox.54d21f9f.js";var P=({data:c={},revalidate:p})=>{const[i,y]=f.exports.useState(!1),o=()=>{y(!0)};return n(O,{children:[n(v,{children:[t(m,{children:"\uACAC\uC801\uC811\uC218"}),t(b,{children:t(a,{children:t(s,{onClick:()=>o,checked:i})})}),t(w,{children:t(a,{children:t(s,{onClick:()=>o,checked:i})})})]}),n(v,{children:[t(m,{children:"\uB808\uBBF8\uCF58\uC0AC\uC758 \uC8FC\uBB38 \uD655\uC778"}),t(b,{children:t(a,{children:t(s,{onClick:()=>o,checked:i})})}),t(w,{children:t(a,{children:t(s,{onClick:()=>o,checked:i})})})]}),n(v,{children:[t(m,{children:"\uC6B0\uCC9C \uC608\uBCF4 \uBC1C\uC0DD"}),t(b,{children:t(a,{children:t(s,{onClick:()=>o,checked:i})})}),t(w,{children:t(a,{children:t(s,{onClick:()=>o,checked:i})})})]}),n(v,{children:[t(m,{children:"\uCD9C\uD558 \uC804\uC77C \uB9AC\uB9C8\uC778\uB354"}),t(b,{children:t(a,{children:t(s,{onClick:()=>o,checked:i})})}),t(w,{children:t(a,{children:t(s,{onClick:()=>o,checked:i})})})]})]})};e.div`
  width: 100%;
  height: 100%;
  padding: 60px;

  margin-bottom: 400px;
`;e.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 60px;
`;e.div`
  width: 540px;
  margin-bottom: 18px;
`;e.div`
  height: 34px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  font-size: 16px;
  font-weight: 500;
  color: #222;

  border-bottom: 1px solid #c7c7c7;
`;e.div`
  width: 375px;
`;e.div`
  width: 82px;
  text-align: center;
`;e.div`
  width: 82px;
  text-align: center;
`;const O=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  margin-top: 24px;
  margin-bottom: 4px;

  border-bottom: 1px solid #e3e3e3;
`,m=e.div`
  width: 375px;
  display: flex;
  align-items: center;
`,b=e.div`
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`,w=e.div`
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`,a=e.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`,s=e.div`
  position: relative;
  width: 50px;
  height: 30px;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  ${({checked:c})=>c?u`
          background: #258fff;
          &:before {
            transition: 300ms all;
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 35px;
            top: 50%;
            left: 4px;
            background: white;
            transform: translate(80%, -50%);
          }
        `:u`
          background: #e3e3e3;
          &:before {
            transition: 300ms all;
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 35px;
            top: 50%;
            left: 4px;
            background: white;
            transform: translate(0, -50%);
          }
        `}
`,v=e.div`
  display: flex;
  margin-bottom: 24px;
`;e.span`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #a09c9c;
`;var M=({data:c={},revalidate:p})=>{const[i,y]=f.exports.useState(!1),[o,B]=f.exports.useState(!1),[A,F]=f.exports.useState({x:0,y:0}),r=()=>{y(!i)},j=k=>{B(!0)},z=()=>{B(!1)};return n(G,{children:[n(g,{children:[t(h,{children:"\uC2E0\uADDC \uC778\uD5C8\uAC00\uD604\uC7A5 \uBC1C\uC0DD"}),t(x,{children:t(l,{children:t(d,{onClick:()=>r,checked:i})})}),t(C,{children:t(l,{children:t(d,{onClick:()=>r,checked:i})})})]}),n(g,{children:[t(h,{children:"\uACAC\uC801\uC694\uCCAD \uC811\uC218"}),t(x,{children:t(l,{children:t(d,{onClick:()=>r,checked:i})})}),t(C,{children:t(l,{children:t(d,{onClick:()=>r,checked:i})})})]}),n(g,{children:[n(h,{children:["\uB300\uAE30\uC5C5 \uAC74\uC124\uC0AC \uACAC\uC801\uC694\uCCAD \uC811\uC218",t(N,{src:S("../assets/ic-question.svg"),onMouseOver:k=>{j(),F({x:k.clientX,y:k.clientY})},onMouseLeave:z}),o&&t(E,{containerStyle:{top:A.y,left:A.x},children:n(T,{children:[t(I,{children:"\uB300\uAE30\uC5C5 \uC120\uC815 \uAE30\uC900"}),t(D,{children:"\uC2DC\uACF5\uB2A5\uB825\uD3C9\uAC00"}),t(D,{children:"\uC21C\uC704 100\uC704 \uB0B4 \uAE30\uC5C5"})]})})]}),t(x,{children:t(l,{children:t(d,{onClick:()=>r,checked:i})})}),t(C,{children:t(l,{children:t(d,{onClick:()=>r,checked:i})})})]}),n(g,{children:[t(h,{children:"\uAC74\uC124\uC0AC\uC758 \uB808\uBBF8\uCF58 \uC8FC\uBB38"}),t(x,{children:t(l,{children:t(d,{onClick:()=>r,checked:i})})}),t(C,{children:t(l,{children:t(d,{onClick:()=>r,checked:i})})})]}),n(g,{children:[t(h,{children:"\uC6B0\uCC9C \uC608\uBCF4 \uBC1C\uC0DD"}),t(x,{children:t(l,{children:t(d,{onClick:()=>r,checked:i})})}),t(C,{children:t(l,{children:t(d,{onClick:()=>r,checked:i})})})]})]})};e.div`
  width: 100%;
  height: 100%;
  padding: 60px;

  margin-bottom: 400px;
`;e.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 60px;
`;e.div`
  width: 540px;
  margin-bottom: 18px;
`;e.div`
  height: 34px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  font-size: 16px;
  font-weight: 500;
  color: #222;

  border-bottom: 1px solid #c7c7c7;
`;e.div`
  width: 375px;
`;e.div`
  width: 82px;
  text-align: center;
`;e.div`
  width: 82px;
  text-align: center;
`;const G=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  margin-top: 24px;
  margin-bottom: 4px;

  border-bottom: 1px solid #e3e3e3;
`,h=e.div`
  width: 375px;
  display: flex;
  align-items: center;
`,x=e.div`
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`,C=e.div`
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`,l=e.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`,d=e.div`
  position: relative;
  width: 50px;
  height: 30px;
  background: #e3e3e3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  ${({checked:c})=>c?u`
          &:before {
            transition: 300ms all;
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 35px;
            top: 50%;
            left: 4px;
            background: white;
            transform: translate(80%, -50%);
          }
        `:u`
          &:before {
            transition: 300ms all;
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 35px;
            top: 50%;
            left: 4px;
            background: white;
            transform: translate(0, -50%);
          }
        `}
`,g=e.div`
  display: flex;
  margin-bottom: 24px;
`;e.span`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #a09c9c;
`;const N=e.img`
  width: 16px;
  height: 16px;
  margin-left: 6px;
`,T=e.div`
  position: absolute;
  text-align: center;

  width: 186px;

  padding: 14px 0px;
  color: #000;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`,I=e.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;

  margin-bottom: 10px;
`,D=e.div`
  font-size: 13px;
  font-weight: normal;
  line-height: 1.62;
  letter-spacing: -0.26px;
  color: #000;
`,K={id:1,notification:{appPush:{estimationSubmit:1,remiconOrderConfirm:1,preWeather:1,reminder:1},kakaoPush:{estimationSubmit:0,remiconOrderConfirm:0,preWeather:0,reminder:0}}};var et=()=>{const c=$(),p=K.notification;return f.exports.useState(!1),t(L,{children:n(U,{children:[t(W,{children:"\uC54C\uB9BC \uC124\uC815"}),n(q,{children:[n(R,{children:[t(X,{children:"\uC8FC\uBB38"}),t(Y,{children:"\uC571\uD478\uC2DC"}),t(H,{children:"\uCE74\uCE74\uC624\uD1A1"})]}),c?t(P,{data:p,revalidate:p}):t(M,{data:p,revalidate:p})]}),t(J,{children:"\u2022 \uC911\uC694 \uC815\uBCF4\uB294 \uD61C\uD0DD\uC54C\uB9BC \uC218\uC2E0\uB3D9\uC758\uC640 \uC0C1\uAD00\uC5C6\uC774 \uBC1C\uC1A1\uB429\uB2C8\uB2E4."})]})})};const U=e.div`
  width: 100%;
  height: 100%;
  padding: 60px;

  margin-bottom: 400px;
`,W=e.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 60px;
`,q=e.div`
  width: 540px;
  margin-bottom: 18px;
`,R=e.div`
  height: 34px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  font-size: 16px;
  font-weight: 500;
  color: #222;

  border-bottom: 1px solid #c7c7c7;
`,X=e.div`
  width: 375px;
`,Y=e.div`
  width: 82px;
  text-align: center;
`,H=e.div`
  width: 82px;
  text-align: center;
`;e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  margin-top: 24px;
  margin-bottom: 4px;

  border-bottom: 1px solid #e3e3e3;
`;e.div`
  width: 375px;
  display: flex;
  align-items: center;
`;e.div`
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`;e.div`
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`;e.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;e.div`
  position: relative;
  width: 50px;
  height: 30px;
  background: #e3e3e3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  ${({checked:c})=>c?u`
          &:before {
            transition: 300ms all;
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 35px;
            top: 50%;
            left: 4px;
            background: white;
            transform: translate(80%, -50%);
          }
        `:u`
          &:before {
            transition: 300ms all;
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 35px;
            top: 50%;
            left: 4px;
            background: white;
            transform: translate(0, -50%);
          }
        `}
`;e.div`
  display: flex;
  margin-bottom: 24px;
`;const J=e.span`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #a09c9c;
`;export{et as default};
