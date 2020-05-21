// Improve some javascript methods

// The array toString method, prints out a comma separated list of the elements of the array. However without any space after the comma.

Array.prototype.toString = function() {
  return this.join(", ");
};

// Add a .reverse() method for strings

String.prototype.reverse = function() {
  return this.split("")
    .reverse()
    .join("");
};

// Add a new array method .last() that returns the last element of the array

Array.prototype.last = function() {
  return this[this.length - 1];
};

// Advanced: add a static array function .range(start, finish) that returns an array of integers, starting at start and ending at finish. See the tests for a better description

Array.range = function(start, finish) {
  const result = [];
  for (let i = start; i <= finish; ++i) {
    result.push(i);
  }
  return result;
};

// Advanced: add a map method for strings, that takes a mapping function as an argument and transforms each character in the string, by passing it to that function

String.prototype.map = function(cb) {
  return this.split("")
    .map(cb)
    .join("");
};
