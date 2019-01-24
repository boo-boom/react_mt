import { ADD_TODO } from '../actions/actionTypes'

export const addTest = (num) => {
  return {
    type: ADD_TODO,
    num: num
  }
}