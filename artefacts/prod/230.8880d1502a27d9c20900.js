/*! For license information please see 230.8880d1502a27d9c20900.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkcases=globalThis.webpackChunkcases||[]).push([[230],{5230:(e,t,r)=>{r.r(t),r.d(t,{CacheProvider:()=>de,ClassNames:()=>Re,Global:()=>_e,ThemeContext:()=>ge,ThemeProvider:()=>we,__unsafe_useEmotionCache:()=>me,createElement:()=>Oe,css:()=>Me,jsx:()=>Oe,keyframes:()=>Ne,useTheme:()=>be,withEmotionCache:()=>ve,withTheme:()=>ke});var n=r(9687);var a=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),c=Math.abs,s=String.fromCharCode,o=Object.assign;function i(e){return e.trim()}function u(e,t,r){return e.replace(t,r)}function f(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function p(e,t,r){return e.slice(t,r)}function h(e){return e.length}function y(e){return e.length}function d(e,t){return t.push(e),e}var m=1,v=1,g=0,b=0,$=0,w="";function k(e,t,r,n,a,c,s){return{value:e,root:t,parent:r,type:n,props:a,children:c,line:m,column:v,length:s,return:""}}function x(e,t){return o(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function S(){return $=b>0?l(w,--b):0,v--,10===$&&(v=1,m--),$}function C(){return $=b<g?l(w,b++):0,v++,10===$&&(v=1,m++),$}function E(){return l(w,b)}function P(){return b}function A(e,t){return p(w,e,t)}function O(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return m=v=1,g=h(w=e),b=0,[]}function _(e){return w="",e}function M(e){return i(A(b-1,z(91===e?e+2:40===e?e+1:e)))}function N(e){for(;($=E())&&$<33;)C();return O(e)>2||O($)>3?"":" "}function j(e,t){for(;--t&&C()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return A(e,P()+(t<6&&32==E()&&32==C()))}function z(e){for(;C();)switch($){case e:return b;case 34:case 39:34!==e&&39!==e&&z($);break;case 40:41===e&&z(e);break;case 92:C()}return b}function F(e,t){for(;C()&&e+$!==57&&(e+$!==84||47!==E()););return"/*"+A(t,b-1)+"*"+s(47===e?e:C())}function R(e){for(;!O(E());)C();return A(e,b)}var D="-ms-",I="-moz-",L="-webkit-",q="comm",W="rule",Z="decl",B="@keyframes";function G(e,t){for(var r="",n=y(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function H(e,t,r,n){switch(e.type){case"@import":case Z:return e.return=e.return||e.value;case q:return"";case B:return e.return=e.value+"{"+G(e.children,n)+"}";case W:e.value=e.props.join(",")}return h(r=G(e.children,n))?e.return=e.value+"{"+r+"}":""}function U(e,t){switch(function(e,t){return(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3)}(e,t)){case 5103:return L+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+I+e+D+e+e;case 6828:case 4268:return L+e+D+e+e;case 6165:return L+e+D+"flex-"+e+e;case 5187:return L+e+u(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return L+e+D+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return L+e+D+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return L+e+D+u(e,"shrink","negative")+e;case 5292:return L+e+D+u(e,"basis","preferred-size")+e;case 6060:return L+"box-"+u(e,"-grow","")+L+e+D+u(e,"grow","positive")+e;case 4554:return L+u(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,L+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+I+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~f(e,"stretch")?U(u(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,h(e)-3-(~f(e,"!important")&&10))){case 107:return u(e,":",":"+L)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+L+(45===l(e,14)?"inline-":"")+"box$3$1"+L+"$2$3$1"+D+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return L+e+D+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+D+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+D+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return L+e+D+e+e}return e}function V(e){return _(Y("",null,null,null,[""],e=T(e),0,[0],e))}function Y(e,t,r,n,a,c,o,i,l){for(var p=0,y=0,m=o,v=0,g=0,b=0,$=1,w=1,k=1,x=0,A="",O=a,T=c,_=n,z=A;w;)switch(b=x,x=C()){case 40:if(108!=b&&58==z.charCodeAt(m-1)){-1!=f(z+=u(M(x),"&","&\f"),"&\f")&&(k=-1);break}case 34:case 39:case 91:z+=M(x);break;case 9:case 10:case 13:case 32:z+=N(b);break;case 92:z+=j(P()-1,7);continue;case 47:switch(E()){case 42:case 47:d(K(F(C(),P()),t,r),l);break;default:z+="/"}break;case 123*$:i[p++]=h(z)*k;case 125*$:case 59:case 0:switch(x){case 0:case 125:w=0;case 59+y:g>0&&h(z)-m&&d(g>32?Q(z+";",n,r,m-1):Q(u(z," ","")+";",n,r,m-2),l);break;case 59:z+=";";default:if(d(_=J(z,t,r,p,y,a,i,A,O=[],T=[],m),c),123===x)if(0===y)Y(z,t,_,_,O,c,m,i,T);else switch(v){case 100:case 109:case 115:Y(e,_,_,n&&d(J(e,_,_,0,0,a,i,A,a,O=[],m),T),a,T,m,i,n?O:T);break;default:Y(z,_,_,_,[""],T,0,i,T)}}p=y=g=0,$=k=1,A=z="",m=o;break;case 58:m=1+h(z),g=b;default:if($<1)if(123==x)--$;else if(125==x&&0==$++&&125==S())continue;switch(z+=s(x),x*$){case 38:k=y>0?1:(z+="\f",-1);break;case 44:i[p++]=(h(z)-1)*k,k=1;break;case 64:45===E()&&(z+=M(C())),v=E(),y=m=h(A=z+=R(P())),x++;break;case 45:45===b&&2==h(z)&&($=0)}}return c}function J(e,t,r,n,a,s,o,f,l,h,d){for(var m=a-1,v=0===a?s:[""],g=y(v),b=0,$=0,w=0;b<n;++b)for(var x=0,S=p(e,m+1,m=c($=o[b])),C=e;x<g;++x)(C=i($>0?v[x]+" "+S:u(S,/&\f/g,v[x])))&&(l[w++]=C);return k(e,t,r,0===a?W:f,l,h,d)}function K(e,t,r){return k(e,t,r,q,s($),p(e,2,-2),0)}function Q(e,t,r,n){return k(e,t,r,Z,p(e,0,n),p(e,n+1,-1),n)}var X=function(e,t,r){for(var n=0,a=0;n=a,a=E(),38===n&&12===a&&(t[r]=1),!O(a);)C();return A(e,b)},ee=function(e,t){return _(function(e,t){var r=-1,n=44;do{switch(O(n)){case 0:38===n&&12===E()&&(t[r]=1),e[r]+=X(b-1,t,r);break;case 2:e[r]+=M(n);break;case 4:if(44===n){e[++r]=58===E()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=s(n)}}while(n=C());return e}(T(e),t))},te=new WeakMap,re=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||te.get(r))&&!n){te.set(e,!0);for(var a=[],c=ee(t,a),s=r.props,o=0,i=0;o<c.length;o++)for(var u=0;u<s.length;u++,i++)e.props[i]=a[o]?c[o].replace(/&\f/g,s[u]):s[u]+" "+c[o]}}},ne=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ae=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Z:e.return=U(e.value,e.length);break;case B:return G([x(e,{value:u(e.value,"@","@"+L)})],n);case W:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return G([x(e,{props:[u(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return G([x(e,{props:[u(t,/:(plac\w+)/,":-webkit-input-$1")]}),x(e,{props:[u(t,/:(plac\w+)/,":-moz-$1")]}),x(e,{props:[u(t,/:(plac\w+)/,D+"input-$1")]})],n)}return""}))}}];const ce=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||ae;var c,s,o={},i=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;i.push(e)}));var u,f,l,p,h=[H,(p=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&p(e)})],d=(f=[re,ne].concat(n,h),l=y(f),function(e,t,r,n){for(var a="",c=0;c<l;c++)a+=f[c](e,t,r,n)||"";return a});s=function(e,t,r,n){u=r,G(V(e?e+"{"+t.styles+"}":t.styles),d),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new a({key:t,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(i),m};var se=r(11);const oe=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}};var ie=r(6058),ue=r.n(ie);const fe=function(e,t){return ue()(e,t)};var le=r(6651),pe=r(6174),he={}.hasOwnProperty,ye=(0,n.createContext)("undefined"!=typeof HTMLElement?ce({key:"css"}):null);var de=ye.Provider,me=function(){return(0,n.useContext)(ye)},ve=function(e){return(0,n.forwardRef)((function(t,r){var a=(0,n.useContext)(ye);return e(t,a,r)}))},ge=(0,n.createContext)({});var be=function(){return(0,n.useContext)(ge)},$e=oe((function(e){return oe((function(t){return function(e,t){return"function"==typeof t?t(e):(0,se.Z)({},e,t)}(e,t)}))})),we=function(e){var t=(0,n.useContext)(ge);return e.theme!==t&&(t=$e(t)(e.theme)),(0,n.createElement)(ge.Provider,{value:t},e.children)};function ke(e){var t=e.displayName||e.name||"Component",r=function(t,r){var a=(0,n.useContext)(ge);return(0,n.createElement)(e,(0,se.Z)({theme:a,ref:r},t))},a=(0,n.forwardRef)(r);return a.displayName="WithTheme("+t+")",fe(a,e)}var xe=n.useInsertionEffect?n.useInsertionEffect:function(e){e()};function Se(e){xe(e)}var Ce="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ee=function(e,t){var r={};for(var n in t)he.call(t,n)&&(r[n]=t[n]);return r[Ce]=e,r},Pe=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;(0,le.hC)(t,r,n);Se((function(){return(0,le.My)(t,r,n)}));return null},Ae=ve((function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var c=e[Ce],s=[a],o="";"string"==typeof e.className?o=(0,le.fp)(t.registered,s,e.className):null!=e.className&&(o=e.className+" ");var i=(0,pe.O)(s,void 0,(0,n.useContext)(ge));o+=t.key+"-"+i.name;var u={};for(var f in e)he.call(e,f)&&"css"!==f&&f!==Ce&&(u[f]=e[f]);return u.ref=r,u.className=o,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(Pe,{cache:t,serialized:i,isStringTag:"string"==typeof c}),(0,n.createElement)(c,u))}));var Oe=function(e,t){var r=arguments;if(null==t||!he.call(t,"css"))return n.createElement.apply(void 0,r);var a=r.length,c=new Array(a);c[0]=Ae,c[1]=Ee(e,t);for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)},Te=n.useInsertionEffect?n.useInsertionEffect:n.useLayoutEffect,_e=ve((function(e,t){var r=e.styles,a=(0,pe.O)([r],void 0,(0,n.useContext)(ge)),c=(0,n.useRef)();return Te((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,s=document.querySelector('style[data-emotion="'+e+" "+a.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==s&&(n=!0,s.setAttribute("data-emotion",e),r.hydrate([s])),c.current=[r,n],function(){r.flush()}}),[t]),Te((function(){var e=c.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==a.next&&(0,le.My)(t,a.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",a,r,!1)}}),[t,a.name]),null}));function Me(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,pe.O)(t)}var Ne=function(){var e=Me.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},je=function e(t){for(var r=t.length,n=0,a="";n<r;n++){var c=t[n];if(null!=c){var s=void 0;switch(typeof c){case"boolean":break;case"object":if(Array.isArray(c))s=e(c);else for(var o in s="",c)c[o]&&o&&(s&&(s+=" "),s+=o);break;default:s=c}s&&(a&&(a+=" "),a+=s)}}return a};function ze(e,t,r){var n=[],a=(0,le.fp)(e,n,r);return n.length<2?r:a+t(n)}var Fe=function(e){var t=e.cache,r=e.serializedArr;Se((function(){for(var e=0;e<r.length;e++)(0,le.My)(t,r[e],!1)}));return null},Re=ve((function(e,t){var r=[],a=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var c=(0,pe.O)(n,t.registered);return r.push(c),(0,le.hC)(t,c,!1),t.key+"-"+c.name},c={css:a,cx:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return ze(t.registered,a,je(r))},theme:(0,n.useContext)(ge)},s=e.children(c);return!0,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(Fe,{cache:t,serializedArr:r}),s)}))},6058:(e,t,r)=>{var n=r(1508),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function i(e){return n.isMemo(e)?s:o[e.$$typeof]||a}o[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[n.Memo]=s;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var a=h(r);a&&a!==y&&e(t,a,n)}var s=f(r);l&&(s=s.concat(l(r)));for(var o=i(t),d=i(r),m=0;m<s.length;++m){var v=s[m];if(!(c[v]||n&&n[v]||d&&d[v]||o&&o[v])){var g=p(r,v);try{u(t,v,g)}catch(e){}}}}return t}},4883:(e,t)=>{var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,$=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case c:case o:case s:case h:return e;default:switch(e=e&&e.$$typeof){case u:case p:case m:case d:case i:return e;default:return t}}case a:return t}}}function k(e){return w(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=i,t.Element=n,t.ForwardRef=p,t.Fragment=c,t.Lazy=m,t.Memo=d,t.Portal=a,t.Profiler=o,t.StrictMode=s,t.Suspense=h,t.isAsyncMode=function(e){return k(e)||w(e)===f},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===c},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===d},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===o},t.isStrictMode=function(e){return w(e)===s},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===l||e===o||e===s||e===h||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===i||e.$$typeof===u||e.$$typeof===p||e.$$typeof===g||e.$$typeof===b||e.$$typeof===$||e.$$typeof===v)},t.typeOf=w},1508:(e,t,r)=>{e.exports=r(4883)}}]);