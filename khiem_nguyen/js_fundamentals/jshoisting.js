// // 1
// console.log(hello);
// var hello = 'world';
//
// // //interpret 1 as
// // var hello
// // console.log(hello); //undefined
// // hello = world

// //2
// var needle = 'haystack';
// test();//invoke function
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle); //logs "magnet"
// }
//
// // //intepret 2 as
// //var needle
// // test();
// // function test(){
// //  var needle;
// // 	var needle = 'magnet';
// // 	console.log(needle);
// // }
// // needle = "haystack"

// //3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan); // print "super cool"
//
// // interpret 3 as
// //var brendan
// //function print(){
// //     brendan = "only okay";
// //     console.log(brendan);
// // }
// // console.log(brendan); // print "super cool"

// //4
// var food = 'chicken';
// console.log(food);//prints "chicken"
// eat();// prints "half-chicken"
// function eat(){
//    food = 'half-chicken';
//    console.log(food);
//    var food = 'gone';
// }
// // interpret 4 as
// // var food;
// // function eat(){
//     //var food;
//     // food = "half-chicken":
//     // console.log(food);
//     // food = "gone";
// //}

// //5
// mean(); //cannot invoke function because function is never defined
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// //interpret 5 as
// //var mean;
// //mean();
// //console.log(food):
// //mean = function(){}
// // food = "chicken";
// // console.log(food);
// // var food = "fish";
// // console.log(food);
// // }
// //console.log(food);

// //6
// console.log(genre);// undefined because var genre is never defined in global
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre); //print "rock"
// 	var genre = "r&b";
// 	console.log(genre); //print "r&b"
// }
// console.log(genre); //print "disco"
// //interpret as 6
// // var genre;
// // function rewind(){
// //     var genre;
// //     genre = "rock";
// // 	console.log(genre);
// // 	genre = "r&b";
// // 	console.log(genre);
// // }
// // rewind();
// // console.log(genre);

// //7
// dojo = "san jose";
// console.log(dojo); //print "san jose"
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo); //print "seatlle"
// 	var dojo = "burbank";
// 	console.log(dojo);//print "burbank"
// }
// console.log(dojo); //print "san jose"
// //parse 7 as
// // function learn() {
// //     var dojo;
// //     dojo = "seattle";
// //     console.log(dojo);
// //     dojo = "burbank";
// //     console.log(dojo);
// // }
// // dojo = "san jose";
// // console.log(dojo);
// // learn();
// // console.log(dojo);

//8
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
//parsing 6 should be
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
