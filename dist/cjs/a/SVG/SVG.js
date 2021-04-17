"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("@redlibre/bem"));

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Local Definitions
var baseClassName = _bem.default.base;
var componentClassName = 'svg';

var SVG = (_ref) => {
  var {
    id,
    className: userClassName,
    style,
    width,
    height,
    viewBox,
    preserveAspectRatio,
    useClassName,
    sprite,
    target,
    targets,
    source,
    strokeWidth,
    animated
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["id", "className", "style", "width", "height", "viewBox", "preserveAspectRatio", "useClassName", "sprite", "target", "targets", "source", "strokeWidth", "animated"]);

  (0, React.useLayoutEffect)(() => {
    Promise.resolve().then(() => _interopRequireWildcard(require("./styles.scss")));
  });
  var useSVGProps = (0, React.useMemo)(() => ({
    className: useClassName,
    source,
    target,
    sprite,
    strokeWidth
  }), [useClassName, source, target, strokeWidth, sprite]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: [baseClassName, componentClassName, userClassName, animated && _bem.default.modifierAnimated].filter(e => e).join(' '),
    id: id,
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    preserveAspectRatio: preserveAspectRatio,
    width: width || (!height ? '512' : undefined),
    height: height || (!width ? '512' : undefined),
    viewBox: viewBox
  }, otherProps), targets ? targets.map(targetProps => /*#__PURE__*/React.createElement(_common.UseSVG, _extends({}, useSVGProps, targetProps, {
    key: targetProps.target
  }))) : /*#__PURE__*/React.createElement(_common.UseSVG, useSVGProps));
};

SVG.propTypes = {
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
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),

  /**
   * The height of the element
   */
  height: _propTypes.default.string,

  /**
   * The width of the element
   */
  width: _propTypes.default.string,

  /**
   * The viewBox property of the svg html container
   */
  viewBox: _propTypes.default.string,

  /**
   * The class to apply to the target's use tag
   */
  useClassName: _propTypes.default.string,

  /**
   *  The preserverveAspectRatio property of the svg html container
   */
  preserveAspectRatio: _propTypes.default.string,

  /**
   * The url to the sprite
   */
  sprite: _propTypes.default.string,

  /**
   * The id of the target in the sprite
   */
  target: _propTypes.default.string,

  /**
   * In case this is not a sprite but a standalone svg.
   * Not recommended here, better use Figure.
   * The only reason you would wanna use this instead of target
   * is in the case you need to dynamically pass css classes
   * to the inner svg components
   * TODO remove and also from UseSVG
   */
  source: _propTypes.default.string,

  /**
   * An array of targets
   */
  targets: _propTypes.default.arrayOf(_propTypes.default.exact({
    target: _propTypes.default.string,
    className: _propTypes.default.number,
    stroke: _propTypes.default.boolean,
    strokeWidth: _propTypes.default.number
  })),

  /**
   * The SVG property stroke-width to apply in case of a single target
   */
  strokeWidth: _propTypes.default.number,

  /**
   * Whether to apply an animation class (C.anim)
   */
  animated: _propTypes.default.bool
};
SVG.defaultProps = {
  preserveAspectRatio: 'xMinYMin meet',
  viewBox: '0 0 512 512',
  sprite: '/sprite.svg'
};
var _default = SVG;
exports.default = _default;