const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error("errore in string length");
  }
  return string.length;
};
const reverseString = (string) => {
  string = [...string].reverse().join("");
  return string;
};

class calculator {
  add(x, y) {
    return x + y;
  }
  sub(x, y) {
    return x - y;
  }
  div(x, y) {
    return x / y;
  }
  muly(x, y) {
    return x * y;
  }
}

const capitalize = (string) => {
  if (typeof string !== "string") {
    throw new Error("Input a string, i.e word");
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};
module.exports = {
  stringLength,
  reverseString,
  capitalize,
  NumCalculator: calculator,
};
