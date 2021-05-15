/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react'

import { useLayoutEffect } from 'react'

import PropTypes from 'prop-types'

import styleNames from '@redlibre/bem'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'progress-bar'

/**
 * This is the component description. This takes the color x = indigo.
 */
const ProgressBar = ({
  id,
  className:userClassName,
  style,
  attached,
  progress,
  height,
  // ...otherProps
}) => {
  useLayoutEffect(() => {
    import('./styles.scss')
  }, [])

  return (
    <div
      id={id}
      className={[

        baseClassName,

        componentClassName,
        attached && styleNames.modifierAttached,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={{
        '--progress':progress,
        '--height'  :height,
        ...style,
      }}
      data-length="50%"
      // {...otherProps}
    />
  )
}

ProgressBar.propTypes = {
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
   *  Whether the progress bar is attached to another element
   */
  attached:PropTypes.bool,

  /**
   * The current progress
   */
  progress:PropTypes.number.isRequired,

  /**
   * The height of the progress bar as a CSS value. 1em by default.
   */
  height:PropTypes.string,
}

ProgressBar.defaultProps = {
  attached:false,
}

export default ProgressBar
