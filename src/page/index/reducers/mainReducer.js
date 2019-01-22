import { ADD_TODO, GET_BANNERS } from './../actions/actionTypes'

const initState = {
    num: 12,
    banners: []
}

const addTodo = (state, action) => {
    const num1 = state.num
    const num2 = action.num
    return {
        num: num1 + num2
    }
}

const banners = (state, action) => {
    return { ...state, banners: action.banners }
}

const mainReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return addTodo(state, action)
        case GET_BANNERS:
            return banners(state, action)
        default:
            return state
    }
}

export default mainReducer
