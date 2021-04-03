function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* @pareto-engineering/generator-front 0.2.1 */
import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useLocation } from 'react-router-dom'; // import { SessionContext } from '..'

const SessionContext = /*#__PURE__*/React.createContext({}); // Package-level Imports
// import styleNames from 'style_names.scss'
// Component-level imports

/** `PrivateRoute` subclasses `react-router-dom` `Route`.
 *
 * **Dependencies : `SessionContext.loginPath` **
 *
 * `PrivateRoute` checks whether a user matches a specified test before allowing him to the resource
 * In case the user is not allowed, he is redirected to `SessionContext.loginPath`.
 * Please remember this is a front-end test, and is not equivalent to back-end permission checks.
 * This component is meant to be used alongside back-end checks.
 */

const PrivateRoute = ({
  component: Component,
  render,
  test,
  ...rest
}) => {
  const {
    currentUserData: currentUser,
    loginPath
  } = useContext(SessionContext);
  const location = useLocation(); // console.log(me)

  const isUserAllowed = currentUser && test(currentUser);
  return /*#__PURE__*/React.createElement(Route, _extends({}, rest, {
    render: props => isUserAllowed ? (render === null || render === void 0 ? void 0 : render(props)) || /*#__PURE__*/React.createElement(Component, props) : /*#__PURE__*/React.createElement(Redirect, {
      to: {
        pathname: loginPath,
        state: {
          from: location
        } // TODO to implement

      }
    })
  }));
};

PrivateRoute.propTypes = {
  /**
   * A function that takes the user and returns a boolean.
   */
  test: PropTypes.func,

  /**
   * Provide a custom rendering function in the "Render Props" pattern
   */
  render: PropTypes.func,

  /**
   * Which javascript component to render
   */
  component: PropTypes.node
};
PrivateRoute.defaultProps = {
  test: user => user.id
};
export default PrivateRoute;