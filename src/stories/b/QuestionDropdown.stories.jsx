/* @pareto-engineering/generator-front 0.2.7 */
import * as React from 'react'

import { QuestionDropdown } from 'ui'

export default {
  title        :'b/QuestionDropdown',
  component    :QuestionDropdown,
  subcomponents:{
    // Item:QuestionDropdown.Item
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
  },
}

export const Base = () => (
  <QuestionDropdown question="What is Pareto?">
    <p>
      Pareto is a female-owned and operated virtual workforce helping startups and
      small businesses automate day-to-day data processing, sales outreach,
      product research, and admin operations. We combine the quality and care of
      real people with the efficiency of machine automation to get the job done.
    </p>
    <p>
      At the same time, we’re a WBENC-certified business,
      empowering women in developing countries with meaningful economic opportunities.
    </p>
  </QuestionDropdown>
)

export const withSEO = () => (
  <QuestionDropdown question="What is Pareto?" isFAQSchema>
    <p>
      Pareto is a female-owned and operated virtual workforce helping startups and
      small businesses automate day-to-day data processing, sales outreach,
      product research, and admin operations. We combine the quality and care of
      real people with the efficiency of machine automation to get the job done.
    </p>
    <p>
      At the same time, we’re a WBENC-certified business,
      empowering women in developing countries with meaningful economic opportunities.
    </p>
  </QuestionDropdown>
)
