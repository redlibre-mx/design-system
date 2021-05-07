"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("@redlibre/bem"));

var _a = require("../../../../a");

var _useContentSlides = _interopRequireDefault(require("../../useContentSlides"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* @pareto-engineering/generator-front 1.0.12 */
// Local Definitions
// const baseClassName = styleNames.base
var componentClassName = 'slide';
/**
 * This is the component description.
 */

var Slide = (_ref) => {
  var {
    id,
    className: userClassName,
    style,
    children,
    backgroundMap,
    index // ...otherProps

  } = _ref;
  var {
    isTheme
  } = (0, _a.useSite)();
  var {
    currentStepIndex
  } = (0, _useContentSlides.default)();
  var isActive = currentStepIndex === index;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [// baseClassName,
    isActive && _bem.default.modifierActive, componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, backgroundMap && Object.keys(backgroundMap).map(themeName => /*#__PURE__*/React.createElement("img", {
    src: backgroundMap[themeName],
    key: themeName,
    "data-themable": true,
    "data-is-current-theme": isTheme(themeName),
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, children));
};

Slide.propTypes = {
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
   * Keys : theme names, values : background url
   */
  backgroundMap: _propTypes.default.objectOf(_propTypes.default.string),

  /**
   * The index of this slide
   */
  index: _propTypes.default.number
};
Slide.defaultProps = {// someProp:false
};
var _default = Slide;
exports.default = _default;