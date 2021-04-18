/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react'

import { IconList } from 'ui'

export default {
  title        :'a/IconList',
  component    :IconList,
  subcomponents:{
    'IconList.Item':IconList.Item,
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    // backgroundColor:{ control: 'color' },
  },
}

export const Base = () => {
  const itemsMap = [
    {
      key     :'a',
      children:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon    :'o',
    },
    {
      key      :'b',
      children :'(Colors) Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      className:'x-red xh-orange c-x',
      icon     :'f',
    },
    {
      key     :'c',
      children:'(No icon) Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // icon    :'',
    },
    {
      key      :'d',
      children :'(Icon Hover) Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon     :'d',
      iconHover:'o',
    },
  ]

  return (
    <IconList>
      { itemsMap.map((item) => <IconList.Item {...item} />) }
    </IconList>
  )
}
