!function(c){function t(t){for(var e,n,r=t[0],i=t[1],o=t[2],a=0,s=[];a<r.length;a++)n=r[a],Object.prototype.hasOwnProperty.call(h,n)&&h[n]&&s.push(h[n][0]),h[n]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(c[e]=i[e]);for(f&&f(t);s.length;)s.shift()();return l.push.apply(l,o||[]),u()}function u(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==h[o]&&(r=!1)}r&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var n={},h={349:0},l=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=c,a.c=n,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var f=r;l.push([883,0]),u()}({15:function(t,e){t.exports=jQuery},308:function(t,e,n){t.exports=n(806)},370:function(t,e,n){"use strict";var o=arguments;e.a=function(e,t){var n=t.find(".load-animation");0==n.length?(n=$('<div class="load-animation"></div>')).prependTo(t).nextAll().hide():n.show();var r=[],i=e.length;return function(t){return r.push(t),n.hide().nextAll().show(),r.length<i?o.callee:e.apply(null,r)}}},385:function(t,e,n){var u=n(21);function c(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):u.resolve(c).then(r,i)}t.exports=function(s){return function(){var t=this,a=arguments;return new u(function(e,n){var r=s.apply(t,a);function i(t){c(r,e,n,i,o,"next",t)}function o(t){c(r,e,n,i,o,"throw",t)}i(void 0)})}}},806:function(t,e,n){var r=function(a){"use strict";var l,t=Object.prototype,h=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},i=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",r=e.toStringTag||"@@toStringTag";function o(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{o({},"")}catch(t){o=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o,a,s,c,i=e&&e.prototype instanceof g?e:g,u=Object.create(i.prototype),h=new j(r||[]);return u._invoke=(o=t,a=n,s=h,c=d,function(t,e){if(c===v)throw new Error("Generator is already running");if(c===m){if("throw"===t)throw e;return S()}for(s.method=t,s.arg=e;;){var n=s.delegate;if(n){var r=function t(e,n){var r=e.iterator[n.method];if(r===l){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=l,t(e,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=f(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=l),n.delegate=null,y):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}(n,s);if(r){if(r===y)continue;return r}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(c===d)throw c=m,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);c=v;var i=f(o,a,s);if("normal"===i.type){if(c=s.done?m:p,i.arg===y)continue;return{value:i.arg,done:s.done}}"throw"===i.type&&(c=m,s.method="throw",s.arg=i.arg)}}),u}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=s;var d="suspendedStart",p="suspendedYield",v="executing",m="completed",y={};function g(){}function c(){}function u(){}var w={};w[i]=function(){return this};var k=Object.getPrototypeOf,_=k&&k(k(L([])));_&&_!==t&&h.call(_,i)&&(w=_);var b=u.prototype=g.prototype=Object.create(w);function $(t){["next","throw","return"].forEach(function(e){o(t,e,function(t){return this._invoke(e,t)})})}function x(c,u){var e;this._invoke=function(n,r){function t(){return new u(function(t,e){!function e(t,n,r,i){var o=f(c[t],c,n);if("throw"!==o.type){var a=o.arg,s=a.value;return s&&"object"==typeof s&&h.call(s,"__await")?u.resolve(s.__await).then(function(t){e("next",t,r,i)},function(t){e("throw",t,r,i)}):u.resolve(s).then(function(t){a.value=t,r(a)},function(t){return e("throw",t,r,i)})}i(o.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(h.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=l,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:l,done:!0}}return((c.prototype=b.constructor=u).constructor=c).displayName=o(u,r,"GeneratorFunction"),a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,o(t,r,"GeneratorFunction")),t.prototype=Object.create(b),t},a.awrap=function(t){return{__await:t}},$(x.prototype),x.prototype[n]=function(){return this},a.AsyncIterator=x,a.async=function(t,e,n,r,i){void 0===i&&(i=Promise);var o=new x(s(t,e,n,r),i);return a.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},$(b),o(b,r,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},a.keys=function(n){var r=[];for(var t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&h.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=l)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return o.type="throw",o.arg=n,r.next=t,e&&(r.method="next",r.arg=l),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var i=this.tryEntries[e],o=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var a=h.call(i,"catchLoc"),s=h.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&h.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r,i=n.completion;return"throw"===i.type&&(r=i.arg,O(n)),r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=l),y}},a}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},883:function(t,e,n){"use strict";n.r(e);var r=n(10),i=n.n(r),o=n(308),a=n.n(o),s=n(21),c=n.n(s),u=n(385),h=n.n(u),l=n(0),f=n.n(l),d=n(1),p=n.n(d),v=n(370),m=n(4);new(function(){function n(t){f()(this,n),this.$element=t,this.step=1;var e=$("#task-create-type");this.taskConfig={type:e.data("editorType"),mode:e.data("editorMode"),contentUrl:e.data("contentUrl"),finishUrl:e.data("finishUrl"),saveUrl:e.data("saveUrl")},this.$taskType=e,this.$taskContent=$("#task-create-content"),this.$taskFinish=$("#task-create-finish"),this.$taskSubmit=$("#course-tasks-submit"),this.$contentIframe=$("#task-create-content-iframe"),this.$finishIframe=$("#task-create-finish-iframe"),$("#task-create-content-iframe, #task-create-finish-iframe").iFrameResize(),this._init(),this._initEvent()}var t,e,r;return p()(n,[{key:"_initEvent",value:function(){var e=this;this.$taskSubmit.click(function(t){return e._onSave()}),$("#course-tasks-next").click(function(t){return e._onNext(t)}),$("#course-tasks-prev").click(function(t){return e._onPrev(t)}),"edit"!=this.taskConfig.mode?$(".js-course-tasks-item").click(function(t){return e._onSetType(t)}):$(".delete-task").click(function(t){return e._onDelete(t)})}},{key:"_init",value:function(){this._inItStep1form(),"edit"==this.taskConfig.mode?this._doNext():this._switchPage()}},{key:"_onNext",value:function(){var e=this;if(1!==this.step)return 2===this.step?(window.ltc.emitChild("task-create-content-iframe","getValidate"),void window.ltc.once("returnValidate",function(t){t.valid&&e._doNext()})):void 0;this._doNext()}},{key:"_onPrev",value:function(){1!==this.step&&(--this.step,this._switchPage())}},{key:"_doNext",value:function(){this.step+=1,this._switchPage(),this.$element.trigger("afterNext")}},{key:"_onSetType",value:function(t){var e=$(t.currentTarget).addClass("active"),n=e.data("type");this.type!=n&&(e.siblings().removeClass("active"),this.$finishIframe.attr("src",""),$('[name="mediaType"]').val(n),this.taskConfig.contentUrl=e.data("contentUrl"),this.taskConfig.finishUrl=e.data("finishUrl"),this.type=n),this._onNext(t)}},{key:"getActivityFinishCondition",value:(r=h()(a.a.mark(function t(){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this,t.abrupt("return",new c.a(function(e,n){r.$finishIframe.attr("src")||e({}),window.ltc.emitChild("task-create-finish-iframe","getCondition"),window.ltc.once("returnCondition",function(t){t.valid?e(t.data):n()})}));case 2:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},{key:"getActivityContent",value:(e=h()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new c.a(function(e,n){window.ltc.emitChild("task-create-content-iframe","getActivity"),window.ltc.once("returnActivity",function(t){t.valid?e(t.data):n()})}));case 2:case"end":return t.stop()}},t,this)})),function(){return e.apply(this,arguments)})},{key:"_onSave",value:(t=h()(a.a.mark(function t(){var n,r=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$taskSubmit.attr("disabled",!0),t.next=3,this.getActivityContent().then(function(t){return n=t,r.getActivityFinishCondition()}).then(function(t){r.$taskSubmit.button("loading");var e=i()(r._getFormSerializeObject($("#step1-form")),n,t);$.post(r.taskConfig.saveUrl,e).done(function(t){r.$element.modal("hide"),t&&$("#sortable-list").trigger("addItem",t)}).fail(function(t){r.$taskSubmit.button("reset")})}).catch(function(){r.$taskSubmit.attr("disabled",!1),r.$taskSubmit.button("reset")});case 3:case"end":return t.stop()}},t,this)})),function(){return t.apply(this,arguments)})},{key:"_onDelete",value:function(t){var e=this,n=$(t.currentTarget).data("url");void 0!==n&&confirm(Translator.trans(Translator.trans("task_manage.delete_hint")))&&$.post(n).then(function(t){Object(m.a)("success",Translator.trans("task_manage.delete_success_hint")),e.$element.modal("hide"),document.location.reload()}).fail(function(t){Object(m.a)("warning",Translator.trans("task_manage.delete_failed_hint"))})}},{key:"_switchPage",value:function(){this._renderStep(),this._renderContent(),1==this.step&&this._rendButton(1),2==this.step&&this._initContentIframe(),3==this.step&&this._initFinishIframe()}},{key:"_initContentIframe",value:function(){var t=this;this.taskConfig.contentUrl&&(this.$contentIframe.attr("src")!=this.taskConfig.contentUrl?(this.$contentIframe.hide(),this.$contentIframe.attr("src",this.taskConfig.contentUrl),this.$contentIframe.load(Object(v.a)(function(){t._rendButton(2)},this.$taskContent))):this._rendButton(2))}},{key:"_initFinishIframe",value:function(){var t=this;this.taskConfig.finishUrl&&(this.$finishIframe.attr("src")!=this.taskConfig.finishUrl?(this.$finishIframe.hide(),this.$finishIframe.attr("src",this.taskConfig.finishUrl),this.$finishIframe.load(Object(v.a)(function(){t._sendContent(),t._rendButton(3)},this.$taskFinish))):(this._sendContent(),this._rendButton(3)))}},{key:"_sendContent",value:function(){window.ltc.once("returnValidate",function(t){window.ltc.emitChild("task-create-finish-iframe","getContent",t)}),window.ltc.emitChild("task-create-content-iframe","getValidate")}},{key:"_inItStep1form",value:function(){var t=$("#step1-form"),e=t.validate({rules:{mediaType:{required:!0}},messages:{mediaType:Translator.trans("validate.choose_item.message")}});t.data("validator",e)}},{key:"_rendButton",value:function(t){1===t&&this.$element.find(".modal-footer").children().addClass("hidden"),2===t&&("edit"===this.taskConfig.mode?this.$element.find("#course-tasks-prev").addClass("hidden").siblings().removeClass("hidden"):this.$element.find(".modal-footer").children().removeClass("hidden")),3===t&&this.$element.find("#course-tasks-next").addClass("hidden").siblings().removeClass("hidden")}},{key:"_renderStep",value:function(){this.$setp||(this.$step=$("#task-create-step"));var t=this.$step.find("li").eq(this.step-1);t.addClass("doing").prev().addClass("done").removeClass("doing"),t.next().removeClass("doing").removeClass("done")}},{key:"_renderContent",value:function(){var t={1:this.$taskType,2:this.$taskContent,3:this.$taskFinish};t[this.step]&&t[this.step].removeClass("hidden").siblings("div").addClass("hidden")}},{key:"_getFormSerializeObject",value:function(t){var e={},n=t.serializeArray();return $.each(n,function(){e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e}}]),n}())($("#modal"))}});