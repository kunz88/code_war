// Go for it
//split words into seperate arrays

function reverseWords(str) {
    let arr = str.split(' ');
    const str2 = arr.map(item => item.split('').reverse().join(''))
    return str2.join(" ");


}

console.log(reverseWords("ciao ciccio"));


// versione pro
function reverseWords(str) {
    return str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
}
