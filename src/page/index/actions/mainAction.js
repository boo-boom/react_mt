import axios from 'axios'
import { ADD_TODO, GET_BANNERS } from './actionTypes'

export const addTodo = (num) => {
  return {
    type: ADD_TODO,
    num
  }
}

// export const getBanners = (banners) => {
//     return {
//         type: GET_BANNERS,
//         banners
//     }
// }

export const getBanners = () => {
  return dispatch => {
    axios.get('http://music.mendada.cn/api/banner').then(res => {
      dispatch({
        type: GET_BANNERS,
        banners: res.data.banners
      })
    })
  }
}