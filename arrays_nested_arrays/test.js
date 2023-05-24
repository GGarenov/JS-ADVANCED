let arr = [1, 2, 3, 4]
let sum = arr.reduce((a, c) => {
    a += c;
    return a;
})
console.log(sum)