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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Indexgrid\": function() { return /* binding */ Indexgrid; },\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"GridA\": function() { return /* binding */ GridA; },\n/* harmony export */   \"GridB\": function() { return /* binding */ GridB; },\n/* harmony export */   \"GridC\": function() { return /* binding */ GridC; },\n/* harmony export */   \"GridD\": function() { return /* binding */ GridD; },\n/* harmony export */   \"Bottom\": function() { return /* binding */ Bottom; },\n/* harmony export */   \"Main\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\ndisplay: grid;\\nheight:100vh;\\nwidth: 100vh;\\ngrid-template-columns: 2fr repeat(4, 0.5fr);\\ngrid-template-rows: 0.1fr repeat(4, 0.5fr) 1fr;\\n\\ngrid-template-areas: \\\"nav nav nav nav nav\\\"\\n                     \\\"main gridA gridA gridB gridB\\\"\\n                     \\\"main gridA gridA gridB gridB\\\"\\n                     \\\"main gridC gridC gridD gridD\\\"\\n                     \\\"main gridC gridC gridD gridD\\\"\\n                     \\\"main bottom bottom bottom bottom\\\";\\n\\ngrid-column-gap: 0px;\\ngrid-row-gap: 0px;\\ntext-align: center; \\ngrid-gap: 0rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: nav;\\nbackground-color: DarkSlateGray;\\n\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: gridA;\\nbackground: Burlywood;\\npadding: 15px 15px 15px 15px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: gridB;\\nbackground: Cornsilk;\\npadding: 15px 15px 15px 15px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: gridC;\\nbackground: Chocolate;\\npadding: 15px 15px 15px 15px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: gridD;\\nbackground: GreenYellow;\\ncolor: white;\\npadding: 15px 15px 15px 15px;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: bottom;\\nbackground: Teal;\\ncolor: white;\\npadding: 15px 15px 15px 15px;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\ngrid-area: main;\\ncolor: white;\\nbackground: Plum;\\npadding: 10px 10px 10px 10px;\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nvar Indexgrid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject1());\nvar GridA = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nvar GridB = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nvar GridC = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nvar GridD = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5());\nvar Bottom = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7()); //.parent {\n //    display: grid;\n //    grid-template-columns: 2fr repeat(4, 0.5fr);\n //    grid-template-rows: 0.3fr repeat(4, 0.5fr) 1fr;\n //    grid-column-gap: 0px;\n //    grid-row-gap: 0px;\n //    }\n //.navigation { grid-area: 1 / 1 / 2 / 6; }\n //.gridbutton { grid-area: 2 / 2 / 4 / 4; }\n //.gridbutton { grid-area: 2 / 4 / 4 / 6; }\n //.gridbutton { grid-area: 4 / 4 / 6 / 6; }\n //.gridbutton { grid-area: 4 / 2 / 6 / 4; }\n //.maintext   { grid-area: 2 / 1 / 7 / 2; }\n //.bottomtext { grid-area: 6 / 2 / 7 / 6; } \n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWQvZ3JpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNiOzs7Ozs7Ozs7Ozs7O1FBRVcsQ0FrQnBDOzs7Ozs7Ozs7UUFFOEIsQ0FJOUI7Ozs7Ozs7OztRQUVnQyxDQUloQzs7Ozs7Ozs7O1FBRWdDLENBSWhDOzs7Ozs7Ozs7UUFFZ0MsQ0FJaEM7Ozs7Ozs7OztRQUNnQyxDQUtoQzs7Ozs7Ozs7O1FBQ2lDLENBS2pDOzs7Ozs7Ozs7UUFDK0IsQ0FLL0I7Ozs7Ozs7QUE1RE8sR0FBSyxDQUFDRSxTQUFTLEdBQUdGLDZEQUFVO0FBb0I1QixHQUFLLENBQUNJLEdBQUcsR0FBR0osNkRBQVU7QUFNdEIsR0FBSyxDQUFDTSxLQUFLLEdBQUdOLDZEQUFVO0FBTXhCLEdBQUssQ0FBQ08sS0FBSyxHQUFHUCw2REFBVTtBQU14QixHQUFLLENBQUNRLEtBQUssR0FBR1IsNkRBQVU7QUFLeEIsR0FBSyxDQUFDUyxLQUFLLEdBQUdULDZEQUFVO0FBTXhCLEdBQUssQ0FBQ1UsTUFBTSxHQUFHViw2REFBVTtBQU16QixHQUFLLENBQUNXLElBQUksR0FBR1gsNkRBQVUscUJBTzlCLENBQVc7QUFDWCxDQUFvQjtBQUNwQixDQUFrRDtBQUNsRCxDQUFxRDtBQUNyRCxDQUEyQjtBQUMzQixDQUF3QjtBQUN4QixDQUFPO0FBRVAsQ0FBMkM7QUFDM0MsQ0FBMkM7QUFDM0MsQ0FBMkM7QUFDM0MsQ0FBMkM7QUFDM0MsQ0FBMkM7QUFDM0MsQ0FBMkM7QUFDM0MsQ0FBNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkL2dyaWQuanM/NDYyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIiBcblxuZXhwb3J0IGNvbnN0IEluZGV4Z3JpZCA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBncmlkO1xuaGVpZ2h0OjEwMHZoO1xud2lkdGg6IDEwMHZoO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgcmVwZWF0KDQsIDAuNWZyKTtcbmdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgcmVwZWF0KDQsIDAuNWZyKSAxZnI7XG5cbmdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2IG5hdiBuYXYgbmF2IG5hdlwiXG4gICAgICAgICAgICAgICAgICAgICBcIm1haW4gZ3JpZEEgZ3JpZEEgZ3JpZEIgZ3JpZEJcIlxuICAgICAgICAgICAgICAgICAgICAgXCJtYWluIGdyaWRBIGdyaWRBIGdyaWRCIGdyaWRCXCJcbiAgICAgICAgICAgICAgICAgICAgIFwibWFpbiBncmlkQyBncmlkQyBncmlkRCBncmlkRFwiXG4gICAgICAgICAgICAgICAgICAgICBcIm1haW4gZ3JpZEMgZ3JpZEMgZ3JpZEQgZ3JpZERcIlxuICAgICAgICAgICAgICAgICAgICAgXCJtYWluIGJvdHRvbSBib3R0b20gYm90dG9tIGJvdHRvbVwiO1xuXG5ncmlkLWNvbHVtbi1nYXA6IDBweDtcbmdyaWQtcm93LWdhcDogMHB4O1xudGV4dC1hbGlnbjogY2VudGVyOyBcbmdyaWQtZ2FwOiAwcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXG5ncmlkLWFyZWE6IG5hdjtcbmJhY2tncm91bmQtY29sb3I6IERhcmtTbGF0ZUdyYXk7XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBHcmlkQSA9IHN0eWxlZC5kaXZgXG5ncmlkLWFyZWE6IGdyaWRBO1xuYmFja2dyb3VuZDogQnVybHl3b29kO1xucGFkZGluZzogMTVweCAxNXB4IDE1cHggMTVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBHcmlkQiA9IHN0eWxlZC5kaXZgXG5ncmlkLWFyZWE6IGdyaWRCO1xuYmFja2dyb3VuZDogQ29ybnNpbGs7XG5wYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEdyaWRDID0gc3R5bGVkLmRpdmBcbmdyaWQtYXJlYTogZ3JpZEM7XG5iYWNrZ3JvdW5kOiBDaG9jb2xhdGU7XG5wYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xuYDtcbmV4cG9ydCBjb25zdCBHcmlkRCA9IHN0eWxlZC5kaXZgXG5ncmlkLWFyZWE6IGdyaWREO1xuYmFja2dyb3VuZDogR3JlZW5ZZWxsb3c7XG5jb2xvcjogd2hpdGU7XG5wYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xuYDtcbmV4cG9ydCBjb25zdCBCb3R0b20gPSBzdHlsZWQuZGl2YFxuZ3JpZC1hcmVhOiBib3R0b207XG5iYWNrZ3JvdW5kOiBUZWFsO1xuY29sb3I6IHdoaXRlO1xucGFkZGluZzogMTVweCAxNXB4IDE1cHggMTVweDtcbmA7XG5leHBvcnQgY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG5ncmlkLWFyZWE6IG1haW47XG5jb2xvcjogd2hpdGU7XG5iYWNrZ3JvdW5kOiBQbHVtO1xucGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbmA7XG5cbi8vLnBhcmVudCB7XG4vLyAgICBkaXNwbGF5OiBncmlkO1xuLy8gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgcmVwZWF0KDQsIDAuNWZyKTtcbi8vICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgcmVwZWF0KDQsIDAuNWZyKSAxZnI7XG4vLyAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbi8vICAgIGdyaWQtcm93LWdhcDogMHB4O1xuLy8gICAgfVxuICAgIFxuLy8ubmF2aWdhdGlvbiB7IGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNjsgfVxuLy8uZ3JpZGJ1dHRvbiB7IGdyaWQtYXJlYTogMiAvIDIgLyA0IC8gNDsgfVxuLy8uZ3JpZGJ1dHRvbiB7IGdyaWQtYXJlYTogMiAvIDQgLyA0IC8gNjsgfVxuLy8uZ3JpZGJ1dHRvbiB7IGdyaWQtYXJlYTogNCAvIDQgLyA2IC8gNjsgfVxuLy8uZ3JpZGJ1dHRvbiB7IGdyaWQtYXJlYTogNCAvIDIgLyA2IC8gNDsgfVxuLy8ubWFpbnRleHQgICB7IGdyaWQtYXJlYTogMiAvIDEgLyA3IC8gMjsgfVxuLy8uYm90dG9tdGV4dCB7IGdyaWQtYXJlYTogNiAvIDIgLyA3IC8gNjsgfSBcbiAgICBcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJSZWFjdCIsIkluZGV4Z3JpZCIsImRpdiIsIk5hdiIsIm5hdiIsIkdyaWRBIiwiR3JpZEIiLCJHcmlkQyIsIkdyaWREIiwiQm90dG9tIiwiTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/grid/grid.js\n");

/***/ })

});