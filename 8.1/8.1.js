(function () {
  "use strict";

  const myBook = {
    name: "Living In Kfar saba",
    author: "Yarden Tamir",
    publish: "2021",
    prop4: "prop4",
  };

  const bookFunc = (book) => {
    return `The book ${book.name} was written by ${book.author} in the year ${book.publish} another prop ${book.prop4}`;
  };

  console.log(bookFunc(myBook));
})();
