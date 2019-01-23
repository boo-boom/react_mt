import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'
import AllRoutes from './routes'
const store = configureStore()

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AllRoutes/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// redux修改时触发热替换
if (module.hot) {
  module.hot.accept()
}
