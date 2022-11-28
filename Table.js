class Table{
    constructor(arr){
        this.header = arr[0]
        arr.shift(); //removendo o cabeçalho da tabela
        this.rows = arr;
    }

    get RowCount(){ // O get transforma o metodo em atributo famoso campo virtual
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;