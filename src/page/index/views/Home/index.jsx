import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTopics } from './reducer';
import img from '@static/logo.png';
import './style.scss';

@connect(
  state => ({home: state.home}),
  { getTopics }
)
class Home extends Component {
  constructor(props) {
    super(props)
    this.goDetail = this.goDetail.bind(this)
    this.goHome = this.goHome.bind(this)
  }
  componentWillMount() {
    this.props.getTopics(123)
  }
  goDetail() {
    this.props.history.push('/detail/123123123')
    console.log(this.props.history)
  }
  goHome() {
    this.props.history.push({ pathname: '/my', query: { id: 444, name: 'my' } })
    console.log(this.props.history)
  }
  render() {
    return (
      <div>
        <img width="50" src={img} alt=""/>
        <div style={{ color: 'red' }}>Home{this.props.test1}</div>
        <Link to="/detail/123">html跳转+动态路由</Link><br />
        <p onClick={this.goDetail}>js跳转</p>
        <Link to={{ pathname: '/my', state: { id: 123, name: 'my' } }}>隐式传参</Link><br />
        <Link to={{ pathname: '/my', search: '?id=333&name=my' }}>html多个参数</Link><br />
        <Link to='/my?id=333&name=my'>html多个参数</Link><br />
        <p onClick={this.goHome}>多个参数</p><br />
      </div>
    )
  }
}

export default Home;
