// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here


function comb(firtName, lastName){
	return firtName + " " + lastName;
}

function divByThree(){
	var a = 13, b = 3;
	if(a%b === 0) return true
	else return false;
}

function averageAge(){
	var arr = [13,14,13,15,16,17,19,13,16,15];
	var sum = 0;
	for(var i=0; i<arr.length; ++i) 
		sum += arr[i];
	return sum/arr.length;

}

function ageInSec(age){
	var today = 58786560000;
	var dateOfBirth = 57886617600 + 2419200;
	return today - dateOfBirth;
}