export const calculateBudget = arr => {
  return arr.reduce((a, c) => a + c.cost, 0);
};
