import {
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-2BAGRJQB.js";

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i2 = 0; i2 < args.length; i2++) {
          args[i2] = arguments[i2];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module) {
    "use strict";
    init_react();
    var bind = require_bind();
    var toString = Object.prototype.toString;
    var kindOf = function(cache) {
      return function(thing) {
        var str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      };
    }(/* @__PURE__ */ Object.create(null));
    function kindOfTest(type) {
      type = type.toLowerCase();
      return function isKindOf(thing) {
        return kindOf(thing) === type;
      };
    }
    function isArray(val) {
      return Array.isArray(val);
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    var isArrayBuffer = kindOfTest("ArrayBuffer");
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
      }
      return result;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (kindOf(val) !== "object") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    var isDate = kindOfTest("Date");
    var isFile = kindOfTest("File");
    var isBlob = kindOfTest("Blob");
    var isFileList = kindOfTest("FileList");
    function isFunction(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isFormData(thing) {
      var pattern = "[object FormData]";
      return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
    }
    var isURLSearchParams = kindOfTest("URLSearchParams");
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i2 = 0, l2 = obj.length; i2 < l2; i2++) {
          fn.call(null, obj[i2], i2, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
        forEach(arguments[i2], assignValue);
      }
      return result;
    }
    function extend(a2, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a2[key] = bind(val, thisArg);
        } else {
          a2[key] = val;
        }
      });
      return a2;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    function inherits(constructor, superConstructor, props, descriptors) {
      constructor.prototype = Object.create(superConstructor.prototype, descriptors);
      constructor.prototype.constructor = constructor;
      props && Object.assign(constructor.prototype, props);
    }
    function toFlatObject(sourceObj, destObj, filter) {
      var props;
      var i2;
      var prop;
      var merged = {};
      destObj = destObj || {};
      do {
        props = Object.getOwnPropertyNames(sourceObj);
        i2 = props.length;
        while (i2-- > 0) {
          prop = props[i2];
          if (!merged[prop]) {
            destObj[prop] = sourceObj[prop];
            merged[prop] = true;
          }
        }
        sourceObj = Object.getPrototypeOf(sourceObj);
      } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
      return destObj;
    }
    function endsWith(str, searchString, position) {
      str = String(str);
      if (position === void 0 || position > str.length) {
        position = str.length;
      }
      position -= searchString.length;
      var lastIndex = str.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }
    function toArray(thing) {
      if (!thing)
        return null;
      var i2 = thing.length;
      if (isUndefined(i2))
        return null;
      var arr = new Array(i2);
      while (i2-- > 0) {
        arr[i2] = thing[i2];
      }
      return arr;
    }
    var isTypedArray = function(TypedArray) {
      return function(thing) {
        return TypedArray && thing instanceof TypedArray;
      };
    }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
    module.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM,
      inherits,
      toFlatObject,
      kindOf,
      kindOfTest,
      endsWith,
      toArray,
      isTypedArray,
      isFileList
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h2) {
        if (h2 !== null) {
          fn(h2);
        }
      });
    };
    module.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/AxiosError.js
var require_AxiosError = __commonJS({
  "node_modules/axios/lib/core/AxiosError.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    function AxiosError(message, code, config, request, response) {
      Error.call(this);
      this.message = message;
      this.name = "AxiosError";
      code && (this.code = code);
      config && (this.config = config);
      request && (this.request = request);
      response && (this.response = response);
    }
    utils.inherits(AxiosError, Error, {
      toJSON: function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      }
    });
    var prototype = AxiosError.prototype;
    var descriptors = {};
    [
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED"
    ].forEach(function(code) {
      descriptors[code] = { value: code };
    });
    Object.defineProperties(AxiosError, descriptors);
    Object.defineProperty(prototype, "isAxiosError", { value: true });
    AxiosError.from = function(error, code, config, request, response, customProps) {
      var axiosError = Object.create(prototype);
      utils.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
      });
      AxiosError.call(axiosError, error.message, code, config, request, response);
      axiosError.name = error.name;
      customProps && Object.assign(axiosError, customProps);
      return axiosError;
    };
    module.exports = AxiosError;
  }
});

// node_modules/axios/lib/defaults/transitional.js
var require_transitional = __commonJS({
  "node_modules/axios/lib/defaults/transitional.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    };
  }
});

// node_modules/axios/lib/helpers/toFormData.js
var require_toFormData = __commonJS({
  "node_modules/axios/lib/helpers/toFormData.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    function toFormData(obj, formData) {
      formData = formData || new FormData();
      var stack = [];
      function convertValue(value) {
        if (value === null)
          return "";
        if (utils.isDate(value)) {
          return value.toISOString();
        }
        if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
          return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
        }
        return value;
      }
      function build(data, parentKey) {
        if (utils.isPlainObject(data) || utils.isArray(data)) {
          if (stack.indexOf(data) !== -1) {
            throw Error("Circular reference detected in " + parentKey);
          }
          stack.push(data);
          utils.forEach(data, function each(value, key) {
            if (utils.isUndefined(value))
              return;
            var fullKey = parentKey ? parentKey + "." + key : key;
            var arr;
            if (value && !parentKey && typeof value === "object") {
              if (utils.endsWith(key, "{}")) {
                value = JSON.stringify(value);
              } else if (utils.endsWith(key, "[]") && (arr = utils.toArray(value))) {
                arr.forEach(function(el) {
                  !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
                });
                return;
              }
            }
            build(value, fullKey);
          });
          stack.pop();
        } else {
          formData.append(parentKey, convertValue(data));
        }
      }
      build(obj);
      return formData;
    }
    module.exports = toFormData;
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module) {
    "use strict";
    init_react();
    var AxiosError = require_AxiosError();
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(new AxiosError("Request failed with status code " + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
      }
    };
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
    "use strict";
    init_react();
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i2;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i2 = line.indexOf(":");
        key = utils.trim(line.substr(0, i2)).toLowerCase();
        val = utils.trim(line.substr(i2 + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/axios/lib/cancel/CanceledError.js
var require_CanceledError = __commonJS({
  "node_modules/axios/lib/cancel/CanceledError.js"(exports, module) {
    "use strict";
    init_react();
    var AxiosError = require_AxiosError();
    var utils = require_utils();
    function CanceledError(message) {
      AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED);
      this.name = "CanceledError";
    }
    utils.inherits(CanceledError, AxiosError, {
      __CANCEL__: true
    });
    module.exports = CanceledError;
  }
});

// node_modules/axios/lib/helpers/parseProtocol.js
var require_parseProtocol = __commonJS({
  "node_modules/axios/lib/helpers/parseProtocol.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function parseProtocol(url) {
      var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
      return match && match[1] || "";
    };
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var transitionalDefaults = require_transitional();
    var AxiosError = require_AxiosError();
    var CanceledError = require_CanceledError();
    var parseProtocol = require_parseProtocol();
    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }
          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }
        if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
          var transitional = config.transitional || transitionalDefaults;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
          onCanceled = function(cancel) {
            if (!request) {
              return;
            }
            reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
            request.abort();
            request = null;
          };
          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }
        if (!requestData) {
          requestData = null;
        }
        var protocol = parseProtocol(fullPath);
        if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
          reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
          return;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/axios/lib/helpers/null.js
var require_null = __commonJS({
  "node_modules/axios/lib/helpers/null.js"(exports, module) {
    init_react();
    module.exports = null;
  }
});

// node_modules/axios/lib/defaults/index.js
var require_defaults = __commonJS({
  "node_modules/axios/lib/defaults/index.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var AxiosError = require_AxiosError();
    var transitionalDefaults = require_transitional();
    var toFormData = require_toFormData();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e2) {
          if (e2.name !== "SyntaxError") {
            throw e2;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: transitionalDefaults,
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        var isObjectPayload = utils.isObject(data);
        var contentType = headers && headers["Content-Type"];
        var isFileList;
        if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === "multipart/form-data") {
          var _FormData = this.env && this.env.FormData;
          return toFormData(isFileList ? { "files[]": data } : data, _FormData && new _FormData());
        } else if (isObjectPayload || contentType === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional || defaults.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e2) {
            if (strictJSONParsing) {
              if (e2.name === "SyntaxError") {
                throw AxiosError.from(e2, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
              }
              throw e2;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: require_null()
      },
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module.exports = defaults;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var defaults = require_defaults();
    module.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    var CanceledError = require_CanceledError();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
      if (config.signal && config.signal.aborted) {
        throw new CanceledError();
      }
    }
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
      config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
      utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
        delete config.headers[method];
      });
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    module.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        }
      }
      function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "beforeRedirect": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
      };
      utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
      });
      return config;
    };
  }
});

// node_modules/axios/lib/env/data.js
var require_data = __commonJS({
  "node_modules/axios/lib/env/data.js"(exports, module) {
    init_react();
    module.exports = {
      "version": "0.27.2"
    };
  }
});

// node_modules/axios/lib/helpers/validator.js
var require_validator = __commonJS({
  "node_modules/axios/lib/helpers/validator.js"(exports, module) {
    "use strict";
    init_react();
    var VERSION = require_data().version;
    var AxiosError = require_AxiosError();
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i2) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    validators.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError.ERR_DEPRECATED);
        }
        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
      }
      var keys = Object.keys(options);
      var i2 = keys.length;
      while (i2-- > 0) {
        var opt = keys[i2];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);
          if (result !== true) {
            throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
        }
      }
    }
    module.exports = {
      assertOptions,
      validators
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var buildFullPath = require_buildFullPath();
    var validator = require_validator();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      var fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            headers: isForm ? {
              "Content-Type": "multipart/form-data"
            } : {},
            url,
            data
          }));
        };
      }
      Axios.prototype[method] = generateHTTPMethod();
      Axios.prototype[method + "Form"] = generateHTTPMethod(true);
    });
    module.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
    "use strict";
    init_react();
    var CanceledError = require_CanceledError();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      this.promise.then(function(cancel) {
        if (!token._listeners)
          return;
        var i2;
        var l2 = token._listeners.length;
        for (i2 = 0; i2 < l2; i2++) {
          token._listeners[i2](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = function(onfulfilled) {
        var _resolve;
        var promise = new Promise(function(resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.prototype.subscribe = function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    };
    CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c2) {
        cancel = c2;
      });
      return {
        token,
        cancel
      };
    };
    module.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    module.exports = function isAxiosError(payload) {
      return utils.isObject(payload) && payload.isAxiosError === true;
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      };
      return instance;
    }
    var axios = createInstance(defaults);
    axios.Axios = Axios;
    axios.CanceledError = require_CanceledError();
    axios.CancelToken = require_CancelToken();
    axios.isCancel = require_isCancel();
    axios.VERSION = require_data().version;
    axios.toFormData = require_toFormData();
    axios.AxiosError = require_AxiosError();
    axios.Cancel = axios.CanceledError;
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = require_spread();
    axios.isAxiosError = require_isAxiosError();
    module.exports = axios;
    module.exports.default = axios;
  }
});

// node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/axios/index.js"(exports, module) {
    init_react();
    module.exports = require_axios();
  }
});

// node_modules/@storyblok/react/dist/storyblok-react.mjs
init_react();
var import_react = __toESM(require_react(), 1);
var import_axios = __toESM(require_axios2(), 1);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a2, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
var loaded = false;
var callbacks = [];
var loadBridge = (src) => {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined")
      return;
    window.storyblokRegisterEvent = (cb) => {
      if (window.location === window.parent.location) {
        console.warn("You are not in Draft Mode or in the Visual Editor.");
        return;
      }
      if (!loaded)
        callbacks.push(cb);
      else
        cb();
    };
    if (document.getElementById("storyblok-javascript-bridge"))
      return;
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.id = "storyblok-javascript-bridge";
    script.onerror = (error) => reject(error);
    script.onload = (ev) => {
      callbacks.forEach((cb) => cb());
      loaded = true;
      resolve(ev);
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  });
};
function t(e2) {
  return typeof e2 == "number" && (e2 == e2 && e2 !== 1 / 0 && e2 !== -1 / 0);
}
function s(e2, s2, r2) {
  if (!t(s2))
    throw new TypeError("Expected `limit` to be a finite number");
  if (!t(r2))
    throw new TypeError("Expected `interval` to be a finite number");
  var i2 = [], n2 = [], o2 = 0, a2 = function() {
    o2++;
    var t2 = setTimeout(function() {
      o2--, i2.length > 0 && a2(), n2 = n2.filter(function(e3) {
        return e3 !== t2;
      });
    }, r2);
    n2.indexOf(t2) < 0 && n2.push(t2);
    var s3 = i2.shift();
    s3.resolve(e2.apply(s3.self, s3.args));
  }, l2 = function() {
    var e3 = arguments, t2 = this;
    return new Promise(function(r3, n3) {
      i2.push({ resolve: r3, reject: n3, args: e3, self: t2 }), o2 < s2 && a2();
    });
  };
  return l2.abort = function() {
    n2.forEach(clearTimeout), n2 = [], i2.forEach(function(e3) {
      e3.reject(new throttle.AbortError());
    }), i2.length = 0;
  }, l2;
}
s.AbortError = function() {
  Error.call(this, "Throttled function aborted"), this.name = "AbortError";
};
var r = function(e2, t2) {
  if (!e2)
    return null;
  let s2 = {};
  for (let r2 in e2) {
    let i2 = e2[r2];
    t2.indexOf(r2) > -1 && i2 !== null && (s2[r2] = i2);
  }
  return s2;
};
var i = { nodes: { horizontal_rule: () => ({ singleTag: "hr" }), blockquote: () => ({ tag: "blockquote" }), bullet_list: () => ({ tag: "ul" }), code_block: (e2) => ({ tag: ["pre", { tag: "code", attrs: e2.attrs }] }), hard_break: () => ({ singleTag: "br" }), heading: (e2) => ({ tag: `h${e2.attrs.level}` }), image: (e2) => ({ singleTag: [{ tag: "img", attrs: r(e2.attrs, ["src", "alt", "title"]) }] }), list_item: () => ({ tag: "li" }), ordered_list: () => ({ tag: "ol" }), paragraph: () => ({ tag: "p" }) }, marks: { bold: () => ({ tag: "b" }), strike: () => ({ tag: "strike" }), underline: () => ({ tag: "u" }), strong: () => ({ tag: "strong" }), code: () => ({ tag: "code" }), italic: () => ({ tag: "i" }), link(e2) {
  const t2 = __spreadValues2({}, e2.attrs), { linktype: s2 = "url" } = e2.attrs;
  return s2 === "email" && (t2.href = `mailto:${t2.href}`), t2.anchor && (t2.href = `${t2.href}#${t2.anchor}`, delete t2.anchor), { tag: [{ tag: "a", attrs: t2 }] };
}, styled: (e2) => ({ tag: [{ tag: "span", attrs: e2.attrs }] }) } };
var n = class {
  constructor(e2) {
    e2 || (e2 = i), this.marks = e2.marks || [], this.nodes = e2.nodes || [];
  }
  addNode(e2, t2) {
    this.nodes[e2] = t2;
  }
  addMark(e2, t2) {
    this.marks[e2] = t2;
  }
  render(e2 = {}) {
    if (e2.content && Array.isArray(e2.content)) {
      let t2 = "";
      return e2.content.forEach((e3) => {
        t2 += this.renderNode(e3);
      }), t2;
    }
    return console.warn("The render method must receive an object with a content field, which is an array"), "";
  }
  renderNode(e2) {
    let t2 = [];
    e2.marks && e2.marks.forEach((e3) => {
      const s3 = this.getMatchingMark(e3);
      s3 && t2.push(this.renderOpeningTag(s3.tag));
    });
    const s2 = this.getMatchingNode(e2);
    return s2 && s2.tag && t2.push(this.renderOpeningTag(s2.tag)), e2.content ? e2.content.forEach((e3) => {
      t2.push(this.renderNode(e3));
    }) : e2.text ? t2.push(function(e3) {
      const t3 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, s3 = /[&<>"']/g, r2 = RegExp(s3.source);
      return e3 && r2.test(e3) ? e3.replace(s3, (e4) => t3[e4]) : e3;
    }(e2.text)) : s2 && s2.singleTag ? t2.push(this.renderTag(s2.singleTag, " /")) : s2 && s2.html && t2.push(s2.html), s2 && s2.tag && t2.push(this.renderClosingTag(s2.tag)), e2.marks && e2.marks.slice(0).reverse().forEach((e3) => {
      const s3 = this.getMatchingMark(e3);
      s3 && t2.push(this.renderClosingTag(s3.tag));
    }), t2.join("");
  }
  renderTag(e2, t2) {
    if (e2.constructor === String)
      return `<${e2}${t2}>`;
    return e2.map((e3) => {
      if (e3.constructor === String)
        return `<${e3}${t2}>`;
      {
        let s2 = `<${e3.tag}`;
        if (e3.attrs)
          for (let t3 in e3.attrs) {
            let r2 = e3.attrs[t3];
            r2 !== null && (s2 += ` ${t3}="${r2}"`);
          }
        return `${s2}${t2}>`;
      }
    }).join("");
  }
  renderOpeningTag(e2) {
    return this.renderTag(e2, "");
  }
  renderClosingTag(e2) {
    if (e2.constructor === String)
      return `</${e2}>`;
    return e2.slice(0).reverse().map((e3) => e3.constructor === String ? `</${e3}>` : `</${e3.tag}>`).join("");
  }
  getMatchingNode(e2) {
    if (typeof this.nodes[e2.type] == "function")
      return this.nodes[e2.type](e2);
  }
  getMatchingMark(e2) {
    if (typeof this.marks[e2.type] == "function")
      return this.marks[e2.type](e2);
  }
};
var o = (e2 = 0, t2 = e2) => {
  const s2 = Math.abs(t2 - e2) || 0, r2 = e2 < t2 ? 1 : -1;
  return ((e3 = 0, t3) => [...Array(e3)].map(t3))(s2, (t3, s3) => s3 * r2 + e2);
};
var a = (e2, t2, s2) => {
  const r2 = [];
  for (const i2 in e2) {
    if (!Object.prototype.hasOwnProperty.call(e2, i2))
      continue;
    const n2 = e2[i2], o2 = s2 ? "" : encodeURIComponent(i2);
    let l2;
    l2 = typeof n2 == "object" ? a(n2, t2 ? t2 + encodeURIComponent("[" + o2 + "]") : o2, Array.isArray(n2)) : (t2 ? t2 + encodeURIComponent("[" + o2 + "]") : o2) + "=" + encodeURIComponent(n2), r2.push(l2);
  }
  return r2.join("&");
};
var l = {};
var c = {};
var h = class {
  constructor(t2, r2) {
    if (!r2) {
      let e2 = t2.region ? `-${t2.region}` : "", s2 = t2.https === false ? "http" : "https";
      r2 = t2.oauthToken === void 0 ? `${s2}://api${e2}.storyblok.com/v2` : `${s2}://api${e2}.storyblok.com/v1`;
    }
    let i2 = Object.assign({}, t2.headers), o2 = 5;
    t2.oauthToken !== void 0 && (i2.Authorization = t2.oauthToken, o2 = 3), t2.rateLimit !== void 0 && (o2 = t2.rateLimit), this.richTextResolver = new n(t2.richTextSchema), typeof t2.componentResolver == "function" && this.setComponentResolver(t2.componentResolver), this.maxRetries = t2.maxRetries || 5, this.throttle = s(this.throttledRequest, o2, 1e3), this.accessToken = t2.accessToken, this.relations = {}, this.links = {}, this.cache = t2.cache || { clear: "manual" }, this.client = import_axios.default.create({ baseURL: r2, timeout: t2.timeout || 0, headers: i2, proxy: t2.proxy || false }), t2.responseInterceptor && this.client.interceptors.response.use((e2) => t2.responseInterceptor(e2)), this.resolveNestedRelations = t2.resolveNestedRelations || true;
  }
  setComponentResolver(e2) {
    this.richTextResolver.addNode("blok", (t2) => {
      let s2 = "";
      return t2.attrs.body.forEach((t3) => {
        s2 += e2(t3.component, t3);
      }), { html: s2 };
    });
  }
  parseParams(e2 = {}) {
    return e2.version || (e2.version = "published"), e2.token || (e2.token = this.getToken()), e2.cv || (e2.cv = c[e2.token]), Array.isArray(e2.resolve_relations) && (e2.resolve_relations = e2.resolve_relations.join(",")), e2;
  }
  factoryParamOptions(e2, t2 = {}) {
    return ((e3 = "") => e3.indexOf("/cdn/") > -1)(e2) ? this.parseParams(t2) : t2;
  }
  makeRequest(e2, t2, s2, r2) {
    const i2 = this.factoryParamOptions(e2, ((e3 = {}, t3 = 25, s3 = 1) => __spreadProps(__spreadValues2({}, e3), { per_page: t3, page: s3 }))(t2, s2, r2));
    return this.cacheResponse(e2, i2);
  }
  get(e2, t2) {
    let s2 = `/${e2}`;
    const r2 = this.factoryParamOptions(s2, t2);
    return this.cacheResponse(s2, r2);
  }
  async getAll(e2, t2 = {}, s2) {
    const r2 = t2.per_page || 25, i2 = `/${e2}`, n2 = i2.split("/");
    s2 = s2 || n2[n2.length - 1];
    const a2 = await this.makeRequest(i2, t2, r2, 1), l2 = Math.ceil(a2.total / r2);
    return ((e3 = [], t3) => e3.map(t3).reduce((e4, t4) => [...e4, ...t4], []))([a2, ...await (async (e3 = [], t3) => Promise.all(e3.map(t3)))(o(1, l2), async (e3) => this.makeRequest(i2, t2, r2, e3 + 1))], (e3) => Object.values(e3.data[s2]));
  }
  post(e2, t2) {
    let s2 = `/${e2}`;
    return this.throttle("post", s2, t2);
  }
  put(e2, t2) {
    let s2 = `/${e2}`;
    return this.throttle("put", s2, t2);
  }
  delete(e2, t2) {
    let s2 = `/${e2}`;
    return this.throttle("delete", s2, t2);
  }
  getStories(e2) {
    return this.get("cdn/stories", e2);
  }
  getStory(e2, t2) {
    return this.get(`cdn/stories/${e2}`, t2);
  }
  setToken(e2) {
    this.accessToken = e2;
  }
  getToken() {
    return this.accessToken;
  }
  _cleanCopy(e2) {
    return JSON.parse(JSON.stringify(e2));
  }
  _insertLinks(e2, t2) {
    const s2 = e2[t2];
    s2 && s2.fieldtype == "multilink" && s2.linktype == "story" && typeof s2.id == "string" && this.links[s2.id] ? s2.story = this._cleanCopy(this.links[s2.id]) : s2 && s2.linktype === "story" && typeof s2.uuid == "string" && this.links[s2.uuid] && (s2.story = this._cleanCopy(this.links[s2.uuid]));
  }
  _insertRelations(e2, t2, s2) {
    if (s2.indexOf(e2.component + "." + t2) > -1) {
      if (typeof e2[t2] == "string")
        this.relations[e2[t2]] && (e2[t2] = this._cleanCopy(this.relations[e2[t2]]));
      else if (e2[t2].constructor === Array) {
        let s3 = [];
        e2[t2].forEach((e3) => {
          this.relations[e3] && s3.push(this._cleanCopy(this.relations[e3]));
        }), e2[t2] = s3;
      }
    }
  }
  _insertAssetsRelations(e2, t2) {
    t2.forEach((t3) => {
      e2.id === t3.id && (e2.original = t3, e2.original.filename = e2.filename, e2.original.filename = e2.original.filename.includes("https://s3.amazonaws.com/") ? e2.original.filename : e2.original.filename.replace("https://", "https://s3.amazonaws.com/"), delete e2.original.s3_filename);
    });
  }
  iterateTree(e2, t2) {
    let s2 = (e3) => {
      if (e3 != null) {
        if (e3.constructor === Array)
          for (let t3 = 0; t3 < e3.length; t3++)
            s2(e3[t3]);
        else if (e3.constructor === Object) {
          if (e3._stopResolving)
            return;
          for (let r2 in e3)
            e3.component && e3._uid || e3.type === "link" ? (this._insertRelations(e3, r2, t2), this._insertLinks(e3, r2)) : e3.fieldtype === "asset" && this._insertAssetsRelations(e3, t2), s2(e3[r2]);
        }
      }
    };
    s2(e2.content);
  }
  async resolveLinks(e2, t2) {
    let s2 = [];
    if (e2.link_uuids) {
      const r2 = e2.link_uuids.length;
      let i2 = [];
      const n2 = 50;
      for (let t3 = 0; t3 < r2; t3 += n2) {
        const s3 = Math.min(r2, t3 + n2);
        i2.push(e2.link_uuids.slice(t3, s3));
      }
      for (let e3 = 0; e3 < i2.length; e3++) {
        (await this.getStories({ per_page: n2, language: t2.language, version: t2.version, by_uuids: i2[e3].join(",") })).data.stories.forEach((e4) => {
          s2.push(e4);
        });
      }
    } else
      s2 = e2.links;
    s2.forEach((e3) => {
      this.links[e3.uuid] = __spreadProps(__spreadValues2({}, e3), { _stopResolving: true });
    });
  }
  async resolveRelations(e2, t2) {
    let s2 = [];
    if (e2.rel_uuids) {
      const r2 = e2.rel_uuids.length;
      let i2 = [];
      const n2 = 50;
      for (let t3 = 0; t3 < r2; t3 += n2) {
        const s3 = Math.min(r2, t3 + n2);
        i2.push(e2.rel_uuids.slice(t3, s3));
      }
      for (let e3 = 0; e3 < i2.length; e3++) {
        (await this.getStories({ per_page: n2, language: t2.language, version: t2.version, by_uuids: i2[e3].join(",") })).data.stories.forEach((e4) => {
          s2.push(e4);
        });
      }
    } else
      s2 = e2.rels;
    s2.forEach((e3) => {
      this.relations[e3.uuid] = __spreadProps(__spreadValues2({}, e3), { _stopResolving: true });
    });
  }
  async resolveStories(e2, t2) {
    let s2 = [];
    if (t2.resolve_relations !== void 0 && t2.resolve_relations.length > 0 && (s2 = t2.resolve_relations.split(","), await this.resolveRelations(e2, t2)), ["1", "story", "url"].indexOf(t2.resolve_links) > -1 && await this.resolveLinks(e2, t2), this.resolveNestedRelations)
      for (const e3 in this.relations)
        this.iterateTree(this.relations[e3], s2);
    e2.story ? this.iterateTree(e2.story, s2) : e2.stories.forEach((e3) => {
      this.iterateTree(e3, s2);
    });
  }
  resolveAssetsRelations(e2) {
    const { assets: t2, stories: s2, story: r2 } = e2;
    if (s2)
      for (const e3 of s2)
        this.iterateTree(e3, t2);
    else
      this.iterateTree(r2, t2);
  }
  cacheResponse(e2, t2, s2) {
    return s2 === void 0 && (s2 = 0), new Promise(async (r2, i2) => {
      let n2 = a({ url: e2, params: t2 }), o2 = this.cacheProvider();
      if (this.cache.clear === "auto" && t2.version === "draft" && await this.flushCache(), t2.version === "published" && e2 != "/cdn/spaces/me") {
        const e3 = await o2.get(n2);
        if (e3)
          return r2(e3);
      }
      try {
        let s3 = await this.throttle("get", e2, { params: t2, paramsSerializer: (e3) => a(e3) }), l3 = { data: s3.data, headers: s3.headers };
        if (l3.data.assets && l3.data.assets.length && this.resolveAssetsRelations(l3.data), s3.headers["per-page"] && (l3 = Object.assign({}, l3, { perPage: parseInt(s3.headers["per-page"]), total: parseInt(s3.headers.total) })), s3.status != 200)
          return i2(s3);
        (l3.data.story || l3.data.stories) && await this.resolveStories(l3.data, t2), t2.version === "published" && e2 != "/cdn/spaces/me" && o2.set(n2, l3), l3.data.cv && (t2.version == "draft" && c[t2.token] != l3.data.cv && this.flushCache(), c[t2.token] = l3.data.cv), r2(l3);
      } catch (n3) {
        if (n3.response && n3.response.status === 429 && (s2 += 1) < this.maxRetries)
          return console.log(`Hit rate limit. Retrying in ${s2} seconds.`), await (l2 = 1e3 * s2, new Promise((e3) => setTimeout(e3, l2))), this.cacheResponse(e2, t2, s2).then(r2).catch(i2);
        i2(n3);
      }
      var l2;
    });
  }
  throttledRequest(e2, t2, s2) {
    return this.client[e2](t2, s2);
  }
  cacheVersions() {
    return c;
  }
  cacheVersion() {
    return c[this.accessToken];
  }
  setCacheVersion(e2) {
    this.accessToken && (c[this.accessToken] = e2);
  }
  cacheProvider() {
    return this.cache.type === "memory" ? { get: (e2) => l[e2], getAll: () => l, set(e2, t2) {
      l[e2] = t2;
    }, flush() {
      l = {};
    } } : { get() {
    }, getAll() {
    }, set() {
    }, flush() {
    } };
  }
  async flushCache() {
    return await this.cacheProvider().flush(), this;
  }
};
var api = (options = {}) => {
  const { apiOptions } = options;
  if (!apiOptions.accessToken) {
    console.error("You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication");
    return;
  }
  const storyblokApi = new h(apiOptions);
  return { storyblokApi };
};
var editable = (blok) => {
  if (typeof blok !== "object" || typeof blok._editable === "undefined") {
    return {};
  }
  const options = JSON.parse(blok._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, ""));
  return {
    "data-blok-c": JSON.stringify(options),
    "data-blok-uid": options.id + "-" + options.uid
  };
};
var bridgeLatest = "https://app.storyblok.com/f/storyblok-v2-latest.js";
var useStoryblokBridge = (id, cb, options = {}) => {
  if (typeof window === "undefined") {
    return;
  }
  if (typeof window.storyblokRegisterEvent === "undefined") {
    console.error("Storyblok Bridge is disabled. Please enable it to use it. Read https://github.com/storyblok/storyblok-js");
    return;
  }
  if (!id) {
    console.warn("Story ID is not defined. Please provide a valid ID.");
    return;
  }
  window.storyblokRegisterEvent(() => {
    const sbBridge = new window.StoryblokBridge(options);
    sbBridge.on(["input", "published", "change"], (event) => {
      if (event.action == "input" && event.story.id === id) {
        cb(event.story);
      } else {
        window.location.reload();
      }
    });
  });
};
var storyblokInit$1 = (pluginOptions = {}) => {
  const { bridge, accessToken, use = [], apiOptions = {} } = pluginOptions;
  apiOptions.accessToken = apiOptions.accessToken || accessToken;
  const options = { bridge, apiOptions };
  let result = {};
  use.forEach((pluginFactory) => {
    result = __spreadValues2(__spreadValues2({}, result), pluginFactory(options));
  });
  if (bridge !== false) {
    loadBridge(bridgeLatest);
  }
  return result;
};
var StoryblokComponent = (_a) => {
  var _b = _a, { blok } = _b, restProps = __objRest(_b, ["blok"]);
  if (!blok) {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
    return /* @__PURE__ */ import_react.default.createElement("div", null, "Please provide a blok property to the StoryblokComponent");
  }
  const Component = getComponent(blok.component);
  if (!Component) {
    return "";
  }
  return /* @__PURE__ */ import_react.default.createElement(Component, __spreadValues({
    blok
  }, restProps));
};
var useStoryblokState = (initialStory = {}, bridgeOptions = {}) => {
  let [story, setStory] = (0, import_react.useState)(initialStory);
  useStoryblokBridge(story.id, (newStory) => setStory(newStory), bridgeOptions);
  (0, import_react.useEffect)(() => {
    setStory(initialStory);
  }, [initialStory]);
  return story;
};
var storyblokApiInstance = null;
var useStoryblokApi = () => {
  if (!storyblokApiInstance) {
    console.error("You can't use getStoryblokApi if you're not loading apiPlugin.");
  }
  return storyblokApiInstance;
};
var componentsMap = {};
var getComponent = (componentKey) => {
  if (!componentsMap[componentKey]) {
    console.error(`Component ${componentKey} doesn't exist.`);
    return false;
  }
  return componentsMap[componentKey];
};
var storyblokInit = (pluginOptions = {}) => {
  const { storyblokApi } = storyblokInit$1(pluginOptions);
  storyblokApiInstance = storyblokApi;
  componentsMap = pluginOptions.components;
};

export {
  api,
  editable,
  StoryblokComponent,
  useStoryblokState,
  useStoryblokApi,
  storyblokInit
};
/*!
 * storyblok-js-client v4.5.2
 * Universal JavaScript SDK for Storyblok's API
 * (c) 2020-2022 Stobylok Team
 */
//# sourceMappingURL=/build/_shared/chunk-WMKIJZDN.js.map
