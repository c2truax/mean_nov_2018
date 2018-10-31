function challengeOne (students) {
	for (let i=0; i<students.length; i++) {
		console.log(`name: ${students[i]['name']}, cohort: ${students[i]['cohort']}`);
	}
}

function challengeTwo(users) {

	console.log('EMPLOYEES');
  let em = users['employees'];
	for (let i=0; i<em.length; i++) {
		console.log(`${i} - ${em[i]['first_name'].toUpperCase()}, ${em[i]['last_name'].toUpperCase()} - ${em[i]['first_name'].length + em[i]['last_name'].length}`);
	}
	console.log('MANAGERS');
  let man = users['managers'];
	for (let i=0; i<man.length; i++) {
		console.log(`${i} - ${man[i]['first_name'].toUpperCase()}, ${man[i]['last_name'].toUpperCase()} - ${man[i]['first_name'].length + man[i]['last_name'].length}`);
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

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];




challengeOne(students);
challengeTwo(users);