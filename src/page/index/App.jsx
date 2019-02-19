import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
// import { hot } from 'react-hot-loader'
import store from './store'
import Home from './views/Home'

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Home/>
        </Fragment>
      </Provider>
    )
  }
}

// export default hot(module)(App);
export default App;
