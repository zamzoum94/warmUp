// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
<<<<<<< HEAD
"<" ; "<="
=======
// The correct comparison operator to display "true", when: 5 is less than 7 is: <:
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6

//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
<<<<<<< HEAD
//    helloWorld('') ==> 'Hello, World'   

function helloWorld(lng){
	if(lng === "fr"){
		return 'Bonjour tout le monde';
	} else if(lng === "es"){
		return 'Hola, Mundo';
	} else{
		return "Hello, Wolrd";
	}
}     
//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]

function reverse(arr){
	var ans = [];
	for(var i = 0; i < arr.length; i++){
		ans[arr.length - i - 1] = arr[i];
	}
	return ans;
}

// hi
=======
//    helloWorld('') ==> 'Hello, World'

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
