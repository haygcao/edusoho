!function(e){function t(t){for(var r,s,a=t[0],u=t[1],c=t[2],f=0,p=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={210:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;o.push([855,0]),n()}({855:function(e,t,n){"use strict";n.r(t);var r=n(188),i=$(".js-origin-header"),o=$(".js-origin-header-content"),s=$(".js-new-header");$(".js-shrink-item").on("click",".js-shrink-courseset",(function(e){$(e.currentTarget).addClass("hidden"),i.animate({height:"40px"},(function(){o.animate({opacity:"0"},"fast"),s.removeClass("hidden").animate({opacity:"1"},"fast")}))})),s.on("click",".js-show-courseset",(function(e){$(e.currentTarget);i.animate({height:"122px"},(function(){o.animate({opacity:"1"},"fast"),s.animate({opacity:"0"},"fast").addClass("hidden"),$(".js-shrink-courseset").removeClass("hidden")}))})),Object(r.a)(".js-courseset-publish-btn",{title:"course_set.manage.publish_title",hint:"course_set.manage.publish_hint",success:"course_set.manage.publish_success_hint",fail:"course_set.manage.publish_fail_hint"})}});