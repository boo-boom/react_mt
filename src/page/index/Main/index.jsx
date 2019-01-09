import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo, getBanners } from '../actions/mainAction'
// import TabBar from '../TabBar'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: 'qwewqe'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    UNSAFE_componentWillMount() {
        // 如果不指定this时，onLoadPage中this会指向window
        window.addEventListener('scroll', this.onLoadPage.bind(this))
    }
    // Container
    onLoadPage() {
        const clientHeight = document.documentElement.clientHeight
        const scrollHeight = document.body.scrollHeight
        const scrollTop = document.documentElement.scrollTop
        const proLoadDis = 30
        if((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
            console.log('到底了...')
        }
    }
    handleClick() {
        this.props.dispatch(addTodo(1))
        this.props.dispatch(getBanners())
    }
    render() {
        const props = this.props
        return (
            <div style={{height:"2000px"}}>
                {this.state.test}
                <div onClick={this.handleClick}>{props.num}</div>
                {
                    props.banners&&props.banners.length
                    ? <img src={props.banners.length&&props.banners[Math.min(props.num, 5)].picUrl} style={{height:"50px"}} alt=""/> 
                    : null
                }
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
        num: state.mainReducer.num,
        banners: state.mainReducer.banners,
    })
)(hot(module)(Main));