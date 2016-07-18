export const getModelView = (state) => {
  const {count, increment, decrement} = state;
  return {
    count,
    increment,
    decrement
  }
};