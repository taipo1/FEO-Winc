const functions = {
  checkLength: (password) => password.length < 9,
  checkNUll: (password) => {
    if (password === "") {
      return null;
    } else {
      return true;
    }
  },
  hasUpperCase: (password) => [...password].find((c) => c != c.toLowerCase()),
  hasLowerCase: (password) => [...password].find((c) => c != c.toUpperCase()),
  hasNumber: (password) => [...password].find((c) => !isNaN(parseInt(c))),

  passValidate: (password) => {
    let valCount = 0;
    if (functions.checkNUll(password)) {
      console.log("checkNull passed");
      if (functions.checkLength(password)) {
        valCount++;
      }
      if (functions.hasUpperCase(password)) {
        valCount++;
      }
      if (functions.hasLowerCase(password)) {
        valCount++;
      }
      if (functions.hasNumber(password)) {
        valCount++;
      }
      return valCount;
    }
  },
};

console.log(functions.passValidate("NewPassWord01"));

module.exports = functions;
