/* @redlibre/generator-front 0.2.4 */
import * as React from 'react';
import { useLayoutEffect } from 'react';
import PropTypes from 'prop-types'; // Package-level Imports

import styleNames from '@redlibre/bem'; // Component-level imports

import { Group } from "./common"; // Helper Definition

const baseClassName = styleNames.base;
const componentClassName = 'card';

const Card = ({
  id,
  className: userClassName,
  style,
  children // ...otherProps

}) => {
  useLayoutEffect(() => {
    import("./styles.scss");
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, children);
};

Card.propTypes = {
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
  children: PropTypes.node
};
Card.defaultProps = {// someProp:false
};
Card.Group = Group;
export default Card;