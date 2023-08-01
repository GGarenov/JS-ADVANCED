const chai = require("chai");
const { expect, assert } = chai;

const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }

    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};

describe("Tests for carService", function() {
describe("isItExpensive", function() {
 it("test if the issue is Engine it should be expensive", function() {
   let issue = "Engine";

   //act
   let result = carService.isItExpensive(issue);
   //assert
   expect(result).to.equal('The issue with the car is more severe and it will cost more money');
   


 });
  it("test if the issue is Transmission it should be expensive", function() {
   let issue = "Transmission";
   //act
   let result = carService.isItExpensive(issue);
   //assert
   expect(result).to.equal('The issue with the car is more severe and it will cost more money');
   });
  it("test if the issue is other it should be cheap", function() {
   let issue = "Test";
   //act
   let result = carService.isItExpensive(issue);
   //assert
   expect(result).to.equal('The overall price will be a bit cheaper');
  });
   
 });
  describe("discount funcitonality", function () {
    it("test if the input is valid", function () {
      let numberOfParts = '20';
      let totalPrice = '30';

      let result1 = () => carService.discount(numberOfParts, 100);
      let result2 = () => carService.discount(5, totalPrice);

      expect(result1).to.throw(Error, "Invalid input");
      expect(result2).to.throw(Error, "Invalid input");
    });
    it("if you can apply discount", function () {
      let numberOfParts = 1;
      let numberOfParts2 = 2;

      let result1 = carService.discount(numberOfParts, 100);
      let result2 = carService.discount(numberOfParts2, 100);

      expect(result1).to.equal('You cannot apply a discount');

      expect(result2).to.equal('You cannot apply a discount');
    });
    it("test discount applied successfully", function () {
      let numberOfParts = 3;
      let numberOfParts2 = 8;
      let totalPrice = 100;

      let result1 = carService.discount(numberOfParts, totalPrice);
      let result2 = carService.discount(numberOfParts2, totalPrice);

      expect(result1).to.equal(`Discount applied! You saved ${totalPrice * 0.15}$`);

      expect(result2).to.equal(`Discount applied! You saved ${totalPrice * 0.30}$`);
    });   
  });
  describe("test partToBuy functionality", function () {
    it("test if the input is valid", function () {
      let partsCatalog = "string";
      let neededParts = 20;

      let result1Func = () => carService.partsToBuy(["part1", "part2"], neededParts);
      let result2Func = () => carService.partsToBuy(partsCatalog, ["part1", "part2"]);

      expect(result1Func).to.throw(Error, "Invalid input");
      expect(result2Func).to.throw(Error, "Invalid input");
    });
    it("test if the functionality depending on the partsCatalog list", function () {
      let partsCatalog = [
        { part: "x1", price: 105 },
        { part: "x2", price: 115 },
      ];

      let neededPartsList = ["x1", "x3"];

      
    })


  });
 // TODO: …
});