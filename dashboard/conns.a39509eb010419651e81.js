(self.webpackChunkyacd=self.webpackChunkyacd||[]).push([[170],{64997:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return fe}});n(92222),n(57327),n(34553),n(26699),n(21249),n(65069),n(47042),n(5212),n(32023);var t=n(85893),o=n(87329),s=n(34699),c=n(96156),a=n(67294),i=n(45720),u=n(50794),l=n(78268),d=n(64478),f=n(340),p=n(97750),h=n(87462),j=n(6055),v="_1L_OYNGd-Q",y="_3KG2Wl3UIL",m="_2VBzsdXyrW",x="_3jbpkYalBS",b=n(86010),g=n(70296),w=n(27434),O=n(79521),C=n(11534),P="_1jfIf4GmHx",S="_3lQG38TYko",Z="_2jKsqjrYbo",k="MuvmFG__PV",D="_3ydhc_nkf0",_="_3q0v0OLzZL",H="_1XNg9MalRS";function L(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function N(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?L(Object(n),!0).forEach((function(r){(0,c.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var R=!0,I=[{accessor:"id",show:!1},{Header:"Host",accessor:"host"},{Header:"DL",accessor:"download",sortDescFirst:R},{Header:"UL",accessor:"upload",sortDescFirst:R},{Header:"DL Speed",accessor:"downloadSpeedCurr",sortDescFirst:R},{Header:"UL Speed",accessor:"uploadSpeedCurr",sortDescFirst:R},{Header:"Chains",accessor:"chains"},{Header:"Rule",accessor:"rule"},{Header:"Time",accessor:"start",sortDescFirst:R},{Header:"Source",accessor:"source"},{Header:"Destination IP",accessor:"destinationIP"},{Header:"Type",accessor:"type"}];function B(e){switch(e.column.id){case"start":return(0,g.Z)(e.value,0);case"download":case"upload":return(0,C.Z)(e.value);case"downloadSpeedCurr":case"uploadSpeedCurr":return(0,C.Z)(e.value)+"/s";default:return e.value}}var F={sortBy:[{id:"id",desc:!0}],hiddenColumns:["id"]};var T=function(e){var r=e.data,n=(0,O.useTable)({columns:I,data:r,initialState:F,autoResetSortBy:!1},O.useSortBy),o=n.getTableProps,s=n.headerGroups,c=n.rows,a=n.prepareRow;return(0,t.jsx)("div",N(N({},o()),{},{children:s.map((function(e){return(0,t.jsxs)("div",N(N({},e.getHeaderGroupProps()),{},{className:P,children:[e.headers.map((function(e){return(0,t.jsxs)("div",N(N({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:S,children:[(0,t.jsx)("span",{children:e.render("Header")}),(0,t.jsx)("span",{className:_,children:e.isSorted?(0,t.jsx)("span",{className:e.isSortedDesc?"":H,children:(0,t.jsx)(w.Z,{size:16})}):null})]}))})),c.map((function(e,r){return a(e),e.cells.map((function(e,n){return(0,t.jsx)("div",N(N({},e.getCellProps()),{},{className:(0,b.Z)(Z,r%2==0&&k,n>=1&&n<=4&&D),children:B(e)}))}))}))]}))}))}))},A=n(82569),$=n(83253),q=n.n($),E=n(25904),z=n(93621),K="_2EXTX1C3T7",G="_3Or8nP9psK",U="cMLUu0qS4R",M="_29FK6hdfwZ",Y=a.useRef,Q=a.useCallback,X=a.useMemo;function W(e){var r=e.isOpen,n=e.onRequestClose,o=e.primaryButtonOnTap,s=Y(null),c=Q((function(){s.current.focus()}),[]),a=X((function(){return{base:(0,b.Z)(z.Z.content,G),afterOpen:U,beforeClose:""}}),[]);return(0,t.jsxs)(q(),{isOpen:r,onRequestClose:n,onAfterOpen:c,className:a,overlayClassName:(0,b.Z)(z.Z.overlay,K),children:[(0,t.jsx)("p",{children:"Are you sure you want to close all connections?"}),(0,t.jsxs)("div",{className:M,children:[(0,t.jsx)(E.Z,{onClick:o,ref:s,children:"I'm sure"}),(0,t.jsx)("div",{style:{width:20}}),(0,t.jsx)(E.Z,{onClick:n,children:"No"})]})]})}var V=n(51525),J=n(85295),ee=n(4541);function re(e,r){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return ne(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ne(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,s=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw s}}}}function ne(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function te(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function oe(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?te(Object(n),!0).forEach((function(r){(0,c.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var se=a.useEffect,ce=a.useState,ae=a.useRef,ie=a.useCallback;function ue(e,r){return r?e.filter((function(e){return[e.host,e.sourceIP,e.sourcePort,e.destinationIP,e.chains,e.rule,e.type,e.network].some((function(e){return n=r,e.toLowerCase().includes(n.toLowerCase());var n}))})):e}function le(e){return e.length>0?(0,t.jsx)(T,{data:e}):(0,t.jsx)("div",{className:v,children:(0,t.jsx)(ee.Z,{width:200,height:200,c1:"var(--color-text)"})})}function de(e){var r=e.qty;return r<100?""+r:"99+"}var fe=(0,J.$j)((function(e){return{apiConfig:(0,j.Y$)(e)}}))((function(e){var r=e.apiConfig,n=(0,h.Z)(),c=(0,s.Z)(n,2),a=c[0],j=c[1],v=ce([]),b=(0,s.Z)(v,2),g=b[0],w=b[1],O=ce([]),C=(0,s.Z)(O,2),P=C[0],S=C[1],Z=ce(""),k=(0,s.Z)(Z,2),D=k[0],_=k[1],H=ue(g,D),L=ue(P,D),N=ce(!1),R=(0,s.Z)(N,2),I=R[0],B=R[1],F=ie((function(){return B(!0)}),[]),T=ie((function(){return B(!1)}),[]),$=ce(!1),q=(0,s.Z)($,2),E=q[0],z=q[1],K=ie((function(){z((function(e){return!e}))}),[]),G=ie((function(){p.PI(r),T()}),[r,T]),U=ae(g),M=ie((function(e){var r,n=e.connections,t=function(e){for(var r={},n=0;n<e.length;n++){var t=e[n];r[t.id]=t}return r}(U.current),s=Date.now(),c=n.map((function(e){return function(e,r,n){var t=e.id,o=e.metadata,s=e.upload,c=e.download,a=e.start,i=e.chains,u=e.rule,l=o.host,d=o.destinationPort,f=o.destinationIP,p=o.network,h=o.type,j=o.sourceIP,v=o.sourcePort,y=l;""===y&&(y=f);var m=r[t];return oe(oe({id:t,upload:s,download:c,start:n-new Date(a).valueOf(),chains:i.reverse().join(" / "),rule:u},o),{},{host:`${y}:${d}`,type:`${h}(${p})`,source:`${j}:${v}`,downloadSpeedCurr:c-(m?m.download:0),uploadSpeedCurr:s-(m?m.upload:0)})}(e,t,s)})),a=[],i=re(U.current);try{var u=function(){var e=r.value;c.findIndex((function(r){return r.id===e.id}))<0&&a.push(e)};for(i.s();!(r=i.n()).done;)u()}catch(e){i.e(e)}finally{i.f()}S((function(e){return[].concat(a,(0,o.Z)(e)).slice(0,101)})),!c||0===c.length&&0===U.current.length||E?U.current=c:(U.current=c,w(c))}),[w,E]);se((function(){return p.rQ(r,M)}),[r,M]);var Y=(0,d.$)().t;return(0,t.jsxs)("div",{children:[(0,t.jsx)(A.Z,{title:Y("Connections")}),(0,t.jsxs)(f.mQ,{children:[(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,t.jsxs)(f.td,{children:[(0,t.jsxs)(f.OK,{children:[(0,t.jsx)("span",{children:Y("Active")}),(0,t.jsx)("span",{className:y,children:(0,t.jsx)(de,{qty:H.length})})]}),(0,t.jsxs)(f.OK,{children:[(0,t.jsx)("span",{children:Y("Closed")}),(0,t.jsx)("span",{className:y,children:(0,t.jsx)(de,{qty:L.length})})]})]}),(0,t.jsx)("div",{className:m,children:(0,t.jsx)("input",{type:"text",name:"filter",autoComplete:"off",className:x,placeholder:"Filter",onChange:function(e){return _(e.target.value)}})})]}),(0,t.jsx)("div",{ref:a,style:{padding:30,paddingBottom:30,paddingTop:0},children:(0,t.jsxs)("div",{style:{height:j-30,overflow:"auto"},children:[(0,t.jsxs)(f.x4,{children:[(0,t.jsx)(t.Fragment,{children:le(H)}),(0,t.jsx)(V.Lg,{icon:E?(0,t.jsx)(i.Z,{size:16}):(0,t.jsx)(u.Z,{size:16}),mainButtonStyles:E?{background:"#e74c3c"}:{},style:V.FK,text:E?"Resume Refresh":"Pause Refresh",onClick:K,children:(0,t.jsx)(V.aU,{text:"Close All Connections",onClick:F,children:(0,t.jsx)(l.Z,{size:10})})})]}),(0,t.jsx)(f.x4,{children:le(L)})]})}),(0,t.jsx)(W,{isOpen:I,primaryButtonOnTap:G,onRequestClose:T})]})]})}))},51525:function(e,r,n){"use strict";n.d(r,{aU:function(){return o.Action},Lg:function(){return o.Fab},$4:function(){return c},FK:function(){return a}});var t=n(85893),o=(n(67294),n(66018)),s="_3nmqcBZJL5";function c(e){var r=e.children;return(0,t.jsx)("span",{className:s,children:r})}var a={right:10,bottom:10}},87462:function(e,r,n){"use strict";n.d(r,{Z:function(){return u}});var t=n(34699),o=n(67294),s=o.useState,c=o.useRef,a=o.useCallback,i=o.useLayoutEffect;function u(){var e=c(null),r=s(200),n=(0,t.Z)(r,2),o=n[0],u=n[1],l=a((function(){var r=e.current.getBoundingClientRect().top;u(window.innerHeight-r)}),[]);return i((function(){return l(),window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[l]),[e,o]}}}]);
//# sourceMappingURL=conns.a39509eb010419651e81.js.map