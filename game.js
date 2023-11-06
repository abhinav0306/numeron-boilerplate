const greater = document.getElementById("greater-than")
const equal = document.getElementById("equal-to")
const lesser = document.getElementById("lesser-than")
const timer = document.getElementById("timer")
// Iteration 2: Generate 2 random number and display it on the screen
function generateRandom(){
    num1 = Math.round(Math.random()*100)
    num2 = Math.round(Math.random()*100)
    
    number1.innerText = num1
    number2.innerText = num2
}
generateRandom();
startTimer();
// Iteration 3: Make the options button functional
let score =0;
greater.onclick = ()=>{
    if(num1<=num2){
        location.href = 'gameover.html'
    }
    else{
        score++
        resetTimer(timerID)
        // localStorage.clear
        // localStorage.setItem("score",score);
        generateRandom();
    } 
}
equal.onclick = ()=>{
    if(num1 != num2){
        location.href = 'gameover.html'
    } else{
        score++
        resetTimer(timerID)
        // localStorage.clear
        // localStorage.setItem("score",score);
        generateRandom();
    }XMLDocument
}
lesser.onclick = ()=>{
    if(num1>=num2){
        location.href = 'gameover.html'
    } else{
        score++
        // localStorage.clear
        // localStorage.setItem("score",score);
        resetTimer(timerID)
        generateRandom();
    }
}
// Iteration 4: Build a timer for the game
var timerID;
function startTimer(){
    var time = 5;
    timer.innerText = time;
    timerID = setInterval(()=>{
        time--;
        localStorage.setItem("score",score)
        if(time ==0){
            location.href = 'gameover.html'
        }
        else{
            timer.innerText = time
        }
    },1000)
}
function resetTimer(intervalid){
    clearInterval(intervalid)
    startTimer();
}