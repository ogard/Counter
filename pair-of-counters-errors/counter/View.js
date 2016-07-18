import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import tv from 'tcomb-validation';
import ModelView from './modelView';
import Model from './model';
import TagsComponent from './slider';

// selektor (trenutno nije potreban):
// const getModelView = (state) => {
//   const {count, increment, decrement} = state;
//   return {
//     count,
//     increment,
//     decrement
//   }
// };


import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_ODD,
  CAPTURE_FORM_STATE,
  INCREMENTOR,
  DECREMENTOR
} from './actions';

// prvi nacin (pomocu mapiranja):
const getOptions1 = (state) => {
  const niz = findErrors(state);
  console.log(niz);
  const noviNiz = niz.map( (element) => {
    return element.path[0];
  });
  console.log(noviNiz);
  const opcije = {
    hasError: (niz.length !== 0 && niz[0].path.length === 0) ? true : false,
    error: (niz.length !== 0) ? niz[0].message : '',
    fields: {
      count: {
        label: 'Vrednost brojača je: ',
        disabled: true
      },
      increment: {
        factory: TagsComponent,
        hasError: noviNiz.map( (element) => {
          if(element === 'increment') {
            return true;
          }
          else{
            return false;
          }
          }),
        error: niz.map( (element) => {
          if (element.path[0] === 'increment') {
            return element.message;
          }
          else {
            return '';
          }
        })
      },
      decrement: {
        label: 'Dekrementiraj za: ',
        hasError: noviNiz.map( (element) => {
          if(element === 'decrement') {
            return true;
          }
          else{
            return false;
          }
          }),
        error: niz.map( (element) => {
          if (element.path[0] === 'decrement') {
            return element.message;
          }
          else {
            return '';
          }
        })
          
      }
    }
  };
  return opcije;
}

// drugi nacin (pomocu f-je reduce):
const getOptions2 = (state) => {
  const niz = findErrors(state);
  console.log(niz);
  return niz.reduce( (prev, curr) => {
    if (curr.path[0] === 'increment') {
      prev.fields[curr.path[0]] = {
        hasError: true,
        error: curr.message,
        factory: TagsComponent
      }
    }
    else {
      prev.fields[curr.path[0]] = {
        label: 'Dekrementiraj za: ',
        hasError: true,
        error: curr.message
      }
    }
    return prev;
  },
  {
    hasError: (niz.length !== 0 && niz[0].path.length === 0) ? true : false,
    error: (niz.length !== 0) ? niz[0].message : '',
    fields: {
      count: {
        label: 'Vrednost brojača je: ',
        disabled: true
      },
      increment: {
        factory: TagsComponent,
        hasError: false
      },
      decrement: {
        label: 'Dekrementiraj za: ',
        hasError: false
      }
    }
  }
  );
}

const findErrors = (state) => {
  const validacija = tv.validate(state, ModelView);
  const validno = validacija.isValid();
  const prvaGreska = validacija.firstError();
  const nizGresaka = validacija.errors;
  return nizGresaka;
}

export default function Counter(props) {
  const {state, dispatch} = props;
  return (
    <div>
      <t.form.Form
        type={Model}
        options={getOptions2(state) }
        value={state}
        context={{ dispatch }}
        onChange={(value) => dispatch({
          type: CAPTURE_FORM_STATE, payload: [Number(value.increment), Number(value.decrement)]
        })
        }
        />
      <p>
        <button onClick={() => dispatch({ type: INCREMENT }) }>+</button>
        {' '}
        <button onClick={() => dispatch({ type: DECREMENT }) }>-</button>
        {' '}
        <button onClick={() => dispatch({ type: INCREMENT_IF_ODD }) }>+ ako je neparan</button>
        {' '}
        <button onClick={() => dispatch({ type: INCREMENT_ASYNC }) }>+ nakon 2 sekunde</button>
        {' '}
        <button onClick={() => dispatch({ type: INCREMENT_ASYNC_ODD }) }>+ nakon 2 sekunde ako je neparan</button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: INCREMENTOR }) }>INKREMENTIRAJ</button>
        {' '}
        <button onClick={() => dispatch({ type: DECREMENTOR }) }>DEKREMENTIRAJ</button>
      </p>
    </div>
  );
}

Counter.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
