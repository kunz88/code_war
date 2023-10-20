/*Highest and Lowest
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */

const higLow = (str) => {
    const arr = str.split(" ").map(Number).sort((a, b) => a - b );
    const arr2 = [];
    arr2.push(arr[arr.length-1]);
    arr2.push(arr[0]);


    return  arr2.join(" ");


}

console.log(higLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

/*Versione pro */

function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}