import { ADD_TODO, GET_BANNERS } from './actionTypes'

export const addTodo = (num) => {
    return {
        type: ADD_TODO,
        num
    }
}

export const getBanners = (banners) => {
    return {
        type: GET_BANNERS,
        banners
    }
}