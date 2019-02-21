import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import connect from './../../store/connect';
import { action } from './reducer';

@connect('home', action)
class Home extends Component {
  componentWillMount() {
    this.props.getTopics(123)
  }
  render() {
    return (
      <div>
        <div style={{color:'red'}}>Home{this.props.test1}</div>
        <Link to="/detail/123">打开详情</Link>
      </div>
    )
  }
}

export default Home;
