import { toggleTheme, getCurrentTheme } from "./theme";

describe("Theme Test", () => {
  it("should toggle theme value in the given storage", () => {
    const store = {};
    const mockStorage = {
      setItem: (key, value) => (store[key] = value),
      getItem: key => store[key]
    };
    toggleTheme(mockStorage);
    expect(getCurrentTheme(mockStorage).palette.type).toEqual("dark");

    toggleTheme(mockStorage);
    expect(getCurrentTheme(mockStorage).palette.type).toEqual("light");

    toggleTheme(mockStorage);
    expect(getCurrentTheme(mockStorage).palette.type).toEqual("dark");
  });
});
