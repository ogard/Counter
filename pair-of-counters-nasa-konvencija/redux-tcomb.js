import isReduxAction from 'redux-tcomb/lib/isReduxAction';

// TODO: prabaci u biblioteku @saga/redux-tcomb
export default function getCheckedGeneratorReducer(reducer, State, Action) {
  return function* checkedReducer(state, action, ...rest) {
    // TODO: ispitaj zasto na exception tera u beskonacno
    // npr napravi undefined u reduceru
    if (process.env.NODE_ENV !== 'production') {
      if (typeof state !== 'undefined') {
        State(state);
      }
      if (!isReduxAction(action)) {
        Action(action);
      }
    }
    const newState = yield* reducer(state, action, ...rest);
    if (process.env.NODE_ENV !== 'production') {
      State(newState);
    }
    return newState;
  };
}
