/* @pareto-engineering/generator-front 1.0.2 */
import * as React from 'react';
import PropTypes from 'prop-types';
import styleNames from '@pareto-engineering/bem'; // Imports from the component folder

import("./styles.scss"); // Local Definitions

const baseClassName = styleNames.base;
const componentClassName = 'tester';

const Tester = ({
  id,
  className: userClassName,
  style,
  children // ...otherProps

}) => /*#__PURE__*/React.createElement("div", {
  id: id,
  className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
  style: style
}, children);

Tester.propTypes = {
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
Tester.defaultProps = {// someProp:false
};
export default Tester;