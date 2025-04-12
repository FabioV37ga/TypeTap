class Boundarie {
    static boundarieArray = Boundarie.boundarieArray ? this.boundarieArray : [];
    static lastId = 0;
    id;
    a;
    b;
    type;

    constructor(a, b, type) {
        this.id = Boundarie.lastId;
        Boundarie.lastId++
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
            "type": this.type,
            "id": this.id
        }

        Boundarie.boundarieArray.push(objeto);
    }

    criar() {
        var color = this.type == "path" ? 'rgba(128, 0, 128, 0.4)' : 'orange'

        var element =
            `
        <div 
        class="square" 
        style="
            left:${this.a[0]}px; 
            bottom:${this.a[1]}px; 
            width:${(this.b[0]) - this.a[0]}px;
            height:${(this.b[1]) - this.a[1]}px;
            background: ${color}">
            ${this.id}
        </div>
        `
        $(".janela").append(element)
    }
}