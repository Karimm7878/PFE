
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from '../composants/reducers';

const middleware = [thunk];
const store = createStore(
rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;