(function(){"use strict";var t={555:function(t,r,n){var a=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"background"},[r("div",{staticClass:"bg"},[r("Navbar"),r("Home"),r("About"),r("Preparation"),r("FormEntry"),r("Tournaments"),r("Awards"),r("Portfolio"),r("MyFooter")],1)])])},o=[],s=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"Home"}},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"2"}},[r("b-row",[r("b-col",[r("h1",[r("span",[t._v("Подчеркни рельеф своего тела!")])]),r("p",[r("span",[t._v("Профессиональный грим спортсменов на соревнованиях National Bodybuilding Community по бодибилдингу и фитнесу")])]),r("b-button",[r("a",{attrs:{href:"#FormEntry"},on:{click:t.scrollToId}},[t._v("Запись на грим")])])],1)],1)],1),r("b-col",[r("img",{attrs:{src:n(8379),alt:"Главная"}})])],1)],1)],1)},e=[];const l={data(){return{isExpanded:!1}},methods:{scrollToId(t){let r=70;if(this.isExpanded){let t=document.getElementById("Nav"),n=t.getBoundingClientRect();r=n.height}let n=document.getElementById(t.target.hash.replace("#",""));window.scrollTo({top:n.offsetTop-r,left:0,behavior:"smooth"}),t.preventDefault()}}};var c={name:"Home",mixins:[l]},i=c,p=n(3736),u=(0,p.Z)(i,s,e,!1,null,"693eb09c",null),v=u.exports,m=function(){var t=this,r=t._self._c;return r("b-navbar",{staticClass:"navbar-expand-xl sticky-top",attrs:{id:"Nav",toggleable:""}},[r("b-container",[r("b-navbar-brand",{attrs:{href:"#Home"},on:{click:t.scrollToId}},[r(t.svg,{tag:"component"}),r("div",{staticClass:"name_company"},[t._v(t._s(t.name))])],1),r("b-navbar-toggle",{attrs:{target:"navbar-toggle-collapse"},scopedSlots:t._u([{key:"default",fn:function({expanded:t}){return[r("b-icon",t?{attrs:{icon:"chevron-bar-up"}}:{attrs:{icon:"chevron-bar-down"}})]}}])}),r("b-collapse",{staticClass:"justify-content-end",attrs:{id:"navbar-toggle-collapse","is-nav":""},model:{value:t.isExpanded,callback:function(r){t.isExpanded=r},expression:"isExpanded"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#About"},on:{click:t.scrollToId}},[t._v("О нас")]),r("b-nav-item",{attrs:{href:"#Preparation"},on:{click:t.scrollToId}},[t._v("Подготовка")]),r("b-nav-item",{attrs:{href:"#FormEntry"},on:{click:t.scrollToId}},[t._v("Запись на грим")]),t.tournamentsToShow.length>0?r("b-nav-item",{attrs:{href:"#Tournaments"},on:{click:t.scrollToId}},[t._v("Турниры")]):t._e(),r("b-nav-item",{attrs:{href:"#Portfolio"},on:{click:t.scrollToId}},[t._v("Портфолио")]),r("b-nav-item",{attrs:{href:"#MyFooter"},on:{click:t.scrollToId}},[t._v("Контакты")])],1)],1)],1)],1)},_=[],f=function(){var t=this,r=t._self._c;return r("svg",{staticClass:"logo",attrs:{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{transform:"translate(0 512) scale(.1 -.1)"}},[r("path",{attrs:{d:"m2379 5116c-2-2-35-6-74-10-178-15-407-66-595-131-843-294-1487-1035-1659-1908-40-203-46-270-46-517 1-183 4-241 20-345 3-16 7-43 9-60 2-16 12-66 21-110 165-797 711-1475 1457-1811 193-87 480-170 683-198 216-30 582-29 751 3 27 5 69 12 94 16 24 4 48 8 51 11 4 2 24 6 45 10 22 3 91 22 154 41 890 269 1558 981 1764 1879 28 120 32 145 42 219 3 28 8 64 10 80 3 17 6 120 8 230 5 237-6 363-44 551-150 729-595 1344-1240 1716-242 140-535 248-795 294-22 3-49 8-60 10s-40 7-65 10-56 8-70 10c-30 6-455 16-461 10zm146-618v-423l-95 1c-106 1-322 13-360 19-14 2-52 7-85 10-82 7-135 16-135 21 0 16 77 199 120 285 132 264 286 431 450 486 117 39 105 86 105-399zm173 390c123-46 280-211 389-410 72-131 161-344 148-356-19-19-663-61-666-43-3 22-4 819 0 829 5 17 50 10 129-20zm-583-2c-140-46-328-153-475-271-79-64-227-216-298-307l-53-67-82 28c-45 16-111 42-147 58l-64 29 69 58c246 203 596 377 915 454 200 49 250 56 135 18zm1140-48c263-78 561-234 779-407 65-52 76-65 65-76-16-14-201-90-245-99-28-6-34-2-79 56-78 101-282 298-385 370-101 72-271 164-357 194-29 10-53 21-53 25 0 7 167-30 275-63zm-950 54c-6-5-23-19-40-31-154-113-318-362-425-643-22-60-38-88-49-88-16 0-244 43-286 54-5 1-45 11-87 21-43 10-78 22-78 25 0 17 105 143 188 227 204 205 444 350 692 418 101 28 96 27 85 17zm635-29c101-30 264-106 358-167 147-94 314-247 433-395 49-63 50-65 29-73-71-26-403-98-454-98-19 0-27 13-55 88-111 294-279 545-433 649-21 14-38 28-38 30 0 7 74-8 160-34zm1317-635c156-160 352-420 340-451-10-26-373-187-420-187-6 0-25 35-41 78-43 117-158 346-225 450-39 60-56 94-48 97 119 42 171 62 221 86 34 16 63 29 67 29 3 0 50-46 106-102zm-3218 62c37-16 101-41 142-56 41-14 75-27 77-29 1-1-28-51-65-111-65-106-172-322-207-416l-17-47-32 15c-18 8-50 22-72 31-69 29-167 83-238 130l-68 45 17 27c31 47 120 165 163 216 66 77 212 225 223 225 5 0 40-13 77-30zm2855-222c74-121 149-273 200-404l35-89-68-22c-66-21-350-87-421-97-19-3-68-10-108-16-41-7-75-10-76-8-2 1-17 79-35 173-32 164-74 333-106 424-8 25-12 48-8 52 5 4 53 15 108 24 55 10 165 34 245 54 102 26 148 34 157 26 6-5 41-58 77-117zm-2539 112c14-5 36-12 48-14s49-11 82-19c56-15 185-41 265-53 19-3 37-7 38-9 2-2-8-41-22-87-29-97-81-303-92-368-4-25-8-47-9-50-3-11-19-105-20-115 0-13-29-10-163 19-180 39-446 116-465 135-27 27 258 571 298 571 8 0 25-4 40-10zm610-115c28-3 68-7 90-10 75-8 249-17 450-24 20-1 20-7 20-328v-328l-100 1c-146 2-454 24-535 39-9 2-43 6-75 10-33 4-76 11-96 16l-36 9 18 98c25 141 56 269 96 410l36 123 41-5c23-3 64-8 91-11zm1306-28c6-23 17-60 24-82 18-54 60-221 79-320 38-191 41-215 25-216-23-1-81-7-134-14-27-3-79-8-115-11-36-2-85-7-110-9-25-3-142-8-260-11l-215-6 1 326c0 179 3 328 7 332 3 4 63 8 131 9 117 3 255 11 336 20 19 2 62 7 95 10 33 4 61 7 62 8s15 3 32 4c28 2 31-1 42-40zm-2675-268c129-88 410-204 654-270 117-32 339-79 440-93 98-13 137-19 152-22 9-1 48-6 85-9 37-4 79-8 93-10s68-7 120-10c52-4 118-8 145-11 76-5 570-5 660 0 178 12 251 17 275 21 14 2 57 7 95 10 39 3 97 10 130 15s78 12 100 15 51 8 65 11c14 2 39 7 55 10 307 54 605 144 824 250 74 35 138 61 142 57 16-18 70-125 112-223 98-227 160-459 185-690 9-87 8-448-1-534-19-170-72-386-135-556-41-109-120-281-145-315-15-19-15-19-54 7-160 106-480 225-783 293-63 14-125 28-137 30-18 4-23 1-23-14 0-19 6-21 100-37 93-17 390-100 390-110 0-14-77-208-116-291-53-115-180-332-198-339-7-3-53 6-102 20-49 13-161 39-249 57-88 17-161 33-163 34-2 2 8 42 23 89 14 47 28 95 30 107 2 11 7 29 10 39s8 27 10 37 8 38 14 63c15 64 14 80-6 80-15 0-25-28-55-153-21-83-44-176-53-205l-16-54-52 6c-47 5-76 8-187 21-56 6-298 18-382 19-61 0-77 3-80 15-2 9-3 91-3 184 1 162 0 167-20 167s-20-5-20-175c0-97-2-179-5-183s-32-8-65-8c-86-1-333-14-380-19-22-3-60-7-85-10-25-2-73-7-107-11-35-3-63-4-63-1s-15 61-34 129c-19 67-42 158-51 200-10 45-23 79-31 82-24 9-26-17-9-90 9-38 18-78 21-89 2-11 17-69 34-129s29-110 27-112-61-15-133-29c-108-22-269-60-336-81-21-6-80 82-166 247-60 115-152 333-152 361 0 10 32 24 103 46 98 29 224 64 277 76 17 3 26 12 26 25 0 23 8 23-131-11-258-63-589-195-732-292-20-14-40-22-44-18-15 17-72 131-113 225-70 160-142 398-161 532-3 23-8 52-10 65-20 104-28 474-13 611 29 251 106 527 209 744 63 133 130 246 142 238 7-3 31-19 53-34zm3737-2253c104-45 197-92 254-131l33-22-56-89c-51-81-142-203-209-279-49-56-178-185-186-185-4 0-45 17-91 39-45 21-105 46-133 55-82 27-82 23-19 122 81 128 201 385 248 528 8 23 24 19 159-38zm-3349-68c46-121 134-300 205-416 28-46 51-86 51-90s-35-20-78-35c-42-16-108-43-147-62l-70-33-91 91c-50 51-120 128-155 172-60 75-179 246-179 257 0 6 100 71 174 113 61 36 216 104 236 104 10 1 28-33 54-101zm1534-386c4-6 7-201 7-434v-423l-42 3c-168 11-368 208-517 508-51 103-131 302-124 309 3 3 120 17 248 29 25 3 110 8 190 12 80 3 146 7 147 8 8 7 86-3 91-12zm312 4c80-4 156-8 170-11 14-2 54-6 90-10 98-8 160-17 160-23 0-12-51-144-88-227-68-154-151-291-235-389-96-111-232-194-326-199l-35-2v430c-1 479-7 443 73 439 25-1 111-5 191-8zm-1005-123c72-201 195-427 298-548 46-54 112-115 172-159 18-13 16-14-25-5-202 45-464 180-630 326-136 120-328 339-311 356 15 15 347 92 457 106 6 0 24-34 39-76zm1650 46c104-19 138-28 270-64l56-16-55-70c-186-239-416-422-669-531-92-40-269-92-289-86-6 2 7 16 28 30 124 84 257 259 359 473 41 86 93 216 107 263 11 38-2 38 193 1zm-2168-131c109-151 277-317 433-429 86-61 241-145 335-180 86-32 54-34-70-4-262 63-486 158-724 307-93 58-301 215-301 227 0 8 37 25 145 67 50 20 99 39 110 44 34 14 41 11 72-32zm2756-46c37-17 67-35 67-39 0-5-23-27-52-48-28-22-56-44-62-50-23-23-175-124-256-172-217-127-432-211-690-269-137-31-142-30-39 10 120 46 340 166 379 206 3 3 35 29 71 57 81 64 236 224 308 319l54 71 76-27c42-15 106-41 144-58z"}}),r("path",{attrs:{d:"m669 3409c-4-42-5-216-1-230 2-9 14-22 27-29 47-25 50-47 50-485 1-225-2-428-6-450-5-27-18-49-40-69l-34-30v-115c-1-64 0-119 2-123s27 1 56 11c28 10 136 39 238 66l186 47v105 104l-29 6c-16 3-34 15-40 27-15 28-18 431-2 413 5-7 49-78 97-158 101-169 281-435 294-433 4 1 28 5 53 8s56 8 70 10c14 3 64 10 111 16l85 12v425l1 426 22 19c13 10 32 18 42 18 17 0 19 8 19 84 0 97 6 91-103 101-37 3-76 8-85 10-9 1-37 6-62 9s-56 8-70 11c-44 8-155 25-162 25-4 0-8-42-10-94l-3-95 33-15c18-9 37-28 42-42 6-15 9-100 8-196l-3-169-76 123c-90 145-174 291-254 443-32 61-59 111-60 113-2 2-173 49-246 66-26 7-113 34-131 41-12 5-18 2-19-6z"}}),r("path",{attrs:{d:"m3935 3326c-254-54-412-122-494-212-77-84-79-95-77-474 2-378 4-387 81-465 115-114 412-220 612-217 150 2 253 81 300 230 15 48 27 288 15 296-4 2-63 7-132 11-69 3-139 8-156 10l-32 4-4-92c-5-103-22-149-66-170-50-25-163-6-211 37-49 43-53 70-53 346 0 141 4 274 8 295 9 50 67 108 121 122 22 6 62 9 88 8 40-2 53-7 77-34 15-17 29-41 30-54 0-12 2-26 3-32 2-5 3-22 4-37 1-25 4-27 34-23 17 2 68 7 112 11s91 8 105 9c14 2 37 3 51 4l27 1-3 98c-3 107-22 177-63 232-35 46-48 57-107 85-75 36-141 39-270 11z"}}),r("path",{attrs:{d:"m2049 3142c-1-28-1-126 0-138 1-6 15-17 31-24 17-7 35-21 40-31 13-23 13-570 1-602-6-14-23-29-40-35s-31-15-32-19c-1-13-1-116 0-141 1-13 4-21 9-19 18 12 352 20 687 18 220-2 261 2 332 34 87 39 131 123 125 240-5 104-69 181-176 214l-60 18 52 17c64 22 129 79 147 131s13 151-9 193c-43 82-134 129-269 137-45 3-237 7-427 10-190 2-360 6-377 9-26 4-33 2-34-12zm730-220c32-24 46-68 32-104-18-47-62-62-198-66l-123-4v101 100l78 3c104 4 180-7 211-30zm-2-365c85-45 87-157 5-197-17-9-76-15-159-18l-133-4v122 122l128-4c94-3 135-9 159-21z"}}),r("path",{attrs:{d:"m2351 1925c-40-13-61-39-61-76 0-36 19-50 109-79 60-20 76-29 76-44 0-27-47-39-74-19-12 8-19 18-16 23 7 11-24 16-65 10-36-5-36-6-31-64 1-18 81-38 153-37 102 0 158 49 135 118-7 18-57 50-91 57-6 2-28 6-49 11-63 13-60 54 5 55 17 0 29-6 33-19 6-19 41-29 83-23 18 3 22 10 22 37 0 33-2 35-54 50-60 18-124 18-175 0z"}}),r("path",{attrs:{d:"m2704 1928c-48-10-76-37-76-73 0-37 26-60 90-79 85-26 102-34 102-51 0-18-38-35-60-27-8 3-22 13-30 24-14 17-43 23-91 19-11-1-16-11-16-35 0-28 5-37 26-46 38-15 69-20 133-21 86-1 138 32 138 88 0 40-28 60-121 88-62 19-83 40-58 56 26 16 79-2 79-27 0-10 13-14 51-14h50l-3 32c-2 27-10 36-40 50-44 21-117 27-174 16z"}}),r("path",{attrs:{d:"m2138 1922c-30-4-38-28-16-50 14-14 19-129 7-154-12-22-44-31-68-19-16 9-19 21-19 83 0 48 6 80 16 96 12 19 13 25 2 32-7 4-20 6-29 5-9-2-35-4-59-4-35-1-44-5-51-23-6-17-5-24 5-26 11-3 14-24 14-86 0-75 2-85 25-106 34-32 154-41 208-15 44 21 54 48 51 140-2 49 2 72 11 80 8 5 13 19 11 30-3 20-35 25-108 17z"}}),r("path",{attrs:{d:"m2970 1894c0-13 5-24 10-24 6 0 10-37 10-90s-4-90-10-90c-5 0-10-11-10-24 0-23 2-24 74-24 69 1 74 2 70 21-2 11-8 25-14 31-16 16-13 147 5 166 25 28 8 50-39 51-22 0-53 2-68 4-24 3-28 0-28-21z"}}),r("path",{attrs:{d:"m1680 1878c-105-15-120-19-120-33 0-7 5-15 11-17 15-5 20-138 5-144-6-2-12-13-13-24-2-18 4-20 73-18 79 2 91 12 59 48-30 33-3 55 52 44 18-3 22-12 25-46 3-39 5-42 37-46 68-7 86 6 67 50-4 9-9 25-10 35-2 10-13 23-26 29-22 12-22 12-1 19 30 9 43 38 31 69-17 46-57 53-190 34zm94-54c8-22-24-45-57-42-21 2-31 9-33 23-2 11 2 22 7 26 18 11 78 6 83-7z"}}),r("path",{attrs:{d:"m3223 1863c-6-15-21-57-34-93-12-36-27-72-34-80-25-33-13-45 52-48 67-3 85 8 59 37-21 23-12 31 35 31 42 0 56-12 34-30-30-25-6-40 64-40 37 0 71 3 74 6 3 4-4 25-17 48-13 22-34 71-47 108-12 38-30 70-38 73-9 2-43 7-77 11-60 6-61 5-71-23zm94-83c12-31 4-41-29-32-13 3-15 9-6 33 13 37 21 37 35-1z"}})])])},d=[],b={name:"logo_svg"},h=b,g=(0,p.Z)(h,f,d,!1,null,"8e30df76",null),y=g.exports,x=JSON.parse('{"Fe":"#polyakovsteam","zC":[{"src":"./tournaments/1.jpg","date":"5 ноября 2023","name":"GRAND PRIX NBC 9","city":"Москва","address":"Орджоникидзе, д. 11 стр. 1. BASE","link":"https://nbcpro.ru/events/grand-prix-nbc-9/"}],"_Y":[{"src":"./portfolio/21.jpg","alt":"GRAND_PRIX_NBC_8","link":"https://nbcpro.ru/events/grand-prix-nbc-8/"},{"src":"./portfolio/20.jpg","alt":"ГРАН-ПРИ_ЛЮБЕР-2023","link":"https://nbcpro.ru/events/gran-pri-lyuber-2023/"},{"src":"./portfolio/19.jpg","alt":"CLASSIC_BATTLE","link":"https://nbcpro.ru/events/classic-battle/"},{"src":"./portfolio/18.jpg","alt":"MUSCLE_BATTLE_2_КАСТИНГ","link":"https://nbcpro.ru/events/muscle-battle-2-kasting/"},{"src":"./portfolio/17.jpg","alt":"ПРОКАЧ_ШОУ","link":"https://nbcpro.ru/events/prokach-shou-semki-19-marta/"},{"src":"./portfolio/16.jpg","alt":"GRAND_PRIX_NBC_7","link":"https://nbcpro.ru/events/grand-prix-nbc-7/"},{"src":"./portfolio/15.jpg","alt":"GRAND_PRIX_MOSCOW","link":"https://nbcpro.ru/events/grand-prix-moscow/"},{"src":"./portfolio/14.jpg","alt":"MUSCLE_BATTLE_КАСТИНГ","link":"https://nbcpro.ru/events/muscle-battle-kasting/"},{"src":"./portfolio/13.jpg","alt":"GRAND_PRIX_NBC_6","link":"https://nbcpro.ru/events/grand-prix-nbc-6/"},{"src":"./portfolio/12.jpg","alt":"Гран-При_Евпатия_3","link":"https://nbcpro.ru/events/gran-pri-evpatiya-kolovrata-i-avdoti-ryazanochki-30-04-22/"},{"src":"./portfolio/11.jpg","alt":"GRAND_PRIX_NBC_5","link":"https://nbcpro.ru/events/grand-prix-nbc-5/"},{"src":"./portfolio/10.jpg","alt":"Grand_Prix_Golden_Ring","link":"https://nbcpro.ru/events/grand-prix-golden-ring-13-11-2021/"},{"src":"./portfolio/9.jpg","alt":"GRAND_PRIX_SN_PRO","link":"https://nbcpro.ru/events/grand-prix-sn-pro/"},{"src":"./portfolio/8.jpg","alt":"GRAND_PRIX_NBC_4","link":"https://nbcpro.ru/events/grand-prix-nbc-4/"},{"src":"./portfolio/7.jpg","alt":"Гран-При_Евпатия_2","link":"https://nbcpro.ru/events/gran-pri-evpatiya-kolovrata-i-avdoti-ryazanochki-15-05-21/"},{"src":"./portfolio/6.jpg","alt":"Grand_Prix_Russia_3","link":"https://nbcpro.ru/events/grand-prix-russia-3-5-12-2020/"},{"src":"./portfolio/5.jpg","alt":"Grand_Prix_TULA","link":"https://nbcpro.ru/events/grand-prix-tula/"},{"src":"./portfolio/4.jpg","alt":"Grand_Prix_Russia_2","link":"https://nbcpro.ru/events/grand-prix-russia-2/"},{"src":"./portfolio/3.jpg","alt":"Grand_Prix_KremLin","link":"https://nbcpro.ru/events/grand-prix-kremlin/"},{"src":"./portfolio/2.jpg","alt":"Grand_Prix_Russia","link":"https://nbcpro.ru/events/grand-prix-russia/"},{"src":"./portfolio/1.jpg","alt":"Гран-При_Евпатия","link":"https://nbcpro.ru/events/gran-pri-evpatiya-kolovrata-i-avdoti-ryazanochki/"}],"X5":"polyakovsteam@mail.ru","m7":"+7(968)-824-80-96","CR":"polyakovs_team","Ku":"https://instagram.com/polyakovs_team?igshid=YmMyMTA2M2Y="}');n(7658);const k={data(){return{today:new Date,Tournaments:x.zC}},computed:{tournamentsToShow(){let t=[];return this.Tournaments.forEach((r=>{let n=r.date.split(" "),a=n[0],o=n[2],s=this.SearchForTheNumberOfTheMonth(n[1]);const e=new Date(Number(o),s,Number(a));let l=this.today-e;const c=864e5;l<c&&t.push(r)})),t}},methods:{SearchForTheNumberOfTheMonth:function(t){const r={"января":0,"февраля":1,"марта":2,"апреля":3,"мая":4,"июня":5,"июля":6,"августа":7,"сентября":8,"октября":9,"ноября":10,"декабря":11};return r[t]}}};var w={name:"navbar",mixins:[l,k],data(){return{svg:y,name:x.Fe}}},C=w,z=(0,p.Z)(C,m,_,!1,null,"11b69066",null),T=z.exports,P=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"About"}},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("img",{attrs:{src:n(9010),alt:"О нас"}})]),r("b-col",[r("h2",[t._v("О нас")]),r("p",[r("span",[t._v(t._s(t.name))]),t._v(" - официальная команда гримеров на всех турнирах федерации National Bodybuilding Community"),r("span",[t._v(".")])]),r("p",[r("span",[t._v("Н")]),t._v("а соревнованиях по бодибилдингу и фитнесу мы организовываем нанесение грима"),r("span",[t._v(".")]),t._v(" В услугу гримирования входит"),r("span",[t._v(":")])]),r("ul",{staticClass:"n1"},[r("li",[t._v("нанесение двух слоев грима"),r("span",[t._v(";")])]),r("li",[t._v("нанесение масла (по желанию)"),r("span",[t._v(";")])]),r("li",[t._v("корректировка во время выступления"),r("span",[t._v(";")])]),r("li",[t._v("одноразовый комплект одежды для покраски"),r("span",[t._v(".")])])]),r("p",[r("span",[t._v("Н")]),t._v("аша команда знает все об основных техниках гримирования"),r("span",[t._v(",")]),t._v(" а также проводит межсезонные мероприятия для особого уровня подготовки"),r("span",[t._v(".")])]),r("p",[r("span",[t._v("В")]),t._v(" своей работе мы используем самые лучшие средства известных брендов"),r("span",[t._v(":")])]),r("b-row",{staticClass:"flex-container"},t._l(t.Products,(function(t,n){return r("div",{key:n},[r("img",{attrs:{src:t.src,alt:t.alt}})])})),0),r("p",[r("span",[t._v("Н")]),t._v("аш грим обладает универсальной адаптирующей системой "),r("span",[t._v("-")]),t._v(" применяется для любого типа кожи"),r("span",[t._v(".")])]),r("p",[r("span",[t._v("Г")]),t._v("рим не течет"),r("span",[t._v(",")]),t._v(" быстро сохнет"),r("span",[t._v(",")]),t._v(" не пачкает дорогостоящие костюмы спортсменов и придает коже приятный оттенок естественного загара"),r("span",[t._v(".")])])],1)],1)],1)],1)},E=[],j={name:"About",data(){return{name:x.Fe,Products:[{src:"./componentsImg/fitnessFormula.png",alt:"fitnessFormula"},{src:"./componentsImg/jantana.png",alt:"jantana"}]}}},N=j,R=(0,p.Z)(N,P,E,!1,null,"748348ae",null),A=R.exports,B=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"FormEntry"}},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("img",{attrs:{src:n(5179),alt:"Запись на грим"}}),r("div",{staticClass:"imgBg"})]),r("b-col",[r("form",[r("h2",[t._v("Запись на грим")]),r("b-form-input",{attrs:{autocomplete:"off",type:"text",placeholder:"Введите ваше имя"},model:{value:t.formEntry.name,callback:function(r){t.$set(t.formEntry,"name",r)},expression:"formEntry.name"}}),r("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"+7 (###) ###-##-##",expression:"'+7 (###) ###-##-##'"}],attrs:{autocomplete:"off",type:"tel",placeholder:"Введите ваш телефон"},model:{value:t.formEntry.phone,callback:function(r){t.$set(t.formEntry,"phone",r)},expression:"formEntry.phone"}}),t.tournamentsToShow.length>0?r("b-form-select",{attrs:{options:t.Tournaments,"value-field":"id","text-field":"name"},scopedSlots:t._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("Выберите турнир")])]},proxy:!0}],null,!1,249630094),model:{value:t.formEntry.tournament,callback:function(r){t.$set(t.formEntry,"tournament",r)},expression:"formEntry.tournament"}}):t._e(),r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Опишите свои пожелания гримеру"},model:{value:t.formEntry.descr,callback:function(r){t.$set(t.formEntry,"descr",r)},expression:"formEntry.descr"}}),r("button",[t._v("Записаться")])],1),r("p",{staticClass:"aboutMoney"},[t._v("Предварительная стоимость:"),r("span",{staticClass:"money"},[t._v(" 3000 руб.")])]),r("hr"),r("p",{staticClass:"desc"},[r("span",[t._v("Н")]),t._v("апоминаем, что на грим надо записываться уже сейчас"),r("span",[t._v("!")]),r("br"),t._v(" Не подводите себя и других спортсменов"),r("span",[t._v(",")]),t._v(" не оставляйте на последний день"),r("span",[t._v("!")])]),r("hr")])],1)],1)],1)},S=[],I={name:"FormEntry",mixins:[k],data(){return{formEntry:{name:"",phone:"",descr:"",tournament:null},Tournaments:x.zC}}},F=I,O=(0,p.Z)(F,B,S,!1,null,"7bcc45f9",null),M=O.exports,G=function(){var t=this,r=t._self._c;return t.tournamentsToShow.length>0?r("div",{attrs:{id:"Tournaments"}},[r("b-container",[r("h2",[t._v("Ближайшие турниры федерации NBC")]),r("div",{staticClass:"flex-container"},t._l(t.tournamentsToShow,(function(n){return r("div",{staticClass:"tournament"},[r("p",{staticClass:"name_tournament"},[t._v(t._s(n.name))]),r("b-row",[r("b-col",{attrs:{cols:"5"}},[r("img",{attrs:{src:n.src,alt:n.name}})]),r("b-col",[r("div",[r("p",{staticClass:"date"},[t._v(t._s(n.date))]),r("hr"),r("p",[t._v(t._s(n.city))]),r("hr"),r("p",{staticClass:"address"},[t._v(t._s(n.address))]),r("b-button",[r("a",{attrs:{href:n.link,target:"_blank"}},[t._v("Узнать подробнее")])])],1)])],1)],1)})),0)])],1):t._e()},Z=[],X={name:"Tournaments",mixins:[k]},D=X,L=(0,p.Z)(D,G,Z,!1,null,"1def448b",null),H=L.exports,$=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"Portfolio"}},[r("b-container",[r("h2",[t._v("Портфолио")]),r("div",{staticClass:"flex-container"},t._l(t.Portfolio,(function(t,n){return r("a",{key:n,attrs:{href:t.link,target:"_blank"}},[r("img",{attrs:{src:t.src,alt:t.alt}})])})),0)])],1)},Y=[],K={name:"Portfolio",data(){return{Portfolio:x._Y}}},U=K,J=(0,p.Z)(U,$,Y,!1,null,"f2b3abc2",null),W=J.exports,q=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"MyFooter"}},[r("b-container",[r("div",{staticClass:"flex-container"},t._l(t.ContactsRow,(function(n){return r("div",{key:n.text},[r("a",{attrs:{href:n.href,target:n.target}},[r(n.svg,{tag:"component"}),r("p",[t._v(t._s(n.http))])],1)])})),0)])],1)},Q=[],V=function(){var t=this,r=t._self._c;return r("svg",{attrs:{viewBox:"-4 -4 34 34",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"}})])},tt=[],rt={name:"instagram_svg"},nt=rt,at=(0,p.Z)(nt,V,tt,!1,null,"f1e51f98",null),ot=at.exports,st=function(){var t=this,r=t._self._c;return r("svg",{attrs:{viewBox:"0 0 473.65 473.65",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"svg_color",attrs:{d:"m363.64 292.42c-18.324-17.625-36.876-28.712-59.081-12.285-22.336 16.529-24.7 34.875-24.7 34.875s2.098 35.167-82.671-41.068c-76.287-84.806-41.098-82.708-41.098-82.708s18.339-2.363 34.868-24.7c16.428-22.202 4.835-40.275-12.284-59.085-54.777-60.185-87.981 8.208-87.981 8.208-38.783 65.274 25.863 142.85 75.734 189.06 46.225 49.871 123.76 114.46 189.01 75.681-4e-3 2e-3 69.249-29.246 8.204-87.983z"}}),r("path",{staticClass:"svg_color",attrs:{d:"m121.04 85.419c-0.045 0.015-0.067 0.052-0.108 0.071 0.49-0.206 0.995-0.389 1.488-0.572-0.46 0.165-0.927 0.318-1.38 0.501z"}})])},et=[],lt={name:"telephone_svg"},ct=lt,it=(0,p.Z)(ct,st,et,!1,null,"538e801a",null),pt=it.exports,ut=function(){var t=this,r=t._self._c;return r("svg",{attrs:{viewBox:"50 80 400 400",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"svg_color",attrs:{d:"m317.54 379.9c-22.128 11.664-44.656 16.096-71.6 16.096-65.984 0-121.89-48.272-121.89-125.52 0-82.864 57.52-154.48 146.83-154.48 70 0 117.07 49.088 117.07 116.27 0 60.336-33.792 95.744-71.616 95.744-16.096 0-30.976-10.864-29.776-35.408h-1.6c-14.08 23.744-32.592 35.408-56.736 35.408-23.328 0-43.44-18.912-43.44-50.688 0-49.888 39.424-95.344 95.344-95.344 17.296 0 32.592 3.616 43.056 8.448l-13.68 72.816c-6.032 30.576-1.216 44.656 12.064 45.056 20.528 0.4 43.456-26.944 43.456-73.616 0-58.336-34.992-100.18-97.36-100.18-65.584 0-120.69 51.904-120.69 133.57 0 67.184 43.84 108.62 103.38 108.62 22.928 0 44.256-4.816 60.752-14.08l6.432 17.28zm-22.112-173.79c-4.016-1.216-10.864-2.816-20.112-2.816-35.408 0-63.968 33.392-63.968 72.416 0 17.712 8.848 30.576 26.544 30.576 23.328 0 44.656-29.776 49.088-54.72l8.448-45.456z"}})])},vt=[],mt={name:"email_svg"},_t=mt,ft=(0,p.Z)(_t,ut,vt,!1,null,"41781d83",null),dt=ft.exports,bt={name:"MyFooter",data(){return{ContactsRow:[{svg:pt,href:"tel:"+x.m7,target:"_self",http:x.m7},{svg:dt,href:"mailto:"+x.X5,target:"_self",http:x.X5},{svg:ot,href:x.Ku,target:"_blank",http:x.CR}]}}},ht=bt,gt=(0,p.Z)(ht,q,Q,!1,null,"1f24c6e8",null),yt=gt.exports,xt=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"Awards"}},[r("b-container",[r("h2",[t._v("Награды и благодарности команды")]),r("b-row",[r("b-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:n(1703),alt:"Награды"}})]),r("b-col",[r("p",{staticClass:"awards"},[t._v("Выражаем благодарность команде гримеров "),r("span",[t._v("#polyakovsteam")]),t._v(" за профессиональную работу, вклад в организацию турниров и развитие National Bodybuilding Community.")]),r("br"),r("p",{staticClass:"author"},[t._v("Федерация National Bodybuilding Community.")])])],1)],1)],1)},kt=[],wt={name:"Awards"},Ct=wt,zt=(0,p.Z)(Ct,xt,kt,!1,null,"64aa20c4",null),Tt=zt.exports,Pt=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"Preparation"}},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("p",[r("span",[t._v("П")]),t._v("од яркими софитами грим выделяет всю мускулатуру"),r("span",[t._v(",")]),t._v(" подчеркивает мельчайшие мышцы спортсмена"),r("span",[t._v(".")])]),r("p",[r("span",[t._v("Б")]),t._v("лагодаря гриму спортсмен демонстрирует судьям всю красоту своего тела"),r("span",[t._v(".")])]),r("br"),r("p",[r("span",[t._v("С")]),t._v("портсмену необходимо подготовить кожу заранее"),r("span",[t._v(".")])]),r("p",[r("span",[t._v("П")]),t._v("ри правильной подготовке краска ляжет равномерно и будет замечательно смотреться после высыхания"),r("span",[t._v(".")])]),r("p",[r("span",[t._v("Ч")]),t._v("тобы грим лег ровно и красиво необходимо соблюдать ряд простых правил"),r("span",[t._v(".")])])]),r("b-col",{attrs:{cols:"4"}},[r("img",{attrs:{src:n(7773),alt:"Подготовка"}})]),r("b-col",[r("h2",[t._v("Этапы подготовки кожи к гриму")]),r("ol",t._l(t.Preparation,(function(n,a){return r("li",{key:a},[t._v(t._s(n))])})),0)])],1)],1)],1)},Et=[],jt={name:"Preparation",data(){return{Preparation:["За 1-2 дня до соревнований следует удалить волосы со всего тела: от шеи до пяток.","Необходимо отскрабировать кожу, желательно несколько процедур в течение недели.","За 1 сутки до соревнований надо перестать пользоваться любыми маслянистыми средствами.","Утром в день соревнований нужно принять душ с обычным мылом и обязательно хорошо смыть его с кожи."]}}},Nt=jt,Rt=(0,p.Z)(Nt,Pt,Et,!1,null,"314e0f24",null),At=Rt.exports,Bt={name:"App",components:{Preparation:At,MyFooter:yt,Portfolio:W,Tournaments:H,FormEntry:M,About:A,Awards:Tt,Navbar:T,Home:v}},St=Bt,It=(0,p.Z)(St,a,o,!1,null,null,null),Ft=It.exports,Ot=n(144),Mt=n(9278),Gt=n(5069),Zt=n(3017);n(7024);Ot["default"].use(Mt.ZP),Ot["default"].use(Gt.XG7),Ot["default"].use(Zt.X),Ot["default"].config.productionTip=!1,new Ot["default"]({render:t=>t(Ft)}).$mount("#app")},1703:function(t,r,n){t.exports=n.p+"img/awards.54b36ec2.png"},9010:function(t,r,n){t.exports=n.p+"img/about.69321ee5.png"},5179:function(t,r,n){t.exports=n.p+"img/formEntry.b2de77b7.png"},8379:function(t,r,n){t.exports=n.p+"img/home.8e699b5f.png"},7773:function(t,r,n){t.exports=n.p+"img/preparation.b64aa478.png"}},r={};function n(a){var o=r[a];if(void 0!==o)return o.exports;var s=r[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(r,a,o,s){if(!a){var e=1/0;for(p=0;p<t.length;p++){a=t[p][0],o=t[p][1],s=t[p][2];for(var l=!0,c=0;c<a.length;c++)(!1&s||e>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(l=!1,s<e&&(e=s));if(l){t.splice(p--,1);var i=o();void 0!==i&&(r=i)}}return r}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[a,o,s]}}(),function(){n.d=function(t,r){for(var a in r)n.o(r,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/greasepaint/"}(),function(){var t={143:0};n.O.j=function(r){return 0===t[r]};var r=function(r,a){var o,s,e=a[0],l=a[1],c=a[2],i=0;if(e.some((function(r){return 0!==t[r]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var p=c(n)}for(r&&r(a);i<e.length;i++)s=e[i],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(p)},a=self["webpackChunkgreasepaint"]=self["webpackChunkgreasepaint"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(555)}));a=n.O(a)})();
//# sourceMappingURL=app.cc0837d6.js.map