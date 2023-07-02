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
      document.querySelector("#message").textContent = "Lets start to play! [between 1-30]";
    });
  
    // Generate random number between 1-30
    function generateRandomNumber() {
      return Math.floor(Math.random() * 29 + 1);
    }
  
    function checkGuess(userguess) {
      if (userguess === randomnum) {
        document.querySelector("#message").textContent = "Your Guess is Correct!!!";
        randomnum = generateRandomNumber();

      } else if (userguess < randomnum) {
        document.querySelector("#message").textContent = "Too Low! -1 score";
        score -= 1;
      } else {
        document.querySelector("#message").textContent = "Too High! -1 score";
        score -= 1;
      }
    }
    function handlescore(action){

    }
  });
  
