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
const towerBuilder = (nFloors: number): string[] => {
    const arr = [];
    let numMax = nFloors * 2 - 1;
    for (let i = 1; i <= nFloors; i++) {
        let str = "";
        for (let y = 0; y < nFloors; y++) {
            if (y < nFloors - i || y > nFloors - 1) {
                str += " "
            } else {
                str += "*"
            }
        }
        for (let x = nFloors; x < numMax; x++) {
            if (x > nFloors + i - 2) {
                str += " "
            } else {
                str += "*"
            }
        }
        arr.push(str)
    }
    return arr
}
towerBuilder(3)

// versione pro
/* The repeat() method of String values constructs 
and returns a new string which contains the specified number of copies of this string, concatenated together. 
Stars increment is always odd +=2, space incremente instead  is linear ++
*/
const towerBuilderII = (nFloors: number): string[] => {
    const tower = [];
    for (let i = 1, nStars = 1; i <= nFloors; i++, nStars += 2) {
      tower.push(" ".repeat(nFloors - i) + "*".repeat(nStars) + " ".repeat(nFloors - i));
    }
    return tower;
  }