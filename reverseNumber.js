function reverseNum(n) {
    
    let arr = n.toString().split('').reverse();
    return arr.map(Number);


}
console.log(reverseNum(5678));

// miglior esempio: 

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}