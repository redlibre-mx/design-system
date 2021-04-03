/* @pareto-engineering/generator-front 1.0.0 */
import * as React from 'react'

import { SiteContextProvider } from 'ui'

export default {
  title        :'a/SiteContext',
  component    :SiteContextProvider,
  subcomponents:{
    // Item:SiteContext.Item
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    // backgroundColor:{ control: 'color' },
  },
}

export const Base = () => (
  <SiteContextProvider
    config={{
      SITE_NAME     :'My site',
      SITE_CANONICAL:'https://mysite.com',
    }}
  >
    Sample SiteContext
  </SiteContextProvider>
)
