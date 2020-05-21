import "./better";

describe("Better Javascript", () => {
  test("Array.prototype.toString() should return a comma separated list of the elements, with spaces after each comma", () => {
    expect([1, 2, 3].toString()).toBe("1, 2, 3");
    expect([1].toString()).toBe("1");
    expect([].toString()).toBe("");
  });

  test("String.prototype.reverse", () => {
    expect("Hello".reverse).toBeDefined();
    expect("Hello".reverse()).toBe("olleH");
    expect("".reverse()).toBe("");
  });

  test("Array.prototype.last", () => {
    expect([1, 2, 3, 4].last).toBeDefined();
    expect([1, 2, 3, 4].last()).toBe(4);
    expect([1].last()).toBe(1);
    expect([].last()).toBeUndefined();
  });

  test("Array.range", () => {
    expect(Array.range).toBeDefined();
    expect(Array.range(1, 4)).toEqual([1, 2, 3, 4]);
    expect(Array.range(5, 7)).toEqual([5, 6, 7]);
    expect(Array.range(2, 2)).toEqual([2]);
  });

  test("String.prototype.map", () => {
    expect("Hello".map).toBeDefined();
    expect("Hello".map(() => "X")).toBe("XXXXX");
    expect("Hello".map(c => (c == "l" ? "X" : c))).toBe("HeXXo");
    expect("Hello".map(c => c + c)).toBe("HHeelllloo");
    expect("Hello".map(c => `${c}!`)).toBe("H!e!l!l!o!");
  });
});
