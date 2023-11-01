const findTheOddInt = (arr) =>{
        for (let i = 0; i < arr.length; i++) {

            if ((arr.reduce((acc, item) => { if (item === arr[i]) { return ++acc } else { return acc } }, 0) % 2) === 1){
                return arr[i]
            }
        }

}
console.log(findTheOddInt([1]));

// Versione pro:
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}