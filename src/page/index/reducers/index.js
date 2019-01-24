import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import tabReducer from './tabReducer'
import mainReducer from './mainReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  tabReducer,
  mainReducer,
})

// redux修改时触发热替换
// if (module.hot) {
//   module.hot.accept()
// }
