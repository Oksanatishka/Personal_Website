webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _reduxDevtools = __webpack_require__(16);

	var _reduxDevtoolsLogMonitor = __webpack_require__(245);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(370);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	var _reactRedux = __webpack_require__(420);

	var _reactRouter = __webpack_require__(428);

	var _history = __webpack_require__(474);

	var _redux = __webpack_require__(235);

	var _reduxSimpleRouter = __webpack_require__(479);

	var _reactDom = __webpack_require__(480);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(481);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(499);

	var _Home2 = _interopRequireDefault(_Home);

	var _About = __webpack_require__(509);

	var _About2 = _interopRequireDefault(_About);

	var _Portfolio = __webpack_require__(515);

	var _Portfolio2 = _interopRequireDefault(_Portfolio);

	var _Imgoing = __webpack_require__(521);

	var _Imgoing2 = _interopRequireDefault(_Imgoing);

	var _Getsocial = __webpack_require__(533);

	var _Getsocial2 = _interopRequireDefault(_Getsocial);

	var _Columbia = __webpack_require__(536);

	var _Columbia2 = _interopRequireDefault(_Columbia);

	var _Sts = __webpack_require__(539);

	var _Sts2 = _interopRequireDefault(_Sts);

	var _Abingdon = __webpack_require__(542);

	var _Abingdon2 = _interopRequireDefault(_Abingdon);

	var _Henry = __webpack_require__(545);

	var _Henry2 = _interopRequireDefault(_Henry);

	var _HenryWeddings = __webpack_require__(548);

	var _HenryWeddings2 = _interopRequireDefault(_HenryWeddings);

	var _BradentonLearn = __webpack_require__(551);

	var _BradentonLearn2 = _interopRequireDefault(_BradentonLearn);

	var _Gordon = __webpack_require__(554);

	var _Gordon2 = _interopRequireDefault(_Gordon);

	var _Clinton = __webpack_require__(557);

	var _Clinton2 = _interopRequireDefault(_Clinton);

	var _BradentonMobile = __webpack_require__(560);

	var _BradentonMobile2 = _interopRequireDefault(_BradentonMobile);

	var _V2D = __webpack_require__(563);

	var _V2D2 = _interopRequireDefault(_V2D);

	var _ITI = __webpack_require__(566);

	var _ITI2 = _interopRequireDefault(_ITI);

	var _Hospitality = __webpack_require__(569);

	var _Hospitality2 = _interopRequireDefault(_Hospitality);

	var _PTC = __webpack_require__(572);

	var _PTC2 = _interopRequireDefault(_PTC);

	var _Braselton = __webpack_require__(575);

	var _Braselton2 = _interopRequireDefault(_Braselton);

	var _BradentonSales = __webpack_require__(578);

	var _BradentonSales2 = _interopRequireDefault(_BradentonSales);

	var _CMS = __webpack_require__(581);

	var _CMS2 = _interopRequireDefault(_CMS);

	var _Contact = __webpack_require__(584);

	var _Contact2 = _interopRequireDefault(_Contact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducers = __webpack_require__(587);
	console.log(reducers);
	var history = (0, _history.createHistory)();
	var middleware = (0, _reduxSimpleRouter.syncHistory)(history);

	var reducer = (0, _redux.combineReducers)((0, _assign2.default)({}, reducers, {
	  routing: _reduxSimpleRouter.routeReducer
	}));

	var DevTools = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
	  _reduxDevtoolsDockMonitor2.default,
	  { toggleVisibilityKey: 'ctrl-h',
	    changePositionKey: 'ctrl-q' },
	  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, { theme: 'tomorrow' })
	));

	var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(middleware), DevTools.instrument())(_redux.createStore);

	var store = finalCreateStore(reducer);
	middleware.listenForReplays(store);
	// <DevTools />

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    'div',
	    { style: { height: "100%" } },
	    _react2.default.createElement(
	      _reactRouter.Router,
	      { history: history },
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _App2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _Contact2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio', component: _Portfolio2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/imgoing', component: _Imgoing2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/getsocial', component: _Getsocial2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/columbia', component: _Columbia2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/sts', component: _Sts2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/abingdon', component: _Abingdon2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/henry', component: _Henry2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/henry-weddings', component: _HenryWeddings2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/bradenton', component: _BradentonLearn2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/gordon', component: _Gordon2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/clinton', component: _Clinton2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/bradenton-mobile', component: _BradentonMobile2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/v2d', component: _V2D2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/iti', component: _ITI2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/hospitality', component: _Hospitality2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/ptc', component: _PTC2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/braselton', component: _Braselton2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/bacvb', component: _BradentonSales2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/portfolio/cms', component: _CMS2.default })
	      )
	    )
	  )
	), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(6).Object.assign;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(4);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(9)});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(6)
	  , ctx       = __webpack_require__(7)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(8);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(10)
	  , toObject = __webpack_require__(11)
	  , IObject  = __webpack_require__(13);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(15)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(14);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _instrument = __webpack_require__(17);

	Object.defineProperty(exports, 'instrument', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.default;
	  }
	});
	Object.defineProperty(exports, 'ActionCreators', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.ActionCreators;
	  }
	});
	Object.defineProperty(exports, 'ActionTypes', {
	  enumerable: true,
	  get: function get() {
	    return _instrument.ActionTypes;
	  }
	});

	var _persistState = __webpack_require__(40);

	Object.defineProperty(exports, 'persistState', {
	  enumerable: true,
	  get: function get() {
	    return _persistState.default;
	  }
	});

	var _createDevTools = __webpack_require__(75);

	Object.defineProperty(exports, 'createDevTools', {
	  enumerable: true,
	  get: function get() {
	    return _createDevTools.default;
	  }
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.ActionCreators = exports.ActionTypes = undefined;
	exports.default = instrument;

	var _difference = __webpack_require__(18);

	var _difference2 = _interopRequireDefault(_difference);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionTypes = exports.ActionTypes = {
	  PERFORM_ACTION: 'PERFORM_ACTION',
	  RESET: 'RESET',
	  ROLLBACK: 'ROLLBACK',
	  COMMIT: 'COMMIT',
	  SWEEP: 'SWEEP',
	  TOGGLE_ACTION: 'TOGGLE_ACTION',
	  JUMP_TO_STATE: 'JUMP_TO_STATE',
	  IMPORT_STATE: 'IMPORT_STATE'
	};

	/**
	 * Action creators to change the History state.
	 */
	var ActionCreators = exports.ActionCreators = {
	  performAction: function performAction(action) {
	    return { type: ActionTypes.PERFORM_ACTION, action: action, timestamp: Date.now() };
	  },
	  reset: function reset() {
	    return { type: ActionTypes.RESET, timestamp: Date.now() };
	  },
	  rollback: function rollback() {
	    return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
	  },
	  commit: function commit() {
	    return { type: ActionTypes.COMMIT, timestamp: Date.now() };
	  },
	  sweep: function sweep() {
	    return { type: ActionTypes.SWEEP };
	  },
	  toggleAction: function toggleAction(id) {
	    return { type: ActionTypes.TOGGLE_ACTION, id: id };
	  },
	  jumpToState: function jumpToState(index) {
	    return { type: ActionTypes.JUMP_TO_STATE, index: index };
	  },
	  importState: function importState(nextLiftedState) {
	    return { type: ActionTypes.IMPORT_STATE, nextLiftedState: nextLiftedState };
	  }
	};

	var INIT_ACTION = { type: '@@INIT' };

	/**
	 * Computes the next entry in the log by applying an action.
	 */
	function computeNextEntry(reducer, action, state, error) {
	  if (error) {
	    return {
	      state: state,
	      error: 'Interrupted by an error up the chain'
	    };
	  }

	  var nextState = state;
	  var nextError = undefined;
	  try {
	    nextState = reducer(state, action);
	  } catch (err) {
	    nextError = err.toString();
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.chrome !== 'undefined') {
	      // In Chrome, rethrowing provides better source map support
	      setTimeout(function () {
	        throw err;
	      });
	    } else {
	      console.error(err.stack || err);
	    }
	  }

	  return {
	    state: nextState,
	    error: nextError
	  };
	}

	/**
	 * Runs the reducer on invalidated actions to get a fresh computation log.
	 */
	function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds) {
	  // Optimization: exit early and return the same reference
	  // if we know nothing could have changed.
	  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
	    return computedStates;
	  }

	  var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
	  for (var i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
	    var actionId = stagedActionIds[i];
	    var action = actionsById[actionId].action;

	    var previousEntry = nextComputedStates[i - 1];
	    var previousState = previousEntry ? previousEntry.state : committedState;
	    var previousError = previousEntry ? previousEntry.error : undefined;

	    var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
	    var entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError);

	    nextComputedStates.push(entry);
	  }

	  return nextComputedStates;
	}

	/**
	 * Lifts an app's action into an action on the lifted store.
	 */
	function liftAction(action) {
	  return ActionCreators.performAction(action);
	}

	/**
	 * Creates a history state reducer from an app's reducer.
	 */
	function liftReducerWith(reducer, initialCommittedState, monitorReducer) {
	  var initialLiftedState = {
	    monitorState: monitorReducer(undefined, {}),
	    nextActionId: 1,
	    actionsById: { 0: liftAction(INIT_ACTION) },
	    stagedActionIds: [0],
	    skippedActionIds: [],
	    committedState: initialCommittedState,
	    currentStateIndex: 0,
	    computedStates: []
	  };

	  /**
	   * Manages how the history actions modify the history state.
	   */
	  return function () {
	    var liftedState = arguments.length <= 0 || arguments[0] === undefined ? initialLiftedState : arguments[0];
	    var liftedAction = arguments[1];
	    var monitorState = liftedState.monitorState;
	    var actionsById = liftedState.actionsById;
	    var nextActionId = liftedState.nextActionId;
	    var stagedActionIds = liftedState.stagedActionIds;
	    var skippedActionIds = liftedState.skippedActionIds;
	    var committedState = liftedState.committedState;
	    var currentStateIndex = liftedState.currentStateIndex;
	    var computedStates = liftedState.computedStates;

	    // By default, agressively recompute every state whatever happens.
	    // This has O(n) performance, so we'll override this to a sensible
	    // value whenever we feel like we don't have to recompute the states.

	    var minInvalidatedStateIndex = 0;

	    switch (liftedAction.type) {
	      case ActionTypes.RESET:
	        {
	          // Get back to the state the store was created with.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = initialCommittedState;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.COMMIT:
	        {
	          // Consider the last committed state the new starting point.
	          // Squash any staged actions into a single committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          committedState = computedStates[currentStateIndex].state;
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.ROLLBACK:
	        {
	          // Forget about any staged actions.
	          // Start again from the last committed state.
	          actionsById = { 0: liftAction(INIT_ACTION) };
	          nextActionId = 1;
	          stagedActionIds = [0];
	          skippedActionIds = [];
	          currentStateIndex = 0;
	          computedStates = [];
	          break;
	        }
	      case ActionTypes.TOGGLE_ACTION:
	        {
	          var _ret = function () {
	            // Toggle whether an action with given ID is skipped.
	            // Being skipped means it is a no-op during the computation.
	            var actionId = liftedAction.id;

	            var index = skippedActionIds.indexOf(actionId);
	            if (index === -1) {
	              skippedActionIds = [actionId].concat(skippedActionIds);
	            } else {
	              skippedActionIds = skippedActionIds.filter(function (id) {
	                return id !== actionId;
	              });
	            }
	            // Optimization: we know history before this action hasn't changed
	            minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
	            return 'break';
	          }();

	          if (_ret === 'break') break;
	        }
	      case ActionTypes.JUMP_TO_STATE:
	        {
	          // Without recomputing anything, move the pointer that tell us
	          // which state is considered the current one. Useful for sliders.
	          currentStateIndex = liftedAction.index;
	          // Optimization: we know the history has not changed.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	      case ActionTypes.SWEEP:
	        {
	          // Forget any actions that are currently being skipped.
	          stagedActionIds = (0, _difference2.default)(stagedActionIds, skippedActionIds);
	          skippedActionIds = [];
	          currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
	          break;
	        }
	      case ActionTypes.PERFORM_ACTION:
	        {
	          if (currentStateIndex === stagedActionIds.length - 1) {
	            currentStateIndex++;
	          }
	          var actionId = nextActionId++;
	          // Mutation! This is the hottest path, and we optimize on purpose.
	          // It is safe because we set a new key in a cache dictionary.
	          actionsById[actionId] = liftedAction;
	          stagedActionIds = [].concat(stagedActionIds, [actionId]);
	          // Optimization: we know that only the new action needs computing.
	          minInvalidatedStateIndex = stagedActionIds.length - 1;
	          break;
	        }
	      case ActionTypes.IMPORT_STATE:
	        {
	          var _liftedAction$nextLif = liftedAction.nextLiftedState;
	          // Completely replace everything.

	          monitorState = _liftedAction$nextLif.monitorState;
	          actionsById = _liftedAction$nextLif.actionsById;
	          nextActionId = _liftedAction$nextLif.nextActionId;
	          stagedActionIds = _liftedAction$nextLif.stagedActionIds;
	          skippedActionIds = _liftedAction$nextLif.skippedActionIds;
	          committedState = _liftedAction$nextLif.committedState;
	          currentStateIndex = _liftedAction$nextLif.currentStateIndex;
	          computedStates = _liftedAction$nextLif.computedStates;

	          break;
	        }
	      case '@@redux/INIT':
	        {
	          // Always recompute states on hot reload and init.
	          minInvalidatedStateIndex = 0;
	          break;
	        }
	      default:
	        {
	          // If the action is not recognized, it's a monitor action.
	          // Optimization: a monitor action can't change history.
	          minInvalidatedStateIndex = Infinity;
	          break;
	        }
	    }

	    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds);
	    monitorState = monitorReducer(monitorState, liftedAction);
	    return {
	      monitorState: monitorState,
	      actionsById: actionsById,
	      nextActionId: nextActionId,
	      stagedActionIds: stagedActionIds,
	      skippedActionIds: skippedActionIds,
	      committedState: committedState,
	      currentStateIndex: currentStateIndex,
	      computedStates: computedStates
	    };
	  };
	}

	/**
	 * Provides an app's view into the state of the lifted store.
	 */
	function unliftState(liftedState) {
	  var computedStates = liftedState.computedStates;
	  var currentStateIndex = liftedState.currentStateIndex;
	  var state = computedStates[currentStateIndex].state;

	  return state;
	}

	/**
	 * Provides an app's view into the lifted store.
	 */
	function unliftStore(liftedStore, liftReducer) {
	  var lastDefinedState = undefined;

	  return _extends({}, liftedStore, {

	    liftedStore: liftedStore,

	    dispatch: function dispatch(action) {
	      liftedStore.dispatch(liftAction(action));
	      return action;
	    },
	    getState: function getState() {
	      var state = unliftState(liftedStore.getState());
	      if (state !== undefined) {
	        lastDefinedState = state;
	      }
	      return lastDefinedState;
	    },
	    replaceReducer: function replaceReducer(nextReducer) {
	      liftedStore.replaceReducer(liftReducer(nextReducer));
	    }
	  });
	}

	/**
	 * Redux instrumentation store enhancer.
	 */
	function instrument() {
	  var monitorReducer = arguments.length <= 0 || arguments[0] === undefined ? function () {
	    return null;
	  } : arguments[0];

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      function liftReducer(r) {
	        return liftReducerWith(r, initialState, monitorReducer);
	      }

	      var liftedStore = createStore(liftReducer(reducer), undefined, enhancer);
	      return unliftStore(liftedStore, liftReducer);
	    };
	  };
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(19),
	    baseFlatten = __webpack_require__(31),
	    isArrayLike = __webpack_require__(34),
	    isObjectLike = __webpack_require__(30),
	    restParam = __webpack_require__(39);

	/**
	 * Creates an array of unique `array` values not included in the other
	 * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The arrays of values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 */
	var difference = restParam(function(array, values) {
	  return (isObjectLike(array) && isArrayLike(array))
	    ? baseDifference(array, baseFlatten(values, false, true))
	    : [];
	});

	module.exports = difference;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(20),
	    cacheIndexOf = __webpack_require__(22),
	    createCache = __webpack_require__(24);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];

	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;

	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];

	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(21);

	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = indexOfNaN;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);

	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	  return result ? 0 : -1;
	}

	module.exports = cacheIndexOf;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(25),
	    getNative = __webpack_require__(27);

	/** Native method references. */
	var Set = getNative(global, 'Set');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}

	module.exports = createCache;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(26),
	    getNative = __webpack_require__(27);

	/** Native method references. */
	var Set = getNative(global, 'Set');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;

	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}

	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;

	module.exports = SetCache;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);

	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}

	module.exports = cachePush;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(28);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(29),
	    isObjectLike = __webpack_require__(30);

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isNative;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	module.exports = isFunction;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(32),
	    isArguments = __webpack_require__(33),
	    isArray = __webpack_require__(38),
	    isArrayLike = __webpack_require__(34),
	    isObjectLike = __webpack_require__(30);

	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);

	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(34),
	    isObjectLike = __webpack_require__(30);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}

	module.exports = isArguments;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(35),
	    isLength = __webpack_require__(37);

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(36);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    isLength = __webpack_require__(37),
	    isObjectLike = __webpack_require__(30);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	module.exports = isArray;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports.default = persistState;

	var _mapValues = __webpack_require__(41);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _identity = __webpack_require__(69);

	var _identity2 = _interopRequireDefault(_identity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function persistState(sessionId) {
	  var deserializeState = arguments.length <= 1 || arguments[1] === undefined ? _identity2.default : arguments[1];
	  var deserializeAction = arguments.length <= 2 || arguments[2] === undefined ? _identity2.default : arguments[2];

	  if (!sessionId) {
	    return function (next) {
	      return function () {
	        return next.apply(undefined, arguments);
	      };
	    };
	  }

	  function deserialize(state) {
	    return _extends({}, state, {
	      actionsById: (0, _mapValues2.default)(state.actionsById, function (liftedAction) {
	        return _extends({}, liftedAction, {
	          action: deserializeAction(liftedAction.action)
	        });
	      }),
	      committedState: deserializeState(state.committedState),
	      computedStates: state.computedStates.map(function (computedState) {
	        return _extends({}, computedState, {
	          state: deserializeState(computedState.state)
	        });
	      })
	    });
	  }

	  return function (next) {
	    return function (reducer, initialState, enhancer) {
	      var key = 'redux-dev-session-' + sessionId;

	      var finalInitialState = undefined;
	      try {
	        var json = localStorage.getItem(key);
	        if (json) {
	          finalInitialState = deserialize(JSON.parse(json)) || initialState;
	          next(reducer, initialState);
	        }
	      } catch (e) {
	        console.warn('Could not read debug session from localStorage:', e);
	        try {
	          localStorage.removeItem(key);
	        } finally {
	          finalInitialState = undefined;
	        }
	      }

	      var store = next(reducer, finalInitialState, enhancer);

	      return _extends({}, store, {
	        dispatch: function dispatch(action) {
	          store.dispatch(action);

	          try {
	            localStorage.setItem(key, JSON.stringify(store.getState()));
	          } catch (e) {
	            console.warn('Could not write debug session to localStorage:', e);
	          }

	          return action;
	        }
	      });
	    };
	  };
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var createObjectMapper = __webpack_require__(42);

	/**
	 * Creates an object with the same keys as `object` and values generated by
	 * running each own enumerable property of `object` through `iteratee`. The
	 * iteratee function is bound to `thisArg` and invoked with three arguments:
	 * (value, key, object).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Object} Returns the new mapped object.
	 * @example
	 *
	 * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	 *   return n * 3;
	 * });
	 * // => { 'a': 3, 'b': 6 }
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * // using the `_.property` callback shorthand
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	var mapValues = createObjectMapper();

	module.exports = mapValues;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(43),
	    baseForOwn = __webpack_require__(72);

	/**
	 * Creates a function for `_.mapKeys` or `_.mapValues`.
	 *
	 * @private
	 * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	 * @returns {Function} Returns the new map function.
	 */
	function createObjectMapper(isMapKeys) {
	  return function(object, iteratee, thisArg) {
	    var result = {};
	    iteratee = baseCallback(iteratee, thisArg, 3);

	    baseForOwn(object, function(value, key, object) {
	      var mapped = iteratee(value, key, object);
	      key = isMapKeys ? mapped : key;
	      value = isMapKeys ? value : mapped;
	      result[key] = value;
	    });
	    return result;
	  };
	}

	module.exports = createObjectMapper;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(44),
	    baseMatchesProperty = __webpack_require__(61),
	    bindCallback = __webpack_require__(68),
	    identity = __webpack_require__(69),
	    property = __webpack_require__(70);

	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}

	module.exports = baseCallback;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(45),
	    getMatchData = __webpack_require__(58),
	    toObject = __webpack_require__(57);

	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];

	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(46),
	    toObject = __webpack_require__(57);

	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(47),
	    isObject = __webpack_require__(23),
	    isObjectLike = __webpack_require__(30);

	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}

	module.exports = baseIsEqual;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(48),
	    equalByTag = __webpack_require__(50),
	    equalObjects = __webpack_require__(51),
	    isArray = __webpack_require__(38),
	    isTypedArray = __webpack_require__(56);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);

	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);

	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	  stackA.pop();
	  stackB.pop();

	  return result;
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(49);

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalArrays;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(52);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalObjects;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(27),
	    isArrayLike = __webpack_require__(34),
	    isObject = __webpack_require__(23),
	    shimKeys = __webpack_require__(53);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	module.exports = keys;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(33),
	    isArray = __webpack_require__(38),
	    isIndex = __webpack_require__(54),
	    isLength = __webpack_require__(37),
	    keysIn = __webpack_require__(55);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = shimKeys;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(33),
	    isArray = __webpack_require__(38),
	    isIndex = __webpack_require__(54),
	    isLength = __webpack_require__(37),
	    isObject = __webpack_require__(23);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(37),
	    isObjectLike = __webpack_require__(30);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);

	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}

	module.exports = toObject;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(59),
	    pairs = __webpack_require__(60);

	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;

	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(52),
	    toObject = __webpack_require__(57);

	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);

	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);

	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}

	module.exports = pairs;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(62),
	    baseIsEqual = __webpack_require__(46),
	    baseSlice = __webpack_require__(63),
	    isArray = __webpack_require__(38),
	    isKey = __webpack_require__(64),
	    isStrictComparable = __webpack_require__(59),
	    last = __webpack_require__(65),
	    toObject = __webpack_require__(57),
	    toPath = __webpack_require__(66);

	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');

	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(57);

	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(38),
	    toObject = __webpack_require__(57);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}

	module.exports = isKey;


/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}

	module.exports = last;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(67),
	    isArray = __webpack_require__(38);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}

	module.exports = toPath;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}

	module.exports = baseToString;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(69);

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	module.exports = bindCallback;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(36),
	    basePropertyDeep = __webpack_require__(71),
	    isKey = __webpack_require__(64);

	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(62),
	    toPath = __webpack_require__(66);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(73),
	    keys = __webpack_require__(52);

	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(74);

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(57);

	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports.default = createDevTools;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(228);

	var _instrument = __webpack_require__(17);

	var _instrument2 = _interopRequireDefault(_instrument);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function createDevTools(children) {
	  var _class, _temp;

	  var monitorElement = _react.Children.only(children);
	  var monitorProps = monitorElement.props;
	  var Monitor = monitorElement.type;
	  var ConnectedMonitor = (0, _reactRedux.connect)(function (state) {
	    return state;
	  })(Monitor);
	  var enhancer = (0, _instrument2.default)(function (state, action) {
	    return Monitor.update(monitorProps, state, action);
	  });

	  return _temp = _class = function (_Component) {
	    _inherits(DevTools, _Component);

	    function DevTools(props, context) {
	      _classCallCheck(this, DevTools);

	      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	      if (!props.store && !context.store) {
	        console.error('Redux DevTools could not render. You must pass the Redux store ' + 'to <DevTools> either as a "store" prop or by wrapping it in a ' + '<Provider store={store}>.');
	        return _possibleConstructorReturn(_this);
	      }

	      if (context.store) {
	        _this.liftedStore = context.store.liftedStore;
	      } else {
	        _this.liftedStore = props.store.liftedStore;
	      }

	      if (!_this.liftedStore) {
	        console.error('Redux DevTools could not render. Did you forget to include ' + 'DevTools.instrument() in your store enhancer chain before ' + 'using createStore()?');
	      }
	      return _this;
	    }

	    DevTools.prototype.render = function render() {
	      if (!this.liftedStore) {
	        return null;
	      }

	      return _react2.default.createElement(ConnectedMonitor, _extends({}, monitorProps, {
	        store: this.liftedStore }));
	    };

	    return DevTools;
	  }(_react.Component), _class.contextTypes = {
	    store: _react.PropTypes.object
	  }, _class.propTypes = {
	    store: _react.PropTypes.object
	  }, _class.instrument = function () {
	    return enhancer;
	  }, _temp;
	}

/***/ },
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Provider = __webpack_require__(229);
	var connect = __webpack_require__(231);

	module.exports = { Provider: Provider, connect: connect };

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(76);

	var Component = _require.Component;
	var PropTypes = _require.PropTypes;
	var Children = _require.Children;

	var storeShape = __webpack_require__(230);

	if (false) {
	  var warnAboutReceivingStore;

	  (function () {
	    var didWarnAboutReceivingStore = false;
	    /* eslint-disable no-var */

	    warnAboutReceivingStore = function warnAboutReceivingStore() {
	      /* eslint-enable no-var */
	      if (didWarnAboutReceivingStore) {
	        return;
	      }
	      didWarnAboutReceivingStore = true;

	      /* eslint-disable no-console */
	      if (typeof console !== 'undefined' && typeof console.error === 'function') {
	        console.error('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	      }
	      /* eslint-disable no-console */
	    };
	  })();
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return Children.only(children);
	  };

	  return Provider;
	}(Component);

	if (false) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: storeShape.isRequired,
	  children: PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: storeShape.isRequired
	};

	module.exports = Provider;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(76);

	var PropTypes = _require.PropTypes;

	var storeShape = PropTypes.shape({
	  subscribe: PropTypes.func.isRequired,
	  dispatch: PropTypes.func.isRequired,
	  getState: PropTypes.func.isRequired
	});

	module.exports = storeShape;

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(76);

	var Component = _require.Component;
	var createElement = _require.createElement;

	var storeShape = __webpack_require__(230);
	var shallowEqual = __webpack_require__(232);
	var isPlainObject = __webpack_require__(233);
	var wrapActionCreators = __webpack_require__(234);
	var hoistStatics = __webpack_require__(243);
	var invariant = __webpack_require__(244);

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	  var finalMapDispatchToProps = isPlainObject(mapDispatchToProps) ? wrapActionCreators(mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var doStatePropsDependOnOwnProps = finalMapStateToProps.length !== 1;
	  var doDispatchPropsDependOnOwnProps = finalMapDispatchToProps.length !== 1;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  // Helps track hot reloading.

	  var version = nextVersion++;

	  function computeStateProps(store, props) {
	    var state = store.getState();
	    var stateProps = doStatePropsDependOnOwnProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);

	    invariant(isPlainObject(stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	    return stateProps;
	  }

	  function computeDispatchProps(store, props) {
	    var dispatch = store.dispatch;

	    var dispatchProps = doDispatchPropsDependOnOwnProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);

	    invariant(isPlainObject(dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	    return dispatchProps;
	  }

	  function computeMergedProps(stateProps, dispatchProps, parentProps) {
	    var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	    invariant(isPlainObject(mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	    return mergedProps;
	  }

	  return function wrapWithConnect(WrappedComponent) {
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        invariant(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + _this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + _this.constructor.displayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = computeStateProps(this.store, this.props);
	        if (this.stateProps && shallowEqual(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && shallowEqual(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedProps = function updateMergedProps() {
	        this.mergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !shallowEqual(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.renderedElement = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var prevStoreState = this.state.storeState;
	        var storeState = this.store.getState();

	        if (!pure || prevStoreState !== storeState) {
	          this.hasStoreStateChanged = true;
	          this.setState({ storeState: storeState });
	        }
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        invariant(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          this.updateMergedProps();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = createElement(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = createElement(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(Component);

	    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: storeShape
	    };
	    Connect.propTypes = {
	      store: storeShape
	    };

	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return hoistStatics(Connect, WrappedComponent);
	  };
	}

	module.exports = connect;

/***/ },
/* 232 */
/***/ function(module, exports) {

	"use strict";

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 233 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = isPlainObject;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _redux = __webpack_require__(235);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

	module.exports = wrapActionCreators;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(236);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(238);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(240);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(241);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(242);

	var _compose2 = _interopRequireDefault(_compose);

	var _utilsWarning = __webpack_require__(239);

	var _utilsWarning2 = _interopRequireDefault(_utilsWarning);

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (false) {
	  _utilsWarning2['default']('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsIsPlainObject = __webpack_require__(237);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	function createStore(reducer, initialState, enhancer) {
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all states changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 237 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	var objStringValue = fnToString(Object);

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === objStringValue;
	}

	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(236);

	var _utilsIsPlainObject = __webpack_require__(237);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsWarning = __webpack_require__(239);

	var _utilsWarning2 = _interopRequireDefault(_utilsWarning);

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!_utilsIsPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */

	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination(state, action) {
	    if (state === undefined) state = {};

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        _utilsWarning2['default'](warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 239 */
/***/ function(module, exports) {

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;

	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

	module.exports = exports['default'];

/***/ },
/* 240 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */

	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

	module.exports = exports['default'];

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _compose = __webpack_require__(242);

	var _compose2 = _interopRequireDefault(_compose);

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 242 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function () {
	    if (funcs.length === 0) {
	      return arguments[0];
	    }

	    var last = funcs[funcs.length - 1];
	    var rest = funcs.slice(0, -1);

	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 243 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            targetComponent[keys[i]] = sourceComponent[keys[i]];
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _LogMonitor = __webpack_require__(246);

	var _LogMonitor2 = _interopRequireDefault(_LogMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _LogMonitor2.default;

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _LogMonitorEntry = __webpack_require__(247);

	var _LogMonitorEntry2 = _interopRequireDefault(_LogMonitorEntry);

	var _LogMonitorButton = __webpack_require__(326);

	var _LogMonitorButton2 = _interopRequireDefault(_LogMonitorButton);

	var _function = __webpack_require__(324);

	var _function2 = _interopRequireDefault(_function);

	var _reduxDevtoolsThemes = __webpack_require__(328);

	var themes = _interopRequireWildcard(_reduxDevtoolsThemes);

	var _reduxDevtools = __webpack_require__(16);

	var _actions = __webpack_require__(368);

	var _reducers = __webpack_require__(369);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var reset = _reduxDevtools.ActionCreators.reset;
	var rollback = _reduxDevtools.ActionCreators.rollback;
	var commit = _reduxDevtools.ActionCreators.commit;
	var sweep = _reduxDevtools.ActionCreators.sweep;
	var toggleAction = _reduxDevtools.ActionCreators.toggleAction;

	var styles = {
	  container: {
	    fontFamily: 'monaco, Consolas, Lucida Console, monospace',
	    position: 'relative',
	    overflowY: 'hidden',
	    width: '100%',
	    height: '100%',
	    minWidth: 300,
	    direction: 'ltr'
	  },
	  buttonBar: {
	    textAlign: 'center',
	    borderBottomWidth: 1,
	    borderBottomStyle: 'solid',
	    borderColor: 'transparent',
	    zIndex: 1,
	    display: 'flex',
	    flexDirection: 'row'
	  },
	  elements: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    top: 38,
	    bottom: 0,
	    overflowX: 'hidden',
	    overflowY: 'auto'
	  }
	};

	var LogMonitor = function (_Component) {
	  _inherits(LogMonitor, _Component);

	  function LogMonitor(props) {
	    _classCallCheck(this, LogMonitor);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.shouldComponentUpdate = _function2.default;

	    _this.handleToggleAction = _this.handleToggleAction.bind(_this);
	    _this.handleReset = _this.handleReset.bind(_this);
	    _this.handleRollback = _this.handleRollback.bind(_this);
	    _this.handleSweep = _this.handleSweep.bind(_this);
	    _this.handleCommit = _this.handleCommit.bind(_this);
	    return _this;
	  }

	  LogMonitor.prototype.componentDidMount = function componentDidMount() {
	    var node = this.refs.container;
	    if (!node) {
	      return;
	    }

	    if (this.props.preserveScrollTop) {
	      node.scrollTop = this.props.monitorState.initialScrollTop;
	      this.interval = setInterval(this.updateScrollTop.bind(this), 1000);
	    }
	  };

	  LogMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.interval) {
	      clearInterval(this.interval);
	    }
	  };

	  LogMonitor.prototype.updateScrollTop = function updateScrollTop() {
	    var node = this.refs.container;
	    this.props.dispatch((0, _actions.updateScrollTop)(node ? node.scrollTop : 0));
	  };

	  LogMonitor.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var node = this.refs.container;
	    if (!node) {
	      this.scrollDown = true;
	    } else if (this.props.stagedActionIds.length < nextProps.stagedActionIds.length) {
	      var scrollTop = node.scrollTop;
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;

	      this.scrollDown = Math.abs(scrollHeight - (scrollTop + offsetHeight)) < 20;
	    } else {
	      this.scrollDown = false;
	    }
	  };

	  LogMonitor.prototype.componentDidUpdate = function componentDidUpdate() {
	    var node = this.refs.container;
	    if (!node) {
	      return;
	    }
	    if (this.scrollDown) {
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;

	      node.scrollTop = scrollHeight - offsetHeight;
	      this.scrollDown = false;
	    }
	  };

	  LogMonitor.prototype.handleRollback = function handleRollback() {
	    this.props.dispatch(rollback());
	  };

	  LogMonitor.prototype.handleSweep = function handleSweep() {
	    this.props.dispatch(sweep());
	  };

	  LogMonitor.prototype.handleCommit = function handleCommit() {
	    this.props.dispatch(commit());
	  };

	  LogMonitor.prototype.handleToggleAction = function handleToggleAction(id) {
	    this.props.dispatch(toggleAction(id));
	  };

	  LogMonitor.prototype.handleReset = function handleReset() {
	    this.props.dispatch(reset());
	  };

	  LogMonitor.prototype.getTheme = function getTheme() {
	    var theme = this.props.theme;

	    if (typeof theme !== 'string') {
	      return theme;
	    }

	    if (typeof themes[theme] !== 'undefined') {
	      return themes[theme];
	    }

	    console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
	    return themes.nicinabox;
	  };

	  LogMonitor.prototype.render = function render() {
	    var elements = [];
	    var theme = this.getTheme();
	    var _props = this.props;
	    var actionsById = _props.actionsById;
	    var skippedActionIds = _props.skippedActionIds;
	    var stagedActionIds = _props.stagedActionIds;
	    var computedStates = _props.computedStates;
	    var select = _props.select;

	    for (var i = 0; i < stagedActionIds.length; i++) {
	      var actionId = stagedActionIds[i];
	      var action = actionsById[actionId].action;
	      var _computedStates$i = computedStates[i];
	      var state = _computedStates$i.state;
	      var error = _computedStates$i.error;

	      var previousState = undefined;
	      if (i > 0) {
	        previousState = computedStates[i - 1].state;
	      }
	      elements.push(_react2.default.createElement(_LogMonitorEntry2.default, { key: actionId,
	        theme: theme,
	        select: select,
	        action: action,
	        actionId: actionId,
	        state: state,
	        previousState: previousState,
	        collapsed: skippedActionIds.indexOf(actionId) > -1,
	        error: error,
	        expandActionRoot: this.props.expandActionRoot,
	        expandStateRoot: this.props.expandStateRoot,
	        onActionClick: this.handleToggleAction }));
	    }

	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, styles.container, { backgroundColor: theme.base00 }) },
	      _react2.default.createElement(
	        'div',
	        { style: _extends({}, styles.buttonBar, { borderColor: theme.base02 }) },
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleReset,
	            enabled: true },
	          'Reset'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleRollback,
	            enabled: computedStates.length > 1 },
	          'Revert'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleSweep,
	            enabled: skippedActionIds.length > 0 },
	          'Sweep'
	        ),
	        _react2.default.createElement(
	          _LogMonitorButton2.default,
	          {
	            theme: theme,
	            onClick: this.handleCommit,
	            enabled: computedStates.length > 1 },
	          'Commit'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: styles.elements, ref: 'container' },
	        elements
	      )
	    );
	  };

	  return LogMonitor;
	}(_react.Component);

	LogMonitor.update = _reducers2.default;
	LogMonitor.propTypes = {
	  dispatch: _react.PropTypes.func,
	  computedStates: _react.PropTypes.array,
	  actionsById: _react.PropTypes.object,
	  stagedActionIds: _react.PropTypes.array,
	  skippedActionIds: _react.PropTypes.array,
	  monitorState: _react.PropTypes.shape({
	    initialScrollTop: _react.PropTypes.number
	  }),

	  preserveScrollTop: _react.PropTypes.bool,
	  select: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]),
	  expandActionRoot: _react.PropTypes.bool,
	  expandStateRoot: _react.PropTypes.bool
	};
	LogMonitor.defaultProps = {
	  select: function select(state) {
	    return state;
	  },
	  theme: 'nicinabox',
	  preserveScrollTop: true,
	  expandActionRoot: true,
	  expandStateRoot: true
	};
	exports.default = LogMonitor;

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactJsonTree = __webpack_require__(248);

	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

	var _LogMonitorEntryAction = __webpack_require__(323);

	var _LogMonitorEntryAction2 = _interopRequireDefault(_LogMonitorEntryAction);

	var _function = __webpack_require__(324);

	var _function2 = _interopRequireDefault(_function);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  entry: {
	    display: 'block',
	    WebkitUserSelect: 'none'
	  },
	  tree: {
	    paddingLeft: 0
	  }
	};

	var LogMonitorEntry = function (_Component) {
	  _inherits(LogMonitorEntry, _Component);

	  function LogMonitorEntry(props) {
	    _classCallCheck(this, LogMonitorEntry);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.shouldComponentUpdate = _function2.default;

	    _this.handleActionClick = _this.handleActionClick.bind(_this);
	    return _this;
	  }

	  LogMonitorEntry.prototype.printState = function printState(state, error) {
	    var errorText = error;
	    if (!errorText) {
	      try {
	        return _react2.default.createElement(_reactJsonTree2.default, {
	          theme: this.props.theme,
	          keyName: 'state',
	          data: this.props.select(state),
	          previousData: this.props.select(this.props.previousState),
	          expandRoot: this.props.expandStateRoot,
	          style: styles.tree });
	      } catch (err) {
	        errorText = 'Error selecting state.';
	      }
	    }

	    return _react2.default.createElement(
	      'div',
	      { style: {
	          color: this.props.theme.base08,
	          paddingTop: 20,
	          paddingLeft: 30,
	          paddingRight: 30,
	          paddingBottom: 35
	        } },
	      errorText
	    );
	  };

	  LogMonitorEntry.prototype.handleActionClick = function handleActionClick() {
	    var _props = this.props;
	    var actionId = _props.actionId;
	    var onActionClick = _props.onActionClick;

	    if (actionId > 0) {
	      onActionClick(actionId);
	    }
	  };

	  LogMonitorEntry.prototype.render = function render() {
	    var _props2 = this.props;
	    var actionId = _props2.actionId;
	    var error = _props2.error;
	    var action = _props2.action;
	    var state = _props2.state;
	    var collapsed = _props2.collapsed;

	    var styleEntry = {
	      opacity: collapsed ? 0.5 : 1,
	      cursor: actionId > 0 ? 'pointer' : 'default'
	    };

	    return _react2.default.createElement(
	      'div',
	      { style: {
	          textDecoration: collapsed ? 'line-through' : 'none',
	          color: this.props.theme.base06
	        } },
	      _react2.default.createElement(_LogMonitorEntryAction2.default, {
	        theme: this.props.theme,
	        collapsed: collapsed,
	        action: action,
	        expandActionRoot: this.props.expandActionRoot,
	        onClick: this.handleActionClick,
	        style: _extends({}, styles.entry, styleEntry) }),
	      !collapsed && _react2.default.createElement(
	        'div',
	        null,
	        this.printState(state, error)
	      )
	    );
	  };

	  return LogMonitorEntry;
	}(_react.Component);

	LogMonitorEntry.propTypes = {
	  state: _react.PropTypes.object.isRequired,
	  action: _react.PropTypes.object.isRequired,
	  actionId: _react.PropTypes.number.isRequired,
	  select: _react.PropTypes.func.isRequired,
	  error: _react.PropTypes.string,
	  onActionClick: _react.PropTypes.func.isRequired,
	  collapsed: _react.PropTypes.bool,
	  expandActionRoot: _react.PropTypes.bool,
	  expandStateRoot: _react.PropTypes.bool
	};
	exports.default = LogMonitorEntry;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	// ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
	// all credits and original code to the author
	// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
	// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _createClass = __webpack_require__(258)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _grabNode = __webpack_require__(265);

	var _grabNode2 = _interopRequireDefault(_grabNode);

	var _themesSolarized = __webpack_require__(322);

	var _themesSolarized2 = _interopRequireDefault(_themesSolarized);

	var styles = {
	  tree: {
	    border: 0,
	    padding: 0,
	    marginTop: 8,
	    marginBottom: 8,
	    marginLeft: 2,
	    marginRight: 0,
	    fontSize: '0.90em',
	    listStyle: 'none',
	    MozUserSelect: 'none',
	    WebkitUserSelect: 'none'
	  }
	};

	var getEmptyStyle = function getEmptyStyle() {
	  return {};
	};

	var JSONTree = (function (_React$Component) {
	  _inherits(JSONTree, _React$Component);

	  _createClass(JSONTree, null, [{
	    key: 'propTypes',
	    value: {
	      data: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object]).isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      expandRoot: true,
	      theme: _themesSolarized2['default'],
	      getArrowStyle: getEmptyStyle,
	      getListStyle: getEmptyStyle,
	      getItemStringStyle: getEmptyStyle,
	      getLabelStyle: getEmptyStyle,
	      getValueStyle: getEmptyStyle,
	      getItemString: function getItemString(type, data, itemType, itemString) {
	        return _react2['default'].createElement(
	          'span',
	          null,
	          itemType,
	          ' ',
	          itemString
	        );
	      }
	    },
	    enumerable: true
	  }]);

	  function JSONTree(props) {
	    _classCallCheck(this, JSONTree);

	    _React$Component.call(this, props);
	  }

	  JSONTree.prototype.render = function render() {
	    var keyName = this.props.keyName || 'root';
	    var getStyles = {
	      getArrowStyle: this.props.getArrowStyle,
	      getListStyle: this.props.getListStyle,
	      getItemStringStyle: this.props.getItemStringStyle,
	      getLabelStyle: this.props.getLabelStyle,
	      getValueStyle: this.props.getValueStyle
	    };
	    var _props = this.props;
	    var data = _props.data;
	    var previousData = _props.previousData;
	    var theme = _props.theme;
	    var getItemString = _props.getItemString;
	    var expandRoot = _props.expandRoot;

	    var rootNode = _grabNode2['default'](keyName, data, previousData, theme, getStyles, getItemString, expandRoot);
	    return _react2['default'].createElement(
	      'ul',
	      { style: _extends({}, styles.tree, this.props.style) },
	      rootNode
	    );
	  };

	  return JSONTree;
	})(_react2['default'].Component);

	exports['default'] = JSONTree;
	module.exports = exports['default'];

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(250)["default"];

	var _Object$setPrototypeOf = __webpack_require__(252)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(251), __esModule: true };

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(253), __esModule: true };

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(254);
	module.exports = __webpack_require__(6).Object.setPrototypeOf;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(4);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(255).set});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(10).getDesc
	  , isObject = __webpack_require__(256)
	  , anObject = __webpack_require__(257);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(7)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(256);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(259)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(260), __esModule: true };

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 261 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(263)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 264 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _objType = __webpack_require__(266);

	var _objType2 = _interopRequireDefault(_objType);

	var _JSONObjectNode = __webpack_require__(290);

	var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);

	var _JSONArrayNode = __webpack_require__(303);

	var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);

	var _JSONIterableNode = __webpack_require__(304);

	var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);

	var _JSONStringNode = __webpack_require__(314);

	var _JSONStringNode2 = _interopRequireDefault(_JSONStringNode);

	var _JSONNumberNode = __webpack_require__(316);

	var _JSONNumberNode2 = _interopRequireDefault(_JSONNumberNode);

	var _JSONBooleanNode = __webpack_require__(317);

	var _JSONBooleanNode2 = _interopRequireDefault(_JSONBooleanNode);

	var _JSONNullNode = __webpack_require__(318);

	var _JSONNullNode2 = _interopRequireDefault(_JSONNullNode);

	var _JSONDateNode = __webpack_require__(319);

	var _JSONDateNode2 = _interopRequireDefault(_JSONDateNode);

	var _JSONUndefinedNode = __webpack_require__(320);

	var _JSONUndefinedNode2 = _interopRequireDefault(_JSONUndefinedNode);

	var _JSONFunctionNode = __webpack_require__(321);

	var _JSONFunctionNode2 = _interopRequireDefault(_JSONFunctionNode);

	exports['default'] = function (key, value, prevValue, theme, styles, getItemString) {
	  var initialExpanded = arguments.length <= 6 || arguments[6] === undefined ? false : arguments[6];

	  var nodeType = _objType2['default'](value);
	  if (nodeType === 'Object') {
	    return _react2['default'].createElement(_JSONObjectNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key, styles: styles, getItemString: getItemString });
	  } else if (nodeType === 'Array') {
	    return _react2['default'].createElement(_JSONArrayNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key, styles: styles, getItemString: getItemString });
	  } else if (nodeType === 'Iterable') {
	    return _react2['default'].createElement(_JSONIterableNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key, styles: styles, getItemString: getItemString });
	  } else if (nodeType === 'String') {
	    return _react2['default'].createElement(_JSONStringNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Number') {
	    return _react2['default'].createElement(_JSONNumberNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Boolean') {
	    return _react2['default'].createElement(_JSONBooleanNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Date') {
	    return _react2['default'].createElement(_JSONDateNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Null') {
	    return _react2['default'].createElement(_JSONNullNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Undefined') {
	    return _react2['default'].createElement(_JSONUndefinedNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  } else if (nodeType === 'Function') {
	    return _react2['default'].createElement(_JSONFunctionNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key, styles: styles });
	  }
	  return false;
	};

	module.exports = exports['default'];

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol$iterator = __webpack_require__(267)['default'];

	exports.__esModule = true;

	exports['default'] = function (obj) {
	  if (obj !== null && typeof obj === 'object' && !Array.isArray(obj) && typeof obj[_Symbol$iterator] === 'function') {
	    return 'Iterable';
	  }
	  return Object.prototype.toString.call(obj).slice(8, -1);
	};

	module.exports = exports['default'];

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(268), __esModule: true };

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(269);
	__webpack_require__(285);
	module.exports = __webpack_require__(282)('iterator');

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(270)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(272)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(271)
	  , defined   = __webpack_require__(12);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 271 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(273)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(274)
	  , hide           = __webpack_require__(275)
	  , has            = __webpack_require__(278)
	  , Iterators      = __webpack_require__(279)
	  , $iterCreate    = __webpack_require__(280)
	  , setToStringTag = __webpack_require__(281)
	  , getProto       = __webpack_require__(10).getProto
	  , ITERATOR       = __webpack_require__(282)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 273 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(275);

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(10)
	  , createDesc = __webpack_require__(276);
	module.exports = __webpack_require__(277) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 276 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(15)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 278 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 279 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(10)
	  , descriptor     = __webpack_require__(276)
	  , setToStringTag = __webpack_require__(281)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(275)(IteratorPrototype, __webpack_require__(282)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(10).setDesc
	  , has = __webpack_require__(278)
	  , TAG = __webpack_require__(282)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(283)('wks')
	  , uid    = __webpack_require__(284)
	  , Symbol = __webpack_require__(5).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 284 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(286);
	var Iterators = __webpack_require__(279);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(287)
	  , step             = __webpack_require__(288)
	  , Iterators        = __webpack_require__(279)
	  , toIObject        = __webpack_require__(289);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(272)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 288 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(13)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _Object$keys = __webpack_require__(291)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(295);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(298);

	var _JSONArrow = __webpack_require__(302);

	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

	var _grabNode = __webpack_require__(265);

	var _grabNode2 = _interopRequireDefault(_grabNode);

	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};

	var JSONObjectNode = (function (_React$Component) {
	  _inherits(JSONObjectNode, _React$Component);

	  function JSONObjectNode(props) {
	    _classCallCheck(this, _JSONObjectNode);

	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.itemString = false;
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }

	  // Returns the child nodes for each element in the object. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.

	  JSONObjectNode.prototype.getChildNodes = function getChildNodes() {
	    if (this.state.expanded && this.needsChildNodes) {
	      var obj = this.props.data;
	      var childNodes = [];
	      for (var k in obj) {
	        if (obj.hasOwnProperty(k)) {
	          var prevData = undefined;
	          if (typeof this.props.previousData !== 'undefined' && this.props.previousData !== null) {
	            prevData = this.props.previousData[k];
	          }
	          var node = _grabNode2['default'](k, obj[k], prevData, this.props.theme, this.props.styles, this.props.getItemString);
	          if (node !== false) {
	            childNodes.push(node);
	          }
	        }
	      }
	      this.needsChildNodes = false;
	      this.renderedChildren = childNodes;
	    }
	    return this.renderedChildren;
	  };

	  // Returns the "n Items" string for this node, generating and
	  // caching it if it hasn't been created yet.

	  JSONObjectNode.prototype.getItemString = function getItemString(itemType) {
	    if (!this.itemString) {
	      var len = _Object$keys(this.props.data).length;
	      this.itemString = len + ' key' + (len !== 1 ? 's' : '');
	    }
	    return this.props.getItemString('Object', this.props.data, itemType, this.itemString);
	  };

	  JSONObjectNode.prototype.render = function render() {
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0B
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this), style: this.props.styles.getArrowStyle(this.state.expanded) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Object', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({}, spanStyle, this.props.styles.getItemStringStyle('Object', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.getItemString(_react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '{}'
	        ))
	      ),
	      _react2['default'].createElement(
	        'ul',
	        { style: _extends({}, childListStyle, this.props.styles.getListStyle('Object', this.state.expanded)) },
	        this.getChildNodes()
	      )
	    );
	  };

	  var _JSONObjectNode = JSONObjectNode;
	  JSONObjectNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONObjectNode) || JSONObjectNode;
	  return JSONObjectNode;
	})(_react2['default'].Component);

	exports['default'] = JSONObjectNode;
	module.exports = exports['default'];

	// cache store for the number of items string we display

	// flag to see if we still need to render our child nodes

	// cache store for our child nodes

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(292), __esModule: true };

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(293);
	module.exports = __webpack_require__(6).Object.keys;

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(11);

	__webpack_require__(294)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(4)
	  , core    = __webpack_require__(6)
	  , fails   = __webpack_require__(15);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var mixin = __webpack_require__(296);
	var assign = __webpack_require__(297);

	var mixinProto = mixin({
	  // lifecycle stuff is as you'd expect
	  componentDidMount: mixin.MANY,
	  componentWillMount: mixin.MANY,
	  componentWillReceiveProps: mixin.MANY,
	  shouldComponentUpdate: mixin.ONCE,
	  componentWillUpdate: mixin.MANY,
	  componentDidUpdate: mixin.MANY,
	  componentWillUnmount: mixin.MANY,
	  getChildContext: mixin.MANY_MERGED
	});

	function setDefaultProps(reactMixin) {
	  var getDefaultProps = reactMixin.getDefaultProps;

	  if (getDefaultProps) {
	    reactMixin.defaultProps = getDefaultProps();

	    delete reactMixin.getDefaultProps;
	  }
	}

	function setInitialState(reactMixin) {
	  var getInitialState = reactMixin.getInitialState;
	  var componentWillMount = reactMixin.componentWillMount;

	  function applyInitialState(instance) {
	    var state = instance.state || {};
	    assign(state, getInitialState.call(instance));
	    instance.state = state;
	  }

	  if (getInitialState) {
	    if (!componentWillMount) {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	      };
	    } else {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	        componentWillMount.call(this);
	      };
	    }

	    delete reactMixin.getInitialState;
	  }
	}

	function mixinClass(reactClass, reactMixin) {
	  setDefaultProps(reactMixin);
	  setInitialState(reactMixin);

	  var prototypeMethods = {};
	  var staticProps = {};

	  Object.keys(reactMixin).forEach(function(key) {
	    if (key === 'mixins') {
	      return; // Handled below to ensure proper order regardless of property iteration order
	    }
	    if (key === 'statics') {
	      return; // gets special handling
	    } else if (typeof reactMixin[key] === 'function') {
	      prototypeMethods[key] = reactMixin[key];
	    } else {
	      staticProps[key] = reactMixin[key];
	    }
	  });

	  mixinProto(reactClass.prototype, prototypeMethods);

	  var mergePropTypes = function(left, right, key) {
	    if (!left) return right;
	    if (!right) return left;

	    var result = {};
	    Object.keys(left).forEach(function(leftKey) {
	      if (!right[leftKey]) {
	        result[leftKey] = left[leftKey];
	      }
	    });

	    Object.keys(right).forEach(function(rightKey) {
	      if (left[rightKey]) {
	        result[rightKey] = function checkBothContextTypes() {
	          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
	        };
	      } else {
	        result[rightKey] = right[rightKey];
	      }
	    });

	    return result;
	  };

	  mixin({
	    childContextTypes: mergePropTypes,
	    contextTypes: mergePropTypes,
	    propTypes: mixin.MANY_MERGED_LOOSE,
	    defaultProps: mixin.MANY_MERGED_LOOSE
	  })(reactClass, staticProps);

	  // statics is a special case because it merges directly onto the class
	  if (reactMixin.statics) {
	    Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key) {
	      var left = reactClass[key];
	      var right = reactMixin.statics[key];

	      if (left !== undefined && right !== undefined) {
	        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
	      }

	      reactClass[key] = left !== undefined ? left : right;
	    });
	  }

	  // If more mixins are defined, they need to run. This emulate's react's behavior.
	  // See behavior in code at:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
	  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
	  // then the actual spec is mixed in last.
	  //
	  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
	  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
	  // which makes the result the same. See the test for more.
	  // See also:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
	  if (reactMixin.mixins) {
	    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
	  }

	  return reactClass;
	}

	module.exports = (function() {
	  var reactMixin = mixinProto;

	  reactMixin.onClass = function(reactClass, mixin) {
	    return mixinClass(reactClass, mixin);
	  };

	  reactMixin.decorate = function(mixin) {
	    return function(reactClass) {
	      return reactMixin.onClass(reactClass, mixin);
	    };
	  };

	  return reactMixin;
	})();


/***/ },
/* 296 */
/***/ function(module, exports) {

	var objToStr = function(x){ return Object.prototype.toString.call(x); };

	var thrower = function(error){
	    throw error;
	};

	var mixins = module.exports = function makeMixinFunction(rules, _opts){
	    var opts = _opts || {};
	    if (!opts.unknownFunction) {
	        opts.unknownFunction = mixins.ONCE;
	    }

	    if (!opts.nonFunctionProperty) {
	        opts.nonFunctionProperty = function(left, right, key){
	            if (left !== undefined && right !== undefined) {
	                var getTypeName = function(obj){
	                    if (obj && obj.constructor && obj.constructor.name) {
	                        return obj.constructor.name;
	                    }
	                    else {
	                        return objToStr(obj).slice(8, -1);
	                    }
	                };
	                throw new TypeError('Cannot mixin key ' + key + ' because it is provided by multiple sources, '
	                        + 'and the types are ' + getTypeName(left) + ' and ' + getTypeName(right));
	            }
	            return left === undefined ? right : left;
	        };
	    }

	    function setNonEnumerable(target, key, value){
	        if (key in target){
	            target[key] = value;
	        }
	        else {
	            Object.defineProperty(target, key, {
	                value: value,
	                writable: true,
	                configurable: true
	            });
	        }
	    }

	    return function applyMixin(source, mixin){
	        Object.keys(mixin).forEach(function(key){
	            var left = source[key], right = mixin[key], rule = rules[key];

	            // this is just a weird case where the key was defined, but there's no value
	            // behave like the key wasn't defined
	            if (left === undefined && right === undefined) return;

	            var wrapIfFunction = function(thing){
	                return typeof thing !== "function" ? thing
	                : function(){
	                    return thing.call(this, arguments);
	                };
	            };

	            // do we have a rule for this key?
	            if (rule) {
	                // may throw here
	                var fn = rule(left, right, key);
	                setNonEnumerable(source, key, wrapIfFunction(fn));
	                return;
	            }

	            var leftIsFn = typeof left === "function";
	            var rightIsFn = typeof right === "function";

	            // check to see if they're some combination of functions or undefined
	            // we already know there's no rule, so use the unknown function behavior
	            if (leftIsFn && right === undefined
	             || rightIsFn && left === undefined
	             || leftIsFn && rightIsFn) {
	                // may throw, the default is ONCE so if both are functions
	                // the default is to throw
	                setNonEnumerable(source, key, wrapIfFunction(opts.unknownFunction(left, right, key)));
	                return;
	            }

	            // we have no rule for them, one may be a function but one or both aren't
	            // our default is MANY_MERGED_LOOSE which will merge objects, concat arrays
	            // and throw if there's a type mismatch or both are primitives (how do you merge 3, and "foo"?)
	            source[key] = opts.nonFunctionProperty(left, right, key);
	        });
	    };
	};

	mixins._mergeObjects = function(obj1, obj2) {
	    var assertObject = function(obj, obj2){
	        var type = objToStr(obj);
	        if (type !== '[object Object]') {
	            var displayType = obj.constructor ? obj.constructor.name : 'Unknown';
	            var displayType2 = obj2.constructor ? obj2.constructor.name : 'Unknown';
	            thrower('cannot merge returned value of type ' + displayType + ' with an ' + displayType2);
	        }
	    };

	    if (Array.isArray(obj1) && Array.isArray(obj2)) {
	        return obj1.concat(obj2);
	    }

	    assertObject(obj1, obj2);
	    assertObject(obj2, obj1);

	    var result = {};
	    Object.keys(obj1).forEach(function(k){
	        if (Object.prototype.hasOwnProperty.call(obj2, k)) {
	            thrower('cannot merge returns because both have the ' + JSON.stringify(k) + ' key');
	        }
	        result[k] = obj1[k];
	    });

	    Object.keys(obj2).forEach(function(k){
	        // we can skip the conflict check because all conflicts would already be found
	        result[k] = obj2[k];
	    });
	    return result;

	}

	// define our built-in mixin types
	mixins.ONCE = function(left, right, key){
	    if (left && right) {
	        throw new TypeError('Cannot mixin ' + key + ' because it has a unique constraint.');
	    }

	    var fn = left || right;

	    return function(args){
	        return fn.apply(this, args);
	    };
	};

	mixins.MANY = function(left, right, key){
	    return function(args){
	        if (right) right.apply(this, args);
	        return left ? left.apply(this, args) : undefined;
	    };
	};

	mixins.MANY_MERGED_LOOSE = function(left, right, key) {
	    if(left && right) {
	        return mixins._mergeObjects(left, right);
	    }

	    return left || right;
	}

	mixins.MANY_MERGED = function(left, right, key){
	    return function(args){
	        var res1 = right && right.apply(this, args);
	        var res2 = left && left.apply(this, args);
	        if (res1 && res2) {
	            return mixins._mergeObjects(res1, res2)
	        }
	        return res2 || res1;
	    };
	};


	mixins.REDUCE_LEFT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return right.call(this, left.apply(this, args));
	    };
	};

	mixins.REDUCE_RIGHT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return left.call(this, right.apply(this, args));
	    };
	};



/***/ },
/* 297 */
/***/ function(module, exports) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequire = __webpack_require__(299)['default'];

	exports.__esModule = true;

	var _squashClickEvent = __webpack_require__(300);

	exports.SquashClickEventMixin = _interopRequire(_squashClickEvent);

	var _expandedStateHandler = __webpack_require__(301);

	exports.ExpandedStateHandlerMixin = _interopRequire(_expandedStateHandler);

/***/ },
/* 299 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	exports.__esModule = true;

/***/ },
/* 300 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 301 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	    this.setState({
	      expanded: !this.state.expanded
	    });
	  },

	  componentWillReceiveProps: function componentWillReceiveProps() {
	    // resets our caches and flags we need to build child nodes again
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.needsChildNodes = true;
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var styles = {
	  base: {
	    display: 'inline-block',
	    marginLeft: 0,
	    marginTop: 8,
	    marginRight: 5,
	    'float': 'left',
	    transition: '150ms',
	    WebkitTransition: '150ms',
	    MozTransition: '150ms',
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent',
	    borderTopWidth: 5,
	    borderTopStyle: 'solid',
	    WebkitTransform: 'rotateZ(-90deg)',
	    MozTransform: 'rotateZ(-90deg)',
	    transform: 'rotateZ(-90deg)'
	  },
	  open: {
	    WebkitTransform: 'rotateZ(0deg)',
	    MozTransform: 'rotateZ(0deg)',
	    transform: 'rotateZ(0deg)'
	  }
	};

	var JSONArrow = (function (_React$Component) {
	  _inherits(JSONArrow, _React$Component);

	  function JSONArrow() {
	    _classCallCheck(this, JSONArrow);

	    _React$Component.apply(this, arguments);
	  }

	  JSONArrow.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      borderTopColor: this.props.theme.base0D
	    });
	    if (this.props.open) {
	      style = _extends({}, style, styles.open);
	    }
	    style = _extends({}, style, this.props.style);
	    return _react2['default'].createElement('div', { style: style, onClick: this.props.onClick });
	  };

	  return JSONArrow;
	})(_react2['default'].Component);

	exports['default'] = JSONArrow;
	module.exports = exports['default'];

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(295);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(298);

	var _JSONArrow = __webpack_require__(302);

	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

	var _grabNode = __webpack_require__(265);

	var _grabNode2 = _interopRequireDefault(_grabNode);

	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};

	var JSONArrayNode = (function (_React$Component) {
	  _inherits(JSONArrayNode, _React$Component);

	  function JSONArrayNode(props) {
	    _classCallCheck(this, _JSONArrayNode);

	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }

	  // Returns the child nodes for each element in the array. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.

	  JSONArrayNode.prototype.getChildNodes = function getChildNodes() {
	    var _this = this;

	    if (this.state.expanded && this.needsChildNodes) {
	      (function () {
	        var childNodes = [];
	        _this.props.data.forEach(function (element, idx) {
	          var prevData = undefined;
	          if (typeof _this.props.previousData !== 'undefined' && _this.props.previousData !== null) {
	            prevData = _this.props.previousData[idx];
	          }
	          var node = _grabNode2['default'](idx, element, prevData, _this.props.theme, _this.props.styles, _this.props.getItemString);
	          if (node !== false) {
	            childNodes.push(node);
	          }
	        });
	        _this.needsChildNodes = false;
	        _this.renderedChildren = childNodes;
	      })();
	    }
	    return this.renderedChildren;
	  };

	  // Returns the "n Items" string for this node, generating and
	  // caching it if it hasn't been created yet.

	  JSONArrayNode.prototype.getItemString = function getItemString(itemType) {
	    if (!this.itemString) {
	      this.itemString = this.props.data.length + ' item' + (this.props.data.length !== 1 ? 's' : '');
	    }
	    return this.props.getItemString('Array', this.props.data, itemType, this.itemString);
	  };

	  JSONArrayNode.prototype.render = function render() {
	    var childNodes = this.getChildNodes();
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0E
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this), style: this.props.styles.getArrowStyle(this.state.expanded) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Array', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({}, spanStyle, this.props.styles.getItemStringStyle('Array', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.getItemString(_react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '[]'
	        ))
	      ),
	      _react2['default'].createElement(
	        'ol',
	        { style: _extends({}, childListStyle, this.props.styles.getListStyle('Array', this.state.expanded)) },
	        childNodes
	      )
	    );
	  };

	  var _JSONArrayNode = JSONArrayNode;
	  JSONArrayNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONArrayNode) || JSONArrayNode;
	  return JSONArrayNode;
	})(_react2['default'].Component);

	exports['default'] = JSONArrayNode;
	module.exports = exports['default'];

	// flag to see if we still need to render our child nodes

	// cache store for our child nodes

	// cache store for the number of items string we display

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _getIterator = __webpack_require__(305)['default'];

	var _Number$isSafeInteger = __webpack_require__(310)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(295);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(298);

	var _JSONArrow = __webpack_require__(302);

	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

	var _grabNode = __webpack_require__(265);

	var _grabNode2 = _interopRequireDefault(_grabNode);

	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};

	var JSONIterableNode = (function (_React$Component) {
	  _inherits(JSONIterableNode, _React$Component);

	  function JSONIterableNode(props) {
	    _classCallCheck(this, _JSONIterableNode);

	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }

	  // Returns the child nodes for each entry in iterable. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.

	  JSONIterableNode.prototype.getChildNodes = function getChildNodes() {
	    if (this.state.expanded && this.needsChildNodes) {
	      var childNodes = [];
	      for (var _iterator = this.props.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var entry = _ref;

	        var key = null;
	        var value = null;
	        if (Array.isArray(entry)) {
	          key = entry[0];
	          value = entry[1];
	        } else {
	          key = childNodes.length;
	          value = entry;
	        }

	        var prevData = undefined;
	        if (typeof this.props.previousData !== 'undefined' && this.props.previousData !== null) {
	          prevData = this.props.previousData[key];
	        }
	        var node = _grabNode2['default'](key, value, prevData, this.props.theme, this.props.styles, this.props.getItemString);
	        if (node !== false) {
	          childNodes.push(node);
	        }
	      }
	      this.needsChildNodes = false;
	      this.renderedChildren = childNodes;
	    }
	    return this.renderedChildren;
	  };

	  // Returns the "n entries" string for this node, generating and
	  // caching it if it hasn't been created yet.

	  JSONIterableNode.prototype.getItemString = function getItemString(itemType) {
	    if (!this.itemString) {
	      var data = this.props.data;

	      var count = 0;
	      if (_Number$isSafeInteger(data.size)) {
	        count = data.size;
	      } else {
	        for (var _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
	          var _ref2;

	          if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref2 = _iterator2[_i2++];
	          } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref2 = _i2.value;
	          }

	          var entry = _ref2;
	          // eslint-disable-line no-unused-vars
	          count += 1;
	        }
	      }
	      this.itemString = count + ' entr' + (count !== 1 ? 'ies' : 'y');
	    }
	    return this.props.getItemString('Iterable', this.props.data, itemType, this.itemString);
	  };

	  JSONIterableNode.prototype.render = function render() {
	    var childNodes = this.getChildNodes();
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0E
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this), style: this.props.styles.getArrowStyle(this.state.expanded) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Iterable', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({}, spanStyle, this.props.styles.getItemStringStyle('Iterable', this.state.expanded)), onClick: this.handleClick.bind(this) },
	        this.getItemString(_react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '()'
	        ))
	      ),
	      _react2['default'].createElement(
	        'ol',
	        { style: _extends({}, childListStyle, this.props.styles.getListStyle('Iterable', this.state.expanded)) },
	        childNodes
	      )
	    );
	  };

	  var _JSONIterableNode = JSONIterableNode;
	  JSONIterableNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONIterableNode) || JSONIterableNode;
	  return JSONIterableNode;
	})(_react2['default'].Component);

	exports['default'] = JSONIterableNode;
	module.exports = exports['default'];

	// flag to see if we still need to render our child nodes

	// cache store for our child nodes

	// cache store for the number of items string we display

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(306), __esModule: true };

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(285);
	__webpack_require__(269);
	module.exports = __webpack_require__(307);

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(257)
	  , get      = __webpack_require__(308);
	module.exports = __webpack_require__(6).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(309)
	  , ITERATOR  = __webpack_require__(282)('iterator')
	  , Iterators = __webpack_require__(279);
	module.exports = __webpack_require__(6).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(14)
	  , TAG = __webpack_require__(282)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(311), __esModule: true };

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(312);
	module.exports = __webpack_require__(6).Number.isSafeInteger;

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(4)
	  , isInteger = __webpack_require__(313)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(256)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(295);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(298);

	var _utilsHexToRgb = __webpack_require__(315);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONStringNode = (function (_React$Component) {
	  _inherits(JSONStringNode, _React$Component);

	  function JSONStringNode() {
	    _classCallCheck(this, _JSONStringNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONStringNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('String', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base0B
	          }, this.props.styles.getValueStyle('String', true)) },
	        '"',
	        this.props.value,
	        '"'
	      )
	    );
	  };

	  var _JSONStringNode = JSONStringNode;
	  JSONStringNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONStringNode) || JSONStringNode;
	  return JSONStringNode;
	})(_react2['default'].Component);

	exports['default'] = JSONStringNode;
	module.exports = exports['default'];

/***/ },
/* 315 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports["default"] = function (hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	};

	module.exports = exports["default"];

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(295);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(298);

	var _utilsHexToRgb = __webpack_require__(315);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONNumberNode = (function (_React$Component) {
	  _inherits(JSONNumberNode, _React$Component);

	  function JSONNumberNode() {
	    _classCallCheck(this, _JSONNumberNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONNumberNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Number', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base09
	          }, this.props.styles.getValueStyle('Number', true)) },
	        this.props.value
	      )
	    );
	  };

	  var _JSONNumberNode = JSONNumberNode;
	  JSONNumberNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONNumberNode) || JSONNumberNode;
	  return JSONNumberNode;
	})(_react2['default'].Component);

	exports['default'] = JSONNumberNode;
	module.exports = exports['default'];

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(295);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(298);

	var _utilsHexToRgb = __webpack_require__(315);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONBooleanNode = (function (_React$Component) {
	  _inherits(JSONBooleanNode, _React$Component);

	  function JSONBooleanNode() {
	    _classCallCheck(this, _JSONBooleanNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONBooleanNode.prototype.render = function render() {
	    var truthString = this.props.value ? 'true' : 'false';
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Boolean', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base09
	          }, this.props.styles.getValueStyle('Boolean', true)) },
	        truthString
	      )
	    );
	  };

	  var _JSONBooleanNode = JSONBooleanNode;
	  JSONBooleanNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONBooleanNode) || JSONBooleanNode;
	  return JSONBooleanNode;
	})(_react2['default'].Component);

	exports['default'] = JSONBooleanNode;
	module.exports = exports['default'];

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(295);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(298);

	var _utilsHexToRgb = __webpack_require__(315);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONNullNode = (function (_React$Component) {
	  _inherits(JSONNullNode, _React$Component);

	  function JSONNullNode() {
	    _classCallCheck(this, _JSONNullNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONNullNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Null', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base08
	          }, this.props.styles.getValueStyle('Null', true)) },
	        'null'
	      )
	    );
	  };

	  var _JSONNullNode = JSONNullNode;
	  JSONNullNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONNullNode) || JSONNullNode;
	  return JSONNullNode;
	})(_react2['default'].Component);

	exports['default'] = JSONNullNode;
	module.exports = exports['default'];

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(295);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(298);

	var _utilsHexToRgb = __webpack_require__(315);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONDateNode = (function (_React$Component) {
	  _inherits(JSONDateNode, _React$Component);

	  function JSONDateNode() {
	    _classCallCheck(this, _JSONDateNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONDateNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Date', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base0B
	          }, this.props.styles.getValueStyle('Date', true)) },
	        this.props.value.toISOString()
	      )
	    );
	  };

	  var _JSONDateNode = JSONDateNode;
	  JSONDateNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONDateNode) || JSONDateNode;
	  return JSONDateNode;
	})(_react2['default'].Component);

	exports['default'] = JSONDateNode;
	module.exports = exports['default'];

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(295);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(298);

	var _utilsHexToRgb = __webpack_require__(315);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONUndefinedNode = (function (_React$Component) {
	  _inherits(JSONUndefinedNode, _React$Component);

	  function JSONUndefinedNode() {
	    _classCallCheck(this, _JSONUndefinedNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONUndefinedNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Undefined', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base08
	          }, this.props.styles.getValueStyle('Undefined', true)) },
	        'undefined'
	      )
	    );
	  };

	  var _JSONUndefinedNode = JSONUndefinedNode;
	  JSONUndefinedNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONUndefinedNode) || JSONUndefinedNode;
	  return JSONUndefinedNode;
	})(_react2['default'].Component);

	exports['default'] = JSONUndefinedNode;
	module.exports = exports['default'];

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(249)['default'];

	var _classCallCheck = __webpack_require__(261)['default'];

	var _extends = __webpack_require__(262)['default'];

	var _interopRequireDefault = __webpack_require__(264)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(295);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(298);

	var _utilsHexToRgb = __webpack_require__(315);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14,
	    WebkitUserSelect: 'text',
	    MozUserSelect: 'text'
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONFunctionNode = (function (_React$Component) {
	  _inherits(JSONFunctionNode, _React$Component);

	  function JSONFunctionNode() {
	    _classCallCheck(this, _JSONFunctionNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONFunctionNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }, this.props.styles.getLabelStyle('Undefined', true)) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: _extends({
	            color: this.props.theme.base08
	          }, this.props.styles.getValueStyle('Undefined', true)) },
	        this.props.value.toString()
	      )
	    );
	  };

	  var _JSONFunctionNode = JSONFunctionNode;
	  JSONFunctionNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONFunctionNode) || JSONFunctionNode;
	  return JSONFunctionNode;
	})(_react2['default'].Component);

	exports['default'] = JSONFunctionNode;
	module.exports = exports['default'];

/***/ },
/* 322 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactJsonTree = __webpack_require__(248);

	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  actionBar: {
	    paddingTop: 8,
	    paddingBottom: 7,
	    paddingLeft: 16
	  },
	  payload: {
	    margin: 0,
	    overflow: 'auto'
	  }
	};

	var LogMonitorAction = function (_Component) {
	  _inherits(LogMonitorAction, _Component);

	  function LogMonitorAction() {
	    _classCallCheck(this, LogMonitorAction);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  LogMonitorAction.prototype.renderPayload = function renderPayload(payload) {
	    return _react2.default.createElement(
	      'div',
	      { style: _extends({}, styles.payload, {
	          backgroundColor: this.props.theme.base00
	        }) },
	      Object.keys(payload).length > 0 ? _react2.default.createElement(_reactJsonTree2.default, { theme: this.props.theme,
	        keyName: 'action',
	        data: payload,
	        expandRoot: this.props.expandActionRoot }) : ''
	    );
	  };

	  LogMonitorAction.prototype.render = function render() {
	    var _props$action = this.props.action;
	    var type = _props$action.type;

	    var payload = _objectWithoutProperties(_props$action, ['type']);

	    return _react2.default.createElement(
	      'div',
	      { style: _extends({
	          backgroundColor: this.props.theme.base02,
	          color: this.props.theme.base06
	        }, this.props.style) },
	      _react2.default.createElement(
	        'div',
	        { style: styles.actionBar,
	          onClick: this.props.onClick },
	        type
	      ),
	      !this.props.collapsed ? this.renderPayload(payload) : ''
	    );
	  };

	  return LogMonitorAction;
	}(_react.Component);

	exports.default = LogMonitorAction;

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shouldPureComponentUpdate;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _shallowEqual = __webpack_require__(325);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function shouldPureComponentUpdate(nextProps, nextState) {
	  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
	}

	module.exports = exports['default'];

/***/ },
/* 325 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _brighten = __webpack_require__(327);

	var _brighten2 = _interopRequireDefault(_brighten);

	var _function = __webpack_require__(324);

	var _function2 = _interopRequireDefault(_function);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  base: {
	    cursor: 'pointer',
	    fontWeight: 'bold',
	    borderRadius: 3,
	    padding: 4,
	    marginLeft: 3,
	    marginRight: 3,
	    marginTop: 5,
	    marginBottom: 5,
	    flexGrow: 1,
	    display: 'inline-block',
	    fontSize: '0.8em',
	    color: 'white',
	    textDecoration: 'none'
	  }
	};

	var LogMonitorButton = function (_React$Component) {
	  _inherits(LogMonitorButton, _React$Component);

	  function LogMonitorButton(props) {
	    _classCallCheck(this, LogMonitorButton);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.shouldComponentUpdate = _function2.default;

	    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
	    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);

	    _this.state = {
	      hovered: false,
	      active: false
	    };
	    return _this;
	  }

	  LogMonitorButton.prototype.handleMouseEnter = function handleMouseEnter() {
	    this.setState({ hovered: true });
	  };

	  LogMonitorButton.prototype.handleMouseLeave = function handleMouseLeave() {
	    this.setState({ hovered: false });
	  };

	  LogMonitorButton.prototype.handleMouseDown = function handleMouseDown() {
	    this.setState({ active: true });
	  };

	  LogMonitorButton.prototype.handleMouseUp = function handleMouseUp() {
	    this.setState({ active: false });
	  };

	  LogMonitorButton.prototype.onClick = function onClick() {
	    if (!this.props.enabled) {
	      return;
	    }
	    if (this.props.onClick) {
	      this.props.onClick();
	    }
	  };

	  LogMonitorButton.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      backgroundColor: this.props.theme.base02
	    });
	    if (this.props.enabled && this.state.hovered) {
	      style = _extends({}, style, {
	        backgroundColor: (0, _brighten2.default)(this.props.theme.base02, 0.2)
	      });
	    }
	    if (!this.props.enabled) {
	      style = _extends({}, style, {
	        opacity: 0.2,
	        cursor: 'text',
	        backgroundColor: 'transparent'
	      });
	    }
	    return _react2.default.createElement(
	      'a',
	      { onMouseEnter: this.handleMouseEnter,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onClick: this.onClick,
	        style: style },
	      this.props.children
	    );
	  };

	  return LogMonitorButton;
	}(_react2.default.Component);

	exports.default = LogMonitorButton;

/***/ },
/* 327 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (hexColor, lightness) {
	  var hex = String(hexColor).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex.replace(/(.)/g, '$1$1');
	  }
	  var lum = lightness || 0;

	  var rgb = '#';
	  var c = undefined;
	  for (var i = 0; i < 3; ++i) {
	    c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }
	  return rgb;
	};

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	var _base16 = __webpack_require__(329);

	_defaults(exports, _interopExportWildcard(_base16, _defaults));

	var _nicinabox = __webpack_require__(367);

	exports.nicinabox = _interopRequire(_nicinabox);

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _threezerotwofour = __webpack_require__(330);

	exports.threezerotwofour = _interopRequire(_threezerotwofour);

	var _apathy = __webpack_require__(331);

	exports.apathy = _interopRequire(_apathy);

	var _ashes = __webpack_require__(332);

	exports.ashes = _interopRequire(_ashes);

	var _atelierDune = __webpack_require__(333);

	exports.atelierDune = _interopRequire(_atelierDune);

	var _atelierForest = __webpack_require__(334);

	exports.atelierForest = _interopRequire(_atelierForest);

	var _atelierHeath = __webpack_require__(335);

	exports.atelierHeath = _interopRequire(_atelierHeath);

	var _atelierLakeside = __webpack_require__(336);

	exports.atelierLakeside = _interopRequire(_atelierLakeside);

	var _atelierSeaside = __webpack_require__(337);

	exports.atelierSeaside = _interopRequire(_atelierSeaside);

	var _bespin = __webpack_require__(338);

	exports.bespin = _interopRequire(_bespin);

	var _brewer = __webpack_require__(339);

	exports.brewer = _interopRequire(_brewer);

	var _bright = __webpack_require__(340);

	exports.bright = _interopRequire(_bright);

	var _chalk = __webpack_require__(341);

	exports.chalk = _interopRequire(_chalk);

	var _codeschool = __webpack_require__(342);

	exports.codeschool = _interopRequire(_codeschool);

	var _colors = __webpack_require__(343);

	exports.colors = _interopRequire(_colors);

	var _default = __webpack_require__(344);

	exports['default'] = _interopRequire(_default);

	var _eighties = __webpack_require__(345);

	exports.eighties = _interopRequire(_eighties);

	var _embers = __webpack_require__(346);

	exports.embers = _interopRequire(_embers);

	var _flat = __webpack_require__(347);

	exports.flat = _interopRequire(_flat);

	var _google = __webpack_require__(348);

	exports.google = _interopRequire(_google);

	var _grayscale = __webpack_require__(349);

	exports.grayscale = _interopRequire(_grayscale);

	var _greenscreen = __webpack_require__(350);

	exports.greenscreen = _interopRequire(_greenscreen);

	var _harmonic = __webpack_require__(351);

	exports.harmonic = _interopRequire(_harmonic);

	var _hopscotch = __webpack_require__(352);

	exports.hopscotch = _interopRequire(_hopscotch);

	var _isotope = __webpack_require__(353);

	exports.isotope = _interopRequire(_isotope);

	var _marrakesh = __webpack_require__(354);

	exports.marrakesh = _interopRequire(_marrakesh);

	var _mocha = __webpack_require__(355);

	exports.mocha = _interopRequire(_mocha);

	var _monokai = __webpack_require__(356);

	exports.monokai = _interopRequire(_monokai);

	var _ocean = __webpack_require__(357);

	exports.ocean = _interopRequire(_ocean);

	var _paraiso = __webpack_require__(358);

	exports.paraiso = _interopRequire(_paraiso);

	var _pop = __webpack_require__(359);

	exports.pop = _interopRequire(_pop);

	var _railscasts = __webpack_require__(360);

	exports.railscasts = _interopRequire(_railscasts);

	var _shapeshifter = __webpack_require__(361);

	exports.shapeshifter = _interopRequire(_shapeshifter);

	var _solarized = __webpack_require__(362);

	exports.solarized = _interopRequire(_solarized);

	var _summerfruit = __webpack_require__(363);

	exports.summerfruit = _interopRequire(_summerfruit);

	var _tomorrow = __webpack_require__(364);

	exports.tomorrow = _interopRequire(_tomorrow);

	var _tube = __webpack_require__(365);

	exports.tube = _interopRequire(_tube);

	var _twilight = __webpack_require__(366);

	exports.twilight = _interopRequire(_twilight);

/***/ },
/* 330 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'threezerotwofour',
	  author: 'jan t. sott (http://github.com/idleberg)',
	  base00: '#090300',
	  base01: '#3a3432',
	  base02: '#4a4543',
	  base03: '#5c5855',
	  base04: '#807d7c',
	  base05: '#a5a2a2',
	  base06: '#d6d5d4',
	  base07: '#f7f7f7',
	  base08: '#db2d20',
	  base09: '#e8bbd0',
	  base0A: '#fded02',
	  base0B: '#01a252',
	  base0C: '#b5e4f4',
	  base0D: '#01a0e4',
	  base0E: '#a16a94',
	  base0F: '#cdab53'
	};
	module.exports = exports['default'];

/***/ },
/* 331 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'apathy',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#031A16',
	  base01: '#0B342D',
	  base02: '#184E45',
	  base03: '#2B685E',
	  base04: '#5F9C92',
	  base05: '#81B5AC',
	  base06: '#A7CEC8',
	  base07: '#D2E7E4',
	  base08: '#3E9688',
	  base09: '#3E7996',
	  base0A: '#3E4C96',
	  base0B: '#883E96',
	  base0C: '#963E4C',
	  base0D: '#96883E',
	  base0E: '#4C963E',
	  base0F: '#3E965B'
	};
	module.exports = exports['default'];

/***/ },
/* 332 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ashes',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#1C2023',
	  base01: '#393F45',
	  base02: '#565E65',
	  base03: '#747C84',
	  base04: '#ADB3BA',
	  base05: '#C7CCD1',
	  base06: '#DFE2E5',
	  base07: '#F3F4F5',
	  base08: '#C7AE95',
	  base09: '#C7C795',
	  base0A: '#AEC795',
	  base0B: '#95C7AE',
	  base0C: '#95AEC7',
	  base0D: '#AE95C7',
	  base0E: '#C795AE',
	  base0F: '#C79595'
	};
	module.exports = exports['default'];

/***/ },
/* 333 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier dune',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
	  base00: '#20201d',
	  base01: '#292824',
	  base02: '#6e6b5e',
	  base03: '#7d7a68',
	  base04: '#999580',
	  base05: '#a6a28c',
	  base06: '#e8e4cf',
	  base07: '#fefbec',
	  base08: '#d73737',
	  base09: '#b65611',
	  base0A: '#cfb017',
	  base0B: '#60ac39',
	  base0C: '#1fad83',
	  base0D: '#6684e1',
	  base0E: '#b854d4',
	  base0F: '#d43552'
	};
	module.exports = exports['default'];

/***/ },
/* 334 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier forest',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
	  base00: '#1b1918',
	  base01: '#2c2421',
	  base02: '#68615e',
	  base03: '#766e6b',
	  base04: '#9c9491',
	  base05: '#a8a19f',
	  base06: '#e6e2e0',
	  base07: '#f1efee',
	  base08: '#f22c40',
	  base09: '#df5320',
	  base0A: '#d5911a',
	  base0B: '#5ab738',
	  base0C: '#00ad9c',
	  base0D: '#407ee7',
	  base0E: '#6666ea',
	  base0F: '#c33ff3'
	};
	module.exports = exports['default'];

/***/ },
/* 335 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier heath',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
	  base00: '#1b181b',
	  base01: '#292329',
	  base02: '#695d69',
	  base03: '#776977',
	  base04: '#9e8f9e',
	  base05: '#ab9bab',
	  base06: '#d8cad8',
	  base07: '#f7f3f7',
	  base08: '#ca402b',
	  base09: '#a65926',
	  base0A: '#bb8a35',
	  base0B: '#379a37',
	  base0C: '#159393',
	  base0D: '#516aec',
	  base0E: '#7b59c0',
	  base0F: '#cc33cc'
	};
	module.exports = exports['default'];

/***/ },
/* 336 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier lakeside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
	  base00: '#161b1d',
	  base01: '#1f292e',
	  base02: '#516d7b',
	  base03: '#5a7b8c',
	  base04: '#7195a8',
	  base05: '#7ea2b4',
	  base06: '#c1e4f6',
	  base07: '#ebf8ff',
	  base08: '#d22d72',
	  base09: '#935c25',
	  base0A: '#8a8a0f',
	  base0B: '#568c3b',
	  base0C: '#2d8f6f',
	  base0D: '#257fad',
	  base0E: '#5d5db1',
	  base0F: '#b72dd2'
	};
	module.exports = exports['default'];

/***/ },
/* 337 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier seaside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
	  base00: '#131513',
	  base01: '#242924',
	  base02: '#5e6e5e',
	  base03: '#687d68',
	  base04: '#809980',
	  base05: '#8ca68c',
	  base06: '#cfe8cf',
	  base07: '#f0fff0',
	  base08: '#e6193c',
	  base09: '#87711d',
	  base0A: '#c3c322',
	  base0B: '#29a329',
	  base0C: '#1999b3',
	  base0D: '#3d62f5',
	  base0E: '#ad2bee',
	  base0F: '#e619c3'
	};
	module.exports = exports['default'];

/***/ },
/* 338 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bespin',
	  author: 'jan t. sott',
	  base00: '#28211c',
	  base01: '#36312e',
	  base02: '#5e5d5c',
	  base03: '#666666',
	  base04: '#797977',
	  base05: '#8a8986',
	  base06: '#9d9b97',
	  base07: '#baae9e',
	  base08: '#cf6a4c',
	  base09: '#cf7d34',
	  base0A: '#f9ee98',
	  base0B: '#54be0d',
	  base0C: '#afc4db',
	  base0D: '#5ea6ea',
	  base0E: '#9b859d',
	  base0F: '#937121'
	};
	module.exports = exports['default'];

/***/ },
/* 339 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'brewer',
	  author: 'timothée poisot (http://github.com/tpoisot)',
	  base00: '#0c0d0e',
	  base01: '#2e2f30',
	  base02: '#515253',
	  base03: '#737475',
	  base04: '#959697',
	  base05: '#b7b8b9',
	  base06: '#dadbdc',
	  base07: '#fcfdfe',
	  base08: '#e31a1c',
	  base09: '#e6550d',
	  base0A: '#dca060',
	  base0B: '#31a354',
	  base0C: '#80b1d3',
	  base0D: '#3182bd',
	  base0E: '#756bb1',
	  base0F: '#b15928'
	};
	module.exports = exports['default'];

/***/ },
/* 340 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bright',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#303030',
	  base02: '#505050',
	  base03: '#b0b0b0',
	  base04: '#d0d0d0',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ffffff',
	  base08: '#fb0120',
	  base09: '#fc6d24',
	  base0A: '#fda331',
	  base0B: '#a1c659',
	  base0C: '#76c7b7',
	  base0D: '#6fb3d2',
	  base0E: '#d381c3',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 341 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'chalk',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#f5f5f5',
	  base08: '#fb9fb1',
	  base09: '#eda987',
	  base0A: '#ddb26f',
	  base0B: '#acc267',
	  base0C: '#12cfc0',
	  base0D: '#6fc2ef',
	  base0E: '#e1a3ee',
	  base0F: '#deaf8f'
	};
	module.exports = exports['default'];

/***/ },
/* 342 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'codeschool',
	  author: 'brettof86',
	  base00: '#232c31',
	  base01: '#1c3657',
	  base02: '#2a343a',
	  base03: '#3f4944',
	  base04: '#84898c',
	  base05: '#9ea7a6',
	  base06: '#a7cfa3',
	  base07: '#b5d8f6',
	  base08: '#2a5491',
	  base09: '#43820d',
	  base0A: '#a03b1e',
	  base0B: '#237986',
	  base0C: '#b02f30',
	  base0D: '#484d79',
	  base0E: '#c59820',
	  base0F: '#c98344'
	};
	module.exports = exports['default'];

/***/ },
/* 343 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'colors',
	  author: 'mrmrs (http://clrs.cc)',
	  base00: '#111111',
	  base01: '#333333',
	  base02: '#555555',
	  base03: '#777777',
	  base04: '#999999',
	  base05: '#bbbbbb',
	  base06: '#dddddd',
	  base07: '#ffffff',
	  base08: '#ff4136',
	  base09: '#ff851b',
	  base0A: '#ffdc00',
	  base0B: '#2ecc40',
	  base0C: '#7fdbff',
	  base0D: '#0074d9',
	  base0E: '#b10dc9',
	  base0F: '#85144b'
	};
	module.exports = exports['default'];

/***/ },
/* 344 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'default',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#181818',
	  base01: '#282828',
	  base02: '#383838',
	  base03: '#585858',
	  base04: '#b8b8b8',
	  base05: '#d8d8d8',
	  base06: '#e8e8e8',
	  base07: '#f8f8f8',
	  base08: '#ab4642',
	  base09: '#dc9656',
	  base0A: '#f7ca88',
	  base0B: '#a1b56c',
	  base0C: '#86c1b9',
	  base0D: '#7cafc2',
	  base0E: '#ba8baf',
	  base0F: '#a16946'
	};
	module.exports = exports['default'];

/***/ },
/* 345 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'eighties',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2d2d2d',
	  base01: '#393939',
	  base02: '#515151',
	  base03: '#747369',
	  base04: '#a09f93',
	  base05: '#d3d0c8',
	  base06: '#e8e6df',
	  base07: '#f2f0ec',
	  base08: '#f2777a',
	  base09: '#f99157',
	  base0A: '#ffcc66',
	  base0B: '#99cc99',
	  base0C: '#66cccc',
	  base0D: '#6699cc',
	  base0E: '#cc99cc',
	  base0F: '#d27b53'
	};
	module.exports = exports['default'];

/***/ },
/* 346 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'embers',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#16130F',
	  base01: '#2C2620',
	  base02: '#433B32',
	  base03: '#5A5047',
	  base04: '#8A8075',
	  base05: '#A39A90',
	  base06: '#BEB6AE',
	  base07: '#DBD6D1',
	  base08: '#826D57',
	  base09: '#828257',
	  base0A: '#6D8257',
	  base0B: '#57826D',
	  base0C: '#576D82',
	  base0D: '#6D5782',
	  base0E: '#82576D',
	  base0F: '#825757'
	};
	module.exports = exports['default'];

/***/ },
/* 347 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'flat',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2C3E50',
	  base01: '#34495E',
	  base02: '#7F8C8D',
	  base03: '#95A5A6',
	  base04: '#BDC3C7',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ECF0F1',
	  base08: '#E74C3C',
	  base09: '#E67E22',
	  base0A: '#F1C40F',
	  base0B: '#2ECC71',
	  base0C: '#1ABC9C',
	  base0D: '#3498DB',
	  base0E: '#9B59B6',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 348 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'google',
	  author: 'seth wright (http://sethawright.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#CC342B',
	  base09: '#F96A38',
	  base0A: '#FBA922',
	  base0B: '#198844',
	  base0C: '#3971ED',
	  base0D: '#3971ED',
	  base0E: '#A36AC7',
	  base0F: '#3971ED'
	};
	module.exports = exports['default'];

/***/ },
/* 349 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'grayscale',
	  author: 'alexandre gavioli (https://github.com/alexx2/)',
	  base00: '#101010',
	  base01: '#252525',
	  base02: '#464646',
	  base03: '#525252',
	  base04: '#ababab',
	  base05: '#b9b9b9',
	  base06: '#e3e3e3',
	  base07: '#f7f7f7',
	  base08: '#7c7c7c',
	  base09: '#999999',
	  base0A: '#a0a0a0',
	  base0B: '#8e8e8e',
	  base0C: '#868686',
	  base0D: '#686868',
	  base0E: '#747474',
	  base0F: '#5e5e5e'
	};
	module.exports = exports['default'];

/***/ },
/* 350 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'green screen',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#001100',
	  base01: '#003300',
	  base02: '#005500',
	  base03: '#007700',
	  base04: '#009900',
	  base05: '#00bb00',
	  base06: '#00dd00',
	  base07: '#00ff00',
	  base08: '#007700',
	  base09: '#009900',
	  base0A: '#007700',
	  base0B: '#00bb00',
	  base0C: '#005500',
	  base0D: '#009900',
	  base0E: '#00bb00',
	  base0F: '#005500'
	};
	module.exports = exports['default'];

/***/ },
/* 351 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'harmonic16',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#0b1c2c',
	  base01: '#223b54',
	  base02: '#405c79',
	  base03: '#627e99',
	  base04: '#aabcce',
	  base05: '#cbd6e2',
	  base06: '#e5ebf1',
	  base07: '#f7f9fb',
	  base08: '#bf8b56',
	  base09: '#bfbf56',
	  base0A: '#8bbf56',
	  base0B: '#56bf8b',
	  base0C: '#568bbf',
	  base0D: '#8b56bf',
	  base0E: '#bf568b',
	  base0F: '#bf5656'
	};
	module.exports = exports['default'];

/***/ },
/* 352 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'hopscotch',
	  author: 'jan t. sott',
	  base00: '#322931',
	  base01: '#433b42',
	  base02: '#5c545b',
	  base03: '#797379',
	  base04: '#989498',
	  base05: '#b9b5b8',
	  base06: '#d5d3d5',
	  base07: '#ffffff',
	  base08: '#dd464c',
	  base09: '#fd8b19',
	  base0A: '#fdcc59',
	  base0B: '#8fc13e',
	  base0C: '#149b93',
	  base0D: '#1290bf',
	  base0E: '#c85e7c',
	  base0F: '#b33508'
	};
	module.exports = exports['default'];

/***/ },
/* 353 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'isotope',
	  author: 'jan t. sott',
	  base00: '#000000',
	  base01: '#404040',
	  base02: '#606060',
	  base03: '#808080',
	  base04: '#c0c0c0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#ff0000',
	  base09: '#ff9900',
	  base0A: '#ff0099',
	  base0B: '#33ff00',
	  base0C: '#00ffff',
	  base0D: '#0066ff',
	  base0E: '#cc00ff',
	  base0F: '#3300ff'
	};
	module.exports = exports['default'];

/***/ },
/* 354 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'marrakesh',
	  author: 'alexandre gavioli (http://github.com/alexx2/)',
	  base00: '#201602',
	  base01: '#302e00',
	  base02: '#5f5b17',
	  base03: '#6c6823',
	  base04: '#86813b',
	  base05: '#948e48',
	  base06: '#ccc37a',
	  base07: '#faf0a5',
	  base08: '#c35359',
	  base09: '#b36144',
	  base0A: '#a88339',
	  base0B: '#18974e',
	  base0C: '#75a738',
	  base0D: '#477ca1',
	  base0E: '#8868b3',
	  base0F: '#b3588e'
	};
	module.exports = exports['default'];

/***/ },
/* 355 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'mocha',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#3B3228',
	  base01: '#534636',
	  base02: '#645240',
	  base03: '#7e705a',
	  base04: '#b8afad',
	  base05: '#d0c8c6',
	  base06: '#e9e1dd',
	  base07: '#f5eeeb',
	  base08: '#cb6077',
	  base09: '#d28b71',
	  base0A: '#f4bc87',
	  base0B: '#beb55b',
	  base0C: '#7bbda4',
	  base0D: '#8ab3b5',
	  base0E: '#a89bb9',
	  base0F: '#bb9584'
	};
	module.exports = exports['default'];

/***/ },
/* 356 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'monokai',
	  author: 'wimer hazenberg (http://www.monokai.nl)',
	  base00: '#272822',
	  base01: '#383830',
	  base02: '#49483e',
	  base03: '#75715e',
	  base04: '#a59f85',
	  base05: '#f8f8f2',
	  base06: '#f5f4f1',
	  base07: '#f9f8f5',
	  base08: '#f92672',
	  base09: '#fd971f',
	  base0A: '#f4bf75',
	  base0B: '#a6e22e',
	  base0C: '#a1efe4',
	  base0D: '#66d9ef',
	  base0E: '#ae81ff',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 357 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ocean',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2b303b',
	  base01: '#343d46',
	  base02: '#4f5b66',
	  base03: '#65737e',
	  base04: '#a7adba',
	  base05: '#c0c5ce',
	  base06: '#dfe1e8',
	  base07: '#eff1f5',
	  base08: '#bf616a',
	  base09: '#d08770',
	  base0A: '#ebcb8b',
	  base0B: '#a3be8c',
	  base0C: '#96b5b4',
	  base0D: '#8fa1b3',
	  base0E: '#b48ead',
	  base0F: '#ab7967'
	};
	module.exports = exports['default'];

/***/ },
/* 358 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'paraiso',
	  author: 'jan t. sott',
	  base00: '#2f1e2e',
	  base01: '#41323f',
	  base02: '#4f424c',
	  base03: '#776e71',
	  base04: '#8d8687',
	  base05: '#a39e9b',
	  base06: '#b9b6b0',
	  base07: '#e7e9db',
	  base08: '#ef6155',
	  base09: '#f99b15',
	  base0A: '#fec418',
	  base0B: '#48b685',
	  base0C: '#5bc4bf',
	  base0D: '#06b6ef',
	  base0E: '#815ba4',
	  base0F: '#e96ba8'
	};
	module.exports = exports['default'];

/***/ },
/* 359 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'pop',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#eb008a',
	  base09: '#f29333',
	  base0A: '#f8ca12',
	  base0B: '#37b349',
	  base0C: '#00aabb',
	  base0D: '#0e5a94',
	  base0E: '#b31e8d',
	  base0F: '#7a2d00'
	};
	module.exports = exports['default'];

/***/ },
/* 360 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'railscasts',
	  author: 'ryan bates (http://railscasts.com)',
	  base00: '#2b2b2b',
	  base01: '#272935',
	  base02: '#3a4055',
	  base03: '#5a647e',
	  base04: '#d4cfc9',
	  base05: '#e6e1dc',
	  base06: '#f4f1ed',
	  base07: '#f9f7f3',
	  base08: '#da4939',
	  base09: '#cc7833',
	  base0A: '#ffc66d',
	  base0B: '#a5c261',
	  base0C: '#519f50',
	  base0D: '#6d9cbe',
	  base0E: '#b6b3eb',
	  base0F: '#bc9458'
	};
	module.exports = exports['default'];

/***/ },
/* 361 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'shapeshifter',
	  author: 'tyler benziger (http://tybenz.com)',
	  base00: '#000000',
	  base01: '#040404',
	  base02: '#102015',
	  base03: '#343434',
	  base04: '#555555',
	  base05: '#ababab',
	  base06: '#e0e0e0',
	  base07: '#f9f9f9',
	  base08: '#e92f2f',
	  base09: '#e09448',
	  base0A: '#dddd13',
	  base0B: '#0ed839',
	  base0C: '#23edda',
	  base0D: '#3b48e3',
	  base0E: '#f996e2',
	  base0F: '#69542d'
	};
	module.exports = exports['default'];

/***/ },
/* 362 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 363 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'summerfruit',
	  author: 'christopher corley (http://cscorley.github.io/)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#B0B0B0',
	  base05: '#D0D0D0',
	  base06: '#E0E0E0',
	  base07: '#FFFFFF',
	  base08: '#FF0086',
	  base09: '#FD8900',
	  base0A: '#ABA800',
	  base0B: '#00C918',
	  base0C: '#1faaaa',
	  base0D: '#3777E6',
	  base0E: '#AD00A1',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 364 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'tomorrow',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#cc6666',
	  base09: '#de935f',
	  base0A: '#f0c674',
	  base0B: '#b5bd68',
	  base0C: '#8abeb7',
	  base0D: '#81a2be',
	  base0E: '#b294bb',
	  base0F: '#a3685a'
	};
	module.exports = exports['default'];

/***/ },
/* 365 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'london tube',
	  author: 'jan t. sott',
	  base00: '#231f20',
	  base01: '#1c3f95',
	  base02: '#5a5758',
	  base03: '#737171',
	  base04: '#959ca1',
	  base05: '#d9d8d8',
	  base06: '#e7e7e8',
	  base07: '#ffffff',
	  base08: '#ee2e24',
	  base09: '#f386a1',
	  base0A: '#ffd204',
	  base0B: '#00853e',
	  base0C: '#85cebc',
	  base0D: '#009ddc',
	  base0E: '#98005d',
	  base0F: '#b06110'
	};
	module.exports = exports['default'];

/***/ },
/* 366 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'twilight',
	  author: 'david hart (http://hart-dev.com)',
	  base00: '#1e1e1e',
	  base01: '#323537',
	  base02: '#464b50',
	  base03: '#5f5a60',
	  base04: '#838184',
	  base05: '#a7a7a7',
	  base06: '#c3c3c3',
	  base07: '#ffffff',
	  base08: '#cf6a4c',
	  base09: '#cda869',
	  base0A: '#f9ee98',
	  base0B: '#8f9d6a',
	  base0C: '#afc4db',
	  base0D: '#7587a6',
	  base0E: '#9b859d',
	  base0F: '#9b703f'
	};
	module.exports = exports['default'];

/***/ },
/* 367 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'nicinabox',
	  author: 'nicinabox (http://github.com/nicinabox)',
	  base00: '#2A2F3A',
	  base01: '#3C444F',
	  base02: '#4F5A65',
	  base03: '#BEBEBE',
	  base04: '#b0b0b0', // based on ocean theme
	  base05: '#d0d0d0', // based on ocean theme
	  base06: '#FFFFFF',
	  base07: '#f5f5f5', // based on ocean theme
	  base08: '#fb9fb1', // based on ocean theme
	  base09: '#FC6D24',
	  base0A: '#ddb26f', // based on ocean theme
	  base0B: '#A1C659',
	  base0C: '#12cfc0', // based on ocean theme
	  base0D: '#6FB3D2',
	  base0E: '#D381C3',
	  base0F: '#deaf8f' // based on ocean theme
	};
	module.exports = exports['default'];

/***/ },
/* 368 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.updateScrollTop = updateScrollTop;
	var UPDATE_SCROLL_TOP = exports.UPDATE_SCROLL_TOP = '@@redux-devtools-log-monitor/UPDATE_SCROLL_TOP';
	function updateScrollTop(scrollTop) {
	  return { type: UPDATE_SCROLL_TOP, scrollTop: scrollTop };
	}

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = reducer;

	var _actions = __webpack_require__(368);

	function initialScrollTop(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	  var action = arguments[2];

	  if (!props.preserveScrollTop) {
	    return 0;
	  }

	  return action.type === _actions.UPDATE_SCROLL_TOP ? action.scrollTop : state;
	}

	function reducer(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var action = arguments[2];

	  return {
	    initialScrollTop: initialScrollTop(props, state.initialScrollTop, action)
	  };
	}

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _DockMonitor = __webpack_require__(371);

	var _DockMonitor2 = _interopRequireDefault(_DockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _DockMonitor2.default;

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactDock = __webpack_require__(372);

	var _reactDock2 = _interopRequireDefault(_reactDock);

	var _constants = __webpack_require__(415);

	var _actions = __webpack_require__(416);

	var _reducers = __webpack_require__(417);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _parseKey = __webpack_require__(418);

	var _parseKey2 = _interopRequireDefault(_parseKey);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DockMonitor = (function (_Component) {
	  _inherits(DockMonitor, _Component);

	  function DockMonitor(props) {
	    _classCallCheck(this, DockMonitor);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.handleSizeChange = _this.handleSizeChange.bind(_this);
	    return _this;
	  }

	  DockMonitor.prototype.componentDidMount = function componentDidMount() {
	    window.addEventListener('keydown', this.handleKeyDown);
	  };

	  DockMonitor.prototype.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('keydown', this.handleKeyDown);
	  };

	  DockMonitor.prototype.matchesKey = function matchesKey(key, event) {
	    var charCode = event.keyCode || event.which;
	    var char = String.fromCharCode(charCode);
	    return key.name.toUpperCase() === char.toUpperCase() && key.alt === event.altKey && key.ctrl === event.ctrlKey && key.meta === event.metaKey && key.shift === event.shiftKey;
	  };

	  DockMonitor.prototype.handleKeyDown = function handleKeyDown(e) {
	    var visibilityKey = (0, _parseKey2.default)(this.props.toggleVisibilityKey);
	    var positionKey = (0, _parseKey2.default)(this.props.changePositionKey);

	    if (this.matchesKey(visibilityKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.toggleVisibility)());
	    } else if (this.matchesKey(positionKey, e)) {
	      e.preventDefault();
	      this.props.dispatch((0, _actions.changePosition)());
	    }
	  };

	  DockMonitor.prototype.handleSizeChange = function handleSizeChange(requestedSize) {
	    this.props.dispatch((0, _actions.changeSize)(requestedSize));
	  };

	  DockMonitor.prototype.render = function render() {
	    var _props = this.props;
	    var monitorState = _props.monitorState;
	    var children = _props.children;
	    var fluid = _props.fluid;

	    var rest = _objectWithoutProperties(_props, ['monitorState', 'children', 'fluid']);

	    var position = monitorState.position;
	    var isVisible = monitorState.isVisible;
	    var size = monitorState.size;

	    var childProps = _extends({}, rest, {
	      monitorState: monitorState.childMonitorState
	    });

	    return _react2.default.createElement(
	      _reactDock2.default,
	      { position: position,
	        isVisible: isVisible,
	        size: size,
	        fluid: fluid,
	        onSizeChange: this.handleSizeChange,
	        dimMode: 'none' },
	      (0, _react.cloneElement)(children, childProps)
	    );
	  };

	  return DockMonitor;
	})(_react.Component);

	DockMonitor.update = _reducers2.default;
	DockMonitor.propTypes = {
	  defaultPosition: _react.PropTypes.oneOf(_constants.POSITIONS).isRequired,
	  defaultIsVisible: _react.PropTypes.bool.isRequired,
	  defaultSize: _react.PropTypes.number.isRequired,
	  toggleVisibilityKey: _react.PropTypes.string.isRequired,
	  changePositionKey: _react.PropTypes.string.isRequired,
	  fluid: _react.PropTypes.bool,
	  children: _react.PropTypes.element,

	  dispatch: _react.PropTypes.func,
	  monitorState: _react.PropTypes.shape({
	    position: _react.PropTypes.oneOf(_constants.POSITIONS).isRequired,
	    size: _react.PropTypes.number.isRequired,
	    isVisible: _react.PropTypes.bool.isRequired,
	    childMonitorState: _react.PropTypes.any
	  })
	};
	DockMonitor.defaultProps = {
	  defaultIsVisible: true,
	  defaultPosition: 'right',
	  defaultSize: 0.3,
	  fluid: true
	};
	exports.default = DockMonitor;

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(373)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _Dock = __webpack_require__(375);

	var _Dock2 = _interopRequireDefault(_Dock);

	exports['default'] = _Dock2['default'];
	module.exports = exports['default'];

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(374);

/***/ },
/* 374 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	};

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(376)['default'];

	var _inherits = __webpack_require__(383)['default'];

	var _createClass = __webpack_require__(395)['default'];

	var _classCallCheck = __webpack_require__(398)['default'];

	var _extends = __webpack_require__(400)['default'];

	var _toConsumableArray = __webpack_require__(401)['default'];

	var _Object$keys = __webpack_require__(410)['default'];

	var _interopRequireDefault = __webpack_require__(373)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _lodashDebounce = __webpack_require__(411);

	var _lodashDebounce2 = _interopRequireDefault(_lodashDebounce);

	var _objectAssign = __webpack_require__(413);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _autoprefix = __webpack_require__(414);

	var _autoprefix2 = _interopRequireDefault(_autoprefix);

	function autoprefixes(styles) {
	  return _Object$keys(styles).reduce(function (obj, key) {
	    return (obj[key] = (0, _autoprefix2['default'])(styles[key]), obj);
	  }, {});
	}

	var styles = autoprefixes({
	  wrapper: {
	    position: 'fixed',
	    width: 0,
	    height: 0,
	    top: 0,
	    left: 0
	  },

	  dim: {
	    position: 'fixed',
	    left: 0,
	    right: 0,
	    top: 0,
	    bottom: 0,
	    zIndex: 0,
	    background: 'rgba(0, 0, 0, 0.2)',
	    opacity: 1
	  },

	  dimAppear: {
	    opacity: 0
	  },

	  dimTransparent: {
	    pointerEvents: 'none'
	  },

	  dimHidden: {
	    opacity: 0
	  },

	  dock: {
	    position: 'fixed',
	    zIndex: 1,
	    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
	    background: 'white',
	    left: 0,
	    top: 0,
	    width: '100%',
	    height: '100%'
	  },

	  dockHidden: {
	    opacity: 0
	  },

	  dockResizing: {
	    transition: 'none'
	  },

	  dockContent: {
	    width: '100%',
	    height: '100%',
	    overflow: 'auto'
	  },

	  resizer: {
	    position: 'absolute',
	    zIndex: 2,
	    opacity: 0
	  }
	});

	function getTransitions(duration) {
	  return ['left', 'top', 'width', 'height'].map(function (p) {
	    return p + ' ' + duration / 1000 + 's ease-out';
	  });
	}

	function getDockStyles(_ref, _ref2) {
	  var fluid = _ref.fluid;
	  var dockStyle = _ref.dockStyle;
	  var dockHiddenStyle = _ref.dockHiddenStyle;
	  var duration = _ref.duration;
	  var position = _ref.position;
	  var isVisible = _ref.isVisible;
	  var size = _ref2.size;
	  var isResizing = _ref2.isResizing;
	  var fullWidth = _ref2.fullWidth;
	  var fullHeight = _ref2.fullHeight;

	  var posStyle = undefined;
	  var absSize = fluid ? size * 100 + '%' : size + 'px';

	  function getRestSize(fullSize) {
	    return fluid ? 100 - size * 100 + '%' : fullSize - size + 'px';
	  }

	  switch (position) {
	    case 'left':
	      posStyle = {
	        width: absSize,
	        left: isVisible ? 0 : '-' + absSize
	      };
	      break;
	    case 'right':
	      posStyle = {
	        left: isVisible ? getRestSize(fullWidth) : fullWidth,
	        width: absSize
	      };
	      break;
	    case 'top':
	      posStyle = {
	        top: isVisible ? 0 : '-' + absSize,
	        height: absSize
	      };
	      break;
	    case 'bottom':
	      posStyle = {
	        top: isVisible ? getRestSize(fullHeight) : fullHeight,
	        height: absSize
	      };
	      break;
	  }

	  var transitions = getTransitions(duration);

	  return [styles.dock, (0, _autoprefix2['default'])({
	    transition: [].concat(_toConsumableArray(transitions), [!isVisible && 'opacity 0.01s linear ' + duration / 1000 + 's']).filter(function (t) {
	      return t;
	    }).join(',')
	  }), dockStyle, (0, _autoprefix2['default'])(posStyle), isResizing && styles.dockResizing, !isVisible && styles.dockHidden, !isVisible && dockHiddenStyle];
	}

	function getDimStyles(_ref3, _ref4) {
	  var dimMode = _ref3.dimMode;
	  var dimStyle = _ref3.dimStyle;
	  var duration = _ref3.duration;
	  var isVisible = _ref3.isVisible;
	  var isTransitionStarted = _ref4.isTransitionStarted;

	  return [styles.dim, (0, _autoprefix2['default'])({
	    transition: 'opacity ' + duration / 1000 + 's ease-out'
	  }), dimStyle, dimMode === 'transparent' && styles.dimTransparent, !isVisible && styles.dimHidden, isTransitionStarted && isVisible && styles.dimAppear, isTransitionStarted && !isVisible && styles.dimDisappear];
	}

	function getResizerStyles(position) {
	  var resizerStyle = undefined;
	  var size = 10;

	  switch (position) {
	    case 'left':
	      resizerStyle = {
	        right: -size / 2,
	        width: size,
	        top: 0,
	        height: '100%',
	        cursor: 'col-resize'
	      };
	      break;
	    case 'right':
	      resizerStyle = {
	        left: -size / 2,
	        width: size,
	        top: 0,
	        height: '100%',
	        cursor: 'col-resize'
	      };
	      break;
	    case 'top':
	      resizerStyle = {
	        bottom: -size / 2,
	        height: size,
	        left: 0,
	        width: '100%',
	        cursor: 'row-resize'
	      };
	      break;
	    case 'bottom':
	      resizerStyle = {
	        top: -size / 2,
	        height: size,
	        left: 0,
	        width: '100%',
	        cursor: 'row-resize'
	      };
	      break;
	  }

	  return [styles.resizer, (0, _autoprefix2['default'])(resizerStyle)];
	}

	function getFullSize(position, fullWidth, fullHeight) {
	  return position === 'left' || position === 'right' ? fullWidth : fullHeight;
	}

	var Dock = (function (_Component) {
	  _inherits(Dock, _Component);

	  function Dock(props) {
	    var _this = this;

	    _classCallCheck(this, Dock);

	    _get(Object.getPrototypeOf(Dock.prototype), 'constructor', this).call(this, props);

	    this.transitionEnd = function () {
	      _this.setState({ isTransitionStarted: false });
	    };

	    this.hideDim = function () {
	      if (!_this.props.isVisible) {
	        _this.setState({ isDimHidden: true });
	      }
	    };

	    this.handleDimClick = function () {
	      if (_this.props.dimMode === 'opaque') {
	        _this.props.onVisibleChange && _this.props.onVisibleChange(false);
	      }
	    };

	    this.handleResize = function () {
	      if (window.requestAnimationFrame) {
	        window.requestAnimationFrame(_this.updateWindowSize.bind(_this, true));
	      } else {
	        _this.updateWindowSize(true);
	      }
	    };

	    this.updateWindowSize = function (windowResize) {
	      var sizeState = {
	        fullWidth: window.innerWidth,
	        fullHeight: window.innerHeight
	      };

	      if (windowResize) {
	        _this.setState(_extends({}, sizeState, {
	          isResizing: true,
	          isWindowResizing: windowResize
	        }));

	        _this.debouncedUpdateWindowSizeEnd();
	      } else {
	        _this.setState(sizeState);
	      }
	    };

	    this.updateWindowSizeEnd = function () {
	      _this.setState({
	        isResizing: false,
	        isWindowResizing: false
	      });
	    };

	    this.debouncedUpdateWindowSizeEnd = (0, _lodashDebounce2['default'])(this.updateWindowSizeEnd, 30);

	    this.handleWrapperLeave = function () {
	      _this.setState({ isResizing: false });
	    };

	    this.handleMouseDown = function () {
	      _this.setState({ isResizing: true });
	    };

	    this.handleMouseUp = function () {
	      _this.setState({ isResizing: false });
	    };

	    this.handleMouseMove = function (e) {
	      if (!_this.state.isResizing || _this.state.isWindowResizing) return;
	      e.preventDefault();

	      var _props = _this.props;
	      var position = _props.position;
	      var fluid = _props.fluid;
	      var _state = _this.state;
	      var fullWidth = _state.fullWidth;
	      var fullHeight = _state.fullHeight;
	      var isControlled = _state.isControlled;
	      var x = e.clientX;
	      var y = e.clientY;

	      var size = undefined;

	      switch (position) {
	        case 'left':
	          size = fluid ? x / fullWidth : x;
	          break;
	        case 'right':
	          size = fluid ? (fullWidth - x) / fullWidth : fullWidth - x;
	          break;
	        case 'top':
	          size = fluid ? y / fullHeight : y;
	          break;
	        case 'bottom':
	          size = fluid ? (fullHeight - y) / fullHeight : fullHeight - y;
	          break;
	      }

	      _this.props.onSizeChange && _this.props.onSizeChange(size);

	      if (!isControlled) {
	        _this.setState({ size: size });
	      }
	    };

	    this.state = {
	      isControlled: typeof props.size !== 'undefined',
	      size: props.size || props.defaultSize,
	      isDimHidden: !props.isVisible,
	      fullWidth: typeof window !== 'undefined' && window.innerWidth,
	      fullHeight: typeof window !== 'undefined' && window.innerHeight,
	      isTransitionStarted: false,
	      isWindowResizing: false
	    };
	  }

	  _createClass(Dock, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('mouseup', this.handleMouseUp);
	      window.addEventListener('mousemove', this.handleMouseMove);
	      window.addEventListener('resize', this.handleResize);

	      if (!window.fullWidth) {
	        this.updateWindowSize();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('mouseup', this.handleMouseUp);
	      window.removeEventListener('mousemove', this.handleMouseMove);
	      window.removeEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var isControlled = typeof nextProps.size !== 'undefined';

	      this.setState({ isControlled: isControlled });

	      if (isControlled && this.props.size !== nextProps.size) {
	        this.setState({ size: nextProps.size });
	      } else if (this.props.fluid !== nextProps.fluid) {
	        this.updateSize(nextProps);
	      }

	      if (this.props.isVisible !== nextProps.isVisible) {
	        this.setState({
	          isTransitionStarted: true
	        });
	      }
	    }
	  }, {
	    key: 'updateSize',
	    value: function updateSize(props) {
	      var _state2 = this.state;
	      var fullWidth = _state2.fullWidth;
	      var fullHeight = _state2.fullHeight;

	      this.setState({
	        size: props.fluid ? this.state.size / getFullSize(props.position, fullWidth, fullHeight) : getFullSize(props.position, fullWidth, fullHeight) * this.state.size
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _this2 = this;

	      if (this.props.isVisible !== prevProps.isVisible) {
	        if (!this.props.isVisible) {
	          window.setTimeout(function () {
	            return _this2.hideDim();
	          }, this.props.duration);
	        } else {
	          this.setState({ isDimHidden: false });
	        }

	        window.setTimeout(function () {
	          return _this2.setState({ isTransitionStarted: false });
	        }, 0);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var children = _props2.children;
	      var zIndex = _props2.zIndex;
	      var dimMode = _props2.dimMode;
	      var position = _props2.position;
	      var isVisible = _props2.isVisible;
	      var _state3 = this.state;
	      var isResizing = _state3.isResizing;
	      var size = _state3.size;
	      var isDimHidden = _state3.isDimHidden;

	      var dimStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDimStyles(this.props, this.state))));
	      var dockStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getDockStyles(this.props, this.state))));
	      var resizerStyles = _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(getResizerStyles(position))));

	      return _react2['default'].createElement(
	        'div',
	        { style: (0, _objectAssign2['default'])({}, styles.wrapper, { zIndex: zIndex }) },
	        dimMode !== 'none' && !isDimHidden && _react2['default'].createElement('div', { style: dimStyles, onClick: this.handleDimClick }),
	        _react2['default'].createElement(
	          'div',
	          { style: dockStyles },
	          _react2['default'].createElement('div', { style: resizerStyles,
	            onMouseDown: this.handleMouseDown }),
	          _react2['default'].createElement(
	            'div',
	            { style: styles.dockContent },
	            typeof children === 'function' ? children({
	              position: position,
	              isResizing: isResizing,
	              size: size,
	              isVisible: isVisible
	            }) : children
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      position: _react.PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
	      zIndex: _react.PropTypes.number,
	      fluid: _react.PropTypes.bool,
	      size: _react.PropTypes.number,
	      defaultSize: _react.PropTypes.number,
	      dimMode: _react.PropTypes.oneOf(['none', 'transparent', 'opaque']),
	      isVisible: _react.PropTypes.bool,
	      onVisibleChange: _react.PropTypes.func,
	      onSizeChange: _react.PropTypes.func,
	      dimStyle: _react.PropTypes.object,
	      dockStyle: _react.PropTypes.object,
	      duration: _react.PropTypes.number
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      position: 'left',
	      zIndex: 99999999,
	      fluid: true,
	      defaultSize: 0.3,
	      dimMode: 'opaque',
	      duration: 200
	    },
	    enumerable: true
	  }]);

	  return Dock;
	})(_react.Component);

	exports['default'] = Dock;
	module.exports = exports['default'];

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _getOwnPropertyDescriptor = __webpack_require__(380);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(378), __esModule: true };

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(379);
	module.exports = __webpack_require__(6).Object.getPrototypeOf;

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(11);

	__webpack_require__(294)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(381), __esModule: true };

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(10);
	__webpack_require__(382);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(289);

	__webpack_require__(294)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(384);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(385);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(386);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(253), __esModule: true };

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(251), __esModule: true };

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _symbol = __webpack_require__(387);

	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }

	exports.default = function (obj) {
	  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(388), __esModule: true };

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(389);
	__webpack_require__(394);
	module.exports = __webpack_require__(6).Symbol;

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(10)
	  , global         = __webpack_require__(5)
	  , has            = __webpack_require__(278)
	  , DESCRIPTORS    = __webpack_require__(277)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(274)
	  , $fails         = __webpack_require__(15)
	  , shared         = __webpack_require__(283)
	  , setToStringTag = __webpack_require__(281)
	  , uid            = __webpack_require__(284)
	  , wks            = __webpack_require__(282)
	  , keyOf          = __webpack_require__(390)
	  , $names         = __webpack_require__(391)
	  , enumKeys       = __webpack_require__(392)
	  , isArray        = __webpack_require__(393)
	  , anObject       = __webpack_require__(257)
	  , toIObject      = __webpack_require__(289)
	  , createDesc     = __webpack_require__(276)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(273)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(10)
	  , toIObject = __webpack_require__(289);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(289)
	  , getNames  = __webpack_require__(10).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(10);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(14);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 394 */
/***/ function(module, exports) {

	

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(396);

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(397);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(260), __esModule: true };

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(399);

/***/ },
/* 399 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(402);

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(403);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(404), __esModule: true };

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(269);
	__webpack_require__(405);
	module.exports = __webpack_require__(6).Array.from;

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(7)
	  , $export     = __webpack_require__(4)
	  , toObject    = __webpack_require__(11)
	  , call        = __webpack_require__(406)
	  , isArrayIter = __webpack_require__(407)
	  , toLength    = __webpack_require__(408)
	  , getIterFn   = __webpack_require__(308);
	$export($export.S + $export.F * !__webpack_require__(409)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(257);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(279)
	  , ITERATOR   = __webpack_require__(282)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(271)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(282)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(292), __esModule: true };

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(412);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }

	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }

	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }

	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }

	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = debounce;


/***/ },
/* 412 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;


/***/ },
/* 413 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	// Same as https://github.com/SimenB/react-vendor-prefixes/blob/master/src/index.js,
	// but dumber

	'use strict';

	var _extends = __webpack_require__(400)['default'];

	var _Object$keys = __webpack_require__(410)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autoprefix;
	var vendorSpecificProperties = ['animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'backfaceVisibility', 'backgroundClip', 'borderImage', 'borderImageSlice', 'boxSizing', 'boxShadow', 'contentColumns', 'transform', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'perspective', 'perspectiveOrigin', 'userSelect'];

	var prefixes = ['Moz', 'Webkit', 'ms', 'O'];

	function prefixProp(key, value) {
	  return prefixes.reduce(function (obj, pre) {
	    return (obj[pre + key[0].toUpperCase() + key.substr(1)] = value, obj);
	  }, {});
	}

	function autoprefix(style) {
	  return _Object$keys(style).reduce(function (obj, key) {
	    return vendorSpecificProperties.indexOf(key) !== -1 ? _extends({}, obj, prefixProp(key, style[key])) : obj;
	  }, style);
	}

	module.exports = exports['default'];

/***/ },
/* 415 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var POSITIONS = exports.POSITIONS = ['left', 'top', 'right', 'bottom'];

/***/ },
/* 416 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.toggleVisibility = toggleVisibility;
	exports.changePosition = changePosition;
	exports.changeSize = changeSize;
	var TOGGLE_VISIBILITY = exports.TOGGLE_VISIBILITY = '@@redux-devtools-log-monitor/TOGGLE_VISIBILITY';
	function toggleVisibility() {
	  return { type: TOGGLE_VISIBILITY };
	}

	var CHANGE_POSITION = exports.CHANGE_POSITION = '@@redux-devtools-log-monitor/CHANGE_POSITION';
	function changePosition() {
	  return { type: CHANGE_POSITION };
	}

	var CHANGE_SIZE = exports.CHANGE_SIZE = '@@redux-devtools-log-monitor/CHANGE_SIZE';
	function changeSize(size) {
	  return { type: CHANGE_SIZE, size: size };
	}

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = reducer;

	var _actions = __webpack_require__(416);

	var _constants = __webpack_require__(415);

	function position(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultPosition : arguments[1];
	  var action = arguments[2];

	  return action.type === _actions.CHANGE_POSITION ? _constants.POSITIONS[(_constants.POSITIONS.indexOf(state) + 1) % _constants.POSITIONS.length] : state;
	}

	function size(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultSize : arguments[1];
	  var action = arguments[2];

	  return action.type === _actions.CHANGE_SIZE ? action.size : state;
	}

	function isVisible(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? props.defaultIsVisible : arguments[1];
	  var action = arguments[2];

	  return action.type === _actions.TOGGLE_VISIBILITY ? !state : state;
	}

	function childMonitorState(props, state, action) {
	  var child = props.children;
	  return child.type.update(child.props, state, action);
	}

	function reducer(props) {
	  var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var action = arguments[2];

	  return {
	    position: position(props, state.position, action),
	    isVisible: isVisible(props, state.isVisible, action),
	    size: size(props, state.size, action),
	    childMonitorState: childMonitorState(props, state.childMonitorState, action)
	  };
	}

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var keycodes = __webpack_require__(419);

	function assertKeyString(s) {
	  if (!/^(ctrl-|shift-|alt-|meta-){0,4}\w+$/.test(s))
	    throw new Error('The string to parse needs to be of the format "c", "ctrl-c", "shift-ctrl-c".');
	}

	module.exports = function parse(s) {
	  var keyString = s.trim().toLowerCase();

	  assertKeyString(keyString);

	  var key = {
	      name     :  undefined
	    , ctrl     :  false
	    , meta     :  false
	    , shift    :  false
	    , alt      :  false
	    , sequence :  undefined
	  }
	  , parts = keyString.split('-')
	  , c;

	  key.name = parts.pop();
	  while((c = parts.pop())) key[c] = true;
	  key.sequence = key.ctrl 
	    ? keycodes.ctrl[key.name] || key.name
	    : keycodes.nomod[key.name] || key.name;

	  // uppercase sequence for single chars when shift was pressed
	  if (key.shift && key.sequence && key.sequence.length === 1)
	    key.sequence = key.sequence.toUpperCase();

	  return key;
	};


/***/ },
/* 419 */
/***/ function(module, exports) {

	// Most of these are according to this table: http://www.ssicom.org/js/x171166.htm
	// However where nodejs readline diverges, they are adjusted to conform to it
	module.exports = {
	  nomod: {
	      escape: '\u001b'
	    , space: ' ' // actually '\u0020'
	    }
	  , ctrl: {
	        ' ': '\u0000'
	      , 'a': '\u0001'
	      , 'b': '\u0002'
	      , 'c': '\u0003'
	      , 'd': '\u0004'
	      , 'e': '\u0005'
	      , 'f': '\u0006'
	      , 'g': '\u0007'
	      , 'h': '\u0008'
	      , 'i': '\u0009'
	      , 'j': '\u000a'
	      , 'k': '\u000b'
	      , 'm': '\u000c'
	      , 'n': '\u000d'
	      , 'l': '\u000e'
	      , 'o': '\u000f'
	      , 'p': '\u0010'
	      , 'q': '\u0011'
	      , 'r': '\u0012'
	      , 's': '\u0013'
	      , 't': '\u0014'
	      , 'u': '\u0015'
	      , 'v': '\u0016'
	      , 'w': '\u0017'
	      , 'x': '\u0018'
	      , 'y': '\u0019'
	      , 'z': '\u001a'
	      , '[': '\u001b'
	      , '\\':'\u001c'
	      , ']': '\u001d'
	      , '^': '\u001e'
	      , '_': '\u001f'

	      , 'space': '\u0000'
	    }
	};


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _componentsCreateAll = __webpack_require__(421);

	var _componentsCreateAll2 = _interopRequireDefault(_componentsCreateAll);

	var _createAll = _componentsCreateAll2['default'](_react2['default']);

	var Provider = _createAll.Provider;
	var connect = _createAll.connect;
	exports.Provider = Provider;
	exports.connect = connect;

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createAll;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createProvider = __webpack_require__(422);

	var _createProvider2 = _interopRequireDefault(_createProvider);

	var _createConnect = __webpack_require__(424);

	var _createConnect2 = _interopRequireDefault(_createConnect);

	function createAll(React) {
	  var Provider = _createProvider2['default'](React);
	  var connect = _createConnect2['default'](React);

	  return { Provider: Provider, connect: connect };
	}

	module.exports = exports['default'];

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createProvider;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsCreateStoreShape = __webpack_require__(423);

	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

	function isUsingOwnerContext(React) {
	  var version = React.version;

	  if (typeof version !== 'string') {
	    return true;
	  }

	  var sections = version.split('.');
	  var major = parseInt(sections[0], 10);
	  var minor = parseInt(sections[1], 10);

	  return major === 0 && minor === 13;
	}

	function createProvider(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;
	  var Children = React.Children;

	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);
	  var requireFunctionChild = isUsingOwnerContext(React);

	  var didWarnAboutChild = false;
	  function warnAboutFunctionChild() {
	    if (didWarnAboutChild || requireFunctionChild) {
	      return;
	    }

	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.14 and later versions, you no longer need to ' + 'wrap <Provider> child into a function.');
	  }
	  function warnAboutElementChild() {
	    if (didWarnAboutChild || !requireFunctionChild) {
	      return;
	    }

	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.13, you need to ' + 'wrap <Provider> child into a function. ' + 'This restriction will be removed with React 0.14.');
	  }

	  var didWarnAboutReceivingStore = false;
	  function warnAboutReceivingStore() {
	    if (didWarnAboutReceivingStore) {
	      return;
	    }

	    didWarnAboutReceivingStore = true;
	    console.error( // eslint-disable-line no-console
	    '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	  }

	  var Provider = (function (_Component) {
	    _inherits(Provider, _Component);

	    Provider.prototype.getChildContext = function getChildContext() {
	      return { store: this.store };
	    };

	    function Provider(props, context) {
	      _classCallCheck(this, Provider);

	      _Component.call(this, props, context);
	      this.store = props.store;
	    }

	    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var store = this.store;
	      var nextStore = nextProps.store;

	      if (store !== nextStore) {
	        warnAboutReceivingStore();
	      }
	    };

	    Provider.prototype.render = function render() {
	      var children = this.props.children;

	      if (typeof children === 'function') {
	        warnAboutFunctionChild();
	        children = children();
	      } else {
	        warnAboutElementChild();
	      }

	      return Children.only(children);
	    };

	    return Provider;
	  })(Component);

	  Provider.childContextTypes = {
	    store: storeShape.isRequired
	  };
	  Provider.propTypes = {
	    store: storeShape.isRequired,
	    children: (requireFunctionChild ? PropTypes.func : PropTypes.element).isRequired
	  };

	  return Provider;
	}

	module.exports = exports['default'];

/***/ },
/* 423 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = createStoreShape;

	function createStoreShape(PropTypes) {
	  return PropTypes.shape({
	    subscribe: PropTypes.func.isRequired,
	    dispatch: PropTypes.func.isRequired,
	    getState: PropTypes.func.isRequired
	  });
	}

	module.exports = exports["default"];

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createConnect;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsCreateStoreShape = __webpack_require__(423);

	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

	var _utilsShallowEqual = __webpack_require__(425);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsIsPlainObject = __webpack_require__(426);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsWrapActionCreators = __webpack_require__(427);

	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);

	var _hoistNonReactStatics = __webpack_require__(243);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function createConnect(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;

	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	    var shouldSubscribe = Boolean(mapStateToProps);
	    var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	    var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	    var finalMergeProps = mergeProps || defaultMergeProps;
	    var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	    var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	    var _options$pure = options.pure;
	    var pure = _options$pure === undefined ? true : _options$pure;

	    // Helps track hot reloading.
	    var version = nextVersion++;

	    function computeStateProps(store, props) {
	      var state = store.getState();
	      var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);

	      _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	      return stateProps;
	    }

	    function computeDispatchProps(store, props) {
	      var dispatch = store.dispatch;

	      var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);

	      _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	      return dispatchProps;
	    }

	    function _computeNextState(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	      return mergedProps;
	    }

	    return function wrapWithConnect(WrappedComponent) {
	      var Connect = (function (_Component) {
	        _inherits(Connect, _Component);

	        Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	          if (!pure) {
	            this.updateStateProps(nextProps);
	            this.updateDispatchProps(nextProps);
	            this.updateState(nextProps);
	            return true;
	          }

	          var storeChanged = nextState.storeState !== this.state.storeState;
	          var propsChanged = !_utilsShallowEqual2['default'](nextProps, this.props);
	          var mapStateProducedChange = false;
	          var dispatchPropsChanged = false;

	          if (storeChanged || propsChanged && shouldUpdateStateProps) {
	            mapStateProducedChange = this.updateStateProps(nextProps);
	          }

	          if (propsChanged && shouldUpdateDispatchProps) {
	            dispatchPropsChanged = this.updateDispatchProps(nextProps);
	          }

	          if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
	            this.updateState(nextProps);
	            return true;
	          }

	          return false;
	        };

	        function Connect(props, context) {
	          _classCallCheck(this, Connect);

	          _Component.call(this, props, context);
	          this.version = version;
	          this.store = props.store || context.store;

	          _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));

	          this.stateProps = computeStateProps(this.store, props);
	          this.dispatchProps = computeDispatchProps(this.store, props);
	          this.state = { storeState: null };
	          this.updateState();
	        }

	        Connect.prototype.computeNextState = function computeNextState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          return _computeNextState(this.stateProps, this.dispatchProps, props);
	        };

	        Connect.prototype.updateStateProps = function updateStateProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          var nextStateProps = computeStateProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
	            return false;
	          }

	          this.stateProps = nextStateProps;
	          return true;
	        };

	        Connect.prototype.updateDispatchProps = function updateDispatchProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          var nextDispatchProps = computeDispatchProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
	            return false;
	          }

	          this.dispatchProps = nextDispatchProps;
	          return true;
	        };

	        Connect.prototype.updateState = function updateState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          this.nextState = this.computeNextState(props);
	        };

	        Connect.prototype.isSubscribed = function isSubscribed() {
	          return typeof this.unsubscribe === 'function';
	        };

	        Connect.prototype.trySubscribe = function trySubscribe() {
	          if (shouldSubscribe && !this.unsubscribe) {
	            this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	            this.handleChange();
	          }
	        };

	        Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	          if (this.unsubscribe) {
	            this.unsubscribe();
	            this.unsubscribe = null;
	          }
	        };

	        Connect.prototype.componentDidMount = function componentDidMount() {
	          this.trySubscribe();
	        };

	        Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	          this.tryUnsubscribe();
	        };

	        Connect.prototype.handleChange = function handleChange() {
	          if (!this.unsubscribe) {
	            return;
	          }

	          this.setState({
	            storeState: this.store.getState()
	          });
	        };

	        Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	          return this.refs.wrappedInstance;
	        };

	        Connect.prototype.render = function render() {
	          return React.createElement(WrappedComponent, _extends({ ref: 'wrappedInstance'
	          }, this.nextState));
	        };

	        return Connect;
	      })(Component);

	      Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	      Connect.WrappedComponent = WrappedComponent;
	      Connect.contextTypes = {
	        store: storeShape
	      };
	      Connect.propTypes = {
	        store: storeShape
	      };

	      if (false) {
	        Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	          if (this.version === version) {
	            return;
	          }

	          // We are hot reloading!
	          this.version = version;

	          // Update the state and bindings.
	          this.trySubscribe();
	          this.updateStateProps();
	          this.updateDispatchProps();
	          this.updateState();
	        };
	      }

	      return _hoistNonReactStatics2['default'](Connect, WrappedComponent);
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 425 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },
/* 426 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapActionCreators;

	var _redux = __webpack_require__(235);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(429);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(462);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	var _IndexLink2 = __webpack_require__(463);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	exports.IndexLink = _IndexLink3['default'];

	/* components (configuration) */

	var _IndexRedirect2 = __webpack_require__(464);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	exports.IndexRedirect = _IndexRedirect3['default'];

	var _IndexRoute2 = __webpack_require__(466);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	exports.IndexRoute = _IndexRoute3['default'];

	var _Redirect2 = __webpack_require__(465);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(467);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _History2 = __webpack_require__(468);

	var _History3 = _interopRequireDefault(_History2);

	exports.History = _History3['default'];

	var _Lifecycle2 = __webpack_require__(469);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	exports.Lifecycle = _Lifecycle3['default'];

	var _RouteContext2 = __webpack_require__(470);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	exports.RouteContext = _RouteContext3['default'];

	/* utils */

	var _useRoutes2 = __webpack_require__(451);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	exports.useRoutes = _useRoutes3['default'];

	var _RouteUtils = __webpack_require__(447);

	exports.createRoutes = _RouteUtils.createRoutes;

	var _RoutingContext2 = __webpack_require__(448);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	exports.RoutingContext = _RoutingContext3['default'];

	var _PropTypes2 = __webpack_require__(461);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _match2 = __webpack_require__(471);

	var _match3 = _interopRequireDefault(_match2);

	exports.match = _match3['default'];

	var _Router4 = _interopRequireDefault(_Router2);

	exports['default'] = _Router4['default'];

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _historyLibCreateHashHistory = __webpack_require__(431);

	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

	var _RouteUtils = __webpack_require__(447);

	var _RoutingContext = __webpack_require__(448);

	var _RoutingContext2 = _interopRequireDefault(_RoutingContext);

	var _useRoutes = __webpack_require__(451);

	var _useRoutes2 = _interopRequireDefault(_useRoutes);

	var _PropTypes = __webpack_require__(461);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RoutingContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = (function (_Component) {
	  _inherits(Router, _Component);

	  function Router(props, context) {
	    _classCallCheck(this, Router);

	    _Component.call(this, props, context);

	    this.state = {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  }

	  Router.prototype.handleError = function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  };

	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var history = _props.history;
	    var children = _props.children;
	    var routes = _props.routes;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    var createHistory = history ? function () {
	      return history;
	    } : _historyLibCreateHashHistory2['default'];

	    this.history = _useRoutes2['default'](createHistory)({
	      routes: _RouteUtils.createRoutes(routes || children),
	      parseQueryString: parseQueryString,
	      stringifyQuery: stringifyQuery
	    });

	    this._unlisten = this.history.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  };

	  /* istanbul ignore next: sanity check */

	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	     false ? _warning2['default'](nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : undefined;

	     false ? _warning2['default']((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : undefined;
	  };

	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  };

	  Router.prototype.render = function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props2 = this.props;
	    var RoutingContext = _props2.RoutingContext;
	    var createElement = _props2.createElement;

	    var props = _objectWithoutProperties(_props2, ['RoutingContext', 'createElement']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return _react2['default'].createElement(RoutingContext, _extends({}, props, {
	      history: this.history,
	      createElement: createElement,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components
	    }));
	  };

	  return Router;
	})(_react.Component);

	Router.propTypes = {
	  history: object,
	  children: _PropTypes.routes,
	  routes: _PropTypes.routes, // alias for children
	  RoutingContext: func.isRequired,
	  createElement: func,
	  onError: func,
	  onUpdate: func,
	  parseQueryString: func,
	  stringifyQuery: func
	};

	Router.defaultProps = {
	  RoutingContext: _RoutingContext2['default']
	};

	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (false) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(432);

	var _ExecutionEnvironment = __webpack_require__(433);

	var _DOMUtils = __webpack_require__(434);

	var _DOMStateStorage = __webpack_require__(435);

	var _createDOMHistory = __webpack_require__(436);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	var _parsePath = __webpack_require__(443);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  false ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	         false ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	     false ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	     false ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	     false ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	     false ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	     false ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];

/***/ },
/* 432 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 433 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 434 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  // FIXME: Work around our browser history not working correctly on Chrome
	  // iOS: https://github.com/rackt/react-router/issues/2565
	  if (ua.indexOf('CriOS') !== -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededError = 'QuotaExceededError';
	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       false ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	       false ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       false ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(433);

	var _DOMUtils = __webpack_require__(434);

	var _createHistory = __webpack_require__(437);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ?  false ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	//import warning from 'warning'
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(438);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _AsyncUtils = __webpack_require__(441);

	var _Actions = __webpack_require__(432);

	var _createLocation2 = __webpack_require__(442);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(445);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _parsePath = __webpack_require__(443);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(446);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var keyLength = options.keyLength;
	  var getUserConfirmation = options.getUserConfirmation;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	      //warning(
	      //  false,
	      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
	      //  'location descriptor instead'
	      //)

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _parsePath2['default'](path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _parsePath2['default'](path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(439);
	var isArguments = __webpack_require__(440);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 439 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 440 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 441 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	//import warning from 'warning'
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Actions = __webpack_require__(432);

	var _parsePath = __webpack_require__(443);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _parsePath2['default'](location);

	  if (typeof action === 'object') {
	    //warning(
	    //  false,
	    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
	    //  'location descriptor instead'
	    //)

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var _extractPath = __webpack_require__(444);

	var _extractPath2 = _interopRequireDefault(_extractPath);

	function parsePath(path) {
	  var pathname = _extractPath2['default'](path);
	  var search = '';
	  var hash = '';

	   false ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}

	exports['default'] = parsePath;
	module.exports = exports['default'];

/***/ },
/* 444 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	exports["default"] = extractPath;
	module.exports = exports["default"];

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	     false ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];

/***/ },
/* 446 */
/***/ function(module, exports) {

	//import warning from 'warning'

	"use strict";

	exports.__esModule = true;
	function deprecate(fn) {
	  return fn;
	  //return function () {
	  //  warning(false, '[history] ' + message)
	  //  return fn.apply(this, arguments)
	  //}
	}

	exports["default"] = deprecate;
	module.exports = exports["default"];

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	function isValidChild(object) {
	  return object == null || _react2['default'].isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      /* istanbul ignore if: error logging */
	      if (error instanceof Error)  false ? _warning2['default'](false, error.message) : undefined;
	    }
	  }
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *   
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */

	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2['default'].Children.forEach(children, function (element) {
	    if (_react2['default'].isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */

	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(447);

	var _getRouteParams = __webpack_require__(449);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _React$PropTypes = _react2['default'].PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RoutingContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RoutingContext = (function (_Component) {
	  _inherits(RoutingContext, _Component);

	  function RoutingContext() {
	    _classCallCheck(this, RoutingContext);

	    _Component.apply(this, arguments);
	  }

	  RoutingContext.prototype.getChildContext = function getChildContext() {
	    var _props = this.props;
	    var history = _props.history;
	    var location = _props.location;

	    return { history: history, location: location };
	  };

	  RoutingContext.prototype.createElement = function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  };

	  RoutingContext.prototype.render = function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = _getRouteParams2['default'](route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if (_RouteUtils.isReactChildren(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (element.hasOwnProperty(prop)) props[prop] = element[prop];
	          }
	        }

	        if (typeof components === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (components.hasOwnProperty(key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2['default'].isValidElement(element)) ?  false ? _invariant2['default'](false, 'The root route must render a single element') : _invariant2['default'](false) : undefined;

	    return element;
	  };

	  return RoutingContext;
	})(_react.Component);

	RoutingContext.propTypes = {
	  history: object.isRequired,
	  createElement: func.isRequired,
	  location: object.isRequired,
	  routes: array.isRequired,
	  params: object.isRequired,
	  components: array.isRequired
	};

	RoutingContext.defaultProps = {
	  createElement: _react2['default'].createElement
	};

	RoutingContext.childContextTypes = {
	  history: object.isRequired,
	  location: object.isRequired
	};

	exports['default'] = RoutingContext;
	module.exports = exports['default'];

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(450);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  for (var p in params) {
	    if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];
	  }return routeParams;
	}

	exports['default'] = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = undefined,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '([\\s\\S]*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */

	function matchPattern(pattern, pathname) {
	  // Make leading slashes consistent between pattern and pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  regexpSource += '/*'; // Capture path separators

	  // Special-case patterns like '*' for catch-all routes.
	  var captureRemaining = tokens[tokens.length - 1] !== '*';

	  if (captureRemaining) {
	    // This will match newlines in the remaining path.
	    regexpSource += '([\\s\\S]*?)';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

	  var remainingPathname = undefined,
	      paramValues = undefined;
	  if (match != null) {
	    if (captureRemaining) {
	      remainingPathname = match.pop();
	      var matchedPath = match[0].substr(0, match[0].length - remainingPathname.length);

	      // If we didn't match the entire pathname, then make sure that the match
	      // we did get ends at a path separator (potentially the one we added
	      // above at the beginning of the path, if the actual match was empty).
	      if (remainingPathname && matchedPath.charAt(matchedPath.length - 1) !== '/') {
	        return {
	          remainingPathname: null,
	          paramNames: paramNames,
	          paramValues: null
	        };
	      }
	    } else {
	      // If this matched at all, then the match was the entire pathname.
	      remainingPathname = '';
	    }

	    paramValues = match.slice(1).map(function (v) {
	      return v != null ? decodeURIComponent(v) : v;
	    });
	  } else {
	    remainingPathname = paramValues = null;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, pathname);

	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }

	  return null;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */

	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = undefined,
	      paramName = undefined,
	      paramValue = undefined;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ?  false ? _invariant2['default'](false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : _invariant2['default'](false) : undefined;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ?  false ? _invariant2['default'](false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : _invariant2['default'](false) : undefined;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var _historyLibActions = __webpack_require__(432);

	var _historyLibUseQueries = __webpack_require__(452);

	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

	var _computeChangedRoutes2 = __webpack_require__(455);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(456);

	var _isActive2 = __webpack_require__(458);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(459);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(460);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var routes = options.routes;

	    var historyOptions = _objectWithoutProperties(options, ['routes']);

	    var history = _historyLibUseQueries2['default'](createHistory)(historyOptions);
	    var state = {};

	    function isActive(pathname, query) {
	      var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	      return _isActive3['default'](pathname, query, indexOnly, state.location, state.routes, state.params);
	    }

	    function createLocationFromRedirectInfo(_ref) {
	      var pathname = _ref.pathname;
	      var query = _ref.query;
	      var state = _ref.state;

	      return history.createLocation(history.createPath(pathname, query), state, _historyLibActions.REPLACE);
	    }

	    var partialNextState = undefined;

	    function match(location, callback) {
	      if (partialNextState && partialNextState.location === location) {
	        // Continue from where we left off.
	        finishMatch(partialNextState, callback);
	      } else {
	        _matchRoutes2['default'](routes, location, function (error, nextState) {
	          if (error) {
	            callback(error);
	          } else if (nextState) {
	            finishMatch(_extends({}, nextState, { location: location }), callback);
	          } else {
	            callback();
	          }
	        });
	      }
	    }

	    function finishMatch(nextState, callback) {
	      var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);

	      var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	      var enterRoutes = _computeChangedRoutes.enterRoutes;

	      _TransitionUtils.runLeaveHooks(leaveRoutes);

	      _TransitionUtils.runEnterHooks(enterRoutes, nextState, function (error, redirectInfo) {
	        if (error) {
	          callback(error);
	        } else if (redirectInfo) {
	          callback(null, createLocationFromRedirectInfo(redirectInfo));
	        } else {
	          // TODO: Fetch components after state is updated.
	          _getComponents2['default'](nextState, function (error, components) {
	            if (error) {
	              callback(error);
	            } else {
	              // TODO: Make match a pure function and have some other API
	              // for "match and update state".
	              callback(null, null, state = _extends({}, nextState, { components: components }));
	            }
	          });
	        }
	      });
	    }

	    var RouteGuid = 1;

	    function getRouteID(route) {
	      return route.__id__ || (route.__id__ = RouteGuid++);
	    }

	    var RouteHooks = {};

	    function getRouteHooksForRoutes(routes) {
	      return routes.reduce(function (hooks, route) {
	        hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	        return hooks;
	      }, []);
	    }

	    function transitionHook(location, callback) {
	      _matchRoutes2['default'](routes, location, function (error, nextState) {
	        if (nextState == null) {
	          // TODO: We didn't actually match anything, but hang
	          // onto error/nextState so we don't have to matchRoutes
	          // again in the listen callback.
	          callback();
	          return;
	        }

	        // Cache some state here so we don't have to
	        // matchRoutes() again in the listen callback.
	        partialNextState = _extends({}, nextState, { location: location });

	        var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, partialNextState).leaveRoutes);

	        var result = undefined;
	        for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	          // Passing the location arg here indicates to
	          // the user that this is a transition hook.
	          result = hooks[i](location);
	        }

	        callback(result);
	      });
	    }

	    function beforeUnloadHook() {
	      // Synchronously check to see if any route hooks want
	      // to prevent the current window/tab from closing.
	      if (state.routes) {
	        var hooks = getRouteHooksForRoutes(state.routes);

	        var message = undefined;
	        for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	          // Passing no args indicates to the user that this is a
	          // beforeunload hook. We don't know the next location.
	          message = hooks[i]();
	        }

	        return message;
	      }
	    }

	    var unlistenBefore = undefined,
	        unlistenBeforeUnload = undefined;

	    /**
	     * Registers the given hook function to run before leaving the given route.
	     *
	     * During a normal transition, the hook function receives the next location
	     * as its only argument and must return either a) a prompt message to show
	     * the user, to make sure they want to leave the page or b) false, to prevent
	     * the transition.
	     *
	     * During the beforeunload event (in browsers) the hook receives no arguments.
	     * In this case it must return a prompt message to prevent the transition.
	     *
	     * Returns a function that may be used to unbind the listener.
	     */
	    function listenBeforeLeavingRoute(route, hook) {
	      // TODO: Warn if they register for a route that isn't currently
	      // active. They're probably doing something wrong, like re-creating
	      // route objects on every location change.
	      var routeID = getRouteID(route);
	      var hooks = RouteHooks[routeID];

	      if (hooks == null) {
	        var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	        hooks = RouteHooks[routeID] = [hook];

	        if (thereWereNoRouteHooks) {
	          // setup transition & beforeunload hooks
	          unlistenBefore = history.listenBefore(transitionHook);

	          if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	        }
	      } else if (hooks.indexOf(hook) === -1) {
	        hooks.push(hook);
	      }

	      return function () {
	        var hooks = RouteHooks[routeID];

	        if (hooks != null) {
	          var newHooks = hooks.filter(function (item) {
	            return item !== hook;
	          });

	          if (newHooks.length === 0) {
	            delete RouteHooks[routeID];

	            if (!hasAnyProperties(RouteHooks)) {
	              // teardown transition & beforeunload hooks
	              if (unlistenBefore) {
	                unlistenBefore();
	                unlistenBefore = null;
	              }

	              if (unlistenBeforeUnload) {
	                unlistenBeforeUnload();
	                unlistenBeforeUnload = null;
	              }
	            }
	          } else {
	            RouteHooks[routeID] = newHooks;
	          }
	        }
	      };
	    }

	    /**
	     * This is the API for stateful environments. As the location
	     * changes, we update state and call the listener. We can also
	     * gracefully handle errors and redirects.
	     */
	    function listen(listener) {
	      // TODO: Only use a single history listener. Otherwise we'll
	      // end up with multiple concurrent calls to match.
	      return history.listen(function (location) {
	        if (state.location === location) {
	          listener(null, state);
	        } else {
	          match(location, function (error, redirectLocation, nextState) {
	            if (error) {
	              listener(error);
	            } else if (redirectLocation) {
	              history.transitionTo(redirectLocation);
	            } else if (nextState) {
	              listener(null, nextState);
	            } else {
	               false ? _warning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
	            }
	          });
	        }
	      });
	    }

	    return _extends({}, history, {
	      isActive: isActive,
	      match: match,
	      listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	      listen: listen
	    });
	  };
	}

	exports['default'] = useRoutes;
	module.exports = exports['default'];

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(453);

	var _runTransitionHook = __webpack_require__(445);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _parsePath = __webpack_require__(443);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(446);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);

	    var history = createHistory(historyOptions);

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var queryString = undefined;
	      if (!query || (queryString = stringifyQuery(query)) === '') return location;

	       false ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase + (searchBase ? '&' : '?') + queryString;

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      //warning(
	      //  !query,
	      //  'the query argument to createPath is deprecated; use a location descriptor instead'
	      //)
	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      //warning(
	      //  !query,
	      //  'the query argument to createHref is deprecated; use a location descriptor instead'
	      //)
	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation() {
	      return addQuery(history.createLocation.apply(history, arguments));
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(454);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 454 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(450);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = undefined,
	      enterRoutes = undefined;
	  if (prevRoutes) {
	    leaveRoutes = prevRoutes.filter(function (route) {
	      return nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });

	    // onLeave hooks start at the leaf route.
	    leaveRoutes.reverse();

	    enterRoutes = nextRoutes.filter(function (route) {
	      return prevRoutes.indexOf(route) === -1 || leaveRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leaveRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports['default'] = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(457);

	function createEnterHook(hook, route) {
	  return function (a, b, callback) {
	    hook.apply(route, arguments);

	    if (hook.length < 3) {
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createEnterHook(route.onEnter, route));

	    return hooks;
	  }, []);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replaceState, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replaceState short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */

	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);

	  if (!hooks.length) {
	    callback();
	    return;
	  }

	  var redirectInfo = undefined;
	  function replaceState(state, pathname, query) {
	    redirectInfo = { pathname: pathname, query: query, state: state };
	  }

	  _AsyncUtils.loopAsync(hooks.length, function (index, next, done) {
	    hooks[index](nextState, replaceState, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */

	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	  }
	}

/***/ },
/* 457 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(450);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if (typeof a === 'object') {
	    for (var p in a) {
	      if (!a.hasOwnProperty(p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!b.hasOwnProperty(p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	function paramsAreActive(paramNames, paramValues, activeParams) {
	  // FIXME: This doesn't work on repeated params in activeParams.
	  return paramNames.every(function (paramName, index) {
	    return String(paramValues[index]) === String(activeParams[paramName]);
	  });
	}

	function getMatchingRouteIndex(pathname, activeRoutes, activeParams) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  for (var i = 0, len = activeRoutes.length; i < len; ++i) {
	    var route = activeRoutes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null) {
	      var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	      remainingPathname = matched.remainingPathname;
	      paramNames = [].concat(paramNames, matched.paramNames);
	      paramValues = [].concat(paramValues, matched.paramValues);
	    }

	    if (remainingPathname === '' && route.path && paramsAreActive(paramNames, paramValues, activeParams)) return i;
	  }

	  return null;
	}

	/**
	 * Returns true if the given pathname matches the active routes
	 * and params.
	 */
	function routeIsActive(pathname, routes, params, indexOnly) {
	  var i = getMatchingRouteIndex(pathname, routes, params);

	  if (i === null) {
	    // No match.
	    return false;
	  } else if (!indexOnly) {
	    // Any match is good enough.
	    return true;
	  }

	  // If any remaining routes past the match index have paths, then we can't
	  // be on the index route.
	  return routes.slice(i + 1).every(function (route) {
	    return !route.path;
	  });
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(pathname, query, indexOnly, location, routes, params) {
	  if (location == null) return false;

	  if (!routeIsActive(pathname, routes, params, indexOnly)) return false;

	  return queryIsActive(query, location.query);
	}

	exports['default'] = isActive;
	module.exports = exports['default'];

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(457);

	function getComponentsForRoute(location, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponent) {
	    route.getComponent(location, callback);
	  } else if (route.getComponents) {
	    route.getComponents(location, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState.location, route, callback);
	  }, callback);
	}

	exports['default'] = getComponents;
	module.exports = exports['default'];

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var _AsyncUtils = __webpack_require__(457);

	var _PatternUtils = __webpack_require__(450);

	var _RouteUtils = __webpack_require__(447);

	function getChildRoutes(route, location, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(location, function (error, childRoutes) {
	      callback(error, !error && _RouteUtils.createRoutes(childRoutes));
	    });
	  } else {
	    callback();
	  }
	}

	function getIndexRoute(route, location, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(location, function (error, indexRoute) {
	      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (obj) {
	        return !obj.hasOwnProperty('path');
	      });

	      _AsyncUtils.loopAsync(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  if (remainingPathname !== null) {
	    var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	    remainingPathname = matched.remainingPathname;
	    paramNames = [].concat(paramNames, matched.paramNames);
	    paramValues = [].concat(paramValues, matched.paramValues);

	    if (remainingPathname === '' && route.path) {
	      var _ret2 = (function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	               false ? _warning2['default'](indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : undefined;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	               false ? _warning2['default'](!indexRoute.path, 'Index routes should not have paths') : undefined;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });
	        return {
	          v: undefined
	        };
	      })();

	      if (typeof _ret2 === 'object') return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    getChildRoutes(route, location, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback) {
	  var remainingPathname = arguments.length <= 3 || arguments[3] === undefined ? location.pathname : arguments[3];
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
	  return (function () {
	    _AsyncUtils.loopAsync(routes.length, function (index, next, done) {
	      matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	        if (error || match) {
	          done(error, match);
	        } else {
	          next();
	        }
	      });
	    }, callback);
	  })();
	}

	exports['default'] = matchRoutes;
	module.exports = exports['default'];

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.falsy = falsy;

	var _react = __webpack_require__(76);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;

	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = shape({
	  listen: func.isRequired,
	  pushState: func.isRequired,
	  replaceState: func.isRequired,
	  go: func.isRequired
	});

	exports.history = history;
	var location = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	exports.location = location;
	var component = oneOfType([func, string]);
	exports.component = component;
	var components = oneOfType([component, object]);
	exports.components = components;
	var route = oneOfType([object, element]);
	exports.route = route;
	var routes = oneOfType([route, arrayOf(route)]);

	exports.routes = routes;
	exports['default'] = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route
	};

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _React$PropTypes = _react2['default'].PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	function isEmptyObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return false;
	  }return true;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * `activeClassName` prop
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */

	var Link = (function (_Component) {
	  _inherits(Link, _Component);

	  function Link() {
	    _classCallCheck(this, Link);

	    _Component.apply(this, arguments);
	  }

	  Link.prototype.handleClick = function handleClick(event) {
	    var allowTransition = true;

	    if (this.props.onClick) this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (event.defaultPrevented === true) allowTransition = false;

	    // If target prop is set (e.g. to "_blank") let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) {
	      if (!allowTransition) event.preventDefault();

	      return;
	    }

	    event.preventDefault();

	    if (allowTransition) {
	      var _props = this.props;
	      var state = _props.state;
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;

	      if (hash) to += hash;

	      this.context.history.pushState(state, to, query);
	    }
	  };

	  Link.prototype.render = function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    // Manually override onClick.
	    props.onClick = function (e) {
	      return _this.handleClick(e);
	    };

	    // Ignore if rendered outside the context of history, simplifies unit testing.
	    var history = this.context.history;

	    if (history) {
	      props.href = history.createHref(to, query);

	      if (hash) props.href += hash;

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (history.isActive(to, query, onlyActiveOnIndex)) {
	          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2['default'].createElement('a', props);
	  };

	  return Link;
	})(_react.Component);

	Link.contextTypes = {
	  history: object
	};

	Link.propTypes = {
	  to: string.isRequired,
	  query: object,
	  hash: string,
	  state: object,
	  activeStyle: object,
	  activeClassName: string,
	  onlyActiveOnIndex: bool.isRequired,
	  onClick: func
	};

	Link.defaultProps = {
	  onlyActiveOnIndex: false,
	  className: '',
	  style: {}
	};

	exports['default'] = Link;
	module.exports = exports['default'];

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(462);

	var _Link2 = _interopRequireDefault(_Link);

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */

	var IndexLink = (function (_Component) {
	  _inherits(IndexLink, _Component);

	  function IndexLink() {
	    _classCallCheck(this, IndexLink);

	    _Component.apply(this, arguments);
	  }

	  IndexLink.prototype.render = function render() {
	    return _react2['default'].createElement(_Link2['default'], _extends({}, this.props, { onlyActiveOnIndex: true }));
	  };

	  return IndexLink;
	})(_react.Component);

	exports['default'] = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _Redirect = __webpack_require__(465);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _PropTypes = __webpack_require__(461);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = (function (_Component) {
	  _inherits(IndexRedirect, _Component);

	  function IndexRedirect() {
	    _classCallCheck(this, IndexRedirect);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  IndexRedirect.prototype.render = function render() {
	     true ?  false ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return IndexRedirect;
	})(_react.Component);

	IndexRedirect.propTypes = {
	  to: string.isRequired,
	  query: object,
	  state: object,
	  onEnter: _PropTypes.falsy,
	  children: _PropTypes.falsy
	};

	IndexRedirect.createRouteFromReactElement = function (element, parentRoute) {
	  /* istanbul ignore else: sanity check */
	  if (parentRoute) {
	    parentRoute.indexRoute = _Redirect2['default'].createRouteFromReactElement(element);
	  } else {
	     false ? _warning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
	  }
	};

	exports['default'] = IndexRedirect;
	module.exports = exports['default'];

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(447);

	var _PatternUtils = __webpack_require__(450);

	var _PropTypes = __webpack_require__(461);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = (function (_Component) {
	  _inherits(Redirect, _Component);

	  function Redirect() {
	    _classCallCheck(this, Redirect);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  Redirect.prototype.render = function render() {
	     true ?  false ? _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return Redirect;
	})(_react.Component);

	Redirect.createRouteFromReactElement = function (element) {
	  var route = _RouteUtils.createRouteFromReactElement(element);

	  if (route.from) route.path = route.from;

	  route.onEnter = function (nextState, replaceState) {
	    var location = nextState.location;
	    var params = nextState.params;

	    var pathname = undefined;
	    if (route.to.charAt(0) === '/') {
	      pathname = _PatternUtils.formatPattern(route.to, params);
	    } else if (!route.to) {
	      pathname = location.pathname;
	    } else {
	      var routeIndex = nextState.routes.indexOf(route);
	      var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	      var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	      pathname = _PatternUtils.formatPattern(pattern, params);
	    }

	    replaceState(route.state || location.state, pathname, route.query || location.query);
	  };

	  return route;
	};

	Redirect.getRoutePattern = function (routes, routeIndex) {
	  var parentPattern = '';

	  for (var i = routeIndex; i >= 0; i--) {
	    var route = routes[i];
	    var pattern = route.path || '';
	    parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	    if (pattern.indexOf('/') === 0) break;
	  }

	  return '/' + parentPattern;
	};

	Redirect.propTypes = {
	  path: string,
	  from: string, // Alias for path
	  to: string.isRequired,
	  query: object,
	  state: object,
	  onEnter: _PropTypes.falsy,
	  children: _PropTypes.falsy
	};

	exports['default'] = Redirect;
	module.exports = exports['default'];

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(447);

	var _PropTypes = __webpack_require__(461);

	var func = _react2['default'].PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = (function (_Component) {
	  _inherits(IndexRoute, _Component);

	  function IndexRoute() {
	    _classCallCheck(this, IndexRoute);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  IndexRoute.prototype.render = function render() {
	     true ?  false ? _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return IndexRoute;
	})(_react.Component);

	IndexRoute.propTypes = {
	  path: _PropTypes.falsy,
	  component: _PropTypes.component,
	  components: _PropTypes.components,
	  getComponent: func,
	  getComponents: func
	};

	IndexRoute.createRouteFromReactElement = function (element, parentRoute) {
	  /* istanbul ignore else: sanity check */
	  if (parentRoute) {
	    parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
	  } else {
	     false ? _warning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
	  }
	};

	exports['default'] = IndexRoute;
	module.exports = exports['default'];

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(447);

	var _PropTypes = __webpack_require__(461);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = (function (_Component) {
	  _inherits(Route, _Component);

	  function Route() {
	    _classCallCheck(this, Route);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  Route.prototype.render = function render() {
	     true ?  false ? _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return Route;
	})(_react.Component);

	Route.createRouteFromReactElement = _RouteUtils.createRouteFromReactElement;

	Route.propTypes = {
	  path: string,
	  component: _PropTypes.component,
	  components: _PropTypes.components,
	  getComponent: func,
	  getComponents: func
	};

	exports['default'] = Route;
	module.exports = exports['default'];

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PropTypes = __webpack_require__(461);

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _PropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    this.history = this.context.history;
	  }

	};

	exports['default'] = History;
	module.exports = exports['default'];

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */
	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    !this.routerWillLeave ?  false ? _invariant2['default'](false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : _invariant2['default'](false) : undefined;

	    var route = this.props.route || this.context.route;

	    !route ?  false ? _invariant2['default'](false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : _invariant2['default'](false) : undefined;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }

	};

	exports['default'] = Lifecycle;
	module.exports = exports['default'];

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */
	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  }

	};

	exports['default'] = RouteContext;
	module.exports = exports['default'];

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _historyLibCreateMemoryHistory = __webpack_require__(472);

	var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

	var _historyLibUseBasename = __webpack_require__(473);

	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);

	var _RouteUtils = __webpack_require__(447);

	var _useRoutes = __webpack_require__(451);

	var _useRoutes2 = _interopRequireDefault(_useRoutes);

	var createHistory = _useRoutes2['default'](_historyLibUseBasename2['default'](_historyLibCreateMemoryHistory2['default']));

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser. Use
	 * the history.listen API instead.
	 */
	function match(_ref, callback) {
	  var routes = _ref.routes;
	  var location = _ref.location;
	  var parseQueryString = _ref.parseQueryString;
	  var stringifyQuery = _ref.stringifyQuery;
	  var basename = _ref.basename;

	  !location ?  false ? _invariant2['default'](false, 'match needs a location') : _invariant2['default'](false) : undefined;

	  var history = createHistory({
	    routes: _RouteUtils.createRoutes(routes),
	    parseQueryString: parseQueryString,
	    stringifyQuery: stringifyQuery,
	    basename: basename
	  });

	  // Allow match({ location: '/the/path', ... })
	  if (typeof location === 'string') location = history.createLocation(location);

	  history.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, { history: history }));
	  });
	}

	exports['default'] = match;
	module.exports = exports['default'];

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(432);

	var _createHistory = __webpack_require__(437);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _parsePath = __webpack_require__(443);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ?  false ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ?  false ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var key = entry.key;
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var state = undefined;
	    if (key) {
	      state = readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	      entry.key = key;
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	         false ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _ExecutionEnvironment = __webpack_require__(433);

	var _runTransitionHook = __webpack_require__(445);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _extractPath = __webpack_require__(444);

	var _extractPath2 = _interopRequireDefault(_extractPath);

	var _parsePath = __webpack_require__(443);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(446);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var basename = options.basename;

	    var historyOptions = _objectWithoutProperties(options, ['basename']);

	    var history = createHistory(historyOptions);

	    // Automatically use the value of <base href> in HTML
	    // documents as basename if it's not explicitly given.
	    if (basename == null && _ExecutionEnvironment.canUseDOM) {
	      var base = document.getElementsByTagName('base')[0];

	      if (base) basename = _extractPath2['default'](base.href);
	    }

	    function addBasename(location) {
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      if (!basename) return location;

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation() {
	      return addBasename(history.createLocation.apply(history, arguments));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(446);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _createLocation2 = __webpack_require__(442);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _createBrowserHistory = __webpack_require__(475);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	exports.createHistory = _createBrowserHistory2['default'];

	var _createHashHistory2 = __webpack_require__(431);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	exports.createHashHistory = _createHashHistory3['default'];

	var _createMemoryHistory2 = __webpack_require__(472);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	exports.createMemoryHistory = _createMemoryHistory3['default'];

	var _useBasename2 = __webpack_require__(473);

	var _useBasename3 = _interopRequireDefault(_useBasename2);

	exports.useBasename = _useBasename3['default'];

	var _useBeforeUnload2 = __webpack_require__(476);

	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

	exports.useBeforeUnload = _useBeforeUnload3['default'];

	var _useQueries2 = __webpack_require__(452);

	var _useQueries3 = _interopRequireDefault(_useQueries2);

	exports.useQueries = _useQueries3['default'];

	var _Actions2 = __webpack_require__(432);

	var _Actions3 = _interopRequireDefault(_Actions2);

	exports.Actions = _Actions3['default'];

	// deprecated

	var _enableBeforeUnload2 = __webpack_require__(477);

	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);

	exports.enableBeforeUnload = _enableBeforeUnload3['default'];

	var _enableQueries2 = __webpack_require__(478);

	var _enableQueries3 = _interopRequireDefault(_enableQueries2);

	exports.enableQueries = _enableQueries3['default'];
	var createLocation = _deprecate2['default'](_createLocation3['default'], 'Using createLocation without a history instance is deprecated; please use history.createLocation instead');
	exports.createLocation = createLocation;

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(244);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(432);

	var _ExecutionEnvironment = __webpack_require__(433);

	var _DOMUtils = __webpack_require__(434);

	var _DOMStateStorage = __webpack_require__(435);

	var _createDOMHistory = __webpack_require__(436);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	var _parsePath = __webpack_require__(443);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  false ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(430);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(433);

	var _DOMUtils = __webpack_require__(434);

	var _deprecate = __webpack_require__(446);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
	  function listener(event) {
	    var message = getBeforeUnloadPromptMessage();

	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }
	  }

	  _DOMUtils.addEventListener(window, 'beforeunload', listener);

	  return function () {
	    _DOMUtils.removeEventListener(window, 'beforeunload', listener);
	  };
	}

	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	function useBeforeUnload(createHistory) {
	  return function (options) {
	    var history = createHistory(options);

	    var stopBeforeUnloadListener = undefined;
	    var beforeUnloadHooks = [];

	    function getBeforeUnloadPromptMessage() {
	      var message = undefined;

	      for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
	        message = beforeUnloadHooks[i].call();
	      }return message;
	    }

	    function listenBeforeUnload(hook) {
	      beforeUnloadHooks.push(hook);

	      if (beforeUnloadHooks.length === 1) {
	        if (_ExecutionEnvironment.canUseDOM) {
	          stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	        } else {
	           false ? _warning2['default'](false, 'listenBeforeUnload only works in DOM environments') : undefined;
	        }
	      }

	      return function () {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
	          stopBeforeUnloadListener();
	          stopBeforeUnloadListener = null;
	        }
	      };
	    }

	    // deprecated
	    function registerBeforeUnloadHook(hook) {
	      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
	        beforeUnloadHooks.push(hook);

	        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	      }
	    }

	    // deprecated
	    function unregisterBeforeUnloadHook(hook) {
	      if (beforeUnloadHooks.length > 0) {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
	      }
	    }

	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload,

	      registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
	      unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
	    });
	  };
	}

	exports['default'] = useBeforeUnload;
	module.exports = exports['default'];

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(446);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useBeforeUnload = __webpack_require__(476);

	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);

	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(446);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useQueries = __webpack_require__(452);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },
/* 479 */
/***/ function(module, exports) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routeReducer = routeReducer;
	exports.syncHistory = syncHistory;
	// Constants

	var TRANSITION = exports.TRANSITION = '@@router/TRANSITION';
	var UPDATE_LOCATION = exports.UPDATE_LOCATION = '@@router/UPDATE_LOCATION';

	var SELECT_STATE = function SELECT_STATE(state) {
	  return state.routing;
	};

	function transition(method) {
	  return function (arg) {
	    return {
	      type: TRANSITION,
	      payload: { method: method, arg: arg }
	    };
	  };
	}

	var routeActions = exports.routeActions = {
	  push: transition('push'),
	  replace: transition('replace'),
	  go: transition('go'),
	  goBack: transition('goBack'),
	  goForward: transition('goForward')
	};

	function updateLocation(location) {
	  return {
	    type: UPDATE_LOCATION,
	    payload: location
	  };
	}

	// Reducer

	var initialState = {
	  location: undefined
	};

	function routeReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var _ref = arguments[1];
	  var type = _ref.type;
	  var location = _ref.payload;

	  if (type !== UPDATE_LOCATION) {
	    return state;
	  }

	  return _extends({}, state, { location: location });
	}

	// Syncing

	function syncHistory(history) {
	  var unsubscribeHistory = undefined,
	      currentKey = undefined,
	      unsubscribeStore = undefined;
	  var connected = false,
	      syncing = false;

	  function middleware(store) {
	    unsubscribeHistory = history.listen(function (location) {
	      currentKey = location.key;
	      if (syncing) {
	        // Don't dispatch a new action if we're replaying location.
	        return;
	      }

	      store.dispatch(updateLocation(location));
	    });

	    connected = true;

	    return function (next) {
	      return function (action) {
	        if (action.type !== TRANSITION || !connected) {
	          return next(action);
	        }

	        var _action$payload = action.payload;
	        var method = _action$payload.method;
	        var arg = _action$payload.arg;

	        history[method](arg);
	      };
	    };
	  }

	  middleware.listenForReplays = function (store) {
	    var selectRouterState = arguments.length <= 1 || arguments[1] === undefined ? SELECT_STATE : arguments[1];

	    var getRouterState = function getRouterState() {
	      return selectRouterState(store.getState());
	    };

	    var _getRouterState = getRouterState();

	    var initialLocation = _getRouterState.location;

	    unsubscribeStore = store.subscribe(function () {
	      var _getRouterState2 = getRouterState();

	      var location = _getRouterState2.location;

	      // If we're resetting to the beginning, use the saved initial value. We
	      // need to dispatch a new action at this point to populate the store
	      // appropriately.

	      if (!location) {
	        history.transitionTo(initialLocation);
	        return;
	      }

	      // Otherwise, if we need to update the history location, do so without
	      // dispatching a new action, as we're just bringing history in sync
	      // with the store.
	      if (location.key !== currentKey) {
	        syncing = true;
	        history.transitionTo(location);
	        syncing = false;
	      }
	    });
	  };

	  middleware.unsubscribe = function () {
	    unsubscribeHistory();
	    if (unsubscribeStore) {
	      unsubscribeStore();
	    }

	    connected = false;
	  };

	  return middleware;
	}


/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(78);


/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(235);

	var _reactRedux = __webpack_require__(420);

	var _ui = __webpack_require__(483);

	var UIActions = _interopRequireWildcard(_ui);

	var _reactAddonsTransitionGroup = __webpack_require__(484);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _LoadingView = __webpack_require__(487);

	var _LoadingView2 = _interopRequireDefault(_LoadingView);

	var _Menu = __webpack_require__(492);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _default = __webpack_require__(495);

	var _default2 = _interopRequireDefault(_default);

	var _style = __webpack_require__(497);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function (_Component) {
	  (0, _inherits3.default)(App, _Component);

	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
	  }

	  (0, _createClass3.default)(App, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var show_menu = _props.ui.show_menu;
	      var children = _props.children;

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.main },
	        show_menu ? _react2.default.createElement(
	          'div',
	          { style: { height: "100%" } },
	          _react2.default.createElement(_Menu2.default, this.props),
	          _react2.default.createElement(
	            _reactAddonsTransitionGroup2.default,
	            { component: 'div', className: _style2.default.view },
	            _react2.default.cloneElement(children, (0, _extends3.default)({}, this.props, {
	              key: this.props.location.pathname
	            }))
	          )
	        ) : _react2.default.createElement(_LoadingView2.default, this.props)
	      );
	    }
	  }]);
	  return App;
	}(_react.Component);

	App.propTypes = {
	  actions: _react.PropTypes.object.isRequired
	};

	function mapStateToProps(state) {
	  return {
	    routing: state.routing,
	    ui: state.ui,
	    navigation: state.navigation
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    UIActions: (0, _redux.bindActionCreators)(UIActions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(386);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.showMenu = showMenu;
	function showMenu() {
	  return {
	    type: 'SHOW_MENU'
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ui.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(485);

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */

	'use strict';

	var React = __webpack_require__(77);
	var ReactTransitionChildMapping = __webpack_require__(486);

	var assign = __webpack_require__(113);
	var emptyFunction = __webpack_require__(89);

	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',

	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },

	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },

	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },

	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  },

	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },

	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },

	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },

	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },

	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];

	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },

	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});

	module.exports = ReactTransitionGroup;

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */

	'use strict';

	var flattenChildren = __webpack_require__(190);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },

	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }

	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};

	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }

	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }
	};

	module.exports = ReactTransitionChildMapping;

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(488);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LoadingView = function (_Component) {
	  (0, _inherits3.default)(LoadingView, _Component);

	  function LoadingView() {
	    (0, _classCallCheck3.default)(this, LoadingView);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoadingView).apply(this, arguments));
	  }

	  (0, _createClass3.default)(LoadingView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props;
	      var UIActions = _props.UIActions;
	      var show_menu = _props.ui.show_menu;

	      var element = document.getElementsByClassName(_style2.default.main);
	      var strokeSvg = document.getElementsByClassName("strokeSvg");
	      var text = document.getElementsByClassName(_style2.default.text);
	      var bg = document.getElementsByClassName("bgSvg");

	      TweenMax.fromTo(element, .5, { scale: .8, opacity: 0 }, { overwrite: 1, scale: 1, delay: 0.3, opacity: 1 });

	      var colorTimeline = new TimelineLite();
	      colorTimeline.to(strokeSvg, 1, { stroke: "#594593" });
	      colorTimeline.to(strokeSvg, 1, { stroke: "#81c5d8" });
	      colorTimeline.to(strokeSvg, 1, { stroke: "#f7bd23" });
	      colorTimeline.to(strokeSvg, 1, { stroke: "#9ec12f" });
	      colorTimeline.to(strokeSvg, 1, { stroke: "#2ec3bd" });

	      var percentage = { val: 0 };

	      TweenLite.to(percentage, 2, {
	        percentage: text,
	        delay: 0.7,
	        onUpdate: function onUpdate() {
	          var progress = percentage.val += 2;
	          if (progress == 102) {
	            TweenLite.delayedCall(0.5, function () {
	              bg[0].style.stroke = 'none';
	              TweenLite.to(strokeSvg, .5, {
	                ease: Sine.easeInOut,
	                strokeDashoffset: 260
	              });
	              TweenLite.to(element, .5, {
	                ease: Sine.easeInOut,
	                rotation: 180 + "deg"
	              });
	              TweenLite.to(text, .2, {
	                scale: 0
	              });
	            });
	          } else if (progress <= 100) {
	            var moveTo = (1 - progress / 100) * 260;
	            TweenLite.to(strokeSvg, 0.1, {
	              strokeDashoffset: moveTo
	            });
	            colorTimeline.progress(progress / 100);
	            text[0].innerHTML = progress + "%";
	          }
	        }
	      });
	      setTimeout(function () {
	        return UIActions.showMenu();
	      }, 2500);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.main },
	        _react2.default.createElement('span', { className: _style2.default.text }),
	        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: '<svg viewBox="0 0 100 100" width="100%"><circle class="strokeSvg" cx="50" cy="50" r="40" stroke="#594593" style="stroke-dasharray: 260; stroke-dashoffset:260" stroke-width="1" fill="none" stroke-miterlimit="0"/></svg><svg viewBox="0 0 100 100" width="100%"><circle class="bgSvg" cx="50" cy="50" r="40" stroke="#7b7e82" stroke-width="1" fill="none" stroke-miterlimit="0" style="stroke-dashoffset=700"/></svg>' } })
	      );
	    }
	  }]);
	  return LoadingView;
	}(_react.Component);

	exports.default = LoadingView;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(489);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___1lU1Y{\n  width: 256px;\n  height: 256px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  opacity: 0;\n}\n\n.style__main___1lU1Y svg{\n    position: absolute;\n    top: 0;\n    z-index: 11111;\n    left: 0;\n}\n\n.style__main___1lU1Y svg:nth-child(2) {\n    z-index: 10;\n}\n\n.style__text___1KHsD{\n    display: block;\n    color: #fff;\n    font-size: 40px;\n    width: 100%;\n    text-align: center;\n    margin-top: 39.5%;\n    position: absolute;\n}", "", {"version":3,"sources":["/./components/LoadingView/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,QAAQ;EACR,SAAS;EACT,aAAa;EACb,WAAW;CACZ;;AAED;IACI,mBAAmB;IACnB,OAAO;IACP,eAAe;IACf,QAAQ;CACX;;AAED;IACI,YAAY;CACf;;AAED;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;CACtB","file":"style.css","sourcesContent":[".main{\n  width: 256px;\n  height: 256px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  opacity: 0;\n}\n\n.main svg{\n    position: absolute;\n    top: 0;\n    z-index: 11111;\n    left: 0;\n}\n\n.main svg:nth-child(2) {\n    z-index: 10;\n}\n\n.text{\n    display: block;\n    color: #fff;\n    font-size: 40px;\n    width: 100%;\n    text-align: center;\n    margin-top: 39.5%;\n    position: absolute;\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___1lU1Y",
		"text": "style__text___1KHsD"
	};

/***/ },
/* 490 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(428);

	var _reactDom = __webpack_require__(480);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _style = __webpack_require__(493);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Menu = function (_Component) {
	    (0, _inherits3.default)(Menu, _Component);

	    function Menu() {
	        (0, _classCallCheck3.default)(this, Menu);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Menu).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Menu, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var element = _reactDom2.default.findDOMNode(this);
	            var menuItems = document.getElementsByClassName(_style2.default['menu-item']);
	            var socialIcon = document.getElementsByClassName(_style2.default['social-icon']);
	            var socialIcons = document.getElementsByClassName(_style2.default['social-icons']);

	            // portfolio icons
	            this.portfolioCircleSvg = document.getElementsByClassName('portfolioCircleSvg');
	            this.portfolioLinesSvg = document.getElementsByClassName('portfolioLinesSvg');
	            this.portfolioBoxesSvg = document.getElementsByClassName('portfolioBoxesSvg');

	            // about icon
	            this.aboutSvg = document.getElementsByClassName('aboutSvg');

	            //contact icon
	            this.contactHand = document.getElementsByClassName('contactHandSvg');
	            this.contactDog = document.getElementsByClassName('contactDogSvg');

	            //resume icon
	            this.resumeLine = document.getElementsByClassName('resumeLineSvg');

	            //menu container animation
	            TweenMax.fromTo(element, 1.2, { opacity: 0, x: -200, delay: 0.5, ease: Expo.easeInOut }, { x: 0, opacity: 1, delay: 0.5, ease: Expo.easeInOut });
	            TweenMax.staggerFrom(menuItems, 0.3, { x: -170, delay: 1.5 }, 0.15);

	            //individual social icons animation
	            TweenMax.staggerFrom(socialIcon, 0.3, { scale: 0, delay: 2 }, 0.1);

	            //social icons container animation
	            TweenMax.fromTo(socialIcons, 0.5, { opacity: 0, x: -200, delay: 2 }, { opacity: 1, x: 0, delay: 2 });
	        }
	    }, {
	        key: '_changePage',
	        value: function _changePage(slug) {
	            var history = this.props.history;

	            setTimeout(function () {
	                return history.pushState(null, slug);
	            }, 0);
	        }
	    }, {
	        key: '_onHoverPortfolio',
	        value: function _onHoverPortfolio() {
	            TweenMax.to(this.portfolioCircleSvg, 2, {
	                rotation: 360,
	                transformOrigin: '50% 50%',
	                ease: Back.easeOut
	            });
	            TweenMax.staggerFrom(this.portfolioLinesSvg, 0.2, { x: -150 }, 0.1);
	            TweenMax.staggerFrom(this.portfolioBoxesSvg, 0.2, { y: 150 }, 0.1);
	        }
	    }, {
	        key: '_onHoverOutPortfolio',
	        value: function _onHoverOutPortfolio() {
	            TweenMax.killAll(true, false, false);
	            TweenMax.set(this.portfolioCircleSvg, { clearProps: 'all' });
	            TweenMax.set(this.portfolioLinesSvg, { clearProps: 'all' });
	            TweenMax.set(this.portfolioBoxesSvg, { clearProps: 'all' });
	        }
	    }, {
	        key: '_onHoverAbout',
	        value: function _onHoverAbout() {
	            TweenMax.to(this.aboutSvg, 2, {
	                rotationY: 360,
	                transformOrigin: 'center center',
	                ease: Back.easeOut
	            });
	        }
	    }, {
	        key: '_onHoverOutAbout',
	        value: function _onHoverOutAbout() {
	            TweenMax.killAll(true, false, false);
	            TweenMax.set(this.aboutSvg, { clearProps: 'all' });
	        }
	    }, {
	        key: '_onHoverContact',
	        value: function _onHoverContact() {
	            TweenMax.fromTo(this.contactHand, 1, { opacity: 0, x: 80, ease: Expo.easeInOut }, { opacity: 1, x: 0, ease: Expo.easeOut });
	            TweenMax.fromTo(this.contactDog, 1, { opacity: 0, x: 80, ease: Expo.easeInOut }, { opacity: 1, x: 0, ease: Expo.easeOut });
	        }
	    }, {
	        key: '_onHoverOutContact',
	        value: function _onHoverOutContact() {
	            TweenMax.killAll(true, false, false);
	            TweenMax.set(this.contactHand, { clearProps: 'all' });
	            TweenMax.set(this.contactDog, { clearProps: 'all' });
	        }
	    }, {
	        key: '_onHoverResume',
	        value: function _onHoverResume() {
	            TweenMax.staggerFrom(this.resumeLine, 0.1, { y: 10, opacity: 0 }, 0.05);
	        }
	    }, {
	        key: '_onHoverOutResume',
	        value: function _onHoverOutResume() {
	            TweenMax.killAll(true, false, false);
	            TweenMax.set(this.resumeLine, { clearProps: 'all' });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'nav',
	                { className: _style2.default.main },
	                _react2.default.createElement(
	                    'section',
	                    { className: _style2.default['menu-items'] },
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            onMouseEnter: this._onHoverPortfolio.bind(this),
	                            onMouseLeave: this._onHoverOutPortfolio.bind(this),
	                            className: _style2.default['menu-item'],
	                            onClick: function onClick() {
	                                return _this2._changePage('/portfolio');
	                            }
	                        },
	                        _react2.default.createElement('div', {
	                            className: _style2.default.linkArrow,
	                            dangerouslySetInnerHTML: {
	                                __html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 95" enable-background="new 0 0 100 100" xml:space="preserve"><g><rect class="' + 'portfolioLinesSvg' + '" x="11.094" y="18.19" width="8.31" height="1.684"/><rect class="' + 'portfolioLinesSvg' + '" x="11.094" y="20.961" width="31.575" height="1.685"/><rect class="' + 'portfolioLinesSvg' + '" x="11.094" y="26.716" width="58.167" height="5.886"/><rect class="' + 'portfolioLinesSvg' + '" x="11.094" y="36.84" width="43.763" height="1.686"/><rect class="' + 'portfolioLinesSvg' + '" x="11.094" y="39.425" width="56.689" height="1.687"/><rect class="' + 'portfolioBoxesSvg' + '" x="11.094" y="47.779" width="16.249" height="13.479"/><rect class="' + 'portfolioBoxesSvg' + '" x="11.094" y="63.431" width="13.295" height="1.685"/><rect class="' + 'portfolioBoxesSvg' + '" x="11.094" y="67.308" width="9.847" height="1.686"/><rect class="' + 'portfolioBoxesSvg' + '" x="30.914" y="47.779" width="16.25" height="13.479"/><rect class="' + 'portfolioBoxesSvg' + '" x="30.914" y="63.431" width="13.294" height="1.685"/><rect class="' + 'portfolioBoxesSvg' + '" x="30.914" y="67.308" width="9.848" height="1.686"/><path class="' + 'portfolioBoxesSvg' + '" d="M50.731,65.115h0.479c0.171-0.573,0.378-1.131,0.59-1.685h-1.068V65.115z"/><path class="' + 'portfolioBoxesSvg' + '" d="M85.975,80.231L82.507,83.7v-0.004c-0.115,0.119-0.115,0.309,0,0.427c0.121,0.119,0.312,0.119,0.428,0l3.468-3.468   c0.115-0.115,0.115-0.306,0-0.424C86.281,80.116,86.097,80.116,85.975,80.231z"/><path class="' + 'portfolioCircleSvg' + '" d="M74.319,51.36c-11.42,0-20.682,9.258-20.682,20.68c0,11.423,9.262,20.682,20.682,20.682C85.738,92.722,95,83.463,95,72.04   C95,60.618,85.738,51.36,74.319,51.36z M77.683,60.583c1.506-1.51,3.659-2,5.581-1.466l-2.955,2.954   c-0.808,0.805-0.808,2.106,0,2.911l1.067,1.068c0.803,0.805,2.105,0.805,2.908,0l2.955-2.954c0.536,1.923,0.046,4.069-1.466,5.579   c-1.512,1.512-3.659,2.002-5.586,1.47l-1.269,1.274c-0.018-0.083-0.029-0.171-0.029-0.243l-0.012-0.522l-0.427-0.299   c-0.237-0.168-0.503-0.286-0.773-0.375c0.213-0.369,0.184-0.849-0.134-1.166c-0.38-0.376-0.985-0.376-1.362,0l-0.489,0.487   l-1.304-1.307l1.822-1.829C75.682,64.244,76.166,62.099,77.683,60.583z M61.371,59.481c0.074-0.08,0.126-0.128,0.155-0.159   c0,0,0,0,0.069-0.069c0.034-0.034,0.086-0.084,0.162-0.158c0.226-0.229,0.656-0.206,0.656-0.206s2.044,1.138,2.604,1.559   c0.398,0.442,1.396,2.441,1.396,2.441l6.301,6.299c0,0,0.248-0.296,0.456-0.457c0.224-0.089,0.473-0.023,0.473-0.023l1.639,1.64   l-1.408,1.408h-0.005l-1.247,1.251l-1.638-1.637c0,0-0.064-0.249,0.022-0.478c0.161-0.205,0.456-0.453,0.456-0.453l-6.296-6.298   c0,0-2.003-0.998-2.446-1.399c-0.421-0.557-1.558-2.603-1.558-2.603S61.146,59.709,61.371,59.481z M70.95,83.498   c-1.508,1.511-3.659,2.001-5.581,1.469l2.954-2.959c0.809-0.801,0.809-2.105,0-2.907l-1.066-1.068   c-0.803-0.805-2.107-0.805-2.909,0l-2.954,2.955c-0.536-1.925-0.046-4.071,1.465-5.582c1.513-1.513,3.66-2,5.58-1.467l1.83-1.829   l1.31,1.307l-0.397,0.397c-0.382,0.379-0.382,0.991,0,1.365c0.287,0.288,0.708,0.353,1.06,0.199c0.094,0.28,0.215,0.549,0.388,0.8   l0.307,0.43l0.519,0.009c0.075,0,0.156,0.012,0.243,0.026l-1.276,1.274C72.951,79.842,72.461,81.988,70.95,83.498z M86.863,83.068   l-1.517,1.523c-0.808,0.805-2.106,0.805-2.915,0l-2.787-2.791c-0.005-1.134-0.79-2.7-2.152-4.062   c-1.344-1.344-2.891-2.13-4.021-2.148c-0.56-0.806-0.484-1.92,0.236-2.635l1.523-1.525c0.716-0.718,1.829-0.794,2.631-0.231   c0.023,1.131,0.809,2.674,2.152,4.015c1.362,1.362,2.926,2.153,4.062,2.153l2.787,2.793C87.672,80.965,87.672,82.266,86.863,83.068   z"/><rect class="' + 'portfolioBoxesSvg' + '" x="11.094" y="75.248" width="36.992" height="1.686"/><path class="' + 'portfolioBoxesSvg' + '" d="M66.981,49.057v-1.277h-16.25v13.479h2.024C55.644,55.493,60.756,51.042,66.981,49.057z"/><polygon points="6.477,13.681 74.923,13.681 74.923,47.981 76.401,47.981 76.401,7.278 5,7.278 5,83.602 52.775,83.602    52.775,82.124 6.477,82.124  "/></g><text x="0" y="115" fill="#fff" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Yamini Ahluwalia</text><text x="0" y="120" fill="#fff" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>'
	                            }
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _style2.default.title },
	                            'Portfolio'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            onMouseEnter: this._onHoverAbout.bind(this),
	                            onMouseLeave: this._onHoverOutAbout.bind(this),
	                            className: _style2.default['menu-item'],
	                            onClick: function onClick() {
	                                return _this2._changePage('/about');
	                            }
	                        },
	                        _react2.default.createElement('div', {
	                            className: _style2.default.linkArrow,
	                            dangerouslySetInnerHTML: {
	                                __html: '<svg class=' + 'aboutSvg' + ' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="-4.545 0 100 105" enable-background="new -4.545 0 100 100" xml:space="preserve"><g><path fill="#fff" d="M32.913,43.92c2.26,4.982,5.841,8.576,10.013,9.718c0.464,0.128,0.935,0.224,1.412,0.288   c0.477,0.066,0.961,0.1,1.45,0.1c2.484,0,4.831-0.856,6.912-2.38c4.573-3.351,7.85-9.925,8.432-17.682   c0.105-0.729,0.163-1.474,0.174-2.23l-2.482,2.851c0.172-0.379,0.245-0.832,0.244-1.332c-0.017-3.508-3.75-9.415-3.75-9.415   c-8.215,5.942-20.432,0-20.432,0c-0.873,0.344-1.438,1.189-1.796,2.276c-0.671,2.029-0.615,4.903-0.447,6.969   c0.122,1.503,0.303,2.578,0.302,2.578c-0.919-0.642-1.764-0.976-2.452-1.149C30.807,37.955,31.656,41.151,32.913,43.92z"/><path fill="none" d="M30.672,53.914c0.04-0.004,0.081-0.008,0.121-0.015c0.321-0.042,0.645-0.079,0.971-0.11   c0,0.033,0.01,0.067,0.011,0.1c0.005,0.097,0.021,0.189,0.032,0.286c0.06,0.54,0.221,1.065,0.475,1.571   c1.697,4.271,7.188,12.37,10.423,16.968l0.667-9.552c-0.945-0.486-1.757-1.287-2.278-2.217c-0.375-0.668-0.603-1.398-0.603-2.143   c0,0,2.413,1.068,4.875,1.068c2.463,0,4.876-1.068,4.876-1.068c0,0.805-0.267,1.596-0.698,2.307   c-0.524,0.859-1.293,1.596-2.182,2.053l0.649,9.306c3.438-4.47,8.993-11.963,11.021-16.257c0.413-0.654,0.664-1.35,0.737-2.069   c0.002-0.005,0.002-0.011,0.003-0.019c0.01-0.072,0.02-0.15,0.025-0.225c0-0.004,0.002-0.012,0.002-0.018   c0.002-0.031,0.012-0.061,0.012-0.094c0.736,0.067,1.461,0.171,2.174,0.303c10.438,1.966,18.378,10.956,18.767,21.874   c5.051-7.048,8.036-15.671,8.036-24.983c0-23.71-19.289-43-42.999-43c-23.71,0-43,19.29-43,43c0,9.313,2.986,17.938,8.038,24.985   C11.228,64.675,19.706,55.443,30.672,53.914z M28.312,28.222c1.292-8.937,8.624-15.785,17.476-15.785   c8.85,0,16.18,6.845,17.477,15.777c0.133,0.923,0.203,1.868,0.203,2.831c0,0.962-0.07,1.908-0.203,2.831   c-0.965,12.851-8.42,22.851-17.477,22.851c-8.94,0-16.32-9.743-17.435-22.358c-0.015-0.165-0.028-0.331-0.041-0.499   c-0.079-0.546-0.132-1.102-0.166-1.663c-0.021-0.384-0.036-0.77-0.036-1.161C28.11,30.086,28.179,29.143,28.312,28.222z"/><path fill="" d="M45.79,3.981c-25.916,0-47,21.084-47,47c0,25.915,21.084,46.998,47,46.998c25.915,0,46.999-21.083,46.999-46.998   C92.789,25.065,71.705,3.981,45.79,3.981z M45.79,7.981c23.71,0,42.999,19.29,42.999,43c0,9.313-2.985,17.936-8.036,24.983   c-0.389-10.918-8.328-19.908-18.767-21.874c-0.713-0.132-1.438-0.235-2.174-0.303c0,0.033-0.01,0.063-0.012,0.094   c0,0.006-0.002,0.014-0.002,0.018c-0.006,0.074-0.016,0.152-0.025,0.225c-0.001,0.008-0.001,0.014-0.003,0.019   c-0.073,0.72-0.324,1.415-0.737,2.069c-2.027,4.294-7.582,11.787-11.021,16.257l-0.649-9.306c0.889-0.457,1.657-1.193,2.182-2.053   c0.432-0.711,0.698-1.502,0.698-2.307c0,0-2.413,1.068-4.876,1.068c-2.462,0-4.875-1.068-4.875-1.068   c0,0.744,0.229,1.475,0.603,2.143c0.521,0.93,1.333,1.73,2.278,2.217l-0.667,9.552c-3.234-4.598-8.726-12.696-10.423-16.968   c-0.254-0.506-0.415-1.031-0.475-1.571c-0.011-0.097-0.027-0.189-0.032-0.286c-0.001-0.032-0.01-0.066-0.011-0.1   c-0.326,0.031-0.65,0.068-0.971,0.11c-0.041,0.007-0.081,0.011-0.121,0.015c-10.966,1.529-19.444,10.761-19.846,22.052   C5.775,68.918,2.789,60.294,2.789,50.98C2.789,27.271,22.079,7.981,45.79,7.981z"/><path fill="#000000" d="M28.312,33.87c0.013,0.167,0.026,0.333,0.041,0.499c1.115,12.615,8.495,22.358,17.435,22.358   c9.057,0,16.512-10,17.477-22.851c0.133-0.923,0.203-1.869,0.203-2.831c0-0.963-0.07-1.908-0.203-2.831   c-1.297-8.932-8.627-15.777-17.477-15.777c-8.852,0-16.184,6.848-17.476,15.785c-0.133,0.92-0.202,1.864-0.202,2.824   c0,0.391,0.015,0.776,0.036,1.161C28.18,32.768,28.233,33.323,28.312,33.87z M32.64,33.082c-0.168-2.066-0.224-4.939,0.447-6.969   c0.359-1.086,0.924-1.932,1.796-2.276c0,0,12.217,5.942,20.432,0c0,0,3.733,5.907,3.75,9.415c0.001,0.5-0.072,0.953-0.244,1.332   l2.482-2.851c-0.011,0.757-0.068,1.502-0.174,2.23c-0.582,7.757-3.858,14.332-8.432,17.682c-2.081,1.523-4.428,2.38-6.912,2.38   c-0.488,0-0.973-0.033-1.45-0.1c-0.477-0.064-0.947-0.16-1.412-0.288c-4.171-1.142-7.753-4.736-10.013-9.718   c-1.257-2.769-2.106-5.965-2.422-9.41c0.688,0.173,1.532,0.507,2.452,1.149C32.943,35.659,32.762,34.584,32.64,33.082z"/></g><text x="-4.545" y="115" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Wilson Joseph</text><text x="-4.545" y="120" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>'
	                            }
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _style2.default.title },
	                            'About'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            onMouseEnter: this._onHoverContact.bind(this),
	                            onMouseLeave: this._onHoverOutContact.bind(this),
	                            className: _style2.default['menu-item'],
	                            onClick: function onClick() {
	                                return _this2._changePage('/contact');
	                            }
	                        },
	                        _react2.default.createElement('div', {
	                            className: _style2.default.linkArrow,
	                            dangerouslySetInnerHTML: {
	                                __html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="1899.615 -81.891 100 78.774" enable-background="new 1899.615 -81.891 100 78.774" xml:space="preserve"><path class="' + 'contactDogSvg' + '" d="M1980.061-63.957c-0.481-0.053-1.006-0.535-1.055-1.101c-0.01-0.132-0.018-0.258-0.045-0.382  c-0.229-2.22-2.09-3.961-4.367-3.961c-2.537,0-4.68,2.021-4.68,4.412c0,2.6,1.924,4.415,4.68,4.415c1.047,0,1.998-0.382,2.754-0.992  c0.718,0.536,1.599,0.88,2.572,0.92c1.348,0.049,2.582-0.396,3.494-1.271c0.848-0.812,1.137-1.983,1.133-3.07  c0.127-2.649-1.011-5.12-2.682-6.938c-1.841-2.001-4.335-3.197-7.07-3.197c-0.002,0-0.002,0-0.002,0  c-2.889,0-5.795,1.161-7.619,3.627c-1.121,1.514-2.465,3.462-2.465,6.508c0,2.768,0.545,5.228,2.559,7.266  c1.578,1.598,4.591,2.87,7.326,2.87c1.779,0,3.205-0.355,4.768-1.189c0.836-0.446,1.234-1.536,0.704-2.321  c-0.472-0.699-1.563-0.733-2.455-0.513c-0.972,0.241-1.616,0.751-3.013,0.751c-1.766,0-4.053-0.888-4.926-1.85  c-1.291-1.424-1.781-3.1-1.781-5.014c0-1.617,0.494-2.879,1.767-4.493c0.819-1.045,3.187-2.426,5.19-2.426  c1.771,0,3.485,0.832,4.724,2.25c1.138,1.308,1.81,2.884,1.726,4.669C1981.24-64.453,1980.807-63.872,1980.061-63.957z   M1974.633-63.622c-1.033,0.107-1.524-0.723-1.488-1.365c0.039-0.751,0.883-1.216,1.488-1.216c0.541,0,1.084,0.675,1.084,1.216  S1975.498-63.711,1974.633-63.622z"></path><path d="M1942.623-33.881c-0.456,2.171-1.039,4.205-1.729,6.104l7.189-1.863c1.982-0.515,3.45-2.185,3.707-4.215l0.42-3.342  c-0.74,0.656-1.625,1.157-2.613,1.427L1942.623-33.881z"></path><path d="M1949.609-44.378l-6.477,7.698c-0.031,0.211-0.074,0.409-0.108,0.618l6.05-1.641c1.713-0.465,2.998-1.883,3.29-3.633  l0.172-1.027l0.591-3.53c-0.677,0.317-1.373,0.633-2.109,0.941C1950.559-44.758,1950.09-44.565,1949.609-44.378z"></path><path class="' + 'contactHandSvg' + '" d="M1945.075-81.891v18.188l4-1.586v-12.602h46.54v25.809H1961.1c-1.43,1.398-3.313,2.732-5.633,4h44.148v-33.809H1945.075z"></path><path d="M1960.989-64.103c-0.002-0.004-0.006-0.007-0.009-0.011c-0.198-0.215-0.415-0.407-0.643-0.585  c-0.024-0.019-0.049-0.04-0.072-0.059c-0.221-0.167-0.455-0.312-0.696-0.442c-0.099-0.052-0.2-0.094-0.302-0.14  c-0.129-0.059-0.258-0.113-0.389-0.163c-0.154-0.056-0.31-0.105-0.467-0.147c-0.057-0.017-0.113-0.025-0.169-0.039  c-0.226-0.055-0.455-0.086-0.687-0.112c-0.129-0.014-0.262-0.021-0.394-0.024c-0.067-0.003-0.137-0.003-0.206-0.003  c-0.652,0.007-1.312,0.126-1.947,0.378l-5.33,2.115l-4,1.587l-8.979,3.562c-0.588,0.232-1.132,0.567-1.604,0.987l-9.685,8.591  l-1.205-1.358l9.685-8.59c0.635-0.562,1.354-1.007,2.142-1.319l7.243-2.955v-10.895h-5.583c-0.693,0-1.379,0.132-2.022,0.39  l-14.527,7.263c-1.23,0.493-2.239,1.417-2.838,2.6l-18.689,26.419v33.938c0,0,14.419-2.729,17.111-3.839  c5.14-2.117,16.498-5.529,22.09-20.899c0.049-0.14,0.098-0.276,0.148-0.424c0.586-1.725,1.195-3.93,1.685-6.108  c0.047-0.208,0.089-0.413,0.134-0.62c0.066-0.341,0.139-0.676,0.2-1.025c0.03-0.165,0.058-0.333,0.086-0.5  c0.108-0.635,0.212-1.276,0.304-1.94l0.815-0.969l0.118-0.142l6.177-7.341c0.122-0.047,0.245-0.098,0.366-0.146  c0.799-0.312,1.607-0.652,2.416-1.013c0.656-0.292,1.312-0.593,1.957-0.915c0.146-0.072,0.289-0.145,0.434-0.219  c0.48-0.246,0.953-0.5,1.416-0.763c1.143-0.648,2.215-1.354,3.186-2.104c1.924-1.488,3.418-3.169,4.058-5.047  c0.725-2.13,0.461-4.338-0.741-6.217C1961.399-63.619,1961.202-63.871,1960.989-64.103z"></path></svg>'
	                            }
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _style2.default.title },
	                            'Contact'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        {
	                            onMouseEnter: this._onHoverResume.bind(this),
	                            onMouseLeave: this._onHoverOutResume.bind(this),
	                            className: _style2.default['menu-item'],
	                            to: '/oksana_bibik_cv.pdf',
	                            target: '_blank'
	                        },
	                        _react2.default.createElement('div', {
	                            className: _style2.default.linkArrow,
	                            dangerouslySetInnerHTML: {
	                                __html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 105" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M81,9.811V7.782H56.554L23.03,5l-0.231,2.782H19v45.78L16,89.71l3,0.249v2.823h34.019l24.769,2.056  l0.171-2.056H81V56.125l3.817-45.997L81,9.811z M24.858,7.159l7.513,0.624h-7.565L24.858,7.159z M18.159,87.882L19,77.744v10.207  L18.159,87.882z M79,11.652v44.389v24.183v10.559h-0.876h-2.008H53.1H28.92H21v-0.657v-2.008V53.646V29.463V9.782h1.633h2.007  h31.831H79V11.652z M81,11.818l1.659,0.138L81,31.945V11.818z"/><path class="' + 'resumeLineSvg' + '" d="M48,23.782c0,0.552-0.447,1-1,1H26c-0.552,0-1-0.448-1-1l0,0c0-0.552,0.448-1,1-1h21C47.553,22.782,48,23.23,48,23.782  L48,23.782z"/><path class="' + 'resumeLineSvg' + '" d="M48,29.782c0,0.552-0.447,1-1,1H26c-0.552,0-1-0.448-1-1l0,0c0-0.552,0.448-1,1-1h21C47.553,28.782,48,29.23,48,29.782  L48,29.782z"/><path class="' + 'resumeLineSvg' + '" d="M48,35.782c0,0.552-0.447,1-1,1H26c-0.552,0-1-0.448-1-1l0,0c0-0.552,0.448-1,1-1h21C47.553,34.782,48,35.23,48,35.782  L48,35.782z"/><path class="' + 'resumeLineSvg' + '" d="M75,45.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,44.782,75,45.229,75,45.782  L75,45.782z"/><path class="' + 'resumeLineSvg' + '" d="M75,51.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,50.782,75,51.229,75,51.782  L75,51.782z"/><path class="' + 'resumeLineSvg' + '" d="M75,57.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,56.782,75,57.229,75,57.782  L75,57.782z"/><path class="' + 'resumeLineSvg' + '" d="M75,63.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,62.782,75,63.229,75,63.782  L75,63.782z"/><path class="' + 'resumeLineSvg' + '" d="M75,70.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,69.782,75,70.229,75,70.782  L75,70.782z"/><path class="' + 'resumeLineSvg' + '" d="M75,77.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,76.782,75,77.229,75,77.782  L75,77.782z"/><path class="' + 'resumeLineSvg' + '" d="M55,84.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h28C54.553,83.782,55,84.229,55,84.782  L55,84.782z"/><circle cx="62.996" cy="20.078" r="5.783"/><path d="M71.99,31.643c-0.348-4.382-4.256-5.14-8.995-5.14S54.347,27.26,54,31.643c0,0.226,0,3.134,0,5.14  h3.213v-3.855c0,0,0-1.285,0.643-1.285c0,0.083,0,4.554,0,5.14h10.279c0-0.586,0-5.057,0-5.14c0.644,0,0.644,1.285,0.644,1.285  v3.855H72C72.001,34.656,71.999,31.681,71.99,31.643z M62.995,35.498l-0.99-1.274l0.99-6.436l0.989,6.432L62.995,35.498z"/><text x="0" y="115" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Jaime Carrion</text><text x="0" y="120" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>'
	                            }
	                        }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: _style2.default.title },
	                            'Resume'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'section',
	                    { className: _style2.default['social-icons'] },
	                    _react2.default.createElement(
	                        'a',
	                        {
	                            className: _style2.default['social-icon'],
	                            href: 'mailto:oksanabibik93@gmail.com'
	                        },
	                        _react2.default.createElement('i', { className: 'fa fa-envelope-o' })
	                    ),
	                    _react2.default.createElement(
	                        'a',
	                        {
	                            className: _style2.default['social-icon'],
	                            href: 'https://github.com/Oksanatishka',
	                            target: '_blank'
	                        },
	                        _react2.default.createElement('i', { className: 'fa fa-github' })
	                    ),
	                    _react2.default.createElement(
	                        'a',
	                        {
	                            className: _style2.default['social-icon'],
	                            href: 'https://www.linkedin.com/in/oksana-bibik-27349591/',
	                            target: '_blank'
	                        },
	                        _react2.default.createElement('i', { className: 'fa fa-linkedin' })
	                    )
	                )
	            );
	        }
	    }]);
	    return Menu;
	}(_react.Component);

	exports.default = Menu;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(494);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___1kfdW {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 170px;\n    z-index: 1;\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    /* background: url('http://www.schipholdestinationunknown.nl/static/img/backgrounds/bg-application.jpg'); */\n    /* background-size: cover; */\n    background-color: cadetblue;\n}\n\n.style__menu-items___3rrr- {\n    text-align: center;\n}\n\n.style__menu-item___3h7mj {\n    color: white;\n    text-transform: uppercase;\n    display: block;\n    width: 100%;\n    color: white;\n    font-size: 16px;\n    position: relative;\n    padding: 40px 0;\n    cursor: pointer;\n}\n\n.style__menu-item___3h7mj svg {\n    width: 60px;\n    fill: white;\n}\n\n.style__menu-item___3h7mj:hover {\n    text-decoration: none;\n}\n\n.style__title___10nPY {\n    font-size: 12px;\n}\n\n.style__social-icons___1F1bW {\n    padding-top: 10px;\n    border-top: 1px solid white;\n}\n\n.style__social-icon___3FaG7 {\n    display: inline-block;\n    padding: 5px;\n    font-size: 20px;\n    color: white;\n}\n\n.style__menu-item___3h7mj:visited,\n.style__social-icon___3FaG7:visited {\n    color: white;\n}\n", "", {"version":3,"sources":["/./components/Menu/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,QAAQ;IACR,OAAO;IACP,aAAa;IACb,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,4GAA4G;IAC5G,6BAA6B;IAC7B,4BAA4B;CAC/B;;AAED;IACI,mBAAmB;CACtB;;AAED;IACI,aAAa;IACb,0BAA0B;IAC1B,eAAe;IACf,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;CACnB;;AAED;IACI,YAAY;IACZ,YAAY;CACf;;AAED;IACI,sBAAsB;CACzB;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI,kBAAkB;IAClB,4BAA4B;CAC/B;;AAED;IACI,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,aAAa;CAChB;;AAED;;IAEI,aAAa;CAChB","file":"style.css","sourcesContent":[".main {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 170px;\n    z-index: 1;\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    /* background: url('http://www.schipholdestinationunknown.nl/static/img/backgrounds/bg-application.jpg'); */\n    /* background-size: cover; */\n    background-color: cadetblue;\n}\n\n.menu-items {\n    text-align: center;\n}\n\n.menu-item {\n    color: white;\n    text-transform: uppercase;\n    display: block;\n    width: 100%;\n    color: white;\n    font-size: 16px;\n    position: relative;\n    padding: 40px 0;\n    cursor: pointer;\n}\n\n.menu-item svg {\n    width: 60px;\n    fill: white;\n}\n\n.menu-item:hover {\n    text-decoration: none;\n}\n\n.title {\n    font-size: 12px;\n}\n\n.social-icons {\n    padding-top: 10px;\n    border-top: 1px solid white;\n}\n\n.social-icon {\n    display: inline-block;\n    padding: 5px;\n    font-size: 20px;\n    color: white;\n}\n\n.menu-item:visited,\n.social-icon:visited {\n    color: white;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___1kfdW",
		"menu-items": "style__menu-items___3rrr-",
		"menu-item": "style__menu-item___3h7mj",
		"title": "style__title___10nPY",
		"social-icons": "style__social-icons___1F1bW",
		"social-icon": "style__social-icon___3FaG7"
	};

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(496);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./default.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./default.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, "\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n    display: block\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n    display: inline-block;\n    vertical-align: baseline\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0\n}\n\n[hidden],\ntemplate {\n    display: none\n}\n\n* {\n    box-sizing: border-box;\n}\n\na {\n    background: transparent\n}\n\na:active,\na:hover {\n    outline: 0\n}\n\nabbr[title] {\n    border-bottom: 1px dotted\n}\n\nb,\nstrong {\n    font-weight: bold\n}\n\ndfn {\n    font-style: italic\n}\n\nmark {\n    background: #ff0;\n    color: #000\n}\n\nsmall {\n    font-size: 80%\n}\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline\n}\n\nsup {\n    top: -0.5em\n}\n\nsub {\n    bottom: -0.25em\n}\n\nimg {\n    border: 0\n}\n\nfigure {\n    margin: 1em 40px\n}\n\nhr {\n    box-sizing: content-box;\n    height: 0\n}\n\npre {\n    overflow: auto\n}\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, monospace;\n    font-size: 1em\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    color: inherit;\n    font: inherit;\n    margin: 0\n}\n\nbutton {\n    overflow: visible\n}\n\nbutton,\nselect {\n    text-transform: none\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button;\n    cursor: pointer\n}\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0\n}\n\ninput {\n    line-height: normal\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto\n}\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield;\n    box-sizing: content-box\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none\n}\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em\n}\n\nlegend {\n    border: 0;\n    padding: 0\n}\n\ntextarea {\n    overflow: auto\n}\n\noptgroup {\n    font-weight: bold\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0\n}\n\ntd,\nth {\n    padding: 0\n}\n\nstrong {\n    font-weight: bold\n}\n\nhtml,\nbody,\ndiv,\nmain,\nspan,\nobject,\niframe,\nimg,\ntt,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\ntable,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nsection,\naudio,\nvideo {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none\n}\n\np,\na,\nstrong,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\ninput,\ntextarea {\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text\n}\n\n::-moz-selection {\n    color: #e4f4f3;\n    background-color: #005f63\n}\n\n::selection {\n    color: #e4f4f3;\n    background-color: #005f63\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhr {\n    height: 1px;\n    border: 0;\n    background: #e0e0e0\n}\n\n", "", {"version":3,"sources":["/./containers/App/default.css"],"names":[],"mappings":";AACA;;;;;;;;;;;;IAYI,cAAc;CACjB;;AAED;;;;IAII,sBAAsB;IACtB,wBAAwB;CAC3B;;AAED;IACI,cAAc;IACd,SAAS;CACZ;;AAED;;IAEI,aAAa;CAChB;;AAED;IACI,uBAAuB;CAC1B;;AAED;IACI,uBAAuB;CAC1B;;AAED;;IAEI,UAAU;CACb;;AAED;IACI,yBAAyB;CAC5B;;AAED;;IAEI,iBAAiB;CACpB;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,iBAAiB;IACjB,WAAW;CACd;;AAED;IACI,cAAc;CACjB;;AAED;;IAEI,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,wBAAwB;CAC3B;;AAED;IACI,WAAW;CACd;;AAED;IACI,eAAe;CAClB;;AAED;IACI,SAAS;CACZ;;AAED;IACI,gBAAgB;CACnB;;AAED;IAEI,wBAAwB;IACxB,SAAS;CACZ;;AAED;IACI,cAAc;CACjB;;AAED;;;;IAII,kCAAkC;IAClC,cAAc;CACjB;;AAED;;;;;IAKI,eAAe;IACf,cAAc;IACd,SAAS;CACZ;;AAED;IACI,iBAAiB;CACpB;;AAED;;IAEI,oBAAoB;CACvB;;AAED;;;;IAII,2BAA2B;IAC3B,eAAe;CAClB;;AAED;;IAEI,eAAe;CAClB;;AAED;;IAEI,UAAU;IACV,UAAU;CACb;;AAED;IACI,mBAAmB;CACtB;;AAED;;IAGI,uBAAuB;IACvB,UAAU;CACb;;AAED;;IAEI,YAAY;CACf;;AAED;IACI,8BAA8B;IAE9B,uBAAuB;CAC1B;;AAED;;IAEI,wBAAwB;CAC3B;;AAED;IACI,0BAA0B;IAC1B,cAAc;IACd,8BAA8B;CACjC;;AAED;IACI,UAAU;IACV,UAAU;CACb;;AAED;IACI,cAAc;CACjB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,0BAA0B;IAC1B,iBAAiB;CACpB;;AAED;;IAEI,UAAU;CACb;;AAED;IACI,iBAAiB;CACpB;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuCI,0BAAiB;OAAjB,uBAAiB;QAAjB,sBAAiB;YAAjB,iBAAiB;CACpB;;AAED;;;;;;;;;;;IAWI,0BAAiB;OAAjB,uBAAiB;QAAjB,sBAAiB;YAAjB,iBAAiB;CACpB;;AAED;IACI,eAAe;IACf,yBAAyB;CAC5B;;AAED;IACI,eAAe;IACf,yBAAyB;CAC5B;;AAED;EACE,oBAAoB;CACrB;;AAED;IACI,YAAY;IACZ,UAAU;IACV,mBAAmB;CACtB","file":"default.css","sourcesContent":["\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n    display: block\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n    display: inline-block;\n    vertical-align: baseline\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0\n}\n\n[hidden],\ntemplate {\n    display: none\n}\n\n* {\n    box-sizing: border-box;\n}\n\na {\n    background: transparent\n}\n\na:active,\na:hover {\n    outline: 0\n}\n\nabbr[title] {\n    border-bottom: 1px dotted\n}\n\nb,\nstrong {\n    font-weight: bold\n}\n\ndfn {\n    font-style: italic\n}\n\nmark {\n    background: #ff0;\n    color: #000\n}\n\nsmall {\n    font-size: 80%\n}\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline\n}\n\nsup {\n    top: -0.5em\n}\n\nsub {\n    bottom: -0.25em\n}\n\nimg {\n    border: 0\n}\n\nfigure {\n    margin: 1em 40px\n}\n\nhr {\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0\n}\n\npre {\n    overflow: auto\n}\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, monospace;\n    font-size: 1em\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    color: inherit;\n    font: inherit;\n    margin: 0\n}\n\nbutton {\n    overflow: visible\n}\n\nbutton,\nselect {\n    text-transform: none\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button;\n    cursor: pointer\n}\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0\n}\n\ninput {\n    line-height: normal\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto\n}\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield;\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none\n}\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em\n}\n\nlegend {\n    border: 0;\n    padding: 0\n}\n\ntextarea {\n    overflow: auto\n}\n\noptgroup {\n    font-weight: bold\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0\n}\n\ntd,\nth {\n    padding: 0\n}\n\nstrong {\n    font-weight: bold\n}\n\nhtml,\nbody,\ndiv,\nmain,\nspan,\nobject,\niframe,\nimg,\ntt,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\ntable,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nsection,\naudio,\nvideo {\n    user-select: none\n}\n\np,\na,\nstrong,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\ninput,\ntextarea {\n    user-select: text\n}\n\n::-moz-selection {\n    color: #e4f4f3;\n    background-color: #005f63\n}\n\n::selection {\n    color: #e4f4f3;\n    background-color: #005f63\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhr {\n    height: 1px;\n    border: 0;\n    background: #e0e0e0\n}\n\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(498);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, "html {\n    width: 100%;\n    height: 100%;\n    font-family: museo-sans,sans-serif;\n    font-weight: 100;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    font-size: 87.5%;\n    overflow: hidden;\n    box-sizing: border-box;\n}\n\nbody {\n    background: #292827;\n    padding-left: 170px;\n    height: 100%;\n    font: 100%/1.5 museo-sans,sans-serif;\n    font-weight: 100;\n    color: #000;\n    margin: 0;\n    text-rendering: optimizeLegibility;\n}\n\na {\n    color: black;\n    text-decoration: none;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-tap-highlight-color: transparent\n}\n\na:hover {\n    text-decoration: underline\n}\n\na:visited {\n    color: black;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    line-height: 1.25;\n    font-weight: 100;\n}\n\nh1 {\n    font-size: 2.229rem;\n}\n\n@media only screen and (min-width: 30em) {\n    h1 {\n        font-size: 2.618rem\n    }\n}\n\nh2 {\n    font-size: 1.618rem\n}\n\nh3 {\n    font-size: 1.378rem\n}\n\nh4 {\n    font-size: 1rem\n}\n\nh5 {\n    font-size: 0.852rem\n}\n\nh6 {\n    font-size: 0.618rem;\n}\n\nh1 {\n    margin: 0.67em 0\n}\n\n@media only screen and (min-width: 48em) {\n    html {\n        font-size: 100%\n    }\n}\n\n@media only screen and (min-width: 75em) {\n    html {\n        font-size: 18px\n    }\n}\n\n.style__main___1zbwg{\n  height: 100%;\n  width: 100%;\n}\n\n.style__view___3nhvp{\n  height: 100%;\n  width: 100%;\n  position:  relative;\n  overflow: hidden;\n}\n", "", {"version":3,"sources":["/./containers/App/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,iBAAiB;IACjB,2BAA2B;IAC3B,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;CAC1B;;AAED;IACI,oBAAoB;IACpB,oBAAoB;IACpB,aAAa;IACb,qCAAqC;IACrC,iBAAiB;IACjB,YAAY;IACZ,UAAU;IACV,mCAAmC;CACtC;;AAED;IACI,aAAa;IACb,sBAAsB;IACtB,yCAAyC;IACzC,wCAAwC;CAC3C;;AAED;IACI,0BAA0B;CAC7B;;AAED;IACI,aAAa;CAChB;;AAED;;;;;;IAMI,kBAAkB;IAClB,iBAAiB;CACpB;;AAED;IACI,oBAAoB;CACvB;;AAED;IACI;QACI,mBAAmB;KACtB;CACJ;;AAED;IACI,mBAAmB;CACtB;;AAED;IACI,mBAAmB;CACtB;;AAED;IACI,eAAe;CAClB;;AAED;IACI,mBAAmB;CACtB;;AAED;IACI,oBAAoB;CACvB;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI;QACI,eAAe;KAClB;CACJ;;AAED;IACI;QACI,eAAe;KAClB;CACJ;;AAED;EACE,aAAa;EACb,YAAY;CACb;;AAED;EACE,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,iBAAiB;CAClB","file":"style.css","sourcesContent":["html {\n    width: 100%;\n    height: 100%;\n    font-family: museo-sans,sans-serif;\n    font-weight: 100;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    font-size: 87.5%;\n    overflow: hidden;\n    box-sizing: border-box;\n}\n\nbody {\n    background: #292827;\n    padding-left: 170px;\n    height: 100%;\n    font: 100%/1.5 museo-sans,sans-serif;\n    font-weight: 100;\n    color: #000;\n    margin: 0;\n    text-rendering: optimizeLegibility;\n}\n\na {\n    color: black;\n    text-decoration: none;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-tap-highlight-color: transparent\n}\n\na:hover {\n    text-decoration: underline\n}\n\na:visited {\n    color: black;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    line-height: 1.25;\n    font-weight: 100;\n}\n\nh1 {\n    font-size: 2.229rem;\n}\n\n@media only screen and (min-width: 30em) {\n    h1 {\n        font-size: 2.618rem\n    }\n}\n\nh2 {\n    font-size: 1.618rem\n}\n\nh3 {\n    font-size: 1.378rem\n}\n\nh4 {\n    font-size: 1rem\n}\n\nh5 {\n    font-size: 0.852rem\n}\n\nh6 {\n    font-size: 0.618rem;\n}\n\nh1 {\n    margin: 0.67em 0\n}\n\n@media only screen and (min-width: 48em) {\n    html {\n        font-size: 100%\n    }\n}\n\n@media only screen and (min-width: 75em) {\n    html {\n        font-size: 18px\n    }\n}\n\n.main{\n  height: 100%;\n  width: 100%;\n}\n\n.view{\n  height: 100%;\n  width: 100%;\n  position:  relative;\n  overflow: hidden;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___1zbwg",
		"view": "style__view___3nhvp"
	};

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _get2 = __webpack_require__(376);

	var _get3 = _interopRequireDefault(_get2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(500);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _ArrowLink = __webpack_require__(506);

	var _ArrowLink2 = _interopRequireDefault(_ArrowLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function (_View) {
	    (0, _inherits3.default)(Home, _View);

	    function Home() {
	        (0, _classCallCheck3.default)(this, Home);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Home).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Home, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.title = document.getElementsByClassName(_style2.default.title);
	            this.subtitle = document.getElementsByClassName(_style2.default.subtitle);
	            this.portfolioBtn = document.getElementsByClassName(_style2.default.portfolioBtn);

	            var tl = new TimelineLite();

	            tl.fromTo(this.title, 0.6, {
	                scale: 0.8,
	                opacity: 0
	            }, {
	                scale: 1,
	                opacity: 1,
	                ease: Strong.easeOut
	            });
	            tl.fromTo(this.subtitle, 0.6, {
	                scale: 0.8,
	                opacity: 0
	            }, {
	                scale: 1,
	                opacity: 1,
	                ease: Strong.easeOut
	            });
	            tl.fromTo(this.portfolioBtn, 0.6, {
	                scale: 0.8,
	                opacity: 0
	            }, {
	                scale: 1,
	                opacity: 1,
	                ease: Strong.easeOut
	            });
	        }
	    }, {
	        key: 'componentWillLeave',
	        value: function componentWillLeave(callback) {
	            this._animateOut(callback);
	        }
	    }, {
	        key: '_animateOut',
	        value: function _animateOut(callback) {
	            var timeline = new TimelineMax({});
	            timeline.to(this.title, 0.2, {
	                ease: Quad.easeIn,
	                scale: 2,
	                opacity: 0
	            });
	            timeline.to(this.subtitle, 0.2, {
	                ease: Quad.easeIn,
	                scale: 2,
	                opacity: 0
	            });
	            timeline.to(this.portfolioBtn, 0.2, {
	                ease: Quad.easeIn,
	                scale: 2,
	                opacity: 0
	            });
	            (0, _get3.default)((0, _getPrototypeOf2.default)(Home.prototype), '_animateOut', this).call(this, callback);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var history = this.props.history;

	            return _react2.default.createElement(
	                'div',
	                { className: _style2.default.main },
	                _react2.default.createElement(
	                    'h1',
	                    { className: _style2.default.title },
	                    'Oksana Bibik'
	                ),
	                _react2.default.createElement(
	                    'h3',
	                    { className: _style2.default.subtitle },
	                    'Web developer'
	                ),
	                _react2.default.createElement(
	                    'a',
	                    {
	                        onClick: function onClick() {
	                            return history.pushState(null, '/portfolio');
	                        },
	                        className: _style2.default.portfolioBtn
	                    },
	                    _react2.default.createElement(_ArrowLink2.default, { textLabel: 'View portfolio' })
	                )
	            );
	        }
	    }]);
	    return Home;
	}(_View3.default);

	exports.default = Home;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(501);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___1i781{\n  text-align: center;\n  position: absolute;\n  left: -170px;\n  right: 0;\n  margin: auto;\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n  opacity: 1 !important;\n  top: 50%;\n  -webkit-transform: translateY(-50%) !important;\n          transform: translateY(-50%) !important\n}\n\n.style__title___30ZyR{\n  color: white;\n  opacity: 0;\n}\n\n.style__subtitle___2tiF0{\n  color: #757575;\n  opacity: 0;\n}\n\n.style__title___30ZyR, .style__subtitle___2tiF0 {\n  line-height: 50px;\n  font-family: museo-sans,sans-serif;\n  font-weight: 100;\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  margin: 0;\n}\n\n.style__portfolioBtn___2UOtc{\n  opacity: 0;\n  display: block;\n}\n\n", "", {"version":3,"sources":["/./components/Home/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,aAAa;EACb,uCAA+B;UAA/B,+BAA+B;EAC/B,sBAAsB;EACtB,SAAS;EACT,+CAAsC;UAAtC,sCAAsC;CACvC;;AAED;EACE,aAAa;EACb,WAAW;CACZ;;AAED;EACE,eAAe;EACf,WAAW;CACZ;;AAED;EACE,kBAAkB;EAClB,mCAAmC;EACnC,iBAAiB;EACjB,mCAAmC;EACnC,4BAA4B;EAC5B,UAAU;CACX;;AAED;EACE,WAAW;EACX,eAAe;CAChB","file":"style.css","sourcesContent":[".main{\n  text-align: center;\n  position: absolute;\n  left: -170px;\n  right: 0;\n  margin: auto;\n  transform: scale(1) !important;\n  opacity: 1 !important;\n  top: 50%;\n  transform: translateY(-50%) !important\n}\n\n.title{\n  color: white;\n  opacity: 0;\n}\n\n.subtitle{\n  color: #757575;\n  opacity: 0;\n}\n\n.title, .subtitle {\n  line-height: 50px;\n  font-family: museo-sans,sans-serif;\n  font-weight: 100;\n  text-rendering: optimizeLegibility;\n  font-smoothing: antialiased;\n  margin: 0;\n}\n\n.portfolioBtn{\n  opacity: 0;\n  display: block;\n}\n\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___1i781",
		"title": "style__title___30ZyR",
		"subtitle": "style__subtitle___2tiF0",
		"portfolioBtn": "style__portfolioBtn___2UOtc"
	};

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _defineProperty2 = __webpack_require__(503);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(480);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _style = __webpack_require__(504);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var View = function (_Component) {
	  (0, _inherits3.default)(View, _Component);

	  function View() {
	    (0, _classCallCheck3.default)(this, View);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(View).apply(this, arguments));
	  }

	  (0, _createClass3.default)(View, [{
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this._animateIn(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this._animateIn(callback);
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      this._animateOut(callback);
	    }
	  }, {
	    key: '_isBackwards',
	    value: function _isBackwards() {
	      var _props$navigation = this.props.navigation;
	      var curr_idx = _props$navigation.curr_idx;
	      var prev_idx = _props$navigation.prev_idx;

	      return curr_idx > prev_idx;
	    }
	  }, {
	    key: '_isSubPage',
	    value: function _isSubPage() {
	      var _props$navigation2 = this.props.navigation;
	      var curr_path = _props$navigation2.curr_path;
	      var prev_path = _props$navigation2.prev_path;

	      var r = curr_path.match(/\/[^\/]*/);
	      var o = prev_path.match(/\/[^\/]*/);

	      r = r ? r[0] : "";
	      o = o ? o[0] : "";

	      return r === o ? !0 : !1;
	    }
	  }, {
	    key: '_animateIn',
	    value: function _animateIn(callback) {
	      var _TweenMax$fromTo, _TweenMax$fromTo2;

	      var _props$navigation3 = this.props.navigation;
	      var curr_idx = _props$navigation3.curr_idx;
	      var prev_idx = _props$navigation3.prev_idx;
	      var curr_path = _props$navigation3.curr_path;
	      var prev_path = _props$navigation3.prev_path;
	      var backward = _props$navigation3.backward;

	      var axis = this._isSubPage() ? "xPercent" : "yPercent";
	      var element = _reactDom2.default.findDOMNode(this);
	      var direction = this._isBackwards() ? 1 : -1;

	      TweenMax.fromTo(element, 1.2, (_TweenMax$fromTo = { scale: 0.8, opacity: 0.5 }, (0, _defineProperty3.default)(_TweenMax$fromTo, axis, direction * 100), (0, _defineProperty3.default)(_TweenMax$fromTo, 'ease', Expo.easeInOut), (0, _defineProperty3.default)(_TweenMax$fromTo, "onComplete", callback), _TweenMax$fromTo), (_TweenMax$fromTo2 = { scale: 1, opacity: 1 }, (0, _defineProperty3.default)(_TweenMax$fromTo2, axis, 0), (0, _defineProperty3.default)(_TweenMax$fromTo2, 'ease', Expo.easeInOut), (0, _defineProperty3.default)(_TweenMax$fromTo2, "onComplete", callback), _TweenMax$fromTo2));
	    }
	  }, {
	    key: '_animateOut',
	    value: function _animateOut(callback) {
	      var _TweenMax$fromTo3;

	      var _props$navigation4 = this.props.navigation;
	      var curr_idx = _props$navigation4.curr_idx;
	      var prev_idx = _props$navigation4.prev_idx;
	      var curr_path = _props$navigation4.curr_path;
	      var prev_path = _props$navigation4.prev_path;
	      var backward = _props$navigation4.backward;

	      var element = _reactDom2.default.findDOMNode(this);
	      var axis = this._isSubPage() ? "xPercent" : "yPercent";
	      var direction = this._isBackwards() ? -1 : 1;

	      TweenMax.fromTo(element, 1, {}, (_TweenMax$fromTo3 = { scale: 0.8, opacity: 0.5
	      }, (0, _defineProperty3.default)(_TweenMax$fromTo3, axis, direction * 100), (0, _defineProperty3.default)(_TweenMax$fromTo3, 'ease', Expo.easeInOut), (0, _defineProperty3.default)(_TweenMax$fromTo3, "onComplete", callback), _TweenMax$fromTo3));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: _style2.default.main },
	        this.props.children
	      );
	    }
	  }]);
	  return View;
	}(_react.Component);

	exports.default = View;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(397);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(505);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, "\n.style__main___iLDKV {\n  z-index: 2;\n  background:  white;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0;\n  overflow: auto;\n}", "", {"version":3,"sources":["/./components/View/style.css"],"names":[],"mappings":";AACA;EACE,WAAW;EACX,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,QAAQ;EACR,eAAe;CAChB","file":"style.css","sourcesContent":["\n.main {\n  z-index: 2;\n  background:  white;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0;\n  overflow: auto;\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___iLDKV"
	};

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(507);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArrowLink = function (_Component) {
	  (0, _inherits3.default)(ArrowLink, _Component);

	  function ArrowLink() {
	    (0, _classCallCheck3.default)(this, ArrowLink);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ArrowLink).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ArrowLink, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.line = document.getElementsByClassName(_style2.default.line);
	      this.arrow = document.getElementsByClassName(_style2.default.arrow);
	      this.circle = document.getElementsByClassName(_style2.default.circle);
	    }
	  }, {
	    key: 'onHover',
	    value: function onHover() {
	      TweenMax.fromTo(this.line, 0.3, { x: -20, y: 0, opacity: 0 }, { x: 6, y: 1, opacity: 1 });
	      TweenMax.to(this.arrow, 0.3, { x: 12 });
	      TweenMax.to(this.circle, 0, { borderWidth: 0 });
	    }
	  }, {
	    key: 'onHoverOut',
	    value: function onHoverOut() {
	      TweenMax.fromTo(this.line, 0.3, { x: 6, opacity: 1 }, { x: -20, opacity: 0 });
	      TweenMax.to(this.arrow, 0.3, { x: 0 });
	      TweenMax.to(this.circle, 0, { borderWidth: 1 });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.main },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.campaignTitle },
	          _react2.default.createElement(
	            'div',
	            { onMouseEnter: this.onHover.bind(this),
	              onMouseLeave: this.onHoverOut.bind(this),
	              className: _style2.default.btn },
	            _react2.default.createElement(
	              'p',
	              null,
	              this.props.textLabel
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: _style2.default.circle },
	              _react2.default.createElement('div', { className: _style2.default.line }),
	              _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: '<svg class="' + _style2.default.arrow + '" arrow=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-right"></use></svg>' } })
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return ArrowLink;
	}(_react.Component);

	exports.default = ArrowLink;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(508);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__btn___8EOt1{\n  position: relative;\n  cursor: pointer;\n  padding-right: 35px;\n  display: inline-block;\n  color: white;\n}\n\n.style__circle___WY9GB{\n  right: 0;\n  top: 50%;\n  margin-top: -13px;\n  position: absolute;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  width: 25px;\n  height: 25px;\n}\n\n.style__line___2SKtJ{\n  position: absolute;\n  width: 24px;\n  height: 1px;\n  background-color: white;\n  top: 11px;\n  left: -4px;\n  opacity: 0;\n}\n\n.style__arrow___3DgCA{\n  width: 5px;\n  height: 7px;\n  margin: -3.5px -2px;\n  top: 50%;\n  left: 50%;\n  fill: #fff;\n  position: absolute;\n}\n", "", {"version":3,"sources":["/./components/ArrowLink/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;CACd;;AAED;EACE,SAAS;EACT,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;CACd;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,wBAAwB;EACxB,UAAU;EACV,WAAW;EACX,WAAW;CACZ;;AAED;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,SAAS;EACT,UAAU;EACV,WAAW;EACX,mBAAmB;CACpB","file":"style.css","sourcesContent":[".btn{\n  position: relative;\n  cursor: pointer;\n  padding-right: 35px;\n  display: inline-block;\n  color: white;\n}\n\n.circle{\n  right: 0;\n  top: 50%;\n  margin-top: -13px;\n  position: absolute;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  width: 25px;\n  height: 25px;\n}\n\n.line{\n  position: absolute;\n  width: 24px;\n  height: 1px;\n  background-color: white;\n  top: 11px;\n  left: -4px;\n  opacity: 0;\n}\n\n.arrow{\n  width: 5px;\n  height: 7px;\n  margin: -3.5px -2px;\n  top: 50%;\n  left: 50%;\n  fill: #fff;\n  position: absolute;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"btn": "style__btn___8EOt1",
		"circle": "style__circle___WY9GB",
		"line": "style__line___2SKtJ",
		"arrow": "style__arrow___3DgCA"
	};

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(510);

	var _style2 = _interopRequireDefault(_style);

	var _global = __webpack_require__(512);

	var _global2 = _interopRequireDefault(_global);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _classnames = __webpack_require__(514);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var About = function (_View) {
	    (0, _inherits3.default)(About, _View);

	    function About() {
	        (0, _classCallCheck3.default)(this, About);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(About).apply(this, arguments));
	    }

	    (0, _createClass3.default)(About, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var tweentxt = document.getElementsByClassName(_style2.default.tweentxt);
	            var greetings = document.getElementsByClassName(_style2.default.greetings);
	            var profilepic = document.getElementsByClassName(_style2.default.profilepic);
	            TweenMax.fromTo(greetings, 0.3, { x: 100, opacity: 0, delay: 1 }, { x: 0, opacity: 1, delay: 1 });
	            TweenMax.staggerFrom(tweentxt, 0.3, { y: 40, opacity: 0, delay: 1.2 }, 0.15);
	            TweenMax.fromTo(profilepic, 0.4, { y: -540, scale: 0, opacity: 0, delay: 1.5 }, { y: 40, scale: 1, opacity: 1, delay: 1.5 });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _global2.default.container },
	                    _react2.default.createElement(
	                        'div',
	                        { className: _style2.default.main },
	                        _react2.default.createElement(
	                            'section',
	                            null,
	                            _react2.default.createElement('img', {
	                                className: _style2.default.profilepic,
	                                src: 'profile.png'
	                            }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: (0, _classnames2.default)(_style2.default.greetings) },
	                                'Greetings,'
	                            ),
	                            _react2.default.createElement(
	                                'h1',
	                                { className: _style2.default.tweentxt },
	                                'I\'m a junior web developer with 2+ years of professional experience, based in San Francisco Bay Area'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: _style2.default.tweentxt },
	                                'I develop ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'front-end'
	                                ),
	                                ' for responsive',
	                                ' ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'websites'
	                                ),
	                                ' and ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'web apps'
	                                ),
	                                ' utilizing such cutting edge technologies as',
	                                ' ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'Javascript, React, Redux, CSS, Graphql, Node.js, MongoDb, Webpack, Wordpress'
	                                ),
	                                '.',
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement('br', null),
	                                'I\'m focused on developing',
	                                ' ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'high quality, interactive, modern, modular, fast'
	                                ),
	                                ' ',
	                                'products using latest technologies, frameworks and approaches. I\'m also passioned and obscessed about ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'design, UI'
	                                ),
	                                ' and ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'UX'
	                                ),
	                                '.',
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement('br', null),
	                                'Over the past few years I contributed / developed over',
	                                ' ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    '20 websites / web apps / mobile sites'
	                                ),
	                                ' for many clients in the US tourism industry.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'section',
	                            { className: _style2.default.tweentxt },
	                            _react2.default.createElement(
	                                'h2',
	                                null,
	                                'Skills & Techniques'
	                            ),
	                            _react2.default.createElement(
	                                'ul',
	                                null,
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'JavaScript (ES5, ES6)'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Graphql'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'HTML5'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'CSS3'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Node.js'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'ul',
	                                null,
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'React'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Redux'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Express.js'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'REST'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Wordpress'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'ul',
	                                null,
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Stylus/Less'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Webpack/Grunt/Gulp'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'MongoDB'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'MySQL'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Git'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Responsive design'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'TDD'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'ul',
	                                null,
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Ajax'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'OOP'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Performance Opt-ons'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'SEO Opt-ons'
	                                ),
	                                _react2.default.createElement(
	                                    'li',
	                                    null,
	                                    'Linux servers'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'section',
	                            { className: _style2.default.tweentxt },
	                            _react2.default.createElement(
	                                'h2',
	                                null,
	                                'Few words about this website'
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                'It has been designed and built by myself from the scratch using ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'React'
	                                ),
	                                ', ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'Redux'
	                                ),
	                                ' and awesome ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'GreenSock'
	                                ),
	                                ' animation library.'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return About;
	}(_View3.default);

	exports.default = About;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(511);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, "\n.style__main___2r-XO {\n  text-align: left;\n}\n\n.style__greetings___1oaWk {\n\tfont-size: 3.2rem;\n\tline-height: 1;\n\tdisplay: block;\n}\n\n.style__main___2r-XO h1 {\n\tfont-size: 1.618rem\n}\n\n.style__main___2r-XO > section{\n\tpadding-bottom: 5%\n}\n\n.style__main___2r-XO section ul {\n\tdisplay: inline-block;\n\tmargin-right: 40px;\n\tvertical-align: top;\n}\n\n.style__profilepic___glwcp{\n\tfloat: right;\n    margin-left: 2%;\n    width: 25%;\n    border-radius: 17%;\n}\n\n.style__tweentxt___3jHg_{\n\n}\n", "", {"version":3,"sources":["/./components/About/style.css"],"names":[],"mappings":";AACA;EACE,iBAAiB;CAClB;;AAED;CACC,kBAAkB;CAClB,eAAe;CACf,eAAe;CACf;;AAED;CACC,mBAAmB;CACnB;;AAED;CACC,kBAAkB;CAClB;;AAED;CACC,sBAAsB;CACtB,mBAAmB;CACnB,oBAAoB;CACpB;;AAED;CACC,aAAa;IACV,gBAAgB;IAChB,WAAW;IACX,mBAAmB;CACtB;;AAED;;CAEC","file":"style.css","sourcesContent":["\n.main {\n  text-align: left;\n}\n\n.greetings {\n\tfont-size: 3.2rem;\n\tline-height: 1;\n\tdisplay: block;\n}\n\n.main h1 {\n\tfont-size: 1.618rem\n}\n\n.main > section{\n\tpadding-bottom: 5%\n}\n\n.main section ul {\n\tdisplay: inline-block;\n\tmargin-right: 40px;\n\tvertical-align: top;\n}\n\n.profilepic{\n\tfloat: right;\n    margin-left: 2%;\n    width: 25%;\n    border-radius: 17%;\n}\n\n.tweentxt{\n\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___2r-XO",
		"greetings": "style__greetings___1oaWk",
		"profilepic": "style__profilepic___glwcp",
		"tweentxt": "style__tweentxt___3jHg_"
	};

/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(513);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./global.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./global.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".global__clearfix___1AsF8:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.global__container___3p4Sf{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}", "", {"version":3,"sources":["/./containers/App/global.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,eAAe;EACf,YAAY;CACb;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB","file":"global.css","sourcesContent":[".clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.container{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"clearfix": "global__clearfix___1AsF8",
		"container": "global__container___3p4Sf"
	};

/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(514);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(516);

	var _style2 = _interopRequireDefault(_style);

	var _global = __webpack_require__(512);

	var _global2 = _interopRequireDefault(_global);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Thumb = __webpack_require__(518);

	var _Thumb2 = _interopRequireDefault(_Thumb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var thumbs = [{
	    coloredImg: 'clinton-thumb-w.jpg',
	    noColoredImg: 'clinton-thumb-b.jpg',
	    title: 'Clinton county, OH',
	    subtitle: 'Responsive website',
	    slug: 'clinton'
	}, {
	    coloredImg: 'gordon-thumb-w.jpg',
	    noColoredImg: 'gordon-thumb-b.jpg',
	    title: 'Gordon county, GA',
	    subtitle: 'Responsive website',
	    slug: 'gordon'
	}, {
	    coloredImg: 'abingdon-thumb-w.jpg',
	    noColoredImg: 'abingdon-thumb-b.jpg',
	    title: 'Abingdon, VA',
	    subtitle: 'eLearning website',
	    slug: 'abingdon'
	}, {
	    coloredImg: 'sts-thumb-w.jpg',
	    noColoredImg: 'sts-thumb-b.jpg',
	    title: 'Southeast Tourism Society',
	    subtitle: 'Responsive website',
	    slug: 'sts'
	}, {
	    coloredImg: 'henry-thumb-w.jpg',
	    noColoredImg: 'henry-thumb-b.jpg',
	    title: 'Henry county, GA',
	    subtitle: 'Responsive website',
	    slug: 'henry'
	}, {
	    coloredImg: 'henryweddings-thumb-w.jpg',
	    noColoredImg: 'henryweddings-thumb-b.jpg',
	    title: 'Henry county weddings, GA',
	    subtitle: 'Responsive website',
	    slug: 'henry-weddings'
	}, {
	    coloredImg: 'bradenton-thumb-w.jpg',
	    noColoredImg: 'bradenton-thumb-b.jpg',
	    title: 'Bradenton area, FL',
	    subtitle: 'eLearning website',
	    slug: 'bradenton'
	}, {
	    coloredImg: 'v2d-thumb-w.jpg',
	    noColoredImg: 'v2d-thumb-b.jpg',
	    title: 'Vacations2discover',
	    subtitle: 'Responsive website',
	    slug: 'v2d'
	}, {
	    coloredImg: 'iti-thumb-w.jpg',
	    noColoredImg: 'iti-thumb-b.jpg',
	    title: 'ITI Marketing',
	    subtitle: 'Responsive website',
	    slug: 'iti'
	}, {
	    coloredImg: 'hospitality-thumb-w.jpg',
	    noColoredImg: 'hospitality-thumb-b.jpg',
	    title: 'Hospitality Ventures',
	    subtitle: 'Sales app',
	    slug: 'hospitality'
	}, {
	    coloredImg: 'braselton-thumb-w.jpg',
	    noColoredImg: 'braselton-thumb-b.jpg',
	    title: 'Braselton, GA',
	    subtitle: 'Responsive website',
	    slug: 'braselton'
	}, {
	    coloredImg: 'ptc-thumb-w.jpg',
	    noColoredImg: 'ptc-thumb-b.jpg',
	    title: 'Peachtree city, GA',
	    subtitle: 'Responsive website',
	    slug: 'ptc'
	}, {
	    coloredImg: 'bacvb-thumb-w.jpg',
	    noColoredImg: 'bacvb-thumb-b.jpg',
	    title: 'Bradenton, FL',
	    subtitle: 'Sales app',
	    slug: 'bacvb'
	}];

	var Portfolio = function (_View) {
	    (0, _inherits3.default)(Portfolio, _View);

	    function Portfolio() {
	        (0, _classCallCheck3.default)(this, Portfolio);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Portfolio).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Portfolio, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var tweentxt = document.getElementsByClassName(_style2.default.tweentxt);
	            var heading = document.getElementsByClassName(_style2.default.heading);
	            TweenMax.fromTo(heading, 0.3, { x: 100, opacity: 0, delay: 1 }, { x: 0, opacity: 1, delay: 1 });
	            TweenMax.staggerFrom(tweentxt, 0.3, { y: 40, opacity: 0, delay: 1.2 }, 0.15);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _global2.default.container },
	                    _react2.default.createElement(
	                        'h1',
	                        { className: _style2.default.heading },
	                        'Portfolio'
	                    ),
	                    _react2.default.createElement(
	                        'h3',
	                        { className: _style2.default.tweentxt },
	                        'Below you can see over ',
	                        _react2.default.createElement(
	                            'b',
	                            null,
	                            '10'
	                        ),
	                        ' projects I contributed to or built from scratch.'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _style2.default.tweentxt },
	                        thumbs.map(function (thumb) {
	                            return _react2.default.createElement(_Thumb2.default, (0, _extends3.default)({}, _this2.props, thumb));
	                        }),
	                        _react2.default.createElement('div', { className: _global2.default.clearfix })
	                    )
	                )
	            );
	        }
	    }]);
	    return Portfolio;
	}(_View3.default);

	exports.default = Portfolio;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(517);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__tweentxt___GOVoJ {\n\t\n}\n\n.style__heading___2dbOE {\n\n}", "", {"version":3,"sources":["/./components/Portfolio/style.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;;CAEC","file":"style.css","sourcesContent":[".tweentxt {\n\t\n}\n\n.heading {\n\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"tweentxt": "style__tweentxt___GOVoJ",
		"heading": "style__heading___2dbOE"
	};

/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _defineProperty2 = __webpack_require__(503);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(514);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _style = __webpack_require__(519);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Thumb = function (_Component) {
	  (0, _inherits3.default)(Thumb, _Component);

	  function Thumb(props, context) {
	    (0, _classCallCheck3.default)(this, Thumb);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Thumb).call(this, props, context));

	    _this.state = {
	      hover: false
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Thumb, [{
	    key: 'changePage',
	    value: function changePage(slug) {
	      var history = this.props.history;

	      setTimeout(function () {
	        history.pushState(null, slug);
	      }, 0);
	    }
	  }, {
	    key: 'hover',
	    value: function hover(val) {
	      this.setState({ hover: val });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var coloredImg = _props.coloredImg;
	      var noColoredImg = _props.noColoredImg;
	      var slug = _props.slug;
	      var title = _props.title;
	      var subtitle = _props.subtitle;

	      var classes = (0, _classnames3.default)((0, _defineProperty3.default)({}, _style2.default.on, this.state.hover), _style2.default.main);

	      return _react2.default.createElement(
	        'div',
	        { onMouseEnter: this.hover.bind(this, true),
	          onMouseLeave: this.hover.bind(this, false),
	          onClick: this.changePage.bind(this, "/portfolio/" + slug),
	          className: classes },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.wrapper },
	          _react2.default.createElement('div', { className: _style2.default['thumb-nb'], style: { backgroundImage: 'url(' + noColoredImg + ')' } }),
	          _react2.default.createElement('div', { className: _style2.default['thumb-color'], style: { backgroundImage: 'url(' + coloredImg + ')' } }),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.description },
	            _react2.default.createElement(
	              'h5',
	              { className: _style2.default.title },
	              title
	            ),
	            _react2.default.createElement(
	              'small',
	              { className: _style2.default.subtitle },
	              subtitle
	            )
	          ),
	          _react2.default.createElement('div', { className: _style2.default['link-icon'] }),
	          _react2.default.createElement('div', { className: _style2.default.shadow })
	        )
	      );
	    }
	  }]);
	  return Thumb;
	}(_react.Component);

	exports.default = Thumb;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(520);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___5gH5f {\n    -webkit-perspective: 900px;\n            perspective: 900px;\n    -webkit-transform-style: flat;\n            transform-style: flat;\n    padding: 0 15px 15px 0;\n    float: left;\n    width: 33.3333%;\n}\n\n.style__wrapper___3uWly {\n    width: 100%;\n    height: 230px;\n    background-color: #ccc;\n    overflow: hidden;\n    position: relative;\n    -webkit-transform-style: flat;\n            transform-style: flat;\n    cursor: pointer;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 0% 50%;\n    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);\n    -webkit-transition: all 450ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\n    transition: all 450ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\n}\n\n.style__thumb-nb___2QpZd, .style__thumb-color___1QMlI {\n    width: 315px;\n    height: 230px;\n    background-color: #000;\n    background-size: cover;\n    background-position: 50% 50%;\n    -webkit-transition: all 850ms cubic-bezier(0.250, 0.460, 0.450, 0.940);\n    transition: all 850ms cubic-bezier(0.250, 0.460, 0.450, 0.940);\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 8;\n}\n\n.style__thumb-nb___2QpZd {\n    z-index: 9\n}\n\n.style__main___5gH5f.style__on___2k_Y- .style__thumb-nb___2QpZd {\n    opacity: 0;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n}\n\n.style__shadow___3FGst {\n    width: 315px;\n    height: 270px;\n    position: absolute;\n    z-index: 10;\n    left: 0;\n    top: 0;\n    -webkit-transition: all 650ms cubic-bezier(0.165, 0.840, 0.440, 1.000);\n    transition: all 650ms cubic-bezier(0.165, 0.840, 0.440, 1.000);\n    opacity: 1;\n    background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);\n    background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);\n    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n\n.style__main___5gH5f.style__on___2k_Y- .style__shadow___3FGst {\n    opacity: 0;\n}\n\n.style__main___5gH5f.style__on___2k_Y- .style__wrapper___3uWly {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n}\n\n.style__description___2mbBH {\n    position: absolute;\n    z-index: 20;\n    bottom: -80px;\n    left: 0;\n    width: 100%;\n    height: auto;\n    text-align: center;\n    padding: 10px 5px;\n    background-color: rgba(0, 0, 0, 0.75);\n    color: #fff;\n    -webkit-transition: all 450ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 240ms;\n    transition: all 450ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 240ms;\n    bottom: 0;\n}\n\n.style__description___2mbBH .style__title___2yD2P {\n    width: 100%;\n    text-transform: uppercase;\n    margin: 0 0 5px 0;\n    padding: 0;\n    letter-spacing: 0.12rem;\n    text-align: center;\n    color: white;\n}\n\n.style__link-icon___2p6yz {\n    position: absolute;\n    z-index: 20;\n    top: 20%;\n    left: 50%;\n    margin-left: -44px;\n    width: 88px;\n    height: 88px;\n    background-image: url(http://www.lempens-design.com/WD_IMAGES/_LUXEMBOURG/luxembourg-link-icon.png);\n    background-repeat: no-repeat;\n    background-position: center center;\n    -webkit-transition: all 450ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 300ms;\n    transition: all 450ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 300ms;\n    -webkit-transform: scale(0) rotate(90deg);\n            transform: scale(0) rotate(90deg);\n    opacity: 0;\n}\n\n.style__main___5gH5f.style__on___2k_Y- .style__link-icon___2p6yz {\n    -webkit-transform: scale(0.75) rotate(0deg);\n            transform: scale(0.75) rotate(0deg);\n    opacity: 1;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Thumb/style.css"],"names":[],"mappings":"AAAA;IACI,2BAAmB;YAAnB,mBAAmB;IACnB,8BAAsB;YAAtB,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;CACnB;;AAED;IACI,YAAY;IACZ,cAAc;IACd,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;IACnB,8BAAsB;YAAtB,sBAAsB;IACtB,gBAAgB;IAChB,6BAA6B;IAC7B,uBAAuB;IACvB,4BAA4B;IAC5B,yCAAyC;IACzC,uEAA+D;IAA/D,+DAA+D;CAClE;;AAED;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,uBAAuB;IACvB,6BAA6B;IAC7B,uEAA+D;IAA/D,+DAA+D;IAC/D,mBAAmB;IACnB,QAAQ;IACR,OAAO;IACP,WAAW;CACd;;AAED;IACI,UAAU;CACb;;AAED;IACI,WAAW;IACX,+BAAuB;YAAvB,uBAAuB;CAC1B;;AAED;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,QAAQ;IACR,OAAO;IACP,uEAA+D;IAA/D,+DAA+D;IAC/D,WAAW;IACX,wFAAoF;IAApF,oFAAoF;IACpF,wHAAwH;CAC3H;;AAED;IACI,WAAW;CACd;;AAED;IACI,iCAAyB;YAAzB,yBAAyB;CAC5B;;AAED;IACI,mBAAmB;IACnB,YAAY;IACZ,cAAc;IACd,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,sCAAsC;IACtC,YAAY;IACZ,6EAAqE;IAArE,qEAAqE;IACrE,UAAU;CACb;;AAED;IACI,YAAY;IACZ,0BAA0B;IAC1B,kBAAkB;IAClB,WAAW;IACX,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;CAChB;;AAED;IACI,mBAAmB;IACnB,YAAY;IACZ,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,oGAAoG;IACpG,6BAA6B;IAC7B,mCAAmC;IACnC,6EAAqE;IAArE,qEAAqE;IACrE,0CAAkC;YAAlC,kCAAkC;IAClC,WAAW;CACd;;AAED;IACI,4CAAoC;YAApC,oCAAoC;IACpC,WAAW;CACd","file":"style.css","sourcesContent":[".main {\n    perspective: 900px;\n    transform-style: flat;\n    padding: 0 15px 15px 0;\n    float: left;\n    width: 33.3333%;\n}\n\n.wrapper {\n    width: 100%;\n    height: 230px;\n    background-color: #ccc;\n    overflow: hidden;\n    position: relative;\n    transform-style: flat;\n    cursor: pointer;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 0% 50%;\n    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);\n    transition: all 450ms cubic-bezier(0.175, 0.885, 0.320, 1.275);\n}\n\n.thumb-nb, .thumb-color {\n    width: 315px;\n    height: 230px;\n    background-color: #000;\n    background-size: cover;\n    background-position: 50% 50%;\n    transition: all 850ms cubic-bezier(0.250, 0.460, 0.450, 0.940);\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 8;\n}\n\n.thumb-nb {\n    z-index: 9\n}\n\n.main.on .thumb-nb {\n    opacity: 0;\n    transform: scale(1.15);\n}\n\n.shadow {\n    width: 315px;\n    height: 270px;\n    position: absolute;\n    z-index: 10;\n    left: 0;\n    top: 0;\n    transition: all 650ms cubic-bezier(0.165, 0.840, 0.440, 1.000);\n    opacity: 1;\n    background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);\n    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n\n.main.on .shadow {\n    opacity: 0;\n}\n\n.main.on .wrapper {\n    transform: rotateY(0deg);\n}\n\n.description {\n    position: absolute;\n    z-index: 20;\n    bottom: -80px;\n    left: 0;\n    width: 100%;\n    height: auto;\n    text-align: center;\n    padding: 10px 5px;\n    background-color: rgba(0, 0, 0, 0.75);\n    color: #fff;\n    transition: all 450ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 240ms;\n    bottom: 0;\n}\n\n.description .title {\n    width: 100%;\n    text-transform: uppercase;\n    margin: 0 0 5px 0;\n    padding: 0;\n    letter-spacing: 0.12rem;\n    text-align: center;\n    color: white;\n}\n\n.link-icon {\n    position: absolute;\n    z-index: 20;\n    top: 20%;\n    left: 50%;\n    margin-left: -44px;\n    width: 88px;\n    height: 88px;\n    background-image: url(http://www.lempens-design.com/WD_IMAGES/_LUXEMBOURG/luxembourg-link-icon.png);\n    background-repeat: no-repeat;\n    background-position: center center;\n    transition: all 450ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 300ms;\n    transform: scale(0) rotate(90deg);\n    opacity: 0;\n}\n\n.main.on .link-icon {\n    transform: scale(0.75) rotate(0deg);\n    opacity: 1;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___5gH5f",
		"wrapper": "style__wrapper___3uWly",
		"thumb-nb": "style__thumb-nb___2QpZd",
		"thumb-color": "style__thumb-color___1QMlI",
		"on": "style__on___2k_Y-",
		"shadow": "style__shadow___3FGst",
		"description": "style__description___2mbBH",
		"title": "style__title___2yD2P",
		"link-icon": "style__link-icon___2p6yz"
	};

/***/ },
/* 521 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(522);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://imgoing.iti-marketing.com/#/savannah/events',
	                        title: 'Imgoing',
	                        subtitle: 'Social events calendar',
	                        bgImg: '/imgoing-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Social events calendar for Travel & Tourism Partners based on Facebook events.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'Project was developed myself from scratch at',
	                            ' ',
	                            _react2.default.createElement(
	                                'a',
	                                { href: 'http://iti-marketing.com', target: '_blank' },
	                                'ITI Marketing'
	                            ),
	                            ' ',
	                            'as in-house companys product.',
	                            _react2.default.createElement('br', null),
	                            'It consists of 2 parts:',
	                            ' ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'administration dashboard'
	                            ),
	                            ' for managing events/locations and',
	                            ' ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'presentation customizible widget'
	                            ),
	                            ' for embedding to clients websites.',
	                            _react2.default.createElement('br', null),
	                            'For both parts I\'ve used ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'React'
	                            ),
	                            ' in combination with the ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Flux'
	                            ),
	                            ' pattern on a ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Node.js'
	                            ),
	                            ' ',
	                            'server built with ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Express'
	                            ),
	                            '.',
	                            _react2.default.createElement('br', null),
	                            'Besides the development, I fully designed ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'UI'
	                            ),
	                            ' ',
	                            'of the first iteration of the product and brought ideas to the table which were used in the project.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Challenges'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Pulling Facebook events by geo location with a specific radius. Problem is that Facebook does not provide an API call to pull events by coordinates.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Map POIs clustering. Since we need to show many POIs on the map we needed to come up with a rendering / loading optimizations.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Maximizing the amount of pulled events by splitting the map area on many 1 miles circles and then combining events from each of those circles. The problem is that Facebook has API result limitations.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Creating interactive custom Google maps overlays for POI\'s and popups.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'React'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Reflux'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML5'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Facebook/Google maps APIs'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Full Responsive'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Webpack'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'REST'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(523);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___3XHUK{\n    height: 100%;\n}\n\n.style__project-info___3djOD{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___3djOD > h3{\n    font-weight: 300;\n}\n\n.style__project-info___3djOD > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___3djOD a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/Imgoing/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3XHUK",
		"project-info": "style__project-info___3djOD"
	};

/***/ },
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style2 = __webpack_require__(525);

	var _style3 = _interopRequireDefault(_style2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Slider = function (_Component) {
	  (0, _inherits3.default)(Slider, _Component);

	  function Slider(props, context) {
	    (0, _classCallCheck3.default)(this, Slider);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Slider).call(this, props, context));

	    _this.state = {
	      index: 0
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Slider, [{
	    key: '_getSlides',
	    value: function _getSlides() {
	      var _this2 = this;

	      var images = this.props.images;
	      return images.map(function (img, index) {
	        var _style = (0, _assign2.default)({}, _style3.default, _this2._computeSlidePosition(index));
	        return _react2.default.createElement(
	          'div',
	          { className: _style3.default.slide, style: _style },
	          _react2.default.createElement('img', { src: img }),
	          _react2.default.createElement('div', { onClick: _this2._slideTo.bind(_this2, index - 1), className: _style3.default.prev }),
	          _react2.default.createElement('div', { onClick: _this2._slideTo.bind(_this2, index + 1), className: _style3.default.next })
	        );
	      });
	    }
	  }, {
	    key: '_computeSlidePosition',
	    value: function _computeSlidePosition(e) {
	      var t = -100 * this.state.index - -100 * e;
	      return {
	        msTransform: "translateY(-50%) translateX(" + t + "%)",
	        WebkitTransform: "translateY(-50%) translateX(" + t + "%)",
	        transform: "translateY(-50%) translateX(" + t + "%)"
	      };
	    }
	  }, {
	    key: '_slideTo',
	    value: function _slideTo(e) {
	      e > this.props.images.length - 1 && (e = 0);
	      0 > e && (e = this.props.images.length - 1);
	      this.setState({
	        index: e
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style3.default.main },
	        _react2.default.createElement(
	          'div',
	          { className: _style3.default.slider },
	          this._getSlides()
	        ),
	        _react2.default.createElement(
	          'div',
	          { onClick: this._slideTo.bind(this, this.state.index - 1), className: _style3.default.arrow + " " + _style3.default['arrow-left'] },
	          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: '<svg class=' + _style3.default.arrowSvgLeft + ' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path class=' + _style3.default.arrowSvg + ' d="M91.884,50.895c-14.627-6.05-29.077-12.566-43.293-19.551c-0.614-0.303-1.224,0.192-1.106,0.861   c0.569,3.217,1.152,6.433,1.688,9.656c-10.976,0.327-22.008,0.412-32.984,0.963c-0.03-0.043-0.06-0.085-0.09-0.128   c-0.257-0.383-0.919-0.238-0.954,0.177c-1.801,0.095-3.6,0.201-5.395,0.326c-0.874,0.061-0.894,1.391,0,1.398   c2.013,0.012,4.024-0.001,6.037-0.025c1.286,3.097,2.771,6.073,4.469,8.916c-2.502-2.866-5.006-5.733-7.498-8.608   c-0.375-0.434-1.137,0.146-0.798,0.625c2.828,3.979,5.531,8.042,8.131,12.17c-2.967-3.574-6.171-6.921-9.941-9.717   c-0.387-0.289-0.975,0.291-0.675,0.684c2.223,2.937,4.448,5.873,6.674,8.809c-2.315-2.479-4.629-4.961-6.924-7.459   C8.845,49.581,8.291,50.1,8.5,50.556c1.429,3.077,3.057,6.014,4.881,8.833c-1.696-1.749-3.396-3.495-5.088-5.248   c-0.415-0.429-1.105,0.119-0.814,0.637c1.059,1.898,2.178,3.751,3.354,5.568c-0.769-0.77-1.529-1.547-2.3-2.311   c-0.319-0.318-0.981-0.002-0.801,0.474c0.884,2.335,2.202,4.006,4.273,5.368c0.29,0.19,0.555-0.048,0.587-0.317   c0.135,0.135,0.265,0.271,0.4,0.406c-1.462,0.047-2.924,0.094-4.384,0.15c-0.622,0.023-0.627,0.979,0,0.987   c1.851,0.025,3.7,0.033,5.547,0.036c0.188,0.152,0.435,0.126,0.615,0.004c3.272,0.003,6.543-0.019,9.816-0.053   c0.045,0.059,0.087,0.116,0.129,0.174c0.308,0.409,0.888,0.208,0.947-0.184c3.066-0.034,6.132-0.07,9.195-0.103l12.397-0.132   c3.229-0.035,2.825,0.881,2.641,3.738c-0.161,2.502-0.323,5.003-0.485,7.504c-0.035,0.55,0.675,0.98,1.126,0.655   c3.555-2.547,7.171-4.989,10.839-7.348c0.37,0.179,0.866-0.169,0.898-0.568c0.882-0.563,1.764-1.127,2.652-1.68   c0.295,0.067,0.578-0.136,0.68-0.429c0.896-0.554,1.803-1.087,2.705-1.629c0.188,0.202,0.375,0.405,0.563,0.606   c0.479,0.516,1.433-0.188,0.994-0.779c-0.133-0.175-0.262-0.351-0.393-0.525c7.339-4.361,14.873-8.383,22.594-12.064   C92.744,52.005,92.428,51.119,91.884,50.895z M76.113,58.732c-2.897-4.542-5.795-9.086-8.703-13.624   c3.807,3.945,7.605,7.9,11.417,11.839c0.08,0.083,0.168,0.132,0.26,0.164C78.093,57.646,77.102,58.185,76.113,58.732z    M65.207,40.933c1.659,0.764,3.314,1.535,4.978,2.286c-0.07,0.177-0.073,0.38,0.061,0.582c1.498,2.294,2.995,4.591,4.488,6.889   C71.553,47.442,68.374,44.193,65.207,40.933z M62.691,39.768c-0.047,0.154-0.037,0.328,0.07,0.5   c2.451,3.902,4.918,7.797,7.389,11.688c-4.874-5.423-9.929-10.674-15.152-15.761c-0.622-0.605-1.531,0.321-0.946,0.959   c4.983,5.43,9.419,11.282,13.291,17.534c-5.783-6.646-11.577-13.28-17.357-19.927c-0.169-0.193-0.375-0.226-0.56-0.164   c-0.073-0.421-0.148-0.842-0.22-1.264C53.677,35.534,58.178,37.667,62.691,39.768z M49.775,43.419   c0.105-0.002,0.21-0.007,0.314-0.01c0.532-0.018,0.845-0.487,0.747-0.997c-0.342-1.788-0.662-3.578-0.979-5.369   c3.619,6.971,7.943,13.492,12.517,19.84C58.172,52.396,53.974,47.907,49.775,43.419z M48.9,43.452   c-0.142,0.173-0.202,0.412-0.06,0.65c2.762,4.656,5.72,9.176,8.84,13.583c-3.82-4.093-7.636-8.191-11.457-12.285   c-0.448-0.48-1.26,0.144-0.91,0.712c0.994,1.604,2.008,3.187,3.03,4.769c-2.061-2.652-4.271-5.202-7.236-6.773   c-0.457-0.242-0.999,0.167-0.907,0.643c-0.09-0.102-0.177-0.206-0.268-0.308c-0.477-0.544-1.309,0.152-0.972,0.762   c2.166,3.929,4.342,7.852,6.517,11.776c-3.467-4.304-6.934-8.607-10.363-12.94c-0.018-0.022-0.038-0.029-0.058-0.047   C39.679,43.802,44.292,43.607,48.9,43.452z M61.449,67.501C57.398,62.131,53.512,56.633,49.822,51   c4.644,5.016,9.285,10.032,13.936,15.042C62.989,66.526,62.217,67.009,61.449,67.501z M34.358,44.02   c-0.18,0.181-0.28,0.467-0.15,0.728c2.239,4.535,4.497,9.061,6.759,13.583c-3.999-4.588-7.87-9.284-11.579-14.117   C31.046,44.153,32.702,44.088,34.358,44.02z M28.373,44.25c-0.064,0.154-0.083,0.327-0.01,0.49c1.489,3.29,3.09,6.505,4.809,9.658   c-2.295-2.92-4.657-5.787-7.096-8.593c-0.395-0.455-1.142,0.135-0.824,0.646c2.029,3.284,4.046,6.576,6.07,9.868   c-3.258-3.891-6.437-7.844-9.54-11.863C23.977,44.398,26.175,44.33,28.373,44.25z M20.37,44.493   c2.428,4.385,4.849,8.771,7.279,13.154c-3.646-4.184-7.094-8.535-10.277-13.1C18.372,44.53,19.371,44.516,20.37,44.493z    M14.521,63.918c-1.404-1.953-2.728-3.951-3.984-5.995c1.943,1.98,3.889,3.96,5.825,5.947   C15.749,63.887,15.134,63.901,14.521,63.918z M17.703,63.835c-2.643-3.424-4.934-7.032-6.941-10.841   c3.347,3.579,6.674,7.174,10.001,10.77C19.744,63.785,18.724,63.809,17.703,63.835z M22.099,63.738   c-3.083-4.093-6.169-8.183-9.257-12.271c4.031,3.631,7.429,7.877,10.708,12.24C23.066,63.717,22.581,63.728,22.099,63.738z    M24.961,63.681c-2.268-3.855-4.638-7.643-7.104-11.368c3.033,3.502,6.065,7.009,9.098,10.511c0.467,0.536,1.224-0.245,0.771-0.781   c-3.807-4.501-6.989-9.42-9.555-14.702c3.727,5.109,7.674,10.032,11.943,14.708c0.427,0.468,1.151-0.13,0.857-0.669   c-2.204-3.993-4.424-7.977-6.643-11.959c3.52,4.436,7.12,8.803,10.813,13.089c0.413,0.474,1.187-0.142,0.86-0.672   c-1.963-3.192-3.937-6.377-5.91-9.563c2.875,3.561,5.651,7.2,8.301,10.946c0.414,0.586,1.368,0.053,0.972-0.576   c-2.833-4.475-5.431-9.077-7.789-13.814c3.732,4.694,7.573,9.292,11.56,13.772c0.476,0.53,1.227-0.144,0.935-0.733   c-2.119-4.255-4.244-8.509-6.377-12.759c3.789,4.735,7.556,9.487,11.333,14.231c0.016,0.016,0.03,0.021,0.043,0.035   C41.037,63.484,32.998,63.543,24.961,63.681z M52.323,70.779c0.29,0.662,0.29,1.31,0,1.94c-0.575-0.268-1.084,0.591-0.501,0.873   c0.137,0.067,0.247,0.121,0.344,0.168c-0.387,0.274-0.781,0.539-1.168,0.815c0.207-3.499,0.415-6.998,0.622-10.496   c0.022-0.389-0.347-0.732-0.717-0.727c-0.357,0.005-0.717,0.009-1.072,0.014c0.203-0.187,0.315-0.495,0.16-0.777   c-2.33-4.232-4.671-8.457-7.008-12.684c0.885,1.054,1.763,2.117,2.634,3.184c1.924,2.67,3.962,5.248,6.123,7.724   c1.131,1.474,2.256,2.955,3.367,4.449c-0.847-0.667-1.676-1.357-2.482-2.084c-0.554-0.501-1.322,0.269-0.815,0.828   c1.05,1.163,2.024,2.368,2.945,3.617c-0.722-0.599-1.446-1.198-2.167-1.795c-0.455-0.378-1.194,0.093-0.857,0.668   c0.8,1.366,1.597,2.733,2.393,4.098c-0.379-0.158-0.761-0.319-1.144-0.477C52.563,69.946,52.263,70.428,52.323,70.779z    M53.681,72.703L53.5,71.498c0.396,0.168,0.791,0.337,1.187,0.504C54.351,72.232,54.016,72.47,53.681,72.703z M55.765,71.254   c-0.509-0.876-1.022-1.752-1.531-2.627c0.812,0.675,1.621,1.35,2.43,2.026C56.367,70.854,56.063,71.05,55.765,71.254z    M56.087,67.538c0.521,0.384,1.058,0.759,1.601,1.125c0.439,0.297,1.042-0.197,0.935-0.667c0.145,0.137,0.282,0.28,0.43,0.417   c0.357,0.337,0.886-0.194,0.534-0.544c-1.513-1.508-2.974-3.063-4.401-4.648c-3.032-4.065-6.179-8.042-9.419-11.938   c-1.039-1.513-2.044-3.053-3.015-4.618c3.242,2.573,5.662,6.379,8.171,9.564c3.149,3.995,6.296,7.99,9.452,11.982   c-0.892,0.581-1.787,1.159-2.67,1.75C57.186,69.131,56.644,68.326,56.087,67.538z M64.916,65.312   c-4.156-5.328-8.052-10.839-11.729-16.508c4.674,5.036,9.347,10.071,14.023,15.102C66.445,64.371,65.676,64.837,64.916,65.312z    M52.792,39.861c6.077,7.057,12.147,14.126,18.244,21.167c0.527,0.609,1.439-0.169,1.074-0.841   c-2.37-4.411-5.003-8.635-7.89-12.672c3.633,3.885,7.17,7.865,10.613,11.932c-2.121,1.191-4.227,2.41-6.31,3.663   C62.932,55.595,57.446,48,52.792,39.861z M80.043,56.602c0.05-0.167,0.035-0.354-0.084-0.537c-1.451-2.229-2.91-4.453-4.369-6.677   c1.913,1.987,3.829,3.97,5.735,5.963c0.479,0.501,1.501-0.012,1.224-0.723c-0.46-1.176-0.968-2.309-1.52-3.418   c0.952,0.841,1.903,1.681,2.855,2.523c0.54,0.479,1.429,0.025,1.234-0.731c-0.04-0.155-0.085-0.296-0.129-0.445   c0.031,0.027,0.062,0.057,0.094,0.084c0.689,0.628,1.713-0.398,1.024-1.039c-0.849-0.79-1.701-1.578-2.55-2.366   c-0.612-0.569-1.586,0.148-1.164,0.911c0.122,0.19,0.228,0.385,0.335,0.581c-1.331-1.175-2.663-2.348-3.992-3.525   c-0.597-0.53-1.636,0.153-1.156,0.906c0.651,1.024,1.246,2.058,1.801,3.115c-2.226-2.294-4.449-4.588-6.669-6.886   c5.658,2.525,11.34,4.99,17.068,7.362C86.496,53.257,83.253,54.898,80.043,56.602z"/></g><text x="0" y="115" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">Created by shimaru</text><text x="0" y="120" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>' } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { onClick: this._slideTo.bind(this, this.state.index + 1), className: _style3.default.arrow + " " + _style3.default['arrow-right'] },
	          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: '<svg class=' + _style3.default.arrowSvgRight + ' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path class=' + _style3.default.arrowSvg + ' d="M91.884,50.895c-14.627-6.05-29.077-12.566-43.293-19.551c-0.614-0.303-1.224,0.192-1.106,0.861   c0.569,3.217,1.152,6.433,1.688,9.656c-10.976,0.327-22.008,0.412-32.984,0.963c-0.03-0.043-0.06-0.085-0.09-0.128   c-0.257-0.383-0.919-0.238-0.954,0.177c-1.801,0.095-3.6,0.201-5.395,0.326c-0.874,0.061-0.894,1.391,0,1.398   c2.013,0.012,4.024-0.001,6.037-0.025c1.286,3.097,2.771,6.073,4.469,8.916c-2.502-2.866-5.006-5.733-7.498-8.608   c-0.375-0.434-1.137,0.146-0.798,0.625c2.828,3.979,5.531,8.042,8.131,12.17c-2.967-3.574-6.171-6.921-9.941-9.717   c-0.387-0.289-0.975,0.291-0.675,0.684c2.223,2.937,4.448,5.873,6.674,8.809c-2.315-2.479-4.629-4.961-6.924-7.459   C8.845,49.581,8.291,50.1,8.5,50.556c1.429,3.077,3.057,6.014,4.881,8.833c-1.696-1.749-3.396-3.495-5.088-5.248   c-0.415-0.429-1.105,0.119-0.814,0.637c1.059,1.898,2.178,3.751,3.354,5.568c-0.769-0.77-1.529-1.547-2.3-2.311   c-0.319-0.318-0.981-0.002-0.801,0.474c0.884,2.335,2.202,4.006,4.273,5.368c0.29,0.19,0.555-0.048,0.587-0.317   c0.135,0.135,0.265,0.271,0.4,0.406c-1.462,0.047-2.924,0.094-4.384,0.15c-0.622,0.023-0.627,0.979,0,0.987   c1.851,0.025,3.7,0.033,5.547,0.036c0.188,0.152,0.435,0.126,0.615,0.004c3.272,0.003,6.543-0.019,9.816-0.053   c0.045,0.059,0.087,0.116,0.129,0.174c0.308,0.409,0.888,0.208,0.947-0.184c3.066-0.034,6.132-0.07,9.195-0.103l12.397-0.132   c3.229-0.035,2.825,0.881,2.641,3.738c-0.161,2.502-0.323,5.003-0.485,7.504c-0.035,0.55,0.675,0.98,1.126,0.655   c3.555-2.547,7.171-4.989,10.839-7.348c0.37,0.179,0.866-0.169,0.898-0.568c0.882-0.563,1.764-1.127,2.652-1.68   c0.295,0.067,0.578-0.136,0.68-0.429c0.896-0.554,1.803-1.087,2.705-1.629c0.188,0.202,0.375,0.405,0.563,0.606   c0.479,0.516,1.433-0.188,0.994-0.779c-0.133-0.175-0.262-0.351-0.393-0.525c7.339-4.361,14.873-8.383,22.594-12.064   C92.744,52.005,92.428,51.119,91.884,50.895z M76.113,58.732c-2.897-4.542-5.795-9.086-8.703-13.624   c3.807,3.945,7.605,7.9,11.417,11.839c0.08,0.083,0.168,0.132,0.26,0.164C78.093,57.646,77.102,58.185,76.113,58.732z    M65.207,40.933c1.659,0.764,3.314,1.535,4.978,2.286c-0.07,0.177-0.073,0.38,0.061,0.582c1.498,2.294,2.995,4.591,4.488,6.889   C71.553,47.442,68.374,44.193,65.207,40.933z M62.691,39.768c-0.047,0.154-0.037,0.328,0.07,0.5   c2.451,3.902,4.918,7.797,7.389,11.688c-4.874-5.423-9.929-10.674-15.152-15.761c-0.622-0.605-1.531,0.321-0.946,0.959   c4.983,5.43,9.419,11.282,13.291,17.534c-5.783-6.646-11.577-13.28-17.357-19.927c-0.169-0.193-0.375-0.226-0.56-0.164   c-0.073-0.421-0.148-0.842-0.22-1.264C53.677,35.534,58.178,37.667,62.691,39.768z M49.775,43.419   c0.105-0.002,0.21-0.007,0.314-0.01c0.532-0.018,0.845-0.487,0.747-0.997c-0.342-1.788-0.662-3.578-0.979-5.369   c3.619,6.971,7.943,13.492,12.517,19.84C58.172,52.396,53.974,47.907,49.775,43.419z M48.9,43.452   c-0.142,0.173-0.202,0.412-0.06,0.65c2.762,4.656,5.72,9.176,8.84,13.583c-3.82-4.093-7.636-8.191-11.457-12.285   c-0.448-0.48-1.26,0.144-0.91,0.712c0.994,1.604,2.008,3.187,3.03,4.769c-2.061-2.652-4.271-5.202-7.236-6.773   c-0.457-0.242-0.999,0.167-0.907,0.643c-0.09-0.102-0.177-0.206-0.268-0.308c-0.477-0.544-1.309,0.152-0.972,0.762   c2.166,3.929,4.342,7.852,6.517,11.776c-3.467-4.304-6.934-8.607-10.363-12.94c-0.018-0.022-0.038-0.029-0.058-0.047   C39.679,43.802,44.292,43.607,48.9,43.452z M61.449,67.501C57.398,62.131,53.512,56.633,49.822,51   c4.644,5.016,9.285,10.032,13.936,15.042C62.989,66.526,62.217,67.009,61.449,67.501z M34.358,44.02   c-0.18,0.181-0.28,0.467-0.15,0.728c2.239,4.535,4.497,9.061,6.759,13.583c-3.999-4.588-7.87-9.284-11.579-14.117   C31.046,44.153,32.702,44.088,34.358,44.02z M28.373,44.25c-0.064,0.154-0.083,0.327-0.01,0.49c1.489,3.29,3.09,6.505,4.809,9.658   c-2.295-2.92-4.657-5.787-7.096-8.593c-0.395-0.455-1.142,0.135-0.824,0.646c2.029,3.284,4.046,6.576,6.07,9.868   c-3.258-3.891-6.437-7.844-9.54-11.863C23.977,44.398,26.175,44.33,28.373,44.25z M20.37,44.493   c2.428,4.385,4.849,8.771,7.279,13.154c-3.646-4.184-7.094-8.535-10.277-13.1C18.372,44.53,19.371,44.516,20.37,44.493z    M14.521,63.918c-1.404-1.953-2.728-3.951-3.984-5.995c1.943,1.98,3.889,3.96,5.825,5.947   C15.749,63.887,15.134,63.901,14.521,63.918z M17.703,63.835c-2.643-3.424-4.934-7.032-6.941-10.841   c3.347,3.579,6.674,7.174,10.001,10.77C19.744,63.785,18.724,63.809,17.703,63.835z M22.099,63.738   c-3.083-4.093-6.169-8.183-9.257-12.271c4.031,3.631,7.429,7.877,10.708,12.24C23.066,63.717,22.581,63.728,22.099,63.738z    M24.961,63.681c-2.268-3.855-4.638-7.643-7.104-11.368c3.033,3.502,6.065,7.009,9.098,10.511c0.467,0.536,1.224-0.245,0.771-0.781   c-3.807-4.501-6.989-9.42-9.555-14.702c3.727,5.109,7.674,10.032,11.943,14.708c0.427,0.468,1.151-0.13,0.857-0.669   c-2.204-3.993-4.424-7.977-6.643-11.959c3.52,4.436,7.12,8.803,10.813,13.089c0.413,0.474,1.187-0.142,0.86-0.672   c-1.963-3.192-3.937-6.377-5.91-9.563c2.875,3.561,5.651,7.2,8.301,10.946c0.414,0.586,1.368,0.053,0.972-0.576   c-2.833-4.475-5.431-9.077-7.789-13.814c3.732,4.694,7.573,9.292,11.56,13.772c0.476,0.53,1.227-0.144,0.935-0.733   c-2.119-4.255-4.244-8.509-6.377-12.759c3.789,4.735,7.556,9.487,11.333,14.231c0.016,0.016,0.03,0.021,0.043,0.035   C41.037,63.484,32.998,63.543,24.961,63.681z M52.323,70.779c0.29,0.662,0.29,1.31,0,1.94c-0.575-0.268-1.084,0.591-0.501,0.873   c0.137,0.067,0.247,0.121,0.344,0.168c-0.387,0.274-0.781,0.539-1.168,0.815c0.207-3.499,0.415-6.998,0.622-10.496   c0.022-0.389-0.347-0.732-0.717-0.727c-0.357,0.005-0.717,0.009-1.072,0.014c0.203-0.187,0.315-0.495,0.16-0.777   c-2.33-4.232-4.671-8.457-7.008-12.684c0.885,1.054,1.763,2.117,2.634,3.184c1.924,2.67,3.962,5.248,6.123,7.724   c1.131,1.474,2.256,2.955,3.367,4.449c-0.847-0.667-1.676-1.357-2.482-2.084c-0.554-0.501-1.322,0.269-0.815,0.828   c1.05,1.163,2.024,2.368,2.945,3.617c-0.722-0.599-1.446-1.198-2.167-1.795c-0.455-0.378-1.194,0.093-0.857,0.668   c0.8,1.366,1.597,2.733,2.393,4.098c-0.379-0.158-0.761-0.319-1.144-0.477C52.563,69.946,52.263,70.428,52.323,70.779z    M53.681,72.703L53.5,71.498c0.396,0.168,0.791,0.337,1.187,0.504C54.351,72.232,54.016,72.47,53.681,72.703z M55.765,71.254   c-0.509-0.876-1.022-1.752-1.531-2.627c0.812,0.675,1.621,1.35,2.43,2.026C56.367,70.854,56.063,71.05,55.765,71.254z    M56.087,67.538c0.521,0.384,1.058,0.759,1.601,1.125c0.439,0.297,1.042-0.197,0.935-0.667c0.145,0.137,0.282,0.28,0.43,0.417   c0.357,0.337,0.886-0.194,0.534-0.544c-1.513-1.508-2.974-3.063-4.401-4.648c-3.032-4.065-6.179-8.042-9.419-11.938   c-1.039-1.513-2.044-3.053-3.015-4.618c3.242,2.573,5.662,6.379,8.171,9.564c3.149,3.995,6.296,7.99,9.452,11.982   c-0.892,0.581-1.787,1.159-2.67,1.75C57.186,69.131,56.644,68.326,56.087,67.538z M64.916,65.312   c-4.156-5.328-8.052-10.839-11.729-16.508c4.674,5.036,9.347,10.071,14.023,15.102C66.445,64.371,65.676,64.837,64.916,65.312z    M52.792,39.861c6.077,7.057,12.147,14.126,18.244,21.167c0.527,0.609,1.439-0.169,1.074-0.841   c-2.37-4.411-5.003-8.635-7.89-12.672c3.633,3.885,7.17,7.865,10.613,11.932c-2.121,1.191-4.227,2.41-6.31,3.663   C62.932,55.595,57.446,48,52.792,39.861z M80.043,56.602c0.05-0.167,0.035-0.354-0.084-0.537c-1.451-2.229-2.91-4.453-4.369-6.677   c1.913,1.987,3.829,3.97,5.735,5.963c0.479,0.501,1.501-0.012,1.224-0.723c-0.46-1.176-0.968-2.309-1.52-3.418   c0.952,0.841,1.903,1.681,2.855,2.523c0.54,0.479,1.429,0.025,1.234-0.731c-0.04-0.155-0.085-0.296-0.129-0.445   c0.031,0.027,0.062,0.057,0.094,0.084c0.689,0.628,1.713-0.398,1.024-1.039c-0.849-0.79-1.701-1.578-2.55-2.366   c-0.612-0.569-1.586,0.148-1.164,0.911c0.122,0.19,0.228,0.385,0.335,0.581c-1.331-1.175-2.663-2.348-3.992-3.525   c-0.597-0.53-1.636,0.153-1.156,0.906c0.651,1.024,1.246,2.058,1.801,3.115c-2.226-2.294-4.449-4.588-6.669-6.886   c5.658,2.525,11.34,4.99,17.068,7.362C86.496,53.257,83.253,54.898,80.043,56.602z"/></g><text x="0" y="115" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">Created by shimaru</text><text x="0" y="120" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>' } })
	        )
	      );
	    }
	  }]);
	  return Slider;
	}(_react.Component);

	exports.default = Slider;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 525 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(526);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___1n_Sm{\n\tposition: relative;\n}\n\n.style__slider___3ibpc {\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    padding-bottom: 0;\n    height:700px;\n}\n\n.style__slide___1tBHu{\n\twidth: 100%;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 0;\n\t-webkit-transform: translateY(-50%);\n\t        transform: translateY(-50%); \n\t-webkit-transition: -webkit-transform 400ms ease-in-out; \n\ttransition: -webkit-transform 400ms ease-in-out; \n\ttransition: transform 400ms ease-in-out; \n\ttransition: transform 400ms ease-in-out, -webkit-transform 400ms ease-in-out;\n}\n\n.style__slide___1tBHu img{\n\tmax-width: 100%;\n    max-height: 100%;\n    margin: 0 auto;\n    display: block;\n    width: auto;\n}\n\n.style__slide___1tBHu .style__prev___2VRBV{\n\twidth: 30%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    cursor: pointer;\n}\n\n.style__slide___1tBHu .style__next___1Vc3H{\n\twidth: 70%;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    cursor: pointer;\n}\n\n.style__arrow___3Z3jG{\n\twidth: 24px;\n    height: 40px;\n    position: absolute;\n    top: 50%;\n    margin-top: -20px;\n    cursor: pointer;\n    background: no-repeat center center/cover;\n    color: black;\n}\n\n.style__arrow-right___15v43{\n\tright: -40px;\n}\n\n.style__arrow-left___3piFp{\n\tleft: -80px;\n}\n\n.style__arrowSvgLeft___1FFVA, .style__arrowSvgRight___3p5sG{\n\twidth: 70px;\n}\n.style__arrowSvgLeft___1FFVA{\n\t-webkit-transform: rotateY(180deg);\n\t        transform: rotateY(180deg);\n}", "", {"version":3,"sources":["/./components/Slider/style.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB;;AAED;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;CAChB;;AAED;CACC,YAAY;CACZ,mBAAmB;CACnB,SAAS;CACT,QAAQ;CACR,oCAA4B;SAA5B,4BAA4B;CAC5B,wDAAwC;CAAxC,gDAAwC;CAAxC,wCAAwC;CAAxC,6EAAwC;CACxC;;AAED;CACC,gBAAgB;IACb,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,YAAY;CACf;;AAED;CACC,WAAW;IACR,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,OAAO;IACP,gBAAgB;CACnB;;AAED;CACC,WAAW;IACR,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,OAAO;IACP,gBAAgB;CACnB;;AAED;CACC,YAAY;IACT,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,0CAA0C;IAC1C,aAAa;CAChB;;AAED;CACC,aAAa;CACb;;AAED;CACC,YAAY;CACZ;;AAED;CACC,YAAY;CACZ;AACD;CACC,mCAA2B;SAA3B,2BAA2B;CAC3B","file":"style.css","sourcesContent":[".main{\n\tposition: relative;\n}\n\n.slider {\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    padding-bottom: 0;\n    height:700px;\n}\n\n.slide{\n\twidth: 100%;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 0;\n\ttransform: translateY(-50%); \n\ttransition: transform 400ms ease-in-out;\n}\n\n.slide img{\n\tmax-width: 100%;\n    max-height: 100%;\n    margin: 0 auto;\n    display: block;\n    width: auto;\n}\n\n.slide .prev{\n\twidth: 30%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    cursor: pointer;\n}\n\n.slide .next{\n\twidth: 70%;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    cursor: pointer;\n}\n\n.arrow{\n\twidth: 24px;\n    height: 40px;\n    position: absolute;\n    top: 50%;\n    margin-top: -20px;\n    cursor: pointer;\n    background: no-repeat center center/cover;\n    color: black;\n}\n\n.arrow-right{\n\tright: -40px;\n}\n\n.arrow-left{\n\tleft: -80px;\n}\n\n.arrowSvgLeft, .arrowSvgRight{\n\twidth: 70px;\n}\n.arrowSvgLeft{\n\ttransform: rotateY(180deg);\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___1n_Sm",
		"slider": "style__slider___3ibpc",
		"slide": "style__slide___1tBHu",
		"prev": "style__prev___2VRBV",
		"next": "style__next___1Vc3H",
		"arrow": "style__arrow___3Z3jG",
		"arrow-right": "style__arrow-right___15v43",
		"arrow-left": "style__arrow-left___3piFp",
		"arrowSvgLeft": "style__arrowSvgLeft___1FFVA",
		"arrowSvgRight": "style__arrowSvgRight___3p5sG"
	};

/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(514);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(528);

	var _style2 = _interopRequireDefault(_style);

	var _ArrowLink = __webpack_require__(506);

	var _ArrowLink2 = _interopRequireDefault(_ArrowLink);

	var _BackBtn = __webpack_require__(530);

	var _BackBtn2 = _interopRequireDefault(_BackBtn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TopContentPart = function (_Component) {
	  (0, _inherits3.default)(TopContentPart, _Component);

	  function TopContentPart() {
	    (0, _classCallCheck3.default)(this, TopContentPart);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TopContentPart).apply(this, arguments));
	  }

	  (0, _createClass3.default)(TopContentPart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var tweentxt = document.getElementsByClassName("tweentxt");
	      var back = document.getElementsByClassName(_style2.default.back);

	      TweenMax.staggerFrom(tweentxt, 0.3, { y: 40, opacity: 0, scale: 0, delay: 1 }, 0.2);
	      TweenMax.fromTo(back, 0.5, { opacity: 0, x: 100, delay: 1.7 }, { opacity: 1, x: 0, delay: 1.7 });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var link = _props.link;
	      var title = _props.title;
	      var subtitle = _props.subtitle;
	      var bgImg = _props.bgImg;

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.main },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.back },
	          _react2.default.createElement(_BackBtn2.default, this.props)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.bg, style: { background: 'url(' + bgImg + ')' } },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.overlay },
	            _react2.default.createElement(
	              'div',
	              { className: _style2.default.wrapper },
	              _react2.default.createElement(
	                'div',
	                { className: _style2.default.content },
	                _react2.default.createElement(
	                  'div',
	                  { className: _style2.default['content-bottom'] },
	                  _react2.default.createElement(
	                    'h1',
	                    { className: (0, _classnames2.default)("tweentxt", _style2.default.title) },
	                    title
	                  ),
	                  _react2.default.createElement(
	                    'h2',
	                    { className: (0, _classnames2.default)("tweentxt", _style2.default.subtitle) },
	                    subtitle
	                  ),
	                  link ? _react2.default.createElement(
	                    'a',
	                    { className: 'tweentxt', href: link, target: '_blank' },
	                    _react2.default.createElement(_ArrowLink2.default, { textLabel: 'Project link' })
	                  ) : _react2.default.createElement('br', null)
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return TopContentPart;
	}(_react.Component);

	exports.default = TopContentPart;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(529);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 529 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, "\n.style__main___3Hqzy {\n  height: 100%\n}\n\n.style__bg___28dZb{\n    height: 100%;\n    background-size: cover !important;\n    background-position: 50% 0% !important;\n}\n\n.style__overlay___24Sed{\n    background-color: rgba(0,0,0,0.14);\n    background-image: -webkit-linear-gradient(top,rgba(0,0,0,0) 66%,rgba(0,0,0,0.82));\n    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 66%,rgba(0,0,0,0.82));\n    -webkit-transform: translate3d(0px,0px,0px);\n            transform: translate3d(0px,0px,0px);\n    height: 100%;\n}\n\n.style__wrapper___cUNgm{\n    padding: 40px 40px 0px 40px;\n    height: 100%;\n}\n\n.style__content___1ZGEM{\n    display: table;\n    margin: 0 auto;\n    height: 100%;\n    width: 100%;\n}\n.style__content-bottom___3-URa{\n    display: table-cell;\n    vertical-align: bottom;\n    text-align: center;\n}\n\n.style__content-bottom___3-URa > a{\n    display: block;\n}\n\n.style__title___1NoD-{\n    color: white;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 60px;\n    letter-spacing: 0.12rem;\n    margin: 0 0 10px 0;\n}\n\n.style__subtitle___258PK{\n    color: white;\n    margin: 0;\n    font-size: 1.378rem;\n}\n\n.style__back___2M4RF{\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    z-index: 1111;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/TopContentPart/style.css"],"names":[],"mappings":";AACA;EACE,YAAY;CACb;;AAED;IACI,aAAa;IACb,kCAAkC;IAClC,uCAAuC;CAC1C;;AAED;IACI,mCAAmC;IACnC,kFAAgF;IAAhF,gFAAgF;IAChF,4CAAoC;YAApC,oCAAoC;IACpC,aAAa;CAChB;;AAED;IACI,4BAA4B;IAC5B,aAAa;CAChB;;AAED;IACI,eAAe;IACf,eAAe;IACf,aAAa;IACb,YAAY;CACf;AACD;IACI,oBAAoB;IACpB,uBAAuB;IACvB,mBAAmB;CACtB;;AAED;IACI,eAAe;CAClB;;AAED;IACI,aAAa;IACb,0BAA0B;IAC1B,kBAAkB;IAClB,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;CACtB;;AAED;IACI,aAAa;IACb,UAAU;IACV,oBAAoB;CACvB;;AAED;IACI,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,cAAc;CACjB","file":"style.css","sourcesContent":["\n.main {\n  height: 100%\n}\n\n.bg{\n    height: 100%;\n    background-size: cover !important;\n    background-position: 50% 0% !important;\n}\n\n.overlay{\n    background-color: rgba(0,0,0,0.14);\n    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 66%,rgba(0,0,0,0.82));\n    transform: translate3d(0px,0px,0px);\n    height: 100%;\n}\n\n.wrapper{\n    padding: 40px 40px 0px 40px;\n    height: 100%;\n}\n\n.content{\n    display: table;\n    margin: 0 auto;\n    height: 100%;\n    width: 100%;\n}\n.content-bottom{\n    display: table-cell;\n    vertical-align: bottom;\n    text-align: center;\n}\n\n.content-bottom > a{\n    display: block;\n}\n\n.title{\n    color: white;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 60px;\n    letter-spacing: 0.12rem;\n    margin: 0 0 10px 0;\n}\n\n.subtitle{\n    color: white;\n    margin: 0;\n    font-size: 1.378rem;\n}\n\n.back{\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    z-index: 1111;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3Hqzy",
		"bg": "style__bg___28dZb",
		"overlay": "style__overlay___24Sed",
		"wrapper": "style__wrapper___cUNgm",
		"content": "style__content___1ZGEM",
		"content-bottom": "style__content-bottom___3-URa",
		"title": "style__title___1NoD-",
		"subtitle": "style__subtitle___258PK",
		"back": "style__back___2M4RF"
	};

/***/ },
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(514);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(531);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BackBtn = function (_Component) {
	  (0, _inherits3.default)(BackBtn, _Component);

	  function BackBtn() {
	    (0, _classCallCheck3.default)(this, BackBtn);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BackBtn).apply(this, arguments));
	  }

	  (0, _createClass3.default)(BackBtn, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.state1 = document.getElementsByClassName(_style2.default.state1);
	      this.state2 = document.getElementsByClassName(_style2.default.state2);
	    }
	  }, {
	    key: 'goBack',
	    value: function goBack(e) {
	      e.preventDefault();
	      var history = this.props.history;

	      history.goBack();
	    }
	  }, {
	    key: 'onHover',
	    value: function onHover() {
	      var timeline = new TimelineMax({});
	      TweenMax.to(this.state1, 0, { top: 50, y: 0 });
	      timeline.to(this.state2, 0, { rotationX: 0, y: 0, transformPerspective: 600, transformOrigin: "center bottom" });
	      timeline.to(this.state1, 0, { rotationX: -90, transformPerspective: 600, transformOrigin: "top center" });
	      timeline.to(this.state2, 0.3, { alpha: 1, rotationX: 90, y: -50, zIndex: 1, ease: Cubic.easeInOut });
	      timeline.to(this.state1, 0.3, { rotationX: 0, y: -50, zIndex: 2, ease: Cubic.easeInOut }, "-=0.3");
	    }
	  }, {
	    key: 'onHoverOut',
	    value: function onHoverOut() {
	      var timeline = new TimelineMax({});
	      timeline.to(this.state2, 0.3, { alpha: 1, rotationX: 0, y: 0, zIndex: 1, ease: Cubic.easeInOut });
	      timeline.to(this.state1, 0.3, { rotationX: -90, y: 0, zIndex: 2, ease: Cubic.easeInOut }, "-=0.3");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { onMouseEnter: this.onHover.bind(this),
	          onMouseLeave: this.onHoverOut.bind(this),
	          onClick: this.goBack.bind(this),
	          className: _style2.default.main },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(_style2.default.state, _style2.default.state1) },
	          '< back'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(_style2.default.state, _style2.default.state2) },
	          '< back'
	        )
	      );
	    }
	  }]);
	  return BackBtn;
	}(_react.Component);

	exports.default = BackBtn;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 531 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(532);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 532 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___2iiCJ {\n    color: black;\n    width: 150px;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer;\n    position: relative;\n}\n\n.style__state___1lfLt {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right:0;\n}\n\n.style__state1___3ynfR {\n    background: white;\n    color: black;\n}\n\n.style__state2___3t4sb {\n    background: #292827;\n    color: white;\n}\n", "", {"version":3,"sources":["/./components/BackBtn/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;CACtB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,OAAO;IACP,QAAQ;CACX;;AAED;IACI,kBAAkB;IAClB,aAAa;CAChB;;AAED;IACI,oBAAoB;IACpB,aAAa;CAChB","file":"style.css","sourcesContent":[".main {\n    color: black;\n    width: 150px;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer;\n    position: relative;\n}\n\n.state {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right:0;\n}\n\n.state1 {\n    background: white;\n    color: black;\n}\n\n.state2 {\n    background: #292827;\n    color: white;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___2iiCJ",
		"state": "style__state___1lfLt",
		"state1": "style__state1___3ynfR",
		"state2": "style__state2___3t4sb"
	};

/***/ },
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(534);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://itigetsocial.iti-marketing.com',
	                        title: 'GetSocial',
	                        subtitle: 'Social media management platform',
	                        bgImg: '/getsocial-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'The #GetSocial Hub is an innovative, interactive social media platform that allows you to collect, manage, publish, filter and display authentic social media content from',
	                                ' ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'Facebook, Twitter, Instagram, Youtube, Pinterest'
	                                ),
	                                ' ',
	                                'to create more engagement and to drive results.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'Project was ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'designed'
	                            ),
	                            ' and ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'built'
	                            ),
	                            ' myself from scratch at',
	                            ' ',
	                            _react2.default.createElement(
	                                'a',
	                                { href: 'http://iti-marketing.com', target: '_blank' },
	                                'ITI Marketing'
	                            ),
	                            ' ',
	                            'as in-house company\'s product. It leaded to the great revenue and became a competitor on the social media product’s market in the tourism industry.',
	                            _react2.default.createElement('br', null),
	                            'Project is used by such destinations as',
	                            ' ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Daytona Beach, Space Coast, Spartanburg, Atlanta, Smoky Mountain, Bradenton FL'
	                            ),
	                            ' ',
	                            'and many other tourist places in US.',
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'It consists of 2 parts:',
	                            ' ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'administration dashboard'
	                            ),
	                            ' for adding / managing social feeds, viewing analytics and',
	                            ' ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'presentation customizible widget'
	                            ),
	                            ' for embedding to clients websites.',
	                            _react2.default.createElement('br', null),
	                            'For both parts I\'ve used ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'React'
	                            ),
	                            ' in combination with the ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Flux'
	                            ),
	                            ' pattern on a ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Node.js'
	                            ),
	                            ' ',
	                            'server built with ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Express'
	                            ),
	                            '.',
	                            _react2.default.createElement('br', null)
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Challenges'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Deep understanding of API\'s such as Facebook / Twitter/ Instagram / Youtube / Pinterest. (pulling content by GEO, hashtags, keywords, personal accounts)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'UI without browser reloading.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Customization and creation of widgets from the UI for an integration to clients websites.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Comprehensive and rich analytics.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Auto updates of social media feeds based on clients packages.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'React'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Reflux'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML5'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Facebook/Twitter/Instagram/Youtube/Pinterest/Google maps APIs'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Full Responsive'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Webpack'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'REST'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(535);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___4qD9o{\n    height: 100%;\n}\n\n.style__project-info___2MSkM{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___2MSkM > h3{\n    font-weight: 300;\n}\n\n.style__project-info___2MSkM > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___2MSkM a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/Getsocial/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___4qD9o",
		"project-info": "style__project-info___2MSkM"
	};

/***/ },
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(537);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://columbia.itimarketing.mobi/map',
	                        title: 'Columbia, FL',
	                        subtitle: 'Interactive map',
	                        bgImg: '/columbia-2.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Columbia county, FL interactive map for their outdoor activities, water places, parks.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'Project was ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'built'
	                            ),
	                            ' myself from scratch using',
	                            ' ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'React'
	                            ),
	                            ' in combination with the ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Flux'
	                            ),
	                            ' ',
	                            'pattern and Google maps API.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Challenges'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Matching listing items with POIs during the scroll.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Ability to select items from menu, map or listing.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'React'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Redux'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML5'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Google maps APIs'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Full Responsive'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Webpack'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(538);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___3VW4d{\n    height: 100%;\n}\n\n.style__project-info___1UBSZ{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___1UBSZ > h3{\n    font-weight: 300;\n}\n\n.style__project-info___1UBSZ > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___1UBSZ a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/Columbia/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3VW4d",
		"project-info": "style__project-info___1UBSZ"
	};

/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(540);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://southeasttourism.org/',
	                        title: 'Southeast tourism society',
	                        subtitle: 'Responsive website',
	                        bgImg: '/sts-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'The Southeast Tourism Society (STS) is dedicated to promoting tourism in its member states of Alabama, Arkansas, Florida, Georgia, Kentucky, Louisiana, Mississippi, North Carolina, South Carolina, Tennessee, Virginia and West Virginia.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Challenges'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Implement CSS using Atomic approach.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Implementation and integration of events calendar.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Make every single page accesible via custom CMS for a client to apply any content changes without code knowledge.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Atomic CSS'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive design'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 540 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(541);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 541 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___2h83n{\n    height: 100%;\n}\n\n.style__project-info___2o3JA{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___2o3JA > h3{\n    font-weight: 300;\n}\n\n.style__project-info___2o3JA > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___2o3JA a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/Sts/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___2h83n",
		"project-info": "style__project-info___2o3JA"
	};

/***/ },
/* 542 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(543);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://abingdonambassador.com',
	                        title: 'Abingdon, VA',
	                        subtitle: 'eLearning responsive website',
	                        bgImg: '/abingdon-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Abingdon, Virginia online customer service learning platform. This educational program was designed specifically for frontline hospitality employees and volunteers.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'It contains users registration, authorization, different type of quizes, statistics.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive design'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(544);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 544 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___11D3E{\n    height: 100%;\n}\n\n.style__project-info___2EwkD{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___2EwkD > h3{\n    font-weight: 300;\n}\n\n.style__project-info___2EwkD > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___2EwkD a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/Abingdon/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___11D3E",
		"project-info": "style__project-info___2EwkD"
	};

/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(546);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://visithenrycountygeorgia.com/',
	                        title: 'Henry county, GA',
	                        subtitle: 'Responsive website',
	                        bgImg: '/henry-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Official Henry county, GA CVB responsive website.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive design'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(547);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___gDY0p{\n    height: 100%;\n}\n\n.style__project-info___Io-gm{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___Io-gm > h3{\n    font-weight: 300;\n}\n\n.style__project-info___Io-gm > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___Io-gm a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/Henry/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___gDY0p",
		"project-info": "style__project-info___Io-gm"
	};

/***/ },
/* 548 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(549);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://henrycountyweddings.com/',
	                        title: 'Henry county, GA Weddings',
	                        subtitle: 'Responsive website',
	                        bgImg: '/henryweddings-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Official Henry county, GA Weddings responsive website.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive design'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 549 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(550);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___1qrBm{\n    height: 100%;\n}\n\n.style__project-info___2_w5H{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___2_w5H > h3{\n    font-weight: 300;\n}\n\n.style__project-info___2_w5H > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___2_w5H a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/HenryWeddings/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___1qrBm",
		"project-info": "style__project-info___2_w5H"
	};

/***/ },
/* 551 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(552);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://ambassador.iti-marketing.com/',
	                        title: 'Bradenton, FL',
	                        subtitle: 'eLearning website',
	                        bgImg: '/bradenton-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Administered through the Bradenton Area Convention & Visitors Bureau, The Destination Ambassador Program is a certification program that serves to increase tourism by inspiring front-line hospitality employees and volunteers to work together to turn every visitor encounter into a positive, memorable experience.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'It contains users registration, authorization, user groups, groups of quizes.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive design'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(553);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___3R9Lx{\n    height: 100%;\n}\n\n.style__project-info___2B0-6{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___2B0-6 > h3{\n    font-weight: 300;\n}\n\n.style__project-info___2B0-6 > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___2B0-6 a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/BradentonLearn/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3R9Lx",
		"project-info": "style__project-info___2B0-6"
	};

/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(555);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://exploregordoncounty.com/',
	                        title: 'Gordon county, GA',
	                        subtitle: 'Responsive website',
	                        bgImg: '/gordon-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Official Gordon county, GA CVB responsive website.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive design'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 555 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(556);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___3OSDE{\n    height: 100%;\n}\n\n.style__project-info___2GHAH{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___2GHAH > h3{\n    font-weight: 300;\n}\n\n.style__project-info___2GHAH > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___2GHAH a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/Gordon/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3OSDE",
		"project-info": "style__project-info___2GHAH"
	};

/***/ },
/* 557 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(558);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://clintoncountyohio.com/',
	                        title: 'Clinton, OH',
	                        subtitle: 'Responsive website',
	                        bgImg: '/clinton-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Official CLinton county, OH CVB responsive website.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive design'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 558 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(559);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___1uFyt{\n    height: 100%;\n}\n\n.style__project-info___aXRpK{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___aXRpK > h3{\n    font-weight: 300;\n}\n\n.style__project-info___aXRpK > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___aXRpK a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/Clinton/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___1uFyt",
		"project-info": "style__project-info___aXRpK"
	};

/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(561);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://southeasttourism.org/',
	                        title: 'Bradenton, FL',
	                        subtitle: 'Mobile / Phonegap',
	                        bgImg: '/bradentonmobile-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Official Bradenton, FL mobile website.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'For this project besides the web version, I implemented ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'hybrid'
	                            ),
	                            ' version for ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'iOS'
	                            ),
	                            ' and',
	                            ' ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Android'
	                            ),
	                            ' using ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Phonegap'
	                            ),
	                            '. It\'s available at Apple Store and Google Play.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Challenges'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Implementation of ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'hybrid'
	                                ),
	                                ' version using',
	                                ' ',
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'Phonegap'
	                                ),
	                                '.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'Near me'
	                                ),
	                                ' feature for searching nearest places to you based on a GPS location.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Phonegap'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Google Places API'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(562);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___3NFXy{\n    height: 100%;\n}\n\n.style__project-info___2hMF1{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___2hMF1 > h3{\n    font-weight: 300;\n}\n\n.style__project-info___2hMF1 > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___2hMF1 a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/BradentonMobile/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3NFXy",
		"project-info": "style__project-info___2hMF1"
	};

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(564);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://vacations2discover.com',
	                        title: 'Vacations2discover',
	                        subtitle: 'Responsive website',
	                        bgImg: '/v2d-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Digital travel magazines with a collection of great vacation getaway ideas and experiences. Innovative, interactive travel site offering monthly updated travel guides and vacation planning tools.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'For this project I built the main website and administration part for managing magazines, blogs.',
	                            _react2.default.createElement('br', null),
	                            'Also after release, I built over 30 different giveaway\'s unique landing pages which were being placed under Giveaways section and as Facebook apps.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Challenges'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Generating magazines random full height layouts.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (LESS)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive design'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(565);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 565 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___Y-ilZ{\n    height: 100%;\n}\n\n.style__project-info___3Uu_-{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___3Uu_- > h3{\n    font-weight: 300;\n}\n\n.style__project-info___3Uu_- > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___3Uu_- a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/V2D/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___Y-ilZ",
		"project-info": "style__project-info___3Uu_-"
	};

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(567);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://iti-marketing.com/',
	                        title: 'ITI Marketing',
	                        subtitle: 'Responsive website',
	                        bgImg: '/iti-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Offical website for ITI Marketing.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'Website was built on top of existing template with many modifications and new sections.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(568);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___3Xm7D{\n    height: 100%;\n}\n\n.style__project-info___34aKO{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___34aKO > h3{\n    font-weight: 300;\n}\n\n.style__project-info___34aKO > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___34aKO a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/ITI/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3Xm7D",
		"project-info": "style__project-info___34aKO"
	};

/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(570);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://readhouse.hvmg.com/home',
	                        title: 'Hospitality Venture',
	                        subtitle: '25 Ipad opmimized apps for hotels',
	                        bgImg: '/hospitality-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Hospitality ventures sales apps.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'Built around 25 (similar) iPad friendly web apps for different Hotels around the US.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 570 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(571);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___3usR9{\n    height: 100%;\n}\n\n.style__project-info___AepTg{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___AepTg > h3{\n    font-weight: 300;\n}\n\n.style__project-info___AepTg > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___AepTg a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/Hospitality/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3usR9",
		"project-info": "style__project-info___AepTg"
	};

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(573);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://visitpeachtreecity.com/',
	                        title: 'Peachtree city, GA',
	                        subtitle: 'Responsive website',
	                        bgImg: '/ptc-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Responsive website for Visit Peachtree city, GA CVB'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'This website I built using ModX CMS and Bootstrap.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'PHP'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'ModX'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive design'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(574);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___3SAjE{\n    height: 100%;\n}\n\n.style__project-info___21cAh{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___21cAh > h3{\n    font-weight: 300;\n}\n\n.style__project-info___21cAh > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___21cAh a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/PTC/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3SAjE",
		"project-info": "style__project-info___21cAh"
	};

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(576);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://visitbraselton.com/',
	                        title: 'Braselton, GA',
	                        subtitle: 'Responsive website',
	                        bgImg: '/braselton-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Official Braselton, GA CVB responsive website.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Responsive design'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(577);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___2lXIG{\n    height: 100%;\n}\n\n.style__project-info___INSo8{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___INSo8 > h3{\n    font-weight: 300;\n}\n\n.style__project-info___INSo8 > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___INSo8 a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/Braselton/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___2lXIG",
		"project-info": "style__project-info___INSo8"
	};

/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(579);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        link: 'http://bacvbsales.com/',
	                        title: 'Bradenton, FL',
	                        subtitle: 'Sales app for tablets',
	                        bgImg: '/bacvb-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Bradenton, FL sales app optimized for tablets which is being used at different tourism tradeshows.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'Main thing in the project is custom calendar of appointments with ability to take notes, export to excel, send emails with sales information.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Challenges'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Custom calendar of appointments.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Interactive map.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3 (Stylus)'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Excel generator'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(580);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___2qHyi{\n    height: 100%;\n}\n\n.style__project-info___XD8Km{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___XD8Km > h3{\n    font-weight: 300;\n}\n\n.style__project-info___XD8Km > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___XD8Km a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/BradentonSales/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___2qHyi",
		"project-info": "style__project-info___XD8Km"
	};

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends2 = __webpack_require__(400);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(582);

	var _style2 = _interopRequireDefault(_style);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _Slider = __webpack_require__(524);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _TopContentPart = __webpack_require__(527);

	var _TopContentPart2 = _interopRequireDefault(_TopContentPart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Imgoing = function (_View) {
	    (0, _inherits3.default)(Imgoing, _View);

	    function Imgoing() {
	        (0, _classCallCheck3.default)(this, Imgoing);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Imgoing).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Imgoing, [{
	        key: 'render',
	        value: function render() {
	            var images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_TopContentPart2.default, (0, _extends3.default)({}, this.props, {
	                        title: 'In house CMS',
	                        subtitle: 'Content management system',
	                        bgImg: '/cms-1.jpg'
	                    })),
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default['project-info'] },
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Description'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'i',
	                                null,
	                                'Content management system for web sites development at ITI Marketing.'
	                            ),
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement('br', null),
	                            'Inspired by open source project for viewing MongoDB databases, I implemented this project and made it our main CMS at ITI Marketing.'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Challenges'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Ability to add custom fields based on document type.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Implementing files manager.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Ability to search/filter documents and making batch operations.'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Import and export collections.'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Skills exercised'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Javascript'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'HTML'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'CSS3'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Node.js'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Express.js'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'MongoDB'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'Grunt'
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                'jQuery'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Imgoing;
	}(_View3.default);

	exports.default = Imgoing;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(583);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, ".style__main___3V5eL{\n    height: 100%;\n}\n\n.style__project-info___3ngQs{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.style__project-info___3ngQs > h3{\n    font-weight: 300;\n}\n\n.style__project-info___3ngQs > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.style__project-info___3ngQs a {\n    color: black;\n    font-weight: bold;\n}\n", "", {"version":3,"sources":["/./components/Portfolio/Projects/CMS/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;CACvB;;AAED;IACI,aAAa;IACb,kBAAkB;CACrB","file":"style.css","sourcesContent":[".main{\n    height: 100%;\n}\n\n.project-info{\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 0;\n}\n\n.project-info > h3{\n    font-weight: 300;\n}\n\n.project-info > ul{\n    display: inline-block;\n    margin-right: 40px;\n    vertical-align: top;\n}\n\n.project-info a {\n    color: black;\n    font-weight: bold;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3V5eL",
		"project-info": "style__project-info___3ngQs"
	};

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _from = __webpack_require__(403);

	var _from2 = _interopRequireDefault(_from);

	var _getPrototypeOf = __webpack_require__(377);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(399);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(396);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(482);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(383);

	var _inherits3 = _interopRequireDefault(_inherits2);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(76);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(514);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(585);

	var _style2 = _interopRequireDefault(_style);

	var _global = __webpack_require__(512);

	var _global2 = _interopRequireDefault(_global);

	var _View2 = __webpack_require__(502);

	var _View3 = _interopRequireDefault(_View2);

	var _ArrowLink = __webpack_require__(506);

	var _ArrowLink2 = _interopRequireDefault(_ArrowLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Contact = function (_View) {
	    (0, _inherits3.default)(Contact, _View);

	    function Contact() {
	        (0, _classCallCheck3.default)(this, Contact);
	        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Contact).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Contact, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var tweentxt = document.getElementsByClassName(_style2.default.tweentxt);
	            var heading = document.getElementsByClassName(_style2.default.heading);
	            var formtween = document.getElementsByClassName('formtween');
	            var socialIcon = document.getElementsByClassName(_style2.default['social-icon']);
	            var socialIcons = document.getElementsByClassName(_style2.default['social-icons']);

	            TweenMax.fromTo(heading, 0.3, { x: 100, opacity: 0, delay: 1 }, { x: 0, opacity: 1, delay: 1 });
	            TweenMax.staggerFrom(tweentxt, 0.3, { y: 40, opacity: 0, delay: 1.2 }, 0.15);
	            TweenMax.staggerFrom(socialIcon, 0.3, { scale: 0, opacity: 0, delay: 1.4 }, 0.1);
	            TweenMax.staggerFrom(formtween, 0.3, { x: 200, opacity: 0, delay: 1.6 }, 0.15);
	        }
	    }, {
	        key: 'onFormSubmit',
	        value: function onFormSubmit(e) {
	            var form = document.getElementById('form');
	            var inputs = document.getElementsByClassName('input');
	            var error = document.getElementsByClassName(_style2.default.error);
	            var isError = false;

	            (0, _from2.default)(inputs).forEach(function (e) {
	                if (e.value == '') {
	                    e.style.borderColor = 'red';
	                    isError = true;
	                } else {
	                    e.style.borderColor = 'green';
	                }
	            });

	            isError ? error[0].innerHTML = 'Please fill all fields.' : error[0].innerHTML = '';
	            form.submit();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                _View3.default,
	                this.props,
	                _react2.default.createElement(
	                    'div',
	                    { className: _global2.default.container },
	                    _react2.default.createElement(
	                        'section',
	                        { className: _style2.default.main },
	                        _react2.default.createElement(
	                            'h1',
	                            { className: _style2.default.heading },
	                            'Contact'
	                        ),
	                        _react2.default.createElement(
	                            'h2',
	                            { className: _style2.default.tweentxt },
	                            'Currently I\'m open to job opportunities.',
	                            _react2.default.createElement('br', null),
	                            'Feel free to e-mail me at',
	                            ' ',
	                            _react2.default.createElement(
	                                'a',
	                                { href: 'mailto:oksanabibik93@gmail.com' },
	                                'oksanabibik93@gmail.com'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'section',
	                            { className: _style2.default['social-icons'] },
	                            _react2.default.createElement(
	                                'a',
	                                {
	                                    className: _style2.default['social-icon'],
	                                    href: 'https://github.com/Oksanatishka',
	                                    target: '_blank'
	                                },
	                                _react2.default.createElement('i', { className: 'fa fa-github' })
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                {
	                                    className: _style2.default['social-icon'],
	                                    href: 'https://www.linkedin.com/in/oksana-bibik-27349591/',
	                                    target: '_blank'
	                                },
	                                _react2.default.createElement('i', { className: 'fa fa-linkedin' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'form',
	                            { id: 'form', action: '/send-mail' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'formtween' },
	                                _react2.default.createElement('input', {
	                                    className: 'input',
	                                    type: 'text',
	                                    placeholder: 'Name',
	                                    required: true
	                                })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'formtween' },
	                                _react2.default.createElement('input', {
	                                    className: 'input',
	                                    type: 'text',
	                                    placeholder: 'Email',
	                                    required: true
	                                })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'formtween' },
	                                _react2.default.createElement('textarea', {
	                                    className: 'input',
	                                    type: 'text',
	                                    placeholder: 'Message',
	                                    required: true
	                                })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                {
	                                    onClick: function onClick(e) {
	                                        return _this2.onFormSubmit(e);
	                                    },
	                                    className: (0, _classnames2.default)('formtween', _style2.default.submit)
	                                },
	                                _react2.default.createElement(_ArrowLink2.default, { textLabel: 'Submit' })
	                            ),
	                            _react2.default.createElement('p', { className: _style2.default.error })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return Contact;
	}(_View3.default);

	exports.default = Contact;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(586);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(491)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(490)();
	// imports


	// module
	exports.push([module.id, "\n.style__heading___MzuLZ {\n\n}\n\n.style__tweentxt___12Zy-{\n\n}\n\nform input, form textarea {\n\twidth: 100%;\n\tborder: 0;\n\tborder-bottom: 2px solid #757575;\n\tpadding: 10px 0;\n\tmargin-bottom: 10px;\n\toutline: 0;\n\tbackground: transparent;\n\tcolor: #757575;\n    -webkit-transition: all 300ms;\n    transition: all 300ms;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-tap-highlight-color: transparent;\n}\n\nform input:focus, form textarea:focus {\n    outline: none;\n    border-color: black;\n    color: black;\n}\n\nform .style__submit___31y5x p {\n\tcolor: black;\n}\n\nform .style__submit___31y5x svg {\n\tfill: black;\n}\n\nform .style__submit___31y5x span {\n\tborder-color: black;\n}\n\nform .style__submit___31y5x span div {\n\tbackground-color: black;\n}\n\nform .style__error___1DBKn {\n\tcolor: red;\n}\n\n.style__social-icons___1Sb2v {\n  margin-bottom: 30px;\n  border-top: 1px solid white;\n}\n\n.style__social-icon___XjBbj {\n  display: inline-block;\n  padding: 5px;\n  font-size: 30px;\n  color: black;\n  margin-right: 20px\n}\n\n.style__social-icon___XjBbj:visited{\n  color: black;\n}", "", {"version":3,"sources":["/./components/Contact/style.css"],"names":[],"mappings":";AACA;;CAEC;;AAED;;CAEC;;AAED;CACC,YAAY;CACZ,UAAU;CACV,iCAAiC;CACjC,gBAAgB;CAChB,oBAAoB;CACpB,WAAW;CACX,wBAAwB;CACxB,eAAe;IACZ,8BAAsB;IAAtB,sBAAsB;IACtB,yCAAyC;IACzC,yCAAyC;CAC5C;;AAED;IACI,cAAc;IACd,oBAAoB;IACpB,aAAa;CAChB;;AAED;CACC,aAAa;CACb;;AAED;CACC,YAAY;CACZ;;AAED;CACC,oBAAoB;CACpB;;AAED;CACC,wBAAwB;CACxB;;AAED;CACC,WAAW;CACX;;AAED;EACE,oBAAoB;EACpB,4BAA4B;CAC7B;;AAED;EACE,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,kBAAkB;CACnB;;AAED;EACE,aAAa;CACd","file":"style.css","sourcesContent":["\n.heading {\n\n}\n\n.tweentxt{\n\n}\n\nform input, form textarea {\n\twidth: 100%;\n\tborder: 0;\n\tborder-bottom: 2px solid #757575;\n\tpadding: 10px 0;\n\tmargin-bottom: 10px;\n\toutline: 0;\n\tbackground: transparent;\n\tcolor: #757575;\n    transition: all 300ms;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-tap-highlight-color: transparent;\n}\n\nform input:focus, form textarea:focus {\n    outline: none;\n    border-color: black;\n    color: black;\n}\n\nform .submit p {\n\tcolor: black;\n}\n\nform .submit svg {\n\tfill: black;\n}\n\nform .submit span {\n\tborder-color: black;\n}\n\nform .submit span div {\n\tbackground-color: black;\n}\n\nform .error {\n\tcolor: red;\n}\n\n.social-icons {\n  margin-bottom: 30px;\n  border-top: 1px solid white;\n}\n\n.social-icon {\n  display: inline-block;\n  padding: 5px;\n  font-size: 30px;\n  color: black;\n  margin-right: 20px\n}\n\n.social-icon:visited{\n  color: black;\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"heading": "style__heading___MzuLZ",
		"tweentxt": "style__tweentxt___12Zy-",
		"submit": "style__submit___31y5x",
		"error": "style__error___1DBKn",
		"social-icons": "style__social-icons___1Sb2v",
		"social-icon": "style__social-icon___XjBbj"
	};

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ui = exports.navigation = undefined;

	var _ui = __webpack_require__(588);

	var _ui2 = _interopRequireDefault(_ui);

	var _navigation = __webpack_require__(589);

	var _navigation2 = _interopRequireDefault(_navigation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.navigation = _navigation2.default;
	exports.ui = _ui2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;

	var initialState = {
	  show_menu: false
	};

	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {

	    case "SHOW_MENU":
	      {
	        console.log("SHOW MENU REDUCER");
	        return {
	          show_menu: true
	        };
	      }
	  }

	  return state;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ui.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;

	var _reduxSimpleRouter = __webpack_require__(479);

	var initialState = {
	  curr_path: "",
	  prev_path: "",
	  curr_idx: null,
	  prev_idx: null,
	  backward: null
	};

	var sitemap = ['/', '/portfolio', '/about', '/contact'];

	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {

	    case _reduxSimpleRouter.UPDATE_LOCATION:
	      {
	        console.log("UPDATE_LOCATION");
	        console.log(action);
	        return {
	          prev_path: state.curr_path,
	          curr_path: action.payload.pathname,
	          prev_idx: sitemap.indexOf(state.curr_path),
	          curr_idx: sitemap.indexOf(action.payload.pathname),
	          backward: sitemap.indexOf(state.curr_path) < sitemap.indexOf(action.payload.pathname)
	        };
	      }

	  }

	  return state;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/smiter/Downloads/projects/my_website2/my_wesbite_real/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "navigation.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }
]);