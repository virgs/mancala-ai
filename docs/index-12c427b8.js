var Co=Object.defineProperty;var To=(e,t,n)=>t in e?Co(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var me=(e,t,n)=>(To(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function fa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const q={},Et=[],Te=()=>{},Eo=()=>!1,Mo=/^on[^a-z]/,tr=e=>Mo.test(e),ua=e=>e.startsWith("onUpdate:"),oe=Object.assign,da=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},No=Object.prototype.hasOwnProperty,H=(e,t)=>No.call(e,t),N=Array.isArray,Mt=e=>rr(e)==="[object Map]",ts=e=>rr(e)==="[object Set]",j=e=>typeof e=="function",ae=e=>typeof e=="string",nr=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",ns=e=>(Z(e)||j(e))&&j(e.then)&&j(e.catch),rs=Object.prototype.toString,rr=e=>rs.call(e),Ro=e=>rr(e).slice(8,-1),as=e=>rr(e)==="[object Object]",ma=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ar=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Lo=/-(\w)/g,ze=ar(e=>e.replace(Lo,(t,n)=>n?n.toUpperCase():"")),Fo=/\B([A-Z])/g,Ht=ar(e=>e.replace(Fo,"-$1").toLowerCase()),ir=ar(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=ar(e=>e?`on${ir(e)}`:""),xt=(e,t)=>!Object.is(e,t),Bn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Yn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Br=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let qa;const jr=()=>qa||(qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pe(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ae(r)?Do(r):Pe(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(ae(e)||Z(e))return e}const Bo=/;(?![^(]*\))/g,jo=/:([^]+)/,zo=/\/\*[^]*?\*\//g;function Do(e){const t={};return e.replace(zo,"").split(Bo).forEach(n=>{if(n){const r=n.split(jo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function mn(e){let t="";if(ae(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=mn(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ho="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uo=fa(Ho);function is(e){return!!e||e===""}const vt=e=>ae(e)?e:e==null?"":N(e)||Z(e)&&(e.toString===rs||!j(e.toString))?JSON.stringify(e,ss,2):String(e),ss=(e,t)=>t&&t.__v_isRef?ss(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ts(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!N(t)&&!as(t)?String(t):t;let ke;class $o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ke,!t&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ke;try{return ke=this,t()}finally{ke=n}}}on(){ke=this}off(){ke=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Yo(e,t=ke){t&&t.active&&t.effects.push(e)}function Wo(){return ke}const ha=e=>{const t=new Set(e);return t.w=0,t.n=0,t},os=e=>(e.w&rt)>0,ls=e=>(e.n&rt)>0,Ko=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=rt},Vo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];os(a)&&!ls(a)?a.delete(e):t[n++]=a,a.w&=~rt,a.n&=~rt}t.length=n}},zr=new WeakMap;let Gt=0,rt=1;const Dr=30;let Ae;const bt=Symbol(""),Hr=Symbol("");class pa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yo(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=tt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,tt=!0,rt=1<<++Gt,Gt<=Dr?Ko(this):Xa(this),this.fn()}finally{Gt<=Dr&&Vo(this),rt=1<<--Gt,Ae=this.parent,tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(Xa(this),this.onStop&&this.onStop(),this.active=!1)}}function Xa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tt=!0;const cs=[];function Ut(){cs.push(tt),tt=!1}function $t(){const e=cs.pop();tt=e===void 0?!0:e}function ve(e,t,n){if(tt&&Ae){let r=zr.get(e);r||zr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ha()),fs(a)}}function fs(e,t){let n=!1;Gt<=Dr?ls(e)||(e.n|=rt,n=!os(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function We(e,t,n,r,a,i){const s=zr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&N(e)){const l=Number(r);s.forEach((f,d)=>{(d==="length"||!nr(d)&&d>=l)&&o.push(f)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":N(e)?ma(n)&&o.push(s.get("length")):(o.push(s.get(bt)),Mt(e)&&o.push(s.get(Hr)));break;case"delete":N(e)||(o.push(s.get(bt)),Mt(e)&&o.push(s.get(Hr)));break;case"set":Mt(e)&&o.push(s.get(bt));break}if(o.length===1)o[0]&&Ur(o[0]);else{const l=[];for(const f of o)f&&l.push(...f);Ur(ha(l))}}function Ur(e,t){const n=N(e)?e:[...e];for(const r of n)r.computed&&Ja(r);for(const r of n)r.computed||Ja(r)}function Ja(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Go=fa("__proto__,__v_isRef,__isVue"),us=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nr)),Za=qo();function qo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=$(this);for(let i=0,s=this.length;i<s;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map($)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=$(this)[t].apply(this,n);return $t(),r}}),e}function Xo(e){const t=$(this);return ve(t,"has",e),t.hasOwnProperty(e)}class ds{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?cl:gs:i?ps:hs).get(t))return t;const s=N(t);if(!a){if(s&&H(Za,n))return Reflect.get(Za,n,r);if(n==="hasOwnProperty")return Xo}const o=Reflect.get(t,n,r);return(nr(n)?us.has(n):Go(n))||(a||ve(t,"get",n),i)?o:ue(o)?s&&ma(n)?o:o.value:Z(o)?a?vs(o):ba(o):o}}class ms extends ds{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Bt(i)&&ue(i)&&!ue(r))return!1;if(!this._shallow&&(!Wn(r)&&!Bt(r)&&(i=$(i),r=$(r)),!N(t)&&ue(i)&&!ue(r)))return i.value=r,!0;const s=N(t)&&ma(n)?Number(n)<t.length:H(t,n),o=Reflect.set(t,n,r,a);return t===$(a)&&(s?xt(r,i)&&We(t,"set",n,r):We(t,"add",n,r)),o}deleteProperty(t,n){const r=H(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&We(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!nr(n)||!us.has(n))&&ve(t,"has",n),r}ownKeys(t){return ve(t,"iterate",N(t)?"length":bt),Reflect.ownKeys(t)}}class Jo extends ds{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Zo=new ms,Qo=new Jo,el=new ms(!0),ga=e=>e,sr=e=>Reflect.getPrototypeOf(e);function _n(e,t,n=!1,r=!1){e=e.__v_raw;const a=$(e),i=$(t);n||(xt(t,i)&&ve(a,"get",t),ve(a,"get",i));const{has:s}=sr(a),o=r?ga:n?xa:nn;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function wn(e,t=!1){const n=this.__v_raw,r=$(n),a=$(e);return t||(xt(e,a)&&ve(r,"has",e),ve(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Pn(e,t=!1){return e=e.__v_raw,!t&&ve($(e),"iterate",bt),Reflect.get(e,"size",e)}function Qa(e){e=$(e);const t=$(this);return sr(t).has.call(t,e)||(t.add(e),We(t,"add",e,e)),this}function ei(e,t){t=$(t);const n=$(this),{has:r,get:a}=sr(n);let i=r.call(n,e);i||(e=$(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?xt(t,s)&&We(n,"set",e,t):We(n,"add",e,t),this}function ti(e){const t=$(this),{has:n,get:r}=sr(t);let a=n.call(t,e);a||(e=$(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&We(t,"delete",e,void 0),i}function ni(){const e=$(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function Sn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=$(s),l=t?ga:e?xa:nn;return!e&&ve(o,"iterate",bt),s.forEach((f,d)=>r.call(a,l(f),l(d),i))}}function On(e,t,n){return function(...r){const a=this.__v_raw,i=$(a),s=Mt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,f=a[e](...r),d=n?ga:t?xa:nn;return!t&&ve(i,"iterate",l?Hr:bt),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:o?[d(m[0]),d(m[1])]:d(m),done:p}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:this}}function tl(){const e={get(i){return _n(this,i)},get size(){return Pn(this)},has:wn,add:Qa,set:ei,delete:ti,clear:ni,forEach:Sn(!1,!1)},t={get(i){return _n(this,i,!1,!0)},get size(){return Pn(this)},has:wn,add:Qa,set:ei,delete:ti,clear:ni,forEach:Sn(!1,!0)},n={get(i){return _n(this,i,!0)},get size(){return Pn(this,!0)},has(i){return wn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Sn(!0,!1)},r={get(i){return _n(this,i,!0,!0)},get size(){return Pn(this,!0)},has(i){return wn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=On(i,!1,!1),n[i]=On(i,!0,!1),t[i]=On(i,!1,!0),r[i]=On(i,!0,!0)}),[e,n,t,r]}const[nl,rl,al,il]=tl();function va(e,t){const n=t?e?il:al:e?rl:nl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const sl={get:va(!1,!1)},ol={get:va(!1,!0)},ll={get:va(!0,!1)},hs=new WeakMap,ps=new WeakMap,gs=new WeakMap,cl=new WeakMap;function fl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ul(e){return e.__v_skip||!Object.isExtensible(e)?0:fl(Ro(e))}function ba(e){return Bt(e)?e:ya(e,!1,Zo,sl,hs)}function dl(e){return ya(e,!1,el,ol,ps)}function vs(e){return ya(e,!0,Qo,ll,gs)}function ya(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=ul(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function Nt(e){return Bt(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function Wn(e){return!!(e&&e.__v_isShallow)}function bs(e){return Nt(e)||Bt(e)}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function ys(e){return Yn(e,"__v_skip",!0),e}const nn=e=>Z(e)?ba(e):e,xa=e=>Z(e)?vs(e):e;function xs(e){tt&&Ae&&(e=$(e),fs(e.dep||(e.dep=ha())))}function _s(e,t){e=$(e);const n=e.dep;n&&Ur(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function wr(e){return ml(e,!1)}function ml(e,t){return ue(e)?e:new hl(e,t)}class hl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:$(t),this._value=n?t:nn(t)}get value(){return xs(this),this._value}set value(t){const n=this.__v_isShallow||Wn(t)||Bt(t);t=n?t:$(t),xt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:nn(t),_s(this))}}function pl(e){return ue(e)?e.value:e}const gl={get:(e,t,n)=>pl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ue(a)&&!ue(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ws(e){return Nt(e)?e:new Proxy(e,gl)}class vl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new pa(t,()=>{this._dirty||(this._dirty=!0,_s(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=$(this);return xs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function bl(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new vl(r,a,i||!a,n)}function nt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){or(i,t,n)}return a}function Ee(e,t,n,r){if(j(e)){const i=nt(e,t,n,r);return i&&ns(i)&&i.catch(s=>{or(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function or(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){nt(l,null,10,[e,s,o]);return}}yl(e,n,a,r)}function yl(e,t,n,r=!0){console.error(e)}let rn=!1,$r=!1;const fe=[];let Be=0;const Rt=[];let Ue=null,ut=0;const Ps=Promise.resolve();let _a=null;function xl(e){const t=_a||Ps;return e?t.then(this?e.bind(this):e):t}function _l(e){let t=Be+1,n=fe.length;for(;t<n;){const r=t+n>>>1,a=fe[r],i=an(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function wa(e){(!fe.length||!fe.includes(e,rn&&e.allowRecurse?Be+1:Be))&&(e.id==null?fe.push(e):fe.splice(_l(e.id),0,e),Ss())}function Ss(){!rn&&!$r&&($r=!0,_a=Ps.then(ks))}function wl(e){const t=fe.indexOf(e);t>Be&&fe.splice(t,1)}function Pl(e){N(e)?Rt.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?ut+1:ut))&&Rt.push(e),Ss()}function ri(e,t=rn?Be+1:0){for(;t<fe.length;t++){const n=fe[t];n&&n.pre&&(fe.splice(t,1),t--,n())}}function Os(e){if(Rt.length){const t=[...new Set(Rt)];if(Rt.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>an(n)-an(r)),ut=0;ut<Ue.length;ut++)Ue[ut]();Ue=null,ut=0}}const an=e=>e.id==null?1/0:e.id,Sl=(e,t)=>{const n=an(e)-an(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ks(e){$r=!1,rn=!0,fe.sort(Sl);const t=Te;try{for(Be=0;Be<fe.length;Be++){const n=fe[Be];n&&n.active!==!1&&nt(n,null,14)}}finally{Be=0,fe.length=0,Os(),rn=!1,_a=null,(fe.length||Rt.length)&&ks()}}function Ol(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:p}=r[d]||q;p&&(a=n.map(_=>ae(_)?_.trim():_)),m&&(a=n.map(Br))}let o,l=r[o=_r(t)]||r[o=_r(ze(t))];!l&&i&&(l=r[o=_r(Ht(t))]),l&&Ee(l,e,6,a);const f=r[o+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ee(f,e,6,a)}}function As(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!j(e)){const l=f=>{const d=As(f,t,!0);d&&(o=!0,oe(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(Z(e)&&r.set(e,null),null):(N(i)?i.forEach(l=>s[l]=null):oe(s,i),Z(e)&&r.set(e,s),s)}function lr(e,t){return!e||!tr(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Ht(t))||H(e,t))}let we=null,cr=null;function Kn(e){const t=we;return we=e,cr=e&&e.type.__scopeId||null,t}function Pa(e){cr=e}function Sa(){cr=null}function kl(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&hi(-1);const i=Kn(t);let s;try{s=e(...a)}finally{Kn(i),r._d&&hi(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Pr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:f,render:d,renderCache:m,data:p,setupState:_,ctx:R,inheritAttrs:A}=e;let z,w;const O=Kn(e);try{if(n.shapeFlag&4){const T=a||r;z=Fe(d.call(T,T,m,i,_,p,R)),w=l}else{const T=t;z=Fe(T.length>1?T(i,{attrs:l,slots:o,emit:f}):T(i,null)),w=t.props?l:Al(l)}}catch(T){Zt.length=0,or(T,e,1),z=U(_t)}let L=z;if(w&&A!==!1){const T=Object.keys(w),{shapeFlag:Y}=L;T.length&&Y&7&&(s&&T.some(ua)&&(w=Il(w,s)),L=jt(L,w))}return n.dirs&&(L=jt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),z=L,Kn(O),z}const Al=e=>{let t;for(const n in e)(n==="class"||n==="style"||tr(n))&&((t||(t={}))[n]=e[n]);return t},Il=(e,t)=>{const n={};for(const r in e)(!ua(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Cl(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ai(r,s,f):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const p=d[m];if(s[p]!==r[p]&&!lr(f,p))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?ai(r,s,f):!0:!!s;return!1}function ai(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!lr(n,i))return!0}return!1}function Tl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Is="components";function Ke(e,t){return Ml(Is,e,!0,t)||e}const El=Symbol.for("v-ndc");function Ml(e,t,n=!0,r=!1){const a=we||se;if(a){const i=a.type;if(e===Is){const o=Ac(i,!1);if(o&&(o===t||o===ze(t)||o===ir(ze(t))))return i}const s=ii(a[e]||i[e],t)||ii(a.appContext[e],t);return!s&&r?i:s}}function ii(e,t){return e&&(e[t]||e[ze(t)]||e[ir(ze(t))])}const Nl=e=>e.__isSuspense;function Rl(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):Pl(e)}const kn={};function Lt(e,t,n){return Cs(e,t,n)}function Cs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=q){var o;const l=Wo()===((o=se)==null?void 0:o.scope)?se:null;let f,d=!1,m=!1;if(ue(e)?(f=()=>e.value,d=Wn(e)):Nt(e)?(f=()=>e,r=!0):N(e)?(m=!0,d=e.some(T=>Nt(T)||Wn(T)),f=()=>e.map(T=>{if(ue(T))return T.value;if(Nt(T))return mt(T);if(j(T))return nt(T,l,2)})):j(e)?t?f=()=>nt(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),Ee(e,l,3,[_])}:f=Te,t&&r){const T=f;f=()=>mt(T())}let p,_=T=>{p=O.onStop=()=>{nt(T,l,4)}},R;if(on)if(_=Te,t?n&&Ee(t,l,3,[f(),m?[]:void 0,_]):f(),a==="sync"){const T=Ec();R=T.__watcherHandles||(T.__watcherHandles=[])}else return Te;let A=m?new Array(e.length).fill(kn):kn;const z=()=>{if(O.active)if(t){const T=O.run();(r||d||(m?T.some((Y,le)=>xt(Y,A[le])):xt(T,A)))&&(p&&p(),Ee(t,l,3,[T,A===kn?void 0:m&&A[0]===kn?[]:A,_]),A=T)}else O.run()};z.allowRecurse=!!t;let w;a==="sync"?w=z:a==="post"?w=()=>ge(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),w=()=>wa(z));const O=new pa(f,w);t?n?z():A=O.run():a==="post"?ge(O.run.bind(O),l&&l.suspense):O.run();const L=()=>{O.stop(),l&&l.scope&&da(l.scope.effects,O)};return R&&R.push(L),L}function Ll(e,t,n){const r=this.proxy,a=ae(e)?e.includes(".")?Ts(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const s=se;zt(this);const o=Cs(a,i.bind(r),n);return s?zt(s):yt(),o}function Ts(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function mt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))mt(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)mt(e[n],t);else if(ts(e)||Mt(e))e.forEach(n=>{mt(n,t)});else if(as(e))for(const n in e)mt(e[n],t);return e}function Fl(e,t){const n=we;if(n===null)return e;const r=mr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,l,f=q]=t[i];s&&(j(s)&&(s={mounted:s,updated:s}),s.deep&&mt(o),a.push({dir:s,instance:r,value:o,oldValue:void 0,arg:l,modifiers:f}))}return e}function ct(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Ut(),Ee(l,n,8,[e.el,o,e,t]),$t())}}/*! #__NO_SIDE_EFFECTS__ */function Es(e,t){return j(e)?(()=>oe({name:e.name},t,{setup:e}))():e}const jn=e=>!!e.type.__asyncLoader,Ms=e=>e.type.__isKeepAlive;function Bl(e,t){Ns(e,"a",t)}function jl(e,t){Ns(e,"da",t)}function Ns(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(fr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ms(a.parent.vnode)&&zl(r,t,n,a),a=a.parent}}function zl(e,t,n,r){const a=fr(t,e,r,!0);Rs(()=>{da(r[t],a)},n)}function fr(e,t,n=se,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Ut(),zt(n);const o=Ee(t,n,e,s);return yt(),$t(),o});return r?a.unshift(i):a.push(i),i}}const Xe=e=>(t,n=se)=>(!on||e==="sp")&&fr(e,(...r)=>t(...r),n),Dl=Xe("bm"),Hl=Xe("m"),Ul=Xe("bu"),$l=Xe("u"),Yl=Xe("bum"),Rs=Xe("um"),Wl=Xe("sp"),Kl=Xe("rtg"),Vl=Xe("rtc");function Gl(e,t=se){fr("ec",e,t)}function Vn(e,t,n,r){let a;const i=n&&n[r];if(N(e)||ae(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(Z(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const f=s[o];a[o]=t(e[f],f,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const Yr=e=>e?Ws(e)?mr(e)||e.proxy:Yr(e.parent):null,Jt=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yr(e.parent),$root:e=>Yr(e.root),$emit:e=>e.emit,$options:e=>Oa(e),$forceUpdate:e=>e.f||(e.f=()=>wa(e.update)),$nextTick:e=>e.n||(e.n=xl.bind(e.proxy)),$watch:e=>Ll.bind(e)}),Sr=(e,t)=>e!==q&&!e.__isScriptSetup&&H(e,t),ql={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let f;if(t[0]!=="$"){const _=s[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Sr(r,t))return s[t]=1,r[t];if(a!==q&&H(a,t))return s[t]=2,a[t];if((f=e.propsOptions[0])&&H(f,t))return s[t]=3,i[t];if(n!==q&&H(n,t))return s[t]=4,n[t];Wr&&(s[t]=0)}}const d=Jt[t];let m,p;if(d)return t==="$attrs"&&ve(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==q&&H(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,H(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Sr(a,t)?(a[t]=n,!0):r!==q&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==q&&H(e,s)||Sr(t,s)||(o=i[0])&&H(o,s)||H(r,s)||H(Jt,s)||H(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function si(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Wr=!0;function Xl(e){const t=Oa(e),n=e.proxy,r=e.ctx;Wr=!1,t.beforeCreate&&oi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:f,created:d,beforeMount:m,mounted:p,beforeUpdate:_,updated:R,activated:A,deactivated:z,beforeDestroy:w,beforeUnmount:O,destroyed:L,unmounted:T,render:Y,renderTracked:le,renderTriggered:ce,errorCaptured:Se,serverPrefetch:_e,expose:De,inheritAttrs:Wt,components:vn,directives:bn,filters:br}=t;if(f&&Jl(f,r,null),s)for(const ee in s){const V=s[ee];j(V)&&(r[ee]=V.bind(n))}if(a){const ee=a.call(n,n);Z(ee)&&(e.data=ba(ee))}if(Wr=!0,i)for(const ee in i){const V=i[ee],ot=j(V)?V.bind(n,n):j(V.get)?V.get.bind(n,n):Te,yn=!j(V)&&j(V.set)?V.set.bind(n):Te,lt=$e({get:ot,set:yn});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Ne=>lt.value=Ne})}if(o)for(const ee in o)Ls(o[ee],r,n,ee);if(l){const ee=j(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(V=>{rc(V,ee[V])})}d&&oi(d,e,"c");function de(ee,V){N(V)?V.forEach(ot=>ee(ot.bind(n))):V&&ee(V.bind(n))}if(de(Dl,m),de(Hl,p),de(Ul,_),de($l,R),de(Bl,A),de(jl,z),de(Gl,Se),de(Vl,le),de(Kl,ce),de(Yl,O),de(Rs,T),de(Wl,_e),N(De))if(De.length){const ee=e.exposed||(e.exposed={});De.forEach(V=>{Object.defineProperty(ee,V,{get:()=>n[V],set:ot=>n[V]=ot})})}else e.exposed||(e.exposed={});Y&&e.render===Te&&(e.render=Y),Wt!=null&&(e.inheritAttrs=Wt),vn&&(e.components=vn),bn&&(e.directives=bn)}function Jl(e,t,n=Te){N(e)&&(e=Kr(e));for(const r in e){const a=e[r];let i;Z(a)?"default"in a?i=zn(a.from||r,a.default,!0):i=zn(a.from||r):i=zn(a),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function oi(e,t,n){Ee(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ls(e,t,n,r){const a=r.includes(".")?Ts(n,r):()=>n[r];if(ae(e)){const i=t[e];j(i)&&Lt(a,i)}else if(j(e))Lt(a,e.bind(n));else if(Z(e))if(N(e))e.forEach(i=>Ls(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Lt(a,i,e)}}function Oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Gn(l,f,s,!0)),Gn(l,t,s)),Z(t)&&i.set(t,l),l}function Gn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Gn(e,i,n,!0),a&&a.forEach(s=>Gn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Zl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Zl={data:li,props:ci,emits:ci,methods:qt,computed:qt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:qt,directives:qt,watch:ec,provide:li,inject:Ql};function li(e,t){return t?e?function(){return oe(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Ql(e,t){return qt(Kr(e),Kr(t))}function Kr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?oe(Object.create(null),e,t):t}function ci(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:oe(Object.create(null),si(e),si(t??{})):t}function ec(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function Fs(){return{app:null,config:{isNativeTag:Eo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tc=0;function nc(e,t){return function(r,a=null){j(r)||(r=oe({},r)),a!=null&&!Z(a)&&(a=null);const i=Fs(),s=new WeakSet;let o=!1;const l=i.app={_uid:tc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Mc,get config(){return i.config},set config(f){},use(f,...d){return s.has(f)||(f&&j(f.install)?(s.add(f),f.install(l,...d)):j(f)&&(s.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,m){if(!o){const p=U(r,a);return p.appContext=i,d&&t?t(p,f):e(p,f,m),o=!0,l._container=f,f.__vue_app__=l,mr(p.component)||p.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){qn=l;try{return f()}finally{qn=null}}};return l}}let qn=null;function rc(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function zn(e,t,n=!1){const r=se||we;if(r||qn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:qn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function ac(e,t,n,r=!1){const a={},i={};Yn(i,dr,1),e.propsDefaults=Object.create(null),Bs(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:dl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function ic(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=$(a),[l]=e.propsOptions;let f=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let p=d[m];if(lr(e.emitsOptions,p))continue;const _=t[p];if(l)if(H(i,p))_!==i[p]&&(i[p]=_,f=!0);else{const R=ze(p);a[R]=Vr(l,o,R,_,e,!1)}else _!==i[p]&&(i[p]=_,f=!0)}}}else{Bs(e,t,a,i)&&(f=!0);let d;for(const m in o)(!t||!H(t,m)&&((d=Ht(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Vr(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!H(t,m))&&(delete i[m],f=!0)}f&&We(e,"set","$attrs")}function Bs(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(Fn(l))continue;const f=t[l];let d;a&&H(a,d=ze(l))?!i||!i.includes(d)?n[d]=f:(o||(o={}))[d]=f:lr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,s=!0)}if(i){const l=$(n),f=o||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Vr(a,l,m,f[m],e,!H(f,m))}}return s}function Vr(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=H(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&j(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(zt(a),r=f[n]=l.call(null,t),yt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}function js(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[p,_]=js(m,t,!0);oe(s,p),_&&o.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Z(e)&&r.set(e,Et),Et;if(N(i))for(let d=0;d<i.length;d++){const m=ze(i[d]);fi(m)&&(s[m]=q)}else if(i)for(const d in i){const m=ze(d);if(fi(m)){const p=i[d],_=s[m]=N(p)||j(p)?{type:p}:oe({},p);if(_){const R=mi(Boolean,_.type),A=mi(String,_.type);_[0]=R>-1,_[1]=A<0||R<A,(R>-1||H(_,"default"))&&o.push(m)}}}const f=[s,o];return Z(e)&&r.set(e,f),f}function fi(e){return e[0]!=="$"}function ui(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function di(e,t){return ui(e)===ui(t)}function mi(e,t){return N(t)?t.findIndex(n=>di(n,e)):j(t)&&di(t,e)?0:-1}const zs=e=>e[0]==="_"||e==="$stable",ka=e=>N(e)?e.map(Fe):[Fe(e)],sc=(e,t,n)=>{if(t._n)return t;const r=kl((...a)=>ka(t(...a)),n);return r._c=!1,r},Ds=(e,t,n)=>{const r=e._ctx;for(const a in e){if(zs(a))continue;const i=e[a];if(j(i))t[a]=sc(a,i,r);else if(i!=null){const s=ka(i);t[a]=()=>s}}},Hs=(e,t)=>{const n=ka(t);e.slots.default=()=>n},oc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=$(t),Yn(t,"_",n)):Ds(t,e.slots={})}else e.slots={},t&&Hs(e,t);Yn(e.slots,dr,1)},lc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=q;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(oe(a,t),!n&&o===1&&delete a._):(i=!t.$stable,Ds(t,a)),s=t}else t&&(Hs(e,t),s={default:1});if(i)for(const o in a)!zs(o)&&s[o]==null&&delete a[o]};function Gr(e,t,n,r,a=!1){if(N(e)){e.forEach((p,_)=>Gr(p,t&&(N(t)?t[_]:t),n,r,a));return}if(jn(r)&&!a)return;const i=r.shapeFlag&4?mr(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,f=t&&t.r,d=o.refs===q?o.refs={}:o.refs,m=o.setupState;if(f!=null&&f!==l&&(ae(f)?(d[f]=null,H(m,f)&&(m[f]=null)):ue(f)&&(f.value=null)),j(l))nt(l,o,12,[s,d]);else{const p=ae(l),_=ue(l);if(p||_){const R=()=>{if(e.f){const A=p?H(m,l)?m[l]:d[l]:l.value;a?N(A)&&da(A,i):N(A)?A.includes(i)||A.push(i):p?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else p?(d[l]=s,H(m,l)&&(m[l]=s)):_&&(l.value=s,e.k&&(d[e.k]=s))};s?(R.id=-1,ge(R,n)):R()}}}const ge=Rl;function cc(e){return fc(e)}function fc(e,t){const n=jr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:f,setElementText:d,parentNode:m,nextSibling:p,setScopeId:_=Te,insertStaticContent:R}=e,A=(c,u,h,g=null,v=null,x=null,S=!1,y=null,P=!!u.dynamicChildren)=>{if(c===u)return;c&&!Vt(c,u)&&(g=xn(c),Ne(c,v,x,!0),c=null),u.patchFlag===-2&&(P=!1,u.dynamicChildren=null);const{type:b,ref:E,shapeFlag:I}=u;switch(b){case ur:z(c,u,h,g);break;case _t:w(c,u,h,g);break;case Or:c==null&&O(u,h,g,S);break;case ye:vn(c,u,h,g,v,x,S,y,P);break;default:I&1?Y(c,u,h,g,v,x,S,y,P):I&6?bn(c,u,h,g,v,x,S,y,P):(I&64||I&128)&&b.process(c,u,h,g,v,x,S,y,P,Ot)}E!=null&&v&&Gr(E,c&&c.ref,x,u||c,!u)},z=(c,u,h,g)=>{if(c==null)r(u.el=o(u.children),h,g);else{const v=u.el=c.el;u.children!==c.children&&f(v,u.children)}},w=(c,u,h,g)=>{c==null?r(u.el=l(u.children||""),h,g):u.el=c.el},O=(c,u,h,g)=>{[c.el,c.anchor]=R(c.children,u,h,g,c.el,c.anchor)},L=({el:c,anchor:u},h,g)=>{let v;for(;c&&c!==u;)v=p(c),r(c,h,g),c=v;r(u,h,g)},T=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=p(c),a(c),c=h;a(u)},Y=(c,u,h,g,v,x,S,y,P)=>{S=S||u.type==="svg",c==null?le(u,h,g,v,x,S,y,P):_e(c,u,v,x,S,y,P)},le=(c,u,h,g,v,x,S,y)=>{let P,b;const{type:E,props:I,shapeFlag:M,transition:F,dirs:D}=c;if(P=c.el=s(c.type,x,I&&I.is,I),M&8?d(P,c.children):M&16&&Se(c.children,P,null,g,v,x&&E!=="foreignObject",S,y),D&&ct(c,null,g,"created"),ce(P,c,c.scopeId,S,g),I){for(const W in I)W!=="value"&&!Fn(W)&&i(P,W,null,I[W],x,c.children,g,v,He);"value"in I&&i(P,"value",null,I.value),(b=I.onVnodeBeforeMount)&&Le(b,g,c)}D&&ct(c,null,g,"beforeMount");const G=uc(v,F);G&&F.beforeEnter(P),r(P,u,h),((b=I&&I.onVnodeMounted)||G||D)&&ge(()=>{b&&Le(b,g,c),G&&F.enter(P),D&&ct(c,null,g,"mounted")},v)},ce=(c,u,h,g,v)=>{if(h&&_(c,h),g)for(let x=0;x<g.length;x++)_(c,g[x]);if(v){let x=v.subTree;if(u===x){const S=v.vnode;ce(c,S,S.scopeId,S.slotScopeIds,v.parent)}}},Se=(c,u,h,g,v,x,S,y,P=0)=>{for(let b=P;b<c.length;b++){const E=c[b]=y?et(c[b]):Fe(c[b]);A(null,E,u,h,g,v,x,S,y)}},_e=(c,u,h,g,v,x,S)=>{const y=u.el=c.el;let{patchFlag:P,dynamicChildren:b,dirs:E}=u;P|=c.patchFlag&16;const I=c.props||q,M=u.props||q;let F;h&&ft(h,!1),(F=M.onVnodeBeforeUpdate)&&Le(F,h,u,c),E&&ct(u,c,h,"beforeUpdate"),h&&ft(h,!0);const D=v&&u.type!=="foreignObject";if(b?De(c.dynamicChildren,b,y,h,g,D,x):S||V(c,u,y,null,h,g,D,x,!1),P>0){if(P&16)Wt(y,u,I,M,h,g,v);else if(P&2&&I.class!==M.class&&i(y,"class",null,M.class,v),P&4&&i(y,"style",I.style,M.style,v),P&8){const G=u.dynamicProps;for(let W=0;W<G.length;W++){const re=G[W],Oe=I[re],kt=M[re];(kt!==Oe||re==="value")&&i(y,re,Oe,kt,v,c.children,h,g,He)}}P&1&&c.children!==u.children&&d(y,u.children)}else!S&&b==null&&Wt(y,u,I,M,h,g,v);((F=M.onVnodeUpdated)||E)&&ge(()=>{F&&Le(F,h,u,c),E&&ct(u,c,h,"updated")},g)},De=(c,u,h,g,v,x,S)=>{for(let y=0;y<u.length;y++){const P=c[y],b=u[y],E=P.el&&(P.type===ye||!Vt(P,b)||P.shapeFlag&70)?m(P.el):h;A(P,b,E,null,g,v,x,S,!0)}},Wt=(c,u,h,g,v,x,S)=>{if(h!==g){if(h!==q)for(const y in h)!Fn(y)&&!(y in g)&&i(c,y,h[y],null,S,u.children,v,x,He);for(const y in g){if(Fn(y))continue;const P=g[y],b=h[y];P!==b&&y!=="value"&&i(c,y,b,P,S,u.children,v,x,He)}"value"in g&&i(c,"value",h.value,g.value)}},vn=(c,u,h,g,v,x,S,y,P)=>{const b=u.el=c?c.el:o(""),E=u.anchor=c?c.anchor:o("");let{patchFlag:I,dynamicChildren:M,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),c==null?(r(b,h,g),r(E,h,g),Se(u.children,h,E,v,x,S,y,P)):I>0&&I&64&&M&&c.dynamicChildren?(De(c.dynamicChildren,M,h,v,x,S,y),(u.key!=null||v&&u===v.subTree)&&Us(c,u,!0)):V(c,u,h,E,v,x,S,y,P)},bn=(c,u,h,g,v,x,S,y,P)=>{u.slotScopeIds=y,c==null?u.shapeFlag&512?v.ctx.activate(u,h,g,S,P):br(u,h,g,v,x,S,P):$a(c,u,P)},br=(c,u,h,g,v,x,S)=>{const y=c.component=wc(c,g,v);if(Ms(c)&&(y.ctx.renderer=Ot),Pc(y),y.asyncDep){if(v&&v.registerDep(y,de),!c.el){const P=y.subTree=U(_t);w(null,P,u,h)}return}de(y,c,u,h,v,x,S)},$a=(c,u,h)=>{const g=u.component=c.component;if(Cl(c,u,h))if(g.asyncDep&&!g.asyncResolved){ee(g,u,h);return}else g.next=u,wl(g.update),g.update();else u.el=c.el,g.vnode=u},de=(c,u,h,g,v,x,S)=>{const y=()=>{if(c.isMounted){let{next:E,bu:I,u:M,parent:F,vnode:D}=c,G=E,W;ft(c,!1),E?(E.el=D.el,ee(c,E,S)):E=D,I&&Bn(I),(W=E.props&&E.props.onVnodeBeforeUpdate)&&Le(W,F,E,D),ft(c,!0);const re=Pr(c),Oe=c.subTree;c.subTree=re,A(Oe,re,m(Oe.el),xn(Oe),c,v,x),E.el=re.el,G===null&&Tl(c,re.el),M&&ge(M,v),(W=E.props&&E.props.onVnodeUpdated)&&ge(()=>Le(W,F,E,D),v)}else{let E;const{el:I,props:M}=u,{bm:F,m:D,parent:G}=c,W=jn(u);if(ft(c,!1),F&&Bn(F),!W&&(E=M&&M.onVnodeBeforeMount)&&Le(E,G,u),ft(c,!0),I&&xr){const re=()=>{c.subTree=Pr(c),xr(I,c.subTree,c,v,null)};W?u.type.__asyncLoader().then(()=>!c.isUnmounted&&re()):re()}else{const re=c.subTree=Pr(c);A(null,re,h,g,c,v,x),u.el=re.el}if(D&&ge(D,v),!W&&(E=M&&M.onVnodeMounted)){const re=u;ge(()=>Le(E,G,re),v)}(u.shapeFlag&256||G&&jn(G.vnode)&&G.vnode.shapeFlag&256)&&c.a&&ge(c.a,v),c.isMounted=!0,u=h=g=null}},P=c.effect=new pa(y,()=>wa(b),c.scope),b=c.update=()=>P.run();b.id=c.uid,ft(c,!0),b()},ee=(c,u,h)=>{u.component=c;const g=c.vnode.props;c.vnode=u,c.next=null,ic(c,u.props,g,h),lc(c,u.children,h),Ut(),ri(),$t()},V=(c,u,h,g,v,x,S,y,P=!1)=>{const b=c&&c.children,E=c?c.shapeFlag:0,I=u.children,{patchFlag:M,shapeFlag:F}=u;if(M>0){if(M&128){yn(b,I,h,g,v,x,S,y,P);return}else if(M&256){ot(b,I,h,g,v,x,S,y,P);return}}F&8?(E&16&&He(b,v,x),I!==b&&d(h,I)):E&16?F&16?yn(b,I,h,g,v,x,S,y,P):He(b,v,x,!0):(E&8&&d(h,""),F&16&&Se(I,h,g,v,x,S,y,P))},ot=(c,u,h,g,v,x,S,y,P)=>{c=c||Et,u=u||Et;const b=c.length,E=u.length,I=Math.min(b,E);let M;for(M=0;M<I;M++){const F=u[M]=P?et(u[M]):Fe(u[M]);A(c[M],F,h,null,v,x,S,y,P)}b>E?He(c,v,x,!0,!1,I):Se(u,h,g,v,x,S,y,P,I)},yn=(c,u,h,g,v,x,S,y,P)=>{let b=0;const E=u.length;let I=c.length-1,M=E-1;for(;b<=I&&b<=M;){const F=c[b],D=u[b]=P?et(u[b]):Fe(u[b]);if(Vt(F,D))A(F,D,h,null,v,x,S,y,P);else break;b++}for(;b<=I&&b<=M;){const F=c[I],D=u[M]=P?et(u[M]):Fe(u[M]);if(Vt(F,D))A(F,D,h,null,v,x,S,y,P);else break;I--,M--}if(b>I){if(b<=M){const F=M+1,D=F<E?u[F].el:g;for(;b<=M;)A(null,u[b]=P?et(u[b]):Fe(u[b]),h,D,v,x,S,y,P),b++}}else if(b>M)for(;b<=I;)Ne(c[b],v,x,!0),b++;else{const F=b,D=b,G=new Map;for(b=D;b<=M;b++){const be=u[b]=P?et(u[b]):Fe(u[b]);be.key!=null&&G.set(be.key,b)}let W,re=0;const Oe=M-D+1;let kt=!1,Ka=0;const Kt=new Array(Oe);for(b=0;b<Oe;b++)Kt[b]=0;for(b=F;b<=I;b++){const be=c[b];if(re>=Oe){Ne(be,v,x,!0);continue}let Re;if(be.key!=null)Re=G.get(be.key);else for(W=D;W<=M;W++)if(Kt[W-D]===0&&Vt(be,u[W])){Re=W;break}Re===void 0?Ne(be,v,x,!0):(Kt[Re-D]=b+1,Re>=Ka?Ka=Re:kt=!0,A(be,u[Re],h,null,v,x,S,y,P),re++)}const Va=kt?dc(Kt):Et;for(W=Va.length-1,b=Oe-1;b>=0;b--){const be=D+b,Re=u[be],Ga=be+1<E?u[be+1].el:g;Kt[b]===0?A(null,Re,h,Ga,v,x,S,y,P):kt&&(W<0||b!==Va[W]?lt(Re,h,Ga,2):W--)}}},lt=(c,u,h,g,v=null)=>{const{el:x,type:S,transition:y,children:P,shapeFlag:b}=c;if(b&6){lt(c.component.subTree,u,h,g);return}if(b&128){c.suspense.move(u,h,g);return}if(b&64){S.move(c,u,h,Ot);return}if(S===ye){r(x,u,h);for(let I=0;I<P.length;I++)lt(P[I],u,h,g);r(c.anchor,u,h);return}if(S===Or){L(c,u,h);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,h),ge(()=>y.enter(x),v);else{const{leave:I,delayLeave:M,afterLeave:F}=y,D=()=>r(x,u,h),G=()=>{I(x,()=>{D(),F&&F()})};M?M(x,D,G):G()}else r(x,u,h)},Ne=(c,u,h,g=!1,v=!1)=>{const{type:x,props:S,ref:y,children:P,dynamicChildren:b,shapeFlag:E,patchFlag:I,dirs:M}=c;if(y!=null&&Gr(y,null,h,c,!0),E&256){u.ctx.deactivate(c);return}const F=E&1&&M,D=!jn(c);let G;if(D&&(G=S&&S.onVnodeBeforeUnmount)&&Le(G,u,c),E&6)Io(c.component,h,g);else{if(E&128){c.suspense.unmount(h,g);return}F&&ct(c,null,u,"beforeUnmount"),E&64?c.type.remove(c,u,h,v,Ot,g):b&&(x!==ye||I>0&&I&64)?He(b,u,h,!1,!0):(x===ye&&I&384||!v&&E&16)&&He(P,u,h),g&&Ya(c)}(D&&(G=S&&S.onVnodeUnmounted)||F)&&ge(()=>{G&&Le(G,u,c),F&&ct(c,null,u,"unmounted")},h)},Ya=c=>{const{type:u,el:h,anchor:g,transition:v}=c;if(u===ye){Ao(h,g);return}if(u===Or){T(c);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:y}=v,P=()=>S(h,x);y?y(c.el,x,P):P()}else x()},Ao=(c,u)=>{let h;for(;c!==u;)h=p(c),a(c),c=h;a(u)},Io=(c,u,h)=>{const{bum:g,scope:v,update:x,subTree:S,um:y}=c;g&&Bn(g),v.stop(),x&&(x.active=!1,Ne(S,c,u,h)),y&&ge(y,u),ge(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},He=(c,u,h,g=!1,v=!1,x=0)=>{for(let S=x;S<c.length;S++)Ne(c[S],u,h,g,v)},xn=c=>c.shapeFlag&6?xn(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),Wa=(c,u,h)=>{c==null?u._vnode&&Ne(u._vnode,null,null,!0):A(u._vnode||null,c,u,null,null,null,h),ri(),Os(),u._vnode=c},Ot={p:A,um:Ne,m:lt,r:Ya,mt:br,mc:Se,pc:V,pbc:De,n:xn,o:e};let yr,xr;return t&&([yr,xr]=t(Ot)),{render:Wa,hydrate:yr,createApp:nc(Wa,yr)}}function ft({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Us(e,t,n=!1){const r=e.children,a=t.children;if(N(r)&&N(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=et(a[i]),o.el=s.el),n||Us(s,o)),o.type===ur&&(o.el=s.el)}}function dc(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<f?i=o+1:s=o;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const mc=e=>e.__isTeleport,ye=Symbol.for("v-fgt"),ur=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),Zt=[];let Ie=null;function Q(e=!1){Zt.push(Ie=e?null:[])}function hc(){Zt.pop(),Ie=Zt[Zt.length-1]||null}let sn=1;function hi(e){sn+=e}function $s(e){return e.dynamicChildren=sn>0?Ie||Et:null,hc(),sn>0&&Ie&&Ie.push(e),e}function te(e,t,n,r,a,i){return $s(B(e,t,n,r,a,i,!0))}function pc(e,t,n,r,a){return $s(U(e,t,n,r,a,!0))}function qr(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const dr="__vInternal",Ys=({key:e})=>e??null,Dn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ae(e)||ue(e)||j(e)?{i:we,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,r=0,a=null,i=e===ye?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ys(t),ref:t&&Dn(t),scopeId:cr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:we};return o?(Aa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),sn>0&&!s&&Ie&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ie.push(l),l}const U=gc;function gc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===El)&&(e=_t),qr(e)){const o=jt(e,t,!0);return n&&Aa(o,n),sn>0&&!i&&Ie&&(o.shapeFlag&6?Ie[Ie.indexOf(e)]=o:Ie.push(o)),o.patchFlag|=-2,o}if(Ic(e)&&(e=e.__vccOpts),t){t=vc(t);let{class:o,style:l}=t;o&&!ae(o)&&(t.class=mn(o)),Z(l)&&(bs(l)&&!N(l)&&(l=oe({},l)),t.style=Pe(l))}const s=ae(e)?1:Nl(e)?128:mc(e)?64:Z(e)?4:j(e)?2:0;return B(e,t,n,r,a,s,i,!0)}function vc(e){return e?bs(e)||dr in e?oe({},e):e:null}function jt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?yc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Ys(o),ref:t&&t.ref?n&&a?N(a)?a.concat(Dn(t)):[a,Dn(t)]:Dn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function bc(e=" ",t=0){return U(ur,null,e,t)}function Qt(e="",t=!1){return t?(Q(),pc(_t,null,e)):U(_t,null,e)}function Fe(e){return e==null||typeof e=="boolean"?U(_t):N(e)?U(ye,null,e.slice()):typeof e=="object"?et(e):U(ur,null,String(e))}function et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Aa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Aa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(dr in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[bc(t)]):n=8);e.children=t,e.shapeFlag|=n}function yc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=mn([t.class,r.class]));else if(a==="style")t.style=Pe([t.style,r.style]);else if(tr(a)){const i=t[a],s=r[a];s&&i!==s&&!(N(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Le(e,t,n,r=null){Ee(e,t,7,[n,r])}const xc=Fs();let _c=0;function wc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||xc,i={uid:_c++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new $o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:js(r,a),emitsOptions:As(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ol.bind(null,i),e.ce&&e.ce(i),i}let se=null,Ia,At,pi="__VUE_INSTANCE_SETTERS__";(At=jr()[pi])||(At=jr()[pi]=[]),At.push(e=>se=e),Ia=e=>{At.length>1?At.forEach(t=>t(e)):At[0](e)};const zt=e=>{Ia(e),e.scope.on()},yt=()=>{se&&se.scope.off(),Ia(null)};function Ws(e){return e.vnode.shapeFlag&4}let on=!1;function Pc(e,t=!1){on=t;const{props:n,children:r}=e.vnode,a=Ws(e);ac(e,n,a,t),oc(e,r);const i=a?Sc(e,t):void 0;return on=!1,i}function Sc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ys(new Proxy(e.ctx,ql));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?kc(e):null;zt(e),Ut();const i=nt(r,e,0,[e.props,a]);if($t(),yt(),ns(i)){if(i.then(yt,yt),t)return i.then(s=>{gi(e,s,t)}).catch(s=>{or(s,e,0)});e.asyncDep=i}else gi(e,i,t)}else Ks(e,t)}function gi(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=ws(t)),Ks(e,n)}let vi;function Ks(e,t,n){const r=e.type;if(!e.render){if(!t&&vi&&!r.render){const a=r.template||Oa(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,f=oe(oe({isCustomElement:i,delimiters:o},s),l);r.render=vi(a,f)}}e.render=r.render||Te}{zt(e),Ut();try{Xl(e)}finally{$t(),yt()}}}function Oc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}}))}function kc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Oc(e)},slots:e.slots,emit:e.emit,expose:t}}function mr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ws(ys(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jt)return Jt[n](e)},has(t,n){return n in t||n in Jt}}))}function Ac(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function Ic(e){return j(e)&&"__vccOpts"in e}const $e=(e,t)=>bl(e,t,on);function Cc(e,t,n){const r=arguments.length;return r===2?Z(t)&&!N(t)?qr(t)?U(e,null,[t]):U(e,t):U(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qr(n)&&(n=[n]),U(e,t,n))}const Tc=Symbol.for("v-scx"),Ec=()=>zn(Tc),Mc="3.3.8",Nc="http://www.w3.org/2000/svg",dt=typeof document<"u"?document:null,bi=dt&&dt.createElement("template"),Rc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?dt.createElementNS(Nc,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{bi.innerHTML=r?`<svg>${e}</svg>`:e;const o=bi.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lc=Symbol("_vtc");function Fc(e,t,n){const r=e[Lc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Bc=Symbol("_vod");function jc(e,t,n){const r=e.style,a=ae(n);if(n&&!a){if(t&&!ae(t))for(const i in t)n[i]==null&&Xr(r,i,"");for(const i in n)Xr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Bc in e&&(r.display=i)}}const yi=/\s*!important$/;function Xr(e,t,n){if(N(n))n.forEach(r=>Xr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=zc(e,t);yi.test(n)?e.setProperty(Ht(r),n.replace(yi,""),"important"):e[r]=n}}const xi=["Webkit","Moz","ms"],kr={};function zc(e,t){const n=kr[t];if(n)return n;let r=ze(t);if(r!=="filter"&&r in e)return kr[t]=r;r=ir(r);for(let a=0;a<xi.length;a++){const i=xi[a]+r;if(i in e)return kr[t]=i}return t}const _i="http://www.w3.org/1999/xlink";function Dc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_i,t.slice(6,t.length)):e.setAttributeNS(_i,t,n);else{const i=Uo(t);n==null||i&&!is(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Hc(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const f=o==="OPTION"?e.getAttribute("value"):e.value,d=n??"";f!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=is(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function It(e,t,n,r){e.addEventListener(t,n,r)}function Uc(e,t,n,r){e.removeEventListener(t,n,r)}const wi=Symbol("_vei");function $c(e,t,n,r,a=null){const i=e[wi]||(e[wi]={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Yc(t);if(r){const f=i[t]=Vc(r,a);It(e,o,f,l)}else s&&(Uc(e,o,s,l),i[t]=void 0)}}const Pi=/(?:Once|Passive|Capture)$/;function Yc(e){let t;if(Pi.test(e)){t={};let r;for(;r=e.match(Pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}let Ar=0;const Wc=Promise.resolve(),Kc=()=>Ar||(Wc.then(()=>Ar=0),Ar=Date.now());function Vc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Gc(r,n.value),t,5,[r])};return n.value=e,n.attached=Kc(),n}function Gc(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Si=/^on[a-z]/,qc=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?Fc(e,r,a):t==="style"?jc(e,n,r):tr(t)?ua(t)||$c(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xc(e,t,r,a))?Hc(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Dc(e,t,r,a))};function Xc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Si.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Si.test(t)&&ae(n)?!1:t in e}const Oi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return N(t)?n=>Bn(t,n):t};function Jc(e){e.target.composing=!0}function ki(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ir=Symbol("_assign"),Zc={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Ir]=Oi(a);const i=r||a.props&&a.props.type==="number";It(e,t?"change":"input",s=>{if(s.target.composing)return;let o=e.value;n&&(o=o.trim()),i&&(o=Br(o)),e[Ir](o)}),n&&It(e,"change",()=>{e.value=e.value.trim()}),t||(It(e,"compositionstart",Jc),It(e,"compositionend",ki),It(e,"change",ki))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Ir]=Oi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Br(e.value)===t))return;const s=t??"";e.value!==s&&(e.value=s)}},Qc=oe({patchProp:qc},Rc);let Ai;function ef(){return Ai||(Ai=cc(Qc))}const tf=(...e)=>{const t=ef().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=nf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function nf(e){return ae(e)?document.querySelector(e):e}const Cr=(e,t)=>{const n=[];return Array.from(Array(2).keys()).forEach(()=>{Array.from(Array(e)).forEach(()=>{n.push(t)}),n.push(0)}),n};class Tr{constructor(t){me(this,"board");me(this,"movesRecord");this.board=[...t],this.movesRecord=[]}getLastIncrementedPitId(){return this.movesRecord[this.movesRecord.length-1].pitId}getPitSeeds(t){return this.board[t]}setPitSeeds(t,n){const r=this.board[t];return this.board[t]=n,this.movesRecord.push({pitId:t,seeds:this.board[t]}),r}getBoard(){return this.board}transferSeeds(t,n){const r=this.board[t];this.setPitSeeds(t,0),this.incrementPitSeeds(n,r)}incrementPitSeeds(t,n=1){return this.setPitSeeds(t,n+this.board[t])}getMovesRecord(){return this.movesRecord}}var K=(e=>(e.TOP="TOP",e.BOTTOM="BOTTOM",e))(K||{});const Hn=e=>e==="TOP"?"BOTTOM":"TOP";class ht{constructor(t){me(this,"boardLength");me(this,"totalStones");this.boardLength=t.length,this.totalStones=t.reduce((n,r)=>n+r,0)}getSideStorePitId(t){return t===K.TOP?this.boardLength/2-1:this.boardLength-1}getOppositeSideStorePitId(t){return t!==K.TOP?this.boardLength/2-1:this.boardLength-1}getOppositeSidePitId(t){return this.boardLength-2-t}isPitStore(t){return t===this.boardLength/2-1||t===this.boardLength-1}checkPitOwnership(t,n){return t===K.TOP&&n<this.boardLength/2||t===K.BOTTOM&&n>=this.boardLength/2}getNextPitId(t){return(t+1)%this.boardLength}}class Vs{constructor(t){me(this,"playerSide");this.playerSide=t}checkPlayerScore(t){return t[new ht(t).getSideStorePitId(this.playerSide)]}checkOppositePlayerScore(t){return t[new ht(t).getOppositeSideStorePitId(this.playerSide)]}getAvailableMovesForPlayer(t){const n=new ht(t);return t.reduce((r,a,i)=>(n.checkPitOwnership(this.playerSide,i)&&!n.isPitStore(i)&&a>0&&r.push(i),r),[])}getAvailableMovesForOpponentPlayer(t){const n=new ht(t);return t.reduce((r,a,i)=>(n.checkPitOwnership(Hn(this.playerSide),i)&&!n.isPitStore(i)&&a>0&&r.push(i),r),[])}}class rf{constructor(t,n){me(this,"staticBoardAnalyser");me(this,"engineSettings");me(this,"movesHistory");this.staticBoardAnalyser=new ht(t),this.movesHistory=[],this.engineSettings=n||{}}makeMove(t,n){this.validateMove(t,n);const r=t.playerSide;this.movesHistory.push(t);const a=this.redistributeSeeds(t,n),i=a.getLastIncrementedPitId(),s=this.checkCapture(r,i,a.getBoard()),o=this.checkGameOver(r,s.getBoard());return o?{winningPlayer:o.winningPlayer,nextTurnPlayer:r,boardConfig:o.boardConfig,gameOver:!0,movesRecord:this.engineSettings.recordMoves?a.getMovesRecord().concat(s.getMovesRecord()).concat(o.gameOverMovesRecord):void 0}:{nextTurnPlayer:this.checkNextPlayerTurn(r,i),boardConfig:s.getBoard(),gameOver:!1,movesRecord:this.engineSettings.recordMoves?a.getMovesRecord().concat(s.getMovesRecord()):void 0}}redistributeSeeds(t,n){const r=new Tr(n);let a=t.pitId,i=r.setPitSeeds(a,0);for(;i>0;)a=this.staticBoardAnalyser.getNextPitId(a),!(this.staticBoardAnalyser.isPitStore(a)&&!this.staticBoardAnalyser.checkPitOwnership(t.playerSide,a))&&(r.incrementPitSeeds(a),--i);return r}getMovesHistory(){return this.movesHistory}checkNextPlayerTurn(t,n){return this.staticBoardAnalyser.checkPitOwnership(t,n)&&this.staticBoardAnalyser.isPitStore(n)?t:Hn(t)}checkCapture(t,n,r){const a=new Tr(r);if(this.staticBoardAnalyser.checkPitOwnership(t,n)&&a.getPitSeeds(n)===1&&!this.staticBoardAnalyser.isPitStore(n)){const i=this.staticBoardAnalyser.getOppositeSidePitId(n),s=a.getPitSeeds(i);if(s>0){this.movesHistory.push({playerSide:t,capturedSeeds:s,pitId:i});const o=this.staticBoardAnalyser.getSideStorePitId(t);a.transferSeeds(i,o),a.transferSeeds(n,o)}}return a}validateMove(t,n){if(!this.staticBoardAnalyser.checkPitOwnership(t.playerSide,t.pitId))throw new Error(`Player '${t.playerSide}' cannot select an opponent's pit (${t.pitId})`);if(this.staticBoardAnalyser.isPitStore(t.pitId))throw new Error(`Player '${t.playerSide}' cannot select a store (${t.pitId})`);if(n[t.pitId]===0)throw new Error(`Player '${t.playerSide}' cannot select an empty pit (${t.pitId})`)}checkGameOver(t,n){const r=new Vs(t);if(r.getAvailableMovesForPlayer(n).length!==0&&r.getAvailableMovesForOpponentPlayer(n).length!==0)return;const a=r.checkPlayerScore(n),i=r.checkOppositePlayerScore(n),s=this.getGameOverMovesRecord(n,t);let o;return a>i?o=t:a<i&&(o=Hn(t)),{gameOver:!0,boardConfig:s.getBoard(),gameOverMovesRecord:s.getMovesRecord(),winningPlayer:o}}getGameOverMovesRecord(t,n){const r=new Tr(t);if(this.engineSettings.gameOverCaptureVariation){const a=this.staticBoardAnalyser.getSideStorePitId(n);t.forEach(o=>{this.staticBoardAnalyser.checkPitOwnership(n,o)&&o!==a&&r.transferSeeds(o,a)});const i=Hn(n),s=this.staticBoardAnalyser.getSideStorePitId(i);t.forEach(o=>{this.staticBoardAnalyser.checkPitOwnership(i,o)&&o!==s&&r.transferSeeds(o,s)})}return r}}class Jr{constructor(t,n){me(this,"side");me(this,"brain");this.side=t,this.brain=n}async selectNextMove(t){return this.brain.selectNextMove(this.side,t)}}var Me=(e=>(e[e.HUMAN=0]="HUMAN",e[e.AI=1]="AI",e))(Me||{});Object.keys(Me).filter(e=>isNaN(Number(e)));const af={style:{width:"100%",height:"100%",position:"relative"}},sf=Es({__name:"Pit",props:{index:{},store:{type:Boolean},side:{},seeds:{},ownerPlayerType:{},lastSelectedPitId:{},playingPlayerSide:{}},emits:["nextActionSelected"],setup(e,{emit:t}){const n=t,r=e,a=()=>Math.random()*25+25+"%",i={"border-bottom-left-radius":a(),"border-top-left-radius":a(),"border-bottom-right-radius":a(),"border-top-right-radius":a()},s=wr(!1),o=wr(!1),l=wr(d());function f(){r.store||r.ownerPlayerType===Me.HUMAN&&r.seeds>0&&r.side===r.playingPlayerSide&&n("nextActionSelected",r.side,r.index)}Lt(()=>r.playingPlayerSide,()=>{l.value=d()}),Lt(()=>r.seeds,()=>{o.value=!0,setTimeout(()=>o.value=!1,200),l.value=d()});function d(){return r.ownerPlayerType===Me.HUMAN&&r.seeds>0&&r.side===r.playingPlayerSide&&!r.store}function m(){s.value=!0,l.value=d()}function p(){s.value=!1,l.value=d()}const _=$e(()=>({"d-block":!0,hole:!0,number:!0,stonesNumberChangedAnimation:o.value,availableOption:l.value,lastSelectedPit:r.lastSelectedPitId===r.index,hovered:s.value&&l.value})),R=$e(()=>{const A=r.side===K.BOTTOM?"var(--bottom-player-color)":"var(--top-player-color)";return{...i,"border-color":A,"box-shadow":"inset 7px 7px 0px var(--wooden-half-shade), 1px 1px 10px "+A,"padding-top":r.store?"20%":"5%"}});return(A,z)=>(Q(),te("div",af,[B("span",{class:mn(_.value),style:Pe(R.value),onMouseenter:m,onMouseleave:p,onClick:f},vt(A.seeds),39)]))}});const St=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},of=St(sf,[["__scopeId","data-v-919f0070"]]),lf="/mancala/wooden-square-plank-bc8f16d6.png";let Er;const cf={name:"Board",props:{settings:Object,gameIsRunning:Boolean},components:{Pit:of},emits:["animationIsRunning","gameOver","playingPlayerChanged"],setup(){return{PlayerSide:K}},data(){return{aiIsThinking:!1,accumulator:0,accumulatorColor:"",lastSelectedPitId:void 0,animationRunning:!1,board:Cr(6,4),playingPlayer:void 0,woodenPlank:lf}},watch:{settings(){this.settings&&(this.gameIsRunning||(this.board=Cr(this.settings.internalPockets,this.settings.seeds)))},gameIsRunning(){var e,t;this.gameIsRunning&&this.settings?(this.playingPlayer=(e=this.settings)==null?void 0:e.topPlayer,this.board=Cr(this.settings.internalPockets,this.settings.seeds),Er=new rf(this.board,{recordMoves:!0}),((t=this.playingPlayer)==null?void 0:t.brain.type)!==Me.HUMAN&&this.aiThinkAboutNextMove()):(this.lastSelectedPitId=void 0,this.animationRunning=!1,this.accumulator=0,this.playingPlayer=void 0)}},computed:{bottomSideStorePit(){return new ht(this.board).getSideStorePitId(K.BOTTOM)},topSideStorePit(){return new ht(this.board).getSideStorePitId(K.TOP)},spinningStyle(){var e;return{color:((e=this.playingPlayer)==null?void 0:e.side)===K.TOP?"var(--top-player-color)":"var(--bottom-player-color)"}},accumulatorClass(){return{"d-block":!0,number:!0,accumulator:!0,hole:!0,"accumulator-hole-showing":this.accumulator>=0}},accumulatorStyle(){return{color:this.accumulatorColor,"border-color":this.accumulatorColor}},topInternalPockets(){return this.board.filter((e,t)=>t<this.board.length/2-1).reverse()},bottomInternalPockets(){return this.board.filter((e,t)=>t>=this.board.length/2&&t<this.board.length-1)}},methods:{async aiThinkAboutNextMove(){this.aiIsThinking=!0;const e=await this.playingPlayer.selectNextMove(this.board);this.aiIsThinking=!1,this.updateBoard({playerSide:this.playingPlayer.side,pitId:e})},sleep(e){return new Promise(t=>setTimeout(()=>t(),e))},nextActionSelected(e,t){this.animationRunning||this.updateBoard({playerSide:e,pitId:t})},updateAnimationColor(e){switch(e){case K.TOP:this.accumulatorColor="var(--top-player-color)";break;case K.BOTTOM:this.accumulatorColor="var(--bottom-player-color)";break}},async updateBoard(e){var r;this.$emit("animationIsRunning",!0),this.lastSelectedPitId=e.pitId,this.updateAnimationColor(e.playerSide),this.animationRunning=!0,this.playingPlayer=void 0,this.accumulator=this.board[e.pitId];const t=Er.makeMove(e,this.board),n=[...t.movesRecord];for(let a of n){if(!this.gameIsRunning)return;this.board[a.pitId]=a.seeds,await this.sleep(((r=this.settings)==null?void 0:r.animationDelay)||100),--this.accumulator}this.finishUpdatingBoard(t)},finishUpdatingBoard(e){this.animationRunning=!1,this.$emit("animationIsRunning",!1),e.gameOver?this.$emit("gameOver",{winningPlayer:e.winningPlayer,movesHistory:Er.getMovesHistory(),board:this.board}):(this.playingPlayer=this.getBrainFromSide(e.nextTurnPlayer),this.$emit("playingPlayerChanged",this.playingPlayer),this.playingPlayer.brain.type!==Me.HUMAN&&this.aiThinkAboutNextMove())},getBrainFromSide(e){var t,n,r;return((t=this.settings)==null?void 0:t.topPlayer.side)===e?(n=this.settings)==null?void 0:n.topPlayer:(r=this.settings)==null?void 0:r.bottomPlayer}}};const ff=e=>(Pa("data-v-026af09c"),e=e(),Sa(),e),uf={class:"container-lg text-center",id:"boardContainer"},df=["src"],mf={class:"accumulatorNumber number"},hf=ff(()=>B("span",{class:"visually-hidden"},"Loading...",-1)),pf=[hf],gf={class:"container-fluid plank-board p-0"},vf={class:"row g-2 h-100 mx-5 pl-3",style:{position:"relative",left:"1.125rem"}},bf={class:"col"},yf={class:"col-8"},xf={class:"row g-0 justify-content-center",style:{height:"50%"}},_f={class:"col mx-auto"},wf={class:"row g-0 justify-content-center",style:{height:"50%"}},Pf={class:"col mx-auto"},Sf={class:"col"};function Of(e,t,n,r,a,i){var o,l,f,d,m,p;const s=Ke("Pit");return Q(),te("div",uf,[B("img",{src:a.woodenPlank,class:"img-fluid w-100",alt:"wooden-square-plank"},null,8,df),a.animationRunning&&a.accumulator>=0?(Q(),te("span",{key:0,class:mn(i.accumulatorClass),style:Pe(i.accumulatorStyle)},[B("span",mf,vt(a.accumulator),1)],6)):Qt("",!0),a.aiIsThinking?(Q(),te("div",{key:1,class:"spinner-border",style:Pe(i.spinningStyle),role:"status"},pf,4)):Qt("",!0),B("div",gf,[B("div",vf,[B("div",bf,[U(s,{seeds:a.board[i.topSideStorePit],index:i.topSideStorePit,playingPlayerSide:(o=a.playingPlayer)==null?void 0:o.side,store:!0,ownerPlayerType:(f=(l=n.settings)==null?void 0:l.topPlayer)==null?void 0:f.brain.type,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.TOP},null,8,["seeds","index","playingPlayerSide","ownerPlayerType","onNextActionSelected","side"])]),B("div",yf,[B("div",xf,[(Q(!0),te(ye,null,Vn(i.topInternalPockets,(_,R)=>{var A,z,w;return Q(),te("div",_f,[U(s,{seeds:_,index:i.topInternalPockets.length-1-R,store:!1,lastSelectedPitId:a.lastSelectedPitId,ownerPlayerType:(z=(A=n.settings)==null?void 0:A.topPlayer)==null?void 0:z.brain.type,onNextActionSelected:i.nextActionSelected,playingPlayerSide:(w=a.playingPlayer)==null?void 0:w.side,side:r.PlayerSide.TOP},null,8,["seeds","index","lastSelectedPitId","ownerPlayerType","onNextActionSelected","playingPlayerSide","side"])])}),256))]),B("div",wf,[(Q(!0),te(ye,null,Vn(i.bottomInternalPockets,(_,R)=>{var A,z,w;return Q(),te("div",Pf,[U(s,{seeds:_,index:R+i.bottomInternalPockets.length+1,lastSelectedPitId:a.lastSelectedPitId,ownerPlayerType:(z=(A=n.settings)==null?void 0:A.bottomPlayer)==null?void 0:z.brain.type,playingPlayerSide:(w=a.playingPlayer)==null?void 0:w.side,store:!1,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.BOTTOM},null,8,["seeds","index","lastSelectedPitId","ownerPlayerType","playingPlayerSide","onNextActionSelected","side"])])}),256))])]),B("div",Sf,[U(s,{seeds:a.board[i.bottomSideStorePit],index:i.bottomSideStorePit,playingPlayerSide:(d=a.playingPlayer)==null?void 0:d.side,store:!0,ownerPlayerType:(p=(m=n.settings)==null?void 0:m.bottomPlayer)==null?void 0:p.brain.type,onNextActionSelected:i.nextActionSelected,side:r.PlayerSide.BOTTOM},null,8,["seeds","index","playingPlayerSide","ownerPlayerType","onNextActionSelected","side"])])])])])}const kf=St(cf,[["render",Of],["__scopeId","data-v-026af09c"]]),Af=()=>{const e={moves:0,capture:0,capturedSeeds:0};return{[K.TOP]:{...e},[K.BOTTOM]:{...e}}},If={name:"GameOver",props:["result"],emits:["modalIsGone"],setup(){return{PlayerSide:K}},data(){return{rows:[]}},mounted(){const e=document.getElementById("myModal");e==null||e.addEventListener("hidden.bs.modal",t=>{console.log("timeout"),this.$emit("modalIsGone"),this.rows=[]})},watch:{result(){this.rows=this.createRows(),new bootstrap.Modal("#myModal",{}).show()}},computed:{rowStyle(){return e=>({color:e===K.TOP?"var(--top-player-color)":"var(--bottom-player-color)","text-shadow":"1px 1px black"})}},methods:{createRows(){const e=Af(),t=this.result,n=new Vs(K.TOP),r=[];t.movesHistory.forEach(i=>{++e[i.playerSide].moves,i.capturedSeeds&&(++e[i.playerSide].capture,e[i.playerSide].capturedSeeds+=i.capturedSeeds)});const a=(i,s=2)=>i.toString().padStart(s);return r.push({title:"Score",topPlayer:a(n.checkPlayerScore(t.board)),bottomPlayer:a(n.checkOppositePlayerScore(t.board))}),r.push({title:"Moves",topPlayer:a(e[K.TOP].moves),bottomPlayer:a(e[K.BOTTOM].moves)}),r.push({title:"Captures (seeds)",topPlayer:a(e[K.TOP].capture)+` (${a(e[K.TOP].capturedSeeds,1)})`,bottomPlayer:a(e[K.BOTTOM].capture)+` (${a(e[K.BOTTOM].capturedSeeds,1)})`}),r}}};const Cf=e=>(Pa("data-v-d7b8a878"),e=e(),Sa(),e),Tf={class:"modal",tabindex:"-1",id:"myModal"},Ef={class:"modal-dialog modal-dialog-centered modal-lg"},Mf={class:"modal-content"},Nf=Cf(()=>B("div",{class:"modal-header pb-1",style:{"border-width":"5px","border-color":"var(--vt-c-black)"}},[B("h1",{class:"fs-1 modal-title text",style:{"text-align":"center"}},"Game Stats")],-1)),Rf={class:"modal-body"},Lf={class:"table"},Ff={class:"text fs-2",style:{"text-align":"center"}},Bf={scope:"row"};function jf(e,t,n,r,a,i){return Q(),te("div",Tf,[B("div",Ef,[B("div",Mf,[Nf,B("div",Rf,[B("table",Lf,[B("tbody",null,[(Q(!0),te(ye,null,Vn(a.rows,s=>(Q(),te("tr",Ff,[B("td",{style:Pe(i.rowStyle(r.PlayerSide.TOP))},vt(s.topPlayer),5),B("th",Bf,vt(s.title),1),B("td",{style:Pe(i.rowStyle(r.PlayerSide.BOTTOM))},vt(s.bottomPlayer),5)]))),256))])])])])])])}const zf=St(If,[["render",jf],["__scopeId","data-v-d7b8a878"]]);class Xn{constructor(){me(this,"type",Me.HUMAN)}selectNextMove(t,n){throw new Error("Human brain should read next move from input")}getLabel(){return"Human"}}function Df(){return new Worker("/mancala/AiWorker-d38bad70.js")}var Ca=(e=>(e[e.EASY=0]="EASY",e[e.MEDIUM=1]="MEDIUM",e[e.HARD=2]="HARD",e))(Ca||{});const Hf=Object.keys(Ca).filter(e=>isNaN(Number(e)));class Uf{constructor(t){me(this,"brainLevel");me(this,"aiWorker",new Df);me(this,"type",Me.AI);this.brainLevel=t}async selectNextMove(t,n){return new Promise(r=>{this.aiWorker.onmessage=async a=>r(a.data.bestPocketIdToPlay),this.aiWorker.postMessage({playingPlayer:t,brainLevel:this.brainLevel,boardConfig:JSON.stringify(n)})})}getLabel(){return Ca[this.brainLevel]}}const $f={name:"BrainSelector",props:["gameIsRunning","side"],emits:["brainSelected"],setup(){return{PlayerType:Me}},data(){return{selectedBrain:new Xn}},mounted(){this.brainSelected()},computed:{currentBrainIcon(){return this.selectedBrain.type===Me.HUMAN?"fa-brain":"fa-robot"},currentBrainLabel(){return this.selectedBrain.type===Me.HUMAN?this.selectedBrain.getLabel():this.aiBrainLabel(this.selectedBrain.getLabel())},availableAiBrainsLabel(){return Hf.map(e=>this.aiBrainLabel(e))},labelText(){const e={color:"var(--top-player-color)",direction:"ltr",textAlign:"left",border:"none"};return this.side===K.BOTTOM&&(e.color="var(--bottom-player-color)",e.direction="rtl",e.textAlign="right"),e}},methods:{aiBrainLabel(e){return"AI - "+e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},brainSelected(e){e!==void 0?this.selectedBrain=new Uf(e):this.selectedBrain=new Xn,this.$emit("brainSelected",{brain:this.selectedBrain,side:this.side})}}};const Gs=e=>(Pa("data-v-13f04483"),e=e(),Sa(),e),Yf={class:"dropdown"},Wf=["disabled"],Kf={class:"dropdown-menu p-0"},Vf=Gs(()=>B("span",null,"Human",-1)),Gf=Gs(()=>B("li",null,[B("hr",{class:"dropdown-divider my-1"})],-1)),qf=["onClick"];function Xf(e,t,n,r,a,i){const s=Ke("font-awesome-icon");return Q(),te("span",Yf,[B("button",{disabled:n.gameIsRunning,class:"btn btn-sm dropdown-toggle text",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",style:Pe(i.labelText)},[U(s,{icon:"fa-solid "+i.currentBrainIcon,style:{margin:"0 10px",border:"none"}},null,8,["icon"]),B("span",null,vt(i.currentBrainLabel),1)],12,Wf),B("ul",Kf,[B("li",null,[B("button",{onClick:t[0]||(t[0]=o=>i.brainSelected()),class:"dropdown-item btn-sm text px-2",style:Pe(i.labelText)},[U(s,{icon:"fa-solid fa-brain",style:{margin:"0 10px"}}),Vf],4)]),Gf,(Q(!0),te(ye,null,Vn(i.availableAiBrainsLabel,(o,l)=>(Q(),te("li",null,[B("button",{onClick:f=>i.brainSelected(l),class:"dropdown-item btn-sm text px-2",style:Pe(i.labelText)},[U(s,{icon:"fa-solid fa-robot",style:{margin:"0 10px"}}),B("span",null,vt(o),1)],12,qf)]))),256))])])}const Jf=St($f,[["render",Xf],["__scopeId","data-v-13f04483"]]),Zf={name:"Counter",props:["value","disabled","icon","iconColor","config","flip"],emits:["input"],data(){return{counter:this.value}},mounted(){console.log("show")},computed:{style(){let e=this.iconColor||"var(--vt-c-black-soft)";return this.disabled&&(e="var(--disabled-color)"),{margin:"10px",color:e}}},watch:{counter(){this.$emit("input",Number(this.counter))}}};const Qf={class:"qty"},eu={class:"d-flex",style:{color:"var(--vt-c-black-mute)"}},tu=["disabled","min","step","max"];function nu(e,t,n,r,a,i){const s=Ke("font-awesome-icon");return Q(),te("div",Qf,[B("div",eu,[Fl(B("input",{disabled:n.disabled,type:"range",class:"form-range range-cust",min:n.config.min,step:n.config.step!==void 0?n.config.step:1,max:n.config.max,"onUpdate:modelValue":t[0]||(t[0]=o=>a.counter=o),style:{margin:"5px"}},null,8,tu),[[Zc,a.counter]]),U(s,{icon:n.icon,style:Pe(i.style),flip:n.flip,class:"icon"},null,8,["icon","style","flip"])])])}const ru=St(Zf,[["render",nu]]),au="/mancala/VS-95e5eab8.svg",iu={max:2100,min:100,step:200},su={max:7,min:3,step:1},ou={max:8,min:5,step:1},lu={internalPockets:6,seeds:4,animationSpeed:500,topPlayer:new Jr(K.TOP,new Xn),bottomPlayer:new Jr(K.BOTTOM,new Xn)},cu={name:"NavBar",components:{BrainSelector:Jf,Counter:ru},props:["gameIsRunning"],setup(){return{PlayerSide:K}},emits:["startGame","abortGame","settingsChanged"],data(){return{seedsCounter:su,pitsCounter:ou,animationCounter:iu,settings:lu,versusIcon:au}},watch:{settings:{handler(){this.settingsChanged()},deep:!0}},methods:{startGame(){this.$emit("startGame")},stopGame(){this.$emit("abortGame")},brainSelected(e){const t=new Jr(e.side,e.brain);e.side===K.TOP?this.settings.topPlayer=t:this.settings.bottomPlayer=t},settingsChanged(){const e=this.animationCounter.max+this.animationCounter.min-this.settings.animationSpeed;this.$emit("settingsChanged",{topPlayer:this.settings.topPlayer,bottomPlayer:this.settings.bottomPlayer,animationDelay:e,internalPockets:this.settings.internalPockets,seeds:this.settings.seeds})}}},fu={class:"navbar w-100 border-bottom border-body",style:{"background-color":"var(--nav-bar-color)"}},uu={class:"container-fluid"},du={class:"row w-100 g-1 justify-content-between"},mu={class:"col-12 col-sm-4 col-lg-3",style:{"text-align":"center","white-space":"nowrap"}},hu=["src"],pu={key:0,class:"col-6 col-sm-3 col-lg-2"},gu={key:1,class:"col-6 col-sm-3 col-lg-2"},vu={key:2,class:"col-12 col-sm-4 col-lg-3"},bu={class:"col-12 col-sm-2 col-lg-3 d-flex justify-content-end"},yu=B("span",{class:"text"}," Abort ",-1),xu=B("span",{class:"text"}," Start ",-1);function _u(e,t,n,r,a,i){const s=Ke("BrainSelector"),o=Ke("Counter"),l=Ke("font-awesome-icon");return Q(),te("nav",fu,[B("div",uu,[B("div",du,[B("div",mu,[U(s,{side:r.PlayerSide.TOP,gameIsRunning:n.gameIsRunning,onBrainSelected:i.brainSelected},null,8,["side","gameIsRunning","onBrainSelected"]),B("img",{src:a.versusIcon,class:"img-fluid",alt:"versus",style:{width:"2.5em !important"}},null,8,hu),U(s,{side:r.PlayerSide.BOTTOM,gameIsRunning:n.gameIsRunning,onBrainSelected:i.brainSelected},null,8,["side","gameIsRunning","onBrainSelected"])]),n.gameIsRunning?Qt("",!0):(Q(),te("div",pu,[U(o,{value:a.settings.seeds,icon:"fa-solid fa-egg",config:a.seedsCounter,iconColor:"var(--wooden-shade)",onInput:t[0]||(t[0]=f=>a.settings.seeds=f)},null,8,["value","config"])])),n.gameIsRunning?Qt("",!0):(Q(),te("div",gu,[U(o,{value:a.settings.internalPockets,icon:"fa-solid fa-rainbow",flip:"vertical",config:a.pitsCounter,iconColor:"var(--wooden-shade)",onInput:t[1]||(t[1]=f=>a.settings.internalPockets=f)},null,8,["value","config"])])),n.gameIsRunning?(Q(),te("div",vu,[U(o,{value:a.settings.animationSpeed,icon:"fa-solid fa-bolt",config:a.animationCounter,iconColor:"var(--bolt-color)",onInput:t[2]||(t[2]=f=>a.settings.animationSpeed=f)},null,8,["value","config"])])):Qt("",!0),B("div",bu,[n.gameIsRunning?(Q(),te("button",{key:0,onClick:t[3]||(t[3]=(...f)=>i.stopGame&&i.stopGame(...f)),class:"btn btn-sm btn-danger"},[yu,U(l,{icon:"fa-solid fa-stop",style:{margin:"0 10px"}})])):(Q(),te("button",{key:1,onClick:t[4]||(t[4]=(...f)=>i.startGame&&i.startGame(...f)),class:"btn btn-sm btn-success"},[xu,U(l,{icon:"fa-solid fa-play",style:{margin:"0 10px"}})]))])])])])}const wu=St(cu,[["render",_u]]),Pu={name:"App",components:{NavBar:wu,Board:kf,GameOver:zf},data(){return{gameOverResult:void 0,gameIsRunning:!1,settings:void 0}},methods:{gameOver(e){this.gameOverResult=e},gameOverModalIsGone(){this.gameIsRunning=!1},startGame(){this.gameIsRunning=!0},abortGame(){this.gameIsRunning=!1},settingsChanged(e){console.log(e),this.settings=e}}};function Su(e,t,n,r,a,i){const s=Ke("NavBar"),o=Ke("Board"),l=Ke("GameOver");return Q(),te("main",null,[U(s,{gameIsRunning:a.gameIsRunning,onStartGame:i.startGame,onAbortGame:i.abortGame,onSettingsChanged:i.settingsChanged},null,8,["gameIsRunning","onStartGame","onAbortGame","onSettingsChanged"]),U(o,{gameIsRunning:a.gameIsRunning,settings:a.settings,onGameOver:i.gameOver},null,8,["gameIsRunning","settings","onGameOver"]),U(l,{result:a.gameOverResult,onModalIsGone:i.gameOverModalIsGone},null,8,["result","onModalIsGone"])])}const Ou=St(Pu,[["render",Su]]);function Ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ii(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ii(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jn(e){"@babel/helpers - typeof";return Jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jn(e)}function ku(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ci(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Au(e,t,n){return t&&Ci(e.prototype,t),n&&Ci(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ta(e,t){return Cu(e)||Eu(e,t)||qs(e,t)||Nu()}function hn(e){return Iu(e)||Tu(e)||qs(e)||Mu()}function Iu(e){if(Array.isArray(e))return Zr(e)}function Cu(e){if(Array.isArray(e))return e}function Tu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Eu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function qs(e,t){if(e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ti=function(){},Ea={},Xs={},Js=null,Zs={mark:Ti,measure:Ti};try{typeof window<"u"&&(Ea=window),typeof document<"u"&&(Xs=document),typeof MutationObserver<"u"&&(Js=MutationObserver),typeof performance<"u"&&(Zs=performance)}catch{}var Ru=Ea.navigator||{},Ei=Ru.userAgent,Mi=Ei===void 0?"":Ei,at=Ea,J=Xs,Ni=Js,An=Zs;at.document;var Je=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Qs=~Mi.indexOf("MSIE")||~Mi.indexOf("Trident/"),In,Cn,Tn,En,Mn,Ve="___FONT_AWESOME___",Qr=16,eo="fa",to="svg-inline--fa",wt="data-fa-i2svg",ea="data-fa-pseudo-element",Lu="data-fa-pseudo-element-pending",Ma="data-prefix",Na="data-icon",Ri="fontawesome-i2svg",Fu="async",Bu=["HTML","HEAD","STYLE","SCRIPT"],no=function(){try{return!0}catch{return!1}}(),X="classic",ne="sharp",Ra=[X,ne];function pn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var ln=pn((In={},ie(In,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(In,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),In)),cn=pn((Cn={},ie(Cn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(Cn,ne,{solid:"fass",regular:"fasr",light:"fasl"}),Cn)),fn=pn((Tn={},ie(Tn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(Tn,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tn)),ju=pn((En={},ie(En,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(En,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),En)),zu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ro="fa-layers-text",Du=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Hu=pn((Mn={},ie(Mn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(Mn,ne,{900:"fass",400:"fasr",300:"fasl"}),Mn)),ao=[1,2,3,4,5,6,7,8,9,10],Uu=ao.concat([11,12,13,14,15,16,17,18,19,20]),$u=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},un=new Set;Object.keys(cn[X]).map(un.add.bind(un));Object.keys(cn[ne]).map(un.add.bind(un));var Yu=[].concat(Ra,hn(un),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pt.GROUP,pt.SWAP_OPACITY,pt.PRIMARY,pt.SECONDARY]).concat(ao.map(function(e){return"".concat(e,"x")})).concat(Uu.map(function(e){return"w-".concat(e)})),en=at.FontAwesomeConfig||{};function Wu(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ku(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Vu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Vu.forEach(function(e){var t=Ta(e,2),n=t[0],r=t[1],a=Ku(Wu(n));a!=null&&(en[r]=a)})}var io={styleDefault:"solid",familyDefault:"classic",cssPrefix:eo,replacementClass:to,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};en.familyPrefix&&(en.cssPrefix=en.familyPrefix);var Dt=k(k({},io),en);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var C={};Object.keys(io).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Dt[e]=n,tn.forEach(function(r){return r(C)})},get:function(){return Dt[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Dt.cssPrefix=t,tn.forEach(function(n){return n(C)})},get:function(){return Dt.cssPrefix}});at.FontAwesomeConfig=C;var tn=[];function Gu(e){return tn.push(e),function(){tn.splice(tn.indexOf(e),1)}}var Qe=Qr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qu(e){if(!(!e||!Je)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Xu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dn(){for(var e=12,t="";e-- >0;)t+=Xu[Math.random()*62|0];return t}function Yt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function La(e){return e.classList?Yt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function so(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ju(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(so(e[n]),'" ')},"").trim()}function hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Fa(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function Zu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Qu(e){var t=e.transform,n=e.width,r=n===void 0?Qr:n,a=e.height,i=a===void 0?Qr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Qs?l+="translate(".concat(t.x/Qe-r/2,"em, ").concat(t.y/Qe-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Qe,"em), calc(-50% + ").concat(t.y/Qe,"em)) "):l+="translate(".concat(t.x/Qe,"em, ").concat(t.y/Qe,"em) "),l+="scale(".concat(t.size/Qe*(t.flipX?-1:1),", ").concat(t.size/Qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ed=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function oo(){var e=eo,t=to,n=C.cssPrefix,r=C.replacementClass,a=ed;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var Li=!1;function Mr(){C.autoAddCss&&!Li&&(qu(oo()),Li=!0)}var td={mixout:function(){return{dom:{css:oo,insertCss:Mr}}},hooks:function(){return{beforeDOMElementCreation:function(){Mr()},beforeI2svg:function(){Mr()}}}},Ge=at||{};Ge[Ve]||(Ge[Ve]={});Ge[Ve].styles||(Ge[Ve].styles={});Ge[Ve].hooks||(Ge[Ve].hooks={});Ge[Ve].shims||(Ge[Ve].shims=[]);var Ce=Ge[Ve],lo=[],nd=function e(){J.removeEventListener("DOMContentLoaded",e),Zn=1,lo.map(function(t){return t()})},Zn=!1;Je&&(Zn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Zn||J.addEventListener("DOMContentLoaded",nd));function rd(e){Je&&(Zn?setTimeout(e,0):lo.push(e))}function gn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?so(e):"<".concat(t," ").concat(Ju(r),">").concat(i.map(gn).join(""),"</").concat(t,">")}function Fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ad=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},Nr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?ad(n,a):n,l,f,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)f=i[l],d=o(d,t[f],f,t);return d};function id(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ta(e){var t=id(e);return t.length===1?t[0].toString(16):null}function sd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Bi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Bi(t);typeof Ce.hooks.addPack=="function"&&!a?Ce.hooks.addPack(e,Bi(t)):Ce.styles[e]=k(k({},Ce.styles[e]||{}),i),e==="fas"&&na("fa",t)}var Nn,Rn,Ln,Ct=Ce.styles,od=Ce.shims,ld=(Nn={},ie(Nn,X,Object.values(fn[X])),ie(Nn,ne,Object.values(fn[ne])),Nn),Ba=null,co={},fo={},uo={},mo={},ho={},cd=(Rn={},ie(Rn,X,Object.keys(ln[X])),ie(Rn,ne,Object.keys(ln[ne])),Rn);function fd(e){return~Yu.indexOf(e)}function ud(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!fd(a)?a:null}var po=function(){var t=function(i){return Nr(Ct,function(s,o,l){return s[l]=Nr(o,i,{}),s},{})};co=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),fo=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),ho=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in Ct||C.autoFetchSvg,r=Nr(od,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});uo=r.names,mo=r.unicodes,Ba=pr(C.styleDefault,{family:C.familyDefault})};Gu(function(e){Ba=pr(e.styleDefault,{family:C.familyDefault})});po();function ja(e,t){return(co[e]||{})[t]}function dd(e,t){return(fo[e]||{})[t]}function gt(e,t){return(ho[e]||{})[t]}function go(e){return uo[e]||{prefix:null,iconName:null}}function md(e){var t=mo[e],n=ja("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return Ba}var za=function(){return{prefix:null,iconName:null,rest:[]}};function pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=ln[r][e],i=cn[r][e]||cn[r][a],s=e in Ce.styles?e:null;return i||s||null}var ji=(Ln={},ie(Ln,X,Object.keys(fn[X])),ie(Ln,ne,Object.keys(fn[ne])),Ln);function gr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ie(t,X,"".concat(C.cssPrefix,"-").concat(X)),ie(t,ne,"".concat(C.cssPrefix,"-").concat(ne)),t),s=null,o=X;(e.includes(i[X])||e.some(function(f){return ji[X].includes(f)}))&&(o=X),(e.includes(i[ne])||e.some(function(f){return ji[ne].includes(f)}))&&(o=ne);var l=e.reduce(function(f,d){var m=ud(C.cssPrefix,d);if(Ct[d]?(d=ld[o].includes(d)?ju[o][d]:d,s=d,f.prefix=d):cd[o].indexOf(d)>-1?(s=d,f.prefix=pr(d,{family:o})):m?f.iconName=m:d!==C.replacementClass&&d!==i[X]&&d!==i[ne]&&f.rest.push(d),!a&&f.prefix&&f.iconName){var p=s==="fa"?go(f.iconName):{},_=gt(f.prefix,f.iconName);p.prefix&&(s=null),f.iconName=p.iconName||_||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Ct.far&&Ct.fas&&!C.autoFetchSvg&&(f.prefix="fas")}return f},za());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===ne&&(Ct.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=gt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=it()||"fas"),l}var hd=function(){function e(){ku(this,e),this.definitions={}}return Au(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=k(k({},n.definitions[o]||{}),s[o]),na(o,s[o]);var l=fn[X][o];l&&na(l,s[o]),po()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,f=s.icon,d=f[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=f)}),n[o][l]=f}),n}}]),e}(),zi=[],Tt={},Ft={},pd=Object.keys(Ft);function gd(e,t){var n=t.mixoutsTo;return zi=e,Tt={},Object.keys(Ft).forEach(function(r){pd.indexOf(r)===-1&&delete Ft[r]}),zi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Jn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){Tt[s]||(Tt[s]=[]),Tt[s].push(i[s])})}r.provides&&r.provides(Ft)}),n}function ra(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Tt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function Pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Tt[e]||[];a.forEach(function(i){i.apply(null,n)})}function qe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ft[e]?Ft[e].apply(null,t):void 0}function aa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||it();if(t)return t=gt(n,t)||t,Fi(vo.definitions,n,t)||Fi(Ce.styles,n,t)}var vo=new hd,vd=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,Pt("noAuto")},bd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Je?(Pt("beforeI2svg",t),qe("pseudoElements2svg",t),qe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,rd(function(){xd({autoReplaceSvgRoot:n}),Pt("watch",t)})}},yd={icon:function(t){if(t===null)return null;if(Jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=pr(t[0]);return{prefix:r,iconName:gt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(zu))){var a=gr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||it(),iconName:gt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=it();return{prefix:i,iconName:gt(i,t)||t}}}},xe={noAuto:vd,config:C,dom:bd,parse:yd,library:vo,findIconDefinition:aa,toHtml:gn},xd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ce.styles).length>0||C.autoFetchSvg)&&Je&&C.autoReplaceSvg&&xe.dom.i2svg({node:r})};function vr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return gn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Je){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function _d(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(Fa(s)&&n.found&&!r.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};a.style=hr(k(k({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function wd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},a),{},{id:s}),children:r}]}]}function Da(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,f=e.maskId,d=e.titleId,m=e.extra,p=e.watchable,_=p===void 0?!1:p,R=r.found?r:n,A=R.width,z=R.height,w=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(_e){return m.classes.indexOf(_e)===-1}).filter(function(_e){return _e!==""||!!_e}).concat(m.classes).join(" "),L={children:[],attributes:k(k({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(z)})},T=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(A/z*16*.0625,"em")}:{};_&&(L.attributes[wt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||dn())},children:[l]}),delete L.attributes.title);var Y=k(k({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:s,symbol:o,styles:k(k({},T),m.styles)}),le=r.found&&n.found?qe("generateAbstractMask",Y)||{children:[],attributes:{}}:qe("generateAbstractIcon",Y)||{children:[],attributes:{}},ce=le.children,Se=le.attributes;return Y.children=ce,Y.attributes=Se,o?wd(Y):_d(Y)}function Di(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,f=k(k(k({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(f[wt]="");var d=k({},s.styles);Fa(a)&&(d.transform=Qu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=hr(d);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Pd(e){var t=e.content,n=e.title,r=e.extra,a=k(k(k({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=hr(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Rr=Ce.styles;function ia(e){var t=e[0],n=e[1],r=e.slice(4),a=Ta(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Sd={found:!1,width:512,height:512};function Od(e,t){!no&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function sa(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=it()),new Promise(function(r,a){if(qe("missingIconAbstract"),n==="fa"){var i=go(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Rr[t]&&Rr[t][e]){var s=Rr[t][e];return r(ia(s))}Od(e,t),r(k(k({},Sd),{},{icon:C.showMissingIcons&&e?qe("missingIconAbstract")||{}:{}}))})}var Hi=function(){},oa=C.measurePerformance&&An&&An.mark&&An.measure?An:{mark:Hi,measure:Hi},Xt='FA "6.4.2"',kd=function(t){return oa.mark("".concat(Xt," ").concat(t," begins")),function(){return bo(t)}},bo=function(t){oa.mark("".concat(Xt," ").concat(t," ends")),oa.measure("".concat(Xt," ").concat(t),"".concat(Xt," ").concat(t," begins"),"".concat(Xt," ").concat(t," ends"))},Ha={begin:kd,end:bo},Un=function(){};function Ui(e){var t=e.getAttribute?e.getAttribute(wt):null;return typeof t=="string"}function Ad(e){var t=e.getAttribute?e.getAttribute(Ma):null,n=e.getAttribute?e.getAttribute(Na):null;return t&&n}function Id(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function Cd(){if(C.autoReplaceSvg===!0)return $n.replace;var e=$n[C.autoReplaceSvg];return e||$n.replace}function Td(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Ed(e){return J.createElement(e)}function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Td:Ed:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(yo(s,{ceFn:r}))}),a}function Md(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $n={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(yo(a),n)}),n.getAttribute(wt)===null&&C.keepOriginalSource){var r=J.createComment(Md(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~La(n).indexOf(C.replacementClass))return $n.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===C.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return gn(o)}).join(`
`);n.setAttribute(wt,""),n.innerHTML=s}};function $i(e){e()}function xo(e,t){var n=typeof t=="function"?t:Un;if(e.length===0)n();else{var r=$i;C.mutateApproach===Fu&&(r=at.requestAnimationFrame||$i),r(function(){var a=Cd(),i=Ha.begin("mutate");e.map(a),i(),n()})}}var Ua=!1;function _o(){Ua=!0}function la(){Ua=!1}var Qn=null;function Yi(e){if(Ni&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Un:t,r=e.nodeCallback,a=r===void 0?Un:r,i=e.pseudoElementsCallback,s=i===void 0?Un:i,o=e.observeMutationsRoot,l=o===void 0?J:o;Qn=new Ni(function(f){if(!Ua){var d=it();Yt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ui(m.addedNodes[0])&&(C.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&Ui(m.target)&&~$u.indexOf(m.attributeName))if(m.attributeName==="class"&&Ad(m.target)){var p=gr(La(m.target)),_=p.prefix,R=p.iconName;m.target.setAttribute(Ma,_||d),R&&m.target.setAttribute(Na,R)}else Id(m.target)&&a(m.target)})}}),Je&&Qn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nd(){Qn&&Qn.disconnect()}function Rd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Ld(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=gr(La(e));return a.prefix||(a.prefix=it()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=dd(a.prefix,e.innerText)||ja(a.prefix,ta(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Fd(e){var t=Yt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Bd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ld(e),r=n.iconName,a=n.prefix,i=n.rest,s=Fd(e),o=ra("parseNodeAttributes",{},e),l=t.styleParser?Rd(e):[];return k({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var jd=Ce.styles;function wo(e){var t=C.autoReplaceSvg==="nest"?Wi(e,{styleParser:!1}):Wi(e);return~t.extra.classes.indexOf(ro)?qe("generateLayersText",e,t):qe("generateSvgReplacementMutation",e,t)}var st=new Set;Ra.map(function(e){st.add("fa-".concat(e))});Object.keys(ln[X]).map(st.add.bind(st));Object.keys(ln[ne]).map(st.add.bind(st));st=hn(st);function Ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Je)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(Ri,"-").concat(m))},a=function(m){return n.remove("".concat(Ri,"-").concat(m))},i=C.autoFetchSvg?st:Ra.map(function(d){return"fa-".concat(d)}).concat(Object.keys(jd));i.includes("fa")||i.push("fa");var s=[".".concat(ro,":not([").concat(wt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(wt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Yt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ha.begin("onTree"),f=o.reduce(function(d,m){try{var p=wo(m);p&&d.push(p)}catch(_){no||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(f).then(function(p){xo(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(p){l(),m(p)})})}function zd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wo(e).then(function(n){n&&xo([n],t)})}function Dd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:aa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:aa(a||{})),e(r,k(k({},n),{},{mask:a}))}}var Hd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?je:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,f=n.maskId,d=f===void 0?null:f,m=n.title,p=m===void 0?null:m,_=n.titleId,R=_===void 0?null:_,A=n.classes,z=A===void 0?[]:A,w=n.attributes,O=w===void 0?{}:w,L=n.styles,T=L===void 0?{}:L;if(t){var Y=t.prefix,le=t.iconName,ce=t.icon;return vr(k({type:"icon"},t),function(){return Pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(p?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(R||dn()):(O["aria-hidden"]="true",O.focusable="false")),Da({icons:{main:ia(ce),mask:l?ia(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:le,transform:k(k({},je),a),symbol:s,title:p,maskId:d,titleId:R,extra:{attributes:O,styles:T,classes:z}})})}},Ud={mixout:function(){return{icon:Dd(Hd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ki,n.nodeCallback=zd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,s=i===void 0?function(){}:i;return Ki(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,d=r.mask,m=r.maskId,p=r.extra;return new Promise(function(_,R){Promise.all([sa(a,o),d.iconName?sa(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var z=Ta(A,2),w=z[0],O=z[1];_([n,Da({icons:{main:w,mask:O},prefix:o,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:s,extra:p,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=hr(o);l.length>0&&(a.style=l);var f;return Fa(s)&&(f=qe("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},$d={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return vr({type:"layer"},function(){Pt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(hn(i)).join(" ")},children:s}]})}}}},Yd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,f=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return vr({type:"counter",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),Pd({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(hn(o))}})})}}}},Wd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?je:a,s=r.title,o=s===void 0?null:s,l=r.classes,f=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,p=r.styles,_=p===void 0?{}:p;return vr({type:"text",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),Di({content:n,transform:k(k({},je),i),title:o,extra:{attributes:m,styles:_,classes:["".concat(C.cssPrefix,"-layers-text")].concat(hn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Qs){var f=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/f,l=d.height/f}return C.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Di({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},Kd=new RegExp('"',"ug"),Vi=[1105920,1112319];function Vd(e){var t=e.replace(Kd,""),n=sd(t,0),r=n>=Vi[0]&&n<=Vi[1],a=t.length===2?t[0]===t[1]:!1;return{value:ta(a?t[0]:t),isSecondary:r||a}}function Gi(e,t){var n="".concat(Lu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Yt(e.children),s=i.filter(function(ce){return ce.getAttribute(ea)===t})[0],o=at.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Du),f=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ne:X,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cn[p][l[2].toLowerCase()]:Hu[p][f],R=Vd(m),A=R.value,z=R.isSecondary,w=l[0].startsWith("FontAwesome"),O=ja(_,A),L=O;if(w){var T=md(A);T.iconName&&T.prefix&&(O=T.iconName,_=T.prefix)}if(O&&!z&&(!s||s.getAttribute(Ma)!==_||s.getAttribute(Na)!==L)){e.setAttribute(n,L),s&&e.removeChild(s);var Y=Bd(),le=Y.extra;le.attributes[ea]=t,sa(O,_).then(function(ce){var Se=Da(k(k({},Y),{},{icons:{main:ce,mask:za()},prefix:_,iconName:L,extra:le,watchable:!0})),_e=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=Se.map(function(De){return gn(De)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Gd(e){return Promise.all([Gi(e,"::before"),Gi(e,"::after")])}function qd(e){return e.parentNode!==document.head&&!~Bu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ea)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function qi(e){if(Je)return new Promise(function(t,n){var r=Yt(e.querySelectorAll("*")).filter(qd).map(Gd),a=Ha.begin("searchPseudoElements");_o(),Promise.all(r).then(function(){a(),la(),t()}).catch(function(){a(),la(),n()})})}var Xd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=qi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;C.searchPseudoElements&&qi(a)}}},Xi=!1,Jd={mixout:function(){return{dom:{unwatch:function(){_o(),Xi=!0}}}},hooks:function(){return{bootstrap:function(){Yi(ra("mutationObserverCallbacks",{}))},noAuto:function(){Nd()},watch:function(n){var r=n.observeMutationsRoot;Xi?la():Yi(ra("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ji=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Zd={mixout:function(){return{parse:{transform:function(n){return Ji(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ji(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(d)},p={transform:"translate(".concat(s/2*-1," -256)")},_={outer:o,inner:m,path:p};return{tag:"g",attributes:k({},_.outer),children:[{tag:"g",attributes:k({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:k(k({},r.icon.attributes),_.path)}]}]}}}},Lr={x:0,y:0,width:"100%",height:"100%"};function Zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Qd(e){return e.tag==="g"?e.children:[e]}var em={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?gr(a.split(" ").map(function(s){return s.trim()})):za();return i.prefix||(i.prefix=it()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,f=i.width,d=i.icon,m=s.width,p=s.icon,_=Zu({transform:l,containerWidth:m,iconWidth:f}),R={tag:"rect",attributes:k(k({},Lr),{},{fill:"white"})},A=d.children?{children:d.children.map(Zi)}:{},z={tag:"g",attributes:k({},_.inner),children:[Zi(k({tag:d.tag,attributes:k(k({},d.attributes),_.path)},A))]},w={tag:"g",attributes:k({},_.outer),children:[z]},O="mask-".concat(o||dn()),L="clip-".concat(o||dn()),T={tag:"mask",attributes:k(k({},Lr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,w]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Qd(p)},T]};return r.push(Y,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(O,")")},Lr)}),{children:r,attributes:a}}}},tm={provides:function(t){var n=!1;at.matchMedia&&(n=at.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:k(k({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=k(k({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:k(k({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:k(k({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:k(k({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:k(k({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},nm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},rm=[td,Ud,$d,Yd,Wd,Xd,Jd,Zd,em,tm,nm];gd(rm,{mixoutsTo:xe});xe.noAuto;xe.config;var am=xe.library;xe.dom;var ca=xe.parse;xe.findIconDefinition;xe.toHtml;var im=xe.icon;xe.layer;xe.text;xe.counter;function Qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qi(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function er(e){"@babel/helpers - typeof";return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function pe(e,t,n){return t=cm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function om(e,t){if(e==null)return{};var n=sm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function lm(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function cm(e){var t=lm(e,"string");return typeof t=="symbol"?t:String(t)}var fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Po={exports:{}};(function(e){(function(t){var n=function(w,O,L){if(!f(O)||m(O)||p(O)||_(O)||l(O))return O;var T,Y=0,le=0;if(d(O))for(T=[],le=O.length;Y<le;Y++)T.push(n(w,O[Y],L));else{T={};for(var ce in O)Object.prototype.hasOwnProperty.call(O,ce)&&(T[w(ce,L)]=n(w,O[ce],L))}return T},r=function(w,O){O=O||{};var L=O.separator||"_",T=O.split||/(?=[A-Z])/;return w.split(T).join(L)},a=function(w){return R(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(O,L){return L?L.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var O=a(w);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(w,O){return r(w,O).toLowerCase()},o=Object.prototype.toString,l=function(w){return typeof w=="function"},f=function(w){return w===Object(w)},d=function(w){return o.call(w)=="[object Array]"},m=function(w){return o.call(w)=="[object Date]"},p=function(w){return o.call(w)=="[object RegExp]"},_=function(w){return o.call(w)=="[object Boolean]"},R=function(w){return w=w-0,w===w},A=function(w,O){var L=O&&"process"in O?O.process:O;return typeof L!="function"?w:function(T,Y){return L(T,w,Y)}},z={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(w,O){return n(A(a,O),w)},decamelizeKeys:function(w,O){return n(A(s,O),w,O)},pascalizeKeys:function(w,O){return n(A(i,O),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(fm)})(Po);var um=Po.exports,dm=["class","style"];function mm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=um.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function hm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return So(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var d=e.attributes[f];switch(f){case"class":l.class=hm(d);break;case"style":l.style=mm(d);break;default:l.attrs[f]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=om(n,dm);return Cc(e.tag,Ye(Ye(Ye({},t),{},{class:a.class,style:Ye(Ye({},a.style),s)},a.attrs),o),r)}var Oo=!1;try{Oo=!0}catch{}function pm(){if(!Oo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Fr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function gm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(t,"fa-".concat(e.size),e.size!==null),pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),pe(t,"fa-pull-".concat(e.pull),e.pull!==null),pe(t,"fa-swap-opacity",e.swapOpacity),pe(t,"fa-bounce",e.bounce),pe(t,"fa-shake",e.shake),pe(t,"fa-beat",e.beat),pe(t,"fa-fade",e.fade),pe(t,"fa-beat-fade",e.beatFade),pe(t,"fa-flash",e.flash),pe(t,"fa-spin-pulse",e.spinPulse),pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function es(e){if(e&&er(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ca.icon)return ca.icon(e);if(e===null)return null;if(er(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var vm=Es({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=$e(function(){return es(t.icon)}),i=$e(function(){return Fr("classes",gm(t))}),s=$e(function(){return Fr("transform",typeof t.transform=="string"?ca.transform(t.transform):t.transform)}),o=$e(function(){return Fr("mask",es(t.mask))}),l=$e(function(){return im(a.value,Ye(Ye(Ye(Ye({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Lt(l,function(d){if(!d)return pm("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var f=$e(function(){return l.value?So(l.value.abstract[0],{},r):null});return function(){return f.value}}}),bm={prefix:"fas",iconName:"rainbow",icon:[640,512,[127752],"f75b","M320 96C178.6 96 64 210.6 64 352v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352C0 175.3 143.3 32 320 32s320 143.3 320 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352C576 210.6 461.4 96 320 96zm0 192c-35.3 0-64 28.7-64 64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-70.7 57.3-128 128-128s128 57.3 128 128v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-35.3-28.7-64-64-64zM160 352v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-123.7 100.3-224 224-224s224 100.3 224 224v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-88.4-71.6-160-160-160s-160 71.6-160 160z"]},ym={prefix:"fas",iconName:"egg",icon:[384,512,[129370],"f7fb","M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"]},xm={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},_m={prefix:"fas",iconName:"stop",icon:[384,512,[9209],"f04d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]},wm={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"]},Pm={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Sm={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Om={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"]},km={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"]};am.add(km,Om,wm,Pm,_m,Sm,xm,ym,bm);const ko=tf(Ou);ko.component("font-awesome-icon",vm);ko.mount("#app");
