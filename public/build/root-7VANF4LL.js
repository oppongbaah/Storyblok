import {
  ClientStyleContext,
  Global,
  ServerStyleContext,
  ThemeContext,
  ThemeProvider,
  emotion_memoize_browser_esm_default,
  getRegisteredStyles,
  insertStyles,
  keyframes,
  registerStyles,
  require_react_dom,
  serializeStyles,
  withEmotionCache
} from "/build/_shared/chunk-SO35XJ6Q.js";
import {
  AlgosFactory,
  HomeFactory
} from "/build/_shared/chunk-FG7A2RXU.js";
import {
  StoryblokComponent,
  api,
  editable,
  storyblokInit
} from "/build/_shared/chunk-WMKIJZDN.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  ScrollRestoration,
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  _extends,
  init_extends,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-2BAGRJQB.js";

// node_modules/lodash.mergewith/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.mergewith/index.js"(exports, module) {
    init_react();
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types2 = freeModule && freeModule.require && freeModule.require("util").types;
        if (types2) {
          return types2;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function baseTimes(n, iteratee) {
      var index2 = -1, result = Array(n);
      while (++index2 < n) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function overArg(func, transform9) {
      return function(arg) {
        return func(transform9(arg));
      };
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var objectCtorString = funcToString.call(Object);
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeMax = Math.max;
    var nativeNow = Date.now;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject2(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    function Hash(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index2 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index2, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      return index2 < 0 ? void 0 : data[index2][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index2][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size2 = data.size;
      data.set(key, value);
      this.size += data.size == size2 ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack2(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack2.prototype.clear = stackClear;
    Stack2.prototype["delete"] = stackDelete;
    Stack2.prototype.get = stackGet;
    Stack2.prototype.has = stackHas;
    Stack2.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    var baseFor = createBaseFor();
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsNative(value) {
      if (!isObject2(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeysIn(object) {
      if (!isObject2(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack2());
        if (isObject2(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray2(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject2(objValue) || isFunction2(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    function baseRest(func, start2) {
      return setToString(overRest(func, start2, identity), func + "");
    }
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index2 = -1, length = source.length;
      array || (array = Array(length));
      while (++index2 < length) {
        array[index2] = source[index2];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index2 = -1, length = props.length;
      while (++index2 < length) {
        var key = props[index2];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index2 < length) {
          var source = sources[index2];
          if (source) {
            assigner(object, source, index2, customizer);
          }
        }
        return object;
      });
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index2];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index2, object) {
      if (!isObject2(object)) {
        return false;
      }
      var type = typeof index2;
      if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
        return eq(object[index2], value);
      }
      return false;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function overRest(func, start2, transform9) {
      start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
      return function() {
        var args = arguments, index2 = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
        while (++index2 < length) {
          array[index2] = args[start2 + index2];
        }
        index2 = -1;
        var otherArgs = Array(start2 + 1);
        while (++index2 < start2) {
          otherArgs[index2] = args[index2];
        }
        otherArgs[start2] = transform9(array);
        return apply(func, this, otherArgs);
      };
    }
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    var setToString = shortOut(baseSetToString);
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray2 = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction2(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction2(value) {
      if (!isObject2(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject2(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity(value) {
      return value;
    }
    function stubFalse() {
      return false;
    }
    module.exports = mergeWith;
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    init_react();
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active2 = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active2.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active2.blur();
          break;
        default:
          active2 = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active2 && active2.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    init_react();
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format2(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy2(text, options) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format3 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format3, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format2("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy2;
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    init_react();
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a2, b2) {
      if (a2 === b2)
        return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor)
          return false;
        var length, i, keys2;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a2[i], b2[i]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a2 instanceof Map && b2 instanceof Map) {
          if (a2.size !== b2.size)
            return false;
          it = a2.entries();
          while (!(i = it.next()).done)
            if (!b2.has(i.value[0]))
              return false;
          it = a2.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b2.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a2 instanceof Set && b2 instanceof Set) {
          if (a2.size !== b2.size)
            return false;
          it = a2.entries();
          while (!(i = it.next()).done)
            if (!b2.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a2[i] !== b2[i])
              return false;
          return true;
        }
        if (a2.constructor === RegExp)
          return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf)
          return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString)
          return a2.toString() === b2.toString();
        keys2 = Object.keys(a2);
        length = keys2.length;
        if (length !== Object.keys(b2).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys2[i]))
            return false;
        if (hasElementType && a2 instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys2[i] === "_owner" || keys2[i] === "__v" || keys2[i] === "__o") && a2.$$typeof) {
            continue;
          }
          if (!equal(a2[keys2[i]], b2[keys2[i]]))
            return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    }
    module.exports = function isEqual2(a2, b2) {
      try {
        return equal(a2, b2);
      } catch (error2) {
        if ((error2.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error2;
      }
    };
  }
});

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    init_react();
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory2) {
      var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory2(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory2(createExporter(root, createExporter(module.exports)));
      } else {
        factory2(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id2, v) {
          return exports2[id2] = previous ? previous(id2, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
        d.__proto__ = b2;
      } || function(d, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d[p] = b2[p];
      };
      __extends2 = function(d, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d, b2);
        function __() {
          this.constructor = d;
        }
        d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign2 = Object.assign || function(t2) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t2[p] = s[p];
        }
        return t2;
      };
      __rest2 = function(s, e) {
        var t2 = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t2[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t2[p[i]] = s[p[i]];
          }
        return t2;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
        return c2 > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t2[0] & 1)
            throw t2[1];
          return t2[1];
        }, trys: [], ops: [] }, f, y, t2, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done)
                return t2;
              if (y = 0, t2)
                op = [op[0] & 2, t2.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t2 = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t2[1]) {
                    _.label = t2[1];
                    t2 = op;
                    break;
                  }
                  if (t2 && _.label < t2[2]) {
                    _.label = t2[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t2[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t2 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error2) {
          e = { error: error2 };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a2 = arguments[i], j = 0, jl = a2.length; j < jl; j++, k++)
            r[k] = a2[j];
        return r;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a2, b2) {
                q.push([n, v, a2, b2]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state2, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state2.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state2, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state2.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state2, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state2 === "function" ? receiver === state2 : state2.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// node_modules/framer-motion/node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize3(fn6) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn6(arg);
    return cache[arg];
  };
}
var memoize_browser_esm_default;
var init_memoize_browser_esm = __esm({
  "node_modules/framer-motion/node_modules/@emotion/memoize/dist/memoize.browser.esm.js"() {
    init_react();
    memoize_browser_esm_default = memoize3;
  }
});

// node_modules/framer-motion/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var is_prop_valid_browser_esm_exports = {};
__export(is_prop_valid_browser_esm_exports, {
  default: () => is_prop_valid_browser_esm_default
});
var reactPropsRegex2, index, is_prop_valid_browser_esm_default;
var init_is_prop_valid_browser_esm = __esm({
  "node_modules/framer-motion/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"() {
    init_react();
    init_memoize_browser_esm();
    reactPropsRegex2 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    index = memoize_browser_esm_default(function(prop2) {
      return reactPropsRegex2.test(prop2) || prop2.charCodeAt(0) === 111 && prop2.charCodeAt(1) === 110 && prop2.charCodeAt(2) < 91;
    });
    is_prop_valid_browser_esm_default = index;
  }
});

// browser-route-module:/home/isaac/Documents/Nexum/storyBlok/nexum-shop/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_react73 = __toESM(require_react());

// node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js
init_react();
var React29 = __toESM(require_react());

// node_modules/@chakra-ui/provider/dist/chakra-ui-provider.esm.js
init_react();

// node_modules/@chakra-ui/css-reset/dist/chakra-ui-css-reset.esm.js
init_react();
var React2 = __toESM(require_react());
var CSSReset = function CSSReset2() {
  return /* @__PURE__ */ React2.createElement(Global, {
    styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }
    `
  });
};
var CSSReset$1 = CSSReset;

// node_modules/@chakra-ui/portal/dist/chakra-ui-portal.esm.js
init_react();

// node_modules/@chakra-ui/utils/dist/chakra-ui-utils.esm.js
init_react();
var import_lodash = __toESM(require_lodash());

// node_modules/framesync/dist/es/index.js
init_react();

// node_modules/framesync/dist/es/on-next-frame.js
init_react();
var defaultTimestep = 1 / 60 * 1e3;

// node_modules/framesync/dist/es/create-render-step.js
init_react();

// node_modules/@chakra-ui/utils/dist/chakra-ui-utils.esm.js
function getLastItem(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function addItem(array, item) {
  return [].concat(array, [item]);
}
function removeItem(array, item) {
  return array.filter(function(eachItem) {
    return eachItem !== item;
  });
}
function getNextItemFromSearch(items, searchString, itemToString, currentItem) {
  if (searchString == null) {
    return currentItem;
  }
  if (!currentItem) {
    var foundItem = items.find(function(item) {
      return itemToString(item).toLowerCase().startsWith(searchString.toLowerCase());
    });
    return foundItem;
  }
  var matchingItems = items.filter(function(item) {
    return itemToString(item).toLowerCase().startsWith(searchString.toLowerCase());
  });
  if (matchingItems.length > 0) {
    var nextIndex;
    if (matchingItems.includes(currentItem)) {
      var currentIndex = matchingItems.indexOf(currentItem);
      nextIndex = currentIndex + 1;
      if (nextIndex === matchingItems.length) {
        nextIndex = 0;
      }
      return matchingItems[nextIndex];
    }
    nextIndex = items.indexOf(matchingItems[0]);
    return items[nextIndex];
  }
  return currentItem;
}
function isNumber(value) {
  return typeof value === "number";
}
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}
function isNull(value) {
  return value == null;
}
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
var __DEV__ = true;
function omit(object, keys2) {
  var result = {};
  Object.keys(object).forEach(function(key) {
    if (keys2.includes(key))
      return;
    result[key] = object[key];
  });
  return result;
}
function pick(object, keys2) {
  var result = {};
  keys2.forEach(function(key) {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}
function split(object, keys2) {
  var picked = {};
  var omitted = {};
  Object.keys(object).forEach(function(key) {
    if (keys2.includes(key)) {
      picked[key] = object[key];
    } else {
      omitted[key] = object[key];
    }
  });
  return [picked, omitted];
}
function get(obj, path, fallback, index2) {
  var key = typeof path === "string" ? path.split(".") : [path];
  for (index2 = 0; index2 < key.length; index2 += 1) {
    if (!obj)
      break;
    obj = obj[key[index2]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize = function memoize2(fn6) {
  var cache = /* @__PURE__ */ new WeakMap();
  var memoizedFn = function memoizedFn2(obj, path, fallback, index2) {
    if (typeof obj === "undefined") {
      return fn6(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    var map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    var value = fn6(obj, path, fallback, index2);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize(get);
function objectFilter(object, fn6) {
  var result = {};
  Object.keys(object).forEach(function(key) {
    var value = object[key];
    var shouldPass = fn6(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var filterUndefined = function filterUndefined2(object) {
  return objectFilter(object, function(val) {
    return val !== null && val !== void 0;
  });
};
var objectKeys = function objectKeys2(obj) {
  return Object.keys(obj);
};
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(carry, _ref) {
    var key = _ref[0], value = _ref[1];
    carry[key] = value;
    return carry;
  }, {});
};
function analyzeCSSValue(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
}
function px(value) {
  if (value == null)
    return value;
  var _analyzeCSSValue = analyzeCSSValue(value), unitless = _analyzeCSSValue.unitless;
  return unitless || isNumber(value) ? value + "px" : value;
}
var sortByBreakpointValue = function sortByBreakpointValue2(a2, b2) {
  return parseInt(a2[1], 10) > parseInt(b2[1], 10) ? 1 : -1;
};
var sortBps = function sortBps2(breakpoints3) {
  return fromEntries(Object.entries(breakpoints3).sort(sortByBreakpointValue));
};
function normalize(breakpoints3) {
  var sorted = sortBps(breakpoints3);
  return Object.assign(Object.values(sorted), sorted);
}
function keys(breakpoints3) {
  var value = Object.keys(sortBps(breakpoints3));
  return new Set(value);
}
function subtract(value) {
  var _px;
  if (!value)
    return value;
  value = (_px = px(value)) != null ? _px : value;
  var factor = value.endsWith("px") ? -1 : -0.0635;
  return isNumber(value) ? "" + (value + factor) : value.replace(/([0-9]+\.?[0-9]*)/, function(m) {
    return "" + (parseFloat(m) + factor);
  });
}
function toMediaQueryString(min2, max2) {
  var query = ["@media screen"];
  if (min2)
    query.push("and", "(min-width: " + px(min2) + ")");
  if (max2)
    query.push("and", "(max-width: " + px(max2) + ")");
  return query.join(" ");
}
function analyzeBreakpoints(breakpoints3) {
  var _breakpoints$base;
  if (!breakpoints3)
    return null;
  breakpoints3.base = (_breakpoints$base = breakpoints3.base) != null ? _breakpoints$base : "0px";
  var normalized = normalize(breakpoints3);
  var queries = Object.entries(breakpoints3).sort(sortByBreakpointValue).map(function(_ref, index2, entry) {
    var _entry;
    var breakpoint = _ref[0], minW = _ref[1];
    var _ref2 = (_entry = entry[index2 + 1]) != null ? _entry : [], maxW = _ref2[1];
    maxW = parseFloat(maxW) > 0 ? subtract(maxW) : void 0;
    return {
      _minW: subtract(minW),
      breakpoint,
      minW,
      maxW,
      maxWQuery: toMediaQueryString(null, maxW),
      minWQuery: toMediaQueryString(minW),
      minMaxQuery: toMediaQueryString(minW, maxW)
    };
  });
  var _keys = keys(breakpoints3);
  var _keysArr = Array.from(_keys.values());
  return {
    keys: _keys,
    normalized,
    isResponsive: function isResponsive(test2) {
      var keys2 = Object.keys(test2);
      return keys2.length > 0 && keys2.every(function(key) {
        return _keys.has(key);
      });
    },
    asObject: sortBps(breakpoints3),
    asArray: normalize(breakpoints3),
    details: queries,
    media: [null].concat(normalized.map(function(minW) {
      return toMediaQueryString(minW);
    }).slice(1)),
    toArrayValue: function toArrayValue(test2) {
      if (!isObject(test2)) {
        throw new Error("toArrayValue: value must be an object");
      }
      var result = _keysArr.map(function(bp) {
        var _test$bp;
        return (_test$bp = test2[bp]) != null ? _test$bp : null;
      });
      while (getLastItem(result) === null) {
        result.pop();
      }
      return result;
    },
    toObjectValue: function toObjectValue(test2) {
      if (!Array.isArray(test2)) {
        throw new Error("toObjectValue: value must be an array");
      }
      return test2.reduce(function(acc, value, index2) {
        var key = _keysArr[index2];
        if (key != null && value != null)
          acc[key] = value;
        return acc;
      }, {});
    }
  };
}
function isElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isHTMLElement(el) {
  var _el$ownerDocument$def;
  if (!isElement(el)) {
    return false;
  }
  var win2 = (_el$ownerDocument$def = el.ownerDocument.defaultView) != null ? _el$ownerDocument$def : window;
  return el instanceof win2.HTMLElement;
}
function getOwnerWindow(node) {
  var _getOwnerDocument$def, _getOwnerDocument;
  return isElement(node) ? (_getOwnerDocument$def = (_getOwnerDocument = getOwnerDocument(node)) == null ? void 0 : _getOwnerDocument.defaultView) != null ? _getOwnerDocument$def : window : window;
}
function getOwnerDocument(node) {
  var _node$ownerDocument;
  return isElement(node) ? (_node$ownerDocument = node.ownerDocument) != null ? _node$ownerDocument : document : document;
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser = canUseDOM();
var dataAttr = function dataAttr2(condition) {
  return condition ? "" : void 0;
};
var ariaAttr = function ariaAttr2(condition) {
  return condition ? true : void 0;
};
var cx = function cx2() {
  for (var _len = arguments.length, classNames2 = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames2[_key] = arguments[_key];
  }
  return classNames2.filter(Boolean).join(" ");
};
function getActiveElement(node) {
  var doc2 = getOwnerDocument(node);
  return doc2 == null ? void 0 : doc2.activeElement;
}
function contains(parent, child) {
  if (!parent)
    return false;
  return parent === child || parent.contains(child);
}
function normalizeEventKey(event) {
  var key = event.key, keyCode = event.keyCode;
  var isArrowKey = keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0;
  var eventKey = isArrowKey ? "Arrow" + key : key;
  return eventKey;
}
function isRightClick(event) {
  return event.button !== 0;
}
var hasTabIndex = function hasTabIndex2(element) {
  return element.hasAttribute("tabindex");
};
var hasNegativeTabIndex = function hasNegativeTabIndex2(element) {
  return hasTabIndex(element) && element.tabIndex === -1;
};
function isDisabled(element) {
  return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}
function isInputElement(element) {
  return isHTMLElement(element) && element.localName === "input" && "select" in element;
}
function isActiveElement(element) {
  var doc2 = isHTMLElement(element) ? getOwnerDocument(element) : document;
  return doc2.activeElement === element;
}
function isHidden(element) {
  if (element.parentElement && isHidden(element.parentElement))
    return true;
  return element.hidden;
}
function isContentEditable(element) {
  var value = element.getAttribute("contenteditable");
  return value !== "false" && value != null;
}
function isFocusable(element) {
  if (!isHTMLElement(element) || isHidden(element) || isDisabled(element)) {
    return false;
  }
  var localName = element.localName;
  var focusableTags = ["input", "select", "textarea", "button"];
  if (focusableTags.indexOf(localName) >= 0)
    return true;
  var others2 = {
    a: function a2() {
      return element.hasAttribute("href");
    },
    audio: function audio() {
      return element.hasAttribute("controls");
    },
    video: function video() {
      return element.hasAttribute("controls");
    }
  };
  if (localName in others2) {
    return others2[localName]();
  }
  if (isContentEditable(element))
    return true;
  return hasTabIndex(element);
}
function isTabbable(element) {
  if (!element)
    return false;
  return isHTMLElement(element) && isFocusable(element) && !hasNegativeTabIndex(element);
}
var focusableElList = ["input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "embed", "iframe", "object", "a[href]", "area[href]", "button:not([disabled])", "[tabindex]", "audio[controls]", "video[controls]", "*[tabindex]:not([aria-disabled])", "*[contenteditable]"];
var focusableElSelector = focusableElList.join();
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return {
          done: true
        };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function runIfFn(valueOrFn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return isFunction(valueOrFn) ? valueOrFn.apply(void 0, args) : valueOrFn;
}
function callAllHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function func(event) {
    fns.some(function(fn6) {
      fn6 == null ? void 0 : fn6(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}
function callAll() {
  for (var _len3 = arguments.length, fns = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    fns[_key3] = arguments[_key3];
  }
  return function mergedFn(arg) {
    fns.forEach(function(fn6) {
      fn6 == null ? void 0 : fn6(arg);
    });
  };
}
function once(fn6) {
  var result;
  return function func() {
    if (fn6) {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      result = fn6.apply(this, args);
      fn6 = null;
    }
    return result;
  };
}
var noop = function noop2() {
};
var warn = once(function(options) {
  return function() {
    var condition = options.condition, message = options.message;
    if (condition && __DEV__) {
      console.warn(message);
    }
  };
});
var error = once(function(options) {
  return function() {
    var condition = options.condition, message = options.message;
    if (condition && __DEV__) {
      console.error(message);
    }
  };
});
var pipe = function pipe2() {
  for (var _len6 = arguments.length, fns = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    fns[_key6] = arguments[_key6];
  }
  return function(v) {
    return fns.reduce(function(a2, b2) {
      return b2(a2);
    }, v);
  };
};
function focus(element, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$isActive = _options.isActive, isActive = _options$isActive === void 0 ? isActiveElement : _options$isActive, nextTick = _options.nextTick, _options$preventScrol = _options.preventScroll, preventScroll = _options$preventScrol === void 0 ? true : _options$preventScrol, _options$selectTextIf = _options.selectTextIfInput, selectTextIfInput = _options$selectTextIf === void 0 ? true : _options$selectTextIf;
  if (!element || isActive(element))
    return -1;
  function triggerFocus() {
    if (!element) {
      warn({
        condition: true,
        message: "[chakra-ui]: can't call focus() on `null` or `undefined` element"
      });
      return;
    }
    if (supportsPreventScroll()) {
      element.focus({
        preventScroll
      });
    } else {
      element.focus();
      if (preventScroll) {
        var scrollableElements = getScrollableElements(element);
        restoreScrollPosition(scrollableElements);
      }
    }
    if (selectTextIfInput) {
      if (isInputElement(element)) {
        element.select();
      } else if ("setSelectionRange" in element) {
        var el = element;
        el.setSelectionRange(el.value.length, el.value.length);
      }
    }
  }
  if (nextTick) {
    return requestAnimationFrame(triggerFocus);
  }
  triggerFocus();
  return -1;
}
var supportsPreventScrollCached = null;
function supportsPreventScroll() {
  if (supportsPreventScrollCached == null) {
    supportsPreventScrollCached = false;
    try {
      var div = document.createElement("div");
      div.focus({
        get preventScroll() {
          supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return supportsPreventScrollCached;
}
function getScrollableElements(element) {
  var _doc$defaultView;
  var doc2 = getOwnerDocument(element);
  var win2 = (_doc$defaultView = doc2.defaultView) != null ? _doc$defaultView : window;
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = doc2.scrollingElement || doc2.documentElement;
  while (parent instanceof win2.HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    }
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof win2.HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  }
  return scrollableElements;
}
function restoreScrollPosition(scrollableElements) {
  for (var _iterator = _createForOfIteratorHelperLoose(scrollableElements), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, element = _step$value.element, scrollTop = _step$value.scrollTop, scrollLeft = _step$value.scrollLeft;
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
function flatten(target, maxDepth2) {
  if (maxDepth2 === void 0) {
    maxDepth2 = Infinity;
  }
  if (!isObject(target) && !Array.isArray(target) || !maxDepth2) {
    return target;
  }
  return Object.entries(target).reduce(function(result, _ref) {
    var key = _ref[0], value = _ref[1];
    if (isObject(value) || isArray(value)) {
      Object.entries(flatten(value, maxDepth2 - 1)).forEach(function(_ref2) {
        var childKey = _ref2[0], childValue = _ref2[1];
        result[key + "." + childKey] = childValue;
      });
    } else {
      result[key] = value;
    }
    return result;
  }, {});
}
function determineLazyBehavior(options) {
  var hasBeenSelected = options.hasBeenSelected, isLazy = options.isLazy, isSelected = options.isSelected, _options$lazyBehavior = options.lazyBehavior, lazyBehavior = _options$lazyBehavior === void 0 ? "unmount" : _options$lazyBehavior;
  if (!isLazy)
    return true;
  if (isSelected)
    return true;
  if (lazyBehavior === "keepMounted" && hasBeenSelected)
    return true;
  return false;
}
var minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;
var maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;
var breakpoints = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function mapResponsive(prop2, mapper) {
  if (isArray(prop2)) {
    return prop2.map(function(item) {
      if (item === null) {
        return null;
      }
      return mapper(item);
    });
  }
  if (isObject(prop2)) {
    return objectKeys(prop2).reduce(function(result, key) {
      result[key] = mapper(prop2[key]);
      return result;
    }, {});
  }
  if (prop2 != null) {
    return mapper(prop2);
  }
  return null;
}

// node_modules/@chakra-ui/react-utils/dist/chakra-ui-react-utils.esm.js
init_react();
var React3 = __toESM(require_react());
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction(ref)) {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error2) {
    throw new Error("Cannot assign value '" + value + "' to ref '" + ref + "'");
  }
}
function mergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return function(node) {
    refs.forEach(function(ref) {
      return assignRef(ref, node);
    });
  };
}
function createContext2(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$strict = _options.strict, strict = _options$strict === void 0 ? true : _options$strict, _options$errorMessage = _options.errorMessage, errorMessage = _options$errorMessage === void 0 ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider" : _options$errorMessage, name = _options.name;
  var Context = /* @__PURE__ */ React3.createContext(void 0);
  Context.displayName = name;
  function useContext20() {
    var context = React3.useContext(Context);
    if (!context && strict) {
      var error2 = new Error(errorMessage);
      error2.name = "ContextError";
      Error.captureStackTrace == null ? void 0 : Error.captureStackTrace(error2, useContext20);
      throw error2;
    }
    return context;
  }
  return [Context.Provider, useContext20, Context];
}
function getValidChildren(children) {
  return React3.Children.toArray(children).filter(function(child) {
    return /* @__PURE__ */ React3.isValidElement(child);
  });
}

// node_modules/@chakra-ui/portal/dist/chakra-ui-portal.esm.js
var React6 = __toESM(require_react());

// node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js
init_react();
var React5 = __toESM(require_react());
var import_react3 = __toESM(require_react());

// node_modules/@chakra-ui/hooks/dist/use-animation-state-5054a9f7.esm.js
init_react();
var React4 = __toESM(require_react());
var import_react2 = __toESM(require_react());
var useSafeLayoutEffect = isBrowser ? React4.useLayoutEffect : React4.useEffect;
function useCallbackRef(fn6, deps) {
  if (deps === void 0) {
    deps = [];
  }
  var ref = React4.useRef(fn6);
  useSafeLayoutEffect(function() {
    ref.current = fn6;
  });
  return React4.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current.apply(ref, args);
  }, deps);
}
function useEventListener(event, handler, env2, options) {
  var listener = useCallbackRef(handler);
  React4.useEffect(function() {
    var _runIfFn;
    var node = (_runIfFn = runIfFn(env2)) != null ? _runIfFn : document;
    if (!handler) {
      return;
    }
    node.addEventListener(event, listener, options);
    return function() {
      node.removeEventListener(event, listener, options);
    };
  }, [event, env2, options, listener, handler]);
  return function() {
    var _runIfFn2;
    var node = (_runIfFn2 = runIfFn(env2)) != null ? _runIfFn2 : document;
    node.removeEventListener(event, listener, options);
  };
}
function useAnimationState(props) {
  var isOpen = props.isOpen, ref = props.ref;
  var _useState = (0, import_react2.useState)(isOpen), mounted = _useState[0], setMounted = _useState[1];
  var _useState2 = (0, import_react2.useState)(false), once2 = _useState2[0], setOnce = _useState2[1];
  (0, import_react2.useEffect)(function() {
    if (!once2) {
      setMounted(isOpen);
      setOnce(true);
    }
  }, [isOpen, once2, mounted]);
  useEventListener("animationend", function() {
    setMounted(isOpen);
  }, function() {
    return ref.current;
  });
  var hidden = isOpen ? false : !mounted;
  return {
    present: !hidden,
    onComplete: function onComplete() {
      var _ref$current;
      var win2 = getOwnerWindow(ref.current);
      var evt = new win2.CustomEvent("animationend", {
        bubbles: true
      });
      (_ref$current = ref.current) == null ? void 0 : _ref$current.dispatchEvent(evt);
    }
  };
}

// node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard());
function useBoolean(initialState2) {
  if (initialState2 === void 0) {
    initialState2 = false;
  }
  var _useState = (0, import_react3.useState)(initialState2), value = _useState[0], setValue = _useState[1];
  var callbacks = (0, import_react3.useMemo)(function() {
    return {
      on: function on() {
        return setValue(true);
      },
      off: function off() {
        return setValue(false);
      },
      toggle: function toggle() {
        return setValue(function(prev) {
          return !prev;
        });
      }
    };
  }, []);
  return [value, callbacks];
}
function useControllableProp(prop2, state2) {
  var isControlled = prop2 !== void 0;
  var value = isControlled && typeof prop2 !== "undefined" ? prop2 : state2;
  return [isControlled, value];
}
function useControllableState(props) {
  var valueProp = props.value, defaultValue = props.defaultValue, onChange = props.onChange, _props$shouldUpdate = props.shouldUpdate, shouldUpdate = _props$shouldUpdate === void 0 ? function(prev, next) {
    return prev !== next;
  } : _props$shouldUpdate;
  var onChangeProp = useCallbackRef(onChange);
  var shouldUpdateProp = useCallbackRef(shouldUpdate);
  var _React$useState = React5.useState(defaultValue), valueState = _React$useState[0], setValue = _React$useState[1];
  var isControlled = valueProp !== void 0;
  var value = isControlled ? valueProp : valueState;
  var updateValue = React5.useCallback(function(next) {
    var nextValue = runIfFn(next, value);
    if (!shouldUpdateProp(value, nextValue)) {
      return;
    }
    if (!isControlled) {
      setValue(nextValue);
    }
    onChangeProp(nextValue);
  }, [isControlled, onChangeProp, value, shouldUpdateProp]);
  return [value, updateValue];
}
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function useId2(idProp, prefix) {
  var id2 = React5.useId();
  return React5.useMemo(function() {
    return idProp || [prefix, id2].filter(Boolean).join("-");
  }, [idProp, prefix, id2]);
}
function useIds(idProp) {
  for (var _len = arguments.length, prefixes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    prefixes[_key - 1] = arguments[_key];
  }
  var id2 = useId2(idProp);
  return React5.useMemo(function() {
    return prefixes.map(function(prefix) {
      return prefix + "-" + id2;
    });
  }, [id2, prefixes]);
}
function useDisclosure(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, onCloseProp = _props.onClose, onOpenProp = _props.onOpen, isOpenProp = _props.isOpen, idProp = _props.id;
  var onOpenPropCallbackRef = useCallbackRef(onOpenProp);
  var onClosePropCallbackRef = useCallbackRef(onCloseProp);
  var _React$useState = React5.useState(props.defaultIsOpen || false), isOpenState = _React$useState[0], setIsOpen = _React$useState[1];
  var _useControllableProp = useControllableProp(isOpenProp, isOpenState), isControlled = _useControllableProp[0], isOpen = _useControllableProp[1];
  var id2 = useId2(idProp, "disclosure");
  var onClose = React5.useCallback(function() {
    if (!isControlled) {
      setIsOpen(false);
    }
    onClosePropCallbackRef == null ? void 0 : onClosePropCallbackRef();
  }, [isControlled, onClosePropCallbackRef]);
  var onOpen = React5.useCallback(function() {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpenPropCallbackRef == null ? void 0 : onOpenPropCallbackRef();
  }, [isControlled, onOpenPropCallbackRef]);
  var onToggle = React5.useCallback(function() {
    var action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);
  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getButtonProps: function getButtonProps(props2) {
      if (props2 === void 0) {
        props2 = {};
      }
      return _extends2({}, props2, {
        "aria-expanded": isOpen,
        "aria-controls": id2,
        onClick: callAllHandlers(props2.onClick, onToggle)
      });
    },
    getDisclosureProps: function getDisclosureProps(props2) {
      if (props2 === void 0) {
        props2 = {};
      }
      return _extends2({}, props2, {
        hidden: !isOpen,
        id: id2
      });
    }
  };
}
var useUpdateEffect = function useUpdateEffect2(effect8, deps) {
  var renderCycleRef = React5.useRef(false);
  var effectCycleRef = React5.useRef(false);
  React5.useEffect(function() {
    var isMounted = renderCycleRef.current;
    var shouldRun = isMounted && effectCycleRef.current;
    if (shouldRun) {
      return effect8();
    }
    effectCycleRef.current = true;
  }, deps);
  React5.useEffect(function() {
    renderCycleRef.current = true;
    return function() {
      renderCycleRef.current = false;
    };
  }, []);
};
function preventReturnFocus(containerRef) {
  var el = containerRef.current;
  if (!el)
    return false;
  var activeElement = getActiveElement(el);
  if (!activeElement)
    return false;
  if (contains(el, activeElement))
    return false;
  if (isTabbable(activeElement))
    return true;
  return false;
}
function useFocusOnHide(containerRef, options) {
  var shouldFocusProp = options.shouldFocus, visible = options.visible, focusRef = options.focusRef;
  var shouldFocus = shouldFocusProp && !visible;
  useUpdateEffect(function() {
    if (!shouldFocus)
      return;
    if (preventReturnFocus(containerRef)) {
      return;
    }
    var el = (focusRef == null ? void 0 : focusRef.current) || containerRef.current;
    if (el) {
      focus(el, {
        nextTick: true
      });
    }
  }, [shouldFocus, containerRef, focusRef]);
}
function useUnmountEffect(fn6, deps) {
  if (deps === void 0) {
    deps = [];
  }
  return React5.useEffect(function() {
    return function() {
      return fn6();
    };
  }, deps);
}
function useForceUpdate() {
  var unloadingRef = React5.useRef(false);
  var _React$useState = React5.useState(0), count = _React$useState[0], setCount = _React$useState[1];
  useUnmountEffect(function() {
    unloadingRef.current = true;
  });
  return React5.useCallback(function() {
    if (!unloadingRef.current) {
      setCount(count + 1);
    }
  }, [count]);
}
function assignRef2(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error2) {
    throw new Error("Cannot assign value '" + value + "' to ref '" + ref + "'");
  }
}
function useMergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return React5.useMemo(function() {
    if (refs.every(function(ref) {
      return ref == null;
    })) {
      return null;
    }
    return function(node) {
      refs.forEach(function(ref) {
        if (ref)
          assignRef2(ref, node);
      });
    };
  }, refs);
}
function useOutsideClick(props) {
  var ref = props.ref, handler = props.handler, _props$enabled = props.enabled, enabled = _props$enabled === void 0 ? true : _props$enabled;
  var savedHandler = useCallbackRef(handler);
  var stateRef = (0, import_react3.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  var state2 = stateRef.current;
  (0, import_react3.useEffect)(function() {
    if (!enabled)
      return;
    var onPointerDown = function onPointerDown2(e) {
      if (isValidEvent(e, ref)) {
        state2.isPointerDown = true;
      }
    };
    var onMouseUp = function onMouseUp2(event) {
      if (state2.ignoreEmulatedMouseEvents) {
        state2.ignoreEmulatedMouseEvents = false;
        return;
      }
      if (state2.isPointerDown && handler && isValidEvent(event, ref)) {
        state2.isPointerDown = false;
        savedHandler(event);
      }
    };
    var onTouchEnd = function onTouchEnd2(event) {
      state2.ignoreEmulatedMouseEvents = true;
      if (handler && state2.isPointerDown && isValidEvent(event, ref)) {
        state2.isPointerDown = false;
        savedHandler(event);
      }
    };
    var doc2 = getOwnerDocument(ref.current);
    doc2.addEventListener("mousedown", onPointerDown, true);
    doc2.addEventListener("mouseup", onMouseUp, true);
    doc2.addEventListener("touchstart", onPointerDown, true);
    doc2.addEventListener("touchend", onTouchEnd, true);
    return function() {
      doc2.removeEventListener("mousedown", onPointerDown, true);
      doc2.removeEventListener("mouseup", onMouseUp, true);
      doc2.removeEventListener("touchstart", onPointerDown, true);
      doc2.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state2, enabled]);
}
function isValidEvent(event, ref) {
  var _ref$current;
  var target = event.target;
  if (event.button > 0)
    return false;
  if (target) {
    var doc2 = getOwnerDocument(target);
    if (!doc2.contains(target))
      return false;
  }
  return !((_ref$current = ref.current) != null && _ref$current.contains(target));
}
function isPrintableCharacter(event) {
  var key = event.key;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}
function useShortcut(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, _props$timeout = _props.timeout, timeout = _props$timeout === void 0 ? 300 : _props$timeout, _props$preventDefault = _props.preventDefault, preventDefault = _props$preventDefault === void 0 ? function() {
    return true;
  } : _props$preventDefault;
  var _React$useState = React5.useState([]), keys2 = _React$useState[0], setKeys = _React$useState[1];
  var timeoutRef = React5.useRef();
  var flush = function flush2() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  var clearKeysAfterDelay = function clearKeysAfterDelay2() {
    flush();
    timeoutRef.current = setTimeout(function() {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };
  React5.useEffect(function() {
    return flush;
  }, []);
  function onKeyDown(fn6) {
    return function(event) {
      if (event.key === "Backspace") {
        var keysCopy = [].concat(keys2);
        keysCopy.pop();
        setKeys(keysCopy);
        return;
      }
      if (isPrintableCharacter(event)) {
        var _keysCopy = keys2.concat(event.key);
        if (preventDefault(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
        setKeys(_keysCopy);
        fn6(_keysCopy.join(""));
        clearKeysAfterDelay();
      }
    };
  }
  return onKeyDown;
}
function useTimeout(callback, delay) {
  var fn6 = useCallbackRef(callback);
  React5.useEffect(function() {
    if (delay == null)
      return void 0;
    var timeoutId = null;
    timeoutId = window.setTimeout(function() {
      fn6();
    }, delay);
    return function() {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, fn6]);
}

// node_modules/@chakra-ui/portal/dist/chakra-ui-portal.esm.js
var import_react_dom = __toESM(require_react_dom());
var _createContext$1 = createContext2({
  strict: false,
  name: "PortalManagerContext"
});
var PortalManagerContextProvider = _createContext$1[0];
var usePortalManager = _createContext$1[1];
function PortalManager(props) {
  var children = props.children, zIndex = props.zIndex;
  return /* @__PURE__ */ React6.createElement(PortalManagerContextProvider, {
    value: {
      zIndex
    }
  }, children);
}
if (__DEV__) {
  PortalManager.displayName = "PortalManager";
}
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded = ["containerRef"];
var _createContext = createContext2({
  strict: false,
  name: "PortalContext"
});
var PortalContextProvider = _createContext[0];
var usePortalContext = _createContext[1];
var PORTAL_CLASSNAME = "chakra-portal";
var PORTAL_SELECTOR = ".chakra-portal";
var Container = function Container2(props) {
  return /* @__PURE__ */ React6.createElement("div", {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: props.zIndex,
      top: 0,
      left: 0,
      right: 0
    }
  }, props.children);
};
var DefaultPortal = function DefaultPortal2(props) {
  var appendToParentPortal = props.appendToParentPortal, children = props.children;
  var tempNode = React6.useRef(null);
  var portal = React6.useRef(null);
  var forceUpdate = useForceUpdate();
  var parentPortal = usePortalContext();
  var manager = usePortalManager();
  useSafeLayoutEffect(function() {
    if (!tempNode.current)
      return;
    var doc2 = tempNode.current.ownerDocument;
    var host = appendToParentPortal ? parentPortal != null ? parentPortal : doc2.body : doc2.body;
    if (!host)
      return;
    portal.current = doc2.createElement("div");
    portal.current.className = PORTAL_CLASSNAME;
    host.appendChild(portal.current);
    forceUpdate();
    var portalNode = portal.current;
    return function() {
      if (host.contains(portalNode)) {
        host.removeChild(portalNode);
      }
    };
  }, []);
  var _children = manager != null && manager.zIndex ? /* @__PURE__ */ React6.createElement(Container, {
    zIndex: manager == null ? void 0 : manager.zIndex
  }, children) : children;
  return portal.current ? /* @__PURE__ */ (0, import_react_dom.createPortal)(/* @__PURE__ */ React6.createElement(PortalContextProvider, {
    value: portal.current
  }, _children), portal.current) : /* @__PURE__ */ React6.createElement("span", {
    ref: tempNode
  });
};
var ContainerPortal = function ContainerPortal2(props) {
  var children = props.children, containerRef = props.containerRef, appendToParentPortal = props.appendToParentPortal;
  var containerEl = containerRef.current;
  var host = containerEl != null ? containerEl : isBrowser ? document.body : void 0;
  var portal = React6.useMemo(function() {
    var node = containerEl == null ? void 0 : containerEl.ownerDocument.createElement("div");
    if (node)
      node.className = PORTAL_CLASSNAME;
    return node;
  }, [containerEl]);
  var forceUpdate = useForceUpdate();
  useSafeLayoutEffect(function() {
    forceUpdate();
  }, []);
  useSafeLayoutEffect(function() {
    if (!portal || !host)
      return;
    host.appendChild(portal);
    return function() {
      host.removeChild(portal);
    };
  }, [portal, host]);
  if (host && portal) {
    return /* @__PURE__ */ (0, import_react_dom.createPortal)(/* @__PURE__ */ React6.createElement(PortalContextProvider, {
      value: appendToParentPortal ? portal : null
    }, children), portal);
  }
  return null;
};
function Portal(props) {
  var containerRef = props.containerRef, rest = _objectWithoutPropertiesLoose(props, _excluded);
  return containerRef ? /* @__PURE__ */ React6.createElement(ContainerPortal, _extends3({
    containerRef
  }, rest)) : /* @__PURE__ */ React6.createElement(DefaultPortal, rest);
}
Portal.defaultProps = {
  appendToParentPortal: true
};
Portal.className = PORTAL_CLASSNAME;
Portal.selector = PORTAL_SELECTOR;
if (__DEV__) {
  Portal.displayName = "Portal";
}

// node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js
init_react();

// node_modules/@chakra-ui/color-mode/dist/chakra-ui-color-mode.esm.js
init_react();
var React7 = __toESM(require_react());
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function getColorModeUtils(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$preventTrans = _options.preventTransition, preventTransition = _options$preventTrans === void 0 ? true : _options$preventTrans;
  var utils = {
    setDataset: function setDataset(value) {
      var cleanup = preventTransition ? utils.preventTransition() : void 0;
      document.documentElement.dataset.theme = value;
      document.documentElement.style.colorScheme = value;
      cleanup == null ? void 0 : cleanup();
    },
    setClassName: function setClassName(dark) {
      document.body.classList.add(dark ? classNames.dark : classNames.light);
      document.body.classList.remove(dark ? classNames.light : classNames.dark);
    },
    query: function query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme: function getSystemTheme(fallback) {
      var _utils$query$matches;
      var dark = (_utils$query$matches = utils.query().matches) != null ? _utils$query$matches : fallback === "dark";
      return dark ? "dark" : "light";
    },
    addListener: function addListener(fn6) {
      var mql = utils.query();
      var listener = function listener2(e) {
        fn6(e.matches ? "dark" : "light");
      };
      mql.addEventListener("change", listener);
      return function() {
        return mql.removeEventListener("change", listener);
      };
    },
    preventTransition: function preventTransition2() {
      var css3 = document.createElement("style");
      css3.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"));
      document.head.appendChild(css3);
      return function() {
        (function() {
          return window.getComputedStyle(document.body);
        })();
        requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            document.head.removeChild(css3);
          });
        });
      };
    }
  };
  return utils;
}
var STORAGE_KEY = "chakra-ui-color-mode";
function createLocalStorageManager(key) {
  return {
    ssr: false,
    type: "localStorage",
    get: function get2(init) {
      if (!isBrowser)
        return init;
      var value;
      try {
        value = localStorage.getItem(key) || init;
      } catch (e) {
      }
      return value || init;
    },
    set: function set(value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
      }
    }
  };
}
var localStorageManager = createLocalStorageManager(STORAGE_KEY);
function parseCookie(cookie, key) {
  var match = cookie.match(new RegExp("(^| )" + key + "=([^;]+)"));
  return match == null ? void 0 : match[2];
}
function createCookieStorageManager(key, cookie) {
  return {
    ssr: !!cookie,
    type: "cookie",
    get: function get2(init) {
      if (cookie)
        return parseCookie(cookie, key);
      if (!isBrowser)
        return init;
      return parseCookie(document.cookie, key) || init;
    },
    set: function set(value) {
      document.cookie = key + "=" + value + "; max-age=31536000; path=/";
    }
  };
}
var cookieStorageManager = createCookieStorageManager(STORAGE_KEY);
var ColorModeContext = /* @__PURE__ */ React7.createContext({});
if (__DEV__) {
  ColorModeContext.displayName = "ColorModeContext";
}
function useColorMode() {
  var context = React7.useContext(ColorModeContext);
  if (context === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}
function getTheme(manager, fallback) {
  return manager.type === "cookie" && manager.ssr ? manager.get(fallback) : fallback;
}
function ColorModeProvider(props) {
  var value = props.value, children = props.children, _props$options = props.options;
  _props$options = _props$options === void 0 ? {} : _props$options;
  var useSystemColorMode = _props$options.useSystemColorMode, initialColorMode = _props$options.initialColorMode, disableTransitionOnChange = _props$options.disableTransitionOnChange, _props$colorModeManag = props.colorModeManager, colorModeManager = _props$colorModeManag === void 0 ? localStorageManager : _props$colorModeManag;
  var defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
  var _React$useState = React7.useState(function() {
    return getTheme(colorModeManager, defaultColorMode);
  }), colorMode = _React$useState[0], rawSetColorMode = _React$useState[1];
  var _React$useState2 = React7.useState(function() {
    return getTheme(colorModeManager);
  }), resolvedColorMode = _React$useState2[0], setResolvedColorMode = _React$useState2[1];
  var _React$useMemo = React7.useMemo(function() {
    return getColorModeUtils({
      preventTransition: disableTransitionOnChange
    });
  }, [disableTransitionOnChange]), getSystemTheme = _React$useMemo.getSystemTheme, setClassName = _React$useMemo.setClassName, setDataset = _React$useMemo.setDataset, addListener = _React$useMemo.addListener;
  var resolvedValue = initialColorMode === "system" && !colorMode ? resolvedColorMode : colorMode;
  var setColorMode = React7.useCallback(function(value2) {
    var resolved = value2 === "system" ? getSystemTheme() : value2;
    rawSetColorMode(resolved);
    setClassName(resolved === "dark");
    setDataset(resolved);
    colorModeManager.set(resolved);
  }, [colorModeManager, getSystemTheme, setClassName, setDataset]);
  useSafeLayoutEffect(function() {
    if (initialColorMode === "system") {
      setResolvedColorMode(getSystemTheme());
    }
  }, []);
  useSafeLayoutEffect(function() {
    var managerValue = colorModeManager.get();
    if (managerValue) {
      setColorMode(managerValue);
      return;
    }
    if (initialColorMode === "system") {
      setColorMode("system");
      return;
    }
    setColorMode(defaultColorMode);
  }, [colorModeManager, defaultColorMode, initialColorMode, getSystemTheme]);
  var toggleColorMode = React7.useCallback(function() {
    setColorMode(resolvedValue === "dark" ? "light" : "dark");
  }, [resolvedValue, setColorMode]);
  React7.useEffect(function() {
    if (!useSystemColorMode)
      return;
    return addListener(setColorMode);
  }, [useSystemColorMode, addListener, setColorMode]);
  var context = React7.useMemo(function() {
    return {
      colorMode: value != null ? value : resolvedValue,
      toggleColorMode: value ? noop : toggleColorMode,
      setColorMode: value ? noop : setColorMode
    };
  }, [resolvedValue, toggleColorMode, setColorMode, value]);
  return /* @__PURE__ */ React7.createElement(ColorModeContext.Provider, {
    value: context
  }, children);
}
if (__DEV__) {
  ColorModeProvider.displayName = "ColorModeProvider";
}
var DarkMode = function DarkMode2(props) {
  var context = React7.useMemo(function() {
    return {
      colorMode: "dark",
      toggleColorMode: noop,
      setColorMode: noop
    };
  }, []);
  return /* @__PURE__ */ React7.createElement(ColorModeContext.Provider, _extends4({
    value: context
  }, props));
};
if (__DEV__) {
  DarkMode.displayName = "DarkMode";
}
var LightMode = function LightMode2(props) {
  var context = React7.useMemo(function() {
    return {
      colorMode: "light",
      toggleColorMode: noop,
      setColorMode: noop
    };
  }, []);
  return /* @__PURE__ */ React7.createElement(ColorModeContext.Provider, _extends4({
    value: context
  }, props));
};
if (__DEV__) {
  LightMode.displayName = "LightMode";
}
function useColorModeValue(light, dark) {
  var _useColorMode = useColorMode(), colorMode = _useColorMode.colorMode;
  return colorMode === "dark" ? dark : light;
}
var VALID_VALUES = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function normalize2(initialColorMode) {
  var value = initialColorMode;
  if (!VALID_VALUES.has(value))
    value = "light";
  return value;
}
function getScriptSrc(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, _props$initialColorMo = _props.initialColorMode, initialColorMode = _props$initialColorMo === void 0 ? "light" : _props$initialColorMo, _props$type = _props.type, type = _props$type === void 0 ? "localStorage" : _props$type, _props$storageKey = _props.storageKey, key = _props$storageKey === void 0 ? "chakra-ui-color-mode" : _props$storageKey;
  var init = normalize2(initialColorMode);
  var isCookie = type === "cookie";
  var cookieScript = '(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="' + init + '",r="' + key + '",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();\n  ';
  var localStorageScript = '(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="' + init + '",e="' + key + '",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();\n  ';
  var fn6 = isCookie ? cookieScript : localStorageScript;
  return ("!" + fn6).trim();
}
function ColorModeScript(props) {
  if (props === void 0) {
    props = {};
  }
  return /* @__PURE__ */ React7.createElement("script", {
    id: "chakra-script",
    dangerouslySetInnerHTML: {
      __html: getScriptSrc(props)
    }
  });
}

// node_modules/@chakra-ui/styled-system/dist/chakra-ui-styled-system.esm.js
init_react();
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
var isImportant = function isImportant2(value) {
  return /!(important)?$/.test(value);
};
var withoutImportant = function withoutImportant2(value) {
  return isString(value) ? value.replace(/!(important)?$/, "").trim() : value;
};
var tokenToCSSVar = function tokenToCSSVar2(scale2, value) {
  return function(theme3) {
    var valueStr = String(value);
    var important = isImportant(valueStr);
    var valueWithoutImportant = withoutImportant(valueStr);
    var key = scale2 ? scale2 + "." + valueWithoutImportant : valueWithoutImportant;
    var transformed = isObject(theme3.__cssMap) && key in theme3.__cssMap ? theme3.__cssMap[key].varRef : value;
    transformed = withoutImportant(transformed);
    return important ? transformed + " !important" : transformed;
  };
};
function createTransform(options) {
  var scale2 = options.scale, transform9 = options.transform, compose = options.compose;
  var fn6 = function fn7(value, theme3) {
    var _transform;
    var _value = tokenToCSSVar(scale2, value)(theme3);
    var result = (_transform = transform9 == null ? void 0 : transform9(_value, theme3)) != null ? _transform : _value;
    if (compose) {
      result = compose(result, theme3);
    }
    return result;
  };
  return fn6;
}
function toConfig(scale2, transform9) {
  return function(property) {
    var result = {
      property,
      scale: scale2
    };
    result.transform = createTransform({
      scale: scale2,
      transform: transform9
    });
    return result;
  };
}
var getRtl = function getRtl2(_ref) {
  var rtl = _ref.rtl, ltr = _ref.ltr;
  return function(theme3) {
    return theme3.direction === "rtl" ? rtl : ltr;
  };
};
function logical(options) {
  var property = options.property, scale2 = options.scale, transform9 = options.transform;
  return {
    scale: scale2,
    property: getRtl(property),
    transform: scale2 ? createTransform({
      scale: scale2,
      compose: transform9
    }) : transform9
  };
}
var _spaceXTemplate;
var _spaceYTemplate;
var transformTemplate = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
function getTransformTemplate() {
  return ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))"].concat(transformTemplate).join(" ");
}
function getTransformGpuTemplate() {
  return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)"].concat(transformTemplate).join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ")
};
var backdropFilterTemplate = {
  backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": value,
    boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ")
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var owlSelector = "& > :not(style) ~ :not(style)";
var spaceXTemplate = (_spaceXTemplate = {}, _spaceXTemplate[owlSelector] = {
  marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
  marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
}, _spaceXTemplate);
var spaceYTemplate = (_spaceYTemplate = {}, _spaceYTemplate[owlSelector] = {
  marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
  marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
}, _spaceYTemplate);
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _wrapRegExp() {
  _wrapRegExp = function(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };
  var _super = RegExp.prototype, _groups = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);
    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function(groups, name) {
      return groups[name] = result[g[name]], groups;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution == "string") {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
        return "$" + groups[name];
      }));
    }
    if (typeof substitution == "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = arguments;
        return typeof args[args.length - 1] != "object" && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }
    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = /* @__PURE__ */ new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]);
var trimSpace = function trimSpace2(str) {
  return str.trim();
};
function parseGradient(value, theme3) {
  var _regex$exec$groups, _regex$exec;
  if (value == null || globalSet.has(value))
    return value;
  var regex = /* @__PURE__ */ _wrapRegExp(/(^[a-z-A-Z]+)\(((.*))\)/g, {
    type: 1,
    values: 2
  });
  var _ref = (_regex$exec$groups = (_regex$exec = regex.exec(value)) == null ? void 0 : _regex$exec.groups) != null ? _regex$exec$groups : {}, type = _ref.type, values = _ref.values;
  if (!type || !values)
    return value;
  var _type = type.includes("-gradient") ? type : type + "-gradient";
  var _values$split$map$fil = values.split(",").map(trimSpace).filter(Boolean), maybeDirection = _values$split$map$fil[0], stops = _values$split$map$fil.slice(1);
  if ((stops == null ? void 0 : stops.length) === 0)
    return value;
  var direction2 = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction2);
  var _values = stops.map(function(stop) {
    if (valueSet.has(stop))
      return stop;
    var firstStop = stop.indexOf(" ");
    var _ref2 = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop], _color = _ref2[0], _stop = _ref2[1];
    var _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
    var key = "colors." + _color;
    var color3 = key in theme3.__cssMap ? theme3.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [color3].concat(Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]).join(" ") : color3;
  });
  return _type + "(" + _values.join(", ") + ")";
}
var isCSSFunction = function isCSSFunction2(value) {
  return isString(value) && value.includes("(") && value.includes(")");
};
var gradientTransform = function gradientTransform2(value, theme3) {
  return parseGradient(value, theme3 != null ? theme3 : {});
};
var analyzeCSSValue2 = function analyzeCSSValue3(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
};
var wrap = function wrap2(str) {
  return function(value) {
    return str + "(" + value + ")";
  };
};
var transformFunctions = {
  filter: function filter(value) {
    return value !== "auto" ? value : filterTemplate;
  },
  backdropFilter: function backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },
  ring: function ring(value) {
    return getRingTemplate(transformFunctions.px(value));
  },
  bgClip: function bgClip(value) {
    return value === "text" ? {
      color: "transparent",
      backgroundClip: "text"
    } : {
      backgroundClip: value
    };
  },
  transform: function transform(value) {
    if (value === "auto")
      return getTransformTemplate();
    if (value === "auto-gpu")
      return getTransformGpuTemplate();
    return value;
  },
  px: function px2(value) {
    if (value == null)
      return value;
    var _analyzeCSSValue = analyzeCSSValue2(value), unitless = _analyzeCSSValue.unitless;
    return unitless || isNumber(value) ? value + "px" : value;
  },
  fraction: function fraction(value) {
    return !isNumber(value) || value > 1 ? value : value * 100 + "%";
  },
  "float": function float(value, theme3) {
    var map = {
      left: "right",
      right: "left"
    };
    return theme3.direction === "rtl" ? map[value] : value;
  },
  degree: function degree(value) {
    if (isCssVar(value) || value == null)
      return value;
    var unitless = isString(value) && !value.endsWith("deg");
    return isNumber(value) || unitless ? value + "deg" : value;
  },
  gradient: gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: wrap("hue-rotate"),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage: function bgImage(value) {
    if (value == null)
      return value;
    var prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? "url(" + value + ")" : value;
  },
  outline: function outline(value) {
    var isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    } : {
      outline: value
    };
  },
  flexDirection: function flexDirection(value) {
    var _value;
    var _ref = (_value = flexDirectionTemplate[value]) != null ? _value : {}, space2 = _ref.space, divide3 = _ref.divide;
    var result = {
      flexDirection: value
    };
    if (space2)
      result[space2] = 1;
    if (divide3)
      result[divide3] = 1;
    return result;
  }
};
var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", transformFunctions.px),
  spaceT: toConfig("space", transformFunctions.px),
  degreeT: function degreeT(property) {
    return {
      property,
      transform: transformFunctions.degree
    };
  },
  prop: function prop(property, scale2, transform9) {
    return _extends5({
      property,
      scale: scale2
    }, scale2 && {
      transform: createTransform({
        scale: scale2,
        transform: transform9
      })
    });
  },
  propT: function propT(property, transform9) {
    return {
      property,
      transform: transform9
    };
  },
  sizes: toConfig("sizes", transformFunctions.px),
  sizesT: toConfig("sizes", transformFunctions.fraction),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur)
};
var background = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.propT("backgroundImage", transformFunctions.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: {
    transform: transformFunctions.bgClip
  },
  bgSize: t.prop("backgroundSize"),
  bgPosition: t.prop("backgroundPosition"),
  bg: t.colors("background"),
  bgColor: t.colors("backgroundColor"),
  bgPos: t.prop("backgroundPosition"),
  bgRepeat: t.prop("backgroundRepeat"),
  bgAttachment: t.prop("backgroundAttachment"),
  bgGradient: t.propT("backgroundImage", transformFunctions.gradient),
  bgClip: {
    transform: transformFunctions.bgClip
  }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});
var border = {
  border: t.borders("border"),
  borderWidth: t.borderWidths("borderWidth"),
  borderStyle: t.borderStyles("borderStyle"),
  borderColor: t.colors("borderColor"),
  borderRadius: t.radii("borderRadius"),
  borderTop: t.borders("borderTop"),
  borderBlockStart: t.borders("borderBlockStart"),
  borderTopLeftRadius: t.radii("borderTopLeftRadius"),
  borderStartStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t.radii("borderTopRightRadius"),
  borderStartEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t.borders("borderRight"),
  borderInlineEnd: t.borders("borderInlineEnd"),
  borderBottom: t.borders("borderBottom"),
  borderBlockEnd: t.borders("borderBlockEnd"),
  borderBottomLeftRadius: t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t.radii("borderBottomRightRadius"),
  borderLeft: t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t.borders(["borderLeft", "borderRight"]),
  borderInline: t.borders("borderInline"),
  borderY: t.borders(["borderTop", "borderBottom"]),
  borderBlock: t.borders("borderBlock"),
  borderTopWidth: t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t.borderWidths("borderBlockStartWidth"),
  borderTopColor: t.colors("borderTopColor"),
  borderBlockStartColor: t.colors("borderBlockStartColor"),
  borderTopStyle: t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t.colors("borderBottomColor"),
  borderBlockEndColor: t.colors("borderBlockEndColor"),
  borderBottomStyle: t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t.colors("borderLeftColor"),
  borderInlineStartColor: t.colors("borderInlineStartColor"),
  borderLeftStyle: t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t.borderWidths("borderInlineEndWidth"),
  borderRightColor: t.colors("borderRightColor"),
  borderInlineEndColor: t.colors("borderInlineEndColor"),
  borderRightStyle: t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
  borderLeftRadius: t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
var color = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke")
};
var effect = {
  boxShadow: t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});
var filter2 = {
  filter: {
    transform: transformFunctions.filter
  },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t.degreeT("--chakra-hue-rotate"),
  invert: t.propT("--chakra-invert", transformFunctions.invert),
  saturate: t.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: {
    transform: transformFunctions.backdropFilter
  },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT("--chakra-backdrop-brightness", transformFunctions.brightness),
  backdropContrast: t.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
  backdropHueRotate: t.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: t.propT("--chakra-backdrop-invert", transformFunctions.invert),
  backdropSaturate: t.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: {
    transform: transformFunctions.flexDirection
  },
  experimental_spaceX: {
    "static": spaceXTemplate,
    transform: createTransform({
      scale: "space",
      transform: function transform2(value) {
        return value !== null ? {
          "--chakra-space-x": value
        } : null;
      }
    })
  },
  experimental_spaceY: {
    "static": spaceYTemplate,
    transform: createTransform({
      scale: "space",
      transform: function transform3(value) {
        return value != null ? {
          "--chakra-space-y": value
        } : null;
      }
    })
  },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: t.space("gap"),
  rowGap: t.space("rowGap"),
  columnGap: t.space("columnGap")
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});
var grid = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: {
    transform: transformFunctions.outline
  },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor")
};
var layout = {
  width: t.sizesT("width"),
  inlineSize: t.sizesT("inlineSize"),
  height: t.sizes("height"),
  blockSize: t.sizes("blockSize"),
  boxSize: t.sizes(["width", "height"]),
  minWidth: t.sizes("minWidth"),
  minInlineSize: t.sizes("minInlineSize"),
  minHeight: t.sizes("minHeight"),
  minBlockSize: t.sizes("minBlockSize"),
  maxWidth: t.sizes("maxWidth"),
  maxInlineSize: t.sizes("maxInlineSize"),
  maxHeight: t.sizes("maxHeight"),
  maxBlockSize: t.sizes("maxBlockSize"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  "float": t.propT("float", transformFunctions["float"]),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t.prop("listStyleImage")
};
var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var getWithPriority = function getWithPriority2(theme3, key, styles2) {
  var result = {};
  var obj = memoizedGet(theme3, key, {});
  for (var prop2 in obj) {
    var isInStyles = prop2 in styles2 && styles2[prop2] != null;
    if (!isInStyles)
      result[prop2] = obj[prop2];
  }
  return result;
};
var others = {
  srOnly: {
    transform: function transform4(value) {
      if (value === true)
        return srOnly;
      if (value === "focusable")
        return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: function transform5(value, theme3, styles2) {
      return getWithPriority(theme3, "layerStyles." + value, styles2);
    }
  },
  textStyle: {
    processResult: true,
    transform: function transform6(value, theme3, styles2) {
      return getWithPriority(theme3, "textStyles." + value, styles2);
    }
  },
  apply: {
    processResult: true,
    transform: function transform7(value, theme3, styles2) {
      return getWithPriority(theme3, value, styles2);
    }
  }
};
var position = {
  position: true,
  pos: t.prop("position"),
  zIndex: t.prop("zIndex", "zIndices"),
  inset: t.spaceT("inset"),
  insetX: t.spaceT(["left", "right"]),
  insetInline: t.spaceT("insetInline"),
  insetY: t.spaceT(["top", "bottom"]),
  insetBlock: t.spaceT("insetBlock"),
  top: t.spaceT("top"),
  insetBlockStart: t.spaceT("insetBlockStart"),
  bottom: t.spaceT("bottom"),
  insetBlockEnd: t.spaceT("insetBlockEnd"),
  left: t.spaceT("left"),
  insetInlineStart: t.logical({
    scale: "space",
    property: {
      ltr: "left",
      rtl: "right"
    }
  }),
  right: t.spaceT("right"),
  insetInlineEnd: t.logical({
    scale: "space",
    property: {
      ltr: "right",
      rtl: "left"
    }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
var ring2 = {
  ring: {
    transform: transformFunctions.ring
  },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset")
};
var space = {
  margin: t.spaceT("margin"),
  marginTop: t.spaceT("marginTop"),
  marginBlockStart: t.spaceT("marginBlockStart"),
  marginRight: t.spaceT("marginRight"),
  marginInlineEnd: t.spaceT("marginInlineEnd"),
  marginBottom: t.spaceT("marginBottom"),
  marginBlockEnd: t.spaceT("marginBlockEnd"),
  marginLeft: t.spaceT("marginLeft"),
  marginInlineStart: t.spaceT("marginInlineStart"),
  marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t.spaceT("marginInline"),
  marginY: t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t.spaceT("marginBlock"),
  padding: t.space("padding"),
  paddingTop: t.space("paddingTop"),
  paddingBlockStart: t.space("paddingBlockStart"),
  paddingRight: t.space("paddingRight"),
  paddingBottom: t.space("paddingBottom"),
  paddingBlockEnd: t.space("paddingBlockEnd"),
  paddingLeft: t.space("paddingLeft"),
  paddingInlineStart: t.space("paddingInlineStart"),
  paddingInlineEnd: t.space("paddingInlineEnd"),
  paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t.space("paddingInline"),
  paddingY: t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
var textDecoration = {
  textDecorationColor: t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: {
    property: "textDecoration"
  },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows("textShadow")
};
var transform8 = {
  clipPath: true,
  transform: t.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t.spaceT("--chakra-translate-x"),
  translateY: t.spaceT("--chakra-translate-y"),
  skewX: t.degreeT("--chakra-skew-x"),
  skewY: t.degreeT("--chakra-skew-y"),
  scaleX: t.prop("--chakra-scale-x"),
  scaleY: t.prop("--chakra-scale-y"),
  scale: t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t.degreeT("--chakra-rotate")
};
var transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop("transitionDuration", "transition.duration"),
  transitionProperty: t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t.prop("transitionTimingFunction", "transition.easing")
};
var typography = {
  fontFamily: t.prop("fontFamily", "fonts"),
  fontSize: t.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t.prop("fontWeight", "fontWeights"),
  lineHeight: t.prop("lineHeight", "lineHeights"),
  letterSpacing: t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  noOfLines: {
    "static": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
};
var scroll = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  scrollMargin: t.spaceT("scrollMargin"),
  scrollMarginTop: t.spaceT("scrollMarginTop"),
  scrollMarginBottom: t.spaceT("scrollMarginBottom"),
  scrollMarginLeft: t.spaceT("scrollMarginLeft"),
  scrollMarginRight: t.spaceT("scrollMarginRight"),
  scrollMarginX: t.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: t.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: t.spaceT("scrollPadding"),
  scrollPaddingTop: t.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: t.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: t.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: t.spaceT("scrollPaddingRight"),
  scrollPaddingX: t.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: t.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpression = function toExpression2(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }
  return operands.map(resolveReference).join(" " + operator + " ").replace(/calc/g, "");
};
var _add = function add() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }
  return "calc(" + toExpression.apply(void 0, ["+"].concat(operands)) + ")";
};
var _subtract = function subtract2() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }
  return "calc(" + toExpression.apply(void 0, ["-"].concat(operands)) + ")";
};
var _multiply = function multiply() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }
  return "calc(" + toExpression.apply(void 0, ["*"].concat(operands)) + ")";
};
var _divide = function divide() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }
  return "calc(" + toExpression.apply(void 0, ["/"].concat(operands)) + ")";
};
var _negate = function negate(x) {
  var value = resolveReference(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : "-" + value;
  }
  return _multiply(value, -1);
};
var calc = Object.assign(function(x) {
  return {
    add: function add4() {
      for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        operands[_key6] = arguments[_key6];
      }
      return calc(_add.apply(void 0, [x].concat(operands)));
    },
    subtract: function subtract4() {
      for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        operands[_key7] = arguments[_key7];
      }
      return calc(_subtract.apply(void 0, [x].concat(operands)));
    },
    multiply: function multiply3() {
      for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        operands[_key8] = arguments[_key8];
      }
      return calc(_multiply.apply(void 0, [x].concat(operands)));
    },
    divide: function divide3() {
      for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        operands[_key9] = arguments[_key9];
      }
      return calc(_divide.apply(void 0, [x].concat(operands)));
    },
    negate: function negate3() {
      return calc(_negate(x));
    },
    toString: function toString() {
      return x.toString();
    }
  };
}, {
  add: _add,
  subtract: _subtract,
  multiply: _multiply,
  divide: _divide,
  negate: _negate
});
function replaceWhiteSpace(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  var valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\."))
    return value;
  var isDecimal2 = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal2 ? valueStr.replace(".", "\\.") : value;
}
function addPrefix(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return [prefix, escape(value)].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return "var(" + escape(name) + (fallback ? ", " + fallback : "") + ")";
}
function toVarDefinition(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return "--" + addPrefix(value, prefix);
}
function cssVar(name, fallback, cssVarPrefix) {
  var cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}
var state = {
  hover: function hover(str, post) {
    return str + ":hover " + post + ", " + str + "[data-hover] " + post;
  },
  focus: function focus2(str, post) {
    return str + ":focus " + post + ", " + str + "[data-focus] " + post;
  },
  focusVisible: function focusVisible(str, post) {
    return str + ":focus-visible " + post;
  },
  focusWithin: function focusWithin(str, post) {
    return str + ":focus-within " + post;
  },
  active: function active(str, post) {
    return str + ":active " + post + ", " + str + "[data-active] " + post;
  },
  disabled: function disabled(str, post) {
    return str + ":disabled " + post + ", " + str + "[data-disabled] " + post;
  },
  invalid: function invalid(str, post) {
    return str + ":invalid " + post + ", " + str + "[data-invalid] " + post;
  },
  checked: function checked(str, post) {
    return str + ":checked " + post + ", " + str + "[data-checked] " + post;
  },
  indeterminate: function indeterminate(str, post) {
    return str + ":indeterminate " + post + ", " + str + "[aria-checked=mixed] " + post + ", " + str + "[data-indeterminate] " + post;
  },
  readOnly: function readOnly(str, post) {
    return str + ":read-only " + post + ", " + str + "[readonly] " + post + ", " + str + "[data-read-only] " + post;
  },
  expanded: function expanded(str, post) {
    return str + ":read-only " + post + ", " + str + "[aria-expanded=true] " + post + ", " + str + "[data-expanded] " + post;
  },
  placeholderShown: function placeholderShown(str, post) {
    return str + ":placeholder-shown " + post;
  }
};
var toGroup = function toGroup2(fn6) {
  return merge(function(v) {
    return fn6(v, "&");
  }, "[role=group]", "[data-group]", ".group");
};
var toPeer = function toPeer2(fn6) {
  return merge(function(v) {
    return fn6(v, "~ &");
  }, "[data-peer]", ".peer");
};
var merge = function merge2(fn6) {
  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }
  return selectors.map(fn6).join(", ");
};
var pseudoSelectors = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: toGroup(state.hover),
  _peerHover: toPeer(state.hover),
  _groupFocus: toGroup(state.focus),
  _peerFocus: toPeer(state.focus),
  _groupFocusVisible: toGroup(state.focusVisible),
  _peerFocusVisible: toPeer(state.focusVisible),
  _groupActive: toGroup(state.active),
  _peerActive: toPeer(state.active),
  _groupDisabled: toGroup(state.disabled),
  _peerDisabled: toPeer(state.disabled),
  _groupInvalid: toGroup(state.invalid),
  _peerInvalid: toPeer(state.invalid),
  _groupChecked: toGroup(state.checked),
  _peerChecked: toPeer(state.checked),
  _groupFocusWithin: toGroup(state.focusWithin),
  _peerFocusWithin: toPeer(state.focusWithin),
  _peerPlaceholderShown: toPeer(state.placeholderShown),
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"
};
var pseudoPropNames = objectKeys(pseudoSelectors);
function tokenToCssVar(token, prefix) {
  return cssVar(String(token).replace(/\./g, "-"), void 0, prefix);
}
function createThemeVars(flatTokens, options) {
  var cssVars2 = {};
  var cssMap = {};
  var _loop = function _loop2() {
    var _Object$entries$_i = _Object$entries[_i], token = _Object$entries$_i[0], tokenValue = _Object$entries$_i[1];
    var isSemantic = tokenValue.isSemantic, value = tokenValue.value;
    var _tokenToCssVar = tokenToCssVar(token, options == null ? void 0 : options.cssVarPrefix), variable = _tokenToCssVar.variable, reference2 = _tokenToCssVar.reference;
    if (!isSemantic) {
      if (token.startsWith("space")) {
        var keys2 = token.split(".");
        var firstKey = keys2[0], referenceKeys = keys2.slice(1);
        var negativeLookupKey = firstKey + ".-" + referenceKeys.join(".");
        var negativeValue = calc.negate(value);
        var negatedReference = calc.negate(reference2);
        cssMap[negativeLookupKey] = {
          value: negativeValue,
          "var": variable,
          varRef: negatedReference
        };
      }
      cssVars2[variable] = value;
      cssMap[token] = {
        value,
        "var": variable,
        varRef: reference2
      };
      return "continue";
    }
    var lookupToken = function lookupToken2(maybeToken) {
      var scale2 = String(token).split(".")[0];
      var withScale = [scale2, maybeToken].join(".");
      var resolvedTokenValue = flatTokens[withScale];
      if (!resolvedTokenValue)
        return maybeToken;
      var _tokenToCssVar2 = tokenToCssVar(withScale, options == null ? void 0 : options.cssVarPrefix), reference3 = _tokenToCssVar2.reference;
      return reference3;
    };
    var normalizedValue = isObject(value) ? value : {
      "default": value
    };
    cssVars2 = (0, import_lodash.default)(cssVars2, Object.entries(normalizedValue).reduce(function(acc, _ref) {
      var _conditionAlias, _acc$conditionSelecto;
      var conditionAlias = _ref[0], conditionValue = _ref[1];
      var maybeReference = lookupToken(conditionValue);
      if (conditionAlias === "default") {
        acc[variable] = maybeReference;
        return acc;
      }
      var conditionSelector = (_conditionAlias = pseudoSelectors == null ? void 0 : pseudoSelectors[conditionAlias]) != null ? _conditionAlias : conditionAlias;
      acc[conditionSelector] = (_acc$conditionSelecto = {}, _acc$conditionSelecto[variable] = maybeReference, _acc$conditionSelecto);
      return acc;
    }, {}));
    cssMap[token] = {
      value: reference2,
      "var": variable,
      varRef: reference2
    };
  };
  for (var _i = 0, _Object$entries = Object.entries(flatTokens); _i < _Object$entries.length; _i++) {
    var _ret = _loop();
    if (_ret === "continue")
      continue;
  }
  return {
    cssVars: cssVars2,
    cssMap
  };
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded2 = ["__cssMap", "__cssVars", "__breakpoints"];
var tokens = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur"];
function extractTokens(theme3) {
  var _tokens = tokens;
  return pick(theme3, _tokens);
}
function extractSemanticTokens(theme3) {
  return theme3.semanticTokens;
}
function omitVars(rawTheme) {
  rawTheme.__cssMap;
  rawTheme.__cssVars;
  rawTheme.__breakpoints;
  var cleanTheme = _objectWithoutPropertiesLoose2(rawTheme, _excluded2);
  return cleanTheme;
}
function flattenTokens(_ref) {
  var _flatten, _flatten2;
  var tokens2 = _ref.tokens, semanticTokens2 = _ref.semanticTokens;
  var tokenEntries = Object.entries((_flatten = flatten(tokens2)) != null ? _flatten : {}).map(function(_ref2) {
    var token = _ref2[0], value = _ref2[1];
    var enhancedToken = {
      isSemantic: false,
      value
    };
    return [token, enhancedToken];
  });
  var semanticTokenEntries = Object.entries((_flatten2 = flatten(semanticTokens2, 1)) != null ? _flatten2 : {}).map(function(_ref3) {
    var token = _ref3[0], value = _ref3[1];
    var enhancedToken = {
      isSemantic: true,
      value
    };
    return [token, enhancedToken];
  });
  return fromEntries([].concat(tokenEntries, semanticTokenEntries));
}
function toCSSVar(rawTheme) {
  var _theme$config;
  var theme3 = omitVars(rawTheme);
  var tokens2 = extractTokens(theme3);
  var semanticTokens2 = extractSemanticTokens(theme3);
  var flatTokens = flattenTokens({
    tokens: tokens2,
    semanticTokens: semanticTokens2
  });
  var cssVarPrefix = (_theme$config = theme3.config) == null ? void 0 : _theme$config.cssVarPrefix;
  var _createThemeVars = createThemeVars(flatTokens, {
    cssVarPrefix
  }), cssMap = _createThemeVars.cssMap, cssVars2 = _createThemeVars.cssVars;
  var defaultCssVars = {
    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-ring-offset-width": "0px",
    "--chakra-ring-offset-color": "#fff",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-offset-shadow": "0 0 #0000",
    "--chakra-ring-shadow": "0 0 #0000",
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0"
  };
  Object.assign(theme3, {
    __cssVars: _extends5({}, defaultCssVars, cssVars2),
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme3.breakpoints)
  });
  return theme3;
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return {
          done: true
        };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var systemProps = (0, import_lodash.default)({}, background, border, color, flexbox, layout, filter2, ring2, interactivity, grid, others, position, effect, space, scroll, typography, textDecoration, transform8, list, transition);
var layoutSystem = Object.assign({}, space, layout, flexbox, grid, position);
var layoutPropNames = objectKeys(layoutSystem);
var propNames = [].concat(objectKeys(systemProps), pseudoPropNames);
var styleProps = _extends5({}, systemProps, pseudoSelectors);
var isStyleProp = function isStyleProp2(prop2) {
  return prop2 in styleProps;
};
var expandResponsive = function expandResponsive2(styles2) {
  return function(theme3) {
    if (!theme3.__breakpoints)
      return styles2;
    var _theme$__breakpoints = theme3.__breakpoints, isResponsive = _theme$__breakpoints.isResponsive, toArrayValue = _theme$__breakpoints.toArrayValue, medias = _theme$__breakpoints.media;
    var computedStyles = {};
    for (var key in styles2) {
      var value = runIfFn(styles2[key], theme3);
      if (value == null)
        continue;
      value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
      if (!Array.isArray(value)) {
        computedStyles[key] = value;
        continue;
      }
      var queries = value.slice(0, medias.length).length;
      for (var index2 = 0; index2 < queries; index2 += 1) {
        var media = medias == null ? void 0 : medias[index2];
        if (!media) {
          computedStyles[key] = value[index2];
          continue;
        }
        computedStyles[media] = computedStyles[media] || {};
        if (value[index2] == null) {
          continue;
        }
        computedStyles[media][key] = value[index2];
      }
    }
    return computedStyles;
  };
};
var isCSSVariableTokenValue = function isCSSVariableTokenValue2(key, value) {
  return key.startsWith("--") && isString(value) && !isCssVar(value);
};
var resolveTokenValue = function resolveTokenValue2(theme3, value) {
  var _ref, _getVar2;
  if (value == null)
    return value;
  var getVar = function getVar2(val) {
    var _theme$__cssMap, _theme$__cssMap$val;
    return (_theme$__cssMap = theme3.__cssMap) == null ? void 0 : (_theme$__cssMap$val = _theme$__cssMap[val]) == null ? void 0 : _theme$__cssMap$val.varRef;
  };
  var getValue = function getValue2(val) {
    var _getVar;
    return (_getVar = getVar(val)) != null ? _getVar : val;
  };
  var valueSplit = value.split(",").map(function(v) {
    return v.trim();
  });
  var tokenValue = valueSplit[0], fallbackValue = valueSplit[1];
  value = (_ref = (_getVar2 = getVar(tokenValue)) != null ? _getVar2 : getValue(fallbackValue)) != null ? _ref : getValue(value);
  return value;
};
function getCss(options) {
  var _options$configs = options.configs, configs = _options$configs === void 0 ? {} : _options$configs, _options$pseudos = options.pseudos, pseudos = _options$pseudos === void 0 ? {} : _options$pseudos, theme3 = options.theme;
  var css3 = function css4(stylesOrFn, nested) {
    if (nested === void 0) {
      nested = false;
    }
    var _styles = runIfFn(stylesOrFn, theme3);
    var styles2 = expandResponsive(_styles)(theme3);
    var computedStyles = {};
    for (var key in styles2) {
      var _config$transform, _config, _config2, _config3, _config4;
      var valueOrFn = styles2[key];
      var value = runIfFn(valueOrFn, theme3);
      if (key in pseudos) {
        key = pseudos[key];
      }
      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme3, value);
      }
      var config3 = configs[key];
      if (config3 === true) {
        config3 = {
          property: key
        };
      }
      if (isObject(value)) {
        var _computedStyles$key;
        computedStyles[key] = (_computedStyles$key = computedStyles[key]) != null ? _computedStyles$key : {};
        computedStyles[key] = (0, import_lodash.default)({}, computedStyles[key], css4(value, true));
        continue;
      }
      var rawValue = (_config$transform = (_config = config3) == null ? void 0 : _config.transform == null ? void 0 : _config.transform(value, theme3, _styles)) != null ? _config$transform : value;
      rawValue = (_config2 = config3) != null && _config2.processResult ? css4(rawValue, true) : rawValue;
      var configProperty = runIfFn((_config3 = config3) == null ? void 0 : _config3.property, theme3);
      if (!nested && (_config4 = config3) != null && _config4["static"]) {
        var staticStyles = runIfFn(config3["static"], theme3);
        computedStyles = (0, import_lodash.default)({}, computedStyles, staticStyles);
      }
      if (configProperty && Array.isArray(configProperty)) {
        for (var _iterator = _createForOfIteratorHelperLoose2(configProperty), _step; !(_step = _iterator()).done; ) {
          var property = _step.value;
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = (0, import_lodash.default)({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }
        continue;
      }
      if (isObject(rawValue)) {
        computedStyles = (0, import_lodash.default)({}, computedStyles, rawValue);
        continue;
      }
      computedStyles[key] = rawValue;
    }
    return computedStyles;
  };
  return css3;
}
var css = function css2(styles2) {
  return function(theme3) {
    var cssFn = getCss({
      theme: theme3,
      pseudos: pseudoSelectors,
      configs: systemProps
    });
    return cssFn(styles2);
  };
};
function normalize3(value, toArray) {
  if (isArray(value))
    return value;
  if (isObject(value))
    return toArray(value);
  if (value != null)
    return [value];
}
function getNextIndex(values, i) {
  for (var j = i + 1; j < values.length; j++) {
    if (values[j] != null)
      return j;
  }
  return -1;
}
function createResolver(theme3) {
  var breakpointUtil = theme3.__breakpoints;
  return function resolver(config3, prop2, value, props) {
    if (!breakpointUtil)
      return;
    var result = {};
    var normalized = normalize3(value, breakpointUtil.toArrayValue);
    if (!normalized)
      return result;
    var len = normalized.length;
    var isSingle = len === 1;
    var isMultipart = !!config3.parts;
    var _loop = function _loop2(i2) {
      var _config$prop;
      var key = breakpointUtil.details[i2];
      var nextKey = breakpointUtil.details[getNextIndex(normalized, i2)];
      var query = toMediaQueryString(key.minW, nextKey == null ? void 0 : nextKey._minW);
      var styles2 = runIfFn((_config$prop = config3[prop2]) == null ? void 0 : _config$prop[normalized[i2]], props);
      if (!styles2)
        return "continue";
      if (isMultipart) {
        var _config$parts;
        (_config$parts = config3.parts) == null ? void 0 : _config$parts.forEach(function(part) {
          var _ref, _mergeWith;
          (0, import_lodash.default)(result, (_mergeWith = {}, _mergeWith[part] = isSingle ? styles2[part] : (_ref = {}, _ref[query] = styles2[part], _ref), _mergeWith));
        });
        return "continue";
      }
      if (!isMultipart) {
        if (isSingle)
          (0, import_lodash.default)(result, styles2);
        else
          result[query] = styles2;
        return "continue";
      }
      result[query] = styles2;
    };
    for (var i = 0; i < len; i++) {
      var _ret = _loop(i);
      if (_ret === "continue")
        continue;
    }
    return result;
  };
}
function resolveStyleConfig(config3) {
  return function(props) {
    var _config$baseStyle;
    var variant = props.variant, size2 = props.size, theme3 = props.theme;
    var recipe = createResolver(theme3);
    return (0, import_lodash.default)({}, runIfFn((_config$baseStyle = config3.baseStyle) != null ? _config$baseStyle : {}, props), recipe(config3, "sizes", size2, props), recipe(config3, "variants", variant, props));
  };
}

// node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js
var React9 = __toESM(require_react());
var import_react9 = __toESM(require_react());
var import_react_fast_compare = __toESM(require_react_fast_compare());

// node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
init_react();
init_extends();
var import_react6 = __toESM(require_react());

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js
init_react();
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ emotion_memoize_browser_esm_default(function(prop2) {
  return reactPropsRegex.test(prop2) || prop2.charCodeAt(0) === 111 && prop2.charCodeAt(1) === 110 && prop2.charCodeAt(2) < 91;
});
var emotion_is_prop_valid_browser_esm_default = isPropValid;

// node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
init_react();
init_extends();
var React8 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var testOmitPropsOnStringTag = emotion_is_prop_valid_browser_esm_default;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp3;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp3 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp3 !== "function" && isReal) {
    shouldForwardProp3 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp3;
};
var useInsertionEffect2 = React8["useInsertionEffect"] ? React8["useInsertionEffect"] : function useInsertionEffect3(create) {
  create();
};
function useInsertionEffectMaybe(create) {
  useInsertionEffect2(create);
}
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectMaybe(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var createStyled = function createStyled2(tag, options) {
  if (true) {
    if (tag === void 0) {
      throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
    }
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp3 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp3 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      if (args[0][0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles2.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        if (args[0][i] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles2.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = (0, import_react4.useContext)(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp3 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      return /* @__PURE__ */ (0, import_react4.createElement)(import_react4.Fragment, null, /* @__PURE__ */ (0, import_react4.createElement)(Insertion, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), /* @__PURE__ */ (0, import_react4.createElement)(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp3;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && true) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};
var emotion_styled_base_browser_esm_default = createStyled;

// node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = emotion_styled_base_browser_esm_default.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var emotion_styled_browser_esm_default = newStyled;

// node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js
function _extends6() {
  _extends6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends6.apply(this, arguments);
}
var ThemeProvider2 = function ThemeProvider3(props) {
  var cssVarsRoot = props.cssVarsRoot, theme3 = props.theme, children = props.children;
  var computedTheme = React9.useMemo(function() {
    return toCSSVar(theme3);
  }, [theme3]);
  return /* @__PURE__ */ React9.createElement(ThemeProvider, {
    theme: computedTheme
  }, /* @__PURE__ */ React9.createElement(CSSVars, {
    root: cssVarsRoot
  }), children);
};
var CSSVars = function CSSVars2(_ref) {
  var _ref$root = _ref.root, root = _ref$root === void 0 ? ":host, :root" : _ref$root;
  var selector2 = [root, "[data-theme]"].join(",");
  return /* @__PURE__ */ React9.createElement(Global, {
    styles: function styles2(theme3) {
      var _ref2;
      return _ref2 = {}, _ref2[selector2] = theme3.__cssVars, _ref2;
    }
  });
};
function useTheme() {
  var theme3 = React9.useContext(ThemeContext);
  if (!theme3) {
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  }
  return theme3;
}
var _createContext2 = createContext2({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
var StylesProvider = _createContext2[0];
var useStyles = _createContext2[1];
var createStylesContext = function createStylesContext2(componentName) {
  return createContext2({
    name: componentName + "StylesContext",
    errorMessage: 'useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<' + componentName + ' />" '
  });
};
var GlobalStyle = function GlobalStyle2() {
  var _useColorMode = useColorMode(), colorMode = _useColorMode.colorMode;
  return /* @__PURE__ */ React9.createElement(Global, {
    styles: function styles2(theme3) {
      var styleObjectOrFn = memoizedGet(theme3, "styles.global");
      var globalStyles = runIfFn(styleObjectOrFn, {
        theme: theme3,
        colorMode
      });
      if (!globalStyles)
        return void 0;
      var styles3 = css(globalStyles)(theme3);
      return styles3;
    }
  });
};
function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}
function useChakra() {
  var colorModeResult = useColorMode();
  var theme3 = useTheme();
  return _extends6({}, colorModeResult, {
    theme: theme3
  });
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var allPropNames = new Set([].concat(propNames, ["textStyle", "layerStyle", "apply", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]));
var validHTMLProps = /* @__PURE__ */ new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
var shouldForwardProp = function shouldForwardProp2(prop2) {
  return validHTMLProps.has(prop2) || !allPropNames.has(prop2);
};
var _excluded$1 = ["theme", "css", "__css", "sx"];
var _excluded22 = ["baseStyle"];
var toCSSObject = function toCSSObject2(_ref) {
  var baseStyle23 = _ref.baseStyle;
  return function(props) {
    props.theme;
    var cssProp = props.css, __css = props.__css, sx = props.sx, rest = _objectWithoutPropertiesLoose3(props, _excluded$1);
    var styleProps2 = objectFilter(rest, function(_, prop2) {
      return isStyleProp(prop2);
    });
    var finalBaseStyle = runIfFn(baseStyle23, props);
    var finalStyles = Object.assign({}, __css, finalBaseStyle, filterUndefined(styleProps2), sx);
    var computedCSS = css(finalStyles)(props.theme);
    return cssProp ? [computedCSS, cssProp] : computedCSS;
  };
};
function styled(component, options) {
  var _ref2 = options != null ? options : {}, baseStyle23 = _ref2.baseStyle, styledOptions = _objectWithoutPropertiesLoose3(_ref2, _excluded22);
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  var styleObject = toCSSObject({
    baseStyle: baseStyle23
  });
  return emotion_styled_browser_esm_default(component, styledOptions)(styleObject);
}
function forwardRef2(component) {
  return /* @__PURE__ */ React9.forwardRef(component);
}
var _excluded3 = ["styleConfig"];
function useStyleConfigImpl(themeKey, props) {
  var _styleConfig$defaultP;
  if (props === void 0) {
    props = {};
  }
  var _props = props, styleConfigProp = _props.styleConfig, rest = _objectWithoutPropertiesLoose3(_props, _excluded3);
  var _useChakra = useChakra(), theme3 = _useChakra.theme, colorMode = _useChakra.colorMode;
  var themeStyleConfig = memoizedGet(theme3, "components." + themeKey);
  var styleConfig = styleConfigProp || themeStyleConfig;
  var mergedProps = (0, import_lodash.default)({
    theme: theme3,
    colorMode
  }, (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {}, filterUndefined(omit(rest, ["children"])));
  var stylesRef = (0, import_react9.useRef)({});
  if (styleConfig) {
    var getStyles = resolveStyleConfig(styleConfig);
    var styles2 = getStyles(mergedProps);
    var isStyleEqual = (0, import_react_fast_compare.default)(stylesRef.current, styles2);
    if (!isStyleEqual) {
      stylesRef.current = styles2;
    }
  }
  return stylesRef.current;
}
function useStyleConfig(themeKey, props) {
  if (props === void 0) {
    props = {};
  }
  return useStyleConfigImpl(themeKey, props);
}
function useMultiStyleConfig(themeKey, props) {
  if (props === void 0) {
    props = {};
  }
  return useStyleConfigImpl(themeKey, props);
}
function factory() {
  var cache = /* @__PURE__ */ new Map();
  return new Proxy(styled, {
    apply: function apply(target, thisArg, argArray) {
      return styled.apply(void 0, argArray);
    },
    get: function get2(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    }
  });
}
var chakra = factory();

// node_modules/@chakra-ui/react-env/dist/chakra-ui-react-env.esm.js
init_react();
var import_react10 = __toESM(require_react());
var doc = {
  body: {
    classList: {
      add: function add2() {
      },
      remove: function remove() {
      }
    }
  },
  addEventListener: function addEventListener() {
  },
  removeEventListener: function removeEventListener() {
  },
  activeElement: {
    blur: function blur() {
    },
    nodeName: ""
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {
      }
    };
  },
  createElement: function createElement6() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {
      },
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  }
};
var ssrDocument = doc;
var noop3 = function noop4() {
};
var win = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: noop3,
  removeEventListener: noop3,
  getComputedStyle: function getComputedStyle2() {
    return {
      getPropertyValue: function getPropertyValue() {
        return "";
      }
    };
  },
  matchMedia: function matchMedia() {
    return {
      matches: false,
      addListener: noop3,
      removeListener: noop3
    };
  },
  requestAnimationFrame: function requestAnimationFrame2(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame: function cancelAnimationFrame2(id2) {
    if (typeof setTimeout === "undefined")
      return;
    clearTimeout(id2);
  },
  setTimeout: function setTimeout2() {
    return 0;
  },
  clearTimeout: noop3,
  setInterval: function setInterval() {
    return 0;
  },
  clearInterval: noop3
};
var ssrWindow = win;
var mockEnv = {
  window: ssrWindow,
  document: ssrDocument
};
var defaultEnv = isBrowser ? {
  window,
  document
} : mockEnv;
var EnvironmentContext = /* @__PURE__ */ (0, import_react10.createContext)(defaultEnv);
if (__DEV__) {
  EnvironmentContext.displayName = "EnvironmentContext";
}
function EnvironmentProvider(props) {
  var children = props.children, environmentProp = props.environment;
  var _useState = (0, import_react10.useState)(null), node = _useState[0], setNode = _useState[1];
  var context = (0, import_react10.useMemo)(function() {
    var _ref;
    var doc2 = node == null ? void 0 : node.ownerDocument;
    var win2 = node == null ? void 0 : node.ownerDocument.defaultView;
    var nodeEnv = doc2 ? {
      document: doc2,
      window: win2
    } : void 0;
    var env2 = (_ref = environmentProp != null ? environmentProp : nodeEnv) != null ? _ref : defaultEnv;
    return env2;
  }, [node, environmentProp]);
  return /* @__PURE__ */ import_react10.default.createElement(EnvironmentContext.Provider, {
    value: context
  }, children, /* @__PURE__ */ import_react10.default.createElement("span", {
    hidden: true,
    className: "chakra-env",
    ref: function ref(el) {
      (0, import_react10.startTransition)(function() {
        if (el)
          setNode(el);
      });
    }
  }));
}
if (__DEV__) {
  EnvironmentProvider.displayName = "EnvironmentProvider";
}

// node_modules/@chakra-ui/provider/dist/chakra-ui-provider.esm.js
var React11 = __toESM(require_react());
var ChakraProvider = function ChakraProvider2(props) {
  var children = props.children, colorModeManager = props.colorModeManager, portalZIndex = props.portalZIndex, _props$resetCSS = props.resetCSS, resetCSS = _props$resetCSS === void 0 ? true : _props$resetCSS, _props$theme = props.theme, theme3 = _props$theme === void 0 ? {} : _props$theme, environment = props.environment, cssVarsRoot = props.cssVarsRoot;
  var _children = /* @__PURE__ */ React11.createElement(EnvironmentProvider, {
    environment
  }, children);
  return /* @__PURE__ */ React11.createElement(ThemeProvider2, {
    theme: theme3,
    cssVarsRoot
  }, /* @__PURE__ */ React11.createElement(ColorModeProvider, {
    colorModeManager,
    options: theme3.config
  }, resetCSS && /* @__PURE__ */ React11.createElement(CSSReset$1, null), /* @__PURE__ */ React11.createElement(GlobalStyle, null), portalZIndex ? /* @__PURE__ */ React11.createElement(PortalManager, {
    zIndex: portalZIndex
  }, _children) : _children));
};

// node_modules/@chakra-ui/theme/dist/chakra-ui-theme.esm.js
init_react();

// node_modules/@chakra-ui/theme/dist/sizes-501602a9.esm.js
init_react();

// node_modules/@chakra-ui/theme/foundations/spacing/dist/chakra-ui-theme-foundations-spacing.esm.js
init_react();
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

// node_modules/@chakra-ui/theme/dist/sizes-501602a9.esm.js
function _extends7() {
  _extends7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends7.apply(this, arguments);
}
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes = _extends7({}, spacing, largeSizes, {
  container
});

// node_modules/@chakra-ui/theme/components/dist/chakra-ui-theme-components.esm.js
init_react();

// node_modules/@chakra-ui/anatomy/dist/chakra-ui-anatomy.esm.js
init_react();

// node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js
init_react();

// node_modules/@ctrl/tinycolor/dist/module/index.js
init_react();

// node_modules/@ctrl/tinycolor/dist/module/conversion.js
init_react();

// node_modules/@ctrl/tinycolor/dist/module/util.js
init_react();
function bound01(n, max2) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max2 === 360 ? n : Math.min(max2, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max2), 10) / 100;
  }
  if (Math.abs(n - max2) < 1e-6) {
    return 1;
  }
  if (max2 === 360) {
    n = (n < 0 ? n % max2 + max2 : n % max2) / parseFloat(String(max2));
  } else {
    n = n % max2 / parseFloat(String(max2));
  }
  return n;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}

// node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r, g, b2) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r, g, b2) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b2 = bound01(b2, 255);
  var max2 = Math.max(r, g, b2);
  var min2 = Math.min(r, g, b2);
  var h = 0;
  var s = 0;
  var l = (max2 + min2) / 2;
  if (max2 === min2) {
    s = 0;
    h = 0;
  } else {
    var d = max2 - min2;
    s = l > 0.5 ? d / (2 - max2 - min2) : d / (max2 + min2);
    switch (max2) {
      case r:
        h = (g - b2) / d + (g < b2 ? 6 : 0);
        break;
      case g:
        h = (b2 - r) / d + 2;
        break;
      case b2:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, l };
}
function hue2rgb(p, q, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p + (q - p) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q;
  }
  if (t2 < 2 / 3) {
    return p + (q - p) * (2 / 3 - t2) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b2;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b2 = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b2 = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b2 * 255 };
}
function rgbToHsv(r, g, b2) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b2 = bound01(b2, 255);
  var max2 = Math.max(r, g, b2);
  var min2 = Math.min(r, g, b2);
  var h = 0;
  var v = max2;
  var d = max2 - min2;
  var s = max2 === 0 ? 0 : d / max2;
  if (max2 === min2) {
    h = 0;
  } else {
    switch (max2) {
      case r:
        h = (g - b2) / d + (g < b2 ? 6 : 0);
        break;
      case g:
        h = (b2 - r) / d + 2;
        break;
      case b2:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, v };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t2 = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t2, v][mod];
  var g = [t2, v, v, q, p, p][mod];
  var b2 = [p, p, t2, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b2 * 255 };
}
function rgbToHex(r, g, b2, allow3Char) {
  var hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }
  return hex2.join("");
}
function rgbaToHex(r, g, b2, a2, allow4Char) {
  var hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a2))
  ];
  if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
  }
  return hex2.join("");
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color3) {
  return {
    r: color3 >> 16,
    g: (color3 & 65280) >> 8,
    b: color3 & 255
  };
}

// node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
init_react();
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

// node_modules/@ctrl/tinycolor/dist/module/format-input.js
init_react();
function inputToRGB(color3) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a2 = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format2 = false;
  if (typeof color3 === "string") {
    color3 = stringInputToObject(color3);
  }
  if (typeof color3 === "object") {
    if (isValidCSSUnit(color3.r) && isValidCSSUnit(color3.g) && isValidCSSUnit(color3.b)) {
      rgb = rgbToRgb(color3.r, color3.g, color3.b);
      ok = true;
      format2 = String(color3.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color3.h) && isValidCSSUnit(color3.s) && isValidCSSUnit(color3.v)) {
      s = convertToPercentage(color3.s);
      v = convertToPercentage(color3.v);
      rgb = hsvToRgb(color3.h, s, v);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color3.h) && isValidCSSUnit(color3.s) && isValidCSSUnit(color3.l)) {
      s = convertToPercentage(color3.s);
      l = convertToPercentage(color3.l);
      rgb = hslToRgb(color3.h, s, l);
      ok = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color3, "a")) {
      a2 = color3.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok,
    format: color3.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color3) {
  color3 = color3.trim().toLowerCase();
  if (color3.length === 0) {
    return false;
  }
  var named = false;
  if (names[color3]) {
    color3 = names[color3];
    named = true;
  } else if (color3 === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color3);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color3);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color3);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color3);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color3);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color3);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color3);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color3);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color3);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color3);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color3) {
  return Boolean(matchers.CSS_UNIT.exec(String(color3)));
}

// node_modules/@ctrl/tinycolor/dist/module/index.js
var TinyColor = function() {
  function TinyColor2(color3, opts) {
    if (color3 === void 0) {
      color3 = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a;
    if (color3 instanceof TinyColor2) {
      return color3;
    }
    if (typeof color3 === "number") {
      color3 = numberInputToObject(color3);
    }
    this.originalInput = color3;
    var rgb = inputToRGB(color3);
    this.originalInput = color3;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R;
    var G;
    var B;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R = RsRGB / 12.92;
    } else {
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B = BsRGB / 12.92;
    } else {
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha2) {
    this.a = boundAlpha(alpha2);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b2 = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b2, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b2, ", ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x) {
      return "".concat(Math.round(bound01(x, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x) {
      return Math.round(bound01(x, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
      var _b = _a[_i], key = _b[0], value = _b[1];
      if (hex2 === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format2) {
    var formatSet = Boolean(format2);
    format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
    if (needsAlphaFormat) {
      if (format2 === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format2 === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format2 === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format2 === "hex" || format2 === "hex6") {
      formattedString = this.toHexString();
    }
    if (format2 === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format2 === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format2 === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format2 === "name") {
      formattedString = this.toName();
    }
    if (format2 === "hsl") {
      formattedString = this.toHslString();
    }
    if (format2 === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color3, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color3).toRgb();
    var p = amount / 100;
    var rgba2 = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor2(rgba2);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h, s, v }));
      v = (v + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  };
  TinyColor2.prototype.onBackground = function(background2) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background2).toRgb();
    return new TinyColor2({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n) {
    var hsl = this.toHsl();
    var h = hsl.h;
    var result = [this];
    var increment = 360 / n;
    for (var i = 1; i < n; i++) {
      result.push(new TinyColor2({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color3) {
    return this.toRgbString() === new TinyColor2(color3).toRgbString();
  };
  return TinyColor2;
}();

// node_modules/@ctrl/tinycolor/dist/module/random.js
init_react();
function random(options) {
  if (options === void 0) {
    options = {};
  }
  if (options.count !== void 0 && options.count !== null) {
    var totalColors = options.count;
    var colors2 = [];
    options.count = void 0;
    while (totalColors > colors2.length) {
      options.count = null;
      if (options.seed) {
        options.seed += 1;
      }
      colors2.push(random(options));
    }
    options.count = totalColors;
    return colors2;
  }
  var h = pickHue(options.hue, options.seed);
  var s = pickSaturation(h, options);
  var v = pickBrightness(h, s, options);
  var res = { h, s, v };
  if (options.alpha !== void 0) {
    res.a = options.alpha;
  }
  return new TinyColor(res);
}
function pickHue(hue, seed) {
  var hueRange = getHueRange(hue);
  var res = randomWithin(hueRange, seed);
  if (res < 0) {
    res = 360 + res;
  }
  return res;
}
function pickSaturation(hue, options) {
  if (options.hue === "monochrome") {
    return 0;
  }
  if (options.luminosity === "random") {
    return randomWithin([0, 100], options.seed);
  }
  var saturationRange = getColorInfo(hue).saturationRange;
  var sMin = saturationRange[0];
  var sMax = saturationRange[1];
  switch (options.luminosity) {
    case "bright":
      sMin = 55;
      break;
    case "dark":
      sMin = sMax - 10;
      break;
    case "light":
      sMax = 55;
      break;
    default:
      break;
  }
  return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S, options) {
  var bMin = getMinimumBrightness(H, S);
  var bMax = 100;
  switch (options.luminosity) {
    case "dark":
      bMax = bMin + 20;
      break;
    case "light":
      bMin = (bMax + bMin) / 2;
      break;
    case "random":
      bMin = 0;
      bMax = 100;
      break;
    default:
      break;
  }
  return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S) {
  var lowerBounds = getColorInfo(H).lowerBounds;
  for (var i = 0; i < lowerBounds.length - 1; i++) {
    var s1 = lowerBounds[i][0];
    var v1 = lowerBounds[i][1];
    var s2 = lowerBounds[i + 1][0];
    var v2 = lowerBounds[i + 1][1];
    if (S >= s1 && S <= s2) {
      var m = (v2 - v1) / (s2 - s1);
      var b2 = v1 - m * s1;
      return m * S + b2;
    }
  }
  return 0;
}
function getHueRange(colorInput) {
  var num = parseInt(colorInput, 10);
  if (!Number.isNaN(num) && num < 360 && num > 0) {
    return [num, num];
  }
  if (typeof colorInput === "string") {
    var namedColor = bounds.find(function(n) {
      return n.name === colorInput;
    });
    if (namedColor) {
      var color3 = defineColor(namedColor);
      if (color3.hueRange) {
        return color3.hueRange;
      }
    }
    var parsed = new TinyColor(colorInput);
    if (parsed.isValid) {
      var hue = parsed.toHsv().h;
      return [hue, hue];
    }
  }
  return [0, 360];
}
function getColorInfo(hue) {
  if (hue >= 334 && hue <= 360) {
    hue -= 360;
  }
  for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
    var bound = bounds_1[_i];
    var color3 = defineColor(bound);
    if (color3.hueRange && hue >= color3.hueRange[0] && hue <= color3.hueRange[1]) {
      return color3;
    }
  }
  throw Error("Color not found");
}
function randomWithin(range, seed) {
  if (seed === void 0) {
    return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
  }
  var max2 = range[1] || 1;
  var min2 = range[0] || 0;
  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280;
  return Math.floor(min2 + rnd * (max2 - min2));
}
function defineColor(bound) {
  var sMin = bound.lowerBounds[0][0];
  var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
  var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
  var bMax = bound.lowerBounds[0][1];
  return {
    name: bound.name,
    hueRange: bound.hueRange,
    lowerBounds: bound.lowerBounds,
    saturationRange: [sMin, sMax],
    brightnessRange: [bMin, bMax]
  };
}
var bounds = [
  {
    name: "monochrome",
    hueRange: null,
    lowerBounds: [
      [0, 0],
      [100, 0]
    ]
  },
  {
    name: "red",
    hueRange: [-26, 18],
    lowerBounds: [
      [20, 100],
      [30, 92],
      [40, 89],
      [50, 85],
      [60, 78],
      [70, 70],
      [80, 60],
      [90, 55],
      [100, 50]
    ]
  },
  {
    name: "orange",
    hueRange: [19, 46],
    lowerBounds: [
      [20, 100],
      [30, 93],
      [40, 88],
      [50, 86],
      [60, 85],
      [70, 70],
      [100, 70]
    ]
  },
  {
    name: "yellow",
    hueRange: [47, 62],
    lowerBounds: [
      [25, 100],
      [40, 94],
      [50, 89],
      [60, 86],
      [70, 84],
      [80, 82],
      [90, 80],
      [100, 75]
    ]
  },
  {
    name: "green",
    hueRange: [63, 178],
    lowerBounds: [
      [30, 100],
      [40, 90],
      [50, 85],
      [60, 81],
      [70, 74],
      [80, 64],
      [90, 50],
      [100, 40]
    ]
  },
  {
    name: "blue",
    hueRange: [179, 257],
    lowerBounds: [
      [20, 100],
      [30, 86],
      [40, 80],
      [50, 74],
      [60, 60],
      [70, 52],
      [80, 44],
      [90, 39],
      [100, 35]
    ]
  },
  {
    name: "purple",
    hueRange: [258, 282],
    lowerBounds: [
      [20, 100],
      [30, 87],
      [40, 79],
      [50, 70],
      [60, 65],
      [70, 59],
      [80, 52],
      [90, 45],
      [100, 42]
    ]
  },
  {
    name: "pink",
    hueRange: [283, 334],
    lowerBounds: [
      [20, 100],
      [30, 90],
      [40, 86],
      [60, 84],
      [80, 80],
      [90, 75],
      [100, 73]
    ]
  }
];

// node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js
var getColor = function getColor2(theme3, color3, fallback) {
  var hex2 = memoizedGet(theme3, "colors." + color3, color3);
  var _TinyColor = new TinyColor(hex2), isValid = _TinyColor.isValid;
  return isValid ? hex2 : fallback;
};
var tone = function tone2(color3) {
  return function(theme3) {
    var hex2 = getColor(theme3, color3);
    var isDark3 = new TinyColor(hex2).isDark();
    return isDark3 ? "dark" : "light";
  };
};
var isDark = function isDark2(color3) {
  return function(theme3) {
    return tone(color3)(theme3) === "dark";
  };
};
var transparentize = function transparentize2(color3, opacity) {
  return function(theme3) {
    var raw = getColor(theme3, color3);
    return new TinyColor(raw).setAlpha(opacity).toRgbString();
  };
};
function generateStripe(size2, color3) {
  if (size2 === void 0) {
    size2 = "1rem";
  }
  if (color3 === void 0) {
    color3 = "rgba(255, 255, 255, 0.15)";
  }
  return {
    backgroundImage: "linear-gradient(\n    45deg,\n    " + color3 + " 25%,\n    transparent 25%,\n    transparent 50%,\n    " + color3 + " 50%,\n    " + color3 + " 75%,\n    transparent 75%,\n    transparent\n  )",
    backgroundSize: size2 + " " + size2
  };
}
function randomColor(opts) {
  var fallback = random().toHexString();
  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
function randomColorFromString(str) {
  var hash3 = 0;
  if (str.length === 0)
    return hash3.toString();
  for (var i = 0; i < str.length; i += 1) {
    hash3 = str.charCodeAt(i) + ((hash3 << 5) - hash3);
    hash3 = hash3 & hash3;
  }
  var color3 = "#";
  for (var j = 0; j < 3; j += 1) {
    var value = hash3 >> j * 8 & 255;
    color3 += ("00" + value.toString(16)).substr(-2);
  }
  return color3;
}
function randomColorFromList(str, list2) {
  var index2 = 0;
  if (str.length === 0)
    return list2[0];
  for (var i = 0; i < str.length; i += 1) {
    index2 = str.charCodeAt(i) + ((index2 << 5) - index2);
    index2 = index2 & index2;
  }
  index2 = (index2 % list2.length + list2.length) % list2.length;
  return list2[index2];
}
function randomFromList(list2) {
  return list2[Math.floor(Math.random() * list2.length)];
}
function mode(light, dark) {
  return function(props) {
    return props.colorMode === "dark" ? dark : light;
  };
}
function orient(options) {
  var orientation = options.orientation, vertical = options.vertical, horizontal = options.horizontal;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}
function _extends8() {
  _extends8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends8.apply(this, arguments);
}
var createBreakpoints = function createBreakpoints2(config3) {
  warn({
    condition: true,
    message: ["[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon", "simply pass the breakpoints as an object. Remove the createBreakpoint(..) call"].join("")
  });
  return _extends8({
    base: "0em"
  }, config3);
};
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var Anatomy = /* @__PURE__ */ function() {
  function Anatomy2(name) {
    var _this = this;
    this.map = {};
    this.called = false;
    this.assert = function() {
      if (!_this.called) {
        _this.called = true;
        return;
      }
      throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
    };
    this.parts = function() {
      _this.assert();
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }
      for (var _i = 0, _values = values; _i < _values.length; _i++) {
        var part = _values[_i];
        _this.map[part] = _this.toPart(part);
      }
      return _this;
    };
    this.extend = function() {
      for (var _len2 = arguments.length, parts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        parts[_key2] = arguments[_key2];
      }
      for (var _i2 = 0, _parts = parts; _i2 < _parts.length; _i2++) {
        var part = _parts[_i2];
        if (part in _this.map)
          continue;
        _this.map[part] = _this.toPart(part);
      }
      return _this;
    };
    this.toPart = function(part) {
      var el = ["container", "root"].includes(part != null ? part : "") ? [_this.name] : [_this.name, part];
      var attr = el.filter(Boolean).join("__");
      var className = "chakra-" + attr;
      var partObj = {
        className,
        selector: "." + className,
        toString: function toString() {
          return part;
        }
      };
      return partObj;
    };
    this.__type = {};
  }
  _createClass(Anatomy2, [{
    key: "selectors",
    get: function get2() {
      var value = fromEntries(Object.entries(this.map).map(function(_ref) {
        var key = _ref[0], part = _ref[1];
        return [key, part.selector];
      }));
      return value;
    }
  }, {
    key: "classNames",
    get: function get2() {
      var value = fromEntries(Object.entries(this.map).map(function(_ref2) {
        var key = _ref2[0], part = _ref2[1];
        return [key, part.className];
      }));
      return value;
    }
  }, {
    key: "keys",
    get: function get2() {
      return Object.keys(this.map);
    }
  }]);
  return Anatomy2;
}();
function anatomy(name) {
  return new Anatomy(name);
}
function toRef(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpr = function toExpr2(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }
  return operands.map(toRef).join(" " + operator + " ").replace(/calc/g, "");
};
var _add2 = function add3() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }
  return "calc(" + toExpr.apply(void 0, ["+"].concat(operands)) + ")";
};
var _subtract2 = function subtract3() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }
  return "calc(" + toExpr.apply(void 0, ["-"].concat(operands)) + ")";
};
var _multiply2 = function multiply2() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }
  return "calc(" + toExpr.apply(void 0, ["*"].concat(operands)) + ")";
};
var _divide2 = function divide2() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }
  return "calc(" + toExpr.apply(void 0, ["/"].concat(operands)) + ")";
};
var _negate2 = function negate2(x) {
  var value = toRef(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : "-" + value;
  }
  return _multiply2(value, -1);
};
var calc2 = Object.assign(function(x) {
  return {
    add: function add4() {
      for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        operands[_key6] = arguments[_key6];
      }
      return calc2(_add2.apply(void 0, [x].concat(operands)));
    },
    subtract: function subtract4() {
      for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        operands[_key7] = arguments[_key7];
      }
      return calc2(_subtract2.apply(void 0, [x].concat(operands)));
    },
    multiply: function multiply3() {
      for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        operands[_key8] = arguments[_key8];
      }
      return calc2(_multiply2.apply(void 0, [x].concat(operands)));
    },
    divide: function divide3() {
      for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        operands[_key9] = arguments[_key9];
      }
      return calc2(_divide2.apply(void 0, [x].concat(operands)));
    },
    negate: function negate3() {
      return calc2(_negate2(x));
    },
    toString: function toString() {
      return x.toString();
    }
  };
}, {
  add: _add2,
  subtract: _subtract2,
  multiply: _multiply2,
  divide: _divide2,
  negate: _negate2
});
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace2(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }
  return value.replace(/\s+/g, replaceValue);
}
function escape2(value) {
  var valueStr = replaceWhiteSpace2(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", "\\.") : value;
}
function addPrefix2(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return [prefix, escape2(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return "var(" + escape2(name) + (fallback ? ", " + fallback : "") + ")";
}
function toVar(value, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }
  return "--" + addPrefix2(value, prefix);
}
function cssVar2(name, options) {
  var cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}

// node_modules/@chakra-ui/anatomy/dist/chakra-ui-anatomy.esm.js
var accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel").extend("icon");
var alertAnatomy = anatomy("alert").parts("title", "description", "container").extend("icon", "spinner");
var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
var buttonAnatomy = anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
var circularProgressAnatomy = anatomy("progress").parts("track", "filledTrack").extend("label");
var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var editableAnatomy = anatomy("editable").parts("preview", "input", "textarea");
var formAnatomy = anatomy("form").parts("container", "requiredIndicator", "helperText");
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts("addon", "field", "element");
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts("root", "field", "stepperGroup", "stepper");
var pinInputAnatomy = anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
var progressAnatomy = anatomy("progress").parts("label", "filledTrack", "track");
var radioAnatomy = anatomy("radio").parts("container", "control", "label");
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts("container", "track", "thumb", "filledTrack");
var statAnatomy = anatomy("stat").parts("container", "label", "helpText", "number", "icon");
var switchAnatomy = anatomy("switch").parts("container", "track", "thumb");
var tableAnatomy = anatomy("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption");
var tabsAnatomy = anatomy("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator");
var tagAnatomy = anatomy("tag").parts("container", "label", "closeButton");

// node_modules/@chakra-ui/theme/foundations/typography/dist/chakra-ui-theme-foundations-typography.esm.js
init_react();
var typography2 = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    "short": 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};

// node_modules/@chakra-ui/theme/components/dist/chakra-ui-theme-components.esm.js
var baseStyleContainer$4 = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
};
var baseStyleButton$1 = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "1rem",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: 4,
  py: 2
};
var baseStylePanel = {
  pt: 2,
  px: 4,
  pb: 5
};
var baseStyleIcon$5 = {
  fontSize: "1.25em"
};
var baseStyle$D = {
  root: {},
  container: baseStyleContainer$4,
  button: baseStyleButton$1,
  panel: baseStylePanel,
  icon: baseStyleIcon$5
};
var Accordion = {
  parts: accordionAnatomy.keys,
  baseStyle: baseStyle$D
};
var baseStyle$C = {
  container: {
    px: 4,
    py: 3
  },
  title: {
    fontWeight: "bold",
    lineHeight: 6,
    marginEnd: 2
  },
  description: {
    lineHeight: 6
  },
  icon: {
    flexShrink: 0,
    marginEnd: 3,
    w: 5,
    h: 6
  },
  spinner: {
    flexShrink: 0,
    marginEnd: 3,
    w: 5,
    h: 5
  }
};
function getBg(props) {
  var theme3 = props.theme, c2 = props.colorScheme;
  var lightBg = getColor(theme3, c2 + ".100", c2);
  var darkBg = transparentize(c2 + ".200", 0.16)(theme3);
  return mode(lightBg, darkBg)(props);
}
var variantSubtle$1 = function variantSubtle(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      bg: getBg(props)
    },
    icon: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    },
    spinner: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var variantLeftAccent = function variantLeftAccent2(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      paddingStart: 3,
      borderStartWidth: "4px",
      borderStartColor: mode(c2 + ".500", c2 + ".200")(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    },
    spinner: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var variantTopAccent = function variantTopAccent2(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      pt: 2,
      borderTopWidth: "4px",
      borderTopColor: mode(c2 + ".500", c2 + ".200")(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    },
    spinner: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var variantSolid$3 = function variantSolid(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      bg: mode(c2 + ".500", c2 + ".200")(props),
      color: mode("white", "gray.900")(props)
    }
  };
};
var variants$b = {
  subtle: variantSubtle$1,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid$3
};
var defaultProps$n = {
  variant: "subtle",
  colorScheme: "blue"
};
var Alert = {
  parts: alertAnatomy.keys,
  baseStyle: baseStyle$C,
  variants: variants$b,
  defaultProps: defaultProps$n
};
var baseStyleBadge = function baseStyleBadge2(props) {
  return {
    transform: "translate(25%, 25%)",
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: mode("white", "gray.800")(props)
  };
};
var baseStyleExcessLabel = function baseStyleExcessLabel2(props) {
  return {
    bg: mode("gray.200", "whiteAlpha.400")(props)
  };
};
var baseStyleContainer$3 = function baseStyleContainer(props) {
  var name = props.name, theme3 = props.theme;
  var bg = name ? randomColor({
    string: name
  }) : "gray.400";
  var isBgDark = isDark(bg)(theme3);
  var color3 = "white";
  if (!isBgDark)
    color3 = "gray.800";
  var borderColor = mode("white", "gray.800")(props);
  return {
    bg,
    color: color3,
    borderColor,
    verticalAlign: "top"
  };
};
var baseStyle$B = function baseStyle(props) {
  return {
    badge: baseStyleBadge(props),
    excessLabel: baseStyleExcessLabel(props),
    container: baseStyleContainer$3(props)
  };
};
function getSize$3(size2) {
  var themeSize = size2 !== "100%" ? sizes[size2] : void 0;
  return {
    container: {
      width: size2,
      height: size2,
      fontSize: "calc(" + (themeSize != null ? themeSize : size2) + " / 2.5)"
    },
    excessLabel: {
      width: size2,
      height: size2
    },
    label: {
      fontSize: "calc(" + (themeSize != null ? themeSize : size2) + " / 2.5)",
      lineHeight: size2 !== "100%" ? themeSize != null ? themeSize : size2 : void 0
    }
  };
}
var sizes$k = {
  "2xs": getSize$3(4),
  xs: getSize$3(6),
  sm: getSize$3(8),
  md: getSize$3(12),
  lg: getSize$3(16),
  xl: getSize$3(24),
  "2xl": getSize$3(32),
  full: getSize$3("100%")
};
var defaultProps$m = {
  size: "md"
};
var Avatar = {
  parts: avatarAnatomy.keys,
  baseStyle: baseStyle$B,
  sizes: sizes$k,
  defaultProps: defaultProps$m
};
var baseStyle$A = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
};
var variantSolid$2 = function variantSolid2(props) {
  var c2 = props.colorScheme, theme3 = props.theme;
  var dark = transparentize(c2 + ".500", 0.6)(theme3);
  return {
    bg: mode(c2 + ".500", dark)(props),
    color: mode("white", "whiteAlpha.800")(props)
  };
};
var variantSubtle2 = function variantSubtle3(props) {
  var c2 = props.colorScheme, theme3 = props.theme;
  var darkBg = transparentize(c2 + ".200", 0.16)(theme3);
  return {
    bg: mode(c2 + ".100", darkBg)(props),
    color: mode(c2 + ".800", c2 + ".200")(props)
  };
};
var variantOutline$2 = function variantOutline(props) {
  var c2 = props.colorScheme, theme3 = props.theme;
  var darkColor = transparentize(c2 + ".200", 0.8)(theme3);
  var lightColor = getColor(theme3, c2 + ".500");
  var color3 = mode(lightColor, darkColor)(props);
  return {
    color: color3,
    boxShadow: "inset 0 0 0px 1px " + color3
  };
};
var variants$a = {
  solid: variantSolid$2,
  subtle: variantSubtle2,
  outline: variantOutline$2
};
var defaultProps$l = {
  variant: "subtle",
  colorScheme: "gray"
};
var Badge = {
  baseStyle: baseStyle$A,
  variants: variants$a,
  defaultProps: defaultProps$l
};
var baseStyleLink = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
};
var baseStyle$z = {
  link: baseStyleLink
};
var Breadcrumb = {
  parts: breadcrumbAnatomy.keys,
  baseStyle: baseStyle$z
};
var baseStyle$y = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
};
var variantGhost = function variantGhost2(props) {
  var c2 = props.colorScheme, theme3 = props.theme;
  if (c2 === "gray") {
    return {
      color: mode("inherit", "whiteAlpha.900")(props),
      _hover: {
        bg: mode("gray.100", "whiteAlpha.200")(props)
      },
      _active: {
        bg: mode("gray.200", "whiteAlpha.300")(props)
      }
    };
  }
  var darkHoverBg = transparentize(c2 + ".200", 0.12)(theme3);
  var darkActiveBg = transparentize(c2 + ".200", 0.24)(theme3);
  return {
    color: mode(c2 + ".600", c2 + ".200")(props),
    bg: "transparent",
    _hover: {
      bg: mode(c2 + ".50", darkHoverBg)(props)
    },
    _active: {
      bg: mode(c2 + ".100", darkActiveBg)(props)
    }
  };
};
var variantOutline$1 = function variantOutline2(props) {
  var c2 = props.colorScheme;
  var borderColor = mode("gray.200", "whiteAlpha.300")(props);
  return _extends7({
    border: "1px solid",
    borderColor: c2 === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
      marginEnd: "-1px"
    }
  }, variantGhost(props));
};
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid$1 = function variantSolid3(props) {
  var _accessibleColorMap$c;
  var c2 = props.colorScheme;
  if (c2 === "gray") {
    var _bg = mode("gray.100", "whiteAlpha.200")(props);
    return {
      bg: _bg,
      _hover: {
        bg: mode("gray.200", "whiteAlpha.300")(props),
        _disabled: {
          bg: _bg
        }
      },
      _active: {
        bg: mode("gray.300", "whiteAlpha.400")(props)
      }
    };
  }
  var _ref = (_accessibleColorMap$c = accessibleColorMap[c2]) != null ? _accessibleColorMap$c : {}, _ref$bg = _ref.bg, bg = _ref$bg === void 0 ? c2 + ".500" : _ref$bg, _ref$color = _ref.color, color3 = _ref$color === void 0 ? "white" : _ref$color, _ref$hoverBg = _ref.hoverBg, hoverBg = _ref$hoverBg === void 0 ? c2 + ".600" : _ref$hoverBg, _ref$activeBg = _ref.activeBg, activeBg = _ref$activeBg === void 0 ? c2 + ".700" : _ref$activeBg;
  var background2 = mode(bg, c2 + ".200")(props);
  return {
    bg: background2,
    color: mode(color3, "gray.800")(props),
    _hover: {
      bg: mode(hoverBg, c2 + ".300")(props),
      _disabled: {
        bg: background2
      }
    },
    _active: {
      bg: mode(activeBg, c2 + ".400")(props)
    }
  };
};
var variantLink = function variantLink2(props) {
  var c2 = props.colorScheme;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(c2 + ".500", c2 + ".200")(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(c2 + ".700", c2 + ".500")(props)
    }
  };
};
var variantUnstyled$2 = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0
};
var variants$9 = {
  ghost: variantGhost,
  outline: variantOutline$1,
  solid: variantSolid$1,
  link: variantLink,
  unstyled: variantUnstyled$2
};
var sizes$j = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 6
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2
  }
};
var defaultProps$k = {
  variant: "solid",
  size: "md",
  colorScheme: "gray"
};
var Button = {
  baseStyle: baseStyle$y,
  variants: variants$9,
  sizes: sizes$j,
  defaultProps: defaultProps$k
};
var baseStyleControl$1 = function baseStyleControl(props) {
  var c2 = props.colorScheme;
  return {
    w: "100%",
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(c2 + ".500", c2 + ".200")(props),
      borderColor: mode(c2 + ".500", c2 + ".200")(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(c2 + ".600", c2 + ".300")(props),
        borderColor: mode(c2 + ".600", c2 + ".300")(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(c2 + ".500", c2 + ".200")(props),
      borderColor: mode(c2 + ".500", c2 + ".200")(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
};
var baseStyleContainer$2 = {
  _disabled: {
    cursor: "not-allowed"
  }
};
var baseStyleLabel$3 = {
  userSelect: "none",
  _disabled: {
    opacity: 0.4
  }
};
var baseStyleIcon$4 = {
  transitionProperty: "transform",
  transitionDuration: "normal"
};
var baseStyle$x = function baseStyle2(props) {
  return {
    icon: baseStyleIcon$4,
    container: baseStyleContainer$2,
    control: baseStyleControl$1(props),
    label: baseStyleLabel$3
  };
};
var sizes$i = {
  sm: {
    control: {
      h: 3,
      w: 3
    },
    label: {
      fontSize: "sm"
    },
    icon: {
      fontSize: "0.45rem"
    }
  },
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    },
    icon: {
      fontSize: "0.625rem"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    },
    icon: {
      fontSize: "0.625rem"
    }
  }
};
var defaultProps$j = {
  size: "md",
  colorScheme: "blue"
};
var Checkbox = {
  parts: checkboxAnatomy.keys,
  baseStyle: baseStyle$x,
  sizes: sizes$i,
  defaultProps: defaultProps$j
};
var _lg$1;
var _md$1;
var _sm$1;
var $size$1 = cssVar2("close-button-size");
var baseStyle$w = function baseStyle3(props) {
  var hoverBg = mode("blackAlpha.100", "whiteAlpha.100")(props);
  var activeBg = mode("blackAlpha.200", "whiteAlpha.200")(props);
  return {
    w: [$size$1.reference],
    h: [$size$1.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none"
    },
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  };
};
var sizes$h = {
  lg: (_lg$1 = {}, _lg$1[$size$1.variable] = "40px", _lg$1.fontSize = "16px", _lg$1),
  md: (_md$1 = {}, _md$1[$size$1.variable] = "32px", _md$1.fontSize = "12px", _md$1),
  sm: (_sm$1 = {}, _sm$1[$size$1.variable] = "24px", _sm$1.fontSize = "10px", _sm$1)
};
var defaultProps$i = {
  size: "md"
};
var CloseButton = {
  baseStyle: baseStyle$w,
  sizes: sizes$h,
  defaultProps: defaultProps$i
};
var variants$8 = Badge.variants;
var defaultProps$h = Badge.defaultProps;
var baseStyle$v = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
};
var Code = {
  baseStyle: baseStyle$v,
  variants: variants$8,
  defaultProps: defaultProps$h
};
var baseStyle$u = {
  w: "100%",
  mx: "auto",
  maxW: "60ch",
  px: "1rem"
};
var Container3 = {
  baseStyle: baseStyle$u
};
var baseStyle$t = {
  opacity: 0.6,
  borderColor: "inherit"
};
var variantSolid4 = {
  borderStyle: "solid"
};
var variantDashed = {
  borderStyle: "dashed"
};
var variants$7 = {
  solid: variantSolid4,
  dashed: variantDashed
};
var defaultProps$g = {
  variant: "solid"
};
var Divider = {
  baseStyle: baseStyle$t,
  variants: variants$7,
  defaultProps: defaultProps$g
};
function getSize$2(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        h: "100vh"
      }
    };
  }
  return {
    dialog: {
      maxW: value
    }
  };
}
var baseStyleOverlay$1 = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
};
var baseStyleDialogContainer$1 = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
};
var baseStyleDialog$1 = function baseStyleDialog(props) {
  var isFullHeight = props.isFullHeight;
  return _extends7({}, isFullHeight && {
    height: "100vh"
  }, {
    zIndex: "modal",
    maxH: "100vh",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    boxShadow: mode("lg", "dark-lg")(props)
  });
};
var baseStyleHeader$2 = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton$3 = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};
var baseStyleBody$2 = {
  px: 6,
  py: 2,
  flex: 1,
  overflow: "auto"
};
var baseStyleFooter$2 = {
  px: 6,
  py: 4
};
var baseStyle$s = function baseStyle4(props) {
  return {
    overlay: baseStyleOverlay$1,
    dialogContainer: baseStyleDialogContainer$1,
    dialog: baseStyleDialog$1(props),
    header: baseStyleHeader$2,
    closeButton: baseStyleCloseButton$3,
    body: baseStyleBody$2,
    footer: baseStyleFooter$2
  };
};
var sizes$g = {
  xs: getSize$2("xs"),
  sm: getSize$2("md"),
  md: getSize$2("lg"),
  lg: getSize$2("2xl"),
  xl: getSize$2("4xl"),
  full: getSize$2("full")
};
var defaultProps$f = {
  size: "xs"
};
var Drawer = {
  parts: drawerAnatomy.keys,
  baseStyle: baseStyle$s,
  sizes: sizes$g,
  defaultProps: defaultProps$f
};
var baseStylePreview = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal"
};
var baseStyleInput = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: {
    boxShadow: "outline"
  },
  _placeholder: {
    opacity: 0.6
  }
};
var baseStyleTextarea = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: {
    boxShadow: "outline"
  },
  _placeholder: {
    opacity: 0.6
  }
};
var baseStyle$r = {
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
};
var Editable = {
  parts: editableAnatomy.keys,
  baseStyle: baseStyle$r
};
var baseStyleRequiredIndicator = function baseStyleRequiredIndicator2(props) {
  return {
    marginStart: 1,
    color: mode("red.500", "red.300")(props)
  };
};
var baseStyleHelperText = function baseStyleHelperText2(props) {
  return {
    mt: 2,
    color: mode("gray.500", "whiteAlpha.600")(props),
    lineHeight: "normal",
    fontSize: "sm"
  };
};
var baseStyle$q = function baseStyle5(props) {
  return {
    container: {
      width: "100%",
      position: "relative"
    },
    requiredIndicator: baseStyleRequiredIndicator(props),
    helperText: baseStyleHelperText(props)
  };
};
var Form = {
  parts: formAnatomy.keys,
  baseStyle: baseStyle$q
};
var baseStyleText = function baseStyleText2(props) {
  return {
    color: mode("red.500", "red.300")(props),
    mt: 2,
    fontSize: "sm",
    lineHeight: "normal"
  };
};
var baseStyleIcon$3 = function baseStyleIcon(props) {
  return {
    marginEnd: "0.5em",
    color: mode("red.500", "red.300")(props)
  };
};
var baseStyle$p = function baseStyle6(props) {
  return {
    text: baseStyleText(props),
    icon: baseStyleIcon$3(props)
  };
};
var FormError = {
  parts: formErrorAnatomy.keys,
  baseStyle: baseStyle$p
};
var baseStyle$o = {
  fontSize: "md",
  marginEnd: 3,
  mb: 2,
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
};
var FormLabel = {
  baseStyle: baseStyle$o
};
var baseStyle$n = {
  fontFamily: "heading",
  fontWeight: "bold"
};
var sizes$f = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
};
var defaultProps$e = {
  size: "xl"
};
var Heading = {
  baseStyle: baseStyle$n,
  sizes: sizes$f,
  defaultProps: defaultProps$e
};
var baseStyle$m = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal"
  }
};
var size = {
  lg: {
    fontSize: "lg",
    px: 4,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    px: 4,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    px: 3,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    px: 2,
    h: 6,
    borderRadius: "sm"
  }
};
var sizes$e = {
  lg: {
    field: size.lg,
    addon: size.lg
  },
  md: {
    field: size.md,
    addon: size.md
  },
  sm: {
    field: size.sm,
    addon: size.sm
  },
  xs: {
    field: size.xs,
    addon: size.xs
  }
};
function getDefaults(props) {
  var fc = props.focusBorderColor, ec = props.errorBorderColor;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props)
  };
}
var variantOutline3 = function variantOutline4(props) {
  var theme3 = props.theme;
  var _getDefaults = getDefaults(props), fc = _getDefaults.focusBorderColor, ec = _getDefaults.errorBorderColor;
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      },
      _invalid: {
        borderColor: getColor(theme3, ec),
        boxShadow: "0 0 0 1px " + getColor(theme3, ec)
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme3, fc),
        boxShadow: "0 0 0 1px " + getColor(theme3, fc)
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
};
var variantFilled = function variantFilled2(props) {
  var theme3 = props.theme;
  var _getDefaults2 = getDefaults(props), fc = _getDefaults2.focusBorderColor, ec = _getDefaults2.errorBorderColor;
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      },
      _invalid: {
        borderColor: getColor(theme3, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: getColor(theme3, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
};
var variantFlushed = function variantFlushed2(props) {
  var theme3 = props.theme;
  var _getDefaults3 = getDefaults(props), fc = _getDefaults3.focusBorderColor, ec = _getDefaults3.errorBorderColor;
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme3, ec),
        boxShadow: "0px 1px 0px 0px " + getColor(theme3, ec)
      },
      _focusVisible: {
        borderColor: getColor(theme3, fc),
        boxShadow: "0px 1px 0px 0px " + getColor(theme3, fc)
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent"
    }
  };
};
var variantUnstyled$1 = {
  field: {
    bg: "transparent",
    px: 0,
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: 0,
    height: "auto"
  }
};
var variants$6 = {
  outline: variantOutline3,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled$1
};
var defaultProps$d = {
  size: "md",
  variant: "outline"
};
var Input = {
  parts: inputAnatomy.keys,
  baseStyle: baseStyle$m,
  sizes: sizes$e,
  variants: variants$6,
  defaultProps: defaultProps$d
};
var baseStyle$l = function baseStyle7(props) {
  return {
    bg: mode("gray.100", "whiteAlpha")(props),
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap"
  };
};
var Kbd = {
  baseStyle: baseStyle$l
};
var baseStyle$k = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
};
var Link = {
  baseStyle: baseStyle$k
};
var baseStyleIcon$2 = {
  marginEnd: "0.5rem",
  display: "inline",
  verticalAlign: "text-bottom"
};
var baseStyle$j = {
  container: {},
  item: {},
  icon: baseStyleIcon$2
};
var List = {
  parts: listAnatomy.keys,
  baseStyle: baseStyle$j
};
var baseStyleList = function baseStyleList2(props) {
  return {
    bg: mode("#fff", "gray.700")(props),
    boxShadow: mode("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px"
  };
};
var baseStyleItem = function baseStyleItem2(props) {
  return {
    py: "0.4rem",
    px: "0.8rem",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _active: {
      bg: mode("gray.200", "whiteAlpha.200")(props)
    },
    _expanded: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};
var baseStyleGroupTitle = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
};
var baseStyleCommand = {
  opacity: 0.6
};
var baseStyleDivider = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6
};
var baseStyleButton = {
  transitionProperty: "common",
  transitionDuration: "normal"
};
var baseStyle$i = function baseStyle8(props) {
  return {
    button: baseStyleButton,
    list: baseStyleList(props),
    item: baseStyleItem(props),
    groupTitle: baseStyleGroupTitle,
    command: baseStyleCommand,
    divider: baseStyleDivider
  };
};
var Menu = {
  parts: menuAnatomy.keys,
  baseStyle: baseStyle$i
};
var baseStyleOverlay = {
  bg: "blackAlpha.600",
  zIndex: "modal"
};
var baseStyleDialogContainer = function baseStyleDialogContainer2(props) {
  var isCentered = props.isCentered, scrollBehavior = props.scrollBehavior;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto"
  };
};
var baseStyleDialog2 = function baseStyleDialog3(props) {
  var scrollBehavior = props.scrollBehavior;
  return {
    borderRadius: "md",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    my: "3.75rem",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    boxShadow: mode("lg", "dark-lg")(props)
  };
};
var baseStyleHeader$1 = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton$2 = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};
var baseStyleBody$1 = function baseStyleBody(props) {
  var scrollBehavior = props.scrollBehavior;
  return {
    px: 6,
    py: 2,
    flex: 1,
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
};
var baseStyleFooter$1 = {
  px: 6,
  py: 4
};
var baseStyle$h = function baseStyle9(props) {
  return {
    overlay: baseStyleOverlay,
    dialogContainer: baseStyleDialogContainer(props),
    dialog: baseStyleDialog2(props),
    header: baseStyleHeader$1,
    closeButton: baseStyleCloseButton$2,
    body: baseStyleBody$1(props),
    footer: baseStyleFooter$1
  };
};
function getSize$1(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        minH: "100vh",
        "@supports(min-height: -webkit-fill-available)": {
          minH: "-webkit-fill-available"
        },
        my: 0
      }
    };
  }
  return {
    dialog: {
      maxW: value
    }
  };
}
var sizes$d = {
  xs: getSize$1("xs"),
  sm: getSize$1("sm"),
  md: getSize$1("md"),
  lg: getSize$1("lg"),
  xl: getSize$1("xl"),
  "2xl": getSize$1("2xl"),
  "3xl": getSize$1("3xl"),
  "4xl": getSize$1("4xl"),
  "5xl": getSize$1("5xl"),
  "6xl": getSize$1("6xl"),
  full: getSize$1("full")
};
var defaultProps$c = {
  size: "md"
};
var Modal = {
  parts: modalAnatomy.keys,
  baseStyle: baseStyle$h,
  sizes: sizes$d,
  defaultProps: defaultProps$c
};
var _baseStyleRoot;
var _Input$baseStyle$fiel;
var _Input$baseStyle;
var variants$5 = Input.variants;
var defaultProps$b = Input.defaultProps;
var $stepperWidth = cssVar2("number-input-stepper-width");
var $inputPadding = cssVar2("number-input-input-padding");
var inputPaddingValue = calc2($stepperWidth).add("0.5rem").toString();
var baseStyleRoot$1 = (_baseStyleRoot = {}, _baseStyleRoot[$stepperWidth.variable] = "24px", _baseStyleRoot[$inputPadding.variable] = inputPaddingValue, _baseStyleRoot);
var baseStyleField$1 = (_Input$baseStyle$fiel = (_Input$baseStyle = Input.baseStyle) == null ? void 0 : _Input$baseStyle.field) != null ? _Input$baseStyle$fiel : {};
var baseStyleStepperGroup = {
  width: [$stepperWidth.reference]
};
var baseStyleStepper = function baseStyleStepper2(props) {
  return {
    borderStart: "1px solid",
    borderStartColor: mode("inherit", "whiteAlpha.300")(props),
    color: mode("inherit", "whiteAlpha.800")(props),
    _active: {
      bg: mode("gray.200", "whiteAlpha.300")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};
var baseStyle$g = function baseStyle10(props) {
  return {
    root: baseStyleRoot$1,
    field: baseStyleField$1,
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper(props)
  };
};
function getSize(size2) {
  var _sizeStyle$field$font, _sizeStyle$field;
  var sizeStyle = Input.sizes[size2];
  var radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  var _fontSize = (_sizeStyle$field$font = (_sizeStyle$field = sizeStyle.field) == null ? void 0 : _sizeStyle$field.fontSize) != null ? _sizeStyle$field$font : "md";
  var fontSize = typography2.fontSizes[_fontSize];
  return {
    field: _extends7({}, sizeStyle.field, {
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    }),
    stepper: {
      fontSize: calc2(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  };
}
var sizes$c = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg")
};
var NumberInput = {
  parts: numberInputAnatomy.keys,
  baseStyle: baseStyle$g,
  sizes: sizes$c,
  variants: variants$5,
  defaultProps: defaultProps$b
};
var _Input$variants$unsty$1;
var baseStyle$f = _extends7({}, Input.baseStyle.field, {
  textAlign: "center"
});
var sizes$b = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
};
var variants$4 = {
  outline: function outline2(props) {
    var _Input$variants$outli;
    return (_Input$variants$outli = Input.variants.outline(props).field) != null ? _Input$variants$outli : {};
  },
  flushed: function flushed(props) {
    var _Input$variants$flush;
    return (_Input$variants$flush = Input.variants.flushed(props).field) != null ? _Input$variants$flush : {};
  },
  filled: function filled(props) {
    var _Input$variants$fille;
    return (_Input$variants$fille = Input.variants.filled(props).field) != null ? _Input$variants$fille : {};
  },
  unstyled: (_Input$variants$unsty$1 = Input.variants.unstyled.field) != null ? _Input$variants$unsty$1 : {}
};
var defaultProps$a = Input.defaultProps;
var PinInput = {
  baseStyle: baseStyle$f,
  sizes: sizes$b,
  variants: variants$4,
  defaultProps: defaultProps$a
};
var $popperBg = cssVar2("popper-bg");
var $arrowBg$1 = cssVar2("popper-arrow-bg");
var $arrowShadowColor = cssVar2("popper-arrow-shadow-color");
var baseStylePopper = {
  zIndex: 10
};
var baseStyleContent = function baseStyleContent2(props) {
  var _ref;
  var bg = mode("white", "gray.700")(props);
  var shadowColor = mode("gray.200", "whiteAlpha.300")(props);
  return _ref = {}, _ref[$popperBg.variable] = "colors." + bg, _ref.bg = $popperBg.reference, _ref[$arrowBg$1.variable] = $popperBg.reference, _ref[$arrowShadowColor.variable] = "colors." + shadowColor, _ref.width = "xs", _ref.border = "1px solid", _ref.borderColor = "inherit", _ref.borderRadius = "md", _ref.boxShadow = "sm", _ref.zIndex = "inherit", _ref._focusVisible = {
    outline: 0,
    boxShadow: "outline"
  }, _ref;
};
var baseStyleHeader = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
};
var baseStyleBody2 = {
  px: 3,
  py: 2
};
var baseStyleFooter = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
};
var baseStyleCloseButton$1 = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
};
var baseStyle$e = function baseStyle11(props) {
  return {
    popper: baseStylePopper,
    content: baseStyleContent(props),
    header: baseStyleHeader,
    body: baseStyleBody2,
    footer: baseStyleFooter,
    arrow: {},
    closeButton: baseStyleCloseButton$1
  };
};
var Popover = {
  parts: popoverAnatomy.keys,
  baseStyle: baseStyle$e
};
function filledStyle(props) {
  var c2 = props.colorScheme, t2 = props.theme, isIndeterminate = props.isIndeterminate, hasStripe = props.hasStripe;
  var stripeStyle = mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
  var bgColor = mode(c2 + ".500", c2 + ".200")(props);
  var gradient = "linear-gradient(\n    to right,\n    transparent 0%,\n    " + getColor(t2, bgColor) + " 50%,\n    transparent 100%\n  )";
  var addStripe = !isIndeterminate && hasStripe;
  return _extends7({}, addStripe && stripeStyle, isIndeterminate ? {
    bgImage: gradient
  } : {
    bgColor
  });
}
var baseStyleLabel$2 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
};
var baseStyleTrack$2 = function baseStyleTrack(props) {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
};
var baseStyleFilledTrack$1 = function baseStyleFilledTrack(props) {
  return _extends7({
    transitionProperty: "common",
    transitionDuration: "slow"
  }, filledStyle(props));
};
var baseStyle$d = function baseStyle12(props) {
  return {
    label: baseStyleLabel$2,
    filledTrack: baseStyleFilledTrack$1(props),
    track: baseStyleTrack$2(props)
  };
};
var sizes$a = {
  xs: {
    track: {
      h: "0.25rem"
    }
  },
  sm: {
    track: {
      h: "0.5rem"
    }
  },
  md: {
    track: {
      h: "0.75rem"
    }
  },
  lg: {
    track: {
      h: "1rem"
    }
  }
};
var defaultProps$9 = {
  size: "md",
  colorScheme: "blue"
};
var Progress = {
  parts: progressAnatomy.keys,
  sizes: sizes$a,
  baseStyle: baseStyle$d,
  defaultProps: defaultProps$9
};
var baseStyleControl2 = function baseStyleControl3(props) {
  var _Checkbox$baseStyle = Checkbox.baseStyle(props), _Checkbox$baseStyle$c = _Checkbox$baseStyle.control, control = _Checkbox$baseStyle$c === void 0 ? {} : _Checkbox$baseStyle$c;
  return _extends7({}, control, {
    borderRadius: "full",
    _checked: _extends7({}, control["_checked"], {
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    })
  });
};
var baseStyle$c = function baseStyle13(props) {
  return {
    label: Checkbox.baseStyle(props).label,
    container: Checkbox.baseStyle(props).container,
    control: baseStyleControl2(props)
  };
};
var sizes$9 = {
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    }
  },
  sm: {
    control: {
      width: 3,
      height: 3
    },
    label: {
      fontSize: "sm"
    }
  }
};
var defaultProps$8 = {
  size: "md",
  colorScheme: "blue"
};
var Radio = {
  parts: radioAnatomy.keys,
  baseStyle: baseStyle$c,
  sizes: sizes$9,
  defaultProps: defaultProps$8
};
var baseStyleField = function baseStyleField2(props) {
  return _extends7({}, Input.baseStyle.field, {
    bg: mode("white", "gray.700")(props),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    "> option, > optgroup": {
      bg: mode("white", "gray.700")(props)
    }
  });
};
var baseStyleIcon$1 = {
  width: "1.5rem",
  height: "100%",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5
  }
};
var baseStyle$b = function baseStyle14(props) {
  return {
    field: baseStyleField(props),
    icon: baseStyleIcon$1
  };
};
var iconSpacing = {
  paddingInlineEnd: "2rem"
};
var sizes$8 = (0, import_lodash.default)({}, Input.sizes, {
  lg: {
    field: iconSpacing
  },
  md: {
    field: iconSpacing
  },
  sm: {
    field: iconSpacing
  },
  xs: {
    field: iconSpacing,
    icon: {
      insetEnd: "0.25rem"
    }
  }
});
var Select = {
  parts: selectAnatomy.keys,
  baseStyle: baseStyle$b,
  sizes: sizes$8,
  variants: Input.variants,
  defaultProps: Input.defaultProps
};
var fade = function fade2(startColor, endColor) {
  return keyframes({
    from: {
      borderColor: startColor,
      background: startColor
    },
    to: {
      borderColor: endColor,
      background: endColor
    }
  });
};
var baseStyle$a = function baseStyle15(props) {
  var defaultStartColor = mode("gray.100", "gray.800")(props);
  var defaultEndColor = mode("gray.400", "gray.600")(props);
  var _props$startColor = props.startColor, startColor = _props$startColor === void 0 ? defaultStartColor : _props$startColor, _props$endColor = props.endColor, endColor = _props$endColor === void 0 ? defaultEndColor : _props$endColor, speed = props.speed, theme3 = props.theme;
  var start2 = getColor(theme3, startColor);
  var end2 = getColor(theme3, endColor);
  return {
    opacity: 0.7,
    borderRadius: "2px",
    borderColor: start2,
    background: end2,
    animation: speed + "s linear infinite alternate " + fade(start2, end2)
  };
};
var Skeleton = {
  baseStyle: baseStyle$a
};
var baseStyle$9 = function baseStyle16(props) {
  return {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "1rem",
      position: "fixed",
      top: "1.5rem",
      insetStart: "1.5rem",
      bg: mode("white", "gray.700")(props)
    }
  };
};
var SkipLink = {
  baseStyle: baseStyle$9
};
function thumbOrientation(props) {
  return orient({
    orientation: props.orientation,
    vertical: {
      left: "50%",
      transform: "translateX(-50%)",
      _active: {
        transform: "translateX(-50%) scale(1.15)"
      }
    },
    horizontal: {
      top: "50%",
      transform: "translateY(-50%)",
      _active: {
        transform: "translateY(-50%) scale(1.15)"
      }
    }
  });
}
var baseStyleContainer$1 = function baseStyleContainer2(props) {
  var orientation = props.orientation;
  return _extends7({
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    }
  }, orient({
    orientation,
    vertical: {
      h: "100%"
    },
    horizontal: {
      w: "100%"
    }
  }));
};
var baseStyleTrack$1 = function baseStyleTrack2(props) {
  return {
    overflow: "hidden",
    borderRadius: "sm",
    bg: mode("gray.200", "whiteAlpha.200")(props),
    _disabled: {
      bg: mode("gray.300", "whiteAlpha.300")(props)
    }
  };
};
var baseStyleThumb$1 = function baseStyleThumb(props) {
  return _extends7({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  }, thumbOrientation(props));
};
var baseStyleFilledTrack2 = function baseStyleFilledTrack3(props) {
  var c2 = props.colorScheme;
  return {
    width: "inherit",
    height: "inherit",
    bg: mode(c2 + ".500", c2 + ".200")(props)
  };
};
var baseStyle$8 = function baseStyle17(props) {
  return {
    container: baseStyleContainer$1(props),
    track: baseStyleTrack$1(props),
    thumb: baseStyleThumb$1(props),
    filledTrack: baseStyleFilledTrack2(props)
  };
};
var sizeLg = function sizeLg2(props) {
  return {
    thumb: {
      w: "16px",
      h: "16px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
};
var sizeMd = function sizeMd2(props) {
  return {
    thumb: {
      w: "14px",
      h: "14px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
};
var sizeSm = function sizeSm2(props) {
  return {
    thumb: {
      w: "10px",
      h: "10px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "2px"
      },
      vertical: {
        w: "2px"
      }
    })
  };
};
var sizes$7 = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var defaultProps$7 = {
  size: "md",
  colorScheme: "blue"
};
var Slider = {
  parts: sliderAnatomy.keys,
  sizes: sizes$7,
  baseStyle: baseStyle$8,
  defaultProps: defaultProps$7
};
var _xs;
var _sm;
var _md;
var _lg;
var _xl;
var $size = cssVar2("spinner-size");
var baseStyle$7 = {
  width: [$size.reference],
  height: [$size.reference]
};
var sizes$6 = {
  xs: (_xs = {}, _xs[$size.variable] = "0.75rem", _xs),
  sm: (_sm = {}, _sm[$size.variable] = "1rem", _sm),
  md: (_md = {}, _md[$size.variable] = "1.5rem", _md),
  lg: (_lg = {}, _lg[$size.variable] = "2rem", _lg),
  xl: (_xl = {}, _xl[$size.variable] = "3rem", _xl)
};
var defaultProps$6 = {
  size: "md"
};
var Spinner = {
  baseStyle: baseStyle$7,
  sizes: sizes$6,
  defaultProps: defaultProps$6
};
var baseStyleLabel$1 = {
  fontWeight: "medium"
};
var baseStyleHelpText = {
  opacity: 0.8,
  marginBottom: 2
};
var baseStyleNumber = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
};
var baseStyleIcon2 = {
  marginEnd: 1,
  w: "14px",
  h: "14px",
  verticalAlign: "middle"
};
var baseStyle$6 = {
  container: {},
  label: baseStyleLabel$1,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon2
};
var sizes$5 = {
  md: {
    label: {
      fontSize: "sm"
    },
    helpText: {
      fontSize: "sm"
    },
    number: {
      fontSize: "2xl"
    }
  }
};
var defaultProps$5 = {
  size: "md"
};
var Stat = {
  parts: statAnatomy.keys,
  baseStyle: baseStyle$6,
  sizes: sizes$5,
  defaultProps: defaultProps$5
};
var _container2;
var _container3;
var _container4;
var $width = cssVar2("switch-track-width");
var $height = cssVar2("switch-track-height");
var $diff = cssVar2("switch-track-diff");
var diffValue = calc2.subtract($width, $height);
var $translateX = cssVar2("switch-thumb-x");
var baseStyleTrack3 = function baseStyleTrack4(props) {
  var c2 = props.colorScheme;
  return {
    borderRadius: "full",
    p: "2px",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    bg: mode("gray.300", "whiteAlpha.400")(props),
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      bg: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var baseStyleThumb2 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: "translateX(" + $translateX.reference + ")"
  }
};
var baseStyle$5 = function baseStyle18(props) {
  var _rtl, _container;
  return {
    container: (_container = {}, _container[$diff.variable] = diffValue, _container[$translateX.variable] = $diff.reference, _container._rtl = (_rtl = {}, _rtl[$translateX.variable] = calc2($diff).negate().toString(), _rtl), _container),
    track: baseStyleTrack3(props),
    thumb: baseStyleThumb2
  };
};
var sizes$4 = {
  sm: {
    container: (_container2 = {}, _container2[$width.variable] = "1.375rem", _container2[$height.variable] = "0.75rem", _container2)
  },
  md: {
    container: (_container3 = {}, _container3[$width.variable] = "1.875rem", _container3[$height.variable] = "1rem", _container3)
  },
  lg: {
    container: (_container4 = {}, _container4[$width.variable] = "2.875rem", _container4[$height.variable] = "1.5rem", _container4)
  }
};
var defaultProps$4 = {
  size: "md",
  colorScheme: "blue"
};
var Switch = {
  parts: switchAnatomy.keys,
  baseStyle: baseStyle$5,
  sizes: sizes$4,
  defaultProps: defaultProps$4
};
var baseStyle$4 = {
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
};
var numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
};
var variantSimple = function variantSimple2(props) {
  var c2 = props.colorScheme;
  return {
    th: _extends7({
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    td: _extends7({
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: {
            borderBottomWidth: 0
          }
        }
      }
    }
  };
};
var variantStripe = function variantStripe2(props) {
  var c2 = props.colorScheme;
  return {
    th: _extends7({
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    td: _extends7({
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(c2 + ".100", c2 + ".700")(props)
          },
          td: {
            background: mode(c2 + ".100", c2 + ".700")(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: {
            borderBottomWidth: 0
          }
        }
      }
    }
  };
};
var variants$3 = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: {}
};
var sizes$3 = {
  sm: {
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  },
  md: {
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  },
  lg: {
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  }
};
var defaultProps$3 = {
  variant: "simple",
  size: "md",
  colorScheme: "gray"
};
var Table = {
  parts: tableAnatomy.keys,
  baseStyle: baseStyle$4,
  variants: variants$3,
  sizes: sizes$3,
  defaultProps: defaultProps$3
};
var baseStyleRoot = function baseStyleRoot2(props) {
  var orientation = props.orientation;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
};
var baseStyleTab = function baseStyleTab2(props) {
  var isFitted = props.isFitted;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
};
var baseStyleTablist = function baseStyleTablist2(props) {
  var _props$align = props.align, align = _props$align === void 0 ? "start" : _props$align, orientation = props.orientation;
  var alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
};
var baseStyleTabpanel = {
  p: 4
};
var baseStyle$3 = function baseStyle19(props) {
  return {
    root: baseStyleRoot(props),
    tab: baseStyleTab(props),
    tablist: baseStyleTablist(props),
    tabpanel: baseStyleTabpanel
  };
};
var sizes$2 = {
  sm: {
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  },
  md: {
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  },
  lg: {
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  }
};
var variantLine = function variantLine2(props) {
  var _tablist, _tab;
  var c2 = props.colorScheme, orientation = props.orientation;
  var isVertical = orientation === "vertical";
  var borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
  var marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: (_tablist = {}, _tablist[borderProp] = "2px solid", _tablist.borderColor = "inherit", _tablist),
    tab: (_tab = {}, _tab[borderProp] = "2px solid", _tab.borderColor = "transparent", _tab[marginProp] = "-2px", _tab._selected = {
      color: mode(c2 + ".600", c2 + ".300")(props),
      borderColor: "currentColor"
    }, _tab._active = {
      bg: mode("gray.200", "whiteAlpha.300")(props)
    }, _tab._disabled = {
      _active: {
        bg: "none"
      }
    }, _tab)
  };
};
var variantEnclosed = function variantEnclosed2(props) {
  var c2 = props.colorScheme;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      _selected: {
        color: mode(c2 + ".600", c2 + ".300")(props),
        borderColor: "inherit",
        borderBottomColor: mode("white", "gray.800")(props)
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
};
var variantEnclosedColored = function variantEnclosedColored2(props) {
  var c2 = props.colorScheme;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      bg: mode("gray.50", "whiteAlpha.50")(props),
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        bg: mode("#fff", "gray.800")(props),
        color: mode(c2 + ".600", c2 + ".300")(props),
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
};
var variantSoftRounded = function variantSoftRounded2(props) {
  var c2 = props.colorScheme, theme3 = props.theme;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme3, c2 + ".700"),
        bg: getColor(theme3, c2 + ".100")
      }
    }
  };
};
var variantSolidRounded = function variantSolidRounded2(props) {
  var c2 = props.colorScheme;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode("gray.600", "inherit")(props),
      _selected: {
        color: mode("#fff", "gray.800")(props),
        bg: mode(c2 + ".600", c2 + ".300")(props)
      }
    }
  };
};
var variantUnstyled = {};
var variants$2 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled
};
var defaultProps$2 = {
  size: "md",
  variant: "line",
  colorScheme: "blue"
};
var Tabs = {
  parts: tabsAnatomy.keys,
  baseStyle: baseStyle$3,
  sizes: sizes$2,
  variants: variants$2,
  defaultProps: defaultProps$2
};
var baseStyleContainer3 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  borderRadius: "md",
  _focusVisible: {
    boxShadow: "outline"
  }
};
var baseStyleLabel = {
  lineHeight: 1.2,
  overflow: "visible"
};
var baseStyleCloseButton = {
  fontSize: "18px",
  w: "1.25rem",
  h: "1.25rem",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "0.375rem",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
};
var baseStyle$2 = {
  container: baseStyleContainer3,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton
};
var sizes$1 = {
  sm: {
    container: {
      minH: "1.25rem",
      minW: "1.25rem",
      fontSize: "xs",
      px: 2
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  },
  md: {
    container: {
      minH: "1.5rem",
      minW: "1.5rem",
      fontSize: "sm",
      px: 2
    }
  },
  lg: {
    container: {
      minH: 8,
      minW: 8,
      fontSize: "md",
      px: 3
    }
  }
};
var variants$1 = {
  subtle: function subtle(props) {
    return {
      container: Badge.variants.subtle(props)
    };
  },
  solid: function solid(props) {
    return {
      container: Badge.variants.solid(props)
    };
  },
  outline: function outline3(props) {
    return {
      container: Badge.variants.outline(props)
    };
  }
};
var defaultProps$1 = {
  size: "md",
  variant: "subtle",
  colorScheme: "gray"
};
var Tag = {
  parts: tagAnatomy.keys,
  variants: variants$1,
  baseStyle: baseStyle$2,
  sizes: sizes$1,
  defaultProps: defaultProps$1
};
var _Input$variants$unsty;
var _Input$sizes$xs$field;
var _Input$sizes$sm$field;
var _Input$sizes$md$field;
var _Input$sizes$lg$field;
var baseStyle$1 = _extends7({}, Input.baseStyle.field, {
  paddingY: "8px",
  minHeight: "80px",
  lineHeight: "short",
  verticalAlign: "top"
});
var variants = {
  outline: function outline4(props) {
    var _Input$variants$outli;
    return (_Input$variants$outli = Input.variants.outline(props).field) != null ? _Input$variants$outli : {};
  },
  flushed: function flushed2(props) {
    var _Input$variants$flush;
    return (_Input$variants$flush = Input.variants.flushed(props).field) != null ? _Input$variants$flush : {};
  },
  filled: function filled2(props) {
    var _Input$variants$fille;
    return (_Input$variants$fille = Input.variants.filled(props).field) != null ? _Input$variants$fille : {};
  },
  unstyled: (_Input$variants$unsty = Input.variants.unstyled.field) != null ? _Input$variants$unsty : {}
};
var sizes2 = {
  xs: (_Input$sizes$xs$field = Input.sizes.xs.field) != null ? _Input$sizes$xs$field : {},
  sm: (_Input$sizes$sm$field = Input.sizes.sm.field) != null ? _Input$sizes$sm$field : {},
  md: (_Input$sizes$md$field = Input.sizes.md.field) != null ? _Input$sizes$md$field : {},
  lg: (_Input$sizes$lg$field = Input.sizes.lg.field) != null ? _Input$sizes$lg$field : {}
};
var defaultProps = {
  size: "md",
  variant: "outline"
};
var Textarea = {
  baseStyle: baseStyle$1,
  sizes: sizes2,
  variants,
  defaultProps
};
var $bg = cssVar2("tooltip-bg");
var $arrowBg = cssVar2("popper-arrow-bg");
var baseStyle20 = function baseStyle21(props) {
  var _ref;
  var bg = mode("gray.700", "gray.300")(props);
  return _ref = {}, _ref[$bg.variable] = "colors." + bg, _ref.px = "8px", _ref.py = "2px", _ref.bg = [$bg.reference], _ref[$arrowBg.variable] = [$bg.reference], _ref.color = mode("whiteAlpha.900", "gray.900")(props), _ref.borderRadius = "sm", _ref.fontWeight = "medium", _ref.fontSize = "sm", _ref.boxShadow = "md", _ref.maxW = "320px", _ref.zIndex = "tooltip", _ref;
};
var Tooltip = {
  baseStyle: baseStyle20
};
var components = {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Checkbox,
  CloseButton,
  Code,
  Container: Container3,
  Divider,
  Drawer,
  Editable,
  Form,
  FormError,
  FormLabel,
  Heading,
  Input,
  Kbd,
  Link,
  List,
  Menu,
  Modal,
  NumberInput,
  PinInput,
  Popover,
  Progress,
  Radio,
  Select,
  Skeleton,
  SkipLink,
  Slider,
  Spinner,
  Stat,
  Switch,
  Table,
  Tabs,
  Tag,
  Textarea,
  Tooltip
};

// node_modules/@chakra-ui/theme/foundations/dist/chakra-ui-theme-foundations.esm.js
init_react();

// node_modules/@chakra-ui/theme/foundations/borders/dist/chakra-ui-theme-foundations-borders.esm.js
init_react();
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};

// node_modules/@chakra-ui/theme/foundations/breakpoints/dist/chakra-ui-theme-foundations-breakpoints.esm.js
init_react();
var breakpoints2 = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
});

// node_modules/@chakra-ui/theme/foundations/colors/dist/chakra-ui-theme-foundations-colors.esm.js
init_react();
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};

// node_modules/@chakra-ui/theme/foundations/radius/dist/chakra-ui-theme-foundations-radius.esm.js
init_react();
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};

// node_modules/@chakra-ui/theme/foundations/shadows/dist/chakra-ui-theme-foundations-shadows.esm.js
init_react();
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};

// node_modules/@chakra-ui/theme/foundations/transition/dist/chakra-ui-theme-foundations-transition.esm.js
init_react();
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition2 = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};

// node_modules/@chakra-ui/theme/foundations/z-index/dist/chakra-ui-theme-foundations-z-index.esm.js
init_react();
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};

// node_modules/@chakra-ui/theme/foundations/blur/dist/chakra-ui-theme-foundations-blur.esm.js
init_react();
var blur2 = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};

// node_modules/@chakra-ui/theme/foundations/dist/chakra-ui-theme-foundations.esm.js
var foundations = _extends7({
  breakpoints: breakpoints2,
  zIndices,
  radii,
  blur: blur2,
  colors
}, typography2, {
  sizes,
  shadows,
  space: spacing,
  borders,
  transition: transition2
});

// node_modules/@chakra-ui/theme/dist/chakra-ui-theme.esm.js
var semanticTokens = {
  colors: {
    "chakra-body-text": {
      _light: "gray.800",
      _dark: "whiteAlpha.900"
    },
    "chakra-body-bg": {
      _light: "white",
      _dark: "gray.800"
    },
    "chakra-border-color": {
      _light: "gray.200",
      _dark: "whiteAlpha.300"
    },
    "chakra-placeholder-color": {
      _light: "gray.500",
      _dark: "whiteAlpha.400"
    }
  }
};
var styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
      wordWrap: "break-word"
    }
  }
};
var styles$1 = styles;
var requiredChakraThemeKeys = ["borders", "breakpoints", "colors", "components", "config", "direction", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "shadows", "sizes", "space", "styles", "transition", "zIndices"];
function isChakraTheme(unit) {
  if (!isObject(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every(function(propertyName) {
    return Object.prototype.hasOwnProperty.call(unit, propertyName);
  });
}
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = _extends7({
  semanticTokens,
  direction
}, foundations, {
  components,
  styles: styles$1,
  config
});

// node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js
init_react();
var React20 = __toESM(require_react());

// node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js
init_react();
var React14 = __toESM(require_react());

// node_modules/@chakra-ui/spinner/dist/chakra-ui-spinner.esm.js
init_react();

// node_modules/@chakra-ui/visually-hidden/dist/chakra-ui-visually-hidden.esm.js
init_react();
var visuallyHiddenStyle = {
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
if (__DEV__) {
  VisuallyHidden.displayName = "VisuallyHidden";
}
var VisuallyHiddenInput = chakra("input", {
  baseStyle: visuallyHiddenStyle
});
if (__DEV__) {
  VisuallyHiddenInput.displayName = "VisuallyHiddenInput";
}

// node_modules/@chakra-ui/spinner/dist/chakra-ui-spinner.esm.js
var React12 = __toESM(require_react());
function _extends9() {
  _extends9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends9.apply(this, arguments);
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded4 = ["label", "thickness", "speed", "emptyColor", "className"];
var spin = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var Spinner2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyleConfig("Spinner", props);
  var _omitThemingProps = omitThemingProps(props), _omitThemingProps$lab = _omitThemingProps.label, label = _omitThemingProps$lab === void 0 ? "Loading..." : _omitThemingProps$lab, _omitThemingProps$thi = _omitThemingProps.thickness, thickness = _omitThemingProps$thi === void 0 ? "2px" : _omitThemingProps$thi, _omitThemingProps$spe = _omitThemingProps.speed, speed = _omitThemingProps$spe === void 0 ? "0.45s" : _omitThemingProps$spe, _omitThemingProps$emp = _omitThemingProps.emptyColor, emptyColor = _omitThemingProps$emp === void 0 ? "transparent" : _omitThemingProps$emp, className = _omitThemingProps.className, rest = _objectWithoutPropertiesLoose4(_omitThemingProps, _excluded4);
  var _className = cx("chakra-spinner", className);
  var spinnerStyles = _extends9({
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: spin + " " + speed + " linear infinite"
  }, styles2);
  return /* @__PURE__ */ React12.createElement(chakra.div, _extends9({
    ref,
    __css: spinnerStyles,
    className: _className
  }, rest), label && /* @__PURE__ */ React12.createElement(VisuallyHidden, null, label));
});
if (__DEV__) {
  Spinner2.displayName = "Spinner";
}

// node_modules/@chakra-ui/icon/dist/chakra-ui-icon.esm.js
init_react();
var React13 = __toESM(require_react());
function _extends10() {
  _extends10 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends10.apply(this, arguments);
}
function _objectWithoutPropertiesLoose5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded5 = ["as", "viewBox", "color", "focusable", "children", "className", "__css"];
var fallbackIcon = {
  path: /* @__PURE__ */ React13.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ React13.createElement("path", {
    strokeLinecap: "round",
    fill: "none",
    d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
  }), /* @__PURE__ */ React13.createElement("path", {
    fill: "currentColor",
    strokeLinecap: "round",
    d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
  }), /* @__PURE__ */ React13.createElement("circle", {
    fill: "none",
    strokeMiterlimit: "10",
    cx: "12",
    cy: "12",
    r: "11.25"
  })),
  viewBox: "0 0 24 24"
};
var Icon = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var element = props.as, viewBox = props.viewBox, _props$color = props.color, color3 = _props$color === void 0 ? "currentColor" : _props$color, _props$focusable = props.focusable, focusable = _props$focusable === void 0 ? false : _props$focusable, children = props.children, className = props.className, __css = props.__css, rest = _objectWithoutPropertiesLoose5(props, _excluded5);
  var _className = cx("chakra-icon", className);
  var styles2 = _extends10({
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: color3
  }, __css);
  var shared = {
    ref,
    focusable,
    className: _className,
    __css: styles2
  };
  var _viewBox = viewBox != null ? viewBox : fallbackIcon.viewBox;
  if (element && typeof element !== "string") {
    return /* @__PURE__ */ React13.createElement(chakra.svg, _extends10({
      as: element
    }, shared, rest));
  }
  var _path = children != null ? children : fallbackIcon.path;
  return /* @__PURE__ */ React13.createElement(chakra.svg, _extends10({
    verticalAlign: "middle",
    viewBox: _viewBox
  }, shared, rest), _path);
});
if (__DEV__) {
  Icon.displayName = "Icon";
}
var Icon$1 = Icon;
function createIcon(options) {
  var _options$viewBox = options.viewBox, viewBox = _options$viewBox === void 0 ? "0 0 24 24" : _options$viewBox, pathDefinition = options.d, displayName = options.displayName, _options$defaultProps = options.defaultProps, defaultProps2 = _options$defaultProps === void 0 ? {} : _options$defaultProps;
  var path = React13.Children.toArray(options.path);
  var Comp = /* @__PURE__ */ forwardRef2(function(props, ref) {
    return /* @__PURE__ */ React13.createElement(Icon, _extends10({
      ref,
      viewBox
    }, defaultProps2, props), path.length ? path : /* @__PURE__ */ React13.createElement("path", {
      fill: "currentColor",
      d: pathDefinition
    }));
  });
  if (__DEV__) {
    Comp.displayName = displayName;
  }
  return Comp;
}

// node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js
function _extends11() {
  _extends11 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends11.apply(this, arguments);
}
function _objectWithoutPropertiesLoose6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var CheckIcon = function CheckIcon2(props) {
  return /* @__PURE__ */ React14.createElement(Icon, _extends11({
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ React14.createElement("path", {
    fill: "currentColor",
    d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
  }));
};
var InfoIcon = function InfoIcon2(props) {
  return /* @__PURE__ */ React14.createElement(Icon, _extends11({
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ React14.createElement("path", {
    fill: "currentColor",
    d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
  }));
};
var WarningIcon = function WarningIcon2(props) {
  return /* @__PURE__ */ React14.createElement(Icon, _extends11({
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ React14.createElement("path", {
    fill: "currentColor",
    d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
  }));
};
var _excluded6 = ["status"];
var _createStylesContext = createStylesContext("Alert");
var StylesProvider2 = _createStylesContext[0];
var useStyles2 = _createStylesContext[1];
var STATUSES = {
  info: {
    icon: InfoIcon,
    colorScheme: "blue"
  },
  warning: {
    icon: WarningIcon,
    colorScheme: "orange"
  },
  success: {
    icon: CheckIcon,
    colorScheme: "green"
  },
  error: {
    icon: WarningIcon,
    colorScheme: "red"
  },
  loading: {
    icon: Spinner2,
    colorScheme: "blue"
  }
};
var _createContext3 = createContext2({
  name: "AlertContext",
  errorMessage: "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"
});
var AlertProvider = _createContext3[0];
var useAlertContext = _createContext3[1];
var Alert2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _props$colorScheme;
  var _omitThemingProps = omitThemingProps(props), _omitThemingProps$sta = _omitThemingProps.status, status = _omitThemingProps$sta === void 0 ? "info" : _omitThemingProps$sta, rest = _objectWithoutPropertiesLoose6(_omitThemingProps, _excluded6);
  var colorScheme = (_props$colorScheme = props.colorScheme) != null ? _props$colorScheme : STATUSES[status].colorScheme;
  var styles2 = useMultiStyleConfig("Alert", _extends11({}, props, {
    colorScheme
  }));
  var alertStyles = _extends11({
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden"
  }, styles2.container);
  return /* @__PURE__ */ React14.createElement(AlertProvider, {
    value: {
      status
    }
  }, /* @__PURE__ */ React14.createElement(StylesProvider2, {
    value: styles2
  }, /* @__PURE__ */ React14.createElement(chakra.div, _extends11({
    role: "alert",
    ref
  }, rest, {
    className: cx("chakra-alert", props.className),
    __css: alertStyles
  }))));
});
var AlertTitle = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyles2();
  return /* @__PURE__ */ React14.createElement(chakra.div, _extends11({
    ref
  }, props, {
    className: cx("chakra-alert__title", props.className),
    __css: styles2.title
  }));
});
var AlertDescription = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyles2();
  var descriptionStyles = _extends11({
    display: "inline"
  }, styles2.description);
  return /* @__PURE__ */ React14.createElement(chakra.div, _extends11({
    ref
  }, props, {
    className: cx("chakra-alert__desc", props.className),
    __css: descriptionStyles
  }));
});
var AlertIcon = function AlertIcon2(props) {
  var _useAlertContext = useAlertContext(), status = _useAlertContext.status;
  var BaseIcon = STATUSES[status].icon;
  var styles2 = useStyles2();
  var css3 = status === "loading" ? styles2.spinner : styles2.icon;
  return /* @__PURE__ */ React14.createElement(chakra.span, _extends11({
    display: "inherit"
  }, props, {
    className: cx("chakra-alert__icon", props.className),
    __css: css3
  }), props.children || /* @__PURE__ */ React14.createElement(BaseIcon, {
    h: "100%",
    w: "100%"
  }));
};

// node_modules/@chakra-ui/close-button/dist/chakra-ui-close-button.esm.js
init_react();
var React15 = __toESM(require_react());
function _objectWithoutPropertiesLoose7(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends12() {
  _extends12 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends12.apply(this, arguments);
}
var _excluded7 = ["children", "isDisabled", "__css"];
var CloseIcon = function CloseIcon2(props) {
  return /* @__PURE__ */ React15.createElement(Icon, _extends12({
    focusable: "false",
    "aria-hidden": true
  }, props), /* @__PURE__ */ React15.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
};
var CloseButton2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyleConfig("CloseButton", props);
  var _omitThemingProps = omitThemingProps(props), children = _omitThemingProps.children, isDisabled2 = _omitThemingProps.isDisabled, __css = _omitThemingProps.__css, rest = _objectWithoutPropertiesLoose7(_omitThemingProps, _excluded7);
  var baseStyle23 = {
    outline: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  };
  return /* @__PURE__ */ React15.createElement(chakra.button, _extends12({
    type: "button",
    "aria-label": "Close",
    ref,
    disabled: isDisabled2,
    __css: _extends12({}, baseStyle23, styles2, __css)
  }, rest), children || /* @__PURE__ */ React15.createElement(CloseIcon, {
    width: "1em",
    height: "1em"
  }));
});
if (__DEV__) {
  CloseButton2.displayName = "CloseButton";
}

// node_modules/framer-motion/dist/es/index.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/motion.mjs
init_react();

// node_modules/tslib/modules/index.js
init_react();
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
} = import_tslib.default;

// node_modules/framer-motion/dist/es/motion/index.mjs
init_react();
var React17 = __toESM(require_react(), 1);
var import_react26 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/motion/features/use-features.mjs
init_react();
var React16 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/process.mjs
init_react();
var defaultEnvironment = "production";
var env = typeof process === "undefined" || process.env === void 0 ? defaultEnvironment : "development";

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
init_react();
var createDefinition = function(propNames2) {
  return {
    isEnabled: function(props) {
      return propNames2.some(function(name) {
        return !!props[name];
      });
    }
  };
};
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: createDefinition([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function loadFeatures(features) {
  for (var key in features) {
    if (features[key] === null)
      continue;
    if (key === "projectionNodeConstructor") {
      featureDefinitions.projectionNodeConstructor = features[key];
    } else {
      featureDefinitions[key].Component = features[key];
    }
  }
}

// node_modules/hey-listen/dist/hey-listen.es.js
init_react();
var warning = function() {
};
var invariant = function() {
};
if (true) {
  warning = function(check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = function(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
init_react();
var import_react11 = __toESM(require_react(), 1);
var LazyContext = (0, import_react11.createContext)({ strict: false });

// node_modules/framer-motion/dist/es/motion/features/use-features.mjs
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
function useFeatures(props, visualElement2, preloadedFeatures) {
  var features = [];
  var lazyContext = (0, import_react12.useContext)(LazyContext);
  if (!visualElement2)
    return null;
  if (env !== "production" && preloadedFeatures && lazyContext.strict) {
    invariant(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  }
  for (var i = 0; i < numFeatures; i++) {
    var name_1 = featureNames[i];
    var _a = featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
    if (isEnabled(props) && Component) {
      features.push(React16.createElement(Component, __assign({ key: name_1 }, props, { visualElement: visualElement2 })));
    }
  }
  return features;
}

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
init_react();
var import_react13 = __toESM(require_react(), 1);
var MotionConfigContext = (0, import_react13.createContext)({
  transformPagePoint: function(p) {
    return p;
  },
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
init_react();
var import_react14 = __toESM(require_react(), 1);
var MotionContext = (0, import_react14.createContext)({});
function useVisualElementContext() {
  return (0, import_react14.useContext)(MotionContext).visualElement;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
init_react();
var import_react18 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
init_react();
var import_react15 = __toESM(require_react(), 1);
var PresenceContext = (0, import_react15.createContext)(null);

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
init_react();
var import_react16 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
init_react();
var isBrowser2 = typeof document !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser2 ? import_react16.useLayoutEffect : import_react16.useEffect;

// node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs
init_react();
var import_react17 = __toESM(require_react(), 1);
var prefersReducedMotion = { current: null };
var hasDetected = false;
function initPrefersReducedMotion() {
  hasDetected = true;
  if (!isBrowser2)
    return;
  if (window.matchMedia) {
    var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
    var setReducedMotionPreferences = function() {
      return prefersReducedMotion.current = motionMediaQuery_1.matches;
    };
    motionMediaQuery_1.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}
function useReducedMotion() {
  !hasDetected && initPrefersReducedMotion();
  var _a = __read((0, import_react17.useState)(prefersReducedMotion.current), 1), shouldReduceMotion = _a[0];
  return shouldReduceMotion;
}
function useReducedMotionConfig() {
  var reducedMotionPreference = useReducedMotion();
  var reducedMotion = (0, import_react17.useContext)(MotionConfigContext).reducedMotion;
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component, visualState, props, createVisualElement) {
  var lazyContext = (0, import_react18.useContext)(LazyContext);
  var parent = useVisualElementContext();
  var presenceContext = (0, import_react18.useContext)(PresenceContext);
  var shouldReduceMotion = useReducedMotionConfig();
  var visualElementRef = (0, import_react18.useRef)(void 0);
  if (!createVisualElement)
    createVisualElement = lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent,
      props,
      presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
      blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
      shouldReduceMotion
    });
  }
  var visualElement2 = visualElementRef.current;
  useIsomorphicLayoutEffect(function() {
    visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
  });
  (0, import_react18.useEffect)(function() {
    var _a;
    (_a = visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
  });
  useIsomorphicLayoutEffect(function() {
    return function() {
      return visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.notifyUnmount();
    };
  }, []);
  return visualElement2;
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
init_react();
var import_react19 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
init_react();
function isRefObject2(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement2, externalRef) {
  return (0, import_react19.useCallback)(function(instance) {
    var _a;
    instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
    if (visualElement2) {
      instance ? visualElement2.mount(instance) : visualElement2.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject2(externalRef)) {
        externalRef.current = instance;
      }
    }
  }, [visualElement2]);
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
init_react();
var import_react20 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
init_react();

// node_modules/framer-motion/dist/es/render/utils/variants.mjs
init_react();
function isVariantLabels(v) {
  return Array.isArray(v);
}
function isVariantLabel(v) {
  return typeof v === "string" || isVariantLabels(v);
}
function getCurrent(visualElement2) {
  var current = {};
  visualElement2.forEachValue(function(value, key) {
    return current[key] = value.get();
  });
  return current;
}
function getVelocity(visualElement2) {
  var velocity = {};
  visualElement2.forEachValue(function(value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
  var _a;
  if (currentValues === void 0) {
    currentValues = {};
  }
  if (currentVelocity === void 0) {
    currentVelocity = {};
  }
  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}
function resolveVariant(visualElement2, definition, custom) {
  var props = visualElement2.getProps();
  return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity(visualElement2));
}
function checkIfControllingVariants(props) {
  var _a;
  return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}
function checkIfVariantNode(props) {
  return Boolean(checkIfControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (checkIfControllingVariants(props)) {
    var initial2 = props.initial, animate3 = props.animate;
    return {
      initial: initial2 === false || isVariantLabel(initial2) ? initial2 : void 0,
      animate: isVariantLabel(animate3) ? animate3 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  var _a = getCurrentTreeVariants(props, (0, import_react20.useContext)(MotionContext)), initial2 = _a.initial, animate3 = _a.animate;
  return (0, import_react20.useMemo)(function() {
    return { initial: initial2, animate: animate3 };
  }, [variantLabelsAsDependency(initial2), variantLabelsAsDependency(animate3)]);
}
function variantLabelsAsDependency(prop2) {
  return Array.isArray(prop2) ? prop2.join(" ") : prop2;
}

// node_modules/framer-motion/dist/es/projection/node/id.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
init_react();
var import_react21 = __toESM(require_react(), 1);
function useConstant(init) {
  var ref = (0, import_react21.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
init_react();

// node_modules/framer-motion/node_modules/framesync/dist/es/index.mjs
init_react();

// node_modules/framer-motion/node_modules/framesync/dist/es/on-next-frame.mjs
init_react();
var defaultTimestep2 = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame2 = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep2);

// node_modules/framer-motion/node_modules/framesync/dist/es/create-render-step.mjs
init_react();
function createRenderStep2(runNextFrame3) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing3 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing3;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing3)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index2 = toRunNextFrame.indexOf(callback);
      if (index2 !== -1)
        toRunNextFrame.splice(index2, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing3) {
        flushNextFrame = true;
        return;
      }
      isProcessing3 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame3();
          }
        }
      }
      isProcessing3 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// node_modules/framer-motion/node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep2(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process3, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process3, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync2 = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep2 : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame2(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame2(processFrame);
};
var getFrameData2 = () => frame;
var es_default2 = sync;

// node_modules/popmotion/dist/es/index.mjs
init_react();

// node_modules/popmotion/dist/es/animations/index.mjs
init_react();

// node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
init_react();

// node_modules/popmotion/dist/es/animations/generators/spring.mjs
init_react();

// node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
init_react();

// node_modules/popmotion/dist/es/utils/clamp.mjs
init_react();
var clamp = (min2, max2, v) => Math.min(Math.max(v, min2), max2);

// node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  warning(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, duration / 1e3);
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c2 = Math.exp(-delta);
      return safeMin - a2 / b2 * c2;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a2 * b2;
    };
    derivative = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b2;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/popmotion/dist/es/animations/generators/spring.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys2) {
  return keys2.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring(_a) {
  var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state2 = { done: false, value: from };
  let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;
  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
    }
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t2) + initialDelta * Math.cos(angularFreq * t2));
      };
      resolveVelocity = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t2) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t2)) - envelope * (Math.cos(angularFreq * t2) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t2));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t2) => to - Math.exp(-undampedAngularFreq * t2) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t2);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        const freqForT = Math.min(dampedAngularFreq * t2, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t2) => {
      const current = resolveSpring(t2);
      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t2) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state2.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state2.done = t2 >= duration;
      }
      state2.value = state2.done ? to : current;
      return state2;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}
spring.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";
var zero = (_t) => 0;

// node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
init_react();

// node_modules/popmotion/dist/es/utils/interpolate.mjs
init_react();

// node_modules/popmotion/dist/es/utils/progress.mjs
init_react();
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// node_modules/popmotion/dist/es/utils/mix.mjs
init_react();
var mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;

// node_modules/popmotion/dist/es/utils/mix-color.mjs
init_react();

// node_modules/style-value-types/dist/es/index.mjs
init_react();

// node_modules/style-value-types/dist/es/numbers/index.mjs
init_react();

// node_modules/style-value-types/dist/es/utils.mjs
init_react();
var clamp2 = (min2, max2) => (v) => Math.max(Math.min(v, max2), min2);
var sanitize = (v) => v % 1 ? Number(v.toFixed(5)) : v;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString2(v) {
  return typeof v === "string";
}

// node_modules/style-value-types/dist/es/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = Object.assign(Object.assign({}, number), { transform: clamp2(0, 1) });
var scale = Object.assign(Object.assign({}, number), { default: 1 });

// node_modules/style-value-types/dist/es/numbers/units.mjs
init_react();
var createUnitType = (unit) => ({
  test: (v) => isString2(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px3 = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });

// node_modules/style-value-types/dist/es/color/hsla.mjs
init_react();

// node_modules/style-value-types/dist/es/color/utils.mjs
init_react();
var isColorString = (type, testProp) => (v) => {
  return Boolean(isString2(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (!isString2(v))
    return v;
  const [a2, b2, c2, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a2),
    [bName]: parseFloat(b2),
    [cName]: parseFloat(c2),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/style-value-types/dist/es/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/style-value-types/dist/es/color/rgba.mjs
init_react();
var clampRgbUnit = clamp2(0, 255);
var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/style-value-types/dist/es/color/hex.mjs
init_react();
function parseHex(v) {
  let r = "";
  let g = "";
  let b2 = "";
  let a2 = "";
  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b2 = v.substr(5, 2);
    a2 = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b2 = v.substr(3, 1);
    a2 = v.substr(4, 1);
    r += r;
    g += g;
    b2 += b2;
    a2 += a2;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b2, 16),
    alpha: a2 ? parseInt(a2, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/style-value-types/dist/es/color/index.mjs
init_react();
var color2 = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return isString2(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/style-value-types/dist/es/complex/index.mjs
init_react();
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
  var _a, _b, _c, _d;
  return isNaN(v) && isString2(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse(v) {
  if (typeof v === "number")
    v = `${v}`;
  const values = [];
  let numColors = 0;
  const colors2 = v.match(colorRegex);
  if (colors2) {
    numColors = colors2.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors2.map(color2.parse));
  }
  const numbers = v.match(floatRegex);
  if (numbers) {
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }
  return { values, numColors, tokenised: v };
}
function parse(v) {
  return analyse(v).values;
}
function createTransformer(v) {
  const { values, numColors, tokenised } = analyse(v);
  const numValues = values.length;
  return (v2) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color2.transform(v2[i]) : sanitize(v2[i]));
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parse(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = { test, parse, createTransformer, getAnimatableNone };

// node_modules/style-value-types/dist/es/complex/filter.mjs
init_react();
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  let [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter3 = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v) => {
  const functions = v.match(functionRegex);
  return functions ? functions.map(applyDefaultFilter).join(" ") : v;
} });

// node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
init_react();
function hueToRgb(p, q, t2) {
  if (t2 < 0)
    t2 += 1;
  if (t2 > 1)
    t2 -= 1;
  if (t2 < 1 / 6)
    return p + (q - p) * 6 * t2;
  if (t2 < 1 / 2)
    return q;
  if (t2 < 2 / 3)
    return p + (q - p) * (2 / 3 - t2) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/popmotion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
var notAnimatable = (color3) => `'${color3}' is not an animatable color. Use the equivalent color code instead.`;
var mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  invariant(!!fromColorType, notAnimatable(from));
  invariant(!!toColorType, notAnimatable(to));
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);
  if (fromColorType === hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba;
  }
  if (toColorType === hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba;
  }
  const blended = Object.assign({}, fromColor);
  return (v) => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

// node_modules/popmotion/dist/es/utils/mix-complex.mjs
init_react();

// node_modules/popmotion/dist/es/utils/inc.mjs
init_react();
var isNum = (v) => typeof v === "number";

// node_modules/popmotion/dist/es/utils/pipe.mjs
init_react();
var combineFunctions = (a2, b2) => (v) => b2(a2(v));
var pipe3 = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/popmotion/dist/es/utils/mix-complex.mjs
function getMixer(origin, target) {
  if (isNum(origin)) {
    return (v) => mix(origin, target, v);
  } else if (color2.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return (v) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
function analyse2(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;
  for (let i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse2(origin);
  const targetStats = analyse2(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe3(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return (p) => `${p > 0 ? target : origin}`;
  }
};

// node_modules/popmotion/dist/es/utils/interpolate.mjs
var mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    if (color2.test(v)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = pipe3(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate([from, to], [mixer]) {
  return (v) => mixer(progress(from, to, v));
}
function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return (v) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;
    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      let i = 1;
      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i - 1;
    }
    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/popmotion/dist/es/easing/index.mjs
init_react();

// node_modules/popmotion/dist/es/easing/utils.mjs
init_react();
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
var createExpoIn = (power) => (p) => Math.pow(p, power);
var createBackIn = (power) => (p) => p * p * ((power + 1) * p - power);
var createAnticipate = (power) => {
  const backEasing = createBackIn(power);
  return (p) => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

// node_modules/popmotion/dist/es/easing/index.mjs
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;
var linear = (p) => p;
var easeIn = createExpoIn(2);
var easeOut = reverseEasing(easeIn);
var easeInOut = mirrorEasing(easeIn);
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);
var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = reverseEasing(backIn);
var backInOut = mirrorEasing(backIn);
var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;
var bounceOut = (p) => {
  if (p === 1 || p === 0)
    return p;
  const p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = reverseEasing(bounceOut);
var bounceInOut = (p) => p < 0.5 ? 0.5 * (1 - bounceOut(1 - p * 2)) : 0.5 * bounceOut(p * 2 - 1) + 0.5;

// node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset2, duration) {
  return offset2.map((o) => o * duration);
}
function keyframes2({ from = 0, to = 1, ease, offset: offset2, duration = 300 }) {
  const state2 = { done: false, value: from };
  const values = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset2 && offset2.length === values.length ? offset2 : defaultOffset(values), duration);
  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }
  let interpolator = createInterpolator();
  return {
    next: (t2) => {
      state2.value = interpolator(t2);
      state2.done = t2 >= duration;
      return state2;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}

// node_modules/popmotion/dist/es/animations/generators/decay.mjs
init_react();
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
  const state2 = { done: false, value: from };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - from;
  return {
    next: (t2) => {
      const delta = -amplitude * Math.exp(-t2 / timeConstant);
      state2.done = !(delta > restDelta || delta < -restDelta);
      state2.value = state2.done ? target : target + delta;
      return state2;
    },
    flipTarget: () => {
    }
  };
}

// node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
var types = { keyframes: keyframes2, spring, decay };
function detectAnimationFromOptions(config3) {
  if (Array.isArray(config3.to)) {
    return keyframes2;
  } else if (types[config3.type]) {
    return types[config3.type];
  }
  const keys2 = new Set(Object.keys(config3));
  if (keys2.has("ease") || keys2.has("duration") && !keys2.has("dampingRatio")) {
    return keyframes2;
  } else if (keys2.has("dampingRatio") || keys2.has("stiffness") || keys2.has("mass") || keys2.has("damping") || keys2.has("restSpeed") || keys2.has("restDelta")) {
    return spring;
  }
  return keyframes2;
}

// node_modules/popmotion/node_modules/framesync/dist/es/index.mjs
init_react();

// node_modules/popmotion/node_modules/framesync/dist/es/on-next-frame.mjs
init_react();
var defaultTimestep3 = 1 / 60 * 1e3;
var getCurrentTime2 = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame3 = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime2()), defaultTimestep3);

// node_modules/popmotion/node_modules/framesync/dist/es/create-render-step.mjs
init_react();
function createRenderStep3(runNextFrame3) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing3 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing3;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing3)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index2 = toRunNextFrame.indexOf(callback);
      if (index2 !== -1)
        toRunNextFrame.splice(index2, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing3) {
        flushNextFrame = true;
        return;
      }
      isProcessing3 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame3();
          }
        }
      }
      isProcessing3 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// node_modules/popmotion/node_modules/framesync/dist/es/index.mjs
var maxElapsed2 = 40;
var useDefaultElapsed2 = true;
var runNextFrame2 = false;
var isProcessing2 = false;
var frame2 = {
  delta: 0,
  timestamp: 0
};
var stepsOrder2 = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps2 = stepsOrder2.reduce((acc, key) => {
  acc[key] = createRenderStep3(() => runNextFrame2 = true);
  return acc;
}, {});
var sync2 = stepsOrder2.reduce((acc, key) => {
  const step = steps2[key];
  acc[key] = (process3, keepAlive = false, immediate = false) => {
    if (!runNextFrame2)
      startLoop2();
    return step.schedule(process3, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync3 = stepsOrder2.reduce((acc, key) => {
  acc[key] = steps2[key].cancel;
  return acc;
}, {});
var flushSync2 = stepsOrder2.reduce((acc, key) => {
  acc[key] = () => steps2[key].process(frame2);
  return acc;
}, {});
var processStep2 = (stepId) => steps2[stepId].process(frame2);
var processFrame2 = (timestamp) => {
  runNextFrame2 = false;
  frame2.delta = useDefaultElapsed2 ? defaultTimestep3 : Math.max(Math.min(timestamp - frame2.timestamp, maxElapsed2), 1);
  frame2.timestamp = timestamp;
  isProcessing2 = true;
  stepsOrder2.forEach(processStep2);
  isProcessing2 = false;
  if (runNextFrame2) {
    useDefaultElapsed2 = false;
    onNextFrame3(processFrame2);
  }
};
var startLoop2 = () => {
  runNextFrame2 = true;
  useDefaultElapsed2 = true;
  if (!isProcessing2)
    onNextFrame3(processFrame2);
};
var getFrameData3 = () => frame2;
var es_default3 = sync2;

// node_modules/popmotion/dist/es/animations/utils/elapsed.mjs
init_react();
function loopElapsed(elapsed, duration, delay = 0) {
  return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}

// node_modules/popmotion/dist/es/animations/index.mjs
var framesync = (update) => {
  const passTimestamp = ({ delta }) => update(delta);
  return {
    start: () => es_default3.update(passTimestamp, true),
    stop: () => cancelSync3.update(passTimestamp)
  };
};
function animate(_a) {
  var _b, _c;
  var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }
  const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror")
        animation.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }
  function update(delta) {
    if (!isForwardPlayback)
      delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      const state2 = animation.next(Math.max(0, elapsed));
      latest = state2.value;
      if (interpolateFromNumber)
        latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state2.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0)
        computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}

// node_modules/popmotion/dist/es/animations/inertia.mjs
init_react();

// node_modules/popmotion/dist/es/utils/velocity-per-second.mjs
init_react();
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/popmotion/dist/es/animations/inertia.mjs
function inertia({ from = 0, velocity = 0, min: min2, max: max2, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
  let currentAnimation;
  function isOutOfBounds(v) {
    return min2 !== void 0 && v < min2 || max2 !== void 0 && v > max2;
  }
  function boundaryNearest(v) {
    if (min2 === void 0)
      return max2;
    if (max2 === void 0)
      return min2;
    return Math.abs(min2 - v) < Math.abs(max2 - v) ? min2 : max2;
  }
  function startAnimation2(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: (v) => {
        var _a;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete,
      onStop
    }));
  }
  function startSpring(options) {
    startAnimation2(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
  }
  if (isOutOfBounds(from)) {
    startSpring({ from, velocity, to: boundaryNearest(from) });
  } else {
    let target = power * velocity + from;
    if (typeof modifyTarget !== "undefined")
      target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading = boundary === min2 ? -1 : 1;
    let prev;
    let current;
    const checkBoundary = (v) => {
      prev = current;
      current = v;
      velocity = velocityPerSecond(v - prev, getFrameData3().delta);
      if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
        startSpring({ from: v, to: boundary, velocity });
      }
    };
    startAnimation2({
      type: "decay",
      from,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
    });
  }
  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}

// node_modules/popmotion/dist/es/utils/distance.mjs
init_react();

// node_modules/popmotion/dist/es/utils/is-point.mjs
init_react();
var isPoint = (point) => point.hasOwnProperty("x") && point.hasOwnProperty("y");

// node_modules/popmotion/dist/es/utils/is-point-3d.mjs
init_react();
var isPoint3D = (point) => isPoint(point) && point.hasOwnProperty("z");

// node_modules/popmotion/dist/es/utils/distance.mjs
var distance1D = (a2, b2) => Math.abs(a2 - b2);
function distance(a2, b2) {
  if (isNum(a2) && isNum(b2)) {
    return distance1D(a2, b2);
  } else if (isPoint(a2) && isPoint(b2)) {
    const xDelta = distance1D(a2.x, b2.x);
    const yDelta = distance1D(a2.y, b2.y);
    const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}

// node_modules/popmotion/dist/es/easing/cubic-bezier.mjs
init_react();
var a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
var b = (a1, a2) => 3 * a2 - 6 * a1;
var c = (a1) => 3 * a1;
var calcBezier = (t2, a1, a2) => ((a(a1, a2) * t2 + b(a1, a2)) * t2 + c(a1)) * t2;
var getSlope = (t2, a1, a2) => 3 * a(a1, a2) * t2 * t2 + 2 * b(a1, a2) * t2 + c(a1);
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 1e-3;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < newtonIterations; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return linear;
  const sampleValues = new Float32Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return (t2) => t2 === 0 || t2 === 1 ? t2 : calcBezier(getTForX(t2), mY1, mY2);
}

// node_modules/framer-motion/dist/es/animation/animate.mjs
init_react();

// node_modules/framer-motion/dist/es/value/index.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/array.mjs
init_react();
function addUniqueItem(arr, item) {
  arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem2(arr, item) {
  var index2 = arr.indexOf(item);
  index2 > -1 && arr.splice(index2, 1);
}

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = function() {
  function SubscriptionManager2() {
    this.subscriptions = [];
  }
  SubscriptionManager2.prototype.add = function(handler) {
    var _this = this;
    addUniqueItem(this.subscriptions, handler);
    return function() {
      return removeItem2(_this.subscriptions, handler);
    };
  };
  SubscriptionManager2.prototype.notify = function(a2, b2, c2) {
    var numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a2, b2, c2);
    } else {
      for (var i = 0; i < numSubscriptions; i++) {
        var handler = this.subscriptions[i];
        handler && handler(a2, b2, c2);
      }
    }
  };
  SubscriptionManager2.prototype.getSize = function() {
    return this.subscriptions.length;
  };
  SubscriptionManager2.prototype.clear = function() {
    this.subscriptions.length = 0;
  };
  return SubscriptionManager2;
}();

// node_modules/framer-motion/dist/es/value/index.mjs
var isFloat = function(value) {
  return !isNaN(parseFloat(value));
};
var MotionValue = function() {
  function MotionValue2(init) {
    var _this = this;
    this.version = "6.3.11";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.updateSubscribers = new SubscriptionManager();
    this.velocityUpdateSubscribers = new SubscriptionManager();
    this.renderSubscribers = new SubscriptionManager();
    this.canTrackVelocity = false;
    this.updateAndNotify = function(v, render) {
      if (render === void 0) {
        render = true;
      }
      _this.prev = _this.current;
      _this.current = v;
      var _a = getFrameData2(), delta = _a.delta, timestamp = _a.timestamp;
      if (_this.lastUpdated !== timestamp) {
        _this.timeDelta = delta;
        _this.lastUpdated = timestamp;
        es_default2.postRender(_this.scheduleVelocityCheck);
      }
      if (_this.prev !== _this.current) {
        _this.updateSubscribers.notify(_this.current);
      }
      if (_this.velocityUpdateSubscribers.getSize()) {
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
      if (render) {
        _this.renderSubscribers.notify(_this.current);
      }
    };
    this.scheduleVelocityCheck = function() {
      return es_default2.postRender(_this.velocityCheck);
    };
    this.velocityCheck = function(_a) {
      var timestamp = _a.timestamp;
      if (timestamp !== _this.lastUpdated) {
        _this.prev = _this.current;
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
  }
  MotionValue2.prototype.onChange = function(subscription) {
    return this.updateSubscribers.add(subscription);
  };
  MotionValue2.prototype.clearListeners = function() {
    this.updateSubscribers.clear();
  };
  MotionValue2.prototype.onRenderRequest = function(subscription) {
    subscription(this.get());
    return this.renderSubscribers.add(subscription);
  };
  MotionValue2.prototype.attach = function(passiveEffect) {
    this.passiveEffect = passiveEffect;
  };
  MotionValue2.prototype.set = function(v, render) {
    if (render === void 0) {
      render = true;
    }
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  };
  MotionValue2.prototype.get = function() {
    return this.current;
  };
  MotionValue2.prototype.getPrevious = function() {
    return this.prev;
  };
  MotionValue2.prototype.getVelocity = function() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  };
  MotionValue2.prototype.start = function(animation) {
    var _this = this;
    this.stop();
    return new Promise(function(resolve) {
      _this.hasAnimated = true;
      _this.stopAnimation = animation(resolve);
    }).then(function() {
      return _this.clearAnimation();
    });
  };
  MotionValue2.prototype.stop = function() {
    if (this.stopAnimation)
      this.stopAnimation();
    this.clearAnimation();
  };
  MotionValue2.prototype.isAnimating = function() {
    return !!this.stopAnimation;
  };
  MotionValue2.prototype.clearAnimation = function() {
    this.stopAnimation = null;
  };
  MotionValue2.prototype.destroy = function() {
    this.updateSubscribers.clear();
    this.renderSubscribers.clear();
    this.stop();
  };
  return MotionValue2;
}();
function motionValue(init) {
  return new MotionValue(init);
}

// node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
init_react();
var isMotionValue = function(value) {
  return Boolean(value !== null && typeof value === "object" && value.getVelocity);
};

// node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/time-conversion.mjs
init_react();
var secondsToMilliseconds = function(seconds) {
  return seconds * 1e3;
};

// node_modules/framer-motion/dist/es/animation/utils/easing.mjs
init_react();
var easingLookup = {
  linear,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate,
  bounceIn,
  bounceInOut,
  bounceOut
};
var easingDefinitionToFunction = function(definition) {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, "Invalid easing type '".concat(definition, "'"));
    return easingLookup[definition];
  }
  return definition;
};
var isEasingArray = function(ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};

// node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
init_react();
var isAnimatable = function(key, value) {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
init_react();

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
init_react();
var isKeyframesTarget = function(v) {
  return Array.isArray(v);
};

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
};
var criticallyDampedSpring = function(to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
};
var linearTween = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
};
var keyframes3 = function(values) {
  return {
    type: "keyframes",
    duration: 0.8,
    values
  };
};
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};
var getDefaultTransition = function(valueKey, to) {
  var transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes3;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return __assign({ to }, transitionFactory(to));
};

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
init_react();
var int = __assign(__assign({}, number), { transform: Math.round });

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  borderWidth: px3,
  borderTopWidth: px3,
  borderRightWidth: px3,
  borderBottomWidth: px3,
  borderLeftWidth: px3,
  borderRadius: px3,
  radius: px3,
  borderTopLeftRadius: px3,
  borderTopRightRadius: px3,
  borderBottomRightRadius: px3,
  borderBottomLeftRadius: px3,
  width: px3,
  maxWidth: px3,
  height: px3,
  maxHeight: px3,
  size: px3,
  top: px3,
  right: px3,
  bottom: px3,
  left: px3,
  padding: px3,
  paddingTop: px3,
  paddingRight: px3,
  paddingBottom: px3,
  paddingLeft: px3,
  margin: px3,
  marginTop: px3,
  marginRight: px3,
  marginBottom: px3,
  marginLeft: px3,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px3,
  translateX: px3,
  translateY: px3,
  translateZ: px3,
  x: px3,
  y: px3,
  z: px3,
  perspective: px3,
  transformPerspective: px3,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px3,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = __assign(__assign({}, numberValueTypes), {
  color: color2,
  backgroundColor: color2,
  outlineColor: color2,
  fill: color2,
  stroke: color2,
  borderColor: color2,
  borderTopColor: color2,
  borderRightColor: color2,
  borderBottomColor: color2,
  borderLeftColor: color2,
  filter: filter3,
  WebkitFilter: filter3
});
var getDefaultValueType = function(key) {
  return defaultValueTypes[key];
};

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  var _a;
  var defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter3)
    defaultValueType = complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
init_react();
var instantAnimationState = {
  current: false
};

// node_modules/framer-motion/dist/es/utils/resolve-value.mjs
init_react();
var isCustomValue = function(v) {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function(v) {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined(_a) {
  _a.when;
  _a.delay;
  _a.delayChildren;
  _a.staggerChildren;
  _a.staggerDirection;
  _a.repeat;
  _a.repeatType;
  _a.repeatDelay;
  _a.from;
  var transition3 = __rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition3).length;
}
var legacyRepeatWarning = false;
function convertTransitionToAnimationOptions(_a) {
  var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip2 = _a.flip, loop = _a.loop, transition3 = __rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);
  var options = __assign({}, transition3);
  if (times)
    options["offset"] = times;
  if (transition3.duration)
    options["duration"] = secondsToMilliseconds(transition3.duration);
  if (transition3.repeatDelay)
    options.repeatDelay = secondsToMilliseconds(transition3.repeatDelay);
  if (ease) {
    options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }
  if (transition3.type === "tween")
    options.type = "keyframes";
  if (yoyo || loop || flip2) {
    warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
    legacyRepeatWarning = true;
    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip2) {
      options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip2 || transition3.repeat;
  }
  if (transition3.type !== "spring")
    options.type = "keyframes";
  return options;
}
function getDelayFromTransition(transition3, key) {
  var _a, _b;
  var valueTransition = getValueTransition(transition3, key) || {};
  return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition3.delay) !== null && _b !== void 0 ? _b : 0;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = __spreadArray([], __read(options.to), false);
    options.to[0] = options.from;
  }
  return options;
}
function getPopmotionAnimationOptions(transition3, options, key) {
  var _a;
  if (Array.isArray(options.to)) {
    (_a = transition3.duration) !== null && _a !== void 0 ? _a : transition3.duration = 0.8;
  }
  hydrateKeyframes(options);
  if (!isTransitionDefined(transition3)) {
    transition3 = __assign(__assign({}, transition3), getDefaultTransition(key, options.to));
  }
  return __assign(__assign({}, options), convertTransitionToAnimationOptions(transition3));
}
function getAnimation(key, value, target, transition3, onComplete) {
  var _a;
  var valueTransition = getValueTransition(transition3, key);
  var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
  var isTargetAnimatable = isAnimatable(key, target);
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone2(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  var isOriginAnimatable = isAnimatable(key, origin);
  warning(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(key, ' from "').concat(origin, '" to "').concat(target, '". ').concat(origin, " is not an animatable value - to enable this animation set ").concat(origin, " to a value animatable to ").concat(target, " via the `style` property."));
  function start2() {
    var options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete,
      onUpdate: function(v) {
        return value.set(v);
      }
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(__assign(__assign({}, options), valueTransition)) : animate(__assign(__assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function(v) {
      var _a2;
      options.onUpdate(v);
      (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v);
    }, onComplete: function() {
      var _a2;
      options.onComplete();
      (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
    } }));
  }
  function set() {
    var _a2, _b;
    var finalTarget = resolveFinalValueInKeyframes(target);
    value.set(finalTarget);
    onComplete();
    (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, finalTarget);
    (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
    return { stop: function() {
    } };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start2;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone2("", potentialUnitType);
}
function getValueTransition(transition3, key) {
  return transition3[key] || transition3["default"] || transition3;
}
function startAnimation(key, value, target, transition3) {
  if (transition3 === void 0) {
    transition3 = {};
  }
  if (instantAnimationState.current) {
    transition3 = { type: false };
  }
  return value.start(function(onComplete) {
    var delayTimer;
    var controls;
    var animation = getAnimation(key, value, target, transition3, onComplete);
    var delay = getDelayFromTransition(transition3, key);
    var start2 = function() {
      return controls = animation();
    };
    if (delay) {
      delayTimer = window.setTimeout(start2, secondsToMilliseconds(delay));
    } else {
      start2();
    }
    return function() {
      clearTimeout(delayTimer);
      controls === null || controls === void 0 ? void 0 : controls.stop();
    };
  });
}

// node_modules/framer-motion/dist/es/animation/animate.mjs
function animate2(from, to, transition3) {
  if (transition3 === void 0) {
    transition3 = {};
  }
  var value = isMotionValue(from) ? from : motionValue(from);
  startAnimation("", value, to, transition3);
  return {
    stop: function() {
      return value.stop();
    },
    isAnimating: function() {
      return value.isAnimating();
    }
  };
}

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
init_react();
var borders2 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders2.length;
var asNumber = function(value) {
  return typeof value === "string" ? parseFloat(value) : value;
};
var isPx = function(value) {
  return typeof value === "number" || px3.test(value);
};
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  var _a, _b, _c, _d;
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(0, (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1, easeCrossfadeIn(progress2));
    target.opacityExit = mix((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mix((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress2);
  }
  for (var i = 0; i < numBorders; i++) {
    var borderLabel = "border".concat(borders2[i], "Radius");
    var followRadius = getRadius(follow, borderLabel);
    var leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  var _a;
  return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, linear);
function compress(min2, max2, easing) {
  return function(p) {
    if (p < min2)
      return 0;
    if (p > max2)
      return 1;
    return easing(progress(min2, max2, p));
  };
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
init_react();
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
init_react();

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
init_react();
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale(_a) {
  var scale2 = _a.scale, scaleX = _a.scaleX, scaleY = _a.scaleY;
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || hasTranslate(values.x) || hasTranslate(values.y) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function hasTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
  var distanceFromOrigin = point - originPoint;
  var scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate, scale2, originPoint, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, _a) {
  var x = _a.x, y = _a.y;
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
  var _a, _b;
  if (isSharedTransition === void 0) {
    isSharedTransition = false;
  }
  var treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  var node;
  var delta;
  for (var i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
      continue;
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms2, _a) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  var axisOrigin = transforms2[originKey] !== void 0 ? transforms2[originKey] : 0.5;
  var originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms2[key], transforms2[scaleKey], originPoint, transforms2.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform9) {
  transformAxis(box.x, transform9, xKeys);
  transformAxis(box.y, transform9, yKeys);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
init_react();
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  if (target === void 0) {
    target = 0;
  }
  if (maxDistance === void 0) {
    maxDistance = 0.01;
  }
  return distance(value, target) < maxDistance;
}
function calcAxisDelta(delta, source, target, origin) {
  if (origin === void 0) {
    origin = 0.5;
  }
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
    delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate))
    delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout2, parent) {
  target.min = layout2.min - parent.min;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
init_react();
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate, scale2, origin, boxScale, originAxis, sourceAxis) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  if (origin === void 0) {
    origin = 0.5;
  }
  if (originAxis === void 0) {
    originAxis = axis;
  }
  if (sourceAxis === void 0) {
    sourceAxis = axis;
  }
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    var relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  var originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms2, _a, origin, sourceAxis) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  removeAxisDelta(axis, transforms2[key], transforms2[scaleKey], transforms2[originKey], transforms2.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms2, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms2, xKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
  removeAxisTransforms(box.y, transforms2, yKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
init_react();
var createAxisDelta = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
};
var createDelta = function() {
  return {
    x: createAxisDelta(),
    y: createAxisDelta()
  };
};
var createAxis = function() {
  return { min: 0, max: 0 };
};
var createBox = function() {
  return {
    x: createAxis(),
    y: createAxis()
  };
};

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
init_react();
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a2, b2) {
  return a2.x.min === b2.x.min && a2.x.max === b2.x.max && a2.y.min === b2.y.min && a2.y.max === b2.y.max;
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
init_react();
var NodeStack = function() {
  function NodeStack2() {
    this.members = [];
  }
  NodeStack2.prototype.add = function(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  };
  NodeStack2.prototype.remove = function(node) {
    removeItem2(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      var prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  };
  NodeStack2.prototype.relegate = function(node) {
    var indexOfNode = this.members.findIndex(function(member2) {
      return node === member2;
    });
    if (indexOfNode === 0)
      return false;
    var prevLead;
    for (var i = indexOfNode; i >= 0; i--) {
      var member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  };
  NodeStack2.prototype.promote = function(node, preserveFollowOpacity) {
    var _a;
    var prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        node.snapshot.isShared = true;
      }
      if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
        node.isLayoutDirty = true;
      }
      var crossfade = node.options.crossfade;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  };
  NodeStack2.prototype.exitAnimationComplete = function() {
    this.members.forEach(function(node) {
      var _a, _b, _c, _d, _e;
      (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
    });
  };
  NodeStack2.prototype.scheduleRender = function() {
    this.members.forEach(function(node) {
      node.instance && node.scheduleRender(false);
    });
  };
  NodeStack2.prototype.removeLeadSnapshot = function() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  };
  return NodeStack2;
}();

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
init_react();
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
init_react();
var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function buildProjectionTransform(delta, treeScale, latestTransform) {
  var xTranslate = delta.x.translate / treeScale.x;
  var yTranslate = delta.y.translate / treeScale.y;
  var transform9 = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, 0) ");
  transform9 += "scale(".concat(1 / treeScale.x, ", ").concat(1 / treeScale.y, ") ");
  if (latestTransform) {
    var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
    if (rotate)
      transform9 += "rotate(".concat(rotate, "deg) ");
    if (rotateX)
      transform9 += "rotateX(".concat(rotateX, "deg) ");
    if (rotateY)
      transform9 += "rotateY(".concat(rotateY, "deg) ");
  }
  var elementScaleX = delta.x.scale * treeScale.x;
  var elementScaleY = delta.y.scale * treeScale.y;
  transform9 += "scale(".concat(elementScaleX, ", ").concat(elementScaleY, ")");
  return transform9 === identityProjection ? "none" : transform9;
}

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
init_react();
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
init_react();
var transformAxes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew"];
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function(operationKey) {
  return transformAxes.forEach(function(axesKey) {
    return transformProps.push(operationKey + axesKey);
  });
});
function sortTransformProps(a2, b2) {
  return transformProps.indexOf(a2) - transformProps.indexOf(b2);
}
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
  return transformPropSet.has(key);
}
var transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
init_react();

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
init_react();
var compareByDepth = function(a2, b2) {
  return a2.depth - b2.depth;
};

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = function() {
  function FlatTree2() {
    this.children = [];
    this.isDirty = false;
  }
  FlatTree2.prototype.add = function(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  };
  FlatTree2.prototype.remove = function(child) {
    removeItem2(this.children, child);
    this.isDirty = true;
  };
  FlatTree2.prototype.forEach = function(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  };
  return FlatTree2;
}();

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
init_react();
function resolveMotionValue(value) {
  var unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var animationTarget = 1e3;
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};
function createProjectionNode(_a) {
  var attachResizeListener = _a.attachResizeListener, defaultParent = _a.defaultParent, measureScroll = _a.measureScroll, resetTransform = _a.resetTransform;
  return function() {
    function ProjectionNode(id2, latestValues, parent) {
      var _this = this;
      if (latestValues === void 0) {
        latestValues = {};
      }
      if (parent === void 0) {
        parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
      }
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.potentialNodes = /* @__PURE__ */ new Map();
      this.checkUpdateFailed = function() {
        if (_this.isUpdating) {
          _this.isUpdating = false;
          _this.clearAllSnapshots();
        }
      };
      this.updateProjection = function() {
        _this.nodes.forEach(resolveTargetDelta);
        _this.nodes.forEach(calcProjection);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.id = id2;
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? __spreadArray(__spreadArray([], __read(parent.path), false), [parent], false) : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      id2 && this.root.registerPotentialNode(id2, this);
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    ProjectionNode.prototype.addEventListener = function(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    };
    ProjectionNode.prototype.notifyListeners = function(name) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, __spreadArray([], __read(args), false));
    };
    ProjectionNode.prototype.hasListeners = function(name) {
      return this.eventHandlers.has(name);
    };
    ProjectionNode.prototype.registerPotentialNode = function(id2, node) {
      this.potentialNodes.set(id2, node);
    };
    ProjectionNode.prototype.mount = function(instance, isLayoutDirty) {
      var _this = this;
      var _a2;
      if (isLayoutDirty === void 0) {
        isLayoutDirty = false;
      }
      if (this.instance)
        return;
      this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
      this.instance = instance;
      var _b = this.options, layoutId = _b.layoutId, layout2 = _b.layout, visualElement2 = _b.visualElement;
      if (visualElement2 && !visualElement2.getInstance()) {
        visualElement2.mount(instance);
      }
      this.root.nodes.add(this);
      (_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.children.add(this);
      this.id && this.root.potentialNodes.delete(this.id);
      if (isLayoutDirty && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        var unblockTimeout_1;
        var resizeUnblockUpdate_1 = function() {
          return _this.root.updateBlockedByResize = false;
        };
        attachResizeListener(instance, function() {
          _this.root.updateBlockedByResize = true;
          clearTimeout(unblockTimeout_1);
          unblockTimeout_1 = window.setTimeout(resizeUnblockUpdate_1, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            _this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement2 && (layoutId || layout2)) {
        this.addEventListener("didUpdate", function(_a3) {
          var _b2, _c, _d, _e, _f;
          var delta = _a3.delta, hasLayoutChanged = _a3.hasLayoutChanged, hasRelativeTargetChanged = _a3.hasRelativeTargetChanged, newLayout = _a3.layout;
          if (_this.isTreeAnimationBlocked()) {
            _this.target = void 0;
            _this.relativeTarget = void 0;
            return;
          }
          var layoutTransition = (_c = (_b2 = _this.options.transition) !== null && _b2 !== void 0 ? _b2 : visualElement2.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
          var _g = visualElement2.getProps(), onLayoutAnimationStart = _g.onLayoutAnimationStart, onLayoutAnimationComplete = _g.onLayoutAnimationComplete;
          var targetChanged = !_this.targetLayout || !boxEquals(_this.targetLayout, newLayout) || hasRelativeTargetChanged;
          var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this.currentAnimation)) {
            if (_this.resumeFrom) {
              _this.resumingFrom = _this.resumeFrom;
              _this.resumingFrom.resumingFrom = void 0;
            }
            _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            var animationOptions = __assign(__assign({}, getValueTransition(layoutTransition, "layout")), { onPlay: onLayoutAnimationStart, onComplete: onLayoutAnimationComplete });
            if (visualElement2.shouldReduceMotion) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            _this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged && _this.animationProgress === 0) {
              _this.finishAnimation();
            }
            _this.isLead() && ((_f = (_e = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e));
          }
          _this.targetLayout = newLayout;
        });
      }
    };
    ProjectionNode.prototype.unmount = function() {
      var _a2, _b;
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.remove(this);
      (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
      this.instance = void 0;
      cancelSync2.preRender(this.updateProjection);
    };
    ProjectionNode.prototype.blockUpdate = function() {
      this.updateManuallyBlocked = true;
    };
    ProjectionNode.prototype.unblockUpdate = function() {
      this.updateManuallyBlocked = false;
    };
    ProjectionNode.prototype.isUpdateBlocked = function() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    };
    ProjectionNode.prototype.isTreeAnimationBlocked = function() {
      var _a2;
      return this.isAnimationBlocked || ((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimationBlocked()) || false;
    };
    ProjectionNode.prototype.startUpdate = function() {
      var _a2;
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      (_a2 = this.nodes) === null || _a2 === void 0 ? void 0 : _a2.forEach(resetRotation);
    };
    ProjectionNode.prototype.willUpdate = function(shouldNotifyListeners) {
      var _a2, _b, _c;
      if (shouldNotifyListeners === void 0) {
        shouldNotifyListeners = true;
      }
      if (this.root.isUpdateBlocked()) {
        (_b = (_a2 = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a2);
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll();
      }
      var _d = this.options, layoutId = _d.layoutId, layout2 = _d.layout;
      if (layoutId === void 0 && !layout2)
        return;
      var transformTemplate2 = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
      this.prevTransformTemplateValue = transformTemplate2 === null || transformTemplate2 === void 0 ? void 0 : transformTemplate2(this.latestValues, "");
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    };
    ProjectionNode.prototype.didUpdate = function() {
      var updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating)
        return;
      this.isUpdating = false;
      if (this.potentialNodes.size) {
        this.potentialNodes.forEach(mountNodeEarly);
        this.potentialNodes.clear();
      }
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      flushSync.update();
      flushSync.preRender();
      flushSync.render();
    };
    ProjectionNode.prototype.clearAllSnapshots = function() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    };
    ProjectionNode.prototype.scheduleUpdateProjection = function() {
      es_default2.preRender(this.updateProjection, false, true);
    };
    ProjectionNode.prototype.scheduleCheckAfterUnmount = function() {
      var _this = this;
      es_default2.postRender(function() {
        if (_this.isLayoutDirty) {
          _this.root.didUpdate();
        } else {
          _this.root.checkUpdateFailed();
        }
      });
    };
    ProjectionNode.prototype.updateSnapshot = function() {
      if (this.snapshot || !this.instance)
        return;
      var measured = this.measure();
      var layout2 = this.removeTransform(this.removeElementScroll(measured));
      roundBox(layout2);
      this.snapshot = {
        measured,
        layout: layout2,
        latestValues: {}
      };
    };
    ProjectionNode.prototype.updateLayout = function() {
      var _a2;
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          node.updateScroll();
        }
      }
      var measured = this.measure();
      roundBox(measured);
      var prevLayout = this.layout;
      this.layout = {
        measured,
        actual: this.removeElementScroll(measured)
      };
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.actual);
      (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
    };
    ProjectionNode.prototype.updateScroll = function() {
      if (this.options.layoutScroll && this.instance) {
        this.scroll = measureScroll(this.instance);
      }
    };
    ProjectionNode.prototype.resetTransform = function() {
      var _a2;
      if (!resetTransform)
        return;
      var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      var transformTemplate2 = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      var transformTemplateValue = transformTemplate2 === null || transformTemplate2 === void 0 ? void 0 : transformTemplate2(this.latestValues, "");
      var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    };
    ProjectionNode.prototype.measure = function() {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2)
        return createBox();
      var box = visualElement2.measureViewportBox();
      var scroll2 = this.root.scroll;
      if (scroll2) {
        translateAxis(box.x, scroll2.x);
        translateAxis(box.y, scroll2.y);
      }
      return box;
    };
    ProjectionNode.prototype.removeElementScroll = function(box) {
      var boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        var scroll_1 = node.scroll, options = node.options;
        if (node !== this.root && scroll_1 && options.layoutScroll) {
          translateAxis(boxWithoutScroll.x, scroll_1.x);
          translateAxis(boxWithoutScroll.y, scroll_1.y);
        }
      }
      return boxWithoutScroll;
    };
    ProjectionNode.prototype.applyTransform = function(box, transformOnly) {
      if (transformOnly === void 0) {
        transformOnly = false;
      }
      var withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.x,
            y: -node.scroll.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    };
    ProjectionNode.prototype.removeTransform = function(box) {
      var _a2;
      var boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        var sourceBox = createBox();
        var nodeBox = node.measure();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a2 = node.snapshot) === null || _a2 === void 0 ? void 0 : _a2.layout, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    };
    ProjectionNode.prototype.setTargetDelta = function(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
    };
    ProjectionNode.prototype.setOptions = function(options) {
      var _a2;
      this.options = __assign(__assign(__assign({}, this.options), options), { crossfade: (_a2 = options.crossfade) !== null && _a2 !== void 0 ? _a2 : true });
    };
    ProjectionNode.prototype.clearMeasurements = function() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    };
    ProjectionNode.prototype.resolveTargetDelta = function() {
      var _a2;
      var _b = this.options, layout2 = _b.layout, layoutId = _b.layoutId;
      if (!this.layout || !(layout2 || layoutId))
        return;
      if (!this.targetDelta && !this.relativeTarget) {
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && this.relativeParent.layout) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.target)) {
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.actual);
        } else {
          copyBoxInto(this.target, this.layout.actual);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.actual);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
    };
    ProjectionNode.prototype.getClosestProjectingParent = function() {
      if (!this.parent || hasTransform(this.parent.latestValues))
        return void 0;
      if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    };
    ProjectionNode.prototype.calcProjection = function() {
      var _a2;
      var _b = this.options, layout2 = _b.layout, layoutId = _b.layoutId;
      this.isTreeAnimating = Boolean(((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId))
        return;
      var lead = this.getLead();
      copyBoxInto(this.layoutCorrected, this.layout.actual);
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
      var target = lead.target;
      if (!target)
        return;
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      var prevTreeScaleX = this.treeScale.x;
      var prevTreeScaleY = this.treeScale.y;
      var prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
    };
    ProjectionNode.prototype.hide = function() {
      this.isVisible = false;
    };
    ProjectionNode.prototype.show = function() {
      this.isVisible = true;
    };
    ProjectionNode.prototype.scheduleRender = function(notifyAll) {
      var _a2, _b, _c;
      if (notifyAll === void 0) {
        notifyAll = true;
      }
      (_b = (_a2 = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a2);
      notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    };
    ProjectionNode.prototype.setAnimationOrigin = function(delta, hasOnlyRelativeTargetChanged) {
      var _this = this;
      var _a2;
      if (hasOnlyRelativeTargetChanged === void 0) {
        hasOnlyRelativeTargetChanged = false;
      }
      var snapshot = this.snapshot;
      var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
      var mixedValues = __assign({}, this.latestValues);
      var targetDelta = createDelta();
      this.relativeTarget = this.relativeTargetOrigin = void 0;
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      var relativeLayout = createBox();
      var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
      var isOnlyMember = (((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length) || 0) <= 1;
      var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      this.mixTargetDelta = function(latest) {
        var _a3;
        var progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        _this.setTargetDelta(targetDelta);
        if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && ((_a3 = _this.relativeParent) === null || _a3 === void 0 ? void 0 : _a3.layout)) {
          calcRelativePosition(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
          mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress2);
        }
        if (isSharedLayoutAnimation) {
          _this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, _this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        _this.root.scheduleUpdateProjection();
        _this.scheduleRender();
        _this.animationProgress = progress2;
      };
      this.mixTargetDelta(0);
    };
    ProjectionNode.prototype.startAnimation = function(options) {
      var _this = this;
      var _a2, _b;
      this.notifyListeners("animationStart");
      (_a2 = this.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      if (this.resumingFrom) {
        (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
      }
      if (this.pendingAnimation) {
        cancelSync2.update(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = es_default2.update(function() {
        globalProjectionState.hasAnimatedSinceResize = true;
        _this.currentAnimation = animate2(0, animationTarget, __assign(__assign({}, options), { onUpdate: function(latest) {
          var _a3;
          _this.mixTargetDelta(latest);
          (_a3 = options.onUpdate) === null || _a3 === void 0 ? void 0 : _a3.call(options, latest);
        }, onComplete: function() {
          var _a3;
          (_a3 = options.onComplete) === null || _a3 === void 0 ? void 0 : _a3.call(options);
          _this.completeAnimation();
        } }));
        if (_this.resumingFrom) {
          _this.resumingFrom.currentAnimation = _this.currentAnimation;
        }
        _this.pendingAnimation = void 0;
      });
    };
    ProjectionNode.prototype.completeAnimation = function() {
      var _a2;
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    };
    ProjectionNode.prototype.finishAnimation = function() {
      var _a2;
      if (this.currentAnimation) {
        (_a2 = this.mixTargetDelta) === null || _a2 === void 0 ? void 0 : _a2.call(this, animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    };
    ProjectionNode.prototype.applyTransformsToTarget = function() {
      var _a2 = this.getLead(), targetWithTransforms = _a2.targetWithTransforms, target = _a2.target, layout2 = _a2.layout, latestValues = _a2.latestValues;
      if (!targetWithTransforms || !target || !layout2)
        return;
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    };
    ProjectionNode.prototype.registerSharedNode = function(layoutId, node) {
      var _a2, _b, _c;
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      var stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      node.promote({
        transition: (_a2 = node.options.initialPromotionConfig) === null || _a2 === void 0 ? void 0 : _a2.transition,
        preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
      });
    };
    ProjectionNode.prototype.isLead = function() {
      var stack = this.getStack();
      return stack ? stack.lead === this : true;
    };
    ProjectionNode.prototype.getLead = function() {
      var _a2;
      var layoutId = this.options.layoutId;
      return layoutId ? ((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.lead) || this : this;
    };
    ProjectionNode.prototype.getPrevLead = function() {
      var _a2;
      var layoutId = this.options.layoutId;
      return layoutId ? (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.prevLead : void 0;
    };
    ProjectionNode.prototype.getStack = function() {
      var layoutId = this.options.layoutId;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    };
    ProjectionNode.prototype.promote = function(_a2) {
      var _b = _a2 === void 0 ? {} : _a2, needsReset = _b.needsReset, transition3 = _b.transition, preserveFollowOpacity = _b.preserveFollowOpacity;
      var stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition3)
        this.setOptions({ transition: transition3 });
    };
    ProjectionNode.prototype.relegate = function() {
      var stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    };
    ProjectionNode.prototype.resetRotation = function() {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2)
        return;
      var hasRotate = false;
      var resetValues = {};
      for (var i = 0; i < transformAxes.length; i++) {
        var axis = transformAxes[i];
        var key = "rotate" + axis;
        if (!visualElement2.getStaticValue(key)) {
          continue;
        }
        hasRotate = true;
        resetValues[key] = visualElement2.getStaticValue(key);
        visualElement2.setStaticValue(key, 0);
      }
      if (!hasRotate)
        return;
      visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
      for (var key in resetValues) {
        visualElement2.setStaticValue(key, resetValues[key]);
      }
      visualElement2.scheduleRender();
    };
    ProjectionNode.prototype.getProjectionStyles = function(styleProp) {
      var _a2, _b, _c, _d, _e, _f;
      if (styleProp === void 0) {
        styleProp = {};
      }
      var styles2 = {};
      if (!this.instance || this.isSVG)
        return styles2;
      if (!this.isVisible) {
        return { visibility: "hidden" };
      } else {
        styles2.visibility = "";
      }
      var transformTemplate2 = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      if (this.needsReset) {
        this.needsReset = false;
        styles2.opacity = "";
        styles2.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles2.transform = transformTemplate2 ? transformTemplate2(this.latestValues, "") : "none";
        return styles2;
      }
      var lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        var emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate2 ? transformTemplate2({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      var valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles2.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate2) {
        styles2.transform = transformTemplate2(valuesToRender, styles2.transform);
      }
      var _g = this.projectionDelta, x = _g.x, y = _g.y;
      styles2.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");
      if (lead.animationValues) {
        styles2.opacity = lead === this ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles2.opacity = lead === this ? (_e = valuesToRender.opacity) !== null && _e !== void 0 ? _e : "" : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
      }
      for (var key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        var _h = scaleCorrectors[key], correct = _h.correct, applyTo = _h.applyTo;
        var corrected = correct(valuesToRender[key], lead);
        if (applyTo) {
          var num = applyTo.length;
          for (var i = 0; i < num; i++) {
            styles2[applyTo[i]] = corrected;
          }
        } else {
          styles2[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles2.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
      }
      return styles2;
    };
    ProjectionNode.prototype.clearSnapshot = function() {
      this.resumeFrom = this.snapshot = void 0;
    };
    ProjectionNode.prototype.resetTree = function() {
      this.root.nodes.forEach(function(node) {
        var _a2;
        return (_a2 = node.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    };
    return ProjectionNode;
  }();
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a, _b, _c, _d;
  var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    var _e = node.layout, layout_1 = _e.actual, measuredLayout = _e.measured;
    if (node.options.animationType === "size") {
      eachAxis(function(axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(axisSnapshot);
        axisSnapshot.min = layout_1[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (node.options.animationType === "position") {
      eachAxis(function(axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(layout_1[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
      });
    }
    var layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout_1, snapshot.layout);
    var visualDelta = createDelta();
    if (snapshot.isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
    } else {
      calcBoxDelta(visualDelta, layout_1, snapshot.layout);
    }
    var hasLayoutChanged = !isDeltaZero(layoutDelta);
    var hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      node.relativeParent = node.getClosestProjectingParent();
      if (node.relativeParent && !node.relativeParent.resumeFrom) {
        var _f = node.relativeParent, parentSnapshot = _f.snapshot, parentLayout = _f.layout;
        if (parentSnapshot && parentLayout) {
          var relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
          var relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout_1, parentLayout.actual);
          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout_1,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
  }
  node.options.transition = void 0;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function resetTransformStyle(node) {
  var visualElement2 = node.options.visualElement;
  if (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.getProps().onBeforeLayoutMeasure) {
    visualElement2.notifyBeforeLayoutMeasure();
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mix(delta.translate, 0, p);
  output.scale = mix(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mix(from.min, to.min, p);
  output.max = mix(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function mountNodeEarly(node, id2) {
  var searchNode = node.root;
  for (var i = node.path.length - 1; i >= 0; i--) {
    if (Boolean(node.path[i].instance)) {
      searchNode = node.path[i];
      break;
    }
  }
  var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
  var element = searchElement.querySelector('[data-projection-id="'.concat(id2, '"]'));
  if (element)
    node.mount(element, true);
}
function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}

// node_modules/framer-motion/dist/es/projection/node/id.mjs
var id = 1;
function useProjectionId() {
  return useConstant(function() {
    if (globalProjectionState.hasEverUpdated) {
      return id++;
    }
  });
}

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
init_react();
var import_react22 = __toESM(require_react(), 1);
var LayoutGroupContext = (0, import_react22.createContext)({});

// node_modules/framer-motion/dist/es/motion/features/use-projection.mjs
init_react();
var import_react24 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
init_react();
var import_react23 = __toESM(require_react(), 1);
var SwitchLayoutGroupContext = (0, import_react23.createContext)({});

// node_modules/framer-motion/dist/es/motion/features/use-projection.mjs
function useProjection(projectionId, _a, visualElement2, ProjectionNodeConstructor) {
  var _b;
  var layoutId = _a.layoutId, layout2 = _a.layout, drag2 = _a.drag, dragConstraints = _a.dragConstraints, layoutScroll = _a.layoutScroll;
  var initialPromotionConfig = (0, import_react24.useContext)(SwitchLayoutGroupContext);
  if (!ProjectionNodeConstructor || !visualElement2 || (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.projection)) {
    return;
  }
  visualElement2.projection = new ProjectionNodeConstructor(projectionId, visualElement2.getLatestValues(), (_b = visualElement2.parent) === null || _b === void 0 ? void 0 : _b.projection);
  visualElement2.projection.setOptions({
    layoutId,
    layout: layout2,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject2(dragConstraints),
    visualElement: visualElement2,
    scheduleRender: function() {
      return visualElement2.scheduleRender();
    },
    animationType: typeof layout2 === "string" ? layout2 : "both",
    initialPromotionConfig,
    layoutScroll
  });
}

// node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs
init_react();
var import_react25 = __toESM(require_react(), 1);
var VisualElementHandler = function(_super) {
  __extends(VisualElementHandler2, _super);
  function VisualElementHandler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  VisualElementHandler2.prototype.getSnapshotBeforeUpdate = function() {
    this.updateProps();
    return null;
  };
  VisualElementHandler2.prototype.componentDidUpdate = function() {
  };
  VisualElementHandler2.prototype.updateProps = function() {
    var _a = this.props, visualElement2 = _a.visualElement, props = _a.props;
    if (visualElement2)
      visualElement2.setProps(props);
  };
  VisualElementHandler2.prototype.render = function() {
    return this.props.children;
  };
  return VisualElementHandler2;
}(import_react25.default.Component);

// node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent(_a) {
  var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, projectionNodeConstructor = _a.projectionNodeConstructor, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    var layoutId = useLayoutId(props);
    props = __assign(__assign({}, props), { layoutId });
    var config3 = (0, import_react26.useContext)(MotionConfigContext);
    var features = null;
    var context = useCreateMotionContext(props);
    var projectionId = config3.isStatic ? void 0 : useProjectionId();
    var visualState = useVisualState(props, config3.isStatic);
    if (!config3.isStatic && isBrowser2) {
      context.visualElement = useVisualElement(Component, visualState, __assign(__assign({}, config3), props), createVisualElement);
      useProjection(projectionId, props, context.visualElement, projectionNodeConstructor || featureDefinitions.projectionNodeConstructor);
      features = useFeatures(props, context.visualElement, preloadedFeatures);
    }
    return React17.createElement(VisualElementHandler, { visualElement: context.visualElement, props: __assign(__assign({}, config3), props) }, features, React17.createElement(MotionContext.Provider, { value: context }, useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, config3.isStatic, context.visualElement)));
  }
  return (0, import_react26.forwardRef)(MotionComponent);
}
function useLayoutId(_a) {
  var _b;
  var layoutId = _a.layoutId;
  var layoutGroupId = (_b = (0, import_react26.useContext)(LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
init_react();
function createMotionProxy(createConfig) {
  function custom(Component, customMotionComponentConfig) {
    if (customMotionComponentConfig === void 0) {
      customMotionComponentConfig = {};
    }
    return createMotionComponent(createConfig(Component, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  var componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    get: function(_target, key) {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
init_react();

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
init_react();
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component) {
  if (typeof Component !== "string" || Component.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component)) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
init_react();
var import_react29 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
init_react();
var import_react27 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
init_react();
function isForcedMotionValue(key, _a) {
  var layout2 = _a.layout, layoutId = _a.layoutId;
  return isTransformProp(key) || isTransformOriginProp(key) || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
init_react();

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
init_react();
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function buildTransform(_a, _b, transformIsDefault, transformTemplate2) {
  var transform9 = _a.transform, transformKeys2 = _a.transformKeys;
  var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
  var transformString = "";
  transformKeys2.sort(sortTransformProps);
  var transformHasZ = false;
  var numTransformKeys = transformKeys2.length;
  for (var i = 0; i < numTransformKeys; i++) {
    var key = transformKeys2[i];
    transformString += "".concat(translateAlias[key] || key, "(").concat(transform9[key], ") ");
    if (key === "z")
      transformHasZ = true;
  }
  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  }
  if (transformTemplate2) {
    transformString = transformTemplate2(transform9, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
function buildTransformOrigin(_a) {
  var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
  return "".concat(originX, " ").concat(originY, " ").concat(originZ);
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
init_react();
function isCSSVariable(key) {
  return key.startsWith("--");
}

// node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
init_react();
var getValueAsType = function(value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state2, latestValues, options, transformTemplate2) {
  var _a;
  var style = state2.style, vars = state2.vars, transform9 = state2.transform, transformKeys2 = state2.transformKeys, transformOrigin2 = state2.transformOrigin;
  transformKeys2.length = 0;
  var hasTransform2 = false;
  var hasTransformOrigin = false;
  var transformIsNone = true;
  for (var key in latestValues) {
    var value = latestValues[key];
    if (isCSSVariable(key)) {
      vars[key] = value;
      continue;
    }
    var valueType = numberValueTypes[key];
    var valueAsType = getValueAsType(value, valueType);
    if (isTransformProp(key)) {
      hasTransform2 = true;
      transform9[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone)
        continue;
      if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
        transformIsNone = false;
    } else if (isTransformOriginProp(key)) {
      transformOrigin2[key] = valueAsType;
      hasTransformOrigin = true;
    } else {
      style[key] = valueAsType;
    }
  }
  if (hasTransform2) {
    style.transform = buildTransform(state2, options, transformIsNone, transformTemplate2);
  } else if (transformTemplate2) {
    style.transform = transformTemplate2({}, "");
  } else if (!latestValues.transform && style.transform) {
    style.transform = "none";
  }
  if (hasTransformOrigin) {
    style.transformOrigin = buildTransformOrigin(transformOrigin2);
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
init_react();
var createHtmlRenderState = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (var key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues(_a, visualState, isStatic) {
  var transformTemplate2 = _a.transformTemplate;
  return (0, import_react27.useMemo)(function() {
    var state2 = createHtmlRenderState();
    buildHTMLStyles(state2, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate2);
    var vars = state2.vars, style = state2.style;
    return __assign(__assign({}, vars), style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  var styleProp = props.style || {};
  var style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  if (props.transformValues) {
    style = props.transformValues(style);
  }
  return style;
}
function useHTMLProps(props, visualState, isStatic) {
  var htmlProps = {};
  var style = useStyle(props, visualState, isStatic);
  if (Boolean(props.drag) && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : "pan-".concat(props.drag === "x" ? "y" : "x");
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
init_react();

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
init_react();
var validMotionProps = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport",
  "layoutScroll"
]);
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = function(key) {
  return !isValidMotionProp(key);
};
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = function(key) {
    return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  };
}
try {
  loadExternalIsValidProp((init_is_prop_valid_browser_esm(), __toCommonJS(is_prop_valid_browser_esm_exports)).default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  var filteredProps = {};
  for (var key in props) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
init_react();
var import_react28 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
init_react();

// node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
init_react();
function calcOrigin(origin, offset2, size2) {
  return typeof origin === "string" ? origin : px3.transform(offset2 + size2 * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return "".concat(pxOriginX, " ").concat(pxOriginY);
}

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
init_react();
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing2, offset2, useDashCase) {
  if (spacing2 === void 0) {
    spacing2 = 1;
  }
  if (offset2 === void 0) {
    offset2 = 0;
  }
  if (useDashCase === void 0) {
    useDashCase = true;
  }
  attrs.pathLength = 1;
  var keys2 = useDashCase ? dashKeys : camelKeys;
  attrs[keys2.offset] = px3.transform(-offset2);
  var pathLength = px3.transform(length);
  var pathSpacing = px3.transform(spacing2);
  attrs[keys2.array] = "".concat(pathLength, " ").concat(pathSpacing);
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state2, _a, options, transformTemplate2) {
  var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  buildHTMLStyles(state2, latest, options, transformTemplate2);
  state2.attrs = state2.style;
  state2.style = {};
  var attrs = state2.attrs, style = state2.style, dimensions = state2.dimensions;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
init_react();
var createSvgRenderState = function() {
  return __assign(__assign({}, createHtmlRenderState()), { attrs: {} });
};

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState) {
  var visualProps = (0, import_react28.useMemo)(function() {
    var state2 = createSvgRenderState();
    buildSVGAttrs(state2, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
    return __assign(__assign({}, state2.attrs), { style: __assign({}, state2.style) });
  }, [visualState]);
  if (props.style) {
    var rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = __assign(__assign({}, rawStyles), visualProps.style);
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender(forwardMotionProps) {
  if (forwardMotionProps === void 0) {
    forwardMotionProps = false;
  }
  var useRender = function(Component, props, projectionId, ref, _a, isStatic) {
    var latestValues = _a.latestValues;
    var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    var visualProps = useVisualProps(props, latestValues, isStatic);
    var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
    var elementProps = __assign(__assign(__assign({}, filteredProps), visualProps), { ref });
    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }
    return (0, import_react29.createElement)(Component, elementProps);
  };
  return useRender;
}

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
init_react();

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
init_react();
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
var camelToDash = function(str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
init_react();
function renderHTML(element, _a, styleProp, projection) {
  var style = _a.style, vars = _a.vars;
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (var key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
init_react();
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength"
]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (var key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
init_react();

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
init_react();
function scrapeMotionValuesFromProps(props) {
  var style = props.style;
  var newValues = {};
  for (var key in style) {
    if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props) {
  var newValues = scrapeMotionValuesFromProps(props);
  for (var key in props) {
    if (isMotionValue(props[key])) {
      var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
init_react();
var import_react30 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
init_react();
function isAnimationControls(v) {
  return typeof v === "object" && typeof v.start === "function";
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState(_a, props, context, presenceContext) {
  var scrapeMotionValuesFromProps3 = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
  var state2 = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state2.mount = function(instance) {
      return onMount(props, instance, state2);
    };
  }
  return state2;
}
var makeUseVisualState = function(config3) {
  return function(props, isStatic) {
    var context = (0, import_react30.useContext)(MotionContext);
    var presenceContext = (0, import_react30.useContext)(PresenceContext);
    return isStatic ? makeState(config3, props, context, presenceContext) : useConstant(function() {
      return makeState(config3, props, context, presenceContext);
    });
  };
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  var values = {};
  var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
  var motionValues = scrapeMotionValues(props);
  for (var key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  var initial2 = props.initial, animate3 = props.animate;
  var isControllingVariants = checkIfControllingVariants(props);
  var isVariantNode = checkIfVariantNode(props);
  if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
    initial2 !== null && initial2 !== void 0 ? initial2 : initial2 = context.initial;
    animate3 !== null && animate3 !== void 0 ? animate3 : animate3 = context.animate;
  }
  var initialAnimationIsBlocked = blockInitialAnimation || initial2 === false;
  var variantToSet = initialAnimationIsBlocked ? animate3 : initial2;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    var list2 = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list2.forEach(function(definition) {
      var resolved = resolveVariantFromProps(props, definition);
      if (!resolved)
        return;
      var transitionEnd = resolved.transitionEnd;
      resolved.transition;
      var target = __rest(resolved, ["transitionEnd", "transition"]);
      for (var key2 in target) {
        var valueTarget = target[key2];
        if (Array.isArray(valueTarget)) {
          var index2 = initialAnimationIsBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index2];
        }
        if (valueTarget !== null) {
          values[key2] = valueTarget;
        }
      }
      for (var key2 in transitionEnd)
        values[key2] = transitionEnd[key2];
    });
  }
  return values;
}

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: function(props, instance, _a) {
      var renderState = _a.renderState, latestValues = _a.latestValues;
      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e) {
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
};

// node_modules/framer-motion/dist/es/render/html/config-motion.mjs
init_react();
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
  var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
  var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
  return __assign(__assign({}, baseConfig), { preloadedFeatures, useRender: createUseRender(forwardMotionProps), createVisualElement, projectionNodeConstructor, Component });
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
init_react();

// node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs
init_react();

// node_modules/framer-motion/dist/es/render/utils/types.mjs
init_react();
var AnimationType;
(function(AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["InView"] = "whileInView";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));

// node_modules/framer-motion/dist/es/events/use-dom-event.mjs
init_react();
var import_react31 = __toESM(require_react(), 1);
function addDomEvent(target, eventName, handler, options) {
  if (options === void 0) {
    options = { passive: true };
  }
  target.addEventListener(eventName, handler, options);
  return function() {
    return target.removeEventListener(eventName, handler);
  };
}
function useDomEvent(ref, eventName, handler, options) {
  (0, import_react31.useEffect)(function() {
    var element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs
function useFocusGesture(_a) {
  var whileFocus = _a.whileFocus, visualElement2 = _a.visualElement;
  var onFocus = function() {
    var _a2;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, true);
  };
  var onBlur = function() {
    var _a2;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, false);
  };
  useDomEvent(visualElement2, "focus", whileFocus ? onFocus : void 0);
  useDomEvent(visualElement2, "blur", whileFocus ? onBlur : void 0);
}

// node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs
init_react();

// node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs
init_react();
function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}

// node_modules/framer-motion/dist/es/events/use-pointer-event.mjs
init_react();

// node_modules/framer-motion/dist/es/events/event-info.mjs
init_react();
function filterPrimaryPointer(eventHandler) {
  return function(event) {
    var isMouseEvent2 = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  var primaryTouch = e.touches[0] || e.changedTouches[0];
  var point = primaryTouch || defaultPagePoint;
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function pointFromMouse(point, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }
  var listener = function(event) {
    return handler(event, extractEventInfo(event));
  };
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};

// node_modules/framer-motion/dist/es/events/utils.mjs
init_react();
var supportsPointerEvents = function() {
  return isBrowser2 && window.onpointerdown === null;
};
var supportsTouchEvents = function() {
  return isBrowser2 && window.ontouchstart === null;
};
var supportsMouseEvents = function() {
  return isBrowser2 && window.onmousedown === null;
};

// node_modules/framer-motion/dist/es/events/use-pointer-event.mjs
var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName2(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName2(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, getPointerEventName2(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
init_react();
function createLock(name) {
  var lock = null;
  return function() {
    var openLock = function() {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  var lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();
    if (openHorizontal_1 && openVertical_1) {
      lock = function() {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      if (openHorizontal_1)
        openHorizontal_1();
      if (openVertical_1)
        openVertical_1();
    }
  }
  return lock;
}
function isDragActive() {
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}

// node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs
function createHoverEvent(visualElement2, isActive, callback) {
  return function(event, info) {
    var _a;
    if (!isMouseEvent(event) || isDragActive())
      return;
    (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, isActive);
    callback === null || callback === void 0 ? void 0 : callback(event, info);
  };
}
function useHoverGesture(_a) {
  var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement2 = _a.visualElement;
  usePointerEvent(visualElement2, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0, { passive: !onHoverStart });
  usePointerEvent(visualElement2, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0, { passive: !onHoverEnd });
}

// node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
init_react();
var import_react33 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
init_react();
var isNodeOrChild = function(parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
init_react();
var import_react32 = __toESM(require_react(), 1);
function useUnmountEffect2(callback) {
  return (0, import_react32.useEffect)(function() {
    return function() {
      return callback();
    };
  }, []);
}

// node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
function useTapGesture(_a) {
  var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement2 = _a.visualElement;
  var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  var isPressing = (0, import_react33.useRef)(false);
  var cancelPointerEndListeners = (0, import_react33.useRef)(null);
  var eventOptions = {
    passive: !(onTapStart || onTap || onTapCancel || onPointerDown)
  };
  function removePointerEndListener() {
    var _a2;
    (_a2 = cancelPointerEndListeners.current) === null || _a2 === void 0 ? void 0 : _a2.call(cancelPointerEndListeners);
    cancelPointerEndListeners.current = null;
  }
  function checkPointerEnd() {
    var _a2;
    removePointerEndListener();
    isPressing.current = false;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }
  function onPointerUp(event, info) {
    if (!checkPointerEnd())
      return;
    !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
  }
  function onPointerCancel(event, info) {
    if (!checkPointerEnd())
      return;
    onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
  }
  function onPointerDown(event, info) {
    var _a2;
    removePointerEndListener();
    if (isPressing.current)
      return;
    isPressing.current = true;
    cancelPointerEndListeners.current = pipe3(addPointerEvent(window, "pointerup", onPointerUp, eventOptions), addPointerEvent(window, "pointercancel", onPointerCancel, eventOptions));
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, true);
    onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
  }
  usePointerEvent(visualElement2, "pointerdown", hasPressListeners ? onPointerDown : void 0, eventOptions);
  useUnmountEffect2(removePointerEndListener);
}

// node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
init_react();
var import_react34 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/warn-once.mjs
init_react();
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message))
    return;
  console.warn(message);
  if (element)
    console.warn(element);
  warned.add(message);
}

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
init_react();
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = function(entry) {
  var _a;
  (_a = observerCallbacks.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
};
var fireAllObserverCallbacks = function(entries) {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_a) {
  var root = _a.root, options = __rest(_a, ["root"]);
  var lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  var rootObservers = observers.get(lookupRoot);
  var key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, __assign({ root }, options));
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  var rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return function() {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
function useViewport(_a) {
  var visualElement2 = _a.visualElement, whileInView = _a.whileInView, onViewportEnter = _a.onViewportEnter, onViewportLeave = _a.onViewportLeave, _b = _a.viewport, viewport2 = _b === void 0 ? {} : _b;
  var state2 = (0, import_react34.useRef)({
    hasEnteredView: false,
    isInView: false
  });
  var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
  if (viewport2.once && state2.current.hasEnteredView)
    shouldObserve = false;
  var useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
  useObserver(shouldObserve, state2.current, visualElement2, viewport2);
}
var thresholdNames = {
  some: 0,
  all: 1
};
function useIntersectionObserver(shouldObserve, state2, visualElement2, _a) {
  var root = _a.root, rootMargin = _a.margin, _b = _a.amount, amount = _b === void 0 ? "some" : _b, once2 = _a.once;
  (0, import_react34.useEffect)(function() {
    if (!shouldObserve)
      return;
    var options = {
      root: root === null || root === void 0 ? void 0 : root.current,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    var intersectionCallback = function(entry) {
      var _a2;
      var isIntersecting = entry.isIntersecting;
      if (state2.isInView === isIntersecting)
        return;
      state2.isInView = isIntersecting;
      if (once2 && !isIntersecting && state2.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        state2.hasEnteredView = true;
      }
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, isIntersecting);
      var props = visualElement2.getProps();
      var callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
      callback === null || callback === void 0 ? void 0 : callback(entry);
    };
    return observeIntersection(visualElement2.getInstance(), options, intersectionCallback);
  }, [shouldObserve, root, rootMargin, amount]);
}
function useMissingIntersectionObserver(shouldObserve, state2, visualElement2, _a) {
  var _b = _a.fallback, fallback = _b === void 0 ? true : _b;
  (0, import_react34.useEffect)(function() {
    if (!shouldObserve || !fallback)
      return;
    if (env !== "production") {
      warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
    }
    requestAnimationFrame(function() {
      var _a2;
      state2.hasEnteredView = true;
      var onViewportEnter = visualElement2.getProps().onViewportEnter;
      onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter(null);
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, true);
    });
  }, [shouldObserve]);
}

// node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs
init_react();
var makeRenderlessComponent = function(hook) {
  return function(props) {
    hook(props);
    return null;
  };
};

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: makeRenderlessComponent(useViewport),
  tap: makeRenderlessComponent(useTapGesture),
  focus: makeRenderlessComponent(useFocusGesture),
  hover: makeRenderlessComponent(useHoverGesture)
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
init_react();
var import_react36 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
init_react();
var import_react35 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-id.mjs
init_react();
var counter = 0;
var incrementId = function() {
  return counter++;
};
var useId3 = function() {
  return useConstant(incrementId);
};

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function usePresence() {
  var context = (0, import_react35.useContext)(PresenceContext);
  if (context === null)
    return [true, null];
  var isPresent2 = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
  var id2 = useId3();
  (0, import_react35.useEffect)(function() {
    return register(id2);
  }, []);
  var safeToRemove = function() {
    return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id2);
  };
  return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
}
function useIsPresent() {
  return isPresent((0, import_react35.useContext)(PresenceContext));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
init_react();
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  var prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (var i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// node_modules/framer-motion/dist/es/render/utils/animation.mjs
init_react();

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
init_react();

// node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
init_react();
var isNumericalString = function(v) {
  return /^\-?\d*\.?\d+$/.test(v);
};

// node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
init_react();
var isZeroValueString = function(v) {
  return /^0[^.\s]+$/.test(v);
};

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
init_react();
var testValueType = function(v) {
  return function(type) {
    return type.test(v);
  };
};

// node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
init_react();
var auto = {
  test: function(v) {
    return v === "auto";
  },
  parse: function(v) {
    return v;
  }
};

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px3, percent, degrees, vw, vh, auto];
var findDimensionValueType = function(v) {
  return dimensionValueTypes.find(testValueType(v));
};

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes), false), [color2, complex], false);
var findValueType = function(v) {
  return valueTypes.find(testValueType(v));
};

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement2, key, value) {
  if (visualElement2.hasValue(key)) {
    visualElement2.getValue(key).set(value);
  } else {
    visualElement2.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement2, definition) {
  var resolved = resolveVariant(visualElement2, definition);
  var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
  _a.transition;
  var target = __rest(_a, ["transitionEnd", "transition"]);
  target = __assign(__assign({}, target), transitionEnd);
  for (var key in target) {
    var value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement2, key, value);
  }
}
function checkTargetForNewValues(visualElement2, target, origin) {
  var _a, _b, _c;
  var _d;
  var newValueKeys = Object.keys(target).filter(function(key2) {
    return !visualElement2.hasValue(key2);
  });
  var numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (var i = 0; i < numNewValues; i++) {
    var key = newValueKeys[i];
    var targetValue = target[key];
    var value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone2(key, targetValue);
    }
    visualElement2.addValue(key, motionValue(value));
    (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
    visualElement2.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition3) {
  if (!transition3)
    return;
  var valueTransition = transition3[key] || transition3["default"] || transition3;
  return valueTransition.from;
}
function getOrigin(target, transition3, visualElement2) {
  var _a, _b;
  var origin = {};
  for (var key in target) {
    origin[key] = (_a = getOriginFromTransition(key, transition3)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
  }
  return origin;
}

// node_modules/framer-motion/dist/es/render/utils/animation.mjs
function animateVisualElement(visualElement2, definition, options) {
  if (options === void 0) {
    options = {};
  }
  visualElement2.notifyAnimationStart(definition);
  var animation;
  if (Array.isArray(definition)) {
    var animations2 = definition.map(function(variant) {
      return animateVariant(visualElement2, variant, options);
    });
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement2, definition, options);
  } else {
    var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
    animation = animateTarget(visualElement2, resolvedDefinition, options);
  }
  return animation.then(function() {
    return visualElement2.notifyAnimationComplete(definition);
  });
}
function animateVariant(visualElement2, variant, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var resolved = resolveVariant(visualElement2, variant, options.custom);
  var _b = (resolved || {}).transition, transition3 = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;
  if (options.transitionOverride) {
    transition3 = options.transitionOverride;
  }
  var getAnimation2 = resolved ? function() {
    return animateTarget(visualElement2, resolved, options);
  } : function() {
    return Promise.resolve();
  };
  var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
    if (forwardDelay === void 0) {
      forwardDelay = 0;
    }
    var _a2 = transition3.delayChildren, delayChildren = _a2 === void 0 ? 0 : _a2, staggerChildren = transition3.staggerChildren, staggerDirection = transition3.staggerDirection;
    return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function() {
    return Promise.resolve();
  };
  var when = transition3.when;
  if (when) {
    var _c = __read(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2), first = _c[0], last = _c[1];
    return first().then(last);
  } else {
    return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
  }
}
function animateTarget(visualElement2, definition, _a) {
  var _b;
  var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
  var _e = visualElement2.makeTargetAnimatable(definition), _f = _e.transition, transition3 = _f === void 0 ? visualElement2.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest(_e, ["transition", "transitionEnd"]);
  if (transitionOverride)
    transition3 = transitionOverride;
  var animations2 = [];
  var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
  for (var key in target) {
    var value = visualElement2.getValue(key);
    var valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    var valueTransition = __assign({ delay }, transition3);
    if (visualElement2.shouldReduceMotion && isTransformProp(key)) {
      valueTransition = __assign(__assign({}, valueTransition), { type: false, delay: 0 });
    }
    var animation = startAnimation(key, value, valueTarget, valueTransition);
    animations2.push(animation);
  }
  return Promise.all(animations2).then(function() {
    transitionEnd && setTarget(visualElement2, transitionEnd);
  });
}
function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
  if (delayChildren === void 0) {
    delayChildren = 0;
  }
  if (staggerChildren === void 0) {
    staggerChildren = 0;
  }
  if (staggerDirection === void 0) {
    staggerDirection = 1;
  }
  var animations2 = [];
  var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function(i) {
    if (i === void 0) {
      i = 0;
    }
    return i * staggerChildren;
  } : function(i) {
    if (i === void 0) {
      i = 0;
    }
    return maxStaggerDuration - i * staggerChildren;
  };
  Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
    animations2.push(animateVariant(child, variant, __assign(__assign({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function() {
      return child.notifyAnimationComplete(variant);
    }));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a2, b2) {
  return a2.sortNodePosition(b2);
}
function shouldBlockAnimation(_a, key) {
  var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var variantPriorityOrder = [
  AnimationType.Animate,
  AnimationType.InView,
  AnimationType.Focus,
  AnimationType.Hover,
  AnimationType.Tap,
  AnimationType.Drag,
  AnimationType.Exit
];
var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder), false).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement2) {
  return function(animations2) {
    return Promise.all(animations2.map(function(_a) {
      var animation = _a.animation, options = _a.options;
      return animateVisualElement(visualElement2, animation, options);
    }));
  };
}
function createAnimationState(visualElement2) {
  var animate3 = animateList(visualElement2);
  var state2 = createState();
  var allAnimatedKeys = {};
  var isInitialRender = true;
  var buildResolvedTypeValues = function(acc, definition) {
    var resolved = resolveVariant(visualElement2, definition);
    if (resolved) {
      resolved.transition;
      var transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
      acc = __assign(__assign(__assign({}, acc), target), transitionEnd);
    }
    return acc;
  };
  function isAnimated(key) {
    return allAnimatedKeys[key] !== void 0;
  }
  function setAnimateFunction(makeAnimator) {
    animate3 = makeAnimator(visualElement2);
  }
  function animateChanges(options, changedActiveType) {
    var _a;
    var props = visualElement2.getProps();
    var context = visualElement2.getVariantContext(true) || {};
    var animations2 = [];
    var removedKeys = /* @__PURE__ */ new Set();
    var encounteredKeys = {};
    var removedVariantIndex = Infinity;
    var _loop_1 = function(i2) {
      var type = reversePriorityOrder[i2];
      var typeState = state2[type];
      var prop2 = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      var propIsVariant = isVariantLabel(prop2);
      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i2;
      var isInherited = prop2 === context[type] && prop2 !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = __assign({}, encounteredKeys);
      if (!typeState.isActive && activeDelta === null || !prop2 && !typeState.prevProp || isAnimationControls(prop2) || typeof prop2 === "boolean") {
        return "continue";
      }
      var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop2);
      var shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i2 > removedVariantIndex && propIsVariant;
      var definitionList = Array.isArray(prop2) ? prop2 : [prop2];
      var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
      var allKeys = __assign(__assign({}, prevResolvedValues), resolvedValues);
      var markToAnimate = function(key2) {
        shouldAnimateType = true;
        removedKeys.delete(key2);
        typeState.needsAnimating[key2] = true;
      };
      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev) || variantDidChange) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop2;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = __assign(__assign({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement2.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push.apply(animations2, __spreadArray([], __read(definitionList.map(function(animation) {
          return {
            animation,
            options: __assign({ type }, options)
          };
        })), false));
      }
    };
    for (var i = 0; i < numAnimationTypes; i++) {
      _loop_1(i);
    }
    allAnimatedKeys = __assign({}, encounteredKeys);
    if (removedKeys.size) {
      var fallbackAnimation_1 = {};
      removedKeys.forEach(function(key) {
        var fallbackTarget = visualElement2.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation_1[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation_1 });
    }
    var shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate3(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state2[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state2[type].isActive = isActive;
    var animations2 = animateChanges(options, type);
    for (var key in state2) {
      state2[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    isAnimated,
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: function() {
      return state2;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (isVariantLabels(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive) {
  if (isActive === void 0) {
    isActive = false;
  }
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  var _a;
  return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.InView] = createTypeState(), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
}

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: makeRenderlessComponent(function(_a) {
    var visualElement2 = _a.visualElement, animate3 = _a.animate;
    visualElement2.animationState || (visualElement2.animationState = createAnimationState(visualElement2));
    if (isAnimationControls(animate3)) {
      (0, import_react36.useEffect)(function() {
        return animate3.subscribe(visualElement2);
      }, [animate3]);
    }
  }),
  exit: makeRenderlessComponent(function(props) {
    var custom = props.custom, visualElement2 = props.visualElement;
    var _a = __read(usePresence(), 2), isPresent2 = _a[0], safeToRemove = _a[1];
    var presenceContext = (0, import_react36.useContext)(PresenceContext);
    (0, import_react36.useEffect)(function() {
      var _a2, _b;
      visualElement2.isPresent = isPresent2;
      var animation = (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Exit, !isPresent2, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
      !isPresent2 && (animation === null || animation === void 0 ? void 0 : animation.then(safeToRemove));
    }, [isPresent2]);
  })
};

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
init_react();

// node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
init_react();
var import_react37 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
init_react();

// node_modules/framer-motion/dist/es/gestures/PanSession.mjs
init_react();
var PanSession2 = function() {
  function PanSession3(event, handlers, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.updatePoint = function() {
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
        return;
      var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null;
      var isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      var point2 = info2.point;
      var timestamp2 = getFrameData2().timestamp;
      _this.history.push(__assign(__assign({}, point2), { timestamp: timestamp2 }));
      var _a2 = _this.handlers, onStart = _a2.onStart, onMove = _a2.onMove;
      if (!isPanStarted) {
        onStart && onStart(_this.lastMoveEvent, info2);
        _this.startEvent = _this.lastMoveEvent;
      }
      onMove && onMove(_this.lastMoveEvent, info2);
    };
    this.handlePointerMove = function(event2, info2) {
      _this.lastMoveEvent = event2;
      _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
      if (isMouseEvent(event2) && event2.buttons === 0) {
        _this.handlePointerUp(event2, info2);
        return;
      }
      es_default2.update(_this.updatePoint, true);
    };
    this.handlePointerUp = function(event2, info2) {
      _this.end();
      var _a2 = _this.handlers, onEnd = _a2.onEnd, onSessionEnd = _a2.onSessionEnd;
      var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);
      if (_this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (isTouchEvent(event) && event.touches.length > 1)
      return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    var info = extractEventInfo(event);
    var initialInfo = transformPoint(info, this.transformPagePoint);
    var point = initialInfo.point;
    var timestamp = getFrameData2().timestamp;
    this.history = [__assign(__assign({}, point), { timestamp })];
    var onSessionStart = handlers.onSessionStart;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe3(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }
  PanSession3.prototype.updateHandlers = function(handlers) {
    this.handlers = handlers;
  };
  PanSession3.prototype.end = function() {
    this.removeListeners && this.removeListeners();
    cancelSync2.update(this.updatePoint);
  };
  return PanSession3;
}();
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b2) {
  return { x: a2.x - b2.x, y: a2.y - b2.y };
}
function getPanInfo(_a, history) {
  var point = _a.point;
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
init_react();
function applyConstraints(point, _a, elastic) {
  var min2 = _a.min, max2 = _a.max;
  if (min2 !== void 0 && point < min2) {
    point = elastic ? mix(min2, point, elastic.min) : Math.max(point, min2);
  } else if (max2 !== void 0 && point > max2) {
    point = elastic ? mix(max2, point, elastic.max) : Math.min(point, max2);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min2, max2) {
  return {
    min: min2 !== void 0 ? axis.min + min2 : void 0,
    max: max2 !== void 0 ? axis.max + max2 - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, _a) {
  var top2 = _a.top, left2 = _a.left, bottom2 = _a.bottom, right2 = _a.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left2, right2),
    y: calcRelativeAxisConstraints(layoutBox.y, top2, bottom2)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var _a;
  var min2 = constraintsAxis.min - layoutAxis.min;
  var max2 = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    _a = __read([max2, min2], 2), min2 = _a[0], max2 = _a[1];
  }
  return { min: min2, max: max2 };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  var origin = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  var relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic) {
  if (dragElastic === void 0) {
    dragElastic = defaultElastic;
  }
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  var _a;
  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
init_react();

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
init_react();
function convertBoundingBoxToBox(_a) {
  var top2 = _a.top, left2 = _a.left, right2 = _a.right, bottom2 = _a.bottom;
  return {
    x: { min: left2, max: right2 },
    y: { min: top2, max: bottom2 }
  };
}
function convertBoxToBoundingBox(_a) {
  var x = _a.x, y = _a.y;
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  var topLeft = transformPoint2({ x: point.left, y: point.top });
  var bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  var viewportBox = measureViewportBox(element, transformPagePoint);
  var scroll2 = rootProjectionNode2.scroll;
  if (scroll2) {
    translateAxis(viewportBox.x, scroll2.x);
    translateAxis(viewportBox.y, scroll2.y);
  }
  return viewportBox;
}

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = function() {
  function VisualElementDragControls2(visualElement2) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement2;
  }
  VisualElementDragControls2.prototype.start = function(originEvent, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c;
    if (this.visualElement.isPresent === false)
      return;
    var onSessionStart = function(event) {
      _this.stopAnimation();
      if (snapToCursor) {
        _this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    var onStart = function(event, info) {
      var _a2;
      var _b2 = _this.getProps(), drag2 = _b2.drag, dragPropagation = _b2.dragPropagation, onDragStart = _b2.onDragStart;
      if (drag2 && !dragPropagation) {
        if (_this.openGlobalLock)
          _this.openGlobalLock();
        _this.openGlobalLock = getGlobalLock(drag2);
        if (!_this.openGlobalLock)
          return;
      }
      _this.isDragging = true;
      _this.currentDirection = null;
      _this.resolveConstraints();
      if (_this.visualElement.projection) {
        _this.visualElement.projection.isAnimationBlocked = true;
        _this.visualElement.projection.target = void 0;
      }
      eachAxis(function(axis) {
        var _a3, _b3;
        var current = _this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          var measuredAxis = (_b3 = (_a3 = _this.visualElement.projection) === null || _a3 === void 0 ? void 0 : _a3.layout) === null || _b3 === void 0 ? void 0 : _b3.actual[axis];
          if (measuredAxis) {
            var length_1 = calcLength(measuredAxis);
            current = length_1 * (parseFloat(current) / 100);
          }
        }
        _this.originPoint[axis] = current;
      });
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
      (_a2 = _this.visualElement.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Drag, true);
    };
    var onMove = function(event, info) {
      var _a2 = _this.getProps(), dragPropagation = _a2.dragPropagation, dragDirectionLock = _a2.dragDirectionLock, onDirectionLock = _a2.onDirectionLock, onDrag = _a2.onDrag;
      if (!dragPropagation && !_this.openGlobalLock)
        return;
      var offset2 = info.offset;
      if (dragDirectionLock && _this.currentDirection === null) {
        _this.currentDirection = getCurrentDirection(offset2);
        if (_this.currentDirection !== null) {
          onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
        }
        return;
      }
      _this.updateAxis("x", info.point, offset2);
      _this.updateAxis("y", info.point, offset2);
      _this.visualElement.syncRender();
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
    };
    var onSessionEnd = function(event, info) {
      return _this.stop(event, info);
    };
    this.panSession = new PanSession2(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  };
  VisualElementDragControls2.prototype.stop = function(event, info) {
    var isDragging = this.isDragging;
    this.cancel();
    if (!isDragging)
      return;
    var velocity = info.velocity;
    this.startAnimation(velocity);
    var onDragEnd = this.getProps().onDragEnd;
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
  };
  VisualElementDragControls2.prototype.cancel = function() {
    var _a, _b;
    this.isDragging = false;
    if (this.visualElement.projection) {
      this.visualElement.projection.isAnimationBlocked = false;
    }
    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = void 0;
    var dragPropagation = this.getProps().dragPropagation;
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
  };
  VisualElementDragControls2.prototype.updateAxis = function(axis, _point, offset2) {
    var drag2 = this.getProps().drag;
    if (!offset2 || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    var axisValue = this.getAxisMotionValue(axis);
    var next = this.originPoint[axis] + offset2[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  };
  VisualElementDragControls2.prototype.resolveConstraints = function() {
    var _this = this;
    var _a = this.getProps(), dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
    var layout2 = (this.visualElement.projection || {}).layout;
    var prevConstraints = this.constraints;
    if (dragConstraints && isRefObject2(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.actual, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(function(axis) {
        if (_this.getAxisMotionValue(axis)) {
          _this.constraints[axis] = rebaseAxisConstraints(layout2.actual[axis], _this.constraints[axis]);
        }
      });
    }
  };
  VisualElementDragControls2.prototype.resolveRefConstraints = function() {
    var _a = this.getProps(), constraints = _a.dragConstraints, onMeasureDragConstraints = _a.onMeasureDragConstraints;
    if (!constraints || !isRefObject2(constraints))
      return false;
    var constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var projection = this.visualElement.projection;
    if (!projection || !projection.layout)
      return false;
    var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    var measuredConstraints = calcViewportConstraints(projection.layout.actual, constraintsBox);
    if (onMeasureDragConstraints) {
      var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  };
  VisualElementDragControls2.prototype.startAnimation = function(velocity) {
    var _this = this;
    var _a = this.getProps(), drag2 = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, dragSnapToOrigin = _a.dragSnapToOrigin, onDragTransitionEnd = _a.onDragTransitionEnd;
    var constraints = this.constraints || {};
    var momentumAnimations = eachAxis(function(axis) {
      var _a2;
      if (!shouldDrag(axis, drag2, _this.currentDirection)) {
        return;
      }
      var transition3 = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
      if (dragSnapToOrigin)
        transition3 = { min: 0, max: 0 };
      var bounceStiffness = dragElastic ? 200 : 1e6;
      var bounceDamping = dragElastic ? 40 : 1e7;
      var inertia2 = __assign(__assign({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness, bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition3);
      return _this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  };
  VisualElementDragControls2.prototype.startAxisValueAnimation = function(axis, transition3) {
    var axisValue = this.getAxisMotionValue(axis);
    return startAnimation(axis, axisValue, 0, transition3);
  };
  VisualElementDragControls2.prototype.stopAnimation = function() {
    var _this = this;
    eachAxis(function(axis) {
      return _this.getAxisMotionValue(axis).stop();
    });
  };
  VisualElementDragControls2.prototype.getAxisMotionValue = function(axis) {
    var _a, _b;
    var dragKey = "_drag" + axis.toUpperCase();
    var externalMotionValue = this.visualElement.getProps()[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
  };
  VisualElementDragControls2.prototype.snapToCursor = function(point) {
    var _this = this;
    eachAxis(function(axis) {
      var drag2 = _this.getProps().drag;
      if (!shouldDrag(axis, drag2, _this.currentDirection))
        return;
      var projection = _this.visualElement.projection;
      var axisValue = _this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        var _a = projection.layout.actual[axis], min2 = _a.min, max2 = _a.max;
        axisValue.set(point[axis] - mix(min2, max2, 0.5));
      }
    });
  };
  VisualElementDragControls2.prototype.scalePositionWithinConstraints = function() {
    var _this = this;
    var _a;
    var _b = this.getProps(), drag2 = _b.drag, dragConstraints = _b.dragConstraints;
    var projection = this.visualElement.projection;
    if (!isRefObject2(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    var boxProgress = { x: 0, y: 0 };
    eachAxis(function(axis) {
      var axisValue = _this.getAxisMotionValue(axis);
      if (axisValue) {
        var latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, _this.constraints[axis]);
      }
    });
    var transformTemplate2 = this.visualElement.getProps().transformTemplate;
    this.visualElement.getInstance().style.transform = transformTemplate2 ? transformTemplate2({}, "") : "none";
    (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis(function(axis) {
      if (!shouldDrag(axis, drag2, null))
        return;
      var axisValue = _this.getAxisMotionValue(axis);
      var _a2 = _this.constraints[axis], min2 = _a2.min, max2 = _a2.max;
      axisValue.set(mix(min2, max2, boxProgress[axis]));
    });
  };
  VisualElementDragControls2.prototype.addListeners = function() {
    var _this = this;
    var _a;
    elementDragControls.set(this.visualElement, this);
    var element = this.visualElement.getInstance();
    var stopPointerListener = addPointerEvent(element, "pointerdown", function(event) {
      var _a2 = _this.getProps(), drag2 = _a2.drag, _b = _a2.dragListener, dragListener = _b === void 0 ? true : _b;
      drag2 && dragListener && _this.start(event);
    });
    var measureDragConstraints = function() {
      var dragConstraints = _this.getProps().dragConstraints;
      if (isRefObject2(dragConstraints)) {
        _this.constraints = _this.resolveRefConstraints();
      }
    };
    var projection = this.visualElement.projection;
    var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    var stopResizeListener = addDomEvent(window, "resize", function() {
      return _this.scalePositionWithinConstraints();
    });
    projection.addEventListener("didUpdate", function(_a2) {
      var delta = _a2.delta, hasLayoutChanged = _a2.hasLayoutChanged;
      if (_this.isDragging && hasLayoutChanged) {
        eachAxis(function(axis) {
          var motionValue2 = _this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          _this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        _this.visualElement.syncRender();
      }
    });
    return function() {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
    };
  };
  VisualElementDragControls2.prototype.getProps = function() {
    var props = this.visualElement.getProps();
    var _a = props.drag, drag2 = _a === void 0 ? false : _a, _b = props.dragDirectionLock, dragDirectionLock = _b === void 0 ? false : _b, _c = props.dragPropagation, dragPropagation = _c === void 0 ? false : _c, _d = props.dragConstraints, dragConstraints = _d === void 0 ? false : _d, _e = props.dragElastic, dragElastic = _e === void 0 ? defaultElastic : _e, _f = props.dragMomentum, dragMomentum = _f === void 0 ? true : _f;
    return __assign(__assign({}, props), { drag: drag2, dragDirectionLock, dragPropagation, dragConstraints, dragElastic, dragMomentum });
  };
  return VisualElementDragControls2;
}();
function shouldDrag(direction2, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction2) && (currentDirection === null || currentDirection === direction2);
}
function getCurrentDirection(offset2, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }
  var direction2 = null;
  if (Math.abs(offset2.y) > lockThreshold) {
    direction2 = "y";
  } else if (Math.abs(offset2.x) > lockThreshold) {
    direction2 = "x";
  }
  return direction2;
}

// node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
function useDrag(props) {
  var groupDragControls = props.dragControls, visualElement2 = props.visualElement;
  var dragControls = useConstant(function() {
    return new VisualElementDragControls(visualElement2);
  });
  (0, import_react37.useEffect)(function() {
    return groupDragControls && groupDragControls.subscribe(dragControls);
  }, [dragControls, groupDragControls]);
  (0, import_react37.useEffect)(function() {
    return dragControls.addListeners();
  }, [dragControls]);
}

// node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs
init_react();
var import_react38 = __toESM(require_react(), 1);
function usePanGesture(_a) {
  var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement2 = _a.visualElement;
  var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  var panSession = (0, import_react38.useRef)(null);
  var transformPagePoint = (0, import_react38.useContext)(MotionConfigContext).transformPagePoint;
  var handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: function(event, info) {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  (0, import_react38.useEffect)(function() {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });
  function onPointerDown(event) {
    panSession.current = new PanSession2(event, handlers, {
      transformPagePoint
    });
  }
  usePointerEvent(visualElement2, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect2(function() {
    return panSession.current && panSession.current.end();
  });
}

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
};

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
init_react();

// node_modules/framer-motion/dist/es/render/html/visual-element.mjs
init_react();

// node_modules/framer-motion/dist/es/render/index.mjs
init_react();

// node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs
init_react();
var names2 = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "LayoutAnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function createLifecycles() {
  var managers = names2.map(function() {
    return new SubscriptionManager();
  });
  var propSubscriptions = {};
  var lifecycles = {
    clearAllListeners: function() {
      return managers.forEach(function(manager) {
        return manager.clear();
      });
    },
    updatePropListeners: function(props) {
      names2.forEach(function(name) {
        var _a;
        var on = "on" + name;
        var propListener = props[on];
        (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
        if (propListener) {
          propSubscriptions[name] = lifecycles[on](propListener);
        }
      });
    }
  };
  managers.forEach(function(manager, i) {
    lifecycles["on" + names2[i]] = function(handler) {
      return manager.add(handler);
    };
    lifecycles["notify" + names2[i]] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return manager.notify.apply(manager, __spreadArray([], __read(args), false));
    };
  });
  return lifecycles;
}

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
init_react();
function updateMotionValuesFromProps(element, next, prev) {
  var _a;
  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (true) {
        warnOnce(nextValue.version === "6.3.11", "Attempting to mix Framer Motion versions ".concat(nextValue.version, " with 6.3.11 may not work as expected."));
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        var existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
      }
    }
  }
  for (var key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// node_modules/framer-motion/dist/es/render/index.mjs
var visualElement = function(_a) {
  var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox2 = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps3 = _a.scrapeMotionValuesFromProps;
  return function(_a2, options) {
    var parent = _a2.parent, props = _a2.props, presenceId = _a2.presenceId, blockInitialAnimation = _a2.blockInitialAnimation, visualState = _a2.visualState, shouldReduceMotion = _a2.shouldReduceMotion;
    if (options === void 0) {
      options = {};
    }
    var isMounted = false;
    var latestValues = visualState.latestValues, renderState = visualState.renderState;
    var instance;
    var lifecycles = createLifecycles();
    var values = /* @__PURE__ */ new Map();
    var valueSubscriptions = /* @__PURE__ */ new Map();
    var prevMotionValues = {};
    var baseTarget = __assign({}, latestValues);
    var removeFromVariantTree;
    function render() {
      if (!instance || !isMounted)
        return;
      triggerBuild();
      renderInstance(instance, renderState, props.style, element.projection);
    }
    function triggerBuild() {
      build(element, renderState, latestValues, options, props);
    }
    function update() {
      lifecycles.notifyUpdate(latestValues);
    }
    function bindToMotionValue(key2, value2) {
      var removeOnChange = value2.onChange(function(latestValue) {
        latestValues[key2] = latestValue;
        props.onUpdate && es_default2.update(update, false, true);
      });
      var removeOnRenderRequest = value2.onRenderRequest(element.scheduleRender);
      valueSubscriptions.set(key2, function() {
        removeOnChange();
        removeOnRenderRequest();
      });
    }
    var initialMotionValues = scrapeMotionValuesFromProps3(props);
    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);
    var element = __assign(__assign({
      treeType,
      current: null,
      depth: parent ? parent.depth + 1 : 0,
      parent,
      children: /* @__PURE__ */ new Set(),
      presenceId,
      shouldReduceMotion,
      variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
      isVisible: void 0,
      manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
      blockInitialAnimation,
      isMounted: function() {
        return Boolean(instance);
      },
      mount: function(newInstance) {
        isMounted = true;
        instance = element.current = newInstance;
        if (element.projection) {
          element.projection.mount(newInstance);
        }
        if (isVariantNode && parent && !isControllingVariants) {
          removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
        }
        values.forEach(function(value2, key2) {
          return bindToMotionValue(key2, value2);
        });
        parent === null || parent === void 0 ? void 0 : parent.children.add(element);
        element.setProps(props);
      },
      unmount: function() {
        var _a3;
        (_a3 = element.projection) === null || _a3 === void 0 ? void 0 : _a3.unmount();
        cancelSync2.update(update);
        cancelSync2.render(render);
        valueSubscriptions.forEach(function(remove2) {
          return remove2();
        });
        removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
        parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
        lifecycles.clearAllListeners();
        instance = void 0;
        isMounted = false;
      },
      addVariantChild: function(child) {
        var _a3;
        var closestVariantNode = element.getClosestVariantNode();
        if (closestVariantNode) {
          (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
          return function() {
            return closestVariantNode.variantChildren.delete(child);
          };
        }
      },
      sortNodePosition: function(other) {
        if (!sortNodePosition || treeType !== other.treeType)
          return 0;
        return sortNodePosition(element.getInstance(), other.getInstance());
      },
      getClosestVariantNode: function() {
        return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
      },
      getLayoutId: function() {
        return props.layoutId;
      },
      getInstance: function() {
        return instance;
      },
      getStaticValue: function(key2) {
        return latestValues[key2];
      },
      setStaticValue: function(key2, value2) {
        return latestValues[key2] = value2;
      },
      getLatestValues: function() {
        return latestValues;
      },
      setVisibility: function(visibility) {
        if (element.isVisible === visibility)
          return;
        element.isVisible = visibility;
        element.scheduleRender();
      },
      makeTargetAnimatable: function(target, canMutate) {
        if (canMutate === void 0) {
          canMutate = true;
        }
        return makeTargetAnimatable(element, target, props, canMutate);
      },
      measureViewportBox: function() {
        return measureViewportBox2(instance, props);
      },
      addValue: function(key2, value2) {
        if (element.hasValue(key2))
          element.removeValue(key2);
        values.set(key2, value2);
        latestValues[key2] = value2.get();
        bindToMotionValue(key2, value2);
      },
      removeValue: function(key2) {
        var _a3;
        values.delete(key2);
        (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
        valueSubscriptions.delete(key2);
        delete latestValues[key2];
        removeValueFromRenderState(key2, renderState);
      },
      hasValue: function(key2) {
        return values.has(key2);
      },
      getValue: function(key2, defaultValue) {
        var value2 = values.get(key2);
        if (value2 === void 0 && defaultValue !== void 0) {
          value2 = motionValue(defaultValue);
          element.addValue(key2, value2);
        }
        return value2;
      },
      forEachValue: function(callback) {
        return values.forEach(callback);
      },
      readValue: function(key2) {
        var _a3;
        return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance, key2, options);
      },
      setBaseTarget: function(key2, value2) {
        baseTarget[key2] = value2;
      },
      getBaseTarget: function(key2) {
        if (getBaseTarget) {
          var target = getBaseTarget(props, key2);
          if (target !== void 0 && !isMotionValue(target))
            return target;
        }
        return baseTarget[key2];
      }
    }, lifecycles), {
      build: function() {
        triggerBuild();
        return renderState;
      },
      scheduleRender: function() {
        es_default2.render(render, false, true);
      },
      syncRender: render,
      setProps: function(newProps) {
        if (newProps.transformTemplate || props.transformTemplate) {
          element.scheduleRender();
        }
        props = newProps;
        lifecycles.updatePropListeners(newProps);
        prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps3(props), prevMotionValues);
      },
      getProps: function() {
        return props;
      },
      getVariant: function(name) {
        var _a3;
        return (_a3 = props.variants) === null || _a3 === void 0 ? void 0 : _a3[name];
      },
      getDefaultTransition: function() {
        return props.transition;
      },
      getTransformPagePoint: function() {
        return props.transformPagePoint;
      },
      getVariantContext: function(startAtParent) {
        if (startAtParent === void 0) {
          startAtParent = false;
        }
        if (startAtParent)
          return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
        if (!isControllingVariants) {
          var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
          if (props.initial !== void 0) {
            context_1.initial = props.initial;
          }
          return context_1;
        }
        var context = {};
        for (var i = 0; i < numVariantProps; i++) {
          var name_1 = variantProps[i];
          var prop2 = props[name_1];
          if (isVariantLabel(prop2) || prop2 === false) {
            context[name_1] = prop2;
          }
        }
        return context;
      }
    });
    return element;
  };
};
var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder), false);
var numVariantProps = variantProps.length;

// node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
init_react();

// node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
init_react();
function isCSSVariable2(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  var match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  var _a = __read(match, 3), token = _a[1], fallback = _a[2];
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
  if (depth === void 0) {
    depth = 1;
  }
  invariant(depth <= maxDepth, 'Max CSS variable fallback depth detected in property "'.concat(current, '". This may indicate a circular fallback dependency.'));
  var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
  if (!token)
    return;
  var resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable2(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement2, _a, transitionEnd) {
  var _b;
  var target = __rest(_a, []);
  var element = visualElement2.getInstance();
  if (!(element instanceof Element))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = __assign({}, transitionEnd);
  }
  visualElement2.forEachValue(function(value) {
    var current2 = value.get();
    if (!isCSSVariable2(current2))
      return;
    var resolved2 = getVariableValue(current2, element);
    if (resolved2)
      value.set(resolved2);
  });
  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable2(current))
      continue;
    var resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd)
      (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
  }
  return { target, transitionEnd };
}

// node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
init_react();
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = function(key) {
  return positionalKeys.has(key);
};
var hasPositionalKey = function(target) {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function(value, to) {
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = function(v) {
  return v === number || v === px3;
};
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function(matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
  return function(_bbox, _a) {
    var transform9 = _a.transform;
    if (transform9 === "none" || !transform9)
      return 0;
    var matrix3d = transform9.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform9.match(/^matrix\((.+)\)$/);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function(key) {
  return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement2) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement2.syncRender();
  return removedTransforms;
}
var positionalValues = {
  width: function(_a, _b) {
    var x = _a.x;
    var _c = _b.paddingLeft, paddingLeft = _c === void 0 ? "0" : _c, _d = _b.paddingRight, paddingRight = _d === void 0 ? "0" : _d;
    return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
  },
  height: function(_a, _b) {
    var y = _a.y;
    var _c = _b.paddingTop, paddingTop = _c === void 0 ? "0" : _c, _d = _b.paddingBottom, paddingBottom = _d === void 0 ? "0" : _d;
    return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
  },
  top: function(_bbox, _a) {
    var top2 = _a.top;
    return parseFloat(top2);
  },
  left: function(_bbox, _a) {
    var left2 = _a.left;
    return parseFloat(left2);
  },
  bottom: function(_a, _b) {
    var y = _a.y;
    var top2 = _b.top;
    return parseFloat(top2) + (y.max - y.min);
  },
  right: function(_a, _b) {
    var x = _a.x;
    var left2 = _b.left;
    return parseFloat(left2) + (x.max - x.min);
  },
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function(target, visualElement2, changedKeys) {
  var originBbox = visualElement2.measureViewportBox();
  var element = visualElement2.getInstance();
  var elementComputedStyle = getComputedStyle(element);
  var display = elementComputedStyle.display;
  var origin = {};
  if (display === "none") {
    visualElement2.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach(function(key) {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement2.syncRender();
  var targetBbox = visualElement2.measureViewportBox();
  changedKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    setAndResetVelocity(value, origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = function(visualElement2, target, origin, transitionEnd) {
  if (origin === void 0) {
    origin = {};
  }
  if (transitionEnd === void 0) {
    transitionEnd = {};
  }
  target = __assign({}, target);
  transitionEnd = __assign({}, transitionEnd);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = [];
  targetPositionalKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (!visualElement2.hasValue(key))
      return;
    var from = origin[key];
    var fromType = findDimensionValueType(from);
    var to = target[key];
    var toType;
    if (isKeyframesTarget(to)) {
      var numKeyframes = to.length;
      var fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (var i = fromIndex; i < numKeyframes; i++) {
        if (!toType) {
          toType = findDimensionValueType(to[i]);
          invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px3) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement2);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    var scrollY_1 = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(function(_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        visualElement2.getValue(key).set(value);
      });
    }
    visualElement2.syncRender();
    if (scrollY_1 !== null)
      window.scrollTo({ top: scrollY_1 });
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement2, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : { target, transitionEnd };
}

// node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
var parseDomVariant = function(visualElement2, target, origin, transitionEnd) {
  var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement2, target, origin, transitionEnd);
};

// node_modules/framer-motion/dist/es/render/html/visual-element.mjs
function getComputedStyle3(element) {
  return window.getComputedStyle(element);
}
var htmlConfig = {
  treeType: "dom",
  readValueFromInstance: function(domElement, key) {
    if (isTransformProp(key)) {
      var defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      var computedStyle = getComputedStyle3(domElement);
      return (isCSSVariable(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
    }
  },
  sortNodePosition: function(a2, b2) {
    return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
  },
  getBaseTarget: function(props, key) {
    var _a;
    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox: function(element, _a) {
    var transformPagePoint = _a.transformPagePoint;
    return measureViewportBox(element, transformPagePoint);
  },
  resetTransform: function(element, domElement, props) {
    var transformTemplate2 = props.transformTemplate;
    domElement.style.transform = transformTemplate2 ? transformTemplate2({}, "") : "none";
    element.scheduleRender();
  },
  restoreTransform: function(instance, mutableState) {
    instance.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState: function(key, _a) {
    var vars = _a.vars, style = _a.style;
    delete vars[key];
    delete style[key];
  },
  makeTargetAnimatable: function(element, _a, _b, isMounted) {
    var transformValues = _b.transformValues;
    if (isMounted === void 0) {
      isMounted = true;
    }
    var transition3 = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
    var origin = getOrigin(target, transition3 || {}, element);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(element, target, origin);
      var parsed = parseDomVariant(element, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return __assign({ transition: transition3, transitionEnd }, target);
  },
  scrapeMotionValuesFromProps,
  build: function(element, renderState, latestValues, options, props) {
    if (element.isVisible !== void 0) {
      renderState.style.visibility = element.isVisible ? "visible" : "hidden";
    }
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  },
  render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);

// node_modules/framer-motion/dist/es/render/svg/visual-element.mjs
init_react();
var svgVisualElement = visualElement(__assign(__assign({}, htmlConfig), { getBaseTarget: function(props, key) {
  return props[key];
}, readValueFromInstance: function(domElement, key) {
  var _a;
  if (isTransformProp(key)) {
    return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
  }
  key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
  return domElement.getAttribute(key);
}, scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2, build: function(_element, renderState, latestValues, options, props) {
  buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
}, render: renderSVG }));

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = function(Component, options) {
  return isSVGComponent(Component) ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
};

// node_modules/framer-motion/dist/es/motion/features/layout/index.mjs
init_react();

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
init_react();
var import_react39 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
init_react();
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: function(latest, node) {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px3.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    var x = pixelsToPercent(latest, node.target.x);
    var y = pixelsToPercent(latest, node.target.y);
    return "".concat(x, "% ").concat(y, "%");
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
init_react();
var varToken = "_$css";
var correctBoxShadow = {
  correct: function(latest, _a) {
    var treeScale = _a.treeScale, projectionDelta = _a.projectionDelta;
    var original = latest;
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, function(match) {
        cssVariables.push(match);
        return varToken;
      });
    }
    var shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    var template = complex.createTransformer(latest);
    var offset2 = typeof shadow[0] !== "number" ? 1 : 0;
    var xScale = projectionDelta.x.scale * treeScale.x;
    var yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset2] /= xScale;
    shadow[1 + offset2] /= yScale;
    var averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset2] === "number")
      shadow[2 + offset2] /= averageScale;
    if (typeof shadow[3 + offset2] === "number")
      shadow[3 + offset2] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
      var i_1 = 0;
      output = output.replace(varToken, function() {
        var cssVariable = cssVariables[i_1];
        i_1++;
        return cssVariable;
      });
    }
    return output;
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var MeasureLayoutWithContext = function(_super) {
  __extends(MeasureLayoutWithContext2, _super);
  function MeasureLayoutWithContext2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MeasureLayoutWithContext2.prototype.componentDidMount = function() {
    var _this = this;
    var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, switchLayoutGroup = _a.switchLayoutGroup, layoutId = _a.layoutId;
    var projection = visualElement2.projection;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.add(projection);
      if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", function() {
        _this.safeToRemove();
      });
      projection.setOptions(__assign(__assign({}, projection.options), { onExitComplete: function() {
        return _this.safeToRemove();
      } }));
    }
    globalProjectionState.hasEverUpdated = true;
  };
  MeasureLayoutWithContext2.prototype.getSnapshotBeforeUpdate = function(prevProps) {
    var _this = this;
    var _a = this.props, layoutDependency = _a.layoutDependency, visualElement2 = _a.visualElement, drag2 = _a.drag, isPresent2 = _a.isPresent;
    var projection = visualElement2.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent2;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent2) {
      if (isPresent2) {
        projection.promote();
      } else if (!projection.relegate()) {
        es_default2.postRender(function() {
          var _a2;
          if (!((_a2 = projection.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length)) {
            _this.safeToRemove();
          }
        });
      }
    }
    return null;
  };
  MeasureLayoutWithContext2.prototype.componentDidUpdate = function() {
    var projection = this.props.visualElement.projection;
    if (projection) {
      projection.root.didUpdate();
      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  };
  MeasureLayoutWithContext2.prototype.componentWillUnmount = function() {
    var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, promoteContext = _a.switchLayoutGroup;
    var projection = visualElement2.projection;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  };
  MeasureLayoutWithContext2.prototype.safeToRemove = function() {
    var safeToRemove = this.props.safeToRemove;
    safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
  };
  MeasureLayoutWithContext2.prototype.render = function() {
    return null;
  };
  return MeasureLayoutWithContext2;
}(import_react39.default.Component);
function MeasureLayout(props) {
  var _a = __read(usePresence(), 2), isPresent2 = _a[0], safeToRemove = _a[1];
  var layoutGroup = (0, import_react39.useContext)(LayoutGroupContext);
  return import_react39.default.createElement(MeasureLayoutWithContext, __assign({}, props, { layoutGroup, switchLayoutGroup: (0, import_react39.useContext)(SwitchLayoutGroupContext), isPresent: isPresent2, safeToRemove }));
}
var defaultScaleCorrectors = {
  borderRadius: __assign(__assign({}, correctBorderRadius), { applyTo: [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ] }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/motion/features/layout/index.mjs
var layoutFeatures = {
  measureLayout: MeasureLayout
};

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
init_react();

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
init_react();
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: function(ref, notify) {
    return addDomEvent(ref, "resize", notify);
  },
  measureScroll: function() {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  }
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: function(instance) {
    return {
      x: instance.scrollLeft,
      y: instance.scrollTop
    };
  },
  defaultParent: function() {
    if (!rootProjectionNode.current) {
      var documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: function(instance, value) {
    instance.style.transform = value !== null && value !== void 0 ? value : "none";
  }
});

// node_modules/framer-motion/dist/es/render/dom/motion.mjs
var featureBundle = __assign(__assign(__assign(__assign({}, animations), gestureAnimations), drag), layoutFeatures);
var motion = /* @__PURE__ */ createMotionProxy(function(Component, config3) {
  return createDomMotionConfig(Component, config3, featureBundle, createDomVisualElement, HTMLProjectionNode);
});

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
init_react();
var React19 = __toESM(require_react(), 1);
var import_react43 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
init_react();
var import_react41 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
init_react();
var import_react40 = __toESM(require_react(), 1);
function useIsMounted() {
  var isMounted = (0, import_react40.useRef)(false);
  useIsomorphicLayoutEffect(function() {
    isMounted.current = true;
    return function() {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
function useForceUpdate2() {
  var isMounted = useIsMounted();
  var _a = __read((0, import_react41.useState)(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
  var forceRender = (0, import_react41.useCallback)(function() {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  var deferredForceRender = (0, import_react41.useCallback)(function() {
    return es_default2.postRender(forceRender);
  }, [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
init_react();
var React18 = __toESM(require_react(), 1);
var import_react42 = __toESM(require_react(), 1);
var PresenceChild = function(_a) {
  var children = _a.children, initial2 = _a.initial, isPresent2 = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
  var presenceChildren = useConstant(newChildrenMap);
  var id2 = useId3();
  var context = (0, import_react42.useMemo)(function() {
    return {
      id: id2,
      initial: initial2,
      isPresent: isPresent2,
      custom,
      onExitComplete: function(childId) {
        var e_1, _a2;
        presenceChildren.set(childId, true);
        try {
          for (var _b = __values(presenceChildren.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var isComplete = _c.value;
            if (!isComplete)
              return;
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return))
              _a2.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete();
      },
      register: function(childId) {
        presenceChildren.set(childId, false);
        return function() {
          return presenceChildren.delete(childId);
        };
      }
    };
  }, presenceAffectsLayout ? void 0 : [isPresent2]);
  (0, import_react42.useMemo)(function() {
    presenceChildren.forEach(function(_, key) {
      return presenceChildren.set(key, false);
    });
  }, [isPresent2]);
  React18.useEffect(function() {
    !isPresent2 && !presenceChildren.size && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
  }, [isPresent2]);
  return React18.createElement(PresenceContext.Provider, { value: context }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var getChildKey = function(child) {
  return child.key || "";
};
function updateChildLookup(children, allChildren) {
  children.forEach(function(child) {
    var key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  var filtered = [];
  import_react43.Children.forEach(children, function(child) {
    if ((0, import_react43.isValidElement)(child))
      filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = function(_a) {
  var children = _a.children, custom = _a.custom, _b = _a.initial, initial2 = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
  var _d = __read(useForceUpdate2(), 1), forceRender = _d[0];
  var forceRenderLayoutGroup = (0, import_react43.useContext)(LayoutGroupContext).forceRender;
  if (forceRenderLayoutGroup)
    forceRender = forceRenderLayoutGroup;
  var isMounted = useIsMounted();
  var filteredChildren = onlyElements(children);
  var childrenToRender = filteredChildren;
  var exiting = /* @__PURE__ */ new Set();
  var presentChildren = (0, import_react43.useRef)(childrenToRender);
  var allChildren = (0, import_react43.useRef)(/* @__PURE__ */ new Map()).current;
  var isInitialRender = (0, import_react43.useRef)(true);
  useIsomorphicLayoutEffect(function() {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect2(function() {
    isInitialRender.current = true;
    allChildren.clear();
    exiting.clear();
  });
  if (isInitialRender.current) {
    return React19.createElement(React19.Fragment, null, childrenToRender.map(function(child) {
      return React19.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial2 ? void 0 : false, presenceAffectsLayout }, child);
    }));
  }
  childrenToRender = __spreadArray([], __read(childrenToRender), false);
  var presentKeys = presentChildren.current.map(getChildKey);
  var targetKeys = filteredChildren.map(getChildKey);
  var numPresent = presentKeys.length;
  for (var i = 0; i < numPresent; i++) {
    var key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key);
    }
  }
  if (exitBeforeEnter && exiting.size) {
    childrenToRender = [];
  }
  exiting.forEach(function(key2) {
    if (targetKeys.indexOf(key2) !== -1)
      return;
    var child = allChildren.get(key2);
    if (!child)
      return;
    var insertionIndex = presentKeys.indexOf(key2);
    var onExit = function() {
      allChildren.delete(key2);
      exiting.delete(key2);
      var removeIndex = presentChildren.current.findIndex(function(presentChild) {
        return presentChild.key === key2;
      });
      presentChildren.current.splice(removeIndex, 1);
      if (!exiting.size) {
        presentChildren.current = filteredChildren;
        if (isMounted.current === false)
          return;
        forceRender();
        onExitComplete && onExitComplete();
      }
    };
    childrenToRender.splice(insertionIndex, 0, React19.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom, presenceAffectsLayout }, child));
  });
  childrenToRender = childrenToRender.map(function(child) {
    var key2 = child.key;
    return exiting.has(key2) ? child : React19.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout }, child);
  });
  if (env !== "production" && exitBeforeEnter && childrenToRender.length > 1) {
    console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
  }
  return React19.createElement(React19.Fragment, null, exiting.size ? childrenToRender : childrenToRender.map(function(child) {
    return (0, import_react43.cloneElement)(child);
  }));
};

// node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js
function _extends13() {
  _extends13 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends13.apply(this, arguments);
}
function findToast(toasts, id2) {
  var position2 = getToastPosition(toasts, id2);
  var index2 = position2 ? toasts[position2].findIndex(function(toast) {
    return toast.id === id2;
  }) : -1;
  return {
    position: position2,
    index: index2
  };
}
var getToastPosition = function getToastPosition2(toasts, id2) {
  var _Object$values$flat$f;
  return (_Object$values$flat$f = Object.values(toasts).flat().find(function(toast) {
    return toast.id === id2;
  })) == null ? void 0 : _Object$values$flat$f.position;
};
function getToastStyle(position2) {
  var isRighty = position2.includes("right");
  var isLefty = position2.includes("left");
  var alignItems = "center";
  if (isRighty)
    alignItems = "flex-end";
  if (isLefty)
    alignItems = "flex-start";
  return {
    display: "flex",
    flexDirection: "column",
    alignItems
  };
}
function getToastListStyle(position2) {
  var isTopOrBottom = position2 === "top" || position2 === "bottom";
  var margin = isTopOrBottom ? "0 auto" : void 0;
  var top2 = position2.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0;
  var bottom2 = position2.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0;
  var right2 = !position2.includes("left") ? "env(safe-area-inset-right, 0px)" : void 0;
  var left2 = !position2.includes("right") ? "env(safe-area-inset-left, 0px)" : void 0;
  return {
    position: "fixed",
    zIndex: 5500,
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin,
    top: top2,
    bottom: bottom2,
    right: right2,
    left: left2
  };
}
var initialState = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
};
var toastStore = createStore(initialState);
function createStore(initialState2) {
  var state2 = initialState2;
  var listeners = /* @__PURE__ */ new Set();
  var setState = function setState2(setStateFn) {
    state2 = setStateFn(state2);
    listeners.forEach(function(l) {
      return l();
    });
  };
  return {
    getState: function getState() {
      return state2;
    },
    subscribe: function subscribe(listener) {
      listeners.add(listener);
      return function() {
        setState(function() {
          return initialState2;
        });
        listeners["delete"](listener);
      };
    },
    removeToast: function removeToast(id2, position2) {
      setState(function(prevState) {
        var _extends25;
        return _extends13({}, prevState, (_extends25 = {}, _extends25[position2] = prevState[position2].filter(function(toast) {
          return toast.id != id2;
        }), _extends25));
      });
    },
    notify: function notify(message, options) {
      var toast = createToast(message, options);
      var position2 = toast.position, id2 = toast.id;
      setState(function(prevToasts) {
        var _prevToasts$position, _prevToasts$position2, _extends32;
        var isTop = position2.includes("top");
        var toasts = isTop ? [toast].concat((_prevToasts$position = prevToasts[position2]) != null ? _prevToasts$position : []) : [].concat((_prevToasts$position2 = prevToasts[position2]) != null ? _prevToasts$position2 : [], [toast]);
        return _extends13({}, prevToasts, (_extends32 = {}, _extends32[position2] = toasts, _extends32));
      });
      return id2;
    },
    update: function update(id2, options) {
      if (!id2)
        return;
      setState(function(prevState) {
        var nextState = _extends13({}, prevState);
        var _findToast = findToast(nextState, id2), position2 = _findToast.position, index2 = _findToast.index;
        if (position2 && index2 !== -1) {
          nextState[position2][index2] = _extends13({}, nextState[position2][index2], options, {
            message: createRenderToast(options)
          });
        }
        return nextState;
      });
    },
    closeAll: function closeAll(_temp) {
      var _ref = _temp === void 0 ? {} : _temp, positions = _ref.positions;
      setState(function(prev) {
        var allPositions = ["bottom", "bottom-right", "bottom-left", "top", "top-left", "top-right"];
        var positionsToClose = positions != null ? positions : allPositions;
        return positionsToClose.reduce(function(acc, position2) {
          acc[position2] = prev[position2].map(function(toast) {
            return _extends13({}, toast, {
              requestClose: true
            });
          });
          return acc;
        }, _extends13({}, prev));
      });
    },
    close: function close(id2) {
      setState(function(prevState) {
        var _extends42;
        var position2 = getToastPosition(prevState, id2);
        if (!position2)
          return prevState;
        return _extends13({}, prevState, (_extends42 = {}, _extends42[position2] = prevState[position2].map(function(toast) {
          if (toast.id == id2) {
            return _extends13({}, toast, {
              requestClose: true
            });
          }
          return toast;
        }), _extends42));
      });
    },
    isActive: function isActive(id2) {
      return Boolean(findToast(toastStore.getState(), id2).position);
    }
  };
}
var counter2 = 0;
function createToast(message, options) {
  var _options$id, _options$position;
  if (options === void 0) {
    options = {};
  }
  counter2 += 1;
  var id2 = (_options$id = options.id) != null ? _options$id : counter2;
  var position2 = (_options$position = options.position) != null ? _options$position : "bottom";
  return {
    id: id2,
    message,
    position: position2,
    duration: options.duration,
    onCloseComplete: options.onCloseComplete,
    onRequestRemove: function onRequestRemove() {
      return toastStore.removeToast(String(id2), position2);
    },
    status: options.status,
    requestClose: false,
    containerStyle: options.containerStyle
  };
}
var Toast = function Toast2(props) {
  var status = props.status, _props$variant = props.variant, variant = _props$variant === void 0 ? "solid" : _props$variant, id2 = props.id, title = props.title, isClosable = props.isClosable, onClose = props.onClose, description = props.description, icon = props.icon;
  var alertTitleId = typeof id2 !== "undefined" ? "toast-" + id2 + "-title" : void 0;
  return /* @__PURE__ */ React20.createElement(Alert2, {
    status,
    variant,
    id: String(id2),
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    "aria-labelledby": alertTitleId
  }, /* @__PURE__ */ React20.createElement(AlertIcon, null, icon), /* @__PURE__ */ React20.createElement(chakra.div, {
    flex: "1",
    maxWidth: "100%"
  }, title && /* @__PURE__ */ React20.createElement(AlertTitle, {
    id: alertTitleId
  }, title), description && /* @__PURE__ */ React20.createElement(AlertDescription, {
    display: "block"
  }, description)), isClosable && /* @__PURE__ */ React20.createElement(CloseButton2, {
    size: "sm",
    onClick: onClose,
    position: "absolute",
    insetEnd: 1,
    top: 1
  }));
};
function createRenderToast(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, render = _options.render, _options$toastCompone = _options.toastComponent, ToastComponent2 = _options$toastCompone === void 0 ? Toast : _options$toastCompone;
  var renderToast = function renderToast2(props) {
    if (isFunction(render)) {
      return render(props);
    }
    return /* @__PURE__ */ React20.createElement(ToastComponent2, _extends13({}, props, options));
  };
  return renderToast;
}
var toastMotionVariants = {
  initial: function initial(props) {
    var _ref;
    var position2 = props.position;
    var dir = ["top", "bottom"].includes(position2) ? "y" : "x";
    var factor = ["top-right", "bottom-right"].includes(position2) ? 1 : -1;
    if (position2 === "bottom")
      factor = 1;
    return _ref = {
      opacity: 0
    }, _ref[dir] = factor * 24, _ref;
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
};
var ToastComponent = /* @__PURE__ */ React20.memo(function(props) {
  var id2 = props.id, message = props.message, onCloseComplete = props.onCloseComplete, onRequestRemove = props.onRequestRemove, _props$requestClose = props.requestClose, requestClose = _props$requestClose === void 0 ? false : _props$requestClose, _props$position = props.position, position2 = _props$position === void 0 ? "bottom" : _props$position, _props$duration = props.duration, duration = _props$duration === void 0 ? 5e3 : _props$duration, containerStyle = props.containerStyle, _props$motionVariants = props.motionVariants, motionVariants2 = _props$motionVariants === void 0 ? toastMotionVariants : _props$motionVariants, _props$toastSpacing = props.toastSpacing, toastSpacing = _props$toastSpacing === void 0 ? "0.5rem" : _props$toastSpacing;
  var _React$useState = React20.useState(duration), delay = _React$useState[0], setDelay = _React$useState[1];
  var isPresent2 = useIsPresent();
  useUpdateEffect(function() {
    if (!isPresent2) {
      onCloseComplete == null ? void 0 : onCloseComplete();
    }
  }, [isPresent2]);
  useUpdateEffect(function() {
    setDelay(duration);
  }, [duration]);
  var onMouseEnter = function onMouseEnter2() {
    return setDelay(null);
  };
  var onMouseLeave = function onMouseLeave2() {
    return setDelay(duration);
  };
  var close = function close2() {
    if (isPresent2)
      onRequestRemove();
  };
  React20.useEffect(function() {
    if (isPresent2 && requestClose) {
      onRequestRemove();
    }
  }, [isPresent2, requestClose, onRequestRemove]);
  useTimeout(close, delay);
  var containerStyles = React20.useMemo(function() {
    return _extends13({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: toastSpacing
    }, containerStyle);
  }, [containerStyle, toastSpacing]);
  var toastStyle = React20.useMemo(function() {
    return getToastStyle(position2);
  }, [position2]);
  return /* @__PURE__ */ React20.createElement(motion.li, {
    layout: true,
    className: "chakra-toast",
    variants: motionVariants2,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    onHoverStart: onMouseEnter,
    onHoverEnd: onMouseLeave,
    custom: {
      position: position2
    },
    style: toastStyle
  }, /* @__PURE__ */ React20.createElement(chakra.div, {
    role: "status",
    "aria-atomic": "true",
    className: "chakra-toast__inner",
    __css: containerStyles
  }, runIfFn(message, {
    id: id2,
    onClose: close
  })));
});
if (__DEV__) {
  ToastComponent.displayName = "ToastComponent";
}
var ToastProvider = function ToastProvider2(props) {
  var state2 = React20.useSyncExternalStore(toastStore.subscribe, toastStore.getState, toastStore.getState);
  var children = props.children, motionVariants2 = props.motionVariants, _props$component = props.component, Component = _props$component === void 0 ? ToastComponent : _props$component, portalProps = props.portalProps;
  var toastList = objectKeys(state2).map(function(position2) {
    var toasts = state2[position2];
    return /* @__PURE__ */ React20.createElement("ul", {
      role: "region",
      "aria-live": "polite",
      key: position2,
      id: "chakra-toast-manager-" + position2,
      style: getToastListStyle(position2)
    }, /* @__PURE__ */ React20.createElement(AnimatePresence, {
      initial: false
    }, toasts.map(function(toast) {
      return /* @__PURE__ */ React20.createElement(Component, _extends13({
        key: toast.id,
        motionVariants: motionVariants2
      }, toast));
    })));
  });
  return /* @__PURE__ */ React20.createElement(React20.Fragment, null, children, /* @__PURE__ */ React20.createElement(Portal, portalProps, toastList));
};

// node_modules/@chakra-ui/descendant/dist/chakra-ui-descendant.esm.js
init_react();
var import_react44 = __toESM(require_react());
function _extends14() {
  _extends14 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends14.apply(this, arguments);
}
function sortNodes(nodes) {
  return nodes.sort(function(a2, b2) {
    var compare = a2.compareDocumentPosition(b2);
    if (compare & Node.DOCUMENT_POSITION_FOLLOWING || compare & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      return -1;
    }
    if (compare & Node.DOCUMENT_POSITION_PRECEDING || compare & Node.DOCUMENT_POSITION_CONTAINS) {
      return 1;
    }
    if (compare & Node.DOCUMENT_POSITION_DISCONNECTED || compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) {
      throw Error("Cannot sort the given nodes.");
    } else {
      return 0;
    }
  });
}
var isElement2 = function isElement3(el) {
  return typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
};
function getNextIndex2(current, max2, loop) {
  var next = current + 1;
  if (loop && next >= max2)
    next = 0;
  return next;
}
function getPrevIndex(current, max2, loop) {
  var next = current - 1;
  if (loop && next < 0)
    next = max2;
  return next;
}
var useSafeLayoutEffect2 = typeof window !== "undefined" ? import_react44.useLayoutEffect : import_react44.useEffect;
var cast = function cast2(value) {
  return value;
};
var DescendantsManager = function DescendantsManager2() {
  var _this = this;
  this.descendants = /* @__PURE__ */ new Map();
  this.register = function(nodeOrOptions) {
    if (nodeOrOptions == null)
      return;
    if (isElement2(nodeOrOptions)) {
      return _this.registerNode(nodeOrOptions);
    }
    return function(node) {
      _this.registerNode(node, nodeOrOptions);
    };
  };
  this.unregister = function(node) {
    _this.descendants["delete"](node);
    var sorted = sortNodes(Array.from(_this.descendants.keys()));
    _this.assignIndex(sorted);
  };
  this.destroy = function() {
    _this.descendants.clear();
  };
  this.assignIndex = function(descendants) {
    _this.descendants.forEach(function(descendant) {
      var index2 = descendants.indexOf(descendant.node);
      descendant.index = index2;
      descendant.node.dataset["index"] = descendant.index.toString();
    });
  };
  this.count = function() {
    return _this.descendants.size;
  };
  this.enabledCount = function() {
    return _this.enabledValues().length;
  };
  this.values = function() {
    var values = Array.from(_this.descendants.values());
    return values.sort(function(a2, b2) {
      return a2.index - b2.index;
    });
  };
  this.enabledValues = function() {
    return _this.values().filter(function(descendant) {
      return !descendant.disabled;
    });
  };
  this.item = function(index2) {
    if (_this.count() === 0)
      return void 0;
    return _this.values()[index2];
  };
  this.enabledItem = function(index2) {
    if (_this.enabledCount() === 0)
      return void 0;
    return _this.enabledValues()[index2];
  };
  this.first = function() {
    return _this.item(0);
  };
  this.firstEnabled = function() {
    return _this.enabledItem(0);
  };
  this.last = function() {
    return _this.item(_this.descendants.size - 1);
  };
  this.lastEnabled = function() {
    var lastIndex = _this.enabledValues().length - 1;
    return _this.enabledItem(lastIndex);
  };
  this.indexOf = function(node) {
    var _this$descendants$get, _this$descendants$get2;
    if (!node)
      return -1;
    return (_this$descendants$get = (_this$descendants$get2 = _this.descendants.get(node)) == null ? void 0 : _this$descendants$get2.index) != null ? _this$descendants$get : -1;
  };
  this.enabledIndexOf = function(node) {
    if (node == null)
      return -1;
    return _this.enabledValues().findIndex(function(i) {
      return i.node.isSameNode(node);
    });
  };
  this.next = function(index2, loop) {
    if (loop === void 0) {
      loop = true;
    }
    var next = getNextIndex2(index2, _this.count(), loop);
    return _this.item(next);
  };
  this.nextEnabled = function(index2, loop) {
    if (loop === void 0) {
      loop = true;
    }
    var item = _this.item(index2);
    if (!item)
      return;
    var enabledIndex = _this.enabledIndexOf(item.node);
    var nextEnabledIndex = getNextIndex2(enabledIndex, _this.enabledCount(), loop);
    return _this.enabledItem(nextEnabledIndex);
  };
  this.prev = function(index2, loop) {
    if (loop === void 0) {
      loop = true;
    }
    var prev = getPrevIndex(index2, _this.count() - 1, loop);
    return _this.item(prev);
  };
  this.prevEnabled = function(index2, loop) {
    if (loop === void 0) {
      loop = true;
    }
    var item = _this.item(index2);
    if (!item)
      return;
    var enabledIndex = _this.enabledIndexOf(item.node);
    var prevEnabledIndex = getPrevIndex(enabledIndex, _this.enabledCount() - 1, loop);
    return _this.enabledItem(prevEnabledIndex);
  };
  this.registerNode = function(node, options) {
    if (!node || _this.descendants.has(node))
      return;
    var keys2 = Array.from(_this.descendants.keys()).concat(node);
    var sorted = sortNodes(keys2);
    if (options != null && options.disabled) {
      options.disabled = !!options.disabled;
    }
    var descendant = _extends14({
      node,
      index: -1
    }, options);
    _this.descendants.set(node, descendant);
    _this.assignIndex(sorted);
  };
};
function useDescendants() {
  var descendants = (0, import_react44.useRef)(new DescendantsManager());
  useSafeLayoutEffect2(function() {
    return function() {
      return descendants.current.destroy();
    };
  });
  return descendants.current;
}
var _createContext4 = createContext2({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
var DescendantsContextProvider = _createContext4[0];
var useDescendantsContext = _createContext4[1];
function useDescendant(options) {
  var descendants = useDescendantsContext();
  var _useState = (0, import_react44.useState)(-1), index2 = _useState[0], setIndex = _useState[1];
  var ref = (0, import_react44.useRef)(null);
  useSafeLayoutEffect2(function() {
    return function() {
      if (!ref.current)
        return;
      descendants.unregister(ref.current);
    };
  }, []);
  useSafeLayoutEffect2(function() {
    if (!ref.current)
      return;
    var dataIndex = Number(ref.current.dataset["index"]);
    if (index2 != dataIndex && !Number.isNaN(dataIndex)) {
      setIndex(dataIndex);
    }
  });
  var refCallback = options ? cast(descendants.register(options)) : cast(descendants.register);
  return {
    descendants,
    index: index2,
    enabledIndex: descendants.enabledIndexOf(ref.current),
    register: mergeRefs(refCallback, ref)
  };
}
function createDescendantContext() {
  var ContextProvider = cast(DescendantsContextProvider);
  var _useDescendantsContext = function _useDescendantsContext2() {
    return cast(useDescendantsContext());
  };
  var _useDescendant = function _useDescendant2(options) {
    return useDescendant(options);
  };
  var _useDescendants = function _useDescendants2() {
    return useDescendants();
  };
  return [
    ContextProvider,
    _useDescendantsContext,
    _useDescendants,
    _useDescendant
  ];
}

// node_modules/@chakra-ui/avatar/dist/chakra-ui-avatar.esm.js
init_react();

// node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js
init_react();
var React21 = __toESM(require_react());
var import_react45 = __toESM(require_react());
function _extends15() {
  _extends15 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends15.apply(this, arguments);
}
function _objectWithoutPropertiesLoose8(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useImage(props) {
  var loading = props.loading, src = props.src, srcSet = props.srcSet, onLoad = props.onLoad, onError = props.onError, crossOrigin = props.crossOrigin, sizes3 = props.sizes, ignoreFallback = props.ignoreFallback;
  var _useState = (0, import_react45.useState)("pending"), status = _useState[0], setStatus = _useState[1];
  (0, import_react45.useEffect)(function() {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  var imageRef = (0, import_react45.useRef)();
  var load = (0, import_react45.useCallback)(function() {
    if (!src)
      return;
    flush();
    var img = new Image();
    img.src = src;
    if (crossOrigin)
      img.crossOrigin = crossOrigin;
    if (srcSet)
      img.srcset = srcSet;
    if (sizes3)
      img.sizes = sizes3;
    if (loading)
      img.loading = loading;
    img.onload = function(event) {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };
    img.onerror = function(error2) {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error2);
    };
    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes3, onLoad, onError, loading]);
  var flush = function flush2() {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };
  useSafeLayoutEffect(function() {
    if (ignoreFallback)
      return void 0;
    if (status === "loading") {
      load();
    }
    return function() {
      flush();
    };
  }, [status, load, ignoreFallback]);
  return ignoreFallback ? "loaded" : status;
}
var shouldShowFallbackImage = function shouldShowFallbackImage2(status, fallbackStrategy) {
  return status !== "loaded" && fallbackStrategy === "beforeLoadOrError" || status === "failed" && fallbackStrategy === "onError";
};
var _excluded8 = ["htmlWidth", "htmlHeight", "alt"];
var _excluded23 = ["fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin", "fallbackStrategy", "referrerPolicy"];
var NativeImage = /* @__PURE__ */ React21.forwardRef(function(props, ref) {
  var htmlWidth = props.htmlWidth, htmlHeight = props.htmlHeight, alt = props.alt, rest = _objectWithoutPropertiesLoose8(props, _excluded8);
  return /* @__PURE__ */ React21.createElement("img", _extends15({
    width: htmlWidth,
    height: htmlHeight,
    ref,
    alt
  }, rest));
});
var Image$1 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var fallbackSrc = props.fallbackSrc, fallback = props.fallback, src = props.src, srcSet = props.srcSet, align = props.align, fit = props.fit, loading = props.loading, ignoreFallback = props.ignoreFallback, crossOrigin = props.crossOrigin, _props$fallbackStrate = props.fallbackStrategy, fallbackStrategy = _props$fallbackStrate === void 0 ? "beforeLoadOrError" : _props$fallbackStrate, referrerPolicy = props.referrerPolicy, rest = _objectWithoutPropertiesLoose8(props, _excluded23);
  var providedFallback = fallbackSrc !== void 0 || fallback !== void 0;
  var shouldIgnoreFallbackImage = loading != null || ignoreFallback || !providedFallback;
  var status = useImage(_extends15({}, props, {
    ignoreFallback: shouldIgnoreFallbackImage
  }));
  var showFallbackImage = shouldShowFallbackImage(status, fallbackStrategy);
  var shared = _extends15({
    ref,
    objectFit: fit,
    objectPosition: align
  }, shouldIgnoreFallbackImage ? rest : omit(rest, ["onError", "onLoad"]));
  if (showFallbackImage) {
    if (fallback)
      return fallback;
    return /* @__PURE__ */ React21.createElement(chakra.img, _extends15({
      as: NativeImage,
      className: "chakra-image__placeholder",
      src: fallbackSrc
    }, shared));
  }
  return /* @__PURE__ */ React21.createElement(chakra.img, _extends15({
    as: NativeImage,
    src,
    srcSet,
    crossOrigin,
    loading,
    referrerPolicy,
    className: "chakra-image"
  }, shared));
});
if (__DEV__) {
  Image$1.displayName = "Image";
}

// node_modules/@chakra-ui/avatar/dist/chakra-ui-avatar.esm.js
var React22 = __toESM(require_react());
function _objectWithoutPropertiesLoose9(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends16() {
  _extends16 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends16.apply(this, arguments);
}
var _excluded$12 = ["name", "getInitials"];
var _excluded24 = ["src", "srcSet", "name", "showBorder", "borderRadius", "onError", "getInitials", "icon", "iconLabel", "loading", "children", "borderColor", "ignoreFallback"];
var _createStylesContext2 = createStylesContext("Avatar");
var StylesProvider3 = _createStylesContext2[0];
var useStyles3 = _createStylesContext2[1];
var AvatarBadge = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyles3();
  var badgeStyles = _extends16({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    insetEnd: "0",
    bottom: "0"
  }, styles2.badge);
  return /* @__PURE__ */ React22.createElement(chakra.div, _extends16({
    ref
  }, props, {
    className: cx("chakra-avatar__badge", props.className),
    __css: badgeStyles
  }));
});
if (__DEV__) {
  AvatarBadge.displayName = "AvatarBadge";
}
function initials(name) {
  var _name$split = name.split(" "), firstName = _name$split[0], lastName = _name$split[1];
  return firstName && lastName ? "" + firstName.charAt(0) + lastName.charAt(0) : firstName.charAt(0);
}
var AvatarName = function AvatarName2(props) {
  var name = props.name, getInitials = props.getInitials, rest = _objectWithoutPropertiesLoose9(props, _excluded$12);
  var styles2 = useStyles3();
  return /* @__PURE__ */ React22.createElement(chakra.div, _extends16({
    role: "img",
    "aria-label": name
  }, rest, {
    __css: styles2.label
  }), name ? getInitials == null ? void 0 : getInitials(name) : null);
};
var DefaultIcon = function DefaultIcon2(props) {
  return /* @__PURE__ */ React22.createElement(chakra.svg, _extends16({
    viewBox: "0 0 128 128",
    color: "#fff",
    width: "100%",
    height: "100%",
    className: "chakra-avatar__svg"
  }, props), /* @__PURE__ */ React22.createElement("path", {
    fill: "currentColor",
    d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
  }), /* @__PURE__ */ React22.createElement("path", {
    fill: "currentColor",
    d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
  }));
};
var baseStyle22 = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "medium",
  position: "relative",
  flexShrink: 0
};
var Avatar2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useMultiStyleConfig("Avatar", props);
  var _omitThemingProps = omitThemingProps(props), src = _omitThemingProps.src, srcSet = _omitThemingProps.srcSet, name = _omitThemingProps.name, showBorder = _omitThemingProps.showBorder, _omitThemingProps$bor = _omitThemingProps.borderRadius, borderRadius = _omitThemingProps$bor === void 0 ? "full" : _omitThemingProps$bor, onError = _omitThemingProps.onError, _omitThemingProps$get = _omitThemingProps.getInitials, getInitials = _omitThemingProps$get === void 0 ? initials : _omitThemingProps$get, _omitThemingProps$ico = _omitThemingProps.icon, icon = _omitThemingProps$ico === void 0 ? /* @__PURE__ */ React22.createElement(DefaultIcon, null) : _omitThemingProps$ico, _omitThemingProps$ico2 = _omitThemingProps.iconLabel, iconLabel = _omitThemingProps$ico2 === void 0 ? " avatar" : _omitThemingProps$ico2, loading = _omitThemingProps.loading, children = _omitThemingProps.children, borderColor = _omitThemingProps.borderColor, ignoreFallback = _omitThemingProps.ignoreFallback, rest = _objectWithoutPropertiesLoose9(_omitThemingProps, _excluded24);
  var avatarStyles = _extends16({
    borderRadius,
    borderWidth: showBorder ? "2px" : void 0
  }, baseStyle22, styles2.container);
  if (borderColor) {
    avatarStyles.borderColor = borderColor;
  }
  return /* @__PURE__ */ React22.createElement(chakra.span, _extends16({
    ref
  }, rest, {
    className: cx("chakra-avatar", props.className),
    __css: avatarStyles
  }), /* @__PURE__ */ React22.createElement(StylesProvider3, {
    value: styles2
  }, /* @__PURE__ */ React22.createElement(AvatarImage, {
    src,
    srcSet,
    loading,
    onError,
    getInitials,
    name,
    borderRadius,
    icon,
    iconLabel,
    ignoreFallback
  }), children));
});
if (__DEV__) {
  Avatar2.displayName = "Avatar";
}
var AvatarImage = function AvatarImage2(props) {
  var src = props.src, srcSet = props.srcSet, onError = props.onError, getInitials = props.getInitials, name = props.name, borderRadius = props.borderRadius, loading = props.loading, iconLabel = props.iconLabel, _props$icon = props.icon, icon = _props$icon === void 0 ? /* @__PURE__ */ React22.createElement(DefaultIcon, null) : _props$icon, ignoreFallback = props.ignoreFallback, referrerPolicy = props.referrerPolicy;
  var status = useImage({
    src,
    onError,
    ignoreFallback
  });
  var hasLoaded = status === "loaded";
  var showFallback = !src || !hasLoaded;
  if (showFallback) {
    return name ? /* @__PURE__ */ React22.createElement(AvatarName, {
      className: "chakra-avatar__initials",
      getInitials,
      name
    }) : /* @__PURE__ */ React22.cloneElement(icon, {
      role: "img",
      "aria-label": iconLabel
    });
  }
  return /* @__PURE__ */ React22.createElement(chakra.img, {
    src,
    srcSet,
    alt: name,
    referrerPolicy,
    className: "chakra-avatar__img",
    loading,
    __css: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius
    }
  });
};
if (__DEV__) {
  AvatarImage.displayName = "AvatarImage";
}
var _excluded9 = ["children", "borderColor", "max", "spacing", "borderRadius"];
var AvatarGroup = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useMultiStyleConfig("Avatar", props);
  var _omitThemingProps = omitThemingProps(props), children = _omitThemingProps.children, borderColor = _omitThemingProps.borderColor, max2 = _omitThemingProps.max, _omitThemingProps$spa = _omitThemingProps.spacing, spacing2 = _omitThemingProps$spa === void 0 ? "-0.75rem" : _omitThemingProps$spa, _omitThemingProps$bor = _omitThemingProps.borderRadius, borderRadius = _omitThemingProps$bor === void 0 ? "full" : _omitThemingProps$bor, rest = _objectWithoutPropertiesLoose9(_omitThemingProps, _excluded9);
  var validChildren = getValidChildren(children);
  var childrenWithinMax = max2 ? validChildren.slice(0, max2) : validChildren;
  var excess = max2 != null && validChildren.length - max2;
  var reversedChildren = childrenWithinMax.reverse();
  var clones = reversedChildren.map(function(child, index2) {
    var _child$props$borderCo;
    var isFirstAvatar = index2 === 0;
    var childProps = {
      marginEnd: isFirstAvatar ? 0 : spacing2,
      size: props.size,
      borderColor: (_child$props$borderCo = child.props.borderColor) != null ? _child$props$borderCo : borderColor,
      showBorder: true
    };
    return /* @__PURE__ */ React22.cloneElement(child, filterUndefined(childProps));
  });
  var groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row-reverse"
  };
  var excessStyles = _extends16({
    borderRadius,
    marginStart: spacing2
  }, baseStyle22, styles2.excessLabel);
  return /* @__PURE__ */ React22.createElement(chakra.div, _extends16({
    ref,
    role: "group",
    __css: groupStyles
  }, rest, {
    className: cx("chakra-avatar__group", props.className)
  }), excess > 0 && /* @__PURE__ */ React22.createElement(chakra.span, {
    className: "chakra-avatar__excess",
    __css: excessStyles
  }, "+" + excess), clones);
});
if (__DEV__) {
  AvatarGroup.displayName = "AvatarGroup";
}

// node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js
init_react();
var React23 = __toESM(require_react());
function _objectWithoutPropertiesLoose10(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends17() {
  _extends17 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends17.apply(this, arguments);
}
var _excluded$4 = ["size", "colorScheme", "variant", "className", "spacing", "isAttached", "isDisabled"];
var _createContext5 = createContext2({
  strict: false,
  name: "ButtonGroupContext"
});
var ButtonGroupProvider = _createContext5[0];
var useButtonGroup = _createContext5[1];
var ButtonGroup = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var size2 = props.size, colorScheme = props.colorScheme, variant = props.variant, className = props.className, _props$spacing = props.spacing, spacing2 = _props$spacing === void 0 ? "0.5rem" : _props$spacing, isAttached = props.isAttached, isDisabled2 = props.isDisabled, rest = _objectWithoutPropertiesLoose10(props, _excluded$4);
  var _className = cx("chakra-button__group", className);
  var context = React23.useMemo(function() {
    return {
      size: size2,
      colorScheme,
      variant,
      isDisabled: isDisabled2
    };
  }, [size2, colorScheme, variant, isDisabled2]);
  var groupStyles = {
    display: "inline-flex"
  };
  if (isAttached) {
    groupStyles = _extends17({}, groupStyles, {
      "> *:first-of-type:not(:last-of-type)": {
        borderEndRadius: 0
      },
      "> *:not(:first-of-type):not(:last-of-type)": {
        borderRadius: 0
      },
      "> *:not(:first-of-type):last-of-type": {
        borderStartRadius: 0
      }
    });
  } else {
    groupStyles = _extends17({}, groupStyles, {
      "& > *:not(style) ~ *:not(style)": {
        marginStart: spacing2
      }
    });
  }
  return /* @__PURE__ */ React23.createElement(ButtonGroupProvider, {
    value: context
  }, /* @__PURE__ */ React23.createElement(chakra.div, _extends17({
    ref,
    role: "group",
    __css: groupStyles,
    className: _className,
    "data-attached": isAttached ? "" : void 0
  }, rest)));
});
if (__DEV__) {
  ButtonGroup.displayName = "ButtonGroup";
}
var _excluded$3 = ["label", "placement", "spacing", "children", "className", "__css"];
var ButtonSpinner = function ButtonSpinner2(props) {
  var label = props.label, placement = props.placement, _props$spacing = props.spacing, spacing2 = _props$spacing === void 0 ? "0.5rem" : _props$spacing, _props$children = props.children, children = _props$children === void 0 ? /* @__PURE__ */ React23.createElement(Spinner2, {
    color: "currentColor",
    width: "1em",
    height: "1em"
  }) : _props$children, className = props.className, __css = props.__css, rest = _objectWithoutPropertiesLoose10(props, _excluded$3);
  var _className = cx("chakra-button__spinner", className);
  var marginProp = placement === "start" ? "marginEnd" : "marginStart";
  var spinnerStyles = React23.useMemo(function() {
    var _extends25;
    return _extends17((_extends25 = {
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute"
    }, _extends25[marginProp] = label ? spacing2 : 0, _extends25.fontSize = "1em", _extends25.lineHeight = "normal", _extends25), __css);
  }, [__css, label, marginProp, spacing2]);
  return /* @__PURE__ */ React23.createElement(chakra.div, _extends17({
    className: _className
  }, rest, {
    __css: spinnerStyles
  }), children);
};
if (__DEV__) {
  ButtonSpinner.displayName = "ButtonSpinner";
}
var _excluded$2 = ["children", "className"];
var ButtonIcon = function ButtonIcon2(props) {
  var children = props.children, className = props.className, rest = _objectWithoutPropertiesLoose10(props, _excluded$2);
  var _children = /* @__PURE__ */ React23.isValidElement(children) ? /* @__PURE__ */ React23.cloneElement(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  var _className = cx("chakra-button__icon", className);
  return /* @__PURE__ */ React23.createElement(chakra.span, _extends17({
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0
  }, rest, {
    className: _className
  }), _children);
};
if (__DEV__) {
  ButtonIcon.displayName = "ButtonIcon";
}
function useButtonType(value) {
  var _React$useState = React23.useState(!value), isButton = _React$useState[0], setIsButton = _React$useState[1];
  var refCallback = React23.useCallback(function(node) {
    if (!node)
      return;
    setIsButton(node.tagName === "BUTTON");
  }, []);
  var type = isButton ? "button" : void 0;
  return {
    ref: refCallback,
    type
  };
}
var _excluded$13 = ["isDisabled", "isLoading", "isActive", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "spinnerPlacement", "className", "as"];
var Button2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var group = useButtonGroup();
  var styles2 = useStyleConfig("Button", _extends17({}, group, props));
  var _omitThemingProps = omitThemingProps(props), _omitThemingProps$isD = _omitThemingProps.isDisabled, isDisabled2 = _omitThemingProps$isD === void 0 ? group == null ? void 0 : group.isDisabled : _omitThemingProps$isD, isLoading = _omitThemingProps.isLoading, isActive = _omitThemingProps.isActive, children = _omitThemingProps.children, leftIcon = _omitThemingProps.leftIcon, rightIcon = _omitThemingProps.rightIcon, loadingText = _omitThemingProps.loadingText, _omitThemingProps$ico = _omitThemingProps.iconSpacing, iconSpacing2 = _omitThemingProps$ico === void 0 ? "0.5rem" : _omitThemingProps$ico, type = _omitThemingProps.type, spinner = _omitThemingProps.spinner, _omitThemingProps$spi = _omitThemingProps.spinnerPlacement, spinnerPlacement = _omitThemingProps$spi === void 0 ? "start" : _omitThemingProps$spi, className = _omitThemingProps.className, as = _omitThemingProps.as, rest = _objectWithoutPropertiesLoose10(_omitThemingProps, _excluded$13);
  var buttonStyles = React23.useMemo(function() {
    var _styles$_focus;
    var _focus = (0, import_lodash.default)({}, (_styles$_focus = styles2 == null ? void 0 : styles2["_focus"]) != null ? _styles$_focus : {}, {
      zIndex: 1
    });
    return _extends17({
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none"
    }, styles2, !!group && {
      _focus
    });
  }, [styles2, group]);
  var _useButtonType = useButtonType(as), _ref = _useButtonType.ref, defaultType = _useButtonType.type;
  var contentProps = {
    rightIcon,
    leftIcon,
    iconSpacing: iconSpacing2,
    children
  };
  return /* @__PURE__ */ React23.createElement(chakra.button, _extends17({
    disabled: isDisabled2 || isLoading,
    ref: useMergeRefs(ref, _ref),
    as,
    type: type != null ? type : defaultType,
    "data-active": dataAttr(isActive),
    "data-loading": dataAttr(isLoading),
    __css: buttonStyles,
    className: cx("chakra-button", className)
  }, rest), isLoading && spinnerPlacement === "start" && /* @__PURE__ */ React23.createElement(ButtonSpinner, {
    className: "chakra-button__spinner--start",
    label: loadingText,
    placement: "start",
    spacing: iconSpacing2
  }, spinner), isLoading ? loadingText || /* @__PURE__ */ React23.createElement(chakra.span, {
    opacity: 0
  }, /* @__PURE__ */ React23.createElement(ButtonContent, contentProps)) : /* @__PURE__ */ React23.createElement(ButtonContent, contentProps), isLoading && spinnerPlacement === "end" && /* @__PURE__ */ React23.createElement(ButtonSpinner, {
    className: "chakra-button__spinner--end",
    label: loadingText,
    placement: "end",
    spacing: iconSpacing2
  }, spinner));
});
if (__DEV__) {
  Button2.displayName = "Button";
}
function ButtonContent(props) {
  var leftIcon = props.leftIcon, rightIcon = props.rightIcon, children = props.children, iconSpacing2 = props.iconSpacing;
  return /* @__PURE__ */ React23.createElement(React23.Fragment, null, leftIcon && /* @__PURE__ */ React23.createElement(ButtonIcon, {
    marginEnd: iconSpacing2
  }, leftIcon), children, rightIcon && /* @__PURE__ */ React23.createElement(ButtonIcon, {
    marginStart: iconSpacing2
  }, rightIcon));
}
var _excluded10 = ["icon", "children", "isRound", "aria-label"];
var IconButton = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var icon = props.icon, children = props.children, isRound = props.isRound, ariaLabel = props["aria-label"], rest = _objectWithoutPropertiesLoose10(props, _excluded10);
  var element = icon || children;
  var _children = /* @__PURE__ */ React23.isValidElement(element) ? /* @__PURE__ */ React23.cloneElement(element, {
    "aria-hidden": true,
    focusable: false
  }) : null;
  return /* @__PURE__ */ React23.createElement(Button2, _extends17({
    padding: "0",
    borderRadius: isRound ? "full" : void 0,
    ref,
    "aria-label": ariaLabel
  }, rest), _children);
});
if (__DEV__) {
  IconButton.displayName = "IconButton";
}

// node_modules/@chakra-ui/form-control/dist/chakra-ui-form-control.esm.js
init_react();
var React24 = __toESM(require_react());
function _extends18() {
  _extends18 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends18.apply(this, arguments);
}
function _objectWithoutPropertiesLoose11(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$22 = ["id", "isRequired", "isInvalid", "isDisabled", "isReadOnly"];
var _excluded2$1 = ["getRootProps", "htmlProps"];
var _createStylesContext$1 = createStylesContext("FormControl");
var StylesProvider$1 = _createStylesContext$1[0];
var useStyles$1 = _createStylesContext$1[1];
var useFormControlStyles = useStyles$1;
var _createContext6 = createContext2({
  strict: false,
  name: "FormControlContext"
});
var FormControlProvider = _createContext6[0];
var useFormControlContext = _createContext6[1];
function useFormControlProvider(props) {
  var idProp = props.id, isRequired = props.isRequired, isInvalid = props.isInvalid, isDisabled2 = props.isDisabled, isReadOnly = props.isReadOnly, htmlProps = _objectWithoutPropertiesLoose11(props, _excluded$22);
  var uuid = useId2();
  var id2 = idProp || "field-" + uuid;
  var labelId = id2 + "-label";
  var feedbackId = id2 + "-feedback";
  var helpTextId = id2 + "-helptext";
  var _React$useState = React24.useState(false), hasFeedbackText = _React$useState[0], setHasFeedbackText = _React$useState[1];
  var _React$useState2 = React24.useState(false), hasHelpText = _React$useState2[0], setHasHelpText = _React$useState2[1];
  var _useBoolean = useBoolean(), isFocused = _useBoolean[0], setFocus = _useBoolean[1];
  var getHelpTextProps = React24.useCallback(function(props2, forwardedRef) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (forwardedRef === void 0) {
      forwardedRef = null;
    }
    return _extends18({
      id: helpTextId
    }, props2, {
      ref: mergeRefs(forwardedRef, function(node) {
        if (!node)
          return;
        setHasHelpText(true);
      })
    });
  }, [helpTextId]);
  var getLabelProps = React24.useCallback(function(props2, forwardedRef) {
    var _props$id, _props$htmlFor;
    if (props2 === void 0) {
      props2 = {};
    }
    if (forwardedRef === void 0) {
      forwardedRef = null;
    }
    return _extends18({}, props2, {
      ref: forwardedRef,
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(isDisabled2),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly),
      id: (_props$id = props2.id) != null ? _props$id : labelId,
      htmlFor: (_props$htmlFor = props2.htmlFor) != null ? _props$htmlFor : id2
    });
  }, [id2, isDisabled2, isFocused, isInvalid, isReadOnly, labelId]);
  var getErrorMessageProps = React24.useCallback(function(props2, forwardedRef) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (forwardedRef === void 0) {
      forwardedRef = null;
    }
    return _extends18({
      id: feedbackId
    }, props2, {
      ref: mergeRefs(forwardedRef, function(node) {
        if (!node)
          return;
        setHasFeedbackText(true);
      }),
      "aria-live": "polite"
    });
  }, [feedbackId]);
  var getRootProps = React24.useCallback(function(props2, forwardedRef) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (forwardedRef === void 0) {
      forwardedRef = null;
    }
    return _extends18({}, props2, htmlProps, {
      ref: forwardedRef,
      role: "group"
    });
  }, [htmlProps]);
  var getRequiredIndicatorProps = React24.useCallback(function(props2, forwardedRef) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (forwardedRef === void 0) {
      forwardedRef = null;
    }
    return _extends18({}, props2, {
      ref: forwardedRef,
      role: "presentation",
      "aria-hidden": true,
      children: props2.children || "*"
    });
  }, []);
  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled2,
    isFocused: !!isFocused,
    onFocus: setFocus.on,
    onBlur: setFocus.off,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id: id2,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  };
}
var FormControl = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useMultiStyleConfig("Form", props);
  var ownProps = omitThemingProps(props);
  var _useFormControlProvid = useFormControlProvider(ownProps), getRootProps = _useFormControlProvid.getRootProps;
  _useFormControlProvid.htmlProps;
  var context = _objectWithoutPropertiesLoose11(_useFormControlProvid, _excluded2$1);
  var className = cx("chakra-form-control", props.className);
  return /* @__PURE__ */ React24.createElement(FormControlProvider, {
    value: context
  }, /* @__PURE__ */ React24.createElement(StylesProvider$1, {
    value: styles2
  }, /* @__PURE__ */ React24.createElement(chakra.div, _extends18({}, getRootProps({}, ref), {
    className,
    __css: styles2["container"]
  }))));
});
if (__DEV__) {
  FormControl.displayName = "FormControl";
}
var FormHelperText = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var field = useFormControlContext();
  var styles2 = useStyles$1();
  var className = cx("chakra-form__helper-text", props.className);
  return /* @__PURE__ */ React24.createElement(chakra.div, _extends18({}, field == null ? void 0 : field.getHelpTextProps(props, ref), {
    __css: styles2.helperText,
    className
  }));
});
if (__DEV__) {
  FormHelperText.displayName = "FormHelperText";
}
var _excluded$14 = ["isDisabled", "isInvalid", "isReadOnly", "isRequired"];
var _excluded25 = ["id", "disabled", "readOnly", "required", "isRequired", "isInvalid", "isReadOnly", "isDisabled", "onFocus", "onBlur"];
function useFormControl(props) {
  var _useFormControlProps = useFormControlProps(props), isDisabled2 = _useFormControlProps.isDisabled, isInvalid = _useFormControlProps.isInvalid, isReadOnly = _useFormControlProps.isReadOnly, isRequired = _useFormControlProps.isRequired, rest = _objectWithoutPropertiesLoose11(_useFormControlProps, _excluded$14);
  return _extends18({}, rest, {
    disabled: isDisabled2,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": ariaAttr(isInvalid),
    "aria-required": ariaAttr(isRequired),
    "aria-readonly": ariaAttr(isReadOnly)
  });
}
function useFormControlProps(props) {
  var _ref, _ref2, _ref3;
  var field = useFormControlContext();
  var id2 = props.id, disabled2 = props.disabled, readOnly2 = props.readOnly, required = props.required, isRequired = props.isRequired, isInvalid = props.isInvalid, isReadOnly = props.isReadOnly, isDisabled2 = props.isDisabled, onFocus = props.onFocus, onBlur = props.onBlur, rest = _objectWithoutPropertiesLoose11(props, _excluded25);
  var labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if (field != null && field.hasFeedbackText && field != null && field.isInvalid) {
    labelIds.push(field.feedbackId);
  }
  if (field != null && field.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return _extends18({}, rest, {
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id2 != null ? id2 : field == null ? void 0 : field.id,
    isDisabled: (_ref = disabled2 != null ? disabled2 : isDisabled2) != null ? _ref : field == null ? void 0 : field.isDisabled,
    isReadOnly: (_ref2 = readOnly2 != null ? readOnly2 : isReadOnly) != null ? _ref2 : field == null ? void 0 : field.isReadOnly,
    isRequired: (_ref3 = required != null ? required : isRequired) != null ? _ref3 : field == null ? void 0 : field.isRequired,
    isInvalid: isInvalid != null ? isInvalid : field == null ? void 0 : field.isInvalid,
    onFocus: callAllHandlers(field == null ? void 0 : field.onFocus, onFocus),
    onBlur: callAllHandlers(field == null ? void 0 : field.onBlur, onBlur)
  });
}
var _createStylesContext3 = createStylesContext("FormError");
var StylesProvider4 = _createStylesContext3[0];
var useStyles4 = _createStylesContext3[1];
var FormErrorMessage = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useMultiStyleConfig("FormError", props);
  var ownProps = omitThemingProps(props);
  var field = useFormControlContext();
  if (!(field != null && field.isInvalid))
    return null;
  return /* @__PURE__ */ React24.createElement(StylesProvider4, {
    value: styles2
  }, /* @__PURE__ */ React24.createElement(chakra.div, _extends18({}, field == null ? void 0 : field.getErrorMessageProps(ownProps, ref), {
    className: cx("chakra-form__error-message", props.className),
    __css: _extends18({
      display: "flex",
      alignItems: "center"
    }, styles2.text)
  })));
});
if (__DEV__) {
  FormErrorMessage.displayName = "FormErrorMessage";
}
var FormErrorIcon = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyles4();
  var field = useFormControlContext();
  if (!(field != null && field.isInvalid))
    return null;
  var _className = cx("chakra-form__error-icon", props.className);
  return /* @__PURE__ */ React24.createElement(Icon$1, _extends18({
    ref,
    "aria-hidden": true
  }, props, {
    __css: styles2.icon,
    className: _className
  }), /* @__PURE__ */ React24.createElement("path", {
    fill: "currentColor",
    d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
  }));
});
if (__DEV__) {
  FormErrorIcon.displayName = "FormErrorIcon";
}
var _excluded11 = ["className", "children", "requiredIndicator", "optionalIndicator"];
var FormLabel2 = /* @__PURE__ */ forwardRef2(function(passedProps, ref) {
  var _field$getLabelProps;
  var styles2 = useStyleConfig("FormLabel", passedProps);
  var props = omitThemingProps(passedProps);
  props.className;
  var children = props.children, _props$requiredIndica = props.requiredIndicator, requiredIndicator = _props$requiredIndica === void 0 ? /* @__PURE__ */ React24.createElement(RequiredIndicator, null) : _props$requiredIndica, _props$optionalIndica = props.optionalIndicator, optionalIndicator = _props$optionalIndica === void 0 ? null : _props$optionalIndica, rest = _objectWithoutPropertiesLoose11(props, _excluded11);
  var field = useFormControlContext();
  var ownProps = (_field$getLabelProps = field == null ? void 0 : field.getLabelProps(rest, ref)) != null ? _field$getLabelProps : _extends18({
    ref
  }, rest);
  return /* @__PURE__ */ React24.createElement(chakra.label, _extends18({}, ownProps, {
    className: cx("chakra-form__label", props.className),
    __css: _extends18({
      display: "block",
      textAlign: "start"
    }, styles2)
  }), children, field != null && field.isRequired ? requiredIndicator : optionalIndicator);
});
if (__DEV__) {
  FormLabel2.displayName = "FormLabel";
}
var RequiredIndicator = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var field = useFormControlContext();
  var styles2 = useFormControlStyles();
  if (!(field != null && field.isRequired))
    return null;
  var className = cx("chakra-form__required-indicator", props.className);
  return /* @__PURE__ */ React24.createElement(chakra.span, _extends18({}, field == null ? void 0 : field.getRequiredIndicatorProps(props, ref), {
    __css: styles2.requiredIndicator,
    className
  }));
});
if (__DEV__) {
  RequiredIndicator.displayName = "RequiredIndicator";
}

// node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js
init_react();
var React25 = __toESM(require_react());
function _extends19() {
  _extends19 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends19.apply(this, arguments);
}
function _objectWithoutPropertiesLoose12(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$h = ["ratio", "children", "className"];
var AspectRatio = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _props$ratio = props.ratio, ratio = _props$ratio === void 0 ? 4 / 3 : _props$ratio, children = props.children, className = props.className, rest = _objectWithoutPropertiesLoose12(props, _excluded$h);
  var child = React25.Children.only(children);
  var _className = cx("chakra-aspect-ratio", className);
  return /* @__PURE__ */ React25.createElement(chakra.div, _extends19({
    ref,
    position: "relative",
    className: _className,
    _before: {
      height: 0,
      content: '""',
      display: "block",
      paddingBottom: mapResponsive(ratio, function(r) {
        return 1 / r * 100 + "%";
      })
    },
    __css: {
      "& > *:not(style)": {
        overflow: "hidden",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      },
      "& > img, & > video": {
        objectFit: "cover"
      }
    }
  }, rest), child);
});
if (__DEV__) {
  AspectRatio.displayName = "AspectRatio";
}
var _excluded$g = ["className"];
var Badge2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyleConfig("Badge", props);
  var _omitThemingProps = omitThemingProps(props);
  _omitThemingProps.className;
  var rest = _objectWithoutPropertiesLoose12(_omitThemingProps, _excluded$g);
  return /* @__PURE__ */ React25.createElement(chakra.span, _extends19({
    ref,
    className: cx("chakra-badge", props.className)
  }, rest, {
    __css: _extends19({
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle"
    }, styles2)
  }));
});
if (__DEV__) {
  Badge2.displayName = "Badge";
}
var _excluded$f = ["size", "centerContent"];
var _excluded2$5 = ["size"];
var Box = chakra("div");
if (__DEV__) {
  Box.displayName = "Box";
}
var Square = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var size2 = props.size, _props$centerContent = props.centerContent, centerContent = _props$centerContent === void 0 ? true : _props$centerContent, rest = _objectWithoutPropertiesLoose12(props, _excluded$f);
  var styles2 = centerContent ? {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } : {};
  return /* @__PURE__ */ React25.createElement(Box, _extends19({
    ref,
    boxSize: size2,
    __css: _extends19({}, styles2, {
      flexShrink: 0,
      flexGrow: 0
    })
  }, rest));
});
if (__DEV__) {
  Square.displayName = "Square";
}
var Circle = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var size2 = props.size, rest = _objectWithoutPropertiesLoose12(props, _excluded2$5);
  return /* @__PURE__ */ React25.createElement(Square, _extends19({
    size: size2,
    ref,
    borderRadius: "9999px"
  }, rest));
});
if (__DEV__) {
  Circle.displayName = "Circle";
}
var Center = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
if (__DEV__) {
  Center.displayName = "Center";
}
var _excluded$d = ["className"];
var Code2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyleConfig("Code", props);
  var _omitThemingProps = omitThemingProps(props);
  _omitThemingProps.className;
  var rest = _objectWithoutPropertiesLoose12(_omitThemingProps, _excluded$d);
  return /* @__PURE__ */ React25.createElement(chakra.code, _extends19({
    ref,
    className: cx("chakra-code", props.className)
  }, rest, {
    __css: _extends19({
      display: "inline-block"
    }, styles2)
  }));
});
if (__DEV__) {
  Code2.displayName = "Code";
}
var _excluded$c = ["className", "centerContent"];
var Container4 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _omitThemingProps = omitThemingProps(props), className = _omitThemingProps.className, centerContent = _omitThemingProps.centerContent, rest = _objectWithoutPropertiesLoose12(_omitThemingProps, _excluded$c);
  var styles2 = useStyleConfig("Container", props);
  return /* @__PURE__ */ React25.createElement(chakra.div, _extends19({
    ref,
    className: cx("chakra-container", className)
  }, rest, {
    __css: _extends19({}, styles2, centerContent && {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    })
  }));
});
if (__DEV__) {
  Container4.displayName = "Container";
}
var _excluded$b = ["borderLeftWidth", "borderBottomWidth", "borderTopWidth", "borderRightWidth", "borderWidth", "borderStyle", "borderColor"];
var _excluded2$4 = ["className", "orientation", "__css"];
var Divider2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _useStyleConfig = useStyleConfig("Divider", props), borderLeftWidth = _useStyleConfig.borderLeftWidth, borderBottomWidth = _useStyleConfig.borderBottomWidth, borderTopWidth = _useStyleConfig.borderTopWidth, borderRightWidth = _useStyleConfig.borderRightWidth, borderWidth = _useStyleConfig.borderWidth, borderStyle = _useStyleConfig.borderStyle, borderColor = _useStyleConfig.borderColor, styles2 = _objectWithoutPropertiesLoose12(_useStyleConfig, _excluded$b);
  var _omitThemingProps = omitThemingProps(props), className = _omitThemingProps.className, _omitThemingProps$ori = _omitThemingProps.orientation, orientation = _omitThemingProps$ori === void 0 ? "horizontal" : _omitThemingProps$ori, __css = _omitThemingProps.__css, rest = _objectWithoutPropertiesLoose12(_omitThemingProps, _excluded2$4);
  var dividerStyles = {
    vertical: {
      borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ React25.createElement(chakra.hr, _extends19({
    ref,
    "aria-orientation": orientation
  }, rest, {
    __css: _extends19({}, styles2, {
      border: "0",
      borderColor,
      borderStyle
    }, dividerStyles[orientation], __css),
    className: cx("chakra-divider", className)
  }));
});
if (__DEV__) {
  Divider2.displayName = "Divider";
}
var _excluded$a = ["direction", "align", "justify", "wrap", "basis", "grow", "shrink"];
var Flex = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var direction2 = props.direction, align = props.align, justify = props.justify, wrap3 = props.wrap, basis = props.basis, grow = props.grow, shrink = props.shrink, rest = _objectWithoutPropertiesLoose12(props, _excluded$a);
  var styles2 = {
    display: "flex",
    flexDirection: direction2,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap3,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };
  return /* @__PURE__ */ React25.createElement(chakra.div, _extends19({
    ref,
    __css: styles2
  }, rest));
});
if (__DEV__) {
  Flex.displayName = "Flex";
}
var _excluded$9 = ["templateAreas", "gap", "rowGap", "columnGap", "column", "row", "autoFlow", "autoRows", "templateRows", "autoColumns", "templateColumns"];
var Grid = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var templateAreas = props.templateAreas, gap = props.gap, rowGap = props.rowGap, columnGap = props.columnGap, column = props.column, row = props.row, autoFlow = props.autoFlow, autoRows = props.autoRows, templateRows = props.templateRows, autoColumns = props.autoColumns, templateColumns = props.templateColumns, rest = _objectWithoutPropertiesLoose12(props, _excluded$9);
  var styles2 = {
    display: "grid",
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };
  return /* @__PURE__ */ React25.createElement(chakra.div, _extends19({
    ref,
    __css: styles2
  }, rest));
});
if (__DEV__) {
  Grid.displayName = "Grid";
}
var _excluded$8 = ["className"];
var Heading2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyleConfig("Heading", props);
  var _omitThemingProps = omitThemingProps(props);
  _omitThemingProps.className;
  var rest = _objectWithoutPropertiesLoose12(_omitThemingProps, _excluded$8);
  return /* @__PURE__ */ React25.createElement(chakra.h2, _extends19({
    ref,
    className: cx("chakra-heading", props.className)
  }, rest, {
    __css: styles2
  }));
});
if (__DEV__) {
  Heading2.displayName = "Heading";
}
var _excluded$7 = ["className"];
var Kbd2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyleConfig("Kbd", props);
  var _omitThemingProps = omitThemingProps(props), className = _omitThemingProps.className, rest = _objectWithoutPropertiesLoose12(_omitThemingProps, _excluded$7);
  return /* @__PURE__ */ React25.createElement(chakra.kbd, _extends19({
    ref,
    className: cx("chakra-kbd", className)
  }, rest, {
    __css: _extends19({
      fontFamily: "mono"
    }, styles2)
  }));
});
if (__DEV__) {
  Kbd2.displayName = "Kbd";
}
var _excluded$6 = ["className", "isExternal"];
var Link2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyleConfig("Link", props);
  var _omitThemingProps = omitThemingProps(props), className = _omitThemingProps.className, isExternal = _omitThemingProps.isExternal, rest = _objectWithoutPropertiesLoose12(_omitThemingProps, _excluded$6);
  return /* @__PURE__ */ React25.createElement(chakra.a, _extends19({
    target: isExternal ? "_blank" : void 0,
    rel: isExternal ? "noopener" : void 0,
    ref,
    className: cx("chakra-link", className)
  }, rest, {
    __css: styles2
  }));
});
if (__DEV__) {
  Link2.displayName = "Link";
}
var _excluded$5 = ["children", "styleType", "stylePosition", "spacing"];
var _excluded2$2 = ["as"];
var _excluded32 = ["as"];
var _createStylesContext4 = createStylesContext("List");
var StylesProvider5 = _createStylesContext4[0];
var useStyles5 = _createStylesContext4[1];
var List2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _ref;
  var styles2 = useMultiStyleConfig("List", props);
  var _omitThemingProps = omitThemingProps(props), children = _omitThemingProps.children, _omitThemingProps$sty = _omitThemingProps.styleType, styleType = _omitThemingProps$sty === void 0 ? "none" : _omitThemingProps$sty, stylePosition = _omitThemingProps.stylePosition, spacing2 = _omitThemingProps.spacing, rest = _objectWithoutPropertiesLoose12(_omitThemingProps, _excluded$5);
  var validChildren = getValidChildren(children);
  var selector2 = "& > *:not(style) ~ *:not(style)";
  var spacingStyle = spacing2 ? (_ref = {}, _ref[selector2] = {
    mt: spacing2
  }, _ref) : {};
  return /* @__PURE__ */ React25.createElement(StylesProvider5, {
    value: styles2
  }, /* @__PURE__ */ React25.createElement(chakra.ul, _extends19({
    ref,
    listStyleType: styleType,
    listStylePosition: stylePosition,
    role: "list",
    __css: _extends19({}, styles2.container, spacingStyle)
  }, rest), validChildren));
});
if (__DEV__) {
  List2.displayName = "List";
}
var OrderedList = /* @__PURE__ */ forwardRef2(function(props, ref) {
  props.as;
  var rest = _objectWithoutPropertiesLoose12(props, _excluded2$2);
  return /* @__PURE__ */ React25.createElement(List2, _extends19({
    ref,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em"
  }, rest));
});
if (__DEV__) {
  OrderedList.displayName = "OrderedList";
}
var UnorderedList = /* @__PURE__ */ forwardRef2(function(props, ref) {
  props.as;
  var rest = _objectWithoutPropertiesLoose12(props, _excluded32);
  return /* @__PURE__ */ React25.createElement(List2, _extends19({
    ref,
    as: "ul",
    styleType: "initial",
    marginStart: "1em"
  }, rest));
});
if (__DEV__) {
  UnorderedList.displayName = "UnorderedList";
}
var ListItem = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyles5();
  return /* @__PURE__ */ React25.createElement(chakra.li, _extends19({
    ref
  }, props, {
    __css: styles2.item
  }));
});
if (__DEV__) {
  ListItem.displayName = "ListItem";
}
var ListIcon = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyles5();
  return /* @__PURE__ */ React25.createElement(Icon, _extends19({
    ref,
    role: "presentation"
  }, props, {
    __css: styles2.icon
  }));
});
if (__DEV__) {
  ListIcon.displayName = "ListIcon";
}
var _excluded$42 = ["columns", "spacingX", "spacingY", "spacing", "minChildWidth"];
var SimpleGrid = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var columns = props.columns, spacingX = props.spacingX, spacingY = props.spacingY, spacing2 = props.spacing, minChildWidth = props.minChildWidth, rest = _objectWithoutPropertiesLoose12(props, _excluded$42);
  var templateColumns = minChildWidth ? widthToColumns(minChildWidth) : countToColumns(columns);
  return /* @__PURE__ */ React25.createElement(Grid, _extends19({
    ref,
    gap: spacing2,
    columnGap: spacingX,
    rowGap: spacingY,
    templateColumns
  }, rest));
});
if (__DEV__) {
  SimpleGrid.displayName = "SimpleGrid";
}
function toPx(n) {
  return isNumber(n) ? n + "px" : n;
}
function widthToColumns(width) {
  return mapResponsive(width, function(value) {
    return isNull(value) ? null : "repeat(auto-fit, minmax(" + toPx(value) + ", 1fr))";
  });
}
function countToColumns(count) {
  return mapResponsive(count, function(value) {
    return isNull(value) ? null : "repeat(" + value + ", minmax(0, 1fr))";
  });
}
var Spacer = chakra("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
if (__DEV__) {
  Spacer.displayName = "Spacer";
}
var selector = "& > *:not(style) ~ *:not(style)";
function getStackStyles(options) {
  var _ref;
  var spacing2 = options.spacing, direction2 = options.direction;
  var directionStyles = {
    column: {
      marginTop: spacing2,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: 0
    },
    row: {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: spacing2
    },
    "column-reverse": {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: spacing2,
      marginStart: 0
    },
    "row-reverse": {
      marginTop: 0,
      marginEnd: spacing2,
      marginBottom: 0,
      marginStart: 0
    }
  };
  return _ref = {
    flexDirection: direction2
  }, _ref[selector] = mapResponsive(direction2, function(value) {
    return directionStyles[value];
  }), _ref;
}
function getDividerStyles(options) {
  var spacing2 = options.spacing, direction2 = options.direction;
  var dividerStyles = {
    column: {
      my: spacing2,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing2,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing2,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing2,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": mapResponsive(direction2, function(value) {
      return dividerStyles[value];
    })
  };
}
var _excluded$32 = ["isInline", "direction", "align", "justify", "spacing", "wrap", "children", "divider", "className", "shouldWrapChildren"];
var StackItem = function StackItem2(props) {
  return /* @__PURE__ */ React25.createElement(chakra.div, _extends19({
    className: "chakra-stack__item"
  }, props, {
    __css: _extends19({
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0
    }, props["__css"])
  }));
};
var Stack = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _ref;
  var isInline = props.isInline, directionProp = props.direction, align = props.align, justify = props.justify, _props$spacing = props.spacing, spacing2 = _props$spacing === void 0 ? "0.5rem" : _props$spacing, wrap3 = props.wrap, children = props.children, divider = props.divider, className = props.className, shouldWrapChildren = props.shouldWrapChildren, rest = _objectWithoutPropertiesLoose12(props, _excluded$32);
  var direction2 = isInline ? "row" : directionProp != null ? directionProp : "column";
  var styles2 = React25.useMemo(function() {
    return getStackStyles({
      direction: direction2,
      spacing: spacing2
    });
  }, [direction2, spacing2]);
  var dividerStyle = React25.useMemo(function() {
    return getDividerStyles({
      spacing: spacing2,
      direction: direction2
    });
  }, [spacing2, direction2]);
  var hasDivider = !!divider;
  var shouldUseChildren = !shouldWrapChildren && !hasDivider;
  var validChildren = getValidChildren(children);
  var clones = shouldUseChildren ? validChildren : validChildren.map(function(child, index2) {
    var key = typeof child.key !== "undefined" ? child.key : index2;
    var isLast = index2 + 1 === validChildren.length;
    var wrappedChild = /* @__PURE__ */ React25.createElement(StackItem, {
      key
    }, child);
    var _child = shouldWrapChildren ? wrappedChild : child;
    if (!hasDivider)
      return _child;
    var clonedDivider = /* @__PURE__ */ React25.cloneElement(divider, {
      __css: dividerStyle
    });
    var _divider = isLast ? null : clonedDivider;
    return /* @__PURE__ */ React25.createElement(React25.Fragment, {
      key
    }, _child, _divider);
  });
  var _className = cx("chakra-stack", className);
  return /* @__PURE__ */ React25.createElement(chakra.div, _extends19({
    ref,
    display: "flex",
    alignItems: align,
    justifyContent: justify,
    flexDirection: styles2.flexDirection,
    flexWrap: wrap3,
    className: _className,
    __css: hasDivider ? {} : (_ref = {}, _ref[selector] = styles2[selector], _ref)
  }, rest), clones);
});
if (__DEV__) {
  Stack.displayName = "Stack";
}
var HStack = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return /* @__PURE__ */ React25.createElement(Stack, _extends19({
    align: "center"
  }, props, {
    direction: "row",
    ref
  }));
});
if (__DEV__) {
  HStack.displayName = "HStack";
}
var VStack = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return /* @__PURE__ */ React25.createElement(Stack, _extends19({
    align: "center"
  }, props, {
    direction: "column",
    ref
  }));
});
if (__DEV__) {
  VStack.displayName = "VStack";
}
var _excluded$23 = ["className", "align", "decoration", "casing"];
var Text = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyleConfig("Text", props);
  var _omitThemingProps = omitThemingProps(props);
  _omitThemingProps.className;
  _omitThemingProps.align;
  _omitThemingProps.decoration;
  _omitThemingProps.casing;
  var rest = _objectWithoutPropertiesLoose12(_omitThemingProps, _excluded$23);
  var aliasedProps = filterUndefined({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /* @__PURE__ */ React25.createElement(chakra.p, _extends19({
    ref,
    className: cx("chakra-text", props.className)
  }, aliasedProps, rest, {
    __css: styles2
  }));
});
if (__DEV__) {
  Text.displayName = "Text";
}
var _excluded$15 = ["spacing", "spacingX", "spacingY", "children", "justify", "direction", "align", "className", "shouldWrapChildren"];
var _excluded2$12 = ["className"];
function px4(value) {
  return typeof value === "number" ? value + "px" : value;
}
var Wrap = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _props$spacing = props.spacing, spacing2 = _props$spacing === void 0 ? "0.5rem" : _props$spacing, spacingX = props.spacingX, spacingY = props.spacingY, children = props.children, justify = props.justify, direction2 = props.direction, align = props.align, className = props.className, shouldWrapChildren = props.shouldWrapChildren, rest = _objectWithoutPropertiesLoose12(props, _excluded$15);
  var styles2 = React25.useMemo(function() {
    var _spacingX$spacingY = {
      spacingX,
      spacingY
    }, _spacingX$spacingY$sp = _spacingX$spacingY.spacingX, x = _spacingX$spacingY$sp === void 0 ? spacing2 : _spacingX$spacingY$sp, _spacingX$spacingY$sp2 = _spacingX$spacingY.spacingY, y = _spacingX$spacingY$sp2 === void 0 ? spacing2 : _spacingX$spacingY$sp2;
    return {
      "--chakra-wrap-x-spacing": function chakraWrapXSpacing(theme3) {
        return mapResponsive(x, function(value) {
          return px4(tokenToCSSVar("space", value)(theme3));
        });
      },
      "--chakra-wrap-y-spacing": function chakraWrapYSpacing(theme3) {
        return mapResponsive(y, function(value) {
          return px4(tokenToCSSVar("space", value)(theme3));
        });
      },
      "--wrap-x-spacing": "calc(var(--chakra-wrap-x-spacing) / 2)",
      "--wrap-y-spacing": "calc(var(--chakra-wrap-y-spacing) / 2)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: justify,
      alignItems: align,
      flexDirection: direction2,
      listStyleType: "none",
      padding: "0",
      margin: "calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)",
      "& > *:not(style)": {
        margin: "var(--wrap-y-spacing) var(--wrap-x-spacing)"
      }
    };
  }, [spacing2, spacingX, spacingY, justify, align, direction2]);
  var childrenToRender = shouldWrapChildren ? React25.Children.map(children, function(child, index2) {
    return /* @__PURE__ */ React25.createElement(WrapItem, {
      key: index2
    }, child);
  }) : children;
  return /* @__PURE__ */ React25.createElement(chakra.div, _extends19({
    ref,
    className: cx("chakra-wrap", className),
    overflow: "hidden"
  }, rest), /* @__PURE__ */ React25.createElement(chakra.ul, {
    className: "chakra-wrap__list",
    __css: styles2
  }, childrenToRender));
});
if (__DEV__) {
  Wrap.displayName = "Wrap";
}
var WrapItem = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var className = props.className, rest = _objectWithoutPropertiesLoose12(props, _excluded2$12);
  return /* @__PURE__ */ React25.createElement(chakra.li, _extends19({
    ref,
    __css: {
      display: "flex",
      alignItems: "flex-start"
    },
    className: cx("chakra-wrap__listitem", className)
  }, rest));
});
if (__DEV__) {
  WrapItem.displayName = "WrapItem";
}

// node_modules/@chakra-ui/menu/dist/chakra-ui-menu.esm.js
init_react();
var React27 = __toESM(require_react());

// node_modules/@chakra-ui/clickable/dist/chakra-ui-clickable.esm.js
init_react();
var React26 = __toESM(require_react());
function _extends20() {
  _extends20 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends20.apply(this, arguments);
}
function _objectWithoutPropertiesLoose13(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function useEventListeners() {
  var listeners = React26.useRef(/* @__PURE__ */ new Map());
  var currentListeners = listeners.current;
  var add4 = React26.useCallback(function(el, type, listener, options) {
    listeners.current.set(listener, {
      type,
      el,
      options
    });
    el.addEventListener(type, listener, options);
  }, []);
  var remove2 = React26.useCallback(function(el, type, listener, options) {
    el.removeEventListener(type, listener, options);
    listeners.current["delete"](listener);
  }, []);
  React26.useEffect(function() {
    return function() {
      currentListeners.forEach(function(value, key) {
        remove2(value.el, value.type, key, value.options);
      });
    };
  }, [remove2, currentListeners]);
  return {
    add: add4,
    remove: remove2
  };
}
var _excluded12 = ["ref", "isDisabled", "isFocusable", "clickOnEnter", "clickOnSpace", "onMouseDown", "onMouseUp", "onClick", "onKeyDown", "onKeyUp", "tabIndex", "onMouseOver", "onMouseLeave"];
function isValidElement4(event) {
  var element = event.target;
  var tagName = element.tagName, isContentEditable2 = element.isContentEditable;
  return tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable2 !== true;
}
function useClickable(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, htmlRef = _props.ref, isDisabled2 = _props.isDisabled, isFocusable2 = _props.isFocusable, _props$clickOnEnter = _props.clickOnEnter, clickOnEnter = _props$clickOnEnter === void 0 ? true : _props$clickOnEnter, _props$clickOnSpace = _props.clickOnSpace, clickOnSpace = _props$clickOnSpace === void 0 ? true : _props$clickOnSpace, onMouseDown = _props.onMouseDown, onMouseUp = _props.onMouseUp, onClick = _props.onClick, onKeyDown = _props.onKeyDown, onKeyUp = _props.onKeyUp, tabIndexProp = _props.tabIndex, onMouseOver = _props.onMouseOver, onMouseLeave = _props.onMouseLeave, htmlProps = _objectWithoutPropertiesLoose13(_props, _excluded12);
  var _React$useState = React26.useState(true), isButton = _React$useState[0], setIsButton = _React$useState[1];
  var _React$useState2 = React26.useState(false), isPressed = _React$useState2[0], setIsPressed = _React$useState2[1];
  var listeners = useEventListeners();
  var refCallback = function refCallback2(node) {
    if (!node)
      return;
    if (node.tagName !== "BUTTON") {
      setIsButton(false);
    }
  };
  var tabIndex = isButton ? tabIndexProp : tabIndexProp || 0;
  var trulyDisabled = isDisabled2 && !isFocusable2;
  var handleClick = React26.useCallback(function(event) {
    if (isDisabled2) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }
    var self2 = event.currentTarget;
    self2.focus();
    onClick == null ? void 0 : onClick(event);
  }, [isDisabled2, onClick]);
  var onDocumentKeyUp = React26.useCallback(function(e) {
    if (isPressed && isValidElement4(e)) {
      e.preventDefault();
      e.stopPropagation();
      setIsPressed(false);
      listeners.remove(document, "keyup", onDocumentKeyUp, false);
    }
  }, [isPressed, listeners]);
  var handleKeyDown = React26.useCallback(function(event) {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (isDisabled2 || event.defaultPrevented || event.metaKey) {
      return;
    }
    if (!isValidElement4(event.nativeEvent) || isButton)
      return;
    var shouldClickOnEnter = clickOnEnter && event.key === "Enter";
    var shouldClickOnSpace = clickOnSpace && event.key === " ";
    if (shouldClickOnSpace) {
      event.preventDefault();
      setIsPressed(true);
    }
    if (shouldClickOnEnter) {
      event.preventDefault();
      var self2 = event.currentTarget;
      self2.click();
    }
    listeners.add(document, "keyup", onDocumentKeyUp, false);
  }, [isDisabled2, isButton, onKeyDown, clickOnEnter, clickOnSpace, listeners, onDocumentKeyUp]);
  var handleKeyUp = React26.useCallback(function(event) {
    onKeyUp == null ? void 0 : onKeyUp(event);
    if (isDisabled2 || event.defaultPrevented || event.metaKey)
      return;
    if (!isValidElement4(event.nativeEvent) || isButton)
      return;
    var shouldClickOnSpace = clickOnSpace && event.key === " ";
    if (shouldClickOnSpace) {
      event.preventDefault();
      setIsPressed(false);
      var self2 = event.currentTarget;
      self2.click();
    }
  }, [clickOnSpace, isButton, isDisabled2, onKeyUp]);
  var onDocumentMouseUp = React26.useCallback(function(event) {
    if (event.button !== 0)
      return;
    setIsPressed(false);
    listeners.remove(document, "mouseup", onDocumentMouseUp, false);
  }, [listeners]);
  var handleMouseDown = React26.useCallback(function(event) {
    if (isRightClick(event))
      return;
    if (isDisabled2) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }
    if (!isButton) {
      setIsPressed(true);
    }
    var target = event.currentTarget;
    target.focus({
      preventScroll: true
    });
    listeners.add(document, "mouseup", onDocumentMouseUp, false);
    onMouseDown == null ? void 0 : onMouseDown(event);
  }, [isDisabled2, isButton, onMouseDown, listeners, onDocumentMouseUp]);
  var handleMouseUp = React26.useCallback(function(event) {
    if (isRightClick(event))
      return;
    if (!isButton) {
      setIsPressed(false);
    }
    onMouseUp == null ? void 0 : onMouseUp(event);
  }, [onMouseUp, isButton]);
  var handleMouseOver = React26.useCallback(function(event) {
    if (isDisabled2) {
      event.preventDefault();
      return;
    }
    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [isDisabled2, onMouseOver]);
  var handleMouseLeave = React26.useCallback(function(event) {
    if (isPressed) {
      event.preventDefault();
      setIsPressed(false);
    }
    onMouseLeave == null ? void 0 : onMouseLeave(event);
  }, [isPressed, onMouseLeave]);
  var ref = mergeRefs(htmlRef, refCallback);
  if (isButton) {
    return _extends20({}, htmlProps, {
      ref,
      type: "button",
      "aria-disabled": trulyDisabled ? void 0 : isDisabled2,
      disabled: trulyDisabled,
      onClick: handleClick,
      onMouseDown,
      onMouseUp,
      onKeyUp,
      onKeyDown,
      onMouseOver,
      onMouseLeave
    });
  }
  return _extends20({}, htmlProps, {
    ref,
    role: "button",
    "data-active": dataAttr(isPressed),
    "aria-disabled": isDisabled2 ? "true" : void 0,
    tabIndex: trulyDisabled ? void 0 : tabIndex,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave
  });
}

// node_modules/@chakra-ui/hooks/use-animation-state/dist/chakra-ui-hooks-use-animation-state.esm.js
init_react();
var import_react46 = __toESM(require_react());

// node_modules/@chakra-ui/popper/dist/chakra-ui-popper.esm.js
init_react();

// node_modules/@popperjs/core/lib/index.js
init_react();

// node_modules/@popperjs/core/lib/enums.js
init_react();
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto2 = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto2]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
init_react();
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
init_react();
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement4(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement2(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state2 = _ref.state;
  Object.keys(state2.elements).forEach(function(name) {
    var style = state2.styles[name] || {};
    var attributes = state2.attributes[name] || {};
    var element = state2.elements[name];
    if (!isHTMLElement2(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect2(_ref2) {
  var state2 = _ref2.state;
  var initialStyles = {
    popper: {
      position: state2.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state2.elements.popper.style, initialStyles.popper);
  state2.styles = initialStyles;
  if (state2.elements.arrow) {
    Object.assign(state2.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state2.elements).forEach(function(name) {
      var element = state2.elements[name];
      var attributes = state2.attributes[name] || {};
      var styleProperties = Object.keys(state2.styles.hasOwnProperty(name) ? state2.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement2(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect2,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/modifiers/arrow.js
init_react();

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
init_react();
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
init_react();

// node_modules/@popperjs/core/lib/utils/math.js
init_react();
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement2(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
init_react();
function contains2(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
init_react();
function getComputedStyle4(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
init_react();
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
init_react();
function getDocumentElement(element) {
  return ((isElement4(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement2(element) || getComputedStyle4(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement2(element)) {
    var elementCss = getComputedStyle4(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement2(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css3 = getComputedStyle4(currentNode);
    if (css3.transform !== "none" || css3.perspective !== "none" || css3.contain === "paint" || ["transform", "perspective"].indexOf(css3.willChange) !== -1 || isFirefox && css3.willChange === "filter" || isFirefox && css3.filter && css3.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle4(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle4(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
init_react();
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
init_react();
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
init_react();

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
init_react();
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
init_react();
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state2) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state2 = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state2.elements.arrow;
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state2.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state2);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state2.rects.reference[len] + state2.rects.reference[axis] - popperOffsets2[axis] - state2.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state2.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state2.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect3(_ref2) {
  var state2 = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state2.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement2(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains2(state2.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state2.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
init_react();

// node_modules/@popperjs/core/lib/utils/getVariation.js
init_react();
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win2 = window;
  var dpr = win2.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win2 = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle4(offsetParent).position !== "static" && position2 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win2 && win2.visualViewport ? win2.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win2 && win2.visualViewport ? win2.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position2
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win2.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state2 = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty2 = getComputedStyle4(state2.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty2.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state2.placement),
    variation: getVariation(state2.placement),
    popper: state2.elements.popper,
    popperRect: state2.rects.popper,
    gpuAcceleration,
    isFixed: state2.options.strategy === "fixed"
  };
  if (state2.modifiersData.popperOffsets != null) {
    state2.styles.popper = Object.assign({}, state2.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state2.modifiersData.popperOffsets,
      position: state2.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state2.modifiersData.arrow != null) {
    state2.styles.arrow = Object.assign({}, state2.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state2.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-placement": state2.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
init_react();
var passive = {
  passive: true
};
function effect4(_ref) {
  var state2 = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll2 = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state2.elements.popper);
  var scrollParents = [].concat(state2.scrollParents.reference, state2.scrollParents.popper);
  if (scroll2) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll2) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect4,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/flip.js
init_react();

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
init_react();
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
init_react();
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
init_react();
function getWindowScroll(node) {
  var win2 = getWindow(node);
  var scrollLeft = win2.pageXOffset;
  var scrollTop = win2.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element) {
  var win2 = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win2.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
init_react();
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle4(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
init_react();
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle4(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement2(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list2) {
  var _element$ownerDocumen;
  if (list2 === void 0) {
    list2 = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win2 = getWindow(scrollParent);
  var target = isBody ? [win2].concat(win2.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list2.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
init_react();
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement4(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle4(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement2(element) ? getOffsetParent(element) : element;
  if (!isElement4(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement4(clippingParent) && contains2(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
init_react();
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state2.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state2.rects.popper;
  var element = state2.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement4(element) ? element : element.contextElement || getDocumentElement(state2.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state2.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state2.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply3 = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply3;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
init_react();
function computeAutoPlacement(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto2) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state2 = _ref.state, options = _ref.options, name = _ref.name;
  if (state2.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state2.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto2 ? computeAutoPlacement(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state2, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state2.placement !== firstFittingPlacement) {
    state2.modifiersData[name]._skip = true;
    state2.placement = firstFittingPlacement;
    state2.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
init_react();
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state2 = _ref.state, name = _ref.name;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var preventedOffsets = state2.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state2, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state2, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state2.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
init_react();
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance2 = _ref[1];
  skidding = skidding || 0;
  distance2 = (distance2 || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance2,
    y: skidding
  } : {
    x: skidding,
    y: distance2
  };
}
function offset(_ref2) {
  var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state2.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state2.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state2.modifiersData.popperOffsets != null) {
    state2.modifiersData.popperOffsets.x += x;
    state2.modifiersData.popperOffsets.y += y;
  }
  state2.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
init_react();
function popperOffsets(_ref) {
  var state2 = _ref.state, name = _ref.name;
  state2.modifiersData[name] = computeOffsets({
    reference: state2.rects.reference,
    element: state2.rects.popper,
    strategy: "absolute",
    placement: state2.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
init_react();

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
init_react();
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state2 = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state2, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state2.placement);
  var variation = getVariation(state2.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state2.modifiersData.offset ? state2.modifiersData.offset[state2.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state2.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state2.modifiersData["arrow#persistent"] ? state2.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state2.elements.arrow && getOffsetParent(state2.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state2.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/createPopper.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
init_react();

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
init_react();
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement2(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement2(offsetParent);
  var offsetParentIsScaled = isHTMLElement2(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll2 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll2 = getNodeScroll(offsetParent);
    }
    if (isHTMLElement2(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll2.scrollLeft - offsets.x,
    y: rect.top + scroll2.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
init_react();
function order2(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order2(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
init_react();
function debounce(fn6) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn6());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
init_react();

// node_modules/@popperjs/core/lib/utils/format.js
init_react();
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c2) {
    return p.replace(/%s/, c2);
  }, str);
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index2, self2) {
      return self2.indexOf(value) === index2;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/@popperjs/core/lib/utils/uniqueBy.js
init_react();
function uniqueBy(arr, fn6) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn6(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
init_react();
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state2 = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state2,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state2.options) : setOptionsAction;
        cleanupModifierEffects();
        state2.options = Object.assign({}, defaultOptions, state2.options, options2);
        state2.scrollParents = {
          reference: isElement4(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state2.options.modifiers)));
        state2.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state2.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state2.options.placement) === auto2) {
            var flipModifier = state2.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle4(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state2.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state2.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state2.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state2.reset = false;
        state2.placement = state2.options.placement;
        state2.orderedModifiers.forEach(function(modifier) {
          return state2.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index2 = 0; index2 < state2.orderedModifiers.length; index2++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state2.reset === true) {
            state2.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state2.orderedModifiers[index2], fn6 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn6 === "function") {
            state2 = fn6({
              state: state2,
              options: _options,
              name,
              instance
            }) || state2;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state2);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state3) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state3);
      }
    });
    function runModifierEffects() {
      state2.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect8 = _ref3.effect;
        if (typeof effect8 === "function") {
          var cleanupFn = effect8({
            state: state2,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn6) {
        return fn6();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}

// node_modules/@popperjs/core/lib/popper.js
init_react();
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// node_modules/@chakra-ui/popper/dist/chakra-ui-popper.esm.js
var import_react47 = __toESM(require_react());
function _objectWithoutPropertiesLoose14(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends21() {
  _extends21 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends21.apply(this, arguments);
}
var toVar2 = function toVar3(value, fallback) {
  return {
    "var": value,
    varRef: fallback ? "var(" + value + ", " + fallback + ")" : "var(" + value + ")"
  };
};
var cssVars = {
  arrowShadowColor: toVar2("--popper-arrow-shadow-color"),
  arrowSize: toVar2("--popper-arrow-size", "8px"),
  arrowSizeHalf: toVar2("--popper-arrow-size-half"),
  arrowBg: toVar2("--popper-arrow-bg"),
  transformOrigin: toVar2("--popper-transform-origin"),
  arrowOffset: toVar2("--popper-arrow-offset")
};
function getBoxShadow(placement) {
  if (placement.includes("top"))
    return "1px 1px 1px 0 var(--popper-arrow-shadow-color)";
  if (placement.includes("bottom"))
    return "-1px -1px 1px 0 var(--popper-arrow-shadow-color)";
  if (placement.includes("right"))
    return "-1px 1px 1px 0 var(--popper-arrow-shadow-color)";
  if (placement.includes("left"))
    return "1px -1px 1px 0 var(--popper-arrow-shadow-color)";
}
var transforms = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
};
var toTransformOrigin = function toTransformOrigin2(placement) {
  return transforms[placement];
};
var defaultEventListeners = {
  scroll: true,
  resize: true
};
function getEventListenerOptions(value) {
  var eventListeners;
  if (typeof value === "object") {
    eventListeners = {
      enabled: true,
      options: _extends21({}, defaultEventListeners, value)
    };
  } else {
    eventListeners = {
      enabled: value,
      options: defaultEventListeners
    };
  }
  return eventListeners;
}
var matchWidth = {
  name: "matchWidth",
  enabled: true,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: function fn2(_ref) {
    var state2 = _ref.state;
    state2.styles.popper.width = state2.rects.reference.width + "px";
  },
  effect: function effect5(_ref2) {
    var state2 = _ref2.state;
    return function() {
      var reference2 = state2.elements.reference;
      state2.elements.popper.style.width = reference2.offsetWidth + "px";
    };
  }
};
var transformOrigin = {
  name: "transformOrigin",
  enabled: true,
  phase: "write",
  fn: function fn3(_ref3) {
    var state2 = _ref3.state;
    setTransformOrigin(state2);
  },
  effect: function effect6(_ref4) {
    var state2 = _ref4.state;
    return function() {
      setTransformOrigin(state2);
    };
  }
};
var setTransformOrigin = function setTransformOrigin2(state2) {
  state2.elements.popper.style.setProperty(cssVars.transformOrigin["var"], toTransformOrigin(state2.placement));
};
var positionArrow = {
  name: "positionArrow",
  enabled: true,
  phase: "afterWrite",
  fn: function fn4(_ref5) {
    var state2 = _ref5.state;
    setArrowStyles(state2);
  }
};
var setArrowStyles = function setArrowStyles2(state2) {
  var _state$elements;
  if (!state2.placement)
    return;
  var overrides = getArrowStyle$1(state2.placement);
  if ((_state$elements = state2.elements) != null && _state$elements.arrow && overrides) {
    var _Object$assign, _vars;
    Object.assign(state2.elements.arrow.style, (_Object$assign = {}, _Object$assign[overrides.property] = overrides.value, _Object$assign.width = cssVars.arrowSize.varRef, _Object$assign.height = cssVars.arrowSize.varRef, _Object$assign.zIndex = -1, _Object$assign));
    var vars = (_vars = {}, _vars[cssVars.arrowSizeHalf["var"]] = "calc(" + cssVars.arrowSize.varRef + " / 2)", _vars[cssVars.arrowOffset["var"]] = "calc(" + cssVars.arrowSizeHalf.varRef + " * -1)", _vars);
    for (var property in vars) {
      state2.elements.arrow.style.setProperty(property, vars[property]);
    }
  }
};
var getArrowStyle$1 = function getArrowStyle(placement) {
  if (placement.startsWith("top")) {
    return {
      property: "bottom",
      value: cssVars.arrowOffset.varRef
    };
  }
  if (placement.startsWith("bottom")) {
    return {
      property: "top",
      value: cssVars.arrowOffset.varRef
    };
  }
  if (placement.startsWith("left")) {
    return {
      property: "right",
      value: cssVars.arrowOffset.varRef
    };
  }
  if (placement.startsWith("right")) {
    return {
      property: "left",
      value: cssVars.arrowOffset.varRef
    };
  }
};
var innerArrow = {
  name: "innerArrow",
  enabled: true,
  phase: "main",
  requires: ["arrow"],
  fn: function fn5(_ref6) {
    var state2 = _ref6.state;
    setInnerArrowStyles(state2);
  },
  effect: function effect7(_ref7) {
    var state2 = _ref7.state;
    return function() {
      setInnerArrowStyles(state2);
    };
  }
};
var setInnerArrowStyles = function setInnerArrowStyles2(state2) {
  if (!state2.elements.arrow)
    return;
  var inner = state2.elements.arrow.querySelector("[data-popper-arrow-inner]");
  if (!inner)
    return;
  Object.assign(inner.style, {
    transform: "rotate(45deg)",
    background: cssVars.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: getBoxShadow(state2.placement)
  });
};
var logicals = {
  "start-start": {
    ltr: "left-start",
    rtl: "right-start"
  },
  "start-end": {
    ltr: "left-end",
    rtl: "right-end"
  },
  "end-start": {
    ltr: "right-start",
    rtl: "left-start"
  },
  "end-end": {
    ltr: "right-end",
    rtl: "left-end"
  },
  start: {
    ltr: "left",
    rtl: "right"
  },
  end: {
    ltr: "right",
    rtl: "left"
  }
};
var opposites = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function getPopperPlacement(placement, dir) {
  var _placement, _placement2;
  if (dir === void 0) {
    dir = "ltr";
  }
  var value = ((_placement = logicals[placement]) == null ? void 0 : _placement[dir]) || placement;
  if (dir === "ltr")
    return value;
  return (_placement2 = opposites[placement]) != null ? _placement2 : value;
}
var _excluded13 = ["size", "shadowColor", "bg", "style"];
function usePopper(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, _props$enabled = _props.enabled, enabled = _props$enabled === void 0 ? true : _props$enabled, modifiers = _props.modifiers, _props$placement = _props.placement, placementProp = _props$placement === void 0 ? "bottom" : _props$placement, _props$strategy = _props.strategy, strategy = _props$strategy === void 0 ? "absolute" : _props$strategy, _props$arrowPadding = _props.arrowPadding, arrowPadding = _props$arrowPadding === void 0 ? 8 : _props$arrowPadding, _props$eventListeners = _props.eventListeners, eventListeners = _props$eventListeners === void 0 ? true : _props$eventListeners, offset2 = _props.offset, _props$gutter = _props.gutter, gutter = _props$gutter === void 0 ? 8 : _props$gutter, _props$flip = _props.flip, flip2 = _props$flip === void 0 ? true : _props$flip, _props$boundary = _props.boundary, boundary = _props$boundary === void 0 ? "clippingParents" : _props$boundary, _props$preventOverflo = _props.preventOverflow, preventOverflow2 = _props$preventOverflo === void 0 ? true : _props$preventOverflo, matchWidth$1 = _props.matchWidth, _props$direction = _props.direction, direction2 = _props$direction === void 0 ? "ltr" : _props$direction;
  var reference2 = (0, import_react47.useRef)(null);
  var popper2 = (0, import_react47.useRef)(null);
  var instance = (0, import_react47.useRef)(null);
  var placement = getPopperPlacement(placementProp, direction2);
  var cleanup = (0, import_react47.useRef)(function() {
  });
  var setupPopper = (0, import_react47.useCallback)(function() {
    if (!enabled || !reference2.current || !popper2.current)
      return;
    cleanup.current == null ? void 0 : cleanup.current();
    instance.current = createPopper(reference2.current, popper2.current, {
      placement,
      modifiers: [innerArrow, positionArrow, transformOrigin, _extends21({}, matchWidth, {
        enabled: !!matchWidth$1
      }), _extends21({
        name: "eventListeners"
      }, getEventListenerOptions(eventListeners)), {
        name: "arrow",
        options: {
          padding: arrowPadding
        }
      }, {
        name: "offset",
        options: {
          offset: offset2 != null ? offset2 : [0, gutter]
        }
      }, {
        name: "flip",
        enabled: !!flip2,
        options: {
          padding: 8
        }
      }, {
        name: "preventOverflow",
        enabled: !!preventOverflow2,
        options: {
          boundary
        }
      }].concat(modifiers != null ? modifiers : []),
      strategy
    });
    instance.current.forceUpdate();
    cleanup.current = instance.current.destroy;
  }, [placement, enabled, modifiers, matchWidth$1, eventListeners, arrowPadding, offset2, gutter, flip2, preventOverflow2, boundary, strategy]);
  (0, import_react47.useEffect)(function() {
    return function() {
      if (!reference2.current && !popper2.current) {
        var _instance$current;
        (_instance$current = instance.current) == null ? void 0 : _instance$current.destroy();
        instance.current = null;
      }
    };
  }, []);
  var referenceRef = (0, import_react47.useCallback)(function(node) {
    reference2.current = node;
    setupPopper();
  }, [setupPopper]);
  var getReferenceProps = (0, import_react47.useCallback)(function(props2, ref) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (ref === void 0) {
      ref = null;
    }
    return _extends21({}, props2, {
      ref: mergeRefs(referenceRef, ref)
    });
  }, [referenceRef]);
  var popperRef = (0, import_react47.useCallback)(function(node) {
    popper2.current = node;
    setupPopper();
  }, [setupPopper]);
  var getPopperProps = (0, import_react47.useCallback)(function(props2, ref) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (ref === void 0) {
      ref = null;
    }
    return _extends21({}, props2, {
      ref: mergeRefs(popperRef, ref),
      style: _extends21({}, props2.style, {
        position: strategy,
        minWidth: matchWidth$1 ? void 0 : "max-content",
        inset: "0 auto auto 0"
      })
    });
  }, [strategy, popperRef, matchWidth$1]);
  var getArrowProps = (0, import_react47.useCallback)(function(props2, ref) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (ref === void 0) {
      ref = null;
    }
    var _props2 = props2;
    _props2.size;
    _props2.shadowColor;
    _props2.bg;
    _props2.style;
    var rest = _objectWithoutPropertiesLoose14(_props2, _excluded13);
    return _extends21({}, rest, {
      ref,
      "data-popper-arrow": "",
      style: getArrowStyle2(props2)
    });
  }, []);
  var getArrowInnerProps = (0, import_react47.useCallback)(function(props2, ref) {
    if (props2 === void 0) {
      props2 = {};
    }
    if (ref === void 0) {
      ref = null;
    }
    return _extends21({}, props2, {
      ref,
      "data-popper-arrow-inner": ""
    });
  }, []);
  return {
    update: function update() {
      var _instance$current2;
      (_instance$current2 = instance.current) == null ? void 0 : _instance$current2.update();
    },
    forceUpdate: function forceUpdate() {
      var _instance$current3;
      (_instance$current3 = instance.current) == null ? void 0 : _instance$current3.forceUpdate();
    },
    transformOrigin: cssVars.transformOrigin.varRef,
    referenceRef,
    popperRef,
    getPopperProps,
    getArrowProps,
    getArrowInnerProps,
    getReferenceProps
  };
}
function getArrowStyle2(props) {
  var size2 = props.size, shadowColor = props.shadowColor, bg = props.bg, style = props.style;
  var computedStyle = _extends21({}, style, {
    position: "absolute"
  });
  if (size2) {
    computedStyle["--popper-arrow-size"] = size2;
  }
  if (shadowColor) {
    computedStyle["--popper-arrow-shadow-color"] = shadowColor;
  }
  if (bg) {
    computedStyle["--popper-arrow-bg"] = bg;
  }
  return computedStyle;
}

// node_modules/@chakra-ui/menu/dist/chakra-ui-menu.esm.js
function _extends22() {
  _extends22 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends22.apply(this, arguments);
}
function _objectWithoutPropertiesLoose15(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$16 = ["id", "closeOnSelect", "closeOnBlur", "autoSelect", "isLazy", "isOpen", "defaultIsOpen", "onClose", "onOpen", "placement", "lazyBehavior", "direction", "computePositionOnMount"];
var _excluded2$13 = ["onMouseEnter", "onMouseMove", "onMouseLeave", "onClick", "isDisabled", "isFocusable", "closeOnSelect", "type"];
var _excluded3$1 = ["type", "isChecked"];
var _excluded4$1 = ["children", "type", "value", "defaultValue", "onChange"];
var _createDescendantCont = createDescendantContext();
var MenuDescendantsProvider = _createDescendantCont[0];
var useMenuDescendantsContext = _createDescendantCont[1];
var useMenuDescendants = _createDescendantCont[2];
var useMenuDescendant = _createDescendantCont[3];
var _createContext7 = createContext2({
  strict: false,
  name: "MenuContext"
});
var MenuProvider = _createContext7[0];
var useMenuContext = _createContext7[1];
function useMenu(props) {
  if (props === void 0) {
    props = {};
  }
  var _props = props, id2 = _props.id, _props$closeOnSelect = _props.closeOnSelect, closeOnSelect = _props$closeOnSelect === void 0 ? true : _props$closeOnSelect, _props$closeOnBlur = _props.closeOnBlur, closeOnBlur = _props$closeOnBlur === void 0 ? true : _props$closeOnBlur, _props$autoSelect = _props.autoSelect, autoSelect = _props$autoSelect === void 0 ? true : _props$autoSelect, isLazy = _props.isLazy, isOpenProp = _props.isOpen, defaultIsOpen = _props.defaultIsOpen, onCloseProp = _props.onClose, onOpenProp = _props.onOpen, _props$placement = _props.placement, placement = _props$placement === void 0 ? "bottom-start" : _props$placement, _props$lazyBehavior = _props.lazyBehavior, lazyBehavior = _props$lazyBehavior === void 0 ? "unmount" : _props$lazyBehavior, direction2 = _props.direction, _props$computePositio = _props.computePositionOnMount, computePositionOnMount = _props$computePositio === void 0 ? false : _props$computePositio, popperProps = _objectWithoutPropertiesLoose15(_props, _excluded$16);
  var menuRef = React27.useRef(null);
  var buttonRef = React27.useRef(null);
  var descendants = useMenuDescendants();
  var focusMenu = React27.useCallback(function() {
    focus(menuRef.current, {
      nextTick: true,
      selectTextIfInput: false
    });
  }, []);
  var focusFirstItem = React27.useCallback(function() {
    var id3 = setTimeout(function() {
      var first = descendants.firstEnabled();
      if (first)
        setFocusedIndex(first.index);
    });
    timeoutIds.current.add(id3);
  }, [descendants]);
  var focusLastItem = React27.useCallback(function() {
    var id3 = setTimeout(function() {
      var last = descendants.lastEnabled();
      if (last)
        setFocusedIndex(last.index);
    });
    timeoutIds.current.add(id3);
  }, [descendants]);
  var onOpenInternal = React27.useCallback(function() {
    onOpenProp == null ? void 0 : onOpenProp();
    if (autoSelect) {
      focusFirstItem();
    } else {
      focusMenu();
    }
  }, [autoSelect, focusFirstItem, focusMenu, onOpenProp]);
  var _useDisclosure = useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenInternal
  }), isOpen = _useDisclosure.isOpen, onOpen = _useDisclosure.onOpen, onClose = _useDisclosure.onClose, onToggle = _useDisclosure.onToggle;
  useOutsideClick({
    enabled: isOpen && closeOnBlur,
    ref: menuRef,
    handler: function handler(event) {
      var _buttonRef$current;
      if (!((_buttonRef$current = buttonRef.current) != null && _buttonRef$current.contains(event.target))) {
        onClose();
      }
    }
  });
  var popper2 = usePopper(_extends22({}, popperProps, {
    enabled: isOpen || computePositionOnMount,
    placement,
    direction: direction2
  }));
  var _React$useState = React27.useState(-1), focusedIndex = _React$useState[0], setFocusedIndex = _React$useState[1];
  useUpdateEffect(function() {
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);
  useFocusOnHide(menuRef, {
    focusRef: buttonRef,
    visible: isOpen,
    shouldFocus: true
  });
  var animationState = useAnimationState({
    isOpen,
    ref: menuRef
  });
  var _useIds = useIds(id2, "menu-button", "menu-list"), buttonId = _useIds[0], menuId = _useIds[1];
  var openAndFocusMenu = React27.useCallback(function() {
    onOpen();
    focusMenu();
  }, [onOpen, focusMenu]);
  var timeoutIds = React27.useRef(/* @__PURE__ */ new Set([]));
  useUnmountEffect(function() {
    timeoutIds.current.forEach(function(id3) {
      return clearTimeout(id3);
    });
    timeoutIds.current.clear();
  });
  var openAndFocusFirstItem = React27.useCallback(function() {
    onOpen();
    focusFirstItem();
  }, [focusFirstItem, onOpen]);
  var openAndFocusLastItem = React27.useCallback(function() {
    onOpen();
    focusLastItem();
  }, [onOpen, focusLastItem]);
  var refocus = React27.useCallback(function() {
    var _menuRef$current, _descendants$item;
    var doc2 = getOwnerDocument(menuRef.current);
    var hasFocusWithin2 = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(doc2.activeElement);
    var shouldRefocus = isOpen && !hasFocusWithin2;
    if (!shouldRefocus)
      return;
    var node = (_descendants$item = descendants.item(focusedIndex)) == null ? void 0 : _descendants$item.node;
    if (node) {
      focus(node, {
        selectTextIfInput: false,
        preventScroll: false
      });
    }
  }, [isOpen, focusedIndex, descendants]);
  return {
    openAndFocusMenu,
    openAndFocusFirstItem,
    openAndFocusLastItem,
    onTransitionEnd: refocus,
    unstable__animationState: animationState,
    descendants,
    popper: popper2,
    buttonId,
    menuId,
    forceUpdate: popper2.forceUpdate,
    orientation: "vertical",
    isOpen,
    onToggle,
    onOpen,
    onClose,
    menuRef,
    buttonRef,
    focusedIndex,
    closeOnSelect,
    closeOnBlur,
    autoSelect,
    setFocusedIndex,
    isLazy,
    lazyBehavior
  };
}
function useMenuButton(props, externalRef) {
  if (props === void 0) {
    props = {};
  }
  if (externalRef === void 0) {
    externalRef = null;
  }
  var menu = useMenuContext();
  var onToggle = menu.onToggle, popper2 = menu.popper, openAndFocusFirstItem = menu.openAndFocusFirstItem, openAndFocusLastItem = menu.openAndFocusLastItem;
  var onKeyDown = React27.useCallback(function(event) {
    var eventKey = normalizeEventKey(event);
    var keyMap = {
      Enter: openAndFocusFirstItem,
      ArrowDown: openAndFocusFirstItem,
      ArrowUp: openAndFocusLastItem
    };
    var action = keyMap[eventKey];
    if (action) {
      event.preventDefault();
      event.stopPropagation();
      action(event);
    }
  }, [openAndFocusFirstItem, openAndFocusLastItem]);
  return _extends22({}, props, {
    ref: mergeRefs(menu.buttonRef, externalRef, popper2.referenceRef),
    id: menu.buttonId,
    "data-active": dataAttr(menu.isOpen),
    "aria-expanded": menu.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": menu.menuId,
    onClick: callAllHandlers(props.onClick, onToggle),
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  });
}
function isTargetMenuItem(target) {
  var _target$getAttribute;
  return isHTMLElement(target) && !!((_target$getAttribute = target.getAttribute("role")) != null && _target$getAttribute.startsWith("menuitem"));
}
function useMenuList(props, ref) {
  if (props === void 0) {
    props = {};
  }
  if (ref === void 0) {
    ref = null;
  }
  var menu = useMenuContext();
  if (!menu) {
    throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");
  }
  var focusedIndex = menu.focusedIndex, setFocusedIndex = menu.setFocusedIndex, menuRef = menu.menuRef, isOpen = menu.isOpen, onClose = menu.onClose, menuId = menu.menuId, isLazy = menu.isLazy, lazyBehavior = menu.lazyBehavior, animated = menu.unstable__animationState;
  var descendants = useMenuDescendantsContext();
  var createTypeaheadHandler = useShortcut({
    preventDefault: function preventDefault(event) {
      return event.key !== " " && isTargetMenuItem(event.target);
    }
  });
  var onKeyDown = React27.useCallback(function(event) {
    var eventKey = normalizeEventKey(event);
    var keyMap = {
      Tab: function Tab(event2) {
        return event2.preventDefault();
      },
      Escape: onClose,
      ArrowDown: function ArrowDown() {
        var next = descendants.nextEnabled(focusedIndex);
        if (next)
          setFocusedIndex(next.index);
      },
      ArrowUp: function ArrowUp() {
        var prev = descendants.prevEnabled(focusedIndex);
        if (prev)
          setFocusedIndex(prev.index);
      }
    };
    var fn6 = keyMap[eventKey];
    if (fn6) {
      event.preventDefault();
      fn6(event);
      return;
    }
    var onTypeahead = createTypeaheadHandler(function(character) {
      var nextItem = getNextItemFromSearch(descendants.values(), character, function(item) {
        var _item$node$textConten, _item$node;
        return (_item$node$textConten = item == null ? void 0 : (_item$node = item.node) == null ? void 0 : _item$node.textContent) != null ? _item$node$textConten : "";
      }, descendants.item(focusedIndex));
      if (nextItem) {
        var index2 = descendants.indexOf(nextItem.node);
        setFocusedIndex(index2);
      }
    });
    if (isTargetMenuItem(event.target)) {
      onTypeahead(event);
    }
  }, [descendants, focusedIndex, createTypeaheadHandler, onClose, setFocusedIndex]);
  var hasBeenOpened = React27.useRef(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  var shouldRenderChildren = determineLazyBehavior({
    hasBeenSelected: hasBeenOpened.current,
    isLazy,
    lazyBehavior,
    isSelected: animated.present
  });
  return _extends22({}, props, {
    ref: mergeRefs(menuRef, ref),
    children: shouldRenderChildren ? props.children : null,
    tabIndex: -1,
    role: "menu",
    id: menuId,
    style: _extends22({}, props.style, {
      transformOrigin: "var(--popper-transform-origin)"
    }),
    "aria-orientation": "vertical",
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  });
}
function useMenuPositioner(props) {
  if (props === void 0) {
    props = {};
  }
  var _useMenuContext = useMenuContext(), popper2 = _useMenuContext.popper, isOpen = _useMenuContext.isOpen;
  return popper2.getPopperProps(_extends22({}, props, {
    style: _extends22({
      visibility: isOpen ? "visible" : "hidden"
    }, props.style)
  }));
}
function useMenuItem(props, externalRef) {
  if (props === void 0) {
    props = {};
  }
  if (externalRef === void 0) {
    externalRef = null;
  }
  var _props2 = props, onMouseEnterProp = _props2.onMouseEnter, onMouseMoveProp = _props2.onMouseMove, onMouseLeaveProp = _props2.onMouseLeave, onClickProp = _props2.onClick, isDisabled2 = _props2.isDisabled, isFocusable2 = _props2.isFocusable, closeOnSelect = _props2.closeOnSelect, typeProp = _props2.type, htmlProps = _objectWithoutPropertiesLoose15(_props2, _excluded2$13);
  var menu = useMenuContext();
  var setFocusedIndex = menu.setFocusedIndex, focusedIndex = menu.focusedIndex, menuCloseOnSelect = menu.closeOnSelect, onClose = menu.onClose, menuRef = menu.menuRef, isOpen = menu.isOpen, menuId = menu.menuId;
  var ref = React27.useRef(null);
  var id2 = menuId + "-menuitem-" + useId2();
  var _useMenuDescendant = useMenuDescendant({
    disabled: isDisabled2 && !isFocusable2
  }), index2 = _useMenuDescendant.index, register = _useMenuDescendant.register;
  var onMouseEnter = React27.useCallback(function(event) {
    onMouseEnterProp == null ? void 0 : onMouseEnterProp(event);
    if (isDisabled2)
      return;
    setFocusedIndex(index2);
  }, [setFocusedIndex, index2, isDisabled2, onMouseEnterProp]);
  var onMouseMove = React27.useCallback(function(event) {
    onMouseMoveProp == null ? void 0 : onMouseMoveProp(event);
    if (ref.current && !isActiveElement(ref.current)) {
      onMouseEnter(event);
    }
  }, [onMouseEnter, onMouseMoveProp]);
  var onMouseLeave = React27.useCallback(function(event) {
    onMouseLeaveProp == null ? void 0 : onMouseLeaveProp(event);
    if (isDisabled2)
      return;
    setFocusedIndex(-1);
  }, [setFocusedIndex, isDisabled2, onMouseLeaveProp]);
  var onClick = React27.useCallback(function(event) {
    onClickProp == null ? void 0 : onClickProp(event);
    if (!isTargetMenuItem(event.currentTarget))
      return;
    if (closeOnSelect != null ? closeOnSelect : menuCloseOnSelect) {
      onClose();
    }
  }, [onClose, onClickProp, menuCloseOnSelect, closeOnSelect]);
  var isFocused = index2 === focusedIndex;
  var trulyDisabled = isDisabled2 && !isFocusable2;
  useUpdateEffect(function() {
    if (!isOpen)
      return;
    if (isFocused && !trulyDisabled && ref.current) {
      focus(ref.current, {
        nextTick: true,
        selectTextIfInput: false,
        preventScroll: false
      });
    } else if (menuRef.current && !isActiveElement(menuRef.current)) {
      focus(menuRef.current, {
        preventScroll: false
      });
    }
  }, [isFocused, trulyDisabled, menuRef, isOpen]);
  var clickableProps = useClickable({
    onClick,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    ref: mergeRefs(register, ref, externalRef),
    isDisabled: isDisabled2,
    isFocusable: isFocusable2
  });
  return _extends22({}, htmlProps, clickableProps, {
    type: typeProp != null ? typeProp : clickableProps.type,
    id: id2,
    role: "menuitem",
    tabIndex: isFocused ? 0 : -1
  });
}
function useMenuOption(props, ref) {
  if (props === void 0) {
    props = {};
  }
  if (ref === void 0) {
    ref = null;
  }
  var _props3 = props, _props3$type = _props3.type, type = _props3$type === void 0 ? "radio" : _props3$type, isChecked = _props3.isChecked, rest = _objectWithoutPropertiesLoose15(_props3, _excluded3$1);
  var ownProps = useMenuItem(rest, ref);
  return _extends22({}, ownProps, {
    role: "menuitem" + type,
    "aria-checked": isChecked
  });
}
function useMenuOptionGroup(props) {
  if (props === void 0) {
    props = {};
  }
  var _props4 = props, children = _props4.children, _props4$type = _props4.type, type = _props4$type === void 0 ? "radio" : _props4$type, valueProp = _props4.value, defaultValue = _props4.defaultValue, onChangeProp = _props4.onChange, htmlProps = _objectWithoutPropertiesLoose15(_props4, _excluded4$1);
  var isRadio = type === "radio";
  var fallback = isRadio ? "" : [];
  var _useControllableState = useControllableState({
    defaultValue: defaultValue != null ? defaultValue : fallback,
    value: valueProp,
    onChange: onChangeProp
  }), value = _useControllableState[0], setValue = _useControllableState[1];
  var onChange = React27.useCallback(function(selectedValue) {
    if (type === "radio" && isString(value)) {
      setValue(selectedValue);
    }
    if (type === "checkbox" && isArray(value)) {
      var nextValue = value.includes(selectedValue) ? removeItem(value, selectedValue) : addItem(value, selectedValue);
      setValue(nextValue);
    }
  }, [value, setValue, type]);
  var validChildren = getValidChildren(children);
  var clones = validChildren.map(function(child) {
    if (child.type.id !== "MenuItemOption")
      return child;
    var onClick = function onClick2(event) {
      onChange(child.props.value);
      child.props.onClick == null ? void 0 : child.props.onClick(event);
    };
    var isChecked = type === "radio" ? child.props.value === value : value.includes(child.props.value);
    return /* @__PURE__ */ React27.cloneElement(child, {
      type,
      onClick,
      isChecked
    });
  });
  return _extends22({}, htmlProps, {
    children: clones
  });
}
var _excluded14 = ["descendants"];
var _excluded26 = ["children", "as"];
var _excluded33 = ["rootProps"];
var _excluded42 = ["type"];
var _excluded52 = ["icon", "iconSpacing", "command", "commandSpacing", "children"];
var _excluded62 = ["icon", "iconSpacing"];
var _excluded72 = ["className", "title"];
var _excluded82 = ["title", "children", "className"];
var _excluded92 = ["className", "children"];
var _excluded102 = ["className"];
var _createStylesContext5 = createStylesContext("Menu");
var StylesProvider6 = _createStylesContext5[0];
var useStyles6 = _createStylesContext5[1];
var Menu2 = function Menu3(props) {
  var children = props.children;
  var styles2 = useMultiStyleConfig("Menu", props);
  var ownProps = omitThemingProps(props);
  var _useTheme = useTheme(), direction2 = _useTheme.direction;
  var _useMenu = useMenu(_extends22({}, ownProps, {
    direction: direction2
  })), descendants = _useMenu.descendants, ctx = _objectWithoutPropertiesLoose15(_useMenu, _excluded14);
  var context = React27.useMemo(function() {
    return ctx;
  }, [ctx]);
  var isOpen = context.isOpen, onClose = context.onClose, forceUpdate = context.forceUpdate;
  return /* @__PURE__ */ React27.createElement(MenuDescendantsProvider, {
    value: descendants
  }, /* @__PURE__ */ React27.createElement(MenuProvider, {
    value: context
  }, /* @__PURE__ */ React27.createElement(StylesProvider6, {
    value: styles2
  }, runIfFn(children, {
    isOpen,
    onClose,
    forceUpdate
  }))));
};
if (__DEV__) {
  Menu2.displayName = "Menu";
}
var StyledMenuButton = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyles6();
  return /* @__PURE__ */ React27.createElement(chakra.button, _extends22({
    ref
  }, props, {
    __css: _extends22({
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      outline: 0
    }, styles2.button)
  }));
});
var MenuButton = /* @__PURE__ */ forwardRef2(function(props, ref) {
  props.children;
  var As = props.as, rest = _objectWithoutPropertiesLoose15(props, _excluded26);
  var buttonProps = useMenuButton(rest, ref);
  var Element2 = As || StyledMenuButton;
  return /* @__PURE__ */ React27.createElement(Element2, _extends22({}, buttonProps, {
    className: cx("chakra-menu__menu-button", props.className)
  }), /* @__PURE__ */ React27.createElement(chakra.span, {
    __css: {
      pointerEvents: "none",
      flex: "1 1 auto",
      minW: 0
    }
  }, props.children));
});
if (__DEV__) {
  MenuButton.displayName = "MenuButton";
}
var motionVariants = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
};
function __motion(el) {
  var m = motion;
  if ("custom" in m && typeof m.custom === "function") {
    return m.custom(el);
  }
  return m(el);
}
var MenuTransition = __motion(chakra.div);
var MenuList = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var _props$zIndex, _styles$list;
  var rootProps = props.rootProps, rest = _objectWithoutPropertiesLoose15(props, _excluded33);
  var _useMenuContext = useMenuContext(), isOpen = _useMenuContext.isOpen, onTransitionEnd = _useMenuContext.onTransitionEnd, animated = _useMenuContext.unstable__animationState;
  var ownProps = useMenuList(rest, ref);
  var positionerProps = useMenuPositioner(rootProps);
  var styles2 = useStyles6();
  return /* @__PURE__ */ React27.createElement(chakra.div, _extends22({}, positionerProps, {
    __css: {
      zIndex: (_props$zIndex = props.zIndex) != null ? _props$zIndex : (_styles$list = styles2.list) == null ? void 0 : _styles$list.zIndex
    }
  }), /* @__PURE__ */ React27.createElement(MenuTransition, _extends22({}, ownProps, {
    onUpdate: onTransitionEnd,
    onAnimationComplete: callAll(animated.onComplete, ownProps.onAnimationComplete),
    className: cx("chakra-menu__menu-list", ownProps.className),
    variants: motionVariants,
    initial: false,
    animate: isOpen ? "enter" : "exit",
    __css: _extends22({
      outline: 0
    }, styles2.list)
  })));
});
if (__DEV__) {
  MenuList.displayName = "MenuList";
}
var StyledMenuItem = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var type = props.type, rest = _objectWithoutPropertiesLoose15(props, _excluded42);
  var styles2 = useStyles6();
  var btnType = rest.as || type ? type != null ? type : void 0 : "button";
  var buttonStyles = React27.useMemo(function() {
    return _extends22({
      textDecoration: "none",
      color: "inherit",
      userSelect: "none",
      display: "flex",
      width: "100%",
      alignItems: "center",
      textAlign: "start",
      flex: "0 0 auto",
      outline: 0
    }, styles2.item);
  }, [styles2.item]);
  return /* @__PURE__ */ React27.createElement(chakra.button, _extends22({
    ref,
    type: btnType
  }, rest, {
    __css: buttonStyles
  }));
});
var MenuItem = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var icon = props.icon, _props$iconSpacing = props.iconSpacing, iconSpacing2 = _props$iconSpacing === void 0 ? "0.75rem" : _props$iconSpacing, command = props.command, _props$commandSpacing = props.commandSpacing, commandSpacing = _props$commandSpacing === void 0 ? "0.75rem" : _props$commandSpacing, children = props.children, rest = _objectWithoutPropertiesLoose15(props, _excluded52);
  var menuitemProps = useMenuItem(rest, ref);
  var shouldWrap = icon || command;
  var _children = shouldWrap ? /* @__PURE__ */ React27.createElement("span", {
    style: {
      pointerEvents: "none",
      flex: 1
    }
  }, children) : children;
  return /* @__PURE__ */ React27.createElement(StyledMenuItem, _extends22({}, menuitemProps, {
    className: cx("chakra-menu__menuitem", menuitemProps.className)
  }), icon && /* @__PURE__ */ React27.createElement(MenuIcon, {
    fontSize: "0.8em",
    marginEnd: iconSpacing2
  }, icon), _children, command && /* @__PURE__ */ React27.createElement(MenuCommand, {
    marginStart: commandSpacing
  }, command));
});
if (__DEV__) {
  MenuItem.displayName = "MenuItem";
}
var CheckIcon3 = function CheckIcon4(props) {
  return /* @__PURE__ */ React27.createElement("svg", _extends22({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, props), /* @__PURE__ */ React27.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
};
var MenuItemOption = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var icon = props.icon, _props$iconSpacing2 = props.iconSpacing, iconSpacing2 = _props$iconSpacing2 === void 0 ? "0.75rem" : _props$iconSpacing2, rest = _objectWithoutPropertiesLoose15(props, _excluded62);
  var optionProps = useMenuOption(rest, ref);
  return /* @__PURE__ */ React27.createElement(StyledMenuItem, _extends22({}, optionProps, {
    className: cx("chakra-menu__menuitem-option", rest.className)
  }), icon !== null && /* @__PURE__ */ React27.createElement(MenuIcon, {
    fontSize: "0.8em",
    marginEnd: iconSpacing2,
    opacity: props.isChecked ? 1 : 0
  }, icon || /* @__PURE__ */ React27.createElement(CheckIcon3, null)), /* @__PURE__ */ React27.createElement("span", {
    style: {
      flex: 1
    }
  }, optionProps.children));
});
MenuItemOption.id = "MenuItemOption";
if (__DEV__) {
  MenuItemOption.displayName = "MenuItemOption";
}
var MenuOptionGroup = function MenuOptionGroup2(props) {
  var className = props.className, title = props.title, rest = _objectWithoutPropertiesLoose15(props, _excluded72);
  var ownProps = useMenuOptionGroup(rest);
  return /* @__PURE__ */ React27.createElement(MenuGroup, _extends22({
    title,
    className: cx("chakra-menu__option-group", className)
  }, ownProps));
};
if (__DEV__) {
  MenuOptionGroup.displayName = "MenuOptionGroup";
}
var MenuGroup = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var title = props.title, children = props.children, className = props.className, rest = _objectWithoutPropertiesLoose15(props, _excluded82);
  var _className = cx("chakra-menu__group__title", className);
  var styles2 = useStyles6();
  return /* @__PURE__ */ React27.createElement("div", {
    ref,
    className: "chakra-menu__group",
    role: "group"
  }, title && /* @__PURE__ */ React27.createElement(chakra.p, _extends22({
    className: _className
  }, rest, {
    __css: styles2.groupTitle
  }), title), children);
});
if (__DEV__) {
  MenuGroup.displayName = "MenuGroup";
}
var MenuCommand = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useStyles6();
  return /* @__PURE__ */ React27.createElement(chakra.span, _extends22({
    ref
  }, props, {
    __css: styles2.command,
    className: "chakra-menu__command"
  }));
});
if (__DEV__) {
  MenuCommand.displayName = "MenuCommand";
}
var MenuIcon = function MenuIcon2(props) {
  var className = props.className, children = props.children, rest = _objectWithoutPropertiesLoose15(props, _excluded92);
  var child = React27.Children.only(children);
  var clone = /* @__PURE__ */ React27.isValidElement(child) ? /* @__PURE__ */ React27.cloneElement(child, {
    focusable: "false",
    "aria-hidden": true,
    className: cx("chakra-menu__icon", child.props.className)
  }) : null;
  var _className = cx("chakra-menu__icon-wrapper", className);
  return /* @__PURE__ */ React27.createElement(chakra.span, _extends22({
    className: _className
  }, rest, {
    __css: {
      flexShrink: 0
    }
  }), clone);
};
if (__DEV__) {
  MenuIcon.displayName = "MenuIcon";
}
var MenuDivider = function MenuDivider2(props) {
  var className = props.className, rest = _objectWithoutPropertiesLoose15(props, _excluded102);
  var styles2 = useStyles6();
  return /* @__PURE__ */ React27.createElement(chakra.hr, _extends22({
    role: "separator",
    "aria-orientation": "horizontal",
    className: cx("chakra-menu__divider", className)
  }, rest, {
    __css: styles2.divider
  }));
};
if (__DEV__) {
  MenuDivider.displayName = "MenuDivider";
}

// node_modules/@chakra-ui/select/dist/chakra-ui-select.esm.js
init_react();
var React28 = __toESM(require_react());
function _extends23() {
  _extends23 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends23.apply(this, arguments);
}
function _objectWithoutPropertiesLoose16(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded15 = ["children", "placeholder", "className"];
var _excluded27 = ["rootProps", "placeholder", "icon", "color", "height", "h", "minH", "minHeight", "iconColor", "iconSize"];
var _excluded34 = ["children"];
var SelectField = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var children = props.children, placeholder = props.placeholder, className = props.className, rest = _objectWithoutPropertiesLoose16(props, _excluded15);
  return /* @__PURE__ */ React28.createElement(chakra.select, _extends23({}, rest, {
    ref,
    className: cx("chakra-select", className)
  }), placeholder && /* @__PURE__ */ React28.createElement("option", {
    value: ""
  }, placeholder), children);
});
if (__DEV__) {
  SelectField.displayName = "SelectField";
}
var Select2 = /* @__PURE__ */ forwardRef2(function(props, ref) {
  var styles2 = useMultiStyleConfig("Select", props);
  var _omitThemingProps = omitThemingProps(props), rootProps = _omitThemingProps.rootProps, placeholder = _omitThemingProps.placeholder, icon = _omitThemingProps.icon, color3 = _omitThemingProps.color, height = _omitThemingProps.height, h = _omitThemingProps.h, minH = _omitThemingProps.minH, minHeight = _omitThemingProps.minHeight, iconColor = _omitThemingProps.iconColor, iconSize = _omitThemingProps.iconSize, rest = _objectWithoutPropertiesLoose16(_omitThemingProps, _excluded27);
  var _split = split(rest, layoutPropNames), layoutProps = _split[0], otherProps = _split[1];
  var ownProps = useFormControl(otherProps);
  var rootStyles = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color: color3
  };
  var fieldStyles = (0, import_lodash.default)({
    paddingEnd: "2rem"
  }, styles2.field, {
    _focus: {
      zIndex: "unset"
    }
  });
  return /* @__PURE__ */ React28.createElement(chakra.div, _extends23({
    className: "chakra-select__wrapper",
    __css: rootStyles
  }, layoutProps, rootProps), /* @__PURE__ */ React28.createElement(SelectField, _extends23({
    ref,
    height: h != null ? h : height,
    minH: minH != null ? minH : minHeight,
    placeholder
  }, ownProps, {
    __css: fieldStyles
  }), props.children), /* @__PURE__ */ React28.createElement(SelectIcon, _extends23({
    "data-disabled": dataAttr(ownProps.disabled)
  }, (iconColor || color3) && {
    color: iconColor || color3
  }, {
    __css: styles2.icon
  }, iconSize && {
    fontSize: iconSize
  }), icon));
});
if (__DEV__) {
  Select2.displayName = "Select";
}
var DefaultIcon3 = function DefaultIcon4(props) {
  return /* @__PURE__ */ React28.createElement("svg", _extends23({
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ React28.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
};
var IconWrapper = chakra("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
});
var SelectIcon = function SelectIcon2(props) {
  var _props$children = props.children, children = _props$children === void 0 ? /* @__PURE__ */ React28.createElement(DefaultIcon3, null) : _props$children, rest = _objectWithoutPropertiesLoose16(props, _excluded34);
  var clone = /* @__PURE__ */ React28.cloneElement(children, {
    role: "presentation",
    className: "chakra-select__icon",
    focusable: false,
    "aria-hidden": true,
    style: {
      width: "1em",
      height: "1em",
      color: "currentColor"
    }
  });
  return /* @__PURE__ */ React28.createElement(IconWrapper, _extends23({}, rest, {
    className: "chakra-select__icon-wrapper"
  }), /* @__PURE__ */ React28.isValidElement(children) ? clone : null);
};
if (__DEV__) {
  SelectIcon.displayName = "SelectIcon";
}

// node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js
function _objectWithoutPropertiesLoose17(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded16 = ["children", "toastOptions"];
var ChakraProvider3 = function ChakraProvider4(_ref) {
  var children = _ref.children, toastOptions = _ref.toastOptions, restProps = _objectWithoutPropertiesLoose17(_ref, _excluded16);
  return /* @__PURE__ */ React29.createElement(ChakraProvider, restProps, children, /* @__PURE__ */ React29.createElement(ToastProvider, toastOptions));
};
ChakraProvider3.defaultProps = {
  theme
};
function extendTheme() {
  for (var _len = arguments.length, extensions = new Array(_len), _key = 0; _key < _len; _key++) {
    extensions[_key] = arguments[_key];
  }
  var overrides = [].concat(extensions);
  var baseTheme = extensions[extensions.length - 1];
  if (isChakraTheme(baseTheme) && overrides.length > 1) {
    overrides = overrides.slice(0, overrides.length - 1);
  } else {
    baseTheme = theme;
  }
  return pipe.apply(void 0, overrides.map(function(extension) {
    return function(prevTheme) {
      return isFunction(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension);
    };
  }))(baseTheme);
}
function mergeThemeOverride() {
  for (var _len2 = arguments.length, overrides = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    overrides[_key2] = arguments[_key2];
  }
  return import_lodash.default.apply(void 0, [{}].concat(overrides, [mergeThemeCustomizer]));
}
function mergeThemeCustomizer(source, override, key, object) {
  if ((isFunction(source) || isFunction(override)) && Object.prototype.hasOwnProperty.call(object, key)) {
    return function() {
      var sourceValue = isFunction(source) ? source.apply(void 0, arguments) : source;
      var overrideValue = isFunction(override) ? override.apply(void 0, arguments) : override;
      return (0, import_lodash.default)({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  return void 0;
}

// app/components/nested/Feature.tsx
init_react();
var Feature = ({ blok }) => {
  return /* @__PURE__ */ React.createElement(Center, {
    h: "100px"
  }, /* @__PURE__ */ React.createElement(Box, {
    ...editable(blok),
    p: 5,
    shadow: "md",
    borderWidth: "1px"
  }, /* @__PURE__ */ React.createElement(Heading2, {
    fontSize: "xl"
  }, " ", blok.title, " "), /* @__PURE__ */ React.createElement(Text, {
    mt: 4
  }, " ", blok.description, " ")));
};

// app/components/nested/Grid.tsx
init_react();
var Grid2 = ({ bloks }) => {
  return /* @__PURE__ */ React.createElement(List2, {
    spacing: 3
  }, bloks.columns.map((blok) => /* @__PURE__ */ React.createElement(ListItem, {
    key: blok._uid
  }, /* @__PURE__ */ React.createElement(StoryblokComponent, {
    blok,
    key: blok._uid
  }))));
};

// app/components/nested/Teaser.tsx
init_react();
var Teaser = ({ blok }) => {
  return /* @__PURE__ */ React.createElement(Center, {
    h: "100px"
  }, /* @__PURE__ */ React.createElement(Heading2, {
    ...editable(blok),
    size: "lg",
    fontSize: "40px",
    key: blok._uid
  }, blok.headline));
};

// app/components/content-types/Page.tsx
init_react();

// app/scripts/helpers/components.ts
init_react();
var ComponentHelpers = class {
  static processHomepageBloks(bloks) {
    let logoComponent = { logos: [] };
    let teaser = {};
    for (let blok of bloks) {
      blok = blok;
      if (blok.component.toLowerCase() === "logos") {
        logoComponent = this.processHomepageLogo(blok);
      }
      if (blok.component.toLowerCase() === "teaser") {
        teaser = this.processHomepageTeaser(blok);
      }
      if (blok.component.toLowerCase() === "feature") {
        this.processHomepageFeature(blok);
      }
    }
    return { logoComponent, features: this.features, teaser };
  }
  static refineImages(images) {
    let refinedImages = {};
    for (let logo of images) {
      if (logo.title === "dark" /* dark */) {
        refinedImages.dark = {
          src: logo.filename,
          alt: logo.alt
        };
      }
      if (logo.title === "light" /* light */) {
        refinedImages.light = {
          src: logo.filename,
          alt: logo.alt
        };
      }
    }
    return refinedImages;
  }
  static refineLogoComponent(component, refinedImages) {
    return Object.assign(refinedImages, {
      _editable: component._editable,
      component: component.component
    });
  }
  static getHeaderLinks(bloks) {
    const catalog = bloks.find((blok) => {
      var _a;
      return blok.component === "categories" && ((_a = blok.categories) == null ? void 0 : _a.length);
    });
    const refinedCategories = /* @__PURE__ */ new Map();
    catalog.categories.forEach((category) => {
      var _a;
      refinedCategories.set(category.id, {
        full_slug: (_a = category.full_slug) != null ? _a : "",
        _editable: category._editable,
        name: category.name,
        _uid: category._uid
      });
    });
    return refinedCategories;
  }
  static processHomepageLogo(blok) {
    return this.transformBasicBlok(blok, (basicBlok) => {
      blok = blok;
      return {
        _editable: blok._editable,
        component: blok.component,
        _uid: blok._uid,
        logos: [...blok.logos]
      };
    });
  }
  static processHomepageTeaser(blok) {
    return this.transformBasicBlok(blok, (_) => {
      return blok;
    });
  }
  static processHomepageFeature(blok) {
    this.transformBasicBlok(blok, (basicBlok) => {
      const specificBlok = basicBlok;
      this.features.set(specificBlok.id.toLowerCase(), blok);
    });
  }
  static transformBasicBlok(blok, callback) {
    const basicBlok = blok;
    return callback(basicBlok);
  }
};
ComponentHelpers.features = /* @__PURE__ */ new Map();

// app/components/internal/Header.tsx
init_react();
var import_react60 = __toESM(require_react());

// node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js
init_react();
var React30 = __toESM(require_react());
var CopyIcon = createIcon({
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",
  displayName: "CopyIcon"
});
var SearchIcon = createIcon({
  d: "M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z",
  displayName: "SearchIcon"
});
var Search2Icon = createIcon({
  d: "M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",
  displayName: "Search2Icon"
});
var MoonIcon = createIcon({
  d: "M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",
  displayName: "MoonIcon"
});
var SunIcon = createIcon({
  displayName: "SunIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    strokeLinejoin: "round",
    strokeLinecap: "round",
    strokeWidth: "2",
    fill: "none",
    stroke: "currentColor"
  }, /* @__PURE__ */ React30.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M12 1v2"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M12 21v2"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M4.22 4.22l1.42 1.42"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M18.36 18.36l1.42 1.42"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M1 12h2"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M21 12h2"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M4.22 19.78l1.42-1.42"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M18.36 5.64l1.42-1.42"
  }))
});
var AddIcon = createIcon({
  d: "M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",
  displayName: "AddIcon"
});
var SmallAddIcon = createIcon({
  displayName: "SmallAddIcon",
  viewBox: "0 0 20 20",
  path: /* @__PURE__ */ React30.createElement("path", {
    fill: "currentColor",
    d: "M14 9h-3V6c0-.55-.45-1-1-1s-1 .45-1 1v3H6c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z",
    fillRule: "evenodd"
  })
});
var SettingsIcon = createIcon({
  viewBox: "0 0 14 14",
  d: "M14,7.77 L14,6.17 L12.06,5.53 L11.61,4.44 L12.49,2.6 L11.36,1.47 L9.55,2.38 L8.46,1.93 L7.77,0.01 L6.17,0.01 L5.54,1.95 L4.43,2.4 L2.59,1.52 L1.46,2.65 L2.37,4.46 L1.92,5.55 L0,6.23 L0,7.82 L1.94,8.46 L2.39,9.55 L1.51,11.39 L2.64,12.52 L4.45,11.61 L5.54,12.06 L6.23,13.98 L7.82,13.98 L8.45,12.04 L9.56,11.59 L11.4,12.47 L12.53,11.34 L11.61,9.53 L12.08,8.44 L14,7.75 L14,7.77 Z M7,10 C5.34,10 4,8.66 4,7 C4,5.34 5.34,4 7,4 C8.66,4 10,5.34 10,7 C10,8.66 8.66,10 7,10 Z",
  displayName: "SettingsIcon"
});
var CheckCircleIcon = createIcon({
  displayName: "CheckCircleIcon",
  d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
});
var LockIcon = createIcon({
  d: "M19.5,9.5h-.75V6.75a6.75,6.75,0,0,0-13.5,0V9.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5ZM7.75,6.75a4.25,4.25,0,0,1,8.5,0V9a.5.5,0,0,1-.5.5H8.25a.5.5,0,0,1-.5-.5Z",
  displayName: "LockIcon"
});
var UnlockIcon = createIcon({
  d: "M19.5,9.5h-.75V6.75A6.751,6.751,0,0,0,5.533,4.811a1.25,1.25,0,1,0,2.395.717A4.251,4.251,0,0,1,16.25,6.75V9a.5.5,0,0,1-.5.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5Z",
  displayName: "UnlockIcon"
});
var ViewIcon = createIcon({
  displayName: "ViewIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"
  }), /* @__PURE__ */ React30.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }))
});
var ViewOffIcon = createIcon({
  displayName: "ViewOffIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"
  }))
});
var DownloadIcon = createIcon({
  d: "M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z",
  displayName: "DownloadIcon",
  viewBox: "0 0 14 14"
});
var DeleteIcon = createIcon({
  displayName: "DeleteIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"
  }))
});
var RepeatIcon = createIcon({
  displayName: "RepeatIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M10.319,4.936a7.239,7.239,0,0,1,7.1,2.252,1.25,1.25,0,1,0,1.872-1.657A9.737,9.737,0,0,0,9.743,2.5,10.269,10.269,0,0,0,2.378,9.61a.249.249,0,0,1-.271.178l-1.033-.13A.491.491,0,0,0,.6,9.877a.5.5,0,0,0-.019.526l2.476,4.342a.5.5,0,0,0,.373.248.43.43,0,0,0,.062,0,.5.5,0,0,0,.359-.152l3.477-3.593a.5.5,0,0,0-.3-.844L5.15,10.172a.25.25,0,0,1-.2-.333A7.7,7.7,0,0,1,10.319,4.936Z"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M23.406,14.1a.5.5,0,0,0,.015-.526l-2.5-4.329A.5.5,0,0,0,20.546,9a.489.489,0,0,0-.421.151l-3.456,3.614a.5.5,0,0,0,.3.842l1.848.221a.249.249,0,0,1,.183.117.253.253,0,0,1,.023.216,7.688,7.688,0,0,1-5.369,4.9,7.243,7.243,0,0,1-7.1-2.253,1.25,1.25,0,1,0-1.872,1.656,9.74,9.74,0,0,0,9.549,3.03,10.261,10.261,0,0,0,7.369-7.12.251.251,0,0,1,.27-.179l1.058.127a.422.422,0,0,0,.06,0A.5.5,0,0,0,23.406,14.1Z"
  }))
});
var RepeatClockIcon = createIcon({
  displayName: "RepeatClockIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M12.965,6a1,1,0,0,0-1,1v5.5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2h-3.75a.25.25,0,0,1-.25-.25V7A1,1,0,0,0,12.965,6Z"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M12.567,1.258A10.822,10.822,0,0,0,2.818,8.4a.25.25,0,0,1-.271.163L.858,8.309a.514.514,0,0,0-.485.213.5.5,0,0,0-.021.53l2.679,4.7a.5.5,0,0,0,.786.107l3.77-3.746a.5.5,0,0,0-.279-.85L5.593,9.007a.25.25,0,0,1-.192-.35,8.259,8.259,0,1,1,7.866,11.59,1.25,1.25,0,0,0,.045,2.5h.047a10.751,10.751,0,1,0-.792-21.487Z"
  }))
});
var EditIcon = createIcon({
  displayName: "EditIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  }))
});
var ChevronLeftIcon = createIcon({
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
  displayName: "ChevronLeftIcon"
});
var ChevronRightIcon = createIcon({
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
  displayName: "ChevronRightIcon"
});
var ChevronDownIcon = createIcon({
  displayName: "ChevronDownIcon",
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
});
var ChevronUpIcon = createIcon({
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",
  displayName: "ChevronUpIcon"
});
var ArrowBackIcon = createIcon({
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
  displayName: "ArrowBackIcon"
});
var ArrowForwardIcon = createIcon({
  d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  displayName: "ArrowForwardIcon"
});
var ArrowUpIcon = createIcon({
  d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z",
  displayName: "ArrowUpIcon"
});
var ArrowUpDownIcon = createIcon({
  viewBox: "0 0 16 16",
  d: "M11.891 9.992a1 1 0 1 1 1.416 1.415l-4.3 4.3a1 1 0 0 1-1.414 0l-4.3-4.3A1 1 0 0 1 4.71 9.992l3.59 3.591 3.591-3.591zm0-3.984L8.3 2.417 4.709 6.008a1 1 0 0 1-1.416-1.415l4.3-4.3a1 1 0 0 1 1.414 0l4.3 4.3a1 1 0 1 1-1.416 1.415z",
  displayName: "ArrowUpDownIcon"
});
var ArrowDownIcon = createIcon({
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
  displayName: "ArrowDownIcon"
});
var ExternalLinkIcon = createIcon({
  displayName: "ExternalLinkIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M15 3h6v6"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M10 14L21 3"
  }))
});
var LinkIcon = createIcon({
  displayName: "LinkIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"
  }))
});
var PlusSquareIcon = createIcon({
  displayName: "PlusSquareIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, /* @__PURE__ */ React30.createElement("rect", {
    height: "18",
    width: "18",
    rx: "2",
    ry: "2",
    x: "3",
    y: "3"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M12 8v8"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M8 12h8"
  }))
});
var CalendarIcon = createIcon({
  displayName: "CalendarIcon",
  viewBox: "0 0 14 14",
  d: "M10.8889,5.5 L3.11111,5.5 L3.11111,7.05556 L10.8889,7.05556 L10.8889,5.5 Z M12.4444,1.05556 L11.6667,1.05556 L11.6667,0 L10.1111,0 L10.1111,1.05556 L3.88889,1.05556 L3.88889,0 L2.33333,0 L2.33333,1.05556 L1.55556,1.05556 C0.692222,1.05556 0.00777777,1.75556 0.00777777,2.61111 L0,12.5 C0,13.3556 0.692222,14 1.55556,14 L12.4444,14 C13.3,14 14,13.3556 14,12.5 L14,2.61111 C14,1.75556 13.3,1.05556 12.4444,1.05556 Z M12.4444,12.5 L1.55556,12.5 L1.55556,3.94444 L12.4444,3.94444 L12.4444,12.5 Z M8.55556,8.61111 L3.11111,8.61111 L3.11111,10.1667 L8.55556,10.1667 L8.55556,8.61111 Z"
});
var ChatIcon = createIcon({
  d: "M0.913134,0.920639 C1.49851,0.331726 2.29348,0 3.12342,0 L10.8766,0 C11.7065,0 12.5015,0.331725 13.0869,0.920639 C13.6721,1.50939 14,2.30689 14,3.13746 L14,8.12943 C13.9962,8.51443 13.9059,8.97125 13.7629,9.32852 C13.6128,9.683 13.3552,10.0709 13.0869,10.3462 C12.813,10.6163 12.4265,10.8761 12.0734,11.0274 C11.7172,11.1716 11.2607,11.263 10.8766,11.2669 L10.1234,11.2669 L10.1234,12.5676 L10.1209,12.5676 C10.1204,12.793 10.0633,13.0791 9.97807,13.262 C9.8627,13.466 9.61158,13.7198 9.40818,13.8382 L9.40824,13.8383 C9.4077,13.8386 9.40716,13.8388 9.40661,13.8391 C9.40621,13.8393 9.4058,13.8396 9.40539,13.8398 L9.40535,13.8397 C9.22958,13.9254 8.94505,13.9951 8.75059,14 L8.74789,14 C8.35724,13.9963 7.98473,13.8383 7.71035,13.5617 L5.39553,11.2669 L3.12342,11.2669 C2.29348,11.2669 1.49851,10.9352 0.913134,10.3462 C0.644826,10.0709 0.387187,9.683 0.23711,9.32852 C0.0941235,8.97125 0.00379528,8.51443 0,8.12943 L0,3.13746 C0,2.30689 0.327915,1.50939 0.913134,0.920639 Z M3.12342,1.59494 C2.71959,1.59494 2.33133,1.75628 2.04431,2.04503 C1.75713,2.33395 1.59494,2.72681 1.59494,3.13746 L1.59494,8.12943 C1.59114,8.35901 1.62114,8.51076 1.71193,8.72129 C1.79563,8.9346 1.88065,9.06264 2.04431,9.22185 C2.33133,9.5106 2.71959,9.67195 3.12342,9.67195 L5.72383,9.67195 C5.93413,9.67195 6.13592,9.75502 6.28527,9.90308 L8.52848,12.1269 L8.52848,10.4694 C8.52848,10.029 8.88552,9.67195 9.32595,9.67195 L10.8766,9.67195 C11.1034,9.67583 11.2517,9.64614 11.4599,9.55518 C11.6712,9.47132 11.7976,9.38635 11.9557,9.22185 C12.1193,9.06264 12.2044,8.9346 12.2881,8.72129 C12.3789,8.51076 12.4089,8.35901 12.4051,8.12943 L12.4051,3.13746 C12.4051,2.72681 12.2429,2.33394 11.9557,2.04503 C11.6687,1.75628 11.2804,1.59494 10.8766,1.59494 L3.12342,1.59494 Z",
  displayName: "ChatIcon",
  viewBox: "0 0 14 14"
});
var TimeIcon = createIcon({
  displayName: "TimeIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"
  }))
});
var ArrowRightIcon = createIcon({
  displayName: "ArrowRightIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"
  }))
});
var ArrowLeftIcon = createIcon({
  displayName: "ArrowLeftIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"
  }))
});
var AtSignIcon = createIcon({
  displayName: "AtSignIcon",
  d: "M12,.5A11.634,11.634,0,0,0,.262,12,11.634,11.634,0,0,0,12,23.5a11.836,11.836,0,0,0,6.624-2,1.25,1.25,0,1,0-1.393-2.076A9.34,9.34,0,0,1,12,21a9.132,9.132,0,0,1-9.238-9A9.132,9.132,0,0,1,12,3a9.132,9.132,0,0,1,9.238,9v.891a1.943,1.943,0,0,1-3.884,0V12A5.355,5.355,0,1,0,12,17.261a5.376,5.376,0,0,0,3.861-1.634,4.438,4.438,0,0,0,7.877-2.736V12A11.634,11.634,0,0,0,12,.5Zm0,14.261A2.763,2.763,0,1,1,14.854,12,2.812,2.812,0,0,1,12,14.761Z"
});
var AttachmentIcon = createIcon({
  displayName: "AttachmentIcon",
  d: "M21.843,3.455a6.961,6.961,0,0,0-9.846,0L1.619,13.832a5.128,5.128,0,0,0,7.252,7.252L17.3,12.653A3.293,3.293,0,1,0,12.646,8L7.457,13.184A1,1,0,1,0,8.871,14.6L14.06,9.409a1.294,1.294,0,0,1,1.829,1.83L7.457,19.67a3.128,3.128,0,0,1-4.424-4.424L13.411,4.869a4.962,4.962,0,1,1,7.018,7.018L12.646,19.67a1,1,0,1,0,1.414,1.414L21.843,13.3a6.96,6.96,0,0,0,0-9.846Z"
});
var UpDownIcon = createIcon({
  displayName: "UpDownIcon",
  viewBox: "-1 -1 9 11",
  d: "M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"
});
var StarIcon = createIcon({
  d: "M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z",
  displayName: "StarIcon"
});
var EmailIcon = createIcon({
  displayName: "EmailIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("path", {
    d: "M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"
  }))
});
var PhoneIcon = createIcon({
  d: "M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",
  displayName: "PhoneIcon",
  viewBox: "0 0 14 14"
});
var DragHandleIcon = createIcon({
  viewBox: "0 0 10 10",
  d: "M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z",
  displayName: "DragHandleIcon"
});
var SpinnerIcon = createIcon({
  displayName: "SpinnerIcon",
  path: /* @__PURE__ */ React30.createElement(React30.Fragment, null, /* @__PURE__ */ React30.createElement("defs", null, /* @__PURE__ */ React30.createElement("linearGradient", {
    x1: "28.154%",
    y1: "63.74%",
    x2: "74.629%",
    y2: "17.783%",
    id: "a"
  }, /* @__PURE__ */ React30.createElement("stop", {
    stopColor: "currentColor",
    offset: "0%"
  }), /* @__PURE__ */ React30.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: "0",
    offset: "100%"
  }))), /* @__PURE__ */ React30.createElement("g", {
    transform: "translate(2)",
    fill: "none"
  }, /* @__PURE__ */ React30.createElement("circle", {
    stroke: "url(#a)",
    strokeWidth: "4",
    cx: "10",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ React30.createElement("path", {
    d: "M10 2C4.477 2 0 6.477 0 12",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /* @__PURE__ */ React30.createElement("rect", {
    fill: "currentColor",
    x: "8",
    width: "4",
    height: "4",
    rx: "8"
  })))
});
var CloseIcon3 = createIcon({
  displayName: "CloseIcon",
  d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
});
var SmallCloseIcon = createIcon({
  displayName: "SmallCloseIcon",
  viewBox: "0 0 16 16",
  path: /* @__PURE__ */ React30.createElement("path", {
    d: "M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z",
    fillRule: "evenodd",
    fill: "currentColor"
  })
});
var NotAllowedIcon = createIcon({
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",
  displayName: "NotAllowedIcon"
});
var TriangleDownIcon = createIcon({
  d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",
  displayName: "TriangleDownIcon"
});
var TriangleUpIcon = createIcon({
  d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",
  displayName: "TriangleUpIcon"
});
var InfoOutlineIcon = createIcon({
  displayName: "InfoOutlineIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeWidth: "2"
  }, /* @__PURE__ */ React30.createElement("circle", {
    cx: "12",
    cy: "12",
    fill: "none",
    r: "11",
    stroke: "currentColor"
  }), /* @__PURE__ */ React30.createElement("line", {
    fill: "none",
    x1: "11.959",
    x2: "11.959",
    y1: "11",
    y2: "17"
  }), /* @__PURE__ */ React30.createElement("circle", {
    cx: "11.959",
    cy: "7",
    r: "1",
    stroke: "none"
  }))
});
var BellIcon = createIcon({
  displayName: "BellIcon",
  d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
});
var InfoIcon3 = createIcon({
  d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
});
var QuestionIcon = createIcon({
  d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z",
  displayName: "QuestionIcon"
});
var QuestionOutlineIcon = createIcon({
  displayName: "QuestionOutlineIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ React30.createElement("path", {
    strokeLinecap: "round",
    fill: "none",
    d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
  }), /* @__PURE__ */ React30.createElement("path", {
    fill: "none",
    strokeLinecap: "round",
    d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
  }), /* @__PURE__ */ React30.createElement("circle", {
    fill: "none",
    strokeMiterlimit: "10",
    cx: "12",
    cy: "12",
    r: "11.25"
  }))
});
var WarningIcon3 = createIcon({
  d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
  displayName: "WarningIcon"
});
var WarningTwoIcon = createIcon({
  displayName: "WarningTwoIcon",
  d: "M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"
});
var CheckIcon5 = createIcon({
  viewBox: "0 0 14 14",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("polygon", {
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }))
});
var MinusIcon = createIcon({
  displayName: "MinusIcon",
  path: /* @__PURE__ */ React30.createElement("g", {
    fill: "currentColor"
  }, /* @__PURE__ */ React30.createElement("rect", {
    height: "4",
    width: "20",
    x: "2",
    y: "10"
  }))
});
var HamburgerIcon = createIcon({
  displayName: "HamburgerIcon",
  viewBox: "0 0 24 24",
  d: "M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
});

// app/components/nested/Category.tsx
init_react();
var Category = ({ link }) => {
  return /* @__PURE__ */ React.createElement(Link2, {
    ...editable(link),
    px: 2,
    py: 1,
    rounded: "md",
    _hover: {
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700")
    },
    href: link.full_slug
  }, link.name);
};

// app/components/internal/CountrySelector.tsx
init_react();
var import_react57 = __toESM(require_react());

// node_modules/react-country-flag/dist/react-country-flag.esm.js
init_react();
var import_react56 = __toESM(require_react());
function _extends24() {
  _extends24 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends24.apply(this, arguments);
}
function _objectWithoutPropertiesLoose18(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded17 = ["cdnSuffix", "cdnUrl", "countryCode", "style", "svg"];
var DEFAULT_CDN_URL = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/";
var DEFAULT_CDN_SUFFIX = "svg";
var OFFSET = 127397;
var ReactCountryFlag = function ReactCountryFlag2(_ref) {
  var _ref$cdnSuffix = _ref.cdnSuffix, cdnSuffix = _ref$cdnSuffix === void 0 ? DEFAULT_CDN_SUFFIX : _ref$cdnSuffix, _ref$cdnUrl = _ref.cdnUrl, cdnUrl = _ref$cdnUrl === void 0 ? DEFAULT_CDN_URL : _ref$cdnUrl, countryCode = _ref.countryCode, style = _ref.style, _ref$svg = _ref.svg, svg = _ref$svg === void 0 ? false : _ref$svg, props = _objectWithoutPropertiesLoose18(_ref, _excluded17);
  if (typeof countryCode !== "string") {
    return null;
  }
  if (svg) {
    var flagUrl = "" + cdnUrl + countryCode.toLowerCase() + "." + cdnSuffix;
    return (0, import_react56.createElement)("img", Object.assign({}, props, {
      src: flagUrl,
      style: _extends24({
        display: "inline-block",
        width: "1em",
        height: "1em",
        verticalAlign: "middle"
      }, style)
    }));
  }
  var emoji = countryCode.toUpperCase().replace(/./g, function(_char) {
    return String.fromCodePoint(_char.charCodeAt(0) + OFFSET);
  });
  return (0, import_react56.createElement)("span", Object.assign({
    role: "img"
  }, props, {
    style: _extends24({
      display: "inline-block",
      fontSize: "1em",
      lineHeight: "1em",
      verticalAlign: "middle"
    }, style)
  }), emoji);
};
var react_country_flag_esm_default = ReactCountryFlag;

// app/components/internal/CountrySelector.tsx
var CountrySelector = () => {
  let { space: space2 } = useLoaderData();
  const languages = space2.languages;
  const languagesCodes = space2.language_codes;
  const [languageSelected, setLanguage] = (0, import_react57.useState)("");
  const [rendered, isRendered] = (0, import_react57.useState)(false);
  (0, import_react57.useEffect)(() => {
    const locale = HomeFactory.browserCookies().getCurrentLocale();
    if (locale) {
      setLanguage(locale);
    }
    isRendered(true);
  }, []);
  return /* @__PURE__ */ import_react57.default.createElement(Stack, {
    spacing: 4
  }, /* @__PURE__ */ import_react57.default.createElement(Select2, {
    defaultValue: "" /* default */,
    onChange: HomeFactory.browserCookies().setCurrentLocaleAndRedirect.bind(void 0, languagesCodes),
    size: "md"
  }, languagesCodes.map((languageCode) => /* @__PURE__ */ import_react57.default.createElement("option", {
    value: languageCode,
    selected: rendered && languageSelected === languageCode ? true : false,
    key: languageCode
  }, /* @__PURE__ */ import_react57.default.createElement(react_country_flag_esm_default, {
    countryCode: AlgosFactory.removeBrackets(languages[languageCode])
  }), " " + languages[languageCode]))));
};

// app/components/internal/Header.tsx
var Header = ({ logos, links: links2 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return /* @__PURE__ */ import_react60.default.createElement(import_react60.default.Fragment, null, /* @__PURE__ */ import_react60.default.createElement(Flex, {
    h: 16,
    alignItems: "center",
    justifyContent: "space-between"
  }, /* @__PURE__ */ import_react60.default.createElement(IconButton, {
    size: "md",
    icon: isOpen ? /* @__PURE__ */ import_react60.default.createElement(CloseIcon3, null) : /* @__PURE__ */ import_react60.default.createElement(HamburgerIcon, null),
    "aria-label": "Open Menu",
    display: { md: "none" },
    onClick: isOpen ? onClose : onOpen
  }), /* @__PURE__ */ import_react60.default.createElement(HStack, {
    spacing: 8,
    alignItems: "center"
  }, /* @__PURE__ */ import_react60.default.createElement(StoryblokComponent, {
    blok: logos
  }), /* @__PURE__ */ import_react60.default.createElement(HStack, {
    as: "nav",
    spacing: 4,
    display: { base: "none", md: "flex" }
  }, Array.from(links2.values()).map((link) => /* @__PURE__ */ import_react60.default.createElement(Category, {
    key: link._uid,
    link
  }, " ", link, " ")))), /* @__PURE__ */ import_react60.default.createElement(Flex, {
    alignItems: "center"
  }, /* @__PURE__ */ import_react60.default.createElement(CountrySelector, null), /* @__PURE__ */ import_react60.default.createElement(Button2, {
    onClick: toggleColorMode
  }, colorMode === "light" /* light */ ? /* @__PURE__ */ import_react60.default.createElement(MoonIcon, {
    w: 6,
    h: 6
  }) : /* @__PURE__ */ import_react60.default.createElement(SunIcon, {
    w: 6,
    h: 6
  })), /* @__PURE__ */ import_react60.default.createElement(Menu2, null, /* @__PURE__ */ import_react60.default.createElement(MenuButton, {
    as: Button2,
    rounded: "full",
    variant: "link",
    cursor: "pointer",
    minW: 0
  }, /* @__PURE__ */ import_react60.default.createElement(Avatar2, {
    size: "sm",
    src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
  })), /* @__PURE__ */ import_react60.default.createElement(MenuList, null, /* @__PURE__ */ import_react60.default.createElement(MenuItem, null), /* @__PURE__ */ import_react60.default.createElement(MenuDivider, null))))), isOpen ? /* @__PURE__ */ import_react60.default.createElement(Box, {
    pb: 4,
    display: { md: "none" }
  }, /* @__PURE__ */ import_react60.default.createElement(Stack, {
    as: "nav",
    spacing: 4
  }, Array.from(links2.values()).map((link) => /* @__PURE__ */ import_react60.default.createElement(Category, {
    key: link._uid,
    link
  }, " ", link, " ")))) : null);
};

// app/components/content-types/Page.tsx
var Page = ({ blok }) => {
  const refinedLinks = ComponentHelpers.getHeaderLinks(blok.body);
  const { logoComponent, features, teaser } = ComponentHelpers.processHomepageBloks(blok.body);
  const refinedImages = ComponentHelpers.refineImages(logoComponent.logos);
  const refinedLogos = ComponentHelpers.refineLogoComponent(logoComponent, refinedImages);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box, {
    bg: useColorModeValue("gray.100", "gray.900"),
    px: 4
  }, /* @__PURE__ */ React.createElement(Header, {
    links: refinedLinks,
    logos: refinedLogos
  })), /* @__PURE__ */ React.createElement(Box, {
    p: 4
  }, /* @__PURE__ */ React.createElement(StoryblokComponent, {
    blok: teaser
  }), Array.from(features.values()).map((feature) => /* @__PURE__ */ React.createElement(StoryblokComponent, {
    blok: feature,
    key: feature._uid
  }))));
};

// app/components/content-types/Product.tsx
init_react();
var Product = ({ blok }) => {
  var _a;
  return /* @__PURE__ */ React.createElement("div", {
    ...editable(blok),
    key: blok._uid
  }, /* @__PURE__ */ React.createElement("h2", null, " ", blok.name, " "), (_a = blok.images) == null ? void 0 : _a.map((image) => /* @__PURE__ */ React.createElement("img", {
    src: image.filename,
    alt: image.alt,
    key: image.id
  })));
};

// app/components/nested/Logos.tsx
init_react();
var Logos = ({ blok }) => {
  var _a, _b, _c, _d;
  const { colorMode } = useColorMode();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, colorMode === "light" /* light */ ? /* @__PURE__ */ React.createElement(Image$1, {
    ...editable(blok),
    boxSize: "120px",
    objectFit: "contain",
    src: (_a = blok == null ? void 0 : blok.dark) == null ? void 0 : _a.src,
    alt: (_b = blok == null ? void 0 : blok.dark) == null ? void 0 : _b.alt
  }) : /* @__PURE__ */ React.createElement(Image$1, {
    ...editable(blok),
    boxSize: "120px",
    objectFit: "contain",
    src: (_c = blok == null ? void 0 : blok.light) == null ? void 0 : _c.src,
    alt: (_d = blok == null ? void 0 : blok.light) == null ? void 0 : _d.alt
  }));
};

// app/document.tsx
init_react();
var import_react71 = __toESM(require_react());

// app/theme.ts
init_react();
var config2 = {
  initialColorMode: "light" /* light */,
  useSystemColorMode: false
};
var theme2 = extendTheme({ config: config2 });
var theme_default = theme2;

// app/document.tsx
var Document = withEmotionCache(({ children }, emotionCache) => {
  const serverStyleData = (0, import_react71.useContext)(ServerStyleContext);
  const clientStyleData = (0, import_react71.useContext)(ClientStyleContext);
  (0, import_react71.useEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags2 = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags2.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData == null ? void 0 : clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ import_react71.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react71.default.createElement("head", null, /* @__PURE__ */ import_react71.default.createElement(Meta, null), /* @__PURE__ */ import_react71.default.createElement(Links, null), serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css: css3 }) => /* @__PURE__ */ import_react71.default.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css3 }
  }))), /* @__PURE__ */ import_react71.default.createElement("body", null, /* @__PURE__ */ import_react71.default.createElement(ColorModeScript, {
    initialColorMode: theme_default.config.initialColorMode
  }), children, /* @__PURE__ */ import_react71.default.createElement(ScrollRestoration, null), /* @__PURE__ */ import_react71.default.createElement(Scripts, null), /* @__PURE__ */ import_react71.default.createElement(LiveReload, null)));
});

// .env.ts
init_react();
var process2 = {
  env: {
    PREVIEW_ACCESS_TOKEN: "Wr4154DUMBlpx3rKUVTyrgtt"
  }
};

// app/root.tsx
var components2 = {
  feature: Feature,
  grid: Grid2,
  teaser: Teaser,
  page: Page,
  Product,
  logos: Logos
};
storyblokInit({
  accessToken: process2.env.PREVIEW_ACCESS_TOKEN,
  use: [api],
  components: components2
});
var meta = () => ({
  charset: "utf-8",
  title: "Nexum Post",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon_io/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon_io/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon_io/favicon-16x16.png" },
    { rel: "manifest", href: "/favicon_io/site.webmanifest" }
  ];
};
function App() {
  return /* @__PURE__ */ import_react73.default.createElement(Document, null, /* @__PURE__ */ import_react73.default.createElement(ChakraProvider3, {
    theme: theme_default
  }, /* @__PURE__ */ import_react73.default.createElement(Outlet, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-7VANF4LL.js.map
