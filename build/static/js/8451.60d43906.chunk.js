"use strict";(self.webpackChunkFE_DACN=self.webpackChunkFE_DACN||[]).push([[8451],{62482:(n,o,t)=>{t.d(o,{H:()=>e,h:()=>i});var a=t(22626);const e=new a.A("login"),i=new a.A("register")},28451:(n,o,t)=>{t.r(o),t.d(o,{default:()=>P});var a=t(16325),e=t(72812),i=t(60587),r=t(19464),s=t(19252),d=t(55376),c=t(68903),l=t(87488),g=t(67784),u=t(85865),h=t(24858),m=t(33173),A=t(82907),p=t(86971),f=t(36110),v=t(35947),x=t(62482),I=t(3435),L=t(54262),b=t(72974);const y=()=>{const{toast:n}=(0,f.n)(),{setUserApp:o,setAccessTokenApp:t,user:{userId:a}}=(0,f.n)(),{profile:e,refetch:i}=(0,I.A)(),{refetch:r}=(0,L.A)(),{refetch:s}=(0,b.A)(),d=(0,p.Zp)(),{state:c}=(0,p.zy)(),l=c;console.log(l),a&&d((null===l||void 0===l?void 0:l.from)||"/",{state:c,replace:!0});const{mutate:g,isLoading:u}=(0,A.useMutation)(x.H.create,{onSuccess:a=>{const{userData:e,access_token:i}=a.data;200===a.status&&null!==e&&void 0!==e&&e.userId?(n.success({massage:a.message}),o(e),t(i),v.L.setAccessToken(i),d((null===l||void 0===l?void 0:l.from)||"/",{state:c,replace:!0})):n.error({massage:a.message})},onError:o=>{n.error({massage:o.response.data.message})}});return{onLogin:g,isLoading:u}};var j=t(19185),w=t(73383),S=t(70579);function P(){const{isLoading:n,onLogin:o}=y(),{control:t,handleSubmit:A,formState:{errors:p}}=(0,h.mN)({});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r.A,{sx:{width:"100%",height:"100%",position:"absolute",zIndex:-1,backgroundImage:"url(".concat(w,")"),backgroundSize:"cover"}}),(0,S.jsxs)(s.A,{component:"main",maxWidth:"xs",sx:{ml:25,my:15},children:[(0,S.jsx)(d.Ay,{}),(0,S.jsxs)(r.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",bgcolor:"white",p:3,border:1,borderColor:"#79b6cc",borderRadius:2,boxShadow:"2px 2px 6px #98E4FF"},children:[(0,S.jsx)(i.A,{sx:{m:1,bgcolor:"secondary.main"},children:(0,S.jsx)(a.A,{})}),(0,S.jsx)(u.A,{component:"h1",variant:"h5",children:"\u0110\u0103ng nh\u1eadp"}),(0,S.jsxs)(r.A,{component:"form",noValidate:!0,sx:{mt:1},children:[(0,S.jsx)(m.A,{element:(0,S.jsx)(g.A,{}),control:t,errors:p,margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\u0110\u1ecba ch\u1ec9 email",pattern:"email",name:"email",autoComplete:"email",autoFocus:!0}),(0,S.jsx)(m.A,{element:(0,S.jsx)(g.A,{}),control:t,errors:p,margin:"normal",required:!0,fullWidth:!0,name:"password",label:"M\u1eadt kh\u1ea9u",type:"password",id:"password",autoComplete:"current-password"}),(0,S.jsx)(e.A,{onClick:A((n=>{o(n)})),loading:n,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"\u0110\u0103ng nh\u1eadp"}),(0,S.jsxs)(c.Ay,{container:!0,mt:2,children:[(0,S.jsx)(c.Ay,{item:!0,xs:!0,children:(0,S.jsx)(l.A,{href:"/register?role=".concat(j.X.EMPLOYER),variant:"body2",fontWeight:700,color:"secondary",children:"D\xe0nh cho NTD"})}),(0,S.jsx)(c.Ay,{item:!0,children:(0,S.jsx)(l.A,{href:"/register",variant:"body2",fontWeight:700,color:"secondary",children:"Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? \u0110\u0103ng k\xfd"})})]})]})]})]})]})}},72974:(n,o,t)=>{t.d(o,{A:()=>c});var a=t(82907),e=t(52105),i=t(65043),r=t(75614),s=t(36110),d=t(32109);const c=()=>{const{isEmployee:n}=(0,s.n)(),{setProfile:o}=(0,d.A)(),t=Boolean((0,r.getAccessToken)()),{data:c,isLoading:l,isSuccess:g,refetch:u}=(0,a.useQuery)(["get-AttachedDocument"],e.hT.get,{retry:(n,o)=>400!==o.response.status&&n<2,refetchOnWindowFocus:!1,enabled:t&&n});return(0,i.useEffect)((()=>{c&&o(c.data)}),[g]),{attachedDocument:null===c||void 0===c?void 0:c.data,isLoading:l,refetch:u}}},54262:(n,o,t)=>{t.d(o,{A:()=>c});var a=t(82907),e=t(52105),i=t(65043),r=t(75614),s=t(36110),d=t(35644);const c=()=>{const{isEmployee:n}=(0,s.n)(),{setProfile:o}=(0,d.A)(),t=Boolean((0,r.getAccessToken)()),{data:c,isLoading:l,isSuccess:g,refetch:u}=(0,a.useQuery)(["get-OnlineProfile"],e.w0.get,{retry:(n,o)=>400!==o.response.status&&n<2,refetchOnWindowFocus:!1,enabled:t&&n});return(0,i.useEffect)((()=>{c&&g&&o(null===c||void 0===c?void 0:c.data)}),[g]),{onlineProfile:null===c||void 0===c?void 0:c.data,isLoading:l,refetch:u}}},16325:(n,o,t)=>{var a=t(24994);o.A=void 0;var e=a(t(40039)),i=t(70579),r=(0,e.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");o.A=r},72812:(n,o,t)=>{t.d(o,{A:()=>I});var a=t(98587),e=t(58168),i=t(65043),r=t(6803),s=t(45879),d=t(68606),c=t(34535),l=t(72876),g=t(53404),u=t(81637),h=t(32400);function m(n){return(0,h.Ay)("MuiLoadingButton",n)}const A=(0,t(57056).A)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var p=t(70579);const f=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],v=(0,c.Ay)(g.A,{shouldForwardProp:n=>(n=>"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n)(n)||"classes"===n,name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{["& .".concat(A.startIconLoadingStart)]:o.startIconLoadingStart},o.endIconLoadingEnd&&{["& .".concat(A.endIconLoadingEnd)]:o.endIconLoadingEnd}]})((n=>{let{ownerState:o,theme:t}=n;return(0,e.A)({["& .".concat(A.startIconLoadingStart,", & .").concat(A.endIconLoadingEnd)]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===o.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),["&.".concat(A.loading)]:{color:"transparent"}},"start"===o.loadingPosition&&o.fullWidth&&{["& .".concat(A.startIconLoadingStart,", & .").concat(A.endIconLoadingEnd)]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===o.loadingPosition&&o.fullWidth&&{["& .".concat(A.startIconLoadingStart,", & .").concat(A.endIconLoadingEnd)]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}})})),x=(0,c.Ay)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.loadingIndicator,o["loadingIndicator".concat((0,r.A)(t.loadingPosition))]]}})((n=>{let{theme:o,ownerState:t}=n;return(0,e.A)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:o.palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})})),I=i.forwardRef((function(n,o){const t=(0,l.A)({props:n,name:"MuiLoadingButton"}),{children:c,disabled:g=!1,id:h,loading:A=!1,loadingIndicator:I,loadingPosition:L="center",variant:b="text"}=t,y=(0,a.A)(t,f),j=(0,s.A)(h),w=null!=I?I:(0,p.jsx)(u.A,{"aria-labelledby":j,color:"inherit",size:16}),S=(0,e.A)({},t,{disabled:g,loading:A,loadingIndicator:w,loadingPosition:L,variant:b}),P=(n=>{const{loading:o,loadingPosition:t,classes:a}=n,i={root:["root",o&&"loading"],startIcon:[o&&"startIconLoading".concat((0,r.A)(t))],endIcon:[o&&"endIconLoading".concat((0,r.A)(t))],loadingIndicator:["loadingIndicator",o&&"loadingIndicator".concat((0,r.A)(t))]},s=(0,d.A)(i,m,a);return(0,e.A)({},a,s)})(S);return(0,p.jsx)(v,(0,e.A)({disabled:g||A,id:j,ref:o},y,{variant:b,classes:P,ownerState:S,children:"end"===S.loadingPosition?(0,p.jsxs)(i.Fragment,{children:[c,A&&(0,p.jsx)(x,{className:P.loadingIndicator,ownerState:S,children:w})]}):(0,p.jsxs)(i.Fragment,{children:[A&&(0,p.jsx)(x,{className:P.loadingIndicator,ownerState:S,children:w}),c]})}))}))},73383:(n,o,t)=>{n.exports=t.p+"static/media/background-image.e26997f9c2e3c3d03a8c.png"}}]);
//# sourceMappingURL=8451.60d43906.chunk.js.map