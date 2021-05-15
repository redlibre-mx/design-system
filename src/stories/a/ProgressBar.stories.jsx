/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react'
import { useState } from 'react'

import { ProgressBar } from 'ui'

export default {
  title        :'a/ProgressBar',
  component    :ProgressBar,
  subcomponents:{
    // Item:ProgressBar.Item
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    backgroundColor:{ control: 'color' },
  },
}

export const Base = () => (
  <ProgressBar progress={70} />
)

export const Color = () => (
  <ProgressBar progress={70} className="x-orange" />
)

export const Height = () => (
  <ProgressBar height="5em" progress={62} />
)

export const Attached = () => {
  const [progress, setProgress] = useState(40)

  const reduce = (delta) => setProgress(Math.max(progress - delta, 0))

  const augment = (delta) => {
    setProgress(Math.min(progress + delta, 100))
  }

  return (
    <div style={{ border: '2px solid var(--grid)' }}>
      <ProgressBar attached progress={progress} />
      <div style={{ padding: '1em' }}>
        <h3>Use the buttons to modify the value</h3>
        <button onClick={() => reduce(25)} type="button">
          Less
        </button>
        <button onClick={() => augment(25)} type="button">
          More
        </button>
      </div>
    </div>
  )
}
