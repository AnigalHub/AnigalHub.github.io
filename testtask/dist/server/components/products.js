exports.ids = [2,4];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c97d321e", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/basket.vue?vue&type=template&id=a943f39e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"40","height":"40","viewBox":"0 0 40 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<g filter=\"url(#filter0_d)\" data-v-a943f39e><rect x=\"4\" y=\"2\" width=\"32\" height=\"32\" rx=\"10\" fill=\"#FF8484\" data-v-a943f39e></rect></g> <g clip-path=\"url(#clip0)\" data-v-a943f39e><path d=\"M22.207 15.7969C22 15.7969 21.8322 15.9646 21.8322 16.1716V23.2535C21.8322 23.4604 22 23.6283 22.207 23.6283C22.4139 23.6283 22.5817 23.4604 22.5817 23.2535V16.1716C22.5817 15.9646 22.4139 15.7969 22.207 15.7969Z\" fill=\"white\" data-v-a943f39e></path> <path d=\"M17.7854 15.7969C17.5785 15.7969 17.4107 15.9646 17.4107 16.1716V23.2535C17.4107 23.4604 17.5785 23.6283 17.7854 23.6283C17.9924 23.6283 18.1602 23.4604 18.1602 23.2535V16.1716C18.1602 15.9646 17.9924 15.7969 17.7854 15.7969Z\" fill=\"white\" data-v-a943f39e></path> <path d=\"M14.5629 14.7634V23.9953C14.5629 24.541 14.763 25.0534 15.1126 25.4211C15.4605 25.7898 15.9447 25.9991 16.4514 26H23.541C24.0478 25.9991 24.532 25.7898 24.8798 25.4211C25.2293 25.0534 25.4294 24.541 25.4294 23.9953V14.7634C26.1242 14.5789 26.5745 13.9077 26.4815 13.1947C26.3884 12.4819 25.7811 11.9487 25.0622 11.9485H23.1437V11.4801C23.1459 11.0863 22.9902 10.708 22.7113 10.4298C22.4325 10.1517 22.0537 9.99683 21.6598 10H18.3325C17.9387 9.99683 17.5599 10.1517 17.281 10.4298C17.0022 10.708 16.8465 11.0863 16.8487 11.4801V11.9485H14.9302C14.2112 11.9487 13.6039 12.4819 13.5108 13.1947C13.4179 13.9077 13.8681 14.5789 14.5629 14.7634ZM23.541 25.2506H16.4514C15.8107 25.2506 15.3124 24.7002 15.3124 23.9953V14.7963H24.68V23.9953C24.68 24.7002 24.1816 25.2506 23.541 25.2506ZM17.5981 11.4801C17.5956 11.285 17.6723 11.0972 17.8107 10.9595C17.9491 10.8218 18.1373 10.7461 18.3325 10.7495H21.6598C21.8551 10.7461 22.0433 10.8218 22.1816 10.9595C22.3201 11.0971 22.3968 11.285 22.3943 11.4801V11.9485H17.5981V11.4801ZM14.9302 12.6979H25.0622C25.4347 12.6979 25.7367 12.9999 25.7367 13.3724C25.7367 13.7449 25.4347 14.0469 25.0622 14.0469H14.9302C14.5577 14.0469 14.2557 13.7449 14.2557 13.3724C14.2557 12.9999 14.5577 12.6979 14.9302 12.6979Z\" fill=\"white\" data-v-a943f39e></path> <path d=\"M19.9962 15.7969C19.7892 15.7969 19.6215 15.9646 19.6215 16.1716V23.2535C19.6215 23.4604 19.7892 23.6283 19.9962 23.6283C20.2032 23.6283 20.3709 23.4604 20.3709 23.2535V16.1716C20.3709 15.9646 20.2032 15.7969 19.9962 15.7969Z\" fill=\"white\" data-v-a943f39e></path></g> "),_vm._ssrNode("<defs data-v-a943f39e>","</defs>",[_vm._ssrNode("<filter id=\"filter0_d\" x=\"0\" y=\"0\" width=\"40\" height=\"40\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\" data-v-a943f39e>","</filter>",[_c('feFlood',{attrs:{"flood-opacity":"0","result":"BackgroundImageFix"}}),_vm._ssrNode(" "),_c('feColorMatrix',{attrs:{"in":"SourceAlpha","type":"matrix","values":"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0","result":"hardAlpha"}}),_vm._ssrNode(" "),_c('feOffset',{attrs:{"dy":"2"}}),_vm._ssrNode(" "),_c('feGaussianBlur',{attrs:{"stdDeviation":"2"}}),_vm._ssrNode(" "),_c('feComposite',{attrs:{"in2":"hardAlpha","operator":"out"}}),_vm._ssrNode(" "),_c('feColorMatrix',{attrs:{"type":"matrix","values":"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}}),_vm._ssrNode(" "),_c('feBlend',{attrs:{"mode":"normal","in2":"BackgroundImageFix","result":"effect1_dropShadow"}}),_vm._ssrNode(" "),_c('feBlend',{attrs:{"mode":"normal","in":"SourceGraphic","in2":"effect1_dropShadow","result":"shape"}})],2),_vm._ssrNode(" <clipPath id=\"clip0\" data-v-a943f39e><rect width=\"16\" height=\"16\" fill=\"white\" transform=\"translate(12 10)\" data-v-a943f39e></rect></clipPath>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/svg/basket.vue?vue&type=template&id=a943f39e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/basket.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var basketvue_type_script_lang_js_ = ({
  name: "basket"
});
// CONCATENATED MODULE: ./components/svg/basket.vue?vue&type=script&lang=js&
 /* harmony default export */ var svg_basketvue_type_script_lang_js_ = (basketvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/svg/basket.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  svg_basketvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a943f39e",
  "62551dd9"
  
)

/* harmony default export */ var basket = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_id_22c192f6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_id_22c192f6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_id_22c192f6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_id_22c192f6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_id_22c192f6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#products[data-v-22c192f6]{padding-top:8px;display:flex;flex-wrap:wrap;width:1028px}#products .product[data-v-22c192f6]{background:#fffefb;box-shadow:0 20px 30px rgba(0,0,0,.04),0 6px 10px rgba(0,0,0,.02);border-radius:4px;margin-bottom:16px;width:332px;height:423px;position:relative}#products .product[data-v-22c192f6]:nth-child(3n+2){margin-left:16px;margin-right:16px}#products .product[data-v-22c192f6]:hover{cursor:pointer}#products .product:hover .basket[data-v-22c192f6]{display:block}#products .product .basket[data-v-22c192f6]{display:none;position:absolute;top:-8px;right:-8px}#products .product img[data-v-22c192f6]{width:100%;height:200px}#products .product .text_product[data-v-22c192f6]{padding:16px 16px 0}#products .product .text_product .name_product[data-v-22c192f6]{word-wrap:break-word;font-size:20px;line-height:25px;height:25px}#products .product .text_product .description_product[data-v-22c192f6]{word-wrap:break-word;overflow:auto;padding-top:16px;font-size:16px;line-height:20px;height:80px}#products .product .text_product .price_product[data-v-22c192f6]{height:30px;padding-top:32px;font-size:24px;line-height:30px}#products .product .text_product .name_product[data-v-22c192f6],#products .product .text_product .price_product[data-v-22c192f6]{font-weight:600}#products .product .text_product .description_product[data-v-22c192f6],#products .product .text_product .name_product[data-v-22c192f6],#products .product .text_product .price_product[data-v-22c192f6]{margin:0!important;color:#3f3f3f;font-family:\"Source Sans Pro\",sans-serif}@media screen and (max-width:400px){#products .product[data-v-22c192f6]{margin-left:20px;margin-right:20px}}@media screen and (min-width:350px)and (max-width:400px){#products .product[data-v-22c192f6]{width:370px}}@media screen and (max-width:350px){#products .product[data-v-22c192f6]{width:470px}}@media screen and (min-width:1350px)and (max-width:1455px){#products .product[data-v-22c192f6]{width:290px}}@media screen and (min-width:1300px)and (max-width:1350px){#products .product[data-v-22c192f6]{width:280px}}@media screen and (min-width:1200px)and (max-width:1300px){#products .product[data-v-22c192f6]{width:255px}}@media screen and (max-width:1200px){#products .product[data-v-22c192f6]{margin-left:15px;margin-right:15px;margin-bottom:20px;width:270px}}@media screen and (min-width:850px)and (max-width:1005px){#products .product[data-v-22c192f6]{width:300px}}@media screen and (max-width:800px){#products .product[data-v-22c192f6]:nth-child(odd){margin-left:50px}#products[data-v-22c192f6]{width:500px}#products .product[data-v-22c192f6]{width:200px}}@media screen and (max-width:500px){#products .product[data-v-22c192f6]{margin-left:55px!important;width:65%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/products.vue?vue&type=template&id=22c192f6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"products"}},_vm._l((_vm.Products),function(product,index){return _vm._ssrNode("<div class=\"product\" data-v-22c192f6>","</div>",[_vm._ssrNode("<div class=\"basket\" data-v-22c192f6>","</div>",[_c(_vm.basket,{tag:"component"})],1),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",product.imgSrc))+" data-v-22c192f6> <div class=\"text_product\" data-v-22c192f6><p class=\"name_product\" data-v-22c192f6>"+_vm._ssrEscape(_vm._s(product.nameProduct))+"</p> <p class=\"description_product\" data-v-22c192f6>"+_vm._ssrEscape(_vm._s(product.descriptionProduct))+"</p> <p class=\"price_product\" data-v-22c192f6>"+_vm._ssrEscape(_vm._s(_vm.numberWithSpaces(product.priceProduct))+" руб.")+"</p></div>")],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/products.vue?vue&type=template&id=22c192f6&scoped=true&

// EXTERNAL MODULE: ./components/svg/basket.vue + 4 modules
var basket = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/products.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var productsvue_type_script_lang_js_ = ({
  name: "products",

  data() {
    return {
      basket: basket["default"]
    };
  },

  computed: {
    Products: function () {
      return this.$store.getters['catalogStore/Products'];
    }
  },
  methods: {
    deleteToProducts: function (index) {
      this.$store.dispatch('catalogStore/deleteProductState', index);
    },

    numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

  }
});
// CONCATENATED MODULE: ./components/products.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_productsvue_type_script_lang_js_ = (productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/products.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22c192f6",
  "010902bf"
  
)

/* harmony default export */ var products = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=products.js.map