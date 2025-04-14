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

        // Cria elemento relacionado a instância de keys
        this.spawner = Math.floor(Math.random() * 33)


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

        // Habilita queda
        this.fall(this.key)
    }

    fall(key) {
        const self = this;

        // Inicializa altura
        this.yCoord = 0;

        // Intervalo responsavel por animar queda
        var intervalo = setInterval(() => {

            // Incrementa this.speed na altura
            this.yCoord += this.speed;
            // Aplica estilização
            this.elemento.style.top = `${this.yCoord}px`;

            // Se a tecla tocar no chão finaliza o jogo
            if (this.yCoord >= Game.ySize)
                Game.over()

            if (this.isAlive == true) {

                // Limpa intervalo reponsavel por animar queda se key tocar no chão
                if (this.yCoord >= Game.ySize)
                    clearInterval(intervalo)

            } else {
                // Limpa intervalo se key for digitada
                clearInterval(intervalo)
            }

            // Se o jogo for finalizado, limpa intervalo
            if (Game.playing == false) {
                clearInterval(intervalo)
            }

        }, 1);
    }

    // Método responsável por contabilizar os clicks do jogador. Remove key ou perde vida.
    static pop(key) {
        // Armazena em keys as keys presentes na tela
        var keys = Game.getAliveKeys()
        // Inicializa lista de itens duplicados
        var duplicate = [];
        // Inicializa lista de IDS de itens duplicados
        var duplicateIds = [];

        // Loop responsável por listar keys duplicadas na tela
        for (let i = 0; i <= keys.length - 1; i++) {

            if (keys[i].getAttribute("key") == key) {
                duplicate.push(keys[i])
                break;
            }
        }

        // Loop responsável por listar os VALUES das keys duplicadas
        for (let i = 0; i <= keys.length - 1; i++) {

            if (keys[i].getAttribute("key") == key) {
                duplicateIds.push(keys[i].getAttribute('value'))
            }
        }

        // Lista ordenada pelos VALUES (menor-maior) das keys duplicadas
        var lowestDuplicate = duplicateIds.sort((a, b) => a - b);

        // Inicializa target (key a ser removida)
        var target;

        // armazena em target a key com VALUE mais baixo (key mais proxima do chão)
        for (let i = 0; i <= keys.length - 1; i++) {
            if (keys[i].getAttribute('value') == lowestDuplicate[0])
                target = keys[i]
        }

        // Se houver target...
        if (target) {
            // Adiciona pontuação
            Game.addScore()
            // Remove elemento relacionado a key target
            target.remove()

            // Relaciona em index a instancia da key target no atributo Game.aliveKeys
            var index = Game.aliveKeys.indexOf(target)

            // Marca isAlive da key target como false
            Game.aliveKeyObjects[index].isAlive = false
            // Remove key target do atributo Game.aliveKeys
            Game.aliveKeys.splice(index, 1)
            // Remove a instancia da key target do atributo Game.aliveKeyObjects
            Game.aliveKeyObjects.splice(index, 1)
        } else {
            // Se não houver target... (tecla errada pressionada - não presente na tela)
            for (let i = 0; i <= Keys.keyArray.length - 1; i++) {
                // Verifica se tecla pressionada é uma tecla valida (caracteres de A-Z)
                if (Keys.keyArray[i] == key) {
                    // Tira 1 de vida
                    Game.hurt()
                    break
                }
            }
        }
    }
}