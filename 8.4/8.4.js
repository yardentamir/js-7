(function () {
  "use strict";

  const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
  const myObj = {};
  const countLetters = (arr) => {
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
    const onlyObjValues = Object.values(myObj);
    const max = Math.max(...onlyObjValues);
    return max;
  };
  console.log(myObj);
})();
