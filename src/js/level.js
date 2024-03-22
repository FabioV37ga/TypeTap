Player.habilitarMovimentacao()

class Level {
    static LevelArray = Level.LevelArray ? Level.LevelArray : [];
    id;
    boundaries;

    constructor(id, boundaries) {
        this.id = id;
        this.boundaries = boundaries;

        this.listar()
    }

    listar() {
        var objeto =
        {
            "id": this.id,
            "boundaries": this.boundaries
        };

        Level.LevelArray.push(objeto)
    }
}

var inicio = new Level(0, [
    //A(x¹,y²) , B(x¹,y²)
    [[0, 0], [485, 750]],
    [[485, 200], [800, 600]],
    [[800, 0], [1030, 350]],
    [[485, 70], [800, 145]],
    [[900, 350], [975, 720]],
    [[485, 675], [975, 720]]
])
for (let i = 0; i <= inicio.boundaries.length - 1; i++) {
    var boundarie = new Boundarie(inicio.boundaries[i][0], inicio.boundaries[i][1])
}