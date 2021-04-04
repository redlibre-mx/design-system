/* @pareto-engineering/generator-front 1.0.7 */
import * as React from 'react'

import { SVG } from 'ui'

export default {
  title        :'a/SVG',
  component    :SVG,
  subcomponents:{
    // Item:SVG.Item
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    backgroundColor:{ control: 'color' },
  },
}

export const Base = () => (
  <SVG
    height="200"
    width="200"
    target="engine"
    className="x-black"
  />
)

export const Logo = () => (
  <>
    <p>
      The logo needs to have a stroke with&nbsp;
      <code>y</code>
    </p>
    <SVG
      height="200"
      width="200"
      target="logo"
      sprite="/logo.svg"
      style={{
        '--color-1':'var(--red)',
        '--color-2':'var(--violet)',
        '--color-3':'var(--pink)',
        '--color-4':'var(--green)',
      }}
    />
    <SVG
      height="200"
      width="200"
      target="logo"
      sprite="/logo.svg"
      className="y-red"
    />
    <SVG
      height="200"
      width="200"
      target="logo"
      sprite="/logo.svg"
      style={{
        '--color-1':'var(--blue)',
        '--color-2':'var(--indigo)',
        '--color-3':'var(--clear)',
        '--color-4':'var(--orange)',
      }}
      className="y-black"
    />
  </>
)

export const Stroke = () => (
  <SVG
    height="200"
    width="200"
    target="engine"
    className="y-green"
  />
)

export const Animated = () => (
  <>
    <SVG
      key="1"
      height="200"
      width="200"
      target="engine"
      className="y-red"
      animated
    />
    <SVG
      key="2"
      height="200"
      width="200"
      target="engine"
      className="y-indigo"
      animated
      style={{
        '--svg-origin-stroke-dashoffset':100, // Origin dash offset
        '--svg-target-stroke-dashoffset':10000, // Target dash offset
        '--svg-animation-time'          :'10s', // Duration
        '--svg-animation-repeats'       :'3', // Repeats
        '--svg-stroke-width'            :9, // Stroke width
      }}
    />
    <SVG
      key="3"
      height="200"
      width="200"
      target="engine"
      className="y-red"
      style={{
        '--svg-origin-stroke-dashoffset':5000, // Origin dash offset
        '--svg-target-stroke-dashoffset':0, // Target dash offset
        '--svg-animation-time'          :'20s', // Duration
        '--svg-animation-repeats'       :'infinite', // Repeats
      }}
      animated
    />
  </>
)
