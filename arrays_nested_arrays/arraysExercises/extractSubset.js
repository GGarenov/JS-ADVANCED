function extractSubset(arr) {
  let biggest = Number.MAX_SAFE_INTEGER;

  const output = arr.reduce((acc, curr) => {
    if (curr >= biggest) {
      biggest = curr;

      const tempArr = acc;
      tempArr.push(curr);
      return tempArr;
    }

    return acc;
  }, []);
  return output;
}
extractSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//[1, 3, 8, 10, 12, 24]
extractSubset([1, 2, 3, 4]);
//[1, 2, 3, 4]
extractSubset([20, 3, 2, 15, 6, 1]);
//[20]
