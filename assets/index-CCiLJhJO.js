(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function YM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var px={exports:{}},$c={},mx={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),qM=Symbol.for("react.portal"),$M=Symbol.for("react.fragment"),KM=Symbol.for("react.strict_mode"),ZM=Symbol.for("react.profiler"),QM=Symbol.for("react.provider"),JM=Symbol.for("react.context"),eE=Symbol.for("react.forward_ref"),tE=Symbol.for("react.suspense"),nE=Symbol.for("react.memo"),iE=Symbol.for("react.lazy"),Gm=Symbol.iterator;function rE(t){return t===null||typeof t!="object"?null:(t=Gm&&t[Gm]||t["@@iterator"],typeof t=="function"?t:null)}var gx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vx=Object.assign,xx={};function vo(t,e,n){this.props=t,this.context=e,this.refs=xx,this.updater=n||gx}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _x(){}_x.prototype=vo.prototype;function Wh(t,e,n){this.props=t,this.context=e,this.refs=xx,this.updater=n||gx}var jh=Wh.prototype=new _x;jh.constructor=Wh;vx(jh,vo.prototype);jh.isPureReactComponent=!0;var Hm=Array.isArray,yx=Object.prototype.hasOwnProperty,Xh={current:null},Sx={key:!0,ref:!0,__self:!0,__source:!0};function Mx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yx.call(e,i)&&!Sx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ia,type:t,key:s,ref:o,props:r,_owner:Xh.current}}function sE(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function oE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wm=/\/+/g;function Mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?oE(""+t.key):e.toString(36)}function Gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ia:case qM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Mu(o,0):i,Hm(r)?(n="",t!=null&&(n=t.replace(Wm,"$&/")+"/"),Gl(r,e,n,"",function(c){return c})):r!=null&&(Yh(r)&&(r=sE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Hm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Mu(s,a);o+=Gl(s,e,n,l,r)}else if(l=rE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Mu(s,a++),o+=Gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var i=[],r=0;return Gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function aE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},Hl={transition:null},lE={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Xh};function Ex(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!Yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=vo;He.Fragment=$M;He.Profiler=ZM;He.PureComponent=Wh;He.StrictMode=KM;He.Suspense=tE;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lE;He.act=Ex;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)yx.call(e,l)&&!Sx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:JM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QM,_context:t},t.Consumer=t};He.createElement=Mx;He.createFactory=function(t){var e=Mx.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:eE,render:t}};He.isValidElement=Yh;He.lazy=function(t){return{$$typeof:iE,_payload:{_status:-1,_result:t},_init:aE}};He.memo=function(t,e){return{$$typeof:nE,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};He.unstable_act=Ex;He.useCallback=function(t,e){return hn.current.useCallback(t,e)};He.useContext=function(t){return hn.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};He.useEffect=function(t,e){return hn.current.useEffect(t,e)};He.useId=function(){return hn.current.useId()};He.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return hn.current.useMemo(t,e)};He.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};He.useRef=function(t){return hn.current.useRef(t)};He.useState=function(t){return hn.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return hn.current.useTransition()};He.version="18.3.1";mx.exports=He;var Ae=mx.exports;const cE=YM(Ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uE=Ae,fE=Symbol.for("react.element"),dE=Symbol.for("react.fragment"),hE=Object.prototype.hasOwnProperty,pE=uE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mE={key:!0,ref:!0,__self:!0,__source:!0};function Tx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)hE.call(e,i)&&!mE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fE,type:t,key:s,ref:o,props:r,_owner:pE.current}}$c.Fragment=dE;$c.jsx=Tx;$c.jsxs=Tx;px.exports=$c;var O=px.exports,Hf={},wx={exports:{}},In={},Ax={exports:{}},Cx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,X){var Z=F.length;F.push(X);e:for(;0<Z;){var oe=Z-1>>>1,de=F[oe];if(0<r(de,X))F[oe]=X,F[Z]=de,Z=oe;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var X=F[0],Z=F.pop();if(Z!==X){F[0]=Z;e:for(var oe=0,de=F.length,ze=de>>>1;oe<ze;){var We=2*(oe+1)-1,Le=F[We],K=We+1,fe=F[K];if(0>r(Le,Z))K<de&&0>r(fe,Le)?(F[oe]=fe,F[K]=Z,oe=K):(F[oe]=Le,F[We]=Z,oe=We);else if(K<de&&0>r(fe,Z))F[oe]=fe,F[K]=Z,oe=K;else break e}}return X}function r(F,X){var Z=F.sortIndex-X.sortIndex;return Z!==0?Z:F.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,u=3,p=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=F)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function M(F){if(y=!1,x(F),!v)if(n(l)!==null)v=!0,W(w);else{var X=n(c);X!==null&&U(M,X.startTime-F)}}function w(F,X){v=!1,y&&(y=!1,h(_),_=-1),p=!0;var Z=u;try{for(x(X),d=n(l);d!==null&&(!(d.expirationTime>X)||F&&!P());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,u=d.priorityLevel;var de=oe(d.expirationTime<=X);X=t.unstable_now(),typeof de=="function"?d.callback=de:d===n(l)&&i(l),x(X)}else i(l);d=n(l)}if(d!==null)var ze=!0;else{var We=n(c);We!==null&&U(M,We.startTime-X),ze=!1}return ze}finally{d=null,u=Z,p=!1}}var T=!1,C=null,_=-1,b=5,R=-1;function P(){return!(t.unstable_now()-R<b)}function B(){if(C!==null){var F=t.unstable_now();R=F;var X=!0;try{X=C(!0,F)}finally{X?j():(T=!1,C=null)}}else T=!1}var j;if(typeof m=="function")j=function(){m(B)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,N=q.port2;q.port1.onmessage=B,j=function(){N.postMessage(null)}}else j=function(){g(B,0)};function W(F){C=F,T||(T=!0,j())}function U(F,X){_=g(function(){F(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,W(w))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(u){case 1:case 2:case 3:var X=3;break;default:X=u}var Z=u;u=X;try{return F()}finally{u=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=u;u=F;try{return X()}finally{u=Z}},t.unstable_scheduleCallback=function(F,X,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,F){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Z+de,F={id:f++,callback:X,priorityLevel:F,startTime:Z,expirationTime:de,sortIndex:-1},Z>oe?(F.sortIndex=Z,e(c,F),n(l)===null&&F===n(c)&&(y?(h(_),_=-1):y=!0,U(M,Z-oe))):(F.sortIndex=de,e(l,F),v||p||(v=!0,W(w))),F},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(F){var X=u;return function(){var Z=u;u=X;try{return F.apply(this,arguments)}finally{u=Z}}}})(Cx);Ax.exports=Cx;var gE=Ax.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vE=Ae,Ln=gE;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bx=new Set,ua={};function us(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(ua[t]=e,t=0;t<e.length;t++)bx.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wf=Object.prototype.hasOwnProperty,xE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jm={},Xm={};function _E(t){return Wf.call(Xm,t)?!0:Wf.call(jm,t)?!1:xE.test(t)?Xm[t]=!0:(jm[t]=!0,!1)}function yE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function SE(t,e,n,i){if(e===null||typeof e>"u"||yE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var qh=/[\-:]([a-z])/g;function $h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qh,$h);$t[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qh,$h);$t[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qh,$h);$t[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kh(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SE(e,n,r,i)&&(n=null),i||r===null?_E(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=vE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),Zh=Symbol.for("react.strict_mode"),jf=Symbol.for("react.profiler"),Rx=Symbol.for("react.provider"),Px=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),Yf=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),Dx=Symbol.for("react.offscreen"),Ym=Symbol.iterator;function wo(t){return t===null||typeof t!="object"?null:(t=Ym&&t[Ym]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Eu;function Go(t){if(Eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eu=e&&e[1]||""}return`
`+Eu+t}var Tu=!1;function wu(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Go(t):""}function ME(t){switch(t.tag){case 5:return Go(t.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return t=wu(t.type,!1),t;case 11:return t=wu(t.type.render,!1),t;case 1:return t=wu(t.type,!0),t;default:return""}}function qf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Ds:return"Portal";case jf:return"Profiler";case Zh:return"StrictMode";case Xf:return"Suspense";case Yf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Px:return(t.displayName||"Context")+".Consumer";case Rx:return(t._context.displayName||"Context")+".Provider";case Qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jh:return e=t.displayName||null,e!==null?e:qf(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return qf(t(e))}catch{}}return null}function EE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qf(e);case 8:return e===Zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TE(t){var e=Lx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=TE(t))}function Nx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Lx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ix(t,e){e=e.checked,e!=null&&Kh(t,"checked",e,!1)}function Kf(t,e){Ix(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zf(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zf(t,e,n){(e!=="number"||cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ho(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function Ux(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,Ox=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wE=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(t){wE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zo[e]=Zo[t]})});function Bx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zo.hasOwnProperty(t)&&Zo[t]?(""+e).trim():e+"px"}function kx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Bx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var AE=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ed(t,e){if(e){if(AE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function td(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=null;function ep(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var id=null,$s=null,Ks=null;function Qm(t){if(t=Oa(t)){if(typeof id!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=eu(e),id(t.stateNode,t.type,e))}}function Vx(t){$s?Ks?Ks.push(t):Ks=[t]:$s=t}function zx(){if($s){var t=$s,e=Ks;if(Ks=$s=null,Qm(t),e)for(t=0;t<e.length;t++)Qm(e[t])}}function Gx(t,e){return t(e)}function Hx(){}var Au=!1;function Wx(t,e,n){if(Au)return t(e,n);Au=!0;try{return Gx(t,e,n)}finally{Au=!1,($s!==null||Ks!==null)&&(Hx(),zx())}}function da(t,e){var n=t.stateNode;if(n===null)return null;var i=eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var rd=!1;if(Wi)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){rd=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{rd=!1}function CE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Qo=!1,uc=null,fc=!1,sd=null,bE={onError:function(t){Qo=!0,uc=t}};function RE(t,e,n,i,r,s,o,a,l){Qo=!1,uc=null,CE.apply(bE,arguments)}function PE(t,e,n,i,r,s,o,a,l){if(RE.apply(this,arguments),Qo){if(Qo){var c=uc;Qo=!1,uc=null}else throw Error(ne(198));fc||(fc=!0,sd=c)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jm(t){if(fs(t)!==t)throw Error(ne(188))}function DE(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Jm(r),t;if(s===i)return Jm(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Xx(t){return t=DE(t),t!==null?Yx(t):null}function Yx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yx(t);if(e!==null)return e;t=t.sibling}return null}var qx=Ln.unstable_scheduleCallback,eg=Ln.unstable_cancelCallback,LE=Ln.unstable_shouldYield,NE=Ln.unstable_requestPaint,Pt=Ln.unstable_now,IE=Ln.unstable_getCurrentPriorityLevel,tp=Ln.unstable_ImmediatePriority,$x=Ln.unstable_UserBlockingPriority,dc=Ln.unstable_NormalPriority,UE=Ln.unstable_LowPriority,Kx=Ln.unstable_IdlePriority,Kc=null,xi=null;function FE(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:kE,OE=Math.log,BE=Math.LN2;function kE(t){return t>>>=0,t===0?32:31-(OE(t)/BE|0)|0}var Ja=64,el=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Wo(a):(s&=o,s!==0&&(i=Wo(s)))}else o=n&~r,o!==0?i=Wo(o):s!==0&&(i=Wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function VE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-si(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=VE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zx(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function Cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function GE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Qx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jx,ip,e_,t_,n_,ad=!1,tl=[],vr=null,xr=null,_r=null,ha=new Map,pa=new Map,fr=[],HE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tg(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function Co(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oa(e),e!==null&&ip(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function WE(t,e,n,i,r){switch(e){case"focusin":return vr=Co(vr,t,e,n,i,r),!0;case"dragenter":return xr=Co(xr,t,e,n,i,r),!0;case"mouseover":return _r=Co(_r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ha.set(s,Co(ha.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pa.set(s,Co(pa.get(s)||null,t,e,n,i,r)),!0}return!1}function i_(t){var e=Yr(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=jx(n),e!==null){t.blockedOn=e,n_(t.priority,function(){e_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ld(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nd=i,n.target.dispatchEvent(i),nd=null}else return e=Oa(n),e!==null&&ip(e),t.blockedOn=n,!1;e.shift()}return!0}function ng(t,e,n){Wl(t)&&n.delete(e)}function jE(){ad=!1,vr!==null&&Wl(vr)&&(vr=null),xr!==null&&Wl(xr)&&(xr=null),_r!==null&&Wl(_r)&&(_r=null),ha.forEach(ng),pa.forEach(ng)}function bo(t,e){t.blockedOn===e&&(t.blockedOn=null,ad||(ad=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,jE)))}function ma(t){function e(r){return bo(r,t)}if(0<tl.length){bo(tl[0],t);for(var n=1;n<tl.length;n++){var i=tl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&bo(vr,t),xr!==null&&bo(xr,t),_r!==null&&bo(_r,t),ha.forEach(e),pa.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)i_(n),n.blockedOn===null&&fr.shift()}var Zs=Zi.ReactCurrentBatchConfig,pc=!0;function XE(t,e,n,i){var r=tt,s=Zs.transition;Zs.transition=null;try{tt=1,rp(t,e,n,i)}finally{tt=r,Zs.transition=s}}function YE(t,e,n,i){var r=tt,s=Zs.transition;Zs.transition=null;try{tt=4,rp(t,e,n,i)}finally{tt=r,Zs.transition=s}}function rp(t,e,n,i){if(pc){var r=ld(t,e,n,i);if(r===null)Ou(t,e,i,mc,n),tg(t,i);else if(WE(r,t,e,n,i))i.stopPropagation();else if(tg(t,i),e&4&&-1<HE.indexOf(t)){for(;r!==null;){var s=Oa(r);if(s!==null&&Jx(s),s=ld(t,e,n,i),s===null&&Ou(t,e,i,mc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ou(t,e,i,null,n)}}var mc=null;function ld(t,e,n,i){if(mc=null,t=ep(i),t=Yr(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mc=t,null}function r_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IE()){case tp:return 1;case $x:return 4;case dc:case UE:return 16;case Kx:return 536870912;default:return 16}default:return 16}}var pr=null,sp=null,jl=null;function s_(){if(jl)return jl;var t,e=sp,n=e.length,i,r="value"in pr?pr.value:pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return jl=r.slice(t,1<i?1-i:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function ig(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nl:ig,this.isPropagationStopped=ig,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},op=Un(xo),Fa=St({},xo,{view:0,detail:0}),qE=Un(Fa),bu,Ru,Ro,Zc=St({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(bu=t.screenX-Ro.screenX,Ru=t.screenY-Ro.screenY):Ru=bu=0,Ro=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),rg=Un(Zc),$E=St({},Zc,{dataTransfer:0}),KE=Un($E),ZE=St({},Fa,{relatedTarget:0}),Pu=Un(ZE),QE=St({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),JE=Un(QE),eT=St({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tT=Un(eT),nT=St({},xo,{data:0}),sg=Un(nT),iT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sT[t])?!!e[t]:!1}function ap(){return oT}var aT=St({},Fa,{key:function(t){if(t.key){var e=iT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lT=Un(aT),cT=St({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),og=Un(cT),uT=St({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),fT=Un(uT),dT=St({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hT=Un(dT),pT=St({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mT=Un(pT),gT=[9,13,27,32],lp=Wi&&"CompositionEvent"in window,Jo=null;Wi&&"documentMode"in document&&(Jo=document.documentMode);var vT=Wi&&"TextEvent"in window&&!Jo,o_=Wi&&(!lp||Jo&&8<Jo&&11>=Jo),ag=" ",lg=!1;function a_(t,e){switch(t){case"keyup":return gT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function xT(t,e){switch(t){case"compositionend":return l_(e);case"keypress":return e.which!==32?null:(lg=!0,ag);case"textInput":return t=e.data,t===ag&&lg?null:t;default:return null}}function _T(t,e){if(Ns)return t==="compositionend"||!lp&&a_(t,e)?(t=s_(),jl=sp=pr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o_&&e.locale!=="ko"?null:e.data;default:return null}}var yT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yT[t.type]:e==="textarea"}function c_(t,e,n,i){Vx(i),e=gc(e,"onChange"),0<e.length&&(n=new op("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ea=null,ga=null;function ST(t){y_(t,0)}function Qc(t){var e=Fs(t);if(Nx(e))return t}function MT(t,e){if(t==="change")return e}var u_=!1;if(Wi){var Du;if(Wi){var Lu="oninput"in document;if(!Lu){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),Lu=typeof ug.oninput=="function"}Du=Lu}else Du=!1;u_=Du&&(!document.documentMode||9<document.documentMode)}function fg(){ea&&(ea.detachEvent("onpropertychange",f_),ga=ea=null)}function f_(t){if(t.propertyName==="value"&&Qc(ga)){var e=[];c_(e,ga,t,ep(t)),Wx(ST,e)}}function ET(t,e,n){t==="focusin"?(fg(),ea=e,ga=n,ea.attachEvent("onpropertychange",f_)):t==="focusout"&&fg()}function TT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(ga)}function wT(t,e){if(t==="click")return Qc(e)}function AT(t,e){if(t==="input"||t==="change")return Qc(e)}function CT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:CT;function va(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wf.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,e){var n=dg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dg(n)}}function d_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function h_(){for(var t=window,e=cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cc(t.document)}return e}function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bT(t){var e=h_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&d_(n.ownerDocument.documentElement,n)){if(i!==null&&cp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hg(n,s);var o=hg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var RT=Wi&&"documentMode"in document&&11>=document.documentMode,Is=null,cd=null,ta=null,ud=!1;function pg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||Is==null||Is!==cc(i)||(i=Is,"selectionStart"in i&&cp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ta&&va(ta,i)||(ta=i,i=gc(cd,"onSelect"),0<i.length&&(e=new op("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Is)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Nu={},p_={};Wi&&(p_=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Jc(t){if(Nu[t])return Nu[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p_)return Nu[t]=e[n];return t}var m_=Jc("animationend"),g_=Jc("animationiteration"),v_=Jc("animationstart"),x_=Jc("transitionend"),__=new Map,mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){__.set(t,e),us(e,[t])}for(var Iu=0;Iu<mg.length;Iu++){var Uu=mg[Iu],PT=Uu.toLowerCase(),DT=Uu[0].toUpperCase()+Uu.slice(1);Pr(PT,"on"+DT)}Pr(m_,"onAnimationEnd");Pr(g_,"onAnimationIteration");Pr(v_,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(x_,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LT=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function gg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,PE(i,e,void 0,t),t.currentTarget=null}function y_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gg(r,a,c),s=l}}}if(fc)throw t=sd,fc=!1,sd=null,t}function dt(t,e){var n=e[md];n===void 0&&(n=e[md]=new Set);var i=t+"__bubble";n.has(i)||(S_(e,t,2,!1),n.add(i))}function Fu(t,e,n){var i=0;e&&(i|=4),S_(n,t,i,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[rl]){t[rl]=!0,bx.forEach(function(n){n!=="selectionchange"&&(LT.has(n)||Fu(n,!1,t),Fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,Fu("selectionchange",!1,e))}}function S_(t,e,n,i){switch(r_(e)){case 1:var r=XE;break;case 4:r=YE;break;default:r=rp}n=r.bind(null,e,n,t),r=void 0,!rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ou(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Wx(function(){var c=s,f=ep(n),d=[];e:{var u=__.get(t);if(u!==void 0){var p=op,v=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":p=lT;break;case"focusin":v="focus",p=Pu;break;case"focusout":v="blur",p=Pu;break;case"beforeblur":case"afterblur":p=Pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=KE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fT;break;case m_:case g_:case v_:p=JE;break;case x_:p=hT;break;case"scroll":p=qE;break;case"wheel":p=mT;break;case"copy":case"cut":case"paste":p=tT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=og}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?u!==null?u+"Capture":null:u;y=[];for(var m=c,x;m!==null;){x=m;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,h!==null&&(M=da(m,h),M!=null&&y.push(_a(m,M,x)))),g)break;m=m.return}0<y.length&&(u=new p(u,v,null,n,f),d.push({event:u,listeners:y}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==nd&&(v=n.relatedTarget||n.fromElement)&&(Yr(v)||v[ji]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Yr(v):null,v!==null&&(g=fs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=rg,M="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=og,M="onPointerLeave",h="onPointerEnter",m="pointer"),g=p==null?u:Fs(p),x=v==null?u:Fs(v),u=new y(M,m+"leave",p,n,f),u.target=g,u.relatedTarget=x,M=null,Yr(f)===c&&(y=new y(h,m+"enter",v,n,f),y.target=x,y.relatedTarget=g,M=y),g=M,p&&v)t:{for(y=p,h=v,m=0,x=y;x;x=gs(x))m++;for(x=0,M=h;M;M=gs(M))x++;for(;0<m-x;)y=gs(y),m--;for(;0<x-m;)h=gs(h),x--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=gs(y),h=gs(h)}y=null}else y=null;p!==null&&vg(d,u,p,y,!1),v!==null&&g!==null&&vg(d,g,v,y,!0)}}e:{if(u=c?Fs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var w=MT;else if(cg(u))if(u_)w=AT;else{w=TT;var T=ET}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(w=wT);if(w&&(w=w(t,c))){c_(d,w,n,f);break e}T&&T(t,u,c),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&Zf(u,"number",u.value)}switch(T=c?Fs(c):window,t){case"focusin":(cg(T)||T.contentEditable==="true")&&(Is=T,cd=c,ta=null);break;case"focusout":ta=cd=Is=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,pg(d,n,f);break;case"selectionchange":if(RT)break;case"keydown":case"keyup":pg(d,n,f)}var C;if(lp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ns?a_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(o_&&n.locale!=="ko"&&(Ns||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ns&&(C=s_()):(pr=f,sp="value"in pr?pr.value:pr.textContent,Ns=!0)),T=gc(c,_),0<T.length&&(_=new sg(_,t,null,n,f),d.push({event:_,listeners:T}),C?_.data=C:(C=l_(n),C!==null&&(_.data=C)))),(C=vT?xT(t,n):_T(t,n))&&(c=gc(c,"onBeforeInput"),0<c.length&&(f=new sg("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=C))}y_(d,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=da(t,n),s!=null&&i.unshift(_a(t,s,r)),s=da(t,e),s!=null&&i.push(_a(t,s,r))),t=t.return}return i}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=da(n,s),l!=null&&o.unshift(_a(n,l,a))):r||(l=da(n,s),l!=null&&o.push(_a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var NT=/\r\n?/g,IT=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(NT,`
`).replace(IT,"")}function sl(t,e,n){if(e=xg(e),xg(t)!==e&&n)throw Error(ne(425))}function vc(){}var fd=null,dd=null;function hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pd=typeof setTimeout=="function"?setTimeout:void 0,UT=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,FT=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(OT)}:pd;function OT(t){setTimeout(function(){throw t})}function Bu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ma(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),mi="__reactFiber$"+_o,ya="__reactProps$"+_o,ji="__reactContainer$"+_o,md="__reactEvents$"+_o,BT="__reactListeners$"+_o,kT="__reactHandles$"+_o;function Yr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yg(t);t!==null;){if(n=t[mi])return n;t=yg(t)}return e}t=n,n=t.parentNode}return null}function Oa(t){return t=t[mi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function eu(t){return t[ya]||null}var gd=[],Os=-1;function Dr(t){return{current:t}}function ht(t){0>Os||(t.current=gd[Os],gd[Os]=null,Os--)}function ut(t,e){Os++,gd[Os]=t.current,t.current=e}var Ar={},on=Dr(Ar),xn=Dr(!1),ns=Ar;function io(t,e){var n=t.type.contextTypes;if(!n)return Ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function xc(){ht(xn),ht(on)}function Sg(t,e,n){if(on.current!==Ar)throw Error(ne(168));ut(on,e),ut(xn,n)}function M_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,EE(t)||"Unknown",r));return St({},n,i)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,ns=on.current,ut(on,t),ut(xn,xn.current),!0}function Mg(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=M_(t,e,ns),i.__reactInternalMemoizedMergedChildContext=t,ht(xn),ht(on),ut(on,t)):ht(xn),ut(xn,n)}var Ii=null,tu=!1,ku=!1;function E_(t){Ii===null?Ii=[t]:Ii.push(t)}function VT(t){tu=!0,E_(t)}function Lr(){if(!ku&&Ii!==null){ku=!0;var t=0,e=tt;try{var n=Ii;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,tu=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),qx(tp,Lr),r}finally{tt=e,ku=!1}}return null}var Bs=[],ks=0,yc=null,Sc=0,zn=[],Gn=0,is=null,Fi=1,Oi="";function Vr(t,e){Bs[ks++]=Sc,Bs[ks++]=yc,yc=t,Sc=e}function T_(t,e,n){zn[Gn++]=Fi,zn[Gn++]=Oi,zn[Gn++]=is,is=t;var i=Fi;t=Oi;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fi=1<<32-si(e)+r|n<<r|i,Oi=s+t}else Fi=1<<s|n<<r|i,Oi=t}function up(t){t.return!==null&&(Vr(t,1),T_(t,1,0))}function fp(t){for(;t===yc;)yc=Bs[--ks],Bs[ks]=null,Sc=Bs[--ks],Bs[ks]=null;for(;t===is;)is=zn[--Gn],zn[Gn]=null,Oi=zn[--Gn],zn[Gn]=null,Fi=zn[--Gn],zn[Gn]=null}var bn=null,Cn=null,mt=!1,ni=null;function w_(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Cn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Cn=null,!0):!1;default:return!1}}function vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xd(t){if(mt){var e=Cn;if(e){var n=e;if(!Eg(t,e)){if(vd(t))throw Error(ne(418));e=yr(n.nextSibling);var i=bn;e&&Eg(t,e)?w_(i,n):(t.flags=t.flags&-4097|2,mt=!1,bn=t)}}else{if(vd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,mt=!1,bn=t}}}function Tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function ol(t){if(t!==bn)return!1;if(!mt)return Tg(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hd(t.type,t.memoizedProps)),e&&(e=Cn)){if(vd(t))throw A_(),Error(ne(418));for(;e;)w_(t,e),e=yr(e.nextSibling)}if(Tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=bn?yr(t.stateNode.nextSibling):null;return!0}function A_(){for(var t=Cn;t;)t=yr(t.nextSibling)}function ro(){Cn=bn=null,mt=!1}function dp(t){ni===null?ni=[t]:ni.push(t)}var zT=Zi.ReactCurrentBatchConfig;function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wg(t){var e=t._init;return e(t._payload)}function C_(t){function e(h,m){if(t){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=Tr(h,m),h.index=0,h.sibling=null,h}function s(h,m,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,x,M){return m===null||m.tag!==6?(m=Xu(x,h.mode,M),m.return=h,m):(m=r(m,x),m.return=h,m)}function l(h,m,x,M){var w=x.type;return w===Ls?f(h,m,x.props.children,M,x.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===cr&&wg(w)===m.type)?(M=r(m,x.props),M.ref=Po(h,m,x),M.return=h,M):(M=Jl(x.type,x.key,x.props,null,h.mode,M),M.ref=Po(h,m,x),M.return=h,M)}function c(h,m,x,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Yu(x,h.mode,M),m.return=h,m):(m=r(m,x.children||[]),m.return=h,m)}function f(h,m,x,M,w){return m===null||m.tag!==7?(m=es(x,h.mode,M,w),m.return=h,m):(m=r(m,x),m.return=h,m)}function d(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Xu(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ka:return x=Jl(m.type,m.key,m.props,null,h.mode,x),x.ref=Po(h,null,m),x.return=h,x;case Ds:return m=Yu(m,h.mode,x),m.return=h,m;case cr:var M=m._init;return d(h,M(m._payload),x)}if(Ho(m)||wo(m))return m=es(m,h.mode,x,null),m.return=h,m;al(h,m)}return null}function u(h,m,x,M){var w=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(h,m,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ka:return x.key===w?l(h,m,x,M):null;case Ds:return x.key===w?c(h,m,x,M):null;case cr:return w=x._init,u(h,m,w(x._payload),M)}if(Ho(x)||wo(x))return w!==null?null:f(h,m,x,M,null);al(h,x)}return null}function p(h,m,x,M,w){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(x)||null,a(m,h,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ka:return h=h.get(M.key===null?x:M.key)||null,l(m,h,M,w);case Ds:return h=h.get(M.key===null?x:M.key)||null,c(m,h,M,w);case cr:var T=M._init;return p(h,m,x,T(M._payload),w)}if(Ho(M)||wo(M))return h=h.get(x)||null,f(m,h,M,w,null);al(m,M)}return null}function v(h,m,x,M){for(var w=null,T=null,C=m,_=m=0,b=null;C!==null&&_<x.length;_++){C.index>_?(b=C,C=null):b=C.sibling;var R=u(h,C,x[_],M);if(R===null){C===null&&(C=b);break}t&&C&&R.alternate===null&&e(h,C),m=s(R,m,_),T===null?w=R:T.sibling=R,T=R,C=b}if(_===x.length)return n(h,C),mt&&Vr(h,_),w;if(C===null){for(;_<x.length;_++)C=d(h,x[_],M),C!==null&&(m=s(C,m,_),T===null?w=C:T.sibling=C,T=C);return mt&&Vr(h,_),w}for(C=i(h,C);_<x.length;_++)b=p(C,h,_,x[_],M),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?_:b.key),m=s(b,m,_),T===null?w=b:T.sibling=b,T=b);return t&&C.forEach(function(P){return e(h,P)}),mt&&Vr(h,_),w}function y(h,m,x,M){var w=wo(x);if(typeof w!="function")throw Error(ne(150));if(x=w.call(x),x==null)throw Error(ne(151));for(var T=w=null,C=m,_=m=0,b=null,R=x.next();C!==null&&!R.done;_++,R=x.next()){C.index>_?(b=C,C=null):b=C.sibling;var P=u(h,C,R.value,M);if(P===null){C===null&&(C=b);break}t&&C&&P.alternate===null&&e(h,C),m=s(P,m,_),T===null?w=P:T.sibling=P,T=P,C=b}if(R.done)return n(h,C),mt&&Vr(h,_),w;if(C===null){for(;!R.done;_++,R=x.next())R=d(h,R.value,M),R!==null&&(m=s(R,m,_),T===null?w=R:T.sibling=R,T=R);return mt&&Vr(h,_),w}for(C=i(h,C);!R.done;_++,R=x.next())R=p(C,h,_,R.value,M),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?_:R.key),m=s(R,m,_),T===null?w=R:T.sibling=R,T=R);return t&&C.forEach(function(B){return e(h,B)}),mt&&Vr(h,_),w}function g(h,m,x,M){if(typeof x=="object"&&x!==null&&x.type===Ls&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ka:e:{for(var w=x.key,T=m;T!==null;){if(T.key===w){if(w=x.type,w===Ls){if(T.tag===7){n(h,T.sibling),m=r(T,x.props.children),m.return=h,h=m;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===cr&&wg(w)===T.type){n(h,T.sibling),m=r(T,x.props),m.ref=Po(h,T,x),m.return=h,h=m;break e}n(h,T);break}else e(h,T);T=T.sibling}x.type===Ls?(m=es(x.props.children,h.mode,M,x.key),m.return=h,h=m):(M=Jl(x.type,x.key,x.props,null,h.mode,M),M.ref=Po(h,m,x),M.return=h,h=M)}return o(h);case Ds:e:{for(T=x.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),m=r(m,x.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=Yu(x,h.mode,M),m.return=h,h=m}return o(h);case cr:return T=x._init,g(h,m,T(x._payload),M)}if(Ho(x))return v(h,m,x,M);if(wo(x))return y(h,m,x,M);al(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,x),m.return=h,h=m):(n(h,m),m=Xu(x,h.mode,M),m.return=h,h=m),o(h)):n(h,m)}return g}var so=C_(!0),b_=C_(!1),Mc=Dr(null),Ec=null,Vs=null,hp=null;function pp(){hp=Vs=Ec=null}function mp(t){var e=Mc.current;ht(Mc),t._currentValue=e}function _d(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Ec=t,hp=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(hp!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(Ec===null)throw Error(ne(308));Vs=t,Ec.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var qr=null;function gp(t){qr===null?qr=[t]:qr.push(t)}function R_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,gp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,np(t,n)}}function Ag(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tc(t,e,n,i){var r=t.updateQueue;ur=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(u=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,u);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,u=typeof v=="function"?v.call(p,d,u):v,u==null)break e;d=St({},d,u);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=d}}function Cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Ba={},_i=Dr(Ba),Sa=Dr(Ba),Ma=Dr(Ba);function $r(t){if(t===Ba)throw Error(ne(174));return t}function xp(t,e){switch(ut(Ma,e),ut(Sa,t),ut(_i,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jf(e,t)}ht(_i),ut(_i,e)}function oo(){ht(_i),ht(Sa),ht(Ma)}function D_(t){$r(Ma.current);var e=$r(_i.current),n=Jf(e,t.type);e!==n&&(ut(Sa,t),ut(_i,n))}function _p(t){Sa.current===t&&(ht(_i),ht(Sa))}var xt=Dr(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vu=[];function yp(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var ql=Zi.ReactCurrentDispatcher,zu=Zi.ReactCurrentBatchConfig,rs=0,yt=null,Ot=null,Ht=null,Ac=!1,na=!1,Ea=0,GT=0;function Zt(){throw Error(ne(321))}function Sp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Mp(t,e,n,i,r,s){if(rs=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ql.current=t===null||t.memoizedState===null?XT:YT,t=n(i,r),na){s=0;do{if(na=!1,Ea=0,25<=s)throw Error(ne(301));s+=1,Ht=Ot=null,e.updateQueue=null,ql.current=qT,t=n(i,r)}while(na)}if(ql.current=Cc,e=Ot!==null&&Ot.next!==null,rs=0,Ht=Ot=yt=null,Ac=!1,e)throw Error(ne(300));return t}function Ep(){var t=Ea!==0;return Ea=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?yt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function qn(){if(Ot===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Ht===null?yt.memoizedState:Ht.next;if(e!==null)Ht=e,Ot=t;else{if(t===null)throw Error(ne(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Ht===null?yt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Ta(t,e){return typeof e=="function"?e(t):e}function Gu(t){var e=qn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((rs&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,yt.lanes|=f,ss|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hu(t){var e=qn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function L_(){}function N_(t,e){var n=yt,i=qn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Tp(F_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,wa(9,U_.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ne(349));rs&30||I_(n,e,r)}return r}function I_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U_(t,e,n,i){e.value=n,e.getSnapshot=i,O_(e)&&B_(t)}function F_(t,e,n){return n(function(){O_(e)&&B_(t)})}function O_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function B_(t){var e=Xi(t,1);e!==null&&oi(e,t,1,-1)}function bg(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},e.queue=t,t=t.dispatch=jT.bind(null,yt,t),[e.memoizedState,t]}function wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function k_(){return qn().memoizedState}function $l(t,e,n,i){var r=hi();yt.flags|=t,r.memoizedState=wa(1|e,n,void 0,i===void 0?null:i)}function nu(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Sp(i,o.deps)){r.memoizedState=wa(e,n,s,i);return}}yt.flags|=t,r.memoizedState=wa(1|e,n,s,i)}function Rg(t,e){return $l(8390656,8,t,e)}function Tp(t,e){return nu(2048,8,t,e)}function V_(t,e){return nu(4,2,t,e)}function z_(t,e){return nu(4,4,t,e)}function G_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function H_(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,G_.bind(null,e,t),n)}function wp(){}function W_(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function j_(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function X_(t,e,n){return rs&21?(ai(n,e)||(n=Zx(),yt.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function HT(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=zu.transition;zu.transition={};try{t(!1),e()}finally{tt=n,zu.transition=i}}function Y_(){return qn().memoizedState}function WT(t,e,n){var i=Er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},q_(t))$_(e,n);else if(n=R_(t,e,n,i),n!==null){var r=cn();oi(n,t,i,r),K_(n,e,i)}}function jT(t,e,n){var i=Er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(q_(t))$_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,gp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=R_(t,e,r,i),n!==null&&(r=cn(),oi(n,t,i,r),K_(n,e,i))}}function q_(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function $_(t,e){na=Ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function K_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,np(t,n)}}var Cc={readContext:Yn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},XT={readContext:Yn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:Rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$l(4194308,4,G_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $l(4194308,4,t,e)},useInsertionEffect:function(t,e){return $l(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=WT.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:bg,useDebugValue:wp,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=bg(!1),e=t[0];return t=HT.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=hi();if(mt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Wt===null)throw Error(ne(349));rs&30||I_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Rg(F_.bind(null,i,s,t),[t]),i.flags|=2048,wa(9,U_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Wt.identifierPrefix;if(mt){var n=Oi,i=Fi;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YT={readContext:Yn,useCallback:W_,useContext:Yn,useEffect:Tp,useImperativeHandle:H_,useInsertionEffect:V_,useLayoutEffect:z_,useMemo:j_,useReducer:Gu,useRef:k_,useState:function(){return Gu(Ta)},useDebugValue:wp,useDeferredValue:function(t){var e=qn();return X_(e,Ot.memoizedState,t)},useTransition:function(){var t=Gu(Ta)[0],e=qn().memoizedState;return[t,e]},useMutableSource:L_,useSyncExternalStore:N_,useId:Y_,unstable_isNewReconciler:!1},qT={readContext:Yn,useCallback:W_,useContext:Yn,useEffect:Tp,useImperativeHandle:H_,useInsertionEffect:V_,useLayoutEffect:z_,useMemo:j_,useReducer:Hu,useRef:k_,useState:function(){return Hu(Ta)},useDebugValue:wp,useDeferredValue:function(t){var e=qn();return Ot===null?e.memoizedState=t:X_(e,Ot.memoizedState,t)},useTransition:function(){var t=Hu(Ta)[0],e=qn().memoizedState;return[t,e]},useMutableSource:L_,useSyncExternalStore:N_,useId:Y_,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=Er(t),s=ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(oi(e,t,r,i),Yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=Er(t),s=ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(oi(e,t,r,i),Yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=Er(t),r=ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(oi(e,t,i,n),Yl(e,t,i))}};function Pg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!va(n,i)||!va(r,s):!0}function Z_(t,e,n){var i=!1,r=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=_n(e)?ns:on.current,i=e.contextTypes,s=(i=i!=null)?io(t,r):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function Sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=_n(e)?ns:on.current,r.context=io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&iu.enqueueReplaceState(r,r.state,null),Tc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",i=e;do n+=ME(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $T=typeof WeakMap=="function"?WeakMap:Map;function Q_(t,e,n){n=ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rc||(Rc=!0,Ld=i),Md(t,e)},n}function J_(t,e,n){n=ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Md(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $T;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=c1.bind(null,t,e,n),e.then(t,t))}function Ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ig(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ki(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var KT=Zi.ReactCurrentOwner,vn=!1;function ln(t,e,n,i){e.child=t===null?b_(e,null,n,i):so(e,t.child,n,i)}function Ug(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=Mp(t,e,n,i,s,r),n=Ep(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(mt&&n&&up(e),e.flags|=1,ln(t,e,i,r),e.child)}function Fg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ey(t,e,s,i,r)):(t=Jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=Tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ey(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(va(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return Ed(t,e,n,i,r)}function ty(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Gs,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Gs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Gs,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Gs,An),An|=i;return ln(t,e,r,n),e.child}function ny(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ed(t,e,n,i,r){var s=_n(n)?ns:on.current;return s=io(e,s),Qs(e,r),n=Mp(t,e,n,i,s,r),i=Ep(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(mt&&i&&up(e),e.flags|=1,ln(t,e,n,r),e.child)}function Og(t,e,n,i,r){if(_n(n)){var s=!0;_c(e)}else s=!1;if(Qs(e,r),e.stateNode===null)Kl(t,e),Z_(e,n,i),Sd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=_n(n)?ns:on.current,c=io(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Dg(e,o,i,c),ur=!1;var u=e.memoizedState;o.state=u,Tc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||xn.current||ur?(typeof f=="function"&&(yd(e,n,f,i),l=e.memoizedState),(a=ur||Pg(e,n,a,i,u,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,P_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,d=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=_n(n)?ns:on.current,l=io(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||u!==l)&&Dg(e,o,i,l),ur=!1,u=e.memoizedState,o.state=u,Tc(e,i,o,r);var v=e.memoizedState;a!==d||u!==v||xn.current||ur?(typeof p=="function"&&(yd(e,n,p,i),v=e.memoizedState),(c=ur||Pg(e,n,c,i,u,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Td(t,e,n,i,s,r)}function Td(t,e,n,i,r,s){ny(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mg(e,n,!1),Yi(t,e,s);i=e.stateNode,KT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&Mg(e,n,!0),e.child}function iy(t){var e=t.stateNode;e.pendingContext?Sg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sg(t,e.context,!1),xp(t,e.containerInfo)}function Bg(t,e,n,i,r){return ro(),dp(r),e.flags|=256,ln(t,e,n,i),e.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function ry(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(xt,r&1),t===null)return xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ou(o,i,0,null),t=es(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ad(n),e.memoizedState=wd,t):Ap(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ZT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Tr(a,s):(s=es(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wd,i}return s=t.child,t=s.sibling,i=Tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ap(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,i){return i!==null&&dp(i),so(e,t.child,null,n),t=Ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Wu(Error(ne(422))),ll(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ou({mode:"visible",children:i.children},r,0,null),s=es(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=Ad(o),e.memoizedState=wd,s);if(!(e.mode&1))return ll(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Wu(s,i,void 0),ll(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),oi(i,t,r,-1))}return Lp(),i=Wu(Error(ne(421))),ll(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=u1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=yr(r.nextSibling),bn=e,mt=!0,ni=null,t!==null&&(zn[Gn++]=Fi,zn[Gn++]=Oi,zn[Gn++]=is,Fi=t.id,Oi=t.overflow,is=e),e=Ap(e,i.children),e.flags|=4096,e)}function kg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_d(t.return,e,n)}function ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function sy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,n,e);else if(t.tag===19)kg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ju(e,!0,n,null,s);break;case"together":ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QT(t,e,n){switch(e.tag){case 3:iy(e),ro();break;case 5:D_(e);break;case 1:_n(e.type)&&_c(e);break;case 4:xp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Mc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?ry(t,e,n):(ut(xt,xt.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);ut(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return sy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,ty(t,e,n)}return Yi(t,e,n)}var oy,Cd,ay,ly;oy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cd=function(){};ay=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$r(_i.current);var s=null;switch(n){case"input":r=$f(t,r),i=$f(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Qf(t,r),i=Qf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vc)}ed(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ly=function(t,e,n,i){n!==i&&(e.flags|=4)};function Do(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function JT(t,e,n){var i=e.pendingProps;switch(fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return _n(e.type)&&xc(),Qt(e),null;case 3:return i=e.stateNode,oo(),ht(xn),ht(on),yp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Ud(ni),ni=null))),Cd(t,e),Qt(e),null;case 5:_p(e);var r=$r(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)ay(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Qt(e),null}if(t=$r(_i.current),ol(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[ya]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<jo.length;r++)dt(jo[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":qm(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":Km(i,s),dt("invalid",i)}ed(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&sl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sl(i.textContent,a,t),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":Za(i),$m(i,s,!0);break;case"textarea":Za(i),Zm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[mi]=e,t[ya]=i,oy(t,e,!1,!1),e.stateNode=t;e:{switch(o=td(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<jo.length;r++)dt(jo[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":qm(t,i),r=$f(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),dt("invalid",t);break;case"textarea":Km(t,i),r=Qf(t,i),dt("invalid",t);break;default:r=i}ed(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ox(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fa(t,l):typeof l=="number"&&fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&Kh(t,s,l,o))}switch(n){case"input":Za(t),$m(t,i,!1);break;case"textarea":Za(t),Zm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)ly(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=$r(Ma.current),$r(_i.current),ol(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:sl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Qt(e),null;case 13:if(ht(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Cn!==null&&e.mode&1&&!(e.flags&128))A_(),ro(),e.flags|=98560,s=!1;else if(s=ol(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[mi]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else ni!==null&&(Ud(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?kt===0&&(kt=3):Lp())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return oo(),Cd(t,e),t===null&&xa(e.stateNode.containerInfo),Qt(e),null;case 10:return mp(e.type._context),Qt(e),null;case 17:return _n(e.type)&&xc(),Qt(e),null;case 19:if(ht(xt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Do(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wc(t),o!==null){for(e.flags|=128,Do(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>lo&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304)}else{if(!i)if(t=wc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return Qt(e),null}else 2*Pt()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=xt.current,ut(xt,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function e1(t,e){switch(fp(e),e.tag){case 1:return _n(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),ht(xn),ht(on),yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(ht(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(xt),null;case 4:return oo(),null;case 10:return mp(e.type._context),null;case 22:case 23:return Dp(),null;case 24:return null;default:return null}}var cl=!1,nn=!1,t1=typeof WeakSet=="function"?WeakSet:Set,Me=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function bd(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Vg=!1;function n1(t,e){if(fd=pc,t=h_(),cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,u=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:t,selectionRange:n},pc=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ei(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){wt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return v=Vg,Vg=!1,v}function ia(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bd(e,n,s)}r=r.next}while(r!==i)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cy(t){var e=t.alternate;e!==null&&(t.alternate=null,cy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[ya],delete e[md],delete e[BT],delete e[kT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uy(t){return t.tag===5||t.tag===3||t.tag===4}function zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(i!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}function Dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}var jt=null,ti=!1;function tr(t,e,n){for(n=n.child;n!==null;)fy(t,e,n),n=n.sibling}function fy(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:nn||zs(n,e);case 6:var i=jt,r=ti;jt=null,tr(t,e,n),jt=i,ti=r,jt!==null&&(ti?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(ti?(t=jt,n=n.stateNode,t.nodeType===8?Bu(t.parentNode,n):t.nodeType===1&&Bu(t,n),ma(t)):Bu(jt,n.stateNode));break;case 4:i=jt,r=ti,jt=n.stateNode.containerInfo,ti=!0,tr(t,e,n),jt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bd(n,e,o),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!nn&&(zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,tr(t,e,n),nn=i):tr(t,e,n);break;default:tr(t,e,n)}}function Gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new t1),e.forEach(function(i){var r=f1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,ti=!1;break e;case 3:jt=a.stateNode.containerInfo,ti=!0;break e;case 4:jt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(jt===null)throw Error(ne(160));fy(s,o,r),jt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dy(e,t),e=e.sibling}function dy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ui(t),i&4){try{ia(3,t,t.return),ru(3,t)}catch(y){wt(t,t.return,y)}try{ia(5,t,t.return)}catch(y){wt(t,t.return,y)}}break;case 1:$n(e,t),ui(t),i&512&&n!==null&&zs(n,n.return);break;case 5:if($n(e,t),ui(t),i&512&&n!==null&&zs(n,n.return),t.flags&32){var r=t.stateNode;try{fa(r,"")}catch(y){wt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ix(r,s),td(a,o);var c=td(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?kx(r,d):f==="dangerouslySetInnerHTML"?Ox(r,d):f==="children"?fa(r,d):Kh(r,f,d,c)}switch(a){case"input":Kf(r,s);break;case"textarea":Ux(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?qs(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?qs(r,!!s.multiple,s.defaultValue,!0):qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ya]=s}catch(y){wt(t,t.return,y)}}break;case 6:if($n(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){wt(t,t.return,y)}}break;case 3:if($n(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(y){wt(t,t.return,y)}break;case 4:$n(e,t),ui(t);break;case 13:$n(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rp=Pt())),i&4&&Gg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||f,$n(e,t),nn=c):$n(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Me=t,f=t.child;f!==null;){for(d=Me=f;Me!==null;){switch(u=Me,p=u.child,u.tag){case 0:case 11:case 14:case 15:ia(4,u,u.return);break;case 1:zs(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){wt(i,n,y)}}break;case 5:zs(u,u.return);break;case 22:if(u.memoizedState!==null){Wg(d);continue}}p!==null?(p.return=u,Me=p):Wg(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bx("display",o))}catch(y){wt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){wt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,t),ui(t),i&4&&Gg(t);break;case 21:break;default:$n(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uy(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fa(r,""),i.flags&=-33);var s=zg(t);Dd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=zg(t);Pd(t,a,o);break;default:throw Error(ne(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function i1(t,e,n){Me=t,hy(t)}function hy(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||cl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=cl;var c=nn;if(cl=o,(nn=l)&&!c)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?jg(r):l!==null?(l.return=o,Me=l):jg(r);for(;s!==null;)Me=s,hy(s),s=s.sibling;Me=r,cl=a,nn=c}Hg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):Hg(t)}}function Hg(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ma(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}nn||e.flags&512&&Rd(e)}catch(u){wt(e,e.return,u)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Wg(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function jg(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Rd(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Rd(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var r1=Math.ceil,bc=Zi.ReactCurrentDispatcher,Cp=Zi.ReactCurrentOwner,Xn=Zi.ReactCurrentBatchConfig,Qe=0,Wt=null,It=null,qt=0,An=0,Gs=Dr(0),kt=0,Aa=null,ss=0,su=0,bp=0,ra=null,gn=null,Rp=0,lo=1/0,Ni=null,Rc=!1,Ld=null,Mr=null,ul=!1,mr=null,Pc=0,sa=0,Nd=null,Zl=-1,Ql=0;function cn(){return Qe&6?Pt():Zl!==-1?Zl:Zl=Pt()}function Er(t){return t.mode&1?Qe&2&&qt!==0?qt&-qt:zT.transition!==null?(Ql===0&&(Ql=Zx()),Ql):(t=tt,t!==0||(t=window.event,t=t===void 0?16:r_(t.type)),t):1}function oi(t,e,n,i){if(50<sa)throw sa=0,Nd=null,Error(ne(185));Ua(t,n,i),(!(Qe&2)||t!==Wt)&&(t===Wt&&(!(Qe&2)&&(su|=n),kt===4&&dr(t,qt)),yn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(lo=Pt()+500,tu&&Lr()))}function yn(t,e){var n=t.callbackNode;zE(t,e);var i=hc(t,t===Wt?qt:0);if(i===0)n!==null&&eg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&eg(n),e===1)t.tag===0?VT(Xg.bind(null,t)):E_(Xg.bind(null,t)),FT(function(){!(Qe&6)&&Lr()}),n=null;else{switch(Qx(i)){case 1:n=tp;break;case 4:n=$x;break;case 16:n=dc;break;case 536870912:n=Kx;break;default:n=dc}n=Sy(n,py.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function py(t,e){if(Zl=-1,Ql=0,Qe&6)throw Error(ne(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var i=hc(t,t===Wt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dc(t,i);else{e=i;var r=Qe;Qe|=2;var s=gy();(Wt!==t||qt!==e)&&(Ni=null,lo=Pt()+500,Jr(t,e));do try{a1();break}catch(a){my(t,a)}while(!0);pp(),bc.current=s,Qe=r,It!==null?e=0:(Wt=null,qt=0,e=kt)}if(e!==0){if(e===2&&(r=od(t),r!==0&&(i=r,e=Id(t,r))),e===1)throw n=Aa,Jr(t,0),dr(t,i),yn(t,Pt()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!s1(r)&&(e=Dc(t,i),e===2&&(s=od(t),s!==0&&(i=s,e=Id(t,s))),e===1))throw n=Aa,Jr(t,0),dr(t,i),yn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:zr(t,gn,Ni);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=Rp+500-Pt(),10<e)){if(hc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pd(zr.bind(null,t,gn,Ni),e);break}zr(t,gn,Ni);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*r1(i/1960))-i,10<i){t.timeoutHandle=pd(zr.bind(null,t,gn,Ni),i);break}zr(t,gn,Ni);break;case 5:zr(t,gn,Ni);break;default:throw Error(ne(329))}}}return yn(t,Pt()),t.callbackNode===n?py.bind(null,t):null}function Id(t,e){var n=ra;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=gn,gn=n,e!==null&&Ud(e)),t}function Ud(t){gn===null?gn=t:gn.push.apply(gn,t)}function s1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~bp,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function Xg(t){if(Qe&6)throw Error(ne(327));Js();var e=hc(t,0);if(!(e&1))return yn(t,Pt()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var i=od(t);i!==0&&(e=i,n=Id(t,i))}if(n===1)throw n=Aa,Jr(t,0),dr(t,e),yn(t,Pt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,gn,Ni),yn(t,Pt()),null}function Pp(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(lo=Pt()+500,tu&&Lr())}}function os(t){mr!==null&&mr.tag===0&&!(Qe&6)&&Js();var e=Qe;Qe|=1;var n=Xn.transition,i=tt;try{if(Xn.transition=null,tt=1,t)return t()}finally{tt=i,Xn.transition=n,Qe=e,!(Qe&6)&&Lr()}}function Dp(){An=Gs.current,ht(Gs)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UT(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(fp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xc();break;case 3:oo(),ht(xn),ht(on),yp();break;case 5:_p(i);break;case 4:oo();break;case 13:ht(xt);break;case 19:ht(xt);break;case 10:mp(i.type._context);break;case 22:case 23:Dp()}n=n.return}if(Wt=t,It=t=Tr(t.current,null),qt=An=e,kt=0,Aa=null,bp=su=ss=0,gn=ra=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}qr=null}return t}function my(t,e){do{var n=It;try{if(pp(),ql.current=Cc,Ac){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ac=!1}if(rs=0,Ht=Ot=yt=null,na=!1,Ea=0,Cp.current=null,n===null||n.return===null){kt=1,Aa=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Ng(o);if(p!==null){p.flags&=-257,Ig(p,o,a,s,e),p.mode&1&&Lg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Lg(s,c,e),Lp();break e}l=Error(ne(426))}}else if(mt&&a.mode&1){var g=Ng(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Ig(g,o,a,s,e),dp(ao(l,a));break e}}s=l=ao(l,a),kt!==4&&(kt=2),ra===null?ra=[s]:ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Q_(s,l,e);Ag(s,h);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Mr===null||!Mr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=J_(s,a,e);Ag(s,M);break e}}s=s.return}while(s!==null)}xy(n)}catch(w){e=w,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function gy(){var t=bc.current;return bc.current=Cc,t===null?Cc:t}function Lp(){(kt===0||kt===3||kt===2)&&(kt=4),Wt===null||!(ss&268435455)&&!(su&268435455)||dr(Wt,qt)}function Dc(t,e){var n=Qe;Qe|=2;var i=gy();(Wt!==t||qt!==e)&&(Ni=null,Jr(t,e));do try{o1();break}catch(r){my(t,r)}while(!0);if(pp(),Qe=n,bc.current=i,It!==null)throw Error(ne(261));return Wt=null,qt=0,kt}function o1(){for(;It!==null;)vy(It)}function a1(){for(;It!==null&&!LE();)vy(It)}function vy(t){var e=yy(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?xy(t):It=e,Cp.current=null}function xy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=e1(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,It=null;return}}else if(n=JT(n,e,An),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);kt===0&&(kt=5)}function zr(t,e,n){var i=tt,r=Xn.transition;try{Xn.transition=null,tt=1,l1(t,e,n,i)}finally{Xn.transition=r,tt=i}return null}function l1(t,e,n,i){do Js();while(mr!==null);if(Qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GE(t,s),t===Wt&&(It=Wt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Sy(dc,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=tt;tt=1;var a=Qe;Qe|=4,Cp.current=null,n1(t,n),dy(n,t),bT(dd),pc=!!fd,dd=fd=null,t.current=n,i1(n),NE(),Qe=a,tt=o,Xn.transition=s}else t.current=n;if(ul&&(ul=!1,mr=t,Pc=r),s=t.pendingLanes,s===0&&(Mr=null),FE(n.stateNode),yn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rc)throw Rc=!1,t=Ld,Ld=null,t;return Pc&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===Nd?sa++:(sa=0,Nd=t):sa=0,Lr(),null}function Js(){if(mr!==null){var t=Qx(Pc),e=Xn.transition,n=tt;try{if(Xn.transition=null,tt=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,Pc=0,Qe&6)throw Error(ne(331));var r=Qe;for(Qe|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var f=Me;switch(f.tag){case 0:case 11:case 15:ia(8,f,s)}var d=f.child;if(d!==null)d.return=f,Me=d;else for(;Me!==null;){f=Me;var u=f.sibling,p=f.return;if(cy(f),f===c){Me=null;break}if(u!==null){u.return=p,Me=u;break}Me=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ia(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Me=h;break e}Me=s.return}}var m=t.current;for(Me=m;Me!==null;){o=Me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Me=x;else e:for(o=m;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ru(9,a)}}catch(w){wt(a,a.return,w)}if(a===o){Me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Me=M;break e}Me=a.return}}if(Qe=r,Lr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Kc,t)}catch{}i=!0}return i}finally{tt=n,Xn.transition=e}}return!1}function Yg(t,e,n){e=ao(n,e),e=Q_(t,e,1),t=Sr(t,e,1),e=cn(),t!==null&&(Ua(t,1,e),yn(t,e))}function wt(t,e,n){if(t.tag===3)Yg(t,t,n);else for(;e!==null;){if(e.tag===3){Yg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=ao(n,t),t=J_(e,t,1),e=Sr(e,t,1),t=cn(),e!==null&&(Ua(e,1,t),yn(e,t));break}}e=e.return}}function c1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(qt&n)===n&&(kt===4||kt===3&&(qt&130023424)===qt&&500>Pt()-Rp?Jr(t,0):bp|=n),yn(t,e)}function _y(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=cn();t=Xi(t,e),t!==null&&(Ua(t,e,n),yn(t,n))}function u1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_y(t,n)}function f1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),_y(t,n)}var yy;yy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,QT(t,e,n);vn=!!(t.flags&131072)}else vn=!1,mt&&e.flags&1048576&&T_(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kl(t,e),t=e.pendingProps;var r=io(e,on.current);Qs(e,n),r=Mp(null,e,i,t,r,n);var s=Ep();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,_c(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vp(e),r.updater=iu,e.stateNode=r,r._reactInternals=e,Sd(e,i,t,n),e=Td(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&up(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=h1(i),t=ei(i,t),r){case 0:e=Ed(null,e,i,t,n);break e;case 1:e=Og(null,e,i,t,n);break e;case 11:e=Ug(null,e,i,t,n);break e;case 14:e=Fg(null,e,i,ei(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Ed(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Og(t,e,i,r,n);case 3:e:{if(iy(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,P_(t,e),Tc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error(ne(423)),e),e=Bg(t,e,i,n,r);break e}else if(i!==r){r=ao(Error(ne(424)),e),e=Bg(t,e,i,n,r);break e}else for(Cn=yr(e.stateNode.containerInfo.firstChild),bn=e,mt=!0,ni=null,n=b_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),i===r){e=Yi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return D_(e),t===null&&xd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,hd(i,r)?o=null:s!==null&&hd(i,s)&&(e.flags|=32),ny(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&xd(e),null;case 13:return ry(t,e,n);case 4:return xp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=so(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Ug(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Mc,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!xn.current){e=Yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_d(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_d(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=Yn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),Fg(t,e,i,r,n);case 15:return ey(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Kl(t,e),e.tag=1,_n(i)?(t=!0,_c(e)):t=!1,Qs(e,n),Z_(e,i,r),Sd(e,i,r,n),Td(null,e,i,!0,t,n);case 19:return sy(t,e,n);case 22:return ty(t,e,n)}throw Error(ne(156,e.tag))};function Sy(t,e){return qx(t,e)}function d1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new d1(t,e,n,i)}function Np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function h1(t){if(typeof t=="function")return Np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qh)return 11;if(t===Jh)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ls:return es(n.children,r,s,e);case Zh:o=8,r|=8;break;case jf:return t=jn(12,n,e,r|2),t.elementType=jf,t.lanes=s,t;case Xf:return t=jn(13,n,e,r),t.elementType=Xf,t.lanes=s,t;case Yf:return t=jn(19,n,e,r),t.elementType=Yf,t.lanes=s,t;case Dx:return ou(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rx:o=10;break e;case Px:o=9;break e;case Qh:o=11;break e;case Jh:o=14;break e;case cr:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=jn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function es(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function ou(t,e,n,i){return t=jn(22,t,i,e),t.elementType=Dx,t.lanes=n,t.stateNode={isHidden:!1},t}function Xu(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function Yu(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function p1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cu(0),this.expirationTimes=Cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ip(t,e,n,i,r,s,o,a,l){return t=new p1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vp(s),t}function m1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function My(t){if(!t)return Ar;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(_n(n))return M_(t,n,e)}return e}function Ey(t,e,n,i,r,s,o,a,l){return t=Ip(n,i,!0,t,r,s,o,a,l),t.context=My(null),n=t.current,i=cn(),r=Er(n),s=ki(i,r),s.callback=e??null,Sr(n,s,r),t.current.lanes=r,Ua(t,r,i),yn(t,i),t}function au(t,e,n,i){var r=e.current,s=cn(),o=Er(r);return n=My(n),e.context===null?e.context=n:e.pendingContext=n,e=ki(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,o),t!==null&&(oi(t,r,o,s),Yl(t,r,o)),o}function Lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Up(t,e){qg(t,e),(t=t.alternate)&&qg(t,e)}function g1(){return null}var Ty=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fp(t){this._internalRoot=t}lu.prototype.render=Fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));au(t,e,null,null)};lu.prototype.unmount=Fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){au(null,t,null,null)}),e[ji]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=t_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&i_(t)}};function Op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $g(){}function v1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Lc(o);s.call(c)}}var o=Ey(e,i,t,0,null,!1,!1,"",$g);return t._reactRootContainer=o,t[ji]=o.current,xa(t.nodeType===8?t.parentNode:t),os(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Lc(l);a.call(c)}}var l=Ip(t,0,!1,null,null,!1,!1,"",$g);return t._reactRootContainer=l,t[ji]=l.current,xa(t.nodeType===8?t.parentNode:t),os(function(){au(e,l,n,i)}),l}function uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Lc(o);a.call(l)}}au(e,o,t,r)}else o=v1(n,e,t,r,i);return Lc(o)}Jx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(np(e,n|1),yn(e,Pt()),!(Qe&6)&&(lo=Pt()+500,Lr()))}break;case 13:os(function(){var i=Xi(t,1);if(i!==null){var r=cn();oi(i,t,1,r)}}),Up(t,1)}};ip=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=cn();oi(e,t,134217728,n)}Up(t,134217728)}};e_=function(t){if(t.tag===13){var e=Er(t),n=Xi(t,e);if(n!==null){var i=cn();oi(n,t,e,i)}Up(t,e)}};t_=function(){return tt};n_=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};id=function(t,e,n){switch(e){case"input":if(Kf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=eu(i);if(!r)throw Error(ne(90));Nx(i),Kf(i,r)}}}break;case"textarea":Ux(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};Gx=Pp;Hx=os;var x1={usingClientEntryPoint:!1,Events:[Oa,Fs,eu,Vx,zx,Pp]},Lo={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_1={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xx(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Kc=fl.inject(_1),xi=fl}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x1;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(e))throw Error(ne(200));return m1(t,e,null,n)};In.createRoot=function(t,e){if(!Op(t))throw Error(ne(299));var n=!1,i="",r=Ty;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ip(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,xa(t.nodeType===8?t.parentNode:t),new Fp(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Xx(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return os(t)};In.hydrate=function(t,e,n){if(!cu(e))throw Error(ne(200));return uu(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!Op(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ty;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ey(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lu(e)};In.render=function(t,e,n){if(!cu(e))throw Error(ne(200));return uu(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!cu(t))throw Error(ne(40));return t._reactRootContainer?(os(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};In.unstable_batchedUpdates=Pp;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cu(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return uu(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function wy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wy)}catch(t){console.error(t)}}wy(),wx.exports=In;var y1=wx.exports,Kg=y1;Hf.createRoot=Kg.createRoot,Hf.hydrateRoot=Kg.hydrateRoot;const qu=["About","Skills","Experience","Education","Projects"];function S1(){const[t,e]=Ae.useState(!1),[n,i]=Ae.useState(!1),[r,s]=Ae.useState("");return Ae.useEffect(()=>{const o=()=>e(window.scrollY>50);return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),Ae.useEffect(()=>{const o=[];return qu.forEach(a=>{const l=document.getElementById(a.toLowerCase());if(!l)return;const c=new IntersectionObserver(([f])=>{f.isIntersecting&&s(a.toLowerCase())},{rootMargin:"-40% 0px -55% 0px"});c.observe(l),o.push(c)}),()=>o.forEach(a=>a.disconnect())},[]),O.jsxs("nav",{className:`fixed top-0 w-full z-50 transition-all duration-300 ${t?"bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/30":"bg-transparent"}`,children:[O.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4 flex items-center justify-between",children:[O.jsxs("a",{href:"#hero",className:"font-mono text-accent font-semibold text-lg tracking-tight",children:["AJ",O.jsx("span",{className:"text-slate-400",children:"."})]}),O.jsxs("ul",{className:"hidden md:flex items-center gap-8",children:[qu.map(o=>O.jsx("li",{children:O.jsxs("a",{href:`#${o.toLowerCase()}`,className:`text-sm font-medium transition-colors duration-200 relative group ${r===o.toLowerCase()?"text-accent":"text-slate-400 hover:text-accent"}`,children:[o,O.jsx("span",{className:`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${r===o.toLowerCase()?"w-full":"w-0 group-hover:w-full"}`})]})},o)),O.jsx("li",{children:O.jsx("a",{href:"https://github.com/Arsalan-007",target:"_blank",rel:"noreferrer",className:"text-sm px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-navy-950 transition-all duration-200 font-medium",children:"GitHub"})})]}),O.jsx("button",{className:"md:hidden text-slate-400 hover:text-accent",onClick:()=>i(!n),children:O.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n?O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),n&&O.jsxs("div",{className:"md:hidden bg-navy-900/98 backdrop-blur-md px-6 pb-6 flex flex-col gap-4",children:[qu.map(o=>O.jsx("a",{href:`#${o.toLowerCase()}`,onClick:()=>i(!1),className:`transition-colors py-1 font-medium ${r===o.toLowerCase()?"text-accent":"text-slate-400 hover:text-accent"}`,children:o},o)),O.jsx("a",{href:"https://github.com/Arsalan-007",target:"_blank",rel:"noreferrer",className:"text-accent border border-accent rounded-md px-4 py-2 text-center hover:bg-accent hover:text-navy-950 transition-all",children:"GitHub"})]})]})}const Ay=Ae.createContext({});function M1(t){const e=Ae.useRef(null);return e.current===null&&(e.current=t()),e.current}const Bp=Ae.createContext(null),Cy=Ae.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function E1(t=!0){const e=Ae.useContext(Bp);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=Ae.useId();Ae.useEffect(()=>{t&&r(s)},[t]);const o=Ae.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const kp=typeof window<"u",T1=kp?Ae.useLayoutEffect:Ae.useEffect,Rn=t=>t;let by=Rn;function Vp(t){let e;return()=>(e===void 0&&(e=t()),e)}const co=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Vi=t=>t*1e3,zi=t=>t/1e3,w1={useManualTiming:!1};function A1(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,f=!1,d=!1)=>{const p=d&&i?e:n;return f&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const dl=["read","resolveKeyframes","update","preRender","render","postRender"],C1=40;function Ry(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=dl.reduce((h,m)=>(h[m]=A1(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:f,render:d,postRender:u}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,C1),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),f.process(r),d.process(r),u.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},v=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:dl.reduce((h,m)=>{const x=o[m];return h[m]=(M,w=!1,T=!1)=>(n||v(),x.schedule(M,w,T)),h},{}),cancel:h=>{for(let m=0;m<dl.length;m++)o[dl[m]].cancel(h)},state:r,steps:o}}const{schedule:pt,cancel:Cr,state:Xt,steps:$u}=Ry(typeof requestAnimationFrame<"u"?requestAnimationFrame:Rn,!0),Py=Ae.createContext({strict:!1}),Zg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},uo={};for(const t in Zg)uo[t]={isEnabled:e=>Zg[t].some(n=>!!e[n])};function b1(t){for(const e in t)uo[e]={...uo[e],...t[e]}}const R1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Nc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||R1.has(t)}let Dy=t=>!Nc(t);function P1(t){t&&(Dy=e=>e.startsWith("on")?!Nc(e):t(e))}try{P1(require("@emotion/is-prop-valid").default)}catch{}function D1(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Dy(r)||n===!0&&Nc(r)||!e&&!Nc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function L1(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const fu=Ae.createContext({});function Ca(t){return typeof t=="string"||Array.isArray(t)}function du(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const zp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gp=["initial",...zp];function hu(t){return du(t.animate)||Gp.some(e=>Ca(t[e]))}function Ly(t){return!!(hu(t)||t.variants)}function N1(t,e){if(hu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ca(n)?n:void 0,animate:Ca(i)?i:void 0}}return t.inherit!==!1?e:{}}function I1(t){const{initial:e,animate:n}=N1(t,Ae.useContext(fu));return Ae.useMemo(()=>({initial:e,animate:n}),[Qg(e),Qg(n)])}function Qg(t){return Array.isArray(t)?t.join(" "):t}const U1=Symbol.for("motionComponentSymbol");function Hs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function F1(t,e,n){return Ae.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Hs(n)&&(n.current=i))},[e])}const Hp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),O1="framerAppearId",Ny="data-"+Hp(O1),{schedule:Wp}=Ry(queueMicrotask,!1),Iy=Ae.createContext({});function B1(t,e,n,i,r){var s,o;const{visualElement:a}=Ae.useContext(fu),l=Ae.useContext(Py),c=Ae.useContext(Bp),f=Ae.useContext(Cy).reducedMotion,d=Ae.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:f}));const u=d.current,p=Ae.useContext(Iy);u&&!u.projection&&r&&(u.type==="html"||u.type==="svg")&&k1(d.current,n,r,p);const v=Ae.useRef(!1);Ae.useInsertionEffect(()=>{u&&v.current&&u.update(n,c)});const y=n[Ny],g=Ae.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return T1(()=>{u&&(v.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),Wp.render(u.render),g.current&&u.animationState&&u.animationState.animateChanges())}),Ae.useEffect(()=>{u&&(!g.current&&u.animationState&&u.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,y)}),g.current=!1))}),u}function k1(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Uy(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Hs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Uy(t){if(t)return t.options.allowProjection!==!1?t.projection:Uy(t.parent)}function V1({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&b1(t);function a(c,f){let d;const u={...Ae.useContext(Cy),...c,layoutId:z1(c)},{isStatic:p}=u,v=I1(c),y=i(c,p);if(!p&&kp){G1();const g=H1(u);d=g.MeasureLayout,v.visualElement=B1(r,y,u,e,g.ProjectionNode)}return O.jsxs(fu.Provider,{value:v,children:[d&&v.visualElement?O.jsx(d,{visualElement:v.visualElement,...u}):null,n(r,c,F1(y,v.visualElement,f),y,p,v.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=Ae.forwardRef(a);return l[U1]=r,l}function z1({layoutId:t}){const e=Ae.useContext(Ay).id;return e&&t!==void 0?e+"-"+t:t}function G1(t,e){Ae.useContext(Py).strict}function H1(t){const{drag:e,layout:n}=uo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const W1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jp(t){return typeof t!="string"||t.includes("-")?!1:!!(W1.indexOf(t)>-1||/[A-Z]/u.test(t))}function Jg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Xp(t,e,n,i){if(typeof e=="function"){const[r,s]=Jg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Jg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Fd=t=>Array.isArray(t),j1=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),X1=t=>Fd(t)?t[t.length-1]||0:t,rn=t=>!!(t&&t.getVelocity);function ec(t){const e=rn(t)?t.get():t;return j1(e)?e.toValue():e}function Y1({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:q1(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const Fy=t=>(e,n)=>{const i=Ae.useContext(fu),r=Ae.useContext(Bp),s=()=>Y1(t,e,i,r);return n?s():M1(s)};function q1(t,e,n,i){const r={},s=i(t,{});for(const u in s)r[u]=ec(s[u]);let{initial:o,animate:a}=t;const l=hu(t),c=Ly(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const d=f?a:o;if(d&&typeof d!="boolean"&&!du(d)){const u=Array.isArray(d)?d:[d];for(let p=0;p<u.length;p++){const v=Xp(t,u[p]);if(v){const{transitionEnd:y,transition:g,...h}=v;for(const m in h){let x=h[m];if(Array.isArray(x)){const M=f?x.length-1:0;x=x[M]}x!==null&&(r[m]=x)}for(const m in y)r[m]=y[m]}}}return r}const yo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ds=new Set(yo),Oy=t=>e=>typeof e=="string"&&e.startsWith(t),By=Oy("--"),$1=Oy("var(--"),Yp=t=>$1(t)?K1.test(t.split("/*")[0].trim()):!1,K1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ky=(t,e)=>e&&typeof t=="number"?e.transform(t):t,qi=(t,e,n)=>n>e?e:n<t?t:n,So={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ba={...So,transform:t=>qi(0,1,t)},hl={...So,default:1},ka=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),lr=ka("deg"),yi=ka("%"),be=ka("px"),Z1=ka("vh"),Q1=ka("vw"),e0={...yi,parse:t=>yi.parse(t)/100,transform:t=>yi.transform(t*100)},J1={borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,backgroundPositionX:be,backgroundPositionY:be},ew={rotate:lr,rotateX:lr,rotateY:lr,rotateZ:lr,scale:hl,scaleX:hl,scaleY:hl,scaleZ:hl,skew:lr,skewX:lr,skewY:lr,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:ba,originX:e0,originY:e0,originZ:be},t0={...So,transform:Math.round},qp={...J1,...ew,zIndex:t0,size:be,fillOpacity:ba,strokeOpacity:ba,numOctaves:t0},tw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},nw=yo.length;function iw(t,e,n){let i="",r=!0;for(let s=0;s<nw;s++){const o=yo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=ky(a,qp[o]);if(!l){r=!1;const f=tw[o]||o;i+=`${f}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function $p(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(ds.has(l)){o=!0;continue}else if(By(l)){r[l]=c;continue}else{const f=ky(c,qp[l]);l.startsWith("origin")?(a=!0,s[l]=f):i[l]=f}}if(e.transform||(o||n?i.transform=iw(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:f=0}=s;i.transformOrigin=`${l} ${c} ${f}`}}const rw={offset:"stroke-dashoffset",array:"stroke-dasharray"},sw={offset:"strokeDashoffset",array:"strokeDasharray"};function ow(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?rw:sw;t[s.offset]=be.transform(-i);const o=be.transform(e),a=be.transform(n);t[s.array]=`${o} ${a}`}function n0(t,e,n){return typeof t=="string"?t:be.transform(e+n*t)}function aw(t,e,n){const i=n0(e,t.x,t.width),r=n0(n,t.y,t.height);return`${i} ${r}`}function Kp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},f,d){if($p(t,c,d),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:u,style:p,dimensions:v}=t;u.transform&&(v&&(p.transform=u.transform),delete u.transform),v&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=aw(v,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(u.x=e),n!==void 0&&(u.y=n),i!==void 0&&(u.scale=i),o!==void 0&&ow(u,o,a,l,!1)}const Zp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Vy=()=>({...Zp(),attrs:{}}),Qp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function zy(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Gy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Hy(t,e,n,i){zy(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Gy.has(r)?r:Hp(r),e.attrs[r])}const Ic={};function lw(t){Object.assign(Ic,t)}function Wy(t,{layout:e,layoutId:n}){return ds.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ic[t]||t==="opacity")}function Jp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(rn(r[o])||e.style&&rn(e.style[o])||Wy(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function jy(t,e,n){const i=Jp(t,e,n);for(const r in t)if(rn(t[r])||rn(e[r])){const s=yo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function cw(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const i0=["x","y","width","height","cx","cy","r"],uw={useVisualState:Fy({scrapeMotionValuesFromProps:jy,createRenderState:Vy,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(ds.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<i0.length;a++){const l=i0[a];t[l]!==e[l]&&(o=!0)}o&&pt.read(()=>{cw(n,i),pt.render(()=>{Kp(i,r,Qp(n.tagName),t.transformTemplate),Hy(n,i)})})}})},fw={useVisualState:Fy({scrapeMotionValuesFromProps:Jp,createRenderState:Zp})};function Xy(t,e,n){for(const i in e)!rn(e[i])&&!Wy(i,n)&&(t[i]=e[i])}function dw({transformTemplate:t},e){return Ae.useMemo(()=>{const n=Zp();return $p(n,e,t),Object.assign({},n.vars,n.style)},[e])}function hw(t,e){const n=t.style||{},i={};return Xy(i,n,t),Object.assign(i,dw(t,e)),i}function pw(t,e){const n={},i=hw(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function mw(t,e,n,i){const r=Ae.useMemo(()=>{const s=Vy();return Kp(s,e,Qp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Xy(s,t.style,t),r.style={...s,...r.style}}return r}function gw(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(jp(n)?mw:pw)(i,s,o,n),c=D1(i,typeof n=="string",t),f=n!==Ae.Fragment?{...c,...l,ref:r}:{},{children:d}=i,u=Ae.useMemo(()=>rn(d)?d.get():d,[d]);return Ae.createElement(n,{...f,children:u})}}function vw(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...jp(i)?uw:fw,preloadedFeatures:t,useRender:gw(r),createVisualElement:e,Component:i};return V1(o)}}function Yy(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function pu(t,e,n){const i=t.getProps();return Xp(i,e,n!==void 0?n:i.custom,t)}const xw=Vp(()=>window.ScrollTimeline!==void 0);class _w{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(xw()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class yw extends _w{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function em(t,e){return t?t[e]||t.default||t:void 0}const Od=2e4;function qy(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Od;)e+=n,i=t.next(e);return e>=Od?1/0:e}function tm(t){return typeof t=="function"}function r0(t,e){t.timeline=e,t.onfinish=null}const nm=t=>Array.isArray(t)&&typeof t[0]=="number",Sw={linearEasing:void 0};function Mw(t,e){const n=Vp(t);return()=>{var i;return(i=Sw[e])!==null&&i!==void 0?i:n()}}const Uc=Mw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),$y=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(co(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function Ky(t){return!!(typeof t=="function"&&Uc()||!t||typeof t=="string"&&(t in Bd||Uc())||nm(t)||Array.isArray(t)&&t.every(Ky))}const Xo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Bd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xo([0,.65,.55,1]),circOut:Xo([.55,0,1,.45]),backIn:Xo([.31,.01,.66,-.59]),backOut:Xo([.33,1.53,.69,.99])};function Zy(t,e){if(t)return typeof t=="function"&&Uc()?$y(t,e):nm(t)?Xo(t):Array.isArray(t)?t.map(n=>Zy(n,e)||Bd.easeOut):Bd[t]}const Jn={x:!1,y:!1};function Qy(){return Jn.x||Jn.y}function Ew(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Jy(t,e){const n=Ew(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function s0(t){return e=>{e.pointerType==="touch"||Qy()||t(e)}}function Tw(t,e,n={}){const[i,r,s]=Jy(t,n),o=s0(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const f=s0(d=>{c(d),l.removeEventListener("pointerleave",f)});l.addEventListener("pointerleave",f,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const eS=(t,e)=>e?t===e?!0:eS(t,e.parentElement):!1,im=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,ww=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Aw(t){return ww.has(t.tagName)||t.tabIndex!==-1}const Yo=new WeakSet;function o0(t){return e=>{e.key==="Enter"&&t(e)}}function Ku(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Cw=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=o0(()=>{if(Yo.has(n))return;Ku(n,"down");const r=o0(()=>{Ku(n,"up")}),s=()=>Ku(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function a0(t){return im(t)&&!Qy()}function bw(t,e,n={}){const[i,r,s]=Jy(t,n),o=a=>{const l=a.currentTarget;if(!a0(a)||Yo.has(l))return;Yo.add(l);const c=e(a),f=(p,v)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",u),!(!a0(p)||!Yo.has(l))&&(Yo.delete(l),typeof c=="function"&&c(p,{success:v}))},d=p=>{f(p,n.useGlobalTarget||eS(l,p.target))},u=p=>{f(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",u,r)};return i.forEach(a=>{!Aw(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>Cw(c,r),r)}),s}function Rw(t){return t==="x"||t==="y"?Jn[t]?null:(Jn[t]=!0,()=>{Jn[t]=!1}):Jn.x||Jn.y?null:(Jn.x=Jn.y=!0,()=>{Jn.x=Jn.y=!1})}const tS=new Set(["width","height","top","left","right","bottom",...yo]);let tc;function Pw(){tc=void 0}const Si={now:()=>(tc===void 0&&Si.set(Xt.isProcessing||w1.useManualTiming?Xt.timestamp:performance.now()),tc),set:t=>{tc=t,queueMicrotask(Pw)}};function rm(t,e){t.indexOf(e)===-1&&t.push(e)}function sm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class om{constructor(){this.subscriptions=[]}add(e){return rm(this.subscriptions,e),()=>sm(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function nS(t,e){return e?t*(1e3/e):0}const l0=30,Dw=t=>!isNaN(parseFloat(t));class Lw{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=Si.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Si.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Dw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new om);const i=this.events[e].add(n);return e==="change"?()=>{i(),pt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Si.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>l0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,l0);return nS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ra(t,e){return new Lw(t,e)}function Nw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ra(n))}function Iw(t,e){const n=pu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=X1(s[o]);Nw(t,o,a)}}function Uw(t){return!!(rn(t)&&t.add)}function kd(t,e){const n=t.getValue("willChange");if(Uw(n))return n.add(e)}function iS(t){return t.props[Ny]}const rS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Fw=1e-7,Ow=12;function Bw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=rS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>Fw&&++a<Ow);return o}function Va(t,e,n,i){if(t===e&&n===i)return Rn;const r=s=>Bw(s,0,1,t,n);return s=>s===0||s===1?s:rS(r(s),e,i)}const sS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,oS=t=>e=>1-t(1-e),aS=Va(.33,1.53,.69,.99),am=oS(aS),lS=sS(am),cS=t=>(t*=2)<1?.5*am(t):.5*(2-Math.pow(2,-10*(t-1))),lm=t=>1-Math.sin(Math.acos(t)),uS=oS(lm),fS=sS(lm),dS=t=>/^0[^.\s]+$/u.test(t);function kw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||dS(t):!0}const oa=t=>Math.round(t*1e5)/1e5,cm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Vw(t){return t==null}const zw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,um=(t,e)=>n=>!!(typeof n=="string"&&zw.test(n)&&n.startsWith(t)||e&&!Vw(n)&&Object.prototype.hasOwnProperty.call(n,e)),hS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(cm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Gw=t=>qi(0,255,t),Zu={...So,transform:t=>Math.round(Gw(t))},Kr={test:um("rgb","red"),parse:hS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Zu.transform(t)+", "+Zu.transform(e)+", "+Zu.transform(n)+", "+oa(ba.transform(i))+")"};function Hw(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Vd={test:um("#"),parse:Hw,transform:Kr.transform},Ws={test:um("hsl","hue"),parse:hS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+yi.transform(oa(e))+", "+yi.transform(oa(n))+", "+oa(ba.transform(i))+")"},tn={test:t=>Kr.test(t)||Vd.test(t)||Ws.test(t),parse:t=>Kr.test(t)?Kr.parse(t):Ws.test(t)?Ws.parse(t):Vd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Kr.transform(t):Ws.transform(t)},Ww=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function jw(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(cm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Ww))===null||n===void 0?void 0:n.length)||0)>0}const pS="number",mS="color",Xw="var",Yw="var(",c0="${}",qw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Pa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(qw,l=>(tn.test(l)?(i.color.push(s),r.push(mS),n.push(tn.parse(l))):l.startsWith(Yw)?(i.var.push(s),r.push(Xw),n.push(l)):(i.number.push(s),r.push(pS),n.push(parseFloat(l))),++s,c0)).split(c0);return{values:n,split:a,indexes:i,types:r}}function gS(t){return Pa(t).values}function vS(t){const{split:e,types:n}=Pa(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===pS?s+=oa(r[o]):a===mS?s+=tn.transform(r[o]):s+=r[o]}return s}}const $w=t=>typeof t=="number"?0:t;function Kw(t){const e=gS(t);return vS(t)(e.map($w))}const br={test:jw,parse:gS,createTransformer:vS,getAnimatableNone:Kw},Zw=new Set(["brightness","contrast","saturate","opacity"]);function Qw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(cm)||[];if(!i)return t;const r=n.replace(i,"");let s=Zw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Jw=/\b([a-z-]*)\(.*?\)/gu,zd={...br,getAnimatableNone:t=>{const e=t.match(Jw);return e?e.map(Qw).join(" "):t}},eA={...qp,color:tn,backgroundColor:tn,outlineColor:tn,fill:tn,stroke:tn,borderColor:tn,borderTopColor:tn,borderRightColor:tn,borderBottomColor:tn,borderLeftColor:tn,filter:zd,WebkitFilter:zd},fm=t=>eA[t];function xS(t,e){let n=fm(t);return n!==zd&&(n=br),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const tA=new Set(["auto","none","0"]);function nA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!tA.has(s)&&Pa(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=xS(n,r)}const u0=t=>t===So||t===be,f0=(t,e)=>parseFloat(t.split(", ")[e]),d0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return f0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?f0(s[1],t):0}},iA=new Set(["x","y","z"]),rA=yo.filter(t=>!iA.has(t));function sA(t){const e=[];return rA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const fo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:d0(4,13),y:d0(5,14)};fo.translateX=fo.x;fo.translateY=fo.y;const ts=new Set;let Gd=!1,Hd=!1;function _S(){if(Hd){const t=Array.from(ts).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=sA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Hd=!1,Gd=!1,ts.forEach(t=>t.complete()),ts.clear()}function yS(){ts.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Hd=!0)})}function oA(){yS(),_S()}class dm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ts.add(this),Gd||(Gd=!0,pt.read(yS),pt.resolveKeyframes(_S))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ts.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ts.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const SS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),aA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function lA(t){const e=aA.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function MS(t,e,n=1){const[i,r]=lA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return SS(o)?parseFloat(o):o}return Yp(r)?MS(r,e,n+1):r}const ES=t=>e=>e.test(t),cA={test:t=>t==="auto",parse:t=>t},TS=[So,be,yi,lr,Q1,Z1,cA],h0=t=>TS.find(ES(t));class wS extends dm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Yp(c))){const f=MS(c,n.current);f!==void 0&&(e[l]=f),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!tS.has(i)||e.length!==2)return;const[r,s]=e,o=h0(r),a=h0(s);if(o!==a)if(u0(o)&&u0(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)kw(e[r])&&i.push(r);i.length&&nA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=fo[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=fo[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const p0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(br.test(t)||t==="0")&&!t.startsWith("url("));function uA(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function fA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=p0(r,e),a=p0(s,e);return!o||!a?!1:uA(t)||(n==="spring"||tm(n))&&i}const dA=t=>t!==null;function mu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(dA),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const hA=40;class AS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Si.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>hA?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&oA(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Si.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!fA(e,i,r,s))if(o)this.options.duration=0;else{l&&l(mu(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const f=this.initPlayback(e,n);f!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...f},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const _t=(t,e,n)=>t+(e-t)*n;function Qu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function pA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Qu(l,a,t+1/3),s=Qu(l,a,t),o=Qu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Fc(t,e){return n=>n>0?e:t}const Ju=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},mA=[Vd,Kr,Ws],gA=t=>mA.find(e=>e.test(t));function m0(t){const e=gA(t);if(!e)return!1;let n=e.parse(t);return e===Ws&&(n=pA(n)),n}const g0=(t,e)=>{const n=m0(t),i=m0(e);if(!n||!i)return Fc(t,e);const r={...n};return s=>(r.red=Ju(n.red,i.red,s),r.green=Ju(n.green,i.green,s),r.blue=Ju(n.blue,i.blue,s),r.alpha=_t(n.alpha,i.alpha,s),Kr.transform(r))},vA=(t,e)=>n=>e(t(n)),za=(...t)=>t.reduce(vA),Wd=new Set(["none","hidden"]);function xA(t,e){return Wd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function _A(t,e){return n=>_t(t,e,n)}function hm(t){return typeof t=="number"?_A:typeof t=="string"?Yp(t)?Fc:tn.test(t)?g0:MA:Array.isArray(t)?CS:typeof t=="object"?tn.test(t)?g0:yA:Fc}function CS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>hm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function yA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=hm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function SA(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const MA=(t,e)=>{const n=br.createTransformer(e),i=Pa(t),r=Pa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Wd.has(t)&&!r.values.length||Wd.has(e)&&!i.values.length?xA(t,e):za(CS(SA(i,r),r.values),n):Fc(t,e)};function bS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?_t(t,e,n):hm(t)(t,e)}const EA=5;function RS(t,e,n){const i=Math.max(e-EA,0);return nS(n-t(i),e-i)}const Tt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ef=.001;function TA({duration:t=Tt.duration,bounce:e=Tt.bounce,velocity:n=Tt.velocity,mass:i=Tt.mass}){let r,s,o=1-e;o=qi(Tt.minDamping,Tt.maxDamping,o),t=qi(Tt.minDuration,Tt.maxDuration,zi(t)),o<1?(r=c=>{const f=c*o,d=f*t,u=f-n,p=jd(c,o),v=Math.exp(-d);return ef-u/p*v},s=c=>{const d=c*o*t,u=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,v=Math.exp(-d),y=jd(Math.pow(c,2),o);return(-r(c)+ef>0?-1:1)*((u-p)*v)/y}):(r=c=>{const f=Math.exp(-c*t),d=(c-n)*t+1;return-ef+f*d},s=c=>{const f=Math.exp(-c*t),d=(n-c)*(t*t);return f*d});const a=5/t,l=AA(r,s,a);if(t=Vi(t),isNaN(l))return{stiffness:Tt.stiffness,damping:Tt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const wA=12;function AA(t,e,n){let i=n;for(let r=1;r<wA;r++)i=i-t(i)/e(i);return i}function jd(t,e){return t*Math.sqrt(1-e*e)}const CA=["duration","bounce"],bA=["stiffness","damping","mass"];function v0(t,e){return e.some(n=>t[n]!==void 0)}function RA(t){let e={velocity:Tt.velocity,stiffness:Tt.stiffness,damping:Tt.damping,mass:Tt.mass,isResolvedFromDuration:!1,...t};if(!v0(t,bA)&&v0(t,CA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*qi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Tt.mass,stiffness:r,damping:s}}else{const n=TA(t);e={...e,...n,mass:Tt.mass},e.isResolvedFromDuration=!0}return e}function PS(t=Tt.visualDuration,e=Tt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:f,duration:d,velocity:u,isResolvedFromDuration:p}=RA({...n,velocity:-zi(n.velocity||0)}),v=u||0,y=c/(2*Math.sqrt(l*f)),g=o-s,h=zi(Math.sqrt(l/f)),m=Math.abs(g)<5;i||(i=m?Tt.restSpeed.granular:Tt.restSpeed.default),r||(r=m?Tt.restDelta.granular:Tt.restDelta.default);let x;if(y<1){const w=jd(h,y);x=T=>{const C=Math.exp(-y*h*T);return o-C*((v+y*h*g)/w*Math.sin(w*T)+g*Math.cos(w*T))}}else if(y===1)x=w=>o-Math.exp(-h*w)*(g+(v+h*g)*w);else{const w=h*Math.sqrt(y*y-1);x=T=>{const C=Math.exp(-y*h*T),_=Math.min(w*T,300);return o-C*((v+y*h*g)*Math.sinh(_)+w*g*Math.cosh(_))/w}}const M={calculatedDuration:p&&d||null,next:w=>{const T=x(w);if(p)a.done=w>=d;else{let C=0;y<1&&(C=w===0?Vi(v):RS(x,w,T));const _=Math.abs(C)<=i,b=Math.abs(o-T)<=r;a.done=_&&b}return a.value=a.done?o:T,a},toString:()=>{const w=Math.min(qy(M),Od),T=$y(C=>M.next(w*C).value,w,30);return w+"ms "+T}};return M}function x0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:f}){const d=t[0],u={done:!1,value:d},p=_=>a!==void 0&&_<a||l!==void 0&&_>l,v=_=>a===void 0?l:l===void 0||Math.abs(a-_)<Math.abs(l-_)?a:l;let y=n*e;const g=d+y,h=o===void 0?g:o(g);h!==g&&(y=h-d);const m=_=>-y*Math.exp(-_/i),x=_=>h+m(_),M=_=>{const b=m(_),R=x(_);u.done=Math.abs(b)<=c,u.value=u.done?h:R};let w,T;const C=_=>{p(u.value)&&(w=_,T=PS({keyframes:[u.value,v(u.value)],velocity:RS(x,_,u.value),damping:r,stiffness:s,restDelta:c,restSpeed:f}))};return C(0),{calculatedDuration:null,next:_=>{let b=!1;return!T&&w===void 0&&(b=!0,M(_),C(_)),w!==void 0&&_>=w?T.next(_-w):(!b&&M(_),u)}}}const PA=Va(.42,0,1,1),DA=Va(0,0,.58,1),DS=Va(.42,0,.58,1),LA=t=>Array.isArray(t)&&typeof t[0]!="number",NA={linear:Rn,easeIn:PA,easeInOut:DS,easeOut:DA,circIn:lm,circInOut:fS,circOut:uS,backIn:am,backInOut:lS,backOut:aS,anticipate:cS},_0=t=>{if(nm(t)){by(t.length===4);const[e,n,i,r]=t;return Va(e,n,i,r)}else if(typeof t=="string")return NA[t];return t};function IA(t,e,n){const i=[],r=n||bS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Rn:e;a=za(l,a)}i.push(a)}return i}function UA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(by(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=IA(e,i,r),l=a.length,c=f=>{if(o&&f<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(f<t[d+1]);d++);const u=co(t[d],t[d+1],f);return a[d](u)};return n?f=>c(qi(t[0],t[s-1],f)):c}function FA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=co(0,e,i);t.push(_t(n,1,r))}}function OA(t){const e=[0];return FA(e,t.length-1),e}function BA(t,e){return t.map(n=>n*e)}function kA(t,e){return t.map(()=>e||DS).splice(0,t.length-1)}function Oc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=LA(i)?i.map(_0):_0(i),s={done:!1,value:e[0]},o=BA(n&&n.length===e.length?n:OA(e),t),a=UA(o,e,{ease:Array.isArray(r)?r:kA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const VA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>pt.update(e,!0),stop:()=>Cr(e),now:()=>Xt.isProcessing?Xt.timestamp:Si.now()}},zA={decay:x0,inertia:x0,tween:Oc,keyframes:Oc,spring:PS},GA=t=>t/100;class pm extends AS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||dm,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=tm(n)?n:zA[n]||Oc;let l,c;a!==Oc&&typeof e[0]!="number"&&(l=za(GA,bS(e[0],e[1])),e=[0,100]);const f=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),f.calculatedDuration===null&&(f.calculatedDuration=qy(f));const{calculatedDuration:d}=f,u=d+r,p=u*(i+1)-r;return{generator:f,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:u,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:_}=this.options;return{done:!0,value:_[_.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:f,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:u,repeat:p,repeatType:v,repeatDelay:y,onUpdate:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-f/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-u*(this.speed>=0?1:-1),m=this.speed>=0?h<0:h>f;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=f);let x=this.currentTime,M=s;if(p){const _=Math.min(this.currentTime,f)/d;let b=Math.floor(_),R=_%1;!R&&_>=1&&(R=1),R===1&&b--,b=Math.min(b,p+1),!!(b%2)&&(v==="reverse"?(R=1-R,y&&(R-=y/d)):v==="mirror"&&(M=o)),x=qi(0,1,R)*d}const w=m?{done:!1,value:l[0]}:M.next(x);a&&(w.value=a(w.value));let{done:T}=w;!m&&c!==null&&(T=this.speed>=0?this.currentTime>=f:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return C&&r!==void 0&&(w.value=mu(l,this.options,r)),g&&g(w.value),C&&this.finish(),w}get duration(){const{resolved:e}=this;return e?zi(e.calculatedDuration):0}get time(){return zi(this.currentTime)}set time(e){e=Vi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=zi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=VA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const HA=new Set(["opacity","clipPath","filter","transform"]);function WA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const f=Zy(a,r);return Array.isArray(f)&&(c.easing=f),t.animate(c,{delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const jA=Vp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Bc=10,XA=2e4;function YA(t){return tm(t.type)||t.type==="spring"||!Ky(t.ease)}function qA(t,e){const n=new pm({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<XA;)i=n.sample(s),r.push(i.value),s+=Bc;return{times:void 0,keyframes:r,duration:s-Bc,ease:"linear"}}const LS={anticipate:cS,backInOut:lS,circInOut:fS};function $A(t){return t in LS}class y0 extends AS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new wS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Uc()&&$A(s)&&(s=LS[s]),YA(this.options)){const{onComplete:d,onUpdate:u,motionValue:p,element:v,...y}=this.options,g=qA(e,y);e=g.keyframes,e.length===1&&(e[1]=e[0]),i=g.duration,r=g.times,s=g.ease,o="keyframes"}const f=WA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return f.startTime=c??this.calcStartTime(),this.pendingTimeline?(r0(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:d}=this.options;a.set(mu(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return zi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return zi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Vi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Rn;const{animation:i}=n;r0(i,e)}return Rn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:f,onComplete:d,element:u,...p}=this.options,v=new pm({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=Vi(this.time);c.setWithVelocity(v.sample(y-Bc).value,v.sample(y).value,Bc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return jA()&&i&&HA.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const KA={type:"spring",stiffness:500,damping:25,restSpeed:10},ZA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),QA={type:"keyframes",duration:.8},JA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},eC=(t,{keyframes:e})=>e.length>2?QA:ds.has(t)?t.startsWith("scale")?ZA(e[1]):KA:JA;function tC({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...f}){return!!Object.keys(f).length}const mm=(t,e,n,i={},r,s)=>o=>{const a=em(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Vi(l);let f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:u=>{e.set(u),a.onUpdate&&a.onUpdate(u)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};tC(a)||(f={...f,...eC(t,f)}),f.duration&&(f.duration=Vi(f.duration)),f.repeatDelay&&(f.repeatDelay=Vi(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let d=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(f.duration=0,f.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const u=mu(f.keyframes,a);if(u!==void 0)return pt.update(()=>{f.onUpdate(u),f.onComplete()}),new yw([])}return!s&&y0.supports(f)?new y0(f):new pm(f)};function nC({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function NS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],f=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const u=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||f&&nC(f,d))continue;const v={delay:n,...em(o||{},d)};let y=!1;if(window.MotionHandoffAnimation){const h=iS(t);if(h){const m=window.MotionHandoffAnimation(h,d,pt);m!==null&&(v.startTime=m,y=!0)}}kd(t,d),u.start(mm(d,u,p,t.shouldReduceMotion&&tS.has(d)?{type:!1}:v,t,y));const g=u.animation;g&&c.push(g)}return a&&Promise.all(c).then(()=>{pt.update(()=>{a&&Iw(t,a)})}),c}function Xd(t,e,n={}){var i;const r=pu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(NS(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:f=0,staggerChildren:d,staggerDirection:u}=s;return iC(t,e,f+c,d,u,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,f]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>f())}else return Promise.all([o(),a(n.delay)])}function iC(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(rC).forEach((c,f)=>{c.notify("AnimationStart",e),o.push(Xd(c,e,{...s,delay:n+l(f)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function rC(t,e){return t.sortNodePosition(e)}function sC(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Xd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Xd(t,e,n);else{const r=typeof e=="function"?pu(t,e,n.custom):e;i=Promise.all(NS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const oC=Gp.length;function IS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?IS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<oC;n++){const i=Gp[n],r=t.props[i];(Ca(r)||r===!1)&&(e[i]=r)}return e}const aC=[...zp].reverse(),lC=zp.length;function cC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>sC(t,n,i)))}function uC(t){let e=cC(t),n=S0(),i=!0;const r=l=>(c,f)=>{var d;const u=pu(t,f,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(u){const{transition:p,transitionEnd:v,...y}=u;c={...c,...y,...v}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,f=IS(t.parent)||{},d=[],u=new Set;let p={},v=1/0;for(let g=0;g<lC;g++){const h=aC[g],m=n[h],x=c[h]!==void 0?c[h]:f[h],M=Ca(x),w=h===l?m.isActive:null;w===!1&&(v=g);let T=x===f[h]&&x!==c[h]&&M;if(T&&i&&t.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...p},!m.isActive&&w===null||!x&&!m.prevProp||du(x)||typeof x=="boolean")continue;const C=fC(m.prevProp,x);let _=C||h===l&&m.isActive&&!T&&M||g>v&&M,b=!1;const R=Array.isArray(x)?x:[x];let P=R.reduce(r(h),{});w===!1&&(P={});const{prevResolvedValues:B={}}=m,j={...B,...P},q=U=>{_=!0,u.has(U)&&(b=!0,u.delete(U)),m.needsAnimating[U]=!0;const F=t.getValue(U);F&&(F.liveStyle=!1)};for(const U in j){const F=P[U],X=B[U];if(p.hasOwnProperty(U))continue;let Z=!1;Fd(F)&&Fd(X)?Z=!Yy(F,X):Z=F!==X,Z?F!=null?q(U):u.add(U):F!==void 0&&u.has(U)?q(U):m.protectedKeys[U]=!0}m.prevProp=x,m.prevResolvedValues=P,m.isActive&&(p={...p,...P}),i&&t.blockInitialAnimation&&(_=!1),_&&(!(T&&C)||b)&&d.push(...R.map(U=>({animation:U,options:{type:h}})))}if(u.size){const g={};u.forEach(h=>{const m=t.getBaseTarget(h),x=t.getValue(h);x&&(x.liveStyle=!0),g[h]=m??null}),d.push({animation:g})}let y=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(d):Promise.resolve()}function a(l,c){var f;if(n[l].isActive===c)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(u=>{var p;return(p=u.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const u in n)n[u].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=S0(),i=!0}}}function fC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Yy(e,t):!1}function Ur(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function S0(){return{animate:Ur(!0),whileInView:Ur(),whileHover:Ur(),whileTap:Ur(),whileDrag:Ur(),whileFocus:Ur(),exit:Ur()}}class Nr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class dC extends Nr{constructor(e){super(e),e.animationState||(e.animationState=uC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();du(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let hC=0;class pC extends Nr{constructor(){super(...arguments),this.id=hC++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const mC={animation:{Feature:dC},exit:{Feature:pC}};function Da(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ga(t){return{point:{x:t.pageX,y:t.pageY}}}const gC=t=>e=>im(e)&&t(e,Ga(e));function aa(t,e,n,i){return Da(t,e,gC(n),i)}const M0=(t,e)=>Math.abs(t-e);function vC(t,e){const n=M0(t.x,e.x),i=M0(t.y,e.y);return Math.sqrt(n**2+i**2)}class US{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=nf(this.lastMoveEventInfo,this.history),u=this.startEvent!==null,p=vC(d.offset,{x:0,y:0})>=3;if(!u&&!p)return;const{point:v}=d,{timestamp:y}=Xt;this.history.push({...v,timestamp:y});const{onStart:g,onMove:h}=this.handlers;u||(g&&g(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,u)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=tf(u,this.transformPagePoint),pt.update(this.updatePoint,!0)},this.handlePointerUp=(d,u)=>{this.end();const{onEnd:p,onSessionEnd:v,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=nf(d.type==="pointercancel"?this.lastMoveEventInfo:tf(u,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,g),v&&v(d,g)},!im(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ga(e),a=tf(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Xt;this.history=[{...l,timestamp:c}];const{onSessionStart:f}=n;f&&f(e,nf(a,this.history)),this.removeListeners=za(aa(this.contextWindow,"pointermove",this.handlePointerMove),aa(this.contextWindow,"pointerup",this.handlePointerUp),aa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Cr(this.updatePoint)}}function tf(t,e){return e?{point:e(t.point)}:t}function E0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function nf({point:t},e){return{point:t,delta:E0(t,FS(e)),offset:E0(t,xC(e)),velocity:_C(e,.1)}}function xC(t){return t[0]}function FS(t){return t[t.length-1]}function _C(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=FS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Vi(e)));)n--;if(!i)return{x:0,y:0};const s=zi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const OS=1e-4,yC=1-OS,SC=1+OS,BS=.01,MC=0-BS,EC=0+BS;function Nn(t){return t.max-t.min}function TC(t,e,n){return Math.abs(t-e)<=n}function T0(t,e,n,i=.5){t.origin=i,t.originPoint=_t(e.min,e.max,t.origin),t.scale=Nn(n)/Nn(e),t.translate=_t(n.min,n.max,t.origin)-t.originPoint,(t.scale>=yC&&t.scale<=SC||isNaN(t.scale))&&(t.scale=1),(t.translate>=MC&&t.translate<=EC||isNaN(t.translate))&&(t.translate=0)}function la(t,e,n,i){T0(t.x,e.x,n.x,i?i.originX:void 0),T0(t.y,e.y,n.y,i?i.originY:void 0)}function w0(t,e,n){t.min=n.min+e.min,t.max=t.min+Nn(e)}function wC(t,e,n){w0(t.x,e.x,n.x),w0(t.y,e.y,n.y)}function A0(t,e,n){t.min=e.min-n.min,t.max=t.min+Nn(e)}function ca(t,e,n){A0(t.x,e.x,n.x),A0(t.y,e.y,n.y)}function AC(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?_t(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?_t(n,t,i.max):Math.min(t,n)),t}function C0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function CC(t,{top:e,left:n,bottom:i,right:r}){return{x:C0(t.x,n,r),y:C0(t.y,e,i)}}function b0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function bC(t,e){return{x:b0(t.x,e.x),y:b0(t.y,e.y)}}function RC(t,e){let n=.5;const i=Nn(t),r=Nn(e);return r>i?n=co(e.min,e.max-i,t.min):i>r&&(n=co(t.min,t.max-r,e.min)),qi(0,1,n)}function PC(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Yd=.35;function DC(t=Yd){return t===!1?t=0:t===!0&&(t=Yd),{x:R0(t,"left","right"),y:R0(t,"top","bottom")}}function R0(t,e,n){return{min:P0(t,e),max:P0(t,n)}}function P0(t,e){return typeof t=="number"?t:t[e]||0}const D0=()=>({translate:0,scale:1,origin:0,originPoint:0}),js=()=>({x:D0(),y:D0()}),L0=()=>({min:0,max:0}),Rt=()=>({x:L0(),y:L0()});function kn(t){return[t("x"),t("y")]}function kS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function LC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function NC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function rf(t){return t===void 0||t===1}function qd({scale:t,scaleX:e,scaleY:n}){return!rf(t)||!rf(e)||!rf(n)}function Gr(t){return qd(t)||VS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function VS(t){return N0(t.x)||N0(t.y)}function N0(t){return t&&t!=="0%"}function kc(t,e,n){const i=t-n,r=e*i;return n+r}function I0(t,e,n,i,r){return r!==void 0&&(t=kc(t,r,i)),kc(t,n,i)+e}function $d(t,e=0,n=1,i,r){t.min=I0(t.min,e,n,i,r),t.max=I0(t.max,e,n,i,r)}function zS(t,{x:e,y:n}){$d(t.x,e.translate,e.scale,e.originPoint),$d(t.y,n.translate,n.scale,n.originPoint)}const U0=.999999999999,F0=1.0000000000001;function IC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ys(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,zS(t,o)),i&&Gr(s.latestValues)&&Ys(t,s.latestValues))}e.x<F0&&e.x>U0&&(e.x=1),e.y<F0&&e.y>U0&&(e.y=1)}function Xs(t,e){t.min=t.min+e,t.max=t.max+e}function O0(t,e,n,i,r=.5){const s=_t(t.min,t.max,r);$d(t,e,n,s,i)}function Ys(t,e){O0(t.x,e.x,e.scaleX,e.scale,e.originX),O0(t.y,e.y,e.scaleY,e.scale,e.originY)}function GS(t,e){return kS(NC(t.getBoundingClientRect(),e))}function UC(t,e,n){const i=GS(t,n),{scroll:r}=e;return r&&(Xs(i.x,r.offset.x),Xs(i.y,r.offset.y)),i}const HS=({current:t})=>t?t.ownerDocument.defaultView:null,FC=new WeakMap;class OC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Rt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=f=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ga(f).point)},s=(f,d)=>{const{drag:u,dragPropagation:p,onDragStart:v}=this.getProps();if(u&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Rw(u),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),kn(g=>{let h=this.getAxisMotionValue(g).get()||0;if(yi.test(h)){const{projection:m}=this.visualElement;if(m&&m.layout){const x=m.layout.layoutBox[g];x&&(h=Nn(x)*(parseFloat(h)/100))}}this.originPoint[g]=h}),v&&pt.postRender(()=>v(f,d)),kd(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(f,d)=>{const{dragPropagation:u,dragDirectionLock:p,onDirectionLock:v,onDrag:y}=this.getProps();if(!u&&!this.openDragLock)return;const{offset:g}=d;if(p&&this.currentDirection===null){this.currentDirection=BC(g),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,g),this.updateAxis("y",d.point,g),this.visualElement.render(),y&&y(f,d)},a=(f,d)=>this.stop(f,d),l=()=>kn(f=>{var d;return this.getAnimationState(f)==="paused"&&((d=this.getAxisMotionValue(f).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new US(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:HS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&pt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!pl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=AC(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Hs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=CC(r.layoutBox,n):this.constraints=!1,this.elastic=DC(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&kn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=PC(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Hs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=UC(i,r.root,this.visualElement.getTransformPagePoint());let o=bC(r.layout.layoutBox,s);if(n){const a=n(LC(o));this.hasMutatedConstraints=!!a,a&&(o=kS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=kn(f=>{if(!pl(f,n,this.currentDirection))return;let d=l&&l[f]||{};o&&(d={min:0,max:0});const u=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[f]:0,bounceStiffness:u,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(f,v)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return kd(this.visualElement,e),i.start(mm(e,i,0,n,this.visualElement,!1))}stopAnimation(){kn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){kn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){kn(n=>{const{drag:i}=this.getProps();if(!pl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-_t(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Hs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};kn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=RC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),kn(o=>{if(!pl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(_t(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;FC.set(this.visualElement,this);const e=this.visualElement.current,n=aa(e,"pointerdown",l=>{const{drag:c,dragListener:f=!0}=this.getProps();c&&f&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Hs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),pt.read(i);const o=Da(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(kn(f=>{const d=this.getAxisMotionValue(f);d&&(this.originPoint[f]+=l[f].translate,d.set(d.get()+l[f].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Yd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function pl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function BC(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class kC extends Nr{constructor(e){super(e),this.removeGroupControls=Rn,this.removeListeners=Rn,this.controls=new OC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Rn}unmount(){this.removeGroupControls(),this.removeListeners()}}const B0=t=>(e,n)=>{t&&pt.postRender(()=>t(e,n))};class VC extends Nr{constructor(){super(...arguments),this.removePointerDownListener=Rn}onPointerDown(e){this.session=new US(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:HS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:B0(e),onStart:B0(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&pt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=aa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const nc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function k0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const No={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(be.test(t))t=parseFloat(t);else return t;const n=k0(t,e.target.x),i=k0(t,e.target.y);return`${n}% ${i}%`}},zC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=br.parse(t);if(r.length>5)return i;const s=br.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=_t(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class GC extends Ae.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;lw(HC),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),nc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||pt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Wp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function WS(t){const[e,n]=E1(),i=Ae.useContext(Ay);return O.jsx(GC,{...t,layoutGroup:i,switchLayoutGroup:Ae.useContext(Iy),isPresent:e,safeToRemove:n})}const HC={borderRadius:{...No,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:No,borderTopRightRadius:No,borderBottomLeftRadius:No,borderBottomRightRadius:No,boxShadow:zC};function WC(t,e,n){const i=rn(t)?t:Ra(t);return i.start(mm("",i,e,n)),i.animation}function jC(t){return t instanceof SVGElement&&t.tagName!=="svg"}const XC=(t,e)=>t.depth-e.depth;class YC{constructor(){this.children=[],this.isDirty=!1}add(e){rm(this.children,e),this.isDirty=!0}remove(e){sm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(XC),this.isDirty=!1,this.children.forEach(e)}}function qC(t,e){const n=Si.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Cr(i),t(s-e))};return pt.read(i,!0),()=>Cr(i)}const jS=["TopLeft","TopRight","BottomLeft","BottomRight"],$C=jS.length,V0=t=>typeof t=="string"?parseFloat(t):t,z0=t=>typeof t=="number"||be.test(t);function KC(t,e,n,i,r,s){r?(t.opacity=_t(0,n.opacity!==void 0?n.opacity:1,ZC(i)),t.opacityExit=_t(e.opacity!==void 0?e.opacity:1,0,QC(i))):s&&(t.opacity=_t(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<$C;o++){const a=`border${jS[o]}Radius`;let l=G0(e,a),c=G0(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||z0(l)===z0(c)?(t[a]=Math.max(_t(V0(l),V0(c),i),0),(yi.test(c)||yi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=_t(e.rotate||0,n.rotate||0,i))}function G0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const ZC=XS(0,.5,uS),QC=XS(.5,.95,Rn);function XS(t,e,n){return i=>i<t?0:i>e?1:n(co(t,e,i))}function H0(t,e){t.min=e.min,t.max=e.max}function On(t,e){H0(t.x,e.x),H0(t.y,e.y)}function W0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function j0(t,e,n,i,r){return t-=e,t=kc(t,1/n,i),r!==void 0&&(t=kc(t,1/r,i)),t}function JC(t,e=0,n=1,i=.5,r,s=t,o=t){if(yi.test(e)&&(e=parseFloat(e),e=_t(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=_t(s.min,s.max,i);t===s&&(a-=e),t.min=j0(t.min,e,n,a,r),t.max=j0(t.max,e,n,a,r)}function X0(t,e,[n,i,r],s,o){JC(t,e[n],e[i],e[r],e.scale,s,o)}const eb=["x","scaleX","originX"],tb=["y","scaleY","originY"];function Y0(t,e,n,i){X0(t.x,e,eb,n?n.x:void 0,i?i.x:void 0),X0(t.y,e,tb,n?n.y:void 0,i?i.y:void 0)}function q0(t){return t.translate===0&&t.scale===1}function YS(t){return q0(t.x)&&q0(t.y)}function $0(t,e){return t.min===e.min&&t.max===e.max}function nb(t,e){return $0(t.x,e.x)&&$0(t.y,e.y)}function K0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function qS(t,e){return K0(t.x,e.x)&&K0(t.y,e.y)}function Z0(t){return Nn(t.x)/Nn(t.y)}function Q0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class ib{constructor(){this.members=[]}add(e){rm(this.members,e),e.scheduleRender()}remove(e){if(sm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function rb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:f,rotateX:d,rotateY:u,skewX:p,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),f&&(i+=`rotate(${f}deg) `),d&&(i+=`rotateX(${d}deg) `),u&&(i+=`rotateY(${u}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Hr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},qo=typeof window<"u"&&window.MotionDebug!==void 0,sf=["","X","Y","Z"],sb={visibility:"hidden"},J0=1e3;let ob=0;function of(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function $S(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=iS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",pt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&$S(i)}function KS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=ob++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,qo&&(Hr.totalNodes=Hr.resolvedTargetDeltas=Hr.recalculatedProjection=0),this.nodes.forEach(cb),this.nodes.forEach(pb),this.nodes.forEach(mb),this.nodes.forEach(ub),qo&&window.MotionDebug.record(Hr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new YC)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new om),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=jC(o),this.instance=o;const{layoutId:l,layout:c,visualElement:f}=this.options;if(f&&!f.current&&f.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const u=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=qC(u,250),nc.hasAnimatedSinceResize&&(nc.hasAnimatedSinceResize=!1,this.nodes.forEach(tv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&f&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:u,hasRelativeTargetChanged:p,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||f.getDefaultTransition()||yb,{onLayoutAnimationStart:g,onLayoutAnimationComplete:h}=f.getProps(),m=!this.targetLayout||!qS(this.targetLayout,v)||p,x=!u&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||u&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,x);const M={...em(y,"layout"),onPlay:g,onComplete:h};(f.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else u||tv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Cr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&$S(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ev);return}this.isUpdating||this.nodes.forEach(db),this.isUpdating=!1,this.nodes.forEach(hb),this.nodes.forEach(ab),this.nodes.forEach(lb),this.clearAllSnapshots();const a=Si.now();Xt.delta=qi(0,1e3/60,a-Xt.timestamp),Xt.timestamp=a,Xt.isProcessing=!0,$u.update.process(Xt),$u.preRender.process(Xt),$u.render.process(Xt),Xt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(fb),this.sharedNodes.forEach(vb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,pt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){pt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Rt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!YS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;o&&(a||Gr(this.latestValues)||f)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Sb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Rt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Mb))){const{scroll:f}=this.root;f&&(Xs(l.x,f.offset.x),Xs(l.y,f.offset.y))}return l}removeElementScroll(o){var a;const l=Rt();if(On(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const f=this.path[c],{scroll:d,options:u}=f;f!==this.root&&d&&u.layoutScroll&&(d.wasRoot&&On(l,o),Xs(l.x,d.offset.x),Xs(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Rt();On(l,o);for(let c=0;c<this.path.length;c++){const f=this.path[c];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Ys(l,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),Gr(f.latestValues)&&Ys(l,f.latestValues)}return Gr(this.latestValues)&&Ys(l,this.latestValues),l}removeTransform(o){const a=Rt();On(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Gr(c.latestValues))continue;qd(c.latestValues)&&c.updateSnapshot();const f=Rt(),d=c.measurePageBox();On(f,d),Y0(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,f)}return Gr(this.latestValues)&&Y0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Xt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:u}=this.options;if(!(!this.layout||!(d||u))){if(this.resolvedRelativeTargetAt=Xt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Rt(),this.relativeTargetOrigin=Rt(),ca(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),On(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Rt(),this.targetWithTransforms=Rt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),wC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):On(this.target,this.layout.layoutBox),zS(this.target,this.targetDelta)):On(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Rt(),this.relativeTargetOrigin=Rt(),ca(this.relativeTargetOrigin,this.target,p.target),On(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}qo&&Hr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||qd(this.parent.latestValues)||VS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Xt.timestamp&&(c=!1),c)return;const{layout:f,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||d))return;On(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,p=this.treeScale.y;IC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Rt());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(W0(this.prevProjectionDelta.x,this.projectionDelta.x),W0(this.prevProjectionDelta.y,this.projectionDelta.y)),la(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==u||this.treeScale.y!==p||!Q0(this.projectionDelta.x,this.prevProjectionDelta.x)||!Q0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),qo&&Hr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=js(),this.projectionDelta=js(),this.projectionDeltaWithTransform=js()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},f={...this.latestValues},d=js();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const u=Rt(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=p!==v,g=this.getStack(),h=!g||g.members.length<=1,m=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(_b));this.animationProgress=0;let x;this.mixTargetDelta=M=>{const w=M/1e3;nv(d.x,o.x,w),nv(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ca(u,this.layout.layoutBox,this.relativeParent.layout.layoutBox),xb(this.relativeTarget,this.relativeTargetOrigin,u,w),x&&nb(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Rt()),On(x,this.relativeTarget)),y&&(this.animationValues=f,KC(f,c,this.latestValues,w,m,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Cr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=pt.update(()=>{nc.hasAnimatedSinceResize=!0,this.currentAnimation=WC(0,J0,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(J0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:f}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&ZS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Rt();const d=Nn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const u=Nn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+u}On(a,l),Ys(a,f),la(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new ib),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&of("z",o,c,this.animationValues);for(let f=0;f<sf.length;f++)of(`rotate${sf[f]}`,o,c,this.animationValues),of(`skew${sf[f]}`,o,c,this.animationValues);o.render();for(const f in c)o.setStaticValue(f,c[f]),this.animationValues&&(this.animationValues[f]=c[f]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return sb;const c={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=ec(o==null?void 0:o.pointerEvents)||"",c.transform=f?f(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=ec(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Gr(this.latestValues)&&(y.transform=f?f({},""):"none",this.hasProjected=!1),y}const u=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=rb(this.projectionDeltaWithTransform,this.treeScale,u),f&&(c.transform=f(u,c.transform));const{x:p,y:v}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${v.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=u.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:c.opacity=d===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const y in Ic){if(u[y]===void 0)continue;const{correct:g,applyTo:h}=Ic[y],m=c.transform==="none"?u[y]:g(u[y],d);if(h){const x=h.length;for(let M=0;M<x;M++)c[h[M]]=m}else c[y]=m}return this.options.layoutId&&(c.pointerEvents=d===this?ec(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(ev),this.root.sharedNodes.clear()}}}function ab(t){t.updateLayout()}function lb(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?kn(d=>{const u=o?n.measuredBox[d]:n.layoutBox[d],p=Nn(u);u.min=i[d].min,u.max=u.min+p}):ZS(s,n.layoutBox,i)&&kn(d=>{const u=o?n.measuredBox[d]:n.layoutBox[d],p=Nn(i[d]);u.max=u.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=js();la(a,i,n.layoutBox);const l=js();o?la(l,t.applyTransform(r,!0),n.measuredBox):la(l,i,n.layoutBox);const c=!YS(a);let f=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:u,layout:p}=d;if(u&&p){const v=Rt();ca(v,n.layoutBox,u.layoutBox);const y=Rt();ca(y,i,p.layoutBox),qS(v,y)||(f=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=v,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:f})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function cb(t){qo&&Hr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function ub(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function fb(t){t.clearSnapshot()}function ev(t){t.clearMeasurements()}function db(t){t.isLayoutDirty=!1}function hb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function tv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function pb(t){t.resolveTargetDelta()}function mb(t){t.calcProjection()}function gb(t){t.resetSkewAndRotation()}function vb(t){t.removeLeadSnapshot()}function nv(t,e,n){t.translate=_t(e.translate,0,n),t.scale=_t(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function iv(t,e,n,i){t.min=_t(e.min,n.min,i),t.max=_t(e.max,n.max,i)}function xb(t,e,n,i){iv(t.x,e.x,n.x,i),iv(t.y,e.y,n.y,i)}function _b(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const yb={duration:.45,ease:[.4,0,.1,1]},rv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),sv=rv("applewebkit/")&&!rv("chrome/")?Math.round:Rn;function ov(t){t.min=sv(t.min),t.max=sv(t.max)}function Sb(t){ov(t.x),ov(t.y)}function ZS(t,e,n){return t==="position"||t==="preserve-aspect"&&!TC(Z0(e),Z0(n),.2)}function Mb(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const Eb=KS({attachResizeListener:(t,e)=>Da(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),af={current:void 0},QS=KS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!af.current){const t=new Eb({});t.mount(window),t.setOptions({layoutScroll:!0}),af.current=t}return af.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Tb={pan:{Feature:VC},drag:{Feature:kC,ProjectionNode:QS,MeasureLayout:WS}};function av(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&pt.postRender(()=>s(e,Ga(e)))}class wb extends Nr{mount(){const{current:e}=this.node;e&&(this.unmount=Tw(e,n=>(av(this.node,n,"Start"),i=>av(this.node,i,"End"))))}unmount(){}}class Ab extends Nr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=za(Da(this.node.current,"focus",()=>this.onFocus()),Da(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function lv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&pt.postRender(()=>s(e,Ga(e)))}class Cb extends Nr{mount(){const{current:e}=this.node;e&&(this.unmount=bw(e,n=>(lv(this.node,n,"Start"),(i,{success:r})=>lv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Kd=new WeakMap,lf=new WeakMap,bb=t=>{const e=Kd.get(t.target);e&&e(t)},Rb=t=>{t.forEach(bb)};function Pb({root:t,...e}){const n=t||document;lf.has(n)||lf.set(n,{});const i=lf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(Rb,{root:t,...e})),i[r]}function Db(t,e,n){const i=Pb(e);return Kd.set(t,n),i.observe(t),()=>{Kd.delete(t),i.unobserve(t)}}const Lb={some:0,all:1};class Nb extends Nr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:Lb[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),u=c?f:d;u&&u(l)};return Db(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Ib(e,n))&&this.startObserver()}unmount(){}}function Ib({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Ub={inView:{Feature:Nb},tap:{Feature:Cb},focus:{Feature:Ab},hover:{Feature:wb}},Fb={layout:{ProjectionNode:QS,MeasureLayout:WS}},Zd={current:null},JS={current:!1};function Ob(){if(JS.current=!0,!!kp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Zd.current=t.matches;t.addListener(e),e()}else Zd.current=!1}const Bb=[...TS,tn,br],kb=t=>Bb.find(ES(t)),cv=new WeakMap;function Vb(t,e,n){for(const i in e){const r=e[i],s=n[i];if(rn(r))t.addValue(i,r);else if(rn(s))t.addValue(i,Ra(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Ra(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const uv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class zb{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=dm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Si.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,pt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:f}=o;this.onUpdate=f,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=hu(n),this.isVariantNode=Ly(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in u){const v=u[p];l[p]!==void 0&&rn(v)&&v.set(l[p],!1)}}mount(e){this.current=e,cv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),JS.current||Ob(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Zd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){cv.delete(this.current),this.projection&&this.projection.unmount(),Cr(this.notifyUpdate),Cr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=ds.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&pt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in uo){const n=uo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Rt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<uv.length;i++){const r=uv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=Vb(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ra(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(SS(r)||dS(r))?r=parseFloat(r):!kb(r)&&br.test(n)&&(r=xS(e,n)),this.setBaseTarget(e,rn(r)?r.get():r)),rn(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Xp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!rn(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new om),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class eM extends zb{constructor(){super(...arguments),this.KeyframeResolver=wS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;rn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Gb(t){return window.getComputedStyle(t)}class Hb extends eM{constructor(){super(...arguments),this.type="html",this.renderInstance=zy}readValueFromInstance(e,n){if(ds.has(n)){const i=fm(n);return i&&i.default||0}else{const i=Gb(e),r=(By(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return GS(e,n)}build(e,n,i){$p(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Jp(e,n,i)}}class Wb extends eM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Rt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ds.has(n)){const i=fm(n);return i&&i.default||0}return n=Gy.has(n)?n:Hp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return jy(e,n,i)}build(e,n,i){Kp(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){Hy(e,n,i,r)}mount(e){this.isSVGTag=Qp(e.tagName),super.mount(e)}}const jb=(t,e)=>jp(t)?new Wb(e):new Hb(e,{allowProjection:t!==Ae.Fragment}),Xb=vw({...mC,...Ub,...Tb,...Fb},jb),Bt=L1(Xb),fv=["Software Engineer","Data Analytics Student","Full-Stack Developer","ML Enthusiast"];function Yb(){const[t,e]=Ae.useState(0),[n,i]=Ae.useState(""),[r,s]=Ae.useState(!1);return Ae.useEffect(()=>{const o=fv[t];let a;return!r&&n.length<o.length?a=setTimeout(()=>i(o.slice(0,n.length+1)),80):!r&&n.length===o.length?a=setTimeout(()=>s(!0),2e3):r&&n.length>0?a=setTimeout(()=>i(o.slice(0,n.length-1)),40):r&&n.length===0&&(s(!1),e((t+1)%fv.length)),()=>clearTimeout(a)},[n,r,t]),O.jsxs("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center overflow-hidden",style:{background:"transparent"},children:[O.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"}),O.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-dark/5 rounded-full blur-3xl pointer-events-none"}),O.jsxs("div",{className:"relative z-10 text-center px-6 max-w-4xl mx-auto",children:[O.jsx(Bt.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"font-mono text-accent text-sm mb-4 tracking-widest uppercase",children:"Hi, I'm"}),O.jsx(Bt.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},className:"text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight",children:"Arsalan Jawed"}),O.jsxs(Bt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"text-xl md:text-2xl text-slate-400 mb-8 h-8 font-mono",children:[O.jsx("span",{className:"gradient-text",children:n}),O.jsx("span",{className:"animate-pulse text-accent",children:"|"})]}),O.jsx(Bt.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},className:"text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed",children:"Software engineer & M.Sc. Data Analytics student based in Hildesheim, Germany. Building at the intersection of full-stack development, data engineering, and machine learning."}),O.jsxs(Bt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},className:"flex flex-wrap gap-4 justify-center",children:[O.jsx("a",{href:"#projects",className:"px-6 py-3 bg-accent text-navy-950 font-semibold rounded-lg hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/20",children:"View Projects"}),O.jsx("a",{href:"mailto:arsalan.jawed@outlook.com",className:"px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:border-accent hover:text-accent transition-all duration-200",children:"Get In Touch"})]}),O.jsx(Bt.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},className:"flex justify-center gap-6 mt-12",children:[{label:"GitHub",href:"https://github.com/Arsalan-007",icon:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"},{label:"LinkedIn",href:"https://linkedin.com/in/arsalanjawed007",icon:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}].map(({label:o,href:a,icon:l})=>O.jsx("a",{href:a,target:"_blank",rel:"noreferrer",className:"text-slate-500 hover:text-accent transition-colors duration-200","aria-label":o,children:O.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{d:l})})},o))})]}),O.jsxs(Bt.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1},className:"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600",children:[O.jsx("span",{className:"text-xs font-mono tracking-widest uppercase",children:"Scroll"}),O.jsx(Bt.div,{animate:{y:[0,8,0]},transition:{repeat:1/0,duration:1.5},children:O.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]})]})}const qb=[{label:"Location",value:"Hildesheim, Germany"},{label:"Degree",value:"M.Sc. Data Analytics (ongoing)"},{label:"Availability",value:"20 hrs/week (Student Visa)"},{label:"Languages",value:"English (Fluent), Urdu (Native)"},{label:"Email",value:"arsalan.jawed@outlook.com",href:"mailto:arsalan.jawed@outlook.com"}];function $b(){return O.jsx("section",{id:"about",className:"py-24",children:O.jsx("div",{className:"max-w-6xl mx-auto px-6",children:O.jsxs(Bt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"flex flex-col md:flex-row gap-16 items-center",children:[O.jsx("div",{className:"flex-shrink-0",children:O.jsx("div",{className:"w-52 h-52 rounded-2xl border-2 border-accent/30 overflow-hidden",children:O.jsx("img",{src:"/IMG_1075.png",alt:"Arsalan Jawed",className:"w-full h-full object-cover"})})}),O.jsxs("div",{className:"flex-1",children:[O.jsx("p",{className:"font-mono text-accent text-sm mb-2 tracking-widest uppercase",children:"About Me"}),O.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-6",children:["Building things that ",O.jsx("span",{className:"gradient-text",children:"matter"})]}),O.jsx("p",{className:"text-slate-400 leading-relaxed mb-8",children:"I'm a software engineer and data analytics student with hands-on experience in full-stack web development, ETL pipelines, and banking software. Currently pursuing my M.Sc. in Data Analytics at Universität Hildesheim, I work at the intersection of modern web technologies and data-driven systems — from React frontends to PySpark pipelines and ML models."}),O.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:qb.map(({label:t,value:e,href:n})=>O.jsxs("div",{className:"flex gap-3",children:[O.jsx("span",{className:"text-accent font-mono text-sm mt-0.5",children:"▹"}),O.jsxs("div",{children:[O.jsxs("span",{className:"text-slate-500 text-sm",children:[t,": "]}),n?O.jsx("a",{href:n,className:"text-slate-300 text-sm hover:text-accent transition-colors",children:e}):O.jsx("span",{className:"text-slate-300 text-sm",children:e})]})]},t))})]})]})})})}const Kb=[{category:"Frontend",icon:"🖥️",skills:[{name:"React.js",devicon:"devicon-react-original colored"},{name:"TypeScript",devicon:"devicon-typescript-plain colored"},{name:"JavaScript",devicon:"devicon-javascript-plain colored"},{name:"Tailwind CSS",devicon:"devicon-tailwindcss-plain colored"},{name:"Redux",devicon:"devicon-redux-original colored"},{name:"SASS",devicon:"devicon-sass-original colored"},{name:"React Native",devicon:"devicon-react-original colored"}]},{category:"Data & Cloud",icon:"☁️",skills:[{name:"AWS",devicon:"devicon-amazonwebservices-plain-wordmark colored"},{name:"Databricks",img:"/Databricks-Emblem.png"},{name:"Snowflake",img:"/snowflake.png"},{name:"PySpark",devicon:"devicon-apachespark-original colored"},{name:"Docker",devicon:"devicon-docker-plain colored"}]},{category:"Data Analysis",icon:"📊",skills:[{name:"Python",devicon:"devicon-python-plain colored"},{name:"SQL",devicon:"devicon-azuresqldatabase-plain colored"},{name:"Pandas",devicon:"devicon-pandas-plain colored"},{name:"NumPy",devicon:"devicon-numpy-plain colored"},{name:"Jupyter",devicon:"devicon-jupyter-plain colored"}]},{category:"Machine Learning",icon:"🤖",skills:[{name:"PyTorch",devicon:"devicon-pytorch-plain colored"},{name:"TensorFlow",devicon:"devicon-tensorflow-original colored"},{name:"Scikit-learn",devicon:"devicon-scikitlearn-plain colored"},{name:"OpenCV",devicon:"devicon-opencv-plain colored"}]},{category:"Backend & Other",icon:"⚙️",skills:[{name:"Java",devicon:"devicon-java-plain colored"},{name:"Node.js",devicon:"devicon-nodejs-plain colored"},{name:"Express",devicon:"devicon-express-original"},{name:"MongoDB",devicon:"devicon-mongodb-plain colored"},{name:"Git",devicon:"devicon-git-plain colored"},{name:"Linux",devicon:"devicon-linux-plain"}]}];function Zb(){return O.jsx("section",{id:"skills",className:"py-24",children:O.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[O.jsxs(Bt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-16",children:[O.jsx("p",{className:"font-mono text-accent text-sm mb-2 tracking-widest uppercase",children:"What I work with"}),O.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white",children:"Skills & Technologies"})]}),O.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Kb.map((t,e)=>O.jsxs(Bt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:e*.1},className:"bg-navy-800/60 border border-navy-700/50 rounded-xl p-6 card-glow transition-all duration-300 hover:border-accent/30",children:[O.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[O.jsx("span",{className:"text-2xl",children:t.icon}),O.jsx("h3",{className:"text-white font-semibold",children:t.category})]}),O.jsx("div",{className:"flex flex-wrap gap-3",children:t.skills.map((n,i)=>O.jsxs(Bt.div,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.3,delay:e*.05+i*.04},whileHover:{scale:1.12,y:-2},className:"flex flex-col items-center gap-1.5 group cursor-default",title:n.name,children:[O.jsx("div",{className:"w-14 h-14 bg-navy-700/80 border border-navy-600/50 rounded-xl flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-200",children:n.img?O.jsx("img",{src:n.img,alt:n.name,className:"w-8 h-8 object-contain"}):n.svg?O.jsx("span",{className:"w-8 h-8",dangerouslySetInnerHTML:{__html:n.svg}}):O.jsx("i",{className:`${n.devicon} text-3xl`})}),O.jsx("span",{className:"text-slate-500 text-xs font-mono group-hover:text-slate-300 transition-colors",children:n.name})]},n.name))})]},t.category))})]})})}const Qb=[{role:"Software Engineer",company:"Habib Bank AG Zurich",period:"Oct 2024 – Mar 2025",location:"Karachi, Pakistan",bullets:["Developed and integrated features for proprietary banking software in Java","Led development of an ETL pipeline for the wealth management module, automating ingestion, transformation, and validation of customer data","Provided application support by handling and resolving tickets across various banking modules (Java & SQL)","Collaborated with cross-functional teams to troubleshoot issues and ensure timely delivery"],tags:["Java","SQL","ETL","Banking Software"]},{role:"Front-End Developer",company:"Codex",period:"Jun 2023 – Aug 2023",location:"Karachi, Pakistan",bullets:["Developed a React Native Android messaging app with real-time chat, friend list management, and last-seen functionality","Built a web-based learning platform with an interactive code editor and integrated compiler for practicing programming languages"],tags:["React Native","React.js","JavaScript","WebSockets"]}];function Jb(){return O.jsx("section",{id:"experience",className:"py-24",children:O.jsxs("div",{className:"max-w-4xl mx-auto px-6",children:[O.jsxs(Bt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-16",children:[O.jsx("p",{className:"font-mono text-accent text-sm mb-2 tracking-widest uppercase",children:"Where I've worked"}),O.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white",children:"Work Experience"})]}),O.jsxs("div",{className:"relative",children:[O.jsx("div",{className:"absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent -translate-x-1/2 hidden md:block"}),O.jsx("div",{className:"flex flex-col gap-12",children:Qb.map((t,e)=>O.jsxs(Bt.div,{initial:{opacity:0,x:e%2===0?-30:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.1},className:`relative md:w-1/2 ${e%2===0?"md:pr-12 md:self-start":"md:pl-12 md:self-end md:ml-auto"}`,children:[O.jsx("div",{className:`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-accent border-2 border-navy-950 ${e%2===0?"-right-[6.5px]":"-left-[6.5px]"}`}),O.jsxs("div",{className:"bg-navy-800/60 border border-navy-700/50 rounded-xl p-6 card-glow hover:border-accent/30 transition-all duration-300",children:[O.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-2 mb-1",children:[O.jsx("h3",{className:"text-white font-semibold text-lg",children:t.role}),O.jsx("span",{className:"font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded",children:t.period})]}),O.jsx("p",{className:"text-accent-light font-medium mb-1",children:t.company}),O.jsx("p",{className:"text-slate-500 text-sm mb-4",children:t.location}),O.jsx("ul",{className:"space-y-2 mb-5",children:t.bullets.map((n,i)=>O.jsxs("li",{className:"flex gap-3 text-slate-400 text-sm leading-relaxed",children:[O.jsx("span",{className:"text-accent mt-1 flex-shrink-0",children:"▹"}),n]},i))}),O.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(n=>O.jsx("span",{className:"text-xs font-mono px-2 py-1 rounded bg-navy-700/80 text-slate-400 border border-navy-600/50",children:n},n))})]})]},e))})]})]})})}const eR=[{degree:"M.Sc. Data Analytics",school:"Universität Hildesheim",period:"April 2025 – Present",location:"Hildesheim, Germany",highlights:["Big Data Analytics: Multi-threading, distributed ML, scalable ETL","Advanced Machine Learning: CNNs, RNNs, Decision Trees, K-Means","Distributed Data Analytics Lab: PySpark, TensorFlow, PyTorch"],badge:"Current"},{degree:"B.Sc. Computer Science",school:"Institute of Business Administration (IBA)",period:"Sept 2020 – Aug 2024",location:"Karachi, Pakistan",highlights:['Thesis: "Enhancing Cyber Security through Machine Learning"',"Courses: Calculus I & II, Linear Algebra, Artificial Intelligence","GPA: 2.9 / 4.0"],badge:"Graduated"}];function tR(){return O.jsx("section",{id:"education",className:"py-24",children:O.jsxs("div",{className:"max-w-4xl mx-auto px-6",children:[O.jsxs(Bt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-16",children:[O.jsx("p",{className:"font-mono text-accent text-sm mb-2 tracking-widest uppercase",children:"Academic Background"}),O.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white",children:"Education"})]}),O.jsx("div",{className:"flex flex-col gap-6",children:eR.map((t,e)=>O.jsxs(Bt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:e*.15},className:"bg-navy-800/60 border border-navy-700/50 rounded-xl p-6 card-glow hover:border-accent/30 transition-all duration-300",children:[O.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3 mb-2",children:[O.jsxs("div",{children:[O.jsx("h3",{className:"text-white font-semibold text-xl",children:t.degree}),O.jsx("p",{className:"text-accent-light font-medium mt-1",children:t.school})]}),O.jsxs("div",{className:"flex flex-col items-end gap-2",children:[O.jsx("span",{className:`text-xs font-mono px-3 py-1 rounded-full border ${t.badge==="Current"?"bg-accent/15 text-accent border-accent/30":"bg-slate-700/50 text-slate-400 border-slate-600/50"}`,children:t.badge}),O.jsx("span",{className:"font-mono text-xs text-slate-500",children:t.period})]})]}),O.jsx("p",{className:"text-slate-500 text-sm mb-4",children:t.location}),O.jsx("ul",{className:"space-y-2",children:t.highlights.map((n,i)=>O.jsxs("li",{className:"flex gap-3 text-slate-400 text-sm",children:[O.jsx("span",{className:"text-accent mt-0.5 flex-shrink-0",children:"▹"}),n]},i))})]},e))})]})})}const nR=[{title:"ETL Pipeline Dashboard",description:"Full-stack ETL pipeline fetching live stock data for 20 Hamburg-listed companies via Yahoo Finance. Features Pandas transformations, MA7/MA30 indicators, data quality tracking, volume analysis, and CSV export — all visualized in a real-time React dashboard.",tags:["Python","FastAPI","Pandas","SQLite","React.js","Recharts"],github:"https://github.com/Arsalan-007/etl-pipeline-dashboard",demo:"#",status:"live",image:"/card-etl.png"},{title:"ML Cybersecurity Anomaly Detector",description:"Machine learning system for detecting network anomalies and cyber threats. Built on my B.Sc. thesis research, featuring a web UI to visualize model predictions in real time.",tags:["Python","Scikit-learn","PyTorch","React.js","FastAPI"],github:"#",demo:"#",status:"coming-soon",image:null},{title:"Real-Time Chat App",description:"A full-stack real-time messaging app with Socket.io WebSockets, MongoDB persistence, read receipts (✓✓), live online/offline status, accurate last-seen timestamps, and typing indicators. Rebuilt from a React Native app I originally built at Codex.",tags:["React.js","Node.js","Socket.io","MongoDB","Tailwind CSS"],github:"https://github.com/Arsalan-007/real-time-chat-app",demo:"#",status:"live",image:"/card-chat.png"},{title:"Interactive Code Learning Platform",description:"A full rebuild of my first project — an in-browser coding platform with Monaco Editor, Python/Java/C++ compiler support, 5 structured challenges, a collapsible hints system, and an automatic verdict system that validates your solution against hidden test cases.",tags:["React.js","Node.js","Monaco Editor","Express","compilex"],github:"https://github.com/Arsalan-007/code-learning-platform",demo:"#",status:"live",image:"/card-code.png"}];function iR(){return O.jsx("section",{id:"projects",className:"py-24",children:O.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[O.jsxs(Bt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-16",children:[O.jsx("p",{className:"font-mono text-accent text-sm mb-2 tracking-widest uppercase",children:"What I've built"}),O.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white",children:"Projects"})]}),O.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:nR.map((t,e)=>O.jsxs(Bt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:e*.1},className:"group bg-navy-800/60 border border-navy-700/50 rounded-xl overflow-hidden card-glow hover:border-accent/30 transition-all duration-300 flex flex-col",children:[O.jsxs("div",{className:"relative h-44 overflow-hidden bg-navy-900/80 flex-shrink-0",children:[t.image?O.jsxs(O.Fragment,{children:[O.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"}),O.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-navy-800/90 via-navy-800/20 to-transparent"})]}):O.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center gap-3",children:[O.jsx("svg",{className:"w-12 h-12 text-navy-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),O.jsx("span",{className:"text-slate-600 text-xs font-mono",children:"Coming Soon"})]}),O.jsxs("div",{className:"absolute top-3 right-3",children:[t.status==="coming-soon"&&O.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 backdrop-blur-sm",children:"soon"}),t.status==="live"&&O.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm",children:"live"})]})]}),O.jsxs("div",{className:"p-6 flex flex-col flex-1",children:[O.jsxs("div",{className:"flex items-start justify-between mb-3",children:[O.jsx("h3",{className:"text-white font-semibold text-lg group-hover:text-accent transition-colors duration-200 leading-tight",children:t.title}),O.jsxs("div",{className:"flex gap-3 flex-shrink-0 ml-3",children:[O.jsx("a",{href:t.github,target:"_blank",rel:"noreferrer",className:"text-slate-500 hover:text-accent transition-colors","aria-label":"GitHub",children:O.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})})}),O.jsx("a",{href:t.demo,className:"text-slate-500 hover:text-accent transition-colors","aria-label":"Live Demo",children:O.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]})]}),O.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-5 flex-1",children:t.description}),O.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(n=>O.jsx("span",{className:"text-xs font-mono px-2 py-1 rounded bg-navy-700/80 text-accent/80 border border-accent/15",children:n},n))})]})]},e))}),O.jsxs(Bt.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"text-center text-slate-600 font-mono text-sm mt-10",children:["More projects coming soon — check back or"," ",O.jsx("a",{href:"https://github.com/Arsalan-007",target:"_blank",rel:"noreferrer",className:"text-accent hover:underline",children:"follow on GitHub"})]})]})})}function rR(){return O.jsx("footer",{className:"border-t border-navy-800/50 py-8",children:O.jsxs("div",{className:"max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4",children:[O.jsxs("p",{className:"font-mono text-slate-600 text-sm",children:["Designed & built by ",O.jsx("span",{className:"text-accent",children:"Arsalan Jawed"})]}),O.jsxs("div",{className:"flex gap-6",children:[O.jsx("a",{href:"https://github.com/Arsalan-007",target:"_blank",rel:"noreferrer",className:"text-slate-600 hover:text-accent transition-colors text-sm font-mono",children:"GitHub"}),O.jsx("a",{href:"https://linkedin.com/in/arsalanjawed007",target:"_blank",rel:"noreferrer",className:"text-slate-600 hover:text-accent transition-colors text-sm font-mono",children:"LinkedIn"}),O.jsx("a",{href:"mailto:arsalan.jawed@outlook.com",className:"text-slate-600 hover:text-accent transition-colors text-sm font-mono",children:"Email"})]})]})})}function sR(){const[t,e]=Ae.useState(0);return Ae.useEffect(()=>{const n=()=>{const i=window.scrollY,r=document.documentElement.scrollHeight-window.innerHeight;e(r>0?i/r*100:0)};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),O.jsx("div",{className:"fixed top-0 left-0 w-full h-0.5 z-[100] bg-navy-900/50",children:O.jsx("div",{className:"h-full bg-gradient-to-r from-accent-dark via-accent to-accent-light transition-none",style:{width:`${t}%`}})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gm="184",oR=0,dv=1,aR=2,ic=1,lR=2,$o=3,Rr=0,un=1,Ui=2,Gi=0,eo=1,hv=2,pv=3,mv=4,cR=5,jr=100,uR=101,fR=102,dR=103,hR=104,pR=200,mR=201,gR=202,vR=203,Qd=204,Jd=205,xR=206,_R=207,yR=208,SR=209,MR=210,ER=211,TR=212,wR=213,AR=214,eh=0,th=1,nh=2,ho=3,ih=4,rh=5,sh=6,oh=7,tM=0,CR=1,bR=2,Mi=0,nM=1,iM=2,rM=3,sM=4,oM=5,aM=6,lM=7,cM=300,as=301,po=302,cf=303,uf=304,gu=306,ah=1e3,Bi=1001,lh=1002,Yt=1003,RR=1004,ml=1005,sn=1006,ff=1007,Zr=1008,Wn=1009,uM=1010,fM=1011,La=1012,vm=1013,Ti=1014,gi=1015,$i=1016,xm=1017,_m=1018,Na=1020,dM=35902,hM=35899,pM=1021,mM=1022,ri=1023,Ki=1026,Qr=1027,gM=1028,ym=1029,ls=1030,Sm=1031,Mm=1033,rc=33776,sc=33777,oc=33778,ac=33779,ch=35840,uh=35841,fh=35842,dh=35843,hh=36196,ph=37492,mh=37496,gh=37488,vh=37489,Vc=37490,xh=37491,_h=37808,yh=37809,Sh=37810,Mh=37811,Eh=37812,Th=37813,wh=37814,Ah=37815,Ch=37816,bh=37817,Rh=37818,Ph=37819,Dh=37820,Lh=37821,Nh=36492,Ih=36494,Uh=36495,Fh=36283,Oh=36284,zc=36285,Bh=36286,PR=3200,gv=0,DR=1,hr="",Vn="srgb",Gc="srgb-linear",Hc="linear",et="srgb",vs=7680,vv=519,LR=512,NR=513,IR=514,Em=515,UR=516,FR=517,Tm=518,OR=519,xv=35044,_v="300 es",vi=2e3,Wc=2001;function BR(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kR(){const t=jc("canvas");return t.style.display="block",t}const yv={};function Sv(...t){const e="THREE."+t.shift();console.log(e,...t)}function vM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=vM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=vM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function kh(...t){const e=t.join(" ");e in yv||(yv[e]=!0,De(...t))}function VR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const zR={[eh]:th,[nh]:sh,[ih]:oh,[ho]:rh,[th]:eh,[sh]:nh,[oh]:ih,[rh]:ho};class hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],df=Math.PI/180,Vh=180/Math.PI;function Ha(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function GR(t,e){return(t%e+e)%e}function hf(t,e,n){return(1-n)*t+n*e}function Io(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Rm=class Rm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rm.prototype.isVector2=!0;let st=Rm;class Mo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],u=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(d!==y||l!==u||c!==p||f!==v){let g=l*u+c*p+f*v+d*y;g<0&&(u=-u,p=-p,v=-v,y=-y,g=-g);let h=1-a;if(g<.9995){const m=Math.acos(g),x=Math.sin(m);h=Math.sin(h*m)/x,a=Math.sin(a*m)/x,l=l*h+u*a,c=c*h+p*a,f=f*h+v*a,d=d*h+y*a}else{l=l*h+u*a,c=c*h+p*a,f=f*h+v*a,d=d*h+y*a;const m=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=m,c*=m,f*=m,d*=m}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],u=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*p-c*u,e[n+1]=l*v+f*u+c*d-a*p,e[n+2]=c*v+f*p+a*u-l*d,e[n+3]=f*v-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),u=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=u*f*d+c*p*v,this._y=c*p*d-u*f*v,this._z=c*f*v+u*p*d,this._w=c*f*d-u*p*v;break;case"YXZ":this._x=u*f*d+c*p*v,this._y=c*p*d-u*f*v,this._z=c*f*v-u*p*d,this._w=c*f*d+u*p*v;break;case"ZXY":this._x=u*f*d-c*p*v,this._y=c*p*d+u*f*v,this._z=c*f*v+u*p*d,this._w=c*f*d-u*p*v;break;case"ZYX":this._x=u*f*d-c*p*v,this._y=c*p*d+u*f*v,this._z=c*f*v-u*p*d,this._w=c*f*d+u*p*v;break;case"YZX":this._x=u*f*d+c*p*v,this._y=c*p*d+u*f*v,this._z=c*f*v-u*p*d,this._w=c*f*d-u*p*v;break;case"XZY":this._x=u*f*d-c*p*v,this._y=c*p*d-u*f*v,this._z=c*f*v+u*p*d,this._w=c*f*d+u*p*v;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pm=class Pm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pf.copy(this).projectOnVector(e),this.sub(pf)}reflect(e){return this.sub(pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pm.prototype.isVector3=!0;let V=Pm;const pf=new V,Mv=new Mo,Dm=class Dm{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],p=i[5],v=i[8],y=r[0],g=r[3],h=r[6],m=r[1],x=r[4],M=r[7],w=r[2],T=r[5],C=r[8];return s[0]=o*y+a*m+l*w,s[3]=o*g+a*x+l*T,s[6]=o*h+a*M+l*C,s[1]=c*y+f*m+d*w,s[4]=c*g+f*x+d*T,s[7]=c*h+f*M+d*C,s[2]=u*y+p*m+v*w,s[5]=u*g+p*x+v*T,s[8]=u*h+p*M+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,u=a*l-f*s,p=c*s-o*l,v=n*d+i*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=u*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mf.makeScale(e,n)),this}rotate(e){return this.premultiply(mf.makeRotation(-e)),this}translate(e,n){return this.premultiply(mf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dm.prototype.isMatrix3=!0;let Ue=Dm;const mf=new Ue,Ev=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tv=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HR(){const t={enabled:!0,workingColorSpace:Gc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===et&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?Hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return kh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return kh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Gc]:{primaries:e,whitePoint:i,transfer:Hc,toXYZ:Ev,fromXYZ:Tv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Ev,fromXYZ:Tv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),t}const Ye=HR();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function to(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class WR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xs===void 0&&(xs=jc("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jR=0;class wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jR++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gf(r[o].image)):s.push(gf(r[o]))}else s=gf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?WR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let XR=0;const vf=new V;class fn extends hs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Bi,r=Bi,s=sn,o=Zr,a=ri,l=Wn,c=fn.DEFAULT_ANISOTROPY,f=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XR++}),this.uuid=Ha(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vf).x}get height(){return this.source.getSize(vf).y}get depth(){return this.source.getSize(vf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ah:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ah:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=cM;fn.DEFAULT_ANISOTROPY=1;const Lm=class Lm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],v=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(p+1)/2,w=(h+1)/2,T=(f+u)/4,C=(d+y)/4,_=(v+g)/4;return x>M&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=C/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=_/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=_/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(d-y)*(d-y)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-y)/m,this.z=(u-f)/m,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lm.prototype.isVector4=!0;let Dt=Lm;class YR extends hs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new fn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new wm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends YR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xM extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qR extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qc=class qc{constructor(e,n,i,r,s,o,a,l,c,f,d,u,p,v,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,u,p,v,y,g)}set(e,n,i,r,s,o,a,l,c,f,d,u,p,v,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=v,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*f,p=o*d,v=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=u-y*c,n[9]=-a*l,n[2]=y-u*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,p=l*d,v=c*f,y=c*d;n[0]=u+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=y+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,p=l*d,v=c*f,y=c*d;n[0]=u-y*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=y-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,p=o*d,v=a*f,y=a*d;n[0]=l*f,n[4]=v*c-p,n[8]=u*c+y,n[1]=l*d,n[5]=y*c+u,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*f,n[4]=y-u*d,n[8]=v*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+v,n[10]=u-y*d}else if(e.order==="XZY"){const u=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+y,n[5]=o*f,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*f,n[10]=y*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($R,e,KR)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),nr.crossVectors(i,Tn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),nr.crossVectors(i,Tn)),nr.normalize(),gl.crossVectors(Tn,nr),r[0]=nr.x,r[4]=gl.x,r[8]=Tn.x,r[1]=nr.y,r[5]=gl.y,r[9]=Tn.y,r[2]=nr.z,r[6]=gl.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],p=i[13],v=i[2],y=i[6],g=i[10],h=i[14],m=i[3],x=i[7],M=i[11],w=i[15],T=r[0],C=r[4],_=r[8],b=r[12],R=r[1],P=r[5],B=r[9],j=r[13],q=r[2],N=r[6],W=r[10],U=r[14],F=r[3],X=r[7],Z=r[11],oe=r[15];return s[0]=o*T+a*R+l*q+c*F,s[4]=o*C+a*P+l*N+c*X,s[8]=o*_+a*B+l*W+c*Z,s[12]=o*b+a*j+l*U+c*oe,s[1]=f*T+d*R+u*q+p*F,s[5]=f*C+d*P+u*N+p*X,s[9]=f*_+d*B+u*W+p*Z,s[13]=f*b+d*j+u*U+p*oe,s[2]=v*T+y*R+g*q+h*F,s[6]=v*C+y*P+g*N+h*X,s[10]=v*_+y*B+g*W+h*Z,s[14]=v*b+y*j+g*U+h*oe,s[3]=m*T+x*R+M*q+w*F,s[7]=m*C+x*P+M*N+w*X,s[11]=m*_+x*B+M*W+w*Z,s[15]=m*b+x*j+M*U+w*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],p=e[14],v=e[3],y=e[7],g=e[11],h=e[15],m=l*p-c*u,x=a*p-c*d,M=a*u-l*d,w=o*p-c*f,T=o*u-l*f,C=o*d-a*f;return n*(y*m-g*x+h*M)-i*(v*m-g*w+h*T)+r*(v*x-y*w+h*C)-s*(v*M-y*T+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],p=e[11],v=e[12],y=e[13],g=e[14],h=e[15],m=n*a-i*o,x=n*l-r*o,M=n*c-s*o,w=i*l-r*a,T=i*c-s*a,C=r*c-s*l,_=f*y-d*v,b=f*g-u*v,R=f*h-p*v,P=d*g-u*y,B=d*h-p*y,j=u*h-p*g,q=m*j-x*B+M*P+w*R-T*b+C*_;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/q;return e[0]=(a*j-l*B+c*P)*N,e[1]=(r*B-i*j-s*P)*N,e[2]=(y*C-g*T+h*w)*N,e[3]=(u*T-d*C-p*w)*N,e[4]=(l*R-o*j-c*b)*N,e[5]=(n*j-r*R+s*b)*N,e[6]=(g*M-v*C-h*x)*N,e[7]=(f*C-u*M+p*x)*N,e[8]=(o*B-a*R+c*_)*N,e[9]=(i*R-n*B-s*_)*N,e[10]=(v*T-y*M+h*m)*N,e[11]=(d*M-f*T-p*m)*N,e[12]=(a*b-o*P-l*_)*N,e[13]=(n*P-i*b+r*_)*N,e[14]=(y*x-v*w-g*m)*N,e[15]=(f*w-d*x+u*m)*N,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,u=s*c,p=s*f,v=s*d,y=o*f,g=o*d,h=a*d,m=l*c,x=l*f,M=l*d,w=i.x,T=i.y,C=i.z;return r[0]=(1-(y+h))*w,r[1]=(p+M)*w,r[2]=(v-x)*w,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(u+h))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(v+x)*C,r[9]=(g-m)*C,r[10]=(1-(u+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=_s.set(r[0],r[1],r[2]).length();const a=_s.set(r[4],r[5],r[6]).length(),l=_s.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Kn.copy(this);const c=1/o,f=1/a,d=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=f,Kn.elements[5]*=f,Kn.elements[6]*=f,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,n.setFromRotationMatrix(Kn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=vi,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let v,y;if(l)v=s/(o-s),y=o*s/(o-s);else if(a===vi)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Wc)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,y;if(l)v=1/(o-s),y=o/(o-s);else if(a===vi)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===Wc)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};qc.prototype.isMatrix4=!0;let Lt=qc;const _s=new V,Kn=new Lt,$R=new V(0,0,0),KR=new V(1,1,1),nr=new V,gl=new V,Tn=new V,wv=new Lt,Av=new Mo;class cs{constructor(e=0,n=0,i=0,r=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Av.setFromEuler(this),this.setFromQuaternion(Av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class _M{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZR=0;const Cv=new V,ys=new Mo,bi=new Lt,vl=new V,Uo=new V,QR=new V,JR=new Mo,bv=new V(1,0,0),Rv=new V(0,1,0),Pv=new V(0,0,1),Dv={type:"added"},eP={type:"removed"},Ss={type:"childadded",child:null},xf={type:"childremoved",child:null};class dn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZR++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new V,n=new cs,i=new Mo,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ue}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _M,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(bv,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(Pv,e)}translateOnAxis(e,n){return Cv.copy(e).applyQuaternion(this.quaternion),this.position.add(Cv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bv,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(Pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vl.copy(e):vl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Uo,vl,this.up):bi.lookAt(vl,Uo,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(bi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eP),xf.child=e,this.dispatchEvent(xf),xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,QR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,JR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new V(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xl extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tP={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(c,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const yM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},_l={h:0,s:0,l:0};function yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=GR(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=yf(o,s,e+1/3),this.g=yf(o,s,e),this.b=yf(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=yM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Ye.workingToColorSpace(en.copy(this),e),Math.round(qe(en.r*255,0,255))*65536+Math.round(qe(en.g*255,0,255))*256+Math.round(qe(en.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Vn){Ye.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(_l);const i=hf(ir.h,_l.h,n),r=hf(ir.s,_l.s,n),s=hf(ir.l,_l.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new $e;$e.NAMES=yM;class nP extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zn=new V,Ri=new V,Sf=new V,Pi=new V,Ms=new V,Es=new V,Lv=new V,Mf=new V,Ef=new V,Tf=new V,wf=new Dt,Af=new Dt,Cf=new Dt;class ii{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Ri.subVectors(i,n),Sf.subVectors(e,n);const o=Zn.dot(Zn),a=Zn.dot(Ri),l=Zn.dot(Sf),c=Ri.dot(Ri),f=Ri.dot(Sf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-a*f)*u,v=(o*f-a*l)*u;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return wf.setScalar(0),Af.setScalar(0),Cf.setScalar(0),wf.fromBufferAttribute(e,n),Af.fromBufferAttribute(e,i),Cf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(wf,s.x),o.addScaledVector(Af,s.y),o.addScaledVector(Cf,s.z),o}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Ri.subVectors(e,n),Zn.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Zn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),Es.subVectors(s,i),Mf.subVectors(e,i);const l=Ms.dot(Mf),c=Es.dot(Mf);if(l<=0&&c<=0)return n.copy(i);Ef.subVectors(e,r);const f=Ms.dot(Ef),d=Es.dot(Ef);if(f>=0&&d<=f)return n.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ms,o);Tf.subVectors(e,s);const p=Ms.dot(Tf),v=Es.dot(Tf);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Es,a);const g=f*v-p*d;if(g<=0&&d-f>=0&&p-v>=0)return Lv.subVectors(s,r),a=(d-f)/(d-f+(p-v)),n.copy(r).addScaledVector(Lv,a);const h=1/(g+y+u);return o=y*h,a=u*h,n.copy(i).addScaledVector(Ms,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wa{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yl.copy(i.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),Sl.subVectors(this.max,Fo),Ts.subVectors(e.a,Fo),ws.subVectors(e.b,Fo),As.subVectors(e.c,Fo),rr.subVectors(ws,Ts),sr.subVectors(As,ws),Fr.subVectors(Ts,As);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Fr.z,Fr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Fr.z,0,-Fr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Fr.y,Fr.x,0];return!bf(n,Ts,ws,As,Sl)||(n=[1,0,0,0,1,0,0,0,1],!bf(n,Ts,ws,As,Sl))?!1:(Ml.crossVectors(rr,sr),n=[Ml.x,Ml.y,Ml.z],bf(n,Ts,ws,As,Sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Di=[new V,new V,new V,new V,new V,new V,new V,new V],Qn=new V,yl=new Wa,Ts=new V,ws=new V,As=new V,rr=new V,sr=new V,Fr=new V,Fo=new V,Sl=new V,Ml=new V,Or=new V;function bf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Or.fromArray(t,s);const a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=n.dot(Or),f=i.dot(Or);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Nt=new V,El=new st;let iP=0;class Pn extends hs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xv,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Io(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Io(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Io(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Io(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Io(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class SM extends Pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class MM extends Pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dn extends Pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const rP=new Wa,Oo=new V,Rf=new V;class ja{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):rP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const n=Oo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Oo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(Rf)),this.expandByPoint(Oo.copy(e.center).sub(Rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sP=0;const Bn=new Lt,Pf=new dn,Cs=new V,wn=new Wa,Bo=new Wa,Gt=new V;class Sn extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sP++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BR(e)?MM:SM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return Pf.lookAt(e),Pf.updateMatrix(),this.applyMatrix4(Pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(wn.min,Bo.min),wn.expandByPoint(Gt),Gt.addVectors(wn.max,Bo.max),wn.expandByPoint(Gt)):(wn.expandByPoint(Bo.min),wn.expandByPoint(Bo.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Gt.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),Gt.add(Cs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new V,l[_]=new V;const c=new V,f=new V,d=new V,u=new st,p=new st,v=new st,y=new V,g=new V;function h(_,b,R){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,b),d.fromBufferAttribute(i,R),u.fromBufferAttribute(s,_),p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,R),f.sub(c),d.sub(c),p.sub(u),v.sub(u);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(y.copy(f).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(P),a[_].add(y),a[b].add(y),a[R].add(y),l[_].add(g),l[b].add(g),l[R].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let _=0,b=m.length;_<b;++_){const R=m[_],P=R.start,B=R.count;for(let j=P,q=P+B;j<q;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const x=new V,M=new V,w=new V,T=new V;function C(_){w.fromBufferAttribute(r,_),T.copy(w);const b=a[_];x.copy(b),x.sub(w.multiplyScalar(w.dot(b))).normalize(),M.crossVectors(T,b);const P=M.dot(l[_])<0?-1:1;o.setXYZW(_,x.x,x.y,x.z,P)}for(let _=0,b=m.length;_<b;++_){const R=m[_],P=R.start,B=R.count;for(let j=P,q=P+B;j<q;j+=3)C(e.getX(j+0)),C(e.getX(j+1)),C(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,f=new V,d=new V;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let h=0;h<f;h++)u[v++]=c[p++]}return new Pn(u,f,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oP=0;class Eo extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oP++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=eo,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Jd,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qd&&(i.blendSrc=this.blendSrc),this.blendDst!==Jd&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Li=new V,Df=new V,Tl=new V,or=new V,Lf=new V,wl=new V,Nf=new V;class Am{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Df.copy(e).add(n).multiplyScalar(.5),Tl.copy(n).sub(e).normalize(),or.copy(this.origin).sub(Df);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Tl),a=or.dot(this.direction),l=-or.dot(Tl),c=or.lengthSq(),f=Math.abs(1-o*o);let d,u,p,v;if(f>0)if(d=o*l-a,u=o*a-l,v=s*f,d>=0)if(u>=-v)if(u<=v){const y=1/f;d*=y,u*=y,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Df).addScaledVector(Tl,u),p}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,s){Lf.subVectors(n,e),wl.subVectors(i,e),Nf.crossVectors(Lf,wl);let o=this.direction.dot(Nf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);const l=a*this.direction.dot(wl.crossVectors(or,wl));if(l<0)return null;const c=a*this.direction.dot(Lf.cross(or));if(c<0||l+c>o)return null;const f=-a*or.dot(Nf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cm extends Eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=tM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nv=new Lt,Br=new Am,Al=new ja,Iv=new V,Cl=new V,bl=new V,Rl=new V,If=new V,Pl=new V,Uv=new V,Dl=new V;class wi extends dn{constructor(e=new Sn,n=new Cm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(If.fromBufferAttribute(d,e),o?Pl.addScaledVector(If,f):Pl.addScaledVector(If.sub(n),f))}n.add(Pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(Al.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Al,Iv)===null||Br.origin.distanceToSquared(Iv)>(e.far-e.near)**2))&&(Nv.copy(s).invert(),Br.copy(e.ray).applyMatrix4(Nv),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=u.length;v<y;v++){const g=u[v],h=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,w=x;M<w;M+=3){const T=a.getX(M),C=a.getX(M+1),_=a.getX(M+2);r=Ll(this,h,e,i,c,f,d,T,C,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=v,h=y;g<h;g+=3){const m=a.getX(g),x=a.getX(g+1),M=a.getX(g+2);r=Ll(this,o,e,i,c,f,d,m,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=u.length;v<y;v++){const g=u[v],h=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,w=x;M<w;M+=3){const T=M,C=M+1,_=M+2;r=Ll(this,h,e,i,c,f,d,T,C,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,h=y;g<h;g+=3){const m=g,x=g+1,M=g+2;r=Ll(this,o,e,i,c,f,d,m,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function aP(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Dl);return c<n.near||c>n.far?null:{distance:c,point:Dl.clone(),object:t}}function Ll(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Cl),t.getVertexPosition(l,bl),t.getVertexPosition(c,Rl);const f=aP(t,e,n,i,Cl,bl,Rl,Uv);if(f){const d=new V;ii.getBarycoord(Uv,Cl,bl,Rl,d),r&&(f.uv=ii.getInterpolatedAttribute(r,a,l,c,d,new st)),s&&(f.uv1=ii.getInterpolatedAttribute(s,a,l,c,d,new st)),o&&(f.normal=ii.getInterpolatedAttribute(o,a,l,c,d,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new V,materialIndex:0};ii.getNormal(Cl,bl,Rl,u.normal),f.face=u,f.barycoord=d}return f}class lP extends fn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Yt,f=Yt,d,u){super(null,o,a,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uf=new V,cP=new V,uP=new Ue;class Wr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Uf.subVectors(i,n).cross(cP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Uf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||uP.getNormalMatrix(e),r=this.coplanarPoint(Uf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new ja,fP=new st(.5,.5),Nl=new V;class EM{constructor(e=new Wr,n=new Wr,i=new Wr,r=new Wr,s=new Wr,o=new Wr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],p=s[7],v=s[8],y=s[9],g=s[10],h=s[11],m=s[12],x=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-o,p-f,h-v,w-m).normalize(),r[1].setComponents(c+o,p+f,h+v,w+m).normalize(),r[2].setComponents(c+a,p+d,h+y,w+x).normalize(),r[3].setComponents(c-a,p-d,h-y,w-x).normalize(),i)r[4].setComponents(l,u,g,M).normalize(),r[5].setComponents(c-l,p-u,h-g,w-M).normalize();else if(r[4].setComponents(c-l,p-u,h-g,w-M).normalize(),n===vi)r[5].setComponents(c+l,p+u,h+g,w+M).normalize();else if(n===Wc)r[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const n=fP.distanceTo(e.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Nl.x=r.normal.x>0?e.max.x:e.min.x,Nl.y=r.normal.y>0?e.max.y:e.min.y,Nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class TM extends Eo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xc=new V,Yc=new V,Fv=new Lt,ko=new Am,Il=new ja,Ff=new V,Ov=new V;class dP extends dn{constructor(e=new Sn,n=new TM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Xc.fromBufferAttribute(n,r-1),Yc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Xc.distanceTo(Yc);e.setAttribute("lineDistance",new Dn(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(r),Il.radius+=s,e.ray.intersectsSphere(Il)===!1)return;Fv.copy(r).invert(),ko.copy(e.ray).applyMatrix4(Fv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let y=p,g=v-1;y<g;y+=c){const h=f.getX(y),m=f.getX(y+1),x=Ul(this,e,ko,l,h,m,y);x&&n.push(x)}if(this.isLineLoop){const y=f.getX(v-1),g=f.getX(p),h=Ul(this,e,ko,l,y,g,v-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let y=p,g=v-1;y<g;y+=c){const h=Ul(this,e,ko,l,y,y+1,y);h&&n.push(h)}if(this.isLineLoop){const y=Ul(this,e,ko,l,v-1,p,v-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ul(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Xc.fromBufferAttribute(a,r),Yc.fromBufferAttribute(a,s),n.distanceSqToSegment(Xc,Yc,Ff,Ov)>i)return;Ff.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Ff);if(!(c<e.near||c>e.far))return{distance:c,point:Ov.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class wM extends Eo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bv=new Lt,zh=new Am,Fl=new ja,Ol=new V;class hP extends dn{constructor(e=new Sn,n=new wM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;Bv.copy(r).invert(),zh.copy(e.ray).applyMatrix4(Bv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=u,y=p;v<y;v++){const g=c.getX(v);Ol.fromBufferAttribute(d,g),kv(Ol,g,l,r,e,n,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=u,y=p;v<y;v++)Ol.fromBufferAttribute(d,v),kv(Ol,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kv(t,e,n,i,r,s,o){const a=zh.distanceSqToPoint(t);if(a<n){const l=new V;zh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class AM extends fn{constructor(e=[],n=as,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mo extends fn{constructor(e,n,i=Ti,r,s,o,a=Yt,l=Yt,c,f=Ki,d=1){if(f!==Ki&&f!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:d};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pP extends mo{constructor(e,n=Ti,i=as,r,s,o=Yt,a=Yt,l,c=Ki){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class CM extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xa extends Sn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(f,3)),this.setAttribute("uv",new Dn(d,2));function v(y,g,h,m,x,M,w,T,C,_,b){const R=M/C,P=w/_,B=M/2,j=w/2,q=T/2,N=C+1,W=_+1;let U=0,F=0;const X=new V;for(let Z=0;Z<W;Z++){const oe=Z*P-j;for(let de=0;de<N;de++){const ze=de*R-B;X[y]=ze*m,X[g]=oe*x,X[h]=q,c.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[h]=T>0?1:-1,f.push(X.x,X.y,X.z),d.push(de/C),d.push(1-Z/_),U+=1}}for(let Z=0;Z<_;Z++)for(let oe=0;oe<C;oe++){const de=u+oe+N*Z,ze=u+oe+N*(Z+1),We=u+(oe+1)+N*(Z+1),Le=u+(oe+1)+N*Z;l.push(de,ze,Le),l.push(ze,We,Le),F+=6}a.addGroup(p,F,b),p+=F,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vu extends Sn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,u=n/l,p=[],v=[],y=[],g=[];for(let h=0;h<f;h++){const m=h*u-o;for(let x=0;x<c;x++){const M=x*d-s;v.push(M,-m,0),y.push(0,0,1),g.push(x/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const x=m+c*h,M=m+c*(h+1),w=m+1+c*(h+1),T=m+1+c*h;p.push(x,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Dn(v,3)),this.setAttribute("normal",new Dn(y,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.width,e.height,e.widthSegments,e.heightSegments)}}class bm extends Sn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new V,u=new V,p=[],v=[],y=[],g=[];for(let h=0;h<=i;h++){const m=[],x=h/i;let M=0;h===0&&o===0?M=.5/n:h===i&&l===Math.PI&&(M=-.5/n);for(let w=0;w<=n;w++){const T=w/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),v.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(T+M,1-x),m.push(c++)}f.push(m)}for(let h=0;h<i;h++)for(let m=0;m<n;m++){const x=f[h][m+1],M=f[h][m],w=f[h+1][m],T=f[h+1][m+1];(h!==0||o>0)&&p.push(x,M,T),(h!==i-1||l<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Dn(v,3)),this.setAttribute("normal",new Dn(y,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function go(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Vv(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Vv(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=go(t[n]);for(const r in i)e[r]=i[r]}return e}function Vv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function mP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function bM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const gP={clone:go,merge:an};var vP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vP,this.fragmentShader=xP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=mP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _P extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yP extends Eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SP extends Eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bl=new V,kl=new Mo,fi=new V;class RM extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,kl,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,kl,fi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Bl,kl,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,kl,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new V,zv=new st,Gv=new st;class Hn extends RM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(df*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,zv,Gv),n.subVectors(Gv,zv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(df*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class PM extends RM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bs=-90,Rs=1;class MP extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(bs,Rs,e,n);r.layers=this.layers,this.add(r);const s=new Hn(bs,Rs,e,n);s.layers=this.layers,this.add(s);const o=new Hn(bs,Rs,e,n);o.layers=this.layers,this.add(o);const a=new Hn(bs,Rs,e,n);a.layers=this.layers,this.add(a);const l=new Hn(bs,Rs,e,n);l.layers=this.layers,this.add(l);const c=new Hn(bs,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(d,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class EP extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nm=class Nm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Nm.prototype.isMatrix2=!0;let Hv=Nm;function Wv(t,e,n,i){const r=TP(i);switch(n){case pM:return t*e;case gM:return t*e/r.components*r.byteLength;case ym:return t*e/r.components*r.byteLength;case ls:return t*e*2/r.components*r.byteLength;case Sm:return t*e*2/r.components*r.byteLength;case mM:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case Mm:return t*e*4/r.components*r.byteLength;case rc:case sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case oc:case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uh:case dh:return Math.max(t,16)*Math.max(e,8)/4;case ch:case fh:return Math.max(t,8)*Math.max(e,8)/2;case hh:case ph:case gh:case vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mh:case Vc:case xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Ih:case Uh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Fh:case Oh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zc:case Bh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TP(t){switch(t){case Wn:case uM:return{byteLength:1,components:1};case La:case fM:case $i:return{byteLength:2,components:1};case xm:case _m:return{byteLength:2,components:4};case Ti:case vm:case gi:return{byteLength:4,components:1};case dM:case hM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gm}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function DM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wP(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<d.length;p++){const v=d[u],y=d[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++u,d[u]=y)}d.length=u+1;for(let p=0,v=d.length;p<v;p++){const y=d[p];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var AP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,UP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$P=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n2="gl_FragColor = linearToOutputTexel( gl_FragColor );",i2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,s2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,c2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,p2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,x2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,R2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,n3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,c3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,F3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Z3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:AP,alphahash_pars_fragment:CP,alphamap_fragment:bP,alphamap_pars_fragment:RP,alphatest_fragment:PP,alphatest_pars_fragment:DP,aomap_fragment:LP,aomap_pars_fragment:NP,batching_pars_vertex:IP,batching_vertex:UP,begin_vertex:FP,beginnormal_vertex:OP,bsdfs:BP,iridescence_fragment:kP,bumpmap_pars_fragment:VP,clipping_planes_fragment:zP,clipping_planes_pars_fragment:GP,clipping_planes_pars_vertex:HP,clipping_planes_vertex:WP,color_fragment:jP,color_pars_fragment:XP,color_pars_vertex:YP,color_vertex:qP,common:$P,cube_uv_reflection_fragment:KP,defaultnormal_vertex:ZP,displacementmap_pars_vertex:QP,displacementmap_vertex:JP,emissivemap_fragment:e2,emissivemap_pars_fragment:t2,colorspace_fragment:n2,colorspace_pars_fragment:i2,envmap_fragment:r2,envmap_common_pars_fragment:s2,envmap_pars_fragment:o2,envmap_pars_vertex:a2,envmap_physical_pars_fragment:x2,envmap_vertex:l2,fog_vertex:c2,fog_pars_vertex:u2,fog_fragment:f2,fog_pars_fragment:d2,gradientmap_pars_fragment:h2,lightmap_pars_fragment:p2,lights_lambert_fragment:m2,lights_lambert_pars_fragment:g2,lights_pars_begin:v2,lights_toon_fragment:_2,lights_toon_pars_fragment:y2,lights_phong_fragment:S2,lights_phong_pars_fragment:M2,lights_physical_fragment:E2,lights_physical_pars_fragment:T2,lights_fragment_begin:w2,lights_fragment_maps:A2,lights_fragment_end:C2,lightprobes_pars_fragment:b2,logdepthbuf_fragment:R2,logdepthbuf_pars_fragment:P2,logdepthbuf_pars_vertex:D2,logdepthbuf_vertex:L2,map_fragment:N2,map_pars_fragment:I2,map_particle_fragment:U2,map_particle_pars_fragment:F2,metalnessmap_fragment:O2,metalnessmap_pars_fragment:B2,morphinstance_vertex:k2,morphcolor_vertex:V2,morphnormal_vertex:z2,morphtarget_pars_vertex:G2,morphtarget_vertex:H2,normal_fragment_begin:W2,normal_fragment_maps:j2,normal_pars_fragment:X2,normal_pars_vertex:Y2,normal_vertex:q2,normalmap_pars_fragment:$2,clearcoat_normal_fragment_begin:K2,clearcoat_normal_fragment_maps:Z2,clearcoat_pars_fragment:Q2,iridescence_pars_fragment:J2,opaque_fragment:e3,packing:t3,premultiplied_alpha_fragment:n3,project_vertex:i3,dithering_fragment:r3,dithering_pars_fragment:s3,roughnessmap_fragment:o3,roughnessmap_pars_fragment:a3,shadowmap_pars_fragment:l3,shadowmap_pars_vertex:c3,shadowmap_vertex:u3,shadowmask_pars_fragment:f3,skinbase_vertex:d3,skinning_pars_vertex:h3,skinning_vertex:p3,skinnormal_vertex:m3,specularmap_fragment:g3,specularmap_pars_fragment:v3,tonemapping_fragment:x3,tonemapping_pars_fragment:_3,transmission_fragment:y3,transmission_pars_fragment:S3,uv_pars_fragment:M3,uv_pars_vertex:E3,uv_vertex:T3,worldpos_vertex:w3,background_vert:A3,background_frag:C3,backgroundCube_vert:b3,backgroundCube_frag:R3,cube_vert:P3,cube_frag:D3,depth_vert:L3,depth_frag:N3,distance_vert:I3,distance_frag:U3,equirect_vert:F3,equirect_frag:O3,linedashed_vert:B3,linedashed_frag:k3,meshbasic_vert:V3,meshbasic_frag:z3,meshlambert_vert:G3,meshlambert_frag:H3,meshmatcap_vert:W3,meshmatcap_frag:j3,meshnormal_vert:X3,meshnormal_frag:Y3,meshphong_vert:q3,meshphong_frag:$3,meshphysical_vert:K3,meshphysical_frag:Z3,meshtoon_vert:Q3,meshtoon_frag:J3,points_vert:eD,points_frag:tD,shadow_vert:nD,shadow_frag:iD,sprite_vert:rD,sprite_frag:sD},pe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},pi={basic:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:an([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:an([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:an([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:an([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:an([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:an([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:an([pe.common,pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:an([pe.lights,pe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};pi.physical={uniforms:an([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Vl={r:0,b:0,g:0},oD=new Lt,LM=new Ue;LM.set(-1,0,0,0,1,0,0,0,1);function aD(t,e,n,i,r,s){const o=new $e(0);let a=r===!0?0:1,l,c,f=null,d=0,u=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const M=m.backgroundBlurriness>0;x=e.get(x,M)}return x}function v(m){let x=!1;const M=p(m);M===null?g(o,a):M&&M.isColor&&(g(M,1),x=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,x){const M=p(x);M&&(M.isCubeTexture||M.mapping===gu)?(c===void 0&&(c=new wi(new Xa(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:go(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oD.makeRotationFromEuler(x.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(LM),c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==et,(f!==M||d!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,u=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new wi(new vu(2,2),new Ai({name:"BackgroundMaterial",uniforms:go(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,u=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(Vl,bM(t)),n.buffers.color.setClear(Vl.r,Vl.g,Vl.b,x,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),a=x,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:v,addToRenderList:y,dispose:h}}function lD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(P,B,j,q,N){let W=!1;const U=d(P,q,j,B);s!==U&&(s=U,c(s.object)),W=p(P,q,j,N),W&&v(P,q,j,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(P,B,j,q),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function d(P,B,j,q){const N=q.wireframe===!0;let W=i[B.id];W===void 0&&(W={},i[B.id]=W);const U=P.isInstancedMesh===!0?P.id:0;let F=W[U];F===void 0&&(F={},W[U]=F);let X=F[j.id];X===void 0&&(X={},F[j.id]=X);let Z=X[N];return Z===void 0&&(Z=u(l()),X[N]=Z),Z}function u(P){const B=[],j=[],q=[];for(let N=0;N<n;N++)B[N]=0,j[N]=0,q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,B,j,q){const N=s.attributes,W=B.attributes;let U=0;const F=j.getAttributes();for(const X in F)if(F[X].location>=0){const oe=N[X];let de=W[X];if(de===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),oe===void 0||oe.attribute!==de||de&&oe.data!==de.data)return!0;U++}return s.attributesNum!==U||s.index!==q}function v(P,B,j,q){const N={},W=B.attributes;let U=0;const F=j.getAttributes();for(const X in F)if(F[X].location>=0){let oe=W[X];oe===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const de={};de.attribute=oe,oe&&oe.data&&(de.data=oe.data),N[X]=de,U++}s.attributes=N,s.attributesNum=U,s.index=q}function y(){const P=s.newAttributes;for(let B=0,j=P.length;B<j;B++)P[B]=0}function g(P){h(P,0)}function h(P,B){const j=s.newAttributes,q=s.enabledAttributes,N=s.attributeDivisors;j[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),N[P]!==B&&(t.vertexAttribDivisor(P,B),N[P]=B)}function m(){const P=s.newAttributes,B=s.enabledAttributes;for(let j=0,q=B.length;j<q;j++)B[j]!==P[j]&&(t.disableVertexAttribArray(j),B[j]=0)}function x(P,B,j,q,N,W,U){U===!0?t.vertexAttribIPointer(P,B,j,N,W):t.vertexAttribPointer(P,B,j,q,N,W)}function M(P,B,j,q){y();const N=q.attributes,W=j.getAttributes(),U=B.defaultAttributeValues;for(const F in W){const X=W[F];if(X.location>=0){let Z=N[F];if(Z===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const oe=Z.normalized,de=Z.itemSize,ze=e.get(Z);if(ze===void 0)continue;const We=ze.buffer,Le=ze.type,K=ze.bytesPerElement,fe=Le===t.INT||Le===t.UNSIGNED_INT||Z.gpuType===vm;if(Z.isInterleavedBufferAttribute){const ae=Z.data,Re=ae.stride,Ie=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)h(X.location+Pe,ae.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)g(X.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Pe=0;Pe<X.locationSize;Pe++)x(X.location+Pe,de/X.locationSize,Le,oe,Re*K,(Ie+de/X.locationSize*Pe)*K,fe)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)h(X.location+ae,Z.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<X.locationSize;ae++)g(X.location+ae);t.bindBuffer(t.ARRAY_BUFFER,We);for(let ae=0;ae<X.locationSize;ae++)x(X.location+ae,de/X.locationSize,Le,oe,de*K,de/X.locationSize*ae*K,fe)}}else if(U!==void 0){const oe=U[F];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(X.location,oe);break;case 3:t.vertexAttrib3fv(X.location,oe);break;case 4:t.vertexAttrib4fv(X.location,oe);break;default:t.vertexAttrib1fv(X.location,oe)}}}}m()}function w(){b();for(const P in i){const B=i[P];for(const j in B){const q=B[j];for(const N in q){const W=q[N];for(const U in W)f(W[U].object),delete W[U];delete q[N]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const B=i[P.id];for(const j in B){const q=B[j];for(const N in q){const W=q[N];for(const U in W)f(W[U].object),delete W[U];delete q[N]}}delete i[P.id]}function C(P){for(const B in i){const j=i[B];for(const q in j){const N=j[q];if(N[P.id]===void 0)continue;const W=N[P.id];for(const U in W)f(W[U].object),delete W[U];delete N[P.id]}}}function _(P){for(const B in i){const j=i[B],q=P.isInstancedMesh===!0?P.id:0,N=j[q];if(N!==void 0){for(const W in N){const U=N[W];for(const F in U)f(U[F].object),delete U[F];delete N[W]}delete j[q],Object.keys(j).length===0&&delete i[B]}}}function b(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function cD(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function uD(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ri&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const _=C===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gi&&!_)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(De("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:M,maxSamples:w,samples:T}}function fD(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Wr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,p){const v=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!g)s?f(null):c();else{const m=s?0:i,x=m*4;let M=h.clippingState||null;l.value=M,M=f(v,u,x,p);for(let w=0;w!==x;++w)M[w]=n[w];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,p,v){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const h=p+y*4,m=u.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,M=p;x!==y;++x,M+=4)o.copy(d[x]).applyMatrix4(m,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const gr=4,jv=[.125,.215,.35,.446,.526,.582],Xr=20,dD=256,Vo=new PM,Xv=new $e;let Of=null,Bf=0,kf=0,Vf=!1;const hD=new V;class Yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=hD}=s;Of=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Of,Bf,kf),this._renderer.xr.enabled=Vf,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===as||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Of=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:$i,format:ri,colorSpace:Gc,depthBuffer:!1},r=qv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qv(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pD(s)),this._blurMaterial=gD(s,e,n),this._ggxMaterial=mD(s,e,n)}return r}_compileMaterial(e){const n=new wi(new Sn,e);this._renderer.compile(n,Vo)}_sceneToCubeUV(e,n,i,r,s){const l=new Hn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Xv),d.toneMapping=Mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new Xa,new Cm({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let h=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,h=!0):(g.color.copy(Xv),h=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[x],s.y,s.z)):M===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[x]));const w=this._cubeSize;Ps(r,M*w,x>2?w:0,w,w),d.setRenderTarget(r),h&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===as||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$v());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ps(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Vo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=0+c*1.25,p=d*u,{_lodMax:v}=this,y=this._sizeLods[i],g=3*y*(i>v-gr?i-v+gr:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,Ps(s,g,h,3*y,2*y),r.setRenderTarget(s),r.render(a,Vo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ps(e,g,h,3*y,2*y),r.setRenderTarget(e),r.render(a,Vo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xr-1),y=s/v,g=isFinite(s)?1+Math.floor(f*y):Xr;g>Xr&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xr}`);const h=[];let m=0;for(let C=0;C<Xr;++C){const _=C/y,b=Math.exp(-_*_/2);h.push(b),C===0?m+=b:C<g&&(m+=2*b)}for(let C=0;C<h.length;C++)h[C]=h[C]/m;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=v,u.mipInt.value=x-i;const M=this._sizeLods[r],w=3*M*(r>x-gr?r-x+gr:0),T=4*(this._cubeSize-M);Ps(n,w,T,3*M,2*M),l.setRenderTarget(n),l.render(d,Vo)}}function pD(t){const e=[],n=[],i=[];let r=t;const s=t-gr+1+jv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-gr?l=jv[o-t+gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,v=6,y=3,g=2,h=1,m=new Float32Array(y*v*p),x=new Float32Array(g*v*p),M=new Float32Array(h*v*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,_=T>2?0:-1,b=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];m.set(b,y*v*T),x.set(u,g*v*T);const R=[T,T,T,T,T,T];M.set(R,h*v*T)}const w=new Sn;w.setAttribute("position",new Pn(m,y)),w.setAttribute("uv",new Pn(x,g)),w.setAttribute("faceIndex",new Pn(M,h)),i.push(new wi(w,null)),r>gr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function qv(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mD(t,e,n){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function gD(t,e,n){const i=new Float32Array(Xr),r=new V(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function $v(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Kv(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class NM extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new AM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xa(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Gi});s.uniforms.tEquirect.value=n;const o=new wi(r,s),a=n.minFilter;return n.minFilter===Zr&&(n.minFilter=sn),new MP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function vD(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===cf||p===uf)if(e.has(u)){const v=e.get(u).texture;return a(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const y=new NM(v.height);return y.fromEquirectangularTexture(t,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,v=p===cf||p===uf,y=p===as||p===po;if(v||y){let g=n.get(u);const h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Yv(t)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return v&&m&&m.height>0||y&&m&&l(m)?(i===null&&(i=new Yv(t)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,p){return p===cf?u.mapping=as:p===uf&&(u.mapping=po),u}function l(u){let p=0;const v=6;for(let y=0;y<v;y++)u[y]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function xD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&kh("WebGLRenderer: "+i+" extension not supported."),r}}}function _D(t,e,n,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,v=d.attributes.position;let y=0;if(v===void 0)return;if(p!==null){const m=p.array;y=p.version;for(let x=0,M=m.length;x<M;x+=3){const w=m[x+0],T=m[x+1],C=m[x+2];u.push(w,T,T,C,C,w)}}else{const m=v.array;y=v.version;for(let x=0,M=m.length/3-1;x<M;x+=3){const w=x+0,T=x+1,C=x+2;u.push(w,T,T,C,C,w)}}const g=new(v.count>=65535?MM:SM)(u,1);g.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function f(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function yD(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,s,d*o),n.update(u,i,1)}function c(d,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,d*o,p),n.update(u,i,p))}function f(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let y=0;for(let g=0;g<p;g++)y+=u[g];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function SD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function MD(t,e,n){const i=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let R=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var p=R;u!==void 0&&u.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),g===!0&&(M=3);let w=a.attributes.position.count*M,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*d),_=new xM(C,w,T,d);_.type=gi,_.needsUpdate=!0;const b=M*4;for(let P=0;P<d;P++){const B=h[P],j=m[P],q=x[P],N=w*T*4*P;for(let W=0;W<B.count;W++){const U=W*b;v===!0&&(r.fromBufferAttribute(B,W),C[N+U+0]=r.x,C[N+U+1]=r.y,C[N+U+2]=r.z,C[N+U+3]=0),y===!0&&(r.fromBufferAttribute(j,W),C[N+U+4]=r.x,C[N+U+5]=r.y,C[N+U+6]=r.z,C[N+U+7]=0),g===!0&&(r.fromBufferAttribute(q,W),C[N+U+8]=r.x,C[N+U+9]=r.y,C[N+U+10]=r.z,C[N+U+11]=q.itemSize===4?r.w:1)}}u={count:d,texture:_,size:new st(w,T)},i.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function ED(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const TD={[nM]:"LINEAR_TONE_MAPPING",[iM]:"REINHARD_TONE_MAPPING",[rM]:"CINEON_TONE_MAPPING",[sM]:"ACES_FILMIC_TONE_MAPPING",[aM]:"AGX_TONE_MAPPING",[lM]:"NEUTRAL_TONE_MAPPING",[oM]:"CUSTOM_TONE_MAPPING"};function wD(t,e,n,i,r){const s=new Ei(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new mo(e,n):void 0}),o=new Ei(e,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}),a=new Sn;a.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const l=new _P({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new wi(a,l),f=new PM(-1,1,1,-1,0,1);let d=null,u=null,p=!1,v,y=null,g=[],h=!1;this.setSize=function(m,x){s.setSize(m,x),o.setSize(m,x);for(let M=0;M<g.length;M++){const w=g[M];w.setSize&&w.setSize(m,x)}},this.setEffects=function(m){g=m,h=g.length>0&&g[0].isRenderPass===!0;const x=s.width,M=s.height;for(let w=0;w<g.length;w++){const T=g[w];T.setSize&&T.setSize(x,M)}},this.begin=function(m,x){if(p||m.toneMapping===Mi&&g.length===0)return!1;if(y=x,x!==null){const M=x.width,w=x.height;(s.width!==M||s.height!==w)&&this.setSize(M,w)}return h===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=Mi,!0},this.hasRenderPass=function(){return h},this.end=function(m,x){m.toneMapping=v,p=!0;let M=s,w=o;for(let T=0;T<g.length;T++){const C=g[T];if(C.enabled!==!1&&(C.render(m,w,M,x),C.needsSwap!==!1)){const _=M;M=w,w=_}}if(d!==m.outputColorSpace||u!==m.toneMapping){d=m.outputColorSpace,u=m.toneMapping,l.defines={},Ye.getTransfer(d)===et&&(l.defines.SRGB_TRANSFER="");const T=TD[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(y),m.render(c,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const IM=new fn,Gh=new mo(1,1),UM=new xM,FM=new qR,OM=new AM,Zv=[],Qv=[],Jv=new Float32Array(16),ex=new Float32Array(9),tx=new Float32Array(4);function To(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Zv[r];if(s===void 0&&(s=new Float32Array(r),Zv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _u(t,e){let n=Qv[e];n===void 0&&(n=new Int32Array(e),Qv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function AD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function bD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function RD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function PD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;tx.set(i),t.uniformMatrix2fv(this.addr,!1,tx),zt(n,i)}}function DD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;ex.set(i),t.uniformMatrix3fv(this.addr,!1,ex),zt(n,i)}}function LD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;Jv.set(i),t.uniformMatrix4fv(this.addr,!1,Jv),zt(n,i)}}function ND(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ID(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function UD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function FD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function OD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function kD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function VD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function zD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Gh.compareFunction=n.isReversedDepthBuffer()?Tm:Em,s=Gh):s=IM,n.setTexture2D(e||s,r)}function GD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||FM,r)}function HD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||OM,r)}function WD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||UM,r)}function jD(t){switch(t){case 5126:return AD;case 35664:return CD;case 35665:return bD;case 35666:return RD;case 35674:return PD;case 35675:return DD;case 35676:return LD;case 5124:case 35670:return ND;case 35667:case 35671:return ID;case 35668:case 35672:return UD;case 35669:case 35673:return FD;case 5125:return OD;case 36294:return BD;case 36295:return kD;case 36296:return VD;case 35678:case 36198:case 36298:case 36306:case 35682:return zD;case 35679:case 36299:case 36307:return GD;case 35680:case 36300:case 36308:case 36293:return HD;case 36289:case 36303:case 36311:case 36292:return WD}}function XD(t,e){t.uniform1fv(this.addr,e)}function YD(t,e){const n=To(e,this.size,2);t.uniform2fv(this.addr,n)}function qD(t,e){const n=To(e,this.size,3);t.uniform3fv(this.addr,n)}function $D(t,e){const n=To(e,this.size,4);t.uniform4fv(this.addr,n)}function KD(t,e){const n=To(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZD(t,e){const n=To(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QD(t,e){const n=To(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JD(t,e){t.uniform1iv(this.addr,e)}function eL(t,e){t.uniform2iv(this.addr,e)}function tL(t,e){t.uniform3iv(this.addr,e)}function nL(t,e){t.uniform4iv(this.addr,e)}function iL(t,e){t.uniform1uiv(this.addr,e)}function rL(t,e){t.uniform2uiv(this.addr,e)}function sL(t,e){t.uniform3uiv(this.addr,e)}function oL(t,e){t.uniform4uiv(this.addr,e)}function aL(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Gh:o=IM;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function lL(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||FM,s[o])}function cL(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||OM,s[o])}function uL(t,e,n){const i=this.cache,r=e.length,s=_u(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||UM,s[o])}function fL(t){switch(t){case 5126:return XD;case 35664:return YD;case 35665:return qD;case 35666:return $D;case 35674:return KD;case 35675:return ZD;case 35676:return QD;case 5124:case 35670:return JD;case 35667:case 35671:return eL;case 35668:case 35672:return tL;case 35669:case 35673:return nL;case 5125:return iL;case 36294:return rL;case 36295:return sL;case 36296:return oL;case 35678:case 36198:case 36298:case 36306:case 35682:return aL;case 35679:case 36299:case 36307:return lL;case 35680:case 36300:case 36308:case 36293:return cL;case 36289:case 36303:case 36311:case 36292:return uL}}class dL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jD(n.type)}}class hL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fL(n.type)}}class pL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zf=/(\w+)(\])?(\[|\.)?/g;function nx(t,e){t.seq.push(e),t.map[e.id]=e}function mL(t,e,n){const i=t.name,r=i.length;for(zf.lastIndex=0;;){const s=zf.exec(i),o=zf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nx(n,c===void 0?new dL(a,t,e):new hL(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new pL(a),nx(n,d)),n=d}}}class lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);mL(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ix(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gL=37297;let vL=0;function xL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const rx=new Ue;function _L(t){Ye._getMatrix(rx,Ye.workingColorSpace,t);const e=`mat3( ${rx.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Hc:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function sx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+xL(t.getShaderSource(e),a)}else return s}function yL(t,e){const n=_L(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const SL={[nM]:"Linear",[iM]:"Reinhard",[rM]:"Cineon",[sM]:"ACESFilmic",[aM]:"AgX",[lM]:"Neutral",[oM]:"Custom"};function ML(t,e){const n=SL[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zl=new V;function EL(){Ye.getLuminanceCoefficients(zl);const t=zl.x.toFixed(4),e=zl.y.toFixed(4),n=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function wL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function AL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ko(t){return t!==""}function ox(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ax(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(t){return t.replace(CL,RL)}const bL=new Map;function RL(t,e){let n=ke[e];if(n===void 0){const i=bL.get(e);if(i!==void 0)n=ke[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hh(n)}const PL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lx(t){return t.replace(PL,DL)}function DL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const LL={[ic]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function NL(t){return LL[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IL={[as]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function UL(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":IL[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const FL={[po]:"ENVMAP_MODE_REFRACTION"};function OL(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":FL[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BL={[tM]:"ENVMAP_BLENDING_MULTIPLY",[CR]:"ENVMAP_BLENDING_MIX",[bR]:"ENVMAP_BLENDING_ADD"};function kL(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":BL[t.combine]||"ENVMAP_BLENDING_NONE"}function VL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function zL(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=NL(n),c=UL(n),f=OL(n),d=kL(n),u=VL(n),p=TL(n),v=wL(s),y=r.createProgram();let g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ko).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ko).join(`
`),h.length>0&&(h+=`
`)):(g=[cx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),h=[cx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?ke.tonemapping_pars_fragment:"",n.toneMapping!==Mi?ML("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,yL("linearToOutputTexel",n.outputColorSpace),EL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ko).join(`
`)),o=Hh(o),o=ox(o,n),o=ax(o,n),a=Hh(a),a=ox(a,n),a=ax(a,n),o=lx(o),a=lx(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=m+g+o,M=m+h+a,w=ix(r,r.VERTEX_SHADER,x),T=ix(r,r.FRAGMENT_SHADER,M);r.attachShader(y,w),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(P){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(y)||"",j=r.getShaderInfoLog(w)||"",q=r.getShaderInfoLog(T)||"",N=B.trim(),W=j.trim(),U=q.trim();let F=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,T);else{const Z=sx(r,w,"vertex"),oe=sx(r,T,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+Z+`
`+oe)}else N!==""?De("WebGLProgram: Program Info Log:",N):(W===""||U==="")&&(X=!1);X&&(P.diagnostics={runnable:F,programLog:N,vertexShader:{log:W,prefix:g},fragmentShader:{log:U,prefix:h}})}r.deleteShader(w),r.deleteShader(T),_=new lc(r,y),b=AL(r,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(y,gL)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vL++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=T,this}let GL=0;class HL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new WL(e),n.set(e,i)),i}}class WL{constructor(e){this.id=GL++,this.code=e,this.usedTimes=0}}function jL(t){return t===ls||t===Vc||t===zc}function XL(t,e,n,i,r,s){const o=new _M,a=new HL,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,b,R,P,B,j){const q=P.fog,N=B.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||W,U),X=F&&F.mapping===gu?F.image.height:null,Z=p[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,de=oe!==void 0?oe.length:0;let ze=0;N.morphAttributes.position!==void 0&&(ze=1),N.morphAttributes.normal!==void 0&&(ze=2),N.morphAttributes.color!==void 0&&(ze=3);let We,Le,K,fe;if(Z){const Fe=pi[Z];We=Fe.vertexShader,Le=Fe.fragmentShader}else We=_.vertexShader,Le=_.fragmentShader,a.update(_),K=a.getVertexShaderID(_),fe=a.getFragmentShaderID(_);const ae=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,gt=!!_.map,je=!!_.matcap,nt=!!F,ft=!!_.aoMap,Ge=!!_.lightMap,Ut=!!_.bumpMap,vt=!!_.normalMap,Mn=!!_.displacementMap,L=!!_.emissiveMap,Ft=!!_.metalnessMap,Xe=!!_.roughnessMap,lt=_.anisotropy>0,he=_.clearcoat>0,Mt=_.dispersion>0,A=_.iridescence>0,S=_.sheen>0,k=_.transmission>0,Q=lt&&!!_.anisotropyMap,te=he&&!!_.clearcoatMap,ie=he&&!!_.clearcoatNormalMap,ue=he&&!!_.clearcoatRoughnessMap,Y=A&&!!_.iridescenceMap,J=A&&!!_.iridescenceThicknessMap,ve=S&&!!_.sheenColorMap,ye=S&&!!_.sheenRoughnessMap,le=!!_.specularMap,re=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Be=k&&!!_.transmissionMap,Je=k&&!!_.thicknessMap,D=!!_.gradientMap,se=!!_.alphaMap,$=_.alphaTest>0,xe=!!_.alphaHash,ce=!!_.extensions;let ee=Mi;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ee=t.toneMapping);const Te={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:We,fragmentShader:Le,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:je,envMap:nt,envMapMode:nt&&F.mapping,envMapCubeUVHeight:X,aoMap:ft,lightMap:Ge,bumpMap:Ut,normalMap:vt,displacementMap:Mn,emissiveMap:L,normalMapObjectSpace:vt&&_.normalMapType===DR,normalMapTangentSpace:vt&&_.normalMapType===gv,packedNormalMap:vt&&_.normalMapType===gv&&jL(_.normalMap.format),metalnessMap:Ft,roughnessMap:Xe,anisotropy:lt,anisotropyMap:Q,clearcoat:he,clearcoatMap:te,clearcoatNormalMap:ie,clearcoatRoughnessMap:ue,dispersion:Mt,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:S,sheenColorMap:ve,sheenRoughnessMap:ye,specularMap:le,specularColorMap:re,specularIntensityMap:Ne,transmission:k,transmissionMap:Be,thicknessMap:Je,gradientMap:D,opaque:_.transparent===!1&&_.blending===eo&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:$,alphaHash:xe,combine:_.combine,mapUv:gt&&v(_.map.channel),aoMapUv:ft&&v(_.aoMap.channel),lightMapUv:Ge&&v(_.lightMap.channel),bumpMapUv:Ut&&v(_.bumpMap.channel),normalMapUv:vt&&v(_.normalMap.channel),displacementMapUv:Mn&&v(_.displacementMap.channel),emissiveMapUv:L&&v(_.emissiveMap.channel),metalnessMapUv:Ft&&v(_.metalnessMap.channel),roughnessMapUv:Xe&&v(_.roughnessMap.channel),anisotropyMapUv:Q&&v(_.anisotropyMap.channel),clearcoatMapUv:te&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(_.sheenRoughnessMap.channel),specularMapUv:le&&v(_.specularMap.channel),specularColorMapUv:re&&v(_.specularColorMap.channel),specularIntensityMapUv:Ne&&v(_.specularIntensityMap.channel),transmissionMapUv:Be&&v(_.transmissionMap.channel),thicknessMapUv:Je&&v(_.thicknessMap.channel),alphaMapUv:se&&v(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(vt||lt),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&(gt||se),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Re,skinning:B.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&Ye.getTransfer(_.map.colorSpace)===et,decodeVideoTextureEmissive:L&&_.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(_.emissiveMap.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ui,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)b.push(R),b.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(h(b,_),m(b,_),b.push(t.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function h(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function x(_){const b=p[_.type];let R;if(b){const P=pi[b];R=gP.clone(P.uniforms)}else R=_.uniforms;return R}function M(_,b){let R=f.get(b);return R!==void 0?++R.usedTimes:(R=new zL(t,b,_,r),c.push(R),f.set(b,R)),R}function w(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:x,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function YL(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function qL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function ux(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,v,y,g,h){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:p,material:v,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:h},t[e]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=v,m.materialVariant=o(u),m.groupOrder=y,m.renderOrder=u.renderOrder,m.z=g,m.group=h),e++,m}function l(u,p,v,y,g,h){const m=a(u,p,v,y,g,h);v.transmission>0?i.push(m):v.transparent===!0?r.push(m):n.push(m)}function c(u,p,v,y,g,h){const m=a(u,p,v,y,g,h);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):n.unshift(m)}function f(u,p){n.length>1&&n.sort(u||qL),i.length>1&&i.sort(p||ux),r.length>1&&r.sort(p||ux)}function d(){for(let u=e,p=t.length;u<p;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:f}}function $L(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new fx,t.set(i,[o])):r>=s.length?(o=new fx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function KL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new $e};break;case"SpotLight":n={position:new V,direction:new V,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function ZL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let QL=0;function JL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eN(t){const e=new KL,n=ZL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new Lt,o=new Lt;function a(c){let f=0,d=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,v=0,y=0,g=0,h=0,m=0,x=0,M=0,w=0,T=0,C=0;c.sort(JL);for(let b=0,R=c.length;b<R;b++){const P=c[b],B=P.color,j=P.intensity,q=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ls?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=B.r*j,d+=B.g*j,u+=B.b*j;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],j);C++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,F=n.get(P);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(B).multiplyScalar(j),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[y]=W;const U=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,U.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[y]=U.matrix,P.castShadow){const F=n.get(P);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.spotShadow[y]=F,i.spotShadowMap[y]=N,M++}y++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(B).multiplyScalar(j),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=W,g++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const U=P.shadow,F=n.get(P);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,i.pointShadow[v]=F,i.pointShadowMap[v]=N,i.pointShadowMatrix[v]=P.shadow.matrix,x++}i.point[v]=W,v++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(j),W.groundColor.copy(P.groundColor).multiplyScalar(j),i.hemi[h]=W,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==p||_.pointLength!==v||_.spotLength!==y||_.rectAreaLength!==g||_.hemiLength!==h||_.numDirectionalShadows!==m||_.numPointShadows!==x||_.numSpotShadows!==M||_.numSpotMaps!==w||_.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,_.directionalLength=p,_.pointLength=v,_.spotLength=y,_.rectAreaLength=g,_.hemiLength=h,_.numDirectionalShadows=m,_.numPointShadows=x,_.numSpotShadows=M,_.numSpotMaps=w,_.numLightProbes=C,i.version=QL++)}function l(c,f){let d=0,u=0,p=0,v=0,y=0;const g=f.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const x=c[h];if(x.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),d++}else if(x.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function dx(t){const e=new eN(t),n=[],i=[],r=[];function s(u){d.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function tN(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new dx(t),e.set(r,[a])):s>=o.length?(a=new dx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const nN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rN=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],sN=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],hx=new Lt,zo=new V,Gf=new V;function oN(t,e,n){let i=new EM;const r=new st,s=new st,o=new Dt,a=new yP,l=new SP,c={},f=n.maxTextureSize,d={[Rr]:un,[un]:Rr,[Ui]:Ui},u=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:nN,fragmentShader:iN}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Sn;v.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new wi(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic;let h=this.type;this.render=function(T,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===lR&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ic);const b=t.getRenderTarget(),R=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Gi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const j=h!==this.type;j&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(N=>N.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,N=T.length;q<N;q++){const W=T[q],U=W.shadow;if(U===void 0){De("WebGLShadowMap:",W,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const F=U.getFrameExtents();r.multiply(F),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/F.x),r.x=s.x*F.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/F.y),r.y=s.y*F.y,U.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=X,U.map===null||j===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===$o){if(W.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ei(r.x,r.y,{format:ls,type:$i,minFilter:sn,magFilter:sn,generateMipmaps:!1}),U.map.texture.name=W.name+".shadowMap",U.map.depthTexture=new mo(r.x,r.y,gi),U.map.depthTexture.name=W.name+".shadowMapDepth",U.map.depthTexture.format=Ki,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Yt,U.map.depthTexture.magFilter=Yt}else W.isPointLight?(U.map=new NM(r.x),U.map.depthTexture=new pP(r.x,Ti)):(U.map=new Ei(r.x,r.y),U.map.depthTexture=new mo(r.x,r.y,Ti)),U.map.depthTexture.name=W.name+".shadowMap",U.map.depthTexture.format=Ki,this.type===ic?(U.map.depthTexture.compareFunction=X?Tm:Em,U.map.depthTexture.minFilter=sn,U.map.depthTexture.magFilter=sn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Yt,U.map.depthTexture.magFilter=Yt);U.camera.updateProjectionMatrix()}const Z=U.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<Z;oe++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(U.map),t.clear());const de=U.getViewport(oe);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),B.viewport(o)}if(W.isPointLight){const de=U.camera,ze=U.matrix,We=W.distance||de.far;We!==de.far&&(de.far=We,de.updateProjectionMatrix()),zo.setFromMatrixPosition(W.matrixWorld),de.position.copy(zo),Gf.copy(de.position),Gf.add(rN[oe]),de.up.copy(sN[oe]),de.lookAt(Gf),de.updateMatrixWorld(),ze.makeTranslation(-zo.x,-zo.y,-zo.z),hx.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),U._frustum.setFromProjectionMatrix(hx,de.coordinateSystem,de.reversedDepth)}else U.updateMatrices(W);i=U.getFrustum(),M(C,_,U.camera,W,this.type)}U.isPointLightShadow!==!0&&this.type===$o&&m(U,_),U.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(b,R,P)};function m(T,C){const _=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ei(r.x,r.y,{format:ls,type:$i})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,_,u,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,_,p,y,null)}function x(T,C,_,b){let R=null;const P=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=R.uuid,j=C.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let N=q[j];N===void 0&&(N=R.clone(),q[j]=N,C.addEventListener("dispose",w)),R=N}if(R.visible=C.visible,R.wireframe=C.wireframe,b===$o?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const B=t.properties.get(R);B.light=_}return R}function M(T,C,_,b,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===$o)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const j=e.update(T),q=T.material;if(Array.isArray(q)){const N=j.groups;for(let W=0,U=N.length;W<U;W++){const F=N[W],X=q[F.materialIndex];if(X&&X.visible){const Z=x(T,X,b,R);T.onBeforeShadow(t,T,C,_,j,Z,F),t.renderBufferDirect(_,null,j,Z,T,F),T.onAfterShadow(t,T,C,_,j,Z,F)}}}else if(q.visible){const N=x(T,q,b,R);T.onBeforeShadow(t,T,C,_,j,N,null),t.renderBufferDirect(_,null,j,N,T,null),T.onAfterShadow(t,T,C,_,j,N,null)}}const B=T.children;for(let j=0,q=B.length;j<q;j++)M(B[j],C,_,b,R)}function w(T){T.target.removeEventListener("dispose",w);for(const _ in c){const b=c[_],R=T.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function aN(t,e){function n(){let D=!1;const se=new Dt;let $=null;const xe=new Dt(0,0,0,0);return{setMask:function(ce){$!==ce&&!D&&(t.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){D=ce},setClear:function(ce,ee,Te,Fe,At){At===!0&&(ce*=Fe,ee*=Fe,Te*=Fe),se.set(ce,ee,Te,Fe),xe.equals(se)===!1&&(t.clearColor(ce,ee,Te,Fe),xe.copy(se))},reset:function(){D=!1,$=null,xe.set(-1,0,0,0)}}}function i(){let D=!1,se=!1,$=null,xe=null,ce=null;return{setReversed:function(ee){if(se!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),se=ee;const Fe=ce;ce=null,this.setClear(Fe)}},getReversed:function(){return se},setTest:function(ee){ee?ae(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(ee){$!==ee&&!D&&(t.depthMask(ee),$=ee)},setFunc:function(ee){if(se&&(ee=zR[ee]),xe!==ee){switch(ee){case eh:t.depthFunc(t.NEVER);break;case th:t.depthFunc(t.ALWAYS);break;case nh:t.depthFunc(t.LESS);break;case ho:t.depthFunc(t.LEQUAL);break;case ih:t.depthFunc(t.EQUAL);break;case rh:t.depthFunc(t.GEQUAL);break;case sh:t.depthFunc(t.GREATER);break;case oh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=ee}},setLocked:function(ee){D=ee},setClear:function(ee){ce!==ee&&(ce=ee,se&&(ee=1-ee),t.clearDepth(ee))},reset:function(){D=!1,$=null,xe=null,ce=null,se=!1}}}function r(){let D=!1,se=null,$=null,xe=null,ce=null,ee=null,Te=null,Fe=null,At=null;return{setTest:function(it){D||(it?ae(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(it){se!==it&&!D&&(t.stencilMask(it),se=it)},setFunc:function(it,Ci,li){($!==it||xe!==Ci||ce!==li)&&(t.stencilFunc(it,Ci,li),$=it,xe=Ci,ce=li)},setOp:function(it,Ci,li){(ee!==it||Te!==Ci||Fe!==li)&&(t.stencilOp(it,Ci,li),ee=it,Te=Ci,Fe=li)},setLocked:function(it){D=it},setClear:function(it){At!==it&&(t.clearStencil(it),At=it)},reset:function(){D=!1,se=null,$=null,xe=null,ce=null,ee=null,Te=null,Fe=null,At=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u={},p=new WeakMap,v=[],y=null,g=!1,h=null,m=null,x=null,M=null,w=null,T=null,C=null,_=new $e(0,0,0),b=0,R=!1,P=null,B=null,j=null,q=null,N=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,F=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=F>=2);let Z=null,oe={};const de=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),We=new Dt().fromArray(de),Le=new Dt().fromArray(ze);function K(D,se,$,xe){const ce=new Uint8Array(4),ee=t.createTexture();t.bindTexture(D,ee),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<$;Te++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(se+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ee}const fe={};fe[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(ho),Ut(!1),vt(dv),ae(t.CULL_FACE),ft(Gi);function ae(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function Re(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function Ie(D,se){return u[D]!==se?(t.bindFramebuffer(D,se),u[D]=se,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Pe(D,se){let $=v,xe=!1;if(D){$=p.get(se),$===void 0&&($=[],p.set(se,$));const ce=D.textures;if($.length!==ce.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Te=ce.length;ee<Te;ee++)$[ee]=t.COLOR_ATTACHMENT0+ee;$.length=ce.length,xe=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,xe=!0);xe&&t.drawBuffers($)}function gt(D){return y!==D?(t.useProgram(D),y=D,!0):!1}const je={[jr]:t.FUNC_ADD,[uR]:t.FUNC_SUBTRACT,[fR]:t.FUNC_REVERSE_SUBTRACT};je[dR]=t.MIN,je[hR]=t.MAX;const nt={[pR]:t.ZERO,[mR]:t.ONE,[gR]:t.SRC_COLOR,[Qd]:t.SRC_ALPHA,[MR]:t.SRC_ALPHA_SATURATE,[yR]:t.DST_COLOR,[xR]:t.DST_ALPHA,[vR]:t.ONE_MINUS_SRC_COLOR,[Jd]:t.ONE_MINUS_SRC_ALPHA,[SR]:t.ONE_MINUS_DST_COLOR,[_R]:t.ONE_MINUS_DST_ALPHA,[ER]:t.CONSTANT_COLOR,[TR]:t.ONE_MINUS_CONSTANT_COLOR,[wR]:t.CONSTANT_ALPHA,[AR]:t.ONE_MINUS_CONSTANT_ALPHA};function ft(D,se,$,xe,ce,ee,Te,Fe,At,it){if(D===Gi){g===!0&&(Re(t.BLEND),g=!1);return}if(g===!1&&(ae(t.BLEND),g=!0),D!==cR){if(D!==h||it!==R){if((m!==jr||w!==jr)&&(t.blendEquation(t.FUNC_ADD),m=jr,w=jr),it)switch(D){case eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hv:t.blendFunc(t.ONE,t.ONE);break;case pv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",D);break}else switch(D){case eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case pv:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mv:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",D);break}x=null,M=null,T=null,C=null,_.set(0,0,0),b=0,h=D,R=it}return}ce=ce||se,ee=ee||$,Te=Te||xe,(se!==m||ce!==w)&&(t.blendEquationSeparate(je[se],je[ce]),m=se,w=ce),($!==x||xe!==M||ee!==T||Te!==C)&&(t.blendFuncSeparate(nt[$],nt[xe],nt[ee],nt[Te]),x=$,M=xe,T=ee,C=Te),(Fe.equals(_)===!1||At!==b)&&(t.blendColor(Fe.r,Fe.g,Fe.b,At),_.copy(Fe),b=At),h=D,R=!1}function Ge(D,se){D.side===Ui?Re(t.CULL_FACE):ae(t.CULL_FACE);let $=D.side===un;se&&($=!$),Ut($),D.blending===eo&&D.transparent===!1?ft(Gi):ft(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const xe=D.stencilWrite;a.setTest(xe),xe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),L(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(D){P!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),P=D)}function vt(D){D!==oR?(ae(t.CULL_FACE),D!==B&&(D===dv?t.cullFace(t.BACK):D===aR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),B=D}function Mn(D){D!==j&&(U&&t.lineWidth(D),j=D)}function L(D,se,$){D?(ae(t.POLYGON_OFFSET_FILL),(q!==se||N!==$)&&(q=se,N=$,o.getReversed()&&(se=-se),t.polygonOffset(se,$))):Re(t.POLYGON_OFFSET_FILL)}function Ft(D){D?ae(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function Xe(D){D===void 0&&(D=t.TEXTURE0+W-1),Z!==D&&(t.activeTexture(D),Z=D)}function lt(D,se,$){$===void 0&&(Z===null?$=t.TEXTURE0+W-1:$=Z);let xe=oe[$];xe===void 0&&(xe={type:void 0,texture:void 0},oe[$]=xe),(xe.type!==D||xe.texture!==se)&&(Z!==$&&(t.activeTexture($),Z=$),t.bindTexture(D,se||fe[D]),xe.type=D,xe.texture=se)}function he(){const D=oe[Z];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Mt(){try{t.compressedTexImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function S(){try{t.texSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function k(){try{t.texSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function ie(){try{t.texStorage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function ue(){try{t.texStorage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Y(){try{t.texImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function J(){try{t.texImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function ve(D){return d[D]!==void 0?d[D]:t.getParameter(D)}function ye(D,se){d[D]!==se&&(t.pixelStorei(D,se),d[D]=se)}function le(D){We.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),We.copy(D))}function re(D){Le.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Le.copy(D))}function Ne(D,se){let $=c.get(se);$===void 0&&($=new WeakMap,c.set(se,$));let xe=$.get(D);xe===void 0&&(xe=t.getUniformBlockIndex(se,D.name),$.set(D,xe))}function Be(D,se){const xe=c.get(se).get(D);l.get(se)!==xe&&(t.uniformBlockBinding(se,xe,D.__bindingPointIndex),l.set(se,xe))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},d={},Z=null,oe={},u={},p=new WeakMap,v=[],y=null,g=!1,h=null,m=null,x=null,M=null,w=null,T=null,C=null,_=new $e(0,0,0),b=0,R=!1,P=null,B=null,j=null,q=null,N=null,We.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Re,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:gt,setBlending:ft,setMaterial:Ge,setFlipSided:Ut,setCullFace:vt,setLineWidth:Mn,setPolygonOffset:L,setScissorTest:Ft,activeTexture:Xe,bindTexture:lt,unbindTexture:he,compressedTexImage2D:Mt,compressedTexImage3D:A,texImage2D:Y,texImage3D:J,pixelStorei:ye,getParameter:ve,updateUBOMapping:Ne,uniformBlockBinding:Be,texStorage2D:ie,texStorage3D:ue,texSubImage2D:S,texSubImage3D:k,compressedTexSubImage2D:Q,compressedTexSubImage3D:te,scissor:le,viewport:re,reset:Je}}function lN(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,f=new WeakMap,d=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return v?new OffscreenCanvas(A,S):jc("canvas")}function g(A,S,k){let Q=1;const te=Mt(A);if((te.width>k||te.height>k)&&(Q=k/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ie=Math.floor(Q*te.width),ue=Math.floor(Q*te.height);u===void 0&&(u=y(ie,ue));const Y=S?y(ie,ue):u;return Y.width=ie,Y.height=ue,Y.getContext("2d").drawImage(A,0,0,ie,ue),De("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ie+"x"+ue+")."),Y}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function h(A){return A.generateMipmaps}function m(A){t.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,S,k,Q,te,ie=!1){if(A!==null){if(t[A]!==void 0)return t[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;Q&&(ue=e.get("EXT_texture_norm16"),ue||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=S;if(S===t.RED&&(k===t.FLOAT&&(Y=t.R32F),k===t.HALF_FLOAT&&(Y=t.R16F),k===t.UNSIGNED_BYTE&&(Y=t.R8),k===t.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),k===t.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.R8UI),k===t.UNSIGNED_SHORT&&(Y=t.R16UI),k===t.UNSIGNED_INT&&(Y=t.R32UI),k===t.BYTE&&(Y=t.R8I),k===t.SHORT&&(Y=t.R16I),k===t.INT&&(Y=t.R32I)),S===t.RG&&(k===t.FLOAT&&(Y=t.RG32F),k===t.HALF_FLOAT&&(Y=t.RG16F),k===t.UNSIGNED_BYTE&&(Y=t.RG8),k===t.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),k===t.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RG8UI),k===t.UNSIGNED_SHORT&&(Y=t.RG16UI),k===t.UNSIGNED_INT&&(Y=t.RG32UI),k===t.BYTE&&(Y=t.RG8I),k===t.SHORT&&(Y=t.RG16I),k===t.INT&&(Y=t.RG32I)),S===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),k===t.UNSIGNED_INT&&(Y=t.RGB32UI),k===t.BYTE&&(Y=t.RGB8I),k===t.SHORT&&(Y=t.RGB16I),k===t.INT&&(Y=t.RGB32I)),S===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),k===t.UNSIGNED_INT&&(Y=t.RGBA32UI),k===t.BYTE&&(Y=t.RGBA8I),k===t.SHORT&&(Y=t.RGBA16I),k===t.INT&&(Y=t.RGBA32I)),S===t.RGB&&(k===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),k===t.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),S===t.RGBA){const J=ie?Hc:Ye.getTransfer(te);k===t.FLOAT&&(Y=t.RGBA32F),k===t.HALF_FLOAT&&(Y=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Y=J===et?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),k===t.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(A,S){let k;return A?S===null||S===Ti||S===Na?k=t.DEPTH24_STENCIL8:S===gi?k=t.DEPTH32F_STENCIL8:S===La&&(k=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ti||S===Na?k=t.DEPTH_COMPONENT24:S===gi?k=t.DEPTH_COMPONENT32F:S===La&&(k=t.DEPTH_COMPONENT16),k}function T(A,S){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),b(S),S.isVideoTexture&&f.delete(S),S.isHTMLTexture&&d.delete(S)}function _(A){const S=A.target;S.removeEventListener("dispose",_),P(S)}function b(A){const S=i.get(A);if(S.__webglInit===void 0)return;const k=A.source,Q=p.get(k);if(Q){const te=Q[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(A),Object.keys(Q).length===0&&p.delete(k)}i.remove(A)}function R(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const k=A.source,Q=p.get(k);delete Q[S.__cacheKey],o.memory.textures--}function P(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let te=0;te<S.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=A.textures;for(let Q=0,te=k.length;Q<te;Q++){const ie=i.get(k[Q]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(A)}let B=0;function j(){B=0}function q(){return B}function N(A){B=A}function W(){const A=B;return A>=r.maxTextures&&De("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),B+=1,A}function U(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function F(A,S){const k=i.get(A);if(A.isVideoTexture&&lt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const Q=A.image;if(Q===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(k,A,S);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function X(A,S){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Re(k,A,S);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function Z(A,S){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Re(k,A,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function oe(A,S){const k=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Ie(k,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const de={[ah]:t.REPEAT,[Bi]:t.CLAMP_TO_EDGE,[lh]:t.MIRRORED_REPEAT},ze={[Yt]:t.NEAREST,[RR]:t.NEAREST_MIPMAP_NEAREST,[ml]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[ff]:t.LINEAR_MIPMAP_NEAREST,[Zr]:t.LINEAR_MIPMAP_LINEAR},We={[LR]:t.NEVER,[OR]:t.ALWAYS,[NR]:t.LESS,[Em]:t.LEQUAL,[IR]:t.EQUAL,[Tm]:t.GEQUAL,[UR]:t.GREATER,[FR]:t.NOTEQUAL};function Le(A,S){if(S.type===gi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===ff||S.magFilter===ml||S.magFilter===Zr||S.minFilter===sn||S.minFilter===ff||S.minFilter===ml||S.minFilter===Zr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,de[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,de[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,de[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ze[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ze[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,We[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==ml&&S.minFilter!==Zr||S.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function K(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const Q=S.source;let te=p.get(Q);te===void 0&&(te={},p.set(Q,te));const ie=U(S);if(ie!==A.__cacheKey){te[ie]===void 0&&(te[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[ie].usedTimes++;const ue=te[A.__cacheKey];ue!==void 0&&(te[A.__cacheKey].usedTimes--,ue.usedTimes===0&&R(S)),A.__cacheKey=ie,A.__webglTexture=te[ie].texture}return k}function fe(A,S,k){return Math.floor(Math.floor(A/k)/S)}function ae(A,S,k,Q){const ie=A.updateRanges;if(ie.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,k,Q,S.data);else{ie.sort((ye,le)=>ye.start-le.start);let ue=0;for(let ye=1;ye<ie.length;ye++){const le=ie[ue],re=ie[ye],Ne=le.start+le.count,Be=fe(re.start,S.width,4),Je=fe(le.start,S.width,4);re.start<=Ne+1&&Be===Je&&fe(re.start+re.count-1,S.width,4)===Be?le.count=Math.max(le.count,re.start+re.count-le.start):(++ue,ie[ue]=re)}ie.length=ue+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),ve=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ye=0,le=ie.length;ye<le;ye++){const re=ie[ye],Ne=Math.floor(re.start/4),Be=Math.ceil(re.count/4),Je=Ne%S.width,D=Math.floor(Ne/S.width),se=Be,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Je,D,se,$,k,Q,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function Re(A,S,k){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const te=K(A,S),ie=S.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+k);const ue=i.get(ie);if(ie.version!==ue.__version||te===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const $=Ye.getPrimaries(Ye.workingColorSpace),xe=S.colorSpace===hr?null:Ye.getPrimaries(S.colorSpace),ce=S.colorSpace===hr||$===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let J=g(S.image,!1,r.maxTextureSize);J=he(S,J);const ve=s.convert(S.format,S.colorSpace),ye=s.convert(S.type);let le=M(S.internalFormat,ve,ye,S.normalized,S.colorSpace,S.isVideoTexture);Le(Q,S);let re;const Ne=S.mipmaps,Be=S.isVideoTexture!==!0,Je=ue.__version===void 0||te===!0,D=ie.dataReady,se=T(S,J);if(S.isDepthTexture)le=w(S.format===Qr,S.type),Je&&(Be?n.texStorage2D(t.TEXTURE_2D,1,le,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,le,J.width,J.height,0,ve,ye,null));else if(S.isDataTexture)if(Ne.length>0){Be&&Je&&n.texStorage2D(t.TEXTURE_2D,se,le,Ne[0].width,Ne[0].height);for(let $=0,xe=Ne.length;$<xe;$++)re=Ne[$],Be?D&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,ve,ye,re.data):n.texImage2D(t.TEXTURE_2D,$,le,re.width,re.height,0,ve,ye,re.data);S.generateMipmaps=!1}else Be?(Je&&n.texStorage2D(t.TEXTURE_2D,se,le,J.width,J.height),D&&ae(S,J,ve,ye)):n.texImage2D(t.TEXTURE_2D,0,le,J.width,J.height,0,ve,ye,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,Ne[0].width,Ne[0].height,J.depth);for(let $=0,xe=Ne.length;$<xe;$++)if(re=Ne[$],S.format!==ri)if(ve!==null)if(Be){if(D)if(S.layerUpdates.size>0){const ce=Wv(re.width,re.height,S.format,S.type);for(const ee of S.layerUpdates){const Te=re.data.subarray(ee*ce/re.data.BYTES_PER_ELEMENT,(ee+1)*ce/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ee,re.width,re.height,1,ve,Te)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,J.depth,ve,re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,le,re.width,re.height,J.depth,0,re.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,J.depth,ve,ye,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,le,re.width,re.height,J.depth,0,ve,ye,re.data)}else{Be&&Je&&n.texStorage2D(t.TEXTURE_2D,se,le,Ne[0].width,Ne[0].height);for(let $=0,xe=Ne.length;$<xe;$++)re=Ne[$],S.format!==ri?ve!==null?Be?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,ve,re.data):n.compressedTexImage2D(t.TEXTURE_2D,$,le,re.width,re.height,0,re.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,ve,ye,re.data):n.texImage2D(t.TEXTURE_2D,$,le,re.width,re.height,0,ve,ye,re.data)}else if(S.isDataArrayTexture)if(Be){if(Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,J.width,J.height,J.depth),D)if(S.layerUpdates.size>0){const $=Wv(J.width,J.height,S.format,S.type);for(const xe of S.layerUpdates){const ce=J.data.subarray(xe*$/J.data.BYTES_PER_ELEMENT,(xe+1)*$/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,J.width,J.height,1,ve,ye,ce)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ve,ye,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,le,J.width,J.height,J.depth,0,ve,ye,J.data);else if(S.isData3DTexture)Be?(Je&&n.texStorage3D(t.TEXTURE_3D,se,le,J.width,J.height,J.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ve,ye,J.data)):n.texImage3D(t.TEXTURE_3D,0,le,J.width,J.height,J.depth,0,ve,ye,J.data);else if(S.isFramebufferTexture){if(Je)if(Be)n.texStorage2D(t.TEXTURE_2D,se,le,J.width,J.height);else{let $=J.width,xe=J.height;for(let ce=0;ce<se;ce++)n.texImage2D(t.TEXTURE_2D,ce,le,$,xe,0,ve,ye,null),$>>=1,xe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),d.add(S),$.onpaint=Fe=>{const At=Fe.changedElements;for(const it of d)At.includes(it.image)&&(it.needsUpdate=!0)},$.requestPaint();return}const xe=0,ce=t.RGBA,ee=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,xe,ce,ee,Te,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Be&&Je){const $=Mt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,se,le,$.width,$.height)}for(let $=0,xe=Ne.length;$<xe;$++)re=Ne[$],Be?D&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ve,ye,re):n.texImage2D(t.TEXTURE_2D,$,le,ve,ye,re);S.generateMipmaps=!1}else if(Be){if(Je){const $=Mt(J);n.texStorage2D(t.TEXTURE_2D,se,le,$.width,$.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,ye,J)}else n.texImage2D(t.TEXTURE_2D,0,le,ve,ye,J);h(S)&&m(Q),ue.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ie(A,S,k){if(S.image.length!==6)return;const Q=K(A,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+k);const ie=i.get(te);if(te.version!==ie.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);const ue=Ye.getPrimaries(Ye.workingColorSpace),Y=S.colorSpace===hr?null:Ye.getPrimaries(S.colorSpace),J=S.colorSpace===hr||ue===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,le=[];for(let ee=0;ee<6;ee++)!ve&&!ye?le[ee]=g(S.image[ee],!0,r.maxCubemapSize):le[ee]=ye?S.image[ee].image:S.image[ee],le[ee]=he(S,le[ee]);const re=le[0],Ne=s.convert(S.format,S.colorSpace),Be=s.convert(S.type),Je=M(S.internalFormat,Ne,Be,S.normalized,S.colorSpace),D=S.isVideoTexture!==!0,se=ie.__version===void 0||Q===!0,$=te.dataReady;let xe=T(S,re);Le(t.TEXTURE_CUBE_MAP,S);let ce;if(ve){D&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Je,re.width,re.height);for(let ee=0;ee<6;ee++){ce=le[ee].mipmaps;for(let Te=0;Te<ce.length;Te++){const Fe=ce[Te];S.format!==ri?Ne!==null?D?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Fe.width,Fe.height,Ne,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Je,Fe.width,Fe.height,0,Fe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Fe.width,Fe.height,Ne,Be,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Je,Fe.width,Fe.height,0,Ne,Be,Fe.data)}}}else{if(ce=S.mipmaps,D&&se){ce.length>0&&xe++;const ee=Mt(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ye){D?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,le[ee].width,le[ee].height,Ne,Be,le[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Je,le[ee].width,le[ee].height,0,Ne,Be,le[ee].data);for(let Te=0;Te<ce.length;Te++){const At=ce[Te].image[ee].image;D?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,At.width,At.height,Ne,Be,At.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Je,At.width,At.height,0,Ne,Be,At.data)}}else{D?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,Be,le[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Je,Ne,Be,le[ee]);for(let Te=0;Te<ce.length;Te++){const Fe=ce[Te];D?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Ne,Be,Fe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Je,Ne,Be,Fe.image[ee])}}}h(S)&&m(t.TEXTURE_CUBE_MAP),ie.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Pe(A,S,k,Q,te,ie){const ue=s.convert(k.format,k.colorSpace),Y=s.convert(k.type),J=M(k.internalFormat,ue,Y,k.normalized,k.colorSpace),ve=i.get(S),ye=i.get(k);if(ye.__renderTarget=S,!ve.__hasExternalTextures){const le=Math.max(1,S.width>>ie),re=Math.max(1,S.height>>ie);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ie,J,le,re,S.depth,0,ue,Y,null):n.texImage2D(te,ie,J,le,re,0,ue,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,ye.__webglTexture,0,Ft(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,ye.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(A,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,ie=w(S.stencilBuffer,te),ue=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Xe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ft(S),ie,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ft(S),ie,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,A)}else{const Q=S.textures;for(let te=0;te<Q.length;te++){const ie=Q[te],ue=s.convert(ie.format,ie.colorSpace),Y=s.convert(ie.type),J=M(ie.internalFormat,ue,Y,ie.normalized,ie.colorSpace);Xe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ft(S),J,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ft(S),J,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,J,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function je(A,S,k){const Q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Le(t.TEXTURE_CUBE_MAP,S.depthTexture);const ve=s.convert(S.depthTexture.format),ye=s.convert(S.depthTexture.type);let le;S.depthTexture.format===Ki?le=t.DEPTH_COMPONENT24:S.depthTexture.format===Qr&&(le=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,le,S.width,S.height,0,ve,ye,null)}}else F(S.depthTexture,0);const ie=te.__webglTexture,ue=Ft(S),Y=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,J=S.depthTexture.format===Qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ki)Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,ie,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,ie,0);else if(S.depthTexture.format===Qr)Xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,ie,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,ie,0);else throw new Error("Unknown depthTexture format")}function nt(A){const S=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let Q=0;Q<6;Q++)je(S.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?je(S.__webglFramebuffer[0],A,0):je(S.__webglFramebuffer,A,0)}else if(k){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=t.createRenderbuffer(),gt(S.__webglDepthbuffer[Q],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),gt(S.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ft(A,S,k){const Q=i.get(A);S!==void 0&&Pe(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&nt(A)}function Ge(A){const S=A.texture,k=i.get(A),Q=i.get(S);A.addEventListener("dispose",_);const te=A.textures,ie=A.isWebGLCubeRenderTarget===!0,ue=te.length>1;if(ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++),ie){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let J=0;J<S.mipmaps.length;J++)k.__webglFramebuffer[Y][J]=t.createFramebuffer()}else k.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)k.__webglFramebuffer[Y]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Y=0,J=te.length;Y<J;Y++){const ve=i.get(te[Y]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Xe(A)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<te.length;Y++){const J=te[Y];k.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const ve=s.convert(J.format,J.colorSpace),ye=s.convert(J.type),le=M(J.internalFormat,ve,ye,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),re=Ft(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,le,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),gt(k.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(t.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Pe(k.__webglFramebuffer[Y][J],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Pe(k.__webglFramebuffer[Y],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);h(S)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let Y=0,J=te.length;Y<J;Y++){const ve=te[Y],ye=i.get(ve);let le=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,ye.__webglTexture),Le(le,ve),Pe(k.__webglFramebuffer,A,ve,t.COLOR_ATTACHMENT0+Y,le,0),h(ve)&&m(le)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,Q.__webglTexture),Le(Y,S),S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Pe(k.__webglFramebuffer[J],A,S,t.COLOR_ATTACHMENT0,Y,J);else Pe(k.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,Y,0);h(S)&&m(Y),n.unbindTexture()}A.depthBuffer&&nt(A)}function Ut(A){const S=A.textures;for(let k=0,Q=S.length;k<Q;k++){const te=S[k];if(h(te)){const ie=x(A),ue=i.get(te).__webglTexture;n.bindTexture(ie,ue),m(ie),n.unbindTexture()}}}const vt=[],Mn=[];function L(A){if(A.samples>0){if(Xe(A)===!1){const S=A.textures,k=A.width,Q=A.height;let te=t.COLOR_BUFFER_BIT;const ie=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(A),Y=S.length>1;if(Y)for(let ve=0;ve<S.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);const ye=i.get(S[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,k,Q,0,0,k,Q,te,t.NEAREST),l===!0&&(vt.length=0,Mn.length=0,vt.push(t.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(vt.push(ie),Mn.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Mn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,vt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let ve=0;ve<S.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);const ye=i.get(S[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ft(A){return Math.min(r.maxSamples,A.samples)}function Xe(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(A){const S=o.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function he(A,S){const k=A.colorSpace,Q=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Gc&&k!==hr&&(Ye.getTransfer(k)===et?(Q!==ri||te!==Wn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),S}function Mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.getTextureUnits=q,this.setTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=oe,this.rebindTextures=ft,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function cN(t,e){function n(i,r=hr){let s;const o=Ye.getTransfer(r);if(i===Wn)return t.UNSIGNED_BYTE;if(i===xm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_m)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===hM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===uM)return t.BYTE;if(i===fM)return t.SHORT;if(i===La)return t.UNSIGNED_SHORT;if(i===vm)return t.INT;if(i===Ti)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===$i)return t.HALF_FLOAT;if(i===pM)return t.ALPHA;if(i===mM)return t.RGB;if(i===ri)return t.RGBA;if(i===Ki)return t.DEPTH_COMPONENT;if(i===Qr)return t.DEPTH_STENCIL;if(i===gM)return t.RED;if(i===ym)return t.RED_INTEGER;if(i===ls)return t.RG;if(i===Sm)return t.RG_INTEGER;if(i===Mm)return t.RGBA_INTEGER;if(i===rc||i===sc||i===oc||i===ac)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ch||i===uh||i===fh||i===dh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hh||i===ph||i===mh||i===gh||i===vh||i===Vc||i===xh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hh||i===ph)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===gh)return s.COMPRESSED_R11_EAC;if(i===vh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Vc)return s.COMPRESSED_RG11_EAC;if(i===xh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_h||i===yh||i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah||i===Ch||i===bh||i===Rh||i===Ph||i===Dh||i===Lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_h)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Eh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Th)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ah)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ch)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ph)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nh||i===Ih||i===Uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nh)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fh||i===Oh||i===zc||i===Bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const uN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new CM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ai({vertexShader:uN,fragmentShader:fN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wi(new vu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hN extends hs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,v=null;const y=typeof XRWebGLBinding<"u",g=new dN,h={},m=n.getContextAttributes();let x=null,M=null;const w=[],T=[],C=new st;let _=null;const b=new Hn;b.viewport=new Dt;const R=new Hn;R.viewport=new Dt;const P=[b,R],B=new EP;let j=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=w[K];return fe===void 0&&(fe=new _f,w[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=w[K];return fe===void 0&&(fe=new _f,w[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=w[K];return fe===void 0&&(fe=new _f,w[K]=fe),fe.getHandSpace()};function N(K){const fe=T.indexOf(K.inputSource);if(fe===-1)return;const ae=w[fe];ae!==void 0&&(ae.update(K.inputSource,K.frame,c||o),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",U);for(let K=0;K<w.length;K++){const fe=T[K];fe!==null&&(T[K]=null,w[K].disconnect(fe))}j=null,q=null,g.reset();for(const K in h)delete h[K];e.setRenderTarget(x),p=null,u=null,d=null,r=null,M=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",W),r.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Re=null,Ie=null;m.depth&&(Ie=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=m.stencil?Qr:Ki,Re=m.stencil?Na:Ti);const Pe={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Pe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Ei(u.textureWidth,u.textureHeight,{format:ri,type:Wn,depthTexture:new mo(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ei(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(K){for(let fe=0;fe<K.removed.length;fe++){const ae=K.removed[fe],Re=T.indexOf(ae);Re>=0&&(T[Re]=null,w[Re].disconnect(ae))}for(let fe=0;fe<K.added.length;fe++){const ae=K.added[fe];let Re=T.indexOf(ae);if(Re===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=T.length){T.push(ae),Re=Pe;break}else if(T[Pe]===null){T[Pe]=ae,Re=Pe;break}if(Re===-1)break}const Ie=w[Re];Ie&&Ie.connect(ae)}}const F=new V,X=new V;function Z(K,fe,ae){F.setFromMatrixPosition(fe.matrixWorld),X.setFromMatrixPosition(ae.matrixWorld);const Re=F.distanceTo(X),Ie=fe.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,gt=Ie[14]/(Ie[10]-1),je=Ie[14]/(Ie[10]+1),nt=(Ie[9]+1)/Ie[5],ft=(Ie[9]-1)/Ie[5],Ge=(Ie[8]-1)/Ie[0],Ut=(Pe[8]+1)/Pe[0],vt=gt*Ge,Mn=gt*Ut,L=Re/(-Ge+Ut),Ft=L*-Ge;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ft),K.translateZ(L),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Xe=gt+L,lt=je+L,he=vt-Ft,Mt=Mn+(Re-Ft),A=nt*je/lt*Xe,S=ft*je/lt*Xe;K.projectionMatrix.makePerspective(he,Mt,A,S,Xe,lt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let fe=K.near,ae=K.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),B.near=R.near=b.near=fe,B.far=R.far=b.far=ae,(j!==B.near||q!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),j=B.near,q=B.far),B.layers.mask=K.layers.mask|6,b.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;const Re=K.parent,Ie=B.cameras;oe(B,Re);for(let Pe=0;Pe<Ie.length;Pe++)oe(Ie[Pe],Re);Ie.length===2?Z(B,b,R):B.projectionMatrix.copy(b.projectionMatrix),de(K,B,Re)};function de(K,fe,ae){ae===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(K){return h[K]};let ze=null;function We(K,fe){if(f=fe.getViewerPose(c||o),v=fe,f!==null){const ae=f.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Re=!1;ae.length!==B.cameras.length&&(B.cameras.length=0,Re=!0);for(let je=0;je<ae.length;je++){const nt=ae[je];let ft=null;if(p!==null)ft=p.getViewport(nt);else{const Ut=d.getViewSubImage(u,nt);ft=Ut.viewport,je===0&&(e.setRenderTargetTextures(M,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(M))}let Ge=P[je];Ge===void 0&&(Ge=new Hn,Ge.layers.enable(je),Ge.viewport=new Dt,P[je]=Ge),Ge.matrix.fromArray(nt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(nt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ft.x,ft.y,ft.width,ft.height),je===0&&(B.matrix.copy(Ge.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Re===!0&&B.cameras.push(Ge)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const je=d.getDepthInformation(ae[0]);je&&je.isValid&&je.texture&&g.init(je,r.renderState)}if(Ie&&Ie.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let je=0;je<ae.length;je++){const nt=ae[je].camera;if(nt){let ft=h[nt];ft||(ft=new CM,h[nt]=ft);const Ge=d.getCameraImage(nt);ft.sourceTexture=Ge}}}}for(let ae=0;ae<w.length;ae++){const Re=T[ae],Ie=w[ae];Re!==null&&Ie!==void 0&&Ie.update(Re,fe,c||o)}ze&&ze(K,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),v=null}const Le=new DM;Le.setAnimationLoop(We),this.setAnimationLoop=function(K){ze=K},this.dispose=function(){}}}const pN=new Lt,BM=new Ue;BM.set(-1,0,0,0,1,0,0,0,1);function mN(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,bM(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,m,x,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),u(g,h),h.isMeshPhysicalMaterial&&p(g,h,M)):h.isMeshMatcapMaterial?(s(g,h),v(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,m,x):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===un&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===un&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const m=e.get(h),x=m.envMap,M=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(pN.makeRotationFromEuler(M)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(BM),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const m=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const M=x.program;i.uniformBlockBinding(m,M)}function c(m,x){let M=r[m.id];M===void 0&&(v(m),M=f(m),r[m.id]=M,m.addEventListener("dispose",g));const w=x.program;i.updateUBOMapping(m,w);const T=e.render.frame;s[m.id]!==T&&(u(m),s[m.id]=T)}function f(m){const x=d();m.__bindingPointIndex=x;const M=t.createBuffer(),w=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const x=r[m.id],M=m.uniforms,w=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,C=M.length;T<C;T++){const _=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,R=_.length;b<R;b++){const P=_[b];if(p(P,T,b,w)===!0){const B=P.__offset,j=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let N=0;N<j.length;N++){const W=j[N],U=y(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,B+q,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):ArrayBuffer.isView(W)?P.__data.set(new W.constructor(W.buffer,W.byteOffset,P.__data.length)):(W.toArray(P.__data,q),q+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,M,w){const T=m.value,C=x+"_"+M;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:ArrayBuffer.isView(T)?w[C]=T.slice():w[C]=T.clone(),!0;{const _=w[C];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return w[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function v(m){const x=m.uniforms;let M=0;const w=16;for(let C=0,_=x.length;C<_;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let R=0,P=b.length;R<P;R++){const B=b[R],j=Array.isArray(B.value)?B.value:[B.value];for(let q=0,N=j.length;q<N;q++){const W=j[q],U=y(W),F=M%w,X=F%U.boundary,Z=F+X;M+=X,Z!==0&&w-Z<U.storage&&(M+=w-Z),B.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=U.storage}}}const T=M%w;return T>0&&(M+=w-T),m.__size=M,m.__cache={},this}function y(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):De("WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){const x=m.target;x.removeEventListener("dispose",g);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const vN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function xN(){return di===null&&(di=new lP(vN,16,16,ls,$i),di.name="DFG_LUT",di.minFilter=sn,di.magFilter=sn,di.wrapS=Bi,di.wrapT=Bi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class _N{constructor(e={}){const{canvas:n=kR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Wn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const y=p,g=new Set([Mm,Sm,ym]),h=new Set([Wn,Ti,La,Na,xm,_m]),m=new Uint32Array(4),x=new Int32Array(4),M=new V;let w=null,T=null;const C=[],_=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,B=null;this._outputColorSpace=Vn;let j=0,q=0,N=null,W=-1,U=null;const F=new Dt,X=new Dt;let Z=null;const oe=new $e(0);let de=0,ze=n.width,We=n.height,Le=1,K=null,fe=null;const ae=new Dt(0,0,ze,We),Re=new Dt(0,0,ze,We);let Ie=!1;const Pe=new EM;let gt=!1,je=!1;const nt=new Lt,ft=new V,Ge=new Dt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Mn(){return N===null?Le:1}let L=i;function Ft(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gm}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),L===null){const I="webgl2";if(L=Ft(I,E),L===null)throw Ft(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ze("WebGLRenderer: "+E.message),E}let Xe,lt,he,Mt,A,S,k,Q,te,ie,ue,Y,J,ve,ye,le,re,Ne,Be,Je,D,se,$;function xe(){Xe=new xD(L),Xe.init(),D=new cN(L,Xe),lt=new uD(L,Xe,e,D),he=new aN(L,Xe),lt.reversedDepthBuffer&&u&&he.buffers.depth.setReversed(!0),Mt=new SD(L),A=new YL,S=new lN(L,Xe,he,A,lt,D,Mt),k=new vD(R),Q=new wP(L),se=new lD(L,Q),te=new _D(L,Q,Mt,se),ie=new ED(L,te,Q,se,Mt),Ne=new MD(L,lt,S),ye=new fD(A),ue=new XL(R,k,Xe,lt,se,ye),Y=new mN(R,A),J=new $L,ve=new tN(Xe),re=new aD(R,k,he,ie,v,l),le=new oN(R,ie,lt),$=new gN(L,Mt,lt,he),Be=new cD(L,Xe,Mt),Je=new yD(L,Xe,Mt),Mt.programs=ue.programs,R.capabilities=lt,R.extensions=Xe,R.properties=A,R.renderLists=J,R.shadowMap=le,R.state=he,R.info=Mt}xe(),y!==Wn&&(b=new wD(y,n.width,n.height,r,s));const ce=new hN(R,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(E){E!==void 0&&(Le=E,this.setSize(ze,We,!1))},this.getSize=function(E){return E.set(ze,We)},this.setSize=function(E,I,H=!0){if(ce.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=E,We=I,n.width=Math.floor(E*Le),n.height=Math.floor(I*Le),H===!0&&(n.style.width=E+"px",n.style.height=I+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(ze*Le,We*Le).floor()},this.setDrawingBufferSize=function(E,I,H){ze=E,We=I,Le=H,n.width=Math.floor(E*H),n.height=Math.floor(I*H),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(y===Wn){Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){De("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(F)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,I,H,z){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,I,H,z),he.viewport(F.copy(ae).multiplyScalar(Le).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,I,H,z){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,I,H,z),he.scissor(X.copy(Re).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(E){he.setScissorTest(Ie=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,H=!0){let z=0;if(E){let G=!1;if(N!==null){const ge=N.texture.format;G=g.has(ge)}if(G){const ge=N.texture.type,Se=h.has(ge),me=re.getClearColor(),Ee=re.getClearAlpha(),we=me.r,Oe=me.g,Ve=me.b;Se?(m[0]=we,m[1]=Oe,m[2]=Ve,m[3]=Ee,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=we,x[1]=Oe,x[2]=Ve,x[3]=Ee,L.clearBufferiv(L.COLOR,0,x))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),re.dispose(),J.dispose(),ve.dispose(),A.dispose(),k.dispose(),ie.dispose(),se.dispose(),$.dispose(),ue.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Im),ce.removeEventListener("sessionend",Um),Ir.stop()};function ee(E){E.preventDefault(),Sv("WebGLRenderer: Context Lost."),P=!0}function Te(){Sv("WebGLRenderer: Context Restored."),P=!1;const E=Mt.autoReset,I=le.enabled,H=le.autoUpdate,z=le.needsUpdate,G=le.type;xe(),Mt.autoReset=E,le.enabled=I,le.autoUpdate=H,le.needsUpdate=z,le.type=G}function Fe(E){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function At(E){const I=E.target;I.removeEventListener("dispose",At),it(I)}function it(E){Ci(E),A.remove(E)}function Ci(E){const I=A.get(E).programs;I!==void 0&&(I.forEach(function(H){ue.releaseProgram(H)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,H,z,G,ge){I===null&&(I=Ut);const Se=G.isMesh&&G.matrixWorld.determinant()<0,me=zM(E,I,H,z,G);he.setMaterial(z,Se);let Ee=H.index,we=1;if(z.wireframe===!0){if(Ee=te.getWireframeAttribute(H),Ee===void 0)return;we=2}const Oe=H.drawRange,Ve=H.attributes.position;let Ce=Oe.start*we,rt=(Oe.start+Oe.count)*we;ge!==null&&(Ce=Math.max(Ce,ge.start*we),rt=Math.min(rt,(ge.start+ge.count)*we)),Ee!==null?(Ce=Math.max(Ce,0),rt=Math.min(rt,Ee.count)):Ve!=null&&(Ce=Math.max(Ce,0),rt=Math.min(rt,Ve.count));const Ct=rt-Ce;if(Ct<0||Ct===1/0)return;se.setup(G,z,me,H,Ee);let Et,ot=Be;if(Ee!==null&&(Et=Q.get(Ee),ot=Je,ot.setIndex(Et)),G.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*Mn()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(G.isLine){let Kt=z.linewidth;Kt===void 0&&(Kt=1),he.setLineWidth(Kt*Mn()),G.isLineSegments?ot.setMode(L.LINES):G.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else G.isPoints?ot.setMode(L.POINTS):G.isSprite&&ot.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Kt=G._multiDrawStarts,_e=G._multiDrawCounts,En=G._multiDrawCount,Ke=Ee?Q.get(Ee).bytesPerElement:1,Fn=A.get(z).currentProgram.getUniforms();for(let ci=0;ci<En;ci++)Fn.setValue(L,"_gl_DrawID",ci),ot.render(Kt[ci]/Ke,_e[ci])}else if(G.isInstancedMesh)ot.renderInstances(Ce,Ct,G.count);else if(H.isInstancedBufferGeometry){const Kt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_e=Math.min(H.instanceCount,Kt);ot.renderInstances(Ce,Ct,_e)}else ot.render(Ce,Ct)};function li(E,I,H){E.transparent===!0&&E.side===Ui&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,qa(E,I,H),E.side=Rr,E.needsUpdate=!0,qa(E,I,H),E.side=Ui):qa(E,I,H)}this.compile=function(E,I,H=null){H===null&&(H=E),T=ve.get(H),T.init(I),_.push(T),H.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),E!==H&&E.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const z=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ge=G.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const me=ge[Se];li(me,H,G),z.add(me)}else li(ge,H,G),z.add(ge)}),T=_.pop(),z},this.compileAsync=function(E,I,H=null){const z=this.compile(E,I,H);return new Promise(G=>{function ge(){if(z.forEach(function(Se){A.get(Se).currentProgram.isReady()&&z.delete(Se)}),z.size===0){G(E);return}setTimeout(ge,10)}Xe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let yu=null;function kM(E){yu&&yu(E)}function Im(){Ir.stop()}function Um(){Ir.start()}const Ir=new DM;Ir.setAnimationLoop(kM),typeof self<"u"&&Ir.setContext(self),this.setAnimationLoop=function(E){yu=E,ce.setAnimationLoop(E),E===null?Ir.stop():Ir.start()},ce.addEventListener("sessionstart",Im),ce.addEventListener("sessionend",Um),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;B!==null&&B.renderStart(E,I);const H=ce.enabled===!0&&ce.isPresenting===!0,z=b!==null&&(N===null||H)&&b.begin(R,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(I),I=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,I,N),T=ve.get(E,_.length),T.init(I),T.state.textureUnits=S.getTextureUnits(),_.push(T),nt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Pe.setFromProjectionMatrix(nt,vi,I.reversedDepth),je=this.localClippingEnabled,gt=ye.init(this.clippingPlanes,je),w=J.get(E,C.length),w.init(),C.push(w),ce.enabled===!0&&ce.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&Su(Se,I,-1/0,R.sortObjects)}Su(E,I,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(K,fe),vt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,vt&&re.addToRenderList(w,E),this.info.render.frame++,gt===!0&&ye.beginShadows();const G=T.state.shadowsArray;if(le.render(G,E,I),gt===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&b.hasRenderPass())===!1){const Se=w.opaque,me=w.transmissive;if(T.setupLights(),I.isArrayCamera){const Ee=I.cameras;if(me.length>0)for(let we=0,Oe=Ee.length;we<Oe;we++){const Ve=Ee[we];Om(Se,me,E,Ve)}vt&&re.render(E);for(let we=0,Oe=Ee.length;we<Oe;we++){const Ve=Ee[we];Fm(w,E,Ve,Ve.viewport)}}else me.length>0&&Om(Se,me,E,I),vt&&re.render(E),Fm(w,E,I)}N!==null&&q===0&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),z&&b.end(R),E.isScene===!0&&E.onAfterRender(R,E,I),se.resetDefaultState(),W=-1,U=null,_.pop(),_.length>0?(T=_[_.length-1],S.setTextureUnits(T.state.textureUnits),gt===!0&&ye.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,B!==null&&B.renderEnd()};function Su(E,I,H,z){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){z&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(nt);const Se=ie.update(E),me=E.material;me.visible&&w.push(E,Se,me,H,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const Se=ie.update(E),me=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ge.copy(Se.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(nt)),Array.isArray(me)){const Ee=Se.groups;for(let we=0,Oe=Ee.length;we<Oe;we++){const Ve=Ee[we],Ce=me[Ve.materialIndex];Ce&&Ce.visible&&w.push(E,Se,Ce,H,Ge.z,Ve)}}else me.visible&&w.push(E,Se,me,H,Ge.z,null)}}const ge=E.children;for(let Se=0,me=ge.length;Se<me;Se++)Su(ge[Se],I,H,z)}function Fm(E,I,H,z){const{opaque:G,transmissive:ge,transparent:Se}=E;T.setupLightsView(H),gt===!0&&ye.setGlobalState(R.clippingPlanes,H),z&&he.viewport(F.copy(z)),G.length>0&&Ya(G,I,H),ge.length>0&&Ya(ge,I,H),Se.length>0&&Ya(Se,I,H),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Om(E,I,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const Ce=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Ei(1,1,{generateMipmaps:!0,type:Ce?$i:Wn,minFilter:Zr,samples:Math.max(4,lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ge=T.state.transmissionRenderTarget[z.id],Se=z.viewport||F;ge.setSize(Se.z*R.transmissionResolutionScale,Se.w*R.transmissionResolutionScale);const me=R.getRenderTarget(),Ee=R.getActiveCubeFace(),we=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(oe),de=R.getClearAlpha(),de<1&&R.setClearColor(16777215,.5),R.clear(),vt&&re.render(H);const Oe=R.toneMapping;R.toneMapping=Mi;const Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),gt===!0&&ye.setGlobalState(R.clippingPlanes,z),Ya(E,H,z),S.updateMultisampleRenderTarget(ge),S.updateRenderTargetMipmap(ge),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let rt=0,Ct=I.length;rt<Ct;rt++){const Et=I[rt],{object:ot,geometry:Kt,material:_e,group:En}=Et;if(_e.side===Ui&&ot.layers.test(z.layers)){const Ke=_e.side;_e.side=un,_e.needsUpdate=!0,Bm(ot,H,z,Kt,_e,En),_e.side=Ke,_e.needsUpdate=!0,Ce=!0}}Ce===!0&&(S.updateMultisampleRenderTarget(ge),S.updateRenderTargetMipmap(ge))}R.setRenderTarget(me,Ee,we),R.setClearColor(oe,de),Ve!==void 0&&(z.viewport=Ve),R.toneMapping=Oe}function Ya(E,I,H){const z=I.isScene===!0?I.overrideMaterial:null;for(let G=0,ge=E.length;G<ge;G++){const Se=E[G],{object:me,geometry:Ee,group:we}=Se;let Oe=Se.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),me.layers.test(H.layers)&&Bm(me,I,H,Ee,Oe,we)}}function Bm(E,I,H,z,G,ge){E.onBeforeRender(R,I,H,z,G,ge),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(R,I,H,z,E,ge),G.transparent===!0&&G.side===Ui&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,R.renderBufferDirect(H,I,z,G,E,ge),G.side=Rr,G.needsUpdate=!0,R.renderBufferDirect(H,I,z,G,E,ge),G.side=Ui):R.renderBufferDirect(H,I,z,G,E,ge),E.onAfterRender(R,I,H,z,G,ge)}function qa(E,I,H){I.isScene!==!0&&(I=Ut);const z=A.get(E),G=T.state.lights,ge=T.state.shadowsArray,Se=G.state.version,me=ue.getParameters(E,G.state,ge,I,H,T.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(me);let we=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const Oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=k.get(E.envMap||z.environment,Oe),z.envMapRotation=z.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",At),we=new Map,z.programs=we);let Ve=we.get(Ee);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===Se)return Vm(E,me),Ve}else me.uniforms=ue.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,H,me),E.onBeforeCompile(me,R),Ve=ue.acquireProgram(me,Ee),we.set(Ee,Ve),z.uniforms=me.uniforms;const Ce=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=ye.uniform),Vm(E,me),z.needsLights=HM(E),z.lightsStateVersion=Se,z.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function km(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=lc.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Vm(E,I){const H=A.get(E);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function VM(E,I){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let H=0,z=E.length;H<z;H++){const G=E[H];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function zM(E,I,H,z,G){I.isScene!==!0&&(I=Ut),S.resetTextureUnits();const ge=I.fog,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,me=N===null?R.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ye.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=k.get(z.envMap||Se,Ee),Oe=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ve=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!H.morphAttributes.position,rt=!!H.morphAttributes.normal,Ct=!!H.morphAttributes.color;let Et=Mi;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Et=R.toneMapping);const ot=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Kt=ot!==void 0?ot.length:0,_e=A.get(z),En=T.state.lights;if(gt===!0&&(je===!0||E!==U)){const ct=E===U&&z.id===W;ye.setState(z,E,ct)}let Ke=!1;z.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==En.state.version||_e.outputColorSpace!==me||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==we||z.fog===!0&&_e.fog!==ge||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ye.numPlanes||_e.numIntersection!==ye.numIntersection)||_e.vertexAlphas!==Oe||_e.vertexTangents!==Ve||_e.morphTargets!==Ce||_e.morphNormals!==rt||_e.morphColors!==Ct||_e.toneMapping!==Et||_e.morphTargetsCount!==Kt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,_e.__version=z.version);let Fn=_e.currentProgram;Ke===!0&&(Fn=qa(z,I,G),B&&z.isNodeMaterial&&B.onUpdateProgram(z,Fn,_e));let ci=!1,Qi=!1,ps=!1;const at=Fn.getUniforms(),bt=_e.uniforms;if(he.useProgram(Fn.program)&&(ci=!0,Qi=!0,ps=!0),z.id!==W&&(W=z.id,Qi=!0),_e.needsLights){const ct=VM(T.state.lightProbeGridArray,G);_e.lightProbeGrid!==ct&&(_e.lightProbeGrid=ct,Qi=!0)}if(ci||U!==E){he.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(L,"projectionMatrix",E.projectionMatrix),at.setValue(L,"viewMatrix",E.matrixWorldInverse);const er=at.map.cameraPosition;er!==void 0&&er.setValue(L,ft.setFromMatrixPosition(E.matrixWorld)),lt.logarithmicDepthBuffer&&at.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,Qi=!0,ps=!0)}if(_e.needsLights&&(En.state.directionalShadowMap.length>0&&at.setValue(L,"directionalShadowMap",En.state.directionalShadowMap,S),En.state.spotShadowMap.length>0&&at.setValue(L,"spotShadowMap",En.state.spotShadowMap,S),En.state.pointShadowMap.length>0&&at.setValue(L,"pointShadowMap",En.state.pointShadowMap,S)),G.isSkinnedMesh){at.setOptional(L,G,"bindMatrix"),at.setOptional(L,G,"bindMatrixInverse");const ct=G.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),at.setValue(L,"boneTexture",ct.boneTexture,S))}G.isBatchedMesh&&(at.setOptional(L,G,"batchingTexture"),at.setValue(L,"batchingTexture",G._matricesTexture,S),at.setOptional(L,G,"batchingIdTexture"),at.setValue(L,"batchingIdTexture",G._indirectTexture,S),at.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(L,"batchingColorTexture",G._colorsTexture,S));const Ji=H.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Ne.update(G,H,Fn),(Qi||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,at.setValue(L,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(bt.envMapIntensity.value=I.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=xN()),Qi){if(at.setValue(L,"toneMappingExposure",R.toneMappingExposure),_e.needsLights&&GM(bt,ps),ge&&z.fog===!0&&Y.refreshFogUniforms(bt,ge),Y.refreshMaterialUniforms(bt,z,Le,We,T.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){const ct=_e.lightProbeGrid;bt.probesSH.value=ct.texture,bt.probesMin.value.copy(ct.boundingBox.min),bt.probesMax.value.copy(ct.boundingBox.max),bt.probesResolution.value.copy(ct.resolution)}lc.upload(L,km(_e),bt,S)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(lc.upload(L,km(_e),bt,S),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(L,"center",G.center),at.setValue(L,"modelViewMatrix",G.modelViewMatrix),at.setValue(L,"normalMatrix",G.normalMatrix),at.setValue(L,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const ct=z.uniformsGroups;for(let er=0,ms=ct.length;er<ms;er++){const zm=ct[er];$.update(zm,Fn),$.bind(zm,Fn)}}return Fn}function GM(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function HM(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,I,H){const z=A.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),A.get(E.texture).__webglTexture=I,A.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const H=A.get(E);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};const WM=L.createFramebuffer();this.setRenderTarget=function(E,I=0,H=0){N=E,j=I,q=H;let z=null,G=!1,ge=!1;if(E){const me=A.get(E);if(me.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(L.FRAMEBUFFER,me.__webglFramebuffer),F.copy(E.viewport),X.copy(E.scissor),Z=E.scissorTest,he.viewport(F),he.scissor(X),he.setScissorTest(Z),W=-1;return}else if(me.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(me.__hasExternalTextures)S.rebindTextures(E,A.get(E.texture).__webglTexture,A.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(me.__boundDepthTexture!==Oe){if(Oe!==null&&A.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const we=A.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[I])?z=we[I][H]:z=we[I],G=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?z=A.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[H]:z=we,F.copy(E.viewport),X.copy(E.scissor),Z=E.scissorTest}else F.copy(ae).multiplyScalar(Le).floor(),X.copy(Re).multiplyScalar(Le).floor(),Z=Ie;if(H!==0&&(z=WM),he.bindFramebuffer(L.FRAMEBUFFER,z)&&he.drawBuffers(E,z),he.viewport(F),he.scissor(X),he.setScissorTest(Z),G){const me=A.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,H)}else if(ge){const me=I;for(let Ee=0;Ee<E.textures.length;Ee++){const we=A.get(E.textures[Ee]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ee,we.__webglTexture,H,me)}}else if(E!==null&&H!==0){const me=A.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,H)}W=-1},this.readRenderTargetPixels=function(E,I,H,z,G,ge,Se,me=0){if(!(E&&E.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){he.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const we=E.textures[me],Oe=we.format,Ve=we.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me),!lt.textureFormatReadable(Oe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ve)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-z&&H>=0&&H<=E.height-G&&L.readPixels(I,H,z,G,D.convert(Oe),D.convert(Ve),ge)}finally{const we=N!==null?A.get(N).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,I,H,z,G,ge,Se,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(I>=0&&I<=E.width-z&&H>=0&&H<=E.height-G){he.bindFramebuffer(L.FRAMEBUFFER,Ee);const we=E.textures[me],Oe=we.format,Ve=we.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+me),!lt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,ge.byteLength,L.STREAM_READ),L.readPixels(I,H,z,G,D.convert(Oe),D.convert(Ve),0);const rt=N!==null?A.get(N).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,rt);const Ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await VR(L,Ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ge),L.deleteBuffer(Ce),L.deleteSync(Ct),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,H=0){const z=Math.pow(2,-H),G=Math.floor(E.image.width*z),ge=Math.floor(E.image.height*z),Se=I!==null?I.x:0,me=I!==null?I.y:0;S.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,Se,me,G,ge),he.unbindTexture()};const jM=L.createFramebuffer(),XM=L.createFramebuffer();this.copyTextureToTexture=function(E,I,H=null,z=null,G=0,ge=0){let Se,me,Ee,we,Oe,Ve,Ce,rt,Ct;const Et=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(H!==null)Se=H.max.x-H.min.x,me=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Oe=H.min.y,Ve=H.isBox3?H.min.z:0;else{const bt=Math.pow(2,-G);Se=Math.floor(Et.width*bt),me=Math.floor(Et.height*bt),E.isDataArrayTexture?Ee=Et.depth:E.isData3DTexture?Ee=Math.floor(Et.depth*bt):Ee=1,we=0,Oe=0,Ve=0}z!==null?(Ce=z.x,rt=z.y,Ct=z.z):(Ce=0,rt=0,Ct=0);const ot=D.convert(I.format),Kt=D.convert(I.type);let _e;I.isData3DTexture?(S.setTexture3D(I,0),_e=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(S.setTexture2DArray(I,0),_e=L.TEXTURE_2D_ARRAY):(S.setTexture2D(I,0),_e=L.TEXTURE_2D),he.activeTexture(L.TEXTURE0),he.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),he.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),he.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const En=he.getParameter(L.UNPACK_ROW_LENGTH),Ke=he.getParameter(L.UNPACK_IMAGE_HEIGHT),Fn=he.getParameter(L.UNPACK_SKIP_PIXELS),ci=he.getParameter(L.UNPACK_SKIP_ROWS),Qi=he.getParameter(L.UNPACK_SKIP_IMAGES);he.pixelStorei(L.UNPACK_ROW_LENGTH,Et.width),he.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et.height),he.pixelStorei(L.UNPACK_SKIP_PIXELS,we),he.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),he.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);const ps=E.isDataArrayTexture||E.isData3DTexture,at=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const bt=A.get(E),Ji=A.get(I),ct=A.get(bt.__renderTarget),er=A.get(Ji.__renderTarget);he.bindFramebuffer(L.READ_FRAMEBUFFER,ct.__webglFramebuffer),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let ms=0;ms<Ee;ms++)ps&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(E).__webglTexture,G,Ve+ms),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(I).__webglTexture,ge,Ct+ms)),L.blitFramebuffer(we,Oe,Se,me,Ce,rt,Se,me,L.DEPTH_BUFFER_BIT,L.NEAREST);he.bindFramebuffer(L.READ_FRAMEBUFFER,null),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||A.has(E)){const bt=A.get(E),Ji=A.get(I);he.bindFramebuffer(L.READ_FRAMEBUFFER,jM),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,XM);for(let ct=0;ct<Ee;ct++)ps?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.__webglTexture,G,Ve+ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,G),at?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ji.__webglTexture,ge,Ct+ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ji.__webglTexture,ge),G!==0?L.blitFramebuffer(we,Oe,Se,me,Ce,rt,Se,me,L.COLOR_BUFFER_BIT,L.NEAREST):at?L.copyTexSubImage3D(_e,ge,Ce,rt,Ct+ct,we,Oe,Se,me):L.copyTexSubImage2D(_e,ge,Ce,rt,we,Oe,Se,me);he.bindFramebuffer(L.READ_FRAMEBUFFER,null),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(_e,ge,Ce,rt,Ct,Se,me,Ee,ot,Kt,Et.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(_e,ge,Ce,rt,Ct,Se,me,Ee,ot,Et.data):L.texSubImage3D(_e,ge,Ce,rt,Ct,Se,me,Ee,ot,Kt,Et):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ge,Ce,rt,Se,me,ot,Kt,Et.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ge,Ce,rt,Et.width,Et.height,ot,Et.data):L.texSubImage2D(L.TEXTURE_2D,ge,Ce,rt,Se,me,ot,Kt,Et);he.pixelStorei(L.UNPACK_ROW_LENGTH,En),he.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),he.pixelStorei(L.UNPACK_SKIP_PIXELS,Fn),he.pixelStorei(L.UNPACK_SKIP_ROWS,ci),he.pixelStorei(L.UNPACK_SKIP_IMAGES,Qi),ge===0&&I.generateMipmaps&&L.generateMipmap(_e),he.unbindTexture()},this.initRenderTarget=function(E){A.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){j=0,q=0,N=null,he.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}function yN(){const t=Ae.useRef(null);return Ae.useEffect(()=>{const e=t.current,n=window.innerWidth,i=window.innerHeight,r=new nP,s=new Hn(75,n/i,.1,2e3);s.position.z=600;const o=new _N({antialias:!0,alpha:!0});o.setSize(n,i),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setClearColor(0,0),e.appendChild(o.domElement);const a=1800,l=new Float32Array(a*3),c=new Float32Array(a),f=new Float32Array(a*3),d=[new $e(6333946),new $e(8490232),new $e(10980346),new $e(16777215),new $e(9684477)];for(let R=0;R<a;R++){l[R*3]=(Math.random()-.5)*2e3,l[R*3+1]=(Math.random()-.5)*8e3,l[R*3+2]=(Math.random()-.5)*1200,c[R]=Math.random()*2.5+.5;const P=d[Math.floor(Math.random()*d.length)];f[R*3]=P.r,f[R*3+1]=P.g,f[R*3+2]=P.b}const u=new Sn;u.setAttribute("position",new Pn(l,3)),u.setAttribute("size",new Pn(c,1)),u.setAttribute("color",new Pn(f,3));const p=new wM({size:2,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0}),v=new hP(u,p);r.add(v),[{pos:[-300,200,-400],color:1981066,size:300},{pos:[400,-150,-300],color:3223169,size:250},{pos:[0,-800,-500],color:1982639,size:350},{pos:[-500,-1600,-200],color:4988309,size:200},{pos:[300,-2400,-350],color:1920728,size:280},{pos:[-200,-3200,-300],color:3223169,size:320},{pos:[400,-4e3,-400],color:1981066,size:260}].forEach(({pos:R,color:P,size:B})=>{const j=new bm(B,16,16),q=new Cm({color:P,transparent:!0,opacity:.06,side:un}),N=new wi(j,q);N.position.set(...R),r.add(N)});const g=[],h=()=>{const R=[],P=(Math.random()-.5)*1600,B=(Math.random()-.5)*1200,j=(Math.random()-.5)*400,q=Math.random()*120+60,N=Math.PI*(.15+Math.random()*.2);R.push(new V(P,B,j)),R.push(new V(P+Math.cos(N)*q,B-Math.sin(N)*q,j));const W=new Sn().setFromPoints(R),U=new TM({color:9684477,transparent:!0,opacity:0}),F=new dP(W,U);return r.add(F),{line:F,mat:U,life:0,maxLife:Math.random()*60+40,vx:Math.cos(N)*8,vy:-Math.sin(N)*8}};for(let R=0;R<4;R++)g.push(h());const m={x:0,y:0},x={x:0,y:0},M=R=>{m.x=(R.clientX/window.innerWidth-.5)*2,m.y=-(R.clientY/window.innerHeight-.5)*2,x.y=m.x*.15,x.x=m.y*.1};window.addEventListener("mousemove",M);const w=()=>{const R=window.scrollY;s.position.y=-R*.8};window.addEventListener("scroll",w,{passive:!0});const T=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",T);let C,_=0;const b=()=>{C=requestAnimationFrame(b),_++,v.rotation.y+=(x.y-v.rotation.y)*.03,v.rotation.x+=(x.x-v.rotation.x)*.03,v.rotation.y+=15e-5,v.rotation.z+=8e-5,p.opacity=.85+Math.sin(_*.02)*.08,g.forEach((R,P)=>{R.life++;const B=R.life/R.maxLife;B<.3?R.mat.opacity=B/.3*.9:B>.7?R.mat.opacity=(1-B)/.3*.9:R.mat.opacity=.9;const j=R.line.geometry.attributes.position;j.array[0]+=R.vx,j.array[1]+=R.vy,j.array[3]+=R.vx,j.array[4]+=R.vy,j.needsUpdate=!0,R.life>=R.maxLife&&(r.remove(R.line),g[P]=h(),g[P].life=-Math.floor(Math.random()*120))}),o.render(r,s)};return b(),()=>{cancelAnimationFrame(C),window.removeEventListener("mousemove",M),window.removeEventListener("scroll",w),window.removeEventListener("resize",T),o.dispose(),e.contains(o.domElement)&&e.removeChild(o.domElement)}},[]),O.jsx("div",{ref:t,className:"fixed inset-0 z-0 pointer-events-none"})}function SN(){return O.jsxs("div",{className:"min-h-screen",children:[O.jsx(yN,{}),O.jsx(sR,{}),O.jsx(S1,{}),O.jsx(Yb,{}),O.jsx($b,{}),O.jsx(Zb,{}),O.jsx(Jb,{}),O.jsx(tR,{}),O.jsx(iR,{}),O.jsx(rR,{})]})}Hf.createRoot(document.getElementById("root")).render(O.jsx(cE.StrictMode,{children:O.jsx(SN,{})}));
