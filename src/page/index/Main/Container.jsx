import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import { addTodo, getBanners } from '../actions/mainAction'
// import TabBar from '../TabBar'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curImg: 'qwewqe'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.dispatch(addTodo(1))
        axios.get('http://music.mendada.cn/api/banner').then(res => {
            this.props.dispatch(getBanners(res.data.banners))
        })
    }
    render() {
        const props = this.props
        return (
            <div>
                {this.state.curImg}
                <div onClick={this.handleClick}>{props.num}</div>
                {/* <TabBar/> */}
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