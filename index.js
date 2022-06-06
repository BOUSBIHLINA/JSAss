
let computerImputs = ["paper", "rock", "scissors"]
let computerScore=0
let playerScore=0



function computerPlay() {
    let n = Math.floor(Math.random() * 3)
    console.log(computerImputs[n])
    return (computerImputs[n])
}



function playRound(playerSection, ComputerSection) {

    playerSection = window.prompt("Paper,Rock or Scissors ?")
    playerSection = playerSection.toLowerCase()
    ComputerSection = computerPlay()

    if (playerSection === "rock" && ComputerSection === "scissors") {
        console.log("You win! ",playerSection," beats ",ComputerSection)
        playerScore++
    }

    if (playerSection === "scissors" && ComputerSection === "paper") {
        console.log("You win! ",playerSection," beats ",ComputerSection)
        playerScore++
    }

    if (playerSection === "paper" && ComputerSection === "rock") {
        console.log("You win! ",playerSection," beats ",ComputerSection)
        playerScore++
    }

    if (playerSection ===  ComputerSection ) {
        console.log("You're even!")
    }

    if (ComputerSection === "rock" && playerSection === "scissors") {
        console.log("You lose! ",ComputerSection," beats ",playerSection)
        computerScore++
    }

    if (ComputerSection === "scissors" && playerSection === "paper") {
        console.log("You lose! ",ComputerSection," beats ",playerSection)
        computerScore++
    }

    if (ComputerSection === "paper" && playerSection === "rock") {
        console.log("You lose! ",ComputerSection," beats ",playerSection)
        computerScore++
    }
}

function playGame(){
    for(let i=0;i<5;i++){
        playRound()
    }
    if(computerScore>playerScore){
        console.log("The computer has won the final game!")
    }
    if(computerScore<playerScore){
        console.log("You have won the final game!")
    }
    else("You're even")
}

