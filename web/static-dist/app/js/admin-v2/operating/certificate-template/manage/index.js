!function(l){function t(t){for(var e,n,r=t[0],o=t[1],i=t[2],u=0,a=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(f,n)&&f[n]&&a.push(f[n][0]),f[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(l[e]=o[e]);for(p&&p(t);a.length;)a.shift()();return s.push.apply(s,i||[]),c()}function c(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==f[i]&&(r=!1)}r&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var n={},f={68:0},s=[];function u(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=l,u.c=n,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=r;s.push([561,0]),c()}({15:function(t,e){t.exports=jQuery},561:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return l});var r=n(0),o=n.n(r),i=n(1),u=n.n(i),a=n(4),l=function(){function t(){o()(this,t),this.init()}return u()(t,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){$("#template-table").on("click",".delete-template",function(){confirm(Translator.trans("admin_v2.certificate.template.delete_hint"))&&$.post($(this).data("url"),function(t){t?(Object(a.a)("success",Translator.trans("site.delete_success_hint"),1),window.location.reload()):Object(a.a)("danger",Translator.trans("site.delete_fail_hint"),1)})})}}]),t}();new l}});