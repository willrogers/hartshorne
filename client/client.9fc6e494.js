function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=c(e,n,r,a);t.p(s,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function g(){return d(" ")}function m(){return d("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function _(t){return b(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function w(t){S=t}function A(){if(!S)throw new Error("Function called outside component initialization");return S}const P=[],R=[],L=[],j=[],C=Promise.resolve();let N=!1;function O(t){L.push(t)}let q=!1;const U=new Set;function k(){if(!q){q=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];w(e),H(e.$$)}for(P.length=0;R.length;)R.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];U.has(e)||(U.add(e),e())}L.length=0}while(P.length);for(;j.length;)j.pop()();N=!1,q=!1,U.clear()}}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const I=new Set;let D;function B(){D={r:0,c:[],p:D}}function T(){D.r||s(D.c),D=D.p}function V(t,e){t&&t.i&&(I.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),D.c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function z(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),O(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(O)}function G(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(P.push(t),N||(N=!0,C.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,o,a,c,i,l=[-1]){const u=S;w(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(h.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),d&&W(e,t)),n}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=v(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&V(e.$$.fragment),F(e,n.target,n.anchor),k()}w(u)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Z=[];function tt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const et={},nt=()=>({});function rt(e){let n,r,s,o,a,c,i,p,m,E,x,S,w,A,P,R,L,j,C,N,O,q,U,k,H,I;return{c(){n=h("nav"),r=h("ul"),s=h("li"),o=h("a"),a=d("Home"),i=g(),p=h("li"),m=h("a"),E=d("History"),S=g(),w=h("li"),A=h("a"),P=d("Visiting"),L=g(),j=h("li"),C=h("a"),N=d("Blog"),q=g(),U=h("li"),k=h("a"),H=d("Contact"),this.h()},l(t){n=y(t,"NAV",{class:!0});var e=v(n);r=y(e,"UL",{class:!0});var c=v(r);s=y(c,"LI",{class:!0});var l=v(s);o=y(l,"A",{"aria-current":!0,href:!0,class:!0});var u=v(o);a=b(u,"Home"),u.forEach(f),l.forEach(f),i=_(c),p=y(c,"LI",{class:!0});var h=v(p);m=y(h,"A",{"aria-current":!0,href:!0,class:!0});var d=v(m);E=b(d,"History"),d.forEach(f),h.forEach(f),S=_(c),w=y(c,"LI",{class:!0});var g=v(w);A=y(g,"A",{"aria-current":!0,href:!0,class:!0});var $=v(A);P=b($,"Visiting"),$.forEach(f),g.forEach(f),L=_(c),j=y(c,"LI",{class:!0});var x=v(j);C=y(x,"A",{"aria-current":!0,href:!0,class:!0});var R=v(C);N=b(R,"Blog"),R.forEach(f),x.forEach(f),q=_(c),U=y(c,"LI",{class:!0});var O=v(U);k=y(O,"A",{"aria-current":!0,href:!0,class:!0});var I=v(k);H=b(I,"Contact"),I.forEach(f),O.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){$(o,"aria-current",c=void 0===e[0]?"page":void 0),$(o,"href","."),$(o,"class","svelte-xiagsl"),$(s,"class","svelte-xiagsl"),$(m,"aria-current",x="history"===e[0]?"page":void 0),$(m,"href","history"),$(m,"class","svelte-xiagsl"),$(p,"class","svelte-xiagsl"),$(A,"aria-current",R="visiting"===e[0]?"page":void 0),$(A,"href","visiting"),$(A,"class","svelte-xiagsl"),$(w,"class","svelte-xiagsl"),$(C,"aria-current",O="blog"===e[0]?"page":void 0),$(C,"href","blog"),$(C,"class","svelte-xiagsl"),$(j,"class","svelte-xiagsl"),$(k,"aria-current",I="contact"===e[0]?"page":void 0),$(k,"href","contact"),$(k,"class","svelte-xiagsl"),$(U,"class","svelte-xiagsl"),$(r,"class","svelte-xiagsl"),$(n,"class","svelte-xiagsl")},m(t,e){u(t,n,e),l(n,r),l(r,s),l(s,o),l(o,a),l(r,i),l(r,p),l(p,m),l(m,E),l(r,S),l(r,w),l(w,A),l(A,P),l(r,L),l(r,j),l(j,C),l(C,N),l(r,q),l(r,U),l(U,k),l(k,H)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&$(o,"aria-current",c),1&e&&x!==(x="history"===t[0]?"page":void 0)&&$(m,"aria-current",x),1&e&&R!==(R="visiting"===t[0]?"page":void 0)&&$(A,"aria-current",R),1&e&&O!==(O="blog"===t[0]?"page":void 0)&&$(C,"aria-current",O),1&e&&I!==(I="contact"===t[0]?"page":void 0)&&$(k,"aria-current",I)},i:t,o:t,d(t){t&&f(n)}}}function st(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ot extends Q{constructor(t){super(),X(this,t,st,rt,a,{segment:0})}}function at(t){let e,n,r,s;e=new ot({props:{segment:t[0]}});const o=t[2].default,a=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(o,t,t[1],null);return{c(){Y(e.$$.fragment),n=g(),r=h("main"),a&&a.c(),this.h()},l(t){z(e.$$.fragment,t),n=_(t),r=y(t,"MAIN",{class:!0});var s=v(r);a&&a.l(s),s.forEach(f),this.h()},h(){$(r,"class","svelte-173i8jj")},m(t,o){F(e,t,o),u(t,n,o),u(t,r,o),a&&a.m(r,null),s=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),a&&a.p&&2&n&&i(a,o,t,t[1],n,null,null)},i(t){s||(V(e.$$.fragment,t),V(a,t),s=!0)},o(t){J(e.$$.fragment,t),J(a,t),s=!1},d(t){G(e,t),t&&f(n),t&&f(r),a&&a.d(t)}}}function ct(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class it extends Q{constructor(t){super(),X(this,t,ct,at,a,{segment:0})}}function lt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){e=y(t,"PRE",{});var s=v(e);n=b(s,r),s.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function ut(e){let n,r,s,o,a,c,i,p,S,w=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&lt(e);return{c(){r=g(),s=h("h1"),o=d(e[0]),a=g(),c=h("p"),i=d(w),p=g(),A&&A.c(),S=m(),this.h()},l(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),s=y(t,"H1",{class:!0});var n=v(s);o=b(n,e[0]),n.forEach(f),a=_(t),c=y(t,"P",{class:!0});var l=v(c);i=b(l,w),l.forEach(f),p=_(t),A&&A.l(t),S=m(),this.h()},h(){$(s,"class","svelte-8od9u6"),$(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,s,e),l(s,o),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),A&&A.m(t,e),u(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(o,t[0]),2&e&&w!==(w=t[1].message+"")&&E(i,w),t[2]&&t[1].stack?A?A.p(t,e):(A=lt(t),A.c(),A.m(S.parentNode,S)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(a),t&&f(c),t&&f(p),A&&A.d(t),t&&f(S)}}}function ft(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class pt extends Q{constructor(t){super(),X(this,t,ft,ut,a,{status:0,error:1})}}function ht(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&Y(n.$$.fragment),r=m()},l(t){n&&z(n.$$.fragment,t),r=m()},m(t,e){n&&F(n,t,e),u(t,r,e),s=!0},p(t,e){const s=16&e?K(o,[M(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){B();const t=n;J(t.$$.fragment,1,0,()=>{G(t,1)}),T()}a?(n=new a(c()),Y(n.$$.fragment),V(n.$$.fragment,1),F(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&V(n.$$.fragment,t),s=!0)},o(t){n&&J(n.$$.fragment,t),s=!1},d(t){t&&f(r),n&&G(n,t)}}}function dt(t){let e,n;return e=new pt({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function gt(t){let e,n,r,s;const o=[dt,ht],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){a[e].m(t,n),u(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(B(),J(a[i],1,1,()=>{a[i]=null}),T(),n=a[e],n||(n=a[e]=o[e](t),n.c()),V(n,1),n.m(r.parentNode,r))},i(t){s||(V(n),s=!0)},o(t){J(n),s=!1},d(t){a[e].d(t),t&&f(r)}}}function mt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[gt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new it({props:o}),{c(){Y(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,e){F(n,t,e),r=!0},p(t,[e]){const r=12&e?K(s,[4&e&&{segment:t[2][0]},8&e&&M(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(V(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function $t(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,A().$$.after_update.push(u),f=et,p=r,A().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,c,i,r,l]}class vt extends Q{constructor(t){super(),X(this,t,$t,mt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const yt=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],bt=[{js:()=>import("./index.00fa9c5d.js"),css:[]},{js:()=>import("./visiting.23204c0b.js"),css:[]},{js:()=>import("./contact.f56f6963.js"),css:[]},{js:()=>import("./history.3aabf418.js"),css:[]},{js:()=>import("./index.48f0065a.js"),css:[]},{js:()=>import("./[slug].ebfc45d3.js"),css:[]}],_t=(Et=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/visiting\/?$/,parts:[{i:1}]},{pattern:/^\/contact\/?$/,parts:[{i:2}]},{pattern:/^\/history\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:5,params:t=>({slug:Et(t[1])})}]}]);var Et;const xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let St,wt,At,Pt=!1,Rt=[],Lt="{}";const jt={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:tt(null),session:tt(xt&&xt.session)};let Ct,Nt;jt.session.subscribe(async t=>{if(Ct=t,!Pt)return;Nt=!0;const e=Bt(new URL(location.href)),n=wt={},{redirect:r,props:s,branch:o}=await Kt(e);n===wt&&await Jt(r,o,s,e.page)});let Ot,qt=null;let Ut,kt=1;const Ht="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},It={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Bt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(xt.baseUrl))return null;let e=t.pathname.slice(xt.baseUrl.length);if(""===e&&(e="/"),!yt.some(t=>t.test(e)))for(let n=0;n<_t.length;n+=1){const r=_t[n],s=r.pattern.exec(e);if(s){const n=Dt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Tt(){return{x:pageXOffset,y:pageYOffset}}async function Vt(t,e,n,r){if(e)Ut=e;else{const t=Tt();It[Ut]=t,e=Ut=++kt,It[Ut]=n?t:{x:0,y:0}}Ut=e,St&&jt.preloading.set(!0);const s=qt&&qt.href===t.href?qt.promise:Kt(t);qt=null;const o=wt={},{redirect:a,props:c,branch:i}=await s;if(o===wt&&(await Jt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=It[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}It[Ut]=t,t&&scrollTo(t.x,t.y)}}async function Jt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Bt(new URL(t,document.baseURI));return n?(Ht[e.replaceState?"replaceState":"pushState"]({id:Ut},"",t),Vt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(jt.page.set(r),jt.preloading.set(!1),St)St.$set(n);else{n.stores={page:{subscribe:jt.page.subscribe},preloading:{subscribe:jt.preloading.subscribe},session:jt.session},n.level0={props:await At},n.notify=jt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Yt(t.nextSibling);Yt(t),Yt(e)}St=new vt({target:Ot,props:n,hydrate:!0})}Rt=e,Lt=JSON.stringify(r.query),Pt=!0,Nt=!1}async function Kt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;At||(At=xt.preloaded[0]||nt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ct));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Lt)return!0;const s=Rt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Nt&&!u&&Rt[c]&&Rt[c].part===e.i)return Rt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Mt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(bt[e.i]);let g;return g=Pt||!xt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ct):{}:xt.preloaded[c+1],o["level"+p]={component:h,props:g,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Mt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Yt(t){t.parentNode.removeChild(t)}function zt(t){const e=Bt(new URL(t,document.baseURI));if(e)return qt&&t===qt.href||function(t,e){qt={href:t,promise:e}}(t,Kt(e)),qt.promise}let Ft;function Gt(t){clearTimeout(Ft),Ft=setTimeout(()=>{Wt(t)},20)}function Wt(t){const e=Qt(t.target);e&&"prefetch"===e.rel&&zt(e.href)}function Xt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Qt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Bt(s);if(o){Vt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Ht.pushState({id:Ut},"",s.href)}}function Qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Zt(t){if(It[Ut]=Tt(),t.state){const e=Bt(new URL(location.href));e?Vt(e,t.state.id):location.href=location.href}else kt=kt+1,function(t){Ut=t}(kt),Ht.replaceState({id:Ut},"",location.href)}var te;te={target:document.querySelector("#sapper")},"scrollRestoration"in Ht&&(Ht.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ht.scrollRestoration="auto"}),addEventListener("load",()=>{Ht.scrollRestoration="manual"}),function(t){Ot=t}(te.target),addEventListener("click",Xt),addEventListener("popstate",Zt),addEventListener("touchstart",Wt),addEventListener("mousemove",Gt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ht.replaceState({id:kt},"",e);const n=new URL(location.href);if(xt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=xt;At||(At=o&&o[0]),Jt(null,[],{error:c,status:a,session:s,level0:{props:At},level1:{props:{status:a,error:c},component:pt},segments:o},{host:e,path:n,query:Dt(r),params:{}})}();const r=Bt(n);return r?Vt(r,kt,!0,t):void 0});export{Q as S,g as a,y as b,_ as c,f as d,h as e,v as f,b as g,$ as h,X as i,u as j,l as k,E as l,p as m,t as n,x as q,a as s,d as t};