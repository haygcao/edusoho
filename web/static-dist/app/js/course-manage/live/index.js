!function(t){function e(e){for(var n,o,c=e[0],l=e[1],s=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);f.length;)f.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var l=r[c];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={195:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;i.push([1184,0]),r()}({1184:function(t,e,r){"use strict";r.r(e);var n=r(9);!function(){if(!$("#detail-data").length)return;if(!$("#detail-data").data("showable"))return void Object(n.a)("warning",Translator.trans("course_manage.live_statistics.live_not_end"));$.get($("#detail-data").data("url"),(function(t){(t.checkin.errorCode||t.visitor.errorCode)&&(4002==t.checkin.errorCode?$("#checkin-detail").html('<h4 class="col-md-12">'+Translator.trans("course_manage.live_statistics.checkin_not_support")+"</h4>"):Object(n.a)("warning",Translator.trans("course_manage.live_statistics.empty_tips"))),t.checkin.errorCode||t.visitor.errorCode||t.checkin.data.success&&t.visitor.data.success||Object(n.a)("warning",Translator.trans("course_manage.live_statistics.data_not_valid"));var e=t.checkin.data,r=t.visitor.data;if($("#checkin-time").length&&e&&e.time&&$("#checkin-time").html(e.time),$("#checkin-data").length&&e&&e.detail&&$("#checkin-data").html(e.detail.length),$("#visitor-learn-time").length&&r&&r.totalLearnTime){var a=$("#course-student-number").html();$("#visitor-learn-time").html(a>0?Math.ceil(r.totalLearnTime/a):0)}}))}()},26:function(t,e){t.exports=jQuery}});