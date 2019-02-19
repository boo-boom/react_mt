import { combineReducers } from 'redux';
import { home } from './../views/Home/reducer'
import { detail } from './../views/Detail/reducer'

export default combineReducers({
  home,
  detail
});
