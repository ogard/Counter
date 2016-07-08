import React, { Component, PropTypes } from 'react';
import {forwardTo} from '../redux-extensions';

import Counter from '../counter/';

import {
  TOP,
  BOTTOM
} from './actions';

export default class PairOfCounters extends Component {
  render() {
    /* TODO */
    const {state, dispatch} = this.props;
    return (
      <div>
        <Counter.view state={state.counter1} dispatch={forwardTo(dispatch, 'TOP')} />
        <Counter.view state={state.counter2} dispatch={forwardTo(dispatch, 'BOTTOM')} />
      </div>
    );
  }
}

PairOfCounters.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
