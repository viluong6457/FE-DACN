"use strict";(self.webpackChunkFE_DACN=self.webpackChunkFE_DACN||[]).push([[878],{95851:(n,t,o)=>{o.d(t,{A:()=>r});var a=o(67784),i=o(70579);const r=n=>(0,i.jsx)(a.A,{size:"small",fullWidth:!0,...n})},47878:(n,t,o)=>{o.r(t),o.d(t,{default:()=>L});var a=o(16325),i=o(70930),r=o(81045),e=o(19464),s=o(19252),d=o(55376),l=o(68903),c=o(88446),g=o(85865),u=o(24858),m=o(51318),h=o(33173),p=o(95851),x=o(19185),f=o(82907),v=o(86971),A=o(62482),I=o(36110);const b=()=>{const{toast:n}=(0,I.n)(),{user:{userId:t}}=(0,I.n)(),o=(0,v.Zp)();t&&o("/");const{mutate:a,isLoading:i}=(0,f.useMutation)(A.hl.create,{onSuccess:t=>{200===t.status?(n.success({massage:t.message}),o("/login")):n.error({massage:t.message})},onError:t=>{n.error({massage:t.response.data.message})}});return{onRegister:a,isLoading:i}};var j=o(73383),y=o(70579);function L(){const{onRegister:n,isLoading:t}=b(),[o]=(0,m.ok)();let f=o.get("role");Object.values(x.X).includes(f)||(f=x.X.EMPLOYEE);const{control:v,handleSubmit:A,formState:{errors:I}}=(0,u.mN)({});return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(e.A,{sx:{display:"flex",width:"100%",height:"100%",backgroundImage:"url(".concat(j,")"),backgroundSize:"cover",flex:1,alignItems:"center"},children:(0,y.jsxs)(s.A,{component:"main",maxWidth:"xs",sx:{zIndex:10,ml:{xs:"auto",sm:15}},children:[(0,y.jsx)(d.Ay,{}),(0,y.jsxs)(e.A,{sx:{display:"flex",flexDirection:"column",bgcolor:"white",p:3,border:1,borderColor:"#79b6cc",borderRadius:2,boxShadow:"2px 2px 6px #98E4FF",justifyContent:"center",alignItems:"center"},children:[(0,y.jsx)(r.A,{sx:{m:1,bgcolor:"secondary.main"},children:(0,y.jsx)(a.A,{})}),(0,y.jsxs)(g.A,{component:"h1",variant:"h5",children:["\u0110\u0103ng k\xfd v\u1edbi"," ","employer"===f.toLowerCase()?"Nh\xe0 tuy\u1ec3n d\u1ee5ng":"Ng\u01b0\u1eddi t\xecm vi\u1ec7c"]}),(0,y.jsxs)(e.A,{component:"form",noValidate:!0,sx:{mt:1},children:[(0,y.jsx)(h.A,{element:(0,y.jsx)(p.A,{}),control:v,errors:I,margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\u0110\u1ecba ch\u1ec9 email",name:"email",pattern:"email",autoComplete:"email",autoFocus:!0}),(0,y.jsx)(h.A,{element:(0,y.jsx)(p.A,{}),control:v,errors:I,margin:"normal",required:!0,fullWidth:!0,name:"password",label:"M\u1eadt kh\u1ea9u",type:"password",id:"password",autoComplete:"current-password"}),(0,y.jsx)(h.A,{element:(0,y.jsx)(p.A,{}),control:v,errors:I,margin:"normal",required:!0,fullWidth:!0,name:"confirmPassword",label:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",type:"password",id:"confirm-password",autoComplete:"current-password"}),(0,y.jsx)(i.A,{onClick:A((t=>{n({...t,role:f||x.X.EMPLOYEE})})),loading:t,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"\u0110\u0103ng k\xed"}),(0,y.jsxs)(l.Ay,{container:!0,children:[(0,y.jsx)(l.Ay,{item:!0,xs:!0}),(0,y.jsx)(l.Ay,{item:!0,children:(0,y.jsx)(c.A,{href:"/login",variant:"body2",fontWeight:700,color:"secondary",children:"\u0110\u0103ng nh\u1eadp"})})]})]})]})]})})})}},16325:(n,t,o)=>{var a=o(32392);t.A=void 0;var i=a(o(40039)),r=o(70579),e=(0,i.default)((0,r.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.A=e},70930:(n,t,o)=>{function a(){return a=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},a.apply(this,arguments)}o.d(t,{A:()=>A});var i=o(65043),r=o(6803),e=o(45879),s=o(68606),d=o(34535),l=o(72876),c=o(11906),g=o(81637),u=o(32400);function m(n){return(0,u.Ay)("MuiLoadingButton",n)}const h=(0,o(57056).A)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var p=o(70579);const x=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],f=(0,d.Ay)(c.A,{shouldForwardProp:n=>(n=>"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n)(n)||"classes"===n,name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,t)=>[t.root,t.startIconLoadingStart&&{["& .".concat(h.startIconLoadingStart)]:t.startIconLoadingStart},t.endIconLoadingEnd&&{["& .".concat(h.endIconLoadingEnd)]:t.endIconLoadingEnd}]})((n=>{let{ownerState:t,theme:o}=n;return a({["& .".concat(h.startIconLoadingStart,", & .").concat(h.endIconLoadingEnd)]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),["&.".concat(h.loading)]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{["& .".concat(h.startIconLoadingStart,", & .").concat(h.endIconLoadingEnd)]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{["& .".concat(h.startIconLoadingStart,", & .").concat(h.endIconLoadingEnd)]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})})),v=(0,d.Ay)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.loadingIndicator,t["loadingIndicator".concat((0,r.A)(o.loadingPosition))]]}})((n=>{let{theme:t,ownerState:o}=n;return a({position:"absolute",visibility:"visible",display:"flex"},"start"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{left:"small"===o.size?10:14},"start"===o.loadingPosition&&"text"===o.variant&&{left:6},"center"===o.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===o.loadingPosition&&("outlined"===o.variant||"contained"===o.variant)&&{right:"small"===o.size?10:14},"end"===o.loadingPosition&&"text"===o.variant&&{right:6},"start"===o.loadingPosition&&o.fullWidth&&{position:"relative",left:-10},"end"===o.loadingPosition&&o.fullWidth&&{position:"relative",right:-10})})),A=i.forwardRef((function(n,t){const o=(0,l.A)({props:n,name:"MuiLoadingButton"}),{children:d,disabled:c=!1,id:u,loading:h=!1,loadingIndicator:A,loadingPosition:I="center",variant:b="text"}=o,j=function(n,t){if(null==n)return{};var o={};for(var a in n)if(Object.prototype.hasOwnProperty.call(n,a)){if(t.indexOf(a)>=0)continue;o[a]=n[a]}return o}(o,x),y=(0,e.A)(u),L=null!=A?A:(0,p.jsx)(g.A,{"aria-labelledby":y,color:"inherit",size:16}),w=a({},o,{disabled:c,loading:h,loadingIndicator:L,loadingPosition:I,variant:b}),P=(n=>{const{loading:t,loadingPosition:o,classes:i}=n,e={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,r.A)(o))],endIcon:[t&&"endIconLoading".concat((0,r.A)(o))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,r.A)(o))]};return a({},i,(0,s.A)(e,m,i))})(w);return(0,p.jsx)(f,a({disabled:c||h,id:y,ref:t},j,{variant:b,classes:P,ownerState:w,children:"end"===w.loadingPosition?(0,p.jsxs)(i.Fragment,{children:[d,h&&(0,p.jsx)(v,{className:P.loadingIndicator,ownerState:w,children:L})]}):(0,p.jsxs)(i.Fragment,{children:[h&&(0,p.jsx)(v,{className:P.loadingIndicator,ownerState:w,children:L}),d]})}))}))},73383:(n,t,o)=>{n.exports=o.p+"static/media/background-image.e26997f9c2e3c3d03a8c.png"}}]);
//# sourceMappingURL=878.e725d28e.chunk.js.map