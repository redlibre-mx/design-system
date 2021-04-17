/* @pareto-engineering/generator-front 1.0.6 */
import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * This component is used internally by the `SVG` component
 * to leverage the `use` tag and read svg sprites.
 */

const UseSVG = ({
  id,
  className: userClassName,
  style,
  sprite,
  target,
  source,
  strokeWidth
}) => /*#__PURE__*/React.createElement("use", {
  className: [userClassName].filter(e => e).join(' '),
  href: source || sprite + (target ? `#${target}` : ''),
  style: strokeWidth ? { ...style,
    '--sw': Number(strokeWidth)
  } : {
    style
  },
  id: id
});

UseSVG.propTypes = {
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
  style: PropTypes.objectOf(PropTypes.string),

  /**
   * The url to the svg sprite, from the root of the site, for instance : `/myimage.svg`
   */
  sprite: PropTypes.string,

  /**
   * The target image id in the sprite
   */
  target: PropTypes.string,

  /**
   * The source image in case this is not a sprite
   */
  // TODO check if this works
  source: PropTypes.string,

  /**
   * The SVG property stroke-width
   */
  strokeWidth: PropTypes.number
};
export default UseSVG;