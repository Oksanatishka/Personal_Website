import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../client/reducers'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../../client/reducers', () => {
      const nextRootReducer = require('../../client/reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}