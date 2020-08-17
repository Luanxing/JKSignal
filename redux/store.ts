import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import thunk  from 'redux-thunk';
import {rootReducers} from './combine'　　

const store = createStore(rootReducers,applyMiddleware(thunk))　　　

export default store;