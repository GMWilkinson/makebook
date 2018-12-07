'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _PageBox = require('./PageBox');

var _PageBox2 = _interopRequireDefault(_PageBox);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FirstPage = function (_React$Component) {
  _inherits(FirstPage, _React$Component);

  function FirstPage(props) {
    _classCallCheck(this, FirstPage);

    var _this = _possibleConstructorReturn(this, (FirstPage.__proto__ || Object.getPrototypeOf(FirstPage)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(FirstPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages/first').then(function (res) {
        console.log({ page: res.data });
        _this2.setState({ page: res.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;
      return _react2.default.createElement(
        'section',
        null,
        page ? _react2.default.createElement(
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
          )
        ) : _react2.default.createElement(
          'p',
          null,
          'Please wait...'
        )
      );
    }
  }]);

  return FirstPage;
}(_react2.default.Component);

exports.default = FirstPage;