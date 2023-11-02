const toAcronym = (str) =>{
    return str.split(" ").map((item) => item.splice(0,1).toUpperCase()).join("")
}