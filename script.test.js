const script = require("./script");
const stringLength = script.stringLength;
const reversString = script.reverseString;
const calculator = script.NumCalculator;
const capitalizeFristchar = script.capitalize;

// stringLength
test("get string length", () => {
  expect(stringLength("abcdef")).toBe(6);
  expect(() => stringLength("")).toThrow();
  expect(() => stringLength("jkjljljhkbj")).toThrow();
});
// reversString
test("Revers string", () => {
  expect(reversString("yemil")).toBe("limey");
});

// calculator
describe("calculator number", () => {
  const NumCalculator = new calculator();
  test("addition", () => {
    expect(NumCalculator.add(4, 5)).toBe(9);
    expect(NumCalculator.add(3, 3)).toBe(6);
    expect(NumCalculator.add(99, 1)).toBe(100);
  });
  test("subtraction", () => {
    expect(NumCalculator.sub(4, 5)).toBe(-1);
    expect(NumCalculator.sub(3, 3)).toBe(0);
    expect(NumCalculator.sub(99, 1)).toBe(98);
  });

  test("division", () => {
    expect(NumCalculator.div(4, 5)).toBe(0.8);
    expect(NumCalculator.div(3, 3)).toBe(1);
    expect(NumCalculator.div(99, 1)).toBe(99);
  });
  test("multiplication", () => {
    expect(NumCalculator.muly(4, 5)).toBe(20);
    expect(NumCalculator.muly(3, 3)).toBe(9);
    expect(NumCalculator.muly(99, 1)).toBe(99);
  });
});
// capitalizeFristchar
test("First character capitalized", () => {
  expect(capitalizeFristchar("microverse")).toBe("Microverse");
});
test("String should be a word", () => {
  expect(() => {
    capitalizeFristchar(3);
  }).toThrow("Input a string, i.e word");
});
