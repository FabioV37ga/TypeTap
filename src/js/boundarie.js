class Boundarie {
    static boundarieArray = Boundarie.boundarieArray ? this.boundarieArray : [];
    a;
    b;
    type;

    constructor(a, b, type) {
        this.a = a;
        this.b = b;
        this.type = type;
        this.listar();
        this.criar();
    }

    listar() {
        var objeto = {
            "a": this.a,
            "b": this.b,
            "type": this.type
        }

        Boundarie.boundarieArray.push(objeto);
    }

    criar() {
        var color = this.type == "path" ? 'rgba(128, 0, 128, 0)' : 'orange'

        var element =
            `
        <div 
        class="square" 
        style="
            left:${this.a[0]}px; 
            bottom:${this.a[1]}px; 
            width:${(this.b[0] + 10) - this.a[0]}px;
            height:${(this.b[1] + 10) - this.a[1]}px;
            background: ${color}">
        </div>
        `
        $(".janela").append(element)
        console.log($(".square"))
    }
}