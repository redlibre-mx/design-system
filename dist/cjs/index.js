"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _a = require("./a");

Object.keys(_a).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _a[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _a[key];
    }
  });
});

var _b = require("./b");

Object.keys(_b).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _b[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _b[key];
    }
  });
});

var _test = require("./test");

Object.keys(_test).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _test[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _test[key];
    }
  });
});