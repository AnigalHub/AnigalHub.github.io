exports.ids = [3];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("08dc3feb", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sorting_vue_vue_type_style_index_0_id_11baf022_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sorting_vue_vue_type_style_index_0_id_11baf022_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sorting_vue_vue_type_style_index_0_id_11baf022_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sorting_vue_vue_type_style_index_0_id_11baf022_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sorting_vue_vue_type_style_index_0_id_11baf022_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dropdown[data-v-11baf022]{float:left;width:121.49px;height:36px;border:none;margin:31px 0 0 1008px;padding:10px 5px 11px 16px;font-size:12px;line-height:15px;position:relative;display:inline-block;cursor:pointer}.dropdown svg[data-v-11baf022]{margin-left:5px}.dropdown[data-v-11baf022],.dropdown-content div[data-v-11baf022]{font-family:\"Source Sans Pro\",sans-serif;box-shadow:0 2px 5px rgba(0,0,0,.1);border-radius:4px;background:#fffefb;color:#b4b4b4}.dropdown-content[data-v-11baf022]{display:none;position:absolute;background-color:#f9f9f9;top:35px;left:0;cursor:pointer;z-index:1}.dropdown-content div[data-v-11baf022]{width:121.49px;font-size:11px;line-height:15px;padding:5px 16px}.dropdown:hover .dropdown-content[data-v-11baf022]{display:block}@media screen and (min-width:350px)and (max-width:400px){.dropdown[data-v-11baf022]{margin-left:808px}}@media screen and (max-width:350px){.dropdown[data-v-11baf022]{margin-left:608px}}@media screen and (min-width:1350px)and (max-width:1500px){.dropdown[data-v-11baf022]{margin-left:800px}}@media screen and (min-width:1200px)and (max-width:1350px){.dropdown[data-v-11baf022]{margin-left:750px}}@media screen and (max-width:1200px){.dropdown[data-v-11baf022]{margin-left:580px}}@media screen and (min-width:500px)and (max-width:1005px){.dropdown[data-v-11baf022]{margin-left:250px}}@media screen and (max-width:800px){.dropdown[data-v-11baf022]{margin-left:40px}}@media screen and (max-width:500px){.dropdown[data-v-11baf022]{margin-left:0;float:right}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sorting.vue?vue&type=template&id=11baf022&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"sorting"}},[_vm._ssrNode("<div class=\"dropdown\" data-v-11baf022><span data-v-11baf022>"+_vm._ssrEscape("\n     "+_vm._s(_vm.sort)+"\n      ")+"<svg width=\"8\" height=\"6\" viewBox=\"0 0 8 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-11baf022><path d=\"M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264\" stroke=\"#B4B4B4\" data-v-11baf022></path></svg></span> <div class=\"dropdown-content\" data-v-11baf022><div data-v-11baf022>По цене min</div> <div data-v-11baf022>По цене max</div> <div data-v-11baf022>По наименованию</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sorting.vue?vue&type=template&id=11baf022&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sorting.vue?vue&type=script&lang=js&
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
/* harmony default export */ var sortingvue_type_script_lang_js_ = ({
  name: "sorting",

  data() {
    return {
      sort: "По умолчанию"
    };
  },

  methods: {
    SortByNameProducts: function () {
      this.$store.dispatch('catalogStore/SortByName');
      this.sort = "По наименова...";
    },
    SortByPriceMinProducts: function () {
      this.$store.dispatch('catalogStore/SortByPriceMin');
      this.sort = "По цене min";
    },
    SortByPriceMaxProducts: function () {
      this.$store.dispatch('catalogStore/SortByPriceMax');
      this.sort = "По цене max";
    }
  }
});
// CONCATENATED MODULE: ./components/sorting.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_sortingvue_type_script_lang_js_ = (sortingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sorting.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_sortingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "11baf022",
  "da519e0e"
  
)

/* harmony default export */ var sorting = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sorting.js.map