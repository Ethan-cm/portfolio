"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/grid/grid.js":
/*!*********************************!*\
  !*** ./components/grid/grid.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Indexgrid\": function() { return /* binding */ Indexgrid; },\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"GridA\": function() { return /* binding */ GridA; },\n/* harmony export */   \"GridB\": function() { return /* binding */ GridB; },\n/* harmony export */   \"GridC\": function() { return /* binding */ GridC; },\n/* harmony export */   \"GridD\": function() { return /* binding */ GridD; },\n/* harmony export */   \"Bottom\": function() { return /* binding */ Bottom; },\n/* harmony export */   \"Main\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\ndisplay: grid;\\nheight:100vh;\\nwidth: 100vh;\\ngrid-template-columns: 2fr repeat(4, 0.5fr);\\ngrid-template-rows: 0.1fr repeat(4, 0.5fr) 1fr;\\n\\ngrid-template-areas: \\\"nav nav nav nav nav\\\"\\n                     \\\"main gridA gridA gridB gridB\\\"\\n                     \\\"main gridA gridA gridB gridB\\\"\\n                     \\\"main gridC gridC gridD gridD\\\"\\n                     \\\"main gridC gridC gridD gridD\\\"\\n                     \\\"main bottom bottom bottom bottom\\\";\\n\\ngrid-column-gap: 0px;\\ngrid-row-gap: 0px;\\ntext-align: center; \\ngrid-gap: 0.25rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: nav;\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: gridA;\\nbackground: Burlywood;\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: gridB;\\nbackground: Cornsilk;\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: gridC;\\nbackground: Chocolate;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: gridD;\\nbackground: GreenYellow;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: bottom;\\nbackground: Gold;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: main;\\ncolor: white;\\nbackground: LightGreen;\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nvar Indexgrid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject1());\nvar GridA = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nvar GridB = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nvar GridC = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nvar GridD = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5());\nvar Bottom = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7()); //.parent {\n //    display: grid;\n //    grid-template-columns: 2fr repeat(4, 0.5fr);\n //    grid-template-rows: 0.3fr repeat(4, 0.5fr) 1fr;\n //    grid-column-gap: 0px;\n //    grid-row-gap: 0px;\n //    }\n //.navigation { grid-area: 1 / 1 / 2 / 6; }\n //.gridbutton { grid-area: 2 / 2 / 4 / 4; }\n //.gridbutton { grid-area: 2 / 4 / 4 / 6; }\n //.gridbutton { grid-area: 4 / 4 / 6 / 6; }\n //.gridbutton { grid-area: 4 / 2 / 6 / 4; }\n //.maintext   { grid-area: 2 / 1 / 7 / 2; }\n //.bottomtext { grid-area: 6 / 2 / 7 / 6; } \n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWQvZ3JpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNiOzs7Ozs7Ozs7Ozs7O1FBRVcsQ0FrQnBDOzs7Ozs7Ozs7UUFFOEIsQ0FDZjs7Ozs7Ozs7O1FBRWlCLENBRVY7Ozs7Ozs7OztRQUVVLENBRVg7Ozs7Ozs7OztRQUVXLENBR2hDOzs7Ozs7Ozs7UUFDZ0MsQ0FHaEM7Ozs7Ozs7OztRQUNpQyxDQUdqQzs7Ozs7Ozs7O1FBQytCLENBSS9COzs7Ozs7O0FBL0NPLEdBQUssQ0FBQ0UsU0FBUyxHQUFHRiw2REFBVTtBQW9CNUIsR0FBSyxDQUFDSSxHQUFHLEdBQUdKLDZEQUFVO0FBR3RCLEdBQUssQ0FBQ00sS0FBSyxHQUFHTiw2REFBVTtBQUl4QixHQUFLLENBQUNPLEtBQUssR0FBR1AsNkRBQVU7QUFJeEIsR0FBSyxDQUFDUSxLQUFLLEdBQUdSLDZEQUFVO0FBSXhCLEdBQUssQ0FBQ1MsS0FBSyxHQUFHVCw2REFBVTtBQUl4QixHQUFLLENBQUNVLE1BQU0sR0FBR1YsNkRBQVU7QUFJekIsR0FBSyxDQUFDVyxJQUFJLEdBQUdYLDZEQUFVLHFCQU05QixDQUFXO0FBQ1gsQ0FBb0I7QUFDcEIsQ0FBa0Q7QUFDbEQsQ0FBcUQ7QUFDckQsQ0FBMkI7QUFDM0IsQ0FBd0I7QUFDeEIsQ0FBTztBQUVQLENBQTJDO0FBQzNDLENBQTJDO0FBQzNDLENBQTJDO0FBQzNDLENBQTJDO0FBQzNDLENBQTJDO0FBQzNDLENBQTJDO0FBQzNDLENBQTRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmpzPzQ2MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCIgXG5cbmV4cG9ydCBjb25zdCBJbmRleGdyaWQgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZ3JpZDtcbmhlaWdodDoxMDB2aDtcbndpZHRoOiAxMDB2aDtcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIHJlcGVhdCg0LCAwLjVmcik7XG5ncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIHJlcGVhdCg0LCAwLjVmcikgMWZyO1xuXG5ncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdiBuYXYgbmF2IG5hdiBuYXZcIlxuICAgICAgICAgICAgICAgICAgICAgXCJtYWluIGdyaWRBIGdyaWRBIGdyaWRCIGdyaWRCXCJcbiAgICAgICAgICAgICAgICAgICAgIFwibWFpbiBncmlkQSBncmlkQSBncmlkQiBncmlkQlwiXG4gICAgICAgICAgICAgICAgICAgICBcIm1haW4gZ3JpZEMgZ3JpZEMgZ3JpZEQgZ3JpZERcIlxuICAgICAgICAgICAgICAgICAgICAgXCJtYWluIGdyaWRDIGdyaWRDIGdyaWREIGdyaWREXCJcbiAgICAgICAgICAgICAgICAgICAgIFwibWFpbiBib3R0b20gYm90dG9tIGJvdHRvbSBib3R0b21cIjtcblxuZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG5ncmlkLXJvdy1nYXA6IDBweDtcbnRleHQtYWxpZ246IGNlbnRlcjsgXG5ncmlkLWdhcDogMC4yNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBOYXYgPSBzdHlsZWQubmF2YFxuZ3JpZC1hcmVhOiBuYXY7YDtcblxuZXhwb3J0IGNvbnN0IEdyaWRBID0gc3R5bGVkLmRpdmBcbmdyaWQtYXJlYTogZ3JpZEE7XG5iYWNrZ3JvdW5kOiBCdXJseXdvb2Q7YDtcblxuZXhwb3J0IGNvbnN0IEdyaWRCID0gc3R5bGVkLmRpdmBcbmdyaWQtYXJlYTogZ3JpZEI7XG5iYWNrZ3JvdW5kOiBDb3Juc2lsaztgO1xuXG5leHBvcnQgY29uc3QgR3JpZEMgPSBzdHlsZWQuZGl2YFxuZ3JpZC1hcmVhOiBncmlkQztcbmJhY2tncm91bmQ6IENob2NvbGF0ZTtcbmA7XG5leHBvcnQgY29uc3QgR3JpZEQgPSBzdHlsZWQuZGl2YFxuZ3JpZC1hcmVhOiBncmlkRDtcbmJhY2tncm91bmQ6IEdyZWVuWWVsbG93O1xuYDtcbmV4cG9ydCBjb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YFxuZ3JpZC1hcmVhOiBib3R0b207XG5iYWNrZ3JvdW5kOiBHb2xkO1xuYDtcbmV4cG9ydCBjb25zdCBNYWluID0gc3R5bGVkLmRpdmBcbmdyaWQtYXJlYTogbWFpbjtcbmNvbG9yOiB3aGl0ZTtcbmJhY2tncm91bmQ6IExpZ2h0R3JlZW47XG5gO1xuXG4vLy5wYXJlbnQge1xuLy8gICAgZGlzcGxheTogZ3JpZDtcbi8vICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIHJlcGVhdCg0LCAwLjVmcik7XG4vLyAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIHJlcGVhdCg0LCAwLjVmcikgMWZyO1xuLy8gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4vLyAgICBncmlkLXJvdy1nYXA6IDBweDtcbi8vICAgIH1cbiAgICBcbi8vLm5hdmlnYXRpb24geyBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDY7IH1cbi8vLmdyaWRidXR0b24geyBncmlkLWFyZWE6IDIgLyAyIC8gNCAvIDQ7IH1cbi8vLmdyaWRidXR0b24geyBncmlkLWFyZWE6IDIgLyA0IC8gNCAvIDY7IH1cbi8vLmdyaWRidXR0b24geyBncmlkLWFyZWE6IDQgLyA0IC8gNiAvIDY7IH1cbi8vLmdyaWRidXR0b24geyBncmlkLWFyZWE6IDQgLyAyIC8gNiAvIDQ7IH1cbi8vLm1haW50ZXh0ICAgeyBncmlkLWFyZWE6IDIgLyAxIC8gNyAvIDI7IH1cbi8vLmJvdHRvbXRleHQgeyBncmlkLWFyZWE6IDYgLyAyIC8gNyAvIDY7IH0gXG4gICAgXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJJbmRleGdyaWQiLCJkaXYiLCJOYXYiLCJuYXYiLCJHcmlkQSIsIkdyaWRCIiwiR3JpZEMiLCJHcmlkRCIsIkJvdHRvbSIsIk1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/grid/grid.js\n");

/***/ })

});