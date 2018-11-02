function one() {
	var hello;
	console.log(hello);
	hello = 'world';
} //outputs undefined

function two() {
	var needle = 'haystack';
	function test() {
		var needle = 'magnet';
		console.log(needle);
	}
}	//outputs undefined

function three() {
	var brendan = 'super cool';
	function print() {
		brendan = 'only okay';
		console.log(brendan)
	}
}	//outputs undefined

function four() {
	var food = 'chicken';
	console.log(food);
	eat();
	function eat(){
		var food = 'half-chicken';
		console.log(food);
		food = 'gone';
	}
}	//outputs 'chicken' half-chicken

function five() {
	mean();
	console.log(food);
	var mean = function() {
		var food = "chicken";
		console.log(food);
		food = "fish";
		console.log(food);
	}
console.log(food);
}	//outputs undefined

function six() {
	var genre;
	console.log(genre);
	genre = "disco";
	rewind();
	function rewind() {
		var genre = "rock";
		console.log(genre);
		genre = "r&b";
		console.log(genre);
	}
	console.log(genre);
}	//outputs undefined rock r&b disco


function seven() {
	dojo = "san jose";
	console.log(dojo);
	learn();
	function learn() {
		var dojo = "seattle";
		console.log(dojo);
		dojo = "burbank";
		console.log(dojo);
	}
	console.log(dojo);
}// outputs 'san jose' 'seattle' 'burbank' 'san jose'

function eight() {
	console.log(makeDojo("Chicago", 65));
	console.log(makeDojo("Berkeley", 0));
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
}// outputs {dojo: 'Chicago', students: 65, hiring: true} TypeError