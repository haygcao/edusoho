(window.webpackJsonp=window.webpackJsonp||[]).push([["binding"],{7067:function(e,t,n){"use strict";n("e17f");var r=n("2241"),i=(n("e7e5"),n("d399")),a=n("a026"),o=n("3ce7"),s=/micromessenger/.test(navigator.userAgent.toLowerCase());t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||n&&!t)i.a.fail("缺少分享参数");else{var c={domainUri:location.origin,itemUri:"",source:"h5"};o.a.marketingActivities({query:{activityId:e},data:c}).then((function(e){var o=-1!==e.url.indexOf("?")?"&":"?",c=n?"".concat(t).concat(o,"ticket=").concat(e.ticket):e.url;s?window.location.href=c:r.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{a.default.prototype.$copyText(c).then((function(){i.a.success("复制成功")}),(function(){i.a.fail("请更换浏览器复制")}))}catch(e){i.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(e){i.a.fail(e.message)}))}}},"8e6c":function(e,t,n){"use strict";n("6b54"),n("28a5"),function(e){var t,n;void 0===e.btoa&&(e.btoa=(t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),function(e){var n,r,i,a,o,s,c;for(r=i=0,a=e.length,s=(a-=o=a%3)/3<<2,o>0&&(s+=4),n=new Array(s);r<a;)c=e.charCodeAt(r++)<<16|e.charCodeAt(r++)<<8|e.charCodeAt(r++),n[i++]=t[c>>18]+t[c>>12&63]+t[c>>6&63]+t[63&c];return 1==o?(c=e.charCodeAt(r++),n[i++]="".concat(t[c>>2]+t[(3&c)<<4],"==")):2==o&&(c=e.charCodeAt(r++)<<8|e.charCodeAt(r++),n[i++]="".concat(t[c>>10]+t[c>>4&63]+t[(15&c)<<2],"=")),n.join("")})),void 0===e.atob&&(e.atob=(n=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],function(e){var t,r,i,a,o,s,c,d,u,l;if((c=e.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(e))return"";for(u=c,(d="="==e.charAt(c-2)?1:"="==e.charAt(c-1)?2:0)>0&&(u-=4),u=3*(u>>2)+d,l=new Array(u),o=s=0;o<c&&-1!=(t=n[e.charCodeAt(o++)])&&-1!=(r=n[e.charCodeAt(o++)])&&(l[s++]=String.fromCharCode(t<<2|(48&r)>>4),-1!=(i=n[e.charCodeAt(o++)]))&&(l[s++]=String.fromCharCode((15&r)<<4|(60&i)>>2),-1!=(a=n[e.charCodeAt(o++)]));)l[s++]=String.fromCharCode((3&i)<<6|a);return l.join("")}));var r=2654435769;function i(e,t){var n=e.length,r=n<<2;if(t){var i=e[n-1];if(i<(r-=4)-3||i>r)return null;r=i}for(var a=0;a<n;a++)e[a]=String.fromCharCode(255&e[a],e[a]>>>8&255,e[a]>>>16&255,e[a]>>>24&255);var o=e.join("");return t?o.substring(0,r):o}function a(e,t){var n,r=e.length,i=r>>2;0!=(3&r)&&++i,t?(n=new Array(i+1))[i]=r:n=new Array(i);for(var a=0;a<r;++a)n[a>>2]|=e.charCodeAt(a)<<((3&a)<<3);return n}function o(e){return 4294967295&e}function s(e,t,n,r,i,a){return(n>>>5^t<<2)+(t>>>3^n<<4)^(e^t)+(a[3&r^i]^n)}function c(e){return e.length<4&&(e.length=4),e}function d(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var t=[],n=e.length,r=0,i=0;r<n;++r,++i){var a=e.charCodeAt(r);if(a<128)t[i]=e.charAt(r);else if(a<2048)t[i]=String.fromCharCode(192|a>>6,128|63&a);else{if(!(a<55296||a>57343)){if(r+1<n){var o=e.charCodeAt(r+1);if(a<56320&&o>=56320&&o<=57343){var s=65536+((1023&a)<<10|1023&o);t[i]=String.fromCharCode(240|s>>18&63,128|s>>12&63,128|s>>6&63,128|63&s),++r;continue}}throw new Error("Malformed string")}t[i]=String.fromCharCode(224|a>>12,128|a>>6&63,128|63&a)}}return t.join("")}function u(e,t){return(void 0===t||null===t||t<0)&&(t=e.length),0===t?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?t===e.length?e:e.substr(0,t):t<65535?function(e,t){for(var n=new Array(t),r=0,i=0,a=e.length;r<t&&i<a;r++){var o=e.charCodeAt(i++);switch(o>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[r]=o;break;case 12:case 13:if(!(i<a))throw new Error("Unfinished UTF-8 octet sequence");n[r]=(31&o)<<6|63&e.charCodeAt(i++);break;case 14:if(!(i+1<a))throw new Error("Unfinished UTF-8 octet sequence");n[r]=(15&o)<<12|(63&e.charCodeAt(i++))<<6|63&e.charCodeAt(i++);break;case 15:if(!(i+2<a))throw new Error("Unfinished UTF-8 octet sequence");var s=((7&o)<<18|(63&e.charCodeAt(i++))<<12|(63&e.charCodeAt(i++))<<6|63&e.charCodeAt(i++))-65536;if(!(s>=0&&s<=1048575))throw new Error("Character outside valid Unicode range: 0x".concat(s.toString(16)));n[r++]=s>>10&1023|55296,n[r]=1023&s|56320;break;default:throw new Error("Bad UTF-8 encoding 0x".concat(o.toString(16)))}}return r<t&&(n.length=r),String.fromCharCode.apply(String,n)}(e,t):function(e,t){for(var n=[],r=new Array(32768),i=0,a=0,o=e.length;i<t&&a<o;i++){var s=e.charCodeAt(a++);switch(s>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r[i]=s;break;case 12:case 13:if(!(a<o))throw new Error("Unfinished UTF-8 octet sequence");r[i]=(31&s)<<6|63&e.charCodeAt(a++);break;case 14:if(!(a+1<o))throw new Error("Unfinished UTF-8 octet sequence");r[i]=(15&s)<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++);break;case 15:if(!(a+2<o))throw new Error("Unfinished UTF-8 octet sequence");var c=((7&s)<<18|(63&e.charCodeAt(a++))<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++))-65536;if(!(c>=0&&c<=1048575))throw new Error("Character outside valid Unicode range: 0x".concat(c.toString(16)));r[i++]=c>>10&1023|55296,r[i]=1023&c|56320;break;default:throw new Error("Bad UTF-8 encoding 0x".concat(s.toString(16)))}if(i>=32766){var d=i+1;r.length=d,n[n.length]=String.fromCharCode.apply(String,r),t-=d,i=-1}}return i>0&&(r.length=i,n[n.length]=String.fromCharCode.apply(String,r)),n.join("")}(e,t)}function l(e,t){return void 0===e||null===e||0===e.length?e:(e=d(e),t=d(t),i(function(e,t){var n,i,a,c,d,u,l=e.length,f=l-1;for(i=e[f],a=0,u=0|Math.floor(6+52/l);u>0;--u){for(c=(a=o(a+r))>>>2&3,d=0;d<f;++d)n=e[d+1],i=e[d]=o(e[d]+s(a,n,i,d,c,t));n=e[0],i=e[f]=o(e[f]+s(a,n,i,f,c,t))}return e}(a(e,!0),c(a(t,!1))),!1))}function f(e,t){return void 0===e||null===e||0===e.length?e:(t=d(t),u(i(function(e,t){var n,i,a,c,d,u=e.length,l=u-1;for(n=e[0],a=o(Math.floor(6+52/u)*r);0!==a;a=o(a-r)){for(c=a>>>2&3,d=l;d>0;--d)i=e[d-1],n=e[d]=o(e[d]-s(a,n,i,d,c,t));i=e[l],n=e[0]=o(e[0]-s(a,n,i,0,c,t))}return e}(a(e,!1),c(a(t,!1))),!0)))}e.XXTEA={utf8Encode:d,utf8Decode:u,encrypt:l,encryptToBase64:function(t,n){return e.btoa(l(t,n))},decrypt:f,decryptFromBase64:function(t,n){return void 0===t||null===t||0===t.length?t:f(e.atob(t),n)}}}(window)},a111:function(e,t,n){"use strict";var r=n("c4a6");n.n(r).a},a262:function(e,t,n){"use strict";var r=n("7067");t.a={methods:{activityHandle:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(r.a)(e,t,n)}}}},a519:function(e,t,n){"use strict";n.r(t),n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("e7e5");var r=n("d399"),i=(n("e17f"),n("2241")),a=n("bd86"),o=n("a262"),s=n("d863"),c=n("2f62"),d=n("f13d"),u=n("faa5"),l=(n("8e6c"),n("7185"));function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={mixins:[o.a,s.a],components:{EDrag:d.a},data:function(){return{bindingInfo:{mobile:"",smsToken:"",dragCaptchaToken:void 0,type:"register"},dragEnable:!1,dragKey:0,errorMessage:{mobile:""},validated:{mobile:!1},count:{showCount:!1,num:120,codeBtnDisable:!1},submitLoading:!1,sendSmsLoading:!1,isShowDialog:!1}},computed:h(h({},Object(c.e)({isLoading:function(e){return e.isLoading},mobileBind:function(e){return e.mobile_bind}})),{},{btnDisable:function(){return!this.bindingInfo.mobile||!this.bindingInfo.smsCode}}),methods:h(h(h({},Object(c.c)(["addUser","setMobile","sendSmsCenter","userLogin"])),Object(c.d)([u.u])),{},{validateMobileOrPsw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mobile",t=this.bindingInfo[e],n=l.a[e];return 0==t.length?(this.errorMessage[e]="",!1):"encrypt_password"===e&&t.length>20?(this.errorMessage[e]="最大输入20个字符",!1):void(this.errorMessage[e]=n.validator(t)?"":n.message)},validatedChecker:function(){var e=this.bindingInfo.mobile,t=l.a.mobile;this.validated.mobile=t.validator(e)},showDialog:function(){i.a.alert({title:"手机号已绑定，请更换手机号",confirmButtonText:"我知道了",confirmButtonColor:"#03C777",messageAlign:"left",message:"手机号已被绑定，如何处理？\n\n1、PC端登录原有手机号修改绑定手机号。\n2、原有手机号注销。\n3、如以上均不能处理，可联系网校管理员。"})},handleSmsSuccess:function(e){this.bindingInfo.dragCaptchaToken=e,this.handleSendSms()},handleSubmit:function(){var e=this,t=this.bindingInfo,n=t.mobile,i=t.smsCode,a=t.smsToken;this.submitLoading=!0,this.setMobile({query:{mobile:n},data:{smsCode:i,smsToken:a}}).then((function(t){r.a.success({duration:2e3,message:"绑定成功"}),e[u.u]({is_bind_mobile:!0}),e.afterLogin()})).catch((function(e){r.a.fail(e.message)})).finally((function(){e.submitLoading=!1}))},clickSmsBtn:function(){this.dragEnable?this.$refs.dragComponent.dragToEnd?this.$refs.dragComponent.initDragCaptcha():Object(r.a)(this.$t("toast.pleaseCompleteThePuzzleVerification")):this.handleSendSms()},handleSendSms:function(){var e=this;this.sendSmsLoading=!0,this.sendSmsCenter(this.bindingInfo).then((function(t){e.bindingInfo.smsToken=t.smsToken,e.countDown()})).catch((function(t){switch(t.code){case 4030301:case 4030302:e.dragKey++,e.bindingInfo.dragCaptchaToken="",e.bindingInfo.smsToken="",r.a.fail(t.message);break;case 4030107:e.showDialog();break;case 4030303:e.dragEnable?r.a.fail(t.message):e.dragEnable=!0;break;default:r.a.fail(t.message)}})).finally((function(){e.sendSmsLoading=!1}))},countDown:function(){var e=this;this.count.showCount=!0,this.count.codeBtnDisable=!0,this.count.num=120;var t=setInterval((function(){if(e.count.num<=0)return e.count.codeBtnDisable=!1,e.count.showCount=!1,void clearInterval(t);e.count.num--}),1e3)},mobileBindSkip:function(){var e=this.$route.query.redirect;e=e||"/",window.localStorage.setItem("mobile_bind_skip","1"),this.$router.replace({path:e})}})},b=(n("a111"),n("0c7c")),m=Object(b.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register mobile-binding"},[e.isLoading?n("e-loading"):e._e(),n("span",{staticClass:"register-title"},[e._v("绑定手机")]),n("van-field",{attrs:{border:!1,"error-message":e.errorMessage.mobile,placeholder:"请输入手机号","max-length":"11"},on:{blur:function(t){return e.validateMobileOrPsw("mobile")},keyup:function(t){return e.validatedChecker()}},model:{value:e.bindingInfo.mobile,callback:function(t){e.$set(e.bindingInfo,"mobile",t)},expression:"bindingInfo.mobile"}}),e.dragEnable?n("e-drag",{key:e.dragKey,ref:"dragComponent",on:{success:e.handleSmsSuccess}}):e._e(),n("van-field",{attrs:{border:!1,type:"text",center:"",clearable:"","max-length":"6",placeholder:"请输入验证码"},model:{value:e.bindingInfo.smsCode,callback:function(t){e.$set(e.bindingInfo,"smsCode",t)},expression:"bindingInfo.smsCode"}},[n("van-button",{attrs:{slot:"button",disabled:e.count.codeBtnDisable||!e.validated.mobile,loading:e.sendSmsLoading,"loading-text":"发送验证码中...",size:"small",type:"primary"},on:{click:e.clickSmsBtn},slot:"button"},[e._v("\n      发送验证码\n      "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.count.showCount,expression:"count.showCount"}]},[e._v("("+e._s(e.count.num)+")")])])],1),n("van-button",{staticClass:"primary-btn mb32",attrs:{disabled:e.btnDisable,type:"primary",loading:e.submitLoading,"loading-text":"绑定中..."},on:{click:e.handleSubmit}},[e._v("确认绑定")]),"option"===e.mobileBind.mobile_bind_mode?n("div",{staticClass:"mobile-bindding__skipping"},[n("span",{on:{click:e.mobileBindSkip}},[e._v("跳过")])]):e._e(),n("div",{staticClass:"binding-tip"},[e._v("绑定手机号的三大理由")]),e._m(0)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"binding-reasons"},[t("div",{staticClass:"binding-reasons__item"},[this._v("\n      1、网信办规定，互联网注册用户要提供基于移动电话号码等真实身份。\n    ")]),t("div",{staticClass:"binding-reasons__item"},[this._v("\n      2、第三方登录出现故障是，仍能用手机号顺利登录，课程学习不受影响。\n    ")]),t("div",{staticClass:"binding-reasons__item"},[this._v("\n      3、即使您忘记了第三方帐号的密码，仍能使用绑定的手机号和密码登录。\n    ")])])}],!1,null,"e191c9ae",null);t.default=m.exports},c4a6:function(e,t,n){},d863:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d"),n("a481");var r=n("bd86"),i=n("7067"),a=n("3ce7"),o=n("faa5"),s=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a={data:function(){return{redirect:""}},computed:d({},Object(s.e)({user:function(e){return e.user}})),created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:d(d({},Object(s.d)([o.u])),{},{afterLogin:function(){var e=this;this.checkMobileBind().then((function(t){var n=t.is_bind_mobile,r=t.mobile_bind_mode;e[o.u]({is_bind_mobile:n,mobile_bind_mode:r}),n||"closed"===r?setTimeout(e.jumpAction,1e3):e.$router.replace({name:"binding",query:{redirect:e.$route.query.redirect}})})).catch((function(){setTimeout(e.jumpAction,1e3)}))},jumpAction:function(){var e=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",t=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",n=this.$route.query.callbackType,r=this.$route.query.activityId,a=decodeURIComponent(this.$route.query.callback);if(n)switch(n){case"marketing":Object(i.a)(r,a)}else t?this.$router.replace({path:e,query:{backUrl:t}}):this.$router.replace({path:e})},checkMobileBind:function(){return a.a.mobileBindCheck({query:{userId:this.user.id}})}})}},f13d:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var r=n("75fc"),i=(n("e7e5"),n("d399")),a=n("bd86"),o=(n("c5f6"),n("3ce7"));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c={props:{tips:{type:String,default:"placeholder.dragTheSliderToCompleteThePuzzle"},limitType:{type:String,default:""}},data:function(){return{imgInfo:{url:"",jigsaw:"",token:""},dragState:{left:0,width:0,currentX:0,currentLeft:0,btnWidth:0,maskWidth:0},dragToEnd:!1}},created:function(){this.initDragCaptcha()},mounted:function(){var e=this.$refs.bar,t=this.$refs.dragBtn,n=e.getBoundingClientRect();Object.assign(this.dragState,{left:Number(n.left.toFixed(2)),width:e.clientWidth,btnWidth:t.offsetWidth/2})},methods:{initDragCaptcha:function(){var e=this,t={};this.limitType&&(t={limitType:this.limitType}),o.a.dragCaptcha({data:t}).then((function(t){e.imgInfo=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t),Object.assign(e.dragState,{currentLeft:0,maskWidth:0}),e.dragToEnd=!1})).catch((function(e){i.a.fail(e.message)}))},handletTouchEnd:function(){var e=this;if(!this.dragToEnd&&this.dragState.currentLeft){var t=this.getToken();this.dragToEnd=!0,o.a.dragValidate({query:{token:t}}).then((function(n){i.a.success(e.$t("e.verificationSuccess")),e.$emit("success",t)})).catch((function(t){i.a.fail(t.message),e.initDragCaptcha()}))}},handleTouchMove:function(e){if(!this.dragToEnd){e.preventDefault();var t=this.$refs.dragBtn,n=this.dragState,r=e.clientX?e.clientX.toFixed(2):e.targetTouches[0].pageX.toFixed(2)-this.$refs.drag.offsetLeft,i=(r-n.left-n.btnWidth).toFixed(2);i<0&&(i=0),r>n.width+this.$refs.drag.offsetLeft&&(i=n.width-this.$refs.dragImg.width),Object.assign(this.dragState,{currentLeft:i,maskWidth:(Number(i)+t.offsetWidth/2).toFixed(2)})}},calPositionX:function(){var e=this.$refs.dragImgBg,t=(e.naturalWidth/e.width).toFixed(2);return(Number(this.dragState.currentLeft).toFixed(2)*t).toFixed(2)},getToken:function(){var e={token:this.imgInfo.token,captcha:this.calPositionX()};return Object(r.a)(btoa(JSON.stringify(e))).reverse().join("")}}},d=n("0c7c"),u=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"drag",staticClass:"e-drag"},[n("div",{staticClass:"e-drag-section"},[n("div",{staticClass:"e-drag-img"},[n("img",{ref:"dragImgBg",attrs:{src:e.imgInfo.url,alt:""}}),n("img",{ref:"dragImg",staticClass:"e-drag-img__dragable",style:{left:e.dragState.currentLeft+"px"},attrs:{src:e.imgInfo.jigsaw,alt:""}})]),n("div",{ref:"bar",staticClass:"e-drag-bar"},[n("span",[e._v(e._s(e.$t(e.tips)))]),n("div",{staticClass:"e-drag-bar__mask",style:{width:e.dragState.maskWidth+"px"}}),n("div",{ref:"dragBtn",staticClass:"e-drag-btn",style:{left:e.dragState.currentLeft+"px"},on:{touchend:e.handletTouchEnd,touchmove:e.handleTouchMove}},[n("img",{attrs:{src:"static/images/drag.png",alt:""}})])])])])}),[],!1,null,null,null);t.a=u.exports}}]);