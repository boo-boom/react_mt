import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getInfo } from './reducer';

@connect(
  state => ({test2:state.home.test2}),
  { getInfo }
)
class Detail extends Component {
  componentWillMount() {
    this.props.getInfo()
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <p>Detail{this.props.test2}</p>
        <p>params:{this.props.match.params.id}</p>
        <Link to="/">返回</Link>
      </div>
    )
  }
}

export default Detail;
