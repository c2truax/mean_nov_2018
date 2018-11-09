$( document ).ready(function() {
  $.get("https://opentdb.com/api.php?amount=10&category=22&type=multiple", displayInfo)
  function displayInfo(data) {
      console.log(data);
      var x = 0;
      $('div').html("<h1>"+data.results[0].category+"</h1><form><h4 id='"+x+"'>");
      for (let i = 1; i <= data.results.length; i++){
        var y = i-1
        $('#'+ y).html(data.results[y].question+"</h4><input type='radio'></input><label class='"+i+"_1'>");
        $('.'+i+'_1').html(data.results[y].correct_answer+"</label><input type='radio'></input><label class='"+i+"_2'>")
        $('.'+i+'_2').html(data.results[y].incorrect_answers[0]+"</label><input type='radio'></input><label class='"+i+"_3'>")
        $('.'+i+'_3').html(data.results[y].incorrect_answers[1]+"</label><input type='radio'></input><label class='"+i+"_4'>")
        $('.'+i+'_4').html(data.results[y].incorrect_answers[2]+"<h4 id='"+i+"'>")
      }
  }
});
