const gameBoard = (function(row1, row2, row3) {
    row1 = ['', '', ''];
    row2 = ['', '', ''];
    row3 = ['', '', ''];

    const getBoard = () => [row1, row2, row3];

    return { row1, row2, row3 , getBoard}
})();

const players = (function(player1, player2) {
    player1 = 'X';
    player2 = 'O';

    return { player1, player2 }
})();

function updateBoard(row, col, player) {
    const board = gameBoard.getBoard();
    board[row][col] = player;
}

function checkWinner() {
    const board = gameBoard.getBoard();
    const player1 = players.player1;
    const player2 = players.player2;

    // Check rows
    for(let i = 0; i < 3; i++) {
        if(board[i][0] === player1 && board[i][1] === player1 && board[i][2] === player1) {
            return player1;
        } else if(board[i][0] === player2 && board[i][1] === player2 && board[i][2] === player2) {
            return player2;
        }
    }

    // check columns
    for(let i = 0;i < 3;i++){
        if(board[0][i] === player1 && board[1][i] === player1 && board[2][i]){
            return player1;
        } else if(board[0][i] === player2 && board[1][i] === player2 && board[2][i]){
            return player2;
        }
    }

    // check diagnols
    for(let i = 0;i < 3;i++){
        if(board[0][0] === player1 && board[1][1] === player1 && board[2][2] === player1 ||
            board[0][2] === player1 && board[1][1] === player1 && board[2][0] === player1) {
            return player1; 
        } else if(board[0][0] === player2 && board[1][1] === player2 && board[2][2] === player2 ||
            board[0][2] === player2 && board[1][1] === player2 && board[2][0] === player2) {
                return player2;
        }
    }
}


updateBoard(0, 2, players.player1);
updateBoard(1, 1, players.player1);
updateBoard(2, 0, players.player1);
console.log(gameBoard.getBoard()); // [ [ '', '', '' ], [ '', '', '' ], [ '', '', '' ] ]
console.log("Winner: " + checkWinner());
