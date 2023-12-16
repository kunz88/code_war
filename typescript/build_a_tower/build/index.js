"use strict";
/* Build a pyramid-shaped tower, as an array/list of strings, given a positive
integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:
[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
*/
const towerBuilder = (nFloors) => {
    const arr = [];
    let numMax = nFloors * 2 - 1;
    for (let i = 1; i <= nFloors; i++) {
        let str = "";
        for (let y = 0; y < nFloors; y++) {
            if (y < nFloors - i || y > nFloors - 1) {
                str += " ";
            }
            else {
                str += "*";
            }
        }
        for (let x = nFloors; x < numMax; x++) {
            if (x > nFloors + i - 2) {
                str += " ";
            }
            else {
                str += "*";
            }
        }
        arr.push(str);
    }
    console.log(arr);
    return [];
};
towerBuilder(3);
