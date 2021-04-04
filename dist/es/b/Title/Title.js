function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* @redlibre/generator-front 0.3.1 */
import * as React from 'react';
import { useLayoutEffect } from 'react';
import PropTypes from 'prop-types'; // Package-level Imports

import styleNames from '@redlibre/bem'; // Component-level imports
// Helper Definition

const baseClassName = styleNames.base;
const componentClassName = 'title';

const Title = ({
  id,
  className: userClassName,
  style,
  // children,
  heading,
  headingAs: HeadingWrapper,
  headingClassName,
  headingStyle,
  headingProps,
  subtitle,
  subtitleAs: SubtitleWrapper,
  subtitleClassName,
  subtitleStyle,
  subtitleProps // ...otherProps

}) => {
  useLayoutEffect(() => {
    import("./styles.scss");
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement(HeadingWrapper, _extends({
    className: [headingClassName, styleNames.heading].filter(e => e).join(' '),
    style: headingStyle
  }, headingProps), heading), subtitle && /*#__PURE__*/React.createElement(SubtitleWrapper, _extends({
    className: [subtitleClassName, styleNames.subtitle].filter(e => e).join(' '),
    style: subtitleStyle
  }, subtitleProps), subtitle));
};

Title.propTypes = {
  /**
   * The HTML id for this element
   */
  id: PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className: PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style: PropTypes.objectOf(PropTypes.string),

  /**
   *  The heading
   */
  heading: PropTypes.node.isRequired,

  /**
  * The node to display the heading with
  */
  headingAs: PropTypes.node,

  /**
  * The heading html class
  */
  headingClassName: PropTypes.string,

  /**
  * The JSX-Written, css styles to apply to the element.
  */
  headingStyle: PropTypes.objectOf(PropTypes.string),

  /**
   * Extra props to pass to the heading
   */

  /* eslint-disable react/forbid-prop-types -- Does not apply to a full prop object */
  headingProps: PropTypes.object,

  /* eslint-enable react/forbid-prop-types */

  /**
   *  The subtitle
   */
  subtitle: PropTypes.node,

  /**
   * The node to display the heading with
   */
  subtitleAs: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /**
   * The subtitle html class
   */
  subtitleClassName: PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  subtitleStyle: PropTypes.objectOf(PropTypes.string),

  /**
   * Extra props to pass to the subtitle
   */

  /* eslint-disable react/forbid-prop-types -- Does not apply to a full prop object */
  subtitleProps: PropTypes.object
  /* eslint-enable react/forbid-prop-types */

};
Title.defaultProps = {
  headingAs: 'h1',
  subtitleAs: 'p'
};
export default Title;