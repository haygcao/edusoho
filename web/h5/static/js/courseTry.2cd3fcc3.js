(window.webpackJsonp=window.webpackJsonp||[]).push([["courseTry"],{"32e6":function(t,e){function s(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function i(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,r){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof e&&(r=e,e={}),e=e||{},r=r||function(){},a.type=e.type||"text/javascript",a.charset=e.charset||"utf8",a.async=!("async"in e)||!!e.async,a.src=t,e.attrs&&function(t,e){for(var s in e)t.setAttribute(s,e[s])}(a,e.attrs),e.text&&(a.text=""+e.text),("onload"in a?s:i)(a,r),a.onload||s(a,r),n.appendChild(a)}},4127:function(t,e,s){"use strict";var i=s("d233"),r=s("b313"),n=Object.prototype.hasOwnProperty,a={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},o=Array.isArray,c=Array.prototype.push,l=function(t,e){c.apply(t,o(e)?e:[e])},u=Date.prototype.toISOString,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,formatter:r.formatters[r.default],indices:!1,serializeDate:function(t){return u.call(t)},skipNulls:!1,strictNullHandling:!1},f=function t(e,s,r,n,a,c,u,f,p,h,y,m,v){var b=e;if("function"==typeof u?b=u(s,b):b instanceof Date?b=h(b):"comma"===r&&o(b)&&(b=b.join(",")),null===b){if(n)return c&&!m?c(s,d.encoder,v):s;b=""}if("string"==typeof b||"number"==typeof b||"boolean"==typeof b||i.isBuffer(b))return c?[y(m?s:c(s,d.encoder,v))+"="+y(c(b,d.encoder,v))]:[y(s)+"="+y(String(b))];var g,k=[];if(void 0===b)return k;if(o(u))g=u;else{var _=Object.keys(b);g=f?_.sort(f):_}for(var w=0;w<g.length;++w){var O=g[w];a&&null===b[O]||(o(b)?l(k,t(b[O],"function"==typeof r?r(s,O):s,r,n,a,c,u,f,p,h,y,m,v)):l(k,t(b[O],s+(p?"."+O:"["+O+"]"),r,n,a,c,u,f,p,h,y,m,v)))}return k};t.exports=function(t,e){var s,i=t,c=function(t){if(!t)return d;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||d.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var s=r.default;if(void 0!==t.format){if(!n.call(r.formatters,t.format))throw new TypeError("Unknown format option provided.");s=t.format}var i=r.formatters[s],a=d.filter;return("function"==typeof t.filter||o(t.filter))&&(a=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:d.addQueryPrefix,allowDots:void 0===t.allowDots?d.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:d.charsetSentinel,delimiter:void 0===t.delimiter?d.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:d.encode,encoder:"function"==typeof t.encoder?t.encoder:d.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:d.encodeValuesOnly,filter:a,formatter:i,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:d.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:d.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:d.strictNullHandling}}(e);"function"==typeof c.filter?i=(0,c.filter)("",i):o(c.filter)&&(s=c.filter);var u,p=[];if("object"!=typeof i||null===i)return"";u=e&&e.arrayFormat in a?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var h=a[u];s||(s=Object.keys(i)),c.sort&&s.sort(c.sort);for(var y=0;y<s.length;++y){var m=s[y];c.skipNulls&&null===i[m]||l(p,f(i[m],m,h,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.formatter,c.encodeValuesOnly,c.charset))}var v=p.join(c.delimiter),b=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),v.length>0?b+v:""}},4328:function(t,e,s){"use strict";var i=s("4127"),r=s("9e6a"),n=s("b313");t.exports={formats:n,parse:r,stringify:i}},"4c51":function(t,e,s){"use strict";s.r(e);var i=s("db72"),r=s("b127"),n=s("202a"),a=s("2f62"),o=s("faa5"),c={components:{Directory:r.a,DetailHead:n.a},computed:Object(i.a)({},Object(a.d)("course",{details:function(t){return t.details}}),{},Object(a.d)({isLoading:function(t){return t.isLoading}})),beforeRouteLeave:function(t,e,s){this.$store.commit("course/".concat(o.q),{sourceType:"img"}),s()}},l=s("a6c2"),u=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"course-detail try"},[this.isLoading?e("e-loading"):this._e(),e("detail-head",{attrs:{"course-set":this.details.courseSet}}),e("directory",{attrs:{"hidde-title":!0,"course-items":this.details.courseItems}})],1)}),[],!1,null,null,null);e.default=u.exports},"50ad":function(t,e,s){"use strict";var i=s("e1cd");s.n(i).a},7067:function(t,e,s){"use strict";s("e17f");var i=s("2241"),r=(s("e7e5"),s("d399")),n=s("a026"),a=s("3ce7"),o=/micromessenger/.test(navigator.userAgent.toLowerCase());e.a=function(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t||s&&!e)r.a.fail("缺少分享参数");else{var c={domainUri:location.origin,itemUri:"",source:"h5"};a.a.marketingActivities({query:{activityId:t},data:c}).then((function(t){var a=-1!==t.url.indexOf("?")?"&":"?",c=s?"".concat(e).concat(a,"ticket=").concat(t.ticket):t.url;o?window.location.href=c:i.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{n.a.prototype.$copyText(c).then((function(){r.a.success("复制成功")}),(function(){r.a.fail("请更换浏览器复制")}))}catch(t){r.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(t){r.a.fail(t.message)}))}}},"9e6a":function(t,e,s){"use strict";var i=s("d233"),r=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:i.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(t){return t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(parseInt(e,10))}))},o=function(t,e,s){if(t){var i=s.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,n=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(i),o=a?i.slice(0,a.index):i,c=[];if(o){if(!s.plainObjects&&r.call(Object.prototype,o)&&!s.allowPrototypes)return;c.push(o)}for(var l=0;null!==(a=n.exec(i))&&l<s.depth;){if(l+=1,!s.plainObjects&&r.call(Object.prototype,a[1].slice(1,-1))&&!s.allowPrototypes)return;c.push(a[1])}return a&&c.push("["+i.slice(a.index)+"]"),function(t,e,s){for(var i=e,r=t.length-1;r>=0;--r){var n,a=t[r];if("[]"===a&&s.parseArrays)n=[].concat(i);else{n=s.plainObjects?Object.create(null):{};var o="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(o,10);s.parseArrays||""!==o?!isNaN(c)&&a!==o&&String(c)===o&&c>=0&&s.parseArrays&&c<=s.arrayLimit?(n=[])[c]=i:n[o]=i:n={0:i}}i=n}return i}(c,e,s)}};t.exports=function(t,e){var s=function(t){if(!t)return n;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?n.charset:t.charset;return{allowDots:void 0===t.allowDots?n.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:n.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:n.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:n.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:n.comma,decoder:"function"==typeof t.decoder?t.decoder:n.decoder,delimiter:"string"==typeof t.delimiter||i.isRegExp(t.delimiter)?t.delimiter:n.delimiter,depth:"number"==typeof t.depth?t.depth:n.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:n.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:n.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:n.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:n.strictNullHandling}}(e);if(""===t||null==t)return s.plainObjects?Object.create(null):{};for(var c="string"==typeof t?function(t,e){var s,o={},c=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,l=e.parameterLimit===1/0?void 0:e.parameterLimit,u=c.split(e.delimiter,l),d=-1,f=e.charset;if(e.charsetSentinel)for(s=0;s<u.length;++s)0===u[s].indexOf("utf8=")&&("utf8=%E2%9C%93"===u[s]?f="utf-8":"utf8=%26%2310003%3B"===u[s]&&(f="iso-8859-1"),d=s,s=u.length);for(s=0;s<u.length;++s)if(s!==d){var p,h,y=u[s],m=y.indexOf("]="),v=-1===m?y.indexOf("="):m+1;-1===v?(p=e.decoder(y,n.decoder,f),h=e.strictNullHandling?null:""):(p=e.decoder(y.slice(0,v),n.decoder,f),h=e.decoder(y.slice(v+1),n.decoder,f)),h&&e.interpretNumericEntities&&"iso-8859-1"===f&&(h=a(h)),h&&e.comma&&h.indexOf(",")>-1&&(h=h.split(",")),r.call(o,p)?o[p]=i.combine(o[p],h):o[p]=h}return o}(t,s):t,l=s.plainObjects?Object.create(null):{},u=Object.keys(c),d=0;d<u.length;++d){var f=u[d],p=o(f,c[f],s);l=i.merge(l,p,s)}return i.compact(l)}},b127:function(t,e,s){"use strict";s("e7e5");var i=s("d399"),r=(s("6762"),s("2fdb"),s("ac6a"),s("c5f6"),s("db72")),n=s("2f62"),a=s("0d25"),o=s("faa5"),c=s("d863"),l=(s("3ce7"),{mixins:[c.a],props:{hiddeTitle:{type:Boolean,default:!1},errorMsg:{type:String,default:""}},data:function(){return{directoryArray:[],chapters:[],tasks:[],unit:[],optionalMap:[],unitShow:{},firstLesson:""}},computed:Object(r.a)({},Object(n.d)("course",{details:function(t){return t.details},joinStatus:function(t){return t.joinStatus},courseLessons:function(t){return t.courseLessons},selectedPlanId:function(t){return t.selectedPlanId}}),{},Object(n.d)(["courseSettings","user"]),{currentCourseType:function(){return Number(this.details.parentId)?"班级":"课程"},liveClass:function(){return function(t){var e=(new Date).getTime(),s=new Date(1e3*t.startTime),i=new Date(1e3*t.endTime);return e<=s?"grey-medium":e>i?"ungenerated"===t.activity.replayStatus?"live-done":"live-replay":"living"}}}),watch:{selectedPlanId:{deep:!0,immediate:!0,handler:function(t){var e=this;if(this.courseLessons.length){var s=0,i=0,r=0;this.directoryArray=this.courseLessons.map((function(t){if(e.firstLesson||(e.firstLesson=t.type),s++,e.$set(t,"show",!0),"chapter"===t.type&&(r++,s=0),"unit"===t.type&&(i=s-1),"lesson"===t.type){var n="chapter"===e.firstLesson?Math.max(r-1,0):Math.max(r,0),a=i;e.$set(t,"show","".concat(n,"-").concat(a))}return t})),this.getTasks(this.directoryArray)}}}},methods:Object(r.a)({},Object(n.c)("course",{setSourceType:o.q}),{lessonToggle:function(t,e){var s="".concat(t,"-").concat(e);this.$set(this.unitShow,s,!this.unitShow[s])},filterNumber:function(t,e,s){return s?"":"1"===t.isOptional?"选修":e+1},getTasks:function(t){var e=this,s=[],i=0,r=0;this.chapters=[],this.tasks=[],this.unit=[],this.optionalMap=[],t.forEach((function(t){if("lesson"==t.type&&(r++,i=Number(t.isOptional)?++i:i,e.optionalMap[r]=i,t.tasks.forEach((function(t){t.tagStatus=e.getCurrentStatus(t)}))),"chapter"!==t.type){if("unit"===t.type){var n="chapter"===e.firstLesson?e.chapters.length-1:e.chapters.length,a=s.length;e.$set(e.unitShow,"".concat(n,"-").concat(a),!0),e.unit.push(t)}s.push(t)}else s.length>0?(e.tasks.push([].concat(s)),s=[]):e.chapters.length>0&&e.tasks.push([]),e.chapters.push(t)})),this.unit.length&&"chapter"===this.firstLesson||this.$set(this.unitShow,"".concat(0,"-",0),!0),"chapter"!==t[t.length-1].type&&this.tasks.push(s),"chapter"!==t[0].type&&this.chapters.unshift({show:!0})},getCurrentStatus:function(t){return Number(t.isFree)?"is-free":Number(this.details.tryLookable)&&"video"===t.type&&t.activity.mediaStorage?"is-tryLook":""},filterTaskStatus:function(t){return this.details.member||"is-free"!==t.tagStatus?this.details.member||"is-tryLook"!==t.tagStatus?"":"试看":"免费"},lessonCellClick:function(t){if(this.errorMsg||"create"===t.status)this.$emit("showDialog");else if(!this.details.allowAnonymousPreview&&this.$router.push({name:"login",query:{redirect:this.redirect}}),!this.joinStatus&&["is-tryLook","is-free"].includes(t.tagStatus))switch(t.type){case"video":case"audio":this.$router.push({name:"course_try"}),this.setSourceType({sourceType:t.type,taskId:t.id});break;case"doc":case"text":case"ppt":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:t.id,type:t.type,preview:1}});break;default:return Object(i.a)("请先加入".concat(this.currentCourseType))}else this.joinStatus?this.showTypeDetail(t):Object(i.a)("请先加入".concat(this.currentCourseType))},showTypeDetail:function(t){if("published"===t.status)switch(t.type){case"video":"self"===t.mediaSource?this.setSourceType({sourceType:"video",taskId:t.id}):Object(i.a)("暂不支持此类型");break;case"audio":this.setSourceType({sourceType:"audio",taskId:t.id});break;case"text":case"ppt":case"doc":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:t.id,type:t.type}});break;case"live":var e=new Date,s=new Date(1e3*t.endTime),r=(new Date(1e3*t.startTime),!1);if(e>s){if("videoGenerated"==t.activity.replayStatus)return void("self"===t.mediaSource?this.setSourceType({sourceType:"video",taskId:t.id}):Object(i.a)("暂不支持此类型"));if("ungenerated"==t.activity.replayStatus)return void Object(i.a)("暂无回放");r=!0}this.$router.push({name:"live",query:{courseId:this.selectedPlanId,taskId:t.id,type:t.type,title:t.title,replay:r}});break;default:Object(i.a)("暂不支持此类型")}else Object(i.a)("敬请期待")}}),filters:{liveStatusText:function(t){var e=(new Date).getTime(),s=new Date(1e3*t.startTime),i=new Date(1e3*t.endTime);return e<=s?Object(a.formatCompleteTime)(s):e>i?"ungenerated"===t.activity.replayStatus?"已结束":"回放":"直播中"}}}),u=s("a6c2"),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("e-panel",{staticClass:"directory",attrs:{"hidde-title":t.hiddeTitle,title:"课程目录"}},[0==t.courseLessons.length?s("div",{staticClass:"empty"},[t._v("暂无学习任务")]):s("div",{staticClass:"directory-list"},t._l(t.chapters,(function(e,i){return s("div",{key:i,staticClass:"directory-list__item"},["chapter"===e.type?s("div",{staticClass:"directory-list__item-chapter",on:{click:function(t){e.show=!e.show}}},[s("span",{staticClass:"text-overflow"},[t._v("第"+t._s(e.number)+t._s(t.courseSettings.chapter_name)+"："+t._s(e.title))]),s("i",{class:[e.show?"icon-packup":"icon-unfold"]})]):t._e(),t._l(t.tasks[i],(function(r,n){return s("div",{key:n,class:["directory-list__item-unit",{"unit-show":e.show||e.show&&"lesson"===t.tasks[i][0].type}]},["unit"===r.type?s("div",{staticClass:"lesson-cell__unit"},[s("span",{staticClass:"lesson-cell__unit-title text-overflow"},[t._v("第"+t._s(r.number)+t._s(t.courseSettings.part_name)+"："+t._s(r.title))]),s("i",{class:[t.unitShow[i+"-"+n]?"icon-packup":"icon-unfold"],on:{click:function(e){return t.lessonToggle(i,n)}}})]):t._e(),"lesson"===r.type?s("div",{staticClass:"lesson-cell__hour text-overflow",class:{"lesson-show":t.unitShow[r.show]||"lesson"===t.tasks[i][0].type}},[r.tasks.length>1?s("div",[s("div",{staticClass:"lesson-cell__lesson text-overflow"},[s("i",{staticClass:"h5-icon h5-icon-dot color-primary text-18"}),s("span",[t._v(t._s(Number(r.isOptional)?"选修 ":"课时 ")+" "+t._s(Number(r.isOptional)?" ":r.number-t.optionalMap[r.number]+"：")+t._s(r.title))])]),t._l(r.tasks,(function(e,i){return s("div",{key:i,class:["box","show-box"]},[s("div",{staticClass:"lesson-cell"},[Number(r.isOptional)?t._e():s("span",{staticClass:"lesson-cell__number pull-left"},[t._v(t._s(t.filterNumber(e,i)))]),s("div",{class:["lesson-cell__content","live"===r.tasks[i].type?"pr10":""],on:{click:function(s){return t.lessonCellClick(e)}}},[s("div",{staticClass:"lesson-cell__text"},[s("span",{staticClass:"text-overflow"},[t._v(t._s(e.title))]),"live"===r.tasks[i].type&&"published"===r.tasks[i].status?s("span",{class:[t.liveClass(r.tasks[i]),"live-text","ml5"]},[t._v(t._s(t._f("liveStatusText")(r.tasks[i])))]):t._e()]),s("span",{staticClass:"lesson-cell-last__text"},[t._v(t._s(t._f("taskType")(e))+t._s(t._f("filterTask")(e)))])]),t.details.member?t._e():s("div",{class:["lesson-cell__status",t.details.member?"":e.tagStatus]},[t._v("\n                  "+t._s(t.filterTaskStatus(e))+"\n                ")])])])}))],2):t._e(),1===r.tasks.length?s("div",[s("div",{staticClass:"lesson-cell__lesson text-overflow",on:{click:function(e){return t.lessonCellClick(r.tasks[0])}}},[s("i",{staticClass:"h5-icon h5-icon-dot color-primary text-18 pull-left"}),s("div",{staticClass:"lesson-cell__text "},[s("span",{staticClass:"pl3 text-overflow"},[t._v(t._s(Number(r.isOptional)?"选修 ":"课时 ")+" "+t._s(Number(r.isOptional)?" ":r.number-t.optionalMap[r.number]+"：")+t._s(r.tasks[0].title))]),"published"===r.tasks[0].status&&"live"===r.tasks[0].type?s("span",{class:[t.liveClass(r.tasks[0]),"live-text","ml5"]},[t._v(t._s(t._f("liveStatusText")(r.tasks[0])))]):t._e()]),s("div",{staticClass:"lesson-cell"},[s("span",{staticClass:"lesson-cell__number"},[t._v(t._s(t.filterNumber(r.tasks[0],0,!0)))]),s("div",{staticClass:"lesson-cell__content pl3"},[s("span",{staticClass:"lesson-cell-last__text"},[t._v(t._s(t._f("taskType")(r.tasks[0]))+t._s(t._f("filterTask")(r.tasks[0])))])]),t.details.member?t._e():s("div",{class:["lesson-cell__status",t.details.member?"":r.tasks[0].tagStatus]},[t._v("\n                  "+t._s(t.filterTaskStatus(r.tasks[0]))+"\n                ")])])])]):t._e()]):t._e()])}))],2)})),0)])}),[],!1,null,null,null);e.a=d.exports},b313:function(t,e,s){"use strict";var i=String.prototype.replace,r=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return i.call(t,r,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},bced:function(t,e,s){"use strict";var i={name:"ETagLink",props:{tagData:{type:Object,default:{earnings:0,isShow:!1,link:"",className:"",minDirectRewardRatio:0}}}},r=s("a6c2"),n=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return this.tagData.isShow?e("div",{staticClass:"e-tag-link",class:this.tagData.className},[e("a",{attrs:{href:this.tagData.link}},[e("span",[this._v("赚"+this._s(this.tagData.earnings)+"元")])])]):this._e()}),[],!1,null,null,null);e.a=n.exports},d233:function(t,e,s){"use strict";var i=Object.prototype.hasOwnProperty,r=Array.isArray,n=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),a=function(t,e){for(var s=e&&e.plainObjects?Object.create(null):{},i=0;i<t.length;++i)void 0!==t[i]&&(s[i]=t[i]);return s};t.exports={arrayToObject:a,assign:function(t,e){return Object.keys(e).reduce((function(t,s){return t[s]=e[s],t}),t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],s=[],i=0;i<e.length;++i)for(var n=e[i],a=n.obj[n.prop],o=Object.keys(a),c=0;c<o.length;++c){var l=o[c],u=a[l];"object"==typeof u&&null!==u&&-1===s.indexOf(u)&&(e.push({obj:a,prop:l}),s.push(u))}return function(t){for(;t.length>1;){var e=t.pop(),s=e.obj[e.prop];if(r(s)){for(var i=[],n=0;n<s.length;++n)void 0!==s[n]&&i.push(s[n]);e.obj[e.prop]=i}}}(e),t},decode:function(t,e,s){var i=t.replace(/\+/g," ");if("iso-8859-1"===s)return i.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(i)}catch(t){return i}},encode:function(t,e,s){if(0===t.length)return t;var i="string"==typeof t?t:String(t);if("iso-8859-1"===s)return escape(i).replace(/%u[0-9a-f]{4}/gi,(function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"}));for(var r="",a=0;a<i.length;++a){var o=i.charCodeAt(a);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=i.charAt(a):o<128?r+=n[o]:o<2048?r+=n[192|o>>6]+n[128|63&o]:o<55296||o>=57344?r+=n[224|o>>12]+n[128|o>>6&63]+n[128|63&o]:(a+=1,o=65536+((1023&o)<<10|1023&i.charCodeAt(a)),r+=n[240|o>>18]+n[128|o>>12&63]+n[128|o>>6&63]+n[128|63&o])}return r},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,s,n){if(!s)return e;if("object"!=typeof s){if(r(e))e.push(s);else{if(!e||"object"!=typeof e)return[e,s];(n&&(n.plainObjects||n.allowPrototypes)||!i.call(Object.prototype,s))&&(e[s]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(s);var o=e;return r(e)&&!r(s)&&(o=a(e,n)),r(e)&&r(s)?(s.forEach((function(s,r){if(i.call(e,r)){var a=e[r];a&&"object"==typeof a&&s&&"object"==typeof s?e[r]=t(a,s,n):e.push(s)}else e[r]=s})),e):Object.keys(s).reduce((function(e,r){var a=s[r];return i.call(e,r)?e[r]=t(e[r],a,n):e[r]=a,e}),o)}}},d863:function(t,e,s){"use strict";s("a481");var i=s("7067");e.a={data:function(){return{redirect:""}},created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:{afterLogin:function(){var t=this,e=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",s=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",r=this.$route.query.callbackType,n=this.$route.query.activityId,a=decodeURIComponent(this.$route.query.callback);setTimeout((function(){if(r)switch(r){case"marketing":Object(i.a)(n,a)}else s?t.$router.replace({path:e,query:{backUrl:s}}):t.$router.replace({path:e})}),2e3)}}}},e1cd:function(t,e,s){},fd23:function(t,e,s){"use strict";s("6b54");var i=s("0d25"),r={props:{activity:{type:Object,default:{}}},data:function(){return{timer:null,counting:!0,seckillClass:"seckill-unstart",seckilling:!1,buyCountDownText:"",endCountDownText:""}},computed:{statusTitle:{get:function(){var t=this.activity.status;if("unstart"===t)return this.counting=!1,"秒杀未开始";if("closed"===t)return this.counting=!1,this.seckillClass="seckill-closed","秒杀已结束";if("ongoing"===t){if(!this.counting)return"秒杀已结束";if(0==this.activity.productRemaind)return this.counting=!1,this.seckillClass="seckill-closed",this.$emit("sellOut",!0),"商品已售空";var e=(new Date).getTime();if(this.startStamp<e&&e<this.endStamp)return this.seckilling=!0,this.counting=!0,this.seckillClass="seckill-ongoing",'距离结束仅剩<span class="ml10 mlm">'.concat(this.endCountDownText,"</span>");if(this.startStamp>e)return this.seckilling=!1,this.counting=!0,this.seckillClass="seckill-unstart",'距离开抢<span class="ml10 mlm">'.concat(this.buyCountDownText,"</span>")}},set:function(){}},startStamp:function(){return new Date(this.activity.startTime).getTime()},endStamp:function(){return new Date(this.activity.endTime).getTime()}},created:function(){this.countDownTime()},beforeDestroy:function(){this.clearInterval()},methods:{countDownTime:function(){var t=this;this.timer=setInterval((function(){t.endCountDownText=Object(i.dateTimeDown)(t.endStamp),t.buyCountDownText=Object(i.dateTimeDown)(t.startStamp),"已到期"==t.endCountDownText&&(t.seckillClass="seckill-closed",t.counting=!1,t.clearInterval(),t.$emit("timesUp"))}),1e3)},clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearInterval(this.timer),this.timer=null}))}},n=(s("50ad"),s("a6c2")),a=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:["seckill-countdown-container clearfix",this.seckillClass]},[e("span",{staticClass:"pull-left status-title"},[this._v("秒杀"+this._s("ongoing"===this.activity.status&&this.seckilling?"中":""))]),e("div",{staticClass:"pull-right text-12",domProps:{innerHTML:this._s(this.statusTitle)}})])}),[],!1,null,null,null);e.a=a.exports}}]);