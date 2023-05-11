function stringLength(str1, str2, str3) {
    let sumLength = str1.length + str2.length + str3.length
    console.log(sumLength)
    let averageLength = Math.floor(sumLength / 3)
    console.log(averageLength)
}
stringLength('chocolate', 'ice cream', 'cake')