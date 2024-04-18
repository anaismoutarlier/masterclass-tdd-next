import { calculateBudget } from "./calculateBudget";

test("Calculates correct amount", () => {
  const values = [
    { name: "Hotel", cost: 400 },
    { name: "Boat cruise", cost: 200 },
  ];

  const res = calculateBudget(values);
  expect(res).toBe(600);
});
