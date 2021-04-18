/* @pareto-engineering/generator-front 1.0.9 */
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
    disabled   :{ control: 'boolean' },
    fontHeading:{ control: 'boolean' },
    children   :{ control: 'text' },
  },
}

/* eslint-disable react/no-children-prop -- needed for the controls */
/* eslint-disable react/no-array-index-key -- makes sense here */
export const Base = (props) => [...Array(2)].map((e, i) => (
  <span className={`s${i * 3}`} key={i}>
    <Button children="Descubre mas" {...props} className="x-exp3" />
  </span>

))
/* eslint-enable react/no-children-prop */
/* eslint-enable react/no-array-index-key */

export const Disabled = () => (
  <Button disabled>Indisponible</Button>
)

/* eslint-disable react/no-array-index-key -- makes sense here */
export const Sizes = () => (
  [...Array(6)].map((e, i) => (
    <div className={`s${i} x-exp3`} key={`${i}`}>
      <Button fontHeading>
        Ver espacios
      </Button>
    </div>
  ))
)
/* eslint-enable react/no-array-index-key */

export const Colors = () => (
  ALL_COLORS.map((colorName) => (
    <span className="s0" key={colorName}>
      <Button className={`x-${colorName}`}>
        Reserva Ahora
      </Button>
    </span>
  ))
)

export const Important = () => (
  ALL_COLORS.map((colorName) => (
    <span className="s0" key={colorName}>
      <Button className={`x-${colorName}`} important>
        Reserva Ahora
      </Button>
    </span>
  ))
)
