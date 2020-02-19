// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

function objKey(obj) {
  return Object.keys(obj);
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

function objLength(obj) {
  return Object.keys(obj).length;
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

// function objSort(array) {
//   var arr = [];
//   for (var i = 0; i < array.length - 1; i++) {
//     if (Object.values(array[i])[0] <= Object.values(array[i + 1])[0]) {
//       arr[i] = array[i];
//     }
//     else {
//       arr[i] = array[i];
//     }
//   }
//   return arr;
// }
