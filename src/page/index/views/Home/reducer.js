import { ACTION_TEST } from './../../store/actionTypes'

// default
const stateDefault = {
  test1: 'qweqwe'
}

// reducer
export function home(state = stateDefault, action) {
  switch (action.type) {
  case ACTION_TEST:
    return { ...state, test1: action.test1 }
  default:
    return state;
  }
}

// action
export function getTopics() {
  return dispatch => {
    dispatch({
      type: ACTION_TEST,
      test1: 3212
    })
  }
}
