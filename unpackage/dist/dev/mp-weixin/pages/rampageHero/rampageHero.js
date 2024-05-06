(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/rampageHero/rampageHero"],{

/***/ 167:
/*!****************************************************************************************************************!*\
  !*** /Users/taojiajie/Documents/code/hbuild/uni-game-tjj/main.js?{"page":"pages%2FrampageHero%2FrampageHero"} ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _rampageHero = _interopRequireDefault(__webpack_require__(/*! ./pages/rampageHero/rampageHero.vue */ 168));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_rampageHero.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 168:
/*!*********************************************************************************************!*\
  !*** /Users/taojiajie/Documents/code/hbuild/uni-game-tjj/pages/rampageHero/rampageHero.vue ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rampageHero_vue_vue_type_template_id_a617e2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rampageHero.vue?vue&type=template&id=a617e2d4&scoped=true& */ 169);
/* harmony import */ var _rampageHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rampageHero.vue?vue&type=script&lang=js& */ 171);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _rampageHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _rampageHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _rampageHero_vue_vue_type_style_index_0_id_a617e2d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rampageHero.vue?vue&type=style&index=0&id=a617e2d4&lang=scss&scoped=true& */ 176);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _rampageHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _rampageHero_vue_vue_type_template_id_a617e2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _rampageHero_vue_vue_type_template_id_a617e2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a617e2d4",
  null,
  false,
  _rampageHero_vue_vue_type_template_id_a617e2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/rampageHero/rampageHero.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 169:
/*!****************************************************************************************************************************************!*\
  !*** /Users/taojiajie/Documents/code/hbuild/uni-game-tjj/pages/rampageHero/rampageHero.vue?vue&type=template&id=a617e2d4&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_template_id_a617e2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./rampageHero.vue?vue&type=template&id=a617e2d4&scoped=true& */ 170);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_template_id_a617e2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_template_id_a617e2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_template_id_a617e2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_template_id_a617e2d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 170:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/taojiajie/Documents/code/hbuild/uni-game-tjj/pages/rampageHero/rampageHero.vue?vue&type=template&id=a617e2d4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uOverlay: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-overlay/u-overlay */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-overlay/u-overlay")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-overlay/u-overlay.vue */ 188))
    },
    uButton: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-button/u-button.vue */ 178))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.heroObj.attackSpeed.toFixed(1)
  if (!_vm._isMounted) {
    _vm.e0 = function () {
      _vm.pauseOrRun = false
    }
    _vm.e1 = function () {
      _vm.pauseOrRun = true
    }
    _vm.e2 = function ($event) {
      $event.stopPropagation()
      return (function (e) {
        e.preventDefault()
        _vm.touchEvent(e.changedTouches[0].x, e.changedTouches[0].y)
      })($event)
    }
    _vm.e3 = function ($event) {
      $event.stopPropagation()
      return (function (e) {
        e.preventDefault()
        _vm.touchEvent(e.changedTouches[0].x, e.changedTouches[0].y)
      })($event)
    }
    _vm.e4 = function ($event) {
      $event.stopPropagation()
      return (function (e) {
        e.preventDefault()
        _vm.touchend()
      })($event)
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 171:
/*!**********************************************************************************************************************!*\
  !*** /Users/taojiajie/Documents/code/hbuild/uni-game-tjj/pages/rampageHero/rampageHero.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./rampageHero.vue?vue&type=script&lang=js& */ 172);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 172:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/taojiajie/Documents/code/hbuild/uni-game-tjj/pages/rampageHero/rampageHero.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _methods = __webpack_require__(/*! @/utils/methods.js */ 173);
var _methods2 = __webpack_require__(/*! ./methods.js */ 174);
var _bg = __webpack_require__(/*! ../../static/backImages/bg.js */ 175);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    var _ref;
    return _ref = {
      imageURL: _bg.bg1,
      isPortrait: false,
      // 是否横屏
      windowWidth: 750,
      windowHeight: 750,
      totalWid: 75,
      pauseOrRun: true,
      // 暂停或者运行
      timer: 0,
      // 3秒倒计时
      clock: 0,
      // 渲染周期
      ctx: 0,
      // 画布

      gameOverOverlay: false,
      // 游戏结束遮罩
      showOverlay: true,
      // 游戏开始遮罩
      stopText: -1,
      //开始倒计时文案

      // 杀敌数量
      killCount: 0,
      // 人物属性
      heroObj: {
        url: '/static/hero/hero2.png',
        rate: 0,
        // 旋转度数
        x: 0,
        y: 0,
        w: 10,
        h: 10,
        speed: 4,
        // 英雄移动速度
        attackSpeed: 1,
        // 攻速
        attackLength: 1,
        // 攻击距离
        bloodPercent: 100,
        // 当前血条
        totalblood: 100,
        // 总血条
        lucky: 1,
        // 幸运值
        arms: 3 // 武器数量
      },

      // 怪物属性
      monster: [],
      // 武器属性
      arms: [{
        url: '/static/arms/arms1.png',
        hUrl: '/static/photon/p1.png',
        time: 60,
        type: 1
      }, {
        url: '/static/arms/arms2.png',
        hUrl: '/static/photon/p1.png',
        time: 50,
        type: 1
      }, {
        url: '/static/arms/arms3.png',
        hUrl: '/static/photon/p1.png',
        time: 40,
        type: 1
      }, {
        url: '/static/arms/arms4.png',
        hUrl: '/static/photon/p1.png',
        time: 30,
        type: 1
      }, {
        url: '/static/arms/arms5.png',
        hUrl: '/static/photon/p1.png',
        time: 20,
        type: 1
      }, {
        url: '/static/arms/arms6.png',
        hUrl: '/static/photon/p1.png',
        time: 10,
        type: 1
      }],
      // 子弹列表
      hList: [],
      // {x,y,w,h,speed,toX,toY}
      bloodPack: [],
      // 回血包列表
      attackSpeedList: [],
      // 攻速包列表
      innerAudioContextHeart: 0,
      // 血条低于25时的心动声音

      // 键盘属性(控制人物移动方向)
      top: 0,
      // 上下
      bottom: 0,
      // 上下
      left: 0
    }, (0, _defineProperty2.default)(_ref, "top", 0), (0, _defineProperty2.default)(_ref, "keyControl", 0), (0, _defineProperty2.default)(_ref, "handleCenterX", 0), (0, _defineProperty2.default)(_ref, "handleCenterY", 0), (0, _defineProperty2.default)(_ref, "touchX", 0), (0, _defineProperty2.default)(_ref, "touchY", 0), _ref;
  },
  watch: {
    // 监听暂停或者开始
    pauseOrRun: function pauseOrRun(newValue, oldValue) {
      this.pauseOrRunFunc(newValue);
    },
    // 监听血条
    'heroObj.bloodPercent': function heroObjBloodPercent(newValue, oldValue) {
      // 创建内部音频上下文
      if (this.innerAudioContextHeart === 0) {
        this.innerAudioContextHeart = uni.createInnerAudioContext();
        this.innerAudioContextHeart.src = '/static/sound/heart.mp3';
        this.innerAudioContextHeart.loop = true; // 循环
      }

      if (newValue <= this.heroObj.totalblood / 4 && newValue > 0) {
        // 播放音频
        this.innerAudioContextHeart.play();
      } else {
        this.innerAudioContextHeart.pause();
      }

      // 游戏结束
      if (newValue === 0) {
        this.gameOverFunc();
      }
    }
  },
  computed: {
    // 血条长度
    barWidth: function barWidth() {
      return "".concat(this.heroObj.bloodPercent / this.heroObj.totalblood * 100, "%");
    },
    // 血条颜色
    barColor: function barColor() {
      var color = 'rgba(0, 152, 0, 1.0)';
      if (this.heroObj.bloodPercent <= this.heroObj.totalblood / 4) {
        color = 'rgba(248, 76, 62, 1.0)';
      } else {
        color = 'rgba(0, 152, 0, 1.0)';
      }
      return color;
    },
    // 摇杆直径
    rocketWidth: function rocketWidth() {
      return "".concat(this.totalWid / 3 / this.windowWidth * 100, "%");
    },
    rocketHeight: function rocketHeight() {
      return "".concat(this.totalWid / 3 / this.windowHeight * 100, "%");
    },
    // 摇杆位置
    rocketTop: function rocketTop() {
      return "".concat((this.handleCenterY - this.totalWid / 6) / this.windowHeight * 100, "%");
    },
    rocketLeft: function rocketLeft() {
      return "".concat((this.handleCenterX - this.totalWid / 6) / this.windowWidth * 100, "%");
    },
    // 摇杆中心圈的直径
    rocketCenterWidth: function rocketCenterWidth() {
      return "".concat(this.totalWid / 6 / this.windowWidth * 100, "%");
    },
    rocketCenterHeight: function rocketCenterHeight() {
      return "".concat(this.totalWid / 6 / this.windowHeight * 100, "%");
    },
    // 摇杆中心圈的摇杆位置
    rocketCenterTop: function rocketCenterTop() {
      var trueY = this.touchY;
      if (this.touchY - this.handleCenterY < -this.totalWid / 6) trueY = this.handleCenterY - this.totalWid / 6;
      if (this.touchY - this.handleCenterY > this.totalWid / 6) trueY = this.handleCenterY + this.totalWid / 6;
      return "".concat((trueY - this.totalWid / 12) / this.windowHeight * 100, "%");
    },
    rocketCenterLeft: function rocketCenterLeft() {
      var trueX = this.touchX;
      if (this.touchX - this.handleCenterX < -this.totalWid / 6) trueX = this.handleCenterX - this.totalWid / 6;
      if (this.touchX - this.handleCenterX > this.totalWid / 6) trueX = this.handleCenterX + this.totalWid / 6;
      return "".concat((trueX - this.totalWid / 12) / this.windowWidth * 100, "%");
    }
  },
  onLoad: function onLoad() {
    // 监听横屏竖屏
    //  uni.onWindowResize((res) => {
    //    this.isPortrait = res.size.windowWidth > res.size.windowHeight;

    // // if (res.size.windowWidth > res.size.windowHeight) {
    // // 	// 横屏
    // // 	console.log('landscape横屏');
    // // } else {
    // // 	// 竖屏
    // // 	console.log('portrait竖屏');
    // // }
    // this.windowWidth = res.size.windowWidth;
    // this.windowHeight = res.size.windowHeight;

    // const wid = Math.min(res.size.windowWidth, res.size.windowHeight) / 10;
    // // console.log('宽高', res.size.windowWidth, res.size.windowHeight, wid);
    // this.heroObj.w = wid;
    // this.heroObj.h = wid;
    // this.heroObj.x = res.size.windowWidth / 2 - wid/2;
    // this.heroObj.y = res.size.windowHeight / 2 - wid/2;

    // this.draw();
    //  })

    //在目的页面读取并销毁
    var checkHero = JSON.parse(uni.getStorageSync("checkHero"));
    // console.log('1data111', checkHero)
    uni.removeStorage("checkHero");
    this.heroObj = _objectSpread(_objectSpread({}, this.heroObj), checkHero);
  },
  onReady: function onReady() {
    this.ctx = uni.createCanvasContext('myCanvas', this);
    var that = this;
    // 获取屏幕宽高
    uni.getSystemInfo({
      success: function success(res) {
        console.log('22222', res);
        // 设置屏幕宽高
        that.windowWidth = res.windowWidth;
        that.windowHeight = res.windowHeight;

        // 设置英雄属性
        that.totalWid = Math.min(res.windowWidth, res.windowHeight);
        var wid = Math.min(res.windowWidth, res.windowHeight) / 10;
        that.heroObj.w = wid;
        that.heroObj.h = wid;
        that.heroObj.x = res.windowWidth / 2 - wid / 2;
        that.heroObj.y = res.windowHeight / 2 - wid / 2;
        that.createArms(); // 生成武器
        that.createMonster(10); // 生成怪物
        that.createBloodPack(1 * that.heroObj.lucky); // 生成血包
        that.createAttackSpeedList(1 * that.heroObj.lucky); // 生成攻速包
        // 监听键盘输入
        // that.liskeydown();
        // 初始化手柄位置
        // console.log('11res.windowHeight', res.windowHeight)
        that.handleCenterX = wid * 3.5;
        that.handleCenterY = res.windowHeight - wid * 3.5;
        // 初始化手位置
        that.touchX = wid * 3.5;
        that.touchY = res.windowHeight - wid * 3.5;

        // 3秒倒计时
        var t = 3;
        that.timer = setInterval(function () {
          if (t !== 0) {
            that.stopText = t;
            that.playAudio('/static/sound/time.mp3');
          } else {
            that.stopText = '开始！';
            that.playAudio('/static/sound/start.mp3');
          }
          t--;
          if (t < 0) {
            if (that.timer) {
              clearInterval(that.timer);
              that.timer = null;
            }
            that.drawClock();
            that.showOverlay = false;
          }
        }, 1000);
      }
    });
  },
  onUnload: function onUnload() {
    // console.log('11111onUnload')
    this.stopClock();
  },
  methods: {
    drawClock: function drawClock() {
      var _this = this;
      if (this.clock) return;
      this.clock = setInterval(function () {
        _this.startDraw();
      }, 1000 / 60);
    },
    stopClock: function stopClock() {
      // console.log('进来了222222', this.clock)
      if (this.clock) {
        clearInterval(this.clock);
        this.clock = null;
      }
    },
    startDraw: function startDraw() {
      // 绘制分数
      // this.drawText(`分数：${this.killCount}`, this.windowWidth / 10, this.windowWidth / 14, "green", "red");
      // 绘制血条数值
      // this.drawText(`${this.heroObj.bloodPercent}/${100}`, this.windowWidth * 2 / 3, this.windowWidth / 14, "red", "blue");
      // 绘制人物血条
      // this.drawBloodBar(
      // 	{
      // 		x: this.windowWidth / 3, 
      // 		y: this.windowWidth / 20,
      // 		w: this.windowWidth / 3,
      // 		h: this.windowWidth / 30,
      // 		r: this.windowWidth / 60,
      // 		bc: 'rgba(1, 1, 1, 0.3)',
      // 		fc: this.heroObj.bloodPercent <= 25 ? 'rgba(250, 0, 0, 1.0)' : 'rgba(0, 238, 0, 1.0)',
      // 		p: this.heroObj.bloodPercent,
      // 	}
      // );
      this.drawHreo(); // 绘制人物
      this.drawArms(); // 绘制武器
      this.drawMonster(); // 绘制怪物
      this.drawBloodPack(); // 绘制血包
      this.drawAttackSpeedList(); // 绘制闪电
      this.createPhoton(); // 生成子弹
      this.drawPhoton(); // 绘制子弹
      this.ctx.draw(); // 绘制画布
    },
    // 绘制人物
    drawHreo: function drawHreo() {
      // console.log('11111111', this.heroObj, this.windowWidth);
      this.heroObj.rate++; // 修改旋转角度
      this.controlHeroMove(); // 修改xy移动人物
      this.rotate(this.heroObj); // 旋转人物
    },
    // 生成武器
    createArms: function createArms() {
      this.arms.splice(this.heroObj.arms); // 武器数量
      for (var key in this.arms) {
        var ax = this.heroObj.x + this.heroObj.w * Math.cos(key * 2 * Math.PI / this.heroObj.arms);
        var ay = this.heroObj.y + this.heroObj.h * Math.sin(key * 2 * Math.PI / this.heroObj.arms);
        this.arms[key].x = ax;
        this.arms[key].y = ay;
        this.arms[key].w = this.heroObj.w * 0.8;
        this.arms[key].h = this.heroObj.h * 0.8;
      }
    },
    // 绘制武器
    drawArms: function drawArms() {
      // console.log('11111',this.arms);
      // 绘制武器
      for (var key in this.arms) {
        this.arms[key].time--; // 武器时间冷却
        // console.log('3333333keykey', key, this.arms[key].time);
        var ax = this.heroObj.x + this.heroObj.w * Math.cos(key * 2 * Math.PI / this.heroObj.arms);
        var ay = this.heroObj.y + this.heroObj.h * Math.sin(key * 2 * Math.PI / this.heroObj.arms);
        this.arms[key].x = ax;
        this.arms[key].y = ay;

        // 发射子弹的时候武器60度抖动
        var rate = key * 60;
        if (this.arms[key].time <= 120 / this.heroObj.attackSpeed && this.arms[key].time >= 90 / this.heroObj.attackSpeed) {
          rate = key * 60 + 60;
        }
        // 旋转武器
        this.rotate({
          url: this.arms[key].url,
          x: ax,
          y: ay,
          w: this.arms[key].w,
          h: this.arms[key].h,
          rate: rate
        });
      }
    },
    // 生成子弹
    createPhoton: function createPhoton() {
      var _this2 = this;
      // 攻击距离
      var hLength = this.heroObj.attackLength * this.totalWid / 3;
      var hw = this.heroObj.w * 0.2;
      var hh = this.heroObj.h * 0.2;
      var _iterator = _createForOfIteratorHelper(this.monster),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mitem = _step.value;
          for (var key in this.arms) {
            // 武器位置
            var ax = this.arms[key].x;
            var ay = this.arms[key].y;
            var nowLength = (0, _methods.powAndSqrt)(ax - mitem.x, ay - mitem.y); // 当前怪物和子弹距离
            // 已冷却好时间且在攻击范围内
            if (this.arms[key].time <= 0 && nowLength <= hLength) {
              // console.log('3333333key', key, this.arms[key].time);
              this.hList.push({
                url: this.arms[key].hUrl,
                x: ax,
                y: ay,
                w: hw,
                h: hh,
                toX: ax + (mitem.x - ax) * hLength / nowLength,
                toY: ay + (mitem.y - ay) * hLength / nowLength,
                speed: 8
              });
              this.arms[key].time = 120 / this.heroObj.attackSpeed;
              // 播放子弹射击的声音
              (0, _methods.throttle)(function () {
                _this2.playAudio('/static/sound/shot.mp3');
              }, 120)();
              break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    // 移动子弹
    drawPhoton: function drawPhoton() {
      // 移动子弹
      if (this.hList.length <= 0) return;
      // console.log('1111111', this.arms[key].hList);
      for (var hkey in this.hList) {
        var hitem = this.hList[hkey];
        // 向射击目标点移动
        var nowX = hitem.x;
        var nowY = hitem.y;
        var xLength = hitem.x - hitem.toX;
        var yLength = hitem.y - hitem.toY;
        var xieLength = (0, _methods.powAndSqrt)(xLength, yLength); // 子弹当前位置和子弹目标位置的斜边
        nowX = hitem.x - hitem.speed * xLength / xieLength;
        nowY = hitem.y - hitem.speed * yLength / xieLength;
        this.hList[hkey].x = nowX;
        this.hList[hkey].y = nowY;
        this.ctx.drawImage(hitem.url, hitem.x, hitem.y, hitem.w, hitem.h);

        // console.log('11111111', xLength, yLength, powAndSqrt(xLength, yLength))
        // 超出射程删除子弹
        if (xieLength <= hitem.speed) {
          this.hList.splice(hkey, 1);
        }
        // 子弹怪物碰撞检测
        for (var mkey in this.monster) {
          var mitem = this.monster[mkey];
          if (nowX > mitem.x && nowX < mitem.x + mitem.w && nowY > mitem.y && nowY < mitem.y + mitem.h) {
            this.hList.splice(hkey, 1);
            // 扣血条
            if (mitem.bloodPercent - 10 <= 0) {
              mitem.bloodPercent = 0;
              this.monster.splice(mkey, 1);
              this.createMonster(1);
              this.killCount++;
            } else {
              mitem.bloodPercent = mitem.bloodPercent - 10;
            }
          }
        }
      }
    },
    // 生成怪物
    createMonster: function createMonster(n) {
      var bloodPercent = 10;
      if (this.killCount > 50) {
        bloodPercent = 30;
      }
      if (this.killCount > 100) {
        bloodPercent = 50;
      }
      if (this.killCount > 200) {
        bloodPercent = 80;
      }
      if (this.killCount > 300) {
        bloodPercent = 120;
      }
      if (this.killCount > 400) {
        bloodPercent = 160;
      }
      if (this.killCount > 500) {
        bloodPercent = 200;
      }
      if (this.killCount > 600) {
        bloodPercent = 250;
      }
      if (this.killCount > 700) {
        bloodPercent = 300;
      }
      if (this.killCount > 800) {
        bloodPercent = 350;
      }
      if (this.killCount > 900) {
        bloodPercent = 400;
      }
      if (this.killCount > 1000) {
        bloodPercent = 500;
      }
      for (var i = 0; i < n; i++) {
        this.monster.push({
          url: "/static/monster/m".concat((0, _methods.selectFrom)(1, 6), ".png"),
          x: this.windowWidth * (0, _methods.selectFrom)(5, 95) / 100,
          y: this.windowHeight * (0, _methods.selectFrom)(5, 95) / 100,
          w: this.heroObj.w * 0.8,
          h: this.heroObj.h * 0.8,
          rate: 0,
          // 旋转角度
          lr: 1,
          // 旋转方向
          speed: 1,
          // 速度
          bloodPercent: bloodPercent,
          // 当前血条
          totalblood: bloodPercent // 总血条
        });
      }
    },
    // 绘制怪物
    drawMonster: function drawMonster() {
      for (var key in this.monster) {
        // 怪物向英雄靠近
        var nowX = this.monster[key].x;
        var nowY = this.monster[key].y;
        var xLength = this.heroObj.x - this.monster[key].x;
        var yLength = this.heroObj.y - this.monster[key].y;
        var xieLength = (0, _methods.powAndSqrt)(xLength, yLength); // 怪物和人物的斜边

        // 向人物靠近
        nowX = nowX + this.monster[key].speed * xLength / xieLength;
        nowY = nowY + this.monster[key].speed * yLength / xieLength;
        this.monster[key].x = nowX;
        this.monster[key].y = nowY;
        // 旋转怪物并绘制怪物
        if (this.monster[key].rate >= 15) this.monster[key].lr = -1;
        if (this.monster[key].rate <= -15) this.monster[key].lr = 1;
        this.monster[key].rate += this.monster[key].lr;
        this.rotate({
          url: this.monster[key].url,
          x: nowX,
          y: nowY,
          w: this.monster[key].w,
          h: this.monster[key].h,
          rate: this.monster[key].rate
        });
        // 绘制怪物血条
        this.drawBloodBar({
          x: nowX - 5,
          y: nowY - 5,
          w: this.monster[key].w + 10,
          h: this.monster[key].h / 8,
          // r: 0,
          bc: 'rgba(1, 1, 1, 0.3)',
          fc: 'rgba(250, 0, 0, 1.0)',
          p: this.monster[key].bloodPercent / this.monster[key].totalblood
        });

        // console.log('111111111111', nowX, this.heroObj.x + this.heroObj.w/2)
        // 碰到英雄以后删除怪物，并且重新生成怪物
        if (nowX <= this.heroObj.x + this.heroObj.w / 2 && nowX >= this.heroObj.x - this.heroObj.w / 2 && nowY <= this.heroObj.y + this.heroObj.h / 2 && nowY >= this.heroObj.y - this.heroObj.h / 2) {
          // 播放扣血的声音
          this.playAudio('/static/sound/blood.mp3');
          // 扣血条
          if (this.heroObj.bloodPercent - 10 <= 0) {
            this.heroObj.bloodPercent = 0;
          } else {
            this.heroObj.bloodPercent = this.heroObj.bloodPercent - 10;
          }
          // 删除怪物
          this.monster.splice(key, 1);
          this.createMonster(1);
        }
        ;
      }
    },
    // 生成回血包
    createBloodPack: function createBloodPack(n) {
      for (var i = 0; i < n; i++) {
        this.bloodPack.push({
          url: '/static/tool/leaf.png',
          x: this.windowWidth * (0, _methods.selectFrom)(5, 95) / 100,
          y: this.windowHeight * (0, _methods.selectFrom)(5, 95) / 100,
          w: this.heroObj.w * 0.8,
          h: this.heroObj.h * 0.8,
          rate: 0,
          // 旋转角度
          lr: 1 // 旋转方向
        });
      }
    },
    // 绘制血包
    drawBloodPack: function drawBloodPack() {
      var _this3 = this;
      for (var key in this.bloodPack) {
        // 旋转血包并绘制血包
        if (this.bloodPack[key].rate >= 15) this.bloodPack[key].lr = -1;
        if (this.bloodPack[key].rate <= -15) this.bloodPack[key].lr = 1;
        this.bloodPack[key].rate += this.bloodPack[key].lr;
        this.rotate({
          url: this.bloodPack[key].url,
          x: this.bloodPack[key].x,
          y: this.bloodPack[key].y,
          w: this.bloodPack[key].w,
          h: this.bloodPack[key].h,
          rate: this.bloodPack[key].rate
        });

        // console.log('111111111111', nowX, this.heroObj.x + this.heroObj.w/2)
        // 碰到英雄以后删除血包，并且重新生成血包
        if (this.bloodPack[key].x <= this.heroObj.x + this.heroObj.w / 2 && this.bloodPack[key].x >= this.heroObj.x - this.heroObj.w / 2 && this.bloodPack[key].y <= this.heroObj.y + this.heroObj.h / 2 && this.bloodPack[key].y >= this.heroObj.y - this.heroObj.h / 2) {
          // 回血的声音
          this.playAudio('/static/sound/leaf.mp3');
          // 回血条
          if (this.heroObj.bloodPercent + 10 >= this.heroObj.totalblood) {
            this.heroObj.bloodPercent = this.heroObj.totalblood;
          } else {
            this.heroObj.bloodPercent = this.heroObj.bloodPercent + 10;
          }
          // 删除血包
          this.bloodPack.splice(key, 1);
          setTimeout(function () {
            _this3.createBloodPack(1);
          }, 1000);
        }
        ;
      }
    },
    // 生成闪电攻速包
    createAttackSpeedList: function createAttackSpeedList(n) {
      for (var i = 0; i < n; i++) {
        this.attackSpeedList.push({
          url: '/static/tool/light.png',
          x: this.windowWidth * (0, _methods.selectFrom)(5, 95) / 100,
          y: this.windowHeight * (0, _methods.selectFrom)(5, 95) / 100,
          w: this.heroObj.w * 0.8,
          h: this.heroObj.h * 0.8,
          rate: 0,
          // 旋转角度
          lr: 1 // 旋转方向
        });
      }
    },
    // 绘制闪电
    drawAttackSpeedList: function drawAttackSpeedList() {
      var _this4 = this;
      for (var key in this.attackSpeedList) {
        // 旋转并绘制
        if (this.attackSpeedList[key].rate >= 15) this.attackSpeedList[key].lr = -1;
        if (this.attackSpeedList[key].rate <= -15) this.attackSpeedList[key].lr = 1;
        this.attackSpeedList[key].rate += this.attackSpeedList[key].lr;
        this.rotate({
          url: this.attackSpeedList[key].url,
          x: this.attackSpeedList[key].x,
          y: this.attackSpeedList[key].y,
          w: this.attackSpeedList[key].w,
          h: this.attackSpeedList[key].h,
          rate: this.attackSpeedList[key].rate
        });

        // console.log('111111111111', nowX, this.heroObj.x + this.heroObj.w/2)
        // 碰到英雄以后删除，并且重新生成
        if (this.attackSpeedList[key].x <= this.heroObj.x + this.heroObj.w / 2 && this.attackSpeedList[key].x >= this.heroObj.x - this.heroObj.w / 2 && this.attackSpeedList[key].y <= this.heroObj.y + this.heroObj.h / 2 && this.attackSpeedList[key].y >= this.heroObj.y - this.heroObj.h / 2) {
          // 回血的声音
          this.playAudio('/static/sound/leaf.mp3');
          // 增加攻速
          this.heroObj.attackSpeed = this.heroObj.attackSpeed + 0.2;
          // 删除闪电并生成
          this.attackSpeedList.splice(key, 1);
          setTimeout(function () {
            _this4.createAttackSpeedList(1);
          }, 1000);
        }
        ;
      }
    },
    // ========================================================
    // ========================================================
    // ========================================================
    // 旋转图片
    rotate: function rotate(imgObj) {
      this.ctx.save();
      var centerX = imgObj.x + imgObj.w / 2;
      var centerY = imgObj.y + imgObj.h / 2;
      this.ctx.translate(centerX, centerY);
      if (imgObj.rate) this.ctx.rotate(Math.PI * imgObj.rate / 180);
      this.ctx.translate(-centerX, -centerY);
      // 绘制图片
      this.ctx.drawImage(imgObj.url, imgObj.x, imgObj.y, imgObj.w, imgObj.h);
      this.ctx.restore();
    },
    // 绘制血条
    drawBloodBar: function drawBloodBar(barObj) {
      /*填充矩形方法：fillRect(x,y,w,h)*/
      this.ctx.fillStyle = barObj.bc;
      this.ctx.fillRect(barObj.x, barObj.y, barObj.w, barObj.h);
      this.ctx.fillStyle = barObj.fc;
      this.ctx.fillRect(barObj.x, barObj.y, barObj.w * barObj.p, barObj.h);

      // fillRoundRect(this.ctx, barObj.x, barObj.y, barObj.w, barObj.h, barObj.r, barObj.bc);
      // fillRoundRect(this.ctx, barObj.x, barObj.y, barObj.w * barObj.p, barObj.h, barObj.r, barObj.fc);
    },
    // 绘制文字
    drawText: function drawText(text, x, y, lColor, rColor) {
      var gradient = this.ctx.createLinearGradient(x, y, 200, 0);
      gradient.addColorStop(0, lColor);
      gradient.addColorStop(1, rColor);
      this.ctx.fillStyle = gradient;
      this.ctx.font = "24px Microsoft YaHei";
      this.ctx.fillText(text, x, y);
    },
    // 暂停或者执行
    pauseOrRunFunc: function pauseOrRunFunc(inPauseOrRun) {
      console.log('进来了111', inPauseOrRun);
      if (inPauseOrRun) {
        this.drawClock();
      } else {
        this.stopClock();
      }
    },
    // 返回首页
    toGameHome: function toGameHome() {
      uni.navigateBack({
        delta: 1
      });
    },
    // 播放声音
    playAudio: function playAudio(url) {
      // // 播放音频(h5端)
      // let audio = new Audio(url);
      // audio.play();

      // 创建内部音频上下文
      var innerAudioContext = uni.createInnerAudioContext();
      innerAudioContext.src = url;
      // 播放音频
      innerAudioContext.play();
      setTimeout(function () {
        innerAudioContext.destroy();
      }, 5000);
    },
    // 监听键盘wsad方法
    liskeydown: function liskeydown() {
      var that = this;
      document.addEventListener("keydown", function (e) {
        // console.log("您按下的按钮的keyCode为："+e.keyCode);
        if (e.keyCode == 38 || e.keyCode == 87) {
          // 执行向上移动的方法
          that.top = 1;
        } else if (e.keyCode == 40 || e.keyCode == 83) {
          // 执行向下移动的方法
          that.bottom = 1;
        } else if (e.keyCode == 37 || e.keyCode == 65) {
          // 执行向左移动的方法
          that.left = 1;
        } else if (e.keyCode == 39 || e.keyCode == 68) {
          // 执行向右移动的方法
          that.right = 1;
        } else if (e.keyCode == 32) {
          // 空格点击
          that.keyControl = 1;
        }
      });
      document.addEventListener("keyup", function (e) {
        // console.log("1111的keyCode为："+e.keyCode);
        if (e.keyCode == 38 || e.keyCode == 87) {
          // 执行向上移动的方法
          that.top = 0;
        } else if (e.keyCode == 40 || e.keyCode == 83) {
          // 执行向下移动的方法
          that.bottom = 0;
        } else if (e.keyCode == 37 || e.keyCode == 65) {
          // 执行向左移动的方法
          that.left = 0;
        } else if (e.keyCode == 39 || e.keyCode == 68) {
          // 执行向右移动的方法
          that.right = 0;
        }
      });
    },
    // 控制人物移动 
    controlHeroMove: function controlHeroMove() {
      var trueMoveSpeed = this.heroObj.speed;
      // 如果点了空格键就加速跳跃
      if (this.keyControl === 1) {
        trueMoveSpeed = this.heroObj.speed * 30;
        this.keyControl = 0;
      }
      // 如果有键盘事件就移动
      if (this.top > 0) {
        if (this.heroObj.y - trueMoveSpeed * this.top > 0) {
          this.heroObj.y = this.heroObj.y - trueMoveSpeed * this.top;
        } else {
          this.heroObj.y = 0;
        }
      }
      if (this.bottom > 0) {
        if (this.heroObj.y + trueMoveSpeed * this.bottom < this.windowHeight - this.heroObj.h) {
          this.heroObj.y = this.heroObj.y + trueMoveSpeed * this.bottom;
        } else {
          this.heroObj.y = this.windowHeight - this.heroObj.h;
        }
      }
      if (this.left > 0) {
        if (this.heroObj.x - trueMoveSpeed * this.left > 0) {
          this.heroObj.x = this.heroObj.x - trueMoveSpeed * this.left;
        } else {
          this.heroObj.x = 0;
        }
      }
      if (this.right > 0) {
        if (this.heroObj.x + trueMoveSpeed * this.right < this.windowWidth - this.heroObj.w) {
          this.heroObj.x = this.heroObj.x + trueMoveSpeed * this.right;
        } else {
          this.heroObj.x = this.windowWidth - this.heroObj.w;
        }
      }
    },
    touchEvent: function touchEvent(x, y) {
      // console.log('111111111', x, y, this.handleCenterX, this.handleCenterY)
      // 保存当前手指位置
      this.touchX = x;
      this.touchY = y;
      // 触点和原点距离
      var xieLength = (0, _methods.powAndSqrt)(this.handleCenterX - x, this.handleCenterY - y);
      // console.log('1111xieLength', this.handleCenterX - x, this.handleCenterY - y, xieLength)
      // 在手柄内时速度按长度计算
      var hadW = this.totalWid / 6; // 手柄半径
      var touchSpeed = Math.min(hadW, xieLength) / hadW;
      if (this.handleCenterY > y) {
        // 执行向上移动的方法
        this.top = (this.handleCenterY - y) * touchSpeed / xieLength;
        this.bottom = 0;
      } else if (this.handleCenterY < y) {
        // 执行向下移动的方法
        this.bottom = (y - this.handleCenterY) * touchSpeed / xieLength;
        this.top = 0;
      } else {
        this.top = 0;
        this.bottom = 0;
      }
      ;
      if (this.handleCenterX > x) {
        // 执行向左移动的方法
        this.left = (this.handleCenterX - x) * touchSpeed / xieLength;
        this.right = 0;
      } else if (this.handleCenterX < x) {
        // 执行向右移动的方法
        this.right = (x - this.handleCenterX) * touchSpeed / xieLength;
        this.left = 0;
      } else {
        this.left = 0;
        this.right = 0;
      }
    },
    touchend: function touchend(e) {
      this.touchX = this.handleCenterX;
      this.touchY = this.handleCenterY;
      this.top = 0;
      this.bottom = 0;
      this.left = 0;
      this.right = 0;
    },
    // 游戏结束
    gameOverFunc: function gameOverFunc() {
      var _this5 = this;
      // 游戏结束
      setTimeout(function () {
        _this5.pauseOrRun = false;
        _this5.gameOverOverlay = true;
        _this5.innerAudioContextHeart.stop();
        _this5.playAudio('/static/sound/gameOver.mp3');
      }, 100);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 176:
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/taojiajie/Documents/code/hbuild/uni-game-tjj/pages/rampageHero/rampageHero.vue?vue&type=style&index=0&id=a617e2d4&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_style_index_0_id_a617e2d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./rampageHero.vue?vue&type=style&index=0&id=a617e2d4&lang=scss&scoped=true& */ 177);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_style_index_0_id_a617e2d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_style_index_0_id_a617e2d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_style_index_0_id_a617e2d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_style_index_0_id_a617e2d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_rampageHero_vue_vue_type_style_index_0_id_a617e2d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 177:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/taojiajie/Documents/code/hbuild/uni-game-tjj/pages/rampageHero/rampageHero.vue?vue&type=style&index=0&id=a617e2d4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[167,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/rampageHero/rampageHero.js.map