function printerError(s) {
    let count = 0;
    let sLen = s.length;
    s.split("").map((item)=>{
      if(item > "m"){
        count++
      }
    })
    return `${count}/${sLen}`
}

// with regex
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;