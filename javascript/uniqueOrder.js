const uniqueInOrder = function (iterable) {

    const arr = [...iterable]
    if (arr.length < 1) { return [] }
    let value = arr[0];
    return [value].concat(arr.filter(item => {
        if (item !== value) {
            value = item;
            return true
        }
    }))


}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))