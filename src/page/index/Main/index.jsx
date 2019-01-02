import React from 'react'
import { hot } from 'react-hot-loader'
import Container from './Container'

class Index extends React.Component {
    render() {
        return <Container/>
    }
}

// 模块热替换 不刷新页面只更新修改的组件
export default hot(module)(Index);