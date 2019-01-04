import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

// redux也要设置热替换
if (module.hot) {
    module.hot.accept(store, ()=>{
        const nextRootReducer = reducers;
        store.replaceReducer(nextRootReducer)
    });
}

export default store;


