webpackJsonp([19],{188:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},189:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(s(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(s(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:o}}}}function i(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function s(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var s=p++;r=f||(f=i()),e=o.bind(null,r,s,!1),n=o.bind(null,r,s,!0)}else r=i(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function o(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var s=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(190),l={},c=d&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var i=u(t,e);return r(i),function(e){for(var n=[],s=0;s<i.length;s++){var o=i[s],a=l[o.id];a.refs--,n.push(a)}e?(i=u(t,e),r(i)):i=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete l[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},190:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var s=e[i],o=s[0],a=s[1],d=s[2],u=s[3],l={id:t+":"+i,css:a,media:d,sourceMap:u};r[o]?r[o].parts.push(l):n.push(r[o]={id:o,parts:[l]})}return n}},195:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(85),i=n.n(r),s=n(86),o=i.a.database();e.default={data:function(){return{user:{},errorr:!1,reqs:[],issued:[],newi:[]}},created:function(){var t,e=this;n.i(s.b)().then(function(r){if(t=r.email.slice(0,9),!r.email.includes("nitdelhi.ac.in"))return n.i(s.a)();o.ref("/users/"+t).on("value",function(i){if(i.exists())return e.user=i.val();o.ref("users/"+t).set(r),o.ref("/users/"+t).on("value",function(t){return t.exists()?e.user=t.val():n.i(s.a)()})})})},methods:{lgOut:function(){n.i(s.a)()},getList:function(t,e,n){},getListitem:function(t,e){}}}},226:function(t,e,n){e=t.exports=n(188)(),e.push([t.i,".wrap-dp{width:100%;position:relative;margin-top:50px;padding-top:80px;min-height:170px;background-color:#0f628b;background-image:linear-gradient(180deg,#0f618a,#2af598)}.cont-dp{width:100px;position:absolute;left:20px;top:-50px;height:100px;border-radius:50%;border:3px solid #fff;box-sizing:border-box;-moz-box-sizing:border-box;overflow:hidden;background-color:#d3d3d3}.dp{width:100%;height:100%}.profile-info{background-color:rgba(0,0,0,.5);padding-left:50px;padding-top:10px;min-height:100px;width:100%;box-sizing:border-box;-moz-box-sizing:border-box}.mylist-item{color:#fff;width:100%;margin-bottom:8px;font-size:17px;font-family:Roboto,sans-serif}.cont-list{margin-top:40px;padding:20px}",""])},233:function(t,e,n){function r(t){n(274)}var i=n(187)(n(195),n(255),r,null,null);t.exports=i.exports},255:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.errorr?t._e():n("div",[n("md-whiteframe",{staticClass:"wrap-dp",attrs:{"md-elevation":"4"}},[n("div",{staticClass:"cont-dp"},[n("img",{staticClass:"dp",attrs:{src:t.user.photoUrl}})]),t._v(" "),t.user.email?n("div",{staticClass:"profile-info"},[n("div",{staticClass:"mylist-item "},[t._v(t._s(t.user.name))]),t._v(" "),n("div",{staticClass:"mylist-item "},[t._v(t._s(t.user.email))]),t._v(" "),n("div",{staticClass:"mylist-item "},[t._v("+91-9795455055 ")]),t._v(" "),n("div",[n("md-button",{on:{click:t.lgOut}},[t._v("LogOut")])],1),t._v(" "),t.user.email?t._e():n("md-spinner",{staticClass:"md-accent",attrs:{"md-indeterminate":""}})],1):t._e()]),t._v(" "),n("md-whiteframe",{staticClass:"cont-list",attrs:{"md-elevation":"2"}},[t._v("\n\t\t\t\t\t"+t._s(t.reqs)+"\n\t\t\t")]),t._v(" "),n("md-whiteframe",{staticClass:"cont-list",attrs:{"md-elevation":"2"}},[t._v("\n\t\t\t\t\t"+t._s(t.issued)+"\n\t\t\t")])],1),t._v(" "),t.errorr?n("div",[t._v("\n\t\t\t\tTrying logging with account which matches with @nitdelhi.ac.in\n\t\t")]):t._e()])},staticRenderFns:[]}},274:function(t,e,n){var r=n(226);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(189)("16dbeab1",r,!0)}});