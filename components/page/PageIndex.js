'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageIndex = function (_React$Component) {
  _inherits(PageIndex, _React$Component);

  function PageIndex(props) {
    _classCallCheck(this, PageIndex);

    var _this = _possibleConstructorReturn(this, (PageIndex.__proto__ || Object.getPrototypeOf(PageIndex)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(PageIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log('/api/books/' + this.props.match.params.id + '/pages');
      _axios2.default.get('/api/books').then(function (result) {
        return _this2.setState({ pages: result.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('rendered');
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'All the pages'
        )
      );
    }
  }]);

  return PageIndex;
}(_react2.default.Component);

exports.default = PageIndex;