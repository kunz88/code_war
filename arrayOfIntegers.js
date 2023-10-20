const reverseSeq = n => {
    const arrayOfIntegers = [];
    for (n; n > 0; n--) {
        arrayOfIntegers.push(n)
    }
    return arrayOfIntegers;
};

console.log(reverseSeq(5));