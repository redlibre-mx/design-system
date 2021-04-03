/* @pareto-engineering/generator-front 1.0.0 */
import * as React from 'react'

import { Page } from 'ui'

export default {
  title        :'b/Page',
  component    :Page,
  subcomponents:{
    'Page.Helmet' :Page.Helmet,
    'Page.Section':Page.Section,
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    id      :{ control: 'text' },
    as      :{ control: 'text' },
    itemType:{ control: 'text' },
  },
}

export const Base = () => (
  <Page id="default">
    Inspect source for details.
  </Page>
)

export const ItemType = () => (
  <Page
    id="itemtype"
    itemType="https://schema.org/Movie"
    helmetProps={{
      title    :'The title of the page',
      canonical:'https://mysite.com/movie',
    }}
  >
    Inspect source for details.
    Please note that when itemType is provided,
    {' '}
    <code>helmetProps.canonical</code>
    {' '}
    needs to be provided as well.
  </Page>
)

export const WithSections = () => (
  <Page
    id="with-sections"
  >
    <Page.Section id="s1">
      Section 1
    </Page.Section>
    <Page.Section id="s2">
      Section 2.
      Inspect source for details.
    </Page.Section>
  </Page>
)
