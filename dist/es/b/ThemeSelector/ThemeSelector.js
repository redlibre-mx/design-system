/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react';
import { useLayoutEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styleNames from '@redlibre/bem';
import { useSite } from "../../a"; // Local Definitions

const baseClassName = styleNames.base;
const componentClassName = 'theme-selector';
/**
 * This is the component description.
 */

const ThemeSelector = ({
  id,
  className: userClassName,
  style,
  // children
  themes,
  iconMap
}) => {
  const {
    userTheme,
    setPreferredTheme
  } = useSite();
  useLayoutEffect(() => {
    import("./styles.scss");
  }, []);
  const loopThemes = useCallback(() => {
    const current = themes.indexOf(userTheme);
    setPreferredTheme(themes[(current + 1) % themes.length]);
  }, [userTheme]);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: [baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    id: id,
    style: style,
    onClick: loopThemes
  }, /*#__PURE__*/React.createElement("span", {
    className: "v0 m-v icon"
  }, iconMap[userTheme]));
};

ThemeSelector.propTypes = {
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
   *  The children JSX
   */
  // children: PropTypes.node,

  /**
   * The themes and the order in which they appear
   */
  themes: PropTypes.arrayOf(PropTypes.string),

  /**
   * A map of the theme names with the icons that represent them. Uses the default font icon.
   */
  iconMap: PropTypes.objectOf(PropTypes.string)
};
ThemeSelector.defaultProps = {
  themes: ['light', 'dark'],
  iconMap: {
    dark: 'n',
    // sun,
    light: 'm' // moon,

  }
};
export default ThemeSelector;