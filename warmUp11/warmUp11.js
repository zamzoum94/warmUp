/*
1. create a data model to represent your classmates
    • think of different attributes of your classmates? what do all of them have ?
    • create a factory function.
    • create an array to hold the classmates that you created and what you created to it .
    • write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
    • write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
    • calculate the number of male friends that your class have by writing a function called nbOfMale.
    • Write a function searchMates that, given a query and an array of Mates,
      searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
*/

function Classmates(name, age, sexe, status){
	return{
		name : name,
		age : age,
		sexe : sexe,
		status : status
	};
}

var mates = [];

function displayFriend(name){
	for(var i = 0; i < mates.length; i++){
		if(mates[i].name === name){
			var maleOrFemale = mates[i].sexe === "male" ? "he":"she";
			var str = mates[i].name + " is " + mates[i].age + " years old and " + maleOrFemale + " is " + mates[i].status;
			return str;
		}
	}
	return name + " not found";
}

function addFriend(name, age, sexe, status){
	var newMate = Classmates(name, age,sexe, status);
	mates.push(newMate);
}

function nbOfMale(){
	var maleCount = 0;
	for(var i = 0; i<mates.length; i++){
		var temp = mates[i];
		if(temp.sexe === "male"){
			maleCount++;
		}
	}
	return maleCount;
}

function searchMates(query){
	for(var i = 0; i < mates.length; i++){
		var tempObj = mates[i];
		for(var key in tempObj){
			if(tempObj[key] === query){
				return "found query at array of index " +i+ " with key " + key;  
			}
		}
	}
	return "query not found";
}


addFriend("Mia", 24, "female", "married")
addFriend("Alexis", 31, "female", "single")
addFriend("Johnny", 21, "male", "single")
addFriend("Matt", 42, "male", "single")
addFriend("Rad", 15, "male", "single")