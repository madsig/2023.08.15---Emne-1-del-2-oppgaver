var boardElement = document.getElementById('board');
const colorSquare = ["lightSquare", "darkSquare"]
const colorPiece = ["blackPiece", "blackPiece", "whitePiece", "whitePiece"];
let colorSelect = 0;
const pawns = '♟'.repeat(8);
const pieces = '♜♞♝♛♚♝♞♜';
const blanks = Array(8).fill('');
const board = [pieces, pawns, blanks, blanks, blanks, blanks, pawns, pieces];

let pieceRow = 0;
let pieceSquare = 0;
let pieceColor = 0;

function showBoard() {
    for (let rows = 0; rows < 8; rows++) {
        for (let squares = 0; squares < 8; squares++) {
            boardElement.innerHTML += /*HTML*/`
                <div class="${colorSquare[colorSelect]} ${colorPiece[pieceColor]}">${board[pieceRow][pieceSquare]}</div>
            `
            colorSelect = (colorSelect + 1) % 2;
            pieceSquare = (pieceSquare + 1) % 8;
        }
        colorSquare.reverse();
        pieceColor = (pieceColor + 1) % 4;
        pieceRow++;
    }
}
showBoard();