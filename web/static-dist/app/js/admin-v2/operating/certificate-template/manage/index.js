!function(t){function e(e){for(var r,u,a=e[0],l=e[1],c=e[2],s=0,p=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={75:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var f=l;i.push([970,0]),n()}({28:function(t,e){t.exports=jQuery},970:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n(5),o=n.n(r),i=n(6),u=n.n(i),a=n(13),l=function(){function t(){o()(this,t),this.init()}return u()(t,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){$("#template-table").on("click",".delete-template",(function(){confirm(Translator.trans("admin_v2.certificate.template.delete_hint"))&&$.post($(this).data("url"),(function(t){t?(Object(a.a)("success",Translator.trans("site.delete_success_hint"),1),window.location.reload()):Object(a.a)("danger",Translator.trans("site.delete_fail_hint"),1)}))}))}}]),t}();new l}});