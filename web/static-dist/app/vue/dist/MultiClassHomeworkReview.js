(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{128:function(t,e,n){t.exports=n(720)},135:function(t,e,n){t.exports=n(827)},1692:function(t,e,n){"use strict";n.r(e);var a=n(128),s=n.n(a),r=n(135),i=n.n(r),o=n(92),c=n.n(o),u=n(91),l=n.n(u),f=n(93),d=n.n(f),p=n(55),m=n.n(p),g=n(22),v=n.n(g),h=n(8),k=n.n(h),x=n(13),b=n.n(x),_=n(50),w=n.n(_),y=n(229),S=n(1865),R=n(38),I=n.n(R);function T(t,e){var n=m()(t);if(d.a){var a=d()(t);e&&(a=a.filter((function(e){return l()(t,e).enumerable}))),n.push.apply(n,a)}return n}var L=[{title:"课时",dataIndex:"lesson",scopedSlots:{customRender:"lesson"}},{title:"作业/考试",dataIndex:"name",scopedSlots:{customRender:"name"},filters:[{text:"作业",value:"homework"},{text:"考试",value:"testpaper"}]},{title:"题量",dataIndex:"item_count",scopedSlots:{customRender:"item_count"}},{title:"已批",dataIndex:"finished",scopedSlots:{customRender:"finished"}},{title:"未批",dataIndex:"reviewing",scopedSlots:{customRender:"reviewing"}},{title:"未交",dataIndex:"doing",scopedSlots:{customRender:"doing"}},{title:"开始时间",dataIndex:"startTime",scopedSlots:{customRender:"startTime"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],O=[{title:"姓名",dataIndex:"nickname",scopedSlots:{customRender:"nickname"}},{title:"成绩",dataIndex:"grade",scopedSlots:{customRender:"grade"}},{title:"提交时间",dataIndex:"end_time",scopedSlots:{customRender:"end_time"}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"批阅人",dataIndex:"teacherInfo",scopedSlots:{customRender:"teacherInfo"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],P={all:{total:0,offset:0,pageSize:5},reviewing:{total:0,offset:0,pageSize:5},doing:{total:0,offset:0,pageSize:5},finished:{total:0,offset:0,pageSize:5}},z={name:"HomeWorkReview",components:{ClassName:S.a},data:function(){return{columns:L,resultColumns:O,getListLoading:!1,homeworksList:[],examResultList:{},paging:{total:0,offset:0,pageSize:10},examPaging:P,modalVisible:!1,currentTab:0,currentTask:{},status:["all","reviewing","doing","finished"],statusMap:{doing:"进行中",paused:"暂停",reviewing:"未批阅",finished:"已批阅"},gradeMap:{excellent:"优秀",good:"良好",passed:"合格",unpassed:"不合格"}}},watch:{currentTab:function(t){this.getExamResults(t)}},computed:{examResults:function(){var t=this.status[this.currentTab];return this.examResultList[t]}},created:function(){this.getHomeworkList()},methods:{handleExamTableChange:function(t){var e=this.status[this.currentTab],n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){w()(t,e,n[e])})):c.a?i()(t,c()(n)):T(Object(n)).forEach((function(e){s()(t,e,l()(n,e))}))}return t}({},this.examPaging[e]);n.current=t.current,n.offset=(t.current-1)*t.pageSize,this.examPaging[e]=n;var a={limit:t.pageSize,offset:(t.current-1)*t.pageSize};this.getExamResults(this.currentTab,a)},getHomeworkList:function(){var t=arguments,e=this;return b()(k.a.mark((function n(){var a,s,r,i;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:{},e.getListLoading=!0,n.prev=2,n.next=5,y.v.getExams({multiClassId:e.$route.params.id,types:a.types||[],offset:a.offset||0,limit:a.pageSize||10});case 5:s=n.sent,r=s.data,i=s.paging,e.homeworksList=r,e.paging=I.a.assign(i,{pageSize:Number(i.limit)});case 10:return n.prev=10,e.getListLoading=!1,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[2,,10,13]])})))()},showResultListModal:function(t,e){var n=this.status.indexOf(t);this.currentTask=e,this.currentTab=n,this.currentTab==n&&this.getExamResults(n),this.modalVisible=!0},getExamResults:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this.status[e];console.log(a),console.log(this.examPaging[a]),y.v.getExamResults({status:a,multiClassId:this.$route.params.id,taskId:this.currentTask.id,offset:n.offset||this.examPaging[a].offset||P[a].offset,limit:n.limit||this.examPaging[a].pageSize||P[a].pageSize}).then((function(e){e.paging.page=e.paging.offset/e.paging.limit+1,t.examPaging[a]=v()(t.examPaging[a],e.paging),t.$set(t.examResultList,a,e)}))},change:function(t,e,n,a){a.currentDataSource;var s={};e&&I.a.isArray(e.name)&&(s.types=e.name),t&&(s.offset=t.pageSize*(t.current-1),s.pageSize=t.pageSize),s&&this.getHomeworkList(s)}}},j=(n(2005),n(36)),M=Object(j.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-spin",{attrs:{spinning:t.getListLoading}},[n("a-table",{attrs:{columns:t.columns,"data-source":t.homeworksList,pagination:t.paging,rowKey:function(t){return t.id}},on:{change:t.change},scopedSlots:t._u([{key:"lesson",fn:function(t,e){return n("class-name",{attrs:{record:e}})}},{key:"name",fn:function(e,n){return[t._v(t._s(n.tasks.assessment.name))]}},{key:"item_count",fn:function(e,n){return[t._v(t._s(n.tasks.assessment.item_count))]}},{key:"finished",fn:function(e,a){return n("a",{on:{click:function(e){return t.showResultListModal("finished",a.tasks)}}},[t._v("\n        "+t._s(a.tasks.assessmentStatusNum.finished||0)+"\n      ")])}},{key:"reviewing",fn:function(e,a){return n("a",{on:{click:function(e){return t.showResultListModal("reviewing",a.tasks)}}},[t._v("\n        "+t._s(a.tasks.assessmentStatusNum.reviewing||0)+"\n      ")])}},{key:"doing",fn:function(e,a){return n("a",{on:{click:function(e){return t.showResultListModal("doing",a.tasks)}}},[t._v("\n        "+t._s(a.tasks.assessmentStatusNum.doing||0)+"\n      ")])}},{key:"startTime",fn:function(e,n){return[t._v("\n        "+t._s(t.$dateFormat(n.tasks.createdTime,"YYYY-MM-DD HH:mm"))+"\n      ")]}},{key:"action",fn:function(e,a){return[n("a-space",{attrs:{size:"large"}},[n("a",{staticClass:"ant-dropdown-link",attrs:{href:"/course/"+a.tasks.courseId+"/manage/exam/activity/"+a.tasks.activityId+"/analysis",target:"_blank"}},[t._v("\n            答题分布\n          ")]),t._v(" "),n("a-button",{attrs:{type:"link","data-target":"#modal","data-toggle":"modal","data-url":"/course/"+a.tasks.courseId+"/activity/"+a.tasks.activityId+"/testpaper/graph"}},[t._v("\n            成绩分布\n          ")])],1)]}}])})],1),t._v(" "),n("a-modal",{attrs:{visible:t.modalVisible,footer:null,title:t.currentTask.assessment?t.currentTask.assessment.name:"",width:920},on:{cancel:function(e){t.modalVisible=!1}}},[n("a-tabs",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[n("a-tab-pane",{key:0,attrs:{tab:"全部"}}),t._v(" "),n("a-tab-pane",{key:1,attrs:{tab:"未批阅"}}),t._v(" "),n("a-tab-pane",{key:2,attrs:{tab:"进行中"}}),t._v(" "),n("a-tab-pane",{key:3,attrs:{tab:"已批阅"}})],1),t._v(" "),t.examResults?n("a-table",{attrs:{columns:t.resultColumns,"data-source":t.examResults.data,pagination:t.examPaging[t.status[t.currentTab]],rowKey:function(t){return t.id}},on:{change:t.handleExamTableChange},scopedSlots:t._u([{key:"nickname",fn:function(e,n){return[t._v(t._s(n.userInfo.nickname))]}},{key:"grade",fn:function(e,n){return[t._v(t._s("reviewing"===n.status?"--":t.gradeMap[n.answerReportInfo.grade]))]}},{key:"teacherInfo",fn:function(e,n){return[t._v(t._s(n.teacherInfo.nickname||"--"))]}},{key:"status",fn:function(e){return["reviewing"==e?n("span",{staticStyle:{color:"#fb8d4d"}},[t._v(t._s(t.statusMap[e]))]):"doing"==e?n("span",{staticStyle:{color:"#43bc60"}},[t._v(t._s(t.statusMap[e]))]):"finished"==e?n("span",{staticStyle:{color:"#999"}},[t._v(t._s(t.statusMap[e]))]):t._e()]}},{key:"end_time",fn:function(e){return[t._v("\n        "+t._s(t.$dateFormat(e,"YYYY-MM-DD HH:mm"))+"\n      ")]}},{key:"action",fn:function(e,a){return["reviewing"===a.status?n("a",{staticClass:"ant-dropdown-link",attrs:{href:"testpaper"===t.currentTask.type?"/course/"+t.currentTask.courseId+"/manage/testpaper/"+a.id+"/check?action=check":"/course/"+t.currentTask.courseId+"/manage/homework/"+a.id+"/check?action=check",target:"_blank"}},[t._v("去批阅")]):"finished"===a.status?n("a",{staticClass:"ant-dropdown-link",attrs:{href:"/homework/result/"+a.id+"/show?action=check",target:"_blank"}},[t._v("查看结果")]):t._e()]}}],null,!1,3142312363)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=M.exports},1834:function(t,e,n){},185:function(t,e,n){t.exports=n(462)},1865:function(t,e,n){"use strict";var a={name:"ClassName",props:{record:{type:Object,required:!0,default:function(){return{}}}},computed:{className:function(){var t=this.record,e=t.chapterTitle,n=t.unitTitle,a=t.title,s=t.tasks,r=t.tasks.number,i="";if("lesson"===s.mode)i="".concat(r,". ").concat(a);else{var o=r.split("-");i="".concat(r,".").concat(o[1]-1," [任务]").concat(s.title)}return n&&(i="".concat(n," ").concat(i)),e&&(i=n?"".concat(e," - ").concat(i):"".concat(e," ").concat(i)),i}}},s=n(36),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-overflow"},[n("span",{attrs:{title:t.className}},[t._v(t._s(t.className))]),t._v(" "),n("br"),t._v(" "),"published"!=t.record.tasks.status?n("a-tag",{staticStyle:{"margin-top":"4px"}},[t._v("未发布")]):t._e()],1)}),[],!1,null,null,null);e.a=r.exports},2005:function(t,e,n){"use strict";var a=n(1834);n.n(a).a},22:function(t,e,n){t.exports=n(725)},462:function(t,e,n){n(463),t.exports=n(82).Reflect.deleteProperty},463:function(t,e,n){var a=n(113),s=n(372).f,r=n(171);a(a.S,"Reflect",{deleteProperty:function(t,e){var n=s(r(t),e);return!(n&&!n.configurable)&&delete t[e]}})},5:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},50:function(t,e,n){var a=n(128);t.exports=function(t,e,n){return e in t?a(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},55:function(t,e,n){t.exports=n(825)},566:function(t,e,n){var a=n(113),s=n(82),r=n(373);t.exports=function(t,e){var n=(s.Object||{})[t]||Object[t],i={};i[t]=e(n),a(a.S+a.F*r((function(){n(1)})),"Object",i)}},6:function(t,e,n){var a=n(128);function s(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),a(t,s.key,s)}}t.exports=function(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}},825:function(t,e,n){n(826),t.exports=n(82).Object.keys},826:function(t,e,n){var a=n(436),s=n(435);n(566)("keys",(function(){return function(t){return s(a(t))}}))},827:function(t,e,n){n(828);var a=n(82).Object;t.exports=function(t,e){return a.defineProperties(t,e)}},828:function(t,e,n){var a=n(113);a(a.S+a.F*!n(239),"Object",{defineProperties:n(721)})},829:function(t,e,n){n(830),t.exports=n(82).Object.getOwnPropertyDescriptors},830:function(t,e,n){var a=n(113),s=n(831),r=n(260),i=n(372),o=n(723);a(a.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,a=r(t),c=i.f,u=s(a),l={},f=0;u.length>f;)void 0!==(n=c(a,e=u[f++]))&&o(l,e,n);return l}})},831:function(t,e,n){var a=n(567),s=n(534),r=n(171),i=n(162).Reflect;t.exports=i&&i.ownKeys||function(t){var e=a.f(r(t)),n=s.f;return n?e.concat(n(t)):e}},832:function(t,e,n){n(833);var a=n(82).Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}},833:function(t,e,n){var a=n(260),s=n(372).f;n(566)("getOwnPropertyDescriptor",(function(){return function(t,e){return s(a(t),e)}}))},834:function(t,e,n){n(722),t.exports=n(82).Object.getOwnPropertySymbols},91:function(t,e,n){t.exports=n(832)},92:function(t,e,n){t.exports=n(829)},93:function(t,e,n){t.exports=n(834)}}]);