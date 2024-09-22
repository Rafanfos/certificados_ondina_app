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

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Header = ()=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const { fetchUserData } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            console.log(\"Buscando dados do usu\\xe1rio...\");\n            setLoading(true);\n            try {\n                const data = await fetchUserData();\n                const { first_name, last_name } = data;\n                setUserData({\n                    firstName: first_name,\n                    lastName: last_name\n                });\n                console.log(\"Dados do usu\\xe1rio:\", data);\n            } catch (error) {\n                console.error(\"Erro ao buscar os dados do usu\\xe1rio:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchData();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-blue-600 text-white p-4 text-center\",\n        children: [\n            userData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: [\n                    \"Bem-vindo, \",\n                    userData.firstName,\n                    \" \",\n                    userData.lastName,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/header/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm\",\n                children: \"Estamos felizes em t\\xea-lo de volta.\"\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/header/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/header/index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"Ux/COO4U82MfsJ18EscSAFecFOE=\", false, function() {\n    return [\n        _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuth\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFDTDtBQU81QyxNQUFNRyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQU07SUFFOUMsTUFBTSxFQUFFTyxhQUFhLEVBQUUsR0FBR1IsOERBQU9BO0lBRWpDRSxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLFlBQVk7WUFDaEJDLFFBQVFDLEdBQUcsQ0FBQztZQUNaTixXQUFXO1lBQ1gsSUFBSTtnQkFDRixNQUFNTyxPQUFPLE1BQU1KO2dCQUVuQixNQUFNLEVBQUVLLFVBQVUsRUFBRUMsU0FBUyxFQUFFLEdBQUdGO2dCQUVsQ0wsWUFBWTtvQkFBRVEsV0FBV0Y7b0JBQVlHLFVBQVVGO2dCQUFVO2dCQUV6REosUUFBUUMsR0FBRyxDQUFDLHdCQUFxQkM7WUFDbkMsRUFBRSxPQUFPSyxPQUFPO2dCQUNkUCxRQUFRTyxLQUFLLENBQUMsMENBQXVDQTtZQUN2RCxTQUFVO2dCQUNSWixXQUFXO1lBQ2I7UUFDRjtRQUVBSTtJQUNGO0lBRUEscUJBQ0UsOERBQUNTO1FBQU9DLFdBQVU7O1lBQ2ZiLDBCQUNDLDhEQUFDYztnQkFBR0QsV0FBVTs7b0JBQVc7b0JBQ1hiLFNBQVNTLFNBQVM7b0JBQUM7b0JBQUVULFNBQVNVLFFBQVE7b0JBQUM7Ozs7Ozs7MEJBR3ZELDhEQUFDSztnQkFBRUYsV0FBVTswQkFBVTs7Ozs7Ozs7Ozs7O0FBRzdCO0dBdENNaEI7O1FBSXNCSCwwREFBT0E7OztLQUo3Qkc7QUF3Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeD8xMjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2NvbnRleHRzL0F1dGhDb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBJVXNlckRhdGEge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuXG4gIGNvbnN0IHsgZmV0Y2hVc2VyRGF0YSB9ID0gdXNlQXV0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0J1c2NhbmRvIGRhZG9zIGRvIHVzdcOhcmlvLi4uJyk7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVXNlckRhdGEoKTtcblxuICAgICAgICBjb25zdCB7IGZpcnN0X25hbWUsIGxhc3RfbmFtZSB9ID0gZGF0YTtcblxuICAgICAgICBzZXRVc2VyRGF0YSh7IGZpcnN0TmFtZTogZmlyc3RfbmFtZSwgbGFzdE5hbWU6IGxhc3RfbmFtZSB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnRGFkb3MgZG8gdXN1w6FyaW86JywgZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGJ1c2NhciBvcyBkYWRvcyBkbyB1c3XDoXJpbzonLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9J2JnLWJsdWUtNjAwIHRleHQtd2hpdGUgcC00IHRleHQtY2VudGVyJz5cbiAgICAgIHt1c2VyRGF0YSAmJiAoXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsJz5cbiAgICAgICAgICBCZW0tdmluZG8sIHt1c2VyRGF0YS5maXJzdE5hbWV9IHt1c2VyRGF0YS5sYXN0TmFtZX0hXG4gICAgICAgIDwvaDE+XG4gICAgICApfVxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtJz5Fc3RhbW9zIGZlbGl6ZXMgZW0gdMOqLWxvIGRlIHZvbHRhLjwvcD5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VBdXRoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJmZXRjaFVzZXJEYXRhIiwiZmV0Y2hEYXRhIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlcnJvciIsImhlYWRlciIsImNsYXNzTmFtZSIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/index.tsx\n"));

/***/ })

});