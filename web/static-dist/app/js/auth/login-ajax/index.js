!function(e){function n(n){for(var s,a,r=n[0],l=n[1],d=n[2],c=0,h=[];c<r.length;c++)a=r[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);for(u&&u(n);h.length;)h.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],s=!0,r=1;r<t.length;r++){var l=t[r];0!==i[l]&&(s=!1)}s&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var s={},i={127:0},o=[];function a(n){if(s[n])return s[n].exports;var t=s[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=s,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)a.d(t,s,function(n){return e[n]}.bind(null,s));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/static-dist/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var d=0;d<r.length;d++)n(r[d]);var u=l;o.push([934,0]),t()}({435:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var s=t(2),i=t.n(s),o=t(3),a=t.n(o),r=function(){function e(n){i()(this,e),this.options=n,this.$element=this.options.element,this.$loginDom=$(".js-sts-login"),this.init()}return a()(e,[{key:"init",value:function(){this.bindEvent(),this.closeModal()}},{key:"bindEvent",value:function(){var e=this;this.$loginDom.on("click",".js-login-back",(function(){return e.back()})),this.$loginDom.on("click",".js-invalid-btn",(function(){return e.refresh()})),this.$loginDom.on("click",".js-approve-again-btn",(function(){return e.approveAgain()})),this.$element.on("click",".js-sts-login-link",(function(){return e.showQrcode()}))}},{key:"back",value:function(){$(".js-approve-ing, .js-feedback, .js-sts-login").addClass("hidden"),this.options.target?this.$element.find(this.options.target).removeClass("hidden"):this.$element.removeClass("hidden")}},{key:"showQrcode",value:function(){var e=this;$.ajax({type:"post",url:this.$loginDom.data("url"),dataType:"json",success:function(n){console.log(n),e.$loginDom.find(".js-sts-login-qrcode img").attr("src",n.qrcode),e.onlyShow(),e.token=n.token,e.pollStatus()}})}},{key:"approveAgain",value:function(){$(".js-feedback").addClass("hidden"),$(".js-login-section, .js-sts-tip").removeClass("hidden"),this.refresh()}},{key:"refresh",value:function(){$(".js-approve-ing").addClass("hidden"),this.showQrcode()}},{key:"pollStatus",value:function(){var e=this,n=this.token,t=this.$loginDom.data("goto"),s=$(".js-fail-feedback"),i=$(".js-success-feedback"),o=$(".js-fail-tip"),a=$(".js-approve-again-btn");this.$loginDom.hasClass("hidden")||this.flag||$.get("/login/face_token/".concat(n),{goto:t},(function(n){switch(n.status){case"created":setTimeout((function(){e.pollStatus()}),2e3);break;case"processing":$(".js-invalid-btn").addClass("hidden"),$(".js-approve-ing, .js-approve-ing-tip").removeClass("hidden"),setTimeout((function(){e.pollStatus()}),2e3);break;case"expired":$(".js-approve-ing-tip").addClass("hidden"),$(".js-approve-ing, .js-invalid-btn").removeClass("hidden");break;case"successed":e.statusShow(),i.removeClass("hidden").siblings().addClass("hidden"),window.location.href=n.url;break;case"failed":e.feedbackShow(s,a,o);break;case"failures":e.feedbackShow(s,o,a)}}))}},{key:"closeModal",value:function(){var e=this;$("#login-modal").on("hide.bs.modal",(function(){e.flag=!0}))}},{key:"onlyShow",value:function(){$(".js-sts-login, .js-login-section, .js-sts-tip").removeClass("hidden"),this.options.target?this.$element.find(this.options.target).addClass("hidden"):this.$element.addClass("hidden")}},{key:"statusShow",value:function(){$(".js-login-section, .js-sts-tip").addClass("hidden"),$(".js-feedback").removeClass("hidden")}},{key:"feedbackShow",value:function(e,n,t){this.statusShow(),e.removeClass("hidden").siblings().addClass("hidden"),n.removeClass("hidden"),t.addClass("hidden")}}]),e}()},934:function(e,n,t){"use strict";t.r(n);var s=t(435),i=t(84),o=$("#login-ajax-form"),a=$("#drag-btn").length?new i.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"user_login"}):null,r=$(".js-submit-login-ajax"),l=o.validate({rules:{_username:{required:!0},_password:{required:!0},dragCaptchaToken:{required:!0}},messages:{_username:{required:Translator.trans("auth.login.username_required_error_hint")},_password:{required:Translator.trans("auth.login.password_required_error_hint")},dragCaptchaToken:{required:Translator.trans("auth.register.drag_captcha_tips")}}});r.click((function(e){l.form()&&$.post(o.attr("action"),o.serialize(),(function(e){r.button("loading"),window.location.reload()}),"json").error((function(e,n,t){var s=jQuery.parseJSON(e.responseText);o.find(".alert-danger").html(Translator.trans(s.message)).show(),a.initDragCaptcha()}))})),$(".js-sts-login-link").length&&new s.a({element:$(".js-login-modal"),target:".js-login-form, .modal-footer"});var d=$("#login-modal");$("#sms-login").click((function(e){$.get($(e.currentTarget).data("url"),(function(e){d.html(e)}))}))}});