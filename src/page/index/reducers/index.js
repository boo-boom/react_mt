import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import tabReducer from './tabReducer'
import mainReducer from './mainReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  tabReducer,
  mainReducer,
})

