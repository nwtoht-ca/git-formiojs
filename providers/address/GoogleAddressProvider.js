"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleAddressProvider = void 0;

var _Formio = _interopRequireDefault(require("../../Formio"));

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

var _AddressProvider2 = require("./AddressProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GoogleAddressProvider = /*#__PURE__*/function (_AddressProvider) {
  _inherits(GoogleAddressProvider, _AddressProvider);

  _createClass(GoogleAddressProvider, null, [{
    key: "name",
    get: function get() {
      return 'google';
    }
  }, {
    key: "displayName",
    get: function get() {
      return 'Google Maps';
    }
  }]);

  function GoogleAddressProvider() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, GoogleAddressProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GoogleAddressProvider).call(this, options));
    var src = 'https://maps.googleapis.com/maps/api/js?v=3&libraries=places&callback=googleMapsCallback';

    if (options.apiKey) {
      src += "&key=".concat(options.apiKey);
    }

    if (options.region) {
      src += "&region=".concat(options.region);
    }

    _Formio.default.requireLibrary('googleMaps', 'google.maps.places', src);

    return _this;
  }

  _createClass(GoogleAddressProvider, [{
    key: "search",
    value: function search(query) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var requestOptions = this.getRequestOptions(options);
      var params = requestOptions.params = requestOptions.params || {};
      params[this.queryProperty] = query;
      return _Formio.default.libraryReady('googleMaps').then(function () {
        var service = new google.maps.places.PlacesService(document.createElement('div'));
        return new _nativePromiseOnly.default(function (resolve, reject) {
          service.textSearch(params, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              resolve(results);
            } else {
              reject();
            }
          });
        });
      });
    }
  }, {
    key: "displayValueProperty",
    get: function get() {
      return 'formatted_address';
    }
  }]);

  return GoogleAddressProvider;
}(_AddressProvider2.AddressProvider);

exports.GoogleAddressProvider = GoogleAddressProvider;