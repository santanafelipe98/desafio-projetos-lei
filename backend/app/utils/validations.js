const { check } = require('express-validator');

module.exports.create = [
    check('titulo')
        .notEmpty()
        .withMessage('Não pode ser vazio'),
    check('titulo')
        .isLength({ max: 100 })
        .withMessage('Deve conter no máximo 100 caracteres.'),
    check('texto')
        .notEmpty()
        .withMessage('Não pode ser vazio'),
]

module.exports.update = [
    check('id')
        .notEmpty()
        .withMessage('Não pode ser vazio'),
    check('titulo')
        .isLength({ max: 100 })
        .withMessage('Deve conter no máximo 100 caracteres.'),
    check('texto')
        .notEmpty()
        .withMessage('Não pode ser vazio')
]