!function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={108:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([1002,0]),n()}({1002:function(e,t,n){"use strict";n.r(t);var a=n(13),i=$("#video-effective-time-form");$(".js-setting-submit").click((function(){var e=$(".js-check-radio"),t=e.data("value"),n=$('input:radio[name="statistical_dimension"]:checked').val();t!==n?cd.confirm({content:'<div style="text-align:center;">'+Translator.trans("admin_v2.video_effective_time_setting.cancel.hint")+"</div>",okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel"),className:""}).on("ok",(function(){$.get(e.data("url"),(function(e){e?$.post(i.data("url"),i.serialize()).success((function(e){$(".js-check-radio").data("value",n),Object(a.a)("success",Translator.trans("site.save_success_hint"))})).fail((function(e,t,n){Object(a.a)("danger",e.responseJSON.error.message)})):Object(a.a)("danger",Translator.trans("admin_v2.video_effective_time_setting.refreshing_hint"))}))})).on("cancel",(function(){})):$.post(i.data("url"),i.serialize()).success((function(e){Object(a.a)("success",Translator.trans("site.save_success_hint"))})).fail((function(e,t,n){Object(a.a)("danger",e.responseJSON.error.message)}))})),$('input:radio[name="play_rule"]').click((function(){"auto_pause"==$('input:radio[name="play_rule"]:checked').val()?$(".js-play-role-help").html(Translator.trans("admin_v2.video_effective_time_setting.play_rule.auto_pause.help_block")):$(".js-play-role-help").html(Translator.trans("admin_v2.video_effective_time_setting.play_rule.no_action.help_block"))})),$('input:radio[name="statistical_dimension"]').click((function(){"page"!=$('input:radio[name="statistical_dimension"]:checked').val()?$(".js-statistical-dimension-help").html(Translator.trans("admin_v2.video_effective_time_setting.statistical_dimension.playing.help_block")):$(".js-statistical-dimension-help").html(Translator.trans("admin_v2.video_effective_time_setting.statistical_dimension.page.help_block"))}))},28:function(e,t){e.exports=jQuery}});