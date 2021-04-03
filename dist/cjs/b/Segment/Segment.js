"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("@pareto-engineering/bem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Component-level imports
Promise.resolve().then(() => _interopRequireWildcard(require("./styles.scss"))); // Helper Definition

var baseClassName = _bem.default.base;
var componentClassName = 'segment';

var Segment = (_ref) => {
  var {
    id,
    className: userClassName,
    style,
    children,
    title,
    footer // ...otherProps

  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("p", {
    className: "s1 title"
  }, title)), /*#__PURE__*/React.createElement("main", null, children), footer && /*#__PURE__*/React.createElement("footer", null, footer));
};

Segment.propTypes = {
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
   *  The children JSX
   */
  children: _propTypes.default.node,

  /**
   * The title of the segment
   */
  title: _propTypes.default.string.isRequired,

  /**
   * The optional footer of the segment.
   */
  footer: _propTypes.default.node
};
Segment.defaultProps = {// someProp:false
};
var _default = Segment;
exports.default = _default;