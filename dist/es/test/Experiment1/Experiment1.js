function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* @pareto-engineering/generator-front 1.0.7 */

/* eslint-disable -- experiental */
import * as React from 'react';
import { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styleNames from '@redlibre/bem';
import faker from 'faker';
import { SVG } from "../../a";
import { Title } from "../../b"; // Local Definitions

const baseClassName = styleNames.base;
const componentClassName = 'experiment1';
const eventMap = [...Array(5)].map(() => ({
  title: faker.company.catchPhrase(),
  location: faker.address.city(),
  category: faker.commerce.department(),
  description: faker.lorem.paragraph(1),
  image: 'https://images.pexels.com/photos/6967343/pexels-photo-6967343.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
}));

const EventCard = ({
  title,
  location,
  category,
  description,
  image
}) => {
  const a = '';
  return /*#__PURE__*/React.createElement("div", {
    className: "event-card"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("p", {
    className: "title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "location"
  }, location)), /*#__PURE__*/React.createElement("section", {
    className: "image"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  })), /*#__PURE__*/React.createElement("main", null, description, category));
};

const EventSegment = ({
  title,
  location,
  image,
  description,
  category
}) => {
  const a = ' ';
  return /*#__PURE__*/React.createElement("div", {
    className: "event-segment"
  }, /*#__PURE__*/React.createElement("section", {
    className: "image"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  })), /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("p", {
    className: "title"
  }, title)), /*#__PURE__*/React.createElement("main", null, `${location} / ${category}`));
};
/**
 * This is the component description.
 */


const Experiment1 = ({
  id,
  className: userClassName,
  style,
  children // ...otherProps

}) => {
  useLayoutEffect(() => {
    import("./styles.scss");
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: ['u1', baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    style: style // {...otherProps}

  }, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/React.createElement(SVG, {
    className: "y-paragraph",
    height: "4em",
    width: "4em",
    target: "logo",
    sprite: "/logo.svg",
    style: {
      // '--color-1':'var(--red)',
      // '--color-2':'var(--violet)',
      // '--color-3':'var(--pink)',
      // '--color-4':'var(--green)',
      '--svg-stroke-width': 15
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, "this is the main content"), /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Eventos"), /*#__PURE__*/React.createElement("li", null, "Espacios"), /*#__PURE__*/React.createElement("li", null, "Quienes somos"), /*#__PURE__*/React.createElement("li", null, "Blog")))), /*#__PURE__*/React.createElement("div", {
    className: "news"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      '--animation-items-count': 10
    }
  }, [...Array(10)].map((e, i) => /*#__PURE__*/React.createElement("li", {
    key: `k-${i}`
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "event-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement(Title, {
    className: "s1",
    heading: "Esta semana",
    subtitle: "Estos son los eventos cerca de ti que tendran lugar en los proximos dias"
  })), /*#__PURE__*/React.createElement("div", {
    className: "events"
  }, eventMap.slice(0, 2).map((eventProps, i) => /*#__PURE__*/React.createElement(EventCard, _extends({}, eventProps, {
    key: eventProps.title
  })))), /*#__PURE__*/React.createElement("aside", null, eventMap.map(eventProps => /*#__PURE__*/React.createElement(EventSegment, _extends({}, eventProps, {
    key: eventProps.title
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Title, {
    className: "s1",
    heading: "Fotografia",
    subtitle: "Estos son los eventos cerca de ti que tendran lugar en los proximos dias"
  })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Title, {
    heading: "Danza",
    subtitle: "Estos son los eventos cerca de ti que tendran lugar en los proximos dias"
  }))), /*#__PURE__*/React.createElement("footer", null, "this is the footer"));
};

Experiment1.propTypes = {
  /**
   * The HTML id for this element
   */
  id: PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className: PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style: PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children: PropTypes.node
};
Experiment1.defaultProps = {// someProp:false
};
export default Experiment1;