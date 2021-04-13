/* @pareto-engineering/generator-front 1.0.7 */
import * as React from 'react'

import { useLayoutEffect } from 'react'

import PropTypes from 'prop-types'

import styleNames from '@redlibre/bem'

import faker from 'faker'

import { SVG } from 'ui/a'
import { Title } from 'ui/b'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'experiment1'

const eventMap = [...Array(5)].map(() => ({
  title      :faker.company.catchPhrase(),
  location   :faker.address.city(),
  category   :faker.commerce.department(),
  description:faker.lorem.paragraph(1),
  image      :'https://images.pexels.com/photos/6967343/pexels-photo-6967343.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}))

const EventCard = ({
  title,
  location,
  category,
  description,
  image,
}) => {
  const a = ''

  return (
    <div className="event-card">
      <header>
        <p className="title">
          { title }
        </p>
        <p className="location">
          { location }
        </p>
      </header>
      <section className="image">
        <img src={image} alt="" />
      </section>
      <main>
        { description }
        { category }
      </main>
    </div>
  )
}

const EventSegment = ({
  title,
  location,
  image,
  description,
  category,
}) => {
  const a = ' '

  return (
    <div className="event-segment">
      <section className="image">
        <img src={image} alt="" />
      </section>
      <header>
        <p className="title">
          { title }
        </p>
      </header>
      <main>{ `${location} / ${category}` }</main>
    </div>
  )
}

/**
 * This is the component description.
 */
const Experiment1 = ({
  id,
  className:userClassName,
  style,
  children,
  // ...otherProps
}) => {
  useLayoutEffect(() => {
    import('./styles.scss')
  }, [])

  return (
    <div
      id={id}
      className={[
        'u1',
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <nav>
        <div className="logo">
          <SVG
            className="y-paragraph"
            height="4em"
            width="4em"
            target="logo"
            sprite="/logo.svg"
            style={{
              // '--color-1':'var(--red)',
              // '--color-2':'var(--violet)',
              // '--color-3':'var(--pink)',
              // '--color-4':'var(--green)',
              '--svg-stroke-width':15,
            }}
          />
        </div>
        <div className="content">
          this is the main content
        </div>
        <div className="menu">
          <ul>
            <li>Eventos</li>
            <li>Espacios</li>
            <li>Quienes somos</li>
            <li>Blog</li>
          </ul>
        </div>
      </nav>
      <div className="news">
        <ul style={{ '--animation-items-count': 10 }}>
          {[...Array(10)].map(() => <li>{ faker.lorem.sentence() }</li>)}
        </ul>
      </div>
      <main>
        <section className="event-section">
          <div className="head">
            <Title
              className="s1"
              heading="Esta semana"
              subtitle="Estos son los eventos cerca de ti que tendran lugar en los proximos dias"
            />
          </div>
          <div className="events">
            {eventMap.slice(0, 2).map((eventProps) => <EventCard {...eventProps} key={eventProps.title} />)}
          </div>
          <aside>
            {eventMap.map((eventProps) => <EventSegment {...eventProps} key={eventProps.title} />)}
          </aside>
        </section>
        <section>
          <Title
            className="s1"
            heading="Fotografia"
            subtitle="Estos son los eventos cerca de ti que tendran lugar en los proximos dias"
          />
        </section>
        <section>
          <Title
            heading="Danza"
            subtitle="Estos son los eventos cerca de ti que tendran lugar en los proximos dias"
          />
        </section>
      </main>
      <footer>
        this is the footer
      </footer>
    </div>
  )
}

Experiment1.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children:PropTypes.node,
}

Experiment1.defaultProps = {
  // someProp:false
}

export default Experiment1
