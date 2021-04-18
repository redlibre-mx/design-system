/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react'

import PropTypes from 'prop-types'

import { IconList } from 'ui/a'
import { ThemeSelector } from 'ui/b'
import styleNames from '@redlibre/bem'
import useContentSlides from '../../useContentSlides'

// Local Definitions

// const baseClassName = styleNames.base

const componentClassName = 'sidebar'

/**
 * This is the component description.
 */
const Sidebar = ({
  id,
  className:userClassName,
  style,
  header,
  footer,
  // ...otherProps
}) => {
  const {
    steps,
    // setPrevStepIndex,
    // setNextStepIndex,
    setStepIndex,
    // isFirstStep,
    // isLastStep,
    // currentStep,
    currentStepIndex,
  } = useContentSlides()

  return (
    <nav
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
      { header
        ? (
          <header>
            { header }

          </header>
        )
        : <span />}
      <div className={styleNames.elementContent}>
        <IconList>
          { steps.map((step, i) => (
            <IconList.Item
              key={step.location}
              icon={
              (currentStepIndex === i) ? 'l'
                : (i < currentStepIndex) && 'O'
            }
              iconHover={
              (i < currentStepIndex) && 'L'
            }
              className={
              [
                /* eslint-disable no-nested-ternary -- bc of math inequality cases */
                (currentStepIndex === i) ? 'x-heading'
                  : (i < currentStepIndex) ? 'pointer x-paragraph xh-link'
                    : 'x-subtitle',
                /* eslint-enable no-nested-ternary */
                'c-x',
              ].filter((e) => e).join(' ')
            }
              onClick={
              (i < currentStepIndex) && (() => setStepIndex(i))
            }
            >
              { step.title }
            </IconList.Item>
          )) }
        </IconList>
      </div>
      { (footer || true)
        ? (
          <footer>
            {footer}
            <ThemeSelector className="x-heading" />
          </footer>
        )
        : <span />}
    </nav>
  )
}

Sidebar.propTypes = {
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
   *  The header JSX
   */
  header:PropTypes.node,

  /**
   *  The footer JSX
   */
  footer:PropTypes.node,
}

Sidebar.defaultProps = {
  // someProp:false
}

export default Sidebar
