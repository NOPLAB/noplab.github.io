(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8966:function(e,t,r){"use strict";r.d(t,{ZP:function(){return U}});var a=r(6006);let i=(e,t)=>{if(!e)return 0;let r=e.includes("px")?+e.split("px")[0]:e.includes("%")?+e.split("%")[0]*t*.01:e;return Number.isNaN(+r)?0:+r},n=e=>{if(!e||"undefined"==typeof window)return{width:0,height:0};let t=e.getBoundingClientRect(),{width:r,height:a}=window.getComputedStyle(e);return{width:i(`${r}`,t.width),height:i(`${a}`,t.height)}};var o=e=>{let[t,r]=(0,a.useState)({width:0,height:0}),i=()=>{let{width:t,height:a}=n(e.current);r({width:t,height:a})};return(0,a.useEffect)(()=>i(),[e.current]),[t,i]},s=e=>{let[t,r]=(0,a.useState)(()=>"function"==typeof e?e():e),i=(0,a.useRef)(e);return(0,a.useEffect)(()=>{i.current=t},[t]),[t,e=>{let t="function"==typeof e?e(i.current):e;i.current=t,r(t)},i]},l=(e,t=!0)=>{(0,a.useEffect)(()=>{let r=()=>e();return t&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[])},d=r(5738),c=r(4493),u=r(1469),m=r(7350);let h=(0,m.F4)({"0%":{backgroundPosition:"200% 0"},to:{backgroundPosition:"-200% 0"}}),x=(0,m.zo)("div",{opacity:0,margin:"0 auto",position:"relative",overflow:"hidden",maxWidth:"100%",transition:"transform 250ms ease 0ms, opacity 200ms ease-in 0ms","@motion":{transition:"none"},variants:{ready:{true:{opacity:1},false:{opacity:0}}}}),g=(0,m.zo)("img",{size:"100%",display:"block"}),p=(0,m.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0,size:"100%",borderRadius:"inherit",backgroundImage:"linear-gradient(270deg, $colors$accents1, $colors$accents2, $colors$accents2, $colors$accents1)",backgroundSize:"400% 100%",animation:`${h} 5s ease-in-out infinite`,transition:"opacity 300ms ease-out"});var f=r(922),b=r(9268);let $=a.memo(({opacity:e,css:t,className:r,...a})=>(0,b.jsx)(p,{className:(0,u.Z)("nextui-image-skeleton",r),css:{opacity:e,...t},...a}));c.Ts&&($.displayName="NextUI.ImageSkeleton"),$.toString=()=>".nextui-image-skeleton";var v=(0,f.Z)($,{opacity:.5,className:""});let y=a.forwardRef((e,t)=>{let{src:r,width:i,height:n,showSkeleton:c=!0,className:m,maxDelay:h=3e3,autoResize:p=!1,objectFit:f="scale-down",containerCss:$,css:y,...w}=e,S=(0,d.gy)(t),[k,j]=(0,a.useState)(!0),[N,z]=(0,a.useState)(c),{w:C,h:P}=(0,a.useMemo)(()=>({w:i?"number"==typeof i?`${i}px`:i:"auto",h:n?"number"==typeof n?`${n}px`:n:"auto"}),[i,n]),[T,I,E]=s(P),[M,O]=o(S),R=c&&!!i&&!!n;(0,a.useEffect)(()=>{S.current&&S.current.complete&&(j(!1),z(!1))}),(0,a.useEffect)(()=>{let e=setTimeout(()=>{R&&z(!1),clearTimeout(e)},h);return()=>clearTimeout(e)},[k]),(0,a.useEffect)(()=>{if(!p)return;let e=0===M.width,t="auto"===E.current;!e&&i&&n&&(M.width<i?t||I("auto"):t&&I(P))},[M,i]),l(()=>{p&&O()});let W=(0,a.useMemo)(()=>k?"loading":"ready",[k]);return(0,b.jsxs)(x,{className:(0,u.Z)("nextui-image-container",`nextui-image--${W}`,m),css:{width:C,height:T,...$},"data-state":W,ready:!k||N,children:[N&&(0,b.jsx)(v,{opacity:1}),(0,b.jsx)(g,{ref:S,alt:e.alt||"",className:"nextui-image",css:{objectFit:f,...y},"data-state":W,height:n,src:r,width:i,onLoad:()=>{j(!1)},...w})]})});c.Ts&&(y.displayName="NextUI.Image"),y.toString=()=>".nextui-image";var w=a.memo(y);let S=e=>`calc(${15.25*e}pt + 1px * ${e-1})`,k=(0,m.zo)("div",{width:"100%",maxWidth:"100%",position:"relative",variants:{color:{default:{bg:"$border"},primary:{bg:"$primary"},secondary:{bg:"$secondary"},success:{bg:"$success"},warning:{bg:"$warning"},error:{bg:"$error"}}},defaultVariants:{color:"default"}}),j=(0,m.zo)("span",{position:"absolute",left:"50%",top:"50%",minHeight:"100%",display:"inline-flex",jc:"center",ai:"center",transform:"translate(-50%, -50%)",padding:"0 $lg",fontSize:"$base",fontWeight:"bold",textTransform:"capitalize",backgroundColor:"$background",zIndex:"$1",variants:{color:{default:{color:"$text"},primary:{color:"$primary"},secondary:{color:"$secondary"},success:{color:"$success"},warning:{color:"$warning"},error:{color:"$error"}}}}),N=({height:e,x:t,y:r,align:i,children:n,textColor:o,css:s,...l})=>{let d=(0,a.useMemo)(()=>{if(i&&"center"!==i)return"left"===i||"start"===i?{transform:"translateY(-50%)",left:"7%"}:{transform:"translateY(-50%)",left:"auto",right:"7%"}},[i]),c=r?S(r/2):0,u=t?S(t/2):0;return(0,b.jsx)(k,{css:{margin:`${c} ${u}`,height:`calc(${e} * 1px)`,...s},role:"separator",...l,children:n&&(0,b.jsx)(j,{className:"nextui-divider-text",color:o,css:{...d},children:n})})};N.toString=()=>".nextui-divider";let z=a.memo(N);var C=(0,f.Z)(z,{x:0,y:0,height:1,align:"center"});let P=(0,m.F4)({"0%":{opacity:0,transform:"scale(0.25)"},"30%":{opacity:1},"80%":{opacity:.5},"100%":{transform:"scale(28)",opacity:0}}),T=(0,m.zo)("div",{position:"absolute",left:0,right:0,top:0,bottom:0,"& svg":{position:"absolute",animation:`350ms linear ${P}`,animationFillMode:"forwards",width:"$md",height:"$md"}}),I=a.memo(({visible:e,x:t,y:r,color:i,onCompleted:n,className:o,...s})=>{let l=(0,a.useRef)(null),d=Number.isNaN(+r)?0:r-10,c=Number.isNaN(+t)?0:t-10;return(0,a.useEffect)(()=>{let e=l.current;if(e)return e.addEventListener("animationend",n),()=>{e&&e.removeEventListener("animationend",n)}}),e?(0,b.jsx)(T,{ref:l,className:(0,u.Z)("nextui-drip",o),...s,children:(0,b.jsx)("svg",{height:"20",style:{top:d,left:c},viewBox:"0 0 20 20",width:"20",children:(0,b.jsx)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:(0,b.jsx)("g",{className:"nextui-drip-filler",fill:i,children:(0,b.jsx)("rect",{height:"100%",rx:"10",width:"100%"})})})})}):null});var E=(0,f.Z)(I,{visible:!1,x:0,y:0,className:""}),M=r(6871),O=r(1350),R=r(2815),W=(e=!1,t)=>{let[r,i]=(0,a.useState)(e),[n,o]=(0,a.useState)(0),[s,l]=(0,a.useState)(0);return{visible:r,x:n,y:s,onClick:e=>{if(!t.current)return;let r=t.current.getBoundingClientRect();i(!0),o(e.clientX-r.left),l(e.clientY-r.top)},onCompleted:()=>{i(!1),o(0),l(0)}}};let Z=e=>{let{ref:t,disableAnimation:r=!1,disableRipple:i=!1,variant:n="shadow",isHoverable:o=!1,borderWeight:s="light",isPressable:l=!1,onClick:c,onPress:u,autoFocus:m,allowTextSelectionOnPress:h=!0,...x}=e,g=(0,d.gy)(t),{onClick:p,...f}=W(!1,g),b=e=>{r||i||!g.current||p(e)},{isPressed:$,pressProps:v}=(0,R.r7)({isDisabled:!l,onPress:e=>{"keyboard"!==e.pointerType&&"virtual"!==e.pointerType||(b(e),null==c||c(e)),null==u||u(e)},allowTextSelectionOnPress:h,...x}),{hoverProps:y,isHovered:w}=(0,R.XI)({isDisabled:!o,...x}),{isFocusVisible:S,focusProps:k}=(0,M.Fx)({autoFocus:m});v.onClick=e=>{l&&(b(e),null==c||c(e))};let j=(0,a.useCallback)((e={})=>({...(0,O.dG)(l?{...v,...k}:{},o?y:{},x,e)}),[l,o,v,k,y,x]);return{cardRef:g,variant:n,borderWeight:s,isPressable:l,isHovered:w,isPressed:$,disableAnimation:r,disableRipple:i,dripBindings:f,onDripClickHandler:p,isFocusVisible:S,getCardProps:j}};var L=r(3567);let B=(0,m.zo)("div",{d:"flex",w:"100%",h:"auto",flex:"1 1 auto",fd:"column",jc:"inherit",ai:"inherit",ac:"inherit",py:"$lg",px:"$sm",oy:"auto",position:"relative",ta:"left"}),F=(0,m.zo)("div",{$$cardColor:"$colors$backgroundContrast",$$cardTextColor:"$colors$text",m:0,p:0,br:"$lg",bg:"$$cardColor",color:"$$cardTextColor",position:"relative",display:"flex",overflow:"hidden",fd:"column",width:"100%",height:"auto",boxSizing:"border-box","@motion":{transition:"none"},".nextui-image":{width:"100%"},[`& ${T}`]:{zIndex:"$1",".nextui-drip-filler":{opacity:.25,fill:"$accents6"}},variants:{variant:{flat:{bg:"$accents0"},shadow:{dropShadow:"$lg","@safari":{boxShadow:"$lg",dropShadow:"none"},"@-moz-document url-prefix()":{boxShadow:"$lg",dropShadow:"none"}},bordered:{borderStyle:"solid",borderColor:"$border"}},borderWeight:{light:{bw:"$light"},normal:{bw:"$normal"},bold:{bw:"$bold"},extrabold:{bw:"$extrabold"},black:{bw:"$black"}},disableAnimation:{true:{transition:"none"},false:{transition:"$card"}},isPressable:{true:{cursor:"pointer",us:"none",WebkitTapHighlightColor:"transparent"}},isPressed:{true:{}},isHovered:{true:{dropShadow:"$lg","@safari":{boxShadow:"$lg",dropShadow:"none"},"@-moz-document url-prefix()":{boxShadow:"$lg",dropShadow:"none"}}}},compoundVariants:[{isPressed:!0,disableAnimation:!1,css:{transform:"scale(0.97)"}},{isHovered:!0,disableAnimation:!1,css:{transform:"translateY(-2px)"}},{isHovered:!0,variant:"shadow",css:{dropShadow:"$xl","@safari":{boxShadow:"$xl",dropShadow:"none"},"@-moz-document url-prefix()":{boxShadow:"$xl",dropShadow:"none"}}}]},L.UU,L.BM),_=(0,m.zo)("div",{w:"100%",display:"flex",flexShrink:0,zIndex:"$1",jc:"flex-start",ai:"center",overflow:"hidden",color:"inherit",p:"$sm"}),H=(0,m.zo)("div",{w:"100%",h:"auto",p:"$sm",d:"flex",ai:"center",overflow:"hidden",color:"inherit",bblr:"$lg",bbrr:"$lg",variants:{isBlurred:{true:{bf:"saturate(180%) blur(10px)",bg:"$$cardColor"}}}}),A=a.forwardRef(({...e},t)=>{let{as:r,css:a,children:i,...n}=e,{cardRef:o,variant:s,isFocusVisible:l,isPressable:d,isPressed:c,disableAnimation:u,disableRipple:m,borderWeight:h,isHovered:x,getCardProps:g,dripBindings:p}=Z({...n,ref:t});return(0,b.jsxs)(F,{ref:o,as:r,borderWeight:h,css:a,disableAnimation:u,isFocusVisible:l,isHovered:x,isPressable:d,isPressed:c,role:d?"button":"region",tabIndex:d?0:-1,variant:s,...g(),children:[d&&!u&&!m&&(0,b.jsx)(E,{...p}),i]})});c.Ts&&(A.displayName="NextUI.Card"),A.toString=()=>".nextui-card",A.Header=_,A.Body=B,A.Footer=H,A.Image=w,A.Divider=C;var U=A},777:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var a=r(6006),i=r(9497),n=r.n(i),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},s=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&h(e,r,t[r]);if(c)for(var r of c(t))m.call(t,r)&&h(e,r,t[r]);return e},g=(e,t)=>l(e,d(t)),p=(e,t)=>{var r={};for(var a in e)u.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))0>t.indexOf(a)&&m.call(e,a)&&(r[a]=e[a]);return r},f=(e,t,r)=>{let i=(0,a.forwardRef)((t,i)=>{var{color:n="currentColor",size:s=24,stroke:l=2,children:d}=t,c=p(t,["color","size","stroke","children"]);return(0,a.createElement)("svg",x(g(x({ref:i},o),{width:s,height:s,stroke:n,strokeWidth:l,className:`tabler-icon tabler-icon-${e}`}),c),[...r.map(([e,t])=>(0,a.createElement)(e,t)),...d||[]])});return i.propTypes={color:n().string,size:n().oneOfType([n().string,n().number]),stroke:n().oneOfType([n().string,n().number])},i.displayName=`${t}`,i}},8709:function(e,t,r){"use strict";r.d(t,{F:function(){return d},f:function(){return c}});var a=r(6006);let i=["light","dark"],n="(prefers-color-scheme: dark)",o="undefined"==typeof window,s=(0,a.createContext)(void 0),l={setTheme:e=>{},themes:[]},d=()=>{var e;return null!==(e=(0,a.useContext)(s))&&void 0!==e?e:l},c=e=>(0,a.useContext)(s)?a.createElement(a.Fragment,null,e.children):a.createElement(m,e),u=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:o=!0,storageKey:l="theme",themes:d=u,defaultTheme:c=r?"system":"light",attribute:m="data-theme",value:f,children:b,nonce:$})=>{let[v,y]=(0,a.useState)(()=>x(l,c)),[w,S]=(0,a.useState)(()=>x(l)),k=f?Object.values(f):d,j=(0,a.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&r&&(a=p());let n=f?f[a]:a,s=t?g():null,l=document.documentElement;if("class"===m?(l.classList.remove(...k),n&&l.classList.add(n)):n?l.setAttribute(m,n):l.removeAttribute(m),o){let e=i.includes(c)?c:null,t=i.includes(a)?a:e;l.style.colorScheme=t}null==s||s()},[]),N=(0,a.useCallback)(e=>{y(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),z=(0,a.useCallback)(t=>{let a=p(t);S(a),"system"===v&&r&&!e&&j("system")},[v,e]);(0,a.useEffect)(()=>{let e=window.matchMedia(n);return e.addListener(z),z(e),()=>e.removeListener(z)},[z]),(0,a.useEffect)(()=>{let e=e=>{e.key===l&&N(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),(0,a.useEffect)(()=>{j(null!=e?e:v)},[e,v]);let C=(0,a.useMemo)(()=>({theme:v,setTheme:N,forcedTheme:e,resolvedTheme:"system"===v?w:v,themes:r?[...d,"system"]:d,systemTheme:r?w:void 0}),[v,N,e,w,r,d]);return a.createElement(s.Provider,{value:C},a.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:o,storageKey:l,themes:d,defaultTheme:c,attribute:m,value:f,children:b,attrs:k,nonce:$}),b)},h=(0,a.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:o,enableColorScheme:s,defaultTheme:l,value:d,attrs:c,nonce:u})=>{let m="system"===l,h="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,x=s?i.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(e,t=!1,a=!0)=>{let n=d?d[e]:e,o=t?e+"|| ''":`'${n}'`,l="";return s&&a&&!t&&i.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===r?l+=t||n?`c.add(${o})`:"null":n&&(l+=`d[s](n,${o})`),l},p=e?`!function(){${h}${g(e)}}()`:o?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${n}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${g(d?"x[e]":"e",!0)}}${m?"":"else{"+g(l,!1,!1)+"}"}${x}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${g(d?"x[e]":"e",!0)}}else{${g(l,!1,!1)};}${x}}catch(t){}}();`;return a.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:p}})},()=>!0),x=(e,t)=>{let r;if(!o){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(n)),e.matches?"dark":"light")},8497:function(e,t,r){Promise.resolve().then(r.bind(r,9645))},9645:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var a=r(9268),i=r(8709),n=r(6871),o=r(6006),s=r(1350),l=r(5738),d=r(4493),c=r(1469),u=r(7350),m=r(3567);let h=(0,u.zo)("span",{dflex:"center",position:"relative",zIndex:"$1",boxSizing:"border-box",overflow:"hidden",verticalAlign:"top",cursor:"auto",transition:"transform 250ms ease 0ms, box-shadow 0.25s ease 0s",".nextui-avatar-bg":{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:"$2",transition:"$avatar",size:"100%"},".nextui-avatar-img":{opacity:0,zIndex:"$3",display:"flex",bg:"$background",transition:"transform 250ms ease 0ms, opacity 200ms ease-in 0ms",width:"100%",height:"100%",objectFit:"cover"},'&[data-state="ready"] .nextui-avatar-img':{opacity:1},".nextui-avatar-icon":{display:"flex",position:"absolute",left:"50%",top:"50%",ta:"center",zIndex:"$2",transform:"translate(-50%, -50%)",whiteSpace:"nowrap",us:"none"},".nextui-avatar-text":{position:"absolute",zIndex:"$2",left:"50%",top:"50%",ta:"center",color:"$text",fontWeight:"$medium",transform:"translate(-50%, -50%) scale(0.65)",whiteSpace:"nowrap",us:"none"},"@motion":{transition:"none",".nextui-avatar-bg, .nextui-avatar-img":{transition:"none"}},variants:{color:{default:{".nextui-avatar-bg":{bg:"$accents2"}},primary:{".nextui-avatar-bg":{bg:"$primary"}},secondary:{".nextui-avatar-bg":{bg:"$secondary"}},success:{".nextui-avatar-bg":{bg:"$success"}},warning:{".nextui-avatar-bg":{bg:"$warning"}},error:{".nextui-avatar-bg":{bg:"$error"}},gradient:{".nextui-avatar-bg":{bg:"$gradient"}}},textColor:{default:{".nextui-avatar-text":{color:"$text"}},white:{".nextui-avatar-text":{color:"$white"}},primary:{".nextui-avatar-text":{color:"$primary"}},secondary:{".nextui-avatar-text":{color:"$secondary"}},success:{".nextui-avatar-text":{color:"$success"}},warning:{".nextui-avatar-text":{color:"$warning"}},error:{".nextui-avatar-text":{color:"$error"}}},size:{xs:{$$avatarXs:"$space$9",sizeMin:"$$avatarXs",".nextui-avatar-text":{fontSize:"$sm"}},sm:{$$avatarSm:"$space$11",sizeMin:"$$avatarSm",".nextui-avatar-text":{fontSize:"$md"}},md:{$$avatarMd:"$space$14",sizeMin:"$$avatarMd",".nextui-avatar-text":{fontSize:"$lg"}},lg:{$$avatarLg:"$space$16",sizeMin:"$$avatarLg",".nextui-avatar-text":{fontSize:"$xl"}},xl:{$$avatarXl:"$space$18",sizeMin:"$$avatarXl",".nextui-avatar-text":{fontSize:"$2xl"}}},borderWeight:{light:{".nextui-avatar-img":{borderWidth:"$light"}},normal:{".nextui-avatar-img":{borderWidth:"$normal"}},bold:{".nextui-avatar-img":{borderWidth:"$normal"}},extrabold:{".nextui-avatar-img":{borderWidth:"$normal"}},black:{".nextui-avatar-img":{borderWidth:"$normal"}}},bordered:{true:{".nextui-avatar-img":{borderStyle:"solid",borderColor:"$background"}}},stacked:{true:{ml:"-$5"}},pointer:{true:{cursor:"pointer","&:hover .nextui-avatar-bg":{boxShadow:"inset 0 0 40px 0 rgb(0 0 0 / 14%)"}}},rounded:{true:{borderRadius:"$rounded",".nextui-avatar-img":{borderRadius:"$rounded"}}},squared:{true:{borderRadius:"$squared",".nextui-avatar-img":{borderRadius:"$squared"}}},zoomed:{true:{"&:hover .nextui-avatar-img":{transform:"scale(1.125)"}}}},compoundVariants:[{bordered:!0,borderWeight:"light",css:{padding:"calc($1/2)"}},{bordered:!0,borderWeight:"normal",css:{padding:"$1"}},{bordered:!0,borderWeight:"bold",css:{padding:"calc($2/1.5)"}},{bordered:!0,borderWeight:"extrabold",css:{padding:"$2"}},{bordered:!0,borderWeight:"black",css:{padding:"calc($3/1.5)"}},{rounded:!0,squared:!0,css:{borderRadius:"$squared",".nextui-avatar-img":{borderRadius:"$squared"}}},{bordered:!0,pointer:!0,css:{"&:hover:not(.only-text-avatar) .nextui-avatar-bg":{opacity:"0.7"}}}],defaultVariants:{size:"md",rounded:!0,color:"default",textColor:"default",borderWeight:"normal"}},m.BM),x=e=>(null==e?void 0:e.length)<=4?e:null==e?void 0:e.slice(0,3),g=o.forwardRef((e,t)=>{let{as:r,src:i,css:d,text:u,icon:m,alt:g,className:p,imgRef:f,...b}=e,$=(0,l.gy)(t),v=!i,[y,w]=(0,o.useState)(!1),S=(0,l.gy)(f),{isFocusVisible:k,focusProps:j}=(0,n.Fx)();(0,o.useEffect)(()=>{var e;(null==S||null==(e=S.current)?void 0:e.complete)&&w(!0)},[]);let N=(0,o.useMemo)(()=>!y&&i?"loading":"ready",[i,y]),z=(0,o.useMemo)(()=>{if("button"===r)return{appearance:"none",outline:"none",border:"none",cursor:"pointer"}},[r]);return(0,a.jsxs)(h,{ref:$,as:r,...(0,s.dG)(b,j),className:(0,c.Z)({"only-text-avatar":v},p),css:{...z,...d},"data-state":N,isFocusVisible:k,children:[(0,a.jsx)("span",{className:"nextui-avatar-bg"}),!v&&(0,a.jsx)("img",{ref:S,alt:g,className:(0,c.Z)("nextui-avatar-img",`nextui-avatar--${N}`,{"nextui-avatar-ready":y}),"data-state":N,src:i,onLoad:()=>w(!0)}),v&&!m&&u&&(0,a.jsx)("span",{className:"nextui-avatar-text",children:x(u)}),m&&(0,a.jsx)("span",{className:"nextui-avatar-icon",children:m})]})});d.Ts&&(g.displayName="NextUI.Avatar"),g.toString=()=>".nextui-avatar";let p=(0,u.zo)("span",{fontSize:"$xs",display:"inline-flex",alignItems:"center",marginLeft:"$3",color:"$text"}),f=(0,u.zo)("div",{dflex:"center",height:"auto",width:"max-content","@motion":{transition:"none"},[`& ${h}`]:{marginLeft:"-$space$5",transition:"$default",".only-text-avatar":{boxShadow:"$xs"}},".only-text-avatar":{boxShadow:"$xs"},variants:{animated:{true:{[`& ${h}:hover`]:{transform:"translate(-$space$5)"}}}},defaultVariants:{animated:!0}}),b=o.forwardRef((e,t)=>{let{count:r,children:i,...n}=e,o=(0,l.gy)(t);return(0,a.jsxs)(f,{ref:o,...n,children:[i,r&&(0,a.jsxs)(p,{className:"nextui-avatar-group-count",children:["+",r]})]})});d.Ts&&(b.displayName="NextUI.AvatarGroup"),b.toString=()=>".nextui-avatar-group",g.Group=b;var $=r(3603),v=r(8966),y=r(922);(0,u.zo)("div",{});let w=(0,u.zo)("div",{margin:0,boxSizing:"border-box",padding:"$$gridGapUnit"}),S=e=>{let t=0===e?"none":"inherit";if("number"==typeof e){let r=100/12*e,a=r>100?"100%":r<0?"0":`${r}%`;return{flexGrow:0,display:t,maxWidth:a,flexBasis:a}}return{flexGrow:1,display:t,maxWidth:"100%",flexBasis:"0"}},k=o.forwardRef(({xs:e,sm:t,md:r,lg:i,xl:n,css:s,justify:l,direction:d,alignItems:u,alignContent:m,children:h,className:x,...g},p)=>{let f=(0,o.useMemo)(()=>{let a={xs:e,sm:t,md:r,lg:i,xl:n};return Object.keys(a).reduce((e,t)=>void 0!==a[t]&&!1!==a[t]?`${e} ${t}`:e,"").trim()},[e,t,r,i,n]);return(0,a.jsx)(w,{ref:p,className:(0,c.Z)("nextui-grid-item",f,x),css:{alignItems:u,alignContent:m,justifyContent:l,flexDirection:d,"&.xs":{...S(e)},"@xsMax":{"&.xs":{...S(e)}},"@sm":{"&.sm":{...S(t)}},"@md":{"&.md":{...S(r)}},"@lg":{"&.lg":{...S(i)}},"@xl":{"&.xl":{...S(n)}},...s},...g,children:h})});k.displayName="NextUI.GridItem",k.toString=()=>".nextui-grid-item";var j=(0,y.Z)(k,{xs:!1,sm:!1,md:!1,lg:!1,xl:!1,className:""});let N=o.forwardRef(({children:e,css:t,...r},i)=>(0,a.jsx)(j,{ref:i,css:t,...r,children:e}));N.displayName="NextUI.Grid",N.toString=()=>".nextui-grid";let z=o.forwardRef(({gap:e,wrap:t,css:r,children:i,className:n,...s},l)=>{let d=(0,o.useMemo)(()=>`calc(${e} * $space$3)`,[e]);return(0,a.jsx)(j,{ref:l,className:(0,c.Z)("nextui-grid-container",n),css:{$$gridGapUnit:d,display:"flex",flexWrap:t,boxSizing:"border-box",margin:"calc(-1 * $$gridGapUnit)",width:"calc(100% + $$gridGapUnit * 2)",...r},...s,children:i})});z.displayName="NextUI.GridContainer",z.toString=()=>".nextui-grid-container";var C=(0,y.Z)(z,{gap:0,wrap:"wrap",className:""});N.Container=C;var P=r(3204),T=r(777),I=(0,T.Z)("brand-twitter","IconBrandTwitter",[["path",{d:"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z",key:"svg-0"}]]),E=(0,T.Z)("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),M=(0,T.Z)("brand-c-sharp","IconBrandCSharp",[["path",{d:"M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3",key:"svg-0"}],["path",{d:"M16 7l-1 10",key:"svg-1"}],["path",{d:"M20 7l-1 10",key:"svg-2"}],["path",{d:"M14 10h7.5",key:"svg-3"}],["path",{d:"M21 14h-7.5",key:"svg-4"}]]),O=(0,T.Z)("brand-rust","IconBrandRust",[["path",{d:"M10.139 3.463c.473 -1.95 3.249 -1.95 3.722 0a1.916 1.916 0 0 0 2.859 1.185c1.714 -1.045 3.678 .918 2.633 2.633a1.916 1.916 0 0 0 1.184 2.858c1.95 .473 1.95 3.249 0 3.722a1.916 1.916 0 0 0 -1.185 2.859c1.045 1.714 -.918 3.678 -2.633 2.633a1.916 1.916 0 0 0 -2.858 1.184c-.473 1.95 -3.249 1.95 -3.722 0a1.916 1.916 0 0 0 -2.859 -1.185c-1.714 1.045 -3.678 -.918 -2.633 -2.633a1.916 1.916 0 0 0 -1.184 -2.858c-1.95 -.473 -1.95 -3.249 0 -3.722a1.916 1.916 0 0 0 1.185 -2.859c-1.045 -1.714 .918 -3.678 2.633 -2.633a1.914 1.914 0 0 0 2.858 -1.184z",key:"svg-0"}],["path",{d:"M8 12h6a2 2 0 1 0 0 -4h-6v8v-4z",key:"svg-1"}],["path",{d:"M19 16h-2a2 2 0 0 1 -2 -2a2 2 0 0 0 -2 -2h-1",key:"svg-2"}],["path",{d:"M9 8h-4",key:"svg-3"}],["path",{d:"M5 16h4",key:"svg-4"}]]);function R(){let{theme:e}=(0,i.F)();return(0,a.jsxs)("main",{className:"flex flex-col pt-10 items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col min-h-screen w-full space-y-20 items-center",children:[(0,a.jsx)(g,{src:"nop_400x400.jpg",alt:"nop",color:"gradient",bordered:!0,css:{size:"$80"}}),(0,a.jsx)($.Z,{h1:!0,size:65,css:{textGradient:"45deg, $pink600 0%, $red600 100%"},className:"animate-text-focus-in",children:"Hi! Do you like KANI\uD83E\uDD80?"}),(0,a.jsx)($.Z,{size:"$lg",children:"このサイトはNextJSとNextUIを使用して制作されています。"})]}),(0,a.jsxs)("div",{className:"flex min-h-screen w-full flex-col space-y-20 items-center",children:[(0,a.jsxs)(v.ZP,{variant:"bordered",borderWeight:"black",css:{mw:"35rem"},children:[(0,a.jsx)(v.ZP.Header,{children:(0,a.jsx)($.Z,{color:"#74a4dd",h2:!0,children:"Links"})}),(0,a.jsx)(v.ZP.Body,{children:(0,a.jsxs)(N.Container,{justify:"center",children:[(0,a.jsx)(N,{xs:5,justify:"center",children:(0,a.jsx)(P.ZP,{href:"https://twitter.com/NOP_LAB",title:"Twitter",children:(0,a.jsx)(I,{size:80,color:"dark"===e?"white":"black"})})}),(0,a.jsx)(N,{xs:5,justify:"center",title:"GitHub",children:(0,a.jsx)(P.ZP,{href:"https://github.com/NOPLAB",children:(0,a.jsx)(E,{size:80,color:"dark"===e?"white":"black"})})})]})})]}),(0,a.jsxs)(v.ZP,{variant:"bordered",borderWeight:"black",css:{mw:"35rem"},children:[(0,a.jsx)(v.ZP.Header,{children:(0,a.jsx)($.Z,{color:"#74a4dd",h2:!0,children:"Language"})}),(0,a.jsx)(v.ZP.Body,{children:(0,a.jsxs)(N.Container,{justify:"center",children:[(0,a.jsx)(N,{xs:5,justify:"center",children:(0,a.jsx)(M,{size:80,color:"dark"===e?"white":"black"})}),(0,a.jsx)(N,{xs:5,justify:"center",children:(0,a.jsx)(O,{size:80,color:"dark"===e?"white":"black"})})]})})]})]})]})}},7611:function(e,t,r){"use strict";var a=r(1537);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,n,o){if(o!==a){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return r.PropTypes=r,r}},9497:function(e,t,r){e.exports=r(7611)()},1537:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[603,194,253,769,744],function(){return e(e.s=8497)}),_N_E=e.O()}]);