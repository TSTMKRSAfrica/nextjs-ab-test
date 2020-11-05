"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _experimentContext = require("./experiment-context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sortedVariantsAndWeights = function sortedVariantsAndWeights(variantsWithWeights) {
  var sortedVariants = variantsWithWeights.map(function (variant) {
    return Object.keys(variant)[0];
  }).sort(function (a, b) {
    return a - b;
  });
  var sortedWeights = variantsWithWeights.map(function (variant) {
    return variant[Object.keys(variant)[0]];
  }).sort(a, function (b) {
    return a - b;
  });
  var sortedVariantsWithWeights = variantsWithWeights.sort(function (a, b) {
    return a - b;
  });
  return {
    sortedVariants: sortedVariants,
    sortedWeights: sortedWeights,
    sortedVariantsWithWeights: sortedVariantsWithWeights
  };
};

function selectVariant(variantsWithWeights, dispatch) {
  var _sortedVariantsAndWei = sortedVariantsAndWeights(variantsWithWeights),
      sortedVariants = _sortedVariantsAndWei.sortedVariants,
      sortedWeights = _sortedVariantsAndWei.sortedWeights; // eslint-disable-next-line unicorn/no-reduce


  var weightSum = sortedWeights.reduce(function (a, b) {
    return a + b;
  }, 0); // A random number between 0 and weightSum

  var weightedIndex = Math.floor(Math.random() * weightSum); // Iterate through the sorted weights, and deduct each from the weightedIndex.
  // If weightedIndex drops < 0, select the variant. If weightedIndex does not
  // drop < 0, default to the last variant in the array that is initially assigned.

  var selectedVariant = sortedVariants[sortedVariants.length - 1];

  var _iterator = _createForOfIteratorHelper(sortedWeights.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          weight = _step$value[1];

      weightedIndex -= weight;

      if (weightedIndex < 0) {
        selectedVariant = sortedVariants[index];
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  dispatch({
    type: _experimentContext.reducerEvents.setActiveVariant,
    variant: selectedVariant
  });
}

function Experiment(_ref) {
  var children = _ref.children,
      name = _ref.name,
      activeVariant = _ref.activeVariant,
      _ref$weights = _ref.weights,
      weights = _ref$weights === void 0 ? [50, 50] : _ref$weights,
      _ref$onExperimentLoad = _ref.onExperimentLoad,
      onExperimentLoad = _ref$onExperimentLoad === void 0 ? function () {
    return console.log('Experiment Loaded');
  } : _ref$onExperimentLoad;

  var _useReducer = (0, _react.useReducer)(_experimentContext.experimentReducer, _experimentContext.initialExperimentState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    if (activeVariant) {
      onExperimentLoad(name, activeVariant);
    }

    if (state.activeVariant) {
      onExperimentLoad(name, state.activeVariant);
    }

    if (!activeVariant && !state.activeVariant) {
      var variantsWithWeights = state.variantsProvided.map(function (variant, i) {
        return _defineProperty({}, variant, weights[i]);
      });
      selectVariant(variantsWithWeights, dispatch);
    }
  }, [state.activeVariant, activeVariant]);
  return /*#__PURE__*/_react.default.createElement(_experimentContext.ExperimentDispatcherContext.Provider, {
    value: dispatch
  }, /*#__PURE__*/_react.default.createElement(_experimentContext.ExperimentStateContext.Provider, {
    value: state
  }, !state.activeVariant && !activeVariant ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, activeVariant && children.find(function (child) {
    return child.props.name === activeVariant;
  }), state.activeVariant && children.find(function (child) {
    return child.props.name === state.activeVariant;
  }))));
}

Experiment.propTypes = {
  children: _propTypes.default.node,
  name: _propTypes.default.string.isRequired,
  weights: _propTypes.default.arrayOf(_propTypes.default.number),
  onExperimentLoad: _propTypes.default.func,
  activeVariant: _propTypes.default.string
};
var _default = Experiment;
exports.default = _default;