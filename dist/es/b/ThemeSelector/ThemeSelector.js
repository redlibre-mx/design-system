/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react';
import { useMemo, useLayoutEffect, useCallback } from 'react';
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
  color,
  colorHover,
  themes,
  iconMap,
  textMap,
  isText
}) => {
  const {
    userTheme,
    setPreferredTheme
  } = useSite();
  useLayoutEffect(() => {
    import("./styles.scss");
  }, []);
  const nextTheme = useMemo(() => {
    const current = themes.indexOf(userTheme);
    return themes[(current + 1) % themes.length];
  }, [userTheme, themes]);
  const loopThemes = useCallback(() => {
    setPreferredTheme(nextTheme);
  }, [userTheme, themes]);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: [baseClassName, componentClassName, userClassName, `x-${color}`, colorHover && `xh-${colorHover}`].filter(e => e).join(' '),
    id: id,
    style: style,
    onClick: loopThemes
  }, /*#__PURE__*/React.createElement("span", {
    className: ['v0 m-v', isText ? 'f-paragraph' : 'icon'].filter(Boolean).join(' ')
  }, isText ? textMap[nextTheme] || nextTheme : iconMap[userTheme]));
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
  iconMap: PropTypes.objectOf(PropTypes.string),

  /**
   * A map of the theme names with the text that represent them.
   */
  textMap: PropTypes.objectOf(PropTypes.string),

  /**
   * The color of the component.
   */
  color: PropTypes.string,

  /**
   * The color of the component on hover.
   */
  colorHover: PropTypes.string,

  /**
   * Whether to display text instead of icons
   */
  isText: PropTypes.bool
};
ThemeSelector.defaultProps = {
  themes: ['light', 'dark'],
  iconMap: {
    dark: 'n',
    // sun,
    light: 'm' // moon,

  },
  color: 'paragraph',
  isText: false,
  textMap: {
    light: 'Claro',
    dark: 'Oscuro'
  }
};
export default ThemeSelector;