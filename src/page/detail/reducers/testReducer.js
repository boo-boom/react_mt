import { ADD_TODO } from '../actions/actionTypes'

const initState = {
    num: 2
}

const testReducer = (state=initState, actions) => {
    switch(actions.type) {
        case ADD_TODO:
            return test(actions.num)
        default:
            return state
    }
}

const test = (num) => {
    return num
}

export default testReducer;