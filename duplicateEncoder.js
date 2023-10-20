/**
 * 
"Din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  

The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only 
once in the original string, or ")" if that character appears more than 
once in the original string. Ignore capitalization when determining if a c
haracter is a duplicate.


non funziona!!!!!!!!
*/

const encoders = (str) => {
    
    const f = (acc,item) => {
        
        if (!acc.includes(item)) {
            acc.push(")");
        }
        return acc.push("(");

    }
    const arr = str.split("").reduce(f,[]);
    return arr.join("")
}
console.log(encoders("Success"));