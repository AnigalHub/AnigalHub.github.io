(window.webpackJsonp=window.webpackJsonp||[]).push([[16,21],{253:function(e,t,r){e.exports=r.p+"img/type_1.01ad3f7.png"},254:function(e,t,r){e.exports=r.p+"img/type_2.6503e41.png"},255:function(e,t,r){e.exports=r.p+"img/type_3.cbe96ae.png"},256:function(e){e.exports=JSON.parse('{"econom":[{"name":"Вахтовый","descr_name":"(12 ч.)","price_hour":130,"price":65000,"price_hour_with_weapon":"150","price_with_weapon":70000},{"name":"Суточный","descr_name":"(2/2)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000},{"name":"Суточный","descr_name":"(1/2)","price_hour":150,"price":95000,"price_hour_with_weapon":170,"price_with_weapon":100000},{"name":"Дневной (ночной)","descr_name":"(12 ч., пн-вс)","price_hour":140,"price":75000,"price_hour_with_weapon":160,"price_with_weapon":80000},{"name":"Дневной (ночной)","descr_name":"(12 ч., пн-пт)","price_hour":135,"price":70000,"price_hour_with_weapon":155,"price_with_weapon":75000}],"standart":[{"name":"Вахтовый","descr_name":"(12 ч.)","price_hour":140,"price":80000,"price_hour_with_weapon":160,"price_with_weapon":85000},{"name":"Суточный","descr_name":"(2/2)","price_hour":165,"price":105000,"price_hour_with_weapon":185,"price_with_weapon":110000},{"name":"Суточный","descr_name":"(1/2)","price_hour":170,"price":125000,"price_hour_with_weapon":190,"price_with_weapon":130000},{"name":"Дневной (ночной)","descr_name":"(12 часов, пн-вс)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000},{"name":"Дневной (ночной)","descr_name":"(12 часов, пн-пт)","price_hour":140,"price":75000,"price_hour_with_weapon":160,"price_with_weapon":80000}],"premium":[{"name":"Вахтовый","descr_name":"(12 ч.)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000},{"name":"Суточный","descr_name":"(2/2)","price_hour":175,"price":120000,"price_hour_with_weapon":195,"price_with_weapon":125000},{"name":"Суточный","descr_name":"(1/2)","price_hour":185,"price":135000,"price_hour_with_weapon":200,"price_with_weapon":140000},{"name":"Дневной (ночной)","descr_name":"(12 ч., пн-вс)","price_hour":165,"price":100000,"price_hour_with_weapon":185,"price_with_weapon":105000},{"name":"Дневной (ночной)","descr_name":"(12 часов, пн-пт)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000}]}')},257:function(e,t,r){"use strict";r.r(t);var _=r(256),n={name:"tariffs",data:function(){return{name_page:"Тарифы",tarrifs:_,fields:[{label:"Режим",key:"mode"},{label:"Невооруженная",key:"unarmed"},{label:"Вооруженная",key:"armed"}]}}},c=r(37),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"page",attrs:{id:"tariffs"}},[_("b-container",[_("h1",[e._v(e._s(e.name_page))]),e._v(" "),_("div",{staticClass:"flex-container"},[_("div",{staticClass:"type"},[_("h3",[e._v("Эконом")]),e._v(" "),_("img",{attrs:{src:r(253),alt:"тип_1"}}),e._v(" "),_("p",{staticClass:"text "},[e._v("Сотрудники с хорошим телосложением, имеющие  разряд не выше 5-го, с опытом работы от 1 года, обучены для выполнения общенаблюдательных функций и обеспечения пропускного режима")]),e._v(" "),_("b-table",{staticClass:"text",attrs:{hover:"",items:e.tarrifs.econom,fields:e.fields},scopedSlots:e._u([{key:"cell(mode)",fn:function(t){var r=t.item;return[_("div",{staticClass:"text"},[e._v(e._s(r.name))]),e._v(" "),_("span",{staticClass:"text_descr"},[e._v(e._s(r.descr_name))])]}},{key:"cell(unarmed)",fn:function(t){var r=t.item;return[_("div",[e._v(" от "+e._s(r.price_hour)+" ₽/час")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price)+" ₽/мес")])]}},{key:"cell(armed)",fn:function(t){var r=t.item;return[_("div",[e._v("от "+e._s(r.price_hour_with_weapon)+" ₽/час ")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price_with_weapon)+" ₽/мес")])]}}])})],1),e._v(" "),_("div",{staticClass:"type"},[_("h3",[e._v("Стандарт")]),e._v(" "),_("img",{attrs:{src:r(254),alt:"тип_2"}}),e._v(" "),_("p",{staticClass:"text "},[e._v("Сотрудники, со среднем телосложением, имеющие  разряд 5-6, с опытом работы от 3-лет, обучены для выполнения контрольно-пропускного режима и работы с техническими средствами")]),e._v(" "),_("b-table",{staticClass:"text",attrs:{hover:"",items:e.tarrifs.standart,fields:e.fields},scopedSlots:e._u([{key:"cell(mode)",fn:function(t){var r=t.item;return[_("div",{staticClass:"text"},[e._v(e._s(r.name))]),e._v(" "),_("span",{staticClass:"text_descr"},[e._v(e._s(r.descr_name))])]}},{key:"cell(unarmed)",fn:function(t){var r=t.item;return[_("div",[e._v(" от "+e._s(r.price_hour)+" ₽/час")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price)+" ₽/мес")])]}},{key:"cell(armed)",fn:function(t){var r=t.item;return[_("div",[e._v("от "+e._s(r.price_hour_with_weapon)+" ₽/час ")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price_with_weapon)+" ₽/мес")])]}}])})],1),e._v(" "),_("div",{staticClass:"type"},[_("h3",[e._v("Премиум")]),e._v(" "),_("img",{attrs:{src:r(255),alt:"тип_3"}}),e._v(" "),_("p",{staticClass:"text"},[e._v("Сотрудники, строго до 45-лет, крепкого телосложения и презентабельной внешности, имеющие 6-ой разряд, с опытом работы от 5-лет, обучены для выполнения особо сложных задач")]),e._v(" "),_("b-table",{staticClass:"text",attrs:{hover:"",items:e.tarrifs.premium,fields:e.fields},scopedSlots:e._u([{key:"cell(mode)",fn:function(t){var r=t.item;return[_("div",{staticClass:"text"},[e._v(e._s(r.name))]),e._v(" "),_("span",{staticClass:"text_descr"},[e._v(e._s(r.descr_name))])]}},{key:"cell(unarmed)",fn:function(t){var r=t.item;return[_("div",[e._v(" от "+e._s(r.price_hour)+" ₽/час")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price)+" ₽/мес")])]}},{key:"cell(armed)",fn:function(t){var r=t.item;return[_("div",[e._v("от "+e._s(r.price_hour_with_weapon)+" ₽/час ")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price_with_weapon)+" ₽/мес")])]}}])})],1)])])],1)}),[],!1,null,"3fd8900a",null);t.default=component.exports},278:function(e,t,r){e.exports=r.p+"img/guard_of_events.9d202d4.jpg"},279:function(e,t,r){e.exports=r.p+"img/concert_guard.f1c92ae.png"},306:function(e,t,r){"use strict";r.r(t);var _={name:"guard_of_events",components:{Tariffs:r(257).default},data:function(){return{name_page:"Охрана мероприятий",CharacteristicsOfEvents:[{paragraph:"численность присутствующих людей;"},{paragraph:"время и место проведения мероприятия;"},{paragraph:"количество контрольно-пропускных пунктов."}],DutiesGuardOfEvents:[{duty:"вооруженная/невооруженная охрана со спецсредствами;"},{duty:"осмотр и зачистка территории перед мероприятием (обследование различных углублений, ниш, мусорных урн, шкафов и ящиков, а также подарков участникам мероприятий на выявление взрывчатых средств, горючих предметов, отравляющих и наркотических веществ);"},{duty:"формирование четкого плана действий на все время мероприятия;"},{duty:"предотвращение посягательств на организаторов и посетителей мероприятия;"},{duty:"пресечение правонарушения на территории проведения мероприятия (дебош, воровство, порча имущества), а также выведение нарушителей за пределы проведения мероприятия;"},{duty:"установление контакта с правоохранительными органами и ГБР на случай непредвиденных ситуаций;"},{duty:"проверка пропусков, предусмотренных организаторами мероприятия;"},{duty:"организация видеонаблюдения и мониторинг посетителей в целях предупреждения несанкционированного проноса запрещенных предметов;"},{duty:"соблюдение правил пожарной безопасности;"},{duty:"и другие меры по желанию Клиента."}]}}},n=r(37),component=Object(n.a)(_,(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"page services types_of_guard",attrs:{id:"guard_of_events"}},[_("b-container",[_("h1",[e._v(e._s(e.name_page))]),e._v(" "),_("img",{staticClass:"first_img",attrs:{src:r(278),alt:"охрана_мероприятий"}}),e._v(" "),_("p",{staticClass:"text"},[_("span",{staticClass:"emphasized"},[e._v("Любое массовое скопление людей на мероприятиях ")]),e._v(" - это риск для безопасности участников мероприятия. Вне зависимости общественные это мероприятия, деловые или частные необходимо предоставлять защиту жизни и здоровья участникам и следить за соблюдением порядка на территории и избегать инцидентов.")]),e._v(" "),_("h6",{staticClass:"noclear"},[e._v("Уникальность и отличие мероприятий:")]),e._v(" "),_("ul",{staticClass:"text"},e._l(e.CharacteristicsOfEvents,(function(t){return _("li",{key:t.index},[e._v(e._s(t.paragraph))])})),0),e._v(" "),_("h6",[e._v("Перечень мер по охране мероприятий:")]),e._v(" "),_("img",{staticClass:"second_img",attrs:{src:r(279),alt:"охрана_концерта"}}),e._v(" "),_("ul",{staticClass:"text"},e._l(e.DutiesGuardOfEvents,(function(t){return _("li",{key:t.index},[e._v(e._s(t.duty))])})),0),e._v(" "),_("Tariffs")],1)],1)}),[],!1,null,"e9ed30b4",null);t.default=component.exports}}]);