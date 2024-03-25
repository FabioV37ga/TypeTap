
class Player {
    static jogador = document.querySelector(".player")
    static posicao = [600, 0]
    static direcao = ['none', 'none']
    static movimentacao = false;

    static habilitarMovimentacao() {
        Player.mover();
    }

    static desabilitarMovimentacao() {
        Player.parar();
    }

    static mover() {
        Player.movimentacao = true;
        var intervalo = setInterval(() => {
            if (Player.movimentacao == true) {
                // Eixo y
                if (Input.w == true && Input.s == false) {
                    Player.direcao[1] = 'up'
                    if (Player.podeMovimentarY())
                        Player.posicao[1]++
                }
                else if (Input.s == true && Input.w == false) {
                    Player.direcao[1] = 'down'
                    if (Player.podeMovimentarY())
                        Player.posicao[1]--
                }
                else {
                    Player.direcao[1] = 'none'
                }

                // Eixo X
                if (Input.a == true && Input.d == false) {
                    Player.direcao[0] = 'left'
                    if (Player.podeMovimentarX())
                        Player.posicao[0]--
                }
                else if (Input.d == true && Input.a == false) {
                    Player.direcao[0] = 'right'
                    if (Player.podeMovimentarX())
                        Player.posicao[0]++
                }
                else {
                    Player.direcao[0] = 'none'
                }

                if (Input.w || Input.a || Input.s || Input.d) {
                    Player.atualizarPosicao()
                }

            } else {
                clearInterval(intervalo)
            }
        }, 1);
    }

    static parar() {
        Player.movimentacao = false;
    }

    static podeMovimentarX() {
        var level = Level.LevelArray[Game.level]

        var direcaoJogadorX = Player.direcao[0];
        var posicaoJogadorX = Player.posicao[0];
        var posicaoJogadorY = Player.posicao[1];

        for (let i = 0; i <= level.paths.length - 1; i++) {

            var x1 = level.paths[i][0][0];
            var y1 = level.paths[i][0][1];
            var x2 = level.paths[i][1][0];
            var y2 = level.paths[i][1][1];

            if (direcaoJogadorX == 'right') {
                if (posicaoJogadorX + 1 <= x2 &&
                    posicaoJogadorX >= x1 &&
                    posicaoJogadorY >= y1 &&
                    posicaoJogadorY <= y2) {
                    return true
                }
            }
            else if (direcaoJogadorX == 'left') {
                if (posicaoJogadorX - 1 >= x1 &&
                    posicaoJogadorX <= x2 &&
                    posicaoJogadorY >= y1 &&
                    posicaoJogadorY <= y2) {
                    return true
                }
            }
        }
    }

    static podeMovimentarY() {

        var level = Level.LevelArray[Game.level]

        var posicaoJogadorX = Player.posicao[0];
        var direcaoJogadorY = Player.direcao[1];
        var posicaoJogadorY = Player.posicao[1];

        for (let i = 0; i <= level.paths.length - 1; i++) {

            var x1 = level.paths[i][0][0];
            var y1 = level.paths[i][0][1];
            var x2 = level.paths[i][1][0];
            var y2 = level.paths[i][1][1];

            if (direcaoJogadorY == 'up') {
                if (posicaoJogadorY + 1 <= y2 &&
                    posicaoJogadorY >= y1 &&
                    posicaoJogadorX >= x1 &&
                    posicaoJogadorX <= x2) {
                    return true
                }
            } else if (direcaoJogadorY == 'down') {
                if (posicaoJogadorY - 1 >= y1 &&
                    posicaoJogadorY <= y2 &&
                    posicaoJogadorX >= x1 &&
                    posicaoJogadorX <= x2) {
                    return true
                }
            }
        }
    }

    static atualizarPosicao() {
        Player.jogador.style = `left: ${Player.posicao[0]}px; bottom: ${Player.posicao[1]}px`
    }
}