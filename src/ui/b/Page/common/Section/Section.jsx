/* @pareto-engineering/generator-front 1.0.0 */
import * as React from 'react'
import PropTypes from 'prop-types'
import styleNames from '@pareto-engineering/bem'

import usePage from '../../usePage'

// Local Definitions
const baseClassName = styleNames.base
const componentClassName = 'section'

const Section = ({
  id:userId,
  className:userClassName,
  style,
  children,
  ...otherProps
}) => {
  const {
    id:pageId,
  } = usePage()

  const sectionId = userId && `${pageId}_${userId}`

  return (
    <section
      id={sectionId}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      {...otherProps}
    >
      {children}
    </section>
  )
}

Section.propTypes = {
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

Section.defaultProps = {
  // someProp:false
}

export default Section
