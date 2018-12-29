import { ADD_TODO, CHANGE_TAB } from './actionTypes'

export const addTodo = (obj) => {
    return {
        type: ADD_TODO,
        obj
    }
}

export const changeTab = (index) => {
    return {
        type: CHANGE_TAB,
        index: index
    }
}