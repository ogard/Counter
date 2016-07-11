import reducer, {init} from './pair-of-counters/reducer';

export default function* root(state, ...rest) {
  console.log('root');
  if (state === undefined) return init();
  return yield* reducer(state, ...rest);
}