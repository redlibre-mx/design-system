"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _a = require("../../../../a");

var _b = require("../../../../b");

var _bem = _interopRequireDefault(require("@redlibre/bem"));

var _useContentSlides = _interopRequireDefault(require("../../useContentSlides"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* @pareto-engineering/generator-front 1.0.12 */
// Local Definitions
// const baseClassName = styleNames.base
var componentClassName = 'sidebar';
/**
 * This is the component description.
 */

var Sidebar = _ref => {
  var {
    id,
    className: userClassName,
    style,
    header,
    footer // ...otherProps

  } = _ref;
  var {
    steps,
    // setPrevStepIndex,
    // setNextStepIndex,
    setStepIndex,
    // isFirstStep,
    // isLastStep,
    // currentStep,
    currentStepIndex
  } = (0, _useContentSlides.default)();
  return /*#__PURE__*/React.createElement("nav", {
    id: id,
    className: [// baseClassName,
    componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, header ? /*#__PURE__*/React.createElement("header", null, header) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    className: _bem.default.elementContent
  }, /*#__PURE__*/React.createElement(_a.IconList, null, steps.map((step, i) =>
  /*#__PURE__*/

  /* eslint-disable no-nested-ternary -- bc of math inequality cases */
  React.createElement(_a.IconList.Item, {
    key: step.location,
    icon: currentStepIndex === i ? 'l' : i < currentStepIndex ? 'O' : undefined,
    iconHover: i < currentStepIndex ? 'L' : undefined,
    className: [currentStepIndex === i ? 'x-heading' : i < currentStepIndex ? 'pointer x-paragraph xh-link' : 'x-subtitle', 'c-x'].filter(e => e).join(' '),
    onClick: i < currentStepIndex && (() => setStepIndex(i))
  }, step.title)
  /* eslint-enable no-nested-ternary */
  ))), footer || true ? /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(_b.ThemeSelector, {
    color: "heading",
    isText: true,
    className: "v1 mb-v"
  }), footer) : /*#__PURE__*/React.createElement("span", null));
};

Sidebar.propTypes = {
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
   *  The header JSX
   */
  header: _propTypes.default.node,

  /**
   *  The footer JSX
   */
  footer: _propTypes.default.node
};
Sidebar.defaultProps = {// someProp:false
};
var _default = Sidebar;
exports.default = _default;