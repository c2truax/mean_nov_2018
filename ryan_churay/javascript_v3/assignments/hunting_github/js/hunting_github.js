$(document).ready(function(){
  // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)

  $('#button').click(function(){
    $.get("https://api.github.com/users/GrammySpaghetti", displayName);
    function displayName(data) {
      document.getElementById('name').innerHTML = data.login;
    }
  });



});
