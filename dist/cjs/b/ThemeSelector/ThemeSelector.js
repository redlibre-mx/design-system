"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("@redlibre/bem"));

var _a = require("../../a");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Local Definitions
var baseClassName = _bem.default.base;
var componentClassName = 'theme-selector';
/**
 * This is the component description.
 */

var ThemeSelector = _ref => {
  var {
    id,
    className: userClassName,
    style,
    // children
    color,
    themes,
    iconMap,
    textMap,
    isText
  } = _ref;
  var {
    userTheme,
    setPreferredTheme
  } = (0, _a.useSite)();
  (0, React.useLayoutEffect)(() => {
    Promise.resolve().then(() => _interopRequireWildcard(require("./styles.scss")));
  }, []);
  var nextTheme = (0, React.useMemo)(() => {
    var current = themes.indexOf(userTheme);
    return themes[(current + 1) % themes.length];
  }, [userTheme, themes]);
  var loopThemes = (0, React.useCallback)(() => {
    setPreferredTheme(nextTheme);
  }, [userTheme, themes]);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: [baseClassName, componentClassName, userClassName, "x-".concat(color)].filter(e => e).join(' '),
    id: id,
    style: style,
    onClick: loopThemes
  }, /*#__PURE__*/React.createElement("span", {
    className: ['v0 m-v', isText ? 'f-paragraph' : 'icon'].filter(Boolean).join(' ')
  }, isText ? textMap[nextTheme] || nextTheme : iconMap[userTheme]));
};

ThemeSelector.propTypes = {
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
  // children: PropTypes.node,

  /**
   * The themes and the order in which they appear
   */
  themes: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * A map of the theme names with the icons that represent them. Uses the default font icon.
   */
  iconMap: _propTypes.default.objectOf(_propTypes.default.string),

  /**
   * A map of the theme names with the text that represent them.
   */
  textMap: _propTypes.default.objectOf(_propTypes.default.string),

  /**
   * The color of the component.
   */
  color: _propTypes.default.string,

  /**
   * Whether to display text instead of icons
   */
  isText: _propTypes.default.bool
};
ThemeSelector.defaultProps = {
  themes: ['light', 'dark'],
  iconMap: {
    dark: 'n',
    // sun,
    light: 'm' // moon,

  },
  color: 'paragraph',
  isText: false,
  textMap: {
    light: 'Claro',
    dark: 'Oscuro'
  }
};
var _default = ThemeSelector;
exports.default = _default;