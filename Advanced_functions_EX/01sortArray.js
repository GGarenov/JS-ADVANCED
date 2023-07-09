function solve(arrOfNums, type) {
    
    const dict = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    };

    const result = arrOfNums.sort(dict[type]);
   
    return result;
    
}



solve([14, 7, 17, 6, 8], "asc");
solve([14, 7, 17, 6,8], "desc")
