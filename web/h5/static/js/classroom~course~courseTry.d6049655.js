(window.webpackJsonp=window.webpackJsonp||[]).push([["classroom~course~courseTry"],{4127:function(e,t,r){"use strict";var s=r("d233"),i=r("b313"),n=Object.prototype.hasOwnProperty,o={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,a(t)?t:[t])},u=Date.prototype.toISOString,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:s.encode,encodeValuesOnly:!1,formatter:i.formatters[i.default],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},f=function e(t,r,i,n,o,c,u,f,d,h,y,m,b){var v=t;if("function"==typeof u?v=u(r,v):v instanceof Date?v=h(v):"comma"===i&&a(v)&&(v=v.join(",")),null===v){if(n)return c&&!m?c(r,p.encoder,b):r;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||s.isBuffer(v))return c?[y(m?r:c(r,p.encoder,b))+"="+y(c(v,p.encoder,b))]:[y(r)+"="+y(String(v))];var g,k=[];if(void 0===v)return k;if(a(u))g=u;else{var w=Object.keys(v);g=f?w.sort(f):w}for(var _=0;_<g.length;++_){var O=g[_];o&&null===v[O]||(a(v)?l(k,e(v[O],"function"==typeof i?i(r,O):r,i,n,o,c,u,f,d,h,y,m,b)):l(k,e(v[O],r+(d?"."+O:"["+O+"]"),i,n,o,c,u,f,d,h,y,m,b)))}return k};e.exports=function(e,t){var r,s=e,c=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i.default;if(void 0!==e.format){if(!n.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var s=i.formatters[r],o=p.filter;return("function"==typeof e.filter||a(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:o,formatter:s,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof c.filter?s=(0,c.filter)("",s):a(c.filter)&&(r=c.filter);var u,d=[];if("object"!=typeof s||null===s)return"";u=t&&t.arrayFormat in o?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var h=o[u];r||(r=Object.keys(s)),c.sort&&r.sort(c.sort);for(var y=0;y<r.length;++y){var m=r[y];c.skipNulls&&null===s[m]||l(d,f(s[m],m,h,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.formatter,c.encodeValuesOnly,c.charset))}var b=d.join(c.delimiter),v=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),b.length>0?v+b:""}},4328:function(e,t,r){"use strict";var s=r("4127"),i=r("9e6a"),n=r("b313");e.exports={formats:n,parse:i,stringify:s}},"50ad":function(e,t,r){"use strict";var s=r("8171");r.n(s).a},7067:function(e,t,r){"use strict";r("e17f");var s=r("2241"),i=(r("e7e5"),r("d399")),n=r("a026"),o=r("3ce7"),a=/micromessenger/.test(navigator.userAgent.toLowerCase());t.a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||r&&!t)i.a.fail("缺少分享参数");else{var c={domainUri:location.origin,itemUri:"",source:"h5"};o.a.marketingActivities({query:{activityId:e},data:c}).then((function(e){var o=-1!==e.url.indexOf("?")?"&":"?",c=r?"".concat(t).concat(o,"ticket=").concat(e.ticket):e.url;a?window.location.href=c:s.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{n.default.prototype.$copyText(c).then((function(){i.a.success("复制成功")}),(function(){i.a.fail("请更换浏览器复制")}))}catch(e){i.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(e){i.a.fail(e.message)}))}}},8171:function(e,t,r){},"9e6a":function(e,t,r){"use strict";var s=r("d233"),i=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:s.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},o=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},a=function(e,t,r){if(e){var s=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/g,o=/(\[[^[\]]*])/.exec(s),a=o?s.slice(0,o.index):s,c=[];if(a){if(!r.plainObjects&&i.call(Object.prototype,a)&&!r.allowPrototypes)return;c.push(a)}for(var l=0;null!==(o=n.exec(s))&&l<r.depth;){if(l+=1,!r.plainObjects&&i.call(Object.prototype,o[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(o[1])}return o&&c.push("["+s.slice(o.index)+"]"),function(e,t,r){for(var s=t,i=e.length-1;i>=0;--i){var n,o=e[i];if("[]"===o&&r.parseArrays)n=[].concat(s);else{n=r.plainObjects?Object.create(null):{};var a="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,c=parseInt(a,10);r.parseArrays||""!==a?!isNaN(c)&&o!==a&&String(c)===a&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(n=[])[c]=s:n[a]=s:n={0:s}}s=n}return s}(c,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return n;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?n.charset:e.charset;return{allowDots:void 0===e.allowDots?n.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:n.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:n.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:n.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:n.comma,decoder:"function"==typeof e.decoder?e.decoder:n.decoder,delimiter:"string"==typeof e.delimiter||s.isRegExp(e.delimiter)?e.delimiter:n.delimiter,depth:"number"==typeof e.depth?e.depth:n.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:n.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:n.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:n.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:n.strictNullHandling}}(t);if(""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var c="string"==typeof e?function(e,t){var r,a={},c=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,l=t.parameterLimit===1/0?void 0:t.parameterLimit,u=c.split(t.delimiter,l),p=-1,f=t.charset;if(t.charsetSentinel)for(r=0;r<u.length;++r)0===u[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===u[r]?f="utf-8":"utf8=%26%2310003%3B"===u[r]&&(f="iso-8859-1"),p=r,r=u.length);for(r=0;r<u.length;++r)if(r!==p){var d,h,y=u[r],m=y.indexOf("]="),b=-1===m?y.indexOf("="):m+1;-1===b?(d=t.decoder(y,n.decoder,f),h=t.strictNullHandling?null:""):(d=t.decoder(y.slice(0,b),n.decoder,f),h=t.decoder(y.slice(b+1),n.decoder,f)),h&&t.interpretNumericEntities&&"iso-8859-1"===f&&(h=o(h)),h&&t.comma&&h.indexOf(",")>-1&&(h=h.split(",")),i.call(a,d)?a[d]=s.combine(a[d],h):a[d]=h}return a}(e,r):e,l=r.plainObjects?Object.create(null):{},u=Object.keys(c),p=0;p<u.length;++p){var f=u[p],d=a(f,c[f],r);l=s.merge(l,d,r)}return s.compact(l)}},a556:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r("e7e5");var s=r("d399"),i=r("6647"),n=function(e){switch(e){case"course":Object(s.a)(i.a.t("goods.courseClosedToast"));break;case"classroom":Object(s.a)(i.a.t("goods.classroomClosedToast"));break;case"exercise":Object(s.a)(i.a.t("goods.exerciseClosedToast"))}}},b127:function(e,t,r){"use strict";r("8e6e"),r("456d"),r("e7e5");var s=r("d399"),i=(r("6762"),r("2fdb"),r("ac6a"),r("c5f6"),r("bd86")),n=r("2f62"),o=r("0d25"),a=r("faa5");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={mixins:[r("d863").a],props:{hiddeTitle:{type:Boolean,default:!1},errorMsg:{type:String,default:""}},data:function(){return{directoryArray:[],chapters:[],tasks:[],unit:[],optionalMap:[],unitShow:{},firstLesson:""}},computed:l(l(l({},Object(n.e)("course",{details:function(e){return e.details},joinStatus:function(e){return e.joinStatus},courseLessons:function(e){return e.courseLessons},selectedPlanId:function(e){return e.selectedPlanId}})),Object(n.e)(["courseSettings","user"])),{},{currentCourseType:function(){return Number(this.details.parentId)?this.$t("courseLearning.classroom"):this.$t("courseLearning.course")},liveClass:function(){return function(e){var t=(new Date).getTime(),r=new Date(1e3*e.startTime),s=new Date(1e3*e.endTime);return t<=r?"grey-medium":t>s?"ungenerated"===e.activity.replayStatus?"live-done":"live-replay":"living"}}}),watch:{selectedPlanId:{deep:!0,immediate:!0,handler:function(e){var t=this;if(this.courseLessons.length){var r=0,s=0,i=0;this.directoryArray=this.courseLessons.map((function(e){if(t.firstLesson||(t.firstLesson=e.type),r++,t.$set(e,"show",!0),"chapter"===e.type&&(i++,r=0),"unit"===e.type&&(s=r-1),"lesson"===e.type){var n="chapter"===t.firstLesson?Math.max(i-1,0):Math.max(i,0),o=s;t.$set(e,"show","".concat(n,"-").concat(o))}return e})),this.getTasks(this.directoryArray)}}}},methods:l(l({},Object(n.d)("course",{setSourceType:a.A})),{},{lessonToggle:function(e,t){var r="".concat(e,"-").concat(t);this.$set(this.unitShow,r,!this.unitShow[r])},filterNumber:function(e,t,r){return r?"":"1"===e.isOptional?this.$t("courseLearning.optional"):t+1},getTasks:function(e){var t=this,r=[],s=0,i=0;this.chapters=[],this.tasks=[],this.unit=[],this.optionalMap=[],e.forEach((function(e){if("lesson"==e.type&&(i++,s=Number(e.isOptional)?++s:s,t.optionalMap[i]=s,e.tasks.forEach((function(e){e.tagStatus=t.getCurrentStatus(e)}))),"chapter"!==e.type){if("unit"===e.type){var n="chapter"===t.firstLesson?t.chapters.length-1:t.chapters.length,o=r.length;t.$set(t.unitShow,"".concat(n,"-").concat(o),!0),t.unit.push(e)}r.push(e)}else r.length>0?(t.tasks.push([].concat(r)),r=[]):t.chapters.length>0&&t.tasks.push([]),t.chapters.push(e)})),this.unit.length&&"chapter"===this.firstLesson||this.$set(this.unitShow,"".concat(0,"-",0),!0),"chapter"!==e[e.length-1].type&&this.tasks.push(r),"chapter"!==e[0].type&&this.chapters.unshift({show:!0})},getCurrentStatus:function(e){return Number(e.isFree)?"is-free":Number(this.details.tryLookable)&&"video"===e.type&&e.activity.mediaStorage?"is-tryLook":""},filterTaskStatus:function(e){return this.details.member||"is-free"!==e.tagStatus?this.details.member||"is-tryLook"!==e.tagStatus?"":this.$t("courseLearning.preview"):this.$t("courseLearning.free")},lessonCellClick:function(e){if(this.errorMsg||"create"===e.status)this.$emit("showDialog");else if(!this.details.allowAnonymousPreview&&this.$router.push({name:"login",query:{redirect:this.redirect}}),!this.joinStatus&&["is-tryLook","is-free"].includes(e.tagStatus))switch(e.type){case"video":case"audio":case"ppt":this.$router.push({name:"course_try"}),this.setSourceType({sourceType:e.type,taskId:e.id});break;case"doc":case"text":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:e.id,type:e.type,preview:1}});break;default:return Object(s.a)("".concat(this.$t("courseLearning.pleaseJoinFirst")).concat(this.currentCourseType))}else this.joinStatus?this.showTypeDetail(e):Object(s.a)("".concat(this.$t("courseLearning.pleaseJoinFirst")).concat(this.currentCourseType))},showTypeDetail:function(e){if("published"===e.status)switch(e.type){case"video":"self"===e.mediaSource?this.setSourceType({sourceType:"video",taskId:e.id}):Object(s.a)(this.$t("courseLearning.doesNotSupportThisType"));break;case"audio":this.setSourceType({sourceType:"audio",taskId:e.id});break;case"ppt":this.setSourceType({sourceType:"ppt",taskId:e.id});break;case"text":case"doc":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:e.id,type:e.type}});break;case"live":var t=!1;if(new Date>new Date(1e3*e.endTime)){if("videoGenerated"==e.activity.replayStatus)return void("self"===e.mediaSource?this.setSourceType({sourceType:"video",taskId:e.id}):Object(s.a)(this.$t("courseLearning.doesNotSupportThisType")));if("ungenerated"==e.activity.replayStatus)return void Object(s.a)(this.$t("courseLearning.noReplay"));t=!0}this.$router.push({name:"live",query:{courseId:this.selectedPlanId,taskId:e.id,type:e.type,title:e.title,replay:t}});break;default:Object(s.a)(this.$t("courseLearning.doesNotSupportThisType"))}else Object(s.a)(this.$t("courseLearning.stayTuned"))}}),filters:{liveStatusText:function(e){var t=(new Date).getTime(),r=new Date(1e3*e.startTime),s=new Date(1e3*e.endTime);return t<=r?Object(o.formatCompleteTime)(r):t>s?"ungenerated"===e.activity.replayStatus?"已结束":"回放":"直播中"}}},p=r("a6c2"),f=Object(p.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("e-panel",{staticClass:"directory",attrs:{"hidde-title":e.hiddeTitle,title:e.$t("courseLearning.catalogue")}},[0==e.courseLessons.length?r("div",{staticClass:"empty"},[e._v(e._s(e.$t("courseLearning.noLearningTasks")))]):r("div",{staticClass:"directory-list"},e._l(e.chapters,(function(t,s){return r("div",{key:s,staticClass:"directory-list__item"},["chapter"===t.type?r("div",{staticClass:"directory-list__item-chapter",on:{click:function(e){t.show=!t.show}}},[r("span",{staticClass:"text-overflow"},[e._v("第"+e._s(t.number)+e._s(e.courseSettings.chapter_name)+"："+e._s(t.title))]),r("i",{class:[t.show?"icon-packup":"icon-unfold"]})]):e._e(),e._l(e.tasks[s],(function(i,n){return r("div",{key:n,class:["directory-list__item-unit",{"unit-show":t.show||t.show&&"lesson"===e.tasks[s][0].type}]},["unit"===i.type?r("div",{staticClass:"lesson-cell__unit"},[r("span",{staticClass:"lesson-cell__unit-title text-overflow"},[e._v("第"+e._s(i.number)+e._s(e.courseSettings.part_name)+"："+e._s(i.title))]),r("i",{class:[e.unitShow[s+"-"+n]?"icon-packup":"icon-unfold"],on:{click:function(t){return e.lessonToggle(s,n)}}})]):e._e(),"lesson"===i.type?r("div",{staticClass:"lesson-cell__hour text-overflow",class:{"lesson-show":e.unitShow[i.show]||"lesson"===e.tasks[s][0].type}},[i.tasks.length>1?r("div",[r("div",{staticClass:"lesson-cell__lesson text-overflow"},[r("i",{staticClass:"h5-icon h5-icon-dot color-primary text-18"}),r("span",[e._v(e._s(Number(i.isOptional)?e.$t("courseLearning.optional"):e.$t("courseLearning.lesson"))+"\n                "+e._s(Number(i.isOptional)?" ":i.number-e.optionalMap[i.number]+"：")+e._s(i.title))])]),e._l(i.tasks,(function(t,s){return r("div",{key:s,class:["box","show-box"]},[r("div",{staticClass:"lesson-cell"},[Number(i.isOptional)?e._e():r("span",{staticClass:"lesson-cell__number pull-left"},[e._v(e._s(e.filterNumber(t,s)))]),r("div",{class:["lesson-cell__content","live"===i.tasks[s].type?"pr10":""],on:{click:function(r){return e.lessonCellClick(t)}}},[r("div",{staticClass:"lesson-cell__text"},[r("span",{staticClass:"text-overflow"},[e._v(e._s(t.title))]),"live"===i.tasks[s].type&&"published"===i.tasks[s].status?r("span",{class:[e.liveClass(i.tasks[s]),"live-text","ml5"]},[e._v(e._s(e._f("liveStatusText")(i.tasks[s])))]):e._e()]),r("span",{staticClass:"lesson-cell-last__text"},[e._v(e._s(e._f("taskType")(t))+e._s(e._f("filterTask")(t)))])]),e.details.member?e._e():r("div",{class:["lesson-cell__status",e.details.member?"":t.tagStatus]},[e._v("\n                  "+e._s(e.filterTaskStatus(t))+"\n                ")])])])}))],2):e._e(),1===i.tasks.length?r("div",[r("div",{staticClass:"lesson-cell__lesson text-overflow",on:{click:function(t){return e.lessonCellClick(i.tasks[0])}}},[r("i",{staticClass:"h5-icon h5-icon-dot color-primary text-18 pull-left"}),r("div",{staticClass:"lesson-cell__text "},[r("span",{staticClass:"pl3 text-overflow"},[e._v(e._s(Number(i.isOptional)?e.$t("courseLearning.optional"):e.$t("courseLearning.lesson"))+"\n                  "+e._s(Number(i.isOptional)?" ":i.number-e.optionalMap[i.number]+"：")+e._s(i.tasks[0].title))]),"published"===i.tasks[0].status&&"live"===i.tasks[0].type?r("span",{class:[e.liveClass(i.tasks[0]),"live-text","ml5"]},[e._v(e._s(e._f("liveStatusText")(i.tasks[0])))]):e._e()]),r("div",{staticClass:"lesson-cell"},[r("span",{staticClass:"lesson-cell__number"},[e._v(e._s(e.filterNumber(i.tasks[0],0,!0)))]),r("div",{staticClass:"lesson-cell__content pl3"},[r("span",{staticClass:"lesson-cell-last__text"},[e._v(e._s(e._f("taskType")(i.tasks[0]))+e._s(e._f("filterTask")(i.tasks[0])))])]),e.details.member?e._e():r("div",{class:["lesson-cell__status",e.details.member?"":i.tasks[0].tagStatus]},[e._v("\n                  "+e._s(e.filterTaskStatus(i.tasks[0]))+"\n                ")])])])]):e._e()]):e._e()])}))],2)})),0)])}),[],!1,null,null,null);t.a=f.exports},b313:function(e,t,r){"use strict";var s=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return s.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},bced:function(e,t,r){"use strict";var s={name:"ETagLink",props:{tagData:{type:Object,default:{earnings:0,isShow:!1,link:"",className:"",minDirectRewardRatio:0}}}},i=r("a6c2"),n=Object(i.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return this.tagData.isShow?t("div",{staticClass:"e-tag-link",class:this.tagData.className},[t("a",{attrs:{href:this.tagData.link}},[t("span",[this._v("赚"+this._s(this.tagData.earnings)+"元")])])]):this._e()}),[],!1,null,null,null);t.a=n.exports},d233:function(e,t,r){"use strict";var s=Object.prototype.hasOwnProperty,i=Array.isArray,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},s=0;s<e.length;++s)void 0!==e[s]&&(r[s]=e[s]);return r};e.exports={arrayToObject:o,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],s=0;s<t.length;++s)for(var n=t[s],o=n.obj[n.prop],a=Object.keys(o),c=0;c<a.length;++c){var l=a[c],u=o[l];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:o,prop:l}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var s=[],n=0;n<r.length;++n)void 0!==r[n]&&s.push(r[n]);t.obj[t.prop]=s}}}(t),e},decode:function(e,t,r){var s=e.replace(/\+/g," ");if("iso-8859-1"===r)return s.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(s)}catch(e){return s}},encode:function(e,t,r){if(0===e.length)return e;var s="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(s).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var i="",o=0;o<s.length;++o){var a=s.charCodeAt(o);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?i+=s.charAt(o):a<128?i+=n[a]:a<2048?i+=n[192|a>>6]+n[128|63&a]:a<55296||a>=57344?i+=n[224|a>>12]+n[128|a>>6&63]+n[128|63&a]:(o+=1,a=65536+((1023&a)<<10|1023&s.charCodeAt(o)),i+=n[240|a>>18]+n[128|a>>12&63]+n[128|a>>6&63]+n[128|63&a])}return i},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(i(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!s.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var a=t;return i(t)&&!i(r)&&(a=o(t,n)),i(t)&&i(r)?(r.forEach((function(r,i){if(s.call(t,i)){var o=t[i];o&&"object"==typeof o&&r&&"object"==typeof r?t[i]=e(o,r,n):t.push(r)}else t[i]=r})),t):Object.keys(r).reduce((function(t,i){var o=r[i];return s.call(t,i)?t[i]=e(t[i],o,n):t[i]=o,t}),a)}}},d863:function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d"),r("a481");var s=r("bd86"),i=r("7067"),n=r("3ce7"),o=r("faa5"),a=r("2f62");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a={data:function(){return{redirect:""}},computed:l({},Object(a.e)({user:function(e){return e.user}})),created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:l(l({},Object(a.d)([o.w])),{},{afterLogin:function(){var e=this;this.checkMobileBind().then((function(t){var r=t.is_bind_mobile,s=t.mobile_bind_mode;e[o.w]({is_bind_mobile:r,mobile_bind_mode:s}),r||"closed"===s?setTimeout(e.jumpAction,1e3):e.$router.replace({name:"binding",query:{redirect:e.$route.query.redirect}})})).catch((function(){setTimeout(e.jumpAction,1e3)}))},jumpAction:function(){var e=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",t=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",r=this.$route.query.callbackType,s=this.$route.query.activityId,n=decodeURIComponent(this.$route.query.callback);if(r)switch(r){case"marketing":Object(i.a)(s,n)}else t?this.$router.replace({path:e,query:{backUrl:t}}):this.$router.replace({path:e})},checkMobileBind:function(){return n.a.mobileBindCheck({query:{userId:this.user.id}})}})}},fd23:function(e,t,r){"use strict";r("6b54");var s=r("0d25"),i={props:{activity:{type:Object,default:{}}},data:function(){return{timer:null,counting:!0,seckillClass:"seckill-unstart",seckilling:!1,buyCountDownText:"",endCountDownText:""}},computed:{statusTitle:{get:function(){var e=this.activity.status;if("unstart"===e)return this.counting=!1,"秒杀未开始";if("closed"===e)return this.counting=!1,this.seckillClass="seckill-closed","秒杀已结束";if("ongoing"===e){if(!this.counting)return"秒杀已结束";if(0==this.activity.productRemaind)return this.counting=!1,this.seckillClass="seckill-closed",this.$emit("sellOut",!0),"商品已售空";var t=(new Date).getTime();if(this.startStamp<t&&t<this.endStamp)return this.seckilling=!0,this.counting=!0,this.seckillClass="seckill-ongoing",'距离结束仅剩<span class="ml10 mlm">'.concat(this.endCountDownText,"</span>");if(this.startStamp>t)return this.seckilling=!1,this.counting=!0,this.seckillClass="seckill-unstart",'距离开抢<span class="ml10 mlm">'.concat(this.buyCountDownText,"</span>")}},set:function(){}},startStamp:function(){return new Date(this.activity.startTime).getTime()},endStamp:function(){return new Date(this.activity.endTime).getTime()}},created:function(){this.countDownTime()},beforeDestroy:function(){this.clearInterval()},methods:{countDownTime:function(){var e=this;this.timer=setInterval((function(){e.endCountDownText=Object(s.dateTimeDown)(e.endStamp),e.buyCountDownText=Object(s.dateTimeDown)(e.startStamp),"已到期"==e.endCountDownText&&(e.seckillClass="seckill-closed",e.counting=!1,e.clearInterval(),e.$emit("timesUp"))}),1e3)},clearInterval:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.timer),this.timer=null}))}},n=(r("50ad"),r("a6c2")),o=Object(n.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:["seckill-countdown-container clearfix",this.seckillClass]},[t("span",{staticClass:"pull-left status-title"},[this._v("秒杀"+this._s("ongoing"===this.activity.status&&this.seckilling?"中":""))]),t("div",{staticClass:"pull-right text-12",domProps:{innerHTML:this._s(this.statusTitle)}})])}),[],!1,null,null,null);t.a=o.exports}}]);