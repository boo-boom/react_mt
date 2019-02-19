import React, { Component } from 'react';
import connect from './../../store/connect';
import { action } from './reducer';

@connect('home', action)
class Home extends Component {
  componentWillMount() {
    this.props.getTopics(123)
  }
  render() {
    return (
      <div>Home{this.props.test1}</div>
    )
  }
}

export default Home;
