!function(l){function t(t){for(var e,n,i=t[0],o=t[1],r=t[2],s=0,a=[];s<i.length;s++)n=i[s],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&a.push(c[n][0]),c[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(l[e]=o[e]);for(p&&p(t);a.length;)a.shift()();return h.push.apply(h,r||[]),u()}function u(){for(var t,e=0;e<h.length;e++){for(var n=h[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(i=!1)}i&&(h.splice(e--,1),t=s(s.s=n[0]))}return t}var n={},c={57:0},h=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=l,s.c=n,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=i;h.push([548,0]),u()}({141:function(t,e,n){"use strict";var i=n(6),s=n.n(i),o=n(0),r=n.n(o),a=n(1),l=n.n(a),u=n(75),c=n(14),h=function(){function e(t){r()(this,e),void 0===t&&(t={}),this._init(t)}return l()(e,[{key:"_init",value:function(t){var e=$.extend(this._getDefaultOptions(t),t);e.wrapDom=t.wrapTarget,e.pageSize=this._getPageSizeByMaxLessonsNumOfChapter(e),new u.a(e),this._displayAllImmediately&&this._destroyPaging()}},{key:"_getPageSizeByMaxLessonsNumOfChapter",value:function(e){var t=e.data;if(!Object(c.d)(t)){var n=0,i=0;return t.forEach(function(t){e.context.isChapter(t)?(n=n<i?i:n,i=0):i++}),n<25?25:n+1}}},{key:"_getDefaultOptions",value:function(t){var e=this._wrapTarget(t.wrapTarget,".js-hidden-cached-data"),n=this._wrapTarget(t.wrapTarget,".js-hidden-course-info"),i=this._wrapTarget(t.wrapTarget,".js-hidden-i18n"),o=this._wrapTarget(t.wrapTarget,".js-hidden-activity-metas"),r=this._wrapTarget(t.wrapTarget,".js-hidden-current-timestamp");return{data:this._toJson(e.html()),context:{course:this._toJson(n.html()),i18n:this._toJson(i.html()),metas:this._toJson(o.html()),currentTimeStamp:s()(r.html(),10),isChapter:function(t){return"chapter"==t.itemType},isUnit:function(t){return"unit"==t.itemType},isLesson:function(t){return"lesson"==t.itemType},isTask:function(t){return"task"==t.itemType},getChapterName:function(t,e){return Translator.trans("course.chapter",{chapter_name:e.i18n.i18nChapterName,number:t.number,title:t.title,colon:t.title?":":""})},getUnitName:function(t,e){return Translator.trans("course.unit",{part_name:e.i18n.i18nUnitName,number:t.number,title:t.title,colon:t.title?":":""})},getLessonName:function(t,e){return e.isItemDisplayedAsOptional(t,e)?t.title:Translator.trans("course.lesson",{part_name:e.i18n.i18nLessonName,number:e.getLessonNum(t,e),title:t.title})},isItemDisplayedAsOptionalOrUnpublished:function(t,e){return e.isItemDisplayedAsOptional(t,e)||e.isItemDisplayedAsUnpublished(t,e)},isItemDisplayedAsOptional:function(t,e){return"1"==t.isOptional&&e.isLessonNode(t,e)},isItemDisplayedAsUnpublished:function(t,e){return!e.isPublished(t,e)&&e.isLessonNode(t,e)},isLessonNode:function(t){return"task"==t.itemType&&t.isSingleTaskLesson||"lesson"==t.itemType&&!t.isSingleTaskLesson},getTaskName:function(t,e){return t.isSingleTaskLesson?"1"==t.isOptional?t.title:Translator.trans("course.lesson",{part_name:e.i18n.i18nLessonName,number:e.getLessonNum(t,e),title:t.title}):Translator.trans("course.catalogue.task_status.task",{taskName:e.i18n.i18nTaskName,taskNumber:t.number,taskTitle:t.title})},hasWatchLimitRemaining:function(t){return!1!==t.watchLimitRemaining},highlightTaskClass:function(t,e){return t.taskId==e.course.currentTaskId?"active":""},taskClass:function(t,e){var n="es-icon left-menu";return e.isTaskLocked(t,e)?n+=" es-icon-lock":""==t.result||"false"==e.course.isMember?n+=" es-icon-undone-check color-gray":"start"==t.resultStatus?n+=" es-icon-doing color-primary":"finish"==t.resultStatus&&(n+=" es-icon-iccheckcircleblack24px color-primary"),n},lessonContainerClass:function(t,e){var n="color-gray";return e.isTask(t,e)?t.isSingleTaskLesson?n:"":e.isLesson(t,e)?n:void 0},isTaskLocked:function(t,e){return e.course.isMember?"lockMode"==e.course.learnMode&&t.lock:"lockMode"==e.course.learnMode},isPublished:function(t){return"published"==t.status},isPublishedTaskUnlocked:function(t,e){return e.isPublished(t,e)&&!e.isTaskLocked(t,e)},isCloudVideo:function(t){return"video"==t.type&&"cloud"==t.fileStorage},getMetaIcon:function(t,e){return void 0!==e.metas[t.type]?e.metas[t.type].icon:""},getMetaName:function(t,e){return void 0!==e.metas[t.type]?e.metas[t.type].name:""},isLiveReplayGenerated:function(t){return"ungenerated"!=t.replayStatus},isLive:function(t){return"live"==t.type},isLiveNotStarted:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp<e.toInt(t.activityStartTime)},isLiveStarting:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp>=e.toInt(t.activityStartTime)&&e.currentTimeStamp<=e.toInt(t.activityEndTime)},isLiveFinished:function(t,e){return e.isLive(t,e)&&e.currentTimeStamp>e.toInt(t.activityEndTime)},toInt:function(t){return s()(t,10)},getLessonNum:function(t,e){var n=t.number;return"1"==e.course.isHideUnpublish&&(n=t.published_number),n}},dataTemplateNode:".js-infinite-item-template"}}},{key:"_wrapTarget",value:function(t,e){return t?t.find(e):$(e)}},{key:"_destroyPaging",value:function(){for(var t=["js-infinite-item-template","js-hidden-cached-data","js-hidden-course-info","js-hidden-i18n","js-hidden-activity-metas","js-hidden-current-timestamp","infinite-container","js-down-loading-more"],e=0;e<t.length;e++)$("."+t[e]).removeClass(t[e])}},{key:"_toJson",value:function(t){var e={};return t&&(e=$.parseJSON(t.replace(/[\r\n\t]/g,""))),e}}]),e}();e.a=h},147:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(44),o=n.n(i),r=function(t){t.on("click",function(t){$.post($(t.currentTarget).data("url"),function(t){"object"===o()(t)?window.location.href=t.url:$("#modal").modal("show").html(t)})})}},15:function(t,e){t.exports=jQuery},170:function(t,e){
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function e(t){if(!t)throw new Error("No options passed to Waypoint constructor");if(!t.element)throw new Error("No element option passed to Waypoint constructor");if(!t.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+n,this.options=e.Adapter.extend({},e.defaults,t),this.element=this.options.element,this.adapter=new e.Adapter(this.element),this.callback=t.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=e.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=e.Context.findOrCreateByElement(this.options.context),e.offsetAliases[this.options.offset]&&(this.options.offset=e.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,n+=1}var n=0,r={};e.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},e.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},e.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key]},e.prototype.disable=function(){return this.enabled=!1,this},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},e.prototype.next=function(){return this.group.next(this)},e.prototype.previous=function(){return this.group.previous(this)},e.invokeAll=function(t){var e=[];for(var n in r)e.push(r[n]);for(var i=0,o=e.length;i<o;i++)e[i][t]()},e.destroyAll=function(){e.invokeAll("destroy")},e.disableAll=function(){e.invokeAll("disable")},e.enableAll=function(){for(var t in e.Context.refreshAll(),r)r[t].enabled=!0;return this},e.refreshAll=function(){e.Context.refreshAll()},e.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},e.viewportWidth=function(){return document.documentElement.clientWidth},e.adapters=[],e.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},e.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=e}(),function(){"use strict";function e(t){window.setTimeout(t,1e3/60)}function n(t){this.element=t,this.Adapter=m.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,m.windowContext||(m.windowContext=!0,m.windowContext=new n(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},m=window.Waypoint,t=window.onload;n.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},n.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),n=this.element==this.element.window;t&&e&&!n&&(this.adapter.off(".waypoints"),delete o[this.key])},n.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,m.requestAnimationFrame(t))})},n.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){e.didScroll&&!m.isTouch||(e.didScroll=!0,m.requestAnimationFrame(t))})},n.prototype.handleResize=function(){m.Context.refreshAll()},n.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var i=e[n],o=i.newScroll>i.oldScroll?i.forward:i.backward;for(var r in this.waypoints[n]){var s,a,l=this.waypoints[n][r];null!==l.triggerPoint&&(s=i.oldScroll<l.triggerPoint,a=i.newScroll>=l.triggerPoint,(s&&a||!s&&!a)&&(l.queueTrigger(o),t[l.group.id]=l.group))}}for(var u in t)t[u].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},n.prototype.innerHeight=function(){return this.element==this.element.window?m.viewportHeight():this.adapter.innerHeight()},n.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},n.prototype.innerWidth=function(){return this.element==this.element.window?m.viewportWidth():this.adapter.innerWidth()},n.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var i=0,o=t.length;i<o;i++)t[i].destroy()},n.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),i={};for(var o in this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var r=t[o];for(var s in this.waypoints[o]){var a,l,u,c,h=this.waypoints[o][s],p=h.options.offset,d=h.triggerPoint,f=0,y=null==d;h.element!==h.element.window&&(f=h.adapter.offset()[r.offsetProp]),"function"==typeof p?p=p.apply(h):"string"==typeof p&&(p=parseFloat(p),-1<h.options.offset.indexOf("%")&&(p=Math.ceil(r.contextDimension*p/100))),a=r.contextScroll-r.contextOffset,h.triggerPoint=Math.floor(f+a-p),l=d<r.oldScroll,u=h.triggerPoint>=r.oldScroll,c=!l&&!u,!y&&(l&&u)?(h.queueTrigger(r.backward),i[h.group.id]=h.group):(!y&&c||y&&r.oldScroll>=h.triggerPoint)&&(h.queueTrigger(r.forward),i[h.group.id]=h.group)}}return m.requestAnimationFrame(function(){for(var t in i)i[t].flushTriggers()}),this},n.findOrCreateByElement=function(t){return n.findByElement(t)||new n(t)},n.refreshAll=function(){for(var t in o)o[t].refresh()},n.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){t&&t(),n.refreshAll()},m.requestAnimationFrame=function(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e).call(window,t)},m.Context=n}(),function(){"use strict";function s(t,e){return t.triggerPoint-e.triggerPoint}function a(t,e){return e.triggerPoint-t.triggerPoint}function e(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},i=window.Waypoint;e.prototype.add=function(t){this.waypoints.push(t)},e.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},e.prototype.flushTriggers=function(){for(var t in this.triggerQueues){var e=this.triggerQueues[t],n="up"===t||"left"===t;e.sort(n?a:s);for(var i=0,o=e.length;i<o;i+=1){var r=e[i];!r.options.continuous&&i!==e.length-1||r.trigger([t])}}this.clearTriggerQueues()},e.prototype.next=function(t){this.waypoints.sort(s);var e=i.Adapter.inArray(t,this.waypoints);return e===this.waypoints.length-1?null:this.waypoints[e+1]},e.prototype.previous=function(t){this.waypoints.sort(s);var e=i.Adapter.inArray(t,this.waypoints);return e?this.waypoints[e-1]:null},e.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},e.prototype.remove=function(t){var e=i.Adapter.inArray(t,this.waypoints);-1<e&&this.waypoints.splice(e,1)},e.prototype.first=function(){return this.waypoints[0]},e.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},e.findOrCreate=function(t){return n[t.axis][t.name]||new e(t)},i.Group=e}(),function(){"use strict";function n(t){this.$element=i(t)}var i=window.jQuery,t=window.Waypoint;i.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,e){n.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}}),i.each(["extend","inArray","isEmptyObject"],function(t,e){n[e]=i[e]}),t.adapters.push({name:"jquery",Adapter:n}),t.Adapter=n}(),function(){"use strict";function t(i){return function(){var e=[],n=arguments[0];return i.isFunction(arguments[0])&&((n=i.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var t=i.extend({},n,{element:this});"string"==typeof t.context&&(t.context=i(this).closest(t.context)[0]),e.push(new o(t))}),e}}var o=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}()},548:function(t,e,n){"use strict";n.r(e);var i=n(6),o=n.n(i),r=n(100),s=n(147);new(n(141).a),function(){var t=$(".color-primary").css("color"),e=$(".color-warning").css("color");$("#freeprogress").easyPieChart({easing:"easeOutBounce",trackColor:"#ebebeb",barColor:t,scaleColor:!1,lineWidth:14,size:145,onStep:function(t,e,n){$("canvas").css("height","146px"),$("canvas").css("width","146px"),100==Math.round(n)&&$(this.el).addClass("done"),$(this.el).find(".percent").html(Translator.trans("course_set.learn_progress")+'<br><span class="num">'+Math.round(n)+"%</span>")}}),$("#orderprogress-plan").easyPieChart({easing:"easeOutBounce",trackColor:"#ebebeb",barColor:e,scaleColor:!1,lineWidth:14,size:145});var n=0<$("#orderprogress-plan").length?"transparent":"#ebebeb";$("#orderprogress").easyPieChart({easing:"easeOutBounce",trackColor:n,barColor:t,scaleColor:!1,lineWidth:14,size:145,onStep:function(t,e,n){100==Math.round(n)&&$(this.el).addClass("done"),$(this.el).find(".percent").html(Translator.trans("course_set.learn_progress")+'<br><span class="num">'+Math.round(n)+"%</span>")}})}(),$(".member-expire").length&&$(".member-expire a").trigger("click"),function(){var t=o()($("#discount-endtime-countdown").data("remaintime"));{var e;0<=t&&(e=new Date((new Date).valueOf()+1e3*t),$("#discount-endtime-countdown").countdown(e,function(t){$(this).html(t.strftime(Translator.trans("course_set.show.count_down_format_hint")))}).on("finish.countdown",function(){$(this).html(Translator.trans("course_set.show.time_finish_hint")),setTimeout(function(){$.post(app.crontab,function(){window.location.reload()})},2e3)}))}}(),0<$(".js-attachment-list").length&&new r.a($(".js-attachment-list")),Object(s.a)($(".js-buy-btn")),Object(s.a)($(".js-task-buy-btn"))},75:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var i=n(2),r=n.n(i),o=n(21),a=n.n(o),s=n(0),l=n.n(s),u=n(1),c=n.n(u),h=n(8),p=n.n(h),d=n(9),f=n.n(d),y=n(5),m=n.n(y),g=n(14),w=(n(170),n(103)),v=n(104);function _(i){var o=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(r()(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,n=m()(i);return e=o?(t=m()(this).constructor,r()(n,arguments,t)):n.apply(this,arguments),f()(this,e)}}var b=function(t){p()(i,t);var n=_(i);function i(t){var e;return l()(this,i),(e=n.call(this))._options=t,e._initConfig(),e.chapterAnimate(),e._displayAllImmediately?e._displayCurrentPageDataAndSwitchToNext():e._initUpLoading(),e}return c()(i,[{key:"toggleIcon",value:function(i,o,r){var s=this;return new a.a(function(t,e){var n=i.find(".js-remove-icon");i.find(".js-remove-text");n.hasClass(o)?(n.removeClass(o).addClass(r),0==$(".js-only-display-one-page").length&&s._displayCurrentPageDataAndSwitchToNext()):n.removeClass(r).addClass(o),t()})}},{key:"_destroy",value:function(){this._options.data=[];var t=$(".js-sidebar-pane");t.length&&t[0].removeEventListener("scroll","debounce",!1)}},{key:"chapterAnimate",value:function(t,e,n,i){var o=1<arguments.length&&void 0!==e?e:".js-task-chapter",r=2<arguments.length&&void 0!==n?n:"es-icon-remove",s=3<arguments.length&&void 0!==i?i:"es-icon-anonymous-iconfont",a=this;$(0<arguments.length&&void 0!==t?t:"body").off("click",o).on("click",o,function(t){var e=$(t.currentTarget);a.toggleIcon(e,r,s).then(function(){e.nextUntil(o).animate({height:"toggle",opacity:"toggle"},"normal")})})}},{key:"_initUpLoading",value:function(){var e,n;0!=$(".js-down-loading-more").length&&(e=this,n=new Waypoint({element:$(".js-down-loading-more")[0],handler:function(t){"down"==t&&(e._isLastPage||e._canNotDisplayMore()?n.disable():(e._scrollToBottom(),n.disable(),e._displayCurrentPageDataAndSwitchToNext(),Waypoint.refreshAll(),n.enable()))},offset:"bottom-in-view"}))}},{key:"_initConfig",value:function(){this._currentPage=1,this._displayAllImmediately=!!this._options.displayAllImmediately,this._displayAllImmediately?this._pageSize=1e4:this._pageSize=this._options.pageSize?this._options.pageSize:25,25<this._pageSize&&0!=$(".js-only-display-one-page").length&&(this._pageSize=25),this._afterFirstLoad=this._options.afterFirstLoad?this._options.afterFirstLoad:null,this._isFirstLoad=!0,this._options.displayItem?(this._displayItemDisplayed=!1,this._displayItem=this._options.displayItem):(this._displayItemDisplayed=!0,this._displayItem=null),this._isLastPage=!1}},{key:"_displayCurrentPageDataAndSwitchToNext",value:function(){this._displayData(),this._isLastPage||this._currentPage++,this._isFirstLoad&&(this._displayItemDisplayed?(this._isFirstLoad=!1,this._afterFirstLoad&&this._afterFirstLoad()):this._displayCurrentPageDataAndSwitchToNext())}},{key:"_displayData",value:function(){if(!this._isLastPage)for(var t=this._getStartIndex(),e=0;e<this._pageSize;e++){var n,i,o=this._options.data[e+t];this._displayItemDisplayed||(n=this._displayItem.key,i=this._displayItem.value,o[n]==i&&(this._displayItemDisplayed=!0)),Object(g.d)(o)?this._isLastPage=!0:this._generateSingleCachedData(o)}}},{key:"_scrollToBottom",value:function(){var t,e,n,i,o=this,r=this,s=$(".js-sidebar-pane");s.length&&(t=s[0],e=s.height(),n=t.scrollHeight,i=t.scrollTop,r._afterFirstLoad&&t.addEventListener("scroll",Object(v.a)(function(){n<=i+e&&!o._isLastPage&&r._displayCurrentPageDataAndSwitchToNext()},500,!0)))}},{key:"_generateSingleCachedData",value:function(t){var e=this._options.dataTemplateNode,n=this._options.wrapDom?this._options.wrapDom.find(e).html():$(e).html(),i=t,o=this,r=(r=n.replace(/({\w+})/g,function(t){return o._replace(t,i,"{","}")})).replace(/(%7B\w+%7D)/g,function(t){return o._replace(t,i,"%7B","%7D")}),s=$("<div>").append(r);this._removeUnNeedNodes(s),(this._options.wrapDom?this._options.wrapDom.find(".infinite-container"):$(".infinite-container")).append(s.html())}},{key:"_getStartIndex",value:function(){return(this._currentPage-1)*this._pageSize}},{key:"_replace",value:function(t,e,n,i){var o=t.split(n)[1].split(i)[0],r=this._options.context;return"function"==typeof r[o]?r[o](e,r):void 0!==e[o]?e[o]:t}},{key:"_canNotDisplayMore",value:function(){return 1!=this._currentPage&&0!=$(".js-only-display-one-page").length}},{key:"_removeUnNeedNodes",value:function(t){t.find("[display-if=false]").remove(),t.find("[display-if=0]").remove(),t.find("[hide-if=1]").remove(),t.find("[hide-if=true]").remove(),t.find("tmp :first-child").each(function(){var t=$(this).parent();t.hasClass("js-ignore-remove")||"TMP"!=t[0].nodeName||$(this).unwrap()})}}]),i}(w.a)}});