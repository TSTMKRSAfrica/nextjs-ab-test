"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.experimentReducer = experimentReducer;
exports.initialExperimentState = exports.reducerEvents = exports.ExperimentStateContext = exports.ExperimentDispatcherContext = void 0;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExperimentDispatcherContext = /*#__PURE__*/(0, _react.createContext)();
exports.ExperimentDispatcherContext = ExperimentDispatcherContext;
var ExperimentStateContext = /*#__PURE__*/(0, _react.createContext)();
exports.ExperimentStateContext = ExperimentStateContext;
var reducerEvents = {
  addVariant: 'ADD_VARIANTS',
  setActiveVariant: 'SET_ACTIVE_VARIANT',
  setWeight: 'SET_WEIGHT'
};
exports.reducerEvents = reducerEvents;
var initialExperimentState = {
  activeVariant: null,
  weights: [50, 50],
  variantsProvided: []
};
exports.initialExperimentState = initialExperimentState;

function experimentReducer(state, action) {
  switch (action.type) {
    case reducerEvents.addVariant:
      return _objectSpread(_objectSpread({}, state), {}, {
        variantsProvided: [].concat(_toConsumableArray(state.variantsProvided), [action.variants])
      });

    case reducerEvents.setActiveVariant:
      return _objectSpread(_objectSpread({}, state), {}, {
        activeVariant: action.variant
      });

    case reducerEvents.setWeight:
      return _objectSpread(_objectSpread({}, state), {}, {
        weights: action.weights
      });

    default:
      break;
  }
}