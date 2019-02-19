import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/**
 * 封装装饰器方法
 * @param {String} mode 对应的reducer方法名
 * @param {Object} action reducer.js下的action集合
 */
export default (mode, action) => {
  return connect(
    state => state[mode],
    dispatch => bindActionCreators(action, dispatch)
  )
}
