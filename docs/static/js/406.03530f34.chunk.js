"use strict";(self.webpackChunkclone_twitter=self.webpackChunkclone_twitter||[]).push([[406],{5746:(e,n,a)=>{a.r(n),a.d(n,{default:()=>V});var s=a(5043),t=a(8605),i=a(6378),r=a(9127),o=a(8146),c=a(7485),l=a(4652);const d=a.p+"static/media/user.e7bd3d69bfd3b2f7cff3.jpg";var m=a(342),u=a(7587),x=a(901),j=a(1847),A=a(4013),h=a(3155),p=a(1881),g=a(264),f=a(681),v=a(3216),b=a(579);const k=e=>{let{getAvatar:n,id:a,open:t,setOpen:i}=e;const[c]=(0,p.n)(g.ot),[l,d]=(0,s.useState)(null),[m,k]=(0,s.useState)(!1),C=(0,s.useCallback)((e=>{const n=new FileReader;n.onload=()=>{const e=n.result.replace("data:","").replace(/^.+,/,"");d(e)},n.readAsDataURL(e[0])}),[]);console.log(l);const{getRootProps:w,getInputProps:y}=(0,h.VB)({accept:"image/jpeg",noKeyboard:!0,multiple:!1,onDrop:C}),S=(0,v.Zp)();return(0,b.jsxs)(u.A,{basic:!0,onClose:()=>i(!1),onOpen:()=>i(!0),open:t,size:"mini",trigger:(0,b.jsx)(x.A,{children:"Basic Modal"}),children:[(0,b.jsxs)(o.A,{icon:!0,children:[(0,b.jsx)(r.A,{name:"upload"}),"Sube una foto de perfil"]}),(0,b.jsxs)(j.A,{className:"flex flex-row flex-align-center flex-justify-center",children:[(0,b.jsxs)(x.A,{secondary:!0,onClick:()=>{f.A.reset(),S("/login")},children:[(0,b.jsx)(r.A,{name:"logout"})," Cerrar sesion"]}),(0,b.jsx)(x.A,{...w(),primary:!0,children:"Seleccionar mi foto"}),(0,b.jsx)("input",{...y()})]}),(0,b.jsxs)(A.A,{className:"flex flex-row flex-align-center flex-justify-center",children:[(0,b.jsxs)(x.A,{basic:!0,color:"red",inverted:!0,onClick:()=>i(!1),children:[(0,b.jsx)(r.A,{name:"remove"})," Cancelar"]}),(0,b.jsxs)(x.A,{disabled:m,loading:m,color:"green",inverted:!0,onClick:async()=>{try{k(!m);await c({variables:{input:{id:a,file:l}}});k(!1),i(!1),n(l)}catch(e){console.error(e.message)}},children:[(0,b.jsx)(r.A,{name:"checkmark"})," Actualizar foto"]})]})]})};var C=a(433),w=a(9555),y=a(1749),S=a(4201),U=a(3859);const N=()=>{const[e,n]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{setTimeout((()=>{n(!0)}),500)}),[]),(0,b.jsx)(C.A,{horizontal:!0,className:"flex flex-row",children:[...Array(10).keys()].map((n=>(0,b.jsx)(w.A,{visible:e,animation:"scale",duration:500,children:(0,b.jsxs)(y.A,{className:"item-avatar",children:[(0,b.jsx)(c.A,{avatar:!0,src:""}),(0,b.jsxs)(S.A,{children:[(0,b.jsx)(U.A,{children:"Tom"}),"Top Contributor"]})]},n)})))})},$=()=>{const{auth:e}=(0,m.A)(),[n,a]=(0,s.useState)(!1),[t,i]=(0,s.useState)(!1);(0,s.useEffect)((()=>{console.log(e)}));return console.log(e),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(o.A,{as:"h2",children:[(0,b.jsx)(c.A,{onClick:()=>a(!n),circular:!0,src:t?"data: image/jpeg; base64, ".concat(t):e.avatar?"data: image/jpeg; base64, ".concat(e.avatar):d})," ",e.name]}),(0,b.jsx)(k,{getAvatar:e=>{i(e)},id:e.id,open:n,setOpen:a}),(0,b.jsx)(l.A,{}),(0,b.jsx)(N,{})]})},E=()=>(0,b.jsx)("div",{children:"Search"});var I,P=a(592),z=a(6272),J=a(2714),F=a(3478),O=a(8200),R=a(8996),T=a(3832),B=a(7949),D=a(8250),L=a(7528);const M=(0,a(459).J1)(I||(I=(0,L.A)(["\nquery obtenerPublicaciones{\n    getPosts{\n        idUser{\n        name\n        username\n        id\n        avatar\n        email}\n    id\n    post\n}}"]))),_=e=>{let{auth:n}=e;const{data:a,loading:t}=(0,D.I)(M);(0,s.useEffect)((()=>{console.log(a),console.log(n)}),[t]);const i=e=>{let{data:a}=e;return a?a.getPosts.map((e=>(0,b.jsx)(P.A,{children:(0,b.jsxs)(z.A,{children:[(0,b.jsx)(J.A,{as:"a",src:"data:image/jpeg; base64,".concat(e.idUser.avatar)}),(0,b.jsxs)(F.A,{children:[(0,b.jsx)(O.A,{children:e.idUser.username}),(0,b.jsx)(R.A,{children:e.post}),(0,b.jsxs)(T.A,{children:[(0,b.jsx)(B.A,{children:"Agregar"}),n.id===e.idUser.id&&(0,b.jsx)(B.A,{children:"Editar"}),n.id===e.idUser.id&&(0,b.jsx)(B.A,{children:"Eliminar"})]})]})]})},e.id))):null};return(0,b.jsx)(i,{data:a})},q=()=>(0,b.jsx)("div",{children:"Messages"}),K=()=>(0,b.jsx)("div",{children:"Notifications"}),V=()=>{const{auth:e}=(0,m.A)(),[n,a]=(0,s.useState)({name:"home",component:null}),o=()=>n.component?n.component:(0,b.jsx)(_,{auth:e}),c=(e,n)=>{let{name:s,component:t}=n;a({name:s,component:t})};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)($,{}),(0,b.jsx)(o,{}),(0,b.jsx)("div",{className:"items--container",children:(0,b.jsxs)(t.A,{attached:"bottom",tabular:!0,widths:"4",children:[(0,b.jsx)(i.A,{component:(0,b.jsx)(_,{auth:e}),name:"home",active:"home"===n.name,onClick:c,children:(0,b.jsx)(r.A,{name:"home"})}),(0,b.jsx)(i.A,{component:(0,b.jsx)(E,{}),name:"search",active:"search"===n.name,onClick:c,children:(0,b.jsx)(r.A,{name:"search"})}),(0,b.jsx)(i.A,{component:(0,b.jsx)(K,{}),name:"notifications",active:"notifications"===n.name,onClick:c,children:(0,b.jsx)(r.A,{name:"bell"})}),(0,b.jsx)(i.A,{component:(0,b.jsx)(q,{}),name:"messages",active:"messages"===n.name,onClick:c,children:(0,b.jsx)(r.A,{name:"mail"})})]})})]})}},264:(e,n,a)=>{a.d(n,{ot:()=>d,ti:()=>l,zv:()=>c});var s,t,i,r=a(7528),o=a(459);const c=(0,o.J1)(s||(s=(0,r.A)(["\nmutation addUser($input: UserInput) {\nnewUser(input: $input) {\npassword\nusername\n}}"]))),l=(0,o.J1)(t||(t=(0,r.A)(["\nmutation logeandome($input: LoginInput) {\n  authentication (input: $input) {\n    token\n}}"]))),d=(0,o.J1)(i||(i=(0,r.A)(["\nmutation updateAvatar($input: AvatarInput) {\n  updateAvatar(input: $input) {\n    id\n}}"])))},342:(e,n,a)=>{a.d(n,{A:()=>i});var s=a(5043),t=a(1110);const i=()=>(0,s.useContext)(t.A)}}]);
//# sourceMappingURL=406.03530f34.chunk.js.map