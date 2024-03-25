class Level {
    static LevelArray = Level.LevelArray ? Level.LevelArray : [];
    id;
    paths;
    interactions;

    constructor(id, paths) {
        this.id = id;
        this.paths = paths;

        this.listar()
    }

    listar() {
        var objeto =
        {
            "id": this.id,
            "paths": this.paths
        };

        Level.LevelArray.push(objeto)
    }
}

var inicio = new Level(0, [
    //A(x¹,y¹) , B(x²,y²)
    [[576, 0], [700, 750]],
    [[700, 292], [1230, 410]],
    [[1173, 410], [1230, 425]],
    [[720, 0], [1230, 286]],
    [[975, 285], [1060, 310]]
])

for (let i = 0; i <= inicio.paths.length - 1; i++) {
    var boundarie = new Boundarie(inicio.paths[i][0], inicio.paths[i][1], 'path')
}

