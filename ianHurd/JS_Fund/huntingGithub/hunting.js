$( document ).ready(function() {
  $.get("https://api.github.com/users/radiofreez", displayInfo)
  function displayInfo(data) {
    $('button').click(function() {
      $('h1').text(data.login)
    });
  }
});
