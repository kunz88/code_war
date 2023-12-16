const minMax = (item) => {
    item.sort((a, b) => a - b)
    const arr = []
    arr.push(item[0]);
    arr.push(item[item.length - 1])
    return arr
}
console.log(minMax([1]))

//versione pro
function minMax(arr) {
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}


