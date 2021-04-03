/* @pareto-engineering/generator-front 0.2.3 */
import * as React from 'react'

import { DashboardNavbar } from 'ui'

export default {
  title        :'a/DashboardNavbar',
  // component: DashboardNavbar,
  subcomponents:{
    // Item:DashboardNavbar.Item
  },
  decorators:[
    // storyfn => <div className="">{ storyfn() }</div>,
  ],
  argTypes:{
    backgroundColor:{ control: 'color' },
  },
}

export const Base = () => {
  let navMap
  /*
  const navMap = [
    {
      name: 'home',
      url: '/home',
      emoji: 'home',
    },
    {
      name: 'tasks',
      url: '/tasks',
      emoji: 'tasks',
    },
    {
      name: 'settings',
      url: '/settings',
      emoji: 'setting-wheel',
      children: [
        {
          name: 'general',
          url: '/settings#general',
        },
        {
          name: 'notifications',
          url: '/settings#notifications',
        },
      ],
    },
  ] */
  return (
    <DashboardNavbar navMap={navMap}>
      <DashboardNavbar.Item>Home</DashboardNavbar.Item>
      <DashboardNavbar.Item>Tasks</DashboardNavbar.Item>
      <DashboardNavbar.Item>Profile</DashboardNavbar.Item>
    </DashboardNavbar>
  )
}
