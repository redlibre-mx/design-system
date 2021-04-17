"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("@redlibre/bem"));

var _faker = _interopRequireDefault(require("faker"));

var _a = require("../../a");

var _b = require("../../b");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Local Definitions
var baseClassName = _bem.default.base;
var componentClassName = 'experiment1';
var eventMap = [...Array(5)].map(() => ({
  title: _faker.default.company.catchPhrase(),
  location: _faker.default.address.city(),
  category: _faker.default.commerce.department(),
  description: _faker.default.lorem.paragraph(1),
  image: 'https://images.pexels.com/photos/6967343/pexels-photo-6967343.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
}));

var EventCard = (_ref) => {
  var {
    title,
    location,
    category,
    description,
    image
  } = _ref;
  var a = '';
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

var EventSegment = (_ref2) => {
  var {
    title,
    location,
    image,
    description,
    category
  } = _ref2;
  var a = ' ';
  return /*#__PURE__*/React.createElement("div", {
    className: "event-segment"
  }, /*#__PURE__*/React.createElement("section", {
    className: "image"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  })), /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("p", {
    className: "title"
  }, title)), /*#__PURE__*/React.createElement("main", null, "".concat(location, " / ").concat(category)));
};
/**
 * This is the component description.
 */


var Experiment1 = (_ref3) => {
  var {
    id,
    className: userClassName,
    style,
    children // ...otherProps

  } = _ref3;
  (0, React.useLayoutEffect)(() => {
    Promise.resolve().then(() => _interopRequireWildcard(require("./styles.scss")));
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: ['u1', baseClassName, componentClassName, userClassName].filter(e => e).join(' '),
    style: style // {...otherProps}

  }, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/React.createElement(_a.SVG, {
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
    key: "k-".concat(i)
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "event-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement(_b.Title, {
    className: "s1",
    heading: "Esta semana",
    subtitle: "Estos son los eventos cerca de ti que tendran lugar en los proximos dias"
  })), /*#__PURE__*/React.createElement("div", {
    className: "events"
  }, eventMap.slice(0, 2).map((eventProps, i) => /*#__PURE__*/React.createElement(EventCard, _extends({}, eventProps, {
    key: eventProps.title
  })))), /*#__PURE__*/React.createElement("aside", null, eventMap.map(eventProps => /*#__PURE__*/React.createElement(EventSegment, _extends({}, eventProps, {
    key: eventProps.title
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(_b.Title, {
    className: "s1",
    heading: "Fotografia",
    subtitle: "Estos son los eventos cerca de ti que tendran lugar en los proximos dias"
  })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(_b.Title, {
    heading: "Danza",
    subtitle: "Estos son los eventos cerca de ti que tendran lugar en los proximos dias"
  }))), /*#__PURE__*/React.createElement("footer", null, "this is the footer"));
};

Experiment1.propTypes = {
  /**
   * The HTML id for this element
   */
  id: _propTypes.default.string,

  /**
   * The HTML class names for this element
   */
  className: _propTypes.default.string,

  /**
   * The React-written, css properties for this element.
   */
  style: _propTypes.default.objectOf(_propTypes.default.string),

  /**
   *  The children JSX
   */
  children: _propTypes.default.node
};
Experiment1.defaultProps = {// someProp:false
};
var _default = Experiment1;
exports.default = _default;