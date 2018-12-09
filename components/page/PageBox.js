'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageBox(_ref) {
  var page = _ref.page;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Page 1'
    ),
    _react2.default.createElement(
      'p',
      null,
      page.text
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/books/' + this.props.match.params.id + '/pages/' + page.choices[0]._id + '/options' },
        _react2.default.createElement(
          'p',
          null,
          page.choices[0].text
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/books/' + this.props.match.params.id + '/pages/' + page.choices[1]._id + '/options' },
        _react2.default.createElement(
          'p',
          null,
          page.choices[1].text
        )
      )
    )
  );
}

exports.default = PageBox;