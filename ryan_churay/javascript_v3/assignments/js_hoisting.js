// Problem 1
// console.log(hello);
// var hello = 'world';
var hello;
console.log(hello); // undefined
hello = 'world';

// Problem 2
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
var needle = 'haystack';
function test(){ // gets hoisted
  var needle = 'magnet';
  console.log(needle); // console logs magnet
}
test();


// Problem 3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// nothing gets changed from the way it is written

// Problem 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

var food = 'chicken';
function eat(){
  var food;           // food gets hoisted
	food = 'half-chicken';
	console.log(food);
	food = 'gone';
}
console.log(food) // prints chicken
eat(); // prints half-chicken

// Problem 5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

var mean;
mean(); // return mean is not a function
console.log(food); //prints undefined
var mean = function(){
  var food;
  food = 'chicken';
  console.log(food); // prints chicken
  food = 'fish';
  console.log(food); // prints fish
}
console.log(food); // prints undefined

// Problem 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

var genre;
function rewind() {
  var genre;
	genre = "rock";
	console.log(genre); // prints rock
	genre = "r&b";
	console.log(genre); // prints r&b
}
console.log(genre); // prints undefined
genre = 'disco';
rewind();
console.log(genre) // prints disco

// Problem 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

var dojo;
function learn() {
  var dojo;
  dojo = "seattle";
	console.log(dojo); // print seattle
	dojo = "burbank";
	console.log(dojo); // print burbank
}
dojo = 'san jose';
console.log(dojo); // prints san jose
learn();
console.log(dojo); // prints san jose
