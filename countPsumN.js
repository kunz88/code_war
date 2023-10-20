function countPositivesSumNegatives(input) {

    const arr1 = input.filter((item) => item < 0);
    const arr2 = input.filter((item) => item > 0);
    return [arr2.length ,arr1.reduce((acc, item) => acc += item, 0)]

    
}
console.log(countPositivesSumNegatives([80, -17, 92, -9, -29, -3, 18, -48, 50, 25, 69, -61, -79, 37, 19, 31, -19, 80, -59, 8, -47, 21, 77, -9, -31, 40, -16, 51, 42, 9, 93, 38, 84, 82, 0, 28, 38, 46, -41, -13, 20]));


// versione pro
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}