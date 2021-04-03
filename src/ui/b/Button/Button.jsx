/* @redlibre/generator-front 0.2.4 */
import * as React from 'react'
import PropTypes from 'prop-types'

// Package-level Imports
import styleNames from '@redlibre/bem'

// Component-level imports
import('./styles.scss')

// Helper Definition
const baseClassName = styleNames.base
const componentClassName = 'button'

const Button = ({
  id,
  className: userClassName,
  style,
  children,

  isGhost,
  ...otherProps
}) => (
  <button
    id={id}
    className={[
      baseClassName,
      componentClassName,
      userClassName,
      isGhost && styleNames.modifierGhost,
    ]
      .filter((e) => e)
      .join(' ')}
    style={style}
    type="button"
    {...otherProps}
  >
    {children}
  </button>
)

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
   * Whether the button has the ghost style
   */
  isGhost:PropTypes.bool,
}

Button.defaultProps = {
  // someProp:false
}

export default Button
