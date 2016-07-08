import {createUnion} from 'redux-tcomb';
import getCheckedGeneratorReducer from '../redux-tcomb';
import {sideEffect} from 'redux-side-effects';

import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ODD,
  actionTypes
} from './actions';

import Model from './model';

export function init() {
  return 0;
}

function* reducer(state, action) {
  switch(action.type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_IF_ODD:
      if(state % 2 !== 0){
        return state + 1; 
      }
      return state;
    case INCREMENT_ASYNC:
      yield sideEffect( dispatch => {
        setTimeout(() => {dispatch({type: INCREMENT})}, 2000);
      });
      return state;
    case INCREMENT_ASYNC_ODD:
      yield sideEffect(dispatch => {
        setTimeout(() => {dispatch({type: INCREMENT_IF_ODD})}, 2000)
      });
      return state;
    default:
      return state;
  }
}

export default getCheckedGeneratorReducer(reducer, Model, createUnion(actionTypes));
