function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* @redlibre/generator-front 1.0.0 */
import * as React from 'react';
import PropTypes from 'prop-types';
import styleNames from '@redlibre/bem';
import usePage from "../../usePage"; // Local Definitions

const baseClassName = styleNames.base;
const componentClassName = 'section';

const Section = ({
  id: userId,
  className: userClassName,
  style,
  children,
  ...otherProps
}) => {
  const {
    id: pageId
  } = usePage();
  const sectionId = userId && `${pageId}_${userId}`;
  return /*#__PURE__*/React.createElement("section", _extends({
    id: sectionId,
    className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, otherProps), children);
};

Section.propTypes = {
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
Section.defaultProps = {// someProp:false
};
export default Section;