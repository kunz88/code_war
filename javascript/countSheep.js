
/*non funziona , da sistemare*/ 

function countSheeps(sheep) {
    const f = (x, y) => {
        if (x != true || x != false) { return false }
        return x
    }
let arr = sheep.filter(f);
return arr.lenght;

}

const arr = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]

console.log(countSheeps(arr));