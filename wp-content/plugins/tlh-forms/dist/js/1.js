webpackJsonp([1],{"9ZGH":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"form-viewer",props:["formData","templates"],data:function(){return{showTemplates:!0,loadingForm:!1,showForm:!1,selectedOption:"",activeTemplate:"",showClear:!1}},methods:{clearSelection:function(){this.activeTemplate=""},loadTemplateSelected:function(e){var t=this;if(""!=e){this.activeTemplate=e;var n="https://forms.learninghouse.com/embed/"+this.formData.school_name+"/"+e+"?account_id="+this.formData.school_form_id;this.showForm=!1,this.loadingForm=!0,fetchInject([n]).then(function(e){t.loadingForm=!1,t.showForm=!0,console.log("Script Download Finished")})}}}}},FGVF:function(e,t,n){var r=n("VU/8")(n("9ZGH"),n("ij4s"),!1,function(e){n("wu7T")},null,null);e.exports=r.exports},"VU/8":function(e,t){e.exports=function(e,t,n,r,o,i){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var c,d="function"==typeof s?s.options:s;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):r&&(c=r),c){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(e,t){return c.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:s,options:d}}},aRnu:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"#preview .formViewerHeading{text-align:center;font-size:2em;margin-top:2em}button.ui-button.template-loader.ui-button--type-primary.ui-button--color-default.ui-button--icon-position-left.ui-button--size-normal.active{background:#2196f3;color:#fff}.clearableSelect{position:relative;-ms-flex-preferred-size:68%;flex-basis:68%}.clearableSelect .clearSelectionIcon{z-index:99;background:#ccc;border-radius:50%;width:20px;text-align:center;height:20px;font-weight:700;cursor:pointer;position:absolute;top:25px;right:0}.templateController{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:650px;margin-left:auto;margin-right:auto;margin-bottom:1em}#loadTemplateButton{-webkit-box-flex:0;-ms-flex:none;flex:none;-ms-flex-preferred-size:130px;flex-basis:130px}#forms{padding:1em 2em}body{background:#fff}#update-nag,.update-nag{display:none}#preview{max-width:650px;margin-left:auto;margin-right:auto}",""])},ij4s:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"formAdmin__viewer",attrs:{id:"forms"}},[n("div",{staticClass:"templateController"},[n("h2",{staticClass:"formViewerHeading"},[e._v("Live Preview")]),e._v(" "),n("div",{staticClass:"clearableSelect"},[n("ui-select",{attrs:{options:e.templates,label:"Form Template Options",placeholder:"Select a Template"},on:{change:function(t){e.loadTemplateSelected(e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}})],1)]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"preview"}},[t("div",{attrs:{id:"tlh-form"}})])}]}},rjj0:function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n("tTVk"),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,d=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(v(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(c)return d;r.parentNode.removeChild(r)}if(p){var o=l++;r=s||(s=h()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=h(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);u.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){c=n,u=r||{};var a=o(e,t);return m(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r];(l=i[s.id]).refs--,n.push(l)}t?m(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}};var g,b=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},tTVk:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},wu7T:function(e,t,n){var r=n("aRnu");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("0fc981d7",r,!0,{})}});