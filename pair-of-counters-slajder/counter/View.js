import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import {Model, opcije} from './model';


import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ODD,
  CAPTURE_FORM_STATE,
  INCREMENTOR,
  DECREMENTOR,
  actionTypes
} from './actions';

export default class Counter extends Component {
  render() {
    const {state, dispatch} = this.props;
    return(
      <div>
        <t.form.Form ref='forma' type={Model} options={opcije} value={state} context={{dispatch}}
         onChange={(value) => dispatch({
             type: CAPTURE_FORM_STATE, payload: [parseInt(value.increment), parseInt(value.decrement)]
            }) 
        }
        />
        <p>
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
        <p>
            <button onClick={() => dispatch({type: INCREMENTOR})}>INKREMENTIRAJ</button>
            {' '}
            <button onClick={() => dispatch({type: DECREMENTOR})}>DEKREMENTIRAJ</button>
        </p>
      </div>
    );
    
  }
}

Counter.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
