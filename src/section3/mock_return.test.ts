it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Mock Return Value");
  expect(mockFunc()).toBe("Mock Return Value");
  expect(mockFunc()).toBe("Mock Return Value");
  expect(mockFunc()).toBe("Mock Return Value");
});

it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("Mock Return Value");
  expect(mockFunc()).toBe("Mock Return Value");
  expect(mockFunc()).toBe(undefined);
});

it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("Resolved value");
  const result = await mockFunc();
  expect(result).toBe("Resolved value");
});
