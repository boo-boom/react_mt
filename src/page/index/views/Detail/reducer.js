import { ACTION_TEST } from './../../store/actionTypes'

// default
const stateDefault = {
  test2: 'qweqwe'
}

// reducer
export function detail(state = stateDefault, action) {
  switch (action.type) {
  case ACTION_TEST:
    return { ...state, test2: action.test2 }
  default:
    return state;
  }
}

// action
export const action = {
  getInfo: () => {
    return dispatch => {
      dispatch({
        type: ACTION_TEST,
        test2: 'aaaaaa'
      })
    }
  }
};
