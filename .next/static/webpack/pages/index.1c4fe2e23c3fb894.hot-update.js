"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LoginPage = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { login } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setError(\"\");\n        await login(username, password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 shadow-md rounded-lg w-96\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                    className: \"flex justify-center mb-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/assets/images/empon-logo.png\",\n                        alt: \"Logo\",\n                        width: 200,\n                        height: 100\n                    }, void 0, false, {\n                        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-6 text-center\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-1\",\n                                    children: \"Username:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"username\",\n                                    value: username,\n                                    onChange: (e)=>setUsername(e.target.value),\n                                    required: true,\n                                    className: \"w-full px-3 py-2 border rounded-md\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-1\",\n                                    children: \"Senha:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    required: true,\n                                    className: \"w-full px-3 py-2 border rounded-md\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-500\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white py-2 rounded-md mt-4\",\n                            children: \"Entrar\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"dtdhZg/CDjjjS/nrRswCavFodGU=\", false, function() {\n    return [\n        _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0QztBQUNiO0FBRW1CO0FBRWxELE1BQU1HLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFTO0lBRTNDLE1BQU0sRUFBRVUsS0FBSyxFQUFFLEdBQUdSLDhEQUFPQTtJQUd6QixNQUFNUyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCSixTQUFTO1FBRVQsTUFBTUMsTUFBTU4sVUFBVUU7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFPRCxXQUFVOzhCQUNoQiw0RUFBQ2QsbURBQUtBO3dCQUNKZ0IsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7OEJBSVosOERBQUNDO29CQUFHTixXQUFVOzhCQUFzQzs7Ozs7OzhCQUNwRCw4REFBQ087b0JBQUtDLFVBQVVaOztzQ0FDZCw4REFBQ0c7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FBTVQsV0FBVTs4Q0FBYTs7Ozs7OzhDQUM5Qiw4REFBQ1U7b0NBQ0NDLE1BQUs7b0NBQ0xDLE9BQU92QjtvQ0FDUHdCLFVBQVUsQ0FBQ2hCLElBQU1QLFlBQVlPLEVBQUVpQixNQUFNLENBQUNGLEtBQUs7b0NBQzNDRyxRQUFRO29DQUNSZixXQUFVOzs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1M7b0NBQU1ULFdBQVU7OENBQWE7Ozs7Ozs4Q0FDOUIsOERBQUNVO29DQUNDQyxNQUFLO29DQUNMQyxPQUFPckI7b0NBQ1BzQixVQUFVLENBQUNoQixJQUFNTCxZQUFZSyxFQUFFaUIsTUFBTSxDQUFDRixLQUFLO29DQUMzQ0csUUFBUTtvQ0FDUmYsV0FBVTs7Ozs7Ozs7Ozs7O3dCQUdiUCx1QkFBUyw4REFBQ3VCOzRCQUFFaEIsV0FBVTtzQ0FBZ0JQOzs7Ozs7c0NBQ3ZDLDhEQUFDd0I7NEJBQ0NOLE1BQUs7NEJBQ0xYLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0E1RE1aOztRQUtjRCwwREFBT0E7OztLQUxyQkM7QUE4RE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xuXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgY29uc3QgeyBsb2dpbiB9ID0gdXNlQXV0aCgpO1xuXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRFcnJvcignJyk7XG5cbiAgICBhd2FpdCBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgcC04IHNoYWRvdy1tZCByb3VuZGVkLWxnIHctOTYnPlxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtYi02Jz5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9pbWFnZXMvZW1wb24tbG9nby5wbmcnXG4gICAgICAgICAgICBhbHQ9J0xvZ28nXG4gICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9maWd1cmU+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkIG1iLTYgdGV4dC1jZW50ZXInPkxvZ2luPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQnPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgbWItMSc+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLW1kJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCc+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBtYi0xJz5TZW5oYTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbWQnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9J3RleHQtcmVkLTUwMCc+e2Vycm9yfTwvcD59XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS0yIHJvdW5kZWQtbWQgbXQtNCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICBFbnRyYXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsInVzZUF1dGgiLCJMb2dpblBhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJsb2dpbiIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImZpZ3VyZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});