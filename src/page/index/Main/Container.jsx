import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from '../actions/tabAction'
import TabBar from '../TabBar'

class Main extends React.Component {
    click() {
        const obj = {
            num: 1
        }
        this.props.dispatch(addTodo(obj))
    }
    render() {
        const props = this.props
        return (
            <div>
                <div onClick={()=>this.click()}>{props.num}</div>
                <TabBar/>
            </div>
        )
    }
}

Main.propTypes = {
    dispatch: PropTypes.func,
    test: PropTypes.object
}

export default connect(
    state => ({
        num: state.tabReducer.num
    })
)(Main);