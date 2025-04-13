class Game {
    static ySize = 720
    static aliveKeyElements = Game.getAliveKeys()
    static aliveKeyObjects = []
    static aliveKeys = []
    static playing;

    static startGame() {
        Game.playing = true;
        var intervalo = setInterval(() => {
            if (Game.playing == true) {
                var novaKey = new Keys()
            } else {
                clearInterval(intervalo)
            }
        }, 1000);
    }

    static getAliveKeys() {
        return document.querySelectorAll('.key')
    }

    static buttonPress() {
        document.querySelector("body").addEventListener("keydown", function (e) {
            Keys.pop(e.key)
        })
    }

    static over() {
        Game.playing = false
    }
}