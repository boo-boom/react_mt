import React from 'react'
import { connect } from 'react-redux'
import { changeTab } from './../actions/tabAction'
import './style.scss'

class TabBar extends React.Component {
    constructor() {
        super()
    }
    fnChangeTab(index) {
        this.props.dispatch(changeTab(index))
    }
    renderItems() {
        const tabs = this.props.tabs
        const curIndex = this.props.curIndex
        return tabs.map((item, index) => {
            return (
                <div className="tab-item" key={`${item.name}-${index}`} onClick={()=>this.fnChangeTab(index)}>
                    <div className={`tab-icon ${item.key} ${curIndex===index?'active':''}`}></div>
                    <div className="tab-nam">{item.name}</div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="tab-bar">
                {this.renderItems()}
            </div>
        )
    }
}

export default connect(
    state => ({
        tabs: state.tabReducer.tabs,
        curIndex: state.tabReducer.curIndex,
    })
)(TabBar);

