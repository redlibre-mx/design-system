/* @pareto-engineering/generator-front 1.0.9 */
import * as React from 'react'

import { useLayoutEffect } from 'react'

import PropTypes from 'prop-types'

import styleNames from '@redlibre/bem'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'button'

/**
 * This is the component description.
 */
const Button = ({
  id,
  className:userClassName,
  style,
  children,

  disabled,

  fontHeading,

  important,
}) => {
  useLayoutEffect(() => {
    import('./styles.scss')
  }, [])

  return (
    <button
      type="button"
      id={id}
      className={[

        baseClassName,

        componentClassName,
        userClassName,

        fontHeading && 'font-heading',
        important && 'important',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      disabled={disabled}
      // {...otherProps}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
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

  /**
   *  Whether the button is disabled.
   */
  disabled:PropTypes.bool,
}

Button.defaultProps = {
  disabled:false,
}

export default Button
