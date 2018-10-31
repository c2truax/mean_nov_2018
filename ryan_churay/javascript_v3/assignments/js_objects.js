
// Problem 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function printname(arr){
  for(var i=0; i<arr.length; i++){
    console.log('Name: ' + arr[i]['name'] + ', Cohort: ' + arr[i]['cohort']);
  }
}
printname(students);


// Problem 2
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
function employmanage(dict){
  console.log('EMPLOYEES');
  for(var i=0; i<dict.employees.length; i++){
    var length = dict.employees[i]['last_name'].length + dict.employees[i]['first_name'].length;
    console.log(i + ' - ' + dict.employees[i]['last_name'] + ', ' + dict.employees[i]['first_name'] + ' - ' + length);
  }
  console.log('MANAGERS');
  for(var i=0; i<dict.managers.length; i++){
    var length = dict.managers[i]['last_name'].length + dict.managers[i]['first_name'].length;
    console.log(i + ' - ' + dict.managers[i]['last_name'] + ', ' + dict.managers[i]['first_name'] + ' - ' + length);
  }
}
employmanage(users);
