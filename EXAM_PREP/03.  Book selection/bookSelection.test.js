const expect = require('chai').expect;
const bookSelection = require('./bookSelection');

describe('isItAffordable', function () {
    
    it('with non-number price and budget, should throw correct Error', function () {
        let price = '20';
        let budget = '30';
        

        //Act

        let result1Func = () => bookSelection.isItAffordable(price, 30);
        let result2Func = () => bookSelection.isItAffordable(20, budget);

        expect(result1Func).to.throw(Error, 'Invalid input');
        expect(result2Func).to.throw(Error, 'Invalid input');
    })

    it('with budget than price, should return correct result', function () {
        let price = 20;
        let budget = 30;
        let price2 = 22.3;
        let budget2 = 33.3;
        

        //Act

        let result1 = bookSelection.isItAffordable(price, budget);
        let result2 = bookSelection.isItAffordable(price2, budget2);

        expect(result1).to.equal(`Book bought. You have ${budget - price}$ left`);
        expect(result2).to.equal(`Book bought. You have ${budget2 - price2}$ left`);
    })



})
