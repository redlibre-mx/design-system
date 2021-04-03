/* @pareto-engineering/generator-front 0.2.4 */
import * as React from 'react'

import { Segment } from 'ui'

export default {
  title        :'b/Segment',
  component    :Segment,
  subcomponents:{
    // Item:Segment.Item
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    title:{ control: 'text' },
  },
}

export const Base = (props) => (
  <Segment title="Default title" {...props}>
    Sample Segment
  </Segment>
)

export const WithFooter = (props) => (
  <Segment
    title="This is a segment with a footer"
    footer="This should appear in the footer"
    {...props}
  >
    Sample Segment
  </Segment>
)
