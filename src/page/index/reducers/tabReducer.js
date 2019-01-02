import { ADD_TODO, CHANGE_TAB } from './../actions/actionTypes'

const initState = {
    num: 12,
    tabs: [
        { name: '首页2', key: 'home' },
        { name: '订单', key: 'order' },
        { name: '我的', key: 'my' },
    ],
    curIndex: 0,
}

const tabReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            return addTodo1(state, action)
        case CHANGE_TAB: 
            return changeTab(state, action)
        default:
            return state
    }
}

const addTodo1 = (state, action) => {
    const num1 = state.num
    const num2 = action.obj.num
    return {
        num: num1 + num2
    }
}

const changeTab = (state, action) => {
    return { ...state, curIndex: action.index }
}

export default tabReducer;