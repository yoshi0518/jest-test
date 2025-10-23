import { ShoppingList } from "./practice.ts";

describe("ショッピングリストテスト", () => {
  let shoppingList: ShoppingList;

  beforeAll(() => {
    shoppingList = new ShoppingList();
  });

  it("アイテムをリストに追加できる", () => {
    shoppingList.addItem("apple");
    expect(shoppingList.list).toEqual(["apple"]);
  });

  it("アイテムをリストから削除できる", () => {
    shoppingList.removeItem("apple");
    expect(shoppingList.list).toEqual([]);
  });

  it("存在しないアイテムを削除したらエラー", () => {
    expect(() => shoppingList.removeItem("banana")).toThrow(
      "アイテム: banana は存在しません"
    );
  });
});
