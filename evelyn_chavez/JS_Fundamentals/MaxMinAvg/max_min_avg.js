var array = [-10, 1, 2, 3, -5, 7, 3, 4, -3, 5, 8, -6, 9, 10, -9, 30];
var max = 0;
var min = 0;
var sum = 0;
var ave = 0;
for (var i = 0; i < array.length; i++) {
    sum += array[i];
    ave = sum / array.length;
    if (array[i] > max) {
        max = array[i];
    }
    if (array[i] < min) {
        min = array[i];
    }
}
console.log("max: " + max + ", min: " + min + ", ave: " + ave);