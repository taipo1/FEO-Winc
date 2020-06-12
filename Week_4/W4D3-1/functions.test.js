//Bestand functions.test.js:
const functions = require("./functions.js");

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("checkValue Should be falsy when argument is undefined", () => {
  expect(functions.checkValue()).toBeFalsy();
});

test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toMatchObject({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

// Tests zijn eigenlijk gewoon functies. Om dat te laten zien laten we je
// nu tests maken die werken zonder input van buitenaf:

// Less than or greater than
test("Should be under or equal to 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBe(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toContain("i");
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("john");
});
// addOne
test("Add 1 to each item in myArray", function () {
  const myArray = [31, 57, 12, 5];

  const unchanged = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];
  const output = functions.addOne(myArray);

  expect(output).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});

test("Get word lengths", function () {
  const words = ["sun", "potato", "roundabout", "pizza"];
  const expected = [3, 6, 10, 5];

  const output = functions.getWordLengths(words);
  expect(output).toEqual(expected);
});

test("Find the needle", function () {
  const words = ["house", "train", "slide", "needle", "book"];
  const expected = 3;

  const output = functions.findNeedle(words, "needle");
  expect(output).toEqual(expected);
});
