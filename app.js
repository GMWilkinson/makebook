'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _BookIndex = require('./components/book/BookIndex');

var _BookIndex2 = _interopRequireDefault(_BookIndex);

var _BookShow = require('./components/book/BookShow');

var _BookShow2 = _interopRequireDefault(_BookShow);

var _PageIndex = require('./components/page/PageIndex');

var _PageIndex2 = _interopRequireDefault(_PageIndex);

var _PageShow = require('./components/page/PageShow');

var _PageShow2 = _interopRequireDefault(_PageShow);

var _FirstPage = require('./components/page/FirstPage');

var _FirstPage2 = _interopRequireDefault(_FirstPage);

var _New = require('./components/page/New');

var _New2 = _interopRequireDefault(_New);

var _Register = require('./components/auth/Register');

var _Register2 = _interopRequireDefault(_Register);

var _Login = require('./components/auth/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Profile = require('./components/auth/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

require('bulma');

require('./scss/style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/books', component: _BookIndex2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/books/:id/pages/first', component: _FirstPage2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/books/:id/pages/:pageId', component: _PageShow2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/books/:id/pages', component: _PageIndex2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/books/:id', component: _BookShow2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/new', component: _New2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _Profile2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _Login2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/register', component: _Register2.default })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));