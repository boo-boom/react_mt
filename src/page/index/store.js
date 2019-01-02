import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

// redux也要设置热替换
if (module.hot) {
    module.hot.accept('./reducers/index', () => {
        const nextRootReducer = require('./reducers/index.js').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;


