(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1450:function(t,a,e){"use strict";e.r(a);var r=e(194),s=e.n(r),n=e(349),i=e.n(n),o=e(1490),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(t.query,t.params),e=void 0===a?{}:a;t.data;return o.a.get("/api/dashboard_graphic_datum",{params:e})},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(t.query,t.params),e=void 0===a?{}:a;t.data;return o.a.get("/api/dashboard_rank_list",{params:e})},l=e(1494),d={name:"dashboardCard",components:{},props:{graphicData:{type:Object,require:!0}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},p=(e(1799),e(30)),m=Object(p.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-card"},[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{span:6}},[e("a-card",{staticStyle:{"border-top":"2px solid #5CCFEA"},attrs:{bordered:!1}},[e("a-row",[e("div",{staticClass:"card"},[e("svg-icon",{staticClass:"icon icon-add-student",attrs:{icon:"icon-add-student"}}),t._v(" "),e("div",{staticClass:"right-block"},[e("p",{staticClass:"card-title text-size"},[t._v("昨日新增学员总人数")]),t._v(" "),e("span",{staticClass:"card-count text-size",staticStyle:{color:"#5CCFEA"}},[t._v(t._s(t.graphicData.totalNewStudentNum))])])],1)])],1)],1),t._v(" "),e("a-col",{attrs:{span:6}},[e("a-card",{staticStyle:{"border-top":"2px solid #FFC173"},attrs:{bordered:!1}},[e("a-row",[e("div",{staticClass:"card"},[e("svg-icon",{staticClass:"icon icon-add-student-success",attrs:{icon:"icon-add-student-success"}}),t._v(" "),e("div",{staticClass:"right-block"},[e("p",{staticClass:"card-title text-size"},[t._v("昨日结课学员总人数")]),t._v(" "),e("span",{staticClass:"card-count text-size",staticStyle:{color:"#FFC173"}},[t._v(t._s(t.graphicData.totalFinishedStudentNum))])])],1)])],1)],1),t._v(" "),e("a-col",{attrs:{span:6}},[e("router-link",{attrs:{to:{name:"MultiClassInspection"}}},[e("a-card",{staticStyle:{"border-top":"2px solid #42D668"},attrs:{bordered:!1}},[e("a-row",[e("div",{staticClass:"card"},[e("svg-icon",{staticClass:"icon icon-live-broad",attrs:{icon:"icon-live-broad"}}),t._v(" "),e("div",{staticClass:"right-block"},[e("p",{staticClass:"card-title text-size"},[t._v("今日直播数")]),t._v(" "),e("span",{staticClass:"card-count text-size",staticStyle:{color:"#42D668"}},[t._v(t._s(t.graphicData.todayLiveData.overLiveNum)+"/"),e("span",{staticStyle:{color:"#BEBEBE"}},[t._v(t._s(t.graphicData.todayLiveData.totalLiveNum))])])])],1)])],1)],1)],1),t._v(" "),e("a-col",{attrs:{span:6}},[e("router-link",{attrs:{to:{name:"Overtime"}}},[e("a-card",{staticStyle:{"border-top":"2px solid #FF6666"},attrs:{bordered:!1}},[e("a-row",[e("div",{staticClass:"card"},[e("svg-icon",{staticClass:"icon icon-edit-group",attrs:{icon:"icon-edit-group"}}),t._v(" "),e("div",{staticClass:"right-block"},[e("p",{staticClass:"card-title text-size"},[t._v("超时未批阅数")]),t._v(" "),e("span",{staticClass:"card-count text-size",staticStyle:{color:"#FF6666"}},[t._v(t._s(t.graphicData.timeoutReviewNum))])])],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,v=e(1681),h={name:"xDiagram",components:{},props:{graphicData:Object},data:function(){return{}},computed:{chartDataDouble:function(){return[{item:"已开班班课",count:this.graphicData.startNum},{item:"未开班班课",count:this.graphicData.notStartNum}]}},mounted:function(){},watch:{chartDataDouble:{handler:function(){this.initChart()},deep:!0}},methods:{initChart:function(){var t=this,a=new v.a({container:"xDiagram",autoFit:!0,height:258,defaultInteractions:["tooltip"]});a.data(this.chartDataDouble),a.coordinate("theta",{radius:.7,innerRadius:.6}),a.legend({position:"left",background:{padding:[0,0,0,60],style:"border:unset"},itemHeight:80,itemName:{formatter:function(a,e,r){return"".concat(a,": ").concat(t.chartDataDouble[r].count)},style:{fontSize:18}}}),a.tooltip({showTitle:!1,showMarkers:!1,itemTpl:'<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'}),a.interval().adjust("stack").position("count").color("item",["#5AD8A6","#5B8FF9"]).label("item",(function(){return{offset:18,style:{fontSize:18}}})).tooltip("item*count",(function(t,a){return{name:t,value:a}})),a.removeInteraction("legend-filter"),a.render()}}},f=Object(p.a)(h,(function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{attrs:{id:"xDiagram"}})])}],!1,null,"d73e9e4e",null).exports,g={name:"yDiagram",components:{},props:{graphicData:Object},data:function(){return{}},computed:{chartDataDouble:function(){return[{item:"在读学员人数",count:this.graphicData.studyNum},{item:"未开班学员人数",count:this.graphicData.notStudyNum}]}},mounted:function(){},watch:{chartDataDouble:{handler:function(){this.initChart()},deep:!0}},methods:{initChart:function(){var t=this,a=new v.a({container:"yDiagram",autoFit:!0,height:258,defaultInteractions:["tooltip"]});a.data(this.chartDataDouble),a.coordinate("theta",{radius:.7,innerRadius:.6}),a.legend({position:"left",background:{padding:[0,0,0,60],style:"border:unset"},itemHeight:80,itemName:{formatter:function(a,e,r){return"".concat(a,": ").concat(t.chartDataDouble[r].count)},style:{fontSize:18}}}),a.tooltip({showTitle:!1,showMarkers:!1,itemTpl:'<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'}),a.interval().adjust("stack").position("count").color("item",["#5AD8A6","#5B8FF9"]).label("item",(function(){return{offset:18,style:{fontSize:18}}})).tooltip("item*count",(function(t,a){return{name:t,value:a}})),a.removeInteraction("legend-filter"),a.render()}}},_=Object(p.a)(g,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"yDiagram"}})}),[],!1,null,"470b9f74",null).exports,b=e(399),D=e.n(b),y={name:"TableData",components:{},props:{title:{type:String,require:!0},data:{type:Object,required:!0}},data:function(){return{columns:[{title:"排名",dataIndex:"rank",align:"center",width:"30%",ellipsis:!0,scopedSlots:{customRender:"rank"}},{title:"班课名称",dataIndex:"multiClass",ellipsis:!0},{dataIndex:"rate",ellipsis:!0,scopedSlots:{customRender:"rate",title:"rateTitle"}}],order:"descSort"}},computed:{tableData:function(){var t=this.data,a=t.ascSort,e=t.descSort;return a=D.a.slice(a,0,10),e=D.a.slice(e,0,10),"ascSort"===this.order?a:e}},created:function(){},methods:{changeOrder:function(t){this.order=t.target.value},toPercent:function(t){var a=Number(100*t).toFixed(0);return a+="%"}}},C=(e(1807),Object(p.a)(y,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-data"},[e("div",{staticClass:"title"},[e("span",{staticClass:"text"},[t._v(t._s(t.title))]),t._v(" "),e("a-radio-group",{staticClass:"title-button",attrs:{"default-value":"descSort","button-style":"solid"},on:{change:t.changeOrder}},[e("a-radio-button",{attrs:{value:"ascSort"}},[t._v("\n        升序\n      ")]),t._v(" "),e("a-radio-button",{attrs:{value:"descSort"}},[t._v("\n        降序\n      ")])],1)],1),t._v(" "),e("a-table",{attrs:{columns:t.columns,"data-source":t.tableData,pagination:!1,"row-key":"courseId"},scopedSlots:t._u([{key:"rank",fn:function(a,e,r){return[t._v("\n      "+t._s(r+1)+"\n    ")]}},{key:"rate",fn:function(a,r){return[e("span",a||0===a?[t._v(t._s(t.toPercent(a)))]:[t._v(t._s(r.count))])]}}])},[t._v(" "),t._v(" "),e("template",{slot:"rateTitle"},[e("span",[t._v(t._s(t.title))])])],2)],1)}),[],!1,null,"268b0cdf",null).exports),S={name:"overview",components:{AsideLayout:l.a,DashboardCard:m,XDiagram:f,YDiagram:_,TableData:C},data:function(){return{graphicData:{totalNewStudentNum:0,totalFinishedStudentNum:0,todayLiveData:{totalLiveNum:0,overLiveNum:0},timeoutReviewNum:0,multiClassData:{startNum:0,notStartNum:0},studyStudentData:{studyNum:0,notStudyNum:0}},studentDataSource:{newStudentRankList:{},reviewData:{},finishedRateList:{},questionAnswerRateList:{}},getListLoading:!1}},computed:{},created:function(){this.getGraphicData(),this.getRankData()},methods:{getGraphicData:function(){var t=this;return i()(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t.getListLoading=!0,a.next=4,c();case 4:t.graphicData=a.sent;case 5:return a.prev=5,t.getListLoading=!1,a.finish(5);case 8:case"end":return a.stop()}}),a,null,[[0,,5,8]])})))()},getRankData:function(){var t=this;return i()(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t.getListLoading=!0,a.next=4,u();case 4:t.studentDataSource=a.sent;case 5:return a.prev=5,t.getListLoading=!1,a.finish(5);case 8:case"end":return a.stop()}}),a,null,[[0,,5,8]])})))()}}},w=(e(1808),Object(p.a)(S,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("aside-layout",{attrs:{breadcrumbs:[{name:"教务仪表盘"}]}},[e("a-spin",{attrs:{spinning:t.getListLoading}},[e("dashboard-card",{attrs:{graphicData:t.graphicData}}),t._v(" "),e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{span:12}},[e("div",{staticClass:"diagram-layout"},[e("x-diagram",{attrs:{graphicData:t.graphicData.multiClassData}})],1)]),t._v(" "),e("a-col",{attrs:{span:12}},[e("div",{staticClass:"diagram-layout"},[e("y-diagram",{attrs:{graphicData:t.graphicData.studyStudentData}})],1)])],1),t._v(" "),e("a-row",{attrs:{gutter:[24,32]}},[e("a-col",{attrs:{span:12}},[e("table-data",{attrs:{title:"昨日新增学员人数",data:t.studentDataSource.newStudentRankList}})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("table-data",{attrs:{title:"昨日完课率",data:t.studentDataSource.finishedRateList}})],1)],1),t._v(" "),e("a-row",{attrs:{gutter:[24,32]}},[e("a-col",{attrs:{span:12}},[e("table-data",{attrs:{title:"作业批改率",data:t.studentDataSource.reviewData}})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("table-data",{attrs:{title:"问答回答率",data:t.studentDataSource.questionAnswerRateList}})],1)],1)],1)],1)}),[],!1,null,"56a6e9a2",null));a.default=w.exports},1490:function(t,a,e){"use strict";e.d(a,"a",(function(){return c}));var r=e(33),s=e.n(r),n=(e(26),e(71)),i=e.n(n),o=e(47),c=i.a.create({timeout:15e3}),u=document.getElementsByTagName("meta")["csrf-token"];u&&localStorage.setItem("csrf-token",u.content),c.interceptors.request.use((function(t){return t.headers["X-Requested-With"]="XMLHttpRequest",t.headers["X-CSRF-Token"]=localStorage.getItem("csrf-token"),t.headers.Accept="application/vnd.edusoho.v2+json",t}),(function(t){return s.a.reject(t)})),c.interceptors.response.use((function(t){return t.data}),(function(t){try{o.a.prototype.$message.error(t.response.data.error.message)}catch(t){}return s.a.reject(t)}))},1491:function(t,a,e){},1494:function(t,a,e){"use strict";var r={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""}}},s=(e(1495),e(30)),n=Object(s.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aside-layout"},[e("div",{staticClass:"aside-layout-header"},[e("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},t._l(t.breadcrumbs,(function(a,r){return e("a-breadcrumb-item",{key:r},[a.href?[e("a",{attrs:{href:a.href,target:"_blank"}},[t._v(t._s(a.name))])]:a.pathName?[e("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.$router.push({name:a.pathName})}}},[t._v(t._s(a.name))])]:[t._v("\n          "+t._s(a.name)+"\n        ")]],2)})),1),t._v(" "),t.headerTip?e("a-popover",{attrs:{placement:"bottomLeft"}},[e("template",{slot:"content"},[e("div",{staticClass:"aside-header-tip",domProps:{innerHTML:t._s(t.headerTip)}})]),t._v(" "),e("span",{staticClass:"aside-header-title-icon"},[e("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),e("span",{staticClass:"icon-circle"},[t._v(t._s(t.headerTitle))])],1)],2):t._e()],1),t._v(" "),e("div",{staticClass:"aside-layout-main"},[t._t("default")],2)])}),[],!1,null,null,null);a.a=n.exports},1495:function(t,a,e){"use strict";var r=e(1491);e.n(r).a},1628:function(t,a,e){},1646:function(t,a,e){},1647:function(t,a,e){},1799:function(t,a,e){"use strict";var r=e(1628);e.n(r).a},1807:function(t,a,e){"use strict";var r=e(1646);e.n(r).a},1808:function(t,a,e){"use strict";var r=e(1647);e.n(r).a}}]);