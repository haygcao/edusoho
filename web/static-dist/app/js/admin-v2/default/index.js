!function(t){function e(e){for(var n,a,l=e[0],c=e[1],s=e[2],f=0,d=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(u&&u(e);d.length;)d.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={54:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;i.push([779,0]),r()}({139:function(t,e,r){"use strict";var n=r(253),o=r(254),i=r(163);t.exports={formats:i,parse:o,stringify:n}},162:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r},e.merge=function(t,r,o){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=e.arrayToObject(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,i){n.call(t,i)?t[i]&&"object"==typeof t[i]?t[i]=e.merge(t[i],r,o):t.push(r):t[i]=r})),t):Object.keys(r).reduce((function(t,i){var a=r[i];return n.call(t,i)?t[i]=e.merge(t[i],a,o):t[i]=a,t}),i)},e.assign=function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",n=0;n<e.length;++n){var i=e.charCodeAt(n);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=e.charAt(n):i<128?r+=o[i]:i<2048?r+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?r+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(n+=1,i=65536+((1023&i)<<10|1023&e.charCodeAt(n)),r+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return r},e.compact=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var o=e[n],i=o.obj[o.prop],a=Object.keys(i),l=0;l<a.length;++l){var c=a[l],s=i[c];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(e.push({obj:i,prop:c}),r.push(s))}return function(t){for(var e;t.length;){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var n=[],o=0;o<e.length;++o)void 0!==e[o]&&n.push(e[o]);r.obj[r.prop]=n}}return e}(e)},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!=t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},163:function(t,e,r){"use strict";var n=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},23:function(t,e){t.exports=jQuery},253:function(t,e,r){"use strict";var n=r(162),o=r(163),i={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(t){return a.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,r,o,i,a,c,s,u,f,d,p,h){var y=e;if("function"==typeof s)y=s(r,y);else if(y instanceof Date)y=d(y);else if(null===y){if(i)return c&&!h?c(r,l.encoder):r;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||n.isBuffer(y))return c?[p(h?r:c(r,l.encoder))+"="+p(c(y,l.encoder))]:[p(r)+"="+p(String(y))];var g,m=[];if(void 0===y)return m;if(Array.isArray(s))g=s;else{var v=Object.keys(y);g=u?v.sort(u):v}for(var b=0;b<g.length;++b){var w=g[b];a&&null===y[w]||(m=Array.isArray(y)?m.concat(t(y[w],o(r,w),o,i,a,c,s,u,f,d,p,h)):m.concat(t(y[w],r+(f?"."+w:"["+w+"]"),o,i,a,c,s,u,f,d,p,h)))}return m};t.exports=function(t,e){var r=t,a=e?n.assign({},e):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!=typeof a.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===a.delimiter?l.delimiter:a.delimiter,u="boolean"==typeof a.strictNullHandling?a.strictNullHandling:l.strictNullHandling,f="boolean"==typeof a.skipNulls?a.skipNulls:l.skipNulls,d="boolean"==typeof a.encode?a.encode:l.encode,p="function"==typeof a.encoder?a.encoder:l.encoder,h="function"==typeof a.sort?a.sort:null,y=void 0!==a.allowDots&&a.allowDots,g="function"==typeof a.serializeDate?a.serializeDate:l.serializeDate,m="boolean"==typeof a.encodeValuesOnly?a.encodeValuesOnly:l.encodeValuesOnly;if(void 0===a.format)a.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,a.format))throw new TypeError("Unknown format option provided.");var v,b,w=o.formatters[a.format];"function"==typeof a.filter?r=(b=a.filter)("",r):Array.isArray(a.filter)&&(v=b=a.filter);var k,j=[];if("object"!=typeof r||null===r)return"";k=a.arrayFormat in i?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var x=i[k];v||(v=Object.keys(r)),h&&v.sort(h);for(var O=0;O<v.length;++O){var E=v[O];f&&null===r[E]||(j=j.concat(c(r[E],E,x,u,f,d?p:null,b,h,y,g,w,m)))}var S=j.join(s),A=!0===a.addQueryPrefix?"?":"";return S.length>0?A+S:""}},254:function(t,e,r){"use strict";var n=r(162),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(n),l=a?n.slice(0,a.index):n,c=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}for(var s=0;null!==(a=i.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(a[1])}return a&&c.push("["+n.slice(a.index)+"]"),function(t,e,r){for(var n=e,o=t.length-1;o>=0;--o){var i,a=t[o];if("[]"===a)i=(i=[]).concat(n);else{i=r.plainObjects?Object.create(null):{};var l="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(l,10);!isNaN(c)&&a!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(i=[])[c]=n:i[l]=n}n=i}return n}(c,e,r)}};t.exports=function(t,e){var r=e?n.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===t||null==t)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof t?function(t,e){for(var r={},n=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,a=e.parameterLimit===1/0?void 0:e.parameterLimit,l=n.split(e.delimiter,a),c=0;c<l.length;++c){var s,u,f=l[c],d=f.indexOf("]="),p=-1===d?f.indexOf("="):d+1;-1===p?(s=e.decoder(f,i.decoder),u=e.strictNullHandling?null:""):(s=e.decoder(f.slice(0,p),i.decoder),u=e.decoder(f.slice(p+1),i.decoder)),o.call(r,s)?r[s]=[].concat(r[s]).concat(u):r[s]=u}return r}(t,r):t,c=r.plainObjects?Object.create(null):{},s=Object.keys(l),u=0;u<s.length;++u){var f=s[u],d=a(f,l[f],r);c=n.merge(c,d,r)}return n.compact(c)}},359:function(t,e,r){var n,o,i;o=[t,r(431),r(433),r(434)],void 0===(i="function"==typeof(n=function(t,e,r,n){"use strict";var o=l(e),i=l(r),a=l(n);function l(t){return t&&t.__esModule?t:{default:t}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var p=function(t){function e(t,r){s(this,e);var n=f(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.resolveOptions(r),n.listenClick(t),n}return d(e,t),u(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===c(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,a.default)(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return h("action",t)}},{key:"defaultTarget",value:function(t){var e=h("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return h("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,r=!!document.queryCommandSupported;return e.forEach((function(t){r=r&&!!document.queryCommandSupported(t)})),r}}]),e}(i.default);function h(t,e){var r="data-clipboard-"+t;if(e.hasAttribute(r))return e.getAttribute(r)}t.exports=p})?n.apply(e,o):n)||(t.exports=i)},431:function(t,e,r){var n,o,i;o=[t,r(432)],void 0===(i="function"==typeof(n=function(t,e){"use strict";var r=n(e);function n(t){return t&&t.__esModule?t:{default:t}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),l=function(){function t(e){i(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,r.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,r.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=l})?n.apply(e,o):n)||(t.exports=i)},432:function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var r=t.hasAttribute("readonly");r||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),r||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}},433:function(t,e){function r(){}r.prototype={on:function(t,e,r){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:r}),this},once:function(t,e,r){var n=this;function o(){n.off(t,o),e.apply(r,arguments)}return o._=e,this.on(t,o,r)},emit:function(t){for(var e=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=r.length;n<o;n++)r[n].fn.apply(r[n].ctx,e);return this},off:function(t,e){var r=this.e||(this.e={}),n=r[t],o=[];if(n&&e)for(var i=0,a=n.length;i<a;i++)n[i].fn!==e&&n[i].fn._!==e&&o.push(n[i]);return o.length?r[t]=o:delete r[t],this}},t.exports=r,t.exports.TinyEmitter=r},434:function(t,e,r){var n=r(435),o=r(436);t.exports=function(t,e,r){if(!t&&!e&&!r)throw new Error("Missing required arguments");if(!n.string(e))throw new TypeError("Second argument must be a String");if(!n.fn(r))throw new TypeError("Third argument must be a Function");if(n.node(t))return function(t,e,r){return t.addEventListener(e,r),{destroy:function(){t.removeEventListener(e,r)}}}(t,e,r);if(n.nodeList(t))return function(t,e,r){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,r)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,r)}))}}}(t,e,r);if(n.string(t))return function(t,e,r){return o(document.body,t,e,r)}(t,e,r);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},435:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var r=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===r||"[object HTMLCollection]"===r)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},436:function(t,e,r){var n=r(437);function o(t,e,r,n,o){var a=i.apply(this,arguments);return t.addEventListener(r,a,o),{destroy:function(){t.removeEventListener(r,a,o)}}}function i(t,e,r,o){return function(r){r.delegateTarget=n(r.target,e),r.delegateTarget&&o.call(t,r)}}t.exports=function(t,e,r,n,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof r?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,r,n,i)})))}},437:function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},779:function(t,e,r){"use strict";r.r(e);var n=r(153),o=r.n(n),i=r(91),a=r.n(i),l=r(139),c=r.n(l),s=r(359),u=r.n(s),f=r(8),d=window.localStorage.getItem("upgradeNotice")?window.localStorage.getItem("upgradeNotice"):"";1==$(".js-notice").val()&&1!=d&&(window.localStorage.setItem("upgradeNotice","1"),$(".js-upgrade-notice").removeClass("hidden")),$(".js-show-toggle").on("click",(function(t){var e=$(t.currentTarget);$(".js-steps").slideToggle();var r=$(".js-toggle-text").text()===Translator.trans("site.data.collapse")?Translator.trans("site.data.expand"):Translator.trans("site.data.collapse");$(".js-toggle-text").text(r),e.find("i").toggleClass("es-icon-keyboardarrowup es-icon-keyboardarrowdown")}));var p=function(t,e,r){var n=$(e),o=t.find(".modal-dialog"),i=o.width()?o.width():$(window).width()-20,a=$(window).height(),l=e.width,c=e.height,s=0;l/c>=4/3?s=(a-(c=l>i?c/(l/i):c*(i/l)))/2:(c=a>600?600:.9*a,n.height(c),n.width("auto"),s=(a-c)/2),t.find("a").attr("href",r.urlOfImage).append(n).css({"margin-top":s}),t.modal("show")};!function(){var t=$(".js-steps");t.length&&$.get(t.data("url"),(function(e){t.html(e)}));var e=$(".js-data-overview");e.length&&$.get(e.data("url"),(function(t){e.html(t)}));var r=$(".js-quick-entrance");r.length&&$.get(r.data("url"),(function(t){r.html(t)}));var n=$(".js-admin-info");n.length&&n.data("url")&&$.get(n.data("url"),(function(t){n.html(t);var e=$(".js-mini-program").data("src");$("#js-marketing-qrcode3").attr("src","/common/qrcode?"+c.a.stringify({text:window.location.origin+"/h5/index.html"})),$(".js-copy-school_link").attr("data-clipboard-text",window.location.origin+"/h5/index.html"),new u.a(".js-copy-school_link").on("success",(function(t){Object(f.a)("success",Translator.trans("admin_v2.homepage.school_info.enter.copy_success"))})),$(".js-mini-program").popover({trigger:"hover",placement:"bottom",title:Translator.trans("admin_v2.homepage.mini_program.title"),template:'<div class="popover mini-program-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',html:!0,content:'<img src="'.concat(e,'" width="200px">')})}));var o=$(".js-announcement");o.length&&o.data("url")&&$.get(o.data("url"),(function(t){o.html(t)}))}(),setTimeout((function(){!function(){var t=$(".application-intro");t.length&&t.data("url")&&$.get(t.data("url"),(function(e){t.html(e)}));var e=$(".js-admin-advice");e.length&&e.data("url")&&$.get(e.data("url"),(function(t){e.html(t)}));var r=$(".js-admin-changelog");r.length&&r.data("url")&&$.get(r.data("url"),(function(t){r.html(t)}));var n=$(".js-admin-qrcode");n.length&&n.data("url")&&$.get(n.data("url"),(function(t){n.html(t)}))}()}),1e3),window.onload=function(){var t;t=$("#cloud-ad"),$.get(t.data("url"),(function(e){if(!e.error){var r=new Image;a.a.get("cloud-ad")!=e.image&&(r.src=e.image,r.complete?p(t,r,e):r.onload=function(){p(t,r,e),r.onload=null})}})),t.on("hide.bs.modal",(function(){a.a.set("cloud-ad",t.find("img").attr("src"),{expires:3600})})),$(".js-steps").delegate($(".task-left"),"click",(function(t){o()(t.target.classList).includes("task-left")&&($(".task-ul").animate({scrollLeft:0},400),$(".task-left").css("opacity",0),$(".task-left").hide(),$(".task-right").css("opacity",1),$(".task-right").show())})),$(".js-steps").delegate($(".task-right"),"click",(function(t){var e;o()(t.target.classList).includes("task-right")&&(e=$(".task-ul")[0].scrollWidth,$(".task-ul").animate({scrollLeft:e},400),$(".task-left").css("opacity",1),$(".task-left").show(),$(".task-right").css("opacity",0),$(".task-right").hide())}))},$(".js-no-network").click((function(){cd.message({type:"danger",message:Translator.trans("admin.can_not_link_data")})}))}});