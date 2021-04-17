function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* @pareto-engineering/generator-front 1.0.3 */
import * as React from 'react';
import { useLayoutEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styleNames from '@redlibre/bem';
import { UseSVG } from "./common"; // Local Definitions

const baseClassName = styleNames.base;
const componentClassName = 'svg';

const SVG = ({
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
  animated,
  ...otherProps
}) => {
  useLayoutEffect(() => {
    import("./styles.scss");
  });
  const useSVGProps = useMemo(() => ({
    className: useClassName,
    source,
    target,
    sprite,
    strokeWidth
  }), [useClassName, source, target, strokeWidth, sprite]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: [baseClassName, componentClassName, userClassName, animated && styleNames.modifierAnimated].filter(e => e).join(' '),
    id: id,
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    preserveAspectRatio: preserveAspectRatio,
    width: width || (!height ? '512' : undefined),
    height: height || (!width ? '512' : undefined),
    viewBox: viewBox
  }, otherProps), targets ? targets.map(targetProps => /*#__PURE__*/React.createElement(UseSVG, _extends({}, useSVGProps, targetProps, {
    key: targetProps.target
  }))) : /*#__PURE__*/React.createElement(UseSVG, useSVGProps));
};

SVG.propTypes = {
  /**
   * The HTML id for this element
   */
  id: PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className: PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

  /**
   * The height of the element
   */
  height: PropTypes.string,

  /**
   * The width of the element
   */
  width: PropTypes.string,

  /**
   * The viewBox property of the svg html container
   */
  viewBox: PropTypes.string,

  /**
   * The class to apply to the target's use tag
   */
  useClassName: PropTypes.string,

  /**
   *  The preserverveAspectRatio property of the svg html container
   */
  preserveAspectRatio: PropTypes.string,

  /**
   * The url to the sprite
   */
  sprite: PropTypes.string,

  /**
   * The id of the target in the sprite
   */
  target: PropTypes.string,

  /**
   * In case this is not a sprite but a standalone svg.
   * Not recommended here, better use Figure.
   * The only reason you would wanna use this instead of target
   * is in the case you need to dynamically pass css classes
   * to the inner svg components
   * TODO remove and also from UseSVG
   */
  source: PropTypes.string,

  /**
   * An array of targets
   */
  targets: PropTypes.arrayOf(PropTypes.exact({
    target: PropTypes.string,
    className: PropTypes.number,
    stroke: PropTypes.boolean,
    strokeWidth: PropTypes.number
  })),

  /**
   * The SVG property stroke-width to apply in case of a single target
   */
  strokeWidth: PropTypes.number,

  /**
   * Whether to apply an animation class (C.anim)
   */
  animated: PropTypes.bool
};
SVG.defaultProps = {
  preserveAspectRatio: 'xMinYMin meet',
  viewBox: '0 0 512 512',
  sprite: '/sprite.svg'
};
export default SVG;