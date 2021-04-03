/* @pareto-engineering/generator-front 1.0.2 */
import * as React from 'react';
import PropTypes from 'prop-types';
import styleNames from '@pareto-engineering/bem'; // Imports from the component folder
// Local Definitions

const baseClassName = styleNames.base;
const componentClassName = 'person-card';

const PersonCard = ({
  id,
  className: userClassName,
  style,
  name,
  position,
  picture // ...otherProps

}) => /*#__PURE__*/React.createElement("div", {
  id: id,
  className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
  style: style
}, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("img", {
  src: picture,
  alt: ""
})), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("p", {
  className: "name"
}, /*#__PURE__*/React.createElement("strong", null, name)), /*#__PURE__*/React.createElement("p", {
  className: "position"
}, position)));

PersonCard.propTypes = {
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
   * The name of the person.
   */
  name: PropTypes.string.isRequired,

  /**
   * The position of the person.
   */
  position: PropTypes.string.isRequired,

  /**
   * The picture of the person.
   */
  picture: PropTypes.string.isRequired
};
PersonCard.defaultProps = {// someProp:false
};
export default PersonCard;