/* @pareto-engineering/generator-front 1.0.2 */
import * as React from 'react'

import { TeamGallery } from 'ui'

export default {
  title        :'c/TeamGallery',
  component    :TeamGallery,
  subcomponents:{
    'TeamGallery.PersonCard':TeamGallery.PersonCard,
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
  },
}

export const Base = () => (
  <TeamGallery title="Leadership">
    <TeamGallery.PersonCard
      name="Phoebe Yao"
      position="CEO & Founder"
      picture="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    />
    <TeamGallery.PersonCard
      name="Dulce May Tigol"
      position="Accounting"
      picture="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    />
    <TeamGallery.PersonCard
      name="Ellen Free"
      position="Growth"
      picture="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    />
    <TeamGallery.PersonCard
      name="Collins Mbulakyalo"
      position="Software"
      picture="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    />
    <TeamGallery.PersonCard
      name="Kaylin Hu"
      position="Operations"
      picture="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    />
    <TeamGallery.PersonCard
      name="Diza Hendrawan"
      position="Marketing"
      picture="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    />
  </TeamGallery>
)
