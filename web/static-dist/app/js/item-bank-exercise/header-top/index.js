!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/static-dist/",t(t.s=1121)}({1121:function(e,n,t){"use strict";t.r(n);t(456);$(".cancel-refund").on("click",(function(){if(!confirm(Translator.trans("course_set.refund_cancel_hint")))return!1;$.post($(this).data("url"),(function(e){window.location.reload()}))}))},456:function(e,n){$(".es-qrcode").on("click",(function(e){var n=$(e.currentTarget);n.hasClass("open")?n.removeClass("open"):$.ajax({type:"post",url:n.data("url"),dataType:"json",success:function(e){n.find(".qrcode-popover img").attr("src",e.img),n.addClass("open")}})})),$(".es-wrap").on("click",(function(){var e=$(".es-qrcode");e.hasClass("open")&&e.removeClass("open")}))}});