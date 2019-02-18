import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopics } from './reducer';

class Home extends Component {
  componentWillMount() {
    this.props.getTopics(123)
  }
  render() {
    return (
      <div>Home{this.props.topics}</div>
    )
  }
}

export default connect(
  state => ({
    topics: state.home.test1
  }),
  { getTopics }
)(Home);
