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

/***/ "./src/components/students-table/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/students-table/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _contexts_StudentsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/StudentsContext */ \"./src/contexts/StudentsContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst StudentTable = ()=>{\n    _s();\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { fetchStudents } = (0,_contexts_StudentsContext__WEBPACK_IMPORTED_MODULE_1__.useStudents)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getStudents = async ()=>{\n            const studentsData = await fetchStudents();\n            const studentsFormatted = studentsData.map((student)=>({\n                    name: student.full_name,\n                    trimester: student.graduation_term,\n                    hasCertificate: student.highlight_certificate_generated,\n                    hasDiploma: student.diploma_generated\n                }));\n            setStudents(studentsFormatted);\n        };\n        getStudents();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"min-w-full bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"py-2 px-4 border\",\n                            children: \"Nome\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"py-2 px-4 border\",\n                            children: \"Trimestre\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"py-2 px-4 border\",\n                            children: \"Certificado de Destaque\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"py-2 px-4 border\",\n                            children: \"Diploma\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: students.map((student, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"py-2 px-4 border\",\n                                children: student.name\n                            }, void 0, false, {\n                                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"py-2 px-4 border\",\n                                children: student.trimester\n                            }, void 0, false, {\n                                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"py-2 px-4 border\",\n                                children: student.hasCertificate ? \"Sim\" : \"N\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"py-2 px-4 border\",\n                                children: student.hasDiploma ? \"Sim\" : \"N\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StudentTable, \"dNOBdgpzEFAQX7V2V5pObio/Pxw=\", false, function() {\n    return [\n        _contexts_StudentsContext__WEBPACK_IMPORTED_MODULE_1__.useStudents\n    ];\n});\n_c = StudentTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentTable);\nvar _c;\n$RefreshReg$(_c, \"StudentTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdHVkZW50cy10YWJsZS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5RDtBQUNiO0FBUzVDLE1BQU1HLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUU1RCxNQUFLLEVBQUVJLGFBQWEsRUFBRSxHQUFHTixzRUFBV0E7SUFFcENDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sY0FBYztZQUNsQixNQUFNQyxlQUFlLE1BQU1GO1lBQzNCLE1BQU1HLG9CQUFvQkQsYUFBYUUsR0FBRyxDQUFDLENBQUNDLFVBQWtCO29CQUM1REMsTUFBTUQsUUFBUUUsU0FBUztvQkFDdkJDLFdBQVdILFFBQVFJLGVBQWU7b0JBQ2xDQyxnQkFBZ0JMLFFBQVFNLCtCQUErQjtvQkFDdkRDLFlBQVlQLFFBQVFRLGlCQUFpQjtnQkFDdkM7WUFDQWQsWUFBWUk7UUFDZDtRQUNBRjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDYTtRQUFNQyxXQUFVOzswQkFDZiw4REFBQ0M7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7NEJBQUdILFdBQVU7c0NBQW1COzs7Ozs7c0NBQ2pDLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBbUI7Ozs7OztzQ0FDakMsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUFtQjs7Ozs7O3NDQUNqQyw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQW1COzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHckMsOERBQUNJOzBCQUNFckIsU0FBU00sR0FBRyxDQUFDLENBQUNDLFNBQVNlLHNCQUN0Qiw4REFBQ0g7OzBDQUNDLDhEQUFDSTtnQ0FBR04sV0FBVTswQ0FBb0JWLFFBQVFDLElBQUk7Ozs7OzswQ0FDOUMsOERBQUNlO2dDQUFHTixXQUFVOzBDQUFvQlYsUUFBUUcsU0FBUzs7Ozs7OzBDQUNuRCw4REFBQ2E7Z0NBQUdOLFdBQVU7MENBQ1hWLFFBQVFLLGNBQWMsR0FBRyxRQUFROzs7Ozs7MENBRXBDLDhEQUFDVztnQ0FBR04sV0FBVTswQ0FDWFYsUUFBUU8sVUFBVSxHQUFHLFFBQVE7Ozs7Ozs7dUJBUHpCUTs7Ozs7Ozs7Ozs7Ozs7OztBQWNuQjtHQTdDTXZCOztRQUdxQkgsa0VBQVdBOzs7S0FIaENHO0FBK0NOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3N0dWRlbnRzLXRhYmxlL2luZGV4LnRzeD8wMmY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0dWRlbnRzIH0gZnJvbSAnQC9jb250ZXh0cy9TdHVkZW50c0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElTdHVkZW50VGFibGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRyaW1lc3Rlcjogc3RyaW5nO1xuICBoYXNDZXJ0aWZpY2F0ZTogYm9vbGVhbjtcbiAgaGFzRGlwbG9tYTogYm9vbGVhbjtcbn07XG5cbmNvbnN0IFN0dWRlbnRUYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgW3N0dWRlbnRzLCBzZXRTdHVkZW50c10gPSB1c2VTdGF0ZTxJU3R1ZGVudFRhYmxlW10+KFtdKTtcblxuICBjb25zdHsgZmV0Y2hTdHVkZW50cyB9ID0gdXNlU3R1ZGVudHMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFN0dWRlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgc3R1ZGVudHNEYXRhID0gYXdhaXQgZmV0Y2hTdHVkZW50cygpO1xuICAgICAgY29uc3Qgc3R1ZGVudHNGb3JtYXR0ZWQgPSBzdHVkZW50c0RhdGEubWFwKChzdHVkZW50OiBhbnkpID0+ICh7XG4gICAgICAgIG5hbWU6IHN0dWRlbnQuZnVsbF9uYW1lLFxuICAgICAgICB0cmltZXN0ZXI6IHN0dWRlbnQuZ3JhZHVhdGlvbl90ZXJtLFxuICAgICAgICBoYXNDZXJ0aWZpY2F0ZTogc3R1ZGVudC5oaWdobGlnaHRfY2VydGlmaWNhdGVfZ2VuZXJhdGVkLFxuICAgICAgICBoYXNEaXBsb21hOiBzdHVkZW50LmRpcGxvbWFfZ2VuZXJhdGVkLFxuICAgICAgfSkpO1xuICAgICAgc2V0U3R1ZGVudHMoc3R1ZGVudHNGb3JtYXR0ZWQpO1xuICAgIH07XG4gICAgZ2V0U3R1ZGVudHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYmctd2hpdGVcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0yIHB4LTQgYm9yZGVyXCI+Tm9tZTwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBib3JkZXJcIj5UcmltZXN0cmU8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0yIHB4LTQgYm9yZGVyXCI+Q2VydGlmaWNhZG8gZGUgRGVzdGFxdWU8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0yIHB4LTQgYm9yZGVyXCI+RGlwbG9tYTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7c3R1ZGVudHMubWFwKChzdHVkZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yIHB4LTQgYm9yZGVyXCI+e3N0dWRlbnQubmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBib3JkZXJcIj57c3R1ZGVudC50cmltZXN0ZXJ9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yIHB4LTQgYm9yZGVyXCI+XG4gICAgICAgICAgICAgIHtzdHVkZW50Lmhhc0NlcnRpZmljYXRlID8gXCJTaW1cIiA6IFwiTsOjb1wifVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yIHB4LTQgYm9yZGVyXCI+XG4gICAgICAgICAgICAgIHtzdHVkZW50Lmhhc0RpcGxvbWEgPyBcIlNpbVwiIDogXCJOw6NvXCJ9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICkpfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudFRhYmxlO1xuIl0sIm5hbWVzIjpbInVzZVN0dWRlbnRzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdHVkZW50VGFibGUiLCJzdHVkZW50cyIsInNldFN0dWRlbnRzIiwiZmV0Y2hTdHVkZW50cyIsImdldFN0dWRlbnRzIiwic3R1ZGVudHNEYXRhIiwic3R1ZGVudHNGb3JtYXR0ZWQiLCJtYXAiLCJzdHVkZW50IiwibmFtZSIsImZ1bGxfbmFtZSIsInRyaW1lc3RlciIsImdyYWR1YXRpb25fdGVybSIsImhhc0NlcnRpZmljYXRlIiwiaGlnaGxpZ2h0X2NlcnRpZmljYXRlX2dlbmVyYXRlZCIsImhhc0RpcGxvbWEiLCJkaXBsb21hX2dlbmVyYXRlZCIsInRhYmxlIiwiY2xhc3NOYW1lIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJpbmRleCIsInRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/students-table/index.tsx\n"));

/***/ })

});