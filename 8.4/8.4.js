(function () {
  "use strict";

  const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
  const countLetters = (arr) => {
    const myObj = {};
    const connectedWords = arr.join("").replace(/\s/g, "").toLowerCase();
    for (let i = 0; i < connectedWords.length; i++) {
      let counter = 1;

      for (let j = i + 1; j < connectedWords.length - 1; j++) {
        if (connectedWords[i] === connectedWords[j]) counter++;
      }

      if (!myObj.hasOwnProperty(connectedWords[i])) {
        myObj[connectedWords[i]] = counter;
      }
    }
    return myObj;
  };

  console.log(countLetters(array));
})();
