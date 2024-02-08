import { createStore } from 'redux';
import orderReducer from './reducers';

const store = createStore(
    orderReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
