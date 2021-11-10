(function () {
  "use strict";
  const myObj = {
    name: "BookName1",
    author: "Yarden Tamir",
    publish: "2021",
  };

  console.log(myObj);

  const swap = (myObj) => {
    const ret = {};
    for (let key in myObj) {
      ret[myObj[key]] = key;
    }
    return ret;
  };

  console.log(swap(myObj));
})();
