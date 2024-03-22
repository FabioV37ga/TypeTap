class Boundarie {
    static boundarieArray = Boundarie.boundarieArray ? this.boundarieArray : [];
    a;
    b;

    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.listar();
        this.criar();
    }

    listar() {
        var objeto = {
            "a": this.a,
            "b": this.b,
        }

        Boundarie.boundarieArray.push(objeto);
    }

    criar() {
        var element =
            `
        <div 
        class="square" 
        style="
            left:${this.a[0]}px; 
            bottom:${this.a[1]}px; 
            width:${(this.b[0] + 10) - this.a[0]}px;
            height:${(this.b[1] + 10) - this.a[1]}px">
        </div>
        `
        $(".janela").append(element)
        console.log($(".square"))
    }
}