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

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [contextUrl, setContextUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const baseUrl = \"\".concat(\"http://localhost:8000\", \"/api\");\n        setContextUrl(\"\".concat(baseUrl, \"/users\"));\n    });\n    const login = async (username, password)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(contextUrl, \"/login\"), {\n                username,\n                password\n            });\n            const userData = response.data;\n            const token = userData.access;\n            localStorage.setItem(\"token\", token);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.error(\"Login failed\", error);\n        }\n    };\n    const fetchUserData = async ()=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            if (!token) {\n                throw new Error(\"Token not found\");\n            }\n            localStorage.setItem(\"token\", token);\n            const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.jwtDecode)(token);\n            const userId = decoded.user_id;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(contextUrl, \"/\").concat(userId), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            return response.data;\n        } catch (error) {\n            throw new Error(\"Falha ao buscar os dados do usu\\xe1rio\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            login,\n            fetchUserData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/contexts/AuthContext.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"4yMRGxnB0OGtkGYKaKoV6bQNm0A=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDVztBQUNhO0FBQ0s7QUFnQjVDLE1BQU1PLDRCQUFjUCxvREFBYUEsQ0FBa0IsQ0FBQztBQUU3QyxNQUFNUSxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFxQjs7SUFDMUQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFTO0lBRXJELE1BQU1XLFNBQVNOLDBEQUFTQTtJQUV4QkgsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxVQUFVLEdBQXVDLE9BQXBDQyx1QkFBbUMsRUFBQztRQUN2REgsY0FBYyxHQUFXLE9BQVJFLFNBQVE7SUFDM0I7SUFFQSxNQUFNSSxRQUFRLE9BQU9DLFVBQWtCQztRQUNyQyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNaEIsNkNBQUtBLENBQUNpQixJQUFJLENBQUMsR0FBYyxPQUFYWCxZQUFXLFdBQVM7Z0JBQ3ZEUTtnQkFDQUM7WUFDRjtZQUNBLE1BQU1HLFdBQVdGLFNBQVNHLElBQUk7WUFFOUIsTUFBTUMsUUFBUUYsU0FBU0csTUFBTTtZQUM3QkMsYUFBYUMsT0FBTyxDQUFDLFNBQVNIO1lBRTlCWixPQUFPZ0IsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQkFBZ0JBO1FBQ2hDO0lBQ0Y7SUFFQSxNQUFNRSxnQkFBZ0I7UUFDcEIsSUFBSTtZQUNGLE1BQU1QLFFBQVFFLGFBQWFNLE9BQU8sQ0FBQztZQUVuQyxJQUFJLENBQUNSLE9BQU87Z0JBQ1YsTUFBTSxJQUFJUyxNQUFNO1lBQ2xCO1lBRUFQLGFBQWFDLE9BQU8sQ0FBQyxTQUFTSDtZQUM5QixNQUFNVSxVQUFlN0IscURBQVNBLENBQUNtQjtZQUMvQixNQUFNVyxTQUFTRCxRQUFRRSxPQUFPO1lBRTlCLE1BQU1oQixXQUFXLE1BQU1oQiw2Q0FBS0EsQ0FBQ2lDLEdBQUcsQ0FBQyxHQUFpQkYsT0FBZHpCLFlBQVcsS0FBVSxPQUFQeUIsU0FBVTtnQkFDMURHLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTmY7Z0JBQzNCO1lBQ0Y7WUFFQSxPQUFPSixTQUFTRyxJQUFJO1FBQ3RCLEVBQUUsT0FBT00sT0FBTztZQUNkLE1BQU0sSUFBSUksTUFBTTtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUMxQixZQUFZaUMsUUFBUTtRQUFDQyxPQUFPO1lBQUV4QjtZQUFPYztRQUFjO2tCQUNqRHRCOzs7Ozs7QUFHUCxFQUFFO0dBeERXRDs7UUFHSUYsc0RBQVNBOzs7S0FIYkU7QUEwRE4sTUFBTWtDLFVBQVU7O0lBQ3JCLE9BQU94QyxpREFBVUEsQ0FBQ0s7QUFDcEIsRUFBRTtJQUZXbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlU3RhdGUsXG4gIHVzZUNvbnRleHQsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlRWZmZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5pbnRlcmZhY2UgSVVzZXJEYXRhIHtcbiAgZmlyc3RfbmFtZTogc3RyaW5nO1xuICBsYXN0X25hbWU6IHN0cmluZztcbn1cblxudHlwZSBBdXRoQ29udGV4dERhdGEgPSB7XG4gIGxvZ2luOiAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgZmV0Y2hVc2VyRGF0YTogKCkgPT4gUHJvbWlzZTxJVXNlckRhdGE+O1xufTtcblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoQ29udGV4dERhdGE+KHt9IGFzIEF1dGhDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbY29udGV4dFVybCwgc2V0Q29udGV4dFVybF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJhc2VVcmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpYDtcbiAgICBzZXRDb250ZXh0VXJsKGAke2Jhc2VVcmx9L3VzZXJzYCk7XG4gIH0pO1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke2NvbnRleHRVcmx9L2xvZ2luYCwge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgY29uc3QgdG9rZW4gPSB1c2VyRGF0YS5hY2Nlc3M7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG5cbiAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGZhaWxlZCcsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpOiBQcm9taXNlPElVc2VyRGF0YT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG4gICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVG9rZW4gbm90IGZvdW5kJyk7XG4gICAgICB9XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICAgIGNvbnN0IGRlY29kZWQ6IGFueSA9IGp3dERlY29kZSh0b2tlbik7XG4gICAgICBjb25zdCB1c2VySWQgPSBkZWNvZGVkLnVzZXJfaWQ7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2NvbnRleHRVcmx9LyR7dXNlcklkfWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhbGhhIGFvIGJ1c2NhciBvcyBkYWRvcyBkbyB1c3XDoXJpbycpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2dpbiwgZmV0Y2hVc2VyRGF0YSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwiand0RGVjb2RlIiwidXNlUm91dGVyIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNvbnRleHRVcmwiLCJzZXRDb250ZXh0VXJsIiwicm91dGVyIiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwicG9zdCIsInVzZXJEYXRhIiwiZGF0YSIsInRva2VuIiwiYWNjZXNzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJmZXRjaFVzZXJEYXRhIiwiZ2V0SXRlbSIsIkVycm9yIiwiZGVjb2RlZCIsInVzZXJJZCIsInVzZXJfaWQiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});