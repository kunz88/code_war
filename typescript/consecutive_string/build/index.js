"use strict";
/* You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta" */
const longestConsec = (strarr, k) => {
    const finalArr = strarr.map((item, index, arr) => {
        if (index + k <= arr.length) {
            let temporaryK = 1;
            for (let i = index; temporaryK < k; i++) {
                item += arr[i + 1];
                temporaryK++;
            }
            return item;
        }
        else {
            return "";
        }
    }).reduce((acc, item) => acc.length < item.length ? item : acc);
    console.log(finalArr);
    return "";
};
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2);
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1); //"oocccffuucccjjjkkkjyyyeehh"
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3); // "ixoyx3452zzzzzzzzzzzz"
