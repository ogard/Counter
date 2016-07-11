import t from 'tcomb';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const INCREMENT_ASYNC_ODD = 'INCREMENT_ASYNC_ODD';
export const CAPTURE_FORM_STATE = 'CAPTURE_FORM_STATE'
export const INCREMENTOR = 'INCREMENTOR';
export const DECREMENTOR = 'DECREMENTOR';

const Niz = t.tuple([t.Number, t.Number]);

export const actionTypes = {
  [INCREMENT]: t.struct({}, INCREMENT),
  [DECREMENT]: t.struct({}, DECREMENT),
  [INCREMENT_IF_ODD]: t.struct({}, INCREMENT_IF_ODD),
  [INCREMENT_ASYNC]: t.struct({},INCREMENT_ASYNC),
  [INCREMENT_ASYNC_ODD]: t.struct({},INCREMENT_ASYNC_ODD),
  [CAPTURE_FORM_STATE]: t.struct({payload: Niz}, CAPTURE_FORM_STATE),
  [INCREMENTOR]: t.struct({}, INCREMENTOR),
  [DECREMENTOR]: t.struct({}, DECREMENTOR)
};  
