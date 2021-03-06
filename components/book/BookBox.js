'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BookBox(_ref) {
  var book = _ref.book;

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: '/books/' + book._id },
    _react2.default.createElement(
      'article',
      { className: 'column is-4' },
      _react2.default.createElement(
        'figure',
        { className: 'image' },
        _react2.default.createElement('img', { src: book.image })
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'h3',
        null,
        book.name
      ),
      _react2.default.createElement(
        'p',
        null,
        book.author
      )
    )
  );
}

exports.default = BookBox;