//Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x) {
    let result = 1;
    for (const i of x){
        result *= i;
    }
    return result;
}
const a = [1, 2, 3, 4];
console.log(grow(a));
