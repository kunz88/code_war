//Check to see if a string has the same amount of 'x's and 'o's.The method must return a boolean and be case insensitive.The string can contain any char.
function xO(str) {
    let arr = [str.split("").reduce((count, char) => char === "o" || char === "O" ? ++count : count, 0), str.split("").reduce((count, char) => char === "x" || char === "X" ? ++count : count, 0)];
    console.log(arr)
    return arr[0] === arr[1]

}
xO("ciaoxxxxx")
