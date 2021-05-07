"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _b = require("../../../../b");

var _useContentSlides = _interopRequireDefault(require("../../useContentSlides"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* @pareto-engineering/generator-front 1.0.12 */
// Local Definitions
var componentClassName = 'navigator';
/**
 * This is the component description.
 */

var Navigator = _ref => {
  var {
    id,
    className: userClassName,
    style,
    canMoveForward // ...otherProps

  } = _ref;
  var {
    setPrevStepIndex,
    setNextStepIndex,
    isFirstStep,
    isLastStep // currentStep,
    // currentStepIndex,

  } = (0, _useContentSlides.default)();
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, !isFirstStep ? /*#__PURE__*/React.createElement(_b.Button, {
    className: "x-warning",
    onClick: () => setPrevStepIndex()
  }, "Prev") : /*#__PURE__*/React.createElement("span", null), !isLastStep ? /*#__PURE__*/React.createElement(_b.Button, {
    className: "x-success",
    disabled: !canMoveForward,
    onClick: () => setNextStepIndex()
  }, "Next") : /*#__PURE__*/React.createElement("span", null));
};

Navigator.propTypes = {
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
   * Whether the user can move to the next slide
   */
  canMoveForward: _propTypes.default.bool
};
Navigator.defaultProps = {
  canMoveForward: true
};
var _default = Navigator;
exports.default = _default;