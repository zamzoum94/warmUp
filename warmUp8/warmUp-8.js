// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
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
}