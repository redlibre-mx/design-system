/* @pareto-engineering/generator-front 0.2.3 */
import * as React from 'react';
import PropTypes from 'prop-types';
import useTheme from "./useTheme"; // Package-level Imports

import Context from "./Context"; // Component-level imports
// Helper Definitions

const SiteContextProvider = ({
  children,
  initialTheme,
  config // ...otherProps

}) => {
  const theme = useTheme(initialTheme);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: { ...config,
      ...theme
    }
  }, children);
};

SiteContextProvider.propTypes = {
  /**
   *  The children JSX
   */
  children: PropTypes.node,

  /**
   * The initial theme for the website. If undefined, fallbacks on system preference.
   */
  initialTheme: PropTypes.string,

  /**
   * A dictionnary containing settings and preferences to be used site-wide
   */
  config: PropTypes.shape({
    SITE_NAME: PropTypes.string.isRequired,
    SITE_CANONICAL: PropTypes.string.isRequired,
    FACEBOOK: PropTypes.string,
    INSTAGRAM: PropTypes.string
  }).isRequired
};
export default SiteContextProvider;