!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/static-dist/",e(e.s=30)}([function(t,n,e){t.exports=!e(6)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){t.exports=e(12)},function(t,n,e){var r=e(3),o=e(4),i=e(14),c=e(16),u=e(22),a=function(t,n,e){var f,s,p,l=t&a.F,d=t&a.G,v=t&a.S,y=t&a.P,x=t&a.B,h=t&a.W,b=d?o:o[n]||(o[n]={}),w=b.prototype,g=d?r:v?r[n]:(r[n]||{}).prototype;for(f in d&&(e=n),e)(s=!l&&g&&void 0!==g[f])&&u(b,f)||(p=s?g[f]:e[f],b[f]=d&&"function"!=typeof g[f]?e[f]:x&&s?i(p,r):h&&g[f]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(p):y&&"function"==typeof p?i(Function.call,p):p,y&&((b.virtual||(b.virtual={}))[f]=p,t&a.R&&w&&!w[f]&&c(w,f,p)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){var r=e(26);function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}},function(t,n,e){var r=e(17),o=e(18),i=e(20),c=Object.defineProperty;n.f=e(0)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},,function(t,n,e){e(13),t.exports=e(4).parseInt},function(t,n,e){var r=e(2),o=e(23);r(r.G+r.F*(parseInt!=o),{parseInt:o})},function(t,n,e){var r=e(15);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(9),o=e(21);t.exports=e(0)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(0)&&!e(6)((function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(5),o=e(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(3).parseInt,o=e(24).trim,i=e(10),c=/^[-+]?0[xX]/;t.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(t,n){var e=o(String(t),3);return r(e,n>>>0||(c.test(e)?16:10))}:r},function(t,n,e){var r=e(2),o=e(25),i=e(6),c=e(10),u="["+c+"]",a=RegExp("^"+u+u+"*"),f=RegExp(u+u+"*$"),s=function(t,n,e){var o={},u=i((function(){return!!c[t]()||"​"!="​"[t]()})),a=o[t]=u?n(p):c[t];e&&(o[e]=a),r(r.P+r.F*u,"String",o)},p=s.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(f,"")),t};t.exports=s},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){t.exports=e(27)},function(t,n,e){e(28);var r=e(4).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(2);r(r.S+r.F*!e(0),"Object",{defineProperty:e(9).f})},,function(t,n,e){"use strict";e.r(n);var r=e(1),o=e.n(r),i=e(7),c=e.n(i),u=e(8),a=e.n(u);new(function(){function t(){var n=this;c()(this,t),this.$form=$("#step3-form"),window.ltc.on("getContent",(function(t){n.initScoreSlider(t.context.score)})),$("#finish-type").on("selectChange",(function(t,n){"score"==n&&$("#js-test-and-comment").show()}))}return a()(t,[{key:"initScoreSlider",value:function(t){$(".js-score-total").text(t);var n=Math.round(t*$("#score-condition").data("pass"));t=o()(t);var e=document.getElementById("score-slider"),r={start:n,connect:[!0,!1],tooltips:[!0],step:1,range:{min:0,max:t}};this.scoreSlider?this.scoreSlider.updateOptions(r):(this.scoreSlider=noUiSlider.create(e,r),e.noUiSlider.on("update",(function(n,e){var r=(100*(n[e]/t)).toFixed(0);$(".noUi-tooltip").text("".concat(r,"%")),$(".js-score-tooltip").css("left","".concat(r,"%")),$(".js-passScore").text(Math.round(r/100*t)),$("#finish-data").val(r/100)})));var i=Translator.trans("activity.testpaper_manage.pass_score_hint",{passScore:'<span class="js-passScore">'+n+"</span>"}),c='<div class="score-tooltip js-score-tooltip"><div class="tooltip top" role="tooltip" style="">\n      <div class="tooltip-arrow"></div>\n      <div class="tooltip-inner ">\n        '.concat(i,"\n      </div>\n      </div></div>");$(".noUi-handle").append(c),$(".noUi-tooltip").text("".concat((n/t*100).toFixed(0),"%")),$(".js-score-tooltip").css("left","".concat((n/t*100).toFixed(0),"%"))}}]),t}())}]);