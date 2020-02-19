//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function subSet(arr, arr2){
	var exist = true;
	for(var i = 0; i < arr2.length; i++){
		if(arr.indexOf(arr2[i]) !== -1){
			var index = arr.indexOf(arr2[i]);
			arr[index] = undefined;
		} else{
			exist = false;
			break;
		}
	}
	if(exist){
		return true;
	} else {
		return false;
	}
}