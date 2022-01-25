const { validationResult } = require('express-validator');

// Controller para criação

module.exports.create = (application, req, res) => {
    const validationErrors = validationResult(req);

    // Se não existir erros de validação, cadastra novo projeto de lei

    if (validationErrors.isEmpty()) {
        const body = req.body;

        const connection = application.config.dbConnection();
        const repository = new application.app.repositories.ProjetoLeiRepository(connection);
        const projetoLei = new application.app.models.ProjetoLei(body.titulo, body.texto);

        repository.save(projetoLei, (error, result) => {
            // Se ocorrer algum erro na execução da query

            if (error) {
                // Retorna resposta com erro

                res.status(400).json({
                    error: error.toString()
                });

                return;
            }

            res.status(200).json({
                payload: result
            });
        });
    } else {
        // Retorna resposta com erros

        const errors = validationErrors.array();

        res.status(400).json({
            error: 'Existem erros',
            errors
        });
    }
};

// Controller para atualização de projetos de lei

module.exports.update = (application, req, res) => {
    const validationErrors = validationResult(req);

     // Se não existir erros de validação, atualiza novo projeto de lei

    if (validationErrors.isEmpty()) {
        const id   = req.params.id;
        const body = req.body;

        const connection = application.config.dbConnection();
        const repository = new application.app.repositories.ProjetoLeiRepository(connection);
        const projetoLei = new application.app.models.ProjetoLei(body.titulo, body.texto, id);

        repository.save(projetoLei, (error, result) => {
            // Se ocorrer algum erro na execução da query

            if (error) {
                res.status(400).json({
                    error: error.toString()
                });

                return;
            }

            // Retorna resposta com os dados atualizados

            res.status(200).json({
                payload: result
            });
        });
    } else {
        // Retorna resposta com erros

        const errors = validationErrors.array();
        
        res.status(400).json({
            error: 'Existem erros',
            errors
        });
    }
    
};

// Controller para listagem de projetos de lei

module.exports.list = (application, req, res) => {
    const connection = application.config.dbConnection();
    const repository = new application.app.repositories.ProjetoLeiRepository(connection);

    repository.list((error, results) => {
        // Se ocorrer algum erro na execução da query

        if (error) {
            // Retorna resposta com erros

            res.status(400).json({
                error: error.toString()
            });

            return;
        }

        // Retorna resposta com lista de projetos

        res.status(200).json({
            payload: results
        });
    });
};