(window.webpackJsonp=window.webpackJsonp||[]).push([["history-learning"],{"1c4c":function(t,e,n){"use strict";var i=n("9b43"),s=n("5ca1"),o=n("4bf8"),r=n("1fa8"),a=n("33a4"),c=n("9def"),u=n("f1ae"),l=n("27ee");s(s.S+s.F*!n("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,s,f,d=o(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,m=void 0!==v,_=0,g=l(d);if(m&&(v=i(v,p>2?arguments[2]:void 0,2)),void 0==g||h==Array&&a(g))for(n=new h(e=c(d.length));e>_;_++)u(n,_,m?v(d[_],_):d[_]);else for(f=g.call(d),n=new h;!(s=f.next()).done;_++)u(n,_,m?r(f,v,[s.value,_],!0):s.value);return n.length=_,n}})},"2d42":function(t,e,n){"use strict";var i={name:"e-empty",props:{text:{type:String,default:""}}},s=n("a6c2"),o=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"e-empty"},[e("img",{staticClass:"e-empty__img",attrs:{src:"static/images/empty.png"}}),e("p",{staticClass:"e-empty__text"},[this._v(this._s(this.text))])])}),[],!1,null,null,null);e.a=o.exports},"2f21":function(t,e,n){"use strict";var i=n("79e5");t.exports=function(t,e){return!!t&&i((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"4f7f":function(t,e,n){"use strict";var i=n("c26b"),s=n("b39a");t.exports=n("e0b8")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return i.def(s(this,"Set"),t=0===t?0:t,t)}},i)},"55dd":function(t,e,n){"use strict";var i=n("5ca1"),s=n("d8e8"),o=n("4bf8"),r=n("79e5"),a=[].sort,c=[1,2,3];i(i.P+i.F*(r((function(){c.sort(void 0)}))||!r((function(){c.sort(null)}))||!n("2f21")(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),s(t))}})},"67ab":function(t,e,n){var i=n("ca5a")("meta"),s=n("d3f4"),o=n("69a8"),r=n("86cc").f,a=0,c=Object.isExtensible||function(){return!0},u=!n("79e5")((function(){return c(Object.preventExtensions({}))})),l=function(t){r(t,i,{value:{i:"O"+ ++a,w:{}}})},f=t.exports={KEY:i,NEED:!1,fastKey:function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,i)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[i].i},getWeak:function(t,e){if(!o(t,i)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[i].w},onFreeze:function(t){return u&&f.NEED&&c(t)&&!o(t,i)&&l(t),t}}},b39a:function(t,e,n){var i=n("d3f4");t.exports=function(t,e){if(!i(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},c26b:function(t,e,n){"use strict";var i=n("86cc").f,s=n("2aeb"),o=n("dcbc"),r=n("9b43"),a=n("f605"),c=n("4a59"),u=n("01f9"),l=n("d53b"),f=n("7a56"),d=n("9e1e"),h=n("67ab").fastKey,p=n("b39a"),v=d?"_s":"size",m=function(t,e){var n,i=h(e);if("F"!==i)return t._i[i];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,i){a(t,l,e,"_i"),t._t=e,t._i=s(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=i&&c(i,n,t[u],t)}));return o(l.prototype,{clear:function(){for(var t=p(this,e),n=t._i,i=t._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete n[i.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=p(this,e),i=m(n,t);if(i){var s=i.n,o=i.p;delete n._i[i.i],i.r=!0,o&&(o.n=s),s&&(s.p=o),n._f==i&&(n._f=s),n._l==i&&(n._l=o),n[v]--}return!!i},forEach:function(t){p(this,e);for(var n,i=r(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(i(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(p(this,e),t)}}),d&&i(l.prototype,"size",{get:function(){return p(this,e)[v]}}),l},def:function(t,e,n){var i,s,o=m(t,e);return o?o.v=n:(t._l=o={i:s=h(e,!0),k:e,v:n,p:i=t._l,n:void 0,r:!1},t._f||(t._f=o),i&&(i.n=o),t[v]++,"F"!==s&&(t._i[s]=o)),t},getEntry:m,setStrong:function(t,e,n){u(t,e,(function(t,n){this._t=p(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?l(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,l(1))}),n?"entries":"values",!n,!0),f(e)}}},e0b8:function(t,e,n){"use strict";var i=n("7726"),s=n("5ca1"),o=n("2aba"),r=n("dcbc"),a=n("67ab"),c=n("4a59"),u=n("f605"),l=n("d3f4"),f=n("79e5"),d=n("5cc5"),h=n("7f20"),p=n("5dbc");t.exports=function(t,e,n,v,m,_){var g=i[t],k=g,y=m?"set":"add",b=k&&k.prototype,w={},C=function(t){var e=b[t];o(b,t,"delete"==t||"has"==t?function(t){return!(_&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return _&&!l(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof k&&(_||b.forEach&&!f((function(){(new k).entries().next()})))){var x=new k,I=x[y](_?{}:-0,1)!=x,T=f((function(){x.has(1)})),S=d((function(t){new k(t)})),E=!_&&f((function(){for(var t=new k,e=5;e--;)t[y](e,e);return!t.has(-0)}));S||((k=e((function(e,n){u(e,k,t);var i=p(new g,e,k);return void 0!=n&&c(n,m,i[y],i),i}))).prototype=b,b.constructor=k),(T||E)&&(C("delete"),C("has"),m&&C("get")),(E||I)&&C(y),_&&b.clear&&delete b.clear}else k=v.getConstructor(e,t,m,y),r(k.prototype,n),a.NEED=!0;return h(k,t),w[t]=k,s(s.G+s.W+s.F*(k!=g),w),_||v.setStrong(k,t,m),k}},f86e:function(t,e,n){"use strict";n.r(e),n("4f7f"),n("5df3"),n("1c4c"),n("ac6a"),n("55dd"),n("6762"),n("b54a");var i=["item_bank_chapter_exercise","item_bank_assessment_exercise"],s={name:"e-course-card",props:{course:{type:Object,default:function(){}}},methods:{iconfont:function(t){switch(t){case"audio":return"icon-yinpin";case"doc":return"icon-wendang";case"exercise":return"icon-lianxi";case"flash":return"icon-flash";case"homework":return"icon-zuoye";case"live":return"icon-zhibo";case"ppt":return"icon-ppt";case"discuss":return"icon-taolun";case"testpaper":return"icon-kaoshi";case"text":return"icon-tuwen";case"video":return"icon-shipin";case"download":return"icon-xiazai";default:return""}},toClassroom:function(){this.$emit("toClassroom",this.course.link.classroomId)},toTask:function(){if(i.includes(this.course.type))this.$emit("toItemBankTask",this.course.link.target,this.course.type);else{var t={id:this.course.link.taskId,type:this.course.type,courseId:this.course.link.courseId};this.$emit("toTask",t)}},toCourse:function(){i.includes(this.course.type)?this.toItemBank():this.$emit("toCourse",this.course.link.courseId)},toItemBank:function(){this.$emit("toItemBank",this.course.link.exerciseId)}}},o=n("a6c2"),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"e-course-card"},[n("div",{staticClass:"live-list__item"},[n("div",{staticClass:"live-item__top",domProps:{innerHTML:t._s(t.course.top.html)},on:{click:function(e){return t.toCourse()}}}),n("div",{staticClass:"live-item__content"},[n("div",{staticClass:"live-content__left"},[t.course.content.left.subTitle.isShow?n("div",{staticClass:"live-content__subtitle",domProps:{innerHTML:t._s(t.course.content.left.subTitle.subhtml)}}):t._e(),n("div",{staticClass:"live-content__title"},[n("i",{class:["iconfont",t.iconfont(t.course.type)]}),n("span",{domProps:{innerHTML:t._s(t.course.content.left.subTitle.html)}}),t.course.content.left.dec.isShow?n("div",{staticClass:"live-content__dec"},[n("span",{domProps:{innerHTML:t._s(t.course.content.left.dec.html)}})]):t._e()])]),n("div",{staticClass:"live-content__right"},[t.course.content.right.isShow?n("div",{staticClass:"live-btn live-btn--start",on:{click:function(e){return t.toTask()}}},[t._v("\n          "+t._s(t.$t("e.keepStuding"))+"\n        ")]):n("div",{staticClass:"live-btn live-btn--none"},[t._v(t._s(t.$t("e.notCurrentlySupported")))])])]),t.course.bottom.isShow?n("div",{staticClass:"live-item__bottom van-hairline--top",on:{click:function(e){return t.toClassroom()}}},[n("span",{domProps:{innerHTML:t._s(t.course.bottom.html)}})]):t._e()])])}),[],!1,null,null,null).exports,a=n("2d42"),c=n("0d25"),u=(n("7f7f"),function(t){var e,n,i,s,o,r="flash"!==t.target.task.type,a=(i=t.target).task.seq!==i.seq;return{link:{courseId:t.target.course.id,type:t.target.task.type,taskId:t.target.task.id,classroomId:null===(e=t.target.classroom)||void 0===e?void 0:e.id},type:t.target.task.type,top:{isShow:t.target.course.displayedTitle,html:"<span>".concat(t.target.course.displayedTitle,'</span>\n      <i class="iconfont icon-arrow-right"></i>')},content:{left:{subTitle:{isShow:a,subhtml:"课时".concat(t.target.number,": ").concat(t.target.title),html:function(t,e){return t?"<span>课时".concat(e.number,"</span>").concat(e.task.title):"".concat(e.task.title)}(a,t.target)},dec:{isShow:(s=t.target.task,o=s.type,["audio","video","live"].includes(o)),html:' <span class="live-content__time">'.concat(function(t){return"时长: ".concat(Object(c.formatTimeByNumber)(t.task.length))}(t.target),"</span>")}},right:{isShow:"".concat(r)}},bottom:{isShow:t.target.classroom,html:"<span>".concat((null===(n=t.target.classroom)||void 0===n?void 0:n.title)||"",'</span>\n               <i class="iconfont icon-arrow-right"></i>')}}}),l=function(t){return["item_bank_chapter_exercise","item_bank_assessment_exercise"].includes(t.targetType)?function(t){var e,n,i,s,o,r;return{link:{assessmentId:null===(e=t.target.assessment)||void 0===e?void 0:e.id,moduleId:null===(n=t.target.module)||void 0===n?void 0:n.id,answerRecordId:null===(i=t.target.answerRecord)||void 0===i?void 0:i.id,exerciseId:null===(s=t.target.exercise)||void 0===s?void 0:s.id,targetId:t.targetId,status:null===(o=t.target.answerRecord)||void 0===o?void 0:o.status,itemCategoryId:null===(r=t.target.itemCategory)||void 0===r?void 0:r.id,target:t.target},type:t.targetType,top:{isShow:t.target.exercise.title,html:"<span>".concat(t.target.exercise.title,'</span>\n      <i class="iconfont icon-arrow-right"></i>')},content:{left:{subTitle:{isShow:!1,subhtml:"",html:function(t){return"item_bank_chapter_exercise"===t.targetType?"".concat(t.target.module.title,"-").concat(t.target.itemCategory.name):"".concat(t.target.module.title,"-").concat(t.target.assessment.name)}(t)},dec:{isShow:!1,html:" "}},right:{isShow:!0}},bottom:{isShow:!1,html:""}}}(t):u(t)},f=n("3ce7"),d={name:"history-learn",components:{ECard:r,empty:a.a},data:function(){return{course:[],lesson:{},sort:[],isRequestComplete:!1,loading:!1,finished:!1,refreshing:!1,query:{limit:10,offset:0,type:"task"},token:""}},computed:{noData:function(){return this.isRequestComplete&&!this.sort.length}},created:function(){this.setTitle(),this.getUserInfo()},filters:{cardDataList:l},methods:{setTitle:function(){window.postNativeMessage({action:"kuozhi_native_header",data:{title:"历史学习"}})},getHistoryLearn:function(){var t=this;f.a.myhistoryLearn({params:this.query,headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Token":this.token}}).then((function(e){t.formateData(e),t.isRequestComplete=!0})).catch((function(e){t.sendError(e)}))},formateData:function(t){var e=this,n=this.sort;t.data.forEach((function(t){var i=Object(c.formatchinaTime)(new Date(t.date));n.push(i),e.lesson[i]||e.$set(e.lesson,i,[]),e.lesson[i].push(t)})),this.sort=Array.from(new Set(n)),this.course=this.course.concat(t.data),this.$set(this.query,"offset",this.course.length),this.loading=!1,this.course.length>=t.paging.total&&(this.finished=!0)},initData:function(){this.sort=[],this.course=[],this.lesson={},this.query={limit:10,offset:0,type:"task"},this.refreshing=!1,this.finished=!1,this.isRequestComplete=!1},onLoad:function(){if(this.refreshing)return this.initData(),void this.getHistoryLearn();!this.finished&&this.isRequestComplete&&this.getHistoryLearn()},onRefresh:function(){this.finished=!1,this.loading=!0,this.onLoad()},getUserInfo:function(){var t=this;window.nativeCallback=function(e){t.token=e.token,t.getHistoryLearn()},window.postNativeMessage({action:"kuozhi_login_user",data:{force:1}})},toClassroom:function(t){window.postNativeMessage({action:"kuozhi_classroom",data:{classroomId:t}})},toTask:function(t){window.postNativeMessage({action:"kuozhi_learn_task",data:{taskId:t.id,taskType:t.type,courseId:t.courseId}})},toItemBankTask:function(t,e){window.postNativeMessage({action:"kuozhi_itembank_task",data:{task:t,type:e}})},toCourse:function(t){window.postNativeMessage({action:"kuozhi_course",data:{courseId:t}})},toItemBank:function(t){window.postNativeMessage({action:"kuozhi_itembank",data:{exerciseId:t}})},sendError:function(t){window.postNativeMessage({action:"kuozhi_h5_error",data:{code:t.code,message:t.message}})}}},h=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("div",{staticClass:"app history-learn"},[n("div",{staticClass:"history-learn-list"},[n("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.sort,(function(e,i){return n("div",{key:i},[n("div",{staticClass:"history-learn-date van-hairline--bottom"},[t._v("\n            "+t._s(e)+"\n          ")]),t.isRequestComplete?t._l(t.lesson[e],(function(e,i){return n("div",{key:i},[e.target?n("e-card",{key:i,attrs:{course:t._f("cardDataList")(e,e)},on:{toClassroom:t.toClassroom,toTask:t.toTask,toCourse:t.toCourse,toItemBank:t.toItemBank,toItemBankTask:t.toItemBankTask}}):t._e()],1)})):t._e()],2)})),0)],1),t.noData?n("empty",{staticClass:"empty__history_learn",attrs:{text:"空空如也，暂无内容"}}):t._e()],1)])}),[],!1,null,null,null);e.default=h.exports}}]);