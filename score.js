// Iteration 5: Store the player score and display it on the game over screen
const display_score = document.getElementById("score-board")
const plbtn = document.getElementById("play-again-button")

let score = localStorage.getItem("score")
display_score.innerText = score;

plbtn .onclick=()=>{
    location.href = 'game.html'
}