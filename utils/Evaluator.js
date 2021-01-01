"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _stringHash = _interopRequireDefault(require("string-hash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Evaluator = {
  noeval: false,
  cache: {},
  templateSettings: {
    evaluate: /\{%([\s\S]+?)%\}/g,
    interpolate: /\{\{([\s\S]+?)\}\}/g,
    escape: /\{\{\{([\s\S]+?)\}\}\}/g
  },
  evaluator: function evaluator(func) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    if (Evaluator.noeval) {
      console.warn('No evaluations allowed for this renderer.');
      return _lodash.default.noop;
    }

    if (_typeof(params[0]) === 'object') {
      params = _lodash.default.keys(params[0]);
    }

    return _construct(Function, _toConsumableArray(params).concat([func]));
  },
  template: function template(_template, hash) {
    hash = hash || (0, _stringHash.default)(_template);

    try {
      // Ensure we handle copied templates from the ejs files.
      _template = _template.replace(/ctx\./g, '');
      return Evaluator.cache[hash] = _lodash.default.template(_template, Evaluator.templateSettings);
    } catch (err) {
      console.warn('Error while processing template', err, _template);
    }
  },
  interpolate: function interpolate(rawTemplate, data) {
    if (typeof rawTemplate === 'function') {
      try {
        return rawTemplate(data);
      } catch (err) {
        console.warn('Error interpolating template', err, data);
        return err.message;
      }
    }

    rawTemplate = String(rawTemplate);
    var hash = (0, _stringHash.default)(rawTemplate);
    var template;

    if (Evaluator.cache[hash]) {
      template = Evaluator.cache[hash];
    } else if (Evaluator.noeval) {
      // No cached template methods available. Use poor-mans interpolate without eval.
      return rawTemplate.replace(/({{\s*(.*?)\s*}})/g, function (match, $1, $2) {
        return _lodash.default.get(data, $2);
      });
    } else {
      template = Evaluator.template(rawTemplate, hash);
    }

    if (typeof template === 'function') {
      try {
        return template(data);
      } catch (err) {
        console.warn('Error interpolating template', err, rawTemplate, data);
        return err.message;
      }
    }

    return template;
  },
  evaluate: function evaluate(func, args) {
    return Array.isArray(args) ? func.apply(void 0, _toConsumableArray(args)) : func(args);
  }
};
var _default = Evaluator;
exports.default = _default;