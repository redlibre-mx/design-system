"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHelmet = require("react-helmet");

var _a = require("../../../../a");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var helmetMap = [{
  variables: ['robots'],
  render: v => /*#__PURE__*/React.createElement("meta", {
    name: "robots",
    key: "robots",
    content: v || '"index, follow"'
  })
}, {
  variables: ['title_tag', 'title'],
  render: v => /*#__PURE__*/React.createElement("title", {
    key: "title_tag"
  }, v)
}, {
  variables: ['meta_description'],
  render: v => /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: v,
    key: "meta_description"
  })
}, {
  variables: ['canonical'],
  render: (v, c) => {
    var _c$SITE, _c$SITE2;

    return (_c$SITE = c.SITE) !== null && _c$SITE !== void 0 && _c$SITE.CANONICAL ? /*#__PURE__*/React.createElement("link", {
      rel: "canonical",
      href: "".concat((_c$SITE2 = c.SITE) === null || _c$SITE2 === void 0 ? void 0 : _c$SITE2.CANONICAL).concat(v),
      key: "canonical"
    }) : /*#__PURE__*/React.createElement("link", {
      rel: "canonical",
      href: v,
      key: "canonical"
    });
  }
}, {
  variables: ['twitter_title', 'title', 'title_tag'],
  render: v => /*#__PURE__*/React.createElement("meta", {
    name: "twitter:title",
    content: v,
    key: "twitter_title"
  })
}, {
  variables: ['twitter_description', 'meta_description'],
  render: v => /*#__PURE__*/React.createElement("meta", {
    name: "twitter:description",
    content: v,
    key: "twitter_description"
  })
}, {
  test: true,
  variables: ['twitter_image, main_image'],
  render: v => /*#__PURE__*/React.createElement("meta", {
    name: "twitter:image",
    content: v,
    key: "twitter_image"
  })
}, {
  variables: ['og_title', 'title', 'title_tag'],
  render: v => /*#__PURE__*/React.createElement("meta", {
    property: "og:title",
    content: v,
    key: "og_title"
  })
}, {
  variables: ['og_description', 'meta_description'],
  render: v => /*#__PURE__*/React.createElement("meta", {
    property: "og:description",
    content: v,
    key: "og_description"
  })
}, {
  test: true,
  variables: ['og_image', 'main_image'],
  render: v => /*#__PURE__*/React.createElement("meta", {
    property: "og:image",
    content: v,
    key: "og_image"
  })
}, {
  test: true,
  variables: ['og_type'],
  render: v => /*#__PURE__*/React.createElement("meta", {
    property: "og:type",
    content: v || 'article',
    key: "og_type"
  })
}, {
  variables: ['og_url', 'canonical'],
  render: (v, c) => {
    var _c$SITE3, _c$SITE4;

    return (_c$SITE3 = c.SITE) !== null && _c$SITE3 !== void 0 && _c$SITE3.CANONICAL ? /*#__PURE__*/React.createElement("meta", {
      property: "og:url",
      content: "".concat((_c$SITE4 = c.SITE) === null || _c$SITE4 === void 0 ? void 0 : _c$SITE4.CANONICAL, "/").concat(v),
      key: "og_url"
    }) : /*#__PURE__*/React.createElement("meta", {
      property: "og:url",
      content: v,
      key: "og_url"
    });
  }
}];

var PageHelmet = (_ref) => {
  var props = _extends({}, _ref);

  // const intl = useIntl()
  var context = (0, _a.useSite)();
  var HelmetContent = (0, React.useMemo)(() => helmetMap.reduce(
  /* eslint-disable no-unused-vars -- TODO add test or ssr mode */
  (a, _ref2) => {
    var {
      variables,
      render,
      test
    } = _ref2;

    /* eslint-enable no-unused-vars */
    var current;
    var content = '';
    /* eslint-disable no-restricted-syntax -- we need to be able to break the loop */

    for (var key in variables) {
      if (props[variables[key]]) {
        content = props[variables[key]];
        break;
      }
    }
    /* eslint-enable no-restricted-syntax */
    // TODO Add SSR mode
    // if ((typeof test === 'undefined') || (test && content.length)) {


    if (content.length) {
      // if content is an object, then its a message and we need to render it as a string first
      // const stringContent = typeof content === 'string' ? content : intl.formatMessage(content)
      // const stringContent = typeof content === 'string' ? content : intl.formatMessage(content)
      var stringContent = content; // console.log(stringContent, content)

      current = render(stringContent, context);
    }

    if (current) {
      a.push(current);
    }

    return a;
  }, []), [props, context]);
  return /*#__PURE__*/React.createElement(_reactHelmet.Helmet, null, HelmetContent);
};

PageHelmet.propTypes = {
  robots: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
  title_tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  canonical: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  meta_description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  twitter_title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  twitter_description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  twitter_image: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  og_title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  og_description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  og_image: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  og_type: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  og_url: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = PageHelmet;
exports.default = _default;