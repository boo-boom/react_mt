import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Home from './views/Home'

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}

export default App;
