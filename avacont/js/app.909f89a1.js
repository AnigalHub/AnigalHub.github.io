(function(t){function e(e){for(var c,o,n=e[0],i=e[1],l=e[2],p=0,_=[];p<n.length;p++)o=n[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&_.push(s[o][0]),s[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);d&&d(e);while(_.length)_.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],c=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(c=!1)}c&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var c={},s={app:0},r=[];function o(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=c,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(a,c,function(e){return t[e]}.bind(null,c));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/avacont/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var c=a("85ec"),s=a.n(c);s.a},1452:function(t,e,a){t.exports=a.p+"img/pad_on_switch.789000ff.jpg"},2237:function(t,e,a){},"2d4c":function(t,e,a){"use strict";var c=a("2237"),s=a.n(c);s.a},"350d":function(t,e,a){"use strict";var c=a("79ec"),s=a.n(c);s.a},"496d":function(t,e,a){t.exports=a.p+"img/favicon.736bf5f5.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-container",{attrs:{fluid:""}},[a("Navbar"),a("Home"),a("Features"),a("Images"),a("Catalog"),a("Delivery"),a("Portfolio"),a("Contact"),a("Myfooter")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("b-navbar",{staticClass:"navbar-expand-xl sticky-top",attrs:{id:"Nav",toggleable:""}},[c("b-container",[c("b-navbar-brand",{attrs:{href:"#Home"},on:{click:function(e){return e.preventDefault(),t.scrollToTop()}}},[c("img",{attrs:{src:a("496d"),alt:"логотип_компании"}}),c("div",{staticClass:"name_company"},[t._v("АВАКОНТ")]),c("div",{staticClass:"description_name"},[t._v("производственная компания")])]),c("b-navbar-toggle",{attrs:{target:"navbar-toggle-collapse"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.expanded;return[c("b-icon",e?{attrs:{icon:"chevron-bar-up"}}:{attrs:{icon:"chevron-bar-down"}})]}}])}),c("b-collapse",{staticClass:"justify-content-end",attrs:{id:"navbar-toggle-collapse","is-nav":""},model:{value:t.isExpanded,callback:function(e){t.isExpanded=e},expression:"isExpanded"}},[c("b-navbar-nav",[c("b-nav-item",{attrs:{href:"#Features"},on:{click:t.scrollToId}},[t._v("Характеристики")]),c("b-nav-item",{attrs:{href:"#Catalog"},on:{click:t.scrollToId}},[t._v("Каталог")]),c("b-nav-item",{attrs:{href:"#Delivery"},on:{click:t.scrollToId}},[t._v("Доставка")]),c("b-nav-item",{attrs:{href:"#Portfolio"},on:{click:t.scrollToId}},[t._v("Наши работы")]),c("b-nav-item",{attrs:{href:"#Contact"},on:{click:t.scrollToId}},[t._v("Контакты")])],1)],1)],1)],1)},n=[],i=(a("ac1f"),a("5319"),{name:"navbar",data:function(){return{isExpanded:!1}},methods:{scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},scrollToId:function(t){var e=20;if(this.isExpanded){var a=document.getElementById("Nav"),c=a.getBoundingClientRect();e=c.height}var s=document.getElementById(t.target.hash.replace("#",""));window.scrollTo({top:s.offsetTop-e,left:0,behavior:"smooth"}),t.preventDefault()}}}),l=i,d=(a("2d4c"),a("2877")),p=Object(d["a"])(l,o,n,!1,null,"c3bbdfdc",null),_=p.exports,u=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{attrs:{id:"Home"}},[c("div",{attrs:{id:"background"}},[c("b-container",[c("h1",[t._v("Накладки на бревно и блок-хаус")]),c("b-row",[c("b-col",[c("div",{staticClass:"text_light"},[t._v("Изготовление накладок из дерева под розетки, выключатели, радиаторы, светильники и карнизы разных производителей.")]),c("ul",t._l(t.Features,(function(e,a){return c("li",{key:a},[t._v(t._s(e))])})),0)]),c("b-col",[c("b-carousel",{attrs:{id:"carousel-fade",fade:"",indicators:""}},[c("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[c("img",{attrs:{src:a("c1dc"),alt:"двойная_накладка"}})]},proxy:!0}])}),c("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[c("img",{attrs:{src:a("f6ff"),alt:"накладка_на_выключатель"}})]},proxy:!0}])}),c("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[c("img",{attrs:{src:a("1452"),alt:"накладка_на_розетку"}})]},proxy:!0}])}),c("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[c("img",{attrs:{src:a("be1e"),alt:"тройная_накладка"}})]},proxy:!0}])})],1)],1)],1)],1)],1)])},m=[],f={name:"home",data:function(){return{Features:["Изготовление от 2 до 10 дней","Огромный ассортимент","Гарантия от 12 месяцев","Быстрый монтаж","Долговечность"]}}},g=f,v=Object(d["a"])(g,u,m,!1,null,"70195194",null),h=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Features"}},[a("b-container",[a("h2",[t._v("Характеристики изделий")]),t._l(t.catalog,(function(e,c){return a("b-row",{key:c,staticClass:"part"},[a("b-col",{attrs:{cols:"2"}},[a("div",{staticClass:"number_descr"},[t._v(t._s(e.number_descr_2))]),a("div",{staticClass:"number"},[t._v(t._s(e.number))]),a("div",{staticClass:"number_descr"},[t._v(t._s(e.number_descr))])]),a("b-col",{staticClass:"text"},[t._v(t._s(e.descr))]),a("b-col",{attrs:{cols:"4"}},[a("b-row",t._l(e.img,(function(t,e){return a("b-col",{key:e},[a("img",{attrs:{src:t.src,alt:t.alt}})])})),1)],1)],1)}))],2)],1)},k=[],y={name:"features",data:function(){return{catalog:[{number:"30",number_descr:"позиций",number_descr_2:"Более",descr:"Мы изготавливаем более 30 видов деревянных накладок, и продолжаем разрабатывать новые дизайны и функциональность изделий!",img:[{src:"./images/feature/type_1_pad.jpg",alt:"накладка_1_типа"},{src:"./images/feature/type_2_pad.jpg",alt:"накладка_2_типа"}]},{number:"8",number_descr:" Диаметров бревна",number_descr_2:"",descr:"Мы разработали изделия для 8 самых распространенных размеров бревен. Если у Вас нестандартное бревно, то пишите - мы обязательно что-нибудь придумаем!",img:[{src:"./images/feature/diameters.png",alt:"диаметр_бревна"}]},{number:"3",number_descr:" Вида материала",number_descr_2:"",descr:" Компания создает изделия любого оттенка дерева из трех плотных материалов: сосна, ясень, бук, дуб.",img:[{src:"./images/feature/pine.jpg",alt:"сосна"},{src:"./images/feature/ash.jpg",alt:"Ясень"},{src:"./images/feature/beech.jpg",alt:"бук"},{src:"./images/feature/oak.jpg",alt:"дуб"}]},{number:"2",number_descr:"Типа стен",number_descr_2:"",descr:"Наши изделия предусмотрены для бревенчатых стен и блок-хауса.",img:[{src:"./images/feature/log.jpg",alt:"бревенчатые"},{src:"./images/feature/block-house.jpg",alt:"блок-хаус"}]}]}}},x=y,C=Object(d["a"])(x,b,k,!1,null,"18fa5103",null),j=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Images"}},[a("b-row",t._l(t.Images,(function(t,e){return a("b-col",{key:e},[a("img",{attrs:{src:t.src,alt:t.alt}})])})),1)],1)},M=[],O={name:"images",data:function(){return{Images:[{src:"./images/images/pad_on_switch.jpg",alt:"Накладка_на_выключатель"},{src:"./images/images/pad_on_2_sockets.jpg",alt:"Накладка_на_2_розетки"},{src:"./images/images/pad_on_night_light.jpg",alt:"Накладка_на_ночник"},{src:"./images/images/triple_pad.jpg",alt:"Тройная_накладка_на_бревно"},{src:"./images/images/pad_between_logs.jpg",alt:"Межбревная_наладка"}]}}},z=O,S=Object(d["a"])(z,w,M,!1,null,"8b661f2c",null),P=S.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Catalog"}},[a("b-container",[a("h2",[t._v("Накладки")]),a("h3",[t._v("Накладки с открытой установкой")]),a("div",{staticClass:"flex-container"},t._l(t.price.Open_mount_pads,(function(e,c){return a("div",{key:c},[a("b-button",{on:{click:function(a){return t.showModal(e)}}},[a("img",{attrs:{src:e.src,alt:e.alt}}),a("h4",[t._v(t._s(e.name_pad))]),a(e.svg,{tag:"component"})],1)],1)})),0),a("h3",[t._v("Накладки со скрытой установкой")]),a("div",{staticClass:"flex-container"},t._l(t.price.Flush_mounted_overlays,(function(e,c){return a("div",{key:c},[a("b-button",{on:{click:function(a){return t.showModal(e)}}},[a("img",{attrs:{src:e.src,alt:e.alt}}),a("h4",[t._v(t._s(e.name_pad))]),a(e.svg,{tag:"component"})],1)],1)})),0),a("b-modal",{ref:"my-modal",attrs:{id:"pad",size:"lg",centered:"",title:t.selectedPad.name}},[a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("img",{attrs:{src:t.selectedPad.src,alt:t.selectedPad.alt}})]),a("b-col",[a("h3",[t._v(t._s(t.selectedPad.name_pad))])])],1),a("b-table",{attrs:{hover:"",items:t.selectedPad.table,fields:t.fields},scopedSlots:t._u([{key:"cell(diameter)",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.diameter)+" мм ")]}},{key:"cell(pine)",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.calcFormula(a.diameter,t.price.type.pine))+" руб. ")]}},{key:"cell(ash)",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.calcFormula(a.diameter,t.price.type.ash))+" руб. ")]}},{key:"cell(oak)",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.calcFormula(a.diameter,t.price.type.oak))+" руб. ")]}}])})],1)],1)],1)},U=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticStyle:{fill:"#000000"},attrs:{id:"more_details_svg",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 172 172"}},[a("defs",[a("linearGradient",{attrs:{x1:"61.8125",y1:"59.125",x2:"61.8125",y2:"75.25",gradientUnits:"userSpaceOnUse",id:"color-1_43586_gr1"}},[a("stop",{attrs:{offset:"0","stop-color":"#796161"}}),a("stop",{attrs:{offset:"1","stop-color":"#383838"}})],1),a("linearGradient",{attrs:{x1:"94.0625",y1:"64.5",x2:"94.0625",y2:"69.875",gradientUnits:"userSpaceOnUse",id:"color-2_43586_gr2"}},[a("stop",{attrs:{offset:"0","stop-color":"#796161"}}),a("stop",{attrs:{offset:"1","stop-color":"#383838"}})],1),a("linearGradient",{attrs:{x1:"61.8125",y1:"80.625",x2:"61.8125",y2:"96.75",gradientUnits:"userSpaceOnUse",id:"color-3_43586_gr3"}},[a("stop",{attrs:{offset:"0","stop-color":"#796161"}}),a("stop",{attrs:{offset:"1","stop-color":"#383838"}})],1),a("linearGradient",{attrs:{x1:"94.0625",y1:"86",x2:"94.0625",y2:"91.375",gradientUnits:"userSpaceOnUse",id:"color-4_43586_gr4"}},[a("stop",{attrs:{offset:"0","stop-color":"#796161"}}),a("stop",{attrs:{offset:"1","stop-color":"#383838"}})],1),a("linearGradient",{attrs:{x1:"61.8125",y1:"102.125",x2:"61.8125",y2:"118.25",gradientUnits:"userSpaceOnUse",id:"color-5_43586_gr5"}},[a("stop",{attrs:{offset:"0","stop-color":"#796161"}}),a("stop",{attrs:{offset:"1","stop-color":"#383838"}})],1),a("linearGradient",{attrs:{x1:"88.6875",y1:"107.5",x2:"88.6875",y2:"112.875",gradientUnits:"userSpaceOnUse",id:"color-6_43586_gr6"}},[a("stop",{attrs:{offset:"0","stop-color":"#796161"}}),a("stop",{attrs:{offset:"1","stop-color":"#383838"}})],1),a("linearGradient",{attrs:{x1:"123.625",y1:"18.8125",x2:"123.625",y2:"45.6875",gradientUnits:"userSpaceOnUse",id:"color-7_43586_gr7"}},[a("stop",{attrs:{offset:"0","stop-color":"#796161"}}),a("stop",{attrs:{offset:"1","stop-color":"#383838"}})],1),a("linearGradient",{attrs:{x1:"86",y1:"17.01994",x2:"86",y2:"171.23138",gradientUnits:"userSpaceOnUse",id:"color-8_43586_gr8"}},[a("stop",{attrs:{offset:"0","stop-color":"#3b2f2f"}}),a("stop",{attrs:{offset:"1","stop-color":"#000000"}})],1),a("linearGradient",{attrs:{x1:"137.0625",y1:"17.01994",x2:"137.0625",y2:"171.23138",gradientUnits:"userSpaceOnUse",id:"color-9_43586_gr9"}},[a("stop",{attrs:{offset:"0","stop-color":"#3b2f2f"}}),a("stop",{attrs:{offset:"1","stop-color":"#000000"}})],1),a("linearGradient",{attrs:{x1:"137.0625",y1:"17.01994",x2:"137.0625",y2:"171.23138",gradientUnits:"userSpaceOnUse",id:"color-10_43586_gr10"}},[a("stop",{attrs:{offset:"0","stop-color":"#3b2f2f"}}),a("stop",{attrs:{offset:"1","stop-color":"#000000"}})],1)],1),a("g",{staticStyle:{"mix-blend-mode":"normal"},attrs:{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none"}},[a("path",{attrs:{d:"M0,172v-172h172v172z",fill:"none"}}),a("g",[a("path",{attrs:{d:"M61.8125,59.125c-4.56875,0 -8.0625,3.49375 -8.0625,8.0625c0,4.56875 3.49375,8.0625 8.0625,8.0625c4.56875,0 8.0625,-3.49375 8.0625,-8.0625c0,-4.56875 -3.49375,-8.0625 -8.0625,-8.0625zM61.8125,69.875c-1.6125,0 -2.6875,-1.075 -2.6875,-2.6875c0,-1.6125 1.075,-2.6875 2.6875,-2.6875c1.6125,0 2.6875,1.075 2.6875,2.6875c0,1.6125 -1.075,2.6875 -2.6875,2.6875z",fill:"url(#color-1_43586_gr1)"}}),a("path",{attrs:{d:"M75.25,64.5h37.625v5.375h-37.625z",fill:"url(#color-2_43586_gr2)"}}),a("path",{attrs:{d:"M61.8125,80.625c-4.56875,0 -8.0625,3.49375 -8.0625,8.0625c0,4.56875 3.49375,8.0625 8.0625,8.0625c4.56875,0 8.0625,-3.49375 8.0625,-8.0625c0,-4.56875 -3.49375,-8.0625 -8.0625,-8.0625zM61.8125,91.375c-1.6125,0 -2.6875,-1.075 -2.6875,-2.6875c0,-1.6125 1.075,-2.6875 2.6875,-2.6875c1.6125,0 2.6875,1.075 2.6875,2.6875c0,1.6125 -1.075,2.6875 -2.6875,2.6875z",fill:"url(#color-3_43586_gr3)"}}),a("path",{attrs:{d:"M75.25,86h37.625v5.375h-37.625z",fill:"url(#color-4_43586_gr4)"}}),a("path",{attrs:{d:"M61.8125,102.125c-4.56875,0 -8.0625,3.49375 -8.0625,8.0625c0,4.56875 3.49375,8.0625 8.0625,8.0625c4.56875,0 8.0625,-3.49375 8.0625,-8.0625c0,-4.56875 -3.49375,-8.0625 -8.0625,-8.0625zM61.8125,112.875c-1.6125,0 -2.6875,-1.075 -2.6875,-2.6875c0,-1.6125 1.075,-2.6875 2.6875,-2.6875c1.6125,0 2.6875,1.075 2.6875,2.6875c0,1.6125 -1.075,2.6875 -2.6875,2.6875z",fill:"url(#color-5_43586_gr5)"}}),a("path",{attrs:{d:"M75.25,107.5h26.875v5.375h-26.875z",fill:"url(#color-6_43586_gr6)"}}),a("path",{attrs:{d:"M110.1875,18.8125v24.1875c0,1.6125 1.075,2.6875 2.6875,2.6875h24.1875z",fill:"url(#color-7_43586_gr7)"}}),a("path",{attrs:{d:"M40.3125,150.5c-1.34375,0 -2.6875,-1.34375 -2.6875,-2.6875v-3.225c0.80625,0.26875 1.88125,0.5375 2.6875,0.5375h57.24375c-0.26875,-1.88125 -0.5375,-3.49375 -0.80625,-5.375h-56.4375c-1.34375,0 -2.6875,-1.34375 -2.6875,-2.6875v-112.875c0,-1.34375 1.34375,-2.6875 2.6875,-2.6875h67.1875v18.8125c0,4.56875 3.49375,8.0625 8.0625,8.0625h18.8125v48.375c0.80625,0 1.88125,0 2.6875,0c0.80625,0 1.88125,0 2.6875,0v-48.9125c0,-2.15 -0.80625,-4.3 -2.41875,-5.64375l-23.65,-23.65c-1.6125,-1.6125 -3.49375,-2.41875 -5.64375,-2.41875h-67.725c-4.56875,0 -8.0625,3.49375 -8.0625,8.0625v123.625c0,4.56875 3.49375,8.0625 8.0625,8.0625h61.00625c-0.80625,-1.6125 -1.6125,-3.49375 -2.41875,-5.375zM112.875,25.2625l17.7375,17.7375h-15.05c-1.34375,0 -2.6875,-1.34375 -2.6875,-2.6875z",fill:"url(#color-8_43586_gr8)"}}),a("path",{attrs:{d:"M137.0625,102.125c-19.35,0 -34.9375,15.5875 -34.9375,34.9375c0,19.35 15.5875,34.9375 34.9375,34.9375c19.35,0 34.9375,-15.5875 34.9375,-34.9375c0,-19.35 -15.5875,-34.9375 -34.9375,-34.9375zM137.0625,166.625c-16.39375,0 -29.5625,-13.16875 -29.5625,-29.5625c0,-16.39375 13.16875,-29.5625 29.5625,-29.5625c16.39375,0 29.5625,13.16875 29.5625,29.5625c0,16.39375 -13.16875,29.5625 -29.5625,29.5625z",fill:"url(#color-9_43586_gr9)"}}),a("path",{attrs:{d:"M139.75,120.9375h-5.375v13.4375h-13.4375v5.375h13.4375v13.4375h5.375v-13.4375h13.4375v-5.375h-13.4375z",fill:"url(#color-10_43586_gr10)"}})])])])},D=[],T={name:"more_details_svg"},I=T,$=Object(d["a"])(I,G,D,!1,null,"98645df6",null),F=$.exports,V=a("76aa"),N={components:{DetailsSVG:F},name:"catalog",data:function(){return{price:V,fields:[{label:"Диаметр бревна",key:"diameter"},{label:"Сосна",key:"pine"},{label:"Ясень",key:"ash"},{label:"Бук/Дуб",key:"oak"}],selectedPad:{bonus:0,price:0,name:"",src:"",alt:"",name_pad:"",svg:"",table:""}}},methods:{showModal:function(t){this.selectedPad=t,this.$refs["my-modal"].show()},calcFormula:function(t,e){return Math.round(this.selectedPad.price*e*t/200+this.selectedPad.price*e*t/200*this.selectedPad.bonus)}}},B=N,H=Object(d["a"])(B,E,U,!1,null,"42488191",null),J=H.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Delivery"}},[a("div",{staticClass:"background"},[a("b-container",[a("b-row",[a("b-col",[a("Map")],1),a("b-col",[a("h2",{staticClass:"h2_light"},[t._v("Доставка")]),a("div",{staticClass:"text_light"},[a("p",[t._v("Доставка по России курьерской службой СДЭК.")]),a("p",[t._v("Особенности доставки зависят от объема заказа и удаленности заказчика.")]),a("p",[t._v("Срок доставки от 2х дней.")])])])],1)],1)],1)])},L=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{version:"1.1",id:"map_svg",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 537 293","xml:space":"preserve"}},[a("circle",{staticClass:"st0",attrs:{cx:"268",cy:"147",r:"295"}}),a("g",{attrs:{id:"Layer_3"}},[a("path",{staticClass:"st1",attrs:{d:"M206.1,257.2c-1.4-2.2-1.5-5.2-2.1-7.9c-0.2-0.8-0.2-1.7-0.3-2.5c-0.5-3.4-2.1-5-5.4-5 c-5,0.3-9.7-2.4-12.1-6.8c-1.1-1.9-3.2-3.2-5.4-3.3c-3.5-0.4-3.9-0.5-3.9-4c0-2.8-1.4-4-3.8-4.6c-8.9-2.4-17.8-4.7-26.8-6.9 c-2.3-0.5-4.7-0.6-7-0.4c-6.2,0.5-7.9,8.7-10.3,9.8c-6.4,3-2.7-1.1-18.5-1.1c-7.4,0-7.4-0.1-8.8-7.6c-0.8-4.3-2-5.5-6.2-6.4c-1.3-0.4-2.4-1.2-3.1-2.4c-2.5-4.6-6.2-5.6-11.1-5.2c-7.5,0.6-13.5-2.4-17-0.3c-1.4,0.9-2.7,2-4.1,3c-1.3,0.9-2.7,1.6-4.2,2.3c-1.9,0.8-2.8,2.8-2.1,4.7c0.6,1.7,1.2,3.3,2,4.9c1.5,3.4,2,6.7,0.3,10.2c-0.5,1.1-3.5,3.4-4.8,2.9c-6.5-2.6-14.5,2-14.1,9.2c0.1,2.4-0.5,3.8-3.3,4.3s-6.9,10.7-8.3-2.4c-0.2-2.3-0.5-4.5-0.9-6.8c-0.5-3-2.1-5-5.4-5.2c-2-0.1-3-1.5-3.4-3.2c-0.7-3.1-1.3-6.3-1.8-9.4c-0.2-2.2-1.6-4.1-3.6-5c-1-0.5-1.8-1.1-2.6-1.9c-0.4-0.6-0.7-1.3-0.6-2.1s0.4-1.5,0.7-2.2c1.1-2.7,5.4-11.5,7.9-13.3c1.4-1,2.5-2.2,3.8-3.3c2.1-1.7,2.4-1.6,4.1,0.6c0.4,0.7,1.1,1.1,1.9,1.2c0.8-0.2,1.4-0.7,1.8-1.4c1.3-2.7,2.2-3.3,5.3-3c1.4,0.2,2.8,0.5,4.3,0.6c3.2,0.2,5.1-1.3,5.6-4.4c0.4-2.5,0.7-5,0.8-7.5c-0.2-1.1-0.5-2.2-1.1-3.1c-0.9-2.3-1.8-4.6-2.7-6.9c-0.7-1.8-1.6-3.5-2.1-5.4c-0.4-0.9-0.5-1.9-0.3-2.9c0.7-1.6,1.5-3.2,2.4-4.7c0.2-6,9.2-23.6,12.3-25.6c3.4-2.1,4.4-4.7,2.7-8.4c-1.1-2.3-2.4-4.5-3.9-6.6c-1-1.5-0.9-2.8,0.5-3.8c4.3-3.5,9.7-5.4,13.1-9.2c0.6-0.7,1.2-1.4,1.9-2c1.6-1.5,4-1.6,5.6-0.1c0.6,0.4,1.1,1.2,1.8,1.4c1.1,0.4,4.1-1.4,4.2-2.5c0.1-0.9-0.4-1.8-0.3-2.7c0.1-0.8,0.4-1.5,1.1-2c0.8-0.4,2.3-0.6,2.7-0.1c2.4,2.4,5.4,2.6,8.5,2.5c2.9-0.1,5.8-0.5,8.7-0.8c2-0.2,2.9-1.5,2.5-3.3c-0.6-2.5,0.2-3.6,2.7-4.3c1-0.4,1.7-1.3,2-2.3c1.6-5.1,5.1-8.2,9.8-10.2c3-1.3,6.1-2.5,9-3.9c1.3-0.7,2.5-1.7,3.4-2.9c1.3-1.8,12,1.4,13.3,2.8c2.4,2.6,2.6,3.6,1.1,6.7c-0.4,0.8-0.5,1.7-0.4,2.6c0.2,1.8,0.6,3.6,0.9,5.4c1.1,6.7-10.3,13-12.3,3.9c-0.7-3.3-1.3-6.6-2.1-9.9c-0.4-1.6-1.1-3-3-2.9s-2.2,1.6-2.6,3.1c-0.2,0.9-0.4,1.9-0.6,2.9c-0.3,1.7-0.4,3.4-2.6,3.9c-0.7,0.2-1.3,1.2-1.8,2c-1.8,2.7-3.5,5.5-5.2,8.3c-0.9,1.3-1.5,2.8-1.9,4.3c-0.3,2.3,1.1,3.8,3.2,4.8s2.8-0.5,3.8-1.6s4.3-0.9,4.6,0.3c0.8,2.9,2.1,3.7,5,2.9c2-0.6,4-1.4,6.1-2c1.8-0.5,3.3-0.3,4.1,1.8c0.5,0.7,1.1,1.2,1.9,1.4c5,1.6,12.2,1.1,16.8,3.7c3.2,1.8,5.1,1.6,8.5-1c4.1,3.6,7.9,8.5,14.4,4.3c2.2,3,3.6,6.8,7.7,7.5c4.3,0.8,12.1-2.7,13.8-1.4c2,1.5,2.4,3.4,2.4,5.8c0,1.9,24.3,10.7,25.5,7.8c1.1-2.5,1.3-5.3,2-7.9c0.2-0.9,0.6-2.2,1.3-2.5c10.5-4.4,4.3-0.7,10.3-5.3c3.8-3,11,8.2,12.4,7.7c1.7-0.6,1.4-2.5,0.9-4c-0.3-1.3-0.8-2.6-1.5-3.8c-1.6-2.5-1.5-5.2-1.1-7.9c0.2-0.7,0.6-1.3,1.3-1.5c2.1-0.5,4.2-1.1,5.9,0.9c1.2,1.4,3.7,2.7,5.6,1.8c2.1-1.1,1.6-3.1,2-4.9c0.5-2.3,1.8-4.4,2.7-6.5c0.5-0.9,0.9-1.9,1.1-2.9c0.3-1.6,1.1-2.1,2.5-1.4c5.7,2.6,5.2-1.4,12.3-0.9c1.9,0.1,3-0.7,4-2.3c1-1.3,2.5-2.3,4.1-2.7c3.2-0.9,4-1.6,4.2-5c0.1-1.9,0.2-3.8,0.4-5.7c0.1-1.4,0.9-2.1,2.4-1.4l3.3,1.5c1,0.3,1.6,1.4,1.3,2.4v0.1c0.6,6.5,3.2,14.4,1.1,30.2c-0.6,0.9-0.3,2.2,0.7,2.8s2.2,0.3,2.8-0.7c1-0.8,1.8-1.7,2.4-2.7c1.3-2.2,3.9-3.3,6.4-2.5c1.3,0.3,2.5,0.5,3.8,0.7c3.3,0.4,4.6-0.6,5.2-3.9c0.1-0.4,0.2-0.9,0.3-1.5c1.3,0.4,2.4,0.7,3.5,1.1c2.8,1,6,0.9,8.7-0.3c1.2-0.4,2.5-0.6,3.8-0.4c13,0.9,1.9-6.4,19.1,3.4c3.4,1.9,6-0.2,5.5-4c-0.6-5,7-2.1,8.9-6.2c0.9-1.4,2.6-1.9,4.1-1.2c1,0.4,2.6,0.9,3,0.5c0.6-0.9,0.9-2.1,0.8-3.2c0-1.7-0.6-3.3-0.7-5c-0.2-2.8,0.9-4.1,3.4-5.3c2.2-1.1,4.3-2.4,6.5-3.6c0.3-0.2,0.7-0.4,1-0.3c2.1,0.6,3.3-0.4,4-2.1c0.9-2.2,2.6-2.5,4.5-2c5.2,1.4,6.1,0.5,7.9-5.3c0.3-0.7,0.5-1.5,0.6-2.2c0.1-1.7,1.5-2.9,3.2-2.8c0,0,0,0,0.1,0h0.3c3.4,0.2,6.7,0.7,10,1.1c0.1,0,0.3,0.1,0.4,0.1c3.8,1.7,3.8,1.7,4.9-2.2c0.3-1.1,0.7-2.2,0.9-3.3c1.3-5.7,4.9-8.8,10.6-10.2c3-0.7,5.7-2.5,8.4-4.1c1.4-0.8,1.2-2.7-0.3-3.6c-1.3-0.6-2.7-1.2-4.2-1.6c-2.9-1-3.5-2.4-1.4-4.7c1.9-2,4.1-3.9,6.4-5.5c2-1.2,3.6-3.1,4.6-5.2c1.4-3.4,4.5-5.3,7.4-7.3c1.8-1.3,3.5-2.6,5.4-3.9c0.8-0.6,1.7-0.9,2.7-1.1c2-0.4,4-0.4,5.9-0.8c0.9-0.2,2.2-0.7,2.4-1.3c1.1-5.6-0.5-1.1,10.1-5.2c1.5-0.6,2.1,0.3,2.4,1.3c0.2,0.6,0.1,1.9-0.4,2.2c-3.6,2-5.7,5.8-5.6,9.9c0,1.8-1.1,2.4-2.8,2.6c-1.2,0.1-3,0.6-3.2,1.3c-0.2,1.3,0.2,2.6,1,3.6c2.1,3.1,2.2,3.8,0.2,7s-2.6,6.2-0.4,9.4c1.5,2.2,3.8,2.4,5.5,0.3c1-1.2,1.9-2.6,2.9-3.9c1.6-2.1,2.9-2.2,5.1-1c1.5,0.8,3.1,1.5,5,2.4c-0.2,1.1-0.4,2.6-0.8,4c-1.3,4.6-1.1,9,1.6,13.2c2.5,3.9,1.8,8.1,0.8,12.2c-0.8,4-2.8,7.7-5.6,10.6c-2.5,2.5-2.3,3.7-0.5,6.7c6.6,10.7,12.6,20.9,15.5,22.2c0.4,0.6,0.9,1.2,1.6,1.5c1.9,1.1,6,10.3,9.8,12.4c1.4,0.6,2.2,2,2.1,3.5c-0.2,13.5,12.3,36.2-11.2,14.5c-3.6-3.3-7.8-6.2-11.1-9.8c-5-5.6-7.8-12.5-9-20c-0.2-0.8-0.2-1.7,0.2-2.4c2.1-3.6,1.6-7.3,0.3-10.9c-1.2-3.3-2.6-6.5-4.3-9.6c-2.3-4.3-8-6.9-12.9-6.2c-3.9,0.5-5.6,3.8-3.5,7.2c1,1.6,2.4,2.9,3.5,4.5c2.3,3.2-2.1,6.3-2.8,8.7c-0.6,2-1.4,3.6-3.4,4.5c-1.7,0.8-1.7,2.5-1.3,4c1,3.2,2,6.4,3.3,9.5c4.4,11.1,0.4,5.5-3,12.2c-0.9,1.7-1.7,3.4-2.6,5.1c-1.4,2.6-3.9,4.4-6.8,5c-3.6,0.7-6.6,3.1-8.2,6.4c-2.3,4.4-4.8,8.7-6.4,13.4c-1.2,3.7-1.1,7.9-1.6,11.9c-0.9,6.4-2,12.8-2.8,19.2c-0.3,1.9-0.3,3.8-0.1,5.7c0.5,5.2,2.9,7.1,8,6c1.2-0.4,2.5,0.1,3.3,1.1c3.3,3.5,6.4,2.7,7.6-2c0.5-2,0.8-4,0.9-6.1c0-1.3,0.9-2.5,2.2-2.7c4.9-1.6,7.4,0.1,8.8,5.1c1.1,3.1,2.5,6.2,4.1,9c1.4,2.6,3,5,4.6,7.6c0.2,0.3,0.4,0.8,0.7,0.9c2.7,1.1,2.8,3.3,2.8,5.7c-0.1,3.2,1,6.1,1.9,9.1c0.9,3.3,1.3,6.7,1.1,10.2c-0.1,8.2-0.1,16.3-0.8,24.4c-0.3,3.5-2.2,6.9-3.6,10.2c-0.6,0.9-1.5,1.4-2.5,1.6c-3.4,0.7-5.9,2.1-6.7,5.9c-0.4,2-5,3-5.4,1.5c-1.3-4.3-1.4-8.8-0.3-13.1c0.6-2.2,1.8-4,4.4-4.4c0.8-0.3,1.5-1,1.7-1.8c0.5-7.2,0.7-14.5-1.1-21.6c-2.2-8.8-20.9,2.2-27.9,2.7c-4.4,0.3-8.8,0.7-13.2,1.1c-1.9,0.1-3.2-0.5-3.3-2.8c-0.4-6.9-4.4-10.6-10.9-12.1c-6.8-1.7-13.8-2-20.7-1c-5.5,0.9-8.1,4.3-7.6,9.8c0.2,1.8,0.8,3.6,1,5.4c0.3,1.9,0.5,3.8,0.5,5.6c-0.4,4.4-1,8.8-1.5,13.2c-0.1,1.3-1.2,2.3-2.5,2.3c-0.2,0-0.5-0.1-0.7-0.1c-2.8-1-5.8-0.9-8.5,0.2c-1.2,0.4-2.6,0.3-3.7-0.3c-3.7-1.9-5.8-1.6-9.2,2.6c-1.1,1.5-2.3,3-3.6,4.4c-5,4.8-11,6-17.6,4.1c-2.1-0.6-4.3-1.3-6.4-1.9c-4.2-1.2-8.6-0.8-12.5,1c-1.6,0.9-3.5,0.7-4.9-0.5c-2.4-2-4.6-4.3-6.8-6.5c-2.5-2.5-5.3-4.4-8.9-4.6c-4.5-0.2-7.4,2.4-7.9,6.9c-0.2,0.9-0.2,1.8,0,2.7c0.7,2.6-0.7,3.1-2.8,3.3c-4.1,0.3-8.1,1.5-11.7,3.5c-3,1.8-6.3,0.5-8.6-2.3c-1.2-1.4-2.8-2.5-4.7-2.9c-2.6-0.5-5.5-0.1-8.2-0.1c-0.1,0-0.1,0-0.2,0c-3,2-6.2,3.6-9.6,4.8c-0.5,0.2-0.9,0.6-1.1,1.1c-0.5,2.5-2.2,2.6-4.1,2.3c-3.3-0.6-6.5-1.3-9.8-2 c-1.3-0.3-2.3-1.5-2.2-2.8c-0.6-6.8-4.4-10.7-10.8-12.6c-2.3-0.6-4.4-1.7-6.4-3C214.3,266.6,208.2,260.6,206.1,257.2z"}}),a("path",{staticClass:"st2 movement",attrs:{d:"M189.2,209.2c-5.9-5.4-10-11.7-10-19.9l0,0c0-5.4,4.3-9.7,9.7-9.7l0,0l0,0c5.4,0,9.7,4.3,9.7,9.7v0.4C198.6,197.3,194.7,204.2,189.2,209.2z"}}),a("path",{staticClass:"st2 movement_2",attrs:{d:"M351.7,163.8c-5.9-5.4-10-11.7-10-19.9l0,0c0-5.4,4.3-9.7,9.7-9.7l0,0l0,0c5.4,0,9.7,4.3,9.7,9.7v0.4C361.1,151.9,357.2,158.7,351.7,163.8z"}}),a("path",{staticClass:"st2 movement",attrs:{d:"M37.5,220c-6-5.4-10-11.7-10-19.9l0,0c0-5.4,4.4-9.7,9.7-9.7l0,0l0,0c5.4,0,9.7,4.3,9.7,9.7l0,0l0,0v0.4 C46.9,208.1,43,215,37.5,220z"}}),a("path",{staticClass:"st2 movement_2",attrs:{d:"M115.8,185.6c-3.2-2.9-5.3-6.3-5.3-10.6l0,0c0-2.9,2.3-5.2,5.2-5.2l0,0l0,0c2.9,0,5.2,2.3,5.2,5.2v0.2 C120.7,179.2,118.9,183,115.8,185.6z"}}),a("path",{staticClass:"st2 movement_2",attrs:{d:"M156.8,149c-3.2-2.9-5.3-6.3-5.3-10.6l0,0c0-2.9,2.3-5.2,5.2-5.2l0,0c2.9,0,5.2,2.3,5.2,5.2v0.2 C161.7,142.6,159.9,146.4,156.8,149z"}}),a("path",{staticClass:"st2 movement",attrs:{d:"M276.6,215.7c-3.2-2.9-5.3-6.3-5.3-10.6l0,0c0-2.9,2.3-5.2,5.2-5.2l0,0l0,0c2.9,0,5.2,2.3,5.2,5.2l0,0v0.2 C281.6,209.3,279.7,213.1,276.6,215.7z"}}),a("path",{staticClass:"st2 movement_2",attrs:{d:"M407.9,144.9c-3.2-2.9-5.3-6.3-5.3-10.6l0,0c0-2.9,2.3-5.2,5.2-5.2l0,0l0,0c2.9,0,5.2,2.3,5.2,5.2l0,0l0,0v0.2 C412.8,138.5,411,142.2,407.9,144.9z"}}),a("path",{staticClass:"st2 movement",attrs:{d:"M418.3,210.3c-3.2-2.9-5.4-6.3-5.3-10.6l0,0c0-2.9,2.3-5.2,5.2-5.2l0,0l0,0c2.9,0,5.2,2.3,5.2,5.2l0,0l0,0v0.2 C423.2,203.9,421.4,207.7,418.3,210.3z"}}),a("path",{staticClass:"st2 movement_2",attrs:{d:"M470.8,41.2c-3.2-2.9-5.4-6.3-5.3-10.6l0,0c0-2.9,2.3-5.2,5.2-5.2l0,0c2.9,0,5.2,2.3,5.2,5.2l0,0l0,0v0.2 C475.8,34.8,473.9,38.6,470.8,41.2z"}}),a("path",{staticClass:"st2 movement",attrs:{d:"M456.1,103.4c-6-5.4-10-11.7-10-19.9l0,0c0-5.4,4.3-9.7,9.7-9.7l0,0l0,0c5.4,0,9.7,4.3,9.7,9.7l0,0l0,0v0.4 C465.5,91.5,461.6,98.3,456.1,103.4z"}}),a("path",{staticClass:"st2 movement_2",attrs:{d:"M351.7,242.5c-6-5.4-10-11.7-10-19.9l0,0c0-5.4,4.3-9.7,9.7-9.7l0,0l0,0c5.4,0,9.7,4.3,9.7,9.7v0.4 C361.2,230.6,357.2,237.4,351.7,242.5z"}}),a("path",{staticClass:"st2 movement",attrs:{d:"M245.8,166.5c-5.9-5.4-10-11.7-10-19.9l0,0c0-5.4,4.3-9.7,9.7-9.7l0,0l0,0c5.4,0,9.7,4.3,9.7,9.7l0,0l0,0v0.4 C255.3,154.6,251.3,161.4,245.8,166.5z"}}),a("g",{staticClass:"movement_3"},[a("path",{staticClass:"st2",attrs:{d:"M90.5,167.9c-13.9-12.6-23.4-27.5-23.3-46.6l0,0c0-12.5,10.2-22.8,22.8-22.8l0,0l0,0c12.5,0,22.8,10.2,22.8,22.8l0,0l0,0v1C112.7,140,103.4,156,90.5,167.9z"}}),a("g",[a("path",{staticClass:"st3",attrs:{d:"M98.9,108.8H80.9c-1.6,0-2.9,1.3-2.9,2.9v18.1c0,1.6,1.3,2.9,2.9,2.9h18.1c1.6,0,2.9-1.3,2.9-2.9v-18.1C101.8,110.2,100.5,108.8,98.9,108.8z"}}),a("g",[a("circle",{staticClass:"st4",attrs:{cx:"89.9",cy:"120.8",r:"9.7"}}),a("g",[a("circle",{staticClass:"st4",attrs:{cx:"98.6",cy:"111.1",r:"1"}}),a("circle",{staticClass:"st4",attrs:{cx:"81.1",cy:"111.1",r:"1"}})]),a("g",[a("circle",{staticClass:"st4",attrs:{cx:"98.6",cy:"130.5",r:"1"}}),a("circle",{staticClass:"st4",attrs:{cx:"81.1",cy:"130.5",r:"1"}})])])])])])])},R=[],Y={name:"map_svg"},q=Y,K=Object(d["a"])(q,Q,R,!1,null,"0ef6fb77",null),W=K.exports,X={name:"delivery",components:{Map:W}},Z=X,tt=Object(d["a"])(Z,A,L,!1,null,"1ac6c67d",null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Portfolio"}},[a("b-container",[a("h2",[t._v("Портфолио")]),a("div",{staticClass:"flex-container"},t._l(t.Portfolio,(function(t,e){return a("img",{key:e,attrs:{src:t.src,alt:t.alt}})})),0)])],1)},ct=[],st={name:"portfolio",data:function(){return{publicPath:"/avacont/",Portfolio:[{src:"./images/portfolio/round_pad_on_3_sockets.jpg",alt:"Круглая_накладка_на_3_розетки"},{src:"./images/portfolio/round_pad_on_3_switch.jpg",alt:"Квадратная_накладка_на_3_выключателя"},{src:"./images/portfolio/pad_on_log.jpg",alt:"Накладка_на_бревно"},{src:"./images/portfolio/double_pad_on_log.jpg",alt:"Двойная_накладка_на_бревно"},{src:"./images/portfolio/pad_on_switch.jpg",alt:"Накладка_под_выключатель"},{src:"./images/portfolio/pad_with_hidden_installation.jpg",alt:"Накладка_со_скрытой_установкой"},{src:"./images/portfolio/retro_pad.jpg",alt:"Ретро_накладка"},{src:"./images/portfolio/retro_pad_under_log.jpg",alt:"Ретро_накладка_под_бревно"},{src:"./images/portfolio/pad_under_different_sockets.jpg",alt:"Накладка_под_разные_розетки"},{src:"./images/portfolio/pad_under_log_on_switches.jpg",alt:"Накладка_под_бревно_на_выключатели"},{src:"./images/portfolio/pad_of_dark_oak_under_switches.jpg",alt:"Накладка_из_темного_дуба_под_выключатели"},{src:"./images/portfolio/pad_under_socket.jpg",alt:"Накладка_под_розетку"}]}}},rt=st,ot=Object(d["a"])(rt,at,ct,!1,null,"f1cb3846",null),nt=ot.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Contact"}},[a("div",{staticClass:"background"},[a("b-container",[a("h2",{staticClass:"h2_light"},[t._v("Контактная информация")]),a("b-row",[a("b-col",{attrs:{cols:"5"}},[a("div",{staticClass:"address text"},[a("div",{staticClass:"telephone"},[a("u",[t._v(" Телефон:")]),a("a",{attrs:{href:"tel:"+t.address.phone}},[t._v(" "+t._s(t.address.phone))])]),a("div",{staticClass:"mail"},[a("u",[t._v("E-mail:")]),a("a",{attrs:{href:"mailto:"+t.address.mail}},[t._v(" "+t._s(t.address.mail))])]),a("div",[a("u",[t._v("Часы работы:")]),a("br"),t._v(" "+t._s(t.address.working_hours))]),a("div",[a("u",[t._v(" Адрес производства:")]),a("br"),t._v(" "+t._s(t.address.manufacturers_address))]),a("div",[a("u",[t._v(" Адрес офиса продаж:")]),a("br"),t._v(" "+t._s(t.address.sales_office_address))])])]),a("b-col",[a("div",{staticClass:"map",attrs:{id:"map-wrap"}},[a("iframe",{attrs:{title:"адрес_компании",src:t.address.map}})])])],1)],1)],1)])},lt=[],dt=a("9530"),pt={name:"contact",data:function(){return{address:dt}}},_t=pt,ut=Object(d["a"])(_t,it,lt,!1,null,"6b63511d",null),mt=ut.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Myfooter"}},[a("b-container",[a("b-row",[a("b-col",[a("a",{attrs:{href:"tel:"+t.address.phone}},[t._v(" "+t._s(t.address.phone))])]),a("b-col",[t._v(t._s(t.address.manufacturers_address))]),a("b-col",[a("a",{attrs:{href:"mailto:"+t.address.mail}},[t._v(t._s(t.address.mail))])])],1)],1)],1)},gt=[],vt={name:"myfooter",data:function(){return{address:dt}}},ht=vt,bt=(a("350d"),Object(d["a"])(ht,ft,gt,!1,null,"6eba60c8",null)),kt=bt.exports,yt={name:"App",components:{Myfooter:kt,Contact:mt,Portfolio:nt,Delivery:et,Catalog:J,Images:P,Features:j,Navbar:_,Home:h}},xt=yt,Ct=(a("034f"),a("5c64"),Object(d["a"])(xt,s,r,!1,null,null,null)),jt=Ct.exports,wt=a("5f5b"),Mt=a("b1e0");a("f9e3"),a("2dd8");c["default"].use(wt["a"]),c["default"].use(Mt["a"]),c["default"].config.productionTip=!1,new c["default"]({render:function(t){return t(jt)}}).$mount("#app")},"5c64":function(t,e,a){"use strict";var c=a("d32a"),s=a.n(c);s.a},"76aa":function(t){t.exports=JSON.parse('{"type":{"pine":0.7,"ash":1.5,"oak":1},"Open_mount_pads":[{"bonus":0,"price":400,"name":"Накладки с открытой установкой","src":"./images/catalog/under_the_radiator.jpg","alt":"Накладка_глухая_под_радиатор","name_pad":"Накладка глухая под радиатор","svg":"DetailsSVG","table":[{"diameter":180,"pine":0,"ash":0,"oak":0},{"diameter":200,"pine":0,"ash":0,"oak":0},{"diameter":220,"pine":0,"ash":0,"oak":0},{"diameter":240,"pine":0,"ash":0,"oak":0},{"diameter":260,"pine":0,"ash":0,"oak":0},{"diameter":280,"pine":0,"ash":0,"oak":0}]},{"bonus":0,"price":300,"name":"Накладки с открытой установкой","src":"./images/catalog/single_on_log.jpg","alt":"Накладка_глухая_одинарная_на_бревно","name_pad":"Накладка глухая одинарная на бревно","svg":"DetailsSVG","table":[{"diameter":180,"pine":0,"ash":0,"oak":0},{"diameter":200,"pine":0,"ash":0,"oak":0},{"diameter":220,"pine":0,"ash":0,"oak":0},{"diameter":240,"pine":0,"ash":0,"oak":0},{"diameter":260,"pine":0,"ash":0,"oak":0},{"diameter":280,"pine":0,"ash":0,"oak":0}]},{"bonus":0,"price":750,"name":"Накладки с открытой установкой","src":"./images/catalog/triple_on_log.jpg","alt":"Накладка_глухая_тройная_на_бревно","name_pad":"Накладка глухая тройная на бревно","svg":"DetailsSVG","table":[{"diameter":180,"pine":0,"ash":0,"oak":0},{"diameter":200,"pine":0,"ash":0,"oak":0},{"diameter":220,"pine":0,"ash":0,"oak":0},{"diameter":240,"pine":0,"ash":0,"oak":0},{"diameter":260,"pine":0,"ash":0,"oak":0},{"diameter":280,"pine":0,"ash":0,"oak":0}]}],"Flush_mounted_overlays":[{"bonus":0,"price":350,"name":"Накладки со скрытой установкой","src":"./images/catalog/to_the_outlet.jpg","alt":"Накладка_на_розетку","name_pad":"Накладка на розетку","svg":"DetailsSVG","table":[{"diameter":180,"pine":0,"ash":0,"oak":0},{"diameter":200,"pine":0,"ash":0,"oak":0},{"diameter":220,"pine":0,"ash":0,"oak":0},{"diameter":240,"pine":0,"ash":0,"oak":0},{"diameter":260,"pine":0,"ash":0,"oak":0},{"diameter":280,"pine":0,"ash":0,"oak":0}]},{"bonus":0,"price":350,"name":"Накладки со скрытой установкой","src":"./images/catalog/on_switch.jpg","alt":"Накладка_на_выключатель_одинарная","name_pad":"Накладка на выключатель одинарная","svg":"DetailsSVG","table":[{"diameter":180,"pine":0,"ash":0,"oak":0},{"diameter":200,"pine":0,"ash":0,"oak":0},{"diameter":220,"pine":0,"ash":0,"oak":0},{"diameter":240,"pine":0,"ash":0,"oak":0},{"diameter":260,"pine":0,"ash":0,"oak":0},{"diameter":280,"pine":0,"ash":0,"oak":0}]},{"bonus":0,"price":600,"name":"Накладки со скрытой установкой","src":"./images/catalog/double.jpg","alt":"Двойная_накладка","name_pad":"Двойная накладка","svg":"DetailsSVG","table":[{"diameter":180,"pine":0,"ash":0,"oak":0},{"diameter":200,"pine":0,"ash":0,"oak":0},{"diameter":220,"pine":0,"ash":0,"oak":0},{"diameter":240,"pine":0,"ash":0,"oak":0},{"diameter":260,"pine":0,"ash":0,"oak":0},{"diameter":280,"pine":0,"ash":0,"oak":0}]},{"bonus":0.1,"price":600,"name":"Накладки со скрытой установкой","src":"./images/catalog/double_enlarged.jpg","alt":"Двойная (увеличенная) накладка","name_pad":"Двойная (увеличенная) накладка","svg":"DetailsSVG","table":[{"diameter":180,"pine":0,"ash":0,"oak":0},{"diameter":200,"pine":0,"ash":0,"oak":0},{"diameter":220,"pine":0,"ash":0,"oak":0},{"diameter":240,"pine":0,"ash":0,"oak":0},{"diameter":260,"pine":0,"ash":0,"oak":0},{"diameter":280,"pine":0,"ash":0,"oak":0}]},{"bonus":0,"price":800,"name":"Накладки со скрытой установкой","src":"./images/catalog/triple.jpg","alt":"Тройная накладка","name_pad":"Тройная накладка","svg":"DetailsSVG","table":[{"diameter":180,"pine":0,"ash":0,"oak":0},{"diameter":200,"pine":0,"ash":0,"oak":0},{"diameter":220,"pine":0,"ash":0,"oak":0},{"diameter":240,"pine":0,"ash":0,"oak":0},{"diameter":260,"pine":0,"ash":0,"oak":0},{"diameter":280,"pine":0,"ash":0,"oak":0}]}]}')},"79ec":function(t,e,a){},"85ec":function(t,e,a){},9530:function(t){t.exports=JSON.parse('{"mail":"avacont@yandex.ru","phone":"+7 (495) 369-26-73","working_hours":"Пн. – Пт.: с 9:00 до 18:00","map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1092.699013460602!2d37.90479774642049!3d55.68142432846072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab734d2036e09%3A0xb87a5fecd7e1696b!2z0JDQstCw0LrQvtC90YI!5e0!3m2!1sru!2sru!4v1653673226596!5m2!1sru!2sru\\" style=\\"border:0;\\" allowfullscreen=\\"\\" loading=\\"lazy\\" referrerpolicy=\\"no-referrer-when-downgrade\\"></iframe>","sales_office_address":"Московская обл., г. Котельники, микрорайон Силикат, дом 2","manufacturers_address":"Московская обл., г. Люберцы, Инициативная улица, дом 34А, объект 3, офис 5."}')},be1e:function(t,e,a){t.exports=a.p+"img/triple_pad.e4537abe.jpg"},c1dc:function(t,e,a){t.exports=a.p+"img/double_pad.7dfc59ab.jpg"},d32a:function(t,e,a){},f6ff:function(t,e,a){t.exports=a.p+"img/log_pad.43fb3cdf.jpg"}});
//# sourceMappingURL=app.909f89a1.js.map