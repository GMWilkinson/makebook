'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NextPage2 = function (_React$Component) {
  _inherits(NextPage2, _React$Component);

  function NextPage2(props) {
    _classCallCheck(this, NextPage2);

    var _this = _possibleConstructorReturn(this, (NextPage2.__proto__ || Object.getPrototypeOf(NextPage2)).call(this, props));

    _this.state = {};
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(NextPage2, [{
    key: 'handleClick',
    value: function handleClick() {
      var _this2 = this;

      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages/' + this.props.match.params.pageId + '/options').then(function (res) {
        _this2.setState({ page: res.data });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages/' + this.props.match.params.pageId + '/options').then(function (res) {
        console.log('this is res.data', res.data);
        _this3.setState({ page: res.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;
      console.log('next page test', this.state.page);
      return _react2.default.createElement(
        'section',
        null,
        page ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            page.text
          ),
          _react2.default.createElement(
            'p',
            null,
            page.choices[0].nextPage
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/books/' + this.props.match.params.id + '/pages/' + page.choices[0].nextPage + '/options' },
              _react2.default.createElement(
                'p',
                null,
                page.choices[0].text
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/books/' + this.props.match.params.id + '/pages/' + page.choices[1].nextPage + '/options' },
              _react2.default.createElement(
                'p',
                null,
                page.choices[1].text
              )
            )
          )
        ) : _react2.default.createElement(
          'p',
          null,
          'Please wait...'
        )
      );
    }
  }]);

  return NextPage2;
}(_react2.default.Component);

exports.default = NextPage2;