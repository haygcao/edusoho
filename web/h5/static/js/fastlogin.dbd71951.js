(window.webpackJsonp=window.webpackJsonp||[]).push([["fastlogin"],{"1495a":function(e,t,i){"use strict";i.r(t),i("8e6e"),i("ac6a"),i("456d");var n=i("bd86"),r=(i("e7e5"),i("d399")),a=(i("96cf"),i("3b8d")),s=i("f13d"),o=i("3ce7"),c=i("a262"),l=i("d863"),u=i("7185"),d={data:function(){return{count:{showCount:!1,num:60,codeBtnDisable:!1}}},methods:{validateMobileOrPsw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mobile",t=this.userinfo[e],i=u.a[e];0===t.length&&(this.errorMessage[e]=""),this.errorMessage[e]=i.validator(t)?"":i.message},validatedChecker:function(){this.userinfo.mobile.length>11&&(this.userinfo.mobile=this.userinfo.mobile.substring(0,11));var e=this.userinfo.mobile,t=u.a.mobile;this.validated.mobile=t.validator(e)},countDown:function(){var e=this;this.$nextTick((function(){e.$refs.smsCode.$refs.input.focus()})),this.count.showCount=!0,this.count.codeBtnDisable=!0,this.count.num=60;var t=setInterval((function(){if(e.count.num<=0)return e.count.codeBtnDisable=!1,e.count.showCount=!1,void clearInterval(t);e.count.num-=1}),1e3)},handleSubmit:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(this.agreement||!1===this.privacyPolicy&&!1===this.userTerms){if(this.btnDisable)return;this.fastLogin({mobile:this.userinfo.mobile,smsToken:this.userinfo.smsToken,smsCode:this.userinfo.smsCode,loginType:"sms",client:"h5"}).then((function(t){return e(t)})).catch((function(e){t&&t(e.message),r.a.fail(e.message)}))}else this.popUpBottom=!0},agreeSign:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.btnDisable||this.fastLogin({mobile:this.userinfo.mobile,smsToken:this.userinfo.smsToken,smsCode:this.userinfo.smsCode,loginType:"sms",client:"h5"}).then((function(t){return e(t)})).catch((function(e){i&&i(e.message),r.a.fail(e.message)})).finally((function(){t.popUpBottom=!1}))},handleSendSms:function(){var e=this;if(""===this.userinfo.dragCaptchaToken)return this.$refs.dragComponent.initDragCaptcha(),void r.a.fail("拖动验证码失效，请重新验证！");this.sendSmsSend(this.userinfo).then((function(t){e.userinfo.smsToken=t.smsToken,e.userinfo.dragCaptchaToken="",e.countDown()})).catch((function(t){switch(e.$refs.dragComponent.initDragCaptcha(),t.code){case 4030301:case 4030302:e.dragKey+=1,e.userinfo.dragCaptchaToken="",e.userinfo.smsToken="",r.a.fail(t.message);break;case 4030303:e.dragEnable?r.a.fail(t.message):e.dragEnable=!0;break;default:r.a.fail(t.message)}}))},clickSmsBtn:function(){!this.count.codeBtnDisable&&this.validated.mobile&&(this.$refs.dragComponent.dragToEnd?this.handleSendSms():Object(r.a)("请先完成拼图验证"))}}},f=i("2f62");function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var m={name:"FastLogin",components:{EDrag:s.a},mixins:[c.a,l.a,d],data:function(){return{userinfo:{mobile:"",dragCaptchaToken:void 0,smsCode:"",smsToken:"",type:"sms_login"},userTerms:!1,privacyPolicy:!1,registerSettings:null,agreement:!1,dragEnable:!0,dragKey:0,errorMessage:{mobile:""},validated:{mobile:!1},popUpBottom:!1}},computed:{btnDisable:function(){return!(this.userinfo.mobile&&this.userinfo.smsCode)}},created:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$store.state.token){t.next=4;break}return r.a.loading({message:e.$t("toast.pleaseWait")}),e.afterLogin(),t.abrupt("return");case 4:e.getPrivacySetting();case 5:case"end":return t.stop()}}),t)})))()},methods:g(g({},Object(f.c)(["addUser","setMobile","sendSmsSend","fastLogin"])),{},{getPrivacySetting:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getSettings({query:{type:"user"}}).then((function(t){t.auth.user_terms_enabled&&(e.userTerms=!0),t.auth.privacy_policy_enabled&&(e.privacyPolicy=!0)})).catch((function(e){r.a.fail(e.message)}));case 2:e.registerSettings=t.sent;case 3:case"end":return t.stop()}}),t)})))()},lookPrivacyPolicy:function(){window.location.href=window.location.origin+"/mapi_v2/School/getPrivacyPolicy"},lookUserTerms:function(){window.location.href=window.location.origin+"/mapi_v2/School/getUserterms"},handleSmsSuccess:function(e){this.userinfo.dragCaptchaToken=e,this.validateMobileOrPsw("mobile"),0===this.errorMessage.mobile.length&&this.handleSendSms()},handleSubmitSuccess:function(){this.afterLogin()},changeLogin:function(){this.$router.push({name:"login"})}})},p=i("a6c2"),b=Object(p.a)(m,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login"},[i("span",{staticClass:"login-title"},[e._v(e._s(e.$t("title.loginWithMobileNumber")))]),i("span",{staticClass:"login-des"},[e._v(e._s(e.$t("title.automaticallyRegistered")))]),i("van-field",{staticClass:"login-input e-input",attrs:{border:!1,"error-message":e.errorMessage.mobile,placeholder:e.$t("placeholder.mobileNumber"),"max-length":"11",type:"number",clearable:""},on:{blur:function(t){return e.validateMobileOrPsw("mobile")},keyup:function(t){return e.validatedChecker()}},model:{value:e.userinfo.mobile,callback:function(t){e.$set(e.userinfo,"mobile",t)},expression:"userinfo.mobile"}}),e.dragEnable?i("e-drag",{key:e.dragKey,ref:"dragComponent",attrs:{"limit-type":"sms_login"},on:{success:e.handleSmsSuccess}}):e._e(),i("van-field",{ref:"smsCode",staticClass:"login-input e-input",attrs:{border:!1,type:"number",center:"",clearable:"","max-length":"6",placeholder:e.$t("placeholder.verificationCode")},model:{value:e.userinfo.smsCode,callback:function(t){e.$set(e.userinfo,"smsCode",t)},expression:"userinfo.smsCode"}},[i("van-button",{attrs:{slot:"button",disabled:e.count.codeBtnDisable||!e.validated.mobile,size:"small",type:"primary"},on:{click:e.clickSmsBtn},slot:"button"},[e._v("\n      "+e._s(e.$t("btn.sendCode"))+"\n      "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.count.showCount,expression:"count.showCount"}]},[e._v("("+e._s(e.count.num)+")")])])],1),i("van-button",{staticClass:"primary-btn mb20",attrs:{disabled:e.btnDisable,type:"default"},on:{click:function(t){return e.handleSubmit(e.handleSubmitSuccess)}}},[e._v(e._s(e.$t("btn.login")))]),i("div",{staticClass:"login-bottom text-center"},[e.userTerms||e.privacyPolicy?i("div",{staticClass:"login-agree"},[i("van-checkbox",{attrs:{"icon-size":16,"checked-color":"#408ffb"},model:{value:e.agreement,callback:function(t){e.agreement=t},expression:"agreement"}}),e._v("\n      "+e._s(e.$t("tips.iHaveReadAndAgreeToThe"))+"\n      "),e.userTerms?i("i",{on:{click:e.lookUserTerms}},[e._v("《"+e._s(e.$t("btn.userServiceAgreement"))+"》")]):e._e(),e.userTerms&&e.privacyPolicy?i("span",[e._v(e._s(e.$t("tips.and")))]):e._e(),e.privacyPolicy?i("span",[i("i",{on:{click:e.lookPrivacyPolicy}},[e._v("《"+e._s(e.$t("btn.privacyAgreemen"))+"》")])]):e._e()],1):e._e(),i("div",{staticClass:"login-change",on:{click:e.changeLogin}},[i("img",{staticClass:"login_change-icon",attrs:{src:"static/images/login_change.png"}}),e._v(e._s(e.$t("btn.switchAccountPasswordToLogin"))+"\n    ")])]),i("van-popup",{staticClass:"login-pop",style:{height:"30%"},attrs:{position:"bottom",round:""},model:{value:e.popUpBottom,callback:function(t){e.popUpBottom=t},expression:"popUpBottom"}},[i("div",{staticClass:"login-pop-title"},[e._v(e._s(e.$t("btn.PleaseReadAgreeAndTerms")))]),e.userTerms||e.privacyPolicy?i("div",{staticClass:"login-agree"},[e.userTerms?i("i",{on:{click:e.lookUserTerms}},[e._v("《"+e._s(e.$t("btn.userServiceAgreement"))+"》")]):e._e(),e.privacyPolicy?i("span",[i("i",{on:{click:e.lookPrivacyPolicy}},[e._v("《"+e._s(e.$t("btn.privacyAgreemen"))+"》")])]):e._e()]):e._e(),i("van-button",{staticClass:"primary-btn mb20 login-pop-btn",attrs:{disabled:e.btnDisable,type:"info"},on:{click:function(t){return e.agreeSign(e.handleSubmitSuccess)}}},[e._v(e._s(e.$t("btn.agreeAndSignin")))])],1)],1)}),[],!1,null,null,null);t.default=b.exports},7067:function(e,t,i){"use strict";i("e17f");var n=i("2241"),r=(i("e7e5"),i("d399")),a=i("a026"),s=i("3ce7"),o=/micromessenger/.test(navigator.userAgent.toLowerCase());t.a=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||i&&!t)r.a.fail("缺少分享参数");else{var c={domainUri:location.origin,itemUri:"",source:"h5"};s.a.marketingActivities({query:{activityId:e},data:c}).then((function(e){var s=-1!==e.url.indexOf("?")?"&":"?",c=i?"".concat(t).concat(s,"ticket=").concat(e.ticket):e.url;o?window.location.href=c:n.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{a.default.prototype.$copyText(c).then((function(){r.a.success("复制成功")}),(function(){r.a.fail("请更换浏览器复制")}))}catch(e){r.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(e){r.a.fail(e.message)}))}}},a262:function(e,t,i){"use strict";var n=i("7067");t.a={methods:{activityHandle:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(n.a)(e,t,i)}}}},d863:function(e,t,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("a481");var n=i("bd86"),r=i("7067"),a=i("3ce7"),s=i("faa5"),o=i("2f62");function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}t.a={data:function(){return{redirect:""}},computed:l({},Object(o.e)({user:function(e){return e.user}})),created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:l(l({},Object(o.d)([s.w])),{},{afterLogin:function(){var e=this;this.checkMobileBind().then((function(t){var i=t.is_bind_mobile,n=t.mobile_bind_mode;e[s.w]({is_bind_mobile:i,mobile_bind_mode:n}),i||"closed"===n?setTimeout(e.jumpAction,1e3):e.$router.replace({name:"binding",query:{redirect:e.$route.query.redirect}})})).catch((function(){setTimeout(e.jumpAction,1e3)}))},jumpAction:function(){var e=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",t=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",i=this.$route.query.callbackType,n=this.$route.query.activityId,a=decodeURIComponent(this.$route.query.callback);if(i)switch(i){case"marketing":Object(r.a)(n,a)}else t?this.$router.replace({path:e,query:{backUrl:t}}):this.$router.replace({path:e})},checkMobileBind:function(){return a.a.mobileBindCheck({query:{userId:this.user.id}})}})}},f13d:function(e,t,i){"use strict";i("8e6e"),i("ac6a"),i("456d");var n=i("75fc"),r=(i("e7e5"),i("d399")),a=i("bd86"),s=(i("c5f6"),i("3ce7"));function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var c={props:{tips:{type:String,default:"placeholder.dragTheSliderToCompleteThePuzzle"},limitType:{type:String,default:""}},data:function(){return{imgInfo:{url:"",jigsaw:"",token:""},dragState:{left:0,width:0,currentX:0,currentLeft:0,btnWidth:0,maskWidth:0},dragToEnd:!1}},created:function(){this.initDragCaptcha()},mounted:function(){var e=this.$refs.bar,t=this.$refs.dragBtn,i=e.getBoundingClientRect();Object.assign(this.dragState,{left:Number(i.left.toFixed(2)),width:e.clientWidth,btnWidth:t.offsetWidth/2})},methods:{initDragCaptcha:function(){var e=this,t={};this.limitType&&(t={limitType:this.limitType}),s.a.dragCaptcha({data:t}).then((function(t){e.imgInfo=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){Object(a.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},t),Object.assign(e.dragState,{currentLeft:0,maskWidth:0}),e.dragToEnd=!1})).catch((function(e){r.a.fail(e.message)}))},handletTouchEnd:function(){var e=this;if(!this.dragToEnd&&this.dragState.currentLeft){var t=this.getToken();this.dragToEnd=!0,s.a.dragValidate({query:{token:t}}).then((function(i){r.a.success(e.$t("e.verificationSuccess")),e.$emit("success",t)})).catch((function(t){r.a.fail(t.message),e.initDragCaptcha()}))}},handleTouchMove:function(e){if(!this.dragToEnd){e.preventDefault();var t=this.$refs.dragBtn,i=this.dragState,n=e.clientX?e.clientX.toFixed(2):e.targetTouches[0].pageX.toFixed(2)-this.$refs.drag.offsetLeft,r=(n-i.left-i.btnWidth).toFixed(2);r<0&&(r=0),n>i.width+this.$refs.drag.offsetLeft&&(r=i.width-this.$refs.dragImg.width),Object.assign(this.dragState,{currentLeft:r,maskWidth:(Number(r)+t.offsetWidth/2).toFixed(2)})}},calPositionX:function(){var e=this.$refs.dragImgBg,t=(e.naturalWidth/e.width).toFixed(2);return(Number(this.dragState.currentLeft).toFixed(2)*t).toFixed(2)},getToken:function(){var e={token:this.imgInfo.token,captcha:this.calPositionX()};return Object(n.a)(btoa(JSON.stringify(e))).reverse().join("")}}},l=i("a6c2"),u=Object(l.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"drag",staticClass:"e-drag"},[i("div",{staticClass:"e-drag-section"},[i("div",{staticClass:"e-drag-img"},[i("img",{ref:"dragImgBg",attrs:{src:e.imgInfo.url,alt:""}}),i("img",{ref:"dragImg",staticClass:"e-drag-img__dragable",style:{left:e.dragState.currentLeft+"px"},attrs:{src:e.imgInfo.jigsaw,alt:""}})]),i("div",{ref:"bar",staticClass:"e-drag-bar"},[i("span",[e._v(e._s(e.$t(e.tips)))]),i("div",{staticClass:"e-drag-bar__mask",style:{width:e.dragState.maskWidth+"px"}}),i("div",{ref:"dragBtn",staticClass:"e-drag-btn",style:{left:e.dragState.currentLeft+"px"},on:{touchend:e.handletTouchEnd,touchmove:e.handleTouchMove}},[i("img",{attrs:{src:"static/images/drag.png",alt:""}})])])])])}),[],!1,null,null,null);t.a=u.exports}}]);