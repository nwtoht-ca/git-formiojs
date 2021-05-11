"use strict";

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.weak-map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.object.get-prototype-of.js");

var _Input2 = _interopRequireDefault(require("../_classes/input/Input"));

var _vanillaTextMask = require("@formio/vanilla-text-mask");

var FormioUtils = _interopRequireWildcard(require("../../utils/utils"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextFieldComponent = /*#__PURE__*/function (_Input) {
  _inherits(TextFieldComponent, _Input);

  var _super = _createSuper(TextFieldComponent);

  function TextFieldComponent(component, options, data) {
    var _this$component$widge, _this$component$widge2;

    var _this;

    _classCallCheck(this, TextFieldComponent);

    _this = _super.call(this, component, options, data);
    var timezone = ((_this$component$widge = _this.component.widget) === null || _this$component$widge === void 0 ? void 0 : _this$component$widge.timezone) || _this.options.timezone;

    if (((_this$component$widge2 = _this.component.widget) === null || _this$component$widge2 === void 0 ? void 0 : _this$component$widge2.type) === 'calendar') {
      _this.component.widget = _objectSpread(_objectSpread({}, _this.component.widget), {}, {
        readOnly: _this.options.readOnly,
        timezone: timezone,
        locale: _this.options.language
      });
    }

    return _this;
  }
  /**
   * Returns the mask value object.
   *
   * @param value
   * @param flags
   * @return {*}
   */


  _createClass(TextFieldComponent, [{
    key: "defaultSchema",
    get: function get() {
      return TextFieldComponent.schema();
    }
  }, {
    key: "inputInfo",
    get: function get() {
      var info = _get(_getPrototypeOf(TextFieldComponent.prototype), "inputInfo", this);

      info.type = 'input';

      if (this.component.hasOwnProperty('spellcheck')) {
        info.attr.spellcheck = this.component.spellcheck;
      }

      if (this.component.mask) {
        info.attr.type = 'password';
      } else {
        info.attr.type = this.component.inputType === 'password' ? 'password' : 'text';
      }

      info.changeEvent = 'input';
      return info;
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return '';
    }
  }, {
    key: "maskValue",
    value: function maskValue(value) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Convert it into the correct format.
      if (!value || _typeof(value) !== 'object') {
        value = {
          value: value,
          maskName: this.component.inputMasks[0].label
        };
      } // If no value is provided, then set the defaultValue.


      if (!value.value) {
        var defaultValue = flags.noDefault ? this.emptyValue : this.defaultValue;
        value.value = Array.isArray(defaultValue) ? defaultValue[0] : defaultValue;
      }

      return value;
    }
    /**
     * Normalize the value set in the data object.
     *
     * @param value
     * @param flags
     * @return {*}
     */

  }, {
    key: "normalizeValue",
    value: function normalizeValue(value) {
      var _this2 = this;

      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isMultipleMasksField) {
        return _get(_getPrototypeOf(TextFieldComponent.prototype), "normalizeValue", this).call(this, value);
      }

      if (Array.isArray(value)) {
        return _get(_getPrototypeOf(TextFieldComponent.prototype), "normalizeValue", this).call(this, value.map(function (val) {
          return _this2.maskValue(val, flags);
        }));
      }

      return _get(_getPrototypeOf(TextFieldComponent.prototype), "normalizeValue", this).call(this, this.maskValue(value, flags));
    }
    /**
     * Sets the value at this index.
     *
     * @param index
     * @param value
     * @param flags
     */

  }, {
    key: "setValueAt",
    value: function setValueAt(index, value) {
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!this.isMultipleMasksField) {
        return _get(_getPrototypeOf(TextFieldComponent.prototype), "setValueAt", this).call(this, index, value, flags);
      }

      value = this.maskValue(value, flags);
      var textValue = value.value || '';
      var textInput = this.refs.mask ? this.refs.mask[index] : null;
      var maskInput = this.refs.select ? this.refs.select[index] : null;
      var mask = this.getMaskPattern(value.maskName);

      if (textInput && maskInput && mask) {
        var placeholderChar = this.placeholderChar;
        textInput.value = (0, _vanillaTextMask.conformToMask)(textValue, FormioUtils.getInputMask(mask), {
          placeholderChar: placeholderChar
        }).conformedValue;
        maskInput.value = value.maskName;
      } else {
        return _get(_getPrototypeOf(TextFieldComponent.prototype), "setValueAt", this).call(this, index, textValue, flags);
      }
    }
    /**
     * Returns the value at this index.
     *
     * @param index
     * @return {*}
     */

  }, {
    key: "getValueAt",
    value: function getValueAt(index) {
      if (!this.isMultipleMasksField) {
        return _get(_getPrototypeOf(TextFieldComponent.prototype), "getValueAt", this).call(this, index);
      }

      var textInput = this.refs.mask ? this.refs.mask[index] : null;
      var maskInput = this.refs.select ? this.refs.select[index] : null;
      return {
        value: textInput ? textInput.value : undefined,
        maskName: maskInput ? maskInput.value : undefined
      };
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.dataValue;

      if (!this.isMultipleMasksField) {
        return _get(_getPrototypeOf(TextFieldComponent.prototype), "isEmpty", this).call(this, (value || '').toString().trim());
      }

      return _get(_getPrototypeOf(TextFieldComponent.prototype), "isEmpty", this).call(this, value) || (this.component.multiple ? value.length === 0 : !value.maskName || !value.value);
    }
  }], [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _Input2.default.schema.apply(_Input2.default, [{
        label: 'Text Field',
        key: 'textField',
        type: 'textfield',
        mask: false,
        inputType: 'text',
        inputFormat: 'plain',
        inputMask: '',
        tableView: true,
        spellcheck: true,
        validate: {
          minLength: '',
          maxLength: '',
          pattern: ''
        }
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Text Field',
        icon: 'terminal',
        group: 'basic',
        documentation: '/userguide/#textfield',
        weight: 0,
        schema: TextFieldComponent.schema()
      };
    }
  }]);

  return TextFieldComponent;
}(_Input2.default);

exports.default = TextFieldComponent;