!function(c){function e(e){for(var r,t,n=e[0],o=e[1],a=e[2],i=0,u=[];i<n.length;i++)t=n[i],Object.prototype.hasOwnProperty.call(f,t)&&f[t]&&u.push(f[t][0]),f[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(c[r]=o[r]);for(s&&s(e);u.length;)u.shift()();return p.push.apply(p,a||[]),l()}function l(){for(var e,r=0;r<p.length;r++){for(var t=p[r],n=!0,o=1;o<t.length;o++){var a=t[o];0!==f[a]&&(n=!1)}n&&(p.splice(r--,1),e=i(i.s=t[0]))}return e}var t={},f={127:0},p=[];function i(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return c[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=c,i.c=t,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(r,e){if(1&e&&(r=i(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)i.d(t,n,function(e){return r[e]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/static-dist/";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var s=n;p.push([608,0]),l()}({15:function(e,r){e.exports=jQuery},608:function(e,r,t){"use strict";t.r(r);var n=t(4);$(".js-confirm-btn").on("click",function(e){var r=$(e.currentTarget);$.get(r.data("url"),function(e){e.isPaid?location.href=e.redirectUrl:(Object(n.a)("danger",Translator.trans("cashier.confirm.fail_message")),$("#modal").modal("hide"))})})}});