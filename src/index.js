// *Variables*
// var => function
// let => block
// let => block

function sayHello(){
	for (let i=0; i<5; i++){
		console.log(i)
	} 
}
sayHello();

// *Objects*
const object = {
	name: 'Abdillah',
	walkFunction: function(){},			//adding a function(method) in object before ES6
	talkFunction(){
		console.log(this)
	},															//adding a method in object after ES6 - no need of function keyword and colon
	eatFunction(){
		console.log(this)
	}
}

// accessing data in Object
object.walkFunction()							//using the dot-notation
object['name']  = 'Ansari'				//using the bracket notation
/*we use bracket notation when we don't know what property or method we are going to acess*/


/*this keyword*/
object.talkFunction();						//caling a function that consoles this

const talk = object.talkFunction;
console.log(talk);
talk();


/*Binding this keyword*/
const eat = object.eatFunction.bind(object);
eat();


/*Arrow function*/
// old JavaScript function
const square1 = function(number){
	return number * number
}

console.log(square1(5));

// ES6 arrow function
const square2 = number => number * number;

console.log(square2(6));


// using arrow function example

const jobs = [
	{id: 1, isActive: true},
	{id: 2, isActive: true},
	{id: 3, isActive: false}
];

// const activeJobs = jobs.filter(function(key) {return jobs.isActive})								-old JavaScript function;

const activeJobs = jobs.filter(key => jobs.isActive);
console.log(activeJobs);


/*Arrow function & this keyword*/

const arrowFunctionBinding ={
	bindingFunction(){
		setTimeout(() => {
			console.log('this arrow function binding', this);
		}, 1000)
	}
}

arrowFunctionBinding.bindingFunction();


/*Mapping through array*/

const colors = ['red', 'blue', 'green'];
const items = colors.map(key => `<li>${colors}</li>`);
console.log(items);


/*Object Destucturing*/
const address = {
	street: 'Hakuna',
	city: 'Matata',
	country: 'Timon and Pumba'
}

// old way of extracting steert property from address object and storing it in const
/*const street = address.street;
const city = address.city;
const country = address.country;*/

//extracting steert property from address object and storing it in const using object destructuring
const {city, country} = address;

// using alais instead of 'street'
const {street: st} = address;

console.log(st, city, country);

/*Spread Operator*/

//ARRAY
//old way of concatinating array
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combineArray = firstArray.concat(secondArray);
console.log(combineArray);

const combineWithSpread = [...firstArray, ...secondArray];
console.log(combineWithSpread);

const combineWithSpreadAndAddElement = [...firstArray, 'a', ...secondArray, 'b'];
console.log(combineWithSpreadAndAddElement);


//cloning arrays using spread operator
const cloneArray = [...firstArray];
console.log(firstArray);
console.log(cloneArray);



//OBJECTS

const firstObject = {name: 'Anthony'};
const secondObject = {job: 'Performer'};

const combineObjects = {...firstObject,location: 'Mumbai', ...secondObject};
console.log(combineObjects);

const cloneObject = {...firstObject};
console.log(cloneObject);