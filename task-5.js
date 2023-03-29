function transformObject(obj, callback) {
    const transformedObj = {
      name: obj.name.toUpperCase(),
      age: obj.age + 5,
    };
    callback(transformedObj);
  }
  
  const inputObj = { name: 'Nik', age: 23 };
  
  transformObject(inputObj, (transformedObj) => {
    console.log(transformedObj);
  });
  