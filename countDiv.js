const getDivisorsCnt = (value) => {
    let count = 0;
    for (let i = 1; i * i <= value; i++) {
        if (value % i === 0) {
            if (i * i === value) {
                count++;
            }
            else {
                count += 2;
            }
        }
    }
    return count
}
console.log(getDivisorsCnt(10))