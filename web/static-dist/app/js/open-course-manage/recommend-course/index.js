!function(e){function t(t){for(var o,a,i=t[0],l=t[1],c=t[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(s&&s(t);p.length;)p.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],o=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(o=!1)}o&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={310:0},u=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=l;u.push([1097,0]),r()}({1097:function(e,t,r){"use strict";r.r(t);var o=r(69);$(".js-course-list-group").on("click",".js-delete-btn",(function(e){var t=$(e.target),r=t.data("id");$.post(t.data("cancelUrl")).done((function(){$(".item-"+r).remove()}))})),Object(o.a)({element:"#course-list-group",itemSelector:"li.course-item",ajax:!1}),$("#modal").on("show.bs.modal",(function(){localStorage.removeItem("ids")})),$("#modal").on("hide.bs.modal",(function(){localStorage.removeItem("ids")}))}});