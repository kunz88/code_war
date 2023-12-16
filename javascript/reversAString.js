let str = "world";
let str2 = "";
for (let i = str.length-1 ; i >=0 ; i--){
    str2 += str[i]
}
console.log(str2);

/*Soluzione code wars*/

function solution(str) {
    return str.split('').reverse().join('');
}
console.log(solution(str));