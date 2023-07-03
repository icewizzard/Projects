document.addEventListener("DOMContentLoaded", function() {
  let randomnum = generateRandomNumber();
  console.log(randomnum);
  var score = 10;
  var highestscore = 0;

  document.querySelector("#checkGuess").addEventListener("click", function() {
    var userguess = Number(document.querySelector("#numberInput").value);
    checkGuess(userguess);
  });

  document.querySelector("#resetGame").addEventListener("click", function() {
    randomnum = generateRandomNumber();
    console.log(randomnum);
    score = 10;
    document.querySelector("#score").textContent = "Score: " + score;
    document.querySelector("#message").textContent = "Let's start to play! [between 1-30]";
  });

  // Generate random number between 1-30
  function generateRandomNumber() {
    return Math.floor(Math.random() * 29 + 1);
  }

  function checkGuess(userguess) {
    if (userguess === randomnum) {
      document.querySelector("#message").textContent = "Your Guess is Correct!!!";
      randomnum = generateRandomNumber();
      score++;
      handlehighestscore();
    } else if (userguess < randomnum) {
      document.querySelector("#message").textContent = "Too Low! -1 score";
      score--;
    } else {
      document.querySelector("#message").textContent = "Too High! -1 score";
      score--;
    }
    handlescore();
  }

  function handlehighestscore() {
    if (score > highestscore) {
      highestscore = score;
      document.querySelector("#Highestscore").textContent = "Highest score: " + highestscore;
    }
  }

  function handlescore() {
    document.querySelector("#score").textContent = "Score: " + score;
  }
});


  
