class PersonClasss {
	constructor(name){
		this.name = name;
	}
	classFunction(){
		console.log('I am a class');
	}
}


const personClass = new PersonClasss('Timon');


/*Inheritance*/

class TeacherClass extends PersonClasss{
	teach() {
		console.log('teach');
	}
}

const teacherClass = new TeacherClass('Kratos');
teacherClass.