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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [contextUrl, setContextUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const baseUrl = \"\".concat(\"http://localhost:8080\", \"/api\");\n        setContextUrl(\"\".concat(baseUrl, \"/users\"));\n    });\n    const login = async (username, password)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"\".concat(contextUrl, \"/login\"), {\n                username,\n                password\n            });\n            const userData = response.data;\n            const token = userData.access;\n            if (token) {\n                localStorage.setItem(\"token\", userData.access);\n            }\n        } catch (error) {\n            console.error(\"Login failed\", error);\n        }\n    };\n    const fetchUserData = async ()=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/api/users/\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            setUser(response.data);\n        } catch (error) {\n            console.error(\"Failed to fetch user data\", error);\n        }\n    };\n    const getUser = ()=>{\n        const token = localStorage.getItem(\"token\");\n        const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.jwtDecode)(token);\n        setUserId(decoded.id); //\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            fetchUserData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/contexts/AuthContext.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"1yTkCC5ryp+F2Li2jLOxRgdsfGY=\");\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFlO0FBQ1c7QUFDYTtBQWtCdkMsTUFBTU0sNEJBQWNOLG9EQUFhQSxDQUFrQixDQUFDO0FBRTdDLE1BQU1PLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQXFCOztJQUMxRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFTO0lBQzdDLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBUztJQUVyREUsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxVQUFVLEdBQXVDLE9BQXBDQyx1QkFBbUMsRUFBQztRQUN2REYsY0FBYyxHQUFXLE9BQVJDLFNBQVE7SUFDM0I7SUFFQSxNQUFNSSxRQUFRLE9BQU9DLFVBQWtCQztRQUNyQyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNbEIsNkNBQUtBLENBQUNtQixJQUFJLENBQUMsR0FBYyxPQUFYVixZQUFXLFdBQVM7Z0JBQ3ZETztnQkFDQUM7WUFDRjtZQUNBLE1BQU1HLFdBQVdGLFNBQVNHLElBQUk7WUFFOUIsTUFBTUMsUUFBUUYsU0FBU0csTUFBTTtZQUU3QixJQUFJRCxPQUFPO2dCQUNURSxhQUFhQyxPQUFPLENBQUMsU0FBU0wsU0FBU0csTUFBTTtZQUMvQztRQUNGLEVBQUUsT0FBT0csT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0JBQWdCQTtRQUNoQztJQUNGO0lBRUEsTUFBTUUsZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNTixRQUFRRSxhQUFhSyxPQUFPLENBQUM7WUFFbkMsTUFBTVgsV0FBVyxNQUFNbEIsNkNBQUtBLENBQUM4QixHQUFHLENBQUMsb0NBQW9DO2dCQUNuRUMsU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOVjtnQkFDM0I7WUFDRjtZQUNBaEIsUUFBUVksU0FBU0csSUFBSTtRQUN2QixFQUFFLE9BQU9LLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7UUFDN0M7SUFDRjtJQUVBLE1BQU1PLFVBQVU7UUFDZCxNQUFNWCxRQUFRRSxhQUFhSyxPQUFPLENBQUM7UUFFbkMsTUFBTUssVUFBZWpDLHFEQUFTQSxDQUFDcUI7UUFDL0JkLFVBQVUwQixRQUFRQyxFQUFFLEdBQUcsRUFBRTtJQUMzQjtJQUVBLHFCQUNFLDhEQUFDakMsWUFBWWtDLFFBQVE7UUFBQ0MsT0FBTztZQUFFaEM7WUFBTVU7WUFBT2E7UUFBYztrQkFDdkR4Qjs7Ozs7O0FBR1AsRUFBRTtHQXZEV0Q7S0FBQUE7QUF5RE4sTUFBTW1DLFVBQVU7O0lBQ3JCLE9BQU94QyxpREFBVUEsQ0FBQ0k7QUFDcEIsRUFBRTtJQUZXb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlU3RhdGUsXG4gIHVzZUNvbnRleHQsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlRWZmZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbiAgbG9naW46ICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBmZXRjaFVzZXJEYXRhOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xufTtcblxudHlwZSBVc2VyID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcbn07XG5cbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHREYXRhPih7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtjb250ZXh0VXJsLCBzZXRDb250ZXh0VXJsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmFzZVVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGlgO1xuICAgIHNldENvbnRleHRVcmwoYCR7YmFzZVVybH0vdXNlcnNgKTtcbiAgfSk7XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7Y29udGV4dFVybH0vbG9naW5gLCB7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICBjb25zdCB0b2tlbiA9IHVzZXJEYXRhLmFjY2VzcztcblxuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHVzZXJEYXRhLmFjY2Vzcyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGZhaWxlZCcsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlcnMvJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHNldFVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyIGRhdGEnLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFVzZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuICAgIGNvbnN0IGRlY29kZWQ6IGFueSA9IGp3dERlY29kZSh0b2tlbik7XG4gICAgc2V0VXNlcklkKGRlY29kZWQuaWQpOyAvL1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvZ2luLCBmZXRjaFVzZXJEYXRhIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJqd3REZWNvZGUiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJjb250ZXh0VXJsIiwic2V0Q29udGV4dFVybCIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJ1c2VyRGF0YSIsImRhdGEiLCJ0b2tlbiIsImFjY2VzcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJmZXRjaFVzZXJEYXRhIiwiZ2V0SXRlbSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0VXNlciIsImRlY29kZWQiLCJpZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});