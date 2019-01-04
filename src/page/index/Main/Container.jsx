import React from 'react'
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
    handleClick() {
        this.props.dispatch(addTodo(1))
        this.props.dispatch(getBanners())
    }
    render() {
        const props = this.props
        return (
            <div>
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
)(Main);