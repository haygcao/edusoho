!function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);f.length;)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={174:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([823,0]),a()}({202:function(t,e,a){"use strict";var n=a(15),r=a.n(n);e.a=function(t,e,a){var n={};"remote"===e&&(n={ajax:{url:$(t).data("url"),dataType:"json",quietMillis:100,data:function(t,e){return{q:t,page_limit:10}},results:function(t){var e=[];return $.each(t,(function(t,a){e.push({id:a.name,name:a.name})})),{results:e}}},initSelection:function(t,e){var a=[];$(t.val().split(",")).each((function(){a.push({id:this,name:this})})),e(a)},formatSelection:function(t){return t.name},formatResult:function(t){return t.name},width:400,multiple:!0,placeholder:Translator.trans("validate.tag_required_hint"),createSearchChoice:function(){return null},maximumSelectionSize:20}),$(t).select2(r()(n,a))}},22:function(t,e){t.exports=jQuery},424:function(t,e,a){"use strict";var n=a(2),r=a.n(n),i=a(3),o=a.n(i),s=function(){function t(e){r()(this,t),this.$element=e,this.initEvent()}return o()(t,[{key:"initEvent",value:function(){var t=this;this.$element.on("click",'[data-role="batch-select"]',(function(e){return t._batch2Item(e)})),this.$element.on("click",'[data-role="batch-item"]',(function(e){return t._item2Batch(e)}))}},{key:"_batch2Item",value:function(t){var e=$(t.currentTarget).prop("checked");this.$element.find('[data-role="batch-select"]').prop("checked",e),this.$element.find('[data-role="batch-item"]:visible').prop("checked",e),e?$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!1):0==this.$element.find('[data-role="batch-item"]:checked').length&&$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!0)}},{key:"_item2Batch",value:function(t){var e=this.$element.find('[data-role="batch-item"]:visible').length,a=this.$element.find('[data-role="batch-item"]:checked').length;0!==a?$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!1):$(".js-batch-tag-btn, .js-batch-delete-btn, .js-batch-share-btn, .js-batch-download").attr("disabled",!0),e==a?this.$element.find('[data-role="batch-select"]').prop("checked",!0):this.$element.find('[data-role="batch-select"]').prop("checked",!1)}}]),t}();e.a=s},438:function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var n=a(2),r=a.n(n),i=a(3),o=a.n(i),s=a(8),l=a(202),c=function(){function t(e){r()(this,t),this.element=e.element,this.callback=e.callback,this.init()}return o()(t,[{key:"init",value:function(){this.initEvent(),this._initTag()}},{key:"initEvent",value:function(){var t=this;$("#info-form").on("submit",(function(e){t.onSubmitInfoForm(e)}))}},{key:"_initTag",value:function(){Object(l.a)("#infoTags","remote",{width:"off"})}},{key:"onSubmitInfoForm",value:function(t){var e=$(t.currentTarget);e.find("#info-save-btn").button("loading"),$.ajax({type:"POST",url:e.attr("action"),data:$("#info-form").serialize()}).done((function(){Object(s.a)("success",Translator.trans("site.save_success_hint"))})).fail((function(){Object(s.a)("danger",Translator.trans("site.save_error_hint"))})).always((function(){e.find("#info-save-btn").button("reset")})),t.preventDefault()}}]),t}(),u=a(129),d=function(){function t(e){r()(this,t),this.callback=e.callback,this.element=e.element,this.init()}return o()(t,[{key:"init",value:function(){this.initEvent(),this._initPlayer()}},{key:"initEvent",value:function(){var t=this;$(".js-img-set").on("click",(function(e){t.onClickChangePic(e)})),$(".js-reset-btn").on("click",(function(e){t.onClickReset(e)})),$(".js-set-default").on("click",(function(e){t.onClickDefault(e)})),$(".js-set-select").on("click",(function(e){t.onClickSelect(e)})),$(".js-screenshot-btn").on("click",(function(e){t.onClickScreenshot(e)})),$("#cover-form").on("submit",(function(e){t.onSubmitCoverForm(e)}))}},{key:"onClickChangePic",value:function(t){var e=$(t.currentTarget),a=e.closest("#cover-tab");a.find(".js-cover-img").attr("src",e.attr("src")),a.find("#thumbNo").val(e.data("no"))}},{key:"onClickReset",value:function(){$("#thumbNo").val(""),$(".js-cover-img").attr("src",$("#orignalThumb").val())}},{key:"onClickDefault",value:function(t){this._changePane($(t.currentTarget))}},{key:"onClickSelect",value:function(t){this._changePane($(t.currentTarget))}},{key:"onClickScreenshot",value:function(){var t=$(event.currentTarget),e=this;t.button("loading");var a=e.second;$.ajax({type:"get",url:t.data("url"),data:{second:a}}).done((function(n){"success"==n.status?e._successGeneratePic(t,n):"waiting"==n.status?e.intervalId=setInterval((function(){$.get(t.data("url"),{second:a},(function(a){"success"==a.status&&(e._successGeneratePic(t,a),clearInterval(e.intervalId))}))}),3e3):(t.button("reset"),Object(s.a)("danger",Translator.trans("meterial_lib.generate_screenshots_error_hint")))})).fail((function(){t.button("reset"),Object(s.a)("danger",Translator.trans("meterial_lib.generate_screenshots_error_hint"))}))}},{key:"onSubmitCoverForm",value:function(t){var e=$(t.currentTarget);e.find("#save-btn").button("loading"),e.find("#thumbNo").val()?$.ajax({type:"POST",url:e.attr("action"),data:e.serialize()}).done((function(){Object(s.a)("success",Translator.trans("site.save_success_hint"))})).fail((function(){Object(s.a)("danger",Translator.trans("site.save_error_hint"))})).always((function(){e.find("#save-btn").button("reset")})):(Object(s.a)("success",Translator.trans("site.save_success_hint")),e.find("#save-btn").button("reset")),t.preventDefault()}},{key:"destroy",value:function(){clearInterval(this.intervalId)}},{key:"_initPlayer",value:function(){var t=this;$("#viewerIframe").length>0&&($("#viewerIframe"),new u.a({name:"parent",project:"PlayerProject",children:[document.getElementById("viewerIframe")],type:"parent"}).on("video.timeupdate",(function(e){t.second=Math.floor(e.currentTime)})))}},{key:"_successGeneratePic",value:function(t,e){t.button("reset"),Object(s.a)("success",Translator.trans("meterial_lib.generate_screenshots_success_hint"));var a=t.closest("#cover-tab");a.find(".js-cover-img").attr("src",e.url),a.find("#thumbNo").val(e.no)}},{key:"_changePane",value:function(t){t.closest(".nav").find("li.active").removeClass("active"),t.addClass("active");var e=$(".tab-content-img");e.find(".tab-pane-img.active").removeClass("active"),e.find(t.data("target")).addClass("active")}}]),t}(),f=function(){function t(e){r()(this,t),this.callback=e.callback,this.element=e.element,this.init()}return o()(t,[{key:"init",value:function(){this.initEvent(),$("#cover-tab").length>0&&(this.cover=new d({element:$("#cover-tab")})),this.info=new c({element:$("#info-tab")})}},{key:"initEvent",value:function(){var t=this;$(".js-back").on("click",(function(e){t.onClickBack(e)})),$(".js-cover").on("click",(function(e){t.onClickCover(e)})),$(".js-info").on("click",(function(e){t.onClickInfo(e)}))}},{key:"onClickInfo",value:function(t){var e=$(t.currentTarget);this._changePane(e)}},{key:"onClickCover",value:function(t){var e=$(t.currentTarget);this._changePane(e)}},{key:"onClickBack",value:function(){this.back()}},{key:"back",value:function(){this.callback(),this.element.remove(),$(".panel-heading").html(Translator.trans("material_lib.content_title"))}},{key:"_changePane",value:function(t){t.closest(".nav").find("li.active").removeClass("active"),t.addClass("active");var e=t.closest(".content").find(".tab-content");e.find(".tab-pane.active").removeClass("active"),e.find(t.data("target")).addClass("active")}}]),t}()},823:function(t,e,a){"use strict";a.r(e);var n=a(424),r=a(438),i=a(202),o=$("#file-manage-panel");new n.a(o),$(".js-table-popover").popover({placement:"top",trigger:"manual",html:!0,animation:!1,title:'<div class="clearfix material-table-popover">'.concat(Translator.trans("material.common_table.transcoding_intro"),'<a class="pull-right cd-text-sm" href="http://www.qiqiuyu.com/faq/868/detail" target="_blank">').concat(Translator.trans("material.common_table.transcoding_more"),"</a></div>"),content:'\n  <div class="cd-text-sm">\n    <p class="mb0"><strong>'.concat(Translator.trans("subtitle.status.error"),"：</strong>").concat(Translator.trans("material.common_table.fail_error_tip"),'</p>\n    <p class="mb0"><strong>').concat(Translator.trans("material.common_table.fail_not_support"),"：</strong>").concat(Translator.trans("material.common_table.not_support_error_tip"),"</p>\n  </div>")}).on("mouseenter",(function(){var t=this;$(this).popover("show"),$(".popover").on("mouseleave",(function(){$(t).popover("hide")}))})).on("mouseleave",(function(){var t=this;setTimeout((function(){$(".popover:hover").length||$(t).popover("hide")}),300)})),Object(i.a)("#modal-tags","remote");$("#tag-form").validate({rules:{tags:{required:!0}},messages:{tags:{required:Translator.trans("course_set.manage.tag_required_hint")}}});var s=function(t){var e=document.createElement("iframe");e.style.display="none",e.style.height=0,e.src=t,document.body.appendChild(e),setTimeout((function(){e.remove()}),3e5)};o.on("click",".js-cd-modal",(function(){$("#cd-modal").on("show.bs.modal",(function(t){var e=$(t.relatedTarget),a=e.data("title"),n=e.data("reason"),r=e.data("solution"),i=e.data("status");$(".js-error-tip").html('<div class="mbl clearfix"><span class="pull-left error-label">'.concat(Translator.trans("material.common_table.file_name"),'：</span><span class="pull-left error-content">').concat(a,'</span></div><div class="mbl clearfix"><span class="pull-left error-label">').concat(Translator.trans("material.common_table.transcoding"),'：</span><span class="pull-left error-content">').concat(i,'</span></div><div class="mbl clearfix"><span class="pull-left error-label">').concat(Translator.trans("material.common_table.error_reason"),'：</span><span class="cd-text-danger error-content pull-left">').concat(n,'</span></div><div class="clearfix"><span class="pull-left error-label">').concat(Translator.trans("material.common_table.solution_way"),'：</span><span class="cd-text-info error-content pull-left">').concat(r,"</span></div>"))}))})),o.on("click",".js-batch-download",(function(){!function(){var t=[];$("#file-manage-panel").find("[data-role=batch-item]:checked").each((function(){var e=$(this).closest(".js-tr-item").find(".js-download-btn").data("url");t.push(e)}));for(var e=0;e<t.length;e++){var a=t[e];s(a)}}()})),o.on("click",".convert-file-btn",(function(){console.log("re"),$.post($(this).data("url"),(function(t){"error"==t.status?alert(t.message):window.location.reload()}),"json").fail((function(){alert(Translator.trans("alert.file_convert_error.message"))}))})),$(".tip").tooltip(),$("#modal").modal({backdrop:"static",keyboard:!1,show:!1}),$("button",".panel-heading").on("click",(function(){var t=$(this).data("url");$("#modal").html(""),$("#modal").modal("show"),$.get(t,(function(t){$("#modal").html(t)}))}));o.on("click",".js-batch-tag-btn",(function(t){!function(t){$(t.currentTarget);var e=[];o.find("[data-role=batch-item]:checked").each((function(){e.push(this.value)})),$("#select-tag-items").val(e),$("#tag-modal").modal("show")}(t)})),$("[rel='tooltip']").tooltip(),function(){var t=new Array;if($("tbody [type=checkbox]").each((function(){isNaN($(this).val())||t.push($(this).val())})),0==t.length)return;$.post($("#file-manage-panel").data("fileStatusUrl"),{ids:t.join(",")},(function(t){if(t&&0!=t.length)for(var e=0;e<t.length;e++){var a=t[e];$.inArray(a.type,["video","ppt","document"])>-1&&"cloud"==a.storage&&("waiting"==a.convertStatus||"doing"==a.convertStatus?$("#upload-file-tr-"+a.id).find("a:first ~ br:first").after("<span class='color-warning mr5 text-sm'>"+Translator.trans("page.file_converting.message")+"</span><br/>"):"error"==a.convertStatus?$("#upload-file-tr-"+a.id).find("a:first ~ br:first").after("<span class='color-danger mr5 text-sm'>"+Translator.trans("page.file_convert_failed.message")+"</span><br/>"):"none"==a.convertStatus?$("#upload-file-tr-"+a.id).find("a:first ~ br:last").after("<span class='label label-default mr5 tip'>"+Translator.trans("page.file_not_convert.message")+"</span>"):"success"==a.convertStatus&&$("#upload-file-tr-"+a.id).find("a:first ~ br:last").after("<span class='label label-success mr5 tip'>"+Translator.trans("page.file_converted.message")+"</span>")),"video"==a.type&&a.metas2&&(a.metas2.shd?$("#upload-file-tr-"+a.id).find("a:first ~ br:first").after('<span class="label label-info mr5 tip">'+Translator.trans("page.video_shd.message")+"</span>"):a.metas2.hd?$("#upload-file-tr-"+a.id).find("a:first ~ br:first").after('<span class="label label-info mr5 tip">'+Translator.trans("page.video_hd.message")+"</span>"):a.metas2.sd&&$("#upload-file-tr-"+a.id).find("a:first ~ br:first").after('<span class="label label-info mr5 tip">'+Translator.trans("page.video_sd.message")+"</span>"))}}))}(),$("[data-role=batch-delete]").click((function(){var t=!1,e=[];$("[data-role=batch-item]").each((function(){$(this).is(":checked")&&(t=!0,e.push(this.value))})),t&&($("#modal").html(""),$("#modal").load($(this).data("url"),{ids:e}),$("#modal").modal("show"))})),$(".js-delete-btn").click((function(t){var e=$(t.target),a=e.data("id"),n=e.data("url"),r=[];r.push(a),$("#modal").html(""),$("#modal").load(n,{ids:r}),$("#modal").modal("show")}));var l=!0;$(".js-detail-btn").on("click",(function(){if(l){l=!1;var t=$("#file-manage-panel");$.ajax({type:"GET",url:$(this).data("url")}).done((function(e){$(t).hide(),$(t).prev().hide(),$(t).parent().append(e),$(".nav.nav-tabs").length>0&&!navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)&&$(".nav.nav-tabs").lavaLamp(),Object(i.a)("#tags","remote"),new r.a({element:$("#material-detail"),callback:function(){$(t).show(),$(t).prev().show(),window.location.reload()}})})).fail((function(){cd.message({type:"danger",message:Translator.trans("material_lib.have_no_permission_hint")})})).always((function(){l=!0}))}}))}});