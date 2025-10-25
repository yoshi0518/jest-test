import fs from "fs";
import { readFile } from "./mock_module";

// jest.mockはトップレベルで記載
jest.mock("fs");
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("dummy data");

it("readFileがデータを返却する", () => {
  const result = readFile("path/dummy.txt");
  expect(result).toBe("dummy data");
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});
