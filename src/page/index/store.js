import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import reducers from './reducers'

const history = createHashHistory()
const historyMiddle = routerMiddleware(history)
const store = createStore(reducers, applyMiddleware(thunk, historyMiddle))

export {
  store,
  history
}


