let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function displayStudents(students){
    for (var i=0;i<students.length;i++){
        console.log("Name: " + students[i]['name'] + ", " + "Cohort: " + students[i]['cohort']);
    }
}
displayStudents(students);
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

function displayUsers(users){
    console.log("EMPLOYEES")
    for (var i=0;i<users.employees.length; i++){
        var first = users.employees[i]['first_name'];
        var last = users.employees[i]['last_name']
        console.log((i+1) + " - " + last + ", " + first + " - " + (first.length + last.length));
    }
    console.log("MANAGERS")
    for (var i=0;i<users.managers.length; i++){
        var first = users.managers[i]['first_name'];
        var last = users.managers[i]['last_name']
        console.log((i+1) + " - " + last + ", " + first + " - " + (first.length + last.length));
    }
}

displayUsers(users);
