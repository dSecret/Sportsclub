webpackJsonp([4],{177:function(t,e,n){function r(t){n(271)}var o=n(187)(n(205),n(251),r,"data-v-4ed75e7e",null);t.exports=o.exports},187:function(t,e){t.exports=function(t,e,n,r,o){var i,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var d;if(o?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):n&&(d=n),d){var l=c.functional,u=l?c.render:c.beforeCreate;l?c.render=function(t,e){return d.call(e),u(t,e)}:c.beforeCreate=u?[].concat(u,d):[d]}return{esModule:i,exports:s,options:c}}},188:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},189:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(v)return m;r.parentNode.removeChild(r)}if(h){var i=f++;r=p||(p=o()),e=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(190),l={},u=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,m=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var o=d(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=l[s.id];a.refs--,n.push(a)}e?(o=d(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete l[a.id]}}}};var _=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},190:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a=i[1],c=i[2],d=i[3],l={id:t+":"+o,css:a,media:c,sourceMap:d};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}},205:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(85),i=n.n(o),s=i.a.storage(),a=i.a.database();e.default={data:function(){return{postobj:{id:"",title:"",body:"",banner:"",date:"",forms:[]},imgi:"",err:"",neterr:"",formicon:"add",iconcount:!0,formobj:{title:"",linki:""},forms:[],postcount:!1,cancelcount:!1,progress:0}},computed:{acterr:function(){return this.err}},methods:{cancelup:function(){this.cancelcount=!this.cancelcount,r.cancel()},postnow:function(){var t=this,e={id:"",title:"",body:"",banner:"",date:"",forms:[]},n=this.postobj;if(this.progress=0,""==n.title||""==n.body)return this.err="required fields can't be empty";this.postcount=!0,n.date=new Date,this.forms.push({title:"",linki:""}),n.forms=this.forms;var o,c=this.addImg();r=s.ref("images/"+c.name).put(c.file),r.on("state_changed",function(e){var n=e.bytesTransferred/e.totalBytes*100;switch(t.progress=n,e.state){case i.a.storage.TaskState.PAUSED:console.log("Upload is paused");break;case i.a.storage.TaskState.RUNNING:}},function(e){t.cancelcount=!t.cancelcount,t.neterr=e,console.log(e)},function(){o=r.snapshot.downloadURL,n.banner=o;var i=a.ref("/newposts").push().key;n.id=i,a.ref("/newposts/"+n.id).update(n);var s={id:n.id,user:["1"]};a.ref("/likes/"+n.id).update(s),t.postobj=e})},removeform:function(t){this.forms.splice(t,1)},addform:function(){var t={title:"",linki:""},e=this.formobj;return""==e.title||""==e.linki?this.err="required fields can't be empty":(this.forms.push(this.formobj),this.addicon()),this.formobj=t},addicon:function(){this.iconcount=!this.iconcount,this.iconcount?this.formicon="add":this.formicon="cancel"},addImg:function(){var t=document.getElementById("ban").files;return{file:new File(t,t[0].name),name:t[0].name}}}}},223:function(t,e,n){e=t.exports=n(188)(),e.push([t.i,".wrapper-newpost[data-v-4ed75e7e]{margin-top:100px;padding:10px;font-family:Roboto,sans-serif}.err-cont[data-v-4ed75e7e]{color:red}.form-cont[data-v-4ed75e7e]{width:80%;margin:0 auto}.cancelcount[data-v-4ed75e7e]{font-size:25px;text-align:center;padding:15px}.complete-example[data-v-4ed75e7e]{width:56px;height:56px;position:relative}.md-fab[data-v-4ed75e7e]{margin:0}.md-spinner[data-v-4ed75e7e]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",""])},251:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.postcount?t._e():n("md-whiteframe",{staticClass:"wrapper-newpost",attrs:{"md-elevation":"2"}},[n("div",{staticClass:"err-cont"},[t._v("\n\t\t\t\t\t\t"+t._s(t.err)+"\n\t\t\t\t")]),t._v(" "),n("div",[n("p",[t._v("'*' fields are required.")])]),t._v(" "),n("md-input-container",[n("label",[t._v("Title")]),t._v(" "),n("md-input",{attrs:{required:""},model:{value:t.postobj.title,callback:function(e){t.$set(t.postobj,"title",e)},expression:"postobj.title"}}),t._v(" "),n("md-icon",[t._v("create")])],1),t._v(" "),n("md-input-container",[n("label",[t._v("Textarea")]),t._v(" "),n("md-textarea",{attrs:{required:""},model:{value:t.postobj.body,callback:function(e){t.$set(t.postobj,"body",e)},expression:"postobj.body"}}),t._v(" "),n("md-icon",[t._v("create")])],1),t._v(" "),n("md-input-container",[n("label",[t._v("Banner")]),t._v(" "),n("md-file",{attrs:{id:"ban"},on:{input:t.addImg}})],1),t._v(" "),n("h3",[t._v("Forms:")]),t._v(" "),n("md-button",{staticClass:"md-icon-button",on:{click:t.addicon}},[n("md-icon",[t._v(t._s(t.formicon))])],1),t._v(" "),t.iconcount?t._e():n("div",{staticClass:"form-cont"},[n("md-input-container",[n("md-icon",[t._v("create")]),t._v(" "),n("label",[t._v("FormTitle")]),t._v(" "),n("md-input",{attrs:{required:""},model:{value:t.formobj.title,callback:function(e){t.$set(t.formobj,"title",e)},expression:"formobj.title"}})],1),t._v(" "),n("md-input-container",[n("md-icon",[t._v("create")]),t._v(" "),n("label",[t._v("FormLink")]),t._v(" "),n("md-input",{attrs:{required:""},model:{value:t.formobj.linki,callback:function(e){t.$set(t.formobj,"linki",e)},expression:"formobj.linki"}})],1),t._v(" "),n("div",{attrs:{align:"right"}},[n("md-button",{staticClass:"md-primary",on:{click:t.addform}},[t._v("\n\t\t\t\t\t    \t\tAdd\n\t\t\t\t\t    ")])],1)],1),t._v(" "),n("div",t._l(t.forms,function(e,r){return n("md-chip",{key:e.title,attrs:{"md-deletable":""},on:{delete:function(e){t.removeform(r)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t")])})),t._v(" "),n("md-divider"),t._v(" "),n("div",{attrs:{align:"right"}},[n("md-button",{staticClass:"md-accent md-raised",on:{click:t.postnow}},[t._v("\n\t\t\t\t\t    \t\tPostNow\n\t\t\t\t\t")])],1)],1),t._v(" "),t.postcount?n("md-whiteframe",{staticClass:"wrapper-newpost",staticStyle:{padding:"30px 40px"},attrs:{"md-elevation":"2"}},[n("md-progress",{staticClass:"md-warn",staticStyle:{margin:"5px 0"},attrs:{"md-progress":t.progress}}),t._v(" "),t.cancelcount?t._e():n("div",{attrs:{align:"right"}},[t.progress<100?n("span",[t._v("Uploading")]):t._e(),t._v(" "),100==t.progress?n("span",[t._v("Done")]):t._e(),t._v("\n\t\t\t\t\t..."+t._s(t.progress.toFixed(0))+"%\n\t\t\t\t")]),t._v(" "),t.cancelcount?n("div",{staticClass:"cancelcount"},[t._v("\n\t\t\t\t\t\t\t"+t._s(this.neterr)+"\n\t\t\t\t")]):t._e(),t._v(" "),t.cancelcount?n("div",{staticClass:"cancelcount"},[t._v("\n\t\t\t\t\t\t\tOops!! Upload is terminated.\n\t\t\t\t")]):t._e(),t._v(" "),n("div",{staticStyle:{margin:"5px 0"},attrs:{align:"center"}},[100==t.progress||t.cancelcount?n("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){t.postcount=!t.postcount}}},[t._v("\n\t\t\t\t\t\t\t\tNewPost\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t.progress<100&&!t.cancelcount?n("md-button",{staticClass:"md-primary",on:{click:t.cancelup}},[t._v("\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t")]):t._e()],1)],1):t._e()],1)},staticRenderFns:[]}},271:function(t,e,n){var r=n(223);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(189)("8b8a2218",r,!0)}});