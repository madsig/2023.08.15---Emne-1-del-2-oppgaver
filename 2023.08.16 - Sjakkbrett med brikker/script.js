var boardElement = document.getElementById('board');
const colorSquare = ["lightSquare", "darkSquare"]
const colorPiece = ["blackPiece", "blackPiece", "whitePiece", "whitePiece"];
let colorSelect = 0;
const pieces = [
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', '']
];
let pieceRow = 1;
let pieceSquare = 0;
let pieceColor = 0;

function showBoard() {
    for (let rows = 0; rows < 8; rows++) {
        for (let squares = 0; squares < 8; squares++) {
            boardElement.innerHTML += /*HTML*/`
                <div class="${colorSquare[colorSelect]} ${colorPiece[pieceColor]}">${pieces[pieceRow][pieceSquare]}</div>
            `
            colorSelect = (colorSelect + 1) % 2;
            pieceSquare = (pieceSquare + 1) % 8;
        }
        colorSquare.reverse();
        pieceColor = (pieceColor + 1) % 4;
        if (rows < 2 || rows > 4) {
            pieceRow = (pieceRow + 1) % 4;
        }
    }
}
showBoard();