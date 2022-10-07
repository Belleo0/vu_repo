import{d as Y,e as _e,f as Fe,r as i,j as a,a as e,n as t,u as Ye,F as De,v as $e}from"./index.fa23706f.js";import{a as Z,h as B,g as _,u as ae,c as Oe}from"./Header.8f74d7dd.js";import{u as We}from"./useSelectedSpaceId.e98fa8e8.js";import{B as T,a as y}from"./Button.2ebe35cd.js";import{n as ze,s as Ne}from"./SpecOptions.8ecc5a87.js";import{B as te}from"./BlackInput.304293be.js";import{B as q}from"./BlackSelect.c26abd5f.js";import{M as Ae}from"./Modal.5ea91f83.js";import{T as Le}from"./TextModal.458f5750.js";const He="SPACE_ASSIGNMENTS";var Mn=(n,l)=>{const u=We();return Z([He,u,n,l],()=>Y.get("/assignments",{params:{space_id:u,start_date:B(n).format("YYYY-MM-DD"),end_date:B(l).format("YYYY-MM-DD")}}),{enabled:!!(!!u&&n&&l)})},be=()=>{const{selectedSpaceInfo:n}=_e(l=>l.space,Fe);return n};const Pe="FIELD_SPACE_WEATHER";var Ve=n=>{const l=be();return Z([Pe,n??l?.id],()=>Y.get(`/factory-spaces/${n??l?.id}/weathers`),{enabled:!!l})},Ge=(n=>(n[n.DAY=0]="DAY",n[n.WEEK=1]="WEEK",n[n.MONTH=2]="MONTH",n))(Ge||{});const Rn=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],Tn=n=>{const l=n.getDay();return new Array(7).fill(null).map((r,s)=>new Date(n.valueOf()+864e5*(s-l)))},ne=n=>n.toString().padStart(2,"0"),ye=(n=new Date)=>{const l=new Date(n),u=l.getDate(),s=new Date(l.setDate(1)).getDay();return parseInt((s-1+u)/7)+1},Ue=n=>{const l=n.getFullYear(),u=n.getMonth(),r=new Date(l,u+1,0);return ye(r)},_n=(n,l)=>{if(!l||l.length===0)return null;const u=l[0].getFullYear(),r=l[0].getMonth()+1,s=l[0].getDate();if(n===0)return`${u}\uB144 ${ne(r)}\uC6D4 ${ne(s)}\uC77C`;{const h=ye(l[0]),C=Ue(l[0]),m=h===C?1:h,c=h===C?r+1:r;return`${u}\uB144 ${ne(c)}\uC6D4 ${m}\uC8FC\uCC28`}},Fn=n=>{const l=new Date(n),u=new Date;return l.getDate()===u.getDate()&&l.getMonth()===u.getMonth()&&l.getFullYear()===u.getFullYear()},je="SPACE_INFO";var qe=n=>Z([je,n],()=>Y.get(`/field-spaces/${n}`),{enabled:!!n});function Ke(){const n=i.exports.useRef(),[l,u]=i.exports.useState(0),r=()=>{!n?.current||u(n.current.scrollTop)};return i.exports.useEffect(()=>{if(n.current=document.getElementById("content-container"),!!n?.current)return n.current.addEventListener("scroll",r),()=>{!n?.current||n.current.removeEventListener("scroll",r)}},[]),{scrollY:l}}const oe=(n,l)=>{const u=new Date(n),r=u.getHours(),s=u.getMinutes();return`${r>=12?"\uC624\uD6C4":"\uC624\uC804"}${l?"":" "}${r>12?r-12:r===0?12:r}\uC2DC ${s===0?"":`${s.toString().padStart(2,"0")}\uBD84 `}`},Qe={"200":"\uBE44\uB97C \uB3D9\uBC18\uD55C \uCC9C\uB465\uAD6C\uB984","201":"\uAC00\uBCBC\uC6B4 \uBE44\uB97C \uB3D9\uBC18\uD55C \uCC9C\uB465\uAD6C\uB984","202":"\uD3ED\uC6B0\uB97C \uB3D9\uBC18\uD55C \uCC9C\uB465\uAD6C\uB984","210":"\uC57D\uD55C \uCC9C\uB465\uAD6C\uB984","211":"\uCC9C\uB465\uAD6C\uB984","212":"\uAC15\uD55C \uCC9C\uB465\uAD6C\uB984","221":"\uBD88\uADDC\uCE59\uC801 \uCC9C\uB465\uAD6C\uB984","230":"\uC57D\uD55C \uC5F0\uBB34\uB97C \uB3D9\uBC18\uD55C \uCC9C\uB465\uAD6C\uB984","231":"\uC5F0\uBB34\uB97C \uB3D9\uBC18\uD55C \uCC9C\uB465\uAD6C\uB984","232":"\uAC15\uD55C \uC548\uAC1C\uBE44\uB97C \uB3D9\uBC18\uD55C \uCC9C\uB465\uAD6C\uB984","300":"\uAC00\uBCBC\uC6B4 \uC548\uAC1C\uBE44","301":"\uC548\uAC1C\uBE44","302":"\uAC15\uD55C \uC548\uAC1C\uBE44","310":"\uAC00\uBCBC\uC6B4 \uC801\uC740\uBE44","311":"\uC801\uC740\uBE44","312":"\uAC15\uD55C \uC801\uC740\uBE44","313":"\uC18C\uB098\uAE30\uC640 \uC548\uAC1C\uBE44","314":"\uAC15\uD55C \uC18C\uB098\uAE30\uC640 \uC548\uAC1C\uBE44","321":"\uC18C\uB098\uAE30","500":"\uC545\uD55C \uBE44","501":"\uC911\uAC04 \uBE44","502":"\uAC15\uD55C \uBE44","503":"\uB9E4\uC6B0 \uAC15\uD55C \uBE44","504":"\uADF9\uC2EC\uD55C \uBE44","511":"\uC6B0\uBC15","520":"\uC57D\uD55C \uC18C\uB098\uAE30 \uBE44","521":"\uC18C\uB098\uAE30 \uBE44","522":"\uAC15\uD55C \uC18C\uB098\uAE30 \uBE44","531":"\uBD88\uADDC\uCE59\uC801 \uC18C\uB098\uAE30 \uBE44","600":"\uAC00\uBCBC\uC6B4 \uB208","601":"\uB208","602":"\uAC15\uD55C \uB208","611":"\uC9C4\uB208\uAE68\uBE44","612":"\uC18C\uB098\uAE30 \uC9C4\uB208\uAE68\uBE44","615":"\uC57D\uD55C \uBE44\uC640 \uB208","616":"\uBE44\uC640 \uB208","620":"\uC57D\uD55C \uC18C\uB098\uAE30 \uB208","621":"\uC18C\uB098\uAE30 \uB208","622":"\uAC15\uD55C \uC18C\uB098\uAE30 \uB208","701":"\uBC15\uBB34","711":"\uC5F0\uAE30","721":"\uC5F0\uBB34","731":"\uBAA8\uB798 \uBA3C\uC9C0","741":"\uC548\uAC1C","751":"\uBAA8\uB798","761":"\uBA3C\uC9C0","762":"\uD654\uC0B0\uC7AC","771":"\uB3CC\uD48D","781":"\uD1A0\uB124\uC774\uB3C4","800":"\uAD6C\uB984 \uD55C \uC810 \uC5C6\uB294 \uB9D1\uC740 \uD558\uB298","801":"\uC57D\uAC04\uC758 \uAD6C\uB984\uC774 \uB080 \uD558\uB298","802":"\uB4DC\uBB38\uB4DC\uBB38 \uAD6C\uB984\uC774 \uB080 \uD558\uB298","803":"\uAD6C\uB984\uC774 \uAC70\uC758 \uC5C6\uB294 \uD558\uB298","804":"\uAD6C\uB984\uC73C\uB85C \uB4A4\uB36E\uC778 \uD750\uB9B0 \uD558\uB298","900":"\uD1A0\uB124\uC774\uB3C4","901":"\uD0DC\uD48D","902":"\uD5C8\uB9AC\uCF00\uC778","903":"\uD55C\uB7AD","904":"\uACE0\uC628","905":"\uBC14\uB78C\uBD80\uB294","906":"\uC6B0\uBC15","951":"\uBC14\uB78C\uC774 \uAC70\uC758 \uC5C6\uB294","952":"\uC57D\uD55C \uBC14\uB78C","953":"\uBD80\uB4DC\uB7EC\uC6B4 \uBC14\uB78C","954":"\uC911\uAC04 \uC138\uAE30 \uBC14\uB78C","955":"\uC2E0\uC120\uD55C \uBC14\uB78C","956":"\uC13C \uBC14\uB78C","957":"\uB3CC\uD48D\uC5D0 \uAC00\uAE4C\uC6B4 \uC13C \uBC14\uB78C","958":"\uB3CC\uD48D","959":"\uC2EC\uAC01\uD55C \uB3CC\uD48D","960":"\uD3ED\uD48D","961":"\uAC15\uD55C \uD3ED\uD48D","962":"\uD5C8\uB9AC\uCF00\uC778"};var N=({value:n,onChange:l,label:u,containerStyle:r})=>a(Xe,{style:r,children:[e(Je,{src:_(`../assets/ic-check-box-${n?"on":"off"}.svg`),onClick:()=>l()}),e(Ze,{children:u})]});const Xe=t.div`
  display: flex;
  align-items: center;
`,Je=t.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  cursor: pointer;
`,Ze=t.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #222;
`,et="ASSIGNMENT_INFO";var tt=n=>Z([et,n],()=>Y.get(`/assignments/${n}`),{enabled:!!n}),nt=({id:n,type:l,mutate:u,onModify:r,onRemove:s})=>{Ye();const h=ae(),{data:C,refetch:m}=tt(n),[c,x]=i.exports.useState(!1),E=async()=>{if(c===!1){x(!0);try{await Y.post(`/assignments/${n}/confirm`)}catch(D){console.log(D),window.alert("\uC5D0\uB7EC \uBC1C\uC0DD..")}finally{await m(),await u(),x(!1)}}};return l==="FIELD_TO_FACTORY"&&h===!0||l==="FACTORY_TO_FIELD"&&h===!1?C?.status==="REQUESTED"?a(K,{children:[e(T,{type:y.OUTLINE,containerStyle:{marginRight:14},onClick:s,children:"\uCDE8\uC18C\uD558\uAE30"}),e(T,{type:y.GRAY,children:"\uD655\uC778 \uC911"})]}):C?.status==="CONFIRMED"?a(K,{children:[e(T,{type:y.OUTLINE,containerStyle:{marginRight:14},onClick:s,children:"\uCDE8\uC18C\uD558\uAE30"}),e(T,{type:y.PRIMARY,onClick:r,children:"\uBCC0\uACBD\uD558\uAE30"})]}):(C?.status==="REMOVED",null):C?.status==="REQUESTED"?a(K,{children:[e(T,{type:y.OUTLINE,containerStyle:{marginRight:14},onClick:s,children:"\uCDE8\uC18C\uD558\uAE30"}),e(T,{type:y.PRIMARY,onClick:E,children:"\uD655\uC778\uD558\uAE30"})]}):C?.status==="CONFIRMED"?a(K,{children:[e(T,{type:y.OUTLINE,containerStyle:{marginRight:14},onClick:s,children:"\uCDE8\uC18C\uD558\uAE30"}),e(T,{type:y.PRIMARY,onClick:r,children:"\uBCC0\uACBD\uD558\uAE30"})]}):(C?.status==="REMOVED",null)};const K=t.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;var W=[{label:"\uC624\uC804 06:00",value:"06:00"},{label:"\uC624\uC804 06:30",value:"06:30"},{label:"\uC624\uC804 07:00",value:"07:00"},{label:"\uC624\uC804 07:30",value:"07:30"},{label:"\uC624\uC804 08:00",value:"08:00"},{label:"\uC624\uC804 08:30",value:"08:30"},{label:"\uC624\uC804 09:00",value:"09:00"},{label:"\uC624\uC804 09:30",value:"09:30"},{label:"\uC624\uC804 10:00",value:"10:00"},{label:"\uC624\uC804 10:30",value:"10:30"},{label:"\uC624\uC804 11:00",value:"11:00"},{label:"\uC624\uC804 11:30",value:"11:30"},{label:"\uC624\uD6C4 12:00",value:"12:00"},{label:"\uC624\uD6C4 12:30",value:"12:30"},{label:"\uC624\uD6C4 13:00",value:"13:00"},{label:"\uC624\uD6C4 13:30",value:"13:30"},{label:"\uC624\uD6C4 14:00",value:"14:00"},{label:"\uC624\uD6C4 14:30",value:"14:30"},{label:"\uC624\uD6C4 15:00",value:"15:00"},{label:"\uC624\uD6C4 15:30",value:"15:30"},{label:"\uC624\uD6C4 16:00",value:"16:00"},{label:"\uC624\uD6C4 16:30",value:"16:30"},{label:"\uC624\uD6C4 17:00",value:"17:00"},{label:"\uC624\uD6C4 17:30",value:"17:30"},{label:"\uC624\uD6C4 18:00",value:"18:00"},{label:"\uC624\uD6C4 18:30",value:"18:30"},{label:"\uC624\uD6C4 19:00",value:"19:00"},{label:"\uC624\uD6C4 19:30",value:"19:30"},{label:"\uC624\uD6C4 20:00",value:"20:00"},{label:"\uC624\uD6C4 20:30",value:"20:30"},{label:"\uC624\uD6C4 21:00",value:"21:00"}];const ie={value:25,norminal_strength:0,slump:0,quantity:0};var ut=({id:n,open:l,onClose:u,name:r,address:s,percent:h,revalidate:C,isEditModal:m=!1,initialInfo:c})=>{const x=ae(),E=be(),[D,w]=i.exports.useState(""),[v,L]=i.exports.useState(null),[S,f]=i.exports.useState(null),b=i.exports.useMemo(()=>{const o=W.indexOf(W.find(d=>d.value===v)),g=W.indexOf(W.find(d=>d.value===S));return o>g},[v,S]),[p,k]=i.exports.useState([ie]),[I,$]=i.exports.useState({mulcha:!1,multal:!1,inducer:!1});i.exports.useEffect(()=>{console.log(p)},[p]);const H=i.exports.useMemo(()=>p.reduce((o,g)=>o+g.quantity,0),[p]),[P,V]=i.exports.useState(""),ee=i.exports.useMemo(()=>!(D===""||v===null||S===null||p[0].slump===0||p[0].norminal_strength===0||p[0].quantity===0),[D,v,S,p]),[j,F]=i.exports.useState(!1),O=(o,g,d)=>{console.log(o,g,d),(/\d/.test(d)||d==="")&&k(Re=>Array.from(Re).map((re,Te)=>Te!==o?re:{...re,[g]:parseInt(d===""?"25":d,10)}))},A=o=>{k(g=>{const d=Array.from(g);return d.splice(o+1,0,ie),d})},M=o=>{p.length>1&&k(g=>{const d=Array.from(g);return d.splice(o,1),d})},le=async()=>{if(b){window.alert("\uBC30\uC815 \uC2DC\uC791\uC2DC\uAC04\uC740 \uBC30\uC815 \uC885\uB8CC\uC2DC\uAC04\uBCF4\uB2E4 \uC774\uC804\uC73C\uB85C \uC124\uC815\uD574\uC8FC\uC138\uC694.");return}if(j===!1){F(!0);try{const o={specs:p,date:D,start_time:B(D).set({hour:parseInt(v.slice(0,2),10),minute:parseInt(v.slice(3,5),10)}).toISOString(),end_time:B(D).set({hour:parseInt(S.slice(0,2),10),minute:parseInt(S.slice(3,5),10)}).toISOString(),mulcha:I.mulcha,multal:I.multal,inducer:I.inducer,remark:P,total:H};m?await Y.put(`/assignments/${c?.id}`,o):await Y.post(`/assignments/${n}`,o)}catch(o){console.log(o)}finally{F(!1),u(),await C()}}};return i.exports.useEffect(()=>{m&&(w(c.date),L(B(c.start_time).format("HH:mm")),f(B(c.end_time).format("HH:mm")),k(c.specs),$({mulcha:c.mulcha,multal:c.multal,inducer:c.inducer}),V(c.remark))},[m,c]),e(Ae,{open:l,onClose:u,children:a(at,{children:[a(lt,{children:[e(rt,{src:_("../assets/ic-del.svg"),onClick:u}),e(ot,{children:"\uBB3C\uB7C9 \uBC30\uC815"})]}),a(it,{children:[e(st,{children:x?E?.name:r}),a(ct,{children:[e(Q,{children:"\uD604\uC7A5\uC8FC\uC18C"}),e(Ct,{children:x?E?.basic_address:s}),e(Q,{children:"\uD604\uC7A5\uC8FC\uC18C"})]})]}),a(pt,{children:[a(dt,{children:[a(se,{children:[e(Q,{children:"\uB0A9\uD488\uC5C5\uCCB4"}),e(ce,{children:x?r:E?.company?.name})]}),a(se,{children:[e(Q,{children:"\uB2E8\uAC00\uC728"}),a(ce,{children:[h,"%"]})]})]}),a(ht,{children:[a(G,{children:[e(z,{children:"\uBC30\uC815\uC77C\uC790"}),e(te,{type:"date",placeholder:"yyyy.mm.dd",containerStyle:{width:130},value:D,onChange:o=>w(o.target.value)})]}),a(G,{children:[e(z,{children:"\uBC30\uC815\uC2DC\uAC04"}),e(q,{placeholder:"\uC624\uC804 06:00",width:107,options:W,value:v,onChange:o=>L(o)}),e(gt,{src:_("../assets/ic-wave-mark.svg")}),e(q,{placeholder:"\uC624\uD6C4 21:00",width:107,options:W,value:S,onChange:o=>f(o)})]}),e(xt,{children:p.map((o,g)=>a(G,{children:[e(z,{children:g===0?"\uADDC\uACA9":""}),e(te,{maxLength:2,placeholder:"00",containerStyle:{width:40},value:25,onChange:d=>O(g,"value",d.target.value)}),e(Ce,{}),e(q,{placeholder:"00",width:60,value:o.norminal_strength===0?null:o.norminal_strength,onChange:d=>O(g,"norminal_strength",d),options:ze}),e(Ce,{}),e(q,{placeholder:"000",width:68,value:o.slump===0?null:o.slump,onChange:d=>O(g,"slump",d),options:Ne,containerStyle:{marginRight:20}}),e(z,{style:{width:"auto",marginRight:10},children:"\uC218\uB7C9"}),e(te,{placeholder:"000",containerStyle:{width:64},value:o.quantity===0?"":o.quantity,onChange:d=>O(g,"quantity",d.target.value)}),e(mt,{children:"m\xB3"}),p.length>1&&g!==0&&e(pe,{src:_("../assets/ic-minus-02.svg"),onClick:()=>M(g)}),p.length>0&&e(pe,{src:_("../assets/ic-plus-02.svg"),onClick:()=>A(g)})]}))}),a(ft,{children:[e(N,{value:I.mulcha,onChange:()=>$(o=>({...o,mulcha:!o.mulcha})),label:"\uBB3C\uCC28",containerStyle:{marginRight:24}}),e(N,{value:I.multal,onChange:()=>$(o=>({...o,multal:!o.multal})),label:"\uBB3C\uD0C8",containerStyle:{marginRight:24}}),e(N,{value:I.inducer,onChange:()=>$(o=>({...o,inducer:!o.inducer})),label:"\uC720\uB3C4\uC81C",containerStyle:{marginRight:24}})]}),a(G,{style:{alignItems:"flex-start",marginBottom:18},children:[a(z,{style:{width:64},children:["\uD2B9\uAE30\uC0AC\uD56D",e("br",{}),"(\uC120\uD0DD)"]}),e(Bt,{value:P,onChange:o=>V(o.target.value)})]}),a(G,{style:{justifyContent:"space-between"},children:[e(z,{style:{width:64},children:"\uD569\uACC4"}),a(Dt,{children:[H.toLocaleString("ko"),e("span",{children:"m\xB3"})]})]})]}),e(T,{type:ee?y.PRIMARY:y.GRAY,onClick:le,children:m?"\uC218\uC815\uD558\uAE30":"\uB4F1\uB85D\uD558\uAE30"})]})]})})};const at=t.div`
  width: 600px;
  background-color: white;
  border-radius: 20px;
`,lt=t.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 24px 30px;
`,rt=t.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`,ot=t.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`,it=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px 0px;
  background-color: #f2f2f2;
`,st=t.span`
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;
  margin-bottom: 10px;
`,ct=t.div`
  display: flex;
  align-items: center;
`,Q=t.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  &:first-of-type {
    margin-right: 14px;
  }
  &:last-child {
    margin-left: 14px;
    opacity: 0;
  }
`,Ct=t.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,pt=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 28px 40px;
`,dt=t.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
`,se=t.div`
  display: flex;
  align-items: center;
`,ce=t.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,ht=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  margin-bottom: 30px;
`,G=t.div`
  display: flex;
  align-items: center;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`,z=t.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;

  width: 52px;
  margin-right: 20px;
`,gt=t.img`
  width: 14px;
  height: 8px;
  margin: 0px 6px;
`,Ce=t.span`
  display: block;
  width: 4px;
  height: 1px;
  background-color: #000;
  margin: 0px 4px;
`,mt=t.span`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  text-align: right;
  color: #777;
  margin-left: 8px;
  margin-right: 20px;
`,pe=t.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  object-fit: contain;
  cursor: pointer;
  &:last-child {
    margin-right: 0px;
  }
`,xt=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`,ft=t.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 14px;
`,Bt=t.textarea`
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 6px;
  border: solid 1px #e3e3e3;
  background-color: #fff;
  outline: 0;
  resize: none;
`,Dt=t.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #222;

  & > span {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: -0.26px;
    color: #1f1d1d;
    margin-left: 4px;
  }
`,Ee={label:"\uC88B\uC74C",color:"#258fff"},we={label:"\uBCF4\uD1B5",color:"#00b448"},ve={label:"\uB098\uC068",color:"#ef0000"},Se={label:"\uB9E4\uC6B0\uB098\uC068",color:"#ef0000"},At=n=>n<=15?Ee:n<=35?we:n<=75?ve:Se,bt=n=>n<=30?Ee:n<=80?we:n<=150?ve:Se;var yt=n=>[i.exports.useMemo(()=>n.reduce((u,r,s)=>{if(s===0)return[];const h=n[s-1],C={x1:h.x,y1:h.y,x2:r.x,y2:r.y};return[...u,C]},[]),[n])];const R=30,U=50,ue=82,J=40,ke=J*5,Ie=120,X=Ie+30+10;var Et=({points:n,isToday:l})=>{const[u]=yt(n);return e(wt,{children:a(vt,{viewBox:`0 0 ${n.length*ue} ${ke}`,style:{width:n.length*ue},children:[u.map(({x1:r,x2:s,y1:h,y2:C},m)=>e(St,{x1:r+R,x2:s+R,y1:h+U,y2:C+U},m)),n.map(({x:r,y:s,temp:h,weather:C,time:m},c)=>a(De,{children:[e(kt,{cx:r+R,cy:s+U,r:"4"},c),a(de,{x:r-9+R,y:s-12+U,children:[h,"\xB0"]}),e("image",{x:r-17.5+R,y:Ie,width:40,href:_(`../assets/${C?.icon?.slice?.(0,2)}.svg`)}),a(de,{x:r-9+R,y:s-12+U,children:[h,"\xB0"]}),c===0&&l?a("g",{children:[e(It,{x:r-24+R,y:X,rx:"14",ry:"14",width:"48",height:"28"}),e(Mt,{x:r+R-13.5,y:X+19,children:m})]}):a("g",{children:[e(Rt,{x:r-24+R,y:X,rx:"14",ry:"14",width:"48",height:"28"}),e(Tt,{x:r+R-13.5,y:X+19,children:m})]})]}))]})})};const wt=t.div`
  width: 380px;
  height: ${ke+20}px;
  overflow-x: scroll;

  /* 스크롤바 설정*/
  &::-webkit-scrollbar {
    width: 17px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c7c7c7;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
    margin: 14px 0;
  }
`,vt=t.svg`
  width: 100%;
`,St=t.line`
  stroke: #e1e5eb;
  stroke-width: 4;
  stroke-linecap: round;
`,kt=t.circle`
  fill: #e1e5eb;
`,de=t.text`
  fill: #444;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  letter-spacing: -0.32px;
  text-align: left;
  color: #444;
`,It=t.rect`
  fill: #444;
`,Mt=t.text`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  fill: #fff;
`,Rt=t.rect`
  fill: #fff;
`,Tt=t.text`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  fill: #444;
`;var _t=({open:n,onClose:l,data:u,spaceInfo:r})=>{const s=i.exports.useMemo(()=>B().isSame(B(u.dt*1e3),"day"),[u]),h=i.exports.useMemo(()=>`../assets/${u?.weather?.[0]?.icon?.slice?.(0,2)}.svg`,[u]),C=i.exports.useMemo(()=>{const c=At(u?.air?.pm2_5),x=bt(u?.air?.pm10);return{pm2:c,pm10:x}},[u]),m=i.exports.useMemo(()=>{const c=[],x=Object.values(u.hourly).map(f=>{const b=B(f.dt*1e3),p=Math.round(f.temp/10),k=b.format("HH\uC2DC");return c.push(p),{date:b,time:k,temp:p,weather:f.weather[0]}}),E=Math.min(...c),w=Math.max(...c)-E;return x.filter(f=>f.date.unix()>=B(B().format("YYYY-MM-DD HH:00:00")).unix()).sort((f,b)=>f.date.unix()-b.date.unix()).map((f,b)=>{const p=b*ue,k=w!==0?J-J*((E-f.temp)/w)*-1:J/2;return{...f,x:p,y:k}})},[u]);return e(Ae,{open:n,onClose:l,children:a(Ft,{children:[a(Yt,{children:[e($t,{src:_("../assets/ic-del.svg"),onClick:l}),e(Ot,{children:"\uB0A0\uC528"})]}),a(Wt,{children:[e(zt,{children:r?.name}),a(Nt,{children:[e(he,{children:"\uD604\uC7A5\uC8FC\uC18C"}),e(Lt,{children:r?.basic_address}),e(he,{children:"\uD604\uC7A5\uC8FC\uC18C"})]})]}),a(Ht,{children:[e(Pt,{children:a(Vt,{children:[e(Gt,{children:B(parseInt(`${u?.dt}000`,10)).format("MM\uC6D4 DD\uC77C")}),e(Ut,{src:_(h)}),a(jt,{children:[a(qt,{children:[Math.ceil(u?.temp?.min/10),"\xB0"]}),e(Kt,{children:"/"}),a(Qt,{children:[Math.ceil(u?.temp?.max/10),"\xB0"]})]}),a(Xt,{children:[a(ge,{children:[e(me,{children:"\uBBF8\uC138"}),e(xe,{style:{color:C?.pm10?.color},children:C?.pm10?.label})]}),a(ge,{children:[e(me,{children:"\uCD08\uBBF8\uC138"}),e(xe,{style:{color:C?.pm2?.color},children:C?.pm2?.label})]})]}),m.length>0&&a(De,{children:[e(Jt,{}),e(Et,{points:m,isToday:s})]})]})}),e(T,{type:y.PRIMARY,onClick:l,children:"\uD655\uC778"})]})]})})};const Ft=t.div`
  width: 440px;
  background-color: white;
  border-radius: 20px;
`,Yt=t.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 24px 30px;
`,$t=t.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`,Ot=t.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`,Wt=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px 0px;
  background-color: #f2f2f2;
`,zt=t.span`
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.44px;
  text-align: center;
  color: #000;
  margin-bottom: 10px;
`,Nt=t.div`
  display: flex;
  align-items: center;
`,he=t.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  &:first-of-type {
    margin-right: 14px;
  }
  &:last-child {
    margin-left: 14px;
    opacity: 0;
  }
`,Lt=t.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`,Ht=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 30px;
`,Pt=t.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
`,Vt=t.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`,Gt=t.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: left;
  color: #258fff;
  margin-bottom: 20px;
`,Ut=t.img`
  width: 76px;
  height: 76px;
`,jt=t.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`,qt=t.span`
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #777;
`,Kt=t.span`
  font-size: 22px;
  color: #cdcdcd;
  margin: 0 2px;
`,Qt=t.span`
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.7px;
  text-align: left;
  color: #222;
`,Xt=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`,ge=t.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`,me=t.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #777;
  margin-right: 6px;
`,xe=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #00b448;
`,Jt=t.span`
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
  margin-bottom: 20px;
`;var Yn=({open:n,onClose:l,info:u,position:r,revalidate:s,setIsModalOpened:h,setModalPosition:C})=>{const[m,c]=i.exports.useState(!1),{data:x}=Ve(u?.estimation?.field_space?.id),{data:E}=qe(u?.estimation?.field_space?.id),D=ae(),{scrollY:w}=Ke(),[v,L]=i.exports.useState(w),[S,f]=i.exports.useState({x:-1e6,y:-1e6}),[b,p]=i.exports.useState({x:-1e6,y:-1e6}),[k,I]=i.exports.useState(!1),[$,H]=i.exports.useState(!1),[P,V]=i.exports.useState(!1),[ee,j]=i.exports.useState(!1),F=i.exports.useMemo(()=>{const A=B(u?.date).format("YYYY-MM-DD"),M=x?.[A],o=`../assets/${x?.[A]?.weather?.[0]?.icon?.slice?.(0,2)}.svg`;return{isAvaildableVisibleWeather:!!M,icon:o,data:M}},[x,u]);i.exports.useEffect(()=>{r.x===0&&r.y===0?p({x:-1e6,y:-1e6}):(setTimeout(()=>{c(!0)},150),L(w),p({x:r.x-100,y:r.y}),f({x:r.x-100,y:r.y}))},[r]);const O=async()=>{if($===!1){H(!0);try{await Y.delete(`/assignments/${u.id}`),I(!1),await s(),l()}catch(A){console.log(A)}finally{H(!1)}}};return i.exports.useEffect(()=>{const A=v-w;p(M=>({...M,y:S.y+A}))},[w]),n&&b!==null?$e.createPortal(a(Zt,{style:{top:b.y,left:b.x},mount:m,children:[a(en,{children:[F.isAvaildableVisibleWeather&&a(Bn,{onClick:()=>j(!0),children:[e(tn,{src:_(F.icon)}),a(un,{children:[Qe?.[F?.data?.weather?.[0]?.id]," ",a("b",{children:[(F?.data?.temp?.day/10).toFixed(1),"\xB0"]})]})]}),e(nn,{src:_("../assets/ic-del-02.svg"),onClick:l})]}),e(an,{children:u?.estimation?.[D?"factory_space":"field_space"]?.name}),a(ln,{children:[B(u?.date).format("YYYY\uB144 M\uC6D4 D\uC77C")," ",oe(u?.start_time),"~",oe(u?.end_time)]}),a(rn,{children:[e(on,{children:"\uC601\uC5C5\uC0AC\uC6D0"}),e(sn,{children:u?.estimation?.manager_user?.name})]}),e(Me,{}),e(dn,{children:(u?.specs||[]).map((A,M)=>a(cn,{style:{marginBottom:(u?.specs||[]).length-1===M?0:10},children:[e(fe,{children:M===0?"\uBC1C\uC8FC\uB0B4\uC5ED":""}),a(Be,{children:[A?.value,"-",A?.norminal_strength,"-",A?.slump]}),a(pn,{children:[A?.quantity?.toLocaleString?.("ko"),"m\xB3"]})]},M))}),a(fn,{children:[e(N,{value:u?.mulcha,onChange:()=>null,label:"\uBB3C\uCC28",containerStyle:{marginRight:24}}),e(N,{value:u?.multal,onChange:()=>null,label:"\uBB3C\uD0C8",containerStyle:{marginRight:24}}),e(N,{value:u?.inducer,onChange:()=>null,label:"\uC720\uB3C4\uC81C",containerStyle:{marginRight:24}})]}),a(Cn,{children:[e(fe,{style:{marginRight:75},children:"\uD2B9\uAE30\uC0AC\uD56D"}),e(Be,{children:u?.remark})]}),e(hn,{}),a(xn,{children:[e(gn,{children:"\uCD1D \uC8FC\uBB38\uD569\uACC4"}),a(mn,{children:[u?.total?.toLocaleString?.("ko"),"m\xB3"]})]}),e(nt,{id:u?.id,type:u?.type,onModify:()=>{V(!0),p({x:-1e6,y:-1e6})},onRemove:()=>I(!0),mutate:()=>s()}),e(Le,{open:k,onClose:()=>I(!1),onSubmit:O,content:"\uC8FC\uBB38\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}),P&&e(ut,{isEditModal:!0,open:P,onClose:()=>V(!1),name:u?.estimation?.[D?"factory_space":"field_space"]?.name||"",address:u?.estimation?.[D?"factory_space":"field_space"]?.basic_address||"",percent:u?.estimation?.percent||0,revalidate:async()=>await s(),initialInfo:u}),F.isAvaildableVisibleWeather&&e(_t,{open:ee,onClose:()=>j(!1),data:F?.data,spaceInfo:E})]}),document.getElementById("root")):null};const Zt=t.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 380px;
  margin: 21px 30px 0 0;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 500;
  ${({mount:n})=>n&&Oe`
      transition: top 0.1s linear, left 0.1s linear;
    `}
`,en=t.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,tn=t.img`
  width: 22px;
  height: 22px;
  margin-right: 8px;
`,nn=t.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
`,un=t.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #777;
  & > b {
    font-weight: bold;
  }
`,an=t.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #1f1d1d;
  margin-bottom: 8px;
`,ln=t.span`
  font-size: 15px;
  letter-spacing: -0.3px;
  text-align: left;
  color: #444;
  margin-bottom: 14px;
`,rn=t.div`
  display: flex;
  align-items: center;
`,on=t.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #999;
  margin-right: 10px;
`,sn=t.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-align: left;
  color: #000;
`,cn=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,Cn=t.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 8px;
`,fe=t.span`
  min-width: 47px;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #999;
`,Be=t.span`
  min-width: 90px;
  font-size: 14px;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`,pn=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: right;
  color: #1f1d1d;
`,Me=t.div`
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid #c7c7c7;
  margin-bottom: 12px;
`,dn=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,hn=t(Me)`
  border-color: #f2f2f2;
  margin-bottom: 14px;
`,gn=t.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,mn=t.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: right;
  color: #258fff;
`,xn=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;t.div`
  display: flex;
  align-items: center;
`;const fn=t.div`
  display: flex;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 16px;
  margin-top: 16px;
`,Bn=t.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;var $n=new Array(100).fill(["#dbeafb","#ffd6cc","#fff5df","#e9e8ff","#eaf5ec","#e6ebf1"]).flat();export{$n as C,ut as O,_t as W,oe as a,Ve as b,ne as c,Rn as d,be as e,Ge as f,_n as g,Yn as h,Fn as i,Tn as j,tt as k,N as l,Mn as m,qe as u};
