let sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// Funktion, um zu prüfen, ob eine Zahl in der Zeile gültig ist
function isRowValid(board, row, num) {
    for (let col = 0; col < 9; col++) {
        if (board[row][col] === num) {
            return false;
        }
    }
    return true;
}

// Funktion, um zu prüfen, ob eine Zahl in der Spalte gültig ist
function isColumnValid(board, col, num) {
    for (let row = 0; row < 9; row++) {
        if (board[row][col] === num) {
            return false;
        }
    }
    return true;
}

// Funktion, um zu prüfen, ob eine Zahl im 3x3 Block gültig ist
function isBoxValid(board, row, col, num) {
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }
    return true;
}

// Funktion, die prüft, ob eine Zahl in der gegebenen Position gültig ist
function isValid(board, row, col, num) {
    return isRowValid(board, row, num) && isColumnValid(board, col, num) && isBoxValid(board, row, col, num);
}

// Backtracking-Algorithmus
function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) { // leeres Feld
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;

                        if (solveSudoku(board)) {
                            return true;
                        }

                        board[row][col] = 0; // zurücksetzen, wenn die Zahl nicht funktioniert
                    }
                }
                return false; // zurückgehen, wenn keine gültige Zahl gefunden wurde
            }
        }
    }
    return true; // Lösung gefunden
}

// Sudoku lösen
solveSudoku(sudokuBoard);

// Ergebnis ausgeben
console.log(sudokuBoard); 
