parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"awqi":[function(require,module,exports) {
"use strict";var e=require("object-assign"),r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.forward_ref"):60112,s=r?Symbol.for("react.suspense"):60113,a=r?Symbol.for("react.memo"):60115,p=r?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||v}function x(){}function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||v}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var S=b.prototype=new x;S.constructor=b,e(S,m.prototype),S.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,$={key:!0,ref:!0,__self:!0,__source:!0};function g(e,r,n){var o,u={},f=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(f=""+r.key),r)k.call(r,o)&&!$.hasOwnProperty(o)&&(u[o]=r[o]);var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];u.children=i}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===u[o]&&(u[o]=l[o]);return{$$typeof:t,type:e,key:f,ref:c,props:u,_owner:_.current}}function w(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function E(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return r[e]})}var R=/\/+/g,P=[];function j(e,r,t,n){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function O(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function A(e,r,o,u){var f=typeof e;"undefined"!==f&&"boolean"!==f||(e=null);var c=!1;if(null===e)c=!0;else switch(f){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case n:c=!0}}if(c)return o(u,e,""===r?"."+U(e,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var i=r+U(f=e[l],l);c+=A(f,i,o,u)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=y&&e[y]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),l=0;!(f=e.next()).done;)c+=A(f=f.value,i=r+U(f,l++),o,u);else if("object"===f)throw o=""+e,Error(d(31,"[object Object]"===o?"object with keys {"+Object.keys(e).join(", ")+"}":o,""));return c}function I(e,r,t){return null==e?0:A(e,"",r,t)}function U(e,r){return"object"==typeof e&&null!==e&&null!=e.key?E(e.key):r.toString(36)}function q(e,r){e.func.call(e.context,r,e.count++)}function F(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?L(e,n,t,function(e){return e}):null!=e&&(C(e)&&(e=w(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+t)),n.push(e))}function L(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(R,"$&/")+"/"),I(e,F,r=j(r,u,n,o)),O(r)}var M={current:null};function D(){var e=M.current;if(null===e)throw Error(d(321));return e}var V={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:e};exports.Children={map:function(e,r,t){if(null==e)return e;var n=[];return L(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;I(e,q,r=j(null,null,r,t)),O(r)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var r=[];return L(e,r,null,function(e){return e}),r},only:function(e){if(!C(e))throw Error(d(143));return e}},exports.Component=m,exports.Fragment=o,exports.Profiler=f,exports.PureComponent=b,exports.StrictMode=u,exports.Suspense=s,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,exports.cloneElement=function(r,n,o){if(null==r)throw Error(d(267,r));var u=e({},r.props),f=r.key,c=r.ref,l=r._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,l=_.current),void 0!==n.key&&(f=""+n.key),r.type&&r.type.defaultProps)var i=r.type.defaultProps;for(s in n)k.call(n,s)&&!$.hasOwnProperty(s)&&(u[s]=void 0===n[s]&&void 0!==i?i[s]:n[s])}var s=arguments.length-2;if(1===s)u.children=o;else if(1<s){i=Array(s);for(var a=0;a<s;a++)i[a]=arguments[a+2];u.children=i}return{$$typeof:t,type:r.type,key:f,ref:c,props:u,_owner:l}},exports.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:l,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},exports.createElement=g,exports.createFactory=function(e){var r=g.bind(null,e);return r.type=e,r},exports.createRef=function(){return{current:null}},exports.forwardRef=function(e){return{$$typeof:i,render:e}},exports.isValidElement=C,exports.lazy=function(e){return{$$typeof:p,_ctor:e,_status:-1,_result:null}},exports.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},exports.useCallback=function(e,r){return D().useCallback(e,r)},exports.useContext=function(e,r){return D().useContext(e,r)},exports.useDebugValue=function(){},exports.useEffect=function(e,r){return D().useEffect(e,r)},exports.useImperativeHandle=function(e,r,t){return D().useImperativeHandle(e,r,t)},exports.useLayoutEffect=function(e,r){return D().useLayoutEffect(e,r)},exports.useMemo=function(e,r){return D().useMemo(e,r)},exports.useReducer=function(e,r,t){return D().useReducer(e,r,t)},exports.useRef=function(e){return D().useRef(e)},exports.useState=function(e){return D().useState(e)},exports.version="16.13.1";
},{"object-assign":"J4Nk"}],"n8MK":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"Asjh":[function(require,module,exports) {
"use strict";var _="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=_;
},{}],"wVGV":[function(require,module,exports) {
"use strict";var e=require("./lib/ReactPropTypesSecret");function r(){}function t(){}t.resetWarningCache=r,module.exports=function(){function n(r,t,n,o,a,p){if(p!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return n}n.isRequired=n;var a={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:r};return a.PropTypes=a,a};
},{"./lib/ReactPropTypesSecret":"Asjh"}],"D9Od":[function(require,module,exports) {
var r,e;module.exports=require("./factoryWithThrowingShims")();
},{"./factoryWithThrowingShims":"wVGV"}],"FbzX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.experimentReducer=b,exports.initialExperimentState=exports.reducerEvents=exports.ExperimentStateContext=exports.ExperimentDispatcherContext=void 0;var e=require("react");function t(e){return a(e)||i(e)||n(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function i(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){p(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=(0,e.createContext)();exports.ExperimentDispatcherContext=u;var f=(0,e.createContext)();exports.ExperimentStateContext=f;var l={addVariant:"ADD_VARIANTS",setActiveVariant:"SET_ACTIVE_VARIANT",setWeight:"SET_WEIGHT"};exports.reducerEvents=l;var v={activeVariant:null,weights:[50,50],variantsProvided:[]};function b(e,r){switch(r.type){case l.addVariant:return s(s({},e),{},{variantsProvided:[].concat(t(e.variantsProvided),[r.variants])});case l.setActiveVariant:return s(s({},e),{},{activeVariant:r.variant});case l.setWeight:return s(s({},e),{},{weights:r.weights})}}exports.initialExperimentState=v;
},{"react":"n8MK"}],"i9Rx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("react")),t=n(require("prop-types")),r=require("./experiment-context");function n(e){return e&&e.__esModule?e:{default:e}}function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function o(e,t){return l(e)||f(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(f){a=!0,i=f}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}}function l(e){if(Array.isArray(e))return e}function c(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=d(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){u=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(u)throw i}}}}function d(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t,n){var a,i=e.reduce(function(e,t){return e+t},0),u=Math.floor(Math.random()*i),f=t[t.length-1],l=c(e.entries());try{for(l.s();!(a=l.n()).done;){var d=o(a.value,2),p=d[0];if((u-=d[1])<0){f=t[p];break}}}catch(s){l.e(s)}finally{l.f()}n({type:r.reducerEvents.setActiveVariant,variant:f})}function v(t){var n=t.children,a=t.name,i=t.activeVariant,u=t.weights,f=void 0===u?[50,50]:u,l=t.onExperimentLoad,c=void 0===l?function(){return console.log("Experiment Loaded")}:l,d=o((0,e.useReducer)(r.experimentReducer,r.initialExperimentState),2),p=d[0],v=d[1];return(0,e.useEffect)(function(){i&&c(a,i),p.activeVariant&&c(a,p.activeVariant),i||p.activeVariant||s(f,p.variantsProvided,v)},[p.activeVariant,i]),e.default.createElement(r.ExperimentDispatcherContext.Provider,{value:v},e.default.createElement(r.ExperimentStateContext.Provider,{value:p},p.activeVariant||i?e.default.createElement(e.default.Fragment,null,i&&n.find(function(e){return e.props.name===i}),p.activeVariant&&n.find(function(e){return e.props.name===p.activeVariant})):e.default.createElement(e.default.Fragment,null,n)))}v.propTypes={children:t.default.node,name:t.default.string.isRequired,weights:t.default.arrayOf(t.default.number),onExperimentLoad:t.default.func,activeVariant:t.default.string};var y=v;exports.default=y;
},{"react":"n8MK","prop-types":"D9Od","./experiment-context":"FbzX"}],"kC9y":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("react")),t=n(require("prop-types")),r=require("./experiment-context");function n(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function o(t){var n=t.name,u=t.children,a=(0,e.useContext)(r.ExperimentDispatcherContext);return(0,e.useEffect)(function(){a({type:r.reducerEvents.addVariant,variants:n})},[a,n]),e.default.createElement(e.default.Fragment,null,u)}o.propTypes={name:t.default.string,children:t.default.node.isRequired};var i=o;exports.default=i;
},{"react":"n8MK","prop-types":"D9Od","./experiment-context":"FbzX"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Experiment",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"Variant",{enumerable:!0,get:function(){return r.default}});var e=t(require("./experiment")),r=t(require("./variant"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./experiment":"i9Rx","./variant":"kC9y"}]},{},["Focm"], "nextjs-ab-test")
//# sourceMappingURL=/index.js.map