!function(n){function t(t){for(var o,a,c=t[0],l=t[1],u=t[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],o=!0,c=1;c<e.length;c++){var l=e[c];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),n=a(a.s=e[0]))}return n}var o={},r={66:0},i=[];function a(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=o,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)a.d(e,o,function(t){return n[t]}.bind(null,o));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/static-dist/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;i.push([948,0]),e()}({24:function(n,t){n.exports=jQuery},948:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return l}));var o=e(4),r=e.n(o),i=e(5),a=e.n(i),c=e(9),l=function(){function n(){r()(this,n),this.init()}return a()(n,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){$("#close-collect").on("click",(function(){confirm(Translator.trans("admin_v2.information_collect.close.hint"))&&$.post($(this).data("url"),(function(n){n?(Object(c.a)("success",Translator.trans("admin_v2.information_collect.close.success_hint"),1),window.location.reload()):Object(c.a)("danger",Translator.trans("admin_v2.information_collect.close.failure_hint"),1)}))})),$("#open-collect").on("click",(function(){confirm(Translator.trans("admin_v2.information_collect.open.hint"))&&$.post($(this).data("url"),(function(n){n?(Object(c.a)("success",Translator.trans("admin_v2.information_collect.open.success_hint"),1),window.location.reload()):Object(c.a)("danger",Translator.trans("admin_v2.information_collect.open.failure_hint"),1)}))}))}}]),n}();new l}});