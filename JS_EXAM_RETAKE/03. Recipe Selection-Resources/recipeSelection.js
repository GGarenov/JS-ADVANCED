const chai = require("chai");
const { expect, assert } = chai;

const recipeSelection = {
  isTypeSuitable(type, dietaryRestriction) {
    if (typeof type !== "string" || typeof dietaryRestriction !== "string"){
      throw new Error("Invalid input");
    }
    if (dietaryRestriction === "Vegetarian" && type === "Meat") {
      return "This recipe is not suitable for vegetarians";
    } else if (dietaryRestriction === "Vegan" && (type === "Meat" || type === "Dairy")) {
      return "This recipe is not suitable for vegans";
    } else {
      return "This recipe is suitable for your dietary restriction";
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let remainingBudget = budget - price;

    if (remainingBudget < 0) {
      return "You don't have enough budget to afford this recipe";
    } else {
      return `Recipe ingredients bought. You have ${remainingBudget}$ left`;
    }
  },
  getRecipesByCategory(recipes, category) {
    if (!Array.isArray(recipes) || typeof category !== "string") {
      throw new Error("Invalid input");
    }

    const filteredRecipes = recipes.filter((recipe) => recipe.category === category);
    return filteredRecipes.map((recipe) => recipe.title);
  },
};


describe("Tests for receipeSelection", function() {
    describe("isTypeSuitable", function() {
      it("if the input is valid", function () {
        //arrange
        let type = 30;
        let dietaryRestriction = 50;
        //act
        let result1Func = () => recipeSelection.isTypeSuitable(type, 'meat');
        let result2Func = () => recipeSelection.isTypeSuitable('meat', dietaryRestriction);

        //assert
        expect(result1Func).to.throw(Error, 'Invalid input');
        expect(result2Func).to.throw(Error, 'Invalid input');
          
      });
      it('if the receipe is suitable for vegerarians', function () {
        //arrange
        let type = 'Meat';
        let dietary = 'Vegetarian';

        //act
        let result = recipeSelection.isTypeSuitable(type, dietary);

        //assert
        expect(result).to.equal('This recipe is not suitable for vegetarians')

      });
      it('if the receipse is suitable for vegas', function () {
        //arrange
        
        let type1 = 'Meat';
        let type2 = 'Dairy';

        //act
        let result1 = recipeSelection.isTypeSuitable(type1, 'Vegan');
        let result2 = recipeSelection.isTypeSuitable(type2, 'Vegan');

        //assert
        expect(result1).to.equal('This recipe is not suitable for vegans');
        expect(result2).to.equal('This recipe is not suitable for vegans');
      });

    });
  describe('Test for isItAffordable functionality', function () {
    it('test with non-number price and budget', function () {
        
      let price = '20';
      let budget = '30';
      //act
      let result1Func = () => recipeSelection.isItAffordable(price, 30);
      
      let result2Func = () => recipeSelection.isItAffordable(50, budget);

      //assert
      expect(result1Func).to.throw(Error, 'Invalid input');
      expect(result2Func).to.throw(Error, 'Invalid input');
    });

    it('test more budget than price should return the correct result', function () {
      //arrange
      let price = 30;
      let budget = 30;
      let price2 = 22.3;
      let budget2 = 33.3;
      //act
      let result1 = recipeSelection.isItAffordable(price, budget);
      let result2 = recipeSelection.isItAffordable(price2, budget2);
      //assert
      expect(result1).to.equal(`Recipe ingredients bought. You have ${budget - price}$ left`);
      expect(result2).to.equal(`Recipe ingredients bought. You have ${budget2 - price2}$ left`);

    });

    it('test if you dont have enough money', function () {
      let price = 30;
      let budget = 20;
      let price2 = 22.3;
      let budget2 = 13.3;
      //act
      let result1 = recipeSelection.isItAffordable(price, budget);
      let result2 = recipeSelection.isItAffordable(price2, budget2);
      //assert
      expect(result1).to.equal("You don't have enough budget to afford this recipe");
      expect(result2).to.equal("You don't have enough budget to afford this recipe");
    });
  });
  describe('Test for getRecipesByCategory', function () {
    it('test if the array is string', function () {
      //arrange
      let array = 'string';
      let category = 20;

      //act
      let result1Func = () => recipeSelection.getRecipesByCategory(array, 'vegan');
      let result2Func = () => recipeSelection.getRecipesByCategory(['meat', 3], category);

      //assert
      expect(result1Func).to.throw(Error, 'Invalid input');
      expect(result2Func).to.throw(Error, 'Invalid input');
    });

    it('should return an array of recipe titles for the given category', function () {
      // Arrange
      let recipes = [
        { title: 'Spicy Tofu Stir-Fry', category: 'Asian' },
        { title: 'Vegan Pasta', category: 'Italian' },
        { title: 'Grilled Vegetables', category: 'Mediterranean' },
        { title: 'Tomato Soup', category: 'Italian' },
      ];

      // Act
      let result1 = recipeSelection.getRecipesByCategory(recipes, 'Italian');
      let result2 = recipeSelection.getRecipesByCategory(recipes, 'Asian');
      let result3 = recipeSelection.getRecipesByCategory(recipes, 'Dessert');

      // Assert
      expect(result1).to.deep.equal(['Vegan Pasta', 'Tomato Soup']);
      expect(result2).to.deep.equal(['Spicy Tofu Stir-Fry']);
      expect(result3).to.deep.equal([]);
    });
  });

});

