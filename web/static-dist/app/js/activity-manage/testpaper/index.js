!function(l){function e(e){for(var t,n,i=e[0],r=e[1],a=e[2],o=0,s=[];o<i.length;o++)n=i[o],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&s.push(d[n][0]),d[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t]);for(p&&p(e);s.length;)s.shift()();return u.push.apply(u,a||[]),c()}function c(){for(var e,t=0;t<u.length;t++){for(var n=u[t],i=!0,r=1;r<n.length;r++){var a=n[r];0!==d[a]&&(i=!1)}i&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var n={},d={37:0},u=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=l,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var p=i;u.push([883,0]),c()}({883:function(e,t,n){"use strict";n.r(t);var i=n(42),r=n.n(i),a=n(6),o=n.n(a),s=n(0),l=n.n(s),c=n(1),d=n.n(c),u=n(98);new(function(){function t(e){l()(this,t),this.$element=e,this.$step2_form=this.$element.find("#step2-form"),this.$step3_form=this.$element.find("#step3-form"),this.$parentiframe=$(window.parent.document).find("#task-create-content-iframe"),this.scoreSlider=null,this._init()}return d()(t,[{key:"_init",value:function(){Object(u.a)(),this.setValidateRule(),this.initEvent(),this.initStepForm2()}},{key:"initEvent",value:function(){var t=this;this.$element.find("#testpaper-media").on("change",function(e){return t.changeTestpaper(e)}),this.$element.find("input[name=doTimes]").on("change",function(e){return t.showRedoInterval(e)}),this.$element.find('input[name="testMode"]').on("change",function(e){return t.startTimeCheck(e)}),this.$element.find('input[name="length"]').on("blur",function(e){return t.changeEndTime(e)}),this.$element.find("#condition-select").on("change",function(e){return t.changeCondition(e)}),this.initSelectTestpaper(this.$element.find("#testpaper-media").find("option:selected"),$('[name="finishScore"]').val())}},{key:"setValidateRule",value:function(){$.validator.addMethod("arithmeticFloat",function(e,t){return this.optional(t)||/^[0-9]+(\.[0-9]?)?$/.test(e)},$.validator.format(Translator.trans("activity.testpaper_manage.arithmetic_float_error_hint"))),$.validator.addMethod("positiveInteger",function(e,t){return this.optional(t)||/^[1-9]\d*$/.test(e)},$.validator.format(Translator.trans("activity.testpaper_manage.positive_integer_error_hint")))}},{key:"initStepForm2",value:function(){var e=this.$step2_form.validate({onkeyup:!1,rules:{title:{required:!0,trim:!0,maxlength:50,course_title:!0},mediaId:{required:!0,digits:!0},length:{required:!0,digits:!0},startTime:{required:function(){return 1==$('[name="doTimes"]:checked').val()&&"realTime"==$('[name="testMode"]:checked').val()},DateAndTime:function(){return 1==$('[name="doTimes"]:checked').val()&&"realTime"==$('[name="testMode"]:checked').val()}},redoInterval:{required:function(){return 0==$('[name="doTimes"]:checked').val()},arithmeticFloat:!0,max:1e9}},messages:{mediaId:{required:Translator.trans("activity.testpaper_manage.media_error_hint")},redoInterval:{max:Translator.trans("activity.testpaper_manage.max_error_hint")}}});this.$step2_form.data("validator",e)}},{key:"initSelectTestpaper",value:function(e,t){var n,i=1<arguments.length&&void 0!==t?t:"",r=e.val();""!=r?(this.getItemsTable(e.closest("select").data("getTestpaperItems"),r),n=e.data("score"),""==i&&(i=Math.ceil(.6*n)),$("#score-single-input").val(i),$(".js-score-total").text(n),$('input[name="title"]').val()||$('input[name="title"]').val(e.text()),this.initScoreSlider(o()(i),o()(n))):$("#questionItemShowDiv").hide()}},{key:"changeTestpaper",value:function(e){var t=$(e.currentTarget).find("option:selected");this.initSelectTestpaper(t)}},{key:"showRedoInterval",value:function(e){1==$(e.currentTarget).val()?($("#lesson-redo-interval-field").closest(".form-group").hide(),$(".starttime-check-div").show(),this.dateTimePicker()):($("#lesson-redo-interval-field").closest(".form-group").show(),$(".starttime-check-div").hide())}},{key:"startTimeCheck",value:function(e){"realTime"==$(e.currentTarget).val()?($(".starttime-input").removeClass("hidden"),this.dateTimePicker()):$(".starttime-input").addClass("hidden")}},{key:"changeEndTime",value:function(){$('input[name="startTime"]:visible').val()}},{key:"changeCondition",value:function(e){"score"!=$(e.currentTarget).find("option:selected").val()?$(".js-score-form-group").addClass("hidden"):$(".js-score-form-group").removeClass("hidden")}},{key:"initScoreSlider",value:function(e,n){var t=document.getElementById("score-slider"),i={start:e,connect:[!0,!1],tooltips:[!0],step:1,range:{min:0,max:n}};this.scoreSlider?this.scoreSlider.updateOptions(i):(this.scoreSlider=noUiSlider.create(t,i),t.noUiSlider.on("update",function(e,t){$(".noUi-tooltip").text("".concat((e[t]/n*100).toFixed(0),"%")),$(".js-score-tooltip").css("left","".concat((e[t]/n*100).toFixed(0),"%")),$(".js-passScore").text(o()(e[t])),$('input[name="finishScore"]').val(o()(e[t]))}));var r=Translator.trans("activity.testpaper_manage.pass_score_hint",{passScore:'<span class="js-passScore">'+e+"</span>"}),a='<div class="score-tooltip js-score-tooltip"><div class="tooltip top" role="tooltip" style="">\n      <div class="tooltip-arrow"></div>\n      <div class="tooltip-inner ">\n        '.concat(r,"\n      </div>\n      </div></div>");$(".noUi-handle").append(a),$(".noUi-tooltip").text("".concat((e/n*100).toFixed(0),"%")),$(".js-score-tooltip").css("left","".concat((e/n*100).toFixed(0),"%"))}},{key:"getItemsTable",value:function(e,t){$.post(e,{testpaperId:t},function(e){$("#questionItemShowTable").html(e),$("#questionItemShowDiv").show()})}},{key:"dateTimePicker",value:function(){var t=this,e=new Date,n=$('input[name="startTime"]');!n.is(":visible")||""!=n.val()&&"0"!=n.val()||n.val(e.Format("yyyy-MM-dd hh:mm")),n.datetimepicker({autoclose:!0,format:"yyyy-mm-dd hh:ii",language:document.documentElement.lang,minView:"hour",endDate:new Date(r()()+31536e7)}).on("show",function(e){t.$parentiframe.height($("body").height()+240)}).on("hide",function(e){t.$step2_form.data("validator").form(),t.$parentiframe.height($("body").height())}).on("changeDate",function(e){e.date.valueOf()}),n.datetimepicker("setStartDate",e)}}]),t}())($("#iframe-content"))}});