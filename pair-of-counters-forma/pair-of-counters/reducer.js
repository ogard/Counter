import t from 'tcomb';
import {createUnion} from 'redux-tcomb';
import getCheckedGeneratorReducer from '../redux-tcomb';
import {mapEffects} from '../redux-extensions';

import Counter from '../counter/';

import {
  TOP,
  BOTTOM,
  actionTypes
} from './actions';

import Model from './model';

/* TODO const mapChild1Fx = mapFx(ACTION1); */

export function init() {
  return {
    counter1: Counter.init(),
    counter2: Counter.init()
  }

}

function* reducer(state, action) {
  switch(action.type){
    case TOP:
      return {
        counter1: yield* mapEffects(Counter.reducer(state.counter1, action.action), TOP),
        counter2: state.counter2
      };
    case BOTTOM:
      return {
        counter1: state.counter1,
        counter2: yield* mapEffects(Counter.reducer(state.counter2, action.action), BOTTOM)
      };
    default:
      return state;
  }
}

export default getCheckedGeneratorReducer(reducer, Model, createUnion(actionTypes));
