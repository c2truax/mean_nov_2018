$(document).ready(function(){
    var score = 0;
    $("h6").hide();
    $("#score").html(score + " points");

    $.get("https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple", catOne)
    function catOne(data) {
        $("#cat1").text(data.results[0].category);
        $("#lowcat1").click(function(){
            $("#lowcat1").hide();
            $("#lowcat1q").show().html(data.results[0].question);
            for(var i=0; i<3; i++){
                $("#lowcat1a"+i).show().html(data.results[0].incorrect_answers[i]);
            }
            $("#lowcat1a3").show().html(data.results[0].correct_answer);
            $("#lowcat1a3").click(function(){
                $("h6, #lowcat1").hide();
                score += 100;
                $("#score").html(score + " points");
                $("#lowcat1a3").after(data.results[0].correct_answer).before("That's the correct answer!!! ");
            })
            $("#lowcat1a0, #lowcat1a1, #lowcat1a2").click(function(){
                $("h6, #lowcat1").hide();
                $("#lowcat1a3").after(data.results[0].correct_answer).before("Sorry, the correct answer is...");
            })
        })   
    }
    $.get("https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple", catTwo)
    function catTwo(data) {
        $("#cat2").text(data.results[0].category);
        $("#lowcat2").click(function(){
            $("#lowcat2").hide();
            $("#lowcat2q").show().html(data.results[0].question);
            for(var i=0; i<3; i++){
                $("#lowcat2a"+i).show().html(data.results[0].incorrect_answers[i]);
            }
            $("#lowcat2a3").show().html(data.results[0].correct_answer);
            $("#lowcat2a3").click(function(){
                $("h6, #lowcat2").hide();
                score += 100;
                $("#score").html(score + " points");
                $("#lowcat2a3").after(data.results[0].correct_answer).before("That's the correct answer!!! ");
            })
            $("#lowcat2a0, #lowcat2a1, #lowcat2a2").click(function(){
                $("h6, #lowcat2").hide();
                $("#lowcat2a3").after(data.results[0].correct_answer).before("Sorry, the correct answer is...");
            })
        })   
    }
    $.get("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple", catThree)
    function catThree(data) {
        $("#cat3").text(data.results[0].category);
        $("#lowcat3").click(function(){
            $("#lowcat3").hide();
            $("#lowcat3q").show().html(data.results[0].question);
            for(var i=0; i<3; i++){
                $("#lowcat3a"+i).show().html(data.results[0].incorrect_answers[i]);
            }
            $("#lowcat3a3").show().html(data.results[0].correct_answer);
            $("#lowcat3a3").click(function(){
                $("h6, #lowcat3").hide();
                score += 100;
                $("#score").html(score + " points");
                $("#lowcat3a3").after(data.results[0].correct_answer).before("That's the correct answer!!! ");
            })
            $("#lowcat3a0, #lowcat3a1, #lowcat3a2").click(function(){
                $("h6, #lowcat3").hide();
                $("#lowcat3a3").after(data.results[0].correct_answer).before("Sorry the correct answer is...");
            })
        })   
    }
    $.get("https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple", catOneMed)
    function catOneMed(data) {
        $("#medcat1").click(function(){
            $("#medcat1").hide();
            $("#medcat1q").show().html(data.results[0].question);
            for(var i=0; i<3; i++){
                $("#medcat1a"+i).show().html(data.results[0].incorrect_answers[i]);
            }
            $("#medcat1a3").show().html(data.results[0].correct_answer);
            $("#medcat1a3").click(function(){
                $("h6, #medcat1").hide();
                score += 200;
                $("#score").html(score + " points");
                $("#medcat1a3").after(data.results[0].correct_answer).before("That's the correct answer!!! ");
            })
            $("#medcat1a0, #medcat1a1, #medcat1a2").click(function(){
                $("h6, #medcat1").hide();
                $("#medcat1a3").after(data.results[0].correct_answer).before("Sorry, the correct answer is...");
            })
        })   
    }
    $.get("https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=multiple", catTwoMed)
    function catTwoMed(data) {
        $("#medcat2").click(function(){
            $("#medcat2").hide();
            $("#medcat2q").show().html(data.results[0].question);
            for(var i=0; i<3; i++){
                $("#medcat2a"+i).show().html(data.results[0].incorrect_answers[i]);
            }
            $("#medcat2a3").show().html(data.results[0].correct_answer);
            $("#medcat2a3").click(function(){
                $("h6, #medcat2").hide();
                score += 200;
                $("#score").html(score + " points");
                $("#medcat2a3").after(data.results[0].correct_answer).before("That's the correct answer!!! ");
            })
            $("#medcat2a0, #medcat2a1, #medcat2a2").click(function(){
                $("h6, #medcat2").hide();
                $("#medcat2a3").after(data.results[0].correct_answer).before("Sorry, the correct answer is...");
            })
        })   
    }
    $.get("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple", catThreeMed)
    function catThreeMed(data) {
        $("#medcat3").click(function(){
            $("#medcat3").hide();
            $("#medcat3q").show().html(data.results[0].question);
            for(var i=0; i<3; i++){
                $("#medcat3a"+i).show().html(data.results[0].incorrect_answers[i]);
            }
            $("#medcat3a3").show().html(data.results[0].correct_answer);
            $("#medcat3a3").click(function(){
                $("h6, #medcat3").hide();
                score += 200;
                $("#score").html(score + " points");
                $("#medcat3a3").after(data.results[0].correct_answer).before("That's the correct answer!!! ");
            })
            $("#medcat3a0, #medcat3a1, #medcat3a2").click(function(){
                $("h6, #medcat3").hide();
                $("#medcat3a3").after(data.results[0].correct_answer).before("Sorry, the correct answer is...");
            })
        })   
    }
    $.get("https://opentdb.com/api.php?amount=1&category=18&difficulty=hard&type=multiple", catOneHigh)
    function catOneHigh(data) {
        $("#highcat1").click(function(){
            $("#highcat1").hide();
            $("#highcat1q").show().html(data.results[0].question);
            for(var i=0; i<3; i++){
                $("#highcat1a"+i).show().html(data.results[0].incorrect_answers[i]);
            }
            $("#highcat1a3").show().html(data.results[0].correct_answer);
            $("#highcat1a3").click(function(){
                $("h6, #highcat1").hide();
                score += 300;
                $("#score").html(score + " points");
                $("#highcat1a3").after(data.results[0].correct_answer).before("That's the correct answer!!! ");
            })
            $("#highcat1a0, #highcat1a1, #highcat1a2").click(function(){
                $("h6, #highcat1").hide();
                $("#highcat1a3").after(data.results[0].correct_answer).before("Sorry, the correct answer is...");
            })
        })   
    }
    $.get("https://opentdb.com/api.php?amount=1&category=15&difficulty=hard&type=multiple", catTwoHigh)
    function catTwoHigh(data) {
        $("#highcat2").click(function(){
            $("#highcat2").hide();
            $("#highcat2q").show().html(data.results[0].question);
            for(var i=0; i<3; i++){
                $("#highcat2a"+i).show().html(data.results[0].incorrect_answers[i]);
            }
            $("#highcat2a3").show().html(data.results[0].correct_answer);
            $("#highcat2a3").click(function(){
                $("h6, #highcat2").hide();
                score += 300;
                $("#score").html(score + " points");
                $("#highcat2a3").after(data.results[0].correct_answer).before("That's the correct answer!!! ");
            })
            $("#highcat2a0, #highcat2a1, #highcat2a2").click(function(){
                $("h6, #highcat2").hide();
                $("#highcat2a3").after(data.results[0].correct_answer).before("Sorry, the correct answer is...");
            })
        })   
    }
    $.get("https://opentdb.com/api.php?amount=1&category=9&difficulty=hard&type=multiple", catThreeHigh)
    function catThreeHigh(data) {
        $("#highcat3").click(function(){
            $("#highcat3").hide();
            $("#highcat3q").show().html(data.results[0].question);
            for(var i=0; i<3; i++){
                $("#highcat3a"+i).show().html(data.results[0].incorrect_answers[i]);
            }
            $("#highcat3a3").show().html(data.results[0].correct_answer);
            $("#highcat3a3").click(function(){
                $("h6, #highcat3").hide();
                score += 300;
                $("#score").html(score + " points");
                $("#highcat3a3").after(data.results[0].correct_answer).before("That's the correct answer!!! ");
            })
            $("#highcat3a0, #highcat3a1, #highcat3a2").click(function(){
                $("h6, #highcat3").hide();
                $("#highcat3a3").after(data.results[0].correct_answer).before("Sorry, the correct answer is...");
            })
        })   
    }
})