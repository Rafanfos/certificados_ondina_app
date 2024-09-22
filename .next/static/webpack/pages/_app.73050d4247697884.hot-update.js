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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [contextUrl, setContextUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const baseUrl = \"\".concat(\"http://localhost:8000\", \"/api\");\n        setContextUrl(\"\".concat(baseUrl, \"/users\"));\n    });\n    const login = async (username, password)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(contextUrl, \"/login\"), {\n                username,\n                password\n            });\n            const userData = response.data;\n            const token = userData.access;\n            localStorage.setItem(\"token\", token);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.error(\"Login failed\", error);\n        }\n    };\n    const fetchUserData = async ()=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            if (token) {\n                localStorage.setItem(\"token\", token);\n                const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.jwtDecode)(token);\n                const userId = decoded.user_id;\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(contextUrl, \"/\").concat(userId), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(token)\n                    }\n                });\n                return response.data;\n            } else {\n                console.error(\"Token not found\");\n            }\n        } catch (error) {\n            console.error(\"Failed to fetch user data\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            login,\n            fetchUserData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/contexts/AuthContext.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"4yMRGxnB0OGtkGYKaKoV6bQNm0A=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDVztBQUNhO0FBQ0s7QUFnQjVDLE1BQU1PLDRCQUFjUCxvREFBYUEsQ0FBa0IsQ0FBQztBQUU3QyxNQUFNUSxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFxQjs7SUFDMUQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFTO0lBRXJELE1BQU1XLFNBQVNOLDBEQUFTQTtJQUV4QkgsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxVQUFVLEdBQXVDLE9BQXBDQyx1QkFBbUMsRUFBQztRQUN2REgsY0FBYyxHQUFXLE9BQVJFLFNBQVE7SUFDM0I7SUFFQSxNQUFNSSxRQUFRLE9BQU9DLFVBQWtCQztRQUNyQyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNaEIsNkNBQUtBLENBQUNpQixJQUFJLENBQUMsR0FBYyxPQUFYWCxZQUFXLFdBQVM7Z0JBQ3ZEUTtnQkFDQUM7WUFDRjtZQUNBLE1BQU1HLFdBQVdGLFNBQVNHLElBQUk7WUFFOUIsTUFBTUMsUUFBUUYsU0FBU0csTUFBTTtZQUM3QkMsYUFBYUMsT0FBTyxDQUFDLFNBQVNIO1lBRTlCWixPQUFPZ0IsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQkFBZ0JBO1FBQ2hDO0lBQ0Y7SUFFQSxNQUFNRSxnQkFBZ0I7UUFDcEIsSUFBSTtZQUNGLE1BQU1QLFFBQVFFLGFBQWFNLE9BQU8sQ0FBQztZQUVuQyxJQUFJUixPQUFPO2dCQUNURSxhQUFhQyxPQUFPLENBQUMsU0FBU0g7Z0JBQzlCLE1BQU1TLFVBQWU1QixxREFBU0EsQ0FBQ21CO2dCQUMvQixNQUFNVSxTQUFTRCxRQUFRRSxPQUFPO2dCQUU5QixNQUFNZixXQUFXLE1BQU1oQiw2Q0FBS0EsQ0FBQ2dDLEdBQUcsQ0FBQyxHQUFpQkYsT0FBZHhCLFlBQVcsS0FBVSxPQUFQd0IsU0FBVTtvQkFDMURHLFNBQVM7d0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTmQ7b0JBQzNCO2dCQUNGO2dCQUVBLE9BQU9KLFNBQVNHLElBQUk7WUFDdEIsT0FBTztnQkFDTE8sUUFBUUQsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQzdDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3RCLFlBQVlnQyxRQUFRO1FBQUNDLE9BQU87WUFBRXZCO1lBQU9jO1FBQWM7a0JBQ2pEdEI7Ozs7OztBQUdQLEVBQUU7R0F4RFdEOztRQUdJRixzREFBU0E7OztLQUhiRTtBQTBETixNQUFNaUMsVUFBVTs7SUFDckIsT0FBT3ZDLGlEQUFVQSxDQUFDSztBQUNwQixFQUFFO0lBRldrQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4PzFmYTIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICB1c2VTdGF0ZSxcbiAgdXNlQ29udGV4dCxcbiAgUmVhY3ROb2RlLFxuICB1c2VFZmZlY3QsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmludGVyZmFjZSBJVXNlckRhdGEge1xuICBmaXJzdF9uYW1lOiBzdHJpbmc7XG4gIGxhc3RfbmFtZTogc3RyaW5nO1xufVxuXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcbiAgbG9naW46ICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBmZXRjaFVzZXJEYXRhOiAoKSA9PiBQcm9taXNlPElVc2VyRGF0YT47XG59O1xuXG50eXBlIEF1dGhQcm92aWRlclByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0RGF0YT4oe30gYXMgQXV0aENvbnRleHREYXRhKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFtjb250ZXh0VXJsLCBzZXRDb250ZXh0VXJsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmFzZVVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGlgO1xuICAgIHNldENvbnRleHRVcmwoYCR7YmFzZVVybH0vdXNlcnNgKTtcbiAgfSk7XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7Y29udGV4dFVybH0vbG9naW5gLCB7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICBjb25zdCB0b2tlbiA9IHVzZXJEYXRhLmFjY2VzcztcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcblxuICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignTG9naW4gZmFpbGVkJywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCk6IFByb21pc2U8SVVzZXJEYXRhPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG4gICAgICAgIGNvbnN0IGRlY29kZWQ6IGFueSA9IGp3dERlY29kZSh0b2tlbik7XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IGRlY29kZWQudXNlcl9pZDtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtjb250ZXh0VXJsfS8ke3VzZXJJZH1gLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUb2tlbiBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIgZGF0YScsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9naW4sIGZldGNoVXNlckRhdGEgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImp3dERlY29kZSIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb250ZXh0VXJsIiwic2V0Q29udGV4dFVybCIsInJvdXRlciIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJ1c2VyRGF0YSIsImRhdGEiLCJ0b2tlbiIsImFjY2VzcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hVc2VyRGF0YSIsImdldEl0ZW0iLCJkZWNvZGVkIiwidXNlcklkIiwidXNlcl9pZCIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});