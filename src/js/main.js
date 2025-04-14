// Game.startGame()

// Adiciona função para iniciar o jogo no botão "Start", da página inicial.
document.querySelector(".home-startGame").addEventListener("click", () => {
    document.querySelector(".home").style.display = 'none'
    Game.startGame()
})

// Adicinoa função para reiniciar o jogo no botão "Restart", na página de game over
document.querySelector(".gameOver-playAgain").addEventListener("click", () => {
    document.querySelector(".gameOver").style.display = 'none'
    Game.startGame()
})

// Função responsável por marcar o Recorde de pontos do jogador na página inicial
var homeScore = document.querySelector(".home-score");
setHomeScore()
function setHomeScore() {
    if (localStorage.getItem("TT-score")) {
        homeScore.textContent = `Max score:  ${String(localStorage.getItem("TT-score")).padStart(2, '0')}`
    }
}

// Adiciona função para voltar à pagina inicial quando clicar no botão "home" na página de game over
document.querySelector(".gameOver-home").addEventListener("click", () => {
    setHomeScore()
    document.querySelector(".gameOver").classList.add('fadeOut')
    setTimeout(() => {
        document.querySelector(".gameOver").style.display = 'none'
        document.querySelector(".gameOver").classList.remove('fadeOut')
        document.querySelector(".home").style.display = 'flex'
    }, 500);
}) 