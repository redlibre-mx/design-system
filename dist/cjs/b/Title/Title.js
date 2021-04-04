"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("@redlibre/bem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Component-level imports
// Helper Definition
var baseClassName = _bem.default.base;
var componentClassName = 'title';

var Title = (_ref) => {
  var {
    id,
    className: userClassName,
    style,
    // children,
    heading,
    headingAs: HeadingWrapper,
    headingClassName,
    headingStyle,
    headingProps,
    subtitle,
    subtitleAs: SubtitleWrapper,
    subtitleClassName,
    subtitleStyle,
    subtitleProps // ...otherProps

  } = _ref;
  (0, React.useLayoutEffect)(() => {
    Promise.resolve().then(() => _interopRequireWildcard(require("./styles.scss")));
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement(HeadingWrapper, _extends({
    className: [headingClassName, _bem.default.heading].filter(e => e).join(' '),
    style: headingStyle
  }, headingProps), heading), subtitle && /*#__PURE__*/React.createElement(SubtitleWrapper, _extends({
    className: [subtitleClassName, _bem.default.subtitle].filter(e => e).join(' '),
    style: subtitleStyle
  }, subtitleProps), subtitle));
};

Title.propTypes = {
  /**
   * The HTML id for this element
   */
  id: _propTypes.default.string,

  /**
   * The HTML class names for this element
   */
  className: _propTypes.default.string,

  /**
   * The React-written, css properties for this element.
   */
  style: _propTypes.default.objectOf(_propTypes.default.string),

  /**
   *  The heading
   */
  heading: _propTypes.default.node.isRequired,

  /**
  * The node to display the heading with
  */
  headingAs: _propTypes.default.node,

  /**
  * The heading html class
  */
  headingClassName: _propTypes.default.string,

  /**
  * The JSX-Written, css styles to apply to the element.
  */
  headingStyle: _propTypes.default.objectOf(_propTypes.default.string),

  /**
   * Extra props to pass to the heading
   */

  /* eslint-disable react/forbid-prop-types -- Does not apply to a full prop object */
  headingProps: _propTypes.default.object,

  /* eslint-enable react/forbid-prop-types */

  /**
   *  The subtitle
   */
  subtitle: _propTypes.default.node,

  /**
   * The node to display the heading with
   */
  subtitleAs: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * The subtitle html class
   */
  subtitleClassName: _propTypes.default.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  subtitleStyle: _propTypes.default.objectOf(_propTypes.default.string),

  /**
   * Extra props to pass to the subtitle
   */

  /* eslint-disable react/forbid-prop-types -- Does not apply to a full prop object */
  subtitleProps: _propTypes.default.object
  /* eslint-enable react/forbid-prop-types */

};
Title.defaultProps = {
  headingAs: 'h1',
  subtitleAs: 'p'
};
var _default = Title;
exports.default = _default;