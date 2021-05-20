/* @redlibre/generator-front 1.0.0 */
import * as React from 'react'
import { useLayoutEffect, useEffect } from 'react'
import PropTypes from 'prop-types'
import styleNames from '@redlibre/bem'

// Imports from the component folder
import { PageHelmet, Section } from './common'
import Context from './Context'

// import('./styles.scss')

// Local Definitions
const baseClassName = styleNames.base
const componentClassName = 'page'

/** The page components structures page and blocks
 * It uses **the color provided** by `x`
 *
 */
const Page = ({
  id,
  className:userClassName,
  style,
  children,

  itemType,
  as:Wrapper,
  helmetProps,
  ...otherProps
}) => {
  useLayoutEffect(() => {
    import('./styles.scss')
  }, [])

  useEffect(() => {
    // If we're on the client, we make sure to scroll up when the page loads
    // This is a necessary transform to make react apt for website pages
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  },
  [])
  return (
    <Context.Provider
      value={{
        // In the future we can pass more data here
        id,
      }}
    >
      <Wrapper
        id={id}
        className={[
          baseClassName,
          componentClassName,
          userClassName,
        ]
          .filter((e) => e)
          .join(' ')}
        style={style}
        itemType={itemType}
        itemScope={itemType && ' '}
        {...otherProps}
      >
        { itemType && (
        <meta
          itemProp="mainEntityOfPage"
          content={helmetProps?.canonical}
        />
        )}
        { helmetProps && <PageHelmet {...helmetProps} /> }
        {children}
      </Wrapper>
    </Context.Provider>
  )
}

Page.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string.isRequired,

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
   *  The base node (html or react).
   */
  as:PropTypes.node,

  /**
  * The main entity schema. Refer to [Google Developers Site](https://developers.google.com/search/docs/guides/search-gallery) for info.
  */
  itemType:PropTypes.string,

  /**
  * The props to pass to `Page.Helmet`. Refer to the corresponding section of the docs.
  */
  helmetProps:PropTypes.objectOf(PropTypes.string),
}

Page.defaultProps = {
  as:'main',
}

Page.Helmet = PageHelmet
Page.Section = Section

export default Page
