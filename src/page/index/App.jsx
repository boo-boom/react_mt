import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import { hot } from 'react-hot-loader'
import store from './store'
import Routes from './route'
import '@common/style/reset.css'
import '@common/js/rem'


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}

// export default hot(module)(App);
export default App;
