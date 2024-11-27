"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/react-native-uuid/dist/utils.js
var require_utils = __commonJS({
  "../../node_modules/react-native-uuid/dist/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bytesToString = exports2.stringToBytes = exports2.NIL = exports2.X500 = exports2.OID = exports2.URL = exports2.DNS = exports2.hexToByte = exports2.byteToHex = void 0;
    var _byteToHex = [];
    var _hexToByte = {};
    for (i = 0; i < 256; i++) {
      _byteToHex[i] = (i + 256).toString(16).substr(1);
      _hexToByte[_byteToHex[i]] = i;
    }
    var i;
    exports2.byteToHex = _byteToHex;
    exports2.hexToByte = _hexToByte;
    exports2.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports2.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports2.OID = "6ba7b812-9dad-11d1-80b4-00c04fd430c8";
    exports2.X500 = "6ba7b814-9dad-11d1-80b4-00c04fd430c8";
    exports2.NIL = "00000000-0000-0000-0000-000000000000";
    var stringToBytes = (str) => {
      str = unescape(encodeURIComponent(str));
      const bytes = new Uint8Array(str.length);
      for (let j = 0; j < str.length; ++j) {
        bytes[j] = str.charCodeAt(j);
      }
      return bytes;
    };
    exports2.stringToBytes = stringToBytes;
    var bytesToString = (buf) => {
      const bufferView = new Uint8Array(buf, 0, buf.byteLength);
      return String.fromCharCode.apply(null, Array.from(bufferView));
    };
    exports2.bytesToString = bytesToString;
  }
});

// ../../node_modules/react-native-uuid/dist/parse.js
var require_parse = __commonJS({
  "../../node_modules/react-native-uuid/dist/parse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parse = void 0;
    var utils_1 = require_utils();
    var parse = (s, buf, offset) => {
      let i = buf && offset || 0;
      let ii = 0;
      buf = buf || [];
      s.toLowerCase().replace(/[0-9a-f]{2}/g, (oct) => {
        if (ii < 16 && buf) {
          buf[i + ii++] = utils_1.hexToByte[oct];
        }
        return "";
      });
      while (ii < 16) {
        buf[i + ii++] = 0;
      }
      return buf;
    };
    exports2.parse = parse;
  }
});

// ../../node_modules/react-native-uuid/dist/unparse.js
var require_unparse = __commonJS({
  "../../node_modules/react-native-uuid/dist/unparse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.unparse = void 0;
    var utils_1 = require_utils();
    var unparse = (buf, offset) => {
      let i = offset || 0;
      let bth = utils_1.byteToHex;
      return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
    };
    exports2.unparse = unparse;
  }
});

// ../../node_modules/react-native-uuid/dist/regex.js
var require_regex = __commonJS({
  "../../node_modules/react-native-uuid/dist/regex.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    exports2.default = REGEX;
  }
});

// ../../node_modules/react-native-uuid/dist/validate.js
var require_validate = __commonJS({
  "../../node_modules/react-native-uuid/dist/validate.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validate = void 0;
    var regex_1 = __importDefault(require_regex());
    var validate2 = (uuid) => {
      return typeof uuid === "string" && regex_1.default.test(uuid);
    };
    exports2.validate = validate2;
  }
});

// ../../node_modules/react-native-uuid/dist/version.js
var require_version = __commonJS({
  "../../node_modules/react-native-uuid/dist/version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.version = void 0;
    var validate_1 = require_validate();
    var version = (uuid) => {
      if (!(0, validate_1.validate)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      return parseInt(uuid.substr(14, 1), 16);
    };
    exports2.version = version;
  }
});

// ../../node_modules/react-native-uuid/dist/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/react-native-uuid/dist/stringify.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stringify = void 0;
    var validate_1 = require_validate();
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).substr(1));
    }
    var stringify = (arr, offset = 0) => {
      const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
      if (!(0, validate_1.validate)(uuid)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return uuid;
    };
    exports2.stringify = stringify;
  }
});

// ../../node_modules/react-native-uuid/dist/rng.js
var require_rng = __commonJS({
  "../../node_modules/react-native-uuid/dist/rng.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.rng = void 0;
    var min = 0;
    var max = 256;
    var RANDOM_LENGTH = 16;
    var rng = () => {
      let result = new Array(RANDOM_LENGTH);
      for (let j = 0; j < RANDOM_LENGTH; j++) {
        result[j] = 255 & Math.random() * (max - min) + min;
      }
      return result;
    };
    exports2.rng = rng;
  }
});

// ../../node_modules/react-native-uuid/dist/v1.js
var require_v1 = __commonJS({
  "../../node_modules/react-native-uuid/dist/v1.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.v1 = void 0;
    var stringify_1 = require_stringify();
    var rng_1 = require_rng();
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    var v1 = (options, buf, offset = 0) => {
      let i = buf && offset || 0;
      const b = buf || new Uint8Array(16);
      let node = options && options.node ? options.node : _nodeId;
      let clockseq = options && options.clockseq ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        const seedBytes = options && options.random ? options.random : options && options.rng ? options.rng() : (0, rng_1.rng)();
        if (node == null) {
          node = _nodeId = [
            seedBytes[0] | 1,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
          ];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      let msecs = options && options.msecs ? options.msecs : Date.now();
      let nsecs = options && options.nsecs ? options.nsecs : _lastNSecs + 1;
      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options && !options.clockseq) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options && !options.nsecs) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      const tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (let n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf || (0, stringify_1.stringify)(b);
    };
    exports2.v1 = v1;
  }
});

// ../../node_modules/react-native-uuid/dist/v35.js
var require_v35 = __commonJS({
  "../../node_modules/react-native-uuid/dist/v35.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.v35 = void 0;
    var stringify_1 = require_stringify();
    var parse_1 = require_parse();
    var utils_1 = require_utils();
    var v35 = (name, version, hashfunc) => {
      const generateUUID = (value, namespace, buf, offset = 0) => {
        if (typeof value === "string") {
          value = (0, utils_1.stringToBytes)(value);
        }
        if (typeof namespace === "string") {
          namespace = (0, parse_1.parse)(namespace);
        }
        if (namespace && namespace.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = (0, utils_1.stringToBytes)(hashfunc((0, utils_1.bytesToString)(bytes)));
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }
        }
        return buf ? buf : (0, stringify_1.stringify)(bytes);
      };
      return generateUUID;
    };
    exports2.v35 = v35;
  }
});

// ../../node_modules/react-native-uuid/dist/md5.js
var require_md5 = __commonJS({
  "../../node_modules/react-native-uuid/dist/md5.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.any_hmac_md5 = exports2.b64_hmac_md5 = exports2.hex_hmac_md5 = exports2.any_md5 = exports2.b64_md5 = exports2.hex_md5 = void 0;
    var hexcase = 0;
    var b64pad = "";
    var hex_md5 = (s) => rstr2hex(rstr_md5(str2rstr_utf8(s)));
    exports2.hex_md5 = hex_md5;
    exports2.default = exports2.hex_md5;
    var b64_md5 = (s) => rstr2b64(rstr_md5(str2rstr_utf8(s)));
    exports2.b64_md5 = b64_md5;
    var any_md5 = (s, e) => rstr2any(rstr_md5(str2rstr_utf8(s)), e);
    exports2.any_md5 = any_md5;
    var hex_hmac_md5 = (k, d) => rstr2hex(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)));
    exports2.hex_hmac_md5 = hex_hmac_md5;
    var b64_hmac_md5 = (k, d) => rstr2b64(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)));
    exports2.b64_hmac_md5 = b64_hmac_md5;
    var any_hmac_md5 = (k, d, e) => rstr2any(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)), e);
    exports2.any_hmac_md5 = any_hmac_md5;
    var rstr_md5 = (s) => binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    var rstr_hmac_md5 = (key, data) => {
      var bkey = rstr2binl(key);
      if (bkey.length > 16) {
        bkey = binl_md5(bkey, key.length * 8);
      }
      let ipad = Array(16);
      let opad = Array(16);
      for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 909522486;
        opad[i] = bkey[i] ^ 1549556828;
      }
      var hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
      return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    };
    var rstr2hex = (input) => {
      try {
        hexcase;
      } catch (e) {
        hexcase = 0;
      }
      var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
      var output = "";
      var x;
      for (var i = 0; i < input.length; i++) {
        x = input.charCodeAt(i);
        output += hex_tab.charAt(x >>> 4 & 15) + hex_tab.charAt(x & 15);
      }
      return output;
    };
    var rstr2b64 = (input) => {
      try {
        b64pad;
      } catch (e) {
        b64pad = "";
      }
      var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var output = "";
      var len = input.length;
      for (var i = 0; i < len; i += 3) {
        var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
        for (var j = 0; j < 4; j++) {
          if (i * 8 + j * 6 > input.length * 8) {
            output += b64pad;
          } else {
            output += tab.charAt(triplet >>> 6 * (3 - j) & 63);
          }
        }
      }
      return output;
    };
    var rstr2any = (input, encoding) => {
      var divisor = encoding.length;
      var i, j, q, x, quotient;
      var dividend = Array(Math.ceil(input.length / 2));
      for (i = 0; i < dividend.length; i++) {
        dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
      }
      var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
      var remainders = Array(full_length);
      for (j = 0; j < full_length; j++) {
        quotient = [];
        x = 0;
        for (i = 0; i < dividend.length; i++) {
          x = (x << 16) + dividend[i];
          q = Math.floor(x / divisor);
          x -= q * divisor;
          if (quotient.length > 0 || q > 0) {
            quotient[quotient.length] = q;
          }
        }
        remainders[j] = x;
        dividend = quotient;
      }
      var output = "";
      for (i = remainders.length - 1; i >= 0; i--) {
        output += encoding.charAt(remainders[i]);
      }
      return output;
    };
    var str2rstr_utf8 = (input) => {
      var output = "";
      var i = -1;
      var x, y;
      while (++i < input.length) {
        x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (x >= 55296 && x <= 56319 && y >= 56320 && y <= 57343) {
          x = 65536 + ((x & 1023) << 10) + (y & 1023);
          i++;
        }
        if (x <= 127) {
          output += String.fromCharCode(x);
        } else if (x <= 2047) {
          output += String.fromCharCode(192 | x >>> 6 & 31, 128 | x & 63);
        } else if (x <= 65535) {
          output += String.fromCharCode(224 | x >>> 12 & 15, 128 | x >>> 6 & 63, 128 | x & 63);
        } else if (x <= 2097151) {
          output += String.fromCharCode(240 | x >>> 18 & 7, 128 | x >>> 12 & 63, 128 | x >>> 6 & 63, 128 | x & 63);
        }
      }
      return output;
    };
    var rstr2binl = (input) => {
      let output = Array(input.length >> 2);
      for (var i = 0; i < output.length; i++) {
        output[i] = 0;
      }
      for (var i = 0; i < input.length * 8; i += 8) {
        output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
      }
      return output;
    };
    var binl2rstr = (input) => {
      var output = "";
      for (var i = 0; i < input.length * 32; i += 8) {
        output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
      }
      return output;
    };
    var binl_md5 = (x, len) => {
      x[len >> 5] |= 128 << len % 32;
      x[(len + 64 >>> 9 << 4) + 14] = len;
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;
      for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
      }
      return [a, b, c, d];
    };
    var md5_cmn = (q, a, b, x, s, t) => safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    var md5_ff = (a, b, c, d, x, s, t) => md5_cmn(b & c | ~b & d, a, b, x, s, t);
    var md5_gg = (a, b, c, d, x, s, t) => md5_cmn(b & d | c & ~d, a, b, x, s, t);
    var md5_hh = (a, b, c, d, x, s, t) => md5_cmn(b ^ c ^ d, a, b, x, s, t);
    var md5_ii = (a, b, c, d, x, s, t) => md5_cmn(c ^ (b | ~d), a, b, x, s, t);
    var safe_add = (x, y) => {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    };
    var bit_rol = (num, cnt) => num << cnt | num >>> 32 - cnt;
  }
});

// ../../node_modules/react-native-uuid/dist/v3.js
var require_v3 = __commonJS({
  "../../node_modules/react-native-uuid/dist/v3.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.v3 = void 0;
    var v35_1 = require_v35();
    var md5_1 = __importDefault(require_md5());
    exports2.v3 = (0, v35_1.v35)("v3", 48, md5_1.default);
  }
});

// ../../node_modules/react-native-uuid/dist/v4.js
var require_v4 = __commonJS({
  "../../node_modules/react-native-uuid/dist/v4.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.v4 = v4;
    var unparse_1 = require_unparse();
    var rng_1 = require_rng();
    function v4(options, buf, offset) {
      let i = buf && offset || 0;
      let rnds = (0, rng_1.rng)();
      if (options && !(options instanceof String)) {
        if (options.random) {
          rnds = options.random;
        }
        if (options.rng) {
          rnds = options.rng();
        }
      }
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        for (var ii = 0; ii < 16; ii++) {
          buf[i + ii] = rnds[ii];
        }
      }
      return buf || (0, unparse_1.unparse)(rnds);
    }
  }
});

// ../../node_modules/react-native-uuid/dist/sha1.js
var require_sha1 = __commonJS({
  "../../node_modules/react-native-uuid/dist/sha1.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.any_hmac_sha1 = exports2.b64_hmac_sha1 = exports2.hex_hmac_sha1 = exports2.any_sha1 = exports2.b64_sha1 = exports2.hex_sha1 = void 0;
    var hexcase = 0;
    var b64pad = "";
    var hex_sha1 = (s) => rstr2hex(rstr_sha1(str2rstr_utf8(s)));
    exports2.hex_sha1 = hex_sha1;
    exports2.default = exports2.hex_sha1;
    var b64_sha1 = (s) => rstr2b64(rstr_sha1(str2rstr_utf8(s)));
    exports2.b64_sha1 = b64_sha1;
    var any_sha1 = (s, e) => rstr2any(rstr_sha1(str2rstr_utf8(s)), e);
    exports2.any_sha1 = any_sha1;
    var hex_hmac_sha1 = (k, d) => rstr2hex(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d)));
    exports2.hex_hmac_sha1 = hex_hmac_sha1;
    var b64_hmac_sha1 = (k, d) => rstr2b64(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d)));
    exports2.b64_hmac_sha1 = b64_hmac_sha1;
    var any_hmac_sha1 = (k, d, e) => rstr2any(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d)), e);
    exports2.any_hmac_sha1 = any_hmac_sha1;
    var rstr_sha1 = (s) => binb2rstr(binb_sha1(rstr2binb(s), s.length * 8));
    var rstr_hmac_sha1 = (key, data) => {
      let bkey = rstr2binb(key);
      if (bkey.length > 16) {
        bkey = binb_sha1(bkey, key.length * 8);
      }
      let ipad = Array(16);
      let opad = Array(16);
      for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 909522486;
        opad[i] = bkey[i] ^ 1549556828;
      }
      var hash = binb_sha1(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
      return binb2rstr(binb_sha1(opad.concat(hash), 512 + 160));
    };
    var rstr2hex = (input) => {
      try {
        hexcase;
      } catch (e) {
        hexcase = 0;
      }
      var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
      var output = "";
      var x;
      for (var i = 0; i < input.length; i++) {
        x = input.charCodeAt(i);
        output += hex_tab.charAt(x >>> 4 & 15) + hex_tab.charAt(x & 15);
      }
      return output;
    };
    var rstr2b64 = (input) => {
      try {
        b64pad;
      } catch (e) {
        b64pad = "";
      }
      var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var output = "";
      var len = input.length;
      for (var i = 0; i < len; i += 3) {
        var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
        for (var j = 0; j < 4; j++) {
          if (i * 8 + j * 6 > input.length * 8) {
            output += b64pad;
          } else {
            output += tab.charAt(triplet >>> 6 * (3 - j) & 63);
          }
        }
      }
      return output;
    };
    var rstr2any = (input, encoding) => {
      var divisor = encoding.length;
      var remainders = [];
      var i, q, x, quotient;
      var dividend = Array(Math.ceil(input.length / 2));
      for (i = 0; i < dividend.length; i++) {
        dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
      }
      while (dividend.length > 0) {
        quotient = [];
        x = 0;
        for (i = 0; i < dividend.length; i++) {
          x = (x << 16) + dividend[i];
          q = Math.floor(x / divisor);
          x -= q * divisor;
          if (quotient.length > 0 || q > 0) {
            quotient[quotient.length] = q;
          }
        }
        remainders[remainders.length] = x;
        dividend = quotient;
      }
      var output = "";
      for (i = remainders.length - 1; i >= 0; i--) {
        output += encoding.charAt(remainders[i]);
      }
      var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
      for (i = output.length; i < full_length; i++) {
        output = encoding[0] + output;
      }
      return output;
    };
    var str2rstr_utf8 = (input) => {
      var output = "";
      var i = -1;
      var x, y;
      while (++i < input.length) {
        x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (x >= 55296 && x <= 56319 && y >= 56320 && y <= 57343) {
          x = 65536 + ((x & 1023) << 10) + (y & 1023);
          i++;
        }
        if (x <= 127) {
          output += String.fromCharCode(x);
        } else if (x <= 2047) {
          output += String.fromCharCode(192 | x >>> 6 & 31, 128 | x & 63);
        } else if (x <= 65535) {
          output += String.fromCharCode(224 | x >>> 12 & 15, 128 | x >>> 6 & 63, 128 | x & 63);
        } else if (x <= 2097151) {
          output += String.fromCharCode(240 | x >>> 18 & 7, 128 | x >>> 12 & 63, 128 | x >>> 6 & 63, 128 | x & 63);
        }
      }
      return output;
    };
    var rstr2binb = (input) => {
      var output = Array(input.length >> 2);
      for (var i = 0; i < output.length; i++) {
        output[i] = 0;
      }
      for (var i = 0; i < input.length * 8; i += 8) {
        output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << 24 - i % 32;
      }
      return output;
    };
    var binb2rstr = (input) => {
      var output = "";
      for (var i = 0; i < input.length * 32; i += 8) {
        output += String.fromCharCode(input[i >> 5] >>> 24 - i % 32 & 255);
      }
      return output;
    };
    var binb_sha1 = (x, len) => {
      x[len >> 5] |= 128 << 24 - len % 32;
      x[(len + 64 >> 9 << 4) + 15] = len;
      var w = Array(80);
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;
      var e = -1009589776;
      for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        var olde = e;
        for (var j = 0; j < 80; j++) {
          if (j < 16) {
            w[j] = x[i + j];
          } else {
            w[j] = bit_rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
          }
          let t = safe_add(safe_add(bit_rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
          e = d;
          d = c;
          c = bit_rol(b, 30);
          b = a;
          a = t;
        }
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
      }
      return [a, b, c, d, e];
    };
    var sha1_ft = (t, b, c, d) => {
      if (t < 20) {
        return b & c | ~b & d;
      }
      if (t < 40) {
        return b ^ c ^ d;
      }
      if (t < 60) {
        return b & c | b & d | c & d;
      }
      return b ^ c ^ d;
    };
    var sha1_kt = (t) => t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
    var safe_add = (x, y) => {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    };
    var bit_rol = (num, cnt) => {
      return num << cnt | num >>> 32 - cnt;
    };
  }
});

// ../../node_modules/react-native-uuid/dist/v5.js
var require_v5 = __commonJS({
  "../../node_modules/react-native-uuid/dist/v5.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.v5 = void 0;
    var v35_1 = require_v35();
    var sha1_1 = __importDefault(require_sha1());
    exports2.v5 = (0, v35_1.v35)("v5", 80, sha1_1.default);
  }
});

// ../../node_modules/react-native-uuid/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/react-native-uuid/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var parse_1 = require_parse();
    var unparse_1 = require_unparse();
    var validate_1 = require_validate();
    var version_1 = require_version();
    var v1_1 = require_v1();
    var v3_1 = require_v3();
    var v4_1 = require_v4();
    var v5_1 = require_v5();
    var utils_1 = require_utils();
    exports2.default = {
      parse: parse_1.parse,
      unparse: unparse_1.unparse,
      validate: validate_1.validate,
      version: version_1.version,
      v1: v1_1.v1,
      v3: v3_1.v3,
      v4: v4_1.v4,
      v5: v5_1.v5,
      NIL: utils_1.NIL,
      DNS: utils_1.DNS,
      URL: utils_1.URL,
      OID: utils_1.OID,
      X500: utils_1.X500
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Alias: () => Alias,
  Data: () => Data,
  Id: () => Id,
  Senha: () => Senha,
  complementarConvidado: () => complementarConvidado,
  complementarEvento: () => complementarEvento,
  criarConvidadoVazio: () => criarConvidadoVazio,
  criarEventoVazio: () => criarEventoVazio,
  eventos: () => eventos_default
});
module.exports = __toCommonJS(src_exports);

// src/evento/functions/validarConvidado.ts
function validarConvidado(convidado) {
  const erros = [];
  if (!convidado.nome) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!convidado.email) {
    erros.push("Email \xE9 obrigat\xF3rio");
  }
  return erros;
}

// src/evento/functions/complementarConvidado.ts
function complementarConvidado(convidado) {
  const erros = validarConvidado(convidado);
  if (erros.length) {
    throw new Error(erros.join("\n"));
  }
  const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;
  const temAcompanhantes = convidado.possuiAcompanhantes && convidado.confirmado && qtdeAcompanhantes > 0;
  const convidadoAtualizado = {
    ...convidado,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: temAcompanhantes
  };
  return convidadoAtualizado;
}

// src/shared/Alias.ts
var Alias = class {
  static formatar(valor) {
    return valor.replace(/ /g, "-").toLowerCase();
  }
};

// src/shared/Id.ts
var import_react_native_uuid = __toESM(require_dist());
var import_uuid = require("uuid");
var Id = class {
  static novo() {
    return import_react_native_uuid.default.v4();
  }
  static valido(id) {
    return (0, import_uuid.validate)(id);
  }
};
console.log(Id.novo());

// src/shared/Senha.ts
var Senha = class {
  static nova(tamanho = 15) {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = minusculas.toUpperCase();
    const numeros = "0123456789";
    const especiais = "!@#$%&*";
    const grupos = [minusculas, maiusculas, numeros, especiais];
    const senha = [];
    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];
      senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
    }
    return senha.join("");
  }
};

// src/shared/Data.ts
var Data = class {
  static formatar(data) {
    const pad = (n) => n.toString().padStart(2, "0");
    const d = data ?? /* @__PURE__ */ new Date();
    const ano = d.getFullYear();
    const mes = pad(d.getMonth() + 1);
    const dia = pad(d.getDate());
    const hora = pad(d.getHours());
    const minuto = pad(d.getMinutes());
    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
  }
  static desformatar(data) {
    const [ano, mes, dia] = data.split("T")[0].split("-");
    const [hora, minuto] = data.split("T")[1].split(":");
    return new Date(
      parseInt(ano),
      parseInt(mes) - 1,
      parseInt(dia),
      parseInt(hora),
      parseInt(minuto)
    );
  }
};

// src/evento/functions/validarEvento.ts
function validarEvento(evento) {
  const erros = [];
  if (!evento.alias) {
    erros.push("Alias \xE9 obrigat\xF3rio");
  }
  if (!evento.nome) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!evento.descricao) {
    erros.push("Descri\xE7\xE3o \xE9 obrigat\xF3ria");
  }
  if (!evento.data) {
    erros.push("Data \xE9 obrigat\xF3ria");
  }
  if (!evento.local) {
    erros.push("Local \xE9 obrigat\xF3rio");
  }
  if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
    erros.push("P\xFAblico esperado \xE9 obrigat\xF3rio");
  }
  if (!evento.imagem) {
    erros.push("Imagem \xE9 obrigat\xF3ria");
  }
  if (!evento.imagemBackground) {
    erros.push("Imagem de fundo \xE9 obrigat\xF3ria");
  }
  return erros;
}

// src/evento/functions/complementarEvento.ts
function complementarEvento(eventoParcial) {
  const erros = validarEvento(eventoParcial);
  if (erros.length) {
    throw new Error(erros.join("\n"));
  }
  const evento = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.novo(),
    senha: eventoParcial.senha ?? Senha.nova(20),
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1)
  };
  return evento;
}

// src/evento/functions/criarConvidadoVazio.ts
function criarConvidadoVazio() {
  return {
    id: Id.novo(),
    nome: "",
    email: "",
    confirmado: true,
    possuiAcompanhantes: false,
    qtdeAcompanhantes: 0
  };
}

// src/evento/functions/criarEventoVazio.ts
function criarEventoVazio() {
  return {
    id: Id.novo(),
    nome: "",
    descricao: "",
    data: /* @__PURE__ */ new Date(),
    local: "",
    publicoEsperado: 1,
    imagem: "",
    imagemBackground: ""
  };
}

// src/constants/eventos.ts
var eventos = [
  {
    id: "21ff36d7-8fa7-495e-9339-d1687458b660",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: /* @__PURE__ */ new Date("2024-12-01T10:00:00Z"),
    local: "S\xE3o Paulo, SP",
    descricao: "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    imagemBackground: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "9db594ba-2015-4126-923b-9453d7edd552",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "7f76598d-5025-45d7-950a-45dbc52307ab",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "be33b1e3-6d44-45d3-80dc-c9a4b61e389a",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      }
    ]
  },
  {
    id: "f4b18eb7-13c6-4bde-aa26-a9551a5c31f2",
    alias: "evento-js-avancado",
    senha: "js2024",
    nome: "Workshop Avan\xE7ado de JavaScript",
    data: /* @__PURE__ */ new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avan\xE7ado para programadores JavaScript.",
    imagem: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: "ce7781f9-ce90-480b-b33f-79551b436b30",
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "89fe8fda-bdd2-4a0c-aa4c-efed7a4da7a7",
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      }
    ]
  },
  {
    id: "3a588693-650e-4c6d-868e-9090ff5c07b3",
    alias: "evento-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: /* @__PURE__ */ new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incr\xEDveis e responsivas.",
    imagem: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imagemBackground: "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "961e8ef3-8492-4bb6-8e99-4e07d175a18c",
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "c9807f9f-d3c8-4dee-b49c-ae09cf3329e8",
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "d4f25df3-bd22-4b1d-a6ba-c8fd625ef117",
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "7a0a5640-8e46-404d-bd90-dcba6589d57c",
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: /* @__PURE__ */ new Date("2024-11-25T16:00:00Z"),
    local: "Florian\xF3polis, SC",
    descricao: "Celebra\xE7\xE3o do casamento de Alberto e Marina com amigos e familiares.",
    imagem: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imagemBackground: "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "c7f15188-0f9a-454e-8d05-694308106b21",
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "384493ec-f538-4af0-95bb-eff54a17d7eb",
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "5e25282b-cde5-45ff-9436-c4320d7c2f6f",
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Anivers\xE1rio do Jo\xE3o - 30 Anos",
    data: /* @__PURE__ */ new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao: "Comemora\xE7\xE3o dos 30 anos de Jo\xE3o com amigos pr\xF3ximos e familiares.",
    imagem: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imagemBackground: "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: "62f27c65-d52e-4e4b-aeb1-e6c861539806",
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      },
      {
        id: "eb5d60e7-ee91-4d6f-8365-33a2ef65ffd7",
        nome: "Jos\xE9 Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "53ae44ec-30fb-4e5a-9b0b-a9fbedd8e3c1",
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inaugura\xE7\xE3o da Loja Estrela",
    data: /* @__PURE__ */ new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao: "Evento de inaugura\xE7\xE3o da nova loja Estrela com brindes e promo\xE7\xF5es.",
    imagem: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imagemBackground: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: "56d33644-21e0-45d6-8374-b63492542957",
        nome: "Cl\xE1udia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3
      },
      {
        id: "08ce7902-a86f-4991-97bc-8cf5661fa328",
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "65965e1c-8055-4795-b4a3-da93bbe97e31",
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reuni\xE3o da Fam\xEDlia Oliveira",
    data: /* @__PURE__ */ new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reuni\xE3o de fim de ano da fam\xEDlia Oliveira.",
    imagem: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imagemBackground: "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: "70aad3a8-3307-4b4b-a8c6-a3796b7aef66",
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4
      },
      {
        id: "5cf2c395-a931-4234-889f-7a8701c8e5fc",
        nome: "Let\xEDcia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  }
];
var eventos_default = eventos;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alias,
  Data,
  Id,
  Senha,
  complementarConvidado,
  complementarEvento,
  criarConvidadoVazio,
  criarEventoVazio,
  eventos
});
