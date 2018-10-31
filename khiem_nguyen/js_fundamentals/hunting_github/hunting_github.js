$(document).ready(function(){
    $("button").click(function(){
        $.get("https://api.github.com/users/khiemdavidnguyen", displayName)
        function displayName(data) {

            console.log(data.login);
            $("h1").html(data.login);

        }
    })
})
