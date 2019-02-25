import React, { Component } from 'react'
import localUrl from '@utils/localUrl'

class My extends Component {
  componentWillMount() {
    console.log(localUrl.getQueryString('id'))
  }
  render() {
    return (
      <div>
        My
      </div>
    )
  }
}

export default My;
