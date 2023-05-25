function cityRecord(name, population, treasury) {
  let obj = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      this.population += Math.floor((this.population * percentage) / 100);
    },
    applyRecession(percentage) {
      this.treasury -= Math.floor(this.treasury - percentage / 100);
    },
  };
  return obj;
}
console.log(createRecord("Tortuga", 7000, 15000));
