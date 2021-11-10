(function () {
  "use strict";

  const removeDuplicates = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length - 1; j++) {
        if (arr[i] !== arr[j]) {
          newArr[i] = arr[j];
        }
      }
    }
    return newArr;
  };

  console.log(removeDuplicates(["A", "B", "A", "C", "B"]));
})();
