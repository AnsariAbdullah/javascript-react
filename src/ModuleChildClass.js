import ModuleParentClass, {justAnotherFunction} from './ModuleParentClass'							//default import and named import

export function DoSomething(){}					//named export

export class ModuleChildClass extends ModuleParentClass{
	constructor(fame, shame){
		super(fame);
		this.shame = shame;
	}
	moduleChildFunction(){
		console.log('I am module child class')
	}
}