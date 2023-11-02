function stray(numbers) {
    const n = numbers.filter((item) => item !== numbers[0])
    return n.length === 1 ? n[0] : numbers[0]
    




}