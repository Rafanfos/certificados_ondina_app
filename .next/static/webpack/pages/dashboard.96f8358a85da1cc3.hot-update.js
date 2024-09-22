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

/***/ "./src/contexts/StudentsContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/StudentsContext.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StudentsProvider: function() { return /* binding */ StudentsProvider; },\n/* harmony export */   useStudents: function() { return /* binding */ useStudents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ StudentsProvider,useStudents auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst StudentsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst StudentsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [contextUrl, setContextUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const baseUrl = \"\".concat(\"http://localhost:8000\", \"/api\");\n        setContextUrl(\"\".concat(baseUrl, \"/students\"));\n    });\n    const fetchStudents = async ()=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(contextUrl, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            return response.data;\n        } catch (error) {\n            console.error(error);\n            throw new Error(\"Falha ao listar alunos\");\n        }\n    };\n    const generateCertificate = async (studentId)=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/api/students/\".concat(studentId, \"/certificate\"), {}, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            alert(\"Certificado gerado com sucesso!\");\n        } catch (error) {\n            console.error(\"Failed to generate certificate\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StudentsContext.Provider, {\n        value: {\n            fetchStudents,\n            generateCertificate\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/contexts/StudentsContext.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StudentsProvider, \"fl2EubHxOl+LV++8dlUN9vn1u1c=\");\n_c = StudentsProvider;\nconst useStudents = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StudentsContext);\n};\n_s1(useStudents, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StudentsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU3R1ZGVudHNDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFlO0FBQ1c7QUFtQjFCLE1BQU1LLGdDQUFrQkwsb0RBQWFBLENBQ25DLENBQUM7QUFHSSxNQUFNTSxtQkFBbUI7UUFBQyxFQUFFQyxRQUFRLEVBQXlCOztJQUNsRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQVM7SUFFckRFLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sVUFBVSxHQUF1QyxPQUFwQ0MsdUJBQW1DLEVBQUM7UUFDdkRGLGNBQWMsR0FBVyxPQUFSQyxTQUFRO0lBQzNCO0lBRUEsTUFBTUksZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7WUFFbkMsTUFBTUMsV0FBVyxNQUFNZCw2Q0FBS0EsQ0FBQ2UsR0FBRyxDQUFDWCxZQUFZO2dCQUMzQ1ksU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOTjtnQkFDM0I7WUFDRjtZQUVBLE9BQU9HLFNBQVNJLElBQUk7UUFDdEIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDZCxNQUFNLElBQUlFLE1BQU07UUFDbEI7SUFDRjtJQUVBLE1BQU1DLHNCQUFzQixPQUFPQztRQUNqQyxJQUFJO1lBQ0YsTUFBTVosUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1lBQ25DLE1BQU1iLDZDQUFLQSxDQUFDd0IsSUFBSSxDQUNkLHNDQUFnRCxPQUFWRCxXQUFVLGlCQUNoRCxDQUFDLEdBQ0Q7Z0JBQ0VQLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTk47Z0JBQzNCO1lBQ0Y7WUFFRmMsTUFBTTtRQUNSLEVBQUUsT0FBT04sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNsQixnQkFBZ0J5QixRQUFRO1FBQUNDLE9BQU87WUFBRWpCO1lBQWVZO1FBQW9CO2tCQUNuRW5COzs7Ozs7QUFHUCxFQUFFO0dBaERXRDtLQUFBQTtBQWtETixNQUFNMEIsY0FBYzs7SUFDekIsT0FBTzlCLGlEQUFVQSxDQUFDRztBQUNwQixFQUFFO0lBRlcyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvU3R1ZGVudHNDb250ZXh0LnRzeD8xMjZmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlU3RhdGUsXG4gIHVzZUNvbnRleHQsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlRWZmZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG50eXBlIElTdHVkZW50RGF0YSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgZnVsbF9uYW1lOiBzdHJpbmc7XG4gIGdyYWR1YXRpb25fdGVybTogYm9vbGVhbjtcbiAgZGlwbG9tYV9nZW5lcmF0ZWQ6IGJvb2xlYW47XG4gIGhpZ2hsaWdodF9jZXJ0aWZpY2F0ZV9nZW5lcmF0ZWQ6IGJvb2xlYW47XG59O1xuXG50eXBlIFN0dWRlbnRzQ29udGV4dERhdGEgPSB7XG4gIGZldGNoU3R1ZGVudHM6ICgpID0+IFByb21pc2U8SVN0dWRlbnREYXRhW10+O1xuICBnZW5lcmF0ZUNlcnRpZmljYXRlOiAoc3R1ZGVudElkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG59O1xuXG50eXBlIFN0dWRlbnRzUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IFN0dWRlbnRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3R1ZGVudHNDb250ZXh0RGF0YT4oXG4gIHt9IGFzIFN0dWRlbnRzQ29udGV4dERhdGFcbik7XG5cbmV4cG9ydCBjb25zdCBTdHVkZW50c1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogU3R1ZGVudHNQcm92aWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFtjb250ZXh0VXJsLCBzZXRDb250ZXh0VXJsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmFzZVVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGlgO1xuICAgIHNldENvbnRleHRVcmwoYCR7YmFzZVVybH0vc3R1ZGVudHNgKTtcbiAgfSk7XG5cbiAgY29uc3QgZmV0Y2hTdHVkZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPElTdHVkZW50RGF0YVtdPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGNvbnRleHRVcmwsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFsaGEgYW8gbGlzdGFyIGFsdW5vcycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZUNlcnRpZmljYXRlID0gYXN5bmMgKHN0dWRlbnRJZDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zdHVkZW50cy8ke3N0dWRlbnRJZH0vY2VydGlmaWNhdGVgLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBhbGVydCgnQ2VydGlmaWNhZG8gZ2VyYWRvIGNvbSBzdWNlc3NvIScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZ2VuZXJhdGUgY2VydGlmaWNhdGUnLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0dWRlbnRzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBmZXRjaFN0dWRlbnRzLCBnZW5lcmF0ZUNlcnRpZmljYXRlIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R1ZGVudHNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVN0dWRlbnRzID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChTdHVkZW50c0NvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJTdHVkZW50c0NvbnRleHQiLCJTdHVkZW50c1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb250ZXh0VXJsIiwic2V0Q29udGV4dFVybCIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJmZXRjaFN0dWRlbnRzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsImdlbmVyYXRlQ2VydGlmaWNhdGUiLCJzdHVkZW50SWQiLCJwb3N0IiwiYWxlcnQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU3R1ZGVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/StudentsContext.tsx\n"));

/***/ })

});