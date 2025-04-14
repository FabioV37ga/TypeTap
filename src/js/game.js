class Game {
    static ySize = 725
    static aliveKeyObjects = []
    static aliveKeys = []
    static playing;
    static initialDelay;
    static score = 0;
    static lives;

    static scoreSound = Object.assign(new Audio('src/sound/score.mp3'), { volume: 0.3 });
    static hurtSound = Object.assign(new Audio('src/sound/hurt.mp3'), { volume: 0.3 });
    static overSound = Object.assign(new Audio('src/sound/gameover.mp3'), { volume: 0.3 });

    // Método responsável por iniciar o jogo
    static startGame() {
        Game.playing = true;

        Game.scoreSound.play()

        Game.score = 0;
        Game.lives = 3;

        document.querySelector(".score-container .score").textContent = '00'

        // Habilita clicks nas teclas
        var body = document.querySelector("body")
        if (!body.classList.contains("hasClickEvent"))
            body.addEventListener("keydown", function (e) {
                if (Game.playing == true)
                    Keys.pop(e.key.toLowerCase())
            })
        body.classList.add('hasClickEvent')

        // Mostra os corações
        var elementosInfo = document.querySelectorAll('.popHeart')
        for (let i = 0; i <= elementosInfo.length - 1; i++) {
            elementosInfo[i].classList.remove("popHeart")
        }

        // Mostra o indicador de pontuação
        Game.initialDelay = 600;

        var score = document.querySelector(".score-container")
        score.style.display = 'flex'
        document.querySelector(".lives").style.display = 'flex'

        // Função responsável por aumentar a dificuldade do jogo conforme o tempo passa
        var difficultyIndex = 0;
        var spawnCooldown = 0
        var intervalo = setInterval(() => {

            difficultyIndex++
            spawnCooldown++

            if (spawnCooldown >= Game.initialDelay) {
                var newKey = new Keys()
                spawnCooldown = 0
            }

            if (difficultyIndex >= 1200) {
                difficultyIndex = 0;

                if (Game.initialDelay > 65)
                    Game.initialDelay > 100 ? Game.initialDelay -= 25 : Game.initialDelay -= 5
            }

            if (Game.playing == false) {
                clearInterval(intervalo)
            }
        }, 1);

    }

    static getAliveKeys() {
        return document.querySelectorAll('.key')
    }

    // Método responsável por finalizar o jogo
    static over() {
        Game.playing = false

        // Toca som de game over
        Game.playSound("gameover")

        // Define o texto do score da rodada jogada
        document.querySelector(".gameOver-score").textContent = `score: ${String(Game.score).padStart(2, '0')}`

        if (localStorage.getItem("TT-score")) {

            if (Game.score > localStorage.getItem("TT-score")) {

                localStorage.setItem("TT-score", Game.score)
            }
        } else {

            localStorage.setItem("TT-score", Game.score)
        }

        // Adiciona animação as keys restantes para remove-las da tela
        var keys = this.getAliveKeys()

        for (let i = 0; i <= keys.length - 1; i++) {

            var random = Math.floor(Math.random() * 100);

            if (random % 2 == 0) {
                keys[i].classList.add('fallRight')
            } else {
                keys[i].classList.add('fallLeft')
            }
        }

        // Remove os elementos das keys depois de 800ms
        setTimeout(() => {
            for (let i = 0; i <= keys.length - 1; i++) {
                keys[i].remove()
            }
        }, 801);

        // Pisca o background da cor branca, e volta para a cor preta
        var r = 255;
        var g = 255;
        var b = 255;

        var popBackground = setInterval(() => {
            r -= 5;
            g -= 5;
            b -= 5;
            document.querySelector(".game").style.background = `rgb(${r} ${g} ${b})`
            if (r == 0) {
                clearInterval(popBackground)
            }
        }, 1);

        // Mostra mensagem de game-over
        setTimeout(() => {
            document.querySelector('.gameOver').style.display = 'flex'
        }, 750);

        // Esconde os corações
        var coracoes = document.querySelectorAll('.heart')

        for (let i = 0; i <= coracoes.length - 1; i++) {

            if (!coracoes[i].classList.contains("popHeart")) {
                coracoes[i].classList.add("popHeart")
            }
        }

        // Esconde o indicador de pontuação
        var score = document.querySelector(".score-container").classList.add("popHeart")
    }

    // Método responsável por perder 1 coração
    static hurt() {
        Game.lives--

        // Toca som de hurt
        Game.playSound("hurt")

        // Remove um coração
        document.querySelectorAll(".heart")[Game.lives].classList.add('popHeart')

        // Se as vidas zerarem, finaliza a rodada
        if (Game.lives == 0) {
            Game.over()
        }
    }

    // Método responsável por pontuar
    static addScore() {
        Game.score++
        Game.playSound("score")
        document.querySelector(".score-container .score").textContent = String(Game.score).padStart(2, '0')
    }

    // Método responsável por tocar sons do jogo
    static playSound(sound) {
        switch (sound) {
            case "score":
                Game.scoreSound.play()
                if (Game.scoreSound.currentTime > 0) {
                    Game.scoreSound.currentTime = 0
                }
                break;
            case "hurt":
                Game.hurtSound.play()
                if (Game.hurtSound.currentTime > 0) {
                    Game.hurtSound.currentTime = 0
                }
                break;
            case "gameover":
                Game.overSound.play()
                if (Game.overSound.currentTime > 0) {
                    Game.overSound.currentTime = 0
                }
                break;
        }
    }
}