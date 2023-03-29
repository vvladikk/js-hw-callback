function filterUsersByAge(arr, callback) {
    const filteredArr = arr.filter((user) => user.age < 32);
    callback(filteredArr);
  }
  
  const obj = [
    { name: 'Nik', age: 23 },
    { name: 'Oleg', age: 35 },
    { name: 'Olga', age: 21 },
    { name: 'Roma', age: 48 },
    { name: 'Pasha😉', age: 30 },
  ];
  
  filterUsersByAge(obj, (filteredArr) => {
    console.log(filteredArr); 
  });
  