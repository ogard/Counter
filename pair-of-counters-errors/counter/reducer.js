import {createUnion} from 'redux-tcomb';
import getCheckedGeneratorReducer from '../redux-tcomb';
import {sideEffect} from 'redux-side-effects';

import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ODD,
  CAPTURE_FORM_STATE,
  INCREMENTOR,
  DECREMENTOR,
  CAPTURE_SLIDER_STATE,
  actionTypes
} from './actions';

import {Model} from './model';

export function init() {
  return {
      count: 0,
      increment: 0,
      decrement: 0
  };
}

function* reducer(state=init(), action) {
  switch(action.type){
    case INCREMENT:
      return {
          ...state,
          count: state.count + 1
      }
    case DECREMENT:
      return {
          ...state,
          count: state.count - 1
      }
    case INCREMENT_IF_ODD:
      if(state.count % 2 !== 0){
        return {
            ...state,
            count: state.count + 1
        } 
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
    case CAPTURE_SLIDER_STATE:
        return {
            ...state,
            increment: action.payload
        }
    case CAPTURE_FORM_STATE:
        return {
            ...state,
            increment: action.payload[0],
            decrement: action.payload[1]
        }
    case INCREMENTOR:
        return {
            ...state,
            count: state.count + state.increment,
            increment: 0
        }
    case DECREMENTOR:
        return {
            ...state,
            count: state.count - state.decrement,
            decrement: 0
        }
    default:
      return state;
  }
}

export default getCheckedGeneratorReducer(reducer, Model, createUnion(actionTypes));
