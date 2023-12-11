
/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

const incrementString = (str) => {
  const index = str.split("")
    .reverse()
    .map((item) => Number(item))
    .findIndex((c) => Number.isNaN(c))
  const cut = index !== -1 ? str.length - index : 0;
  let strNumber = str.substring(cut, str.length);
  const strChar = str.substring(0, cut)
  const strNumberLength = strNumber.length;
  strNumber = strNumberLength > 0 ? String(++strNumber) : "1";

  return `${strChar}${strNumber.padStart(strNumberLength,0)}`



};

console.log(incrementString("ciao"));