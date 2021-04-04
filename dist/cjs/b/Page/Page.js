"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("@redlibre/bem"));

var _common = require("./common");

var _Context = _interopRequireDefault(require("./Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import('./styles.scss')
// Local Definitions
var baseClassName = _bem.default.base;
var componentClassName = 'page';
/** The page components structures page and blocks
 * It uses **the color provided** by `x`
 *
 */

var Page = (_ref) => {
  var {
    id,
    className: userClassName,
    style,
    children,
    itemType,
    as: Wrapper,
    helmetProps
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["id", "className", "style", "children", "itemType", "as", "helmetProps"]);

  (0, React.useEffect)(() => {
    // If we're on the client, we make sure to scroll up when the page loads
    // This is a necessary transform to make react apt for website pages
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);
  return /*#__PURE__*/React.createElement(_Context.default.Provider, {
    value: {
      // In the future we can pass more data here
      id
    }
  }, /*#__PURE__*/React.createElement(Wrapper, _extends({
    id: id,
    className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    style: style,
    itemType: itemType,
    itemScope: itemType && ' '
  }, otherProps), itemType && /*#__PURE__*/React.createElement("meta", {
    itemProp: "mainEntityOfPage",
    content: helmetProps === null || helmetProps === void 0 ? void 0 : helmetProps.canonical
  }), helmetProps && /*#__PURE__*/React.createElement(_common.PageHelmet, helmetProps), children));
};

Page.propTypes = {
  /**
   * The HTML id for this element
   */
  id: _propTypes.default.string.isRequired,

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
   *  The base node (html or react).
   */
  as: _propTypes.default.node,

  /**
  * The main entity schema. Refer to [Google Developers Site](https://developers.google.com/search/docs/guides/search-gallery) for info.
  */
  itemType: _propTypes.default.string,

  /**
  * The props to pass to `Page.Helmet`. Refer to the corresponding section of the docs.
  */
  helmetProps: _propTypes.default.objectOf(_propTypes.default.string)
};
Page.defaultProps = {
  as: 'main'
};
Page.Helmet = _common.PageHelmet;
Page.Section = _common.Section;
var _default = Page;
exports.default = _default;