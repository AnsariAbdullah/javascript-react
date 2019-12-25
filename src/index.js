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