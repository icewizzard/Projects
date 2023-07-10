// Game variables
let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

// Winning combinations
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Function to check the current game status
function checkGameStatus() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        const checkValue1 = gameState[a];
        const checkValue2 = gameState[b];
        const checkValue3 = gameState[c];

        if (checkValue1 === "" || checkValue2 === "" || checkValue3 === "") {
            continue;
        }

        if (checkValue1 === checkValue2 && checkValue2 === checkValue3) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        gameActive = false;
        alert("Player " + currentPlayer + " won!");
        if(currentPlayer = "X"){
            currentPlayer = "X"
        }
        if(currentPlayer = "O"){
            currentPlayer = "O"
        }
        restartGame(currentPlayer);
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        gameActive = false;
        alert("It's a draw!");
        restartGame();
    }
}

// Function to reset the board
function resetBoard() {
    gameState = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerText = "";
        cell.addEventListener("click", handleCellClick);
    });
}

// Function to restart the game
function restartGame(currentPlayer) {
    gameActive = true;
    resetBoard();
    document.querySelector(".message").textContent = "Current turn: " + currentPlayer;
}

// Function to handle cell click
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = Array.from(document.querySelectorAll(".cell")).indexOf(clickedCell);

    if (!gameActive || gameState[clickedCellIndex] !== "") {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;

    checkGameStatus();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.querySelector(".message").textContent = "Current turn: " + currentPlayer;
}

// Back button
const backButton = document.querySelector('.btn');

backButton.addEventListener('click', function () {
    window.location.href = "enterence.html";
});

// Reset game button
const resetButton = document.querySelector('.button');

resetButton.addEventListener('click', function () {
    restartGame();
});

// Add event listeners to cells
document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});
