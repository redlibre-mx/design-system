"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("@redlibre/bem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Local Definitions
var baseClassName = _bem.default.base;
var componentClassName = 'button';
/**
 * This is the component description.
 */

var Button = (_ref) => {
  var {
    id,
    className: userClassName,
    style,
    children,
    disabled,
    fontHeading
  } = _ref;
  (0, React.useLayoutEffect)(() => {
    Promise.resolve().then(() => _interopRequireWildcard(require("./styles.scss")));
  }, []);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: id,
    className: [baseClassName, componentClassName, userClassName, fontHeading && 'font-heading'].filter(e => e).join(' '),
    style: style,
    disabled: disabled // {...otherProps}

  }, children);
};

Button.propTypes = {
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
   *  Whether the button is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * Whether the button uses the heading font
   */
  fontHeading: _propTypes.default.bool
};
Button.defaultProps = {
  disabled: false
};
var _default = Button;
exports.default = _default;