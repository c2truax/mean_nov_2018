$(document).ready(function(){
  $.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple", getCards);
  function getCards(data){
    console.log(data);
    console.log(data.results[0].category);
    $('#cat-1').text(data.results[0].category);
    $('.card-1').click(function(){
      $('.card-1 .question').html(data.results[0].question);
      $('.card-1 .a-1').html(data.results[0].correct_answer);
      $('.card-1 .a-2').html(data.results[0].incorrect_answers[0]);
      $('.card-1 .a-3').html(data.results[0].incorrect_answers[1]);
      $('.card-1 .a-4').html(data.results[0].incorrect_answers[2]);

      $('.card-1').click(function(){
        $('.card-1 .question').html(data.results[0].correct_answer);
        $('.a-1').html('');
        $('.a-2').html('');
        $('.a-3').html('');
        $('.a-4').html('');
      });
    });
  };

  $.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple", getCards2);
  function getCards2(data){
    console.log(data);
    console.log(data.results[0].category);
    $('.card-2').click(function(){
      $('.card-2 .question').html(data.results[0].question);
      $('.card-2 .a-1').html(data.results[0].correct_answer);
      $('.card-2 .a-2').html(data.results[0].incorrect_answers[0]);
      $('.card-2 .a-3').html(data.results[0].incorrect_answers[1]);
      $('.card-2 .a-4').html(data.results[0].incorrect_answers[2]);

      $('.card-2').click(function(){
        $('.card-2 .question').html(data.results[0].correct_answer);
        $('.card-2 .a-1').html('');
        $('.card-2 .a-2').html('');
        $('.card-2 .a-3').html('');
        $('.card-2 .a-4').html('');
      });
    });
  };


  $.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple", getCards3);
  function getCards3(data){
    console.log(data);
    console.log(data.results[0].category);
    $('.card-3').click(function(){
      $('.card-3 .question').html(data.results[0].question);
      $('.card-3 .a-1').html(data.results[0].correct_answer);
      $('.card-3 .a-2').html(data.results[0].incorrect_answers[0]);
      $('.card-3 .a-3').html(data.results[0].incorrect_answers[1]);
      $('.card-3 .a-4').html(data.results[0].incorrect_answers[2]);

      $('.card-3').click(function(){
        $('.card-3 .question').html(data.results[0].correct_answer);
        $('.card-3 .a-1').html('');
        $('.card-3 .a-2').html('');
        $('.card-3 .a-3').html('');
        $('.card-3 .a-4').html('');
      });
    });
  };

});
