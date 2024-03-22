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
                    (Input.w = true) + console.log('w ' + Input.w) :
                    null) :
                null
        })
        // W [↑]
        Input.adicionar('keyup', function (event) {
            event.key.toString().toLowerCase() == 'w' ?
                (Input.w = false) + console.log('w ' + Input.w) :
                null
        })

        // A[↓]
        Input.adicionar('keydown', function (event) {
            event.key.toString().toLowerCase() == 'a' ?
                (Input.a != true ?
                    (Input.a = true) + console.log('a ' + Input.a) :
                    null) :
                null
        })
        // A[↑]
        Input.adicionar('keyup', function (event) {
            event.key.toString().toLowerCase() == 'a' ?
                (Input.a = false) + console.log('a ' + Input.a) :
                null
        })

        // S[↓]
        Input.adicionar('keydown', function (event) {
            event.key.toString().toLowerCase() == 's' ?
                (Input.s != true ?
                    (Input.s = true) + console.log('s ' + Input.s) :
                    null) :
                null
        })
        // S[↑]
        Input.adicionar('keyup', function (event) {
            event.key.toString().toLowerCase() == 's' ?
                (Input.s = false) + console.log('s ' + Input.s) :
                null
        })

        // D[↓]
        Input.adicionar('keydown', function (event) {
            event.key.toString().toLowerCase() == 'd' ?
                (Input.d != true ?
                    (Input.d = true) + console.log('d ' + Input.d) :
                    null) :
                null
        })
        // D[↑]
        Input.adicionar('keyup', function (event) {
            event.key.toString().toLowerCase() == 'd' ?
                (Input.d = false) + console.log('d ' + Input.d) :
                null
        })
    }
}