!function(e){function t(t){for(var a,o,s=t[0],l=t[1],d=t[2],c=0,m=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);m.length;)m.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,s=1;s<i.length;s++){var l=i[s];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},n={253:0},r=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=l;r.push([1211,0]),i()}({1211:function(e,t,i){"use strict";i.r(t);var a=i(10),n=i.n(a),r=i(2),o=i.n(r),s=i(3),l=i.n(s),d=(i(491),new(i(129).a)({name:"parent",project:"PlayerProject",children:[document.getElementById("viewerIframe")],type:"parent"})),u=i(20),c=function(){function e(t){var i=t.element,a=t.initMarkerArry,n=void 0===a?[]:a,r=t._video_time,s=void 0===r?"18":r,l=t.messenger,d=void 0===l?{}:l,u=t.editbox,c=void 0===u?".editbox":u,m=(t.scalebox,t.timepartnum),h=void 0===m?"6":m,f=t.markers_array,v=void 0===f?new Array:f,p=t.addScale,g=t.mergeScale,k=t.updateScale,y=t.deleteScale,b=t.updateSeq;o()(this,e),this.$element=$(i),this.initMarkerArry=n,this.markers_array=v,this._video_time=s,this.messenger=d,this.editbox=c,this.timepartnum=h,this.courseId=this.$element.data("course-id"),this.addScale=p,this.mergeScale=g,this.updateScale=k,this.deleteScale=y,this.updateSeq=b,this.init()}return l()(e,[{key:"init",value:function(){this.initSortable(),this.initeditbox(!1),this.initMarker(this.initMarkerArry),this.lisentresize(),this.initPlayer(),this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.$element.on("mousedown",".gruop-lesson-list .drag",(function(t){return e.itemDraggable(t)})),this.$element.on("click",'.lesson-list [data-role="question-remove"]',(function(t){return e.itemRmove(t)})),this.$element.on("click","#subject-lesson-list .item-lesson",(function(t){return e.stopEvent(t)})),this.$element.on("mousedown",".scale-blue",(function(t){return e.slideScale(t)})),this.$element.on("mouseenter",".scale-blue",(function(t){return e.hoverScale(t)})),this.$element.on("mousedown",".js-question-preview",(function(t){return e.previewMouseDown(t)}))}},{key:"initPlayer",value:function(){var e=this.messenger,t=this,i=!0,a=$("#editbox-lesson-list");e.on("timechange",(function(e){i&&$(".scale-white").css("left",t.getleft(e.currentTime))})),$(".scale-white").on("mousedown",(function(n){i=!1,$(document).on("mousemove.playertime",(function(i){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();var n=i.pageX>a.width()+20?a.width()+20:i.pageX&&i.pageX<=20?20:i.pageX;$(".scale-white").css("left",n);var r=t.gettime(n);e.sendToChild({id:"viewerIframe"},"setCurrentTime",{time:r})})).on("mouseup.playertime",(function(e){$(document).off("mousemove.playertime"),$(document).off("mousedown.playertime"),i=!0}))}))}},{key:"initSortable",value:function(){var e=this;$("#subject-lesson-list").sortable({group:"no-drop",drop:!1,delay:500,handle:".drag",onDrop:function(t,i,a){if(t.hasClass("item-lesson")){a(t,i);var n=t.closest(".scale.blue");n.find(".lesson-list .item-lesson").length>0&&(e.sortList(n.find(".lesson-list")),e.addScale(n,n.find(".time").html(),n.css("left"),n.find(".lesson-list").children().length))}}}),$("#editbox-lesson-list").sortable({group:"no-drop",drag:!1})}},{key:"sortList",value:function(e){var t=1;e.find(".item-lesson").each((function(){$(this).find('[data-role="sqe-number"]').text(t),t++}))}},{key:"addScale",value:function(e,t,i,a){var n=e.find("li:last"),r={id:e.attr("id"),second:t,questionMarkers:[{id:n.attr("id"),seq:i,questionId:n.attr("question-id")}]};$.extend(this.addScale(r,e,a))}},{key:"initeditbox",value:function(e){var t=this,i=$(t.editbox);if(e)i.find(".scale.scale-default:visible").each((function(){$(this).css("left",t.getleft(u.k($(this).find('[data-role="scale-time"]').text())))})),i.find(".scale.scale-blue:visible").each((function(){$(this).css("left",t.getleft(u.k($(this).find('[data-role="scale-blue-time"]').text())))}));else for(var a=t.timepartnum,n=t._video_time/a,r=0;r<=a;r++){var o=$('[data-role="scale-default"]').clone().css("left",t.getleft(n*r)).removeClass("hidden").removeAttr("data-role");o.find('[data-role="scale-time"]').text(u.i(Math.round(n*r))),$('[data-role="scale-default"]').before(o)}}},{key:"initMarker",value:function(e){if(e.length>0){for(var t=$('[data-role="scale-blue"]'),i=0;i<e.length;i++){for(var a=t.clone().css("left",this.getleft(e[i].second)).removeAttr("data-role").removeClass("hidden").attr("id",e[i].id),n=(a.find('[data-role="scale-blue-time"]').text(u.i(e[i].second)),e[i].questionMarkers),r=a.find('[data-role="scale-blue-item"]'),o=0;o<n.length;o++){var s=r.clone().removeAttr("data-role").attr({"question-id":n[o].questionId,id:n[o].id});console.log("new_scale_blue_item",s),s.data("url","/course/".concat(this.courseId,"/question/").concat(n[o].questionId,"/marker/preview")).find('[data-role="sqe-number"]').text(o+1).end().find('[data-role="question-type"]').text(Translator.trans("course.question.type.single_choice")).end().find('[data-role="question-info"]').text(n[o].question.stem.replace(/<.*?>/gi,"")),r.before(s)}t.after(a),r.remove(),this.markers_array.push({id:e[i].id,time:e[i].second})}this.newSortList($(this.scalebox).find('[data-role="scale-blue-list"]'))}}},{key:"lisentresize",value:function(){var e=this;$(window).resize((function(){e.initeditbox(!0)}))}},{key:"getleft",value:function(e){return e*$("#editbox-lesson-list").width()/n()(this._video_time)+20}},{key:"newSortList",value:function(e){var t=this;e.sortable({delay:500,itemSelector:".item-lesson",onDrop:function(e,i,a){a(e,i),t.maskShow(!1);var n=e.closest(".scale-blue"),r={id:"",questionMarkers:[]};r.id=n.attr("id"),t.sortList(n.find('[data-role="scale-blue-list"]')),n.find("li").each((function(){var e={id:$(this).attr("id"),seq:$(this).find('[data-role="sqe-number"]').html()};r.questionMarkers.push(e)})),t._updateSeq(n,r),n.removeClass("moveing")},serialize:function(e,t,i){return i?t:e.attr("id")},isValidTarget:function(e,i){return t.maskShow(!0),e.closest(".scale-blue").addClass("moveing"),!0}})}},{key:"maskShow",value:function(e){e?$('[data-role="player-mask"]').removeClass("hidden"):$('[data-role="player-mask"]').addClass("hidden")}},{key:"gettime",value:function(e){return Math.round((e-20)*this._video_time/$("#editbox-lesson-list").width())}},{key:"itemDraggable",value:function(e){var t=this,i=[],a=null,n=null,r=null,o=$(e.currentTarget),s=$("#editbox-lesson-list"),l=$('[data-role="scale-red"]'),d=l.find('[data-role="scale-red-details"]'),c=o.clone().removeClass("drag").addClass("disdragg");o.after(c),t.maskShow(!0),$(document).on("mousemove.dragitem",(function(e){if(s.find(".placeholder").length<=0)return l.addClass("hidden"),void s.removeClass("highlight");if(s.addClass("highlight"),n=e.pageX>s.width()+20?s.width()+20:e.pageX&&e.pageX<=20?20:e.pageX,r=t.gettime(n),d.text(u.i(r)),l.removeClass("hidden").css("left",n),t.markers_array.length>0)for(var o in $(".scale-blue").removeClass("highlight"),i=[],a=null,t.markers_array)if(Math.abs(t.markers_array[o].time-r)<=5)return i=[{id:t.markers_array[o].id,time:t.markers_array[o].time}],void(a=$(".scale-blue[id="+t.markers_array[o].id+"]").addClass("highlight"))})).on("mouseup.dragitem",(function(e){$(document).off("mousemove.dragitem"),$(document).off("mouseup.dragitem"),t.maskShow(!1),l.addClass("hidden"),s.removeClass("highlight");var o=s.find(".item-lesson");if(o.length<=0)return l.addClass("hidden"),s.removeClass("highlight"),void c.remove();if(i.length>0){var d=a.find('[data-role="scale-blue-list"]');o.appendTo(d).find('[data-role="sqe-number"]').text(d.children().length),t._addScale(a,i[0].time,d.children().length,t.markers_array),a.removeClass("highlight"),t.newSortList(d)}else{var m=$('[data-role="scale-blue"]'),h=m.clone().css("left",n).removeAttr("data-role"),f=h.find('[data-role="scale-blue-list"]');h.find('[data-role="scale-blue-time"]').text(u.i(r));f.children().remove(),f.append(o),m.after(h),t._addScale(h,r,1,t.markers_array)}}))}},{key:"itemRmove",value:function(e){e.stopPropagation();var t=$(e.currentTarget),i=t.closest('[data-role="scale-blue-list"]'),a=t.closest("li"),n=t.closest(".scale-blue");this._deleteScale(n,a,i.children().length,this.markers_array)}},{key:"stopEvent",value:function(e){e.stopPropagation()}},{key:"slideScale",value:function(e){var t=this,i=[],a=null,n=null,r=null,o=$(e.currentTarget),s=$("#editbox-lesson-list");o.css("left");t.maskShow(!0),$(".marker-manage").addClass("slideing"),o.addClass("moveing"),$(document).on("mousemove.slide",(function(e){if(window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),n=e.pageX>s.width()+20?s.width()+20:e.pageX&&e.pageX<=20?20:e.pageX,r=Math.round((n-20)*t._video_time/s.width()),o.css("left",n),o.find('[data-role="scale-blue-time"]').text(u.i(r)),t.markers_array.length>0)for(var l in $(".scale-blue").removeClass("highlight"),i=[],a=null,t.markers_array)if(Math.abs(t.markers_array[l].time-r)<=5&&o.attr("id")!=t.markers_array[l].id)return i=[{id:t.markers_array[l].id,time:t.markers_array[l].time}],void(a=$(".scale-blue[id="+t.markers_array[l].id+"]").addClass("highlight"))})).on("mouseup.slide",(function(e){if($(document).off("mousemove.slide"),$(document).off("mouseup.slide"),t.maskShow(!1),o.removeClass("moveing"),$(".marker-manage").removeClass("slideing"),i.length>0){var n=a.find('[data-role="scale-blue-list"]');n.append(o.find('[data-role="scale-blue-list"]').children()),t.sortList(n),a.removeClass("highlight"),t._mergeScale(o,a,t.markers_array)}else t._updateScale(o,r)}))}},{key:"hoverScale",value:function(e){var t=$(e.currentTarget);t.offset().left-20<110?t.find(".scale-details").css("margin-left","-"+(t.offset().left-20)+"px"):t.find(".scale-details").css("margin-left","-110px")}},{key:"previewMouseDown",value:function(e){e.stopPropagation()}},{key:"_addScale",value:function(e,t,i,a){var n=e.find("li:last"),r={id:e.attr("id"),second:t,questionMarkers:[{id:n.attr("id"),seq:i,questionId:n.attr("question-id")}]};$.extend(this.addScale(r,e,a))}},{key:"_mergeScale",value:function(e,t,i){var a={id:e.attr("id"),merg_id:t.attr("id")};$.extend(this.mergeScale(a,e,t,i))}},{key:"_updateScale",value:function(e,t){var i={id:e.attr("id"),second:t};$.extend(this.updateScale(i,e))}},{key:"_deleteScale",value:function(e,t,i,a){console.log("id",e,e.attr("id"));var n={id:e.attr("id"),questionMarkers:[{id:t.attr("id"),seq:t.find('[data-role="sqe-number"]').html(),questionId:t.attr("question-id")}]};$.extend(this.deleteScale(n,e,t,i,a))}},{key:"_updateSeq",value:function(e,t){$.extend(this.updateSeq(e,t))}}]),e}(),m=i(99),h=i.n(m),f=i(128);new(function(){function e(t){o()(this,e),this.$form=$(t.formSelect),this.$marker=$(t.markerSelect),this.questionBankSelector=$("#mark-form-bankId"),this.questionCategorySelector=$("#mark-form-categoryId"),this.init()}return l()(e,[{key:"init",value:function(){this.initData(),this.initEvent(),this.initQuestionBankSelector(),this.disableQuestionCategorySelector()}},{key:"initData",value:function(){var e=this,t=n()((document.body.clientHeight-350)/50)>0?n()((document.body.clientHeight-350)/50):1;$.post(this.$form.attr("action"),this.$form.serialize()+"&pageSize="+t,(function(i){$("#subject-lesson-list").html(i),$('[data-toggle="popover"]').popover(),h.a.get("MARK-MANGE-GUIDE")?(e.initDrag(),$("#step-1").removeClass("introhelp-icon-help")):e.initIntro(),h.a.set("MARK-MANGE-GUIDE","true",{expires:360,path:"/"}),e.$form.data("pageSize",t)}))}},{key:"initIntro",value:function(){$(".js-introhelp-overlay").removeClass("hidden"),$(".show-introhelp").addClass("show");var e=$(".js-introhelp-img img"),t=document.createElement("img"),i=$(window).height()-e.offset().top-80;t.src=e.attr("src");var a=i*t.width/t.height/2+50;e.height(i),$(".js-introhelp-img").css("margin-left","-"+a+"px")}},{key:"initEvent",value:function(){var e=this;this.$marker.on("click",".js-question-preview",(function(t){return e.onQuestionPreview(t)})),this.$marker.on("click",".js-more-questions",(function(t){return e.onMoreQuestion(t)})),this.$marker.on("click",".js-close-introhelp",(function(t){return e.onCloseHelp(t)})),this.$marker.on("click","#mark-form-submit",(function(t){return e.onFormSubmit(t)})),this.$marker.on("change","#mark-form-bankId",(function(t){return e.onChangeSelect(t)})),this.$marker.on("change","#mark-form-categoryId",(function(t){return e.onChangeSelect(t)})),this.$marker.on("keydown","#mark-form-keyword",(function(t){return e.onFormAutoSubmit(t)}))}},{key:"initQuestionBankSelector",value:function(){this.questionBankSelector.select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first",formatResult:function(e){var t=Object(f.b)(e.text);return e.id?'<div class="select2-result-text"><span class="select2-match"></span><span><i class="es-icon es-icon-tiku"></i>'.concat(t,"</span></div>"):t},dropdownCss:{width:""}})}},{key:"disableQuestionCategorySelector",value:function(){this.questionCategorySelector.select2({disable:!0})}},{key:"enableQuestionCategorySelector",value:function(){this.questionCategorySelector.select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first"})}},{key:"onFormAutoSubmit",value:function(e){13===e.keyCode&&(e.preventDefault(),this.onFormSubmit(e))}},{key:"onFormSubmit",value:function(e){if(this.$form.validate().form()){var t=this.$form.data("pageSize");$.post(this.$form.attr("action"),this.$form.serialize()+"&pageSize="+t,(function(e){$("#subject-lesson-list").html(e)}));var i=$(e.target),a=i.data("url");if(void 0===a)return;var r=$("#mark-form-categoryId"),o='<option value="0">'.concat(Translator.trans("question.marker_question.select_question_category"),"</option>"),s=i.val();if(!n()(s))return r.html(o),void this.disableQuestionCategorySelector();var l=this;$.post(a,{bankId:s},(function(e){o+='<option value="0">无</option>',$.each(e,(function(e,t){var i=t.depth>1?"　".repeat(t.depth-1):"";o+='<option value="'.concat(t.id,'">').concat(i).concat(t.name,"</option>")})),r.html(o),l.enableQuestionCategorySelector()}))}}},{key:"onChangeSelect",value:function(e){this.onFormSubmit(e)}},{key:"onQuestionPreview",value:function(e){$.get($(e.currentTarget).data("url"),(function(e){$(".modal").modal("show").html(e)}))}},{key:"onMoreQuestion",value:function(e){var t=$(e.currentTarget).hide().parent().addClass("loading"),i=$("#subject-lesson-list").css("max-height",$("#subject-lesson-list").height()),a=n()(t.data("current-page"))+1,r=n()(t.data("last-page")),o={bankId:$("select[name=bankId]").val(),categoryId:$("select[name=categoryId]").val(),keyword:$("[name=keyword]").val(),pageSize:this.$form.data("pageSize")};$.post(t.data("url")+a,o,(function(e){t.remove(),i.append(e).animate({scrollTop:40*(i.find(".item-lesson").length+1)}),a===r&&$(".js-more-questions").parent().remove()}))}},{key:"onCloseHelp",value:function(e){$(e.currentTarget).closest(".show-introhelp").removeClass("show-introhelp"),$(".show-introhelp").length<=0&&($(".js-introhelp-overlay").addClass("hidden"),this.initDrag())}},{key:"initDrag",value:function(){var e=[],t=30;$.ajax({type:"get",url:$(".js-pane-question-content").data("marker-metas-url"),cache:!1,async:!1,success:function(i){e=i.markersMeta,t=i.videoTime}}),function(e,t,i){var a=new c({element:"#task-dashboard",initMarkerArry:e,_video_time:t,messenger:i,addScale:function(e,t,i){var a=$(".js-pane-question-content").data("queston-marker-add-url"),n={markerId:e.id,second:e.second,questionId:e.questionMarkers[0].questionId,seq:e.questionMarkers[0].seq};return $.post(a,n,(function(a){void 0!==a.id&&(void 0===e.id&&(t.attr("id",a.markerId),i.push({id:a.markerId,time:e.second})),t.removeClass("hidden"),t.find(".item-lesson[question-id="+e.questionMarkers[0].questionId+"]").attr("id",a.id))})),e},mergeScale:function(e,t,i,a){var n=$(".js-pane-question-content").data("marker-merge-url");return $.post(n,{sourceMarkerId:e.id,targetMarkerId:e.merg_id},(function(i){for(var n in t.remove(),a)if(a[n].id==e.id){a.splice(n,1);break}})),e},updateScale:function(e,t){var i=$(".js-pane-question-content").data("marker-update-url"),a={id:e.id,second:e.second};return e.second?$.post(i,a,(function(e){})):console.log("do not need upgrade scale..."),e},deleteScale:function(e,t,i,n,r){var o=$(".js-pane-question-content").data("queston-marker-delete-url");$.post(o,{questionId:e.questionMarkers[0].id},(function(n){if(i.remove(),console.log(e.questionMarkers[0].questionId,"questionId"),$("#subject-lesson-list").find(".item-lesson[question-id="+e.questionMarkers[0].questionId+"]").removeClass("disdragg").addClass("drag"),t.find('[data-role="scale-blue-list"]').children().length<=0){for(var o in t.remove(),r)if(r[o].id==t.attr("id")){r.splice(o,1);break}}else console.log("drag",a),a.sortList(t.find('[data-role="scale-blue-list"]'))}))},updateSeq:function(e,t){if(void 0!==t&&void 0!==t.questionMarkers&&0!==t.questionMarkers.length){for(var i=$(".js-pane-question-content").data("queston-marker-sort-url"),a=[],n=0;n<t.questionMarkers.length;n++)a.push(t.questionMarkers[n].id);$.post(i,{questionIds:a})}}})}(e,t,d)}}]),e}())({formSelect:".js-mark-form",markerSelect:".js-marker-manage-content"})},491:function(e,t){var i="<iframe src='"+$("#task-dashboard").data("media-player")+"' name='viewerIframe' id='viewerIframe' width='100%'allowfullscreen webkitallowfullscreen height='100%' style='border:0px'></iframe>";$("#task-video-content").html(i)}});