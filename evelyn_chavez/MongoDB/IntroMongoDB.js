// Create a database called 'my_first_db'.
use "my_first_db"

Create students collection.
db.createCollection("students")

Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

Create 5 students with the appropriate info.
db.students.insert({})

Get all students.
db.students.find().pretty()

Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({home: ""})

Get all students whose lucky number is:
greater than 3
db.students.find({lucky_number: {$gt: 3}})

less than or equal to 10
db.students.find({lucky_number: {$lte: 10}})


between 1 and 9 (inclusive)
db.students.find({lucky_number: {$in: [1, 9]}})

Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.update({}, {$push: {interests: ["coding", "brunch", "MongoDB" ]}})

Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name: "Lucas"}, {$set: {interests: ["house", "dog food", "MongoDB" ]}})

Add the interest 'taxes' into someone's interest array.
db.students.update({name: "Chloe"}, {$set: {interests: ["house", "taxes", "MongoDB" ]}}) 

Remove the 'taxes' interest you just added.
db.students.update({name: "Lucas"}, {$pull: {interests: "texas"}})

Remove all students who are from California (or Washington).
db.students.remove({home: "California"})

Remove a student by name. 
db.students.remove({name: "Lucas"})

Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.deleteOne({lucky_number: {$gt: 5})

Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.updateMany({}, {$set: {number_of_belt: 0}})

Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.updateMany({home: "Washington"}, {$set: {number_of_belt: 1}})


Rename the 'number_of_belts' field to 'belts_earned'
db.students.updateMany({},{$rename: {"number_of_belts": "belts_earned"})

Remove the 'lucky_number' field.
db.students.updateMany({}, {$unset: {"lucky_number": 1}})

Add a 'updated_on' field, and set the value as the current date.
db.students.updateMany({}, {$currentDate: {updated_on: {$type: "date"}}})
