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
    [[576, 0], [710, 760]],
    [[710, 298], [1173, 420]],
    [[1173, 298], [1240, 435]],
    // [[1173, 420], [1240, 425]],
    [[975, 286], [1068, 298]],
    [[720, 0], [1240, 286]]
])

for (let i = 0; i <= inicio.paths.length - 1; i++) {
    var boundarie = new Boundarie(inicio.paths[i][0], inicio.paths[i][1], 'path')
}

