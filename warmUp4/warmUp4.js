// 1-Define a function called myTrueFun that returns true whenever its called.
function myTrueFun(){
	return true;
}
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

	function typeFunc(value){
		if(typeof value === "string") return true;
		return false;
	}
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
// the function true if the number is prime, false otherwise
function isPrime(n){
	if(n===1) return false;
	for(var i=2; i<n; i++){
		if(n%i === 0) return false;
	}
	return true;
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function equal(a, b){
	return a===b ? true:false;
}