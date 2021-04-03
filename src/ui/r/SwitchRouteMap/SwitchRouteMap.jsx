/* @pareto-engineering/generator-front 0.2.2 */
import * as React from 'react'
import PropTypes from 'prop-types'

// Package-level Imports
// import styleNames from 'style_names.scss'

// Component-level imports

// Helper Definition
// const baseClassName = styleNames.base
const componentClassName = 'switch_route_map'

const SwitchRouteMap = ({
  id,
  className: userClassName,
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
  >
    {children}
  </div>
)

SwitchRouteMap.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   *  The children JSX
   */
  children:PropTypes.node,
}

SwitchRouteMap.defaultProps = {
  // someProp:false
}

export default SwitchRouteMap
