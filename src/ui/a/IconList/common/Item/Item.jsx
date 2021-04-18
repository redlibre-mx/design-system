/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react'

import PropTypes from 'prop-types'

import styleNames from '@redlibre/bem'

// Local Definitions

const componentClassName = styleNames.elementItem

/**
 * This is the component description.
 */
const Item = ({
  id,
  className:userClassName,
  style,
  children,

  icon,
  iconHover,
  ...otherProps
}) => (
  <li
    id={id}
    className={[
      componentClassName,
      userClassName,
    ]
      .filter((e) => e)
      .join(' ')}
    style={{
      ...style,
      '--list-icon'      :icon && `"${icon}"`,
      '--list-icon-hover':iconHover && `"${iconHover}"`,
    }}
    {...otherProps}
  >
    {children}
  </li>
)

Item.propTypes = {
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
   * The icon of the list element
   */
  icon:PropTypes.string,

  /**
   * The icon of the list element on hover
   */
  iconHover:PropTypes.string,
}

/*
Item.defaultProps = {
}
*/

export default Item
