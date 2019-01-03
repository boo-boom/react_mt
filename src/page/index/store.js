import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

// redux也要设置热替换
if (module.hot) {
    module.hot.accept(store, ()=>{
        const nextRootReducer = reducers;
        store.replaceReducer(nextRootReducer)
    });
}

export default store;


