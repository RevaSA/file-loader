// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__createBinding = __createBinding;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

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
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __createBinding(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}

function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
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
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"../node_modules/@firebase/util/dist/index.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areCookiesEnabled = areCookiesEnabled;
exports.async = async;
exports.calculateBackoffMillis = calculateBackoffMillis;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isIndexedDBAvailable = isIndexedDBAvailable;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isSafari = isSafari;
exports.isUWP = isUWP;
exports.jsonEval = jsonEval;
exports.map = map;
exports.ordinal = ordinal;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringify = stringify;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateIndexedDBOpenable = validateIndexedDBOpenable;
exports.validateNamespace = validateNamespace;
exports.validateArgCount = exports.stringToByteArray = exports.stringLength = exports.issuedAtTime = exports.isValidTimestamp = exports.isValidFormat = exports.isAdmin = exports.decode = exports.base64Encode = exports.base64Decode = exports.base64 = exports.assertionError = exports.assert = exports.Sha1 = exports.RANDOM_FACTOR = exports.MAX_VALUE_MILLIS = exports.FirebaseError = exports.ErrorFactory = exports.Deferred = exports.CONSTANTS = void 0;

var _tslib = require("tslib");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
  /**
   * @define {boolean} Whether this is the client Node.js SDK.
   */
  NODE_CLIENT: false,

  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: false,

  /**
   * Firebase SDK Version
   */
  SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Throws an error if the provided assertion is falsy
 */

exports.CONSTANTS = CONSTANTS;

var assert = function (assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
/**
 * Returns an Error object suitable for throwing.
 */


exports.assert = assert;

var assertionError = function (message) {
  return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.assertionError = assertionError;

var stringToByteArray = function (str) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */


var byteArrayToString = function (bytes) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var pos = 0,
      c = 0;

  while (pos < bytes.length) {
    var c1 = bytes[pos++];

    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }

  return out.join('');
}; // We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()


var base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,

  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,

  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,

  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,

  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + '+/=';
  },

  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + '-_.';
  },

  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === 'function',

  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray: function (input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error('encodeByteArray takes an array as a parameter');
    }

    this.init_();
    var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    var output = [];

    for (var i = 0; i < input.length; i += 3) {
      var byte1 = input[i];
      var haveByte2 = i + 1 < input.length;
      var byte2 = haveByte2 ? input[i + 1] : 0;
      var haveByte3 = i + 2 < input.length;
      var byte3 = haveByte3 ? input[i + 2] : 0;
      var outByte1 = byte1 >> 2;
      var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
      var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
      var outByte4 = byte3 & 0x3f;

      if (!haveByte3) {
        outByte4 = 64;

        if (!haveByte2) {
          outByte3 = 64;
        }
      }

      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }

    return output.join('');
  },

  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString: function (input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }

    return this.encodeByteArray(stringToByteArray(input), webSafe);
  },

  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString: function (input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }

    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },

  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray: function (input, webSafe) {
    this.init_();
    var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    var output = [];

    for (var i = 0; i < input.length;) {
      var byte1 = charToByteMap[input.charAt(i++)];
      var haveByte2 = i < input.length;
      var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      var haveByte3 = i < input.length;
      var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      var haveByte4 = i < input.length;
      var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;

      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw Error();
      }

      var outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);

      if (byte3 !== 64) {
        var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
        output.push(outByte2);

        if (byte4 !== 64) {
          var outByte3 = byte3 << 6 & 0xc0 | byte4;
          output.push(outByte3);
        }
      }
    }

    return output;
  },

  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_: function () {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

      for (var i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
/**
 * URL-safe base64 encoding
 */

exports.base64 = base64;

var base64Encode = function (str) {
  var utf8Bytes = stringToByteArray(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */


exports.base64Encode = base64Encode;

var base64Decode = function (str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error('base64Decode failed: ', e);
  }

  return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */


exports.base64Decode = base64Decode;

function deepCopy(value) {
  return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */


function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }

  switch (source.constructor) {
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      var dateValue = source;
      return new Date(dateValue.getTime());

    case Object:
      if (target === undefined) {
        target = {};
      }

      break;

    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;

    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }

  for (var prop in source) {
    // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }

    target[prop] = deepExtend(target[prop], source[prop]);
  }

  return target;
}

function isValidKey(key) {
  return key !== '__proto__';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Deferred =
/** @class */
function () {
  function Deferred() {
    var _this = this;

    this.reject = function () {};

    this.resolve = function () {};

    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */


  Deferred.prototype.wrapCallback = function (callback) {
    var _this = this;

    return function (error, value) {
      if (error) {
        _this.reject(error);
      } else {
        _this.resolve(value);
      }

      if (typeof callback === 'function') {
        // Attaching noop handler just in case developer wasn't expecting
        // promises
        _this.promise.catch(function () {}); // Some of our callbacks don't expect a value and our own tests
        // assert that the parameter length is 1


        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  };

  return Deferred;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */


exports.Deferred = Deferred;

function getUA() {
  if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
    return navigator['userAgent'];
  } else {
    return '';
  }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */


function isMobileCordova() {
  return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/


function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) {
    return false;
  }
}
/**
 * Detect Browser Environment
 */


function isBrowser() {
  return typeof self === 'object' && self.self === self;
}

function isBrowserExtension() {
  var runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
  return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */


function isReactNative() {
  return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */


function isElectron() {
  return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */


function isIE() {
  var ua = getUA();
  return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */


function isUWP() {
  return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */


function isNodeSdk() {
  return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */


function isSafari() {
  return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */


function isIndexedDBAvailable() {
  return 'indexedDB' in self && indexedDB != null;
}
/**
 * This method validates browser context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 */


function validateIndexedDBOpenable() {
  return new Promise(function (resolve, reject) {
    try {
      var preExist_1 = true;
      var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
      var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);

      request_1.onsuccess = function () {
        request_1.result.close(); // delete database only when it doesn't pre-exist

        if (!preExist_1) {
          window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
        }

        resolve(true);
      };

      request_1.onupgradeneeded = function () {
        preExist_1 = false;
      };

      request_1.onerror = function () {
        var _a;

        reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
      };
    } catch (error) {
      reject(error);
    }
  });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */


function areCookiesEnabled() {
  if (!navigator || !navigator.cookieEnabled) {
    return false;
  }

  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ERROR_NAME = 'FirebaseError'; // Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

var FirebaseError =
/** @class */
function (_super) {
  (0, _tslib.__extends)(FirebaseError, _super);

  function FirebaseError(code, message, customData) {
    var _this = _super.call(this, message) || this;

    _this.code = code;
    _this.customData = customData;
    _this.name = ERROR_NAME; // Fix For ES5
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    Object.setPrototypeOf(_this, FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
    // Only available on V8.

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, ErrorFactory.prototype.create);
    }

    return _this;
  }

  return FirebaseError;
}(Error);

exports.FirebaseError = FirebaseError;

var ErrorFactory =
/** @class */
function () {
  function ErrorFactory(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }

  ErrorFactory.prototype.create = function (code) {
    var data = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      data[_i - 1] = arguments[_i];
    }

    var customData = data[0] || {};
    var fullCode = this.service + "/" + code;
    var template = this.errors[code];
    var message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

    var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
    var error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  };

  return ErrorFactory;
}();

exports.ErrorFactory = ErrorFactory;

function replaceTemplate(template, data) {
  return template.replace(PATTERN, function (_, key) {
    var value = data[key];
    return value != null ? String(value) : "<" + key + "?>";
  });
}

var PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */

function jsonEval(str) {
  return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */


function stringify(data) {
  return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var decode = function (token) {
  var header = {},
      claims = {},
      data = {},
      signature = '';

  try {
    var parts = token.split('.');
    header = jsonEval(base64Decode(parts[0]) || '');
    claims = jsonEval(base64Decode(parts[1]) || '');
    signature = parts[2];
    data = claims['d'] || {};
    delete claims['d'];
  } catch (e) {}

  return {
    header: header,
    claims: claims,
    data: data,
    signature: signature
  };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.decode = decode;

var isValidTimestamp = function (token) {
  var claims = decode(token).claims;
  var now = Math.floor(new Date().getTime() / 1000);
  var validSince = 0,
      validUntil = 0;

  if (typeof claims === 'object') {
    if (claims.hasOwnProperty('nbf')) {
      validSince = claims['nbf'];
    } else if (claims.hasOwnProperty('iat')) {
      validSince = claims['iat'];
    }

    if (claims.hasOwnProperty('exp')) {
      validUntil = claims['exp'];
    } else {
      // token will expire after 24h by default
      validUntil = validSince + 86400;
    }
  }

  return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.isValidTimestamp = isValidTimestamp;

var issuedAtTime = function (token) {
  var claims = decode(token).claims;

  if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
    return claims['iat'];
  }

  return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.issuedAtTime = issuedAtTime;

var isValidFormat = function (token) {
  var decoded = decode(token),
      claims = decoded.claims;
  return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.isValidFormat = isValidFormat;

var isAdmin = function (token) {
  var claims = decode(token).claims;
  return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.isAdmin = isAdmin;

function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function safeGet(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

function map(obj, fn, contextObj) {
  var res = {};

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }

  return res;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */


function querystring(querystringParams) {
  var params = [];

  var _loop_1 = function (key, value) {
    if (Array.isArray(value)) {
      value.forEach(function (arrayVal) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  };

  for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
    var _b = _a[_i],
        key = _b[0],
        value = _b[1];

    _loop_1(key, value);
  }

  return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */


function querystringDecode(querystring) {
  var obj = {};
  var tokens = querystring.replace(/^\?/, '').split('&');
  tokens.forEach(function (token) {
    if (token) {
      var key = token.split('=');
      obj[key[0]] = key[1];
    }
  });
  return obj;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */

/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */


var Sha1 =
/** @class */
function () {
  function Sha1() {
    /**
     * Holds the previous values of accumulated variables a-e in the compress_
     * function.
     * @private
     */
    this.chain_ = [];
    /**
     * A buffer holding the partially computed hash result.
     * @private
     */

    this.buf_ = [];
    /**
     * An array of 80 bytes, each a part of the message to be hashed.  Referred to
     * as the message schedule in the docs.
     * @private
     */

    this.W_ = [];
    /**
     * Contains data needed to pad messages less than 64 bytes.
     * @private
     */

    this.pad_ = [];
    /**
     * @private {number}
     */

    this.inbuf_ = 0;
    /**
     * @private {number}
     */

    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;

    for (var i = 1; i < this.blockSize; ++i) {
      this.pad_[i] = 0;
    }

    this.reset();
  }

  Sha1.prototype.reset = function () {
    this.chain_[0] = 0x67452301;
    this.chain_[1] = 0xefcdab89;
    this.chain_[2] = 0x98badcfe;
    this.chain_[3] = 0x10325476;
    this.chain_[4] = 0xc3d2e1f0;
    this.inbuf_ = 0;
    this.total_ = 0;
  };
  /**
   * Internal compress helper function.
   * @param buf Block to compress.
   * @param offset Offset of the block in the buffer.
   * @private
   */


  Sha1.prototype.compress_ = function (buf, offset) {
    if (!offset) {
      offset = 0;
    }

    var W = this.W_; // get 16 big endian words

    if (typeof buf === 'string') {
      for (var i = 0; i < 16; i++) {
        // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
        // have a bug that turns the post-increment ++ operator into pre-increment
        // during JIT compilation.  We have code that depends heavily on SHA-1 for
        // correctness and which is affected by this bug, so I've removed all uses
        // of post-increment ++ in which the result value is used.  We can revert
        // this change once the Safari bug
        // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
        // most clients have been updated.
        W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
        offset += 4;
      }
    } else {
      for (var i = 0; i < 16; i++) {
        W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
        offset += 4;
      }
    } // expand to 80 words


    for (var i = 16; i < 80; i++) {
      var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
      W[i] = (t << 1 | t >>> 31) & 0xffffffff;
    }

    var a = this.chain_[0];
    var b = this.chain_[1];
    var c = this.chain_[2];
    var d = this.chain_[3];
    var e = this.chain_[4];
    var f, k; // TODO(user): Try to unroll this loop to speed up the computation.

    for (var i = 0; i < 80; i++) {
      if (i < 40) {
        if (i < 20) {
          f = d ^ b & (c ^ d);
          k = 0x5a827999;
        } else {
          f = b ^ c ^ d;
          k = 0x6ed9eba1;
        }
      } else {
        if (i < 60) {
          f = b & c | d & (b | c);
          k = 0x8f1bbcdc;
        } else {
          f = b ^ c ^ d;
          k = 0xca62c1d6;
        }
      }

      var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) & 0xffffffff;
      b = a;
      a = t;
    }

    this.chain_[0] = this.chain_[0] + a & 0xffffffff;
    this.chain_[1] = this.chain_[1] + b & 0xffffffff;
    this.chain_[2] = this.chain_[2] + c & 0xffffffff;
    this.chain_[3] = this.chain_[3] + d & 0xffffffff;
    this.chain_[4] = this.chain_[4] + e & 0xffffffff;
  };

  Sha1.prototype.update = function (bytes, length) {
    // TODO(johnlenz): tighten the function signature and remove this check
    if (bytes == null) {
      return;
    }

    if (length === undefined) {
      length = bytes.length;
    }

    var lengthMinusBlock = length - this.blockSize;
    var n = 0; // Using local instead of member variables gives ~5% speedup on Firefox 16.

    var buf = this.buf_;
    var inbuf = this.inbuf_; // The outer while loop should execute at most twice.

    while (n < length) {
      // When we have no data in the block to top up, we can directly process the
      // input buffer (assuming it contains sufficient data). This gives ~25%
      // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
      // the data is provided in large chunks (or in multiples of 64 bytes).
      if (inbuf === 0) {
        while (n <= lengthMinusBlock) {
          this.compress_(bytes, n);
          n += this.blockSize;
        }
      }

      if (typeof bytes === 'string') {
        while (n < length) {
          buf[inbuf] = bytes.charCodeAt(n);
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      } else {
        while (n < length) {
          buf[inbuf] = bytes[n];
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      }
    }

    this.inbuf_ = inbuf;
    this.total_ += length;
  };
  /** @override */


  Sha1.prototype.digest = function () {
    var digest = [];
    var totalBits = this.total_ * 8; // Add pad 0x80 0x00*.

    if (this.inbuf_ < 56) {
      this.update(this.pad_, 56 - this.inbuf_);
    } else {
      this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    } // Add # bits.


    for (var i = this.blockSize - 1; i >= 56; i--) {
      this.buf_[i] = totalBits & 255;
      totalBits /= 256; // Don't use bit-shifting here!
    }

    this.compress_(this.buf_);
    var n = 0;

    for (var i = 0; i < 5; i++) {
      for (var j = 24; j >= 0; j -= 8) {
        digest[n] = this.chain_[i] >> j & 255;
        ++n;
      }
    }

    return digest;
  };

  return Sha1;
}();
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */


exports.Sha1 = Sha1;

function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */


var ObserverProxy =
/** @class */
function () {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  function ObserverProxy(executor, onNoObservers) {
    var _this = this;

    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0; // Micro-task scheduling by calling task.then().

    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers; // Call the executor asynchronously so subscribers that are called
    // synchronously after the creation of the subscribe function
    // can still receive the very first value generated in the executor.

    this.task.then(function () {
      executor(_this);
    }).catch(function (e) {
      _this.error(e);
    });
  }

  ObserverProxy.prototype.next = function (value) {
    this.forEachObserver(function (observer) {
      observer.next(value);
    });
  };

  ObserverProxy.prototype.error = function (error) {
    this.forEachObserver(function (observer) {
      observer.error(error);
    });
    this.close(error);
  };

  ObserverProxy.prototype.complete = function () {
    this.forEachObserver(function (observer) {
      observer.complete();
    });
    this.close();
  };
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */


  ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
    var _this = this;

    var observer;

    if (nextOrObserver === undefined && error === undefined && complete === undefined) {
      throw new Error('Missing Observer.');
    } // Assemble an Observer object when passed as callback functions.


    if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error: error,
        complete: complete
      };
    }

    if (observer.next === undefined) {
      observer.next = noop;
    }

    if (observer.error === undefined) {
      observer.error = noop;
    }

    if (observer.complete === undefined) {
      observer.complete = noop;
    }

    var unsub = this.unsubscribeOne.bind(this, this.observers.length); // Attempt to subscribe to a terminated Observable - we
    // just respond to the Observer with the final error or complete
    // event.

    if (this.finalized) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(function () {
        try {
          if (_this.finalError) {
            observer.error(_this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {// nothing
        }

        return;
      });
    }

    this.observers.push(observer);
    return unsub;
  }; // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.


  ObserverProxy.prototype.unsubscribeOne = function (i) {
    if (this.observers === undefined || this.observers[i] === undefined) {
      return;
    }

    delete this.observers[i];
    this.observerCount -= 1;

    if (this.observerCount === 0 && this.onNoObservers !== undefined) {
      this.onNoObservers(this);
    }
  };

  ObserverProxy.prototype.forEachObserver = function (fn) {
    if (this.finalized) {
      // Already closed by previous event....just eat the additional values.
      return;
    } // Since sendOne calls asynchronously - there is no chance that
    // this.observers will become undefined.


    for (var i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn);
    }
  }; // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.


  ObserverProxy.prototype.sendOne = function (i, fn) {
    var _this = this; // Execute the callback asynchronously
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this.task.then(function () {
      if (_this.observers !== undefined && _this.observers[i] !== undefined) {
        try {
          fn(_this.observers[i]);
        } catch (e) {
          // Ignore exceptions raised in Observers or missing methods of an
          // Observer.
          // Log error to console. b/31404806
          if (typeof console !== 'undefined' && console.error) {
            console.error(e);
          }
        }
      }
    });
  };

  ObserverProxy.prototype.close = function (err) {
    var _this = this;

    if (this.finalized) {
      return;
    }

    this.finalized = true;

    if (err !== undefined) {
      this.finalError = err;
    } // Proxy is no longer needed - garbage collect references
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this.task.then(function () {
      _this.observers = undefined;
      _this.onNoObservers = undefined;
    });
  };

  return ObserverProxy;
}();
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types


function async(fn, onError) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    Promise.resolve(true).then(function () {
      fn.apply(void 0, args);
    }).catch(function (error) {
      if (onError) {
        onError(error);
      }
    });
  };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */


function implementsAnyMethods(obj, methods) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
    var method = methods_1[_i];

    if (method in obj && typeof obj[method] === 'function') {
      return true;
    }
  }

  return false;
}

function noop() {// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */


var validateArgCount = function (fnName, minCount, maxCount, argCount) {
  var argError;

  if (argCount < minCount) {
    argError = 'at least ' + minCount;
  } else if (argCount > maxCount) {
    argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
  }

  if (argError) {
    var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
    throw new Error(error);
  }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */


exports.validateArgCount = validateArgCount;

function errorPrefix(fnName, argumentNumber, optional) {
  var argName = '';

  switch (argumentNumber) {
    case 1:
      argName = optional ? 'first' : 'First';
      break;

    case 2:
      argName = optional ? 'second' : 'Second';
      break;

    case 3:
      argName = optional ? 'third' : 'Third';
      break;

    case 4:
      argName = optional ? 'fourth' : 'Fourth';
      break;

    default:
      throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
  }

  var error = fnName + ' failed: ';
  error += argName + ' argument ';
  return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */


function validateNamespace(fnName, argumentNumber, namespace, optional) {
  if (optional && !namespace) {
    return;
  }

  if (typeof namespace !== 'string') {
    //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid firebase namespace.');
  }
}

function validateCallback(fnName, argumentNumber, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
  if (optional && !callback) {
    return;
  }

  if (typeof callback !== 'function') {
    throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid function.');
  }
}

function validateContextObject(fnName, argumentNumber, context, optional) {
  if (optional && !context) {
    return;
  }

  if (typeof context !== 'object' || context === null) {
    throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid context object.');
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3

/**
 * @param {string} str
 * @return {Array}
 */


var stringToByteArray$1 = function (str) {
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i); // Is this the lead surrogate in a surrogate pair?

    if (c >= 0xd800 && c <= 0xdbff) {
      var high = c - 0xd800; // the high 10 bits.

      i++;
      assert(i < str.length, 'Surrogate pair missing trail surrogate.');
      var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.

      c = 0x10000 + (high << 10) + low;
    }

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */


exports.stringToByteArray = stringToByteArray$1;

var stringLength = function (str) {
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      p++;
    } else if (c < 2048) {
      p += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
      p += 4;
      i++; // skip trail surrogate.
    } else {
      p += 3;
    }
  }

  return p;
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The amount of milliseconds to exponentially increase.
 */


exports.stringLength = stringLength;
var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */

var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */

var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.

/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */

exports.MAX_VALUE_MILLIS = MAX_VALUE_MILLIS;
var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */

exports.RANDOM_FACTOR = RANDOM_FACTOR;

function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
  if (intervalMillis === void 0) {
    intervalMillis = DEFAULT_INTERVAL_MILLIS;
  }

  if (backoffFactor === void 0) {
    backoffFactor = DEFAULT_BACKOFF_FACTOR;
  } // Calculates an exponentially increasing value.
  // Deviation: calculates value from count and a constant interval, so we only need to save value
  // and count to restore state.


  var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount); // A random "fuzz" to avoid waves of retries.
  // Deviation: randomFactor is required.

  var randomWait = Math.round( // A fraction of the backoff value to add/subtract.
  // Deviation: changes multiplication order to improve readability.
  RANDOM_FACTOR * currBaseValue * ( // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
  // if we add or subtract.
  Math.random() - 0.5) * 2); // Limits backoff to max to avoid effectively permanent backoff.

  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provide English ordinal letters after a number
 */


function ordinal(i) {
  if (!Number.isFinite(i)) {
    return "" + i;
  }

  return i + indicator(i);
}

function indicator(i) {
  i = Math.abs(i);
  var cent = i % 100;

  if (cent >= 10 && cent <= 20) {
    return 'th';
  }

  var dec = i % 10;

  if (dec === 1) {
    return 'st';
  }

  if (dec === 2) {
    return 'nd';
  }

  if (dec === 3) {
    return 'rd';
  }

  return 'th';
}
},{"tslib":"../node_modules/tslib/tslib.es6.js"}],"../node_modules/@firebase/component/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.ComponentContainer = exports.Component = void 0;

var _tslib = require("tslib");

var _util = require("@firebase/util");

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component =
/** @class */
function () {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  function Component(name, instanceFactory, type) {
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    /**
     * Properties to be added to the service namespace
     */

    this.serviceProps = {};
    this.instantiationMode = "LAZY"
    /* LAZY */
    ;
  }

  Component.prototype.setInstantiationMode = function (mode) {
    this.instantiationMode = mode;
    return this;
  };

  Component.prototype.setMultipleInstances = function (multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  };

  Component.prototype.setServiceProps = function (props) {
    this.serviceProps = props;
    return this;
  };

  return Component;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.Component = Component;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */

var Provider =
/** @class */
function () {
  function Provider(name, container) {
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */


  Provider.prototype.get = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    } // if multipleInstances is not supported, use the default name


    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      var deferred = new _util.Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred); // If the service instance is available, resolve the promise with it immediately

      try {
        var instance = this.getOrInitializeService(normalizedIdentifier);

        if (instance) {
          deferred.resolve(instance);
        }
      } catch (e) {// when the instance factory throws an exception during get(), it should not cause
        // a fatal error. We just return the unresolved promise in this case.
      }
    }

    return this.instancesDeferred.get(normalizedIdentifier).promise;
  };

  Provider.prototype.getImmediate = function (options) {
    var _a = (0, _tslib.__assign)({
      identifier: DEFAULT_ENTRY_NAME,
      optional: false
    }, options),
        identifier = _a.identifier,
        optional = _a.optional; // if multipleInstances is not supported, use the default name


    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

    try {
      var instance = this.getOrInitializeService(normalizedIdentifier);

      if (!instance) {
        if (optional) {
          return null;
        }

        throw Error("Service " + this.name + " is not available");
      }

      return instance;
    } catch (e) {
      if (optional) {
        return null;
      } else {
        throw e;
      }
    }
  };

  Provider.prototype.getComponent = function () {
    return this.component;
  };

  Provider.prototype.setComponent = function (component) {
    var e_1, _a;

    if (component.name !== this.name) {
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }

    if (this.component) {
      throw Error("Component for " + this.name + " has already been provided");
    }

    this.component = component; // if the service is eager, initialize the default instance

    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService(DEFAULT_ENTRY_NAME);
      } catch (e) {// when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
      }
    }

    try {
      // Create service instances for the pending promises and resolve them
      // NOTE: if this.multipleInstances is false, only the default instance will be created
      // and all promises with resolve with it regardless of the identifier.
      for (var _b = (0, _tslib.__values)(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = (0, _tslib.__read)(_c.value, 2),
            instanceIdentifier = _d[0],
            instanceDeferred = _d[1];

        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

        try {
          // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
          var instance = this.getOrInitializeService(normalizedIdentifier);
          instanceDeferred.resolve(instance);
        } catch (e) {// when the instance factory throws an exception, it should not cause
          // a fatal error. We just leave the promise unresolved.
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Provider.prototype.clearInstance = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    this.instancesDeferred.delete(identifier);
    this.instances.delete(identifier);
  }; // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?


  Provider.prototype.delete = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var services;
      return (0, _tslib.__generator)(this, function (_a) {
        switch (_a.label) {
          case 0:
            services = Array.from(this.instances.values());
            return [4
            /*yield*/
            , Promise.all((0, _tslib.__spread)(services.filter(function (service) {
              return 'INTERNAL' in service;
            }) // legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map(function (service) {
              return service.INTERNAL.delete();
            }), services.filter(function (service) {
              return '_delete' in service;
            }) // modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map(function (service) {
              return service._delete();
            })))];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Provider.prototype.isComponentSet = function () {
    return this.component != null;
  };

  Provider.prototype.isInitialized = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    return this.instances.has(identifier);
  };

  Provider.prototype.getOrInitializeService = function (identifier) {
    var instance = this.instances.get(identifier);

    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
      this.instances.set(identifier, instance);
    }

    return instance || null;
  };

  Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else {
      return identifier; // assume multiple instances are supported before the component is provided.
    }
  };

  return Provider;
}(); // undefined should be passed to the service factory for the default instance


exports.Provider = Provider;

function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}

function isComponentEager(component) {
  return component.instantiationMode === "EAGER"
  /* EAGER */
  ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */


var ComponentContainer =
/** @class */
function () {
  function ComponentContainer(name) {
    this.name = name;
    this.providers = new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */


  ComponentContainer.prototype.addComponent = function (component) {
    var provider = this.getProvider(component.name);

    if (provider.isComponentSet()) {
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }

    provider.setComponent(component);
  };

  ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
    var provider = this.getProvider(component.name);

    if (provider.isComponentSet()) {
      // delete the existing provider from the container, so we can register the new component
      this.providers.delete(component.name);
    }

    this.addComponent(component);
  };
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */


  ComponentContainer.prototype.getProvider = function (name) {
    if (this.providers.has(name)) {
      return this.providers.get(name);
    } // create a Provider for a service that hasn't registered with Firebase


    var provider = new Provider(name, this);
    this.providers.set(name, provider);
    return provider;
  };

  ComponentContainer.prototype.getProviders = function () {
    return Array.from(this.providers.values());
  };

  return ComponentContainer;
}();

exports.ComponentContainer = ComponentContainer;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@firebase/util":"../node_modules/@firebase/util/dist/index.esm.js"}],"../node_modules/@firebase/logger/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogLevel = setLogLevel;
exports.setUserLogHandler = setUserLogHandler;
exports.Logger = exports.LogLevel = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var _a;
/**
 * A container for all of the Logger instances
 */


var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */

var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (exports.LogLevel = LogLevel = {}));

var levelStringToEnum = {
  'debug': LogLevel.DEBUG,
  'verbose': LogLevel.VERBOSE,
  'info': LogLevel.INFO,
  'warn': LogLevel.WARN,
  'error': LogLevel.ERROR,
  'silent': LogLevel.SILENT
};
/**
 * The default log level
 */

var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */

var ConsoleMethod = (_a = {}, _a[LogLevel.DEBUG] = 'log', _a[LogLevel.VERBOSE] = 'log', _a[LogLevel.INFO] = 'info', _a[LogLevel.WARN] = 'warn', _a[LogLevel.ERROR] = 'error', _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */

var defaultLogHandler = function (instance, logType) {
  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }

  if (logType < instance.logLevel) {
    return;
  }

  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];

  if (method) {
    console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};

var Logger =
/** @class */
function () {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  function Logger(name) {
    this.name = name;
    /**
     * The log level of the given Logger instance.
     */

    this._logLevel = defaultLogLevel;
    /**
     * The main (internal) log handler for the Logger instance.
     * Can be set to a new function in internal package code but not by user.
     */

    this._logHandler = defaultLogHandler;
    /**
     * The optional, additional, user-defined log handler for the Logger instance.
     */

    this._userLogHandler = null;
    /**
     * Capture the current instance for later use
     */

    instances.push(this);
  }

  Object.defineProperty(Logger.prototype, "logLevel", {
    get: function () {
      return this._logLevel;
    },
    set: function (val) {
      if (!(val in LogLevel)) {
        throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
      }

      this._logLevel = val;
    },
    enumerable: false,
    configurable: true
  }); // Workaround for setter/getter having to be the same type.

  Logger.prototype.setLogLevel = function (val) {
    this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
  };

  Object.defineProperty(Logger.prototype, "logHandler", {
    get: function () {
      return this._logHandler;
    },
    set: function (val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }

      this._logHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "userLogHandler", {
    get: function () {
      return this._userLogHandler;
    },
    set: function (val) {
      this._userLogHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * The functions below are all based on the `console` interface
   */

  Logger.prototype.debug = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
  };

  Logger.prototype.log = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
  };

  Logger.prototype.info = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
  };

  Logger.prototype.warn = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
  };

  Logger.prototype.error = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
  };

  return Logger;
}();

exports.Logger = Logger;

function setLogLevel(level) {
  instances.forEach(function (inst) {
    inst.setLogLevel(level);
  });
}

function setUserLogHandler(logCallback, options) {
  var _loop_1 = function (instance) {
    var customLogLevel = null;

    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }

    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = function (instance, level) {
        var args = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }

        var message = args.map(function (arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === 'string') {
            return arg;
          } else if (typeof arg === 'number' || typeof arg === 'boolean') {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function (arg) {
          return arg;
        }).join(' ');

        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message: message,
            args: args,
            type: instance.name
          });
        }
      };
    }
  };

  for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
    var instance = instances_1[_i];

    _loop_1(instance);
  }
}
},{}],"../node_modules/@firebase/app/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firebase = exports.default = void 0;

var _tslib = require("tslib");

var _util = require("@firebase/util");

var _component = require("@firebase/component");

var _logger = require("@firebase/logger");

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;

var ERRORS = (_a = {}, _a["no-app"
/* NO_APP */
] = "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()', _a["bad-app-name"
/* BAD_APP_NAME */
] = "Illegal App name: '{$appName}", _a["duplicate-app"
/* DUPLICATE_APP */
] = "Firebase App named '{$appName}' already exists", _a["app-deleted"
/* APP_DELETED */
] = "Firebase App named '{$appName}' already deleted", _a["invalid-app-argument"
/* INVALID_APP_ARGUMENT */
] = 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.', _a["invalid-log-argument"
/* INVALID_LOG_ARGUMENT */
] = 'First argument to `onLog` must be null or a function.', _a);
var ERROR_FACTORY = new _util.ErrorFactory('app', 'Firebase', ERRORS);
var name = "@firebase/app";
var version = "0.6.15";
var name$1 = "@firebase/analytics";
var name$2 = "@firebase/auth";
var name$3 = "@firebase/database";
var name$4 = "@firebase/functions";
var name$5 = "@firebase/installations";
var name$6 = "@firebase/messaging";
var name$7 = "@firebase/performance";
var name$8 = "@firebase/remote-config";
var name$9 = "@firebase/storage";
var name$a = "@firebase/firestore";
var name$b = "firebase-wrapper";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _a$1;

var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name] = 'fire-core', _a$1[name$1] = 'fire-analytics', _a$1[name$2] = 'fire-auth', _a$1[name$3] = 'fire-rtdb', _a$1[name$4] = 'fire-fn', _a$1[name$5] = 'fire-iid', _a$1[name$6] = 'fire-fcm', _a$1[name$7] = 'fire-perf', _a$1[name$8] = 'fire-rc', _a$1[name$9] = 'fire-gcs', _a$1[name$a] = 'fire-fst', _a$1['fire-js'] = 'fire-js', _a$1[name$b] = 'fire-js-all', _a$1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var logger = new _logger.Logger('@firebase/app');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */

var FirebaseAppImpl =
/** @class */
function () {
  function FirebaseAppImpl(options, config, firebase_) {
    var _this = this;

    this.firebase_ = firebase_;
    this.isDeleted_ = false;
    this.name_ = config.name;
    this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
    this.options_ = (0, _util.deepCopy)(options);
    this.container = new _component.ComponentContainer(config.name); // add itself to container

    this._addComponent(new _component.Component('app', function () {
      return _this;
    }, "PUBLIC"
    /* PUBLIC */
    )); // populate ComponentContainer with existing components


    this.firebase_.INTERNAL.components.forEach(function (component) {
      return _this._addComponent(component);
    });
  }

  Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
    get: function () {
      this.checkDestroyed_();
      return this.automaticDataCollectionEnabled_;
    },
    set: function (val) {
      this.checkDestroyed_();
      this.automaticDataCollectionEnabled_ = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "name", {
    get: function () {
      this.checkDestroyed_();
      return this.name_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "options", {
    get: function () {
      this.checkDestroyed_();
      return this.options_;
    },
    enumerable: false,
    configurable: true
  });

  FirebaseAppImpl.prototype.delete = function () {
    var _this = this;

    return new Promise(function (resolve) {
      _this.checkDestroyed_();

      resolve();
    }).then(function () {
      _this.firebase_.INTERNAL.removeApp(_this.name_);

      return Promise.all(_this.container.getProviders().map(function (provider) {
        return provider.delete();
      }));
    }).then(function () {
      _this.isDeleted_ = true;
    });
  };
  /**
   * Return a service instance associated with this app (creating it
   * on demand), identified by the passed instanceIdentifier.
   *
   * NOTE: Currently storage and functions are the only ones that are leveraging this
   * functionality. They invoke it by calling:
   *
   * ```javascript
   * firebase.app().storage('STORAGE BUCKET ID')
   * ```
   *
   * The service name is passed to this already
   * @internal
   */


  FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }

    this.checkDestroyed_(); // getImmediate will always succeed because _getService is only called for registered components.

    return this.container.getProvider(name).getImmediate({
      identifier: instanceIdentifier
    });
  };
  /**
   * Remove a service instance from the cache, so we will create a new instance for this service
   * when people try to get this service again.
   *
   * NOTE: currently only firestore is using this functionality to support firestore shutdown.
   *
   * @param name The service name
   * @param instanceIdentifier instance identifier in case multiple instances are allowed
   * @internal
   */


  FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any


    this.container.getProvider(name).clearInstance(instanceIdentifier);
  };
  /**
   * @param component the component being added to this app's container
   */


  FirebaseAppImpl.prototype._addComponent = function (component) {
    try {
      this.container.addComponent(component);
    } catch (e) {
      logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
    }
  };

  FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
    this.container.addOrOverwriteComponent(component);
  };

  FirebaseAppImpl.prototype.toJSON = function () {
    return {
      name: this.name,
      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
      options: this.options
    };
  };
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */


  FirebaseAppImpl.prototype.checkDestroyed_ = function () {
    if (this.isDeleted_) {
      throw ERROR_FACTORY.create("app-deleted"
      /* APP_DELETED */
      , {
        appName: this.name_
      });
    }
  };

  return FirebaseAppImpl;
}(); // Prevent dead-code elimination of these methods w/o invalid property
// copying.


FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log('dc');
var version$1 = "8.2.9";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */

function createFirebaseNamespaceCore(firebaseAppImpl) {
  var apps = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var components = new Map(); // A namespace is a plain JavaScript Object.

  var namespace = {
    // Hack to prevent Babel from modifying the object returned
    // as the firebase namespace.
    // @ts-ignore
    __esModule: true,
    initializeApp: initializeApp,
    // @ts-ignore
    app: app,
    registerVersion: registerVersion,
    setLogLevel: _logger.setLogLevel,
    onLog: onLog,
    // @ts-ignore
    apps: null,
    SDK_VERSION: version$1,
    INTERNAL: {
      registerComponent: registerComponent,
      removeApp: removeApp,
      components: components,
      useAsService: useAsService
    }
  }; // Inject a circular default export to allow Babel users who were previously
  // using:
  //
  //   import firebase from 'firebase';
  //   which becomes: var firebase = require('firebase').default;
  //
  // instead of
  //
  //   import * as firebase from 'firebase';
  //   which becomes: var firebase = require('firebase');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  namespace['default'] = namespace; // firebase.apps is a read-only getter.

  Object.defineProperty(namespace, 'apps', {
    get: getApps
  });
  /**
   * Called by App.delete() - but before any services associated with the App
   * are deleted.
   */

  function removeApp(name) {
    delete apps[name];
  }
  /**
   * Get the App object for a given name (or DEFAULT).
   */


  function app(name) {
    name = name || DEFAULT_ENTRY_NAME;

    if (!(0, _util.contains)(apps, name)) {
      throw ERROR_FACTORY.create("no-app"
      /* NO_APP */
      , {
        appName: name
      });
    }

    return apps[name];
  } // @ts-ignore


  app['App'] = firebaseAppImpl;

  function initializeApp(options, rawConfig) {
    if (rawConfig === void 0) {
      rawConfig = {};
    }

    if (typeof rawConfig !== 'object' || rawConfig === null) {
      var name_1 = rawConfig;
      rawConfig = {
        name: name_1
      };
    }

    var config = rawConfig;

    if (config.name === undefined) {
      config.name = DEFAULT_ENTRY_NAME;
    }

    var name = config.name;

    if (typeof name !== 'string' || !name) {
      throw ERROR_FACTORY.create("bad-app-name"
      /* BAD_APP_NAME */
      , {
        appName: String(name)
      });
    }

    if ((0, _util.contains)(apps, name)) {
      throw ERROR_FACTORY.create("duplicate-app"
      /* DUPLICATE_APP */
      , {
        appName: name
      });
    }

    var app = new firebaseAppImpl(options, config, namespace);
    apps[name] = app;
    return app;
  }
  /*
   * Return an array of all the non-deleted FirebaseApps.
   */


  function getApps() {
    // Make a copy so caller cannot mutate the apps list.
    return Object.keys(apps).map(function (name) {
      return apps[name];
    });
  }

  function registerComponent(component) {
    var componentName = component.name;

    if (components.has(componentName)) {
      logger.debug("There were multiple attempts to register component " + componentName + ".");
      return component.type === "PUBLIC"
      /* PUBLIC */
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      namespace[componentName] : null;
    }

    components.set(componentName, component); // create service namespace for public components

    if (component.type === "PUBLIC"
    /* PUBLIC */
    ) {
        // The Service namespace is an accessor function ...
        var serviceNamespace = function (appArg) {
          if (appArg === void 0) {
            appArg = app();
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          if (typeof appArg[componentName] !== 'function') {
            // Invalid argument.
            // This happens in the following case: firebase.storage('gs:/')
            throw ERROR_FACTORY.create("invalid-app-argument"
            /* INVALID_APP_ARGUMENT */
            , {
              appName: componentName
            });
          } // Forward service instance lookup to the FirebaseApp.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any


          return appArg[componentName]();
        }; // ... and a container for service-level properties.


        if (component.serviceProps !== undefined) {
          (0, _util.deepExtend)(serviceNamespace, component.serviceProps);
        } // eslint-disable-next-line @typescript-eslint/no-explicit-any


        namespace[componentName] = serviceNamespace; // Patch the FirebaseAppImpl prototype
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        firebaseAppImpl.prototype[componentName] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
        // option added to the no-explicit-any rule when ESlint releases it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var serviceFxn = this._getService.bind(this, componentName);

          return serviceFxn.apply(this, component.multipleInstances ? args : []);
        };
      } // add the component to existing app instances


    for (var _i = 0, _a = Object.keys(apps); _i < _a.length; _i++) {
      var appName = _a[_i];

      apps[appName]._addComponent(component);
    }

    return component.type === "PUBLIC"
    /* PUBLIC */
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace[componentName] : null;
  }

  function registerVersion(libraryKeyOrName, version, variant) {
    var _a; // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.


    var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;

    if (variant) {
      library += "-" + variant;
    }

    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version.match(/\s|\//);

    if (libraryMismatch || versionMismatch) {
      var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];

      if (libraryMismatch) {
        warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
      }

      if (libraryMismatch && versionMismatch) {
        warning.push('and');
      }

      if (versionMismatch) {
        warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
      }

      logger.warn(warning.join(' '));
      return;
    }

    registerComponent(new _component.Component(library + "-version", function () {
      return {
        library: library,
        version: version
      };
    }, "VERSION"
    /* VERSION */
    ));
  }

  function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
      throw ERROR_FACTORY.create("invalid-log-argument"
      /* INVALID_LOG_ARGUMENT */
      );
    }

    (0, _logger.setUserLogHandler)(logCallback, options);
  } // Map the requested service to a registered service name
  // (used to map auth to serverAuth service when needed).


  function useAsService(app, name) {
    if (name === 'serverAuth') {
      return null;
    }

    var useService = name;
    return useService;
  }

  return namespace;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */


function createFirebaseNamespace() {
  var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = (0, _tslib.__assign)((0, _tslib.__assign)({}, namespace.INTERNAL), {
    createFirebaseNamespace: createFirebaseNamespace,
    extendNamespace: extendNamespace,
    createSubscribe: _util.createSubscribe,
    ErrorFactory: _util.ErrorFactory,
    deepExtend: _util.deepExtend
  });
  /**
   * Patch the top-level firebase namespace with additional properties.
   *
   * firebase.INTERNAL.extendNamespace()
   */

  function extendNamespace(props) {
    (0, _util.deepExtend)(namespace, props);
  }

  return namespace;
}

var firebase = createFirebaseNamespace();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PlatformLoggerService =
/** @class */
function () {
  function PlatformLoggerService(container) {
    this.container = container;
  } // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.


  PlatformLoggerService.prototype.getPlatformInfoString = function () {
    var providers = this.container.getProviders(); // Loop through providers and get library/version pairs from any that are
    // version components.

    return providers.map(function (provider) {
      if (isVersionServiceProvider(provider)) {
        var service = provider.getImmediate();
        return service.library + "/" + service.version;
      } else {
        return null;
      }
    }).filter(function (logString) {
      return logString;
    }).join(' ');
  };

  return PlatformLoggerService;
}();
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */


function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION"
  /* VERSION */
  ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function registerCoreComponents(firebase, variant) {
  firebase.INTERNAL.registerComponent(new _component.Component('platform-logger', function (container) {
    return new PlatformLoggerService(container);
  }, "PRIVATE"
  /* PRIVATE */
  )); // Register `app` package.

  firebase.registerVersion(name, version, variant); // Register platform SDK identifier (no version).

  firebase.registerVersion('fire-js', '');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any


if ((0, _util.isBrowser)() && self.firebase !== undefined) {
  logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "); // eslint-disable-next-line

  var sdkVersion = self.firebase.SDK_VERSION;

  if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
    logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
  }
}

var initializeApp = firebase.initializeApp; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any

firebase.initializeApp = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  } // Environment check before initializing app
  // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
  // in @firebase/logger


  if ((0, _util.isNode)()) {
    logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
  }

  return initializeApp.apply(undefined, args);
};

var firebase$1 = firebase;
exports.firebase = firebase$1;
registerCoreComponents(firebase$1);
var _default = firebase$1;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@firebase/util":"../node_modules/@firebase/util/dist/index.esm.js","@firebase/component":"../node_modules/@firebase/component/dist/index.esm.js","@firebase/logger":"../node_modules/@firebase/logger/dist/index.esm.js"}],"../node_modules/@firebase/storage/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerStorage = registerStorage;

var _app = _interopRequireDefault(require("@firebase/app"));

var _tslib = require("tslib");

var _util = require("@firebase/util");

var _component = require("@firebase/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Constants used in the Firebase Storage library.
 */

/**
 * Domain name for firebase storage.
 */
var DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */

var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */

var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */

var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;
/**
 * An error returned by the Firebase Storage SDK.
 * @public
 */

var FirebaseStorageError =
/** @class */
function (_super) {
  (0, _tslib.__extends)(FirebaseStorageError, _super);
  /**
   * @param code - A StorageErrorCode string to be prefixed with 'storage/' and
   *  added to the end of the message.
   * @param message  - Error message.
   */

  function FirebaseStorageError(code, message) {
    var _this = _super.call(this, prependCode(code), "Firebase Storage: " + message + " (" + prependCode(code) + ")") || this;
    /**
     * Stores custom error data unque to FirebaseStorageError.
     */


    _this.customData = {
      serverResponse: null
    }; // Without this, `instanceof FirebaseStorageError`, in tests for example,
    // returns false.

    Object.setPrototypeOf(_this, FirebaseStorageError.prototype);
    return _this;
  }
  /**
   * Compares a StorageErrorCode against this error's code, filtering out the prefix.
   */


  FirebaseStorageError.prototype._codeEquals = function (code) {
    return prependCode(code) === this.code;
  };

  Object.defineProperty(FirebaseStorageError.prototype, "message", {
    /**
     * Error message including serverResponse if available.
     */
    get: function () {
      if (this.customData.serverResponse) {
        return this.message + "\n" + this.customData.serverResponse;
      } else {
        return this.message;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
    /**
     * Optional response message that was added by the server.
     */
    get: function () {
      return this.customData.serverResponse;
    },
    set: function (serverResponse) {
      this.customData.serverResponse = serverResponse;
    },
    enumerable: false,
    configurable: true
  });
  return FirebaseStorageError;
}(_util.FirebaseError);

function prependCode(code) {
  return 'storage/' + code;
}

function unknown() {
  var message = 'An unknown error occurred, please check the error payload for ' + 'server response.';
  return new FirebaseStorageError("unknown"
  /* UNKNOWN */
  , message);
}

function objectNotFound(path) {
  return new FirebaseStorageError("object-not-found"
  /* OBJECT_NOT_FOUND */
  , "Object '" + path + "' does not exist.");
}

function quotaExceeded(bucket) {
  return new FirebaseStorageError("quota-exceeded"
  /* QUOTA_EXCEEDED */
  , "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
}

function unauthenticated() {
  var message = 'User is not authenticated, please authenticate using Firebase ' + 'Authentication and try again.';
  return new FirebaseStorageError("unauthenticated"
  /* UNAUTHENTICATED */
  , message);
}

function unauthorized(path) {
  return new FirebaseStorageError("unauthorized"
  /* UNAUTHORIZED */
  , "User does not have permission to access '" + path + "'.");
}

function retryLimitExceeded() {
  return new FirebaseStorageError("retry-limit-exceeded"
  /* RETRY_LIMIT_EXCEEDED */
  , 'Max retry time for operation exceeded, please try again.');
}

function canceled() {
  return new FirebaseStorageError("canceled"
  /* CANCELED */
  , 'User canceled the upload/download.');
}

function invalidUrl(url) {
  return new FirebaseStorageError("invalid-url"
  /* INVALID_URL */
  , "Invalid URL '" + url + "'.");
}

function invalidDefaultBucket(bucket) {
  return new FirebaseStorageError("invalid-default-bucket"
  /* INVALID_DEFAULT_BUCKET */
  , "Invalid default bucket '" + bucket + "'.");
}

function noDefaultBucket() {
  return new FirebaseStorageError("no-default-bucket"
  /* NO_DEFAULT_BUCKET */
  , 'No default bucket ' + "found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
}

function cannotSliceBlob() {
  return new FirebaseStorageError("cannot-slice-blob"
  /* CANNOT_SLICE_BLOB */
  , 'Cannot slice blob for upload. Please retry the upload.');
}

function serverFileWrongSize() {
  return new FirebaseStorageError("server-file-wrong-size"
  /* SERVER_FILE_WRONG_SIZE */
  , 'Server recorded incorrect upload file size, please retry the upload.');
}

function noDownloadURL() {
  return new FirebaseStorageError("no-download-url"
  /* NO_DOWNLOAD_URL */
  , 'The given file does not have any download URLs.');
}

function invalidArgument(message) {
  return new FirebaseStorageError("invalid-argument"
  /* INVALID_ARGUMENT */
  , message);
}

function appDeleted() {
  return new FirebaseStorageError("app-deleted"
  /* APP_DELETED */
  , 'The Firebase app was deleted.');
}
/**
 * @param name - The name of the operation that was invalid.
 */


function invalidRootOperation(name) {
  return new FirebaseStorageError("invalid-root-operation"
  /* INVALID_ROOT_OPERATION */
  , "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
}
/**
 * @param format - The format that was not valid.
 * @param message - A message describing the format violation.
 */


function invalidFormat(format, message) {
  return new FirebaseStorageError("invalid-format"
  /* INVALID_FORMAT */
  , "String does not match format '" + format + "': " + message);
}
/**
 * @param message - A message describing the internal error.
 */


function internalError(message) {
  throw new FirebaseStorageError("internal-error"
  /* INTERNAL_ERROR */
  , 'Internal error: ' + message);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An enumeration of the possible string formats for upload.
 * @public
 */


var StringFormat = {
  /**
   * Indicates the string should be interpreted "raw", that is, as normal text.
   * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
   * sequence.
   * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
   * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
   */
  RAW: 'raw',

  /**
   * Indicates the string should be interpreted as base64-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64: 'base64',

  /**
   * Indicates the string should be interpreted as base64url-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64URL: 'base64url',

  /**
   * Indicates the string is a data URL, such as one obtained from
   * canvas.toDataURL().
   * Example: the string 'data:application/octet-stream;base64,aaaa'
   * becomes the byte sequence
   * 69 a6 9a
   * (the content-type "application/octet-stream" is also applied, but can
   * be overridden in the metadata object).
   */
  DATA_URL: 'data_url'
};

var StringData =
/** @class */
function () {
  function StringData(data, contentType) {
    this.data = data;
    this.contentType = contentType || null;
  }

  return StringData;
}();

function dataFromString(format, stringData) {
  switch (format) {
    case StringFormat.RAW:
      return new StringData(utf8Bytes_(stringData));

    case StringFormat.BASE64:
    case StringFormat.BASE64URL:
      return new StringData(base64Bytes_(format, stringData));

    case StringFormat.DATA_URL:
      return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
    // do nothing
  } // assert(false);


  throw unknown();
}

function utf8Bytes_(value) {
  var b = [];

  for (var i = 0; i < value.length; i++) {
    var c = value.charCodeAt(i);

    if (c <= 127) {
      b.push(c);
    } else {
      if (c <= 2047) {
        b.push(192 | c >> 6, 128 | c & 63);
      } else {
        if ((c & 64512) === 55296) {
          // The start of a surrogate pair.
          var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;

          if (!valid) {
            // The second surrogate wasn't there.
            b.push(239, 191, 189);
          } else {
            var hi = c;
            var lo = value.charCodeAt(++i);
            c = 65536 | (hi & 1023) << 10 | lo & 1023;
            b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
          }
        } else {
          if ((c & 64512) === 56320) {
            // Invalid low surrogate.
            b.push(239, 191, 189);
          } else {
            b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
          }
        }
      }
    }
  }

  return new Uint8Array(b);
}

function percentEncodedBytes_(value) {
  var decoded;

  try {
    decoded = decodeURIComponent(value);
  } catch (e) {
    throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
  }

  return utf8Bytes_(decoded);
}

function base64Bytes_(format, value) {
  switch (format) {
    case StringFormat.BASE64:
      {
        var hasMinus = value.indexOf('-') !== -1;
        var hasUnder = value.indexOf('_') !== -1;

        if (hasMinus || hasUnder) {
          var invalidChar = hasMinus ? '-' : '_';
          throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
        }

        break;
      }

    case StringFormat.BASE64URL:
      {
        var hasPlus = value.indexOf('+') !== -1;
        var hasSlash = value.indexOf('/') !== -1;

        if (hasPlus || hasSlash) {
          var invalidChar = hasPlus ? '+' : '/';
          throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
        }

        value = value.replace(/-/g, '+').replace(/_/g, '/');
        break;
      }
    // do nothing
  }

  var bytes;

  try {
    bytes = atob(value);
  } catch (e) {
    throw invalidFormat(format, 'Invalid character found');
  }

  var array = new Uint8Array(bytes.length);

  for (var i = 0; i < bytes.length; i++) {
    array[i] = bytes.charCodeAt(i);
  }

  return array;
}

var DataURLParts =
/** @class */
function () {
  function DataURLParts(dataURL) {
    this.base64 = false;
    this.contentType = null;
    var matches = dataURL.match(/^data:([^,]+)?,/);

    if (matches === null) {
      throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
    }

    var middle = matches[1] || null;

    if (middle != null) {
      this.base64 = endsWith(middle, ';base64');
      this.contentType = this.base64 ? middle.substring(0, middle.length - ';base64'.length) : middle;
    }

    this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
  }

  return DataURLParts;
}();

function dataURLBytes_(dataUrl) {
  var parts = new DataURLParts(dataUrl);

  if (parts.base64) {
    return base64Bytes_(StringFormat.BASE64, parts.rest);
  } else {
    return percentEncodedBytes_(parts.rest);
  }
}

function dataURLContentType_(dataUrl) {
  var parts = new DataURLParts(dataUrl);
  return parts.contentType;
}

function endsWith(s, end) {
  var longEnough = s.length >= end.length;

  if (!longEnough) {
    return false;
  }

  return s.substring(s.length - end.length) === end;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An event that is triggered on a task.
 */


var TaskEvent = {
  /**
   * For this event,
   * <ul>
   *   <li>The `next` function is triggered on progress updates and when the
   *       task is paused/resumed with an `UploadTaskSnapshot` as the first
   *       argument.</li>
   *   <li>The `error` function is triggered if the upload is canceled or fails
   *       for another reason.</li>
   *   <li>The `complete` function is triggered if the upload completes
   *       successfully.</li>
   * </ul>
   */
  STATE_CHANGED: 'state_changed'
};
/**
 * Represents the current state of a running upload.
 */

var TaskState = {
  /** The task is currently transferring data. */
  RUNNING: 'running',

  /** The task was paused by the user. */
  PAUSED: 'paused',

  /** The task completed successfully. */
  SUCCESS: 'success',

  /** The task was canceled. */
  CANCELED: 'canceled',

  /** The task failed with an error. */
  ERROR: 'error'
};

function taskStateFromInternalTaskState(state) {
  switch (state) {
    case "running"
    /* RUNNING */
    :
    case "pausing"
    /* PAUSING */
    :
    case "canceling"
    /* CANCELING */
    :
      return TaskState.RUNNING;

    case "paused"
    /* PAUSED */
    :
      return TaskState.PAUSED;

    case "success"
    /* SUCCESS */
    :
      return TaskState.SUCCESS;

    case "canceled"
    /* CANCELED */
    :
      return TaskState.CANCELED;

    case "error"
    /* ERROR */
    :
      return TaskState.ERROR;

    default:
      // TODO(andysoto): assert(false);
      return TaskState.ERROR;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Error codes for requests made by the the XhrIo wrapper.
 */


var ErrorCode;

(function (ErrorCode) {
  ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
  ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
  ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */


var NetworkXhrIo =
/** @class */
function () {
  function NetworkXhrIo() {
    var _this = this;

    this.sent_ = false;
    this.xhr_ = new XMLHttpRequest();
    this.errorCode_ = ErrorCode.NO_ERROR;
    this.sendPromise_ = new Promise(function (resolve) {
      _this.xhr_.addEventListener('abort', function () {
        _this.errorCode_ = ErrorCode.ABORT;
        resolve(_this);
      });

      _this.xhr_.addEventListener('error', function () {
        _this.errorCode_ = ErrorCode.NETWORK_ERROR;
        resolve(_this);
      });

      _this.xhr_.addEventListener('load', function () {
        resolve(_this);
      });
    });
  }
  /**
   * @override
   */


  NetworkXhrIo.prototype.send = function (url, method, body, headers) {
    if (this.sent_) {
      throw internalError('cannot .send() more than once');
    }

    this.sent_ = true;
    this.xhr_.open(method, url, true);

    if (headers !== undefined) {
      for (var key in headers) {
        if (headers.hasOwnProperty(key)) {
          this.xhr_.setRequestHeader(key, headers[key].toString());
        }
      }
    }

    if (body !== undefined) {
      this.xhr_.send(body);
    } else {
      this.xhr_.send();
    }

    return this.sendPromise_;
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.getErrorCode = function () {
    if (!this.sent_) {
      throw internalError('cannot .getErrorCode() before sending');
    }

    return this.errorCode_;
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.getStatus = function () {
    if (!this.sent_) {
      throw internalError('cannot .getStatus() before sending');
    }

    try {
      return this.xhr_.status;
    } catch (e) {
      return -1;
    }
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.getResponseText = function () {
    if (!this.sent_) {
      throw internalError('cannot .getResponseText() before sending');
    }

    return this.xhr_.responseText;
  };
  /**
   * Aborts the request.
   * @override
   */


  NetworkXhrIo.prototype.abort = function () {
    this.xhr_.abort();
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.getResponseHeader = function (header) {
    return this.xhr_.getResponseHeader(header);
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
    if (this.xhr_.upload != null) {
      this.xhr_.upload.addEventListener('progress', listener);
    }
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
    if (this.xhr_.upload != null) {
      this.xhr_.upload.removeEventListener('progress', listener);
    }
  };

  return NetworkXhrIo;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Factory-like class for creating XhrIo instances.
 */


var XhrIoPool =
/** @class */
function () {
  function XhrIoPool() {}

  XhrIoPool.prototype.createXhrIo = function () {
    return new NetworkXhrIo();
  };

  return XhrIoPool;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function isJustDef(p) {
  return p !== void 0;
} // eslint-disable-next-line @typescript-eslint/ban-types


function isFunction(p) {
  return typeof p === 'function';
}

function isNonArrayObject(p) {
  return typeof p === 'object' && !Array.isArray(p);
}

function isString(p) {
  return typeof p === 'string' || p instanceof String;
}

function isNativeBlob(p) {
  return isNativeBlobDefined() && p instanceof Blob;
}

function isNativeBlobDefined() {
  return typeof Blob !== 'undefined';
}

function validateNumber(argument, minValue, maxValue, value) {
  if (value < minValue) {
    throw invalidArgument("Invalid value for '" + argument + "'. Expected " + minValue + " or greater.");
  }

  if (value > maxValue) {
    throw invalidArgument("Invalid value for '" + argument + "'. Expected " + maxValue + " or less.");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getBlobBuilder() {
  if (typeof BlobBuilder !== 'undefined') {
    return BlobBuilder;
  } else if (typeof WebKitBlobBuilder !== 'undefined') {
    return WebKitBlobBuilder;
  } else {
    return undefined;
  }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */


function getBlob() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var BlobBuilder = getBlobBuilder();

  if (BlobBuilder !== undefined) {
    var bb = new BlobBuilder();

    for (var i = 0; i < args.length; i++) {
      bb.append(args[i]);
    }

    return bb.getBlob();
  } else {
    if (isNativeBlobDefined()) {
      return new Blob(args);
    } else {
      throw new FirebaseStorageError("unsupported-environment"
      /* UNSUPPORTED_ENVIRONMENT */
      , "This browser doesn't seem to support creating Blobs");
    }
  }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */


function sliceBlob(blob, start, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start, end);
  } else if (blob.mozSlice) {
    return blob.mozSlice(start, end);
  } else if (blob.slice) {
    return blob.slice(start, end);
  }

  return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */


var FbsBlob =
/** @class */
function () {
  function FbsBlob(data, elideCopy) {
    var size = 0;
    var blobType = '';

    if (isNativeBlob(data)) {
      this.data_ = data;
      size = data.size;
      blobType = data.type;
    } else if (data instanceof ArrayBuffer) {
      if (elideCopy) {
        this.data_ = new Uint8Array(data);
      } else {
        this.data_ = new Uint8Array(data.byteLength);
        this.data_.set(new Uint8Array(data));
      }

      size = this.data_.length;
    } else if (data instanceof Uint8Array) {
      if (elideCopy) {
        this.data_ = data;
      } else {
        this.data_ = new Uint8Array(data.length);
        this.data_.set(data);
      }

      size = data.length;
    }

    this.size_ = size;
    this.type_ = blobType;
  }

  FbsBlob.prototype.size = function () {
    return this.size_;
  };

  FbsBlob.prototype.type = function () {
    return this.type_;
  };

  FbsBlob.prototype.slice = function (startByte, endByte) {
    if (isNativeBlob(this.data_)) {
      var realBlob = this.data_;
      var sliced = sliceBlob(realBlob, startByte, endByte);

      if (sliced === null) {
        return null;
      }

      return new FbsBlob(sliced);
    } else {
      var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
      return new FbsBlob(slice, true);
    }
  };

  FbsBlob.getBlob = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (isNativeBlobDefined()) {
      var blobby = args.map(function (val) {
        if (val instanceof FbsBlob) {
          return val.data_;
        } else {
          return val;
        }
      });
      return new FbsBlob(getBlob.apply(null, blobby));
    } else {
      var uint8Arrays = args.map(function (val) {
        if (isString(val)) {
          return dataFromString(StringFormat.RAW, val).data;
        } else {
          // Blobs don't exist, so this has to be a Uint8Array.
          return val.data_;
        }
      });
      var finalLength_1 = 0;
      uint8Arrays.forEach(function (array) {
        finalLength_1 += array.byteLength;
      });
      var merged_1 = new Uint8Array(finalLength_1);
      var index_1 = 0;
      uint8Arrays.forEach(function (array) {
        for (var i = 0; i < array.length; i++) {
          merged_1[index_1++] = array[i];
        }
      });
      return new FbsBlob(merged_1, true);
    }
  };

  FbsBlob.prototype.uploadData = function () {
    return this.data_;
  };

  return FbsBlob;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Firebase Storage location data.
 */


var Location =
/** @class */
function () {
  function Location(bucket, path) {
    this.bucket = bucket;
    this.path_ = path;
  }

  Object.defineProperty(Location.prototype, "path", {
    get: function () {
      return this.path_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Location.prototype, "isRoot", {
    get: function () {
      return this.path.length === 0;
    },
    enumerable: false,
    configurable: true
  });

  Location.prototype.fullServerUrl = function () {
    var encode = encodeURIComponent;
    return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
  };

  Location.prototype.bucketOnlyServerUrl = function () {
    var encode = encodeURIComponent;
    return '/b/' + encode(this.bucket) + '/o';
  };

  Location.makeFromBucketSpec = function (bucketString) {
    var bucketLocation;

    try {
      bucketLocation = Location.makeFromUrl(bucketString);
    } catch (e) {
      // Not valid URL, use as-is. This lets you put bare bucket names in
      // config.
      return new Location(bucketString, '');
    }

    if (bucketLocation.path === '') {
      return bucketLocation;
    } else {
      throw invalidDefaultBucket(bucketString);
    }
  };

  Location.makeFromUrl = function (url) {
    var location = null;
    var bucketDomain = '([A-Za-z0-9.\\-_]+)';

    function gsModify(loc) {
      if (loc.path.charAt(loc.path.length - 1) === '/') {
        loc.path_ = loc.path_.slice(0, -1);
      }
    }

    var gsPath = '(/(.*))?$';
    var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
    var gsIndices = {
      bucket: 1,
      path: 3
    };

    function httpModify(loc) {
      loc.path_ = decodeURIComponent(loc.path);
    }

    var version = 'v[A-Za-z0-9_]+';
    var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
    var firebaseStoragePath = '(/([^?#]*).*)?$';
    var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
    var firebaseStorageIndices = {
      bucket: 1,
      path: 3
    };
    var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
    var cloudStoragePath = '([^?#]*)';
    var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
    var cloudStorageIndices = {
      bucket: 1,
      path: 2
    };
    var groups = [{
      regex: gsRegex,
      indices: gsIndices,
      postModify: gsModify
    }, {
      regex: firebaseStorageRegExp,
      indices: firebaseStorageIndices,
      postModify: httpModify
    }, {
      regex: cloudStorageRegExp,
      indices: cloudStorageIndices,
      postModify: httpModify
    }];

    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      var captures = group.regex.exec(url);

      if (captures) {
        var bucketValue = captures[group.indices.bucket];
        var pathValue = captures[group.indices.path];

        if (!pathValue) {
          pathValue = '';
        }

        location = new Location(bucketValue, pathValue);
        group.postModify(location);
        break;
      }
    }

    if (location == null) {
      throw invalidUrl(url);
    }

    return location;
  };

  return Location;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */


function jsonObjectOrNull(s) {
  var obj;

  try {
    obj = JSON.parse(s);
  } catch (e) {
    return null;
  }

  if (isNonArrayObject(obj)) {
    return obj;
  } else {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Contains helper methods for manipulating paths.
 */

/**
 * @return Null if the path is already at the root.
 */


function parent(path) {
  if (path.length === 0) {
    return null;
  }

  var index = path.lastIndexOf('/');

  if (index === -1) {
    return '';
  }

  var newPath = path.slice(0, index);
  return newPath;
}

function child(path, childPath) {
  var canonicalChildPath = childPath.split('/').filter(function (component) {
    return component.length > 0;
  }).join('/');

  if (path.length === 0) {
    return canonicalChildPath;
  } else {
    return path + '/' + canonicalChildPath;
  }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */


function lastComponent(path) {
  var index = path.lastIndexOf('/', path.length - 2);

  if (index === -1) {
    return path;
  } else {
    return path.slice(index + 1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function makeUrl(urlPart) {
  return "https://" + DEFAULT_HOST + "/v0" + urlPart;
}

function makeQueryString(params) {
  var encode = encodeURIComponent;
  var queryPart = '?';

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var nextPart = encode(key) + '=' + encode(params[key]);
      queryPart = queryPart + nextPart + '&';
    }
  } // Chop off the extra '&' or '?' on the end


  queryPart = queryPart.slice(0, -1);
  return queryPart;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function noXform_(metadata, value) {
  return value;
}

var Mapping =
/** @class */
function () {
  function Mapping(server, local, writable, xform) {
    this.server = server;
    this.local = local || server;
    this.writable = !!writable;
    this.xform = xform || noXform_;
  }

  return Mapping;
}();

var mappings_ = null;

function xformPath(fullPath) {
  if (!isString(fullPath) || fullPath.length < 2) {
    return fullPath;
  } else {
    return lastComponent(fullPath);
  }
}

function getMappings() {
  if (mappings_) {
    return mappings_;
  }

  var mappings = [];
  mappings.push(new Mapping('bucket'));
  mappings.push(new Mapping('generation'));
  mappings.push(new Mapping('metageneration'));
  mappings.push(new Mapping('name', 'fullPath', true));

  function mappingsXformPath(_metadata, fullPath) {
    return xformPath(fullPath);
  }

  var nameMapping = new Mapping('name');
  nameMapping.xform = mappingsXformPath;
  mappings.push(nameMapping);
  /**
   * Coerces the second param to a number, if it is defined.
   */

  function xformSize(_metadata, size) {
    if (size !== undefined) {
      return Number(size);
    } else {
      return size;
    }
  }

  var sizeMapping = new Mapping('size');
  sizeMapping.xform = xformSize;
  mappings.push(sizeMapping);
  mappings.push(new Mapping('timeCreated'));
  mappings.push(new Mapping('updated'));
  mappings.push(new Mapping('md5Hash', null, true));
  mappings.push(new Mapping('cacheControl', null, true));
  mappings.push(new Mapping('contentDisposition', null, true));
  mappings.push(new Mapping('contentEncoding', null, true));
  mappings.push(new Mapping('contentLanguage', null, true));
  mappings.push(new Mapping('contentType', null, true));
  mappings.push(new Mapping('metadata', 'customMetadata', true));
  mappings_ = mappings;
  return mappings_;
}

function addRef(metadata, service) {
  function generateRef() {
    var bucket = metadata['bucket'];
    var path = metadata['fullPath'];
    var loc = new Location(bucket, path);
    return service._makeStorageReference(loc);
  }

  Object.defineProperty(metadata, 'ref', {
    get: generateRef
  });
}

function fromResource(service, resource, mappings) {
  var metadata = {};
  metadata['type'] = 'file';
  var len = mappings.length;

  for (var i = 0; i < len; i++) {
    var mapping = mappings[i];
    metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
  }

  addRef(metadata, service);
  return metadata;
}

function fromResourceString(service, resourceString, mappings) {
  var obj = jsonObjectOrNull(resourceString);

  if (obj === null) {
    return null;
  }

  var resource = obj;
  return fromResource(service, resource, mappings);
}

function downloadUrlFromResourceString(metadata, resourceString) {
  var obj = jsonObjectOrNull(resourceString);

  if (obj === null) {
    return null;
  }

  if (!isString(obj['downloadTokens'])) {
    // This can happen if objects are uploaded through GCS and retrieved
    // through list, so we don't want to throw an Error.
    return null;
  }

  var tokens = obj['downloadTokens'];

  if (tokens.length === 0) {
    return null;
  }

  var encode = encodeURIComponent;
  var tokensList = tokens.split(',');
  var urls = tokensList.map(function (token) {
    var bucket = metadata['bucket'];
    var path = metadata['fullPath'];
    var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
    var base = makeUrl(urlPart);
    var queryString = makeQueryString({
      alt: 'media',
      token: token
    });
    return base + queryString;
  });
  return urls[0];
}

function toResourceString(metadata, mappings) {
  var resource = {};
  var len = mappings.length;

  for (var i = 0; i < len; i++) {
    var mapping = mappings[i];

    if (mapping.writable) {
      resource[mapping.server] = metadata[mapping.local];
    }
  }

  return JSON.stringify(resource);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var PREFIXES_KEY = 'prefixes';
var ITEMS_KEY = 'items';

function fromBackendResponse(service, bucket, resource) {
  var listResult = {
    prefixes: [],
    items: [],
    nextPageToken: resource['nextPageToken']
  };

  if (resource[PREFIXES_KEY]) {
    for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
      var path = _a[_i];
      var pathWithoutTrailingSlash = path.replace(/\/$/, '');

      var reference = service._makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));

      listResult.prefixes.push(reference);
    }
  }

  if (resource[ITEMS_KEY]) {
    for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
      var item = _c[_b];

      var reference = service._makeStorageReference(new Location(bucket, item['name']));

      listResult.items.push(reference);
    }
  }

  return listResult;
}

function fromResponseString(service, bucket, resourceString) {
  var obj = jsonObjectOrNull(resourceString);

  if (obj === null) {
    return null;
  }

  var resource = obj;
  return fromBackendResponse(service, bucket, resource);
}

var RequestInfo =
/** @class */
function () {
  function RequestInfo(url, method,
  /**
   * Returns the value with which to resolve the request's promise. Only called
   * if the request is successful. Throw from this function to reject the
   * returned Request's promise with the thrown error.
   * Note: The XhrIo passed to this function may be reused after this callback
   * returns. Do not keep a reference to it in any way.
   */
  handler, timeout) {
    this.url = url;
    this.method = method;
    this.handler = handler;
    this.timeout = timeout;
    this.urlParams = {};
    this.headers = {};
    this.body = null;
    this.errorHandler = null;
    /**
     * Called with the current number of bytes uploaded and total size (-1 if not
     * computable) of the request body (i.e. used to report upload progress).
     */

    this.progressCallback = null;
    this.successCodes = [200];
    this.additionalRetryCodes = [];
  }

  return RequestInfo;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */


function handlerCheck(cndn) {
  if (!cndn) {
    throw unknown();
  }
}

function metadataHandler(service, mappings) {
  function handler(xhr, text) {
    var metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return metadata;
  }

  return handler;
}

function listHandler(service, bucket) {
  function handler(xhr, text) {
    var listResult = fromResponseString(service, bucket, text);
    handlerCheck(listResult !== null);
    return listResult;
  }

  return handler;
}

function downloadUrlHandler(service, mappings) {
  function handler(xhr, text) {
    var metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return downloadUrlFromResourceString(metadata, text);
  }

  return handler;
}

function sharedErrorHandler(location) {
  function errorHandler(xhr, err) {
    var newErr;

    if (xhr.getStatus() === 401) {
      newErr = unauthenticated();
    } else {
      if (xhr.getStatus() === 402) {
        newErr = quotaExceeded(location.bucket);
      } else {
        if (xhr.getStatus() === 403) {
          newErr = unauthorized(location.path);
        } else {
          newErr = err;
        }
      }
    }

    newErr.serverResponse = err.serverResponse;
    return newErr;
  }

  return errorHandler;
}

function objectErrorHandler(location) {
  var shared = sharedErrorHandler(location);

  function errorHandler(xhr, err) {
    var newErr = shared(xhr, err);

    if (xhr.getStatus() === 404) {
      newErr = objectNotFound(location.path);
    }

    newErr.serverResponse = err.serverResponse;
    return newErr;
  }

  return errorHandler;
}

function getMetadata(service, location, mappings) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = 'GET';
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function list(service, location, delimiter, pageToken, maxResults) {
  var urlParams = {};

  if (location.isRoot) {
    urlParams['prefix'] = '';
  } else {
    urlParams['prefix'] = location.path + '/';
  }

  if (delimiter && delimiter.length > 0) {
    urlParams['delimiter'] = delimiter;
  }

  if (pageToken) {
    urlParams['pageToken'] = pageToken;
  }

  if (maxResults) {
    urlParams['maxResults'] = maxResults;
  }

  var urlPart = location.bucketOnlyServerUrl();
  var url = makeUrl(urlPart);
  var method = 'GET';
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}

function getDownloadUrl(service, location, mappings) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = 'GET';
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function updateMetadata(service, location, metadata, mappings) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = 'PATCH';
  var body = toResourceString(metadata, mappings);
  var headers = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.headers = headers;
  requestInfo.body = body;
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function deleteObject(service, location) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = 'DELETE';
  var timeout = service.maxOperationRetryTime;

  function handler(_xhr, _text) {}

  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.successCodes = [200, 204];
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function determineContentType_(metadata, blob) {
  return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
}

function metadataForUpload_(location, blob, metadata) {
  var metadataClone = Object.assign({}, metadata);
  metadataClone['fullPath'] = location.path;
  metadataClone['size'] = blob.size();

  if (!metadataClone['contentType']) {
    metadataClone['contentType'] = determineContentType_(null, blob);
  }

  return metadataClone;
}
/**
 * Prepare RequestInfo for uploads as Content-Type: multipart.
 */


function multipartUpload(service, location, mappings, blob, metadata) {
  var urlPart = location.bucketOnlyServerUrl();
  var headers = {
    'X-Goog-Upload-Protocol': 'multipart'
  };

  function genBoundary() {
    var str = '';

    for (var i = 0; i < 2; i++) {
      str = str + Math.random().toString().slice(2);
    }

    return str;
  }

  var boundary = genBoundary();
  headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
  var metadata_ = metadataForUpload_(location, blob, metadata);
  var metadataString = toResourceString(metadata_, mappings);
  var preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata_['contentType'] + '\r\n\r\n';
  var postBlobPart = '\r\n--' + boundary + '--';
  var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);

  if (body === null) {
    throw cannotSliceBlob();
  }

  var urlParams = {
    name: metadata_['fullPath']
  };
  var url = makeUrl(urlPart);
  var method = 'POST';
  var timeout = service.maxUploadRetryTime;
  var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 */


var ResumableUploadStatus =
/** @class */
function () {
  function ResumableUploadStatus(current, total, finalized, metadata) {
    this.current = current;
    this.total = total;
    this.finalized = !!finalized;
    this.metadata = metadata || null;
  }

  return ResumableUploadStatus;
}();

function checkResumeHeader_(xhr, allowed) {
  var status = null;

  try {
    status = xhr.getResponseHeader('X-Goog-Upload-Status');
  } catch (e) {
    handlerCheck(false);
  }

  var allowedStatus = allowed || ['active'];
  handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
  return status;
}

function createResumableUpload(service, location, mappings, blob, metadata) {
  var urlPart = location.bucketOnlyServerUrl();
  var metadataForUpload = metadataForUpload_(location, blob, metadata);
  var urlParams = {
    name: metadataForUpload['fullPath']
  };
  var url = makeUrl(urlPart);
  var method = 'POST';
  var headers = {
    'X-Goog-Upload-Protocol': 'resumable',
    'X-Goog-Upload-Command': 'start',
    'X-Goog-Upload-Header-Content-Length': blob.size(),
    'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
    'Content-Type': 'application/json; charset=utf-8'
  };
  var body = toResourceString(metadataForUpload, mappings);
  var timeout = service.maxUploadRetryTime;

  function handler(xhr) {
    checkResumeHeader_(xhr);
    var url;

    try {
      url = xhr.getResponseHeader('X-Goog-Upload-URL');
    } catch (e) {
      handlerCheck(false);
    }

    handlerCheck(isString(url));
    return url;
  }

  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */


function getResumableUploadStatus(service, location, url, blob) {
  var headers = {
    'X-Goog-Upload-Command': 'query'
  };

  function handler(xhr) {
    var status = checkResumeHeader_(xhr, ['active', 'final']);
    var sizeString = null;

    try {
      sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
    } catch (e) {
      handlerCheck(false);
    }

    if (!sizeString) {
      // null or empty string
      handlerCheck(false);
    }

    var size = Number(sizeString);
    handlerCheck(!isNaN(size));
    return new ResumableUploadStatus(size, blob.size(), status === 'final');
  }

  var method = 'POST';
  var timeout = service.maxUploadRetryTime;
  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.headers = headers;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */


var RESUMABLE_UPLOAD_CHUNK_SIZE = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */

function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
  // TODO(andysoto): standardize on internal asserts
  // assert(!(opt_status && opt_status.finalized));
  var status_ = new ResumableUploadStatus(0, 0);

  if (status) {
    status_.current = status.current;
    status_.total = status.total;
  } else {
    status_.current = 0;
    status_.total = blob.size();
  }

  if (blob.size() !== status_.total) {
    throw serverFileWrongSize();
  }

  var bytesLeft = status_.total - status_.current;
  var bytesToUpload = bytesLeft;

  if (chunkSize > 0) {
    bytesToUpload = Math.min(bytesToUpload, chunkSize);
  }

  var startByte = status_.current;
  var endByte = startByte + bytesToUpload;
  var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
  var headers = {
    'X-Goog-Upload-Command': uploadCommand,
    'X-Goog-Upload-Offset': status_.current
  };
  var body = blob.slice(startByte, endByte);

  if (body === null) {
    throw cannotSliceBlob();
  }

  function handler(xhr, text) {
    // TODO(andysoto): Verify the MD5 of each uploaded range:
    // the 'x-range-md5' header comes back with status code 308 responses.
    // We'll only be able to bail out though, because you can't re-upload a
    // range that you previously uploaded.
    var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
    var newCurrent = status_.current + bytesToUpload;
    var size = blob.size();
    var metadata;

    if (uploadStatus === 'final') {
      metadata = metadataHandler(service, mappings)(xhr, text);
    } else {
      metadata = null;
    }

    return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
  }

  var method = 'POST';
  var timeout = service.maxUploadRetryTime;
  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.progressCallback = progressCallback || null;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Observer =
/** @class */
function () {
  function Observer(nextOrObserver, error, complete) {
    var asFunctions = isFunction(nextOrObserver) || error != null || complete != null;

    if (asFunctions) {
      this.next = nextOrObserver;
      this.error = error;
      this.complete = complete;
    } else {
      var observer = nextOrObserver;
      this.next = observer.next;
      this.error = observer.error;
      this.complete = observer.complete;
    }
  }

  return Observer;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
// eslint-disable-next-line @typescript-eslint/ban-types


function async(f) {
  return function () {
    var argsToForward = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      argsToForward[_i] = arguments[_i];
    } // eslint-disable-next-line @typescript-eslint/no-floating-promises


    Promise.resolve().then(function () {
      return f.apply(void 0, argsToForward);
    });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 * @public
 */


var UploadTask =
/** @class */
function () {
  /**
   * @param ref - The firebaseStorage.Reference object this task came
   *     from, untyped to avoid cyclic dependencies.
   * @param blob - The blob to upload.
   */
  function UploadTask(ref, blob, metadata) {
    var _this = this;

    if (metadata === void 0) {
      metadata = null;
    }
    /**
     * Number of bytes transferred so far.
     */


    this._transferred = 0;
    this._needToFetchStatus = false;
    this._needToFetchMetadata = false;
    this._observers = [];
    this._error = undefined;
    this._uploadUrl = undefined;
    this._request = undefined;
    this._chunkMultiplier = 1;
    this._resolve = undefined;
    this._reject = undefined;
    this._ref = ref;
    this._blob = blob;
    this._metadata = metadata;
    this._mappings = getMappings();
    this._resumable = this._shouldDoResumable(this._blob);
    this._state = "running"
    /* RUNNING */
    ;

    this._errorHandler = function (error) {
      _this._request = undefined;
      _this._chunkMultiplier = 1;

      if (error._codeEquals("canceled"
      /* CANCELED */
      )) {
        _this._needToFetchStatus = true;

        _this.completeTransitions_();
      } else {
        _this._error = error;

        _this._transition("error"
        /* ERROR */
        );
      }
    };

    this._metadataErrorHandler = function (error) {
      _this._request = undefined;

      if (error._codeEquals("canceled"
      /* CANCELED */
      )) {
        _this.completeTransitions_();
      } else {
        _this._error = error;

        _this._transition("error"
        /* ERROR */
        );
      }
    };

    this._promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;

      _this._start();
    }); // Prevent uncaught rejections on the internal promise from bubbling out
    // to the top level with a dummy handler.

    this._promise.then(null, function () {});
  }

  UploadTask.prototype._makeProgressCallback = function () {
    var _this = this;

    var sizeBefore = this._transferred;
    return function (loaded) {
      return _this._updateProgress(sizeBefore + loaded);
    };
  };

  UploadTask.prototype._shouldDoResumable = function (blob) {
    return blob.size() > 256 * 1024;
  };

  UploadTask.prototype._start = function () {
    if (this._state !== "running"
    /* RUNNING */
    ) {
        // This can happen if someone pauses us in a resume callback, for example.
        return;
      }

    if (this._request !== undefined) {
      return;
    }

    if (this._resumable) {
      if (this._uploadUrl === undefined) {
        this._createResumable();
      } else {
        if (this._needToFetchStatus) {
          this._fetchStatus();
        } else {
          if (this._needToFetchMetadata) {
            // Happens if we miss the metadata on upload completion.
            this._fetchMetadata();
          } else {
            this._continueUpload();
          }
        }
      }
    } else {
      this._oneShotUpload();
    }
  };

  UploadTask.prototype._resolveToken = function (callback) {
    var _this = this; // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this._ref.storage._getAuthToken().then(function (authToken) {
      switch (_this._state) {
        case "running"
        /* RUNNING */
        :
          callback(authToken);
          break;

        case "canceling"
        /* CANCELING */
        :
          _this._transition("canceled"
          /* CANCELED */
          );

          break;

        case "pausing"
        /* PAUSING */
        :
          _this._transition("paused"
          /* PAUSED */
          );

          break;
      }
    });
  }; // TODO(andysoto): assert false


  UploadTask.prototype._createResumable = function () {
    var _this = this;

    this._resolveToken(function (authToken) {
      var requestInfo = createResumableUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);

      var createRequest = _this._ref.storage._makeRequest(requestInfo, authToken);

      _this._request = createRequest;
      createRequest.getPromise().then(function (url) {
        _this._request = undefined;
        _this._uploadUrl = url;
        _this._needToFetchStatus = false;

        _this.completeTransitions_();
      }, _this._errorHandler);
    });
  };

  UploadTask.prototype._fetchStatus = function () {
    var _this = this; // TODO(andysoto): assert(this.uploadUrl_ !== null);


    var url = this._uploadUrl;

    this._resolveToken(function (authToken) {
      var requestInfo = getResumableUploadStatus(_this._ref.storage, _this._ref._location, url, _this._blob);

      var statusRequest = _this._ref.storage._makeRequest(requestInfo, authToken);

      _this._request = statusRequest;
      statusRequest.getPromise().then(function (status) {
        status = status;
        _this._request = undefined;

        _this._updateProgress(status.current);

        _this._needToFetchStatus = false;

        if (status.finalized) {
          _this._needToFetchMetadata = true;
        }

        _this.completeTransitions_();
      }, _this._errorHandler);
    });
  };

  UploadTask.prototype._continueUpload = function () {
    var _this = this;

    var chunkSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
    var status = new ResumableUploadStatus(this._transferred, this._blob.size()); // TODO(andysoto): assert(this.uploadUrl_ !== null);

    var url = this._uploadUrl;

    this._resolveToken(function (authToken) {
      var requestInfo;

      try {
        requestInfo = continueResumableUpload(_this._ref._location, _this._ref.storage, url, _this._blob, chunkSize, _this._mappings, status, _this._makeProgressCallback());
      } catch (e) {
        _this._error = e;

        _this._transition("error"
        /* ERROR */
        );

        return;
      }

      var uploadRequest = _this._ref.storage._makeRequest(requestInfo, authToken);

      _this._request = uploadRequest;
      uploadRequest.getPromise().then(function (newStatus) {
        _this._increaseMultiplier();

        _this._request = undefined;

        _this._updateProgress(newStatus.current);

        if (newStatus.finalized) {
          _this._metadata = newStatus.metadata;

          _this._transition("success"
          /* SUCCESS */
          );
        } else {
          _this.completeTransitions_();
        }
      }, _this._errorHandler);
    });
  };

  UploadTask.prototype._increaseMultiplier = function () {
    var currentSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier; // Max chunk size is 32M.

    if (currentSize < 32 * 1024 * 1024) {
      this._chunkMultiplier *= 2;
    }
  };

  UploadTask.prototype._fetchMetadata = function () {
    var _this = this;

    this._resolveToken(function (authToken) {
      var requestInfo = getMetadata(_this._ref.storage, _this._ref._location, _this._mappings);

      var metadataRequest = _this._ref.storage._makeRequest(requestInfo, authToken);

      _this._request = metadataRequest;
      metadataRequest.getPromise().then(function (metadata) {
        _this._request = undefined;
        _this._metadata = metadata;

        _this._transition("success"
        /* SUCCESS */
        );
      }, _this._metadataErrorHandler);
    });
  };

  UploadTask.prototype._oneShotUpload = function () {
    var _this = this;

    this._resolveToken(function (authToken) {
      var requestInfo = multipartUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);

      var multipartRequest = _this._ref.storage._makeRequest(requestInfo, authToken);

      _this._request = multipartRequest;
      multipartRequest.getPromise().then(function (metadata) {
        _this._request = undefined;
        _this._metadata = metadata;

        _this._updateProgress(_this._blob.size());

        _this._transition("success"
        /* SUCCESS */
        );
      }, _this._errorHandler);
    });
  };

  UploadTask.prototype._updateProgress = function (transferred) {
    var old = this._transferred;
    this._transferred = transferred; // A progress update can make the "transferred" value smaller (e.g. a
    // partial upload not completed by server, after which the "transferred"
    // value may reset to the value at the beginning of the request).

    if (this._transferred !== old) {
      this._notifyObservers();
    }
  };

  UploadTask.prototype._transition = function (state) {
    if (this._state === state) {
      return;
    }

    switch (state) {
      case "canceling"
      /* CANCELING */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING ||
        //        this.state_ === InternalTaskState.PAUSING);
        this._state = state;

        if (this._request !== undefined) {
          this._request.cancel();
        }

        break;

      case "pausing"
      /* PAUSING */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING);
        this._state = state;

        if (this._request !== undefined) {
          this._request.cancel();
        }

        break;

      case "running"
      /* RUNNING */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.PAUSED ||
        //        this.state_ === InternalTaskState.PAUSING);
        var wasPaused = this._state === "paused"
        /* PAUSED */
        ;
        this._state = state;

        if (wasPaused) {
          this._notifyObservers();

          this._start();
        }

        break;

      case "paused"
      /* PAUSED */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.PAUSING);
        this._state = state;

        this._notifyObservers();

        break;

      case "canceled"
      /* CANCELED */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.PAUSED ||
        //        this.state_ === InternalTaskState.CANCELING);
        this._error = canceled();
        this._state = state;

        this._notifyObservers();

        break;

      case "error"
      /* ERROR */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING ||
        //        this.state_ === InternalTaskState.PAUSING ||
        //        this.state_ === InternalTaskState.CANCELING);
        this._state = state;

        this._notifyObservers();

        break;

      case "success"
      /* SUCCESS */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING ||
        //        this.state_ === InternalTaskState.PAUSING ||
        //        this.state_ === InternalTaskState.CANCELING);
        this._state = state;

        this._notifyObservers();

        break;
    }
  };

  UploadTask.prototype.completeTransitions_ = function () {
    switch (this._state) {
      case "pausing"
      /* PAUSING */
      :
        this._transition("paused"
        /* PAUSED */
        );

        break;

      case "canceling"
      /* CANCELING */
      :
        this._transition("canceled"
        /* CANCELED */
        );

        break;

      case "running"
      /* RUNNING */
      :
        this._start();

        break;
    }
  };

  Object.defineProperty(UploadTask.prototype, "snapshot", {
    /**
     * A snapshot of the current task state.
     */
    get: function () {
      var externalState = taskStateFromInternalTaskState(this._state);
      return {
        bytesTransferred: this._transferred,
        totalBytes: this._blob.size(),
        state: externalState,
        metadata: this._metadata,
        task: this,
        ref: this._ref
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Adds a callback for an event.
   * @param type - The type of event to listen for.
   * @param nextOrObserver -
   *     The `next` function, which gets called for each item in
   *     the event stream, or an observer object with some or all of these three
   *     properties (`next`, `error`, `complete`).
   * @param error - A function that gets called with a `FirebaseStorageError`
   *     if the event stream ends due to an error.
   * @param completed - A function that gets called if the
   *     event stream ends normally.
   * @returns
   *     If only the event argument is passed, returns a function you can use to
   *     add callbacks (see the examples above). If more than just the event
   *     argument is passed, returns a function you can call to unregister the
   *     callbacks.
   */

  UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
    var _this = this;

    var observer = new Observer(nextOrObserver, error, completed);

    this._addObserver(observer);

    return function () {
      _this._removeObserver(observer);
    };
  };
  /**
   * This object behaves like a Promise, and resolves with its snapshot data
   * when the upload completes.
   * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
   * @param onRejected - The rejection callback.
   */


  UploadTask.prototype.then = function (onFulfilled, onRejected) {
    // These casts are needed so that TypeScript can infer the types of the
    // resulting Promise.
    return this._promise.then(onFulfilled, onRejected);
  };
  /**
   * Equivalent to calling `then(null, onRejected)`.
   */


  UploadTask.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  };
  /**
   * Adds the given observer.
   */


  UploadTask.prototype._addObserver = function (observer) {
    this._observers.push(observer);

    this._notifyObserver(observer);
  };
  /**
   * Removes the given observer.
   */


  UploadTask.prototype._removeObserver = function (observer) {
    var i = this._observers.indexOf(observer);

    if (i !== -1) {
      this._observers.splice(i, 1);
    }
  };

  UploadTask.prototype._notifyObservers = function () {
    var _this = this;

    this._finishPromise();

    var observers = this._observers.slice();

    observers.forEach(function (observer) {
      _this._notifyObserver(observer);
    });
  };

  UploadTask.prototype._finishPromise = function () {
    if (this._resolve !== undefined) {
      var triggered = true;

      switch (taskStateFromInternalTaskState(this._state)) {
        case TaskState.SUCCESS:
          async(this._resolve.bind(null, this.snapshot))();
          break;

        case TaskState.CANCELED:
        case TaskState.ERROR:
          var toCall = this._reject;
          async(toCall.bind(null, this._error))();
          break;

        default:
          triggered = false;
          break;
      }

      if (triggered) {
        this._resolve = undefined;
        this._reject = undefined;
      }
    }
  };

  UploadTask.prototype._notifyObserver = function (observer) {
    var externalState = taskStateFromInternalTaskState(this._state);

    switch (externalState) {
      case TaskState.RUNNING:
      case TaskState.PAUSED:
        if (observer.next) {
          async(observer.next.bind(observer, this.snapshot))();
        }

        break;

      case TaskState.SUCCESS:
        if (observer.complete) {
          async(observer.complete.bind(observer))();
        }

        break;

      case TaskState.CANCELED:
      case TaskState.ERROR:
        if (observer.error) {
          async(observer.error.bind(observer, this._error))();
        }

        break;

      default:
        // TODO(andysoto): assert(false);
        if (observer.error) {
          async(observer.error.bind(observer, this._error))();
        }

    }
  };
  /**
   * Resumes a paused task. Has no effect on a currently running or failed task.
   * @returns True if the operation took effect, false if ignored.
   */


  UploadTask.prototype.resume = function () {
    var valid = this._state === "paused"
    /* PAUSED */
    || this._state === "pausing"
    /* PAUSING */
    ;

    if (valid) {
      this._transition("running"
      /* RUNNING */
      );
    }

    return valid;
  };
  /**
   * Pauses a currently running task. Has no effect on a paused or failed task.
   * @returns True if the operation took effect, false if ignored.
   */


  UploadTask.prototype.pause = function () {
    var valid = this._state === "running"
    /* RUNNING */
    ;

    if (valid) {
      this._transition("pausing"
      /* PAUSING */
      );
    }

    return valid;
  };
  /**
   * Cancels a currently running or paused task. Has no effect on a complete or
   * failed task.
   * @returns True if the operation took effect, false if ignored.
   */


  UploadTask.prototype.cancel = function () {
    var valid = this._state === "running"
    /* RUNNING */
    || this._state === "pausing"
    /* PAUSING */
    ;

    if (valid) {
      this._transition("canceling"
      /* CANCELING */
      );
    }

    return valid;
  };

  return UploadTask;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @public
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */


var Reference =
/** @class */
function () {
  function Reference(_service, location) {
    this._service = _service;

    if (location instanceof Location) {
      this._location = location;
    } else {
      this._location = Location.makeFromUrl(location);
    }
  }
  /**
   * Returns the URL for the bucket and path this object references,
   *     in the form gs://<bucket>/<object-path>
   * @override
   */


  Reference.prototype.toString = function () {
    return 'gs://' + this._location.bucket + '/' + this._location.path;
  };

  Reference.prototype._newRef = function (service, location) {
    return new Reference(service, location);
  };

  Object.defineProperty(Reference.prototype, "root", {
    /**
     * A reference to the root of this object's bucket.
     */
    get: function () {
      var location = new Location(this._location.bucket, '');
      return this._newRef(this._service, location);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "bucket", {
    /**
     * The name of the bucket containing this reference's object.
     */
    get: function () {
      return this._location.bucket;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "fullPath", {
    /**
     * The full path of this object.
     */
    get: function () {
      return this._location.path;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "name", {
    /**
     * The short name of this object, which is the last component of the full path.
     * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
     */
    get: function () {
      return lastComponent(this._location.path);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "storage", {
    /**
     * The `StorageService` instance this `StorageReference` is associated with.
     */
    get: function () {
      return this._service;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "parent", {
    /**
     * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
     * this reference is the root.
     */
    get: function () {
      var newPath = parent(this._location.path);

      if (newPath === null) {
        return null;
      }

      var location = new Location(this._location.bucket, newPath);
      return new Reference(this._service, location);
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Utility function to throw an error in methods that do not accept a root reference.
   */

  Reference.prototype._throwIfRoot = function (name) {
    if (this._location.path === '') {
      throw invalidRootOperation(name);
    }
  };

  return Reference;
}();
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns An UploadTask
 */


function uploadBytesResumable(ref, data, metadata) {
  ref._throwIfRoot('uploadBytesResumable');

  return new UploadTask(ref, new FbsBlob(data), metadata);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: listAll may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - StorageReference to get list from.
 *
 * @returns A Promise that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */


function listAll(ref) {
  var accumulator = {
    prefixes: [],
    items: []
  };
  return listAllHelper(ref, accumulator).then(function () {
    return accumulator;
  });
}
/**
 * Separated from listAll because async functions can't use "arguments".
 * @param ref
 * @param accumulator
 * @param pageToken
 */


function listAllHelper(ref, accumulator, pageToken) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var opt, nextPage;

    var _a, _b;

    return (0, _tslib.__generator)(this, function (_c) {
      switch (_c.label) {
        case 0:
          opt = {
            // maxResults is 1000 by default.
            pageToken: pageToken
          };
          return [4
          /*yield*/
          , list$1(ref, opt)];

        case 1:
          nextPage = _c.sent();

          (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);

          (_b = accumulator.items).push.apply(_b, nextPage.items);

          if (!(nextPage.nextPageToken != null)) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , listAllHelper(ref, accumulator, nextPage.nextPageToken)];

        case 2:
          _c.sent();

          _c.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - StorageReference to get list from.
 * @param options - See ListOptions for details.
 * @returns A Promise that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */


function list$1(ref, options) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var authToken, op, requestInfo;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (options != null) {
            if (typeof options.maxResults === 'number') {
              validateNumber('options.maxResults',
              /* minValue= */
              1,
              /* maxValue= */
              1000, options.maxResults);
            }
          }

          return [4
          /*yield*/
          , ref.storage._getAuthToken()];

        case 1:
          authToken = _a.sent();
          op = options || {};
          requestInfo = list(ref.storage, ref._location,
          /*delimiter= */
          '/', op.pageToken, op.maxResults);
          return [2
          /*return*/
          , ref.storage._makeRequest(requestInfo, authToken).getPromise()];
      }
    });
  });
}
/**
 * A promise that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - StorageReference to get metadata from.
 */


function getMetadata$1(ref) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var authToken, requestInfo;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          ref._throwIfRoot('getMetadata');

          return [4
          /*yield*/
          , ref.storage._getAuthToken()];

        case 1:
          authToken = _a.sent();
          requestInfo = getMetadata(ref.storage, ref._location, getMappings());
          return [2
          /*return*/
          , ref.storage._makeRequest(requestInfo, authToken).getPromise()];
      }
    });
  });
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - StorageReference to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A promise that resolves
 *     with the new metadata for this object.
 *     See `firebaseStorage.Reference.prototype.getMetadata`
 */


function updateMetadata$1(ref, metadata) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var authToken, requestInfo;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          ref._throwIfRoot('updateMetadata');

          return [4
          /*yield*/
          , ref.storage._getAuthToken()];

        case 1:
          authToken = _a.sent();
          requestInfo = updateMetadata(ref.storage, ref._location, metadata, getMappings());
          return [2
          /*return*/
          , ref.storage._makeRequest(requestInfo, authToken).getPromise()];
      }
    });
  });
}
/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A promise that resolves with the download
 *     URL for this object.
 */


function getDownloadURL(ref) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var authToken, requestInfo;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          ref._throwIfRoot('getDownloadURL');

          return [4
          /*yield*/
          , ref.storage._getAuthToken()];

        case 1:
          authToken = _a.sent();
          requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
          return [2
          /*return*/
          , ref.storage._makeRequest(requestInfo, authToken).getPromise().then(function (url) {
            if (url === null) {
              throw noDownloadURL();
            }

            return url;
          })];
      }
    });
  });
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - StorageReference for object to delete.
 * @returns A promise that resolves if the deletion succeeds.
 */


function deleteObject$1(ref) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var authToken, requestInfo;
    return (0, _tslib.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          ref._throwIfRoot('deleteObject');

          return [4
          /*yield*/
          , ref.storage._getAuthToken()];

        case 1:
          authToken = _a.sent();
          requestInfo = deleteObject(ref.storage, ref._location);
          return [2
          /*return*/
          , ref.storage._makeRequest(requestInfo, authToken).getPromise()];
      }
    });
  });
}
/**
 * Returns reference for object obtained by appending `childPath` to `ref`.
 *
 * @param ref - StorageReference to get child of.
 * @param childPath - Child path from provided ref.
 * @returns A reference to the object obtained by
 * appending childPath, removing any duplicate, beginning, or trailing
 * slashes.
 */


function _getChild(ref, childPath) {
  var newPath = child(ref._location.path, childPath);
  var location = new Location(ref._location.bucket, newPath);
  return new Reference(ref.storage, location);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var UploadTaskSnapshotCompat =
/** @class */
function () {
  function UploadTaskSnapshotCompat(_delegate, task, ref) {
    this._delegate = _delegate;
    this.task = task;
    this.ref = ref;
  }

  Object.defineProperty(UploadTaskSnapshotCompat.prototype, "bytesTransferred", {
    get: function () {
      return this._delegate.bytesTransferred;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(UploadTaskSnapshotCompat.prototype, "metadata", {
    get: function () {
      return this._delegate.metadata;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(UploadTaskSnapshotCompat.prototype, "state", {
    get: function () {
      return this._delegate.state;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(UploadTaskSnapshotCompat.prototype, "totalBytes", {
    get: function () {
      return this._delegate.totalBytes;
    },
    enumerable: false,
    configurable: true
  });
  return UploadTaskSnapshotCompat;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var UploadTaskCompat =
/** @class */
function () {
  function UploadTaskCompat(_delegate, _ref) {
    this._delegate = _delegate;
    this._ref = _ref;
    this.cancel = this._delegate.cancel.bind(this._delegate);
    this.catch = this._delegate.catch.bind(this._delegate);
    this.pause = this._delegate.pause.bind(this._delegate);
    this.resume = this._delegate.resume.bind(this._delegate);
  }

  Object.defineProperty(UploadTaskCompat.prototype, "snapshot", {
    get: function () {
      return new UploadTaskSnapshotCompat(this._delegate.snapshot, this, this._ref);
    },
    enumerable: false,
    configurable: true
  });

  UploadTaskCompat.prototype.then = function (onFulfilled, onRejected) {
    var _this = this;

    return this._delegate.then(function (snapshot) {
      if (onFulfilled) {
        return onFulfilled(new UploadTaskSnapshotCompat(snapshot, _this, _this._ref));
      }
    }, onRejected);
  };

  UploadTaskCompat.prototype.on = function (type, nextOrObserver, error, completed) {
    var _this = this;

    var wrappedNextOrObserver = undefined;

    if (!!nextOrObserver) {
      if (typeof nextOrObserver === 'function') {
        wrappedNextOrObserver = function (taskSnapshot) {
          return nextOrObserver(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
        };
      } else {
        wrappedNextOrObserver = {
          next: !!nextOrObserver.next ? function (taskSnapshot) {
            return nextOrObserver.next(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
          } : undefined,
          complete: nextOrObserver.complete || undefined,
          error: nextOrObserver.error || undefined
        };
      }
    }

    return this._delegate.on(type, wrappedNextOrObserver, error || undefined, completed || undefined);
  };

  return UploadTaskCompat;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ListResultCompat =
/** @class */
function () {
  function ListResultCompat(_delegate, _service) {
    this._delegate = _delegate;
    this._service = _service;
  }

  Object.defineProperty(ListResultCompat.prototype, "prefixes", {
    get: function () {
      var _this = this;

      return this._delegate.prefixes.map(function (ref) {
        return new ReferenceCompat(ref, _this._service);
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ListResultCompat.prototype, "items", {
    get: function () {
      var _this = this;

      return this._delegate.items.map(function (ref) {
        return new ReferenceCompat(ref, _this._service);
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ListResultCompat.prototype, "nextPageToken", {
    get: function () {
      return this._delegate.nextPageToken || null;
    },
    enumerable: false,
    configurable: true
  });
  return ListResultCompat;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ReferenceCompat =
/** @class */
function () {
  function ReferenceCompat(_delegate, storage) {
    this._delegate = _delegate;
    this.storage = storage;
  }

  Object.defineProperty(ReferenceCompat.prototype, "name", {
    get: function () {
      return this._delegate.name;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ReferenceCompat.prototype, "bucket", {
    get: function () {
      return this._delegate.bucket;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ReferenceCompat.prototype, "fullPath", {
    get: function () {
      return this._delegate.fullPath;
    },
    enumerable: false,
    configurable: true
  });

  ReferenceCompat.prototype.toString = function () {
    return this._delegate.toString();
  };
  /**
   * @returns A reference to the object obtained by
   * appending childPath, removing any duplicate, beginning, or trailing
   * slashes.
   */


  ReferenceCompat.prototype.child = function (childPath) {
    var reference = _getChild(this._delegate, childPath);

    return new ReferenceCompat(reference, this.storage);
  };

  Object.defineProperty(ReferenceCompat.prototype, "root", {
    get: function () {
      return new ReferenceCompat(this._delegate.root, this.storage);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ReferenceCompat.prototype, "parent", {
    /**
     * @returns A reference to the parent of the
     * current object, or null if the current object is the root.
     */
    get: function () {
      var reference = this._delegate.parent;

      if (reference == null) {
        return null;
      }

      return new ReferenceCompat(reference, this.storage);
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Uploads a blob to this object's location.
   * @param data - The blob to upload.
   * @returns An UploadTask that lets you control and
   * observe the upload.
   */

  ReferenceCompat.prototype.put = function (data, metadata) {
    this._throwIfRoot('put');

    return new UploadTaskCompat(uploadBytesResumable(this._delegate, data, metadata), this);
  };
  /**
   * Uploads a string to this object's location.
   * @param value - The string to upload.
   * @param format - The format of the string to upload.
   * @returns An UploadTask that lets you control and
   * observe the upload.
   */


  ReferenceCompat.prototype.putString = function (value, format, metadata) {
    if (format === void 0) {
      format = StringFormat.RAW;
    }

    this._throwIfRoot('putString');

    var data = dataFromString(format, value);
    var metadataClone = (0, _tslib.__assign)({}, metadata);

    if (metadataClone['contentType'] == null && data.contentType != null) {
      metadataClone['contentType'] = data.contentType;
    }

    return new UploadTaskCompat(new UploadTask(this._delegate, new FbsBlob(data.data, true), metadataClone), this);
  };
  /**
   * List all items (files) and prefixes (folders) under this storage reference.
   *
   * This is a helper method for calling list() repeatedly until there are
   * no more results. The default pagination size is 1000.
   *
   * Note: The results may not be consistent if objects are changed while this
   * operation is running.
   *
   * Warning: listAll may potentially consume too many resources if there are
   * too many results.
   *
   * @returns A Promise that resolves with all the items and prefixes under
   *  the current storage reference. `prefixes` contains references to
   *  sub-directories and `items` contains references to objects in this
   *  folder. `nextPageToken` is never returned.
   */


  ReferenceCompat.prototype.listAll = function () {
    var _this = this;

    return listAll(this._delegate).then(function (r) {
      return new ListResultCompat(r, _this.storage);
    });
  };
  /**
   * List items (files) and prefixes (folders) under this storage reference.
   *
   * List API is only available for Firebase Rules Version 2.
   *
   * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
   * delimited folder structure. Refer to GCS's List API if you want to learn more.
   *
   * To adhere to Firebase Rules's Semantics, Firebase Storage does not
   * support objects whose paths end with "/" or contain two consecutive
   * "/"s. Firebase Storage List API will filter these unsupported objects.
   * list() may fail if there are too many unsupported objects in the bucket.
   *
   * @param options - See ListOptions for details.
   * @returns A Promise that resolves with the items and prefixes.
   * `prefixes` contains references to sub-folders and `items`
   * contains references to objects in this folder. `nextPageToken`
   * can be used to get the rest of the results.
   */


  ReferenceCompat.prototype.list = function (options) {
    var _this = this;

    return list$1(this._delegate, options).then(function (r) {
      return new ListResultCompat(r, _this.storage);
    });
  };
  /**
   * A promise that resolves with the metadata for this object. If this
   * object doesn't exist or metadata cannot be retreived, the promise is
   * rejected.
   */


  ReferenceCompat.prototype.getMetadata = function () {
    return getMetadata$1(this._delegate);
  };
  /**
   * Updates the metadata for this object.
   * @param metadata - The new metadata for the object.
   * Only values that have been explicitly set will be changed. Explicitly
   * setting a value to null will remove the metadata.
   * @returns A promise that resolves
   * with the new metadata for this object.
   * @see firebaseStorage.Reference.prototype.getMetadata
   */


  ReferenceCompat.prototype.updateMetadata = function (metadata) {
    return updateMetadata$1(this._delegate, metadata);
  };
  /**
   * @returns A promise that resolves with the download
   * URL for this object.
   */


  ReferenceCompat.prototype.getDownloadURL = function () {
    return getDownloadURL(this._delegate);
  };
  /**
   * Deletes the object at this location.
   * @returns A promise that resolves if the deletion succeeds.
   */


  ReferenceCompat.prototype.delete = function () {
    this._throwIfRoot('delete');

    return deleteObject$1(this._delegate);
  };

  ReferenceCompat.prototype._throwIfRoot = function (name) {
    if (this._delegate._location.path === '') {
      throw invalidRootOperation(name);
    }
  };

  return ReferenceCompat;
}();
/**
 * A request whose promise always fails.
 */


var FailRequest =
/** @class */
function () {
  function FailRequest(error) {
    this.promise_ = Promise.reject(error);
  }
  /** @inheritDoc */


  FailRequest.prototype.getPromise = function () {
    return this.promise_;
  };
  /** @inheritDoc */


  FailRequest.prototype.cancel = function (_appDelete) {};

  return FailRequest;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */


function start(f, // eslint-disable-next-line @typescript-eslint/no-explicit-any
callback, timeout) {
  // TODO(andysoto): make this code cleaner (probably refactor into an actual
  // type instead of a bunch of functions with state shared in the closure)
  var waitSeconds = 1; // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
  // TODO: find a way to exclude Node type definition for storage because storage only works in browser
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var timeoutId = null;
  var hitTimeout = false;
  var cancelState = 0;

  function canceled() {
    return cancelState === 2;
  }

  var triggeredCallback = false;

  function triggerCallback() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!triggeredCallback) {
      triggeredCallback = true;
      callback.apply(null, args);
    }
  }

  function callWithDelay(millis) {
    timeoutId = setTimeout(function () {
      timeoutId = null;
      f(handler, canceled());
    }, millis);
  }

  function handler(success) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    if (triggeredCallback) {
      return;
    }

    if (success) {
      triggerCallback.call.apply(triggerCallback, (0, _tslib.__spreadArrays)([null, success], args));
      return;
    }

    var mustStop = canceled() || hitTimeout;

    if (mustStop) {
      triggerCallback.call.apply(triggerCallback, (0, _tslib.__spreadArrays)([null, success], args));
      return;
    }

    if (waitSeconds < 64) {
      /* TODO(andysoto): don't back off so quickly if we know we're offline. */
      waitSeconds *= 2;
    }

    var waitMillis;

    if (cancelState === 1) {
      cancelState = 2;
      waitMillis = 0;
    } else {
      waitMillis = (waitSeconds + Math.random()) * 1000;
    }

    callWithDelay(waitMillis);
  }

  var stopped = false;

  function stop(wasTimeout) {
    if (stopped) {
      return;
    }

    stopped = true;

    if (triggeredCallback) {
      return;
    }

    if (timeoutId !== null) {
      if (!wasTimeout) {
        cancelState = 2;
      }

      clearTimeout(timeoutId);
      callWithDelay(0);
    } else {
      if (!wasTimeout) {
        cancelState = 1;
      }
    }
  }

  callWithDelay(0);
  setTimeout(function () {
    hitTimeout = true;
    stop(true);
  }, timeout);
  return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */


function stop(id) {
  id(false);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var NetworkRequest =
/** @class */
function () {
  function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
    var _this = this;

    this.pendingXhr_ = null;
    this.backoffId_ = null;
    this.canceled_ = false;
    this.appDelete_ = false;
    this.url_ = url;
    this.method_ = method;
    this.headers_ = headers;
    this.body_ = body;
    this.successCodes_ = successCodes.slice();
    this.additionalRetryCodes_ = additionalRetryCodes.slice();
    this.callback_ = callback;
    this.errorCallback_ = errorCallback;
    this.progressCallback_ = progressCallback;
    this.timeout_ = timeout;
    this.pool_ = pool;
    this.promise_ = new Promise(function (resolve, reject) {
      _this.resolve_ = resolve;
      _this.reject_ = reject;

      _this.start_();
    });
  }
  /**
   * Actually starts the retry loop.
   */


  NetworkRequest.prototype.start_ = function () {
    var self = this;

    function doTheRequest(backoffCallback, canceled) {
      if (canceled) {
        backoffCallback(false, new RequestEndStatus(false, null, true));
        return;
      }

      var xhr = self.pool_.createXhrIo();
      self.pendingXhr_ = xhr;

      function progressListener(progressEvent) {
        var loaded = progressEvent.loaded;
        var total = progressEvent.lengthComputable ? progressEvent.total : -1;

        if (self.progressCallback_ !== null) {
          self.progressCallback_(loaded, total);
        }
      }

      if (self.progressCallback_ !== null) {
        xhr.addUploadProgressListener(progressListener);
      } // eslint-disable-next-line @typescript-eslint/no-floating-promises


      xhr.send(self.url_, self.method_, self.body_, self.headers_).then(function (xhr) {
        if (self.progressCallback_ !== null) {
          xhr.removeUploadProgressListener(progressListener);
        }

        self.pendingXhr_ = null;
        xhr = xhr;
        var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
        var status = xhr.getStatus();

        if (!hitServer || self.isRetryStatusCode_(status)) {
          var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
          backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
          return;
        }

        var successCode = self.successCodes_.indexOf(status) !== -1;
        backoffCallback(true, new RequestEndStatus(successCode, xhr));
      });
    }
    /**
     * @param requestWentThrough - True if the request eventually went
     *     through, false if it hit the retry limit or was canceled.
     */


    function backoffDone(requestWentThrough, status) {
      var resolve = self.resolve_;
      var reject = self.reject_;
      var xhr = status.xhr;

      if (status.wasSuccessCode) {
        try {
          var result = self.callback_(xhr, xhr.getResponseText());

          if (isJustDef(result)) {
            resolve(result);
          } else {
            resolve();
          }
        } catch (e) {
          reject(e);
        }
      } else {
        if (xhr !== null) {
          var err = unknown();
          err.serverResponse = xhr.getResponseText();

          if (self.errorCallback_) {
            reject(self.errorCallback_(xhr, err));
          } else {
            reject(err);
          }
        } else {
          if (status.canceled) {
            var err = self.appDelete_ ? appDeleted() : canceled();
            reject(err);
          } else {
            var err = retryLimitExceeded();
            reject(err);
          }
        }
      }
    }

    if (this.canceled_) {
      backoffDone(false, new RequestEndStatus(false, null, true));
    } else {
      this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
    }
  };
  /** @inheritDoc */


  NetworkRequest.prototype.getPromise = function () {
    return this.promise_;
  };
  /** @inheritDoc */


  NetworkRequest.prototype.cancel = function (appDelete) {
    this.canceled_ = true;
    this.appDelete_ = appDelete || false;

    if (this.backoffId_ !== null) {
      stop(this.backoffId_);
    }

    if (this.pendingXhr_ !== null) {
      this.pendingXhr_.abort();
    }
  };

  NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
    // The codes for which to retry came from this page:
    // https://cloud.google.com/storage/docs/exponential-backoff
    var isFiveHundredCode = status >= 500 && status < 600;
    var extraRetryCodes = [// Request Timeout: web server didn't receive full request in time.
    408, // Too Many Requests: you're getting rate-limited, basically.
    429];
    var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
    var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
    return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
  };

  return NetworkRequest;
}();
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled - Defaults to false.
 */


var RequestEndStatus =
/** @class */
function () {
  function RequestEndStatus(wasSuccessCode, xhr, canceled) {
    this.wasSuccessCode = wasSuccessCode;
    this.xhr = xhr;
    this.canceled = !!canceled;
  }

  return RequestEndStatus;
}();

function addAuthHeader_(headers, authToken) {
  if (authToken !== null && authToken.length > 0) {
    headers['Authorization'] = 'Firebase ' + authToken;
  }
}

function addVersionHeader_(headers, firebaseVersion) {
  headers['X-Firebase-Storage-Version'] = 'webjs/' + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : 'AppManager');
}

function addGmpidHeader_(headers, appId) {
  if (appId) {
    headers['X-Firebase-GMPID'] = appId;
  }
}

function makeRequest(requestInfo, appId, authToken, pool, firebaseVersion) {
  var queryPart = makeQueryString(requestInfo.urlParams);
  var url = requestInfo.url + queryPart;
  var headers = Object.assign({}, requestInfo.headers);
  addGmpidHeader_(headers, appId);
  addAuthHeader_(headers, authToken);
  addVersionHeader_(headers, firebaseVersion);
  return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function isUrl(path) {
  return /^[A-Za-z]+:\/\//.test(path);
}
/**
 * Returns a firebaseStorage.Reference for the given url.
 */


function refFromURL(service, url) {
  return new Reference(service, url);
}
/**
 * Returns a firebaseStorage.Reference for the given path in the default
 * bucket.
 */


function refFromPath(ref, path) {
  if (ref instanceof StorageService) {
    var service = ref;

    if (service._bucket == null) {
      throw noDefaultBucket();
    }

    var reference = new Reference(service, service._bucket);

    if (path != null) {
      return refFromPath(reference, path);
    } else {
      return reference;
    }
  } else {
    // ref is a Reference
    if (path !== undefined) {
      if (path.includes('..')) {
        throw invalidArgument('`path` param cannot contain ".."');
      }

      return _getChild(ref, path);
    } else {
      return ref;
    }
  }
}

function ref(serviceOrRef, pathOrUrl) {
  if (pathOrUrl && isUrl(pathOrUrl)) {
    if (serviceOrRef instanceof StorageService) {
      return refFromURL(serviceOrRef, pathOrUrl);
    } else {
      throw invalidArgument('To use ref(service, url), the first argument must be a Storage instance.');
    }
  } else {
    return refFromPath(serviceOrRef, pathOrUrl);
  }
}

function extractBucket(config) {
  var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];

  if (bucketString == null) {
    return null;
  }

  return Location.makeFromBucketSpec(bucketString);
}
/**
 * A service that provides Firebase Storage Reference instances.
 * @public
 * @param opt_url - gs:// url to a custom Storage Bucket
 */


var StorageService =
/** @class */
function () {
  function StorageService(
  /**
   * FirebaseApp associated with this StorageService instance.
   */
  app, _authProvider, _pool, _url, _firebaseVersion) {
    this.app = app;
    this._authProvider = _authProvider;
    this._pool = _pool;
    this._url = _url;
    this._firebaseVersion = _firebaseVersion;
    this._bucket = null;
    this._appId = null;
    this._deleted = false;
    this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
    this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
    this._requests = new Set();

    if (_url != null) {
      this._bucket = Location.makeFromBucketSpec(_url);
    } else {
      this._bucket = extractBucket(this.app.options);
    }
  }

  Object.defineProperty(StorageService.prototype, "maxUploadRetryTime", {
    /**
     * The maximum time to retry uploads in milliseconds.
     */
    get: function () {
      return this._maxUploadRetryTime;
    },
    set: function (time) {
      validateNumber('time',
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY, time);
      this._maxUploadRetryTime = time;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StorageService.prototype, "maxOperationRetryTime", {
    /**
     * The maximum time to retry operations other than uploads or downloads in
     * milliseconds.
     */
    get: function () {
      return this._maxOperationRetryTime;
    },
    set: function (time) {
      validateNumber('time',
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY, time);
      this._maxOperationRetryTime = time;
    },
    enumerable: false,
    configurable: true
  });

  StorageService.prototype._getAuthToken = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var auth, tokenData;
      return (0, _tslib.__generator)(this, function (_a) {
        switch (_a.label) {
          case 0:
            auth = this._authProvider.getImmediate({
              optional: true
            });
            if (!auth) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , auth.getToken()];

          case 1:
            tokenData = _a.sent();

            if (tokenData !== null) {
              return [2
              /*return*/
              , tokenData.accessToken];
            }

            _a.label = 2;

          case 2:
            return [2
            /*return*/
            , null];
        }
      });
    });
  };
  /**
   * Stop running requests and prevent more from being created.
   */


  StorageService.prototype._delete = function () {
    this._deleted = true;

    this._requests.forEach(function (request) {
      return request.cancel();
    });

    this._requests.clear();

    return Promise.resolve();
  };
  /**
   * Returns a new firebaseStorage.Reference object referencing this StorageService
   * at the given Location.
   */


  StorageService.prototype._makeStorageReference = function (loc) {
    return new Reference(this, loc);
  };
  /**
   * @param requestInfo - HTTP RequestInfo object
   * @param authToken - Firebase auth token
   */


  StorageService.prototype._makeRequest = function (requestInfo, authToken) {
    var _this = this;

    if (!this._deleted) {
      var request_1 = makeRequest(requestInfo, this._appId, authToken, this._pool, this._firebaseVersion);

      this._requests.add(request_1); // Request removes itself from set when complete.


      request_1.getPromise().then(function () {
        return _this._requests.delete(request_1);
      }, function () {
        return _this._requests.delete(request_1);
      });
      return request_1;
    } else {
      return new FailRequest(appDeleted());
    }
  };

  return StorageService;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 */


var StorageServiceCompat =
/** @class */
function () {
  function StorageServiceCompat(app, _delegate) {
    var _this = this;

    this.app = app;
    this._delegate = _delegate;
    this.INTERNAL = {
      /**
       * Called when the associated app is deleted.
       */
      delete: function () {
        return _this._delegate._delete();
      }
    };
  }

  Object.defineProperty(StorageServiceCompat.prototype, "maxOperationRetryTime", {
    get: function () {
      return this._delegate.maxOperationRetryTime;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StorageServiceCompat.prototype, "maxUploadRetryTime", {
    get: function () {
      return this._delegate.maxUploadRetryTime;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Returns a firebaseStorage.Reference for the given path in the default
   * bucket.
   */

  StorageServiceCompat.prototype.ref = function (path) {
    if (isUrl(path)) {
      throw invalidArgument('ref() expected a child path but got a URL, use refFromURL instead.');
    }

    return new ReferenceCompat(ref(this._delegate, path), this);
  };
  /**
   * Returns a firebaseStorage.Reference object for the given absolute URL,
   * which must be a gs:// or http[s]:// URL.
   */


  StorageServiceCompat.prototype.refFromURL = function (url) {
    if (!isUrl(url)) {
      throw invalidArgument('refFromURL() expected a full URL but got a child path, use ref() instead.');
    }

    try {
      Location.makeFromUrl(url);
    } catch (e) {
      throw invalidArgument('refFromUrl() expected a valid full URL but got an invalid one.');
    }

    return new ReferenceCompat(ref(this._delegate, url), this);
  };

  StorageServiceCompat.prototype.setMaxUploadRetryTime = function (time) {
    this._delegate.maxUploadRetryTime = time;
  };

  StorageServiceCompat.prototype.setMaxOperationRetryTime = function (time) {
    this._delegate.maxOperationRetryTime = time;
  };

  return StorageServiceCompat;
}();

var name = "@firebase/storage";
var version = "0.4.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Type constant for Firebase Storage.
 */

var STORAGE_TYPE = 'storage';

function factory(container, url) {
  // Dependencies
  // TODO: This should eventually be 'app-compat'
  var app = container.getProvider('app').getImmediate();
  var authProvider = container.getProvider('auth-internal'); // TODO: get StorageService instance from component framework instead
  // of creating a new one.

  var storageServiceCompat = new StorageServiceCompat(app, new StorageService(app, authProvider, new XhrIoPool(), url, _app.default.SDK_VERSION));
  return storageServiceCompat;
}

function registerStorage(instance) {
  var namespaceExports = {
    // no-inline
    TaskState: TaskState,
    TaskEvent: TaskEvent,
    StringFormat: StringFormat,
    Storage: StorageService,
    Reference: ReferenceCompat
  };
  instance.INTERNAL.registerComponent(new _component.Component(STORAGE_TYPE, factory, "PUBLIC"
  /* PUBLIC */
  ).setServiceProps(namespaceExports).setMultipleInstances(true));
  instance.registerVersion(name, version);
}

registerStorage(_app.default);
},{"@firebase/app":"../node_modules/@firebase/app/dist/index.esm.js","tslib":"../node_modules/tslib/tslib.es6.js","@firebase/util":"../node_modules/@firebase/util/dist/index.esm.js","@firebase/component":"../node_modules/@firebase/component/dist/index.esm.js"}],"../node_modules/firebase/storage/dist/index.esm.js":[function(require,module,exports) {
"use strict";

require("@firebase/storage");
},{"@firebase/storage":"../node_modules/@firebase/storage/dist/index.esm.js"}],"../node_modules/firebase/app/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _app.default;
  }
});

var _app = _interopRequireDefault(require("@firebase/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = "firebase";
var version = "8.2.10";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

_app.default.registerVersion(name, version, 'app');
},{"@firebase/app":"../node_modules/@firebase/app/dist/index.esm.js"}],"js/firebase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = void 0;

require("firebase/storage");

var _app = _interopRequireDefault(require("firebase/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.initializeApp({
  apiKey: "AIzaSyD-u7_FvojBbGeKdPSqwIDl6gcXUKw6V9Q",
  authDomain: "file-loader-revasa.firebaseapp.com",
  projectId: "file-loader-revasa",
  storageBucket: "file-loader-revasa.appspot.com",
  messagingSenderId: "133800782771",
  appId: "1:133800782771:web:79292b836a6b2a84b8f9c6"
});

var storage = _app.default.storage();

exports.storage = storage;
},{"firebase/storage":"../node_modules/firebase/storage/dist/index.esm.js","firebase/app":"../node_modules/firebase/app/dist/index.esm.js"}],"../node_modules/lodash.merge/index.js":[function(require,module,exports) {
var global = arguments[3];

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
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

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
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

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

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

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

},{}],"js/helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageFromFile = getImageFromFile;
exports.bytesToSize = bytesToSize;
exports.noop = noop;
exports.getPercentage = void 0;

function getImageFromFile(file) {
  return new Promise(function (resolve) {
    if (!file.type.includes('image')) {
      return resolve('');
    }

    var reader = new FileReader();

    reader.onload = function (ev) {
      return resolve(ev.target.result);
    };

    reader.readAsDataURL(file);
  });
}

function bytesToSize() {
  var bytes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  var i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}

var getPercentage = function getPercentage(a, b) {
  return Math.round(a * 100 / b);
};

exports.getPercentage = getPercentage;

function noop() {}
},{}],"js/FileLoader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaults = {
  selectors: {
    fileInput: '[data-file-input]',
    openButton: '[data-open-button]',
    uploadButton: '[data-upload-button]',
    previewContainer: '[data-preview-container]',
    filePreview: '[data-file-preview]',
    removeButton: '[data-remove-button]',
    progressBarPercent: '[data-progress-bar-percent]'
  },
  classes: {
    showFiles: '_show-files',
    renderedAllPreviews: '_rendered-all-previews',
    uploading: '_uploading',
    removing: '_removing'
  },
  multiple: false,
  accept: [],
  files: [],
  uploadHandler: _helpers.noop
};

var FileLoader = /*#__PURE__*/function () {
  function FileLoader(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FileLoader);

    if (!element) {
      throw new Error("Need element. Element equals ".concat(el));
    }

    this.$el = element;
    this.options = (0, _lodash.default)({}, defaults, options);

    this._cache();

    this._bindEvents();

    this._updateAttributes();
  }

  _createClass(FileLoader, [{
    key: "_cache",
    value: function _cache() {
      var selectors = this.options.selectors;
      this.$fileInput = this.$el.querySelector(selectors.fileInput);
      this.$openButton = this.$el.querySelector(selectors.openButton);
      this.$uploadButton = this.$el.querySelector(selectors.uploadButton);
      this.$preview = this.$el.querySelector(selectors.previewContainer);
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this = this;

      this.$fileInput.addEventListener('change', this._onChange.bind(this));
      this.$openButton.addEventListener('click', function () {
        return _this.open();
      });
      this.$uploadButton.addEventListener('click', this._onClickUpload.bind(this));
      this.$preview.addEventListener('click', this._onClickRemove.bind(this));
      this.$preview.addEventListener('transitionend', this._onTransitionEnd.bind(this));
    }
  }, {
    key: "_updateAttributes",
    value: function _updateAttributes() {
      var _this$options = this.options,
          multiple = _this$options.multiple,
          accept = _this$options.accept;

      if (multiple) {
        this.$fileInput.setAttribute('multiple', true);
      }

      if (accept.length) {
        this.$fileInput.setAttribute('accept', accept.join(','));
      }
    }
  }, {
    key: "_onChange",
    value: function _onChange(ev) {
      var files = _toConsumableArray(ev.currentTarget.files);

      if (files.length) {
        this.render(files);
      }
    }
  }, {
    key: "_onClickRemove",
    value: function _onClickRemove(ev) {
      var _this$options2 = this.options,
          files = _this$options2.files,
          selectors = _this$options2.selectors,
          classes = _this$options2.classes;
      var $removeBtn = ev.target.closest(selectors.removeButton);

      if (!$removeBtn) {
        return;
      }

      var $filePreview = $removeBtn.closest(selectors.filePreview);
      var position = Number($filePreview.dataset.filePosition);
      var index = files.findIndex(function (file) {
        return file.index === position;
      });
      files.splice(index, 1);
      $filePreview.classList.add(classes.removing);
    }
  }, {
    key: "_onTransitionEnd",
    value: function _onTransitionEnd(ev) {
      var $target = ev.target;

      if ($target.matches(this.options.selectors.filePreview)) {
        this._removeFilePreviewHandler($target);
      }
    }
  }, {
    key: "_onClickUpload",
    value: function _onClickUpload() {
      var _this$options3 = this.options,
          files = _this$options3.files,
          classes = _this$options3.classes,
          uploadHandler = _this$options3.uploadHandler;
      this.$el.classList.add(classes.uploading);
      uploadHandler(files, this);
    }
  }, {
    key: "_renderedAllPreviewsHandler",
    value: function _renderedAllPreviewsHandler() {
      this.$progressBarPercents = this.$preview.querySelectorAll(this.options.selectors.progressBarPercent);
      this.$el.classList.add(this.options.classes.renderedAllPreviews);
    }
  }, {
    key: "_removeFilePreviewHandler",
    value: function _removeFilePreviewHandler($filePreview) {
      $filePreview.remove();

      if (!this.$preview.children.length) {
        this.$el.classList.remove(this.options.classes.showFiles);
      }
    }
  }, {
    key: "_getImageHTML",
    value: function _getImageHTML(file) {
      if (file.imageSrc.length) {
        return "<img src=\"".concat(file.imageSrc, "\" class=\"file-preview__image\" alt=\"").concat(file.name, "\"/>");
      }

      return "\n            <div class=\"file-preview__no-image\">\n                <span class=\"file-preview__no-image-text\">No image</span>\n            </div>\n        ";
    }
  }, {
    key: "_getFileHTML",
    value: function _getFileHTML(file) {
      return "\n            <div class=\"file-preview\" data-file-preview data-file-position=\"".concat(file.index, "\">\n                <button type=\"button\" class=\"button file-preview__remove\" data-remove-button>\n                    <svg class=\"file-preview__remove-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"348.333\" height=\"348.334\" viewBox=\"0 0 348.333 348.334\">\n                        <path d=\"M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z\"/>\n                    </svg>\n                </button>\n\n                <div class=\"file-preview__square\">\n                    ").concat(this._getImageHTML(file), "\n                </div>\n\n                <p class=\"file-preview__info\">\n                    <span class=\"file-preview__name\">").concat(file.name, "</span>\n                    <span class=\"file-preview__size\">").concat((0, _helpers.bytesToSize)(file.size), "</span>\n                </p>\n                \n                <div class=\"progress-bar file-preview__progress-bar\">\n                    <span class=\"progress-bar__bar\" data-progress-bar-percent></span>\n                </div>\n            </div>\n        ");
    }
  }, {
    key: "render",
    value: function render(files) {
      var _this2 = this;

      var renderedCount = 0;
      this.options.files = files;
      this.$preview.innerHTML = '';
      this.$el.classList.remove(this.options.classes.renderedAllPreviews);
      this.$el.classList.add(this.options.classes.showFiles);
      files.forEach(function (file, index) {
        var name = file.name,
            size = file.size;
        (0, _helpers.getImageFromFile)(file).then(function (imageSrc) {
          _this2.appendPreviewFile({
            index: index,
            name: name,
            size: size,
            imageSrc: imageSrc
          });

          renderedCount += 1;

          if (renderedCount === files.length) {
            _this2._renderedAllPreviewsHandler();
          }
        });
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.$fileInput.click();
    }
  }, {
    key: "appendPreviewFile",
    value: function appendPreviewFile(file) {
      this.$preview.insertAdjacentHTML('beforeend', this._getFileHTML(file));
    }
  }, {
    key: "updatePercentage",
    value: function updatePercentage(index, percent) {
      var $progressBar = this.$progressBarPercents[index];
      var value = "".concat(percent, "%");

      if ($progressBar) {
        $progressBar.textContent = value;
        $progressBar.style.width = value;
      }
    }
  }]);

  return FileLoader;
}();

exports.default = FileLoader;
},{"lodash.merge":"../node_modules/lodash.merge/index.js","./helpers":"js/helpers.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _firebase = require("./firebase");

var _FileLoader = _interopRequireDefault(require("./FileLoader"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _FileLoader.default(document.querySelector('[data-file-loader]'), {
  multiple: true,
  accept: ['.png', '.jpg', '.jpeg', '.gif', '.pdf', '.doc'],
  uploadHandler: function uploadHandler(files, fileLoader) {
    files.forEach(function (file, index) {
      var ref = _firebase.storage.ref("images/".concat(file.name));

      var task = ref.put(file);
      task.on('state_changed', function (_ref) {
        var bytesTransferred = _ref.bytesTransferred,
            totalBytes = _ref.totalBytes;
        var percent = (0, _helpers.getPercentage)(bytesTransferred, totalBytes);
        fileLoader.updatePercentage(index, percent);
      }, function (error) {
        console.log('%cerror', 'font-weight:900; color:firebrick;', error);
      }, function () {
        console.log('%ccomplete', 'font-weight:900; color:firebrick;');
        task.snapshot.ref.getDownloadURL().then(function (url) {
          console.log('%curl', 'font-weight:900; color:firebrick;', url);
        });
      });
    });
  }
});
},{"./firebase":"js/firebase.js","./FileLoader":"js/FileLoader.js","./helpers":"js/helpers.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36411" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map