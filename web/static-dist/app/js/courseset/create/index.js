!function(e){function t(t){for(var n,u,s=t[0],a=t[1],l=t[2],p=0,f=[];p<s.length;p++)u=s[p],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&f.push(i[u][0]),i[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);f.length;)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var a=r[s];0!==i[a]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},i={220:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=a;o.push([1419,0]),r()}({1419:function(e,t,r){"use strict";r.r(t);var n=r(2),i=r.n(n),o=r(3),u=r.n(o);new(function(){function e(t){i()(this,e),this.$element=t,this.$courseSetType=this.$element.find(".js-courseSetType"),this.$currentCourseSetType=this.$element.find(".js-courseSetType.active"),this.init()}return u()(e,[{key:"init",value:function(){var e=this;this.validator=this.$element.validate({rules:{title:{byte_maxlength:200,required:!0,trim:!0,course_title:!0}},messages:{title:{required:Translator.trans("course_set.title_required_error_hint"),trim:Translator.trans("course_set.title_required_error_hint")}}}),this.$courseSetType.click((function(t){e.$courseSetType.removeClass("active"),e.$currentCourseSetType=$(t.currentTarget).addClass("active");var r=e.$currentCourseSetType.data("type");$('input[name="type"]').val(r);var n=$("#course_title");"live"===r&&(n.rules("remove"),n.rules("add",{required:!0,byte_maxlength:200,trim:!0,open_live_course_title:!0}))}))}}]),e}())($("#courseset-create-form"))}});