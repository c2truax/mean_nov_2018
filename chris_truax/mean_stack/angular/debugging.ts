//1
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";
//this was a problem because it is a string and we tried to 
//assign a number to it, but by placing the number in quotes 
//it makes it a string of the numeral 9.

//2
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello("9"));
 //same problem as #1. the function is expecting a string and
 //you gave it a number, but putting quotes around it makes it
 //a string.

 //3
 function fullName(firstName: string, lastName: string, middleName?: string){ //added a '?' so that it sets this to undefined if not provided
    let fullName;
    if(middleName == undefined){
        fullName = `${firstName} ${lastName}`;
    }
    else {
        fullName = `${firstName} ${middleName} ${lastName}`;
    }
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));
 

 //4
 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 //it was looking for a plural variable
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));

 //5
 class Ninja {//Needed to clean up our class by setting first and last names to be strings
    firstName: string;
    lastName: string;
    fullName: string;
   constructor(
        firstName: string,
        lastName: string,
        ) { // also needed to set all attributes equal to this
            this.firstName = firstName,
            this.lastName = lastName,  
            this.fullName = `${firstName} ${lastName}`;
      }
   debug() {
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("shane","smith"); //had to provide a first and last name as params to create an instance
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer){ // you have not defined an interface of Ninja so you are just giving it a param
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

//6
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;//don't need to include this in curly brackets
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => x * y; // needed to include params in parenthesis if more than one param
// Nor is this working:
var math = (x, y) => {//needed to include all of the functions within our function in curly brackets
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
console.log(math(2, 3));//added this to check to make sure my math() was working

//7
class Elephant {
    constructor(public age: number) { }
    birthday = () => { this.age++; } //changed our function to an arrow so that 'this' within the function is the same as 'this' without
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.