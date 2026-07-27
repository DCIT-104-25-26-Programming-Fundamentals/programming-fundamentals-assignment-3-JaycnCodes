// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function printFibonacciTerms() {
    const input = readlineSync.question('How many terms? ');
    const n = Number(input);

    if (isNaN(n)|| !Number.isInteger(n) || n <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }

    const terms = [];
    let a = 0; 
    let b = 1;

    for (let i=0;i<n;i++){
        terms.push(a);
        const next=a+b;
        a=b
        b=next;

    }
    console.log(`Fibonacci sequence: ${terms.join(' ')}\n`)
}

function checkFibonacciNumber(){
    const input=readlineSync.question('Enter a number to check: ');
    const num = Number(input);

    if (isNaN(num)|| num<0 || !Number.isInteger(num)){
        console.log('Error: Please enter a non-negative integer.\n')
        return;
    }
    let a=0
    let b=1

    while (a<num){
        const next= a+b;
        a=b
        b=next;

    }
    if (a===num){
        console.log(`${num} is a Fibonacci number.\n`);
    }else{
        console.log(`${num} is not a Fibonacci number.\n`);
    }
    }
function main(){
    console.log('Part A');
    printFibonacciTerms();

    console.log('Part B');
    checkFibonacciNumber();
}
main();
