/* @redlibre/generator-front 0.2.7 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Package-level Imports
import styleNames from '@redlibre/bem'

// Component-level imports
import('./styles.scss')

// Helper Definition
const baseClassName = styleNames.base
const componentClassName = 'question-dropdown'

/**
 * The question dropdown is used for the FAQ section. <br />
 * If `isFAQSchema=true`, make sure to remember to add the appropriate itemscope and
 * itemtype attributes to the root of the page that includes the FAQ component
 */
const QuestionDropdown = ({
  id,
  className: userClassName,
  style,
  question,
  children,
  isFAQSchema,
  // ...otherProps
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        isOpen && 'open',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      itemScope={isFAQSchema} // if isFAQSchema is false, should be undefined
      itemProp={isFAQSchema && 'mainEntity'}
      itemType={isFAQSchema && 'http://schema.org/Question'}
      // {...otherProps}
    >
      <button type="button" className="accordion" onClick={toggleOpen} isGhost>
        <span className="caret">
          &#94;
        </span>
        <div className="question-content" itemProp={isFAQSchema && 'name'}>
          { question }
        </div>
      </button>
      <div className="answer-content" itemProp={isFAQSchema && 'acceptedAnswer'} itemType={isFAQSchema && 'https://schema.org/Answer'}>
        <div className="answer-text" itemProp={isFAQSchema && 'text'}>
          { children }
        </div>
      </div>
    </div>
  )
}

QuestionDropdown.propTypes = {
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
   *  Any children of the question, such as answer blocks
   */
  children:PropTypes.node.isRequired,

  /**
   *  Question to be answered
   */
  question:PropTypes.string.isRequired,

  /**
   *  Whether element is part of SEO schema
   */
  isFAQSchema:PropTypes.bool,
}

QuestionDropdown.defaultProps = {
  // someProp:false
}

export default QuestionDropdown
