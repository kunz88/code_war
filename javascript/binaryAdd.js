
/* 
Binary Addition
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string. */
const binaryAdd = (value1, value2) => {
    let result = value1 + value2;
    let arr = []

    while (result !== 0) {
        arr.push(result % 2)
        result = Math.floor(result / 2)
    }
    return arr.reverse().join("")


}


// versione pro .toString(2) converts the sum to a binary string using the toString method with a base of 2
const addBinary = (a, b) => (a + b).toString(2);