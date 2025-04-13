class Keys {
    static container = document.querySelector(".keyContainer")
    static _id = 0;
    static keyArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
    spawner;
    elemento;
    key;
    id;
    yCoord;
    speed;
    isAlive;

    constructor() {
        // Define id, e incrementa identificador unico
        this.id = Keys._id;
        Keys._id++;

        // Define velocidade a partir da dificultade
        this.speed = 1;
        // Chama método para criar elemento relacionado a key
        this.spawn()

        Game.aliveKeyObjects.push(this)
        Game.aliveKeys.push(this.elemento)
    }

    spawn() {

        // Marca key como viva
        this.isAlive = true;

        // Gera o caracter da key
        this.key = Keys.keyArray[Math.floor(Math.random() * 25)]
        // this.key = 'd'
        // Cria elemento relacionado a instância de keys
        this.spawner = Math.floor(Math.random() * 33)

        // Log
        // console.log(`Key spawned at ${this.spawner} (${this.spawner + 1}º)`)

        // Elemento com informações da key
        var elemento = `<div class="key" value="${this.id}" key="${this.key}">
        ${this.key}
        <div class="dotA">.</div>
        <div class="dotB">.</div>
        <div class="dotC">.</div>
        </div>`
        // Cria elemento
        $(".keySpawner").eq(this.spawner).append(elemento)

        // Relaciona key criada com o atributo Keys.elemento a partir do value
        var keysElements = document.querySelectorAll(".key")
        for (let i = 0; i <= keysElements.length - 1; i++) {
            if (keysElements[i].getAttribute("value") == this.id) {
                this.elemento = document.querySelectorAll(".key")[i]
            }
        }

        // console.log(this.elemento)
        // Habilita queda
        this.fall(this.key)
    }

    fall(key) {

        // console.log(`Chave '${this.key}', do container ${this.spawner} caindo.`)
        this.yCoord = 0;
        const self = this;
        var intervalo = setInterval(() => {

            this.yCoord += this.speed;
            this.elemento.style.top = `${this.yCoord}px`;

            if (this.yCoord >= 720)
                Game.over()

            // console.log(this.yCoord)
            if (this.isAlive == true) {
                if (this.yCoord >= 720)
                    // Game.over()
                    clearInterval(intervalo)
            } else {
                // Game.over()
                clearInterval(intervalo)
            }

        }, 1);
        this.elemento
    }

    static pop(key) {
        var keys = Game.getAliveKeys()
        var duplicate = [];
        var duplicateIds = [];

        for (let i = 0; i <= keys.length - 1; i++) {
            // console.log(keys[i].textContent)
            if (keys[i].getAttribute("key") == key) {
                duplicate.push(keys[i])
                break;
            }
        }

        for (let i = 0; i <= keys.length - 1; i++) {
            if (keys[i].getAttribute("key") == key) {
                duplicateIds.push(keys[i].getAttribute('value'))
            }
        }

        var lowestDuplicate = duplicateIds.sort((a, b) => a - b);

        var target;
        for (let i = 0; i <= keys.length - 1; i++) {
            if (keys[i].getAttribute('value') == lowestDuplicate[0])
                target = keys[i]
        }
        target.remove()

        var index = Game.aliveKeys.indexOf(target)
        Game.aliveKeys.splice(index, 1)
        Game.aliveKeyObjects[index].isAlive = false
        Game.aliveKeyObjects.splice(index, 1)
    }
}