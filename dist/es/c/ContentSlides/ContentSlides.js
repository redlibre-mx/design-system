/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react';
import { useLayoutEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styleNames from '@redlibre/bem';
import ContentSlidesContext from "./Context";
import { Slide, HorizontalMenu, Sidebar, Navigator } from "./common"; // Local Definitions

const baseClassName = styleNames.base;
const componentClassName = 'content-slides';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STEP_INDEX':
      return { ...state,
        currentStepIndex: action.payload
      };

    case 'SET_CURRENT_STEP':
      return { ...state,
        ...action.payload
      };

    case 'SET_EXTRA_CONTEXT':
      return { ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
/**
 * This is the component description.
 * Colors :
 * `y` : the background of the content
 */


const ContentSlides = ({
  id,
  className: userClassName,
  style,
  children,
  steps // ...otherProps

}) => {
  useLayoutEffect(() => {
    import("./styles.scss");
  }, []);
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    currentStepIndex: 0
  });
  const {
    // currentSlide,
    currentStepIndex,
    isFirstStep,
    isLastStep
  } = state;

  const setNextStepIndex = () => {
    if (!isLastStep) {
      dispatch({
        type: 'SET_STEP_INDEX',
        payload: currentStepIndex + 1
      });
    }
  };

  const setPrevStepIndex = () => {
    if (!isFirstStep) {
      dispatch({
        type: 'SET_STEP_INDEX',
        payload: currentStepIndex - 1
      });
    }
  };

  const setStepIndex = index => {
    dispatch({
      type: 'SET_STEP_INDEX',
      payload: index
    });
  };

  const setCurrentStep = index => {
    const newStep = steps[index];

    if (newStep.location) {
      history.push(newStep.location);
    }

    dispatch({
      type: 'SET_CURRENT_STEP',
      payload: {
        currentStep: steps[index],
        isFirstStep: index === 0,
        isLastStep: index === steps.length - 1
      }
    });
  };

  useLayoutEffect(() => {
    setCurrentStep(currentStepIndex);
  }, [currentStepIndex]);
  useLayoutEffect(() => {
    const requestedStepIndex = steps.findIndex(e => e.location === history.location.pathname);

    if (requestedStepIndex !== currentStepIndex) {
      setCurrentStep(requestedStepIndex);
    }
  }, [history.location]);
  return /*#__PURE__*/React.createElement(ContentSlidesContext.Provider, {
    value: {
      steps,
      setNextStepIndex,
      setPrevStepIndex,
      setStepIndex,
      dispatch,
      ...state
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [baseClassName, componentClassName, userClassName, 'u1 md-u2'].filter(e => e).join(' '),
    style: style
  }, children));
};

ContentSlides.propTypes = {
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
  * The slides properties
  */
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired
  }))
};
ContentSlides.defaultProps = {// someProp:false
};
ContentSlides.Sidebar = Sidebar;
ContentSlides.HorizontalMenu = HorizontalMenu;
ContentSlides.Slide = Slide;
ContentSlides.Navigator = Navigator;
export default ContentSlides;