
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { syncHistory, routeReducer } from 'redux-simple-router';
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Imgoing from './components/Portfolio/Projects/Imgoing'
import Getsocial from './components/Portfolio/Projects/Getsocial'
import Columbia from './components/Portfolio/Projects/Columbia'
import Sts from './components/Portfolio/Projects/Sts'
import Abingdon from './components/Portfolio/Projects/Abingdon'
import Henry from './components/Portfolio/Projects/Henry'
import HenryWeddings from './components/Portfolio/Projects/HenryWeddings'
import BradentonLearn from './components/Portfolio/Projects/BradentonLearn'
import Gordon from './components/Portfolio/Projects/Gordon'
import Clinton from './components/Portfolio/Projects/Clinton'
import BradentonMobile from './components/Portfolio/Projects/BradentonMobile'
import V2D from './components/Portfolio/Projects/V2D'
import ITI from './components/Portfolio/Projects/ITI'
import Hospitality from './components/Portfolio/Projects/Hospitality'
import PTC from './components/Portfolio/Projects/PTC'
import Braselton from './components/Portfolio/Projects/Braselton'
import BradentonSales from './components/Portfolio/Projects/BradentonSales'
import CMS from './components/Portfolio/Projects/CMS'

import Contact from './components/Contact'

const reducers = require('./reducers');
console.log(reducers)
const history = createHistory();
const middleware = syncHistory(history);

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

const finalCreateStore = compose(
  applyMiddleware(middleware),
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducer);
middleware.listenForReplays(store);
    // <DevTools />

ReactDOM.render(
  <Provider store={store}>
  <div style={{height:"100%"}}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      	<Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      	<Route path="/portfolio" component={Portfolio} />
      	<Route path="/portfolio/imgoing" component={Imgoing} />
        <Route path="/portfolio/getsocial" component={Getsocial} />
        <Route path="/portfolio/columbia" component={Columbia} />
        <Route path="/portfolio/sts" component={Sts} />
        <Route path="/portfolio/abingdon" component={Abingdon} />
        <Route path="/portfolio/henry" component={Henry} />
        <Route path="/portfolio/henry-weddings" component={HenryWeddings} />
        <Route path="/portfolio/bradenton" component={BradentonLearn} />
        <Route path="/portfolio/gordon" component={Gordon} />
        <Route path="/portfolio/clinton" component={Clinton} />
        <Route path="/portfolio/bradenton-mobile" component={BradentonMobile} />
        <Route path="/portfolio/v2d" component={V2D} />
        <Route path="/portfolio/iti" component={ITI} />
        <Route path="/portfolio/hospitality" component={Hospitality} />
        <Route path="/portfolio/ptc" component={PTC} />
        <Route path="/portfolio/braselton" component={Braselton} />
        <Route path="/portfolio/bacvb" component={BradentonSales} />
        <Route path="/portfolio/cms" component={CMS} />
      </Route>
    </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
