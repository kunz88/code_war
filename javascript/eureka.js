/* The number 
89 is the first integer with more than one digit that fulfills the property partially 
introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
89 === 8 + 9*9;
*/
function sumDigPow(unit1, unit2) {
    const arr = [];
    for (let i = unit1; unit1 <= unit2; unit1++) {
        if (unit1 === (unit1 + "").split("").map(item => Number(item)).reduce((acc, item, index) => acc += Math.pow(item, index + 1))) {
            arr.push(unit1)
        }
    }
    return arr
}
