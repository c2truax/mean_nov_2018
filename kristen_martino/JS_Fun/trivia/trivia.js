$(document).ready(function() {
  let cs_data = $.get(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple",
    trivia
  );

  function trivia(data) {
    cs_data = data;

    $("button").click(function() {
      $("h1").append(cs_data.results[0].correct_answer);
    });
  }
});


// // import "jQuery";
//
// // $(document).ready(function () {
// let cs_data = $.get(
//     "https://opentdb.com/api.php?amount=1&category=18&difficulty=hard&type=multiple",
//     trivia
// );
//
// //     function trivia(data) {
// //         cs_data = data;
//
// //         $("button").click(function () {
// //             $("h1").append(cs_data.results[0].correct_answer);
// //         });
// //     }
// // });
//
// let answers = [cs_data.results.correct_answer];
// answers.append(cs_data.results.incorrect_answers);
// console.log(answers);
//
// // "incorrect_answers"
// // "category"
// // question
// // difficulty (easy, medium, hard)
// // type (multiple, boolean)
