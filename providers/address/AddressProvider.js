"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressProvider = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _Formio = _interopRequireDefault(require("../../Formio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AddressProvider = /*#__PURE__*/function () {
  _createClass(AddressProvider, null, [{
    key: "name",
    get: function get() {
      return 'address';
    }
  }, {
    key: "displayName",
    get: function get() {
      return 'Address';
    }
  }]);

  function AddressProvider() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AddressProvider);

    this.options = _lodash.default.merge({}, this.defaultOptions, options);
  }

  _createClass(AddressProvider, [{
    key: "serialize",
    value: function serialize(params) {
      return _lodash.default.toPairs(params).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
      }).join('&');
    }
  }, {
    key: "getRequestOptions",
    value: function getRequestOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _lodash.default.merge({}, this.options, options);
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "getRequestUrl",
    value: function getRequestUrl() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      throw new Error('Method AddressProvider#getRequestUrl(options) is abstract.');
    }
  }, {
    key: "makeRequest",
    value: function makeRequest() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _Formio.default.makeStaticRequest(this.getRequestUrl(options), 'GET', null, {
        noToken: true
      });
    }
  }, {
    key: "search",
    value: function search(query) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var requestOptions = this.getRequestOptions(options);
      var params = requestOptions.params = requestOptions.params || {};
      params[this.queryProperty] = query;
      return this.makeRequest(requestOptions).then(function (result) {
        return _this.responseProperty ? _lodash.default.get(result, _this.responseProperty, []) : result;
      });
    }
  }, {
    key: "getDisplayValue",
    value: function getDisplayValue(address) {
      return this.displayValueProperty ? _lodash.default.get(address, this.displayValueProperty, '') : String(address);
    }
  }, {
    key: "defaultOptions",
    get: function get() {
      return {};
    }
  }, {
    key: "queryProperty",
    get: function get() {
      return 'query';
    }
  }, {
    key: "responseProperty",
    get: function get() {
      return null;
    }
  }, {
    key: "displayValueProperty",
    get: function get() {
      return null;
    }
  }]);

  return AddressProvider;
}();

exports.AddressProvider = AddressProvider;