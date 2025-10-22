// 【toThrow】例外処理のテスト
import { divide, ZeroDivisorError } from "./divide";

it("0で割るとエラーが発生する", () => {
  // 例外処理をテストする場合は無名関数でラップする
  expect(() => divide(1, 0)).toThrow(); // なんらかのエラーが発生することを確認
  expect(() => divide(1, 0)).toThrow(ZeroDivisorError); // 特定のエラーが発生していることを確認
  expect(() => divide(1, 0)).toThrow("0で割ることはできません"); // エラーメッセージを確認
});

it("10を2で割ると5になる", () => {
  expect(divide(10, 2)).toBe(5);
});
