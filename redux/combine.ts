import { combineReducers } from 'redux';
// import { combineEpics } from 'redux-observable';
import { reducers as commonReducers } from './modules/common';


export const rootReducers = combineReducers({
  ...commonReducers,
});


