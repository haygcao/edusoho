!function(e){function t(t){for(var r,o,l=t[0],s=t[1],u=t[2],f=0,d=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);d.length;)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={45:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;a.push([742,0]),n()}({421:function(e,t,n){"use strict";var r=n(2),i=n.n(r),a=n(3),o=n.n(a),l=n(111),s=n.n(l),u=(n(344),function(){function e(t){var n=t.element,r=t.swfUrl,a=t.pdfUrl,o=t.watermarkOptions,l=t.canCopy;i()(this,e),this.element=$(n),this.swfUrl=r||"",this.pdfUrl=a||"",this.swfPlayerWidth="100%",this.swfPlayerHeight="100%",this.swfPlayerUrl="",this.watermarkOptions=o||"",this.canCopy=l||!1,this.init(),console.log(o)}return o()(e,[{key:"init",value:function(){this.isSupportHtml5()&&!this.isIE9()?this.initPDFJSViewer():this.initSwfViewer(),this.onFullScreen()}},{key:"onFullScreen",value:function(e){window.onmessage=function(e){if(console.log(e.data),null!=e&&null!=e){var t=e.data;if("boolean"==typeof t){var n=$("#task-content-iframe",window.parent.document);t?(n.removeClass("screen-full"),n.width("100%")):(n.addClass("screen-full"),n.width(window.document.body.offsetWidth+"px"))}}}}},{key:"isIE9",value:function(){return-1!=navigator.appVersion.indexOf("MSIE 9.")}},{key:"isSupportHtml5",value:function(){return $.support.leadingWhitespace}},{key:"initPDFJSViewer",value:function(){$("html").attr("dir","ltr");var e=app.cloudOldDocumentSdkUrl+"#"+this.pdfUrl;this.canCopy||(e+="#false");var t='<iframe id="doc-pdf-player" class="task-content-iframe" \n     src="'.concat(e,'" style="width:100%;height:100%;border:0px" \n     allowfullscreen="" webkitallowfullscreen="">\n      </iframe>');this.element.append(t),this.addWatermark()}},{key:"initSwfViewer",value:function(){$.html('<div id="website"><p align="center" class="style1">'.concat(Translator.trans("site.flash_not_install_hint"),"</p></div>"));var e={doc_url:decodeURI(this.swfUrl.value)};s.a.embedSWF(this.swfPlayerUrl,"website",this.swfPlayerWidth,this.swfPlayerHeight,"9.0.45",null,e,{bgcolor:"#efefef",allowFullScreen:!0,wmode:"window",allowNetworking:"all",allowscriptaccess:"always",autoPlay:!1},{id:"website"}),this.addWatermark()}},{key:"addWatermark",value:function(){this.watermarkOptions&&this.element.WaterMark(this.watermarkOptions)}}]),e}());t.a=u},742:function(e,t,n){"use strict";n.r(t);var r=n(421),i=$("#document-content"),a=i.data("watermark-url");function o(e){new r.a({element:i,swfUrl:i.data("swf"),pdfUrl:i.data("pdf"),watermarkOptions:{contents:e,xPosition:"center",yPosition:"center",rotate:45},canCopy:i.data("disableCopy")})}a?$.get(a,(function(e){console.log(e),o(e)})):o("")}});