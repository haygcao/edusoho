!function(e){function t(t){for(var r,o,n=t[0],c=t[1],l=t[2],u=0,h=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);h.length;)h.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],r=!0,n=1;n<s.length;n++){var c=s[n];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},a={339:0},i=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var n=window.webpackJsonp=window.webpackJsonp||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var d=c;i.push([1472,0]),s()}({1472:function(e,t,s){"use strict";s.r(t);var r=s(33),a=s.n(r),i=s(4),o=s.n(i),n=s(5),c=s.n(n),l=s(211),d=(s(583),s(11));new(function(){function e(t){o()(this,e),this.$form=t,this.$description=this.$form.find('[name="description"]'),this.$questionForm=$("#testpaper-items-manager"),this.validator=null,this.difficultySlider=null,this.scoreSlider=null,this.$scoreModal=$(".js-score-modal"),this.$modal=$("#testpaper-confirm-modal"),this.sections=[],this.questionsCount=0,this.$score=null,this.$typeNav=this.$form.find("#testpaper-question-nav"),new l.a(this.$questionForm),this._initEvent(),this._initValidate(),this._initScoreValidator(),this._initTypeSort()}return c()(e,[{key:"_initEvent",value:function(){var e=this;this.$form.on("click",".js-request-save",(function(t){return e._confirmSave(t)})),this.$modal.on("click",".js-confirm-submit",(function(t){return e._submitSave(t)})),this.$typeNav.on("click","li",(function(t){return e._changeNav(t)})),this.$form.on("click",'[data-role="item-delete-btn"]',(function(t){return e.deleteQuestion(t)})),this.$form.on("click",'[data-role="batch-delete-btn"]',(function(t){return e.batchDelete(t)})),this.$form.on("click",'[data-role="set-score-btn"]',(function(t){return e.showScoreModal(t)})),this.$form.on("click",".js-pick-modal",(function(t){return e.showPickModal(t)})),this.$form.on("lengthChange",'[data-role="question-body"]',(function(t){return e.changeQuestionCount(t)})),this.$scoreModal.on("click",".js-batch-score-confirm",(function(t){return e.batchSetScore(t)})),$(".modal").on("selectQuestion",(function(t,s){return e.selectQuestion(t,s)})),this.initSortList(),this.initTestpaperScore(),$(".js-score").on("change",(function(e){var t=$(this).parents(".score-item"),s=Number(t.find(".js-score-item-num").html()),r=Number($(this).val());t.find(".js-score-totle").html(s*r)}))}},{key:"initTestpaperScore",value:function(){var e=this;this.$score=$("#testpaper-items-manager").find(".score-validate"),this.$score.on("blur",(function(t){return e._processScore(t)}))}},{key:"_processScore",value:function(e){var t=$(e.target);return this._validateQuestionScore(t),!1}},{key:"_confirmSave",value:function(){if(this.validator.form()){this.questionsCount=0,this.questions=[],this.sections=[];var e=this._calTestpaperStats(),t="";$.each(e,(function(e,s){var r="<tr>";r+="<td>".concat(s.name,"</td>"),r+="<td>".concat(s.count,"</td>"),r+="<td>".concat(s.score.toFixed(1),"</td>"),t+=r+="</tr>"})),this.$modal.find(".detail-tbody").html(t),this.$modal.modal("show")}}},{key:"_calTestpaperStats",value:function(){var e={},t=this,s=1;this.$typeNav.find("li").each((function(){var r=$(this).find("a").data("type"),a=$(this).find("a").data("name"),i=1,o=[];e[r]={name:a,count:0,score:0,missScore:0},t.$questionForm.find("#testpaper-table-"+r).find(".js-item").each((function(){var s=$(this).data("type"),a={id:$(this).data("id"),seq:i++},n=[];if("material"==s)$(this).nextUntil(".js-item").each((function(){var s=t.getItemQuestion(this);n.push(s),e[r].count++,e[r].score+=s.score}));else{var c=t.getItemQuestion(this);n.push(c),e[r].score+=c.score,e[r].count++}a.questions=n,o.push(a)})),o.length>0&&t.sections.push({name:a,seq:s++,items:o})}));var r={name:Translator.trans("activity.testpaper_manage.question_total_score"),count:0,score:0};return $.each(e,(function(e,t){r.count+=t.count,r.score+=t.score})),e.total=r,t.questionsCount=r.count,e}},{key:"getItemQuestion",value:function(e){var t={id:$(e).data("questionId"),score:Number($(e).find(".js-score").val())};return"fill"==$(e).data("type")&&"option"==$(e).find(".js-score-type").val()&&(t.score=t.score*$(e).data("questionAnswer").length),"material"==$(e).data("type")&&"text"==$(e).data("questionType")&&"option"==$(e).find(".js-score-type").val()&&(t.score=t.score*$(e).data("questionAnswer").length),$(e).find(".js-score-type").length&&(t.scoreType=$(e).find(".js-score-type").val(),"fill"==$(e).data("type")||"text"==$(e).data("questionType")?t.otherScore=Number($(e).find(".js-score").val()):t.otherScore=Number($(e).find(".js-miss-choice-score").val())),"choice"!==$(e).data("type")&&"uncertain_choice"!==$(e).data("type")||"question"!=$(e).find(".js-score-type").val()||(t.missScore=t.otherScore),console.log(t),t}},{key:"_changeNav",value:function(e){var t=$(e.currentTarget),s=t.children().data("type");this.currentType=s,this.$typeNav.find("li").removeClass("active"),t.addClass("active"),this.$form.find(".js-question-table").addClass("hide"),this.$form.find("#testpaper-table-"+s).removeClass("hide"),this.$form.find('[data-role="batch-select"]').prop("checked",!1),this.$form.find('[data-role="batch-item"]').prop("checked",!1)}},{key:"deleteQuestion",value:function(e){e.stopPropagation();var t=$(e.currentTarget),s=t.closest("tr").data("id"),r=t.closest("tbody");r.find('[data-id="'+s+'"]').remove(),t.closest("tr").remove(),r.trigger("lengthChange"),this.refreshSeqs(r.data("type"))}},{key:"batchDelete",value:function(e){var t=$(e.currentTarget).parents(".js-question-table").find("tbody"),s=this;this.$form.find('[data-role="batch-item"]:checked').each((function(){var e=$(this).val();"material"===$(this).closest("tr").data("type")&&s.$form.find('[data-parent-id="'+e+'"]').remove(),$(this).closest("tr").remove()})),t.trigger("lengthChange")}},{key:"showScoreModal",value:function(e){$(".js-score-modal").find(".score-item").addClass("hidden"),$(".js-score-modal").find(".js-score-item-num").html(0);var t=this.$form.find('[data-role="batch-item"]:checked');if(t.length>0){var s=$(e.currentTarget).data("type");if($(".js-score-modal").find(".js-tab-type").val(s),"material"!==s)$(".js-score-modal").find(".js-score-set-"+s).removeClass("hidden"),$(".js-score-modal").find(".js-score-set-"+s).find(".js-score-item-num").html(t.length);else{var r={single_choice:"single_choice",choice:"choice",uncertain_choice:"uncertain_choice",true_false:"determine",text:"fill",rich_text:"essay"};for(var a in r){var i=this.$form.find(".js-material-checkbox-".concat(a,":checked")).length;$(".js-score-modal").find(".js-score-set-"+r[a]).find(".js-score-item-num").html(i),i>0&&$(".js-score-modal").find(".js-score-set-"+r[a]).removeClass("hidden")}}$(".js-score").each((function(){var e=$(this).parents(".score-item"),t=Number(e.find(".js-score-item-num").html()),s=Number($(this).val());e.find(".js-score-totle").html(t*s)})),this.$scoreModal.modal("show")}}},{key:"batchSetScore",value:function(e){var t=this;if(this.scoreValidator.form()){var s=$(".js-score-modal").find(".js-tab-type").val();switch(s){case"single_choice":t.__setJsScore(s);break;case"choice":case"uncertain_choice":t.__setJsScore(s),t.__setSelectJsScore(s);break;case"determine":t.__setJsScore(s);break;case"fill":t.__setJsScore(s),t.__setSelectJsScore(s);break;case"essay":t.__setJsScore(s);break;default:t.__setMaterialScore(s)}cd.message({type:"success",message:Translator.trans("subject.score_update_success")}),this.$scoreModal.modal("hide")}return!1}},{key:"__setMaterialScore",value:function(){var e=this,t=$("#testpaper-table-material"),s=null;$(".js-score-modal").find(".score-item").each((function(r,a){switch($(this).data("type")){case"single_choice":s=t.find(".js-material-single_choice"),e.__setJsScore("single_choice",s);break;case"choice":s=t.find(".js-material-choice"),e.__setJsScore("choice",s),s=t.find(".js-material-miss-choice"),e.__setSelectJsScore("choice",s);break;case"uncertain_choice":s=t.find(".js-material-uncertain_choice"),e.__setJsScore("uncertain_choice",s),s=t.find(".js-material-miss-uncertain_choice"),e.__setSelectJsScore("uncertain_choice",s);break;case"determine":s=t.find(".js-material-true_false"),e.__setJsScore("determine",s);break;case"fill":s=t.find(".js-material-text"),e.__setJsScore("fill",s),e.__setSelectJsScore("fill",s);break;default:s=t.find(".js-material-rich_text"),e.__setJsScore("essay",s)}}))}},{key:"__setSelectJsScore",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=t||$("#testpaper-table-"+e),r=Number($(".js-score-modal").find(".js-score-set-"+e).find(".js-miss-choice-score").val());s.find(".js-miss-choice-score").val(r);var a=$(".js-score-modal").find(".js-score-set-"+e).find(".js-score-type").val();s.find(".js-score-type").val(a)}},{key:"__setJsScore",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=t||$("#testpaper-table-"+e),r=Number($(".js-score-modal").find(".js-score-set-"+e).find(".js-score").val());s.find(".js-score").val(r)}},{key:"setScore",value:function(e,t){var s=e.find(".js-question-score");if(s.text(t.score),s.attr("data-score",t.score),e.find(".js-miss-score").length>0){var r=e.find(".js-miss-score");r.text(t.missScore),r.attr("data-miss-score",t.missScore)}}},{key:"refreshSeqs",value:function(e){var t=1,s=this.$form.find("#testpaper-table-"+e);s.find("tbody tr").each((function(e,s){var r=$(s);r.hasClass("is-sub-question")||(r.find("td.seq").html(t),t++)})),s.find('[name="questionLength"]').val(t-1>0?t-1:null)}},{key:"changeQuestionCount",value:function(e){var t=$(e.currentTarget),s=t.data("type"),r=0;r="material"===s?t.find("tr.is-sub-question").length:t.find("tr").length,$(".js-count-"+s).html("("+r+")")}},{key:"showPickModal",value:function(e){var t=[],s=$(e.currentTarget);this.$form.find('[name="itemIds[]"]').each((function(){t.push($(this).val())}));var r=$("#modal").modal();$.get(s.data("url"),{exclude_ids:t.join(",")},(function(e){r.html(e)}))}},{key:"selectQuestion",value:function(e,t){var s=this.$form.find(".js-pick-modal").data("pickUrl"),r=this;$.post(s,{typeQuestions:t},(function(e){e&&$.each(e,(function(e,t){var s=r.$questionForm.find("#testpaper-table-"+e).find(".testpaper-table-tbody");s.append(t),s.trigger("lengthChange"),r.refreshSeqs(e),r.initTestpaperScore()}))}))}},{key:"_initEditor",value:function(e){var t=this;if(this.$description.length>0){var s=CKEDITOR.replace(this.$description.attr("id"),{toolbar:"Simple",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:this.$description.data("imageUploadUrl"),height:100});s.on("change",(function(){t.$description.val(s.getData())})),s.on("blur",(function(){t.$description.val(s.getData()),e.form()}))}}},{key:"_initValidate",value:function(){this.validator=this.$form.validate({rules:{name:{required:!0,maxlength:50,trim:!0},description:{maxlength:500,trim:!0},scores:{scoreValidate:!0}},messages:{name:{required:Translator.trans("activity.testpaper_manage.input_title_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:50})},description:{required:Translator.trans("activity.testpaper_manage.input_description_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:500})}}});var e=this;$.validator.addMethod("scoreValidate",(function(t,s){return $("#testpaper-items-manager").find(".jq-validate-error").remove(),$("#testpaper-items-manager").find(".score-validate").each((function(t){e._validateQuestionScore($(this))})),$("#testpaper-items-manager").find(".jq-validate-error").length>0&&Object(d.a)("danger",Translator.trans("testpaper.scoer.validator")),0===$("#testpaper-items-manager").find(".jq-validate-error").length}),$.validator.format(Translator.trans(""))),this._initEditor(this.validator)}},{key:"_initScoreValidator",value:function(){this.scoreValidator=$("#batch-set-score-form").validate({onkeyup:!1,rules:{scores:{scoreSetValidate:!0}},messages:{}});var e=this;$.validator.addMethod("scoreSetValidate",(function(t,s,r){return $("#batch-set-score-form").find(".jq-validate-error").remove(),$("#batch-set-score-form").find(".score-validate").each((function(t){var s=$(this).parents(".js-question-item");if(!s.hasClass("hidden"))if(/^(([1-9]{1}\d{0,2})|([0]{1}))(\.(\d){1})?$/.test($(this).val())){if(e._removeError($(this)),$(this).hasClass("js-miss-choice-score")){var r=s.find(".js-score-type").val();Number($(this).val())>Number(s.find(".js-score").val())&&("question"===r&&e._appendError($(this),Translator.trans("course.miss_score.validator")),"option"===r&&e._appendError($(this),Translator.trans("testpaper.option_score.validator")))}}else e._appendError($(this),Translator.trans("validate.valid_score_input.message"))})),0===$("#batch-set-score-form").find(".jq-validate-error").length}),"")}},{key:"_validateQuestionScore",value:function(e){if(!/^(([1-9]{1}\d{0,2})|([0]{1}))(\.(\d){1})?$/.test(e.val()))return this._appendError(e,Translator.trans("validate.valid_score_input.message")),!1;this._removeError(e);var t=e.parents(".js-question-tr");if("choice"===t.data("questionType")||"uncertain_choice"===t.data("questionType")){var s=t.data("questionAnswer"),r=t.find(".js-score-type").val(),a=Number(t.find(".js-score").val()),i=Number(t.find(".js-miss-choice-score").val());if("question"===r&&i>a&&e.hasClass("js-miss-choice-score"))return this._appendError(e,Translator.trans("course.miss_score.validator")),!1;if("option"===r&&i*s.length>a&&e.hasClass("js-miss-choice-score"))return this._appendError(e,Translator.trans("course.option_score.validator")),!1}}},{key:"_appendError",value:function(e,t){0==e.parents(".js-question-item").find(".jq-validate-error").length&&e.parents(".js-question-item").append('<p class="form-error-message jq-validate-error">'.concat(t,"</p>"))}},{key:"_removeError",value:function(e){e.parents(".js-question-item").find(".jq-validate-error").remove()}},{key:"_submitSave",value:function(e){var t=$(e.currentTarget);if(this.questionsCount>2e3)cd.message({type:"danger",message:Translator.trans("activity.testpaper_manage.questions_length_hint")});else{t.addClass("disabled").text(Translator.trans("task.plugin_redmine_save_hint"));var s={name:this.$form.find("#name-field").val(),description:this.$form.find("#description-field").val()},r=a()(this.sections);$.post(this.$form.data("url"),{baseInfo:s,sections:r},(function(e){e.goto&&(window.location.href=e.goto),e.error&&(Object(d.a)("danger",e.error),t.removeClass("disabled").text(Translator.trans("site.confirm")))}))}}},{key:"_initTypeSort",value:function(){var e;$("#testpaper-question-nav").sortable({handle:".js-move-icon",itemSelector:".question-type-table",placeholder:'<li class="question-type-table question-type-placehoder"></li>',onDrop:function(e,t,s,r){e.removeClass("dragged").removeAttr("style"),$("body").removeClass("dragging")},onDragStart:function(t,s,r){var a=t.offset(),i=s.rootGroup.pointer;e={left:i.left-a.left,top:i.top-a.top},r(t,s)},onDrag:function(t,s){var r=t.height(),a=t.width();t.css({left:s.left-e.left,top:s.top-e.top}),$(".question-type-placehoder").css({height:r,width:a})}})}},{key:"initSortList",value:function(){var e,t=this,s=this.$form.find("tbody"),r=s.hasClass("js-homework-table")?"":"<td></td>",a='<tr class="question-placehoder js-placehoder"><td></td><td></td><td></td><td></td><td></td><td></td><td></td>'.concat(r,"</tr>");s.sortable({containerPath:"> tr",containerSelector:"tbody",itemSelector:"tr.is-question",placeholder:a,exclude:".notMoveHandle",onDragStart:function(t,s,r){t.hasClass("have-sub-questions")||$(".js-have-sub").removeClass("is-question");var a=t.offset(),i=s.rootGroup.pointer;e={left:i.left-a.left,top:i.top-a.top},r(t,s)},onDrag:function(t,s){var r=t.height();t.css({left:s.left-e.left,top:s.top-e.top}),$(".js-placehoder").css({height:r})},onDrop:function(e,s,r){if(r(e,s),e.hasClass("have-sub-questions")){var a=e.parents("tbody");a.find("tr.is-question").each((function(){var e=$(this);a.find("[data-id="+e.data("id")+"].is-sub-question").detach().insertAfter(e)}))}else $(".js-have-sub").addClass("is-question");t.refreshSeqs(e.data("type"))}})}}]),e}())($("#testpaper-form"))},29:function(e,t){e.exports=jQuery}});