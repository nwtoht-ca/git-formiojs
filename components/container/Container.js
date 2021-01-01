"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _NestedDataComponent2 = _interopRequireDefault(require("../_classes/nesteddata/NestedDataComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ContainerComponent = /*#__PURE__*/function (_NestedDataComponent) {
  _inherits(ContainerComponent, _NestedDataComponent);

  _createClass(ContainerComponent, null, [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _NestedDataComponent2.default.schema.apply(_NestedDataComponent2.default, [{
        label: 'Container',
        type: 'container',
        key: 'container',
        clearOnHide: true,
        input: true,
        tree: true,
        hideLabel: true,
        components: []
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Container',
        icon: 'folder-open',
        group: 'data',
        documentation: 'http://help.form.io/userguide/#container',
        weight: 10,
        schema: ContainerComponent.schema()
      };
    }
  }]);

  function ContainerComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContainerComponent);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContainerComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.type = 'container';
    return _this;
  }

  _createClass(ContainerComponent, [{
    key: "addComponents",
    value: function addComponents(data, options) {
      return _get(_getPrototypeOf(ContainerComponent.prototype), "addComponents", this).call(this, this.dataValue, options);
    }
  }, {
    key: "componentContext",
    value: function componentContext() {
      return this.dataValue;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var hasValue = this.hasValue();

      if (hasValue && _lodash.default.isEmpty(this.dataValue)) {
        flags.noValidate = true;
      }

      if (!value || !_lodash.default.isObject(value) || !hasValue) {
        flags.changed = true;
        this.dataValue = this.defaultValue;
      } else {
        flags.changed = flags.changed || this.hasChanged(value, this.dataValue);
        this.dataValue = value;
      }

      _get(_getPrototypeOf(ContainerComponent.prototype), "setValue", this).call(this, value, flags);

      this.updateOnChange(flags);
      return flags.changed;
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return ContainerComponent.schema();
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return {};
    }
  }, {
    key: "templateName",
    get: function get() {
      return 'container';
    }
  }]);

  return ContainerComponent;
}(_NestedDataComponent2.default);

exports.default = ContainerComponent;