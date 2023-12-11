const divNum = (a:number,b:number) => {
    let max:number;
    let maxValue:number;
    for(let i=a;a<=b;i++){
        let count = 0;



        for(let j = 0; j * j === i; j++){
            if(i%j===0){count++}
        }
        
    }
}