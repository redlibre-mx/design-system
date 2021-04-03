/* @pareto-engineering/generator-front 0.2.4 */
import * as React from 'react'
import PropTypes from 'prop-types'

// Package-level Imports
// import styleNames from 'style_names.scss'

// Component-level imports
import('./styles.scss')

// Helper Definition
// const baseClassName = styleNames.base
const componentClassName = 'nav-profile'

const NavProfile = ({
  id,
  className: userClassName,
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
    Nav Profile
    {children}
  </div>
)

NavProfile.propTypes = {
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

NavProfile.defaultProps = {
  // someProp:false
}

export default NavProfile
