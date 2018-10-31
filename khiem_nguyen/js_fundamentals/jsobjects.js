console.log("hello")

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function print(x){
    for(var i in x){
        console.log("Name:" + x[i]['name'] + ", Cohort:" + x[i]['cohort']);
    }
}

print(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function print2(x){
    console.log("Employees");
    for (var i = 0; i<x["employees"].length; i++){
        console.log(i+1 + " - " + x["employees"][i]["last_name"] + ", " + x["employees"][i]["first_name"])
    }
    console.log("Managers");
    for (var i = 0; i<x["managers"].length; i++){
        console.log(i+1  + " - " + x["managers"][i]["last_name"] + ", " + x["managers"][i]["first_name"])
    }

}

print2(users);
