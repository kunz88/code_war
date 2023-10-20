/*SOLUZIONE MIGLIORE*/

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}


/*Soluzione mia*/


const sumArray = (arr) => {
    if(Array.isArray(arr) && arr.length > 2 && arr !== null){
        const maxV = max(arr);
        const minV = min(arr);
        arr.splice(arr.indexOf(maxV),1)
        arr.splice(arr.indexOf(minV), 1)
        return sum(arr)
    }
    return 0
}
const min = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min)
        min = arr[i];
        }
    return min
}
const max = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max
}
const sum = (arr) => {
    let sumV = 0;
    for(const value of arr){
        sumV +=value;
    }
    return sumV;
}


const c = [1,34,56,0,0,98,1];
console.log(c.sort());