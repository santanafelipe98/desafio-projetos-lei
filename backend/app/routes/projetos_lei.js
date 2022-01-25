const validations = require('../utils/validations');

module.exports = (application) => {

    // Rota para listagem de projetos de lei

    application.get(
        '/projetos_lei',
        (req, res) => {
            application.app.controllers.projetos_lei.list(application, req, res);
        }
    );

    // Rota para criação de projetos de lei

    application.post(
        '/projetos_lei',
        validations.create,
        (req, res) => {
            application.app.controllers.projetos_lei.create(application, req, res);
        }
    );

    application.put(
        '/projetos_lei/:id',
        validations.update,
        (req, res) => {
            application.app.controllers.projetos_lei.update(application, req, res);
        }
    )
};