class Level {
    static LevelArray = Level.LevelArray ? Level.LevelArray : [];
    id;
    boundaries;
    interactions;

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
    //A(x¹,y¹) , B(x²,y²)
    [[576, 0], [700, 750]],
    [[700, 292], [1230, 430]],
    [[720, 0], [1230, 286]],
    [[975, 285], [1060, 310]]
])

for (let i = 0; i <= inicio.boundaries.length - 1; i++) {
    var boundarie = new Boundarie(inicio.boundaries[i][0], inicio.boundaries[i][1], 'path')
}

