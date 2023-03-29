function mergeAndSortArrays(arr1, arr2, callback) {
    const mergedArr = [...arr1, ...arr2];
    const sortedArr = mergedArr.sort((a, b) => a - b);
    callback(sortedArr);
  }
  
  const arr1 = [23, 3, 12, 4, 1];
  const arr2 = [26, 17, 10, 9, 19];
  
  mergeAndSortArrays(arr1, arr2, (sortedArr) => {
    console.log(sortedArr); 
  });
  