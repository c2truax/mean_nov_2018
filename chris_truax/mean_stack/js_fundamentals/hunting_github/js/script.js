$.get("https://api.github.com/users/c2truax", displayName)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
    console.log(data);
    console.log(data.login);
    $("#display button").click(function(){
        $("#display div p").text(data.login);
    })   
}
