import{j as s,a as e,n as o,b as he,k as ge,u as me,r as n,d as De,l as Ae,e as ye,f as ve,q as we,L as ue,C as ke}from"./index.fa23706f.js";import{u as Me,S as Ee,N as _e,a as Fe,D as Ie,b as Ne,c as Te}from"./NaverMapFieldAddress.8b02c3a8.js";import{N as Le}from"./server.browser.f77a115a.js";import{N as We}from"./NaverMapSpaceMarker.c76b18fc.js";import{g as M,c as P,S as Oe,e as ze,F as Pe}from"./Header.8f74d7dd.js";import{B as Q,a as V}from"./Button.2ebe35cd.js";import{F as je,l as Ge}from"./lodash.4b3a1baf.js";import{M as de,b as Re,d as $e,S as qe}from"./Modal.5ea91f83.js";import{c as Ke,a as Ue}from"./convertDuration.9811f74f.js";import{u as Be}from"./useSpaces.40cf6e61.js";import{T as re}from"./TextModal.458f5750.js";import{D as Ye}from"./index.6328693c.js";import{u as He}from"./useFactoryMaps.6dedbd40.js";import{S as Je,M as Qe}from"./MapSpaceInfoModal.e33a938c.js";import{N as Ve}from"./NaverMapImageMarker.9d634226.js";import"./_commonjsHelpers.b8add541.js";var Xe=({id:r,index:x,name:u,distance:N,duration:d,selected:h,onClick:l,factories:C,selectedFieldId:E,totalDuration:j})=>C?.field_position?j==="null"?s(pe,{selected:h,onClick:C?.field_position?l:()=>null,children:[s(Ce,{children:[s(fe,{children:[" ",(x+1).toString().padStart(2,"0")]}),e(ae,{children:u})]}),!!C?.field_position&&e(xe,{src:h?M("../assets/ic-check-on.svg"):M("../assets/ic-check.svg")})]}):s(pe,{selected:h,onClick:C?.field_position?l:()=>null,children:[s(Ce,{children:[s(fe,{children:[" ",(x+1).toString().padStart(2,"0")]}),s(et,{children:[e(ae,{children:u}),s(tt,{children:[e(nt,{src:M("../assets/ic-car.svg")}),s(ot,{children:[Ke(N),"km"]}),e(it,{}),s(st,{children:[Ue(d),"\uBD84"]})]})]})]}),!!C?.field_position&&e(xe,{src:h?M("../assets/ic-check-on.svg"):M("../assets/ic-check.svg")})]}):s(Ze,{children:[e(ae,{children:u}),e(rt,{className:"search-icon-circle",onClick:l,children:e(at,{src:M("../assets/ic-search-on.svg")})})]});const Ze=o.div`
  display: flex;
  align-items: center;
  padding: 26px 30px;
  border-bottom: 1px solid #f2f2f2;
  &:hover {
    .search-icon-circle {
      opacity: 1;
    }
  }
`,pe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #f2f2f2;

  ${({selected:r})=>r?P`
          background-color: #258fff1a;
        `:P`
          background-color: white;
        `}

  &:hover {
    background-color: #258fff1a;
  }

  transition: background-color 0.1s linear;

  cursor: pointer;
`,Ce=o.div`
  display: flex;
  align-items: center;
`,fe=o.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
  margin-right: 18px;
`,et=o.div`
  display: flex;
  flex-direction: column;
`,ae=o.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`,tt=o.div`
  display: flex;
  align-items: center;

  margin-top: 6px;
`,ot=o.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
`,nt=o.img`
  width: 21px;
  height: 21px;
  margin-right: 4px;
`,it=o.span`
  display: block;
  width: 1px;
  height: 8px;
  margin: 0px 8px;
  background-color: #c7c7c7;
`,st=o.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;
`,xe=o.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`,rt=o.div`
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
`,at=o.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;var lt=({name:r,address:x,selected:u,onClick:N})=>e(ct,{onClick:N,selected:u,children:s(ut,{children:[s(Ct,{children:[e(dt,{children:r}),e(pt,{children:x})]}),e(ft,{src:u?M("../assets/ic-check-on.svg"):M("../assets/ic-check.svg")})]})});const ct=o.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  border-radius: 12px;
  background-color: white;

  user-select: none;

  /* border: solid 1px #258fff; */

  margin-bottom: 16px;

  &:hover {
    border-color: #258fff;
  }

  ${({selected:r})=>r?P`
          border: 1px solid #258fff;
        `:P`
          border: 1px solid #e3e3e3;
        `}

  transition: border 0.1s linear, max-height 0.05s linear;

  overflow: hidden;

  user-select: none;
`,ut=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`,dt=o.span`
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
`,pt=o.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;

  max-width: 225px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ct=o.div`
  display: flex;
  flex-direction: column;
`,ft=o.img`
  width: 24px;
  height: 24px;
  margin-left: 24px;
`;var xt=({factories:r,duration:x,setDuration:u,order:N,setOrder:d,selectedFieldInfo:h,setSelectedFieldInfo:l,selectedFactoryIds:C,selectedFieldId:E,setSelectedSpaceInfo:j,setIsInfoModalOpen:g,handleClickFactoryCard:G,address:D,setAddress:m,setRealAddress:_,orderByFactories:Z})=>{const $=he(),ee=ge(),A=me(),{data:y}=Be("N"),[v,B]=n.exports.useState(null),[q,F]=n.exports.useState(!1),[f,I]=n.exports.useState(!1),[te,K]=n.exports.useState(!1),[U,T]=n.exports.useState(!1),[oe,ne]=n.exports.useState([]),[ie,L]=n.exports.useState(!1),Y=()=>{y&&y.length>0?F(!0):I(!0)},W=()=>{if(!h){F(!0);return}y&&y.length>0&&!ee?.state?.searchText?F(!0):I(!0)},R=()=>{F(!1)},O=()=>{l(v),F(!1)},H=async()=>{const{data:i}=await De.post("/estimations",{field_id:h.id,factory_ids:C});i?.result?.duplicated_factory_ids.length>0?(ne(i?.result?.duplicated_factory_ids),T(!0)):K(!0)};function le(i){y?h?G(i):F(!0):I(!0)}function z(){A("/add-construction-field/step-1")}return s(ht,{children:[s(gt,{children:[e(Oe,{icon:"ic-local",containerStyle:h?{cursor:"pointer"}:{marginBottom:30,cursor:"pointer"},value:D,onChange:i=>{m(i.target.value)},onKeyPress:i=>{i.key==="Enter"&&(_(D),l(null))},onClick:()=>{_(D),l(null)},placeholder:"\uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694"}),h&&s(wt,{children:[e(kt,{children:"\uC120\uD0DD\uB41C \uAC74\uC124\uD604\uC7A5"}),e(Et,{}),e(Mt,{children:h?.name})]}),$&&e(Q,{icon:"ic-more",type:V.OUTLINE_THICK,containerStyle:{marginBottom:30},onClick:Y,children:"MY \uAC74\uC124\uD604\uC7A5 \uBD88\uB7EC\uC624\uAE30"}),e(mt,{children:"\uC18C\uC694\uC2DC\uAC04"}),s(Bt,{children:[e(X,{active:r?.field_position?x==="null":!1,onClick:()=>u("null"),children:"\uC804\uCCB4"}),e(X,{active:r?.field_position?x==="30":!1,onClick:()=>u("30"),children:"30\uBD84"}),e(X,{active:r?.field_position?x==="60":!1,onClick:()=>u("60"),children:"60\uBD84"}),e(X,{active:r?.field_position?x==="90":!1,onClick:()=>u("90"),children:"90\uBD84"})]}),s(bt,{children:[s(St,{children:["\uCD1D ",s("b",{children:[(r?.data||[]).length,"\uAC1C"]})," \uC758 \uB808\uBBF8\uCF58 \uACF5\uC7A5"]}),!!r?.field_position&&e(je,{options:[{label:"\uAC70\uB9AC\uC21C",value:"\uAC70\uB9AC\uC21C"},{label:"\uC2DC\uAC04\uC21C",value:"\uC2DC\uAC04\uC21C"}],value:N,onChange:i=>d(i)})]})]}),e(vt,{children:r&&Z?.map((i,w)=>e(Xe,{id:i.id,index:w,name:i?.name,distance:i?.direction?.distance,duration:i?.direction?.duration,selected:C.includes(i.id),onClick:r?.field_position?()=>le(i.id):()=>{g(!1),j(i),setTimeout(()=>{g(!0)},250)},selectedFieldId:E,factories:r,totalDuration:x},i.id))}),e(Dt,{children:e(Q,{type:C.length>0?V.PRIMARY:V.GRAY,onClick:E!==null&&$?H:W,children:"\uACAC\uC801 \uC694\uCCAD\uD558\uAE30"})}),e(de,{open:q,onClose:R,children:s(Re,{style:{minWidth:440,maxHeight:620,paddingTop:50},children:[e($e,{children:"MY \uAC74\uC124\uD604\uC7A5"}),e(At,{children:y&&y.map(i=>e(lt,{name:i?.name,address:i?.basic_address,selected:i?.id===v?.id,onClick:()=>B(i)},i.id))}),s(qe,{children:[e(Q,{type:V.GRAY_BLACK,onClick:R,containerStyle:{marginRight:20},children:"\uCDE8\uC18C"}),e(Q,{onClick:O,children:"\uC120\uD0DD\uD558\uAE30"})]}),e(_t,{onClick:z,children:"\uC2E0\uADDC\uD604\uC7A5 \uB4F1\uB85D\uD558\uAE30"})]})}),e(re,{open:f,content:`\uB4F1\uB85D\uB41C \uAC74\uC124\uD604\uC7A5 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.
\uAC74\uC124\uD604\uC7A5\uC744 \uB4F1\uB85D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,onSubmit:()=>A("/add-construction-field/step-1"),onClose:()=>I(!1)}),e(re,{open:te,content:`\uACAC\uC801 \uC694\uCCAD\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.
\uB0A9\uD488\uC0AC \uC120\uC815 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,onSubmit:()=>A("/supplier-choice"),onClose:()=>K(!1)}),e(re,{open:U,content:`\uC774\uBBF8 \uACAC\uC801\uC694\uCCAD\uD55C \uACF5\uC7A5\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.
${oe.map(i=>(r?.data||[]).filter(w=>w.id===i)[0].name).join(", ")}`,onClose:()=>T(!1)}),e(de,{open:ie,onClose:()=>L(!1),children:e(yt,{style:{width:400,height:600},children:e(Ye,{onComplete:i=>{l(null),m(i?.roadAddress||i?.autoJibunAddress),L(!1)}})})})]})};const ht=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
  position: relative;
`,gt=o.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 14px 30px;
  border-bottom: 1px solid #c7c7c7;
`,mt=o.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
  margin-bottom: 14px;
`,Bt=o.div`
  display: flex;
  margin-bottom: 30px;
`,X=o.span`
  flex: 1;
  padding: 8px 0px;
  margin-right: 8px;
  border-radius: 18px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  text-align: center;
  cursor: pointer;

  ${({active:r})=>r?P`
          background-color: #000;
          color: #ffffff;
          border: solid 1px black;
        `:P`
          background-color: #fff;
          color: #c7c7c7;
          border: solid 1px #c7c7c7;
        `}

  &:last-child {
    margin-right: 0;
  }

  transition: all 0.1s linear;

  &:hover {
    border: solid 1px black;
    color: black;
  }
`,bt=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,St=o.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #777;
  & > b {
    font-weight: 700;
    letter-spacing: -0.28px;
    text-align: left;
    color: #222;
  }
`,Dt=o.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 16px 30px;
  box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
`,At=o.div`
  max-height: 402px;
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
`,yt=o.div``,vt=o.div`
  flex: 1;
  /* max-height: calc(100% - 123px); */
  overflow-y: scroll;
  margin-bottom: 84px;
`,wt=o.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 8px 0 16px 0;
`,kt=o.div`
  font-size: 16px;
  letter-spacing: -0.28px;
  color: #999;
  text-align: left;
`,Mt=o.div`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: right;
  color: #000;
`,Et=o.div`
  display: block;
  width: 1px;
  height: 8px;
  background-color: #c7c7c7;
  margin: 0px 8px;
`,_t=o.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  background-color: #4490f7;
  color: #fff;
  padding: 16px 0;
  margin-top: 8px;
  border-radius: 6px;
  cursor: pointer;
`,{naver:S}=window;var Jt=()=>{const r=Ae(),x=he(),{data:u}=Be("N"),{error:N,coordinates:d,loaded:h}=Me(),{polylineInfo:l}=ye(t=>t.map,ve),C=n.exports.useMemo(()=>l?l?.path[Math.floor(l?.path.length/2)]:null,[l]),[E,j]=n.exports.useState("60"),[g,G]=n.exports.useState(null),D=n.exports.useMemo(()=>g?g.id:null,[g]),m=n.exports.useMemo(()=>g?g.basic_address:null,[g]),_=n.exports.useMemo(()=>u?u[u.length-1]:null,[u]),[Z,$]=n.exports.useState(null),[ee,A]=n.exports.useState(""),[y,v]=n.exports.useState(""),{data:B,isLoading:q}=He(D,E,Z,y),F=ze(B),f=n.exports.useMemo(()=>B||F,[B]),[I,te]=n.exports.useState([]),[K,U]=n.exports.useState(null),[T,oe]=n.exports.useState("\uAC70\uB9AC\uC21C"),ne=n.exports.useRef(Ge.exports.debounce(t=>$(t),1e3)).current,[ie,L]=n.exports.useState(!1),[Y,W]=n.exports.useState(0),[R,O]=n.exports.useState(0),H=n.exports.useCallback(t=>{te(c=>c.includes(t)?c.filter(p=>p!==t):c.concat(t))},[I]);n.exports.useEffect(()=>{m!==null&&A(m)},[m]);const[le,z]=n.exports.useState(""),[i,w]=n.exports.useState({sido:"",sigugun:""}),J=ge(),be=me();n.exports.useEffect(()=>{if(J?.state?.searchText){const t=J?.state?.searchText,c=J?.state?.selectedSpaceInfo;S.maps.Service.geocode({query:t},(a,p)=>{if(a!==S.maps.Service.Status.OK)return alert("\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");p.v2.addresses[0]||(alert("\uC8FC\uC18C \uC704\uCE58\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),v(""),be("/remicon-map",{state:{searchText:""}}));const b=p.v2.addresses[0],k=b.addressElements.find(se=>se.types.includes("SIDO")).longName,Se=b.addressElements.find(se=>se.types.includes("SIGUGUN")).longName;z(t),w({sido:k,sigugun:Se}),v(t),A(t),G(c),W(b.x),O(b.y)})}else d?.lat!==0&&d?.lng!==0&&S.maps.Service.reverseGeocode({location:new S.maps.LatLng(d?.lat,d?.lng)},function(t,c){if(t!==S.maps.Service.Status.OK)return alert("\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");const a=c.result.items?.[0],p=a.address,b=a.addrdetail.sido,k=a.addrdetail.sigugun;z(p),w({sido:b,sigugun:k}),W(d?.lng),O(d?.lat),x&&u.length>0&&(v(_?.basic_address),A(_?.basic_address),G(_),W(_.latitude),O(_.longitude))})},[d,J]),n.exports.useEffect(()=>{!D||D&&m&&S.maps.Service.geocode({query:m},(t,c)=>{if(t!==S.maps.Service.Status.OK)return alert("\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");const a=c.v2.addresses[0],p=a.addressElements.find(k=>k.types.includes("SIDO")).longName,b=a.addressElements.find(k=>k.types.includes("SIGUGUN")).longName;z(m),w({sido:p,sigugun:b}),v(m),A(m),W(a.x),O(a.y)})},[g]),n.exports.useEffect(()=>{if(!D&&!!B?.field_position){if(B?.message==="\uC8FC\uC18C \uC704\uCE58\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."){window.alert("\uC8FC\uC18C \uC704\uCE58\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),v("");return}S.maps.Service.reverseGeocode({location:new S.maps.LatLng(B?.field_position?.latitude,B?.field_position?.longitude)},function(t,c){if(t!==S.maps.Service.Status.OK)return alert("\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");const a=c.result.items?.[0],p=a.address,b=a.addrdetail.sido,k=a.addrdetail.sigugun;z(p),w({sido:b,sigugun:k}),W(d?.lng),O(d?.lat)})}},[B]);const ce=n.exports.useMemo(()=>{if(f){const t=f?.data;if(T==="\uAC70\uB9AC\uC21C")return t.sort((a,p)=>a.direction?.distance-p.direction?.distance);if(T==="\uC2DC\uAC04\uC21C")return t.sort((a,p)=>a.direction?.duration-p.direction?.duration)}else return},[f,T]);return n.exports.useEffect(()=>{r(we())},[q]),N&&alert("\uC704\uCE58\uC11C\uBE44\uC2A4\uB97C \uD65C\uC131\uD654 \uD574\uC8FC\uC138\uC694"),!d?.lat||!d?.lng?e(ue,{}):!Y||!R?null:s(Ee,{children:[e(xt,{factories:f,order:T,setOrder:oe,duration:E,setDuration:j,selectedFieldInfo:g,setSelectedFieldInfo:G,selectedFactoryIds:I,selectedFieldId:D,setSelectedSpaceInfo:U,setIsInfoModalOpen:L,handleClickFactoryCard:H,address:ee,setAddress:A,setRealAddress:v,orderByFactories:ce}),q?e(ue,{}):s(Ft,{children:[s(It,{children:[s(Le,{lat:R,lng:Y,zoom:12,style:{width:"100%",height:"calc(100vh - 80px)"},boundChange:({_min:t,_max:c})=>{const a={min_lat:t._lat,min_lng:t._lng,max_lat:c._lat,max_lng:c._lng};ne(a)},children:[l?.path&&e(_e,{paths:l?.path}),C&&e(Fe,{lat:C[1],lng:C[0],content:e(Ie,{distance:l.distance,duration:l.duration})}),!!f?.field_position&&e(Ve,{lat:f?.field_position.latitude,lng:f?.field_position.longitude,content:e("img",{src:M("../assets/ic-field-marker.png"),style:{width:119,height:72}}),disableCenter:!1}),f&&ce?.map((t,c)=>e(We,{lat:t.latitude,lng:t.longitude,content:e(Je,{index:c,name:t?.name,address:t?.basic_address,distance:t?.direction?.distance,duration:t?.direction?.duration,onClick:()=>{f?.field_position&&H(t.id)},onInfo:()=>{L(!1),U(t),setTimeout(()=>{L(!0)},250)},onChangePath:()=>{r(ke(t?.direction))},selected:!!t.direction&&t.direction===l||I.includes(t.id),hideWithoutName:!!f?.field_position,totalDuration:E})},t.id)),e(Ne,{setCurrentAddrDetail:w,currentAddrDetail:i,searchedAddr:f?.field_position}),e(Te,{})]}),e(Qe,{open:ie,onClose:()=>L(!1),data:K,duration:E})]}),e(Pe,{})]})]})};const Ft=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  overflow-y: scroll;
`,It=o.div`
  flex: 1;
  position: relative;
`;export{Jt as default};
