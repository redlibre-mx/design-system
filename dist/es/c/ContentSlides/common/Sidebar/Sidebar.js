/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { IconList } from "../../../../a";
import { ThemeSelector } from "../../../../b";
import styleNames from '@redlibre/bem';
import useContentSlides from "../../useContentSlides"; // Local Definitions
// const baseClassName = styleNames.base

const componentClassName = 'sidebar';
/**
 * This is the component description.
 */

const Sidebar = ({
  id,
  className: userClassName,
  style,
  header,
  footer // ...otherProps

}) => {
  const {
    steps,
    // setPrevStepIndex,
    // setNextStepIndex,
    setStepIndex,
    // isFirstStep,
    // isLastStep,
    // currentStep,
    currentStepIndex
  } = useContentSlides();
  return /*#__PURE__*/React.createElement("nav", {
    id: id,
    className: [// baseClassName,
    componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, header ? /*#__PURE__*/React.createElement("header", null, header) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    className: styleNames.elementContent
  }, /*#__PURE__*/React.createElement(IconList, null, steps.map((step, i) =>
  /*#__PURE__*/

  /* eslint-disable no-nested-ternary -- bc of math inequality cases */
  React.createElement(IconList.Item, {
    key: step.location,
    icon: currentStepIndex === i ? 'l' : i < currentStepIndex ? 'O' : undefined,
    iconHover: i < currentStepIndex ? 'L' : undefined,
    className: [currentStepIndex === i ? 'x-heading' : i < currentStepIndex ? 'pointer x-paragraph xh-link' : 'x-subtitle', 'c-x'].filter(e => e).join(' '),
    onClick: i < currentStepIndex && (() => setStepIndex(i))
  }, step.title)
  /* eslint-enable no-nested-ternary */
  ))), footer || true ? /*#__PURE__*/React.createElement("footer", null, footer, /*#__PURE__*/React.createElement(ThemeSelector, {
    className: "x-heading",
    isText: true,
    textMap: {
      dark: 'mysterious'
    }
  })) : /*#__PURE__*/React.createElement("span", null));
};

Sidebar.propTypes = {
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
   *  The header JSX
   */
  header: PropTypes.node,

  /**
   *  The footer JSX
   */
  footer: PropTypes.node
};
Sidebar.defaultProps = {// someProp:false
};
export default Sidebar;