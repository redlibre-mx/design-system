/* @pareto-engineering/generator-front 0.2.3 */
import * as React from 'react';
import PropTypes from 'prop-types'; // Package-level Imports
// import styleNames from 'style_names.scss'

import { NavItem, NavProfile } from "./common"; // Component-level imports

import("./styles.scss"); // Helper Definition
// const baseClassName = styleNames.base

const componentClassName = 'dashboard-navbar';

const DashboardNavbar = ({
  id,
  className: userClassName,
  style,
  children // ...otherProps

}) => /*#__PURE__*/React.createElement("div", {
  id: id,
  className: [// baseClassName,
  componentClassName, userClassName].filter(e => e).join(' '),
  style: style
}, /*#__PURE__*/React.createElement("section", {
  className: "menu"
}, children), /*#__PURE__*/React.createElement(NavProfile, null));

DashboardNavbar.propTypes = {
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
  children: PropTypes.node
};
DashboardNavbar.defaultProps = {// someProp:false
};
DashboardNavbar.Item = NavItem;
DashboardNavbar.Profile = NavProfile;
export default DashboardNavbar;