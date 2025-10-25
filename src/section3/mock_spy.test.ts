import { Calculator } from "./mock_spy";

// 【toHaveBeenCalledTimes】spyを設定した関数の実行回数
// 【toHaveBeenCalledWith】spyを設定した関数に渡された引数
it("Sumメソッドが呼び出される", () => {
  const calculator = new Calculator();
  const spy = jest.spyOn(calculator, "sum");
  const result = calculator.sum(1, 2);
  expect(result).toBe(3);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(1, 2);

  // spyを破棄
  spy.mockRestore();
});
