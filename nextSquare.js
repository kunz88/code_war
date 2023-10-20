/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

n = (n-1)2 + (2n-1) */

function isSquare(n) {
    
    if(Math.sqrt(n) % 1 !== 0){return-1}

    return n + 2 + ((2 * Math.sqrt(n))-1);
}

console.log(isSquare(25));