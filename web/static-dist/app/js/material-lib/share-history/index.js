!function(t){function e(e){for(var n,i,c=e[0],s=e[1],l=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(u&&u(e);p.length;)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={264:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([899,0]),r()}({22:function(t,e){t.exports=jQuery},899:function(t,e,r){"use strict";r.r(e);var n=r(8),o=$("#share-history-table");$(".js-share-tab").on("click",(function(){var t=$(this);$.get(t.data("url"),(function(t){o.html(t)})),t.parent().addClass("active").siblings().removeClass("active")})),o.on("click",".cancel-share-btn",(function(t){var e=$(t.currentTarget),r=$(this);$.post(r.data("url"),{targetUserId:r.attr("targetUserId")},(function(t){e.closest(".share-history-record").remove(),Object(n.a)("success",Translator.trans("material.cancel_share.tips"))}),"json")})),$(".modal").off("click.modal-pagination"),o.on("click",".pagination li",(function(){var t=$(this),e=t.data("page"),r=t.closest(".pagination").data("url");$.get(r,{page:e},(function(t){o.html(t)}))}))}});