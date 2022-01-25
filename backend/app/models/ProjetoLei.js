class ProjetoLei {
    constructor(titulo, texto, id = null) {
        this.id = id;
        this.titulo = titulo;
        this.texto = texto;
    }
}

module.exports = () => ProjetoLei;