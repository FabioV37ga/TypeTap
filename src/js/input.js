class Input {
    static w = false;
    static a = false;
    static s = false;
    static d = false;

    static adicionar(type, func) {
        document.querySelector("body").addEventListener(type, func);
    }

    static bindMovimentacao() {
        // W [↓]
        Input.adicionar('keydown', function (event) {
            event.key.toString().toLowerCase() == 'w' ?
                (Input.w != true ?
                    (Input.w = true) :
                    null) :
                null
        })
        // W [↑]
        Input.adicionar('keyup', function (event) {
            event.key.toString().toLowerCase() == 'w' ?
                (Input.w = false) :
                null
        })

        // A[↓]
        Input.adicionar('keydown', function (event) {
            event.key.toString().toLowerCase() == 'a' ?
                (Input.a != true ?
                    (Input.a = true) :
                    null) :
                null
        })
        // A[↑]
        Input.adicionar('keyup', function (event) {
            event.key.toString().toLowerCase() == 'a' ?
                (Input.a = false) :
                null
        })

        // S[↓]
        Input.adicionar('keydown', function (event) {
            event.key.toString().toLowerCase() == 's' ?
                (Input.s != true ?
                    (Input.s = true) :
                    null) :
                null
        })
        // S[↑]
        Input.adicionar('keyup', function (event) {
            event.key.toString().toLowerCase() == 's' ?
                (Input.s = false) :
                null
        })

        // D[↓]
        Input.adicionar('keydown', function (event) {
            event.key.toString().toLowerCase() == 'd' ?
                (Input.d != true ?
                    (Input.d = true) :
                    null) :
                null
        })
        // D[↑]
        Input.adicionar('keyup', function (event) {
            event.key.toString().toLowerCase() == 'd' ?
                (Input.d = false) :
                null
        })
    }
}