import { createStore, compose } from 'redux';
import { createEffectCapableStore } from 'redux-side-effects';

import rootReducer from './reducer';

function traverse(o, func) {
  for (const i in o) {
    if (o.hasOwnProperty(i)) {
      func.apply(this, [i, o[i], o]);
      if (o[i] !== null && typeof(o[i]) == 'object') {
        // going on step down in the object tree!!
        traverse(o[i], func);
      }
    }
  }
}

function fixJSONDate(propName, value, owner) {
  if (typeof value !== 'string') return;
  const d = Date.parse(value);
  if (!!d) owner[propName] = new Date(d);
}

const finalCreateStore = compose(
  createEffectCapableStore,
  window.devToolsExtension ? window.devToolsExtension({
    deserializeState: state => {
      if (state == null) return state;

      traverse(state, fixJSONDate);
      return state;
    }
  }) : f => f
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer.js', () => {
      const nextRootReducer = require('./reducer.js');
      store.replaceReducer(nextRootReducer.default);
    });
  }

  return store;
}
