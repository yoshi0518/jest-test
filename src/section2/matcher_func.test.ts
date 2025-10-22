// 【toBe】同じ値であることを確認
it("数値のテスト", () => {
  expect(2 + 2).toBe(4);
});

it("文字列のテスト", () => {
  expect("Jest").toBe("Jest");
});

it("真偽値のテスト", () => {
  expect(true).toBe(true);
});

// 【toEqual】オブジェクト、配列が同じ構造・内容であることを確認
it("オブジェクトのテスト", () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  expect(obj1).toEqual(obj2);
});

it("配列のテスト", () => {
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];
  expect(array1).toEqual(array2);
});

// 【not】不一致を確認
it("2+2は5ではない", () => {
  expect(2 + 2).not.toBe(5);
});
