function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* @redlibre/generator-front 0.2.4 */
import * as React from 'react';
import { useLayoutEffect } from 'react';
import PropTypes from 'prop-types'; // Package-level Imports

import styleNames from '@redlibre/bem'; // Component-level imports
// Helper Definition

const baseClassName = styleNames.base;
const componentClassName = 'button';

const Button = ({
  id,
  className: userClassName,
  style,
  children,
  isGhost,
  ...otherProps
}) => {
  useLayoutEffect(() => {
    import("./styles.scss");
  }, []);
  return /*#__PURE__*/React.createElement("button", _extends({
    id: id,
    className: [baseClassName, componentClassName, userClassName, isGhost && styleNames.modifierGhost].filter(e => e).join(' '),
    style: style,
    type: "button"
  }, otherProps), children);
};

Button.propTypes = {
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
   *  The children JSX
   */
  children: PropTypes.node,

  /**
   * Whether the button has the ghost style
   */
  isGhost: PropTypes.bool
};
Button.defaultProps = {// someProp:false
};
export default Button;