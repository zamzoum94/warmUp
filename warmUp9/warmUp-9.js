// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var females = [];
var males = [];
var instructors = [];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function returnMiddle(array){
	var mid = Math.floor(array.length/2);
	return array[mid];
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function mult(array){
	for(var i = 0; i < array.length; i++){
		if(typeof array[i] === "number"){
			if(i%2 === 0) array[i] *= 2;
		}
	}
	return array;
}