!function(t){function e(e){for(var i,r,o=e[0],c=e[1],u=e[2],h=0,d=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);for(l&&l(e);d.length;)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={382:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([1474,0]),n()}({11:function(t,e,n){var i=n(37);function a(t,e,n,a,s,r,o){try{var c=t[r](o),u=c.value}catch(t){return void n(t)}c.done?e(u):i.resolve(u).then(a,s)}t.exports=function(t){return function(){var e=this,n=arguments;return new i((function(i,s){var r=t.apply(e,n);function o(t){a(r,i,s,o,c,"next",t)}function c(t){a(r,i,s,o,c,"throw",t)}o(void 0)}))}}},1474:function(t,e,n){"use strict";n.r(e);var i=n(21),a=n.n(i),s=n(5),r=n.n(s),o=n(37),c=n.n(o),u=n(11),l=n.n(u),h=n(3),d=n.n(h),f=n(4),v=n.n(f),p=n(442),m=n(9);new(function(){function t(e){d()(this,t),this.$element=e,this.step=1;var n=$("#task-create-type");this.taskConfig={type:n.data("editorType"),mode:n.data("editorMode"),contentUrl:n.data("contentUrl"),finishUrl:n.data("finishUrl"),saveUrl:n.data("saveUrl")},this.$taskType=n,this.$taskContent=$("#task-create-content"),this.$taskFinish=$("#task-create-finish"),this.$taskSubmit=$("#course-tasks-submit"),this.$contentIframe=$("#task-create-content-iframe"),this.$finishIframe=$("#task-create-finish-iframe"),$("#task-create-content-iframe, #task-create-finish-iframe").iFrameResize(),this._init(),this._initEvent()}var e,n,i;return v()(t,[{key:"_initEvent",value:function(){var t=this;this.$taskSubmit.click((function(e){return t._onSave()})),$("#course-tasks-next").click((function(e){return t._onNext(e)})),$("#course-tasks-prev").click((function(e){return t._onPrev(e)})),"edit"!=this.taskConfig.mode?$(".js-course-tasks-item").click((function(e){return t._onSetType(e)})):$(".delete-task").click((function(e){return t._onDelete(e)}))}},{key:"_init",value:function(){this._inItStep1form(),"edit"==this.taskConfig.mode?this._doNext():this._switchPage()}},{key:"_onNext",value:function(){var t=this;if(1!==this.step)return 2===this.step?(window.ltc.emitChild("task-create-content-iframe","getValidate"),void window.ltc.once("returnValidate",(function(e){e.valid&&t._doNext()}))):void 0;this._doNext()}},{key:"_onPrev",value:function(){1!==this.step&&(this.step-=1,this._switchPage())}},{key:"_doNext",value:function(){this.step+=1,this._switchPage(),this.$element.trigger("afterNext")}},{key:"_onSetType",value:function(t){var e=$(t.currentTarget).addClass("active"),n=e.data("type");this.type!=n&&(e.siblings().removeClass("active"),this.$finishIframe.attr("src",""),$('[name="mediaType"]').val(n),this.taskConfig.contentUrl=e.data("contentUrl"),this.taskConfig.finishUrl=e.data("finishUrl"),this.type=n),this._onNext(t)}},{key:"getActivityFinishCondition",value:(i=l()(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,t.abrupt("return",new c.a((function(t,n){e.$finishIframe.attr("src")||t({}),window.ltc.emitChild("task-create-finish-iframe","getCondition"),window.ltc.once("returnCondition",(function(e){e.valid?t(e.data):n()}))})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"getActivityContent",value:(n=l()(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new c.a((function(t,e){window.ltc.emitChild("task-create-content-iframe","getActivity"),window.ltc.once("returnActivity",(function(n){n.valid?t(n.data):e()}))})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"_onSave",value:(e=l()(r.a.mark((function t(){var e,n=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$taskSubmit.attr("disabled",!0),t.next=3,this.getActivityContent().then((function(t){return e=t,n.getActivityFinishCondition()})).then((function(t){n.$taskSubmit.button("loading");var i=a()(n._getFormSerializeObject($("#step1-form")),e,t);$.post(n.taskConfig.saveUrl,i).done((function(t){n.$element.modal("hide"),t&&$("#sortable-list").trigger("addItem",t)})).fail((function(t){n.$taskSubmit.button("reset")}))})).catch((function(){n.$taskSubmit.attr("disabled",!1),n.$taskSubmit.button("reset")}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"_onDelete",value:function(t){var e=this,n=$(t.currentTarget).data("url");void 0!==n&&confirm(Translator.trans(Translator.trans("task_manage.delete_hint")))&&$.post(n).then((function(t){Object(m.a)("success",Translator.trans("task_manage.delete_success_hint")),e.$element.modal("hide"),$("#sortable-list").trigger("removeItem"),document.location.reload()})).fail((function(t){Object(m.a)("warning",Translator.trans("task_manage.delete_failed_hint"))}))}},{key:"_switchPage",value:function(){this._renderStep(),this._renderContent(),1==this.step&&this._rendButton(1),2==this.step&&this._initContentIframe(),3==this.step&&this._initFinishIframe()}},{key:"_initContentIframe",value:function(){var t=this;this.taskConfig.contentUrl&&(this.$contentIframe.attr("src")!=this.taskConfig.contentUrl?(this.$contentIframe.hide(),this.$contentIframe.attr("src",this.taskConfig.contentUrl),this.$contentIframe.load(Object(p.a)((function(){t._rendButton(2)}),this.$taskContent))):this._rendButton(2))}},{key:"_initFinishIframe",value:function(){var t=this;this.taskConfig.finishUrl&&(this.$finishIframe.attr("src")!=this.taskConfig.finishUrl?(this.$finishIframe.hide(),this.$finishIframe.attr("src",this.taskConfig.finishUrl),this.$finishIframe.load(Object(p.a)((function(){t._sendContent(),t._rendButton(3)}),this.$taskFinish))):(this._sendContent(),this._rendButton(3)))}},{key:"_sendContent",value:function(){window.ltc.once("returnValidate",(function(t){window.ltc.emitChild("task-create-finish-iframe","getContent",t)})),window.ltc.emitChild("task-create-content-iframe","getValidate")}},{key:"_inItStep1form",value:function(){var t=$("#step1-form"),e=t.validate({rules:{mediaType:{required:!0}},messages:{mediaType:Translator.trans("validate.choose_item.message")}});t.data("validator",e)}},{key:"_rendButton",value:function(t){1===t&&this.$element.find(".modal-footer").children().addClass("hidden"),2===t&&("edit"===this.taskConfig.mode?this.$element.find("#course-tasks-prev").addClass("hidden").siblings().removeClass("hidden"):this.$element.find(".modal-footer").children().removeClass("hidden")),3===t&&this.$element.find("#course-tasks-next").addClass("hidden").siblings().removeClass("hidden")}},{key:"_renderStep",value:function(){this.$setp||(this.$step=$("#task-create-step"));var t=this.$step.find("li").eq(this.step-1);t.addClass("doing").prev().addClass("done").removeClass("doing"),t.next().removeClass("doing").removeClass("done")}},{key:"_renderContent",value:function(){var t={1:this.$taskType,2:this.$taskContent,3:this.$taskFinish};t[this.step]&&t[this.step].removeClass("hidden").siblings("div").addClass("hidden")}},{key:"_getFormSerializeObject",value:function(t){var e={},n=t.serializeArray();return $.each(n,(function(){e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""})),e}}]),t}())($("#modal")),$('[data-toggle="popover"]').popover({})},26:function(t,e){t.exports=jQuery},442:function(t,e,n){"use strict";var i=arguments,a=function(t,e){var n=e.find(".load-animation");0==n.length?(n=$('<div class="load-animation"></div>')).prependTo(e).nextAll().hide():n.show();var a=[],s=t.length;return function(e){return a.push(e),n.hide().nextAll().show(),a.length<s?i.callee:t.apply(null,a)}};e.a=a},5:function(t,e,n){t.exports=n(384)}});