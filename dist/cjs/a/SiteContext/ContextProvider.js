"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useTheme = _interopRequireDefault(require("./useTheme"));

var _Context = _interopRequireDefault(require("./Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Component-level imports
// Helper Definitions
var SiteContextProvider = _ref => {
  var {
    children,
    initialTheme,
    config // ...otherProps

  } = _ref;
  var theme = (0, _useTheme.default)(initialTheme);
  return /*#__PURE__*/React.createElement(_Context.default.Provider, {
    value: _objectSpread(_objectSpread({}, config), theme)
  }, children);
};

SiteContextProvider.propTypes = {
  /**
   *  The children JSX
   */
  children: _propTypes.default.node,

  /**
   * The initial theme for the website. If undefined, fallbacks on system preference.
   */
  initialTheme: _propTypes.default.string,

  /**
   * A dictionnary containing settings and preferences to be used site-wide
   */
  config: _propTypes.default.shape({
    SITE: _propTypes.default.shape({
      NAME: _propTypes.default.string.isRequired,
      CANONICAL: _propTypes.default.string.isRequired,
      SUPPORT_EMAIL: _propTypes.default.string,
      TITLE_SUFFIX: _propTypes.default.string
    }),
    SOCIAL: _propTypes.default.shape({
      FACEBOOK: _propTypes.default.string,
      INSTAGRAM: _propTypes.default.string,
      YOUTUBE: _propTypes.default.string
    })
  }).isRequired
};
var _default = SiteContextProvider;
exports.default = _default;