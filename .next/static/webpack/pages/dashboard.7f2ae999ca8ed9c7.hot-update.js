"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/dashboard/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst DashboardPage = ()=>{\n    _s();\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { fetchUserData } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (userId) {\n                setLoading(true); // Inicia o loading\n                try {\n                    const data = await fetchUserData(userId); // Chame a função com o userId\n                    setUserData(data); // Armazene os dados recebidos\n                } catch (error) {\n                    console.error(\"Erro ao buscar os dados do usu\\xe1rio:\", error);\n                } finally{\n                    setLoading(false); // Termina o loading\n                }\n            }\n        };\n        fetchData();\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-4\",\n                    children: \"Alunos\"\n                }, void 0, false, {\n                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/dashboard/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Carregando...\"\n                }, void 0, false, {\n                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/dashboard/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/dashboard/index.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/dashboard/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardPage, \"6kSTPAY0/0Zyv/nFkMWUOD7G7qA=\", false, function() {\n    return [\n        _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = DashboardPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardPage);\nvar _c;\n$RefreshReg$(_c, \"DashboardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ0s7QUFFakQsTUFBTUcsZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQWdCO0lBQ3BELE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBVTtJQUVoRCxNQUFNLEVBQUVPLGFBQWEsRUFBRSxHQUFHTiw4REFBT0E7SUFFakNGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsWUFBWTtZQUNoQixJQUFJTCxRQUFRO2dCQUNWRyxXQUFXLE9BQU8sbUJBQW1CO2dCQUNyQyxJQUFJO29CQUNGLE1BQU1HLE9BQU8sTUFBTUYsY0FBY0osU0FBUyw4QkFBOEI7b0JBQ3hFTyxZQUFZRCxPQUFPLDhCQUE4QjtnQkFDbkQsRUFBRSxPQUFPRSxPQUFPO29CQUNkQyxRQUFRRCxLQUFLLENBQUMsMENBQXVDQTtnQkFDdkQsU0FBVTtvQkFDUkwsV0FBVyxRQUFRLG9CQUFvQjtnQkFDekM7WUFDRjtRQUNGO1FBRUFFO0lBQ0YsR0FBRztRQUFDTDtLQUFPO0lBRVgscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBOEI7Ozs7OztnQkFDM0NULHlCQUFXLDhEQUFDVzs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7R0FoQ01kOztRQUlzQkQsMERBQU9BOzs7S0FKN0JDO0FBa0NOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4P2Y1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2NvbnRleHRzL0F1dGhDb250ZXh0JztcblxuY29uc3QgRGFzaGJvYXJkUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCB7IGZldGNoVXNlckRhdGEgfSA9IHVzZUF1dGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTsgLy8gSW5pY2lhIG8gbG9hZGluZ1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFVzZXJEYXRhKHVzZXJJZCk7IC8vIENoYW1lIGEgZnVuw6fDo28gY29tIG8gdXNlcklkXG4gICAgICAgICAgc2V0VXNlckRhdGEoZGF0YSk7IC8vIEFybWF6ZW5lIG9zIGRhZG9zIHJlY2ViaWRvc1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIG9zIGRhZG9zIGRvIHVzdcOhcmlvOicsIGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gVGVybWluYSBvIGxvYWRpbmdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3VzZXJJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTRcIj5BbHVub3M8L2gyPlxuICAgICAgICB7bG9hZGluZyAmJiA8cD5DYXJyZWdhbmRvLi4uPC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkUGFnZTtcblxuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwiRGFzaGJvYXJkUGFnZSIsInVzZXJJZCIsInNldFVzZXJJZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hVc2VyRGF0YSIsImZldGNoRGF0YSIsImRhdGEiLCJzZXRVc2VyRGF0YSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.tsx\n"));

/***/ })

});