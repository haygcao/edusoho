(window.webpackJsonp=window.webpackJsonp||[]).push([["exerciseIntro"],{"391c":function(e,t,i){"use strict";i("e17f");var s=i("2241");i("456d"),i("ac6a"),t.a={methods:{canDoing:function(e,t){return new Promise((function(i,r){if(e&&"doing"===e.status){var o="exercise-".concat(t,"-").concat(e.id),n=JSON.parse(localStorage.getItem(o));n=n?Object.keys(n).forEach((function(e){n[e]=n[e].filter((function(e){return""!==e}))})):{},s.a.confirm({title:"提示",cancelButtonText:"放弃做题",confirmButtonText:"继续做题",message:"您有未完成的练习，是否继续？"}).then((function(){i()})).catch((function(){r({answer:n})}))}}))}}}},6610:function(e,t,i){"use strict";var s=i("9e6e");i.n(s).a},"7c97":function(e,t,i){"use strict";var s={props:{type:{type:String,default:""},isShow:{type:Boolean,default:!1},reportType:{type:String,default:""}},methods:{onKeepLearning:function(e){this.$emit("outFocusMask",e)}}},r=i("0c7c"),o=Object(r.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isShow?i("div",{staticClass:"out-focus-mask"},[i("div",{staticClass:"report-go-back",on:{click:function(t){return e.$router.go(-1)}}},[i("van-icon",{attrs:{name:"arrow-left",size:"25",color:"#43bc60"}})],1),"kick_previous"===e.type?[i("div",{staticClass:"content"},[e._m(0),i("van-button",{attrs:{color:"#43bc60",size:"small"},on:{click:function(t){return e.onKeepLearning("kick_previous")}}},[e._v("\n        继续学习\n      ")])],1)]:e._e(),"reject_current"===e.type?[e._m(1)]:e._e()],2):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tips"},[t("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),t("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("div",{staticClass:"tips"},[t("p",{staticClass:"kick-each-other"},[this._v("请勿同时多开任务学习")]),t("p",{staticClass:"kick-each-other"},[this._v("不要一心多用哦！")])])])}],!1,null,null,null);t.a=o.exports},"9e6e":function(e,t,i){},a556:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i("e7e5");var s=i("d399"),r=i("6647"),o=function(e){switch(e){case"course":Object(s.a)(r.a.t("goods.courseClosedToast"));break;case"classroom":Object(s.a)(r.a.t("goods.classroomClosedToast"));break;case"exercise":Object(s.a)(r.a.t("goods.exerciseClosedToast"))}}},c8a5:function(e,t,i){"use strict";i("6762"),i("2fdb");var s=i("3ce7"),r=i("faa5");i("a556"),t.a={data:function(){return{reportIntervalTime:null,reportLearnTime:null,reportFinishCondition:null,reportData:{courseId:null,taskId:null},reportResult:null,isFinish:!1,reportType:null,learnTime:0,isShowOutFocusMask:!1,outFocusMaskType:"",sign:"",record:{},absorbed:0,learnedTime:0}},beforeRouteLeave:function(e,t,i){this.sign.length>0&&localStorage.setItem("flowSign",this.sign),i()},beforeDestroy:function(){this.clearReportIntervalTime(),window.removeEventListener("beforeunload",this.onbeforeunloadFlowSign),this.toggleReportMaskHidden("remove")},methods:{initReportData:function(e,t,i){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.clearReportIntervalTime(),this.reportData={courseId:e,taskId:t},this.reportType=i,this.isFinish=!1,this.reportIntervalTime=null,this.reportLearnTime=null,this.reportResult=null,this.learnTime=0,this.reportFinishCondition=null,s&&this.initReportEvent(),this.onbeforeunload()},initReportEvent:function(){this.reprtData(),this.intervalReportData(),this.intervalReportLearnTime()},getCourseData:function(e,t){var i=this,r={courseId:e,taskId:t};return new Promise((function(e,t){s.a.getCourseData({query:r}).then((function(t){i.reportFinishCondition=t.activity.finishCondition,e(t)})).catch((function(e){t(e)}))}))},reprtData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eventName:"doing",ContinuousReport:!1,watchTime:null};if(null!==this.reportData.courseId&&null!==this.reportData.taskId&&(!this.isFinish||e.ContinuousReport))if(""===this.sign){var t={client:"h5"},i=localStorage.getItem("flowSign");i&&(t.lastSign=i,localStorage.removeItem("flowSign")),this.start(e,t)}else this.reportTaskEvent(e)},start:function(e,t){var i=this;s.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:"start"},data:t}).then((function(t){if(i.handleReportResult(t),t.learnControl.allowLearn)i.sign=t.record.flowSign,i.record=t.record,i.reportTaskEvent(e);else{var s=t.learnControl.denyReason;i.reportJudge(s)}}))},reportTaskEvent:function(e){var t=this;if(0!==this.sign.length){var i={client:"h5",sign:this.sign,duration:this.learnTime,status:this.absorbed};if(e.reActive&&(i.reActive=e.reActive),this.sourceType&&"video"===this.sourceType){var r=parseInt(this.nowWatchTime-this.lastWatchTime);this.lastWatchTime=this.nowWatchTime;var o={watchData:{duration:r}};i=Object.assign(i,o)}this.learnTime=0,s.a.reportTaskEvent({query:{courseId:this.reportData.courseId,taskId:this.reportData.taskId,eventName:e.eventName},data:i}).then((function(e){if(t.handleReportResult(e),t.record=e.record,t.absorbed=0,t.sign=e.record.flowSign,!e.learnControl.allowLearn){var i=e.learnControl.denyReason;t.reportJudge(i)}})).catch((function(e){t.clearReportIntervalTime()}))}},handleReportResult:function(e){this.reportResult=e,this.learnedTime=e.learnedTime,e.taskResult&&"finish"===e.taskResult.status?(this.isFinish=!0,this.$store.commit(r.B,"finish"),this.$store.commit("course/".concat(r.F),e.completionRate)):this.$store.commit(r.B,"start")},intervalReportLearnTime:function(){var e=this;this.reportLearnTime=setInterval((function(){e.checkoutTime(),e.learnTime++}),1e3)},intervalReportData:function(){var e=this,t=60*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*1e3;this.reportIntervalTime=setInterval((function(){e.reprtData({eventName:"doing",ContinuousReport:!0})}),t)},checkoutTime:function(){this.reportFinishCondition&&["time","watchTime"].includes(this.reportFinishCondition.type)&&parseInt(this.learnTime/60,10)>=parseInt(this.reportFinishCondition.data,10)&&this.reprtData({eventName:"finish",ContinuousReport:!0})},clearReportIntervalTime:function(){clearInterval(this.reportIntervalTime),clearInterval(this.reportLearnTime),this.reportIntervalTime=null,this.reportLearnTime=null},reportJudge:function(e){"kick_previous"===e?this.kickEachOther("kick_previous"):"reject_current"===e&&(this.clearReportIntervalTime(),this.kickEachOther("reject_current"))},outFocusMask:function(e){this.absorbed=1,this.isShowOutFocusMask=!1,!this.player||"video"!==this.reportType&&"audio"!==this.reportType||this.player.play(),this.toggleReportMaskHidden("remove"),this.reprtData({eventName:"doing",ContinuousReport:!0,reActive:1})},kickEachOther:function(e){if(this.absorbed=1,"testpaper"!==this.reportType&&"live"!==this.reportType&&"homework"!==this.reportType||"kick_previous"!==e){if(this.isShowOutFocusMask=!0,this.outFocusMaskType=e,"video"===this.reportType||"audio"===this.reportType){if(this.player&&this.player.destory&&"reject_current"===e)return void this.player.destory();this.player&&this.player.pause&&this.player.pause()}this.toggleReportMaskHidden("add")}},ineffectiveLearning:function(e){this.isShowOutFocusMask||(this.absorbed=0,this.isShowOutFocusMask=!0,this.outFocusMaskType=e,this.player&&"video"===this.reportType&&this.player.pause(),this.reprtData({eventName:"doing",ContinuousReport:!0}))},toggleReportMaskHidden:function(e){"video"!==this.reportType&&"audio"!==this.reportType&&("add"===e?document.getElementsByTagName("body")[0].classList.add("report-mask-hidden"):"remove"===e&&document.getElementsByTagName("body")[0].classList.remove("report-mask-hidden"))},initVisibilitychange:function(){document.addEventListener("visibilitychange",this.visibilityState)},visibilityState:function(){"video"===this.reportType&&("hidden"===document.visibilityState?this.ineffectiveLearning("ineffective_learning"):"visible"===document.visibilityState&&this.player.pause())},onbeforeunload:function(){window.addEventListener("beforeunload",this.onbeforeunloadFlowSign)},onbeforeunloadFlowSign:function(){this.sign.length>0&&localStorage.setItem("flowSign",this.sign)}}}},dad4:function(e,t,i){"use strict";i.r(t),i("8e6e"),i("ac6a"),i("456d"),i("e7e5");var s=i("d399"),r=(i("a481"),i("bd86")),o=i("3ce7"),n=i("2f62"),a=i("391c"),c=i("c8a5"),u=i("7c97");function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){Object(r.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d={name:"ExerciseIntro",mixins:[a.a,c.a],components:{OutFocusMask:u.a},data:function(){return{courseId:null,taskId:null,exercise:null,chooseQuestionMode:!1,question_type_seq:[],counts:{},radio:"0",activeIcon:"static/images/exercise/active-icon.png",defaultIcon:"static/images/exercise/default-icon.png",activeQuestions:"static/images/exercise/active-on-questions.png",defaultQuestions:"static/images/exercise/default-on-questions.png",obj:{single_choice:"courseLearning.singleChoice",choice:"courseLearning.choice",essay:"courseLearning.essay",uncertain_choice:"courseLearning.uncertainChoice",determine:"courseLearning.determine",fill:"courseLearning.fill",material:"courseLearning.material"}}},computed:h({hasResult:function(){return!!this.exercise.latestExerciseResult}},Object(n.e)({isLoading:function(e){return e.isLoading},user:function(e){return e.user}})),mounted:function(){this.initReport(),this.getInfo()},beforeRouteEnter:function(e,t,i){document.getElementById("app").style.background="#f6f6f6",i()},beforeRouteLeave:function(e,t,i){document.getElementById("app").style.background="",i()},methods:h(h({},Object(n.c)("course",["handExercisedo"])),{},{getInfo:function(){var e=this;this.courseId=this.$route.query.courseId,this.taskId=this.$route.query.taskId,o.a.getExerciseIntro({query:{courseId:this.courseId,taskId:this.taskId}}).then((function(t){e.exercise=t.exercise,e.counts=t.exercise.itemCounts;var i=e.exercise,s=i.lastExerciseResult;if(i.latestExerciseResult||!s)e.formatItem(),e.interruption();else{if(e.formatItem(),e.$route.query.answerAgain)return;e.$router.replace({name:"exerciseResult",query:{exerciseId:e.exercise.id,exerciseResultId:s.id,courseId:e.courseId,taskId:e.taskId}})}}))},formatItem:function(){for(var e in this.counts)this.counts[e]>0&&this.question_type_seq.push(e)},initReport:function(){this.initReportData(this.$route.query.courseId,this.$route.query.taskId,"exercise")},interruption:function(){var e=this;this.canDoing(this.exercise.latestExerciseResult,this.user.id).then((function(){e.startExercise()})).catch((function(t){var i=t.answer;e.submitExercise(i)}))},showResult:function(){this.$router.push({name:"exerciseResult",query:{exerciseId:this.exercise.id,exerciseResultId:this.exercise.latestExerciseResult.id,courseId:this.courseId,taskId:this.taskId}})},startExercise:function(){this.$router.push({name:"exerciseDo",query:{targetId:this.taskId,exerciseId:this.exercise.id,courseId:this.courseId,exerciseMode:this.radio},params:{KeepDoing:!0}})},submitExercise:function(e){var t=this,i={answer:e,exerciseId:this.exercise.id,userId:this.user.id,exerciseResultId:this.exercise.latestExerciseResult.id,courseId:this.courseId};this.handExercisedo(i).then((function(e){t.reprtData({eventName:"finish"}),t.showResult()})).catch((function(e){s.a.fail(e.message)}))}})},p=(i("6610"),i("0c7c")),f=Object(p.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("out-focus-mask",{attrs:{type:e.outFocusMaskType,isShow:e.isShowOutFocusMask,reportType:e.reportType},on:{outFocusMask:e.outFocusMask}}),e.isLoading?i("e-loading"):e._e(),e.exercise?i("div",{staticClass:"intro-body"},[i("van-cell-group",{staticClass:"intro-panel"},[i("van-cell",{staticClass:"intro-cell test-name",attrs:{border:!1,title:e.$t("courseLearning.exerciseName"),value:e.exercise.name}})],1),i("van-panel",{staticClass:"panel intro-panel",attrs:{title:e.$t("courseLearning.numberOfTopics")},scopedSlots:e._u([{key:"header",fn:function(){return[i("div",{staticClass:"van-cell van-panel__header"},[i("span",{staticClass:"font-medium text-16",staticStyle:{color:"rgba(0,0,0,0.85)"}},[e._v(e._s(e.$t("courseLearning.numberOfTopics")))]),i("span",{staticClass:"ml-12 font-normal text-14 leading-6",staticStyle:{color:"rgba(0,0,0,0.35)"}},[e._v(e._s(e.exercise.itemCount+" "+e.$t("courseLearning.topic")))])])]},proxy:!0}],null,!1,4277134155)},e._l(e.question_type_seq,(function(t){return i("van-cell",{key:t,staticClass:"intro-cell",attrs:{border:!1,title:e.$t(e.obj[t]),value:e.counts[t]+" "+e.$t("courseLearning.topic")}})})),1)],1):e._e(),e.exercise?i("div",{staticClass:"intro-footer"},[i("van-button",{staticClass:"intro-footer__btn",attrs:{type:"primary"},on:{click:function(t){e.chooseQuestionMode=!0}}},[e._v(e._s(e.$t("courseLearning.chooseQuestionAnsweringMode")))])],1):e._e(),i("van-popup",{staticClass:"choose-mode-popup",style:{height:"44%"},attrs:{position:"bottom",closeable:"",round:"","safe-area-inset-bottom":""},model:{value:e.chooseQuestionMode,callback:function(t){e.chooseQuestionMode=t},expression:"chooseQuestionMode"}},[i("div",{staticClass:"choose-mode-title"},[e._v("\n      "+e._s(e.$t("courseLearning.answerMode"))+"\n    ")]),i("div",{staticClass:"choose-mode-change-radio"},[i("van-radio-group",{staticClass:"choose-mode-group-radio",model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[i("van-radio",{staticClass:"choose-mode-radio",attrs:{name:"0"},scopedSlots:e._u([{key:"icon",fn:function(t){return[i("img",{staticClass:"img-icon",attrs:{src:t.checked?e.activeIcon:e.defaultIcon}}),i("i",{directives:[{name:"show",rawName:"v-show",value:t.checked,expression:"props.checked"}],staticClass:"iconfont icon-check"})]}}])},[e._v("\n          "+e._s(e.$t("courseLearning.testMode"))+"\n          ")]),i("van-radio",{staticClass:"choose-mode-radio",attrs:{name:"1"},scopedSlots:e._u([{key:"icon",fn:function(t){return[i("img",{staticClass:"img-icon",attrs:{src:t.checked?e.activeQuestions:e.defaultQuestions}}),i("i",{directives:[{name:"show",rawName:"v-show",value:t.checked,expression:"props.checked"}],staticClass:"iconfont icon-check"})]}}])},[e._v("\n          "+e._s(e.$t("courseLearning.answerOneQuestionAtTime"))+"\n          ")])],1)],1),i("van-button",{staticClass:"choose-mode__btn",attrs:{type:"primary"},on:{click:function(t){return e.startExercise()}}},[e._v(e._s(e.$t("courseLearning.startAnsweringQuestions")))])],1)],1)}),[],!1,null,"4d88f29e",null);t.default=f.exports}}]);