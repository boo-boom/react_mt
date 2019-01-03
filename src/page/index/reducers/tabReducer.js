import { CHANGE_TAB } from './../actions/actionTypes'

const initState = {
    tabs: [
        { name: '首页', key: 'home' },
        { name: '订单', key: 'order' },
        { name: '我的', key: 'my' },
    ],
    curIndex: 0,
}

const tabReducer = (state = initState, action) => {
    switch(action.type) {
        case CHANGE_TAB: 
            return changeTab(state, action)
        default:
            return state
    }
}

const changeTab = (state, action) => {
    return { ...state, curIndex: action.index }
}

export default tabReducer;