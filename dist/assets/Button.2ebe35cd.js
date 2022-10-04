import{g as x,c as r}from"./Header.8f74d7dd.js";import{j as I,a as g,n as i}from"./index.fa23706f.js";var h=(f=>(f[f.PRIMARY=0]="PRIMARY",f[f.SMALL=1]="SMALL",f))(h||{}),o=(f=>(f[f.PRIMARY=0]="PRIMARY",f[f.OUTLINE=1]="OUTLINE",f[f.OUTLINE_THICK=2]="OUTLINE_THICK",f[f.GRAY=3]="GRAY",f[f.GRAY_BLACK=4]="GRAY_BLACK",f[f.BLACK=5]="BLACK",f[f.BLACK_WHITE=6]="BLACK_WHITE",f[f.BLACK_OUTLINE=7]="BLACK_OUTLINE",f[f.DISABLED=8]="DISABLED",f[f.ORANGE=9]="ORANGE",f))(o||{});const R={[0]:"#258fff",[1]:"#ffffff",[2]:"#ffffff",[3]:"#f2f2f2",[4]:"#f2f2f2",[5]:"#ffffff",[6]:"#000000",[7]:"inherit",[8]:"#f2f2f2",[9]:"#ff7d00"},l={[0]:1,[1]:1,[2]:2,[3]:1,[4]:1,[5]:1,[6]:1,[7]:1,[8]:1,[9]:1},n={[0]:"#258fff",[1]:"#4490f7",[2]:"#4490f7",[3]:"#f2f2f2",[4]:"#f2f2f2",[5]:"#000000",[6]:"inherit",[7]:"#000000",[8]:"inherit",[9]:"inherit"},C={[0]:"#ffffff",[1]:"#258fff",[2]:"#258fff",[3]:"#999999",[4]:"#000000",[5]:"#000000",[6]:"#ffffff",[7]:"#000000",[8]:"#999999",[9]:"#ffffff"};var N=({size:f=0,type:a=0,children:A,containerStyle:d,iconStyle:L,icon:s,...c})=>I(e,{size:f,type:a,style:d,...c,children:[s&&g(E,{size:f,style:L,src:x(`../assets/${s}.svg`)}),A]});const e=i.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  border-radius: 6px;

  font-weight: 500;

  cursor: pointer;

  user-select: none;

  ${({type:f})=>r`
    background-color: ${R[f]};
    color: ${C[f]};
    border: ${l[f]}px solid ${n[f]};
  `}

  ${({size:f})=>f===0?r`
          padding: 16px;
          font-size: 16px;
        `:r`
          padding: 8px 16px;
          font-size: 14px;
        `}
`,E=i.img`
  ${({size:f})=>f===0?r`
          width: 14px;
          height: 14px;
          margin-right: 8px;
        `:r`
          width: 20px;
          height: 20px;
          margin-right: 4px;
        `}
`;export{N as B,o as a,h as b};
