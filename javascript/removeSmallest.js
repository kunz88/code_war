/* Given an array of integers, remove the smallest value. 
Do not mutate the original array/list. If there are multiple
 elements with the same value, remove the one with a lower index. 
 If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left. */


function removeSmallest(numbers) {
    if(numbers.length <=0){
      return[]
    }
    let arr = [...numbers]
    let arr2 = [...numbers]
    let value = arr.sort((a,b) => b-a).pop();
    arr2.splice(numbers.indexOf(value),1)
    return arr2
  }

  console.log(removeSmallest([2,2,1,2,1]))

  // altra versione
  
  function removeSmallest(numbers) {
    let copy = [...numbers]
    let smallest = Math.min(...numbers);
    let smallestIdx = numbers.indexOf(smallest)
    copy.splice(smallestIdx, 1)
    return copy
    }