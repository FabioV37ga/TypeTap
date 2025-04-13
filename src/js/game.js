class Game {
    static ySize = 725
    static aliveKeyElements = Game.getAliveKeys()
    static aliveKeyObjects = []
    static aliveKeys = []
    static playing;
    static initialDelay = 600
    static hasChangedInterval = false;
    static score = 0;

    static startGame() {
        Game.playing = true;

        // Habilita clicks nas teclas
        document.querySelector("body").addEventListener("keydown", function (e) {
            if (Game.playing == true)
                Keys.pop(e.key)
        })

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
                Game.initialDelay > 100 ? Game.initialDelay -= 25 : Game.initialDelay -= 5
                console.log("lowering cooldown to " + Game.initialDelay)
                difficultyIndex = 0;
            }
        }, 1);

    }

    static getAliveKeys() {
        return document.querySelectorAll('.key')
    }

    static over() {
        Game.playing = false
    }
}