const sumInBetw = (x, y) => {
    if(x === y){return x};
    let sum = 0;
    if (x < y) {
        for (x; x <= y; x++) {
            sum += x;
        }
        return sum
    }
    else{
        for (x; x >= y; x--) {
            sum += x;
        }
        return sum
    }
}

console.log(sumInBetw(2, 2));