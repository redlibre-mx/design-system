"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _bem = _interopRequireDefault(require("@redlibre/bem"));

var _Context = _interopRequireDefault(require("./Context"));

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Local Definitions
var baseClassName = _bem.default.base;
var componentClassName = 'content-slides';

var reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STEP_INDEX':
      return _objectSpread(_objectSpread({}, state), {}, {
        currentStepIndex: action.payload
      });

    case 'SET_CURRENT_STEP':
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'SET_EXTRA_CONTEXT':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
};
/**
 * This is the component description.
 * Colors :
 * `y` : the background of the content
 */


var ContentSlides = _ref => {
  var {
    id,
    className: userClassName,
    style,
    children,
    steps // ...otherProps

  } = _ref;
  (0, React.useLayoutEffect)(() => {
    Promise.resolve().then(() => _interopRequireWildcard(require("./styles.scss")));
  }, []);
  var history = (0, _reactRouterDom.useHistory)();
  var [state, dispatch] = (0, React.useReducer)(reducer, {
    currentStepIndex: 0
  });
  var {
    // currentSlide,
    currentStepIndex,
    isFirstStep,
    isLastStep
  } = state;

  var setNextStepIndex = () => {
    if (!isLastStep) {
      dispatch({
        type: 'SET_STEP_INDEX',
        payload: currentStepIndex + 1
      });
    }
  };

  var setPrevStepIndex = () => {
    if (!isFirstStep) {
      dispatch({
        type: 'SET_STEP_INDEX',
        payload: currentStepIndex - 1
      });
    }
  };

  var setStepIndex = index => {
    dispatch({
      type: 'SET_STEP_INDEX',
      payload: index
    });
  };

  var setCurrentStep = index => {
    var newStep = steps[index];

    if (newStep.location) {
      history.push(newStep.location);
    }

    dispatch({
      type: 'SET_CURRENT_STEP',
      payload: {
        currentStep: steps[index],
        isFirstStep: index === 0,
        isLastStep: index === steps.length - 1
      }
    });
  };

  (0, React.useLayoutEffect)(() => {
    setCurrentStep(currentStepIndex);
  }, [currentStepIndex]);
  (0, React.useLayoutEffect)(() => {
    var requestedStepIndex = steps.findIndex(e => e.location === history.location.pathname);

    if (requestedStepIndex !== currentStepIndex) {
      setCurrentStep(requestedStepIndex);
    }
  }, [history.location]);
  return /*#__PURE__*/React.createElement(_Context.default.Provider, {
    value: _objectSpread({
      steps,
      setNextStepIndex,
      setPrevStepIndex,
      setStepIndex,
      dispatch
    }, state)
  }, /*#__PURE__*/React.createElement("div", {
    id: id,
    className: [baseClassName, componentClassName, userClassName, 'u1 md-u2'].filter(e => e).join(' '),
    style: style
  }, children));
};

ContentSlides.propTypes = {
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
  children: _propTypes.default.node,

  /**
  * The slides properties
  */
  steps: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    progress: _propTypes.default.number.isRequired,
    location: _propTypes.default.string.isRequired
  }))
};
ContentSlides.defaultProps = {// someProp:false
};
ContentSlides.Sidebar = _common.Sidebar;
ContentSlides.HorizontalMenu = _common.HorizontalMenu;
ContentSlides.Slide = _common.Slide;
ContentSlides.Navigator = _common.Navigator;
var _default = ContentSlides;
exports.default = _default;