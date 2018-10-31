$('#btn').click(function(){
    $.get("https://api.github.com/users/solonburleson", displayName)
    
    
    function displayName(data){ 
        console.log(data);
        $("#name").html(data.login);
    };
});       
