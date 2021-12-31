let gameSession = true
const moves = ["rock", "paper", "scissors"]
let gameButtons = document.querySelectorAll(".game-btn")

const scores = document.querySelectorAll(".scoreBoard > div > p > span")
let humanScore = scores[0]
let cpuScore = scores[1]

const chosenMoves = document.querySelectorAll(".currentMove")
let humanMove = chosenMoves[0]
let cpuMove = chosenMoves[1]

let gameText = document.querySelector(".gameText")
let restartBtn = document.querySelector(".restart-btn")

gameButtons.forEach((btn, i) => {
	btn.addEventListener("click", () => playGame(moves[i]))
})

function restart(){
	gameSession = true
	scores.forEach((el) => el.textContent = "0")
	gameText.textContent = "Begin game!"
	chosenMoves.forEach(img => img.src = "")
	restartBtn.disabled = true
}

restartBtn.addEventListener("click", restart)

function playGame(yourMove){
	if (!gameSession) 
		return
	humanMove.src = `assets/${yourMove}.png`
	let cpuChosenMove = moves[Math.floor(Math.random() * 3)]
	cpuMove.src = `assets/${cpuChosenMove}.png`

	if (yourMove === cpuChosenMove){
		gameText.textContent = "It's a tie! No points awarded!"
		return
	}

	switch(yourMove){
		case "rock":
			if (cpuChosenMove === "scissors") {
				gameText.textContent = "Rock beats Scissors! Point to Human!"
				humanScore.textContent = Number(humanScore.textContent) + 1
			}
			else if (cpuChosenMove === "paper") {
				gameText.textContent = "Paper beats Rock! Point to CPU!"
				cpuScore.textContent = Number(cpuScore.textContent) + 1
			}
			break
		case "paper":
			if (cpuChosenMove === "rock") {
				gameText.textContent = "Paper beats Rock! Point to Human!"
				humanScore.textContent = Number(humanScore.textContent) + 1
			}
			else if (cpuChosenMove === "scissors") {
				gameText.textContent = "Scissors beats Paper! Point to CPU!"
				cpuScore.textContent = Number(cpuScore.textContent) + 1
			}
			break
		case "scissors":
			if (cpuChosenMove === "paper") {
				gameText.textContent = "Scissors beats Paper! Point to Human!"
				humanScore.textContent = Number(humanScore.textContent) + 1
			}
			else if (cpuChosenMove === "rock") {
				gameText.textContent = "Rock beats Scissors! Point to CPU!"
				cpuScore.textContent = Number(cpuScore.textContent) + 1
			}
			break
	}

	if (humanScore.textContent === "5"){
		gameText.textContent = "The game is over! Human wins!"
		gameSession = false
		restartBtn.disabled = false
	}
	else if (cpuScore.textContent === "5"){
		gameText.textContent = "The game is over! CPU wins!"
		gameSession = false
		restartBtn.disabled = false
	}
}