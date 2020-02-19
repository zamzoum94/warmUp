// 1) Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."
<<<<<<< HEAD

function greaterNum(a, b){
	return a>b ? a:b;
}

=======
function greaterNum(num1, num2) {
    if (num1 >= num2) {
        return "The greater number of " + num1 + " and " + num2 + " is " + num1 + ".";
    }
    return "The greater number of " + num1 + " and " + num2 + " is " + num2 + ".";;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d


// 2) Write a function named isEven using  for loop that 
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]
function isEven(a, b){
	var arr = [];
	for(var i=a; i<=b; i++){
		if(i%2 === 0){
			arr.push(i);
		}
	}
	return arr;
}

// function isEven(x, y) {
//     var arr = [];
//     for (var i = 0; i < arr.length; i++) {
//         while (x <= y) {
//             if (x % 2 === 0) {
//                 arr[i] = arr.push(x)
//             }
//             x++
//         }
//     }
//     return arr;
// }
//3) write a function named sum that
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15
<<<<<<< HEAD
function sum(a, b){
	var ans = 0;
	while(a<=b){
		ans += a;
		a++;
	}
	return ans;
}

=======
function sum(x, y) {
    var sum = 0;
    while (x <= y) {
        sum = sum + x;
        x++;
    }
    return sum;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d

//4) Write a function named factorial that 
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
// - 5! = 5*4*3*2*1 = 120
// ex : factorial(5) => 120 
<<<<<<< HEAD
function factorial(n){
	if(n<0) n=n*(-1);
	if(n===1) return 1;
	return n* factorial(n-1);
}
=======
function factorial(n) {
    var fact = 1;
    if (n === 0) {
        return 1
    }
    fact = fact * n;
    return fact * factorial(n - 1)
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d

}

//5) write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string 
//- if the parameters not a number return false 
// ex :
//      decimals(2100, 'a') ==> false 
//      decimals('a', 5) ==> false 
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
//      
<<<<<<< HEAD
function decimals(a, b){
	if(typeof a != "number" || typeof b !="number") return false;
	a = a + "";
	var index = a.indexOf('.');
	if(index === -1){
		var str = a +'.';
		for(var i=0; i<b; i++){
			str = str + '0';
		}
		return str;
	}
	var str = a.substr(0, index+1);
	var i = 1;
	var exist = false;
	
	while(i<=b){
		str = str + a[index+i];
		console.log(str);
		i++;
	}
	return str;
}

// o
=======
function decimals(num1, num2) {
    var ind = 0
    var decim = ''
    var str = ''
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
        return false;
    }
    else {
        ind = (num1 + '').indexOf('.');
        decim = (num1 + '').slice(ind + 1)
        str = (num1 + '').slice(0, ind + 1 + num2)
        return str;

    }
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
