/* @pareto-engineering/generator-front 1.0.7 */
import * as React from 'react'

import { Experiment1 } from 'ui'

export default {
  title: 'test/Experiment1',
  component: Experiment1,
  subcomponents: {
    //Item:Experiment1.Item
  },
  decorators:[
    //storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Base = () => (
  <Experiment1>Sample Experiment1</Experiment1>
)
