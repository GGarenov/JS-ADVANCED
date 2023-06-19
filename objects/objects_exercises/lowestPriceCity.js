function lowestPriceCity(input) {
  // uslovie - podrejdame gi vuv format town - product - price sortirani po nai-niska cena na produkta
  const result = {}; // pravim si prazen array za noviq rezultat

  // obhojdame elementite v inputa i gi razdelqme po town, product i price
  for (const elements of input) {
    const [town, productName, price] = elements.split(" | ");

    // proverqvame dali  rezultata ima product name, ako nqma go pravim v obekt
    if (!result[productName]) {
      result[productName] = {};
    }
    // ako go ima da suzdade town i number
    result[productName][town] = Number(price);
  }
  // pravim object entries i gi sortirame po price
  for (const [productName, towns] of Object.entries(result)) {
    const sorted = Object.entries(towns).sort((a, b) => a[1] - b[1]);
    const [town, price] = sorted[0];
    console.log(`${productName} -> ${price} (${town})`);
  }
}
lowestPriceCity([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
