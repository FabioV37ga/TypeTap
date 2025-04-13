// Game.startGame()
document.querySelector(".home-startGame").addEventListener("click", () => {
    document.querySelector(".home").style.display = 'none'
    Game.startGame()
})

document.querySelector(".gameOver-playAgain").addEventListener("click", () => {
    document.querySelector(".gameOver").style.display = 'none'
    Game.startGame()
})

var homeScore = document.querySelector(".home-score");
setHomeScore()
function setHomeScore() {
    if (localStorage.getItem("TT-score")) {
        homeScore.textContent = `Max score:  ${String(localStorage.getItem("TT-score")).padStart(2, '0')}`
    }
}

document.querySelector(".gameOver-home").addEventListener("click", () => {
    setHomeScore()
    document.querySelector(".gameOver").classList.add('fadeOut')
    setTimeout(() => {
        document.querySelector(".gameOver").style.display = 'none'
        document.querySelector(".gameOver").classList.remove('fadeOut')
        document.querySelector(".home").style.display = 'flex'
    }, 500);
}) 