function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* @pareto-engineering/generator-front 1.0.0 */
import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styleNames from '@pareto-engineering/bem'; // Imports from the component folder

import { PageHelmet, Section } from "./common";
import Context from "./Context";
import("./styles.scss"); // Local Definitions

const baseClassName = styleNames.base;
const componentClassName = 'page';
/** The page components structures page and blocks
 * It uses **the color provided** by `x`
 *
 */

const Page = ({
  id,
  className: userClassName,
  style,
  children,
  itemType,
  as: Wrapper,
  helmetProps,
  ...otherProps
}) => {
  useEffect(() => {
    // If we're on the client, we make sure to scroll up when the page loads
    // This is a necessary transform to make react apt for website pages
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      // In the future we can pass more data here
      id
    }
  }, /*#__PURE__*/React.createElement(Wrapper, _extends({
    id: id,
    className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    style: style,
    itemType: itemType,
    itemScope: itemType && ' '
  }, otherProps), itemType && /*#__PURE__*/React.createElement("meta", {
    itemProp: "mainEntityOfPage",
    content: helmetProps === null || helmetProps === void 0 ? void 0 : helmetProps.canonical
  }), helmetProps && /*#__PURE__*/React.createElement(PageHelmet, helmetProps), children));
};

Page.propTypes = {
  /**
   * The HTML id for this element
   */
  id: PropTypes.string.isRequired,

  /**
   * The HTML class names for this element
   */
  className: PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style: PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children: PropTypes.node,

  /**
   *  The base node (html or react).
   */
  as: PropTypes.node,

  /**
  * The main entity schema. Refer to [Google Developers Site](https://developers.google.com/search/docs/guides/search-gallery) for info.
  */
  itemType: PropTypes.string,

  /**
  * The props to pass to `Page.Helmet`. Refer to the corresponding section of the docs.
  */
  helmetProps: PropTypes.objectOf(PropTypes.string)
};
Page.defaultProps = {
  as: 'main'
};
Page.Helmet = PageHelmet;
Page.Section = Section;
export default Page;