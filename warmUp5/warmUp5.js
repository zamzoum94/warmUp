// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
"<" ; "<="

//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
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