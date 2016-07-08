import React, { Component, PropTypes } from 'react'

import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ODD
} from './actions';

export default class Counter extends Component {
  render() {
    const {state, dispatch} = this.props;
    return(
      <div>
        <p>
          {state}
          {' '}
          <button onClick={() => dispatch({type: INCREMENT})}>+</button>
          {' '}
          <button onClick={() => dispatch({type: DECREMENT})}>-</button>
          {' '}
          <button onClick={() => dispatch({type: INCREMENT_IF_ODD})}>+ ako je neparan</button>
          {' '}
          <button onClick={() => dispatch({type: INCREMENT_ASYNC})}>+ nakon 2 sekunde</button>
          {' '}
          <button onClick={() => dispatch({type: INCREMENT_ASYNC_ODD})}>+ nakon 2 sekunde ako je neparan</button>
        </p>
      </div>
    );
    
  }
}

Counter.propTypes = {
  state: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}
