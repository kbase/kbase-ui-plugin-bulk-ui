!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
(function() {
var define = $__System.amdDefine;
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define("2", [], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {
  'use strict';
  var _apply = Function.call.bind(Function.apply);
  var _call = Function.call.bind(Function.call);
  var isArray = Array.isArray;
  var keys = Object.keys;
  var not = function notThunker(func) {
    return function notThunk() {
      return !_apply(func, this, arguments);
    };
  };
  var throwsError = function(func) {
    try {
      func();
      return false;
    } catch (e) {
      return true;
    }
  };
  var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
    try {
      return func();
    } catch (e) {
      return false;
    }
  };
  var isCallableWithoutNew = not(throwsError);
  var arePropertyDescriptorsSupported = function() {
    return !throwsError(function() {
      Object.defineProperty({}, 'x', {get: function() {}});
    });
  };
  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
  var functionsHaveNames = (function foo() {}).name === 'foo';
  var _forEach = Function.call.bind(Array.prototype.forEach);
  var _reduce = Function.call.bind(Array.prototype.reduce);
  var _filter = Function.call.bind(Array.prototype.filter);
  var _some = Function.call.bind(Array.prototype.some);
  var defineProperty = function(object, name, value, force) {
    if (!force && name in object) {
      return;
    }
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };
  var defineProperties = function(object, map, forceOverride) {
    _forEach(keys(map), function(name) {
      var method = map[name];
      defineProperty(object, name, method, !!forceOverride);
    });
  };
  var _toString = Function.call.bind(Object.prototype.toString);
  var isCallable = typeof/abc/ === 'function' ? function IsCallableSlow(x) {
    return typeof x === 'function' && _toString(x) === '[object Function]';
  } : function IsCallableFast(x) {
    return typeof x === 'function';
  };
  var Value = {
    getter: function(object, name, getter) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: false,
        get: getter
      });
    },
    proxy: function(originalObject, key, targetObject) {
      if (!supportsDescriptors) {
        throw new TypeError('getters require true ES5 support');
      }
      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
      Object.defineProperty(targetObject, key, {
        configurable: originalDescriptor.configurable,
        enumerable: originalDescriptor.enumerable,
        get: function getKey() {
          return originalObject[key];
        },
        set: function setKey(value) {
          originalObject[key] = value;
        }
      });
    },
    redefine: function(object, property, newValue) {
      if (supportsDescriptors) {
        var descriptor = Object.getOwnPropertyDescriptor(object, property);
        descriptor.value = newValue;
        Object.defineProperty(object, property, descriptor);
      } else {
        object[property] = newValue;
      }
    },
    defineByDescriptor: function(object, property, descriptor) {
      if (supportsDescriptors) {
        Object.defineProperty(object, property, descriptor);
      } else if ('value' in descriptor) {
        object[property] = descriptor.value;
      }
    },
    preserveToString: function(target, source) {
      if (source && isCallable(source.toString)) {
        defineProperty(target, 'toString', source.toString.bind(source), true);
      }
    }
  };
  var create = Object.create || function(prototype, properties) {
    var Prototype = function Prototype() {};
    Prototype.prototype = prototype;
    var object = new Prototype();
    if (typeof properties !== 'undefined') {
      keys(properties).forEach(function(key) {
        Value.defineByDescriptor(object, key, properties[key]);
      });
    }
    return object;
  };
  var supportsSubclassing = function(C, f) {
    if (!Object.setPrototypeOf) {
      return false;
    }
    return valueOrFalseIfThrows(function() {
      var Sub = function Subclass(arg) {
        var o = new C(arg);
        Object.setPrototypeOf(o, Subclass.prototype);
        return o;
      };
      Object.setPrototypeOf(Sub, C);
      Sub.prototype = create(C.prototype, {constructor: {value: Sub}});
      return f(Sub);
    });
  };
  var getGlobal = function() {
    if (typeof self !== 'undefined') {
      return self;
    }
    if (typeof window !== 'undefined') {
      return window;
    }
    if (typeof global !== 'undefined') {
      return global;
    }
    throw new Error('unable to locate global object');
  };
  var globals = getGlobal();
  var globalIsFinite = globals.isFinite;
  var _indexOf = Function.call.bind(String.prototype.indexOf);
  var _arrayIndexOfApply = Function.apply.bind(Array.prototype.indexOf);
  var _concat = Function.call.bind(Array.prototype.concat);
  var _strSlice = Function.call.bind(String.prototype.slice);
  var _push = Function.call.bind(Array.prototype.push);
  var _pushApply = Function.apply.bind(Array.prototype.push);
  var _shift = Function.call.bind(Array.prototype.shift);
  var _max = Math.max;
  var _min = Math.min;
  var _floor = Math.floor;
  var _abs = Math.abs;
  var _exp = Math.exp;
  var _log = Math.log;
  var _sqrt = Math.sqrt;
  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
  var ArrayIterator;
  var noop = function() {};
  var OrigMap = globals.Map;
  var origMapDelete = OrigMap && OrigMap.prototype['delete'];
  var origMapGet = OrigMap && OrigMap.prototype.get;
  var origMapHas = OrigMap && OrigMap.prototype.has;
  var origMapSet = OrigMap && OrigMap.prototype.set;
  var Symbol = globals.Symbol || {};
  var symbolSpecies = Symbol.species || '@@species';
  var numberIsNaN = Number.isNaN || function isNaN(value) {
    return value !== value;
  };
  var numberIsFinite = Number.isFinite || function isFinite(value) {
    return typeof value === 'number' && globalIsFinite(value);
  };
  var _sign = isCallable(Math.sign) ? Math.sign : function sign(value) {
    var number = Number(value);
    if (number === 0) {
      return number;
    }
    if (numberIsNaN(number)) {
      return number;
    }
    return number < 0 ? -1 : 1;
  };
  var isStandardArguments = function isArguments(value) {
    return _toString(value) === '[object Arguments]';
  };
  var isLegacyArguments = function isArguments(value) {
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && _toString(value) !== '[object Array]' && _toString(value.callee) === '[object Function]';
  };
  var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;
  var Type = {
    primitive: function(x) {
      return x === null || (typeof x !== 'function' && typeof x !== 'object');
    },
    string: function(x) {
      return _toString(x) === '[object String]';
    },
    regex: function(x) {
      return _toString(x) === '[object RegExp]';
    },
    symbol: function(x) {
      return typeof globals.Symbol === 'function' && typeof x === 'symbol';
    }
  };
  var overrideNative = function overrideNative(object, property, replacement) {
    var original = object[property];
    defineProperty(object, property, replacement, true);
    Value.preserveToString(object[property], original);
  };
  var hasSymbols = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' && Type.symbol(Symbol());
  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
    $iterator$ = '@@iterator';
  }
  if (!globals.Reflect) {
    defineProperty(globals, 'Reflect', {}, true);
  }
  var Reflect = globals.Reflect;
  var $String = String;
  var domAll = (typeof document === 'undefined' || !document) ? null : document.all;
  var isNullOrUndefined = domAll == null ? function isNullOrUndefined(x) {
    return x == null;
  } : function isNullOrUndefinedAndNotDocumentAll(x) {
    return x == null && x !== domAll;
  };
  var ES = {
    Call: function Call(F, V) {
      var args = arguments.length > 2 ? arguments[2] : [];
      if (!ES.IsCallable(F)) {
        throw new TypeError(F + ' is not a function');
      }
      return _apply(F, V, args);
    },
    RequireObjectCoercible: function(x, optMessage) {
      if (isNullOrUndefined(x)) {
        throw new TypeError(optMessage || 'Cannot call method on ' + x);
      }
      return x;
    },
    TypeIsObject: function(x) {
      if (x === void 0 || x === null || x === true || x === false) {
        return false;
      }
      return typeof x === 'function' || typeof x === 'object' || x === domAll;
    },
    ToObject: function(o, optMessage) {
      return Object(ES.RequireObjectCoercible(o, optMessage));
    },
    IsCallable: isCallable,
    IsConstructor: function(x) {
      return ES.IsCallable(x);
    },
    ToInt32: function(x) {
      return ES.ToNumber(x) >> 0;
    },
    ToUint32: function(x) {
      return ES.ToNumber(x) >>> 0;
    },
    ToNumber: function(value) {
      if (_toString(value) === '[object Symbol]') {
        throw new TypeError('Cannot convert a Symbol value to a number');
      }
      return +value;
    },
    ToInteger: function(value) {
      var number = ES.ToNumber(value);
      if (numberIsNaN(number)) {
        return 0;
      }
      if (number === 0 || !numberIsFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * _floor(_abs(number));
    },
    ToLength: function(value) {
      var len = ES.ToInteger(value);
      if (len <= 0) {
        return 0;
      }
      if (len > Number.MAX_SAFE_INTEGER) {
        return Number.MAX_SAFE_INTEGER;
      }
      return len;
    },
    SameValue: function(a, b) {
      if (a === b) {
        if (a === 0) {
          return 1 / a === 1 / b;
        }
        return true;
      }
      return numberIsNaN(a) && numberIsNaN(b);
    },
    SameValueZero: function(a, b) {
      return (a === b) || (numberIsNaN(a) && numberIsNaN(b));
    },
    IsIterable: function(o) {
      return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
    },
    GetIterator: function(o) {
      if (isArguments(o)) {
        return new ArrayIterator(o, 'value');
      }
      var itFn = ES.GetMethod(o, $iterator$);
      if (!ES.IsCallable(itFn)) {
        throw new TypeError('value is not an iterable');
      }
      var it = ES.Call(itFn, o);
      if (!ES.TypeIsObject(it)) {
        throw new TypeError('bad iterator');
      }
      return it;
    },
    GetMethod: function(o, p) {
      var func = ES.ToObject(o)[p];
      if (isNullOrUndefined(func)) {
        return void 0;
      }
      if (!ES.IsCallable(func)) {
        throw new TypeError('Method not callable: ' + p);
      }
      return func;
    },
    IteratorComplete: function(iterResult) {
      return !!iterResult.done;
    },
    IteratorClose: function(iterator, completionIsThrow) {
      var returnMethod = ES.GetMethod(iterator, 'return');
      if (returnMethod === void 0) {
        return;
      }
      var innerResult,
          innerException;
      try {
        innerResult = ES.Call(returnMethod, iterator);
      } catch (e) {
        innerException = e;
      }
      if (completionIsThrow) {
        return;
      }
      if (innerException) {
        throw innerException;
      }
      if (!ES.TypeIsObject(innerResult)) {
        throw new TypeError("Iterator's return method returned a non-object.");
      }
    },
    IteratorNext: function(it) {
      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
      if (!ES.TypeIsObject(result)) {
        throw new TypeError('bad iterator');
      }
      return result;
    },
    IteratorStep: function(it) {
      var result = ES.IteratorNext(it);
      var done = ES.IteratorComplete(result);
      return done ? false : result;
    },
    Construct: function(C, args, newTarget, isES6internal) {
      var target = typeof newTarget === 'undefined' ? C : newTarget;
      if (!isES6internal && Reflect.construct) {
        return Reflect.construct(C, args, target);
      }
      var proto = target.prototype;
      if (!ES.TypeIsObject(proto)) {
        proto = Object.prototype;
      }
      var obj = create(proto);
      var result = ES.Call(C, obj, args);
      return ES.TypeIsObject(result) ? result : obj;
    },
    SpeciesConstructor: function(O, defaultConstructor) {
      var C = O.constructor;
      if (C === void 0) {
        return defaultConstructor;
      }
      if (!ES.TypeIsObject(C)) {
        throw new TypeError('Bad constructor');
      }
      var S = C[symbolSpecies];
      if (isNullOrUndefined(S)) {
        return defaultConstructor;
      }
      if (!ES.IsConstructor(S)) {
        throw new TypeError('Bad @@species');
      }
      return S;
    },
    CreateHTML: function(string, tag, attribute, value) {
      var S = ES.ToString(string);
      var p1 = '<' + tag;
      if (attribute !== '') {
        var V = ES.ToString(value);
        var escapedV = V.replace(/"/g, '&quot;');
        p1 += ' ' + attribute + '="' + escapedV + '"';
      }
      var p2 = p1 + '>';
      var p3 = p2 + S;
      return p3 + '</' + tag + '>';
    },
    IsRegExp: function IsRegExp(argument) {
      if (!ES.TypeIsObject(argument)) {
        return false;
      }
      var isRegExp = argument[Symbol.match];
      if (typeof isRegExp !== 'undefined') {
        return !!isRegExp;
      }
      return Type.regex(argument);
    },
    ToString: function ToString(string) {
      return $String(string);
    }
  };
  if (supportsDescriptors && hasSymbols) {
    var defineWellKnownSymbol = function defineWellKnownSymbol(name) {
      if (Type.symbol(Symbol[name])) {
        return Symbol[name];
      }
      var sym = Symbol['for']('Symbol.' + name);
      Object.defineProperty(Symbol, name, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: sym
      });
      return sym;
    };
    if (!Type.symbol(Symbol.search)) {
      var symbolSearch = defineWellKnownSymbol('search');
      var originalSearch = String.prototype.search;
      defineProperty(RegExp.prototype, symbolSearch, function search(string) {
        return ES.Call(originalSearch, string, [this]);
      });
      var searchShim = function search(regexp) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(regexp)) {
          var searcher = ES.GetMethod(regexp, symbolSearch);
          if (typeof searcher !== 'undefined') {
            return ES.Call(searcher, regexp, [O]);
          }
        }
        return ES.Call(originalSearch, O, [ES.ToString(regexp)]);
      };
      overrideNative(String.prototype, 'search', searchShim);
    }
    if (!Type.symbol(Symbol.replace)) {
      var symbolReplace = defineWellKnownSymbol('replace');
      var originalReplace = String.prototype.replace;
      defineProperty(RegExp.prototype, symbolReplace, function replace(string, replaceValue) {
        return ES.Call(originalReplace, string, [this, replaceValue]);
      });
      var replaceShim = function replace(searchValue, replaceValue) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(searchValue)) {
          var replacer = ES.GetMethod(searchValue, symbolReplace);
          if (typeof replacer !== 'undefined') {
            return ES.Call(replacer, searchValue, [O, replaceValue]);
          }
        }
        return ES.Call(originalReplace, O, [ES.ToString(searchValue), replaceValue]);
      };
      overrideNative(String.prototype, 'replace', replaceShim);
    }
    if (!Type.symbol(Symbol.split)) {
      var symbolSplit = defineWellKnownSymbol('split');
      var originalSplit = String.prototype.split;
      defineProperty(RegExp.prototype, symbolSplit, function split(string, limit) {
        return ES.Call(originalSplit, string, [this, limit]);
      });
      var splitShim = function split(separator, limit) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(separator)) {
          var splitter = ES.GetMethod(separator, symbolSplit);
          if (typeof splitter !== 'undefined') {
            return ES.Call(splitter, separator, [O, limit]);
          }
        }
        return ES.Call(originalSplit, O, [ES.ToString(separator), limit]);
      };
      overrideNative(String.prototype, 'split', splitShim);
    }
    var symbolMatchExists = Type.symbol(Symbol.match);
    var stringMatchIgnoresSymbolMatch = symbolMatchExists && (function() {
      var o = {};
      o[Symbol.match] = function() {
        return 42;
      };
      return 'a'.match(o) !== 42;
    }());
    if (!symbolMatchExists || stringMatchIgnoresSymbolMatch) {
      var symbolMatch = defineWellKnownSymbol('match');
      var originalMatch = String.prototype.match;
      defineProperty(RegExp.prototype, symbolMatch, function match(string) {
        return ES.Call(originalMatch, string, [this]);
      });
      var matchShim = function match(regexp) {
        var O = ES.RequireObjectCoercible(this);
        if (!isNullOrUndefined(regexp)) {
          var matcher = ES.GetMethod(regexp, symbolMatch);
          if (typeof matcher !== 'undefined') {
            return ES.Call(matcher, regexp, [O]);
          }
        }
        return ES.Call(originalMatch, O, [ES.ToString(regexp)]);
      };
      overrideNative(String.prototype, 'match', matchShim);
    }
  }
  var wrapConstructor = function wrapConstructor(original, replacement, keysToSkip) {
    Value.preserveToString(replacement, original);
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(original, replacement);
    }
    if (supportsDescriptors) {
      _forEach(Object.getOwnPropertyNames(original), function(key) {
        if (key in noop || keysToSkip[key]) {
          return;
        }
        Value.proxy(original, key, replacement);
      });
    } else {
      _forEach(Object.keys(original), function(key) {
        if (key in noop || keysToSkip[key]) {
          return;
        }
        replacement[key] = original[key];
      });
    }
    replacement.prototype = original.prototype;
    Value.redefine(original.prototype, 'constructor', replacement);
  };
  var defaultSpeciesGetter = function() {
    return this;
  };
  var addDefaultSpecies = function(C) {
    if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) {
      Value.getter(C, symbolSpecies, defaultSpeciesGetter);
    }
  };
  var addIterator = function(prototype, impl) {
    var implementation = impl || function iterator() {
      return this;
    };
    defineProperty(prototype, $iterator$, implementation);
    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
      prototype[$iterator$] = implementation;
    }
  };
  var createDataProperty = function createDataProperty(object, name, value) {
    if (supportsDescriptors) {
      Object.defineProperty(object, name, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };
  var createDataPropertyOrThrow = function createDataPropertyOrThrow(object, name, value) {
    createDataProperty(object, name, value);
    if (!ES.SameValue(object[name], value)) {
      throw new TypeError('property is nonconfigurable');
    }
  };
  var emulateES6construct = function(o, defaultNewTarget, defaultProto, slots) {
    if (!ES.TypeIsObject(o)) {
      throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);
    }
    var proto = defaultNewTarget.prototype;
    if (!ES.TypeIsObject(proto)) {
      proto = defaultProto;
    }
    var obj = create(proto);
    for (var name in slots) {
      if (_hasOwnProperty(slots, name)) {
        var value = slots[name];
        defineProperty(obj, name, value, true);
      }
    }
    return obj;
  };
  if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
    var originalFromCodePoint = String.fromCodePoint;
    overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) {
      return ES.Call(originalFromCodePoint, this, arguments);
    });
  }
  var StringShims = {
    fromCodePoint: function fromCodePoint(codePoints) {
      var result = [];
      var next;
      for (var i = 0,
          length = arguments.length; i < length; i++) {
        next = Number(arguments[i]);
        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
          throw new RangeError('Invalid code point ' + next);
        }
        if (next < 0x10000) {
          _push(result, String.fromCharCode(next));
        } else {
          next -= 0x10000;
          _push(result, String.fromCharCode((next >> 10) + 0xD800));
          _push(result, String.fromCharCode((next % 0x400) + 0xDC00));
        }
      }
      return result.join('');
    },
    raw: function raw(callSite) {
      var cooked = ES.ToObject(callSite, 'bad callSite');
      var rawString = ES.ToObject(cooked.raw, 'bad raw value');
      var len = rawString.length;
      var literalsegments = ES.ToLength(len);
      if (literalsegments <= 0) {
        return '';
      }
      var stringElements = [];
      var nextIndex = 0;
      var nextKey,
          next,
          nextSeg,
          nextSub;
      while (nextIndex < literalsegments) {
        nextKey = ES.ToString(nextIndex);
        nextSeg = ES.ToString(rawString[nextKey]);
        _push(stringElements, nextSeg);
        if (nextIndex + 1 >= literalsegments) {
          break;
        }
        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
        nextSub = ES.ToString(next);
        _push(stringElements, nextSub);
        nextIndex += 1;
      }
      return stringElements.join('');
    }
  };
  if (String.raw && String.raw({raw: {
      0: 'x',
      1: 'y',
      length: 2
    }}) !== 'xy') {
    overrideNative(String, 'raw', StringShims.raw);
  }
  defineProperties(String, StringShims);
  var stringRepeat = function repeat(s, times) {
    if (times < 1) {
      return '';
    }
    if (times % 2) {
      return repeat(s, times - 1) + s;
    }
    var half = repeat(s, times / 2);
    return half + half;
  };
  var stringMaxLength = Infinity;
  var StringPrototypeShims = {
    repeat: function repeat(times) {
      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
      var numTimes = ES.ToInteger(times);
      if (numTimes < 0 || numTimes >= stringMaxLength) {
        throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
      }
      return stringRepeat(thisStr, numTimes);
    },
    startsWith: function startsWith(searchString) {
      var S = ES.ToString(ES.RequireObjectCoercible(this));
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('Cannot call method "startsWith" with a regex');
      }
      var searchStr = ES.ToString(searchString);
      var position;
      if (arguments.length > 1) {
        position = arguments[1];
      }
      var start = _max(ES.ToInteger(position), 0);
      return _strSlice(S, start, start + searchStr.length) === searchStr;
    },
    endsWith: function endsWith(searchString) {
      var S = ES.ToString(ES.RequireObjectCoercible(this));
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('Cannot call method "endsWith" with a regex');
      }
      var searchStr = ES.ToString(searchString);
      var len = S.length;
      var endPosition;
      if (arguments.length > 1) {
        endPosition = arguments[1];
      }
      var pos = typeof endPosition === 'undefined' ? len : ES.ToInteger(endPosition);
      var end = _min(_max(pos, 0), len);
      return _strSlice(S, end - searchStr.length, end) === searchStr;
    },
    includes: function includes(searchString) {
      if (ES.IsRegExp(searchString)) {
        throw new TypeError('"includes" does not accept a RegExp');
      }
      var searchStr = ES.ToString(searchString);
      var position;
      if (arguments.length > 1) {
        position = arguments[1];
      }
      return _indexOf(this, searchStr, position) !== -1;
    },
    codePointAt: function codePointAt(pos) {
      var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
      var position = ES.ToInteger(pos);
      var length = thisStr.length;
      if (position >= 0 && position < length) {
        var first = thisStr.charCodeAt(position);
        var isEnd = position + 1 === length;
        if (first < 0xD800 || first > 0xDBFF || isEnd) {
          return first;
        }
        var second = thisStr.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) {
          return first;
        }
        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
      }
    }
  };
  if (String.prototype.includes && 'a'.includes('a', Infinity) !== false) {
    overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
  }
  if (String.prototype.startsWith && String.prototype.endsWith) {
    var startsWithRejectsRegex = throwsError(function() {
      '/a/'.startsWith(/a/);
    });
    var startsWithHandlesInfinity = valueOrFalseIfThrows(function() {
      return 'abc'.startsWith('a', Infinity) === false;
    });
    if (!startsWithRejectsRegex || !startsWithHandlesInfinity) {
      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
    }
  }
  if (hasSymbols) {
    var startsWithSupportsSymbolMatch = valueOrFalseIfThrows(function() {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.startsWith(re);
    });
    if (!startsWithSupportsSymbolMatch) {
      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
    }
    var endsWithSupportsSymbolMatch = valueOrFalseIfThrows(function() {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.endsWith(re);
    });
    if (!endsWithSupportsSymbolMatch) {
      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
    }
    var includesSupportsSymbolMatch = valueOrFalseIfThrows(function() {
      var re = /a/;
      re[Symbol.match] = false;
      return '/a/'.includes(re);
    });
    if (!includesSupportsSymbolMatch) {
      overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
    }
  }
  defineProperties(String.prototype, StringPrototypeShims);
  var ws = ['\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003', '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028', '\u2029\uFEFF'].join('');
  var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
  var trimShim = function trim() {
    return ES.ToString(ES.RequireObjectCoercible(this)).replace(trimRegexp, '');
  };
  var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
  var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
  var isBadHexRegex = /^[-+]0x[0-9a-f]+$/i;
  var hasStringTrimBug = nonWS.trim().length !== nonWS.length;
  defineProperty(String.prototype, 'trim', trimShim, hasStringTrimBug);
  var iteratorResult = function(x) {
    return {
      value: x,
      done: arguments.length === 0
    };
  };
  var StringIterator = function(s) {
    ES.RequireObjectCoercible(s);
    this._s = ES.ToString(s);
    this._i = 0;
  };
  StringIterator.prototype.next = function() {
    var s = this._s;
    var i = this._i;
    if (typeof s === 'undefined' || i >= s.length) {
      this._s = void 0;
      return iteratorResult();
    }
    var first = s.charCodeAt(i);
    var second,
        len;
    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {
      len = 1;
    } else {
      second = s.charCodeAt(i + 1);
      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;
    }
    this._i = i + len;
    return iteratorResult(s.substr(i, len));
  };
  addIterator(StringIterator.prototype);
  addIterator(String.prototype, function() {
    return new StringIterator(this);
  });
  var ArrayShims = {
    from: function from(items) {
      var C = this;
      var mapFn;
      if (arguments.length > 1) {
        mapFn = arguments[1];
      }
      var mapping,
          T;
      if (typeof mapFn === 'undefined') {
        mapping = false;
      } else {
        if (!ES.IsCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
        mapping = true;
      }
      var usingIterator = typeof(isArguments(items) || ES.GetMethod(items, $iterator$)) !== 'undefined';
      var length,
          result,
          i;
      if (usingIterator) {
        result = ES.IsConstructor(C) ? Object(new C()) : [];
        var iterator = ES.GetIterator(items);
        var next,
            nextValue;
        i = 0;
        while (true) {
          next = ES.IteratorStep(iterator);
          if (next === false) {
            break;
          }
          nextValue = next.value;
          try {
            if (mapping) {
              nextValue = typeof T === 'undefined' ? mapFn(nextValue, i) : _call(mapFn, T, nextValue, i);
            }
            result[i] = nextValue;
          } catch (e) {
            ES.IteratorClose(iterator, true);
            throw e;
          }
          i += 1;
        }
        length = i;
      } else {
        var arrayLike = ES.ToObject(items);
        length = ES.ToLength(arrayLike.length);
        result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);
        var value;
        for (i = 0; i < length; ++i) {
          value = arrayLike[i];
          if (mapping) {
            value = typeof T === 'undefined' ? mapFn(value, i) : _call(mapFn, T, value, i);
          }
          createDataPropertyOrThrow(result, i, value);
        }
      }
      result.length = length;
      return result;
    },
    of: function of() {
      var len = arguments.length;
      var C = this;
      var A = isArray(C) || !ES.IsCallable(C) ? new Array(len) : ES.Construct(C, [len]);
      for (var k = 0; k < len; ++k) {
        createDataPropertyOrThrow(A, k, arguments[k]);
      }
      A.length = len;
      return A;
    }
  };
  defineProperties(Array, ArrayShims);
  addDefaultSpecies(Array);
  ArrayIterator = function(array, kind) {
    this.i = 0;
    this.array = array;
    this.kind = kind;
  };
  defineProperties(ArrayIterator.prototype, {next: function() {
      var i = this.i;
      var array = this.array;
      if (!(this instanceof ArrayIterator)) {
        throw new TypeError('Not an ArrayIterator');
      }
      if (typeof array !== 'undefined') {
        var len = ES.ToLength(array.length);
        for (; i < len; i++) {
          var kind = this.kind;
          var retval;
          if (kind === 'key') {
            retval = i;
          } else if (kind === 'value') {
            retval = array[i];
          } else if (kind === 'entry') {
            retval = [i, array[i]];
          }
          this.i = i + 1;
          return iteratorResult(retval);
        }
      }
      this.array = void 0;
      return iteratorResult();
    }});
  addIterator(ArrayIterator.prototype);
  var arrayOfSupportsSubclassing = Array.of === ArrayShims.of || (function() {
    var Foo = function Foo(len) {
      this.length = len;
    };
    Foo.prototype = [];
    var fooArr = Array.of.apply(Foo, [1, 2]);
    return fooArr instanceof Foo && fooArr.length === 2;
  }());
  if (!arrayOfSupportsSubclassing) {
    overrideNative(Array, 'of', ArrayShims.of);
  }
  var ArrayPrototypeShims = {
    copyWithin: function copyWithin(target, start) {
      var o = ES.ToObject(this);
      var len = ES.ToLength(o.length);
      var relativeTarget = ES.ToInteger(target);
      var relativeStart = ES.ToInteger(start);
      var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);
      var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);
      var end;
      if (arguments.length > 2) {
        end = arguments[2];
      }
      var relativeEnd = typeof end === 'undefined' ? len : ES.ToInteger(end);
      var finalItem = relativeEnd < 0 ? _max(len + relativeEnd, 0) : _min(relativeEnd, len);
      var count = _min(finalItem - from, len - to);
      var direction = 1;
      if (from < to && to < (from + count)) {
        direction = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count > 0) {
        if (from in o) {
          o[to] = o[from];
        } else {
          delete o[to];
        }
        from += direction;
        to += direction;
        count -= 1;
      }
      return o;
    },
    fill: function fill(value) {
      var start;
      if (arguments.length > 1) {
        start = arguments[1];
      }
      var end;
      if (arguments.length > 2) {
        end = arguments[2];
      }
      var O = ES.ToObject(this);
      var len = ES.ToLength(O.length);
      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
      end = ES.ToInteger(typeof end === 'undefined' ? len : end);
      var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);
      var relativeEnd = end < 0 ? len + end : end;
      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
        O[i] = value;
      }
      return O;
    },
    find: function find(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#find: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0,
          value; i < length; i++) {
        value = list[i];
        if (thisArg) {
          if (_call(predicate, thisArg, value, i, list)) {
            return value;
          }
        } else if (predicate(value, i, list)) {
          return value;
        }
      }
    },
    findIndex: function findIndex(predicate) {
      var list = ES.ToObject(this);
      var length = ES.ToLength(list.length);
      if (!ES.IsCallable(predicate)) {
        throw new TypeError('Array#findIndex: predicate must be a function');
      }
      var thisArg = arguments.length > 1 ? arguments[1] : null;
      for (var i = 0; i < length; i++) {
        if (thisArg) {
          if (_call(predicate, thisArg, list[i], i, list)) {
            return i;
          }
        } else if (predicate(list[i], i, list)) {
          return i;
        }
      }
      return -1;
    },
    keys: function keys() {
      return new ArrayIterator(this, 'key');
    },
    values: function values() {
      return new ArrayIterator(this, 'value');
    },
    entries: function entries() {
      return new ArrayIterator(this, 'entry');
    }
  };
  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
    delete Array.prototype.keys;
  }
  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
    delete Array.prototype.entries;
  }
  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
    defineProperties(Array.prototype, {values: Array.prototype[$iterator$]});
    if (Type.symbol(Symbol.unscopables)) {
      Array.prototype[Symbol.unscopables].values = true;
    }
  }
  if (functionsHaveNames && Array.prototype.values && Array.prototype.values.name !== 'values') {
    var originalArrayPrototypeValues = Array.prototype.values;
    overrideNative(Array.prototype, 'values', function values() {
      return ES.Call(originalArrayPrototypeValues, this, arguments);
    });
    defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
  }
  defineProperties(Array.prototype, ArrayPrototypeShims);
  if (1 / [true].indexOf(true, -0) < 0) {
    defineProperty(Array.prototype, 'indexOf', function indexOf(searchElement) {
      var value = _arrayIndexOfApply(this, arguments);
      if (value === 0 && (1 / value) < 0) {
        return 0;
      }
      return value;
    }, true);
  }
  addIterator(Array.prototype, function() {
    return this.values();
  });
  if (Object.getPrototypeOf) {
    addIterator(Object.getPrototypeOf([].values()));
  }
  var arrayFromSwallowsNegativeLengths = (function() {
    return valueOrFalseIfThrows(function() {
      return Array.from({length: -1}).length === 0;
    });
  }());
  var arrayFromHandlesIterables = (function() {
    var arr = Array.from([0].entries());
    return arr.length === 1 && isArray(arr[0]) && arr[0][0] === 0 && arr[0][1] === 0;
  }());
  if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) {
    overrideNative(Array, 'from', ArrayShims.from);
  }
  var arrayFromHandlesUndefinedMapFunction = (function() {
    return valueOrFalseIfThrows(function() {
      return Array.from([0], void 0);
    });
  }());
  if (!arrayFromHandlesUndefinedMapFunction) {
    var origArrayFrom = Array.from;
    overrideNative(Array, 'from', function from(items) {
      if (arguments.length > 1 && typeof arguments[1] !== 'undefined') {
        return ES.Call(origArrayFrom, this, arguments);
      } else {
        return _call(origArrayFrom, this, items);
      }
    });
  }
  var int32sAsOne = -(Math.pow(2, 32) - 1);
  var toLengthsCorrectly = function(method, reversed) {
    var obj = {length: int32sAsOne};
    obj[reversed ? (obj.length >>> 0) - 1 : 0] = true;
    return valueOrFalseIfThrows(function() {
      _call(method, obj, function() {
        throw new RangeError('should not reach here');
      }, []);
      return true;
    });
  };
  if (!toLengthsCorrectly(Array.prototype.forEach)) {
    var originalForEach = Array.prototype.forEach;
    overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {
      return ES.Call(originalForEach, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.map)) {
    var originalMap = Array.prototype.map;
    overrideNative(Array.prototype, 'map', function map(callbackFn) {
      return ES.Call(originalMap, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.filter)) {
    var originalFilter = Array.prototype.filter;
    overrideNative(Array.prototype, 'filter', function filter(callbackFn) {
      return ES.Call(originalFilter, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.some)) {
    var originalSome = Array.prototype.some;
    overrideNative(Array.prototype, 'some', function some(callbackFn) {
      return ES.Call(originalSome, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.every)) {
    var originalEvery = Array.prototype.every;
    overrideNative(Array.prototype, 'every', function every(callbackFn) {
      return ES.Call(originalEvery, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.reduce)) {
    var originalReduce = Array.prototype.reduce;
    overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {
      return ES.Call(originalReduce, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {
    var originalReduceRight = Array.prototype.reduceRight;
    overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {
      return ES.Call(originalReduceRight, this.length >= 0 ? this : [], arguments);
    }, true);
  }
  var lacksOctalSupport = Number('0o10') !== 8;
  var lacksBinarySupport = Number('0b10') !== 2;
  var trimsNonWhitespace = _some(nonWS, function(c) {
    return Number(c + 0 + c) === 0;
  });
  if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {
    var OrigNumber = Number;
    var binaryRegex = /^0b[01]+$/i;
    var octalRegex = /^0o[0-7]+$/i;
    var isBinary = binaryRegex.test.bind(binaryRegex);
    var isOctal = octalRegex.test.bind(octalRegex);
    var toPrimitive = function(O) {
      var result;
      if (typeof O.valueOf === 'function') {
        result = O.valueOf();
        if (Type.primitive(result)) {
          return result;
        }
      }
      if (typeof O.toString === 'function') {
        result = O.toString();
        if (Type.primitive(result)) {
          return result;
        }
      }
      throw new TypeError('No default value');
    };
    var hasNonWS = nonWSregex.test.bind(nonWSregex);
    var isBadHex = isBadHexRegex.test.bind(isBadHexRegex);
    var NumberShim = (function() {
      var NumberShim = function Number(value) {
        var primValue;
        if (arguments.length > 0) {
          primValue = Type.primitive(value) ? value : toPrimitive(value, 'number');
        } else {
          primValue = 0;
        }
        if (typeof primValue === 'string') {
          primValue = ES.Call(trimShim, primValue);
          if (isBinary(primValue)) {
            primValue = parseInt(_strSlice(primValue, 2), 2);
          } else if (isOctal(primValue)) {
            primValue = parseInt(_strSlice(primValue, 2), 8);
          } else if (hasNonWS(primValue) || isBadHex(primValue)) {
            primValue = NaN;
          }
        }
        var receiver = this;
        var valueOfSucceeds = valueOrFalseIfThrows(function() {
          OrigNumber.prototype.valueOf.call(receiver);
          return true;
        });
        if (receiver instanceof NumberShim && !valueOfSucceeds) {
          return new OrigNumber(primValue);
        }
        return OrigNumber(primValue);
      };
      return NumberShim;
    }());
    wrapConstructor(OrigNumber, NumberShim, {});
    defineProperties(NumberShim, {
      NaN: OrigNumber.NaN,
      MAX_VALUE: OrigNumber.MAX_VALUE,
      MIN_VALUE: OrigNumber.MIN_VALUE,
      NEGATIVE_INFINITY: OrigNumber.NEGATIVE_INFINITY,
      POSITIVE_INFINITY: OrigNumber.POSITIVE_INFINITY
    });
    Number = NumberShim;
    Value.redefine(globals, 'Number', NumberShim);
  }
  var maxSafeInteger = Math.pow(2, 53) - 1;
  defineProperties(Number, {
    MAX_SAFE_INTEGER: maxSafeInteger,
    MIN_SAFE_INTEGER: -maxSafeInteger,
    EPSILON: 2.220446049250313e-16,
    parseInt: globals.parseInt,
    parseFloat: globals.parseFloat,
    isFinite: numberIsFinite,
    isInteger: function isInteger(value) {
      return numberIsFinite(value) && ES.ToInteger(value) === value;
    },
    isSafeInteger: function isSafeInteger(value) {
      return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;
    },
    isNaN: numberIsNaN
  });
  defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);
  if ([, 1].find(function() {
    return true;
  }) === 1) {
    overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);
  }
  if ([, 1].findIndex(function() {
    return true;
  }) !== 0) {
    overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);
  }
  var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
  var ensureEnumerable = function ensureEnumerable(obj, prop) {
    if (supportsDescriptors && isEnumerableOn(obj, prop)) {
      Object.defineProperty(obj, prop, {enumerable: false});
    }
  };
  var sliceArgs = function sliceArgs() {
    var initial = Number(this);
    var len = arguments.length;
    var desiredArgCount = len - initial;
    var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);
    for (var i = initial; i < len; ++i) {
      args[i - initial] = arguments[i];
    }
    return args;
  };
  var assignTo = function assignTo(source) {
    return function assignToSource(target, key) {
      target[key] = source[key];
      return target;
    };
  };
  var assignReducer = function(target, source) {
    var sourceKeys = keys(Object(source));
    var symbols;
    if (ES.IsCallable(Object.getOwnPropertySymbols)) {
      symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));
    }
    return _reduce(_concat(sourceKeys, symbols || []), assignTo(source), target);
  };
  var ObjectShims = {
    assign: function(target, source) {
      var to = ES.ToObject(target, 'Cannot convert undefined or null to object');
      return _reduce(ES.Call(sliceArgs, 1, arguments), assignReducer, to);
    },
    is: function is(a, b) {
      return ES.SameValue(a, b);
    }
  };
  var assignHasPendingExceptions = Object.assign && Object.preventExtensions && (function() {
    var thrower = Object.preventExtensions({1: 2});
    try {
      Object.assign(thrower, 'xy');
    } catch (e) {
      return thrower[1] === 'y';
    }
  }());
  if (assignHasPendingExceptions) {
    overrideNative(Object, 'assign', ObjectShims.assign);
  }
  defineProperties(Object, ObjectShims);
  if (supportsDescriptors) {
    var ES5ObjectShims = {setPrototypeOf: (function(Object, magic) {
        var set;
        var checkArgs = function(O, proto) {
          if (!ES.TypeIsObject(O)) {
            throw new TypeError('cannot set prototype on a non-object');
          }
          if (!(proto === null || ES.TypeIsObject(proto))) {
            throw new TypeError('can only set prototype to an object or null' + proto);
          }
        };
        var setPrototypeOf = function(O, proto) {
          checkArgs(O, proto);
          _call(set, O, proto);
          return O;
        };
        try {
          set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
          _call(set, {}, null);
        } catch (e) {
          if (Object.prototype !== {}[magic]) {
            return;
          }
          set = function(proto) {
            this[magic] = proto;
          };
          setPrototypeOf.polyfill = setPrototypeOf(setPrototypeOf({}, null), Object.prototype) instanceof Object;
        }
        return setPrototypeOf;
      }(Object, '__proto__'))};
    defineProperties(Object, ES5ObjectShims);
  }
  if (Object.setPrototypeOf && Object.getPrototypeOf && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null && Object.getPrototypeOf(Object.create(null)) === null) {
    (function() {
      var FAKENULL = Object.create(null);
      var gpo = Object.getPrototypeOf;
      var spo = Object.setPrototypeOf;
      Object.getPrototypeOf = function(o) {
        var result = gpo(o);
        return result === FAKENULL ? null : result;
      };
      Object.setPrototypeOf = function(o, p) {
        var proto = p === null ? FAKENULL : p;
        return spo(o, proto);
      };
      Object.setPrototypeOf.polyfill = false;
    }());
  }
  var objectKeysAcceptsPrimitives = !throwsError(function() {
    Object.keys('foo');
  });
  if (!objectKeysAcceptsPrimitives) {
    var originalObjectKeys = Object.keys;
    overrideNative(Object, 'keys', function keys(value) {
      return originalObjectKeys(ES.ToObject(value));
    });
    keys = Object.keys;
  }
  var objectKeysRejectsRegex = throwsError(function() {
    Object.keys(/a/g);
  });
  if (objectKeysRejectsRegex) {
    var regexRejectingObjectKeys = Object.keys;
    overrideNative(Object, 'keys', function keys(value) {
      if (Type.regex(value)) {
        var regexKeys = [];
        for (var k in value) {
          if (_hasOwnProperty(value, k)) {
            _push(regexKeys, k);
          }
        }
        return regexKeys;
      }
      return regexRejectingObjectKeys(value);
    });
    keys = Object.keys;
  }
  if (Object.getOwnPropertyNames) {
    var objectGOPNAcceptsPrimitives = !throwsError(function() {
      Object.getOwnPropertyNames('foo');
    });
    if (!objectGOPNAcceptsPrimitives) {
      var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];
      var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
      overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
        var val = ES.ToObject(value);
        if (_toString(val) === '[object Window]') {
          try {
            return originalObjectGetOwnPropertyNames(val);
          } catch (e) {
            return _concat([], cachedWindowNames);
          }
        }
        return originalObjectGetOwnPropertyNames(val);
      });
    }
  }
  if (Object.getOwnPropertyDescriptor) {
    var objectGOPDAcceptsPrimitives = !throwsError(function() {
      Object.getOwnPropertyDescriptor('foo', 'bar');
    });
    if (!objectGOPDAcceptsPrimitives) {
      var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
        return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
      });
    }
  }
  if (Object.seal) {
    var objectSealAcceptsPrimitives = !throwsError(function() {
      Object.seal('foo');
    });
    if (!objectSealAcceptsPrimitives) {
      var originalObjectSeal = Object.seal;
      overrideNative(Object, 'seal', function seal(value) {
        if (!ES.TypeIsObject(value)) {
          return value;
        }
        return originalObjectSeal(value);
      });
    }
  }
  if (Object.isSealed) {
    var objectIsSealedAcceptsPrimitives = !throwsError(function() {
      Object.isSealed('foo');
    });
    if (!objectIsSealedAcceptsPrimitives) {
      var originalObjectIsSealed = Object.isSealed;
      overrideNative(Object, 'isSealed', function isSealed(value) {
        if (!ES.TypeIsObject(value)) {
          return true;
        }
        return originalObjectIsSealed(value);
      });
    }
  }
  if (Object.freeze) {
    var objectFreezeAcceptsPrimitives = !throwsError(function() {
      Object.freeze('foo');
    });
    if (!objectFreezeAcceptsPrimitives) {
      var originalObjectFreeze = Object.freeze;
      overrideNative(Object, 'freeze', function freeze(value) {
        if (!ES.TypeIsObject(value)) {
          return value;
        }
        return originalObjectFreeze(value);
      });
    }
  }
  if (Object.isFrozen) {
    var objectIsFrozenAcceptsPrimitives = !throwsError(function() {
      Object.isFrozen('foo');
    });
    if (!objectIsFrozenAcceptsPrimitives) {
      var originalObjectIsFrozen = Object.isFrozen;
      overrideNative(Object, 'isFrozen', function isFrozen(value) {
        if (!ES.TypeIsObject(value)) {
          return true;
        }
        return originalObjectIsFrozen(value);
      });
    }
  }
  if (Object.preventExtensions) {
    var objectPreventExtensionsAcceptsPrimitives = !throwsError(function() {
      Object.preventExtensions('foo');
    });
    if (!objectPreventExtensionsAcceptsPrimitives) {
      var originalObjectPreventExtensions = Object.preventExtensions;
      overrideNative(Object, 'preventExtensions', function preventExtensions(value) {
        if (!ES.TypeIsObject(value)) {
          return value;
        }
        return originalObjectPreventExtensions(value);
      });
    }
  }
  if (Object.isExtensible) {
    var objectIsExtensibleAcceptsPrimitives = !throwsError(function() {
      Object.isExtensible('foo');
    });
    if (!objectIsExtensibleAcceptsPrimitives) {
      var originalObjectIsExtensible = Object.isExtensible;
      overrideNative(Object, 'isExtensible', function isExtensible(value) {
        if (!ES.TypeIsObject(value)) {
          return false;
        }
        return originalObjectIsExtensible(value);
      });
    }
  }
  if (Object.getPrototypeOf) {
    var objectGetProtoAcceptsPrimitives = !throwsError(function() {
      Object.getPrototypeOf('foo');
    });
    if (!objectGetProtoAcceptsPrimitives) {
      var originalGetProto = Object.getPrototypeOf;
      overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {
        return originalGetProto(ES.ToObject(value));
      });
    }
  }
  var hasFlags = supportsDescriptors && (function() {
    var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
    return desc && ES.IsCallable(desc.get);
  }());
  if (supportsDescriptors && !hasFlags) {
    var regExpFlagsGetter = function flags() {
      if (!ES.TypeIsObject(this)) {
        throw new TypeError('Method called on incompatible type: must be an object.');
      }
      var result = '';
      if (this.global) {
        result += 'g';
      }
      if (this.ignoreCase) {
        result += 'i';
      }
      if (this.multiline) {
        result += 'm';
      }
      if (this.unicode) {
        result += 'u';
      }
      if (this.sticky) {
        result += 'y';
      }
      return result;
    };
    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
  }
  var regExpSupportsFlagsWithRegex = supportsDescriptors && valueOrFalseIfThrows(function() {
    return String(new RegExp(/a/g, 'i')) === '/a/i';
  });
  var regExpNeedsToSupportSymbolMatch = hasSymbols && supportsDescriptors && (function() {
    var regex = /./;
    regex[Symbol.match] = false;
    return RegExp(regex) === regex;
  }());
  var regexToStringIsGeneric = valueOrFalseIfThrows(function() {
    return RegExp.prototype.toString.call({source: 'abc'}) === '/abc/';
  });
  var regexToStringSupportsGenericFlags = regexToStringIsGeneric && valueOrFalseIfThrows(function() {
    return RegExp.prototype.toString.call({
      source: 'a',
      flags: 'b'
    }) === '/a/b';
  });
  if (!regexToStringIsGeneric || !regexToStringSupportsGenericFlags) {
    var origRegExpToString = RegExp.prototype.toString;
    defineProperty(RegExp.prototype, 'toString', function toString() {
      var R = ES.RequireObjectCoercible(this);
      if (Type.regex(R)) {
        return _call(origRegExpToString, R);
      }
      var pattern = $String(R.source);
      var flags = $String(R.flags);
      return '/' + pattern + '/' + flags;
    }, true);
    Value.preserveToString(RegExp.prototype.toString, origRegExpToString);
  }
  if (supportsDescriptors && (!regExpSupportsFlagsWithRegex || regExpNeedsToSupportSymbolMatch)) {
    var flagsGetter = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
    var sourceDesc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source') || {};
    var legacySourceGetter = function() {
      return this.source;
    };
    var sourceGetter = ES.IsCallable(sourceDesc.get) ? sourceDesc.get : legacySourceGetter;
    var OrigRegExp = RegExp;
    var RegExpShim = (function() {
      return function RegExp(pattern, flags) {
        var patternIsRegExp = ES.IsRegExp(pattern);
        var calledWithNew = this instanceof RegExp;
        if (!calledWithNew && patternIsRegExp && typeof flags === 'undefined' && pattern.constructor === RegExp) {
          return pattern;
        }
        var P = pattern;
        var F = flags;
        if (Type.regex(pattern)) {
          P = ES.Call(sourceGetter, pattern);
          F = typeof flags === 'undefined' ? ES.Call(flagsGetter, pattern) : flags;
          return new RegExp(P, F);
        } else if (patternIsRegExp) {
          P = pattern.source;
          F = typeof flags === 'undefined' ? pattern.flags : flags;
        }
        return new OrigRegExp(pattern, flags);
      };
    }());
    wrapConstructor(OrigRegExp, RegExpShim, {$input: true});
    RegExp = RegExpShim;
    Value.redefine(globals, 'RegExp', RegExpShim);
  }
  if (supportsDescriptors) {
    var regexGlobals = {
      input: '$_',
      lastMatch: '$&',
      lastParen: '$+',
      leftContext: '$`',
      rightContext: '$\''
    };
    _forEach(keys(regexGlobals), function(prop) {
      if (prop in RegExp && !(regexGlobals[prop] in RegExp)) {
        Value.getter(RegExp, regexGlobals[prop], function get() {
          return RegExp[prop];
        });
      }
    });
  }
  addDefaultSpecies(RegExp);
  var inverseEpsilon = 1 / Number.EPSILON;
  var roundTiesToEven = function roundTiesToEven(n) {
    return (n + inverseEpsilon) - inverseEpsilon;
  };
  var BINARY_32_EPSILON = Math.pow(2, -23);
  var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);
  var BINARY_32_MIN_VALUE = Math.pow(2, -126);
  var E = Math.E;
  var LOG2E = Math.LOG2E;
  var LOG10E = Math.LOG10E;
  var numberCLZ = Number.prototype.clz;
  delete Number.prototype.clz;
  var MathShims = {
    acosh: function acosh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || value < 1) {
        return NaN;
      }
      if (x === 1) {
        return 0;
      }
      if (x === Infinity) {
        return x;
      }
      return _log((x / E) + (_sqrt(x + 1) * _sqrt(x - 1) / E)) + 1;
    },
    asinh: function asinh(value) {
      var x = Number(value);
      if (x === 0 || !globalIsFinite(x)) {
        return x;
      }
      return x < 0 ? -asinh(-x) : _log(x + _sqrt((x * x) + 1));
    },
    atanh: function atanh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || x < -1 || x > 1) {
        return NaN;
      }
      if (x === -1) {
        return -Infinity;
      }
      if (x === 1) {
        return Infinity;
      }
      if (x === 0) {
        return x;
      }
      return 0.5 * _log((1 + x) / (1 - x));
    },
    cbrt: function cbrt(value) {
      var x = Number(value);
      if (x === 0) {
        return x;
      }
      var negate = x < 0;
      var result;
      if (negate) {
        x = -x;
      }
      if (x === Infinity) {
        result = Infinity;
      } else {
        result = _exp(_log(x) / 3);
        result = ((x / (result * result)) + (2 * result)) / 3;
      }
      return negate ? -result : result;
    },
    clz32: function clz32(value) {
      var x = Number(value);
      var number = ES.ToUint32(x);
      if (number === 0) {
        return 32;
      }
      return numberCLZ ? ES.Call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * LOG2E);
    },
    cosh: function cosh(value) {
      var x = Number(value);
      if (x === 0) {
        return 1;
      }
      if (numberIsNaN(x)) {
        return NaN;
      }
      if (!globalIsFinite(x)) {
        return Infinity;
      }
      if (x < 0) {
        x = -x;
      }
      if (x > 21) {
        return _exp(x) / 2;
      }
      return (_exp(x) + _exp(-x)) / 2;
    },
    expm1: function expm1(value) {
      var x = Number(value);
      if (x === -Infinity) {
        return -1;
      }
      if (!globalIsFinite(x) || x === 0) {
        return x;
      }
      if (_abs(x) > 0.5) {
        return _exp(x) - 1;
      }
      var t = x;
      var sum = 0;
      var n = 1;
      while (sum + t !== sum) {
        sum += t;
        n += 1;
        t *= x / n;
      }
      return sum;
    },
    hypot: function hypot(x, y) {
      var result = 0;
      var largest = 0;
      for (var i = 0; i < arguments.length; ++i) {
        var value = _abs(Number(arguments[i]));
        if (largest < value) {
          result *= (largest / value) * (largest / value);
          result += 1;
          largest = value;
        } else {
          result += value > 0 ? (value / largest) * (value / largest) : value;
        }
      }
      return largest === Infinity ? Infinity : largest * _sqrt(result);
    },
    log2: function log2(value) {
      return _log(value) * LOG2E;
    },
    log10: function log10(value) {
      return _log(value) * LOG10E;
    },
    log1p: function log1p(value) {
      var x = Number(value);
      if (x < -1 || numberIsNaN(x)) {
        return NaN;
      }
      if (x === 0 || x === Infinity) {
        return x;
      }
      if (x === -1) {
        return -Infinity;
      }
      return (1 + x) - 1 === 0 ? x : x * (_log(1 + x) / ((1 + x) - 1));
    },
    sign: _sign,
    sinh: function sinh(value) {
      var x = Number(value);
      if (!globalIsFinite(x) || x === 0) {
        return x;
      }
      if (_abs(x) < 1) {
        return (Math.expm1(x) - Math.expm1(-x)) / 2;
      }
      return (_exp(x - 1) - _exp(-x - 1)) * E / 2;
    },
    tanh: function tanh(value) {
      var x = Number(value);
      if (numberIsNaN(x) || x === 0) {
        return x;
      }
      if (x >= 20) {
        return 1;
      }
      if (x <= -20) {
        return -1;
      }
      return (Math.expm1(x) - Math.expm1(-x)) / (_exp(x) + _exp(-x));
    },
    trunc: function trunc(value) {
      var x = Number(value);
      return x < 0 ? -_floor(-x) : _floor(x);
    },
    imul: function imul(x, y) {
      var a = ES.ToUint32(x);
      var b = ES.ToUint32(y);
      var ah = (a >>> 16) & 0xffff;
      var al = a & 0xffff;
      var bh = (b >>> 16) & 0xffff;
      var bl = b & 0xffff;
      return (al * bl) + ((((ah * bl) + (al * bh)) << 16) >>> 0) | 0;
    },
    fround: function fround(x) {
      var v = Number(x);
      if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) {
        return v;
      }
      var sign = _sign(v);
      var abs = _abs(v);
      if (abs < BINARY_32_MIN_VALUE) {
        return sign * roundTiesToEven(abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;
      }
      var a = (1 + (BINARY_32_EPSILON / Number.EPSILON)) * abs;
      var result = a - (a - abs);
      if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) {
        return sign * Infinity;
      }
      return sign * result;
    }
  };
  defineProperties(Math, MathShims);
  defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-1e-17) !== -1e-17);
  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
  defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);
  defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
  defineProperty(Math, 'cbrt', MathShims.cbrt, Math.abs(1 - (Math.cbrt(1e-300) / 1e-100)) / Number.EPSILON > 8);
  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);
  var expm1OfTen = Math.expm1(10);
  defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);
  var origMathRound = Math.round;
  var roundHandlesBoundaryConditions = Math.round(0.5 - (Number.EPSILON / 4)) === 0 && Math.round(-0.5 + (Number.EPSILON / 3.99)) === 1;
  var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;
  var largestPositiveNumberWhereRoundBreaks = (2 * inverseEpsilon) - 1;
  var roundDoesNotIncreaseIntegers = [smallestPositiveNumberWhereRoundBreaks, largestPositiveNumberWhereRoundBreaks].every(function(num) {
    return Math.round(num) === num;
  });
  defineProperty(Math, 'round', function round(x) {
    var floor = _floor(x);
    var ceil = floor === -1 ? -0 : floor + 1;
    return x - floor < 0.5 ? floor : ceil;
  }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);
  Value.preserveToString(Math.round, origMathRound);
  var origImul = Math.imul;
  if (Math.imul(0xffffffff, 5) !== -5) {
    Math.imul = MathShims.imul;
    Value.preserveToString(Math.imul, origImul);
  }
  if (Math.imul.length !== 2) {
    overrideNative(Math, 'imul', function imul(x, y) {
      return ES.Call(origImul, Math, arguments);
    });
  }
  var PromiseShim = (function() {
    var setTimeout = globals.setTimeout;
    if (typeof setTimeout !== 'function' && typeof setTimeout !== 'object') {
      return;
    }
    ES.IsPromise = function(promise) {
      if (!ES.TypeIsObject(promise)) {
        return false;
      }
      if (typeof promise._promise === 'undefined') {
        return false;
      }
      return true;
    };
    var PromiseCapability = function(C) {
      if (!ES.IsConstructor(C)) {
        throw new TypeError('Bad promise constructor');
      }
      var capability = this;
      var resolver = function(resolve, reject) {
        if (capability.resolve !== void 0 || capability.reject !== void 0) {
          throw new TypeError('Bad Promise implementation!');
        }
        capability.resolve = resolve;
        capability.reject = reject;
      };
      capability.resolve = void 0;
      capability.reject = void 0;
      capability.promise = new C(resolver);
      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
        throw new TypeError('Bad promise constructor');
      }
    };
    var makeZeroTimeout;
    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
      makeZeroTimeout = function() {
        var timeouts = [];
        var messageName = 'zero-timeout-message';
        var setZeroTimeout = function(fn) {
          _push(timeouts, fn);
          window.postMessage(messageName, '*');
        };
        var handleMessage = function(event) {
          if (event.source === window && event.data === messageName) {
            event.stopPropagation();
            if (timeouts.length === 0) {
              return;
            }
            var fn = _shift(timeouts);
            fn();
          }
        };
        window.addEventListener('message', handleMessage, true);
        return setZeroTimeout;
      };
    }
    var makePromiseAsap = function() {
      var P = globals.Promise;
      var pr = P && P.resolve && P.resolve();
      return pr && function(task) {
        return pr.then(task);
      };
    };
    var enqueue = ES.IsCallable(globals.setImmediate) ? globals.setImmediate : typeof process === 'object' && process.nextTick ? process.nextTick : makePromiseAsap() || (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() : function(task) {
      setTimeout(task, 0);
    });
    var PROMISE_IDENTITY = function(x) {
      return x;
    };
    var PROMISE_THROWER = function(e) {
      throw e;
    };
    var PROMISE_PENDING = 0;
    var PROMISE_FULFILLED = 1;
    var PROMISE_REJECTED = 2;
    var PROMISE_FULFILL_OFFSET = 0;
    var PROMISE_REJECT_OFFSET = 1;
    var PROMISE_CAPABILITY_OFFSET = 2;
    var PROMISE_FAKE_CAPABILITY = {};
    var enqueuePromiseReactionJob = function(handler, capability, argument) {
      enqueue(function() {
        promiseReactionJob(handler, capability, argument);
      });
    };
    var promiseReactionJob = function(handler, promiseCapability, argument) {
      var handlerResult,
          f;
      if (promiseCapability === PROMISE_FAKE_CAPABILITY) {
        return handler(argument);
      }
      try {
        handlerResult = handler(argument);
        f = promiseCapability.resolve;
      } catch (e) {
        handlerResult = e;
        f = promiseCapability.reject;
      }
      f(handlerResult);
    };
    var fulfillPromise = function(promise, value) {
      var _promise = promise._promise;
      var length = _promise.reactionLength;
      if (length > 0) {
        enqueuePromiseReactionJob(_promise.fulfillReactionHandler0, _promise.reactionCapability0, value);
        _promise.fulfillReactionHandler0 = void 0;
        _promise.rejectReactions0 = void 0;
        _promise.reactionCapability0 = void 0;
        if (length > 1) {
          for (var i = 1,
              idx = 0; i < length; i++, idx += 3) {
            enqueuePromiseReactionJob(_promise[idx + PROMISE_FULFILL_OFFSET], _promise[idx + PROMISE_CAPABILITY_OFFSET], value);
            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
          }
        }
      }
      _promise.result = value;
      _promise.state = PROMISE_FULFILLED;
      _promise.reactionLength = 0;
    };
    var rejectPromise = function(promise, reason) {
      var _promise = promise._promise;
      var length = _promise.reactionLength;
      if (length > 0) {
        enqueuePromiseReactionJob(_promise.rejectReactionHandler0, _promise.reactionCapability0, reason);
        _promise.fulfillReactionHandler0 = void 0;
        _promise.rejectReactions0 = void 0;
        _promise.reactionCapability0 = void 0;
        if (length > 1) {
          for (var i = 1,
              idx = 0; i < length; i++, idx += 3) {
            enqueuePromiseReactionJob(_promise[idx + PROMISE_REJECT_OFFSET], _promise[idx + PROMISE_CAPABILITY_OFFSET], reason);
            promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
            promise[idx + PROMISE_REJECT_OFFSET] = void 0;
            promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
          }
        }
      }
      _promise.result = reason;
      _promise.state = PROMISE_REJECTED;
      _promise.reactionLength = 0;
    };
    var createResolvingFunctions = function(promise) {
      var alreadyResolved = false;
      var resolve = function(resolution) {
        var then;
        if (alreadyResolved) {
          return;
        }
        alreadyResolved = true;
        if (resolution === promise) {
          return rejectPromise(promise, new TypeError('Self resolution'));
        }
        if (!ES.TypeIsObject(resolution)) {
          return fulfillPromise(promise, resolution);
        }
        try {
          then = resolution.then;
        } catch (e) {
          return rejectPromise(promise, e);
        }
        if (!ES.IsCallable(then)) {
          return fulfillPromise(promise, resolution);
        }
        enqueue(function() {
          promiseResolveThenableJob(promise, resolution, then);
        });
      };
      var reject = function(reason) {
        if (alreadyResolved) {
          return;
        }
        alreadyResolved = true;
        return rejectPromise(promise, reason);
      };
      return {
        resolve: resolve,
        reject: reject
      };
    };
    var optimizedThen = function(then, thenable, resolve, reject) {
      if (then === Promise$prototype$then) {
        _call(then, thenable, resolve, reject, PROMISE_FAKE_CAPABILITY);
      } else {
        _call(then, thenable, resolve, reject);
      }
    };
    var promiseResolveThenableJob = function(promise, thenable, then) {
      var resolvingFunctions = createResolvingFunctions(promise);
      var resolve = resolvingFunctions.resolve;
      var reject = resolvingFunctions.reject;
      try {
        optimizedThen(then, thenable, resolve, reject);
      } catch (e) {
        reject(e);
      }
    };
    var Promise$prototype,
        Promise$prototype$then;
    var Promise = (function() {
      var PromiseShim = function Promise(resolver) {
        if (!(this instanceof PromiseShim)) {
          throw new TypeError('Constructor Promise requires "new"');
        }
        if (this && this._promise) {
          throw new TypeError('Bad construction');
        }
        if (!ES.IsCallable(resolver)) {
          throw new TypeError('not a valid resolver');
        }
        var promise = emulateES6construct(this, PromiseShim, Promise$prototype, {_promise: {
            result: void 0,
            state: PROMISE_PENDING,
            reactionLength: 0,
            fulfillReactionHandler0: void 0,
            rejectReactionHandler0: void 0,
            reactionCapability0: void 0
          }});
        var resolvingFunctions = createResolvingFunctions(promise);
        var reject = resolvingFunctions.reject;
        try {
          resolver(resolvingFunctions.resolve, reject);
        } catch (e) {
          reject(e);
        }
        return promise;
      };
      return PromiseShim;
    }());
    Promise$prototype = Promise.prototype;
    var _promiseAllResolver = function(index, values, capability, remaining) {
      var alreadyCalled = false;
      return function(x) {
        if (alreadyCalled) {
          return;
        }
        alreadyCalled = true;
        values[index] = x;
        if ((--remaining.count) === 0) {
          var resolve = capability.resolve;
          resolve(values);
        }
      };
    };
    var performPromiseAll = function(iteratorRecord, C, resultCapability) {
      var it = iteratorRecord.iterator;
      var values = [];
      var remaining = {count: 1};
      var next,
          nextValue;
      var index = 0;
      while (true) {
        try {
          next = ES.IteratorStep(it);
          if (next === false) {
            iteratorRecord.done = true;
            break;
          }
          nextValue = next.value;
        } catch (e) {
          iteratorRecord.done = true;
          throw e;
        }
        values[index] = void 0;
        var nextPromise = C.resolve(nextValue);
        var resolveElement = _promiseAllResolver(index, values, resultCapability, remaining);
        remaining.count += 1;
        optimizedThen(nextPromise.then, nextPromise, resolveElement, resultCapability.reject);
        index += 1;
      }
      if ((--remaining.count) === 0) {
        var resolve = resultCapability.resolve;
        resolve(values);
      }
      return resultCapability.promise;
    };
    var performPromiseRace = function(iteratorRecord, C, resultCapability) {
      var it = iteratorRecord.iterator;
      var next,
          nextValue,
          nextPromise;
      while (true) {
        try {
          next = ES.IteratorStep(it);
          if (next === false) {
            iteratorRecord.done = true;
            break;
          }
          nextValue = next.value;
        } catch (e) {
          iteratorRecord.done = true;
          throw e;
        }
        nextPromise = C.resolve(nextValue);
        optimizedThen(nextPromise.then, nextPromise, resultCapability.resolve, resultCapability.reject);
      }
      return resultCapability.promise;
    };
    defineProperties(Promise, {
      all: function all(iterable) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Promise is not object');
        }
        var capability = new PromiseCapability(C);
        var iterator,
            iteratorRecord;
        try {
          iterator = ES.GetIterator(iterable);
          iteratorRecord = {
            iterator: iterator,
            done: false
          };
          return performPromiseAll(iteratorRecord, C, capability);
        } catch (e) {
          var exception = e;
          if (iteratorRecord && !iteratorRecord.done) {
            try {
              ES.IteratorClose(iterator, true);
            } catch (ee) {
              exception = ee;
            }
          }
          var reject = capability.reject;
          reject(exception);
          return capability.promise;
        }
      },
      race: function race(iterable) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Promise is not object');
        }
        var capability = new PromiseCapability(C);
        var iterator,
            iteratorRecord;
        try {
          iterator = ES.GetIterator(iterable);
          iteratorRecord = {
            iterator: iterator,
            done: false
          };
          return performPromiseRace(iteratorRecord, C, capability);
        } catch (e) {
          var exception = e;
          if (iteratorRecord && !iteratorRecord.done) {
            try {
              ES.IteratorClose(iterator, true);
            } catch (ee) {
              exception = ee;
            }
          }
          var reject = capability.reject;
          reject(exception);
          return capability.promise;
        }
      },
      reject: function reject(reason) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Bad promise constructor');
        }
        var capability = new PromiseCapability(C);
        var rejectFunc = capability.reject;
        rejectFunc(reason);
        return capability.promise;
      },
      resolve: function resolve(v) {
        var C = this;
        if (!ES.TypeIsObject(C)) {
          throw new TypeError('Bad promise constructor');
        }
        if (ES.IsPromise(v)) {
          var constructor = v.constructor;
          if (constructor === C) {
            return v;
          }
        }
        var capability = new PromiseCapability(C);
        var resolveFunc = capability.resolve;
        resolveFunc(v);
        return capability.promise;
      }
    });
    defineProperties(Promise$prototype, {
      'catch': function(onRejected) {
        return this.then(null, onRejected);
      },
      then: function then(onFulfilled, onRejected) {
        var promise = this;
        if (!ES.IsPromise(promise)) {
          throw new TypeError('not a promise');
        }
        var C = ES.SpeciesConstructor(promise, Promise);
        var resultCapability;
        var returnValueIsIgnored = arguments.length > 2 && arguments[2] === PROMISE_FAKE_CAPABILITY;
        if (returnValueIsIgnored && C === Promise) {
          resultCapability = PROMISE_FAKE_CAPABILITY;
        } else {
          resultCapability = new PromiseCapability(C);
        }
        var fulfillReactionHandler = ES.IsCallable(onFulfilled) ? onFulfilled : PROMISE_IDENTITY;
        var rejectReactionHandler = ES.IsCallable(onRejected) ? onRejected : PROMISE_THROWER;
        var _promise = promise._promise;
        var value;
        if (_promise.state === PROMISE_PENDING) {
          if (_promise.reactionLength === 0) {
            _promise.fulfillReactionHandler0 = fulfillReactionHandler;
            _promise.rejectReactionHandler0 = rejectReactionHandler;
            _promise.reactionCapability0 = resultCapability;
          } else {
            var idx = 3 * (_promise.reactionLength - 1);
            _promise[idx + PROMISE_FULFILL_OFFSET] = fulfillReactionHandler;
            _promise[idx + PROMISE_REJECT_OFFSET] = rejectReactionHandler;
            _promise[idx + PROMISE_CAPABILITY_OFFSET] = resultCapability;
          }
          _promise.reactionLength += 1;
        } else if (_promise.state === PROMISE_FULFILLED) {
          value = _promise.result;
          enqueuePromiseReactionJob(fulfillReactionHandler, resultCapability, value);
        } else if (_promise.state === PROMISE_REJECTED) {
          value = _promise.result;
          enqueuePromiseReactionJob(rejectReactionHandler, resultCapability, value);
        } else {
          throw new TypeError('unexpected Promise state');
        }
        return resultCapability.promise;
      }
    });
    PROMISE_FAKE_CAPABILITY = new PromiseCapability(Promise);
    Promise$prototype$then = Promise$prototype.then;
    return Promise;
  }());
  if (globals.Promise) {
    delete globals.Promise.accept;
    delete globals.Promise.defer;
    delete globals.Promise.prototype.chain;
  }
  if (typeof PromiseShim === 'function') {
    defineProperties(globals, {Promise: PromiseShim});
    var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function(S) {
      return S.resolve(42).then(function() {}) instanceof S;
    });
    var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function() {
      globals.Promise.reject(42).then(null, 5).then(null, noop);
    });
    var promiseRequiresObjectContext = throwsError(function() {
      globals.Promise.call(3, noop);
    });
    var promiseResolveBroken = (function(Promise) {
      var p = Promise.resolve(5);
      p.constructor = {};
      var p2 = Promise.resolve(p);
      try {
        p2.then(null, noop).then(null, noop);
      } catch (e) {
        return true;
      }
      return p === p2;
    }(globals.Promise));
    var getsThenSynchronously = supportsDescriptors && (function() {
      var count = 0;
      var thenable = Object.defineProperty({}, 'then', {get: function() {
          count += 1;
        }});
      Promise.resolve(thenable);
      return count === 1;
    }());
    var BadResolverPromise = function BadResolverPromise(executor) {
      var p = new Promise(executor);
      executor(3, function() {});
      this.then = p.then;
      this.constructor = BadResolverPromise;
    };
    BadResolverPromise.prototype = Promise.prototype;
    BadResolverPromise.all = Promise.all;
    var hasBadResolverPromise = valueOrFalseIfThrows(function() {
      return !!BadResolverPromise.all([1, 2]);
    });
    if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks || !promiseRequiresObjectContext || promiseResolveBroken || !getsThenSynchronously || hasBadResolverPromise) {
      Promise = PromiseShim;
      overrideNative(globals, 'Promise', PromiseShim);
    }
    if (Promise.all.length !== 1) {
      var origAll = Promise.all;
      overrideNative(Promise, 'all', function all(iterable) {
        return ES.Call(origAll, this, arguments);
      });
    }
    if (Promise.race.length !== 1) {
      var origRace = Promise.race;
      overrideNative(Promise, 'race', function race(iterable) {
        return ES.Call(origRace, this, arguments);
      });
    }
    if (Promise.resolve.length !== 1) {
      var origResolve = Promise.resolve;
      overrideNative(Promise, 'resolve', function resolve(x) {
        return ES.Call(origResolve, this, arguments);
      });
    }
    if (Promise.reject.length !== 1) {
      var origReject = Promise.reject;
      overrideNative(Promise, 'reject', function reject(r) {
        return ES.Call(origReject, this, arguments);
      });
    }
    ensureEnumerable(Promise, 'all');
    ensureEnumerable(Promise, 'race');
    ensureEnumerable(Promise, 'resolve');
    ensureEnumerable(Promise, 'reject');
    addDefaultSpecies(Promise);
  }
  var testOrder = function(a) {
    var b = keys(_reduce(a, function(o, k) {
      o[k] = true;
      return o;
    }, {}));
    return a.join(':') === b.join(':');
  };
  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);
  if (supportsDescriptors) {
    var fastkey = function fastkey(key, skipInsertionOrderCheck) {
      if (!skipInsertionOrderCheck && !preservesInsertionOrder) {
        return null;
      }
      if (isNullOrUndefined(key)) {
        return '^' + ES.ToString(key);
      } else if (typeof key === 'string') {
        return '$' + key;
      } else if (typeof key === 'number') {
        if (!preservesNumericInsertionOrder) {
          return 'n' + key;
        }
        return key;
      } else if (typeof key === 'boolean') {
        return 'b' + key;
      }
      return null;
    };
    var emptyObject = function emptyObject() {
      return Object.create ? Object.create(null) : {};
    };
    var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {
      if (isArray(iterable) || Type.string(iterable)) {
        _forEach(iterable, function(entry) {
          if (!ES.TypeIsObject(entry)) {
            throw new TypeError('Iterator value ' + entry + ' is not an entry object');
          }
          map.set(entry[0], entry[1]);
        });
      } else if (iterable instanceof MapConstructor) {
        _call(MapConstructor.prototype.forEach, iterable, function(value, key) {
          map.set(key, value);
        });
      } else {
        var iter,
            adder;
        if (!isNullOrUndefined(iterable)) {
          adder = map.set;
          if (!ES.IsCallable(adder)) {
            throw new TypeError('bad map');
          }
          iter = ES.GetIterator(iterable);
        }
        if (typeof iter !== 'undefined') {
          while (true) {
            var next = ES.IteratorStep(iter);
            if (next === false) {
              break;
            }
            var nextItem = next.value;
            try {
              if (!ES.TypeIsObject(nextItem)) {
                throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
              }
              _call(adder, map, nextItem[0], nextItem[1]);
            } catch (e) {
              ES.IteratorClose(iter, true);
              throw e;
            }
          }
        }
      }
    };
    var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {
      if (isArray(iterable) || Type.string(iterable)) {
        _forEach(iterable, function(value) {
          set.add(value);
        });
      } else if (iterable instanceof SetConstructor) {
        _call(SetConstructor.prototype.forEach, iterable, function(value) {
          set.add(value);
        });
      } else {
        var iter,
            adder;
        if (!isNullOrUndefined(iterable)) {
          adder = set.add;
          if (!ES.IsCallable(adder)) {
            throw new TypeError('bad set');
          }
          iter = ES.GetIterator(iterable);
        }
        if (typeof iter !== 'undefined') {
          while (true) {
            var next = ES.IteratorStep(iter);
            if (next === false) {
              break;
            }
            var nextValue = next.value;
            try {
              _call(adder, set, nextValue);
            } catch (e) {
              ES.IteratorClose(iter, true);
              throw e;
            }
          }
        }
      }
    };
    var collectionShims = {
      Map: (function() {
        var empty = {};
        var MapEntry = function MapEntry(key, value) {
          this.key = key;
          this.value = value;
          this.next = null;
          this.prev = null;
        };
        MapEntry.prototype.isRemoved = function isRemoved() {
          return this.key === empty;
        };
        var isMap = function isMap(map) {
          return !!map._es6map;
        };
        var requireMapSlot = function requireMapSlot(map, method) {
          if (!ES.TypeIsObject(map) || !isMap(map)) {
            throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(map));
          }
        };
        var MapIterator = function MapIterator(map, kind) {
          requireMapSlot(map, '[[MapIterator]]');
          this.head = map._head;
          this.i = this.head;
          this.kind = kind;
        };
        MapIterator.prototype = {next: function next() {
            var i = this.i;
            var kind = this.kind;
            var head = this.head;
            if (typeof this.i === 'undefined') {
              return iteratorResult();
            }
            while (i.isRemoved() && i !== head) {
              i = i.prev;
            }
            var result;
            while (i.next !== head) {
              i = i.next;
              if (!i.isRemoved()) {
                if (kind === 'key') {
                  result = i.key;
                } else if (kind === 'value') {
                  result = i.value;
                } else {
                  result = [i.key, i.value];
                }
                this.i = i;
                return iteratorResult(result);
              }
            }
            this.i = void 0;
            return iteratorResult();
          }};
        addIterator(MapIterator.prototype);
        var Map$prototype;
        var MapShim = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          if (this && this._es6map) {
            throw new TypeError('Bad construction');
          }
          var map = emulateES6construct(this, Map, Map$prototype, {
            _es6map: true,
            _head: null,
            _map: OrigMap ? new OrigMap() : null,
            _size: 0,
            _storage: emptyObject()
          });
          var head = new MapEntry(null, null);
          head.next = head.prev = head;
          map._head = head;
          if (arguments.length > 0) {
            addIterableToMap(Map, map, arguments[0]);
          }
          return map;
        };
        Map$prototype = MapShim.prototype;
        Value.getter(Map$prototype, 'size', function() {
          if (typeof this._size === 'undefined') {
            throw new TypeError('size method called on incompatible Map');
          }
          return this._size;
        });
        defineProperties(Map$prototype, {
          get: function get(key) {
            requireMapSlot(this, 'get');
            var entry;
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              entry = this._storage[fkey];
              if (entry) {
                return entry.value;
              } else {
                return;
              }
            }
            if (this._map) {
              entry = origMapGet.call(this._map, key);
              if (entry) {
                return entry.value;
              } else {
                return;
              }
            }
            var head = this._head;
            var i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return i.value;
              }
            }
          },
          has: function has(key) {
            requireMapSlot(this, 'has');
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              return typeof this._storage[fkey] !== 'undefined';
            }
            if (this._map) {
              return origMapHas.call(this._map, key);
            }
            var head = this._head;
            var i = head;
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                return true;
              }
            }
            return false;
          },
          set: function set(key, value) {
            requireMapSlot(this, 'set');
            var head = this._head;
            var i = head;
            var entry;
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              if (typeof this._storage[fkey] !== 'undefined') {
                this._storage[fkey].value = value;
                return this;
              } else {
                entry = this._storage[fkey] = new MapEntry(key, value);
                i = head.prev;
              }
            } else if (this._map) {
              if (origMapHas.call(this._map, key)) {
                origMapGet.call(this._map, key).value = value;
              } else {
                entry = new MapEntry(key, value);
                origMapSet.call(this._map, key, entry);
                i = head.prev;
              }
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.value = value;
                return this;
              }
            }
            entry = entry || new MapEntry(key, value);
            if (ES.SameValue(-0, key)) {
              entry.key = +0;
            }
            entry.next = this._head;
            entry.prev = this._head.prev;
            entry.prev.next = entry;
            entry.next.prev = entry;
            this._size += 1;
            return this;
          },
          'delete': function(key) {
            requireMapSlot(this, 'delete');
            var head = this._head;
            var i = head;
            var fkey = fastkey(key, true);
            if (fkey !== null) {
              if (typeof this._storage[fkey] === 'undefined') {
                return false;
              }
              i = this._storage[fkey].prev;
              delete this._storage[fkey];
            } else if (this._map) {
              if (!origMapHas.call(this._map, key)) {
                return false;
              }
              i = origMapGet.call(this._map, key).prev;
              origMapDelete.call(this._map, key);
            }
            while ((i = i.next) !== head) {
              if (ES.SameValueZero(i.key, key)) {
                i.key = empty;
                i.value = empty;
                i.prev.next = i.next;
                i.next.prev = i.prev;
                this._size -= 1;
                return true;
              }
            }
            return false;
          },
          clear: function clear() {
            requireMapSlot(this, 'clear');
            this._map = OrigMap ? new OrigMap() : null;
            this._size = 0;
            this._storage = emptyObject();
            var head = this._head;
            var i = head;
            var p = i.next;
            while ((i = p) !== head) {
              i.key = empty;
              i.value = empty;
              p = i.next;
              i.next = i.prev = head;
            }
            head.next = head.prev = head;
          },
          keys: function keys() {
            requireMapSlot(this, 'keys');
            return new MapIterator(this, 'key');
          },
          values: function values() {
            requireMapSlot(this, 'values');
            return new MapIterator(this, 'value');
          },
          entries: function entries() {
            requireMapSlot(this, 'entries');
            return new MapIterator(this, 'key+value');
          },
          forEach: function forEach(callback) {
            requireMapSlot(this, 'forEach');
            var context = arguments.length > 1 ? arguments[1] : null;
            var it = this.entries();
            for (var entry = it.next(); !entry.done; entry = it.next()) {
              if (context) {
                _call(callback, context, entry.value[1], entry.value[0], this);
              } else {
                callback(entry.value[1], entry.value[0], this);
              }
            }
          }
        });
        addIterator(Map$prototype, Map$prototype.entries);
        return MapShim;
      }()),
      Set: (function() {
        var isSet = function isSet(set) {
          return set._es6set && typeof set._storage !== 'undefined';
        };
        var requireSetSlot = function requireSetSlot(set, method) {
          if (!ES.TypeIsObject(set) || !isSet(set)) {
            throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(set));
          }
        };
        var Set$prototype;
        var SetShim = function Set() {
          if (!(this instanceof Set)) {
            throw new TypeError('Constructor Set requires "new"');
          }
          if (this && this._es6set) {
            throw new TypeError('Bad construction');
          }
          var set = emulateES6construct(this, Set, Set$prototype, {
            _es6set: true,
            '[[SetData]]': null,
            _storage: emptyObject()
          });
          if (!set._es6set) {
            throw new TypeError('bad set');
          }
          if (arguments.length > 0) {
            addIterableToSet(Set, set, arguments[0]);
          }
          return set;
        };
        Set$prototype = SetShim.prototype;
        var decodeKey = function(key) {
          var k = key;
          if (k === '^null') {
            return null;
          } else if (k === '^undefined') {
            return void 0;
          } else {
            var first = k.charAt(0);
            if (first === '$') {
              return _strSlice(k, 1);
            } else if (first === 'n') {
              return +_strSlice(k, 1);
            } else if (first === 'b') {
              return k === 'btrue';
            }
          }
          return +k;
        };
        var ensureMap = function ensureMap(set) {
          if (!set['[[SetData]]']) {
            var m = new collectionShims.Map();
            set['[[SetData]]'] = m;
            _forEach(keys(set._storage), function(key) {
              var k = decodeKey(key);
              m.set(k, k);
            });
            set['[[SetData]]'] = m;
          }
          set._storage = null;
        };
        Value.getter(SetShim.prototype, 'size', function() {
          requireSetSlot(this, 'size');
          if (this._storage) {
            return keys(this._storage).length;
          }
          ensureMap(this);
          return this['[[SetData]]'].size;
        });
        defineProperties(SetShim.prototype, {
          has: function has(key) {
            requireSetSlot(this, 'has');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              return !!this._storage[fkey];
            }
            ensureMap(this);
            return this['[[SetData]]'].has(key);
          },
          add: function add(key) {
            requireSetSlot(this, 'add');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              this._storage[fkey] = true;
              return this;
            }
            ensureMap(this);
            this['[[SetData]]'].set(key, key);
            return this;
          },
          'delete': function(key) {
            requireSetSlot(this, 'delete');
            var fkey;
            if (this._storage && (fkey = fastkey(key)) !== null) {
              var hasFKey = _hasOwnProperty(this._storage, fkey);
              return (delete this._storage[fkey]) && hasFKey;
            }
            ensureMap(this);
            return this['[[SetData]]']['delete'](key);
          },
          clear: function clear() {
            requireSetSlot(this, 'clear');
            if (this._storage) {
              this._storage = emptyObject();
            }
            if (this['[[SetData]]']) {
              this['[[SetData]]'].clear();
            }
          },
          values: function values() {
            requireSetSlot(this, 'values');
            ensureMap(this);
            return this['[[SetData]]'].values();
          },
          entries: function entries() {
            requireSetSlot(this, 'entries');
            ensureMap(this);
            return this['[[SetData]]'].entries();
          },
          forEach: function forEach(callback) {
            requireSetSlot(this, 'forEach');
            var context = arguments.length > 1 ? arguments[1] : null;
            var entireSet = this;
            ensureMap(entireSet);
            this['[[SetData]]'].forEach(function(value, key) {
              if (context) {
                _call(callback, context, key, key, entireSet);
              } else {
                callback(key, key, entireSet);
              }
            });
          }
        });
        defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);
        addIterator(SetShim.prototype, SetShim.prototype.values);
        return SetShim;
      }())
    };
    if (globals.Map || globals.Set) {
      var mapAcceptsArguments = valueOrFalseIfThrows(function() {
        return new Map([[1, 2]]).get(1) === 2;
      });
      if (!mapAcceptsArguments) {
        globals.Map = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          var m = new OrigMap();
          if (arguments.length > 0) {
            addIterableToMap(Map, m, arguments[0]);
          }
          delete m.constructor;
          Object.setPrototypeOf(m, globals.Map.prototype);
          return m;
        };
        globals.Map.prototype = create(OrigMap.prototype);
        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
        Value.preserveToString(globals.Map, OrigMap);
      }
      var testMap = new Map();
      var mapUsesSameValueZero = (function() {
        var m = new Map([[1, 0], [2, 0], [3, 0], [4, 0]]);
        m.set(-0, m);
        return m.get(0) === m && m.get(-0) === m && m.has(0) && m.has(-0);
      }());
      var mapSupportsChaining = testMap.set(1, 2) === testMap;
      if (!mapUsesSameValueZero || !mapSupportsChaining) {
        overrideNative(Map.prototype, 'set', function set(k, v) {
          _call(origMapSet, this, k === 0 ? 0 : k, v);
          return this;
        });
      }
      if (!mapUsesSameValueZero) {
        defineProperties(Map.prototype, {
          get: function get(k) {
            return _call(origMapGet, this, k === 0 ? 0 : k);
          },
          has: function has(k) {
            return _call(origMapHas, this, k === 0 ? 0 : k);
          }
        }, true);
        Value.preserveToString(Map.prototype.get, origMapGet);
        Value.preserveToString(Map.prototype.has, origMapHas);
      }
      var testSet = new Set();
      var setUsesSameValueZero = (function(s) {
        s['delete'](0);
        s.add(-0);
        return !s.has(0);
      }(testSet));
      var setSupportsChaining = testSet.add(1) === testSet;
      if (!setUsesSameValueZero || !setSupportsChaining) {
        var origSetAdd = Set.prototype.add;
        Set.prototype.add = function add(v) {
          _call(origSetAdd, this, v === 0 ? 0 : v);
          return this;
        };
        Value.preserveToString(Set.prototype.add, origSetAdd);
      }
      if (!setUsesSameValueZero) {
        var origSetHas = Set.prototype.has;
        Set.prototype.has = function has(v) {
          return _call(origSetHas, this, v === 0 ? 0 : v);
        };
        Value.preserveToString(Set.prototype.has, origSetHas);
        var origSetDel = Set.prototype['delete'];
        Set.prototype['delete'] = function SetDelete(v) {
          return _call(origSetDel, this, v === 0 ? 0 : v);
        };
        Value.preserveToString(Set.prototype['delete'], origSetDel);
      }
      var mapSupportsSubclassing = supportsSubclassing(globals.Map, function(M) {
        var m = new M([]);
        m.set(42, 42);
        return m instanceof M;
      });
      var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing;
      var mapRequiresNew = (function() {
        try {
          return !(globals.Map() instanceof globals.Map);
        } catch (e) {
          return e instanceof TypeError;
        }
      }());
      if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {
        globals.Map = function Map() {
          if (!(this instanceof Map)) {
            throw new TypeError('Constructor Map requires "new"');
          }
          var m = new OrigMap();
          if (arguments.length > 0) {
            addIterableToMap(Map, m, arguments[0]);
          }
          delete m.constructor;
          Object.setPrototypeOf(m, Map.prototype);
          return m;
        };
        globals.Map.prototype = OrigMap.prototype;
        defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
        Value.preserveToString(globals.Map, OrigMap);
      }
      var setSupportsSubclassing = supportsSubclassing(globals.Set, function(S) {
        var s = new S([]);
        s.add(42, 42);
        return s instanceof S;
      });
      var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing;
      var setRequiresNew = (function() {
        try {
          return !(globals.Set() instanceof globals.Set);
        } catch (e) {
          return e instanceof TypeError;
        }
      }());
      if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {
        var OrigSet = globals.Set;
        globals.Set = function Set() {
          if (!(this instanceof Set)) {
            throw new TypeError('Constructor Set requires "new"');
          }
          var s = new OrigSet();
          if (arguments.length > 0) {
            addIterableToSet(Set, s, arguments[0]);
          }
          delete s.constructor;
          Object.setPrototypeOf(s, Set.prototype);
          return s;
        };
        globals.Set.prototype = OrigSet.prototype;
        defineProperty(globals.Set.prototype, 'constructor', globals.Set, true);
        Value.preserveToString(globals.Set, OrigSet);
      }
      var newMap = new globals.Map();
      var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function() {
        return newMap.keys().next().done;
      });
      if (typeof globals.Map.prototype.clear !== 'function' || new globals.Set().size !== 0 || newMap.size !== 0 || typeof globals.Map.prototype.keys !== 'function' || typeof globals.Set.prototype.keys !== 'function' || typeof globals.Map.prototype.forEach !== 'function' || typeof globals.Set.prototype.forEach !== 'function' || isCallableWithoutNew(globals.Map) || isCallableWithoutNew(globals.Set) || typeof newMap.keys().next !== 'function' || mapIterationThrowsStopIterator || !mapSupportsSubclassing) {
        defineProperties(globals, {
          Map: collectionShims.Map,
          Set: collectionShims.Set
        }, true);
      }
      if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
        defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
      }
      addIterator(Object.getPrototypeOf((new globals.Map()).keys()));
      addIterator(Object.getPrototypeOf((new globals.Set()).keys()));
      if (functionsHaveNames && globals.Set.prototype.has.name !== 'has') {
        var anonymousSetHas = globals.Set.prototype.has;
        overrideNative(globals.Set.prototype, 'has', function has(key) {
          return _call(anonymousSetHas, this, key);
        });
      }
    }
    defineProperties(globals, collectionShims);
    addDefaultSpecies(globals.Map);
    addDefaultSpecies(globals.Set);
  }
  var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
    if (!ES.TypeIsObject(target)) {
      throw new TypeError('target must be an object');
    }
  };
  var ReflectShims = {
    apply: function apply() {
      return ES.Call(ES.Call, null, arguments);
    },
    construct: function construct(constructor, args) {
      if (!ES.IsConstructor(constructor)) {
        throw new TypeError('First argument must be a constructor.');
      }
      var newTarget = arguments.length > 2 ? arguments[2] : constructor;
      if (!ES.IsConstructor(newTarget)) {
        throw new TypeError('new.target must be a constructor.');
      }
      return ES.Construct(constructor, args, newTarget, 'internal');
    },
    deleteProperty: function deleteProperty(target, key) {
      throwUnlessTargetIsObject(target);
      if (supportsDescriptors) {
        var desc = Object.getOwnPropertyDescriptor(target, key);
        if (desc && !desc.configurable) {
          return false;
        }
      }
      return delete target[key];
    },
    has: function has(target, key) {
      throwUnlessTargetIsObject(target);
      return key in target;
    }
  };
  if (Object.getOwnPropertyNames) {
    Object.assign(ReflectShims, {ownKeys: function ownKeys(target) {
        throwUnlessTargetIsObject(target);
        var keys = Object.getOwnPropertyNames(target);
        if (ES.IsCallable(Object.getOwnPropertySymbols)) {
          _pushApply(keys, Object.getOwnPropertySymbols(target));
        }
        return keys;
      }});
  }
  var callAndCatchException = function ConvertExceptionToBoolean(func) {
    return !throwsError(func);
  };
  if (Object.preventExtensions) {
    Object.assign(ReflectShims, {
      isExtensible: function isExtensible(target) {
        throwUnlessTargetIsObject(target);
        return Object.isExtensible(target);
      },
      preventExtensions: function preventExtensions(target) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function() {
          Object.preventExtensions(target);
        });
      }
    });
  }
  if (supportsDescriptors) {
    var internalGet = function get(target, key, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);
      if (!desc) {
        var parent = Object.getPrototypeOf(target);
        if (parent === null) {
          return void 0;
        }
        return internalGet(parent, key, receiver);
      }
      if ('value' in desc) {
        return desc.value;
      }
      if (desc.get) {
        return ES.Call(desc.get, receiver);
      }
      return void 0;
    };
    var internalSet = function set(target, key, value, receiver) {
      var desc = Object.getOwnPropertyDescriptor(target, key);
      if (!desc) {
        var parent = Object.getPrototypeOf(target);
        if (parent !== null) {
          return internalSet(parent, key, value, receiver);
        }
        desc = {
          value: void 0,
          writable: true,
          enumerable: true,
          configurable: true
        };
      }
      if ('value' in desc) {
        if (!desc.writable) {
          return false;
        }
        if (!ES.TypeIsObject(receiver)) {
          return false;
        }
        var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);
        if (existingDesc) {
          return Reflect.defineProperty(receiver, key, {value: value});
        } else {
          return Reflect.defineProperty(receiver, key, {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
      if (desc.set) {
        _call(desc.set, receiver, value);
        return true;
      }
      return false;
    };
    Object.assign(ReflectShims, {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        throwUnlessTargetIsObject(target);
        return callAndCatchException(function() {
          Object.defineProperty(target, propertyKey, attributes);
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        throwUnlessTargetIsObject(target);
        return Object.getOwnPropertyDescriptor(target, propertyKey);
      },
      get: function get(target, key) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 2 ? arguments[2] : target;
        return internalGet(target, key, receiver);
      },
      set: function set(target, key, value) {
        throwUnlessTargetIsObject(target);
        var receiver = arguments.length > 3 ? arguments[3] : target;
        return internalSet(target, key, value, receiver);
      }
    });
  }
  if (Object.getPrototypeOf) {
    var objectDotGetPrototypeOf = Object.getPrototypeOf;
    ReflectShims.getPrototypeOf = function getPrototypeOf(target) {
      throwUnlessTargetIsObject(target);
      return objectDotGetPrototypeOf(target);
    };
  }
  if (Object.setPrototypeOf && ReflectShims.getPrototypeOf) {
    var willCreateCircularPrototype = function(object, lastProto) {
      var proto = lastProto;
      while (proto) {
        if (object === proto) {
          return true;
        }
        proto = ReflectShims.getPrototypeOf(proto);
      }
      return false;
    };
    Object.assign(ReflectShims, {setPrototypeOf: function setPrototypeOf(object, proto) {
        throwUnlessTargetIsObject(object);
        if (proto !== null && !ES.TypeIsObject(proto)) {
          throw new TypeError('proto must be an object or null');
        }
        if (proto === Reflect.getPrototypeOf(object)) {
          return true;
        }
        if (Reflect.isExtensible && !Reflect.isExtensible(object)) {
          return false;
        }
        if (willCreateCircularPrototype(object, proto)) {
          return false;
        }
        Object.setPrototypeOf(object, proto);
        return true;
      }});
  }
  var defineOrOverrideReflectProperty = function(key, shim) {
    if (!ES.IsCallable(globals.Reflect[key])) {
      defineProperty(globals.Reflect, key, shim);
    } else {
      var acceptsPrimitives = valueOrFalseIfThrows(function() {
        globals.Reflect[key](1);
        globals.Reflect[key](NaN);
        globals.Reflect[key](true);
        return true;
      });
      if (acceptsPrimitives) {
        overrideNative(globals.Reflect, key, shim);
      }
    }
  };
  Object.keys(ReflectShims).forEach(function(key) {
    defineOrOverrideReflectProperty(key, ReflectShims[key]);
  });
  var originalReflectGetProto = globals.Reflect.getPrototypeOf;
  if (functionsHaveNames && originalReflectGetProto && originalReflectGetProto.name !== 'getPrototypeOf') {
    overrideNative(globals.Reflect, 'getPrototypeOf', function getPrototypeOf(target) {
      return _call(originalReflectGetProto, globals.Reflect, target);
    });
  }
  if (globals.Reflect.setPrototypeOf) {
    if (valueOrFalseIfThrows(function() {
      globals.Reflect.setPrototypeOf(1, {});
      return true;
    })) {
      overrideNative(globals.Reflect, 'setPrototypeOf', ReflectShims.setPrototypeOf);
    }
  }
  if (globals.Reflect.defineProperty) {
    if (!valueOrFalseIfThrows(function() {
      var basic = !globals.Reflect.defineProperty(1, 'test', {value: 1});
      var extensible = typeof Object.preventExtensions !== 'function' || !globals.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});
      return basic && extensible;
    })) {
      overrideNative(globals.Reflect, 'defineProperty', ReflectShims.defineProperty);
    }
  }
  if (globals.Reflect.construct) {
    if (!valueOrFalseIfThrows(function() {
      var F = function F() {};
      return globals.Reflect.construct(function() {}, [], F) instanceof F;
    })) {
      overrideNative(globals.Reflect, 'construct', ReflectShims.construct);
    }
  }
  if (String(new Date(NaN)) !== 'Invalid Date') {
    var dateToString = Date.prototype.toString;
    var shimmedDateToString = function toString() {
      var valueOf = +this;
      if (valueOf !== valueOf) {
        return 'Invalid Date';
      }
      return ES.Call(dateToString, this);
    };
    overrideNative(Date.prototype, 'toString', shimmedDateToString);
  }
  var stringHTMLshims = {
    anchor: function anchor(name) {
      return ES.CreateHTML(this, 'a', 'name', name);
    },
    big: function big() {
      return ES.CreateHTML(this, 'big', '', '');
    },
    blink: function blink() {
      return ES.CreateHTML(this, 'blink', '', '');
    },
    bold: function bold() {
      return ES.CreateHTML(this, 'b', '', '');
    },
    fixed: function fixed() {
      return ES.CreateHTML(this, 'tt', '', '');
    },
    fontcolor: function fontcolor(color) {
      return ES.CreateHTML(this, 'font', 'color', color);
    },
    fontsize: function fontsize(size) {
      return ES.CreateHTML(this, 'font', 'size', size);
    },
    italics: function italics() {
      return ES.CreateHTML(this, 'i', '', '');
    },
    link: function link(url) {
      return ES.CreateHTML(this, 'a', 'href', url);
    },
    small: function small() {
      return ES.CreateHTML(this, 'small', '', '');
    },
    strike: function strike() {
      return ES.CreateHTML(this, 'strike', '', '');
    },
    sub: function sub() {
      return ES.CreateHTML(this, 'sub', '', '');
    },
    sup: function sub() {
      return ES.CreateHTML(this, 'sup', '', '');
    }
  };
  _forEach(Object.keys(stringHTMLshims), function(key) {
    var method = String.prototype[key];
    var shouldOverwrite = false;
    if (ES.IsCallable(method)) {
      var output = _call(method, '', ' " ');
      var quotesCount = _concat([], output.match(/"/g)).length;
      shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
    } else {
      shouldOverwrite = true;
    }
    if (shouldOverwrite) {
      overrideNative(String.prototype, key, stringHTMLshims[key]);
    }
  });
  var JSONstringifiesSymbols = (function() {
    if (!hasSymbols) {
      return false;
    }
    var stringify = typeof JSON === 'object' && typeof JSON.stringify === 'function' ? JSON.stringify : null;
    if (!stringify) {
      return false;
    }
    if (typeof stringify(Symbol()) !== 'undefined') {
      return true;
    }
    if (stringify([Symbol()]) !== '[null]') {
      return true;
    }
    var obj = {a: Symbol()};
    obj[Symbol()] = true;
    if (stringify(obj) !== '{}') {
      return true;
    }
    return false;
  }());
  var JSONstringifyAcceptsObjectSymbol = valueOrFalseIfThrows(function() {
    if (!hasSymbols) {
      return true;
    }
    return JSON.stringify(Object(Symbol())) === '{}' && JSON.stringify([Object(Symbol())]) === '[{}]';
  });
  if (JSONstringifiesSymbols || !JSONstringifyAcceptsObjectSymbol) {
    var origStringify = JSON.stringify;
    overrideNative(JSON, 'stringify', function stringify(value) {
      if (typeof value === 'symbol') {
        return;
      }
      var replacer;
      if (arguments.length > 1) {
        replacer = arguments[1];
      }
      var args = [value];
      if (!isArray(replacer)) {
        var replaceFn = ES.IsCallable(replacer) ? replacer : null;
        var wrappedReplacer = function(key, val) {
          var parsedValue = replaceFn ? _call(replaceFn, this, key, val) : val;
          if (typeof parsedValue !== 'symbol') {
            if (Type.symbol(parsedValue)) {
              return assignTo({})(parsedValue);
            } else {
              return parsedValue;
            }
          }
        };
        args.push(wrappedReplacer);
      } else {
        args.push(replacer);
      }
      if (arguments.length > 2) {
        args.push(arguments[2]);
      }
      return origStringify.apply(this, args);
    });
  }
  return globals;
}));

})();
(function() {
var define = $__System.amdDefine;
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define("3", [], factory) : (factory());
}(this, (function() {
  'use strict';
  var Zone$1 = (function(global) {
    if (global.Zone) {
      throw new Error('Zone already loaded.');
    }
    var Zone = (function() {
      function Zone(parent, zoneSpec) {
        this._properties = null;
        this._parent = parent;
        this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
        this._properties = zoneSpec && zoneSpec.properties || {};
        this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
      }
      Zone.assertZonePatched = function() {
        if (global.Promise !== ZoneAwarePromise) {
          throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
        }
      };
      Object.defineProperty(Zone, "current", {
        get: function() {
          return _currentZone;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Zone, "currentTask", {
        get: function() {
          return _currentTask;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Zone.prototype, "parent", {
        get: function() {
          return this._parent;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Zone.prototype, "name", {
        get: function() {
          return this._name;
        },
        enumerable: true,
        configurable: true
      });
      Zone.prototype.get = function(key) {
        var zone = this.getZoneWith(key);
        if (zone)
          return zone._properties[key];
      };
      Zone.prototype.getZoneWith = function(key) {
        var current = this;
        while (current) {
          if (current._properties.hasOwnProperty(key)) {
            return current;
          }
          current = current._parent;
        }
        return null;
      };
      Zone.prototype.fork = function(zoneSpec) {
        if (!zoneSpec)
          throw new Error('ZoneSpec required!');
        return this._zoneDelegate.fork(this, zoneSpec);
      };
      Zone.prototype.wrap = function(callback, source) {
        if (typeof callback !== 'function') {
          throw new Error('Expecting function got: ' + callback);
        }
        var _callback = this._zoneDelegate.intercept(this, callback, source);
        var zone = this;
        return function() {
          return zone.runGuarded(_callback, this, arguments, source);
        };
      };
      Zone.prototype.run = function(callback, applyThis, applyArgs, source) {
        if (applyThis === void 0) {
          applyThis = null;
        }
        if (applyArgs === void 0) {
          applyArgs = null;
        }
        if (source === void 0) {
          source = null;
        }
        var oldZone = _currentZone;
        _currentZone = this;
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } finally {
          _currentZone = oldZone;
        }
      };
      Zone.prototype.runGuarded = function(callback, applyThis, applyArgs, source) {
        if (applyThis === void 0) {
          applyThis = null;
        }
        if (applyArgs === void 0) {
          applyArgs = null;
        }
        if (source === void 0) {
          source = null;
        }
        var oldZone = _currentZone;
        _currentZone = this;
        try {
          try {
            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          _currentZone = oldZone;
        }
      };
      Zone.prototype.runTask = function(task, applyThis, applyArgs) {
        task.runCount++;
        if (task.zone != this)
          throw new Error('A task can only be run in the zone which created it! (Creation: ' + task.zone.name + '; Execution: ' + this.name + ')');
        var previousTask = _currentTask;
        _currentTask = task;
        var oldZone = _currentZone;
        _currentZone = this;
        try {
          if (task.type == 'macroTask' && task.data && !task.data.isPeriodic) {
            task.cancelFn = null;
          }
          try {
            return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          _currentZone = oldZone;
          _currentTask = previousTask;
        }
      };
      Zone.prototype.scheduleMicroTask = function(source, callback, data, customSchedule) {
        return this._zoneDelegate.scheduleTask(this, new ZoneTask('microTask', this, source, callback, data, customSchedule, null));
      };
      Zone.prototype.scheduleMacroTask = function(source, callback, data, customSchedule, customCancel) {
        return this._zoneDelegate.scheduleTask(this, new ZoneTask('macroTask', this, source, callback, data, customSchedule, customCancel));
      };
      Zone.prototype.scheduleEventTask = function(source, callback, data, customSchedule, customCancel) {
        return this._zoneDelegate.scheduleTask(this, new ZoneTask('eventTask', this, source, callback, data, customSchedule, customCancel));
      };
      Zone.prototype.cancelTask = function(task) {
        var value = this._zoneDelegate.cancelTask(this, task);
        task.runCount = -1;
        task.cancelFn = null;
        return value;
      };
      Zone.__symbol__ = __symbol__;
      return Zone;
    }());
    var ZoneDelegate = (function() {
      function ZoneDelegate(zone, parentDelegate, zoneSpec) {
        this._taskCounts = {
          microTask: 0,
          macroTask: 0,
          eventTask: 0
        };
        this.zone = zone;
        this._parentDelegate = parentDelegate;
        this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
        this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
        this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
        this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
        this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
        this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
        this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
        this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
        this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
        this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
        this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
        this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
        this._hasTaskZS = zoneSpec && (zoneSpec.onHasTask ? zoneSpec : parentDelegate._hasTaskZS);
        this._hasTaskDlgt = zoneSpec && (zoneSpec.onHasTask ? parentDelegate : parentDelegate._hasTaskDlgt);
      }
      ZoneDelegate.prototype.fork = function(targetZone, zoneSpec) {
        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
      };
      ZoneDelegate.prototype.intercept = function(targetZone, callback, source) {
        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this.zone, targetZone, callback, source) : callback;
      };
      ZoneDelegate.prototype.invoke = function(targetZone, callback, applyThis, applyArgs, source) {
        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this.zone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
      };
      ZoneDelegate.prototype.handleError = function(targetZone, error) {
        return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this.zone, targetZone, error) : true;
      };
      ZoneDelegate.prototype.scheduleTask = function(targetZone, task) {
        try {
          if (this._scheduleTaskZS) {
            return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this.zone, targetZone, task);
          } else if (task.scheduleFn) {
            task.scheduleFn(task);
          } else if (task.type == 'microTask') {
            scheduleMicroTask(task);
          } else {
            throw new Error('Task is missing scheduleFn.');
          }
          return task;
        } finally {
          if (targetZone == this.zone) {
            this._updateTaskCount(task.type, 1);
          }
        }
      };
      ZoneDelegate.prototype.invokeTask = function(targetZone, task, applyThis, applyArgs) {
        try {
          return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this.zone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
        } finally {
          if (targetZone == this.zone && (task.type != 'eventTask') && !(task.data && task.data.isPeriodic)) {
            this._updateTaskCount(task.type, -1);
          }
        }
      };
      ZoneDelegate.prototype.cancelTask = function(targetZone, task) {
        var value;
        if (this._cancelTaskZS) {
          value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this.zone, targetZone, task);
        } else if (!task.cancelFn) {
          throw new Error('Task does not support cancellation, or is already canceled.');
        } else {
          value = task.cancelFn(task);
        }
        if (targetZone == this.zone) {
          this._updateTaskCount(task.type, -1);
        }
        return value;
      };
      ZoneDelegate.prototype.hasTask = function(targetZone, isEmpty) {
        return this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this.zone, targetZone, isEmpty);
      };
      ZoneDelegate.prototype._updateTaskCount = function(type, count) {
        var counts = this._taskCounts;
        var prev = counts[type];
        var next = counts[type] = prev + count;
        if (next < 0) {
          throw new Error('More tasks executed then were scheduled.');
        }
        if (prev == 0 || next == 0) {
          var isEmpty = {
            microTask: counts.microTask > 0,
            macroTask: counts.macroTask > 0,
            eventTask: counts.eventTask > 0,
            change: type
          };
          try {
            this.hasTask(this.zone, isEmpty);
          } finally {
            if (this._parentDelegate) {
              this._parentDelegate._updateTaskCount(type, count);
            }
          }
        }
      };
      return ZoneDelegate;
    }());
    var ZoneTask = (function() {
      function ZoneTask(type, zone, source, callback, options, scheduleFn, cancelFn) {
        this.runCount = 0;
        this.type = type;
        this.zone = zone;
        this.source = source;
        this.data = options;
        this.scheduleFn = scheduleFn;
        this.cancelFn = cancelFn;
        this.callback = callback;
        var self = this;
        this.invoke = function() {
          _numberOfNestedTaskFrames++;
          try {
            return zone.runTask(self, this, arguments);
          } finally {
            if (_numberOfNestedTaskFrames == 1) {
              drainMicroTaskQueue();
            }
            _numberOfNestedTaskFrames--;
          }
        };
      }
      ZoneTask.prototype.toString = function() {
        if (this.data && typeof this.data.handleId !== 'undefined') {
          return this.data.handleId;
        } else {
          return Object.prototype.toString.call(this);
        }
      };
      return ZoneTask;
    }());
    function __symbol__(name) {
      return '__zone_symbol__' + name;
    }
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _currentZone = new Zone(null, null);
    var _currentTask = null;
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var _uncaughtPromiseErrors = [];
    var _numberOfNestedTaskFrames = 0;
    function scheduleQueueDrain() {
      if (_numberOfNestedTaskFrames == 0 && _microTaskQueue.length == 0) {
        if (global[symbolPromise]) {
          global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
        } else {
          global[symbolSetTimeout](drainMicroTaskQueue, 0);
        }
      }
    }
    function scheduleMicroTask(task) {
      scheduleQueueDrain();
      _microTaskQueue.push(task);
    }
    function consoleError(e) {
      var rejection = e && e.rejection;
      if (rejection) {
        console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
      }
      console.error(e);
    }
    function drainMicroTaskQueue() {
      if (!_isDrainingMicrotaskQueue) {
        _isDrainingMicrotaskQueue = true;
        while (_microTaskQueue.length) {
          var queue = _microTaskQueue;
          _microTaskQueue = [];
          for (var i = 0; i < queue.length; i++) {
            var task = queue[i];
            try {
              task.zone.runTask(task, null, null);
            } catch (e) {
              consoleError(e);
            }
          }
        }
        while (_uncaughtPromiseErrors.length) {
          var _loop_1 = function() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
            try {
              uncaughtPromiseError.zone.runGuarded(function() {
                throw uncaughtPromiseError;
              });
            } catch (e) {
              consoleError(e);
            }
          };
          while (_uncaughtPromiseErrors.length) {
            _loop_1();
          }
        }
        _isDrainingMicrotaskQueue = false;
      }
    }
    function isThenable(value) {
      return value && value.then;
    }
    function forwardResolution(value) {
      return value;
    }
    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
      return function(v) {
        resolvePromise(promise, state, v);
      };
    }
    function resolvePromise(promise, state, value) {
      if (promise[symbolState] === UNRESOLVED) {
        if (value instanceof ZoneAwarePromise && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (isThenable(value)) {
          value.then(makeResolver(promise, state), makeResolver(promise, false));
        } else {
          promise[symbolState] = state;
          var queue = promise[symbolValue];
          promise[symbolValue] = value;
          for (var i = 0; i < queue.length; ) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }
          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            try {
              throw new Error('Uncaught (in promise): ' + value + (value && value.stack ? '\n' + value.stack : ''));
            } catch (e) {
              var error_1 = e;
              error_1.rejection = value;
              error_1.promise = promise;
              error_1.zone = Zone.current;
              error_1.task = Zone.currentTask;
              _uncaughtPromiseErrors.push(error_1);
              scheduleQueueDrain();
            }
          }
        }
      }
      return promise;
    }
    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        promise[symbolState] = REJECTED;
        for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
            break;
          }
        }
      }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      var delegate = promise[symbolState] ? onFulfilled || forwardResolution : onRejected || forwardRejection;
      zone.scheduleMicroTask(source, function() {
        try {
          resolvePromise(chainPromise, true, zone.run(delegate, null, [promise[symbolValue]]));
        } catch (error) {
          resolvePromise(chainPromise, false, error);
        }
      });
    }
    var ZoneAwarePromise = (function() {
      function ZoneAwarePromise(executor) {
        var promise = this;
        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error('Must be an instanceof Promise.');
        }
        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = [];
        try {
          executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
        } catch (e) {
          resolvePromise(promise, false, e);
        }
      }
      ZoneAwarePromise.resolve = function(value) {
        return resolvePromise(new this(null), RESOLVED, value);
      };
      ZoneAwarePromise.reject = function(error) {
        return resolvePromise(new this(null), REJECTED, error);
      };
      ZoneAwarePromise.race = function(values) {
        var resolve;
        var reject;
        var promise = new this(function(res, rej) {
          _a = [res, rej], resolve = _a[0], reject = _a[1];
          var _a;
        });
        function onResolve(value) {
          promise && (promise = null || resolve(value));
        }
        function onReject(error) {
          promise && (promise = null || reject(error));
        }
        for (var _i = 0,
            values_1 = values; _i < values_1.length; _i++) {
          var value = values_1[_i];
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          value.then(onResolve, onReject);
        }
        return promise;
      };
      ZoneAwarePromise.all = function(values) {
        var resolve;
        var reject;
        var promise = new this(function(res, rej) {
          resolve = res;
          reject = rej;
        });
        var count = 0;
        var resolvedValues = [];
        for (var _i = 0,
            values_2 = values; _i < values_2.length; _i++) {
          var value = values_2[_i];
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          value.then((function(index) {
            return function(value) {
              resolvedValues[index] = value;
              count--;
              if (!count) {
                resolve(resolvedValues);
              }
            };
          })(count), reject);
          count++;
        }
        if (!count)
          resolve(resolvedValues);
        return promise;
      };
      ZoneAwarePromise.prototype.then = function(onFulfilled, onRejected) {
        var chainPromise = new this.constructor(null);
        var zone = Zone.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }
        return chainPromise;
      };
      ZoneAwarePromise.prototype.catch = function(onRejected) {
        return this.then(null, onRejected);
      };
      return ZoneAwarePromise;
    }());
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[__symbol__('Promise')] = global.Promise;
    global.Promise = ZoneAwarePromise;
    function patchThen(NativePromise) {
      var NativePromiseProtototype = NativePromise.prototype;
      var NativePromiseThen = NativePromiseProtototype[__symbol__('then')] = NativePromiseProtototype.then;
      NativePromiseProtototype.then = function(onResolve, onReject) {
        var nativePromise = this;
        return new ZoneAwarePromise(function(resolve, reject) {
          NativePromiseThen.call(nativePromise, resolve, reject);
        }).then(onResolve, onReject);
      };
    }
    if (NativePromise) {
      patchThen(NativePromise);
      if (typeof global['fetch'] !== 'undefined') {
        var fetchPromise = void 0;
        try {
          fetchPromise = global['fetch']();
        } catch (e) {
          fetchPromise = global['fetch']('about:blank');
        }
        fetchPromise.then(function() {
          return null;
        }, function() {
          return null;
        });
        if (fetchPromise.constructor != NativePromise && fetchPromise.constructor != ZoneAwarePromise) {
          patchThen(fetchPromise.constructor);
        }
      }
    }
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return global.Zone = Zone;
  })(typeof window === 'object' && window || typeof self === 'object' && self || global);
  var zoneSymbol = Zone['__symbol__'];
  var _global$1 = typeof window === 'object' && window || typeof self === 'object' && self || global;
  function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
      if (typeof args[i] === 'function') {
        args[i] = Zone.current.wrap(args[i], source + '_' + i);
      }
    }
    return args;
  }
  function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function(i) {
      var name_1 = fnNames[i];
      var delegate = prototype[name_1];
      if (delegate) {
        prototype[name_1] = (function(delegate) {
          return function() {
            return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
          };
        })(delegate);
      }
    };
    for (var i = 0; i < fnNames.length; i++) {
      _loop_1(i);
    }
  }
  var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
  var isNode = (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]');
  var isBrowser = !isNode && !isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
  function patchProperty(obj, prop) {
    var desc = Object.getOwnPropertyDescriptor(obj, prop) || {
      enumerable: true,
      configurable: true
    };
    delete desc.writable;
    delete desc.value;
    var eventName = prop.substr(2);
    var _prop = '_' + prop;
    desc.set = function(fn) {
      if (this[_prop]) {
        this.removeEventListener(eventName, this[_prop]);
      }
      if (typeof fn === 'function') {
        var wrapFn = function(event) {
          var result;
          result = fn.apply(this, arguments);
          if (result != undefined && !result)
            event.preventDefault();
        };
        this[_prop] = wrapFn;
        this.addEventListener(eventName, wrapFn, false);
      } else {
        this[_prop] = null;
      }
    };
    desc.get = function() {
      return this[_prop] || null;
    };
    Object.defineProperty(obj, prop, desc);
  }
  function patchOnProperties(obj, properties) {
    var onProperties = [];
    for (var prop in obj) {
      if (prop.substr(0, 2) == 'on') {
        onProperties.push(prop);
      }
    }
    for (var j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j]);
    }
    if (properties) {
      for (var i = 0; i < properties.length; i++) {
        patchProperty(obj, 'on' + properties[i]);
      }
    }
  }
  var EVENT_TASKS = zoneSymbol('eventTasks');
  var ADD_EVENT_LISTENER = 'addEventListener';
  var REMOVE_EVENT_LISTENER = 'removeEventListener';
  function findExistingRegisteredTask(target, handler, name, capture, remove) {
    var eventTasks = target[EVENT_TASKS];
    if (eventTasks) {
      for (var i = 0; i < eventTasks.length; i++) {
        var eventTask = eventTasks[i];
        var data = eventTask.data;
        if (data.handler === handler && data.useCapturing === capture && data.eventName === name) {
          if (remove) {
            eventTasks.splice(i, 1);
          }
          return eventTask;
        }
      }
    }
    return null;
  }
  function attachRegisteredEvent(target, eventTask) {
    var eventTasks = target[EVENT_TASKS];
    if (!eventTasks) {
      eventTasks = target[EVENT_TASKS] = [];
    }
    eventTasks.push(eventTask);
  }
  function makeZoneAwareAddListener(addFnName, removeFnName, useCapturingParam, allowDuplicates) {
    if (useCapturingParam === void 0) {
      useCapturingParam = true;
    }
    if (allowDuplicates === void 0) {
      allowDuplicates = false;
    }
    var addFnSymbol = zoneSymbol(addFnName);
    var removeFnSymbol = zoneSymbol(removeFnName);
    var defaultUseCapturing = useCapturingParam ? false : undefined;
    function scheduleEventListener(eventTask) {
      var meta = eventTask.data;
      attachRegisteredEvent(meta.target, eventTask);
      return meta.target[addFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
    }
    function cancelEventListener(eventTask) {
      var meta = eventTask.data;
      findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.useCapturing, true);
      meta.target[removeFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
    }
    return function zoneAwareAddListener(self, args) {
      var eventName = args[0];
      var handler = args[1];
      var useCapturing = args[2] || defaultUseCapturing;
      var target = self || _global$1;
      var delegate = null;
      if (typeof handler == 'function') {
        delegate = handler;
      } else if (handler && handler.handleEvent) {
        delegate = function(event) {
          return handler.handleEvent(event);
        };
      }
      var validZoneHandler = false;
      try {
        validZoneHandler = handler && handler.toString() === '[object FunctionWrapper]';
      } catch (e) {
        return;
      }
      if (!delegate || validZoneHandler) {
        return target[addFnSymbol](eventName, handler, useCapturing);
      }
      if (!allowDuplicates) {
        var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, false);
        if (eventTask) {
          return target[addFnSymbol](eventName, eventTask.invoke, useCapturing);
        }
      }
      var zone = Zone.current;
      var source = target.constructor['name'] + '.' + addFnName + ':' + eventName;
      var data = {
        target: target,
        eventName: eventName,
        name: eventName,
        useCapturing: useCapturing,
        handler: handler
      };
      zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
    };
  }
  function makeZoneAwareRemoveListener(fnName, useCapturingParam) {
    if (useCapturingParam === void 0) {
      useCapturingParam = true;
    }
    var symbol = zoneSymbol(fnName);
    var defaultUseCapturing = useCapturingParam ? false : undefined;
    return function zoneAwareRemoveListener(self, args) {
      var eventName = args[0];
      var handler = args[1];
      var useCapturing = args[2] || defaultUseCapturing;
      var target = self || _global$1;
      var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, true);
      if (eventTask) {
        eventTask.zone.cancelTask(eventTask);
      } else {
        target[symbol](eventName, handler, useCapturing);
      }
    };
  }
  var zoneAwareAddEventListener = makeZoneAwareAddListener(ADD_EVENT_LISTENER, REMOVE_EVENT_LISTENER);
  var zoneAwareRemoveEventListener = makeZoneAwareRemoveListener(REMOVE_EVENT_LISTENER);
  function patchEventTargetMethods(obj) {
    if (obj && obj.addEventListener) {
      patchMethod(obj, ADD_EVENT_LISTENER, function() {
        return zoneAwareAddEventListener;
      });
      patchMethod(obj, REMOVE_EVENT_LISTENER, function() {
        return zoneAwareRemoveEventListener;
      });
      return true;
    } else {
      return false;
    }
  }
  var originalInstanceKey = zoneSymbol('originalInstance');
  function patchClass(className) {
    var OriginalClass = _global$1[className];
    if (!OriginalClass)
      return;
    _global$1[className] = function() {
      var a = bindArguments(arguments, className);
      switch (a.length) {
        case 0:
          this[originalInstanceKey] = new OriginalClass();
          break;
        case 1:
          this[originalInstanceKey] = new OriginalClass(a[0]);
          break;
        case 2:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
          break;
        case 3:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
          break;
        case 4:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
          break;
        default:
          throw new Error('Arg list too long.');
      }
    };
    var instance = new OriginalClass(function() {});
    var prop;
    for (prop in instance) {
      if (className === 'XMLHttpRequest' && prop === 'responseBlob')
        continue;
      (function(prop) {
        if (typeof instance[prop] === 'function') {
          _global$1[className].prototype[prop] = function() {
            return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
          };
        } else {
          Object.defineProperty(_global$1[className].prototype, prop, {
            set: function(fn) {
              if (typeof fn === 'function') {
                this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
              } else {
                this[originalInstanceKey][prop] = fn;
              }
            },
            get: function() {
              return this[originalInstanceKey][prop];
            }
          });
        }
      }(prop));
    }
    for (prop in OriginalClass) {
      if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
        _global$1[className][prop] = OriginalClass[prop];
      }
    }
  }
  function createNamedFn(name, delegate) {
    try {
      return (Function('f', "return function " + name + "(){return f(this, arguments)}"))(delegate);
    } catch (e) {
      return function() {
        return delegate(this, arguments);
      };
    }
  }
  function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && Object.getOwnPropertyNames(proto).indexOf(name) === -1) {
      proto = Object.getPrototypeOf(proto);
    }
    if (!proto && target[name]) {
      proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
      delegate = proto[delegateName] = proto[name];
      proto[name] = createNamedFn(name, patchFn(delegate, delegateName, name));
    }
    return delegate;
  }
  function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
      var data = task.data;
      data.args[0] = function() {
        task.invoke.apply(this, arguments);
        delete tasksByHandleId[data.handleId];
      };
      data.handleId = setNative.apply(window, data.args);
      tasksByHandleId[data.handleId] = task;
      return task;
    }
    function clearTask(task) {
      delete tasksByHandleId[task.data.handleId];
      return clearNative(task.data.handleId);
    }
    setNative = patchMethod(window, setName, function(delegate) {
      return function(self, args) {
        if (typeof args[0] === 'function') {
          var zone = Zone.current;
          var options = {
            handleId: null,
            isPeriodic: nameSuffix === 'Interval',
            delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
            args: args
          };
          var task = zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
          if (!task) {
            return task;
          }
          var handle = task.data.handleId;
          if (handle.ref && handle.unref) {
            task.ref = handle.ref.bind(handle);
            task.unref = handle.unref.bind(handle);
          }
          return task;
        } else {
          return delegate.apply(window, args);
        }
      };
    });
    clearNative = patchMethod(window, cancelName, function(delegate) {
      return function(self, args) {
        var task = typeof args[0] === 'number' ? tasksByHandleId[args[0]] : args[0];
        if (task && typeof task.type === 'string') {
          if (task.cancelFn && task.data.isPeriodic || task.runCount === 0) {
            task.zone.cancelTask(task);
          }
        } else {
          delegate.apply(window, args);
        }
      };
    });
  }
  var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
  var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;
  var _create = Object.create;
  var unconfigurablesKey = zoneSymbol('unconfigurables');
  function propertyPatch() {
    Object.defineProperty = function(obj, prop, desc) {
      if (isUnconfigurable(obj, prop)) {
        throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
      }
      var originalConfigurableFlag = desc.configurable;
      if (prop !== 'prototype') {
        desc = rewriteDescriptor(obj, prop, desc);
      }
      return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function(obj, props) {
      Object.keys(props).forEach(function(prop) {
        Object.defineProperty(obj, prop, props[prop]);
      });
      return obj;
    };
    Object.create = function(obj, proto) {
      if (typeof proto === 'object' && !Object.isFrozen(proto)) {
        Object.keys(proto).forEach(function(prop) {
          proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
        });
      }
      return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function(obj, prop) {
      var desc = _getOwnPropertyDescriptor(obj, prop);
      if (isUnconfigurable(obj, prop)) {
        desc.configurable = false;
      }
      return desc;
    };
  }
  function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
  }
  function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
  }
  function rewriteDescriptor(obj, prop, desc) {
    desc.configurable = true;
    if (!desc.configurable) {
      if (!obj[unconfigurablesKey]) {
        _defineProperty(obj, unconfigurablesKey, {
          writable: true,
          value: {}
        });
      }
      obj[unconfigurablesKey][prop] = true;
    }
    return desc;
  }
  function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
      return _defineProperty(obj, prop, desc);
    } catch (e) {
      if (desc.configurable) {
        if (typeof originalConfigurableFlag == 'undefined') {
          delete desc.configurable;
        } else {
          desc.configurable = originalConfigurableFlag;
        }
        try {
          return _defineProperty(obj, prop, desc);
        } catch (e) {
          var descJson = null;
          try {
            descJson = JSON.stringify(desc);
          } catch (e) {
            descJson = descJson.toString();
          }
          console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + e);
        }
      } else {
        throw e;
      }
    }
  }
  var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
  var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex'.split(',');
  var EVENT_TARGET = 'EventTarget';
  function eventTargetPatch(_global) {
    var apis = [];
    var isWtf = _global['wtf'];
    if (isWtf) {
      apis = WTF_ISSUE_555.split(',').map(function(v) {
        return 'HTML' + v + 'Element';
      }).concat(NO_EVENT_TARGET);
    } else if (_global[EVENT_TARGET]) {
      apis.push(EVENT_TARGET);
    } else {
      apis = NO_EVENT_TARGET;
    }
    for (var i = 0; i < apis.length; i++) {
      var type = _global[apis[i]];
      patchEventTargetMethods(type && type.prototype);
    }
  }
  function apply(_global) {
    var WS = _global.WebSocket;
    if (!_global.EventTarget) {
      patchEventTargetMethods(WS.prototype);
    }
    _global.WebSocket = function(a, b) {
      var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
      var proxySocket;
      var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
      if (onmessageDesc && onmessageDesc.configurable === false) {
        proxySocket = Object.create(socket);
        ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function(propName) {
          proxySocket[propName] = function() {
            return socket[propName].apply(socket, arguments);
          };
        });
      } else {
        proxySocket = socket;
      }
      patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
      return proxySocket;
    };
    for (var prop in WS) {
      _global.WebSocket[prop] = WS[prop];
    }
  }
  var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(' ');
  function propertyDescriptorPatch(_global) {
    if (isNode) {
      return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
      if (isBrowser) {
        patchOnProperties(HTMLElement.prototype, eventNames);
      }
      patchOnProperties(XMLHttpRequest.prototype, null);
      if (typeof IDBIndex !== 'undefined') {
        patchOnProperties(IDBIndex.prototype, null);
        patchOnProperties(IDBRequest.prototype, null);
        patchOnProperties(IDBOpenDBRequest.prototype, null);
        patchOnProperties(IDBDatabase.prototype, null);
        patchOnProperties(IDBTransaction.prototype, null);
        patchOnProperties(IDBCursor.prototype, null);
      }
      if (supportsWebSocket) {
        patchOnProperties(WebSocket.prototype, null);
      }
    } else {
      patchViaCapturingAllTheEvents();
      patchClass('XMLHttpRequest');
      if (supportsWebSocket) {
        apply(_global);
      }
    }
  }
  function canPatchViaPropertyDescriptor() {
    if (isBrowser && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
      var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
      if (desc && !desc.configurable)
        return false;
    }
    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {get: function() {
        return true;
      }});
    var req = new XMLHttpRequest();
    var result = !!req.onreadystatechange;
    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
    return result;
  }
  var unboundKey = zoneSymbol('unbound');
  function patchViaCapturingAllTheEvents() {
    var _loop_1 = function(i) {
      var property = eventNames[i];
      var onproperty = 'on' + property;
      self.addEventListener(property, function(event) {
        var elt = event.target,
            bound,
            source;
        if (elt) {
          source = elt.constructor['name'] + '.' + onproperty;
        } else {
          source = 'unknown.' + onproperty;
        }
        while (elt) {
          if (elt[onproperty] && !elt[onproperty][unboundKey]) {
            bound = Zone.current.wrap(elt[onproperty], source);
            bound[unboundKey] = elt[onproperty];
            elt[onproperty] = bound;
          }
          elt = elt.parentElement;
        }
      }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
      _loop_1(i);
    }
  }
  function registerElementPatch(_global) {
    if (!isBrowser || !('registerElement' in _global.document)) {
      return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function(name, opts) {
      if (opts && opts.prototype) {
        callbacks.forEach(function(callback) {
          var source = 'Document.registerElement::' + callback;
          if (opts.prototype.hasOwnProperty(callback)) {
            var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = Zone.current.wrap(descriptor.value, source);
              _redefineProperty(opts.prototype, callback, descriptor);
            } else {
              opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
            }
          } else if (opts.prototype[callback]) {
            opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
          }
        });
      }
      return _registerElement.apply(document, [name, opts]);
    };
  }
  var set = 'set';
  var clear = 'clear';
  var blockingMethods = ['alert', 'prompt', 'confirm'];
  var _global = typeof window === 'object' && window || typeof self === 'object' && self || global;
  patchTimer(_global, set, clear, 'Timeout');
  patchTimer(_global, set, clear, 'Interval');
  patchTimer(_global, set, clear, 'Immediate');
  patchTimer(_global, 'request', 'cancel', 'AnimationFrame');
  patchTimer(_global, 'mozRequest', 'mozCancel', 'AnimationFrame');
  patchTimer(_global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
  for (var i = 0; i < blockingMethods.length; i++) {
    var name = blockingMethods[i];
    patchMethod(_global, name, function(delegate, symbol, name) {
      return function(s, args) {
        return Zone.current.run(delegate, _global, args, name);
      };
    });
  }
  eventTargetPatch(_global);
  propertyDescriptorPatch(_global);
  patchClass('MutationObserver');
  patchClass('WebKitMutationObserver');
  patchClass('FileReader');
  propertyPatch();
  registerElementPatch(_global);
  patchXHR(_global);
  var XHR_TASK = zoneSymbol('xhrTask');
  var XHR_SYNC = zoneSymbol('xhrSync');
  function patchXHR(window) {
    function findPendingTask(target) {
      var pendingTask = target[XHR_TASK];
      return pendingTask;
    }
    function scheduleTask(task) {
      var data = task.data;
      data.target.addEventListener('readystatechange', function() {
        if (data.target.readyState === data.target.DONE) {
          if (!data.aborted) {
            task.invoke();
          }
        }
      });
      var storedTask = data.target[XHR_TASK];
      if (!storedTask) {
        data.target[XHR_TASK] = task;
      }
      sendNative.apply(data.target, data.args);
      return task;
    }
    function placeholderCallback() {}
    function clearTask(task) {
      var data = task.data;
      data.aborted = true;
      return abortNative.apply(data.target, data.args);
    }
    var openNative = patchMethod(window.XMLHttpRequest.prototype, 'open', function() {
      return function(self, args) {
        self[XHR_SYNC] = args[2] == false;
        return openNative.apply(self, args);
      };
    });
    var sendNative = patchMethod(window.XMLHttpRequest.prototype, 'send', function() {
      return function(self, args) {
        var zone = Zone.current;
        if (self[XHR_SYNC]) {
          return sendNative.apply(self, args);
        } else {
          var options = {
            target: self,
            isPeriodic: false,
            delay: null,
            args: args,
            aborted: false
          };
          return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
        }
      };
    });
    var abortNative = patchMethod(window.XMLHttpRequest.prototype, 'abort', function(delegate) {
      return function(self, args) {
        var task = findPendingTask(self);
        if (task && typeof task.type == 'string') {
          if (task.cancelFn == null) {
            return;
          }
          task.zone.cancelTask(task);
        }
      };
    });
  }
  if (_global['navigator'] && _global['navigator'].geolocation) {
    patchPrototype(_global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
  }
})));

})();
$__System.registerDynamic("4", [], false, function ($__require, $__exports, $__module) {
    var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

    (function ($__global) {
        var Reflect = $__global["Reflect"];
        /*! *****************************************************************************
        Copyright (C) Microsoft. All rights reserved.
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
        var Reflect;
        (function (Reflect) {
            "use strict";

            var hasOwn = Object.prototype.hasOwnProperty;
            // feature test for Symbol support
            var supportsSymbol = typeof Symbol === "function";
            var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
            var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
            var HashMap;
            (function (HashMap) {
                var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
                var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
                var downLevel = !supportsCreate && !supportsProto;
                // create an object in dictionary mode (a.k.a. "slow" mode in v8)
                HashMap.create = supportsCreate ? function () {
                    return MakeDictionary(Object.create(null));
                } : supportsProto ? function () {
                    return MakeDictionary({ __proto__: null });
                } : function () {
                    return MakeDictionary({});
                };
                HashMap.has = downLevel ? function (map, key) {
                    return hasOwn.call(map, key);
                } : function (map, key) {
                    return key in map;
                };
                HashMap.get = downLevel ? function (map, key) {
                    return hasOwn.call(map, key) ? map[key] : undefined;
                } : function (map, key) {
                    return map[key];
                };
            })(HashMap || (HashMap = {}));
            // Load global or shim versions of Map, Set, and WeakMap
            var functionPrototype = Object.getPrototypeOf(Function);
            var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
            var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
            var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
            var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
            // [[Metadata]] internal slot
            // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
            var Metadata = new _WeakMap();
            /**
              * Applies a set of decorators to a property of a target object.
              * @param decorators An array of decorators.
              * @param target The target object.
              * @param propertyKey (Optional) The property key to decorate.
              * @param attributes (Optional) The property descriptor for the target key.
              * @remarks Decorators are applied in reverse order.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     Example = Reflect.decorate(decoratorsArray, Example);
              *
              *     // property (on constructor)
              *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
              *
              *     // property (on prototype)
              *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
              *
              *     // method (on constructor)
              *     Object.defineProperty(Example, "staticMethod",
              *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
              *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
              *
              *     // method (on prototype)
              *     Object.defineProperty(Example.prototype, "method",
              *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
              *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
              *
              */
            function decorate(decorators, target, propertyKey, attributes) {
                if (!IsUndefined(propertyKey)) {
                    if (!IsArray(decorators)) throw new TypeError();
                    if (!IsObject(target)) throw new TypeError();
                    if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
                    if (IsNull(attributes)) attributes = undefined;
                    propertyKey = ToPropertyKey(propertyKey);
                    return DecorateProperty(decorators, target, propertyKey, attributes);
                } else {
                    if (!IsArray(decorators)) throw new TypeError();
                    if (!IsConstructor(target)) throw new TypeError();
                    return DecorateConstructor(decorators, target);
                }
            }
            Reflect.decorate = decorate;
            // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
            // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
            /**
              * A default metadata decorator factory that can be used on a class, class member, or parameter.
              * @param metadataKey The key for the metadata entry.
              * @param metadataValue The value for the metadata entry.
              * @returns A decorator function.
              * @remarks
              * If `metadataKey` is already defined for the target and target key, the
              * metadataValue for that key will be overwritten.
              * @example
              *
              *     // constructor
              *     @Reflect.metadata(key, value)
              *     class Example {
              *     }
              *
              *     // property (on constructor, TypeScript only)
              *     class Example {
              *         @Reflect.metadata(key, value)
              *         static staticProperty;
              *     }
              *
              *     // property (on prototype, TypeScript only)
              *     class Example {
              *         @Reflect.metadata(key, value)
              *         property;
              *     }
              *
              *     // method (on constructor)
              *     class Example {
              *         @Reflect.metadata(key, value)
              *         static staticMethod() { }
              *     }
              *
              *     // method (on prototype)
              *     class Example {
              *         @Reflect.metadata(key, value)
              *         method() { }
              *     }
              *
              */
            function metadata(metadataKey, metadataValue) {
                function decorator(target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError();
                    if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
                    OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                }
                return decorator;
            }
            Reflect.metadata = metadata;
            /**
              * Define a unique metadata entry on the target.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param metadataValue A value that contains attached metadata.
              * @param target The target object on which to define metadata.
              * @param propertyKey (Optional) The property key for the target.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     Reflect.defineMetadata("custom:annotation", options, Example);
              *
              *     // property (on constructor)
              *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
              *
              *     // property (on prototype)
              *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
              *
              *     // method (on constructor)
              *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
              *
              *     // method (on prototype)
              *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
              *
              *     // decorator factory as metadata-producing annotation.
              *     function MyAnnotation(options): Decorator {
              *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
              *     }
              *
              */
            function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            Reflect.defineMetadata = defineMetadata;
            /**
              * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.hasMetadata("custom:annotation", Example);
              *
              *     // property (on constructor)
              *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
              *
              */
            function hasMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryHasMetadata(metadataKey, target, propertyKey);
            }
            Reflect.hasMetadata = hasMetadata;
            /**
              * Gets a value indicating whether the target object has the provided metadata key defined.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
              *
              *     // property (on constructor)
              *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
              *
              */
            function hasOwnMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
            }
            Reflect.hasOwnMetadata = hasOwnMetadata;
            /**
              * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.getMetadata("custom:annotation", Example);
              *
              *     // property (on constructor)
              *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
              *
              */
            function getMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryGetMetadata(metadataKey, target, propertyKey);
            }
            Reflect.getMetadata = getMetadata;
            /**
              * Gets the metadata value for the provided metadata key on the target object.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.getOwnMetadata("custom:annotation", Example);
              *
              *     // property (on constructor)
              *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
              *
              */
            function getOwnMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
            }
            Reflect.getOwnMetadata = getOwnMetadata;
            /**
              * Gets the metadata keys defined on the target object or its prototype chain.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns An array of unique metadata keys.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.getMetadataKeys(Example);
              *
              *     // property (on constructor)
              *     result = Reflect.getMetadataKeys(Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.getMetadataKeys(Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.getMetadataKeys(Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.getMetadataKeys(Example.prototype, "method");
              *
              */
            function getMetadataKeys(target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryMetadataKeys(target, propertyKey);
            }
            Reflect.getMetadataKeys = getMetadataKeys;
            /**
              * Gets the unique metadata keys defined on the target object.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns An array of unique metadata keys.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.getOwnMetadataKeys(Example);
              *
              *     // property (on constructor)
              *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
              *
              */
            function getOwnMetadataKeys(target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryOwnMetadataKeys(target, propertyKey);
            }
            Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
            /**
              * Deletes the metadata entry from the target object with the provided key.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns `true` if the metadata entry was found and deleted; otherwise, false.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.deleteMetadata("custom:annotation", Example);
              *
              *     // property (on constructor)
              *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
              *
              */
            function deleteMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/false);
                if (IsUndefined(metadataMap)) return false;
                if (!metadataMap.delete(metadataKey)) return false;
                if (metadataMap.size > 0) return true;
                var targetMetadata = Metadata.get(target);
                targetMetadata.delete(propertyKey);
                if (targetMetadata.size > 0) return true;
                Metadata.delete(target);
                return true;
            }
            Reflect.deleteMetadata = deleteMetadata;
            function DecorateConstructor(decorators, target) {
                for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                        if (!IsConstructor(decorated)) throw new TypeError();
                        target = decorated;
                    }
                }
                return target;
            }
            function DecorateProperty(decorators, target, propertyKey, descriptor) {
                for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target, propertyKey, descriptor);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                        if (!IsObject(decorated)) throw new TypeError();
                        descriptor = decorated;
                    }
                }
                return descriptor;
            }
            function GetOrCreateMetadataMap(O, P, Create) {
                var targetMetadata = Metadata.get(O);
                if (IsUndefined(targetMetadata)) {
                    if (!Create) return undefined;
                    targetMetadata = new _Map();
                    Metadata.set(O, targetMetadata);
                }
                var metadataMap = targetMetadata.get(P);
                if (IsUndefined(metadataMap)) {
                    if (!Create) return undefined;
                    metadataMap = new _Map();
                    targetMetadata.set(P, metadataMap);
                }
                return metadataMap;
            }
            // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
            function OrdinaryHasMetadata(MetadataKey, O, P) {
                var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn) return true;
                var parent = OrdinaryGetPrototypeOf(O);
                if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
                return false;
            }
            // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
            function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
                if (IsUndefined(metadataMap)) return false;
                return ToBoolean(metadataMap.has(MetadataKey));
            }
            // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
            function OrdinaryGetMetadata(MetadataKey, O, P) {
                var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
                var parent = OrdinaryGetPrototypeOf(O);
                if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
                return undefined;
            }
            // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
            function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
                if (IsUndefined(metadataMap)) return undefined;
                return metadataMap.get(MetadataKey);
            }
            // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
            function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/true);
                metadataMap.set(MetadataKey, MetadataValue);
            }
            // 3.1.6.1 OrdinaryMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
            function OrdinaryMetadataKeys(O, P) {
                var ownKeys = OrdinaryOwnMetadataKeys(O, P);
                var parent = OrdinaryGetPrototypeOf(O);
                if (parent === null) return ownKeys;
                var parentKeys = OrdinaryMetadataKeys(parent, P);
                if (parentKeys.length <= 0) return ownKeys;
                if (ownKeys.length <= 0) return parentKeys;
                var set = new _Set();
                var keys = [];
                for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                    var key = ownKeys_1[_i];
                    var hasKey = set.has(key);
                    if (!hasKey) {
                        set.add(key);
                        keys.push(key);
                    }
                }
                for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                    var key = parentKeys_1[_a];
                    var hasKey = set.has(key);
                    if (!hasKey) {
                        set.add(key);
                        keys.push(key);
                    }
                }
                return keys;
            }
            // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
            function OrdinaryOwnMetadataKeys(O, P) {
                var keys = [];
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
                if (IsUndefined(metadataMap)) return keys;
                var keysObj = metadataMap.keys();
                var iterator = GetIterator(keysObj);
                var k = 0;
                while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                        keys.length = k;
                        return keys;
                    }
                    var nextValue = IteratorValue(next);
                    try {
                        keys[k] = nextValue;
                    } catch (e) {
                        try {
                            IteratorClose(iterator);
                        } finally {
                            throw e;
                        }
                    }
                    k++;
                }
            }
            // 6 ECMAScript Data Typ0es and Values
            // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
            function Type(x) {
                if (x === null) return 1 /* Null */;
                switch (typeof x) {
                    case "undefined":
                        return 0 /* Undefined */;
                    case "boolean":
                        return 2 /* Boolean */;
                    case "string":
                        return 3 /* String */;
                    case "symbol":
                        return 4 /* Symbol */;
                    case "number":
                        return 5 /* Number */;
                    case "object":
                        return x === null ? 1 /* Null */ : 6 /* Object */;
                    default:
                        return 6 /* Object */;
                }
            }
            // 6.1.1 The Undefined Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
            function IsUndefined(x) {
                return x === undefined;
            }
            // 6.1.2 The Null Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
            function IsNull(x) {
                return x === null;
            }
            // 6.1.5 The Symbol Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
            function IsSymbol(x) {
                return typeof x === "symbol";
            }
            // 6.1.7 The Object Type
            // https://tc39.github.io/ecma262/#sec-object-type
            function IsObject(x) {
                return typeof x === "object" ? x !== null : typeof x === "function";
            }
            // 7.1 Type Conversion
            // https://tc39.github.io/ecma262/#sec-type-conversion
            // 7.1.1 ToPrimitive(input [, PreferredType])
            // https://tc39.github.io/ecma262/#sec-toprimitive
            function ToPrimitive(input, PreferredType) {
                switch (Type(input)) {
                    case 0 /* Undefined */:
                        return input;
                    case 1 /* Null */:
                        return input;
                    case 2 /* Boolean */:
                        return input;
                    case 3 /* String */:
                        return input;
                    case 4 /* Symbol */:
                        return input;
                    case 5 /* Number */:
                        return input;
                }
                var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
                var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
                if (exoticToPrim !== undefined) {
                    var result = exoticToPrim.call(input, hint);
                    if (IsObject(result)) throw new TypeError();
                    return result;
                }
                return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
            }
            // 7.1.1.1 OrdinaryToPrimitive(O, hint)
            // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
            function OrdinaryToPrimitive(O, hint) {
                if (hint === "string") {
                    var toString_1 = O.toString;
                    if (IsCallable(toString_1)) {
                        var result = toString_1.call(O);
                        if (!IsObject(result)) return result;
                    }
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                        var result = valueOf.call(O);
                        if (!IsObject(result)) return result;
                    }
                } else {
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                        var result = valueOf.call(O);
                        if (!IsObject(result)) return result;
                    }
                    var toString_2 = O.toString;
                    if (IsCallable(toString_2)) {
                        var result = toString_2.call(O);
                        if (!IsObject(result)) return result;
                    }
                }
                throw new TypeError();
            }
            // 7.1.2 ToBoolean(argument)
            // https://tc39.github.io/ecma262/2016/#sec-toboolean
            function ToBoolean(argument) {
                return !!argument;
            }
            // 7.1.12 ToString(argument)
            // https://tc39.github.io/ecma262/#sec-tostring
            function ToString(argument) {
                return "" + argument;
            }
            // 7.1.14 ToPropertyKey(argument)
            // https://tc39.github.io/ecma262/#sec-topropertykey
            function ToPropertyKey(argument) {
                var key = ToPrimitive(argument, 3 /* String */);
                if (IsSymbol(key)) return key;
                return ToString(key);
            }
            // 7.2 Testing and Comparison Operations
            // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
            // 7.2.2 IsArray(argument)
            // https://tc39.github.io/ecma262/#sec-isarray
            function IsArray(argument) {
                return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
            }
            // 7.2.3 IsCallable(argument)
            // https://tc39.github.io/ecma262/#sec-iscallable
            function IsCallable(argument) {
                // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
                return typeof argument === "function";
            }
            // 7.2.4 IsConstructor(argument)
            // https://tc39.github.io/ecma262/#sec-isconstructor
            function IsConstructor(argument) {
                // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
                return typeof argument === "function";
            }
            // 7.2.7 IsPropertyKey(argument)
            // https://tc39.github.io/ecma262/#sec-ispropertykey
            function IsPropertyKey(argument) {
                switch (Type(argument)) {
                    case 3 /* String */:
                        return true;
                    case 4 /* Symbol */:
                        return true;
                    default:
                        return false;
                }
            }
            // 7.3 Operations on Objects
            // https://tc39.github.io/ecma262/#sec-operations-on-objects
            // 7.3.9 GetMethod(V, P)
            // https://tc39.github.io/ecma262/#sec-getmethod
            function GetMethod(V, P) {
                var func = V[P];
                if (func === undefined || func === null) return undefined;
                if (!IsCallable(func)) throw new TypeError();
                return func;
            }
            // 7.4 Operations on Iterator Objects
            // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
            function GetIterator(obj) {
                var method = GetMethod(obj, iteratorSymbol);
                if (!IsCallable(method)) throw new TypeError(); // from Call
                var iterator = method.call(obj);
                if (!IsObject(iterator)) throw new TypeError();
                return iterator;
            }
            // 7.4.4 IteratorValue(iterResult)
            // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
            function IteratorValue(iterResult) {
                return iterResult.value;
            }
            // 7.4.5 IteratorStep(iterator)
            // https://tc39.github.io/ecma262/#sec-iteratorstep
            function IteratorStep(iterator) {
                var result = iterator.next();
                return result.done ? false : result;
            }
            // 7.4.6 IteratorClose(iterator, completion)
            // https://tc39.github.io/ecma262/#sec-iteratorclose
            function IteratorClose(iterator) {
                var f = iterator["return"];
                if (f) f.call(iterator);
            }
            // 9.1 Ordinary Object Internal Methods and Internal Slots
            // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
            // 9.1.1.1 OrdinaryGetPrototypeOf(O)
            // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
            function OrdinaryGetPrototypeOf(O) {
                var proto = Object.getPrototypeOf(O);
                if (typeof O !== "function" || O === functionPrototype) return proto;
                // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
                // Try to determine the superclass constructor. Compatible implementations
                // must either set __proto__ on a subclass constructor to the superclass constructor,
                // or ensure each class has a valid `constructor` property on its prototype that
                // points back to the constructor.
                // If this is not the same as Function.[[Prototype]], then this is definately inherited.
                // This is the case when in ES6 or when using __proto__ in a compatible browser.
                if (proto !== functionPrototype) return proto;
                // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
                var prototype = O.prototype;
                var prototypeProto = prototype && Object.getPrototypeOf(prototype);
                if (prototypeProto == null || prototypeProto === Object.prototype) return proto;
                // If the constructor was not a function, then we cannot determine the heritage.
                var constructor = prototypeProto.constructor;
                if (typeof constructor !== "function") return proto;
                // If we have some kind of self-reference, then we cannot determine the heritage.
                if (constructor === O) return proto;
                // we have a pretty good guess at the heritage.
                return constructor;
            }
            // naive Map shim
            function CreateMapPolyfill() {
                var cacheSentinel = {};
                var arraySentinel = [];
                var MapIterator = function () {
                    function MapIterator(keys, values, selector) {
                        this._index = 0;
                        this._keys = keys;
                        this._values = values;
                        this._selector = selector;
                    }
                    MapIterator.prototype["@@iterator"] = function () {
                        return this;
                    };
                    MapIterator.prototype[iteratorSymbol] = function () {
                        return this;
                    };
                    MapIterator.prototype.next = function () {
                        var index = this._index;
                        if (index >= 0 && index < this._keys.length) {
                            var result = this._selector(this._keys[index], this._values[index]);
                            if (index + 1 >= this._keys.length) {
                                this._index = -1;
                                this._keys = arraySentinel;
                                this._values = arraySentinel;
                            } else {
                                this._index++;
                            }
                            return { value: result, done: false };
                        }
                        return { value: undefined, done: true };
                    };
                    MapIterator.prototype.throw = function (error) {
                        if (this._index >= 0) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        throw error;
                    };
                    MapIterator.prototype.return = function (value) {
                        if (this._index >= 0) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        return { value: value, done: true };
                    };
                    return MapIterator;
                }();
                return function () {
                    function Map() {
                        this._keys = [];
                        this._values = [];
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    Object.defineProperty(Map.prototype, "size", {
                        get: function () {
                            return this._keys.length;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Map.prototype.has = function (key) {
                        return this._find(key, /*insert*/false) >= 0;
                    };
                    Map.prototype.get = function (key) {
                        var index = this._find(key, /*insert*/false);
                        return index >= 0 ? this._values[index] : undefined;
                    };
                    Map.prototype.set = function (key, value) {
                        var index = this._find(key, /*insert*/true);
                        this._values[index] = value;
                        return this;
                    };
                    Map.prototype.delete = function (key) {
                        var index = this._find(key, /*insert*/false);
                        if (index >= 0) {
                            var size = this._keys.length;
                            for (var i = index + 1; i < size; i++) {
                                this._keys[i - 1] = this._keys[i];
                                this._values[i - 1] = this._values[i];
                            }
                            this._keys.length--;
                            this._values.length--;
                            if (key === this._cacheKey) {
                                this._cacheKey = cacheSentinel;
                                this._cacheIndex = -2;
                            }
                            return true;
                        }
                        return false;
                    };
                    Map.prototype.clear = function () {
                        this._keys.length = 0;
                        this._values.length = 0;
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    };
                    Map.prototype.keys = function () {
                        return new MapIterator(this._keys, this._values, getKey);
                    };
                    Map.prototype.values = function () {
                        return new MapIterator(this._keys, this._values, getValue);
                    };
                    Map.prototype.entries = function () {
                        return new MapIterator(this._keys, this._values, getEntry);
                    };
                    Map.prototype["@@iterator"] = function () {
                        return this.entries();
                    };
                    Map.prototype[iteratorSymbol] = function () {
                        return this.entries();
                    };
                    Map.prototype._find = function (key, insert) {
                        if (this._cacheKey !== key) {
                            this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                        }
                        if (this._cacheIndex < 0 && insert) {
                            this._cacheIndex = this._keys.length;
                            this._keys.push(key);
                            this._values.push(undefined);
                        }
                        return this._cacheIndex;
                    };
                    return Map;
                }();
                function getKey(key, _) {
                    return key;
                }
                function getValue(_, value) {
                    return value;
                }
                function getEntry(key, value) {
                    return [key, value];
                }
            }
            // naive Set shim
            function CreateSetPolyfill() {
                return function () {
                    function Set() {
                        this._map = new _Map();
                    }
                    Object.defineProperty(Set.prototype, "size", {
                        get: function () {
                            return this._map.size;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Set.prototype.has = function (value) {
                        return this._map.has(value);
                    };
                    Set.prototype.add = function (value) {
                        return this._map.set(value, value), this;
                    };
                    Set.prototype.delete = function (value) {
                        return this._map.delete(value);
                    };
                    Set.prototype.clear = function () {
                        this._map.clear();
                    };
                    Set.prototype.keys = function () {
                        return this._map.keys();
                    };
                    Set.prototype.values = function () {
                        return this._map.values();
                    };
                    Set.prototype.entries = function () {
                        return this._map.entries();
                    };
                    Set.prototype["@@iterator"] = function () {
                        return this.keys();
                    };
                    Set.prototype[iteratorSymbol] = function () {
                        return this.keys();
                    };
                    return Set;
                }();
            }
            // naive WeakMap shim
            function CreateWeakMapPolyfill() {
                var UUID_SIZE = 16;
                var keys = HashMap.create();
                var rootKey = CreateUniqueKey();
                return function () {
                    function WeakMap() {
                        this._key = CreateUniqueKey();
                    }
                    WeakMap.prototype.has = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/false);
                        return table !== undefined ? HashMap.has(table, this._key) : false;
                    };
                    WeakMap.prototype.get = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/false);
                        return table !== undefined ? HashMap.get(table, this._key) : undefined;
                    };
                    WeakMap.prototype.set = function (target, value) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/true);
                        table[this._key] = value;
                        return this;
                    };
                    WeakMap.prototype.delete = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/false);
                        return table !== undefined ? delete table[this._key] : false;
                    };
                    WeakMap.prototype.clear = function () {
                        // NOTE: not a real clear, just makes the previous data unreachable
                        this._key = CreateUniqueKey();
                    };
                    return WeakMap;
                }();
                function CreateUniqueKey() {
                    var key;
                    do key = "@@WeakMap@@" + CreateUUID(); while (HashMap.has(keys, key));
                    keys[key] = true;
                    return key;
                }
                function GetOrCreateWeakMapTable(target, create) {
                    if (!hasOwn.call(target, rootKey)) {
                        if (!create) return undefined;
                        Object.defineProperty(target, rootKey, { value: HashMap.create() });
                    }
                    return target[rootKey];
                }
                function FillRandomBytes(buffer, size) {
                    for (var i = 0; i < size; ++i) buffer[i] = Math.random() * 0xff | 0;
                    return buffer;
                }
                function GenRandomBytes(size) {
                    if (typeof Uint8Array === "function") {
                        if (typeof crypto !== "undefined") return crypto.getRandomValues(new Uint8Array(size));
                        if (typeof msCrypto !== "undefined") return msCrypto.getRandomValues(new Uint8Array(size));
                        return FillRandomBytes(new Uint8Array(size), size);
                    }
                    return FillRandomBytes(new Array(size), size);
                }
                function CreateUUID() {
                    var data = GenRandomBytes(UUID_SIZE);
                    // mark as random - RFC 4122 § 4.4
                    data[6] = data[6] & 0x4f | 0x40;
                    data[8] = data[8] & 0xbf | 0x80;
                    var result = "";
                    for (var offset = 0; offset < UUID_SIZE; ++offset) {
                        var byte = data[offset];
                        if (offset === 4 || offset === 6 || offset === 8) result += "-";
                        if (byte < 16) result += "0";
                        result += byte.toString(16).toLowerCase();
                    }
                    return result;
                }
            }
            // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
            function MakeDictionary(obj) {
                obj.__ = undefined;
                delete obj.__;
                return obj;
            }
            // patch global Reflect
            (function (__global) {
                if (typeof __global.Reflect !== "undefined") {
                    if (__global.Reflect !== Reflect) {
                        for (var p in Reflect) {
                            if (hasOwn.call(Reflect, p)) {
                                __global.Reflect[p] = Reflect[p];
                            }
                        }
                    }
                } else {
                    __global.Reflect = Reflect;
                }
            })(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : Function("return this;")());
        })(Reflect || (Reflect = {}));
        

        $__global["Reflect"] = Reflect;
    })(this);

    return _retrieveGlobal();
});
$__System.register("1", ["2", "3", "4"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (_1) {}, function (_2) {}, function (_3) {}],
        execute: function () {}
    };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});