function userPrint(user){
  console.log("EMPLOYEES")
  for(var i = 0; i < users['employees'].length; i++){
    console.log(String(i+1) + " - " + user['employees'][i]['last_name'].toUpperCase() + ", " + user['employees'][i]['first_name'].toUpperCase() + " - " + String(user['employees'][i]['first_name'].length + user['employees'][i]['last_name'].length))
  }
  console.log("MANAGERS")
  for(var i = 0; i < users['managers'].length; i++){
    console.log(String(i+1) + " - " + user['managers'][i]['last_name'].toUpperCase() + ", " + user['managers'][i]['first_name'].toUpperCase() + " - " + String(user['managers'][i]['first_name'].length + user['managers'][i]['last_name'].length))
  }
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
userPrint(users);
