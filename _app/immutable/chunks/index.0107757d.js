function $(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(O)}function B(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function W(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e){t.$$.on_destroy.push(W(n,e))}function ft(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],u=Math.max(n.dirty.length,r.length);for(let s=0;s<u;s+=1)l[s]=n.dirty[s]|r[s];return l}return n.dirty|r}return n.dirty}function _t(t,n,e,i,r,l){if(r){const u=L(n,e,i,l);t.p(u,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function mt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function pt(t,n,e){return t.set(e),n}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:K(1,r,x=>n[e[x]].claim_order,o))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],u=[];let s=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);s>=c;s--)u.push(n[s]);s--}for(;s>=0;s--)u.push(n[s]);l.reverse(),u.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<u.length;c++){for(;o<l.length&&u[c].claim_order>=l[o].claim_order;)o++;const a=o<l.length?l[o]:null;t.insertBefore(u[c],a)}}function R(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){w&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function xt(){return k(" ")}function bt(){return k("")}function $t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Y(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t,n){for(const e in n)Y(t,e,n[e])}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){tt(t);const l=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const s=t[u];if(n(s)){const c=e(s);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),s}}for(let u=t.claim_info.last_index-1;u>=0;u--){const s=t[u];if(n(s)){const c=e(s);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function T(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const l=[];for(let u=0;u<r.attributes.length;u++){const s=r.attributes[u];e[s.name]||l.push(s.name)}l.forEach(u=>r.removeAttribute(u))},()=>i(n))}function vt(t,n,e){return T(t,n,e,V)}function Et(t,n,e){return T(t,n,e,X)}function nt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function Nt(t){return nt(t," ")}function St(t,n){n=""+n,t.data!==n&&(t.data=n)}function kt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function At(t,n){return new t(n)}let y;function p(t){y=t}function q(){if(!y)throw new Error("Function called outside component initialization");return y}function jt(t){q().$$.on_mount.push(t)}function Ct(t){q().$$.after_update.push(t)}const h=[],M=[];let m=[];const E=[],z=Promise.resolve();let N=!1;function D(){N||(N=!0,z.then(F))}function Mt(){return D(),z}function S(t){m.push(t)}function Ot(t){E.push(t)}const v=new Set;let d=0;function F(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,p(n),et(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;M.length;)M.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;E.length;)E.pop()();N=!1,v.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}function it(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const b=new Set;let _;function Bt(){_={r:0,c:[],p:_}}function Lt(){_.r||g(_.c),_=_.p}function rt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Pt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Tt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const u=t[l],s=n[l];if(s){for(const c in u)c in s||(i[c]=1);for(const c in s)r[c]||(e[c]=s[c],r[c]=1);t[l]=s}else for(const c in u)r[c]=1}for(const u in i)u in e||(e[u]=void 0);return e}function qt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function zt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||S(()=>{const u=t.$$.on_mount.map(O).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...u):g(u),t.$$.on_mount=[]}),l.forEach(S)}function ut(t,n){const e=t.$$;e.fragment!==null&&(it(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(h.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,l,u,s=[-1]){const c=y;p(t);const o=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};u&&u(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,x,...A)=>{const j=A.length?A[0]:x;return o.ctx&&r(o.ctx[f],o.ctx[f]=j)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](j),a&&st(t,f)),x}):[],o.update(),a=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){G();const f=Z(n.target);o.fragment&&o.fragment.l(f),f.forEach(U)}else o.fragment&&o.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),J(),F()}p(c)}class Ht{$destroy(){ut(this,1),this.$destroy=$}$on(n,e){if(!B(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ct as A,ut as B,ft as C,_t as D,dt as E,at as F,R as G,$ as H,lt as I,H as J,X as K,Et as L,wt as M,Tt as N,mt as O,ht as P,$t as Q,gt as R,Ht as S,qt as T,Ot as U,g as V,pt as W,xt as a,yt as b,Nt as c,Pt as d,bt as e,Lt as f,rt as g,U as h,Ft as i,Ct as j,V as k,vt as l,Z as m,Y as n,jt as o,kt as p,k as q,nt as r,ot as s,Mt as t,St as u,Bt as v,M as w,At as x,zt as y,Dt as z};
