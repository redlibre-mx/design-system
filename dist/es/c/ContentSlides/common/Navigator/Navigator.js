/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from "../../../../b";
import useContentSlides from "../../useContentSlides"; // Local Definitions

const componentClassName = 'navigator';
/**
 * This is the component description.
 */

const Navigator = ({
  id,
  className: userClassName,
  style,
  canMoveForward // ...otherProps

}) => {
  const {
    setPrevStepIndex,
    setNextStepIndex,
    isFirstStep,
    isLastStep // currentStep,
    // currentStepIndex,

  } = useContentSlides();
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, !isFirstStep ? /*#__PURE__*/React.createElement(Button, {
    className: "x-warning",
    onClick: () => setPrevStepIndex()
  }, "Prev") : /*#__PURE__*/React.createElement("span", null), !isLastStep ? /*#__PURE__*/React.createElement(Button, {
    className: "x-success",
    disabled: !canMoveForward,
    onClick: () => setNextStepIndex()
  }, "Next") : /*#__PURE__*/React.createElement("span", null));
};

Navigator.propTypes = {
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
   * Whether the user can move to the next slide
   */
  canMoveForward: PropTypes.bool
};
Navigator.defaultProps = {
  canMoveForward: true
};
export default Navigator;