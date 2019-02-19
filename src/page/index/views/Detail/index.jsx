import React, { Component } from 'react';
import connect from './../../store/connect';
import { action } from './reducer';

@connect('detail', action)
class Detail extends Component {
  componentWillMount() {
    this.props.getInfo()
  }
  render() {
    return (
      <div>Detail{this.props.test2}</div>
    )
  }
}

export default Detail;
