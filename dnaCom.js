
let str = "GTAT";
const arr= []
for(let i = 0; i< str.length;i++){
    if(str[i]=== "T"){arr.push("A")}
    else if (str[i] === "A") { arr.push("T") }
    else if (str[i] === "C") { arr.push("G") }
    else  { arr.push("C") }
}




console.log(arr.join(""));

/*Versione pro: */ 

function DNAStrand(dna) {
    return dna.split('').map(function (v) { return pairs[v] }).join('');
}