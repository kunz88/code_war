//You will be given a number and you will need to return it as a string in Expanded Form.
// . es 23 = "20 + 3" 
function expandedForm(num) {
    const arr = String(num).split("")
    const arr2 = arr.filter(item=> item != 0)
    if(arr2.length <2){return String(num)}
    let str = "";
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] != 0){
            str += `${arr[i]}`
            for (let j = i + 1; j < arr.length; j++) {
                str += 0
                if (j === arr.length - 1) {
                    str += " + "
                }
            }
        }
    }
    if (arr[arr.length - 1] == 0){return str.slice(0,-3)}
    return str + arr[arr.length - 1]
} 
console.log(expandedForm(24103890))