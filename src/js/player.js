
class Player {
    static jogador = document.querySelector(".player")
    static posicao = [0, 0]
    static direcao = [0, 0]
    static habilitarMovimentacao() {
        Input.bindMovimentacao()
        Player.mover()
    }

    static mover() {
        var intervalo = setInterval(() => {
            // Eixo y
            if (Input.w == true && Input.s == false) {
                // console.log("↑")
                // Se player.posicao dentro de fase.limitacoes
                Player.direcao[1] = 1
                if (Player.podeMovimentarY())
                    Player.posicao[1]++
            }
            else if (Input.s == true && Input.w == false) {
                // console.log("↓")
                Player.direcao[1] = 2
                if (Player.podeMovimentarY())
                    Player.posicao[1]--
            }
            else {
                Player.direcao[1] = 0
            }

            // Eixo X
            if (Input.a == true && Input.d == false) {
                // console.log("←")
                Player.direcao[0] = 2
                if (Player.podeMovimentarX())
                    Player.posicao[0]--
            }
            else if (Input.d == true && Input.a == false) {
                // console.log("→")
                Player.direcao[0] = 1
                if (Player.podeMovimentarX())
                    Player.posicao[0]++

            }
            else {
                Player.direcao[0] = 0
            }

            if (Input.w || Input.a || Input.s || Input.d) {
                Player.atualizarPosicao()
                // console.log(Player.direcao)
            }
        }, 1);
    }

    static podeMovimentarX() {
        var allowX = false;
        var level = Level.LevelArray[Game.level]
        for (let i = 0; i <= level.boundaries.length - 1; i++) {
            if (Player.direcao[0] == 1) {
                if (Player.posicao[0] + 1 <= level.boundaries[i][1][0] &&
                    Player.posicao[0] >= level.boundaries[i][0][0]) {
                    if (Player.posicao[1] >= level.boundaries[i][0][1] &&
                        Player.posicao[1] <= level.boundaries[i][1][1])
                        allowX = true;
                }
            }
            else if (Player.direcao[0] == 2)
                if (Player.posicao[0] - 1 >= level.boundaries[i][0][0] &&
                    Player.posicao[0] <= level.boundaries[i][1][0]) {
                    if (Player.posicao[1] >= level.boundaries[i][0][1] &&
                        Player.posicao[1] <= level.boundaries[i][1][1])
                        allowX = true;
                }
        }
        return allowX;
    }

    static podeMovimentarY() {
        var allowY = false;
        var level = Level.LevelArray[Game.level]
        for (let i = 0; i <= level.boundaries.length - 1; i++) {
            if (Player.direcao[1] == 1) {
                if (Player.posicao[1] + 1 <= level.boundaries[i][1][1] &&
                    Player.posicao[1] >= level.boundaries[i][0][1]) {
                    if (Player.posicao[0] >= level.boundaries[i][0][0] &&
                        Player.posicao[0] <= level.boundaries[i][1][0])
                        allowY = true;
                }
            } else if (Player.direcao[1] == 2) {
                if (Player.posicao[1] - 1 >= level.boundaries[i][0][1] &&
                    Player.posicao[1] <= level.boundaries[i][1][1]) {
                    if (Player.posicao[0] >= level.boundaries[i][0][0] &&
                        Player.posicao[0] <= level.boundaries[i][1][0])
                        allowY = true;
                }
            }
        }
        return allowY
    }

    static atualizarPosicao() {
        Player.jogador.style = `left: ${Player.posicao[0]}px; bottom: ${Player.posicao[1]}px`
    }
}