"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/practice",{

/***/ "./components/practicecomponent/practicecomp.js":
/*!******************************************************!*\
  !*** ./components/practicecomponent/practicecomp.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar Containerbutton = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(Containerbutton, _Component);\n    var _super = _createSuper(Containerbutton);\n    function Containerbutton(props) {\n        _classCallCheck(this, Containerbutton);\n        var _this;\n        _this = _super.call(this, props);\n        _defineProperty(_assertThisInitialized(_this), \"Buttonchangetext\", function() {\n            if (_this.state.buttoncontext === \"expanded\") {\n                _this.setState({\n                    buttoncontext: \"squished\"\n                });\n            } else {\n                _this.setState({\n                    buttoncontext: \"expanded\"\n                });\n            }\n        });\n        _this.state = {\n            buttoncontext: \"squished\"\n        };\n        return _this;\n    }\n    _createClass(Containerbutton, [\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"test \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: this.Buttonchangetext,\n                            children: [\n                                \" \",\n                                this.state.buttoncontext,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navbar, {\n                            parentcontext: this.state.buttoncontext\n                        }, void 0, false, {\n                            fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this) //navbar line WIP not working properly, cant figure out how to pass data coherently\n                );\n            }\n        }\n    ]);\n    return Containerbutton;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n;\nfunction Navbar() {\n    if (this.parentcontext === \"expanded\") {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navhome, {}, void 0, false, {\n                    fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navwork, {}, void 0, false, {\n                    fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navfrontend, {}, void 0, false, {\n                    fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Naveducation, {}, void 0, false, {\n                    fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: \"expanded\"\n                }, void 0, false)\n            ]\n        }, void 0, true));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"Not squished\"\n        }, void 0, false));\n    }\n}\n_c = Navbar;\nfunction Navwork() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        children: \"Work\"\n    }, void 0, false, {\n        fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n        lineNumber: 50,\n        columnNumber: 17\n    }, this));\n}\n_c1 = Navwork;\nfunction Navhome() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        children: \"Home\"\n    }, void 0, false, {\n        fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n        lineNumber: 55,\n        columnNumber: 17\n    }, this));\n}\n_c2 = Navhome;\nfunction Navfrontend() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        children: \"Frontend\"\n    }, void 0, false, {\n        fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n        lineNumber: 60,\n        columnNumber: 17\n    }, this));\n}\n_c3 = Navfrontend;\nfunction Naveducation() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        children: \"Education\"\n    }, void 0, false, {\n        fileName: \"/home/ethan/Repos/portfolio/components/practicecomponent/practicecomp.js\",\n        lineNumber: 65,\n        columnNumber: 17\n    }, this));\n}\n_c4 = Naveducation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Containerbutton);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c1, \"Navwork\");\n$RefreshReg$(_c2, \"Navhome\");\n$RefreshReg$(_c3, \"Navfrontend\");\n$RefreshReg$(_c4, \"Naveducation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ByYWN0aWNlY29tcG9uZW50L3ByYWN0aWNlY29tcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRzFCRSxlQUFlLGlCQUFyQixRQUFROzs7O2FBQUZBLGVBQWUsQ0FDREMsS0FBSzs7O2tDQUNIQSxLQUFLO3VEQU1uQkMsQ0FBZ0IsbUJBQUcsUUFDM0IsR0FEaUMsQ0FBQztZQUNsQixFQUFFLFFBQU1DLEtBQUssQ0FBQ0MsYUFBYSxLQUFLLENBQVUsV0FBQyxDQUFDO3NCQUMvQkMsUUFBUSxDQUFDLENBQUNEO29CQUFBQSxhQUFhLEVBQUUsQ0FBVTtnQkFBQSxDQUFDO1lBQ2pELENBQUMsTUFBTSxDQUFDO3NCQUNLQyxRQUFRLENBQUMsQ0FBQ0Q7b0JBQUFBLGFBQWEsRUFBRSxDQUFVO2dCQUFBLENBQUM7WUFDakQsQ0FBQztRQUNULENBQUM7Y0FYWUQsS0FBSyxHQUFHLENBQUM7WUFDTkMsYUFBYSxFQUFFLENBQVU7UUFDakMsQ0FBQzs7Ozs7WUFXVEUsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRSxDQUFDO2dCQUNULE1BQU0sNkVBQ0xDLENBQUM7O3dCQUFDLENBQ1U7b0dBQ0pDLENBQU07NEJBQUNDLElBQUksRUFBQyxDQUFROzRCQUFDQyxPQUFPLEVBQUUsSUFBSSxDQUFDUixnQkFBZ0I7O2dDQUFFLENBQUM7Z0NBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGFBQWE7Z0NBQUMsQ0FBQzs7Ozs7OztvR0FDakZPLE1BQU07NEJBQUNDLGFBQWEsRUFBRSxJQUFJLENBQUNULEtBQUssQ0FBQ0MsYUFBYTs7Ozs7Ozs7Ozs7d0JBQ25ELENBQW1GOztZQUN0RixDQUFDOzs7O0VBdkJvQk4sd0RBQWU7O1NBMEJwQ2EsTUFBTSxHQUFHLENBQUM7SUFDWCxFQUFFLEVBQUMsSUFBSSxDQUFDQyxhQUFhLEtBQUssQ0FBVSxXQUFDLENBQUM7UUFDdEMsTUFBTSw2RUFBQzs7NEZBRUVFLE9BQU87Ozs7OzRGQUNQQyxPQUFPOzs7Ozs0RkFDUEMsV0FBVzs7Ozs7NEZBQ1hDLFlBQVk7Ozs7Ozs4QkFDWCxDQUFROzs7O0lBRWhCLENBQUMsTUFDQyxDQUFDO1FBQ0wsTUFBTSw2RUFBQztzQkFDRyxDQUFZOztJQUNwQixDQUFDO0FBQ1gsQ0FBQztLQWZRTixNQUFNO1NBaUJOSSxPQUFPLEdBQUksQ0FBQztJQUNiLE1BQU0sNkVBQ0dQLENBQU07UUFBQ0MsSUFBSSxFQUFDLENBQVE7a0JBQUMsQ0FBSTs7Ozs7O0FBRTFDLENBQUM7TUFKUU0sT0FBTztTQUtQRCxPQUFPLEdBQUksQ0FBQztJQUNiLE1BQU0sNkVBQ0dOLENBQU07UUFBQ0MsSUFBSSxFQUFDLENBQVE7a0JBQUMsQ0FBSTs7Ozs7O0FBRTFDLENBQUM7TUFKUUssT0FBTztTQUtQRSxXQUFXLEdBQUksQ0FBQztJQUNqQixNQUFNLDZFQUNHUixDQUFNO1FBQUNDLElBQUksRUFBQyxDQUFRO2tCQUFDLENBQVE7Ozs7OztBQUU5QyxDQUFDO01BSlFPLFdBQVc7U0FLWEMsWUFBWSxHQUFJLENBQUM7SUFDbEIsTUFBTSw2RUFDR1QsQ0FBTTtRQUFDQyxJQUFJLEVBQUMsQ0FBUTtrQkFBQyxDQUFTOzs7Ozs7QUFFL0MsQ0FBQztNQUpRUSxZQUFZO0FBTXJCLCtEQUFlakIsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJhY3RpY2Vjb21wb25lbnQvcHJhY3RpY2Vjb21wLmpzP2MyMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuXG5jbGFzcyBDb250YWluZXJidXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25jb250ZXh0OiBcInNxdWlzaGVkXCIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIEJ1dHRvbmNoYW5nZXRleHQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5idXR0b25jb250ZXh0ID09PSBcImV4cGFuZGVkXCIpey8vZXhlY3V0ZWQgaWYgZXhwYW5kZWQgaXMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1dHRvbmNvbnRleHQ6IFwic3F1aXNoZWRcIn0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIGV4ZWN1dGVkIGlmIHNxdWlzaGVkIGlzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtidXR0b25jb250ZXh0OiBcImV4cGFuZGVkXCJ9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKXsgLy9yZW5kZXJtZXRob2RcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB0ZXN0IHt9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5CdXR0b25jaGFuZ2V0ZXh0fT4ge3RoaXMuc3RhdGUuYnV0dG9uY29udGV4dH0gPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPE5hdmJhciBwYXJlbnRjb250ZXh0PXt0aGlzLnN0YXRlLmJ1dHRvbmNvbnRleHR9Lz4gICAgICAgICAgICAgXG4gICAgICAgIDwvcD4vL25hdmJhciBsaW5lIFdJUCBub3Qgd29ya2luZyBwcm9wZXJseSwgY2FudCBmaWd1cmUgb3V0IGhvdyB0byBwYXNzIGRhdGEgY29oZXJlbnRseVxuICAgICAgICApfVxufTtcblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICAgICAgICBpZih0aGlzLnBhcmVudGNvbnRleHQgPT09IFwiZXhwYW5kZWRcIil7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8TmF2aG9tZS8+XG4gICAgICAgICAgICAgICAgPE5hdndvcmsvPlxuICAgICAgICAgICAgICAgIDxOYXZmcm9udGVuZC8+XG4gICAgICAgICAgICAgICAgPE5hdmVkdWNhdGlvbi8+XG4gICAgICAgICAgICAgICAgPD5leHBhbmRlZDwvPlxuICAgICAgICA8Lz4gICAgXG4gICAgICAgICk7fVxuICAgICAgICBlbHNle1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPD5Ob3Qgc3F1aXNoZWQ8Lz5cbiAgICAgICAgKTt9XG59XG5cbmZ1bmN0aW9uIE5hdndvcmsgKCkgey8vcmVkaXJlY3QgYnV0dG9uIGZvciB3b3JrXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5Xb3JrPC9idXR0b24+XG4gICAgICAgICk7XG59XG5mdW5jdGlvbiBOYXZob21lICgpIHsvL3JlZGlyZWN0IGJ1dHRvbiBmb3IgaG9tZVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+SG9tZTwvYnV0dG9uPlxuICAgICAgICApO1xufVxuZnVuY3Rpb24gTmF2ZnJvbnRlbmQgKCkgey8vcmVkaXJlY3QgYnV0dG9uIGZvciBmcm9udGVuZFxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+RnJvbnRlbmQ8L2J1dHRvbj5cbiAgICAgICAgKTtcbn1cbmZ1bmN0aW9uIE5hdmVkdWNhdGlvbiAoKSB7Ly9yZWRpcmVjdCBidXR0b24gZm9yIGVkdWNhdGlvblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+RWR1Y2F0aW9uPC9idXR0b24+XG4gICAgICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcmJ1dHRvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkNvbnRhaW5lcmJ1dHRvbiIsInByb3BzIiwiQnV0dG9uY2hhbmdldGV4dCIsInN0YXRlIiwiYnV0dG9uY29udGV4dCIsInNldFN0YXRlIiwicmVuZGVyIiwicCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiTmF2YmFyIiwicGFyZW50Y29udGV4dCIsIkNvbXBvbmVudCIsIk5hdmhvbWUiLCJOYXZ3b3JrIiwiTmF2ZnJvbnRlbmQiLCJOYXZlZHVjYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/practicecomponent/practicecomp.js\n");

/***/ })

});