import { combineReducers } from 'redux'
import tabReducer from './tabReducer'
import mainReducer from './mainReducer'

const reducers = combineReducers({
  tabReducer,
  mainReducer,
})

export default reducers;
