(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))f(h);new MutationObserver(h=>{for(const j of h)if(j.type==="childList")for(const D of j.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&f(D)}).observe(document,{childList:!0,subtree:!0});function d(h){const j={};return h.integrity&&(j.integrity=h.integrity),h.referrerPolicy&&(j.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?j.credentials="include":h.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function f(h){if(h.ep)return;h.ep=!0;const j=d(h);fetch(h.href,j)}})();function Fg(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var sr={exports:{}},Ia={};var L0;function Wg(){if(L0)return Ia;L0=1;var u=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function d(f,h,j){var D=null;if(j!==void 0&&(D=""+j),h.key!==void 0&&(D=""+h.key),"key"in h){j={};for(var w in h)w!=="key"&&(j[w]=h[w])}else j=h;return h=j.ref,{$$typeof:u,type:f,key:D,ref:h!==void 0?h:null,props:j}}return Ia.Fragment=r,Ia.jsx=d,Ia.jsxs=d,Ia}var $0;function Ig(){return $0||($0=1,sr.exports=Wg()),sr.exports}var o=Ig(),dr={exports:{}},pt={};var X0;function Pg(){if(X0)return pt;X0=1;var u=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),D=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),H=Symbol.iterator;function J(g){return g===null||typeof g!="object"?null:(g=H&&g[H]||g["@@iterator"],typeof g=="function"?g:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,at={};function it(g,_,G){this.props=g,this.context=_,this.refs=at,this.updater=G||q}it.prototype.isReactComponent={},it.prototype.setState=function(g,_){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,_,"setState")},it.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Z(){}Z.prototype=it.prototype;function st(g,_,G){this.props=g,this.context=_,this.refs=at,this.updater=G||q}var ot=st.prototype=new Z;ot.constructor=st,I(ot,it.prototype),ot.isPureReactComponent=!0;var tt=Array.isArray;function rt(){}var C={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function lt(g,_,G){var z=G.ref;return{$$typeof:u,type:g,key:_,ref:z!==void 0?z:null,props:G}}function k(g,_){return lt(g.type,_,g.props)}function F(g){return typeof g=="object"&&g!==null&&g.$$typeof===u}function jt(g){var _={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(G){return _[G]})}var bt=/\/+/g;function X(g,_){return typeof g=="object"&&g!==null&&g.key!=null?jt(""+g.key):_.toString(36)}function W(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(rt,rt):(g.status="pending",g.then(function(_){g.status==="pending"&&(g.status="fulfilled",g.value=_)},function(_){g.status==="pending"&&(g.status="rejected",g.reason=_)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function x(g,_,G,z,K){var ct=typeof g;(ct==="undefined"||ct==="boolean")&&(g=null);var dt=!1;if(g===null)dt=!0;else switch(ct){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(g.$$typeof){case u:case r:dt=!0;break;case L:return dt=g._init,x(dt(g._payload),_,G,z,K)}}if(dt)return K=K(g),dt=z===""?"."+X(g,0):z,tt(K)?(G="",dt!=null&&(G=dt.replace(bt,"$&/")+"/"),x(K,_,G,"",function(ue){return ue})):K!=null&&(F(K)&&(K=k(K,G+(K.key==null||g&&g.key===K.key?"":(""+K.key).replace(bt,"$&/")+"/")+dt)),_.push(K)),1;dt=0;var Rt=z===""?".":z+":";if(tt(g))for(var Tt=0;Tt<g.length;Tt++)z=g[Tt],ct=Rt+X(z,Tt),dt+=x(z,_,G,ct,K);else if(Tt=J(g),typeof Tt=="function")for(g=Tt.call(g),Tt=0;!(z=g.next()).done;)z=z.value,ct=Rt+X(z,Tt++),dt+=x(z,_,G,ct,K);else if(ct==="object"){if(typeof g.then=="function")return x(W(g),_,G,z,K);throw _=String(g),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return dt}function E(g,_,G){if(g==null)return g;var z=[],K=0;return x(g,z,"","",function(ct){return _.call(G,ct,K++)}),z}function $(g){if(g._status===-1){var _=g._result;_=_(),_.then(function(G){(g._status===0||g._status===-1)&&(g._status=1,g._result=G)},function(G){(g._status===0||g._status===-1)&&(g._status=2,g._result=G)}),g._status===-1&&(g._status=0,g._result=_)}if(g._status===1)return g._result.default;throw g._result}var V=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},M={map:E,forEach:function(g,_,G){E(g,function(){_.apply(this,arguments)},G)},count:function(g){var _=0;return E(g,function(){_++}),_},toArray:function(g){return E(g,function(_){return _})||[]},only:function(g){if(!F(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return pt.Activity=U,pt.Children=M,pt.Component=it,pt.Fragment=d,pt.Profiler=h,pt.PureComponent=st,pt.StrictMode=f,pt.Suspense=S,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,pt.__COMPILER_RUNTIME={__proto__:null,c:function(g){return C.H.useMemoCache(g)}},pt.cache=function(g){return function(){return g.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(g,_,G){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var z=I({},g.props),K=g.key;if(_!=null)for(ct in _.key!==void 0&&(K=""+_.key),_)!Q.call(_,ct)||ct==="key"||ct==="__self"||ct==="__source"||ct==="ref"&&_.ref===void 0||(z[ct]=_[ct]);var ct=arguments.length-2;if(ct===1)z.children=G;else if(1<ct){for(var dt=Array(ct),Rt=0;Rt<ct;Rt++)dt[Rt]=arguments[Rt+2];z.children=dt}return lt(g.type,K,z)},pt.createContext=function(g){return g={$$typeof:D,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:j,_context:g},g},pt.createElement=function(g,_,G){var z,K={},ct=null;if(_!=null)for(z in _.key!==void 0&&(ct=""+_.key),_)Q.call(_,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(K[z]=_[z]);var dt=arguments.length-2;if(dt===1)K.children=G;else if(1<dt){for(var Rt=Array(dt),Tt=0;Tt<dt;Tt++)Rt[Tt]=arguments[Tt+2];K.children=Rt}if(g&&g.defaultProps)for(z in dt=g.defaultProps,dt)K[z]===void 0&&(K[z]=dt[z]);return lt(g,ct,K)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(g){return{$$typeof:w,render:g}},pt.isValidElement=F,pt.lazy=function(g){return{$$typeof:L,_payload:{_status:-1,_result:g},_init:$}},pt.memo=function(g,_){return{$$typeof:y,type:g,compare:_===void 0?null:_}},pt.startTransition=function(g){var _=C.T,G={};C.T=G;try{var z=g(),K=C.S;K!==null&&K(G,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(rt,V)}catch(ct){V(ct)}finally{_!==null&&G.types!==null&&(_.types=G.types),C.T=_}},pt.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},pt.use=function(g){return C.H.use(g)},pt.useActionState=function(g,_,G){return C.H.useActionState(g,_,G)},pt.useCallback=function(g,_){return C.H.useCallback(g,_)},pt.useContext=function(g){return C.H.useContext(g)},pt.useDebugValue=function(){},pt.useDeferredValue=function(g,_){return C.H.useDeferredValue(g,_)},pt.useEffect=function(g,_){return C.H.useEffect(g,_)},pt.useEffectEvent=function(g){return C.H.useEffectEvent(g)},pt.useId=function(){return C.H.useId()},pt.useImperativeHandle=function(g,_,G){return C.H.useImperativeHandle(g,_,G)},pt.useInsertionEffect=function(g,_){return C.H.useInsertionEffect(g,_)},pt.useLayoutEffect=function(g,_){return C.H.useLayoutEffect(g,_)},pt.useMemo=function(g,_){return C.H.useMemo(g,_)},pt.useOptimistic=function(g,_){return C.H.useOptimistic(g,_)},pt.useReducer=function(g,_,G){return C.H.useReducer(g,_,G)},pt.useRef=function(g){return C.H.useRef(g)},pt.useState=function(g){return C.H.useState(g)},pt.useSyncExternalStore=function(g,_,G){return C.H.useSyncExternalStore(g,_,G)},pt.useTransition=function(){return C.H.useTransition()},pt.version="19.2.4",pt}var Q0;function Rr(){return Q0||(Q0=1,dr.exports=Pg()),dr.exports}var nt=Rr();const Pn=Fg(nt);var pr={exports:{}},Pa={},hr={exports:{}},gr={};var Z0;function tm(){return Z0||(Z0=1,(function(u){function r(x,E){var $=x.length;x.push(E);t:for(;0<$;){var V=$-1>>>1,M=x[V];if(0<h(M,E))x[V]=E,x[$]=M,$=V;else break t}}function d(x){return x.length===0?null:x[0]}function f(x){if(x.length===0)return null;var E=x[0],$=x.pop();if($!==E){x[0]=$;t:for(var V=0,M=x.length,g=M>>>1;V<g;){var _=2*(V+1)-1,G=x[_],z=_+1,K=x[z];if(0>h(G,$))z<M&&0>h(K,G)?(x[V]=K,x[z]=$,V=z):(x[V]=G,x[_]=$,V=_);else if(z<M&&0>h(K,$))x[V]=K,x[z]=$,V=z;else break t}}return E}function h(x,E){var $=x.sortIndex-E.sortIndex;return $!==0?$:x.id-E.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;u.unstable_now=function(){return j.now()}}else{var D=Date,w=D.now();u.unstable_now=function(){return D.now()-w}}var S=[],y=[],L=1,U=null,H=3,J=!1,q=!1,I=!1,at=!1,it=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;function ot(x){for(var E=d(y);E!==null;){if(E.callback===null)f(y);else if(E.startTime<=x)f(y),E.sortIndex=E.expirationTime,r(S,E);else break;E=d(y)}}function tt(x){if(I=!1,ot(x),!q)if(d(S)!==null)q=!0,rt||(rt=!0,jt());else{var E=d(y);E!==null&&W(tt,E.startTime-x)}}var rt=!1,C=-1,Q=5,lt=-1;function k(){return at?!0:!(u.unstable_now()-lt<Q)}function F(){if(at=!1,rt){var x=u.unstable_now();lt=x;var E=!0;try{t:{q=!1,I&&(I=!1,Z(C),C=-1),J=!0;var $=H;try{e:{for(ot(x),U=d(S);U!==null&&!(U.expirationTime>x&&k());){var V=U.callback;if(typeof V=="function"){U.callback=null,H=U.priorityLevel;var M=V(U.expirationTime<=x);if(x=u.unstable_now(),typeof M=="function"){U.callback=M,ot(x),E=!0;break e}U===d(S)&&f(S),ot(x)}else f(S);U=d(S)}if(U!==null)E=!0;else{var g=d(y);g!==null&&W(tt,g.startTime-x),E=!1}}break t}finally{U=null,H=$,J=!1}E=void 0}}finally{E?jt():rt=!1}}}var jt;if(typeof st=="function")jt=function(){st(F)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,X=bt.port2;bt.port1.onmessage=F,jt=function(){X.postMessage(null)}}else jt=function(){it(F,0)};function W(x,E){C=it(function(){x(u.unstable_now())},E)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(x){x.callback=null},u.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<x?Math.floor(1e3/x):5},u.unstable_getCurrentPriorityLevel=function(){return H},u.unstable_next=function(x){switch(H){case 1:case 2:case 3:var E=3;break;default:E=H}var $=H;H=E;try{return x()}finally{H=$}},u.unstable_requestPaint=function(){at=!0},u.unstable_runWithPriority=function(x,E){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var $=H;H=x;try{return E()}finally{H=$}},u.unstable_scheduleCallback=function(x,E,$){var V=u.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?V+$:V):$=V,x){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=$+M,x={id:L++,callback:E,priorityLevel:x,startTime:$,expirationTime:M,sortIndex:-1},$>V?(x.sortIndex=$,r(y,x),d(S)===null&&x===d(y)&&(I?(Z(C),C=-1):I=!0,W(tt,$-V))):(x.sortIndex=M,r(S,x),q||J||(q=!0,rt||(rt=!0,jt()))),x},u.unstable_shouldYield=k,u.unstable_wrapCallback=function(x){var E=H;return function(){var $=H;H=E;try{return x.apply(this,arguments)}finally{H=$}}}})(gr)),gr}var V0;function em(){return V0||(V0=1,hr.exports=tm()),hr.exports}var mr={exports:{}},ce={};var K0;function lm(){if(K0)return ce;K0=1;var u=Rr();function r(S){var y="https://react.dev/errors/"+S;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var L=2;L<arguments.length;L++)y+="&args[]="+encodeURIComponent(arguments[L])}return"Minified React error #"+S+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var f={d:{f:d,r:function(){throw Error(r(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function j(S,y,L){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:U==null?null:""+U,children:S,containerInfo:y,implementation:L}}var D=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(S,y){if(S==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,ce.createPortal=function(S,y){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return j(S,y,null,L)},ce.flushSync=function(S){var y=D.T,L=f.p;try{if(D.T=null,f.p=2,S)return S()}finally{D.T=y,f.p=L,f.d.f()}},ce.preconnect=function(S,y){typeof S=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,f.d.C(S,y))},ce.prefetchDNS=function(S){typeof S=="string"&&f.d.D(S)},ce.preinit=function(S,y){if(typeof S=="string"&&y&&typeof y.as=="string"){var L=y.as,U=w(L,y.crossOrigin),H=typeof y.integrity=="string"?y.integrity:void 0,J=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;L==="style"?f.d.S(S,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:U,integrity:H,fetchPriority:J}):L==="script"&&f.d.X(S,{crossOrigin:U,integrity:H,fetchPriority:J,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ce.preinitModule=function(S,y){if(typeof S=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var L=w(y.as,y.crossOrigin);f.d.M(S,{crossOrigin:L,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&f.d.M(S)},ce.preload=function(S,y){if(typeof S=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var L=y.as,U=w(L,y.crossOrigin);f.d.L(S,L,{crossOrigin:U,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ce.preloadModule=function(S,y){if(typeof S=="string")if(y){var L=w(y.as,y.crossOrigin);f.d.m(S,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:L,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else f.d.m(S)},ce.requestFormReset=function(S){f.d.r(S)},ce.unstable_batchedUpdates=function(S,y){return S(y)},ce.useFormState=function(S,y,L){return D.H.useFormState(S,y,L)},ce.useFormStatus=function(){return D.H.useHostTransitionStatus()},ce.version="19.2.4",ce}var k0;function nm(){if(k0)return mr.exports;k0=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(r){console.error(r)}}return u(),mr.exports=lm(),mr.exports}var J0;function am(){if(J0)return Pa;J0=1;var u=em(),r=Rr(),d=nm();function f(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function j(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function D(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function w(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(j(t)!==t)throw Error(f(188))}function y(t){var e=t.alternate;if(!e){if(e=j(t),e===null)throw Error(f(188));return e!==t?null:t}for(var l=t,n=e;;){var a=l.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){l=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===l)return S(a),t;if(i===n)return S(a),e;i=i.sibling}throw Error(f(188))}if(l.return!==n.return)l=a,n=i;else{for(var c=!1,s=a.child;s;){if(s===l){c=!0,l=a,n=i;break}if(s===n){c=!0,n=a,l=i;break}s=s.sibling}if(!c){for(s=i.child;s;){if(s===l){c=!0,l=i,n=a;break}if(s===n){c=!0,n=i,l=a;break}s=s.sibling}if(!c)throw Error(f(189))}}if(l.alternate!==n)throw Error(f(190))}if(l.tag!==3)throw Error(f(188));return l.stateNode.current===l?t:e}function L(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=L(t),e!==null)return e;t=t.sibling}return null}var U=Object.assign,H=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),st=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function jt(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case it:return"Profiler";case at:return"StrictMode";case tt:return"Suspense";case rt:return"SuspenseList";case lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case st:return t.displayName||"Context";case Z:return(t._context.displayName||"Context")+".Consumer";case ot:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C:return e=t.displayName||null,e!==null?e:X(t.type)||"Memo";case Q:e=t._payload,t=t._init;try{return X(t(e))}catch{}}return null}var W=Array.isArray,x=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},V=[],M=-1;function g(t){return{current:t}}function _(t){0>M||(t.current=V[M],V[M]=null,M--)}function G(t,e){M++,V[M]=t.current,t.current=e}var z=g(null),K=g(null),ct=g(null),dt=g(null);function Rt(t,e){switch(G(ct,e),G(K,t),G(z,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?f0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=f0(e),t=s0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}_(z),G(z,t)}function Tt(){_(z),_(K),_(ct)}function ue(t){t.memoizedState!==null&&G(dt,t);var e=z.current,l=s0(e,t.type);e!==l&&(G(K,t),G(z,l))}function Ll(t){K.current===t&&(_(z),_(K)),dt.current===t&&(_(dt),ka._currentValue=$)}var ia,ri;function Pt(t){if(ia===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);ia=e&&e[1]||"",ri=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ia+t+ri}var $l=!1;function ku(t,e){if(!t||$l)return"";$l=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(N){var O=N}Reflect.construct(t,[],Y)}else{try{Y.call()}catch(N){O=N}t.call(Y.prototype)}}else{try{throw Error()}catch(N){O=N}(Y=t())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(N){if(N&&O&&typeof N.stack=="string")return[N.stack,O.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),c=i[0],s=i[1];if(c&&s){var m=c.split(`
`),A=s.split(`
`);for(a=n=0;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;for(;a<A.length&&!A[a].includes("DetermineComponentFrameRoot");)a++;if(n===m.length||a===A.length)for(n=m.length-1,a=A.length-1;1<=n&&0<=a&&m[n]!==A[a];)a--;for(;1<=n&&0<=a;n--,a--)if(m[n]!==A[a]){if(n!==1||a!==1)do if(n--,a--,0>a||m[n]!==A[a]){var R=`
`+m[n].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=n&&0<=a);break}}}finally{$l=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Pt(l):""}function Ch(t,e){switch(t.tag){case 26:case 27:case 5:return Pt(t.type);case 16:return Pt("Lazy");case 13:return t.child!==e&&e!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return ku(t.type,!1);case 11:return ku(t.type.render,!1);case 1:return ku(t.type,!0);case 31:return Pt("Activity");default:return""}}function Gr(t){try{var e="",l=null;do e+=Ch(t,l),l=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ju=Object.prototype.hasOwnProperty,Fu=u.unstable_scheduleCallback,Wu=u.unstable_cancelCallback,Oh=u.unstable_shouldYield,Mh=u.unstable_requestPaint,xe=u.unstable_now,Dh=u.unstable_getCurrentPriorityLevel,Lr=u.unstable_ImmediatePriority,$r=u.unstable_UserBlockingPriority,fi=u.unstable_NormalPriority,_h=u.unstable_LowPriority,Xr=u.unstable_IdlePriority,Nh=u.log,wh=u.unstable_setDisableYieldValue,ua=null,ye=null;function hl(t){if(typeof Nh=="function"&&wh(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(ua,t)}catch{}}var ve=Math.clz32?Math.clz32:Bh,Rh=Math.log,Uh=Math.LN2;function Bh(t){return t>>>=0,t===0?32:31-(Rh(t)/Uh|0)|0}var si=256,di=262144,pi=4194304;function Xl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function hi(t,e,l){var n=t.pendingLanes;if(n===0)return 0;var a=0,i=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var s=n&134217727;return s!==0?(n=s&~i,n!==0?a=Xl(n):(c&=s,c!==0?a=Xl(c):l||(l=s&~t,l!==0&&(a=Xl(l))))):(s=n&~i,s!==0?a=Xl(s):c!==0?a=Xl(c):l||(l=n&~t,l!==0&&(a=Xl(l)))),a===0?0:e!==0&&e!==a&&(e&i)===0&&(i=a&-a,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:a}function ca(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Hh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qr(){var t=pi;return pi<<=1,(pi&62914560)===0&&(pi=4194304),t}function Iu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function oa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yh(t,e,l,n,a,i){var c=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,m=t.expirationTimes,A=t.hiddenUpdates;for(l=c&~l;0<l;){var R=31-ve(l),Y=1<<R;s[R]=0,m[R]=-1;var O=A[R];if(O!==null)for(A[R]=null,R=0;R<O.length;R++){var N=O[R];N!==null&&(N.lane&=-536870913)}l&=~Y}n!==0&&Zr(t,n,0),i!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=i&~(c&~e))}function Zr(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-ve(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|l&261930}function Vr(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var n=31-ve(l),a=1<<n;a&e|t[n]&e&&(t[n]|=e),l&=~a}}function Kr(t,e){var l=e&-e;return l=(l&42)!==0?1:Pu(l),(l&(t.suspendedLanes|e))!==0?0:l}function Pu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function kr(){var t=E.p;return t!==0?t:(t=window.event,t===void 0?32:R0(t.type))}function Jr(t,e){var l=E.p;try{return E.p=t,e()}finally{E.p=l}}var gl=Math.random().toString(36).slice(2),te="__reactFiber$"+gl,fe="__reactProps$"+gl,hn="__reactContainer$"+gl,ec="__reactEvents$"+gl,qh="__reactListeners$"+gl,Gh="__reactHandles$"+gl,Fr="__reactResources$"+gl,ra="__reactMarker$"+gl;function lc(t){delete t[te],delete t[fe],delete t[ec],delete t[qh],delete t[Gh]}function gn(t){var e=t[te];if(e)return e;for(var l=t.parentNode;l;){if(e=l[hn]||l[te]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=x0(t);t!==null;){if(l=t[te])return l;t=x0(t)}return e}t=l,l=t.parentNode}return null}function mn(t){if(t=t[te]||t[hn]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function fa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(f(33))}function bn(t){var e=t[Fr];return e||(e=t[Fr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Wt(t){t[ra]=!0}var Wr=new Set,Ir={};function Ql(t,e){xn(t,e),xn(t+"Capture",e)}function xn(t,e){for(Ir[t]=e,t=0;t<e.length;t++)Wr.add(e[t])}var Lh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pr={},tf={};function $h(t){return Ju.call(tf,t)?!0:Ju.call(Pr,t)?!1:Lh.test(t)?tf[t]=!0:(Pr[t]=!0,!1)}function gi(t,e,l){if($h(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function mi(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Je(t,e,l,n){if(n===null)t.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+n)}}function Oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ef(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xh(t,e,l){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nc(t){if(!t._valueTracker){var e=ef(t)?"checked":"value";t._valueTracker=Xh(t,e,""+t[e])}}function lf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),n="";return t&&(n=ef(t)?t.checked?"true":"false":t.value),t=n,t!==l?(e.setValue(t),!0):!1}function bi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qh=/[\n"\\]/g;function Me(t){return t.replace(Qh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ac(t,e,l,n,a,i,c,s){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Oe(e)):t.value!==""+Oe(e)&&(t.value=""+Oe(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?ic(t,c,Oe(e)):l!=null?ic(t,c,Oe(l)):n!=null&&t.removeAttribute("value"),a==null&&i!=null&&(t.defaultChecked=!!i),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Oe(s):t.removeAttribute("name")}function nf(t,e,l,n,a,i,c,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){nc(t);return}l=l!=null?""+Oe(l):"",e=e!=null?""+Oe(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=s?t.checked:!!n,t.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),nc(t)}function ic(t,e,l){e==="number"&&bi(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function yn(t,e,l,n){if(t=t.options,e){e={};for(var a=0;a<l.length;a++)e["$"+l[a]]=!0;for(l=0;l<t.length;l++)a=e.hasOwnProperty("$"+t[l].value),t[l].selected!==a&&(t[l].selected=a),a&&n&&(t[l].defaultSelected=!0)}else{for(l=""+Oe(l),e=null,a=0;a<t.length;a++){if(t[a].value===l){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function af(t,e,l){if(e!=null&&(e=""+Oe(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Oe(l):""}function uf(t,e,l,n){if(e==null){if(n!=null){if(l!=null)throw Error(f(92));if(W(n)){if(1<n.length)throw Error(f(93));n=n[0]}l=n}l==null&&(l=""),e=l}l=Oe(e),t.defaultValue=l,n=t.textContent,n===l&&n!==""&&n!==null&&(t.value=n),nc(t)}function vn(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Zh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cf(t,e,l){var n=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,l):typeof l!="number"||l===0||Zh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function of(t,e,l){if(e!=null&&typeof e!="object")throw Error(f(62));if(t=t.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var a in e)n=e[a],e.hasOwnProperty(a)&&l[a]!==n&&cf(t,a,n)}else for(var i in e)e.hasOwnProperty(i)&&cf(t,i,e[i])}function uc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xi(t){return Kh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fe(){}var cc=null;function oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sn=null,jn=null;function rf(t){var e=mn(t);if(e&&(t=e.stateNode)){var l=t[fe]||null;t:switch(t=e.stateNode,e.type){case"input":if(ac(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Me(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var n=l[e];if(n!==t&&n.form===t.form){var a=n[fe]||null;if(!a)throw Error(f(90));ac(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<l.length;e++)n=l[e],n.form===t.form&&lf(n)}break t;case"textarea":af(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&yn(t,!!l.multiple,e,!1)}}}var rc=!1;function ff(t,e,l){if(rc)return t(e,l);rc=!0;try{var n=t(e);return n}finally{if(rc=!1,(Sn!==null||jn!==null)&&(iu(),Sn&&(e=Sn,t=jn,jn=Sn=null,rf(e),t)))for(e=0;e<t.length;e++)rf(t[e])}}function sa(t,e){var l=t.stateNode;if(l===null)return null;var n=l[fe]||null;if(n===null)return null;l=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(f(231,e,typeof l));return l}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=!1;if(We)try{var da={};Object.defineProperty(da,"passive",{get:function(){fc=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{fc=!1}var ml=null,sc=null,yi=null;function sf(){if(yi)return yi;var t,e=sc,l=e.length,n,a="value"in ml?ml.value:ml.textContent,i=a.length;for(t=0;t<l&&e[t]===a[t];t++);var c=l-t;for(n=1;n<=c&&e[l-n]===a[i-n];n++);return yi=a.slice(t,1<n?1-n:void 0)}function vi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Si(){return!0}function df(){return!1}function se(t){function e(l,n,a,i,c){this._reactName=l,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Si:df,this.isPropagationStopped=df,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),e}var Zl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=se(Zl),pa=U({},Zl,{view:0,detail:0}),kh=se(pa),dc,pc,ha,zi=U({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ha&&(ha&&t.type==="mousemove"?(dc=t.screenX-ha.screenX,pc=t.screenY-ha.screenY):pc=dc=0,ha=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:pc}}),pf=se(zi),Jh=U({},zi,{dataTransfer:0}),Fh=se(Jh),Wh=U({},pa,{relatedTarget:0}),hc=se(Wh),Ih=U({},Zl,{animationName:0,elapsedTime:0,pseudoElement:0}),Ph=se(Ih),t1=U({},Zl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e1=se(t1),l1=U({},Zl,{data:0}),hf=se(l1),n1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i1[t])?!!e[t]:!1}function gc(){return u1}var c1=U({},pa,{key:function(t){if(t.key){var e=n1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(t){return t.type==="keypress"?vi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o1=se(c1),r1=U({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gf=se(r1),f1=U({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),s1=se(f1),d1=U({},Zl,{propertyName:0,elapsedTime:0,pseudoElement:0}),p1=se(d1),h1=U({},zi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=se(h1),m1=U({},Zl,{newState:0,oldState:0}),b1=se(m1),x1=[9,13,27,32],mc=We&&"CompositionEvent"in window,ga=null;We&&"documentMode"in document&&(ga=document.documentMode);var y1=We&&"TextEvent"in window&&!ga,mf=We&&(!mc||ga&&8<ga&&11>=ga),bf=" ",xf=!1;function yf(t,e){switch(t){case"keyup":return x1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zn=!1;function v1(t,e){switch(t){case"compositionend":return vf(e);case"keypress":return e.which!==32?null:(xf=!0,bf);case"textInput":return t=e.data,t===bf&&xf?null:t;default:return null}}function S1(t,e){if(zn)return t==="compositionend"||!mc&&yf(t,e)?(t=sf(),yi=sc=ml=null,zn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mf&&e.locale!=="ko"?null:e.data;default:return null}}var j1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!j1[t.type]:e==="textarea"}function jf(t,e,l,n){Sn?jn?jn.push(n):jn=[n]:Sn=n,e=du(e,"onChange"),0<e.length&&(l=new ji("onChange","change",null,l,n),t.push({event:l,listeners:e}))}var ma=null,ba=null;function z1(t){a0(t,0)}function Ti(t){var e=fa(t);if(lf(e))return t}function zf(t,e){if(t==="change")return e}var Tf=!1;if(We){var bc;if(We){var xc="oninput"in document;if(!xc){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),xc=typeof Af.oninput=="function"}bc=xc}else bc=!1;Tf=bc&&(!document.documentMode||9<document.documentMode)}function Ef(){ma&&(ma.detachEvent("onpropertychange",Cf),ba=ma=null)}function Cf(t){if(t.propertyName==="value"&&Ti(ba)){var e=[];jf(e,ba,t,oc(t)),ff(z1,e)}}function T1(t,e,l){t==="focusin"?(Ef(),ma=e,ba=l,ma.attachEvent("onpropertychange",Cf)):t==="focusout"&&Ef()}function A1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ti(ba)}function E1(t,e){if(t==="click")return Ti(e)}function C1(t,e){if(t==="input"||t==="change")return Ti(e)}function O1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Se=typeof Object.is=="function"?Object.is:O1;function xa(t,e){if(Se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),n=Object.keys(e);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var a=l[n];if(!Ju.call(e,a)||!Se(t[a],e[a]))return!1}return!0}function Of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mf(t,e){var l=Of(t);t=0;for(var n;l;){if(l.nodeType===3){if(n=t+l.textContent.length,t<=e&&n>=e)return{node:l,offset:e-t};t=n}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Of(l)}}function Df(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Df(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _f(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=bi(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=bi(t.document)}return e}function yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var M1=We&&"documentMode"in document&&11>=document.documentMode,Tn=null,vc=null,ya=null,Sc=!1;function Nf(t,e,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Sc||Tn==null||Tn!==bi(n)||(n=Tn,"selectionStart"in n&&yc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ya&&xa(ya,n)||(ya=n,n=du(vc,"onSelect"),0<n.length&&(e=new ji("onSelect","select",null,e,l),t.push({event:e,listeners:n}),e.target=Tn)))}function Vl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var An={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionrun:Vl("Transition","TransitionRun"),transitionstart:Vl("Transition","TransitionStart"),transitioncancel:Vl("Transition","TransitionCancel"),transitionend:Vl("Transition","TransitionEnd")},jc={},wf={};We&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Kl(t){if(jc[t])return jc[t];if(!An[t])return t;var e=An[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in wf)return jc[t]=e[l];return t}var Rf=Kl("animationend"),Uf=Kl("animationiteration"),Bf=Kl("animationstart"),D1=Kl("transitionrun"),_1=Kl("transitionstart"),N1=Kl("transitioncancel"),Hf=Kl("transitionend"),Yf=new Map,zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zc.push("scrollEnd");function qe(t,e){Yf.set(t,e),Ql(e,[t])}var Ai=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},De=[],En=0,Tc=0;function Ei(){for(var t=En,e=Tc=En=0;e<t;){var l=De[e];De[e++]=null;var n=De[e];De[e++]=null;var a=De[e];De[e++]=null;var i=De[e];if(De[e++]=null,n!==null&&a!==null){var c=n.pending;c===null?a.next=a:(a.next=c.next,c.next=a),n.pending=a}i!==0&&qf(l,a,i)}}function Ci(t,e,l,n){De[En++]=t,De[En++]=e,De[En++]=l,De[En++]=n,Tc|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Ac(t,e,l,n){return Ci(t,e,l,n),Oi(t)}function kl(t,e){return Ci(t,null,null,e),Oi(t)}function qf(t,e,l){t.lanes|=l;var n=t.alternate;n!==null&&(n.lanes|=l);for(var a=!1,i=t.return;i!==null;)i.childLanes|=l,n=i.alternate,n!==null&&(n.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(a=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,a&&e!==null&&(a=31-ve(l),t=i.hiddenUpdates,n=t[a],n===null?t[a]=[e]:n.push(e),e.lane=l|536870912),i):null}function Oi(t){if(50<La)throw La=0,Uo=null,Error(f(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Cn={};function w1(t,e,l,n){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(t,e,l,n){return new w1(t,e,l,n)}function Ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ie(t,e){var l=t.alternate;return l===null?(l=je(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Gf(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Mi(t,e,l,n,a,i){var c=0;if(n=t,typeof t=="function")Ec(t)&&(c=1);else if(typeof t=="string")c=Yg(t,l,z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case lt:return t=je(31,l,e,a),t.elementType=lt,t.lanes=i,t;case I:return Jl(l.children,a,i,e);case at:c=8,a|=24;break;case it:return t=je(12,l,e,a|2),t.elementType=it,t.lanes=i,t;case tt:return t=je(13,l,e,a),t.elementType=tt,t.lanes=i,t;case rt:return t=je(19,l,e,a),t.elementType=rt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case st:c=10;break t;case Z:c=9;break t;case ot:c=11;break t;case C:c=14;break t;case Q:c=16,n=null;break t}c=29,l=Error(f(130,t===null?"null":typeof t,"")),n=null}return e=je(c,l,e,a),e.elementType=t,e.type=n,e.lanes=i,e}function Jl(t,e,l,n){return t=je(7,t,n,e),t.lanes=l,t}function Cc(t,e,l){return t=je(6,t,null,e),t.lanes=l,t}function Lf(t){var e=je(18,null,null,0);return e.stateNode=t,e}function Oc(t,e,l){return e=je(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var $f=new WeakMap;function _e(t,e){if(typeof t=="object"&&t!==null){var l=$f.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Gr(e)},$f.set(t,e),e)}return{value:t,source:e,stack:Gr(e)}}var On=[],Mn=0,Di=null,va=0,Ne=[],we=0,bl=null,Ze=1,Ve="";function Pe(t,e){On[Mn++]=va,On[Mn++]=Di,Di=t,va=e}function Xf(t,e,l){Ne[we++]=Ze,Ne[we++]=Ve,Ne[we++]=bl,bl=t;var n=Ze;t=Ve;var a=32-ve(n)-1;n&=~(1<<a),l+=1;var i=32-ve(e)+a;if(30<i){var c=a-a%5;i=(n&(1<<c)-1).toString(32),n>>=c,a-=c,Ze=1<<32-ve(e)+a|l<<a|n,Ve=i+t}else Ze=1<<i|l<<a|n,Ve=t}function Mc(t){t.return!==null&&(Pe(t,1),Xf(t,1,0))}function Dc(t){for(;t===Di;)Di=On[--Mn],On[Mn]=null,va=On[--Mn],On[Mn]=null;for(;t===bl;)bl=Ne[--we],Ne[we]=null,Ve=Ne[--we],Ne[we]=null,Ze=Ne[--we],Ne[we]=null}function Qf(t,e){Ne[we++]=Ze,Ne[we++]=Ve,Ne[we++]=bl,Ze=e.id,Ve=e.overflow,bl=t}var ee=null,Bt=null,zt=!1,xl=null,Re=!1,_c=Error(f(519));function yl(t){var e=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sa(_e(e,t)),_c}function Zf(t){var e=t.stateNode,l=t.type,n=t.memoizedProps;switch(e[te]=t,e[fe]=n,l){case"dialog":yt("cancel",e),yt("close",e);break;case"iframe":case"object":case"embed":yt("load",e);break;case"video":case"audio":for(l=0;l<Xa.length;l++)yt(Xa[l],e);break;case"source":yt("error",e);break;case"img":case"image":case"link":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"input":yt("invalid",e),nf(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":yt("invalid",e);break;case"textarea":yt("invalid",e),uf(e,n.value,n.defaultValue,n.children)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||n.suppressHydrationWarning===!0||o0(e.textContent,l)?(n.popover!=null&&(yt("beforetoggle",e),yt("toggle",e)),n.onScroll!=null&&yt("scroll",e),n.onScrollEnd!=null&&yt("scrollend",e),n.onClick!=null&&(e.onclick=Fe),e=!0):e=!1,e||yl(t,!0)}function Vf(t){for(ee=t.return;ee;)switch(ee.tag){case 5:case 31:case 13:Re=!1;return;case 27:case 3:Re=!0;return;default:ee=ee.return}}function Dn(t){if(t!==ee)return!1;if(!zt)return Vf(t),zt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Fo(t.type,t.memoizedProps)),l=!l),l&&Bt&&yl(t),Vf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));Bt=b0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(317));Bt=b0(t)}else e===27?(e=Bt,wl(t.type)?(t=er,er=null,Bt=t):Bt=e):Bt=ee?Be(t.stateNode.nextSibling):null;return!0}function Fl(){Bt=ee=null,zt=!1}function Nc(){var t=xl;return t!==null&&(ge===null?ge=t:ge.push.apply(ge,t),xl=null),t}function Sa(t){xl===null?xl=[t]:xl.push(t)}var wc=g(null),Wl=null,tl=null;function vl(t,e,l){G(wc,e._currentValue),e._currentValue=l}function el(t){t._currentValue=wc.current,_(wc)}function Rc(t,e,l){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===l)break;t=t.return}}function Uc(t,e,l,n){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){var c=a.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=a;for(var m=0;m<e.length;m++)if(s.context===e[m]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),Rc(i.return,l,t),n||(c=null);break t}i=s.next}}else if(a.tag===18){if(c=a.return,c===null)throw Error(f(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),Rc(c,l,t),c=null}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===t){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}}function _n(t,e,l,n){t=null;for(var a=e,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var c=a.alternate;if(c===null)throw Error(f(387));if(c=c.memoizedProps,c!==null){var s=a.type;Se(a.pendingProps.value,c.value)||(t!==null?t.push(s):t=[s])}}else if(a===dt.current){if(c=a.alternate,c===null)throw Error(f(387));c.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(ka):t=[ka])}a=a.return}t!==null&&Uc(e,t,l,n),e.flags|=262144}function _i(t){for(t=t.firstContext;t!==null;){if(!Se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Il(t){Wl=t,tl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function le(t){return Kf(Wl,t)}function Ni(t,e){return Wl===null&&Il(t),Kf(t,e)}function Kf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},tl===null){if(t===null)throw Error(f(308));tl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else tl=tl.next=e;return l}var R1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},U1=u.unstable_scheduleCallback,B1=u.unstable_NormalPriority,Qt={$$typeof:st,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bc(){return{controller:new R1,data:new Map,refCount:0}}function ja(t){t.refCount--,t.refCount===0&&U1(B1,function(){t.controller.abort()})}var za=null,Hc=0,Nn=0,wn=null;function H1(t,e){if(za===null){var l=za=[];Hc=0,Nn=Lo(),wn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return Hc++,e.then(kf,kf),e}function kf(){if(--Hc===0&&za!==null){wn!==null&&(wn.status="fulfilled");var t=za;za=null,Nn=0,wn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Y1(t,e){var l=[],n={status:"pending",value:null,reason:null,then:function(a){l.push(a)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var a=0;a<l.length;a++)(0,l[a])(e)},function(a){for(n.status="rejected",n.reason=a,a=0;a<l.length;a++)(0,l[a])(void 0)}),n}var Jf=x.S;x.S=function(t,e){Nd=xe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&H1(t,e),Jf!==null&&Jf(t,e)};var Pl=g(null);function Yc(){var t=Pl.current;return t!==null?t:Ut.pooledCache}function wi(t,e){e===null?G(Pl,Pl.current):G(Pl,e.pool)}function Ff(){var t=Yc();return t===null?null:{parent:Qt._currentValue,pool:t}}var Rn=Error(f(460)),qc=Error(f(474)),Ri=Error(f(542)),Ui={then:function(){}};function Wf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function If(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Fe,Fe),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ts(t),t;default:if(typeof e.status=="string")e.then(Fe,Fe);else{if(t=Ut,t!==null&&100<t.shellSuspendCounter)throw Error(f(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=n}},function(n){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ts(t),t}throw en=e,Rn}}function tn(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(en=l,Rn):l}}var en=null;function Pf(){if(en===null)throw Error(f(459));var t=en;return en=null,t}function ts(t){if(t===Rn||t===Ri)throw Error(f(483))}var Un=null,Ta=0;function Bi(t){var e=Ta;return Ta+=1,Un===null&&(Un=[]),If(Un,t,e)}function Aa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Hi(t,e){throw e.$$typeof===H?Error(f(525)):(t=Object.prototype.toString.call(e),Error(f(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function es(t){function e(v,b){if(t){var T=v.deletions;T===null?(v.deletions=[b],v.flags|=16):T.push(b)}}function l(v,b){if(!t)return null;for(;b!==null;)e(v,b),b=b.sibling;return null}function n(v){for(var b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function a(v,b){return v=Ie(v,b),v.index=0,v.sibling=null,v}function i(v,b,T){return v.index=T,t?(T=v.alternate,T!==null?(T=T.index,T<b?(v.flags|=67108866,b):T):(v.flags|=67108866,b)):(v.flags|=1048576,b)}function c(v){return t&&v.alternate===null&&(v.flags|=67108866),v}function s(v,b,T,B){return b===null||b.tag!==6?(b=Cc(T,v.mode,B),b.return=v,b):(b=a(b,T),b.return=v,b)}function m(v,b,T,B){var ut=T.type;return ut===I?R(v,b,T.props.children,B,T.key):b!==null&&(b.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===Q&&tn(ut)===b.type)?(b=a(b,T.props),Aa(b,T),b.return=v,b):(b=Mi(T.type,T.key,T.props,null,v.mode,B),Aa(b,T),b.return=v,b)}function A(v,b,T,B){return b===null||b.tag!==4||b.stateNode.containerInfo!==T.containerInfo||b.stateNode.implementation!==T.implementation?(b=Oc(T,v.mode,B),b.return=v,b):(b=a(b,T.children||[]),b.return=v,b)}function R(v,b,T,B,ut){return b===null||b.tag!==7?(b=Jl(T,v.mode,B,ut),b.return=v,b):(b=a(b,T),b.return=v,b)}function Y(v,b,T){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Cc(""+b,v.mode,T),b.return=v,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case J:return T=Mi(b.type,b.key,b.props,null,v.mode,T),Aa(T,b),T.return=v,T;case q:return b=Oc(b,v.mode,T),b.return=v,b;case Q:return b=tn(b),Y(v,b,T)}if(W(b)||jt(b))return b=Jl(b,v.mode,T,null),b.return=v,b;if(typeof b.then=="function")return Y(v,Bi(b),T);if(b.$$typeof===st)return Y(v,Ni(v,b),T);Hi(v,b)}return null}function O(v,b,T,B){var ut=b!==null?b.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return ut!==null?null:s(v,b,""+T,B);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case J:return T.key===ut?m(v,b,T,B):null;case q:return T.key===ut?A(v,b,T,B):null;case Q:return T=tn(T),O(v,b,T,B)}if(W(T)||jt(T))return ut!==null?null:R(v,b,T,B,null);if(typeof T.then=="function")return O(v,b,Bi(T),B);if(T.$$typeof===st)return O(v,b,Ni(v,T),B);Hi(v,T)}return null}function N(v,b,T,B,ut){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return v=v.get(T)||null,s(b,v,""+B,ut);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case J:return v=v.get(B.key===null?T:B.key)||null,m(b,v,B,ut);case q:return v=v.get(B.key===null?T:B.key)||null,A(b,v,B,ut);case Q:return B=tn(B),N(v,b,T,B,ut)}if(W(B)||jt(B))return v=v.get(T)||null,R(b,v,B,ut,null);if(typeof B.then=="function")return N(v,b,T,Bi(B),ut);if(B.$$typeof===st)return N(v,b,T,Ni(b,B),ut);Hi(b,B)}return null}function P(v,b,T,B){for(var ut=null,At=null,et=b,gt=b=0,St=null;et!==null&&gt<T.length;gt++){et.index>gt?(St=et,et=null):St=et.sibling;var Et=O(v,et,T[gt],B);if(Et===null){et===null&&(et=St);break}t&&et&&Et.alternate===null&&e(v,et),b=i(Et,b,gt),At===null?ut=Et:At.sibling=Et,At=Et,et=St}if(gt===T.length)return l(v,et),zt&&Pe(v,gt),ut;if(et===null){for(;gt<T.length;gt++)et=Y(v,T[gt],B),et!==null&&(b=i(et,b,gt),At===null?ut=et:At.sibling=et,At=et);return zt&&Pe(v,gt),ut}for(et=n(et);gt<T.length;gt++)St=N(et,v,gt,T[gt],B),St!==null&&(t&&St.alternate!==null&&et.delete(St.key===null?gt:St.key),b=i(St,b,gt),At===null?ut=St:At.sibling=St,At=St);return t&&et.forEach(function(Yl){return e(v,Yl)}),zt&&Pe(v,gt),ut}function ft(v,b,T,B){if(T==null)throw Error(f(151));for(var ut=null,At=null,et=b,gt=b=0,St=null,Et=T.next();et!==null&&!Et.done;gt++,Et=T.next()){et.index>gt?(St=et,et=null):St=et.sibling;var Yl=O(v,et,Et.value,B);if(Yl===null){et===null&&(et=St);break}t&&et&&Yl.alternate===null&&e(v,et),b=i(Yl,b,gt),At===null?ut=Yl:At.sibling=Yl,At=Yl,et=St}if(Et.done)return l(v,et),zt&&Pe(v,gt),ut;if(et===null){for(;!Et.done;gt++,Et=T.next())Et=Y(v,Et.value,B),Et!==null&&(b=i(Et,b,gt),At===null?ut=Et:At.sibling=Et,At=Et);return zt&&Pe(v,gt),ut}for(et=n(et);!Et.done;gt++,Et=T.next())Et=N(et,v,gt,Et.value,B),Et!==null&&(t&&Et.alternate!==null&&et.delete(Et.key===null?gt:Et.key),b=i(Et,b,gt),At===null?ut=Et:At.sibling=Et,At=Et);return t&&et.forEach(function(Jg){return e(v,Jg)}),zt&&Pe(v,gt),ut}function wt(v,b,T,B){if(typeof T=="object"&&T!==null&&T.type===I&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case J:t:{for(var ut=T.key;b!==null;){if(b.key===ut){if(ut=T.type,ut===I){if(b.tag===7){l(v,b.sibling),B=a(b,T.props.children),B.return=v,v=B;break t}}else if(b.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===Q&&tn(ut)===b.type){l(v,b.sibling),B=a(b,T.props),Aa(B,T),B.return=v,v=B;break t}l(v,b);break}else e(v,b);b=b.sibling}T.type===I?(B=Jl(T.props.children,v.mode,B,T.key),B.return=v,v=B):(B=Mi(T.type,T.key,T.props,null,v.mode,B),Aa(B,T),B.return=v,v=B)}return c(v);case q:t:{for(ut=T.key;b!==null;){if(b.key===ut)if(b.tag===4&&b.stateNode.containerInfo===T.containerInfo&&b.stateNode.implementation===T.implementation){l(v,b.sibling),B=a(b,T.children||[]),B.return=v,v=B;break t}else{l(v,b);break}else e(v,b);b=b.sibling}B=Oc(T,v.mode,B),B.return=v,v=B}return c(v);case Q:return T=tn(T),wt(v,b,T,B)}if(W(T))return P(v,b,T,B);if(jt(T)){if(ut=jt(T),typeof ut!="function")throw Error(f(150));return T=ut.call(T),ft(v,b,T,B)}if(typeof T.then=="function")return wt(v,b,Bi(T),B);if(T.$$typeof===st)return wt(v,b,Ni(v,T),B);Hi(v,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,b!==null&&b.tag===6?(l(v,b.sibling),B=a(b,T),B.return=v,v=B):(l(v,b),B=Cc(T,v.mode,B),B.return=v,v=B),c(v)):l(v,b)}return function(v,b,T,B){try{Ta=0;var ut=wt(v,b,T,B);return Un=null,ut}catch(et){if(et===Rn||et===Ri)throw et;var At=je(29,et,null,v.mode);return At.lanes=B,At.return=v,At}}}var ln=es(!0),ls=es(!1),Sl=!1;function Gc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function jl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function zl(t,e,l){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Ct&2)!==0){var a=n.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e,e=Oi(t),qf(t,null,l),e}return Ci(t,n,e,l),Oi(t)}function Ea(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,Vr(t,l)}}function $c(t,e){var l=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var a=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?a=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?a=i=e:i=i.next=e}else a=i=e;l={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Xc=!1;function Ca(){if(Xc){var t=wn;if(t!==null)throw t}}function Oa(t,e,l,n){Xc=!1;var a=t.updateQueue;Sl=!1;var i=a.firstBaseUpdate,c=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var m=s,A=m.next;m.next=null,c===null?i=A:c.next=A,c=m;var R=t.alternate;R!==null&&(R=R.updateQueue,s=R.lastBaseUpdate,s!==c&&(s===null?R.firstBaseUpdate=A:s.next=A,R.lastBaseUpdate=m))}if(i!==null){var Y=a.baseState;c=0,R=A=m=null,s=i;do{var O=s.lane&-536870913,N=O!==s.lane;if(N?(vt&O)===O:(n&O)===O){O!==0&&O===Nn&&(Xc=!0),R!==null&&(R=R.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var P=t,ft=s;O=e;var wt=l;switch(ft.tag){case 1:if(P=ft.payload,typeof P=="function"){Y=P.call(wt,Y,O);break t}Y=P;break t;case 3:P.flags=P.flags&-65537|128;case 0:if(P=ft.payload,O=typeof P=="function"?P.call(wt,Y,O):P,O==null)break t;Y=U({},Y,O);break t;case 2:Sl=!0}}O=s.callback,O!==null&&(t.flags|=64,N&&(t.flags|=8192),N=a.callbacks,N===null?a.callbacks=[O]:N.push(O))}else N={lane:O,tag:s.tag,payload:s.payload,callback:s.callback,next:null},R===null?(A=R=N,m=Y):R=R.next=N,c|=O;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;N=s,s=N.next,N.next=null,a.lastBaseUpdate=N,a.shared.pending=null}}while(!0);R===null&&(m=Y),a.baseState=m,a.firstBaseUpdate=A,a.lastBaseUpdate=R,i===null&&(a.shared.lanes=0),Ol|=c,t.lanes=c,t.memoizedState=Y}}function ns(t,e){if(typeof t!="function")throw Error(f(191,t));t.call(e)}function as(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)ns(l[t],e)}var Bn=g(null),Yi=g(0);function is(t,e){t=fl,G(Yi,t),G(Bn,e),fl=t|e.baseLanes}function Qc(){G(Yi,fl),G(Bn,Bn.current)}function Zc(){fl=Yi.current,_(Bn),_(Yi)}var ze=g(null),Ue=null;function Tl(t){var e=t.alternate;G($t,$t.current&1),G(ze,t),Ue===null&&(e===null||Bn.current!==null||e.memoizedState!==null)&&(Ue=t)}function Vc(t){G($t,$t.current),G(ze,t),Ue===null&&(Ue=t)}function us(t){t.tag===22?(G($t,$t.current),G(ze,t),Ue===null&&(Ue=t)):Al()}function Al(){G($t,$t.current),G(ze,ze.current)}function Te(t){_(ze),Ue===t&&(Ue=null),_($t)}var $t=g(0);function qi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Po(l)||tr(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ll=0,ht=null,_t=null,Zt=null,Gi=!1,Hn=!1,nn=!1,Li=0,Ma=0,Yn=null,q1=0;function Gt(){throw Error(f(321))}function Kc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Se(t[l],e[l]))return!1;return!0}function kc(t,e,l,n,a,i){return ll=i,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,x.H=t===null||t.memoizedState===null?Xs:ro,nn=!1,i=l(n,a),nn=!1,Hn&&(i=os(e,l,n,a)),cs(t),i}function cs(t){x.H=Na;var e=_t!==null&&_t.next!==null;if(ll=0,Zt=_t=ht=null,Gi=!1,Ma=0,Yn=null,e)throw Error(f(300));t===null||Vt||(t=t.dependencies,t!==null&&_i(t)&&(Vt=!0))}function os(t,e,l,n){ht=t;var a=0;do{if(Hn&&(Yn=null),Ma=0,Hn=!1,25<=a)throw Error(f(301));if(a+=1,Zt=_t=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=Qs,i=e(l,n)}while(Hn);return i}function G1(){var t=x.H,e=t.useState()[0];return e=typeof e.then=="function"?Da(e):e,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(ht.flags|=1024),e}function Jc(){var t=Li!==0;return Li=0,t}function Fc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Wc(t){if(Gi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Gi=!1}ll=0,Zt=_t=ht=null,Hn=!1,Ma=Li=0,Yn=null}function re(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?ht.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Xt(){if(_t===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Zt===null?ht.memoizedState:Zt.next;if(e!==null)Zt=e,_t=t;else{if(t===null)throw ht.alternate===null?Error(f(467)):Error(f(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Zt===null?ht.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function $i(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Da(t){var e=Ma;return Ma+=1,Yn===null&&(Yn=[]),t=If(Yn,t,e),e=ht,(Zt===null?e.memoizedState:Zt.next)===null&&(e=e.alternate,x.H=e===null||e.memoizedState===null?Xs:ro),t}function Xi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Da(t);if(t.$$typeof===st)return le(t)}throw Error(f(438,String(t)))}function Ic(t){var e=null,l=ht.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var n=ht.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=$i(),ht.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),n=0;n<t;n++)l[n]=k;return e.index++,l}function nl(t,e){return typeof e=="function"?e(t):e}function Qi(t){var e=Xt();return Pc(e,_t,t)}function Pc(t,e,l){var n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=l;var a=t.baseQueue,i=n.pending;if(i!==null){if(a!==null){var c=a.next;a.next=i.next,i.next=c}e.baseQueue=a=i,n.pending=null}if(i=t.baseState,a===null)t.memoizedState=i;else{e=a.next;var s=c=null,m=null,A=e,R=!1;do{var Y=A.lane&-536870913;if(Y!==A.lane?(vt&Y)===Y:(ll&Y)===Y){var O=A.revertLane;if(O===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),Y===Nn&&(R=!0);else if((ll&O)===O){A=A.next,O===Nn&&(R=!0);continue}else Y={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},m===null?(s=m=Y,c=i):m=m.next=Y,ht.lanes|=O,Ol|=O;Y=A.action,nn&&l(i,Y),i=A.hasEagerState?A.eagerState:l(i,Y)}else O={lane:Y,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},m===null?(s=m=O,c=i):m=m.next=O,ht.lanes|=Y,Ol|=Y;A=A.next}while(A!==null&&A!==e);if(m===null?c=i:m.next=s,!Se(i,t.memoizedState)&&(Vt=!0,R&&(l=wn,l!==null)))throw l;t.memoizedState=i,t.baseState=c,t.baseQueue=m,n.lastRenderedState=i}return a===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function to(t){var e=Xt(),l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=t;var n=l.dispatch,a=l.pending,i=e.memoizedState;if(a!==null){l.pending=null;var c=a=a.next;do i=t(i,c.action),c=c.next;while(c!==a);Se(i,e.memoizedState)||(Vt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,n]}function rs(t,e,l){var n=ht,a=Xt(),i=zt;if(i){if(l===void 0)throw Error(f(407));l=l()}else l=e();var c=!Se((_t||a).memoizedState,l);if(c&&(a.memoizedState=l,Vt=!0),a=a.queue,no(ds.bind(null,n,a,t),[t]),a.getSnapshot!==e||c||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,qn(9,{destroy:void 0},ss.bind(null,n,a,l,e),null),Ut===null)throw Error(f(349));i||(ll&127)!==0||fs(n,e,l)}return l}function fs(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=ht.updateQueue,e===null?(e=$i(),ht.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function ss(t,e,l,n){e.value=l,e.getSnapshot=n,ps(e)&&hs(t)}function ds(t,e,l){return l(function(){ps(e)&&hs(t)})}function ps(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Se(t,l)}catch{return!0}}function hs(t){var e=kl(t,2);e!==null&&me(e,t,2)}function eo(t){var e=re();if(typeof t=="function"){var l=t;if(t=l(),nn){hl(!0);try{l()}finally{hl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e}function gs(t,e,l,n){return t.baseState=l,Pc(t,_t,typeof n=="function"?n:nl)}function L1(t,e,l,n,a){if(Ki(t))throw Error(f(485));if(t=e.action,t!==null){var i={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};x.T!==null?l(!0):i.isTransition=!1,n(i),l=e.pending,l===null?(i.next=e.pending=i,ms(e,i)):(i.next=l.next,e.pending=l.next=i)}}function ms(t,e){var l=e.action,n=e.payload,a=t.state;if(e.isTransition){var i=x.T,c={};x.T=c;try{var s=l(a,n),m=x.S;m!==null&&m(c,s),bs(t,e,s)}catch(A){lo(t,e,A)}finally{i!==null&&c.types!==null&&(i.types=c.types),x.T=i}}else try{i=l(a,n),bs(t,e,i)}catch(A){lo(t,e,A)}}function bs(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){xs(t,e,n)},function(n){return lo(t,e,n)}):xs(t,e,l)}function xs(t,e,l){e.status="fulfilled",e.value=l,ys(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,ms(t,l)))}function lo(t,e,l){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=l,ys(e),e=e.next;while(e!==n)}t.action=null}function ys(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function vs(t,e){return e}function Ss(t,e){if(zt){var l=Ut.formState;if(l!==null){t:{var n=ht;if(zt){if(Bt){e:{for(var a=Bt,i=Re;a.nodeType!==8;){if(!i){a=null;break e}if(a=Be(a.nextSibling),a===null){a=null;break e}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Bt=Be(a.nextSibling),n=a.data==="F!";break t}}yl(n)}n=!1}n&&(e=l[0])}}return l=re(),l.memoizedState=l.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},l.queue=n,l=Gs.bind(null,ht,n),n.dispatch=l,n=eo(!1),i=oo.bind(null,ht,!1,n.queue),n=re(),a={state:e,dispatch:null,action:t,pending:null},n.queue=a,l=L1.bind(null,ht,a,i,l),a.dispatch=l,n.memoizedState=t,[e,l,!1]}function js(t){var e=Xt();return zs(e,_t,t)}function zs(t,e,l){if(e=Pc(t,e,vs)[0],t=Qi(nl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Da(e)}catch(c){throw c===Rn?Ri:c}else n=e;e=Xt();var a=e.queue,i=a.dispatch;return l!==e.memoizedState&&(ht.flags|=2048,qn(9,{destroy:void 0},$1.bind(null,a,l),null)),[n,i,t]}function $1(t,e){t.action=e}function Ts(t){var e=Xt(),l=_t;if(l!==null)return zs(e,l,t);Xt(),e=e.memoizedState,l=Xt();var n=l.queue.dispatch;return l.memoizedState=t,[e,n,!1]}function qn(t,e,l,n){return t={tag:t,create:l,deps:n,inst:e,next:null},e=ht.updateQueue,e===null&&(e=$i(),ht.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(n=l.next,l.next=t,t.next=n,e.lastEffect=t),t}function As(){return Xt().memoizedState}function Zi(t,e,l,n){var a=re();ht.flags|=t,a.memoizedState=qn(1|e,{destroy:void 0},l,n===void 0?null:n)}function Vi(t,e,l,n){var a=Xt();n=n===void 0?null:n;var i=a.memoizedState.inst;_t!==null&&n!==null&&Kc(n,_t.memoizedState.deps)?a.memoizedState=qn(e,i,l,n):(ht.flags|=t,a.memoizedState=qn(1|e,i,l,n))}function Es(t,e){Zi(8390656,8,t,e)}function no(t,e){Vi(2048,8,t,e)}function X1(t){ht.flags|=4;var e=ht.updateQueue;if(e===null)e=$i(),ht.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Cs(t){var e=Xt().memoizedState;return X1({ref:e,nextImpl:t}),function(){if((Ct&2)!==0)throw Error(f(440));return e.impl.apply(void 0,arguments)}}function Os(t,e){return Vi(4,2,t,e)}function Ms(t,e){return Vi(4,4,t,e)}function Ds(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _s(t,e,l){l=l!=null?l.concat([t]):null,Vi(4,4,Ds.bind(null,e,t),l)}function ao(){}function Ns(t,e){var l=Xt();e=e===void 0?null:e;var n=l.memoizedState;return e!==null&&Kc(e,n[1])?n[0]:(l.memoizedState=[t,e],t)}function ws(t,e){var l=Xt();e=e===void 0?null:e;var n=l.memoizedState;if(e!==null&&Kc(e,n[1]))return n[0];if(n=t(),nn){hl(!0);try{t()}finally{hl(!1)}}return l.memoizedState=[n,e],n}function io(t,e,l){return l===void 0||(ll&1073741824)!==0&&(vt&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=Rd(),ht.lanes|=t,Ol|=t,l)}function Rs(t,e,l,n){return Se(l,e)?l:Bn.current!==null?(t=io(t,l,n),Se(t,e)||(Vt=!0),t):(ll&42)===0||(ll&1073741824)!==0&&(vt&261930)===0?(Vt=!0,t.memoizedState=l):(t=Rd(),ht.lanes|=t,Ol|=t,e)}function Us(t,e,l,n,a){var i=E.p;E.p=i!==0&&8>i?i:8;var c=x.T,s={};x.T=s,oo(t,!1,e,l);try{var m=a(),A=x.S;if(A!==null&&A(s,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var R=Y1(m,n);_a(t,e,R,Ce(t))}else _a(t,e,n,Ce(t))}catch(Y){_a(t,e,{then:function(){},status:"rejected",reason:Y},Ce())}finally{E.p=i,c!==null&&s.types!==null&&(c.types=s.types),x.T=c}}function Q1(){}function uo(t,e,l,n){if(t.tag!==5)throw Error(f(476));var a=Bs(t).queue;Us(t,a,e,$,l===null?Q1:function(){return Hs(t),l(n)})}function Bs(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:$},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Hs(t){var e=Bs(t);e.next===null&&(e=t.alternate.memoizedState),_a(t,e.next.queue,{},Ce())}function co(){return le(ka)}function Ys(){return Xt().memoizedState}function qs(){return Xt().memoizedState}function Z1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Ce();t=jl(l);var n=zl(e,t,l);n!==null&&(me(n,e,l),Ea(n,e,l)),e={cache:Bc()},t.payload=e;return}e=e.return}}function V1(t,e,l){var n=Ce();l={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ki(t)?Ls(e,l):(l=Ac(t,e,l,n),l!==null&&(me(l,t,n),$s(l,e,n)))}function Gs(t,e,l){var n=Ce();_a(t,e,l,n)}function _a(t,e,l,n){var a={lane:n,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ki(t))Ls(e,a);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var c=e.lastRenderedState,s=i(c,l);if(a.hasEagerState=!0,a.eagerState=s,Se(s,c))return Ci(t,e,a,0),Ut===null&&Ei(),!1}catch{}if(l=Ac(t,e,a,n),l!==null)return me(l,t,n),$s(l,e,n),!0}return!1}function oo(t,e,l,n){if(n={lane:2,revertLane:Lo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ki(t)){if(e)throw Error(f(479))}else e=Ac(t,l,n,2),e!==null&&me(e,t,2)}function Ki(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Ls(t,e){Hn=Gi=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function $s(t,e,l){if((l&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,l|=n,e.lanes=l,Vr(t,l)}}var Na={readContext:le,use:Xi,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useLayoutEffect:Gt,useInsertionEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useSyncExternalStore:Gt,useId:Gt,useHostTransitionStatus:Gt,useFormState:Gt,useActionState:Gt,useOptimistic:Gt,useMemoCache:Gt,useCacheRefresh:Gt};Na.useEffectEvent=Gt;var Xs={readContext:le,use:Xi,useCallback:function(t,e){return re().memoizedState=[t,e===void 0?null:e],t},useContext:le,useEffect:Es,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Zi(4194308,4,Ds.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Zi(4194308,4,t,e)},useInsertionEffect:function(t,e){Zi(4,2,t,e)},useMemo:function(t,e){var l=re();e=e===void 0?null:e;var n=t();if(nn){hl(!0);try{t()}finally{hl(!1)}}return l.memoizedState=[n,e],n},useReducer:function(t,e,l){var n=re();if(l!==void 0){var a=l(e);if(nn){hl(!0);try{l(e)}finally{hl(!1)}}}else a=e;return n.memoizedState=n.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},n.queue=t,t=t.dispatch=V1.bind(null,ht,t),[n.memoizedState,t]},useRef:function(t){var e=re();return t={current:t},e.memoizedState=t},useState:function(t){t=eo(t);var e=t.queue,l=Gs.bind(null,ht,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:ao,useDeferredValue:function(t,e){var l=re();return io(l,t,e)},useTransition:function(){var t=eo(!1);return t=Us.bind(null,ht,t.queue,!0,!1),re().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var n=ht,a=re();if(zt){if(l===void 0)throw Error(f(407));l=l()}else{if(l=e(),Ut===null)throw Error(f(349));(vt&127)!==0||fs(n,e,l)}a.memoizedState=l;var i={value:l,getSnapshot:e};return a.queue=i,Es(ds.bind(null,n,i,t),[t]),n.flags|=2048,qn(9,{destroy:void 0},ss.bind(null,n,i,l,e),null),l},useId:function(){var t=re(),e=Ut.identifierPrefix;if(zt){var l=Ve,n=Ze;l=(n&~(1<<32-ve(n)-1)).toString(32)+l,e="_"+e+"R_"+l,l=Li++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=q1++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:co,useFormState:Ss,useActionState:Ss,useOptimistic:function(t){var e=re();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=oo.bind(null,ht,!0,l),l.dispatch=e,[t,e]},useMemoCache:Ic,useCacheRefresh:function(){return re().memoizedState=Z1.bind(null,ht)},useEffectEvent:function(t){var e=re(),l={impl:t};return e.memoizedState=l,function(){if((Ct&2)!==0)throw Error(f(440));return l.impl.apply(void 0,arguments)}}},ro={readContext:le,use:Xi,useCallback:Ns,useContext:le,useEffect:no,useImperativeHandle:_s,useInsertionEffect:Os,useLayoutEffect:Ms,useMemo:ws,useReducer:Qi,useRef:As,useState:function(){return Qi(nl)},useDebugValue:ao,useDeferredValue:function(t,e){var l=Xt();return Rs(l,_t.memoizedState,t,e)},useTransition:function(){var t=Qi(nl)[0],e=Xt().memoizedState;return[typeof t=="boolean"?t:Da(t),e]},useSyncExternalStore:rs,useId:Ys,useHostTransitionStatus:co,useFormState:js,useActionState:js,useOptimistic:function(t,e){var l=Xt();return gs(l,_t,t,e)},useMemoCache:Ic,useCacheRefresh:qs};ro.useEffectEvent=Cs;var Qs={readContext:le,use:Xi,useCallback:Ns,useContext:le,useEffect:no,useImperativeHandle:_s,useInsertionEffect:Os,useLayoutEffect:Ms,useMemo:ws,useReducer:to,useRef:As,useState:function(){return to(nl)},useDebugValue:ao,useDeferredValue:function(t,e){var l=Xt();return _t===null?io(l,t,e):Rs(l,_t.memoizedState,t,e)},useTransition:function(){var t=to(nl)[0],e=Xt().memoizedState;return[typeof t=="boolean"?t:Da(t),e]},useSyncExternalStore:rs,useId:Ys,useHostTransitionStatus:co,useFormState:Ts,useActionState:Ts,useOptimistic:function(t,e){var l=Xt();return _t!==null?gs(l,_t,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Ic,useCacheRefresh:qs};Qs.useEffectEvent=Cs;function fo(t,e,l,n){e=t.memoizedState,l=l(n,e),l=l==null?e:U({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var so={enqueueSetState:function(t,e,l){t=t._reactInternals;var n=Ce(),a=jl(n);a.payload=e,l!=null&&(a.callback=l),e=zl(t,a,n),e!==null&&(me(e,t,n),Ea(e,t,n))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var n=Ce(),a=jl(n);a.tag=1,a.payload=e,l!=null&&(a.callback=l),e=zl(t,a,n),e!==null&&(me(e,t,n),Ea(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Ce(),n=jl(l);n.tag=2,e!=null&&(n.callback=e),e=zl(t,n,l),e!==null&&(me(e,t,l),Ea(e,t,l))}};function Zs(t,e,l,n,a,i,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,i,c):e.prototype&&e.prototype.isPureReactComponent?!xa(l,n)||!xa(a,i):!0}function Vs(t,e,l,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,n),e.state!==t&&so.enqueueReplaceState(e,e.state,null)}function an(t,e){var l=e;if("ref"in e){l={};for(var n in e)n!=="ref"&&(l[n]=e[n])}if(t=t.defaultProps){l===e&&(l=U({},l));for(var a in t)l[a]===void 0&&(l[a]=t[a])}return l}function Ks(t){Ai(t)}function ks(t){console.error(t)}function Js(t){Ai(t)}function ki(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function Fs(t,e,l){try{var n=t.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function po(t,e,l){return l=jl(l),l.tag=3,l.payload={element:null},l.callback=function(){ki(t,e)},l}function Ws(t){return t=jl(t),t.tag=3,t}function Is(t,e,l,n){var a=l.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;t.payload=function(){return a(i)},t.callback=function(){Fs(e,l,n)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){Fs(e,l,n),typeof a!="function"&&(Ml===null?Ml=new Set([this]):Ml.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function K1(t,e,l,n,a){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=l.alternate,e!==null&&_n(e,l,a,!0),l=ze.current,l!==null){switch(l.tag){case 31:case 13:return Ue===null?uu():l.alternate===null&&Lt===0&&(Lt=3),l.flags&=-257,l.flags|=65536,l.lanes=a,n===Ui?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([n]):e.add(n),Yo(t,n,a)),!1;case 22:return l.flags|=65536,n===Ui?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([n]):l.add(n)),Yo(t,n,a)),!1}throw Error(f(435,l.tag))}return Yo(t,n,a),uu(),!1}if(zt)return e=ze.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,n!==_c&&(t=Error(f(422),{cause:n}),Sa(_e(t,l)))):(n!==_c&&(e=Error(f(423),{cause:n}),Sa(_e(e,l))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,n=_e(n,l),a=po(t.stateNode,n,a),$c(t,a),Lt!==4&&(Lt=2)),!1;var i=Error(f(520),{cause:n});if(i=_e(i,l),Ga===null?Ga=[i]:Ga.push(i),Lt!==4&&(Lt=2),e===null)return!0;n=_e(n,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=a&-a,l.lanes|=t,t=po(l.stateNode,n,t),$c(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ml===null||!Ml.has(i))))return l.flags|=65536,a&=-a,l.lanes|=a,a=Ws(a),Is(a,t,l,n),$c(l,a),!1}l=l.return}while(l!==null);return!1}var ho=Error(f(461)),Vt=!1;function ne(t,e,l,n){e.child=t===null?ls(e,null,l,n):ln(e,t.child,l,n)}function Ps(t,e,l,n,a){l=l.render;var i=e.ref;if("ref"in n){var c={};for(var s in n)s!=="ref"&&(c[s]=n[s])}else c=n;return Il(e),n=kc(t,e,l,c,i,a),s=Jc(),t!==null&&!Vt?(Fc(t,e,a),al(t,e,a)):(zt&&s&&Mc(e),e.flags|=1,ne(t,e,n,a),e.child)}function td(t,e,l,n,a){if(t===null){var i=l.type;return typeof i=="function"&&!Ec(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,ed(t,e,i,n,a)):(t=Mi(l.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!jo(t,a)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:xa,l(c,n)&&t.ref===e.ref)return al(t,e,a)}return e.flags|=1,t=Ie(i,n),t.ref=e.ref,t.return=e,e.child=t}function ed(t,e,l,n,a){if(t!==null){var i=t.memoizedProps;if(xa(i,n)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=n=i,jo(t,a))(t.flags&131072)!==0&&(Vt=!0);else return e.lanes=t.lanes,al(t,e,a)}return go(t,e,l,n,a)}function ld(t,e,l,n){var a=n.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(n=e.child=t.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~i}else n=0,e.child=null;return nd(t,e,i,l,n)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&wi(e,i!==null?i.cachePool:null),i!==null?is(e,i):Qc(),us(e);else return n=e.lanes=536870912,nd(t,e,i!==null?i.baseLanes|l:l,l,n)}else i!==null?(wi(e,i.cachePool),is(e,i),Al(),e.memoizedState=null):(t!==null&&wi(e,null),Qc(),Al());return ne(t,e,a,l),e.child}function wa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function nd(t,e,l,n,a){var i=Yc();return i=i===null?null:{parent:Qt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&wi(e,null),Qc(),us(e),t!==null&&_n(t,e,n,!0),e.childLanes=a,null}function Ji(t,e){return e=Wi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function ad(t,e,l){return ln(e,t.child,null,l),t=Ji(e,e.pendingProps),t.flags|=2,Te(e),e.memoizedState=null,t}function k1(t,e,l){var n=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(zt){if(n.mode==="hidden")return t=Ji(e,n),e.lanes=536870912,wa(null,t);if(Vc(e),(t=Bt)?(t=m0(t,Re),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:bl!==null?{id:Ze,overflow:Ve}:null,retryLane:536870912,hydrationErrors:null},l=Lf(t),l.return=e,e.child=l,ee=e,Bt=null)):t=null,t===null)throw yl(e);return e.lanes=536870912,null}return Ji(e,n)}var i=t.memoizedState;if(i!==null){var c=i.dehydrated;if(Vc(e),a)if(e.flags&256)e.flags&=-257,e=ad(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(f(558));else if(Vt||_n(t,e,l,!1),a=(l&t.childLanes)!==0,Vt||a){if(n=Ut,n!==null&&(c=Kr(n,l),c!==0&&c!==i.retryLane))throw i.retryLane=c,kl(t,c),me(n,t,c),ho;uu(),e=ad(t,e,l)}else t=i.treeContext,Bt=Be(c.nextSibling),ee=e,zt=!0,xl=null,Re=!1,t!==null&&Qf(e,t),e=Ji(e,n),e.flags|=4096;return e}return t=Ie(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Fi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(f(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function go(t,e,l,n,a){return Il(e),l=kc(t,e,l,n,void 0,a),n=Jc(),t!==null&&!Vt?(Fc(t,e,a),al(t,e,a)):(zt&&n&&Mc(e),e.flags|=1,ne(t,e,l,a),e.child)}function id(t,e,l,n,a,i){return Il(e),e.updateQueue=null,l=os(e,n,l,a),cs(t),n=Jc(),t!==null&&!Vt?(Fc(t,e,i),al(t,e,i)):(zt&&n&&Mc(e),e.flags|=1,ne(t,e,l,i),e.child)}function ud(t,e,l,n,a){if(Il(e),e.stateNode===null){var i=Cn,c=l.contextType;typeof c=="object"&&c!==null&&(i=le(c)),i=new l(n,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=so,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=n,i.state=e.memoizedState,i.refs={},Gc(e),c=l.contextType,i.context=typeof c=="object"&&c!==null?le(c):Cn,i.state=e.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(fo(e,l,c,n),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&so.enqueueReplaceState(i,i.state,null),Oa(e,n,i,a),Ca(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,m=an(l,s);i.props=m;var A=i.context,R=l.contextType;c=Cn,typeof R=="object"&&R!==null&&(c=le(R));var Y=l.getDerivedStateFromProps;R=typeof Y=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||A!==c)&&Vs(e,i,n,c),Sl=!1;var O=e.memoizedState;i.state=O,Oa(e,n,i,a),Ca(),A=e.memoizedState,s||O!==A||Sl?(typeof Y=="function"&&(fo(e,l,Y,n),A=e.memoizedState),(m=Sl||Zs(e,l,m,n,O,A,c))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=A),i.props=n,i.state=A,i.context=c,n=m):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{i=e.stateNode,Lc(t,e),c=e.memoizedProps,R=an(l,c),i.props=R,Y=e.pendingProps,O=i.context,A=l.contextType,m=Cn,typeof A=="object"&&A!==null&&(m=le(A)),s=l.getDerivedStateFromProps,(A=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==Y||O!==m)&&Vs(e,i,n,m),Sl=!1,O=e.memoizedState,i.state=O,Oa(e,n,i,a),Ca();var N=e.memoizedState;c!==Y||O!==N||Sl||t!==null&&t.dependencies!==null&&_i(t.dependencies)?(typeof s=="function"&&(fo(e,l,s,n),N=e.memoizedState),(R=Sl||Zs(e,l,R,n,O,N,m)||t!==null&&t.dependencies!==null&&_i(t.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,N,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,N,m)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&O===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&O===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=N),i.props=n,i.state=N,i.context=m,n=R):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&O===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&O===t.memoizedState||(e.flags|=1024),n=!1)}return i=n,Fi(t,e),n=(e.flags&128)!==0,i||n?(i=e.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&n?(e.child=ln(e,t.child,null,a),e.child=ln(e,null,l,a)):ne(t,e,l,a),e.memoizedState=i.state,t=e.child):t=al(t,e,a),t}function cd(t,e,l,n){return Fl(),e.flags|=256,ne(t,e,l,n),e.child}var mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bo(t){return{baseLanes:t,cachePool:Ff()}}function xo(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ee),t}function od(t,e,l){var n=e.pendingProps,a=!1,i=(e.flags&128)!==0,c;if((c=i)||(c=t!==null&&t.memoizedState===null?!1:($t.current&2)!==0),c&&(a=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(zt){if(a?Tl(e):Al(),(t=Bt)?(t=m0(t,Re),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:bl!==null?{id:Ze,overflow:Ve}:null,retryLane:536870912,hydrationErrors:null},l=Lf(t),l.return=e,e.child=l,ee=e,Bt=null)):t=null,t===null)throw yl(e);return tr(t)?e.lanes=32:e.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(Al(),a=e.mode,s=Wi({mode:"hidden",children:s},a),n=Jl(n,a,l,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n=e.child,n.memoizedState=bo(l),n.childLanes=xo(t,c,l),e.memoizedState=mo,wa(null,n)):(Tl(e),yo(e,s))}var m=t.memoizedState;if(m!==null&&(s=m.dehydrated,s!==null)){if(i)e.flags&256?(Tl(e),e.flags&=-257,e=vo(t,e,l)):e.memoizedState!==null?(Al(),e.child=t.child,e.flags|=128,e=null):(Al(),s=n.fallback,a=e.mode,n=Wi({mode:"visible",children:n.children},a),s=Jl(s,a,l,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,ln(e,t.child,null,l),n=e.child,n.memoizedState=bo(l),n.childLanes=xo(t,c,l),e.memoizedState=mo,e=wa(null,n));else if(Tl(e),tr(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var A=c.dgst;c=A,n=Error(f(419)),n.stack="",n.digest=c,Sa({value:n,source:null,stack:null}),e=vo(t,e,l)}else if(Vt||_n(t,e,l,!1),c=(l&t.childLanes)!==0,Vt||c){if(c=Ut,c!==null&&(n=Kr(c,l),n!==0&&n!==m.retryLane))throw m.retryLane=n,kl(t,n),me(c,t,n),ho;Po(s)||uu(),e=vo(t,e,l)}else Po(s)?(e.flags|=192,e.child=t.child,e=null):(t=m.treeContext,Bt=Be(s.nextSibling),ee=e,zt=!0,xl=null,Re=!1,t!==null&&Qf(e,t),e=yo(e,n.children),e.flags|=4096);return e}return a?(Al(),s=n.fallback,a=e.mode,m=t.child,A=m.sibling,n=Ie(m,{mode:"hidden",children:n.children}),n.subtreeFlags=m.subtreeFlags&65011712,A!==null?s=Ie(A,s):(s=Jl(s,a,l,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,wa(null,n),n=e.child,s=t.child.memoizedState,s===null?s=bo(l):(a=s.cachePool,a!==null?(m=Qt._currentValue,a=a.parent!==m?{parent:m,pool:m}:a):a=Ff(),s={baseLanes:s.baseLanes|l,cachePool:a}),n.memoizedState=s,n.childLanes=xo(t,c,l),e.memoizedState=mo,wa(t.child,n)):(Tl(e),l=t.child,t=l.sibling,l=Ie(l,{mode:"visible",children:n.children}),l.return=e,l.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=l,e.memoizedState=null,l)}function yo(t,e){return e=Wi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Wi(t,e){return t=je(22,t,null,e),t.lanes=0,t}function vo(t,e,l){return ln(e,t.child,null,l),t=yo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rd(t,e,l){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Rc(t.return,e,l)}function So(t,e,l,n,a,i){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:a,treeForkCount:i}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=l,c.tailMode=a,c.treeForkCount=i)}function fd(t,e,l){var n=e.pendingProps,a=n.revealOrder,i=n.tail;n=n.children;var c=$t.current,s=(c&2)!==0;if(s?(c=c&1|2,e.flags|=128):c&=1,G($t,c),ne(t,e,n,l),n=zt?va:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rd(t,l,e);else if(t.tag===19)rd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(l=e.child,a=null;l!==null;)t=l.alternate,t!==null&&qi(t)===null&&(a=l),l=l.sibling;l=a,l===null?(a=e.child,e.child=null):(a=l.sibling,l.sibling=null),So(e,!1,a,l,i,n);break;case"backwards":case"unstable_legacy-backwards":for(l=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&qi(t)===null){e.child=a;break}t=a.sibling,a.sibling=l,l=a,a=t}So(e,!0,l,null,i,n);break;case"together":So(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function al(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Ol|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(_n(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(f(153));if(e.child!==null){for(t=e.child,l=Ie(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ie(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function jo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&_i(t)))}function J1(t,e,l){switch(e.tag){case 3:Rt(e,e.stateNode.containerInfo),vl(e,Qt,t.memoizedState.cache),Fl();break;case 27:case 5:ue(e);break;case 4:Rt(e,e.stateNode.containerInfo);break;case 10:vl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Vc(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Tl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?od(t,e,l):(Tl(e),t=al(t,e,l),t!==null?t.sibling:null);Tl(e);break;case 19:var a=(t.flags&128)!==0;if(n=(l&e.childLanes)!==0,n||(_n(t,e,l,!1),n=(l&e.childLanes)!==0),a){if(n)return fd(t,e,l);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),G($t,$t.current),n)break;return null;case 22:return e.lanes=0,ld(t,e,l,e.pendingProps);case 24:vl(e,Qt,t.memoizedState.cache)}return al(t,e,l)}function sd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Vt=!0;else{if(!jo(t,l)&&(e.flags&128)===0)return Vt=!1,J1(t,e,l);Vt=(t.flags&131072)!==0}else Vt=!1,zt&&(e.flags&1048576)!==0&&Xf(e,va,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=tn(e.elementType),e.type=t,typeof t=="function")Ec(t)?(n=an(t,n),e.tag=1,e=ud(null,e,t,n,l)):(e.tag=0,e=go(null,e,t,n,l));else{if(t!=null){var a=t.$$typeof;if(a===ot){e.tag=11,e=Ps(null,e,t,n,l);break t}else if(a===C){e.tag=14,e=td(null,e,t,n,l);break t}}throw e=X(t)||t,Error(f(306,e,""))}}return e;case 0:return go(t,e,e.type,e.pendingProps,l);case 1:return n=e.type,a=an(n,e.pendingProps),ud(t,e,n,a,l);case 3:t:{if(Rt(e,e.stateNode.containerInfo),t===null)throw Error(f(387));n=e.pendingProps;var i=e.memoizedState;a=i.element,Lc(t,e),Oa(e,n,null,l);var c=e.memoizedState;if(n=c.cache,vl(e,Qt,n),n!==i.cache&&Uc(e,[Qt],l,!0),Ca(),n=c.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=cd(t,e,n,l);break t}else if(n!==a){a=_e(Error(f(424)),e),Sa(a),e=cd(t,e,n,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Bt=Be(t.firstChild),ee=e,zt=!0,xl=null,Re=!0,l=ls(e,null,n,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fl(),n===a){e=al(t,e,l);break t}ne(t,e,n,l)}e=e.child}return e;case 26:return Fi(t,e),t===null?(l=j0(e.type,null,e.pendingProps,null))?e.memoizedState=l:zt||(l=e.type,t=e.pendingProps,n=pu(ct.current).createElement(l),n[te]=e,n[fe]=t,ae(n,l,t),Wt(n),e.stateNode=n):e.memoizedState=j0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ue(e),t===null&&zt&&(n=e.stateNode=y0(e.type,e.pendingProps,ct.current),ee=e,Re=!0,a=Bt,wl(e.type)?(er=a,Bt=Be(n.firstChild)):Bt=a),ne(t,e,e.pendingProps.children,l),Fi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&zt&&((a=n=Bt)&&(n=Ag(n,e.type,e.pendingProps,Re),n!==null?(e.stateNode=n,ee=e,Bt=Be(n.firstChild),Re=!1,a=!0):a=!1),a||yl(e)),ue(e),a=e.type,i=e.pendingProps,c=t!==null?t.memoizedProps:null,n=i.children,Fo(a,i)?n=null:c!==null&&Fo(a,c)&&(e.flags|=32),e.memoizedState!==null&&(a=kc(t,e,G1,null,null,l),ka._currentValue=a),Fi(t,e),ne(t,e,n,l),e.child;case 6:return t===null&&zt&&((t=l=Bt)&&(l=Eg(l,e.pendingProps,Re),l!==null?(e.stateNode=l,ee=e,Bt=null,t=!0):t=!1),t||yl(e)),null;case 13:return od(t,e,l);case 4:return Rt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=ln(e,null,n,l):ne(t,e,n,l),e.child;case 11:return Ps(t,e,e.type,e.pendingProps,l);case 7:return ne(t,e,e.pendingProps,l),e.child;case 8:return ne(t,e,e.pendingProps.children,l),e.child;case 12:return ne(t,e,e.pendingProps.children,l),e.child;case 10:return n=e.pendingProps,vl(e,e.type,n.value),ne(t,e,n.children,l),e.child;case 9:return a=e.type._context,n=e.pendingProps.children,Il(e),a=le(a),n=n(a),e.flags|=1,ne(t,e,n,l),e.child;case 14:return td(t,e,e.type,e.pendingProps,l);case 15:return ed(t,e,e.type,e.pendingProps,l);case 19:return fd(t,e,l);case 31:return k1(t,e,l);case 22:return ld(t,e,l,e.pendingProps);case 24:return Il(e),n=le(Qt),t===null?(a=Yc(),a===null&&(a=Ut,i=Bc(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=l),a=i),e.memoizedState={parent:n,cache:a},Gc(e),vl(e,Qt,a)):((t.lanes&l)!==0&&(Lc(t,e),Oa(e,null,null,l),Ca()),a=t.memoizedState,i=e.memoizedState,a.parent!==n?(a={parent:n,cache:n},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),vl(e,Qt,n)):(n=i.cache,vl(e,Qt,n),n!==a.cache&&Uc(e,[Qt],l,!0))),ne(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(f(156,e.tag))}function il(t){t.flags|=4}function zo(t,e,l,n,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(Yd())t.flags|=8192;else throw en=Ui,qc}else t.flags&=-16777217}function dd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!C0(e))if(Yd())t.flags|=8192;else throw en=Ui,qc}function Ii(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Qr():536870912,t.lanes|=e,Xn|=e)}function Ra(t,e){if(!zt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,n=0;if(e)for(var a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)l|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=l,e}function F1(t,e,l){var n=e.pendingProps;switch(Dc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return Ht(e),null;case 3:return l=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),el(Qt),Tt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Dn(e)?il(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Nc())),Ht(e),null;case 26:var a=e.type,i=e.memoizedState;return t===null?(il(e),i!==null?(Ht(e),dd(e,i)):(Ht(e),zo(e,a,null,n,l))):i?i!==t.memoizedState?(il(e),Ht(e),dd(e,i)):(Ht(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&il(e),Ht(e),zo(e,a,t,n,l)),null;case 27:if(Ll(e),l=ct.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&il(e);else{if(!n){if(e.stateNode===null)throw Error(f(166));return Ht(e),null}t=z.current,Dn(e)?Zf(e):(t=y0(a,n,l),e.stateNode=t,il(e))}return Ht(e),null;case 5:if(Ll(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&il(e);else{if(!n){if(e.stateNode===null)throw Error(f(166));return Ht(e),null}if(i=z.current,Dn(e))Zf(e);else{var c=pu(ct.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?c.createElement("select",{is:n.is}):c.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?c.createElement(a,{is:n.is}):c.createElement(a)}}i[te]=e,i[fe]=n;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=i;t:switch(ae(i,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&il(e)}}return Ht(e),zo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&il(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(f(166));if(t=ct.current,Dn(e)){if(t=e.stateNode,l=e.memoizedProps,n=null,a=ee,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}t[te]=e,t=!!(t.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||o0(t.nodeValue,l)),t||yl(e,!0)}else t=pu(t).createTextNode(n),t[te]=e,e.stateNode=t}return Ht(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(n=Dn(e),l!==null){if(t===null){if(!n)throw Error(f(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(f(557));t[te]=e}else Fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ht(e),t=!1}else l=Nc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Te(e),e):(Te(e),null);if((e.flags&128)!==0)throw Error(f(558))}return Ht(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Dn(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(f(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(f(317));a[te]=e}else Fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ht(e),a=!1}else a=Nc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Te(e),e):(Te(e),null)}return Te(e),(e.flags&128)!==0?(e.lanes=l,e):(l=n!==null,t=t!==null&&t.memoizedState!==null,l&&(n=e.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Ii(e,e.updateQueue),Ht(e),null);case 4:return Tt(),t===null&&Zo(e.stateNode.containerInfo),Ht(e),null;case 10:return el(e.type),Ht(e),null;case 19:if(_($t),n=e.memoizedState,n===null)return Ht(e),null;if(a=(e.flags&128)!==0,i=n.rendering,i===null)if(a)Ra(n,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=qi(t),i!==null){for(e.flags|=128,Ra(n,!1),t=i.updateQueue,e.updateQueue=t,Ii(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Gf(l,t),l=l.sibling;return G($t,$t.current&1|2),zt&&Pe(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&xe()>nu&&(e.flags|=128,a=!0,Ra(n,!1),e.lanes=4194304)}else{if(!a)if(t=qi(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Ii(e,t),Ra(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!zt)return Ht(e),null}else 2*xe()-n.renderingStartTime>nu&&l!==536870912&&(e.flags|=128,a=!0,Ra(n,!1),e.lanes=4194304);n.isBackwards?(i.sibling=e.child,e.child=i):(t=n.last,t!==null?t.sibling=i:e.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=xe(),t.sibling=null,l=$t.current,G($t,a?l&1|2:l&1),zt&&Pe(e,n.treeForkCount),t):(Ht(e),null);case 22:case 23:return Te(e),Zc(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(l&536870912)!==0&&(e.flags&128)===0&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),l=e.updateQueue,l!==null&&Ii(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==l&&(e.flags|=2048),t!==null&&_(Pl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),el(Qt),Ht(e),null;case 25:return null;case 30:return null}throw Error(f(156,e.tag))}function W1(t,e){switch(Dc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return el(Qt),Tt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ll(e),null;case 31:if(e.memoizedState!==null){if(Te(e),e.alternate===null)throw Error(f(340));Fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Te(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(f(340));Fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _($t),null;case 4:return Tt(),null;case 10:return el(e.type),null;case 22:case 23:return Te(e),Zc(),t!==null&&_(Pl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return el(Qt),null;case 25:return null;default:return null}}function pd(t,e){switch(Dc(e),e.tag){case 3:el(Qt),Tt();break;case 26:case 27:case 5:Ll(e);break;case 4:Tt();break;case 31:e.memoizedState!==null&&Te(e);break;case 13:Te(e);break;case 19:_($t);break;case 10:el(e.type);break;case 22:case 23:Te(e),Zc(),t!==null&&_(Pl);break;case 24:el(Qt)}}function Ua(t,e){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var a=n.next;l=a;do{if((l.tag&t)===t){n=void 0;var i=l.create,c=l.inst;n=i(),c.destroy=n}l=l.next}while(l!==a)}}catch(s){Dt(e,e.return,s)}}function El(t,e,l){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&t)===t){var c=n.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,a=e;var m=l,A=s;try{A()}catch(R){Dt(a,m,R)}}}n=n.next}while(n!==i)}}catch(R){Dt(e,e.return,R)}}function hd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{as(e,l)}catch(n){Dt(t,t.return,n)}}}function gd(t,e,l){l.props=an(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(n){Dt(t,e,n)}}function Ba(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof l=="function"?t.refCleanup=l(n):l.current=n}}catch(a){Dt(t,e,a)}}function Ke(t,e){var l=t.ref,n=t.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(a){Dt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(a){Dt(t,e,a)}else l.current=null}function md(t){var e=t.type,l=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break t;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(a){Dt(t,t.return,a)}}function To(t,e,l){try{var n=t.stateNode;yg(n,t.type,l,e),n[fe]=e}catch(a){Dt(t,t.return,a)}}function bd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&wl(t.type)||t.tag===4}function Ao(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||bd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&wl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eo(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Fe));else if(n!==4&&(n===27&&wl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Eo(t,e,l),t=t.sibling;t!==null;)Eo(t,e,l),t=t.sibling}function Pi(t,e,l){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(n!==4&&(n===27&&wl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Pi(t,e,l),t=t.sibling;t!==null;)Pi(t,e,l),t=t.sibling}function xd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var n=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ae(e,n,l),e[te]=t,e[fe]=l}catch(i){Dt(t,t.return,i)}}var ul=!1,Kt=!1,Co=!1,yd=typeof WeakSet=="function"?WeakSet:Set,It=null;function I1(t,e){if(t=t.containerInfo,ko=vu,t=_f(t),yc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var c=0,s=-1,m=-1,A=0,R=0,Y=t,O=null;e:for(;;){for(var N;Y!==l||a!==0&&Y.nodeType!==3||(s=c+a),Y!==i||n!==0&&Y.nodeType!==3||(m=c+n),Y.nodeType===3&&(c+=Y.nodeValue.length),(N=Y.firstChild)!==null;)O=Y,Y=N;for(;;){if(Y===t)break e;if(O===l&&++A===a&&(s=c),O===i&&++R===n&&(m=c),(N=Y.nextSibling)!==null)break;Y=O,O=Y.parentNode}Y=N}l=s===-1||m===-1?null:{start:s,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(Jo={focusedElem:t,selectionRange:l},vu=!1,It=e;It!==null;)if(e=It,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,It=t;else for(;It!==null;){switch(e=It,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)a=t[l],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,a=i.memoizedProps,i=i.memoizedState,n=l.stateNode;try{var P=an(l.type,a);t=n.getSnapshotBeforeUpdate(P,i),n.__reactInternalSnapshotBeforeUpdate=t}catch(ft){Dt(l,l.return,ft)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Io(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Io(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(f(163))}if(t=e.sibling,t!==null){t.return=e.return,It=t;break}It=e.return}}function vd(t,e,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:ol(t,l),n&4&&Ua(5,l);break;case 1:if(ol(t,l),n&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(c){Dt(l,l.return,c)}else{var a=an(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){Dt(l,l.return,c)}}n&64&&hd(l),n&512&&Ba(l,l.return);break;case 3:if(ol(t,l),n&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{as(t,e)}catch(c){Dt(l,l.return,c)}}break;case 27:e===null&&n&4&&xd(l);case 26:case 5:ol(t,l),e===null&&n&4&&md(l),n&512&&Ba(l,l.return);break;case 12:ol(t,l);break;case 31:ol(t,l),n&4&&zd(t,l);break;case 13:ol(t,l),n&4&&Td(t,l),n&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=cg.bind(null,l),Cg(t,l))));break;case 22:if(n=l.memoizedState!==null||ul,!n){e=e!==null&&e.memoizedState!==null||Kt,a=ul;var i=Kt;ul=n,(Kt=e)&&!i?rl(t,l,(l.subtreeFlags&8772)!==0):ol(t,l),ul=a,Kt=i}break;case 30:break;default:ol(t,l)}}function Sd(t){var e=t.alternate;e!==null&&(t.alternate=null,Sd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&lc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,de=!1;function cl(t,e,l){for(l=l.child;l!==null;)jd(t,e,l),l=l.sibling}function jd(t,e,l){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(ua,l)}catch{}switch(l.tag){case 26:Kt||Ke(l,e),cl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Kt||Ke(l,e);var n=qt,a=de;wl(l.type)&&(qt=l.stateNode,de=!1),cl(t,e,l),Za(l.stateNode),qt=n,de=a;break;case 5:Kt||Ke(l,e);case 6:if(n=qt,a=de,qt=null,cl(t,e,l),qt=n,de=a,qt!==null)if(de)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(l.stateNode)}catch(i){Dt(l,e,i)}else try{qt.removeChild(l.stateNode)}catch(i){Dt(l,e,i)}break;case 18:qt!==null&&(de?(t=qt,h0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Wn(t)):h0(qt,l.stateNode));break;case 4:n=qt,a=de,qt=l.stateNode.containerInfo,de=!0,cl(t,e,l),qt=n,de=a;break;case 0:case 11:case 14:case 15:El(2,l,e),Kt||El(4,l,e),cl(t,e,l);break;case 1:Kt||(Ke(l,e),n=l.stateNode,typeof n.componentWillUnmount=="function"&&gd(l,e,n)),cl(t,e,l);break;case 21:cl(t,e,l);break;case 22:Kt=(n=Kt)||l.memoizedState!==null,cl(t,e,l),Kt=n;break;default:cl(t,e,l)}}function zd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Wn(t)}catch(l){Dt(e,e.return,l)}}}function Td(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wn(t)}catch(l){Dt(e,e.return,l)}}function P1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new yd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new yd),e;default:throw Error(f(435,t.tag))}}function tu(t,e){var l=P1(t);e.forEach(function(n){if(!l.has(n)){l.add(n);var a=og.bind(null,t,n);n.then(a,a)}})}function pe(t,e){var l=e.deletions;if(l!==null)for(var n=0;n<l.length;n++){var a=l[n],i=t,c=e,s=c;t:for(;s!==null;){switch(s.tag){case 27:if(wl(s.type)){qt=s.stateNode,de=!1;break t}break;case 5:qt=s.stateNode,de=!1;break t;case 3:case 4:qt=s.stateNode.containerInfo,de=!0;break t}s=s.return}if(qt===null)throw Error(f(160));jd(i,c,a),qt=null,de=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ad(e,t),e=e.sibling}var Ge=null;function Ad(t,e){var l=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pe(e,t),he(t),n&4&&(El(3,t,t.return),Ua(3,t),El(5,t,t.return));break;case 1:pe(e,t),he(t),n&512&&(Kt||l===null||Ke(l,l.return)),n&64&&ul&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var a=Ge;if(pe(e,t),he(t),n&512&&(Kt||l===null||Ke(l,l.return)),n&4){var i=l!==null?l.memoizedState:null;if(n=t.memoizedState,l===null)if(n===null)if(t.stateNode===null){t:{n=t.type,l=t.memoizedProps,a=a.ownerDocument||a;e:switch(n){case"title":i=a.getElementsByTagName("title")[0],(!i||i[ra]||i[te]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(n),a.head.insertBefore(i,a.querySelector("head > title"))),ae(i,n,l),i[te]=t,Wt(i),n=i;break t;case"link":var c=A0("link","href",a).get(n+(l.href||""));if(c){for(var s=0;s<c.length;s++)if(i=c[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(s,1);break e}}i=a.createElement(n),ae(i,n,l),a.head.appendChild(i);break;case"meta":if(c=A0("meta","content",a).get(n+(l.content||""))){for(s=0;s<c.length;s++)if(i=c[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(s,1);break e}}i=a.createElement(n),ae(i,n,l),a.head.appendChild(i);break;default:throw Error(f(468,n))}i[te]=t,Wt(i),n=i}t.stateNode=n}else E0(a,t.type,t.stateNode);else t.stateNode=T0(a,n,t.memoizedProps);else i!==n?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,n===null?E0(a,t.type,t.stateNode):T0(a,n,t.memoizedProps)):n===null&&t.stateNode!==null&&To(t,t.memoizedProps,l.memoizedProps)}break;case 27:pe(e,t),he(t),n&512&&(Kt||l===null||Ke(l,l.return)),l!==null&&n&4&&To(t,t.memoizedProps,l.memoizedProps);break;case 5:if(pe(e,t),he(t),n&512&&(Kt||l===null||Ke(l,l.return)),t.flags&32){a=t.stateNode;try{vn(a,"")}catch(P){Dt(t,t.return,P)}}n&4&&t.stateNode!=null&&(a=t.memoizedProps,To(t,a,l!==null?l.memoizedProps:a)),n&1024&&(Co=!0);break;case 6:if(pe(e,t),he(t),n&4){if(t.stateNode===null)throw Error(f(162));n=t.memoizedProps,l=t.stateNode;try{l.nodeValue=n}catch(P){Dt(t,t.return,P)}}break;case 3:if(mu=null,a=Ge,Ge=hu(e.containerInfo),pe(e,t),Ge=a,he(t),n&4&&l!==null&&l.memoizedState.isDehydrated)try{Wn(e.containerInfo)}catch(P){Dt(t,t.return,P)}Co&&(Co=!1,Ed(t));break;case 4:n=Ge,Ge=hu(t.stateNode.containerInfo),pe(e,t),he(t),Ge=n;break;case 12:pe(e,t),he(t);break;case 31:pe(e,t),he(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,tu(t,n)));break;case 13:pe(e,t),he(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(lu=xe()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,tu(t,n)));break;case 22:a=t.memoizedState!==null;var m=l!==null&&l.memoizedState!==null,A=ul,R=Kt;if(ul=A||a,Kt=R||m,pe(e,t),Kt=R,ul=A,he(t),n&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(l===null||m||ul||Kt||un(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){m=l=e;try{if(i=m.stateNode,a)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=m.stateNode;var Y=m.memoizedProps.style,O=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;s.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(P){Dt(m,m.return,P)}}}else if(e.tag===6){if(l===null){m=e;try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(P){Dt(m,m.return,P)}}}else if(e.tag===18){if(l===null){m=e;try{var N=m.stateNode;a?g0(N,!0):g0(m.stateNode,!1)}catch(P){Dt(m,m.return,P)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,tu(t,l))));break;case 19:pe(e,t),he(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,tu(t,n)));break;case 30:break;case 21:break;default:pe(e,t),he(t)}}function he(t){var e=t.flags;if(e&2){try{for(var l,n=t.return;n!==null;){if(bd(n)){l=n;break}n=n.return}if(l==null)throw Error(f(160));switch(l.tag){case 27:var a=l.stateNode,i=Ao(t);Pi(t,i,a);break;case 5:var c=l.stateNode;l.flags&32&&(vn(c,""),l.flags&=-33);var s=Ao(t);Pi(t,s,c);break;case 3:case 4:var m=l.stateNode.containerInfo,A=Ao(t);Eo(t,A,m);break;default:throw Error(f(161))}}catch(R){Dt(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ed(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ed(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ol(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)vd(t,e.alternate,e),e=e.sibling}function un(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:El(4,e,e.return),un(e);break;case 1:Ke(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&gd(e,e.return,l),un(e);break;case 27:Za(e.stateNode);case 26:case 5:Ke(e,e.return),un(e);break;case 22:e.memoizedState===null&&un(e);break;case 30:un(e);break;default:un(e)}t=t.sibling}}function rl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,a=t,i=e,c=i.flags;switch(i.tag){case 0:case 11:case 15:rl(a,i,l),Ua(4,i);break;case 1:if(rl(a,i,l),n=i,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(A){Dt(n,n.return,A)}if(n=i,a=n.updateQueue,a!==null){var s=n.stateNode;try{var m=a.shared.hiddenCallbacks;if(m!==null)for(a.shared.hiddenCallbacks=null,a=0;a<m.length;a++)ns(m[a],s)}catch(A){Dt(n,n.return,A)}}l&&c&64&&hd(i),Ba(i,i.return);break;case 27:xd(i);case 26:case 5:rl(a,i,l),l&&n===null&&c&4&&md(i),Ba(i,i.return);break;case 12:rl(a,i,l);break;case 31:rl(a,i,l),l&&c&4&&zd(a,i);break;case 13:rl(a,i,l),l&&c&4&&Td(a,i);break;case 22:i.memoizedState===null&&rl(a,i,l),Ba(i,i.return);break;case 30:break;default:rl(a,i,l)}e=e.sibling}}function Oo(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&ja(l))}function Mo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ja(t))}function Le(t,e,l,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cd(t,e,l,n),e=e.sibling}function Cd(t,e,l,n){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Le(t,e,l,n),a&2048&&Ua(9,e);break;case 1:Le(t,e,l,n);break;case 3:Le(t,e,l,n),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ja(t)));break;case 12:if(a&2048){Le(t,e,l,n),t=e.stateNode;try{var i=e.memoizedProps,c=i.id,s=i.onPostCommit;typeof s=="function"&&s(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){Dt(e,e.return,m)}}else Le(t,e,l,n);break;case 31:Le(t,e,l,n);break;case 13:Le(t,e,l,n);break;case 23:break;case 22:i=e.stateNode,c=e.alternate,e.memoizedState!==null?i._visibility&2?Le(t,e,l,n):Ha(t,e):i._visibility&2?Le(t,e,l,n):(i._visibility|=2,Gn(t,e,l,n,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Oo(c,e);break;case 24:Le(t,e,l,n),a&2048&&Mo(e.alternate,e);break;default:Le(t,e,l,n)}}function Gn(t,e,l,n,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,c=e,s=l,m=n,A=c.flags;switch(c.tag){case 0:case 11:case 15:Gn(i,c,s,m,a),Ua(8,c);break;case 23:break;case 22:var R=c.stateNode;c.memoizedState!==null?R._visibility&2?Gn(i,c,s,m,a):Ha(i,c):(R._visibility|=2,Gn(i,c,s,m,a)),a&&A&2048&&Oo(c.alternate,c);break;case 24:Gn(i,c,s,m,a),a&&A&2048&&Mo(c.alternate,c);break;default:Gn(i,c,s,m,a)}e=e.sibling}}function Ha(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,n=e,a=n.flags;switch(n.tag){case 22:Ha(l,n),a&2048&&Oo(n.alternate,n);break;case 24:Ha(l,n),a&2048&&Mo(n.alternate,n);break;default:Ha(l,n)}e=e.sibling}}var Ya=8192;function Ln(t,e,l){if(t.subtreeFlags&Ya)for(t=t.child;t!==null;)Od(t,e,l),t=t.sibling}function Od(t,e,l){switch(t.tag){case 26:Ln(t,e,l),t.flags&Ya&&t.memoizedState!==null&&qg(l,Ge,t.memoizedState,t.memoizedProps);break;case 5:Ln(t,e,l);break;case 3:case 4:var n=Ge;Ge=hu(t.stateNode.containerInfo),Ln(t,e,l),Ge=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Ya,Ya=16777216,Ln(t,e,l),Ya=n):Ln(t,e,l));break;default:Ln(t,e,l)}}function Md(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function qa(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];It=n,_d(n,t)}Md(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dd(t),t=t.sibling}function Dd(t){switch(t.tag){case 0:case 11:case 15:qa(t),t.flags&2048&&El(9,t,t.return);break;case 3:qa(t);break;case 12:qa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,eu(t)):qa(t);break;default:qa(t)}}function eu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var n=e[l];It=n,_d(n,t)}Md(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:El(8,e,e.return),eu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,eu(e));break;default:eu(e)}t=t.sibling}}function _d(t,e){for(;It!==null;){var l=It;switch(l.tag){case 0:case 11:case 15:El(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ja(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,It=n;else t:for(l=t;It!==null;){n=It;var a=n.sibling,i=n.return;if(Sd(n),n===l){It=null;break t}if(a!==null){a.return=i,It=a;break t}It=i}}}var tg={getCacheForType:function(t){var e=le(Qt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return le(Qt).controller.signal}},eg=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Ut=null,xt=null,vt=0,Mt=0,Ae=null,Cl=!1,$n=!1,Do=!1,fl=0,Lt=0,Ol=0,cn=0,_o=0,Ee=0,Xn=0,Ga=null,ge=null,No=!1,lu=0,Nd=0,nu=1/0,au=null,Ml=null,Jt=0,Dl=null,Qn=null,sl=0,wo=0,Ro=null,wd=null,La=0,Uo=null;function Ce(){return(Ct&2)!==0&&vt!==0?vt&-vt:x.T!==null?Lo():kr()}function Rd(){if(Ee===0)if((vt&536870912)===0||zt){var t=di;di<<=1,(di&3932160)===0&&(di=262144),Ee=t}else Ee=536870912;return t=ze.current,t!==null&&(t.flags|=32),Ee}function me(t,e,l){(t===Ut&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(Zn(t,0),_l(t,vt,Ee,!1)),oa(t,l),((Ct&2)===0||t!==Ut)&&(t===Ut&&((Ct&2)===0&&(cn|=l),Lt===4&&_l(t,vt,Ee,!1)),ke(t))}function Ud(t,e,l){if((Ct&6)!==0)throw Error(f(327));var n=!l&&(e&127)===0&&(e&t.expiredLanes)===0||ca(t,e),a=n?ag(t,e):Ho(t,e,!0),i=n;do{if(a===0){$n&&!n&&_l(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!lg(l)){a=Ho(t,e,!1),i=!1;continue}if(a===2){if(i=e,t.errorRecoveryDisabledLanes&i)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var s=t;a=Ga;var m=s.current.memoizedState.isDehydrated;if(m&&(Zn(s,c).flags|=256),c=Ho(s,c,!1),c!==2){if(Do&&!m){s.errorRecoveryDisabledLanes|=i,cn|=i,a=4;break t}i=ge,ge=a,i!==null&&(ge===null?ge=i:ge.push.apply(ge,i))}a=c}if(i=!1,a!==2)continue}}if(a===1){Zn(t,0),_l(t,e,0,!0);break}t:{switch(n=t,i=a,i){case 0:case 1:throw Error(f(345));case 4:if((e&4194048)!==e)break;case 6:_l(n,e,Ee,!Cl);break t;case 2:ge=null;break;case 3:case 5:break;default:throw Error(f(329))}if((e&62914560)===e&&(a=lu+300-xe(),10<a)){if(_l(n,e,Ee,!Cl),hi(n,0,!0)!==0)break t;sl=e,n.timeoutHandle=d0(Bd.bind(null,n,l,ge,au,No,e,Ee,cn,Xn,Cl,i,"Throttled",-0,0),a);break t}Bd(n,l,ge,au,No,e,Ee,cn,Xn,Cl,i,null,-0,0)}}break}while(!0);ke(t)}function Bd(t,e,l,n,a,i,c,s,m,A,R,Y,O,N){if(t.timeoutHandle=-1,Y=e.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fe},Od(e,i,Y);var P=(i&62914560)===i?lu-xe():(i&4194048)===i?Nd-xe():0;if(P=Gg(Y,P),P!==null){sl=i,t.cancelPendingCommit=P(Qd.bind(null,t,e,i,l,n,a,c,s,m,R,Y,null,O,N)),_l(t,i,c,!A);return}}Qd(t,e,i,l,n,a,c,s,m)}function lg(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var a=l[n],i=a.getSnapshot;a=a.value;try{if(!Se(i(),a))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _l(t,e,l,n){e&=~_o,e&=~cn,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var a=e;0<a;){var i=31-ve(a),c=1<<i;n[i]=-1,a&=~c}l!==0&&Zr(t,l,e)}function iu(){return(Ct&6)===0?($a(0),!1):!0}function Bo(){if(xt!==null){if(Mt===0)var t=xt.return;else t=xt,tl=Wl=null,Wc(t),Un=null,Ta=0,t=xt;for(;t!==null;)pd(t.alternate,t),t=t.return;xt=null}}function Zn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,jg(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),sl=0,Bo(),Ut=t,xt=l=Ie(t.current,null),vt=e,Mt=0,Ae=null,Cl=!1,$n=ca(t,e),Do=!1,Xn=Ee=_o=cn=Ol=Lt=0,ge=Ga=null,No=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var a=31-ve(n),i=1<<a;e|=t[a],n&=~i}return fl=e,Ei(),l}function Hd(t,e){ht=null,x.H=Na,e===Rn||e===Ri?(e=Pf(),Mt=3):e===qc?(e=Pf(),Mt=4):Mt=e===ho?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ae=e,xt===null&&(Lt=1,ki(t,_e(e,t.current)))}function Yd(){var t=ze.current;return t===null?!0:(vt&4194048)===vt?Ue===null:(vt&62914560)===vt||(vt&536870912)!==0?t===Ue:!1}function qd(){var t=x.H;return x.H=Na,t===null?Na:t}function Gd(){var t=x.A;return x.A=tg,t}function uu(){Lt=4,Cl||(vt&4194048)!==vt&&ze.current!==null||($n=!0),(Ol&134217727)===0&&(cn&134217727)===0||Ut===null||_l(Ut,vt,Ee,!1)}function Ho(t,e,l){var n=Ct;Ct|=2;var a=qd(),i=Gd();(Ut!==t||vt!==e)&&(au=null,Zn(t,e)),e=!1;var c=Lt;t:do try{if(Mt!==0&&xt!==null){var s=xt,m=Ae;switch(Mt){case 8:Bo(),c=6;break t;case 3:case 2:case 9:case 6:ze.current===null&&(e=!0);var A=Mt;if(Mt=0,Ae=null,Vn(t,s,m,A),l&&$n){c=0;break t}break;default:A=Mt,Mt=0,Ae=null,Vn(t,s,m,A)}}ng(),c=Lt;break}catch(R){Hd(t,R)}while(!0);return e&&t.shellSuspendCounter++,tl=Wl=null,Ct=n,x.H=a,x.A=i,xt===null&&(Ut=null,vt=0,Ei()),c}function ng(){for(;xt!==null;)Ld(xt)}function ag(t,e){var l=Ct;Ct|=2;var n=qd(),a=Gd();Ut!==t||vt!==e?(au=null,nu=xe()+500,Zn(t,e)):$n=ca(t,e);t:do try{if(Mt!==0&&xt!==null){e=xt;var i=Ae;e:switch(Mt){case 1:Mt=0,Ae=null,Vn(t,e,i,1);break;case 2:case 9:if(Wf(i)){Mt=0,Ae=null,$d(e);break}e=function(){Mt!==2&&Mt!==9||Ut!==t||(Mt=7),ke(t)},i.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Wf(i)?(Mt=0,Ae=null,$d(e)):(Mt=0,Ae=null,Vn(t,e,i,7));break;case 5:var c=null;switch(xt.tag){case 26:c=xt.memoizedState;case 5:case 27:var s=xt;if(c?C0(c):s.stateNode.complete){Mt=0,Ae=null;var m=s.sibling;if(m!==null)xt=m;else{var A=s.return;A!==null?(xt=A,cu(A)):xt=null}break e}}Mt=0,Ae=null,Vn(t,e,i,5);break;case 6:Mt=0,Ae=null,Vn(t,e,i,6);break;case 8:Bo(),Lt=6;break t;default:throw Error(f(462))}}ig();break}catch(R){Hd(t,R)}while(!0);return tl=Wl=null,x.H=n,x.A=a,Ct=l,xt!==null?0:(Ut=null,vt=0,Ei(),Lt)}function ig(){for(;xt!==null&&!Oh();)Ld(xt)}function Ld(t){var e=sd(t.alternate,t,fl);t.memoizedProps=t.pendingProps,e===null?cu(t):xt=e}function $d(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=id(l,e,e.pendingProps,e.type,void 0,vt);break;case 11:e=id(l,e,e.pendingProps,e.type.render,e.ref,vt);break;case 5:Wc(e);default:pd(l,e),e=xt=Gf(e,fl),e=sd(l,e,fl)}t.memoizedProps=t.pendingProps,e===null?cu(t):xt=e}function Vn(t,e,l,n){tl=Wl=null,Wc(e),Un=null,Ta=0;var a=e.return;try{if(K1(t,a,e,l,vt)){Lt=1,ki(t,_e(l,t.current)),xt=null;return}}catch(i){if(a!==null)throw xt=a,i;Lt=1,ki(t,_e(l,t.current)),xt=null;return}e.flags&32768?(zt||n===1?t=!0:$n||(vt&536870912)!==0?t=!1:(Cl=t=!0,(n===2||n===9||n===3||n===6)&&(n=ze.current,n!==null&&n.tag===13&&(n.flags|=16384))),Xd(e,t)):cu(e)}function cu(t){var e=t;do{if((e.flags&32768)!==0){Xd(e,Cl);return}t=e.return;var l=F1(e.alternate,e,fl);if(l!==null){xt=l;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Xd(t,e){do{var l=W1(t.alternate,t);if(l!==null){l.flags&=32767,xt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){xt=t;return}xt=t=l}while(t!==null);Lt=6,xt=null}function Qd(t,e,l,n,a,i,c,s,m){t.cancelPendingCommit=null;do ou();while(Jt!==0);if((Ct&6)!==0)throw Error(f(327));if(e!==null){if(e===t.current)throw Error(f(177));if(i=e.lanes|e.childLanes,i|=Tc,Yh(t,l,i,c,s,m),t===Ut&&(xt=Ut=null,vt=0),Qn=e,Dl=t,sl=l,wo=i,Ro=a,wd=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,rg(fi,function(){return Jd(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=x.T,x.T=null,a=E.p,E.p=2,c=Ct,Ct|=4;try{I1(t,e,l)}finally{Ct=c,E.p=a,x.T=n}}Jt=1,Zd(),Vd(),Kd()}}function Zd(){if(Jt===1){Jt=0;var t=Dl,e=Qn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=x.T,x.T=null;var n=E.p;E.p=2;var a=Ct;Ct|=4;try{Ad(e,t);var i=Jo,c=_f(t.containerInfo),s=i.focusedElem,m=i.selectionRange;if(c!==s&&s&&s.ownerDocument&&Df(s.ownerDocument.documentElement,s)){if(m!==null&&yc(s)){var A=m.start,R=m.end;if(R===void 0&&(R=A),"selectionStart"in s)s.selectionStart=A,s.selectionEnd=Math.min(R,s.value.length);else{var Y=s.ownerDocument||document,O=Y&&Y.defaultView||window;if(O.getSelection){var N=O.getSelection(),P=s.textContent.length,ft=Math.min(m.start,P),wt=m.end===void 0?ft:Math.min(m.end,P);!N.extend&&ft>wt&&(c=wt,wt=ft,ft=c);var v=Mf(s,ft),b=Mf(s,wt);if(v&&b&&(N.rangeCount!==1||N.anchorNode!==v.node||N.anchorOffset!==v.offset||N.focusNode!==b.node||N.focusOffset!==b.offset)){var T=Y.createRange();T.setStart(v.node,v.offset),N.removeAllRanges(),ft>wt?(N.addRange(T),N.extend(b.node,b.offset)):(T.setEnd(b.node,b.offset),N.addRange(T))}}}}for(Y=[],N=s;N=N.parentNode;)N.nodeType===1&&Y.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<Y.length;s++){var B=Y[s];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}vu=!!ko,Jo=ko=null}finally{Ct=a,E.p=n,x.T=l}}t.current=e,Jt=2}}function Vd(){if(Jt===2){Jt=0;var t=Dl,e=Qn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=x.T,x.T=null;var n=E.p;E.p=2;var a=Ct;Ct|=4;try{vd(t,e.alternate,e)}finally{Ct=a,E.p=n,x.T=l}}Jt=3}}function Kd(){if(Jt===4||Jt===3){Jt=0,Mh();var t=Dl,e=Qn,l=sl,n=wd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Jt=5:(Jt=0,Qn=Dl=null,kd(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Ml=null),tc(l),e=e.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(ua,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=x.T,a=E.p,E.p=2,x.T=null;try{for(var i=t.onRecoverableError,c=0;c<n.length;c++){var s=n[c];i(s.value,{componentStack:s.stack})}}finally{x.T=e,E.p=a}}(sl&3)!==0&&ou(),ke(t),a=t.pendingLanes,(l&261930)!==0&&(a&42)!==0?t===Uo?La++:(La=0,Uo=t):La=0,$a(0)}}function kd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ja(e)))}function ou(){return Zd(),Vd(),Kd(),Jd()}function Jd(){if(Jt!==5)return!1;var t=Dl,e=wo;wo=0;var l=tc(sl),n=x.T,a=E.p;try{E.p=32>l?32:l,x.T=null,l=Ro,Ro=null;var i=Dl,c=sl;if(Jt=0,Qn=Dl=null,sl=0,(Ct&6)!==0)throw Error(f(331));var s=Ct;if(Ct|=4,Dd(i.current),Cd(i,i.current,c,l),Ct=s,$a(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(ua,i)}catch{}return!0}finally{E.p=a,x.T=n,kd(t,e)}}function Fd(t,e,l){e=_e(l,e),e=po(t.stateNode,e,2),t=zl(t,e,2),t!==null&&(oa(t,2),ke(t))}function Dt(t,e,l){if(t.tag===3)Fd(t,t,l);else for(;e!==null;){if(e.tag===3){Fd(e,t,l);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ml===null||!Ml.has(n))){t=_e(l,t),l=Ws(2),n=zl(e,l,2),n!==null&&(Is(l,n,e,t),oa(n,2),ke(n));break}}e=e.return}}function Yo(t,e,l){var n=t.pingCache;if(n===null){n=t.pingCache=new eg;var a=new Set;n.set(e,a)}else a=n.get(e),a===void 0&&(a=new Set,n.set(e,a));a.has(l)||(Do=!0,a.add(l),t=ug.bind(null,t,e,l),e.then(t,t))}function ug(t,e,l){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Ut===t&&(vt&l)===l&&(Lt===4||Lt===3&&(vt&62914560)===vt&&300>xe()-lu?(Ct&2)===0&&Zn(t,0):_o|=l,Xn===vt&&(Xn=0)),ke(t)}function Wd(t,e){e===0&&(e=Qr()),t=kl(t,e),t!==null&&(oa(t,e),ke(t))}function cg(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Wd(t,l)}function og(t,e){var l=0;switch(t.tag){case 31:case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(l=a.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(f(314))}n!==null&&n.delete(e),Wd(t,l)}function rg(t,e){return Fu(t,e)}var ru=null,Kn=null,qo=!1,fu=!1,Go=!1,Nl=0;function ke(t){t!==Kn&&t.next===null&&(Kn===null?ru=Kn=t:Kn=Kn.next=t),fu=!0,qo||(qo=!0,sg())}function $a(t,e){if(!Go&&fu){Go=!0;do for(var l=!1,n=ru;n!==null;){if(t!==0){var a=n.pendingLanes;if(a===0)var i=0;else{var c=n.suspendedLanes,s=n.pingedLanes;i=(1<<31-ve(42|t)+1)-1,i&=a&~(c&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,e0(n,i))}else i=vt,i=hi(n,n===Ut?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||ca(n,i)||(l=!0,e0(n,i));n=n.next}while(l);Go=!1}}function fg(){Id()}function Id(){fu=qo=!1;var t=0;Nl!==0&&Sg()&&(t=Nl);for(var e=xe(),l=null,n=ru;n!==null;){var a=n.next,i=Pd(n,e);i===0?(n.next=null,l===null?ru=a:l.next=a,a===null&&(Kn=l)):(l=n,(t!==0||(i&3)!==0)&&(fu=!0)),n=a}Jt!==0&&Jt!==5||$a(t),Nl!==0&&(Nl=0)}function Pd(t,e){for(var l=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var c=31-ve(i),s=1<<c,m=a[c];m===-1?((s&l)===0||(s&n)!==0)&&(a[c]=Hh(s,e)):m<=e&&(t.expiredLanes|=s),i&=~s}if(e=Ut,l=vt,l=hi(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,l===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Wu(n),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||ca(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(n!==null&&Wu(n),tc(l)){case 2:case 8:l=$r;break;case 32:l=fi;break;case 268435456:l=Xr;break;default:l=fi}return n=t0.bind(null,t),l=Fu(l,n),t.callbackPriority=e,t.callbackNode=l,e}return n!==null&&n!==null&&Wu(n),t.callbackPriority=2,t.callbackNode=null,2}function t0(t,e){if(Jt!==0&&Jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(ou()&&t.callbackNode!==l)return null;var n=vt;return n=hi(t,t===Ut?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(Ud(t,n,e),Pd(t,xe()),t.callbackNode!=null&&t.callbackNode===l?t0.bind(null,t):null)}function e0(t,e){if(ou())return null;Ud(t,e,!0)}function sg(){zg(function(){(Ct&6)!==0?Fu(Lr,fg):Id()})}function Lo(){if(Nl===0){var t=Nn;t===0&&(t=si,si<<=1,(si&261888)===0&&(si=256)),Nl=t}return Nl}function l0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xi(""+t)}function n0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function dg(t,e,l,n,a){if(e==="submit"&&l&&l.stateNode===a){var i=l0((a[fe]||null).action),c=n.submitter;c&&(e=(e=c[fe]||null)?l0(e.formAction):c.getAttribute("formAction"),e!==null&&(i=e,c=null));var s=new ji("action","action",null,n,a);t.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Nl!==0){var m=c?n0(a,c):new FormData(a);uo(l,{pending:!0,data:m,method:a.method,action:i},null,m)}}else typeof i=="function"&&(s.preventDefault(),m=c?n0(a,c):new FormData(a),uo(l,{pending:!0,data:m,method:a.method,action:i},i,m))},currentTarget:a}]})}}for(var $o=0;$o<zc.length;$o++){var Xo=zc[$o],pg=Xo.toLowerCase(),hg=Xo[0].toUpperCase()+Xo.slice(1);qe(pg,"on"+hg)}qe(Rf,"onAnimationEnd"),qe(Uf,"onAnimationIteration"),qe(Bf,"onAnimationStart"),qe("dblclick","onDoubleClick"),qe("focusin","onFocus"),qe("focusout","onBlur"),qe(D1,"onTransitionRun"),qe(_1,"onTransitionStart"),qe(N1,"onTransitionCancel"),qe(Hf,"onTransitionEnd"),xn("onMouseEnter",["mouseout","mouseover"]),xn("onMouseLeave",["mouseout","mouseover"]),xn("onPointerEnter",["pointerout","pointerover"]),xn("onPointerLeave",["pointerout","pointerover"]),Ql("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ql("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ql("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ql("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ql("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ql("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xa));function a0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var n=t[l],a=n.event;n=n.listeners;t:{var i=void 0;if(e)for(var c=n.length-1;0<=c;c--){var s=n[c],m=s.instance,A=s.currentTarget;if(s=s.listener,m!==i&&a.isPropagationStopped())break t;i=s,a.currentTarget=A;try{i(a)}catch(R){Ai(R)}a.currentTarget=null,i=m}else for(c=0;c<n.length;c++){if(s=n[c],m=s.instance,A=s.currentTarget,s=s.listener,m!==i&&a.isPropagationStopped())break t;i=s,a.currentTarget=A;try{i(a)}catch(R){Ai(R)}a.currentTarget=null,i=m}}}}function yt(t,e){var l=e[ec];l===void 0&&(l=e[ec]=new Set);var n=t+"__bubble";l.has(n)||(i0(e,t,2,!1),l.add(n))}function Qo(t,e,l){var n=0;e&&(n|=4),i0(l,t,n,e)}var su="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[su]){t[su]=!0,Wr.forEach(function(l){l!=="selectionchange"&&(gg.has(l)||Qo(l,!1,t),Qo(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[su]||(e[su]=!0,Qo("selectionchange",!1,e))}}function i0(t,e,l,n){switch(R0(e)){case 2:var a=Xg;break;case 8:a=Qg;break;default:a=ur}l=a.bind(null,e,l,t),a=void 0,!fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(e,l,{capture:!0,passive:a}):t.addEventListener(e,l,!0):a!==void 0?t.addEventListener(e,l,{passive:a}):t.addEventListener(e,l,!1)}function Vo(t,e,l,n,a){var i=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var s=n.stateNode.containerInfo;if(s===a)break;if(c===4)for(c=n.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===a)return;c=c.return}for(;s!==null;){if(c=gn(s),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){n=i=c;continue t}s=s.parentNode}}n=n.return}ff(function(){var A=i,R=oc(l),Y=[];t:{var O=Yf.get(t);if(O!==void 0){var N=ji,P=t;switch(t){case"keypress":if(vi(l)===0)break t;case"keydown":case"keyup":N=o1;break;case"focusin":P="focus",N=hc;break;case"focusout":P="blur",N=hc;break;case"beforeblur":case"afterblur":N=hc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=s1;break;case Rf:case Uf:case Bf:N=Ph;break;case Hf:N=p1;break;case"scroll":case"scrollend":N=kh;break;case"wheel":N=g1;break;case"copy":case"cut":case"paste":N=e1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=gf;break;case"toggle":case"beforetoggle":N=b1}var ft=(e&4)!==0,wt=!ft&&(t==="scroll"||t==="scrollend"),v=ft?O!==null?O+"Capture":null:O;ft=[];for(var b=A,T;b!==null;){var B=b;if(T=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||T===null||v===null||(B=sa(b,v),B!=null&&ft.push(Qa(b,B,T))),wt)break;b=b.return}0<ft.length&&(O=new N(O,P,null,l,R),Y.push({event:O,listeners:ft}))}}if((e&7)===0){t:{if(O=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",O&&l!==cc&&(P=l.relatedTarget||l.fromElement)&&(gn(P)||P[hn]))break t;if((N||O)&&(O=R.window===R?R:(O=R.ownerDocument)?O.defaultView||O.parentWindow:window,N?(P=l.relatedTarget||l.toElement,N=A,P=P?gn(P):null,P!==null&&(wt=j(P),ft=P.tag,P!==wt||ft!==5&&ft!==27&&ft!==6)&&(P=null)):(N=null,P=A),N!==P)){if(ft=pf,B="onMouseLeave",v="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(ft=gf,B="onPointerLeave",v="onPointerEnter",b="pointer"),wt=N==null?O:fa(N),T=P==null?O:fa(P),O=new ft(B,b+"leave",N,l,R),O.target=wt,O.relatedTarget=T,B=null,gn(R)===A&&(ft=new ft(v,b+"enter",P,l,R),ft.target=T,ft.relatedTarget=wt,B=ft),wt=B,N&&P)e:{for(ft=mg,v=N,b=P,T=0,B=v;B;B=ft(B))T++;B=0;for(var ut=b;ut;ut=ft(ut))B++;for(;0<T-B;)v=ft(v),T--;for(;0<B-T;)b=ft(b),B--;for(;T--;){if(v===b||b!==null&&v===b.alternate){ft=v;break e}v=ft(v),b=ft(b)}ft=null}else ft=null;N!==null&&u0(Y,O,N,ft,!1),P!==null&&wt!==null&&u0(Y,wt,P,ft,!0)}}t:{if(O=A?fa(A):window,N=O.nodeName&&O.nodeName.toLowerCase(),N==="select"||N==="input"&&O.type==="file")var At=zf;else if(Sf(O))if(Tf)At=C1;else{At=A1;var et=T1}else N=O.nodeName,!N||N.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?A&&uc(A.elementType)&&(At=zf):At=E1;if(At&&(At=At(t,A))){jf(Y,At,l,R);break t}et&&et(t,O,A),t==="focusout"&&A&&O.type==="number"&&A.memoizedProps.value!=null&&ic(O,"number",O.value)}switch(et=A?fa(A):window,t){case"focusin":(Sf(et)||et.contentEditable==="true")&&(Tn=et,vc=A,ya=null);break;case"focusout":ya=vc=Tn=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Nf(Y,l,R);break;case"selectionchange":if(M1)break;case"keydown":case"keyup":Nf(Y,l,R)}var gt;if(mc)t:{switch(t){case"compositionstart":var St="onCompositionStart";break t;case"compositionend":St="onCompositionEnd";break t;case"compositionupdate":St="onCompositionUpdate";break t}St=void 0}else zn?yf(t,l)&&(St="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(St="onCompositionStart");St&&(mf&&l.locale!=="ko"&&(zn||St!=="onCompositionStart"?St==="onCompositionEnd"&&zn&&(gt=sf()):(ml=R,sc="value"in ml?ml.value:ml.textContent,zn=!0)),et=du(A,St),0<et.length&&(St=new hf(St,t,null,l,R),Y.push({event:St,listeners:et}),gt?St.data=gt:(gt=vf(l),gt!==null&&(St.data=gt)))),(gt=y1?v1(t,l):S1(t,l))&&(St=du(A,"onBeforeInput"),0<St.length&&(et=new hf("onBeforeInput","beforeinput",null,l,R),Y.push({event:et,listeners:St}),et.data=gt)),dg(Y,t,A,l,R)}a0(Y,e)})}function Qa(t,e,l){return{instance:t,listener:e,currentTarget:l}}function du(t,e){for(var l=e+"Capture",n=[];t!==null;){var a=t,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=sa(t,l),a!=null&&n.unshift(Qa(t,a,i)),a=sa(t,e),a!=null&&n.push(Qa(t,a,i))),t.tag===3)return n;t=t.return}return[]}function mg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function u0(t,e,l,n,a){for(var i=e._reactName,c=[];l!==null&&l!==n;){var s=l,m=s.alternate,A=s.stateNode;if(s=s.tag,m!==null&&m===n)break;s!==5&&s!==26&&s!==27||A===null||(m=A,a?(A=sa(l,i),A!=null&&c.unshift(Qa(l,A,m))):a||(A=sa(l,i),A!=null&&c.push(Qa(l,A,m)))),l=l.return}c.length!==0&&t.push({event:e,listeners:c})}var bg=/\r\n?/g,xg=/\u0000|\uFFFD/g;function c0(t){return(typeof t=="string"?t:""+t).replace(bg,`
`).replace(xg,"")}function o0(t,e){return e=c0(e),c0(t)===e}function Nt(t,e,l,n,a,i){switch(l){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||vn(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&vn(t,""+n);break;case"className":mi(t,"class",n);break;case"tabIndex":mi(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":mi(t,l,n);break;case"style":of(t,n,i);break;case"data":if(e!=="object"){mi(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=xi(""+n),t.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Nt(t,e,"name",a.name,a,null),Nt(t,e,"formEncType",a.formEncType,a,null),Nt(t,e,"formMethod",a.formMethod,a,null),Nt(t,e,"formTarget",a.formTarget,a,null)):(Nt(t,e,"encType",a.encType,a,null),Nt(t,e,"method",a.method,a,null),Nt(t,e,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(l);break}n=xi(""+n),t.setAttribute(l,n);break;case"onClick":n!=null&&(t.onclick=Fe);break;case"onScroll":n!=null&&yt("scroll",t);break;case"onScrollEnd":n!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=l}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}l=xi(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""+n):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":n===!0?t.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(l,n):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(l,n):t.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(l):t.setAttribute(l,n);break;case"popover":yt("beforetoggle",t),yt("toggle",t),gi(t,"popover",n);break;case"xlinkActuate":Je(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Je(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Je(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Je(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Je(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Je(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Je(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":gi(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Vh.get(l)||l,gi(t,l,n))}}function Ko(t,e,l,n,a,i){switch(l){case"style":of(t,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(l=n.__html,l!=null){if(a.children!=null)throw Error(f(60));t.innerHTML=l}}break;case"children":typeof n=="string"?vn(t,n):(typeof n=="number"||typeof n=="bigint")&&vn(t,""+n);break;case"onScroll":n!=null&&yt("scroll",t);break;case"onScrollEnd":n!=null&&yt("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Fe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ir.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(a=l.endsWith("Capture"),e=l.slice(2,a?l.length-7:void 0),i=t[fe]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,a),typeof n=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,n,a);break t}l in t?t[l]=n:n===!0?t.setAttribute(l,""):gi(t,l,n)}}}function ae(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var n=!1,a=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:Nt(t,e,i,c,l,null)}}a&&Nt(t,e,"srcSet",l.srcSet,l,null),n&&Nt(t,e,"src",l.src,l,null);return;case"input":yt("invalid",t);var s=i=c=a=null,m=null,A=null;for(n in l)if(l.hasOwnProperty(n)){var R=l[n];if(R!=null)switch(n){case"name":a=R;break;case"type":c=R;break;case"checked":m=R;break;case"defaultChecked":A=R;break;case"value":i=R;break;case"defaultValue":s=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(f(137,e));break;default:Nt(t,e,n,R,l,null)}}nf(t,i,s,m,A,c,a,!1);return;case"select":yt("invalid",t),n=c=i=null;for(a in l)if(l.hasOwnProperty(a)&&(s=l[a],s!=null))switch(a){case"value":i=s;break;case"defaultValue":c=s;break;case"multiple":n=s;default:Nt(t,e,a,s,l,null)}e=i,l=c,t.multiple=!!n,e!=null?yn(t,!!n,e,!1):l!=null&&yn(t,!!n,l,!0);return;case"textarea":yt("invalid",t),i=a=n=null;for(c in l)if(l.hasOwnProperty(c)&&(s=l[c],s!=null))switch(c){case"value":n=s;break;case"defaultValue":a=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(f(91));break;default:Nt(t,e,c,s,l,null)}uf(t,n,a,i);return;case"option":for(m in l)l.hasOwnProperty(m)&&(n=l[m],n!=null)&&(m==="selected"?t.selected=n&&typeof n!="function"&&typeof n!="symbol":Nt(t,e,m,n,l,null));return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(n=0;n<Xa.length;n++)yt(Xa[n],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in l)if(l.hasOwnProperty(A)&&(n=l[A],n!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,e));default:Nt(t,e,A,n,l,null)}return;default:if(uc(e)){for(R in l)l.hasOwnProperty(R)&&(n=l[R],n!==void 0&&Ko(t,e,R,n,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(n=l[s],n!=null&&Nt(t,e,s,n,l,null))}function yg(t,e,l,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,c=null,s=null,m=null,A=null,R=null;for(N in l){var Y=l[N];if(l.hasOwnProperty(N)&&Y!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":m=Y;default:n.hasOwnProperty(N)||Nt(t,e,N,null,n,Y)}}for(var O in n){var N=n[O];if(Y=l[O],n.hasOwnProperty(O)&&(N!=null||Y!=null))switch(O){case"type":i=N;break;case"name":a=N;break;case"checked":A=N;break;case"defaultChecked":R=N;break;case"value":c=N;break;case"defaultValue":s=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(f(137,e));break;default:N!==Y&&Nt(t,e,O,N,n,Y)}}ac(t,c,s,m,A,R,i,a);return;case"select":N=c=s=O=null;for(i in l)if(m=l[i],l.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":N=m;default:n.hasOwnProperty(i)||Nt(t,e,i,null,n,m)}for(a in n)if(i=n[a],m=l[a],n.hasOwnProperty(a)&&(i!=null||m!=null))switch(a){case"value":O=i;break;case"defaultValue":s=i;break;case"multiple":c=i;default:i!==m&&Nt(t,e,a,i,n,m)}e=s,l=c,n=N,O!=null?yn(t,!!l,O,!1):!!n!=!!l&&(e!=null?yn(t,!!l,e,!0):yn(t,!!l,l?[]:"",!1));return;case"textarea":N=O=null;for(s in l)if(a=l[s],l.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Nt(t,e,s,null,n,a)}for(c in n)if(a=n[c],i=l[c],n.hasOwnProperty(c)&&(a!=null||i!=null))switch(c){case"value":O=a;break;case"defaultValue":N=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(f(91));break;default:a!==i&&Nt(t,e,c,a,n,i)}af(t,O,N);return;case"option":for(var P in l)O=l[P],l.hasOwnProperty(P)&&O!=null&&!n.hasOwnProperty(P)&&(P==="selected"?t.selected=!1:Nt(t,e,P,null,n,O));for(m in n)O=n[m],N=l[m],n.hasOwnProperty(m)&&O!==N&&(O!=null||N!=null)&&(m==="selected"?t.selected=O&&typeof O!="function"&&typeof O!="symbol":Nt(t,e,m,O,n,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in l)O=l[ft],l.hasOwnProperty(ft)&&O!=null&&!n.hasOwnProperty(ft)&&Nt(t,e,ft,null,n,O);for(A in n)if(O=n[A],N=l[A],n.hasOwnProperty(A)&&O!==N&&(O!=null||N!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(f(137,e));break;default:Nt(t,e,A,O,n,N)}return;default:if(uc(e)){for(var wt in l)O=l[wt],l.hasOwnProperty(wt)&&O!==void 0&&!n.hasOwnProperty(wt)&&Ko(t,e,wt,void 0,n,O);for(R in n)O=n[R],N=l[R],!n.hasOwnProperty(R)||O===N||O===void 0&&N===void 0||Ko(t,e,R,O,n,N);return}}for(var v in l)O=l[v],l.hasOwnProperty(v)&&O!=null&&!n.hasOwnProperty(v)&&Nt(t,e,v,null,n,O);for(Y in n)O=n[Y],N=l[Y],!n.hasOwnProperty(Y)||O===N||O==null&&N==null||Nt(t,e,Y,O,n,N)}function r0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),n=0;n<l.length;n++){var a=l[n],i=a.transferSize,c=a.initiatorType,s=a.duration;if(i&&s&&r0(c)){for(c=0,s=a.responseEnd,n+=1;n<l.length;n++){var m=l[n],A=m.startTime;if(A>s)break;var R=m.transferSize,Y=m.initiatorType;R&&r0(Y)&&(m=m.responseEnd,c+=R*(m<s?1:(s-A)/(m-A)))}if(--n,e+=8*(i+c)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ko=null,Jo=null;function pu(t){return t.nodeType===9?t:t.ownerDocument}function f0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Fo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wo=null;function Sg(){var t=window.event;return t&&t.type==="popstate"?t===Wo?!1:(Wo=t,!0):(Wo=null,!1)}var d0=typeof setTimeout=="function"?setTimeout:void 0,jg=typeof clearTimeout=="function"?clearTimeout:void 0,p0=typeof Promise=="function"?Promise:void 0,zg=typeof queueMicrotask=="function"?queueMicrotask:typeof p0<"u"?function(t){return p0.resolve(null).then(t).catch(Tg)}:d0;function Tg(t){setTimeout(function(){throw t})}function wl(t){return t==="head"}function h0(t,e){var l=e,n=0;do{var a=l.nextSibling;if(t.removeChild(l),a&&a.nodeType===8)if(l=a.data,l==="/$"||l==="/&"){if(n===0){t.removeChild(a),Wn(e);return}n--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")n++;else if(l==="html")Za(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Za(l);for(var i=l.firstChild;i;){var c=i.nextSibling,s=i.nodeName;i[ra]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=c}}else l==="body"&&Za(t.ownerDocument.body);l=a}while(l);Wn(e)}function g0(t,e){var l=t;t=0;do{var n=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),n&&n.nodeType===8)if(l=n.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=n}while(l)}function Io(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Io(l),lc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Ag(t,e,l,n){for(;t.nodeType===1;){var a=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[ra])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Be(t.nextSibling),t===null)break}return null}function Eg(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Be(t.nextSibling),t===null))return null;return t}function m0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Be(t.nextSibling),t===null))return null;return t}function Po(t){return t.data==="$?"||t.data==="$~"}function tr(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Cg(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var n=function(){e(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Be(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var er=null;function b0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Be(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function x0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function y0(t,e,l){switch(e=pu(l),t){case"html":if(t=e.documentElement,!t)throw Error(f(452));return t;case"head":if(t=e.head,!t)throw Error(f(453));return t;case"body":if(t=e.body,!t)throw Error(f(454));return t;default:throw Error(f(451))}}function Za(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);lc(t)}var He=new Map,v0=new Set;function hu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var dl=E.d;E.d={f:Og,r:Mg,D:Dg,C:_g,L:Ng,m:wg,X:Ug,S:Rg,M:Bg};function Og(){var t=dl.f(),e=iu();return t||e}function Mg(t){var e=mn(t);e!==null&&e.tag===5&&e.type==="form"?Hs(e):dl.r(t)}var kn=typeof document>"u"?null:document;function S0(t,e,l){var n=kn;if(n&&typeof e=="string"&&e){var a=Me(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof l=="string"&&(a+='[crossorigin="'+l+'"]'),v0.has(a)||(v0.add(a),t={rel:t,crossOrigin:l,href:e},n.querySelector(a)===null&&(e=n.createElement("link"),ae(e,"link",t),Wt(e),n.head.appendChild(e)))}}function Dg(t){dl.D(t),S0("dns-prefetch",t,null)}function _g(t,e){dl.C(t,e),S0("preconnect",t,e)}function Ng(t,e,l){dl.L(t,e,l);var n=kn;if(n&&t&&e){var a='link[rel="preload"][as="'+Me(e)+'"]';e==="image"&&l&&l.imageSrcSet?(a+='[imagesrcset="'+Me(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(a+='[imagesizes="'+Me(l.imageSizes)+'"]')):a+='[href="'+Me(t)+'"]';var i=a;switch(e){case"style":i=Jn(t);break;case"script":i=Fn(t)}He.has(i)||(t=U({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),He.set(i,t),n.querySelector(a)!==null||e==="style"&&n.querySelector(Va(i))||e==="script"&&n.querySelector(Ka(i))||(e=n.createElement("link"),ae(e,"link",t),Wt(e),n.head.appendChild(e)))}}function wg(t,e){dl.m(t,e);var l=kn;if(l&&t){var n=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Me(n)+'"][href="'+Me(t)+'"]',i=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Fn(t)}if(!He.has(i)&&(t=U({rel:"modulepreload",href:t},e),He.set(i,t),l.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ka(i)))return}n=l.createElement("link"),ae(n,"link",t),Wt(n),l.head.appendChild(n)}}}function Rg(t,e,l){dl.S(t,e,l);var n=kn;if(n&&t){var a=bn(n).hoistableStyles,i=Jn(t);e=e||"default";var c=a.get(i);if(!c){var s={loading:0,preload:null};if(c=n.querySelector(Va(i)))s.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":e},l),(l=He.get(i))&&lr(t,l);var m=c=n.createElement("link");Wt(m),ae(m,"link",t),m._p=new Promise(function(A,R){m.onload=A,m.onerror=R}),m.addEventListener("load",function(){s.loading|=1}),m.addEventListener("error",function(){s.loading|=2}),s.loading|=4,gu(c,e,n)}c={type:"stylesheet",instance:c,count:1,state:s},a.set(i,c)}}}function Ug(t,e){dl.X(t,e);var l=kn;if(l&&t){var n=bn(l).hoistableScripts,a=Fn(t),i=n.get(a);i||(i=l.querySelector(Ka(a)),i||(t=U({src:t,async:!0},e),(e=He.get(a))&&nr(t,e),i=l.createElement("script"),Wt(i),ae(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function Bg(t,e){dl.M(t,e);var l=kn;if(l&&t){var n=bn(l).hoistableScripts,a=Fn(t),i=n.get(a);i||(i=l.querySelector(Ka(a)),i||(t=U({src:t,async:!0,type:"module"},e),(e=He.get(a))&&nr(t,e),i=l.createElement("script"),Wt(i),ae(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function j0(t,e,l,n){var a=(a=ct.current)?hu(a):null;if(!a)throw Error(f(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Jn(l.href),l=bn(a).hoistableStyles,n=l.get(e),n||(n={type:"style",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Jn(l.href);var i=bn(a).hoistableStyles,c=i.get(t);if(c||(a=a.ownerDocument||a,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,c),(i=a.querySelector(Va(t)))&&!i._p&&(c.instance=i,c.state.loading=5),He.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},He.set(t,l),i||Hg(a,t,l,c.state))),e&&n===null)throw Error(f(528,""));return c}if(e&&n!==null)throw Error(f(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Fn(l),l=bn(a).hoistableScripts,n=l.get(e),n||(n={type:"script",instance:null,count:0,state:null},l.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,t))}}function Jn(t){return'href="'+Me(t)+'"'}function Va(t){return'link[rel="stylesheet"]['+t+"]"}function z0(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function Hg(t,e,l,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),ae(e,"link",l),Wt(e),t.head.appendChild(e))}function Fn(t){return'[src="'+Me(t)+'"]'}function Ka(t){return"script[async]"+t}function T0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Me(l.href)+'"]');if(n)return e.instance=n,Wt(n),n;var a=U({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Wt(n),ae(n,"style",a),gu(n,l.precedence,t),e.instance=n;case"stylesheet":a=Jn(l.href);var i=t.querySelector(Va(a));if(i)return e.state.loading|=4,e.instance=i,Wt(i),i;n=z0(l),(a=He.get(a))&&lr(n,a),i=(t.ownerDocument||t).createElement("link"),Wt(i);var c=i;return c._p=new Promise(function(s,m){c.onload=s,c.onerror=m}),ae(i,"link",n),e.state.loading|=4,gu(i,l.precedence,t),e.instance=i;case"script":return i=Fn(l.src),(a=t.querySelector(Ka(i)))?(e.instance=a,Wt(a),a):(n=l,(a=He.get(i))&&(n=U({},l),nr(n,a)),t=t.ownerDocument||t,a=t.createElement("script"),Wt(a),ae(a,"link",n),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(f(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,gu(n,l.precedence,t));return e.instance}function gu(t,e,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,i=a,c=0;c<n.length;c++){var s=n[c];if(s.dataset.precedence===e)i=s;else if(i!==a)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function lr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function nr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var mu=null;function A0(t,e,l){if(mu===null){var n=new Map,a=mu=new Map;a.set(l,n)}else a=mu,n=a.get(l),n||(n=new Map,a.set(l,n));if(n.has(t))return n;for(n.set(t,null),l=l.getElementsByTagName(t),a=0;a<l.length;a++){var i=l[a];if(!(i[ra]||i[te]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(e)||"";c=t+c;var s=n.get(c);s?s.push(i):n.set(c,[i])}}return n}function E0(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Yg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function C0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qg(t,e,l,n){if(l.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var a=Jn(n.href),i=e.querySelector(Va(a));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=bu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Wt(i);return}i=e.ownerDocument||e,n=z0(n),(a=He.get(a))&&lr(n,a),i=i.createElement("link"),Wt(i);var c=i;c._p=new Promise(function(s,m){c.onload=s,c.onerror=m}),ae(i,"link",n),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=bu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var ar=0;function Gg(t,e){return t.stylesheets&&t.count===0&&yu(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var n=setTimeout(function(){if(t.stylesheets&&yu(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&ar===0&&(ar=62500*vg());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&yu(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>ar?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function bu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var xu=null;function yu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,xu=new Map,e.forEach(Lg,t),xu=null,bu.call(t))}function Lg(t,e){if(!(e.state.loading&4)){var l=xu.get(t);if(l)var n=l.get(null);else{l=new Map,xu.set(t,l);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var c=a[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),n=c)}n&&l.set(null,n)}a=e.instance,c=a.getAttribute("data-precedence"),i=l.get(c)||n,i===n&&l.set(null,a),l.set(c,a),this.count++,n=bu.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),i?i.parentNode.insertBefore(a,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var ka={$$typeof:st,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function $g(t,e,l,n,a,i,c,s,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Iu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.hiddenUpdates=Iu(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function O0(t,e,l,n,a,i,c,s,m,A,R,Y){return t=new $g(t,e,l,c,m,A,R,Y,s),e=1,i===!0&&(e|=24),i=je(3,null,null,e),t.current=i,i.stateNode=t,e=Bc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:n,isDehydrated:l,cache:e},Gc(i),t}function M0(t){return t?(t=Cn,t):Cn}function D0(t,e,l,n,a,i){a=M0(a),n.context===null?n.context=a:n.pendingContext=a,n=jl(e),n.payload={element:l},i=i===void 0?null:i,i!==null&&(n.callback=i),l=zl(t,n,e),l!==null&&(me(l,t,e),Ea(l,t,e))}function _0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function ir(t,e){_0(t,e),(t=t.alternate)&&_0(t,e)}function N0(t){if(t.tag===13||t.tag===31){var e=kl(t,67108864);e!==null&&me(e,t,67108864),ir(t,67108864)}}function w0(t){if(t.tag===13||t.tag===31){var e=Ce();e=Pu(e);var l=kl(t,e);l!==null&&me(l,t,e),ir(t,e)}}var vu=!0;function Xg(t,e,l,n){var a=x.T;x.T=null;var i=E.p;try{E.p=2,ur(t,e,l,n)}finally{E.p=i,x.T=a}}function Qg(t,e,l,n){var a=x.T;x.T=null;var i=E.p;try{E.p=8,ur(t,e,l,n)}finally{E.p=i,x.T=a}}function ur(t,e,l,n){if(vu){var a=cr(n);if(a===null)Vo(t,e,n,Su,l),U0(t,n);else if(Vg(a,t,e,l,n))n.stopPropagation();else if(U0(t,n),e&4&&-1<Zg.indexOf(t)){for(;a!==null;){var i=mn(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Xl(i.pendingLanes);if(c!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var m=1<<31-ve(c);s.entanglements[1]|=m,c&=~m}ke(i),(Ct&6)===0&&(nu=xe()+500,$a(0))}}break;case 31:case 13:s=kl(i,2),s!==null&&me(s,i,2),iu(),ir(i,2)}if(i=cr(n),i===null&&Vo(t,e,n,Su,l),i===a)break;a=i}a!==null&&n.stopPropagation()}else Vo(t,e,n,null,l)}}function cr(t){return t=oc(t),or(t)}var Su=null;function or(t){if(Su=null,t=gn(t),t!==null){var e=j(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=D(e),t!==null)return t;t=null}else if(l===31){if(t=w(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Su=t,null}function R0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dh()){case Lr:return 2;case $r:return 8;case fi:case _h:return 32;case Xr:return 268435456;default:return 32}default:return 32}}var rr=!1,Rl=null,Ul=null,Bl=null,Ja=new Map,Fa=new Map,Hl=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U0(t,e){switch(t){case"focusin":case"focusout":Rl=null;break;case"dragenter":case"dragleave":Ul=null;break;case"mouseover":case"mouseout":Bl=null;break;case"pointerover":case"pointerout":Ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(e.pointerId)}}function Wa(t,e,l,n,a,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},e!==null&&(e=mn(e),e!==null&&N0(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Vg(t,e,l,n,a){switch(e){case"focusin":return Rl=Wa(Rl,t,e,l,n,a),!0;case"dragenter":return Ul=Wa(Ul,t,e,l,n,a),!0;case"mouseover":return Bl=Wa(Bl,t,e,l,n,a),!0;case"pointerover":var i=a.pointerId;return Ja.set(i,Wa(Ja.get(i)||null,t,e,l,n,a)),!0;case"gotpointercapture":return i=a.pointerId,Fa.set(i,Wa(Fa.get(i)||null,t,e,l,n,a)),!0}return!1}function B0(t){var e=gn(t.target);if(e!==null){var l=j(e);if(l!==null){if(e=l.tag,e===13){if(e=D(l),e!==null){t.blockedOn=e,Jr(t.priority,function(){w0(l)});return}}else if(e===31){if(e=w(l),e!==null){t.blockedOn=e,Jr(t.priority,function(){w0(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ju(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=cr(t.nativeEvent);if(l===null){l=t.nativeEvent;var n=new l.constructor(l.type,l);cc=n,l.target.dispatchEvent(n),cc=null}else return e=mn(l),e!==null&&N0(e),t.blockedOn=l,!1;e.shift()}return!0}function H0(t,e,l){ju(t)&&l.delete(e)}function Kg(){rr=!1,Rl!==null&&ju(Rl)&&(Rl=null),Ul!==null&&ju(Ul)&&(Ul=null),Bl!==null&&ju(Bl)&&(Bl=null),Ja.forEach(H0),Fa.forEach(H0)}function zu(t,e){t.blockedOn===e&&(t.blockedOn=null,rr||(rr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Kg)))}var Tu=null;function Y0(t){Tu!==t&&(Tu=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Tu===t&&(Tu=null);for(var e=0;e<t.length;e+=3){var l=t[e],n=t[e+1],a=t[e+2];if(typeof n!="function"){if(or(n||l)===null)continue;break}var i=mn(l);i!==null&&(t.splice(e,3),e-=3,uo(i,{pending:!0,data:a,method:l.method,action:n},n,a))}}))}function Wn(t){function e(m){return zu(m,t)}Rl!==null&&zu(Rl,t),Ul!==null&&zu(Ul,t),Bl!==null&&zu(Bl,t),Ja.forEach(e),Fa.forEach(e);for(var l=0;l<Hl.length;l++){var n=Hl[l];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Hl.length&&(l=Hl[0],l.blockedOn===null);)B0(l),l.blockedOn===null&&Hl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var a=l[n],i=l[n+1],c=a[fe]||null;if(typeof i=="function")c||Y0(l);else if(c){var s=null;if(i&&i.hasAttribute("formAction")){if(a=i,c=i[fe]||null)s=c.formAction;else if(or(a)!==null)continue}else s=c.action;typeof s=="function"?l[n+1]=s:(l.splice(n,3),n-=3),Y0(l)}}}function q0(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return a=c})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),n||setTimeout(l,20)}function l(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function fr(t){this._internalRoot=t}Au.prototype.render=fr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(f(409));var l=e.current,n=Ce();D0(l,n,t,e,null,null)},Au.prototype.unmount=fr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;D0(t.current,2,null,t,null,null),iu(),e[hn]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=kr();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Hl.length&&e!==0&&e<Hl[l].priority;l++);Hl.splice(l,0,t),l===0&&B0(t)}};var G0=r.version;if(G0!=="19.2.4")throw Error(f(527,G0,"19.2.4"));E.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(f(188)):(t=Object.keys(t).join(","),Error(f(268,t)));return t=y(e),t=t!==null?L(t):null,t=t===null?null:t.stateNode,t};var kg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{ua=Eu.inject(kg),ye=Eu}catch{}}return Pa.createRoot=function(t,e){if(!h(t))throw Error(f(299));var l=!1,n="",a=Ks,i=ks,c=Js;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=O0(t,1,!1,null,null,l,n,null,a,i,c,q0),t[hn]=e.current,Zo(t),new fr(e)},Pa.hydrateRoot=function(t,e,l){if(!h(t))throw Error(f(299));var n=!1,a="",i=Ks,c=ks,s=Js,m=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(m=l.formState)),e=O0(t,1,!0,e,l??null,n,a,m,i,c,s,q0),e.context=M0(null),l=e.current,n=Ce(),n=Pu(n),a=jl(n),a.callback=null,zl(l,a,n),l=n,e.current.lanes=l,oa(e,l),ke(e),t[hn]=e.current,Zo(t),new Au(e)},Pa.version="19.2.4",Pa}var F0;function im(){if(F0)return pr.exports;F0=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(r){console.error(r)}}return u(),pr.exports=am(),pr.exports}var um=im(),Yt="-ms-",ii="-moz-",Ot="-webkit-",Ip="comm",Gu="rule",Ur="decl",cm="@import",om="@namespace",Pp="@keyframes",rm="@layer",th=Math.abs,Br=String.fromCharCode,Er=Object.assign;function fm(u,r){return Ft(u,0)^45?(((r<<2^Ft(u,0))<<2^Ft(u,1))<<2^Ft(u,2))<<2^Ft(u,3):0}function eh(u){return u.trim()}function pl(u,r){return(u=r.exec(u))?u[0]:u}function mt(u,r,d){return u.replace(r,d)}function wu(u,r,d){return u.indexOf(r,d)}function Ft(u,r){return u.charCodeAt(r)|0}function pn(u,r,d){return u.slice(r,d)}function $e(u){return u.length}function lh(u){return u.length}function ni(u,r){return r.push(u),u}function sm(u,r){return u.map(r).join("")}function W0(u,r){return u.filter(function(d){return!pl(d,r)})}var Lu=1,ea=1,nh=0,Ye=0,kt=0,aa="";function $u(u,r,d,f,h,j,D,w){return{value:u,root:r,parent:d,type:f,props:h,children:j,line:Lu,column:ea,length:D,return:"",siblings:w}}function ql(u,r){return Er($u("",null,null,"",null,null,0,u.siblings),u,{length:-u.length},r)}function In(u){for(;u.root;)u=ql(u.root,{children:[u]});ni(u,u.siblings)}function dm(){return kt}function pm(){return kt=Ye>0?Ft(aa,--Ye):0,ea--,kt===10&&(ea=1,Lu--),kt}function Qe(){return kt=Ye<nh?Ft(aa,Ye++):0,ea++,kt===10&&(ea=1,Lu++),kt}function Gl(){return Ft(aa,Ye)}function Ru(){return Ye}function Xu(u,r){return pn(aa,u,r)}function ci(u){switch(u){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hm(u){return Lu=ea=1,nh=$e(aa=u),Ye=0,[]}function gm(u){return aa="",u}function br(u){return eh(Xu(Ye-1,Cr(u===91?u+2:u===40?u+1:u)))}function mm(u){for(;(kt=Gl())&&kt<33;)Qe();return ci(u)>2||ci(kt)>3?"":" "}function bm(u,r){for(;--r&&Qe()&&!(kt<48||kt>102||kt>57&&kt<65||kt>70&&kt<97););return Xu(u,Ru()+(r<6&&Gl()==32&&Qe()==32))}function Cr(u){for(;Qe();)switch(kt){case u:return Ye;case 34:case 39:u!==34&&u!==39&&Cr(kt);break;case 40:u===41&&Cr(u);break;case 92:Qe();break}return Ye}function xm(u,r){for(;Qe()&&u+kt!==57;)if(u+kt===84&&Gl()===47)break;return"/*"+Xu(r,Ye-1)+"*"+Br(u===47?u:Qe())}function ym(u){for(;!ci(Gl());)Qe();return Xu(u,Ye)}function vm(u){return gm(Uu("",null,null,null,[""],u=hm(u),0,[0],u))}function Uu(u,r,d,f,h,j,D,w,S){for(var y=0,L=0,U=D,H=0,J=0,q=0,I=1,at=1,it=1,Z=0,st="",ot=h,tt=j,rt=f,C=st;at;)switch(q=Z,Z=Qe()){case 40:if(q!=108&&Ft(C,U-1)==58){wu(C+=mt(br(Z),"&","&\f"),"&\f",th(y?w[y-1]:0))!=-1&&(it=-1);break}case 34:case 39:case 91:C+=br(Z);break;case 9:case 10:case 13:case 32:C+=mm(q);break;case 92:C+=bm(Ru()-1,7);continue;case 47:switch(Gl()){case 42:case 47:ni(Sm(xm(Qe(),Ru()),r,d,S),S),(ci(q||1)==5||ci(Gl()||1)==5)&&$e(C)&&pn(C,-1,void 0)!==" "&&(C+=" ");break;default:C+="/"}break;case 123*I:w[y++]=$e(C)*it;case 125*I:case 59:case 0:switch(Z){case 0:case 125:at=0;case 59+L:it==-1&&(C=mt(C,/\f/g,"")),J>0&&($e(C)-U||I===0&&q===47)&&ni(J>32?P0(C+";",f,d,U-1,S):P0(mt(C," ","")+";",f,d,U-2,S),S);break;case 59:C+=";";default:if(ni(rt=I0(C,r,d,y,L,h,w,st,ot=[],tt=[],U,j),j),Z===123)if(L===0)Uu(C,r,rt,rt,ot,j,U,w,tt);else{switch(H){case 99:if(Ft(C,3)===110)break;case 108:if(Ft(C,2)===97)break;default:L=0;case 100:case 109:case 115:}L?Uu(u,rt,rt,f&&ni(I0(u,rt,rt,0,0,h,w,st,h,ot=[],U,tt),tt),h,tt,U,w,f?ot:tt):Uu(C,rt,rt,rt,[""],tt,0,w,tt)}}y=L=J=0,I=it=1,st=C="",U=D;break;case 58:U=1+$e(C),J=q;default:if(I<1){if(Z==123)--I;else if(Z==125&&I++==0&&pm()==125)continue}switch(C+=Br(Z),Z*I){case 38:it=L>0?1:(C+="\f",-1);break;case 44:w[y++]=($e(C)-1)*it,it=1;break;case 64:Gl()===45&&(C+=br(Qe())),H=Gl(),L=U=$e(st=C+=ym(Ru())),Z++;break;case 45:q===45&&$e(C)==2&&(I=0)}}return j}function I0(u,r,d,f,h,j,D,w,S,y,L,U){for(var H=h-1,J=h===0?j:[""],q=lh(J),I=0,at=0,it=0;I<f;++I)for(var Z=0,st=pn(u,H+1,H=th(at=D[I])),ot=u;Z<q;++Z)(ot=eh(at>0?J[Z]+" "+st:mt(st,/&\f/g,J[Z])))&&(S[it++]=ot);return $u(u,r,d,h===0?Gu:w,S,y,L,U)}function Sm(u,r,d,f){return $u(u,r,d,Ip,Br(dm()),pn(u,2,-2),0,f)}function P0(u,r,d,f,h){return $u(u,r,d,Ur,pn(u,0,f),pn(u,f+1,-1),f,h)}function ah(u,r,d){switch(fm(u,r)){case 5103:return Ot+"print-"+u+u;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ot+u+u;case 4855:return Ot+u.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+u;case 4789:return ii+u+u;case 5349:case 4246:case 4810:case 6968:case 2756:return Ot+u+ii+u+Yt+u+u;case 5936:switch(Ft(u,r+11)){case 114:return Ot+u+Yt+mt(u,/[svh]\w+-[tblr]{2}/,"tb")+u;case 108:return Ot+u+Yt+mt(u,/[svh]\w+-[tblr]{2}/,"tb-rl")+u;case 45:return Ot+u+Yt+mt(u,/[svh]\w+-[tblr]{2}/,"lr")+u}case 6828:case 4268:case 2903:return Ot+u+Yt+u+u;case 6165:return Ot+u+Yt+"flex-"+u+u;case 5187:return Ot+u+mt(u,/(\w+).+(:[^]+)/,Ot+"box-$1$2"+Yt+"flex-$1$2")+u;case 5443:return Ot+u+Yt+"flex-item-"+mt(u,/flex-|-self/g,"")+(pl(u,/flex-|baseline/)?"":Yt+"grid-row-"+mt(u,/flex-|-self/g,""))+u;case 4675:return Ot+u+Yt+"flex-line-pack"+mt(u,/align-content|flex-|-self/g,"")+u;case 5548:return Ot+u+Yt+mt(u,"shrink","negative")+u;case 5292:return Ot+u+Yt+mt(u,"basis","preferred-size")+u;case 6060:return Ot+"box-"+mt(u,"-grow","")+Ot+u+Yt+mt(u,"grow","positive")+u;case 4554:return Ot+mt(u,/([^-])(transform)/g,"$1"+Ot+"$2")+u;case 6187:return mt(mt(mt(u,/(zoom-|grab)/,Ot+"$1"),/(image-set)/,Ot+"$1"),u,"")+u;case 5495:case 3959:return mt(u,/(image-set\([^]*)/,Ot+"$1$`$1");case 4968:return mt(mt(u,/(.+:)(flex-)?(.*)/,Ot+"box-pack:$3"+Yt+"flex-pack:$3"),/space-between/,"justify")+Ot+u+u;case 4200:if(!pl(u,/flex-|baseline/))return Yt+"grid-column-align"+pn(u,r)+u;break;case 2592:case 3360:return Yt+mt(u,"template-","")+u;case 4384:case 3616:return d&&d.some(function(f,h){return r=h,pl(f.props,/grid-\w+-end/)})?~wu(u+(d=d[r].value),"span",0)?u:Yt+mt(u,"-start","")+u+Yt+"grid-row-span:"+(~wu(d,"span",0)?pl(d,/\d+/):+pl(d,/\d+/)-+pl(u,/\d+/))+";":Yt+mt(u,"-start","")+u;case 4896:case 4128:return d&&d.some(function(f){return pl(f.props,/grid-\w+-start/)})?u:Yt+mt(mt(u,"-end","-span"),"span ","")+u;case 4095:case 3583:case 4068:case 2532:return mt(u,/(.+)-inline(.+)/,Ot+"$1$2")+u;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($e(u)-1-r>6)switch(Ft(u,r+1)){case 109:if(Ft(u,r+4)!==45)break;case 102:return mt(u,/(.+:)(.+)-([^]+)/,"$1"+Ot+"$2-$3$1"+ii+(Ft(u,r+3)==108?"$3":"$2-$3"))+u;case 115:return~wu(u,"stretch",0)?ah(mt(u,"stretch","fill-available"),r,d)+u:u}break;case 5152:case 5920:return mt(u,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(f,h,j,D,w,S,y){return Yt+h+":"+j+y+(D?Yt+h+"-span:"+(w?S:+S-+j)+y:"")+u});case 4949:if(Ft(u,r+6)===121)return mt(u,":",":"+Ot)+u;break;case 6444:switch(Ft(u,Ft(u,14)===45?18:11)){case 120:return mt(u,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ot+(Ft(u,14)===45?"inline-":"")+"box$3$1"+Ot+"$2$3$1"+Yt+"$2box$3")+u;case 100:return mt(u,":",":"+Yt)+u}break;case 5719:case 2647:case 2135:case 3927:case 2391:return mt(u,"scroll-","scroll-snap-")+u}return u}function Yu(u,r){for(var d="",f=0;f<u.length;f++)d+=r(u[f],f,u,r)||"";return d}function jm(u,r,d,f){switch(u.type){case rm:if(u.children.length)break;case cm:case om:case Ur:return u.return=u.return||u.value;case Ip:return"";case Pp:return u.return=u.value+"{"+Yu(u.children,f)+"}";case Gu:if(!$e(u.value=u.props.join(",")))return""}return $e(d=Yu(u.children,f))?u.return=u.value+"{"+d+"}":""}function zm(u){var r=lh(u);return function(d,f,h,j){for(var D="",w=0;w<r;w++)D+=u[w](d,f,h,j)||"";return D}}function Tm(u){return function(r){r.root||(r=r.return)&&u(r)}}function Am(u,r,d,f){if(u.length>-1&&!u.return)switch(u.type){case Ur:u.return=ah(u.value,u.length,d);return;case Pp:return Yu([ql(u,{value:mt(u.value,"@","@"+Ot)})],f);case Gu:if(u.length)return sm(d=u.props,function(h){switch(pl(h,f=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":In(ql(u,{props:[mt(h,/:(read-\w+)/,":"+ii+"$1")]})),In(ql(u,{props:[h]})),Er(u,{props:W0(d,f)});break;case"::placeholder":In(ql(u,{props:[mt(h,/:(plac\w+)/,":"+Ot+"input-$1")]})),In(ql(u,{props:[mt(h,/:(plac\w+)/,":"+ii+"$1")]})),In(ql(u,{props:[mt(h,/:(plac\w+)/,Yt+"input-$1")]})),In(ql(u,{props:[h]})),Er(u,{props:W0(d,f)});break}return""})}}var ta={},xr,yr;const la=typeof process<"u"&&ta!==void 0&&(ta.REACT_APP_SC_ATTR||ta.SC_ATTR)||"data-styled",ih="active",uh="data-styled-version",Qu="6.4.1",Hr=`/*!sc*/
`,ui=typeof window<"u"&&typeof document<"u";function tp(u){if(typeof process<"u"&&ta!==void 0){const r=ta[u];if(r!==void 0&&r!=="")return r!=="false"}}const Em=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(yr=(xr=tp("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&xr!==void 0?xr:tp("SC_DISABLE_SPEEDY"))!==null&&yr!==void 0?yr:typeof process>"u"||ta===void 0),Cm="sc-keyframes-";function Zu(u,...r){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${u} for more information.${r.length>0?` Args: ${r.join(", ")}`:""}`)}let Bu=new Map,qu=new Map,Hu=1;const Cu=u=>{if(Bu.has(u))return Bu.get(u);for(;qu.has(Hu);)Hu++;const r=Hu++;return Bu.set(u,r),qu.set(r,u),r},Om=u=>qu.get(u),Mm=(u,r)=>{Hu=r+1,Bu.set(u,r),qu.set(r,u)},Yr=Object.freeze([]),na=Object.freeze({});function Dm(u,r,d=na){return u.theme!==d.theme&&u.theme||r||d.theme}const _m=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nm=/(^-|-$)/g;function ch(u){return u.replace(_m,"-").replace(Nm,"")}const wm=/(a)(d)/gi,ep=u=>String.fromCharCode(u+(u>25?39:97));function oh(u){let r,d="";for(r=Math.abs(u);r>52;r=r/52|0)d=ep(r%52)+d;return(ep(r%52)+d).replace(wm,"$1-$2")}const Or=5381,sn=(u,r)=>{let d=r.length;for(;d;)u=33*u^r.charCodeAt(--d);return u},rh=u=>sn(Or,u);function Rm(u){return oh(rh(u)>>>0)}function Um(u){return u.displayName||u.name||"Component"}function Mr(u){return typeof u=="string"&&!0}function Bm(u){return Mr(u)?`styled.${u}`:`Styled(${Um(u)})`}const fh=Symbol.for("react.memo"),Hm=Symbol.for("react.forward_ref"),Ym={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},qm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gm={[Hm]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[fh]:sh};function lp(u){return("type"in(r=u)&&r.type.$$typeof)===fh?sh:"$$typeof"in u?Gm[u.$$typeof]:Ym;var r}const Lm=Object.defineProperty,$m=Object.getOwnPropertyNames,Xm=Object.getOwnPropertySymbols,Qm=Object.getOwnPropertyDescriptor,Zm=Object.getPrototypeOf,Vm=Object.prototype;function dh(u,r,d){if(typeof r!="string"){const f=Zm(r);f&&f!==Vm&&dh(u,f,d);const h=$m(r).concat(Xm(r)),j=lp(u),D=lp(r);for(let w=0;w<h.length;++w){const S=h[w];if(!(S in qm||d&&d[S]||D&&S in D||j&&S in j)){const y=Qm(r,S);try{Lm(u,S,y)}catch{}}}}return u}function Vu(u){return typeof u=="function"}function ph(u){return typeof u=="object"&&"styledComponentId"in u}function ai(u,r){return u&&r?u+" "+r:u||r||""}function np(u,r){return u.join("")}function oi(u){return u!==null&&typeof u=="object"&&u.constructor.name===Object.name&&!("props"in u&&u.$$typeof)}function Dr(u,r,d=!1){if(!d&&!oi(u)&&!Array.isArray(u))return r;if(Array.isArray(r))for(let f=0;f<r.length;f++)u[f]=Dr(u[f],r[f]);else if(oi(r))for(const f in r)u[f]=Dr(u[f],r[f]);return u}function hh(u,r){Object.defineProperty(u,"toString",{value:r})}const Km=class{constructor(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u,this._cGroup=0,this._cIndex=0}indexOfGroup(u){if(u===this._cGroup)return this._cIndex;let r=this._cIndex;if(u>this._cGroup)for(let d=this._cGroup;d<u;d++)r+=this.groupSizes[d];else for(let d=this._cGroup-1;d>=u;d--)r-=this.groupSizes[d];return this._cGroup=u,this._cIndex=r,r}insertRules(u,r){if(u>=this.groupSizes.length){const h=this.groupSizes,j=h.length;let D=j;for(;u>=D;)if(D<<=1,D<0)throw Zu(16,`${u}`);this.groupSizes=new Uint32Array(D),this.groupSizes.set(h),this.length=D;for(let w=j;w<D;w++)this.groupSizes[w]=0}let d=this.indexOfGroup(u+1),f=0;for(let h=0,j=r.length;h<j;h++)this.tag.insertRule(d,r[h])&&(this.groupSizes[u]++,d++,f++);f>0&&this._cGroup>u&&(this._cIndex+=f)}clearGroup(u){if(u<this.length){const r=this.groupSizes[u],d=this.indexOfGroup(u),f=d+r;this.groupSizes[u]=0;for(let h=d;h<f;h++)this.tag.deleteRule(d);r>0&&this._cGroup>u&&(this._cIndex-=r)}}getGroup(u){let r="";if(u>=this.length||this.groupSizes[u]===0)return r;const d=this.groupSizes[u],f=this.indexOfGroup(u),h=f+d;for(let j=f;j<h;j++)r+=this.tag.getRule(j)+Hr;return r}},km=`style[${la}][${uh}="${Qu}"]`,Jm=new RegExp(`^${la}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ap=u=>typeof ShadowRoot<"u"&&u instanceof ShadowRoot||"host"in u&&u.nodeType===11,_r=u=>{if(!u)return document;if(ap(u))return u;if("getRootNode"in u){const r=u.getRootNode();if(ap(r))return r}return document},Fm=(u,r,d)=>{const f=d.split(",");let h;for(let j=0,D=f.length;j<D;j++)(h=f[j])&&u.registerName(r,h)},Wm=(u,r)=>{var d;const f=((d=r.textContent)!==null&&d!==void 0?d:"").split(Hr),h=[];for(let j=0,D=f.length;j<D;j++){const w=f[j].trim();if(!w)continue;const S=w.match(Jm);if(S){const y=0|parseInt(S[1],10),L=S[2];y!==0&&(Mm(L,y),Fm(u,L,S[3]),u.getTag().insertRules(y,h)),h.length=0}else h.push(w)}},vr=u=>{const r=_r(u.options.target).querySelectorAll(km);for(let d=0,f=r.length;d<f;d++){const h=r[d];h&&h.getAttribute(la)!==ih&&(Wm(u,h),h.parentNode&&h.parentNode.removeChild(h))}};let ti=!1;function Im(){if(ti!==!1)return ti;if(typeof document<"u"){const u=document.head.querySelector('meta[property="csp-nonce"]');if(u)return ti=u.nonce||u.getAttribute("content")||void 0;const r=document.head.querySelector('meta[name="sc-nonce"]');if(r)return ti=r.getAttribute("content")||void 0}return ti=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const gh=(u,r)=>{const d=document.head,f=u||d,h=document.createElement("style"),j=(S=>{const y=Array.from(S.querySelectorAll(`style[${la}]`));return y[y.length-1]})(f),D=j!==void 0?j.nextSibling:null;h.setAttribute(la,ih),h.setAttribute(uh,Qu);const w=r||Im();return w&&h.setAttribute("nonce",w),f.insertBefore(h,D),h},Pm=class{constructor(u,r){this.element=gh(u,r),this.element.appendChild(document.createTextNode("")),this.sheet=(d=>{var f;if(d.sheet)return d.sheet;const h=(f=d.getRootNode().styleSheets)!==null&&f!==void 0?f:document.styleSheets;for(let j=0,D=h.length;j<D;j++){const w=h[j];if(w.ownerNode===d)return w}throw Zu(17)})(this.element),this.length=0}insertRule(u,r){try{return this.sheet.insertRule(r,u),this.length++,!0}catch{return!1}}deleteRule(u){this.sheet.deleteRule(u),this.length--}getRule(u){const r=this.sheet.cssRules[u];return r&&r.cssText?r.cssText:""}},tb=class{constructor(u,r){this.element=gh(u,r),this.nodes=this.element.childNodes,this.length=0}insertRule(u,r){if(u<=this.length&&u>=0){const d=document.createTextNode(r);return this.element.insertBefore(d,this.nodes[u]||null),this.length++,!0}return!1}deleteRule(u){this.element.removeChild(this.nodes[u]),this.length--}getRule(u){return u<this.length?this.nodes[u].textContent:""}};let ip=ui;const eb={isServer:!ui,useCSSOMInjection:!Em};class Ku{static registerId(r){return Cu(r)}constructor(r=na,d={},f){this.options=Object.assign(Object.assign({},eb),r),this.gs=d,this.keyframeIds=new Set,this.names=new Map(f),this.server=!!r.isServer,!this.server&&ui&&ip&&(ip=!1,vr(this)),hh(this,()=>(h=>{const j=h.getTag(),{length:D}=j;let w="";for(let S=0;S<D;S++){const y=Om(S);if(y===void 0)continue;const L=h.names.get(y);if(L===void 0||!L.size)continue;const U=j.getGroup(S);if(U.length===0)continue;const H=la+".g"+S+'[id="'+y+'"]';let J="";for(const q of L)q.length>0&&(J+=q+",");w+=U+H+'{content:"'+J+'"}'+Hr}return w})(this))}rehydrate(){!this.server&&ui&&vr(this)}reconstructWithOptions(r,d=!0){const f=new Ku(Object.assign(Object.assign({},this.options),r),this.gs,d&&this.names||void 0);return f.keyframeIds=new Set(this.keyframeIds),!this.server&&ui&&r.target!==this.options.target&&_r(this.options.target)!==_r(r.target)&&vr(f),f}allocateGSInstance(r){return this.gs[r]=(this.gs[r]||0)+1}getTag(){return this.tag||(this.tag=(r=(({useCSSOMInjection:d,target:f,nonce:h})=>d?new Pm(f,h):new tb(f,h))(this.options),new Km(r)));var r}hasNameForId(r,d){var f,h;return(h=(f=this.names.get(r))===null||f===void 0?void 0:f.has(d))!==null&&h!==void 0&&h}registerName(r,d){Cu(r),r.startsWith(Cm)&&this.keyframeIds.add(r);const f=this.names.get(r);f?f.add(d):this.names.set(r,new Set([d]))}insertRules(r,d,f){this.registerName(r,d),this.getTag().insertRules(Cu(r),f)}clearNames(r){this.names.has(r)&&this.names.get(r).clear()}clearRules(r){this.getTag().clearGroup(Cu(r)),this.clearNames(r)}clearTag(){this.tag=void 0}}const mh=new WeakSet,lb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function nb(u,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||u in lb||u.startsWith("--")?String(r).trim():r+"px"}const fn=47;function up(u){if(u.charCodeAt(0)===45&&u.charCodeAt(1)===45)return u;let r="";for(let d=0;d<u.length;d++){const f=u.charCodeAt(d);r+=f>=65&&f<=90?"-"+String.fromCharCode(f+32):u[d]}return r.startsWith("ms-")?"-"+r:r}const ab=Symbol.for("sc-keyframes");function ib(u){return typeof u=="object"&&u!==null&&ab in u}function bh(u){return Vu(u)&&!(u.prototype&&u.prototype.isReactComponent)}const xh=u=>u==null||u===!1||u==="",ub=Symbol.for("react.client.reference");function cp(u){return u.$$typeof===ub}function yh(u,r){for(const d in u){const f=u[d];u.hasOwnProperty(d)&&!xh(f)&&(Array.isArray(f)&&mh.has(f)||Vu(f)?r.push(up(d)+":",f,";"):oi(f)?(r.push(d+" {"),yh(f,r),r.push("}")):r.push(up(d)+": "+nb(d,f)+";"))}}function dn(u,r,d,f,h=[]){if(xh(u))return h;const j=typeof u;if(j==="string")return h.push(u),h;if(j==="function"){if(cp(u))return h;if(bh(u)&&r){const D=u(r);return dn(D,r,d,f,h)}return h.push(u),h}if(Array.isArray(u)){for(let D=0;D<u.length;D++)dn(u[D],r,d,f,h);return h}return ph(u)?(h.push(`.${u.styledComponentId}`),h):ib(u)?(d?(u.inject(d,f),h.push(u.getName(f))):h.push(u),h):cp(u)?h:oi(u)?(yh(u,h),h):(h.push(u.toString()),h)}const cb=rh(Qu);class ob{constructor(r,d,f){this.rules=r,this.componentId=d,this.baseHash=sn(cb,d),this.baseStyle=f,Ku.registerId(d)}generateAndInjectStyles(r,d,f){let h=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,d,f):"";{let j="";for(let D=0;D<this.rules.length;D++){const w=this.rules[D];if(typeof w=="string")j+=w;else if(w)if(bh(w)){const S=w(r);typeof S=="string"?j+=S:S!=null&&S!==!1&&(j+=np(dn(S,r,d,f)))}else j+=np(dn(w,r,d,f))}if(j){this.dynamicNameCache||(this.dynamicNameCache=new Map);const D=f.hash?f.hash+j:j;let w=this.dynamicNameCache.get(D);if(!w){if(w=oh(sn(sn(this.baseHash,f.hash),j)>>>0),this.dynamicNameCache.size>=200){const S=this.dynamicNameCache.keys().next().value;S!==void 0&&this.dynamicNameCache.delete(S)}this.dynamicNameCache.set(D,w)}if(!d.hasNameForId(this.componentId,w)){const S=f(j,"."+w,void 0,this.componentId);d.insertRules(this.componentId,w,S)}h=ai(h,w)}}return h}}const rb=/&/g;function vh(u,r){let d=0;for(;--r>=0&&u.charCodeAt(r)===92;)d++;return!(1&~d)}function Sr(u){const r=u.length;let d="",f=0,h=0,j=0,D=!1,w=!1;for(let S=0;S<r;S++){const y=u.charCodeAt(S);if(j!==0||D||y!==fn||u.charCodeAt(S+1)!==42)if(D)y===42&&u.charCodeAt(S+1)===fn&&(D=!1,S++);else if(y!==34&&y!==39||vh(u,S)){if(j===0)if(y===123)h++;else if(y===125){if(h--,h<0){w=!0;let L=S+1;for(;L<r;){const U=u.charCodeAt(L);if(U===59||U===10)break;L++}L<r&&u.charCodeAt(L)===59&&L++,h=0,S=L-1,f=L;continue}h===0&&(d+=u.substring(f,S+1),f=S+1)}else y===59&&h===0&&(d+=u.substring(f,S+1),f=S+1)}else j===0?j=y:j===y&&(j=0);else D=!0,S++}return w||h!==0||j!==0?(f<r&&h===0&&j===0&&(d+=u.substring(f)),d):u}function Sh(u,r){const d=r+" ",f=","+d;for(let h=0;h<u.length;h++){const j=u[h];if(j.type==="rule"){j.value=(d+j.value).replaceAll(",",f);const D=j.props,w=[];for(let S=0;S<D.length;S++)w[S]=d+D[S];j.props=w}Array.isArray(j.children)&&j.type!=="@keyframes"&&Sh(j.children,r)}return u}function fb({options:u=na,plugins:r=Yr}=na){let d,f,h;const j=(H,J,q)=>q.startsWith(f)&&q.endsWith(f)&&q.replaceAll(f,"").length>0?`.${d}`:H,D=r.slice();D.push(H=>{H.type===Gu&&H.value.includes("&")&&(h||(h=new RegExp(`\\${f}\\b`,"g")),H.props[0]=H.props[0].replace(rb,f).replace(h,j))}),u.prefix&&D.push(Am),D.push(jm);let w=[];const S=zm(D.concat(Tm(H=>w.push(H)))),y=(H,J="",q="",I="&")=>{d=I,f=J,h=void 0;const at=(function(Z){const st=Z.indexOf("//")!==-1,ot=Z.indexOf("}")!==-1;if(!st&&!ot)return Z;if(!st)return Sr(Z);const tt=Z.length;let rt="",C=0,Q=0,lt=0,k=0,F=0,jt=!1;for(;Q<tt;){const bt=Z.charCodeAt(Q);if(bt!==34&&bt!==39||vh(Z,Q))if(lt===0)if(bt===fn&&Q+1<tt&&Z.charCodeAt(Q+1)===42){for(Q+=2;Q+1<tt&&(Z.charCodeAt(Q)!==42||Z.charCodeAt(Q+1)!==fn);)Q++;Q+=2}else if(bt!==40)if(bt!==41)if(k>0)Q++;else if(bt===42&&Q+1<tt&&Z.charCodeAt(Q+1)===fn)rt+=Z.substring(C,Q),Q+=2,C=Q,jt=!0;else if(bt===fn&&Q+1<tt&&Z.charCodeAt(Q+1)===fn){for(rt+=Z.substring(C,Q);Q<tt&&Z.charCodeAt(Q)!==10;)Q++;C=Q,jt=!0}else bt===123?F++:bt===125&&F--,Q++;else k>0&&k--,Q++;else k++,Q++;else Q++;else lt===0?lt=bt:lt===bt&&(lt=0),Q++}return jt?(C<tt&&(rt+=Z.substring(C)),F===0?rt:Sr(rt)):F===0?Z:Sr(Z)})(H);let it=vm(q||J?q+" "+J+" { "+at+" }":at);return u.namespace&&(it=Sh(it,u.namespace)),w=[],Yu(it,S),w},L=u;let U=Or;for(let H=0;H<r.length;H++)r[H].name||Zu(15),U=sn(U,r[H].name);return L?.namespace&&(U=sn(U,L.namespace)),L?.prefix&&(U=sn(U,"p")),y.hash=U!==Or?U.toString():"",y}const sb=new Ku,db=fb(),jh=Pn.createContext({shouldForwardProp:void 0,styleSheet:sb,stylis:db,stylisPlugins:void 0});jh.Consumer;function pb(){return Pn.useContext(jh)}const zh=Pn.createContext(void 0);zh.Consumer;const op=Object.prototype.hasOwnProperty,jr={};function hb(u,r){const d=typeof u!="string"?"sc":ch(u);jr[d]=(jr[d]||0)+1;const f=d+"-"+Rm(Qu+d+jr[d]);return r?r+"-"+f:f}function gb(u,r,d){const f=ph(u),h=u,j=!Mr(u),{attrs:D=Yr,componentId:w=hb(r.displayName,r.parentComponentId),displayName:S=Bm(u)}=r,y=r.displayName&&r.componentId?ch(r.displayName)+"-"+r.componentId:r.componentId||w,L=f&&h.attrs?h.attrs.concat(D).filter(Boolean):D;let{shouldForwardProp:U}=r;if(f&&h.shouldForwardProp){const I=h.shouldForwardProp;if(r.shouldForwardProp){const at=r.shouldForwardProp;U=(it,Z)=>I(it,Z)&&at(it,Z)}else U=I}const H=new ob(d,y,f?h.componentStyle:void 0);function J(I,at){return(function(it,Z,st){const{attrs:ot,componentStyle:tt,defaultProps:rt,foldedComponentIds:C,styledComponentId:Q,target:lt}=it,k=Pn.useContext(zh),F=pb(),jt=it.shouldForwardProp||F.shouldForwardProp,bt=Dm(Z,k,rt)||na;let X,W;{const V=Pn.useRef(null),M=V.current;if(M!==null&&M[1]===bt&&M[2]===F.styleSheet&&M[3]===F.stylis&&M[7]===tt&&(function(g,_,G){const z=g,K=_;let ct=0;for(const dt in K)if(op.call(K,dt)&&(ct++,z[dt]!==K[dt]))return!1;return ct===G})(M[0],Z,M[4]))X=M[5],W=M[6];else{X=(function(_,G,z){const K=Object.assign(Object.assign({},G),{className:void 0,theme:z}),ct=_.length>1;for(let dt=0;dt<_.length;dt++){const Rt=_[dt],Tt=Vu(Rt)?Rt(ct?Object.assign({},K):K):Rt;for(const ue in Tt)ue==="className"?K.className=ai(K.className,Tt[ue]):ue==="style"?K.style=Object.assign(Object.assign({},K.style),Tt[ue]):ue in G&&G[ue]===void 0||(K[ue]=Tt[ue])}return"className"in G&&typeof G.className=="string"&&(K.className=ai(K.className,G.className)),K})(ot,Z,bt),W=(function(_,G,z,K){return _.generateAndInjectStyles(G,z,K)})(tt,X,F.styleSheet,F.stylis);let g=0;for(const _ in Z)op.call(Z,_)&&g++;V.current=[Z,bt,F.styleSheet,F.stylis,g,X,W,tt]}}const x=X.as||lt,E=(function(V,M,g,_){const G={};for(const z in V)V[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&V.theme===g||(z==="forwardedAs"?G.as=V.forwardedAs:_&&!_(z,M)||(G[z]=V[z]));return G})(X,x,bt,jt);let $=ai(C,Q);return W&&($+=" "+W),X.className&&($+=" "+X.className),E[Mr(x)&&x.includes("-")?"class":"className"]=$,st&&(E.ref=st),nt.createElement(x,E)})(q,I,at)}J.displayName=S;let q=Pn.forwardRef(J);return q.attrs=L,q.componentStyle=H,q.displayName=S,q.shouldForwardProp=U,q.foldedComponentIds=f?ai(h.foldedComponentIds,h.styledComponentId):"",q.styledComponentId=y,q.target=f?h.target:u,Object.defineProperty(q,"defaultProps",{get(){return this._foldedDefaultProps},set(I){this._foldedDefaultProps=f?(function(at,...it){for(const Z of it)Dr(at,Z,!0);return at})({},h.defaultProps,I):I}}),hh(q,()=>`.${q.styledComponentId}`),j&&dh(q,u,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}var mb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function rp(u,r){const d=[u[0]];for(let f=0,h=r.length;f<h;f+=1)d.push(r[f],u[f+1]);return d}const fp=u=>(mh.add(u),u);function bb(u,...r){if(Vu(u)||oi(u))return fp(dn(rp(Yr,[u,...r])));const d=u;return r.length===0&&d.length===1&&typeof d[0]=="string"?dn(d):fp(dn(rp(d,r)))}function Nr(u,r,d=na){if(!r)throw Zu(1,r);const f=(h,...j)=>u(r,d,bb(h,...j));return f.attrs=h=>Nr(u,r,Object.assign(Object.assign({},d),{attrs:Array.prototype.concat(d.attrs,h).filter(Boolean)})),f.withConfig=h=>Nr(u,r,Object.assign(Object.assign({},d),h)),f}const Th=u=>Nr(gb,u),p=Th;mb.forEach(u=>{p[u]=Th(u)});function xb({cards:u,onProfileClick:r}){const d=u[2],f=d.val>=0;return o.jsxs(yb,{children:[o.jsx(vb,{$positive:f}),o.jsxs(jb,{children:[o.jsxs(zb,{children:[o.jsx(Tb,{children:o.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",children:[o.jsx("circle",{cx:"17",cy:"17",r:"17",fill:"url(#logoGrad)"}),o.jsx("path",{d:"M10 22 L17 11 L24 22",stroke:"white",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",opacity:"0.9"}),o.jsx("path",{d:"M13 18 L21 18",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"}),o.jsx("circle",{cx:"17",cy:"25",r:"2",fill:"white",opacity:"0.85"}),o.jsx("defs",{children:o.jsxs("linearGradient",{id:"logoGrad",x1:"0",y1:"0",x2:"34",y2:"34",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:"0%",stopColor:"#6366f1"}),o.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})})]})}),o.jsxs(Ab,{children:[o.jsx(Eb,{children:"כַּספּוֹן"}),o.jsx(Cb,{children:"ניהול תקציב משפחתי"})]})]}),o.jsx(Sb,{onClick:r,children:"👤"})]}),o.jsxs(Ob,{children:[o.jsx(Mb,{children:"מאזן חודשי"}),o.jsxs(Db,{$positive:f,children:[f?"+":"",d.val.toLocaleString("he-IL")," ₪"]})]}),o.jsxs(_b,{children:[o.jsxs(sp,{children:[o.jsx(dp,{children:"📈"}),o.jsxs(pp,{children:[o.jsxs(hp,{style:{color:"#22d3a5"},children:[u[0].val.toLocaleString("he-IL")," ₪"]}),o.jsx(gp,{children:"הכנסות"})]})]}),o.jsx(Nb,{}),o.jsxs(sp,{children:[o.jsx(dp,{children:"📉"}),o.jsxs(pp,{children:[o.jsxs(hp,{style:{color:"#f472b6"},children:[u[1].val.toLocaleString("he-IL")," ₪"]}),o.jsx(gp,{children:"הוצאות"})]})]})]})]})}const yb=p.div`
  background: linear-gradient(160deg, #161b27 0%, #0d1117 100%);
  padding: 52px 20px 24px;
  border-radius: 0 0 32px 32px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(99, 102, 241, 0.15);
`,vb=p.div`
  position: absolute;
  top: -60px;
  right: -60px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: ${({$positive:u})=>u?"radial-gradient(circle, rgba(34,211,165,0.13) 0%, transparent 70%)":"radial-gradient(circle, rgba(244,114,182,0.13) 0%, transparent 70%)"};
  pointer-events: none;
`,Sb=p.button`
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.08);
  color: #f0f4ff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;

  &:active {
    background: rgba(99,102,241,0.2);
  }
`,jb=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`,zb=p.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Tb=p.div`
  filter: drop-shadow(0 4px 12px rgba(99,102,241,0.5));
`,Ab=p.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`,Eb=p.div`
  font-size: 24px;
  font-weight: 900;
  color: #f0f4ff;
  letter-spacing: 0.5px;
  line-height: 1.1;
`,Cb=p.div`
  font-size: 11px;
  color: #8b9dc3;
  font-weight: 400;
  letter-spacing: 0.2px;
`,Ob=p.div`
  text-align: center;
  padding: 4px 0 20px;
  position: relative;
  z-index: 1;
`,Mb=p.div`
  font-size: 12px;
  color: #8b9dc3;
  font-weight: 500;
  margin-bottom: 6px;
  letter-spacing: 0.3px;
`,Db=p.div`
  font-size: 44px;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1;
  color: ${({$positive:u})=>u?"#22d3a5":"#f472b6"};
  text-shadow: 0 0 40px ${({$positive:u})=>u?"rgba(34,211,165,0.35)":"rgba(244,114,182,0.35)"};
`,_b=p.div`
  display: flex;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  position: relative;
  z-index: 1;
`,sp=p.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
`,Nb=p.div`
  width: 1px;
  background: rgba(255, 255, 255, 0.06);
  align-self: stretch;
`,dp=p.div`
  font-size: 20px;
  flex-shrink: 0;
`,pp=p.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,hp=p.div`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.5px;
`,gp=p.div`
  font-size: 11px;
  color: #8b9dc3;
  font-weight: 400;
`,wb=new Intl.DateTimeFormat("he-IL",{month:"long",year:"numeric"});function Xe(u,r=1){const d=new Date(u+"T12:00:00"),f=d.getDate();let h;if(f>=r?h=new Date(d.getFullYear(),d.getMonth(),r):h=new Date(d.getFullYear(),d.getMonth()-1,r),r===1)return wb.format(h);const j=new Date(h.getFullYear(),h.getMonth()+1,r-1),D=new Intl.DateTimeFormat("he-IL",{month:"long"}).format(h),w=new Intl.DateTimeFormat("he-IL",{month:"long"}).format(j),S=h.getFullYear();return h.getMonth()===j.getMonth()?`${D} ${S}`:`${D}–${w} ${S}`}function qr(u,r,d=1){return Xe(u,d)===r}function Ah(u=12,r=1){const d=[],f=new Date,h=f.getDate();let j;h>=r?j=new Date(f.getFullYear(),f.getMonth(),r):j=new Date(f.getFullYear(),f.getMonth()-1,r);for(let D=0;D<u;D++){const w=new Date(j.getFullYear(),j.getMonth()-D,r);d.push(Xe(`${w.getFullYear()}-${String(w.getMonth()+1).padStart(2,"0")}-${String(r).padStart(2,"0")}`,r))}return d}function Rb(u,r=1){const f=Ah(24,r).indexOf(u);if(f===-1)return new Date().toISOString().slice(0,10);const h=new Date,j=h.getDate();let D;j>=r?D=new Date(h.getFullYear(),h.getMonth(),r):D=new Date(h.getFullYear(),h.getMonth()-1,r);const w=new Date(D.getFullYear(),D.getMonth()-f,r);return`${w.getFullYear()}-${String(w.getMonth()+1).padStart(2,"0")}-${String(r).padStart(2,"0")}`}const zr=1e3;function Ub({pct:u,color:r,size:d=36}){const h=d/2,j=d/2,D=2*Math.PI*13,S=Math.min(u,100)/100*D;return o.jsxs("svg",{width:d,height:d,viewBox:`0 0 ${d} ${d}`,children:[o.jsx("circle",{cx:h,cy:j,r:13,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:4}),o.jsx("circle",{cx:h,cy:j,r:13,fill:"none",stroke:r,strokeWidth:4,strokeDasharray:`${S} ${D}`,strokeLinecap:"round",transform:`rotate(-90 ${h} ${j})`,style:{transition:"stroke-dasharray 0.5s ease"}})]})}const Ou=["#6366f1","#f472b6","#22d3a5","#fbbf24","#38bdf8","#a78bfa","#fb7185","#34d399","#f97316","#60a5fa","#e879f9","#4ade80","#facc15","#818cf8","#2dd4bf","#fb923c"];function Bb({transactions:u,allTransactions:r,setActivityPage:d,budgets:f,setBudgets:h,selectedMonth:j,setSelectedMonth:D,cycleDay:w=1,categories:S,profile:y}){const[L,U]=nt.useState(!1),[H,J]=nt.useState({}),q=S?.filter(x=>x.type==="expense")??[],I=S?.filter(x=>x.type==="income")??[],at=(x,E)=>(x==="income"?I:q).find(V=>V.id===E)??{emoji:"📦",label:E},it=x=>new Intl.NumberFormat("he-IL",{style:"currency",currency:"ILS",maximumFractionDigits:0}).format(x),Z=nt.useMemo(()=>j?u.filter(x=>qr(x.date,j,w)):u,[u,j,w]),ot=nt.useMemo(()=>q.map((x,E)=>{const $=Z.filter(G=>G.type==="expense"&&G.category===x.id).reduce((G,z)=>G+Number(z.amount),0),V=f[x.id]??zr,M=V>0?$/V*100:0,g=M>=100?"over":M>=80?"warn":"ok",_=Ou[E%Ou.length];return{...x,spent:$,limit:V,pct:M,status:g,color:_}}),[q,Z,f]).filter(x=>x.spent>0),tt=nt.useMemo(()=>Z.filter(x=>x.type==="expense").sort((x,E)=>E.date.localeCompare(x.date)).slice(0,5),[Z]),rt=y?.personOneName??"אלעד",C=y?.personTwoName??"נויה",Q=nt.useMemo(()=>Ah(12,w),[w]),lt=Q.indexOf(j),k=lt<Q.length-1,F=lt>0,jt=()=>k&&D(Q[lt+1]),bt=()=>F&&D(Q[lt-1]),X=()=>{J(Object.fromEntries(q.map(x=>[x.id,f[x.id]??zr]))),U(!0)},W=()=>{const x={};for(const[E,$]of Object.entries(H)){const V=parseFloat($);V>0&&(x[E]=V)}h(x),U(!1)};return o.jsxs(qb,{children:[o.jsxs(Hb,{children:[o.jsx(mp,{onClick:jt,$disabled:!k,children:"‹"}),o.jsx(Yb,{children:j}),o.jsx(mp,{onClick:bt,$disabled:!F,children:"›"})]}),ot.length>0?o.jsxs(bp,{children:[o.jsxs(xp,{children:[o.jsxs(yp,{children:["ניצול תקציב — ",j]}),o.jsx(vp,{onClick:X,children:"⚙️ תקציב"})]}),o.jsx(Gb,{children:ot.map(x=>o.jsxs(Lb,{$status:x.status,children:[o.jsxs($b,{children:[o.jsx(Ub,{pct:x.pct,size:36,color:x.status==="over"?"#f472b6":x.status==="warn"?"#fbbf24":x.color}),o.jsx(Xb,{children:o.jsx(Qb,{children:x.emoji})})]}),o.jsx(Zb,{children:x.label}),o.jsxs(Vb,{children:[o.jsx(Kb,{$status:x.status,children:it(x.spent)}),o.jsxs(kb,{children:["/ ",it(x.limit)]})]}),o.jsxs(Jb,{$status:x.status,children:[Math.round(x.pct),"%",x.status==="over"?"⚠️":""]})]},x.id))})]}):o.jsxs(bp,{children:[o.jsxs(xp,{children:[o.jsxs(yp,{children:["ניצול תקציב — ",j]}),o.jsx(vp,{onClick:X,children:"⚙️ תקציב"})]}),o.jsxs(Sp,{children:[o.jsx("span",{style:{fontSize:44,marginBottom:8},children:"📊"}),o.jsx("span",{style:{color:"#4a5568",fontSize:14},children:"אין הוצאות החודש עדיין"})]})]}),o.jsxs(Fb,{children:[o.jsxs(Wb,{children:[o.jsx(Ib,{children:"הוצאות אחרונות"}),tt.length>0&&o.jsx(Pb,{onClick:()=>d("history"),children:"הכל →"})]}),tt.length===0?o.jsxs(Sp,{children:[o.jsx("span",{style:{fontSize:44,marginBottom:8},children:"🌟"}),o.jsx("span",{style:{color:"rgba(255,255,255,0.3)",fontSize:14},children:"אין הוצאות החודש"})]}):tt.map((x,E)=>{const $=at(x.type,x.category),V=q.findIndex(g=>g.id===x.category),M=V>=0?Ou[V%Ou.length]:"#6366f1";return o.jsxs(tx,{$last:E===tt.length-1,children:[o.jsx(ex,{style:{background:`${M}22`},children:o.jsx("span",{style:{fontSize:20},children:$.emoji})}),o.jsxs(lx,{children:[o.jsxs(nx,{children:[$.label,x.recurring&&o.jsx("span",{style:{marginInlineStart:6,fontSize:11,opacity:.7},children:"🔄"})]}),o.jsxs(ax,{children:[x.date.split("-").reverse().join("/"),x.description?` · ${x.description}`:""," · ",x.person==="both"?`${rt} · ${C}`:x.person==="personOne"?rt:C]})]}),o.jsxs(ix,{children:["−",it(x.amount)]})]},x.id)})]}),L&&o.jsx(ux,{onClick:()=>U(!1),children:o.jsxs(cx,{onClick:x=>x.stopPropagation(),children:[o.jsxs(ox,{children:[o.jsx("span",{children:"הגדרת תקציב לקטגוריות"}),o.jsx(rx,{onClick:()=>U(!1),children:"✕"})]}),o.jsx(fx,{children:q.map(x=>o.jsxs(sx,{children:[o.jsxs(dx,{children:[x.emoji," ",x.label]}),o.jsx(px,{type:"number",placeholder:`${zr}`,value:H[x.id]??"",onChange:E=>J($=>({...$,[x.id]:E.target.value}))})]},x.id))}),o.jsx(hx,{children:o.jsx(gx,{onClick:W,children:"שמור תקציב ✓"})})]})})]})}const Hb=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin: 4px 16px 14px;
  background: #161b27;
  border-radius: 16px;
  border: 1px solid rgba(99,102,241,0.15);
  overflow: hidden;
`,mp=p.button`
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  color: ${({$disabled:u})=>u?"#2d3748":"#a5b4fc"};
  font-size: 24px;
  font-weight: 300;
  cursor: ${({$disabled:u})=>u?"default":"pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  font-family: inherit;
  flex-shrink: 0;
  line-height: 1;

  &:active {
    background: ${({$disabled:u})=>u?"transparent":"rgba(99,102,241,0.12)"};
  }
`,Yb=p.div`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #f0f4ff;
  letter-spacing: 0.2px;
`,qb=p.div`
  padding: 12px 0 24px;
`,bp=p.div`
  margin: 0 16px 14px;
  background: #161b27;
  border-radius: 20px;
  padding: 16px;
  border: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 2px 20px rgba(0,0,0,0.25);
`,xp=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,yp=p.div`
  font-weight: 700;
  font-size: 15px;
  color: #f0f4ff;
`,vp=p.button`
  background: rgba(99,102,241,0.14);
  border: none;
  color: #a5b4fc;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  padding: 5px 12px;
  border-radius: 10px;
  transition: background 0.15s;
  &:active { background: rgba(99,102,241,0.25); }
`,Sp=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 12px;
`,Gb=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`,Lb=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 8px 4px 6px;
  background: ${({$status:u})=>u==="over"?"rgba(244,114,182,0.06)":u==="warn"?"rgba(251,191,36,0.06)":"rgba(255,255,255,0.03)"};
  border-radius: 12px;
  border: 1px solid ${({$status:u})=>u==="over"?"rgba(244,114,182,0.18)":u==="warn"?"rgba(251,191,36,0.18)":"rgba(255,255,255,0.04)"};
`,$b=p.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Xb=p.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`,Qb=p.span`
  font-size: 12px;
`,Zb=p.div`
  font-size: 10px;
  font-weight: 600;
  color: #c7d2e8;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 0 2px;
`,Vb=p.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
  justify-content: center;
`,Kb=p.span`
  font-size: 10px;
  font-weight: 700;
  color: ${({$status:u})=>u==="over"?"#f472b6":u==="warn"?"#fbbf24":"#a5b4fc"};
`,kb=p.span`
  font-size: 9px;
  color: #4a5568;
`,Jb=p.span`
  font-size: 10px;
  font-weight: 700;
  color: ${({$status:u})=>u==="over"?"#f472b6":u==="warn"?"#fbbf24":"#6b7aaa"};
`,Fb=p.div`
  margin: 0 16px 14px;
  background: linear-gradient(145deg, #1e1535 0%, #1a1f35 100%);
  border-radius: 20px;
  padding: 18px 16px;
  border: 1px solid rgba(139,92,246,0.2);
  box-shadow: 0 4px 24px rgba(99,102,241,0.12), 0 2px 8px rgba(0,0,0,0.3);
`,Wb=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,Ib=p.div`
  font-weight: 700;
  font-size: 15px;
  color: #e0d7ff;
`,Pb=p.button`
  background: rgba(139,92,246,0.18);
  border: none;
  color: #c4b5fd;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  padding: 5px 12px;
  border-radius: 10px;
  transition: background 0.15s;
  &:active { background: rgba(139,92,246,0.3); }
`,tx=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: ${({$last:u})=>u?"none":"1px solid rgba(255,255,255,0.05)"};
`,ex=p.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,lx=p.div`
  flex: 1;
  min-width: 0;
`,nx=p.div`
  font-weight: 600;
  font-size: 14px;
  color: #e8e0ff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ax=p.div`
  font-size: 11px;
  color: rgba(200,190,255,0.45);
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ix=p.div`
  font-weight: 700;
  font-size: 14px;
  color: #f472b6;
  flex-shrink: 0;
`,ux=p.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  z-index: 500;
  display: flex;
  align-items: flex-end;
`,cx=p.div`
  background: #161b27;
  border-radius: 24px 24px 0 0;
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(99,102,241,0.2);
`,ox=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 12px;
  font-weight: 700;
  font-size: 17px;
  color: #f0f4ff;
  border-bottom: 1px solid rgba(255,255,255,0.06);
`,rx=p.button`
  background: rgba(255,255,255,0.08);
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 13px;
  color: #8b9dc3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
`,fx=p.div`
  overflow-y: auto;
  padding: 12px 20px;
  flex: 1;
`,sx=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  &:last-child { border-bottom: none; }
`,dx=p.div`
  font-size: 14px;
  color: #c7d2e8;
  flex: 1;
`,px=p.input`
  width: 100px;
  padding: 7px 10px;
  border: 2px solid rgba(99,102,241,0.2);
  border-radius: 10px;
  font-size: 14px;
  font-family: inherit;
  text-align: left;
  outline: none;
  color: #f0f4ff;
  background: #1e2535;
  direction: ltr;

  &:focus { border-color: #6366f1; }
`,hx=p.div`
  padding: 14px 20px calc(14px + env(safe-area-inset-bottom));
  border-top: 1px solid rgba(255,255,255,0.06);
`,gx=p.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 4px 16px rgba(99,102,241,0.35);
`,mx=[{val:"credit",label:"אשראי",emoji:"💳"},{val:"bit",label:"ביט",emoji:"📱"},{val:"cash",label:"מזומן",emoji:"💵"},{val:"transfer",label:"העברה",emoji:"🏦"},{val:"paybox",label:"פייבוקס",emoji:"📲"},{val:"check",label:"צ׳ק",emoji:"📝"}];function Mu({setActivityPage:u,toast:r,setToast:d,addTransaction:f,editTx:h,replaceTransaction:j,categories:D,profile:w,recurringLocked:S}){const y=!!h,L=D?.filter(k=>k.type==="expense")??[],U=D?.filter(k=>k.type==="income")??[],[H,J]=nt.useState(1),[q,I]=nt.useState(y?{type:h.type,date:h.date,amount:h.amount,category:h.category,person:h.person??null,description:h.description||"",paymentMethod:h.paymentMethod||"",recurring:!!h.recurring}:{type:"expense",date:new Date().toISOString().slice(0,10),recurring:!!S,person:null,paymentMethod:"",description:""}),at=q.type==="expense"?L:U,it=w?.personOneName??"אלעד",Z=w?.personTwoName??"נויה",st=S?"recurring":y?"history":"dashboard",ot=3,tt=(k,F="success")=>{d({msg:k,type:F}),setTimeout(()=>d(null),2500)},rt=()=>{if(H===1&&(!q.amount||parseFloat(q.amount)<=0)){tt("הכנס סכום תקין","error");return}J(k=>k+1)},C=()=>{H===1?u(st):J(k=>k-1)},Q=()=>{y?(j({...h,...q}),tt("✓ עודכן בהצלחה!"),u(S?"recurring":"history")):(f({id:crypto.randomUUID(),...q}),tt("✓ נוסף בהצלחה!"),u(S?"recurring":"dashboard"))},lt=y?"עריכת עסקה":S?"הוראת קבע חדשה":"עסקה חדשה";return o.jsxs(bx,{children:[o.jsxs(xx,{children:[o.jsx(yx,{onClick:C,children:H===1?"✕":"‹"}),o.jsx(vx,{children:lt}),o.jsxs(Sx,{children:[H," / ",ot]})]}),o.jsx(jx,{children:o.jsx(zx,{style:{width:`${H/ot*100}%`},$type:q.type})}),H===1&&o.jsxs(Tr,{children:[o.jsx(Tx,{children:[{val:"expense",label:"הוצאה",icon:"📉"},{val:"income",label:"הכנסה",icon:"📈"}].map(k=>o.jsxs(Ax,{$active:q.type===k.val,$type:k.val,onClick:()=>I(F=>({...F,type:k.val,category:""})),children:[k.icon," ",k.label]},k.val))}),o.jsxs(Ex,{children:[o.jsx(Cx,{children:"₪"}),o.jsx(Ox,{type:"number",placeholder:"0",autoFocus:!0,value:q.amount??"",onChange:k=>I(F=>({...F,amount:k.target.value}))})]}),o.jsx(wr,{$type:q.type,onClick:rt,children:"הבא ›"})]}),H===2&&o.jsxs(Tr,{children:[o.jsx(ei,{children:"קטגוריה"}),o.jsx(Mx,{children:at.map(k=>o.jsxs(Dx,{$active:q.category===k.id,onClick:()=>I(F=>({...F,category:k.id})),children:[o.jsx("span",{style:{fontSize:20},children:k.emoji}),o.jsx(_x,{children:k.label})]},k.id))}),o.jsx(ei,{style:{marginTop:20},children:"תיאור (אופציונלי)"}),o.jsx(Nx,{type:"text",placeholder:"לדוגמה: סופר אלפא...",value:q.description??"",onChange:k=>I(F=>({...F,description:k.target.value}))}),o.jsx(wr,{$type:q.type,onClick:rt,children:"הבא ›"})]}),H===3&&o.jsxs(Tr,{children:[o.jsx(ei,{children:"של מי?"}),o.jsx(wx,{children:[{val:"personOne",label:it,emoji:"🙋🏽"},{val:"personTwo",label:Z,emoji:"🙋🏽‍♀️"}].map(k=>o.jsxs(Rx,{$active:q.person===k.val||q.person==="both",onClick:()=>I(F=>F.person==="both"?{...F,person:k.val==="personOne"?"personTwo":"personOne"}:F.person===k.val?{...F,person:null}:F.person&&F.person!==k.val?{...F,person:"both"}:{...F,person:k.val}),children:[o.jsx("span",{style:{fontSize:22},children:k.emoji}),o.jsx("span",{children:k.label})]},k.val))}),o.jsx(ei,{style:{marginTop:20},children:"תאריך"}),o.jsx(Ux,{type:"date",value:q.date,onChange:k=>I(F=>({...F,date:k.target.value}))}),o.jsx(ei,{style:{marginTop:20},children:"אמצעי תשלום"}),o.jsx(Bx,{children:mx.map(k=>o.jsxs(Hx,{$active:q.paymentMethod===k.val,onClick:()=>I(F=>({...F,paymentMethod:F.paymentMethod===k.val?"":k.val})),children:[o.jsx("span",{children:k.emoji}),o.jsx("span",{children:k.label})]},k.val))}),!S&&o.jsxs(qx,{$on:!!q.recurring,onClick:()=>I(k=>({...k,recurring:!k.recurring})),children:[o.jsxs(Gx,{children:[o.jsx("span",{style:{fontSize:20},children:"🔄"}),o.jsxs("div",{children:[o.jsx(Lx,{children:"חוזר כל חודש"}),o.jsx($x,{children:"יתווסף אוטומטית"})]})]}),o.jsx(Xx,{$on:!!q.recurring,children:o.jsx(Qx,{$on:!!q.recurring})})]}),o.jsx(Yx,{$type:q.type,onClick:Q,children:y?"שמור שינויים ✓":"הוסף עסקה ✓"})]})]})}const bx=p.div`
  padding: 16px 16px 24px;
  width: 100%;
  box-sizing: border-box;
`,xx=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,yx=p.button`
  background: rgba(255,255,255,0.06);
  border: none;
  color: #8b9dc3;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
`,vx=p.div`
  font-size: 18px;
  font-weight: 800;
  color: #f0f4ff;
`,Sx=p.div`
  font-size: 13px;
  color: #4a5568;
  font-weight: 600;
  width: 36px;
  text-align: center;
`,jx=p.div`
  height: 3px;
  background: rgba(255,255,255,0.06);
  border-radius: 2px;
  margin-bottom: 16px;
  overflow: hidden;
`,zx=p.div`
  height: 100%;
  border-radius: 2px;
  transition: width 0.3s ease;
  background: ${({$type:u})=>u==="expense"?"linear-gradient(90deg, #6366f1, #f472b6)":"linear-gradient(90deg, #6366f1, #22d3a5)"};
`,Tr=p.div`
  background: #161b27;
  border-radius: 24px;
  padding: 20px 16px;
  border: 1px solid rgba(255,255,255,0.05);
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
  width: 100%;
  box-sizing: border-box;
`,Tx=p.div`
  display: flex;
  background: #0d1117;
  border-radius: 14px;
  padding: 4px;
  margin-bottom: 20px;
  gap: 4px;
`,Ax=p.button`
  flex: 1;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s;
  background: ${({$active:u,$type:r})=>u?r==="expense"?"linear-gradient(135deg, #f472b6, #e11d48)":"linear-gradient(135deg, #22d3a5, #059669)":"rgba(255,255,255,0.05)"};
  color: ${({$active:u})=>u?"white":"#8b9dc3"};
  box-shadow: ${({$active:u})=>u?"0 4px 14px rgba(0,0,0,0.3)":"none"};
`,Ex=p.div`
  display: flex;
  align-items: center;
  background: #0d1117;
  border-radius: 16px;
  padding: 0 16px;
  margin-bottom: 24px;
  border: 2px solid rgba(255,255,255,0.08);
  direction: ltr;
`,Cx=p.div`
  font-size: 28px;
  font-weight: 700;
  color: #8b9dc3;
  margin-right: 8px;
`,Ox=p.input`
  flex: 1;
  padding: 20px 0;
  border: none;
  background: transparent;
  font-size: 42px;
  font-weight: 900;
  color: #f0f4ff;
  text-align: left;
  outline: none;
  font-family: inherit;
  letter-spacing: -1px;
  min-width: 0;

  &::placeholder { color: #2d3748; }
`,ei=p.div`
  font-size: 12px;
  font-weight: 600;
  color: #8b9dc3;
  margin-bottom: 10px;
  letter-spacing: 0.3px;
`,Mx=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,Dx=p.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border: 2px solid ${({$active:u})=>u?"#6366f1":"rgba(255,255,255,0.06)"};
  border-radius: 12px;
  background: ${({$active:u})=>u?"rgba(99,102,241,0.15)":"#1e2535"};
  cursor: pointer;
  font-family: inherit;
  text-align: right;
  transition: all 0.15s;
`,_x=p.span`
  font-size: 13px;
  font-weight: 500;
  color: #c7d2e8;
  flex: 1;
  text-align: right;
`,Nx=p.input`
  width: 100%;
  background: #1e2535;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  padding: 12px 14px;
  color: #f0f4ff;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  box-sizing: border-box;

  &::placeholder { color: #4a5568; }
  &:focus { border-color: rgba(99,102,241,0.4); }
`,wx=p.div`
  display: flex;
  gap: 10px;
`,Rx=p.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 6px;
  border: 2px solid ${({$active:u})=>u?"#6366f1":"rgba(255,255,255,0.06)"};
  border-radius: 14px;
  background: ${({$active:u})=>u?"rgba(99,102,241,0.15)":"#1e2535"};
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: ${({$active:u})=>u?700:400};
  color: ${({$active:u})=>u?"#a5b4fc":"#8b9dc3"};
  transition: all 0.15s;
`,Ux=p.input`
  width: 100%;
  background: #1e2535;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  padding: 12px 14px;
  color: #f0f4ff;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  box-sizing: border-box;

  &:focus { border-color: rgba(99,102,241,0.4); }
`,Bx=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,Hx=p.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 4px;
  border: 2px solid ${({$active:u})=>u?"#6366f1":"rgba(255,255,255,0.06)"};
  border-radius: 12px;
  background: ${({$active:u})=>u?"rgba(99,102,241,0.15)":"#1e2535"};
  cursor: pointer;
  font-family: inherit;
  font-size: 11px;
  font-weight: ${({$active:u})=>u?700:400};
  color: ${({$active:u})=>u?"#a5b4fc":"#8b9dc3"};
  transition: all 0.15s;
`,wr=p.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 14px;
  background: ${({$type:u})=>u==="expense"?"linear-gradient(135deg, #6366f1, #8b5cf6)":"linear-gradient(135deg, #22d3a5, #059669)"};
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  margin-top: 20px;
  box-shadow: 0 6px 24px rgba(99,102,241,0.3);
  transition: transform 0.15s;

  &:active { transform: scale(0.98); }
`,Yx=p(wr)``,qx=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border: 2px solid ${({$on:u})=>u?"rgba(99,102,241,0.3)":"rgba(255,255,255,0.06)"};
  border-radius: 14px;
  background: ${({$on:u})=>u?"rgba(99,102,241,0.08)":"#1e2535"};
  cursor: pointer;
  margin-top: 16px;
  user-select: none;
  transition: all 0.15s;
`,Gx=p.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Lx=p.div`
  font-weight: 600;
  font-size: 13px;
  color: #f0f4ff;
`,$x=p.div`
  font-size: 11px;
  color: #8b9dc3;
  margin-top: 1px;
`,Xx=p.div`
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: ${({$on:u})=>u?"#6366f1":"#2d3748"};
  position: relative;
  transition: background 0.2s;
  flex-shrink: 0;
`,Qx=p.div`
  position: absolute;
  top: 3px;
  left: ${({$on:u})=>u?"23px":"3px"};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  transition: left 0.2s;
`;function Zx(u,r,d){return!u||u==="both"?`${r} + ${d}`:u==="personOne"?r:d}function jp(u,r){return r.find(d=>d.id===u)?.label??u}function zp(u,r){return r.find(d=>d.id===u)?.emoji??"📦"}function be(u){return"₪"+Number(u).toLocaleString("he-IL")}function Vx(u,r=200){if(!u.length)return"";const d=u.reduce((S,y)=>S+y.value,0);if(d===0)return"";const f=r/2,h=r/2,j=r/2-10;if(u.length===1)return`<svg width="${r}" height="${r}" viewBox="0 0 ${r} ${r}"><circle cx="${f}" cy="${h}" r="${j}" fill="${u[0].color}" opacity="0.9"/></svg>`;let D="",w=-Math.PI/2;return u.forEach(S=>{const y=S.value/d,L=w,U=w+y*2*Math.PI,H=f+j*Math.cos(L),J=h+j*Math.sin(L),q=f+j*Math.cos(U),I=h+j*Math.sin(U),at=y>.5?1:0;D+=`<path d="M${f},${h} L${H},${J} A${j},${j} 0 ${at},1 ${q},${I} Z" fill="${S.color}" opacity="0.9"/>`,w=U}),`<svg width="${r}" height="${r}" viewBox="0 0 ${r} ${r}">${D}</svg>`}function Kx(u){const r=u.length,d=Math.max(480,r*44),f=160,h=20,j=Math.max(...u.flatMap(y=>[y.income,y.expense]),1),D=Math.min(14,Math.floor((d-h*2)/r/2-2)),w=(d-h*2)/r;let S="";return u.forEach((y,L)=>{const U=h+L*w+w/2,H=y.income/j*(f-30),J=y.expense/j*(f-30);S+=`<rect x="${U-D-1}" y="${f-20-H}" width="${D}" height="${H}" fill="#22d3a5" rx="3" opacity="0.85"/>`,S+=`<rect x="${U+1}" y="${f-20-J}" width="${D}" height="${J}" fill="#f472b6" rx="3" opacity="0.85"/>`,S+=`<text x="${U}" y="${f-4}" text-anchor="middle" font-size="9" fill="#8b9dc3">${y.short}</text>`}),`<svg width="${d}" height="${f}" viewBox="0 0 ${d} ${f}" style="width:100%;max-width:${d}px">${S}</svg>`}function Eh({transactions:u,categories:r,profile:d,cycleDay:f=1,selectedMonth:h=null}){const j=d?.personOneName??"אלעד",D=d?.personTwoName??"נויה",w=h?u.filter(X=>Xe(X.date,f)===h):u,S=w.filter(X=>X.type==="income").reduce((X,W)=>X+Number(W.amount),0),y=w.filter(X=>X.type==="expense").reduce((X,W)=>X+Number(W.amount),0),L=S-y,U={};w.filter(X=>X.type==="expense").forEach(X=>{U[X.category]=(U[X.category]??0)+Number(X.amount)});const H=Object.entries(U).map(([X,W])=>({id:X,value:W,label:jp(X,r),emoji:zp(X,r)})).sort((X,W)=>W.value-X.value),J=["#6366f1","#f472b6","#22d3a5","#fbbf24","#38bdf8","#a78bfa","#fb7185","#34d399","#f97316","#60a5fa","#e879f9","#4ade80"],q=H.map((X,W)=>({...X,color:J[W%J.length]})),I=h?6:12,at=[];for(let X=I-1;X>=0;X--){const W=new Date;W.setDate(f),W.setMonth(W.getMonth()-X);const x=`${W.getFullYear()}-${String(W.getMonth()+1).padStart(2,"0")}-${String(f).padStart(2,"0")}`,E=Xe(x,f),$=E.split("–")[0].split(" ")[0].slice(0,3),V=u.filter(M=>Xe(M.date,f)===E);at.push({label:E,short:$,income:V.filter(M=>M.type==="income").reduce((M,g)=>M+Number(g.amount),0),expense:V.filter(M=>M.type==="expense").reduce((M,g)=>M+Number(g.amount),0)})}const it=Vx(q),Z=Kx(at),st=w.filter(X=>X.type==="expense"&&(X.person==="personOne"||X.person==="both")).reduce((X,W)=>X+Number(W.amount),0),ot=w.filter(X=>X.type==="expense"&&(X.person==="personTwo"||X.person==="both")).reduce((X,W)=>X+Number(W.amount),0),tt=w.sort((X,W)=>W.date.localeCompare(X.date)).map(X=>`
      <tr>
        <td>${X.date.split("-").reverse().join("/")}</td>
        <td>${X.type==="income"?"הכנסה":"הוצאה"}</td>
        <td>${zp(X.category,r)} ${jp(X.category,r)}</td>
        <td style="color:${X.type==="income"?"#22d3a5":"#f472b6"};font-weight:700">${X.type==="income"?"+":"-"}${be(X.amount)}</td>
        <td>${Zx(X.person,j,D)}</td>
        <td>${X.paymentMethod??""}</td>
        <td>${X.description??""}</td>
      </tr>`).join(""),rt=q.map(X=>`<div class="legend-item"><span class="dot" style="background:${X.color}"></span>${X.emoji} ${X.label} — ${be(X.value)} (${y>0?Math.round(X.value/y*100):0}%)</div>`).join(""),C=at.map(X=>`
    <tr>
      <td>${X.label}</td>
      <td style="color:#22d3a5">${be(X.income)}</td>
      <td style="color:#f472b6">${be(X.expense)}</td>
      <td style="color:${X.income-X.expense>=0?"#22d3a5":"#f472b6"}">${be(X.income-X.expense)}</td>
    </tr>`).join(""),Q=h?`דוח ${h}`:"דוח כולל",lt=new Date().toLocaleDateString("he-IL"),k=`<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
<meta charset="UTF-8">
<title>${Q}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #0d1117; color: #f0f4ff; padding: 24px; direction: rtl; }
  h1 { font-size: 28px; font-weight: 900; margin-bottom: 4px; }
  h2 { font-size: 18px; font-weight: 700; color: #a5b4fc; margin-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px; }
  .subtitle { color: #8b9dc3; font-size: 13px; margin-bottom: 32px; }
  .section { background: #161b27; border-radius: 20px; padding: 20px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); }
  .summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 0; }
  .card { background: #1e2535; border-radius: 14px; padding: 16px; text-align: center; }
  .card .val { font-size: 26px; font-weight: 900; letter-spacing: -1px; }
  .card .lbl { font-size: 12px; color: #8b9dc3; margin-top: 4px; }
  .green { color: #22d3a5; }
  .pink  { color: #f472b6; }
  .chart-row { display: flex; gap: 24px; align-items: flex-start; flex-wrap: wrap; }
  .legend { display: flex; flex-direction: column; gap: 8px; flex: 1; min-width: 180px; }
  .legend-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #c7d2e8; }
  .dot { width: 12px; height: 12px; border-radius: 3px; flex-shrink: 0; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { background: #1e2535; padding: 10px 12px; text-align: right; color: #8b9dc3; font-weight: 600; }
  td { padding: 9px 12px; border-bottom: 1px solid rgba(255,255,255,0.04); color: #c7d2e8; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: rgba(99,102,241,0.05); }
  .person-row { display: flex; gap: 14px; }
  .person-card { flex: 1; background: #1e2535; border-radius: 14px; padding: 14px 16px; }
  .person-card .name { font-weight: 700; font-size: 15px; margin-bottom: 4px; }
  .person-card .amount { font-size: 20px; font-weight: 800; color: #f472b6; }
  .insight { background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2); border-radius: 12px; padding: 14px 16px; font-size: 14px; color: #c7d2e8; line-height: 1.7; }
  .insight strong { color: #a5b4fc; }
  @media print { body { background: white; color: black; } .card, .section { background: #f8f9fa; border: 1px solid #ddd; } }
</style>
</head>
<body>
<h1>📊 ${Q}</h1>
<div class="subtitle">נוצר ב-${lt} · ${j} ו-${D}</div>

<div class="section">
  <h2>סיכום ${h??"כולל"}</h2>  <div class="summary-grid">
    <div class="card"><div class="val green">${be(S)}</div><div class="lbl">📈 הכנסות</div></div>
    <div class="card"><div class="val pink">${be(y)}</div><div class="lbl">📉 הוצאות</div></div>
    <div class="card"><div class="val" style="color:${L>=0?"#22d3a5":"#f472b6"}">${L>=0?"+":""}${be(L)}</div><div class="lbl">${L>=0?"✨":"⚠️"} מאזן</div></div>
  </div>
</div>

${q.length>0?`
<div class="section">
  <h2>פירוט הוצאות לפי קטגוריה</h2>
  <div class="chart-row">
    <div>${it}</div>
    <div class="legend">${rt}</div>
  </div>
</div>`:""}

${h?"":`
<div class="section">
  <h2>12 חודשים אחרונים</h2>
  ${Z}
  <table style="margin-top:16px">
    <tr><th>חודש</th><th>הכנסות</th><th>הוצאות</th><th>מאזן</th></tr>
    ${C}
  </table>
</div>`}

<div class="section">
  <h2>פירוט לפי אדם</h2>
  <div class="person-row">
    <div class="person-card"><div class="name">🙋🏽 ${j}</div><div class="amount">${be(st)}</div><div class="lbl">הוצאות</div></div>
    <div class="person-card"><div class="name">🙋🏽‍♀️ ${D}</div><div class="amount">${be(ot)}</div><div class="lbl">הוצאות</div></div>
  </div>
</div>

${w.length>0?`
<div class="section">
  <h2>💡 תובנות</h2>
  <div class="insight">
    ${q[0]?`• ההוצאה הגדולה ביותר היא <strong>${q[0].emoji} ${q[0].label}</strong> — ${be(q[0].value)} (${y>0?Math.round(q[0].value/y*100):0}% מסך ההוצאות)<br>`:""}
    ${L<0?`• <strong>⚠️ גירעון של ${be(Math.abs(L))}</strong> — ההוצאות עולות על ההכנסות<br>`:`• <strong>✅ חיסכון של ${be(L)}</strong> החודש — כל הכבוד!<br>`}
    ${S>0?`• שיעור חיסכון: <strong>${Math.round(L/S*100)}%</strong> מההכנסות<br>`:""}
    ${d.personOneMonthlyIncome||d.personTwoMonthlyIncome?`• מעשרות (10% מהכנסה צפויה): <strong>${be(((Number(d.personOneMonthlyIncome)||0)+(Number(d.personTwoMonthlyIncome)||0))*.1)}</strong>`:""}
  </div>
</div>`:""}

<div class="section">
  <h2>כל העסקאות</h2>
  <table>
    <tr><th>תאריך</th><th>סוג</th><th>קטגוריה</th><th>סכום</th><th>של מי</th><th>תשלום</th><th>תיאור</th></tr>
    ${tt}
  </table>
</div>

</body></html>`,F=new Blob([k],{type:"text/html;charset=utf-8;"}),jt=URL.createObjectURL(F),bt=document.createElement("a");bt.href=jt,bt.download=`${Q.replace(/\s/g,"_")}.html`,bt.click(),URL.revokeObjectURL(jt)}function kx({onDelete:u,children:r}){const[d,f]=nt.useState(0),[h,j]=nt.useState(!1),D=nt.useRef(null),w=80,S=U=>{D.current=U.clientX,j(!0)},y=U=>{if(D.current===null)return;const H=D.current-U.clientX;f(Math.max(0,Math.min(H,120)))},L=()=>{d>=w?u():f(0),D.current=null,j(!1)};return o.jsxs(sy,{children:[o.jsx(dy,{$visible:d>10,children:o.jsx("span",{children:"🗑️"})}),o.jsx(py,{style:{transform:`translateX(${d}px)`},$swiping:h,onPointerDown:S,onPointerMove:y,onPointerUp:L,onPointerLeave:L,children:r})]})}function Jx({transactions:u,selectedMonth:r,cycleDay:d=1,removeTransaction:f,restoreTransaction:h,setActivityPage:j,categories:D,profile:w}){const[S,y]=nt.useState("both"),[L,U]=nt.useState("all"),[H,J]=nt.useState(null),[q,I]=nt.useState(null),[at,it]=nt.useState(!1),[Z,st]=nt.useState({search:"",dateFrom:"",dateTo:"",category:"",minAmount:"",maxAmount:""}),ot=D??[],tt=ot.filter(M=>M.type==="expense"),rt=ot.filter(M=>M.type==="income"),C=(M,g)=>st(_=>({..._,[M]:g})),Q=Object.values(Z).some(M=>M!==""),lt=()=>st({search:"",dateFrom:"",dateTo:"",category:"",minAmount:"",maxAmount:""}),k=(M,g)=>(M==="income"?rt:tt).find(G=>G.id===g)??{emoji:"📦",label:g},F=M=>new Intl.NumberFormat("he-IL",{style:"currency",currency:"ILS",maximumFractionDigits:0}).format(M),jt=r?u.filter(M=>qr(M.date,r,d)):u,X=(S==="both"?jt:jt.filter(M=>M.person===S||M.person==="both")).filter(M=>{if(L!=="all"&&M.type!==L)return!1;const g=k(M.type,M.category);if(Z.search){const _=Z.search.toLowerCase();if(!g.label.toLowerCase().includes(_)&&!(M.description??"").toLowerCase().includes(_))return!1}return!(Z.dateFrom&&M.date<Z.dateFrom||Z.dateTo&&M.date>Z.dateTo||Z.category&&M.category!==Z.category||Z.minAmount&&Number(M.amount)<Number(Z.minAmount)||Z.maxAmount&&Number(M.amount)>Number(Z.maxAmount))}),W=M=>{f(M.id),J(M),q&&clearTimeout(q);const g=setTimeout(()=>J(null),4e3);I(g)},x=()=>{H&&(clearTimeout(q),h(H),J(null))};nt.useEffect(()=>()=>{q&&clearTimeout(q)},[]);const E=()=>{Eh({transactions:jt,categories:ot,profile:w,cycleDay:d,selectedMonth:r})},$=w?.personOneName??"אלעד",V=w?.personTwoName??"נויה";return o.jsxs(Fx,{children:[o.jsx(Wx,{children:[{val:"both",label:"הכל"},{val:"personOne",label:`${$} 🙋🏽`},{val:"personTwo",label:`${V} 🙋🏽‍♀️`}].map(M=>o.jsx(Ix,{$active:S===M.val,onClick:()=>y(M.val),children:M.label},M.val))}),o.jsx(Px,{children:[{val:"all",label:"הכל"},{val:"expense",label:"הוצאות 📉"},{val:"income",label:"הכנסות 📈"}].map(M=>o.jsx(ty,{$active:L===M.val,$type:M.val,onClick:()=>U(M.val),children:M.label},M.val))}),o.jsx(ey,{children:o.jsxs(ly,{children:[o.jsxs(ny,{children:[o.jsx(ay,{children:"כל העסקאות"}),o.jsxs(iy,{children:[r&&o.jsx(uy,{children:r}),o.jsxs(Tp,{$active:at||Q,onClick:()=>it(M=>!M),children:["🔍 ",Q?"פעיל":"סינון"]}),X.length>0&&o.jsx(Tp,{onClick:E,children:"📊 דוח"})]})]}),at&&o.jsxs(cy,{children:[o.jsx(li,{type:"text",placeholder:"חיפוש לפי שם / תיאור...",value:Z.search,onChange:M=>C("search",M.target.value)}),o.jsxs(Ap,{children:[o.jsx(li,{type:"date",value:Z.dateFrom,onChange:M=>C("dateFrom",M.target.value),style:{textAlign:"left"}}),o.jsx(li,{type:"date",value:Z.dateTo,onChange:M=>C("dateTo",M.target.value),style:{textAlign:"left"}})]}),o.jsxs(oy,{value:Z.category,onChange:M=>C("category",M.target.value),children:[o.jsx("option",{value:"",children:"כל הקטגוריות"}),ot.map(M=>o.jsxs("option",{value:M.id,children:[M.emoji," ",M.label]},M.id))]}),o.jsxs(Ap,{children:[o.jsx(li,{type:"number",placeholder:"מינימום ₪",value:Z.minAmount,onChange:M=>C("minAmount",M.target.value)}),o.jsx(li,{type:"number",placeholder:"מקסימום ₪",value:Z.maxAmount,onChange:M=>C("maxAmount",M.target.value)})]}),Q&&o.jsx(ry,{onClick:lt,children:"נקה סינון ✕"})]}),X.length?X.map(M=>{const g=k(M.type,M.category);return o.jsx(kx,{onDelete:()=>W(M),children:o.jsxs(hy,{children:[o.jsx(gy,{$type:M.type,children:g.emoji}),o.jsxs(my,{onClick:()=>j({page:"edit",tx:M}),children:[o.jsx(by,{children:g.label}),M.description&&o.jsx(xy,{children:M.description}),o.jsxs(yy,{children:[M.date.split("-").reverse().join("/"),M.person&&M.person!=="both"?` · ${M.person==="personOne"?$:V}`:""]})]}),o.jsxs(vy,{$type:M.type,children:[M.type==="income"?"+":"-",F(M.amount)]})]})},M.id)}):o.jsxs(fy,{children:[o.jsx("span",{style:{fontSize:48,marginBottom:8},children:"🌟"}),o.jsx("span",{style:{color:"#4a5568"},children:"אין עסקאות"})]})]})}),H&&o.jsxs(Sy,{children:[o.jsx("span",{children:"עסקה נמחקה"}),o.jsx(jy,{onClick:x,children:"בטל"})]})]})}const Fx=p.div`
  padding: 8px 0 16px;
`,Wx=p.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px 8px;
`,Ix=p.button`
  padding: 7px 14px;
  border-radius: 20px;
  border: 2px solid ${({$active:u})=>u?"#6366f1":"rgba(255,255,255,0.06)"};
  cursor: pointer;
  font-size: 13px;
  font-family: inherit;
  background: ${({$active:u})=>u?"rgba(99,102,241,0.2)":"#161b27"};
  color: ${({$active:u})=>u?"#a5b4fc":"#4a5568"};
  font-weight: ${({$active:u})=>u?700:400};
  transition: all 0.18s;
`,Px=p.div`
  display: flex;
  margin: 0 16px 12px;
  background: #161b27;
  border-radius: 14px;
  padding: 4px;
  border: 1px solid rgba(255,255,255,0.04);
`,ty=p.button`
  flex: 1;
  padding: 8px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.18s;
  background: ${({$active:u,$type:r})=>u?r==="expense"?"linear-gradient(135deg, #f472b6, #e11d48)":r==="income"?"linear-gradient(135deg, #22d3a5, #059669)":"linear-gradient(135deg, #6366f1, #8b5cf6)":"transparent"};
  color: ${({$active:u})=>u?"white":"#4a5568"};
`,ey=p.div`
  padding: 0 16px 16px;
`,ly=p.div`
  background: #161b27;
  border-radius: 20px;
  padding: 18px 16px;
  border: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 2px 16px rgba(0,0,0,0.2);
`,ny=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,ay=p.div`
  font-weight: 700;
  font-size: 17px;
  color: #f0f4ff;
`,iy=p.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,uy=p.span`
  font-size: 11px;
  font-weight: 500;
  color: #a5b4fc;
  background: rgba(99,102,241,0.15);
  padding: 3px 8px;
  border-radius: 10px;
`,Tp=p.button`
  background: ${({$active:u})=>u?"rgba(99,102,241,0.25)":"rgba(255,255,255,0.06)"};
  color: ${({$active:u})=>u?"#a5b4fc":"#8b9dc3"};
  border: none;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  padding: 5px 10px;
  border-radius: 10px;
  transition: all 0.15s;
`,cy=p.div`
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: #0d1117;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.04);
`,Ap=p.div`
  display: flex;
  gap: 8px;
`,li=p.input`
  flex: 1;
  padding: 8px 12px;
  border: 2px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  font-size: 13px;
  font-family: inherit;
  outline: none;
  color: #f0f4ff;
  background: #161b27;
  text-align: right;
  width: 100%;

  &::placeholder { color: #2d3748; }
  &:focus { border-color: #6366f1; }
  &[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.7); }
`,oy=p.select`
  flex: 1;
  padding: 8px 12px;
  border: 2px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  font-size: 13px;
  font-family: inherit;
  outline: none;
  color: #f0f4ff;
  background: #161b27;
  width: 100%;

  &:focus { border-color: #6366f1; }

  option { background: #161b27; }
`,ry=p.button`
  background: rgba(244,114,182,0.15);
  border: none;
  color: #f472b6;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  padding: 6px 14px;
  border-radius: 10px;
  align-self: flex-start;
`,fy=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px 0;
`,sy=p.div`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  &:last-child { border-bottom: none; }
`,dy=p.div`
  position: absolute;
  inset: 0;
  background: rgba(244,114,182,0.15);
  display: flex;
  align-items: center;
  padding-inline-start: 20px;
  opacity: ${({$visible:u})=>u?1:0};
  transition: opacity 0.15s;
  font-size: 20px;
`,py=p.div`
  position: relative;
  background: #161b27;
  transition: ${({$swiping:u})=>u?"none":"transform 0.25s ease"};
  touch-action: pan-y;
  cursor: grab;
`,hy=p.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 12px;
  background: #161b27;
`,gy=p.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${({$type:u})=>u==="income"?"rgba(34,211,165,0.12)":"rgba(99,102,241,0.12)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`,my=p.div`
  flex: 1;
  min-width: 0;
  cursor: pointer;
`,by=p.div`
  font-weight: 600;
  font-size: 14px;
  color: #f0f4ff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,xy=p.div`
  font-size: 12px;
  color: #8b9dc3;
  margin-top: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,yy=p.div`
  font-size: 11px;
  color: #4a5568;
  margin-top: 2px;
`,vy=p.div`
  font-weight: 700;
  font-size: 15px;
  color: ${({$type:u})=>u==="income"?"#22d3a5":"#f472b6"};
  flex-shrink: 0;
`,Sy=p.div`
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  background: #1e2535;
  border: 1px solid rgba(99,102,241,0.2);
  color: white;
  padding: 11px 18px;
  border-radius: 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  z-index: 1000;
  white-space: nowrap;
`,jy=p.button`
  background: rgba(99,102,241,0.2);
  border: none;
  color: #a5b4fc;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  font-family: inherit;
  padding: 4px 10px;
  border-radius: 10px;
`,zy=["🛒","🏠","🚗","📚","🤖","🎉","🏥","💊","🛍️","🔔","🏋","💍","🐷","📦","💼","🎁","➕","✈️","🍕","☕","🎮","💅","🐶","🌿","💡","🎓","🏖️","💳","🎵","📱"];function Ty({categories:u,setCategories:r,budgets:d,setBudgets:f,transactions:h,selectedMonth:j}){const[D,w]=nt.useState("expense"),[S,y]=nt.useState(!1),[L,U]=nt.useState(null),[H,J]=nt.useState({name:"",emoji:"📦",type:"expense"}),[q,I]=nt.useState(null),at=u.filter(C=>C.type===D),it=C=>(j?h.filter(lt=>new Intl.DateTimeFormat("he-IL",{month:"long",year:"numeric"}).format(new Date(lt.date))===j):h).filter(lt=>lt.category===C&&lt.type==="expense").reduce((lt,k)=>lt+Number(k.amount),0),Z=C=>new Intl.NumberFormat("he-IL",{style:"currency",currency:"ILS",maximumFractionDigits:0}).format(C),st=()=>{U(null),J({name:"",emoji:"📦",type:D}),y(!0)},ot=C=>{U(C),J({name:C.label,emoji:C.emoji,type:C.type,budget:d[C.id]??""}),y(!0)},tt=()=>{if(H.name.trim()){if(L){if(r(C=>C.map(Q=>Q.id===L.id?{...Q,label:H.name.trim(),emoji:H.emoji,type:H.type}:Q)),H.budget){const C=parseFloat(H.budget);C>0?f(Q=>({...Q,[L.id]:C})):f(Q=>{const lt={...Q};return delete lt[L.id],lt})}}else{const C=`cat_${Date.now()}`;if(r(Q=>[...Q,{id:C,label:H.name.trim(),emoji:H.emoji,type:H.type}]),H.budget){const Q=parseFloat(H.budget);Q>0&&f(lt=>({...lt,[C]:Q}))}}y(!1)}},rt=()=>{q&&(r(C=>C.filter(Q=>Q.id!==q.id)),f(C=>{const Q={...C};return delete Q[q.id],Q}),I(null))};return o.jsxs(Ay,{children:[o.jsxs(Ey,{children:[o.jsx(Cy,{children:"קטגוריות"}),o.jsx(Oy,{onClick:st,children:"+"})]}),o.jsxs(My,{children:[o.jsx(Ep,{$active:D==="expense",onClick:()=>w("expense"),children:"הוצאות 📉"}),o.jsx(Ep,{$active:D==="income",onClick:()=>w("income"),children:"הכנסות 📈"})]}),o.jsxs(Dy,{children:[at.length===0&&o.jsxs(_y,{children:[o.jsx("span",{style:{fontSize:48,marginBottom:8},children:"🏷️"}),o.jsx("span",{style:{color:"#4a5568"},children:"אין קטגוריות עדיין"}),o.jsx(Ny,{onClick:st,children:"+ הוסף קטגוריה"})]}),at.map(C=>{const Q=it(C.id),lt=d[C.id],k=lt?Math.min(100,Q/lt*100):0,F=lt?k>=100?"over":k>=80?"warn":"ok":null;return o.jsx(wy,{children:o.jsxs(Ry,{children:[o.jsx(Uy,{children:C.emoji}),o.jsxs(By,{children:[o.jsx(Hy,{children:C.label}),D==="expense"&&o.jsx(Yy,{children:Q>0?o.jsxs("span",{style:{color:F==="over"?"#f472b6":F==="warn"?"#fbbf24":"#a5b4fc"},children:[Z(Q)," ",lt?`/ ${Z(lt)}`:""]}):o.jsx("span",{style:{color:"#4a5568"},children:"אין הוצאות החודש"})}),lt&&D==="expense"&&o.jsx(qy,{children:o.jsx(Gy,{style:{width:`${k}%`},$status:F})})]}),o.jsxs(Ly,{children:[o.jsx($y,{onClick:()=>ot(C),children:"✏️"}),o.jsx(Xy,{onClick:()=>I(C),children:"🗑️"})]})]})},C.id)})]}),S&&o.jsx(Cp,{onClick:()=>y(!1),children:o.jsxs(Qy,{onClick:C=>C.stopPropagation(),children:[o.jsxs(Zy,{children:[o.jsx("span",{children:L?"עריכת קטגוריה":"קטגוריה חדשה"}),o.jsx(Vy,{onClick:()=>y(!1),children:"✕"})]}),o.jsxs(Ky,{children:[o.jsxs(Du,{children:[o.jsx(_u,{children:"סוג"}),o.jsx(ky,{children:[{val:"expense",label:"הוצאה 📉"},{val:"income",label:"הכנסה 📈"}].map(C=>o.jsx(Jy,{$active:H.type===C.val,$type:C.val,onClick:()=>J(Q=>({...Q,type:C.val})),children:C.label},C.val))})]}),o.jsxs(Du,{children:[o.jsx(_u,{children:"אמוג׳י"}),o.jsx(Fy,{children:zy.map(C=>o.jsx(Wy,{$active:H.emoji===C,onClick:()=>J(Q=>({...Q,emoji:C})),children:C},C))})]}),o.jsxs(Du,{children:[o.jsx(_u,{children:"שם קטגוריה"}),o.jsx(Op,{placeholder:"לדוגמה: חינוך...",value:H.name,onChange:C=>J(Q=>({...Q,name:C.target.value}))})]}),H.type==="expense"&&o.jsxs(Du,{children:[o.jsx(_u,{children:"גבול תקציב חודשי (₪)"}),o.jsx(Op,{type:"number",placeholder:"ללא גבול",value:H.budget??"",onChange:C=>J(Q=>({...Q,budget:C.target.value})),style:{direction:"ltr",textAlign:"right"}})]})]}),o.jsx(Iy,{children:o.jsx(Py,{onClick:tt,disabled:!H.name.trim(),children:L?"שמור שינויים ✓":"הוסף קטגוריה ✓"})})]})}),q&&o.jsx(Cp,{onClick:()=>I(null),children:o.jsxs(t2,{onClick:C=>C.stopPropagation(),children:[o.jsx(e2,{children:q.emoji}),o.jsxs(l2,{children:['למחוק את "',q.label,'"?']}),o.jsx(n2,{children:"פעולה זו לא ניתנת לביטול"}),o.jsxs(a2,{children:[o.jsx(i2,{onClick:()=>I(null),children:"ביטול"}),o.jsx(u2,{onClick:rt,children:"מחק"})]})]})})]})}const Ay=p.div`
  padding: 16px 16px 24px;
`,Ey=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Cy=p.div`
  font-size: 22px;
  font-weight: 800;
  color: #f0f4ff;
  letter-spacing: -0.5px;
`,Oy=p.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(99,102,241,0.4);
  line-height: 1;
  padding-bottom: 1px;

  &:active { transform: scale(0.9); }
`,My=p.div`
  display: flex;
  background: #161b27;
  border-radius: 14px;
  padding: 4px;
  margin-bottom: 16px;
  border: 1px solid rgba(255,255,255,0.04);
`,Ep=p.button`
  flex: 1;
  padding: 9px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.18s;
  background: ${({$active:u})=>u?"linear-gradient(135deg, #6366f1, #8b5cf6)":"transparent"};
  color: ${({$active:u})=>u?"white":"#4a5568"};
  box-shadow: ${({$active:u})=>u?"0 4px 12px rgba(0,0,0,0.3)":"none"};
`,Dy=p.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,_y=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  gap: 8px;
`,Ny=p.button`
  margin-top: 12px;
  padding: 10px 20px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
`,wy=p.div`
  background: #161b27;
  border-radius: 16px;
  padding: 14px;
  border: 1px solid rgba(255,255,255,0.04);
`,Ry=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Uy=p.div`
  font-size: 28px;
  flex-shrink: 0;
`,By=p.div`
  flex: 1;
  min-width: 0;
`,Hy=p.div`
  font-weight: 600;
  font-size: 15px;
  color: #f0f4ff;
`,Yy=p.div`
  font-size: 12px;
  margin-top: 2px;
`,qy=p.div`
  height: 4px;
  background: #0d1117;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 6px;
`,Gy=p.div`
  height: 100%;
  background: ${({$status:u})=>u==="over"?"linear-gradient(90deg,#f472b6,#e11d48)":u==="warn"?"linear-gradient(90deg,#fbbf24,#f59e0b)":"linear-gradient(90deg,#6366f1,#8b5cf6)"};
  border-radius: 4px;
  transition: width 0.4s ease;
`,Ly=p.div`
  display: flex;
  gap: 6px;
  flex-shrink: 0;
`,$y=p.button`
  background: rgba(255,255,255,0.06);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Xy=p.button`
  background: rgba(244,114,182,0.1);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Cp=p.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  z-index: 500;
  display: flex;
  align-items: flex-end;
`,Qy=p.div`
  background: #161b27;
  border-radius: 24px 24px 0 0;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(99,102,241,0.2);
`,Zy=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 12px;
  font-weight: 700;
  font-size: 17px;
  color: #f0f4ff;
  border-bottom: 1px solid rgba(255,255,255,0.06);
`,Vy=p.button`
  background: rgba(255,255,255,0.08);
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 13px;
  color: #8b9dc3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
`,Ky=p.div`
  overflow-y: auto;
  padding: 16px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Du=p.div``,_u=p.div`
  font-size: 11px;
  font-weight: 600;
  color: #8b9dc3;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-bottom: 8px;
`,ky=p.div`
  display: flex;
  gap: 8px;
`,Jy=p.button`
  flex: 1;
  padding: 10px 0;
  border: 2px solid ${({$active:u})=>u?"#6366f1":"rgba(255,255,255,0.06)"};
  border-radius: 12px;
  background: ${({$active:u})=>u?"rgba(99,102,241,0.15)":"#1e2535"};
  color: ${({$active:u})=>u?"#a5b4fc":"#4a5568"};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s;
`,Fy=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Wy=p.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid ${({$active:u})=>u?"#6366f1":"rgba(255,255,255,0.06)"};
  background: ${({$active:u})=>u?"rgba(99,102,241,0.2)":"#1e2535"};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.12s;

  &:active { transform: scale(0.9); }
`,Op=p.input`
  width: 100%;
  padding: 12px 14px;
  border: 2px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  background: #1e2535;
  color: #f0f4ff;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  text-align: right;

  &::placeholder { color: #2d3748; }
  &:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }
`,Iy=p.div`
  padding: 14px 20px calc(14px + env(safe-area-inset-bottom));
  border-top: 1px solid rgba(255,255,255,0.06);
`,Py=p.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 4px 16px rgba(99,102,241,0.35);
  opacity: ${({disabled:u})=>u?.5:1};
`,t2=p.div`
  background: #161b27;
  border-radius: 24px 24px 0 0;
  width: 100%;
  padding: 28px 24px calc(28px + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-top: 1px solid rgba(244,114,182,0.2);
`,e2=p.div`
  font-size: 48px;
  margin-bottom: 12px;
`,l2=p.div`
  font-size: 18px;
  font-weight: 700;
  color: #f0f4ff;
  margin-bottom: 6px;
`,n2=p.div`
  font-size: 13px;
  color: #8b9dc3;
  margin-bottom: 24px;
`,a2=p.div`
  display: flex;
  gap: 12px;
  width: 100%;
`,i2=p.button`
  flex: 1;
  padding: 13px;
  border: 2px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  background: transparent;
  color: #8b9dc3;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
`,u2=p.button`
  flex: 1;
  padding: 13px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #f472b6, #e11d48);
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 4px 16px rgba(244,114,182,0.3);
`,Mp=[{val:"ILS",symbol:"₪",label:"שקל (₪)"},{val:"USD",symbol:"$",label:"דולר ($)"},{val:"EUR",symbol:"€",label:"יורו (€)"}];function c2({profile:u,setProfile:r,transactions:d,categories:f,setTransactions:h,setRecurringTemplates:j}){const[D,w]=nt.useState(null),[S,y]=nt.useState(""),[L,U]=nt.useState(!1),[H,J]=nt.useState({personOneMonthlyIncome:u.personOneMonthlyIncome,personTwoMonthlyIncome:u.personTwoMonthlyIncome}),[q,I]=nt.useState(!1),[at,it]=nt.useState({currency:u.currency,monthCycleDay:u.monthCycleDay??1}),[Z,st]=nt.useState(!1),ot=u.personOneName,tt=u.personTwoName,rt=()=>{r(z=>({...z,...H})),I(!0),setTimeout(()=>I(!1),2e3)},C=()=>{const z=Math.min(28,Math.max(1,parseInt(at.monthCycleDay)||1));r(K=>({...K,currency:at.currency,monthCycleDay:z})),st(!0),setTimeout(()=>st(!1),2e3)},Q=(Number(H.personOneMonthlyIncome)||0)+(Number(H.personTwoMonthlyIncome)||0),lt=Q*.1,k=f.filter(z=>z.type==="expense"),F=z=>`${Mp.find(ct=>ct.val===u.currency)?.symbol??"₪"}${Number(z).toLocaleString("he-IL")}`,jt=z=>{w(z),y(z==="personOne"?ot:tt)},bt=()=>{S.trim()&&(r(z=>({...z,[D==="personOne"?"personOneName":"personTwoName"]:S.trim()})),w(null))},X=()=>{const z=u.monthCycleDay??1,K=[];for(let dt=0;dt<12;dt++){const Rt=new Date;Rt.setDate(z),Rt.setMonth(Rt.getMonth()-dt);const Tt=`${Rt.getFullYear()}-${String(Rt.getMonth()+1).padStart(2,"0")}-${String(z).padStart(2,"0")}`;K.push(Xe(Tt,z))}const ct=d.filter(dt=>K.includes(Xe(dt.date,z)));Eh({transactions:ct,categories:f,profile:u,cycleDay:z})},W=()=>{h([]),j([]),U(!1)},E=(()=>{const z=u.monthCycleDay??1,K=[];for(let ct=5;ct>=0;ct--){const dt=new Date;dt.setDate(z),dt.setMonth(dt.getMonth()-ct);const Rt=`${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,"0")}-${String(z).padStart(2,"0")}`,Tt=Xe(Rt,z),ue=Tt.split("–")[0].trim().split(" ")[0].slice(0,4),Ll=d.filter(Pt=>Xe(Pt.date,z)===Tt),ia=Ll.filter(Pt=>Pt.type==="income").reduce((Pt,$l)=>Pt+Number($l.amount),0),ri=Ll.filter(Pt=>Pt.type==="expense").reduce((Pt,$l)=>Pt+Number($l.amount),0);K.push({label:Tt,shortLabel:ue,income:ia,expense:ri})}return K})(),$=Math.max(...E.flatMap(z=>[z.income,z.expense]),1),V=k.map(z=>({...z,total:d.filter(K=>K.type==="expense"&&K.category===z.id).reduce((K,ct)=>K+Number(ct.amount),0)})).filter(z=>z.total>0).sort((z,K)=>K.total-z.total),M=V.reduce((z,K)=>z+K.total,0),g=V[0],_=d.filter(z=>z.type==="income").reduce((z,K)=>z+Number(K.amount),0),G=d.filter(z=>z.type==="expense").reduce((z,K)=>z+Number(K.amount),0);return o.jsxs(o2,{children:[o.jsx(r2,{children:"פרופיל"}),o.jsxs(on,{children:[o.jsx(rn,{children:"אנשים"}),o.jsx(f2,{children:[{key:"personOne",name:ot,emoji:"🙋🏽"},{key:"personTwo",name:tt,emoji:"🙋🏽‍♀️"}].map(z=>o.jsxs(s2,{onClick:()=>jt(z.key),children:[o.jsx(d2,{children:z.name.charAt(0).toUpperCase()}),o.jsx(p2,{children:z.name}),o.jsx(h2,{children:z.emoji}),o.jsx(g2,{children:"לחץ לעריכה ✏️"})]},z.key))})]}),o.jsxs(on,{children:[o.jsx(rn,{children:"הכנסה חודשית צפויה"}),o.jsxs(v2,{children:[o.jsxs(wp,{children:[o.jsx(Rp,{children:ot}),o.jsx(Up,{type:"number",placeholder:"0 ₪",value:H.personOneMonthlyIncome,onChange:z=>J(K=>({...K,personOneMonthlyIncome:z.target.value}))})]}),o.jsxs(wp,{children:[o.jsx(Rp,{children:tt}),o.jsx(Up,{type:"number",placeholder:"0 ₪",value:H.personTwoMonthlyIncome,onChange:z=>J(K=>({...K,personTwoMonthlyIncome:z.target.value}))})]})]}),o.jsx(m2,{onClick:rt,$saved:q,children:q?"✓ נשמר!":"שמור"}),Q>0&&o.jsxs(b2,{children:[o.jsxs(Dp,{children:[o.jsx(_p,{children:"סה״כ הכנסה משולבת"}),o.jsx(Np,{children:F(Q)})]}),o.jsx(x2,{}),o.jsxs(Dp,{children:[o.jsx(_p,{children:"🕊️ מעשרות (10%)"}),o.jsx(Np,{$highlight:!0,children:F(lt)})]}),o.jsxs(y2,{children:["יש להעביר ",F(lt)," בחודש"]})]})]}),o.jsxs(on,{children:[o.jsx(rn,{children:"הגדרות"}),o.jsxs(A2,{children:[o.jsx(Bp,{children:"מטבע"}),o.jsx(E2,{value:at.currency,onChange:z=>it(K=>({...K,currency:z.target.value})),children:Mp.map(z=>o.jsx("option",{value:z.val,children:z.label},z.val))})]}),o.jsxs(S2,{children:[o.jsxs("div",{children:[o.jsx(Bp,{children:"יום תחילת חודש"}),o.jsxs(z2,{children:["חודש מתחיל ב-",at.monthCycleDay," לכל חודש"]})]}),o.jsx(T2,{type:"number",min:"1",max:"28",value:at.monthCycleDay,onChange:z=>it(K=>({...K,monthCycleDay:z.target.value}))})]}),o.jsx(j2,{onClick:C,$saved:Z,children:Z?"✓ נשמר!":"שמור הגדרות"})]}),d.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(on,{children:[o.jsx(rn,{children:"סיכום כולל"}),o.jsxs(C2,{children:[o.jsxs(Hp,{children:[o.jsx(Yp,{style:{color:"#22d3a5"},children:F(_)}),o.jsx(qp,{children:"סה״כ הכנסות"})]}),o.jsxs(Hp,{children:[o.jsx(Yp,{style:{color:"#f472b6"},children:F(G)}),o.jsx(qp,{children:"סה״כ הוצאות"})]})]}),g&&o.jsxs(O2,{children:[o.jsx("span",{style:{fontSize:24},children:g.emoji}),o.jsxs(M2,{children:[o.jsx(D2,{children:"קטגוריה מובילה"}),o.jsxs(_2,{children:[g.label," — ",F(g.total)]})]})]})]}),o.jsxs(on,{children:[o.jsx(rn,{children:"6 חודשים אחרונים"}),o.jsx(N2,{children:E.map((z,K)=>o.jsxs(w2,{children:[o.jsxs(R2,{children:[o.jsx(Gp,{style:{height:`${z.income/$*80}px`},$color:"#22d3a5",title:`הכנסות: ${F(z.income)}`}),o.jsx(Gp,{style:{height:`${z.expense/$*80}px`},$color:"#f472b6",title:`הוצאות: ${F(z.expense)}`})]}),o.jsx(U2,{children:z.shortLabel})]},K))}),o.jsxs(B2,{children:[o.jsx(Lp,{$color:"#22d3a5",children:"הכנסות"}),o.jsx(Lp,{$color:"#f472b6",children:"הוצאות"})]})]}),V.length>0&&o.jsxs(on,{children:[o.jsx(rn,{children:"פירוט הוצאות (כולל)"}),V.slice(0,6).map(z=>o.jsxs(H2,{children:[o.jsxs(Y2,{children:[o.jsx("span",{style:{fontSize:20},children:z.emoji}),o.jsx("span",{style:{color:"#c7d2e8",fontSize:13,fontWeight:500},children:z.label})]}),o.jsxs(q2,{children:[o.jsx(G2,{children:F(z.total)}),o.jsxs(L2,{children:[M>0?Math.round(z.total/M*100):0,"%"]})]})]},z.id))]})]}),o.jsxs(on,{children:[o.jsx(rn,{children:"ניהול נתונים"}),o.jsx($p,{onClick:X,children:"📊 ייצוא דוח מלא (HTML)"}),o.jsx($p,{$danger:!0,onClick:()=>U(!0),children:"🗑️ מחק את כל הנתונים"})]}),D&&o.jsx(Xp,{onClick:()=>w(null),children:o.jsxs($2,{onClick:z=>z.stopPropagation(),children:[o.jsxs(X2,{children:[o.jsx("span",{children:"עריכת שם"}),o.jsx(Q2,{onClick:()=>w(null),children:"✕"})]}),o.jsx(Z2,{children:o.jsx(V2,{placeholder:"שם...",value:S,onChange:z=>y(z.target.value),autoFocus:!0})}),o.jsx(K2,{children:o.jsx(k2,{onClick:bt,disabled:!S.trim(),children:"שמור ✓"})})]})}),L&&o.jsx(Xp,{onClick:()=>U(!1),children:o.jsxs(J2,{onClick:z=>z.stopPropagation(),children:[o.jsx(F2,{children:"⚠️"}),o.jsx(W2,{children:"מחק את כל הנתונים?"}),o.jsx(I2,{children:"כל העסקאות וההכנסות החוזרות יימחקו לצמיתות"}),o.jsxs(P2,{children:[o.jsx(tv,{onClick:()=>U(!1),children:"ביטול"}),o.jsx(ev,{onClick:W,children:"מחק הכל"})]})]})})]})}const o2=p.div`
  padding: 16px 16px 32px;
`,r2=p.div`
  font-size: 22px;
  font-weight: 800;
  color: #f0f4ff;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`,on=p.div`
  background: #161b27;
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 14px;
  border: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 2px 16px rgba(0,0,0,0.2);
`,rn=p.div`
  font-weight: 700;
  font-size: 15px;
  color: #f0f4ff;
  margin-bottom: 14px;
`,f2=p.div`
  display: flex;
  gap: 12px;
`,s2=p.div`
  flex: 1;
  background: #1e2535;
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgba(99,102,241,0.1);
  transition: border-color 0.15s;

  &:active { border-color: rgba(99,102,241,0.4); }
`,d2=p.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
`,p2=p.div`
  font-weight: 700;
  font-size: 15px;
  color: #f0f4ff;
  margin-bottom: 2px;
`,h2=p.div`
  font-size: 18px;
  margin-bottom: 4px;
`,g2=p.div`
  font-size: 11px;
  color: #4a5568;
`,m2=p.button`
  width: 100%;
  margin-top: 12px;
  padding: 11px;
  border: none;
  border-radius: 12px;
  background: ${({$saved:u})=>u?"linear-gradient(135deg, #22d3a5, #059669)":"linear-gradient(135deg, #6366f1, #8b5cf6)"};
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.3s;
`,b2=p.div`
  margin-top: 14px;
  background: rgba(99,102,241,0.07);
  border: 1px solid rgba(99,102,241,0.18);
  border-radius: 14px;
  padding: 14px;
`,Dp=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`,_p=p.div`
  font-size: 13px;
  color: #8b9dc3;
  font-weight: 500;
`,Np=p.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({$highlight:u})=>u?"#a5b4fc":"#f0f4ff"};
`,x2=p.div`
  height: 1px;
  background: rgba(255,255,255,0.06);
  margin: 8px 0;
`,y2=p.div`
  font-size: 12px;
  color: #6366f1;
  font-weight: 600;
  margin-top: 8px;
  text-align: center;
`,v2=p.div`
  display: flex;
  gap: 12px;
`,wp=p.div`
  flex: 1;
`,Rp=p.div`
  font-size: 12px;
  color: #8b9dc3;
  margin-bottom: 6px;
  font-weight: 500;
`,Up=p.input`
  width: 100%;
  padding: 10px 12px;
  border: 2px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  background: #1e2535;
  color: #f0f4ff;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  text-align: right;
  direction: ltr;

  &::placeholder { color: #2d3748; }
  &:focus { border-color: #6366f1; }
`,S2=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  padding: 12px 14px;
  background: rgba(99,102,241,0.06);
  border: 1px solid rgba(99,102,241,0.12);
  border-radius: 14px;
`,j2=p.button`
  width: 100%;
  margin-top: 14px;
  padding: 11px;
  border: none;
  border-radius: 12px;
  background: ${({$saved:u})=>u?"linear-gradient(135deg, #22d3a5, #059669)":"linear-gradient(135deg, #6366f1, #8b5cf6)"};
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.3s;
`,z2=p.div`
  font-size: 11px;
  color: #4a5568;
  margin-top: 2px;
`,T2=p.input`
  width: 56px;
  padding: 8px 10px;
  border: 2px solid rgba(99,102,241,0.2);
  border-radius: 10px;
  background: #1e2535;
  color: #f0f4ff;
  font-size: 16px;
  font-weight: 700;
  font-family: inherit;
  outline: none;
  text-align: center;

  &:focus { border-color: #6366f1; }
`,A2=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Bp=p.div`
  font-size: 14px;
  color: #c7d2e8;
  font-weight: 500;
`,E2=p.select`
  padding: 8px 12px;
  border: 2px solid rgba(99,102,241,0.2);
  border-radius: 10px;
  background: #1e2535;
  color: #f0f4ff;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  cursor: pointer;

  &:focus { border-color: #6366f1; }
  option { background: #161b27; }
`,C2=p.div`
  display: flex;
  gap: 12px;
  margin-bottom: 14px;
`,Hp=p.div`
  flex: 1;
  background: #1e2535;
  border-radius: 14px;
  padding: 12px;
  text-align: center;
`,Yp=p.div`
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 4px;
`,qp=p.div`
  font-size: 11px;
  color: #8b9dc3;
`,O2=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(99,102,241,0.08);
  border: 1px solid rgba(99,102,241,0.15);
  border-radius: 14px;
`,M2=p.div``,D2=p.div`
  font-size: 11px;
  color: #8b9dc3;
  font-weight: 500;
`,_2=p.div`
  font-size: 14px;
  font-weight: 700;
  color: #f0f4ff;
`,N2=p.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 100px;
  padding-bottom: 24px;
  position: relative;
`,w2=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  position: relative;
`,R2=p.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 80px;
`,Gp=p.div`
  width: 10px;
  border-radius: 4px 4px 0 0;
  background: ${({$color:u})=>u};
  min-height: 3px;
  transition: height 0.4s ease;
  opacity: 0.85;
`,U2=p.div`
  font-size: 10px;
  color: #4a5568;
  position: absolute;
  bottom: -20px;
  white-space: nowrap;
`,B2=p.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 8px;
`,Lp=p.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #8b9dc3;

  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background: ${({$color:u})=>u};
  }
`,H2=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  &:last-child { border-bottom: none; }
`,Y2=p.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,q2=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,G2=p.div`
  font-size: 14px;
  font-weight: 600;
  color: #f472b6;
`,L2=p.div`
  font-size: 12px;
  color: #4a5568;
  min-width: 30px;
  text-align: left;
`,$p=p.button`
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 14px;
  background: ${({$danger:u})=>u?"rgba(244,114,182,0.1)":"rgba(99,102,241,0.1)"};
  color: ${({$danger:u})=>u?"#f472b6":"#a5b4fc"};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  margin-bottom: 8px;
  border: 1px solid ${({$danger:u})=>u?"rgba(244,114,182,0.15)":"rgba(99,102,241,0.15)"};
  transition: all 0.15s;
  text-align: center;

  &:last-child { margin-bottom: 0; }
  &:active { opacity: 0.8; }
`,Xp=p.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  z-index: 500;
  display: flex;
  align-items: flex-end;
`,$2=p.div`
  background: #161b27;
  border-radius: 24px 24px 0 0;
  width: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(99,102,241,0.2);
`,X2=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 12px;
  font-weight: 700;
  font-size: 17px;
  color: #f0f4ff;
  border-bottom: 1px solid rgba(255,255,255,0.06);
`,Q2=p.button`
  background: rgba(255,255,255,0.08);
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 13px;
  color: #8b9dc3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
`,Z2=p.div`
  padding: 16px 20px;
  flex: 1;
`,V2=p.input`
  width: 100%;
  padding: 14px;
  border: 2px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  background: #1e2535;
  color: #f0f4ff;
  font-size: 18px;
  font-family: inherit;
  outline: none;
  text-align: right;

  &::placeholder { color: #2d3748; }
  &:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }
`,K2=p.div`
  padding: 14px 20px calc(14px + env(safe-area-inset-bottom));
  border-top: 1px solid rgba(255,255,255,0.06);
`,k2=p.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 4px 16px rgba(99,102,241,0.35);
  opacity: ${({disabled:u})=>u?.5:1};
`,J2=p.div`
  background: #161b27;
  border-radius: 24px 24px 0 0;
  width: 100%;
  padding: 28px 24px calc(28px + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-top: 1px solid rgba(244,114,182,0.2);
`,F2=p.div`
  font-size: 48px;
  margin-bottom: 12px;
`,W2=p.div`
  font-size: 18px;
  font-weight: 700;
  color: #f0f4ff;
  margin-bottom: 6px;
`,I2=p.div`
  font-size: 13px;
  color: #8b9dc3;
  margin-bottom: 24px;
`,P2=p.div`
  display: flex;
  gap: 12px;
  width: 100%;
`,tv=p.button`
  flex: 1;
  padding: 13px;
  border: 2px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  background: transparent;
  color: #8b9dc3;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
`,ev=p.button`
  flex: 1;
  padding: 13px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #f472b6, #e11d48);
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 4px 16px rgba(244,114,182,0.3);
`;function lv({recurringTemplates:u,setActivityPage:r,categories:d,profile:f,onDeleteTemplate:h}){const j=f?.personOneName??"אלעד",D=f?.personTwoName??"נויה",w=H=>H==="personOne"?j:H==="personTwo"?D:`${j} · ${D}`,S=H=>d?.find(J=>J.id===H),y=u.filter(H=>H.type==="income"),L=u.filter(H=>H.type==="expense"),U=H=>H.map(J=>{const q=S(J.category);return o.jsxs(cv,{children:[o.jsxs(ov,{children:[o.jsx(rv,{children:q?.emoji??"🔄"}),o.jsxs(fv,{children:[o.jsx(sv,{children:q?.label??J.category}),o.jsxs(dv,{children:[w(J.person),J.description?` • ${J.description}`:""]})]})]}),o.jsxs(pv,{children:[o.jsxs(hv,{$type:J.type,children:[J.type==="expense"?"-":"+",Number(J.amount).toLocaleString("he-IL")," ₪"]}),o.jsxs(gv,{children:[o.jsx(Kp,{onClick:()=>r({page:"edit-recurring",tx:J}),children:"✎"}),o.jsx(Kp,{$danger:!0,onClick:()=>h(J.id),children:"🗑"})]})]})]},J.id)});return o.jsxs(nv,{children:[o.jsxs(av,{children:[o.jsx(iv,{children:"הוראות קבע"}),o.jsx(uv,{onClick:()=>r("add-recurring"),children:"+ הוסף"})]}),u.length===0?o.jsxs(mv,{children:[o.jsx(bv,{children:"🔄"}),o.jsx(xv,{children:"אין הוראות קבע עדיין"}),o.jsx(yv,{onClick:()=>r("add-recurring"),children:"הוסף ראשונה"})]}):o.jsxs(o.Fragment,{children:[y.length>0&&o.jsxs(Qp,{children:[o.jsx(Zp,{children:"הכנסות קבועות"}),o.jsx(Vp,{children:U(y)})]}),L.length>0&&o.jsxs(Qp,{children:[o.jsx(Zp,{children:"הוצאות קבועות"}),o.jsx(Vp,{children:U(L)})]})]})]})}const nv=p.div`
  padding: 16px 16px 24px;
`,av=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,iv=p.div`
  font-size: 22px;
  font-weight: 800;
  color: #f0f4ff;
`,uv=p.button`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
`,Qp=p.div`
  margin-bottom: 20px;
`,Zp=p.div`
  font-size: 12px;
  font-weight: 600;
  color: #8b9dc3;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`,Vp=p.div`
  background: #161b27;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.05);
  overflow: hidden;
`,cv=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.04);

  &:last-child {
    border-bottom: none;
  }
`,ov=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,rv=p.div`
  font-size: 22px;
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,fv=p.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,sv=p.div`
  font-size: 14px;
  font-weight: 600;
  color: #f0f4ff;
`,dv=p.div`
  font-size: 12px;
  color: #8b9dc3;
`,pv=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
`,hv=p.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({$type:u})=>u==="income"?"#22d3a5":"#f472b6"};
`,gv=p.div`
  display: flex;
  gap: 6px;
`,Kp=p.button`
  background: ${({$danger:u})=>u?"rgba(244,114,182,0.1)":"rgba(99,102,241,0.1)"};
  color: ${({$danger:u})=>u?"#f472b6":"#a5b4fc"};
  border: none;
  border-radius: 8px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
`,mv=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 60px 20px;
`,bv=p.div`
  font-size: 48px;
  opacity: 0.4;
`,xv=p.div`
  font-size: 16px;
  color: #8b9dc3;
  font-weight: 500;
`,yv=p.button`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
`;function vv({activePage:u,setActivityPage:r,toast:d,setToast:f,selectedMonth:h,setSelectedMonth:j,cycleDay:D,budgets:w,setBudgets:S,transactions:y,setTransactions:L,addTransaction:U,replaceTransaction:H,removeTransaction:J,restoreTransaction:q,recurringTemplates:I,setRecurringTemplates:at,addRecurring:it,replaceRecurring:Z,removeRecurring:st,visibleTransactions:ot,categories:tt,setCategories:rt,profile:C,setProfile:Q}){const[lt,k]=nt.useState(null),F=W=>{if(W.recurring){const{recurring:x,...E}=W;it({...E,recurring:!0})}else U(W)},jt=W=>{if(W.startsWith("recurring-")){const x=W.split("-").slice(1,-1).join("-");st(x)}else J(W)},bt=W=>{W._isRecurringVirtual||q(W)},X=W=>{W&&typeof W=="object"&&W.page==="edit"?(k(W.tx),r("edit")):W&&typeof W=="object"&&W.page==="edit-recurring"?(k(W.tx),r("edit-recurring")):W==="add-recurring"?(k(null),r("add-recurring")):(k(null),r(W))};return o.jsxs(Sv,{children:[u==="dashboard"&&o.jsx(Bb,{transactions:ot,allTransactions:ot,setActivityPage:X,budgets:w,setBudgets:S,selectedMonth:h,setSelectedMonth:j,cycleDay:D,categories:tt,profile:C}),u==="add"&&o.jsx(Mu,{setActivityPage:X,toast:d,setToast:f,addTransaction:F,categories:tt,profile:C}),u==="edit"&&lt&&o.jsx(Mu,{setActivityPage:X,toast:d,setToast:f,editTx:lt,replaceTransaction:H,categories:tt,profile:C}),u==="recurring"&&o.jsx(lv,{recurringTemplates:I,setActivityPage:X,categories:tt,profile:C,onDeleteTemplate:W=>st(W)}),u==="add-recurring"&&o.jsx(Mu,{setActivityPage:X,toast:d,setToast:f,addTransaction:F,categories:tt,profile:C,recurringLocked:!0}),u==="edit-recurring"&&lt&&o.jsx(Mu,{setActivityPage:X,toast:d,setToast:f,editTx:lt,replaceTransaction:Z,categories:tt,profile:C,recurringLocked:!0}),u==="history"&&o.jsx(Jx,{transactions:ot,selectedMonth:h,cycleDay:D,removeTransaction:jt,restoreTransaction:bt,setActivityPage:X,categories:tt,profile:C}),u==="categories"&&o.jsx(Ty,{categories:tt,setCategories:rt,budgets:w,setBudgets:S,transactions:ot,selectedMonth:h,cycleDay:D}),u==="profile"&&o.jsx(c2,{profile:C,setProfile:Q,transactions:ot,categories:tt,setTransactions:L,setRecurringTemplates:at})]})}const Sv=p.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`,Nu=[{val:"dashboard",label:"בית",icon:"🏠"},{val:"history",label:"היסטוריה",icon:"📋"},{val:"recurring",label:"קבוע",icon:"🔄"},{val:"categories",label:"קטגוריות",icon:"🏷️"}];function jv({activePage:u,onPageChange:r}){const d=[Nu[0],Nu[1]],f=[Nu[2],Nu[3]];return o.jsxs(zv,{children:[d.map(h=>o.jsxs(kp,{$active:u===h.val,onClick:()=>r(h.val),children:[o.jsx(Fp,{children:h.icon}),o.jsx(Ar,{$active:u===h.val,children:h.label}),u===h.val&&o.jsx(Jp,{})]},h.val)),o.jsxs(Tv,{children:[o.jsx(Av,{$active:u==="add",onClick:()=>r("add"),children:o.jsx(Ev,{$active:u==="add",children:"+"})}),o.jsx(Ar,{$active:u==="add",style:{marginTop:4},children:"הוסף"})]}),f.map(h=>o.jsxs(kp,{$active:u===h.val,onClick:()=>r(h.val),children:[o.jsx(Fp,{children:h.icon}),o.jsx(Ar,{$active:u===h.val,children:h.label}),u===h.val&&o.jsx(Jp,{})]},h.val))]})}const zv=p.div`
  flex-shrink: 0;
  background: rgba(13, 17, 23, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(99, 102, 241, 0.12);
  display: flex;
  align-items: center;
  box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.4);
  padding-bottom: env(safe-area-inset-bottom);
  height: 64px;
`,kp=p.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: none;
  padding-block: 8px;
  cursor: pointer;
  font-family: inherit;
  background: transparent;
  border-radius: 14px;
  margin: 6px 2px;
  transition: background 0.15s;
  position: relative;

  &:active {
    background: rgba(99, 102, 241, 0.08);
    transform: scale(0.95);
  }
`,Jp=p.div`
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #6366f1;
  box-shadow: 0 0 6px rgba(99, 102, 241, 0.8);
`,Tv=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -16px;
`,Av=p.button`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: none;
  background: ${({$active:u})=>u?"linear-gradient(135deg, #818cf8, #6366f1)":"linear-gradient(135deg, #6366f1, #8b5cf6)"};
  cursor: pointer;
  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s, box-shadow 0.15s;

  &:active {
    transform: scale(0.9);
    box-shadow: 0 3px 12px rgba(99, 102, 241, 0.35);
  }
`,Ev=p.span`
  font-size: 28px;
  font-weight: 300;
  color: white;
  line-height: 1;
  margin-top: -2px;
`,Fp=p.span`
  font-size: 18px;
  transition: transform 0.15s;
`,Ar=p.span`
  font-size: 10px;
  font-weight: ${({$active:u})=>u?700:400};
  color: ${({$active:u})=>u?"#a5b4fc":"#4a5568"};
  transition: color 0.2s;
`,Cv="/api";async function oe(u,r,d){const f=await fetch(`${Cv}${r}`,{method:u,headers:d?{"Content-Type":"application/json"}:{},body:d?JSON.stringify(d):void 0});if(!f.ok)throw new Error(`API ${u} ${r} → ${f.status}`);return f.json()}const ie={getProfile:()=>oe("GET","/profile"),saveProfile:u=>oe("PUT","/profile",u),getCategories:()=>oe("GET","/categories"),addCategory:u=>oe("POST","/categories",u),updateCategory:u=>oe("PUT",`/categories/${u.id}`,u),deleteCategory:u=>oe("DELETE",`/categories/${u}`),getBudgets:()=>oe("GET","/budgets"),saveBudgets:u=>oe("PUT","/budgets",u),getTransactions:()=>oe("GET","/transactions"),addTransaction:u=>oe("POST","/transactions",u),updateTransaction:u=>oe("PUT",`/transactions/${u.id}`,u),deleteTransaction:u=>oe("DELETE",`/transactions/${u}`),getRecurring:()=>oe("GET","/recurring"),addRecurring:u=>oe("POST","/recurring",u),updateRecurring:u=>oe("PUT",`/recurring/${u.id}`,u),deleteRecurring:u=>oe("DELETE",`/recurring/${u}`)},Ov=[{id:"salary",label:"משכורת",emoji:"💼",type:"income",isDefault:!0,sortOrder:0},{id:"present",label:"מתנה",emoji:"🎁",type:"income",isDefault:!0,sortOrder:1},{id:"other_in",label:"אחר",emoji:"➕",type:"income",isDefault:!0,sortOrder:2},{id:"food",label:"מזון וקניות",emoji:"🛒",type:"expense",isDefault:!0,sortOrder:3},{id:"housing",label:"דיור ושכירות",emoji:"🏠",type:"expense",isDefault:!0,sortOrder:4},{id:"transport",label:"דלק ותחבורה",emoji:"🚗",type:"expense",isDefault:!0,sortOrder:5},{id:"education",label:"לימודים",emoji:"📚",type:"expense",isDefault:!0,sortOrder:6},{id:"technology",label:"טכנולוגיה",emoji:"🤖",type:"expense",isDefault:!0,sortOrder:7},{id:"entertainment",label:"בילויים",emoji:"🎉",type:"expense",isDefault:!0,sortOrder:8},{id:"pharmacy",label:"פארם",emoji:"🏥",type:"expense",isDefault:!0,sortOrder:9},{id:"health",label:"בריאות",emoji:"💊",type:"expense",isDefault:!0,sortOrder:10},{id:"shopping",label:"שופינג",emoji:"🛍️",type:"expense",isDefault:!0,sortOrder:11},{id:"subscription",label:"מנויים",emoji:"🔔",type:"expense",isDefault:!0,sortOrder:12},{id:"gym",label:"חדר-כושר",emoji:"🏋",type:"expense",isDefault:!0,sortOrder:13},{id:"events",label:"אירועים",emoji:"💍",type:"expense",isDefault:!0,sortOrder:14},{id:"savings",label:"חיסכון",emoji:"🐷",type:"expense",isDefault:!0,sortOrder:15},{id:"other_ex",label:"אחר",emoji:"📦",type:"expense",isDefault:!0,sortOrder:16}],Mv={personOneName:"אלעד",personTwoName:"נויה",currency:"ILS",personOneMonthlyIncome:"",personTwoMonthlyIncome:"",monthCycleDay:1};function Dv(){const[u,r]=nt.useState("dashboard"),[d,f]=nt.useState(null),[h,j]=nt.useState(!0),[D,w]=nt.useState(Mv),[S,y]=nt.useState(Ov),[L,U]=nt.useState({}),[H,J]=nt.useState([]),[q,I]=nt.useState([]),[at,it]=nt.useState(()=>Xe(new Date().toISOString().slice(0,10),1)),Z=D.monthCycleDay??1;nt.useEffect(()=>{Promise.all([ie.getProfile(),ie.getCategories(),ie.getBudgets(),ie.getTransactions(),ie.getRecurring()]).then(([E,$,V,M,g])=>{E&&w(E),$?.length&&y($),V&&U(V),M&&J(M),g&&I(g),j(!1)}).catch(()=>j(!1))},[]);const st=nt.useCallback(E=>{w($=>{const V=typeof E=="function"?E($):E;return V.monthCycleDay!==$.monthCycleDay&&it(Xe(new Date().toISOString().slice(0,10),V.monthCycleDay??1)),ie.saveProfile(V).catch(console.error),V})},[]),ot=nt.useCallback(E=>{y($=>{const V=typeof E=="function"?E($):E,M=V.filter(G=>!$.find(z=>z.id===G.id)),g=$.filter(G=>!V.find(z=>z.id===G.id)),_=V.filter(G=>{const z=$.find(K=>K.id===G.id);return z&&(z.label!==G.label||z.emoji!==G.emoji||z.type!==G.type)});return M.forEach(G=>ie.addCategory(G).catch(console.error)),g.forEach(G=>ie.deleteCategory(G.id).catch(console.error)),_.forEach(G=>ie.updateCategory(G).catch(console.error)),V})},[]),tt=nt.useCallback(E=>{U($=>{const V=typeof E=="function"?E($):E;return ie.saveBudgets(V).catch(console.error),V})},[]),rt=nt.useCallback(E=>{J($=>[...$,E]),ie.addTransaction(E).catch(console.error)},[]),C=nt.useCallback(E=>{J($=>$.map(V=>V.id===E.id?E:V)),ie.updateTransaction(E).catch(console.error)},[]),Q=nt.useCallback(E=>{J($=>$.filter(V=>V.id!==E)),ie.deleteTransaction(E).catch(console.error)},[]),lt=nt.useCallback(E=>{J($=>[...$,E]),ie.addTransaction(E).catch(console.error)},[]),k=nt.useCallback(E=>{J($=>typeof E=="function"?E($):E)},[]),F=nt.useCallback(E=>{I($=>[...$,E]),ie.addRecurring(E).catch(console.error)},[]),jt=nt.useCallback(E=>{I($=>$.map(V=>V.id===E.id?E:V)),ie.updateRecurring(E).catch(console.error)},[]),bt=nt.useCallback(E=>{I($=>$.filter(V=>V.id!==E)),ie.deleteRecurring(E).catch(console.error)},[]),X=nt.useCallback(E=>{I($=>typeof E=="function"?E($):E)},[]),W=nt.useMemo(()=>{const E=Rb(at,Z);return[...q.map(V=>({...V,id:`recurring-${V.id}-${at}`,date:E,_isRecurringVirtual:!0,_templateId:V.id})),...H]},[H,q,at,Z]),x=nt.useMemo(()=>{const E=W.filter(g=>qr(g.date,at,Z)),$=E.filter(g=>g.type==="income").reduce((g,_)=>g+Number(_.amount),0),V=E.filter(g=>g.type==="expense").reduce((g,_)=>g+Number(_.amount),0),M=$-V;return[{id:"income",label:"הכנסות",val:$,color:"#22d3a5",icon:"📈"},{id:"expense",label:"הוצאות",val:V,color:"#f472b6",icon:"📉"},{id:"balance",label:"מאזן",val:M,color:M>=0?"#22d3a5":"#f472b6",icon:M>=0?"✨":"⚠️"}]},[W,at,Z]);return h?o.jsx(Wp,{children:o.jsxs(wv,{children:[o.jsx(Rv,{}),o.jsx(Uv,{children:"טוען..."})]})}):o.jsxs(Wp,{children:[d&&o.jsx(Nv,{type:d.type,children:d.msg}),!["add","edit","add-recurring","edit-recurring"].includes(u)&&o.jsx(xb,{cards:x,onProfileClick:()=>r("profile")}),o.jsx(_v,{children:o.jsx(vv,{activePage:u,setActivityPage:r,toast:d,setToast:f,selectedMonth:at,setSelectedMonth:it,cycleDay:Z,budgets:L,setBudgets:tt,transactions:H,setTransactions:k,addTransaction:rt,replaceTransaction:C,removeTransaction:Q,restoreTransaction:lt,recurringTemplates:q,setRecurringTemplates:X,addRecurring:F,replaceRecurring:jt,removeRecurring:bt,visibleTransactions:W,categories:S,setCategories:ot,profile:D,setProfile:st})}),o.jsx(jv,{activePage:u,onPageChange:r})]})}const Wp=p.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`,_v=p.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
`,Nv=p.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({type:u})=>u==="error"?"linear-gradient(135deg, #f472b6, #e11d48)":"linear-gradient(135deg, #22d3a5, #059669)"};
  color: white;
  padding: 11px 28px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  z-index: 1000;
  animation: fadeIn 0.2s ease;
  white-space: nowrap;
`,wv=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: #0d1117;
`,Rv=p.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid rgba(99,102,241,0.2);
  border-top-color: #6366f1;
  animation: spin 0.8s linear infinite;

  @keyframes spin { to { transform: rotate(360deg); } }
`,Uv=p.div`
  color: #4a5568;
  font-size: 14px;
  font-weight: 600;
`;um.createRoot(document.getElementById("root")).render(o.jsx(nt.StrictMode,{children:o.jsx(Dv,{})}));
