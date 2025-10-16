import { sum } from "./sum.ts";

it("1と2を足すと3になる", () => {
  expect(sum(1, 2)).toBe(3);
});
