function disemvowel(str) {
    const re = /[aeiou]/ig;
    return str.replace(re, "");
}