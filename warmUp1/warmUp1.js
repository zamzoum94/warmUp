// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

<<<<<<< HEAD
//1
function name(firstName, lastName) {
	return firstName + ' ' + lastName;
}
//'Siwar'+' Hkimi';

<<<<<<< HEAD
<<<<<<< HEAD
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
	// I was born in 11/02/1994
	var today = (60*60*24*7*4 + 60*60*24*2) * 2020 - (2020/4)*(60*60*24);
	var dateOfBirth = (60*30*24*7*4 + 60*60*24*2) * 1994 - (1994/4)*(60*60*24);
	return today - dateOfBirth;
}
=======
=======
//2
function multipleOrNot(x, y) {
	if (x % y === 0) {
		return x + " is a multiple of " + y + ".";
	}
	else {
		return x + " is not a multiple of " + y + ".";
	}
}
//13%3===1 different from 0 so 13 isn't a multiple of 3

//3
function average(arr) {
	var i = 0;
	var average = 0;
	while (i < arr.length) {
		average = average + arr[i]
		i++
	}
	return average / arr.length
}

//average=(13+14+13+15+16+17+19+13+16+15)/10;

//4
// function ageInSeconds(day,month,year){
// var ageYear=0;
// var ageMonth=0;
// var ageDay=0;
// ageYear=(2020-year)*365*24*60;
// var array=['January','February','March','April','May','June','July','August','Septembre','October','November','December']
// if(month==='January'||month==='March'||month==='May'||month==='July'||month==='Septembre'||month==='Novembre'){
// 	ageMonth=31*24*60;
// }	
// else if(month==='April'||month==='June'||month==='August'||month==='October'||month==='December'){
// 	ageMonth=30*24*60;
// }
// else {
// 	ageMonth=28*24*60;
// }
// 
// }
//age=26*365*24*60
=======

>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
>>>>>>> c07720253c870302a2825e47eeb180a082689769
