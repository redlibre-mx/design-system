/* @pareto-engineering/generator-front 1.0.12 */
import * as React from 'react'

import {
  ContentSlides,
  SiteContextProvider,
  Title,
  useSite,
} from 'ui'

import Router from 'stories/utils/Router'

export default {
  title        :'c/ContentSlides',
  component    :ContentSlides,
  subcomponents:{
    'ContentSlides.Sidebar'       :ContentSlides.Sidebar,
    'ContentSlides.HorizontalMenu':ContentSlides.HorizontalMenu,
    'ContentSlides.Slide'         :ContentSlides.Slide,
    'ContentSlides.Navigator'     :ContentSlides.Navigator,
  },
  decorators:[
    (storyfn) => <Router>{ storyfn() }</Router>,
    (storyfn) => (
      <SiteContextProvider config={{
        SITE:{
          NAME     :'name of my site',
          CANONICAL:'https://mysite.com',
        },
      }}
      >
        { storyfn() }
      </SiteContextProvider>
    ),
  ],
  argTypes:{
    backgroundColor:{ control: 'color' },
  },
}

export const Base = () => {
  const Main = () => {
    const { userTheme } = useSite()

    const steps = [
      {
        id      :'welcome',
        title   :'Welcome',
        progress:40,
        location:'welcome',
      },
      {
        id      :'plan',
        title   :'Choose your plan',
        progress:60,
        location:'select-plan',
      },
      {
        id      :'details',
        title   :'Personal details',
        progress:70,
        location:'personal-details',
      },
    /*
    {
      id      :'payment',
      title   :'Payment',
      progress:90,
      location:'payment',
    }, */
    ]

    return (
      <div className={`ui-${userTheme}`} style={{ height: '100%' }}>
        <ContentSlides className="y-exp3" steps={steps}>
          <ContentSlides.Sidebar
            header={(
              <Title heading="Red Libre" />
            )}
          />
          <ContentSlides.HorizontalMenu>
            test
          </ContentSlides.HorizontalMenu>
          <main>
            <ContentSlides.Slide
              index={0}
              backgroundMap={{
                light:'https://images.pexels.com/photos/3396668/pexels-photo-3396668.jpeg?auto=compress&cs=tinysrgb',
                dark :'https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb',
              }}
            >
              <Title
                heading="Welcome"
                headingAs="h1"
                subtitle="Welcome to this site. We hope you will have an amazing experience here."
              />
              <ContentSlides.Navigator />
            </ContentSlides.Slide
      >
            <ContentSlides.Slide
              index={1}
            >
              SLIDE 1
              <ContentSlides.Navigator canMoveForward={false} />
            </ContentSlides.Slide>
            <ContentSlides.Slide
              index={2}
            >
              SLIDE 2
              <ContentSlides.Navigator />
            </ContentSlides.Slide>
          </main>
        </ContentSlides>
      </div>
    )
  }
  return (
    <Main />
  )
}
