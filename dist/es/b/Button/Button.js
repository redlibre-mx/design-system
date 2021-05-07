function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* @pareto-engineering/generator-front 1.0.9 */
import * as React from 'react';
import { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styleNames from '@redlibre/bem'; // Local Definitions

const baseClassName = styleNames.base;
const componentClassName = 'button';
/**
 * This is the component description.
 */

const Button = ({
  id,
  className: userClassName,
  style,
  children,
  disabled,
  fontHeading,
  ...otherProps
}) => {
  useLayoutEffect(() => {
    import("./styles.scss");
  }, []);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    id: id,
    className: [baseClassName, componentClassName, userClassName, fontHeading && 'font-heading'].filter(e => e).join(' '),
    style: style,
    disabled: disabled
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
   *  Whether the button is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Whether the button uses the heading font
   */
  fontHeading: PropTypes.bool
};
Button.defaultProps = {
  disabled: false
};
export default Button;