function solution(str, ending) {
    return str.lastIndexOf(ending) + ending.length === str.length  ? true : false;
}

console.log(solution('samurai', 'ai'))