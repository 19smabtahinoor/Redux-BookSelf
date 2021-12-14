import { combineReducers, createStore } from 'redux';
import bookReducers from './reducers/bookReducers';

const rootReducers = combineReducers({
    book: bookReducers
})
const store = createStore(rootReducers);
export default store