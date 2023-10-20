//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

const arrDifference = (arr1,arr2) => {
    return arr1.filter((item) => {
        for (let i=0; i<arr2.length;i++){
            if(item === arr2[i]){
                return false
            }
        }
        return true
    })
}
console.log(arrDifference([1, 2, 3], [1, 2]))

// versione pro
function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
}