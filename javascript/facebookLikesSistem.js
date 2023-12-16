const likeString = (arr) => {
    let s = ""
    if (arr.length <= 0) { s = "no one" }
    else if(arr.length === 1){
         s = arr[0];
    }
    else if (arr.length === 2) {
         s = arr[0] + " and " + arr[1];
    }
    else if (arr.length === 3) {
         s = arr[0] + " , " + arr[1] + " and " + arr[2];
    }
    else if (arr.length >= 4) {
         s = arr[0] + " , " + arr[1] + " and " +  String(arr.length - 2) + " others";
    }
    return s + " likes this"
}
console.log(likeString(["Alex", "Jacob", "Mark", "Max"]));