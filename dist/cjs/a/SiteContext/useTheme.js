"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _default = function _default(initialTheme) {
  var storageKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'theme';
  var isClient = typeof window === 'object';
  var [preferredTheme, setPreferredTheme] = (0, _react.useState)(initialTheme);
  var [userTheme, setUserTheme] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (isClient) {
      var storage = window.localStorage;
      var storedTheme = storage.getItem(storageKey); // console.log(storedTheme, storedTheme != userTheme)

      if (storedTheme && storedTheme !== userTheme) {
        // console.warn('Theme load')
        setPreferredTheme(storedTheme);
        setUserTheme(storedTheme);
      } else if (preferredTheme && preferredTheme.length && preferredTheme !== 'system') {
        setUserTheme(preferredTheme);
        storage.setItem(storageKey, preferredTheme); // console.warn('theme change', preferredTheme)
      } else {
        setUserTheme(window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
        storage.removeItem(storageKey); // console.warn('theme reset')
      }
    } else {
      setUserTheme('light');
    }
  }, [preferredTheme, isClient]);
  return {
    userTheme,
    preferredTheme,
    setPreferredTheme
  };
};

exports.default = _default;