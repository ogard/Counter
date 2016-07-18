import React, { Component, PropTypes } from 'react';
import {forwardTo} from '../redux-extensions';



import Counter from '../counter/';

import {
  TOP,
  BOTTOM
} from './actions';

export default function PairOfCounters(props) {
  const {state, dispatch} = props;
  return (
    <div>
      <Counter.view state={state.counter1} dispatch={forwardTo(dispatch, 'TOP') } />
      <hr />
      <Counter.view state={state.counter2} dispatch={forwardTo(dispatch, 'BOTTOM') } />
    </div>
  );
}

PairOfCounters.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
