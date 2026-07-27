// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols, name='Matrix') {
    console.log(`\nEnter ${name} (${rows} x ${cols}):`);
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        let rowInput = readlineSync.question(`Enter row ${i + 1}: `);

        let rowArray=rowInput.trim().split(/\s+/).map(Number);

        while (rowArray.length !== cols || rowArray.some(isNaN)) {
            console.log(`Invalid input. Please enter exactly ${cols} numbers separated by spaces.`);
            rowInput = readlineSync.question(`Enter row ${i + 1}: `);
            rowArray = rowInput.trim().split(/\s+/).map(Number);
        }
        matrix.push(rowArray);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let c = 0; c < cols; c++) {
        const newRow = [];
        for (let r = 0; r < rows; r++) {
            newRow.push(matrix[r][c]);
        }
        result.push(newRow);
    }
    return result;
}

function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];

    for (let r = 0; r < rows; r++) {
        const rowSum = [];
        for (let c = 0; c < cols; c++) {
            rowSum.push(matrixA[r][c] + matrixB[r][c]);
        }
        result.push(rowSum);
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
    const result = [];

    for (let r = 0; r < rowsA; r++) {
        const newRow = [];
        for (let c = 0; c < colsB; c++) {
            let sum = 0;    
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[r][k] * matrixB[k][c];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

function main() {
    console.log("Part A: Transpose Matrix");
    const rowsA = readlineSync.questionInt("Enter number of rows: ");
    const colsA = readlineSync.questionInt("Enter number of columns: ");
    const matrixA = readMatrix(rowsA, colsA, 'Matrix A');

    console.log("\nOriginal Matrix :");
    printMatrix(matrixA);

    console.log("\nTransposed Matrix :");
    printMatrix(transposeMatrix(matrixA));


    console.log("\nPart B: Add Matrices");
    console.log(`Reading Matrix B of size ${rowsA} x ${colsA} (must match Matrix A):`);
    const matrixB = readMatrix(rowsA, colsA, 'Matrix B');

    console.log("\nSum (A + B) :");
    printMatrix(addMatrices(matrixA, matrixB));

    console.log("\n Part C:Multiply Matrices:");
    const colsC = readlineSync.questionInt(`Enter number of columns for Matrix C (Matrix A is ${rowsA} x ${colsA}) `);
    console.log(`Matrix C will be size ${colsA} x ${colsC}  to allow multiplication`);
    const matrixC = readMatrix(colsA, colsC, 'Matrix C');   

    console.log("\nProduct (A x C) :");
    printMatrix(multiplyMatrices(matrixA, matrixC));
}

main();