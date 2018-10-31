let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(var i = 0; i < students.length; i++){
    string = "Name: " + students[i].name + ", Cohort: " + students[i].cohort;
    console.log(string);
}


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

console.log("EMPLOYEES");

for(var i = 0; i < users.employees.length; i++){
    id = i + 1;
    count = users.employees[i].last_name.length + users.employees[i].first_name.length;
    string = id + " - " + users.employees[i].last_name + ", " + users.employees[i].first_name + " - " + count;
    console.log(string);
}

console.log("MANGERS");

for(var i = 0; i < users.managers.length; i++){
    id = i + 1;
    count = users.managers[i].last_name.length + users.managers[i].first_name.length;
    string = id + " - " + users.managers[i].last_name + ", " + users.managers[i].first_name + " - " + count;
    console.log(string);
}