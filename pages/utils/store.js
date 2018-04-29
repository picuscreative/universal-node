/* eslint-disable max-len */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default (initialState = {}) => createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
