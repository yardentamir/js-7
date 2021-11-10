(function () {
  "use strict";

  const myBook1 = {
    name: "BookName1",
    author: "Yarden Tamir",
    publish: "2021",
  };

  const myBook2 = {
    name: "BookName2",
    author: "Adi Tamir",
    publish: "2020",
    publisher: { name: "Christina", location: "Spain" },
  };

  const bookUtils = {};

  bookUtils.getFirstPublished = (myBook1, myBook2) => {
    return myBook1.publish > myBook2.publish ? myBook2 : myBook1;
  };

  bookUtils.getFirstPublished(myBook1, myBook2);

  bookUtils.setNewEdition = (myBook1, editionYear) => {
    myBook1.latestEdition = editionYear;
  };

  bookUtils.setNewEdition(myBook1, "1994");

  bookUtils.setLanguage = (myBook1, lang) => {
    myBook1.language = lang;
  };

  bookUtils.setLanguage(myBook1, "Hebrew");

  bookUtils.setTranslation = (myBook1, lang, trans) => {
    myBook1.translation = { trans, lang };
  };

  bookUtils.setTranslation(myBook1, "Spanish", "TransName");

  bookUtils.setPublisher = (myBook1, name, location) => {
    myBook1.publisher = { name, location };
  };

  bookUtils.setPublisher(myBook1, "Christina", "Spain");

  bookUtils.isSamePublisher = (myBook1, myBook2) => {
    return (
      myBook1.publisher.location === myBook2.publisher.location &&
      myBook1.publisher.name === myBook2.publisher.name
    );
  };

  console.log(myBook1);
  console.log(myBook2);
  console.log(bookUtils.isSamePublisher(myBook1, myBook2));
})();
