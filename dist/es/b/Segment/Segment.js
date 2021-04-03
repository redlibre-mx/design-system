/* @pareto-engineering/generator-front 0.2.4 */
import * as React from 'react';
import PropTypes from 'prop-types'; // Package-level Imports

import styleNames from '@pareto-engineering/bem'; // Component-level imports

import("./styles.scss"); // Helper Definition

const baseClassName = styleNames.base;
const componentClassName = 'segment';

const Segment = ({
  id,
  className: userClassName,
  style,
  children,
  title,
  footer // ...otherProps

}) => /*#__PURE__*/React.createElement("div", {
  id: id,
  className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
  style: style
}, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("p", {
  className: "s1 title"
}, title)), /*#__PURE__*/React.createElement("main", null, children), footer && /*#__PURE__*/React.createElement("footer", null, footer));

Segment.propTypes = {
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
   * The title of the segment
   */
  title: PropTypes.string.isRequired,

  /**
   * The optional footer of the segment.
   */
  footer: PropTypes.node
};
Segment.defaultProps = {// someProp:false
};
export default Segment;