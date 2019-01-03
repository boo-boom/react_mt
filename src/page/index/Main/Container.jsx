import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import axios from 'axios'
import { addTodo } from '../actions/mainAction'
// import { getBanners } from '../actions/mainAction'
import TabBar from '../TabBar'

class Main extends React.Component {
    fnClick() {
        const obj = {
            num: 1
        }
        this.props.dispatch(addTodo(obj))
        // axios.get('http://music.mendada.cn/api/banner').then(res => {
        //     console.log(res.data)
        // })
    }
    render() {
        const props = this.props
        // console.log(props)
        return (
            <div>
                <div onClick={()=>this.fnClick()}>{props.num}</div>
                <TabBar/>
            </div>
        )
    }
}

Main.propTypes = {
    test: PropTypes.object
}

export default connect(
    state => ({
        num: state.mainReducer.num
    })
)(Main);