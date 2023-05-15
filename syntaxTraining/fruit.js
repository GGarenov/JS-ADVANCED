function fruit(fruit, grams, price) {
    
    const kg = grams / 1000;
    const result = price * kg;
    console.log (`I need $${result.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
    
}
fruit('orange', 2500, 1.80)
