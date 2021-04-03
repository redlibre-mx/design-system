/* @pareto-engineering/generator-front 1.0.0 */
import * as React from 'react'

import { Title } from 'ui'

export default {
  title        :'b/Title',
  component    :Title,
  subcomponents:{
    // Item:Title.Item
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    // heading :{ control: 'string' },
    // subtitle:{ control: 'string' },
  },
}

export const Base = (props) => (
  <Title
    heading="Test"
    {...props}
  />
)

export const WithSubtitle = (props) => (
  <Title
    heading="Test"
    subtitle="This will appear as the subtitle"
    {...props}
  />
)

export const Sizes = (props) => (
  ['h1', 'h2', 'h3', 'h4', 'h5'].map((size) => (
    <div className="u2 pv-u" key={size}>
      <div className="y-background b-dark-y">
        <Title
          heading={`This is a title in ${size}`}
          headingAs={size}
          subtitle="Here goes the subtitle"
          {...props}
        />
      </div>
    </div>
  ))
)
