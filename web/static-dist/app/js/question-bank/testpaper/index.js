!function(e){function t(t){for(var a,i,c=t[0],o=t[1],l=t[2],u=0,h=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(d&&d(t);h.length;)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={319:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;s.push([1255,0]),n()}({1255:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(3),i=n.n(s),c=n(197);new(function(){function e(){r()(this,e),this.table=$(".js-testpaper-html"),this.renderUrl=this.table.data("url"),this.element=$(".js-testpaper-container"),this.selector=new c.a(this.table),this.init()}return i()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.element.on("click",".js-search-btn",(function(t){e.onClickSearchBtn(t)})),this.element.on("click",".pagination li",(function(t){e.onClickPagination(t)})),this.element.on("click",".js-batch-delete",(function(t){e.onBatchDelete(t)})),this.element.on("click",".open-testpaper,.close-testpaper",(function(t){e.testpaperAction(t)})),this.element.on("click",".js-delete-btn",(function(t){e.onDeleteSingle(t)}))}},{key:"onBatchDelete",value:function(e){var t=this,n=$(e.currentTarget),a=n.data("name"),r=this.selector.toJson();0!==r.length?cd.confirm({title:Translator.trans("site.data.delete_title_hint",{name:a}),content:Translator.trans("site.data.delete_check_name_hint",{name:a}),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(n.data("url"),{ids:r},(function(e){e?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),t._resetPage(),t.selector.resetItems(),t.renderTable()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})})).error((function(e){cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})}))})):cd.message({type:"danger",message:Translator.trans("site.data.uncheck_name_hint",{name:a})})}},{key:"onDeleteSingle",value:function(e){var t=this,n=$(e.currentTarget),a=n.data("name");cd.confirm({title:Translator.trans("site.data.delete_title_hint",{name:a}),content:Translator.trans("site.data.delete_check_name_hint",{name:a}),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(n.data("url"),(function(e){cd.message({type:"success",message:Translator.trans("testpaper_manage.save_success_hint")}),t._resetPage(),t.renderTable()})).error((function(){cd.message({type:"danger",message:Translator.trans("testpaper_manage.save_error_hint")})}))}))}},{key:"onClickSearchBtn",value:function(e){this.renderTable(),e.preventDefault()}},{key:"onClickPagination",value:function(e){var t=$(e.currentTarget);this.element.find(".js-page").val(t.data("page")),this.renderTable(!0),e.preventDefault()}},{key:"testpaperAction",value:function(e){var t=$(e.currentTarget),n=(t.closest("tr"),this);cd.confirm({title:Translator.trans("confirm.oper.tip"),content:t.attr("title"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(t.data("url"),(function(e){cd.message({type:"success",message:Translator.trans("testpaper_manage.save_success_hint")}),n.renderTable()})).error((function(){cd.message({type:"danger",message:Translator.trans("testpaper_manage.save_error_hint")})}))}))}},{key:"renderTable",value:function(e){e||this._resetPage();var t=this,n=this.element.find('[data-role="search-conditions"]').serialize()+"&page="+this.element.find(".js-page").val();this._loading(),$.ajax({type:"GET",url:this.renderUrl,data:n}).done((function(e){t.table.html(e),t.selector.updateTable()})).fail((function(){t._loaded_error()}))}},{key:"_loading",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading")+"</div>";this.table.html(e)}},{key:"_loaded_error",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading_error")+"</div>";this.table.html(e)}},{key:"_resetPage",value:function(){this.element.find(".js-page").val(1)}}]),e}())},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(45),r=n.n(a),s=n(2),i=n.n(s),c=n(3),o=n.n(c),l=function(){function e(t){i()(this,e),this.$elem=$(t),this.init(),this.selectMap={}}return o()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.$elem.on("click",".js-checkbox",(function(t){e.toggleItem(t),e.changeSelectedNum()})),this.$elem.on("click",".js-select-all",(function(t){$(t.target).prop("checked")?(e.$elem.find(".js-select-all").prop("checked",!0),e.addItems()):(e.$elem.find(".js-select-all").prop("checked",!1),e.removeItems()),e.changeSelectedNum()}))}},{key:"setOpts",value:function(e){var t=e.addCb,n=void 0===t?function(){}:t,a=e.removeCb,r=void 0===a?function(){}:a;this.addCb=n,this.removeCb=r}},{key:"getItem",value:function(e){return{id:e.data("id")}}},{key:"removeItem",value:function(e){var t=this.$elem.find('input[data-id="'.concat(e.id,'"]'));t.length&&t.prop("checked",!1),this.selectMap[e.id]&&delete this.selectMap[e.id]}},{key:"addItem",value:function(e){var t=$(e);t.prop("checked",!0),this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0)}},{key:"addItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){$(n).prop("checked")||(e.addItem(n),e.addCb&&e.addCb(n))}))}},{key:"removeItems",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){if($(n).prop("checked")){var a=e.getItem($(n));e.removeItem(a),e.removeCb&&e.removeCb(n)}}))}},{key:"toggleItem",value:function(e){var t=$(e.currentTarget);t.prop("checked")?this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0,this.addCb&&this.addCb(t)):this.selectMap[t.data("id")]&&(delete this.selectMap[t.data("id")],this.removeCb&&this.removeCb(t))}},{key:"resetItems",value:function(){this.selectMap={}}},{key:"getObjectLength",value:function(){return r()(this.selectMap).length}},{key:"toJson",value:function(){return r()(this.selectMap)}},{key:"updateTable",value:function(){var e=this;this.$elem.find(".js-checkbox").each((function(t,n){e.selectMap[$(n).data("id")]&&$(n).prop("checked",!0)})),this.changeSelectedNum()}},{key:"changeSelectedNum",value:function(){this.$elem.find(".js-select-number").length>0&&this.$elem.find(".js-select-number").text(this.getObjectLength())}}]),e}()}});