const gameBoard = (function(row1, row2, row3) {
    row1 = ['', '', ''];
    row2 = ['', '', ''];
    row3 = ['', '', ''];

    const getBoard = () => [row1, row2, row3];

    return { row1, row2, row3 , getBoard}
})();

const player = (function(name, marker) {
    return { name, marker }
})();

function updateBoard(row, col, player) {
    const board = gameBoard.getBoard();
    board[row][col] = player;
}

function winCombinations() {
    const board = gameBoard.getBoard();
    const player1 = 'X';
    const player2 = '0';

    // Check rows
    for(let i = 0; i < 3; i++) {
        // check rows
        if(board[i][0] === player1 && board[i][1] === player1 && board[i][2] === player1) {
            return player1;
        } else if(board[i][0] === player2 && board[i][1] === player2 && board[i][2] === player2) {
            return player2;
            // check columns
        } else if(board[0][i] === player1 && board[1][i] === player1 && board[2][i]){
            return player1;
        } else if(board[0][i] === player2 && board[1][i] === player2 && board[2][i]){
            return player2;
            // check diagnols
        } else if(board[0][0] === player1 && board[1][1] === player1 && board[2][2] === player1 ||
            board[0][2] === player1 && board[1][1] === player1 && board[2][0] === player1) {
                return player1; 
        } else if(board[0][0] === player2 && board[1][1] === player2 && board[2][2] === player2 ||
            board[0][2] === player2 && board[1][1] === player2 && board[2][0] === player2) {
                game.setGameOver()
                return player2;
        } else {
            return "Tie!";
        }
    }
}

function checkWinner() {
    const winner = winCombinations();
    if(winner === 'X'){
        game.setGameOver();
        return game.getActivePlayer().name + " wins!";
    } else if(winner === '0') {
        game.setGameOver();
        return game.getActivePlayer().name + " wins!";
    } else if(winner === "tie"){
        game.setGameOver();
        return "Tie!";
    }
    return null;
}

function gameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const board = gameBoard.getBoard();
    let gameOver = false;
    
    const players = [
        {
            name: playerOneName,
            mark: 'X'
        },
        {
            name: playerTwoName,
            mark: '0'
        }
    ];

    let activePlayer = players[0];

    const switchPlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const checkGameOver = () => gameOver;

    const getActivePlayer = () => activePlayer;

    const setGameOver = () => {
        gameOver = true;
    };

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`)
    }

    return { switchPlayer, checkGameOver, getActivePlayer, setGameOver, board, printNewRound };
};

const game = gameController();

console.log(game.getActivePlayer().mark);
// game.switchPlayer();

console.log(game.getActivePlayer().mark);
updateBoard(0, 0, game.getActivePlayer().mark);
updateBoard(1, 1, game.getActivePlayer().mark);
updateBoard(2, 2, game.getActivePlayer().mark);
console.log(gameBoard.getBoard()); // [ [ '', '', '' ], [ '', '', '' ], [ '', '', '' ] ]
console.log("Winner: " + checkWinner());
console.log(game.checkGameOver());


