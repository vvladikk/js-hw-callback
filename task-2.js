function sumNumbersGreaterThanFive(arr, callback) {
  const filteredArr = arr.filter((num) => num > 5);
  const sum = filteredArr.reduce((acc, num) => acc + num, 0);
  callback(sum);
}

const arr = [23, 3, 12, 4, 1];

sumNumbersGreaterThanFive(arr, (sum) => {
  console.log(sum); 
});
