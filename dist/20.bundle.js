webpackJsonp([20],{195:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(86),a=function(){return i.e(19).then(i.bind(null,235))};e.default={components:{sidenavCurrUser:a},data:function(){return{photo:"",userId:"",name:"",email:"",user:{},logged:null}},computed:{},created:function(){var t=this;i.i(n.a)().then(function(e){t.user=e})},methods:{logOut:function(){i.i(n.b)()},logIn:function(){i.i(n.c)()},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},closeLeftSidenav:function(){this.$refs.leftSidenav.close()}}}},225:function(t,e,i){e=t.exports=i(187)(),e.push([t.i,".img-cont[data-v-7c318d5c]{background-color:#fff;border:2px solid #fff}.phone-viewport[data-v-7c318d5c]{position:fixed;top:0;left:0;width:100vw;height:100vh;overflow:hidden}.top-nav[data-v-7c318d5c]{position:fixed;top:0;left:0;width:100vw;z-index:1;background-color:#03a9f4!important}.link-mytitle[data-v-7c318d5c]{text-decoration:none!important;color:#fff!important}.mytitle[data-v-7c318d5c]{flex:1!important;font-family:Ubuntu,sans-serif!important;margin-left:0}.route-cont-wrap[data-v-7c318d5c]{width:100vw;height:100vh;overflow-x:hidden}.route-cont[data-v-7c318d5c]{width:50%;margin-top:10vh;margin:0 auto;padding:20px 0;margin-bottom:100px}@media only screen and (max-width:7in){.route-cont[data-v-7c318d5c]{width:98%}}@media only screen and (min-width:7in) and (max-width:9in){.route-cont[data-v-7c318d5c]{width:90%}}@media only screen and (min-width:9in) and (max-width:10in){.route-cont[data-v-7c318d5c]{width:80%}}",""])},232:function(t,e,i){function n(t){i(271)}var a=i(186)(i(195),i(254),n,"data-v-7c318d5c",null);t.exports=a.exports},254:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"phone-viewport",attrs:{id:"phview"}},[i("md-whiteframe",{staticClass:"top-nav",attrs:{"md-tag":"md-toolbar","md-elevation":"3"}},[i("div",{staticClass:"md-toolbar-container"},[i("md-button",{staticClass:"md-icon-button",on:{click:t.toggleLeftSidenav}},[i("md-icon",[t._v("menu")])],1),t._v(" "),i("h2",{staticClass:"md-display-1 mytitle",staticStyle:{flex:"1"}},[i("router-link",{staticClass:"link-mytitle",attrs:{to:"/"}},[t._v("\n                 SportsClub\n                 ")])],1)],1)]),t._v(" "),i("md-sidenav",{ref:"leftSidenav",staticClass:"md-left"},[i("sidenavCurrUser",{staticStyle:{"z-index":"100"}})],1),t._v(" "),i("div",{staticStyle:{height:"10vh",width:"100vw"},attrs:{id:"scrollTop"}}),t._v(" "),i("div",{staticClass:"route-cont-wrap"},[i("div",{staticClass:"route-cont"},[i("router-view")],1)])],1)},staticRenderFns:[]}},271:function(t,e,i){var n=i(225);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(188)("7a8e5769",n,!0)}});
//# sourceMappingURL=20.bundle.js.map