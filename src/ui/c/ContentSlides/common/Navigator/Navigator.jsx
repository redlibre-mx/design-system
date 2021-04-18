/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react'

import PropTypes from 'prop-types'

import { Button } from 'ui/b'
import useContentSlides from '../../useContentSlides'

// Local Definitions

const componentClassName = 'navigator'

/**
 * This is the component description.
 */
const Navigator = ({
  id,
  className:userClassName,
  style,
  canMoveForward,
  // ...otherProps
}) => {
  const {
    setPrevStepIndex,
    setNextStepIndex,
    isFirstStep,
    isLastStep,
    // currentStep,
    currentStepIndex,
  } = useContentSlides()

  return (
    <div
      id={id}
      className={[
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
    >
      { !isFirstStep
        ? (
          <Button
            className="x-warning"
            onClick={() => setPrevStepIndex()}
          >
            Prev

          </Button>
        )
        : <span />}
      { !isLastStep
        ? (
          <Button
            className="x-success"
            disabled={!canMoveForward}
            onClick={() => setNextStepIndex()}
          >
            Next

          </Button>
        )
        : <span />}
    </div>
  )
}

Navigator.propTypes = {
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
   * Whether the user can move to the next slide
   */
  canMoveForward:PropTypes.bool,
}

Navigator.defaultProps = {
  canMoveForward:true,
}

export default Navigator
