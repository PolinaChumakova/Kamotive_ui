(function(R,S){typeof exports=="object"&&typeof module<"u"?S(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],S):(R=typeof globalThis<"u"?globalThis:R||self,S(R.MyUILibrary={},R.React))})(this,function(R,S){"use strict";var $={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function je(){if(re)return x;re=1;var D=S,_=Symbol.for("react.element"),F=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,L=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function A(E,c,C){var p,h={},m=null,U=null;C!==void 0&&(m=""+C),c.key!==void 0&&(m=""+c.key),c.ref!==void 0&&(U=c.ref);for(p in c)b.call(c,p)&&!M.hasOwnProperty(p)&&(h[p]=c[p]);if(E&&E.defaultProps)for(p in c=E.defaultProps,c)h[p]===void 0&&(h[p]=c[p]);return{$$typeof:_,type:E,key:m,ref:U,props:h,_owner:L.current}}return x.Fragment=F,x.jsx=A,x.jsxs=A,x}var k={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function xe(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var D=S,_=Symbol.for("react.element"),F=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),E=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),ae=Symbol.iterator,Ie="@@iterator";function We(e){if(e===null||typeof e!="object")return null;var r=ae&&e[ae]||e[Ie];return typeof r=="function"?r:null}var P=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function l(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ye("error",e,t)}}function Ye(e,r,t){{var n=P.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var $e=!1,Le=!1,Me=!1,Ue=!1,Ve=!1,ie;ie=Symbol.for("react.module.reference");function Ne(e){return!!(typeof e=="string"||typeof e=="function"||e===b||e===M||Ve||e===L||e===C||e===p||Ue||e===U||$e||Le||Me||typeof e=="object"&&e!==null&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===A||e.$$typeof===E||e.$$typeof===c||e.$$typeof===ie||e.getModuleId!==void 0))}function Je(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function oe(e){return e.displayName||"Context"}function g(e){if(e==null)return null;if(typeof e.tag=="number"&&l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case F:return"Portal";case M:return"Profiler";case L:return"StrictMode";case C:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E:var r=e;return oe(r)+".Consumer";case A:var t=e;return oe(t._context)+".Provider";case c:return Je(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:g(e.type)||"Memo";case m:{var o=e,u=o._payload,i=o._init;try{return g(i(u))}catch{return null}}}return null}var T=Object.assign,I=0,ue,se,fe,le,ce,de,ve;function pe(){}pe.__reactDisabledLog=!0;function qe(){{if(I===0){ue=console.log,se=console.info,fe=console.warn,le=console.error,ce=console.group,de=console.groupCollapsed,ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}}function Be(){{if(I--,I===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:ue}),info:T({},e,{value:se}),warn:T({},e,{value:fe}),error:T({},e,{value:le}),group:T({},e,{value:ce}),groupCollapsed:T({},e,{value:de}),groupEnd:T({},e,{value:ve})})}I<0&&l("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var B=P.ReactCurrentDispatcher,K;function V(e,r,t){{if(K===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);K=n&&n[1]||""}return`
`+K+e}}var G=!1,N;{var Ke=typeof WeakMap=="function"?WeakMap:Map;N=new Ke}function ye(e,r){if(!e||G)return"";{var t=N.get(e);if(t!==void 0)return t}var n;G=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=B.current,B.current=null,qe();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(v){n=v}Reflect.construct(e,[],i)}else{try{i.call()}catch(v){n=v}e.call(i.prototype)}}else{try{throw Error()}catch(v){n=v}e()}}catch(v){if(v&&n&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var y=`
`+a[s].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,y),y}while(s>=1&&f>=0);break}}}finally{G=!1,B.current=u,Be(),Error.prepareStackTrace=o}var j=e?e.displayName||e.name:"",O=j?V(j):"";return typeof e=="function"&&N.set(e,O),O}function Ge(e,r,t){return ye(e,!1)}function ze(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function J(e,r,t){if(e==null)return"";if(typeof e=="function")return ye(e,ze(e));if(typeof e=="string")return V(e);switch(e){case C:return V("Suspense");case p:return V("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Ge(e.render);case h:return J(e.type,r,t);case m:{var n=e,o=n._payload,u=n._init;try{return J(u(o),r,t)}catch{}}}return""}var W=Object.prototype.hasOwnProperty,ge={},he=P.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,t=J(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}function Xe(e,r,t,n,o){{var u=Function.call.bind(W);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var d=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(q(o),l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),q(null)),a instanceof Error&&!(a.message in ge)&&(ge[a.message]=!0,q(o),l("Failed %s type: %s",t,a.message),q(null))}}}var He=Array.isArray;function z(e){return He(e)}function Ze(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Qe(e){try{return be(e),!1}catch{return!0}}function be(e){return""+e}function Re(e){if(Qe(e))return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ze(e)),be(e)}var Y=P.ReactCurrentOwner,er={key:!0,ref:!0,__self:!0,__source:!0},_e,Ee,X;X={};function rr(e){if(W.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function tr(e){if(W.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function nr(e,r){if(typeof e.ref=="string"&&Y.current&&r&&Y.current.stateNode!==r){var t=g(Y.current.type);X[t]||(l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',g(Y.current.type),e.ref),X[t]=!0)}}function ar(e,r){{var t=function(){_e||(_e=!0,l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ir(e,r){{var t=function(){Ee||(Ee=!0,l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var or=function(e,r,t,n,o,u,i){var a={$$typeof:_,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ur(e,r,t,n,o){{var u,i={},a=null,d=null;t!==void 0&&(Re(t),a=""+t),tr(r)&&(Re(r.key),a=""+r.key),rr(r)&&(d=r.ref,nr(r,o));for(u in r)W.call(r,u)&&!er.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&ar(i,f),d&&ir(i,f)}return or(e,a,d,o,n,Y.current,i)}}var H=P.ReactCurrentOwner,me=P.ReactDebugCurrentFrame;function w(e){if(e){var r=e._owner,t=J(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===_}function Te(){{if(H.current){var e=g(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function sr(e){return""}var Oe={};function fr(e){{var r=Te();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Se(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=fr(r);if(Oe[t])return;Oe[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+g(e._owner.type)+"."),w(e),l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),w(null)}}function Ce(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&Se(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var o=We(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)Q(i.value)&&Se(i.value,r)}}}function lr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=g(r);Xe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var o=g(r);l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function cr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){w(e),l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),w(null);break}}e.ref!==null&&(w(e),l("Invalid attribute `ref` supplied to `React.Fragment`."),w(null))}}var Pe={};function we(e,r,t,n,o,u){{var i=Ne(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=sr();d?a+=d:a+=Te();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===_?(s="<"+(g(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=ur(e,r,t,o,u);if(f==null)return f;if(i){var y=r.children;if(y!==void 0)if(n)if(z(y)){for(var j=0;j<y.length;j++)Ce(y[j],e);Object.freeze&&Object.freeze(y)}else l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ce(y,e)}if(W.call(r,"key")){var O=g(e),v=Object.keys(r).filter(function(hr){return hr!=="key"}),ee=v.length>0?"{key: someKey, "+v.join(": ..., ")+": ...}":"{key: someKey}";if(!Pe[O+ee]){var gr=v.length>0?"{"+v.join(": ..., ")+": ...}":"{}";l(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ee,O,gr,O),Pe[O+ee]=!0}}return e===b?cr(f):lr(f),f}}function dr(e,r,t){return we(e,r,t,!0)}function vr(e,r,t){return we(e,r,t,!1)}var pr=vr,yr=dr;k.Fragment=b,k.jsx=pr,k.jsxs=yr}()),k}var ne;function ke(){return ne||(ne=1,process.env.NODE_ENV==="production"?$.exports=je():$.exports=xe()),$.exports}var De=ke();const Fe={input:"_input_k98d0_1"},Ae=({value:D,onChange:_,placeholder:F})=>De.jsx("input",{className:Fe.input,value:D,onChange:b=>_(b.target.value),placeholder:F});R.Input=Ae,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"})});