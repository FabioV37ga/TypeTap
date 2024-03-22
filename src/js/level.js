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

var inicio = new Level(0, [[[0, 0], [485, 750]], [[485, 200], [800, 600]], [[800, 0], [1030, 350]], [[800, 520], [1230, 750]]])