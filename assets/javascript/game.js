$(document).ready(function() {
   var random = Math.floor(Math.random()*101+19);

  $("#randomNumber").text(random);

  var score = 0; 
  var wins = 0;
  var losses= 0;

  var crystalOne = Math.floor(Math.random()*11+1);
  var crystalTwo = Math.floor(Math.random()*11+1);
  var crystalThree = Math.floor(Math.random()*11+1);
  var crystalFour = Math.floor(Math.random()*11+1);


  $("#wins").text(wins);
  $("#losses").text(losses);


  function start() {
  random = Math.floor(Math.random()*101+19);
  console.log(random);
  $("#randomNumber").text(random);
  crystalOne = Math.floor(Math.random()*11+1);
  crystalTwo = Math.floor(Math.random()*11+1);
  crystalThree = Math.floor(Math.random()*11+1);
  crystalFour = Math.floor(Math.random()*11+1);
  score = 0;
  $("#finalScore").text(score);
  }

function youWin() {
   alert ("You win!");
   wins ++;
   $("#wins").text(wins);
   start();
 }

 function youLose() {
  alert ("You lose!");
  losses ++;
  $("#losses").text(losses);
  start();
 }

 $("#crystalOne").on("click", function() {
  score = score + crystalOne;
  console.log("Your score " + score);
  $("#finalScore").text(score);
   if (score === random) {
    youWin();
}
  else if (score > random) {
    youLose();
  }
  });

   $("#crystalTwo").on("click", function() {
  score = score + crystalTwo;
  console.log("Your score " + score);
  $("#finalScore").text(score);
   if (score === random) {
    youWin();
}
  else if (score > random) {
    youLose();
  }
  });

   $("#crystalThree").on("click", function() {
  score = score + crystalThree;
  console.log("Your score " + score);
  $("#finalScore").text(score);
   if (score === random) {
    youWin();
}
  else if (score > random) {
    youLose();
  }
  });

   $("#crystalFour").on("click", function() {
  score = score + crystalFour;
  console.log("Your score " + score);
  $("#finalScore").text(score);
   if (score === random) {
    youWin();
}
  else if (score > random) {
    youLose();
  }
});

});
