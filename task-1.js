function increaseArrayByOne(arr, callback) {
  const newArr = arr.map(num => num + 1);
  callback(newArr);
}

const arr = [23, 33, 12, 45, 1];
increaseArrayByOne(arr, console.log); 
