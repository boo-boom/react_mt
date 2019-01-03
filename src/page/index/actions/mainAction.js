import { ADD_TODO, GET_BANNERS } from './actionTypes'

export const addTodo = (obj) => {
    return {
        type: ADD_TODO,
        obj
    }
}

export const getBanners = (banners) => {
    return {
        type: GET_BANNERS,
        banners
    }
}