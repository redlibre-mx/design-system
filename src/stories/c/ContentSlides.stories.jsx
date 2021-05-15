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
      {
        id      :'payment',
        title   :'Payment',
        progress:90,
        location:'payment',
      },
    ]

    return (
      <div className={`ui-${userTheme}`} style={{ height: '100%' }}>
        <ContentSlides className="y-exp3" steps={steps}>
          <ContentSlides.Sidebar
            header={(
              <Title heading="Red Libre" />
            )}
          />
          <ContentSlides.HorizontalMenu />
          <main>
            <ContentSlides.Slide
              index={0}
              backgroundMap={{
                light:'https://i.imgur.com/mV3u4xV.png',
                dark :'https://i.imgur.com/PKDyy9c.png',
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
              backgroundMap={{
                light:'https://i.imgur.com/WhQ2JPN.png',
                dark :'https://i.imgur.com/1Hu9c2r.png',
              }}
            >
              <Title
                heading="Parte 2"
                headingAs="h1"
                subtitle="Welcome to this site. We hope you will have an amazing experience here."
              />
              <p>In ut sollicitudin elit. Maecenas tempor ex aliquet enim egestas, non sollicitudin mi tempor. Pellentesque fermentum, massa in cursus faucibus, enim tortor fringilla ligula, sit amet tincidunt neque orci et tellus. Nam dignissim tristique justo. Cras nulla sem, dictum pellentesque libero eget, porta placerat leo. Donec scelerisque enim risus, in pharetra purus fringilla eu. Cras placerat ac enim viverra rhoncus. Cras sagittis euismod orci eget aliquam. Nulla et mi non enim aliquam consequat. Cras volutpat porta convallis. Mauris ullamcorper vitae sapien ac rhoncus. Nullam vel porttitor mi, ut vestibulum arcu. </p>

              <ContentSlides.Navigator />
            </ContentSlides.Slide>
            <ContentSlides.Slide
              index={2}
              backgroundMap={{
                light:'https://i.imgur.com/WS8jeeu.png',
                dark :'https://i.imgur.com/Um1pkQi.png',
              }}
            >
              <Title
                heading="Parte 3"
                headingAs="h1"
                subtitle="Welcome to this site. We hope you will have an amazing experience here."
              />
              <ContentSlides.Navigator />
            </ContentSlides.Slide>
            <ContentSlides.Slide
              index={3}
              backgroundMap={{
                light:'https://i.imgur.com/PmKKmuf.png',
                dark :'https://i.imgur.com/IpykAia.png',
              }}
            >
              <Title
                heading="Parte 4"
                headingAs="h1"
                subtitle="Welcome to this site. We hope you will have an amazing experience here."
              />
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
