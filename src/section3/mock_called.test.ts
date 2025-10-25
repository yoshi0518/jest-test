// 【toHaveBeenCalled】モック関数が一度でも呼び出されると成功
it("モック関数が呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  expect(mockFunc).toHaveBeenCalled();
});

// 【toHaveBeenCalledTimes】モック関数が実行された回数を検証
it("モック関数が2回呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  expect(mockFunc).toHaveBeenCalledTimes(2);
});

// 【toHaveBeenCalledWith】モック関数に引数が渡されることを検証
it("モック関数に引数hogeが渡される", () => {
  const mockFunc = jest.fn();
  mockFunc("hoge");
  expect(mockFunc).toHaveBeenCalledWith("hoge");
});
