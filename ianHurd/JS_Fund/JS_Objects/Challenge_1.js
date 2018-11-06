function printStudents(arr){
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
  }
  return 0;
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
printStudents(students);
