(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/main.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 28));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 31));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\ntry {\n  var isPromise = function isPromise(obj) {\n    return !!obj && ((0, _typeof2.default)(obj) === \"object\" || typeof obj === \"function\") && typeof obj.then === \"function\";\n  }; // 统一 vue2 API Promise 化返回格式与 vue3 保持一致\n  uni.addInterceptor({\n    returnValue: function returnValue(res) {\n      if (!isPromise(res)) {\n        return res;\n      }\n      return new Promise(function (resolve, reject) {\n        res.then(function (res) {\n          if (res[0]) {\n            reject(res[0]);\n          } else {\n            resolve(res[1]);\n          }\n        });\n      });\n    }\n  });\n} catch (error) {}\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiaXNQcm9taXNlIiwib2JqIiwidGhlbiIsInVuaSIsImFkZEludGVyY2VwdG9yIiwicmV0dXJuVmFsdWUiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVycm9yIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQW1CO0FBR25CO0FBQXFCO0FBQUE7QUFDckJBLFlBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLEdBQUcsS0FBSztBQUNoQ0MsWUFBRyxDQUFDQyxNQUFNLEdBQUcsS0FBSztBQUVsQixJQUFJO0VBQUEsSUFDT0MsU0FBUyxHQUFsQixTQUFTQSxTQUFTLENBQUNDLEdBQUcsRUFBRTtJQUN0QixPQUNFLENBQUMsQ0FBQ0EsR0FBRyxLQUNKLHNCQUFPQSxHQUFHLE1BQUssUUFBUSxJQUFJLE9BQU9BLEdBQUcsS0FBSyxVQUFVLENBQUMsSUFDdEQsT0FBT0EsR0FBRyxDQUFDQyxJQUFJLEtBQUssVUFBVTtFQUVsQyxDQUFDLEVBRUQ7RUFDQUMsR0FBRyxDQUFDQyxjQUFjLENBQUM7SUFDakJDLFdBQVcsdUJBQUNDLEdBQUcsRUFBRTtNQUNmLElBQUksQ0FBQ04sU0FBUyxDQUFDTSxHQUFHLENBQUMsRUFBRTtRQUNuQixPQUFPQSxHQUFHO01BQ1o7TUFDQSxPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztRQUN0Q0gsR0FBRyxDQUFDSixJQUFJLENBQUMsVUFBQ0ksR0FBRyxFQUFLO1VBQ2hCLElBQUlBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNWRyxNQUFNLENBQUNILEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNoQixDQUFDLE1BQU07WUFDTEUsT0FBTyxDQUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDakI7UUFDRixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxPQUFPSSxLQUFLLEVBQUUsQ0FBRTtBQUVsQixJQUFNQyxHQUFHLEdBQUcsSUFBSWhCLFlBQUcsbUJBQ2RHLFlBQUcsRUFDTjtBQUNGYSxHQUFHLENBQUNDLE1BQU0sRUFBRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuQXBwLm1wVHlwZSA9ICdhcHAnXG5cbnRyeSB7XG4gIGZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgISFvYmogJiZcbiAgICAgICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikgJiZcbiAgICAgIHR5cGVvZiBvYmoudGhlbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgKTtcbiAgfVxuXG4gIC8vIOe7n+S4gCB2dWUyIEFQSSBQcm9taXNlIOWMlui/lOWbnuagvOW8j+S4jiB2dWUzIOS/neaMgeS4gOiHtFxuICB1bmkuYWRkSW50ZXJjZXB0b3Ioe1xuICAgIHJldHVyblZhbHVlKHJlcykge1xuICAgICAgaWYgKCFpc1Byb21pc2UocmVzKSkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmVzLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXNbMF0pIHtcbiAgICAgICAgICAgIHJlamVjdChyZXNbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc1sxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgfVxuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgLi4uQXBwXG59KVxuYXBwLiRtb3VudCgpXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!******************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages.json ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});
__definePage('pages/envHistory/envHistory', function () {
  return Vue.extend(__webpack_require__(/*! pages/envHistory/envHistory.vue?mpType=page */ 18).default);
});
__definePage('pages/historyData/historyData', function () {
  return Vue.extend(__webpack_require__(/*! pages/historyData/historyData.vue?mpType=page */ 23).default);
});

/***/ }),
/* 7 */
/*!*****************************************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/index/index.vue?mpType=page ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***********************************************************************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "env-data-card"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "card-title"),
            attrs: { _i: 2 },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "env-grid"), attrs: { _i: 3 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(4, "sc", "env-item"),
                  class: _vm._$s(4, "c", {
                    "exceed-limit": _vm.t1 > _vm.t2 || _vm.t1 < _vm.t3,
                  }),
                  attrs: { _i: 4 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(5, "sc", "env-label"),
                    attrs: { _i: 5 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(6, "sc", "env-value"),
                      attrs: { _i: 6 },
                    },
                    [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.t1)))]
                  ),
                  _vm._$s(7, "i", _vm.t1 > _vm.t2)
                    ? _c("view", {
                        staticClass: _vm._$s(7, "sc", "env-status"),
                        attrs: { _i: 7 },
                      })
                    : _vm._$s(8, "e", _vm.t1 < _vm.t3)
                    ? _c("view", {
                        staticClass: _vm._$s(8, "sc", "env-status"),
                        attrs: { _i: 8 },
                      })
                    : _vm._e(),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(9, "sc", "env-item"),
                  class: _vm._$s(9, "c", {
                    "exceed-limit": _vm.h1 > _vm.h2 || _vm.h1 < _vm.h3,
                  }),
                  attrs: { _i: 9 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(10, "sc", "env-label"),
                    attrs: { _i: 10 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(11, "sc", "env-value"),
                      attrs: { _i: 11 },
                    },
                    [_vm._v(_vm._$s(11, "t0-0", _vm._s(_vm.h1)))]
                  ),
                  _vm._$s(12, "i", _vm.h1 > _vm.h2)
                    ? _c("view", {
                        staticClass: _vm._$s(12, "sc", "env-status"),
                        attrs: { _i: 12 },
                      })
                    : _vm._$s(13, "e", _vm.h1 < _vm.h3)
                    ? _c("view", {
                        staticClass: _vm._$s(13, "sc", "env-status"),
                        attrs: { _i: 13 },
                      })
                    : _vm._e(),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(14, "sc", "env-item"),
                  class: _vm._$s(14, "c", {
                    "exceed-limit": _vm.c1 > _vm.c2 || _vm.c1 < _vm.c3,
                  }),
                  attrs: { _i: 14 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(15, "sc", "env-label"),
                    attrs: { _i: 15 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(16, "sc", "env-value"),
                      attrs: { _i: 16 },
                    },
                    [_vm._v(_vm._$s(16, "t0-0", _vm._s(_vm.c1)))]
                  ),
                  _vm._$s(17, "i", _vm.c1 > _vm.c2)
                    ? _c("view", {
                        staticClass: _vm._$s(17, "sc", "env-status"),
                        attrs: { _i: 17 },
                      })
                    : _vm._$s(18, "e", _vm.c1 < _vm.c3)
                    ? _c("view", {
                        staticClass: _vm._$s(18, "sc", "env-status"),
                        attrs: { _i: 18 },
                      })
                    : _vm._e(),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(19, "sc", "env-item"),
                  class: _vm._$s(19, "c", {
                    "exceed-limit": _vm.l1 > _vm.l2 || _vm.l1 < _vm.l3,
                  }),
                  attrs: { _i: 19 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(20, "sc", "env-label"),
                    attrs: { _i: 20 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(21, "sc", "env-value"),
                      attrs: { _i: 21 },
                    },
                    [_vm._v(_vm._$s(21, "t0-0", _vm._s(_vm.l1)))]
                  ),
                  _vm._$s(22, "i", _vm.l1 > _vm.l2)
                    ? _c("view", {
                        staticClass: _vm._$s(22, "sc", "env-status"),
                        attrs: { _i: 22 },
                      })
                    : _vm._$s(23, "e", _vm.l1 < _vm.l3)
                    ? _c("view", {
                        staticClass: _vm._$s(23, "sc", "env-status"),
                        attrs: { _i: 23 },
                      })
                    : _vm._e(),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(24, "sc", "env-item"),
                  class: _vm._$s(24, "c", {
                    "exceed-limit": _vm.o1 > _vm.o2 || _vm.o1 < _vm.o3,
                  }),
                  attrs: { _i: 24 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(25, "sc", "env-label"),
                    attrs: { _i: 25 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(26, "sc", "env-value"),
                      attrs: { _i: 26 },
                    },
                    [_vm._v(_vm._$s(26, "t0-0", _vm._s(_vm.o1)))]
                  ),
                  _vm._$s(27, "i", _vm.o1 > _vm.o2)
                    ? _c("view", {
                        staticClass: _vm._$s(27, "sc", "env-status"),
                        attrs: { _i: 27 },
                      })
                    : _vm._$s(28, "e", _vm.o1 < _vm.o3)
                    ? _c("view", {
                        staticClass: _vm._$s(28, "sc", "env-status"),
                        attrs: { _i: 28 },
                      })
                    : _vm._e(),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(29, "sc", "env-item"),
                  class: _vm._$s(29, "c", {
                    "exceed-limit": _vm.p1 > _vm.p2 || _vm.p1 < _vm.p3,
                  }),
                  attrs: { _i: 29 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(30, "sc", "env-label"),
                    attrs: { _i: 30 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(31, "sc", "env-value"),
                      attrs: { _i: 31 },
                    },
                    [_vm._v(_vm._$s(31, "t0-0", _vm._s(_vm.p1)))]
                  ),
                  _vm._$s(32, "i", _vm.p1 > _vm.p2)
                    ? _c("view", {
                        staticClass: _vm._$s(32, "sc", "env-status"),
                        attrs: { _i: 32 },
                      })
                    : _vm._$s(33, "e", _vm.p1 < _vm.p3)
                    ? _c("view", {
                        staticClass: _vm._$s(33, "sc", "env-status"),
                        attrs: { _i: 33 },
                      })
                    : _vm._e(),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(34, "sc", "threshold-display-card"),
          attrs: { _i: 34 },
        },
        [
          _c("view", {
            staticClass: _vm._$s(35, "sc", "card-title"),
            attrs: { _i: 35 },
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(36, "sc", "threshold-grid"),
              attrs: { _i: 36 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(37, "sc", "threshold-item"),
                  attrs: { _i: 37 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(38, "sc", "threshold-label"),
                    attrs: { _i: 38 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(39, "sc", "threshold-value"),
                      attrs: { _i: 39 },
                    },
                    [
                      _vm._v(
                        _vm._$s(39, "t0-0", _vm._s(_vm.t3)) +
                          _vm._$s(39, "t0-1", _vm._s(_vm.t2))
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(40, "sc", "threshold-item"),
                  attrs: { _i: 40 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(41, "sc", "threshold-label"),
                    attrs: { _i: 41 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(42, "sc", "threshold-value"),
                      attrs: { _i: 42 },
                    },
                    [
                      _vm._v(
                        _vm._$s(42, "t0-0", _vm._s(_vm.h3)) +
                          _vm._$s(42, "t0-1", _vm._s(_vm.h2))
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(43, "sc", "threshold-item"),
                  attrs: { _i: 43 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(44, "sc", "threshold-label"),
                    attrs: { _i: 44 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(45, "sc", "threshold-value"),
                      attrs: { _i: 45 },
                    },
                    [
                      _vm._v(
                        _vm._$s(45, "t0-0", _vm._s(_vm.c3)) +
                          _vm._$s(45, "t0-1", _vm._s(_vm.c2))
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(46, "sc", "threshold-item"),
                  attrs: { _i: 46 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(47, "sc", "threshold-label"),
                    attrs: { _i: 47 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(48, "sc", "threshold-value"),
                      attrs: { _i: 48 },
                    },
                    [
                      _vm._v(
                        _vm._$s(48, "t0-0", _vm._s(_vm.l3)) +
                          _vm._$s(48, "t0-1", _vm._s(_vm.l2))
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(49, "sc", "threshold-item"),
                  attrs: { _i: 49 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(50, "sc", "threshold-label"),
                    attrs: { _i: 50 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(51, "sc", "threshold-value"),
                      attrs: { _i: 51 },
                    },
                    [
                      _vm._v(
                        _vm._$s(51, "t0-0", _vm._s(_vm.o3)) +
                          _vm._$s(51, "t0-1", _vm._s(_vm.o2))
                      ),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(52, "sc", "threshold-item"),
                  attrs: { _i: 52 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(53, "sc", "threshold-label"),
                    attrs: { _i: 53 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(54, "sc", "threshold-value"),
                      attrs: { _i: 54 },
                    },
                    [
                      _vm._v(
                        _vm._$s(54, "t0-0", _vm._s(_vm.p3)) +
                          _vm._$s(54, "t0-1", _vm._s(_vm.p2))
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(55, "sc", "threshold-area"), attrs: { _i: 55 } },
        [
          _c("view", {
            staticClass: _vm._$s(56, "sc", "section-title"),
            attrs: { _i: 56 },
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(57, "sc", "threshold-form"),
              attrs: { _i: 57 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(58, "sc", "form-row"),
                  attrs: { _i: 58 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(59, "sc", "input-group"),
                      attrs: { _i: 59 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(60, "sc", "input-label"),
                        attrs: { _i: 60 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.tempUpperLimit,
                            expression: "tempUpperLimit",
                          },
                        ],
                        staticClass: _vm._$s(61, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            61,
                            "a-placeholder",
                            "当前: " + _vm.t2
                          ),
                          _i: 61,
                        },
                        domProps: {
                          value: _vm._$s(61, "v-model", _vm.tempUpperLimit),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.tempUpperLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(62, "sc", "input-group"),
                      attrs: { _i: 62 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(63, "sc", "input-label"),
                        attrs: { _i: 63 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.tempLowerLimit,
                            expression: "tempLowerLimit",
                          },
                        ],
                        staticClass: _vm._$s(64, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            64,
                            "a-placeholder",
                            "当前: " + _vm.t3
                          ),
                          _i: 64,
                        },
                        domProps: {
                          value: _vm._$s(64, "v-model", _vm.tempLowerLimit),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.tempLowerLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(65, "sc", "form-row"),
                  attrs: { _i: 65 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(66, "sc", "input-group"),
                      attrs: { _i: 66 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(67, "sc", "input-label"),
                        attrs: { _i: 67 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.humidityUpperLimit,
                            expression: "humidityUpperLimit",
                          },
                        ],
                        staticClass: _vm._$s(68, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            68,
                            "a-placeholder",
                            "当前: " + _vm.h2
                          ),
                          _i: 68,
                        },
                        domProps: {
                          value: _vm._$s(68, "v-model", _vm.humidityUpperLimit),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.humidityUpperLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(69, "sc", "input-group"),
                      attrs: { _i: 69 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(70, "sc", "input-label"),
                        attrs: { _i: 70 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.humidityLowerLimit,
                            expression: "humidityLowerLimit",
                          },
                        ],
                        staticClass: _vm._$s(71, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            71,
                            "a-placeholder",
                            "当前: " + _vm.h3
                          ),
                          _i: 71,
                        },
                        domProps: {
                          value: _vm._$s(71, "v-model", _vm.humidityLowerLimit),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.humidityLowerLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(72, "sc", "form-row"),
                  attrs: { _i: 72 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(73, "sc", "input-group"),
                      attrs: { _i: 73 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(74, "sc", "input-label"),
                        attrs: { _i: 74 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.co2UpperLimit,
                            expression: "co2UpperLimit",
                          },
                        ],
                        staticClass: _vm._$s(75, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            75,
                            "a-placeholder",
                            "当前: " + _vm.c2
                          ),
                          _i: 75,
                        },
                        domProps: {
                          value: _vm._$s(75, "v-model", _vm.co2UpperLimit),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.co2UpperLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(76, "sc", "input-group"),
                      attrs: { _i: 76 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(77, "sc", "input-label"),
                        attrs: { _i: 77 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.co2LowerLimit,
                            expression: "co2LowerLimit",
                          },
                        ],
                        staticClass: _vm._$s(78, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            78,
                            "a-placeholder",
                            "当前: " + _vm.c3
                          ),
                          _i: 78,
                        },
                        domProps: {
                          value: _vm._$s(78, "v-model", _vm.co2LowerLimit),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.co2LowerLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(79, "sc", "form-row"),
                  attrs: { _i: 79 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(80, "sc", "input-group"),
                      attrs: { _i: 80 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(81, "sc", "input-label"),
                        attrs: { _i: 81 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.lightUpperLimit,
                            expression: "lightUpperLimit",
                          },
                        ],
                        staticClass: _vm._$s(82, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            82,
                            "a-placeholder",
                            "当前: " + _vm.l2
                          ),
                          _i: 82,
                        },
                        domProps: {
                          value: _vm._$s(82, "v-model", _vm.lightUpperLimit),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.lightUpperLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(83, "sc", "input-group"),
                      attrs: { _i: 83 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(84, "sc", "input-label"),
                        attrs: { _i: 84 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.lightLowerLimit,
                            expression: "lightLowerLimit",
                          },
                        ],
                        staticClass: _vm._$s(85, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            85,
                            "a-placeholder",
                            "当前: " + _vm.l3
                          ),
                          _i: 85,
                        },
                        domProps: {
                          value: _vm._$s(85, "v-model", _vm.lightLowerLimit),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.lightLowerLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(86, "sc", "form-row"),
                  attrs: { _i: 86 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(87, "sc", "input-group"),
                      attrs: { _i: 87 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(88, "sc", "input-label"),
                        attrs: { _i: 88 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formaldehydeUpperLimit,
                            expression: "formaldehydeUpperLimit",
                          },
                        ],
                        staticClass: _vm._$s(89, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            89,
                            "a-placeholder",
                            "当前: " + _vm.o2
                          ),
                          _i: 89,
                        },
                        domProps: {
                          value: _vm._$s(
                            89,
                            "v-model",
                            _vm.formaldehydeUpperLimit
                          ),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.formaldehydeUpperLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(90, "sc", "input-group"),
                      attrs: { _i: 90 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(91, "sc", "input-label"),
                        attrs: { _i: 91 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formaldehydeLowerLimit,
                            expression: "formaldehydeLowerLimit",
                          },
                        ],
                        staticClass: _vm._$s(92, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            92,
                            "a-placeholder",
                            "当前: " + _vm.o3
                          ),
                          _i: 92,
                        },
                        domProps: {
                          value: _vm._$s(
                            92,
                            "v-model",
                            _vm.formaldehydeLowerLimit
                          ),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.formaldehydeLowerLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(93, "sc", "form-row"),
                  attrs: { _i: 93 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(94, "sc", "input-group"),
                      attrs: { _i: 94 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(95, "sc", "input-label"),
                        attrs: { _i: 95 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pm25UpperLimit,
                            expression: "pm25UpperLimit",
                          },
                        ],
                        staticClass: _vm._$s(96, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            96,
                            "a-placeholder",
                            "当前: " + _vm.p2
                          ),
                          _i: 96,
                        },
                        domProps: {
                          value: _vm._$s(96, "v-model", _vm.pm25UpperLimit),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.pm25UpperLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(97, "sc", "input-group"),
                      attrs: { _i: 97 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(98, "sc", "input-label"),
                        attrs: { _i: 98 },
                      }),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pm25LowerLimit,
                            expression: "pm25LowerLimit",
                          },
                        ],
                        staticClass: _vm._$s(99, "sc", "input-field"),
                        attrs: {
                          placeholder: _vm._$s(
                            99,
                            "a-placeholder",
                            "当前: " + _vm.p3
                          ),
                          _i: 99,
                        },
                        domProps: {
                          value: _vm._$s(99, "v-model", _vm.pm25LowerLimit),
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.pm25LowerLimit = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(100, "sc", "button-group"),
                  attrs: { _i: 100 },
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: _vm._$s(101, "sc", "submit-btn"),
                      attrs: {
                        disabled: _vm._$s(
                          101,
                          "a-disabled",
                          _vm.isSettingThresholds
                        ),
                        _i: 101,
                      },
                      on: { click: _vm.setThresholds },
                    },
                    [
                      _vm._v(
                        _vm._$s(
                          101,
                          "t0-0",
                          _vm._s(
                            _vm.isSettingThresholds
                              ? "设置中..."
                              : "设置所有阈值"
                          )
                        )
                      ),
                    ]
                  ),
                  _c("button", {
                    staticClass: _vm._$s(102, "sc", "reset-btn"),
                    attrs: {
                      disabled: _vm._$s(
                        102,
                        "a-disabled",
                        _vm.isSettingThresholds
                      ),
                      _i: 102,
                    },
                    on: { click: _vm.resetInputs },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(103, "sc", "control-buttons"),
          attrs: { _i: 103 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(104, "sc", "button-row"),
              attrs: { _i: 104 },
            },
            [
              _c("button", {
                staticClass: _vm._$s(105, "sc", "history-btn"),
                attrs: { _i: 105 },
                on: { click: _vm.navigateToHistory },
              }),
              _c(
                "button",
                {
                  staticClass: _vm._$s(106, "sc", "refresh-btn"),
                  attrs: {
                    disabled: _vm._$s(106, "a-disabled", _vm.isRefreshing),
                    _i: 106,
                  },
                  on: { click: _vm.manualRefresh },
                },
                [
                  _vm._v(
                    _vm._$s(
                      106,
                      "t0-0",
                      _vm._s(_vm.isRefreshing ? "刷新中..." : "刷新数据")
                    )
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(107, "sc", "last-update"), attrs: { _i: 107 } },
        [
          _c("text", [
            _vm._v(_vm._$s(108, "t0-0", _vm._s(_vm.lastUpdateTime))),
          ]),
          _vm._$s(109, "i", _vm.lastStorageTime)
            ? _c(
                "text",
                {
                  staticClass: _vm._$s(109, "sc", "storage-status"),
                  attrs: { _i: 109 },
                },
                [_vm._v(_vm._$s(109, "t0-0", _vm._s(_vm.lastStorageTime)))]
              )
            : _vm._e(),
        ]
      ),
      _vm._$s(110, "i", _vm.hasExceededLimit)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(110, "sc", "warning-banner"),
              attrs: { _i: 110 },
            },
            [
              _c("text", {
                staticClass: _vm._$s(111, "sc", "warning-text"),
                attrs: { _i: 111 },
              }),
            ]
          )
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!*****************************************************************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVtQixDQUFnQixzb0JBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15));\nvar _sqlite = _interopRequireDefault(__webpack_require__(/*! @/sqlite.js */ 16));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入封装的 sqlite\nvar _default = {\n  data: function data() {\n    return {\n      // 当前监测值\n      t1: 0,\n      // 温度\n      h1: 0,\n      // 湿度\n      c1: 0,\n      // 二氧化碳\n      l1: 0,\n      // 光照强度\n      o1: 0,\n      // 甲醛\n      p1: 0,\n      // PM2.5\n\n      // 阈值上限\n      t2: 0,\n      // 温度上限\n      h2: 0,\n      // 湿度上限\n      c2: 0,\n      // 二氧化碳上限\n      l2: 0,\n      // 光照强度上限\n      o2: 0,\n      // 甲醛上限\n      p2: 0,\n      // PM2.5上限\n\n      // 阈值下限\n      t3: 0,\n      // 温度下限\n      h3: 0,\n      // 湿度下限\n      c3: 0,\n      // 二氧化碳下限\n      l3: 0,\n      // 光照强度下限\n      o3: 0,\n      // 甲醛下限\n      p3: 0,\n      // PM2.5下限\n\n      // 阈值输入\n      tempUpperLimit: '',\n      tempLowerLimit: '',\n      humidityUpperLimit: '',\n      humidityLowerLimit: '',\n      co2UpperLimit: '',\n      co2LowerLimit: '',\n      lightUpperLimit: '',\n      lightLowerLimit: '',\n      formaldehydeUpperLimit: '',\n      formaldehydeLowerLimit: '',\n      pm25UpperLimit: '',\n      pm25LowerLimit: '',\n      // 系统配置\n      token: 'version=2018-10-31&res=products%2F9m275ij5mP%2Fdevices%2Fd1&et=1919398822&method=md5&sign=7lx%2FDUCbaBIvP1sY4XSyKA%3D%3D',\n      productId: '9m275ij5mP',\n      deviceName: 'd1',\n      lastUpdateTime: '--',\n      lastStorageTime: '',\n      updateIntervalId: null,\n      storageIntervalId: null,\n      isSettingThresholds: false,\n      isRefreshing: false,\n      storageCount: 0\n    };\n  },\n  computed: {\n    hasExceededLimit: function hasExceededLimit() {\n      return this.t1 > this.t2 || this.t1 < this.t3 || this.h1 > this.h2 || this.h1 < this.h3 || this.c1 > this.c2 || this.c1 < this.c3 || this.l1 > this.l2 || this.l1 < this.l3 || this.o1 > this.o2 || this.o1 < this.o3 || this.p1 > this.p2 || this.p1 < this.p3;\n    }\n  },\n  onShow: function onShow() {\n    var _this = this;\n    this.initDatabase();\n    this.fetchDeviceData();\n\n    // 每3秒获取一次设备数据\n    this.updateIntervalId = setInterval(function () {\n      _this.fetchDeviceData();\n    }, 3000);\n\n    // 每60秒存储一次数据到数据库\n    this.storageIntervalId = setInterval(function () {\n      _this.saveCurrentData();\n    }, 60000);\n\n    // 页面显示时立即存储一次数据\n    setTimeout(function () {\n      _this.saveCurrentData();\n    }, 1000);\n  },\n  onHide: function onHide() {\n    if (this.updateIntervalId) {\n      clearInterval(this.updateIntervalId);\n    }\n    if (this.storageIntervalId) {\n      clearInterval(this.storageIntervalId);\n    }\n  },\n  methods: {\n    // 初始化数据库\n    initDatabase: function initDatabase() {\n      var _this2 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var envDataTableSql;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return _this2.openSQL();\n              case 3:\n                // 创建环境数据记录表\n                envDataTableSql = \"\\\"id\\\" INTEGER PRIMARY KEY AUTOINCREMENT, \\n\\t\\t\\t\\t\\t\\\"record_time\\\" TEXT, \\n\\t\\t\\t\\t\\t\\\"temperature\\\" REAL, \\n\\t\\t\\t\\t\\t\\\"humidity\\\" REAL, \\n\\t\\t\\t\\t\\t\\\"co2\\\" REAL, \\n\\t\\t\\t\\t\\t\\\"light\\\" REAL, \\n\\t\\t\\t\\t\\t\\\"formaldehyde\\\" REAL, \\n\\t\\t\\t\\t\\t\\\"pm25\\\" REAL,\\n\\t\\t\\t\\t\\t\\\"date\\\" TEXT,\\n\\t\\t\\t\\t\\t\\\"exceed_limit\\\" INTEGER DEFAULT 0\";\n                _context.next = 6;\n                return _sqlite.default.createTable(\"environment_records\", envDataTableSql);\n              case 6:\n                __f__(\"log\", '环境数据记录表创建成功', \" at pages/index/index.vue:302\");\n                _context.next = 12;\n                break;\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](0);\n                __f__(\"error\", '数据库初始化失败:', _context.t0, \" at pages/index/index.vue:304\");\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 9]]);\n      }))();\n    },\n    // 打开数据库\n    openSQL: function openSQL() {\n      return new Promise(function (resolve, reject) {\n        var open = _sqlite.default.isOpen();\n        if (!open) {\n          _sqlite.default.openSqlite().then(function (res) {\n            resolve(res);\n          }).catch(function (error) {\n            reject(error);\n          });\n        } else {\n          resolve(true);\n        }\n      });\n    },\n    fetchDeviceData: function fetchDeviceData() {\n      var _this3 = this;\n      uni.request({\n        url: 'https://iot-api.heclouds.com/thingmodel/query-device-property',\n        method: 'GET',\n        data: {\n          product_id: this.productId,\n          device_name: this.deviceName\n        },\n        header: {\n          'authorization': this.token\n        },\n        success: function success(res) {\n          if (res.statusCode === 200 && res.data && res.data.data) {\n            var data = res.data.data;\n\n            // 查找所有需要的属性\n            var findValue = function findValue(identifier) {\n              var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n              var item = data.find(function (item) {\n                return item.identifier === identifier;\n              });\n              return item ? Number(item.value) : defaultValue;\n            };\n\n            // 更新当前监测值\n            _this3.t1 = findValue('t1');\n            _this3.h1 = findValue('h1');\n            _this3.c1 = findValue('c1');\n            _this3.l1 = findValue('l1');\n            _this3.o1 = findValue('o1');\n            _this3.p1 = findValue('p1');\n\n            // 更新阈值上限\n            _this3.t2 = findValue('t2');\n            _this3.h2 = findValue('h2');\n            _this3.c2 = findValue('c2');\n            _this3.l2 = findValue('l2');\n            _this3.o2 = findValue('o2');\n            _this3.p2 = findValue('p2');\n\n            // 更新阈值下限\n            _this3.t3 = findValue('t3');\n            _this3.h3 = findValue('h3');\n            _this3.c3 = findValue('c3');\n            _this3.l3 = findValue('l3');\n            _this3.o3 = findValue('o3');\n            _this3.p3 = findValue('p3');\n\n            // 更新最后更新时间\n            _this3.lastUpdateTime = _this3.formatTime(new Date());\n\n            // 检查是否有值超出阈值\n            _this3.checkThresholds();\n          } else {\n            __f__(\"error\", '获取数据失败:', res, \" at pages/index/index.vue:377\");\n          }\n        },\n        fail: function fail(err) {\n          __f__(\"error\", '获取设备数据失败:', err, \" at pages/index/index.vue:381\");\n          uni.showToast({\n            title: '获取数据失败',\n            icon: 'none',\n            duration: 2000\n          });\n        },\n        complete: function complete() {\n          _this3.isRefreshing = false;\n        }\n      });\n    },\n    // 保存当前数据到数据库\n    saveCurrentData: function saveCurrentData() {\n      var _this4 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var currentTime, recordTime, currentDate, exceedLimit, condition, data;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                currentTime = new Date();\n                recordTime = _this4.formatDateTime(currentTime);\n                currentDate = _this4.formatDate(currentTime); // 检查是否有异常数据\n                exceedLimit = _this4.hasExceededLimit ? 1 : 0; // 准备插入数据\n                condition = '\"record_time\",\"temperature\",\"humidity\",\"co2\",\"light\",\"formaldehyde\",\"pm25\",\"date\",\"exceed_limit\"';\n                data = \"'\".concat(recordTime, \"',\").concat(_this4.t1, \",\").concat(_this4.h1, \",\").concat(_this4.c1, \",\").concat(_this4.l1, \",\").concat(_this4.o1, \",\").concat(_this4.p1, \",'\").concat(currentDate, \"',\").concat(exceedLimit);\n                _context2.next = 9;\n                return _sqlite.default.insertTableData(\"environment_records\", data, condition);\n              case 9:\n                _this4.storageCount++;\n                _this4.lastStorageTime = _this4.formatTime(currentTime);\n                __f__(\"log\", \"\\u7B2C\".concat(_this4.storageCount, \"\\u6B21\\u5B58\\u50A8\\u73AF\\u5883\\u6570\\u636E\\u6210\\u529F\"), \" at pages/index/index.vue:413\");\n\n                // 如果数据超过1000条，删除最早的数据\n                if (!(_this4.storageCount % 10 === 0)) {\n                  _context2.next = 15;\n                  break;\n                }\n                _context2.next = 15;\n                return _this4.cleanOldData();\n              case 15:\n                _context2.next = 20;\n                break;\n              case 17:\n                _context2.prev = 17;\n                _context2.t0 = _context2[\"catch\"](0);\n                __f__(\"error\", '存储环境数据失败:', _context2.t0, \" at pages/index/index.vue:421\");\n              case 20:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 17]]);\n      }))();\n    },\n    // 清理旧数据，保留最近1000条\n    cleanOldData: function cleanOldData() {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var sql;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.prev = 0;\n                _context3.next = 3;\n                return _this5.openSQL();\n              case 3:\n                // 删除id最小的100条数据\n                sql = \"DELETE FROM environment_records WHERE id IN (SELECT id FROM environment_records ORDER BY id ASC LIMIT 100)\";\n                return _context3.abrupt(\"return\", new Promise(function (resolve, reject) {\n                  plus.sqlite.executeSql({\n                    name: _sqlite.default.dbName,\n                    sql: sql,\n                    success: function success(res) {\n                      __f__(\"log\", '清理旧数据成功', \" at pages/index/index.vue:437\");\n                      resolve(res);\n                    },\n                    fail: function fail(err) {\n                      __f__(\"error\", '清理旧数据失败:', err, \" at pages/index/index.vue:441\");\n                      reject(err);\n                    }\n                  });\n                }));\n              case 7:\n                _context3.prev = 7;\n                _context3.t0 = _context3[\"catch\"](0);\n                __f__(\"error\", '清理旧数据异常:', _context3.t0, \" at pages/index/index.vue:447\");\n              case 10:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[0, 7]]);\n      }))();\n    },\n    checkThresholds: function checkThresholds() {\n      // 检查各项指标并提示\n      var warnings = [];\n      if (this.t1 > this.t2) warnings.push('温度超过上限');\n      if (this.t1 < this.t3) warnings.push('温度低于下限');\n      if (this.h1 > this.h2) warnings.push('湿度超过上限');\n      if (this.h1 < this.h3) warnings.push('湿度低于下限');\n      if (this.c1 > this.c2) warnings.push('二氧化碳超过上限');\n      if (this.c1 < this.c3) warnings.push('二氧化碳低于下限');\n      if (this.l1 > this.l2) warnings.push('光照强度超过上限');\n      if (this.l1 < this.l3) warnings.push('光照强度低于下限');\n      if (this.o1 > this.o2) warnings.push('甲醛浓度超过上限');\n      if (this.o1 < this.o3) warnings.push('甲醛浓度低于下限');\n      if (this.p1 > this.p2) warnings.push('PM2.5超过上限');\n      if (this.p1 < this.p3) warnings.push('PM2.5低于下限');\n\n      // 如果有警告，显示第一条\n      if (warnings.length > 0) {\n        uni.showToast({\n          title: warnings[0],\n          icon: 'none',\n          duration: 2000\n        });\n      }\n    },\n    setThresholds: function setThresholds() {\n      var _this6 = this;\n      if (this.isSettingThresholds) return;\n\n      // 检查是否有输入值\n      var hasInput = this.tempUpperLimit || this.tempLowerLimit || this.humidityUpperLimit || this.humidityLowerLimit || this.co2UpperLimit || this.co2LowerLimit || this.lightUpperLimit || this.lightLowerLimit || this.formaldehydeUpperLimit || this.formaldehydeLowerLimit || this.pm25UpperLimit || this.pm25LowerLimit;\n      if (!hasInput) {\n        uni.showToast({\n          title: '请至少填写一个阈值',\n          icon: 'none',\n          duration: 2000\n        });\n        return;\n      }\n      this.isSettingThresholds = true;\n      uni.showLoading({\n        title: '设置阈值中...',\n        mask: true\n      });\n\n      // 构建参数对象，只包含有值的字段\n      var params = {};\n      if (this.tempUpperLimit) params.t2 = parseFloat(this.tempUpperLimit);\n      if (this.tempLowerLimit) params.t3 = parseFloat(this.tempLowerLimit);\n      if (this.humidityUpperLimit) params.h2 = parseFloat(this.humidityUpperLimit);\n      if (this.humidityLowerLimit) params.h3 = parseFloat(this.humidityLowerLimit);\n      if (this.co2UpperLimit) params.c2 = parseFloat(this.co2UpperLimit);\n      if (this.co2LowerLimit) params.c3 = parseFloat(this.co2LowerLimit);\n      if (this.lightUpperLimit) params.l2 = parseFloat(this.lightUpperLimit);\n      if (this.lightLowerLimit) params.l3 = parseFloat(this.lightLowerLimit);\n      if (this.formaldehydeUpperLimit) params.o2 = parseFloat(this.formaldehydeUpperLimit);\n      if (this.formaldehydeLowerLimit) params.o3 = parseFloat(this.formaldehydeLowerLimit);\n      if (this.pm25UpperLimit) params.p2 = parseFloat(this.pm25UpperLimit);\n      if (this.pm25LowerLimit) params.p3 = parseFloat(this.pm25LowerLimit);\n      var requestData = {\n        product_id: this.productId,\n        device_name: this.deviceName,\n        params: params\n      };\n\n      // 发送阈值设置指令到OneNET\n      uni.request({\n        url: 'https://iot-api.heclouds.com/thingmodel/set-device-property',\n        method: 'POST',\n        data: requestData,\n        header: {\n          'authorization': this.token,\n          'Content-Type': 'application/json'\n        },\n        success: function success(res) {\n          if (res.statusCode === 200) {\n            uni.showToast({\n              title: '阈值设置成功',\n              icon: 'success',\n              duration: 2000\n            });\n\n            // 更新本地数据\n            if (_this6.tempUpperLimit) _this6.t2 = parseFloat(_this6.tempUpperLimit);\n            if (_this6.tempLowerLimit) _this6.t3 = parseFloat(_this6.tempLowerLimit);\n            if (_this6.humidityUpperLimit) _this6.h2 = parseFloat(_this6.humidityUpperLimit);\n            if (_this6.humidityLowerLimit) _this6.h3 = parseFloat(_this6.humidityLowerLimit);\n            if (_this6.co2UpperLimit) _this6.c2 = parseFloat(_this6.co2UpperLimit);\n            if (_this6.co2LowerLimit) _this6.c3 = parseFloat(_this6.co2LowerLimit);\n            if (_this6.lightUpperLimit) _this6.l2 = parseFloat(_this6.lightUpperLimit);\n            if (_this6.lightLowerLimit) _this6.l3 = parseFloat(_this6.lightLowerLimit);\n            if (_this6.formaldehydeUpperLimit) _this6.o2 = parseFloat(_this6.formaldehydeUpperLimit);\n            if (_this6.formaldehydeLowerLimit) _this6.o3 = parseFloat(_this6.formaldehydeLowerLimit);\n            if (_this6.pm25UpperLimit) _this6.p2 = parseFloat(_this6.pm25UpperLimit);\n            if (_this6.pm25LowerLimit) _this6.p3 = parseFloat(_this6.pm25LowerLimit);\n\n            // 清空输入框\n            _this6.resetInputs();\n\n            // 更新最后更新时间\n            _this6.lastUpdateTime = _this6.formatTime(new Date());\n          } else {\n            uni.showToast({\n              title: '设置失败，请重试',\n              icon: 'none',\n              duration: 2000\n            });\n          }\n        },\n        fail: function fail(err) {\n          uni.showToast({\n            title: '网络错误',\n            icon: 'none',\n            duration: 2000\n          });\n        },\n        complete: function complete() {\n          _this6.isSettingThresholds = false;\n          uni.hideLoading();\n        }\n      });\n    },\n    resetInputs: function resetInputs() {\n      this.tempUpperLimit = '';\n      this.tempLowerLimit = '';\n      this.humidityUpperLimit = '';\n      this.humidityLowerLimit = '';\n      this.co2UpperLimit = '';\n      this.co2LowerLimit = '';\n      this.lightUpperLimit = '';\n      this.lightLowerLimit = '';\n      this.formaldehydeUpperLimit = '';\n      this.formaldehydeLowerLimit = '';\n      this.pm25UpperLimit = '';\n      this.pm25LowerLimit = '';\n    },\n    manualRefresh: function manualRefresh() {\n      this.isRefreshing = true;\n      this.fetchDeviceData();\n    },\n    // 跳转到历史数据页面\n    navigateToHistory: function navigateToHistory() {\n      uni.navigateTo({\n        url: '/pages/envHistory/envHistory'\n      });\n    },\n    formatTime: function formatTime(date) {\n      var hours = date.getHours().toString().padStart(2, '0');\n      var minutes = date.getMinutes().toString().padStart(2, '0');\n      var seconds = date.getSeconds().toString().padStart(2, '0');\n      return \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n    },\n    formatDate: function formatDate(date) {\n      var year = date.getFullYear();\n      var month = (date.getMonth() + 1).toString().padStart(2, '0');\n      var day = date.getDate().toString().padStart(2, '0');\n      return \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n    },\n    formatDateTime: function formatDateTime(date) {\n      return \"\".concat(this.formatDate(date), \" \").concat(this.formatTime(date));\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0MSIsImgxIiwiYzEiLCJsMSIsIm8xIiwicDEiLCJ0MiIsImgyIiwiYzIiLCJsMiIsIm8yIiwicDIiLCJ0MyIsImgzIiwiYzMiLCJsMyIsIm8zIiwicDMiLCJ0ZW1wVXBwZXJMaW1pdCIsInRlbXBMb3dlckxpbWl0IiwiaHVtaWRpdHlVcHBlckxpbWl0IiwiaHVtaWRpdHlMb3dlckxpbWl0IiwiY28yVXBwZXJMaW1pdCIsImNvMkxvd2VyTGltaXQiLCJsaWdodFVwcGVyTGltaXQiLCJsaWdodExvd2VyTGltaXQiLCJmb3JtYWxkZWh5ZGVVcHBlckxpbWl0IiwiZm9ybWFsZGVoeWRlTG93ZXJMaW1pdCIsInBtMjVVcHBlckxpbWl0IiwicG0yNUxvd2VyTGltaXQiLCJ0b2tlbiIsInByb2R1Y3RJZCIsImRldmljZU5hbWUiLCJsYXN0VXBkYXRlVGltZSIsImxhc3RTdG9yYWdlVGltZSIsInVwZGF0ZUludGVydmFsSWQiLCJzdG9yYWdlSW50ZXJ2YWxJZCIsImlzU2V0dGluZ1RocmVzaG9sZHMiLCJpc1JlZnJlc2hpbmciLCJzdG9yYWdlQ291bnQiLCJjb21wdXRlZCIsImhhc0V4Y2VlZGVkTGltaXQiLCJvblNob3ciLCJzZXRUaW1lb3V0Iiwib25IaWRlIiwiY2xlYXJJbnRlcnZhbCIsIm1ldGhvZHMiLCJpbml0RGF0YWJhc2UiLCJlbnZEYXRhVGFibGVTcWwiLCJEQiIsIm9wZW5TUUwiLCJ0aGVuIiwicmVzb2x2ZSIsImNhdGNoIiwicmVqZWN0IiwiZmV0Y2hEZXZpY2VEYXRhIiwidW5pIiwidXJsIiwibWV0aG9kIiwicHJvZHVjdF9pZCIsImRldmljZV9uYW1lIiwiaGVhZGVyIiwic3VjY2VzcyIsImZhaWwiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImNvbXBsZXRlIiwic2F2ZUN1cnJlbnREYXRhIiwiY3VycmVudFRpbWUiLCJyZWNvcmRUaW1lIiwiY3VycmVudERhdGUiLCJleGNlZWRMaW1pdCIsImNvbmRpdGlvbiIsImNsZWFuT2xkRGF0YSIsInNxbCIsInBsdXMiLCJuYW1lIiwiY2hlY2tUaHJlc2hvbGRzIiwic2V0VGhyZXNob2xkcyIsIm1hc2siLCJwYXJhbXMiLCJyZXNldElucHV0cyIsIm1hbnVhbFJlZnJlc2giLCJuYXZpZ2F0ZVRvSGlzdG9yeSIsImZvcm1hdFRpbWUiLCJmb3JtYXREYXRlIiwiZm9ybWF0RGF0ZVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQTZMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxlQUVBO0VBQ0FBO0lBQ0E7TUFDQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTs7TUFFQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTs7TUFFQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTs7TUFFQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUVBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBLE9BQ0EsMENBQ0EsMENBQ0EsMENBQ0EsMENBQ0EsMENBQ0E7SUFFQTtFQUNBO0VBQ0FDO0lBQUE7SUFDQTtJQUNBOztJQUVBO0lBQ0E7TUFDQTtJQUNBOztJQUVBO0lBQ0E7TUFDQTtJQUNBOztJQUVBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7SUFDQTtJQUNBO01BQ0FBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQTtjQUFBO2dCQUNBO2dCQUNBQztnQkFBQTtnQkFBQSxPQVVBQztjQUFBO2dCQUNBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBRUE7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFQTtJQUVBO0lBQ0FDO01BQ0E7UUFDQTtRQUNBO1VBQ0FELDZCQUNBRTtZQUNBQztVQUNBLEdBQ0FDO1lBQ0FDO1VBQ0E7UUFDQTtVQUNBRjtRQUNBO01BQ0E7SUFDQTtJQUVBRztNQUFBO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0EzRDtVQUNBNEQ7VUFDQUM7UUFDQTtRQUNBQztVQUNBO1FBQ0E7UUFDQUM7VUFDQTtZQUNBOztZQUVBO1lBQ0E7Y0FBQTtjQUNBO2dCQUFBO2NBQUE7Y0FDQTtZQUNBOztZQUVBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBOztZQUVBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBOztZQUVBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBOztZQUVBO1lBQ0E7O1lBRUE7WUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO1FBQ0FDO1VBQ0E7VUFDQVA7WUFDQVE7WUFDQUM7WUFDQUM7VUFDQTtRQUNBO1FBQ0FDO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUVBQztnQkFDQUM7Z0JBQ0FDLDhDQUVBO2dCQUNBQywrQ0FFQTtnQkFDQUM7Z0JBQ0ExRTtnQkFBQTtnQkFBQSxPQUVBa0Q7Y0FBQTtnQkFFQTtnQkFDQTtnQkFFQTs7Z0JBRUE7Z0JBQUEsTUFDQTtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUNBO2NBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFJQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0lBRUE7SUFDQXlCO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQTtjQUFBO2dCQUNBO2dCQUNBQztnQkFBQSxrQ0FFQTtrQkFDQUM7b0JBQ0FDO29CQUNBRjtvQkFDQWI7c0JBQ0E7c0JBQ0FWO29CQUNBO29CQUNBVztzQkFDQTtzQkFDQVQ7b0JBQ0E7a0JBQ0E7Z0JBQ0E7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0lBRUF3QjtNQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUE7TUFDQTtRQUNBdEI7VUFDQVE7VUFDQUM7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFFQWE7TUFBQTtNQUNBOztNQUVBO01BQ0EsZUFDQSw4Q0FDQSxzREFDQSw0Q0FDQSxnREFDQSw4REFDQTtNQUVBO1FBQ0F2QjtVQUNBUTtVQUNBQztVQUNBQztRQUNBO1FBQ0E7TUFDQTtNQUVBO01BRUFWO1FBQ0FRO1FBQ0FnQjtNQUNBOztNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFQTtRQUNBckI7UUFDQUM7UUFDQXFCO01BQ0E7O01BRUE7TUFDQXpCO1FBQ0FDO1FBQ0FDO1FBQ0EzRDtRQUNBOEQ7VUFDQTtVQUNBO1FBQ0E7UUFDQUM7VUFDQTtZQUNBTjtjQUNBUTtjQUNBQztjQUNBQztZQUNBOztZQUVBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBOztZQUVBO1lBQ0E7O1lBRUE7WUFDQTtVQUNBO1lBQ0FWO2NBQ0FRO2NBQ0FDO2NBQ0FDO1lBQ0E7VUFDQTtRQUNBO1FBQ0FIO1VBQ0FQO1lBQ0FRO1lBQ0FDO1lBQ0FDO1VBQ0E7UUFDQTtRQUNBQztVQUNBO1VBQ0FYO1FBQ0E7TUFDQTtJQUNBO0lBRUEwQjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTVCO1FBQ0FDO01BQ0E7SUFDQTtJQUVBNEI7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0PCEtLSDnjq/looPmlbDmja4gLS0+XG5cdFx0PHZpZXcgY2xhc3M9XCJlbnYtZGF0YS1jYXJkXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNhcmQtdGl0bGVcIj7njq/looPmlbDmja7nm5HmtYs8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImVudi1ncmlkXCI+XG5cdFx0XHRcdDwhLS0g56ys5LiA6KGMIC0tPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi1pdGVtXCIgOmNsYXNzPVwieyAnZXhjZWVkLWxpbWl0JzogdDEgPiB0MiB8fCB0MSA8IHQzIH1cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi1sYWJlbFwiPuW9k+WJjea4qeW6pjwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi12YWx1ZVwiPnt7IHQxIH19wrBDPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW52LXN0YXR1c1wiIHYtaWY9XCJ0MSA+IHQyXCI+6LaF6L+H5LiK6ZmQPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW52LXN0YXR1c1wiIHYtZWxzZS1pZj1cInQxIDwgdDNcIj7kvY7kuo7kuIvpmZA8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbnYtaXRlbVwiIDpjbGFzcz1cInsgJ2V4Y2VlZC1saW1pdCc6IGgxID4gaDIgfHwgaDEgPCBoMyB9XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbnYtbGFiZWxcIj7lvZPliY3mub/luqY8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbnYtdmFsdWVcIj57eyBoMSB9fSU8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbnYtc3RhdHVzXCIgdi1pZj1cImgxID4gaDJcIj7otoXov4fkuIrpmZA8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbnYtc3RhdHVzXCIgdi1lbHNlLWlmPVwiaDEgPCBoM1wiPuS9juS6juS4i+mZkDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PCEtLSDnrKzkuozooYwgLS0+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW52LWl0ZW1cIiA6Y2xhc3M9XCJ7ICdleGNlZWQtbGltaXQnOiBjMSA+IGMyIHx8IGMxIDwgYzMgfVwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW52LWxhYmVsXCI+5LqM5rCn5YyW56KzPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW52LXZhbHVlXCI+e3sgYzEgfX1wcG08L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbnYtc3RhdHVzXCIgdi1pZj1cImMxID4gYzJcIj7otoXov4fkuIrpmZA8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbnYtc3RhdHVzXCIgdi1lbHNlLWlmPVwiYzEgPCBjM1wiPuS9juS6juS4i+mZkDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi1pdGVtXCIgOmNsYXNzPVwieyAnZXhjZWVkLWxpbWl0JzogbDEgPiBsMiB8fCBsMSA8IGwzIH1cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi1sYWJlbFwiPuWFieeFp+W8uuW6pjwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi12YWx1ZVwiPnt7IGwxIH19bHV4PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW52LXN0YXR1c1wiIHYtaWY9XCJsMSA+IGwyXCI+6LaF6L+H5LiK6ZmQPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW52LXN0YXR1c1wiIHYtZWxzZS1pZj1cImwxIDwgbDNcIj7kvY7kuo7kuIvpmZA8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHRcdDwhLS0g56ys5LiJ6KGMIC0tPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi1pdGVtXCIgOmNsYXNzPVwieyAnZXhjZWVkLWxpbWl0JzogbzEgPiBvMiB8fCBvMSA8IG8zIH1cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi1sYWJlbFwiPueUsumGm+a1k+W6pjwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi12YWx1ZVwiPnt7IG8xIH19bWcvbcKzPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW52LXN0YXR1c1wiIHYtaWY9XCJvMSA+IG8yXCI+6LaF6L+H5LiK6ZmQPC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW52LXN0YXR1c1wiIHYtZWxzZS1pZj1cIm8xIDwgbzNcIj7kvY7kuo7kuIvpmZA8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbnYtaXRlbVwiIDpjbGFzcz1cInsgJ2V4Y2VlZC1saW1pdCc6IHAxID4gcDIgfHwgcDEgPCBwMyB9XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJlbnYtbGFiZWxcIj5QTTIuNTwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi12YWx1ZVwiPnt7IHAxIH19zrxnL23Cszwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi1zdGF0dXNcIiB2LWlmPVwicDEgPiBwMlwiPui2hei/h+S4iumZkDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImVudi1zdGF0dXNcIiB2LWVsc2UtaWY9XCJwMSA8IHAzXCI+5L2O5LqO5LiL6ZmQPC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdDwhLS0g5b2T5YmN6ZiI5YC85pi+56S6IC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwidGhyZXNob2xkLWRpc3BsYXktY2FyZFwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjYXJkLXRpdGxlXCI+5b2T5YmN6ZiI5YC86K6+572uPC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aHJlc2hvbGQtZ3JpZFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRocmVzaG9sZC1pdGVtXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aHJlc2hvbGQtbGFiZWxcIj7muKnluqbojIPlm7Q8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aHJlc2hvbGQtdmFsdWVcIj57eyB0MyB9fSB+IHt7IHQyIH19wrBDPC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhyZXNob2xkLWl0ZW1cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRocmVzaG9sZC1sYWJlbFwiPua5v+W6puiMg+WbtDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRocmVzaG9sZC12YWx1ZVwiPnt7IGgzIH19IH4ge3sgaDIgfX0lPC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhyZXNob2xkLWl0ZW1cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRocmVzaG9sZC1sYWJlbFwiPkNP4oKC6IyD5Zu0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhyZXNob2xkLXZhbHVlXCI+e3sgYzMgfX0gfiB7eyBjMiB9fXBwbTwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRocmVzaG9sZC1pdGVtXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aHJlc2hvbGQtbGFiZWxcIj7lhYnnhafojIPlm7Q8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aHJlc2hvbGQtdmFsdWVcIj57eyBsMyB9fSB+IHt7IGwyIH19bHV4PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhyZXNob2xkLWl0ZW1cIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRocmVzaG9sZC1sYWJlbFwiPueUsumGm+iMg+WbtDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRocmVzaG9sZC12YWx1ZVwiPnt7IG8zIH19IH4ge3sgbzIgfX1tZy9twrM8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aHJlc2hvbGQtaXRlbVwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGhyZXNob2xkLWxhYmVsXCI+UE0yLjXojIPlm7Q8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aHJlc2hvbGQtdmFsdWVcIj57eyBwMyB9fSB+IHt7IHAyIH19zrxnL23Cszwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHRcblx0XHQ8IS0tIOmYiOWAvOiuvue9ruWMuuWfnyAtLT5cblx0XHQ8dmlldyBjbGFzcz1cInRocmVzaG9sZC1hcmVhXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj7pmIjlgLzorr7nva48L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInRocmVzaG9sZC1mb3JtXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImlucHV0LWxhYmVsXCI+5rip5bqm5LiK6ZmQICjCsEMpPC90ZXh0PlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cInRlbXBVcHBlckxpbWl0XCIgOnBsYWNlaG9sZGVyPVwiJ+W9k+WJjTogJyArIHQyXCIgLz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpbnB1dC1sYWJlbFwiPua4qeW6puS4i+mZkCAowrBDKTwvdGV4dD5cblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJ0ZW1wTG93ZXJMaW1pdFwiIDpwbGFjZWhvbGRlcj1cIiflvZPliY06ICcgKyB0M1wiIC8+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm0tcm93XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpbnB1dC1sYWJlbFwiPua5v+W6puS4iumZkCAoJSk8L3RleHQ+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwiaHVtaWRpdHlVcHBlckxpbWl0XCIgOnBsYWNlaG9sZGVyPVwiJ+W9k+WJjTogJyArIGgyXCIgLz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpbnB1dC1sYWJlbFwiPua5v+W6puS4i+mZkCAoJSk8L3RleHQ+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwiaHVtaWRpdHlMb3dlckxpbWl0XCIgOnBsYWNlaG9sZGVyPVwiJ+W9k+WJjTogJyArIGgzXCIgLz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImlucHV0LWxhYmVsXCI+Q0/igoLkuIrpmZAgKHBwbSk8L3RleHQ+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwiY28yVXBwZXJMaW1pdFwiIDpwbGFjZWhvbGRlcj1cIiflvZPliY06ICcgKyBjMlwiIC8+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaW5wdXQtbGFiZWxcIj5DT+KCguS4i+mZkCAocHBtKTwvdGV4dD5cblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJjbzJMb3dlckxpbWl0XCIgOnBsYWNlaG9sZGVyPVwiJ+W9k+WJjTogJyArIGMzXCIgLz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImlucHV0LWxhYmVsXCI+5YWJ54Wn5LiK6ZmQIChsdXgpPC90ZXh0PlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cImxpZ2h0VXBwZXJMaW1pdFwiIDpwbGFjZWhvbGRlcj1cIiflvZPliY06ICcgKyBsMlwiIC8+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaW5wdXQtbGFiZWxcIj7lhYnnhafkuIvpmZAgKGx1eCk8L3RleHQ+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwibGlnaHRMb3dlckxpbWl0XCIgOnBsYWNlaG9sZGVyPVwiJ+W9k+WJjTogJyArIGwzXCIgLz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImlucHV0LWxhYmVsXCI+55Sy6Yab5LiK6ZmQIChtZy9twrMpPC90ZXh0PlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cIjAuMDFcIiB2LW1vZGVsPVwiZm9ybWFsZGVoeWRlVXBwZXJMaW1pdFwiIDpwbGFjZWhvbGRlcj1cIiflvZPliY06ICcgKyBvMlwiIC8+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaW5wdXQtbGFiZWxcIj7nlLLphpvkuIvpmZAgKG1nL23Csyk8L3RleHQ+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiMC4wMVwiIHYtbW9kZWw9XCJmb3JtYWxkZWh5ZGVMb3dlckxpbWl0XCIgOnBsYWNlaG9sZGVyPVwiJ+W9k+WJjTogJyArIG8zXCIgLz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImlucHV0LWxhYmVsXCI+UE0yLjXkuIrpmZAgKM68Zy9twrMpPC90ZXh0PlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiaW5wdXQtZmllbGRcIiB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cInBtMjVVcHBlckxpbWl0XCIgOnBsYWNlaG9sZGVyPVwiJ+W9k+WJjTogJyArIHAyXCIgLz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpbnB1dC1sYWJlbFwiPlBNMi415LiL6ZmQICjOvGcvbcKzKTwvdGV4dD5cblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImlucHV0LWZpZWxkXCIgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJwbTI1TG93ZXJMaW1pdFwiIDpwbGFjZWhvbGRlcj1cIiflvZPliY06ICcgKyBwM1wiIC8+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvbi1ncm91cFwiPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJzdWJtaXQtYnRuXCIgQGNsaWNrPVwic2V0VGhyZXNob2xkc1wiIDpkaXNhYmxlZD1cImlzU2V0dGluZ1RocmVzaG9sZHNcIj5cblx0XHRcdFx0XHRcdHt7IGlzU2V0dGluZ1RocmVzaG9sZHMgPyAn6K6+572u5LitLi4uJyA6ICforr7nva7miYDmnInpmIjlgLwnIH19XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInJlc2V0LWJ0blwiIEBjbGljaz1cInJlc2V0SW5wdXRzXCIgOmRpc2FibGVkPVwiaXNTZXR0aW5nVGhyZXNob2xkc1wiPlxuXHRcdFx0XHRcdFx06YeN572u6L6T5YWlXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0PCEtLSDmjqfliLbmjInpkq7ljLrln58gLS0+XG5cdFx0PHZpZXcgY2xhc3M9XCJjb250cm9sLWJ1dHRvbnNcIj5cblx0XHRcdDx2aWV3IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiaGlzdG9yeS1idG5cIiBAY2xpY2s9XCJuYXZpZ2F0ZVRvSGlzdG9yeVwiPlxuXHRcdFx0XHRcdOafpeeci+WOhuWPsuaVsOaNrlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInJlZnJlc2gtYnRuXCIgQGNsaWNrPVwibWFudWFsUmVmcmVzaFwiIDpkaXNhYmxlZD1cImlzUmVmcmVzaGluZ1wiPlxuXHRcdFx0XHRcdHt7IGlzUmVmcmVzaGluZyA/ICfliLfmlrDkuK0uLi4nIDogJ+WIt+aWsOaVsOaNricgfX1cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwibGFzdC11cGRhdGVcIj5cblx0XHRcdDx0ZXh0PuacgOWQjuabtOaWsDoge3sgbGFzdFVwZGF0ZVRpbWUgfX08L3RleHQ+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cInN0b3JhZ2Utc3RhdHVzXCIgdi1pZj1cImxhc3RTdG9yYWdlVGltZVwiPlxuXHRcdFx0XHTmnIDlkI7lrZjlgqg6IHt7IGxhc3RTdG9yYWdlVGltZSB9fVxuXHRcdFx0PC90ZXh0PlxuXHRcdDwvdmlldz5cblx0XHRcblx0XHQ8IS0tIOW8guW4uOaPkOekuiAtLT5cblx0XHQ8dmlldyB2LWlmPVwiaGFzRXhjZWVkZWRMaW1pdFwiIGNsYXNzPVwid2FybmluZy1iYW5uZXJcIj5cblx0XHRcdDx0ZXh0IGNsYXNzPVwid2FybmluZy10ZXh0XCI+4pqg77iPIOacieeOr+Wig+WPguaVsOi2heWHuumYiOWAvOiMg+WbtDwvdGV4dD5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBEQiBmcm9tIFwiQC9zcWxpdGUuanNcIjsgIC8vIOW8leWFpeWwgeijheeahCBzcWxpdGVcblx0XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Ly8g5b2T5YmN55uR5rWL5YC8XG5cdFx0XHRcdHQxOiAwLCAvLyDmuKnluqZcblx0XHRcdFx0aDE6IDAsIC8vIOa5v+W6plxuXHRcdFx0XHRjMTogMCwgLy8g5LqM5rCn5YyW56KzXG5cdFx0XHRcdGwxOiAwLCAvLyDlhYnnhaflvLrluqZcblx0XHRcdFx0bzE6IDAsIC8vIOeUsumGm1xuXHRcdFx0XHRwMTogMCwgLy8gUE0yLjVcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOmYiOWAvOS4iumZkFxuXHRcdFx0XHR0MjogMCwgLy8g5rip5bqm5LiK6ZmQXG5cdFx0XHRcdGgyOiAwLCAvLyDmub/luqbkuIrpmZBcblx0XHRcdFx0YzI6IDAsIC8vIOS6jOawp+WMlueis+S4iumZkFxuXHRcdFx0XHRsMjogMCwgLy8g5YWJ54Wn5by65bqm5LiK6ZmQXG5cdFx0XHRcdG8yOiAwLCAvLyDnlLLphpvkuIrpmZBcblx0XHRcdFx0cDI6IDAsIC8vIFBNMi415LiK6ZmQXG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDpmIjlgLzkuIvpmZBcblx0XHRcdFx0dDM6IDAsIC8vIOa4qeW6puS4i+mZkFxuXHRcdFx0XHRoMzogMCwgLy8g5rm/5bqm5LiL6ZmQXG5cdFx0XHRcdGMzOiAwLCAvLyDkuozmsKfljJbnorPkuIvpmZBcblx0XHRcdFx0bDM6IDAsIC8vIOWFieeFp+W8uuW6puS4i+mZkFxuXHRcdFx0XHRvMzogMCwgLy8g55Sy6Yab5LiL6ZmQXG5cdFx0XHRcdHAzOiAwLCAvLyBQTTIuNeS4i+mZkFxuXHRcdFx0XHRcblx0XHRcdFx0Ly8g6ZiI5YC86L6T5YWlXG5cdFx0XHRcdHRlbXBVcHBlckxpbWl0OiAnJyxcblx0XHRcdFx0dGVtcExvd2VyTGltaXQ6ICcnLFxuXHRcdFx0XHRodW1pZGl0eVVwcGVyTGltaXQ6ICcnLFxuXHRcdFx0XHRodW1pZGl0eUxvd2VyTGltaXQ6ICcnLFxuXHRcdFx0XHRjbzJVcHBlckxpbWl0OiAnJyxcblx0XHRcdFx0Y28yTG93ZXJMaW1pdDogJycsXG5cdFx0XHRcdGxpZ2h0VXBwZXJMaW1pdDogJycsXG5cdFx0XHRcdGxpZ2h0TG93ZXJMaW1pdDogJycsXG5cdFx0XHRcdGZvcm1hbGRlaHlkZVVwcGVyTGltaXQ6ICcnLFxuXHRcdFx0XHRmb3JtYWxkZWh5ZGVMb3dlckxpbWl0OiAnJyxcblx0XHRcdFx0cG0yNVVwcGVyTGltaXQ6ICcnLFxuXHRcdFx0XHRwbTI1TG93ZXJMaW1pdDogJycsXG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDns7vnu5/phY3nva5cblx0XHRcdFx0dG9rZW46ICd2ZXJzaW9uPTIwMTgtMTAtMzEmcmVzPXByb2R1Y3RzJTJGOW0yNzVpajVtUCUyRmRldmljZXMlMkZkMSZldD0xOTE5Mzk4ODIyJm1ldGhvZD1tZDUmc2lnbj03bHglMkZEVUNiYUJJdlAxc1k0WFN5S0ElM0QlM0QnLFxuXHRcdFx0XHRwcm9kdWN0SWQ6ICc5bTI3NWlqNW1QJyxcblx0XHRcdFx0ZGV2aWNlTmFtZTogJ2QxJyxcblx0XHRcdFx0bGFzdFVwZGF0ZVRpbWU6ICctLScsXG5cdFx0XHRcdGxhc3RTdG9yYWdlVGltZTogJycsXG5cdFx0XHRcdHVwZGF0ZUludGVydmFsSWQ6IG51bGwsXG5cdFx0XHRcdHN0b3JhZ2VJbnRlcnZhbElkOiBudWxsLFxuXHRcdFx0XHRpc1NldHRpbmdUaHJlc2hvbGRzOiBmYWxzZSxcblx0XHRcdFx0aXNSZWZyZXNoaW5nOiBmYWxzZSxcblx0XHRcdFx0c3RvcmFnZUNvdW50OiAwXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0aGFzRXhjZWVkZWRMaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHR0aGlzLnQxID4gdGhpcy50MiB8fCB0aGlzLnQxIDwgdGhpcy50MyB8fFxuXHRcdFx0XHRcdHRoaXMuaDEgPiB0aGlzLmgyIHx8IHRoaXMuaDEgPCB0aGlzLmgzIHx8XG5cdFx0XHRcdFx0dGhpcy5jMSA+IHRoaXMuYzIgfHwgdGhpcy5jMSA8IHRoaXMuYzMgfHxcblx0XHRcdFx0XHR0aGlzLmwxID4gdGhpcy5sMiB8fCB0aGlzLmwxIDwgdGhpcy5sMyB8fFxuXHRcdFx0XHRcdHRoaXMubzEgPiB0aGlzLm8yIHx8IHRoaXMubzEgPCB0aGlzLm8zIHx8XG5cdFx0XHRcdFx0dGhpcy5wMSA+IHRoaXMucDIgfHwgdGhpcy5wMSA8IHRoaXMucDNcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uU2hvdygpIHtcblx0XHRcdHRoaXMuaW5pdERhdGFiYXNlKCk7XG5cdFx0XHR0aGlzLmZldGNoRGV2aWNlRGF0YSgpO1xuXHRcdFx0XG5cdFx0XHQvLyDmr48z56eS6I635Y+W5LiA5qyh6K6+5aSH5pWw5o2uXG5cdFx0XHR0aGlzLnVwZGF0ZUludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZmV0Y2hEZXZpY2VEYXRhKCk7XG5cdFx0XHR9LCAzMDAwKTtcblx0XHRcdFxuXHRcdFx0Ly8g5q+PNjDnp5LlrZjlgqjkuIDmrKHmlbDmja7liLDmlbDmja7lupNcblx0XHRcdHRoaXMuc3RvcmFnZUludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2F2ZUN1cnJlbnREYXRhKCk7XG5cdFx0XHR9LCA2MDAwMCk7XG5cdFx0XHRcblx0XHRcdC8vIOmhtemdouaYvuekuuaXtueri+WNs+WtmOWCqOS4gOasoeaVsOaNrlxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2F2ZUN1cnJlbnREYXRhKCk7XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9LFxuXHRcdG9uSGlkZSgpIHtcblx0XHRcdGlmICh0aGlzLnVwZGF0ZUludGVydmFsSWQpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnVwZGF0ZUludGVydmFsSWQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3RvcmFnZUludGVydmFsSWQpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnN0b3JhZ2VJbnRlcnZhbElkKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOWIneWni+WMluaVsOaNruW6k1xuXHRcdFx0YXN5bmMgaW5pdERhdGFiYXNlKCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGF3YWl0IHRoaXMub3BlblNRTCgpO1xuXHRcdFx0XHRcdC8vIOWIm+W7uueOr+Wig+aVsOaNruiusOW9leihqFxuXHRcdFx0XHRcdGNvbnN0IGVudkRhdGFUYWJsZVNxbCA9IGBcImlkXCIgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCBcblx0XHRcdFx0XHRcdFwicmVjb3JkX3RpbWVcIiBURVhULCBcblx0XHRcdFx0XHRcdFwidGVtcGVyYXR1cmVcIiBSRUFMLCBcblx0XHRcdFx0XHRcdFwiaHVtaWRpdHlcIiBSRUFMLCBcblx0XHRcdFx0XHRcdFwiY28yXCIgUkVBTCwgXG5cdFx0XHRcdFx0XHRcImxpZ2h0XCIgUkVBTCwgXG5cdFx0XHRcdFx0XHRcImZvcm1hbGRlaHlkZVwiIFJFQUwsIFxuXHRcdFx0XHRcdFx0XCJwbTI1XCIgUkVBTCxcblx0XHRcdFx0XHRcdFwiZGF0ZVwiIFRFWFQsXG5cdFx0XHRcdFx0XHRcImV4Y2VlZF9saW1pdFwiIElOVEVHRVIgREVGQVVMVCAwYDtcblx0XHRcdFx0XHRhd2FpdCBEQi5jcmVhdGVUYWJsZShcImVudmlyb25tZW50X3JlY29yZHNcIiwgZW52RGF0YVRhYmxlU3FsKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn546v5aKD5pWw5o2u6K6w5b2V6KGo5Yib5bu65oiQ5YqfJyk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcign5pWw5o2u5bqT5Yid5aeL5YyW5aSx6LSlOicsIGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5omT5byA5pWw5o2u5bqTXG5cdFx0XHRvcGVuU1FMKCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdGxldCBvcGVuID0gREIuaXNPcGVuKCk7XG5cdFx0XHRcdFx0aWYgKCFvcGVuKSB7XG5cdFx0XHRcdFx0XHREQi5vcGVuU3FsaXRlKClcblx0XHRcdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlcyk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGZldGNoRGV2aWNlRGF0YSgpIHtcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vaW90LWFwaS5oZWNsb3Vkcy5jb20vdGhpbmdtb2RlbC9xdWVyeS1kZXZpY2UtcHJvcGVydHknLFxuXHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0cHJvZHVjdF9pZDogdGhpcy5wcm9kdWN0SWQsXG5cdFx0XHRcdFx0XHRkZXZpY2VfbmFtZTogdGhpcy5kZXZpY2VOYW1lXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdCdhdXRob3JpemF0aW9uJzogdGhpcy50b2tlblxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDAgJiYgcmVzLmRhdGEgJiYgcmVzLmRhdGEuZGF0YSkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vIOafpeaJvuaJgOaciemcgOimgeeahOWxnuaAp1xuXHRcdFx0XHRcdFx0XHRjb25zdCBmaW5kVmFsdWUgPSAoaWRlbnRpZmllciwgZGVmYXVsdFZhbHVlID0gMCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGl0ZW0gPSBkYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBpdGVtID8gTnVtYmVyKGl0ZW0udmFsdWUpIDogZGVmYXVsdFZhbHVlO1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8g5pu05paw5b2T5YmN55uR5rWL5YC8XG5cdFx0XHRcdFx0XHRcdHRoaXMudDEgPSBmaW5kVmFsdWUoJ3QxJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuaDEgPSBmaW5kVmFsdWUoJ2gxJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuYzEgPSBmaW5kVmFsdWUoJ2MxJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMubDEgPSBmaW5kVmFsdWUoJ2wxJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMubzEgPSBmaW5kVmFsdWUoJ28xJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMucDEgPSBmaW5kVmFsdWUoJ3AxJyk7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyDmm7TmlrDpmIjlgLzkuIrpmZBcblx0XHRcdFx0XHRcdFx0dGhpcy50MiA9IGZpbmRWYWx1ZSgndDInKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oMiA9IGZpbmRWYWx1ZSgnaDInKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5jMiA9IGZpbmRWYWx1ZSgnYzInKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5sMiA9IGZpbmRWYWx1ZSgnbDInKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5vMiA9IGZpbmRWYWx1ZSgnbzInKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5wMiA9IGZpbmRWYWx1ZSgncDInKTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vIOabtOaWsOmYiOWAvOS4i+mZkFxuXHRcdFx0XHRcdFx0XHR0aGlzLnQzID0gZmluZFZhbHVlKCd0MycpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmgzID0gZmluZFZhbHVlKCdoMycpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmMzID0gZmluZFZhbHVlKCdjMycpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmwzID0gZmluZFZhbHVlKCdsMycpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm8zID0gZmluZFZhbHVlKCdvMycpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnAzID0gZmluZFZhbHVlKCdwMycpO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8g5pu05paw5pyA5ZCO5pu05paw5pe26Ze0XG5cdFx0XHRcdFx0XHRcdHRoaXMubGFzdFVwZGF0ZVRpbWUgPSB0aGlzLmZvcm1hdFRpbWUobmV3IERhdGUoKSk7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyDmo4Dmn6XmmK/lkKbmnInlgLzotoXlh7rpmIjlgLxcblx0XHRcdFx0XHRcdFx0dGhpcy5jaGVja1RocmVzaG9sZHMoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaVsOaNruWksei0pTonLCByZXMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbDogKGVycikgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcign6I635Y+W6K6+5aSH5pWw5o2u5aSx6LSlOicsIGVycik7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfojrflj5bmlbDmja7lpLHotKUnLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDkv53lrZjlvZPliY3mlbDmja7liLDmlbDmja7lupNcblx0XHRcdGFzeW5jIHNhdmVDdXJyZW50RGF0YSgpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0Y29uc3QgcmVjb3JkVGltZSA9IHRoaXMuZm9ybWF0RGF0ZVRpbWUoY3VycmVudFRpbWUpO1xuXHRcdFx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gdGhpcy5mb3JtYXREYXRlKGN1cnJlbnRUaW1lKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyDmo4Dmn6XmmK/lkKbmnInlvILluLjmlbDmja5cblx0XHRcdFx0XHRjb25zdCBleGNlZWRMaW1pdCA9IHRoaXMuaGFzRXhjZWVkZWRMaW1pdCA/IDEgOiAwO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIOWHhuWkh+aPkuWFpeaVsOaNrlxuXHRcdFx0XHRcdGNvbnN0IGNvbmRpdGlvbiA9ICdcInJlY29yZF90aW1lXCIsXCJ0ZW1wZXJhdHVyZVwiLFwiaHVtaWRpdHlcIixcImNvMlwiLFwibGlnaHRcIixcImZvcm1hbGRlaHlkZVwiLFwicG0yNVwiLFwiZGF0ZVwiLFwiZXhjZWVkX2xpbWl0XCInO1xuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBgJyR7cmVjb3JkVGltZX0nLCR7dGhpcy50MX0sJHt0aGlzLmgxfSwke3RoaXMuYzF9LCR7dGhpcy5sMX0sJHt0aGlzLm8xfSwke3RoaXMucDF9LCcke2N1cnJlbnREYXRlfScsJHtleGNlZWRMaW1pdH1gO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGF3YWl0IERCLmluc2VydFRhYmxlRGF0YShcImVudmlyb25tZW50X3JlY29yZHNcIiwgZGF0YSwgY29uZGl0aW9uKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLnN0b3JhZ2VDb3VudCsrO1xuXHRcdFx0XHRcdHRoaXMubGFzdFN0b3JhZ2VUaW1lID0gdGhpcy5mb3JtYXRUaW1lKGN1cnJlbnRUaW1lKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhg56ysJHt0aGlzLnN0b3JhZ2VDb3VudH3mrKHlrZjlgqjnjq/looPmlbDmja7miJDlip9gKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyDlpoLmnpzmlbDmja7otoXov4cxMDAw5p2h77yM5Yig6Zmk5pyA5pep55qE5pWw5o2uXG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RvcmFnZUNvdW50ICUgMTAgPT09IDApIHtcblx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuY2xlYW5PbGREYXRhKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ+WtmOWCqOeOr+Wig+aVsOaNruWksei0pTonLCBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOa4heeQhuaXp+aVsOaNru+8jOS/neeVmeacgOi/kTEwMDDmnaFcblx0XHRcdGFzeW5jIGNsZWFuT2xkRGF0YSgpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRhd2FpdCB0aGlzLm9wZW5TUUwoKTtcblx0XHRcdFx0XHQvLyDliKDpmaRpZOacgOWwj+eahDEwMOadoeaVsOaNrlxuXHRcdFx0XHRcdGNvbnN0IHNxbCA9IGBERUxFVEUgRlJPTSBlbnZpcm9ubWVudF9yZWNvcmRzIFdIRVJFIGlkIElOIChTRUxFQ1QgaWQgRlJPTSBlbnZpcm9ubWVudF9yZWNvcmRzIE9SREVSIEJZIGlkIEFTQyBMSU1JVCAxMDApYDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0cGx1cy5zcWxpdGUuZXhlY3V0ZVNxbCh7XG5cdFx0XHRcdFx0XHRcdG5hbWU6IERCLmRiTmFtZSxcblx0XHRcdFx0XHRcdFx0c3FsOiBzcWwsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5riF55CG5pen5pWw5o2u5oiQ5YqfJyk7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcign5riF55CG5pen5pWw5o2u5aSx6LSlOicsIGVycik7XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ+a4heeQhuaXp+aVsOaNruW8guW4uDonLCBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGNoZWNrVGhyZXNob2xkcygpIHtcblx0XHRcdFx0Ly8g5qOA5p+l5ZCE6aG55oyH5qCH5bm25o+Q56S6XG5cdFx0XHRcdGNvbnN0IHdhcm5pbmdzID0gW107XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy50MSA+IHRoaXMudDIpIHdhcm5pbmdzLnB1c2goJ+a4qeW6pui2hei/h+S4iumZkCcpO1xuXHRcdFx0XHRpZiAodGhpcy50MSA8IHRoaXMudDMpIHdhcm5pbmdzLnB1c2goJ+a4qeW6puS9juS6juS4i+mZkCcpO1xuXHRcdFx0XHRpZiAodGhpcy5oMSA+IHRoaXMuaDIpIHdhcm5pbmdzLnB1c2goJ+a5v+W6pui2hei/h+S4iumZkCcpO1xuXHRcdFx0XHRpZiAodGhpcy5oMSA8IHRoaXMuaDMpIHdhcm5pbmdzLnB1c2goJ+a5v+W6puS9juS6juS4i+mZkCcpO1xuXHRcdFx0XHRpZiAodGhpcy5jMSA+IHRoaXMuYzIpIHdhcm5pbmdzLnB1c2goJ+S6jOawp+WMlueis+i2hei/h+S4iumZkCcpO1xuXHRcdFx0XHRpZiAodGhpcy5jMSA8IHRoaXMuYzMpIHdhcm5pbmdzLnB1c2goJ+S6jOawp+WMlueis+S9juS6juS4i+mZkCcpO1xuXHRcdFx0XHRpZiAodGhpcy5sMSA+IHRoaXMubDIpIHdhcm5pbmdzLnB1c2goJ+WFieeFp+W8uuW6pui2hei/h+S4iumZkCcpO1xuXHRcdFx0XHRpZiAodGhpcy5sMSA8IHRoaXMubDMpIHdhcm5pbmdzLnB1c2goJ+WFieeFp+W8uuW6puS9juS6juS4i+mZkCcpO1xuXHRcdFx0XHRpZiAodGhpcy5vMSA+IHRoaXMubzIpIHdhcm5pbmdzLnB1c2goJ+eUsumGm+a1k+W6pui2hei/h+S4iumZkCcpO1xuXHRcdFx0XHRpZiAodGhpcy5vMSA8IHRoaXMubzMpIHdhcm5pbmdzLnB1c2goJ+eUsumGm+a1k+W6puS9juS6juS4i+mZkCcpO1xuXHRcdFx0XHRpZiAodGhpcy5wMSA+IHRoaXMucDIpIHdhcm5pbmdzLnB1c2goJ1BNMi416LaF6L+H5LiK6ZmQJyk7XG5cdFx0XHRcdGlmICh0aGlzLnAxIDwgdGhpcy5wMykgd2FybmluZ3MucHVzaCgnUE0yLjXkvY7kuo7kuIvpmZAnKTtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWmguaenOacieitpuWRiu+8jOaYvuekuuesrOS4gOadoVxuXHRcdFx0XHRpZiAod2FybmluZ3MubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IHdhcm5pbmdzWzBdLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0c2V0VGhyZXNob2xkcygpIHtcblx0XHRcdFx0aWYgKHRoaXMuaXNTZXR0aW5nVGhyZXNob2xkcykgcmV0dXJuO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5qOA5p+l5piv5ZCm5pyJ6L6T5YWl5YC8XG5cdFx0XHRcdGNvbnN0IGhhc0lucHV0ID0gXG5cdFx0XHRcdFx0dGhpcy50ZW1wVXBwZXJMaW1pdCB8fCB0aGlzLnRlbXBMb3dlckxpbWl0IHx8XG5cdFx0XHRcdFx0dGhpcy5odW1pZGl0eVVwcGVyTGltaXQgfHwgdGhpcy5odW1pZGl0eUxvd2VyTGltaXQgfHxcblx0XHRcdFx0XHR0aGlzLmNvMlVwcGVyTGltaXQgfHwgdGhpcy5jbzJMb3dlckxpbWl0IHx8XG5cdFx0XHRcdFx0dGhpcy5saWdodFVwcGVyTGltaXQgfHwgdGhpcy5saWdodExvd2VyTGltaXQgfHxcblx0XHRcdFx0XHR0aGlzLmZvcm1hbGRlaHlkZVVwcGVyTGltaXQgfHwgdGhpcy5mb3JtYWxkZWh5ZGVMb3dlckxpbWl0IHx8XG5cdFx0XHRcdFx0dGhpcy5wbTI1VXBwZXJMaW1pdCB8fCB0aGlzLnBtMjVMb3dlckxpbWl0O1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCFoYXNJbnB1dCkge1xuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfor7foh7PlsJHloavlhpnkuIDkuKrpmIjlgLwnLFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuaXNTZXR0aW5nVGhyZXNob2xkcyA9IHRydWU7XG5cdFx0XHRcdFxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHRcdHRpdGxlOiAn6K6+572u6ZiI5YC85LitLi4uJyxcblx0XHRcdFx0XHRtYXNrOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5p6E5bu65Y+C5pWw5a+56LGh77yM5Y+q5YyF5ZCr5pyJ5YC855qE5a2X5q61XG5cdFx0XHRcdGNvbnN0IHBhcmFtcyA9IHt9O1xuXHRcdFx0XHRpZiAodGhpcy50ZW1wVXBwZXJMaW1pdCkgcGFyYW1zLnQyID0gcGFyc2VGbG9hdCh0aGlzLnRlbXBVcHBlckxpbWl0KTtcblx0XHRcdFx0aWYgKHRoaXMudGVtcExvd2VyTGltaXQpIHBhcmFtcy50MyA9IHBhcnNlRmxvYXQodGhpcy50ZW1wTG93ZXJMaW1pdCk7XG5cdFx0XHRcdGlmICh0aGlzLmh1bWlkaXR5VXBwZXJMaW1pdCkgcGFyYW1zLmgyID0gcGFyc2VGbG9hdCh0aGlzLmh1bWlkaXR5VXBwZXJMaW1pdCk7XG5cdFx0XHRcdGlmICh0aGlzLmh1bWlkaXR5TG93ZXJMaW1pdCkgcGFyYW1zLmgzID0gcGFyc2VGbG9hdCh0aGlzLmh1bWlkaXR5TG93ZXJMaW1pdCk7XG5cdFx0XHRcdGlmICh0aGlzLmNvMlVwcGVyTGltaXQpIHBhcmFtcy5jMiA9IHBhcnNlRmxvYXQodGhpcy5jbzJVcHBlckxpbWl0KTtcblx0XHRcdFx0aWYgKHRoaXMuY28yTG93ZXJMaW1pdCkgcGFyYW1zLmMzID0gcGFyc2VGbG9hdCh0aGlzLmNvMkxvd2VyTGltaXQpO1xuXHRcdFx0XHRpZiAodGhpcy5saWdodFVwcGVyTGltaXQpIHBhcmFtcy5sMiA9IHBhcnNlRmxvYXQodGhpcy5saWdodFVwcGVyTGltaXQpO1xuXHRcdFx0XHRpZiAodGhpcy5saWdodExvd2VyTGltaXQpIHBhcmFtcy5sMyA9IHBhcnNlRmxvYXQodGhpcy5saWdodExvd2VyTGltaXQpO1xuXHRcdFx0XHRpZiAodGhpcy5mb3JtYWxkZWh5ZGVVcHBlckxpbWl0KSBwYXJhbXMubzIgPSBwYXJzZUZsb2F0KHRoaXMuZm9ybWFsZGVoeWRlVXBwZXJMaW1pdCk7XG5cdFx0XHRcdGlmICh0aGlzLmZvcm1hbGRlaHlkZUxvd2VyTGltaXQpIHBhcmFtcy5vMyA9IHBhcnNlRmxvYXQodGhpcy5mb3JtYWxkZWh5ZGVMb3dlckxpbWl0KTtcblx0XHRcdFx0aWYgKHRoaXMucG0yNVVwcGVyTGltaXQpIHBhcmFtcy5wMiA9IHBhcnNlRmxvYXQodGhpcy5wbTI1VXBwZXJMaW1pdCk7XG5cdFx0XHRcdGlmICh0aGlzLnBtMjVMb3dlckxpbWl0KSBwYXJhbXMucDMgPSBwYXJzZUZsb2F0KHRoaXMucG0yNUxvd2VyTGltaXQpO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgcmVxdWVzdERhdGEgPSB7XG5cdFx0XHRcdFx0cHJvZHVjdF9pZDogdGhpcy5wcm9kdWN0SWQsXG5cdFx0XHRcdFx0ZGV2aWNlX25hbWU6IHRoaXMuZGV2aWNlTmFtZSxcblx0XHRcdFx0XHRwYXJhbXM6IHBhcmFtc1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g5Y+R6YCB6ZiI5YC86K6+572u5oyH5Luk5YiwT25lTkVUXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0XHR1cmw6ICdodHRwczovL2lvdC1hcGkuaGVjbG91ZHMuY29tL3RoaW5nbW9kZWwvc2V0LWRldmljZS1wcm9wZXJ0eScsXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0ZGF0YTogcmVxdWVzdERhdGEsXG5cdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHQnYXV0aG9yaXphdGlvbic6IHRoaXMudG9rZW4sXG5cdFx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+mYiOWAvOiuvue9ruaIkOWKnycsXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8g5pu05paw5pys5Zyw5pWw5o2uXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnRlbXBVcHBlckxpbWl0KSB0aGlzLnQyID0gcGFyc2VGbG9hdCh0aGlzLnRlbXBVcHBlckxpbWl0KTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMudGVtcExvd2VyTGltaXQpIHRoaXMudDMgPSBwYXJzZUZsb2F0KHRoaXMudGVtcExvd2VyTGltaXQpO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5odW1pZGl0eVVwcGVyTGltaXQpIHRoaXMuaDIgPSBwYXJzZUZsb2F0KHRoaXMuaHVtaWRpdHlVcHBlckxpbWl0KTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaHVtaWRpdHlMb3dlckxpbWl0KSB0aGlzLmgzID0gcGFyc2VGbG9hdCh0aGlzLmh1bWlkaXR5TG93ZXJMaW1pdCk7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmNvMlVwcGVyTGltaXQpIHRoaXMuYzIgPSBwYXJzZUZsb2F0KHRoaXMuY28yVXBwZXJMaW1pdCk7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmNvMkxvd2VyTGltaXQpIHRoaXMuYzMgPSBwYXJzZUZsb2F0KHRoaXMuY28yTG93ZXJMaW1pdCk7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmxpZ2h0VXBwZXJMaW1pdCkgdGhpcy5sMiA9IHBhcnNlRmxvYXQodGhpcy5saWdodFVwcGVyTGltaXQpO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5saWdodExvd2VyTGltaXQpIHRoaXMubDMgPSBwYXJzZUZsb2F0KHRoaXMubGlnaHRMb3dlckxpbWl0KTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZm9ybWFsZGVoeWRlVXBwZXJMaW1pdCkgdGhpcy5vMiA9IHBhcnNlRmxvYXQodGhpcy5mb3JtYWxkZWh5ZGVVcHBlckxpbWl0KTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZm9ybWFsZGVoeWRlTG93ZXJMaW1pdCkgdGhpcy5vMyA9IHBhcnNlRmxvYXQodGhpcy5mb3JtYWxkZWh5ZGVMb3dlckxpbWl0KTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucG0yNVVwcGVyTGltaXQpIHRoaXMucDIgPSBwYXJzZUZsb2F0KHRoaXMucG0yNVVwcGVyTGltaXQpO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wbTI1TG93ZXJMaW1pdCkgdGhpcy5wMyA9IHBhcnNlRmxvYXQodGhpcy5wbTI1TG93ZXJMaW1pdCk7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyDmuIXnqbrovpPlhaXmoYZcblx0XHRcdFx0XHRcdFx0dGhpcy5yZXNldElucHV0cygpO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8g5pu05paw5pyA5ZCO5pu05paw5pe26Ze0XG5cdFx0XHRcdFx0XHRcdHRoaXMubGFzdFVwZGF0ZVRpbWUgPSB0aGlzLmZvcm1hdFRpbWUobmV3IERhdGUoKSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+iuvue9ruWksei0pe+8jOivt+mHjeivlScsXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbDogKGVycikgPT4ge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5pc1NldHRpbmdUaHJlc2hvbGRzID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cmVzZXRJbnB1dHMoKSB7XG5cdFx0XHRcdHRoaXMudGVtcFVwcGVyTGltaXQgPSAnJztcblx0XHRcdFx0dGhpcy50ZW1wTG93ZXJMaW1pdCA9ICcnO1xuXHRcdFx0XHR0aGlzLmh1bWlkaXR5VXBwZXJMaW1pdCA9ICcnO1xuXHRcdFx0XHR0aGlzLmh1bWlkaXR5TG93ZXJMaW1pdCA9ICcnO1xuXHRcdFx0XHR0aGlzLmNvMlVwcGVyTGltaXQgPSAnJztcblx0XHRcdFx0dGhpcy5jbzJMb3dlckxpbWl0ID0gJyc7XG5cdFx0XHRcdHRoaXMubGlnaHRVcHBlckxpbWl0ID0gJyc7XG5cdFx0XHRcdHRoaXMubGlnaHRMb3dlckxpbWl0ID0gJyc7XG5cdFx0XHRcdHRoaXMuZm9ybWFsZGVoeWRlVXBwZXJMaW1pdCA9ICcnO1xuXHRcdFx0XHR0aGlzLmZvcm1hbGRlaHlkZUxvd2VyTGltaXQgPSAnJztcblx0XHRcdFx0dGhpcy5wbTI1VXBwZXJMaW1pdCA9ICcnO1xuXHRcdFx0XHR0aGlzLnBtMjVMb3dlckxpbWl0ID0gJyc7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRtYW51YWxSZWZyZXNoKCkge1xuXHRcdFx0XHR0aGlzLmlzUmVmcmVzaGluZyA9IHRydWU7XG5cdFx0XHRcdHRoaXMuZmV0Y2hEZXZpY2VEYXRhKCk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvLyDot7PovazliLDljoblj7LmlbDmja7pobXpnaJcblx0XHRcdG5hdmlnYXRlVG9IaXN0b3J5KCkge1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2Vudkhpc3RvcnkvZW52SGlzdG9yeSdcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRmb3JtYXRUaW1lKGRhdGUpIHtcblx0XHRcdFx0Y29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXHRcdFx0XHRjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXHRcdFx0XHRjb25zdCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXHRcdFx0XHRyZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRmb3JtYXREYXRlKGRhdGUpIHtcblx0XHRcdFx0Y29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0Y29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXHRcdFx0XHRjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdFx0XHRcdHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Zm9ybWF0RGF0ZVRpbWUoZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gYCR7dGhpcy5mb3JtYXREYXRlKGRhdGUpfSAke3RoaXMuZm9ybWF0VGltZShkYXRlKX1gO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LmNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmE7XG5cdFx0cGFkZGluZzogMjBycHg7XG5cdFx0bWluLWhlaWdodDogMTAwdmg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR9XG5cdFxuXHQuZW52LWRhdGEtY2FyZCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0XHRib3gtc2hhZG93OiAwIDZycHggMThycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcblx0XHRwYWRkaW5nOiAzMHJweDtcblx0XHRtYXJnaW4tYm90dG9tOiAyNXJweDtcblx0fVxuXHRcblx0LnRocmVzaG9sZC1kaXNwbGF5LWNhcmQge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdFx0Ym94LXNoYWRvdzogMCA2cnB4IDE4cnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5cdFx0cGFkZGluZzogMzBycHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjVycHg7XG5cdH1cblx0XG5cdC5jYXJkLXRpdGxlIHtcblx0XHRmb250LXNpemU6IDM0cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGNvbG9yOiAjMmMzZTUwO1xuXHRcdG1hcmdpbi1ib3R0b206IDI1cnB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZy1ib3R0b206IDE1cnB4O1xuXHR9XG5cdFxuXHQuY2FyZC10aXRsZTo6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHR3aWR0aDogNjBycHg7XG5cdFx0aGVpZ2h0OiA2cnB4O1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzM0OThkYiwgIzJlY2M3MSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogM3JweDtcblx0fVxuXHRcblx0LmVudi1ncmlkIHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG5cdFx0Z2FwOiAyMHJweDtcblx0fVxuXHRcblx0LmVudi1pdGVtIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRwYWRkaW5nOiAyNXJweCAxNXJweDtcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3JkZXI6IDJycHggc29saWQgI2U5ZWNlZjtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0fVxuXHRcblx0LmVudi1pdGVtLmV4Y2VlZC1saW1pdCB7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjZTc0YzNjO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmVhZWE7XG5cdFx0Ym94LXNoYWRvdzogMCA0cnB4IDEycnB4IHJnYmEoMjMxLCA3NiwgNjAsIDAuMik7XG5cdH1cblx0XG5cdC5lbnYtbGFiZWwge1xuXHRcdGZvbnQtc2l6ZTogMjZycHg7XG5cdFx0Y29sb3I6ICM2Yzc1N2Q7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTJycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXHRcblx0LmVudi12YWx1ZSB7XG5cdFx0Zm9udC1zaXplOiAzNnJweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRjb2xvcjogIzJjM2U1MDtcblx0fVxuXHRcblx0LmVudi1zdGF0dXMge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDEwcnB4O1xuXHRcdHJpZ2h0OiAxMHJweDtcblx0XHRmb250LXNpemU6IDIwcnB4O1xuXHRcdGNvbG9yOiAjZTc0YzNjO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmVhZWE7XG5cdFx0cGFkZGluZzogNHJweCAxMHJweDtcblx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR9XG5cdFxuXHQudGhyZXNob2xkLWdyaWQge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcblx0XHRnYXA6IDE4cnB4O1xuXHR9XG5cdFxuXHQudGhyZXNob2xkLWl0ZW0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDIwcnB4IDE1cnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNlOWVjZWY7XG5cdH1cblx0XG5cdC50aHJlc2hvbGQtbGFiZWwge1xuXHRcdGZvbnQtc2l6ZTogMjRycHg7XG5cdFx0Y29sb3I6ICM2Yzc1N2Q7XG5cdFx0bWFyZ2luLWJvdHRvbTogOHJweDtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHR9XG5cdFxuXHQudGhyZXNob2xkLXZhbHVlIHtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGNvbG9yOiAjMmMzZTUwO1xuXHR9XG5cdFxuXHQudGhyZXNob2xkLWFyZWEge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdFx0Ym94LXNoYWRvdzogMCA2cnB4IDE4cnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5cdFx0cGFkZGluZzogMzBycHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjVycHg7XG5cdH1cblx0XG5cdC5zZWN0aW9uLXRpdGxlIHtcblx0XHRmb250LXNpemU6IDM0cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGNvbG9yOiAjMmMzZTUwO1xuXHRcdG1hcmdpbi1ib3R0b206IDI1cnB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZy1ib3R0b206IDE1cnB4O1xuXHR9XG5cdFxuXHQuc2VjdGlvbi10aXRsZTo6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHR3aWR0aDogNjBycHg7XG5cdFx0aGVpZ2h0OiA2cnB4O1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzM0OThkYiwgIzJlY2M3MSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogM3JweDtcblx0fVxuXHRcblx0LnRocmVzaG9sZC1mb3JtIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblx0XG5cdC5mb3JtLXJvdyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XG5cdH1cblx0XG5cdC5pbnB1dC1ncm91cCB7XG5cdFx0ZmxleDogMTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0bWFyZ2luOiAwIDEwcnB4O1xuXHR9XG5cdFxuXHQuaW5wdXQtbGFiZWwge1xuXHRcdGZvbnQtc2l6ZTogMjZycHg7XG5cdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTJycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXHRcblx0LmlucHV0LWZpZWxkIHtcblx0XHRoZWlnaHQ6IDgwcnB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XG5cdFx0cGFkZGluZzogMCAyMHJweDtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG5cdH1cblx0XG5cdC5pbnB1dC1maWVsZDpmb2N1cyB7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdH1cblx0XG5cdC5idXR0b24tZ3JvdXAge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xuXHR9XG5cdFxuXHQuc3VibWl0LWJ0biB7XG5cdFx0ZmxleDogMTtcblx0XHRoZWlnaHQ6IDkwcnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDQ1cnB4O1xuXHRcdGZvbnQtc2l6ZTogMzJycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzJlY2M3MSwgIzI3YWU2MCk7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbjogMCAxMHJweDtcblx0XHRib3gtc2hhZG93OiAwIDZycHggMTVycHggcmdiYSg0NiwgMjA0LCAxMTMsIDAuMyk7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdH1cblx0XG5cdC5zdWJtaXQtYnRuOmFjdGl2ZSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcblx0XHRib3gtc2hhZG93OiAwIDNycHggOHJweCByZ2JhKDQ2LCAyMDQsIDExMywgMC4zKTtcblx0fVxuXHRcblx0LnN1Ym1pdC1idG5bZGlzYWJsZWRdIHtcblx0XHRiYWNrZ3JvdW5kOiAjYmRjM2M3O1xuXHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdH1cblx0XG5cdC5yZXNldC1idG4ge1xuXHRcdGZsZXg6IDE7XG5cdFx0aGVpZ2h0OiA5MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiA0NXJweDtcblx0XHRmb250LXNpemU6IDMycnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGNvbG9yOiAjNmM3NTdkO1xuXHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkICNkZWUyZTY7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbjogMCAxMHJweDtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0fVxuXHRcblx0LnJlc2V0LWJ0bjphY3RpdmUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcblx0fVxuXHRcblx0LnJlc2V0LWJ0bltkaXNhYmxlZF0ge1xuXHRcdGNvbG9yOiAjYmRjM2M3O1xuXHR9XG5cdFxuXHQuY29udHJvbC1idXR0b25zIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tYm90dG9tOiAyNXJweDtcblx0fVxuXHRcblx0LmJ1dHRvbi1yb3cge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGdhcDogMjBycHg7XG5cdH1cblx0XG5cdC5oaXN0b3J5LWJ0biwgLnJlZnJlc2gtYnRuIHtcblx0XHRmbGV4OiAxO1xuXHRcdGhlaWdodDogOTBycHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNDVycHg7XG5cdFx0Zm9udC1zaXplOiAzMnJweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0fVxuXHRcblx0Lmhpc3RvcnktYnRuIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkY5NTAwLCAjRkZCNDQ0KTtcblx0XHRib3gtc2hhZG93OiAwIDZycHggMTVycHggcmdiYSgyNTUsIDE0OSwgMCwgMC4zKTtcblx0fVxuXHRcblx0LnJlZnJlc2gtYnRuIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiLCAjMjk4MGI5KTtcblx0XHRib3gtc2hhZG93OiAwIDZycHggMTVycHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XG5cdH1cblx0XG5cdC5oaXN0b3J5LWJ0bjphY3RpdmUsIC5yZWZyZXNoLWJ0bjphY3RpdmUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG5cdH1cblx0XG5cdC5yZWZyZXNoLWJ0bltkaXNhYmxlZF0ge1xuXHRcdGJhY2tncm91bmQ6ICNjY2NjY2M7XG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0fVxuXHRcblx0Lmxhc3QtdXBkYXRlIHtcblx0XHRtYXJnaW4tdG9wOiAxNXJweDtcblx0XHRmb250LXNpemU6IDI0cnB4O1xuXHRcdGNvbG9yOiAjOTVhNWE2O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0Z2FwOiA1cnB4O1xuXHR9XG5cdFxuXHQuc3RvcmFnZS1zdGF0dXMge1xuXHRcdGZvbnQtc2l6ZTogMjJycHg7XG5cdFx0Y29sb3I6ICMyN2FlNjA7XG5cdH1cblx0XG5cdC53YXJuaW5nLWJhbm5lciB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xuXHRcdHBhZGRpbmc6IDI1cnB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR6LWluZGV4OiAxMDA7XG5cdFx0YW5pbWF0aW9uOiBzbGlkZVVwIDAuNXMgZWFzZS1vdXQ7XG5cdH1cblx0XG5cdC53YXJuaW5nLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMjhycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0dGV4dC1zaGFkb3c6IDAgMnJweCA0cnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0fVxuXHRcblx0QGtleWZyYW1lcyBzbGlkZVVwIHtcblx0XHRmcm9tIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcblx0XHR9XG5cdFx0dG8ge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdH1cblx0fVxuXHRcblx0Lyog5ZON5bqU5byP6LCD5pW0ICovXG5cdEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuXHRcdC5mb3JtLXJvdyB7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdH1cblx0XHRcblx0XHQuaW5wdXQtZ3JvdXAge1xuXHRcdFx0bWFyZ2luOiAwIDAgMjBycHggMDtcblx0XHR9XG5cdFx0XG5cdFx0LmJ1dHRvbi1ncm91cCB7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdH1cblx0XHRcblx0XHQuc3VibWl0LWJ0biwgLnJlc2V0LWJ0biB7XG5cdFx0XHRtYXJnaW46IDAgMCAxNXJweCAwO1xuXHRcdH1cblx0XHRcblx0XHQuZW52LWdyaWQsIC50aHJlc2hvbGQtZ3JpZCB7XG5cdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuXHRcdH1cblx0fVxuXHRcblx0Lyog6Ziy5q2i6L6T5YWl5qGG6KKr6ZSu55uY6YGu5oyhICovXG5cdC50aHJlc2hvbGQtZm9ybSB7XG5cdFx0cGFkZGluZy1ib3R0b206IDMwcnB4O1xuXHR9XG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 13 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 14)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 14 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/*!*****************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/sqlite.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  dbName: 'chat',\n  // 数据库名称\n  dbPath: '_doc/chat.db',\n  // 数据库地址,推荐以下划线为开头   _doc/xxx.db\n  // 判断数据库是否打开\n  isOpen: function isOpen() {\n    // 数据库打开了就返回 true,否则返回 false\n    var open = plus.sqlite.isOpenDatabase({\n      name: this.dbName,\n      // 数据库名称\n      path: this.dbPath // 数据库地址\n    });\n\n    return open;\n  },\n  // 创建数据库 或 有该数据库就打开\n  openSqlite: function openSqlite() {\n    var _this = this;\n    return new Promise(function (resolve, reject) {\n      // 打开数据库\n      plus.sqlite.openDatabase({\n        name: _this.dbName,\n        path: _this.dbPath,\n        success: function success(e) {\n          resolve(e); // 成功回调\n        },\n        fail: function fail(e) {\n          reject(e); // 失败回调\n        }\n      });\n    });\n  },\n  // 关闭数据库\n  closeSqlite: function closeSqlite() {\n    var _this2 = this;\n    return new Promise(function (resolve, reject) {\n      plus.sqlite.closeDatabase({\n        name: _this2.dbName,\n        success: function success(e) {\n          resolve(e);\n        },\n        fail: function fail(e) {\n          reject(e);\n        }\n      });\n    });\n  },\n  // 数据库建表 sql:'CREATE TABLE IF NOT EXISTS dbTable(\"id\" varchar(50),\"name\" TEXT) \n  // 创建 CREATE TABLE IF NOT EXISTS 、 dbTable 是表名，不能用数字开头、括号里是表格的表头\n  createTable: function createTable(dbTable, data) {\n    var _this3 = this;\n    return new Promise(function (resolve, reject) {\n      // executeSql: 执行增删改等操作的SQL语句\n      plus.sqlite.executeSql({\n        name: _this3.dbName,\n        sql: \"CREATE TABLE IF NOT EXISTS \".concat(dbTable, \"(\").concat(data, \")\"),\n        success: function success(e) {\n          resolve(e);\n        },\n        fail: function fail(e) {\n          reject(e);\n        }\n      });\n    });\n  },\n  // 数据库删表 sql:'DROP TABLE dbTable'\n  dropTable: function dropTable(dbTable) {\n    var _this4 = this;\n    return new Promise(function (resolve, reject) {\n      plus.sqlite.executeSql({\n        name: _this4.dbName,\n        sql: \"DROP TABLE \".concat(dbTable),\n        success: function success(e) {\n          resolve(e);\n        },\n        fail: function fail(e) {\n          reject(e);\n        }\n      });\n    });\n  },\n  // 向表格里添加数据 sql:'INSERT INTO dbTable VALUES('x','x','x')'   对应新增\n  // 或者 sql:'INSERT INTO dbTable ('x','x','x') VALUES('x','x','x')'   具体新增\n  // 插入 INSERT INTO  、 dbTable 是表名、根据表头列名插入列值\n  insertTableData: function insertTableData(dbTable, data, condition) {\n    var _this5 = this;\n    // 判断有没有传参\n    if (dbTable !== undefined && data !== undefined) {\n      // 判断传的参是否有值\n      var bol = JSON.stringify(data) == \"{}\";\n      if (!bol) {\n        if (condition == undefined) {\n          var sql = \"INSERT INTO \".concat(dbTable, \" VALUES('\").concat(data, \"')\");\n        } else {\n          var sql = \"INSERT INTO \".concat(dbTable, \" (\").concat(condition, \") VALUES(\").concat(data, \")\");\n        }\n        // console.log(sql);\n        return new Promise(function (resolve, reject) {\n          // 表格添加数据\n          plus.sqlite.executeSql({\n            name: _this5.dbName,\n            sql: sql,\n            success: function success(e) {\n              resolve(e);\n            },\n            fail: function fail(e) {\n              reject(e);\n            }\n          });\n        });\n      } else {\n        return new Promise(function (resolve, reject) {\n          reject(\"错误添加\");\n        });\n      }\n    } else {\n      return new Promise(function (resolve, reject) {\n        reject(\"错误添加\");\n      });\n    }\n  },\n  // 根据条件向表格里添加数据  有数据更新、无数据插入\n  // (建表时需要设置主键) 例如 --- \"roomid\" varchar(50) PRIMARY KEY\n  insertOrReplaceData: function insertOrReplaceData(dbTable, data, condition) {\n    var _this6 = this;\n    // 判断有没有传参\n    if (dbTable !== undefined && data !== undefined) {\n      if (condition == undefined) {\n        var sql = \"INSERT OR REPLACE INTO \".concat(dbTable, \" VALUES('\").concat(data, \"')\");\n      } else {\n        var sql = \"INSERT OR REPLACE INTO \".concat(dbTable, \" (\").concat(condition, \") VALUES(\").concat(data, \")\");\n      }\n      // console.log(sql);\n      return new Promise(function (resolve, reject) {\n        // 表格添加数据\n        plus.sqlite.executeSql({\n          name: _this6.dbName,\n          sql: sql,\n          success: function success(e) {\n            resolve(e);\n          },\n          fail: function fail(e) {\n            reject(e);\n          }\n        });\n      });\n    } else {\n      return new Promise(function (resolve, reject) {\n        reject(\"错误添加\");\n      });\n    }\n  },\n  // 查询获取数据库里的数据 sql:'SELECT * FROM dbTable WHERE lname = 'lvalue''\n  // 查询 SELECT * FROM 、 dbTable 是表名、 WHERE 查找条件 lname,lvalue 是查询条件的列名和列值\n  selectTableData: function selectTableData(dbTable, lname, lvalue, cc, dd) {\n    var _this7 = this;\n    if (dbTable !== undefined) {\n      // 第一个是表单名称，后两个参数是列表名，用来检索\n      if (lname !== undefined && cc !== undefined) {\n        // 两个检索条件\n        var sql = \"SELECT * FROM \".concat(dbTable, \" WHERE \").concat(lname, \" = '\").concat(lvalue, \"' AND \").concat(cc, \" = '\").concat(dd, \"'\");\n      }\n      if (lname !== undefined && cc == undefined) {\n        // 一个检索条件\n        var sql = \"SELECT * FROM \".concat(dbTable, \" WHERE \").concat(lname, \" = '\").concat(lvalue, \"'\");\n        // console.log(sql);\n      }\n\n      if (lname == undefined) {\n        var sql = \"SELECT * FROM \".concat(dbTable);\n      }\n      return new Promise(function (resolve, reject) {\n        // 表格查询数据  执行查询的SQL语句\n        plus.sqlite.selectSql({\n          name: _this7.dbName,\n          sql: sql,\n          success: function success(e) {\n            resolve(e);\n          },\n          fail: function fail(e) {\n            reject(e);\n          }\n        });\n      });\n    } else {\n      return new Promise(function (resolve, reject) {\n        reject(\"错误查询\");\n      });\n    }\n  },\n  // 删除表里的数据 sql:'DELETE FROM dbTable WHERE lname = 'lvalue''\n  // 删除 DELETE FROM 、 dbTable 是表名、 WHERE 查找条件 lname,lvalue 是查询条件的列名和列值\n  deleteTableData: function deleteTableData(dbTable, lname, lvalue, ww, ee) {\n    var _this8 = this;\n    if (dbTable !== undefined) {\n      if (lname == undefined) {\n        var sql = \"DELETE FROM \".concat(dbTable);\n      } else {\n        if (ww !== undefined) {\n          // 两个检索条件\n          var sql = \"DELETE FROM \".concat(dbTable, \" WHERE \").concat(lname, \" = '\").concat(lvalue, \"' AND \").concat(ww, \" = '\").concat(ee, \"'\");\n        } else {\n          // 一个检索条件\n          var sql = \"DELETE FROM \".concat(dbTable, \" WHERE \").concat(lname, \" = '\").concat(lvalue, \"'\");\n        }\n      }\n      return new Promise(function (resolve, reject) {\n        // 删除表数据\n        plus.sqlite.executeSql({\n          name: _this8.dbName,\n          sql: sql,\n          success: function success(e) {\n            resolve(e);\n          },\n          fail: function fail(e) {\n            reject(e);\n          }\n        });\n      });\n    } else {\n      return new Promise(function (resolve, reject) {\n        reject(\"错误删除\");\n      });\n    }\n  },\n  // 修改数据表里的数据 sql:\"UPDATE dbTable SET 列名 = '列值',列名 = '列值' WHERE lname = 'lvalue'\"\n  // 修改 UPDATE 、 dbTable 是表名, data: 要修改的列名=修改后列值, lname,lvalue 是查询条件的列名和列值\n  updateTableData: function updateTableData(dbTable, data, lname, lvalue) {\n    var _this9 = this;\n    if (lname == undefined) {\n      var sql = \"UPDATE \".concat(dbTable, \" SET \").concat(data);\n    } else {\n      var sql = \"UPDATE \".concat(dbTable, \" SET \").concat(data, \" WHERE \").concat(lname, \" = '\").concat(lvalue, \"'\");\n    }\n    // WHERE 前面是要修改的列名、列值，后面是条件的列名、列值\n    return new Promise(function (resolve, reject) {\n      // 修改表数据\n      plus.sqlite.executeSql({\n        name: _this9.dbName,\n        sql: sql,\n        success: function success(e) {\n          resolve(e);\n        },\n        fail: function fail(e) {\n          reject(e);\n        }\n      });\n    });\n  },\n  // 获取指定数据条数  sql:\"SELECT * FROM dbTable ORDER BY 'id' DESC LIMIT 15 OFFSET 'num'\"\n  // dbTable 表名, ORDER BY 代表排序默认正序, id 是排序的条件 DESC 代表倒序，从最后一条数据开始拿\n  // LIMIT 15 OFFSET '${num}',这句的意思是跳过 num 条拿 15 条数据, num 为跳过多少条数据是动态值\n  // 例 初始num设为0，就从最后的数据开始拿15条，下次不拿刚获取的数据，所以可以让num为15，这样就能一步一步的拿完所有的数据\n  pullSQL: function pullSQL(dbTable, id, num) {\n    var _this10 = this;\n    return new Promise(function (resolve, reject) {\n      plus.sqlite.selectSql({\n        name: _this10.dbName,\n        sql: \"SELECT * FROM \".concat(dbTable, \" ORDER BY '\").concat(id, \"' DESC LIMIT 15 OFFSET '\").concat(num, \"'\"),\n        success: function success(e) {\n          resolve(e);\n        },\n        fail: function fail(e) {\n          reject(e);\n        }\n      });\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3FsaXRlLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJkYk5hbWUiLCJkYlBhdGgiLCJpc09wZW4iLCJvcGVuIiwicGx1cyIsInNxbGl0ZSIsImlzT3BlbkRhdGFiYXNlIiwibmFtZSIsInBhdGgiLCJvcGVuU3FsaXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvcGVuRGF0YWJhc2UiLCJzdWNjZXNzIiwiZSIsImZhaWwiLCJjbG9zZVNxbGl0ZSIsImNsb3NlRGF0YWJhc2UiLCJjcmVhdGVUYWJsZSIsImRiVGFibGUiLCJkYXRhIiwiZXhlY3V0ZVNxbCIsInNxbCIsImRyb3BUYWJsZSIsImluc2VydFRhYmxlRGF0YSIsImNvbmRpdGlvbiIsInVuZGVmaW5lZCIsImJvbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnNlcnRPclJlcGxhY2VEYXRhIiwic2VsZWN0VGFibGVEYXRhIiwibG5hbWUiLCJsdmFsdWUiLCJjYyIsImRkIiwic2VsZWN0U3FsIiwiZGVsZXRlVGFibGVEYXRhIiwid3ciLCJlZSIsInVwZGF0ZVRhYmxlRGF0YSIsInB1bGxTUUwiLCJpZCIsIm51bSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2ZDLE1BQU0sRUFBRSxNQUFNO0VBQUU7RUFDaEJDLE1BQU0sRUFBRSxjQUFjO0VBQUU7RUFFeEI7RUFDQUMsTUFBTSxvQkFBRztJQUNQO0lBQ0EsSUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDO01BQ3BDQyxJQUFJLEVBQUUsSUFBSSxDQUFDUCxNQUFNO01BQUc7TUFDcEJRLElBQUksRUFBRSxJQUFJLENBQUNQLE1BQU0sQ0FBRTtJQUNyQixDQUFDLENBQUM7O0lBQ0YsT0FBT0UsSUFBSTtFQUNiLENBQUM7RUFFRDtFQUNBTSxVQUFVLHdCQUFHO0lBQUE7SUFDWCxPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVB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RUFDQTtFQUNBO0VBQ0E7RUFDQTJCLE9BQU8sbUJBQUN0QixPQUFPLEVBQUV1QixFQUFFLEVBQUVDLEdBQUcsRUFBRTtJQUFBO0lBQ3hCLE9BQU8sSUFBSWxDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztNQUN0Q1IsSUFBSSxDQUFDQyxNQUFNLENBQUNnQyxTQUFTLENBQUM7UUFDcEI5QixJQUFJLEVBQUUsT0FBSSxDQUFDUCxNQUFNO1FBQ2pCdUIsR0FBRywwQkFBbUJILE9BQU8sd0JBQWN1QixFQUFFLHFDQUEyQkMsR0FBRyxNQUFHO1FBQzlFOUIsT0FBTyxtQkFBQ0MsQ0FBQyxFQUFFO1VBQ1RKLE9BQU8sQ0FBQ0ksQ0FBQyxDQUFDO1FBQ1osQ0FBQztRQUNEQyxJQUFJLGdCQUFDRCxDQUFDLEVBQUU7VUFDTkgsTUFBTSxDQUFDRyxDQUFDLENBQUM7UUFDWDtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBkYk5hbWU6ICdjaGF0JywgLy8g5pWw5o2u5bqT5ZCN56ewXG4gIGRiUGF0aDogJ19kb2MvY2hhdC5kYicsIC8vIOaVsOaNruW6k+WcsOWdgCzmjqjojZDku6XkuIvliJLnur/kuLrlvIDlpLQgICBfZG9jL3h4eC5kYlxuXG4gIC8vIOWIpOaWreaVsOaNruW6k+aYr+WQpuaJk+W8gFxuICBpc09wZW4oKSB7XG4gICAgLy8g5pWw5o2u5bqT5omT5byA5LqG5bCx6L+U5ZueIHRydWUs5ZCm5YiZ6L+U5ZueIGZhbHNlXG4gICAgdmFyIG9wZW4gPSBwbHVzLnNxbGl0ZS5pc09wZW5EYXRhYmFzZSh7XG4gICAgICBuYW1lOiB0aGlzLmRiTmFtZSwgIC8vIOaVsOaNruW6k+WQjeensFxuICAgICAgcGF0aDogdGhpcy5kYlBhdGggIC8vIOaVsOaNruW6k+WcsOWdgFxuICAgIH0pXG4gICAgcmV0dXJuIG9wZW47XG4gIH0sXG5cbiAgLy8g5Yib5bu65pWw5o2u5bqTIOaIliDmnInor6XmlbDmja7lupPlsLHmiZPlvIBcbiAgb3BlblNxbGl0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8g5omT5byA5pWw5o2u5bqTXG4gICAgICBwbHVzLnNxbGl0ZS5vcGVuRGF0YWJhc2Uoe1xuICAgICAgICBuYW1lOiB0aGlzLmRiTmFtZSxcbiAgICAgICAgcGF0aDogdGhpcy5kYlBhdGgsXG4gICAgICAgIHN1Y2Nlc3MoZSkge1xuICAgICAgICAgIHJlc29sdmUoZSk7IC8vIOaIkOWKn+Wbnuiwg1xuICAgICAgICB9LFxuICAgICAgICBmYWlsKGUpIHtcbiAgICAgICAgICByZWplY3QoZSk7ICAvLyDlpLHotKXlm57osINcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8vIOWFs+mXreaVsOaNruW6k1xuICBjbG9zZVNxbGl0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcGx1cy5zcWxpdGUuY2xvc2VEYXRhYmFzZSh7XG4gICAgICAgIG5hbWU6IHRoaXMuZGJOYW1lLFxuICAgICAgICBzdWNjZXNzKGUpIHtcbiAgICAgICAgICByZXNvbHZlKGUpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsKGUpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvLyDmlbDmja7lupPlu7rooaggc3FsOidDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBkYlRhYmxlKFwiaWRcIiB2YXJjaGFyKDUwKSxcIm5hbWVcIiBURVhUKSBcbiAgLy8g5Yib5bu6IENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIOOAgSBkYlRhYmxlIOaYr+ihqOWQje+8jOS4jeiDveeUqOaVsOWtl+W8gOWktOOAgeaLrOWPt+mHjOaYr+ihqOagvOeahOihqOWktFxuICBjcmVhdGVUYWJsZShkYlRhYmxlLCBkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIGV4ZWN1dGVTcWw6IOaJp+ihjOWinuWIoOaUueetieaTjeS9nOeahFNRTOivreWPpVxuICAgICAgcGx1cy5zcWxpdGUuZXhlY3V0ZVNxbCh7XG4gICAgICAgIG5hbWU6IHRoaXMuZGJOYW1lLFxuICAgICAgICBzcWw6IGBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyAke2RiVGFibGV9KCR7ZGF0YX0pYCxcbiAgICAgICAgc3VjY2VzcyhlKSB7XG4gICAgICAgICAgcmVzb2x2ZShlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbChlKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLy8g5pWw5o2u5bqT5Yig6KGoIHNxbDonRFJPUCBUQUJMRSBkYlRhYmxlJ1xuICBkcm9wVGFibGUoZGJUYWJsZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBwbHVzLnNxbGl0ZS5leGVjdXRlU3FsKHtcbiAgICAgICAgbmFtZTogdGhpcy5kYk5hbWUsXG4gICAgICAgIHNxbDogYERST1AgVEFCTEUgJHtkYlRhYmxlfWAsXG4gICAgICAgIHN1Y2Nlc3MoZSkge1xuICAgICAgICAgIHJlc29sdmUoZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwoZSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8vIOWQkeihqOagvOmHjOa3u+WKoOaVsOaNriBzcWw6J0lOU0VSVCBJTlRPIGRiVGFibGUgVkFMVUVTKCd4JywneCcsJ3gnKScgICDlr7nlupTmlrDlop5cbiAgLy8g5oiW6ICFIHNxbDonSU5TRVJUIElOVE8gZGJUYWJsZSAoJ3gnLCd4JywneCcpIFZBTFVFUygneCcsJ3gnLCd4JyknICAg5YW35L2T5paw5aKeXG4gIC8vIOaPkuWFpSBJTlNFUlQgSU5UTyAg44CBIGRiVGFibGUg5piv6KGo5ZCN44CB5qC55o2u6KGo5aS05YiX5ZCN5o+S5YWl5YiX5YC8XG4gIGluc2VydFRhYmxlRGF0YShkYlRhYmxlLCBkYXRhLCBjb25kaXRpb24pIHtcbiAgICAvLyDliKTmlq3mnInmsqHmnInkvKDlj4JcbiAgICBpZiAoZGJUYWJsZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8g5Yik5pat5Lyg55qE5Y+C5piv5ZCm5pyJ5YC8XG4gICAgICB2YXIgYm9sID0gKEpTT04uc3RyaW5naWZ5KGRhdGEpID09IFwie31cIik7XG4gICAgICBpZiAoIWJvbCkge1xuICAgICAgXHRpZiAoY29uZGl0aW9uID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBzcWwgPSBgSU5TRVJUIElOVE8gJHtkYlRhYmxlfSBWQUxVRVMoJyR7ZGF0YX0nKWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNxbCA9IGBJTlNFUlQgSU5UTyAke2RiVGFibGV9ICgke2NvbmRpdGlvbn0pIFZBTFVFUygke2RhdGF9KWA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coc3FsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAvLyDooajmoLzmt7vliqDmlbDmja5cbiAgICAgICAgICBwbHVzLnNxbGl0ZS5leGVjdXRlU3FsKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuZGJOYW1lLFxuICAgICAgICAgICAgc3FsOiBzcWwsXG4gICAgICAgICAgICBzdWNjZXNzKGUpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsKGUpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyByZWplY3QoXCLplJnor6/mt7vliqBcIikgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgcmVqZWN0KFwi6ZSZ6K+v5re75YqgXCIpIH0pXG4gICAgfVxuICB9LFxuICBcbiAgLy8g5qC55o2u5p2h5Lu25ZCR6KGo5qC86YeM5re75Yqg5pWw5o2uICDmnInmlbDmja7mm7TmlrDjgIHml6DmlbDmja7mj5LlhaVcbiAgLy8gKOW7uuihqOaXtumcgOimgeiuvue9ruS4u+mUrikg5L6L5aaCIC0tLSBcInJvb21pZFwiIHZhcmNoYXIoNTApIFBSSU1BUlkgS0VZXG4gIGluc2VydE9yUmVwbGFjZURhdGEoZGJUYWJsZSwgZGF0YSwgY29uZGl0aW9uKSB7XG4gICAgLy8g5Yik5pat5pyJ5rKh5pyJ5Lyg5Y+CXG4gICAgaWYgKGRiVGFibGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgc3FsID0gYElOU0VSVCBPUiBSRVBMQUNFIElOVE8gJHtkYlRhYmxlfSBWQUxVRVMoJyR7ZGF0YX0nKWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNxbCA9IGBJTlNFUlQgT1IgUkVQTEFDRSBJTlRPICR7ZGJUYWJsZX0gKCR7Y29uZGl0aW9ufSkgVkFMVUVTKCR7ZGF0YX0pYDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIC8vIOihqOagvOa3u+WKoOaVsOaNrlxuICAgICAgICAgIHBsdXMuc3FsaXRlLmV4ZWN1dGVTcWwoe1xuICAgICAgICAgICAgbmFtZTogdGhpcy5kYk5hbWUsXG4gICAgICAgICAgICBzcWw6IHNxbCxcbiAgICAgICAgICAgIHN1Y2Nlc3MoZSkge1xuICAgICAgICAgICAgICByZXNvbHZlKGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWwoZSkge1xuICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHJlamVjdChcIumUmeivr+a3u+WKoFwiKSB9KVxuICAgIH1cbiAgfSxcblxuICAvLyDmn6Xor6Lojrflj5bmlbDmja7lupPph4znmoTmlbDmja4gc3FsOidTRUxFQ1QgKiBGUk9NIGRiVGFibGUgV0hFUkUgbG5hbWUgPSAnbHZhbHVlJydcbiAgLy8g5p+l6K+iIFNFTEVDVCAqIEZST00g44CBIGRiVGFibGUg5piv6KGo5ZCN44CBIFdIRVJFIOafpeaJvuadoeS7tiBsbmFtZSxsdmFsdWUg5piv5p+l6K+i5p2h5Lu255qE5YiX5ZCN5ZKM5YiX5YC8XG4gIHNlbGVjdFRhYmxlRGF0YShkYlRhYmxlLCBsbmFtZSwgbHZhbHVlLCBjYywgZGQpIHtcbiAgICBpZiAoZGJUYWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyDnrKzkuIDkuKrmmK/ooajljZXlkI3np7DvvIzlkI7kuKTkuKrlj4LmlbDmmK/liJfooajlkI3vvIznlKjmnaXmo4DntKJcbiAgICAgIGlmIChsbmFtZSAhPT0gdW5kZWZpbmVkICYmIGNjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8g5Lik5Liq5qOA57Si5p2h5Lu2XG4gICAgICAgIHZhciBzcWwgPSBgU0VMRUNUICogRlJPTSAke2RiVGFibGV9IFdIRVJFICR7bG5hbWV9ID0gJyR7bHZhbHVlfScgQU5EICR7Y2N9ID0gJyR7ZGR9J2A7XG4gICAgICB9XG4gICAgICBpZiAobG5hbWUgIT09IHVuZGVmaW5lZCAmJiBjYyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8g5LiA5Liq5qOA57Si5p2h5Lu2XG4gICAgICAgIHZhciBzcWwgPSBgU0VMRUNUICogRlJPTSAke2RiVGFibGV9IFdIRVJFICR7bG5hbWV9ID0gJyR7bHZhbHVlfSdgO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzcWwpO1xuICAgICAgfVxuICAgICAgaWYgKGxuYW1lID09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgc3FsID0gYFNFTEVDVCAqIEZST00gJHtkYlRhYmxlfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyDooajmoLzmn6Xor6LmlbDmja4gIOaJp+ihjOafpeivoueahFNRTOivreWPpVxuICAgICAgICBwbHVzLnNxbGl0ZS5zZWxlY3RTcWwoe1xuICAgICAgICAgIG5hbWU6IHRoaXMuZGJOYW1lLFxuICAgICAgICAgIHNxbDogc3FsLFxuICAgICAgICAgIHN1Y2Nlc3MoZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHJlamVjdChcIumUmeivr+afpeivolwiKSB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8g5Yig6Zmk6KGo6YeM55qE5pWw5o2uIHNxbDonREVMRVRFIEZST00gZGJUYWJsZSBXSEVSRSBsbmFtZSA9ICdsdmFsdWUnJ1xuICAvLyDliKDpmaQgREVMRVRFIEZST00g44CBIGRiVGFibGUg5piv6KGo5ZCN44CBIFdIRVJFIOafpeaJvuadoeS7tiBsbmFtZSxsdmFsdWUg5piv5p+l6K+i5p2h5Lu255qE5YiX5ZCN5ZKM5YiX5YC8XG4gIGRlbGV0ZVRhYmxlRGF0YShkYlRhYmxlLCBsbmFtZSwgbHZhbHVlLCB3dywgZWUpIHtcbiAgICBpZiAoZGJUYWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAobG5hbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBzcWwgPSBgREVMRVRFIEZST00gJHtkYlRhYmxlfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAod3cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIOS4pOS4quajgOe0ouadoeS7tlxuICAgICAgICAgIHZhciBzcWwgPSBgREVMRVRFIEZST00gJHtkYlRhYmxlfSBXSEVSRSAke2xuYW1lfSA9ICcke2x2YWx1ZX0nIEFORCAke3d3fSA9ICcke2VlfSdgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIOS4gOS4quajgOe0ouadoeS7tlxuICAgICAgICAgIHZhciBzcWwgPSBgREVMRVRFIEZST00gJHtkYlRhYmxlfSBXSEVSRSAke2xuYW1lfSA9ICcke2x2YWx1ZX0nYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8g5Yig6Zmk6KGo5pWw5o2uXG4gICAgICAgIHBsdXMuc3FsaXRlLmV4ZWN1dGVTcWwoe1xuICAgICAgICAgIG5hbWU6IHRoaXMuZGJOYW1lLFxuICAgICAgICAgIHNxbDogc3FsLFxuICAgICAgICAgIHN1Y2Nlc3MoZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHJlamVjdChcIumUmeivr+WIoOmZpFwiKSB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8g5L+u5pS55pWw5o2u6KGo6YeM55qE5pWw5o2uIHNxbDpcIlVQREFURSBkYlRhYmxlIFNFVCDliJflkI0gPSAn5YiX5YC8JyzliJflkI0gPSAn5YiX5YC8JyBXSEVSRSBsbmFtZSA9ICdsdmFsdWUnXCJcbiAgLy8g5L+u5pS5IFVQREFURSDjgIEgZGJUYWJsZSDmmK/ooajlkI0sIGRhdGE6IOimgeS/ruaUueeahOWIl+WQjT3kv67mlLnlkI7liJflgLwsIGxuYW1lLGx2YWx1ZSDmmK/mn6Xor6LmnaHku7bnmoTliJflkI3lkozliJflgLxcbiAgdXBkYXRlVGFibGVEYXRhKGRiVGFibGUsIGRhdGEsIGxuYW1lLCBsdmFsdWUpIHtcbiAgICBpZiAobG5hbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgc3FsID0gYFVQREFURSAke2RiVGFibGV9IFNFVCAke2RhdGF9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNxbCA9IGBVUERBVEUgJHtkYlRhYmxlfSBTRVQgJHtkYXRhfSBXSEVSRSAke2xuYW1lfSA9ICcke2x2YWx1ZX0nYDtcbiAgICB9XG4gICAgLy8gV0hFUkUg5YmN6Z2i5piv6KaB5L+u5pS555qE5YiX5ZCN44CB5YiX5YC877yM5ZCO6Z2i5piv5p2h5Lu255qE5YiX5ZCN44CB5YiX5YC8XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIOS/ruaUueihqOaVsOaNrlxuICAgICAgcGx1cy5zcWxpdGUuZXhlY3V0ZVNxbCh7XG4gICAgICAgIG5hbWU6IHRoaXMuZGJOYW1lLFxuICAgICAgICBzcWw6IHNxbCxcbiAgICAgICAgc3VjY2VzcyhlKSB7XG4gICAgICAgICAgcmVzb2x2ZShlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbChlKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLy8g6I635Y+W5oyH5a6a5pWw5o2u5p2h5pWwICBzcWw6XCJTRUxFQ1QgKiBGUk9NIGRiVGFibGUgT1JERVIgQlkgJ2lkJyBERVNDIExJTUlUIDE1IE9GRlNFVCAnbnVtJ1wiXG4gIC8vIGRiVGFibGUg6KGo5ZCNLCBPUkRFUiBCWSDku6PooajmjpLluo/pu5jorqTmraPluo8sIGlkIOaYr+aOkuW6j+eahOadoeS7tiBERVNDIOS7o+ihqOWAkuW6j++8jOS7juacgOWQjuS4gOadoeaVsOaNruW8gOWni+aLv1xuICAvLyBMSU1JVCAxNSBPRkZTRVQgJyR7bnVtfScs6L+Z5Y+l55qE5oSP5oCd5piv6Lez6L+HIG51bSDmnaHmi78gMTUg5p2h5pWw5o2uLCBudW0g5Li66Lez6L+H5aSa5bCR5p2h5pWw5o2u5piv5Yqo5oCB5YC8XG4gIC8vIOS+iyDliJ3lp4tudW3orr7kuLow77yM5bCx5LuO5pyA5ZCO55qE5pWw5o2u5byA5aeL5ou/MTXmnaHvvIzkuIvmrKHkuI3mi7/liJrojrflj5bnmoTmlbDmja7vvIzmiYDku6Xlj6/ku6XorqludW3kuLoxNe+8jOi/meagt+WwseiDveS4gOatpeS4gOatpeeahOaLv+WujOaJgOacieeahOaVsOaNrlxuICBwdWxsU1FMKGRiVGFibGUsIGlkLCBudW0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcGx1cy5zcWxpdGUuc2VsZWN0U3FsKHtcbiAgICAgICAgbmFtZTogdGhpcy5kYk5hbWUsXG4gICAgICAgIHNxbDogYFNFTEVDVCAqIEZST00gJHtkYlRhYmxlfSBPUkRFUiBCWSAnJHtpZH0nIERFU0MgTElNSVQgMTUgT0ZGU0VUICcke251bX0nYCxcbiAgICAgICAgc3VjY2VzcyhlKSB7XG4gICAgICAgICAgcmVzb2x2ZShlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbChlKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/*!***************************************************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/envHistory/envHistory.vue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _envHistory_vue_vue_type_template_id_6c25bd36_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./envHistory.vue?vue&type=template&id=6c25bd36&mpType=page */ 19);\n/* harmony import */ var _envHistory_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./envHistory.vue?vue&type=script&lang=js&mpType=page */ 21);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _envHistory_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _envHistory_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _envHistory_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _envHistory_vue_vue_type_template_id_6c25bd36_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _envHistory_vue_vue_type_template_id_6c25bd36_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _envHistory_vue_vue_type_template_id_6c25bd36_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/envHistory/envHistory.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDeUU7QUFDTDs7O0FBR3BFO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2Vudkhpc3RvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjMjViZDM2Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9lbnZIaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9lbnZIaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZW52SGlzdG9yeS9lbnZIaXN0b3J5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*********************************************************************************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/envHistory/envHistory.vue?vue&type=template&id=6c25bd36&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_template_id_6c25bd36_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./envHistory.vue?vue&type=template&id=6c25bd36&mpType=page */ 20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_template_id_6c25bd36_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_template_id_6c25bd36_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_template_id_6c25bd36_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_template_id_6c25bd36_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 20 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/envHistory/envHistory.vue?vue&type=template&id=6c25bd36&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "header"), attrs: { _i: 1 } },
        [
          _c("text", {
            staticClass: _vm._$s(2, "sc", "title"),
            attrs: { _i: 2 },
          }),
          _c("text", {
            staticClass: _vm._$s(3, "sc", "subtitle"),
            attrs: { _i: 3 },
          }),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(4, "sc", "control-area"), attrs: { _i: 4 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "date-filter"), attrs: { _i: 5 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(6, "sc", "date-input-group"),
                  attrs: { _i: 6 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(7, "sc", "date-label"),
                    attrs: { _i: 7 },
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.startDate,
                        expression: "startDate",
                      },
                    ],
                    staticClass: _vm._$s(8, "sc", "date-input"),
                    attrs: { _i: 8 },
                    domProps: { value: _vm._$s(8, "v-model", _vm.startDate) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.startDate = $event.target.value
                      },
                    },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(9, "sc", "date-input-group"),
                  attrs: { _i: 9 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(10, "sc", "date-label"),
                    attrs: { _i: 10 },
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.endDate,
                        expression: "endDate",
                      },
                    ],
                    staticClass: _vm._$s(11, "sc", "date-input"),
                    attrs: { _i: 11 },
                    domProps: { value: _vm._$s(11, "v-model", _vm.endDate) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.endDate = $event.target.value
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(12, "sc", "button-row"), attrs: { _i: 12 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(13, "sc", "query-btn"),
                  attrs: { _i: 13 },
                  on: { click: _vm.queryHistoryData },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(14, "sc", "btn-text"),
                    attrs: { _i: 14 },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(15, "sc", "delete-btn"),
                  attrs: { _i: 15 },
                  on: { click: _vm.clearAllData },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(16, "sc", "btn-text"),
                    attrs: { _i: 16 },
                  }),
                ]
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(17, "sc", "filter-options"),
              attrs: { _i: 17 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(18, "sc", "filter-option"),
                  attrs: { _i: 18 },
                  on: { click: _vm.toggleExceedFilter },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(19, "sc", "filter-text"),
                    attrs: { _i: 19 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(20, "sc", "filter-switch"),
                      class: _vm._$s(20, "c", { active: _vm.showExceedOnly }),
                      attrs: { _i: 20 },
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(21, "sc", "switch-dot"),
                        attrs: { _i: 21 },
                      }),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(22, "sc", "stats-card"), attrs: { _i: 22 } },
        [
          _c("view", {
            staticClass: _vm._$s(23, "sc", "stats-title"),
            attrs: { _i: 23 },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(24, "sc", "stats-grid"), attrs: { _i: 24 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(25, "sc", "stat-item"),
                  attrs: { _i: 25 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(26, "sc", "stat-label"),
                    attrs: { _i: 26 },
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(27, "sc", "stat-value"),
                      attrs: { _i: 27 },
                    },
                    [_vm._v(_vm._$s(27, "t0-0", _vm._s(_vm.totalRecords)))]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(28, "sc", "stat-item"),
                  attrs: { _i: 28 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(29, "sc", "stat-label"),
                    attrs: { _i: 29 },
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(30, "sc", "stat-value"),
                      attrs: { _i: 30 },
                    },
                    [_vm._v(_vm._$s(30, "t0-0", _vm._s(_vm.exceedRecords)))]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(31, "sc", "stat-item"),
                  attrs: { _i: 31 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(32, "sc", "stat-label"),
                    attrs: { _i: 32 },
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(33, "sc", "stat-value"),
                      attrs: { _i: 33 },
                    },
                    [_vm._v(_vm._$s(33, "t0-0", _vm._s(_vm.queryDateRange)))]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(34, "sc", "records-container"),
          attrs: { _i: 34 },
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(35, "sc", "records-header"),
              attrs: { _i: 35 },
            },
            [
              _c("text", {
                staticClass: _vm._$s(36, "sc", "records-title"),
                attrs: { _i: 36 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(37, "sc", "records-count"),
                  attrs: { _i: 37 },
                },
                [
                  _vm._v(
                    _vm._$s(37, "t0-0", _vm._s(_vm.filteredRecords.length))
                  ),
                ]
              ),
            ]
          ),
          _c(
            "scroll-view",
            {
              staticClass: _vm._$s(38, "sc", "records-scroll"),
              style: _vm._$s(38, "s", { height: _vm.scrollHeight + "px" }),
              attrs: { _i: 38 },
            },
            [
              _vm._l(
                _vm._$s(39, "f", { forItems: _vm.filteredRecords }),
                function (record, index, $20, $30) {
                  return _c(
                    "view",
                    {
                      key: _vm._$s(39, "f", { forIndex: $20, key: index }),
                      staticClass: _vm._$s("39-" + $30, "sc", "record-card"),
                      class: _vm._$s("39-" + $30, "c", {
                        "exceed-record": record.exceed_limit === 1,
                      }),
                      attrs: { _i: "39-" + $30 },
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "40-" + $30,
                            "sc",
                            "record-header"
                          ),
                          attrs: { _i: "40-" + $30 },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "41-" + $30,
                                "sc",
                                "record-time"
                              ),
                              attrs: { _i: "41-" + $30 },
                            },
                            [
                              _c("text", {
                                staticClass: _vm._$s(
                                  "42-" + $30,
                                  "sc",
                                  "time-icon"
                                ),
                                attrs: { _i: "42-" + $30 },
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: _vm._$s(
                                    "43-" + $30,
                                    "sc",
                                    "time-text"
                                  ),
                                  attrs: { _i: "43-" + $30 },
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      "43-" + $30,
                                      "t0-0",
                                      _vm._s(
                                        _vm.formatDisplayTime(
                                          record.record_time
                                        )
                                      )
                                    )
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "44-" + $30,
                                "sc",
                                "record-status"
                              ),
                              class: _vm._$s("44-" + $30, "c", {
                                "status-normal": record.exceed_limit === 0,
                                "status-exceed": record.exceed_limit === 1,
                              }),
                              attrs: { _i: "44-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "44-" + $30,
                                  "t0-0",
                                  _vm._s(
                                    record.exceed_limit === 1
                                      ? "⚠️ 异常"
                                      : "✓ 正常"
                                  )
                                )
                              ),
                            ]
                          ),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "45-" + $30,
                            "sc",
                            "record-content"
                          ),
                          attrs: { _i: "45-" + $30 },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "46-" + $30,
                                "sc",
                                "env-params-grid"
                              ),
                              attrs: { _i: "46-" + $30 },
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "47-" + $30,
                                    "sc",
                                    "env-param-item"
                                  ),
                                  attrs: { _i: "47-" + $30 },
                                },
                                [
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      "48-" + $30,
                                      "sc",
                                      "param-label"
                                    ),
                                    attrs: { _i: "48-" + $30 },
                                  }),
                                  _c(
                                    "text",
                                    {
                                      staticClass: _vm._$s(
                                        "49-" + $30,
                                        "sc",
                                        "param-value"
                                      ),
                                      class: _vm._$s("49-" + $30, "c", {
                                        "exceed-value": _vm.isValueExceed(
                                          "temperature",
                                          record.temperature
                                        ),
                                      }),
                                      attrs: { _i: "49-" + $30 },
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "49-" + $30,
                                          "t0-0",
                                          _vm._s(record.temperature.toFixed(1))
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "50-" + $30,
                                    "sc",
                                    "env-param-item"
                                  ),
                                  attrs: { _i: "50-" + $30 },
                                },
                                [
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      "51-" + $30,
                                      "sc",
                                      "param-label"
                                    ),
                                    attrs: { _i: "51-" + $30 },
                                  }),
                                  _c(
                                    "text",
                                    {
                                      staticClass: _vm._$s(
                                        "52-" + $30,
                                        "sc",
                                        "param-value"
                                      ),
                                      class: _vm._$s("52-" + $30, "c", {
                                        "exceed-value": _vm.isValueExceed(
                                          "humidity",
                                          record.humidity
                                        ),
                                      }),
                                      attrs: { _i: "52-" + $30 },
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "52-" + $30,
                                          "t0-0",
                                          _vm._s(record.humidity.toFixed(1))
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "53-" + $30,
                                    "sc",
                                    "env-param-item"
                                  ),
                                  attrs: { _i: "53-" + $30 },
                                },
                                [
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      "54-" + $30,
                                      "sc",
                                      "param-label"
                                    ),
                                    attrs: { _i: "54-" + $30 },
                                  }),
                                  _c(
                                    "text",
                                    {
                                      staticClass: _vm._$s(
                                        "55-" + $30,
                                        "sc",
                                        "param-value"
                                      ),
                                      class: _vm._$s("55-" + $30, "c", {
                                        "exceed-value": _vm.isValueExceed(
                                          "co2",
                                          record.co2
                                        ),
                                      }),
                                      attrs: { _i: "55-" + $30 },
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "55-" + $30,
                                          "t0-0",
                                          _vm._s(record.co2.toFixed(0))
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "56-" + $30,
                                    "sc",
                                    "env-param-item"
                                  ),
                                  attrs: { _i: "56-" + $30 },
                                },
                                [
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      "57-" + $30,
                                      "sc",
                                      "param-label"
                                    ),
                                    attrs: { _i: "57-" + $30 },
                                  }),
                                  _c(
                                    "text",
                                    {
                                      staticClass: _vm._$s(
                                        "58-" + $30,
                                        "sc",
                                        "param-value"
                                      ),
                                      class: _vm._$s("58-" + $30, "c", {
                                        "exceed-value": _vm.isValueExceed(
                                          "light",
                                          record.light
                                        ),
                                      }),
                                      attrs: { _i: "58-" + $30 },
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "58-" + $30,
                                          "t0-0",
                                          _vm._s(record.light.toFixed(0))
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "59-" + $30,
                                    "sc",
                                    "env-param-item"
                                  ),
                                  attrs: { _i: "59-" + $30 },
                                },
                                [
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      "60-" + $30,
                                      "sc",
                                      "param-label"
                                    ),
                                    attrs: { _i: "60-" + $30 },
                                  }),
                                  _c(
                                    "text",
                                    {
                                      staticClass: _vm._$s(
                                        "61-" + $30,
                                        "sc",
                                        "param-value"
                                      ),
                                      class: _vm._$s("61-" + $30, "c", {
                                        "exceed-value": _vm.isValueExceed(
                                          "formaldehyde",
                                          record.formaldehyde
                                        ),
                                      }),
                                      attrs: { _i: "61-" + $30 },
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "61-" + $30,
                                          "t0-0",
                                          _vm._s(record.formaldehyde.toFixed(2))
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "62-" + $30,
                                    "sc",
                                    "env-param-item"
                                  ),
                                  attrs: { _i: "62-" + $30 },
                                },
                                [
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      "63-" + $30,
                                      "sc",
                                      "param-label"
                                    ),
                                    attrs: { _i: "63-" + $30 },
                                  }),
                                  _c(
                                    "text",
                                    {
                                      staticClass: _vm._$s(
                                        "64-" + $30,
                                        "sc",
                                        "param-value"
                                      ),
                                      class: _vm._$s("64-" + $30, "c", {
                                        "exceed-value": _vm.isValueExceed(
                                          "pm25",
                                          record.pm25
                                        ),
                                      }),
                                      attrs: { _i: "64-" + $30 },
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "64-" + $30,
                                          "t0-0",
                                          _vm._s(record.pm25.toFixed(0))
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "65-" + $30,
                            "sc",
                            "record-footer"
                          ),
                          attrs: { _i: "65-" + $30 },
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "66-" + $30,
                                "sc",
                                "record-date"
                              ),
                              attrs: { _i: "66-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "66-" + $30,
                                  "t0-0",
                                  _vm._s(record.date)
                                )
                              ),
                            ]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "67-" + $30,
                                "sc",
                                "record-actions"
                              ),
                              attrs: { _i: "67-" + $30 },
                            },
                            [
                              _c("text", {
                                staticClass: _vm._$s(
                                  "68-" + $30,
                                  "sc",
                                  "action-btn"
                                ),
                                attrs: { _i: "68-" + $30 },
                                on: {
                                  click: function ($event) {
                                    return _vm.deleteRecord(record.id)
                                  },
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]
                  )
                }
              ),
              _vm._$s(69, "i", _vm.filteredRecords.length === 0)
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(69, "sc", "no-data"),
                      attrs: { _i: 69 },
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(70, "sc", "no-data-icon"),
                        attrs: { _i: 70 },
                      }),
                      _c("text", {
                        staticClass: _vm._$s(71, "sc", "no-data-text"),
                        attrs: { _i: 71 },
                      }),
                      _c("text", {
                        staticClass: _vm._$s(72, "sc", "no-data-tip"),
                        attrs: { _i: 72 },
                      }),
                    ]
                  )
                : _vm._e(),
            ],
            2
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(73, "sc", "footer-info"), attrs: { _i: 73 } },
        [
          _c(
            "text",
            {
              staticClass: _vm._$s(74, "sc", "footer-text"),
              attrs: { _i: 74 },
            },
            [_vm._v(_vm._$s(74, "t0-0", _vm._s(_vm.lastQueryTime)))]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 21 */
/*!***************************************************************************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/envHistory/envHistory.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./envHistory.vue?vue&type=script&lang=js&mpType=page */ 22);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_envHistory_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRtQixDQUFnQiwyb0JBQUcsRUFBQyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZW52SGlzdG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lbnZIaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/envHistory/envHistory.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15));\nvar _sqlite = _interopRequireDefault(__webpack_require__(/*! @/sqlite.js */ 16));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入封装的 sqlite\nvar _default = {\n  data: function data() {\n    // 获取当前日期作为默认结束日期\n    var today = new Date();\n    var todayStr = today.toISOString().split('T')[0];\n\n    // 获取7天前的日期作为默认开始日期\n    var sevenDaysAgo = new Date(today);\n    sevenDaysAgo.setDate(today.getDate() - 7);\n    var sevenDaysAgoStr = sevenDaysAgo.toISOString().split('T')[0];\n    return {\n      // 历史记录数据\n      environmentRecords: [],\n      // 筛选条件\n      startDate: sevenDaysAgoStr,\n      endDate: todayStr,\n      showExceedOnly: false,\n      // 页面状态\n      scrollHeight: 500,\n      lastQueryTime: '--',\n      // 阈值配置（与主页同步）\n      currentThresholds: {\n        temperature: {\n          min: 0,\n          max: 35\n        },\n        humidity: {\n          min: 30,\n          max: 80\n        },\n        co2: {\n          min: 300,\n          max: 1000\n        },\n        light: {\n          min: 100,\n          max: 1000\n        },\n        formaldehyde: {\n          min: 0,\n          max: 0.1\n        },\n        pm25: {\n          min: 0,\n          max: 75\n        }\n      }\n    };\n  },\n  computed: {\n    // 过滤后的记录\n    filteredRecords: function filteredRecords() {\n      var _this = this;\n      var records = this.environmentRecords;\n\n      // 按日期筛选\n      if (this.startDate && this.endDate) {\n        records = records.filter(function (record) {\n          var recordDate = record.date;\n          return recordDate >= _this.startDate && recordDate <= _this.endDate;\n        });\n      }\n\n      // 按异常状态筛选\n      if (this.showExceedOnly) {\n        records = records.filter(function (record) {\n          return record.exceed_limit === 1;\n        });\n      }\n      return records;\n    },\n    // 统计信息\n    totalRecords: function totalRecords() {\n      return this.environmentRecords.length;\n    },\n    exceedRecords: function exceedRecords() {\n      return this.environmentRecords.filter(function (record) {\n        return record.exceed_limit === 1;\n      }).length;\n    },\n    queryDateRange: function queryDateRange() {\n      if (!this.startDate || !this.endDate) return '全部';\n      return \"\".concat(this.startDate, \" ~ \").concat(this.endDate);\n    }\n  },\n  onShow: function onShow() {\n    // 页面显示时自动查询历史数据\n    this.queryHistoryData();\n    // 动态计算滚动区域高度\n    this.calcScrollHeight();\n  },\n  onReady: function onReady() {\n    // 页面加载完成后重新计算高度\n    this.calcScrollHeight();\n  },\n  methods: {\n    // 计算滚动区域高度\n    calcScrollHeight: function calcScrollHeight() {\n      var that = this;\n      uni.getSystemInfo({\n        success: function success(res) {\n          // 计算可用高度：屏幕高度 - 头部高度 - 控制区域高度 - 统计卡片高度 - 底部信息高度\n          var windowHeight = res.windowHeight;\n          var usableHeight = windowHeight - 200 - 220 - 160 - 80;\n          that.scrollHeight = usableHeight > 400 ? usableHeight : 400;\n        }\n      });\n    },\n    // 打开数据库\n    openSQL: function openSQL() {\n      return new Promise(function (resolve, reject) {\n        var open = _sqlite.default.isOpen();\n        if (!open) {\n          _sqlite.default.openSqlite().then(function (res) {\n            resolve(res);\n          }).catch(function (error) {\n            reject(error);\n          });\n        } else {\n          resolve(true);\n        }\n      });\n    },\n    // 查询历史数据\n    queryHistoryData: function queryHistoryData() {\n      var _this2 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var open;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return _this2.openSQL();\n              case 3:\n                open = _sqlite.default.isOpen();\n                if (open) {\n                  _sqlite.default.selectTableData(\"environment_records\").then(function (res) {\n                    // 按记录时间倒序排列，最新的记录在前面\n                    _this2.environmentRecords = res.sort(function (a, b) {\n                      return new Date(b.record_time) - new Date(a.record_time);\n                    });\n\n                    // 确保数值类型正确\n                    _this2.environmentRecords.forEach(function (record) {\n                      record.temperature = parseFloat(record.temperature) || 0;\n                      record.humidity = parseFloat(record.humidity) || 0;\n                      record.co2 = parseFloat(record.co2) || 0;\n                      record.light = parseFloat(record.light) || 0;\n                      record.formaldehyde = parseFloat(record.formaldehyde) || 0;\n                      record.pm25 = parseFloat(record.pm25) || 0;\n                      record.exceed_limit = parseInt(record.exceed_limit) || 0;\n                    });\n                    __f__(\"log\", '环境监测记录查询成功，共', res.length, '条', \" at pages/envHistory/envHistory.vue:286\");\n                    _this2.lastQueryTime = _this2.formatTime(new Date());\n                    if (res.length === 0) {\n                      _this2.showToast(\"暂无环境监测记录\");\n                    } else {\n                      _this2.showToast(\"\\u67E5\\u8BE2\\u5230 \".concat(res.length, \" \\u6761\\u8BB0\\u5F55\"));\n                    }\n                  }).catch(function (error) {\n                    __f__(\"error\", \"查询环境监测记录错误\", error, \" at pages/envHistory/envHistory.vue:296\");\n                    _this2.showToast(\"查询历史数据失败\");\n                  });\n                } else {\n                  _this2.showToast(\"数据库未打开\");\n                }\n                _context.next = 11;\n                break;\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                __f__(\"error\", \"查询历史数据异常:\", _context.t0, \" at pages/envHistory/envHistory.vue:303\");\n                _this2.showToast(\"查询失败\");\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }))();\n    },\n    // 清空所有数据\n    clearAllData: function clearAllData() {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                uni.showModal({\n                  title: '确认清空',\n                  content: '确定要清空所有环境监测记录吗？此操作不可恢复！',\n                  success: function () {\n                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {\n                      var open;\n                      return _regenerator.default.wrap(function _callee2$(_context2) {\n                        while (1) {\n                          switch (_context2.prev = _context2.next) {\n                            case 0:\n                              if (!res.confirm) {\n                                _context2.next = 12;\n                                break;\n                              }\n                              _context2.prev = 1;\n                              _context2.next = 4;\n                              return _this3.openSQL();\n                            case 4:\n                              open = _sqlite.default.isOpen();\n                              if (open) {\n                                _sqlite.default.deleteTableData(\"environment_records\").then(function (res) {\n                                  _this3.showToast(\"环境监测记录清空成功\");\n                                  _this3.environmentRecords = [];\n                                  _this3.lastQueryTime = _this3.formatTime(new Date());\n                                }).catch(function (error) {\n                                  _this3.showToast(\"清空记录失败\");\n                                  __f__(\"error\", \"删除失败\", error, \" at pages/envHistory/envHistory.vue:327\");\n                                });\n                              } else {\n                                _this3.showToast(\"数据库未打开\");\n                              }\n                              _context2.next = 12;\n                              break;\n                            case 8:\n                              _context2.prev = 8;\n                              _context2.t0 = _context2[\"catch\"](1);\n                              __f__(\"error\", \"清空记录异常:\", _context2.t0, \" at pages/envHistory/envHistory.vue:333\");\n                              _this3.showToast(\"清空失败\");\n                            case 12:\n                            case \"end\":\n                              return _context2.stop();\n                          }\n                        }\n                      }, _callee2, null, [[1, 8]]);\n                    }));\n                    function success(_x) {\n                      return _success.apply(this, arguments);\n                    }\n                    return success;\n                  }()\n                });\n              case 1:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    },\n    // 删除单条记录\n    deleteRecord: function deleteRecord(recordId) {\n      var _this4 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {\n        return _regenerator.default.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                uni.showModal({\n                  title: '确认删除',\n                  content: '确定要删除这条记录吗？',\n                  success: function () {\n                    var _success2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(res) {\n                      var open;\n                      return _regenerator.default.wrap(function _callee4$(_context4) {\n                        while (1) {\n                          switch (_context4.prev = _context4.next) {\n                            case 0:\n                              if (!res.confirm) {\n                                _context4.next = 12;\n                                break;\n                              }\n                              _context4.prev = 1;\n                              _context4.next = 4;\n                              return _this4.openSQL();\n                            case 4:\n                              open = _sqlite.default.isOpen();\n                              if (open) {\n                                _sqlite.default.deleteTableData(\"environment_records\", \"id\", recordId).then(function (res) {\n                                  _this4.showToast(\"记录删除成功\");\n                                  // 重新查询数据\n                                  _this4.queryHistoryData();\n                                }).catch(function (error) {\n                                  _this4.showToast(\"删除记录失败\");\n                                  __f__(\"error\", \"删除失败\", error, \" at pages/envHistory/envHistory.vue:360\");\n                                });\n                              } else {\n                                _this4.showToast(\"数据库未打开\");\n                              }\n                              _context4.next = 12;\n                              break;\n                            case 8:\n                              _context4.prev = 8;\n                              _context4.t0 = _context4[\"catch\"](1);\n                              __f__(\"error\", \"删除记录异常:\", _context4.t0, \" at pages/envHistory/envHistory.vue:366\");\n                              _this4.showToast(\"删除失败\");\n                            case 12:\n                            case \"end\":\n                              return _context4.stop();\n                          }\n                        }\n                      }, _callee4, null, [[1, 8]]);\n                    }));\n                    function success(_x2) {\n                      return _success2.apply(this, arguments);\n                    }\n                    return success;\n                  }()\n                });\n              case 1:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }))();\n    },\n    // 切换异常数据筛选\n    toggleExceedFilter: function toggleExceedFilter() {\n      this.showExceedOnly = !this.showExceedOnly;\n    },\n    // 格式化显示时间（简化格式）\n    formatDisplayTime: function formatDisplayTime(fullDateTime) {\n      if (!fullDateTime) return '--';\n      try {\n        // 格式：MM-DD HH:MM\n        var date = new Date(fullDateTime);\n        var month = (date.getMonth() + 1).toString().padStart(2, '0');\n        var day = date.getDate().toString().padStart(2, '0');\n        var hours = date.getHours().toString().padStart(2, '0');\n        var minutes = date.getMinutes().toString().padStart(2, '0');\n        return \"\".concat(month, \"-\").concat(day, \" \").concat(hours, \":\").concat(minutes);\n      } catch (error) {\n        // 如果解析失败，尝试截断显示\n        if (fullDateTime.length > 16) {\n          return fullDateTime.substring(5, 16);\n        }\n        return fullDateTime;\n      }\n    },\n    // 格式化当前时间\n    formatTime: function formatTime(date) {\n      var hours = date.getHours().toString().padStart(2, '0');\n      var minutes = date.getMinutes().toString().padStart(2, '0');\n      var seconds = date.getSeconds().toString().padStart(2, '0');\n      return \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n    },\n    // 检查数值是否超出阈值\n    isValueExceed: function isValueExceed(type, value) {\n      var threshold = this.currentThresholds[type];\n      if (!threshold) return false;\n      return value < threshold.min || value > threshold.max;\n    },\n    // 提示框\n    showToast: function showToast(str) {\n      uni.showToast({\n        icon: \"none\",\n        title: str,\n        mask: true,\n        duration: 2000\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZW52SGlzdG9yeS9lbnZIaXN0b3J5LnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwidG9kYXkiLCJEYXRlIiwidG9kYXlTdHIiLCJ0b0lTT1N0cmluZyIsInNwbGl0Iiwic2V2ZW5EYXlzQWdvIiwic2V0RGF0ZSIsImdldERhdGUiLCJzZXZlbkRheXNBZ29TdHIiLCJlbnZpcm9ubWVudFJlY29yZHMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwic2hvd0V4Y2VlZE9ubHkiLCJzY3JvbGxIZWlnaHQiLCJsYXN0UXVlcnlUaW1lIiwiY3VycmVudFRocmVzaG9sZHMiLCJ0ZW1wZXJhdHVyZSIsIm1pbiIsIm1heCIsImh1bWlkaXR5IiwiY28yIiwibGlnaHQiLCJmb3JtYWxkZWh5ZGUiLCJwbTI1IiwiY29tcHV0ZWQiLCJmaWx0ZXJlZFJlY29yZHMiLCJyZWNvcmRzIiwiZmlsdGVyIiwicmVjb3JkIiwicmVjb3JkRGF0ZSIsImRhdGUiLCJleGNlZWRfbGltaXQiLCJ0b3RhbFJlY29yZHMiLCJsZW5ndGgiLCJleGNlZWRSZWNvcmRzIiwicXVlcnlEYXRlUmFuZ2UiLCJvblNob3ciLCJxdWVyeUhpc3RvcnlEYXRhIiwiY2FsY1Njcm9sbEhlaWdodCIsIm9uUmVhZHkiLCJtZXRob2RzIiwidGhhdCIsInVuaSIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0IiwidXNhYmxlSGVpZ2h0Iiwib3BlblNRTCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib3BlbiIsIkRCIiwiaXNPcGVuIiwib3BlblNxbGl0ZSIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwic2VsZWN0VGFibGVEYXRhIiwic29ydCIsImEiLCJiIiwicmVjb3JkX3RpbWUiLCJmb3JFYWNoIiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiZm9ybWF0VGltZSIsInNob3dUb2FzdCIsImNsZWFyQWxsRGF0YSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm0iLCJkZWxldGVUYWJsZURhdGEiLCJkZWxldGVSZWNvcmQiLCJyZWNvcmRJZCIsInRvZ2dsZUV4Y2VlZEZpbHRlciIsImZvcm1hdERpc3BsYXlUaW1lIiwiZnVsbERhdGVUaW1lIiwibW9udGgiLCJnZXRNb250aCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJkYXkiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzdWJzdHJpbmciLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsImlzVmFsdWVFeGNlZWQiLCJ0eXBlIiwidmFsdWUiLCJ0aHJlc2hvbGQiLCJzdHIiLCJpY29uIiwibWFzayIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFtSkE7QUFuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LENBQUM7SUFDSDtFQUNEO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBEQiBmcm9tIFwiQC9zcWxpdGUuanNcIjsgIC8vIOW8leWFpeWwgeijheeahCBzcWxpdGVcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdC8vIOiOt+WPluW9k+WJjeaXpeacn+S9nOS4uum7mOiupOe7k+adn+aXpeacn1xuXHRcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCB0b2RheVN0ciA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcblx0XHRcblx0XHQvLyDojrflj5Y35aSp5YmN55qE5pel5pyf5L2c5Li66buY6K6k5byA5aeL5pel5pyfXG5cdFx0Y29uc3Qgc2V2ZW5EYXlzQWdvID0gbmV3IERhdGUodG9kYXkpO1xuXHRcdHNldmVuRGF5c0Fnby5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDcpO1xuXHRcdGNvbnN0IHNldmVuRGF5c0Fnb1N0ciA9IHNldmVuRGF5c0Fnby50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG5cdFx0XG5cdFx0cmV0dXJuIHtcblx0XHRcdC8vIOWOhuWPsuiusOW9leaVsOaNrlxuXHRcdFx0ZW52aXJvbm1lbnRSZWNvcmRzOiBbXSxcblx0XHRcdFxuXHRcdFx0Ly8g562b6YCJ5p2h5Lu2XG5cdFx0XHRzdGFydERhdGU6IHNldmVuRGF5c0Fnb1N0cixcblx0XHRcdGVuZERhdGU6IHRvZGF5U3RyLFxuXHRcdFx0c2hvd0V4Y2VlZE9ubHk6IGZhbHNlLFxuXHRcdFx0XG5cdFx0XHQvLyDpobXpnaLnirbmgIFcblx0XHRcdHNjcm9sbEhlaWdodDogNTAwLFxuXHRcdFx0bGFzdFF1ZXJ5VGltZTogJy0tJyxcblx0XHRcdFxuXHRcdFx0Ly8g6ZiI5YC86YWN572u77yI5LiO5Li76aG15ZCM5q2l77yJXG5cdFx0XHRjdXJyZW50VGhyZXNob2xkczoge1xuXHRcdFx0XHR0ZW1wZXJhdHVyZTogeyBtaW46IDAsIG1heDogMzUgfSxcblx0XHRcdFx0aHVtaWRpdHk6IHsgbWluOiAzMCwgbWF4OiA4MCB9LFxuXHRcdFx0XHRjbzI6IHsgbWluOiAzMDAsIG1heDogMTAwMCB9LFxuXHRcdFx0XHRsaWdodDogeyBtaW46IDEwMCwgbWF4OiAxMDAwIH0sXG5cdFx0XHRcdGZvcm1hbGRlaHlkZTogeyBtaW46IDAsIG1heDogMC4xIH0sXG5cdFx0XHRcdHBtMjU6IHsgbWluOiAwLCBtYXg6IDc1IH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0Ly8g6L+H5ruk5ZCO55qE6K6w5b2VXG5cdFx0ZmlsdGVyZWRSZWNvcmRzKCkge1xuXHRcdFx0bGV0IHJlY29yZHMgPSB0aGlzLmVudmlyb25tZW50UmVjb3Jkcztcblx0XHRcdFxuXHRcdFx0Ly8g5oyJ5pel5pyf562b6YCJXG5cdFx0XHRpZiAodGhpcy5zdGFydERhdGUgJiYgdGhpcy5lbmREYXRlKSB7XG5cdFx0XHRcdHJlY29yZHMgPSByZWNvcmRzLmZpbHRlcihyZWNvcmQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHJlY29yZERhdGUgPSByZWNvcmQuZGF0ZTtcblx0XHRcdFx0XHRyZXR1cm4gcmVjb3JkRGF0ZSA+PSB0aGlzLnN0YXJ0RGF0ZSAmJiByZWNvcmREYXRlIDw9IHRoaXMuZW5kRGF0ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIOaMieW8guW4uOeKtuaAgeetm+mAiVxuXHRcdFx0aWYgKHRoaXMuc2hvd0V4Y2VlZE9ubHkpIHtcblx0XHRcdFx0cmVjb3JkcyA9IHJlY29yZHMuZmlsdGVyKHJlY29yZCA9PiByZWNvcmQuZXhjZWVkX2xpbWl0ID09PSAxKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIHJlY29yZHM7XG5cdFx0fSxcblx0XHRcblx0XHQvLyDnu5/orqHkv6Hmga9cblx0XHR0b3RhbFJlY29yZHMoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lbnZpcm9ubWVudFJlY29yZHMubGVuZ3RoO1xuXHRcdH0sXG5cdFx0XG5cdFx0ZXhjZWVkUmVjb3JkcygpIHtcblx0XHRcdHJldHVybiB0aGlzLmVudmlyb25tZW50UmVjb3Jkcy5maWx0ZXIocmVjb3JkID0+IHJlY29yZC5leGNlZWRfbGltaXQgPT09IDEpLmxlbmd0aDtcblx0XHR9LFxuXHRcdFxuXHRcdHF1ZXJ5RGF0ZVJhbmdlKCkge1xuXHRcdFx0aWYgKCF0aGlzLnN0YXJ0RGF0ZSB8fCAhdGhpcy5lbmREYXRlKSByZXR1cm4gJ+WFqOmDqCc7XG5cdFx0XHRyZXR1cm4gYCR7dGhpcy5zdGFydERhdGV9IH4gJHt0aGlzLmVuZERhdGV9YDtcblx0XHR9XG5cdH0sXG5cdG9uU2hvdygpIHtcblx0XHQvLyDpobXpnaLmmL7npLrml7boh6rliqjmn6Xor6Lljoblj7LmlbDmja5cblx0XHR0aGlzLnF1ZXJ5SGlzdG9yeURhdGEoKTtcblx0XHQvLyDliqjmgIHorqHnrpfmu5rliqjljLrln5/pq5jluqZcblx0XHR0aGlzLmNhbGNTY3JvbGxIZWlnaHQoKTtcblx0fSxcblx0b25SZWFkeSgpIHtcblx0XHQvLyDpobXpnaLliqDovb3lrozmiJDlkI7ph43mlrDorqHnrpfpq5jluqZcblx0XHR0aGlzLmNhbGNTY3JvbGxIZWlnaHQoKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC8vIOiuoeeul+a7muWKqOWMuuWfn+mrmOW6plxuXHRcdGNhbGNTY3JvbGxIZWlnaHQoKSB7XG5cdFx0XHRjb25zdCB0aGF0ID0gdGhpcztcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcblx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0XHQvLyDorqHnrpflj6/nlKjpq5jluqbvvJrlsY/luZXpq5jluqYgLSDlpLTpg6jpq5jluqYgLSDmjqfliLbljLrln5/pq5jluqYgLSDnu5/orqHljaHniYfpq5jluqYgLSDlupXpg6jkv6Hmga/pq5jluqZcblx0XHRcdFx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xuXHRcdFx0XHRcdGNvbnN0IHVzYWJsZUhlaWdodCA9IHdpbmRvd0hlaWdodCAtIDIwMCAtIDIyMCAtIDE2MCAtIDgwO1xuXHRcdFx0XHRcdHRoYXQuc2Nyb2xsSGVpZ2h0ID0gdXNhYmxlSGVpZ2h0ID4gNDAwID8gdXNhYmxlSGVpZ2h0IDogNDAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdFxuXHRcdC8vIOaJk+W8gOaVsOaNruW6k1xuXHRcdG9wZW5TUUwoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRsZXQgb3BlbiA9IERCLmlzT3BlbigpO1xuXHRcdFx0XHRpZiAoIW9wZW4pIHtcblx0XHRcdFx0XHREQi5vcGVuU3FsaXRlKClcblx0XHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRcblx0XHQvLyDmn6Xor6Lljoblj7LmlbDmja5cblx0XHRhc3luYyBxdWVyeUhpc3RvcnlEYXRhKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgdGhpcy5vcGVuU1FMKCk7XG5cdFx0XHRcdGxldCBvcGVuID0gREIuaXNPcGVuKCk7XG5cdFx0XHRcdGlmIChvcGVuKSB7XG5cdFx0XHRcdFx0REIuc2VsZWN0VGFibGVEYXRhKFwiZW52aXJvbm1lbnRfcmVjb3Jkc1wiKVxuXHRcdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRcdFx0Ly8g5oyJ6K6w5b2V5pe26Ze05YCS5bqP5o6S5YiX77yM5pyA5paw55qE6K6w5b2V5Zyo5YmN6Z2iXG5cdFx0XHRcdFx0XHRcdHRoaXMuZW52aXJvbm1lbnRSZWNvcmRzID0gcmVzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IERhdGUoYi5yZWNvcmRfdGltZSkgLSBuZXcgRGF0ZShhLnJlY29yZF90aW1lKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyDnoa7kv53mlbDlgLznsbvlnovmraPnoa5cblx0XHRcdFx0XHRcdFx0dGhpcy5lbnZpcm9ubWVudFJlY29yZHMuZm9yRWFjaChyZWNvcmQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJlY29yZC50ZW1wZXJhdHVyZSA9IHBhcnNlRmxvYXQocmVjb3JkLnRlbXBlcmF0dXJlKSB8fCAwO1xuXHRcdFx0XHRcdFx0XHRcdHJlY29yZC5odW1pZGl0eSA9IHBhcnNlRmxvYXQocmVjb3JkLmh1bWlkaXR5KSB8fCAwO1xuXHRcdFx0XHRcdFx0XHRcdHJlY29yZC5jbzIgPSBwYXJzZUZsb2F0KHJlY29yZC5jbzIpIHx8IDA7XG5cdFx0XHRcdFx0XHRcdFx0cmVjb3JkLmxpZ2h0ID0gcGFyc2VGbG9hdChyZWNvcmQubGlnaHQpIHx8IDA7XG5cdFx0XHRcdFx0XHRcdFx0cmVjb3JkLmZvcm1hbGRlaHlkZSA9IHBhcnNlRmxvYXQocmVjb3JkLmZvcm1hbGRlaHlkZSkgfHwgMDtcblx0XHRcdFx0XHRcdFx0XHRyZWNvcmQucG0yNSA9IHBhcnNlRmxvYXQocmVjb3JkLnBtMjUpIHx8IDA7XG5cdFx0XHRcdFx0XHRcdFx0cmVjb3JkLmV4Y2VlZF9saW1pdCA9IHBhcnNlSW50KHJlY29yZC5leGNlZWRfbGltaXQpIHx8IDA7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eOr+Wig+ebkea1i+iusOW9leafpeivouaIkOWKn++8jOWFsScsIHJlcy5sZW5ndGgsICfmnaEnKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnlUaW1lID0gdGhpcy5mb3JtYXRUaW1lKG5ldyBEYXRlKCkpO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdChcIuaaguaXoOeOr+Wig+ebkea1i+iusOW9lVwiKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdChg5p+l6K+i5YiwICR7cmVzLmxlbmd0aH0g5p2h6K6w5b2VYCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwi5p+l6K+i546v5aKD55uR5rWL6K6w5b2V6ZSZ6K+vXCIsIGVycm9yKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5zaG93VG9hc3QoXCLmn6Xor6Lljoblj7LmlbDmja7lpLHotKVcIik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdChcIuaVsOaNruW6k+acquaJk+W8gFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIuafpeivouWOhuWPsuaVsOaNruW8guW4uDpcIiwgZXJyb3IpO1xuXHRcdFx0XHR0aGlzLnNob3dUb2FzdChcIuafpeivouWksei0pVwiKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdC8vIOa4heepuuaJgOacieaVsOaNrlxuXHRcdGFzeW5jIGNsZWFyQWxsRGF0YSgpIHtcblx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHR0aXRsZTogJ+ehruiupOa4heepuicsXG5cdFx0XHRcdGNvbnRlbnQ6ICfnoa7lrpropoHmuIXnqbrmiYDmnInnjq/looPnm5HmtYvorrDlvZXlkJfvvJ/mraTmk43kvZzkuI3lj6/mgaLlpI3vvIEnLFxuXHRcdFx0XHRzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLm9wZW5TUUwoKTtcblx0XHRcdFx0XHRcdFx0bGV0IG9wZW4gPSBEQi5pc09wZW4oKTtcblx0XHRcdFx0XHRcdFx0aWYgKG9wZW4pIHtcblx0XHRcdFx0XHRcdFx0XHREQi5kZWxldGVUYWJsZURhdGEoXCJlbnZpcm9ubWVudF9yZWNvcmRzXCIpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdChcIueOr+Wig+ebkea1i+iusOW9lea4heepuuaIkOWKn1wiKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5lbnZpcm9ubWVudFJlY29yZHMgPSBbXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnlUaW1lID0gdGhpcy5mb3JtYXRUaW1lKG5ldyBEYXRlKCkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KFwi5riF56m66K6w5b2V5aSx6LSlXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwi5Yig6Zmk5aSx6LSlXCIsIGVycm9yKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KFwi5pWw5o2u5bqT5pyq5omT5byAXCIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwi5riF56m66K6w5b2V5byC5bi4OlwiLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KFwi5riF56m65aSx6LSlXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRcblx0XHQvLyDliKDpmaTljZXmnaHorrDlvZVcblx0XHRhc3luYyBkZWxldGVSZWNvcmQocmVjb3JkSWQpIHtcblx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHR0aXRsZTogJ+ehruiupOWIoOmZpCcsXG5cdFx0XHRcdGNvbnRlbnQ6ICfnoa7lrpropoHliKDpmaTov5nmnaHorrDlvZXlkJfvvJ8nLFxuXHRcdFx0XHRzdWNjZXNzOiBhc3luYyAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLm9wZW5TUUwoKTtcblx0XHRcdFx0XHRcdFx0bGV0IG9wZW4gPSBEQi5pc09wZW4oKTtcblx0XHRcdFx0XHRcdFx0aWYgKG9wZW4pIHtcblx0XHRcdFx0XHRcdFx0XHREQi5kZWxldGVUYWJsZURhdGEoXCJlbnZpcm9ubWVudF9yZWNvcmRzXCIsIFwiaWRcIiwgcmVjb3JkSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdChcIuiusOW9leWIoOmZpOaIkOWKn1wiKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8g6YeN5paw5p+l6K+i5pWw5o2uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucXVlcnlIaXN0b3J5RGF0YSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KFwi5Yig6Zmk6K6w5b2V5aSx6LSlXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwi5Yig6Zmk5aSx6LSlXCIsIGVycm9yKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KFwi5pWw5o2u5bqT5pyq5omT5byAXCIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwi5Yig6Zmk6K6w5b2V5byC5bi4OlwiLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KFwi5Yig6Zmk5aSx6LSlXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRcblx0XHQvLyDliIfmjaLlvILluLjmlbDmja7nrZvpgIlcblx0XHR0b2dnbGVFeGNlZWRGaWx0ZXIoKSB7XG5cdFx0XHR0aGlzLnNob3dFeGNlZWRPbmx5ID0gIXRoaXMuc2hvd0V4Y2VlZE9ubHk7XG5cdFx0fSxcblx0XHRcblx0XHQvLyDmoLzlvI/ljJbmmL7npLrml7bpl7TvvIjnroDljJbmoLzlvI/vvIlcblx0XHRmb3JtYXREaXNwbGF5VGltZShmdWxsRGF0ZVRpbWUpIHtcblx0XHRcdGlmICghZnVsbERhdGVUaW1lKSByZXR1cm4gJy0tJztcblx0XHRcdFxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8g5qC85byP77yaTU0tREQgSEg6TU1cblx0XHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRlVGltZSk7XG5cdFx0XHRcdGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcblx0XHRcdFx0Y29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXHRcdFx0XHRjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdFx0XHRcdGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gYCR7bW9udGh9LSR7ZGF5fSAke2hvdXJzfToke21pbnV0ZXN9YDtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdC8vIOWmguaenOino+aekOWksei0pe+8jOWwneivleaIquaWreaYvuekulxuXHRcdFx0XHRpZiAoZnVsbERhdGVUaW1lLmxlbmd0aCA+IDE2KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bGxEYXRlVGltZS5zdWJzdHJpbmcoNSwgMTYpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmdWxsRGF0ZVRpbWU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcblx0XHQvLyDmoLzlvI/ljJblvZPliY3ml7bpl7Rcblx0XHRmb3JtYXRUaW1lKGRhdGUpIHtcblx0XHRcdGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcblx0XHRcdGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdFx0XHRjb25zdCBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXHRcdFx0cmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuXHRcdH0sXG5cdFx0XG5cdFx0Ly8g5qOA5p+l5pWw5YC85piv5ZCm6LaF5Ye66ZiI5YC8XG5cdFx0aXNWYWx1ZUV4Y2VlZCh0eXBlLCB2YWx1ZSkge1xuXHRcdFx0Y29uc3QgdGhyZXNob2xkID0gdGhpcy5jdXJyZW50VGhyZXNob2xkc1t0eXBlXTtcblx0XHRcdGlmICghdGhyZXNob2xkKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcblx0XHRcdHJldHVybiB2YWx1ZSA8IHRocmVzaG9sZC5taW4gfHwgdmFsdWUgPiB0aHJlc2hvbGQubWF4O1xuXHRcdH0sXG5cdFx0XG5cdFx0Ly8g5o+Q56S65qGGXG5cdFx0c2hvd1RvYXN0KHN0cikge1xuXHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHR0aXRsZTogc3RyLFxuXHRcdFx0XHRtYXNrOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMFxuXHRcdFx0fSk7XG5cdFx0fSxcblx0fVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*****************************************************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/historyData/historyData.vue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _historyData_vue_vue_type_template_id_57cdde94_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historyData.vue?vue&type=template&id=57cdde94&mpType=page */ 24);\n/* harmony import */ var _historyData_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historyData.vue?vue&type=script&lang=js&mpType=page */ 26);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _historyData_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _historyData_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _historyData_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _historyData_vue_vue_type_template_id_57cdde94_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _historyData_vue_vue_type_template_id_57cdde94_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _historyData_vue_vue_type_template_id_57cdde94_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/historyData/historyData.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDMEU7QUFDTDs7O0FBR3JFO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2hpc3RvcnlEYXRhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2NkZGU5NCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaGlzdG9yeURhdGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hpc3RvcnlEYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaGlzdG9yeURhdGEvaGlzdG9yeURhdGEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!***********************************************************************************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/historyData/historyData.vue?vue&type=template&id=57cdde94&mpType=page ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_template_id_57cdde94_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./historyData.vue?vue&type=template&id=57cdde94&mpType=page */ 25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_template_id_57cdde94_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_template_id_57cdde94_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_template_id_57cdde94_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_template_id_57cdde94_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 25 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/historyData/historyData.vue?vue&type=template&id=57cdde94&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "header"), attrs: { _i: 1 } },
        [
          _c("text", {
            staticClass: _vm._$s(2, "sc", "title"),
            attrs: { _i: 2 },
          }),
          _c("text", {
            staticClass: _vm._$s(3, "sc", "subtitle"),
            attrs: { _i: 3 },
          }),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(4, "sc", "dev-area"), attrs: { _i: 4 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(5, "sc", "loginBtn"),
              attrs: { _i: 5 },
              on: {
                click: function ($event) {
                  return _vm.selectParkingData()
                },
              },
            },
            [
              _c("text", {
                staticClass: _vm._$s(6, "sc", "btnValue"),
                attrs: { _i: 6 },
              }),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(7, "sc", "loginBtn delete-btn"),
              attrs: { _i: 7 },
              on: {
                click: function ($event) {
                  return _vm.deleteParkingData()
                },
              },
            },
            [
              _c("text", {
                staticClass: _vm._$s(8, "sc", "btnValue"),
                attrs: { _i: 8 },
              }),
            ]
          ),
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(9, "sc", "records-container"),
          attrs: { _i: 9 },
        },
        [
          _c("view", {
            staticClass: _vm._$s(10, "sc", "records-title"),
            attrs: { _i: 10 },
          }),
          _c(
            "scroll-view",
            {
              staticClass: _vm._$s(11, "sc", "records-scroll"),
              style: _vm._$s(11, "s", { height: _vm.scrollHeight + "px" }),
              attrs: { _i: 11 },
            },
            [
              _vm._l(
                _vm._$s(12, "f", { forItems: _vm.parkingRecords }),
                function (item, index, $20, $30) {
                  return _c(
                    "view",
                    {
                      key: _vm._$s(12, "f", { forIndex: $20, key: index }),
                      staticClass: _vm._$s("12-" + $30, "sc", "record-card"),
                      attrs: { _i: "12-" + $30 },
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "13-" + $30,
                            "sc",
                            "card-header"
                          ),
                          attrs: { _i: "13-" + $30 },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "14-" + $30,
                                "sc",
                                "vehicle-number"
                              ),
                              attrs: { _i: "14-" + $30 },
                            },
                            [
                              _c("text", {
                                staticClass: _vm._$s(
                                  "15-" + $30,
                                  "sc",
                                  "vehicle-icon"
                                ),
                                attrs: { _i: "15-" + $30 },
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: _vm._$s(
                                    "16-" + $30,
                                    "sc",
                                    "vehicle-text"
                                  ),
                                  attrs: { _i: "16-" + $30 },
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      "16-" + $30,
                                      "t0-0",
                                      _vm._s(item.vehicle_id)
                                    )
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "17-" + $30,
                                "sc",
                                "record-status"
                              ),
                              class: _vm._$s("17-" + $30, "c", {
                                "status-parking": !item.exit_time,
                                "status-left": item.exit_time,
                              }),
                              attrs: { _i: "17-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "17-" + $30,
                                  "t0-0",
                                  _vm._s(item.exit_time ? "已离场" : "停车中")
                                )
                              ),
                            ]
                          ),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            "18-" + $30,
                            "sc",
                            "card-content"
                          ),
                          attrs: { _i: "18-" + $30 },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "19-" + $30,
                                "sc",
                                "time-row"
                              ),
                              attrs: { _i: "19-" + $30 },
                            },
                            [
                              _c("text", {
                                staticClass: _vm._$s(
                                  "20-" + $30,
                                  "sc",
                                  "time-label"
                                ),
                                attrs: { _i: "20-" + $30 },
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: _vm._$s(
                                    "21-" + $30,
                                    "sc",
                                    "time-value"
                                  ),
                                  attrs: { _i: "21-" + $30 },
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      "21-" + $30,
                                      "t0-0",
                                      _vm._s(
                                        _vm.formatDisplayDate(item.enter_time)
                                      )
                                    )
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "22-" + $30,
                                "sc",
                                "time-row"
                              ),
                              attrs: { _i: "22-" + $30 },
                            },
                            [
                              _c("text", {
                                staticClass: _vm._$s(
                                  "23-" + $30,
                                  "sc",
                                  "time-label"
                                ),
                                attrs: { _i: "23-" + $30 },
                              }),
                              _c(
                                "text",
                                {
                                  staticClass: _vm._$s(
                                    "24-" + $30,
                                    "sc",
                                    "time-value"
                                  ),
                                  attrs: { _i: "24-" + $30 },
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      "24-" + $30,
                                      "t0-0",
                                      _vm._s(
                                        item.exit_time
                                          ? _vm.formatDisplayDate(
                                              item.exit_time
                                            )
                                          : "--"
                                      )
                                    )
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "25-" + $30,
                                "sc",
                                "info-row"
                              ),
                              attrs: { _i: "25-" + $30 },
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "26-" + $30,
                                    "sc",
                                    "info-item"
                                  ),
                                  attrs: { _i: "26-" + $30 },
                                },
                                [
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      "27-" + $30,
                                      "sc",
                                      "info-label"
                                    ),
                                    attrs: { _i: "27-" + $30 },
                                  }),
                                  _c(
                                    "text",
                                    {
                                      staticClass: _vm._$s(
                                        "28-" + $30,
                                        "sc",
                                        "info-value"
                                      ),
                                      attrs: { _i: "28-" + $30 },
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "28-" + $30,
                                          "t0-0",
                                          _vm._s(item.duration_minutes || "0")
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "29-" + $30,
                                    "sc",
                                    "info-item"
                                  ),
                                  attrs: { _i: "29-" + $30 },
                                },
                                [
                                  _c("text", {
                                    staticClass: _vm._$s(
                                      "30-" + $30,
                                      "sc",
                                      "info-label"
                                    ),
                                    attrs: { _i: "30-" + $30 },
                                  }),
                                  _c(
                                    "text",
                                    {
                                      staticClass: _vm._$s(
                                        "31-" + $30,
                                        "sc",
                                        "info-value fee"
                                      ),
                                      attrs: { _i: "31-" + $30 },
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "31-" + $30,
                                          "t0-0",
                                          _vm._s((item.fee || 0).toFixed(2))
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  )
                }
              ),
              _vm._$s(32, "i", _vm.parkingRecords.length === 0)
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(32, "sc", "no-data"),
                      attrs: { _i: 32 },
                    },
                    [_c("text")]
                  )
                : _vm._e(),
            ],
            2
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(34, "sc", "footer-info"), attrs: { _i: 34 } },
        [
          _c(
            "text",
            {
              staticClass: _vm._$s(35, "sc", "footer-text"),
              attrs: { _i: 35 },
            },
            [_vm._v(_vm._$s(35, "t0-0", _vm._s(_vm.parkingRecords.length)))]
          ),
          _c(
            "text",
            {
              staticClass: _vm._$s(36, "sc", "footer-text"),
              attrs: { _i: 36 },
            },
            [_vm._v(_vm._$s(36, "t0-0", _vm._s(_vm.getLatestRecordTime())))]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 26 */
/*!*****************************************************************************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/historyData/historyData.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./historyData.vue?vue&type=script&lang=js&mpType=page */ 27);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_historyData_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZtQixDQUFnQiw0b0JBQUcsRUFBQyIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGlzdG9yeURhdGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGlzdG9yeURhdGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/pages/historyData/historyData.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15));\nvar _sqlite = _interopRequireDefault(__webpack_require__(/*! @/sqlite.js */ 16));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入封装的 sqlite\nvar _default = {\n  data: function data() {\n    return {\n      parkingRecords: [],\n      scrollHeight: 500\n    };\n  },\n  onShow: function onShow() {\n    // 页面显示时自动查询停车记录\n    this.selectParkingData();\n    // 动态计算滚动区域高度\n    this.calcScrollHeight();\n  },\n  onReady: function onReady() {\n    // 页面加载完成后重新计算高度\n    this.calcScrollHeight();\n  },\n  methods: {\n    // 计算滚动区域高度\n    calcScrollHeight: function calcScrollHeight() {\n      var that = this;\n      uni.getSystemInfo({\n        success: function success(res) {\n          // 计算可用高度：屏幕高度 - 头部高度 - 按钮区域高度 - 底部信息高度\n          var windowHeight = res.windowHeight;\n          var usableHeight = windowHeight - 200 - 120 - 100;\n          that.scrollHeight = usableHeight > 400 ? usableHeight : 400;\n        }\n      });\n    },\n    // 打开数据库\n    openSQL: function openSQL() {\n      return new Promise(function (resolve, reject) {\n        var open = _sqlite.default.isOpen();\n        __f__(\"log\", \"数据库状态\", open ? \"开启\" : \"关闭\", \" at pages/historyData/historyData.vue:112\");\n        if (!open) {\n          _sqlite.default.openSqlite().then(function (res) {\n            resolve(res);\n          }).catch(function (error) {\n            reject(error);\n          });\n        } else {\n          resolve(true);\n        }\n      });\n    },\n    // 查询停车记录\n    selectParkingData: function selectParkingData() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var open;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return _this.openSQL();\n              case 3:\n                open = _sqlite.default.isOpen();\n                if (open) {\n                  _sqlite.default.selectTableData(\"parking_records\").then(function (res) {\n                    // 按入场时间倒序排列，最新的记录在前面\n                    _this.parkingRecords = res.sort(function (a, b) {\n                      return new Date(b.enter_time) - new Date(a.enter_time);\n                    });\n                    __f__(\"log\", '停车记录:', res, \" at pages/historyData/historyData.vue:139\");\n                    if (res.length === 0) {\n                      _this.showToast(\"暂无停车记录\");\n                    }\n                  }).catch(function (error) {\n                    __f__(\"log\", \"查询停车记录错误\", error, \" at pages/historyData/historyData.vue:145\");\n                    _this.showToast(\"查询停车记录失败\");\n                  });\n                } else {\n                  _this.showToast(\"数据库未打开\");\n                }\n                _context.next = 11;\n                break;\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                __f__(\"error\", \"查询停车记录异常:\", _context.t0, \" at pages/historyData/historyData.vue:152\");\n                _this.showToast(\"查询失败\");\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }))();\n    },\n    // 删除停车记录\n    deleteParkingData: function deleteParkingData() {\n      var _this2 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                uni.showModal({\n                  title: '确认清空',\n                  content: '确定要清空所有停车记录吗？',\n                  success: function () {\n                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {\n                      var open;\n                      return _regenerator.default.wrap(function _callee2$(_context2) {\n                        while (1) {\n                          switch (_context2.prev = _context2.next) {\n                            case 0:\n                              if (!res.confirm) {\n                                _context2.next = 12;\n                                break;\n                              }\n                              _context2.prev = 1;\n                              _context2.next = 4;\n                              return _this2.openSQL();\n                            case 4:\n                              open = _sqlite.default.isOpen();\n                              if (open) {\n                                _sqlite.default.deleteTableData(\"parking_records\").then(function (res) {\n                                  _this2.showToast(\"停车记录清空成功\");\n                                  _this2.selectParkingData();\n                                }).catch(function (error) {\n                                  _this2.showToast(\"停车记录清空失败\");\n                                  __f__(\"log\", \"删除失败\", error, \" at pages/historyData/historyData.vue:175\");\n                                });\n                              } else {\n                                _this2.showToast(\"数据库未打开\");\n                              }\n                              _context2.next = 12;\n                              break;\n                            case 8:\n                              _context2.prev = 8;\n                              _context2.t0 = _context2[\"catch\"](1);\n                              __f__(\"error\", \"清空停车记录异常:\", _context2.t0, \" at pages/historyData/historyData.vue:181\");\n                              _this2.showToast(\"清空失败\");\n                            case 12:\n                            case \"end\":\n                              return _context2.stop();\n                          }\n                        }\n                      }, _callee2, null, [[1, 8]]);\n                    }));\n                    function success(_x) {\n                      return _success.apply(this, arguments);\n                    }\n                    return success;\n                  }()\n                });\n              case 1:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    },\n    // 格式化显示时间\n    formatDisplayDate: function formatDisplayDate(fullDateTime) {\n      if (!fullDateTime) return '--';\n      try {\n        // 将完整时间格式化为更简洁的显示\n        var date = new Date(fullDateTime);\n        var month = (date.getMonth() + 1).toString().padStart(2, '0');\n        var day = date.getDate().toString().padStart(2, '0');\n        var hours = date.getHours().toString().padStart(2, '0');\n        var minutes = date.getMinutes().toString().padStart(2, '0');\n        return \"\".concat(month, \"-\").concat(day, \" \").concat(hours, \":\").concat(minutes);\n      } catch (error) {\n        // 如果解析失败，尝试截断显示\n        if (fullDateTime.length > 16) {\n          return fullDateTime.substring(5, 16);\n        }\n        return fullDateTime;\n      }\n    },\n    // 获取最新记录时间\n    getLatestRecordTime: function getLatestRecordTime() {\n      if (this.parkingRecords.length === 0) {\n        return '暂无记录';\n      }\n      var latest = this.parkingRecords[0];\n      return this.formatDisplayDate(latest.enter_time);\n    },\n    // 提示框\n    showToast: function showToast(str) {\n      uni.showToast({\n        icon: \"none\",\n        title: str,\n        mask: true,\n        duration: 2000\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaGlzdG9yeURhdGEvaGlzdG9yeURhdGEudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJwYXJraW5nUmVjb3JkcyIsInNjcm9sbEhlaWdodCIsIm9uU2hvdyIsIm9uUmVhZHkiLCJtZXRob2RzIiwiY2FsY1Njcm9sbEhlaWdodCIsInVuaSIsInN1Y2Nlc3MiLCJ0aGF0Iiwib3BlblNRTCIsIkRCIiwidGhlbiIsInJlc29sdmUiLCJjYXRjaCIsInJlamVjdCIsInNlbGVjdFBhcmtpbmdEYXRhIiwib3BlbiIsImRlbGV0ZVBhcmtpbmdEYXRhIiwidGl0bGUiLCJjb250ZW50IiwicmVzIiwiZm9ybWF0RGlzcGxheURhdGUiLCJnZXRMYXRlc3RSZWNvcmRUaW1lIiwic2hvd1RvYXN0IiwiaWNvbiIsIm1hc2siLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBMkVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGVBQ0E7RUFDQUE7SUFDQTtNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQTtNQUNBQztRQUNBQztVQUNBO1VBQ0E7VUFDQTtVQUNBQztRQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7UUFDQTtRQUNBO1FBQ0E7VUFDQUMsNkJBQ0FDO1lBQ0FDO1VBQ0EsR0FDQUM7WUFDQUM7VUFDQTtRQUNBO1VBQ0FGO1FBQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQUc7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQSxPQUVBO2NBQUE7Z0JBQ0FDO2dCQUNBO2tCQUNBTixtREFDQUM7b0JBQ0E7b0JBQ0E7c0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7c0JBQ0E7b0JBQ0E7a0JBQ0EsR0FDQUU7b0JBQ0E7b0JBQ0E7a0JBQ0E7Z0JBQ0E7a0JBQ0E7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Y0FBQTtnQkFBQTtnQkFBQTtnQkFFQTtnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUVBO0lBRUE7SUFDQUk7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ0FYO2tCQUNBWTtrQkFDQUM7a0JBQ0FaO29CQUFBO3NCQUFBO3NCQUFBO3dCQUFBOzBCQUFBOzRCQUFBOzhCQUFBLEtBQ0FhO2dDQUFBO2dDQUFBOzhCQUFBOzhCQUFBOzhCQUFBOzhCQUFBLE9BRUE7NEJBQUE7OEJBQ0FKOzhCQUNBO2dDQUNBTixtREFDQUM7a0NBQ0E7a0NBQ0E7Z0NBQ0EsR0FDQUU7a0NBQ0E7a0NBQ0E7Z0NBQ0E7OEJBQ0E7Z0NBQ0E7OEJBQ0E7OEJBQUE7OEJBQUE7NEJBQUE7OEJBQUE7OEJBQUE7OEJBRUE7OEJBQ0E7NEJBQUE7NEJBQUE7OEJBQUE7MEJBQUE7d0JBQUE7c0JBQUE7b0JBQUEsQ0FHQTtvQkFBQTtzQkFBQTtvQkFBQTtvQkFBQTtrQkFBQTtnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBRUE7SUFDQVE7TUFDQTtNQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBRUE7TUFDQTtRQUNBO1FBQ0E7VUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTtRQUNBO01BQ0E7TUFFQTtNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBakI7UUFDQWtCO1FBQ0FOO1FBQ0FPO1FBQ0FDO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJcIj5cblx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGVcIj7mmbrog73lgZzovablnLrns7vnu588L3RleHQ+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cInN1YnRpdGxlXCI+5YGc6L2m6K6w5b2V5p+l6K+iPC90ZXh0PlxuXHRcdDwvdmlldz5cblx0XHRcblx0XHQ8dmlldyBjbGFzcz1cImRldi1hcmVhXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImxvZ2luQnRuXCIgQGNsaWNrPVwic2VsZWN0UGFya2luZ0RhdGEoKVwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJ0blZhbHVlXCI+5p+l6K+i5YGc6L2m6K6w5b2VPC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb2dpbkJ0biBkZWxldGUtYnRuXCIgQGNsaWNrPVwiZGVsZXRlUGFya2luZ0RhdGEoKVwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJ0blZhbHVlXCI+5riF56m66K6w5b2VPC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHRcblx0XHQ8IS0tIOWBnOi9puiusOW9leWNoeeJh+W8j+WIl+ihqCAtLT5cblx0XHQ8dmlldyBjbGFzcz1cInJlY29yZHMtY29udGFpbmVyXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInJlY29yZHMtdGl0bGVcIj7lgZzovaborrDlvZU8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteT1cInRydWVcIiBjbGFzcz1cInJlY29yZHMtc2Nyb2xsXCIgOnN0eWxlPVwie2hlaWdodDogc2Nyb2xsSGVpZ2h0ICsgJ3B4J31cIj5cblx0XHRcdFx0PHZpZXcgXG5cdFx0XHRcdFx0Y2xhc3M9XCJyZWNvcmQtY2FyZFwiIFxuXHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwYXJraW5nUmVjb3Jkc1wiIFxuXHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZlaGljbGUtbnVtYmVyXCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmVoaWNsZS1pY29uXCI+8J+alzwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ2ZWhpY2xlLXRleHRcIj7ovabovoZ7eyBpdGVtLnZlaGljbGVfaWQgfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJlY29yZC1zdGF0dXNcIiA6Y2xhc3M9XCJ7J3N0YXR1cy1wYXJraW5nJzogIWl0ZW0uZXhpdF90aW1lLCAnc3RhdHVzLWxlZnQnOiBpdGVtLmV4aXRfdGltZX1cIj5cblx0XHRcdFx0XHRcdFx0e3sgaXRlbS5leGl0X3RpbWUgPyAn5bey56a75Zy6JyA6ICflgZzovabkuK0nIH19XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpbWUtcm93XCI+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZS1sYWJlbFwiPuWFpeWcuuaXtumXtDo8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZS12YWx1ZVwiPnt7IGZvcm1hdERpc3BsYXlEYXRlKGl0ZW0uZW50ZXJfdGltZSkgfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGltZS1yb3dcIj5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lLWxhYmVsXCI+56a75Zy65pe26Ze0OjwvdGV4dD5cblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lLXZhbHVlXCI+e3sgaXRlbS5leGl0X3RpbWUgPyBmb3JtYXREaXNwbGF5RGF0ZShpdGVtLmV4aXRfdGltZSkgOiAnLS0nIH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImluZm8tcm93XCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5mby1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpbmZvLWxhYmVsXCI+5YGc6L2m5pe26ZW/OjwvdGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImluZm8tdmFsdWVcIj57eyBpdGVtLmR1cmF0aW9uX21pbnV0ZXMgfHwgJzAnIH195YiG6ZKfPC90ZXh0PlxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImluZm8taXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaW5mby1sYWJlbFwiPuWBnOi9pui0ueeUqDo8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpbmZvLXZhbHVlIGZlZVwiPsKle3sgKGl0ZW0uZmVlIHx8IDApLnRvRml4ZWQoMikgfX08L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJwYXJraW5nUmVjb3Jkcy5sZW5ndGggPT09IDBcIiBjbGFzcz1cIm5vLWRhdGFcIj5cblx0XHRcdFx0XHQ8dGV4dD7mmoLml6DlgZzovaborrDlvZU8L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvc2Nyb2xsLXZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdDx2aWV3IGNsYXNzPVwiZm9vdGVyLWluZm9cIj5cblx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9vdGVyLXRleHRcIj7orrDlvZXmgLvmlbA6IHt7IHBhcmtpbmdSZWNvcmRzLmxlbmd0aCB9fSDmnaE8L3RleHQ+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cImZvb3Rlci10ZXh0XCI+5pyA5paw6K6w5b2VOiB7eyBnZXRMYXRlc3RSZWNvcmRUaW1lKCkgfX08L3RleHQ+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgREIgZnJvbSBcIkAvc3FsaXRlLmpzXCI7ICAvLyDlvJXlhaXlsIHoo4XnmoQgc3FsaXRlXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cGFya2luZ1JlY29yZHM6IFtdLFxuXHRcdFx0XHRzY3JvbGxIZWlnaHQ6IDUwMCxcblx0XHRcdH1cblx0XHR9LCBcblx0XHRvblNob3coKSB7XG5cdFx0XHQvLyDpobXpnaLmmL7npLrml7boh6rliqjmn6Xor6LlgZzovaborrDlvZVcblx0XHRcdHRoaXMuc2VsZWN0UGFya2luZ0RhdGEoKTtcblx0XHRcdC8vIOWKqOaAgeiuoeeul+a7muWKqOWMuuWfn+mrmOW6plxuXHRcdFx0dGhpcy5jYWxjU2Nyb2xsSGVpZ2h0KCk7XG5cdFx0fSxcblx0XHRvblJlYWR5KCkge1xuXHRcdFx0Ly8g6aG16Z2i5Yqg6L295a6M5oiQ5ZCO6YeN5paw6K6h566X6auY5bqmXG5cdFx0XHR0aGlzLmNhbGNTY3JvbGxIZWlnaHQoKTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOiuoeeul+a7muWKqOWMuuWfn+mrmOW6plxuXHRcdFx0Y2FsY1Njcm9sbEhlaWdodCgpIHtcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXM7XG5cdFx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0Ly8g6K6h566X5Y+v55So6auY5bqm77ya5bGP5bmV6auY5bqmIC0g5aS06YOo6auY5bqmIC0g5oyJ6ZKu5Yy65Z+f6auY5bqmIC0g5bqV6YOo5L+h5oGv6auY5bqmXG5cdFx0XHRcdFx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xuXHRcdFx0XHRcdFx0Y29uc3QgdXNhYmxlSGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gMjAwIC0gMTIwIC0gMTAwO1xuXHRcdFx0XHRcdFx0dGhhdC5zY3JvbGxIZWlnaHQgPSB1c2FibGVIZWlnaHQgPiA0MDAgPyB1c2FibGVIZWlnaHQgOiA0MDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOaJk+W8gOaVsOaNruW6k1xuXHRcdFx0b3BlblNRTCgpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRsZXQgb3BlbiA9IERCLmlzT3BlbigpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5pWw5o2u5bqT54q25oCBXCIsIG9wZW4gPyBcIuW8gOWQr1wiIDogXCLlhbPpl61cIik7XG5cdFx0XHRcdFx0aWYgKCFvcGVuKSB7XG5cdFx0XHRcdFx0XHREQi5vcGVuU3FsaXRlKClcblx0XHRcdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKHJlcyk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOafpeivouWBnOi9puiusOW9lVxuXHRcdFx0YXN5bmMgc2VsZWN0UGFya2luZ0RhdGEoKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5vcGVuU1FMKCk7XG5cdFx0XHRcdFx0bGV0IG9wZW4gPSBEQi5pc09wZW4oKTtcblx0XHRcdFx0XHRpZiAob3Blbikge1xuXHRcdFx0XHRcdFx0REIuc2VsZWN0VGFibGVEYXRhKFwicGFya2luZ19yZWNvcmRzXCIpXG5cdFx0XHRcdFx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8g5oyJ5YWl5Zy65pe26Ze05YCS5bqP5o6S5YiX77yM5pyA5paw55qE6K6w5b2V5Zyo5YmN6Z2iXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wYXJraW5nUmVjb3JkcyA9IHJlcy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IERhdGUoYi5lbnRlcl90aW1lKSAtIG5ldyBEYXRlKGEuZW50ZXJfdGltZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+WBnOi9puiusOW9lTonLCByZXMpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdChcIuaaguaXoOWBnOi9puiusOW9lVwiKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLmn6Xor6LlgZzovaborrDlvZXplJnor69cIiwgZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KFwi5p+l6K+i5YGc6L2m6K6w5b2V5aSx6LSlXCIpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93VG9hc3QoXCLmlbDmja7lupPmnKrmiZPlvIBcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCLmn6Xor6LlgZzovaborrDlvZXlvILluLg6XCIsIGVycm9yKTtcblx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdChcIuafpeivouWksei0pVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5Yig6Zmk5YGc6L2m6K6w5b2VXG5cdFx0XHRhc3luYyBkZWxldGVQYXJraW5nRGF0YSgpIHtcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0dGl0bGU6ICfnoa7orqTmuIXnqbonLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICfnoa7lrpropoHmuIXnqbrmiYDmnInlgZzovaborrDlvZXlkJfvvJ8nLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGFzeW5jIChyZXMpID0+IHtcblx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMub3BlblNRTCgpO1xuXHRcdFx0XHRcdFx0XHRcdGxldCBvcGVuID0gREIuaXNPcGVuKCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG9wZW4pIHtcblx0XHRcdFx0XHRcdFx0XHRcdERCLmRlbGV0ZVRhYmxlRGF0YShcInBhcmtpbmdfcmVjb3Jkc1wiKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KFwi5YGc6L2m6K6w5b2V5riF56m65oiQ5YqfXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0UGFya2luZ0RhdGEoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdChcIuWBnOi9puiusOW9lea4heepuuWksei0pVwiKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuWIoOmZpOWksei0pVwiLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dUb2FzdChcIuaVsOaNruW6k+acquaJk+W8gFwiKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIua4heepuuWBnOi9puiusOW9leW8guW4uDpcIiwgZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1RvYXN0KFwi5riF56m65aSx6LSlXCIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOagvOW8j+WMluaYvuekuuaXtumXtFxuXHRcdFx0Zm9ybWF0RGlzcGxheURhdGUoZnVsbERhdGVUaW1lKSB7XG5cdFx0XHRcdGlmICghZnVsbERhdGVUaW1lKSByZXR1cm4gJy0tJztcblx0XHRcdFx0XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8g5bCG5a6M5pW05pe26Ze05qC85byP5YyW5Li65pu0566A5rSB55qE5pi+56S6XG5cdFx0XHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRlVGltZSk7XG5cdFx0XHRcdFx0Y29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXHRcdFx0XHRcdGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcblx0XHRcdFx0XHRjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdFx0XHRcdFx0Y29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gYCR7bW9udGh9LSR7ZGF5fSAke2hvdXJzfToke21pbnV0ZXN9YDtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHQvLyDlpoLmnpzop6PmnpDlpLHotKXvvIzlsJ3or5XmiKrmlq3mmL7npLpcblx0XHRcdFx0XHRpZiAoZnVsbERhdGVUaW1lLmxlbmd0aCA+IDE2KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZnVsbERhdGVUaW1lLnN1YnN0cmluZyg1LCAxNik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBmdWxsRGF0ZVRpbWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8vIOiOt+WPluacgOaWsOiusOW9leaXtumXtFxuXHRcdFx0Z2V0TGF0ZXN0UmVjb3JkVGltZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFya2luZ1JlY29yZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuICfmmoLml6DorrDlvZUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBsYXRlc3QgPSB0aGlzLnBhcmtpbmdSZWNvcmRzWzBdO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXREaXNwbGF5RGF0ZShsYXRlc3QuZW50ZXJfdGltZSk7XG5cdFx0XHR9LFxuXHRcdFxuXHRcdFx0Ly8g5o+Q56S65qGGXG5cdFx0XHRzaG93VG9hc3Q6IGZ1bmN0aW9uKHN0cikge1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHR0aXRsZTogc3RyLFxuXHRcdFx0XHRcdG1hc2s6IHRydWUsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdH1cblx0fTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5jb250ZW50IHtcblx0XHRiYWNrZ3JvdW5kOiAjMmMzZTUwO1xuXHRcdHdpZHRoOiAxMDB2dztcblx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0XHRwYWRkaW5nOiAyMHJweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblx0XG5cdC5oZWFkZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiAzMHJweDtcblx0fVxuXHRcblx0LnRpdGxlIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiAzOHJweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHJweDtcblx0fVxuXHRcblx0LnN1YnRpdGxlIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXHRcdGZvbnQtc2l6ZTogMjhycHg7XG5cdH1cblx0XG5cdC5kZXYtYXJlYSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBycHg7XG5cdH1cblx0XG5cdC5sb2dpbkJ0biB7XG5cdFx0d2lkdGg6IDQ4JTtcblx0XHRoZWlnaHQ6IDgwcnB4O1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzM0OThkYiwgIzI5ODBiOSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogNDBycHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGJveC1zaGFkb3c6IDAgNXJweCAxNXJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdH1cblx0XG5cdC5sb2dpbkJ0bjphY3RpdmUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG5cdH1cblx0XG5cdC5sb2dpbkJ0bi5kZWxldGUtYnRuIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xuXHR9XG5cdFxuXHQubG9naW5CdG4gLmJ0blZhbHVlIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiAyOHJweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0fVxuXHRcblx0LnJlY29yZHMtY29udGFpbmVyIHtcblx0XHRmbGV4OiAxO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xuXHRcdHBhZGRpbmc6IDIwcnB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcnB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdH1cblx0XG5cdC5yZWNvcmRzLXRpdGxlIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiAzNHJweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0XG5cdC5yZWNvcmRzLXNjcm9sbCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0XG5cdC5yZWNvcmQtY2FyZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcblx0XHRwYWRkaW5nOiAyNXJweDtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcblx0XHRib3gtc2hhZG93OiAwIDRycHggMTJycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHR9XG5cdFxuXHQucmVjb3JkLWNhcmQ6bGFzdC1jaGlsZCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHRcblx0LmNhcmQtaGVhZGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcnB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAxNXJweDtcblx0XHRib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcblx0fVxuXHRcblx0LnZlaGljbGUtbnVtYmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblx0XG5cdC52ZWhpY2xlLWljb24ge1xuXHRcdGZvbnQtc2l6ZTogMzZycHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxNXJweDtcblx0fVxuXHRcblx0LnZlaGljbGUtdGV4dCB7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdGZvbnQtc2l6ZTogMzBycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cblx0XG5cdC5yZWNvcmQtc3RhdHVzIHtcblx0XHRmb250LXNpemU6IDI2cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdHBhZGRpbmc6IDhycHggMjBycHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XG5cdH1cblx0XG5cdC5zdGF0dXMtcGFya2luZyB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cblx0XG5cdC5zdGF0dXMtbGVmdCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTtcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cblx0XG5cdC5jYXJkLWNvbnRlbnQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXHRcblx0LnRpbWUtcm93IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXJweDtcblx0fVxuXHRcblx0LnRpbWUtbGFiZWwge1xuXHRcdGNvbG9yOiAjOTVhNWE2O1xuXHRcdGZvbnQtc2l6ZTogMjZycHg7XG5cdH1cblx0XG5cdC50aW1lLXZhbHVlIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiAyNnJweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRtYXgtd2lkdGg6IDYwJTtcblx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdH1cblx0XG5cdC5pbmZvLXJvdyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XG5cdH1cblx0XG5cdC5pbmZvLWl0ZW0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXHRcblx0LmluZm8tbGFiZWwge1xuXHRcdGNvbG9yOiAjOTVhNWE2O1xuXHRcdGZvbnQtc2l6ZTogMjRycHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXJweDtcblx0fVxuXHRcblx0LmluZm8tdmFsdWUge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR9XG5cdFxuXHQuaW5mby12YWx1ZS5mZWUge1xuXHRcdGNvbG9yOiAjZjM5YzEyO1xuXHR9XG5cdFxuXHQubm8tZGF0YSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDgwcnB4IDIwcnB4O1xuXHRcdGNvbG9yOiAjOTVhNWE2O1xuXHRcdGZvbnQtc2l6ZTogMzBycHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdFxuXHQuZm9vdGVyLWluZm8ge1xuXHRcdG1hcmdpbi10b3A6IDEwcnB4O1xuXHRcdHBhZGRpbmctdG9wOiAyMHJweDtcblx0XHRib3JkZXItdG9wOiAxcnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHRcblx0LmZvb3Rlci10ZXh0IHtcblx0XHRmb250LXNpemU6IDI0cnB4O1xuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG5cdH1cbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!***************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/App.vue ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDb0w7QUFDcEwsZ0JBQWdCLDZMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!****************************************************************************!*\
  !*** E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 30);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBsQixDQUFnQix5bkJBQUcsRUFBQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/宇博科技/客服2/110 环境监测系统（PCB）/上位机/app/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);