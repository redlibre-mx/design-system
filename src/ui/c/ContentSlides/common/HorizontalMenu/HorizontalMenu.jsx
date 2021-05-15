/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react'

import PropTypes from 'prop-types'
import useContentSlides from '../../useContentSlides'

// Local Definitions

// const baseClassName = styleNames.base

const componentClassName = 'horizontal-menu'

/**
 * This is the component description.
 */
const HorizontalMenu = ({
  id,
  className:userClassName,
  style,
  children,
  // ...otherProps
}) => {
  const {
    setPrevStepIndex,
    setNextStepIndex,
    isFirstStep,
    isLastStep,
    currentStep,
    // currentStep,
    // currentStepIndex,
  } = useContentSlides()
  return (
    <div
      id={id}
      className={[

        // baseClassName,

        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
    >
      <div className="left">
        { !isFirstStep
        && (
        <span className="pointer" onClick={setPrevStepIndex}>
          &lt;
        </span>
        )}
      </div>
      <div className="title">
        { currentStep?.title }
      </div>
      {/*
      <div className="right">
        { !isLastStep
        && (
        <span className="pointer" onClick={setNextStepIndex}>
          &gt;
        </span>
        )}
      </div>
      */}
    </div>
  )
}

HorizontalMenu.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children:PropTypes.node,
}

HorizontalMenu.defaultProps = {
  // someProp:false
}

export default HorizontalMenu
