import{S as x,i as q,s as K,J as ne,K as ee,L as te,m as S,h as v,n as b,M as pe,b as F,G as p,N as tt,H as Y,O as we,P as Ee,q as W,r as G,u as X,k as P,l as I,I as he,a as V,c as O,p as U,Q as Z,g as y,v as Ze,f as Je,d as C,R as et,y as L,z as R,A as z,B as $,w as ge,T as Oe,U as Le,V as It,W as ve,o as Dt}from"../chunks/index.0107757d.js";import{r as yt,w as lt}from"../chunks/index.f91e0a89.js";const Vt={greenSpeed:0,yellowSpeed:0,pitRoadSpeed:0,pitLaneSpeed:0},je=lt({num:0,selected:!1}),Qe=lt(""),ze=lt(Vt),Ot=lt([]),Lt=yt(new Date,function(t){const s=setInterval(()=>{t(new Date)},6e4);return function(){clearInterval(s)}}),Rt=yt(new Date,function(t){const s=setInterval(()=>{t(new Date)},1e3);return function(){clearInterval(s)}}),Ne="#42be65",me=100,_e=1e3,Ve=5*Math.PI/4,J=-90,Me=Math.PI/2+Ve/2,zt=Math.PI/2-Ve/2;function $t(n,t,s,l){if(!n)return;s<0?s=0:s>1&&(s=1);const e=n.getContext("2d"),o=t;let r=s*Ve;const i=Me-r;function f(){e.shadowBlur=10,e.shadowColor=Ne,e.strokeStyle=Ne,e.lineWidth=8,e.lineCap="round",e.beginPath(),e.arc(0,J,o,Me,i,!0),e.stroke(),e.closePath(),e.shadowBlur=0}f();function u(){const a=o*Math.cos(i),m=o*Math.sin(i);e.fillStyle="white",e.beginPath(),e.moveTo(a,m+J),e.arc(a,m+J,5,0,2*Math.PI),e.fill(),e.closePath()}u();function c(){e.lineCap="round";let a=Me,m,k,w,T,_;e.shadowBlur=10,e.shadowColor="white",e.strokeStyle="white",e.lineWidth=3,m=me/_e*Ve;for(let M=0;M<=_e/me;M++)k=(o-30)*Math.cos(a),w=(o-30)*Math.sin(a),T=(o-13)*Math.cos(a),_=(o-13)*Math.sin(a),e.beginPath(),e.moveTo(k,w+J),e.lineTo(T,_+J),e.stroke(),e.closePath(),a-=m;a=Me-m/2,e.shadowColor=Ne,e.strokeStyle=Ne,e.lineWidth=2,m=me/_e*Ve;for(let M=0;M<_e/me;M++)k=(o-28)*Math.cos(a),w=(o-28)*Math.sin(a),T=(o-18)*Math.cos(a),_=(o-18)*Math.sin(a),e.beginPath(),e.moveTo(k,w+J),e.lineTo(T,_+J),e.stroke(),e.closePath(),a-=m;e.shadowBlur=0,m/=8,a=Me-m,e.strokeStyle=Ne,e.lineWidth=1;for(let M=0;M<_e/me;M++)for(let E=0;E<2;E++){for(let A=0;A<3;A++)k=(o-28)*Math.cos(a),w=(o-28)*Math.sin(a),T=(o-18)*Math.cos(a),_=(o-18)*Math.sin(a),e.beginPath(),e.moveTo(k,w+J),e.lineTo(T,_+J),e.stroke(),e.closePath(),a-=m;a-=m}}c();function h(){e.fillStyle="white";const a=me/_e*Ve;let m=-Me,k,w;for(let T=0;T<=_e/me;T++)k=(o-50)*Math.cos(m),w=(o-50)*Math.sin(m),e.save(),e.transform(1,0,0,-1,0,0),e.font="16px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(me*T,k,w-J),e.restore(),m+=a}h();function g(a){e.fillStyle="white",e.save(),e.transform(1,0,0,-1,0,0),e.font="72px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(a,0,-J-5),e.restore(),e.shadowBlur=10,e.shadowColor="white",e.strokeStyle="white",e.lineWidth=1,e.beginPath(),e.arc(0,J,o-90,Me,zt,!0),e.stroke(),e.closePath(),e.shadowBlur=0}g(Math.floor(s*_e));function d(a){e.fillStyle=Ne,e.save(),e.transform(1,0,0,-1,0,0),e.font="bold 18px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(a,0,-J+40),e.restore()}d(l)}const xe="white",$e=20,Fe=100,We=2*Math.PI/3,oe=-20,Be=Math.PI/4+We/2,Ft=Math.PI/4-We/2,Ut=150,Yt=70;function jt(n,t,s){if(!n)return;s<0?s=0:s>1&&(s=1);const l=n.getContext("2d"),e=t;l.save(),l.transform(1,0,0,1,Ut,Yt);let o=s*We;const r=Be-o;function i(){s<=.2?(l.strokeStyle="red",l.shadowColor="red"):(l.strokeStyle=xe,l.shadowColor=xe),l.shadowBlur=10,l.lineWidth=8,l.lineCap="round",l.beginPath(),l.arc(0,oe,e,Be,r,!0),l.stroke(),l.closePath()}i();function f(){const h=e*Math.cos(r),g=e*Math.sin(r);l.fillStyle="white",l.beginPath(),l.moveTo(h,g+oe),l.arc(h,g+oe,5,0,2*Math.PI),l.fill(),l.closePath()}f();function u(){l.lineCap="round";let h=Be,g,d,a,m,k;l.shadowBlur=10,l.lineWidth=3;for(let w=0;w<=Fe/$e;w++)w<=1?(l.strokeStyle="red",l.shadowColor="red"):(l.strokeStyle="white",l.shadowColor="white"),g=$e/Fe*We,d=(e-28)*Math.cos(h),a=(e-28)*Math.sin(h),m=(e-15)*Math.cos(h),k=(e-15)*Math.sin(h),l.beginPath(),l.moveTo(d,a+oe),l.lineTo(m,k+oe),l.stroke(),l.closePath(),h-=g;l.shadowBlur=0,h=Be-g/2;for(let w=0;w<Fe/$e;w++)w===0?l.strokeStyle="red":l.strokeStyle=xe,l.lineWidth=2,g=$e/Fe*We,d=(e-28)*Math.cos(h),a=(e-28)*Math.sin(h),m=(e-18)*Math.cos(h),k=(e-18)*Math.sin(h),l.beginPath(),l.moveTo(d,a+oe),l.lineTo(m,k+oe),l.stroke(),l.closePath(),h-=g;g/=4,h=Be-g;for(let w=0;w<Fe/$e;w++){w===0?l.strokeStyle="red":l.strokeStyle=xe,l.lineWidth=1;for(let T=0;T<2;T++){for(let _=0;_<1;_++)d=(e-28)*Math.cos(h),a=(e-28)*Math.sin(h),m=(e-18)*Math.cos(h),k=(e-18)*Math.sin(h),l.beginPath(),l.moveTo(d,a+oe),l.lineTo(m,k+oe),l.stroke(),l.closePath(),h-=g;h-=g}}}u();function c(){l.fillStyle="white";let h,g,d=-Be;h=(e-45)*Math.cos(d),g=(e-45)*Math.sin(d),l.save(),l.transform(1,0,0,-1,0,0),l.font="18px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("E",h,g-oe),l.restore(),d=-Ft,h=(e-45)*Math.cos(d),g=(e-45)*Math.sin(d),l.save(),l.transform(1,0,0,-1,0,0),l.font="18px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("F",h,g-oe),l.restore(),d=-r}c(),l.restore()}const Ue="#33b1ff",be=1e3,de=9e3,Ye=5*Math.PI/4,se=-20,De=3*Math.PI/4+Ye/2,Wt=-190,Gt=110;function Ht(n,t,s,l){if(!n)return;s<0?s=0:s>1&&(s=1);const e=n.getContext("2d"),o=t;e.save(),e.transform(1,0,0,1,Wt,Gt);let r=s*Ye;const i=De-r;function f(){s>7e3/de?(e.strokeStyle="red",e.shadowColor="red"):(e.strokeStyle=Ue,e.shadowColor=Ue),e.shadowBlur=10,e.lineWidth=8,e.lineCap="round",e.beginPath(),e.arc(0,se,o,De,i,!0),e.stroke(),e.closePath(),e.shadowBlur=0}f();function u(){const d=o*Math.cos(i),a=o*Math.sin(i);e.fillStyle="white",e.beginPath(),e.moveTo(d,a+se),e.arc(d,a+se,5,0,2*Math.PI),e.fill(),e.closePath()}u();function c(){e.lineCap="round";let d=De,a,m,k,w,T;e.shadowBlur=10,e.shadowColor="white",e.strokeStyle="white",e.lineWidth=3,a=be/de*Ye;for(let _=0;_<=de/be;_++)_>=7?(e.strokeStyle="red",e.shadowColor="red"):(e.strokeStyle="white",e.shadowColor="white"),m=(o-28)*Math.cos(d),k=(o-28)*Math.sin(d),w=(o-15)*Math.cos(d),T=(o-15)*Math.sin(d),e.beginPath(),e.moveTo(m,k+se),e.lineTo(w,T+se),e.stroke(),e.closePath(),d-=a;e.shadowBlur=0,d=De-a/2,e.lineWidth=2,a=be/de*Ye;for(let _=0;_<de/be;_++)_>=7?e.strokeStyle="red":e.strokeStyle=Ue,m=(o-28)*Math.cos(d),k=(o-28)*Math.sin(d),w=(o-18)*Math.cos(d),T=(o-18)*Math.sin(d),e.beginPath(),e.moveTo(m,k+se),e.lineTo(w,T+se),e.stroke(),e.closePath(),d-=a;a/=4,d=De-a,e.lineWidth=1;for(let _=0;_<de/be;_++){_>=7?e.strokeStyle="red":e.strokeStyle=Ue;for(let M=0;M<2;M++){for(let E=0;E<1;E++)m=(o-28)*Math.cos(d),k=(o-28)*Math.sin(d),w=(o-18)*Math.cos(d),T=(o-18)*Math.sin(d),e.beginPath(),e.moveTo(m,k+se),e.lineTo(w,T+se),e.stroke(),e.closePath(),d-=a;d-=a}}}c();function h(){e.fillStyle="white";const d=be/de*Ye;let a=-De,m,k;for(let w=0;w<=de/be;w++)m=(o-45)*Math.cos(a),k=(o-45)*Math.sin(a),e.save(),e.transform(1,0,0,-1,0,0),e.font="12px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(be*w/1e3,m,k-se),e.restore(),a+=d}h();function g(d){s>=7e3/de?e.fillStyle="red":e.fillStyle=Ue,e.save(),e.transform(1,0,0,-1,0,0),e.font="bold 18px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(d,0,-se-10),e.fillText("x1000",0,-se+10),e.restore()}g(l),e.restore()}function Xt(n,t,s){if(!n)return;const l=n.getContext("2d");function e(){l.clearRect(-n.width/2,-n.height/2,n.width,n.height)}e(),$t(n,t/2,s.speedPercent,"kmh"),Ht(n,t/4,s.rpmPercent,"rpm"),jt(n,t/4,s.fuelPercent)}function gt(n){let t,s;return{c(){t=ee("title"),s=W(n[1])},l(l){t=te(l,"title",{});var e=S(t);s=G(e,n[1]),e.forEach(v)},m(l,e){F(l,t,e),p(t,s)},p(l,e){e&2&&X(s,l[1])},d(l){l&&v(t)}}}function xt(n){let t,s,l=n[1]&&gt(n),e=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let r=0;r<e.length;r+=1)o=ne(o,e[r]);return{c(){t=ee("svg"),l&&l.c(),s=ee("path"),this.h()},l(r){t=te(r,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var i=S(t);l&&l.l(i),s=te(i,"path",{d:!0}),S(s).forEach(v),i.forEach(v),this.h()},h(){b(s,"d","M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"),pe(t,o)},m(r,i){F(r,t,i),l&&l.m(t,null),p(t,s)},p(r,[i]){r[1]?l?l.p(r,i):(l=gt(r),l.c(),l.m(t,s)):l&&(l.d(1),l=null),pe(t,o=tt(e,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},i&1&&{width:r[0]},i&1&&{height:r[0]},i&4&&r[2],i&8&&r[3]]))},i:Y,o:Y,d(r){r&&v(t),l&&l.d()}}}function qt(n,t,s){let l,e;const o=["size","title"];let r=we(t,o),{size:i=16}=t,{title:f=void 0}=t;return n.$$set=u=>{s(5,t=ne(ne({},t),Ee(u))),s(3,r=we(t,o)),"size"in u&&s(0,i=u.size),"title"in u&&s(1,f=u.title)},n.$$.update=()=>{s(4,l=t["aria-label"]||t["aria-labelledby"]||f),s(2,e={"aria-hidden":l?void 0:!0,role:l?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=Ee(t),[i,f,e,r,l]}class Ge extends x{constructor(t){super(),q(this,t,qt,xt,K,{size:0,title:1})}}function mt(n){let t,s;return{c(){t=ee("title"),s=W(n[1])},l(l){t=te(l,"title",{});var e=S(t);s=G(e,n[1]),e.forEach(v)},m(l,e){F(l,t,e),p(t,s)},p(l,e){e&2&&X(s,l[1])},d(l){l&&v(t)}}}function Kt(n){let t,s,l=n[1]&&mt(n),e=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let r=0;r<e.length;r+=1)o=ne(o,e[r]);return{c(){t=ee("svg"),l&&l.c(),s=ee("path"),this.h()},l(r){t=te(r,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var i=S(t);l&&l.l(i),s=te(i,"path",{d:!0}),S(s).forEach(v),i.forEach(v),this.h()},h(){b(s,"d","M16 10L26 20 24.6 21.4 16 12.8 7.4 21.4 6 20z"),pe(t,o)},m(r,i){F(r,t,i),l&&l.m(t,null),p(t,s)},p(r,[i]){r[1]?l?l.p(r,i):(l=mt(r),l.c(),l.m(t,s)):l&&(l.d(1),l=null),pe(t,o=tt(e,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},i&1&&{width:r[0]},i&1&&{height:r[0]},i&4&&r[2],i&8&&r[3]]))},i:Y,o:Y,d(r){r&&v(t),l&&l.d()}}}function Qt(n,t,s){let l,e;const o=["size","title"];let r=we(t,o),{size:i=16}=t,{title:f=void 0}=t;return n.$$set=u=>{s(5,t=ne(ne({},t),Ee(u))),s(3,r=we(t,o)),"size"in u&&s(0,i=u.size),"title"in u&&s(1,f=u.title)},n.$$.update=()=>{s(4,l=t["aria-label"]||t["aria-labelledby"]||f),s(2,e={"aria-hidden":l?void 0:!0,role:l?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=Ee(t),[i,f,e,r,l]}class He extends x{constructor(t){super(),q(this,t,Qt,Kt,K,{size:0,title:1})}}function _t(n){let t,s;return{c(){t=ee("title"),s=W(n[1])},l(l){t=te(l,"title",{});var e=S(t);s=G(e,n[1]),e.forEach(v)},m(l,e){F(l,t,e),p(t,s)},p(l,e){e&2&&X(s,l[1])},d(l){l&&v(t)}}}function Zt(n){let t,s,l=n[1]&&_t(n),e=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],o={};for(let r=0;r<e.length;r+=1)o=ne(o,e[r]);return{c(){t=ee("svg"),l&&l.c(),s=ee("circle"),this.h()},l(r){t=te(r,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var i=S(t);l&&l.l(i),s=te(i,"circle",{cx:!0,cy:!0,r:!0}),S(s).forEach(v),i.forEach(v),this.h()},h(){b(s,"cx","16"),b(s,"cy","16"),b(s,"r","14"),pe(t,o)},m(r,i){F(r,t,i),l&&l.m(t,null),p(t,s)},p(r,[i]){r[1]?l?l.p(r,i):(l=_t(r),l.c(),l.m(t,s)):l&&(l.d(1),l=null),pe(t,o=tt(e,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},i&1&&{width:r[0]},i&1&&{height:r[0]},i&4&&r[2],i&8&&r[3]]))},i:Y,o:Y,d(r){r&&v(t),l&&l.d()}}}function Jt(n,t,s){let l,e;const o=["size","title"];let r=we(t,o),{size:i=16}=t,{title:f=void 0}=t;return n.$$set=u=>{s(5,t=ne(ne({},t),Ee(u))),s(3,r=we(t,o)),"size"in u&&s(0,i=u.size),"title"in u&&s(1,f=u.title)},n.$$.update=()=>{s(4,l=t["aria-label"]||t["aria-labelledby"]||f),s(2,e={"aria-hidden":l?void 0:!0,role:l?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=Ee(t),[i,f,e,r,l]}class el extends x{constructor(t){super(),q(this,t,Jt,Zt,K,{size:0,title:1})}}function bt(n){let t,s;return{c(){t=ee("title"),s=W(n[1])},l(l){t=te(l,"title",{});var e=S(t);s=G(e,n[1]),e.forEach(v)},m(l,e){F(l,t,e),p(t,s)},p(l,e){e&2&&X(s,l[1])},d(l){l&&v(t)}}}function tl(n){let t,s,l,e=n[1]&&bt(n),o=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],r={};for(let i=0;i<o.length;i+=1)r=ne(r,o[i]);return{c(){t=ee("svg"),e&&e.c(),s=ee("path"),l=ee("path"),this.h()},l(i){t=te(i,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var f=S(t);e&&e.l(f),s=te(f,"path",{fill:!0,d:!0,"data-icon-path":!0}),S(s).forEach(v),l=te(f,"path",{d:!0}),S(l).forEach(v),f.forEach(v),this.h()},h(){b(s,"fill","none"),b(s,"d","M8 10H15V12H8z"),b(s,"data-icon-path","inner-path"),b(l,"d","M28.4143,8l-5-5L22,4.4141l3,3V12a2.0023,2.0023,0,0,0,2,2V24.5a1.5,1.5,0,0,1-3,0V16a1,1,0,0,0-1-1H19V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5V26H2v2H21V26H19V17h3v7.4a3.5645,3.5645,0,0,0,2.7654,3.5249A3.506,3.506,0,0,0,29,24.5V9.4146A2,2,0,0,0,28.4143,8ZM15,12H8V10h7Z"),pe(t,r)},m(i,f){F(i,t,f),e&&e.m(t,null),p(t,s),p(t,l)},p(i,[f]){i[1]?e?e.p(i,f):(e=bt(i),e.c(),e.m(t,s)):e&&(e.d(1),e=null),pe(t,r=tt(o,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},f&1&&{width:i[0]},f&1&&{height:i[0]},f&4&&i[2],f&8&&i[3]]))},i:Y,o:Y,d(i){i&&v(t),e&&e.d()}}}function ll(n,t,s){let l,e;const o=["size","title"];let r=we(t,o),{size:i=16}=t,{title:f=void 0}=t;return n.$$set=u=>{s(5,t=ne(ne({},t),Ee(u))),s(3,r=we(t,o)),"size"in u&&s(0,i=u.size),"title"in u&&s(1,f=u.title)},n.$$.update=()=>{s(4,l=t["aria-label"]||t["aria-labelledby"]||f),s(2,e={"aria-hidden":l?void 0:!0,role:l?"img":void 0,focusable:Number(t.tabindex)===0?!0:void 0})},t=Ee(t),[i,f,e,r,l]}class sl extends x{constructor(t){super(),q(this,t,ll,tl,K,{size:0,title:1})}}function nl(n){let t,s,l,e,o,r,i;return{c(){t=P("div"),s=P("button"),l=V(),e=P("span"),o=W(n[1]),this.h()},l(f){t=I(f,"DIV",{id:!0,class:!0});var u=S(t);s=I(u,"BUTTON",{style:!0,class:!0});var c=S(s);c.forEach(v),u.forEach(v),l=O(f),e=I(f,"SPAN",{class:!0});var h=S(e);o=G(h,n[1]),h.forEach(v),this.h()},h(){U(s,"background-color",n[0]),b(s,"class","svelte-1rt67bb"),U(s,"box-shadow",n[3]),b(t,"id","btnOutline"),b(t,"class","svelte-1rt67bb"),b(e,"class","svelte-1rt67bb")},m(f,u){F(f,t,u),p(t,s),F(f,l,u),F(f,e,u),p(e,o),r||(i=Z(s,"click",n[4]),r=!0)},p(f,u){u&1&&U(s,"background-color",f[0]),(u&1||u&9)&&U(s,"box-shadow",f[3]),u&2&&X(o,f[1])},d(f){f&&v(t),f&&v(l),f&&v(e),r=!1,i()}}}function rl(n){let t,s,l,e,o,r,i;return{c(){t=P("span"),s=W(n[1]),l=V(),e=P("div"),o=P("button"),this.h()},l(f){t=I(f,"SPAN",{class:!0});var u=S(t);s=G(u,n[1]),u.forEach(v),l=O(f),e=I(f,"DIV",{id:!0,class:!0});var c=S(e);o=I(c,"BUTTON",{style:!0,class:!0});var h=S(o);h.forEach(v),c.forEach(v),this.h()},h(){b(t,"class","svelte-1rt67bb"),U(t,"text-align","right"),U(o,"background-color",n[0]),b(o,"class","svelte-1rt67bb"),U(o,"box-shadow",n[3]),b(e,"id","btnOutline"),b(e,"class","svelte-1rt67bb")},m(f,u){F(f,t,u),p(t,s),F(f,l,u),F(f,e,u),p(e,o),r||(i=Z(o,"click",n[4]),r=!0)},p(f,u){u&2&&X(s,f[1]),u&1&&U(o,"background-color",f[0]),(u&1||u&9)&&U(o,"box-shadow",f[3])},d(f){f&&v(t),f&&v(l),f&&v(e),r=!1,i()}}}function il(n){let t;function s(o,r){return o[2]?rl:nl}let l=s(n),e=l(n);return{c(){t=P("div"),e.c(),this.h()},l(o){t=I(o,"DIV",{id:!0,class:!0});var r=S(t);e.l(r),r.forEach(v),this.h()},h(){b(t,"id","flag"),b(t,"class","svelte-1rt67bb")},m(o,r){F(o,t,r),e.m(t,null)},p(o,[r]){l===(l=s(o))&&e?e.p(o,r):(e.d(1),e=l(o),e&&(e.c(),e.m(t,null)))},i:Y,o:Y,d(o){o&&v(t),e.d()}}}function ol(n,t,s){let l,e;he(n,Ot,c=>s(6,e=c));let{color:o}=t,{label:r}=t,{left:i}=t,f=!1;function u(){if(s(5,f=!f),f)e.push(r.toLowerCase());else{const c=e.indexOf(r.toLowerCase());e.splice(c,1)}}return n.$$set=c=>{"color"in c&&s(0,o=c.color),"label"in c&&s(1,r=c.label),"left"in c&&s(2,i=c.left)},n.$$.update=()=>{n.$$.dirty&33&&s(3,l=f?`0 0 10px 5px ${o}`:"none"),n.$$.dirty&33&&f&&o==="#000000"&&s(3,l="0 0 10px 5px white")},[o,r,i,l,u,f]}class Ct extends x{constructor(t){super(),q(this,t,ol,il,K,{color:0,label:1,left:2})}}function vt(n,t,s){const l=n.slice();return l[2]=t[s],l}function pt(n,t,s){const l=n.slice();return l[2]=t[s],l}function wt(n){let t,s;return t=new Ct({props:{color:n[2].color,label:n[2].label,left:!0}}),{c(){L(t.$$.fragment)},l(l){R(t.$$.fragment,l)},m(l,e){z(t,l,e),s=!0},p:Y,i(l){s||(y(t.$$.fragment,l),s=!0)},o(l){C(t.$$.fragment,l),s=!1},d(l){$(t,l)}}}function Et(n){let t,s;return t=new Ct({props:{color:n[2].color,label:n[2].label,left:!1}}),{c(){L(t.$$.fragment)},l(l){R(t.$$.fragment,l)},m(l,e){z(t,l,e),s=!0},p:Y,i(l){s||(y(t.$$.fragment,l),s=!0)},o(l){C(t.$$.fragment,l),s=!1},d(l){$(t,l)}}}function al(n){let t,s,l,e,o,r=n[0],i=[];for(let g=0;g<r.length;g+=1)i[g]=wt(pt(n,r,g));const f=g=>C(i[g],1,1,()=>{i[g]=null});let u=n[1],c=[];for(let g=0;g<u.length;g+=1)c[g]=Et(vt(n,u,g));const h=g=>C(c[g],1,1,()=>{c[g]=null});return{c(){t=P("div"),s=P("div");for(let g=0;g<i.length;g+=1)i[g].c();l=V(),e=P("div");for(let g=0;g<c.length;g+=1)c[g].c();this.h()},l(g){t=I(g,"DIV",{id:!0,class:!0});var d=S(t);s=I(d,"DIV",{id:!0,class:!0});var a=S(s);for(let k=0;k<i.length;k+=1)i[k].l(a);a.forEach(v),l=O(d),e=I(d,"DIV",{id:!0,class:!0});var m=S(e);for(let k=0;k<c.length;k+=1)c[k].l(m);m.forEach(v),d.forEach(v),this.h()},h(){b(s,"id","column1"),b(s,"class","svelte-bhxoog"),b(e,"id","column2"),b(e,"class","svelte-bhxoog"),b(t,"id","flags"),b(t,"class","svelte-bhxoog")},m(g,d){F(g,t,d),p(t,s);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(s,null);p(t,l),p(t,e);for(let a=0;a<c.length;a+=1)c[a]&&c[a].m(e,null);o=!0},p(g,[d]){if(d&1){r=g[0];let a;for(a=0;a<r.length;a+=1){const m=pt(g,r,a);i[a]?(i[a].p(m,d),y(i[a],1)):(i[a]=wt(m),i[a].c(),y(i[a],1),i[a].m(s,null))}for(Ze(),a=r.length;a<i.length;a+=1)f(a);Je()}if(d&2){u=g[1];let a;for(a=0;a<u.length;a+=1){const m=vt(g,u,a);c[a]?(c[a].p(m,d),y(c[a],1)):(c[a]=Et(m),c[a].c(),y(c[a],1),c[a].m(e,null))}for(Ze(),a=u.length;a<c.length;a+=1)h(a);Je()}},i(g){if(!o){for(let d=0;d<r.length;d+=1)y(i[d]);for(let d=0;d<u.length;d+=1)y(c[d]);o=!0}},o(g){i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)C(i[d]);c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)C(c[d]);o=!1},d(g){g&&v(t),et(i,g),et(c,g)}}}function fl(n){return[[{color:"#eb6200",label:"ORANGE"},{color:"#198038",label:"WAVING GREEN"},{color:"#878d96",label:"BLACK"},{color:"#fa4d56",label:"RED"}],[{color:"#24a148",label:"GREEN"},{color:"#f1c21b",label:"YELLOW"},{color:"#000000",label:"CHECKER"},{color:"#a56eff",label:"PURPLE"}]]}class cl extends x{constructor(t){super(),q(this,t,fl,al,K,{})}}function ul(n){let t,s,l=n[2].format(n[0])+"",e,o,r,i=n[3].format(n[1])+"",f;return{c(){t=P("div"),s=P("span"),e=W(l),o=V(),r=P("span"),f=W(i),this.h()},l(u){t=I(u,"DIV",{id:!0,class:!0});var c=S(t);s=I(c,"SPAN",{class:!0,id:!0});var h=S(s);e=G(h,l),h.forEach(v),o=O(c),r=I(c,"SPAN",{class:!0,id:!0});var g=S(r);f=G(g,i),g.forEach(v),c.forEach(v),this.h()},h(){b(s,"class","info"),b(s,"id","time"),b(r,"class","info"),b(r,"id","date"),b(t,"id","datetime"),b(t,"class","svelte-rvy182")},m(u,c){F(u,t,c),p(t,s),p(s,e),p(t,o),p(t,r),p(r,f)},p(u,[c]){c&1&&l!==(l=u[2].format(u[0])+"")&&X(e,l),c&2&&i!==(i=u[3].format(u[1])+"")&&X(f,i)},i:Y,o:Y,d(u){u&&v(t)}}}function dl(n,t,s){let l,e;he(n,Rt,i=>s(0,l=i)),he(n,Lt,i=>s(1,e=i));const o=new Intl.DateTimeFormat("en",{hour12:!0,hour:"numeric",minute:"2-digit",second:"2-digit"}),r=new Intl.DateTimeFormat("en-US");return[l,e,o,r]}class hl extends x{constructor(t){super(),q(this,t,dl,ul,K,{})}}function gl(n){let t,s,l,e,o=n[1].num+"",r,i,f,u,c,h=`${n[0]}%`,g;return f=new el({props:{fill:n[2]}}),c=new hl({}),{c(){t=P("div"),s=P("div"),l=P("span"),e=W("Car "),r=W(o),i=V(),L(f.$$.fragment),u=V(),L(c.$$.fragment),this.h()},l(d){t=I(d,"DIV",{id:!0,class:!0});var a=S(t);s=I(a,"DIV",{id:!0,class:!0});var m=S(s);l=I(m,"SPAN",{id:!0,class:!0});var k=S(l);e=G(k,"Car "),r=G(k,o),k.forEach(v),i=O(m),R(f.$$.fragment,m),m.forEach(v),u=O(a),R(c.$$.fragment,a),a.forEach(v),this.h()},h(){b(l,"id","carNum"),b(l,"class","svelte-1btac30"),b(s,"id","carDisplay"),b(s,"class","svelte-1btac30"),b(t,"id","infobar"),b(t,"class","svelte-1btac30"),U(t,"height",h)},m(d,a){F(d,t,a),p(t,s),p(s,l),p(l,e),p(l,r),p(s,i),z(f,s,null),p(t,u),z(c,t,null),g=!0},p(d,[a]){(!g||a&2)&&o!==(o=d[1].num+"")&&X(r,o);const m={};a&4&&(m.fill=d[2]),f.$set(m),a&1&&h!==(h=`${d[0]}%`)&&U(t,"height",h)},i(d){g||(y(f.$$.fragment,d),y(c.$$.fragment,d),g=!0)},o(d){C(f.$$.fragment,d),C(c.$$.fragment,d),g=!1},d(d){d&&v(t),$(f),$(c)}}}function ml(n,t,s){let l,e;he(n,je,r=>s(1,e=r));let{height:o}=t;return n.$$set=r=>{"height"in r&&s(0,o=r.height)},n.$$.update=()=>{n.$$.dirty&2&&s(2,l=e.selected?"green":"red")},[o,e,l]}class _l extends x{constructor(t){super(),q(this,t,ml,gl,K,{height:0})}}function bl(n){let t,s,l,e,o,r;return{c(){t=P("div"),s=P("div"),l=P("button"),e=W(n[0]),this.h()},l(i){t=I(i,"DIV",{id:!0,class:!0});var f=S(t);s=I(f,"DIV",{id:!0,class:!0});var u=S(s);l=I(u,"BUTTON",{class:!0});var c=S(l);e=G(c,n[0]),c.forEach(v),u.forEach(v),f.forEach(v),this.h()},h(){l.disabled=n[1],b(l,"class","svelte-1tnwzvj"),U(l,"box-shadow",n[3]),U(l,"color",n[2]),b(s,"id","btnOutline"),b(s,"class","svelte-1tnwzvj"),b(t,"id","set"),b(t,"class","svelte-1tnwzvj")},m(i,f){F(i,t,f),p(t,s),p(s,l),p(l,e),o||(r=Z(l,"click",n[4]),o=!0)},p(i,[f]){f&1&&X(e,i[0]),f&2&&(l.disabled=i[1]),f&8&&U(l,"box-shadow",i[3]),f&4&&U(l,"color",i[2])},i:Y,o:Y,d(i){i&&v(t),o=!1,r()}}}function vl(n,t,s){let l,e,{text:o}=t,{set:r}=t,{disabled:i}=t,f=!1;function u(){s(6,f=!f),s(5,r=!r)}return n.$$set=c=>{"text"in c&&s(0,o=c.text),"set"in c&&s(5,r=c.set),"disabled"in c&&s(1,i=c.disabled)},n.$$.update=()=>{n.$$.dirty&64&&s(3,l=f?"0 0 10px 5px #42be65":"none"),n.$$.dirty&64&&s(2,e=f?"#42be65":"black")},[o,i,e,l,u,r,f]}class nt extends x{constructor(t){super(),q(this,t,vl,bl,K,{text:0,set:5,disabled:1})}}function pl(n){let t,s,l,e,o,r,i,f,u,c,h,g,d,a,m,k,w,T,_,M,E,A,N,re,Q,ke,ce,Se,Te,D,j,ie,H,Ae,ae,Pe,ue;o=new He({props:{size:"40",fill:"#42be65"}}),h=new Ge({props:{size:"40",fill:"#42be65"}}),m=new He({props:{size:"40",fill:"#42be65"}}),E=new Ge({props:{size:"40",fill:"#42be65"}}),Q=new He({props:{size:"40",fill:"#42be65"}}),j=new Ge({props:{size:"40",fill:"#42be65"}});function Xe(B){n[14](B)}let Re={text:n[0],disabled:!1};return n[5]!==void 0&&(Re.set=n[5]),H=new nt({props:Re}),ge.push(()=>Oe(H,"set",Xe)),{c(){t=P("div"),s=P("div"),l=P("div"),e=P("button"),L(o.$$.fragment),r=V(),i=P("span"),f=W(n[1]),u=V(),c=P("button"),L(h.$$.fragment),g=V(),d=P("div"),a=P("button"),L(m.$$.fragment),k=V(),w=P("span"),T=W(n[2]),_=V(),M=P("button"),L(E.$$.fragment),A=V(),N=P("div"),re=P("button"),L(Q.$$.fragment),ke=V(),ce=P("span"),Se=W(n[3]),Te=V(),D=P("button"),L(j.$$.fragment),ie=V(),L(H.$$.fragment),this.h()},l(B){t=I(B,"DIV",{id:!0,class:!0});var le=S(t);s=I(le,"DIV",{id:!0,class:!0});var fe=S(s);l=I(fe,"DIV",{id:!0,class:!0});var Ie=S(l);e=I(Ie,"BUTTON",{class:!0});var rt=S(e);R(o.$$.fragment,rt),rt.forEach(v),r=O(Ie),i=I(Ie,"SPAN",{class:!0});var it=S(i);f=G(it,n[1]),it.forEach(v),u=O(Ie),c=I(Ie,"BUTTON",{class:!0});var ot=S(c);R(h.$$.fragment,ot),ot.forEach(v),Ie.forEach(v),g=O(fe),d=I(fe,"DIV",{id:!0,class:!0});var ye=S(d);a=I(ye,"BUTTON",{class:!0});var at=S(a);R(m.$$.fragment,at),at.forEach(v),k=O(ye),w=I(ye,"SPAN",{class:!0});var ft=S(w);T=G(ft,n[2]),ft.forEach(v),_=O(ye),M=I(ye,"BUTTON",{class:!0});var ct=S(M);R(E.$$.fragment,ct),ct.forEach(v),ye.forEach(v),A=O(fe),N=I(fe,"DIV",{id:!0,class:!0});var Ce=S(N);re=I(Ce,"BUTTON",{class:!0});var ut=S(re);R(Q.$$.fragment,ut),ut.forEach(v),ke=O(Ce),ce=I(Ce,"SPAN",{class:!0});var dt=S(ce);Se=G(dt,n[3]),dt.forEach(v),Te=O(Ce),D=I(Ce,"BUTTON",{class:!0});var ht=S(D);R(j.$$.fragment,ht),ht.forEach(v),Ce.forEach(v),fe.forEach(v),ie=O(le),R(H.$$.fragment,le),le.forEach(v),this.h()},h(){b(e,"class","select svelte-j20ifk"),b(i,"class","digit svelte-j20ifk"),b(c,"class","select svelte-j20ifk"),b(l,"id","left"),b(l,"class","svelte-j20ifk"),b(a,"class","select svelte-j20ifk"),b(w,"class","digit svelte-j20ifk"),b(M,"class","select svelte-j20ifk"),b(d,"id","middle"),b(d,"class","svelte-j20ifk"),b(re,"class","select svelte-j20ifk"),b(ce,"class","digit svelte-j20ifk"),b(D,"class","select svelte-j20ifk"),b(N,"id","right"),b(N,"class","svelte-j20ifk"),b(s,"id","numSelect"),b(s,"class","svelte-j20ifk"),b(t,"id","selector"),b(t,"class","svelte-j20ifk")},m(B,le){F(B,t,le),p(t,s),p(s,l),p(l,e),z(o,e,null),p(l,r),p(l,i),p(i,f),p(l,u),p(l,c),z(h,c,null),p(s,g),p(s,d),p(d,a),z(m,a,null),p(d,k),p(d,w),p(w,T),p(d,_),p(d,M),z(E,M,null),p(s,A),p(s,N),p(N,re),z(Q,re,null),p(N,ke),p(N,ce),p(ce,Se),p(N,Te),p(N,D),z(j,D,null),p(t,ie),z(H,t,null),n[15](t),ae=!0,Pe||(ue=[Z(e,"click",n[8]),Z(c,"click",n[9]),Z(a,"click",n[10]),Z(M,"click",n[11]),Z(re,"click",n[12]),Z(D,"click",n[13])],Pe=!0)},p(B,[le]){(!ae||le&2)&&X(f,B[1]),(!ae||le&4)&&X(T,B[2]),(!ae||le&8)&&X(Se,B[3]);const fe={};le&1&&(fe.text=B[0]),!Ae&&le&32&&(Ae=!0,fe.set=B[5],Le(()=>Ae=!1)),H.$set(fe)},i(B){ae||(y(o.$$.fragment,B),y(h.$$.fragment,B),y(m.$$.fragment,B),y(E.$$.fragment,B),y(Q.$$.fragment,B),y(j.$$.fragment,B),y(H.$$.fragment,B),ae=!0)},o(B){C(o.$$.fragment,B),C(h.$$.fragment,B),C(m.$$.fragment,B),C(E.$$.fragment,B),C(Q.$$.fragment,B),C(j.$$.fragment,B),C(H.$$.fragment,B),ae=!1},d(B){B&&v(t),$(o),$(h),$(m),$(E),$(Q),$(j),$(H),n[15](null),Pe=!1,It(ue)}}}function wl(n,t,s){let l;he(n,ze,E=>s(16,l=E));let{text:e}=t,o=0,r=0,i=0,f,u=!1;function c(E,A){if(A==="left"){if(E===2)return r===0&&i===0?E:1;if(E===0||E===1)return E;if(E<0)return 0;if(E>2)return 2}else if(o!==2){if(E>=0&&E<=9)return E;if(E<0)return 9;if(E>9)return 0}else return 0}function h(E){E==="left"?s(1,o=c(o+1,"left")):E==="mid"?s(2,r=c(r+1)):E==="right"&&s(3,i=c(i+1))}function g(E){E==="left"?s(1,o=c(o-1,"left")):E==="mid"?s(2,r=c(r-1)):E==="right"&&s(3,i=c(i-1))}const d=()=>h("left"),a=()=>g("left"),m=()=>h("mid"),k=()=>g("mid"),w=()=>h("right"),T=()=>g("right");function _(E){u=E,s(5,u)}function M(E){ge[E?"unshift":"push"](()=>{f=E,s(4,f)})}return n.$$set=E=>{"text"in E&&s(0,e=E.text)},n.$$.update=()=>{if(n.$$.dirty&63)if(u){f.querySelectorAll(".select").forEach(N=>{N.disabled=!0});const A=parseInt(""+o+r+i);switch(e){case"GREEN SPEED":ve(ze,l.greenSpeed=A,l);break;case"YELLOW SPEED":ve(ze,l.yellowSpeed=A,l);break;case"PIT ROAD SPEED":ve(ze,l.pitRoadSpeed=A,l);break;case"PIT LANE SPEED":ve(ze,l.pitLaneSpeed=A,l);break}}else f&&f.querySelectorAll(".select").forEach(A=>{A.disabled=!1})},[e,o,r,i,f,u,h,g,d,a,m,k,w,T,_,M]}class qe extends x{constructor(t){super(),q(this,t,wl,pl,K,{text:0})}}function El(n){let t,s,l,e,o,r,i,f,u;return s=new qe({props:{text:"GREEN SPEED"}}),e=new qe({props:{text:"YELLOW SPEED"}}),r=new qe({props:{text:"PIT ROAD SPEED"}}),f=new qe({props:{text:"PIT LANE SPEED"}}),{c(){t=P("div"),L(s.$$.fragment),l=V(),L(e.$$.fragment),o=V(),L(r.$$.fragment),i=V(),L(f.$$.fragment),this.h()},l(c){t=I(c,"DIV",{id:!0,class:!0});var h=S(t);R(s.$$.fragment,h),l=O(h),R(e.$$.fragment,h),o=O(h),R(r.$$.fragment,h),i=O(h),R(f.$$.fragment,h),h.forEach(v),this.h()},h(){b(t,"id","speeds"),b(t,"class","svelte-m455h2")},m(c,h){F(c,t,h),z(s,t,null),p(t,l),z(e,t,null),p(t,o),z(r,t,null),p(t,i),z(f,t,null),u=!0},p:Y,i(c){u||(y(s.$$.fragment,c),y(e.$$.fragment,c),y(r.$$.fragment,c),y(f.$$.fragment,c),u=!0)},o(c){C(s.$$.fragment,c),C(e.$$.fragment,c),C(r.$$.fragment,c),C(f.$$.fragment,c),u=!1},d(c){c&&v(t),$(s),$(e),$(r),$(f)}}}class kl extends x{constructor(t){super(),q(this,t,null,El,K,{})}}function Ml(n){let t,s,l,e,o,r,i,f,u,c,h,g,d,a,m,k,w,T,_,M,E,A,N,re,Q,ke,ce;o=new He({props:{size:"40",fill:"#42be65"}}),h=new Ge({props:{size:"40",fill:"#42be65"}}),m=new He({props:{size:"40",fill:"#42be65"}}),E=new Ge({props:{size:"40",fill:"#42be65"}});function Se(D){n[10](D)}let Te={text:"SELECT CAR",disabled:!1};return n[3]!==void 0&&(Te.set=n[3]),N=new nt({props:Te}),ge.push(()=>Oe(N,"set",Se)),{c(){t=P("div"),s=P("div"),l=P("div"),e=P("button"),L(o.$$.fragment),r=V(),i=P("span"),f=W(n[0]),u=V(),c=P("button"),L(h.$$.fragment),g=V(),d=P("div"),a=P("button"),L(m.$$.fragment),k=V(),w=P("span"),T=W(n[1]),_=V(),M=P("button"),L(E.$$.fragment),A=V(),L(N.$$.fragment),this.h()},l(D){t=I(D,"DIV",{id:!0,class:!0});var j=S(t);s=I(j,"DIV",{id:!0,class:!0});var ie=S(s);l=I(ie,"DIV",{id:!0,class:!0});var H=S(l);e=I(H,"BUTTON",{class:!0});var Ae=S(e);R(o.$$.fragment,Ae),Ae.forEach(v),r=O(H),i=I(H,"SPAN",{class:!0});var ae=S(i);f=G(ae,n[0]),ae.forEach(v),u=O(H),c=I(H,"BUTTON",{class:!0});var Pe=S(c);R(h.$$.fragment,Pe),Pe.forEach(v),H.forEach(v),g=O(ie),d=I(ie,"DIV",{id:!0,class:!0});var ue=S(d);a=I(ue,"BUTTON",{class:!0});var Xe=S(a);R(m.$$.fragment,Xe),Xe.forEach(v),k=O(ue),w=I(ue,"SPAN",{class:!0});var Re=S(w);T=G(Re,n[1]),Re.forEach(v),_=O(ue),M=I(ue,"BUTTON",{class:!0});var B=S(M);R(E.$$.fragment,B),B.forEach(v),ue.forEach(v),ie.forEach(v),A=O(j),R(N.$$.fragment,j),j.forEach(v),this.h()},h(){b(e,"class","select svelte-hpc3vs"),b(i,"class","digit svelte-hpc3vs"),b(c,"class","select svelte-hpc3vs"),b(l,"id","left"),b(l,"class","svelte-hpc3vs"),b(a,"class","select svelte-hpc3vs"),b(w,"class","digit svelte-hpc3vs"),b(M,"class","select svelte-hpc3vs"),b(d,"id","right"),b(d,"class","svelte-hpc3vs"),b(s,"id","numSelect"),b(s,"class","svelte-hpc3vs"),b(t,"id","selector"),b(t,"class","svelte-hpc3vs")},m(D,j){F(D,t,j),p(t,s),p(s,l),p(l,e),z(o,e,null),p(l,r),p(l,i),p(i,f),p(l,u),p(l,c),z(h,c,null),p(s,g),p(s,d),p(d,a),z(m,a,null),p(d,k),p(d,w),p(w,T),p(d,_),p(d,M),z(E,M,null),p(t,A),z(N,t,null),n[11](t),Q=!0,ke||(ce=[Z(e,"click",n[6]),Z(c,"click",n[7]),Z(a,"click",n[8]),Z(M,"click",n[9])],ke=!0)},p(D,[j]){(!Q||j&1)&&X(f,D[0]),(!Q||j&2)&&X(T,D[1]);const ie={};!re&&j&8&&(re=!0,ie.set=D[3],Le(()=>re=!1)),N.$set(ie)},i(D){Q||(y(o.$$.fragment,D),y(h.$$.fragment,D),y(m.$$.fragment,D),y(E.$$.fragment,D),y(N.$$.fragment,D),Q=!0)},o(D){C(o.$$.fragment,D),C(h.$$.fragment,D),C(m.$$.fragment,D),C(E.$$.fragment,D),C(N.$$.fragment,D),Q=!1},d(D){D&&v(t),$(o),$(h),$(m),$(E),$(N),n[11](null),ke=!1,It(ce)}}}function Ke(n){if(n>=0&&n<=9)return n;if(n<0)return 9;if(n>9)return 0}function Sl(n,t,s){let l;he(n,je,k=>s(12,l=k));let e=0,o=0,r,i=!1;function f(k){k==="left"?s(0,e=Ke(e+1)):k==="right"&&s(1,o=Ke(o+1))}function u(k){k==="left"?s(0,e=Ke(e-1)):k==="right"&&s(1,o=Ke(o-1))}const c=()=>f("left"),h=()=>u("left"),g=()=>f("right"),d=()=>u("right");function a(k){i=k,s(3,i)}function m(k){ge[k?"unshift":"push"](()=>{r=k,s(2,r)})}return n.$$.update=()=>{n.$$.dirty&15&&(i?(r.querySelectorAll(".select").forEach(w=>{w.disabled=!0}),ve(je,l={num:parseInt(""+e+o),selected:!0},l)):r&&(r.querySelectorAll(".select").forEach(w=>{w.disabled=!1}),ve(je,l.selected=!1,l)))},[e,o,r,i,f,u,c,h,g,d,a,m]}class Tl extends x{constructor(t){super(),q(this,t,Sl,Ml,K,{})}}function Al(n){let t,s,l,e,o;return{c(){t=P("div"),s=P("button"),l=W(n[0]),this.h()},l(r){t=I(r,"DIV",{id:!0,class:!0});var i=S(t);s=I(i,"BUTTON",{class:!0});var f=S(s);l=G(f,n[0]),f.forEach(v),i.forEach(v),this.h()},h(){s.disabled=n[1],b(s,"class","svelte-2sc1oa"),U(s,"box-shadow",n[3]),U(s,"background-color",n[2]),b(t,"id","mode"),b(t,"class","svelte-2sc1oa")},m(r,i){F(r,t,i),p(t,s),p(s,l),e||(o=Z(s,"click",n[4]),e=!0)},p(r,[i]){i&1&&X(l,r[0]),i&2&&(s.disabled=r[1]),i&8&&U(s,"box-shadow",r[3]),i&4&&U(s,"background-color",r[2])},i:Y,o:Y,d(r){r&&v(t),e=!1,o()}}}function Pl(n,t,s){let l,e;he(n,Qe,u=>s(5,e=u));let{mode:o}=t,{disabled:r}=t,i;switch(o){case"TEST":i="white";break;case"QUALIFY":i="#24a148";break;case"ATTACK":i="#fa4d56";break;case"DEFEND":i="#4589ff";break}function f(){o===e?ve(Qe,e="",e):ve(Qe,e=o,e)}return n.$$set=u=>{"mode"in u&&s(0,o=u.mode),"disabled"in u&&s(1,r=u.disabled)},n.$$.update=()=>{n.$$.dirty&37&&s(3,l=e===o?`0 0 10px 5px ${i}`:"none")},[o,r,i,l,f,e]}class Nt extends x{constructor(t){super(),q(this,t,Pl,Al,K,{mode:0,disabled:1})}}function kt(n,t,s){const l=n.slice();return l[12]=t[s],l}function Mt(n,t,s){const l=n.slice();return l[12]=t[s],l}function St(n){let t,s,l;function e(r){n[7](r)}let o={mode:n[12]};return n[2]!==void 0&&(o.disabled=n[2]),t=new Nt({props:o}),ge.push(()=>Oe(t,"disabled",e)),{c(){L(t.$$.fragment)},l(r){R(t.$$.fragment,r)},m(r,i){z(t,r,i),l=!0},p(r,i){const f={};!s&&i&4&&(s=!0,f.disabled=r[2],Le(()=>s=!1)),t.$set(f)},i(r){l||(y(t.$$.fragment,r),l=!0)},o(r){C(t.$$.fragment,r),l=!1},d(r){$(t,r)}}}function Tt(n){let t,s,l;function e(r){n[8](r)}let o={mode:n[12]};return n[2]!==void 0&&(o.disabled=n[2]),t=new Nt({props:o}),ge.push(()=>Oe(t,"disabled",e)),{c(){L(t.$$.fragment)},l(r){R(t.$$.fragment,r)},m(r,i){z(t,r,i),l=!0},p(r,i){const f={};!s&&i&4&&(s=!0,f.disabled=r[2],Le(()=>s=!1)),t.$set(f)},i(r){l||(y(t.$$.fragment,r),l=!0)},o(r){C(t.$$.fragment,r),l=!1},d(r){$(t,r)}}}function Il(n){let t,s,l,e,o,r,i,f,u,c=n[4],h=[];for(let _=0;_<c.length;_+=1)h[_]=St(Mt(n,c,_));const g=_=>C(h[_],1,1,()=>{h[_]=null});let d=n[5],a=[];for(let _=0;_<d.length;_+=1)a[_]=Tt(kt(n,d,_));const m=_=>C(a[_],1,1,()=>{a[_]=null});function k(_){n[9](_)}function w(_){n[10](_)}let T={text:"SELECT MODE"};return n[1]!==void 0&&(T.set=n[1]),n[3]!==void 0&&(T.disabled=n[3]),r=new nt({props:T}),ge.push(()=>Oe(r,"set",k)),ge.push(()=>Oe(r,"disabled",w)),{c(){t=P("div"),s=P("div");for(let _=0;_<h.length;_+=1)h[_].c();l=V(),e=P("div");for(let _=0;_<a.length;_+=1)a[_].c();o=V(),L(r.$$.fragment),this.h()},l(_){t=I(_,"DIV",{id:!0,class:!0});var M=S(t);s=I(M,"DIV",{id:!0,class:!0});var E=S(s);for(let N=0;N<h.length;N+=1)h[N].l(E);E.forEach(v),l=O(M),e=I(M,"DIV",{id:!0,class:!0});var A=S(e);for(let N=0;N<a.length;N+=1)a[N].l(A);A.forEach(v),o=O(M),R(r.$$.fragment,M),M.forEach(v),this.h()},h(){b(s,"id","column1"),b(s,"class","svelte-ht7eb5"),b(e,"id","column2"),b(e,"class","svelte-ht7eb5"),b(t,"id","selector"),b(t,"class","svelte-ht7eb5")},m(_,M){F(_,t,M),p(t,s);for(let E=0;E<h.length;E+=1)h[E]&&h[E].m(s,null);p(t,l),p(t,e);for(let E=0;E<a.length;E+=1)a[E]&&a[E].m(e,null);p(t,o),z(r,t,null),n[11](t),u=!0},p(_,[M]){if(M&20){c=_[4];let A;for(A=0;A<c.length;A+=1){const N=Mt(_,c,A);h[A]?(h[A].p(N,M),y(h[A],1)):(h[A]=St(N),h[A].c(),y(h[A],1),h[A].m(s,null))}for(Ze(),A=c.length;A<h.length;A+=1)g(A);Je()}if(M&36){d=_[5];let A;for(A=0;A<d.length;A+=1){const N=kt(_,d,A);a[A]?(a[A].p(N,M),y(a[A],1)):(a[A]=Tt(N),a[A].c(),y(a[A],1),a[A].m(e,null))}for(Ze(),A=d.length;A<a.length;A+=1)m(A);Je()}const E={};!i&&M&2&&(i=!0,E.set=_[1],Le(()=>i=!1)),!f&&M&8&&(f=!0,E.disabled=_[3],Le(()=>f=!1)),r.$set(E)},i(_){if(!u){for(let M=0;M<c.length;M+=1)y(h[M]);for(let M=0;M<d.length;M+=1)y(a[M]);y(r.$$.fragment,_),u=!0}},o(_){h=h.filter(Boolean);for(let M=0;M<h.length;M+=1)C(h[M]);a=a.filter(Boolean);for(let M=0;M<a.length;M+=1)C(a[M]);C(r.$$.fragment,_),u=!1},d(_){_&&v(t),et(h,_),et(a,_),$(r),n[11](null)}}}function yl(n,t,s){let l;he(n,Qe,m=>s(6,l=m));let e,o=!1,r=!1,i=!1,f=["TEST","ATTACK"],u=["QUALIFY","DEFEND"];function c(m){r=m,s(2,r),s(1,o),s(0,e)}function h(m){r=m,s(2,r),s(1,o),s(0,e)}function g(m){o=m,s(1,o)}function d(m){i=m,s(3,i),s(6,l)}function a(m){ge[m?"unshift":"push"](()=>{e=m,s(0,e)})}return n.$$.update=()=>{n.$$.dirty&3&&(o?s(2,r=!0):e&&s(2,r=!1)),n.$$.dirty&64&&(l===""?s(3,i=!0):s(3,i=!1))},[e,o,r,i,f,u,l,c,h,g,d,a]}class Cl extends x{constructor(t){super(),q(this,t,yl,Il,K,{})}}function Nl(n){let t,s,l,e,o;return s=new Tl({}),e=new Cl({}),{c(){t=P("div"),L(s.$$.fragment),l=V(),L(e.$$.fragment),this.h()},l(r){t=I(r,"DIV",{id:!0,class:!0});var i=S(t);R(s.$$.fragment,i),l=O(i),R(e.$$.fragment,i),i.forEach(v),this.h()},h(){b(t,"id","controls"),b(t,"class","svelte-1ta693w")},m(r,i){F(r,t,i),z(s,t,null),p(t,l),z(e,t,null),o=!0},p:Y,i(r){o||(y(s.$$.fragment,r),y(e.$$.fragment,r),o=!0)},o(r){C(s.$$.fragment,r),C(e.$$.fragment,r),o=!1},d(r){r&&v(t),$(s),$(e)}}}class Bl extends x{constructor(t){super(),q(this,t,null,Nl,K,{})}}function Dl(n){let t,s,l,e,o,r,i,f,u,c=`${n[0]}px`,h,g,d,a,m=`${n[1]}px`,k;return s=new _l({props:{height:Bt}}),o=new Bl({}),u=new sl({props:{size:"30",fill:n[2]}}),g=new cl({}),a=new kl({}),{c(){t=P("div"),L(s.$$.fragment),l=V(),e=P("div"),L(o.$$.fragment),r=V(),i=P("div"),f=P("div"),L(u.$$.fragment),h=V(),L(g.$$.fragment),d=V(),L(a.$$.fragment),this.h()},l(w){t=I(w,"DIV",{id:!0});var T=S(t);R(s.$$.fragment,T),l=O(T),e=I(T,"DIV",{id:!0,class:!0});var _=S(e);R(o.$$.fragment,_),r=O(_),i=I(_,"DIV",{id:!0,class:!0});var M=S(i);f=I(M,"DIV",{id:!0,class:!0});var E=S(f);R(u.$$.fragment,E),E.forEach(v),M.forEach(v),h=O(_),R(g.$$.fragment,_),_.forEach(v),d=O(T),R(a.$$.fragment,T),T.forEach(v),this.h()},h(){b(f,"id","fuelIcon"),b(f,"class","svelte-8l0a18"),b(i,"id","gauges"),b(i,"class","svelte-8l0a18"),U(i,"height",c),b(e,"id","row"),b(e,"class","svelte-8l0a18"),b(t,"id","container"),U(t,"height",m)},m(w,T){F(w,t,T),z(s,t,null),p(t,l),p(t,e),z(o,e,null),p(e,r),p(e,i),p(i,f),z(u,f,null),p(e,h),z(g,e,null),p(t,d),z(a,t,null),k=!0},p(w,[T]){const _={};T&4&&(_.fill=w[2]),u.$set(_),T&1&&c!==(c=`${w[0]}px`)&&U(i,"height",c),T&2&&m!==(m=`${w[1]}px`)&&U(t,"height",m)},i(w){k||(y(s.$$.fragment,w),y(o.$$.fragment,w),y(u.$$.fragment,w),y(g.$$.fragment,w),y(a.$$.fragment,w),k=!0)},o(w){C(s.$$.fragment,w),C(o.$$.fragment,w),C(u.$$.fragment,w),C(g.$$.fragment,w),C(a.$$.fragment,w),k=!1},d(w){w&&v(t),$(s),$(o),$(u),$(g),$(a)}}}const At=1e3,Pt=9e3,Vl=100,Bt=8,st=250;function Ol(n,t){const s=window.devicePixelRatio,l=document.createElement("canvas");return l.width=n*s,l.height=t*s,l.style.width=n+"px",l.style.height=t+"px",l.getContext("2d").scale(s,s),l.style.position="relative",l.style.right=`${st/2}px`,l}function Ll(n,t,s){let l,e,o;he(n,je,a=>s(8,o=a));let r,i,f=1,u=1,c=1,h;function g(){if(!o.selected)return;const a=0,m=0,k=100;let w=0,T=0,_=0,M;function E(){if(!o.selected){clearTimeout(M);return}w+=10,T+=90,_-=1,s(3,f=(a+w)/At),s(5,c=(m+T)/Pt),s(4,u=(k+_)/Vl),M=setTimeout(E,100)}E()}function d(){if(!o.selected)return;const a=660,m=5e3;let k;function w(){if(!o.selected){clearTimeout(k);return}let T=Math.floor(Math.random()*2),_=Math.floor(Math.random()*90);Math.random()<=.5&&(T=-T),Math.random()<=.5&&(_=-_),s(3,f=(a+T)/At),s(5,c=(m+_)/Pt),k=setTimeout(w,100)}w()}return Dt(()=>{s(1,r=window.innerHeight-1);const a=Math.floor(r*(1-Bt/100));s(0,i=.8*a),s(6,h=Ol(i+st,i)),document.getElementById("gauges").appendChild(h),h.getContext("2d").transform(1,0,0,-1,(i+st)/2,i/2)}),n.$$.update=()=>{n.$$.dirty&16&&s(2,l=u<=.2?"red":"white"),n.$$.dirty&56&&s(7,e={speedPercent:f,rpmPercent:c,fuelPercent:u}),n.$$.dirty&193&&Xt(h,i,e),n.$$.dirty&256&&(o.selected&&o.num===6?g():o.selected&&o.num===22||o.selected&&d())},[i,r,l,f,u,c,h,e,o]}class $l extends x{constructor(t){super(),q(this,t,Ll,Dl,K,{})}}export{$l as component};
