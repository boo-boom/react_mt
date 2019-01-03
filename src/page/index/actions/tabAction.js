import { CHANGE_TAB } from './actionTypes'

export const changeTab = (index) => {
    return {
        type: CHANGE_TAB,
        index: index
    }
}