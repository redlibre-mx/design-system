/* @pareto-engineering/generator-front 0.2.1 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, useLocation } from 'react-router-dom'

// import { SessionContext } from '..'
const SessionContext = React.createContext({})

// Package-level Imports
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
  component: Component, render, test, ...rest
}) => {
  const { currentUserData: currentUser, loginPath } = useContext(
    SessionContext,
  )

  const location = useLocation()
  // console.log(me)

  const isUserAllowed = currentUser && test(currentUser)

  return (
    <Route
      {...rest}
      render={(props) => (isUserAllowed ? (
        render?.(props) || <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname:loginPath,
            state   :{ from: location }, // TODO to implement
          }}
        />
      ))}
    />
  )
}

PrivateRoute.propTypes = {
  /**
   * A function that takes the user and returns a boolean.
   */
  test:PropTypes.func,

  /**
   * Provide a custom rendering function in the "Render Props" pattern
   */
  render:PropTypes.func,

  /**
   * Which javascript component to render
   */
  component:PropTypes.node,
}

PrivateRoute.defaultProps = {
  test:(user) => user.id,
}

export default PrivateRoute
