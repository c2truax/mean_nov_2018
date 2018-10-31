// Challenge 1

var students = [{
        name: 'Remy',
        cohort: 'Jan'
    },
    {
        name: 'Genevieve',
        cohort: 'March'
    },
    {
        name: 'Chuck',
        cohort: 'Jan'
    },
    {
        name: 'Osmund',
        cohort: 'June'
    },
    {
        name: 'Nikki',
        cohort: 'June'
    },
    {
        name: 'Boris',
        cohort: 'June'
    }
];

for (var student in students) {
    console.log(students[student]);
}

// Challenge 2
var users = {
    employees: [{
            'first_name': 'Miguel',
            'last_name': 'Jones'
        },
        {
            'first_name': 'Ernie',
            'last_name': 'Bertson'
        },
        {
            'first_name': 'Nora',
            'last_name': 'Lu'
        },
        {
            'first_name': 'Sally',
            'last_name': 'Barkyoumb'
        }
    ],
    managers: [{
            'first_name': 'Lillian',
            'last_name': 'Chambers'
        },
        {
            'first_name': 'Gordon',
            'last_name': 'Poe'
        }
    ]
};

for (var user in users) {
    console.log(user);
    var persons = users[user];
    for (var i in persons) {
        console.log(String((Number(i) + 1)), "-", persons[i].last_name, ",", persons[i].first_name, "-", (persons[i].first_name.length + persons[i].last_name.length));
    }
}
