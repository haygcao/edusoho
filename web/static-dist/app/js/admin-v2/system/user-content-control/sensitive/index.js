!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static-dist/",n(n.s=752)}({752:function(t,e){$("#keyword-table").on("click",".delete-btn",(function(){confirm(Translator.trans("admin.keyword.delete_hint"))&&$.post($(this).data("url"),(function(){window.location.reload()}))})),$("#keyword-table").on("click",".replaced-btn",(function(){$.post($(this).data("url"),(function(){window.location.reload()}))})),$("#keyword-table").on("click",".banned-btn",(function(){$.post($(this).data("url"),(function(){window.location.reload()}))})),$("body").on("click","#replaced",(function(){var t=$(this),e=t.data("text");t.siblings(".help-block").text(e)})),$("body").on("click","#banned",(function(){var t=$(this),e=t.data("text");t.siblings(".help-block").text(e)}))}});