const ProjetoLei = require("../models/ProjetoLei")();

class ProjetoLeiRepository  {
    constructor(dbConnection) {
        this.connection = dbConnection;
    }

    save(projetoLei, callback) {
        if (!projetoLei){
            callback(new TypeError('Projeto de lei inválido.'), null);
            return;
        }

        // Atualiza projeto de lei

        if (projetoLei.id) {
            const statement = 'UPDATE projetos_lei SET titulo = ?, texto = ? WHERE id = ?';
            this.connection.query(
                statement,
                [ projetoLei.titulo, projetoLei.texto, projetoLei.id ],
                (error) => {
                    if (error) {
                        callback(error, null);
                    } else {
                        callback(
                            null,
                            new ProjetoLei(
                                projetoLei.titulo,
                                projetoLei.texto,
                                projetoLei.id
                            )
                        );
                    }

                    
                }
            )
        } else {
            // Cria um novo

            const statement = 'INSERT INTO projetos_lei (titulo, texto) VALUES (?, ?)';
            this.connection.query(
                statement,
                [ projetoLei.titulo, projetoLei.texto ],
                (error, result) => {
                    if (error) {
                        callback(error, null);
                    } else {
                        callback(
                            error,
                            new ProjetoLei(
                                projetoLei.titulo,
                                projetoLei.texto,
                                result.insertId
                            )
                        );
                    }
                }
            );

        }
    }

    list(callback) {
        const statement = 'SELECT * FROM projetos_lei';

        this.connection.query(statement, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(
                    error,
                    results.map(data => new ProjetoLei(data.titulo, data.texto, data.id))
                );
            }
        });
    }
}


module.exports = () => {
    return ProjetoLeiRepository;
};