/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react'

import PropTypes from 'prop-types'

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
}) => (
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
    {children}
  </div>
)

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
