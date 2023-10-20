/*In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 50
 new inhabitants per year come to live in the town. How many years does 
 the town need to see its population greater or equal to p = 1200 inhabitants? */

const nbYear = (initialP, percent, aug, p) => {

    let count = 0;
    percent = percent / 100;



    while (initialP <= p) {
        initialP = initialP + parseInt(initialP * percent + aug);
        count++
    }


    return count

}

console.log(nbYear(1500000, 0.25, 1000, 2000000));