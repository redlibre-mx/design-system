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

/* @pareto-engineering/generator-front 1.0.2 */
// Imports from the component folder
// Local Definitions
var baseClassName = _bem.default.base;
var componentClassName = 'person-card';

var PersonCard = (_ref) => {
  var {
    id,
    className: userClassName,
    style,
    name,
    position,
    picture // ...otherProps

  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("img", {
    src: picture,
    alt: ""
  })), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("p", {
    className: "name"
  }, /*#__PURE__*/React.createElement("strong", null, name)), /*#__PURE__*/React.createElement("p", {
    className: "position"
  }, position)));
};

PersonCard.propTypes = {
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
   * The name of the person.
   */
  name: _propTypes.default.string.isRequired,

  /**
   * The position of the person.
   */
  position: _propTypes.default.string.isRequired,

  /**
   * The picture of the person.
   */
  picture: _propTypes.default.string.isRequired
};
PersonCard.defaultProps = {// someProp:false
};
var _default = PersonCard;
exports.default = _default;