export function justAnotherFunction(){}

export default class ModuleParentClass{						//default export
	constructor(fame){
		this.fame = fame;
	}
	moduleClassFunction(){
		console.log('I am parent module class')
	}
}

// const moduleparentclass = new ModuleParentClass('Jaggu Dada');