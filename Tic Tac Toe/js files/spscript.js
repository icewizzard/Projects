// Game variables
let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
let isAgainstComputer = true;

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

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("click", cellClick);
});

function cellClick() {
    const cellIndex = Array.from(cells).indexOf(this);
    if (gameState[cellIndex] !== "" || !gameActive) {
        return;
    }

    gameState[cellIndex] = currentPlayer;
    this.textContent = currentPlayer;

    checkResult();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.querySelector(".message").textContent = "Current turn: " + currentPlayer;
    if (gameActive && isAgainstComputer) {
        const emptyCells = gameState.reduce((acc, cell, index) => {
            if (cell === "") {
                acc.push(index);
            }
            return acc;
        }, []);
    
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const computerCellIndex = emptyCells[randomIndex];
    
            gameState[computerCellIndex] = currentPlayer;
            cells[computerCellIndex].textContent = currentPlayer;
    
            checkResult();
    
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.querySelector(".message").textContent = "Current turn: " + currentPlayer;
        }, 1000);
    }    
}

function resetBoard() {
    currentPlayer = "X";
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    cells.forEach((cell) => {
        cell.textContent = "";
    });
    document.querySelector(".message").textContent = "Current turn: " + currentPlayer;
}


function checkResult() {
    let winner = null;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        const cellA = gameState[a];
        const cellB = gameState[b];
        const cellC = gameState[c];

        if (cellA !== "" && cellA === cellB && cellA === cellC) {
            winner = cellA;
            break;
        }
    }

    if (winner) {
        gameActive = false;
        document.querySelector(".message").textContent = "Player " + winner + " wins!";
        setTimeout(() => {
            alert("Player " + winner + " wins!");
            resetBoard();
        }, 1000);
    } else if (!gameState.includes("")) {
        gameActive = false;
        document.querySelector(".message").textContent = "It's a tie!";
        setTimeout(() => {
            alert("It's a tie!");
            resetBoard();
        }, 1000);
    }
    
}

// back button
const backButton = document.querySelector('.btn');                                                                                                                                                                                                  

backButton.addEventListener('click', function () {
    window.location.href = "enterence.html";
});

document.querySelector(".button").addEventListener('click', function () {
    resetBoard();
});