/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react';
import PropTypes from 'prop-types';
import styleNames from '@redlibre/bem';
import { useSite } from "../../../../a"; // Local Definitions

import useContentSlides from "../../useContentSlides"; // const baseClassName = styleNames.base

const componentClassName = 'slide';
/**
 * This is the component description.
 */

const Slide = ({
  id,
  className: userClassName,
  style,
  children,
  backgroundMap,
  index // ...otherProps

}) => {
  const {
    isTheme
  } = useSite();
  const {
    currentStepIndex
  } = useContentSlides();
  const isActive = currentStepIndex === index;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [// baseClassName,
    isActive && styleNames.modifierActive, componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, backgroundMap && Object.keys(backgroundMap).map(themeName => /*#__PURE__*/React.createElement("img", {
    src: backgroundMap[themeName],
    key: themeName,
    "data-themable": true,
    "data-is-current-theme": isTheme(themeName),
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, children)));
};

Slide.propTypes = {
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
   * Keys : theme names, values : background url
   */
  backgroundMap: PropTypes.objectOf(PropTypes.string),

  /**
   * The index of this slide
   */
  index: PropTypes.number
};
Slide.defaultProps = {// someProp:false
};
export default Slide;