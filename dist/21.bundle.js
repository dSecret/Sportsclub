webpackJsonp([21],{197:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(86),i=function(){return a.e(20).then(a.bind(null,238))};e.default={components:{sidenavCurrUser:i},data:function(){return{photo:"",userId:"",name:"",email:"",user:{},logged:null}},computed:{},created:function(){},methods:{logOut:function(){a.i(n.a)()},logIn:function(){},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},closeLeftSidenav:function(){this.$refs.leftSidenav.close()}}}},228:function(t,e,a){e=t.exports=a(188)(),e.push([t.i,".fade-enter-active[data-v-7c318d5c],.fade-leave-active[data-v-7c318d5c]{transition:.5s;transform:translateX(-100vw)}.fade-enter[data-v-7c318d5c],.fade-leave-to[data-v-7c318d5c]{transform:translateX(100vw)}.img-cont[data-v-7c318d5c]{background-color:#fff;border:2px solid #fff}.phone-viewport[data-v-7c318d5c]{position:fixed;top:0;left:0;width:100vw;height:100vh;overflow:hidden}.top-nav[data-v-7c318d5c]{position:fixed;top:0;left:0;width:100vw;z-index:1;background-color:#03a9f4!important}.link-mytitle[data-v-7c318d5c]{text-decoration:none!important;color:#fff!important}.mytitle[data-v-7c318d5c]{flex:1!important;font-family:Ubuntu,sans-serif!important;margin-left:0}.route-cont-wrap[data-v-7c318d5c]{width:100vw;height:100vh;overflow-x:hidden}.route-cont[data-v-7c318d5c]{width:50%;margin-top:10vh;margin:0 auto;padding:20px 0;margin-bottom:100px}@media only screen and (max-width:7in){.route-cont[data-v-7c318d5c]{width:98%}}@media only screen and (min-width:7in) and (max-width:9in){.route-cont[data-v-7c318d5c]{width:90%}}@media only screen and (min-width:9in) and (max-width:10in){.route-cont[data-v-7c318d5c]{width:80%}}",""])},235:function(t,e,a){function n(t){a(276)}var i=a(187)(a(197),a(258),n,"data-v-7c318d5c",null);t.exports=i.exports},258:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"phone-viewport",attrs:{id:"phview"}},[a("md-whiteframe",{staticClass:"top-nav",attrs:{"md-tag":"md-toolbar","md-elevation":"3"}},[a("div",{staticClass:"md-toolbar-container"},[a("md-button",{staticClass:"md-icon-button",on:{click:t.toggleLeftSidenav}},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("h2",{staticClass:"md-display-1 mytitle",staticStyle:{flex:"1"}},[a("router-link",{staticClass:"link-mytitle",attrs:{to:"/"}},[t._v("\n                 SportsClub\n                 ")])],1)],1)]),t._v(" "),a("md-sidenav",{ref:"leftSidenav",staticClass:"md-left"},[a("sidenavCurrUser",{staticStyle:{"z-index":"100"},on:{closemenu:function(e){t.closeLeftSidenav()}}})],1),t._v(" "),a("div",{staticStyle:{height:"10vh",width:"100vw"},attrs:{id:"scrollTop"}}),t._v(" "),a("div",{staticClass:"route-cont-wrap"},[a("div",{staticClass:"route-cont"},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)])],1)},staticRenderFns:[]}},276:function(t,e,a){var n=a(228);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(189)("7a8e5769",n,!0)}});