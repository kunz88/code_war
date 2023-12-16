
/* Un triangolo esiste se : 𝑎 < 𝑏 + 𝑐 𝐴𝑁𝐷 𝑏 < 𝑎 + 𝑐 𝐴𝑁𝐷 𝑐 < 𝑎 + b*/



const isTriangle = (a,b,c) => {

    return a<b+c && b<a+c && c<a+b;
    
}