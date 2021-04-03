/* @pareto-engineering/generator-front 0.2.4 */
import * as React from 'react'

import { Card } from 'ui'

export default {
  title        :'b/Card',
  component    :Card,
  subcomponents:{
    'Card.Group':Card.Group,
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    backgroundColor:{ control: 'color' },
  },
}

export const Base = () => <Card>Sample Card</Card>

export const Group = () => (
  <Card.Group>
    <Card>Card1</Card>
    <Card>Card2</Card>
    <Card>Card3</Card>
  </Card.Group>
)

export const GhostGroup = () => (
  <Card.Group isGhost>
    <Card>Card1</Card>
    <Card>Card2</Card>
    <Card>Card3</Card>
  </Card.Group>
)
