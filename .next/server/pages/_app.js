/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, jwt_decode__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, jwt_decode__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst AuthProvider = ({ children })=>{\n    const [contextUrl, setContextUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const login = async (username, password)=>{\n        const baseUrl = `${\"http://localhost:8000\"}/api`;\n        const contextUrl = `${baseUrl}/users`;\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`${contextUrl}/login`, {\n                username,\n                password\n            });\n            const userData = response.data;\n            const token = userData.access;\n            localStorage.setItem(\"token\", token);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.error(error);\n            throw new Error(\"Falha ao fazer login\");\n        }\n    };\n    const fetchUserData = async ()=>{\n        const baseUrl = `${\"http://localhost:8000\"}/api`;\n        const contextUrl = `${baseUrl}/users`;\n        try {\n            const token = localStorage.getItem(\"token\");\n            if (!token) {\n                throw new Error(\"Token not found\");\n            }\n            localStorage.setItem(\"token\", token);\n            const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.jwtDecode)(token);\n            const userId = decoded.user_id;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`${contextUrl}/${userId}`, {\n                headers: {\n                    Authorization: `Bearer ${token}`\n                }\n            });\n            return response.data;\n        } catch (error) {\n            console.error(error);\n            throw new Error(\"Falha ao buscar os dados do usu\\xe1rio\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            login,\n            fetchUserData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/contexts/AuthContext.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDVztBQUNhO0FBQ0s7QUFnQjVDLE1BQU1NLDRCQUFjTixvREFBYUEsQ0FBa0IsQ0FBQztBQUU3QyxNQUFNTyxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFxQjtJQUMxRCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQVM7SUFFckQsTUFBTVUsU0FBU04sMERBQVNBO0lBRXhCLE1BQU1PLFFBQVEsT0FBT0MsVUFBa0JDO1FBQ3JDLE1BQU1DLFVBQVUsQ0FBQyxFQUFFQyx1QkFBbUMsQ0FBQyxJQUFJLENBQUM7UUFDNUQsTUFBTVAsYUFBYSxDQUFDLEVBQUVNLFFBQVEsTUFBTSxDQUFDO1FBRXJDLElBQUk7WUFDRixNQUFNSSxXQUFXLE1BQU1oQixrREFBVSxDQUFDLENBQUMsRUFBRU0sV0FBVyxNQUFNLENBQUMsRUFBRTtnQkFDdkRJO2dCQUNBQztZQUNGO1lBQ0EsTUFBTU8sV0FBV0YsU0FBU0csSUFBSTtZQUU5QixNQUFNQyxRQUFRRixTQUFTRyxNQUFNO1lBQzdCQyxhQUFhQyxPQUFPLENBQUMsU0FBU0g7WUFFOUJaLE9BQU9nQixJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNkLE1BQU0sSUFBSUUsTUFBTTtRQUNsQjtJQUNGO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ3BCLE1BQU1oQixVQUFVLENBQUMsRUFBRUMsdUJBQW1DLENBQUMsSUFBSSxDQUFDO1FBQzVELE1BQU1QLGFBQWEsQ0FBQyxFQUFFTSxRQUFRLE1BQU0sQ0FBQztRQUVyQyxJQUFJO1lBQ0YsTUFBTVEsUUFBUUUsYUFBYU8sT0FBTyxDQUFDO1lBRW5DLElBQUksQ0FBQ1QsT0FBTztnQkFDVixNQUFNLElBQUlPLE1BQU07WUFDbEI7WUFFQUwsYUFBYUMsT0FBTyxDQUFDLFNBQVNIO1lBQzlCLE1BQU1VLFVBQWU3QixxREFBU0EsQ0FBQ21CO1lBQy9CLE1BQU1XLFNBQVNELFFBQVFFLE9BQU87WUFFOUIsTUFBTWhCLFdBQVcsTUFBTWhCLGlEQUFTLENBQUMsQ0FBQyxFQUFFTSxXQUFXLENBQUMsRUFBRXlCLE9BQU8sQ0FBQyxFQUFFO2dCQUMxREcsU0FBUztvQkFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRWYsTUFBTSxDQUFDO2dCQUNsQztZQUNGO1lBRUEsT0FBT0osU0FBU0csSUFBSTtRQUN0QixFQUFFLE9BQU9NLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNkLE1BQU0sSUFBSUUsTUFBTTtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUN4QixZQUFZaUMsUUFBUTtRQUFDQyxPQUFPO1lBQUU1QjtZQUFPbUI7UUFBYztrQkFDakR2Qjs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU1pQyxVQUFVO0lBQ3JCLE9BQU92QyxpREFBVUEsQ0FBQ0k7QUFDcEIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NlcnRpZmljYWRvc19vbmRpbmFfYXBwLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlU3RhdGUsXG4gIHVzZUNvbnRleHQsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlRWZmZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSAnand0LWRlY29kZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5pbnRlcmZhY2UgSVVzZXJEYXRhIHtcbiAgZmlyc3RfbmFtZTogc3RyaW5nO1xuICBsYXN0X25hbWU6IHN0cmluZztcbn1cblxudHlwZSBBdXRoQ29udGV4dERhdGEgPSB7XG4gIGxvZ2luOiAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgZmV0Y2hVc2VyRGF0YTogKCkgPT4gUHJvbWlzZTxJVXNlckRhdGE+O1xufTtcblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoQ29udGV4dERhdGE+KHt9IGFzIEF1dGhDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbY29udGV4dFVybCwgc2V0Q29udGV4dFVybF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgYmFzZVVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGlgO1xuICAgIGNvbnN0IGNvbnRleHRVcmwgPSBgJHtiYXNlVXJsfS91c2Vyc2A7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke2NvbnRleHRVcmx9L2xvZ2luYCwge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgY29uc3QgdG9rZW4gPSB1c2VyRGF0YS5hY2Nlc3M7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG5cbiAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWxoYSBhbyBmYXplciBsb2dpbicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCk6IFByb21pc2U8SVVzZXJEYXRhPiA9PiB7XG4gICAgY29uc3QgYmFzZVVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGlgO1xuICAgIGNvbnN0IGNvbnRleHRVcmwgPSBgJHtiYXNlVXJsfS91c2Vyc2A7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rva2VuIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG4gICAgICBjb25zdCBkZWNvZGVkOiBhbnkgPSBqd3REZWNvZGUodG9rZW4pO1xuICAgICAgY29uc3QgdXNlcklkID0gZGVjb2RlZC51c2VyX2lkO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtjb250ZXh0VXJsfS8ke3VzZXJJZH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhbGhhIGFvIGJ1c2NhciBvcyBkYWRvcyBkbyB1c3XDoXJpbycpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2dpbiwgZmV0Y2hVc2VyRGF0YSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImF4aW9zIiwiand0RGVjb2RlIiwidXNlUm91dGVyIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNvbnRleHRVcmwiLCJzZXRDb250ZXh0VXJsIiwicm91dGVyIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsInJlc3BvbnNlIiwicG9zdCIsInVzZXJEYXRhIiwiZGF0YSIsInRva2VuIiwiYWNjZXNzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsImZldGNoVXNlckRhdGEiLCJnZXRJdGVtIiwiZGVjb2RlZCIsInVzZXJJZCIsInVzZXJfaWQiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/contexts/StudentsContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/StudentsContext.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StudentsProvider: () => (/* binding */ StudentsProvider),\n/* harmony export */   useStudents: () => (/* binding */ useStudents)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ StudentsProvider,useStudents auto */ \n\n\nconst StudentsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst StudentsProvider = ({ children })=>{\n    const fetchStudents = async ()=>{\n        const baseUrl = `${\"http://localhost:8000\"}/api`;\n        const contextUrl = `${baseUrl}/students`;\n        const token = localStorage.getItem(\"token\");\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`${contextUrl}/list/`, {\n                headers: {\n                    Authorization: `Bearer ${token}`\n                }\n            });\n            return response.data.students;\n        } catch (error) {\n            console.error(error);\n            throw new Error(\"Falha ao listar alunos\");\n        }\n    };\n    const generateCertificate = async (studentId, certificateType, director, viceDirector)=>{\n        const baseUrl = `${\"http://localhost:8000\"}/api`;\n        const contextUrl = `${baseUrl}/students`;\n        const token = localStorage.getItem(\"token\");\n        const body = {\n            certificate_type: certificateType,\n            student_id: studentId,\n            director: director,\n            vice_director: viceDirector\n        };\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`${contextUrl}${studentId}/certificate`, {\n                body\n            }, {\n                headers: {\n                    Authorization: `Bearer ${token}`\n                }\n            });\n            alert(\"Certificado gerado com sucesso!\");\n        } catch (error) {\n            console.error(\"Failed to generate certificate\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StudentsContext.Provider, {\n        value: {\n            fetchStudents,\n            generateCertificate\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/contexts/StudentsContext.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\nconst useStudents = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StudentsContext);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU3R1ZGVudHNDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU2RDtBQUNuQztBQXdCMUIsTUFBTUcsZ0NBQWtCSCxvREFBYUEsQ0FDbkMsQ0FBQztBQUdJLE1BQU1JLG1CQUFtQixDQUFDLEVBQUVDLFFBQVEsRUFBeUI7SUFDbEUsTUFBTUMsZ0JBQWdCO1FBQ3BCLE1BQU1DLFVBQVUsQ0FBQyxFQUFFQyx1QkFBbUMsQ0FBQyxJQUFJLENBQUM7UUFDNUQsTUFBTUcsYUFBYSxDQUFDLEVBQUVKLFFBQVEsU0FBUyxDQUFDO1FBQ3hDLE1BQU1LLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUVuQyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNYixpREFBUyxDQUFDLENBQUMsRUFBRVMsV0FBVyxNQUFNLENBQUMsRUFBRTtnQkFDdERNLFNBQVM7b0JBQ1BDLGVBQWUsQ0FBQyxPQUFPLEVBQUVOLE1BQU0sQ0FBQztnQkFDbEM7WUFDRjtZQUVBLE9BQU9HLFNBQVNJLElBQUksQ0FBQ0MsUUFBUTtRQUMvQixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNkLE1BQU0sSUFBSUUsTUFBTTtRQUNsQjtJQUNGO0lBRUEsTUFBTUMsc0JBQXNCLE9BQzFCQyxXQUNBQyxpQkFDQUMsVUFDQUM7UUFFQSxNQUFNckIsVUFBVSxDQUFDLEVBQUVDLHVCQUFtQyxDQUFDLElBQUksQ0FBQztRQUM1RCxNQUFNRyxhQUFhLENBQUMsRUFBRUosUUFBUSxTQUFTLENBQUM7UUFDeEMsTUFBTUssUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBRW5DLE1BQU1lLE9BQU87WUFDWEMsa0JBQWtCSjtZQUNsQkssWUFBWU47WUFDWkUsVUFBVUE7WUFDVkssZUFBZUo7UUFDakI7UUFFQSxJQUFJO1lBQ0YsTUFBTTFCLGtEQUFVLENBQ2QsQ0FBQyxFQUFFUyxXQUFXLEVBQUVjLFVBQVUsWUFBWSxDQUFDLEVBQ3ZDO2dCQUFFSTtZQUFLLEdBQ1A7Z0JBQ0VaLFNBQVM7b0JBQ1BDLGVBQWUsQ0FBQyxPQUFPLEVBQUVOLE1BQU0sQ0FBQztnQkFDbEM7WUFDRjtZQUVGc0IsTUFBTTtRQUNSLEVBQUUsT0FBT2IsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNsQixnQkFBZ0JnQyxRQUFRO1FBQUNDLE9BQU87WUFBRTlCO1lBQWVrQjtRQUFvQjtrQkFDbkVuQjs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU1nQyxjQUFjO0lBQ3pCLE9BQU9wQyxpREFBVUEsQ0FBQ0U7QUFDcEIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NlcnRpZmljYWRvc19vbmRpbmFfYXBwLy4vc3JjL2NvbnRleHRzL1N0dWRlbnRzQ29udGV4dC50c3g/MTI2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0dWRlbnREYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgZnVsbF9uYW1lOiBzdHJpbmc7XG4gIGdyYWR1YXRpb25fdGVybTogc3RyaW5nO1xuICBkaXBsb21hX2dlbmVyYXRlZDogYm9vbGVhbjtcbiAgaGlnaGxpZ2h0X2NlcnRpZmljYXRlX2dlbmVyYXRlZDogYm9vbGVhbjtcbn1cblxudHlwZSBTdHVkZW50c0NvbnRleHREYXRhID0ge1xuICBmZXRjaFN0dWRlbnRzOiAoKSA9PiBQcm9taXNlPElTdHVkZW50RGF0YVtdPjtcbiAgZ2VuZXJhdGVDZXJ0aWZpY2F0ZTogKFxuICAgIHN0dWRlbnRJZDogc3RyaW5nLFxuICAgIGNlcnRpZmljYXRlVHlwZTogc3RyaW5nLFxuICAgIGRpcmVjdG9yOiBzdHJpbmcsXG4gICAgdmljZURpcmVjdG9yOiBzdHJpbmdcbiAgKSA9PiBQcm9taXNlPHZvaWQ+O1xufTtcblxudHlwZSBTdHVkZW50c1Byb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5jb25zdCBTdHVkZW50c0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN0dWRlbnRzQ29udGV4dERhdGE+KFxuICB7fSBhcyBTdHVkZW50c0NvbnRleHREYXRhXG4pO1xuXG5leHBvcnQgY29uc3QgU3R1ZGVudHNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFN0dWRlbnRzUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBmZXRjaFN0dWRlbnRzID0gYXN5bmMgKCk6IFByb21pc2U8SVN0dWRlbnREYXRhW10+ID0+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkx9L2FwaWA7XG4gICAgY29uc3QgY29udGV4dFVybCA9IGAke2Jhc2VVcmx9L3N0dWRlbnRzYDtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2NvbnRleHRVcmx9L2xpc3QvYCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuc3R1ZGVudHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWxoYSBhbyBsaXN0YXIgYWx1bm9zJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlQ2VydGlmaWNhdGUgPSBhc3luYyAoXG4gICAgc3R1ZGVudElkOiBzdHJpbmcsXG4gICAgY2VydGlmaWNhdGVUeXBlOiBzdHJpbmcsXG4gICAgZGlyZWN0b3I6IHN0cmluZyxcbiAgICB2aWNlRGlyZWN0b3I6IHN0cmluZ1xuICApID0+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkx9L2FwaWA7XG4gICAgY29uc3QgY29udGV4dFVybCA9IGAke2Jhc2VVcmx9L3N0dWRlbnRzYDtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIGNlcnRpZmljYXRlX3R5cGU6IGNlcnRpZmljYXRlVHlwZSxcbiAgICAgIHN0dWRlbnRfaWQ6IHN0dWRlbnRJZCxcbiAgICAgIGRpcmVjdG9yOiBkaXJlY3RvcixcbiAgICAgIHZpY2VfZGlyZWN0b3I6IHZpY2VEaXJlY3RvcixcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIGAke2NvbnRleHRVcmx9JHtzdHVkZW50SWR9L2NlcnRpZmljYXRlYCxcbiAgICAgICAgeyBib2R5IH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgYWxlcnQoJ0NlcnRpZmljYWRvIGdlcmFkbyBjb20gc3VjZXNzbyEnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIGNlcnRpZmljYXRlJywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHVkZW50c0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZmV0Y2hTdHVkZW50cywgZ2VuZXJhdGVDZXJ0aWZpY2F0ZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0dWRlbnRzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTdHVkZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU3R1ZGVudHNDb250ZXh0KTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJheGlvcyIsIlN0dWRlbnRzQ29udGV4dCIsIlN0dWRlbnRzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImZldGNoU3R1ZGVudHMiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMIiwiY29udGV4dFVybCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwic3R1ZGVudHMiLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsImdlbmVyYXRlQ2VydGlmaWNhdGUiLCJzdHVkZW50SWQiLCJjZXJ0aWZpY2F0ZVR5cGUiLCJkaXJlY3RvciIsInZpY2VEaXJlY3RvciIsImJvZHkiLCJjZXJ0aWZpY2F0ZV90eXBlIiwic3R1ZGVudF9pZCIsInZpY2VfZGlyZWN0b3IiLCJwb3N0IiwiYWxlcnQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU3R1ZGVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/StudentsContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/globals.css */ \"./src/app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n/* harmony import */ var _contexts_StudentsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/StudentsContext */ \"./src/contexts/StudentsContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__, _contexts_StudentsContext__WEBPACK_IMPORTED_MODULE_3__]);\n([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__, _contexts_StudentsContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_StudentsContext__WEBPACK_IMPORTED_MODULE_3__.StudentsProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDMEI7QUFDUTtBQUcvQyxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzlELHFCQUNFLDhEQUFDSiwrREFBWUE7a0JBQ1gsNEVBQUNDLHVFQUFnQkE7c0JBQ2YsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZXJ0aWZpY2Fkb3Nfb25kaW5hX2FwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vYXBwL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dHMvQXV0aENvbnRleHQnO1xuaW1wb3J0IHsgU3R1ZGVudHNQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dHMvU3R1ZGVudHNDb250ZXh0JztcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxTdHVkZW50c1Byb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1N0dWRlbnRzUHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiU3R1ZGVudHNQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("jwt-decode");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();