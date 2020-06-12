const functions = {
  isNull: function () {
    return null;
  },
  checkValue: function (x) {
    return x;
  },
  createUser: function () {
    const user = {
      firstName: "Brad",
    };
    user["lastName"] = "Traversy";
    return user;
  },
  addOne: (Array) => {
    let newArray = [];
    Array.forEach((item) => {
      newArray.push(item + 1);
    });
    return newArray;
  },
  getWordLengths: (param1) => {
    newArray = [];
    param1.forEach((item) => {
      newArray.push(item.length);
    });
    return newArray;
  },
  findNeedle: (array, target) => {
    return array.indexOf(target);
  },
};

module.exports = functions;
