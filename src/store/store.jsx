  
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import profile from '../reducers/profile';

const rootReducer = combineReducers({
  user: profile
});

const configureStore = () => {
  return createStore(
    rootReducer,
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk))
  );
};

export default configureStore;