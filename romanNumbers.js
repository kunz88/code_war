/*Create a function taking a positive integer
 between 1 and 3999(both included) as its parameter 
 and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with 
the left most digit and skipping any digit with a value of zero.In Roman numerals 
1990 is rendered: 1000 = M, 900 = CM, 90 = XC; resulting in MCMXC. 2008 is written 
as 2000=MM, 8 = VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.*/

/* Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.
*/

const romanEncoder = (value) => {
    if (value <= 0 || value > 3999) { return "value incorrect" }
    const unit = {
        one: "I",
        four: "IV",
        five: "V",
        nine: "IX"
    }
    const tens = {
        one: "X",
        four: "XL",
        five: "L",
        nine: "XC"
    }
    const hundreds = {
        one: "C",
        four: "CD",
        five: "D",
        nine: "CM"
    }
    const thousand = {
        one: "M",
    }
    let temp;

    return String(value).split("").reverse().map((item=> Number(item))).map((item, index) => {
        if (index === 0) {temp = unit;}
        else if(index === 1) {temp = tens}
        else if(index === 2) {temp = hundreds}
        else  {temp = thousand}

        if (item > 0 && item <= 3) {
            let val = item;
            item = "";
            for (let i = 0; i < val; i++) {
                item += temp.one;
            }
            return item
        } else if (item === 4) {
            return temp.four
        } else if (item === 5) {
            return temp.five
        } else if (item > 5 && item <= 8) {
            let val = item;
            item = temp.five
            for (let i = 5; i < val; i++) {
                item += temp.one
            }
            return item
        } else if (item === 9) {
            return temp.nine
        } else {
            return item
        }
    }
    ).reverse().join("").replaceAll("0", "")
}

console.log(romanEncoder(4))



//Versione pro
function romanEncoderII(number) {
    let result = '';
    const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    decimals.map(function (value, index) {
        while (number >= value) {
            result += roman[index];
            number -= value;
        }
    });

    return result;
}