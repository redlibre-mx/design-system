/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react';
import PropTypes from 'prop-types';
import styleNames from '@redlibre/bem';
import { ProgressBar } from "../../../../a";
import useContentSlides from "../../useContentSlides"; // Local Definitions
// const baseClassName = styleNames.base

const componentClassName = 'horizontal-menu';
/**
 * This is the component description.
 */

const HorizontalMenu = ({
  id,
  className: userClassName,
  style // ...otherProps

}) => {
  const {
    setPrevStepIndex,
    // setNextStepIndex,
    isFirstStep,
    // isLastStep,
    currentStep // currentStep,
    // currentStepIndex,

  } = useContentSlides();
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [// baseClassName,
    componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, (currentStep === null || currentStep === void 0 ? void 0 : currentStep.progress) > 0 && /*#__PURE__*/React.createElement(ProgressBar, {
    progress: currentStep.progress,
    attached: true,
    height: ".5em"
  }), /*#__PURE__*/React.createElement("div", {
    className: styleNames.elementContent
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, !isFirstStep && /*#__PURE__*/React.createElement("span", {
    className: "pointer",
    onClick: setPrevStepIndex,
    role: "button",
    onKeyDown: setPrevStepIndex,
    tabIndex: 0
  }, "<")), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, currentStep === null || currentStep === void 0 ? void 0 : currentStep.title)));
};

HorizontalMenu.propTypes = {
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
  style: PropTypes.objectOf(PropTypes.string)
};
HorizontalMenu.defaultProps = {// someProp:false
};
export default HorizontalMenu;