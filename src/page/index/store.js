import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import reducers from './reducers'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    reducers(history),
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ),
  )
  return store
}

