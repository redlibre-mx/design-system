/* @pareto-engineering/generator-front 1.0.2 */
import * as React from 'react';
import PropTypes from 'prop-types';
import styleNames from '@pareto-engineering/bem'; // Imports from the component folder

import { PersonCard } from "./common"; // Local Definitions

import("./styles.scss");
const baseClassName = styleNames.base;
const componentClassName = 'team-gallery';

const TeamGallery = ({
  id,
  className: userClassName,
  style,
  children,
  title // ...otherProps

}) => /*#__PURE__*/React.createElement("div", {
  id: id,
  className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
  style: style
}, /*#__PURE__*/React.createElement("div", {
  className: "title"
}, title), /*#__PURE__*/React.createElement("div", {
  className: "content"
}, children));

TeamGallery.propTypes = {
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
  children: PropTypes.node.isRequired,

  /**
   *  Title of gallery
   */
  title: PropTypes.string.isRequired
};
TeamGallery.defaultProps = {// someProp:false
};
TeamGallery.PersonCard = PersonCard;
export default TeamGallery;