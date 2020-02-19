// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
<<<<<<< HEAD
function GCD(a, b){
	if(a === b){
		return a;
	}
	if(a>b) {
		return GCD(a-b, b);
	} else{
		return GCD(a, b-a);
	}
}

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(a, b){
	if(a === 0 && b === 0){
		return 0;
	}
	if(a > 0){
		return 1 + sum(a-1, b);
	} else{
		return 1 + sum(a, b-1);
	}
=======

function gcd(number1, number2) {
    if ((typeof number1 !== 'number') || (typeof number1 !== 'number') || (number1 < 0) || (number2 < 0)) {
        return "Please enter two positive numbers.";
    }
    else {
        if (number2 === 0) {
            return number1;
        }
        else {
            return gcd(number2, number1 % number2);
        }
    }
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without
// suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(number1, number2) {
    if (number2 !== 0) {
        return sum(number1 + 1, number2 - 1);
    }
    return number1;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}