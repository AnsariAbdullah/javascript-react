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
		
	}																//adding a method in object after ES6 - no need of function keyword and colon
}

// accessing data in Object
object.talkFunction()							//using the dot-notation
object['name']  = 'Ansari'				//using the bracket notation
/*we use bracket notation when we don't know what property or method we are going to acess*/