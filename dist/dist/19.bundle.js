webpackJsonp([19],{190:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},191:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var o=f++;r=p||(p=i()),e=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(192),u={},c=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=l(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=u[s.id];a.refs--,n.push(a)}e?(i=l(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete u[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},192:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a=o[1],d=o[2],l=o[3],u={id:t+":"+i,css:a,media:d,sourceMap:l};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}},199:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(18),i=n.n(r),o=n(89);i.a.database();e.default={data:function(){return{errorr:!1,reqs:[],issued:[],newi:[]}},created:function(){},computed:{user:function(){return this.$store.getters.getUser}},methods:{lgOut:function(){n.i(o.a)()},getList:function(t,e,n){},getListitem:function(t,e){}}}},232:function(t,e,n){e=t.exports=n(190)(),e.push([t.i,".wrap-dp{width:100%;position:relative;margin-top:50px;padding-top:80px;min-height:170px;background-color:#0f628b;background-image:linear-gradient(180deg,#0f618a,#2af598)}.cont-dp{width:100px;position:absolute;left:20px;top:-50px;height:100px;border-radius:50%;border:3px solid #fff;box-sizing:border-box;-moz-box-sizing:border-box;overflow:hidden;background-color:#d3d3d3}.dp{width:100%;height:100%}.profile-info{background-color:rgba(0,0,0,.5);padding-left:50px;padding-top:10px;min-height:100px;width:100%;box-sizing:border-box;-moz-box-sizing:border-box}.mylist-item{color:#fff;width:100%;margin-bottom:8px;font-size:17px;font-family:Roboto,sans-serif}.cont-list{margin-top:40px;padding:20px}",""])},241:function(t,e,n){function r(t){n(286)}var i=n(189)(n(199),n(265),r,null,null);t.exports=i.exports},265:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.errorr?t._e():n("div",[n("md-whiteframe",{staticClass:"wrap-dp",attrs:{"md-elevation":"4"}},[n("div",{staticClass:"cont-dp"},[n("img",{staticClass:"dp",attrs:{src:t.user.photoUrl}})]),t._v(" "),n("div",{staticClass:"profile-info"},[t.user.email?n("div",{staticClass:"mylist-item "},[t._v(t._s(t.user.name))]):t._e(),t._v(" "),t.user.email?n("div",{staticClass:"mylist-item "},[t._v(t._s(t.user.email))]):t._e(),t._v(" "),n("div",[n("md-button",{on:{click:t.lgOut}},[t._v("LogOut")])],1),t._v(" "),t.user.email?t._e():n("md-spinner",{staticClass:"md-accent",attrs:{"md-indeterminate":""}})],1)]),t._v(" "),n("md-whiteframe",{staticClass:"cont-list",attrs:{"md-elevation":"2"}},[t._v("\n\t\t\t\t\tThis Feature will be available soon.\n\t\t\t")]),t._v(" "),n("md-whiteframe",{staticClass:"cont-list",attrs:{"md-elevation":"2"}},[t._v("\n\t\t\t\t\tThis Feature will be available soon.\n\t\t\t")])],1),t._v(" "),t.errorr?n("div",[t._v("\n\t\t\t\tTrying logging with account which matches with @nitdelhi.ac.in\n\t\t")]):t._e()])},staticRenderFns:[]}},286:function(t,e,n){var r=n(232);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(191)("16dbeab1",r,!0)}});