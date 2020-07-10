// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomato", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    const isEveryString = array.every((element) => {
      return typeof element === "string";
    });
    // console.log(isEveryString);
    if (isEveryString) {
      const capsArray = array.map((element) => {
        return element.toUpperCase();
      });
      resolve(capsArray);
    } else {
      reject("this array contains non-string elements");
    }
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    const isEveryString = array.every((element) => {
      return typeof element === "string";
    });
    if (isEveryString) {
      resolve(array.sort());
    } else {
      reject("error");
    }
  });
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log("is this the end?");
