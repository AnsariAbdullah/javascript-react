import {ModuleParentClass} from './ModuleParentClass'

export class ModuleChildClass extends ModuleParentClass{
	constructor(fame, shame){
		super(fame);
		this.shame = shame;
	}
	moduleChildFunction(){
		console.log('I am module child class')
	}
}