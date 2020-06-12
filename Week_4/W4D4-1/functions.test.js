//Bestand functions.test.js:
const functions = require("./functions.js");

// 1. password is korter dan 9 karakters
test("should be true", () => {
  expect(functions.checkLength("1234578")).toEqual(true);
});

test("should be false", () => {
  expect(functions.checkLength("123456789")).toEqual(false);
});
// 2. password is niet `null`
test("!= null", () => {
  expect(functions.checkNUll("testPassWord1")).toEqual(true);
});

test("=== null", () => {
  expect(functions.checkNUll("")).toBeNull();
});
// 3. password heeft 1 of meer uppercase karakters
test("has upper case", () => {
  expect(functions.hasUpperCase("TestPassWord1")).toBeTruthy();
});

test("has no uppercase", () => {
  expect(functions.hasUpperCase("testpassword1")).toBeFalsy();
});
// 4. password heeft 1 of meer lowercase karakters
test("has lower case", () => {
  expect(functions.hasLowerCase("lOwTDCajqWtr")).toBeTruthy();
});
test("has no lower case", () => {
  expect(functions.hasLowerCase("CAPITAL")).toBeFalsy();
});
// 5. password heeft 1 of meer cijfers
test("has number", () => {
  expect(functions.hasNumber("testPassWord1")).toBeTruthy();
});
test("has no number", () => {
  expect(functions.hasNumber("testPassWord")).toBeFalsy();
});
// Een wachtwoord wordt alléén goedgekeurd als:
test("password passes min", () => {
  expect(functions.passValidate("TestPassWord01")).toBeGreaterThanOrEqual(3);
});

test("passWord Fails", () => {
  expect(functions.passValidate("hoi1")).toBeLessThan(3);
});

//
// 1. tenminste 3 van de bovenstaande condities true zijn
// 2. conditie 4 true is (die moet dus **altijd** true zijn)
