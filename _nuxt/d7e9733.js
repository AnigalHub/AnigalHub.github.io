(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"Themes",(function(){return r}));var r={namespaced:!0,state:{types:[{name:"Светлая тема",type:"light"},{name:"Темная тема",type:"dark"}],currentTheme:"light",systemTheme:"light"},actions:{changeTheme:function(e){e.state.types.push(e.state.types.shift()),e.state.currentTheme=e.state.types[0].type},setTheme:function(e,t){e.state.currentTheme=t},loadTheme:function(e){var t=function(){var t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.state.systemTheme=t,e.dispatch("setTheme",t)};window.matchMedia("(prefers-color-scheme: dark)").addListener((function(){t()})),t()}},getters:{CurrentTheme:function(e){return e.currentTheme}}}},137:function(e,t,n){"use strict";var r=n(1),o=n(138),c=n.n(o);r.default.use(c.a),r.default.component("vue-session",c.a)},174:function(e,t,n){var content=n(232);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("56b15182",content,!0,{sourceMap:!1})},196:function(e,t,n){"use strict";n(231);var r=n(54),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},197:function(e,t,n){n(198),e.exports=n(199)},231:function(e,t,n){"use strict";n(174)},232:function(e,t,n){(t=n(61)(!1)).push([e.i,"html{height:100%;margin:0!important;padding:0!important}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""]),e.exports=t},233:function(e,t,n){"use strict";n.r(t);var r=n(50),o=n(1),c=n(134);o.default.use(r.a);t.default=function(){return new r.a.Store({modules:{Themes:c.Themes}})}}},[[197,3,1,4]]]);