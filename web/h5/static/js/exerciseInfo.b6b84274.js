(window.webpackJsonp=window.webpackJsonp||[]).push([["exerciseInfo"],{"0f1a":function(e,t,o){},"1be4":function(e,t,o){"use strict";var s=o("0f1a");o.n(s).a},7593:function(e,t,o){"use strict";o.r(t),o("8e6e"),o("ac6a"),o("456d"),o("e7e5");var s=o("d399"),n=o("bd86"),r=o("3ce7"),i=o("2f62");function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}var a={data:function(){return{exerciseId:null,moduleId:null,categoryId:null,answer_record_id:this.$route.query.answer_record_id,chooseQuestionMode:!1,question_type_seq:[],counts:{},exerciseIntro:null,activeIcon:"static/images/exercise/active-icon.png",defaultIcon:"static/images/exercise/default-icon.png",activeQuestions:"static/images/exercise/active-on-questions.png",defaultQuestions:"static/images/exercise/default-on-questions.png",radio:"0",obj:{single_choice:"courseLearning.singleChoice",choice:"courseLearning.choice",essay:"courseLearning.essay",uncertain_choice:"courseLearning.uncertainChoice",determine:"courseLearning.determine",fill:"courseLearning.fill",material:"courseLearning.material"}}},created:function(){this.getExerciseIntro()},computed:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},Object(i.e)({isLoading:function(e){return e.isLoading}})),beforeRouteEnter:function(e,t,o){document.getElementById("app").style.background="#f6f6f6",o()},beforeRouteLeave:function(e,t,o){document.getElementById("app").style.background="",o()},methods:{getExerciseIntro:function(){var e=this;this.exerciseId=this.$route.query.exerciseId,this.moduleId=this.$route.query.moduleId,this.categoryId=this.$route.query.categoryId,r.a.getExerciseInfro({query:{exerciseId:this.exerciseId},params:{moduleId:this.moduleId,categoryId:this.categoryId}}).then((function(t){for(var o in e.exerciseIntro=t,e.counts=t.itemCounts,e.counts)e.counts[o]>0&&"total"!==o&&e.question_type_seq.push(o)})).catch((function(e){s.a.fail(e.message)}))},startExercise:function(){var e={mode:"start",type:"chapter",exerciseMode:this.radio,title:this.exerciseIntro.chapterName,exerciseId:this.exerciseId,categoryId:this.categoryId,moduleId:this.moduleId};this.$router.push({path:"/brushDo",query:e})},continueDo:function(){var e={mode:"continue",type:"chapter",title:this.exerciseIntro.chapterName,exerciseId:this.exerciseId,categoryId:this.categoryId,moduleId:this.moduleId,answer_record_id:this.answer_record_id};this.$router.push({path:"/brushDo",query:e})}}},u=(o("1be4"),o("a6c2")),d=Object(u.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.isLoading?o("e-loading"):e._e(),e.exerciseIntro?o("div",{staticClass:"intro-body"},[o("van-cell-group",{staticClass:"intro-panel"},[o("van-cell",{staticClass:"intro-cell test-name",attrs:{border:!1,title:e.$t("courseLearning.chapterName"),value:e.exerciseIntro.chapterName}})],1),o("van-panel",{staticClass:"panel intro-panel",attrs:{title:e.$t("courseLearning.numberOfTopics")},scopedSlots:e._u([{key:"header",fn:function(){return[o("div",{staticClass:"van-cell van-panel__header"},[o("span",{staticClass:"font-medium text-16",staticStyle:{color:"rgba(0,0,0,0.85)"}},[e._v(e._s(e.$t("courseLearning.numberOfTopics")))]),o("span",{staticClass:"ml-12 font-normal text-14 leading-6",staticStyle:{color:"rgba(0,0,0,0.35)"}},[e._v(e._s(e.exerciseIntro.itemCounts.total+" "+e.$t("courseLearning.topic")))])])]},proxy:!0}],null,!1,3968664186)},e._l(e.question_type_seq,(function(t){return o("van-cell",{key:t,staticClass:"intro-cell",attrs:{border:!1,title:e.$t(e.obj[t]),value:e.counts[t]+" "+e.$t("courseLearning.topic")}})})),1)],1):e._e(),e.exerciseIntro?o("div",{staticClass:"intro-footer"},[e.answer_record_id?o("van-button",{staticClass:"intro-footer__btn",attrs:{type:"primary"},on:{click:function(t){return e.continueDo()}}},[e._v(e._s(e.$t("questionBank.continue")))]):o("van-button",{staticClass:"intro-footer__btn",attrs:{type:"primary"},on:{click:function(t){e.chooseQuestionMode=!0}}},[e._v(e._s(e.$t("courseLearning.chooseQuestionAnsweringMode")))])],1):e._e(),o("van-popup",{staticClass:"choose-mode-popup",style:{height:"44%"},attrs:{position:"bottom",closeable:"",round:"","safe-area-inset-bottom":""},model:{value:e.chooseQuestionMode,callback:function(t){e.chooseQuestionMode=t},expression:"chooseQuestionMode"}},[o("div",{staticClass:"choose-mode-title"},[e._v("\n      "+e._s(e.$t("courseLearning.answerMode"))+"\n    ")]),o("div",{staticClass:"choose-mode-change-radio"},[o("van-radio-group",{staticClass:"choose-mode-group-radio",model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[o("van-radio",{staticClass:"choose-mode-radio",attrs:{name:"0"},scopedSlots:e._u([{key:"icon",fn:function(t){return[o("img",{staticClass:"img-icon",attrs:{src:t.checked?e.activeIcon:e.defaultIcon}}),o("i",{directives:[{name:"show",rawName:"v-show",value:t.checked,expression:"props.checked"}],staticClass:"iconfont icon-check"})]}}])},[e._v("\n          "+e._s(e.$t("courseLearning.testMode"))+"\n          ")]),o("van-radio",{staticClass:"choose-mode-radio",attrs:{name:"1"},scopedSlots:e._u([{key:"icon",fn:function(t){return[o("img",{staticClass:"img-icon",attrs:{src:t.checked?e.activeQuestions:e.defaultQuestions}}),o("i",{directives:[{name:"show",rawName:"v-show",value:t.checked,expression:"props.checked"}],staticClass:"iconfont icon-check"})]}}])},[e._v("\n          "+e._s(e.$t("courseLearning.answerOneQuestionAtTime"))+"\n          ")])],1)],1),o("van-button",{staticClass:"choose-mode__btn",attrs:{type:"primary"},on:{click:function(t){return e.startExercise()}}},[e._v(e._s(e.$t("courseLearning.startAnsweringQuestions")))])],1)],1)}),[],!1,null,"4b6f88c4",null);t.default=d.exports}}]);