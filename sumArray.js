function sum(numbers) {
    if (numbers.length == 0) return 0
    let result = 0;
    for (const val of numbers) {
        result = result + val;
    }
    return result
};
const arr = [1, 2, 3, 4, 56];

console.log(sum(arr));

/*vergogna function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}*/ 