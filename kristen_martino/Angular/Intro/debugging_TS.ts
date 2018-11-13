// 1. Setting Types
let myString: string;
myString = "Bee stinger";
let myNumber: number;
myNumber = 9;
// because myString is type 'string'. Create a new variable with type 'number' to assign a number to it.


// 2. Setting the types for function parameters
function sayHello(name) {
	return `Hello, ${name}!`;
}

console.log(sayHello("Kermit"));
console.log(sayHello(9));
// because name is type 'string'. Remove type declaration.


// 3. Optional parameters
function fullName(firstName: string, lastName: string, middleName: string = "") {
	let fullName = `${firstName} ${middleName} ${lastName}`;
	return fullName;
}

console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Jones"));
// include default value of "" for middleName


// 4. Interfaces and function parameters
interface Student {
	firstName: string;
	lastName: string;
	belts: number;
}

function graduate(ninja: Student) {
	return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}

const christine = {
	firstName: "Christine",
	lastName: "Yang",
	belts: 2
};
const jay = {
	firstName: "Jay",
	lastName: "Patel",
	belts: 4 // fix spelling from "belt" to "belts"
};
console.log(graduate(christine));
console.log(graduate(jay));


// 5. Classes and function parameters
class Ninja {
	fullName: string;

	constructor(
			public firstName: string,
			public lastName: string) {
		this.fullName = `${firstName} ${lastName}`;
	}

	debug() {
		console.log("Console.log() is my friend.")

	}
}

const shane = new Ninja("Shane", "Smith"); // need to add "new" and pass first and last name

const turing = {
	fullName: "Alan Turing",
	firstName: "Alan",
	lastName: "Turing",

	debug() {
		console.log("Console.log() is my friend.")
	}
}

function study(programmer: Ninja) {
	return `Ready to whiteboard an algorithm, ${programmer.fullName}?`;
}

console.log(study(shane));
console.log(study(turing));


// 6. Arrow functions
const increment = x => x + 1;
console.log(increment(3));
const square = x => x * x; // remove curly brackets
console.log(square(4));
const multiply = (x, y) => (x * y); // add parentheses around variables
console.log(multiply(5, 6)); // added this to log results
const math = (x, y) => { // add curly brackets around function
	let sum = x + y;
	let product = x * y;
	let difference = Math.abs(x - y);
	return [sum, product, difference];
};
console.log(math(8, 10)); // added this to log results


// 7. Arrow functions and 'this'
class Elephant {
	constructor(public age: number) {
	}

	birthday = () => this.age++; // change birthday method to arrow function
}

const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
	console.log(`Babar's age is ${babar.age}.`)
}, 2000)
