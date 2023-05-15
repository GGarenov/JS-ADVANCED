function sameNum(num) {
    
    let arr = num.toString().split("");
    let sum = 0;
    let isSame = true;
    for (let i = 0; i < arr.length; i++){
        const currentNum = arr[i];
        sum += Number(currentNum)
        if (arr[0] !==currentNum) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum)
}
sameNum(2222222);
sameNum(1234)