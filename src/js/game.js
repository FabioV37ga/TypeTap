class Game {
    static ySize = 725
    static aliveKeyElements = Game.getAliveKeys()
    static aliveKeyObjects = []
    static aliveKeys = []
    static playing;
    static initialDelay;
    static hasChangedInterval = false;
    static score = 0;
    static lives;

    static scoreSound = new Audio('src/sound/score.mp3')
    static hurtSound = new Audio('src/sound/hurt.mp3')
    static overSound = new Audio('src/sound/gameover.mp3')

    static startGame() {
        Game.scoreSound.volume = 0.3
        Game.hurtSound.volume = 0.3
        Game.overSound.volume = 0.3

        Game.scoreSound.play()
        Game.lives = 3;
        Game.playing = true;
        Game.initialDelay = 600;

        // Habilita clicks nas teclas
        var body = document.querySelector("body")
        if (!body.classList.contains("hasClickEvent"))
            body.addEventListener("keydown", function (e) {
                if (Game.playing == true)
                    Keys.pop(e.key.toLowerCase())
            })
        body.classList.add('hasClickEvent')

        var elementosInfo = document.querySelectorAll('.popHeart')
        for (let i = 0; i <= elementosInfo.length - 1; i++) {
            elementosInfo[i].classList.remove("popHeart")
        }

        var score = document.querySelector(".score-container")
        score.style.display = 'flex'

        document.querySelector(".lives").style.display = 'flex'

        var difficultyIndex = 0;
        var spawnCooldown = 0
        var intervalo = setInterval(() => {
            difficultyIndex++
            spawnCooldown++
            // console.log(spawnCooldown)

            if (spawnCooldown >= Game.initialDelay) {
                console.log("spawning")
                var newKey = new Keys()
                spawnCooldown = 0
            }

            if (difficultyIndex >= 1200) {
                // spawnCooldown = 0
                if (Game.initialDelay > 65)
                    Game.initialDelay > 100 ? Game.initialDelay -= 25 : Game.initialDelay -= 5
                console.log("lowering cooldown to " + Game.initialDelay)
                difficultyIndex = 0;
            }

            if (Game.playing == false) {
                clearInterval(intervalo)
            }
        }, 1);

    }

    static getAliveKeys() {
        return document.querySelectorAll('.key')
    }

    static over() {
        Game.playSound("gameover")
        document.querySelector(".gameOver-score").textContent = `score: ${String(Game.score).padStart(2, '0')}`
        if (localStorage.getItem("TT-score")) {
            if (Game.score > localStorage.getItem("TT-score")) {
                localStorage.setItem("TT-score", Game.score)
            }
        } else {
            localStorage.setItem("TT-score", Game.score)
        }

        Game.playing = false
        var keys = this.getAliveKeys()
        for (let i = 0; i <= keys.length - 1; i++) {
            var random = Math.floor(Math.random() * 100);
            console.log(random)
            if (random % 2 == 0) {
                keys[i].classList.add('fallRight')
            } else {
                keys[i].classList.add('fallLeft')
            }
        }
        setTimeout(() => {
            for (let i = 0; i <= keys.length - 1; i++) {
                keys[i].remove()
            }
        }, 801);

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

        setTimeout(() => {
            document.querySelector('.gameOver').style.display = 'flex'
        }, 750);

        var coracoes = document.querySelectorAll('.heart')
        for (let i = 0; i <= coracoes.length - 1; i++) {
            if (!coracoes[i].classList.contains("popHeart")) {
                coracoes[i].classList.add("popHeart")
            }
        }

        var score = document.querySelector(".score-container").classList.add("popHeart")
    }

    static hurt() {
        Game.lives--
        Game.playSound("hurt")
        console.log(document.querySelectorAll(".heart")[Game.lives])
        document.querySelectorAll(".heart")[Game.lives].classList.add('popHeart')

        if (Game.lives == 0) {
            Game.over()
        }
        console.log(Game.lives)
    }

    static addScore() {
        Game.score++
        Game.playSound("score")
        var score = document.querySelector(".score-container .score").textContent = String(Game.score).padStart(2, '0')
    }

    static playSound(sound) {
        switch (sound) {
            case "score":
                Game.scoreSound.play()
                break;
            case "hurt":
                Game.hurtSound.play()
                break;
            case "gameover":
                Game.overSound.play()
                break;
        }
    }
}