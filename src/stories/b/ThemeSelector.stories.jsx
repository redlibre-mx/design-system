/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react'

import { useSite, SiteContextProvider, ThemeSelector } from 'ui'

export default {
  title        :'b/ThemeSelector',
  component    :ThemeSelector,
  subcomponents:{
    // Item:ThemeSelector.Item
  },
  decorators:[
    (storyfn) => (
      <SiteContextProvider config={{
        SITE:{
          NAME     :'name of my site',
          CANONICAL:'https://mysite.com',
        },
      }}
      >
        { storyfn() }
      </SiteContextProvider>
    ),
  ],
  argTypes:{
    // backgroundColor:{ control: 'color' },
  },
}

export const Base = () => {
  const ChildCo = () => {
    const { userTheme } = useSite()
    return (
      <div
        className={
         [
           `ui-${userTheme}`,
           'y-background b-y',
         ].filter((e) => e).join(' ')
       }
      >
        <p>
          Theme :
          { userTheme }
        </p>
        <ThemeSelector color="link" />
      </div>
    )
  }
  return (
    <ChildCo />
  )
}

export const Text = () => {
  const ChildCo = () => {
    const { userTheme } = useSite()
    return (
      <div
        className={
         [
           `ui-${userTheme}`,
           'y-background b-y',
         ].filter((e) => e).join(' ')
       }
      >
        <p>
          Theme :
          { userTheme }
        </p>
        <ThemeSelector color="link" isText />
      </div>
    )
  }
  return (
    <ChildCo />
  )
}
