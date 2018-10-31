$('#geo1').click(function(){
    $.get("https://opentdb.com/api.php?amount=1&category=22&difficulty=easy", displayName)
    
    
    function displayName(data){ 
        console.log(data);
        var answers = data.results[0].incorrect_answers;
        answers.push(data.results[0].correct_answer);
        answers.sort();
        // answers.Math.round(.Math.random)
        console.log(answers);
        var html_str = "<h5>" + data.results[0].question + "</h5>";
        html_str += "<form>"
        for(var i = 0; i < answers.length; i++){
            html_str += "<div><input type='radio'>" + answers[i] +"</div>"
        }
        html_str += "</form>"
        console.log(html_str);
        $('#geo1').html(html_str);
    };
});       

$('#geo2').click(function(){
    $.get("https://opentdb.com/api.php?amount=1&category=22&difficulty=medium", displayName)
    
    
    function displayName(data){ 
        console.log(data);
        var answers = data.results[0].incorrect_answers;
        answers.push(data.results[0].correct_answer);
        answers.sort();
        // answers.Math.round(.Math.random)
        console.log(answers);
        var html_str = "<h5>" + data.results[0].question + "</h5>";
        html_str += "<form>"
        for(var i = 0; i < answers.length; i++){
            html_str += "<div><input type='radio'>" + answers[i] +"</div>"
        }
        html_str += "</form>"
        console.log(html_str);
        $('#geo2').html(html_str);
    };
});      

$('#geo3').click(function(){
    $.get("https://opentdb.com/api.php?amount=1&category=22&difficulty=hard", displayName)
    
    
    function displayName(data){ 
        console.log(data);
        var answers = data.results[0].incorrect_answers;
        answers.push(data.results[0].correct_answer);
        answers.sort();
        // answers.Math.round(.Math.random)
        console.log(answers);
        var html_str = "<h5>" + data.results[0].question + "</h5>";
        html_str += "<form>"
        for(var i = 0; i < answers.length; i++){
            html_str += "<div><input type='radio'>" + answers[i] +"</div>"
        }
        html_str += "</form>"
        console.log(html_str);
        $('#geo3').html(html_str);
    };
});   

$('#ent1').click(function(){
    $.get("https://opentdb.com/api.php?amount=1&category=11&difficulty=easy", displayName)
    
    
    function displayName(data){ 
        console.log(data);
        var answers = data.results[0].incorrect_answers;
        answers.push(data.results[0].correct_answer);
        answers.sort();
        // answers.Math.round(.Math.random)
        console.log(answers);
        var html_str = "<h5>" + data.results[0].question + "</h5>";
        html_str += "<form>"
        for(var i = 0; i < answers.length; i++){
            html_str += "<div><input type='radio'>" + answers[i] +"</div>"
        }
        html_str += "</form>"
        console.log(html_str);
        $('#ent1').html(html_str);
    };
});   

$('#ent2').click(function(){
    $.get("https://opentdb.com/api.php?amount=1&category=11&difficulty=medium", displayName)
    
    
    function displayName(data){ 
        console.log(data);
        var answers = data.results[0].incorrect_answers;
        answers.push(data.results[0].correct_answer);
        answers.sort();
        // answers.Math.round(.Math.random)
        console.log(answers);
        var html_str = "<h5>" + data.results[0].question + "</h5>";
        html_str += "<form>"
        for(var i = 0; i < answers.length; i++){
            html_str += "<div><input type='radio'>" + answers[i] +"</div>"
        }
        html_str += "</form>"
        console.log(html_str);
        $('#ent2').html(html_str);
    };
});   

$('#ent3').click(function(){
    $.get("https://opentdb.com/api.php?amount=1&category=11&difficulty=hard", displayName)
    
    
    function displayName(data){ 
        console.log(data);
        var answers = data.results[0].incorrect_answers;
        answers.push(data.results[0].correct_answer);
        answers.sort();
        // answers.Math.round(.Math.random)
        console.log(answers);
        var html_str = "<h5>" + data.results[0].question + "</h5>";
        html_str += "<form>"
        for(var i = 0; i < answers.length; i++){
            html_str += "<div><input type='radio'>" + answers[i] +"</div>"
        }
        html_str += "</form>"
        console.log(html_str);
        $('#ent3').html(html_str);
    };
});  

$('#sci1').click(function(){
    $.get("https://opentdb.com/api.php?amount=1&category=17&difficulty=easy", displayName)
    
    
    function displayName(data){ 
        console.log(data);
        var answers = data.results[0].incorrect_answers;
        answers.push(data.results[0].correct_answer);
        answers.sort();
        // answers.Math.round(.Math.random)
        console.log(answers);
        var html_str = "<h5>" + data.results[0].question + "</h5>";
        html_str += "<form>"
        for(var i = 0; i < answers.length; i++){
            html_str += "<div><input type='radio'>" + answers[i] +"</div>"
        }
        html_str += "</form>"
        console.log(html_str);
        $('#sci1').html(html_str);
    };
});  

$('#sci2').click(function(){
    $.get("https://opentdb.com/api.php?amount=1&category=17&difficulty=medium", displayName)
    
    
    function displayName(data){ 
        console.log(data);
        var answers = data.results[0].incorrect_answers;
        answers.push(data.results[0].correct_answer);
        answers.sort();
        // answers.Math.round(.Math.random)
        console.log(answers);
        var html_str = "<h5>" + data.results[0].question + "</h5>";
        html_str += "<form>"
        for(var i = 0; i < answers.length; i++){
            html_str += "<div><input type='radio'>" + answers[i] +"</div>"
        }
        html_str += "</form>"
        console.log(html_str);
        $('#sci2').html(html_str);
    };
});  

$('#sci3').click(function(){
    $.get("https://opentdb.com/api.php?amount=1&category=17&difficulty=hard", displayName)
    
    
    function displayName(data){ 
        console.log(data);
        var answers = data.results[0].incorrect_answers;
        answers.push(data.results[0].correct_answer);
        answers.sort();
        // answers.Math.round(.Math.random)
        console.log(answers);
        var html_str = "<h5>" + data.results[0].question + "</h5>";
        html_str += "<form>"
        for(var i = 0; i < answers.length; i++){
            html_str += "<div><input type='radio'>" + answers[i] +"</div>"
        }
        html_str += "</form>"
        console.log(html_str);
        $('#sci3').html(html_str);
    };
});  