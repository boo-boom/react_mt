import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from './store'
import Main from './Main'

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main test={{ a: 1 }} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// redux修改时触发热替换
if (module.hot) {
  module.hot.accept()
}
