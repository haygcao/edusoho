!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static-dist/",r(r.s=755)}({755:function(e,t){$(document).ready(function(){localStorage.getItem("question-bank-hasvisit")||($("#questionBankModal").modal("show"),localStorage.setItem("question-bank-hasvisit",!0))}),$(".js-model-close").click(function(){$("#questionBankModal").modal("hide")}),$(".question-bank-wrap").each(function(){var e=$(this).find(".question-bank-text");e.text();e.height()>$(this).height()&&$(this).addClass("question-bank-eslipise")}),$('[name="categoryId"]').select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first"})}});