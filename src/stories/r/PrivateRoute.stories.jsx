/* @pareto-engineering/generator-front 0.2.2 */
// import * as React from 'react'

import { PrivateRoute } from 'ui'

export default {
  title     :'r/common/PrivateRoute',
  component :PrivateRoute,
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
}

export const Base = () => (
  'This component does not need a visual test.'
)
