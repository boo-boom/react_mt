import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import connect from './../../store/connect';
import { action } from './reducer';

@connect('detail', action)
class Detail extends Component {
  componentWillMount() {
    this.props.getInfo()
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <p>Detail{this.props.test2}</p>
        <Link to="/">返回</Link>
      </div>
    )
  }
}

export default Detail;
