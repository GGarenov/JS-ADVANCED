const chai = require("chai");
const { expect, assert } = chai;

const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};

describe("bookSelection tests", function() {
 describe("isGenreSuitable", function() {
 it("with Thriller or Horror genre and under 12 should return correct value", function() {
 //Arrange
   let genre1 = 'Thriller';
   let genre2 = 'Horror';
   let age1 = 12;
   let age2 = 13;
  
   // ACT
   let result1 = bookSelection.isGenreSuitable(genre1, age1);
   let result2 = bookSelection.isGenreSuitable(genre2, age1);
   let result3 = bookSelection.isGenreSuitable(genre1, age2);
   let result4 = bookSelection.isGenreSuitable(genre2, age2);
   
   //Assert
   
   expect(result1).to.equal(`Books with ${genre1} genre are not suitable for kids at ${age1} age`);
   expect(result2).to.equal(`Books with ${genre2} genre are not suitable for kids at ${age1} age`);
   expect(result3).to.equal(`Those books are suitable`);
   expect(result4).to.equal(`Those books are suitable`);
 });
   
    it("with non-Thriller or Horror genre should return that the books are suitable", function() {
 //Arrange
   let genre1 = 'Something';
   let genre2 = 'Some genre';
   let age1 = 12;
   let age2 = 13;
  
   // ACT
   let result1 = bookSelection.isGenreSuitable(genre1, age1);
   let result2 = bookSelection.isGenreSuitable(genre2, age1);
   let result3 = bookSelection.isGenreSuitable(genre1, age2);
   let result4 = bookSelection.isGenreSuitable(genre2, age2);
   
   //Assert
   
   expect(result1).to.equal(`Those books are suitable`);
   expect(result2).to.equal(`Those books are suitable`);
   expect(result3).to.equal(`Those books are suitable`);
   expect(result4).to.equal(`Those books are suitable`);
    });
   
 });
  
 // TODO: …
  describe("isItAffordable", function () {
    it("test with non-number price and budget, should throw correct Error", function () {
      // arrange
      let price = '20';
      let budget = '30';
      //act
      let result1Func = () => bookSelection.isItAffordable(price, 30);
      let result2Func = () => bookSelection.isItAffordable(20, budget);
      //assert
      expect(result1Func).to.throw(Error, 'Invalid input');
      expect(result2Func).to.throw(Error, 'Invalid input');
    });
    it("more budget then price should return the correct result", function () {
      // arrange
      let price = 30;
      let budget = 30;
      let price2 = 22.3;
      let budget2 = 33.3;
      //act
      let result1 = bookSelection.isItAffordable(price, budget);
      let result2 = bookSelection.isItAffordable(price2, budget2);
      //assert
      expect(result1).to.equal(`Book bought. You have ${budget - price}$ left`);
      expect(result2).to.equal(`Book bought. You have ${budget2 - price2}$ left`);
    });
     it("less budget then price should return you don't have money message", function () {
      // arrange
      let price = 30;
      let budget = 20;
      let price2 = 22.3;
      let budget2 = 13.3;
      //act
      let result1 = bookSelection.isItAffordable(price, budget);
      let result2 = bookSelection.isItAffordable(price2, budget2);
      //assert
      expect(result1).to.equal("You don't have enough money");
      expect(result2).to.equal("You don't have enough money");
    });
  });
  describe("suitableTitles", function () {
    it("test if array is array and wantedGenre is string", function () {
      //arrange
      let array = "string";
      let wantedGenre = 20;
      //act
      let result1Func = () => bookSelection.suitableTitles(array, 'love book');
      let result2Func = () => bookSelection.suitableTitles(['horror', 3], wantedGenre);

      //assert
      expect(result1Func).to.throw(Error, 'Invalid input');
      expect(result2Func).to.throw(Error, 'Invalid input');


    });
  });
  
});