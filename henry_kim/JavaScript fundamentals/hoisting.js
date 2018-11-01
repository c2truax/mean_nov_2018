var hello;
console.log(hello);
hello = 'world'

var needle
function test(){
  var needle;
	needle = 'magnet';
	console.log(needle);
}
needle = 'haystack';
test();


var brendan;
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
brendan = 'super cool';

console.log(brendan);


var food;
function eat(){
  var food;
	food = 'half-chicken';
	console.log(food);
	food = 'gone';
}

food = 'chicken';
console.log(food);
eat();


mean();
console.log(food);
var mean;
mean = function() {
  var food;
  food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
}
console.log(food);


var genre;
function rewind() {
  var genre;
  genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

dojo = "san jose";
function learn() {
  var dojo;
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
learn();
console.log(dojo);


function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
