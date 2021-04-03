/* @pareto-engineering/generator-front 0.2.4 */
import * as React from 'react'
import PropTypes from 'prop-types'

// Package-level Imports
import styleNames from '@pareto-engineering/bem'

// Component-level imports
import('./styles.scss')

// Helper Definition
const baseClassName = styleNames.base
const componentClassName = 'segment'

const Segment = ({
  id,
  className: userClassName,
  style,
  children,

  title,
  footer,

  // ...otherProps
}) => (
  <div
    id={id}
    className={[baseClassName, componentClassName, userClassName]
      .filter((e) => e)
      .join(' ')}
    style={style}
  >
    <header>
      <p className="s1 title">{title}</p>
    </header>
    <main>{children}</main>

    {footer && <footer>{footer}</footer>}
  </div>
)

Segment.propTypes = {
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
   * The title of the segment
   */
  title:PropTypes.string.isRequired,

  /**
   * The optional footer of the segment.
   */
  footer:PropTypes.node,
}

Segment.defaultProps = {
  // someProp:false
}

export default Segment
