let str = "cbucoevq";
    str = str.toLowerCase();
    let count = 0;
    for(let i=0 ; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" )
        count ++;
        console.log(count);
    }
/*Versione Pro: conta tutte le vocali in una stringa */

function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

/*The match() method of String values retrieves the result of matching this string against a regular expression.*/ 