'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by rouven on 12.04.17.
 */

var withTooltip = function withTooltip(Tooltip) {
    return function (Component) {

        if (!Tooltip) return Component;

        var id = 'symbol_' + (0, _uuid2.default)();
        var params = {
            'data-tip': true,
            'data-for': id
        };

        var TooltipComponent = _react2.default.createElement(
            _reactTooltip2.default,
            { id: id },
            typeof Tooltip === 'function' ? _react2.default.createElement(Tooltip, null) : Tooltip
        );

        return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
                'span',
                params,
                Component
            ),
            _reactDom2.default.createPortal(TooltipComponent, document.getElementsByTagName('body')[0])
        );
    };
};

exports.default = withTooltip;