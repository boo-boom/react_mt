import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import store from './store'
import Main from './Main'

ReactDom.render(
    <AppContainer>
        <Provider store={store}>
            <Main test={{a:1}}/>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)

// redux修改时触发热替换
if (module.hot) {
    module.hot.accept()
}
