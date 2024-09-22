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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [contextUrl, setContextUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const login = async (username, password)=>{\n        const baseUrl = \"\".concat(\"http://localhost:8000\", \"/api\");\n        const contextUrl = \"\".concat(baseUrl, \"/students\");\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"\".concat(contextUrl, \"/login\"), {\n                username,\n                password\n            });\n            const userData = response.data;\n            const token = userData.access;\n            localStorage.setItem(\"token\", token);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.error(error);\n            throw new Error(\"Falha ao fazer login\");\n        }\n    };\n    const fetchUserData = async ()=>{\n        const baseUrl = \"\".concat(\"http://localhost:8000\", \"/api\");\n        const contextUrl = \"\".concat(baseUrl, \"/students\");\n        try {\n            const token = localStorage.getItem(\"token\");\n            if (!token) {\n                throw new Error(\"Token not found\");\n            }\n            localStorage.setItem(\"token\", token);\n            const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.jwtDecode)(token);\n            const userId = decoded.user_id;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(contextUrl, \"/\").concat(userId), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            return response.data;\n        } catch (error) {\n            console.error(error);\n            throw new Error(\"Falha ao buscar os dados do usu\\xe1rio\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const baseUrl = \"\".concat(\"http://localhost:8000\", \"/api\");\n        setContextUrl(\"\".concat(baseUrl, \"/users\"));\n    }, [\n        login,\n        fetchUserData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            login,\n            fetchUserData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/contexts/AuthContext.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"4yMRGxnB0OGtkGYKaKoV6bQNm0A=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDVztBQUNhO0FBQ0s7QUFnQjVDLE1BQU1PLDRCQUFjUCxvREFBYUEsQ0FBa0IsQ0FBQztBQUU3QyxNQUFNUSxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFxQjs7SUFDMUQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFTO0lBRXJELE1BQU1XLFNBQVNOLDBEQUFTQTtJQUV4QixNQUFNTyxRQUFRLE9BQU9DLFVBQWtCQztRQUNyQyxNQUFNQyxVQUFVLEdBQXVDLE9BQXBDQyx1QkFBbUMsRUFBQztRQUN2RCxNQUFNUCxhQUFhLEdBQVcsT0FBUk0sU0FBUTtRQUU5QixJQUFJO1lBQ0YsTUFBTUksV0FBVyxNQUFNaEIsNkNBQUtBLENBQUNpQixJQUFJLENBQUMsR0FBYyxPQUFYWCxZQUFXLFdBQVM7Z0JBQ3ZESTtnQkFDQUM7WUFDRjtZQUNBLE1BQU1PLFdBQVdGLFNBQVNHLElBQUk7WUFFOUIsTUFBTUMsUUFBUUYsU0FBU0csTUFBTTtZQUM3QkMsYUFBYUMsT0FBTyxDQUFDLFNBQVNIO1lBRTlCWixPQUFPZ0IsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDZCxNQUFNLElBQUlFLE1BQU07UUFDbEI7SUFDRjtJQUVBLE1BQU1DLGdCQUFnQjtRQUNwQixNQUFNaEIsVUFBVSxHQUF1QyxPQUFwQ0MsdUJBQW1DLEVBQUM7UUFDdkQsTUFBTVAsYUFBYSxHQUFXLE9BQVJNLFNBQVE7UUFFOUIsSUFBSTtZQUNGLE1BQU1RLFFBQVFFLGFBQWFPLE9BQU8sQ0FBQztZQUVuQyxJQUFJLENBQUNULE9BQU87Z0JBQ1YsTUFBTSxJQUFJTyxNQUFNO1lBQ2xCO1lBRUFMLGFBQWFDLE9BQU8sQ0FBQyxTQUFTSDtZQUM5QixNQUFNVSxVQUFlN0IscURBQVNBLENBQUNtQjtZQUMvQixNQUFNVyxTQUFTRCxRQUFRRSxPQUFPO1lBRTlCLE1BQU1oQixXQUFXLE1BQU1oQiw2Q0FBS0EsQ0FBQ2lDLEdBQUcsQ0FBQyxHQUFpQkYsT0FBZHpCLFlBQVcsS0FBVSxPQUFQeUIsU0FBVTtnQkFDMURHLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTmY7Z0JBQzNCO1lBQ0Y7WUFFQSxPQUFPSixTQUFTRyxJQUFJO1FBQ3RCLEVBQUUsT0FBT00sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2QsTUFBTSxJQUFJRSxNQUFNO1FBQ2xCO0lBQ0Y7SUFFQTVCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsVUFBVSxHQUF1QyxPQUFwQ0MsdUJBQW1DLEVBQUM7UUFDdkROLGNBQWMsR0FBVyxPQUFSSyxTQUFRO0lBQzNCLEdBQUU7UUFBQ0g7UUFBT21CO0tBQWM7SUFFeEIscUJBQ0UsOERBQUN6QixZQUFZaUMsUUFBUTtRQUFDQyxPQUFPO1lBQUU1QjtZQUFPbUI7UUFBYztrQkFDakR2Qjs7Ozs7O0FBR1AsRUFBRTtHQWhFV0Q7O1FBR0lGLHNEQUFTQTs7O0tBSGJFO0FBa0VOLE1BQU1rQyxVQUFVOztJQUNyQixPQUFPeEMsaURBQVVBLENBQUNLO0FBQ3BCLEVBQUU7SUFGV21DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/MWZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZVN0YXRlLFxuICB1c2VDb250ZXh0LFxuICBSZWFjdE5vZGUsXG4gIHVzZUVmZmVjdCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuaW50ZXJmYWNlIElVc2VyRGF0YSB7XG4gIGZpcnN0X25hbWU6IHN0cmluZztcbiAgbGFzdF9uYW1lOiBzdHJpbmc7XG59XG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICBsb2dpbjogKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIGZldGNoVXNlckRhdGE6ICgpID0+IFByb21pc2U8SVVzZXJEYXRhPjtcbn07XG5cbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHREYXRhPih7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbnRleHRVcmwsIHNldENvbnRleHRVcmxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGJhc2VVcmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpYDtcbiAgICBjb25zdCBjb250ZXh0VXJsID0gYCR7YmFzZVVybH0vc3R1ZGVudHNgO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtjb250ZXh0VXJsfS9sb2dpbmAsIHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIGNvbnN0IHRva2VuID0gdXNlckRhdGEuYWNjZXNzO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xuXG4gICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFsaGEgYW8gZmF6ZXIgbG9naW4nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpOiBQcm9taXNlPElVc2VyRGF0YT4gPT4ge1xuICAgIGNvbnN0IGJhc2VVcmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpYDtcbiAgICBjb25zdCBjb250ZXh0VXJsID0gYCR7YmFzZVVybH0vc3R1ZGVudHNgO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb2tlbiBub3QgZm91bmQnKTtcbiAgICAgIH1cblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xuICAgICAgY29uc3QgZGVjb2RlZDogYW55ID0gand0RGVjb2RlKHRva2VuKTtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGRlY29kZWQudXNlcl9pZDtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7Y29udGV4dFVybH0vJHt1c2VySWR9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWxoYSBhbyBidXNjYXIgb3MgZGFkb3MgZG8gdXN1w6FyaW8nKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkx9L2FwaWA7XG4gICAgc2V0Q29udGV4dFVybChgJHtiYXNlVXJsfS91c2Vyc2ApO1xuICB9LFtsb2dpbiwgZmV0Y2hVc2VyRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxvZ2luLCBmZXRjaFVzZXJEYXRhIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJqd3REZWNvZGUiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiY29udGV4dFVybCIsInNldENvbnRleHRVcmwiLCJyb3V0ZXIiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMIiwicmVzcG9uc2UiLCJwb3N0IiwidXNlckRhdGEiLCJkYXRhIiwidG9rZW4iLCJhY2Nlc3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsIkVycm9yIiwiZmV0Y2hVc2VyRGF0YSIsImdldEl0ZW0iLCJkZWNvZGVkIiwidXNlcklkIiwidXNlcl9pZCIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});