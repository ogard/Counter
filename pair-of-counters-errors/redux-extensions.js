import {sideEffect} from 'redux-side-effects';

function getIdentificatorActionTemplate(actionTypeOrIdentification) {
  if (typeof actionTypeOrIdentification === 'object') {
    // TODO: invariant da ima strukturu {type: any, id: any}
    return actionTypeOrIdentification;
  }

  return {type: actionTypeOrIdentification};
}

export function forwardTo(dispatch, actionTypeOrIdentification) {
  const identificatorActionTemplate = getIdentificatorActionTemplate(actionTypeOrIdentification);

  return action => dispatch({
    ...identificatorActionTemplate,
    action
  });
}

const isIterable = value => typeof value != 'undefined' && typeof value.next === 'function';

const unwindIterable = iterable => {
  const data = [];

  const recur = it => {
    const next = it.next();
    data.push(next.value);

    if (next.done) {
      return data;
    }

    return recur(it);
  };

  return recur(iterable);
};

const last = arr => arr[arr.length - 1];

export function* mapEffects(reduction, actionTypeOrIdentification) {
  const identificatorActionTemplate = getIdentificatorActionTemplate(actionTypeOrIdentification);
  if (isIterable(reduction)) {
    const unwoundIterable = unwindIterable(reduction);

    for (let i = 0; i < unwoundIterable.length - 1; i++) {
      const [executor, ...executorArgs] = unwoundIterable[i];
      yield sideEffect(dispatch => executor(action => dispatch({...identificatorActionTemplate, action})), ...executorArgs); // eslint-disable-line no-loop-func
    }

    return last(unwoundIterable);
  }

  return reduction;
}
