const Gameboard = (() => {
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    const putMark = (character, id) => {
        board[id - 1] = character;
    };
    return { board, putMark };
})();

const Game = (() => {
    const display = (gameboard) => {
        for (i = 1; i < 10; i++) {
            document.getElementById(`square${i}`).innerHTML = gameboard[i - 1];
        }
    };
    const checkEndGame = (board) => {
        swit = false;
        for (i = 0; i < 9; i++) if (board[i] == " ") swit = true;
        if (!swit) return 0;
        if (board[0] == board[1] && board[1] == board[2] && board[2] != " ")
            return 0;
        if (board[3] == board[4] && board[4] == board[5] && board[5] != " ")
            return 3;
        if (board[6] == board[7] && board[7] == board[8] && board[8] != " ")
            return 6;
        if (board[0] == board[3] && board[3] == board[6] && board[6] != " ")
            return 0;
        if (board[1] == board[4] && board[4] == board[7] && board[7] != " ")
            return 1;
        if (board[2] == board[5] && board[5] == board[8] && board[8] != " ")
            return 2;
        if (board[0] == board[4] && board[4] == board[8] && board[8] != " ")
            return 0;
        if (board[2] == board[4] && board[4] == board[6] && board[6] != " ")
            return 2;
        return -1;
    };

    return { display, checkEndGame };
})();

const Player = (character) => {
    return { character };
};

const HumanPlayer = Player("X");
const AIPlayer = Player("O");
let currentPlayer = AIPlayer;

function draw(id) {
    if (currentPlayer == AIPlayer) currentPlayer = HumanPlayer;
    else currentPlayer = AIPlayer;
    Gameboard.putMark(currentPlayer.character, id);
    Game.display(Gameboard.board);
    console.log(Gameboard.board);
    console.log(Game.checkEndGame(Gameboard.board));
    if (Game.checkEndGame(Gameboard.board) == 0) alert("Draw");
    else if (Game.checkEndGame(Gameboard.board) != -1) {
        if (
            Gameboard.board[Game.checkEndGame(Gameboard.board)] ==
            HumanPlayer.character
        )
            alert("Player won");
        else alert("Computer won");
    }
}
window.onload = () => {};
