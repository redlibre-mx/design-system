"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import { SessionContext } from '..'
var SessionContext = /*#__PURE__*/React.createContext({}); // Package-level Imports
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

var PrivateRoute = (_ref) => {
  var {
    component: Component,
    render: _render,
    test
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["component", "render", "test"]);

  var {
    currentUserData: currentUser,
    loginPath
  } = (0, React.useContext)(SessionContext);
  var location = (0, _reactRouterDom.useLocation)(); // console.log(me)

  var isUserAllowed = currentUser && test(currentUser);
  return /*#__PURE__*/React.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: props => isUserAllowed ? (_render === null || _render === void 0 ? void 0 : _render(props)) || /*#__PURE__*/React.createElement(Component, props) : /*#__PURE__*/React.createElement(_reactRouterDom.Redirect, {
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
  test: _propTypes.default.func,

  /**
   * Provide a custom rendering function in the "Render Props" pattern
   */
  render: _propTypes.default.func,

  /**
   * Which javascript component to render
   */
  component: _propTypes.default.node
};
PrivateRoute.defaultProps = {
  test: user => user.id
};
var _default = PrivateRoute;
exports.default = _default;