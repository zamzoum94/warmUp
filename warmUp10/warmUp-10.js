// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

<<<<<<< HEAD
function reverseStr(str){
	var resp = '', i = str.length;
	while(i--){
		var temp = (str.length - i - 1) + str[i];
		resp = resp + temp;
	}
	return resp.slice(1);
}

=======
function reverseStr(string) {
    var str = "";
    var i = 1;

    while (i <= string.length + 1) {
        str = str + string.slice(string.length - 1) + i;
        string = string.slice(0, string.length - 1);
        i++;
    }
    return str;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

<<<<<<< HEAD
// make arrayOfObject: contain, length as key with with value ids of array stored in an array
// or sort array with with depends of the length, fix lenght and make condition, with find > 1 equal string length we add it to array
// I guess 2nd way less code

function sameLength(arr){
	arr.sort(function(x, y){
		return x.length - y.length;
	});
	var temp = 0, value = '';
	var resp = [];
	var added = false;
	for(var i = 0; i < arr.length; i++){
		if(arr[i].length !== value.length){
			if(added){
				resp.push(value);
				added = false;
			}
			value = arr[i];
			temp = value.length
		} else{
			resp.push(arr[i]);
			added = true;
		}
	}
	return resp;
=======
function sameLength(arrayOfStrings) {
    var arraySameLength = [];

    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length === arrayOfStrings[i + 1].length) {
            arraySameLength.push(arrayOfStrings[i], arrayOfStrings[i + 1]);
        }
    }
    return arraySameLength;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}