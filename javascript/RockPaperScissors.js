
const rps = (str1,str2) => {
    if (str1 === str2) { return "Draw!" }
    else if (str1 === "scissors" && str2 === "paper" || str1 === "rock" && str2 === "scissors" || str1 === "paper" && str2 === "rock") {
            return "Player 1 won!"
    }
    else {return "Player 2 won!"}
}