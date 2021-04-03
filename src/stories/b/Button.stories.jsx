/* @pareto-engineering/generator-front 0.2.4 */
import * as React from 'react'

import { Button } from 'ui'
import { ALL_COLORS } from 'stories/colors'

export default {
  title        :'b/Button',
  component    :Button,
  subcomponents:{
    // Item:Button.Item
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    isGhost :{ control: 'boolean' },
    disabled:{ control: 'boolean' },
  },
}

export const Base = (props) => <Button {...props}>Sample Button</Button>

export const Ghost = (props) => (
  <Button isGhost {...props}>
    Sample Button
  </Button>
)

export const Colors = (props) => (
  <>
    {ALL_COLORS.map((colorName) => (
      <Button className={`x-${colorName}`} key={colorName} {...props}>
        This is a
        {' '}
        {colorName}
        {' '}
        button
      </Button>
    ))}
  </>
)

export const Disabled = (props) => (
  <Button disabled {...props}>
    Sample Button
  </Button>
)
