//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
function isArray(input) {
    if (Array.isArray(input)) {
        return true;
    }
    else {
        return false;
    }
}
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]
function first(array, n) {
    var arr = [];
    if (n >= array.length) {
        arr = array;
    }
    else if (n < 0) {
        return "Please enter a positif number"
    }
    else {
        for (var i = 0; i < n; i++) {
            arr.push(array[i]);
        }
    }
    return arr;
}
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
