const test = (item)=> {
    if(item.length === 0){
        return []
    }
    const arr = [];
    for(let i = 0 ; i < item.length; i++){
        arr.push(`${i+1}: ${item[i]}`)
    }
    return arr
}
console.log(test(["a","b","c"]));