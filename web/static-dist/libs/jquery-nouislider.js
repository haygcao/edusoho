/*! For license information please see jquery-nouislider.js.LICENSE.txt */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static-dist/",n(n.s=502)}({502:function(t,e,n){t.exports=n(503)},503:function(t,e,n){"use strict";n.r(e);n(504)},504:function(t,e){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){var t;t=function(){"use strict";function t(t,e){var n=document.createElement("div");return o(n,e),t.appendChild(n),n}function e(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function n(t,e,n){n>0&&(o(t,e),setTimeout((function(){s(t,e)}),n))}function r(t){return Array.isArray(t)?t:[t]}function i(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function o(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function s(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function a(){var t=void 0!==window.pageXOffset,e="CSS1Compat"===(document.compatMode||"");return{x:t?window.pageXOffset:e?document.documentElement.scrollLeft:document.body.scrollLeft,y:t?window.pageYOffset:e?document.documentElement.scrollTop:document.body.scrollTop}}function u(t,e){return 100/(e-t)}function l(t,e){return 100*e/(t[1]-t[0])}function c(t,e){for(var n=1;t>=e[n];)n+=1;return n}function f(t,e,n){if(n>=t.slice(-1)[0])return 100;var r,i,o,s,a=c(n,t);return r=t[a-1],i=t[a],o=e[a-1],s=e[a],o+function(t,e){return l(t,t[0]<0?e+Math.abs(t[0]):e-t[0])}([r,i],n)/u(o,s)}function p(t,e,n,r){if(100===r)return r;var i,o,s=c(r,t);return n?r-(i=t[s-1])>((o=t[s])-i)/2?o:i:e[s-1]?t[s-1]+function(t,e){return Math.round(t/e)*e}(r-t[s-1],e[s-1]):r}function d(t,n,r){var i;if("number"==typeof n&&(n=[n]),"[object Array]"!==Object.prototype.toString.call(n))throw new Error("noUiSlider: 'range' contains invalid value.");if(!e(i="min"===t?0:"max"===t?100:parseFloat(t))||!e(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");r.xPct.push(i),r.xVal.push(n[0]),i?r.xSteps.push(!isNaN(n[1])&&n[1]):isNaN(n[1])||(r.xSteps[0]=n[1]),r.xHighestCompleteStep.push(0)}function h(t,e,n){if(!e)return!0;n.xSteps[t]=l([n.xVal[t],n.xVal[t+1]],e)/u(n.xPct[t],n.xPct[t+1]);var r=(n.xVal[t+1]-n.xVal[t])/n.xNumSteps[t],i=Math.ceil(Number(r.toFixed(3))-1),o=n.xVal[t]+n.xNumSteps[t]*i;n.xHighestCompleteStep[t]=o}function m(t,e,n,r){this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e,this.direction=n;var i,o=[];for(i in t)t.hasOwnProperty(i)&&o.push([t[i],i]);for(o.length&&"object"==typeof o[0][0]?o.sort((function(t,e){return t[0][0]-e[0][0]})):o.sort((function(t,e){return t[0]-e[0]})),i=0;i<o.length;i++)d(o[i][1],o[i][0],this);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)h(i,this.xNumSteps[i],this)}m.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider: 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&l(this.xVal,t)},m.prototype.toStepping=function(t){return t=f(this.xVal,this.xPct,t)},m.prototype.fromStepping=function(t){return function(t,e,n){if(n>=100)return t.slice(-1)[0];var r,i=c(n,e);return function(t,e){return e*(t[1]-t[0])/100+t[0]}([t[i-1],t[i]],(n-(r=e[i-1]))*u(r,e[i]))}(this.xVal,this.xPct,t)},m.prototype.getStep=function(t){return t=p(this.xPct,this.xSteps,this.snap,t)},m.prototype.getNearbySteps=function(t){var e=c(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e-0],step:this.xNumSteps[e-0],highestStep:this.xHighestCompleteStep[e-0]}}},m.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(i);return Math.max.apply(null,t)},m.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var g={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function v(t,n){if(!e(n))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=n}function b(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");t.spectrum=new m(e,t.snap,t.dir,t.singleStep)}function w(t,e){if(e=r(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function S(t,e){if(t.snap=e,"boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function x(t,e){if(t.animate=e,"boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function y(t,e){if(t.animationDuration=e,"number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.")}function E(t,e){var n,r=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(n=1;n<t.handles;n++)r.push(e);r.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");r=e}t.connect=r}function C(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function N(t,n){if(!e(n))throw new Error("noUiSlider: 'margin' option must be numeric.");if(0!==n&&(t.margin=t.spectrum.getMargin(n),!t.margin))throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function U(t,n){if(!e(n))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(n),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function P(t,n){if(!e(n))throw new Error("noUiSlider: 'padding' option must be numeric.");if(0!==n){if(t.padding=t.spectrum.getMargin(n),!t.padding)throw new Error("noUiSlider: 'padding' option is only supported on linear sliders.");if(t.padding<0)throw new Error("noUiSlider: 'padding' option must be a positive number.");if(t.padding>=50)throw new Error("noUiSlider: 'padding' option must be less than half the range.")}}function O(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function M(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,r=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0;if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");N(t,t.start[1]-t.start[0])}t.events={tap:n||o,drag:r,fixed:i,snap:o,hover:s}}function k(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(!0)}else{if(t.tooltips=r(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");t.tooltips.forEach((function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}))}}function V(t,e){if(t.format=e,"function"==typeof e.to&&"function"==typeof e.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function L(t,e){if(void 0!==e&&"string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function A(t,e){if(void 0!==e&&"object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var n in t.cssClasses={},e)e.hasOwnProperty(n)&&(t.cssClasses[n]=t.cssPrefix+e[n]);else t.cssClasses=e}function j(t,e){if(!0!==e&&!1!==e)throw new Error("noUiSlider: 'useRequestAnimationFrame' option should be true (default) or false.");t.useRequestAnimationFrame=e}function z(t){var e={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,format:g},n={step:{r:!1,t:v},start:{r:!0,t:w},connect:{r:!0,t:E},direction:{r:!0,t:O},snap:{r:!1,t:S},animate:{r:!1,t:x},animationDuration:{r:!1,t:y},range:{r:!0,t:b},orientation:{r:!1,t:C},margin:{r:!1,t:N},limit:{r:!1,t:U},padding:{r:!1,t:P},behaviour:{r:!0,t:M},format:{r:!1,t:V},tooltips:{r:!1,t:k},cssPrefix:{r:!1,t:L},cssClasses:{r:!1,t:A},useRequestAnimationFrame:{r:!1,t:j}},r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},useRequestAnimationFrame:!0};Object.keys(n).forEach((function(i){if(void 0===t[i]&&void 0===r[i]){if(n[i].r)throw new Error("noUiSlider: '"+i+"' is required.");return!0}n[i].t(e,void 0===t[i]?r[i]:t[i])})),e.pips=t.pips;var i=[["left","top"],["right","bottom"]];return e.style=i[e.dir][e.ort],e.styleOposite=i[e.dir?0:1][e.ort],e}function H(e,i,u){var l,c,f,p,d,h,m=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},g=e,v=[],b=[],w=!1,S=i.spectrum,x=[],y={};function E(e,n){var r=t(e,i.cssClasses.origin),s=t(r,i.cssClasses.handle);return s.setAttribute("data-handle",n),0===n?o(s,i.cssClasses.handleLower):n===i.handles-1&&o(s,i.cssClasses.handleUpper),r}function C(e,n){return!!n&&t(e,i.cssClasses.connect)}function N(e,n){return!!i.tooltips[n]&&t(e.firstChild,i.cssClasses.tooltip)}function U(t,e,n){var r=document.createElement("div"),s="",a=[i.cssClasses.valueNormal,i.cssClasses.valueLarge,i.cssClasses.valueSub],u=[i.cssClasses.markerNormal,i.cssClasses.markerLarge,i.cssClasses.markerSub],l=[i.cssClasses.valueHorizontal,i.cssClasses.valueVertical],c=[i.cssClasses.markerHorizontal,i.cssClasses.markerVertical];function f(t,e,n){return'class="'+function(t,e){var n=e===i.cssClasses.value,r=n?a:u;return e+" "+(n?l:c)[i.ort]+" "+r[t]}(n[1],e)+'" style="'+i.style+": "+t+'%"'}return o(r,i.cssClasses.pips),o(r,0===i.ort?i.cssClasses.pipsHorizontal:i.cssClasses.pipsVertical),Object.keys(t).forEach((function(r){!function(t,r){r[1]=r[1]&&e?e(r[0],r[1]):r[1],s+="<div "+f(t,i.cssClasses.marker,r)+"></div>",r[1]&&(s+="<div "+f(t,i.cssClasses.value,r)+">"+n.to(r[0])+"</div>")}(r,t[r])})),r.innerHTML=s,r}function P(t){var e=t.mode,n=t.density||1,r=t.filter||!1,i=function(t,e,n){if("range"===t||"steps"===t)return S.xVal;if("count"===t){var r,i=100/(e-1),o=0;for(e=[];(r=o++*i)<=100;)e.push(r);t="positions"}return"positions"===t?e.map((function(t){return S.fromStepping(n?S.getStep(t):t)})):"values"===t?n?e.map((function(t){return S.fromStepping(S.getStep(S.toStepping(t)))})):e:void 0}(e,t.values||!1,t.stepped||!1),o=function(t,e,n){var r,i={},o=S.xVal[0],s=S.xVal[S.xVal.length-1],a=!1,u=!1,l=0;return r=n.slice().sort((function(t,e){return t-e})),(n=r.filter((function(t){return!this[t]&&(this[t]=!0)}),{}))[0]!==o&&(n.unshift(o),a=!0),n[n.length-1]!==s&&(n.push(s),u=!0),n.forEach((function(r,o){var s,c,f,p,d,h,m,g,v,b=r,w=n[o+1];if("steps"===e&&(s=S.xNumSteps[o]),s||(s=w-b),!1!==b&&void 0!==w)for(s=Math.max(s,1e-7),c=b;c<=w;c=(c+s).toFixed(7)/1){for(m=(d=(p=S.toStepping(c))-l)/t,v=d/(g=Math.round(m)),f=1;f<=g;f+=1)i[(l+f*v).toFixed(5)]=["x",0];h=n.indexOf(c)>-1?1:"steps"===e?2:0,!o&&a&&(h=0),c===w&&u||(i[p.toFixed(5)]=[c,h]),l=p}})),i}(n,e,i),s=t.format||{to:Math.round};return g.appendChild(U(o,r,s))}function O(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][i.ort];return 0===i.ort?t.width||l[e]:t.height||l[e]}function M(t,e,n,r){var o=function(e){return!g.hasAttribute("disabled")&&(o=g,s=i.cssClasses.tap,!(o.classList?o.classList.contains(s):new RegExp("\\b"+s+"\\b").test(o.className))&&!!(e=function(t,e){t.preventDefault();var n,r,i=0===t.type.indexOf("touch"),o=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),i){if(t.touches.length>1)return!1;n=t.changedTouches[0].pageX,r=t.changedTouches[0].pageY}return e=e||a(),(o||s)&&(n=t.clientX+e.x,r=t.clientY+e.y),t.pageOffset=e,t.points=[n,r],t.cursor=o||s,t}(e,r.pageOffset))&&!(t===m.start&&void 0!==e.buttons&&e.buttons>1)&&(!r.hover||!e.buttons)&&(e.calcPoint=e.points[i.ort],void n(e,r)));var o,s},s=[];return t.split(" ").forEach((function(t){e.addEventListener(t,o,!1),s.push([t,o])})),s}function k(t){var e,n,r,o,s,u=100*(t-(e=l,n=i.ort,r=e.getBoundingClientRect(),o=e.ownerDocument.documentElement,s=a(),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(s.x=0),n?r.top+s.y-o.clientTop:r.left+s.x-o.clientLeft))/O();return i.dir?100-u:u}function V(t,e,n,r){var i=n.slice(),o=[!t,t],s=[t,!t];r=r.slice(),t&&r.reverse(),r.length>1?r.forEach((function(t,n){var r=q(i,t,i[t]+e,o[n],s[n]);!1===r?e=0:(e=r-i[t],i[t]=r)})):o=s=[!0];var a=!1;r.forEach((function(t,r){a=B(t,n[t]+e,o[r],s[r])||a})),a&&r.forEach((function(t){L("update",t),L("slide",t)}))}function L(t,e,n){Object.keys(y).forEach((function(r){var o=r.split(".")[0];t===o&&y[r].forEach((function(t){t.call(p,x.map(i.format.to),e,x.slice(),n||!1,v.slice())}))}))}function A(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&H(t,e)}function j(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return H(t,e);var n=(i.dir?-1:1)*(t.calcPoint-e.startCalcPoint);V(n>0,100*n/e.baseSize,e.locations,e.handleNumbers)}function H(t,e){w&&(s(w,i.cssClasses.active),w=!1),t.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener)),document.documentElement.noUiListeners.forEach((function(t){document.documentElement.removeEventListener(t[0],t[1])})),s(g,i.cssClasses.drag),_(),e.handleNumbers.forEach((function(t){L("set",t),L("change",t),L("end",t)}))}function F(t,e){if(1===e.handleNumbers.length){var n=c[e.handleNumbers[0]];if(n.hasAttribute("disabled"))return!1;o(w=n.children[0],i.cssClasses.active)}t.preventDefault(),t.stopPropagation();var r=M(m.move,document.documentElement,j,{startCalcPoint:t.calcPoint,baseSize:O(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:v.slice()}),s=M(m.end,document.documentElement,H,{handleNumbers:e.handleNumbers}),a=M("mouseout",document.documentElement,A,{handleNumbers:e.handleNumbers});if(document.documentElement.noUiListeners=r.concat(s,a),t.cursor){document.body.style.cursor=getComputedStyle(t.target).cursor,c.length>1&&o(g,i.cssClasses.drag);var u=function(){return!1};document.body.noUiListener=u,document.body.addEventListener("selectstart",u,!1)}e.handleNumbers.forEach((function(t){L("start",t)}))}function D(t){t.stopPropagation();var e=k(t.calcPoint),r=function(t){var e=100,n=!1;return c.forEach((function(r,i){if(!r.hasAttribute("disabled")){var o=Math.abs(v[i]-t);o<e&&(n=i,e=o)}})),n}(e);if(!1===r)return!1;i.events.snap||n(g,i.cssClasses.tap,i.animationDuration),B(r,e,!0,!0),_(),L("slide",r,!0),L("set",r,!0),L("change",r,!0),L("update",r,!0),i.events.snap&&F(t,{handleNumbers:[r]})}function T(t){var e=k(t.calcPoint),n=S.getStep(e),r=S.fromStepping(n);Object.keys(y).forEach((function(t){"hover"===t.split(".")[0]&&y[t].forEach((function(t){t.call(p,r)}))}))}function q(t,e,n,r,o){var s;return c.length>1&&(r&&e>0&&(n=Math.max(n,t[e-1]+i.margin)),o&&e<c.length-1&&(n=Math.min(n,t[e+1]-i.margin))),c.length>1&&i.limit&&(r&&e>0&&(n=Math.min(n,t[e-1]+i.limit)),o&&e<c.length-1&&(n=Math.max(n,t[e+1]-i.limit))),i.padding&&(0===e&&(n=Math.max(n,i.padding)),e===c.length-1&&(n=Math.min(n,100-i.padding))),n=S.getStep(n),s=n,(n=Math.max(Math.min(s,100),0))!==t[e]&&n}function R(t){return t+"%"}function _(){b.forEach((function(t){var e=v[t]>50?-1:1,n=3+(c.length+e*t);c[t].childNodes[0].style.zIndex=n}))}function B(t,e,n,r){return!1!==(e=q(v,t,e,n,r))&&(function(t,e){v[t]=e,x[t]=S.fromStepping(e);var n=function(){c[t].style[i.style]=R(e),X(t),X(t+1)};window.requestAnimationFrame&&i.useRequestAnimationFrame?window.requestAnimationFrame(n):n()}(t,e),!0)}function X(t){if(f[t]){var e=0,n=100;0!==t&&(e=v[t-1]),t!==f.length-1&&(n=v[t]),f[t].style[i.style]=R(e),f[t].style[i.styleOposite]=R(100-n)}}function Y(t,e){null!==t&&!1!==t&&("number"==typeof t&&(t=String(t)),!1===(t=i.format.from(t))||isNaN(t)||B(e,S.toStepping(t),!1,!1))}function I(t,e){var o=r(t),s=void 0===v[0];e=void 0===e||!!e,o.forEach(Y),i.animate&&!s&&n(g,i.cssClasses.tap,i.animationDuration),b.forEach((function(t){B(t,v[t],!0,!1)})),_(),b.forEach((function(t){L("update",t),null!==o[t]&&e&&L("set",t)}))}function W(){var t=x.map(i.format.to);return 1===t.length?t[0]:t}function $(t,e){y[t]=y[t]||[],y[t].push(e),"update"===t.split(".")[0]&&c.forEach((function(t,e){L("update",e)}))}if(g.noUiSlider)throw new Error("Slider was already initialized.");return function(e){o(e,i.cssClasses.target),0===i.dir?o(e,i.cssClasses.ltr):o(e,i.cssClasses.rtl),0===i.ort?o(e,i.cssClasses.horizontal):o(e,i.cssClasses.vertical),l=t(e,i.cssClasses.base)}(g),function(t,e){c=[],(f=[]).push(C(e,t[0]));for(var n=0;n<i.handles;n++)c.push(E(e,n)),b[n]=n,f.push(C(e,t[n+1]))}(i.connect,l),p={destroy:function(){for(var t in i.cssClasses)i.cssClasses.hasOwnProperty(t)&&s(g,i.cssClasses[t]);for(;g.firstChild;)g.removeChild(g.firstChild);delete g.noUiSlider},steps:function(){return v.map((function(t,e){var n=S.getNearbySteps(t),r=x[e],i=n.thisStep.step,o=null;!1!==i&&r+i>n.stepAfter.startValue&&(i=n.stepAfter.startValue-r),o=r>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&r-n.stepBefore.highestStep,100===t?i=null:0===t&&(o=null);var s=S.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(s))),null!==o&&!1!==o&&(o=Number(o.toFixed(s))),[o,i]}))},on:$,off:function(t){var e=t&&t.split(".")[0],n=e&&t.substring(e.length);Object.keys(y).forEach((function(t){var r=t.split(".")[0],i=t.substring(r.length);e&&e!==r||n&&n!==i||delete y[t]}))},get:W,set:I,reset:function(t){I(i.start,t)},__moveHandles:function(t,e,n){V(t,e,v,n)},options:u,updateOptions:function(t,e){var n=W(),r=["margin","limit","padding","range","animate","snap","step","format"];r.forEach((function(e){void 0!==t[e]&&(u[e]=t[e])}));var o=z(u);r.forEach((function(e){void 0!==t[e]&&(i[e]=o[e])})),o.spectrum.direction=S.direction,S=o.spectrum,i.margin=o.margin,i.limit=o.limit,i.padding=o.padding,v=[],I(t.start||n,e)},target:g,pips:P},(d=i.events).fixed||c.forEach((function(t,e){M(m.start,t.children[0],F,{handleNumbers:[e]})})),d.tap&&M(m.start,l,D,{}),d.hover&&M(m.move,l,T,{hover:!0}),d.drag&&f.forEach((function(t,e){if(!1!==t&&0!==e&&e!==f.length-1){var n=c[e-1],r=c[e],s=[t];o(t,i.cssClasses.draggable),d.fixed&&(s.push(n.children[0]),s.push(r.children[0])),s.forEach((function(t){M(m.start,t,F,{handles:[n,r],handleNumbers:[e-1,e]})}))}})),I(i.start),i.pips&&P(i.pips),i.tooltips&&(h=c.map(N),$("update",(function(t,e,n){if(h[e]){var r=t[e];!0!==i.tooltips[e]&&(r=i.tooltips[e].to(n[e])),h[e].innerHTML=r}}))),p}return{create:function(t,e){if(!t.nodeName)throw new Error("noUiSlider.create requires a single element.");var n=H(t,z(e),e);return t.noUiSlider=n,n}}},window.noUiSlider=t()}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}});