"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-timeout";
exports.ids = ["vendor-chunks/p-timeout"];
exports.modules = {

/***/ "(rsc)/./node_modules/p-timeout/index.js":
/*!*****************************************!*\
  !*** ./node_modules/p-timeout/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortError: () => (/* binding */ AbortError),\n/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),\n/* harmony export */   \"default\": () => (/* binding */ pTimeout)\n/* harmony export */ });\nclass TimeoutError extends Error {\n    constructor(message){\n        super(message);\n        this.name = \"TimeoutError\";\n    }\n}\n/**\nAn error to be thrown when the request is aborted by AbortController.\nDOMException is thrown instead of this Error when DOMException is available.\n*/ class AbortError extends Error {\n    constructor(message){\n        super();\n        this.name = \"AbortError\";\n        this.message = message;\n    }\n}\n/**\nTODO: Remove AbortError and just throw DOMException when targeting Node 18.\n*/ const getDOMException = (errorMessage)=>globalThis.DOMException === undefined ? new AbortError(errorMessage) : new DOMException(errorMessage);\n/**\nTODO: Remove below function and just 'reject(signal.reason)' when targeting Node 18.\n*/ const getAbortedReason = (signal)=>{\n    const reason = signal.reason === undefined ? getDOMException(\"This operation was aborted.\") : signal.reason;\n    return reason instanceof Error ? reason : getDOMException(reason);\n};\nfunction pTimeout(promise, milliseconds, fallback, options) {\n    let timer;\n    const cancelablePromise = new Promise((resolve, reject)=>{\n        if (typeof milliseconds !== \"number\" || Math.sign(milliseconds) !== 1) {\n            throw new TypeError(`Expected \\`milliseconds\\` to be a positive number, got \\`${milliseconds}\\``);\n        }\n        if (milliseconds === Number.POSITIVE_INFINITY) {\n            resolve(promise);\n            return;\n        }\n        options = {\n            customTimers: {\n                setTimeout,\n                clearTimeout\n            },\n            ...options\n        };\n        if (options.signal) {\n            const { signal } = options;\n            if (signal.aborted) {\n                reject(getAbortedReason(signal));\n            }\n            signal.addEventListener(\"abort\", ()=>{\n                reject(getAbortedReason(signal));\n            });\n        }\n        timer = options.customTimers.setTimeout.call(undefined, ()=>{\n            if (typeof fallback === \"function\") {\n                try {\n                    resolve(fallback());\n                } catch (error) {\n                    reject(error);\n                }\n                return;\n            }\n            const message = typeof fallback === \"string\" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;\n            const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);\n            if (typeof promise.cancel === \"function\") {\n                promise.cancel();\n            }\n            reject(timeoutError);\n        }, milliseconds);\n        (async ()=>{\n            try {\n                resolve(await promise);\n            } catch (error) {\n                reject(error);\n            } finally{\n                options.customTimers.clearTimeout.call(undefined, timer);\n            }\n        })();\n    });\n    cancelablePromise.clear = ()=>{\n        clearTimeout(timer);\n        timer = undefined;\n    };\n    return cancelablePromise;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcC10aW1lb3V0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLHFCQUFxQkM7SUFDakNDLFlBQVlDLE9BQU8sQ0FBRTtRQUNwQixLQUFLLENBQUNBO1FBQ04sSUFBSSxDQUFDQyxJQUFJLEdBQUc7SUFDYjtBQUNEO0FBRUE7OztBQUdBLEdBQ08sTUFBTUMsbUJBQW1CSjtJQUMvQkMsWUFBWUMsT0FBTyxDQUFFO1FBQ3BCLEtBQUs7UUFDTCxJQUFJLENBQUNDLElBQUksR0FBRztRQUNaLElBQUksQ0FBQ0QsT0FBTyxHQUFHQTtJQUNoQjtBQUNEO0FBRUE7O0FBRUEsR0FDQSxNQUFNRyxrQkFBa0JDLENBQUFBLGVBQWdCQyxXQUFXQyxZQUFZLEtBQUtDLFlBQ25FLElBQUlMLFdBQVdFLGdCQUNmLElBQUlFLGFBQWFGO0FBRWxCOztBQUVBLEdBQ0EsTUFBTUksbUJBQW1CQyxDQUFBQTtJQUN4QixNQUFNQyxTQUFTRCxPQUFPQyxNQUFNLEtBQUtILFlBQ2hDSixnQkFBZ0IsaUNBQ2hCTSxPQUFPQyxNQUFNO0lBRWQsT0FBT0Esa0JBQWtCWixRQUFRWSxTQUFTUCxnQkFBZ0JPO0FBQzNEO0FBRWUsU0FBU0MsU0FBU0MsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztJQUN4RSxJQUFJQztJQUVKLE1BQU1DLG9CQUFvQixJQUFJQyxRQUFRLENBQUNDLFNBQVNDO1FBQy9DLElBQUksT0FBT1AsaUJBQWlCLFlBQVlRLEtBQUtDLElBQUksQ0FBQ1Qsa0JBQWtCLEdBQUc7WUFDdEUsTUFBTSxJQUFJVSxVQUFVLENBQUMseURBQXlELEVBQUVWLGFBQWEsRUFBRSxDQUFDO1FBQ2pHO1FBRUEsSUFBSUEsaUJBQWlCVyxPQUFPQyxpQkFBaUIsRUFBRTtZQUM5Q04sUUFBUVA7WUFDUjtRQUNEO1FBRUFHLFVBQVU7WUFDVFcsY0FBYztnQkFBQ0M7Z0JBQVlDO1lBQVk7WUFDdkMsR0FBR2IsT0FBTztRQUNYO1FBRUEsSUFBSUEsUUFBUU4sTUFBTSxFQUFFO1lBQ25CLE1BQU0sRUFBQ0EsTUFBTSxFQUFDLEdBQUdNO1lBQ2pCLElBQUlOLE9BQU9vQixPQUFPLEVBQUU7Z0JBQ25CVCxPQUFPWixpQkFBaUJDO1lBQ3pCO1lBRUFBLE9BQU9xQixnQkFBZ0IsQ0FBQyxTQUFTO2dCQUNoQ1YsT0FBT1osaUJBQWlCQztZQUN6QjtRQUNEO1FBRUFPLFFBQVFELFFBQVFXLFlBQVksQ0FBQ0MsVUFBVSxDQUFDSSxJQUFJLENBQUN4QixXQUFXO1lBQ3ZELElBQUksT0FBT08sYUFBYSxZQUFZO2dCQUNuQyxJQUFJO29CQUNISyxRQUFRTDtnQkFDVCxFQUFFLE9BQU9rQixPQUFPO29CQUNmWixPQUFPWTtnQkFDUjtnQkFFQTtZQUNEO1lBRUEsTUFBTWhDLFVBQVUsT0FBT2MsYUFBYSxXQUFXQSxXQUFXLENBQUMsd0JBQXdCLEVBQUVELGFBQWEsYUFBYSxDQUFDO1lBQ2hILE1BQU1vQixlQUFlbkIsb0JBQW9CaEIsUUFBUWdCLFdBQVcsSUFBSWpCLGFBQWFHO1lBRTdFLElBQUksT0FBT1ksUUFBUXNCLE1BQU0sS0FBSyxZQUFZO2dCQUN6Q3RCLFFBQVFzQixNQUFNO1lBQ2Y7WUFFQWQsT0FBT2E7UUFDUixHQUFHcEI7UUFFRjtZQUNBLElBQUk7Z0JBQ0hNLFFBQVEsTUFBTVA7WUFDZixFQUFFLE9BQU9vQixPQUFPO2dCQUNmWixPQUFPWTtZQUNSLFNBQVU7Z0JBQ1RqQixRQUFRVyxZQUFZLENBQUNFLFlBQVksQ0FBQ0csSUFBSSxDQUFDeEIsV0FBV1M7WUFDbkQ7UUFDRDtJQUNEO0lBRUFDLGtCQUFrQmtCLEtBQUssR0FBRztRQUN6QlAsYUFBYVo7UUFDYkEsUUFBUVQ7SUFDVDtJQUVBLE9BQU9VO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24teC1mdWxsLy4vbm9kZV9tb2R1bGVzL3AtdGltZW91dC9pbmRleC5qcz83YWFkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUaW1lb3V0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLm5hbWUgPSAnVGltZW91dEVycm9yJztcblx0fVxufVxuXG4vKipcbkFuIGVycm9yIHRvIGJlIHRocm93biB3aGVuIHRoZSByZXF1ZXN0IGlzIGFib3J0ZWQgYnkgQWJvcnRDb250cm9sbGVyLlxuRE9NRXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkIG9mIHRoaXMgRXJyb3Igd2hlbiBET01FeGNlcHRpb24gaXMgYXZhaWxhYmxlLlxuKi9cbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSAnQWJvcnRFcnJvcic7XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fVxufVxuXG4vKipcblRPRE86IFJlbW92ZSBBYm9ydEVycm9yIGFuZCBqdXN0IHRocm93IERPTUV4Y2VwdGlvbiB3aGVuIHRhcmdldGluZyBOb2RlIDE4LlxuKi9cbmNvbnN0IGdldERPTUV4Y2VwdGlvbiA9IGVycm9yTWVzc2FnZSA9PiBnbG9iYWxUaGlzLkRPTUV4Y2VwdGlvbiA9PT0gdW5kZWZpbmVkID9cblx0bmV3IEFib3J0RXJyb3IoZXJyb3JNZXNzYWdlKSA6XG5cdG5ldyBET01FeGNlcHRpb24oZXJyb3JNZXNzYWdlKTtcblxuLyoqXG5UT0RPOiBSZW1vdmUgYmVsb3cgZnVuY3Rpb24gYW5kIGp1c3QgJ3JlamVjdChzaWduYWwucmVhc29uKScgd2hlbiB0YXJnZXRpbmcgTm9kZSAxOC5cbiovXG5jb25zdCBnZXRBYm9ydGVkUmVhc29uID0gc2lnbmFsID0+IHtcblx0Y29uc3QgcmVhc29uID0gc2lnbmFsLnJlYXNvbiA9PT0gdW5kZWZpbmVkID9cblx0XHRnZXRET01FeGNlcHRpb24oJ1RoaXMgb3BlcmF0aW9uIHdhcyBhYm9ydGVkLicpIDpcblx0XHRzaWduYWwucmVhc29uO1xuXG5cdHJldHVybiByZWFzb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlYXNvbiA6IGdldERPTUV4Y2VwdGlvbihyZWFzb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcFRpbWVvdXQocHJvbWlzZSwgbWlsbGlzZWNvbmRzLCBmYWxsYmFjaywgb3B0aW9ucykge1xuXHRsZXQgdGltZXI7XG5cblx0Y29uc3QgY2FuY2VsYWJsZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBtaWxsaXNlY29uZHMgIT09ICdudW1iZXInIHx8IE1hdGguc2lnbihtaWxsaXNlY29uZHMpICE9PSAxKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBcXGBtaWxsaXNlY29uZHNcXGAgdG8gYmUgYSBwb3NpdGl2ZSBudW1iZXIsIGdvdCBcXGAke21pbGxpc2Vjb25kc31cXGBgKTtcblx0XHR9XG5cblx0XHRpZiAobWlsbGlzZWNvbmRzID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcblx0XHRcdHJlc29sdmUocHJvbWlzZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdGN1c3RvbVRpbWVyczoge3NldFRpbWVvdXQsIGNsZWFyVGltZW91dH0sXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fTtcblxuXHRcdGlmIChvcHRpb25zLnNpZ25hbCkge1xuXHRcdFx0Y29uc3Qge3NpZ25hbH0gPSBvcHRpb25zO1xuXHRcdFx0aWYgKHNpZ25hbC5hYm9ydGVkKSB7XG5cdFx0XHRcdHJlamVjdChnZXRBYm9ydGVkUmVhc29uKHNpZ25hbCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG5cdFx0XHRcdHJlamVjdChnZXRBYm9ydGVkUmVhc29uKHNpZ25hbCkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGltZXIgPSBvcHRpb25zLmN1c3RvbVRpbWVycy5zZXRUaW1lb3V0LmNhbGwodW5kZWZpbmVkLCAoKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIGZhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShmYWxsYmFjaygpKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtZXNzYWdlID0gdHlwZW9mIGZhbGxiYWNrID09PSAnc3RyaW5nJyA/IGZhbGxiYWNrIDogYFByb21pc2UgdGltZWQgb3V0IGFmdGVyICR7bWlsbGlzZWNvbmRzfSBtaWxsaXNlY29uZHNgO1xuXHRcdFx0Y29uc3QgdGltZW91dEVycm9yID0gZmFsbGJhY2sgaW5zdGFuY2VvZiBFcnJvciA/IGZhbGxiYWNrIDogbmV3IFRpbWVvdXRFcnJvcihtZXNzYWdlKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBwcm9taXNlLmNhbmNlbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRwcm9taXNlLmNhbmNlbCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWplY3QodGltZW91dEVycm9yKTtcblx0XHR9LCBtaWxsaXNlY29uZHMpO1xuXG5cdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc29sdmUoYXdhaXQgcHJvbWlzZSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0b3B0aW9ucy5jdXN0b21UaW1lcnMuY2xlYXJUaW1lb3V0LmNhbGwodW5kZWZpbmVkLCB0aW1lcik7XG5cdFx0XHR9XG5cdFx0fSkoKTtcblx0fSk7XG5cblx0Y2FuY2VsYWJsZVByb21pc2UuY2xlYXIgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHR0aW1lciA9IHVuZGVmaW5lZDtcblx0fTtcblxuXHRyZXR1cm4gY2FuY2VsYWJsZVByb21pc2U7XG59XG4iXSwibmFtZXMiOlsiVGltZW91dEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJuYW1lIiwiQWJvcnRFcnJvciIsImdldERPTUV4Y2VwdGlvbiIsImVycm9yTWVzc2FnZSIsImdsb2JhbFRoaXMiLCJET01FeGNlcHRpb24iLCJ1bmRlZmluZWQiLCJnZXRBYm9ydGVkUmVhc29uIiwic2lnbmFsIiwicmVhc29uIiwicFRpbWVvdXQiLCJwcm9taXNlIiwibWlsbGlzZWNvbmRzIiwiZmFsbGJhY2siLCJvcHRpb25zIiwidGltZXIiLCJjYW5jZWxhYmxlUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiTWF0aCIsInNpZ24iLCJUeXBlRXJyb3IiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsImN1c3RvbVRpbWVycyIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhYm9ydGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGwiLCJlcnJvciIsInRpbWVvdXRFcnJvciIsImNhbmNlbCIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/p-timeout/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/p-timeout/index.js":
/*!*****************************************!*\
  !*** ./node_modules/p-timeout/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortError: () => (/* binding */ AbortError),\n/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),\n/* harmony export */   \"default\": () => (/* binding */ pTimeout)\n/* harmony export */ });\nclass TimeoutError extends Error {\n\tconstructor(message) {\n\t\tsuper(message);\n\t\tthis.name = 'TimeoutError';\n\t}\n}\n\n/**\nAn error to be thrown when the request is aborted by AbortController.\nDOMException is thrown instead of this Error when DOMException is available.\n*/\nclass AbortError extends Error {\n\tconstructor(message) {\n\t\tsuper();\n\t\tthis.name = 'AbortError';\n\t\tthis.message = message;\n\t}\n}\n\n/**\nTODO: Remove AbortError and just throw DOMException when targeting Node 18.\n*/\nconst getDOMException = errorMessage => globalThis.DOMException === undefined ?\n\tnew AbortError(errorMessage) :\n\tnew DOMException(errorMessage);\n\n/**\nTODO: Remove below function and just 'reject(signal.reason)' when targeting Node 18.\n*/\nconst getAbortedReason = signal => {\n\tconst reason = signal.reason === undefined ?\n\t\tgetDOMException('This operation was aborted.') :\n\t\tsignal.reason;\n\n\treturn reason instanceof Error ? reason : getDOMException(reason);\n};\n\nfunction pTimeout(promise, milliseconds, fallback, options) {\n\tlet timer;\n\n\tconst cancelablePromise = new Promise((resolve, reject) => {\n\t\tif (typeof milliseconds !== 'number' || Math.sign(milliseconds) !== 1) {\n\t\t\tthrow new TypeError(`Expected \\`milliseconds\\` to be a positive number, got \\`${milliseconds}\\``);\n\t\t}\n\n\t\tif (milliseconds === Number.POSITIVE_INFINITY) {\n\t\t\tresolve(promise);\n\t\t\treturn;\n\t\t}\n\n\t\toptions = {\n\t\t\tcustomTimers: {setTimeout, clearTimeout},\n\t\t\t...options\n\t\t};\n\n\t\tif (options.signal) {\n\t\t\tconst {signal} = options;\n\t\t\tif (signal.aborted) {\n\t\t\t\treject(getAbortedReason(signal));\n\t\t\t}\n\n\t\t\tsignal.addEventListener('abort', () => {\n\t\t\t\treject(getAbortedReason(signal));\n\t\t\t});\n\t\t}\n\n\t\ttimer = options.customTimers.setTimeout.call(undefined, () => {\n\t\t\tif (typeof fallback === 'function') {\n\t\t\t\ttry {\n\t\t\t\t\tresolve(fallback());\n\t\t\t\t} catch (error) {\n\t\t\t\t\treject(error);\n\t\t\t\t}\n\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tconst message = typeof fallback === 'string' ? fallback : `Promise timed out after ${milliseconds} milliseconds`;\n\t\t\tconst timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);\n\n\t\t\tif (typeof promise.cancel === 'function') {\n\t\t\t\tpromise.cancel();\n\t\t\t}\n\n\t\t\treject(timeoutError);\n\t\t}, milliseconds);\n\n\t\t(async () => {\n\t\t\ttry {\n\t\t\t\tresolve(await promise);\n\t\t\t} catch (error) {\n\t\t\t\treject(error);\n\t\t\t} finally {\n\t\t\t\toptions.customTimers.clearTimeout.call(undefined, timer);\n\t\t\t}\n\t\t})();\n\t});\n\n\tcancelablePromise.clear = () => {\n\t\tclearTimeout(timer);\n\t\ttimer = undefined;\n\t};\n\n\treturn cancelablePromise;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC10aW1lb3V0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLG1GQUFtRixhQUFhO0FBQ2hHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBOztBQUVBO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3RkFBd0YsY0FBYztBQUN0Rzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi14LWZ1bGwvLi9ub2RlX21vZHVsZXMvcC10aW1lb3V0L2luZGV4LmpzP2FhNDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRpbWVvdXRFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMubmFtZSA9ICdUaW1lb3V0RXJyb3InO1xuXHR9XG59XG5cbi8qKlxuQW4gZXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gdGhlIHJlcXVlc3QgaXMgYWJvcnRlZCBieSBBYm9ydENvbnRyb2xsZXIuXG5ET01FeGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQgb2YgdGhpcyBFcnJvciB3aGVuIERPTUV4Y2VwdGlvbiBpcyBhdmFpbGFibGUuXG4qL1xuZXhwb3J0IGNsYXNzIEFib3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9ICdBYm9ydEVycm9yJztcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9XG59XG5cbi8qKlxuVE9ETzogUmVtb3ZlIEFib3J0RXJyb3IgYW5kIGp1c3QgdGhyb3cgRE9NRXhjZXB0aW9uIHdoZW4gdGFyZ2V0aW5nIE5vZGUgMTguXG4qL1xuY29uc3QgZ2V0RE9NRXhjZXB0aW9uID0gZXJyb3JNZXNzYWdlID0+IGdsb2JhbFRoaXMuRE9NRXhjZXB0aW9uID09PSB1bmRlZmluZWQgP1xuXHRuZXcgQWJvcnRFcnJvcihlcnJvck1lc3NhZ2UpIDpcblx0bmV3IERPTUV4Y2VwdGlvbihlcnJvck1lc3NhZ2UpO1xuXG4vKipcblRPRE86IFJlbW92ZSBiZWxvdyBmdW5jdGlvbiBhbmQganVzdCAncmVqZWN0KHNpZ25hbC5yZWFzb24pJyB3aGVuIHRhcmdldGluZyBOb2RlIDE4LlxuKi9cbmNvbnN0IGdldEFib3J0ZWRSZWFzb24gPSBzaWduYWwgPT4ge1xuXHRjb25zdCByZWFzb24gPSBzaWduYWwucmVhc29uID09PSB1bmRlZmluZWQgP1xuXHRcdGdldERPTUV4Y2VwdGlvbignVGhpcyBvcGVyYXRpb24gd2FzIGFib3J0ZWQuJykgOlxuXHRcdHNpZ25hbC5yZWFzb247XG5cblx0cmV0dXJuIHJlYXNvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVhc29uIDogZ2V0RE9NRXhjZXB0aW9uKHJlYXNvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwVGltZW91dChwcm9taXNlLCBtaWxsaXNlY29uZHMsIGZhbGxiYWNrLCBvcHRpb25zKSB7XG5cdGxldCB0aW1lcjtcblxuXHRjb25zdCBjYW5jZWxhYmxlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRpZiAodHlwZW9mIG1pbGxpc2Vjb25kcyAhPT0gJ251bWJlcicgfHwgTWF0aC5zaWduKG1pbGxpc2Vjb25kcykgIT09IDEpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYG1pbGxpc2Vjb25kc1xcYCB0byBiZSBhIHBvc2l0aXZlIG51bWJlciwgZ290IFxcYCR7bWlsbGlzZWNvbmRzfVxcYGApO1xuXHRcdH1cblxuXHRcdGlmIChtaWxsaXNlY29uZHMgPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkge1xuXHRcdFx0cmVzb2x2ZShwcm9taXNlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRvcHRpb25zID0ge1xuXHRcdFx0Y3VzdG9tVGltZXJzOiB7c2V0VGltZW91dCwgY2xlYXJUaW1lb3V0fSxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9O1xuXG5cdFx0aWYgKG9wdGlvbnMuc2lnbmFsKSB7XG5cdFx0XHRjb25zdCB7c2lnbmFsfSA9IG9wdGlvbnM7XG5cdFx0XHRpZiAoc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdFx0cmVqZWN0KGdldEFib3J0ZWRSZWFzb24oc2lnbmFsKSk7XG5cdFx0XHR9XG5cblx0XHRcdHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcblx0XHRcdFx0cmVqZWN0KGdldEFib3J0ZWRSZWFzb24oc2lnbmFsKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aW1lciA9IG9wdGlvbnMuY3VzdG9tVGltZXJzLnNldFRpbWVvdXQuY2FsbCh1bmRlZmluZWQsICgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgZmFsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXNvbHZlKGZhbGxiYWNrKCkpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG1lc3NhZ2UgPSB0eXBlb2YgZmFsbGJhY2sgPT09ICdzdHJpbmcnID8gZmFsbGJhY2sgOiBgUHJvbWlzZSB0aW1lZCBvdXQgYWZ0ZXIgJHttaWxsaXNlY29uZHN9IG1pbGxpc2Vjb25kc2A7XG5cdFx0XHRjb25zdCB0aW1lb3V0RXJyb3IgPSBmYWxsYmFjayBpbnN0YW5jZW9mIEVycm9yID8gZmFsbGJhY2sgOiBuZXcgVGltZW91dEVycm9yKG1lc3NhZ2UpO1xuXG5cdFx0XHRpZiAodHlwZW9mIHByb21pc2UuY2FuY2VsID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHByb21pc2UuY2FuY2VsKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJlamVjdCh0aW1lb3V0RXJyb3IpO1xuXHRcdH0sIG1pbGxpc2Vjb25kcyk7XG5cblx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzb2x2ZShhd2FpdCBwcm9taXNlKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRvcHRpb25zLmN1c3RvbVRpbWVycy5jbGVhclRpbWVvdXQuY2FsbCh1bmRlZmluZWQsIHRpbWVyKTtcblx0XHRcdH1cblx0XHR9KSgpO1xuXHR9KTtcblxuXHRjYW5jZWxhYmxlUHJvbWlzZS5jbGVhciA9ICgpID0+IHtcblx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdHRpbWVyID0gdW5kZWZpbmVkO1xuXHR9O1xuXG5cdHJldHVybiBjYW5jZWxhYmxlUHJvbWlzZTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-timeout/index.js\n");

/***/ })

};
;