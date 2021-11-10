(function () {
  "use strict";

  const myCountry = {
    country: "Israel",
    capital: "Jerusalem",
    language: "Hebrew",
    population: 700,
    neighbors: ["Jordan", "Egypt", "Syria", "Lebanon"],
    describe() {
      console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they
      have ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`);
    },
    checkIsland() {
      return this.neighbors.length <= 0
        ? (this.isIsland = true)
        : (this.isIsland = false);
    },
  };

  myCountry.describe();
  console.log(myCountry.checkIsland());
})();
