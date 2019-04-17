"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by rouven on 12.04.17.
 */
var withTooltip = function withTooltip(Tooltip) {
  return function (Component) {
    if (!Tooltip) return Component;
    var id = 'symbol_' + (0, _uuid["default"])();
    var params = {
      'data-tip': true,
      'data-for': id
    };

    var TooltipComponent = _react["default"].createElement(_reactTooltip["default"], {
      id: id
    }, typeof Tooltip === 'function' ? _react["default"].createElement(Tooltip, null) : Tooltip);

    return _react["default"].createElement("span", null, _react["default"].createElement("span", params, Component), _reactDom["default"].createPortal(TooltipComponent, document.getElementsByTagName('body')[0]));
  };
};

var _default = withTooltip;
exports["default"] = _default;