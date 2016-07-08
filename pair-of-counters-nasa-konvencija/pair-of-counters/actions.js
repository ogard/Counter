import t from 'tcomb';

export const TOP = 'TOP';
export const BOTTOM = 'BOTTOM';

export const actionTypes = {
  [TOP]: t.struct({action: t.Object}, TOP),
  [BOTTOM]: t.struct({action: t.Object}, BOTTOM)
};
