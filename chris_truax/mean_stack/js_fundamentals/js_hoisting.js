function one(){
    var hello;
    console.log(hello);                                   
    hello = 'world';   
}
//one();
//undefined

function two(){
    var needle = 'haystack';
    function test(){
        var needle = 'magnet';
        console.log(needle);
    }
    test();

}
//two();
//magnet

function three(){
    var brendan = 'super cool';
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan);
}
//three();
//super cool

function four(){
    var food = 'chicken';
    function eat(){
        var food;
        food = 'half-chicken';
        console.log(food);
        food = 'gone';
    }
    console.log(food);
    eat();
}
//four();
//chicken  half-chicken

function five(){
    var mean = function() {
        var food;
        food = "chicken";
        console.log(food);
        food = "fish";
        console.log(food);
    }
    mean();
    console.log(food);
    console.log(food);
}
//five();
//chicken  fish  reference error because 'food' is not defined

function six(){
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
}
//six();
//undefined  rock  r&b  disco

function seven(){
    var dojo;
    function learn() {
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
    dojo = "san jose";
    console.log(dojo);
    learn();
    console.log(dojo);
}
//seven();
//san jose  seattle  burbank  san jose

function eight(){
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
}
eight();
//type error because dojo is defined as a dictionary and then they try to make it a string