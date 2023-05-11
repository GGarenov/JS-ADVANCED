function squareOfStars(size = 5) {
    
  let stars = "* ".repeat(size).trim();
  for (let i = 0; i < size; i++) {
    console.log(stars);
  }
}
squareOfStars(10)