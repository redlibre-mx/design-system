"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("@pareto-engineering/bem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Component-level imports
Promise.resolve().then(() => _interopRequireWildcard(require("./styles.scss"))); // Helper Definition

var baseClassName = _bem.default.base;
var componentClassName = 'question-dropdown';
/**
 * The question dropdown is used for the FAQ section. <br />
 * If `isFAQSchema=true`, make sure to remember to add the appropriate itemscope and
 * itemtype attributes to the root of the page that includes the FAQ component
 */

var QuestionDropdown = (_ref) => {
  var {
    id,
    className: userClassName,
    style,
    question,
    children,
    isFAQSchema // ...otherProps

  } = _ref;
  var [isOpen, setIsOpen] = (0, _react.useState)(false);

  var toggleOpen = () => setIsOpen(!isOpen);

  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: [baseClassName, componentClassName, userClassName, isOpen && 'open'].filter(e => e).join(' '),
    style: style,
    itemScope: isFAQSchema // if isFAQSchema is false, should be undefined
    ,
    itemProp: isFAQSchema && 'mainEntity',
    itemType: isFAQSchema && 'http://schema.org/Question' // {...otherProps}

  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "accordion",
    onClick: toggleOpen,
    isGhost: true
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "caret"
  }, "^"), /*#__PURE__*/_react.default.createElement("div", {
    className: "question-content",
    itemProp: isFAQSchema && 'name'
  }, question)), /*#__PURE__*/_react.default.createElement("div", {
    className: "answer-content",
    itemProp: isFAQSchema && 'acceptedAnswer',
    itemType: isFAQSchema && 'https://schema.org/Answer'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "answer-text",
    itemProp: isFAQSchema && 'text'
  }, children)));
};

QuestionDropdown.propTypes = {
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
   *  Any children of the question, such as answer blocks
   */
  children: _propTypes.default.node.isRequired,

  /**
   *  Question to be answered
   */
  question: _propTypes.default.string.isRequired,

  /**
   *  Whether element is part of SEO schema
   */
  isFAQSchema: _propTypes.default.bool
};
QuestionDropdown.defaultProps = {// someProp:false
};
var _default = QuestionDropdown;
exports.default = _default;